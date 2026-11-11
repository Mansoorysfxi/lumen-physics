# Lumen · Physics you can play with

Interactive physics notes for Pakistani students. Every definition, example, question and numerical from the textbook, rebuilt as hands-on labs. Students pick their class first, then work through that class's book.

**Live so far:**

- **Class 10** (Grade 10, National Book Foundation 2025): Unit 10 *Heat Capacity and Modes of Heat Transfer*. Lesson 1 *Specific Heat Capacity* (§10.1–10.1.1) and Lesson 2 *Measuring Specific Heat* (§10.1.2).
- **Class 11** (FSc Part I): Chapter 10 *Optical Instruments*. Lessons 1–4 (§10.1–10.5).

**Site:** https://mansoorysfxi.github.io/lumen-physics/

## What's inside

```
site/                         ← everything that gets published
├── index.html                home: choose your class (9 · 10 · 11 · 12)
├── 404.html                  page-not-found (also redirects old /chapter-10/ links to /class-11/chapter-10/)
├── assets/
│   ├── css/main.css          shared design system
│   ├── js/core.js            canvas helpers, quizzes, XP/progress (localStorage)
│   └── favicon.svg
├── class-10/
│   ├── index.html            Grade 10 book home (Units 10–21)
│   └── unit-10/
│       ├── index.html        unit hub (heat-lattice hero, 18 SLOs, lessons)
│       ├── lesson-1.html     §10.1–10.1.1 + Examples 10.1, 10.2
│       ├── lesson-2.html     §10.1.2 + Example 10.3
│       └── js/
│           ├── hero.js
│           ├── lesson-1.js   labs: heat race + mystery metal, two cities one Sun
│           └── lesson-2.js   labs: hot + cold mixing, virtual calorimeter, electrical method
└── class-11/
    ├── index.html            FSc Part I book home (chapter list)
    └── chapter-10/
        ├── index.html        chapter hub (interactive lens hero, objectives, lessons)
        ├── lesson-1.html … lesson-4.html
        └── js/               hero.js, lesson-1.js … lesson-4.js
```

Plain HTML, CSS and JavaScript: no build step and no dependencies to install. Fonts and KaTeX (for equations) load from public CDNs.

The Grade 10 book continues the Grade 9 numbering, so its first unit is **Unit 10** and sections are numbered 10.1, 10.2, … exactly as printed.

## Preview locally

Double-click `site/index.html`, or serve the folder:

```bash
cd site
python -m http.server 8000      # then open http://localhost:8000
```

## Deploy

`.github/workflows/deploy-pages.yml` publishes the `site/` folder to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Source → GitHub Actions**.

> Textbook PDFs are git-ignored on purpose. They are large and copyrighted, so they stay on your computer only.

## Adding the next lesson

1. Copy an existing lesson in the same unit/chapter (e.g. `class-10/unit-10/lesson-2.html` → `lesson-3.html`) and set a new `data-lesson` id on `<body>`. Ids must be unique across the whole site: Class 10 uses `g10-u10-l3`, Class 11 uses `ch10-l5`.
2. Put its labs in `js/lesson-3.js` next to the page.
3. On the unit/chapter hub, change that lesson's card from `<div class="lesson-card soon">` to `<a class="lesson-card live" href="lesson-3.html" data-lesson-card="g10-u10-l3">`.

Anything with a `data-check` attribute (quizzes, lab challenges, solutions, model answers) counts towards lesson progress and XP automatically.

## Adding a new class or unit

- New class: create `site/class-NN/index.html` (copy `class-10/index.html`) and switch its card on the home page from `class-card soon` to `<a class="class-card live" …>`.
- New unit/chapter: create `site/class-NN/unit-XX/` (or `chapter-XX/`) with a hub `index.html`, and mark it live on the class page. Pages two folders deep load shared files from `../../assets/`.
