/* N1040 Study Quest — course content.
   Item types: learn | flash | mcq | sata | match | sort | order | cloze | reflect
   Sources: Weeks 1–4 & 6 lecture slides, assigned readings (summarized). */

const COURSE = {
  title: "Ayah’s Learning Guide",
  subtitle: "Foundational Concepts of Professional Nursing Practice · Weeks 1–6",
  weeks: [
  /* ====================================================== WEEK 1 */
  {
    id: "w1", num: 1, title: "Who Am I Becoming?", date: "Sept 15",
    blurb: "Stereotypes, self-awareness, privilege, identity, intersectionality and positionality.",
    badge: { name: "Self-Aware Sprout", icon: "🌱" },
    lessons: [
    {
      id: "w1l1", title: "Not a memorizing course", mins: 9, flower: "🌷",
      items: [
        { t: "learn", title: "What N1040 is (and isn’t) about", html: `
          <p>This course is <b>not</b> about:</p>
          <ul><li>Becoming a knowledgeable “professional”</li><li>Becoming and being competent and confident</li><li>Teaching from a textbook</li><li>Following rules and never questioning them</li><li>Memorizing content</li></ul>
          <p>This course <b>is</b> about:</p>
          <ul><li>The reality of becoming and being a nurse</li><li><span class="key">Unlearning</span></li><li>Questioning yourself and nursing</li><li>Thinking differently and reflection</li><li>Understanding and open-mindedness</li><li>Learning to think critically</li></ul>
          <p class="tip">Exam mindset: questions will test whether you can <i>apply</i> ideas to patient situations, not recite slides.</p>` },
        { t: "mcq", q: "According to the Week 1 lecture, which of the following is a central focus of N1040?",
          opts: ["Memorizing content from the course textbook", "Learning to follow rules without questioning them", "Unlearning and questioning yourself and nursing", "Becoming competent and confident with clinical skills"],
          a: 2, why: "The course is explicitly about unlearning, questioning yourself and nursing, reflection and critical thinking — not memorizing or rule-following." },
        { t: "learn", title: "Why this matters: it’s not easy becoming a nurse", html: `
          <p>The lecture named four realities new nurses struggle with:</p>
          <ol><li>Inadequacy and lack of autonomy</li><li>Unprofessionalism of health care professionals</li><li>Differing cultural views and values of patients and their relatives</li><li>Health care needs versus resource constraints</li></ol>` },
        { t: "sata", q: "Which were identified in lecture as realities that make becoming a nurse difficult? Select all that apply.",
          opts: ["Inadequacy and lack of autonomy", "Unprofessionalism of health care professionals", "Differing cultural views and values of patients and relatives", "Too few nursing programs in Canada", "Health care needs versus resource constraints"],
          a: [0, 1, 2, 4], why: "Four realities were listed: inadequacy/lack of autonomy, unprofessionalism, differing cultural views and values, and needs vs. resource constraints. Program numbers were not mentioned." },
        { t: "learn", title: "Nursing stereotypes", html: `
          <div class="defn"><b>Stereotype:</b> a generalized belief about a particular category of people. It is an expectation that people might have about <i>every</i> person of a particular group.</div>
          <p>Media images of student nurses and nurses shape what people expect nurses to be. During <b>COVID-19</b>, two contrasting images dominated: <b>nurses as angels</b> and <b>nurses as burned out</b> (Stokes et al., 2020).</p>
          <p>Common reasons people choose nursing: wanting to be “a professional”, liking to help people, “I’m a caring, compassionate person”, the action of ER/ICU, travel nursing, pay and job security, or a nurse in the family.</p>
          <p class="tip">Nursing skills matter — <i>however</i>, becoming and being a nurse involves learning how to help and care for <b>all</b> human beings.</p>` },
        { t: "mcq", q: "Which statement best defines a stereotype?",
          opts: ["A generalized belief or expectation about every person in a particular group", "A negative feeling toward someone based on a past personal experience", "A policy that excludes a group from accessing services", "A fact about a group that has been confirmed by research"],
          a: 0, why: "A stereotype is a generalized belief about a category of people — an expectation applied to every person in that group." },
        { t: "mcq", q: "Stokes et al. (2020) described two contrasting public images of nurses during COVID-19. What were they?",
          opts: ["Scientists and artists", "Angels and burned out", "Doctors’ helpers and technicians", "Leaders and followers"],
          a: 1, why: "The slide showed the tension between “nurses as angels” and “nurses as burned out.”" },
        { t: "reflect", q: "When you think of what is important to being a nurse, what words come to mind? What attracted YOU to nursing — and could any of those reasons be shaped by stereotypes?", min: 40,
          model: `<p>A strong reflection:</p><ul><li>Names specific words (e.g., caring, advocacy, critical thinking, trust, knowledge).</li><li>Is honest about your own reasons (helping, family member, job security…).</li><li>Questions them: is “I’m naturally caring” rooted in the stereotype that caring is a <i>female</i> trait or that nursing is just “doing”? (van der Cingel &amp; Brouwer, Week 2).</li><li>Notices media images (angel/hero, ER drama) that may not match the reality of nursing.</li></ul>` }
      ]
    },
    {
      id: "w1l2", title: "Self-awareness & the Johari Window", mins: 10, flower: "🌼",
      items: [
        { t: "learn", title: "Self-awareness", html: `
          <div class="defn">“Self-awareness is a multi-dimensional, introspective process used to become aware of, scrutinize, and understand one’s thoughts, feelings, convictions, and values on an ongoing basis, with the use of this understanding to consciously and authentically guide behaviour.” <span class="src">(Eckroth-Bucher, 2010, p. 304)</span></div>
          <p>Key words: <span class="key">ongoing</span> (it never finishes) and <span class="key">guide behaviour</span> (it’s meant to change how you act).</p>
          <p>Can one ever truly, entirely know oneself? The lecture’s answer: no — it is a lifelong process.</p>` },
        { t: "learn", title: "What people think vs. reality", html: `
          <div class="stat-row"><div class="stat"><b>95%</b><span>of people <i>think</i> they are self-aware</span></div><div class="stat"><b>10–15%</b><span>actually <i>are</i></span></div></div>
          <p>The gap is the point: most of us overestimate how well we know ourselves, which is why nurses need deliberate self-reflection.</p>` },
        { t: "mcq", q: "Based on the data presented in lecture, approximately what percentage of people are actually self-aware?",
          opts: ["95%", "50–60%", "30%", "10–15%"], a: 3, why: "About 95% believe they are self-aware, but only about 10–15% actually are." },
        { t: "learn", title: "The Johari Window", html: `
          <div class="johari">
            <div><b>Open / Arena</b><span>Known to self · Known to others</span></div>
            <div><b>Blind Spot</b><span>Not known to self · Known to others</span></div>
            <div><b>Hidden / Façade</b><span>Known to self · Not known to others</span></div>
            <div><b>The Great Unknown</b><span>Not known to self · Not known to others</span></div>
          </div>
          <p>Feedback from others shrinks your <b>blind spot</b>; sharing about yourself shrinks your <b>façade</b>. Both grow the <b>open</b> area.</p>
          <p>The lecture also showed images (like “the dress”) that people see completely differently — a reminder that perception is shaped by who we are.</p>` },
        { t: "match", title: "Match each Johari quadrant", pairs: [
          ["Open / Arena", "Known to me and known to others"],
          ["Blind Spot", "Others see it, I don’t"],
          ["Hidden / Façade", "I know it, others don’t"],
          ["The Great Unknown", "Neither I nor others know it"] ] },
        { t: "mcq", q: "A preceptor tells a nursing student that she sighs loudly every time a patient presses the call bell. The student had no idea she did this. In the Johari Window, this behaviour was in the student’s:",
          opts: ["Open area", "Blind spot", "Hidden area / façade", "Unknown area"], a: 1, why: "Others knew about it but she didn’t — that’s the blind spot. Feedback is how blind spots shrink." },
        { t: "learn", title: "Values drive actions", html: `
          <p>Our actions are often influenced by what we value. Actively trying to understand people with different views (e.g., on vaccination) helps us see why we think the way we do.</p>
          <div class="ex"><b>Example:</b> Most nurses say patient care comes first. If a nurse truly values the patient first, they’ll put documentation aside to answer call lights. Yet we often see other priorities (documentation, doctor’s orders) get in the way of patient care.</div>
          <p>Critically reflecting on our values and beliefs <b>increases self-awareness</b>.</p>` },
        { t: "mcq", q: "A nurse says “patients always come first” but routinely finishes charting before answering call lights. Which Week 1 idea does this best illustrate?",
          opts: ["Nurses should never document during a shift", "What we say we value and what we actually prioritize can differ — reflection exposes this", "Documentation is legally more important than patient care", "Self-awareness is fixed once a nurse graduates"], a: 1,
          why: "The lecture used this example to show that actions reveal real priorities; critical reflection on values increases self-awareness." },
        { t: "reflect", q: "Values activity: list the 4 people you value most, the 4 things you value most, and 4 values/beliefs you learned from your family (e.g., religion, education, honesty). Then: which of these might affect how you see a patient whose values differ from yours?", min: 35,
          model: `<p>There’s no right list. A strong response:</p><ul><li>Notices where each value came from (family, culture, religion, school).</li><li>Picks one value and imagines a patient who holds the opposite view.</li><li>Names how that could quietly shape your care (tone, patience, assumptions) — that’s self-awareness guiding behaviour.</li></ul>` }
      ]
    },
    {
      id: "w1l3", title: "Privilege, identity & intersectionality", mins: 12, flower: "🌺",
      items: [
        { t: "learn", title: "Privilege", html: `
          <div class="defn"><b>Privilege</b> is unearned power, benefits, advantages, access and/or opportunities that provide unfair advantage for members of the dominant social identity group(s) in society.</div>
          <ul><li>Individuals are not always aware of the privileges they have.</li><li>Examples: <b>cisgender</b>, <b>socioeconomic</b>, <b>male</b> and <b>white</b> privilege.</li><li>A lack of awareness of others’ experiences is itself a manifestation of privilege.</li></ul>` },
        { t: "sata", q: "Which of the following fit the lecture’s definition of privilege? Select all that apply.",
          opts: ["Cisgender privilege", "Socioeconomic privilege", "An advantage earned through hard work and study", "White privilege", "Male privilege"],
          a: [0, 1, 3, 4], why: "Privilege is UNEARNED. Something earned through hard work doesn’t fit the definition." },
        { t: "learn", title: "Personal vs. social identity", html: `
          <p>Identity is complex. This course uses two facets:</p>
          <div class="two"><div><b>Personal identity</b><br>Individual traits that differentiate us from others — favourite music, sense of humour, hobbies.</div><div><b>Social identity</b><br>Aspects shared with social groups — education, profession, race/ethnicity, gender, first language, sexual orientation, location, religion, marital status, disability, appearance, income, political affiliation.</div></div>` },
        { t: "sort", title: "Personal or social identity?", buckets: ["Personal identity", "Social identity"], items: [
          ["Your sense of humour", 0], ["First language", 1], ["Favourite genre of music", 0], ["Religion", 1], ["Hobbies you enjoy", 0], ["Income", 1], ["Sexual orientation", 1], ["Political affiliation", 1], ["Disability", 1], ["Race and ethnicity", 1] ] },
        { t: "mcq", q: "Which of the following best describes personal identity?",
          opts: ["Aspects of our identity that we share with other social groups", "Aspects of ourselves that possess unearned power and benefits", "Our unique individual traits that differentiate us from others", "Our gender, race, income level, and political affiliation"],
          a: 2, why: "Personal identity = individual traits that set you apart. A and D describe social identity; B describes privilege. (This was the Week 2 knowledge check.)" },
        { t: "learn", title: "Intersectionality", html: `
          <p>The term was coined in <b>1989 by Dr. Kimberlé Crenshaw</b>.</p>
          <ul><li>Human experiences cannot be explained by single identity categories (race, gender, class…).</li><li>Experiences are shaped by unique social locations and the processes (racism, classism…) that intersect and interact.</li><li>People can experience <b>privilege and oppression simultaneously</b>.</li></ul>
          <div class="ex"><b>Black woman ≠ Black + Woman.</b> The experience is not two separate things added together — it’s its own experience.</div>
          <div class="ex"><b>Naveen</b> (student example): in a mostly white college class he felt visibly different; in nursing, people “look like” him, but as an immigrant he still feels he doesn’t fully belong. Identities interact — sharing one doesn’t mean sharing the experience.</div>` },
        { t: "mcq", q: "Which statement best reflects the theory of intersectionality?",
          opts: ["Oppressions can be added together to calculate how disadvantaged a person is", "A person’s experience is best understood through their most visible identity", "Interacting social identities and processes shape unique experiences, and a person can be privileged and oppressed at the same time", "Intersectionality only applies to the combination of race and gender"],
          a: 2, why: "Intersectionality says identities intersect and interact (not add up), and privilege and oppression can co-exist in one person." },
        { t: "learn", title: "Flower Power & positionality", html: `
          <p><b>Flower Power activity:</b> outer petals = the socially dominant category in your context (e.g., in Canada, “Canadian” citizenship; in Western higher education, “objectivity” as the dominant way of knowing). Inner petals = your own identities. Each match places you in a position of social power.</p>
          <p><b>Positionality</b> and becoming a nurse:</p>
          <ul><li>Life experiences, social identities and positionality have significant, often <i>invisible</i>, effects on how you approach people, your work and the world.</li><li>Positionality <b>changes</b> as you change and learn.</li><li>It is intrinsically linked to <b>power</b>, domination and oppression.</li><li>Historically, imbalances in social position shaped how nursing formed — next week’s topic.</li></ul>` },
        { t: "mcq", q: "Which statement about positionality is accurate?",
          opts: ["It is fixed at birth by your social identities", "It changes as you change and learn to see the world differently", "It has little to do with power", "It only matters for nurse researchers"],
          a: 1, why: "Positionality is not static — it shifts as you learn — and it is intrinsically tied to power." },
        { t: "reflect", q: "Flower Power: how many of your inner petals matched the dominant outer petals? Where do you hold social power, and where don’t you? How might that show up when you care for a patient whose petals look very different from yours?", min: 40,
          model: `<p>A strong response:</p><ul><li>Names specific matches (e.g., English as first language, citizenship, able-bodied).</li><li>Notes at least one area without dominant status — intersectionality means both can be true.</li><li>Connects to practice: assumptions you might make, power you hold as a nurse, voices you might not hear.</li></ul>` }
      ]
    },
    {
      id: "w1boss", title: "Week 1 Boss Quiz", mins: 6, flower: "👑", boss: true,
      items: [
        { t: "mcq", q: "A student nurse says, “I don’t really see privilege in my life — I just worked hard.” Which concept from Week 1 does this statement most reflect?",
          opts: ["Intersectionality", "A lack of awareness of others’ experiences as a manifestation of privilege", "Personal identity", "Reflexivity"], a: 1, why: "The lecture states that individuals are not always aware of their privileges, and lack of awareness of others’ experiences is a manifestation of privilege." },
        { t: "mcq", q: "Self-awareness, as defined by Eckroth-Bucher (2010), is best described as:",
          opts: ["A one-time assessment completed in nursing school", "An ongoing introspective process used to authentically guide behaviour", "Knowing what others think of you", "A personality trait some people are born with"], a: 1, why: "The definition stresses an ongoing, multidimensional process that guides behaviour." },
        { t: "sata", q: "Which are examples of SOCIAL identity? Select all that apply.",
          opts: ["Marital status", "Sense of humour", "Geographical location", "Appearance", "Favourite hobby"], a: [0, 2, 3], why: "Marital status, location and appearance are shared with social groups. Humour and hobbies are personal identity." },
        { t: "mcq", q: "Who coined the term intersectionality, and when?",
          opts: ["Florence Nightingale, 1860", "Kimberlé Crenshaw, 1989", "Barbara Carper, 1978", "Laurie Gottlieb, 2013"], a: 1, why: "Dr. Kimberlé Crenshaw, 1989." },
        { t: "mcq", q: "In the Flower Power activity, what does each match between an inner and outer petal represent?",
          opts: ["A shared personal hobby", "A position of social power", "An area for clinical improvement", "A stereotype you hold"], a: 1, why: "Matching the dominant category places you in a position of social power." },
        { t: "mcq", q: "A nurse realizes, after a colleague points it out, that she speaks more slowly to older adults even when they have no hearing or cognitive issues. Which Johari quadrant has just shrunk?",
          opts: ["Hidden / Façade", "Open / Arena", "Blind spot", "Unknown"], a: 2, why: "Feedback from others reveals blind spots, making them part of the open area." },
        { t: "mcq", q: "Why is it important for nurses to consider their own positionality?",
          opts: ["It determines which specialty they should choose", "It is linked to power and invisibly shapes how they approach and care for others", "It allows them to avoid working with patients unlike themselves", "It is required for licensure exams"], a: 1, why: "Positionality is linked to power and has often-invisible implications for how nurses see and treat people." }
      ]
    }
    ]
  },
  /* ====================================================== WEEK 2 */
  {
    id: "w2", num: 2, title: "Exploring the Roots of Nursing", date: "Sept 22",
    blurb: "Socialization, decolonizing nursing history, hierarchy, power and “othering”. Readings: Smith (2021); van der Cingel & Brouwer (2021).",
    badge: { name: "History Rewriter", icon: "📜" },
    lessons: [
    {
      id: "w2l1", title: "The Cycle of Socialization", mins: 11, flower: "🌸",
      items: [
        { t: "learn", title: "Socialization", html: `
          <div class="defn"><b>Socialization:</b> the process through which people learn the norms, values and behaviours acceptable in their society — starting very young and continuing throughout life.</div>
          <p>It matters for nursing because the norms, values and behaviours we hold <b>influence our approach to nursing care</b>.</p>
          <p>The <b>Cycle of Socialization</b> was developed by <b>Bobbie Harro</b> to explain how stereotypes and biases are formed and sustained.</p>` },
        { t: "learn", title: "The stages", html: `
          <ol class="steps">
          <li><b>The Beginning</b> — we’re born into roles and rules about our identities. <i>e.g., some households expect women to be solely responsible for home and family.</i></li>
          <li><b>First Socialization</b> — taught by parents, relatives, teachers and people we love and trust. <i>e.g., seeing your mother do all the chores while your father focuses on work.</i></li>
          <li><b>Institutional &amp; Cultural Socialization</b> — reinforced by culture (song lyrics, media, practices) and institutions (churches, schools, TV, medicine).</li>
          <li><b>Enforcements</b> — following the norm brings benefits; resisting brings stigma or penalties.</li>
          <li><b>Results</b> — people who don’t represent the norm are silenced, dehumanized → some identities privileged over others.</li>
          <li><b>Actions</b> — sustain the status quo (“it has been this way for hundreds of years”)…</li>
          <li><b>…or Direction for Change</b> — interrupt the cycle by challenging roles, educating others.</li></ol>` },
        { t: "order", title: "Put Harro’s Cycle of Socialization in order", steps: ["The Beginning", "First Socialization", "Institutional & Cultural Socialization", "Enforcements", "Results", "Actions (status quo)", "Direction for Change"],
          why: "Beginning → First socialization → Institutional & cultural → Enforcements → Results → Actions → Direction for change." },
        { t: "sort", title: "Which stage does each scenario represent?", buckets: ["First Socialization", "Institutional & Cultural", "Enforcements", "Direction for Change"], items: [
          ["A medical TV show emphasizes teamwork in nursing", 1],
          ["A nurse is reprimanded for not washing hands before entering a room", 2],
          ["A nurse advocates for a workplace policy to reduce gender-based discrimination", 3],
          ["A child watches her aunt, a nurse, always defer to doctors at family dinners", 0],
          ["A male nursing student is teased by classmates for choosing a “women’s job”", 2],
          ["Nursing textbooks only picture white, female nurses", 1],
          ["A student challenges a colleague’s racist joke and explains why it’s harmful", 3] ] },
        { t: "mcq", q: "According to Harro’s cycle, why do norms tend to persist?",
          opts: ["Because they are scientifically proven", "Because adhering to the norm brings benefits while resisting it can lead to stigma or penalties", "Because institutions have no influence on individuals", "Because people are born already knowing them"],
          a: 1, why: "That’s the Enforcements stage — rewards for conforming, penalties for resisting." }
      ]
    },
    {
      id: "w2l2", title: "Canadian history & decolonization", mins: 12, flower: "🪻",
      items: [
        { t: "learn", title: "Why history?", html: `
          <blockquote>“History is instructive, not because it offers us a blueprint for how to act in the present, but because it can help us ask better questions for the future.” <span class="src">— Kaba (2021), p. 15</span></blockquote>
          <p>Nursing has been historically structured by <b>gender</b>, segregated by <b>race</b>, and (for those with resources) determined by <b>socio-economic status</b> and education. Which norms still exist? Whose voices are amplified — and whose are silenced?</p>` },
        { t: "learn", title: "Canadian history timeline", html: `
          <ul class="timeline">
          <li><b>1834</b> Slavery Abolition Act</li>
          <li><b>1876</b> The Indian Act</li>
          <li><b>1885</b> Chinese Immigration Tax (head tax)</li>
          <li><b>1910</b> Immigration Act section allowing exclusion of races deemed “unsuited” to Canada</li>
          <li><b>1911</b> Order in Council aimed at keeping out Black farmers from Oklahoma</li>
          <li><b>1923</b> Chinese Immigration Act (exclusion)</li>
          <li><b>1939–45</b> WWII Japanese Canadian internment</li>
          <li><b>1996</b> Last residential school closed</li></ul>` },
        { t: "order", title: "Put these events in chronological order", steps: ["Slavery Abolition Act", "The Indian Act", "Chinese Immigration Tax", "Order in Council – Oklahoma Black farmers", "Chinese Immigration Act", "Japanese Canadian internment", "Last residential school closes"],
          why: "1834 → 1876 → 1885 → 1911 → 1923 → WWII → 1996." },
        { t: "learn", title: "Colonization & decolonization", html: `
          <p><b>Before colonization</b> there was always health care and healing. Indigenous healers used (and still use) traditional medicines from the earth.</p>
          <p><b>With colonization</b> this was erased, and Euro-westernized people were hailed for knowledge about healing and medicines they took from Indigenous peoples.</p>
          <div class="defn"><b>Colonization:</b> the Eurocentric project of empire building motivated by the intent to “civilize” the rest of the world.</div>
          <div class="defn"><b>Decolonization:</b> the process of <b>exposing, resisting and transforming</b> the continuing presence and influence of colonial practices and thought.</div>` },
        { t: "mcq", q: "Which definition best matches “decolonization” as presented in lecture?",
          opts: ["Removing all historical figures from nursing education", "Exposing, resisting and transforming the continuing influence of colonial practices and thought", "Returning health care to pre-colonial methods only", "A completed historical event that ended colonial rule"],
          a: 1, why: "Decolonization = exposing, resisting and transforming ongoing colonial practices and thought. It is ongoing, not a finished event — and it isn’t about erasing people." },
        { t: "learn", title: "Beyond Florence: nurses history left out", html: `
          <p><b>Florence Nightingale</b> has been romanticized as the “Lady with the Lamp”, “Angel”, “Heroine”. This gives a <b>disingenuous history</b> of nursing — many voices, often from marginalized groups, are ignored. Historians recognize she represented a global, colonizing health care project that put middle-class white women at the top of a racialized hierarchy.</p>
          <div class="person"><b>Edith Monture</b> — first Indigenous nurse in Canada (1914). Had to go to the United States because the Indian Act blocked her from Canadian nursing schools. First female status Indian to gain the federal vote.</div>
          <div class="person"><b>Mary Mahoney</b> — first Black Registered Nurse in the United States. Advocate for the profession and for Black Americans; involved in community and civil rights work.</div>
          <div class="person"><b>Mary Seacole</b> — Jamaican, independent, resourceful healer (today we might compare her to a Nurse Practitioner). Gave direct individual care in the Crimean War, funded her own supplies. Saw her rejection by Nightingale as racist.</div>` },
        { t: "match", title: "Match the nurse to the fact", pairs: [
          ["Edith Monture", "Blocked by the Indian Act; first Indigenous nurse in Canada"],
          ["Mary Mahoney", "First Black Registered Nurse in the U.S."],
          ["Mary Seacole", "Self-funded Jamaican healer in the Crimean War"],
          ["Florence Nightingale", "Romanticized as the “Lady with the Lamp”"] ] },
        { t: "learn", title: "Milestones in nursing", html: `
          <ol class="steps">
          <li><b>Healers in communities</b> — organized nursing activities within Indigenous peoples</li>
          <li><b>Nightingale era</b> — nurses educated within the Christian faith: technical competence, duty, virtue</li>
          <li><b>Physicians’ handmaidens</b> during the wars</li>
          <li><b>Medicalization of nursing</b> — working in hospitals with scientifically trained physicians; nurses expected to be single, white, female, English-speaking. (1914: first Indigenous nurse in Canada. Black Canadians weren’t permitted to enter nursing until the <b>1940s</b>.)</li>
          <li><b>Nursing science &amp; research</b> — nursing knowledge as separate from medical knowledge; many nursing theories</li>
          <li><b>Evidence-based practice</b> — integrating best research evidence… but <i>who</i> produces and publishes it? → evidence-<i>informed</i> practice</li>
          <li><b>Today</b> — social justice, equity, inclusivity and diversity</li></ol>` },
        { t: "order", title: "Order the milestones of nursing", steps: ["Healers in communities", "Nightingale era (Christianity)", "Physicians’ handmaidens during the wars", "Medicalization of nursing", "Nursing science & research", "Evidence-based practice", "Social justice, equity & inclusivity"],
          why: "Community healers → Nightingale → handmaidens → medicalization → nursing science → EBP → today’s social justice focus." },
        { t: "mcq", q: "According to the lecture, until when were Black Canadians not permitted to enter nursing?",
          opts: ["The 1890s", "The 1920s", "The 1940s", "The 1970s"], a: 2, why: "Black Canadians were not permitted to enter nursing until the 1940s." }
      ]
    },
    {
      id: "w2l3", title: "Reading: Smith — Beyond Florence", mins: 10, flower: "🏵️",
      items: [
        { t: "learn", title: "Reading recap: Smith (2021)", html: `
          <p class="src">Smith, K. (2021). Moving Beyond Florence: Why we need to decolonize nursing history. <i>Nursing Clio</i>.</p>
          <p>Kylie Smith, a historian in a school of nursing, edited the <b>“Beyond Florence”</b> essay series during 2020 — the International Year of the Nurse and Midwife and the first year of COVID-19.</p>
          <ul>
          <li><b>Goal:</b> not to “cancel” Nightingale, but to make space for <b>alternative stories</b> — marginalized people, and pioneers who challenged racism and inequality.</li>
          <li>Today’s inequalities for nurses and patients result from a long history of health care that exploited, manipulated and ignored minorities and people of colour — a product of <b>heteronormative white supremacy</b> that modern medicine is complicit in.</li>
          <li>The series faced backlash (“cancel culture”, attacks on an essay about Nightingale’s racism). Smith says this resistance shows the very <b>entitlement</b> the essays describe.</li></ul>` },
        { t: "learn", title: "Smith’s key arguments", html: `
          <ul>
          <li><b>Nightingale’s racism is documented</b> in her own writing about Indigenous peoples (Aboriginal Australians, Māori), and nurses themselves have written about the profession’s colonial legacy.</li>
          <li><b>“Presentism” charge:</b> critics said historians impose today’s values. Smith: all good history is <b>analytical</b> — history isn’t just “facts” without comment.</li>
          <li><b>Whose evidence counts?</b> Defenders cite only Nightingale and her supporters — the white-centred assumption that only white people’s evidence counts. <b>Mary Seacole</b> herself saw her rejection as racist.</li>
          <li>Nightingale was “a woman of her time” — <b>deeply embedded in the colonial enterprise</b>, which was racist by nature. Medicine helped construct race as biological.</li>
          <li><b>Medicine and nursing were tools of colonialism</b>. Nightingale wasn’t the right symbol for a truly international year because she represents continuing colonizing practices.</li>
          <li><b>Evidence today:</b> over-representation of racialized people in pandemic deaths, outcomes for Black mothers in the U.S., exploitation of immigrant health care workers.</li></ul>` },
        { t: "mcq", q: "What was Kylie Smith’s stated purpose for the “Beyond Florence” series?",
          opts: ["To prove Nightingale had no impact on nursing", "To cancel Nightingale and remove her from nursing education", "To make space for alternative, hidden stories and bring a decolonizing perspective to nursing history", "To argue nursing history should not be taught in nursing schools"],
          a: 2, why: "Smith says plainly they did not seek to cancel Nightingale; the aim was to highlight alternative stories and bring nuance and a decolonizing lens." },
        { t: "mcq", q: "Critics accused the series of “presentism.” How did Smith respond?",
          opts: ["She agreed and withdrew the essays", "All good history is analytical and shaped by the historian; history is not simply facts presented without comment", "She argued that Nightingale lived too long ago to be judged at all", "She said presentism only applies to medical history"],
          a: 1, why: "Smith argues good history is always analytical — historians must judge the past to some extent." },
        { t: "sata", q: "Which present-day examples did Smith give as evidence of harm from white supremacist health care systems? Select all that apply.",
          opts: ["Over-representation of racialized people in pandemic death rates", "Tragic outcomes for Black mothers in the United States", "Exploitation of immigrant health care workers", "Rising tuition costs for nursing students"],
          a: [0, 1, 2], why: "Smith named pandemic death rates, Black maternal outcomes and exploitation of immigrant health care workers." },
        { t: "mcq", q: "Why does Smith argue Nightingale was not the right symbol for the International Year of the Nurse and Midwife?",
          opts: ["She was not a real nurse", "She represents the continuation of colonizing practices in nursing and health care", "She was from a working-class background", "She opposed hospital sanitation"],
          a: 1, why: "Smith says Nightingale represents the continuation of colonizing practices in nursing and health care today." }
      ]
    },
    {
      id: "w2l4", title: "Reading: What makes a nurse today?", mins: 11, flower: "🌻",
      items: [
        { t: "learn", title: "Reading recap: van der Cingel & Brouwer (2021)", html: `
          <p class="src">van der Cingel, M., &amp; Brouwer, J. (2021). What makes a nurse today? A debate on the nursing professional identity and its need for change. <i>Nursing Philosophy, 22</i>(2).</p>
          <p><b>Big claim:</b> the nursing identity is <b>not fixed</b> (“once a nurse, always a nurse”). It is a <b>social construct</b> shaped by history, society and moral values — and it needs to change.</p>
          <p><b>Public stereotypes of nursing:</b></p>
          <ul><li>A <b>“doing”</b> profession — tasks like giving meds and hygiene, carrying out doctors’ orders</li><li>A <b>“female”</b> profession — caring seen as a female trait</li><li>Images from the past — “the lady with the lamp”</li></ul>
          <p>This creates a <b>dualistic image</b>: a practical, “doing” job best done by women vs. the reality that nursing involves a lot of <b>thinking</b> and a huge body of knowledge.</p>` },
        { t: "learn", title: "History, hierarchy & the workforce", html: `
          <ul>
          <li>Care was historically given by the poorest of the poor (pesthouses, poorhouses) <i>and</i> by religious orders → nursing seen as both <b>low-valued “dirty” work</b> and a <b>“calling.”</b></li>
          <li>Doctors delegated tasks to nurses — never the other way around — a <b>hierarchical</b> relationship that still exists, even now that many doctors are women.</li>
          <li>Nursing is still <b>gendered</b>; men struggle to identify as nurses.</li>
          <li><b>Workforce shortages:</b> nurses leave because of stress, burnout, poor support, lack of job control, and novice “reality shock.” Many reasons come down to nurses lacking <b>influence/power</b> over their own practice.</li>
          <li>Where nurses have more <b>autonomy</b>: higher quality of care, <b>lower mortality</b> (Aiken et al., 2017) and more job satisfaction.</li></ul>` },
        { t: "learn", title: "Identity, compassion & stereotypes", html: `
          <ul>
          <li>Professional identity = a construct combining <b>personal, societal and professional values</b>. When these don’t overlap, moral conflict or even an “identity crisis” can result.</li>
          <li><b>Compassion</b> motivates most people to enter nursing. Drawing on Nussbaum, emotions are <b>intelligent judgements</b> — so compassion involves thinking. Doing and thinking are bonded together.</li>
          <li>If students can’t practise compassionately, they consider leaving the profession.</li>
          <li><b>Stereotype threat:</b> pressure when you risk confirming a stereotype about your group.</li>
          <li><b>Looping effect</b> (Hacking): people change behaviour to fit labels, which reinforces the labels. Nurses themselves reinforce stereotypes to fit in.</li>
          <li><b>Even positive stereotypes harm</b> — they oversimplify and discourage people who don’t fit (e.g., “thinkers”).</li>
          <li><b>Conclusion:</b> nursing would flourish as a diverse, autonomous, knowledge-based profession — strategies include role modelling and value clarification.</li></ul>` },
        { t: "flash", title: "Key terms from the reading", cards: [
          ["Dualistic image of nursing", "Nursing seen as a practical “doing” job best done by women vs. the reality of complex thinking and knowledge"],
          ["Looping effect", "People adjust their behaviour to fit a label, which reinforces the label (Hacking)"],
          ["Stereotype threat", "Pressure felt when at risk of confirming a stereotype about one’s social group"],
          ["Professional identity", "A construct combining personal, societal and professional values and beliefs; evolves over a lifetime"],
          ["Compassion (per authors)", "The virtuous emotion that motivates most nurses — and it requires thinking, not just feeling"],
          ["Effect of nurse autonomy", "Higher quality of care, lower mortality, more job satisfaction"] ] },
        { t: "mcq", q: "According to van der Cingel and Brouwer (2021), what is the nursing professional identity?",
          opts: ["A fixed set of traits nurses are born with", "A fluid social construct shaped by history, society and moral values that can change", "Identical in every country and setting", "Defined only by the tasks nurses perform"],
          a: 1, why: "The authors challenge “once a nurse, always a nurse” and argue identity is a changeable social construct." },
        { t: "mcq", q: "A nursing student who sees herself as an analytical “thinker” decides nursing isn’t for her because “nurses are doers.” This best illustrates the authors’ point that:",
          opts: ["Nursing is mainly a doing profession", "Even seemingly neutral or positive stereotypes can discourage people and oversimplify nursing", "Students should choose careers based on personality tests", "Stereotypes have no effect on recruitment"],
          a: 1, why: "The authors use exactly this example: the “doer” stereotype can discourage thinkers from choosing nursing." },
        { t: "sata", q: "Which findings or arguments appear in van der Cingel and Brouwer (2021)? Select all that apply.",
          opts: ["More nurse autonomy is associated with better quality of care and lower mortality", "Nurses themselves can reinforce stereotypes to fit in", "Compassion is purely emotional and involves no cognition", "Physicians have historically delegated tasks to nurses, reinforcing hierarchy", "Nursing identity should stay the same to protect tradition"],
          a: [0, 1, 3], why: "The authors argue compassion involves thinking, and that the identity NEEDS to change." }
      ]
    },
    {
      id: "w2l5", title: "Hierarchy, power & othering", mins: 13, flower: "💐",
      items: [
        { t: "learn", title: "Hierarchies & biomedical hegemony", html: `
          <div class="defn"><b>Hierarchy:</b> a system or organization in which people or groups are ranked one above the other according to status or authority. <i>e.g., doctors create care orders that dictate what nurses can/can’t do with clients.</i></div>
          <p><b>Biomedical (medical) model of health:</b> “if you don’t have a physical illness, you’re healthy” — health as a mechanistic, technical process.</p>
          <p><b>Biomedical hegemony</b> refers to:</p>
          <ol><li>The <b>dominance</b> of the biomedical model</li><li>The <b>active suppression</b> of alternative approaches to health</li><li>The <b>corporatization</b> of personal, clinical medicine into pharmaceutical- and hospital-centred treatment</li></ol>
          <p>This dominance is often called <span class="key">medicalization</span>.</p>` },
        { t: "learn", title: "The problem with hierarchies", html: `
          <ul><li>Over time, the values and beliefs of those in power become ingrained in the culture of a workplace (values, narratives, customs, behavioural norms).</li><li>Every relationship nurses have is influenced by dominant power.</li><li>Nurses often begin to <b>devalue nursing knowledge</b> and prioritize medical knowledge (diagnosis, meds, tests, surgery).</li><li>Dominant groups shape economic, political and cultural systems in their own image and interests.</li></ul>
          <p><b>Where is health care money spent?</b> The lecture chart showed most spending going to hospitals, physicians and drugs — treatment — with far less to prevention and community health. What does that say about priorities?</p>` },
        { t: "sata", q: "Which of the following represent impacts of the medicalization of the Canadian health care system? Select all that apply.",
          opts: ["A health care system that prioritizes a holistic model of health", "The suppression of alternative approaches to health", "A “one size fits all” approach to health care", "A health care system that focuses more on personalized care"],
          a: [1, 2], why: "Medicalization suppresses alternative approaches and produces standardized, one-size-fits-all care — the opposite of holistic or personalized care. (Week 3 knowledge check.)" },
        { t: "learn", title: "Six forms of power", html: `
          <p><b>Power</b> = the ability to control or influence the behaviour of others.</p>
          <div class="grid2">
          <div><b>Legitimate</b><span>Formal authority from a title or position</span></div>
          <div><b>Expert</b><span>Specialized ability, training or education</span></div>
          <div><b>Reward</b><span>Ability to give rewards or incentives</span></div>
          <div><b>Coercive</b><span>Ability to impose negative consequences or penalties</span></div>
          <div><b>Informational</b><span>Ability to share valuable/important information</span></div>
          <div><b>Referent</b><span>Mutual respect, admiration and trust</span></div></div>` },
        { t: "match", title: "Match the form of power", pairs: [
          ["Legitimate", "Comes from a formal title or position"],
          ["Expert", "Comes from specialized training or education"],
          ["Reward", "Ability to give incentives"],
          ["Coercive", "Ability to impose penalties"],
          ["Informational", "Ability to share important information"],
          ["Referent", "Comes from respect, admiration and trust"] ] },
        { t: "mcq", q: "A nurse caring for Sarah, a young patient recovering from surgery, says: “If you take your pain medication like a superhero, I can give you a sticker and let you choose a fun activity for us after.” What type of power is this?",
          opts: ["Referent power", "Coercive power", "Reward power", "Expert power"], a: 2, why: "Offering a sticker and a fun activity as incentives = reward power. (Week 3 knowledge check.)" },
        { t: "mcq", q: "A charge nurse tells a new grad, “If you’re late again, I’ll write you up.” Which form of power is being used?",
          opts: ["Coercive", "Referent", "Informational", "Legitimate only"], a: 0, why: "Threatening a negative consequence = coercive power." },
        { t: "mcq", q: "Patients on a unit consistently ask for one nurse because they trust and admire her, even though she holds no formal leadership title. This is:",
          opts: ["Legitimate power", "Referent power", "Reward power", "Expert power"], a: 1, why: "Power from respect, admiration and trust = referent power." },
        { t: "learn", title: "Benevolent power & nursing power", html: `
          <p><b>Benevolence</b> = the desire to do good (opposite of maleficence — doing harm). Using power wisely and in the client’s best interest is the benevolent half of the equation — a caring extension of the nurse’s professional role <span class="src">(Davidhizar, 2005)</span>.</p>
          <p><b>Nursing power arises from</b> <span class="src">(Manojlovich, 2007)</span>:</p>
          <ul><li>A workplace with structures that promote empowerment</li><li>A belief in one’s ability to be empowered</li><li>An understanding that there is power in the relationships and caring nurses provide</li></ul>` },
        { t: "learn", title: "A history of “othering”", html: `
          <p>When loyalties are centred on institutions and hierarchical authorities, patients easily become <b>othered</b> — pushed lower on the list of priorities. People unlike the dominant group have come to be seen as inferior against the backdrop of Euro-western society.</p>
          <p><b>Often “othered”:</b> racialized clients, clients who don’t speak English, clients who may be using substances, clients who appear “dirty” or unclean, clients who appear uneducated, clients who are loud and angry… who else?</p>
          <p><b>Why it matters:</b> much of what you’ll learn is <b>nursing knowledge</b>, not medical knowledge (e.g., the therapeutic nurse-client relationship came from nursing scholar <b>Hildegard Peplau</b>). Keep your critical lens on and ask: <i>“whose voices are missing?”</i></p>` },
        { t: "sata", q: "Which nursing power sources were identified by Manojlovich (2007)? Select all that apply.",
          opts: ["A workplace with structures that promote empowerment", "A belief in one’s ability to be empowered", "Holding a higher title than physicians", "Understanding that there is power in the relationships and caring nurses provide"],
          a: [0, 1, 3], why: "The three sources were empowering structures, belief in one’s ability to be empowered, and power in relationships and caring." },
        { t: "reflect", q: "Think of a time (in health care, school or work) when someone was “othered.” Which form(s) of power were at play, and what would a benevolent use of power have looked like?", min: 40,
          model: `<ul><li>Identifies who was othered and why (language, appearance, substance use, behaviour…).</li><li>Names the form(s) of power (legitimate, coercive, expert, informational…).</li><li>Describes a benevolent alternative: using that same power in the person’s best interest — advocating, sharing information, including their voice.</li></ul>` }
      ]
    },
    {
      id: "w2boss", title: "Week 2 Boss Quiz", mins: 8, flower: "👑", boss: true,
      items: [
        { t: "mcq", q: "A nurse notices that the unit’s patient-education handouts only show white families and are only available in English. Applying Week 2 concepts, which question is MOST important to ask?",
          opts: ["How quickly can the handouts be reprinted?", "Whose voices and experiences are missing, and who is being othered?", "Which physician approved the handouts?", "How much do the handouts cost?"], a: 1, why: "“Whose voices are missing?” is the critical lens the course asks you to apply." },
        { t: "mcq", q: "Which statement about the biomedical model is accurate?",
          opts: ["It views health holistically, including spiritual and social factors", "It sees health as the absence of physical illness and achieving health as a mechanistic, technical process", "It prioritizes Indigenous healing practices", "It was developed by nursing theorists"], a: 1, why: "The biomedical model equates health with no physical illness and treats health technically/mechanistically." },
        { t: "mcq", q: "A newly graduated nurse begins to feel her observations about a patient’s family stress are “less important” than lab values and the doctor’s plan. This best reflects:",
          opts: ["Referent power", "Nurses devaluing nursing knowledge under biomedical hierarchy", "Cultural humility", "Reflexivity"], a: 1, why: "The lecture notes nurses often devalue nursing knowledge and prioritize medical knowledge within hierarchies." },
        { t: "mcq", q: "Which nurse was blocked from Canadian nursing school by the Indian Act?",
          opts: ["Mary Seacole", "Mary Mahoney", "Edith Monture", "Hildegard Peplau"], a: 2, why: "Edith Monture had to train in the United States because of the Indian Act." },
        { t: "mcq", q: "In Harro’s Cycle of Socialization, a male nursing student who is mocked for choosing nursing is experiencing which stage?",
          opts: ["The Beginning", "Enforcements", "Direction for Change", "First Socialization"], a: 1, why: "Penalties/stigma for not conforming to norms = Enforcements." },
        { t: "sata", q: "Biomedical hegemony refers to which of the following? Select all that apply.",
          opts: ["The dominance of the biomedical model", "Active suppression of alternative approaches to health", "Corporatization of medicine into pharmaceutical- and hospital-centred treatment", "Equal funding for community and preventative care"], a: [0, 1, 2], why: "The three parts are dominance, suppression of alternatives and corporatization." },
        { t: "mcq", q: "A nurse explains the side effects of a new medication so the patient can decide whether to take it. The nurse is primarily using which form of power?",
          opts: ["Coercive", "Informational", "Reward", "Legitimate"], a: 1, why: "Sharing valuable information = informational power (used benevolently here)." },
        { t: "mcq", q: "The therapeutic nurse-client relationship was developed by:",
          opts: ["Florence Nightingale", "Hildegard Peplau", "Barbara Carper", "Bobbie Harro"], a: 1, why: "Hildegard Peplau — an example of nursing (not medical) knowledge." },
        { t: "mcq", q: "Which statement reflects the shift from evidence-based to evidence-informed practice discussed in lecture?",
          opts: ["Research evidence should be ignored", "We should question who produces and publishes evidence and integrate other forms of knowledge", "Only randomized controlled trials count as evidence", "Physicians alone should interpret evidence"], a: 1, why: "The slide asked “Who is producing and publishing this evidence?” — prompting evidence-informed practice." }
      ]
    }
    ]
  },
  /* ====================================================== WEEK 3 */
  {
    id: "w3", num: 3, title: "Cultural Safety & Cultural Humility", date: "Sept 29",
    blurb: "Assumptions, bias, stigma, racism, microaggressions, culture, cultural safety vs. humility, and reflection. Reading: Varcoe, Browne & Kang-Dhillon (2020).",
    badge: { name: "Humility Heart", icon: "💗" },
    lessons: [
    {
      id: "w3l1", title: "Judy & the power of assumptions", mins: 10, flower: "🌷",
      items: [
        { t: "learn", title: "Activity: Judy — keep asking “but why?”", html: `
          <ol class="steps">
          <li>Why is Judy in hospital? <b>Severe acute respiratory distress syndrome.</b></li>
          <li>Why? She caught <b>COVID-19</b>.</li>
          <li>Why? She didn’t physically distance, isolate or quarantine.</li>
          <li>Why? She is <b>homeless</b> and spent most nights in an over-crowded shelter.</li>
          <li>Why? She left her prior home.</li>
          <li>Why? She was <b>fleeing a violent relationship</b>.</li>
          <li>Why didn’t she move in with family? She has <b>no family</b>.</li></ol>
          <p class="tip">Was Judy at risk because of factors she could modify — or conditions outside her control?</p>` },
        { t: "mcq", q: "What is the main lesson of the “Judy” activity?",
          opts: ["Patients who don’t follow public health directives are non-compliant", "Asking “why” repeatedly reveals social conditions outside a person’s control that shape health", "Homeless shelters should be closed during pandemics", "Medical diagnoses explain the full story of a patient"],
          a: 1, why: "Judy’s illness traces back to homelessness, violence and lack of family — structural conditions, not personal choices." },
        { t: "learn", title: "Assumptions", html: `
          <div class="defn"><b>Assumptions:</b> taken-for-granted beliefs about the world and our place within it that seem so obvious to us as not to need stating explicitly. <span class="src">(Brookfield, 1995, p. 2)</span></div>
          <ul><li>“My patient doesn’t face financial insecurity because they’re wearing a suit.” — <b>poverty isn’t always easy to see</b>.</li><li>“The patient I am caring for knows how to read.” — basic colonoscopy prep instructions look very different to a patient with limited literacy.</li><li>An assumption may come from one person’s experience, retold until a group believes it to be the truth.</li><li>When we nurse, we make many assumptions about culture and about people not like “us”.</li></ul>` },
        { t: "mcq", q: "A nurse hands a patient a written colonoscopy prep sheet and says, “Everything you need is on there.” The patient later arrives unprepared. Which assumption most likely contributed?",
          opts: ["That the patient could read and understand the instructions", "That the patient was wealthy", "That the patient was non-compliant", "That the patient’s family would help"], a: 0, why: "The lecture used this exact example: assuming literacy. Instructions can be incomprehensible to someone with limited literacy." },
        { t: "reflect", q: "Think of an assumption you’ve made about someone based on how they looked, spoke or dressed. Where did that assumption come from — and how could it affect care if you’d been their nurse?", min: 40,
          model: `<ul><li>Names the specific assumption honestly.</li><li>Traces its source (family, media, a single story repeated until it felt true).</li><li>Connects to care: missed needs (finances, literacy), less trust, othering.</li></ul>` }
      ]
    },
    {
      id: "w3l2", title: "Bias, stigma, race & racism", mins: 13, flower: "🌹",
      items: [
        { t: "learn", title: "Implicit vs. explicit bias", html: `
          <div class="two"><div><b>Explicit bias</b><br>Attitudes and assumptions we <i>acknowledge</i> as part of our beliefs; can be assessed directly by <b>self-report</b>.</div><div><b>Implicit bias</b><br>Attitudes and beliefs about race, ethnicity, age, ability, gender, etc. that operate <b>outside conscious awareness</b>.</div></div><p class="src">(Sabin, 2022)</p>` },
        { t: "sort", title: "Implicit or explicit bias?", buckets: ["Implicit", "Explicit"], items: [
          ["A nurse openly says she prefers not to care for patients who use drugs", 1],
          ["A nurse unknowingly checks on older patients less often than younger ones", 0],
          ["On a survey, a student states he believes women are worse at leadership", 1],
          ["A nurse doesn’t notice she offers less pain medication to Black patients", 0],
          ["A physician says aloud that “those people” never follow instructions", 1] ] },
        { t: "learn", title: "Stigma & race", html: `
          <div class="defn"><b>Stigma:</b> a set of negative and unfair beliefs a society or group holds about something — a negative stereotype. In health, the negative association between a person/group who share characteristics and/or a specific disease.</div>
          <div class="defn"><b>Race:</b> “a socially constructed category used to classify humankind according to common ancestry and reliant on differentiation by physical characteristics such as colour of skin, hair, stature and facial characteristics.” <span class="src">(Henry &amp; Tator, 2006, p. 351)</span></div>
          <ul><li><b>Socially constructed</b> = an idea created and accepted by people.</li><li>Race has <b>no biological or genetic basis</b> — there is often more genetic variation <i>within</i> self-identified racial groups than <i>between</i> them.</li></ul>` },
        { t: "mcq", q: "Which statement about race is consistent with the Week 3 lecture?",
          opts: ["Race is a biological category with clear genetic boundaries", "There is usually more genetic variation between racial groups than within them", "Race is a socially constructed category with no biological or genetic basis", "Race and ethnicity mean exactly the same thing"],
          a: 2, why: "Race is socially constructed; there’s often more variation within groups than between them." },
        { t: "learn", title: "Racism, systemic racism & microaggressions", html: `
          <p><b>Racism</b> is multifaceted — everyday experiences of discrimination, subtle or overt (Vukic et al., 2012); includes individual attitudes like excluding minorities, “othering”, stereotyping or perpetuating Eurocentrism (Holzkamp, 2013). Students, teachers, patients and nurses all experience it.</p>
          <div class="defn"><b>Systemic racism:</b> discrimination that extends beyond individual attitudes to broader societal, political and economic contexts — often invisible and easily overlooked.</div>
          <p><i>e.g., for over a century Canadian law and policy aimed to eliminate Indigenous governments, ignore Indigenous rights, terminate Treaties and assimilate Indigenous peoples. Today: racial profiling by police, treatment of migrant workers.</i></p>
          <div class="defn"><b>Microaggressions:</b> everyday verbal, nonverbal and environmental slights, snubs or insults — intentional or not — that communicate hostile, derogatory or negative messages based solely on group membership.</div>
          <p>First steps to address them: <b>1)</b> know what a microaggression is, <b>2)</b> recognize when one has occurred, <b>3)</b> recognize what message it may be sending.</p>` },
        { t: "learn", title: "Student nurses’ experiences", html: `
          <div class="ex"><b>Penelope:</b> in 15 clinical days she had 5 people ask about her culture, heritage, last name or appearance. Each was “a reminder that I’m different”… “a hole poked without a patch put on.” She questioned whether she belonged in nursing.</div>
          <div class="ex"><b>Carlos:</b> a patient badgered him to find a Latina house cleaner “because you’re Latino.” A classmate who wears a hijab was told “you don’t even belong in this country, I don’t want you taking care of me.”</div>` },
        { t: "mcq", q: "A nurse repeatedly asks a Canadian-born colleague of Asian descent, “But where are you REALLY from?” This is best described as a:",
          opts: ["Microaggression", "Form of systemic racism", "Example of cultural humility", "Explicit policy"], a: 0, why: "An everyday verbal slight based on group membership that signals “you don’t belong” = microaggression." },
        { t: "mcq", q: "A nurse notices minoritized patients in her community have consistently higher rates of hypertension and diabetes, and realizes this is linked to longstanding institutional practices and policies that produce discriminatory treatment. What term best describes this?",
          opts: ["Stereotypes", "Systemic racism", "Microaggressions", "Stigma"], a: 1, why: "Discrimination built into institutional practices and policies = systemic racism. (Week 4 knowledge check.)" },
        { t: "sata", q: "According to lecture, what are the first steps in addressing microaggressions? Select all that apply.",
          opts: ["Know what a microaggression is", "Recognize when a microaggression has occurred", "Ignore it to avoid conflict", "Recognize what message it may be sending"], a: [0, 1, 3], why: "Know it, recognize it, and recognize the message it sends." }
      ]
    },
    {
      id: "w3l3", title: "What is culture?", mins: 11, flower: "🌺",
      items: [
        { t: "learn", title: "Culture", html: `
          <div class="defn"><b>Culture:</b> a set of shared beliefs, values, customs or behaviours that are shared by a group or society.</div>
          <ul><li>Culture is a <b>process</b> that happens between people.</li><li>We continuously participate in and create culture.</li><li>No two people share a cultural affiliation in identical ways.</li><li>Most of us identify with multiple cultures beyond ethnicity, nationality or birthplace.</li></ul><p class="src">(Varcoe, Browne &amp; Kang-Dhillon, 2020, p. 247)</p>
          <p><b>Five features — culture is:</b></p>
          <ol><li>Embedded in everyday life</li><li>Shared and relational</li><li>Largely implicit</li><li>Fluid and dynamic</li><li>Intersecting with other social constructs (race, gender, ethnicity, class, language, disability)</li></ol>` },
        { t: "sata", q: "According to Varcoe, Browne and Kang-Dhillon (2020), which statements about culture are accurate? Select all that apply.",
          opts: ["Culture is fluid and dynamic", "Culture is largely explicit and easy to list", "Culture is shared and relational", "Two people from the same ethnic group share their culture identically", "Culture intersects with race, gender, class, language and disability"],
          a: [0, 2, 4], why: "Culture is largely IMPLICIT, and no two people share a culture in identical ways." },
        { t: "learn", title: "Reading recap: Beyond cultural inventories", html: `
          <p class="src">Varcoe, C., Browne, A. J., &amp; Kang-Dhillon, B. (2020). Culture and cultural safety: Beyond cultural inventories. In <i>Fundamentals: Perspectives on the art and science of Canadian nursing</i>.</p>
          <ul>
          <li>A <b>“cultural inventory”</b> approach lists traits for each ethnic group (“X people believe…”). This treats culture as fixed and belonging to “others,” and leads to <b>stereotyping</b>.</li>
          <li>Instead, culture is <b>relational and dynamic</b> — and it’s tied up with power, history, economics and racism.</li>
          <li>Blaming health problems on someone’s “culture” can hide the real drivers: poverty, racism, colonialism, and how the health system treats people.</li>
          <li><b>Cultural safety</b> came from Māori nurses in Aotearoa/New Zealand and shifts the gaze onto the <b>culture of health care</b> itself — its power, policies and practices.</li>
          <li>Whether care is culturally safe is ultimately judged by the <b>people receiving it</b>.</li></ul>
          <p class="tip">Summary written from the chapter’s main ideas — re-skim the chapter itself for any details your prof emphasized.</p>` },
        { t: "learn", title: "Immigrant health & the iceberg", html: `
          <p><b>Health challenges for immigrants in Canada:</b> language barriers; racism and stigma; difficulty getting employment; social isolation; cultural practices ignored or undervalued; a <b>three-month wait</b> for provincial health insurance; difficulty finding a physician/NP.</p>
          <p><b>Iceberg concept of culture:</b> above the surface is what others see about you (food, dress, language, festivals); below is <b>deep culture</b> that’s often hidden (values, beliefs, communication styles, notions of family, health and time).</p>` },
        { t: "sort", title: "Iceberg: above or below the surface?", buckets: ["Above the surface", "Deep culture (hidden)"], items: [
          ["Clothing and dress", 0], ["Beliefs about illness and healing", 1], ["Holidays and festivals", 0], ["Ideas about modesty and personal space", 1], ["Food", 0], ["Who makes decisions in a family", 1], ["Concept of time", 1], ["Language spoken", 0] ] },
        { t: "sata", q: "Which were identified as health challenges for immigrants in Canada? Select all that apply.",
          opts: ["A three-month waiting period for provincial health insurance", "Language barriers", "Difficulty finding a physician/NP", "Guaranteed priority access to specialists", "Social isolation"], a: [0, 1, 2, 4], why: "There is no priority access — all the others were listed." },
        { t: "reflect", q: "Personal culture: what cultural values or practices would you want a nurse caring for you to be aware of and respect? Why? (Think below the waterline of your iceberg.)", min: 35,
          model: `<ul><li>Goes beyond surface culture (food, holidays) to deep culture: family roles, privacy, faith, communication, beliefs about pain or death.</li><li>Explains <i>why</i> it matters — comfort, dignity, trust.</li><li>Notices that your culture is multiple and personal — nobody could have guessed it from a checklist.</li></ul>` }
      ]
    },
    {
      id: "w3l4", title: "Imposition, competence, safety, humility", mins: 13, flower: "🪷",
      items: [
        { t: "learn", title: "Four concepts to know cold", html: `
          <div class="defn"><b>Cultural imposition:</b> health personnel imposing their beliefs, practices and values on other cultures because they believe theirs are <b>superior</b>.</div>
          <div class="defn"><b>Cultural competence:</b> possessing the knowledge and skill to plan interventions that are culturally appropriate.</div>
          <div class="defn"><b>Cultural safety:</b> shifts our gaze onto the <b>culture of health care</b> — how practices, policies and research can perpetuate marginalizing conditions and inequities. Recognizes not everyone regards diversity constructively.</div>
          <div class="defn"><b>Cultural humility:</b> a <b>life-long process</b> and personal commitment to understand one’s biases through education and self-reflection; acknowledging oneself as a <b>learner</b> about another’s experience and <b>dismantling power imbalances</b>.</div>` },
        { t: "learn", title: "Critique of cultural competence", html: `
          <ul><li>“Competence” implies one can become <b>successful and efficient at knowing cultures</b> — as if culture could be mastered.</li><li>It has been critiqued for promoting <b>stereotypes and biases</b> toward racial/ethnic groups in clinical decisions through its focus on cultural rituals.</li></ul>` },
        { t: "mcq", q: "In nursing research, what idea about culture has been most commonly associated with the term cultural competence?",
          opts: ["There is always something new to learn about culture", "By acquiring knowledge, an individual can become successful in knowing other cultures", "It requires exploring social conditions that lead to health disparities", "It means pushing our own cultural beliefs onto others"],
          a: 1, why: "That is exactly the critique: competence implies culture can be mastered. A = humility, C = safety, D = imposition. (Week 4 knowledge check.)" },
        { t: "learn", title: "Cultural safety in action", html: `
          <div class="ex">Studies show <b>South Asian immigrant women</b> in Canada are less likely to have a mammogram or pap smear. Cultural <i>competence</i> might stop at “it’s their culture.” Cultural <b>safety</b> asks:
          <ul><li>What social, economic and historical conditions contributed to this?</li><li>How do assumptions about immigrant women shape their access to care?</li><li>How do policies affect women’s capacity to access resources?</li><li>What is it about the <b>culture of health care</b> that creates marginalizing conditions?</li></ul></div>
          <p><b>Cultural safety is something we create:</b></p>
          <ul><li>Cultures are dynamic and shift with power, history, economics, politics.</li><li>It’s <b>not cataloguing culture-specific beliefs</b> — it’s about how a group is <b>perceived and treated</b>.</li><li>Individual and institutional discrimination creates risk.</li><li>Nurses should respectfully <b>correct or respond</b> to generalizations and jokes about groups.</li><li>Address <b>power imbalances</b>, not just gather knowledge; involves self-reflection and working with clients.</li></ul>` },
        { t: "sort", title: "Imposition, competence, safety or humility?", buckets: ["Imposition", "Competence", "Safety", "Humility"], items: [
          ["A nurse insists a patient eat hospital food because “our diet is healthier than what your family brings”", 0],
          ["A nurse studies a chart of “what Chinese patients believe about pain” before her shift", 1],
          ["A nurse asks why the clinic’s hours make it hard for shift-working immigrant women to get screened", 2],
          ["A nurse tells a patient, “I don’t know much about your traditions — could you teach me what matters to you?”", 3],
          ["A nurse speaks up when a colleague jokes about “frequent flyer” Indigenous patients", 2],
          ["A nurse commits to ongoing self-reflection about her biases throughout her career", 3],
          ["A nurse removes a patient’s prayer beads because “they don’t help healing”", 0] ] },
        { t: "learn", title: "CNO Code of Conduct — Principle 2", html: `
          <p><b>“Nurses provide inclusive and culturally safe care by practicing cultural humility.”</b> <span class="src">(CNO, 2023)</span></p>
          <p><b>Self-reflection:</b> reflect on how privileges, biases, values, beliefs and positions of power affect the nurse-client relationship (2.1); <b>don’t act on stereotypes or assumptions</b> (2.2); seek feedback from clients and the team (2.3).</p>
          <p><b>Creating safer experiences:</b> recognize identity factors (incl. the Ontario Human Rights Code); meet language/cultural/communication needs; <b>ask</b> clients if they’re open to sharing lived experiences; use preferred <b>name, title and pronoun</b>; actively listen; assess risk for health inequities; focus on <b>resilience and strengths</b> (2.10); act to prevent discrimination; advocate for culturally safe environments.</p>
          <p><b>Training &amp; education:</b> continually improve; ongoing learning in Indigenous health, determinants of health, cultural safety, humility and anti-racism.</p>` },
        { t: "sata", q: "Under CNO Code of Conduct Principle 2, which behaviours are expected of nurses? Select all that apply.",
          opts: ["Address clients by their preferred name, title and pronoun", "Ask clients if they are open to sharing their lived experiences", "Treat every client exactly the same regardless of identity", "Take action when they observe discrimination against a client", "Seek feedback from clients and the team about their culturally safe practice"],
          a: [0, 1, 3, 4], why: "Treating everyone identically ignores identity factors — Principle 2 asks nurses to recognize and respond to them." },
        { t: "mcq", q: "Which statement BEST distinguishes cultural safety from cultural competence?",
          opts: ["Cultural safety focuses on memorizing more cultural facts", "Cultural safety shifts the focus onto the culture of health care and power imbalances, while competence focuses on the nurse’s knowledge of other cultures", "They are the same concept with different names", "Cultural competence is newer and replaces cultural safety"],
          a: 1, why: "Safety looks at the health care system, power and how people are treated; competence focuses on the provider’s knowledge and skills." }
      ]
    },
    {
      id: "w3l5", title: "Reflection, critical reflection & reflexivity", mins: 12, flower: "🌼",
      items: [
        { t: "learn", title: "Three levels", html: `
          <div class="defn"><b>Reflection:</b> thinking back on experiences to learn from them — what went well, what could improve.</div>
          <div class="defn"><b>Critical reflection:</b> goes one step further to question the <b>assumptions, beliefs and power dynamics</b> at play — asking <i>why</i> things happened the way they did.</div>
          <div class="defn"><b>Reflexivity:</b> <b>continuously</b> examining one’s own beliefs, values and reactions in the context of nursing practice.</div>` },
        { t: "learn", title: "Kolb’s (1976) Experiential Learning Cycle", html: `
          <p>Based on the work of Dewey.</p>
          <ol class="steps"><li><b>Concrete Experience</b> — doing / having an experience</li><li><b>Reflective Observation</b> — reviewing / reflecting on the experience</li><li><b>Abstract Conceptualization</b> — concluding / learning from the experience</li><li><b>Active Experimentation</b> — planning / trying out what you have learned</li></ol>
          <p><b>Reflection-in-action:</b> thinking about what you’re doing <i>while</i> you’re doing it.<br><b>Reflection-on-action:</b> after the event, enabling deeper analysis of decisions made.</p>
          <p>Effective clinical judgement is enhanced through continuous reflection. Reflection should be <b>purposeful and intentional</b> — e.g., debriefing during praxis, asking others for feedback.</p>` },
        { t: "order", title: "Order Kolb’s cycle", steps: ["Concrete Experience", "Reflective Observation", "Abstract Conceptualization", "Active Experimentation"], why: "Experience → reflect → conclude → try it out (then back to experience)." },
        { t: "sort", title: "Reflection-in-action or on-action?", buckets: ["In action", "On action"], items: [
          ["While giving an injection, a student notices the patient wince and slows down", 0],
          ["Writing a journal entry after a clinical shift", 1],
          ["Debriefing with the clinical group in praxis", 1],
          ["Mid-conversation, a nurse realizes she’s interrupting and starts listening", 0] ] },
        { t: "mcq", q: "Which statement is an example of CRITICAL reflection rather than simple reflection?",
          opts: ["“My dressing change went well, but I should gather supplies first next time.”", "“I assumed my patient was struggling financially because of how he dressed — I think that came from messages I grew up with that link poverty to poor choices.”", "“I felt tired today.”", "“I will avoid making assumptions in the future.”"],
          a: 1, why: "Critical reflection questions where assumptions and beliefs came from and the power dynamics behind them." },
        { t: "mcq", q: "A nurse continuously examines how her own values and reactions shape her practice across her career. This is best described as:",
          opts: ["Reflection-on-action", "Reflexivity", "Cultural imposition", "Concrete experience"], a: 1, why: "Reflexivity = continuous examination of one’s own beliefs, values and reactions." },
        { t: "reflect", q: "Rewrite this SURFACE reflection as a CRITICAL reflection: “When I was providing care for my patient this week, I made an assumption about their financial situation. This likely led to the patient trusting me less. In the future I should avoid making assumptions.”", min: 50,
          model: `<p>The prof’s questions to answer: <b>1)</b> Why did you make that assumption? <b>2)</b> Why did it reduce trust? <b>3)</b> What power dynamics, biases or assumptions were involved? <b>4)</b> Why does avoiding assumptions matter?</p>
          <p class="ex"><i>Example from lecture:</i> “When I think back to the assumption I made about my patient’s financial situation, I believe it was shaped by experiences and messages I have been exposed to throughout my life. Growing up, I was taught to associate having a stable job with being responsible and successful, while people who struggled financially were sometimes described as having made poor choices. Because of this, I think I unconsciously used these ideas to interpret my patient’s circumstances.”</p>` }
      ]
    },
    {
      id: "w3boss", title: "Week 3 Boss Quiz", mins: 9, flower: "👑", boss: true,
      items: [
        { t: "mcq", q: "A nurse caring for a Muslim patient during Ramadan reads a handout on “Muslim patient needs” and tells the patient, “You’ll be fasting, so I’ll hold your breakfast tray.” The patient says she isn’t fasting. The nurse’s approach most reflects:",
          opts: ["Cultural humility", "Cultural safety", "The limits of cultural competence — treating culture as a fixed inventory", "Reflexivity"], a: 2, why: "Assuming everyone in a group shares identical practices is the stereotyping critique of cultural competence and cultural inventories." },
        { t: "mcq", q: "Which nursing action BEST demonstrates cultural humility?",
          opts: ["Memorizing cultural practices of the five largest immigrant groups", "Asking the patient what is important to them and acknowledging the nurse is a learner about their experience", "Following hospital policy exactly without exception", "Treating all patients identically to avoid bias"], a: 1, why: "Humility = seeing yourself as a learner and dismantling power imbalances." },
        { t: "sata", q: "Which are examples of SYSTEMIC racism? Select all that apply.",
          opts: ["Racial profiling by law enforcement", "Canadian laws designed to assimilate Indigenous peoples", "An individual nurse rolling her eyes at a patient’s accent", "Treatment of migrant workers", "A health system that offers interpreters for only one language"], a: [0, 1, 3, 4], why: "Systemic racism is embedded in laws, policies and institutions. One nurse’s eye-roll is individual (a microaggression)." },
        { t: "mcq", q: "Which definition matches cultural imposition?",
          opts: ["Imposing one’s beliefs and practices on others because one believes they are superior", "Recognizing power imbalances in health care", "A life-long commitment to self-reflection", "Planning culturally appropriate interventions"], a: 0, why: "Imposition = imposing your beliefs/values because you think they’re superior." },
        { t: "mcq", q: "A patient’s family says the shelter-dwelling patient is “just irresponsible” for getting sick. Applying the Judy activity, the nurse should:",
          opts: ["Agree, since personal choices determine health", "Explore the social and structural conditions outside the patient’s control", "Document the patient as non-compliant", "Avoid discussing the patient’s situation"], a: 1, why: "The Judy activity shows how structural conditions, not just choices, shape health." },
        { t: "mcq", q: "Which statement about implicit bias is correct?",
          opts: ["It can be measured fully by asking people about their beliefs", "It operates outside conscious awareness", "Only people with explicit bias have it", "It does not affect clinical care"], a: 1, why: "Implicit bias operates outside conscious awareness; explicit bias is the kind you can self-report." },
        { t: "mcq", q: "A student nurse writes after clinical: “I panicked when the patient’s BP dropped. Next time I’ll review hypotension protocols.” In Kolb’s cycle, “next time I’ll review protocols” is closest to which stage?",
          opts: ["Concrete Experience", "Reflective Observation", "Abstract Conceptualization", "Active Experimentation"], a: 3, why: "Planning/trying out what you’ve learned = Active Experimentation." },
        { t: "mcq", q: "Cultural safety is ultimately about:",
          opts: ["Cataloguing culture-specific beliefs", "How a group is perceived and treated, and addressing power imbalances in health care", "Ensuring patients adopt Canadian health practices", "Avoiding any discussion of culture"], a: 1, why: "Cultural safety isn’t a catalogue of beliefs; it focuses on treatment, perception and power." },
        { t: "mcq", q: "Stigma in a health context refers to:",
          opts: ["A clinical sign of infection", "The negative association between a person or group who share characteristics and/or a specific disease", "A form of legitimate power", "An accurate description of a population"], a: 1, why: "Stigma = negative, unfair beliefs; in health, a negative association between people and characteristics or disease." }
      ]
    }
    ]
  },
  /* ====================================================== WEEK 4 */
  {
    id: "w4", num: 4, title: "Thinking About & With Theory", date: "Oct 6",
    blurb: "Art & science of nursing, theory, the metaparadigm, Carper’s patterns of knowing, and Indigenous ways of knowing. Reading: Carper (1978).",
    badge: { name: "Pattern Knower", icon: "🔮" },
    lessons: [
    {
      id: "w4l1", title: "Art, science & theory", mins: 8, flower: "🌸",
      items: [
        { t: "learn", title: "Nursing is science AND art", html: `
          <p>One can’t exist without the other.</p>
          <div class="two"><div><b>Science</b><br>Knowledge of disease processes, pathophysiology and technical nursing skills.</div><div><b>Art</b><br>Skilful attention to and knowledge of client situations — care, compassion, communication, intuition, relationships.</div></div>
          <p><b>Examples of the artistry of nursing:</b></p>
          <ol><li>Knowing what tone of voice will comfort a patient</li><li>That “gut feeling” something is wrong before tests confirm it</li><li>Knowing when and how to offer empathy</li></ol>` },
        { t: "learn", title: "What is theory?", html: `
          <div class="defn"><b>Theory:</b> a set of ideas or concepts that help us understand how things work in a particular area.</div>
          <ul><li>In nursing, theories provide a framework for understanding care, guiding practice and making decisions.</li><li>They help make sense of complex situations and offer a structured approach to problems.</li><li><b>We are all nursing theorists!</b> Thinking about practice situations and how to improve them is theorizing.</li><li>Knowledge comes from sciences (sociology, psychology, medicine) <i>and</i> personal knowing.</li></ul>
          <p><b>The problem with only relying on theory:</b> theories don’t always capture reality; textbook knowledge is only one way to solve real-life problems. We learn to be nurses in many ways.</p>` },
        { t: "mcq", q: "A nurse senses a quiet patient “just isn’t right” before vital signs change, and stays to check on him. This best illustrates:",
          opts: ["The science of nursing", "The art of nursing", "Cultural imposition", "Biomedical hegemony"], a: 1, why: "The lecture’s example of artistry: the “gut feeling” that something is wrong before tests confirm it." },
        { t: "mcq", q: "Which statement reflects the lecture’s view of nursing theory?",
          opts: ["Only published theorists create nursing theory", "Theories always capture reality perfectly", "We are all nursing theorists, and textbook knowledge is only one way to solve real problems", "Theory is irrelevant to practice"], a: 2, why: "Thinking about how to improve practice is theorizing; theory alone is not enough." }
      ]
    },
    {
      id: "w4l2", title: "The nursing metaparadigm", mins: 10, flower: "🌷",
      items: [
        { t: "learn", title: "Four concepts", html: `
          <div class="grid2"><div><b>Person</b><span>The recipient of care — individual, family, community</span></div><div><b>Health</b><span>The person’s state of well-being; a process, not just absence of disease</span></div><div><b>Environment / Situation</b><span>Internal and external physical, social and cultural factors that influence health</span></div><div><b>Nursing</b><span>The actions and attributes of the nurse</span></div></div>
          <p><b>Laurie Gottlieb’s Strengths-Based Care</b> through the metaparadigm:</p>
          <ul><li><b>Person:</b> unique, whole and resourceful; holds inner strength and capacities</li><li><b>Nurse:</b> facilitator who identifies and mobilizes strengths with patients and families</li><li><b>Health:</b> a process of becoming and living meaningfully, even with illness</li><li><b>Environment:</b> family, community, culture and systems that influence strengths</li></ul>` },
        { t: "match", title: "Gottlieb’s metaparadigm", pairs: [
          ["Person", "Unique, whole, resourceful; holds inner strengths"],
          ["Nurse", "Facilitator who mobilizes strengths"],
          ["Health", "Becoming and living meaningfully, even with illness"],
          ["Environment", "Family, community, culture and systems"] ] },
        { t: "mcq", q: "Which of the following statements is true regarding the nursing metaparadigm?",
          opts: ["Health is a static state of being and includes both physical and emotional components", "Environment refers to the internal and external physical, social and cultural factors that influence health", "Health refers to the absence of disease", "The nurse’s actions must be ethical, which means treating everyone exactly the same way"],
          a: 1, why: "Health is a dynamic process (not static, not just absence of disease). Ethical care is not identical care. (Week 6 knowledge check.)" },
        { t: "reflect", q: "Mrs. Thompson, 72, fell at home and broke her femur. Her leg is in a cast and she’s 24 hours from discharge home with her husband. Using person, environment and health, how might you best care for her?", min: 45,
          model: `<ul><li><b>Person:</b> her own goals, fears (falling again), strengths and what matters to her; her husband as part of the unit of care.</li><li><b>Environment:</b> stairs, rugs, bathroom, who helps with groceries; her husband’s own health; community supports, transport to follow-ups.</li><li><b>Health:</b> beyond the fracture — mobility, pain, mood, independence, living meaningfully during recovery.</li><li><b>Nursing:</b> teaching, referrals (PT/OT, home care), mobilizing her strengths.</li></ul>` },
        { t: "learn", title: "Critiques of the metaparadigm", html: `
          <ul><li>Still used by many nurses, <i>however</i>…</li><li>Much nursing theory and the metaparadigm were developed by <b>privileged, white, educated</b> nursing leaders.</li><li>These concepts and theories can <b>exclude the real experiences</b> of people from frequently marginalized groups.</li></ul>
          <p>Keep your critical lens on: <i>“whose voices are missing?”</i></p>` },
        { t: "mcq", q: "What is the main critique of the nursing metaparadigm raised in lecture?",
          opts: ["It has too many concepts", "It was developed mostly by privileged white nursing leaders and can exclude experiences of marginalized groups", "It ignores the role of the nurse", "It was created by physicians"], a: 1, why: "The critique is about whose perspectives shaped it and whose are excluded." }
      ]
    },
    {
      id: "w4l3", title: "Carper’s patterns of knowing", mins: 16, flower: "🔮",
      items: [
        { t: "learn", title: "Reading recap: Carper (1978)", html: `
          <p class="src">Carper, B. (1978). Fundamental patterns of knowing in nursing. <i>Advances in Nursing Science, 1</i>(1), 13–23.</p>
          <p>Barbara Carper argued nursing knowledge isn’t only scientific. She identified <b>four</b> fundamental patterns:</p>
          <ol><li><b>Empirics</b> — the science of nursing</li><li><b>Esthetics</b> — the art of nursing</li><li><b>Personal knowledge</b> — knowing and actualizing the self in relation to others</li><li><b>Ethics</b> — the moral component of nursing</li></ol>
          <p><b>Emancipatory knowing</b> was added <b>later</b> (Chinn &amp; Kramer), so lectures now teach <b>five</b> patterns. Carper’s point: every pattern is needed — none alone is enough, and knowledge comes from many sources.</p>` },
        { t: "learn", title: "Five patterns at a glance", html: `
          <div class="pk"><b>Empiric</b><span>How things work — what we can know through sensory experience; science, research, evidence, guidelines.</span></div>
          <div class="pk"><b>Personal</b><span>Awareness of self and others — your experiences, biases, privileges; relationships are central.</span></div>
          <div class="pk"><b>Ethical</b><span>The nature of right and wrong — moment-to-moment moral decisions; no clear right choice → moral distress.</span></div>
          <div class="pk"><b>Aesthetic</b><span>Unique meaning and intent in nursing situations — intuitive, holistic perception of what this patient needs right now.</span></div>
          <div class="pk"><b>Emancipatory</b><span>Social justice — recognizing and challenging systemic inequities; advocacy for change.</span></div>` },
        { t: "learn", title: "Lecture examples", html: `
          <div class="ex"><b>Empiric:</b> using evidence-based guidelines for a client with type 2 diabetes — insulin administration, glucose monitoring, diet/exercise teaching.</div>
          <div class="ex"><b>Ethical:</b> a terminally ill patient wants to stop aggressive treatment; family disagrees. Nurse respects autonomy, advocates for the patient’s wishes, supports the family sensitively.</div>
          <div class="ex"><b>Personal:</b> a nurse who has managed her own chronic illness draws on that journey to give empathic care and encourage self-management.</div>
          <div class="ex"><b>Aesthetic:</b> an older post-op patient is quiet and distant with no medical cause; nurse perceives loneliness/discouragement and asks open-ended questions.</div>
          <div class="ex"><b>Emancipatory:</b> a clinic nurse sees homelessness blocking care and works with organizations and policymakers to address it.</div>` },
        { t: "flash", title: "Patterns of knowing flashcards", cards: [
          ["Empiric knowing", "Science, research and evidence — facts and data you can measure and test"],
          ["Personal knowing", "Self-awareness; how your experiences, biases and assumptions affect care; relationships are central"],
          ["Ethical knowing", "Right and wrong; moment-to-moment moral decisions; can lead to moral distress"],
          ["Aesthetic knowing", "Intuitive, holistic grasp of the meaning of a unique situation — the art of nursing"],
          ["Emancipatory knowing", "Social justice; recognizing and challenging systemic factors and inequities"],
          ["Carper’s original four", "Empirics, esthetics, personal knowledge, ethics (1978)"],
          ["Added later", "Emancipatory knowing (Chinn & Kramer)"] ] },
        { t: "sort", title: "Which pattern of knowing?", buckets: ["Empiric", "Personal", "Ethical", "Aesthetic", "Emancipatory"], items: [
          ["Following a research-based protocol for preventing pressure injuries", 0],
          ["Recognizing your frustration with “non-compliant” patients comes from your upbringing", 1],
          ["Advocating for a patient’s right to refuse treatment despite family pressure", 2],
          ["Sensing from a patient’s posture and silence that she’s frightened, and sitting with her", 3],
          ["Lobbying the city for safe housing after seeing repeat admissions from shelters", 4],
          ["Using normal lab value ranges to interpret a potassium result", 0],
          ["Feeling moral distress when short staffing forces you to rush care", 2],
          ["Drawing on your own grief to connect with a bereaved family", 1] ] },
        { t: "mcq", q: "A nurse is caring for a patient who is anxious about upcoming surgery. Noticing restless gestures and tense posture, the nurse intuitively guides them through a calming breathing exercise. Which pattern of knowing does this best represent?",
          opts: ["Ethical", "Empirical", "Emancipatory", "Aesthetic", "Personal"], a: 3, why: "Intuitively perceiving subtle cues and responding to the unique moment = aesthetic knowing. (Week 6 knowledge check.)" },
        { t: "cloze", title: "Naya’s wound care (Chinn, Kramer & Sitzman, 2021)",
          text: "You are caring for Naya, a young woman with an infected gunshot wound. Thinking about principles of pain management and asepsis is grounded in [[empiric]] knowing. Although your day is rushed, [[ethical]] knowing means you cannot in good conscience omit or rush the treatment. You keep your feelings about guns in check, because your [[personal]] knowing is one of bias against young people owning firearms. You finesse the treatment to make it as pain-free but effective as possible — [[aesthetic]] knowing. When you leave, [[emancipatory]] knowing comes into play as you think about the social conditions that led to her untreated wound.",
          bank: ["empiric", "ethical", "personal", "aesthetic", "emancipatory"] },
        { t: "mcq", q: "Which pattern of knowing was NOT part of Carper’s original 1978 framework?",
          opts: ["Empirics", "Esthetics", "Emancipatory knowing", "Ethics"], a: 2, why: "Carper identified four patterns; emancipatory knowing was added later." },
        { t: "learn", title: "What do nurses value?", html: `
          <p>What we value is as important as how we produce knowledge — <b>values direct knowledge development</b> (Chinn, Kramer &amp; Sitzman, 2021).</p>
          <p><b>CNA Code of Ethics (2017) — nursing values:</b></p>
          <ol><li>Providing safe, compassionate, competent and ethical care</li><li>Promoting health and well-being</li><li>Promoting and respecting informed decision-making</li><li>Honouring dignity</li><li>Maintaining privacy and confidentiality</li><li>Promoting justice</li><li>Being accountable</li></ol>
          <p><b>Institutions shape what you value:</b> many are structured around disease treatment and a service-oriented business model that prioritizes <b>efficiency</b>, so nurses may relate more to the disease than the person. Nurses are increasingly recognizing equity and social justice, and are key <b>advocates</b> because of their knowledge of clients, families and communities.</p>` },
        { t: "reflect", q: "Look back at your Week 1 values activity. Which CNA nursing values align with yours — and which might you struggle with, given your own values and beliefs?", min: 40,
          model: `<ul><li>Names specific CNA values that match yours.</li><li>Honestly names one you might find hard (e.g., promoting justice when it means challenging authority; respecting a decision you disagree with).</li><li>Notes how a workplace focused on efficiency could pull you away from your values.</li></ul>` }
      ]
    },
    {
      id: "w4l4", title: "Indigenous ways of knowing", mins: 11, flower: "🪶",
      items: [
        { t: "learn", title: "As we begin this work, remember…", html: `
          <ul><li>Indigenous knowledges are always growing, <b>diverse</b>, ever-changing and should <b>not be universally defined</b>.</li><li>No Indigenous person is identical to the next.</li><li>Learn from Indigenous voices directly.</li><li><b>Knowledge hierarchies</b> exist: much writing about Indigenous communities comes from non-Indigenous scholars who often misrepresent, dismiss or marginalize Indigenous ways of knowing.</li></ul>
          <p class="tip">The “Orientation to Indigenous Knowledges” module (~77 min of video) informed the Indigenous Learning Bundle reflection (10%).</p>` },
        { t: "learn", title: "Statistics Canada (2024): Indigenous health care experiences", html: `
          <ul><li>The most common setting for unfair treatment, discrimination and racism: the <b>hospital emergency room</b>.</li><li>Many reported their health concerns were <b>minimized or dismissed</b>.</li><li>For some, <b>cultural protocols were not respected</b> (e.g., not allowed to smudge or use traditional medicines).</li><li>Access to <b>cultural services</b> would make people feel safer discussing sensitive or traumatic experiences.</li></ul>` },
        { t: "sata", q: "According to Statistics Canada (2024), which were key findings about Indigenous people’s health care experiences? Select all that apply.",
          opts: ["The ER was the most common setting for unfair treatment, discrimination and racism", "Health concerns were often minimized or dismissed", "Cultural protocols like smudging were sometimes not respected", "Most participants reported no need for cultural services", "Access to cultural services would help people feel safer"],
          a: [0, 1, 2, 4], why: "Participants said access to cultural services would make them feel SAFER — the opposite of “no need.”" },
        { t: "learn", title: "Smudging", html: `
          <p>Smudging involves brushing smoke from burning sacred medicine plants (e.g., sweetgrass, sage) over parts of the body as a <b>spiritually cleansing</b> practice. For some Indigenous communities it provides comfort, connection to culture and <b>dignity</b>.</p>
          <p>Many hospitals, like <b>LHSC (Indigenous Healing and Cultural Practices Policy, 2025)</b>, have policies that support smudging despite smoke-free rules.</p>
          <div class="ex">Imagine your very ill grandparent’s family is told prayer at the bedside is “not allowed” or “won’t make them better.” How would that feel?</div>
          <p><b>Why learn this?</b> One article is only one perspective. Culturally safe care must reach <b>all</b> patients. <b>Don’t put the burden on community members to teach you</b> — it’s your responsibility to learn. Indigenous ways of knowing can be applied to <b>any</b> patient.</p>` },
        { t: "mcq", q: "A Métis patient is nearing end of life. A family member asks to burn sweetgrass in the room. The hospital has a smoke-free building policy. What is the BEST initial nursing response?",
          opts: ["Refuse, because policy forbids all smoke", "Tell the family it won’t help the patient medically", "Acknowledge the importance of the request and find out about the hospital’s Indigenous healing/cultural practices policy and supports to make it possible", "Ask the family to explain all Métis traditions to the staff"],
          a: 2, why: "Culturally safe care honours the request and works within supporting policies (like LHSC’s). Refusing or dismissing causes harm; making the family teach shifts the burden onto them." },
        { t: "mcq", q: "Which statement reflects the lecture’s guidance on learning about Indigenous ways of knowing?",
          opts: ["Ask Indigenous patients to educate you on their culture", "Indigenous knowledge can be summarized in one universal definition", "It is the nurse’s responsibility to do the work to learn, and to learn from Indigenous voices directly", "Non-Indigenous scholars are the most reliable source"], a: 2, why: "Don’t burden community members; learn from Indigenous voices; knowledge is diverse and not universally defined." },
        { t: "reflect", q: "How would you handle the sweetgrass request — and how might the patient and family feel if you refused?", min: 40,
          model: `<ul><li>Acknowledge and validate the request; ask what the family needs.</li><li>Check the hospital’s Indigenous healing/cultural practices policy; involve Indigenous health or spiritual care services.</li><li>A refusal could cause distress, loss of dignity and trust, and repeat harms like those in the StatCan data.</li><li>Links to cultural safety, CNO Principle 2 and ethical knowing.</li></ul>` }
      ]
    },
    {
      id: "w4boss", title: "Week 4 Boss Quiz", mins: 8, flower: "👑", boss: true,
      items: [
        { t: "mcq", q: "A nurse reviews current research to choose the best wound dressing. Which pattern of knowing is she using?",
          opts: ["Aesthetic", "Empiric", "Personal", "Emancipatory"], a: 1, why: "Research and evidence = empiric knowing." },
        { t: "mcq", q: "A nurse feels torn when a family asks her not to tell their father about his cancer diagnosis, but the father keeps asking what is wrong. Which pattern of knowing is MOST engaged?",
          opts: ["Ethical", "Empiric", "Aesthetic", "Emancipatory"], a: 0, why: "Navigating right vs. wrong (truth-telling, autonomy) is ethical knowing; the tension may cause moral distress." },
        { t: "mcq", q: "After noticing many patients can’t afford prescribed medications, a nurse joins an advocacy group pushing for pharmacare. This is:",
          opts: ["Personal knowing", "Emancipatory knowing", "Aesthetic knowing", "Empiric knowing"], a: 1, why: "Addressing systemic inequities = emancipatory knowing." },
        { t: "mcq", q: "Which of the following is one of the four concepts of the nursing metaparadigm?",
          opts: ["Medicine", "Environment", "Theory", "Culture"], a: 1, why: "Person, health, environment, nursing." },
        { t: "mcq", q: "A nurse recognizes she feels impatient with patients who smoke because her father died of lung cancer, and she consciously adjusts her approach. This is:",
          opts: ["Personal knowing", "Ethical knowing", "Aesthetic knowing", "Empiric knowing"], a: 0, why: "Awareness of how your own experiences and biases affect care = personal knowing." },
        { t: "sata", q: "Which are CNA (2017) nursing values? Select all that apply.",
          opts: ["Honouring dignity", "Promoting justice", "Maximizing efficiency", "Maintaining privacy and confidentiality", "Being accountable"], a: [0, 1, 3, 4], why: "Efficiency is an institutional priority, not a CNA nursing value." },
        { t: "mcq", q: "Why might nurses come to relate more to a disease than to the person living with it?",
          opts: ["Because nursing theory requires it", "Because institutions are often structured around disease treatment and efficiency", "Because patients prefer it", "Because of emancipatory knowing"], a: 1, why: "Disease-treatment, business-model institutions shape what nurses come to value." },
        { t: "mcq", q: "Which statement about Indigenous ways of knowing is MOST accurate?",
          opts: ["They are uniform across all Indigenous communities", "They are diverse and ever-changing and should not be universally defined", "They only apply to Indigenous patients", "They are best learned from non-Indigenous textbooks"], a: 1, why: "Indigenous knowledges are diverse, growing and changing — and can inform care for ANY patient." }
      ]
    }
    ]
  },
  /* ====================================================== WEEK 6 */
  {
    id: "w6", num: 6, title: "Approaches to Nursing Practice", date: "Oct 20",
    blurb: "Relational inquiry & the 5 C’s, strengths-based nursing, and trauma- and violence-informed care. Readings: Doane & Varcoe Ch. 4; McGill SBNH.",
    badge: { name: "Relational Rose", icon: "🌹" },
    lessons: [
    {
      id: "w6l1", title: "Relational inquiry", mins: 13, flower: "🌹",
      items: [
        { t: "learn", title: "Approaches to nursing practice", html: `
          <p>An approach = the way a nurse acts, behaves and thinks about the client and their situation. <b>How we approach clients reflects what we value.</b></p>
          <p>An <b>individualistic approach</b> dominates many settings: nurses see themselves as individually responsible for good care without considering the contextual constraints affecting it (Doane &amp; Varcoe, 2015).</p>
          <div class="defn"><b>What we want to avoid — a decontextualized view:</b> sees people cut off from their worlds; ignores the context around an illness and focuses only on the illness; sees a “person with a diagnosis.”</div>
          <p><b>Relational inquiry</b> has two key components: <span class="key">relational orientation</span> and <span class="key">inquiring action</span>.</p>` },
        { t: "learn", title: "Relational orientation", html: `
          <p>Communicate in a way that lets you assess:</p>
          <div class="grid3"><div><b>Interpersonal</b><span>What’s going on among and between people?</span></div><div><b>Contextual</b><span>What’s going on around the people and situation?</span></div><div><b>Intrapersonal</b><span>What’s going on within each person — the client, you, others?</span></div></div>
          <p>Pay attention to the patient’s story: what brought them here? Who is with them / not with them? How were they talking to the last person (angry, in pain, joking, tired)? What matters to them right now?</p>
          <p><b>Contexts</b> = physical places (home, neighbourhood, health care setting) <i>and</i> socioeconomic, cultural and historical contexts. Also examine <b>your own</b> context: power, understaffing, your assumptions. Avoid labels like “difficult” or “non-compliant” patient.</p>` },
        { t: "sort", title: "Interpersonal, contextual or intrapersonal?", buckets: ["Interpersonal", "Contextual", "Intrapersonal"], items: [
          ["Terry’s wife answers every question for him", 0],
          ["Terry lives 2 hours from the transplant clinic with no car", 1],
          ["Terry feels anxious and worries he’ll “mess up” his new heart", 2],
          ["The unit is short-staffed today, so discharge teaching feels rushed", 1],
          ["You notice you feel impatient because you’re behind on charting", 2],
          ["Terry jokes with the physiotherapist but goes quiet with the doctor", 0] ] },
        { t: "learn", title: "Inquiring action & reference points", html: `
          <p><b>Inquiring action</b> (second component): an inquiry-based practice gives a wider, deeper understanding of a situation, helps decide what’s most significant and what other knowledge you need. Inquiring means asking questions of others <b>and of yourself</b> (intrapersonal inquiry).</p>
          <p><b>Reference points</b> = where you start thinking. Nurses’ are often <b>biomedical</b> and service/problem-focused: assessing what’s wrong, efficiency, treating symptoms, giving meds on time.</p>
          <p>Relational inquiry <b>shifts reference points</b> and prioritizes nursing knowledge — entering each situation as an <b>inquirer</b>.</p>
          <p><b>Relational inquiry is NOT:</b> confined to the nurse-patient relationship; “soft” or only interpersonal communication; only about developing relationships.</p>` },
        { t: "mcq", q: "Terry, 55, just had a heart transplant, has 10 new lifelong medications, needs physio and diet teaching, and is anxious. Which nursing focus reflects a DECONTEXTUALIZED view?",
          opts: ["Exploring how Terry’s family can support him at home", "Asking Terry what worries him most about going home", "Focusing only on completing medication teaching and physio before discharge", "Considering how Terry will afford and access his medications"], a: 2, why: "Focusing only on the illness/tasks without context or what matters to Terry is decontextualized." },
        { t: "mcq", q: "Which statement about relational inquiry is CORRECT?",
          opts: ["It is confined to the nurse-patient relationship", "It is mainly about soft interpersonal skills", "It involves asking questions of others and of yourself, and shifting from biomedical reference points", "It means focusing on efficiency and completing tasks"], a: 2, why: "Inquiry includes intrapersonal questioning and shifting reference points. It is NOT confined, NOT soft, NOT only about relationships." }
      ]
    },
    {
      id: "w6l2", title: "The 5 C’s of relational inquiry", mins: 10, flower: "🌺",
      items: [
        { t: "learn", title: "Reading recap: Doane & Varcoe Ch. 4", html: `
          <p class="src">Doane, G. H., &amp; Varcoe, C. (2021). How are nursing obligations determined? The 5 C’s supporting relational inquiry. In <i>How to Nurse: Relational Inquiry in Action</i> (2nd ed.).</p>
          <p>Nursing obligations aren’t set by a checklist — they’re worked out in each situation by paying attention to people, their contexts and what matters. The <b>5 C’s</b> are nursing capacities — a way of being with clients:</p>
          <div class="pk"><b>Compassionate</b><span>“To share suffering” — being with and enduring with someone; relating human being to human being.</span></div>
          <div class="pk"><b>Corresponding to what is</b><span>Relating to people in a way that is meaningful to <i>them</i>, responsive to the actual situation.</span></div>
          <div class="pk"><b>Curious</b><span>Interested, inquisitive, open to uncertainty; working between knowing and not knowing; humble, critically questioning.</span></div>
          <div class="pk"><b>Committed</b><span>Intentionally identifying the values that orient your work and monitoring whether your actions align.</span></div>
          <div class="pk"><b>Competent</b><span>Not just knowledge and skills — a unique understanding of each person and situation.</span></div>` },
        { t: "match", title: "Match the C", pairs: [
          ["Compassionate", "Sharing suffering; being with and enduring with someone"],
          ["Corresponding", "Relating in a way that’s meaningful to that person"],
          ["Curious", "Open to uncertainty, between knowing and not knowing"],
          ["Committed", "Checking that actions align with your values"],
          ["Competent", "Unique understanding of each person and situation"] ] },
        { t: "mcq", q: "Post-op, one nurse pulls the covers off a barely-awake patient and says it’s time to walk. Another takes the patient’s hand and says reassuringly, “the rest of your life starts here,” before walking together. The second nurse best demonstrates:",
          opts: ["Corresponding to what is", "Coercive power", "Empiric knowing", "Cultural imposition"], a: 0, why: "The lecture used this exact example for “corresponding to what is” — relating in a way meaningful to the patient." },
        { t: "mcq", q: "A nurse who values family-centred care deliberately makes time each shift to talk with families, and notices when she drifts from this. Which C is this?",
          opts: ["Curious", "Committed", "Competent", "Compassionate"], a: 1, why: "Committed = identifying your values and monitoring whether actions align (the lecture’s family-centred care example)." },
        { t: "mcq", q: "Within relational inquiry, competence is best described as:",
          opts: ["Mastery of clinical skills and knowledge only", "A nurse’s unique understanding of each person and situation", "Following policy exactly", "Completing tasks efficiently"], a: 1, why: "Competence in RI goes beyond knowledge/skills to understanding people uniquely in each situation." }
      ]
    },
    {
      id: "w6l3", title: "Strengths-based nursing", mins: 13, flower: "🌻",
      items: [
        { t: "learn", title: "From “what’s wrong?” to “what’s right?”", html: `
          <p>Developed by <b>Laurie Gottlieb</b> (McGill University). <b>Strengths-Based Nursing and Healthcare (SBNH)</b> enlarges the conversation from “What’s wrong?” to include <b>“What’s right?”</b></p>
          <div class="defn"><b>Deficit-based care</b> (the norm in our fragmented, depersonalized system) focuses on the dysfunctional — what needs fixing. Patients become cases.</div>
          <p>Strengths-based care <b>does not ignore problems</b> — it balances focusing on strengths while dealing with problems; places problems in context; knows people’s strengths to <b>mobilize</b> them for health, healing and recovery.</p>
          <p>Clients “rise to the challenge” when they’re <b>active partners</b> and have confidence in their abilities to draw on and develop their strengths.</p>` },
        { t: "learn", title: "Joyce: deficits vs. strengths", html: `
          <div class="two"><div><b>Deficit view</b><br>18-year-old single parent of a 2-year-old · 20 weeks pregnant · smokes cigarettes and occasionally marijuana · on Ontario Works · followed by a social worker and Children’s Aid Society</div><div><b>Strengths view</b><br>Independent; her priority is her child · has lived through drug abuse and difficult family relationships · good relationship with her social worker; reaches out for help · has an apartment and is managing rent</div></div>` },
        { t: "learn", title: "The shift in a strengths-based relationship", html: `
          <ul class="fromto">
          <li><b>FROM</b> focusing on deficits <b>TO</b> working with the person’s strengths</li>
          <li><b>FROM</b> doing <i>for</i> the person <b>TO</b> working <i>with</i> the person</li>
          <li><b>FROM</b> focusing on disease and its treatment <b>TO</b> living and coping with challenges</li>
          <li><b>FROM</b> nurse as teacher <b>TO</b> nurse and person as learners</li>
          <li><b>FROM</b> measuring set outcomes <b>TO</b> the person setting their own goals and measures of success</li></ul>` },
        { t: "learn", title: "McGill SBNH: 4 pillars & 8 values", html: `
          <p><b>4 Foundational Pillars:</b> Person-Centred · Empowerment · Relational · Innate Capacities</p>
          <ol>
          <li><b>Health &amp; Healing</b> — health is wholeness; healing restores wholeness</li>
          <li><b>Uniqueness</b> — every person/family/event differs</li>
          <li><b>Holism &amp; Embodiment</b> — everything is interconnected; we experience the world through our bodies</li>
          <li><b>Subjective Reality &amp; Created Meaning</b> — people make meaning through stories</li>
          <li><b>Self-Determination</b> — taking charge, making choices, feeling in control</li>
          <li><b>Person-Environment are Integral</b> — people shape and are shaped by their environments; goodness-of-fit</li>
          <li><b>Learning, Readiness &amp; Timing</b> — people learn best when ready and timing is right</li>
          <li><b>Collaborative Partnership</b> — power is shared; goals set jointly</li></ol>` },
        { t: "match", title: "Match the SBNH value", pairs: [
          ["Uniqueness", "Each person, family and illness event is different"],
          ["Self-Determination", "Taking charge, making choices, feeling in control"],
          ["Collaborative Partnership", "Power is shared; goals set jointly"],
          ["Learning, Readiness & Timing", "People learn best when they feel ready for change"],
          ["Subjective Reality & Created Meaning", "People make meaning through narratives and stories"],
          ["Holism & Embodiment", "Body, mind and soul are interconnected"] ] },
        { t: "sata", q: "Which are the four foundational pillars of SBNH? Select all that apply.",
          opts: ["Person-Centred", "Empowerment", "Efficiency", "Relational", "Innate Capacities", "Deficit Correction"], a: [0, 1, 3, 4], why: "Person-Centred, Empowerment, Relational, Innate Capacities." },
        { t: "mcq", q: "A nurse caring for Joyce focuses only on her smoking and involvement with Children’s Aid. A strengths-based nurse would ALSO:",
          opts: ["Ignore the smoking because it’s a deficit", "Recognize Joyce’s commitment to her child, her trusted social worker relationship and her stable housing, and mobilize these to support her goals", "Report Joyce for smoking while pregnant", "Set the goals for Joyce since she’s young"], a: 1, why: "Strengths-based care balances problems with strengths and mobilizes strengths — it doesn’t ignore deficits." },
        { t: "mcq", q: "Which is a shift that occurs in a strengths-based collaborative relationship?",
          opts: ["From working with the person to doing for the person", "From the nurse as teacher to both nurse and person as learners", "From the person’s goals to standardized outcomes", "From living with illness to focusing on the disease"], a: 1, why: "All the other options are backwards." }
      ]
    },
    {
      id: "w6l4", title: "Trauma & violence informed care", mins: 14, flower: "💐",
      items: [
        { t: "learn", title: "What is trauma?", html: `
          <div class="defn">The experience of, and response to, a negative event(s) that threatens the client’s safety, life or integrity and <b>overwhelms their ability to cope</b>.</div>
          <ul><li>More than “everyday stress.”</li><li>Can be <b>acute</b> (single event) or <b>chronic/complex</b> (repeated experiences).</li><li>Responses include shock, terror, shame, powerlessness — <b>fight, flight, freeze, fawn</b>.</li><li>What trauma looks like differs between people and groups.</li></ul>
          <div class="two"><div><b>Interpersonal</b><br>Child abuse/neglect, abandonment, sexual assault, IPV, children’s experience of IPV, torture/confinement, abuse of older adults</div><div><b>Situational</b><br>Sudden death of a loved one, war/genocide, crime, job loss, being a refugee, extreme poverty, homelessness, disasters, accidents</div></div>
          <p><b>Collective trauma</b> — historical, multigenerational and ongoing (e.g., colonialism, residential schools). <span class="src">(Wathen, n.d.)</span></p>` },
        { t: "sort", title: "How does trauma show up?", buckets: ["Emotional", "Cognitive", "Biological", "Psychosocial"], items: [
          ["Irritability and guilt", 0], ["Intrusive thoughts and self-blame", 1], ["Nightmares and insomnia", 2], ["Social withdrawal", 3], ["Startle response", 2], ["Impaired concentration", 1], ["Substance use", 3], ["Terror and helplessness", 0] ] },
        { t: "learn", title: "TVIC", html: `
          <ul><li>A <b>universal approach</b> — assumes a person is more likely than not to have a history of trauma.</li><li>Recognizes trauma symptoms and acknowledges trauma’s role in a client’s life.</li><li>Shift from <b>“What is wrong with this person?”</b> to <b>“What has happened to this person?”</b></li><li>Not only about treating abuse symptoms — it’s about understanding impacts and creating <b>emotionally and physically safe</b> environments for all.</li></ul>
          <p><b>Re-traumatization</b> can come from:</p>
          <div class="two"><div><b>System</b> (policies, “the way things are done”)<br>retelling the story repeatedly · being a number · procedures requiring disrobing · being seen as a label (“addict”) · no choice in treatment · no chance to give feedback</div><div><b>Relationship</b> (power, control)<br>not seen/heard · violating trust · failing to ensure emotional safety · non-collaborative · doing <i>for</i> not <i>with</i> · punitive/coercive practices, oppressive language</div></div>` },
        { t: "learn", title: "What a trauma-informed approach looks like", html: `
          <ul><li>Understand trauma and violence and their impacts on lives and behaviour</li><li>Be mindful of potential histories (“red flags”)</li><li>Handle disclosures appropriately: <b>believe, affirm and validate</b>, express concern for safety</li><li>Create emotionally and physically safe environments for clients <i>and</i> providers</li><li>Non-judgmental; foster connection and trust; give clear information and expectations</li><li>Foster <b>choice, collaboration and connection</b>; actively listen and privilege the client’s voice</li><li>Use a <b>strengths-based</b>, capacity-building approach; acknowledge historical and structural conditions; teach calming/centring skills</li></ul>
          <p><b>Communication strategies:</b> ensure privacy and confidentiality · maximize choice and control · let the client set the pace · introduce yourself, your role, purpose and each step · respect space; <b>ask permission to touch</b> · offer options on what to discuss first · express kindness, patience, acceptance.</p>
          <p><b>Become trauma-informed by:</b> <b>Realizing</b> the prevalence of trauma · <b>Recognizing</b> how it affects everyone in the system (incl. staff) · <b>Responding</b> by putting this into practice · <b>Pausing</b> between witnessing a behaviour and reacting with judgment.</p>` },
        { t: "mcq", q: "Which question best reflects a trauma and violence informed approach?",
          opts: ["“What is wrong with this person?”", "“What has happened to this person?”", "“Why won’t this patient comply?”", "“Which diagnosis explains this behaviour?”"], a: 1, why: "TVIC shifts from “what’s wrong with you” to “what happened to you.”" },
        { t: "sata", q: "A patient with a history of sexual assault needs a physical assessment. Which nursing actions are trauma-informed? Select all that apply.",
          opts: ["Explain who you are, why you’re there, and each step before doing it", "Ask permission before touching", "Complete the assessment quickly without discussion to minimize discomfort", "Offer the patient choices, such as what to discuss first or having a support person present", "Ask her to retell the full details of the assault for documentation"],
          a: [0, 1, 3], why: "Rushing without explanation removes control; making her retell her story repeatedly is re-traumatizing." },
        { t: "mcq", q: "A patient in the ER is labelled “the addict in bed 4” at handover and has had to repeat his history to four different staff. These are examples of:",
          opts: ["Strengths-based care", "Potential re-traumatization by the system", "Relational orientation", "Emancipatory knowing"], a: 1, why: "Being seen as a label and continually retelling the story are system-level re-traumatization." },
        { t: "mcq", q: "Why is TVIC described as a “universal” approach?",
          opts: ["It only applies to patients who disclose trauma", "It assumes any person is more likely than not to have a trauma history, so it is used with everyone", "It was developed by the WHO", "It replaces all other nursing approaches"], a: 1, why: "Universal precautions-style: assume trauma may be present for everyone." }
      ]
    },
    {
      id: "w6l5", title: "Bringing approaches together", mins: 6, flower: "🌷",
      items: [
        { t: "learn", title: "Similarities between the three approaches", html: `
          <p>Relational inquiry, strengths-based nursing and TVIC all:</p>
          <ul><li>Look at the <b>whole person in context</b> — not a “person with a diagnosis”</li><li>Centre <b>relationships, collaboration and shared power</b> (working <i>with</i>, not doing <i>for</i>)</li><li>Recognize and <b>mobilize strengths</b></li><li>Avoid labels like “non-compliant,” “difficult,” “addict”</li><li>Ask nurses to examine <b>themselves</b> — assumptions, biases, reactions</li><li>Acknowledge <b>structural and historical</b> conditions (links to cultural safety and emancipatory knowing)</li></ul>` },
        { t: "reflect", q: "Which of the three approaches feels most meaningful to you personally, and why? Describe how you’d use it with one real or imagined patient.", min: 45,
          model: `<ul><li>Chooses one approach and explains <i>why</i> it resonates (personal knowing).</li><li>Gives a concrete patient example with specific actions (e.g., asking permission to touch; asking “what matters to you?”; identifying a strength to build on).</li><li>Mentions how it overlaps with the other two.</li></ul>` }
      ]
    },
    {
      id: "w6boss", title: "Week 6 Boss Quiz", mins: 9, flower: "👑", boss: true,
      items: [
        { t: "mcq", q: "A nurse says, “Mr. K is non-compliant with his diabetic diet.” A nurse using relational inquiry would FIRST:",
          opts: ["Re-teach the diet with more emphasis", "Explore Mr. K’s context — food access, finances, culture, what matters to him — and her own assumptions", "Document non-compliance and notify the physician", "Ask the dietitian to take over"], a: 1, why: "Relational inquiry avoids labels and inquires into context and the nurse’s own assumptions." },
        { t: "mcq", q: "Which C of relational inquiry involves “working in between knowing and not knowing”?",
          opts: ["Compassionate", "Competent", "Curious", "Committed"], a: 2, why: "Being curious = open to uncertainty, between knowing and not knowing." },
        { t: "mcq", q: "Which statement BEST reflects strengths-based nursing?",
          opts: ["Problems and deficits should be ignored to keep patients positive", "The nurse balances strengths with problems and mobilizes strengths to support health and healing", "The nurse sets goals and measures success for the patient", "Strengths-based care is only for mental health settings"], a: 1, why: "SBN doesn’t ignore problems; it balances and mobilizes strengths." },
        { t: "sata", q: "Which are re-traumatizing practices at the RELATIONSHIP level? Select all that apply.",
          opts: ["Not seeing or hearing the client", "Violating trust", "Doing things for rather than with the client", "Procedures that require disrobing", "Using coercive practices and oppressive language"], a: [0, 1, 2, 4], why: "Disrobing procedures are listed under SYSTEM-level re-traumatization." },
        { t: "mcq", q: "Relational orientation asks nurses to assess what is going on WITHIN the people involved. This is the:",
          opts: ["Interpersonal level", "Contextual level", "Intrapersonal level", "Environmental level"], a: 2, why: "Intrapersonal = within the people involved (including yourself)." },
        { t: "mcq", q: "A nurse pauses before reacting to a patient who is yelling, reminding herself this may be a trauma response. This reflects which part of becoming trauma-informed?",
          opts: ["Realizing", "Pausing between witnessing a behaviour and reacting with judgment", "Re-traumatizing", "Reference points"], a: 1, why: "The lecture: pause in the space between witnessing a behaviour and reacting with judgment." },
        { t: "mcq", q: "Nurses’ reference points are often anchored in a biomedical perspective. Which is an example?",
          opts: ["Asking a patient what matters most to them today", "Focusing on giving medications on time and completing tasks efficiently", "Exploring a family’s strengths", "Examining one’s own biases"], a: 1, why: "Biomedical reference points: what’s wrong, efficiency, symptoms, meds on time." },
        { t: "mcq", q: "Which SBNH value says people shape and are shaped by their surroundings, relationships and ecosystems?",
          opts: ["Uniqueness", "Person-Environment are Integral", "Health & Healing", "Self-Determination"], a: 1, why: "Person-Environment are Integral — including goodness-of-fit." },
        { t: "mcq", q: "Collective trauma includes:",
          opts: ["A car accident", "Unexpected job loss", "Colonialism and residential schools", "A single robbery"], a: 2, why: "Collective trauma is historical, multigenerational and ongoing." }
      ]
    }
    ]
  }
  ],

  /* ====================================================== MOCK MIDTERM */
  exam: {
    id: "exam", title: "Mock Midterm", mins: 40, flower: "🏆", sample: 10,
    blurb: "30 integrated NCLEX-style questions + 10 random review questions from Weeks 1–6. Answers revealed at the end — like the real thing.",
    items: [
      { t: "mcq", q: "A nursing student says, “I treat everyone the same — I don’t see colour.” Based on N1040 content, the BEST response from her instructor would highlight that:",
        opts: ["Treating everyone the same is the definition of cultural safety", "Ignoring identity can overlook how racism, privilege and context shape patients’ experiences", "Colour-blindness eliminates implicit bias", "This statement reflects cultural humility"], a: 1, why: "CNO Principle 2 asks nurses to recognize identity factors; “not seeing colour” ignores systemic racism and privilege." },
      { t: "mcq", q: "Which scenario BEST reflects emancipatory knowing?",
        opts: ["A nurse uses a validated pain scale", "A nurse notices her own discomfort with a patient’s religion", "A nurse advocates for interpreter services after seeing non-English-speaking patients receive delayed care", "A nurse senses a patient is frightened and holds her hand"], a: 2, why: "Recognizing and challenging systemic inequities = emancipatory." },
      { t: "mcq", q: "A nurse tells an Indigenous patient that traditional medicines are “not real medicine” and insists on only hospital treatment. This is an example of:",
        opts: ["Cultural humility", "Cultural imposition", "Cultural safety", "Reflexivity"], a: 1, why: "Imposing one’s own beliefs as superior = cultural imposition." },
      { t: "mcq", q: "Which statement about the Cycle of Socialization is correct?",
        opts: ["It was developed by Kimberlé Crenshaw", "It explains how stereotypes and biases are formed and sustained, and that the cycle can be interrupted", "It ends permanently at the Results stage", "It applies only to childhood"], a: 1, why: "Harro’s cycle explains how biases are formed and sustained; Direction for Change interrupts it." },
      { t: "sata", q: "A client recently arrived in Canada as a refugee. Which factors might the nurse anticipate as health challenges? Select all that apply.",
        opts: ["Language barriers", "Social isolation", "A waiting period for provincial health insurance", "Cultural practices being undervalued", "Automatic assignment of a family physician"], a: [0, 1, 2, 3], why: "There’s no automatic family physician — difficulty finding one is a listed challenge." },
      { t: "mcq", q: "A nurse uses her position as charge nurse to assign herself the easiest patients. This is a misuse of which form of power?",
        opts: ["Referent", "Legitimate", "Informational", "Reward"], a: 1, why: "Power from a formal position/title = legitimate power." },
      { t: "mcq", q: "Which nurse’s statement shows CRITICAL reflection?",
        opts: ["“I need to practise my IV starts.”", "“I wonder whether I spent less time with that patient because I assumed he was drug-seeking — and where that assumption came from.”", "“That shift was exhausting.”", "“The patient was difficult.”"], a: 1, why: "Questioning assumptions and their origins = critical reflection." },
      { t: "mcq", q: "According to Smith (2021), why do some defenders of Nightingale reject claims of her racism?",
        opts: ["They rely on evidence from Nightingale and her supporters — a white-centred view of whose evidence counts", "They have reviewed Seacole’s writing", "Nightingale never wrote about Indigenous peoples", "Historians agree she was not racist"], a: 0, why: "Smith says defenders cite only Nightingale and her supporters, assuming only white people’s evidence counts." },
      { t: "mcq", q: "A patient who uses substances has been waiting 6 hours in the ER and is yelling at staff. A trauma-informed nurse would:",
        opts: ["Call security immediately", "Stay calm, introduce herself, acknowledge his frustration, explain what’s happening and offer choices where possible", "Ignore him until he calms down", "Tell him he’ll be seen faster if he stops yelling"], a: 1, why: "TVIC: safety, clear information, choice, non-judgment, pausing before reacting." },
      { t: "mcq", q: "Which statement best reflects van der Cingel & Brouwer’s view of compassion?",
        opts: ["Compassion is a purely emotional, “female” trait", "Compassion is a virtuous emotion that involves thinking — doing and thinking are bonded in nursing", "Compassion is unrelated to why people enter nursing", "Compassion leads to burnout and should be avoided"], a: 1, why: "Drawing on Nussbaum, emotions are intelligent judgements; compassion needs thinking." },
      { t: "mcq", q: "During a home visit, a nurse notices a client’s fridge is empty and asks gently about food access before teaching about a diabetic diet. Which component of relational inquiry is she using?",
        opts: ["Decontextualized view", "Relational orientation — attending to context", "Reward power", "Cultural imposition"], a: 1, why: "Attending to what’s going on around the person = contextual awareness within relational orientation." },
      { t: "mcq", q: "Which is an example of a microaggression in a clinical setting?",
        opts: ["A hospital policy denying interpreters", "A patient telling a hijab-wearing nurse, “Your English is so good!”", "A nurse following an evidence-based protocol", "A nurse asking a patient for their pronouns"], a: 1, why: "An everyday slight implying she’s foreign/other based on group membership." },
      { t: "mcq", q: "A nurse realizes she feels uncomfortable caring for a gay couple because of beliefs she was raised with. According to CNO Principle 2 and Code Principle 1.9, she should:",
        opts: ["Refuse to care for them", "Reflect on her biases, not act on them, and provide safe, compassionate care", "Ask a colleague to switch without explanation", "Share her beliefs with the couple"], a: 1, why: "Nurses self-reflect on biases and don’t act on stereotypes; when beliefs conflict, they still provide safe, compassionate care." },
      { t: "mcq", q: "Which pattern of knowing is MOST at risk of being undervalued in a biomedically dominated health system?",
        opts: ["Empiric", "Aesthetic", "Pathophysiology", "Pharmacology"], a: 1, why: "Biomedical hegemony privileges empirical/medical knowledge; intuitive, artful (aesthetic) knowing is often devalued." },
      { t: "mcq", q: "A client says, “I’ve quit smoking three times before.” A strengths-based nurse would respond:",
        opts: ["“Relapse rates are very high, so be careful.”", "“That shows real determination. What helped you those times?”", "“You need to try harder this time.”", "“Smoking is very harmful during recovery.”"], a: 1, why: "Recognizing and mobilizing strengths from past successes." },
      { t: "sata", q: "Which actions reflect cultural SAFETY? Select all that apply.",
        opts: ["Asking how the clinic’s policies may create barriers for certain groups", "Responding respectfully when a colleague makes a joke about a cultural group", "Memorizing a list of cultural beliefs about pain", "Addressing power imbalances in the nurse-client relationship", "Recognizing that the client determines whether care feels safe"], a: [0, 1, 3, 4], why: "Memorizing belief lists is the cultural inventory/competence approach the readings critique." },
      { t: "mcq", q: "Which Week 2 milestone describes nurses working in hospitals with scientifically trained physicians and being expected to be single, white, female and English-speaking?",
        opts: ["Nightingale era", "Medicalization of nursing", "Evidence-based practice", "Nursing science and research"], a: 1, why: "That’s the medicalization of nursing milestone." },
      { t: "mcq", q: "Judy is admitted with ARDS from COVID-19. She lives in a shelter after fleeing a violent relationship. Which approach would view her ONLY as “a patient with ARDS”?",
        opts: ["Relational inquiry", "Trauma and violence informed care", "A decontextualized view", "Strengths-based care"], a: 2, why: "Seeing a person only as their diagnosis is the decontextualized view." },
      { t: "mcq", q: "A nurse educator asks students, “Whose voices are missing from this nursing theory?” She is encouraging students to:",
        opts: ["Reject all nursing theories", "Apply a critical lens to how knowledge was produced and who was excluded", "Memorize theorists’ names", "Focus on empirical knowing only"], a: 1, why: "The course repeatedly asks this to critique theories developed by privileged groups." },
      { t: "mcq", q: "An Indigenous patient in the ER tells you her chest pain was dismissed the last time she came in. Based on StatCan (2024) data, the nurse should recognize that:",
        opts: ["This is uncommon and likely a misunderstanding", "Indigenous people commonly report having their concerns minimized or dismissed, especially in the ER", "The patient is likely exaggerating", "Indigenous patients prefer not to use hospital services"], a: 1, why: "The ER was the most common setting for unfair treatment; concerns were often minimized or dismissed." },
      { t: "mcq", q: "Which statement about intersectionality and privilege is TRUE?",
        opts: ["A person can only be privileged or oppressed, not both", "A white woman with a disability may experience both privilege and oppression", "Intersectionality means adding up a person’s identities", "Privilege is always visible to the person who holds it"], a: 1, why: "People can experience privilege and oppression simultaneously; privilege is often invisible to those who hold it." },
      { t: "mcq", q: "A nurse joins a hospital committee to revise a policy that prevents families from staying overnight with dying patients. Which C of relational inquiry and which pattern of knowing does this best combine?",
        opts: ["Curious + empiric", "Committed + emancipatory", "Competent + aesthetic", "Compassionate + personal"], a: 1, why: "Acting on values (committed) to change systemic policy (emancipatory)." },
      { t: "mcq", q: "A student who sees herself as a “thinker” worries she won’t fit in nursing. Which concept from van der Cingel & Brouwer explains how nurses reinforce the “doer” label by changing their behaviour to fit it?",
        opts: ["Stereotype threat", "Looping effect", "Intersectionality", "Reflexivity"], a: 1, why: "Looping effect: people change behaviour to fit labels, reinforcing them." },
      { t: "mcq", q: "Which is TRUE about cultural humility?",
        opts: ["It can be achieved after a cultural training course", "It is a life-long process of self-reflection and recognizing oneself as a learner", "It focuses on the nurse becoming an expert in other cultures", "It means avoiding conversations about culture"], a: 1, why: "Humility is life-long and positions the nurse as a learner." },
      { t: "mcq", q: "A nurse offers a trauma survivor the choice of a female or male nurse for an intimate procedure. This reflects:",
        opts: ["Fostering choice and control — a trauma-informed practice", "Cultural imposition", "Coercive power", "A decontextualized view"], a: 0, why: "Offering real, meaningful choices is a core TVIC strategy." },
      { t: "mcq", q: "Which statement about the biomedical model and nursing is MOST accurate?",
        opts: ["Nursing knowledge and medical knowledge are identical", "Under biomedical dominance, nurses may come to devalue nursing knowledge such as relationships and caring", "The biomedical model is holistic", "Nursing developed entirely from medicine"], a: 1, why: "Hierarchies lead nurses to prioritize medical knowledge over nursing knowledge." },
      { t: "mcq", q: "Kolb’s Experiential Learning Cycle begins with:",
        opts: ["Abstract conceptualization", "Active experimentation", "Concrete experience", "Reflective observation"], a: 2, why: "Concrete experience → reflective observation → abstract conceptualization → active experimentation." },
      { t: "mcq", q: "A nurse thinks, “This patient is wearing designer clothes, so cost won’t be an issue for his new medications.” The nurse is:",
        opts: ["Using empiric knowing", "Making an assumption — poverty isn’t always visible", "Demonstrating cultural safety", "Using referent power"], a: 1, why: "The lecture’s “suit” example: financial insecurity isn’t always visible." },
      { t: "mcq", q: "Which approach states that nurses and clients are BOTH learners and that clients set their own measures of success?",
        opts: ["Biomedical model", "Strengths-based nursing", "Cultural competence", "Deficit-based care"], a: 1, why: "These are two of the FROM→TO shifts in strengths-based nursing." },
      { t: "mcq", q: "Before Edith Monture, Mary Mahoney and Mary Seacole became more widely recognized, nursing history mainly centred Nightingale. According to the lecture, this produced:",
        opts: ["A complete and accurate history", "A disingenuous history in which marginalized voices were ignored", "A history focused on Indigenous healing", "A history written by nurses of colour"], a: 1, why: "Romanticizing Nightingale created a disingenuous history that ignored marginalized voices." }
    ]
  }
};
