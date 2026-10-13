/* Track 18 — C-Suite, Consulting & Startup Advisory */
MBA.addTrack({
  id: "csuite",
  stage: 4,
  order: 18,
  title: "C-Suite, Consulting & Startup Advisory",
  icon: "🎯",
  color: "#0f766e",
  tagline: "Think, decide and advise like a top executive",
  summary: `This capstone track pulls everything together at the top of the house. You will learn what each C-suite seat really does, how great executives make high-stakes decisions, the consultant's toolkit for cracking any business problem, how to manage boards, lead in a crisis and communicate with impact — and how to be a genuinely useful startup advisor and build your own path to the C-suite.`,
  outcomes: [
    "Explain the role of the CEO, CFO, COO, CMO, CTO, CPO, CHRO and CRO and how they work together",
    "Use decision tools: one-way vs two-way doors, expected value, pre-mortems and second-order thinking",
    "Structure any problem with MECE issue trees, hypotheses and the Pyramid Principle",
    "Crack profitability, market-entry and M&A cases",
    "Manage a board and investors, and lead through a crisis",
    "Advise startups with stage-appropriate diagnostics and fair advisor terms"
  ],
  lessons: [
    /* ---------------------------------------------------------- 1 */
    {
      id: "csuite-1",
      title: "The C-suite: who does what and how they fit together",
      level: "Beginner",
      minutes: 13,
      hook: "A company's top team is like an orchestra — brilliant soloists who don't play together make noise, not music.",
      eli5: `Think of a cricket or football team. The captain (CEO) sets the game plan. The coach for fitness (COO) keeps everyone running smoothly. The person counting the money for the club (CFO) makes sure you can pay players. The scout who finds new fans (CMO), the person who builds the stadium tech (CTO) and the one who looks after the players (CHRO) — each has a job, and the team only wins if they talk to each other.`,
      blocks: [
        { type: "compare", title: "The main C-suite seats", headers: ["Role", "Core job", "Key metrics", "Typical tension"], rows: [
          ["CEO — Chief Executive Officer", "Sets vision and strategy, allocates capital, builds the top team, owns culture, answers to the board", "Total shareholder return, growth, profitability, strategic progress", "Balancing short-term results with long-term bets"],
          ["CFO — Chief Financial Officer", "Financial planning, reporting, controls, capital raising, investor relations; increasingly a strategic partner", "Cash, margins, ROIC, forecast accuracy", "Growth investment vs financial discipline"],
          ["COO — Chief Operating Officer", "Runs day-to-day operations and execution; often the CEO's partner or successor", "Efficiency, quality, delivery, cost per unit", "Standardisation vs local flexibility"],
          ["CMO — Chief Marketing Officer", "Brand, demand generation, customer insight, positioning", "Pipeline, CAC, brand health, share", "Brand building vs short-term demand"],
          ["CTO — Chief Technology Officer", "Technology strategy, architecture, engineering", "Uptime, delivery speed, security, tech debt", "New features vs platform stability"],
          ["CPO — Chief Product Officer", "Product vision, roadmap, user experience", "Adoption, retention, NPS", "What to build vs what sales wants"],
          ["CHRO — Chief Human Resources/People Officer", "Talent, culture, organisation design, compensation, leadership development", "Engagement, regretted attrition, time to hire", "Culture vs speed of hiring"],
          ["CRO — Chief Revenue Officer", "Owns sales, often customer success and sometimes marketing, end to end", "Bookings, net revenue retention, win rate", "Quarterly targets vs healthy pipeline and discounts"]
        ] },
        { type: "callout", kind: "insight", title: "Two CROs and newer seats", html: `<p>"CRO" can also mean <b>Chief Risk Officer</b> (common in banks and insurers). Newer seats include Chief Data/AI Officer, Chief Information Security Officer (CISO), Chief Sustainability Officer and Chief of Staff. Titles vary — focus on <span class="hl">which decisions each person owns</span>.</p>` },
        { type: "framework", name: "How the C-suite works as a system", by: "Synthesis of common executive-team practice", when: "Designing or diagnosing a leadership team.", steps: [
          { label: "One shared scorecard", desc: "Every leader owns part of one company scorecard; nobody wins if the company loses." },
          { label: "Clear decision rights", desc: "Who decides, who is consulted (e.g. RAPID or RACI). Prevents endless loops." },
          { label: "Productive conflict", desc: "Debate hard in the room, commit together outside it ('disagree and commit')." },
          { label: "Capital allocation forum", desc: "Budget, headcount and priorities are decided together, not lobbied one-on-one with the CEO." },
          { label: "Operating cadence", desc: "Weekly leadership meeting, monthly business review, quarterly planning and board prep." }
        ] },
        { type: "case", company: "Microsoft", year: "2014 onward", title: "Satya Nadella resets culture and strategy", situation: `When Satya Nadella became CEO in 2014, Microsoft was seen as slow, internally competitive and missing the mobile shift.`, decision: `He emphasised a "growth mindset" culture (inspired by Carol Dweck's research), a "mobile-first, cloud-first" strategy, partnerships even with rivals (e.g. Office on iPhone and Android), and a more collaborative leadership team. Later, Microsoft made a major investment and partnership with OpenAI.`, outcome: `Azure cloud became a central growth engine and Microsoft's market value rose dramatically over the following decade.`, lesson: `A CEO's biggest levers are culture, strategy and capital allocation — and the right top team to execute them.` },
        { type: "flip", title: "Who owns it?", cards: [
          { front: "Deciding whether to raise debt or equity", back: "CFO recommends, CEO and board decide." },
          { front: "Fixing a 30% rise in late deliveries", back: "COO (operations)." },
          { front: "Choosing a cloud architecture for the next 5 years", back: "CTO." },
          { front: "Redesigning the sales compensation plan", back: "CRO with CHRO and CFO." },
          { front: "Building a leadership development programme", back: "CHRO." }
        ] },
        { type: "scenario", prompt: "Your CRO wants to discount heavily to hit the quarter; your CFO says margins can't take it; your CPO says the deals need custom features. As CEO, what do you do?", options: [
          { text: "Side with whoever argued loudest.", feedback: "That rewards politics, not good decisions.", good: false },
          { text: "Bring all three into one room, agree the criteria (margin floor, strategic value, product fit), decide deal-by-deal and set a standing discount and customisation policy.", feedback: "Right — turn a recurring conflict into a clear policy and shared criteria.", good: true },
          { text: "Let each leader decide independently.", feedback: "Conflicting decisions will cause more chaos and erode margins.", good: false }
        ] }
      ],
      terms: [
        { term: "C-suite", def: "The group of top executives whose titles typically start with 'Chief'." },
        { term: "Capital allocation", def: "Deciding where to invest the company's money, people and time." },
        { term: "Disagree and commit", def: "Debate openly, then fully support the final decision even if you disagreed." },
        { term: "RAPID", def: "Bain's decision-role tool: Recommend, Agree, Perform, Input, Decide." },
        { term: "Growth mindset", def: "Carol Dweck's idea that abilities can be developed through effort and learning." },
        { term: "Chief of Staff", def: "A senior aide who helps the CEO run the leadership team, priorities and cadence." }
      ],
      quiz: [
        { q: "Which executive usually owns financial controls, reporting and capital raising?", options: ["COO", "CMO", "CFO", "CHRO"], answer: 2, explain: "These are core CFO responsibilities." },
        { q: "'CRO' in a bank most likely means…", options: ["Chief Risk Officer", "Chief Revenue Officer", "Chief Research Officer", "Chief Retail Officer"], answer: 0, explain: "Banks and insurers usually have a Chief Risk Officer." },
        { q: "Which was central to Satya Nadella's turnaround of Microsoft?", options: ["Exiting cloud computing", "Banning partnerships with rivals", "Focusing only on Windows", "A growth-mindset culture and a cloud-first strategy"], answer: 3, explain: "Culture plus cloud focus drove the transformation." },
        { q: "'Disagree and commit' means…", options: ["Never disagree with the CEO", "Debate openly, then fully support the decision", "Commit only if you agree", "Delay until consensus"], answer: 1, explain: "It enables speed without suppressing debate." }
      ],
      challenge: {
        title: "Design a top team",
        prompt: `A Series B B2B SaaS company ($15M ARR, 140 people) has a CEO-founder, a CTO-founder, and a VP Sales. Growth slowed from 120% to 60%; churn is rising; finance is run by an outsourced accountant; nobody owns hiring quality. The board approves budget for three senior hires this year. Which seats do you fill, in what order, and why?`,
        hints: ["What's breaking: retention, finance, people?", "Is a CRO or CPO more urgent?", "Sequence matters — who helps hire the others?"],
        model: `<ol><li><b>CFO (first):</b> at $15M ARR with a Series C ahead, the company needs forecasting, unit-economics visibility (churn by cohort, CAC payback) and fundraising leadership. An outsourced accountant can't do this.</li><li><b>CPO or Head of Product (second):</b> rising churn often signals product gaps or poor onboarding. A CPO frees the CTO-founder to focus on architecture and engineering scale, and owns retention metrics with customer success.</li><li><b>CHRO/Head of People (third):</b> 140 people heading to 250+ needs hiring quality, leveling and manager training.</li></ol><p><b>Why not a CRO yet?</b> The VP Sales can grow into the role; adding a CRO before fixing retention would push more customers into a leaky bucket.</p><p><b>Team operating model:</b> weekly leadership meeting with one scorecard (ARR, NRR, burn multiple, hiring plan), quarterly priorities and a clear decision-rights matrix.</p>`
      },
      takeaways: [
        "Each C-suite seat owns distinct decisions and metrics.",
        "The top team is a system: shared scorecard, clear decision rights, productive conflict.",
        "CEO's biggest levers: strategy, culture, capital allocation and the team.",
        "Titles vary — always ask who decides what."
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "csuite-2",
      title: "Executive decision-making and mental models",
      level: "Intermediate",
      minutes: 16,
      hook: "Executives are paid to make a few big decisions well and many small decisions fast — and to know which is which.",
      eli5: `Choosing ice cream flavours is a two-way door: if you hate it, try another tomorrow. Choosing to get a tattoo is a one-way door: hard to undo. Smart people decide the first kind quickly and take time with the second kind.`,
      blocks: [
        { type: "matrix", name: "Decision type matrix", xLabel: "Reversibility: easy → hard", yLabel: "Impact: low → high", cells: [
          { label: "Big but reversible — move fast, test", desc: "e.g. pricing experiment, new marketing channel. Decide quickly with ~70% of information; monitor and adjust." },
          { label: "Big and irreversible — go slow", desc: "e.g. major acquisition, entering a regulated market, firing a co-founder. Deep analysis, dissent, pre-mortem, board input." },
          { label: "Small and reversible — delegate", desc: "e.g. meeting tools, small vendor choices. Push to the lowest sensible level." },
          { label: "Small but irreversible — use a checklist", desc: "e.g. deleting old data, signing a small long-term lease. Simple rules and a second pair of eyes." }
        ] },
        { type: "case", company: "Amazon", year: "2015–2016 shareholder letters", title: "One-way and two-way doors", situation: `Jeff Bezos worried that as Amazon grew, it would apply heavyweight decision processes to every decision, slowing everything down.`, decision: `In his 2015 letter he distinguished Type 1 decisions (one-way doors, nearly irreversible) from Type 2 (two-way doors, reversible), urging that Type 2 decisions be made quickly by small groups. In 2016 he added that most decisions should be made with around 70% of the information you wish you had.`, outcome: `The framework became widely adopted across tech and beyond. Amazon also took bold bets — some failed, like the Fire Phone (2014), which led to a write-down of about $170 million, yet Bezos framed such failures as the cost of invention.`, lesson: `Match the weight of the process to the reversibility and impact of the decision.` },
        { type: "formula", name: "Expected value", expr: "EV = Σ (Probability of outcome × Value of outcome)", explain: "Expected value weighs each possible outcome by its probability. It helps compare risky options — but also check the downside: never take a bet with a small chance of ruin, however good its EV (Warren Buffett's point about not risking what you need for what you don't).", example: "Launching a new product costs $2M. 30% chance it earns $10M profit, 50% chance $2M, 20% chance $0. EV of payoff = 0.3×10 + 0.5×2 + 0.2×0 = $4M. Net EV = 4 − 2 = +$2M → worth doing, if losing $2M won't threaten the company." },
        { type: "framework", name: "Executive mental models toolkit", by: "Gary Klein (pre-mortem), Howard Marks (second-level thinking), Charlie Munger (latticework of models) and others", when: "Before any high-stakes decision.", steps: [
          { label: "Pre-mortem", desc: "Imagine it's a year later and the decision failed badly. Everyone writes why. Surfaces hidden risks and permits dissent." },
          { label: "Second-order thinking", desc: "Ask 'and then what?' — what happens after the first effect? Price cuts win share, then competitors match, then margins fall for everyone." },
          { label: "Inversion", desc: "Ask how to guarantee failure, then avoid those things." },
          { label: "Base rates (outside view)", desc: "Before trusting your plan, check how similar projects usually go (e.g. how often big IT projects run over budget)." },
          { label: "Opportunity cost", desc: "The value of the best alternative you give up — including leadership attention." },
          { label: "Reversibility check", desc: "Is this a one-way or two-way door? Set the speed accordingly." }
        ] },
        { type: "interactive", widget: "decision-matrix", title: "Weighted decision scoring", note: "Compare three strategic options (e.g. build, partner, acquire) on criteria like strategic fit, cost, speed, risk and reversibility. Change the weights — does the winner change? If small weight changes flip the answer, the decision is close; gather more information or run a test." },
        { type: "callout", kind: "warning", title: "Common executive biases", html: `<ul><li><b>Confirmation bias</b> — seeking only evidence that supports your view.</li><li><b>Sunk-cost fallacy</b> — continuing because of what's already spent.</li><li><b>Overconfidence and planning fallacy</b> — underestimating time, cost and risk (Kahneman and Tversky).</li><li><b>Groupthink</b> — teams converging to avoid conflict.</li><li><b>HiPPO</b> — "highest-paid person's opinion" overriding data.</li></ul><p>Countermeasures: pre-mortems, a designated devil's advocate, written pre-reads, decision logs reviewed later.</p>` },
        { type: "scenario", prompt: "Your team has spent $3M and 18 months on an internal platform that is still 6 months from launch. A vendor now offers an equivalent product for $400k a year. What's the right reasoning?", options: [
          { text: "Continue — we've already invested $3M.", feedback: "That's the sunk-cost fallacy. The $3M is gone either way.", good: false },
          { text: "Compare only future costs and benefits: remaining build cost and risk vs vendor cost, fit and lock-in. Decide on that basis.", feedback: "Correct. Good decisions look forward, not backward.", good: true },
          { text: "Fire the team for wasting money.", feedback: "Blame doesn't answer the question; and decisions were likely reasonable at the time.", good: false }
        ] }
      ],
      terms: [
        { term: "One-way door (Type 1)", def: "A decision that is very hard or impossible to reverse; deserves careful deliberation." },
        { term: "Two-way door (Type 2)", def: "A reversible decision; should be made quickly, often by small teams." },
        { term: "Expected value", def: "The probability-weighted average of all possible outcomes." },
        { term: "Pre-mortem", def: "Imagining a decision has failed and explaining why, to surface risks in advance." },
        { term: "Second-order thinking", def: "Considering the consequences of the consequences." },
        { term: "Sunk cost", def: "Money or effort already spent that can't be recovered and shouldn't drive future decisions." },
        { term: "Base rate", def: "How often something happens across a reference class of similar cases." }
      ],
      quiz: [
        { q: "A bet costs $1M with 40% chance of $4M payoff and 60% chance of $0. Net expected value?", options: ["+$1.6M", "−$0.4M", "+$0.6M", "+$3M"], answer: 2, explain: "0.4 × 4 = $1.6M expected payoff; minus $1M cost = +$0.6M." },
        { q: "Bezos suggested most decisions should be made with about what share of the information you wish you had?", options: ["30%", "50%", "100%", "70%"], answer: 3, explain: "Waiting for 90% usually means you're too slow." },
        { q: "Which technique asks the team to imagine the project has already failed?", options: ["Pre-mortem", "SWOT", "Brainstorming", "Benchmarking"], answer: 0, explain: "Gary Klein's pre-mortem legitimises raising risks." },
        { q: "Cutting prices wins share, then rivals match, then industry margins fall. This illustrates…", options: ["Sunk cost", "Second-order thinking", "Base rates", "Anchoring"], answer: 1, explain: "Thinking past the first-order effect." },
        { q: "Which decision is most clearly a one-way door?", options: ["Testing a new email subject line", "Changing the office snack vendor", "Trying a new ad channel for a month", "Acquiring a large company with stock"], answer: 3, explain: "Large acquisitions are very hard to unwind." }
      ],
      challenge: {
        title: "Make the call",
        prompt: `You're CEO of a $50M-revenue consumer brand. Option A: enter the US with a $6M budget — 25% chance of building a $40M-value business, 45% chance of $8M value, 30% chance of failure ($0). Option B: launch an adjacent product line at home for $2M — 60% chance of $10M value, 40% chance $1M. Cash on hand is $9M. Compute EV, apply decision models and recommend.`,
        hints: ["Compute EV for each, net of cost.", "Consider ruin risk with $9M cash.", "Is either a two-way door? Can you stage the bigger bet?"],
        model: `<p><b>Option A:</b> EV payoff = 0.25×40 + 0.45×8 + 0.30×0 = 10 + 3.6 = $13.6M. Net EV = 13.6 − 6 = <b>+$7.6M</b>.</p><p><b>Option B:</b> EV payoff = 0.6×10 + 0.4×1 = $6.4M. Net EV = 6.4 − 2 = <b>+$4.4M</b>.</p><p><b>Beyond EV:</b> A uses two-thirds of cash with a 30% chance of total loss — a risk to the whole company (one-way door). B is cheaper and more reversible.</p><p><b>Pre-mortem for A:</b> US retail slotting fees, higher CAC, logistics, brand unknown — base rates for consumer brands entering the US are sobering.</p><p><b>Recommendation:</b> do <b>B now</b> and turn A into a staged two-way door: a $1.5M US test (e.g. online-only plus one regional retailer) with clear go/no-go metrics (CAC, repeat rate, retailer sell-through) after 9 months. If it works, commit the rest — possibly with new funding — with much better probabilities.</p>`
      },
      takeaways: [
        "Classify decisions by reversibility and impact; set speed accordingly.",
        "Use expected value — but never risk ruin for a good average.",
        "Pre-mortems, inversion and second-order thinking expose hidden risks.",
        "Ignore sunk costs; decide on future costs and benefits."
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "csuite-3",
      title: "The consulting toolkit: structure any problem",
      level: "Intermediate",
      minutes: 16,
      hook: "Top consultants aren't smarter than you — they're more structured. Learn the structure and you can crack problems you've never seen.",
      eli5: `If you lose your keys, you could panic and look everywhere at random. Or you could split the house into rooms, check each room once, and start with the room where you most likely left them. That's MECE plus a hypothesis — the secret sauce of consultants.`,
      blocks: [
        { type: "framework", name: "MECE — Mutually Exclusive, Collectively Exhaustive", by: "Associated with McKinsey and Barbara Minto", when: "Breaking any problem into parts.", steps: [
          { label: "Mutually exclusive", desc: "Parts don't overlap — each item belongs in exactly one bucket. Avoids double counting." },
          { label: "Collectively exhaustive", desc: "Together, the parts cover everything — nothing important is missed." },
          { label: "Good example", desc: "Profit = Revenue − Costs. Revenue = Price × Volume. Costs = Fixed + Variable. Clean, complete, no overlap." },
          { label: "Bad example", desc: "'Customers by: young, online, high-income' — overlapping and incomplete." }
        ] },
        { type: "text", title: "Issue trees and hypothesis-driven problem solving", html: `<p>An <b>issue tree</b> breaks a key question into sub-questions, MECE at each level, until each branch can be answered with data.</p><p><b>Hypothesis-driven</b> means starting with your best guess of the answer, then designing analyses to prove or disprove it — rather than "boiling the ocean".</p><p><span class="hl">Example:</span> "Why have profits fallen 20%?" Hypothesis: "Mainly due to rising delivery costs in two regions." Analyses: cost per order by region over 3 years; volume mix; price changes. If data rejects it, move to the next branch.</p>` },
        { type: "framework", name: "The Pyramid Principle and SCQA", by: "Barbara Minto, McKinsey (1970s; 'The Pyramid Principle')", when: "Any executive memo, email, presentation or recommendation.", steps: [
          { label: "Lead with the answer", desc: "Put the main recommendation first — executives are busy." },
          { label: "Support with 3 (±1) key arguments", desc: "Each MECE, each a full sentence that could be a slide title." },
          { label: "Back each with data", desc: "Evidence sits under each argument." },
          { label: "SCQA intro — Situation", desc: "The stable context everyone agrees on." },
          { label: "Complication", desc: "What changed or what's wrong." },
          { label: "Question", desc: "The question this raises." },
          { label: "Answer", desc: "Your recommendation — the top of the pyramid." }
        ] },
        { type: "callout", kind: "example", title: "SCQA in action", html: `<p><b>S:</b> We've been the market leader in premium headphones for five years.<br><b>C:</b> In the past 12 months, two rivals launched comparable products at 30% lower prices and our share fell from 34% to 27%.<br><b>Q:</b> How should we respond?<br><b>A:</b> Launch a mid-priced line under a new sub-brand while doubling down on premium features — not cutting our flagship price.</p>` },
        { type: "formula", name: "The 80/20 rule (Pareto principle)", expr: "Roughly 80% of effects come from 20% of causes", explain: "Named after Vilfredo Pareto. It's a rule of thumb, not a law — the exact split varies — but it tells you to find the vital few drivers first.", example: "A distributor finds that 18% of SKUs generate 79% of gross profit and 25% of customers cause 70% of service tickets. Focus: protect stock for the top SKUs, review pricing or service levels for high-ticket customers." },
        { type: "flip", title: "Consulting vocabulary", cards: [
          { front: "Boil the ocean", back: "Analysing everything instead of testing focused hypotheses. Avoid." },
          { front: "So what?", back: "The question to ask of every chart: what does it mean for the decision?" },
          { front: "Action title", back: "A slide title that states the conclusion in a full sentence, not a topic label." },
          { front: "Ghost deck", back: "Draft slides with hypothesised conclusions, created before analysis to guide the work." },
          { front: "Day-one answer", back: "Your initial hypothesis on the first day of a project." }
        ] },
        { type: "scenario", prompt: "A client asks: 'Why is our customer churn rising?' Which first step is most consultant-like?", options: [
          { text: "Collect every possible dataset and look for patterns.", feedback: "That's boiling the ocean — slow and unfocused.", good: false },
          { text: "Build a MECE issue tree (e.g. product, price, service, competition, customer mix), form a hypothesis about the main driver and test it with targeted data.", feedback: "Yes — structure plus hypothesis gets you to an answer fast.", good: true },
          { text: "Recommend a discount to all customers immediately.", feedback: "A solution before a diagnosis may waste money.", good: false }
        ] },
        { type: "checklist", title: "Before you send an executive recommendation", items: [
          "Answer stated in the first two lines",
          "3 supporting arguments, MECE",
          "Every chart has an action title and a 'so what'",
          "Numbers sourced and sanity-checked",
          "Risks and next steps included",
          "Fits on one page (with appendix if needed)"
        ] }
      ],
      terms: [
        { term: "MECE", def: "Mutually Exclusive, Collectively Exhaustive — a way of splitting problems with no overlaps and no gaps." },
        { term: "Issue tree", def: "A diagram breaking a question into MECE sub-questions." },
        { term: "Hypothesis-driven", def: "Starting with a likely answer and testing it, rather than analysing everything." },
        { term: "Pyramid Principle", def: "Barbara Minto's method: lead with the answer, then grouped supporting arguments and data." },
        { term: "SCQA", def: "Situation, Complication, Question, Answer — a storytelling structure for introductions." },
        { term: "Pareto principle", def: "The 80/20 rule: a small share of causes drives most effects." },
        { term: "Action title", def: "A slide headline stating the conclusion as a full sentence." }
      ],
      quiz: [
        { q: "Splitting customers into 'under 30', '30–50' and 'over 50' is…", options: ["Mutually exclusive but not exhaustive", "Overlapping", "MECE", "Neither"], answer: 2, explain: "Every age is covered exactly once." },
        { q: "In SCQA, what does the 'C' stand for?", options: ["Complication", "Conclusion", "Customer", "Cost"], answer: 0, explain: "The complication is what changed or went wrong." },
        { q: "The Pyramid Principle tells you to…", options: ["Build up to the answer at the end", "Avoid recommendations", "Lead with the answer, then support it", "Use as many slides as possible"], answer: 2, explain: "Answer first, then supporting arguments." },
        { q: "A team analyses 200 variables without a hypothesis. This is called…", options: ["Boiling the ocean", "Ghost decking", "Pareto analysis", "Pre-mortem"], answer: 0, explain: "Unfocused, exhaustive analysis wastes time." },
        { q: "15% of products produce 78% of profit. Which principle does this illustrate?", options: ["MECE", "SCQA", "Inversion", "Pareto (80/20)"], answer: 3, explain: "A vital few drive most of the results." }
      ],
      challenge: {
        title: "Build the issue tree",
        prompt: `A hospital chain's CEO says: "Our EBITDA margin dropped from 18% to 12% in two years even though revenue grew 20%." Build a MECE issue tree, state your top hypothesis, list the 4–5 analyses you'd run first, and write the opening SCQA for your final memo (assuming your hypothesis is confirmed).`,
        hints: ["Margin = (Revenue − Costs) ÷ Revenue — split both sides.", "Revenue: price/mix by payer and specialty. Costs: staff, consumables, overheads.", "Pick the hypothesis that fits revenue up, margin down."],
        model: `<p><b>Issue tree:</b> Why did margin fall?</p><ul><li><b>Revenue per patient fell</b> → payer mix shifted to lower-paying insurers or government schemes; specialty mix shifted to lower-margin services; price/tariff changes.</li><li><b>Costs per patient rose</b> → staff costs (wages, agency nurses, overtime); medical consumables and drugs; overheads (new hospitals not yet at full occupancy, IT, admin).</li></ul><p><b>Hypothesis:</b> new hospitals opened in the last two years are running at low occupancy while carrying full staff and fixed costs, plus higher agency-nurse spend.</p><p><b>First analyses:</b> (1) EBITDA margin by hospital, mature vs new; (2) occupancy and revenue per bed by hospital; (3) staff cost as % of revenue and agency spend trend; (4) payer mix over time; (5) consumables cost per procedure.</p><p><b>SCQA:</b> <i>S:</i> We've grown revenue 20% in two years by opening four hospitals. <i>C:</i> But EBITDA margin fell from 18% to 12%, mainly because the new hospitals are at low occupancy and agency-staff costs have risen sharply. <i>Q:</i> How do we restore margins without stopping growth? <i>A:</i> Accelerate occupancy in new hospitals through referral partnerships and specialty focus, cut agency costs by building a permanent nursing pool, and pause further openings until new sites reach target occupancy.</p>`
      },
      takeaways: [
        "MECE: no overlaps, no gaps.",
        "Start with a hypothesis; test it; don't boil the ocean.",
        "Answer first — then 3 supporting arguments (Pyramid Principle).",
        "Use SCQA to frame any recommendation and 80/20 to focus effort."
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "csuite-4",
      title: "Case interviews: profitability, market entry and M&A",
      level: "Advanced",
      minutes: 18,
      hook: "Three case types cover most strategy questions a CEO ever faces. Master them and you can structure almost any boardroom debate.",
      eli5: `A detective solves mysteries with a method: gather clues, list suspects, test each one. Business cases work the same way. Profit falling? Check money coming in and money going out. Entering a new market? Check if it's big, if you can win and if it pays. Buying a company? Check if it fits, what it's worth and whether you can combine them.`,
      blocks: [
        { type: "formula", name: "Profitability tree", expr: "Profit = (Price × Volume) − (Fixed costs + Variable cost per unit × Volume)", explain: "Start every profitability case here. Then ask: is the problem revenue, cost or both? Is it the whole company or one segment, product, region or channel? Compare vs history and competitors.", example: "Bakery: price ₹40, volume 10,000 loaves/month, variable cost ₹22, fixed costs ₹1.2 lakh. Profit = 4,00,000 − (1,20,000 + 2,20,000) = ₹60,000. If flour pushes variable cost to ₹28, profit = 4,00,000 − (1,20,000 + 2,80,000) = ₹0. A ₹6 price rise (to ₹46) restores ₹60,000 if volume holds; to know if it will, consider price elasticity and competitors." },
        { type: "framework", name: "Market entry case structure", by: "Common consulting practice", when: "Should we enter market X / launch product Y / expand to country Z?", steps: [
          { label: "1. Market attractiveness", desc: "Size and growth (TAM/SAM/SOM), profitability, customer needs, trends, regulation." },
          { label: "2. Competition", desc: "Who's there, their share and strengths, likely reactions; industry structure (Five Forces)." },
          { label: "3. Our ability to win", desc: "Capabilities, brand, cost position, distribution, differentiating advantage." },
          { label: "4. Economics", desc: "Investment, breakeven time, NPV/IRR, payback, risks." },
          { label: "5. Mode of entry", desc: "Build, partner/JV, license/franchise or acquire — trade off speed, control, cost, risk." },
          { label: "6. Recommendation", desc: "Go / no-go / go with conditions, plus key risks and next steps." }
        ] },
        { type: "interactive", widget: "five-forces", title: "Rate an industry before entering", note: "Pick an industry you'd consider entering (e.g. EV charging in India). Rate each force. A high threat from buyers and substitutes plus low barriers means a tough market to make money in." },
        { type: "interactive", widget: "tam-sam-som", title: "Size the market", note: "Estimate the total market, the slice you can serve and the share you can realistically win in 3–5 years. Interviewers care more about logical assumptions than exact numbers." },
        { type: "framework", name: "M&A case structure", by: "Common consulting and corporate development practice", when: "Should we acquire company X?", steps: [
          { label: "1. Strategic rationale", desc: "Why buy? Growth, capabilities, technology, talent, scale, defensive. Is buying better than building or partnering?" },
          { label: "2. Target assessment", desc: "Market, competitive position, financials, management, culture, risks." },
          { label: "3. Synergies", desc: "Cost synergies (more certain) and revenue synergies (less certain); timing and cost to achieve them." },
          { label: "4. Valuation and price", desc: "Standalone value + realistic synergies − integration costs. Max price must leave value for our shareholders." },
          { label: "5. Integration and risks", desc: "Culture, key people retention, systems, regulatory approval, customer reaction." }
        ] },
        { type: "case", company: "Disney–Pixar", year: "2006", title: "M&A case in real life", situation: `Disney's in-house animation was struggling while Pixar, its distribution partner, produced hit after hit. Their distribution deal was ending, and relations under Disney's previous leadership had been strained.`, decision: `New CEO Bob Iger proposed acquiring Pixar. Disney paid about $7.4 billion in stock. Rationale: creative capability and talent — not just films. Integration plan: protect Pixar's culture; put Pixar's Ed Catmull and John Lasseter in charge of Disney Animation too.`, outcome: `Pixar continued producing successes and Disney Animation was revived. Iger later used similar logic for Marvel (2009) and Lucasfilm (2012).`, lesson: `A clear capability rationale, a price justified by strategic value and a culture-preserving integration plan are what separate good deals from bad ones.` },
        { type: "callout", kind: "tip", title: "How to run any case", html: `<ol><li><b>Clarify</b> the objective and constraints (what does success look like? by when?).</li><li><b>Structure</b> a MECE framework tailored to the question — not a memorised template.</li><li><b>Hypothesise</b> and prioritise the most likely branch.</li><li><b>Analyse</b> numbers out loud; sanity-check results.</li><li><b>Synthesise</b>: answer first, 2–3 reasons, risks, next steps.</li></ol>` }
      ],
      terms: [
        { term: "Profitability case", def: "A case asking why profits changed and how to improve them." },
        { term: "Market entry case", def: "A case evaluating whether and how to enter a new market." },
        { term: "TAM / SAM / SOM", def: "Total addressable market, serviceable available market and serviceable obtainable market." },
        { term: "Cost synergies", def: "Savings from combining companies, e.g. removing duplicate functions." },
        { term: "Revenue synergies", def: "Extra sales from combining companies, e.g. cross-selling; generally less certain than cost synergies." },
        { term: "Control premium", def: "The amount paid above a target's market value to gain control." },
        { term: "Synthesis", def: "Pulling analysis into a clear answer and recommendation." }
      ],
      quiz: [
        { q: "Price $20, volume 50,000, variable cost $12, fixed cost $300,000. Profit?", options: ["$400,000", "$100,000", "$700,000", "$1,000,000"], answer: 1, explain: "Revenue 1,000,000 − (300,000 + 600,000) = $100,000." },
        { q: "In an M&A case, which synergies are generally more reliable?", options: ["Revenue synergies", "Brand synergies", "Cost synergies", "They are equally reliable"], answer: 2, explain: "Cost savings are more within the acquirer's control." },
        { q: "Target's standalone value $500M, realistic synergies $150M, integration costs $50M. Maximum rational price (before leaving any value for the buyer)?", options: ["$500M", "$650M", "$700M", "$600M"], answer: 3, explain: "500 + 150 − 50 = $600M. Paying that gives all synergy value to the seller; a good deal pays less." },
        { q: "What's the first step in any case?", options: ["Clarify the objective and constraints", "Calculate breakeven", "Recommend an answer", "Draw the Five Forces"], answer: 0, explain: "Understanding the real question prevents solving the wrong problem." },
        { q: "Why was Disney's Pixar acquisition considered successful?", options: ["Disney absorbed Pixar fully into its own culture", "A capability-led rationale and protecting Pixar's culture and leaders", "It was paid entirely in cash", "Pixar stopped making films"], answer: 1, explain: "The deal bought and protected creative capability." }
      ],
      challenge: {
        title: "Full case: should a coffee chain enter Indonesia?",
        prompt: `A profitable Indian specialty-coffee chain (220 cafés, café-level EBITDA ~20%) is considering entering Indonesia. Data: Indonesia's coffee-shop market is large and growing fast, with strong local chains offering low-priced, app-ordered coffee; average ticket would be lower than in India; a local conglomerate offers a 50/50 joint venture with access to mall sites; build cost per café about $180k. Structure the case, estimate breakeven for one café and recommend.`,
        hints: ["Use the market-entry framework.", "Assume a ticket price, daily cups, margin and fixed costs for breakeven.", "Mode of entry: JV vs own."],
        model: `<p><b>1. Market:</b> large, fast-growing, young urban consumers — attractive. <b>2. Competition:</b> intense; strong local players with low prices and app-led convenience; global brands also present. Buyer power high (many choices), substitutes plentiful. <b>3. Ability to win:</b> our specialty positioning and menu innovation could differentiate, but our brand is unknown there.</p><p><b>4. Café economics (illustrative):</b> average ticket $3.00; contribution margin after ingredients, packaging and delivery fees ~65% → $1.95 per order. Fixed costs per café (rent, staff, utilities) ~$14,000/month. Breakeven = 14,000 ÷ 1.95 ≈ <b>7,200 orders/month ≈ 240 per day</b>. Payback on $180k at a mature café earning, say, $6k/month EBITDA ≈ 30 months.</p><p><b>5. Mode:</b> JV with the conglomerate gives mall sites, local know-how and regulatory navigation; we keep brand standards and menu control in the agreement, with exit and buy-out clauses.</p><p><b>Recommendation:</b> <b>Go, with conditions</b> — pilot 8–10 cafés through the JV in Jakarta over 12 months; go/no-go metrics: 240+ orders/day per café by month 6, app reorder rate, café EBITDA above 12% by month 12. Key risks: price war with local chains, JV governance disputes, currency.</p>`
      },
      takeaways: [
        "Profit = Price × Volume − Costs: always start there.",
        "Market entry: attractiveness, competition, ability to win, economics, mode.",
        "M&A: rationale, target, synergies, price, integration.",
        "Clarify, structure, hypothesise, analyse, synthesise."
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "csuite-5",
      title: "Boards, investors and crisis leadership",
      level: "Advanced",
      minutes: 16,
      hook: "The CEO has one boss — the board — and many audiences. How you manage them in good times decides whether they back you in bad times.",
      eli5: `Imagine you're class captain. The teachers (the board) want to know how things are going, and the parents (investors) want to know if the class is doing well. If you only talk to them when something goes wrong, they'll be nervous. If you keep them updated honestly, they'll help when trouble comes.`,
      blocks: [
        { type: "framework", name: "Managing your board well", by: "Common practice among experienced CEOs and directors", when: "Every quarter — and between meetings.", steps: [
          { label: "Pre-wire", desc: "Talk to each director one-on-one before the meeting about big decisions. No surprises in the room." },
          { label: "Send a pre-read 3–7 days ahead", desc: "Narrative memo plus key metrics, so the meeting is for discussion, not presentation." },
          { label: "Bad news early", desc: "Share problems quickly and with a plan. Trust is built on honesty when it's hard." },
          { label: "Use the board's skills", desc: "Ask for specific help: introductions, hiring, deal experience." },
          { label: "Spend time on strategy", desc: "Aim for a good share of the meeting on forward-looking topics, not just reporting." },
          { label: "Executive session", desc: "Let independent directors meet without management — healthy, not threatening." }
        ] },
        { type: "checklist", title: "Board pack essentials", items: [
          "One-page CEO summary: what went well, what didn't, decisions needed",
          "Key metrics vs plan and prior year (revenue, margins, cash, runway, KPIs)",
          "Financial statements and forecast",
          "Strategic topic deep-dive with options and recommendation",
          "People: key hires, departures, org changes",
          "Risks and compliance update",
          "Explicit list of approvals requested"
        ] },
        { type: "case", company: "PepsiCo", year: "2006–2018", title: "Indra Nooyi and Performance with Purpose", situation: `As CEO, Indra Nooyi introduced "Performance with Purpose": shifting the portfolio toward healthier products, cutting environmental impact and investing in people — alongside financial results.`, decision: `Around 2013–2014 activist investor Nelson Peltz (Trian Partners) pushed PepsiCo to split its beverages and snacks businesses. Nooyi and the board studied the idea, engaged extensively with investors and argued the combined company was stronger.`, outcome: `PepsiCo stayed together; Trian later exited its stake and a Trian adviser joined the board for a period. Nooyi led the company until 2018, during which revenue grew substantially and the portfolio shifted toward healthier products.`, lesson: `Long-term strategies survive activist pressure when CEOs communicate a clear thesis, deliver results and engage investors directly and respectfully.` },
        { type: "text", title: "Investor relations basics", html: `<ul><li><b>Consistency:</b> report the same metrics every quarter; don't change definitions to flatter results.</li><li><b>Guidance:</b> under-promise and over-deliver; missing guidance damages trust more than modest targets.</li><li><b>Know your shareholders:</b> long-term funds, index funds, activists and retail investors want different things.</li><li><b>Private startups:</b> monthly or quarterly investor updates — highlights, lowlights, metrics, cash and runway, specific asks.</li></ul>` },
        { type: "case", company: "Tata Group (Taj Hotels)", year: "2008", title: "Ratan Tata and the Mumbai attacks", situation: `In November 2008 terrorists attacked several locations in Mumbai, including the Taj Mahal Palace hotel. Many guests and staff were killed; staff were widely praised for protecting guests at great personal risk.`, decision: `Under chairman Ratan Tata, the group supported affected employees and families extensively — reported measures included continued salaries, support for dependents and help for others affected nearby, such as street vendors and railway victims. Ratan Tata personally visited affected families.`, outcome: `The hotel was restored and reopened, and the response became a widely cited example of values-based crisis leadership in India.`, lesson: `In crisis, people remember how you treated them. Values-led leadership builds lasting loyalty and trust.` },
        { type: "framework", name: "Crisis leadership principles", by: "Synthesis of research and well-known cases (e.g. J&J 1982, Tata 2008)", when: "When a crisis hits — and in preparation.", steps: [
          { label: "Show up visibly", desc: "The leader must be present, early. Silence is filled by rumours." },
          { label: "People first", desc: "Safety and welfare of customers, employees and the public before profit or blame." },
          { label: "Tell the truth fast", desc: "Share what you know, what you don't and when you'll update." },
          { label: "Decide with a small team", desc: "A clear crisis team with decision rights; log decisions." },
          { label: "Act on values", desc: "Costly decisions aligned with stated values build trust for years." },
          { label: "Learn and fix", desc: "After the crisis, a candid review and real changes to prevent recurrence." }
        ] },
        { type: "scenario", prompt: "Two days before a board meeting, you learn your largest customer (20% of revenue) will not renew. What do you do?", options: [
          { text: "Wait and mention it in 'other business' at the end of the meeting.", feedback: "Surprises destroy board trust.", good: false },
          { text: "Call each director before the meeting, explain what happened, the impact on forecast and runway, and your plan; put it at the top of the agenda.", feedback: "Right — bad news early, with a plan.", good: true },
          { text: "Leave it out of the board pack until you've found a replacement customer.", feedback: "Withholding material information breaches trust and possibly duties.", good: false }
        ] }
      ],
      terms: [
        { term: "Pre-wiring", def: "Discussing key decisions with directors individually before the board meeting." },
        { term: "Board pack", def: "The set of documents sent to directors before a board meeting." },
        { term: "Executive session", def: "Part of a board meeting held without management present." },
        { term: "Activist investor", def: "An investor who buys a stake to push for changes in strategy, governance or capital allocation." },
        { term: "Guidance", def: "A company's public forecast of future results." },
        { term: "Investor update", def: "A regular report from a startup to its investors on progress, metrics and needs." }
      ],
      quiz: [
        { q: "What is 'pre-wiring' a board?", options: ["Installing AV equipment", "Sending financial statements only", "Asking directors to vote by email", "Discussing key decisions one-on-one with directors before the meeting"], answer: 3, explain: "It avoids surprises and surfaces concerns early." },
        { q: "How should a CEO share major bad news with the board?", options: ["At the next scheduled meeting only", "Through a press release first", "Early, directly and with a plan", "Only if asked"], answer: 2, explain: "Speed and honesty preserve trust." },
        { q: "What did activist Nelson Peltz push PepsiCo to do?", options: ["Split beverages and snacks", "Merge with Coca-Cola", "Go private", "Exit international markets"], answer: 0, explain: "Trian argued for separating the businesses; PepsiCo stayed together." },
        { q: "Which is a core crisis-leadership principle?", options: ["Stay silent until all facts are known", "Prioritise protecting the share price", "Show up visibly and put people first", "Blame suppliers quickly"], answer: 2, explain: "Visibility and people-first action build trust." }
      ],
      challenge: {
        title: "Write the investor update",
        prompt: `You're CEO of a seed-stage fintech. This month: revenue $85k (plan $100k); burn $260k; cash $2.1M; a key bank partner delayed integration by 2 months; you hired a strong Head of Risk; churn fell from 4% to 3%. Write the structure and key content of your monthly investor update, including runway and specific asks.`,
        hints: ["Lead with a TL;DR.", "Highlights and lowlights honestly.", "Runway = cash ÷ net burn. Specific asks get help."],
        model: `<p><b>Subject:</b> [Company] — Month update: revenue $85k, runway ~8 months, 2 asks</p><p><b>TL;DR:</b> Revenue $85k (15% below plan) because a bank partner delayed integration by two months; churn improved to 3%; runway ~8 months; we're cutting non-essential spend and starting seed-extension conversations.</p><p><b>Highlights:</b> hired Head of Risk (ex-large bank); churn down from 4% to 3%.</p><p><b>Lowlights:</b> bank partner delay pushes ~$40k of monthly revenue out by two months; revenue behind plan.</p><p><b>Metrics:</b> revenue, MoM growth, churn, CAC payback, gross margin.</p><p><b>Cash:</b> $2.1M cash; net burn = $260k − $85k = $175k → runway ≈ 12 months. If we count gross burn conservatively ($260k) runway ≈ 8 months — we plan on the conservative number until revenue stabilises. Action: trim ~$30k/month in tools and agencies.</p><p><b>Asks:</b> (1) intros to two named banks for a backup partnership; (2) a fintech CFO for a 30-minute review of our fundraising model.</p>`
      },
      takeaways: [
        "No surprises: pre-wire the board and share bad news early with a plan.",
        "Consistent metrics and honest guidance build investor trust.",
        "Strong long-term strategies need a clear thesis communicated relentlessly.",
        "In a crisis: be visible, put people first, tell the truth, act on values."
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "csuite-6",
      title: "Executive communication, storytelling and the path to the C-suite",
      level: "Advanced",
      minutes: 15,
      hook: "At the top, your words are your work: a leader's ideas only matter if people understand, believe and act on them.",
      eli5: `When a teacher tells a dull list of facts, you forget it. When they tell a story — a hero, a problem, a twist and a happy ending — you remember it for years. Great leaders turn strategy into stories people remember and repeat.`,
      blocks: [
        { type: "framework", name: "The executive message framework", by: "Synthesis of Minto's Pyramid Principle and classic storytelling", when: "All-hands talks, board presentations, strategy memos, town halls.", steps: [
          { label: "Know your audience", desc: "What do they care about, what do they already believe, what do you want them to do?" },
          { label: "One core message", desc: "If they remember one sentence, what is it? Write it first." },
          { label: "Story arc", desc: "Where we were → what changed (tension) → where we're going → why we'll win → what's needed from you." },
          { label: "Proof", desc: "A few strong data points plus one vivid customer or employee story." },
          { label: "Call to action", desc: "Specific behaviours or decisions you want next." },
          { label: "Repeat", desc: "Leaders often underestimate how many times a message must be repeated before it sticks." }
        ] },
        { type: "compare", title: "Weak vs strong executive communication", headers: ["", "Weak", "Strong"], rows: [
          ["Structure", "Chronological story of the work done", "Answer first, then reasons"],
          ["Slides", "Topic titles ('Q3 Revenue'), dense text", "Action titles ('Q3 revenue grew 18%, led by enterprise'), one idea per slide"],
          ["Numbers", "Raw data dumps", "A few numbers with comparison and meaning"],
          ["Tone", "Hedge everything", "Clear point of view, honest about uncertainty"],
          ["Length", "As long as it takes", "Short main body; detail in appendix"]
        ] },
        { type: "case", company: "Microsoft", year: "2014–2015", title: "Nadella's mission rewrite", situation: `Microsoft's earlier ambition of "a computer on every desk and in every home" was largely achieved in rich markets and no longer guided strategy.`, decision: `Nadella reframed the mission as "to empower every person and every organization on the planet to achieve more", and repeated it consistently alongside the growth-mindset culture message.`, outcome: `The simple, repeated message helped align a huge company behind cloud, cross-platform products and partnerships.`, lesson: `A short, memorable message, repeated relentlessly and matched by actions, can shift a company of 100,000+ people.` },
        { type: "timeline", title: "A typical path to the C-suite", items: [
          { label: "Early career (0–5 yrs)", desc: "Build a deep craft (e.g. finance, product, sales, engineering). Deliver visible results; learn to communicate clearly." },
          { label: "Manager (5–10 yrs)", desc: "Lead teams; learn hiring, feedback and prioritisation. Seek a P&L or a cross-functional project." },
          { label: "Senior leader (10–15 yrs)", desc: "Run a function, region or business unit. Gain exposure to the board, investors and strategy. Take a stretch role (turnaround, new market)." },
          { label: "C-suite (15+ yrs, varies widely)", desc: "Lead the enterprise or a function across it. Founders and startup executives can get there much faster — with steeper learning curves." }
        ] },
        { type: "checklist", title: "Leadership habits that accelerate the path", items: [
          "Own a number — a P&L, a KPI or a business outcome",
          "Take one 'stretch' assignment that scares you",
          "Get a mentor and a sponsor (someone who advocates for you when you're not in the room)",
          "Ask for candid feedback every quarter — and act on it",
          "Learn to read financial statements fluently, whatever your function",
          "Practise writing one-page memos and speaking without slides",
          "Build relationships across functions, not just upward"
        ] },
        { type: "callout", kind: "insight", title: "Self-leadership comes first", html: `<p>Research on leadership — from Daniel Goleman's work on emotional intelligence to studies of executive derailment — shows that senior leaders more often fail because of <b>interpersonal and self-management</b> issues (poor listening, inability to build a team, defensiveness) than lack of technical skill. Protect your energy, sleep and judgment; your decisions affect thousands.</p>` },
        { type: "flip", title: "Quick drills", cards: [
          { front: "Turn 'Customer churn analysis' into an action title", back: "'Churn doubled among small customers after the price change — we should restore the starter plan.'" },
          { front: "Mentor vs sponsor?", back: "A mentor advises you; a sponsor uses their influence to advocate for you and open doors." },
          { front: "What's the first thing to write for a big speech?", back: "The one sentence you want people to remember." },
          { front: "What derails executives most often?", back: "Interpersonal and self-management issues more than technical gaps." }
        ] }
      ],
      terms: [
        { term: "Core message", def: "The single sentence you most want your audience to remember." },
        { term: "Sponsor", def: "A senior person who actively advocates for your advancement." },
        { term: "Mentor", def: "An experienced person who offers advice and perspective." },
        { term: "Stretch assignment", def: "A role or project beyond your current experience that builds new capabilities." },
        { term: "Emotional intelligence", def: "The ability to recognise and manage your own emotions and understand others' (popularised by Daniel Goleman)." },
        { term: "Executive presence", def: "The perceived ability to inspire confidence — clarity, composure and credibility." }
      ],
      quiz: [
        { q: "What should you write first when preparing an important talk?", options: ["The one core message", "The agenda", "The thank-you slide", "Jokes"], answer: 0, explain: "Everything else should support the core message." },
        { q: "Which is a strong slide title?", options: ["Q2 Results", "Revenue", "Miscellaneous", "Q2 revenue grew 12%, but margins fell due to freight costs"], answer: 3, explain: "Action titles state the conclusion." },
        { q: "What's the difference between a mentor and a sponsor?", options: ["None", "A sponsor actively advocates for you; a mentor advises", "A mentor pays you", "A sponsor is always your boss"], answer: 1, explain: "Sponsors use their influence on your behalf." },
        { q: "Executives most often derail because of…", options: ["Lack of technical skill", "Too much feedback", "Interpersonal and self-management issues", "Too many stretch roles"], answer: 2, explain: "Soft skills matter more as you rise." }
      ],
      challenge: {
        title: "Write a town-hall message",
        prompt: `You're the new CEO of a 2,000-person manufacturing firm. Revenue is flat, a large competitor is automating aggressively, and morale is low after layoffs last year. You plan to invest heavily in automation and reskilling. Write the outline of a 10-minute town-hall talk using the executive message framework.`,
        hints: ["Acknowledge the past honestly.", "One core message.", "Address fear of automation directly; give specific commitments."],
        model: `<p><b>Core message:</b> "We will win by combining smart machines with skilled people — and we'll invest in every one of you to get there."</p><ol><li><b>Where we've been (1 min):</b> acknowledge last year's layoffs and their pain honestly; thank teams for their resilience.</li><li><b>What's changed (2 min):</b> the competitor is automating; customers expect faster delivery and lower cost; standing still means decline. Use one or two simple numbers (e.g. our lead time vs theirs).</li><li><b>Where we're going (2 min):</b> a 3-year plan — automate repetitive, unsafe tasks; move people into higher-skill roles (machine operation, maintenance, quality, data).</li><li><b>Why we'll win (2 min):</b> our product know-how, customer relationships and people; a short story of a team that already improved quality with a pilot.</li><li><b>Commitments (2 min):</b> a reskilling budget and programme open to all, clear communication before any role changes, a monthly update forum.</li><li><b>Call to action (1 min):</b> join the reskilling programme; share improvement ideas; next town hall in 90 days to report progress.</li></ol><p><b>Delivery:</b> no dense slides; take questions openly; repeat the core message at the start and end, then in every leadership meeting.</p>`
      },
      takeaways: [
        "Lead with one core message and repeat it until it sticks.",
        "Action titles and answer-first structure make you clear and credible.",
        "Own a number, take stretch roles and find sponsors to accelerate your path.",
        "Self-management and relationships matter more as you rise."
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "csuite-7",
      title: "How to be a great startup advisor",
      level: "Advanced",
      minutes: 17,
      hook: "Most startup advice is generic, late or wrong for the stage. Great advisors ask sharper questions than they give answers.",
      eli5: `A good coach doesn't play the match for the team. They watch closely, ask "why did you pass there?", point out one or two things to fix, and help the team get better. A startup advisor is a coach for founders — not the boss.`,
      blocks: [
        { type: "framework", name: "Stage-appropriate advice", by: "Synthesis of common VC and accelerator practice", when: "Before giving any advice — first diagnose the stage.", steps: [
          { label: "Idea / pre-product", desc: "Focus: problem validation, customer interviews, founder fit. Ignore: org charts, brand guidelines, complex financial models." },
          { label: "Pre-PMF (MVP, early users)", desc: "Focus: retention, iteration speed, talking to users, doing unscalable things. Watch: premature scaling." },
          { label: "Post-PMF / early growth", desc: "Focus: repeatable acquisition channels, unit economics, first key hires, fundraising." },
          { label: "Scaling", desc: "Focus: leadership team, operating cadence, org design, efficiency (burn multiple, Rule of 40), governance." },
          { label: "Mature / pre-exit", desc: "Focus: profitability, board and governance, M&A or IPO readiness, succession." }
        ] },
        { type: "checklist", title: "Diagnostic questions for any startup", items: [
          "What problem do you solve, for whom, and how do they solve it today?",
          "What evidence shows customers want this (retention, referrals, willingness to pay)?",
          "What does a cohort's retention curve look like — does it flatten?",
          "What are CAC, payback and gross margin — and how are they trending?",
          "How much cash and runway do you have? What's the next milestone it must buy?",
          "Who are the founders and how do they decide and resolve conflict?",
          "What's the one thing that, if fixed, would most change your trajectory?",
          "What are you afraid to tell your investors?"
        ] },
        { type: "interactive", widget: "runway", title: "Runway is the first diagnostic", note: "Enter the startup's cash and burn. Under 9–12 months of runway, almost all advice should centre on reaching the next milestone or raising money." },
        { type: "compare", title: "FAST agreement — advisor equity guide (approximate)", headers: ["Company stage", "Standard (monthly meeting)", "Strategic (more involvement)", "Expert (heavy involvement)"], rows: [
          ["Idea stage", "~0.25%", "~0.5%", "~1.0%"],
          ["Startup stage", "~0.2%", "~0.4%", "~0.8%"],
          ["Growth stage", "~0.15%", "~0.3%", "~0.6%"],
          ["Notes", "FAST = Founder/Advisor Standard Template, published by the Founder Institute", "Equity usually as restricted stock or options vesting monthly over about 2 years", "Check the current template and local tax and securities rules"]
        ] },
        { type: "formula", name: "Is the advisor grant worth it?", expr: "Grant value ≈ Equity % × Current valuation; compare to expected contribution", explain: "Founders should treat advisor equity as payment for specific, measurable help (intros, hiring, expertise). Advisors should be honest about the time they can give.", example: "Startup valued at $8M post-money offers a strategic advisor 0.4% vesting monthly over 24 months = $32,000 of paper value today, ~$1,333 per month. If the advisor commits two hours a month plus intros, that's fair. If the advisor helps close a key enterprise partnership, it's a bargain." },
        { type: "callout", kind: "warning", title: "Advisor red flags (on both sides)", html: `<p><b>Red flags in a startup:</b> founders who won't share data; co-founder conflict nobody addresses; retention that never flattens; burn rising without metrics improving; vanity metrics only; ignoring legal and compliance basics.</p><p><b>Red flags in an advisor:</b> asks for large equity upfront without vesting; gives generic advice not tied to the company's data; pushes their own vendors without disclosure; advises on everything instead of their real expertise; "collects" advisory roles they can't service.</p>` },
        { type: "case", company: "Y Combinator", year: "2005 onward", title: "Advice at scale", situation: `Y Combinator funds batches of early-stage startups and gives them intensive advice from partners.`, decision: `Its advice is famously simple and stage-specific: "make something people want", talk to users, launch early, focus on growth, and do things that don't scale. Weekly office hours focus on the startup's most important problem right now.`, outcome: `YC alumni include Airbnb, Stripe, DoorDash and Dropbox, and its approach shaped how much of the startup world gives advice.`, lesson: `Great advice is simple, stage-appropriate and focused on the single most important problem.` },
        { type: "scenario", prompt: "A pre-PMF founder with 6 months of runway asks you to help design their 3-year org chart and a brand book. How do you respond?", options: [
          { text: "Happily build a detailed org chart and brand book.", feedback: "That's stage-inappropriate. It burns scarce time on things that don't matter yet.", good: false },
          { text: "Redirect: ask about retention, customer interviews and what milestone the next 6 months must reach to raise money; offer to help with that instead.", feedback: "Correct. Advice should fit the stage and the biggest risk — here, PMF and runway.", good: true },
          { text: "Tell them their startup will fail.", feedback: "Unhelpful and demotivating — diagnose and guide instead.", good: false }
        ] }
      ],
      terms: [
        { term: "Startup advisor", def: "An experienced person who helps founders with expertise, introductions and judgment, usually for a small equity grant." },
        { term: "FAST agreement", def: "The Founder Institute's Founder/Advisor Standard Template, giving standard advisor equity ranges by stage and involvement." },
        { term: "Product-market fit (PMF)", def: "Strong evidence that a product satisfies a real market demand — retention and organic pull." },
        { term: "Vesting", def: "Earning equity over time, protecting the company if the advisor stops contributing." },
        { term: "Vanity metrics", def: "Numbers that look impressive but don't reflect real business health, like total downloads." },
        { term: "Office hours", def: "Short, focused advisory sessions on a founder's most pressing problem." }
      ],
      quiz: [
        { q: "For a pre-PMF startup, which advice is most appropriate?", options: ["Design a matrix organisation", "Prepare for IPO", "Hire a CHRO", "Focus on retention and customer interviews"], answer: 3, explain: "Pre-PMF, the only priority is proving people want the product." },
        { q: "Under the FAST framework, advisor equity typically…", options: ["Vests over time (about two years)", "Is granted fully upfront", "Is always more than 5%", "Is paid in cash"], answer: 0, explain: "Vesting aligns the grant with ongoing contribution." },
        { q: "A startup is valued at $10M and gives an advisor 0.5%. Paper value of the grant today?", options: ["$5,000", "$50,000", "$500,000", "$100,000"], answer: 1, explain: "0.5% × $10M = $50,000." },
        { q: "Which is a red flag in an advisor?", options: ["Vesting their equity", "Disclosing conflicts", "Asking for data before advising", "Asking for large upfront equity and giving generic advice"], answer: 3, explain: "Good advisors earn equity over time and tailor advice." },
        { q: "What's the first diagnostic for almost any startup advisory conversation?", options: ["Logo quality", "Office location", "Cash, burn and runway", "Number of social followers"], answer: 2, explain: "Runway sets the urgency and frames all other advice." }
      ],
      challenge: {
        title: "Your first advisory session",
        prompt: `A founder of a B2B AI tool asks you to be an advisor. Data: 14 months since launch, $40k MRR, 35 customers, monthly logo churn 6%, CAC payback 20 months, cash $1.1M, burn $120k/month, two co-founders who disagree on whether to go enterprise or stay SMB. They offer you 1% vesting over 2 years. Diagnose, give stage-appropriate advice and decide on the equity offer.`,
        hints: ["Compute runway and evaluate churn and CAC payback.", "What stage is this really?", "Is 1% in line with FAST for this involvement level?"],
        model: `<p><b>Diagnosis:</b> Runway = 1.1M ÷ 120k ≈ <b>9 months</b> (urgent). Monthly logo churn of 6% means roughly half of customers lost within a year — retention does not show PMF. CAC payback of 20 months is too long for SMB customers who churn this fast. Co-founder disagreement on segment is the core strategic issue. <b>Stage: pre-PMF</b>, despite revenue.</p><p><b>Advice (stage-appropriate):</b></p><ol><li><b>Resolve the segment question with data, not opinion:</b> analyse retention, expansion and sales cycle by customer size. If mid-market/enterprise customers churn far less and pay more, focus there.</li><li><b>Fix retention before spending on growth:</b> interview churned customers, improve onboarding, pick the use case with strongest stickiness.</li><li><b>Extend runway:</b> cut burn toward ~$90k/month to reach ~12 months; set the next milestone (e.g. churn under 3% and a few larger contracts) that makes the next raise possible.</li><li><b>Founder alignment:</b> agree a decision process and a 90-day experiment with clear criteria.</li></ol><p><b>Equity:</b> this is roughly "startup stage". Under FAST-style ranges, 1% fits an <b>expert</b>-level engagement (frequent, hands-on involvement). If you'll only meet monthly, suggest ~0.2–0.4%. Insist on monthly vesting over about two years and written expectations (hours, focus areas, intros).</p>`
      },
      takeaways: [
        "Diagnose the stage before giving advice.",
        "Runway and retention are the first two numbers to check.",
        "Advisor equity should be modest, vested and tied to real contribution (FAST is a useful benchmark).",
        "The best advisors ask sharp questions and focus on the single biggest problem."
      ]
    }
  ]
});
