# Lumen: Design Brief & Technical Reference

> **What this document is for:** redesigning the Lumen website in **Google Stitch** (or any design tool) without breaking the working site.
> It describes what the product is, who uses it, every screen and component that exists today, the current visual system, what should improve, and the technical rules a new design must respect so it can be dropped back into the code.
> Section 15 has **ready-to-paste Stitch prompts**, one per screen. Reference screenshots of every page are in [`docs/screenshots/`](screenshots/).

---

## 0. Summary

| | |
|---|---|
| **Product** | Lumen: interactive physics notes. Every definition, derivation, worked example, exercise question and numerical from the official textbook, rebuilt with hands-on simulations ("labs"). |
| **Audience** | Pakistani students, Class 10 (Matric) and Class 11 (FSc Part I), aged about 15–17. Mostly on Android phones. |
| **Goal** | Make students *enjoy* physics instead of memorising it, while staying 100% exam-faithful to their textbook. |
| **Live site** | https://mansoorysfxi.github.io/lumen-physics/ |
| **Stack** | Plain static HTML + CSS + JavaScript. No framework, no build step. Hosted on GitHub Pages. |
| **Size today** | 13 pages: home, 2 class pages, 2 unit/chapter hubs, 7 lessons, 404. 20 interactive labs. 127 progress checkpoints. |
| **Current look** | Dark "neon science lab": near-black navy background, glowing cyan / violet / pink / amber accents, Space Grotesk headings, monospace micro-labels. |
| **Redesign freedom** | The look, layout, typography, colour, spacing and motion can all change. The **content structure** and the **HTML hooks the JavaScript depends on** (Section 14) must stay. |

---

## 1. The product

Lumen turns a printed physics textbook into a website a student actually *wants* to open. Each textbook section becomes a lesson page, and each lesson mixes four kinds of content:

1. **Read**: the textbook's text, definitions and equations, restated clearly. Section numbers, equation numbers (10.1, 10.2 …) and page references match the printed book exactly, so students can cross-check with their book.
2. **Play**: interactive labs (canvas simulations). Every important figure in the book becomes something students can drag and tweak: a lens they can move, a microscope they can focus, hot and cold water they can mix.
3. **Check**: quick multiple-choice questions after each idea, with an explanation for every wrong answer.
4. **Practise**: the end-of-chapter questions with model answers, and every numerical solved one step at a time.

Students earn **XP** for every lab challenge, quiz, solution and answer they complete. Each lesson tracks progress, and finishing everything shows a "Lesson mastered" moment with confetti. Progress is saved in the browser (no accounts).

### Tone
Friendly, curious and a bit playful ("This light ray missed the lens."), never childish. It should feel like a premium science app, not a school worksheet. Exam definitions are presented seriously and clearly labelled, because students need them word-for-word.

---

## 2. Audience and context of use

| Factor | What it means for design |
|---|---|
| **Age 15–17**, Class 10 and FSc students in Pakistan | Treat them as young adults. Gamification is welcome but should not look like a children's app. |
| **Mostly mid-range Android phones** (360–412 px wide), some laptops | Design **mobile-first**. The labs must be usable with a thumb. |
| **Variable mobile data** | Keep imagery light. The labs draw everything in code, so there are no photo assets. |
| **Study sessions of 20–30 minutes per lesson** | Lessons are long. Students need to see where they are, jump between sections, and resume later. |
| **Exam pressure** (board exams) | Exam definitions, formulas, and "textbook answer" keys must be easy to find and scan. A summary or formula sheet at the end of every lesson is valued. |
| **English-medium textbooks** | All content is in English. Urdu support does not exist today (see Section 13, open decisions). |
| **Studying in daylight and at night** | Today the site is dark-only. A light or "paper" reading mode is worth exploring. |

---

## 3. What exists today

### Classes and content

| Class | Textbook | Status |
|---|---|---|
| Class 9 | — | Card on home page, "Coming soon" |
| **Class 10** | Grade 10 Physics, National Book Foundation (2025). Numbering continues from Grade 9, so the book starts at **Unit 10** and runs to Unit 21. | **Unit 10 "Heat Capacity and Modes of Heat Transfer"**: Lessons 1–3 built (Lesson 3 is built locally but not yet pushed, see note below). Lessons 4–8 + Practice Arena planned. Units 11–21 "Coming soon". |
| **Class 11** | FSc Part I Physics, Punjab Textbook Board. Chapters 1–11. | **Chapter 10 "Optical Instruments"**: Lessons 1–4 live. Lessons 5–9 + Practice Arena planned. Chapters 1–9 and 11 "Coming soon". |
| Class 12 | — | Card on home page, "Coming soon" |

> **Note:** `site/class-10/unit-10/lesson-3.html` and its `js/lesson-3.js` are not committed to git yet, but the Unit 10 hub already links to Lesson 3 as live. On the deployed site that link currently goes to the 404 page.

### Live lessons and their labs

| Page | Sections | Labs (interactive simulations) | Quizzes | Step-by-step solutions | Model answers | Checkpoints |
|---|---|---|---|---|---|---|
| Class 10 · U10 · L1 Specific Heat Capacity | §10.1–10.1.1 | Heat race (+ mystery metal), Two cities one Sun | 6 | 7 | 4 | 24 |
| Class 10 · U10 · L2 Measuring Specific Heat | §10.1.2 | Hot + cold mixing, Virtual calorimeter, Electrical method bench | 4 | 4 | 1 | 19 |
| Class 10 · U10 · L3 Thermal Conduction | §10.2–10.2.1 | Atom chain (lattice vs free electrons), Wax-and-pin race, Touch paradox | 5 | 0 | 4 | 18 |
| Class 11 · Ch10 · L1 Seeing Clearly | §10.1–10.2 | Eye / near-point simulator, Convex-lens image builder, Rayleigh criterion, Diffraction grating | 6 | 1 | 3 | 22 |
| Class 11 · Ch10 · L2 The Simple Microscope | §10.3 | Magnifying glass + ladybird, Watchmaker's loupe (+ Q10.7 ray construction) | 4 | 3 | 1 | 13 |
| Class 11 · Ch10 · L3 The Compound Microscope | §10.4 | Two-lens ray tracer, Chromatic aberration, Virtual microscope (blood smear) | 3 | 4 | 2 | 16 |
| Class 11 · Ch10 · L4 The Astronomical Telescope | §10.5 | Telescope + Moon view, Light gathering (Q10.6), Lens vs mirror | 3 | 5 | 1 | 15 |
| **Total** | | **20 labs** | **31** | **24** | **16** | **127** |

---

## 4. Repository map

```
Physics/                              (git repo → github.com/Mansoorysfxi/lumen-physics)
├── site/                             ← THE WEBSITE. Only this folder is published.
│   ├── index.html                    Home: choose your class (9 · 10 · 11 · 12)
│   ├── 404.html                      Not-found page; also redirects old /chapter-10/ links to /class-11/chapter-10/
│   ├── .nojekyll                     Tells GitHub Pages to serve files as-is
│   ├── assets/
│   │   ├── css/main.css              Shared design system (~650 lines): tokens, layout, every component
│   │   ├── js/core.js                Shared JS: canvas helpers, quizzes, step solutions, XP/progress, TOC, toasts, confetti
│   │   └── favicon.svg
│   ├── class-10/
│   │   ├── index.html                Class 10 book page (list of Units 10–21)
│   │   └── unit-10/
│   │       ├── index.html            Unit hub (animated heat hero, 18 learning outcomes, lesson cards)
│   │       ├── lesson-1.html … lesson-3.html
│   │       └── js/hero.js, lesson-1.js … lesson-3.js   (one JS file of labs per lesson)
│   └── class-11/
│       ├── index.html                Class 11 book page (list of Chapters 1–11)
│       └── chapter-10/
│           ├── index.html            Chapter hub (interactive lens hero, 8 objectives, lesson cards)
│           ├── lesson-1.html … lesson-4.html
│           └── js/hero.js, lesson-1.js … lesson-4.js
├── md_files/                         Textbook text converted to Markdown (source material, NOT published)
│   ├── Class11/Physics/              Chapters 1–11 of FSc Part I Physics
│   ├── Class10/Chemistry/            Chapters 14–26 of Class 10 Chemistry
│   └── Class10/Computer_Science/     Units 1–8 of Class 10 Computer Science
├── scripts/                          Python/PowerShell helpers that OCR the textbook PDFs and build md_files
├── ocr_dumps/                        Raw OCR text output
├── docs/                             This brief + screenshots (not published)
├── .github/workflows/deploy-pages.yml  Publishes site/ to GitHub Pages on every push to main
└── README.md
```

> `md_files/` already contains Chemistry and Computer Science material, although the website is branded "Lumen Physics" today. That matters for the information architecture (see Section 13).

---

## 5. Technology and hard constraints

| Area | How it works today | Constraint for the redesign |
|---|---|---|
| **Framework** | None. Hand-written HTML pages, one shared CSS file, one shared JS file, plus one JS file per lesson. | The design must be implementable in plain HTML/CSS. No React components, no Tailwind build step (Tailwind via CDN is possible but not preferred). |
| **Hosting** | GitHub Pages, project site at `/lumen-physics/`. | All links and asset paths must be **relative** (`../assets/…`). Pages must also work when opened directly from disk (`file://`). |
| **Fonts** | Google Fonts CDN: Space Grotesk (headings), Inter (body), JetBrains Mono (labels and numbers). | Any Google Font is fine. Keep to 2–3 families for page weight. |
| **Maths** | KaTeX 0.16 from CDN renders `\( … \)` (inline) and `\[ … \]` (display) maths after page load. | Design the equation boxes for KaTeX output (serif maths font, centred display equations, an equation tag like "(10.4)" on the right). |
| **Labs** | Each lab draws on HTML `<canvas>` elements in JS. The canvas fills the width of its container, and its **height comes from a CSS `aspect-ratio`** (e.g. `16 / 7` on desktop, `4 / 3` on phones). The drawing code redraws itself on resize and is crisp on high-DPI screens. | Stitch can't design what's *inside* a canvas; treat it as a dark illustration area. Design the **frame around it**: header, controls, readouts, status and challenges. Canvases sit on a dark background (`#050915`), and the drawings use the accent colours. If the new design is light, the canvas area can stay a dark "screen" inside a light card. |
| **Inside-canvas styling** | Labels in canvases use JetBrains Mono 10–13 px. Rays and objects use the accent palette with glow. | If the palette changes, the canvas colours (a `C = {...}` object at the top of each lesson's JS) need updating too. That's a small code change. |
| **Progress / XP** | Stored in `localStorage` under key `lumen-progress-v1`: `{ "<lessonId>": { "<checkId>": timestamp }, "_totals": { "<lessonId>": count } }`. XP = 10 × completed checkpoints, shared across all classes. | No accounts or server. "Continue where you left off" is possible client-side. |
| **Motion** | Scroll-reveal, glow pulses, toasts, confetti. Everything respects `prefers-reduced-motion`. | Keep a reduced-motion fallback for anything new. |
| **Breakpoints** | 1080 px (sidebar table of contents disappears), 760 px (side-by-side lab panels stack), 640 px (breadcrumbs hide, canvas aspect ratios change), 520 px (canvases switch to shorter labels). | Design at least **390 px (phone)** and **1440 px (desktop)**. A 768 px tablet view is a bonus. |
| **Accessibility** | Semantic HTML, `aria-pressed` on toggle chips, `aria-label` on canvases, focus rings on sliders, all text colours pass WCAG AA (see Section 11). | Keep AA contrast (4.5:1 for body text) in any new palette, including inside the canvas frame. |

---

## 6. Information architecture and navigation

```
Home (choose class)
 ├─ Class 10 book page ── Unit 10 hub ── Lesson 1 · Lesson 2 · Lesson 3 · (4–8, Practice Arena planned)
 │                       └ Units 11–21 (coming soon)
 ├─ Class 11 book page ── Chapter 10 hub ── Lesson 1 · 2 · 3 · 4 · (5–9, Practice Arena planned)
 │                       └ Chapters 1–9, 11 (coming soon)
 ├─ Class 9  (coming soon)
 └─ Class 12 (coming soon)
```

- **Naming differs by book:** Class 10 calls its divisions *Units* and Class 11 calls them *Chapters*. Labels must follow the book.
- **URLs:** `/class-10/unit-10/lesson-2.html`, `/class-11/chapter-10/lesson-4.html`.
- **Global navigation** is only the top bar: brand (links home), breadcrumbs (`/ Class 10 / Unit 10 · Heat / Lesson 2 · Measuring Specific Heat`) and the XP counter. There is no main menu, search, or "continue learning" entry point today.
- **In-lesson navigation:** a sticky sidebar table of contents (built automatically from section headings) plus a lesson-progress card. This is **desktop-only**: below 1080 px it is hidden, so phone users have no way to jump within a long lesson. This is the biggest navigation gap.
- **Between lessons:** each lesson ends with an "Up next" card linking to the next lesson.

---

## 7. Screens (page templates)

There are five templates. Screenshot file names refer to [`docs/screenshots/`](screenshots/) (`desktop-*` at 1440 × 900, `mobile-*` at 390 × 844).

### 7.1 Home: choose your class
*Screenshots: `desktop-home-top.png`, `mobile-home-top.png`*

1. **Top bar**: brand + XP pill.
2. **Hero**: eyebrow ("Interactive physics · Class 10 & FSc"), headline "Physics you can **play with**." (gradient on the last words), one-paragraph pitch, button "Choose your class ↓".
3. **Class picker**: 4 class cards (9, 10, 11, 12). Each has a huge class number, a book label ("Grade 10 · National Book Foundation (2025)"), a title, a one-line topic list, a "what's live" line, and a state pill ("Open →" or "Coming soon"). Live cards glow and lift on hover; coming-soon cards are dimmed to 55% opacity.
4. **Three value props**: "Labs, not pictures", "Exam-ready", "Earn XP".
5. **Footer**: one line ("Your progress is saved in this browser only").

### 7.2 Class book page (Class 10 / Class 11)
*Screenshots: `desktop-class10-top.png`, `desktop-class11-top.png` (+ mobile)*

1. Top bar with breadcrumb (`/ Class 10`).
2. Hero: eyebrow, headline, short explanation (Class 10's explains why the book starts at Unit 10), primary button to the live unit, ghost button "Change class".
3. **Unit/chapter grid**: 11–12 cards, each with a large faded number, a status line ("● Live · Lessons 1–3 ready" or "Coming soon") and the title. Only one card is live in each class today, so the page is mostly dimmed "coming soon" cards.
4. Footer with "← Choose a different class".

### 7.3 Unit / chapter hub
*Screenshots: `desktop-unit-hub-top.png`, `desktop-chapter-hub-top.png` (+ mobile)*

1. **Full-height animated hero (canvas)**. Class 11: a convex lens where the visitor's cursor is the light source and rays bend through it in real time. Class 10: a heat lattice where the cursor is the flame. A dark gradient veil keeps the left-side text readable. Contents: kicker ("Class 10 Physics · Unit 10"), big title with gradient words, a 2–3 question teaser, "Start Lesson 1 →" and "See all lessons", and a hint line ("Move your cursor over this area: you are the flame").
2. **"What this unit is about"**: a quote-style intro paragraph next to 3 stat tiles (sections, exercise questions, worked examples).
3. **Learning objectives**: a grid of 8 (Class 11) or 18 (Class 10) numbered objective cards. Class 10 shows the official SLO code (e.g. "P-10-C-01") under each. Each card links to the lesson that covers it ("L1 →") or shows the planned lesson ("L4") when not built yet.
4. **Lessons**: a grid of lesson cards. Each has a coloured glow, "Lesson 01", a status pill (Ready / Coming soon / "45% done" / "Mastered ✓"), section numbers ("§ 10.1 – 10.1.1 · Examples 10.1, 10.2"), title, one-line description, lab-name tags, and a thin progress bar. The last card is "Practice Arena" (all exercises).
5. Footer with the textbook page range.

### 7.4 Lesson page (the core screen)
*Screenshots: `desktop-lesson-*.png`, `mobile-lesson-*.png` (Class 11 Lesson 1) and `desktop-c10lesson-*.png` (Class 10 Lesson 2)*

**Layout:** desktop is a 2-column grid: a 230 px sticky sidebar (table of contents + progress card) and a content column (prose limited to 760 px; labs use the full column width). Phones get a single column and no sidebar.

**Top bar:** brand, breadcrumbs, XP pill, and a thin gradient reading-progress line along its bottom edge.

**Order of blocks on a typical lesson:**

1. **Lesson hero**: kicker ("Chapter 10 · Lesson 1 of 9" + section tag "§ 10.1 – 10.2"), title with gradient word, a 2–3 sentence lede, and meta chips: textbook pages, time ("About 25 min"), number of labs, progress %.
2. **Section** (repeated 1–3 times), each with:
   - Section header: number badge ("10.1"), title, textbook page reference on the right.
   - "Hook": an opening question or everyday example, in larger text with a violet left border.
   - Body paragraphs and bullet lists (textbook content).
   - **Definition cards** (green, labelled "Definition" + "exam definition" tag).
   - **Formula boxes** (centred KaTeX equation + equation number like "(10.4)" + a note line explaining the symbols).
   - **Callouts**: three flavours: *Tid-bit / Did you know* (pink), *Insight* (amber), *Exam tip* (violet).
   - **Figures**: redrawn textbook figures as inline SVG with a caption ("Fig. 10.3 …").
   - **Comparison tables** (e.g. linear vs angular magnification; microscope vs telescope).
   - **Data tables with bars** (Class 10: specific heat of materials; clickable rows load that material into a lab).
   - **Labs**: 2–4 per lesson (anatomy in Section 9).
   - **Quick-check quizzes** after each idea.
   - **Sub-headings** (with a small glowing dot), which also appear in the table of contents.
3. **"From Your Textbook"**: exercise questions with expandable model answers, multiple-choice questions from the book, and numericals with step-by-step solutions.
4. **Lesson summary**: a grid of formula/summary cards ("Near point: d ≈ 25 cm …").
5. **"Lesson mastered!" banner** (hidden until 100%).
6. **"Up next" card**: next lesson title + button.
7. Footer.

**Page length:** 500–750 lines of HTML. On a phone a lesson is roughly 25–40 screens tall.

### 7.5 404 page
*Screenshots: `desktop-notfound-top.png`, `mobile-notfound-top.png`*

A self-contained page (no shared CSS, because GitHub serves it from any URL): a spinning gradient ring, "ERROR 404", the headline "This light ray missed the lens.", a sentence of explanation, and a "Back to Lumen home" button. It also silently redirects old URLs.

---

## 8. Component inventory

Counts are across all 7 lesson pages.

### Navigation and chrome
| Component | What it shows | States / notes |
|---|---|---|
| **Top bar** | Brand mark (gradient ring) + "Lumen" + subtitle ("Physics", "Class 10 Physics", "FSc Physics"), breadcrumbs, XP pill | Sticky, translucent with blur. Breadcrumbs hidden < 640 px. |
| **XP pill** | ★ + number + "XP" | Bounces and glows when XP is earned. |
| **Reading-progress line** | 2 px gradient line under the top bar | Width = scroll %. Lesson pages only. |
| **Table of contents** | "In this lesson" + list of sections, with indented sub-sections | Active item highlighted with an accent left border (scroll-spy). Desktop only. |
| **Lesson-progress card** | Progress bar + "5 / 22 checkpoints · 23%" | Under the TOC. |
| **Breadcrumbs** | `/ Class 10 / Unit 10 · Heat / Lesson 2 · …` | Last item is the current page. |

### Cards
| Component | Content | States |
|---|---|---|
| **Class card** | Huge number, book label, title, topic line, live line, state pill | Live (gradient number, glow, hover lift) / Coming soon (55% opacity) |
| **Unit / chapter card** | Faded big number, status line, title | Live / Coming soon |
| **Lesson card** | Lesson number, status pill, § range, title, description, lab tags, progress bar | Ready / N% done / Mastered ✓ / Coming soon |
| **Objective (SLO) card** | Number, objective text, optional SLO code, "L3 →" link | Linked (lesson exists) / Not yet linked |
| **Stat tile** | Big number + label | Static |
| **Next-lesson card** | "Up next · Lesson 3 · § 10.4", title, sentence, button | — |

### Lesson content blocks
| Component | Used | Content / notes |
|---|---|---|
| **Section header** (`sec-head`) | 28 | Number badge, H2 title, page reference |
| **Hook** | 11 | Opening question, larger text, accent left border |
| **Definition card** (`def`) | 10 | "Definition" label, optional "exam definition" tag, one or two sentences |
| **Formula box** | 20 | Display equation, optional note line, optional equation tag "(10.6)" |
| **Callout** (tidbit / insight / exam-tip) | 17 | Icon tile, small heading, 1–3 short paragraphs |
| **Figure** (inline SVG + caption) | 10+ | Redrawn textbook figures. Some are animated (Class 10 cooling-system figure with flowing coolant and a spinning fan). |
| **Comparison table** (`compare`) | 5 | 2–3 columns, first column is a mono label |
| **Data table with bars** (`ctable`) | 2 | Caption bar, rows with value + horizontal bar. Rows can be clickable ("↗") and highlighted. |
| **Key-value boxes** (`kv`) | Class 10 | 2–3 small panels with a heading and bullets (e.g. apparatus / precautions) |
| **Opener** | Class 10 L1 | Big opening question card at the start of a lesson |
| **Two-column stage cards** | Class 11 L3 | "① Objective" vs "② Eye-piece" |
| **Procedure list** (`proc`) | Class 10 | Numbered experiment steps. The current step is highlighted and done steps get a green ✓. Driven by the lab. |
| **Facts strip** | Class 11 L4 | 4 big-number fact tiles (e.g. telescope mirror sizes) |
| **Summary sheet** | 7 | Grid of cards: small caps label, formula, one-line explanation |

### Assessment
| Component | Used | Behaviour |
|---|---|---|
| **Quick-check quiz** (`quiz`) | 31 | Label ("Quick check · +10 XP" or "Q 10.8 (i) · Identify the correct answer"), question, 4 option buttons with letters a)–d). **Wrong** click: shake animation, red border, explanation of *why it's wrong*. **Correct**: green, other options fade, explanation shown, +10 XP. Remembers a solved state on reload. |
| **Step-by-step solution** (`steps`) | 24 | Header with question number (e.g. "10.7"), full question, and "Textbook answer: …" key. Numbered steps are revealed one at a time with buttons **Start solution → Next step → Solved**, plus "Show all", "Reset" and sometimes "See it in Lab 2 ↗". The final step gets a green ✓ badge. Used for derivations, worked examples and numericals. |
| **Model answer (Q&A)** (`qa`) | 16 | Question number + question, then a "+ Show model answer" disclosure revealing bullets, sometimes with a diagram. Opening it counts as a checkpoint. |
| **Typed answer row** | 3 | Text input + "Check" button + inline feedback (e.g. "type the serial number you found under the loupe"). |

### Gamification and feedback
| Component | Behaviour |
|---|---|
| **Toast** | Bottom-centre pill: "Correct answer! **+10 XP**". Slides in and fades after ~3 s. Several can stack. |
| **Confetti** | Full-screen burst when a lesson reaches 100%. |
| **Lesson mastered banner** | Green banner "🎉 Lesson mastered!" before the Up-next card. |
| **Challenge checklist** | Inside each lab: 1–3 goals with checkboxes that tick themselves (green with ✓) when the student achieves them in the simulation. |

---

## 9. Lab anatomy (the signature component)

Labs are what make Lumen different. There are 20, and all share one shell (see `desktop-lesson-lab.png`, `desktop-c10lesson-lab.png`, `mobile-lesson-lab.png`):

```
┌─ LAB CARD ─────────────────────────────────────────────────────────────┐
│ [● LAB 1 · FIG. 10.1]  Title of the lab                                │  lab-head: badge (pulsing dot) + H3
│ One–two sentence instruction, with coloured words matching the rays.   │  lab-sub
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ PANEL LABEL                                                      │   │  lab-stage: 1–3 canvases,
│ │          (canvas: dark simulation area, draggable objects,       │   │  stacked or side by side,
│ │           animated photons, labels drawn in mono)                │   │  each with a small corner label
│ └──────────────────────────────────────────────────────────────────┘   │
│  Slider: Object distance p ─────●──── 13.0 cm    Toggle: Normal adjust │  lab-controls (responsive grid)
│  Chip group: [f = 25 cm] [f = 10 cm] [f = 5 cm ✓]                       │
│  [Numerical 10.6] [Example 10.1]  ← preset buttons                      │  lab-actions (ghost buttons)
│ ┌────────────┐┌────────────┐┌──────────────┐                           │
│ │IMAGE DIST q││MAGNIF. m   ││IMAGE IS      │                           │  readouts: label + live value,
│ │ 8.1 cm     ││ 0.63 ×     ││Real · inverted│                          │  value turns green/red/amber
│ └────────────┘└────────────┘└──────────────┘                           │
│ ● Status sentence explaining what is happening right now, in words.    │  status: good / bad / edge / info
│ ┌ CHALLENGES ─────────────────────────────────────────────────────┐    │  dashed violet box
│ │ ☐ Make a real image the same size as the object.                │    │  ticks itself → ✓ green
│ │ ✓ Make a real image 3 times larger.                             │    │
│ └─────────────────────────────────────────────────────────────────┘    │
│ Small print: model assumptions.                                        │  lab-foot
└────────────────────────────────────────────────────────────────────────┘
```

**Control types inside labs:**
- **Range slider**: label left, live value right (mono), filled track. One variant has a rainbow "spectrum" track (for choosing wavelength).
- **Chip group**: pill buttons, one selected (`aria-pressed`). Used for options like eye age, lens choice, objective ×4/×10/×40, light colour.
- **Toggle switch**: e.g. "Look through a pinhole", "Normal adjustment".
- **Select dropdown**: Class 10 labs (choose a material).
- **Preset buttons**: load a textbook example or numerical into the lab.
- **Primary action buttons**: Class 10 experiments ("Pour them together", "↺ Refill the jugs", "Start: step 1 →" to step through a procedure).
- **Lab notebook table** (Class 10): readings fill in row by row as the virtual experiment runs. Pending rows are faded and new rows flash.

**Status line states:** `good` (green dot: "Best view!"), `bad` (red: "Too close!"), `edge` (amber: "Just resolved"), `info` (violet: neutral explanation).

**Lab design problems to solve:**
- On phones, the sliders sit *below* the canvas, so students can't see the simulation while dragging a slider. A sticky/compact canvas or a control drawer would help.
- The lab card holds many equal-weight elements (badge, title, sub, canvas, 4+ sliders, chips, presets, 3–6 readouts, status, challenges, foot). The hierarchy needs work so the **canvas and the status sentence** dominate.

---

## 10. Gamification and progress system

| Element | Rule |
|---|---|
| **Checkpoint** | Any element with a `data-check` id: a lab challenge, quiz, step solution, model answer, typed answer. 13–24 per lesson. |
| **XP** | +10 per checkpoint, the first time only. The total is shown on every page and is shared across classes. |
| **Lesson %** | Completed checkpoints ÷ checkpoints on that lesson page. Shown in the hero chip, the TOC card and the lesson card on the hub. |
| **Mastery** | 100% shows the banner and fires confetti once. Hub card shows "Mastered ✓". |
| **Persistence** | Browser `localStorage` only. Clearing browser data resets progress. |

**Ideas a redesign could support (not built yet):** "Continue where you left off" on the home page, per-class progress on class cards, a streak or daily goal, badges per unit, a profile/stats page. All are possible without a server.

---

## 11. Current visual system (as built)

### Colour tokens (CSS custom properties in `main.css`)
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#060a17` | Page background (with faint radial colour glows and a 48 px grid pattern) |
| `--panel` | `#0e1630` | Cards, quiz, Q&A |
| `--panel-2` | `#131d3b` | Raised cards, table headers |
| `--panel-3` | `#1a264c` | Chips, tags |
| Canvas | `#050915` | Simulation backgrounds |
| `--text` | `#e9edff` | Headings, important text |
| `--text-2` | `#c3cae6` | Body text |
| `--muted` | `#8b95bb` | Labels, captions |
| `--line` / `--line-2` | `rgba(140,160,255,.13 / .24)` | Borders |
| `--cyan` | `#5fe3ff` | Primary accent, links, active, Class 11 identity |
| `--violet` | `#a98bff` | Secondary accent, exam tips, challenges |
| `--pink` | `#ff5fa8` | Tidbits, sub-heading dots, question numbers |
| `--amber` | `#ffc65c` | XP, insights, quiz labels, Class 10 (heat) identity |
| `--green` | `#5cf0a0` | Definitions, correct, done, success |
| `--red` | `#ff6b7a` | Wrong, warnings |

**Signature gradients:** cyan → violet → pink (brand, Class 11, buttons). Amber → pink → violet ("heat" gradient, Class 10 titles).

**Contrast (WCAG):** all pass AA. On the panel colour: text 15.3:1, body 11.0:1, muted 6.0:1, cyan 11.8:1, pink 6.3:1, violet 6.7:1. Dark button text on the cyan button: 12.6:1.

### Typography
| Use | Font | Size / weight |
|---|---|---|
| H1 | Space Grotesk | clamp(2.4rem, 6vw, 4.4rem) / 700, tight tracking |
| H2 | Space Grotesk | clamp(1.7rem, 3.4vw, 2.4rem) / 700 |
| H3 | Space Grotesk | 1.32rem / 600 |
| Body | Inter | 17 px / 1.72 line height |
| Lede | Inter | 1.2–1.25rem |
| Micro-labels, readouts, tags | JetBrains Mono | 0.7–0.9rem, often UPPERCASE with wide tracking |
| Physics variables (*p*, *q*, *f*, *λ*) | Times New Roman italic | Inline, 1.08em |
| Equations | KaTeX (Computer Modern) | 1.08–1.15em |

### Shape, space, effects
- **Radii:** 22 px (labs, big cards), 16 px (cards, callouts), 10–12 px (inputs, readouts), pills for buttons/chips/tags.
- **Widths:** page max 1240 px; prose max 760 px; sidebar 230 px with a 56 px gap.
- **Effects:** soft coloured glows (box-shadow and canvas shadowBlur), translucent blurred top bar, gradient text, the grid-pattern background.
- **Motion:** scroll reveal (fade + 18 px rise, 0.7 s), pulsing lab-badge dot, XP bump, toast slide-in/out, quiz shake, step fade-in, confetti, animated photons along light rays.

---

## 12. Content rules a design must respect

1. **Textbook fidelity:** section numbers (§10.1.2), equation numbers ("(10.4)"), figure numbers ("Fig. 10.3") and page references are shown exactly as printed. Students cross-reference their book.
2. **Exam definitions** must stand out and be quick to find when revising.
3. **Maths is real maths:** fractions, Greek letters, subscripts (f₀, fₑ), units. Display equations need generous vertical space.
4. **Every numerical shows the textbook's answer up front** ("Textbook answer: 8.7 cm, 47") and then the working.
5. **Two numbering systems coexist:** "Unit 10 / Lesson 2" (site structure) and "§10.1.2" (book structure). Both must be visible without confusion.
6. **Additions beyond the textbook** (fun facts, extra labs) are fine but should be visually distinguishable from syllabus content, so students know what's examinable.

---

## 13. What should improve: design opportunities

My honest read of the current design, roughly in priority order:

1. **Mobile lesson navigation is missing.** Below 1080 px the table of contents disappears, and a lesson is 25–40 phone screens long. Needed: a sticky mini-nav (current section + progress), a bottom sheet with sections, or a "jump to" button.
2. **Labs are hard to use on phones.** Sliders sit below the canvas, so the canvas scrolls out of view while dragging. Explore a sticky canvas, a compact control tray, or controls overlaid on the canvas.
3. **Visual noise.** Almost everything glows, and monospace UPPERCASE micro-labels are used for badges, readouts, tags, table labels and quiz labels alike. Accent colours carry several unrelated meanings (pink = tidbit, sub-heading dot, question number *and* light ray). The design needs a clearer hierarchy and a stricter semantic colour system.
4. **Too much "Coming soon".** Book pages show 10 dimmed cards for every live one. Consider leading with what's live, collapsing upcoming units, or showing a roadmap.
5. **No "continue learning".** Returning students land on the home page with no shortcut back to their lesson or a view of their progress across lessons.
6. **Reading comfort.** Long theory sections on a dark background are tiring. Explore a light/"paper" reading mode, or light content with dark lab screens.
7. **Inconsistent book pages.** The Class 11 page reuses the home page headline, while Class 10 has its own. Every class page needs a consistent template with its own identity colour.
8. **Toasts cover content** at the bottom centre, which on phones means lab controls.
9. **Emoji in meta chips** (📖 ⏱ 🧪 ✅) render differently on each Android phone. An icon set would be more consistent.
10. **Quizzes, solutions and model answers look alike.** All are dark panels with borders, so "practice" doesn't feel different from "reading".

### Open decisions (for you, before designing)
- **Brand scope:** stay "Lumen Physics", or become a multi-subject platform? `md_files/` already holds Class 10 Chemistry and Computer Science. A multi-subject Lumen needs a **Class → Subject → Unit → Lesson** structure and a subject switcher.
- **Dark only, light only, or both?**
- **Urdu:** is an Urdu explanation layer (right-to-left text) ever wanted? If so, the layout should allow it now.
- **Identity per class or subject:** keep cyan/optics for Class 11 and amber/heat for Class 10, or give each *unit* its own colour?

---

## 14. Implementation contract: keep these hooks

The new design can change any CSS and most markup, but `core.js` and the lab scripts find elements by the selectors below. If a redesigned page keeps these classes, ids and attributes, all labs, quizzes and progress keep working. (Purely visual class names, such as `glow`, `tag` or `grad`, are free to change.)

| Feature | Required markup |
|---|---|
| Lesson identity | `<body data-lesson="ch10-l1">` (unique per lesson) |
| XP counter | `#xp` containing a `<b>` for the number |
| Reading progress | `.read-progress span` |
| Table of contents | `.toc ol` (filled automatically) + sections/headings with `id` and `data-toc="Title"` (`data-toc-sub` for sub-items) |
| Progress readouts | any element with `data-lesson-pct`, `data-lesson-count`, `data-lesson-bar` (bar uses inline `width`) |
| Checkpoints | `data-check="unique-id"` on quizzes, steps, Q&A and challenge `<li>`s |
| Challenges | `.challenges li[data-check]` (gets class `done`) |
| Quiz | `.quiz[data-check][data-explain]` → `.quiz-opts button` (correct one has `data-correct`, wrong ones `data-why`) → `.quiz-fb`. JS adds `.solved`, `.correct`, `.wrong`, `.opt-l` |
| Step solution | `.steps[data-check]` → `li.step` (last one `.final`) + buttons `[data-next]`, `[data-all]`, `[data-reset]`. JS adds `.shown` |
| Model answer | `.qa[data-check]` containing a `<details>` |
| Mastery | `.mastered` (JS adds `.show`) |
| Scroll reveal | `.rv` (JS adds `.in`) |
| Toasts / confetti | Created by JS: `.toast-wrap`, `.toast`, `.xp-plus`, `#confetti` (style them freely) |
| Lab status | `.status[data-state]` containing `.dot` and a final `<span>` for the message |
| Lab controls | each lab's ids (`#lens-p`, `#eye-u` …), `input[type=range]` (fill via `--fill`), chip buttons with `aria-pressed`, `output.ctl-val`, `.ro-v` (JS adds `good`/`bad`/`warn`) |
| Canvases | `<canvas class="lab-canvas ar-…">`. **The canvas must get its height from CSS** (an `aspect-ratio`); the JS reads the size and draws to fit. |
| Hub hero | `#hero-canvas`, `#hero-hint` |
| Lesson cards on hubs | `[data-lesson-card="lessonId"]` with `.lc-bar span` and `.lc-state` |
| Class 10 experiments | `.notebook tr.pending / .fresh`, `.proc li.now / .past`, clickable table rows `tr[data-mat]` / `tr[data-rod]`, `tr.hl` |
| Maths | Leave `\( … \)` and `\[ … \]` in the text; KaTeX renders them |

---

## 15. Stitch prompts (copy-paste)

**How to use these in Stitch:**
1. Start a **Web** project and paste **Prompt 0** first to set the visual direction. Upload 2–3 screenshots from `docs/screenshots/` as reference images if you want Stitch to see the current site.
2. Generate each screen with Prompts 1–9, one at a time, asking Stitch to keep the same style.
3. Generate the **mobile** version of screens 4, 5 and 8 separately (switch Stitch to a mobile layout, or add "390 px mobile layout" to the prompt). Those are where the current design struggles most.
4. Iterate in small steps ("make the canvas area taller", "reduce glow") rather than rewriting the whole prompt.

The direction words in the prompts ("premium science app", "calm reading, vivid labs") are suggestions. Change them to taste.

---

**Prompt 0: Design system / mood**
```
Design system for "Lumen", an interactive physics learning website for Pakistani high-school
students (age 15–17, Class 10 and FSc). Mood: a premium, modern science app, curious and playful
but not childish. Calm, highly readable surfaces for long reading, and vivid, glowing
"simulation screens" for the interactive labs. Accent palette: cyan #5FE3FF (optics), amber
#FFC65C (heat / XP), violet #A98BFF, pink #FF5FA8, green #5CF0A0 (correct / done), red #FF6B7A
(wrong). Fonts: Space Grotesk for headings, Inter for body, JetBrains Mono for numbers and
small labels. Rounded corners (16–22 px cards, pill buttons). Components needed: top bar with
XP counter, cards, chips, sliders, toggles, readout tiles, definition card, formula box,
callouts, quiz options, step-by-step solution list, progress bars, toast notification.
Mobile-first, WCAG AA contrast.
```

**Prompt 1: Home (choose your class)**
```
Home page for Lumen. Sticky top bar: logo (gradient ring + "Lumen"), XP pill "★ 340 XP".
Hero: small eyebrow "Interactive physics · Class 10 & FSc", big headline "Physics you can play
with." with a gradient on "play with", one-sentence pitch about turning every textbook
definition, example and numerical into hands-on labs, primary button "Choose your class".
A "Continue where you left off" card: Class 11 · Optical Instruments · Lesson 3 The Compound
Microscope, 45% done, button "Resume". Class picker: four cards with a very large class number
(9, 10, 11, 12), the book name, a one-line topic list and a status. Class 10 and 11 are live
(show "Unit 10 live · 3 lessons" and "Chapter 10 live · 4 lessons" with a small progress bar);
9 and 12 are "Coming soon" and visually quieter. Then three value cards: "Labs, not pictures",
"Exam-ready", "Earn XP". Simple footer.
```

**Prompt 2: Class book page**
```
Book page for "Class 10 Physics" (Grade 10, National Book Foundation). Breadcrumb "Class 10".
Hero with eyebrow, headline "Class 10 Physics, hands-on", note that the book starts at Unit 10
because it continues Grade 9, buttons "Open Unit 10 · Heat" and "Change class". A unit list
for Units 10–21. Unit 10 "Heat Capacity and Modes of Heat Transfer" is live: make it a large
featured card with "3 of 8 lessons ready", overall progress, and lesson thumbnails. The other 11
units (Thermal Expansion, Waves, Sound, Optics, Electrostatics, Current Electricity, Electric
Circuits, Electronics, Electromagnetism, Electromagnetic Waves, Nuclear Physics) are "coming
soon": show them compactly as a roadmap so they don't dominate the page.
```

**Prompt 3: Unit hub**
```
Unit hub for Class 10 Physics, Unit 10 "Heat Capacity and Modes of Heat Transfer". Full-width
hero with a dark animated illustration area on the right (a glowing lattice of atoms heated by
a flame; the visitor's cursor is the flame), title with an amber→pink gradient, a 3-question
teaser ("Why does water take so long to boil? Why does metal feel colder than wood?"),
buttons "Start Lesson 1" and "See all lessons". Below: short intro paragraph with 3 stat tiles
(5 sections, 39 exercise questions, 3 worked examples). A grid of 18 numbered learning
outcomes, each with an official code like "P-10-C-01" and a link to its lesson ("L1 →") or a
muted "L4" if not built yet. A lessons section: 8 lesson cards + "Practice Arena", each with
lesson number, status (Ready / 45% done / Mastered ✓ / Coming soon), section range
"§ 10.1 – 10.1.1", title, one-line description, 2–3 lab tags and a progress bar.
```

**Prompt 4: Lesson page, reading parts (desktop and mobile)**
```
Lesson page: Class 11 Physics, Chapter 10 Optical Instruments, Lesson 1 "Seeing Clearly"
(§10.1–10.2, textbook pp. 214–216). Top bar with breadcrumbs and a thin reading-progress line.
Lesson hero: kicker "Chapter 10 · Lesson 1 of 9", tag "§ 10.1 – 10.2", title, 2-sentence intro,
meta chips (textbook pages, about 25 min, 4 labs, progress 23%). Desktop: sticky left sidebar
with "In this lesson" contents (active item highlighted) and a progress card
"5 / 22 checkpoints". Content column (max 760 px for text): section header with a number badge
"10.1", the title "Least Distance of Distinct Vision" and "Textbook p. 214" on the right; an
opening hook question; body text; a DEFINITION card (green, tagged "exam definition") saying the
near point is the closest distance at which the eye sees an object sharply, about 25 cm; a
formula box with a centred equation "M = β / α" and an equation tag "(10.4)" on the right; a
pink "Did you know?" callout with an icon. Mobile (390 px): replace the sidebar with a sticky
mini-bar showing the current section and lesson progress, which opens a bottom sheet of sections.
```

**Prompt 5: Interactive lab card (desktop and mobile)**
```
An interactive simulation card inside a lesson ("Lab 2 · Fig. 10.1: Convex-lens image
builder"). Header: small pulsing badge "LAB 2", title, one-line instruction. A large dark
simulation screen (16:7 on desktop, 4:3 on mobile) showing a glowing convex lens on an axis with
coloured light rays, an amber object arrow labelled "drag me" and a green image arrow. Controls:
two sliders with live values ("Object distance p · 13.0 cm", "Focal length f · 5.0 cm"),
a chip group, and preset buttons "Numerical 10.6", "Example 10.1". Three readout tiles
("Image distance q 8.1 cm", "Magnification 0.63×", "Image is: Real · inverted · diminished").
A status line with a coloured dot explaining what is happening in words. A "Challenges"
checklist with 3 goals, one ticked green. The simulation screen should be the hero of the card.
On mobile, keep the simulation visible while the student drags a slider (sticky screen or a
compact control tray).
```

**Prompt 6: Practice components**
```
Three practice components for a physics lesson, designed to feel different from the reading
content. (1) Quick-check multiple choice: label "Quick check · +10 XP", a question, four options
a)–d); show the state after a wrong answer (red option, short explanation of why it's wrong)
and after the correct answer (green option, explanation, others faded). (2) Step-by-step
numerical solution: header "Numerical 10.7" with the full question and a key "Textbook answer:
8.0 × 10⁻⁵ rad"; numbered steps revealed one by one, each with a short sentence and a centred
equation; buttons "Next step", "Show all", "Reset"; the final step has a green check badge.
(3) Exam question with a collapsible "Show model answer" revealing bullet points.
```

**Prompt 7: Lesson end, summary and progress moments**
```
End of a physics lesson. "Lesson summary": a grid of 5 formula cards, each with a small label
("Near point", "Magnification", "Resolving power"), a formula, and one sentence. A celebratory
"Lesson mastered!" banner (green, with confetti) shown at 100%. An "Up next" card: "Lesson 2 ·
§10.3 · The Simple Microscope" with a button "Start Lesson 2 →". Also design the XP toast that
appears when a student completes something ("Correct answer! +10 XP"). Place it so it never
covers controls on mobile (e.g. top-right on desktop, below the top bar on mobile).
```

**Prompt 8: Class 10 virtual experiment (lab with notebook)**
```
A virtual school-lab experiment card: "Lab 2 · The virtual calorimeter" (method of mixtures,
Class 10 heat unit). A dark simulation screen showing a calorimeter with stirrer and
thermometer, a metal block heated in boiling water, and a balance. Beside or below it: a
numbered procedure list where the current step is highlighted and finished steps get a green
check; a step button "Next step →" and a ghost "↺ Start again"; a dropdown to choose the metal
(aluminium, iron, copper, lead); a "Lab notebook" table that fills in readings row by row as the
student steps through (mass of calorimeter + stirrer, mass of water, initial water temperature
T₁, mass of solid, temperature of the hot solid T₂, final temperature T₃, rise and fall in
temperature), with pending rows faded and the newest row flashing; a status line; and a
challenges checklist. Desktop and 390 px mobile versions.
```

**Prompt 9: 404 page**
```
A friendly 404 page for Lumen: a glowing gradient ring illustration (like a lens or light
beam), small code "ERROR 404", headline "This light ray missed the lens.", one sentence
("The page doesn't exist or hasn't been built yet"), and a button "Back to Lumen home".
Same style as the rest of the site. Self-contained single screen.
```

---

## 16. Bringing the design back into code

1. **Export from Stitch** as HTML/CSS or to Figma. Either works as a reference, but its code won't be pasted in wholesale: the site's markup has to keep the hooks in Section 14.
2. **The re-skin happens mostly in one file:** `site/assets/css/main.css` holds the tokens and every component style. Changing the tokens in `:root` restyles every page at once.
3. **Structural changes** (e.g. a mobile section bar, a sticky lab canvas, a "continue learning" card) need small HTML/JS additions in `core.js` and the page templates.
4. **Canvas colours** live in a `C = { … }` object at the top of each `lesson-N.js`. If the palette changes, update those too, so the simulations match the new design.
5. **Hub page cards and labels** are hand-written in each `index.html`, so new card designs need to be applied to every class and unit page.
6. Check every change at 390 px and 1440 px, and in Chrome's reduced-motion mode.

---

*Reference screenshots (taken 25 Nov 2026 from the local site): [`docs/screenshots/`](screenshots/): `desktop-` and `mobile-` versions of `home`, `class10`, `class11`, `unit-hub`, `chapter-hub`, `notfound`, plus seven scroll positions of a Class 11 lesson (`lesson-top`, `-content`, `-lab`, `-lab-controls`, `-quiz`, `-steps`, `-summary`) and of a Class 10 lesson (`desktop-c10lesson-*`).*
