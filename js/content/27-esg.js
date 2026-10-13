/* MBA Studio — Track 27: ESG & Impact */
MBA.addTrack({
  id: 'esg',
  stage: 5,
  order: 27,
  title: 'ESG & Impact',
  icon: '🌱',
  color: '#15803d',
  tagline: 'Separate real sustainability value from noise',
  summary: `Learn what ESG really measures, how climate risk and carbon prices reach the P&L, how the fast-changing reporting rules fit together, how to manage human rights in supply chains, how green and sustainability-linked finance work, and when a sustainable business model creates value — and when it simply adds cost. Balanced, evidence-based and honest about the critiques.`,
  outcomes: [
    'Explain what ESG is and is not, and run a single or double materiality assessment',
    'Measure Scope 1, 2 and 3 emissions and put a price on transition and physical climate risk',
    'Navigate ISSB, CSRD/ESRS, India\'s BRSR and the GHG Protocol — and track how they are changing',
    'Build human-rights and labour due diligence into a supply chain',
    'Evaluate green bonds, sustainability-linked loans and impact claims, and spot greenwashing',
    'Decide when sustainability creates value and design a circular business model'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'esg-1',
      title: 'What ESG is (and isn\'t): materiality, single and double',
      level: 'Beginner',
      minutes: 14,
      hook: `ESG is praised as the future of capitalism and attacked as woke marketing — both camps are often arguing about different things.`,
      eli5: `Imagine choosing a school. You look at exam results, but you also ask: is the building safe? Are pupils treated fairly? Is the head teacher honest with parents? Those extra questions do not show up in this year\'s exam scores, but they tell you a lot about how the school will do over time. ESG is a list of those extra questions for companies: how they treat the planet (E), people (S) and how they are run (G).`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than the basics',
          html: `<p>You met ESG reporting briefly in the <b>legal</b> track and supply-chain ESG in <b>operations</b>. This track goes further: what the label actually means, where the evidence is strong or weak, and how to make decisions with it.</p><p><b>ESG</b> stands for <b>Environmental, Social and Governance</b> factors. The term became popular after a 2004 UN-backed report, <i>Who Cares Wins</i>, which argued that these factors can affect long-term financial performance. Note the starting point: ESG began as a way for <b>investors to understand risk and value</b>, not as a moral score.</p>`
        },
        {
          type: 'compare', title: 'Things often confused with ESG', headers: ['Idea', 'Core question', 'Example'],
          rows: [
            ['ESG integration', 'Do these factors change our view of risk and return?', 'An analyst lowers a miner\'s valuation for tailings-dam risk'],
            ['Ethical / exclusionary investing', 'Do we refuse to own this on principle?', 'A fund excludes tobacco and weapons'],
            ['Impact investing', 'Does our money cause a measurable positive outcome?', 'A fund finances off-grid solar for rural households'],
            ['CSR / philanthropy', 'Do we give back from profits?', 'A firm funds schools near its plants (India mandates CSR spending for larger companies)'],
            ['Sustainability strategy', 'How does the business model itself change?', 'A carpet maker designs tiles to be taken back and recycled']
          ]
        },
        {
          type: 'matrix', name: 'Double materiality', xLabel: 'Impact of the company on people & planet →', yLabel: 'Financial impact on the company →',
          cells: [
            { label: 'Financially material only', desc: 'Issues that affect the company\'s value but where its own impact is small, e.g. flood risk to a software firm\'s data centres. This is the ISSB "single materiality" (investor) lens.' },
            { label: 'Double material (top priority)', desc: 'Big impact on the world AND on value, e.g. emissions for a cement maker or worker safety for a miner. Report and manage these first.' },
            { label: 'Monitor', desc: 'Low on both today. Revisit regularly — issues can become material quickly (this is called dynamic materiality).' },
            { label: 'Impact material only', desc: 'Large impact on society or nature that does not (yet) hit the company\'s finances, e.g. biodiversity loss in a supply chain. The EU CSRD requires reporting these too.' }
          ]
        },
        {
          type: 'framework', name: 'Running a materiality assessment', by: 'Common practice drawing on SASB industry standards and EU ESRS guidance', when: 'Deciding which ESG issues to manage and report',
          steps: [
            { label: '1. Long list', desc: 'Start from industry standards (the SASB standards, now maintained by the ISSB, list issues by industry) plus peers, regulations and news.' },
            { label: '2. Map impacts', desc: 'For each issue, how severe, widespread and irreversible is the company\'s impact on people and the environment, across its value chain?' },
            { label: '3. Map financial effects', desc: 'How could the issue affect revenue, costs, assets, cost of capital or licence to operate — over short, medium and long term?' },
            { label: '4. Engage stakeholders', desc: 'Test the ranking with investors, employees, customers, communities and experts. Not a popularity poll — evidence first.' },
            { label: '5. Decide & disclose', desc: 'Set thresholds, get board sign-off and explain the method. Revisit annually.' }
          ]
        },
        {
          type: 'case', company: 'Tesla and the S&P 500 ESG Index', year: '2022', title: 'Why ESG ratings confuse people',
          situation: `In May 2022, Tesla — a company whose products help cut transport emissions — was removed from the S&P 500 ESG Index, while ExxonMobil remained in it.`,
          decision: `S&P Dow Jones Indices explained that the index scores companies relative to industry peers and on a broad set of factors, and pointed to issues including Tesla\'s handling of workplace and governance matters. Elon Musk publicly called ESG "a scam".`,
          outcome: `The episode became a symbol of a real problem: ESG ratings measure different things. Academic research (for example Berg, Kölbel and Rigobon\'s "Aggregate Confusion" study) found that ratings from major providers agree far less with each other than credit ratings do.`,
          lesson: `An ESG rating is usually a measure of how well a company manages ESG <b>risks to itself</b> relative to peers — not a measure of its <b>positive impact</b> on the world. Always ask: what exactly is this score measuring?`
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: "ESG means sacrificing returns" — or "ESG always beats the market"',
          html: `<p>Both are oversimplified. Studies find that companies performing well on <b>financially material</b> issues for their industry have tended to do better, while performance on immaterial issues shows little effect. But broad ESG fund performance varies with sectors and periods — e.g. many ESG funds were underweight energy and lagged when oil and gas stocks surged in 2022. Critics such as finance professor Aswath Damodaran argue that ESG has been oversold; supporters argue that ignoring material risks is simply bad analysis. The useful middle: <b>treat material ESG factors as part of normal risk and value analysis</b>.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your board asks for "an ESG strategy" after an investor survey. The draft from a consultant lists 45 issues, all marked "high priority". What do you do?`,
          options: [
            { text: 'Adopt all 45 — more commitments show more ambition.', feedback: 'Spreading effort across 45 issues means none gets real resources, and unmet promises create greenwashing risk.', good: false },
            { text: 'Run a materiality assessment and focus on the 5–8 issues that are material for your industry and value chain.', feedback: 'Right. Materiality is the discipline that turns ESG from a list into a strategy.', good: true },
            { text: 'Copy the strategy of the highest-rated company in another industry.', feedback: 'Material issues differ by industry: water for a beverage firm, data privacy for a bank, safety for a miner.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'ESG', def: 'Environmental, Social and Governance factors used to assess a company\'s risks, impacts and conduct.' },
        { term: 'Materiality', def: 'Whether an issue is important enough to affect decisions — of investors (financial materiality) or about the company\'s impacts (impact materiality).' },
        { term: 'Single (financial) materiality', def: 'Focus on sustainability issues that could affect the company\'s cash flows, access to finance or cost of capital. The ISSB lens.' },
        { term: 'Double materiality', def: 'Considers both financial materiality and the company\'s impact on people and the environment. The EU CSRD lens.' },
        { term: 'Dynamic materiality', def: 'The idea that issues can become financially material over time as regulation, technology or public opinion changes.' },
        { term: 'ESG rating', def: 'A third-party score of a company\'s ESG performance or risk management; methods differ widely between providers.' },
        { term: 'SASB Standards', def: 'Industry-specific sustainability disclosure standards identifying financially material issues, now maintained by the ISSB.' }
      ],
      quiz: [
        {
          q: 'Which reporting lens asks about BOTH the company\'s impact on the world and the world\'s financial impact on the company?',
          options: ['Single materiality', 'Financial materiality', 'Double materiality', 'Dynamic pricing'],
          answer: 2,
          explain: 'Double materiality, used in the EU CSRD, combines impact and financial materiality.'
        },
        {
          q: 'A typical ESG risk rating primarily measures:',
          options: ['How well a company manages ESG risks to itself, relative to peers', 'The total good a company does for society', 'The company\'s carbon footprint only', 'Its charity spending'],
          answer: 0,
          explain: 'Most mainstream ratings assess exposure to and management of ESG risks, not positive impact.'
        },
        {
          q: 'Which issue is most likely financially material for a beverage company?',
          options: ['Executive office décor', 'Water scarcity in bottling regions', 'Data-centre cooling', 'Mining tailings dams'],
          answer: 1,
          explain: 'Water is a core input; scarcity affects costs, licences and community relations.'
        },
        {
          q: 'Why did many ESG funds underperform in 2022?',
          options: ['ESG funds are banned in bear markets', 'They held too much oil and gas', 'Ratings were removed', 'Many were underweight energy stocks, which surged'],
          answer: 3,
          explain: 'Sector tilts away from fossil fuels hurt relative returns when energy prices spiked.'
        },
        {
          q: 'A fund that refuses to hold tobacco stocks on principle is practising:',
          options: ['Impact investing', 'ESG integration', 'Exclusionary (ethical) investing', 'Double materiality'],
          answer: 2,
          explain: 'Exclusion is a values-based screen, distinct from integrating ESG into risk and return analysis.'
        }
      ],
      challenge: {
        title: 'Materiality for two very different firms',
        prompt: `You advise two Indian companies: <b>(1)</b> a cement producer with large kilns and quarries, and <b>(2)</b> a cloud software company with 8,000 employees.<br><br>For each, score these issues 1–5 on <i>impact</i> and <i>financial</i> materiality and pick the top three to prioritise: greenhouse-gas emissions, water use, worker health & safety, data privacy & security, employee attraction & retention, community relations, energy use in data centres, board independence.`,
        hints: ['Ask where each company\'s biggest impacts and biggest financial exposures sit.', 'Governance issues like board independence matter everywhere but rarely top the list alone.', 'Multiply or add the two scores to rank.'],
        model: `<p><b>Method</b>: score impact (I) and financial (F) materiality 1–5; rank by I + F.</p><table><thead><tr><th>Issue</th><th>Cement I/F</th><th>Software I/F</th></tr></thead><tbody><tr><td>GHG emissions</td><td><b>5/5</b></td><td>2/2</td></tr><tr><td>Water use</td><td>3/3</td><td>1/1</td></tr><tr><td>Worker health & safety</td><td><b>5/4</b></td><td>2/2</td></tr><tr><td>Data privacy & security</td><td>1/2</td><td><b>4/5</b></td></tr><tr><td>Talent attraction & retention</td><td>2/2</td><td><b>3/5</b></td></tr><tr><td>Community relations</td><td><b>4/4</b></td><td>1/1</td></tr><tr><td>Data-centre energy</td><td>1/1</td><td>3/3</td></tr><tr><td>Board independence</td><td>3/3</td><td>3/3</td></tr></tbody></table><p><b>Cement top 3</b>: emissions (10) — cement is one of the most carbon-intensive industries and carbon pricing (including the EU\'s CBAM for exports) is a real financial risk; worker safety (9); community relations around quarries (8).</p><p><b>Software top 3</b>: data privacy & security (9) — a breach brings fines under laws such as India\'s DPDP Act and lost customers; talent (8); then data-centre energy and board independence (6 each) — choose energy if growth in AI workloads is driving power demand.</p><p><b>Recommendation</b>: each company should focus resources on its top three, report them with clear metrics and targets, and revisit annually. Board independence is a baseline expectation for both, managed through governance rather than as a headline ESG theme.</p>`
      },
      takeaways: [
        'ESG started as an investor risk-and-value lens, not a morality score.',
        'Materiality is the discipline: focus on the few issues that matter for your industry.',
        'Single materiality = impact on the company; double = also the company\'s impact on the world.',
        'ESG ratings disagree widely — always ask what a score measures.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'esg-2',
      title: 'Climate economics for business: scopes, carbon prices and net zero',
      level: 'Intermediate',
      minutes: 17,
      hook: `Carbon used to be free to emit; in a growing number of markets it now has a price — and that price flows straight into margins.`,
      eli5: `Imagine a town where everyone dumps rubbish in the river for free. The river gets dirty, but no single person pays. Then the town says: "each bag dumped costs ₹100". Suddenly people find ways to make less rubbish. Carbon pricing does the same with the greenhouse gases that warm the planet — and a company that makes lots of "rubbish" needs to know its bill before it arrives.`,
      blocks: [
        {
          type: 'text', title: 'Why climate is an economic problem',
          html: `<p>Greenhouse-gas emissions are a classic <b>externality</b> (you met these in <b>economics</b>): the emitter does not pay the full cost of the damage. Policy tries to correct this with carbon prices, regulation and subsidies. For a business, climate shows up in two ways: <b>transition risk</b> (the economy changing to cut emissions) and <b>physical risk</b> (the climate itself changing).</p>`
        },
        {
          type: 'framework', name: 'GHG Protocol scopes', by: 'Greenhouse Gas Protocol (WRI & WBCSD), Corporate Standard 2001/2004; Scope 3 Standard 2011', when: 'Measuring a company\'s footprint',
          steps: [
            { label: 'Scope 1 — direct', desc: 'Emissions from sources you own or control: fuel burned in your boilers, kilns and vehicles, process emissions (e.g. chemical reactions in cement).' },
            { label: 'Scope 2 — purchased energy', desc: 'Emissions from generating the electricity, steam, heat or cooling you buy. Reported both "location-based" (grid average) and "market-based" (reflecting contracts such as renewable purchases).' },
            { label: 'Scope 3 — value chain', desc: '15 categories upstream and downstream: purchased goods, transport, business travel, use of sold products, end-of-life and more. Often the largest share by far for retailers, banks (financed emissions) and consumer brands.' },
            { label: 'Data quality', desc: 'Scope 1 and 2 use meters and bills. Scope 3 relies on supplier data and estimates (spend-based factors) — be honest about uncertainty.' },
            { label: 'Use it', desc: 'Find hotspots, set targets, price carbon into decisions and engage the suppliers who matter most.' }
          ]
        },
        {
          type: 'formula', name: 'Pricing carbon into a decision',
          expr: 'Carbon cost = Emissions (tCO₂e) × Carbon price ($/t);   Shadow-priced cost = Financial cost + Carbon cost',
          explain: 'Many companies use an <b>internal carbon price</b> — either a "shadow price" applied in investment appraisal, or an internal fee charged to business units. It tests decisions against plausible future regulation.',
          example: `Option A (gas boiler) costs $2m a year less than Option B (heat pump) but emits 40,000 more tonnes of CO₂e a year. At an internal price of $80/t, A\'s extra carbon cost = 40,000 × 80 = <b>$3.2m</b>. Shadow-priced, B is <b>$1.2m a year cheaper</b>. Break-even carbon price = 2,000,000 ÷ 40,000 = <b>$50/t</b>.`
        },
        {
          type: 'compare', title: 'Transition vs physical risk (TCFD categories)', headers: ['Type', 'Sub-types', 'Business examples'],
          rows: [
            ['Transition — policy & legal', 'Carbon prices, emissions rules, litigation', 'EU Emissions Trading System costs; the EU\'s CBAM charging importers for embedded carbon in steel, cement, aluminium and more'],
            ['Transition — technology', 'Cheaper low-carbon substitutes', 'Solar and batteries undercutting fossil power; EVs reshaping auto supply chains'],
            ['Transition — market & reputation', 'Shifting demand, investor and customer pressure', 'Buyers requiring supplier emissions data; lenders tightening terms'],
            ['Physical — acute', 'Floods, storms, heatwaves, wildfires', 'Thai floods of 2011 disrupting electronics and auto supply chains'],
            ['Physical — chronic', 'Rising temperatures, sea levels, water stress', 'Lower labour productivity in heat; water-intensive plants in stressed regions']
          ]
        },
        {
          type: 'timeline', title: 'Carbon pricing and climate milestones',
          items: [
            { label: '1997', desc: 'Kyoto Protocol introduces binding targets for developed countries and international carbon markets.' },
            { label: '2005', desc: 'EU Emissions Trading System (cap-and-trade) launches; prices were low for years, then rose substantially from 2018 after reforms.' },
            { label: '2015', desc: 'Paris Agreement: limit warming to well below 2°C and pursue 1.5°C; countries set their own pledges.' },
            { label: '2023', desc: 'EU CBAM transitional (reporting-only) phase begins; India notifies its Carbon Credit Trading Scheme to build a domestic compliance market.' },
            { label: '2026', desc: 'CBAM\'s definitive phase begins, with importers buying certificates for embedded emissions (phased in alongside reduced free allowances for EU producers).' }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Net zero and SBTi — what a credible target looks like',
          html: `<ul><li><b>Net zero</b> means cutting emissions as far as possible and neutralising only the small residual with durable carbon removals.</li><li>The <b>Science Based Targets initiative (SBTi)</b> validates corporate targets. Its net-zero standard expects deep cuts (around 90% for most sectors) by 2050 at the latest, plus <b>near-term targets</b> for 5–10 years; for 1.5°C-aligned Scope 1 and 2 targets, a reduction of roughly 4.2% a year is a common benchmark.</li><li>Offsets (avoided-emissions credits) cannot replace cuts in SBTi targets. The role of carbon credits and renewable certificates for Scope 3 has been fiercely debated, and SBTi\'s standard has been under revision — check the current version.</li><li>Red flags: targets with no interim milestones, no capex plan, exclusion of Scope 3 where it dominates, heavy reliance on cheap offsets.</li></ul>`
        },
        {
          type: 'case', company: 'Microsoft', year: '2020–2025', title: 'An ambitious target meets the AI boom',
          situation: `In 2020 Microsoft pledged to become carbon negative by 2030 and, by 2050, to remove all the carbon it has emitted since its founding. It introduced an internal carbon fee and committed large sums to carbon removal.`,
          decision: `At the same time it invested heavily in data centres for cloud and AI.`,
          outcome: `Microsoft\'s own sustainability report published in 2024 showed total emissions about 29% above its 2020 baseline, driven mainly by Scope 3 emissions from building data centres (concrete, steel, chips). The company kept its 2030 goal and responded with low-carbon materials, supplier requirements and some of the largest carbon-removal purchase agreements ever signed.`,
          lesson: `Growth can overwhelm efficiency. Credible climate strategy needs targets tied to the business plan, honest disclosure when you are off track and a realistic view of Scope 3 — where most of the hard work sits.`
        },
        {
          type: 'scenario',
          prompt: `Your logistics firm is setting a net-zero target. Marketing wants to announce "carbon neutral by 2027" by buying cheap avoidance offsets for all emissions. What do you advise?`,
          options: [
            { text: 'Go ahead — offsets are legitimate and it makes a great headline.', feedback: 'Cheap avoidance credits have faced serious quality questions, and "carbon neutral" claims based on them are increasingly challenged by regulators and courts.', good: false },
            { text: 'Set a validated near-term reduction target with a fleet and energy plan; use high-quality credits only beyond your value chain, and describe them accurately.', feedback: 'Right. Cuts first, transparent claims, and credits as a contribution rather than a substitute.', good: true },
            { text: 'Make no target at all to avoid criticism.', feedback: 'Customers and lenders increasingly require targets; silence carries its own risk.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Scope 1, 2, 3', def: 'Direct emissions; emissions from purchased energy; and all other value-chain emissions.' },
        { term: 'tCO₂e', def: 'Tonnes of carbon-dioxide equivalent: a common unit converting all greenhouse gases by their warming effect.' },
        { term: 'Carbon price', def: 'A cost per tonne of emissions, via a tax or an emissions trading system.' },
        { term: 'Internal carbon price', def: 'A price a company applies to its own emissions in decisions or charges internally.' },
        { term: 'Transition risk', def: 'Financial risk from policy, technology, market and reputation changes as the economy decarbonises.' },
        { term: 'Physical risk', def: 'Financial risk from climate hazards — acute events like floods and chronic shifts like heat.' },
        { term: 'CBAM', def: 'The EU Carbon Border Adjustment Mechanism, charging importers of certain goods for their embedded emissions.' },
        { term: 'SBTi', def: 'Science Based Targets initiative: validates whether corporate emissions targets are in line with climate science.' }
      ],
      quiz: [
        {
          q: 'A retailer\'s emissions from the electricity used in its stores are:',
          options: ['Scope 1', 'Scope 2', 'Scope 3', 'Not reported'],
          answer: 1,
          explain: 'Purchased electricity is Scope 2.'
        },
        {
          q: 'A plant emits 250,000 tCO₂e a year. At a carbon price of €70/t, what is its annual carbon cost?',
          options: ['€1.75m', '€175m', '€3.5m', '€17.5m'],
          answer: 3,
          explain: '250,000 × 70 = €17,500,000.'
        },
        {
          q: 'Which is a PHYSICAL climate risk?',
          options: ['A new carbon tax', 'Customers switching to EVs', 'Repeated flooding of a warehouse', 'Investor divestment'],
          answer: 2,
          explain: 'Flooding is an acute physical risk; the others are transition risks.'
        },
        {
          q: 'Project X saves $1.5m a year versus Project Y but emits 30,000 more tCO₂e a year. Above what internal carbon price does Y become cheaper?',
          options: ['$50/t', '$20/t', '$45/t', '$75/t'],
          answer: 0,
          explain: '1,500,000 ÷ 30,000 = $50/t.'
        },
        {
          q: 'For many consumer brands and banks, which scope is usually the largest?',
          options: ['Scope 3', 'Scope 1', 'Scope 2', 'They are always equal'],
          answer: 0,
          explain: 'Value-chain emissions (purchased goods, product use, financed emissions) typically dominate.'
        }
      ],
      challenge: {
        title: 'Should we electrify the fleet now?',
        prompt: `An Indian logistics company (illustrative) has EBITDA of $80m. Its emissions: Scope 1 (diesel trucks) 120,000 tCO₂e; Scope 2 (warehouses) 30,000; Scope 3 400,000. Its largest EU customer now requires a 1.5°C-aligned target.<br><br>Electrifying 30% of the fleet would cut Scope 1 by 36,000 tCO₂e. Annualised extra cost (vehicles, chargers) is $6m a year, offset by $2m of fuel and maintenance savings.<br><br>(a) What is Scope 1 carbon exposure at $100/t as a share of EBITDA? (b) What carbon price makes electrification break even? (c) Is it worth it at $100/t and at $150/t? (d) Recommend.`,
        hints: ['Net annual cost = 6 − 2.', 'Break-even = net cost ÷ tonnes avoided.', 'Do not forget the customer relationship and falling EV costs.'],
        model: `<p><b>(a)</b> 120,000 × $100 = <b>$12m</b> = <b>15% of EBITDA</b> if Scope 1 were fully priced — a material transition risk.</p><p><b>(b)</b> Net cost = 6 − 2 = $4m a year. Break-even = 4,000,000 ÷ 36,000 ≈ <b>$111/t</b>.</p><p><b>(c)</b> At $100/t: avoided carbon cost $3.6m vs $4m net cost → <b>−$0.4m</b> a year. At $150/t: $5.4m − $4m = <b>+$1.4m</b> a year.</p><p><b>Beyond the numbers</b>: the EU customer\'s requirement puts revenue at stake; battery and EV costs have been falling; and diesel prices are volatile. These tilt the balance further.</p><p><b>(d) Recommendation</b>: start a phased electrification on routes where EVs are already cheapest (short, urban, depot-based), aim for the 30% over 3–4 years, and set a near-term target (roughly 4.2% a year on Scope 1 and 2) for SBTi validation. Pair it with renewable power for warehouses (Scope 2) and a supplier-engagement plan for the largest Scope 3 categories. Re-run the break-even each year as costs fall.</p>`
      },
      takeaways: [
        'Climate risk reaches the P&L through transition (policy, technology, markets) and physical channels.',
        'Measure Scope 1, 2 and 3; Scope 3 is often the biggest and the hardest.',
        'An internal carbon price turns climate into a normal investment decision.',
        'Credible net-zero targets are science-based, have interim milestones and put cuts before offsets.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'esg-3',
      title: 'The reporting landscape: ISSB, CSRD, BRSR and the GHG Protocol',
      level: 'Intermediate',
      minutes: 16,
      hook: `Sustainability reporting went from voluntary brochures to audited, regulated disclosure in under a decade — and the rules are still moving under your feet.`,
      eli5: `Imagine every school used a different marking scheme: one out of 10, one out of 100, one with letters. Parents could not compare them. Sustainability reporting had the same problem, so groups wrote common marking schemes. Now a few big schemes are competing and being merged — and some countries keep changing which one you must use and when.`,
      blocks: [
        {
          type: 'callout', kind: 'warning', title: 'Status note (as of 2026)',
          html: `<p>This area is changing fast. Political shifts in 2024–2025 led to delays and simplifications in the EU and the US, while other jurisdictions moved ahead. The descriptions below reflect the general direction as of 2026. <b>Before acting, always check the latest official text from the regulator.</b></p>`
        },
        {
          type: 'text', title: 'From the overview to the detail',
          html: `<p>The <b>legal</b> track gave you a one-table overview. Here we go deeper: what each framework requires, how they overlap, and how a company — especially an Indian one selling to global customers — should prepare. A useful mental model: <b>the GHG Protocol is the ruler</b> (how to measure emissions); <b>ISSB, CSRD/ESRS and BRSR are the report cards</b> (what to disclose and to whom).</p>`
        },
        {
          type: 'framework', name: 'The four pillars (TCFD structure, now inside IFRS S2)', by: 'Task Force on Climate-related Financial Disclosures, 2017; incorporated into ISSB standards in 2023', when: 'Structuring any climate or sustainability disclosure',
          steps: [
            { label: 'Governance', desc: 'Who on the board and in management oversees sustainability risks and opportunities, and how often.' },
            { label: 'Strategy', desc: 'Which risks and opportunities matter, over what time horizons, how they affect the business model and financial plans, and how resilient the strategy is under climate scenarios.' },
            { label: 'Risk management', desc: 'How these risks are identified, assessed and integrated into enterprise risk management.' },
            { label: 'Metrics & targets', desc: 'Scope 1, 2 and 3 emissions, industry metrics, internal carbon prices, targets and progress.' }
          ]
        },
        {
          type: 'compare', title: 'The main frameworks', headers: ['Framework', 'Lens', 'Who it applies to', 'Status / direction (2026)'],
          rows: [
            ['ISSB — IFRS S1 (general) & S2 (climate)', 'Single (investor) materiality', 'Set by the IFRS Foundation; becomes mandatory only where jurisdictions adopt it', 'Issued June 2023. Around three dozen jurisdictions had adopted or were moving to adopt by 2025 (e.g. Australia, Japan via its own SSBJ standards, the UK consulting on UK SRS). The ISSB has also made targeted amendments to ease some greenhouse-gas requirements.'],
            ['EU CSRD with ESRS', 'Double materiality', 'Large EU companies and certain non-EU groups with large EU operations', 'First reports by the largest companies covered financial year 2024. In 2025 the EU "stop-the-clock" law delayed later waves by two years and an "Omnibus" simplification package moved to shrink scope sharply (towards only the largest companies) and cut the number of ESRS data points. Check final thresholds and dates.'],
            ['India BRSR (SEBI)', 'Mix of impact and financial', 'Top 1,000 listed companies by market capitalisation (mandatory since FY2022–23)', 'BRSR Core, a set of key metrics, requires assurance phased in from the largest companies. SEBI has adjusted timelines and eased value-chain disclosure and assurance requirements — check the latest circulars.'],
            ['GHG Protocol', 'Measurement method', 'Used by virtually all frameworks above', 'Core standards date from 2001–2015; revisions are under way (including contested changes to Scope 2 accounting) with updates expected over the next few years.'],
            ['US (federal & state)', 'Investor (SEC); broader (California)', 'Listed companies (SEC); large firms doing business in California', 'The SEC adopted a climate rule in 2024, stayed it pending litigation, and in 2025 stopped defending it. California\'s emissions and climate-risk laws have proceeded but faced legal challenges and timetable changes.']
          ]
        },
        {
          type: 'timeline', title: 'How we got here',
          items: [
            { label: '2001', desc: 'GHG Protocol Corporate Standard published.' },
            { label: '2017', desc: 'TCFD recommendations: governance, strategy, risk management, metrics & targets.' },
            { label: '2021', desc: 'IFRS Foundation announces the ISSB at COP26; SEBI introduces BRSR.' },
            { label: '2023', desc: 'ISSB issues IFRS S1 and S2; EU adopts the first set of ESRS; SEBI introduces BRSR Core.' },
            { label: '2025', desc: 'EU stop-the-clock delay and Omnibus simplification; US SEC rule effectively abandoned; several countries move ahead with ISSB-based rules.' },
            { label: '2026 →', desc: 'Convergence around ISSB as a global baseline in many markets, with the EU on a narrower, simplified double-materiality path. Expect continued change.' }
          ]
        },
        {
          type: 'case', company: 'The EU\'s CSRD', year: '2022–2025', title: 'From ambition to simplification',
          situation: `The CSRD, adopted in 2022, was designed to bring tens of thousands of companies into detailed, audited sustainability reporting with double materiality, using hundreds of possible ESRS data points.`,
          decision: `After the first year of reporting by large companies, business groups and several governments argued the burden was too high, especially amid concerns about European competitiveness. In 2025 the European Commission proposed an "Omnibus" simplification and the EU agreed to delay later reporting waves.`,
          outcome: `The direction since has been toward far fewer companies in scope and fewer, simpler data points, while keeping double materiality. Supporters of the original rules warned this would weaken comparability and investor information; critics of the original rules welcomed lower costs.`,
          lesson: `Regulation is a moving target. Build a <b>core data system</b> (emissions, workforce, governance, key risks) that can feed several frameworks, rather than chasing each rulebook separately.`
        },
        {
          type: 'scenario',
          prompt: `You are CFO of an Indian listed mid-cap (inside the top 1,000) that exports auto parts to Germany. Your German customer asks for product-level emissions data. Your team wants to wait until "the EU rules settle". What do you do?`,
          options: [
            { text: 'Wait — EU rules keep changing, so any work now is wasted.', feedback: 'Customer requests and CBAM-type rules are about commercial access, not just reporting law. Waiting risks losing the contract.', good: false },
            { text: 'Build a GHG Protocol-based data system now that serves BRSR (already mandatory for you), customer requests and future ISSB-style rules.', feedback: 'Right. One reliable dataset, many uses; BRSR compliance and customer retention justify it today.', good: true },
            { text: 'Send an estimate from an online calculator and move on.', feedback: 'Weak data invites challenges, and a large customer may audit it. Use proper methods and state uncertainty.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Reporting readiness',
          items: [
            'Map which frameworks apply now and which customers or lenders request data',
            'Run a materiality assessment that satisfies the strictest lens you face',
            'Measure Scope 1 and 2 with the GHG Protocol; estimate key Scope 3 categories',
            'Assign data owners, controls and an audit trail (assurance is coming)',
            'Give the board clear oversight of sustainability risks',
            'Set a calendar to review regulatory updates at least quarterly'
          ]
        }
      ],
      terms: [
        { term: 'ISSB', def: 'International Sustainability Standards Board, part of the IFRS Foundation, which issues IFRS S1 and S2.' },
        { term: 'IFRS S1 / S2', def: 'ISSB standards for general sustainability-related financial disclosures (S1) and climate-related disclosures (S2).' },
        { term: 'CSRD', def: 'EU Corporate Sustainability Reporting Directive requiring sustainability reporting under the ESRS.' },
        { term: 'ESRS', def: 'European Sustainability Reporting Standards, the detailed rules used under the CSRD.' },
        { term: 'BRSR', def: 'Business Responsibility and Sustainability Report required by SEBI for India\'s top 1,000 listed companies.' },
        { term: 'BRSR Core', def: 'A subset of key BRSR metrics subject to third-party assurance on a phased timeline.' },
        { term: 'Assurance', def: 'Independent checking of reported information; "limited" is lighter than "reasonable" assurance.' }
      ],
      quiz: [
        {
          q: 'Which framework is primarily built on single (investor) materiality?',
          options: ['EU CSRD/ESRS', 'ISSB (IFRS S1/S2)', 'Both equally', 'Neither'],
          answer: 1,
          explain: 'The ISSB focuses on information useful to investors; the CSRD uses double materiality.'
        },
        {
          q: 'What does the GHG Protocol provide?',
          options: ['A legally binding EU law', 'A rating of companies', 'Methods to measure and report greenhouse-gas emissions', 'A carbon tax'],
          answer: 2,
          explain: 'It is the measurement standard used by most reporting frameworks.'
        },
        {
          q: 'Which Indian companies must file a BRSR?',
          options: ['The top 1,000 listed companies by market capitalisation', 'All private companies', 'Only banks', 'Only companies exporting to the EU'],
          answer: 0,
          explain: 'SEBI requires the top 1,000 listed entities to file the BRSR.'
        },
        {
          q: 'Which are the four TCFD pillars?',
          options: ['Planet, People, Profit, Purpose', 'Scope 1, 2, 3 and offsets', 'Environment, Social, Governance, Ethics', 'Governance, Strategy, Risk management, Metrics & targets'],
          answer: 3,
          explain: 'These four pillars structure IFRS S2 and many other climate disclosures.'
        },
        {
          q: 'What was the overall direction of EU sustainability reporting rules in 2025?',
          options: ['Expanded to all EU businesses immediately', 'Delayed and simplified, with a narrower scope', 'Abolished completely', 'Replaced by the US SEC rule'],
          answer: 1,
          explain: 'The stop-the-clock delay and the Omnibus package moved toward fewer companies and fewer data points.'
        }
      ],
      challenge: {
        title: 'A one-dataset reporting plan',
        prompt: `You are head of sustainability at an Indian listed pharmaceutical company (top 500 by market cap). It has a subsidiary in Ireland with about 600 employees, sells to US and EU distributors and has a bank loan whose lender asks for climate data. The board has budgeted for two new hires and one software tool.<br><br>Design an 18-month reporting plan: which frameworks matter, what data to build, and what to tell the board about regulatory uncertainty.`,
        hints: ['Start with what is mandatory today (BRSR).', 'Ask whether the Irish subsidiary is likely to fall within a narrowed CSRD scope — check thresholds.', 'Think "measure once, report many times".'],
        model: `<p><b>1. What applies</b></p><ul><li><b>BRSR + BRSR Core</b>: mandatory now; assurance on core metrics on SEBI\'s phased timeline.</li><li><b>EU CSRD</b>: under the narrowed, simplified scope being finalised, a 600-employee subsidiary is <i>likely</i> to fall outside — but confirm against the final thresholds. EU customers may still request data.</li><li><b>ISSB-style expectations</b>: the lender and global distributors increasingly ask for IFRS S2-type climate information.</li><li><b>GHG Protocol</b> underpins all of them.</li></ul><p><b>2. Build one dataset (months 0–9)</b>: Scope 1 and 2 for all sites; screen all 15 Scope 3 categories and estimate the material ones (purchased APIs and packaging, distribution); workforce, safety and governance metrics already in BRSR; a climate risk register (water stress at plants, heat, carbon pricing). Assign data owners and controls so data is assurance-ready.</p><p><b>3. Report and improve (months 9–18)</b>: file BRSR with core metrics assured; produce a TCFD/IFRS S2-structured climate section for the lender and investors; answer customer questionnaires from the same data; set a near-term emissions target.</p><p><b>4. Resourcing</b>: one hire for carbon accounting, one for data and controls; the software tool to collect site and supplier data.</p><p><b>5. Message to the board</b>: "Rules are changing — especially in the EU — but the data needed is largely the same everywhere. We will build it once, comply with BRSR now, meet lender and customer requests, and review regulatory changes quarterly." Recommendation: approve the plan; do not wait for regulatory certainty.</p>`
      },
      takeaways: [
        'GHG Protocol is the ruler; ISSB, CSRD/ESRS and BRSR are the report cards.',
        'ISSB = investor materiality; CSRD = double materiality; BRSR is mandatory for India\'s top 1,000 listed companies.',
        'Rules were delayed and simplified in the EU and US in 2025 — check current texts before acting.',
        'Build one assurance-ready dataset that can feed many frameworks.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'esg-4',
      title: 'The S in ESG: human rights, labour standards and DEI evidence',
      level: 'Intermediate',
      minutes: 16,
      hook: `The cheapest T-shirt in the shop may carry a cost that no price tag shows — and when it surfaces, it lands on the brand.`,
      eli5: `Imagine your class orders cupcakes for a party from a bakery that turns out to make children work all night in a kitchen with blocked doors. You did not run the bakery, but you paid it and you ate the cupcakes. Most people would say you have some responsibility to check, and to help fix it. Companies are in the same position with the factories and farms that make their products.`,
      blocks: [
        {
          type: 'text', title: 'Why "S" is the hardest letter',
          html: `<p>Social issues cover how a company affects people: its workers, workers in its supply chain, communities and customers. They are harder to measure than carbon, and responsibility is shared across long supply chains. Yet the consequences of failure — deaths, forced labour, boycotts and import bans — are severe and very public.</p><p>You met supply-chain ESG and forced-labour compliance in <b>operations</b>; here we go into the frameworks and evidence.</p>`
        },
        {
          type: 'framework', name: 'Human rights due diligence', by: 'UN Guiding Principles on Business and Human Rights (2011) and OECD due-diligence guidance', when: 'Managing human-rights risks in operations and supply chains',
          steps: [
            { label: 'Commit (policy)', desc: 'A board-approved human-rights policy, embedded in supplier contracts. The UNGPs say states must <i>protect</i>, companies must <i>respect</i> human rights, and victims need access to <i>remedy</i>.' },
            { label: 'Identify & assess', desc: 'Map suppliers beyond tier 1; prioritise by severity (scale, scope, irremediability) and likelihood — risk to people, not just to the company.' },
            { label: 'Prevent & mitigate', desc: 'Use leverage: purchasing practices, fair prices and lead times, capacity building, collective industry action.' },
            { label: 'Track', desc: 'Audits, worker-voice tools and grievance data. Audits alone are known to miss problems.' },
            { label: 'Communicate & remediate', desc: 'Report honestly and provide remedy where harm occurred (compensation, back pay, safe re-employment).' }
          ]
        },
        {
          type: 'matrix', name: 'Prioritising supply-chain human-rights risks', xLabel: 'Your leverage over the supplier →', yLabel: 'Severity of potential harm →',
          cells: [
            { label: 'Collaborate & escalate', desc: 'Severe risk, little leverage: join industry initiatives, work with other buyers, unions and NGOs; consider responsible exit if no progress.' },
            { label: 'Act now, directly', desc: 'Severe risk, high leverage (you are a major customer): require and fund remediation with deadlines.' },
            { label: 'Monitor', desc: 'Lower severity, low leverage: track through shared audits and grievance data.' },
            { label: 'Improve through relationship', desc: 'Lower severity, high leverage: build into supplier development and purchasing terms.' }
          ]
        },
        {
          type: 'case', company: 'Rana Plaza (Bangladesh garment industry)', year: '2013', title: 'The factory collapse that changed supply-chain accountability',
          situation: `On 24 April 2013 the Rana Plaza building near Dhaka, which housed several garment factories producing for international brands, collapsed. Cracks had been seen the day before, but workers were ordered back in. More than 1,100 people were killed and thousands injured — one of the deadliest industrial disasters in history.`,
          decision: `Within weeks, a group of mainly European brands and retailers signed the <b>Accord on Fire and Building Safety in Bangladesh</b> with global and Bangladeshi unions — a legally binding agreement with independent inspections and public reports. Several North American companies formed a separate Alliance. A compensation fund for victims was also set up.`,
          outcome: `Thousands of factories were inspected and large numbers of safety hazards fixed. The Accord was renewed and in 2021 became the International Accord, with plans to extend to other countries. Critics note that wages, freedom of association and purchasing practices remained hard problems.`,
          lesson: `Voluntary codes and one-off audits had not prevented the disaster. Binding, collective, transparent arrangements with worker representation worked better. Brands learned they own the reputational risk of factories they do not own.`
        },
        {
          type: 'compare', title: 'Labour standards and laws to know', headers: ['Standard / law', 'What it requires'],
          rows: [
            ['ILO fundamental principles', 'Freedom of association and collective bargaining; no forced labour; no child labour; no discrimination; and (added 2022) a safe and healthy working environment'],
            ['UK Modern Slavery Act 2015', 'Larger companies publish annual statements on steps to address slavery and trafficking in their supply chains'],
            ['US Uyghur Forced Labor Prevention Act 2022', 'Presumes goods made wholly or partly in Xinjiang involve forced labour; importers must prove otherwise or goods are detained'],
            ['Germany\'s Supply Chain Act (2023)', 'Requires large companies to conduct human-rights and environmental due diligence'],
            ['EU Forced Labour Regulation (2024)', 'Bans products made with forced labour from the EU market, applying from late 2027'],
            ['EU due-diligence directive (CSDDD)', 'Adopted 2024; scope and timing were narrowed and delayed in the 2025 simplification process — check current status']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'DEI: what the evidence does and does not show',
          html: `<ul><li>Widely cited consulting studies (notably McKinsey\'s "Diversity Matters" series) found <b>correlations</b> between executive-team diversity and profitability. Correlation is not causation: profitable firms may simply be able to invest more in diversity.</li><li>Independent researchers (e.g. Green and Hand, 2024) tried to replicate such findings using public data on US companies and found no significant link — illustrating how fragile the "business case" headline can be.</li><li>Academic evidence is more nuanced: diverse teams can improve decisions on complex, judgement-heavy tasks when inclusion is managed well, but can also face coordination costs. Mandated board quotas (e.g. Norway, 2003–2008) have produced mixed findings on firm value.</li><li>Since 2023 (US Supreme Court decision on university admissions) and 2025 (US federal executive orders), many companies have renamed or scaled back DEI programmes; others have kept them. Laws against discrimination remain in force everywhere.</li></ul><p><b>Practical stance</b>: fair, merit-based hiring and pay, inclusion and anti-discrimination are legal and ethical baselines. Justify specific programmes with your own evidence (hiring funnel data, pay gaps, retention), not borrowed headlines.</p>`
        },
        {
          type: 'scenario',
          prompt: `A social audit finds that a tier-2 spinning mill supplying your tier-1 fabric maker employs some workers under 15. The mill supplies 30% of your cotton yarn. What do you do first?`,
          options: [
            { text: 'Cut the mill off immediately and announce it publicly.', feedback: '"Cut and run" can push children into worse, hidden work and removes your leverage to fix the problem.', good: false },
            { text: 'Work with the tier-1 supplier and a specialist NGO on a remediation plan: remove children from work, support schooling and family income, and set deadlines with consequences.', feedback: 'Right. The UNGPs stress remediation and using leverage; exit is a last resort if the supplier refuses to change.', good: true },
            { text: 'Ignore it — it is a tier-2 supplier, not yours.', feedback: 'Due-diligence laws and stakeholders increasingly hold brands responsible deep into the chain.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'UN Guiding Principles (UNGPs)', def: 'The 2011 framework of "protect, respect and remedy" setting out the human-rights responsibilities of states and companies.' },
        { term: 'Human rights due diligence', def: 'An ongoing process to identify, prevent, mitigate and account for a company\'s human-rights impacts.' },
        { term: 'Tier-1 / tier-2 supplier', def: 'Tier 1 sells directly to you; tier 2 supplies your tier-1 suppliers, and so on.' },
        { term: 'Forced labour', def: 'Work exacted under threat of penalty and not offered voluntarily, including debt bondage.' },
        { term: 'Freedom of association', def: 'Workers\' right to form and join unions and bargain collectively.' },
        { term: 'Remediation', def: 'Putting right harm that has occurred, such as compensation or safe return to school or work.' },
        { term: 'DEI', def: 'Diversity, equity and inclusion: policies and practices aimed at fair representation and treatment.' }
      ],
      quiz: [
        {
          q: 'The three pillars of the UN Guiding Principles are:',
          options: ['Plan, Do, Check', 'Protect, Respect, Remedy', 'Audit, Exit, Report', 'People, Planet, Profit'],
          answer: 1,
          explain: 'States protect, companies respect, and victims need access to remedy.'
        },
        {
          q: 'What made the post-Rana Plaza Accord different from earlier voluntary codes?',
          options: ['It was legally binding, with independent inspections and union involvement', 'It was purely a marketing campaign', 'It banned garment production in Bangladesh', 'It covered only one brand'],
          answer: 0,
          explain: 'Binding commitments, independent inspections, public reporting and worker representation were key.'
        },
        {
          q: 'In human-rights due diligence, risks are prioritised mainly by:',
          options: ['Cost to the company', 'Media attention', 'Supplier size', 'Severity and likelihood of harm to people'],
          answer: 3,
          explain: 'The UNGPs focus on risk to people — scale, scope and irremediability.'
        },
        {
          q: 'A consulting study finds diverse executive teams correlate with higher profits. What is the main caution?',
          options: ['Such studies are illegal', 'Profits cause diversity, always', 'Correlation does not prove causation, and replications have been mixed', 'Diversity cannot be measured'],
          answer: 2,
          explain: 'Reverse causality and selection effects are possible; independent replications have not consistently confirmed the link.'
        },
        {
          q: 'Your company is a major customer of a supplier with serious safety hazards. Under the leverage/severity matrix you should:',
          options: ['Monitor only', 'Exit immediately', 'Act directly — require and support remediation with deadlines', 'Wait for an industry initiative'],
          answer: 2,
          explain: 'High severity plus high leverage means you can and should drive change directly.'
        }
      ],
      challenge: {
        title: 'Fix the factory or switch?',
        prompt: `You are COO of a European apparel brand (illustrative). An inspection at a Bangladeshi tier-1 factory that makes 18% of your volume finds locked fire exits, missing fire alarms and regular 80-hour weeks. Remediation would cost about $400,000 (structural and fire-safety works) and requires 6 months. Moving production elsewhere would take 9 months and raise unit costs by about 6% on $20m of annual purchases, plus $250,000 of one-off switching costs.<br><br>(a) Compare the costs. (b) What non-financial factors matter? (c) Recommend a plan.`,
        hints: ['Annual cost of switching = 6% × $20m.', 'Consider who pays for remediation — brand, factory or shared.', 'Fire-safety hazards need immediate interim measures.'],
        model: `<p><b>(a) Costs</b></p><ul><li><b>Remediate</b>: about <b>$400,000 one-off</b>, possibly shared with the factory (e.g. brand funds 50% via a loan repaid through orders).</li><li><b>Switch</b>: 6% × $20m = <b>$1.2m a year</b> higher costs + $250,000 one-off = about <b>$1.45m in year one</b>, and new suppliers carry their own unknown risks.</li></ul><p><b>(b) Non-financial factors</b>: worker safety is urgent (locked exits are a life-threatening hazard); "cut and run" removes jobs and your leverage; excessive overtime is often driven by <i>your</i> purchasing practices (late changes, tight lead times); due-diligence laws and the International Accord expect remediation; reputational risk if a disaster occurs while you are aware.</p><p><b>(c) Recommendation</b>:</p><ol><li><b>Within 48 hours</b>: exits unlocked and verified, temporary alarms, fire wardens — or pause production until done.</li><li><b>Months 0–6</b>: co-funded remediation plan with milestones verified by independent engineers (or through the Accord if the factory is covered).</li><li><b>Overtime</b>: review your own order patterns, extend lead times, set a weekly hours cap with worker-voice monitoring.</li><li><b>Escalation</b>: if milestones are missed, reduce orders and plan a responsible exit with notice.</li></ol><p>Remediation is cheaper ($0.4m vs ~$1.45m in year one) <i>and</i> better for workers. Report the issue and progress in the next sustainability statement.</p>`
      },
      takeaways: [
        'Under the UNGPs, companies must respect human rights across their value chains — not just their own sites.',
        'Prioritise by severity to people, then use leverage; exit is a last resort.',
        'Rana Plaza showed binding, collective and transparent approaches beat voluntary codes.',
        'DEI evidence is more mixed than headlines suggest — use your own data and keep fairness as the baseline.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'esg-5',
      title: 'Sustainable finance and impact investing — and the greenwashing trap',
      level: 'Advanced',
      minutes: 17,
      hook: `Trillions of dollars carry a green label — the hard question is how much of it changes anything in the real world.`,
      eli5: `Imagine your parents promise you extra pocket money if you keep your room tidy all month. That is a sustainability-linked loan: the reward depends on hitting a goal. Now imagine instead they give you money only to buy a new shelf for your books. That is a green bond: the money must be used for a specific green thing. Greenwashing is when you say the room is tidy but just push everything under the bed.`,
      blocks: [
        {
          type: 'framework', name: 'The spectrum of capital', by: 'Common framing used by impact investors', when: 'Classifying any "sustainable" investment product',
          steps: [
            { label: 'Traditional', desc: 'Maximise financial return; ESG factors only if they show up in the numbers.' },
            { label: 'ESG integration & screening', desc: 'Consider material ESG risks and exclude certain sectors. Aims for market returns with lower risk.' },
            { label: 'Thematic / sustainable', desc: 'Target solutions (renewables, water, healthcare) for market-rate returns.' },
            { label: 'Impact investing', desc: 'Intend a measurable positive social or environmental outcome alongside a financial return, and show <b>additionality</b> — that the outcome would not have happened anyway.' },
            { label: 'Concessionary impact & philanthropy', desc: 'Accept below-market returns or none, to fund outcomes markets will not.' }
          ]
        },
        {
          type: 'compare', title: 'Green bonds vs sustainability-linked instruments', headers: ['', 'Use-of-proceeds (green/social bonds & loans)', 'Sustainability-linked bonds & loans'],
          rows: [
            ['How it works', 'Money must fund eligible projects (renewables, clean transport, green buildings)', 'Money can be used for anything; the interest rate changes if KPI targets are hit or missed'],
            ['Key guidance', 'ICMA Green Bond Principles (2014 onward); Climate Bonds Standard; EU Green Bond Standard', 'ICMA Sustainability-Linked Bond Principles; LMA/APLMA/LSTA Sustainability-Linked Loan Principles'],
            ['Best for', 'Companies with clear green capex', 'Companies whose impact comes from transforming the whole business'],
            ['Main risk', 'Projects that would have happened anyway; weak eligibility rules', 'Easy targets; tiny pricing incentives; weak KPI choice'],
            ['Examples', 'EIB Climate Awareness Bond (2007), World Bank green bond (2008), India\'s first sovereign green bonds (2023)', 'Many corporate revolving credit facilities with emissions or safety KPIs']
          ]
        },
        {
          type: 'formula', name: 'Sustainability-linked loan margin ratchet',
          expr: 'Annual interest change = Loan amount × Margin adjustment per KPI × Number of KPIs hit (or missed)',
          explain: 'A typical structure adjusts the margin by a few basis points (1 bp = 0.01%) per KPI. The incentive is often small relative to the cost of the KPI — which is why the <b>ambition of the target</b> matters more than the discount.',
          example: `A $200m revolving facility at benchmark + 2.00%, with 2 KPIs (emissions intensity and lost-time injury rate), each worth ±5 bps. Hit both: margin 1.90% → saving = 200m × 0.10% = <b>$200,000 a year</b>. Miss both: 2.10% → <b>$200,000 extra</b>. If one KPI requires a $15m investment, the loan discount is not the real reason to do it — the target is credible only if the business case or strategy already supports it.`
        },
        {
          type: 'text', title: 'Measuring impact',
          html: `<p>Credible impact investors use a <b>theory of change</b> (how activities lead to outcomes) and measure along common dimensions — the Impact Management Project\'s five: <b>What</b> outcome, <b>Who</b> experiences it, <b>How much</b> (scale, depth, duration), <b>Contribution</b> (what would have happened anyway) and <b>Risk</b> (that impact differs from expectations). Metric catalogues such as <b>IRIS+</b> (from the Global Impact Investing Network) help standardise.</p><p>Watch the gap between <b>outputs</b> (solar lamps sold) and <b>outcomes</b> (kerosene replaced, study hours gained, money saved).</p>`
        },
        {
          type: 'case', company: 'DWS (Deutsche Bank\'s asset manager)', year: '2021–2023', title: 'A greenwashing scandal at a major asset manager',
          situation: `In 2021, DWS\'s former head of sustainability, Desiree Fixler, publicly alleged that the firm had overstated how much of its assets were managed using ESG criteria. US and German regulators began investigating.`,
          decision: `DWS disputed the allegations. On 31 May 2022, police and regulators searched DWS and Deutsche Bank offices in Frankfurt in connection with the greenwashing investigation. The next day DWS announced that its CEO, Asoka Wöhrmann, would step down.`,
          outcome: `In September 2023 the US SEC charged DWS with making materially misleading statements about its ESG investment process; DWS agreed to pay a $19 million penalty, without admitting or denying the findings (alongside a separate $6 million penalty on anti-money-laundering failures). The case became a warning to the whole industry.`,
          lesson: `Greenwashing is not only a marketing risk — it is a regulatory, legal and leadership risk. Claims must match actual processes, data and controls.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Greenwashing: the regulators are watching',
          html: `<ul><li><b>EU</b>: the SFDR classifies funds (Article 6, 8, 9) and ESMA guidelines restrict the use of ESG and sustainability terms in fund names.</li><li><b>UK</b>: the FCA\'s anti-greenwashing rule (in force from 2024) requires sustainability claims to be fair, clear and not misleading.</li><li><b>India</b>: SEBI has rules for ESG mutual fund schemes and a regulatory framework for ESG rating providers.</li><li><b>Consumers</b>: regulators in many countries have challenged vague claims such as "eco-friendly" or "carbon neutral" without evidence.</li></ul><p>Related risk: <b>greenhushing</b> — companies saying nothing for fear of criticism, which also reduces useful information.</p>`
        },
        {
          type: 'checklist', title: 'Anti-greenwashing check before any claim or product',
          items: [
            'Is the claim specific and backed by data we could show a regulator?',
            'Does the product name match what is actually in the portfolio or product?',
            'Are KPIs ambitious relative to our past trend and peers — not already achieved?',
            'Is there an independent second-party opinion or assurance?',
            'Do we report outcomes, not just outputs?',
            'Are offsets, exclusions and estimates clearly disclosed?'
          ]
        }
      ],
      terms: [
        { term: 'Green bond', def: 'A bond whose proceeds must fund eligible environmental projects.' },
        { term: 'Sustainability-linked loan/bond', def: 'Debt whose interest rate changes depending on whether the borrower hits sustainability KPI targets.' },
        { term: 'Greenium', def: 'The (usually small) lower yield investors may accept on green bonds compared with similar conventional bonds.' },
        { term: 'Impact investing', def: 'Investing with the intention of generating measurable social or environmental impact alongside a financial return.' },
        { term: 'Additionality', def: 'The degree to which an outcome would not have happened without the investment.' },
        { term: 'Greenwashing', def: 'Making misleading claims about the environmental or sustainability benefits of a product, fund or company.' },
        { term: 'SFDR', def: 'EU Sustainable Finance Disclosure Regulation; classifies funds by sustainability characteristics (Articles 6, 8 and 9).' }
      ],
      quiz: [
        {
          q: 'A company issues bonds and must spend the money on solar farms and green buildings. This is a:',
          options: ['Sustainability-linked bond', 'Green (use-of-proceeds) bond', 'Convertible bond', 'Catastrophe bond'],
          answer: 1,
          explain: 'Use-of-proceeds bonds ring-fence funds for eligible projects.'
        },
        {
          q: 'A $500m loan has 3 KPIs each worth ±2.5 bps. If all are hit, what is the annual interest saving?',
          options: ['$125,000', '$12,500', '$375,000', '$1.25m'],
          answer: 2,
          explain: '3 × 2.5 bps = 7.5 bps = 0.075%; 500m × 0.075% = $375,000.'
        },
        {
          q: 'Which question tests ADDITIONALITY?',
          options: ['How many people were reached?', 'What was the financial return?', 'Was the bond oversubscribed?', 'Would this outcome have happened without our investment?'],
          answer: 3,
          explain: 'Additionality asks whether the investment caused the outcome.'
        },
        {
          q: 'In September 2023, what did the US SEC do in the DWS case?',
          options: ['Charged DWS over misleading ESG statements; DWS agreed to a $19m penalty', 'Closed the case without action', 'Banned DWS from the US', 'Fined Desiree Fixler'],
          answer: 0,
          explain: 'The SEC found materially misleading statements about DWS\'s ESG process; DWS paid $19m without admitting or denying the findings.'
        },
        {
          q: 'What is the biggest weakness of many sustainability-linked loans?',
          options: ['They are illegal in Asia', 'They cannot be used by large firms', 'Targets may be unambitious and pricing incentives small', 'They always cost more than green bonds'],
          answer: 2,
          explain: 'If KPIs are easy or rewards tiny, the label adds little real-world change.'
        }
      ],
      challenge: {
        title: 'Green bond, SLL — or neither?',
        prompt: `A mid-sized Indian steel company (illustrative) needs ₹2,000 crore. It plans ₹800 crore of capex on a scrap-based electric arc furnace and renewable power; the rest is general corporate funding. Bankers offer:<br>• <b>Green bond</b> for ₹800 crore with a greenium of about 5 bps a year.<br>• <b>Sustainability-linked loan</b> for ₹2,000 crore with a 10 bps margin step-down if emissions intensity falls 25% by 2030 (the company\'s trend is already −3% a year), and a 10 bps step-up if missed.<br><br>(a) Value the pricing benefit of each. (b) Assess credibility and greenwashing risk. (c) Recommend.`,
        hints: ['1 bp = 0.01%; ₹1 crore = ₹10 million.', 'Compare the 25% target with the existing −3% a year trend over about 5 years.', 'Which instrument matches the use of funds?'],
        model: `<p><b>(a) Pricing benefit</b></p><ul><li>Green bond: ₹800 crore × 0.05% = <b>₹0.4 crore (₹4 million) a year</b>.</li><li>SLL: ₹2,000 crore × 0.10% = <b>₹2 crore a year</b> if hit (or ₹2 crore extra if missed).</li></ul><p><b>(b) Credibility</b></p><ul><li>Green bond: the EAF and renewables are clear eligible projects with real emissions reductions — credible, provided proceeds are tracked and reported.</li><li>SLL target: a 3% annual trend over five years compounds to 1 − 0.97^5 ≈ 14%; reaching 25% needs genuine extra effort, mainly from the EAF. Reasonably ambitious, but check against sector pathways and ensure third-party verification. If the target were, say, 12%, it would be business-as-usual and a greenwashing risk.</li></ul><p><b>(c) Recommendation</b>: issue the <b>green bond for the ₹800 crore of green capex</b> (clean match of use of proceeds, investor diversification) and fund the remaining ₹1,200 crore with a <b>sustainability-linked loan</b> whose KPI is tightened to a 1.5°C-aligned sector pathway and verified annually. Either way, the financial benefit (a few crore a year) is small compared with the capex — the decision should rest on the strategy, with the labels only signalling and locking in commitment. Publish a framework with a second-party opinion before launch.</p>`
      },
      takeaways: [
        'Use-of-proceeds instruments fund green projects; sustainability-linked ones reward hitting KPIs.',
        'Target ambition and additionality matter more than the label or the small pricing benefit.',
        'Measure outcomes, not outputs, with a clear theory of change.',
        'Greenwashing is a legal and leadership risk, as the DWS case showed.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'esg-6',
      title: 'Building a sustainable business model: when it creates value and when it costs',
      level: 'Advanced',
      minutes: 18,
      hook: `The question is not "should we be sustainable?" but "where does sustainability make us a better business — and where are we just paying for a press release?"`,
      eli5: `Imagine a toy shop that, instead of selling toys that end up in the bin, rents them out and fixes broken ones. Families save money, the shop keeps customers coming back, and less plastic gets thrown away. That is a win for everyone. But if the shop spends so much on fancy recycled packaging that toys cost double and nobody buys them, it helps no one. Sustainable business is about finding the first kind of idea.`,
      blocks: [
        {
          type: 'framework', name: 'Circular economy business models', by: 'Principles popularised by the Ellen MacArthur Foundation', when: 'Redesigning products and revenue models',
          steps: [
            { label: 'Design out waste', desc: 'Use fewer, safer, recyclable materials; design for disassembly and repair.' },
            { label: 'Product-as-a-service', desc: 'Sell the outcome (light, mobility, flooring) rather than the product; the provider keeps ownership and an incentive to make it last.' },
            { label: 'Repair, resale and refurbishment', desc: 'Extend product life and earn a second (and third) margin on the same item.' },
            { label: 'Take-back and remanufacture', desc: 'Recover products at end of use and turn them into new products or materials.' },
            { label: 'Regenerate nature', desc: 'Source in ways that restore soils, forests and ecosystems (e.g. regenerative agriculture).' }
          ]
        },
        {
          type: 'case', company: 'Patagonia', year: '1985–2022', title: 'Sustainability as the brand itself',
          situation: `The outdoor clothing company built its identity around environmental activism, pledging 1% of sales to environmental groups from the mid-1980s.`,
          decision: `It encouraged repair and resale through its Worn Wear programme and ran the famous "Don\'t Buy This Jacket" advertisement on Black Friday 2011, urging customers to buy less. In 2022 founder Yvon Chouinard and his family transferred ownership: voting shares to a trust to protect the company\'s values and non-voting shares to a non-profit that receives profits not reinvested in the business.`,
          outcome: `Patagonia remained a profitable private company with intensely loyal customers. Critics point out it still sells new products, relies on global supply chains and benefits from premium pricing that few brands could match.`,
          lesson: `Sustainability creates value when it is the brand promise customers pay for and is lived consistently. It is hard to copy because it is built over decades — and it works best with patient ownership.`
        },
        {
          type: 'case', company: 'Interface', year: '1994–2020', title: 'An industrial company bets on circularity',
          situation: `In 1994 Ray Anderson, founder of carpet-tile maker Interface, described an "epiphany" about the environmental impact of his petroleum-intensive business.`,
          decision: `Interface set "Mission Zero" — eliminating its negative environmental impact by 2020. It cut energy and waste, used recycled and bio-based materials, developed carpet-tile take-back (ReEntry) and partnered on Net-Works, collecting discarded fishing nets from coastal communities to recycle into yarn.`,
          outcome: `The company reported large reductions in emissions intensity, water use and waste over the period, while staying commercially competitive, and later launched carbon-negative carpet-tile products. Progress was not linear and some recycling goals proved technically hard.`,
          lesson: `Circular models can cut costs (less material and waste) and differentiate a commodity product — but they require long-term commitment, product redesign and supplier innovation.`
        },
        {
          type: 'timeline', title: 'Unilever\'s Sustainable Living Plan: rise and recalibration',
          items: [
            { label: '2010', desc: 'CEO Paul Polman launches the Unilever Sustainable Living Plan (USLP): double the size of the business while halving its environmental footprint, and help a billion people improve health and well-being. Polman had already scrapped quarterly earnings guidance in 2009 to encourage long-term thinking.' },
            { label: '2017', desc: 'Unilever rejects an unsolicited approach from Kraft Heinz and then announces measures to boost shareholder returns.' },
            { label: '2020', desc: 'The USLP period ends with many targets met and some missed (the environmental footprint per consumer use proved hard to halve). It is replaced by the Unilever Compass strategy.' },
            { label: '2022', desc: 'Investor Terry Smith publicly criticises Unilever for being obsessed with displaying sustainability credentials at the expense of business fundamentals; activist investor Nelson Peltz joins the board.' },
            { label: '2024', desc: 'Under a new CEO, Unilever focuses on fewer, bigger brands and scales back several sustainability targets (for example, loosening its virgin-plastic reduction goal), calling them more realistic.' }
          ]
        },
        {
          type: 'matrix', name: 'When does sustainability create value?', xLabel: 'Customer or regulatory pull (willingness to pay, rules) →', yLabel: 'Cost of the sustainable option vs conventional →',
          cells: [
            { label: 'Costly bet', desc: 'Higher cost, little pull. Proceed only for risk reduction or as a deliberate long-term option; keep it small and stage-gated.' },
            { label: 'Differentiate & price', desc: 'Higher cost, strong pull. Charge a premium or secure contracts (Patagonia, green steel offtake). Value depends on proving the claim.' },
            { label: 'Hidden efficiency', desc: 'Lower cost, little pull. Energy efficiency, waste and packaging reduction — often pure profit, just under-prioritised. Do these first.' },
            { label: 'Clear win', desc: 'Lower cost and strong pull. Scale fast (e.g. renewables where cheaper than grid power, refurbished products with strong demand).' }
          ]
        },
        {
          type: 'formula', name: 'Building the sustainability value case',
          expr: 'Value = PV(revenue uplift + cost savings + avoided carbon/regulatory cost + risk reduction) − Investment',
          explain: 'Treat sustainability initiatives like any other investment. Separate hard savings (energy, materials) from softer benefits (brand, talent, lower cost of capital) and test whether the case works on hard savings alone.',
          example: `An energy-efficiency retrofit costs $2.0m and saves $500,000 a year for 10 years; at 8%, the 10-year annuity factor is 6.710. NPV on energy alone = 500,000 × 6.710 − 2,000,000 ≈ <b>+$1.36m</b>. Add 2,000 t a year of avoided CO₂e priced internally at $50/t (+$100,000 a year): NPV ≈ 600,000 × 6.710 − 2,000,000 ≈ <b>+$2.03m</b>. This sits in the "hidden efficiency" box — it should already have been done.`
        },
        {
          type: 'callout', kind: 'insight', title: 'The honest debate',
          html: `<ul><li><b>For</b>: research suggests firms that invest in issues <i>material to their industry</i> have tended to outperform; efficiency and circular models can cut costs; regulation and customer demand are moving in one direction over the long run.</li><li><b>Against</b>: Milton Friedman (1970) argued the social responsibility of business is to increase profits within the rules; critics of ESG (including former BlackRock sustainable-investing chief Tariq Fancy in 2021) argued voluntary corporate action distracts from the policy needed; "purpose" can mask weak execution.</li><li><b>Synthesis</b>: sustainability creates value when it is <b>material, measurable and tied to the business model</b>. It destroys value when it is a costly add-on that customers do not reward, or a promise the company cannot keep.</li></ul>`
        },
        {
          type: 'scenario',
          prompt: `You lead a packaged-food company. A proposal would switch all packaging to a compostable material that costs 40% more; surveys say customers "care about packaging" but sales tests show no volume gain. What do you do?`,
          options: [
            { text: 'Switch everything now — it is the right thing to do.', feedback: 'A large, unrewarded cost increase could hurt competitiveness, and compostable packaging only helps if local composting exists.', good: false },
            { text: 'Never change — customers will not pay.', feedback: 'Regulation on packaging is tightening in many markets; doing nothing risks being forced into a rushed change later.', good: false },
            { text: 'Start with lower-cost moves (lighter, recyclable mono-materials), pilot compostables where collection exists, and prepare for regulation.', feedback: 'Right. Capture the hidden-efficiency wins, test the costly bet small and watch the regulatory pull.', good: true }
          ]
        },
        {
          type: 'checklist', title: 'Designing a sustainable business model',
          items: [
            'Identify the 2–3 sustainability issues most material to your value chain',
            'Do all "hidden efficiency" projects first (energy, waste, materials)',
            'Test whether customers actually pay — through behaviour, not surveys',
            'Look for circular revenue: repair, resale, take-back, product-as-a-service',
            'Model the case on hard savings first, then add softer benefits',
            'Only make public commitments you have a funded plan to meet'
          ]
        }
      ],
      terms: [
        { term: 'Circular economy', def: 'An economic model that keeps products and materials in use and designs out waste, rather than take–make–dispose.' },
        { term: 'Product-as-a-service', def: 'Selling access to a product\'s function (e.g. lighting per hour) while the provider retains ownership.' },
        { term: 'Take-back scheme', def: 'A programme where the company collects used products to reuse, refurbish or recycle.' },
        { term: 'Purpose', def: 'A company\'s stated reason for existing beyond profit; valuable only if it guides real decisions.' },
        { term: 'Stewardship ownership', def: 'An ownership structure (e.g. Patagonia\'s trust) designed to lock in a company\'s mission and independence.' },
        { term: 'Hard vs soft benefits', def: 'Hard benefits are measurable cash savings or revenues; soft benefits (brand, talent) are real but harder to quantify.' }
      ],
      quiz: [
        {
          q: 'What was the headline goal of Unilever\'s 2010 Sustainable Living Plan?',
          options: ['Become carbon negative by 2015', 'Double the business while halving its environmental footprint', 'Sell all food brands', 'Stop advertising'],
          answer: 1,
          explain: 'The USLP aimed to decouple growth from environmental impact.'
        },
        {
          q: 'A retrofit costs $1m and saves $200,000 a year for 10 years; the 10-year annuity factor at 8% is 6.710. NPV?',
          options: ['+$1.0m', '+$342,000', '−$342,000', '+$2.0m'],
          answer: 1,
          explain: '200,000 × 6.710 = $1,342,000; minus $1m = +$342,000.'
        },
        {
          q: 'In the value matrix, an energy-efficiency project that saves money but no customer notices sits in:',
          options: ['Costly bet', 'Differentiate & price', 'Clear win', 'Hidden efficiency'],
          answer: 3,
          explain: 'Lower cost, little external pull — often pure profit, just under-prioritised.'
        },
        {
          q: 'Which is an example of product-as-a-service?',
          options: ['A lighting company charging per hour of light while owning the fittings', 'A one-off sale of a carpet', 'A discount coupon', 'A recycled-content label'],
          answer: 0,
          explain: 'The provider keeps ownership and is paid for the function, giving it an incentive to make products last.'
        },
        {
          q: 'What did Patagonia\'s 2022 ownership change do?',
          options: ['Listed the company on the stock market', 'Sold it to a private equity firm', 'Transferred it to a trust and a non-profit to protect its mission and fund environmental work', 'Merged it with a competitor'],
          answer: 2,
          explain: 'Voting shares went to a purpose trust; non-voting shares to a non-profit that receives profits not reinvested.'
        }
      ],
      challenge: {
        title: 'Should we launch a take-back and refurbish programme?',
        prompt: `An office-furniture maker (illustrative) sells 50,000 new chairs a year at $300; unit cost is $210 (margin $90). It is considering a take-back programme:<br>• Customers return old chairs for a $50 voucher; expect 10,000 returns a year.<br>• Refurbishment costs $45 a chair; refurbished chairs sell for $170.<br>• About 20% of refurbished-chair buyers would otherwise have bought a new chair (cannibalisation).<br>• About 30% of returning customers use the voucher on a new chair they would not otherwise have bought.<br>• Fixed programme costs (logistics, refurbishment centre): $400,000 a year.<br><br>(a) Calculate the annual profit impact. (b) What non-financial benefits and risks matter? (c) Recommend.`,
        hints: ['Refurbished margin = price − voucher − refurbishment.', 'Cannibalisation loses the $90 new-chair margin.', 'Treat the $50 voucher as the cost of acquiring the used chair.'],
        model: `<p><b>(a) Annual profit impact</b></p><table><thead><tr><th>Item</th><th>Calculation</th><th>$</th></tr></thead><tbody><tr><td>Refurbished margin</td><td>10,000 × (170 − 50 − 45) = 10,000 × 75</td><td>+750,000</td></tr><tr><td>Cannibalised new sales</td><td>20% × 10,000 = 2,000 × 90</td><td>−180,000</td></tr><tr><td>Extra new sales from vouchers</td><td>30% × 10,000 = 3,000 × 90</td><td>+270,000</td></tr><tr><td>Fixed programme costs</td><td></td><td>−400,000</td></tr><tr><td><b>Net</b></td><td></td><td><b>+440,000</b></td></tr></tbody></table><p>That is about 10% on top of today\'s $4.5m gross margin (50,000 × $90). Break-even on fixed costs: the programme must deliver $400,000 of contribution; at $84 net contribution per return [(750,000 − 180,000 + 270,000) ÷ 10,000], that needs about <b>4,760 returns</b> a year.</p><p><b>(b) Beyond the numbers</b>: benefits — lower material use and embodied carbon, data on product durability, a lower-price entry product for price-sensitive buyers, and stronger answers to corporate customers\' Scope 3 questions. Risks — return volumes may fall short, refurbishment quality could damage the brand, cannibalisation could be higher than 20%, and claims must be accurate to avoid greenwashing.</p><p><b>(c) Recommendation</b>: <b>launch a 12-month pilot</b> in one region with corporate customers (who return chairs in bulk, lowering logistics costs). Track returns, refurbished margin and cannibalisation; scale nationally if returns exceed about 5,000 a year at similar margins. Design future chairs for easy disassembly to cut refurbishment cost below $45 — this is where the circular model compounds.</p>`
      },
      takeaways: [
        'Circular models (repair, resale, take-back, product-as-a-service) can earn second margins and cut material costs.',
        'Patagonia and Interface show sustainability works when it is core to the model and sustained for decades.',
        'Unilever shows the tension: purpose must deliver performance or investors will push back.',
        'Do hidden-efficiency wins first; test costly bets small; commit only to what you can fund.'
      ]
    }
  ]
});
