/* ============================================================
   AD203 Portal — static site data
   Single source of truth for the student portal. No server,
   no database. Add/edit resources here, then refresh the site.
   ============================================================ */
window.COURSE_DATA = {
  courses: [
    {
      id: "ad203",
      code: "AD203",
      name: "Artificial Intelligence",
      dept: "Computer Science",
      credits: "3-0-3",
      professor: "Dr. Alapan Kuila",
      semester: "Autumn 2026",
      units: [
        { id: "unit-1", title: "Introduction to Artificial Intelligence", weeks: "Weeks 1\u20132" },
        { id: "unit-2", title: "State Space Search", weeks: "Weeks 3\u20135" },
        { id: "unit-3", title: "Game Playing and Constraint Satisfaction", weeks: "Weeks 6\u20137" },
        { id: "unit-4", title: "Probabilistic Reasoning", weeks: "Weeks 8\u201310" },
        { id: "unit-5", title: "Reinforcement Learning", weeks: "Weeks 11\u201312" },
        { id: "unit-6", title: "Modern Artificial Intelligence", weeks: "Weeks 13\u201314" }
      ]
    }
  ],

  /* Each resource:
     {
       "title":  "Week 01 — Introduction to AI",
       "type":   "pdf",            // pdf | ppt | doc | notes | image | link
       "course": "AD203",
       "week":   1,                // teaching week 1 .. 14
       "unit":   "Unit 1",         // Unit 1 .. Unit 6
       "session":"Introduction to Artificial Intelligence",
       "file":   "resources/AD203/week-01/week-01.pdf"  // project-relative
     }
     Drop the PDF into the matching resources/AD203/week-XX/ folder
     and name it week-XX.pdf. See resources/AD203/README.md.
   */
  resources: [
    {
      "title": "AI Introduction — Part 1",
      "type": "pdf",
      "course": "AD203",
      "week": 1,
      "unit": "Unit 1",
      "session": "Introduction to Artificial Intelligence",
      "file": "resources/AD203/week-01/ai_iiitdmk_1st%20(2).pdf"
    },
    {
      "title": "AI Introduction — Part 2",
      "type": "pdf",
      "course": "AD203",
      "week": 1,
      "unit": "Unit 1",
      "session": "Introduction to Artificial Intelligence",
      "file": "resources/AD203/week-01/ai_iiitdmk_2nd%20(2).pdf"
    },
    {
      "title": "AI Agents — Lecture 3",
      "type": "pdf",
      "course": "AD203",
      "week": 2,
      "unit": "Unit 1",
      "session": "Intelligent Agents",
      "file": "resources/AD203/week-02/AI_agents_3rd%20(2).pdf"
    },
    {
      "title": "Search — Lecture 5",
      "type": "pdf",
      "course": "AD203",
      "week": 2,
      "unit": "Unit 1",
      "session": "State Space Search",
      "file": "resources/AD203/week-02/ai_search_5th%20(1).pdf"
    },
    {
      "title": "Uninformed Search",
      "type": "pdf",
      "course": "AD203",
      "week": 3,
      "unit": "Unit 2",
      "session": "BFS, DFS, DLS, IDS, UCS",
      "file": "resources/AD203/week-03/uninformed_search.pdf"
    },
    {
      "title": "Informed Search",
      "type": "pdf",
      "course": "AD203",
      "week": 4,
      "unit": "Unit 2",
      "session": "Greedy Search, A*, Heuristics",
      "file": "resources/AD203/week-04/informed_search.pdf"
    },
    {
      "title": "Local Search",
      "type": "note",
      "course": "AD203",
      "week": 5,
      "unit": "Unit 2",
      "session": "Hill Climbing, Simulated Annealing, Genetic Algorithms",
      "note": "Slides for Local Search haven't been shared yet. For now, please read from the reference textbook — Russell & Norvig, Chapter 4 (Search in Complex Environments)."
    },
    {
      "title": "Adversarial Search",
      "type": "pdf",
      "course": "AD203",
      "week": 6,
      "unit": "Unit 3",
      "session": "Games, Minimax, Alpha-Beta Pruning",
      "file": "resources/AD203/week-06/adversarial_search.pdf"
    },
    {
      "title": "Constraint Satisfaction Problems",
      "type": "pdf",
      "course": "AD203",
      "week": 7,
      "unit": "Unit 3",
      "session": "CSP, Backtracking, Constraint Propagation, Arc Consistency",
      "file": "resources/AD203/week-07/week-07.pdf"
    }
  ],

  /* Each reference book:
     {
       "title":    "Artificial Intelligence: A Modern Approach",
       "author":   "Stuart Russell & Peter Norvig",
       "edition":  "4th Edition",
       "publisher":"Pearson",
       "note":     "Primary textbook",      // optional
       "file":     "resources/AD203/books/aima.pdf",  // local PDF (optional)
       "link":     "https://..."            // external link (optional)
     }
     Drop the book PDF into resources/AD203/books/ and set "file" to its path.
     If only an external link exists, set "link" instead.
  */
  books: [
    {
      "title": "Fundamentals of AI",
      "author": "Stuart Russell & Peter Norvig",
      "edition": "",
      "publisher": "",
      "note": "Primary textbook",
      "file": "resources/AD203/books/FUNDAMENTALS_OF_AI-Stuard_Russel%20and%20Peter_Norvig.pdf",
      "link": ""
    }
  ]
};
