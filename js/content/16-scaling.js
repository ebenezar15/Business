/* Track 16 — Scaling & Organisation Design */
MBA.addTrack({
  id: "scaling",
  stage: 4,
  order: 16,
  title: "Scaling & Organisation Design",
  icon: "🏗️",
  color: "#f43f5e",
  tagline: "Grow without breaking the company",
  summary: `Learn how companies move from scrappy founding team to a well-run organisation without losing speed or soul. You will be able to diagnose which growth crisis a company is in, design the org chart and operating rhythm for the next stage, and decide when to expand abroad, franchise, or buy growth through M&A.`,
  outcomes: [
    "Diagnose a company's stage and next crisis using the Greiner growth model",
    "Choose between blitzscaling and efficient growth using burn multiple and Rule of 40",
    "Design an org structure (functional, divisional, matrix) and set sensible spans of control",
    "Install an operating cadence: weekly business reviews, written narratives, quarterly priorities",
    "Evaluate international expansion with the CAGE distance framework",
    "Use franchising, licensing and acquisitions as scale levers — and spot when growth is breaking the company"
  ],
  lessons: [
    /* ---------------------------------------------------------- 1 */
    {
      id: "scaling-1",
      title: "Startup life stages: from hustle to systems",
      level: "Beginner",
      minutes: 12,
      hook: "The habits that got you your first 100 customers are exactly the habits that will break you at 10,000.",
      eli5: `Imagine you run a lemonade stand with your best friend. You squeeze lemons, chat with every customer and remember everyone's name. Now imagine 50 stands across town. You can't squeeze every lemon or meet every customer any more — you need recipes, helpers, a schedule and someone checking quality. Scaling is the journey from "we do everything by hand" to "the system does it well even when we're not there".`,
      blocks: [
        { type: "text", title: "What 'scaling' really means", html: `<p><b>Growth</b> means getting bigger. <b>Scaling</b> means getting bigger <span class="hl">while each extra unit of output costs you less effort, money and chaos</span> than the last one.</p><p>A company that doubles revenue by doubling headcount and doubling problems is growing, not scaling. A company that doubles revenue while headcount grows 40% and quality stays high is scaling.</p>` },
        { type: "callout", kind: "insight", title: "Do things that don't scale — first", html: `<p>In his 2013 essay <i>Do Things That Don't Scale</i>, Paul Graham (Y Combinator) argued that early startups should recruit users one by one and delight them manually. Airbnb's founders famously flew to New York, met hosts in person and photographed their apartments themselves to make listings look better.</p><p>The point: <b>manual work teaches you what the system should eventually do</b>. You only automate what you deeply understand.</p>` },
        { type: "framework", name: "Greiner's Growth Model", by: "Larry Greiner, Harvard Business Review, 1972 (updated 1998)", when: "To diagnose which stage a company is in and which crisis is coming next.", steps: [
          { label: "1. Creativity → crisis of leadership", desc: "Founders build the product through energy and informal talk. As people pile up, nobody is 'managing' — the company needs professional management and structure." },
          { label: "2. Direction → crisis of autonomy", desc: "A strong leader installs functions, budgets and processes. But central control smothers managers lower down who know the customer better." },
          { label: "3. Delegation → crisis of control", desc: "Decision power is pushed to business units or regions. Speed rises, but the top loses visibility and units start to act like separate companies." },
          { label: "4. Coordination → crisis of red tape", desc: "Head office adds planning systems, shared services and review processes to re-link units. Eventually the process becomes the goal and bureaucracy slows everyone." },
          { label: "5. Collaboration → crisis of internal growth / burnout", desc: "Cross-functional teams, matrix structures and a shared culture replace rules. The risk now is fatigue and the need to grow through alliances and acquisitions (Greiner added a sixth phase for this in 1998)." }
        ] },
        { type: "timeline", title: "Typical startup stages (rough headcount guides, not laws)", items: [
          { label: "0–10 people", desc: "Founders do everything. Goal: product-market fit. Process = a shared doc and a group chat." },
          { label: "10–50", desc: "First managers and first functions (sales, engineering, ops). Write down the top 5 repeatable processes." },
          { label: "50–150", desc: "Communication breaks: not everyone knows everyone. Need an operating cadence, clear OKRs and a real leadership team." },
          { label: "150–500", desc: "Departments, middle managers, HR systems, financial controls. Founder must hire people better than themselves." },
          { label: "500+", desc: "Multiple products or regions. Divisional or matrix structures, formal planning, internal audit, board committees." }
        ] },
        { type: "case", company: "Airbnb", year: "2009–2010", title: "Unscalable photography that became a programme", situation: `Early Airbnb listings in New York were not converting. The founders noticed the photos were dark and unappealing.`, decision: `They rented a camera and went door to door photographing listings themselves — clearly not scalable.`, outcome: `Bookings for those listings improved, and the founders learned what made a listing trustworthy. They later turned it into a paid network of freelance photographers — a system built from manual learning.`, lesson: `Do it by hand until you know exactly what "good" looks like; then codify it into a process others can run.` },
        { type: "scenario", prompt: "Your 35-person startup has strong product-market fit. Sales deals are getting stuck because nobody knows who approves discounts, and the CEO is the bottleneck for every decision. Which Greiner crisis is this and what do you do?", options: [
          { text: "Crisis of leadership: hire or appoint functional leaders, publish a simple decision-rights table (e.g. discounts up to 15% approved by Head of Sales).", feedback: "Correct. The company has outgrown founder-only management. Clear owners and decision rights are the fix.", good: true },
          { text: "Crisis of red tape: remove all approval processes.", feedback: "Red tape is a late-stage problem. At 35 people the issue is too little structure, not too much.", good: false },
          { text: "Hire 20 more salespeople to push volume through.", feedback: "More people in a broken system just multiplies the chaos.", good: false }
        ] },
        { type: "checklist", title: "Signs you need to move from hustle to systems", items: [
          "The same question is asked in chat more than three times a week",
          "Customers get different answers from different team members",
          "One person (often the founder) is a bottleneck for most decisions",
          "New hires take more than a month to become productive",
          "You can't tell this week's key numbers without asking three people"
        ] }
      ],
      terms: [
        { term: "Scaling", def: "Growing output faster than the cost, people and complexity needed to produce it." },
        { term: "Greiner growth model", def: "A model showing organisations grow through calm phases, each ending in a predictable crisis that forces a new way of managing." },
        { term: "Product-market fit", def: "The point where a product clearly satisfies strong demand in a market — customers pull it from you." },
        { term: "Process", def: "A repeatable, written way of doing a task so anyone trained can get the same result." },
        { term: "Decision rights", def: "A clear statement of who can make which decisions, and up to what limit." },
        { term: "Codify", def: "To turn tacit, in-someone's-head knowledge into written steps, tools or software." }
      ],
      quiz: [
        { q: "According to Greiner, what crisis ends the 'creativity' phase?", options: ["Crisis of red tape", "Crisis of control", "Crisis of leadership", "Crisis of autonomy"], answer: 2, explain: "Founder-led informal creativity eventually needs professional management — the crisis of leadership." },
        { q: "Why did Paul Graham advise startups to 'do things that don't scale'?", options: ["To learn deeply what customers need before building systems", "Because automation is always too expensive", "To avoid hiring", "Because investors prefer manual work"], answer: 0, explain: "Manual work creates the insight you later codify into scalable processes." },
        { q: "Company A grows revenue 100% and headcount 100%. Company B grows revenue 100% and headcount 35%. Which is scaling?", options: ["Both equally", "Company A", "Neither — scaling only refers to funding", "Company B"], answer: 3, explain: "B produces more output per person; that is the essence of scaling." },
        { q: "A 2,000-person company where every decision needs four sign-offs and planning meetings dominate the calendar is most likely in which crisis?", options: ["Leadership", "Red tape", "Autonomy", "Creativity"], answer: 1, explain: "Over-coordination produces bureaucracy — Greiner's crisis of red tape." }
      ],
      challenge: {
        title: "Diagnose and prescribe",
        prompt: `You advise a 60-person D2C skincare brand growing 8% month on month. The two founders still approve every ad creative, every hire and every supplier payment. Customer support response time has gone from 2 hours to 2 days. Three managers resigned last quarter citing "no authority". Diagnose the Greiner stage and give a 90-day plan.`,
        hints: ["Which crisis comes from founders holding all decisions?", "Think decision rights, a leadership team and two or three written processes.", "What should the founders keep doing personally?"],
        model: `<p><b>Diagnosis:</b> The company is at the end of Greiner's <b>creativity</b> phase and deep in the <b>crisis of leadership</b>, with early signs of the <b>crisis of autonomy</b> (managers quitting over lack of authority).</p><ol><li><b>Days 1–30 — decision rights:</b> publish a table. E.g. ad creative within brand guidelines: Marketing lead; hires below manager level: functional head; supplier payments under a set limit: Finance lead with a second approver. Founders keep: brand, product roadmap, senior hires, cash above the limit.</li><li><b>Days 1–45 — leadership team:</b> name heads of Growth, Operations/CX and Finance; weekly 60-minute leadership meeting with a shared metrics sheet.</li><li><b>Days 30–60 — fix support:</b> write a support SOP (tiers, macros, escalation), set a target such as first response under 4 hours, add a weekly CX metric review.</li><li><b>Days 60–90 — cadence:</b> quarterly priorities (3–5 company goals) and monthly business review.</li></ol><p><b>Success test at day 90:</b> founders spend under 20% of time on approvals, support response is back within target, no further manager exits.</p>`
      },
      takeaways: [
        "Scaling = output grows faster than cost and complexity.",
        "Do unscalable things early to learn; codify them once you understand them.",
        "Every growth phase ends in a predictable crisis — Greiner tells you which one is next.",
        "The founder's job shifts from doing the work to designing the system that does the work."
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "scaling-2",
      title: "Blitzscaling vs efficient growth",
      level: "Beginner",
      minutes: 14,
      hook: "Speed wins markets — until the money runs out. Knowing which game you're playing is a C-suite skill.",
      eli5: `Two kids race to sell ice cream on a hot beach. One sprints with a heavy cart, spilling some, but grabs the best spot first. The other walks carefully and spills nothing but arrives when the crowd has already bought. Sprinting only pays if the best spot is worth the spills — and if you don't collapse halfway.`,
      blocks: [
        { type: "text", title: "Two philosophies", html: `<p><b>Blitzscaling</b> (Reid Hoffman and Chris Yeh, 2018) means prioritising speed over efficiency in an uncertain environment, accepting waste and chaos to win a market that rewards the first big player — usually because of <span class="hl">network effects or winner-take-most dynamics</span>.</p><p><b>Efficient growth</b> means growing as fast as your unit economics and cash allow. Since interest rates rose in 2022, investors have rewarded efficiency much more than in the 2010s cheap-money era.</p>` },
        { type: "compare", title: "When each makes sense", headers: ["", "Blitzscaling", "Efficient growth"], rows: [
          ["Market type", "Winner-take-most, network effects (marketplaces, social, payments)", "Fragmented, many winners can coexist"],
          ["Capital", "Abundant and cheap", "Scarce or expensive"],
          ["Key risk", "Running out of cash; culture breakdown", "Being out-run by a faster rival"],
          ["Key metric", "Market share, growth rate", "Burn multiple, payback period, Rule of 40"],
          ["Examples", "Uber and Airbnb in the 2010s", "Atlassian and Zoho grew for years with little or no outside capital"]
        ] },
        { type: "formula", name: "Burn multiple", expr: "Burn multiple = Net cash burn ÷ Net new ARR", explain: "Popularised by David Sacks (Craft Ventures, 2020). It asks: how many dollars do you burn to add one dollar of new annual recurring revenue? Lower is better. Rough guide: under 1 is excellent, 1–2 good, above 2 suspect, above 3 alarming.", example: "A SaaS company burned $6M this year and grew ARR from $10M to $14M. Net new ARR = $4M. Burn multiple = 6 ÷ 4 = 1.5 — good. If it had burned $16M for the same $4M, the multiple of 4 would signal inefficient growth." },
        { type: "interactive", widget: "rule-of-40", title: "Rule of 40 health check", note: "Try 60% growth with −25% margin (passes) versus 20% growth with 10% margin (fails). Notice that slow, low-margin companies have nowhere to hide." },
        { type: "case", company: "WeWork", year: "2010–2019", title: "Blitzscaling a business without network effects", situation: `WeWork leased office space long-term and sublet it short-term, expanding extremely fast with large private funding, including from SoftBank.`, decision: `It pursued aggressive global expansion and attempted an IPO in 2019.`, outcome: `The IPO prospectus revealed heavy losses, long-term lease liabilities and governance problems. The IPO was withdrawn, the CEO stepped down and the valuation collapsed. WeWork later filed for bankruptcy in 2023.`, lesson: `Blitzscaling works only when speed builds a durable advantage. Real-estate arbitrage has weak network effects, so speed just multiplied fixed obligations.` },
        { type: "interactive", widget: "runway", title: "How long can you sprint?", note: "Set $5M cash and $400k monthly burn. Then raise burn to $700k to 'blitzscale' — how many months do you lose? What revenue growth would you need to justify it?" },
        { type: "scenario", prompt: "You run a B2B HR software company in a crowded market with 40 competitors. A VC offers $30M if you 'triple headcount in 12 months'. Your burn multiple is already 2.5. What do you do?", options: [
          { text: "Take it and triple headcount — speed is everything.", feedback: "In a fragmented market without network effects, speed rarely produces winner-take-all. With a 2.5 burn multiple you'd be scaling inefficiency.", good: false },
          { text: "Raise a smaller amount, fix efficiency (sales productivity, churn) first, then scale the channels that work.", feedback: "Right. Fix the engine before pouring in fuel; target a burn multiple under 2 before accelerating.", good: true },
          { text: "Refuse all funding forever.", feedback: "Capital is a tool; the question is the price and the plan, not whether capital is good or bad.", good: false }
        ] }
      ],
      terms: [
        { term: "Blitzscaling", def: "Prioritising speed over efficiency to win a winner-take-most market quickly." },
        { term: "Network effect", def: "When a product becomes more valuable as more people use it, like a marketplace or messaging app." },
        { term: "Burn rate", def: "How much cash a company loses per month." },
        { term: "Burn multiple", def: "Net cash burn divided by net new ARR; measures how efficiently a company buys growth." },
        { term: "Rule of 40", def: "For software companies, revenue growth % plus profit margin % should be at least 40." },
        { term: "ARR", def: "Annual recurring revenue — the yearly value of subscription contracts." },
        { term: "Runway", def: "Months until cash runs out at the current burn." }
      ],
      quiz: [
        { q: "Blitzscaling is most justified when…", options: ["The market is fragmented with many winners", "Capital is very expensive", "Network effects create winner-take-most dynamics", "Unit economics are negative with no path to improve"], answer: 2, explain: "Speed matters most where the first scaled player captures most of the value." },
        { q: "A company burns $9M and adds $3M net new ARR. Burn multiple?", options: ["0.33", "1", "12", "3"], answer: 3, explain: "9 ÷ 3 = 3 — an alarming level of inefficiency." },
        { q: "A company grows 25% with a 10% profit margin. Rule of 40 score?", options: ["35 — fails", "15 — fails", "40 — passes", "250 — passes"], answer: 0, explain: "25 + 10 = 35, below 40." },
        { q: "What was the core strategic flaw in WeWork's blitzscaling?", options: ["It grew too slowly", "Speed did not create a durable advantage like network effects, while it locked in long-term liabilities", "It had no customers", "It refused venture funding"], answer: 1, explain: "Fast growth multiplied fixed lease obligations without building a moat." },
        { q: "Since 2022 investors have generally…", options: ["Rewarded growth at any cost more than before", "Stopped caring about growth", "Banned the Rule of 40", "Placed much more weight on efficiency and path to profit"], answer: 3, explain: "Higher interest rates shifted the premium toward efficient growth." }
      ],
      challenge: {
        title: "Sprint or jog?",
        prompt: `Your two-sided marketplace for home cleaners operates in 3 cities. Cash: $12M. Monthly burn: $600k. Net new ARR last year: $5M on a $7M annual net burn. A rival just raised $50M and is entering your cities. Should you blitzscale? Use burn multiple and runway in your answer.`,
        hints: ["Compute the burn multiple and current runway.", "Are there local network effects (liquidity of cleaners and customers per city)?", "Consider concentrating rather than expanding everywhere."],
        model: `<p><b>Numbers:</b> Burn multiple = 7 ÷ 5 = <b>1.4</b> (good). Runway = 12 ÷ 0.6 = <b>20 months</b>.</p><p><b>Market logic:</b> Home-services marketplaces have <b>local</b> network effects — density in each city matters more than number of cities.</p><p><b>Recommendation — targeted blitz:</b></p><ul><li>Defend and deepen the 3 existing cities first (increase cleaner supply and repeat bookings) where density already gives an advantage.</li><li>Raise burn modestly to around $800k/month (runway ~15 months) focused on the cities the rival is entering.</li><li>Start a fundraise now while the burn multiple is strong; set a guardrail: if burn multiple exceeds 2 for two quarters, slow down.</li><li>Do not expand to new cities until each current city hits a liquidity target (e.g. most bookings filled within a set time).</li></ul>`
      },
      takeaways: [
        "Blitzscale only where speed creates a lasting moat.",
        "Burn multiple and Rule of 40 tell you if growth is worth its cost.",
        "Since 2022, efficiency is valued far more than raw growth.",
        "Runway is the clock on every scaling bet — always know it."
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "scaling-3",
      title: "Scaling the team: org design that works",
      level: "Intermediate",
      minutes: 15,
      hook: "Your org chart is a strategy decision in disguise — and your product will end up looking like it.",
      eli5: `Think of a school. You can group teachers by subject (all maths teachers together), by grade (all Grade 6 teachers together), or both (a maths teacher who also belongs to the Grade 6 team). Each way makes some things easy and other things hard. Companies face the same choice.`,
      blocks: [
        { type: "compare", title: "The three classic structures", headers: ["", "Functional", "Divisional", "Matrix"], rows: [
          ["Grouped by", "Skill (engineering, sales, finance)", "Product, customer or region", "Both: function AND product/region"],
          ["Best for", "Single product, early stage", "Multiple distinct businesses or markets", "Complex global firms needing both depth and local focus"],
          ["Strength", "Deep expertise, efficiency", "Clear accountability for results", "Shares expertise while staying close to markets"],
          ["Weakness", "Silos; slow cross-team work", "Duplicated functions; less sharing", "Two bosses; conflict; slow decisions"],
          ["Example", "Most startups under ~100 people", "Large conglomerates with separate business units", "Many multinational consumer-goods firms"]
        ] },
        { type: "formula", name: "Span of control", expr: "Number of managers ≈ Total staff ÷ Average span", explain: "Span of control = how many direct reports one manager has. Wide spans (8–12+) suit routine, experienced work; narrow spans (4–6) suit complex, novel or junior teams. Layers = how many levels from CEO to front line.", example: "1,000 employees with an average span of 8 gives about 125 front-line managers, ~16 above them, ~2 above those, then the CEO — roughly 4 layers. Shrink the span to 4 and you need about 250 front-line managers and 5–6 layers: more cost and slower decisions." },
        { type: "callout", kind: "insight", title: "Conway's Law", html: `<p>Melvin Conway (1967): <i>organisations design systems that mirror their own communication structure</i>. If three separate teams build a checkout, you will likely get a checkout in three disconnected parts.</p><p><b>The "inverse Conway manoeuvre":</b> design your teams around the product architecture you <i>want</i>. Want independent services? Create small, independent teams that own them end to end.</p>` },
        { type: "case", company: "Amazon", year: "Early 2000s onward", title: "Two-pizza teams and service-oriented architecture", situation: `As Amazon grew, coordination between large teams slowed product development.`, decision: `Jeff Bezos pushed for small, autonomous "two-pizza teams" (small enough to be fed by two pizzas) with clear ownership, communicating through well-defined interfaces (APIs) rather than meetings.`, outcome: `Teams could ship independently. The internal discipline of building services with clean interfaces is widely credited as a foundation for what became Amazon Web Services.`, lesson: `Team boundaries shape system boundaries (Conway's Law). Small teams with single-threaded ownership move faster.` },
        { type: "framework", name: "Org design in five steps", by: "Adapted from Galbraith's Star Model and common practice", when: "Every time strategy changes or headcount roughly doubles.", steps: [
          { label: "1. Start from strategy", desc: "What must the company be great at in the next 2–3 years? Speed to market? Cost? Local intimacy? Structure follows strategy." },
          { label: "2. Pick the primary axis", desc: "Function, product, customer or region — choose the one that matters most for the strategy. Only one can be primary." },
          { label: "3. Design the links", desc: "How do teams on the other axes coordinate? Shared rituals, councils, dotted lines, platform teams." },
          { label: "4. Set spans and layers", desc: "Aim for few layers; widen spans where work is routine and people are senior." },
          { label: "5. Define decision rights and metrics", desc: "Use a RACI or similar; every team owns a metric it can move." }
        ] },
        { type: "flip", title: "Test yourself", cards: [
          { front: "Single product, 40 people — which structure?", back: "Functional. Simple, efficient, builds deep skills." },
          { front: "Three unrelated product lines, each with its own customers", back: "Divisional — each division owns its P&L." },
          { front: "Biggest risk of a matrix?", back: "Two bosses → unclear accountability and slow conflict resolution." },
          { front: "What does Conway's Law predict?", back: "Your product will mirror your communication structure." },
          { front: "Dunbar's number and why it matters", back: "Robin Dunbar suggested humans keep ~150 stable relationships. Around this size, informal coordination breaks and you need structure." }
        ] },
        { type: "scenario", prompt: "A 300-person SaaS company sells to both small businesses (self-serve) and large enterprises (6-month sales cycles). Today it's purely functional, and the two customer groups keep fighting over the roadmap. What structure change makes most sense?", options: [
          { text: "Create two customer-segment units (SMB and Enterprise), each with its own product, marketing and sales leads, sharing a central platform engineering team.", feedback: "Good. The primary axis becomes the customer segment because their needs differ sharply; a shared platform keeps efficiency.", good: true },
          { text: "Keep functional structure but add more meetings.", feedback: "Meetings treat the symptom. The structure itself forces conflicting priorities onto the same teams.", good: false },
          { text: "Full matrix with every person reporting to two managers.", feedback: "A matrix may come later; jumping to dual reporting for everyone adds confusion at 300 people.", good: false }
        ] }
      ],
      terms: [
        { term: "Functional structure", def: "Teams organised by expertise such as engineering, marketing or finance." },
        { term: "Divisional structure", def: "Teams organised into self-contained units by product, customer or geography, each with its own results." },
        { term: "Matrix structure", def: "People report along two axes, e.g. to a functional head and a product or regional head." },
        { term: "Span of control", def: "The number of direct reports a manager has." },
        { term: "Conway's Law", def: "Systems built by an organisation mirror that organisation's communication structure." },
        { term: "Single-threaded owner", def: "Amazon's term for a leader whose only job is one initiative, removing split attention." },
        { term: "RACI", def: "Responsible, Accountable, Consulted, Informed — a chart clarifying roles for each decision or task." }
      ],
      quiz: [
        { q: "4,800 employees and an average span of control of 8. Roughly how many front-line managers?", options: ["60", "480", "600", "6,000"], answer: 2, explain: "4,800 ÷ 8 = 600." },
        { q: "Which structure creates the clearest P&L accountability per business?", options: ["Divisional", "Functional", "Matrix", "Flat with no managers"], answer: 0, explain: "Divisions own complete results for their product, customer or region." },
        { q: "You want your software split into independent services. Conway's Law suggests you should…", options: ["Hire one big team", "Outsource everything", "Organise small teams that each own one service end to end", "Remove all interfaces"], answer: 2, explain: "Team structure shapes architecture — the inverse Conway manoeuvre." },
        { q: "Narrow spans of control are most appropriate when…", options: ["Work is complex, novel or staff are junior", "Work is routine and staff are senior", "You want fewer layers", "You want lower management cost"], answer: 0, explain: "Complex or junior work needs more coaching per person." },
        { q: "The main weakness of a matrix organisation is…", options: ["No shared expertise", "Too few managers", "It only works for startups", "Two reporting lines causing unclear accountability"], answer: 3, explain: "Dual bosses create conflict and slow decisions unless decision rights are very clear." }
      ],
      challenge: {
        title: "Redesign for international growth",
        prompt: `A 450-person fintech is functional (Product, Engineering, Sales, Ops, Finance). It now operates in India, Indonesia and the UAE, each with different regulators and payment rails. Country launches are slow because every change queues behind global teams. Propose a new structure, spans and decision rights.`,
        hints: ["What must be local and what should stay global?", "Consider a light matrix: country GMs plus global platform.", "State who decides what."],
        model: `<p><b>Primary axis: geography</b>, because regulation and payment rails differ by country.</p><ul><li><b>Country GMs</b> (India, Indonesia, UAE) each own a country P&L, local compliance, partnerships, sales and ops. Each has an embedded product squad (product manager plus 6–8 engineers) for local features.</li><li><b>Global platform</b> (core ledger, risk engine, security, data) stays central to avoid three incompatible systems — Conway's Law in action.</li><li><b>Functional "centres of excellence"</b> (Finance, Legal, People) set standards; country staff have a dotted line to them.</li></ul><p><b>Spans:</b> CEO with 7–8 directs (3 GMs, CTO, CFO, Chief Risk Officer, CPO). Country GMs 6–8 directs. Keep 4–5 layers max.</p><p><b>Decision rights:</b> GMs decide local pricing within guardrails, local hires, local partners. Global platform owns core architecture; a monthly product council resolves roadmap conflicts. Chief Risk/Compliance holds veto on regulatory risk.</p><p><b>Metric to watch:</b> time from country request to launch should fall noticeably within two quarters.</p>`
      },
      takeaways: [
        "Structure follows strategy — pick one primary axis.",
        "Span of control drives layers, cost and speed.",
        "Conway's Law: design teams the way you want your product to look.",
        "Revisit org design every time headcount roughly doubles."
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "scaling-4",
      title: "Operating cadence, playbooks and founder mode",
      level: "Intermediate",
      minutes: 16,
      hook: "Great companies don't just have great people — they have a heartbeat: a rhythm of meetings, numbers and documents that keeps everyone pulling the same way.",
      eli5: `A football team doesn't just turn up on match day. It has training on Monday, tactics on Wednesday, the match on Saturday and a video review on Sunday. That weekly rhythm is why the team improves. A company's "operating cadence" is the same idea.`,
      blocks: [
        { type: "timeline", title: "A typical operating cadence", items: [
          { label: "Daily", desc: "Short team stand-ups; dashboards for real-time metrics (sales, incidents, support)." },
          { label: "Weekly", desc: "Weekly Business Review (WBR): leaders review a fixed set of input and output metrics, investigate variances, assign owners." },
          { label: "Monthly", desc: "Monthly business review: financials vs plan, hiring, key projects; deeper dives on one or two topics." },
          { label: "Quarterly", desc: "Set or review quarterly priorities/OKRs; board meeting; reforecast." },
          { label: "Annually", desc: "Strategy refresh, annual operating plan and budget, org design review." }
        ] },
        { type: "case", company: "Amazon", year: "2004 onward", title: "The six-page narrative memo", situation: `Jeff Bezos believed slide decks let presenters hide weak thinking behind bullet points.`, decision: `He banned PowerPoint in senior meetings. Proposals are written as narrative memos of up to six pages. Meetings start with everyone reading the memo silently, then discussing it.`, outcome: `The practice became a hallmark of Amazon's culture, along with the "PR/FAQ" — writing the press release and FAQ before building a product ("working backwards").`, lesson: `Writing forces clarity. Silent reading ensures everyone has actually absorbed the content before debating.` },
        { type: "framework", name: "EOS — the Entrepreneurial Operating System", by: "Gino Wickman, 'Traction' (2007)", when: "Small and mid-sized companies (roughly 10–250 people) needing a simple, complete management system.", steps: [
          { label: "Vision", desc: "Everyone shares one picture of where the company is going (the Vision/Traction Organizer)." },
          { label: "People", desc: "Right people (share core values) in the right seats (have the skill and desire for the role); the 'Accountability Chart'." },
          { label: "Data", desc: "A weekly Scorecard of 5–15 numbers that predict the business's health." },
          { label: "Issues", desc: "Keep an issues list and solve problems with Identify–Discuss–Solve (IDS)." },
          { label: "Process", desc: "Document the handful of core processes and make sure everyone follows them." },
          { label: "Traction", desc: "Quarterly 'Rocks' (3–7 priorities) and a weekly 90-minute 'Level 10' leadership meeting." }
        ] },
        { type: "interactive", widget: "okr", title: "Write a quarterly OKR", note: "Draft one company objective for next quarter and 3 measurable key results. Check: is each KR a number with a deadline, not a task?" },
        { type: "compare", title: "Founder mode vs manager mode", headers: ["", "Manager mode", "Founder mode"], rows: [
          ["Origin", "Classic management teaching: hire good people, give them autonomy", "Paul Graham's Sept 2024 essay, inspired by Brian Chesky's talk about running Airbnb"],
          ["How leader engages", "Through direct reports; skip-levels are discouraged", "Deep involvement in details that matter; skip-level meetings normal"],
          ["Strength", "Scales leadership time; empowers managers", "Keeps product quality and vision coherent"],
          ["Risk", "Leader loses touch; 'professional managers' optimise locally", "Micromanagement, bottlenecks, burned-out teams"]
        ] },
        { type: "case", company: "Airbnb", year: "2020–2023", title: "Brian Chesky reorganises around founder mode", situation: `After the pandemic shock in 2020, Chesky felt Airbnb had become slow and divided into many semi-independent divisions.`, decision: `He moved to a more functional organisation, reduced the number of parallel initiatives, reviewed work in detail himself and shifted to a small number of large coordinated product releases per year.`, outcome: `Airbnb became profitable and Chesky's talks about the approach led to Graham's "founder mode" essay. The approach is debated — critics warn it can become micromanagement.`, lesson: `As companies scale, leaders must decide which details they keep owning. The answer is not "delegate everything" nor "control everything".` },
        { type: "checklist", title: "Build your first playbook / SOP", items: [
          "Pick a task done at least weekly by more than one person",
          "Record the best performer doing it (screen or notes)",
          "Write steps as verbs, with screenshots and 'definition of done'",
          "Add the top three exceptions and who to escalate to",
          "Assign an owner and a review date",
          "Measure: time to complete and error rate, before and after"
        ] },
        { type: "callout", kind: "tip", title: "WBR rule of thumb", html: `<p>Track <b>controllable input metrics</b> (e.g. number of demos, % orders shipped on time) not just output metrics (revenue). Amazon's WBR focuses on inputs because leaders can act on them directly.</p>` }
      ],
      terms: [
        { term: "Operating cadence", def: "The recurring rhythm of meetings, reviews and documents that runs the business." },
        { term: "WBR", def: "Weekly Business Review — a meeting that reviews a standard metric deck and assigns follow-ups." },
        { term: "Six-pager", def: "Amazon's narrative memo format, read silently at the start of a meeting." },
        { term: "PR/FAQ", def: "A press release and FAQ written before a product is built, to test the customer value." },
        { term: "EOS", def: "Entrepreneurial Operating System — Gino Wickman's toolkit of vision, scorecard, rocks and weekly meetings." },
        { term: "SOP", def: "Standard operating procedure — written steps for a repeatable task." },
        { term: "Founder mode", def: "A leadership style where the founder stays deeply involved in key details across levels, rather than managing only through direct reports." },
        { term: "Input metric", def: "A controllable activity metric that drives an outcome, e.g. sales calls made." }
      ],
      quiz: [
        { q: "Why does Amazon use narrative memos rather than slide decks?", options: ["They are shorter", "Writing forces clear, complete thinking and silent reading ensures shared understanding", "Slides are illegal", "To save printing costs"], answer: 1, explain: "Narratives expose weak logic that bullets can hide." },
        { q: "In EOS, what are 'Rocks'?", options: ["Core values", "Weekly numbers", "3–7 quarterly priorities", "Annual budgets"], answer: 2, explain: "Rocks are the key priorities for the next 90 days." },
        { q: "Which is an INPUT metric for a sales team?", options: ["Quarterly revenue", "Net profit", "Market share", "Number of qualified demos held per week"], answer: 3, explain: "Demos are controllable activities that drive revenue." },
        { q: "The main risk of 'founder mode' is…", options: ["Micromanagement and becoming a bottleneck", "The founder loses touch", "Too much delegation", "No vision"], answer: 0, explain: "Deep involvement can turn into control that slows teams down." },
        { q: "A WBR should primarily…", options: ["Showcase wins to the CEO", "Review a consistent metric set, explain variances and assign owners", "Replace all other meetings", "Set the annual budget"], answer: 1, explain: "Consistency and follow-through make the WBR powerful." }
      ],
      challenge: {
        title: "Install a heartbeat",
        prompt: `A 120-person logistics startup has no regular leadership meeting; decisions happen in hallway chats. Revenue is $18M, growing 60%. On-time delivery has slipped from 96% to 89% and nobody owns it. Design a cadence (daily to annual), a 10-metric weekly scorecard and one SOP to write first.`,
        hints: ["Mix input and output metrics.", "Name an owner per metric.", "The first SOP should address the biggest pain."],
        model: `<p><b>Cadence:</b> daily ops stand-up (15 min, delivery exceptions); weekly 90-minute leadership meeting with scorecard and issues list; monthly business review with finance; quarterly priorities (max 5) and board meeting; annual plan.</p><p><b>Weekly scorecard (owner):</b></p><ol><li>On-time delivery % (Head of Ops) — target 95%</li><li>Orders shipped (Ops)</li><li>Failed first-attempt deliveries % (Ops)</li><li>Driver/courier utilisation % (Ops)</li><li>New bookings $ (Sales)</li><li>Qualified pipeline added $ (Sales)</li><li>Customer complaints per 1,000 orders (CX)</li><li>Gross margin per delivery (Finance)</li><li>Cash and runway months (Finance)</li><li>Open critical roles (People)</li></ol><p><b>First SOP:</b> the delivery-exception process — how a late shipment is detected, escalated and communicated to the customer within a set time. Owner: Head of Ops; review in 30 days; target: on-time back above 94% within one quarter.</p>`
      },
      takeaways: [
        "Cadence turns strategy into weekly action.",
        "Write things down: narratives and SOPs scale; hallway chats don't.",
        "Measure controllable inputs, not just results.",
        "Founder mode vs manager mode is a dial, not a switch."
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "scaling-5",
      title: "Scaling unit economics — and when growth breaks the company",
      level: "Advanced",
      minutes: 15,
      hook: "If you lose money on every order, growth is just a faster way to die.",
      eli5: `If each cupcake costs you ₹60 to make and deliver but you sell it for ₹50, selling more cupcakes makes you poorer, not richer. Scaling only helps when each extra cupcake earns more than it costs — and stays that way as you grow.`,
      blocks: [
        { type: "formula", name: "Contribution margin per order", expr: "Contribution = Price − Variable costs (COGS + fulfilment + payment fees + variable marketing)", explain: "Contribution margin is what each extra unit adds toward fixed costs (rent, salaries, tech). Scaling helps only if contribution is positive and improving, so that rising volume covers fixed costs.", example: "Meal kit: price $60, food $24, packaging $5, delivery $9, payment fees $2, marketing per order $12. Contribution = 60 − 52 = $8 (13%). With $400k monthly fixed costs you need 50,000 orders a month to break even. If delivery falls to $6 through route density, contribution rises to $11 and breakeven drops to about 36,400 orders." },
        { type: "interactive", widget: "unit-economics", title: "Do your unit economics scale?", note: "Start with ARPU $50, 70% margin, 5% monthly churn, CAC $400. Then double CAC (what happens when you exhaust cheap channels) — does LTV:CAC stay above 3?" },
        { type: "text", title: "What changes as you scale", html: `<ul><li><b>CAC usually rises</b> — the cheapest, most eager customers come first; later ones cost more.</li><li><b>Unit costs should fall</b> — volume discounts, density, automation, learning curve.</li><li><b>Fixed costs step up</b> — new layers, systems, compliance, offices.</li><li><b>Quality risk rises</b> — more people, suppliers and handoffs.</li></ul><p class="hl">Healthy scaling = falling unit cost outruns rising CAC and fixed-cost steps.</p>` },
        { type: "case", company: "Webvan", year: "1999–2001", title: "Scaling infrastructure before proving the unit", situation: `Webvan raised large sums to deliver groceries ordered online, building highly automated, expensive warehouses in multiple US cities.`, decision: `It expanded city by city before proving that each order made money in its first market.`, outcome: `Order volumes and margins could not cover the huge fixed costs. Webvan went bankrupt in 2001. Online grocery later succeeded with lighter models and better timing.`, lesson: `Prove contribution margin in one market before scaling fixed infrastructure. Timing and capital intensity can kill a correct idea.` },
        { type: "case", company: "Toyota", year: "2009–2010", title: "When growth outruns quality", situation: `Toyota pursued rapid global expansion through the 2000s and became the world's largest carmaker.`, decision: `Facing sudden-acceleration and other safety issues, Toyota recalled millions of vehicles. President Akio Toyoda told the US Congress in 2010 that the company had grown too quickly and priorities had become confused.`, outcome: `Toyota slowed expansion, strengthened quality oversight and gave regions more voice in safety decisions, and its reputation recovered over following years.`, lesson: `Even the company famous for quality systems can break when growth outruns capability. Growth must be paced by people and process capacity.` },
        { type: "matrix", name: "Growth health check", xLabel: "Unit economics: negative → positive", yLabel: "Growth rate: low → high", cells: [
          { label: "Burning platform", desc: "Fast growth, negative unit economics. Every new customer increases losses. Fix the unit before spending more." },
          { label: "Scale engine", desc: "Fast growth, positive unit economics. Invest — but watch quality, culture and CAC creep." },
          { label: "Zombie", desc: "Slow growth, negative unit economics. Restructure, pivot or shut down." },
          { label: "Cash cow / optimise", desc: "Slow growth, positive unit economics. Harvest cash, find new growth vectors." }
        ] },
        { type: "checklist", title: "Warning signs that growth is breaking the company", items: [
          "Quality metrics (defects, complaints, refunds) rising faster than volume",
          "Customer acquisition cost rising every quarter with no plan",
          "Key people working unsustainable hours; regretted attrition rising",
          "Cash conversion worsening (receivables or inventory growing faster than revenue)",
          "Leaders can't explain last month's numbers without a week of work",
          "Compliance, security or safety incidents increasing"
        ] }
      ],
      terms: [
        { term: "Unit economics", def: "Revenue and costs for one unit (order, customer, store) — the building block of profitability." },
        { term: "Contribution margin", def: "Price minus variable costs; what each unit contributes to fixed costs and profit." },
        { term: "Fixed cost step", def: "A jump in fixed costs at certain scale points, like a new warehouse or management layer." },
        { term: "Economies of scale", def: "Unit costs falling as volume rises thanks to purchasing power, density or automation." },
        { term: "Diseconomies of scale", def: "Unit costs rising as a firm gets too big — coordination overhead, bureaucracy, quality issues." },
        { term: "LTV:CAC", def: "Lifetime value of a customer divided by the cost to acquire them; around 3 or more is often seen as healthy." }
      ],
      quiz: [
        { q: "Price $40, variable costs $34, fixed costs $120,000 per month. Breakeven orders per month?", options: ["3,000", "3,529", "12,000", "20,000"], answer: 3, explain: "Contribution = $6. 120,000 ÷ 6 = 20,000 orders." },
        { q: "Which typically RISES as a company scales its customer acquisition?", options: ["Purchasing costs per unit", "Delivery cost per order in dense areas", "CAC", "Software cost per user"], answer: 2, explain: "Cheap early adopters are exhausted, so marginal CAC usually increases." },
        { q: "Webvan's key mistake was…", options: ["Building costly infrastructure across many cities before proving unit economics", "Being too profitable", "Refusing to raise money", "Selling only in one city"], answer: 0, explain: "Heavy fixed costs scaled before the unit worked." },
        { q: "A company growing 80% a year with negative contribution margin is in which quadrant?", options: ["Scale engine", "Cash cow", "Burning platform", "Zombie"], answer: 2, explain: "Fast growth multiplies losses — fix the unit first." }
      ],
      challenge: {
        title: "Fix the unit before you scale",
        prompt: `A quick-commerce startup (10-minute grocery delivery) has average order value ₹450, gross margin 22%, delivery cost ₹55 per order, discounts ₹30 per order, payment fees 2%. It runs 30 dark stores with fixed costs of ₹4 lakh per store per month and does 900 orders per store per day. Investors want 100 stores next year. Is the unit healthy? What would you change before scaling?`,
        hints: ["Compute contribution per order: gross margin minus delivery, discounts, fees.", "Per-store monthly contribution vs ₹4 lakh fixed.", "Which levers: AOV, ads/retail media income, delivery batching, discounts?"],
        model: `<p><b>Per order:</b> Gross margin = 22% × 450 = ₹99. Minus delivery ₹55, discounts ₹30, payment fees ₹9 → contribution = <b>₹5</b> per order.</p><p><b>Per store per month:</b> 900 × 30 × ₹5 = ₹1.35 lakh vs ₹4 lakh fixed → about <b>₹2.65 lakh loss per store per month</b>. At 100 stores, roughly ₹2.65 crore monthly loss — scaling multiplies losses.</p><p><b>Levers before scaling:</b></p><ul><li>Raise AOV to ₹550 (bundles, minimum order for free delivery): gross margin ₹121 → contribution about ₹25.</li><li>Cut discounts to ₹15 for repeat users → +₹15.</li><li>Add advertising income from brands (common in the sector) of, say, ₹10 per order.</li><li>Batch deliveries in dense areas to cut delivery to ₹45 → +₹10.</li></ul><p>Combined contribution around ₹60 per order → 900 × 30 × 60 = ₹16.2 lakh per store per month, comfortably above ₹4 lakh fixed.</p><p><b>Recommendation:</b> prove positive store-level profit in the existing 30 stores for 2–3 consecutive months, then expand only into dense neighbourhoods that match the best stores' profile.</p>`
      },
      takeaways: [
        "Prove the unit, then scale the unit.",
        "CAC rises and fixed costs step up as you grow — plan for both.",
        "Quality, people and cash metrics are early warnings that growth is breaking things.",
        "Pace growth to capability: even Toyota stumbled when it outran its systems."
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "scaling-6",
      title: "Scale levers: international expansion, franchising and M&A",
      level: "Advanced",
      minutes: 18,
      hook: "Going abroad, franchising and buying companies can multiply your size — or multiply your mistakes.",
      eli5: `You make the best samosas on your street. To grow you could open your own shops in other cities (expansion), let others open shops using your recipe and name for a fee (franchising), or buy a famous bakery and add samosas to its menu (acquisition). Each is faster or cheaper in some ways and riskier in others.`,
      blocks: [
        { type: "framework", name: "CAGE Distance Framework", by: "Pankaj Ghemawat, Harvard Business Review, 2001", when: "Before entering a new country — to see how 'far' it really is beyond the map.", steps: [
          { label: "Cultural distance", desc: "Language, religion, social norms, tastes. Example: food, retail habits, attitudes to debt." },
          { label: "Administrative distance", desc: "Laws, regulation, political ties, currency, trade agreements, colonial links." },
          { label: "Geographic distance", desc: "Physical distance, time zones, climate, transport and logistics infrastructure." },
          { label: "Economic distance", desc: "Income levels, cost of labour and inputs, quality of infrastructure, purchasing power." }
        ] },
        { type: "case", company: "Walmart", year: "1997–2006", title: "Germany: a CAGE failure", situation: `Walmart entered Germany in 1997 by acquiring local chains.`, decision: `It largely imported its US playbook — staff greeters and bag-packing, US-style management and practices — into a market with strong discounters such as Aldi and Lidl, strict labour and zoning rules, and different shopper expectations.`, outcome: `Walmart struggled for years and exited Germany in 2006, selling its stores and taking a large loss.`, lesson: `Cultural and administrative distance were underestimated. Scale advantages from home did not travel.` },
        { type: "case", company: "Starbucks", year: "2000–2008 and 1999 onward", title: "Australia vs China", situation: `Starbucks entered Australia in 2000, a country with a mature, independent espresso café culture. It entered China in 1999, a tea-drinking market with a fast-growing middle class.`, decision: `In Australia it expanded quickly with a largely standard US offer. In China it invested patiently, used local partners, designed stores as social 'third places', adapted menus and invested in employees.`, outcome: `In 2008 Starbucks closed most of its Australian stores. China became one of its largest markets, though it now faces intense local competition such as Luckin Coffee.`, lesson: `The same brand can fail or win depending on local fit. Cultural distance can be an opportunity if you adapt.` },
        { type: "compare", title: "Scale levers compared", headers: ["", "Own expansion", "Franchising / licensing", "Acquisition (M&A)"], rows: [
          ["Speed", "Slow to medium", "Fast — partners invest capital", "Fastest — buy existing revenue"],
          ["Capital needed", "High", "Low for franchisor", "High (cash or shares)"],
          ["Control", "Full", "Partial — via contract and brand standards", "Full, but integration is hard"],
          ["Main risk", "Execution and cash", "Inconsistent quality; franchisee conflict", "Overpaying; culture clash; integration failure"],
          ["Classic example", "Starbucks' mostly company-operated US stores", "McDonald's", "Disney–Pixar, Cisco"]
        ] },
        { type: "case", company: "McDonald's", year: "1955 onward", title: "Franchising as a scale engine", situation: `Ray Kroc partnered with the McDonald brothers and built a franchise system with highly standardised operations.`, decision: `Franchisees invest their own capital and run restaurants; McDonald's provides the brand, systems and supply chain, and earns royalties and — notably — rent, since it often owns or controls the property.`, outcome: `The vast majority of McDonald's restaurants worldwide are franchised. The model gives scale with relatively low capital and steady income.`, lesson: `Franchising scales when the operation can be codified into a strict playbook and the economics work for both franchisor and franchisee.` },
        { type: "case", company: "Disney and Cisco", year: "2006 / 1990s–2000s", title: "M&A done well", situation: `Disney's own animation had lost creative momentum, while Pixar produced hit after hit. Cisco, in networking, needed to keep up with fast-moving technology.`, decision: `Disney acquired Pixar in 2006 for about $7.4 billion in stock, and protected Pixar's culture, putting its leaders (Ed Catmull, John Lasseter) in charge of Disney Animation too. Cisco made a long series of acquisitions of smaller tech companies with a repeatable integration playbook.`, outcome: `Disney's animation revived (e.g. later hits from Disney Animation). Cisco built much of its product range through acquisitions — though some later deals disappointed.`, lesson: `Successful acquirers buy for a clear capability, protect what made the target valuable, and use a disciplined integration process.` },
        { type: "interactive", widget: "decision-matrix", title: "Choose your scale lever", note: "Score own expansion, franchising and acquisition against criteria like speed, capital, control and risk. Weight the criteria for your situation — e.g. a cash-poor brand should weight capital heavily." },
        { type: "callout", kind: "warning", title: "Most M&A disappoints", html: `<p>Studies over decades have repeatedly found that a large share of acquisitions fail to create value for the buyer's shareholders. Common causes: <b>overpaying</b> (winner's curse), <b>optimistic synergies</b>, <b>culture clash</b> and <b>slow integration</b>. Before any deal ask: what can we do with this asset that the market can't — and how much of that value are we handing to the seller in the premium?</p>` }
      ],
      terms: [
        { term: "CAGE framework", def: "Ghemawat's four kinds of distance between countries: cultural, administrative, geographic and economic." },
        { term: "Franchising", def: "Letting independent operators use your brand and system for fees and royalties while they invest their own capital." },
        { term: "Licensing", def: "Granting another firm rights to use your IP (brand, technology, content) for a fee, usually with less operational control than franchising." },
        { term: "Royalty", def: "An ongoing fee, often a percentage of sales, paid for using a brand or IP." },
        { term: "Synergies", def: "Extra value from combining two companies — cost savings or new revenue." },
        { term: "Post-merger integration", def: "The work of combining people, systems and processes after an acquisition." },
        { term: "Winner's curse", def: "The tendency for the winning bidder in an auction to overpay." }
      ],
      quiz: [
        { q: "Strict labour laws and zoning rules in a new country are which CAGE distance?", options: ["Administrative", "Cultural", "Geographic", "Economic"], answer: 0, explain: "Laws and regulations are administrative distance." },
        { q: "Why does franchising let a brand scale quickly with little capital?", options: ["Banks fund all stores", "Governments subsidise it", "There are no operating costs", "Franchisees invest their own capital in units"], answer: 3, explain: "Franchisees fund and run units; the franchisor earns fees and royalties." },
        { q: "What did Disney do that helped the Pixar acquisition succeed?", options: ["Merged Pixar fully into Disney's existing culture", "Protected Pixar's culture and put Pixar leaders in charge of Disney Animation", "Moved Pixar to Florida", "Cut Pixar's creative staff"], answer: 1, explain: "Disney preserved the capability it was buying." },
        { q: "Starbucks' outcome in Australia vs China mainly illustrates…", options: ["Coffee is unpopular everywhere", "Franchising always fails", "The importance of local adaptation and cultural fit", "Geographic distance is the only factor"], answer: 2, explain: "Adapting to local culture made the difference." },
        { q: "A franchisor earns 5% royalty on 400 stores averaging $1.2M annual sales. Annual royalty income?", options: ["$2.4M", "$60M", "$480M", "$24M"], answer: 3, explain: "400 × 1.2M = $480M system sales × 5% = $24M." }
      ],
      challenge: {
        title: "Pick the expansion path",
        prompt: `A profitable Indian casual-dining chain (45 company-owned outlets, outlet-level EBITDA margin about 18%, payback about 2.5 years) wants to reach 200 outlets in 5 years and enter the UAE. It has ₹60 crore cash; each outlet costs about ₹2 crore. Advise on the mix of own expansion, franchising and possibly acquisition, and use CAGE for the UAE.`,
        hints: ["How many outlets can ₹60 crore fund?", "Which locations need tight control and which suit franchise partners?", "CAGE: large Indian diaspora, different regulation, short flight."],
        model: `<p><b>Capital check:</b> ₹60 crore ÷ ₹2 crore ≈ 30 own outlets (ignoring reinvested profits). Reaching 200 with own capital alone is unrealistic without large fundraising.</p><p><b>Mix:</b></p><ul><li><b>Own outlets (~50–60 more)</b> in core metros where brand control matters and data shows best returns; fund from cash plus outlet cash flows.</li><li><b>Franchise (~80–100)</b> in tier-2 cities via multi-unit franchisees, after codifying an operations manual, central kitchen supply, training academy and mystery audits. Royalty plus a fee on central supplies.</li><li><b>Acquisition</b> only if a regional chain with good sites is available at a sensible multiple — converting outlets can be faster than building.</li></ul><p><b>UAE (CAGE):</b> Cultural — large South Asian diaspora is a natural beachhead, though tastes and halal requirements matter. Administrative — licensing, local partner or sponsor rules depending on location, food-safety regulation. Geographic — short flight, easy supervision. Economic — higher rents and staff costs; higher price points possible.</p><p><b>Recommendation:</b> enter the UAE through a <b>master franchise or joint venture</b> with an experienced local F&B operator, pilot 3–5 outlets, then scale if outlet economics match India's. Track same-store sales, outlet EBITDA and audit scores monthly across all formats.</p>`
      },
      takeaways: [
        "Measure distance with CAGE before crossing borders.",
        "Franchising scales fast when the playbook is tight and partners win too.",
        "Most acquisitions disappoint — buy a clear capability and protect it.",
        "Pick the scale lever that fits your capital, control needs and risk appetite."
      ]
    }
  ]
});
