/* N1040 Study Quest — app engine (no dependencies). Progress lives in localStorage. */
(() => {
"use strict";
const KEY = "n1040quest_v1";
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const app = $("#app");

/* ---------- time estimates (minutes) ---------- */
function itemMins(it) {
  switch (it.t) {
    case "learn": return 1.3;
    case "mcq": return 0.7;
    case "sata": return 0.9;
    case "match": return 0.3 * it.pairs.length;
    case "sort": return 0.2 * it.items.length;
    case "order": return 1;
    case "cloze": return 2;
    case "flash": return 0.3 * it.cards.length;
    case "reflect": return 4;
  } return 1;
}
const lessonMins = L => Math.max(3, Math.round(L.items.reduce((s, it) => s + itemMins(it), 0) * 1));

/* ---------- state ---------- */
const fresh = () => ({ petals: 0, done: {}, wrong: {}, journal: {}, badges: {}, secs: 0, streak: { last: null, n: 0 }, name: "", answered: 0, correct: 0, examBest: null });
let S;
try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { S = fresh(); }
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

const allLessons = [];
COURSE.weeks.forEach(w => w.lessons.forEach((L, i) => allLessons.push({ L, w, i })));
const EXAM = Object.assign({}, COURSE.exam, { exam: true });
const totalMins = allLessons.reduce((s, x) => s + lessonMins(x.L), 0) + EXAM.mins;

const LEVELS = [
  [0, "Pre-Nursing Bud"], [150, "First-Year Blossom"], [400, "Student Nurse"], [750, "Clinical Rookie"],
  [1150, "Praxis Pro"], [1600, "Reflexive Practitioner"], [2100, "Charge Nurse of Theory"], [2700, "N1040 Legend"] ];
function level(p = S.petals) {
  let i = 0; while (i + 1 < LEVELS.length && p >= LEVELS[i + 1][0]) i++;
  const cur = LEVELS[i], nxt = LEVELS[i + 1];
  return { i, name: cur[1], pct: nxt ? (p - cur[0]) / (nxt[0] - cur[0]) : 1, next: nxt };
}

function bumpStreak() {
  const today = new Date().toDateString();
  if (S.streak.last === today) return;
  const y = new Date(Date.now() - 864e5).toDateString();
  S.streak.n = S.streak.last === y ? S.streak.n + 1 : 1;
  S.streak.last = today;
}
const weekDone = w => w.lessons.every(L => S.done[L.id]);
const lessonUnlocked = (w, i) => i === 0 || !!S.done[w.lessons[i - 1].id];
const allWeeksDone = () => COURSE.weeks.every(weekDone);

/* active-time tracker */
let inLesson = false;
setInterval(() => { if (inLesson && !document.hidden) { S.secs += 10; save(); } }, 10000);
const fmtTime = s => { const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return h ? `${h}h ${m}m` : `${m}m`; };

/* ---------- fx ---------- */
function confetti(n = 70) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = el("div", "confetti"); document.body.appendChild(box);
  const bits = ["🌸", "💗", "✨", "🌷", "💖", "⭐"];
  for (let i = 0; i < n; i++) {
    const s = el("span", null, Math.random() < .45 ? bits[i % bits.length] : "");
    if (!s.textContent) { s.className = "dot"; s.style.background = ["#ff5c9a", "#ffb3cf", "#f7c948", "#c2185b", "#fff"][i % 5]; }
    s.style.left = Math.random() * 100 + "vw"; s.style.animationDelay = Math.random() * .6 + "s";
    s.style.setProperty("--dx", (Math.random() * 160 - 80) + "px"); s.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
    box.appendChild(s);
  }
  setTimeout(() => box.remove(), 3200);
}
function floatPetals(n, anchor) {
  const f = el("div", "float-petals", `+${n} 🌸`);
  const r = (anchor || $(".topbar") || document.body).getBoundingClientRect();
  f.style.left = (r.left + r.width / 2) + "px"; f.style.top = (r.top + 10) + "px";
  document.body.appendChild(f); setTimeout(() => f.remove(), 1200);
}
function toast(html, ms = 2200) {
  const t = el("div", "toast", html); document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("in"));
  setTimeout(() => { t.classList.remove("in"); setTimeout(() => t.remove(), 300); }, ms);
}
function modal(html, btn = "Yay!", onClose) {
  const m = el("div", "modal-bg"); const c = el("div", "modal", html);
  const b = el("button", "btn primary", btn); c.appendChild(b); m.appendChild(c); document.body.appendChild(m);
  b.onclick = () => { m.remove(); onClose && onClose(); }; b.focus();
}

/* ---------- top bar ---------- */
function topbar() {
  const lv = level();
  const t = el("header", "topbar");
  t.innerHTML = `<div class="tb-left"><span class="logo">🌸</span><div><b>N1040 Study Quest</b><small>${esc(lv.name)}</small></div></div>
    <div class="tb-stats"><span title="Petals">🌸 ${S.petals}</span><span title="Day streak">🔥 ${S.streak.n}</span></div>
    <div class="lvbar"><i style="width:${Math.round(lv.pct * 100)}%"></i></div>`;
  return t;
}
function tabbar(active) {
  const nav = el("nav", "tabbar");
  [["path", "🗺️", "Path"], ["garden", "🌷", "Garden"], ["review", "🔁", "Review"]].forEach(([id, ic, lab]) => {
    const b = el("button", active === id ? "on" : "", `<span>${ic}</span>${lab}`);
    b.onclick = () => go(id); nav.appendChild(b);
  });
  return nav;
}
function go(view, arg) {
  inLesson = false; window.scrollTo(0, 0);
  if (view === "path") renderPath(); else if (view === "garden") renderGarden(); else if (view === "review") renderReview();
  else if (view === "cert") renderCert();
  if (view !== "lesson") history.replaceState(null, "", "#" + view);
}

/* ---------- PATH ---------- */
function renderPath() {
  app.innerHTML = ""; app.appendChild(topbar());
  const main = el("main", "path");
  const doneCount = allLessons.filter(x => S.done[x.L.id]).length;
  const intro = el("section", "hero");
  intro.innerHTML = `<h1>Midterm prep, one petal at a time</h1>
    <p>${esc(COURSE.subtitle)}</p>
    <div class="hero-stats"><div><b>${doneCount}/${allLessons.length}</b><span>lessons</span></div><div><b>~${Math.round(totalMins / 60 * 10) / 10}h</b><span>total</span></div><div><b>${fmtTime(S.secs)}</b><span>studied</span></div></div>
    <div class="progress"><i style="width:${doneCount / allLessons.length * 100}%"></i></div>`;
  main.appendChild(intro);
  if (!S.name) {
    const nm = el("div", "card namecard", `<label>What should we call you? <input id="nm" maxlength="30" placeholder="Your name" autocomplete="given-name"></label><button class="btn small">Save</button>`);
    nm.querySelector("button").onclick = () => { const v = nm.querySelector("input").value.trim(); if (v) { S.name = v; save(); toast(`Hi ${esc(v)}! 💗`); renderPath(); } };
    main.appendChild(nm);
  }
  COURSE.weeks.forEach(w => {
    const sec = el("section", "week");
    const wd = weekDone(w);
    sec.innerHTML = `<div class="week-head"><div class="wk-num">Week ${w.num}</div><h2>${esc(w.title)}</h2><p>${esc(w.blurb)}</p>
      <div class="wk-meta"><span>📅 Lecture ${esc(w.date)}</span><span>⏱ ~${w.lessons.reduce((s, L) => s + lessonMins(L), 0)} min</span><span class="badge-chip ${wd ? "got" : ""}">${w.badge.icon} ${esc(w.badge.name)}${S.badges[w.id] === "gold" ? " 👑" : ""}</span></div></div>`;
    const trail = el("div", "trail");
    w.lessons.forEach((L, i) => {
      const unlocked = lessonUnlocked(w, i), done = S.done[L.id];
      const n = el("button", `node ${done ? "done" : unlocked ? "open" : "locked"} ${L.boss ? "boss" : ""} pos${i % 4}`);
      n.innerHTML = `<span class="bubble">${done ? L.flower : unlocked ? (L.boss ? "⚔️" : "🌱") : "🔒"}</span>
        <span class="lbl"><b>${esc(L.title)}</b><small>${lessonMins(L)} min${done ? ` · ${done.acc}%` : ""}</small></span>`;
      n.disabled = !unlocked;
      n.onclick = () => startLesson(L, w);
      trail.appendChild(n);
    });
    sec.appendChild(trail); main.appendChild(sec);
  });
  const ex = el("section", "week exam-sec");
  const unlockedExam = allWeeksDone();
  ex.innerHTML = `<div class="week-head"><div class="wk-num">Final boss</div><h2>🏆 ${esc(EXAM.title)}</h2><p>${esc(EXAM.blurb)}</p>
    <div class="wk-meta"><span>⏱ ~${EXAM.mins} min</span>${S.examBest != null ? `<span>Best: ${S.examBest}%</span>` : ""}</div></div>`;
  const eb = el("button", "btn primary wide", unlockedExam ? (S.examBest != null ? "Retake mock midterm" : "Start mock midterm") : "🔒 Finish all weeks to unlock");
  eb.onclick = () => {
    if (!unlockedExam && !confirm("You haven't finished every week yet. Start the mock midterm anyway?")) return;
    startLesson(EXAM, null);
  };
  ex.appendChild(eb);
  if (S.examBest != null && S.examBest >= 70) { const cb = el("button", "btn wide", "🎓 View your certificate"); cb.onclick = () => go("cert"); ex.appendChild(cb); }
  main.appendChild(ex);
  main.appendChild(el("p", "foot", "Week 5 was reading week · Midterm covers Weeks 1–6 classes and readings · Progress saves on this device."));
  app.appendChild(main); app.appendChild(tabbar("path"));
}

/* ---------- LESSON PLAYER ---------- */
function buildExamItems() {
  const pool = [];
  COURSE.weeks.forEach(w => w.lessons.forEach(L => L.items.forEach((it, i) => { if (it.t === "mcq" || it.t === "sata") pool.push(Object.assign({ _key: L.id + ":" + i }, it)); })));
  const extra = shuffle(pool).slice(0, EXAM.sample || 0);
  return shuffle(EXAM.items.map((it, i) => Object.assign({ _key: "exam:" + i }, it)).concat(extra));
}

function startLesson(L, w, customItems) {
  inLesson = true; bumpStreak(); save();
  const isExam = !!L.exam;
  const items = customItems || (isExam ? buildExamItems() : L.items.map((it, i) => Object.assign({ _key: L.id + ":" + i }, it)));
  const queue = items.map(it => ({ it, retry: false }));
  const total = queue.length;
  const run = { L, w, idx: 0, firstTry: 0, graded: 0, petals: 0, combo: 0, best: 0, examLog: [], isExam, isReview: !!customItems, total };

  app.innerHTML = "";
  const shell = el("div", "player");
  shell.innerHTML = `<div class="p-top"><button class="x" aria-label="Exit lesson">✕</button><div class="p-prog"><i></i></div><span class="p-combo"></span></div>
    <div class="p-body"></div><div class="p-feedback"></div><div class="p-foot"><button class="btn primary wide" disabled>Check</button></div>`;
  app.appendChild(shell);
  const body = $(".p-body", shell), fb = $(".p-feedback", shell), btn = $(".p-foot .btn", shell), prog = $(".p-prog i", shell), comboEl = $(".p-combo", shell);
  $(".x", shell).onclick = () => { if (confirm("Leave this lesson? Progress in this lesson won’t be saved.")) go("path"); };

  let ctx;
  function award(n) { if (n <= 0) return; run.petals += n; S.petals += n; save(); floatPetals(n, btn); }
  function setProg() { prog.style.width = Math.min(100, run.idx / queue.length * 100) + "%"; }

  function next() {
    fb.className = "p-feedback"; fb.innerHTML = ""; body.scrollTop = 0; window.scrollTo(0, 0);
    if (run.idx >= queue.length) return finish();
    setProg();
    const q = queue[run.idx];
    body.innerHTML = ""; body.classList.remove("shake");
    ctx = { ready: false, item: q.it, retry: q.retry, check: null, mode: "check" };
    btn.disabled = true;
    const r = RENDER[q.it.t](q.it, body, ctx, run);
    btn.textContent = ctx.label || (["learn"].includes(q.it.t) ? "Continue" : "Check");
    ctx.setReady = v => { ctx.ready = v; btn.disabled = !v; };
    ctx.setReady(!!ctx.ready);
    ctx.autoNext = () => { run.idx++; next(); };
    ctx.award = award;
    if (q.it.t === "learn") ctx.setReady(true);
    if (r && r.after) r.after();
  }

  function grade(correct, why, extraHtml) {
    const q = queue[run.idx];
    if (!q.retry) {
      run.graded++; S.answered++;
      if (correct) { run.firstTry++; S.correct++; }
      if (!run.isExam) {
        if (correct) { delete S.wrong[q.it._key]; } else if (q.it._key) { S.wrong[q.it._key] = Date.now(); }
      }
    } else if (correct && q.it._key) delete S.wrong[q.it._key];
    if (run.isExam) { run.examLog.push({ it: q.it, correct, extraHtml }); ctx.mode = "next"; run.idx++; save(); next(); return; }
    if (correct) {
      run.combo++; run.best = Math.max(run.best, run.combo);
      award(q.retry ? 3 : 10);
      if (run.combo && run.combo % 3 === 0) { award(5); comboEl.textContent = `🔥 ×${run.combo}`; comboEl.classList.remove("pop"); void comboEl.offsetWidth; comboEl.classList.add("pop"); }
    } else {
      run.combo = 0; comboEl.textContent = "";
      if (!q.retry && ["mcq", "sata", "cloze", "order"].includes(q.it.t)) queue.push({ it: q.it, retry: true });
      body.classList.add("shake");
    }
    const praise = ["Nailed it!", "Yes! 💗", "Brilliant!", "So good!", "Perfect!", "You got it!"];
    fb.className = "p-feedback show " + (correct ? "good" : "bad");
    fb.innerHTML = `<b>${correct ? praise[Math.floor(Math.random() * praise.length)] : "Not quite — you’ll see this one again."}</b>${extraHtml || ""}${why ? `<p>${why}</p>` : ""}`;
    ctx.mode = "next"; btn.textContent = "Continue"; btn.disabled = false;
    save();
  }
  ctxGrade = grade;

  btn.onclick = () => {
    if (!ctx) return;
    if (ctx.mode === "next") { run.idx++; return next(); }
    if (ctx.item.t === "learn") { award(2); run.idx++; return next(); }
    const res = ctx.check && ctx.check();
    if (!res) return;
    if (res.skipGrade) { if (res.petals) award(res.petals); if (res.feedback) { fb.className = "p-feedback show good"; fb.innerHTML = res.feedback; ctx.mode = "next"; btn.textContent = "Continue"; } else { run.idx++; next(); } return; }
    grade(res.correct, res.why, res.extra);
  };

  function finish() {
    inLesson = false; prog.style.width = "100%";
    const acc = run.graded ? Math.round(run.firstTry / run.graded * 100) : 100;
    if (run.isReview) {
      save();
      shell.innerHTML = `<div class="finish"><div class="big">🔁</div><h2>Review round done</h2><p>${run.firstTry}/${run.graded} correct · +${run.petals} 🌸</p><button class="btn primary wide">Back</button></div>`;
      $(".btn", shell).onclick = () => go("review"); confetti(30); return;
    }
    if (run.isExam) return examResults(run, acc, shell);
    const first = !S.done[L.id];
    const bonus = first ? (L.boss ? (acc >= 80 ? 60 : 30) : 20) : 5;
    award(bonus);
    const prev = S.done[L.id];
    S.done[L.id] = { acc: Math.max(acc, prev ? prev.acc : 0), at: Date.now() };
    let badgeMsg = "";
    if (w && weekDone(w) && !S.badges[w.id]) {
      S.badges[w.id] = "earned"; badgeMsg = `<div class="badge-won"><span>${w.badge.icon}</span><b>Badge unlocked: ${esc(w.badge.name)}</b><small>Week ${w.num} complete!</small></div>`;
    }
    if (w && L.boss && acc >= 80 && S.badges[w.id]) { if (S.badges[w.id] !== "gold") badgeMsg += `<p class="gold">👑 Gold crown — 80%+ on the boss quiz!</p>`; S.badges[w.id] = "gold"; }
    save();
    const lv = level();
    shell.innerHTML = `<div class="finish">
      <div class="bloom">${L.flower}</div>
      <h2>${L.boss ? "Boss defeated!" : "Lesson complete!"}</h2>
      <p class="sub">${first ? "A new flower bloomed in your garden." : "Practice makes perfect."}</p>
      <div class="fin-stats"><div><b>${acc}%</b><span>first-try</span></div><div><b>+${run.petals}</b><span>petals</span></div><div><b>${run.best}</b><span>best combo</span></div></div>
      ${badgeMsg}
      <p class="lvl">Level: <b>${esc(lv.name)}</b>${lv.next ? ` · ${lv.next[0] - S.petals} 🌸 to ${esc(lv.next[1])}` : ""}</p>
      <button class="btn primary wide">Continue</button></div>`;
    $(".btn", shell).onclick = () => go("path");
    confetti(badgeMsg ? 120 : 60);
    if (badgeMsg && allWeeksDone()) setTimeout(() => toast("🏆 Mock midterm unlocked!"), 1200);
  }

  next();
}
let ctxGrade = null;

function examResults(run, acc, shell) {
  const first = S.examBest == null;
  S.examBest = Math.max(acc, S.examBest || 0);
  const earned = Math.round(acc * 2) + (acc >= 85 ? 50 : 0);
  S.petals += earned;
  if (acc >= 70) S.badges.exam = acc >= 85 ? "gold" : "earned";
  S.done.exam = { acc: S.examBest, at: Date.now() };
  save();
  const verdict = acc >= 85 ? "Midterm Queen 👑 — you’re ready." : acc >= 70 ? "Passed! Review the misses below and you’re set." : "Good practice run — review the misses, revisit weak weeks, and retake.";
  shell.innerHTML = `<div class="finish exam-fin"><div class="big">${acc >= 70 ? "🏆" : "📚"}</div><h2>${acc}%</h2><p class="sub">${run.firstTry}/${run.graded} correct · ${verdict}</p><p>+${earned} 🌸</p>
    <div class="fin-actions"><button class="btn primary" id="toPath">Back to path</button>${acc >= 70 ? `<button class="btn" id="toCert">🎓 Certificate</button>` : ""}</div>
    <h3>Answer review</h3><div class="ex-review"></div></div>`;
  const list = $(".ex-review", shell);
  run.examLog.forEach((e, i) => {
    const it = e.it, right = it.t === "mcq" ? it.opts[it.a] : it.a.map(k => it.opts[k]).join("; ");
    const d = el("details", e.correct ? "ok" : "no");
    d.innerHTML = `<summary><span>${e.correct ? "✅" : "❌"}</span> Q${i + 1}. ${esc(it.q)}</summary>${e.extraHtml || ""}<p><b>Correct:</b> ${esc(right)}</p><p class="why">${it.why || ""}</p>`;
    if (!e.correct) d.open = true;
    list.appendChild(d);
  });
  $("#toPath", shell).onclick = () => go("path");
  const c = $("#toCert", shell); if (c) c.onclick = () => go("cert");
  if (acc >= 70) confetti(140);
}

/* ---------- item renderers ---------- */
const RENDER = {
  learn(it, body) {
    body.appendChild(el("div", "learn", `<div class="kicker">📖 Learn</div><h2>${it.title}</h2><div class="lc">${it.html}</div>`));
  },

  mcq(it, body, ctx, run) {
    const order = shuffle(it.opts.map((_, i) => i));
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">${ctx.retry ? "🔁 Try again" : "❓ Question"}</div><h2 class="qtext">${esc(it.q)}</h2>`;
    const list = el("div", "opts"); let sel = null;
    order.forEach(i => {
      const b = el("button", "opt", esc(it.opts[i])); b.dataset.i = i;
      b.onclick = () => { if (ctx.mode === "next") return; list.querySelectorAll(".opt").forEach(o => o.classList.remove("sel")); b.classList.add("sel"); sel = i; ctx.setReady(true); };
      list.appendChild(b);
    });
    w.appendChild(list); body.appendChild(w);
    ctx.check = () => {
      const correct = sel === it.a;
      if (!run.isExam) list.querySelectorAll(".opt").forEach(o => { const i = +o.dataset.i; if (i === it.a) o.classList.add("right"); else if (i === sel) o.classList.add("wrong"); o.disabled = true; });
      return { correct, why: it.why, extra: run.isExam && !correct ? `<p><b>You chose:</b> ${esc(it.opts[sel])}</p>` : "" };
    };
  },

  sata(it, body, ctx, run) {
    const order = shuffle(it.opts.map((_, i) => i));
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">${ctx.retry ? "🔁 Try again" : "☑️ Select all that apply"}</div><h2 class="qtext">${esc(it.q)}</h2>`;
    const list = el("div", "opts"); const sel = new Set();
    order.forEach(i => {
      const b = el("button", "opt check", `<span class="box"></span>${esc(it.opts[i])}`); b.dataset.i = i;
      b.onclick = () => { if (ctx.mode === "next") return; sel.has(i) ? sel.delete(i) : sel.add(i); b.classList.toggle("sel"); ctx.setReady(sel.size > 0); };
      list.appendChild(b);
    });
    w.appendChild(list); body.appendChild(w);
    ctx.check = () => {
      const ans = new Set(it.a); const correct = sel.size === ans.size && [...sel].every(x => ans.has(x));
      if (!run.isExam) list.querySelectorAll(".opt").forEach(o => { const i = +o.dataset.i; if (ans.has(i)) o.classList.add(sel.has(i) ? "right" : "missed"); else if (sel.has(i)) o.classList.add("wrong"); o.disabled = true; });
      return { correct, why: it.why, extra: run.isExam && !correct ? `<p><b>You chose:</b> ${esc([...sel].map(k => it.opts[k]).join("; "))}</p>` : "" };
    };
  },

  match(it, body, ctx) {
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">🧩 Match</div><h2>${esc(it.title)}</h2><p class="hint">Tap a term, then its partner.</p>`;
    const grid = el("div", "match");
    const L = el("div", "mcol"), R = el("div", "mcol");
    let pick = null, matched = 0, misses = 0;
    shuffle(it.pairs.map((p, i) => i)).forEach(i => { const b = el("button", "mt term", esc(it.pairs[i][0])); b.dataset.i = i; b.dataset.s = "L"; L.appendChild(b); });
    shuffle(it.pairs.map((p, i) => i)).forEach(i => { const b = el("button", "mt def", esc(it.pairs[i][1])); b.dataset.i = i; b.dataset.s = "R"; R.appendChild(b); });
    grid.append(L, R); w.appendChild(grid); body.appendChild(w);
    grid.onclick = e => {
      const b = e.target.closest(".mt"); if (!b || b.classList.contains("ok")) return;
      if (!pick || pick.dataset.s === b.dataset.s) { grid.querySelectorAll(".pick").forEach(x => x.classList.remove("pick")); pick = b; b.classList.add("pick"); return; }
      if (pick.dataset.i === b.dataset.i) {
        pick.classList.remove("pick"); pick.classList.add("ok"); b.classList.add("ok"); pick.disabled = b.disabled = true; matched++; pick = null;
        if (matched === it.pairs.length) { ctx.setReady(true); }
      } else {
        misses++; const a = pick; [a, b].forEach(x => x.classList.add("no")); setTimeout(() => [a, b].forEach(x => x.classList.remove("no", "pick")), 450); pick = null;
      }
    };
    ctx.label = "Check";
    ctx.check = () => ({ correct: misses === 0, why: misses ? `${misses} mismatch${misses > 1 ? "es" : ""} along the way — all matched now.` : "Flawless matching!" });
  },

  sort(it, body, ctx) {
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">🗂️ Sort it</div><h2>${esc(it.title)}</h2>`;
    const items = shuffle(it.items); let k = 0, misses = 0;
    const card = el("div", "sort-card"); const counter = el("p", "hint");
    const bk = el("div", "buckets" + (it.buckets.length > 3 ? " many" : ""));
    const log = el("div", "sort-log");
    it.buckets.forEach((b, bi) => { const btn = el("button", "bucket", esc(b)); btn.onclick = () => choose(bi, btn); bk.appendChild(btn); });
    w.append(counter, card, bk, log); body.appendChild(w);
    function show() { counter.textContent = `${k + 1} of ${items.length}`; card.textContent = items[k][0]; card.classList.remove("flyin"); void card.offsetWidth; card.classList.add("flyin"); }
    let lock = false;
    function choose(bi, btn) {
      if (lock || k >= items.length) return;
      const right = items[k][1]; const ok = bi === right;
      if (!ok) misses++;
      log.insertBefore(el("div", ok ? "lg ok" : "lg no", `${ok ? "✓" : "✗"} ${esc(items[k][0])} → <b>${esc(it.buckets[right])}</b>`), log.firstChild);
      btn.classList.add(ok ? "flash-ok" : "flash-no"); lock = true;
      setTimeout(() => { btn.classList.remove("flash-ok", "flash-no"); lock = false; k++; if (k < items.length) show(); else { card.textContent = "All sorted! 🎉"; counter.textContent = ""; bk.classList.add("done"); ctx.setReady(true); } }, ok ? 350 : 900);
    }
    show();
    ctx.check = () => ({ correct: misses === 0, why: misses ? `${items.length - misses}/${items.length} sorted correctly. Check the list above for the ones you missed.` : `${items.length}/${items.length} — perfect sort!` });
  },

  order(it, body, ctx) {
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">🔢 Put in order</div><h2>${esc(it.title)}</h2><p class="hint">Tap items in the correct order. Tap a placed item to undo.</p>`;
    const seq = el("ol", "seq"); const pool = el("div", "pool"); const chosen = [];
    const items = shuffle(it.steps.map((s, i) => i));
    function draw() {
      seq.innerHTML = ""; pool.innerHTML = "";
      chosen.forEach((i, n) => { const li = el("li", "chip placed", esc(it.steps[i])); li.onclick = () => { if (ctx.mode === "next") return; chosen.splice(n, 1); draw(); }; seq.appendChild(li); });
      items.filter(i => !chosen.includes(i)).forEach(i => { const b = el("button", "chip", esc(it.steps[i])); b.onclick = () => { chosen.push(i); draw(); }; pool.appendChild(b); });
      ctx.setReady && ctx.setReady(chosen.length === it.steps.length);
    }
    w.append(seq, pool); body.appendChild(w); draw();
    ctx.check = () => {
      const correct = chosen.every((v, i) => v === i);
      [...seq.children].forEach((li, n) => li.classList.add(chosen[n] === n ? "right" : "wrong"));
      return { correct, why: it.why, extra: correct ? "" : `<ol class="answer">${it.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>` };
    };
  },

  cloze(it, body, ctx) {
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">✍️ Fill the blanks</div><h2>${esc(it.title)}</h2>`;
    const answers = []; let n = 0;
    const html = esc(it.text).replace(/\[\[(.+?)\]\]/g, (_, a) => { answers.push(a); return `<select data-n="${n++}"><option value="">choose…</option>${shuffle(it.bank).map(b => `<option>${esc(b)}</option>`).join("")}</select>`; });
    const p = el("p", "cloze", html); w.appendChild(p); body.appendChild(w);
    const sels = [...p.querySelectorAll("select")];
    sels.forEach(s => s.onchange = () => ctx.setReady(sels.every(x => x.value)));
    ctx.check = () => {
      let good = 0; sels.forEach((s, i) => { const ok = s.value === answers[i]; if (ok) good++; s.classList.add(ok ? "right" : "wrong"); s.disabled = true; });
      return { correct: good === sels.length, why: `${good}/${sels.length} blanks correct. Answers in order: ${answers.join(" → ")}.` };
    };
  },

  flash(it, body, ctx) {
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">🃏 Flashcards</div><h2>${esc(it.title)}</h2><p class="hint">Tap the card to flip. Keep going until every card is “Got it”.</p>`;
    let deck = shuffle(it.cards); const left = el("p", "hint center");
    const card = el("button", "flashcard"); const ctr = el("div", "fc-btns");
    const again = el("button", "btn", "Still learning"), got = el("button", "btn primary", "Got it ✓");
    ctr.append(again, got); w.append(left, card, ctr); body.appendChild(w);
    function draw() {
      if (!deck.length) { card.innerHTML = `<div class="face">All cards learned! 🌟</div>`; ctr.style.display = "none"; left.textContent = ""; ctx.setReady(true); return; }
      card.classList.remove("flipped"); card.innerHTML = `<div class="face front">${esc(deck[0][0])}</div><div class="face back">${esc(deck[0][1])}</div>`;
      left.textContent = `${deck.length} card${deck.length > 1 ? "s" : ""} left`;
    }
    card.onclick = () => card.classList.toggle("flipped");
    again.onclick = () => { deck.push(deck.shift()); draw(); };
    got.onclick = () => { deck.shift(); draw(); };
    draw(); ctx.label = "Continue";
    ctx.check = () => ({ skipGrade: true, petals: 8 });
  },

  reflect(it, body, ctx) {
    const key = it._key; const prev = (S.journal[key] || {}).text || "";
    const w = el("div", "q");
    w.innerHTML = `<div class="kicker">💭 Reflect</div><h2 class="qtext">${esc(it.q)}</h2><p class="hint">Write at least ${it.min} words. This is just for you — it’s saved to your Journal.</p>`;
    const ta = el("textarea", "reflect"); ta.value = prev; ta.rows = 7; ta.placeholder = "Start typing…";
    const wc = el("div", "wc");
    w.append(ta, wc); body.appendChild(w);
    const count = () => (ta.value.trim().match(/\S+/g) || []).length;
    const upd = () => { const c = count(); wc.textContent = `${c} / ${it.min} words`; wc.classList.toggle("ok", c >= it.min); ctx.setReady(c >= it.min); };
    ta.oninput = upd; setTimeout(upd);
    ctx.label = "Submit reflection";
    ctx.check = () => {
      S.journal[key] = { q: it.q, text: ta.value.trim(), at: Date.now() }; save();
      ta.disabled = true;
      return { skipGrade: true, petals: 15, feedback: `<b>Saved to your journal 💗 +15 🌸</b><div class="model"><div class="kicker">Compare with a strong answer</div>${it.model}</div>` };
    };
  }
};

/* ---------- GARDEN (rewards) ---------- */
function renderGarden() {
  app.innerHTML = ""; app.appendChild(topbar());
  const main = el("main", "garden");
  const lv = level();
  const acc = S.answered ? Math.round(S.correct / S.answered * 100) : 0;
  main.innerHTML = `<section class="card lvcard"><div class="kicker">Your level</div><h2>${esc(lv.name)}</h2>
    <div class="progress"><i style="width:${lv.pct * 100}%"></i></div>
    <p>${lv.next ? `${lv.next[0] - S.petals} 🌸 to <b>${esc(lv.next[1])}</b>` : "Max level reached — legendary!"}</p>
    <div class="hero-stats"><div><b>🌸 ${S.petals}</b><span>petals</span></div><div><b>${acc}%</b><span>accuracy</span></div><div><b>${fmtTime(S.secs)}</b><span>studied</span></div><div><b>🔥 ${S.streak.n}</b><span>day streak</span></div></div></section>`;
  const g = el("section", "card"); g.innerHTML = `<div class="kicker">Flower garden</div><h2>One bloom per lesson</h2>`;
  const bed = el("div", "bed");
  allLessons.forEach(({ L }) => { const d = S.done[L.id]; bed.appendChild(el("div", "plot " + (d ? "grown" : ""), `<span>${d ? L.flower : "🌱"}</span><small>${esc(L.title)}</small>`)); });
  g.appendChild(bed); main.appendChild(g);
  const b = el("section", "card"); b.innerHTML = `<div class="kicker">Badges</div><h2>Week badges</h2>`;
  const row = el("div", "badges");
  COURSE.weeks.concat([{ id: "exam", badge: { name: "Midterm Queen", icon: "🏆" }, num: "Exam" }]).forEach(w => {
    const st = S.badges[w.id];
    row.appendChild(el("div", "bdg " + (st ? "got" : ""), `<span>${st ? w.badge.icon : "❔"}</span><b>${esc(w.badge.name)}</b><small>${st === "gold" ? "👑 Gold" : st ? "Earned" : (w.num === "Exam" ? "Score 70%+" : "Finish Week " + w.num)}</small>`));
  });
  b.appendChild(row); main.appendChild(b);
  const j = el("section", "card"); j.innerHTML = `<div class="kicker">Journal</div><h2>Your reflections</h2>`;
  const entries = Object.values(S.journal).sort((a, b) => a.at - b.at);
  if (!entries.length) j.appendChild(el("p", "muted", "Reflections you write in lessons appear here — great to skim the night before the exam."));
  entries.forEach(e => { const d = el("details", "jr"); d.innerHTML = `<summary>${esc(e.q)}</summary><p>${esc(e.text).replace(/\n/g, "<br>")}</p>`; j.appendChild(d); });
  main.appendChild(j);
  const s = el("section", "card"); s.innerHTML = `<div class="kicker">Settings</div>`;
  const rn = el("button", "btn small", "Change name"); rn.onclick = () => { const v = prompt("Your name:", S.name); if (v != null) { S.name = v.trim(); save(); toast("Saved"); } };
  const ex = el("button", "btn small", "Export progress"); ex.onclick = () => { const blob = new Blob([JSON.stringify(S)], { type: "application/json" }); const a = el("a"); a.href = URL.createObjectURL(blob); a.download = "n1040-progress.json"; a.click(); };
  const im = el("button", "btn small", "Import progress"); im.onclick = () => { const i = el("input"); i.type = "file"; i.accept = ".json"; i.onchange = async () => { try { S = Object.assign(fresh(), JSON.parse(await i.files[0].text())); save(); toast("Imported!"); renderGarden(); } catch { toast("That file didn’t work"); } }; i.click(); };
  const rs = el("button", "btn small danger", "Reset everything"); rs.onclick = () => { if (confirm("Erase ALL progress, petals and journal entries?")) { S = fresh(); save(); renderGarden(); } };
  s.append(rn, ex, im, rs); main.appendChild(s);
  app.appendChild(main); app.appendChild(tabbar("garden"));
}

/* ---------- REVIEW ---------- */
function findItem(key) {
  const [lid, i] = key.split(":");
  if (lid === "exam") return EXAM.items[+i] && Object.assign({ _key: key }, EXAM.items[+i]);
  const x = allLessons.find(x => x.L.id === lid); return x && x.L.items[+i] && Object.assign({ _key: key }, x.L.items[+i]);
}
function renderReview() {
  app.innerHTML = ""; app.appendChild(topbar());
  const main = el("main", "review");
  const keys = Object.keys(S.wrong).filter(findItem);
  const c = el("section", "card");
  c.innerHTML = `<div class="kicker">Mistake deck</div><h2>${keys.length ? `${keys.length} question${keys.length > 1 ? "s" : ""} to review` : "Nothing to review yet ✨"}</h2>
    <p class="muted">Questions you miss land here. Get them right to clear them.</p>`;
  if (keys.length) { const b = el("button", "btn primary wide", "Start review round"); b.onclick = () => startLesson({ id: "review", title: "Review", flower: "🔁" }, null, shuffle(keys).slice(0, 15).map(findItem)); c.appendChild(b); }
  main.appendChild(c);
  const q = el("section", "card"); q.innerHTML = `<div class="kicker">Quick-fire</div><h2>Random 10</h2><p class="muted">Ten random questions from any week you’ve started.</p>`;
  const qb = el("button", "btn wide", "Shuffle me 10");
  qb.onclick = () => {
    const pool = []; const started = allLessons.filter(x => S.done[x.L.id]);
    (started.length ? started : allLessons).forEach(({ L }) => { L.items.forEach((it, i) => { if (it.t === "mcq" || it.t === "sata") pool.push(Object.assign({ _key: L.id + ":" + i }, it)); }); });
    startLesson({ id: "review", title: "Quick-fire", flower: "⚡" }, null, shuffle(pool).slice(0, 10));
  };
  q.appendChild(qb); main.appendChild(q);
  const cs = el("section", "card cheat"); cs.innerHTML = `<div class="kicker">Cheat sheet</div><h2>Must-know comparisons</h2>${CHEAT}`;
  main.appendChild(cs);
  app.appendChild(main); app.appendChild(tabbar("review"));
}
const CHEAT = `
<details><summary>Cultural imposition vs competence vs safety vs humility</summary><ul>
<li><b>Imposition</b> — imposing your beliefs because you think they’re superior</li><li><b>Competence</b> — knowledge &amp; skill for culturally appropriate care (critiqued: implies culture can be mastered → stereotypes)</li><li><b>Safety</b> — gaze on the culture of health care, power, policies; how people are perceived/treated</li><li><b>Humility</b> — life-long self-reflection; nurse as learner; dismantle power imbalances</li></ul></details>
<details><summary>Five patterns of knowing</summary><ul><li><b>Empiric</b> — science/evidence</li><li><b>Personal</b> — self-awareness, biases, own experiences</li><li><b>Ethical</b> — right/wrong; moral distress</li><li><b>Aesthetic</b> — intuitive, holistic art of the moment</li><li><b>Emancipatory</b> — social justice (added after Carper’s four)</li></ul></details>
<details><summary>Six forms of power</summary><ul><li>Legitimate — title/position</li><li>Expert — training</li><li>Reward — incentives</li><li>Coercive — penalties</li><li>Informational — sharing info</li><li>Referent — respect &amp; trust</li></ul></details>
<details><summary>Reflection levels &amp; Kolb</summary><ul><li>Reflection — look back to learn</li><li>Critical reflection — question assumptions, beliefs, power (why?)</li><li>Reflexivity — continuous self-examination</li><li>Kolb: Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation</li><li>In-action (during) vs on-action (after)</li></ul></details>
<details><summary>Harro’s Cycle of Socialization</summary><p>Beginning → First Socialization → Institutional &amp; Cultural → Enforcements → Results → Actions (status quo) or Direction for Change</p></details>
<details><summary>Relational inquiry · SBN · TVIC</summary><ul><li><b>RI</b>: relational orientation (inter-, intra-personal, contextual) + inquiring action; 5 C’s: compassionate, corresponding, curious, committed, competent</li><li><b>SBN</b> (Gottlieb): “what’s right?”; 4 pillars: person-centred, empowerment, relational, innate capacities; 8 values</li><li><b>TVIC</b>: universal; “what happened to you?”; safety, choice, collaboration, strengths; avoid re-traumatization (system vs relationship)</li></ul></details>
<details><summary>People &amp; sources</summary><ul><li>Crenshaw (1989) — intersectionality</li><li>Harro — cycle of socialization</li><li>Eckroth-Bucher (2010) — self-awareness</li><li>Brookfield (1995) — assumptions</li><li>Henry &amp; Tator (2006) — race</li><li>Sabin (2022) — implicit/explicit bias</li><li>Kolb (1976) — learning cycle</li><li>Carper (1978) — patterns of knowing</li><li>Peplau — therapeutic nurse-client relationship</li><li>Gottlieb — strengths-based nursing</li><li>Doane &amp; Varcoe — relational inquiry</li><li>Davidhizar (2005) — benevolent power · Manojlovich (2007) — nursing power</li><li>Kaba (2021) — “history is instructive…”</li></ul></details>`;

/* ---------- CERTIFICATE ---------- */
function renderCert() {
  app.innerHTML = "";
  if (!(allWeeksDone() && (S.examBest || 0) >= 70)) {
    app.appendChild(topbar());
    const m = el("main", "review"); m.innerHTML = `<section class="card"><div class="kicker">Certificate</div><h2>🔒 Not yet!</h2><p class="muted">Finish every week and score 70%+ on the mock midterm to unlock your certificate.</p></section>`;
    app.appendChild(m); app.appendChild(tabbar("")); return;
  }
  const name = S.name || "Future Nurse";
  const d = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const m = el("main", "certwrap");
  m.innerHTML = `<div class="cert"><div class="c-flower">🌸</div><div class="kicker">Certificate of completion</div>
    <h1>${esc(name)}</h1><p>completed every lesson of the</p><h2>N1040 Study Quest</h2>
    <p>Foundational Concepts of Professional Nursing Practice · Weeks 1–6</p>
    <div class="c-row"><div><b>${S.examBest ?? "—"}%</b><span>mock midterm</span></div><div><b>${S.petals}</b><span>petals</span></div><div><b>${fmtTime(S.secs)}</b><span>studied</span></div></div>
    <p class="c-badges">${COURSE.weeks.map(w => S.badges[w.id] ? w.badge.icon : "").join(" ")} ${S.badges.exam ? "🏆" : ""}</p>
    <small>${d}</small></div>
    <div class="fin-actions"><button class="btn primary" id="pr">Save / print</button><button class="btn" id="bk">Back</button></div>`;
  app.appendChild(m);
  $("#pr").onclick = () => print(); $("#bk").onclick = () => go("path");
  confetti(80);
}

/* ---------- boot ---------- */
const h = location.hash.slice(1);
go(["garden", "review", "cert"].includes(h) ? h : "path");
window.addEventListener("hashchange", () => { const v = location.hash.slice(1); if (["garden", "review", "cert", "path"].includes(v)) go(v); });
window.__N1040 = { totalMins, lessonMins };
})();
