# MBA Studio — the interactive business school

Learn business from **zero knowledge to C-suite and startup-advisor level**. It covers what top B-schools teach (strategy, finance, marketing, operations, people, economics, investing) and how the best operators run companies in 2025–26. Every concept is explained simply, then made interactive and tested with real cases.

**Run it:** open `index.html` in any browser. There's no install, no build step and no server, and it works offline (only the web fonts need a connection). To host it, enable GitHub Pages on this repo.

## What's inside

| Area | What you get |
|---|---|
| 🧭 **Learning path** | 4 stages, 18 tracks and 100+ lessons, ordered so each one builds on the last: **Foundations → Build → Core Functions → Grow & Lead** |
| 📘 **Lessons** | Each lesson has a hook, an "explain it simply" analogy, animated frameworks you step through, clickable 2×2 matrices, formulas with worked examples, comparison tables, flashcards, timelines, a case study revealed step by step, a "what would you do?" scenario, a checklist, key terms, a quiz, and a challenge with hints and a model answer |
| 🧰 **Toolkit** | 24 live simulators: break-even, LTV:CAC, price elasticity, supply & demand, NPV/IRR, P&L waterfall, runway, cash conversion cycle, Rule of 40, cap table & dilution, valuation, EOQ, funnel, TAM/SAM/SOM, retention curves, viral K-factor, A/B significance, Five Forces, idea scorecard, decision matrix, SWOT, Business Model Canvas, OKRs |
| 🗺️ **Business roadmap** | 8 phases (Idea → Validate → Plan → MVP → Launch → Run → Grow → Scale), each with steps, checklists that save as you tick them, metrics, pitfalls, tools and exit criteria |
| 💡 **Idea Clarity Lab** | 12 guided questions turn a fuzzy idea into a one-page plan, a clarity score, a validation plan and the lessons to take next |
| 🩺 **Health diagnostic** | 16 advisor-grade questions produce a scored report, a radar chart and prioritised fixes. Use it on your own business or on a startup you advise |
| 📚 **Case library** | 30 HBS-style decision cases. You make the call, then see what actually happened |
| 🏆 **Challenge arena** | Consulting-style case problems sorted by role (CEO, CFO, CMO, COO, Founder, Advisor…), with data tables, hints, model answers and a self-scoring rubric |
| 🧠 **Frameworks library** · 📖 **Glossary** · 🎲 **Daily drill** · 📡 **Trends 2025–26** | A searchable cheat sheet of every framework and formula, every key term in plain English, random practice quizzes, and the shifts reshaping business today |
| 🏅 **Progress** | XP, ranks from *Curious Beginner* to *Board-Level Advisor*, streaks, a certificate per track, and progress export/import |

Your progress, notes and answers are saved in your browser's `localStorage`. Nothing leaves your device.

## Project structure

```
index.html            app entry; loads the scripts in order
css/styles.css        all styling (light and dark themes, animations, responsive)
js/core.js            the MBA registry plus the progress store
js/ui.js              DOM helpers, SVG charts, toasts, confetti
js/widgets/*.js       the 24 interactive simulators
js/render.js          lesson and block renderers (framework stepper, matrix, quiz…)
js/pages.js           every page (home, path, lab, advisor, arena…)
js/app.js             app shell and hash router
js/content/*.js       the curriculum, as data (see CONTENT_SCHEMA.md)
```

## Adding content

Content is plain data. To add a lesson, track, case, challenge, roadmap step or trend, follow [`CONTENT_SCHEMA.md`](CONTENT_SCHEMA.md) and add a `<script>` tag to `index.html` if you create a new file.

*Educational content only. It is not legal, tax or investment advice.*
