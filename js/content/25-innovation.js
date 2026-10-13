/* MBA Studio — Track 25: Innovation & Corporate Entrepreneurship */
MBA.addTrack({
  id: "innovation",
  stage: 4,
  order: 25,
  title: "Innovation & Corporate Entrepreneurship",
  icon: "💡",
  color: "#db2777",
  tagline: "Build the next business before the current one fades",
  summary: `Most great companies are eventually overtaken — not because they stop working hard, but because they keep doing what used to work. This track shows you how to classify and manage innovation, understand disruption (and its critics), build new ventures inside an established company, design platforms, choose which source of lasting power a new venture can build, and use partnerships, corporate venture capital and acquisitions — including in the AI era.`,
  outcomes: [
    "Classify innovations by type and ambition and balance a portfolio across three horizons",
    "Diagnose low-end and new-market disruption, and know when the theory does not fit",
    "Design an ambidextrous organisation and choose between stage-gate and lean approaches",
    "Launch and govern platforms that solve the chicken-and-egg problem",
    "Map which of Helmer’s 7 Powers a new venture can build at each stage",
    "Choose between build, partner, invest and buy for innovation, including in AI"
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: "innovation-1",
      title: "Types of innovation and the three horizons",
      level: "Beginner",
      minutes: 14,
      hook: "Companies rarely die from a lack of ideas — they die from investing only in the ideas that look like today’s business.",
      eli5: `Imagine a farmer. This year’s crop pays the bills (horizon 1). Young trees planted a few years ago will give fruit soon (horizon 2). Seeds planted today might become a whole new orchard in ten years (horizon 3). A farmer who only harvests and never plants will be fine this year — and in trouble later. Innovation is planting seeds of different sizes at the same time.`,
      blocks: [
        {
          type: "text", title: "Innovation is not just invention",
          html: `<p>An <b>invention</b> is a new idea or technology. An <b>innovation</b> is a new idea that creates value for customers <i>and</i> the business — it is adopted and pays off. Many inventions never become innovations.</p><p>Innovation can happen in <b>what</b> you offer (product or service), <b>how</b> you make or deliver it (process), or <b>how you make money</b> (business model). Business-model innovations are often the hardest for competitors to copy, because they require changing the whole system, not just one part.</p>`
        },
        {
          type: "matrix", name: "The innovation ambition matrix", xLabel: "Where to play: existing markets → new markets", yLabel: "How to win: existing products → new products",
          cells: [
            { label: "Adjacent (new products, existing customers)", desc: "Extend into new offers for customers you already serve — e.g. a bank adding insurance." },
            { label: "Transformational", desc: "New offers for new markets or needs that do not yet exist. High risk, high potential. E.g. AWS selling computing to developers." },
            { label: "Core", desc: "Improve existing products for existing customers: better versions, cost cuts, line extensions. Low risk, predictable returns." },
            { label: "Adjacent (existing products, new customers)", desc: "Take what you already make to new segments or geographies — e.g. a B2B tool launching a small-business tier." }
          ]
        },
        {
          type: "framework", name: "The three horizons of growth", by: "Baghai, Coley & White, The Alchemy of Growth (1999)", when: "Checking whether today’s portfolio will still produce growth in 5–10 years",
          steps: [
            { label: "Horizon 1 — defend and extend the core", desc: "The businesses that generate most of today’s profit. Goal: efficiency, incremental improvement, cash. Measure: profit, margin, share." },
            { label: "Horizon 2 — build emerging businesses", desc: "Ventures with real customers and growing revenue that could become the next core. Goal: scale. Measure: revenue growth, unit economics, market share gains." },
            { label: "Horizon 3 — create options for the future", desc: "Research projects, pilots, small bets and investments. Goal: learning and option value. Measure: milestones, learning, option value — not profit." },
            { label: "Run all three at once", desc: "The trap is managing all three with Horizon 1 metrics. A pilot judged on margin will always lose to the core." },
            { label: "Move ideas across horizons", desc: "Have explicit rules for graduating an H3 bet to H2 (e.g. proven demand) and H2 to H1 (e.g. scale and profitability)." }
          ]
        },
        {
          type: "formula", name: "Portfolio allocation rule of thumb (70-20-10)",
          expr: "Innovation budget ≈ 70% core + 20% adjacent + 10% transformational",
          explain: `Bansi Nagji and Geoff Tuff (HBR, 2012) reported that companies that roughly followed this split tended to outperform, and that returns came in roughly the <b>inverse</b> ratio — transformational bets produced a large share of long-run returns despite the small budget. The right split varies: a tech company might put more into transformational bets, a utility less. Treat it as a starting point for debate, not a law.`,
          example: `A company with a $50m innovation budget would allocate $35m to core (70%), $10m to adjacent (20%) and $5m to transformational (10%). If an audit shows 95% in the core, the company is probably under-investing in its future.`
        },
        {
          type: "case", company: "Kodak", year: "1975–2012", title: "Inventing the future, then protecting the past",
          situation: `In 1975 Kodak engineer Steven Sasson built one of the first digital cameras. Kodak dominated film, where each photo taken generated high-margin film and processing sales.`,
          decision: `Kodak invested in digital technology and patents and sold digital cameras, but its business model, culture and profit expectations remained built around film. Digital cameras earned far lower margins, and the profit from film made the new business look unattractive by comparison.`,
          outcome: `Consumer photography moved to digital, and then to smartphones and online sharing — where Kodak had no strong position. Kodak filed for Chapter 11 bankruptcy protection in January 2012. Its rival Fujifilm, facing the same shift, diversified using its chemical and film know-how into areas such as healthcare and cosmetics.`,
          lesson: `Kodak did not lack invention — it lacked a way to build a Horizon 2 and 3 business that would replace Horizon 1. The value moved to a different business model (sharing, not printing), not just a different technology.`
        },
        {
          type: "case", company: "3M", year: "1948 onward", title: "15% time and the Post-it Note",
          situation: `3M encouraged technical staff to spend part of their time (commonly cited as 15%) on projects of their own choosing — a policy associated with the company’s leadership from the late 1940s.`,
          decision: `In 1968 3M scientist Spencer Silver created an unusually weak, reusable adhesive with no obvious use. Years later his colleague Art Fry, frustrated that bookmarks fell out of his church hymn book, saw that the adhesive could make a repositionable note. The team used their discretionary time to develop it.`,
          outcome: `After an unsuccessful early test launch, Post-it Notes were launched nationally in the US in 1980 and became one of the best-known office products in the world.`,
          lesson: `Slack time, internal knowledge sharing and patience can turn a “failed” invention into a hit. Many great innovations are combinations of an existing capability with a newly noticed need.`
        },
        {
          type: "scenario",
          prompt: "You run innovation at a mid-sized insurer. 96% of the innovation budget goes to improving existing products, and every project must show positive ROI within 12 months. The CEO asks why no new businesses ever emerge. What do you recommend?",
          options: [
            { text: "Keep the current approach; it is low-risk.", feedback: "It protects this year’s profit but leaves no Horizon 2 or 3 pipeline. Growth will stall when the core matures.", good: false },
            { text: "Ring-fence a share of the budget for adjacent and transformational bets, and judge those on learning milestones rather than 12-month ROI.", feedback: "Right. Different horizons need different budgets and metrics, or the core will win every comparison.", good: true },
            { text: "Move the entire budget into transformational bets.", feedback: "Abandoning the core destroys the cash engine that funds the future. The aim is balance, not a lurch.", good: false }
          ]
        },
        {
          type: "checklist", title: "Innovation portfolio health check",
          items: [
            "We can list our current projects by core, adjacent and transformational",
            "Each horizon has its own budget and success metrics",
            "We have explicit criteria for moving bets between horizons",
            "At least one project is a business-model innovation, not just a product tweak",
            "Senior leaders review H2 and H3 bets regularly, not only when they fail",
            "We kill weak projects quickly and celebrate what we learned"
          ]
        }
      ],
      terms: [
        { term: "Innovation", def: "A new product, process or business model that is adopted and creates value — not just a new idea." },
        { term: "Incremental innovation", def: "Small improvements to existing products or processes for existing customers." },
        { term: "Adjacent innovation", def: "Extending existing capabilities into new products or new customer segments close to the core." },
        { term: "Transformational innovation", def: "Creating new offers for new markets or needs; high risk and high potential." },
        { term: "Business-model innovation", def: "Changing how a company creates, delivers or captures value, e.g. subscription instead of one-off sale." },
        { term: "Three horizons", def: "A model for managing today’s core (H1), emerging businesses (H2) and future options (H3) at the same time." },
        { term: "Process innovation", def: "A new or better way of producing or delivering an existing product." }
      ],
      quiz: [
        { q: "What distinguishes an innovation from an invention?", options: ["Innovations are always patented", "An innovation is adopted and creates value; an invention may not be", "Inventions are always cheaper", "There is no difference"], answer: 1, explain: "An invention is a new idea; it becomes an innovation when it is adopted and creates value." },
        { q: "A company has a $20m innovation budget and uses a 70-20-10 split. How much goes to transformational bets?", options: ["$14m", "$4m", "$2m", "$10m"], answer: 2, explain: "10% of $20m = $2m. Core gets $14m and adjacent $4m." },
        { q: "Why do Horizon 3 projects often die in large companies?", options: ["They are judged by Horizon 1 metrics such as short-term profit", "They are too cheap", "Regulators forbid them", "Customers dislike them"], answer: 0, explain: "Early bets rarely show profit; judged against the core they always lose." },
        { q: "Kodak’s main problem with digital photography was that…", options: ["It never invented any digital technology", "Digital cameras were illegal", "Fujifilm owned all the patents", "Its business model and profits were built around film, making lower-margin digital look unattractive"], answer: 3, explain: "Kodak built an early digital camera but its film-based model and profit expectations held back the shift." },
        { q: "A B2B software company launches a cheaper version of its existing product for small businesses. On the ambition matrix this is…", options: ["Core", "Transformational", "Adjacent (existing product, new customers)", "Not innovation"], answer: 2, explain: "Same essential product, new customer segment — adjacent innovation." }
      ],
      challenge: {
        title: "Rebalance the portfolio",
        prompt: `You are head of strategy at an (illustrative) packaged-food company with $2bn revenue. Its $60m innovation budget is split: new flavours and packaging for existing brands $54m; a plant-based protein line sold to existing retailers $5m; a direct-to-consumer personalised nutrition subscription pilot $1m. Revenue growth has been 1–2% a year for five years.<br><br>Classify each project, calculate the current split, propose a new split with dollar amounts, and say what metrics each horizon should use.`,
        hints: ["Use the ambition matrix to classify each project.", "Compare the current split with 70-20-10 — but justify any deviation.", "Different horizons need different success metrics."],
        model: `<p><b>Classification and current split</b></p><table><thead><tr><th>Project</th><th>Type</th><th>Budget</th><th>Share</th></tr></thead><tbody><tr><td>New flavours/packaging</td><td>Core (H1)</td><td>$54m</td><td>90%</td></tr><tr><td>Plant-based protein line</td><td>Adjacent (H2)</td><td>$5m</td><td>8.3%</td></tr><tr><td>Personalised nutrition subscription</td><td>Transformational, business-model innovation (H3)</td><td>$1m</td><td>1.7%</td></tr></tbody></table><p><b>Diagnosis:</b> 90% in the core with 1–2% growth means the portfolio is mainly defending the past.</p><p><b>Proposed split (70-20-10 as a starting point):</b> core $42m (70%), adjacent $12m (20%), transformational $6m (10%). Total $60m. Funding the change: cut low-performing flavour extensions (often a long tail sells little).</p><p><b>Metrics by horizon</b></p><ul><li><b>H1:</b> margin, share, revenue per new SKU, payback within 12–18 months.</li><li><b>H2 (plant-based):</b> repeat purchase rate, retailer distribution, revenue growth; profitability target in 3 years.</li><li><b>H3 (subscription):</b> learning milestones — customer acquisition cost, 3-month retention, willingness to pay; stage further funding on hitting them.</li></ul><p><b>Recommendation:</b> move to roughly 70-20-10 over two budget cycles, give H2 and H3 a separate review forum, and set clear graduation criteria (e.g. H3 graduates to H2 when 3-month retention exceeds an agreed threshold at an acceptable acquisition cost).</p>`
      },
      takeaways: [
        "Innovation happens in products, processes and business models — the last is hardest to copy.",
        "Manage core, adjacent and transformational bets as a portfolio across three horizons.",
        "Each horizon needs its own budget and metrics.",
        "Invention is not enough: Kodak invented digital but kept the film model."
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: "innovation-2",
      title: "Disruptive innovation in depth: the innovator’s dilemma and its critics",
      level: "Intermediate",
      minutes: 17,
      hook: "Great companies can fail precisely because they do everything their best customers ask.",
      eli5: `Imagine the best restaurant in town keeps making its dishes fancier for its richest diners. A food truck starts selling simple, cheap meals to students who could never afford the restaurant. The restaurant ignores it — those are not its customers. But the truck keeps getting better, and one day the regular diners start eating there too. That is disruption.`,
      blocks: [
        {
          type: "text", title: "Beyond the basics",
          html: `<p>In the Strategy track you met disruption as an idea: entrants start at the low end or with non-consumers and move up-market. Here we go deeper: the two distinct types, <b>why</b> good managers rationally fail to respond (the innovator’s dilemma), how to spot it early with performance trajectories, and the serious criticisms of the theory.</p><p>Clayton Christensen developed the theory in <i>The Innovator’s Dilemma</i> (1997), drawing heavily on a study of the computer disk-drive industry, where established leaders repeatedly lost to entrants making smaller drives that were initially worse on the measures their customers cared about.</p>`
        },
        {
          type: "compare", title: "Low-end vs new-market disruption", headers: ["", "Low-end disruption", "New-market disruption"],
          rows: [
            ["Who it serves first", "Over-served customers at the bottom of an existing market", "Non-consumers who could not afford or access the product at all"],
            ["Competes against", "The incumbent’s least profitable customers", "Non-consumption (doing nothing, or a workaround)"],
            ["Business model", "Lower cost structure that makes money at low prices", "Simpler, cheaper, more accessible product, often in a new context"],
            ["Classic examples", "Steel minimills; discount retailers", "Personal computers vs mainframes; early transistor radios for teenagers"],
            ["Incumbent reaction", "Retreats up-market to higher margins — and feels relieved", "Barely notices; the market looks tiny"]
          ]
        },
        {
          type: "framework", name: "The innovator’s dilemma: why good managers fail to respond", by: "Clayton Christensen, The Innovator’s Dilemma (1997); resources-processes-values from later work", when: "Diagnosing why an incumbent is not responding to an entrant",
          steps: [
            { label: "Resources follow the best customers", desc: "Budgets go to projects that serve the most profitable customers, who want better products — not cheaper, simpler ones." },
            { label: "Small markets cannot solve big companies’ growth needs", desc: "A $50m opportunity is exciting for a startup and irrelevant to a $20bn company’s growth target." },
            { label: "Processes are built for the core", desc: "Planning, sales and approval processes are tuned to the existing business and reject ideas that look different." },
            { label: "Values (priorities) favour higher margins", desc: "Managers are rewarded for gross margin; a low-margin product is rejected even if it is the future." },
            { label: "Technology overshoots", desc: "Incumbents improve faster than most customers need, leaving room for a ‘good enough’ entrant." },
            { label: "Christensen’s remedy", desc: "Create a separate unit with its own cost structure, values and processes, sized to get excited about small opportunities." }
          ]
        },
        {
          type: "formula", name: "When will the disruptor be ‘good enough’?",
          expr: "Entrant performance × (1 + g_entrant)^t = Mainstream need × (1 + g_need)^t",
          explain: `Disruption depends on rates: the entrant’s technology improves faster than mainstream customers’ needs grow. Solve for t (years) to estimate when the entrant crosses into the mainstream: t = ln(Need ÷ Entrant) ÷ ln[(1 + g_entrant) ÷ (1 + g_need)]. This is a thinking tool, not a precise forecast.`,
          example: `Entrant performance is 50 units; mainstream customers need 100, and that need grows 5% a year. The entrant improves 25% a year. t = ln(2) ÷ ln(1.25 ÷ 1.05) = 0.693 ÷ 0.174 ≈ <b>4 years</b>. Check: 50 × 1.25⁴ ≈ 122 and 100 × 1.05⁴ ≈ 122. If the incumbent waits until the entrant is visibly “good enough”, it has already lost its head start.`
        },
        {
          type: "case", company: "Netflix and Blockbuster", year: "2000–2023", title: "Disrupting a rival — and then disrupting yourself",
          situation: `Netflix started in 1997 renting DVDs by mail, a niche product that appealed to people who valued selection and hated late fees over the instant gratification of a store. In 2000 Blockbuster reportedly declined an offer to buy Netflix for about $50m.`,
          decision: `Netflix launched streaming in 2007 while its DVD business was still growing. In 2011 it tried to split DVD and streaming into separate services (DVDs under the name “Qwikster”) with a price increase; customers revolted, Netflix lost subscribers and quickly abandoned the Qwikster plan. It kept prioritising streaming and later original content.`,
          outcome: `Blockbuster, whose store model and late-fee revenue made it hard to copy Netflix, filed for bankruptcy in 2010. Netflix became a global streaming leader and shut its DVD-by-mail service in September 2023.`,
          lesson: `Netflix’s mail model was closer to new-market disruption for Blockbuster’s convenience-focused customers; streaming was a self-disruption. Cannibalising your own business is painful — and badly communicated, as Qwikster showed — but someone else will do it if you do not.`
        },
        {
          type: "callout", kind: "myth", title: "When the theory has been criticised",
          html: `<ul><li><b>Historian Jill Lepore</b> (<i>The New Yorker</i>, 2014) argued that some of Christensen’s original cases were selectively chosen, and that several “disrupted” incumbents in disk drives and other industries actually survived and did well.</li><li><b>Andrew King and Baljir Baatartogtokh</b> (<i>MIT Sloan Management Review</i>, 2015) asked experts to assess dozens of cases Christensen had cited and found that only a minority fitted all the theory’s key conditions.</li><li><b>Prediction failures:</b> in 2007 Christensen predicted the iPhone would struggle, seeing it as a sustaining innovation against established phone makers. It instead became a new-market disruption of the laptop and the PC as people’s main internet device — a reminder that the theory is easier to apply in hindsight.</li><li><b>Overuse:</b> as Christensen himself argued (HBR, 2015), the word “disruption” is applied to almost any new entrant.</li></ul><p>Christensen and his colleagues responded that the theory explains a specific pattern and keeps being refined. <span class="hl">Use it as a lens to ask the right questions, not as a crystal ball.</span></p>`
        },
        {
          type: "scenario",
          prompt: "You lead a premium business-laptop maker. A startup sells cheap, cloud-based devices to schools and small shops that previously used old second-hand machines. Your margins are 35%; theirs are 10%. What is the right first move?",
          options: [
            { text: "Ignore it; schools are not our market.", feedback: "Classic dilemma thinking. If the entrant improves faster than your mainstream customers’ needs grow, it will move up.", good: false },
            { text: "Cut prices on your premium line to match.", feedback: "You would destroy your margins without gaining the entrant’s low cost structure.", good: false },
            { text: "Set up a separate, small unit with its own cost structure to compete in the low end, and track the entrant’s improvement rate against your customers’ needs.", feedback: "Right. Christensen’s remedy: a separate unit with different economics, plus close monitoring of performance trajectories.", good: true }
          ]
        }
      ],
      terms: [
        { term: "Disruptive innovation", def: "A simpler, cheaper offering that starts at the low end or with non-consumers and improves until it takes the mainstream." },
        { term: "Sustaining innovation", def: "Improvements that make existing products better for existing, demanding customers." },
        { term: "Low-end disruption", def: "Disruption that begins by serving over-served customers at the bottom of an existing market with a lower-cost model." },
        { term: "New-market disruption", def: "Disruption that begins by serving non-consumers who previously could not use the product at all." },
        { term: "Innovator’s dilemma", def: "Doing the right things for today’s best customers can cause a leading firm to miss the next wave." },
        { term: "Performance overshoot", def: "When products improve beyond what most customers need, creating room for a simpler entrant." },
        { term: "Resources, processes and values (RPV)", def: "Christensen’s framework for what an organisation can and cannot do: what it has, how it works, and what it prioritises." }
      ],
      quiz: [
        { q: "Which is new-market disruption?", options: ["A cheaper airline serving existing budget travellers", "A device that lets people who never could afford a product use it for the first time", "A faster version of a premium sports car", "A merger of two incumbents"], answer: 1, explain: "New-market disruption competes against non-consumption." },
        { q: "Why do incumbents often retreat up-market when low-end entrants appear?", options: ["Low-end customers are their least profitable, so leaving them raises margins", "They are forced by regulators", "They cannot see the entrants", "Up-market customers are fewer"], answer: 0, explain: "Retreating feels rational because margins improve — until the entrant follows them up." },
        { q: "An entrant is at 40 units, improving 30% a year. Mainstream needs are 80 units, growing 4%. Roughly how many years until the entrant meets mainstream needs?", options: ["1 year", "10 years", "6 years", "About 3 years"], answer: 3, explain: "t = ln(2) ÷ ln(1.30 ÷ 1.04) = 0.693 ÷ ln(1.25) = 0.693 ÷ 0.223 ≈ 3.1 years." },
        { q: "What was the main criticism made by King and Baatartogtokh (2015)?", options: ["Disruption never happens", "Only a minority of cited cases fitted all the theory’s conditions", "The theory was invented by Netflix", "Disruption applies only to steel"], answer: 1, explain: "Experts found that many examples did not match all the key conditions of the theory." },
        { q: "What remedy did Christensen recommend for incumbents facing disruption?", options: ["Acquire every startup", "Lower all prices", "A separate unit with its own cost structure and values", "Lobby regulators"], answer: 2, explain: "A unit small and independent enough to get excited about small, low-margin opportunities." }
      ],
      challenge: {
        title: "Is this disruption?",
        prompt: `You advise the board of an (illustrative) established law firm. A startup offers AI-generated standard contracts (leases, NDAs, employment agreements) to small businesses for $49 each, reviewed by a lawyer only on request. The firm charges about $1,500 for similar work. The firm’s profitable work is complex M&A and litigation; standard contracts are less than 5% of revenue. The startup’s quality has improved noticeably each quarter.<br><br>(a) Is this low-end disruption, new-market disruption, or neither? (b) What would make it a real threat? (c) What should the board do?`,
        hints: ["Who are the startup’s customers today — are they the firm’s customers?", "Think about performance trajectories: what would the startup need to do next?", "Remember the critics — avoid overclaiming."],
        model: `<p><b>(a) Diagnosis:</b> mainly <b>new-market disruption</b>, with some low-end elements. Most small businesses buying $49 contracts would not have hired a $1,500 firm at all — they used templates or nothing (non-consumption). For the few who did, it is low-end: they were over-served for a standard NDA.</p><p><b>(b) When it becomes a threat:</b> if the AI improves fast enough to handle more complex, mid-market contracts (e.g. commercial agreements, simple acquisitions), it moves up into the firm’s profitable work. Watch indicators: the startup winning mid-sized clients, partnerships with accountants or banks, and quality in independent comparisons. Price ratio: $1,500 ÷ $49 ≈ 31× — a gap large enough that “good enough” quality will pull customers.</p><p><b>(c) Recommendation</b></p><ul><li>Do <b>not</b> cut prices on complex work — it would only reduce margins.</li><li>Set up a small, separate unit (or partnership) offering AI-assisted, fixed-price standard documents, with its own pricing and targets — using the firm’s brand and lawyer review as a premium.</li><li>Use AI internally on routine parts of complex work to lower cost before clients demand it.</li><li>Review the startup’s progress every quarter against a defined trigger (e.g. winning clients above a set size).</li></ul><p><b>Caveat:</b> disruption theory is a lens, not a forecast. Some complex work may remain relationship- and judgement-based for a long time; the goal is to buy options cheaply, not to panic.</p>`
      },
      takeaways: [
        "Low-end disruption attacks over-served customers; new-market disruption serves non-consumers.",
        "Incumbents fail to respond because resources, processes and values favour the core.",
        "Compare rates: entrant improvement versus growth in mainstream needs.",
        "Respond with a separate unit and different economics, not a price cut.",
        "The theory has real critics — use it to ask questions, not to predict with certainty."
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: "innovation-3",
      title: "Corporate entrepreneurship: ambidexterity, portfolios and venture building",
      level: "Intermediate",
      minutes: 17,
      hook: "A large company trying to innovate like a startup usually fails — unless it deliberately builds a place where different rules apply.",
      eli5: `A school sports team practises the same drills every day to win this season’s matches. But the coach also lets a few players try a brand-new style of play in a separate practice, with different rules, so the team has something new for next year. If the new style were judged by this week’s match results, it would be dropped immediately. Ambidexterity means doing both — winning today and inventing tomorrow.`,
      blocks: [
        {
          type: "framework", name: "Organisational ambidexterity", by: "James March (1991) on exploration vs exploitation; Charles O’Reilly & Michael Tushman, HBR (2004)", when: "Designing how a company runs its core and its new ventures at the same time",
          steps: [
            { label: "Exploit", desc: "Refine and scale what works: efficiency, quality, reliability, cost control." },
            { label: "Explore", desc: "Search for new ideas, markets and models: experimentation, speed, tolerance for failure." },
            { label: "Structural separation", desc: "Put exploratory units in separate teams with their own processes, metrics and culture — protected from the core’s rules." },
            { label: "Targeted integration", desc: "Connect them at the top: a senior leadership team that shares a vision and allocates resources, and lets the new unit borrow the core’s assets (brand, customers, distribution)." },
            { label: "Contextual ambidexterity", desc: "An alternative: individuals split their time between exploiting and exploring within one unit (e.g. 3M’s discretionary time)." },
            { label: "Leadership is the glue", desc: "Senior leaders must hold the tension, fund both sides and stop the core from starving or smothering the new unit." }
          ]
        },
        {
          type: "compare", title: "Stage-gate vs lean venture building", headers: ["", "Stage-gate", "Lean / venture building"],
          rows: [
            ["Origin", "Robert Cooper, 1980s; widespread in manufacturing and pharma", "Eric Ries, The Lean Startup (2011); Steve Blank’s customer development"],
            ["Logic", "Plan thoroughly, then execute; review at gates", "Test riskiest assumptions with cheap experiments; iterate"],
            ["Gates/decisions", "Go/kill decisions on business-case documents", "Fund in tranches based on evidence: customer interviews, MVPs, metrics"],
            ["Best for", "Known markets, high capital costs, regulated products (drugs, cars)", "Uncertain markets and new business models"],
            ["Risk", "Confident forecasts for unknowable markets; slow", "Can become endless experimentation without discipline"],
            ["Today", "Many firms use hybrids: lean experiments inside early gates, stage-gate rigour later", "Corporate venture studios combine both"]
          ]
        },
        {
          type: "formula", name: "The value of staging an investment (real options thinking)",
          expr: "EV(staged) = − cost of test + P(good signal) × [P(success | good signal) × payoff − cost to build]",
          explain: `Instead of betting the full amount up front, run a cheap test first and only build if the signal is good. The value comes from being able to <b>stop</b>. This is why lean experiments and stage-gates both release money in tranches.`,
          example: `A venture costs $5m to build and has a 10% chance of a $100m payoff. Bet now: EV = 0.10 × $100m − $5m = <b>$5m</b>. Alternatively, run a $0.5m test. 25% of the time the result is good, and then success odds rise to 40%; otherwise you stop (and in this example a bad signal means the venture would have failed anyway, since 0.25 × 0.40 = 0.10). EV(staged) = −$0.5m + 0.25 × (0.40 × $100m − $5m) = −$0.5m + 0.25 × $35m = <b>$8.25m</b>. The test is worth $3.25m.`
        },
        {
          type: "case", company: "Amazon Web Services", year: "2002–2006 onward", title: "A new business built from internal capabilities",
          situation: `Amazon had built large-scale infrastructure to run its own retail website and had pushed its teams to expose functions through well-defined service interfaces. Leaders saw that other developers faced the same problem of building and running servers.`,
          decision: `Amazon created a separate team to offer computing as on-demand services to outside developers, launching Simple Storage Service (S3) in March 2006 and Elastic Compute Cloud (EC2) later that year, with pay-as-you-go pricing. Many observers at the time saw this as a distraction for an online retailer.`,
          outcome: `AWS became the leading cloud provider and, for many years, generated a large share of Amazon’s operating profit. It is one of the clearest examples of a Horizon 3 bet becoming a core business.`,
          lesson: `Corporate entrepreneurship works best when it turns an existing capability into a new business with its own team, pricing and customers — and when leaders are willing to look odd for years.`
        },
        {
          type: "case", company: "Haier", year: "2005 onward", title: "Rendanheyi: breaking a giant into microenterprises",
          situation: `Haier, the Chinese appliance maker led by Zhang Ruimin, had grown into a global company and worried that hierarchy was slowing it down and distancing employees from customers.`,
          decision: `From 2005 Haier developed the <b>rendanheyi</b> model (roughly, “unifying people and orders/value to users”). It broke the company into thousands of small, self-managing <b>microenterprises</b> that act like startups: they have their own customers, profit and loss, and often share in the value they create. Many middle-management layers were removed, and units contract with each other and with outside partners on an internal platform.`,
          outcome: `Haier continued to grow internationally, including acquiring GE Appliances in 2016, which it ran with substantial autonomy. The model has been widely studied by management writers, though it is demanding to copy because it requires changes to pay, power and accountability across the whole company.`,
          lesson: `Ambidexterity does not have to be one separate lab. A company can redesign itself so that entrepreneurship is the normal way of working — at the cost of a radical change in structure and incentives.`
        },
        {
          type: "interactive", widget: "npv", title: "Value a staged venture",
          note: "Model a venture with a small year-0 test, a larger year-1 build and payoffs from year 3. Then compare it with putting all the money in at year 0. Notice how delaying large spending until you know more improves NPV."
        },
        {
          type: "checklist", title: "Launching an internal venture",
          items: [
            "A clear sponsor on the senior team who protects the venture",
            "Separate metrics: learning milestones, not this year’s margin",
            "Funding released in tranches tied to evidence",
            "Permission to use core assets (brand, customers, data) — and a process to get them",
            "A dedicated, small team with startup-like decision rights",
            "Pre-agreed kill criteria to avoid zombie projects",
            "Rewards that recognise intelligent failure, not just successes"
          ]
        },
        {
          type: "scenario",
          prompt: "Your corporate innovation lab has 40 projects, none killed in three years and none scaled. The CFO wants to close it. What do you propose?",
          options: [
            { text: "Close it — innovation labs never work.", feedback: "Throws away the capability without fixing the cause: no portfolio discipline.", good: false },
            { text: "Keep all 40 and ask for more budget.", feedback: "Zombie projects consume talent and money. Without kills there is no portfolio.", good: false },
            { text: "Run a portfolio review: kill most projects against clear criteria, concentrate funding on the few with evidence, and add tranche-based funding with a senior sponsor for each.", feedback: "Right. Venture building needs both freedom and discipline: many small bets, quick kills, and concentration on winners.", good: true }
          ]
        }
      ],
      terms: [
        { term: "Ambidexterity", def: "An organisation’s ability to exploit its current business and explore new ones at the same time." },
        { term: "Exploration vs exploitation", def: "Searching for new possibilities versus refining existing ones (James March)." },
        { term: "Stage-gate", def: "A development process with stages separated by go/kill decision gates." },
        { term: "Venture building", def: "Creating new businesses inside or alongside a company using startup methods, often via a studio." },
        { term: "Real option", def: "The right, but not the obligation, to make a further investment later — valuable under uncertainty." },
        { term: "Microenterprise", def: "In Haier’s model, a small self-managing unit with its own customers and profit and loss." },
        { term: "Kill criteria", def: "Pre-agreed conditions under which a project will be stopped." }
      ],
      quiz: [
        { q: "In O’Reilly and Tushman’s model, how are exploratory units typically organised?", options: ["Fully merged into the core business", "Outsourced to consultants", "Structurally separate, but integrated at the senior leadership level", "Run by the finance department"], answer: 2, explain: "Separate structures, processes and cultures, linked by a senior team that shares vision and resources." },
        { q: "When is stage-gate most appropriate?", options: ["Known markets with high capital costs and regulation", "Brand-new business models with unknown customers", "Only in startups", "Never"], answer: 0, explain: "Stage-gate works well when the market is understood and mistakes are expensive to make late." },
        { q: "A venture costs $10m and has a 20% chance of a $60m payoff. What is the expected value of building it now?", options: ["$12m", "$50m", "$6m", "$2m"], answer: 3, explain: "0.20 × $60m − $10m = $12m − $10m = $2m." },
        { q: "What made AWS a strong example of corporate entrepreneurship?", options: ["It was acquired from a startup", "It turned an internal capability into a new business with its own team and pricing", "It was funded by the government", "It was a cost-cutting project"], answer: 1, explain: "Amazon productised infrastructure it had built for itself and sold it to outside developers." },
        { q: "Haier’s rendanheyi model is best described as…", options: ["A single central R&D lab", "A franchise model", "A stage-gate process", "Many self-managing microenterprises with their own customers and P&L"], answer: 3, explain: "Haier broke itself into small, entrepreneurial units linked by an internal platform." }
      ],
      challenge: {
        title: "Design the venture unit",
        prompt: `You are chief strategy officer of an (illustrative) industrial equipment maker with $5bn revenue. Sensors on your machines collect data that could power a predictive-maintenance software subscription. The core business sells machines with 25% gross margin; software could reach 70%+ but sales teams are paid on machine revenue and resist anything that delays deals. You have $30m over three years.<br><br>Design the venture: structure (ambidexterity), process (stage-gate, lean or hybrid), funding tranches with milestones, and how you will handle the sales-team conflict. Compute what share of the budget is at risk before the first evidence.`,
        hints: ["Separate the team, but decide which core assets it must use.", "Release money in tranches; most should come only after evidence.", "Incentives drive the sales conflict — change them."],
        model: `<p><b>Structure:</b> a separate software venture unit reporting to the CEO (not to the machines division), with its own GM, product, engineering and a small sales team. Integration at the top: a monthly review with CEO, CFO and division heads; a formal right to use customer data and the installed base.</p><p><b>Process:</b> hybrid — lean experiments for discovery (unknown willingness to pay), stage-gate rigour for later stages (safety, integration with machines).</p><p><b>Funding tranches (total $30m)</b></p><ul><li>Tranche 1: <b>$3m</b>, 6 months — 20 customer interviews, 5 paid pilots; milestone: at least 3 pilots convert to paid contracts and show measurable reduction in downtime.</li><li>Tranche 2: <b>$9m</b>, 12 months — product build, 50 paying sites; milestone: net revenue retention above 100% and gross margin above 60%.</li><li>Tranche 3: <b>$18m</b>, 18 months — scale; milestone: clear path to $50m annual recurring revenue.</li></ul><p>Budget at risk before first evidence: $3m ÷ $30m = <b>10%</b>. If tranche 1 fails, 90% of the money is saved.</p><p><b>Sales conflict:</b> pay machine sales reps a commission on software annual contract value sold with machines (e.g. counting it in quota), give the venture its own specialists for software-only deals, and set a company-level target for software attach rate.</p><p><b>Kill criteria:</b> fewer than 3 paying pilots after 6 months, or gross margin below 50% after tranche 2.</p><p><b>Why:</b> separation protects the venture from the core’s 25%-margin, machine-first logic; integration gives it the installed base, which is its main advantage over software-only rivals.</p>`
      },
      takeaways: [
        "Ambidexterity: separate the new venture, integrate at the top.",
        "Use stage-gate for known, expensive developments; lean for uncertain ones; hybrids for most.",
        "Staged funding creates option value — the ability to stop is worth money.",
        "Kill projects early against clear criteria; zombies starve winners.",
        "AWS and Haier show two paths: spin a capability into a business, or redesign the whole firm."
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: "innovation-4",
      title: "Platforms and ecosystems: two-sided markets, chicken-and-egg and governance",
      level: "Intermediate",
      minutes: 16,
      hook: "The most valuable companies of the last two decades mostly do not make the thing you buy — they connect you to the people who do.",
      eli5: `A school fair is a platform. The school does not bake the cakes or run the games — families do. The school provides the field, the rules and the crowd. More stalls attract more visitors, and more visitors attract more stalls. But if the first stalls arrive and nobody comes, they will not return next year. Getting the first stalls and the first visitors at the same time is the hard part.`,
      blocks: [
        {
          type: "text", title: "Building on what you know",
          html: `<p>Earlier tracks introduced platforms (Technology), network effects (Growth, Economics) and platform strategy (Strategy). Here we focus on the innovator’s problem: <b>how to launch a platform from zero, price it, and govern it</b> so the ecosystem keeps creating value.</p><p>Economists Jean-Charles Rochet and Jean Tirole formalised <b>two-sided markets</b> in the early 2000s: markets where a platform serves two groups whose demand depends on each other, so the price charged to one side affects the other side’s demand.</p>`
        },
        {
          type: "framework", name: "Solving the chicken-and-egg problem", by: "Synthesis of platform research (e.g. Parker, Van Alstyne & Choudary, Platform Revolution, 2016)", when: "Launching any marketplace or platform",
          steps: [
            { label: "Pick the hard side", desc: "Identify which side is scarcer or harder to attract (often supply — drivers, hosts, developers) and focus there first." },
            { label: "Single-player mode", desc: "Give one side a tool that is valuable even with no other users (e.g. reservation software for restaurants, before any diners book through it)." },
            { label: "Subsidise one side", desc: "Make one side free or even pay it (sign-up bonuses, guaranteed earnings), and charge the side that values the network more." },
            { label: "Seed supply yourself", desc: "Create or buy the first content or supply (first-party products, staff-created listings)." },
            { label: "Piggyback an existing network", desc: "Tap users already gathered elsewhere — e.g. Airbnb’s early cross-posting to Craigslist." },
            { label: "Start narrow", desc: "Win one city, campus or niche where density is achievable, then expand (liquidity beats size)." }
          ]
        },
        {
          type: "formula", name: "Platform revenue and liquidity",
          expr: "Platform revenue = Gross merchandise value (GMV) × take rate;  Liquidity = matched transactions ÷ listings (or searches)",
          explain: `<b>GMV</b> is the total value transacted on the platform; the <b>take rate</b> is the share the platform keeps. <b>Liquidity</b> — the chance a buyer finds what they need, or a seller makes a sale — is the leading indicator of platform health. A high take rate with low liquidity drives both sides away.`,
          example: `10,000 sellers each sell $20,000 a year: GMV = $200m. At a 12% take rate, revenue = <b>$24m</b>. If raising the take rate to 15% causes 20% of sellers to leave: GMV = 8,000 × $20,000 = $160m, revenue = $24m — no gain, and a weaker marketplace for buyers.`
        },
        {
          type: "case", company: "Apple App Store", year: "2008 onward", title: "Opening the iPhone to outside developers",
          situation: `When the iPhone launched in 2007, Apple did not allow native third-party apps; developers were steered toward web apps. Developers and users pushed for more.`,
          decision: `Apple released a software development kit and opened the App Store in July 2008, with apps reviewed by Apple and a standard 30% commission on paid apps and in-app purchases. Apple controlled distribution, payments and rules on an integrated device.`,
          outcome: `The App Store grew into a vast ecosystem; apps became a major reason to buy an iPhone, reinforcing network effects between users and developers. Governance later became contentious: developers challenged the fees and rules (notably Epic Games’ US lawsuit filed in 2020), Apple introduced a reduced 15% rate for small developers in 2020, and the EU’s Digital Markets Act forced changes to how apps can be distributed and paid for in Europe.`,
          lesson: `Opening a product to outsiders can multiply its value — but the platform owner’s rules and fees become a strategic and political issue as the ecosystem matures.`
        },
        {
          type: "compare", title: "Platform governance choices", headers: ["Decision", "More open", "More closed", "Trade-off"],
          rows: [
            ["Who can join", "Anyone (e.g. open web)", "Approved participants only", "Growth and variety vs quality and safety"],
            ["Quality control", "Ratings and reviews", "Pre-approval and review", "Speed vs trust"],
            ["Pricing", "Low take rate, monetise elsewhere", "High take rate", "Ecosystem goodwill vs short-term revenue"],
            ["Data and interfaces", "Open APIs, data portability", "Proprietary", "Innovation by partners vs control"],
            ["Competing with partners", "Stay neutral", "Launch own products on the platform", "Platform profits vs partner trust (and regulatory risk)"]
          ]
        },
        {
          type: "interactive", widget: "viral-loop", title: "Feel the network effect",
          note: "Set an invitation rate and conversion so the K-factor is just below 1, then just above. A platform whose cross-side effects push users to bring more users behaves the same way: small changes in liquidity create very different growth curves."
        },
        {
          type: "flip", title: "Platform concepts",
          cards: [
            { front: "Cross-side network effect", back: "More users on one side make the platform more valuable for the other side (more riders attract more drivers)." },
            { front: "Same-side network effect", back: "More users on one side make it more valuable for that same side (more players in a multiplayer game)." },
            { front: "Multi-homing", back: "Users or suppliers using several competing platforms at once (drivers on two ride apps). It weakens network-effect moats." },
            { front: "Disintermediation", back: "Buyers and sellers meet on the platform, then transact off it to avoid fees." },
            { front: "Platform envelopment", back: "A platform enters another platform’s market by bundling its functions with its own user base." }
          ]
        },
        {
          type: "scenario",
          prompt: "You are launching a B2B marketplace connecting small manufacturers with buyers of custom parts. Few manufacturers want to list without buyers; buyers will not search an empty site. What do you do first?",
          options: [
            { text: "Spend heavily on national advertising to both sides at once.", feedback: "Spreading thin nationally creates two half-empty sides. Liquidity needs density first.", good: false },
            { text: "Pick one region and one part category, give manufacturers free quoting software that works even without buyers, and personally broker the first deals.", feedback: "Right: narrow focus, single-player value for the hard side, and doing things that do not scale to create early liquidity.", good: true },
            { text: "Charge both sides a subscription from day one to prove willingness to pay.", feedback: "Charging both sides before there is value usually stops the network forming.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Two-sided market", def: "A market in which a platform serves two groups whose demand depends on each other." },
        { term: "Take rate", def: "The percentage of each transaction’s value that the platform keeps as revenue." },
        { term: "GMV", def: "Gross merchandise value: the total value of transactions on a platform." },
        { term: "Liquidity", def: "How reliably participants on a platform find a match — a key measure of platform health." },
        { term: "Chicken-and-egg problem", def: "Each side of a platform waits for the other side before joining." },
        { term: "Multi-homing", def: "Participants using several competing platforms at the same time." },
        { term: "Platform governance", def: "The rules, fees, access and quality controls a platform owner sets for its ecosystem." }
      ],
      quiz: [
        { q: "A marketplace has GMV of $500m and a 10% take rate. What is its revenue?", options: ["$5m", "$50m", "$500m", "$10m"], answer: 1, explain: "$500m × 10% = $50m." },
        { q: "Which tactic creates ‘single-player mode’?", options: ["A tool useful to one side even without the other side present", "Paying both sides", "Charging both sides early", "National TV advertising"], answer: 0, explain: "Single-player value gets one side on board before the network exists." },
        { q: "Why does multi-homing weaken a platform’s advantage?", options: ["It raises take rates", "It is illegal", "Users and suppliers can easily use rivals too, so the network effect does not lock them in", "It increases liquidity"], answer: 2, explain: "If drivers and riders use two apps, neither platform’s network is exclusive." },
        { q: "A platform raises its take rate from 10% to 12% and GMV falls from $100m to $80m. What happens to revenue?", options: ["Rises to $12m", "Stays at $10m", "Rises to $12.4m", "Falls to $9.6m"], answer: 3, explain: "Before: $100m × 10% = $10m. After: $80m × 12% = $9.6m. Revenue falls." },
        { q: "What did the EU’s Digital Markets Act change for the App Store?", options: ["It forced changes to how apps can be distributed and paid for in Europe", "It banned the iPhone in Europe", "It raised the commission to 50%", "Nothing"], answer: 0, explain: "The DMA required gatekeepers like Apple to allow alternative distribution and payment options in the EU." }
      ],
      challenge: {
        title: "Launch plan for a tutoring platform",
        prompt: `You are launching an (illustrative) platform matching university students as tutors with secondary-school pupils. Plan: charge parents $30/hour, pay tutors $24/hour (20% take rate). Target year-one GMV of $3m. Tutors are easy to find; parents are hard to convince and want trust.<br><br>(a) Calculate year-one revenue and hours needed. (b) Which side is the hard side, and how will you solve chicken-and-egg? (c) Name three governance rules. (d) What metric shows liquidity?`,
        hints: ["Revenue = GMV × take rate; hours = GMV ÷ price per hour.", "Trust is the scarce resource here — who must you win first?", "Governance: who can join, quality, disintermediation."],
        model: `<p><b>(a) Numbers:</b> revenue = $3m × 20% = <b>$600k</b>. Hours = $3m ÷ $30 = <b>100,000 hours</b>. Tutors earn $24 × 100,000 = $2.4m.</p><p><b>(b) Hard side: parents</b> (trust and demand). Tutors are plentiful, so control supply quality rather than chase volume.</p><ul><li>Start narrow: one city, two subjects (maths and science) and exam-year pupils, to achieve density.</li><li>Seed demand via schools and parent associations; offer a free first session (subsidise the demand side).</li><li>Single-player value for parents: a free diagnostic test and progress report even before booking.</li></ul><p><b>(c) Governance rules</b></p><ol><li>Tutors are vetted (ID, background check, subject test) before joining — closed entry builds trust.</li><li>Ratings after every session; tutors below a threshold are coached or removed.</li><li>Payments only through the platform, with value that makes staying worthwhile (scheduling, progress tracking, insurance) to reduce disintermediation.</li></ol><p><b>(d) Liquidity metric:</b> share of parent requests matched with a suitable tutor within 48 hours (target, e.g., above 80%), plus repeat booking rate.</p><p><b>Recommendation:</b> keep the 20% take rate but watch disintermediation; if repeat families leave to book tutors directly, lower the take rate for repeat sessions or add subscription value instead of raising fees.</p>`
      },
      takeaways: [
        "Platforms win by enabling interactions; their price to one side shapes the other side’s demand.",
        "Solve chicken-and-egg with single-player value, subsidies, seeding, piggybacking and a narrow start.",
        "Liquidity is the leading indicator; take rate only works on top of it.",
        "Governance (access, quality, fees, neutrality) decides whether the ecosystem thrives — and attracts regulators."
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: "innovation-5",
      title: "The 7 Powers applied to innovation: which power a new venture can build, and when",
      level: "Advanced",
      minutes: 17,
      hook: "A great new product without a path to power is just a gift to the fastest copier.",
      eli5: `Imagine you invent a fun new game in the playground. At first, it is yours — nobody else knows it. But soon everyone copies it. To keep being the leader, you need something others cannot easily copy: maybe all your friends already play with you (network), maybe you have the only ball (cornered resource), or maybe the teachers would have to change the rules to stop you (counter-positioning). Different advantages are possible at different times.`,
      blocks: [
        {
          type: "text", title: "From a static checklist to a timeline",
          html: `<p>In Strategy lesson 4 you learned Hamilton Helmer’s <b>7 Powers</b> (2016): scale economies, network economies, counter-positioning, switching costs, branding, cornered resource and process power — each needing a <b>benefit</b> and a <b>barrier</b>. Here we go further and use it as an innovator: <b>which Powers can a new venture realistically build, at which stage, and what invention unlocks them?</b></p><p>Helmer’s key insight for innovators is that the window to establish Power is usually <b>early</b>, during rapid growth. Once a market matures, most Powers are already taken.</p>`
        },
        {
          type: "framework", name: "Helmer’s Power Progression", by: "Hamilton Helmer, 7 Powers (2016)", when: "Planning which advantage a venture will build at each stage",
          steps: [
            { label: "Origination (before take-off)", desc: "Available Powers: cornered resource (a unique patent, team or licence) and counter-positioning (a model incumbents will not copy). These do not need scale." },
            { label: "Take-off (rapid growth)", desc: "The window for scale economies, network economies and switching costs — they are won by whoever grows fastest, and counter-positioning can keep working. Speed matters most here." },
            { label: "Stability (mature market)", desc: "Branding and process power take years to build and become relevant later. Earlier Powers must be maintained." },
            { label: "Invention comes first", desc: "Helmer stresses that Power starts with invention — a product, process, business model or brand that creates compelling value. Without that, there is nothing to protect." },
            { label: "Plan the sequence", desc: "Ask: which origination Power do we have now, which take-off Power can we grab, and what will protect us at stability?" }
          ]
        },
        {
          type: "formula", name: "The counter-positioning test: why the incumbent will not copy",
          expr: "Incumbent copies only if: profit after copying > profit from not copying (including expected losses to the entrant)",
          explain: `Counter-positioning works when copying the entrant would damage the incumbent’s existing profits more than the entrant’s attack does — at least for a while. The barrier is the incumbent’s own rational calculation.`,
          example: `An incumbent has 10m customers paying $100 a year at a $40 margin: profit $400m. An entrant offers a new model at $40 with a $15 margin. If the incumbent copies and all its customers move to the new model: 10m × $15 = <b>$150m</b>, a loss of $250m. If it does not copy and loses 2m customers over three years: loss = 2m × $40 = <b>$80m</b>, leaving $320m. Not copying looks rational — and that is exactly the entrant’s protection while it grows.`
        },
        {
          type: "formula", name: "The scale economies benefit",
          expr: "Cost per customer = Fixed cost ÷ Number of customers",
          explain: `When a big part of cost is fixed (content, R&D, software, infrastructure), the leader can spend the same or more in total while paying less per customer. The barrier: a rival must reach similar scale, which takes time and money.`,
          example: `Two services each spend $1bn a year on content. The leader has 50m subscribers: $20 per subscriber. The challenger has 10m: $100 per subscriber. The leader can match any content investment at one-fifth the cost per subscriber.`
        },
        {
          type: "case", company: "Intel", year: "1985", title: "Leaving memory to win in microprocessors",
          situation: `Intel had been founded on memory chips (DRAM), but by the mid-1980s Japanese manufacturers produced memory at lower cost and high quality, and Intel was losing money in the business it was known for. It also made microprocessors, including those used in the IBM PC.`,
          decision: `Andy Grove later recounted (in <i>Only the Paranoid Survive</i>, 1996) asking CEO Gordon Moore what a new CEO would do if the board brought one in. Moore answered that a new CEO would get out of memories. Grove asked why they should not walk out the door, come back in and do it themselves. Intel exited DRAM and focused on microprocessors. Research by Robert Burgelman showed that middle managers had already been shifting production capacity toward microprocessors, which had better margins.`,
          outcome: `Intel became the dominant supplier of PC microprocessors, building scale economies in chip design and manufacturing and a strong brand (later reinforced by the “Intel Inside” campaign). Grove called moments like this “strategic inflection points”.`,
          lesson: `Power is not permanent. Intel lost its position in memory, then built new Powers — scale economies and branding — in microprocessors. Recognising when a Power has gone is as important as building one.`
        },
        {
          type: "compare", title: "Which Power can a new venture build?", headers: ["Power", "Realistic for a new venture?", "What unlocks it", "Example"],
          rows: [
            ["Counter-positioning", "Yes — the classic entrant Power", "A new business model incumbents fear to copy", "Netflix streaming vs Blockbuster’s stores and late fees"],
            ["Cornered resource", "Sometimes", "Unique talent, patents, licences, data", "A drug patent; an exclusive data partnership"],
            ["Network economies", "Yes, in take-off", "Product where value rises with users; win density fast", "Marketplaces, messaging"],
            ["Scale economies", "Yes, in take-off", "High fixed costs, fast growth", "Cloud infrastructure; streaming content"],
            ["Switching costs", "Yes, as customers embed you", "Integrations, data, workflows", "Vertical SaaS systems of record"],
            ["Branding", "Rarely early", "Years of consistent quality and identity", "Luxury and consumer brands"],
            ["Process power", "Rarely early", "Years of accumulated, hard-to-see know-how", "Toyota Production System"]
          ]
        },
        {
          type: "interactive", widget: "decision-matrix", title: "Choose your venture’s Power path",
          note: "List four Powers as options. Score each on ‘benefit size’, ‘barrier strength’, ‘achievable within 3 years’ and ‘fits our invention’. Most ventures find one origination Power and one take-off Power are realistic — not seven."
        },
        {
          type: "scenario",
          prompt: "You run an AI startup that writes marketing copy. Large language models are available to everyone via APIs, and three funded rivals have similar features. An investor asks: “What is your Power?” Which answer is strongest?",
          options: [
            { text: "“Our AI is better.”", feedback: "Without a barrier, better features are copied quickly — especially when everyone uses the same underlying models.", good: false },
            { text: "“We integrate deeply into customers’ content workflows and brand guidelines, and learn from their approvals, building switching costs; we are also pricing per outcome, which agencies paid per hour will not copy.”", feedback: "Right: a take-off Power (switching costs) plus counter-positioning against hourly-billing agencies — both with clear barriers.", good: true },
            { text: "“We have a great brand.”", feedback: "Branding takes years to become a Power; it is rarely available to a young startup.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Power", def: "In Helmer’s framework, the set of conditions that creates the potential for persistent, significant differential returns." },
        { term: "Benefit and barrier", def: "A Power must improve cash flow (benefit) and prevent rivals from competing it away (barrier)." },
        { term: "Power Progression", def: "Helmer’s idea that different Powers are available at origination, take-off and stability." },
        { term: "Counter-positioning", def: "A new business model that incumbents rationally avoid copying because it would damage their existing business." },
        { term: "Cornered resource", def: "Preferential access to a valuable asset such as a patent, licence, unique talent or data." },
        { term: "Strategic inflection point", def: "Andy Grove’s term for a moment when the fundamentals of a business change and the old strategy stops working." }
      ],
      quiz: [
        { q: "According to Helmer, which Powers are available during origination, before a venture has scale?", options: ["Branding and process power", "Cornered resource and counter-positioning", "Scale economies only", "None"], answer: 1, explain: "These two do not require scale; scale, network and switching-cost Powers open up during take-off." },
        { q: "An incumbent earns $300m profit. Copying an entrant’s model would cut profit to $120m; not copying would lose $60m over three years. What will the incumbent rationally do, and what Power does the entrant have?", options: ["Copy — scale economies", "Copy — branding", "Not copy — process power", "Not copy — counter-positioning"], answer: 3, explain: "Copying costs $180m vs $60m from not copying; the incumbent holds back, giving the entrant counter-positioning." },
        { q: "Two firms each spend $600m a year on R&D. Firm A has 30m customers, firm B 5m. What is the R&D cost per customer for each?", options: ["A $20, B $120", "A $120, B $20", "Both $600", "A $30, B $5"], answer: 0, explain: "$600m ÷ 30m = $20; $600m ÷ 5m = $120. Firm A has a scale economies benefit." },
        { q: "What did Intel do in 1985–86?", options: ["Exited microprocessors to focus on memory", "Merged with a Japanese memory maker", "Exited memory chips to focus on microprocessors", "Stopped making chips"], answer: 2, explain: "Facing Japanese competition in DRAM, Intel left memory and focused on microprocessors." },
        { q: "Why is branding rarely a realistic Power for a young startup?", options: ["It is illegal for startups", "It takes years of consistent experience to build a brand that raises willingness to pay", "Brands are free", "Customers ignore brands"], answer: 1, explain: "Helmer places branding in the stability stage because it accumulates slowly." }
      ],
      challenge: {
        title: "Map the Power path for a new venture",
        prompt: `You advise an (illustrative) startup building software for independent pharmacies: inventory, ordering, prescription records and insurance claims. It has 300 pharmacy customers out of about 20,000 in its country. Big pharmacy chains build their own systems; an established vendor sells expensive on-premise software with a large services business. The startup charges a monthly subscription with no setup fee and has signed an exclusive data-sharing deal with one regional wholesaler.<br><br>(a) Which Powers does it have now? (b) Which can it build during take-off? (c) What could threaten each? (d) What is its market share today, and what share would make scale economies meaningful?`,
        hints: ["Check each Power for both a benefit and a barrier.", "Why would the incumbent vendor hesitate to copy subscription pricing with no setup fee?", "Share = customers ÷ total pharmacies."],
        model: `<p><b>(a) Powers now (origination)</b></p><ul><li><b>Counter-positioning</b> against the incumbent vendor: its profits come from licences and services; copying a no-setup subscription would cannibalise them. Benefit: lower price to pharmacies at good margins. Barrier: the incumbent’s reluctance.</li><li><b>Cornered resource (weak)</b>: the exclusive wholesaler data deal — valuable only if exclusive for long enough and not easily replicated with other wholesalers.</li></ul><p><b>(b) Take-off Powers</b></p><ul><li><b>Switching costs</b>: as a system of record for prescriptions and claims, it becomes painful to replace (data migration, staff retraining). Build deliberately: integrations, history, workflows.</li><li><b>Scale economies</b>: fixed costs of product, compliance and insurer integrations spread over more pharmacies.</li><li><b>Network economies (possible)</b>: if it connects pharmacies with wholesalers and insurers, each new participant could make the network more valuable.</li></ul><p><b>(c) Threats:</b> the incumbent may launch a cut-price cloud product anyway (counter-positioning weakens over time); the wholesaler deal may end; another startup may move faster in take-off; regulation could standardise data and reduce switching costs.</p><p><b>(d) Share:</b> 300 ÷ 20,000 = <b>1.5%</b>. Scale economies would become meaningful at a share large enough to be the clear leader among independents — for example 15–25% (3,000–5,000 pharmacies), where the fixed cost per customer would be a fraction of a smaller rival’s.</p><p><b>Recommendation:</b> exploit counter-positioning now to grow fast; invest in deep integrations to build switching costs; extend wholesaler partnerships to make the data advantage durable; aim to be the clear scale leader before the incumbent responds.</p>`
      },
      takeaways: [
        "Use the 7 Powers as a timeline, not a checklist.",
        "Origination: cornered resource and counter-positioning. Take-off: scale, network, switching costs. Stability: brand and process.",
        "Counter-positioning works because copying would hurt the incumbent more than the attack does.",
        "Powers fade — Intel left memory and built new Powers in microprocessors.",
        "Every Power needs both a benefit and a barrier; better features alone are not Power."
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: "innovation-6",
      title: "Open innovation, corporate venture capital, M&A — and innovation in the AI era",
      level: "Advanced",
      minutes: 18,
      hook: "No company employs all the smartest people — the question is how to work with the ones who work elsewhere.",
      eli5: `Imagine your class has to build the best robot. You could build every part yourselves. Or you could borrow a motor from another class, team up with a club that is great at coding, or invite a talented student to join your team. Smart companies do the same: they build some things, partner for some, invest in some and buy some.`,
      blocks: [
        {
          type: "framework", name: "Open innovation", by: "Henry Chesbrough, Open Innovation (2003)", when: "Deciding how to bring ideas into the company — and take unused ideas out",
          steps: [
            { label: "Closed innovation (the old model)", desc: "Hire the best people, do all R&D in-house, and keep it secret. Works when knowledge is concentrated." },
            { label: "Outside-in", desc: "Bring in external ideas: licensing, university partnerships, crowdsourcing, startup scouting, supplier co-development." },
            { label: "Inside-out", desc: "Take unused internal ideas out: license patents, spin out ventures, sell technologies you will not commercialise." },
            { label: "Coupled", desc: "Co-create with partners: joint ventures, alliances, ecosystems." },
            { label: "Why it matters now", desc: "Knowledge is spread across startups, universities and individuals; speed matters more than secrecy for many products." }
          ]
        },
        {
          type: "callout", kind: "example", title: "P&G’s Connect + Develop",
          html: `<p>In the 2000s, under CEO A.G. Lafley, Procter & Gamble set a goal of sourcing about half of its innovations with external partners, through a programme called <b>Connect + Develop</b>. It actively searched for outside technologies and inventors rather than relying only on its own labs. P&G executives described the programme in HBR in 2006, citing products developed with outside partners. The key shift was cultural: from “not invented here” to “proudly found elsewhere”.</p>`
        },
        {
          type: "compare", title: "Build, partner, invest or buy?", headers: ["Option", "Speed", "Control", "Cost and risk", "Best when"],
          rows: [
            ["Build (internal R&D)", "Slow", "Full", "Moderate cost; execution risk", "Core capability, time available, talent in-house"],
            ["Partner / license", "Fast", "Limited", "Low upfront; dependency risk", "Capability is not core, or you need to learn first"],
            ["Corporate venture capital (minority stake)", "Medium", "Low", "Small per deal; financial and strategic learning", "Watching many uncertain technologies; building options"],
            ["Acquire", "Fastest", "Full", "High price (premium) and integration risk", "Proven capability needed quickly; clear integration plan"]
          ]
        },
        {
          type: "text", title: "Corporate venture capital and M&A for innovation",
          html: `<p><b>Corporate venture capital (CVC)</b> means a company investing directly in startups, usually as a minority investor. Examples include Intel Capital (founded in 1991) and GV, Alphabet’s venture arm (launched as Google Ventures in 2009). CVC gives a window onto new technologies and options to partner or acquire later. Risks: conflicts with the startup’s other investors, slow corporate decisions, and units that are shut down when the parent cuts costs.</p><p><b>Acquisitions for innovation</b> buy capability and speed. Google bought Android in 2005, years before smartphones took off; Facebook bought Instagram in 2012 for about $1bn while it had a small team. Many tech acquisitions are effectively <b>acqui-hires</b> — buying a team. The record is mixed: integration often kills the startup’s speed, which is why successful acquirers frequently keep acquired teams semi-independent.</p>`
        },
        {
          type: "case", company: "Microsoft and OpenAI", year: "2019 onward", title: "A partnership instead of an acquisition",
          situation: `OpenAI, originally founded as a non-profit research lab, needed vast computing power to train large AI models. Microsoft needed a leading position in AI for its cloud (Azure) and products.`,
          decision: `Microsoft announced a $1bn investment in 2019 and a further multi-year, multibillion-dollar investment in January 2023, with Azure as OpenAI’s main cloud provider and rights to use OpenAI’s models in Microsoft products. Microsoft did not acquire OpenAI; it took an economic interest in a company with an unusual governance structure.`,
          outcome: `Microsoft integrated OpenAI models into products such as Bing, GitHub Copilot and Microsoft 365 Copilot, and Azure became a major AI cloud. The partnership also showed the risks: in November 2023 OpenAI’s board removed CEO Sam Altman, and he returned days later after pressure from employees and investors including Microsoft. Competition authorities in several jurisdictions examined the relationship, and the companies renegotiated their arrangements over time, including as OpenAI restructured.`,
          lesson: `A large strategic partnership can deliver speed and access without the cost and regulatory obstacles of a full acquisition — but you accept dependency on a partner you do not control, and governance surprises at the partner become your risk.`
        },
        {
          type: "framework", name: "Innovation strategy in the AI era", by: "Synthesis of practice, 2023–2026", when: "Deciding how an established company should innovate with AI",
          steps: [
            { label: "Separate the model from the moat", desc: "Foundation models are increasingly available to everyone. Advantage comes from proprietary data, workflow integration, distribution and trust — not from the model alone." },
            { label: "Cheap experiments, fast", desc: "AI makes prototypes far cheaper. Run many small pilots, but set clear criteria to scale or stop." },
            { label: "Choose build / partner / buy by layer", desc: "Usually partner for models, build the application and data layer that touches your customers, and buy selectively for talent or data." },
            { label: "Watch for self-disruption", desc: "If AI lets a rival deliver your service at a fraction of the cost, consider counter-positioning yourself (e.g. outcome-based pricing) before an entrant does." },
            { label: "New deal structures", desc: "Large tech firms have used licensing-plus-hiring deals (for example Microsoft with Inflection AI in 2024) instead of classic acquisitions — fast, but under growing regulatory scrutiny." },
            { label: "Govern responsibly", desc: "Data privacy, model risk, IP and safety reviews belong in the innovation process, not after launch." }
          ]
        },
        {
          type: "scenario",
          prompt: "A large bank wants AI-powered financial advice for customers within 12 months. Options: build its own large model, partner with a model provider and build the advice application in-house, or acquire an AI startup for a high price. What do you recommend?",
          options: [
            { text: "Build its own foundation model from scratch.", feedback: "Very expensive and slow, and unlikely to beat leading models. The bank’s advantage is its customers, data and regulatory trust, not model training.", good: false },
            { text: "Partner for the model layer, build the advice application and data integration in-house, and consider a small acquisition only for specific talent.", feedback: "Right. Partner where you have no edge, build where your data, customers and compliance are the moat.", good: true },
            { text: "Acquire the hottest AI startup at any price.", feedback: "Fast but risky: high premium, integration and culture risk, and the startup’s model may be commoditised soon.", good: false }
          ]
        },
        {
          type: "checklist", title: "Before you invest in or acquire for innovation",
          items: [
            "We know which capability we need and why we cannot build it in time",
            "We compared build, partner, invest and buy on speed, control, cost and risk",
            "Integration plan protects the acquired team’s speed and talent",
            "Retention packages are in place for key people",
            "Regulatory and competition review has been assessed",
            "We have defined what success looks like in 12, 24 and 36 months",
            "For partnerships: we know our dependency and exit options"
          ]
        }
      ],
      terms: [
        { term: "Open innovation", def: "Using external as well as internal ideas and paths to market to advance innovation (Chesbrough)." },
        { term: "Corporate venture capital (CVC)", def: "A company investing directly in startups, usually as a minority shareholder, for strategic and financial returns." },
        { term: "Acqui-hire", def: "An acquisition made mainly to hire the startup’s team rather than to keep its product." },
        { term: "Strategic partnership", def: "A long-term collaboration, sometimes with an investment, that gives both sides access to each other’s capabilities without a full merger." },
        { term: "Not invented here", def: "A cultural bias against ideas that come from outside the organisation." },
        { term: "Foundation model", def: "A large AI model trained on broad data that can be adapted to many tasks." },
        { term: "Integration risk", def: "The risk that combining an acquired company destroys the value that made it attractive." }
      ],
      quiz: [
        { q: "Which is an ‘inside-out’ open-innovation move?", options: ["Licensing a university technology", "Licensing your unused patents to other firms", "Hiring a startup founder", "Crowdsourcing ideas from customers"], answer: 1, explain: "Inside-out takes internal ideas to market through others, e.g. licensing or spin-outs." },
        { q: "What is the main advantage of a strategic partnership over an acquisition?", options: ["Full control", "No dependency", "Guaranteed exclusivity forever", "Speed and access with lower upfront cost and fewer regulatory obstacles"], answer: 3, explain: "Partnerships are faster and cheaper but create dependency on a partner you do not control." },
        { q: "You can build a capability for $30m with a 50% chance of success, worth $150m if it succeeds. Ignoring timing, what is the expected value?", options: ["$45m", "$75m", "$120m", "$15m"], answer: 0, explain: "0.5 × $150m − $30m = $75m − $30m = $45m." },
        { q: "In the AI era, where does durable advantage usually come from for an established company?", options: ["Training the biggest model", "Avoiding AI entirely", "Proprietary data, workflow integration, distribution and trust", "Low prices alone"], answer: 2, explain: "Models are widely available; data, distribution and integration are harder to copy." },
        { q: "What happened at OpenAI in November 2023?", options: ["Microsoft acquired it", "It went public", "Its board removed CEO Sam Altman, who returned days later", "It closed its API"], answer: 2, explain: "The episode showed that governance at a partner can become a strategic risk for the investor." }
      ],
      challenge: {
        title: "Build, partner or buy: AI for a logistics company",
        prompt: `You are chief innovation officer at an (illustrative) logistics company with $4bn revenue. You need AI route-optimisation and demand forecasting. Options:<ul><li><b>Build:</b> $30m over 3 years, 50% chance of success; if successful, worth $150m (in today’s money, before cost).</li><li><b>Buy:</b> acquire a startup for $120m; its technology is proven and worth $150m to you if integration succeeds, which you estimate at 70%.</li><li><b>Partner:</b> license a provider’s platform for $8m a year for 3 years and build your own data layer for $6m; captures about 70% of the value ($105m) with 90% confidence, but you depend on the partner.</li></ul>Calculate the expected value of each option (ignore discounting except where stated), weigh speed and control, and recommend.`,
        hints: ["EV = probability × value − cost.", "Partner cost = 3 × $8m + $6m.", "Consider speed: build takes 3 years; buy and partner are faster."],
        model: `<p><b>Expected values</b></p><table><thead><tr><th>Option</th><th>Calculation</th><th>EV</th></tr></thead><tbody><tr><td>Build</td><td>0.5 × $150m − $30m</td><td><b>$45m</b></td></tr><tr><td>Buy</td><td>0.7 × $150m − $120m = $105m − $120m</td><td><b>−$15m</b></td></tr><tr><td>Partner</td><td>0.9 × $105m − ($24m + $6m) = $94.5m − $30m</td><td><b>$64.5m</b></td></tr></tbody></table><p><b>Speed and control</b></p><ul><li>Build: highest control, slowest (3 years) — and rivals may move first. If we discounted the build value for 3 years at 10%, $150m becomes about $112.7m, and EV drops to roughly 0.5 × $112.7m − $30m ≈ $26m.</li><li>Buy: fast and full control, but the premium destroys value at a 70% integration success rate. It would break even only if integration success were 80% ($120m ÷ $150m).</li><li>Partner: fast, highest EV, but dependency risk — price rises, partner acquired by a rival, or data-sharing concerns.</li></ul><p><b>Recommendation:</b> <b>Partner now, own the data layer.</b> License the platform for speed, but build the proprietary data layer (shipment history, customer demand signals) in-house so the moat is ours. Negotiate data ownership, price caps and exit rights. In parallel, take a small CVC stake (e.g. a few million dollars) in one or two route-optimisation startups to keep options open. Revisit build-versus-partner in year 2 once we know which capabilities differentiate us.</p>`
      },
      takeaways: [
        "Open innovation brings ideas in (outside-in), takes unused ones out (inside-out) and co-creates (coupled).",
        "Choose build, partner, invest or buy by speed, control, cost and risk.",
        "CVC buys options and a window on new technology; acquisitions buy speed at a premium and integration risk.",
        "In AI, partner for the model layer and build your moat in data, workflow and trust.",
        "Partnerships like Microsoft–OpenAI trade control for speed — governance surprises become your risk."
      ]
    }
  ]
});
