# Lumen · FSc Physics you can play with

Interactive notes for FSc Physics (Part I). Every definition, example, question and numerical from the textbook, rebuilt as hands-on labs.

**Live so far:** Chapter 10 *Optical Instruments*: Lesson 1 *Seeing Clearly* (§10.1–10.2), Lesson 2 *The Simple Microscope* (§10.3), Lesson 3 *The Compound Microscope* (§10.4) and Lesson 4 *The Astronomical Telescope* (§10.5).

**Site:** https://mansoorysfxi.github.io/lumen-physics/

## What's inside

```
site/                     ← everything that gets published
├── index.html            book home (chapter list)
├── 404.html              page-not-found
├── assets/
│   ├── css/main.css      shared design system
│   ├── js/core.js        canvas helpers, quizzes, XP/progress (localStorage)
│   └── favicon.svg
└── chapter-10/
    ├── index.html        chapter hub (interactive lens hero, objectives, lessons)
    ├── lesson-1.html     §10.1–10.2 content
    ├── lesson-2.html     §10.3 content
    ├── lesson-3.html     §10.4 + Example 10.1 content
    ├── lesson-4.html     §10.5 content
    └── js/
        ├── hero.js
        ├── lesson-1.js   labs: eye, lens, Rayleigh, grating
        ├── lesson-2.js   labs: magnifier, watchmaker's loupe, Q10.7 ray construction
        ├── lesson-3.js   labs: two-lens ray tracer, chromatic aberration, virtual microscope
        └── lesson-4.js   labs: telescope tracer + moon view, light gathering (Q10.6), lens vs mirror
```

Plain HTML, CSS and JavaScript: no build step and no dependencies to install. Fonts and KaTeX (for equations) load from public CDNs.

## Preview locally

Double-click `site/index.html`, or serve the folder:

```bash
cd site
python -m http.server 8000      # then open http://localhost:8000
```

## Deploy

`.github/workflows/deploy-pages.yml` publishes the `site/` folder to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Source → GitHub Actions**.

> The textbook PDF is git-ignored on purpose. It is ~53 MB (over GitHub's warning size) and copyrighted, so it stays on your computer only.

## Adding the next lesson

1. Copy `chapter-10/lesson-1.html` → `lesson-2.html` and set a new `data-lesson` id on `<body>` (e.g. `ch10-l2`).
2. Put its labs in `chapter-10/js/lesson-2.js`.
3. On `chapter-10/index.html`, change that lesson's card from `<div class="lesson-card soon">` to `<a class="lesson-card live" href="lesson-2.html" data-lesson-card="ch10-l2">`.

Anything with a `data-check` attribute (quizzes, lab challenges, solutions, model answers) counts towards lesson progress and XP automatically.
