# MBA Studio — the interactive business school

Learn business from **zero knowledge to C-suite and startup-advisor level**. The curriculum covers the ground of a two-year MBA core: strategy, finance, marketing, operations, people, economics, data and decision analysis, negotiation, ethics, global business and investing. It also covers how the best operators run companies in 2026. Every concept is explained simply, then made interactive and tested with real cases.

All content is original. MBA Studio is not affiliated with any business school.

**Run it:** open `index.html` in any browser. There's no install, no build step and no server, and it works offline (only the web fonts need a connection). To host it, enable GitHub Pages on this repo.

## Download and use on any device

**[⬇️ Download MBA-Studio.html](https://github.com/ebenezar15/Business/raw/claude/gallant-mccarthy-30h9kg/dist/MBA-Studio.html)** (one file, about 2.5 MB). Everything is built in and it works offline.

| Device | How to open it |
|---|---|
| Windows, Mac, Linux, Chromebook | Download the file, then double-click it. It opens in your browser. |
| Android | Download it, then open it from the Downloads notification or your Files app with **Chrome**. |
| iPhone / iPad | iOS previews downloaded HTML files without running them, so use the online version instead. In Safari, tap **Share → Add to Home Screen** to open it like an app. |

If the download link shows code instead of saving the file, right-click it (or long-press on a phone) and choose **Save link as / Download linked file**.

Progress is saved in the browser you open the file with. Use **Progress → Export** to move it to another device.

To rebuild the single file after editing content, run `node tools/build-single.js`.

## What's inside

| Area | What you get |
|---|---|
| 🧭 **Learning path** | 5 stages, 28 tracks and 174 lessons: **Foundations → Build → Core Functions → Grow & Lead → Specialise** (electives on ESG and India) |
| 📘 **Lessons** | Each lesson has an "explain it simply" analogy, animated frameworks, 2×2 matrices, worked formulas, flashcards, a step-by-step case study, a "what would you do?" scenario, a quiz, a challenge with a model answer, and a notes box |
| 🧰 **Toolkit** | 32 live simulators, for example LTV:CAC, NPV/IRR, cap tables, regression, hypothesis tests, decision trees, Monte Carlo, LBO returns, FX hedging, a negotiation ZOPA planner and the beer game |
| 🎙️ **Case discussion** | 40 decision cases. Quick mode lets you pick an option. Discussion mode (`#/case/:id/discuss`) makes you frame the problem, recommend and weigh risks in writing before you see what happened, then self-score on a 5-line rubric |
| 🏭 **Company simulation** | Run a company for 8 quarters against 3 computer-run rivals. You set price, marketing, hiring and fundraising, and see the P&L, cash, market share and a final scorecard |
| 🏆 **Challenge arena** | 40 consulting-style problems by role, with hints, model answers and rubric self-scoring |
| 🔁 **Review flashcards** | Spaced repetition (SM-2 style) built from 1,066 glossary terms and every quiz question you got wrong |
| 🎯 **Placement test** | 20 questions across all stages. Lessons you already know are marked "tested out" |
| 🧳 **Career paths** | Ordered routes for consulting, product management, VC/IB and founders |
| 💡 **Idea Lab → 🎓 Capstone** | The Idea Lab, Business Model Canvas, unit economics and pricing work combine into one printable business plan |
| 🗺️ **Roadmap** · 🩺 **Health diagnostic** · 🧠 **Frameworks** · 📖 **Glossary** · 📡 **Trends 2026–27** | The step-by-step roadmap to start and scale a business, an advisor-style diagnostic, and searchable reference pages |
| 🗒️ **Notes & Bookmarks** · 👤 **Progress** | Bookmarks, notes, XP, streaks, certificates, and progress export/import as JSON |

Your progress is saved in your browser's `localStorage` under the key `mba-studio-v1`. Nothing leaves your device.

## Project structure

```
index.html                 app entry; loads the scripts in order
css/styles.css             all styling (light and dark themes, animations, responsive, print)
js/core.js                 the MBA registry plus the progress store
js/ui.js                   DOM helpers, SVG charts, toasts, confetti
js/widgets/*.js            the 32 interactive simulators
js/render.js               lesson and block renderers (frameworks, matrices, quiz…)
js/pages.js                core pages (home, path, lab, advisor, arena, notes…)
js/features.js             teaching features (discussion, simulation, review, placement, capstone, careers)
js/app.js                  app shell, grouped navigation and hash router
js/content/*.js            the curriculum, as data (see CONTENT_SCHEMA.md)
```

## Adding content

Content is plain data. To add a lesson, track, case, challenge, roadmap step or trend, follow [`CONTENT_SCHEMA.md`](CONTENT_SCHEMA.md) and add a `<script>` tag to `index.html` if you create a new file. New fields in the progress store must be added through the defaults in `blank()` in `js/core.js`, so existing progress keeps working.

*Educational content only. It is not legal, tax or investment advice.*
