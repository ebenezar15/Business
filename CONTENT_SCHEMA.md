# Content schema — MBA Studio

All content is plain JavaScript (classic scripts, **no ES modules**, no imports) so the app runs
by double-clicking `index.html` (file://). Every content file calls a registration function on
the global `MBA` object defined in `js/core.js`.

Strings that contain HTML use template literals (backticks). **Never put a raw backtick or `${`
inside the text.** Allowed inline HTML: `<b> <i> <em> <strong> <br> <ul> <ol> <li> <p> <code> <span class="hl">`
(`hl` = highlighter). Keep paragraphs short. Write for someone with **zero** business knowledge,
then build up to what a top B-school (HBS, Wharton, Stanford GSB, INSEAD, IIM) teaches, then to
what operators actually do in the market in 2025–2026.

Accuracy rule: case studies must be real and well documented. Do not invent statistics. If you
are not sure of an exact number, describe it qualitatively ("grew rapidly", "roughly halved").

---

## 1. Tracks — `MBA.addTrack({...})`

```js
MBA.addTrack({
  id: 'finance',                 // kebab-case, unique
  stage: 3,                      // 1 Foundations, 2 Build, 3 Core functions, 4 Grow & Lead
  order: 9,                      // global order 1..18 (given to you)
  title: 'Finance & Accounting',
  icon: '💰',                    // a single emoji
  color: '#0ea5e9',              // accent colour (given to you)
  tagline: 'Read the scoreboard of business',
  summary: `2–3 sentences: what you will be able to do after this track.`,
  outcomes: ['Read a P&L', 'Build a 3-statement model', '...'],   // 4–6 bullets
  lessons: [ LESSON, LESSON, ... ]   // 5–6 lessons, ordered beginner → advanced
});
```

### LESSON

```js
{
  id: 'finance-1',               // trackId-N
  title: 'The three financial statements',
  level: 'Beginner',             // 'Beginner' | 'Intermediate' | 'Advanced'
  minutes: 12,
  hook: 'One sentence that makes the reader care.',
  eli5: `Explain like I'm 12 — one short paragraph with an everyday analogy (lemonade stand, kitchen, cricket/football team, etc.).`,
  blocks: [ BLOCK, BLOCK, ... ],  // 5–9 blocks, see below
  terms: [ { term: 'Gross margin', def: 'One or two plain-English sentences.' }, ... ],  // 5–8
  quiz: [
    { q: 'Question?', options: ['A', 'B', 'C', 'D'], answer: 2, explain: 'Why C is right.' }
  ],                              // 4–5 questions, mix of concept + applied/numeric
  challenge: {
    title: 'Short title',
    prompt: `A realistic business situation with numbers where possible, then a clear ask.`,
    hints: ['hint 1', 'hint 2'],
    model: `A model answer in HTML (structured: steps, numbers, recommendation).`
  },
  takeaways: ['3–5 one-line key takeaways']
}
```

### BLOCK types (use a good mix; every lesson needs ≥1 framework OR formula, ≥1 example/case)

```js
{ type: 'text', title: 'Optional heading', html: `<p>...</p>` }

{ type: 'callout', kind: 'tip' | 'warning' | 'example' | 'insight' | 'myth', title: '...', html: `...` }

// Rendered as an animated step-by-step / layered diagram the learner can click through
{ type: 'framework', name: 'Porter's Five Forces', by: 'Michael Porter, 1979', when: 'When to use it',
  steps: [ { label: 'Threat of new entrants', desc: 'Plain explanation + what to look for' }, ... ] }

// Rendered as an animated 2x2 matrix
{ type: 'matrix', name: 'BCG Growth-Share Matrix', xLabel: 'Relative market share →', yLabel: 'Market growth →',
  cells: [ { label: 'Question marks', desc: '...' }, { label: 'Stars', desc: '...' },
           { label: 'Dogs', desc: '...' },          { label: 'Cash cows', desc: '...' } ] }
           // order: top-left, top-right, bottom-left, bottom-right

{ type: 'formula', name: 'Customer Lifetime Value', expr: 'LTV = ARPU × Gross margin % ÷ Churn rate',
  explain: 'What each part means', example: 'Worked example with numbers' }

{ type: 'compare', title: 'Equity vs Debt', headers: ['', 'Equity', 'Debt'],
  rows: [ ['Cost', 'Ownership', 'Interest'], ... ] }

{ type: 'flip', title: 'Test yourself', cards: [ { front: 'Term or question', back: 'Answer' }, ... ] }   // 3–6 cards

// Animated horizontal timeline / process
{ type: 'timeline', title: '...', items: [ { label: '2007', desc: '...' }, ... ] }

{ type: 'case', company: 'Netflix', year: '2007–2011', title: 'From DVDs to streaming',
  situation: `...`, decision: `...`, outcome: `...`, lesson: `...` }

// Embeds one of the built-in interactive simulators (see list below)
{ type: 'interactive', widget: 'unit-economics', title: 'Play with it', note: 'What to try: e.g. halve churn and watch LTV.' }

// A quick "what would you do?" decision with feedback per option
{ type: 'scenario', prompt: '...', options: [ { text: '...', feedback: '...', good: true }, { text: '...', feedback: '...', good: false } ] }

// A practical checklist the learner can tick (persists)
{ type: 'checklist', title: 'Before you ...', items: ['...', '...'] }
```

### Available interactive widgets (use exact ids)

| id | what it simulates |
|---|---|
| `breakeven` | fixed cost, price, variable cost → break-even units + chart |
| `unit-economics` | ARPU, gross margin, churn, CAC → LTV, LTV:CAC, payback |
| `pricing-elasticity` | price, volume, elasticity, unit cost → revenue & profit curve, optimal price |
| `funnel` | traffic and stage conversion rates → customers & revenue |
| `supply-demand` | shift supply/demand curves → equilibrium price & quantity |
| `compound` | compound growth / time value of money |
| `npv` | cash flows + discount rate → NPV & IRR |
| `cap-table` | founders + funding rounds → dilution & ownership |
| `runway` | cash, burn, revenue growth → runway months & cash curve |
| `tam-sam-som` | market sizing (top-down) |
| `pnl` | revenue → gross profit → EBITDA → net income waterfall |
| `swot` | SWOT builder |
| `bmc` | Business Model Canvas builder |
| `idea-score` | idea validation scorecard |
| `rule-of-40` | growth % + profit margin % health check |
| `eoq` | economic order quantity / inventory cost |
| `retention` | cohort retention curve with churn |
| `five-forces` | rate Porter's forces → industry attractiveness radar |
| `ab-test` | A/B test significance |
| `decision-matrix` | weighted decision scoring |
| `valuation` | revenue/EBITDA multiple valuation + pre/post money |
| `viral-loop` | K-factor viral growth simulation |
| `working-capital` | DSO/DIO/DPO → cash conversion cycle |
| `okr` | OKR builder |

---

## 2. Case library — `MBA.addCases([...])`

```js
{ id: 'case-netflix', company: 'Netflix', industry: 'Media', year: '2007', track: 'strategy',
  title: 'Cannibalise your own DVD business?',
  situation: `Context with key facts at decision time.`,
  question: 'You are the CEO. What do you do?',
  options: [ { text: '...', result: 'What likely happens', best: true }, ... ],   // 3–4
  whatHappened: `What actually happened.`,
  lessons: ['...', '...'], frameworks: ['Innovator\'s dilemma', '...'] }
```

## 3. Challenge arena — `MBA.addChallenges([...])`

```js
{ id: 'ch-coffee-margin', title: '...', difficulty: 1 | 2 | 3, track: 'finance', role: 'CFO' /* or CEO, CMO, Founder, Advisor, COO, CHRO, CPO */,
  scenario: `Situation with data.`, data: { headers: [...], rows: [[...]] } /* optional table */,
  tasks: ['What to figure out 1', '...'], hints: ['...'],
  modelAnswer: `HTML structured answer with numbers and a clear recommendation.`,
  rubric: ['What a great answer includes 1', '...'] }
```

## 4. Roadmap — `MBA.setRoadmap([...])`

```js
{ id: 'rm-idea', phase: 1, title: 'Idea & Clarity', icon: '💡', duration: '1–4 weeks',
  goal: '...', steps: [ { title: '...', detail: `...`, checklist: ['...'] } ],
  metrics: ['what to measure'], pitfalls: ['...'], tools: ['...'], tracks: ['ideation', 'validation'] }
```

## 5. Trends — `MBA.addTrends([...])`

```js
{ title: 'AI agents in operations', category: 'Technology', summary: '...', why: '...',
  examples: ['...'], action: 'What a founder/executive should do about it.' }
```
