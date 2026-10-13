/* MBA Studio — Track 14: Strategy & Competitive Advantage */
MBA.addTrack({
  id: "strategy",
  stage: 4,
  order: 14,
  title: "Strategy & Competitive Advantage",
  icon: "♟️",
  color: "#3b82f6",
  tagline: "Choose where to play and how to win — and make it last",
  summary: `Strategy is the art of making a few hard choices that make a company different and keep it ahead. After this track you will be able to diagnose an industry, spot real (and fake) strategies, explain why some advantages last, find blue oceans and disruption threats, decide on growth moves and acquisitions, and plan for uncertain futures — including the AI era.`,
  outcomes: [
    "Tell good strategy from bad using Porter's and Rumelt's ideas",
    "Analyse industries with Five Forces, PESTEL and SWOT",
    "Choose a generic strategy and design a value chain that fits it",
    "Assess durable advantage with VRIO and Hamilton Helmer's 7 Powers",
    "Apply Blue Ocean, disruptive innovation and platform thinking",
    "Make corporate moves (BCG, Ansoff, M&A) and plan with scenarios in the AI era"
  ],
  lessons: [
    /* ---------------------------------------------------------------- 1 */
    {
      id: "strategy-1",
      title: "What strategy really is",
      level: "Beginner",
      minutes: 14,
      hook: "Most 'strategies' are just goals with nice fonts — real strategy is choosing what NOT to do.",
      eli5: `Imagine your football team is small but fast. A bad plan says "Let's win every match!" — that is a wish. A good plan says "Their defenders are slow, so we play long balls over the top, train sprinting all week and skip practising headers." It names the problem, picks a way to beat it and makes every training session fit that plan. That is strategy.`,
      blocks: [
        {
          type: "text",
          title: "Strategy vs operational effectiveness",
          html: `<p>Michael Porter's 1996 HBR article "What Is Strategy?" made a key distinction:</p>
<ul><li><b>Operational effectiveness</b> = doing the same things better than rivals (lean, quality, best practices). Necessary — but competitors copy it, so it rarely gives lasting advantage.</li>
<li><b>Strategy</b> = <span class="hl">performing different activities, or similar activities in different ways</span>, to deliver a unique mix of value. It requires <b>trade-offs</b> (choosing what not to do) and <b>fit</b> among activities.</li></ul>
<p>Roger Martin and A.G. Lafley summarise strategy as an integrated set of choices: <b>where to play</b> and <b>how to win</b>.</p>`
        },
        {
          type: "framework",
          name: "The kernel of good strategy",
          by: "Richard Rumelt, Good Strategy / Bad Strategy (2011)",
          when: "To write or test any strategy — company, product, team or personal.",
          steps: [
            { label: "Diagnosis", desc: "What is going on here? Name the critical challenge simply. A good diagnosis turns a messy situation into a problem you can act on." },
            { label: "Guiding policy", desc: "The overall approach to deal with the challenge — a signpost that rules some actions in and many out." },
            { label: "Coherent actions", desc: "Coordinated steps, resources and policies that carry out the guiding policy and reinforce each other." }
          ]
        },
        {
          type: "compare",
          title: "Good strategy vs bad strategy",
          headers: ["", "Bad strategy (Rumelt's hallmarks)", "Good strategy"],
          rows: [
            ["Language", "Fluff: buzzwords and 'synergies'", "Plain words, specific"],
            ["Challenge", "Fails to face the real problem", "Clear diagnosis of the key obstacle"],
            ["Goals", "Mistakes goals ('grow 20%') for strategy", "Explains HOW to win"],
            ["Objectives", "Long wish lists, impossible targets", "Few, achievable, focused objectives"],
            ["Choices", "Tries to please everyone", "Trade-offs: says no to many things"]
          ]
        },
        {
          type: "case",
          company: "Southwest Airlines",
          year: "1971–2010s",
          title: "Trade-offs and fit",
          situation: `Big airlines used hub-and-spoke networks, many aircraft types, assigned seats, meals and travel-agent sales to serve every type of traveller.`,
          decision: `Southwest chose to serve price-sensitive, short-haul travellers with frequent point-to-point flights, using a single aircraft type (Boeing 737), no meals, open seating for years, fast gate turnarounds and direct sales. Porter used it as his key example: each activity supports the others.`,
          outcome: `Southwest became one of the most consistently profitable US airlines for decades. Rivals' 'airline within an airline' copies (e.g. Continental Lite, United's Shuttle) struggled because they could not copy the whole system. Under competitive and activist-investor pressure, Southwest announced in 2024 that it would move to assigned seating — showing strategies must evolve as customers and rivals change.`,
          lesson: `Advantage comes from a system of activities that fit together. Copying one piece does not work — but no system is permanent.`
        },
        {
          type: "flip",
          title: "Strategy or not?",
          cards: [
            { front: "'Become the #1 bank in Asia by 2030.'", back: "A goal, not a strategy — it says nothing about how." },
            { front: "'Adopt lean manufacturing to cut costs 10%.'", back: "Operational effectiveness — valuable, but copyable." },
            { front: "'Serve only budget short-haul travellers with one plane type and fast turnarounds.'", back: "Strategy — clear where to play, how to win and trade-offs." },
            { front: "'Leverage synergies to maximise stakeholder value.'", back: "Fluff — Rumelt's first hallmark of bad strategy." }
          ]
        },
        {
          type: "scenario",
          prompt: "A mid-size bookshop chain is losing to Amazon. The board proposes: 'Grow online sales 30%, open 10 stores, launch an app, cut prices, add coffee shops and expand to toys.' What is your critique?",
          options: [
            { text: "Great — it covers everything.", feedback: "That is the problem. A list of goals without trade-offs or diagnosis is a classic bad strategy.", good: false },
            { text: "Start with a diagnosis: why should a customer visit us instead of Amazon? Then pick one guiding policy (e.g. curated, local, expert experience) and cut actions that do not fit.", feedback: "Yes. This is roughly what Barnes & Noble under James Daunt did from 2019 — letting local managers curate and making stores feel like independent bookshops.", good: true },
            { text: "Just cut prices to match Amazon.", feedback: "Competing on Amazon's terms (price, selection) plays to Amazon's strengths.", good: false }
          ]
        },
        {
          type: "checklist",
          title: "Strategy one-pager test",
          items: [
            "Diagnosis of the main challenge in 2–3 sentences",
            "Where we play (customers, geographies, channels) — and where we do not",
            "How we win (why customers choose us)",
            "Three to five coherent actions that reinforce each other",
            "What we will STOP doing"
          ]
        }
      ],
      terms: [
        { term: "Strategy", def: "An integrated set of choices about where to play and how to win, involving trade-offs and fit." },
        { term: "Operational effectiveness", def: "Performing similar activities better than rivals; necessary but rarely a lasting advantage." },
        { term: "Trade-off", def: "Choosing to do one thing means not doing another; trade-offs make strategies hard to copy." },
        { term: "Fit", def: "How a company's activities reinforce each other so the whole is stronger than the parts." },
        { term: "Diagnosis", def: "Rumelt's first kernel element: an explanation of the critical challenge." },
        { term: "Guiding policy", def: "The overall approach chosen to overcome the challenge." },
        { term: "Coherent actions", def: "Coordinated steps that implement the guiding policy." }
      ],
      quiz: [
        { q: "According to Porter, which is NOT strategy?", options: ["Choosing unique activities", "Making trade-offs", "Adopting best practices that rivals also use", "Creating fit among activities"], answer: 2, explain: "Best practices are operational effectiveness — easy to copy." },
        { q: "What are the three parts of Rumelt's kernel?", options: ["Vision, mission, values", "Diagnosis, guiding policy, coherent actions", "Goals, budgets, KPIs", "Strengths, weaknesses, opportunities"], answer: 1, explain: "Diagnosis → guiding policy → coherent actions." },
        { q: "'Grow revenue 25% next year' is…", options: ["A goal, not a strategy", "A guiding policy", "A diagnosis", "A trade-off"], answer: 0, explain: "It says what, not how." },
        { q: "Why did rivals' copies of Southwest struggle?", options: ["They had no planes", "Regulators blocked them", "They charged too little", "They copied parts but not the whole fitted system of activities"], answer: 3, explain: "Fit across many activities is very hard to imitate." }
      ],
      challenge: {
        title: "Write a strategy kernel",
        prompt: `A regional gym chain (12 clubs, $40/month) is squeezed between budget gyms at $15/month and boutique studios at $25 per class. Membership has fallen 15% in two years. Write a Rumelt kernel: diagnosis, guiding policy and 4 coherent actions — plus 2 things to stop doing.`,
        hints: ["The middle is being squeezed — Porter would say 'stuck in the middle'.", "Choose a segment you can serve better than both rivals.", "Actions must reinforce each other."],
        model: `<p><b>Diagnosis:</b> We are stuck in the middle — more expensive than budget gyms, less special than boutiques. Customers do not know why to choose us. But 40% of our members are 45+ and they retain much better than younger members.</p>
<p><b>Guiding policy:</b> Become the best gym for people 40+ who want to stay strong and healthy — community, coaching and health outcomes, not equipment.</p>
<p><b>Coherent actions:</b></p>
<ol>
<li>Redesign 6 clubs with strength and mobility zones; drop rows of rarely used machines.</li>
<li>Small-group coached classes (included) led by trainers certified in ageing and rehab.</li>
<li>Partnerships with local physios and doctors for referrals; quarterly health check-ins.</li>
<li>Price at $55/month with a quarterly progress report — premium justified by outcomes.</li>
</ol>
<p><b>Stop:</b> price promotions to students; late-night HIIT classes aimed at 20-somethings.</p>
<p><b>Success:</b> 12-month retention up from ~55% to 70%; revenue per member +30%.</p>`
      },
      takeaways: [
        "Strategy = where to play + how to win, with trade-offs.",
        "Operational effectiveness is necessary but not sufficient.",
        "Use Rumelt's kernel: diagnosis, guiding policy, coherent actions.",
        "Advantage comes from a fitted system of activities that is hard to copy."
      ]
    },

    /* ---------------------------------------------------------------- 2 */
    {
      id: "strategy-2",
      title: "Industry analysis: Five Forces, PESTEL & SWOT",
      level: "Beginner",
      minutes: 16,
      hook: "Some industries make almost everyone rich; others make almost everyone poor — Five Forces explains why.",
      eli5: `Think of selling ice cream on a beach. If you are the only seller (few rivals), the beach is hard to get onto (barriers), customers cannot just drink water instead (no substitutes), there is one milk farmer who sets the price (powerful supplier) and a huge tourist group negotiating a discount (powerful buyers) — each of these changes how much money you can keep. That is the Five Forces.`,
      blocks: [
        {
          type: "framework",
          name: "Porter's Five Forces",
          by: "Michael Porter, HBR 1979; Competitive Strategy 1980",
          when: "To judge how attractive (profitable) an industry is and where pressure on profits comes from.",
          steps: [
            { label: "Threat of new entrants", desc: "How easy is it to enter? Barriers: scale economies, capital needs, brand, regulation, network effects, access to distribution." },
            { label: "Bargaining power of suppliers", desc: "Can suppliers raise prices? Strong when few suppliers, unique inputs, high switching costs (e.g. chip suppliers, music labels)." },
            { label: "Bargaining power of buyers", desc: "Can customers push prices down? Strong when buyers are few and large, products are standard, switching is cheap." },
            { label: "Threat of substitutes", desc: "Can a different product do the same job? Video calls substitute for business travel; streaming substituted for DVDs." },
            { label: "Rivalry among competitors", desc: "How intensely do firms fight (price wars, ad battles)? High with many similar rivals, slow growth, high fixed costs, high exit barriers." }
          ]
        },
        {
          type: "interactive",
          widget: "five-forces",
          title: "Rate an industry",
          note: "Rate airlines (powerful suppliers like aircraft makers, price-comparing buyers, fierce rivalry) and then a dominant software platform. Compare the radar shapes."
        },
        {
          type: "case",
          company: "Airlines vs Soft drinks",
          year: "Long-run industry evidence",
          title: "Why industry structure matters",
          situation: `Airlines have historically earned poor returns on capital over long periods; Warren Buffett has often joked about how much money investors have lost in airlines. Concentrate makers like Coca-Cola and PepsiCo have earned high returns for decades.`,
          decision: `Five Forces explains the gap. Airlines: powerful suppliers (few aircraft and engine makers, unions, airports), price-comparing buyers, high fixed costs causing price wars, and substitutes (trains, video calls). Concentrate: two dominant brands, bottlers and many fragmented buyers, low-cost inputs, strong brand barriers.`,
          outcome: `Even well-run airlines struggle to earn high returns over a full cycle, while average concentrate producers earn strong margins.`,
          lesson: `Industry structure sets the 'average' profitability. Your strategy then decides whether you beat that average.`
        },
        {
          type: "framework",
          name: "PESTEL — scanning the macro environment",
          by: "Evolved from Francis Aguilar's 1967 ETPS scan",
          when: "Before entering a market or making a long-term plan; to spot external opportunities and threats.",
          steps: [
            { label: "Political", desc: "Government stability, trade policy, tariffs, subsidies (e.g. 2025 tariff changes reshaping supply chains)." },
            { label: "Economic", desc: "Growth, inflation, interest rates, exchange rates, consumer spending." },
            { label: "Social", desc: "Demographics, ageing, health trends, attitudes, remote work." },
            { label: "Technological", desc: "AI, automation, new platforms, cost of computing and energy." },
            { label: "Environmental", desc: "Climate risk, carbon pricing, resource scarcity, sustainability expectations." },
            { label: "Legal", desc: "Regulation such as data privacy (GDPR), AI rules (EU AI Act), competition law, labour law." }
          ]
        },
        {
          type: "interactive",
          widget: "swot",
          title: "Build a SWOT",
          note: "Strengths and weaknesses are INTERNAL (what you control); opportunities and threats are EXTERNAL (from PESTEL and Five Forces). Then combine them: use strengths to grab opportunities (SO), fix weaknesses that expose you to threats (WT)."
        },
        {
          type: "callout",
          kind: "warning",
          title: "SWOT done badly",
          html: `<p>Most SWOTs are long lists that lead to no decision. Make yours useful:</p>
<ul><li>Be specific and evidence-based ("NPS 62 vs industry 30"), not vague ("good service").</li>
<li>Rank items by impact — keep the top 3–4 per box.</li>
<li>Convert to a <b>TOWS</b> table: SO, ST, WO, WT strategies — that is where decisions come from.</li></ul>`
        },
        {
          type: "compare",
          title: "Which tool when?",
          headers: ["Tool", "Looks at", "Question it answers"],
          rows: [
            ["PESTEL", "Macro environment", "What big outside trends could help or hurt us?"],
            ["Five Forces", "Industry structure", "How profitable is this industry, and why?"],
            ["SWOT / TOWS", "Company vs environment", "What should WE do given our strengths and the outside world?"]
          ]
        }
      ],
      terms: [
        { term: "Five Forces", def: "Porter's model of five pressures that shape industry profitability." },
        { term: "Barrier to entry", def: "Anything that makes it hard for new competitors to enter (cost, regulation, brand, network effects)." },
        { term: "Substitute", def: "A different product that satisfies the same need (e.g. video calls vs business flights)." },
        { term: "Bargaining power", def: "The ability of buyers or suppliers to influence prices and terms." },
        { term: "PESTEL", def: "Political, Economic, Social, Technological, Environmental and Legal factors." },
        { term: "SWOT", def: "Strengths, Weaknesses (internal), Opportunities, Threats (external)." },
        { term: "TOWS", def: "A matrix that turns SWOT into strategies by combining internal and external factors." }
      ],
      quiz: [
        { q: "Video conferencing reducing business travel is an example of…", options: ["Supplier power", "Threat of substitutes", "Buyer power", "Rivalry"], answer: 1, explain: "A different product doing the same job." },
        { q: "Which factor INCREASES buyer power?", options: ["Many small, scattered buyers", "Highly differentiated products", "Few large buyers and standard products", "High switching costs"], answer: 2, explain: "Concentrated buyers of commodity products can push prices down." },
        { q: "In SWOT, 'a new regulation favouring our product' is…", options: ["An opportunity", "A strength", "A weakness", "A threat"], answer: 0, explain: "External and positive." },
        { q: "Why have airlines historically earned weak returns?", options: ["Too few customers", "No competition", "Low fixed costs", "Powerful suppliers, price-sensitive buyers and intense rivalry"], answer: 3, explain: "The industry structure squeezes profits." },
        { q: "The EU AI Act belongs in which PESTEL category?", options: ["Social", "Legal", "Environmental", "Economic"], answer: 1, explain: "It is regulation (it can also be considered political)." }
      ],
      challenge: {
        title: "Should we enter food delivery?",
        prompt: `A retail conglomerate considers launching a food-delivery app in a large city where two established players hold most of the market. Restaurants complain about commissions of 20–30%; customers switch apps freely using discount codes; couriers are gig workers facing new labour regulation. Do a Five Forces analysis, add 3 PESTEL points and recommend whether to enter.`,
        hints: ["Rate each force High/Medium/Low with a reason.", "Network effects create barriers.", "Is there a niche where the forces look better?"],
        model: `<ul>
<li><b>New entrants (barrier): High barrier</b> — two incumbents have network effects (restaurants ↔ customers ↔ couriers) and big marketing budgets.</li>
<li><b>Supplier power (restaurants, couriers): Medium-High</b> — restaurants multi-home on all apps; couriers can switch; regulation may raise courier costs.</li>
<li><b>Buyer power: High</b> — switching is one tap; customers chase discounts.</li>
<li><b>Substitutes: Medium</b> — cooking, takeaway pickup, restaurants' own delivery.</li>
<li><b>Rivalry: High</b> — subsidy wars, thin margins.</li>
</ul>
<p><b>PESTEL:</b> (Legal) gig-worker employment rules could raise costs; (Economic) inflation pushes customers toward cheaper meals; (Technological) AI routing and dark kitchens lower costs for scaled players.</p>
<p><b>Recommendation: do not enter head-on.</b> The industry is structurally unattractive for a new entrant. Better: use the group's existing grocery stores and loyalty programme to launch quick grocery/ready-meal delivery where it already has supply and customers, or partner with an incumbent for distribution.</p>`
      },
      takeaways: [
        "Industry structure determines average profitability.",
        "Five Forces: entrants, suppliers, buyers, substitutes, rivalry.",
        "PESTEL scans the big outside trends; SWOT/TOWS turns analysis into choices.",
        "Analysis is only useful if it ends in a decision."
      ]
    },

    /* ---------------------------------------------------------------- 3 */
    {
      id: "strategy-3",
      title: "Generic strategies & the value chain",
      level: "Intermediate",
      minutes: 15,
      hook: "Walmart and Apple both win — one by being cheapest, the other by being special. Trying to be both often means being neither.",
      eli5: `In a school sports day you can win by being the fastest runner, or by being the best at one unusual event nobody else trains for. If you try to be okay at everything, you probably win nothing. Companies choose too: be the cheapest, be different and special, or be the best for one small group.`,
      blocks: [
        {
          type: "matrix",
          name: "Porter's generic strategies",
          xLabel: "Source of advantage: Low cost ← → Differentiation",
          yLabel: "Competitive scope: Narrow (bottom) → Broad (top)",
          cells: [
            { label: "Cost leadership (broad)", desc: "Lowest cost in the industry, serving a broad market. Walmart, IKEA, Ryanair." },
            { label: "Differentiation (broad)", desc: "Unique valued features that justify a premium, across a broad market. Apple, BMW, Starbucks." },
            { label: "Cost focus (narrow)", desc: "Lowest cost for a specific segment. Aldi's limited-range discounting, regional budget chains." },
            { label: "Differentiation focus (narrow)", desc: "Tailored, premium offer for a niche. Ferrari, Rolex, specialist B2B software." }
          ]
        },
        {
          type: "case",
          company: "Walmart",
          year: "1962–1990s",
          title: "Cost leadership through the value chain",
          situation: `Sam Walton started in small towns that big retailers ignored, where a large discount store could dominate.`,
          decision: `Walmart built a cost advantage across its value chain: clustered stores around its own distribution centres, cross-docking, early heavy investment in IT and satellite communications, sharing sales data with suppliers (Retail Link), and hard bargaining on purchase prices.`,
          outcome: `It became the largest retailer in the US and then the world by revenue, with "everyday low prices" backed by structurally lower costs, not temporary discounts.`,
          lesson: `Cost leadership is not 'cheap prices' — it is a system of activities that genuinely lowers cost per unit more than rivals can.`
        },
        {
          type: "text",
          title: "Stuck in the middle",
          html: `<p>Porter warned that a firm trying to be both cheap and premium without a clear advantage in either risks being <b>"stuck in the middle"</b> — losing price-sensitive customers to the cost leader and premium customers to differentiators.</p>
<p>Nuance: some firms achieve both through innovation or a new model (Toyota's production system gave quality <i>and</i> low cost; IKEA offers design at low prices). Blue Ocean strategy, covered later, is built on that idea. But for most firms, <span class="hl">clear choices win</span>.</p>`
        },
        {
          type: "framework",
          name: "Using the value chain for strategy",
          by: "Michael Porter, Competitive Advantage (1985)",
          when: "To check whether every activity supports your chosen generic strategy.",
          steps: [
            { label: "Map activities", desc: "Inbound logistics, operations, outbound logistics, marketing & sales, service, plus support activities (infrastructure, HR, technology, procurement)." },
            { label: "Find cost drivers", desc: "What drives cost in each activity? Scale, utilisation, location, learning, linkages." },
            { label: "Find value drivers", desc: "Which activities create something customers will pay extra for?" },
            { label: "Align to strategy", desc: "Cost leaders cut cost in every activity; differentiators invest heavily where value is created." },
            { label: "Check linkages", desc: "Do activities reinforce each other (Southwest-style fit)? Remove activities that do not fit." }
          ]
        },
        {
          type: "compare",
          title: "Cost leader vs differentiator",
          headers: ["Value-chain activity", "Cost leader (e.g. Ryanair)", "Differentiator (e.g. Singapore Airlines)"],
          rows: [
            ["Operations", "One aircraft type, quick turnarounds", "Premium cabins, high service levels"],
            ["Marketing & sales", "Direct online sales, low prices", "Brand, loyalty programme, premium image"],
            ["Service", "Extras charged separately", "Service as the core differentiator"],
            ["HR", "Productivity and cost focus", "Extensive training for cabin crew"],
            ["Locations", "Secondary airports, low fees", "Major hubs, lounges"]
          ]
        },
        {
          type: "formula",
          name: "Competitive advantage = value gap",
          expr: "Economic value created = Customer willingness to pay (WTP) − Supplier opportunity cost (incl. your costs)",
          explain: "A firm has an advantage when it creates a bigger gap between WTP and cost than rivals. Differentiators raise WTP; cost leaders lower cost. (Value-based strategy, Brandenburger & Stuart; taught by Oberholzer-Gee at HBS.)",
          example: "Rival: WTP $100, cost $70 → value gap $30. You: WTP $100, cost $55 → gap $45 (cost advantage). Or WTP $130, cost $75 → gap $55 (differentiation advantage)."
        },
        {
          type: "scenario",
          prompt: "A mid-price hotel chain has average rooms, average prices and falling occupancy against budget chains and boutique hotels. Which move fits Porter's advice?",
          options: [
            { text: "Add a spa AND cut prices by 20%.", feedback: "That raises cost and lowers price — still stuck in the middle, with worse margins.", good: false },
            { text: "Pick a focus: e.g. become the best hotel for business travellers in secondary cities, and redesign the value chain for it.", feedback: "Yes — choose a segment and align every activity (location, rooms, booking, loyalty) to it.", good: true },
            { text: "Run more advertising.", feedback: "Advertising does not fix an unclear position.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Cost leadership", def: "Winning by having the lowest costs in the industry." },
        { term: "Differentiation", def: "Winning by offering something unique that customers pay more for." },
        { term: "Focus strategy", def: "Targeting a narrow segment with either low cost or differentiation." },
        { term: "Stuck in the middle", def: "Porter's term for firms with no clear cost or differentiation advantage." },
        { term: "Cost driver", def: "A factor that determines cost in an activity (scale, utilisation, learning, location)." },
        { term: "Willingness to pay (WTP)", def: "The maximum a customer would pay for a product." },
        { term: "Cross-docking", def: "Moving goods from inbound to outbound trucks with little or no storage." }
      ],
      quiz: [
        { q: "Rolex is an example of…", options: ["Cost leadership", "Cost focus", "Differentiation focus", "Stuck in the middle"], answer: 2, explain: "A premium, distinctive offer for a narrow segment." },
        { q: "What made Walmart's low prices sustainable?", options: ["Temporary discounts", "A value chain engineered for low cost (distribution, IT, purchasing)", "Government subsidies", "Selling only luxury items"], answer: 1, explain: "Structurally lower costs across activities." },
        { q: "Your WTP $80, cost $50; rival WTP $90, cost $70. Who creates more value?", options: ["You ($30 vs $20)", "Rival ($40 vs $30)", "Equal", "Cannot tell"], answer: 0, explain: "Value gap: 80 − 50 = 30 vs 90 − 70 = 20." },
        { q: "'Stuck in the middle' means…", options: ["Being a mid-size firm", "Having a regional focus", "Pricing at the market average", "Lacking a clear cost or differentiation advantage"], answer: 3, explain: "You lose to both cost leaders and differentiators." }
      ],
      challenge: {
        title: "Pick a generic strategy for a coffee chain",
        prompt: `You run 30 coffee shops in a city. Competitors: a global premium chain ($5 latte) and a convenience chain ($2.50). Your latte is $3.80, cost per cup $1.60, average shop rent is high, and customer surveys say your best feature is 'friendly baristas who remember me'. Choose a generic strategy and redesign 4 value-chain activities to fit it. Estimate the effect on value gap per cup.`,
        hints: ["Your strength is relationships — which strategy uses that?", "Think about loyalty, location and menu.", "Show WTP and cost per cup before/after."],
        model: `<p><b>Choice: differentiation focus</b> — "your neighbourhood coffee house" for regulars who value recognition and community. We cannot beat the convenience chain on cost.</p>
<ol>
<li><b>Operations:</b> smaller menu, faster bar for regulars' "usual" order (pre-ordered in app).</li>
<li><b>HR:</b> lower barista turnover with better pay and stable shifts — the same faces are the product.</li>
<li><b>Marketing:</b> loyalty app with personalised offers; local events, community boards.</li>
<li><b>Locations:</b> close 4 high-rent city-centre shops facing both rivals; open in residential areas.</li>
</ol>
<p><b>Value gap per cup:</b> today WTP ≈ $3.80, cost $1.60 → gap $2.20. Target WTP $4.20 (regulars pay for experience) with cost $1.75 (higher wages, less rent per cup) → gap <b>$2.45</b>, plus higher visit frequency.</p>`
      },
      takeaways: [
        "Choose: cost leadership, differentiation or a focus version of either.",
        "Align every value-chain activity to that choice.",
        "Advantage = a bigger gap between willingness to pay and cost than rivals.",
        "Being stuck in the middle is dangerous unless a new model breaks the trade-off."
      ]
    },

    /* ---------------------------------------------------------------- 4 */
    {
      id: "strategy-4",
      title: "Lasting advantage: VRIO & the 7 Powers",
      level: "Intermediate",
      minutes: 17,
      hook: "Good products get copied in months; real power lasts decades.",
      eli5: `If you have the best bike in class, others can buy the same bike next week. But if you are the only one who knows the secret shortcut to school, or all your friends only play at your house because everyone else is there, others cannot easily copy that. Lasting advantages are the things that are both valuable and hard to copy.`,
      blocks: [
        {
          type: "framework",
          name: "VRIO (resource-based view)",
          by: "Jay Barney (resource-based view 1991; VRIO framework in the 1990s)",
          when: "To check whether a resource or capability gives a sustained competitive advantage.",
          steps: [
            { label: "Valuable?", desc: "Does it help exploit an opportunity or neutralise a threat? If no → competitive disadvantage." },
            { label: "Rare?", desc: "Do few competitors have it? If not rare → competitive parity." },
            { label: "Inimitable (costly to imitate)?", desc: "Is it hard to copy — due to history, complexity, culture, patents? If easy → temporary advantage." },
            { label: "Organised to capture value?", desc: "Do our structure, processes and incentives exploit it? If yes to all → sustained competitive advantage." }
          ]
        },
        {
          type: "framework",
          name: "Hamilton Helmer's 7 Powers",
          by: "Hamilton Helmer, 7 Powers (2016)",
          when: "To test whether a business has a durable source of above-average profits. Each Power needs a BENEFIT (higher price or lower cost) AND a BARRIER (why rivals cannot copy).",
          steps: [
            { label: "Scale economies", desc: "Unit cost falls with volume. Barrier: rivals face high costs to reach that scale. Example: Netflix spreading content costs over many subscribers." },
            { label: "Network economies", desc: "Value rises with each user. Barrier: hard to attract users away from the biggest network. Example: LinkedIn, Visa." },
            { label: "Counter-positioning", desc: "A new model the incumbent will not copy because it would damage its existing business. Example: Vanguard's low-cost index funds vs active managers." },
            { label: "Switching costs", desc: "Customers lose value by changing suppliers. Example: enterprise software like SAP." },
            { label: "Branding", desc: "A durable reputation that raises willingness to pay. Example: Tiffany, Hermès." },
            { label: "Cornered resource", desc: "Exclusive access to a valuable asset — a patent, talent, licence. Example: Pixar's creative brain trust in its prime; a drug patent." },
            { label: "Process power", desc: "Hard-to-copy organisational processes that develop over years. Example: Toyota Production System." }
          ]
        },
        {
          type: "case",
          company: "Netflix",
          year: "2007–2020s",
          title: "Collecting Powers over time",
          situation: `Netflix started with DVDs by mail, then streaming. Licensed content was available to any rival with a chequebook.`,
          decision: `It shifted to owning original content (from House of Cards in 2013), spreading the fixed cost across a fast-growing global subscriber base, and built a strong brand.`,
          outcome: `Helmer uses Netflix as a key example of scale economies: content is a fixed cost, so the largest subscriber base can spend more per title while paying less per subscriber. Early on, streaming also counter-positioned against Blockbuster's store model.`,
          lesson: `Powers can be built step by step, and different Powers matter at different stages (Helmer: counter-positioning in take-off, scale and brand later).`
        },
        {
          type: "compare",
          title: "VRIO in action",
          headers: ["Resource", "V", "R", "I", "O", "Result"],
          rows: [
            ["A modern website", "Yes", "No", "No", "Yes", "Parity"],
            ["New AI feature built on a public model", "Yes", "Yes (briefly)", "No", "Yes", "Temporary advantage"],
            ["20 years of proprietary customer data + workflow", "Yes", "Yes", "Yes", "Yes", "Sustained advantage"],
            ["Brilliant patent nobody uses", "Yes", "Yes", "Yes", "No", "Unexploited advantage"]
          ]
        },
        {
          type: "callout",
          kind: "insight",
          title: "Counter-positioning: the incumbent's trap",
          html: `<p>Counter-positioning is powerful because the barrier is the incumbent's own rational choice. Vanguard's cheap index funds threatened active managers' high fees; copying meant cannibalising profitable products, so many waited too long. Watch for this in AI: an incumbent charging per seat may hesitate to price per outcome if it cannibalises seat revenue — giving AI-native challengers room.</p>`
        },
        {
          type: "flip",
          title: "Which Power?",
          cards: [
            { front: "Every new merchant accepting Visa makes the card more useful", back: "Network economies." },
            { front: "A hospital keeps its old records system because migration is risky", back: "Switching costs." },
            { front: "Customers pay much more for a Hermès bag than for similar leather goods", back: "Branding." },
            { front: "Index funds' low fees that active managers refused to match", back: "Counter-positioning." },
            { front: "An exclusive 20-year mining licence", back: "Cornered resource." }
          ]
        },
        {
          type: "interactive",
          widget: "decision-matrix",
          title: "Score your Powers",
          note: "List the 7 Powers as options. Score each for your company on benefit size and barrier strength (1–5). Most startups have 0–1 real Powers — the goal is to plan which one you will build."
        }
      ],
      terms: [
        { term: "Resource-based view (RBV)", def: "The theory that lasting advantage comes from a firm's unique resources and capabilities." },
        { term: "VRIO", def: "Valuable, Rare, Inimitable, Organised — test for sustained advantage." },
        { term: "7 Powers", def: "Helmer's seven sources of durable advantage, each needing a benefit and a barrier." },
        { term: "Counter-positioning", def: "A new business model incumbents do not copy because it would hurt their existing business." },
        { term: "Cornered resource", def: "Preferential access, on attractive terms, to a valuable asset." },
        { term: "Process power", def: "Embedded organisational processes that lower cost or improve quality and take years to replicate." },
        { term: "Sustained competitive advantage", def: "An advantage that persists despite competitors' efforts to copy it." }
      ],
      quiz: [
        { q: "A resource is valuable and rare but easy to copy. VRIO says…", options: ["Sustained advantage", "Temporary advantage", "Competitive disadvantage", "Parity"], answer: 1, explain: "Without inimitability, the advantage is temporary." },
        { q: "In Helmer's framework, every Power requires…", options: ["A patent", "Venture funding", "A benefit and a barrier", "A platform"], answer: 2, explain: "Benefit = better cash flow; barrier = why rivals cannot copy." },
        { q: "Netflix spending more on content per title but less per subscriber is…", options: ["Scale economies", "Branding", "Process power", "Switching costs"], answer: 0, explain: "Fixed content costs spread over a larger base." },
        { q: "Why didn't many active fund managers copy Vanguard's index funds early on?", options: ["It was illegal", "They lacked computers", "Customers hated index funds", "Copying would cannibalise their high-fee products"], answer: 3, explain: "That is counter-positioning." }
      ],
      challenge: {
        title: "Find the Power in a SaaS business",
        prompt: `You advise a vertical SaaS company serving 4,000 veterinary clinics with practice-management software (appointments, records, billing). Features are similar to 3 competitors. Net revenue retention is 112%; logo churn 6%/year; it processes payments for 70% of clients; it has 10 years of anonymised treatment and pricing data. Run VRIO on two resources and identify which of the 7 Powers it has or could build.`,
        hints: ["Features are not a Power if competitors have them.", "Look at what clinics would lose by leaving.", "Data and payments can create new benefits."],
        model: `<p><b>VRIO 1 — Software features:</b> Valuable yes, Rare no → <b>parity</b>.</p>
<p><b>VRIO 2 — 10 years of clinic data + embedded payments:</b> Valuable (benchmarking, pricing advice, fraud detection), Rare (few rivals have this depth), Inimitable (time-based — needs years), Organised? Only if a product team turns it into features → potentially <b>sustained</b>.</p>
<p><b>Powers today:</b> <b>Switching costs</b> — records, workflows, staff training, payments; 6% churn and 112% NRR confirm it. </p>
<p><b>Powers to build:</b> (1) <b>Cornered resource / data</b> — launch benchmarking ("your prices vs similar clinics") and AI-assisted treatment notes trained on its data; (2) <b>Scale economies</b> in payments — better processing rates as volume grows, passed partly to clinics; (3) possible <b>network economies</b> by connecting clinics with labs, pet-insurers and pet owners via an app.</p>
<p><b>Recommendation:</b> stop competing on feature lists; invest in data products and an insurer/lab network that rivals cannot quickly copy.</p>`
      },
      takeaways: [
        "Good products are copied; durable advantage needs a barrier.",
        "VRIO: valuable, rare, hard to imitate, and organised to exploit.",
        "Helmer's 7 Powers each need a benefit AND a barrier.",
        "Counter-positioning turns an incumbent's success into its trap."
      ]
    },

    /* ---------------------------------------------------------------- 5 */
    {
      id: "strategy-5",
      title: "Blue Oceans & disruptive innovation",
      level: "Advanced",
      minutes: 18,
      hook: "Cirque du Soleil grew in a dying industry by removing the stars of the show — the animals.",
      eli5: `Imagine everyone is fighting to sell the same toy in a crowded shop — that is a red ocean full of sharks. A blue ocean is when you invent a new kind of game nobody else sells, so there is no fight at all. Disruption is a bit different: it is when a cheap, 'not-good-enough' toy gets better and better until the fancy toy company suddenly loses its customers.`,
      blocks: [
        {
          type: "framework",
          name: "Blue Ocean: the ERRC grid",
          by: "W. Chan Kim & Renée Mauborgne, Blue Ocean Strategy (2005)",
          when: "To create uncontested market space by breaking the value–cost trade-off.",
          steps: [
            { label: "Eliminate", desc: "Which factors the industry takes for granted should be eliminated?" },
            { label: "Reduce", desc: "Which factors should be reduced well below the industry standard?" },
            { label: "Raise", desc: "Which factors should be raised well above the industry standard?" },
            { label: "Create", desc: "Which factors should be created that the industry has never offered?" },
            { label: "Draw the strategy canvas", desc: "Plot your offer vs rivals on the key factors. A blue-ocean curve looks clearly different, not just higher or lower." }
          ]
        },
        {
          type: "case",
          company: "Cirque du Soleil",
          year: "1984 onward",
          title: "Reinventing the circus",
          situation: `Traditional circuses faced declining audiences, expensive animal acts and star performers, and criticism over animal welfare. Children were being drawn to video games.`,
          decision: `Cirque eliminated animals and star performers, reduced the thrill-and-danger focus, raised the venue and artistic quality, and created theatre-style storylines, original music and dance — targeting adults and corporate clients at higher prices.`,
          outcome: `It reached audiences in many countries and became the textbook Blue Ocean example, earning revenues that took traditional circuses far longer to achieve.`,
          lesson: `You do not need to beat rivals at their game; redefine the game to reach new customers and lower costs at the same time.`
        },
        {
          type: "case",
          company: "Nintendo Wii",
          year: "2006",
          title: "Not more power — more players",
          situation: `Sony and Microsoft competed on graphics power and processing, with expensive consoles aimed at core gamers.`,
          decision: `Nintendo built a cheaper, less powerful console with intuitive motion controls and games like Wii Sports, targeting families, older people and non-gamers.`,
          outcome: `The Wii sold over 100 million units, outselling its more powerful rivals in that generation, and expanded the market to people who had never played games.`,
          lesson: `Reduce what the industry over-delivers (raw power), create what non-customers want (simplicity, social play). Later Nintendo stumbled with the Wii U, showing a blue ocean must be renewed.`
        },
        {
          type: "framework",
          name: "Disruptive innovation",
          by: "Clayton Christensen, The Innovator's Dilemma (1997)",
          when: "To spot threats to market leaders — or opportunities to attack them.",
          steps: [
            { label: "Incumbents improve for their best customers", desc: "Sustaining innovations make products better (and pricier) for demanding customers, often overshooting what most need." },
            { label: "Entrant targets the overlooked", desc: "Low-end disruption: serve over-served customers with a cheaper, 'good enough' product. New-market disruption: serve non-consumers." },
            { label: "Incumbent rationally ignores it", desc: "Margins are low and the customers are unattractive — moving up-market seems smarter." },
            { label: "Entrant improves and moves up-market", desc: "Its technology and business model improve until it is good enough for mainstream customers." },
            { label: "Mainstream switches", desc: "Incumbent loses its core — often too late to respond." }
          ]
        },
        {
          type: "timeline",
          title: "Classic disruption: steel minimills",
          items: [
            { label: "1960s–70s", desc: "Minimills (e.g. Nucor) melt scrap in electric furnaces; quality only good enough for rebar, the lowest-margin product." },
            { label: "Integrated mills", desc: "Happily give up rebar — profit improves as they focus on higher-margin products." },
            { label: "1980s", desc: "Minimills improve and move up into bars, rods and structural steel." },
            { label: "Later", desc: "Minimills move into sheet steel; integrated mills lose share and many restructure or fail." }
          ]
        },
        {
          type: "compare",
          title: "Blue Ocean vs disruption vs sustaining innovation",
          headers: ["", "Sustaining", "Disruptive", "Blue Ocean"],
          rows: [
            ["Target", "Best existing customers", "Low-end or non-consumers", "Non-customers, new demand"],
            ["Product at start", "Better than before", "Worse on traditional metrics, cheaper/simpler", "Different value curve"],
            ["Incumbent response", "Usually wins", "Usually ignores until too late", "Often slow to imitate"],
            ["Example", "Each new iPhone generation", "Netflix vs Blockbuster; minimills", "Cirque du Soleil; Wii"]
          ]
        },
        {
          type: "callout",
          kind: "myth",
          title: "Myth: every startup is 'disruptive'",
          html: `<p>Christensen himself (HBR, 2015) argued that Uber in the US was <b>not</b> classic disruption: it started with a product that was as good or better than taxis for mainstream customers, not a low-end foothold. Use the word precisely: disruption starts at the low end or with non-consumers and moves up.</p>`
        },
        {
          type: "scenario",
          prompt: "You lead a premium accounting-software company. An AI-native start-up offers 'good enough' automated bookkeeping for micro-businesses at a tenth of your price. Your sales team says these customers are unprofitable anyway. What do you do?",
          options: [
            { text: "Ignore it — they are not our customers.", feedback: "This is exactly the rational response that lets disruptors grow and move up-market.", good: false },
            { text: "Set up a separate unit, with its own P&L and cost structure, to build a low-cost AI product — even if it cannibalises the low end.", feedback: "Yes. Christensen advised autonomous units so the new model is not judged by the old model's margins.", good: true },
            { text: "Sue them.", feedback: "Rarely stops a better business model.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Red ocean", def: "An existing market where competitors fight over the same customers." },
        { term: "Blue ocean", def: "Uncontested market space created by offering a new value curve." },
        { term: "ERRC grid", def: "Eliminate–Reduce–Raise–Create tool for designing a new value curve." },
        { term: "Strategy canvas", def: "A chart comparing how competitors' offers score across key competing factors." },
        { term: "Disruptive innovation", def: "A simpler, cheaper offering that starts at the low end or with non-consumers and moves up-market." },
        { term: "Sustaining innovation", def: "Improvements that make products better for existing, demanding customers." },
        { term: "Non-consumers", def: "People who currently do not buy any product in the category." }
      ],
      quiz: [
        { q: "In the ERRC grid, Cirque du Soleil's removal of animal acts was…", options: ["Raise", "Create", "Eliminate", "Reduce"], answer: 2, explain: "It eliminated a factor the industry took for granted." },
        { q: "Disruptive innovations usually start…", options: ["At the low end or with non-consumers", "With the most demanding customers", "With the highest price", "With government contracts"], answer: 0, explain: "They begin with a 'good enough', cheaper or simpler offer." },
        { q: "Why do incumbents often ignore disruptors?", options: ["They are lazy", "It is illegal to compete", "Disruptors are always secret", "The low-end market looks unprofitable relative to their core"], answer: 3, explain: "Rational resource allocation favours high-margin customers." },
        { q: "What did Nintendo do with the Wii?", options: ["Built the most powerful console", "Targeted non-gamers with simple motion controls at lower cost", "Only sold online", "Focused on hardcore gamers"], answer: 1, explain: "It reduced power and created intuitive, social play." },
        { q: "Christensen argued Uber in the US was…", options: ["A textbook low-end disruption", "A blue ocean", "Not classic disruption, as it started with a product as good or better for mainstream customers", "A franchise model"], answer: 2, explain: "He wrote this in HBR (2015)." }
      ],
      challenge: {
        title: "Design a blue ocean for a cinema chain",
        prompt: `A cinema chain faces streaming at home. Average ticket $12, occupancy 25%, concessions provide much of the profit. Fill an ERRC grid for a new concept, describe the target non-customers, and estimate how the concept could change revenue per seat (state assumptions).`,
        hints: ["Who doesn't go to cinemas today and why?", "What do cinemas over-deliver? Under-deliver?", "Think beyond film: events, sports, gaming."],
        model: `<p><b>Non-customers:</b> groups of friends 25–45 who want a social night out; parents who cannot find a babysitter; gamers and sports fans.</p>
<ul>
<li><b>Eliminate:</b> 20 minutes of ads; generic multiplex layouts.</li>
<li><b>Reduce:</b> number of screens showing the same blockbuster; ticket-only pricing.</li>
<li><b>Raise:</b> comfort (recliners, tables), food quality, social space.</li>
<li><b>Create:</b> live events (sports, concerts, e-sports finals), private screening rooms for groups booked online, supervised kids' room during adult screenings.</li>
</ul>
<p><b>Economics (assumptions):</b> today 25% × $12 + ~$6 concessions per attendee ≈ $4.50 per seat-show. New: 40% occupancy, $18 average ticket/package, $14 food per attendee → 0.40 × (18 + 14) = <b>$12.80 per seat-show</b>, before higher food and staffing costs. Test in one site with 3 weeks of events before rolling out.</p>`
      },
      takeaways: [
        "Blue Ocean: use ERRC to create a new value curve and new demand.",
        "Disruption starts at the low end or with non-consumers, then moves up.",
        "Incumbents fail not from stupidity but from rational focus on their best customers.",
        "Respond to disruption with a separate unit and its own economics."
      ]
    },

    /* ---------------------------------------------------------------- 6 */
    {
      id: "strategy-6",
      title: "Corporate strategy: portfolios, growth, platforms & M&A",
      level: "Advanced",
      minutes: 19,
      hook: "Disney's Pixar, Marvel and Lucasfilm deals built an empire; Quaker's Snapple deal destroyed over a billion dollars in about three years.",
      eli5: `Business strategy is how one team wins its league. Corporate strategy is how a club owner decides which teams to own, which to sell, where to start a new team, and whether to buy a rival club. Sometimes buying another club makes everyone stronger; sometimes it just costs a fortune and causes fights.`,
      blocks: [
        {
          type: "matrix",
          name: "BCG Growth-Share Matrix",
          xLabel: "Relative market share (high ← → low)",
          yLabel: "Market growth →",
          cells: [
            { label: "Stars (high share, high growth)", desc: "Leaders in growing markets. Need investment to keep up, but become cash cows." },
            { label: "Question marks (low share, high growth)", desc: "Uncertain bets. Invest heavily to gain share — or exit." },
            { label: "Cash cows (high share, low growth)", desc: "Generate cash with little investment. Fund stars and question marks." },
            { label: "Dogs (low share, low growth)", desc: "Low cash generation. Fix, sell or close." }
          ]
        },
        {
          type: "matrix",
          name: "Ansoff growth matrix",
          xLabel: "Products: Existing ← → New",
          yLabel: "Markets: New (top) / Existing (bottom)",
          cells: [
            { label: "Market development", desc: "Existing products, new markets: new countries or segments (Starbucks entering China)." },
            { label: "Diversification", desc: "New products, new markets — riskiest. Related (shared capabilities) beats unrelated." },
            { label: "Market penetration", desc: "Existing products, existing markets: more share, more usage. Lowest risk." },
            { label: "Product development", desc: "New products for existing customers (Apple adding Watch and AirPods for iPhone users)." }
          ]
        },
        {
          type: "text",
          title: "Platform strategy & ecosystems",
          html: `<p>A <b>platform</b> creates value by enabling interactions between groups — e.g. app developers and users (iOS), buyers and sellers (Amazon Marketplace). Key ideas from <i>Platform Revolution</i> (Parker, Van Alstyne & Choudary, 2016):</p>
<ul><li><b>Network effects</b>: same-side (more users attract users) and cross-side (more users attract developers).</li>
<li><b>Solve chicken-and-egg</b>: subsidise one side, seed supply yourself, or start with a single-player tool that is useful without the network.</li>
<li><b>Governance</b>: rules, fees and quality control decide whether the ecosystem thrives — Apple's App Store rules and fees have faced regulatory pressure, e.g. the EU Digital Markets Act.</li>
<li><b>Ecosystem strategy</b>: orchestrate partners who create complementary value (Apple, Microsoft Azure, Shopify apps) rather than doing everything yourself.</li></ul>`
        },
        {
          type: "case",
          company: "Disney",
          year: "2006–2019",
          title: "Acquisitions that built capabilities and IP",
          situation: `Early-2000s Disney animation was struggling creatively while Pixar, its distribution partner, produced hit after hit.`,
          decision: `Under Bob Iger, Disney bought Pixar (2006, about $7.4B), Marvel (2009, about $4B), Lucasfilm (2012, about $4B) and much of 21st Century Fox (2019, about $71B). It protected Pixar's creative culture and put Pixar leaders over Disney Animation too.`,
          outcome: `Marvel and Star Wars became huge sources of films, merchandise, theme-park attractions and later Disney+ content. The Fox deal is more debated, given its size and debt.`,
          lesson: `Good acquisitions buy capabilities and assets you can use across your system (films → parks → merchandise → streaming), and protect what made the target valuable.`
        },
        {
          type: "case",
          company: "Quaker Oats & Snapple",
          year: "1994–1997",
          title: "When synergy is assumed, not proven",
          situation: `Quaker, owner of Gatorade, believed it could repeat Gatorade's success with the trendy drink brand Snapple.`,
          decision: `It paid about $1.7 billion in 1994 and tried to push Snapple through Gatorade's supermarket-focused distribution, changing marketing that had worked through small shops and quirky ads.`,
          outcome: `Snapple's sales fell and Quaker sold it in 1997 for about $300 million. The CEO left soon after.`,
          lesson: `Most failed M&A comes from overpaying and assuming synergies without understanding why the target succeeded. Test integration plans against the target's real channels and culture.`
        },
        {
          type: "formula",
          name: "Does an acquisition create value?",
          expr: "Value created for acquirer = (Standalone value of target + Synergies) − (Price paid + Integration costs)",
          explain: "The acquirer only wins if synergies exceed the premium paid plus the cost and risk of integration. Revenue synergies are usually less reliable than cost synergies.",
          example: "Target worth $500M alone. Estimated cost synergies $120M (present value), revenue synergies $80M. Price $640M (28% premium), integration $40M. Value = 500 + 200 − 680 = +$20M — thin; if revenue synergies fail, it destroys $60M."
        },
        {
          type: "interactive",
          widget: "decision-matrix",
          title: "Build vs buy vs partner",
          note: "Options: build in-house, acquire a start-up, form a partnership. Criteria: speed, cost, control, risk, cultural fit. Change the weights — notice how 'speed' often favours buying, and 'control' favours building."
        },
        {
          type: "checklist",
          title: "M&A sanity check",
          items: [
            "Clear strategic logic: which capability, market or asset do we gain?",
            "Why buy instead of build or partner?",
            "Synergies estimated separately (cost vs revenue) and stress-tested",
            "Maximum price set before negotiations (walk-away point)",
            "Integration plan: what to merge, what to leave alone, who leads",
            "Retention plan for key talent and customers"
          ]
        }
      ],
      terms: [
        { term: "Corporate strategy", def: "Decisions about which businesses a company is in and how they create more value together." },
        { term: "BCG matrix", def: "Classifies business units by market growth and relative share (stars, cash cows, question marks, dogs)." },
        { term: "Ansoff matrix", def: "Growth options by existing/new products and markets." },
        { term: "Synergy", def: "Extra value from combining businesses (cost savings or revenue gains)." },
        { term: "Acquisition premium", def: "The amount paid above the target's standalone market value." },
        { term: "Platform", def: "A business that creates value by enabling interactions between two or more groups." },
        { term: "Ecosystem", def: "A network of partners and complementors whose products together create customer value." },
        { term: "Diversification", def: "Entering new markets with new products; related diversification shares capabilities." }
      ],
      quiz: [
        { q: "A business unit with high share in a slow-growth market is a…", options: ["Star", "Question mark", "Cash cow", "Dog"], answer: 2, explain: "High share + low growth = cash cow." },
        { q: "Selling existing products in a new country is…", options: ["Market development", "Product development", "Diversification", "Market penetration"], answer: 0, explain: "Same product, new market." },
        { q: "Target standalone $300M, synergies $90M, price $360M, integration $20M. Value created?", options: ["+$30M", "+$10M", "−$20M", "+$90M"], answer: 1, explain: "300 + 90 − (360 + 20) = +$10M." },
        { q: "The main lesson of Quaker–Snapple is…", options: ["Never buy drinks brands", "Always buy at a premium", "Platforms beat products", "Do not assume synergies without understanding why the target succeeded"], answer: 3, explain: "Quaker forced Snapple into the wrong channel and marketing." },
        { q: "Which is a good way to solve a platform's chicken-and-egg problem?", options: ["Wait for both sides to arrive", "Start with a single-player tool useful without the network", "Charge both sides high fees", "Ban competitors"], answer: 1, explain: "Single-player utility (or seeding/subsidising one side) gets the network started." }
      ],
      challenge: {
        title: "Allocate a corporate portfolio",
        prompt: `A consumer-goods group has four units: (A) laundry detergent — 35% share, market growth 1%, strong cash; (B) plant-based snacks — 4% share, market growth 18%; (C) premium pet food — market leader, growth 12%; (D) disposable cameras — 8% share, market shrinking 10%/yr. It has $200M to invest and is offered a $250M acquisition of a fast-growing pet-health start-up. Classify the units with BCG, allocate the $200M and recommend on the acquisition.`,
        hints: ["Classify each unit first.", "Cash cows fund stars and chosen question marks.", "Does the acquisition fit with a star? Synergies?"],
        model: `<p><b>BCG:</b> A = cash cow; B = question mark; C = star; D = dog.</p>
<p><b>Allocation of $200M:</b></p>
<ul>
<li><b>C — Star (pet food): $110M</b> — capacity, vet-channel expansion, new markets.</li>
<li><b>B — Question mark: $60M</b> with milestones: reach 8% share in 2 years or exit.</li>
<li><b>A — Cash cow: $30M</b> maintenance + efficiency/automation to keep margins.</li>
<li><b>D — Dog: $0</b>; run for cash and sell or close within 12–18 months.</li>
</ul>
<p><b>Acquisition:</b> potentially attractive because it is <b>related diversification</b> next to the star (same pet-owner customers, vet channel, brand). Proceed only if: (1) standalone value + realistic synergies (cross-selling health products to pet-food customers, shared vet sales force) exceed $250M + integration cost; (2) founders and key scientists are retained; (3) it is run with autonomy at first. Set a walk-away price, and fund it partly from selling D.</p>`
      },
      takeaways: [
        "Corporate strategy decides which businesses to own and how they create more value together.",
        "BCG guides cash allocation; Ansoff maps growth options by risk.",
        "Platforms win through network effects and good ecosystem governance.",
        "M&A creates value only if synergies exceed premium + integration cost — be sceptical of revenue synergies."
      ]
    },

    /* ---------------------------------------------------------------- 7 */
    {
      id: "strategy-7",
      title: "Scenario planning & strategy in the AI era",
      level: "Advanced",
      minutes: 18,
      hook: "Shell did not predict the 1973 oil shock — it had simply rehearsed it, which is why it reacted faster than its rivals.",
      eli5: `Before a big school trip, a smart teacher does not just guess the weather; she packs for sun, rain and cold. Scenario planning is packing for several possible futures so you are never caught without a raincoat. Today, AI is like a huge change in the weather for business — it changes which advantages still matter.`,
      blocks: [
        {
          type: "case",
          company: "Royal Dutch Shell",
          year: "Early 1970s",
          title: "Scenarios instead of forecasts",
          situation: `Oil companies planned using single forecasts that assumed steady growth and cheap oil.`,
          decision: `A planning team including Pierre Wack developed scenarios, including one in which oil-producing countries gained power and prices rose sharply. Managers were asked to think through how they would respond.`,
          outcome: `When the 1973 oil crisis hit, Shell is widely credited with responding faster than many competitors. Scenario planning became a standard strategic tool.`,
          lesson: `The goal is not to predict the future but to change managers' mental models so they recognise and act on change early.`
        },
        {
          type: "framework",
          name: "Scenario planning in 6 steps",
          by: "Shell / Global Business Network tradition (Pierre Wack, Peter Schwartz)",
          when: "Long-term decisions under high uncertainty: big investments, market entry, technology bets.",
          steps: [
            { label: "Focal question", desc: "E.g. 'What will our industry look like in 2030 and how should we invest now?'" },
            { label: "Driving forces", desc: "List trends (PESTEL). Separate predetermined elements (ageing populations) from critical uncertainties." },
            { label: "Pick 2 key uncertainties", desc: "The most important AND most uncertain — e.g. speed of AI adoption, strictness of regulation." },
            { label: "Build a 2×2 of four scenarios", desc: "Give each a vivid name and story about how the world got there." },
            { label: "Test strategies", desc: "Which moves work in all four (robust 'no-regret' moves)? Which are bets for one world?" },
            { label: "Signposts", desc: "Define early-warning indicators that show which scenario is unfolding, and review regularly." }
          ]
        },
        {
          type: "matrix",
          name: "Example: AI scenarios for a professional-services firm (2030)",
          xLabel: "Speed of AI capability & adoption: slow ← → fast",
          yLabel: "Regulation & client trust demands: strict (top) → light (bottom)",
          cells: [
            { label: "'Careful craft' (slow, strict)", desc: "AI assists in the back office; human expertise and liability still dominate. Advantage: reputation, partner relationships." },
            { label: "'Certified machines' (fast, strict)", desc: "AI does much of the work, but only with audited, compliant systems. Advantage: trusted, governed AI + domain data." },
            { label: "'Slow drift' (slow, light)", desc: "Gradual efficiency gains; price pressure grows slowly. Advantage: cost discipline." },
            { label: "'Commodity collapse' (fast, light)", desc: "Clients self-serve with AI agents; routine work's price collapses. Advantage: distribution, proprietary data, outcome-based offers." }
          ]
        },
        {
          type: "case",
          company: "Microsoft under Satya Nadella",
          year: "2014–2020s",
          title: "Re-strategising a giant",
          situation: `When Nadella became CEO in 2014, Microsoft was seen as having missed mobile and was heavily tied to Windows licences.`,
          decision: `He reframed strategy around 'mobile-first, cloud-first': invested heavily in Azure, put Office on iPhone and Android, embraced open source and Linux, shifted to subscriptions (Office 365), pushed a 'growth mindset' culture, acquired LinkedIn (2016) and GitHub (2018), and partnered with OpenAI from 2019.`,
          outcome: `Microsoft became a leading cloud provider and an early leader in generative-AI products (Copilot), and was among the world's most valuable companies in the mid-2020s.`,
          lesson: `Strategic renewal means letting go of the old core's assumptions (Windows everywhere), building on durable assets (enterprise relationships, developers) and positioning early for the next platform shift.`
        },
        {
          type: "text",
          title: "What changes in the AI era?",
          html: `<p><b>What gets cheaper:</b> building features, writing code and content, analysis, many routine services. If AI makes something easy for you, it makes it easy for competitors — so <span class="hl">features alone are rarely a moat</span>.</p>
<p><b>What stays scarce (and gains value):</b></p>
<ul><li><b>Distribution and customer relationships</b> — owning the workflow and the user.</li>
<li><b>Proprietary data and feedback loops</b> — especially data generated by your product's use.</li>
<li><b>Trust, brand, compliance</b> — in regulated or high-stakes domains.</li>
<li><b>Switching costs from deep integration</b> into systems of record.</li>
<li><b>Counter-positioning</b> — AI-native models (pay per outcome) that incumbents hesitate to copy.</li>
<li><b>Compute, energy and talent</b> — cornered resources at the frontier.</li></ul>
<p>Practical stance for 2025–2026: treat foundation models as an increasingly capable but widely available input, and build advantage in what surrounds them.</p>`
        },
        {
          type: "compare",
          title: "Strategic questions: before vs in the AI era",
          headers: ["Question", "Classic framing", "AI-era framing"],
          rows: [
            ["Where is value created?", "Product features", "Workflow outcomes and data loops"],
            ["Pricing", "Per seat / per unit", "Per task, per outcome, hybrid credits"],
            ["Cost structure", "Labour-heavy services", "Compute + smaller expert teams"],
            ["Biggest threat", "Known rivals", "AI-native entrants and customers self-serving"],
            ["Key moat test", "Can they copy our product?", "If anyone can build our product cheaply, why do customers still choose us?"]
          ]
        },
        {
          type: "scenario",
          prompt: "You run a $50M translation-services company. AI translation quality is improving fast. Which strategy is most robust across scenarios?",
          options: [
            { text: "Ignore AI; emphasise human quality in marketing.", feedback: "Works only in a 'slow' scenario — a single bet on one future.", good: false },
            { text: "Cut prices 50% to defend volume with human translators.", feedback: "Destroys margins without changing your cost structure.", good: false },
            { text: "Shift to AI-first translation with expert human review, specialise in high-stakes domains (legal, medical), price by outcome, and track adoption signposts.", feedback: "Robust: wins in fast scenarios (AI-native cost) and strict ones (trusted expert review).", good: true }
          ]
        },
        {
          type: "checklist",
          title: "AI-era strategy review",
          items: [
            "List which of our activities AI makes 10× cheaper — for us AND for rivals",
            "Identify our moats that survive if features become cheap",
            "Run a 2×2 scenario exercise on AI speed × regulation/trust",
            "Define no-regret moves and big bets",
            "Set 3–5 signposts and review them quarterly"
          ]
        }
      ],
      terms: [
        { term: "Scenario planning", def: "Developing several plausible futures to test and strengthen strategy, rather than relying on one forecast." },
        { term: "Critical uncertainty", def: "A driving force that is both highly important and highly unpredictable." },
        { term: "Predetermined element", def: "A trend already locked in (e.g. demographics) that appears in every scenario." },
        { term: "No-regret move", def: "An action that pays off in all plausible scenarios." },
        { term: "Signpost", def: "An early indicator that shows which scenario is unfolding." },
        { term: "Strategic renewal", def: "Transforming a company's strategy, capabilities and culture to compete in a changed environment." },
        { term: "Foundation model", def: "A large AI model trained on broad data that can be adapted to many tasks." }
      ],
      quiz: [
        { q: "The main purpose of scenario planning is to…", options: ["Predict the exact future", "Prepare for several plausible futures and change mental models", "Replace budgeting", "Impress investors"], answer: 1, explain: "Scenarios improve readiness and recognition of change, not prediction." },
        { q: "In a 2×2 scenario matrix, the axes should be…", options: ["The two most certain trends", "Revenue and profit", "Two critical uncertainties", "Any two PESTEL factors"], answer: 2, explain: "Choose forces that are both important and highly uncertain." },
        { q: "Which advantage is LEAST durable in the AI era?", options: ["A feature that can be built quickly with public models", "Proprietary usage data", "Deep integration into customers' systems of record", "Trusted brand in a regulated domain"], answer: 0, explain: "If AI makes building easy for you, it does for rivals too." },
        { q: "Which was part of Microsoft's strategy under Nadella?", options: ["Keeping Office exclusive to Windows", "Exiting enterprise software", "Avoiding acquisitions", "Investing in Azure and putting Office on iOS and Android"], answer: 3, explain: "Cloud-first and cross-platform was central." },
        { q: "A 'no-regret move' is one that…", options: ["Has no cost", "Pays off in all plausible scenarios", "Never needs review", "Only works in the best case"], answer: 1, explain: "Robust across futures." }
      ],
      challenge: {
        title: "Scenario-based strategy for a bank",
        prompt: `You advise a mid-size retail bank (2 million customers, 300 branches). Uncertainties: (1) how fast customers adopt AI financial assistants (from big tech or fintechs) to manage money; (2) how strict regulators are on AI advice and open banking. Build four scenarios, name 3 no-regret moves, 1 big bet, and 4 signposts.`,
        hints: ["Axes = the two uncertainties.", "No-regret moves often involve data, cost and trust.", "Signposts should be measurable."],
        model: `<p><b>Scenarios (adoption × regulation):</b></p>
<ul>
<li><b>Fortress Banking</b> (slow, strict): branches and advisers still matter; AI internal only.</li>
<li><b>Licensed Copilots</b> (fast, strict): only regulated players can offer AI advice — trusted banks gain.</li>
<li><b>Gradual Digital</b> (slow, light): fintechs nibble at profitable products.</li>
<li><b>Agent Wars</b> (fast, light): big-tech AI agents move customers' money to the best rates automatically — banks become invisible utilities.</li>
</ul>
<p><b>No-regret moves:</b> (1) automate back-office and contact centre with AI to cut cost-to-income; (2) build clean, consented customer data and APIs; (3) invest in trust — security, fraud prevention, transparent AI governance.</p>
<p><b>Big bet:</b> launch the bank's own regulated AI money assistant (it could become the 'licensed copilot') — and offer it as an open platform others plug into.</p>
<p><b>Signposts:</b> % of customers using third-party AI assistants monthly; deposit outflows triggered by automated rate-switching; regulator statements on AI advice licensing; share of new accounts opened via partners/APIs. Review quarterly; shift from branches to digital faster if 'fast' signposts trigger.</p>`
      },
      takeaways: [
        "Scenarios prepare you for several futures; they do not predict one.",
        "Build strategy from no-regret moves plus deliberate bets, and watch signposts.",
        "In the AI era, features get cheap — distribution, data, trust and integration matter more.",
        "Strategic renewal (Microsoft) means letting go of old assumptions and riding the next platform shift."
      ]
    }
  ]
});
