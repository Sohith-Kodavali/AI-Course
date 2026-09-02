/* ============================================================
   Artificial Intelligence (AD203) — main.js
   Nav, mobile menu, accordion, schedule, modals, reveal, counters
   ============================================================ */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Loading screen ---------------- */
  var LOADER_QUOTES = [
    "Sleep is a concept invented by people who finished the syllabus.",
    "Studying at 3 AM hits different — mostly with regret.",
    "My brain has too many tabs open and half of them are frozen.",
    "Coffee: because adulting requires a caffeinated co-processor.",
    "If it compiles, ship it. If it doesn't, blame the compiler.",
    "Success = 1% inspiration + 99% Googling the exact error message.",
    "Deadlines are just suggestions with anxiety attached.",
    "I don't procrastinate. I run background threads on lower priority.",
    "The only bug-free code is the code that was never written.",
    "Programmer's diet: pizza, coffee, and last-minute regret.",
    "There is no elevator to success. You have to take the recursion.",
    "My study playlist is 90% lo-fi and 10% existential dread.",
    "Genius is 1% talent and 99% not falling asleep in lectures.",
    "Neural networks: because if-statements got too personal.",
    "AI won't replace you. A student using AI will.",
    "One does not simply understand backpropagation on the first try.",
    "Learning is like rowing upstream — stop, and you drift back to Instagram.",
    "Assignment due tomorrow? Perfect. That's basically next week.",
    "The tortoise beat the hare because he didn't check TikTok every 5 minutes.",
    "Attention is all you need. Also snacks. Snacks are essential.",
    "My code doesn't have bugs. It has undocumented features.",
    "Reading the textbook is a radical, revolutionary act.",
    "The gradient descends. So does my will to live before finals.",
    "Overfitting: when your model memorizes the exam instead of learning.",
    "Every expert was once a disaster with better lighting.",
    "Fake it till you make it. Then keep faking it because impostor syndrome is forever.",
    "My attention span is O(1) but only for cat videos.",
    "Reinforcement learning: reward yourself with a nap after 5 minutes of study.",
    "The best debugger is a fresh pair of eyes. Preferably at noon, not 4 AM.",
    "If at first you don't succeed, call it version 1.0.",
    "The internet is a library where every book is on the floor.",
    "Study tip: pretend the exam is tomorrow. Because it probably is.",
    "You cannot A* your way out of a bad diet and no sleep.",
    "Alpha-beta pruning your friend list before finals is self-care.",
    "Every semester I start strong and end like a stack overflow.",
    "My brain: 'You should study.' Also my brain: 'Or we could reorganize the desk.'",
    "Bayes taught us: update your beliefs. Especially about how long assignments take.",
    "In theory, theory and practice are the same. In practice, they are not.",
    "Deep learning is just linear algebra with an aesthetic.",
    "Focus is not about saying yes. It's about ignoring 47 notifications.",
    "Reading is to the mind what push-ups are to the body — and I skip leg day.",
    "Some people dream of success. Others wake up and grind the syllabus.",
    "I don't need motivation. I need the fear of failing an exam.",
    "If Python is a snake, JavaScript is a possum in a trench coat.",
    "The compiler is never wrong. Except when it is. Which is often.",
    "Studying is like laundry. It piles up if you ignore it.",
    "My GPA is a floating point number and it's about to underflow.",
    "Learn like you'll live forever. Sleep like the exam is a myth.",
    "I aim for the stars. I hit the ceiling. But hey, I moved up.",
    "Turing complete, mentally incomplete.",
    "You miss 100% of the naps you don't take.",
    "The only way out is through. The only way through is the past papers.",
    "Neural nets learn by making mistakes. So do you. So does everyone.",
    "Coding is 10% writing code and 90% wondering why it doesn't work.",
    "My favorite algorithm is 'try again but slower'.",
    "The exam is not out to get you. It's just… very interested in you.",
    "Reality has a well-known bias toward exponential functions.",
    "I studied so hard I dreamed in pseudocode.",
    "Life is short. Overfit anyway. (No, don't. Regularize.)",
    "Behind every successful student is a caffeine addiction and denial.",
    "Read. Read again. Read once more. Then panic elegantly.",
    "My IDE thinks I'm smart. I don't correct it.",
    "Half of learning is realizing what you don't know. The other half is Google.",
    "The syllabus is a promise. The exam is the enforcement.",
    "Study group: 20% studying, 80% arguing about which restaurant to order from.",
    "My model achieves 99.9% accuracy on the training set and vibes on the test set.",
    "The night before an exam, my brain remembers every embarrassing moment from 2016.",
    "Perfection is the enemy of submitted. Ship it.",
    "You don't drown by falling in the water. You drown by staying there.",
    "AI stands for 'Actual Intern' half the time. Be the intern.",
    "Everything you've ever wanted is on the other side of one more chapter.",
    "One more chapter. That's how books get finished. And how you graduate.",
    "My professor said 'this is important' — 47 times in one lecture.",
    "The recommended textbook has 1200 pages and 3 typos on page 1.",
    "Group projects: where four people learn to hate one person.",
    "'Attendance is not mandatory' is the greatest lie ever told.",
    "I read the syllabus once and haven't recovered.",
    "The library is where I go to feel productive and check my phone.",
    "Every exam paper starts with a question you've never seen before.",
    "My notes look like a crime scene by week four.",
    "The professor writes on the board. I write on the desk. We're both artists.",
    "'The exam will be easy if you attended class' — professor of every course ever.",
    "I bought highlighters. That's basically studying.",
    "The strongest man alive can't lift the tension of an unopened result email.",
    "Nothing unites a class like a surprise quiz.",
    "The lecture makes sense until the professor says 'now the interesting part'.",
    "My friend explains it in one minute. The textbook takes 30 pages.",
    "Assignment: 'be creative'. Also assignment: 'follow the exact rubric'.",
    "The Wi-Fi at the library is faster than my learning curve.",
    "Every course description says 'no prior experience needed'. Every course begs to differ.",
    "The whiteboard is where equations go to be misunderstood.",
    "I started the semester with a fresh notebook and hope. Now I have a notebook.",
    "The exam hall smells like fear and printer ink.",
    "Group projects taught me delegation. Meaning, I did everything.",
    "Study break: five minutes. Actual break: five episodes.",
    "The textbook says 'obviously'. Nothing is obvious. Nothing.",
    "Nothing sharpens focus like the professor saying 'this will be on the exam'.",
    "My revision plan and my actual revision have never met.",
    "The best time to start studying is now. The second best time is never.",
    "The seminar room chairs were designed by an enemy of the spine.",
    "'Any doubts?' — the loudest silence in academia.",
    "The mid-sem doesn't feel real until you see the syllabus PDF.",
    "I forget the derivation the second I close the book.",
    "Every code review is a small personal attack.",
    "Learning Git the first time is a rite of passage. And a war crime.",
    "'Just one more feature' and suddenly it's 4 AM.",
    "The bug was in the last place I looked. Because I stopped looking.",
    "Stack Overflow is the true campus.",
    "I don't have a favorite programming language. I have language trauma.",
    "The rubber duck knows too much.",
    "'It works on my machine' — the six saddest words in tech.",
    "The moment you commit, the bug becomes public knowledge.",
    "Legacy code: writing it is easy, reading it is a spiritual quest.",
    "Every 'quick fix' becomes a permanent fixture.",
    "The docs are wrong, the examples are outdated, and the comments say TODO.",
    "Merge conflicts unite us in suffering.",
    "The best way to learn a framework is to break someone else's project.",
    "Every semester, I resolve to attend all classes. Every semester, I don't.",
    "My browser bookmarks are 90% tutorials I'll never finish.",
    "Copying homework builds character. Understanding it builds a career.",
    "The exam pattern changed. Of course it did. Every year, of course.",
    "The 'suggested reading' is longer than the actual syllabus.",
    "Nothing motivates like seeing a topper's notes on Instagram.",
    "The lecturer's slides are 200 pages of 'refer to the book'.",
    "Practical exams: where theory goes to be humbled.",
    "Every viva is a boss fight.",
    "Attendance below 75% turns even the calmest student into a lawyer.",
    "College Wi-Fi disconnects the moment you understand the concept.",
    "Coding assignments taught me humility and hatred for semicolons.",
    "The night before submission, my printer plays dead.",
    "Every deadline arrives faster than the previous one.",
    "The professor's 'small assignment' takes 14 hours.",
    "Group study is when I learn who not to depend on.",
    "The best study spot is wherever you actually sit down.",
    "Nothing raises focus like the syllabus screenshot in the class group.",
    "I'll start studying after this one Reel. Two hours later…",
    "There are two types of students: those who highlight, and those who lie.",
    "The clock in the exam hall moves in geological time.",
    "The last-minute crammer's Bible: previous year question papers.",
    "You know the semester is real when the mid-sem timetable drops.",
    "My handwriting is a proof by contradiction: my brain works, my hand doesn't.",
    "Every 'optional' reading turns out to be very much required.",
    "The librarian sees more of me during exams than my family does.",
    "You never know silence like the pause before 'the question is out of syllabus'.",
    "The moment I close the textbook, memory garbage-collects.",
    "Rewatching lectures at 2x is the closest thing to time travel.",
    "The syllabus tab is always open. The syllabus is never open.",
    "Assignments due at 11:59 PM are personal attacks on my sleep schedule.",
    "The professor asks 'is this clear?' — the class becomes a photograph.",
    "'Solve this in one line' — my will to live: solved in one line.",
    "Every submission portal is designed by someone who hates joy.",
    "My laptop battery dies exactly when inspiration arrives.",
    "Nothing is more focused than a student the night before an exam.",
    "The formula sheet is my emotional support document.",
    "Post-exam analysis is a professional sport in my friend group.",
    "The topper's secret: they actually read the textbook.",
    "The most creative writing I do is in exam bonus questions.",
    "'Refer to slide 47' — slide 47 does not exist.",
    "Every semester teaches me two things: content and self-loathing.",
    "The relief of hitting 'submit' is a controlled substance.",
    "Backpropagation makes sense until you try to explain it to your parents.",
    "Every math proof ends with 'the rest is trivial'. It is not trivial.",
    "The best exam prep is the fear of disappointing your future self.",
    "Nothing tests friendship like sharing notes the night before.",
    "The professor said 'this is not on the exam'. It was on the exam.",
    "The scariest words in academia: 'as we saw last class'.",
    "Every laptop sticker is a diary of who I thought I was.",
    "College teaches you 30% content, 70% how to survive on 4 hours of sleep.",
    "The average student's browser: 3 tabs of notes, 12 of memes.",
    "I don't fear exams. I fear the results email.",
    "Being productive on the day off feels illegal.",
    "The best procrastination is called 'planning'.",
    "The syllabus PDF has been opened once. In September. By accident.",
    "The exam venue is always the farthest classroom on campus.",
    "College coffee tastes like ambition and regret.",
    "The best study snack is whatever you have. That's the whole list.",
    "Nothing burns like watching a friend understand it before you.",
    "My future self keeps signing me up for goals I don't want.",
    "The past paper you skip is the exact one that repeats.",
    "The professor moves at the speed of enlightenment. The class does not.",
    "Every printout is 10% content, 90% acid reflux.",
    "'This chapter is easy' — three days of tears later.",
    "The most complex algorithm is the one to wake up on time.",
    "Every semester, I promise to be organized. Every semester, chaos.",
    "The reading list arrives like an eviction notice.",
    "I open the lecture recording, immediately start doing dishes.",
    "The night before is the greatest teacher of all time.",
    "Nothing makes silence louder than a professor waiting for an answer.",
    "The internet made me smart. Also, made me distracted. Mostly distracted.",
    "Studying with music: 20% learning, 80% concert.",
    "The exam is a mirror. It reflects everything I skipped.",
    "The last five minutes of an exam are the most productive of the semester.",
    "The professor's example is elegant. The homework example is a war crime.",
    "The library at 2 AM is a support group with better lighting.",
    "You can lead a student to the syllabus. You cannot make them read.",
    "My planner is more optimistic than I am.",
    "'One more cup of chai' has never stopped at one.",
    "The friend who says 'I haven't studied' has studied. Trust nothing.",
    "Every semester, the group chat becomes a philosophy forum at 2 AM.",
    "Nothing motivates like the semester coming to an end.",
    "One more chapter. Then sleep. Then dreams of the chapter.",
    "Loading… assembling brilliance one snack at a time."
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

  function hideLoader() {
    if (!loader || loaderHidden) return;
    var wait = Math.max(0, loaderReadyAt - Date.now());
    loaderHidden = true;
    setTimeout(function () {
      loader.classList.add("is-hidden");
      revealHero();
      setTimeout(removeLoader, 520);
    }, wait);
  }

  if (loader) {
    window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 3300);
    loader.addEventListener("click", hideLoader);
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
