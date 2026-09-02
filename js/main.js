/* ============================================================
   Artificial Intelligence (AD203) — main.js
   Nav, mobile menu, accordion, schedule, modals, reveal, counters
   ============================================================ */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Loading screen ---------------- */
  var LOADER_QUOTES = [
    "Attendance: 74.9%. Please stand behind the podium.",
    "'Please read at home' — the eight scariest words.",
    "The syllabus is a suggestion. The exam is a personal attack.",
    "Started studying at 6 PM. Understood one page. Ordered biryani.",
    "The moment I understand something, the exam ends.",
    "The night before the exam, my chair becomes a throne.",
    "My highlighter has done more studying than me.",
    "The syllabus PDF and I are in a long-distance relationship.",
    "'This won't take long' — the deadliest lie in academia.",
    "Passed by writing 'hence proved' with confidence.",
    "The invigilator walks. My handwriting improves.",
    "My friend said 'super easy'. I have not slept since.",
    "The professor's voice at 8 AM is a lullaby.",
    "I studied so hard the questions had déjà vu.",
    "Every semester ends in tears and a new resolution.",
    "The syllabus was 12 units. The prof taught 4.",
    "Every 'small doubt' is a 20-minute philosophical crisis.",
    "The topper's notes are art. Mine are archaeology.",
    "'Just skim the chapter' — the greatest myth of all time.",
    "My revision plan runs on hope and sugar.",
    "The word 'obviously' in a math book is a threat.",
    "One YouTube video summarized what the prof took 3 weeks to explain.",
    "I don't skip class. I attend remotely from bed.",
    "Mock tests are just live rehearsals for panic.",
    "Grades came. Family group chat became a shareholder meeting.",
    "Studied for 2 hours. Absorbed the desk's aesthetic.",
    "'Just watch the recording' — watched. Napped. Nothing changed.",
    "Chai break at 3 AM: emotional support tea.",
    "The prof said 'this is common sense'. It was not common. Not sense.",
    "My study playlist is the villain of my origin story.",
    "The exam pattern changed 3 times this year. Personal attack.",
    "I don't stress. I just don't sleep. Different thing.",
    "Studied for the exam. Wrote a novel instead.",
    "The reference book has 27 authors. All of them failed me.",
    "Attendance below 75% is a personality change ritual.",
    "I don't have impostor syndrome. I have proof.",
    "Passed the exam. Won the lottery. Same odds.",
    "The prof said 'we'll finish early'. Class ended at 6 PM.",
    "'Any last questions?' — the sentence that adds 30 minutes.",
    "The syllabus is written by the prof who doesn't teach it.",
    "I read the question 5 times. It's still a threat.",
    "The exam hall clock has personal beef with me.",
    "Slept through 3 alarms. Woke up in the exam hall — spiritually.",
    "The syllabus screenshot in the group is a horror teaser trailer.",
    "The reading list is longer than my patience.",
    "Every 'brief overview' is a boss fight.",
    "I've read this paragraph 4 times. Still don't know what it says.",
    "The exam question started with 'in your own words'. I said 'oh no'.",
    "The night before an exam is my Renaissance.",
    "Group project WhatsApp: 300 messages, 0 progress.",
    "Tomorrow-me is going to be so angry at today-me.",
    "Slept 12 hours. Woke up tired. Physics doesn't check out.",
    "My study aesthetic: neat desk, closed book, open Instagram.",
    "The topper said 'I just read the notes'. Sure, Karen.",
    "'Do it for practice' — my most-hated three words.",
    "The final exam is when the semester finally has consequences.",
    "Every 'quick clarification' is a 40-minute monologue.",
    "I don't have a memory. I have vibes.",
    "The syllabus and I have irreconcilable differences.",
    "Marks came. Called mom. Regretted it.",
    "The best time to nap is right before the alarm.",
    "Every viva ends with 'we'll get back to you'. Thankfully they don't.",
    "I studied hard. The exam studied harder.",
    "The prof said 'this will be intuitive'. Nothing has been intuitive.",
    "Every semester I promise to attend all classes. Every semester I lie.",
    "The professor's pause before 'is that clear?' could power a city.",
    "The exam paper had 12 questions. I answered 12. None were right.",
    "The library at 2 AM smells like ambition and Maggi.",
    "I don't underline. I underline what I underlined. That's studying.",
    "Read the chapter title. Called it a productive day.",
    "'This is a fun problem' — professor threats, part 6.",
    "The syllabus is 'flexible'. So is my grasp on reality.",
    "Textbook: 800 pages. Prof: 'just scan through it'.",
    "The night before the exam, I discover new subjects.",
    "The prof: 'no calculator needed'. Also the prof: writes 4-digit sums.",
    "'Do it for concept' — my least favorite three words.",
    "The professor's slide deck weighs more than my ambition.",
    "The exam ended. My handwriting has not been the same.",
    "Genius by day. Panic by night. Zombie by exam.",
    "My laptop stickers know more about me than my parents do.",
    "The Wi-Fi died. The universe is telling me to sleep.",
    "The syllabus PDF has 400 pages. I opened it. Bravery.",
    "Semester progress: caffeine intake, up 400%.",
    "Started the sem with dreams. Ending it with survival.",
    "The mid-sem timetable is a jump scare.",
    "'Refer to slides' — the slides refer to the book. Loop of despair.",
    "Copy-pasted from ChatGPT. Feeling academic.",
    "'You should know this from last sem' — chef's kiss cruelty.",
    "The recorded lecture and I are on episode 3 of trying.",
    "Read chapter 1. Named my firstborn 'Chapter 2'.",
    "The whiteboard is where equations go to be misunderstood.",
    "Every solved example is elegant. Every homework is a war crime.",
    "The prof's 'we've covered this' — I have not. I was born yesterday.",
    "I don't skip breakfast. I skip the concept of morning.",
    "Nothing motivates like the WhatsApp group at 1:47 AM.",
    "The topper is not built different. They just did the readings.",
    "'It's a short chapter' — 60 pages later, still short apparently.",
    "The exam pattern: 'previous year mein aisa nahi tha bhai'.",
    "Woke up. Cried a little. Studied. Cried again. Character arc.",
    "The invigilator makes eye contact. My soul leaves my body.",
    "Post-exam friend meetup: therapy without a license.",
    "The prof said 'this is basic'. I have not felt basic since.",
    "I don't have a study plan. I have a controlled avalanche.",
    "The syllabus is 12 chapters. I know 3. Prayers cover the rest.",
    "'Read once more' — sir, I have read enough for a lifetime.",
    "The exam paper opens. My knowledge closes.",
    "The topper's water bottle is bigger than my ambition.",
    "'Any easy way to remember?' — no. Suffer with us.",
    "My friend explained it in 2 min. Prof took 2 weeks. Same content.",
    "The class WhatsApp: 90% forwards, 10% panic.",
    "The recorded lecture plays. I open Instagram. I am not built for this.",
    "The prof said 'no marks for wrong answers'. My worst nightmare.",
    "Every semester: 'this time I'll be different'. Every semester: same.",
    "Studied all night. Answered wrong questions perfectly.",
    "The last-minute crammer's confidence is not backed by any data.",
    "The syllabus said 'introduction to'. It was not an introduction.",
    "Read the same page 4 times. Understood it in a dream.",
    "The prof asked 'raise your hand if you read'. Silence: award-winning.",
    "The night before the exam is when philosophy really opens up.",
    "The exam is 3 hours. My prep was 3 hours. Coincidence? Yes. Sad.",
    "Nothing brings a class together like the phrase 'grace marks'.",
    "The professor's example: 'consider a simple case'. It was not simple.",
    "My grade is a floating point. It's about to underflow.",
    "'Attendance is not mandatory' — attendance is very much mandatory.",
    "The syllabus fits on a page. The knowledge doesn't fit in my head.",
    "The exam felt easy. The result did not agree.",
    "Studied 3 chapters. Exam had 4. Life is unfair. Chapter 4 was the boss.",
    "My study routine: guilt, denial, chai, panic, submit.",
    "The formula sheet is my personality now.",
    "Woke up at 5 AM. Studied at 5 PM. Time is a construct.",
    "The prof's 'this is trivial' should be a war crime under the Geneva Convention.",
    "The exam question and I are complete strangers.",
    "'You had one job' — me to my past self, every mid-sem.",
    "The library aunty knows my sleep schedule better than I do.",
    "The night before the exam, my room becomes a Pinterest board of despair.",
    "Every solved paper opens with 'this is straightforward'. It is not.",
    "The prof said 'you have plenty of time'. It has been 2 minutes. Panic.",
    "Every 'let's start with basics' turns into linear algebra.",
    "My highlighters have seen more of the book than I have.",
    "The exam invigilator: 'no talking'. My inner monologue: full volume.",
    "The syllabus was in the classroom. I was in the canteen. Balance.",
    "The topper reads for fun. I read for filibuster.",
    "'Just try it once' — the origin story of every all-nighter.",
    "Studied 4 hours. Understood 4 minutes.",
    "Passed by the grace of past year papers.",
    "The syllabus and I are not on speaking terms.",
    "Read the chapter. Absorbed vibes only.",
    "I studied. Just not the right chapters.",
    "The exam was easy. I was not.",
    "My brain buffered. Then blue-screened.",
    "Slept 3 hours. Charged like a phone.",
    "Wrote code. Broke code. Cried.",
    "Fixed one bug. Summoned two.",
    "It worked. Nobody knows why.",
    "Ctrl+Z is a lifestyle.",
    "Debugging by staring intensely.",
    "Stack Overflow raised me.",
    "npm install → npm regret.",
    "Semicolon: the villain of my origin story.",
    "Deleted node_modules for peace.",
    "Sleep? I'll rest when I graduate.",
    "One episode became a lifestyle.",
    "Procrastination is an Olympic event.",
    "Woke up. Regretted it. Started studying.",
    "Trained the model. It trained me back.",
    "Overfit like my summer clothes.",
    "Backprop, back pain, same energy.",
    "Prompted ChatGPT. Got trauma.",
    "AI stole my homework's soul.",
    "Ran on chai and denial.",
    "My blood type: chai positive.",
    "Coffee: liquid coursework.",
    "Attendance saved my degree, not my brain.",
    "The professor's 'small doubt' is a saga.",
    "Sat in the front. Understood nothing.",
    "Group project: two workers, four names.",
    "The group chat achieved silence, not results.",
    "Wrote notes. Never read notes.",
    "My notes are art. Unreadable art.",
    "Highlighted the whole page. Peak strategy.",
    "Submitted at 11:59:59. Peak drama.",
    "Deadline: my personal life coach.",
    "Wifi died. So did my motivation.",
    "Read chapter 1. Named my firstborn.",
    "The textbook is heavy. So is my heart.",
    "Grades released. Pretended to be busy.",
    "Refreshed portal 400 times. Nothing changed.",
    "Library: where I nap in silence.",
    "The lecture ended. I did not learn.",
    "Understood the topic in the exam hall.",
    "My motivation left the group chat.",
    "Focus mode: 3 seconds. Personal best.",
    "Genius by day. Dumbass by exam.",
    "Marks came. Cried in binary.",
    "Passed by rounding up hope.",
    "Attended lecture. Watched lecture recording. Still lost.",
    "The formula sheet is my therapist.",
    "The professor said 'obvious'. I said 'goodbye'.",
    "Started strong. Ended in tears.",
    "5-minute break turned into a career.",
    "My planner is a fiction novel.",
    "Tomorrow-me will handle it. Tomorrow-me lied.",
    "The exam and my prep have never met.",
    "Chapter 1 makes sense. Chapter 2 declares war.",
    "Studied everything except what came.",
    "I don't code. I negotiate with the compiler.",
    "My python is more of a rattlesnake.",
    "Git push. Git pray.",
    "Merge conflict: my emotional state.",
    "The bug fixes itself when I explain it.",
    "Tabs open: 47. Tabs read: 2.",
    "AI: 'here's the answer'. Me: 'thanks bestie'.",
    "GPT wrote my essay. I wrote my regret.",
    "I opened the PDF. That counts.",
    "Woke up early to sleep in the library.",
    "The syllabus PDF and I never made eye contact.",
    "One PPT ruined my whole weekend.",
    "Understood recursion. Then forgot recursion. Repeat.",
    "The lecture is 60% storytime, 40% panic.",
    "Slides had 300 pages. Prof covered 3.",
    "'It's easy' said the professor. It was not easy.",
    "The topper's notes look like a UI design.",
    "My notes look like a ransom letter.",
    "Went to library. Made a friend. Left.",
    "Studied with music. Now I know all the lyrics.",
    "The assignment was due 6 hours ago. I opened it now.",
    "Rewatched the lecture at 2x. Still lost at 1x speed.",
    "Attendance below 75%: welcome to a new personality.",
    "Sem exam schedule dropped. So did I.",
    "Every 'quick recap' is a whole new chapter.",
    "Nothing motivates like the WhatsApp group panic at 2 AM.",
    "Slept through the lecture. Woke up wiser.",
    "My study aesthetic: closed textbook, open Instagram.",
    "The topper is not built different. They just read.",
    "Turned off notifications. Turned them back on. Sad.",
    "Studied for the exam. Got a life lesson instead.",
    "The exam question: 'briefly explain'. Me: writes 8 pages.",
    "Bonus question ideas: my whole life story.",
    "Every result day is a horror film premiere.",
    "The reading list should come with a therapist.",
    "'Refer previous year papers' — my entire strategy.",
    "The chapter has 12 subheadings. All are on the exam.",
    "The lecture recording plays. I fall asleep.",
    "My handwriting is a form of encryption.",
    "The professor asked a question. I made eye contact with the floor.",
    "'Any doubts?' — a threat, not a question.",
    "The last-minute crammer's Bible: PYQs.",
    "Every viva starts with 'introduce yourself' and ends in ego death.",
    "I submitted the assignment. That's the win.",
    "The rubric said 500 words. I wrote 3000. And a poem.",
    "The mid-sem is not real until it's real.",
    "My friend explains it in 30 seconds. The book takes 30 pages.",
    "I don't remember writing this in the exam. But it's my handwriting.",
    "The professor's example: elegant. The homework: a war crime.",
    "Nothing bonds a class like a surprise quiz.",
    "The Wi-Fi is faster than my learning curve.",
    "Every 'optional' reading is very much required.",
    "Post-exam analysis: my varsity sport.",
    "The clock in the exam hall runs on despair time.",
    "The exam paper opened with a question I invented in nightmares.",
    "Every printout is 10% content, 90% acid reflux.",
    "The 'small assignment' takes 14 hours and a support group.",
    "Group study: 20% study, 80% Zomato menu.",
    "My revision plan and my actual revision have never met.",
    "The professor's slides are just 'refer to the book'.",
    "Every semester I start organized. Every semester chaos wins.",
    "Copied the diagram. Called it studying.",
    "One more Reel. Two hours later, exam anxiety.",
    "The exam hall smells like fear and printer ink.",
    "My laptop dies exactly when inspiration arrives.",
    "The last five minutes of the exam: peak productivity.",
    "Studied at 2 AM. Peaked at 3 AM. Crashed at 4.",
    "'This is not on the exam.' It was on the exam.",
    "'As we saw last class' — I did not see anything.",
    "Every laptop sticker: a diary of past personalities.",
    "College taught me content and how to survive on no sleep.",
    "The results email is Schrödinger's inbox.",
    "The professor moves at enlightenment speed. Class does not.",
    "The past paper I skipped is the exact one that repeated.",
    "The internet made me smart. Also broke my focus.",
    "The exam is a mirror. It reflects everything I skipped.",
    "The library at 2 AM is a support group with better lighting.",
    "The friend who says 'I haven't studied' has studied. Trust nothing.",
    "My planner is more optimistic than I am.",
    "'One more cup of chai' has never stopped at one.",
    "Marks came. I found God.",
    "Went to college. Learned Netflix.",
    "Started the semester. Ended the semester. Nothing in between.",
    "Studied so hard I dreamed the wrong syllabus.",
    "The prof asked 'is this clear?'. The class became a photo.",
    "Deadline energy: unmatched. Otherwise: horizontal.",
    "Chai break, chai break, chai break, sleep.",
    "Loading brilliance… batteries not included."
  ];
  
  var loader = document.getElementById("loader");
  var loaderQuoteEl = document.getElementById("loaderQuote");
  var loaderHidden = false;
  var loaderReadyAt = Date.now() + 3200;
  var heroRevealed = false;

  if (loaderQuoteEl) {
    var idx = Math.floor(Math.random() * LOADER_QUOTES.length);
    loaderQuoteEl.textContent = LOADER_QUOTES[idx];
  }

  function revealHero() {
    if (heroRevealed) return;
    heroRevealed = true;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    hero.querySelectorAll("[data-reveal]").forEach(function (el, i) {
      setTimeout(function () { el.classList.add("is-visible"); }, 120 + i * 110);
    });
  }

  function removeLoader() {
    if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
  }

  function hideLoader(immediate) {
    if (!loader || loaderHidden) return;
    var wait = immediate ? 0 : Math.max(0, loaderReadyAt - Date.now());
    loaderHidden = true;
    setTimeout(function () {
      loader.classList.add("is-hidden");
      revealHero();
      setTimeout(removeLoader, 520);
    }, wait);
  }

  if (loader) {
    window.addEventListener("load", function () { hideLoader(false); });
    setTimeout(function () { hideLoader(false); }, 3300);
    loader.addEventListener("click", function () { hideLoader(true); });
  } else {
    revealHero();
  }

  /* ---------------- Schedule data (static resources) ---------------- */
  // Map teaching weeks to units. Resources live in resources/AD203/Unit-N/
  // and are listed in resources/data.js (window.COURSE_DATA.resources).
  var WEEK_UNIT = {
    1: 1, 2: 1,
    3: 2, 4: 2, 5: 2,
    6: 3, 7: 3,
    8: 4, 9: 4, 10: 4,
    11: 5, 12: 5,
    13: 6, 14: 6
  };

  function resourcesForWeek(week) {
    var unitNum = WEEK_UNIT[week];
    var data = window.COURSE_DATA || { resources: [] };
    return (data.resources || []).filter(function (r) {
      if (r.week !== undefined && r.week !== null) {
        return String(r.week) === String(week);
      }
      return String(r.unit || "").replace("Unit ", "") === String(unitNum);
    });
  }

  var SCHEDULE = [
    { week: 1, title: "Introduction to Artificial Intelligence", topics: "History of AI, Philosophy of AI, Definitions and Applications" },
    { week: 2, title: "Agents & Problem Formulation", topics: "Intelligent Agents, PEAS, Environment Types, State Space Representation" },
    { week: 3, title: "Uninformed Search", topics: "BFS, DFS, DLS, IDS, Uniform Cost Search" },
    { week: 4, title: "Informed Search", topics: "Greedy Search, A*, Heuristics" },
    { week: 5, title: "Local Search", topics: "Hill Climbing, Simulated Annealing, Genetic Algorithms" },
    { week: 6, title: "Adversarial Search", topics: "Games, Minimax, Alpha-Beta Pruning" },
    { week: 7, title: "Constraint Satisfaction", topics: "CSP, Backtracking, Arc Consistency" },
    { week: 8, title: "Probability", topics: "Probability Review, Bayes Theorem" },
    { week: 9, title: "Bayesian Networks", topics: "Conditional Independence, Inference, Sampling" },
    { week: 10, title: "Decision Theory", topics: "Utility, Decision Networks" },
    { week: 11, title: "Markov Decision Processes", topics: "Bellman Equations, Policy Evaluation, Value Iteration" },
    { week: 12, title: "Reinforcement Learning", topics: "Monte Carlo, TD Learning, Q-Learning, SARSA" },
    { week: 13, title: "Deep Learning & Deep RL", topics: "Perceptron, MLP, CNN, RNN, DQN, Actor-Critic" },
    { week: 14, title: "LLMs, Ethics & Revision", topics: "Transformers, Large Language Models, Responsible AI, Revision" }
  ];

  /* ---------------- Icon helpers (lucide paths) ---------------- */
  var ICONS = {
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
    fileText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
    bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
    fileCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/></svg>',
    notebookPen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>',
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'
  };

  /* ---------------- Render schedule ---------------- */
  var scheduleList = document.getElementById("scheduleList");
  if (scheduleList) {
    var rows = SCHEDULE.map(function (entry) {
      var has = resourcesForWeek(entry.week).length > 0;
      var row = document.createElement("div");
      row.className = "schedule-row";
      row.setAttribute("data-reveal", "");
      row.innerHTML =
        '<span class="schedule-row__chip">W' + entry.week + "</span>" +
        '<div>' +
          '<p class="schedule-row__week">Week ' + entry.week + "</p>" +
          '<h3 class="schedule-row__title">' + entry.title + "</h3>" +
          '<p class="schedule-row__topics">' + entry.topics + "</p>" +
        "</div>" +
        '<div class="schedule-row__actions">' +
          '<button class="btn btn--ghost btn--sm" data-open-modal="' + entry.week + '" aria-haspopup="dialog">' +
            ICONS.fileText +
            "Course Materials" +
          "</button>" +
          (has ? "" : '<span class="schedule-row__hint">Not yet uploaded</span>') +
        "</div>";
      scheduleList.appendChild(row);
    });
  }

  /* ---------------- Render reference books ---------------- */
  var booksList = document.getElementById("booksList");
  if (booksList) {
    var books = (window.COURSE_DATA && window.COURSE_DATA.books) || [];
    var bookIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>';

    books.forEach(function (book) {
      var card = document.createElement("article");
      card.className = "card book-card";
      card.setAttribute("data-reveal", "");

      var meta =
        '<p class="book-card__author">' + esc(book.author || "") + "</p>" +
        '<p class="book-card__meta">' +
          esc([book.edition, book.publisher].filter(Boolean).join(" · ")) +
        "</p>";

      if (book.note) {
        meta += '<span class="book-card__badge">' + esc(book.note) + "</span>";
      }

      var actions = "";
      if (book.file) {
        actions +=
          '<a class="book-card__action" href="' + esc(book.file) + '" target="_blank" rel="noopener">' +
            ICONS.eye + "View" +
          "</a>" +
          '<a class="book-card__action" href="' + esc(book.file) + '" download>' +
            ICONS.download + "Download" +
          "</a>";
      } else if (book.link) {
        actions +=
          '<a class="book-card__action" href="' + esc(book.link) + '" target="_blank" rel="noopener">' +
            ICONS.eye + "View book" +
          "</a>";
      }

      card.innerHTML =
        '<div class="card__icon" aria-hidden="true">' + bookIcon + "</div>" +
        '<h3 class="book-card__title">' + esc(book.title || "") + "</h3>" +
        meta +
        (actions ? '<div class="book-card__actions">' + actions + "</div>" : "");

      booksList.appendChild(card);
    });

    if (books.length === 0) {
      booksList.innerHTML =
        '<p class="books-empty">Reference books will be shared here soon.</p>';
    }
  }

  /* ---------------- Modal ---------------- */
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var modalTitle = document.getElementById("modalTitle");
  var modalSub = document.getElementById("modalSub");
  var lastFocused = null;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function openModal(week) {
    if (!modal || !modalBody) return;
    lastFocused = document.activeElement;
    var list = resourcesForWeek(week);

    var html = "";
    if (list.length === 0) {
      html +=
        '<div class="modal__empty">' + ICONS.inbox +
          "<p><strong>No materials uploaded yet.</strong></p>" +
          "<p style=\"font-size:0.85rem;\">Lecture slides for this week will appear here when published.</p>" +
        "</div>";
    } else {
      list.forEach(function (item) {
        var href = item.file;
        html +=
          '<div class="material">' +
            '<span class="material__icon">' + ICONS.fileText + "</span>" +
            '<div class="material__meta">' +
              '<p class="material__name">' + esc(item.title) + "</p>" +
              '<p class="material__type">' + esc((item.session || "") + (item.session ? " · " : "") + String(item.type || "").toUpperCase()) + "</p>" +
            "</div>" +
            '<div class="material__actions">' +
              '<a class="material__action material__action--view" href="' + esc(href) + '" target="_blank" rel="noopener">' + ICONS.eye + "View / Open</a>" +
              '<a class="material__action material__action--dl" href="' + esc(href) + '" download>' + ICONS.download + "Download</a>" +
            "</div>" +
          "</div>";
      });
    }

    modalBody.innerHTML = html;
    modalTitle.textContent = "Week " + week + " Materials";
    modalSub.textContent = "Lecture slides, notes, assignments and resources.";

    modal.hidden = false;
    // force reflow so the transition plays
    void modal.offsetWidth;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    var closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    var done = false;
    var finish = function () {
      if (done) return;
      done = true;
      modal.hidden = true;
      modal.removeEventListener("transitionend", finish);
      clearTimeout(timer);
    };
    var timer = setTimeout(finish, 350);
    modal.addEventListener("transitionend", finish);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-open-modal]");
    if (opener) {
      openModal(parseInt(opener.getAttribute("data-open-modal"), 10));
      return;
    }
    if (e.target.closest("[data-modal-close]")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  /* ---------------- Accordion ---------------- */
  var accordion = document.getElementById("accordion");
  if (accordion) {
    accordion.addEventListener("click", function (e) {
      var trigger = e.target.closest(".accordion__trigger");
      if (!trigger) return;
      var item = trigger.closest(".accordion__item");
      var isOpen = item.classList.contains("is-open");

      // close all, then open the clicked one (single-open accordion)
      accordion.querySelectorAll(".accordion__item.is-open").forEach(function (openItem) {
        openItem.classList.remove("is-open");
        openItem.querySelector(".accordion__trigger").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ---------------- Navbar ---------------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");

  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      if (nav) nav.classList.toggle("is-menu-open", !open);
    });
  }

  // close mobile menu when a link is chosen
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.setAttribute("aria-expanded", "false");
      if (nav) nav.classList.remove("is-menu-open");
    });
  });

  /* ---------------- Active section highlight ---------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").replace(/^#/, "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      // hero reveals are driven by revealHero() after the loader hides
      if (!el.closest(".hero")) revealObs.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Count-up stats ---------------- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (prefersReduced) {
      el.textContent = target;
      return;
    }
    var dur = 1100;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var countObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { countObs.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  /* ---------------- Grading progress bars ---------------- */
  var fills = document.querySelectorAll("[data-fill]");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var fillObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-fill");
            fillObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach(function (el) { fillObs.observe(el); });
  } else {
    fills.forEach(function (el) { el.style.width = el.getAttribute("data-fill"); });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Custom cursor ---------------- */
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer && !prefersReduced) {
    document.body.classList.add("custom-cursor-active");
    var dot = document.createElement("div");
    dot.className = "custom-cursor custom-cursor--dot";
    var ring = document.createElement("div");
    ring.className = "custom-cursor custom-cursor--ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mx = -100, my = -100, rx = -100, ry = -100;
    var raf = null;

    function render() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = "translate(" + mx + "px, " + my + "px) translate(-50%, -50%)";
      ring.style.transform = "translate(" + rx + "px, " + ry + "px) translate(-50%, -50%)";
      if (Math.abs(mx - rx) > 0.5 || Math.abs(my - ry) > 0.5) raf = requestAnimationFrame(render);
      else raf = null;
    }

    document.addEventListener("pointermove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity = "1"; ring.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(render);
    }, { passive: true });

    document.addEventListener("pointerdown", function () { ring.classList.add("is-pressed"); });
    document.addEventListener("pointerup", function () { ring.classList.remove("is-pressed"); });

    document.addEventListener("pointerover", function (e) {
      var t = e.target;
      var interactive = t.closest && t.closest("a, button, [role=button], input, select, textarea, .watermark, .accordion__trigger");
      ring.classList.toggle("is-hover", !!interactive);
    });

    document.addEventListener("mouseleave", function () {
      dot.style.opacity = "0"; ring.style.opacity = "0";
    });
  }
})();
