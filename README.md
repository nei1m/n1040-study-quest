# 🌸 Ayah’s Learning Guide — N1040

A pink, phone-friendly study game for **N1040 – Foundational Concepts of Professional Nursing Practice, Weeks 1–6**. It covers the lecture slides and readings for the midterm.

- **27 lessons, about 4–4.5 hours in total.** Lessons mix short reading cards, multiple choice, select-all-that-apply (NCLEX-style), matching, sorting, ordering, fill-in-the-blank, flashcards and written reflections.
- **Boss quiz** at the end of each week. Score 80% or more for a gold crown 👑.
- **Mock midterm:** 30 integrated questions plus 10 random ones, with answers revealed at the end.
- **Rewards:** petals 🌸, combos 🔥, a day streak, levels from *Pre-Nursing Bud* to *N1040 Legend*, a flower garden (one bloom per lesson), week badges and a certificate.
- **Review tab:** a mistake deck, a quick-fire random 10 and a cheat sheet of the must-know comparisons.
- **Journal:** every reflection you write is saved so you can reread it before the exam.

Progress is saved in the browser on that device (localStorage). Use **Garden → Export/Import progress** to move it to another device.

## Host it free on GitHub Pages

1. Make a new **public** repo on github.com, e.g. `n1040-study-quest`.
2. Click **Add file → Upload files**, drag in every file from this folder (`index.html`, `styles.css`, `app.js`, `content.js`, `.nojekyll`, `README.md`), then click **Commit**.
3. Go to **Settings → Pages**. Under *Source*, choose **Deploy from a branch**, then branch **main**, folder **/ (root)**, then **Save**.
4. After about a minute your site is live at `https://<your-username>.github.io/n1040-study-quest/`.
5. On your phone, open the link, then choose **Share → Add to Home Screen**. It opens like an app.

## Editing content

All the course content is in `content.js`, grouped as weeks → lessons → items. Copy an existing item to add a new one. The time estimates update automatically.

## Run locally

`python3 -m http.server` in this folder, then open http://localhost:8000.
