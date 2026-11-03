/* MBA Studio — Elective series: Marketing Management, Part I — Strategy, Planning & Insight */
MBA.addTrack({
  id: 'mm-strategy',
  stage: 5,
  order: 29,
  title: 'Marketing Management I: Strategy, Planning & Insight',
  icon: '🧭',
  color: '#db2777',
  series: 'Marketing Management',
  part: 'Part I · Strategy & insight',
  tagline: 'Plan marketing like a general manager, not a campaign manager',
  summary: `The first part of the Marketing Management series. You will learn what marketing really manages, how value is created and delivered across a whole company, how corporate and business-unit plans are built, how to write a marketing plan that survives a CFO, how to scan the environment and size and forecast demand, how to run research that produces insight rather than noise, and how to control marketing with metrics and plan-vs-actual dashboards.`,
  outcomes: [
    'Explain what gets marketed, the demand states and the core concepts marketers manage',
    'Trace the evolution of business orientations and apply the holistic marketing view',
    'Build a corporate and business-unit plan: mission, SBUs, portfolio, growth gap, SWOT, goals',
    'Write a complete marketing plan and set up feedback and control',
    'Design a marketing information system, scan the macroenvironment and tell fads from megatrends',
    'Estimate market potential, forecast demand and run a research project end to end',
    'Control marketing with a metrics hierarchy, variance analysis and decision-led dashboards'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'mm-strategy-1',
      title: 'What marketing manages: needs, value and the holistic view',
      level: 'Beginner',
      minutes: 16,
      hook: `Marketing is not the department that makes the ads — it is the discipline that decides what a company should make, for whom, and why anyone would care.`,
      eli5: `Imagine your school fair. One kid makes 200 cupcakes and then shouts at people to buy them. Another kid first asks classmates what they are craving, finds out everyone wants something cold because it is hot, makes lemon ice lollies, sets up next to the football pitch, and tells the team captain, who tells everyone else. The second kid is doing marketing: understanding what people need, making something worth having, putting it where they are, and letting them know — then checking what sold so next year is even better.`,
      blocks: [
        {
          type: 'text', title: 'Beyond the 4Ps',
          html: `<p>You met the basic marketing mix in <a href="#/lesson/marketing-1">Marketing, lesson 1</a>. This series treats marketing as a <b>management discipline</b>: choosing target markets and getting, keeping and growing customers by <span class="hl">creating, delivering and communicating superior value</span>.</p><p>Two levels matter. <b>Socially</b>, marketing is how a society matches what people want with what producers can make. <b>Managerially</b>, it is the art and science of making that match profitably — and the goal is to make selling almost unnecessary, because the offering already fits the need.</p>`
        },
        {
          type: 'map', title: 'What can be marketed?', center: 'Anything people can value',
          branches: [
            { label: 'Goods', desc: 'Physical products — the bulk of what most economies make and sell.', children: ['Cars', 'Soap', 'Phones'] },
            { label: 'Services', desc: 'Intangible activities: often mixed with goods (a restaurant is food plus service).', children: ['Airlines', 'Banking', 'Repairs'] },
            { label: 'Events & experiences', desc: 'Time-bound happenings and orchestrated experiences people pay to live through.', children: ['World Cup', 'Theme parks', 'Concerts'] },
            { label: 'Persons', desc: 'Celebrities, athletes, CEOs and professionals build and market personal brands.', children: ['Athletes', 'Authors', 'Consultants'] },
            { label: 'Places & properties', desc: 'Cities, regions and nations compete for tourists, residents and investment; property is marketed as ownership rights.', children: ['Tourism', 'Investment zones', 'Real estate'] },
            { label: 'Organisations', desc: 'Universities, museums, NGOs and companies market their identity and reputation.', children: ['Employer brand', 'Corporate image'] },
            { label: 'Information', desc: 'Data, research, news and education are produced and sold.', children: ['Media', 'Courses', 'Data products'] },
            { label: 'Ideas', desc: 'Every offering carries an idea; social marketing sells ideas directly.', children: ['Road safety', 'Hand-washing', 'Saving'] }
          ]
        },
        {
          type: 'pyramid', title: 'From need to demand',
          levels: [
            { label: 'Demand', note: 'want + ability to pay', desc: 'A want for a specific product backed by willingness and ability to buy. Only this shows up in sales.' },
            { label: 'Want', note: 'need shaped by culture', desc: 'A need directed at a specific object. Hungry in Mumbai: vada pav; hungry in Milan: a panino.' },
            { label: 'Need', note: 'basic requirement', desc: 'Basic human requirements — food, safety, belonging, esteem. Marketers do not create needs; they shape how needs become wants.' }
          ]
        },
        {
          type: 'compare', title: 'The eight demand states and the marketing task', headers: ['Demand state', 'What it looks like', 'Marketing task'],
          rows: [
            ['Negative', 'People dislike and even avoid it (vaccinations, dental work)', 'Understand why; reduce fear and friction'],
            ['Nonexistent', 'Unaware or uninterested (a new farming tool)', 'Connect the benefit to a felt need'],
            ['Latent', 'A strong need no current product meets', 'Measure it and develop an offering'],
            ['Declining', 'Buyers buy less or stop', 'Find new uses, new markets or revitalise'],
            ['Irregular', 'Varies by season, day or hour (hotels, transit)', 'Smooth with pricing and promotion'],
            ['Full', 'Buying everything put on the market', 'Defend quality and satisfaction'],
            ['Overfull', 'More demand than capacity (a popular national park)', 'Demarket temporarily: raise prices, ration'],
            ['Unwholesome', 'Demand harmful to the buyer or society (smoking)', 'Discourage with communication and policy']
          ]
        },
        {
          type: 'map', title: 'The core concepts marketers manage', center: 'Marketing management',
          branches: [
            { label: 'Needs, wants, demands', desc: 'Including stated, real, unstated, delight and secret needs — what customers say is rarely all they mean.' },
            { label: 'Target markets & positioning', desc: 'Split the market into segments, pick the ones you serve best, and own a clear place in their minds.' },
            { label: 'Offerings & brands', desc: 'The value proposition made tangible; a brand is an offering from a known source.' },
            { label: 'Value & satisfaction', desc: 'Value = perceived benefits relative to cost; satisfaction = performance versus expectations.' },
            { label: 'Marketing channels', desc: 'Communication channels (media, social, word of mouth), distribution channels (retail, online) and service channels (banks, insurers, carriers).' },
            { label: 'Supply chain', desc: 'The longer line from raw material to the final buyer; each firm captures only part of the value.' },
            { label: 'Competition', desc: 'All rival offerings and substitutes a buyer might consider — including doing nothing.' },
            { label: 'Marketing environment', desc: 'The task environment (firm, suppliers, distributors, customers) plus the broad environment (demographic, economic, social, natural, technological, political-legal).' }
          ]
        },
        {
          type: 'timeline', title: 'How business orientations evolved',
          items: [
            { label: 'Production', desc: 'Customers want cheap, available products: focus on efficiency and mass distribution. Ford’s early Model T is the classic image.' },
            { label: 'Product', desc: 'Customers want the best quality and features. Trap: building a “better mousetrap” nobody asked for.' },
            { label: 'Selling', desc: 'Customers will not buy enough unless pushed. Common with overcapacity and unsought goods (insurance, timeshares). Sells what you make.' },
            { label: 'Marketing', desc: 'From the 1950s: find the right products for your customers rather than the right customers for your products. Makes what will sell.' },
            { label: 'Holistic marketing', desc: 'Today: everything matters — customers, employees, partners, society and financial returns are designed as one integrated system.' }
          ]
        },
        {
          type: 'map', title: 'The four dimensions of holistic marketing', center: 'Holistic marketing',
          branches: [
            { label: 'Relationship marketing', desc: 'Build long-term, mutually satisfying ties with customers, employees, partners (channels, suppliers, agencies) and the financial community.', children: ['Customers', 'Partners', 'Employees'] },
            { label: 'Integrated marketing', desc: 'Design every activity — product, price, channels, communications — so the whole is greater than the sum of the parts.', children: ['Consistent message', 'Mix synergy'] },
            { label: 'Internal marketing', desc: 'Hire, train and motivate staff who want to serve customers well; make every department think customer-first.', children: ['Training', 'Incentives', 'Culture'] },
            { label: 'Performance marketing', desc: 'Understand the financial and non-financial returns of marketing, plus legal, ethical, social and environmental effects.', children: ['ROI', 'Brand equity', 'Social responsibility'] }
          ]
        },
        {
          type: 'compare', title: 'The classic mix vs the modern “four Ps” of management', headers: ['Classic marketing mix', 'Modern management view', 'What changes'],
          rows: [
            ['Product', 'People', 'Employees are part of the offer; customers are people with lives, not just “consumers”.'],
            ['Place', 'Processes', 'Structure, discipline and creativity in how marketing gets done, including idea generation.'],
            ['Promotion', 'Programmes', 'All consumer-facing activities — online and offline, old and new Ps — integrated toward goals.'],
            ['Price', 'Performance', 'Outcomes measured financially (profit, brand and customer equity) and beyond (social, legal, environmental).']
          ]
        },
        {
          type: 'case', company: 'Dove (Unilever)', year: '2004 onward', title: 'Marketing an idea, not just a soap bar',
          situation: `Personal-care advertising had long relied on narrow, idealised images of beauty. Unilever’s own research for Dove suggested that very few women around the world described themselves as beautiful.`,
          decision: `In 2004 Dove launched the <b>Campaign for Real Beauty</b>, featuring women of different ages, shapes and skin tones, and later added a self-esteem education programme for young people. Dove was marketing an <b>idea</b> — a broader definition of beauty — alongside its products.`,
          outcome: `The campaign became one of the most discussed in advertising history and is widely credited with revitalising the brand. It also drew criticism: sceptics pointed out that Unilever sold other brands with very different imagery, and some later Dove executions were accused of tone-deafness.`,
          lesson: `Holistic marketing in action: a brand position (ideas), internal alignment and social impact were linked to performance. But integration is the test — an idea brand is judged on everything the company does, not just one campaign.`
        },
        {
          type: 'checklist', title: 'The marketing management task list',
          items: [
            'Develop marketing strategies and plans for the long and short run',
            'Capture insights: monitor the environment and research customers',
            'Connect with customers: understand how they buy and build loyalty',
            'Build strong brands and track competitors',
            'Shape the market offering: product, service and price',
            'Deliver value through channels and supply chains',
            'Communicate value with integrated communications',
            'Create long-term growth: new offerings and responsible marketing'
          ]
        }
      ],
      terms: [
        { term: 'Marketing management', def: 'Choosing target markets and getting, keeping and growing customers by creating, delivering and communicating superior value.' },
        { term: 'Demand', def: 'A want for a specific product backed by the ability and willingness to pay.' },
        { term: 'Latent demand', def: 'A strong need that no existing product satisfies — an opportunity waiting for an offering.' },
        { term: 'Demarketing', def: 'Deliberately reducing demand, temporarily or permanently, when it exceeds capacity or is harmful.' },
        { term: 'Holistic marketing', def: 'An approach that treats relationship, integrated, internal and performance marketing as one connected system.' },
        { term: 'Selling concept', def: 'The belief that customers will not buy enough unless aggressively pushed; it sells what the firm makes.' },
        { term: 'Marketing concept', def: 'The belief that success comes from finding the right products for customers, rather than customers for products.' }
      ],
      quiz: [
        {
          q: 'A city’s public hospitals struggle because people avoid preventive check-ups out of fear. Which demand state is this?',
          options: ['Latent demand', 'Irregular demand', 'Negative demand', 'Overfull demand'],
          answer: 2,
          explain: 'People actively dislike and avoid the service. The task is to understand the fear and reduce it — not to “sell harder”.'
        },
        {
          q: 'Which statement best describes the selling orientation?',
          options: ['Make what will sell', 'Sell what you make, using aggressive promotion', 'Make the highest-quality product possible', 'Build long-term relationships with all stakeholders'],
          answer: 1,
          explain: 'The selling concept starts with the factory’s output and pushes it. The marketing concept starts with the customer’s need.'
        },
        {
          q: 'A national park is so crowded that the trails erode. It raises entry prices and introduces timed permits. This is:',
          options: ['Demarketing an overfull demand', 'Stimulating latent demand', 'Synchromarketing a negative demand', 'Remarketing a declining demand'],
          answer: 0,
          explain: 'Overfull demand exceeds capacity; reducing it on purpose is demarketing.'
        },
        {
          q: 'Which holistic-marketing dimension is most directly about training call-centre staff to solve problems at the first contact?',
          options: ['Performance marketing', 'Integrated marketing', 'Relationship marketing with investors', 'Internal marketing'],
          answer: 3,
          explain: 'Internal marketing is hiring, training and motivating people inside the firm to serve customers well.'
        },
        {
          q: 'A gym keeps 1,000 members paying $40 a month. Monthly churn falls from 5% to 3% after it fixes crowding at peak hours. Roughly how many more members does it keep in a year (ignoring new joiners)?',
          options: ['About 50', 'About 150', 'About 240', 'About 20'],
          answer: 1,
          explain: 'After 12 months: 1,000 × 0.95^12 ≈ 540 vs 1,000 × 0.97^12 ≈ 694. Difference ≈ 154, so about 150. Retention is a marketing outcome, not just an operations one.'
        }
      ],
      challenge: {
        title: 'Diagnose the orientation of a struggling language school',
        prompt: `An (illustrative) language school has 600 students paying $120 a month. Its leaders talk mostly about their “award-winning curriculum”, and when enrolment dips they run discount blitzes and push the sales team to call old leads. Monthly churn is 6%; exit surveys say lessons clash with work shifts and teachers rarely follow up. Marketing spends $18,000 a month and wins 40 new students.<br><br>(a) Which orientation(s) does the school show? (b) Calculate its monthly revenue, revenue lost to churn and acquisition cost per student. (c) Redesign the approach using the four holistic-marketing dimensions, with one measurable target each.`,
        hints: ['Look for “product” and “selling” clues in how leaders behave.', 'Churned students per month = 600 × 6%. Cost per new student = spend ÷ new students.', 'Holistic: relationship, integrated, internal, performance — one action and one metric for each.'],
        model: `<p><b>(a) Diagnosis.</b> A <b>product orientation</b> (pride in the curriculum, whatever students need) plus a <b>selling orientation</b> when demand dips (discounts, pushy calls). Neither starts from the student’s real constraint: time.</p><p><b>(b) Numbers.</b></p><ul><li>Monthly revenue: 600 × $120 = <b>$72,000</b></li><li>Students lost per month: 600 × 6% = 36 → revenue lost ≈ 36 × $120 = <b>$4,320 per month</b> of recurring revenue, every month</li><li>Cost per new student: $18,000 ÷ 40 = <b>$450</b>, i.e. almost 4 months of fees just to replace a leaver</li><li>Net growth: +40 − 36 = only +4 students a month — marketing money is mostly refilling a leaky bucket.</li></ul><p><b>(c) Holistic redesign.</b></p><ul><li><b>Relationship:</b> a teacher check-in after weeks 2 and 6; target churn 6% → 4% (saves 12 students ≈ $1,440 recurring revenue a month).</li><li><b>Integrated:</b> flexible evening and weekend slots plus recorded catch-up lessons, and an ad message about “fits around your shifts”; target 50% of new leads citing flexibility.</li><li><b>Internal:</b> train and reward teachers on retention and satisfaction, not only on hours taught; target staff satisfaction ≥ 4/5.</li><li><b>Performance:</b> track cost per retained student-month and net student growth; stop discount blitzes unless they lift 6-month retention.</li></ul><p><b>Recommendation:</b> move from “sell what we teach” to “teach how students can learn”. Fixing churn first is cheaper than buying more $450 students.</p>`
      },
      takeaways: [
        'Marketing manages demand — sometimes to raise it, sometimes to shift or reduce it.',
        'Needs are given; marketers shape how needs become wants and wants become demand.',
        'Orientations evolved from production to holistic marketing; many firms still slip back to “sell what we make”.',
        'Holistic marketing integrates relationships, the mix, internal culture and measured performance.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'mm-strategy-2',
      title: 'Creating and delivering value: value chains, competencies and corporate planning',
      level: 'Beginner',
      minutes: 18,
      hook: `A brilliant product dies if the company behind it cannot sense the market, build the offer, win customers and deliver on time — value is a relay race, not a solo sprint.`,
      eli5: `Think of a pizza shop. Someone notices what people like (more veggie options), someone invents the recipe, someone buys good tomatoes, someone bakes, someone delivers hot, and someone answers when an order goes wrong. If any one of them drops the ball, the customer only remembers the cold pizza. A big company is the same shop with many more people — so its bosses must decide which shops to open, which to close, and what everyone is especially good at.`,
      blocks: [
        {
          type: 'flow', title: 'The value creation and delivery sequence', when: 'Use it to check that strategy starts with the customer, not the factory',
          steps: [
            { label: 'Understand customers', desc: 'Research needs, frustrations and jobs to be done before any design work.' },
            { label: 'Choose the value', desc: 'Segment the market, select targets and define the positioning — strategic marketing done before a product exists.' },
            { label: 'Provide the value', desc: 'Specify the product and service, set the price, source, make and distribute.' },
            { label: 'Communicate the value', desc: 'Sales force, advertising, content, promotion, PR and the experience itself.' },
            { label: 'Does delivered value match the promise?', kind: 'decision', desc: 'Check satisfaction, retention and margin against the plan.', branches: [ { label: 'Yes', to: 'Scale and defend' }, { label: 'No', to: 'Go back to choosing or providing the value' } ] },
            { label: 'Capture value and learn', desc: 'Profit, loyalty and data feed the next round of choices.' }
          ]
        },
        {
          type: 'cycle', title: 'The five core business processes that deliver value', center: 'Customer value',
          steps: [
            { label: 'Market sensing', desc: 'Gather and act on information about the market, customers and competitors.' },
            { label: 'New-offering realisation', desc: 'Research, develop and launch high-quality offerings quickly and within budget.' },
            { label: 'Customer acquisition', desc: 'Define target markets and prospect for new customers.' },
            { label: 'Customer relationship management', desc: 'Build deeper understanding, relationships and offerings for individual customers.' },
            { label: 'Fulfilment management', desc: 'Receive and approve orders, ship on time and collect payment.' }
          ]
        },
        {
          type: 'text', title: 'Value chains and core competencies',
          html: `<p>The value chain (primary and support activities — see <a href="#/lesson/strategy-3">Strategy, lesson 3</a>) is how one firm creates value. Marketing’s twist: the five processes above <b>cut across</b> departments, so a firm wins by managing them as end-to-end flows and extending them into a <b>value delivery network</b> of suppliers and distributors.</p><p>A <span class="hl">core competency</span> passes three tests: it (1) contributes substantially to customer benefits, (2) can be applied across many markets, and (3) is hard for rivals to copy. Firms increasingly keep competencies in-house and outsource the rest.</p>`
        },
        {
          type: 'case', company: 'Honda', year: '1950s onward', title: 'One competency, many markets',
          situation: `Honda started out making small engines for bicycles and built its reputation on motorcycles in the 1950s and 1960s.`,
          decision: `Rather than defining itself as a motorcycle company, Honda treated <b>small, efficient, reliable engines and power trains</b> as a core competency and carried it into cars, outboard marine engines, lawnmowers, portable generators and, much later, a light business jet.`,
          outcome: `Honda became a leading global carmaker and one of the world’s largest engine producers across product categories. The competency passed all three tests: it drove customer benefits (reliability, fuel economy), applied across markets, and took decades to build.`,
          lesson: `Define the business by what you are uniquely good at and what customers need, not only by today’s product. Corporate planners use competencies to choose which growth paths are realistic.`
        },
        {
          type: 'pyramid', title: 'The four levels of planning',
          levels: [
            { label: 'Corporate level', note: 'which businesses?', desc: 'Sets the mission, the portfolio of businesses, resource allocation and which units to start or exit.' },
            { label: 'Division level', note: 'how to fund units?', desc: 'Allocates funds among the business units within each division.' },
            { label: 'Business-unit level', note: 'how to win?', desc: 'Develops a strategic plan to bring each unit to a profitable future.' },
            { label: 'Product level', note: 'which programme?', desc: 'Each product line or brand writes a marketing plan to reach its objectives in its market.' }
          ]
        },
        {
          type: 'framework', name: 'Corporate strategic planning: the five activities', when: 'Annual or multi-year corporate planning; also when a portfolio feels unfocused',
          steps: [
            { label: '1. Define the corporate mission', desc: 'Answer: what is our business, who is the customer, what do they value, what should we be? Good missions focus on a few goals, stress values, define competitive spheres (industry, products, competences, segments, vertical and geographic scope) and take a long view.' },
            { label: '2. Establish strategic business units (SBUs)', desc: 'An SBU is a single business (or set of related ones) with its own competitors and a manager responsible for strategy and profit. Define it by customer group, need and technology — not by product alone.' },
            { label: '3. Allocate resources to each SBU', desc: 'Portfolio tools (growth-share, attractiveness-strength) are a start, but modern practice values each SBU by its shareholder-value potential: can it be worth more under us than elsewhere?' },
            { label: '4. Assess growth opportunities', desc: 'Plan new businesses and downsize old ones to close the gap between desired and projected sales (see the map below).' },
            { label: '5. Shape organisation and culture', desc: 'Structures, policies and shared ways of working must fit the strategy. Strategy rarely beats a culture that contradicts it.' }
          ]
        },
        {
          type: 'map', title: 'Filling the strategic-planning gap', center: 'Growth opportunities',
          branches: [
            { label: 'Intensive growth', desc: 'Grow inside current businesses (the product-market grid; basics in strategy-6).', children: ['Market penetration', 'Market development', 'Product development'] },
            { label: 'Integrative growth', desc: 'Move along the industry chain or buy rivals to capture more of the value.', children: ['Backward (suppliers)', 'Forward (distributors)', 'Horizontal (competitors)'] },
            { label: 'Diversification growth', desc: 'Enter new businesses where the firm can bring real strengths.', children: ['Concentric (related tech/marketing)', 'Horizontal (new products, same customers)', 'Conglomerate (unrelated)'] },
            { label: 'Downsizing & divesting', desc: 'Prune, harvest or sell weak businesses to free money and attention for the core.', children: ['Harvest', 'Divest', 'Close'] }
          ]
        },
        {
          type: 'case', company: 'Procter & Gamble', year: '2014–2017', title: 'Growing by getting smaller',
          situation: `By the early 2010s P&G’s portfolio had grown to well over 150 brands, many of them small, slow-growing and absorbing management attention.`,
          decision: `In 2014 the company announced it would sell, discontinue or merge roughly 90–100 brands and concentrate on a much smaller set of core brands that already generated the large majority of its sales and profit. The best-known move was transferring a large group of beauty brands to Coty in 2016; Duracell went to Berkshire Hathaway.`,
          outcome: `P&G emerged with a focused portfolio built around categories where it led. Analysts debated how much it helped growth in the short run, but the clean-up let the company concentrate innovation and marketing budgets on fewer, bigger brands.`,
          lesson: `Downsizing is a growth strategy too: corporate planning is as much about what to exit as what to enter.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Rank your growth options',
          note: 'List options such as market development, a forward-integration move and a concentric diversification. Weight criteria like fit with core competencies, size of the gap closed, risk and time to revenue — then see which wins.'
        },
        {
          type: 'scenario',
          prompt: `Your snack company’s 5-year revenue goal is $800M. The current portfolio is projected to reach $560M. Penetration and new flavours could add about $120M. The CEO proposes buying an unrelated pet-insurance business to close the rest of the gap. What do you recommend?`,
          options: [
            { text: 'Buy the pet-insurance business — conglomerate diversification closes the gap fastest.', feedback: 'It may close the number but brings no competency or customer advantage. Unrelated acquisitions often destroy value unless the buyer has a clear parenting advantage.', good: false },
            { text: 'Close the remaining ~$120M with related moves first: new channels or regions for existing snacks, then a concentric move such as healthy bars that uses the same plants, brands and retail relationships.', feedback: 'Good. Work outward from intensive to integrative to related diversification, testing each against core competencies before considering unrelated bets.', good: true },
            { text: 'Lower the goal to $680M — growth targets are just guesses anyway.', feedback: 'Goals may need revisiting, but giving up before exploring related options skips the whole point of gap analysis.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Value delivery network', def: 'The partnership of a firm with its suppliers and distributors, organised to deliver value to the final customer.' },
        { term: 'Core competency', def: 'A capability that adds major customer value, applies across markets and is hard to imitate.' },
        { term: 'Strategic business unit (SBU)', def: 'A business with its own mission, competitors and accountable manager, planned somewhat independently.' },
        { term: 'Strategic-planning gap', def: 'The difference between the sales a company wants in future and what its current portfolio is projected to deliver.' },
        { term: 'Integrative growth', def: 'Growth by buying or building into suppliers (backward), distributors (forward) or competitors (horizontal).' },
        { term: 'Concentric diversification', def: 'Adding products that share technology or marketing with current lines, even if they appeal to new customer groups.' },
        { term: 'Conglomerate diversification', def: 'Entering businesses unrelated to the current technology, products or markets.' }
      ],
      quiz: [
        {
          q: 'A dairy company buys a chain of grocery stores that sell its milk. What kind of growth is this?',
          options: ['Backward integration', 'Horizontal integration', 'Concentric diversification', 'Forward integration'],
          answer: 3,
          explain: 'Moving toward the customer, into distribution, is forward integration.'
        },
        {
          q: 'Which is NOT one of the three tests of a core competency?',
          options: ['It adds substantially to customer benefits', 'It is the firm’s largest cost centre', 'It applies across many markets', 'It is hard for competitors to imitate'],
          answer: 1,
          explain: 'Cost size has nothing to do with competency. The three tests are customer benefit, breadth of application and difficulty of imitation.'
        },
        {
          q: 'A company wants $500M in sales in five years. The current portfolio projects $340M; intensive growth adds $90M and integrative growth $40M. How much must diversification or other moves deliver?',
          options: ['$30M', '$70M', '$160M', '$130M'],
          answer: 0,
          explain: 'Gap = 500 − 340 = $160M. Intensive plus integrative = $130M. Remaining = $30M.'
        },
        {
          q: 'Why do modern planners define SBUs by customer group, need and technology rather than by product?',
          options: ['Because products never change', 'Because accounting rules require it', 'Because products are transient while needs and customers endure, so the definition guides growth better', 'Because it makes the portfolio look larger'],
          answer: 2,
          explain: 'A market definition (“we help people move information”) survives product changes better than a product definition (“we make fax machines”).'
        },
        {
          q: 'In the five core business processes, which one includes receiving orders, shipping on time and collecting payment?',
          options: ['Fulfilment management', 'Market sensing', 'Customer acquisition', 'New-offering realisation'],
          answer: 0,
          explain: 'Fulfilment management covers the order-to-payment flow that physically delivers the promise.'
        }
      ],
      challenge: {
        title: 'Close the gap for a home-appliance maker',
        prompt: `An (illustrative) appliance maker sells kettles and toasters in two countries. Revenue today is $200M; the board wants $350M in five years. The current portfolio will reach $250M on its own. Options: (1) enter three neighbouring countries with existing products: +$45M, medium risk; (2) launch premium coffee machines through existing retailers: +$40M, medium risk; (3) buy a component supplier of heating elements: +$15M revenue and 2 points of margin on everything; (4) buy an unrelated online travel agency: +$60M, high risk.<br><br>Classify each option, calculate how much of the gap each combination closes, and recommend a plan.`,
        hints: ['Gap = target − projected portfolio.', 'Classify: market development, product development / concentric, backward integration, conglomerate.', 'Check whether options 1–3 together close the gap before reaching for option 4.'],
        model: `<p><b>Gap:</b> $350M − $250M = <b>$100M</b>.</p><ul><li>(1) New countries, same products = <b>market development</b> (intensive): +$45M</li><li>(2) Coffee machines to the same retailers and customers = <b>product development</b> bordering on <b>concentric diversification</b>: +$40M</li><li>(3) Heating-element supplier = <b>backward integration</b>: +$15M plus margin protection</li><li>(4) Travel agency = <b>conglomerate diversification</b>: +$60M</li></ul><p><b>Combination 1+2+3 = $100M</b> — it closes the gap exactly, using markets, retailers and engineering skills the firm already has, and the supplier deal adds 2 points of margin on roughly $350M (≈ $7M a year).</p><p><b>Option 4</b> would overshoot on paper but adds high risk with no competency, channel or customer overlap.</p><p><b>Recommendation:</b> sequence (1) first (fastest, proven products), develop (2) in parallel, and do (3) only if due diligence confirms supply security and margin. Hold (4) off the table. Set a checkpoint each year: if (1) or (2) under-deliver by more than 25%, revisit the gap plan rather than jumping to unrelated deals.</p>`
      },
      takeaways: [
        'Value delivery starts with choosing the value, not with making the product.',
        'Five cross-functional processes — sensing, offering, acquisition, relationships, fulfilment — deliver value.',
        'Corporate planning: mission → SBUs → resource allocation → growth gap → organisation and culture.',
        'Close the planning gap from the inside out: intensive, then integrative, then related diversification — and prune.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'mm-strategy-3',
      title: 'Business-unit planning and writing the marketing plan',
      level: 'Intermediate',
      minutes: 20,
      hook: `A marketing plan is a contract with your future self and your CFO: here is where we will play, what we will spend and how you will know if it worked.`,
      eli5: `Before a school trip, the teacher decides why you are going (to learn about rivers), checks what could go wrong (rain, a closed museum) and what you have going for you (a good bus, a guide), sets goals (everyone fills in a worksheet), picks a route, books tickets, goes — and counts heads at every stop. A marketing plan is exactly that, for a product: purpose, situation, goals, route, bookings, and head-counts along the way.`,
      blocks: [
        {
          type: 'flow', title: 'The business-unit strategic planning process',
          steps: [
            { label: 'Business mission', desc: 'Each unit defines its specific mission within the corporate mission: which customers, needs and technologies it serves.' },
            { label: 'SWOT analysis', desc: 'External opportunities and threats (from environment scanning) and internal strengths and weaknesses (from a candid capability review).' },
            { label: 'Goal formulation', desc: 'Turn the analysis into specific goals with magnitude and time.' },
            { label: 'Strategy formulation', desc: 'A game plan for reaching the goals: target, positioning, competitive approach, alliances.' },
            { label: 'Programme formulation and implementation', desc: 'Supporting programmes (R&D, sourcing, channels, communications) with budgets, owners and dates.' },
            { label: 'Are results on track?', kind: 'decision', desc: 'Compare actuals with goals and watch the environment.', branches: [ { label: 'Yes', to: 'Keep executing and raise ambition' }, { label: 'No', to: 'Revisit programmes, strategy or goals' } ] },
            { label: 'Feedback and control', desc: 'Strategic fit decays as the environment shifts; control closes the loop back to the mission and SWOT.' }
          ]
        },
        {
          type: 'matrix', name: 'Opportunity matrix', xLabel: 'Probability of success →', yLabel: 'Attractiveness →',
          cells: [
            { label: 'Attractive but hard', desc: 'High payoff, low odds. Monitor and build the capabilities that would raise the odds.' },
            { label: 'Best opportunities', desc: 'High attractiveness and high probability. Pursue now and resource properly.' },
            { label: 'Ignore', desc: 'Low payoff and low odds. Do not spend scarce attention here.' },
            { label: 'Easy but small', desc: 'Likely to work but modest payoff. Consider if cheap or a stepping stone.' }
          ]
        },
        {
          type: 'interactive', widget: 'swot', title: 'Build a SWOT you can act on',
          note: 'Write each item as evidence, not adjectives (“repeat rate 42% vs category 30%”, not “loyal customers”). Then pair them: which strengths exploit which opportunities?'
        },
        {
          type: 'callout', kind: 'insight', title: 'Goals that management by objectives can use',
          html: `<p>Good unit goals are <b>hierarchical</b> (from most to least important), <b>quantitative</b> where possible (“raise share from 15% to 20% in two years”), <b>realistic</b> (derived from the SWOT, not wishful thinking) and <b>consistent</b> with each other.</p><p>Make the trade-offs explicit: short-term profit vs long-term growth; deep penetration of existing markets vs new markets; profit vs non-profit goals; high growth vs low risk. A plan that claims “maximum share and maximum margin” has not made a choice.</p>`
        },
        {
          type: 'map', title: 'What goes into a marketing plan', center: 'The marketing plan',
          branches: [
            { label: 'Executive summary', desc: 'One page: goals, key strategy and the money asked for. Many executives read only this.' },
            { label: 'Situation analysis', desc: 'Market size and trends, customers, competitors, distribution, macro forces and the SWOT.', children: ['Market', 'Competitors', 'SWOT'] },
            { label: 'Objectives', desc: 'Financial and marketing objectives with numbers and dates.', children: ['Revenue', 'Share', 'Margin'] },
            { label: 'Target & positioning', desc: 'The segments chosen, the value proposition and the reason to believe.' },
            { label: 'Marketing programme', desc: 'Product, price, channels, communications and service — who does what, when, at what cost.', children: ['4Ps/7Ps', 'Calendar', 'Owners'] },
            { label: 'Financial projections', desc: 'Sales forecast, expense forecast and break-even; revenue by month and category.', children: ['Forecast', 'Budget', 'Break-even'] },
            { label: 'Implementation controls', desc: 'Milestones, metrics and review cadence so deviations show early.' },
            { label: 'Contingency plans', desc: 'What we will do if a key assumption fails — a competitor price cut, a supply shock.' }
          ]
        },
        {
          type: 'case', company: 'Amazon', year: '2000s onward', title: 'Working backwards: plans written from the customer’s side',
          situation: `As Amazon grew, leaders worried that teams pitched products in internal jargon and features that customers might not value.`,
          decision: `Teams were asked to start a proposal with a mock <b>press release and FAQ</b> written as if the product had already launched — the customer, the problem, why existing solutions fail and why the new one is better — before any build plan. Meetings use written narrative memos rather than slide decks (see <a href="#/lesson/communication-3">Communication, lesson 3</a>).`,
          outcome: `Amazon executives have publicly described this “working backwards” process as shaping products such as AWS and Kindle. Many ideas die at the press-release stage because the benefit cannot be stated convincingly — which is cheap compared with failing after launch.`,
          lesson: `The situation analysis and positioning sections of a plan are where most bad ideas should die. Forcing a customer-language statement first is a test of the “choose the value” step.`
        },
        {
          type: 'checklist', title: 'Is this a good marketing plan?',
          items: [
            'Simple: easy to understand and to communicate',
            'Clear: no ambiguity about who does what by when',
            'Practical and realistic: goals tie back to the SWOT and the forecast',
            'Complete: all major elements present, including money and controls',
            'Specific: objectives are concrete and measurable',
            'Owned: every programme has a named owner and a budget',
            'Tested: key assumptions are flagged and a contingency exists',
            'Short enough to be read — detail goes in appendices'
          ]
        },
        {
          type: 'cycle', title: 'The implementation and control loop', center: 'Marketing plan',
          steps: [
            { label: 'Set goals', desc: 'Annual and quarterly targets per product, region and channel.' },
            { label: 'Execute', desc: 'Programmes run with owners, budgets and dates.' },
            { label: 'Measure', desc: 'Track sales, share, spend ratios and customer metrics.' },
            { label: 'Diagnose', desc: 'Find the cause of gaps: price, volume, mix, a competitor, our own execution.' },
            { label: 'Correct', desc: 'Adjust programmes, or the goals if the assumptions were wrong.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your team’s SWOT lists 14 strengths (“great team”, “innovative culture”), 2 weaknesses and no linkage to goals. The plan is due next week. What do you do?`,
          options: [
            { text: 'Submit it — SWOT is a formality anyway.', feedback: 'A SWOT that drives nothing is wasted. Reviewers will spot the inflated strengths immediately.', good: false },
            { text: 'Cut it to the 3–4 factors per box that matter most, back each with evidence, and show which strengths will be used against which opportunities and which weaknesses the plan must fix.', feedback: 'Right. A SWOT earns its place only when it shapes goals and strategy.', good: true },
            { text: 'Replace it with a longer PESTEL to look more rigorous.', feedback: 'More lists do not equal more insight. Fix the logic, not the length.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'SWOT analysis', def: 'An overall evaluation of a unit’s internal strengths and weaknesses and external opportunities and threats.' },
        { term: 'Marketing opportunity', def: 'An area of buyer need and interest that a company has a high probability of profitably satisfying.' },
        { term: 'Environmental threat', def: 'An unfavourable trend that, without action, would erode sales or profit.' },
        { term: 'Management by objectives', def: 'Setting hierarchical, quantified goals that cascade from the unit to teams and individuals.' },
        { term: 'Marketing plan', def: 'A written document summarising what the marketer has learned about the market and how the company plans to reach its marketing objectives.' },
        { term: 'Contingency plan', def: 'A pre-agreed response if a key assumption in the plan proves wrong.' }
      ],
      quiz: [
        {
          q: 'In the business-unit planning process, what comes directly after SWOT analysis?',
          options: ['Programme formulation', 'Goal formulation', 'Implementation', 'Feedback and control'],
          answer: 1,
          explain: 'Mission → SWOT → goals → strategy → programmes → implementation → feedback and control.'
        },
        {
          q: 'An opportunity is very attractive but your probability of success is low. The opportunity matrix suggests you should:',
          options: ['Pursue it with full resources now', 'Ignore it completely', 'Monitor it and consider building the capabilities that would raise your odds', 'Only pursue it if competitors already have'],
          answer: 2,
          explain: 'High attractiveness with low odds is a “watch and build” cell.'
        },
        {
          q: 'Which objective is best written?',
          options: ['Become the market leader', 'Grow aggressively', 'Improve brand perceptions', 'Raise unaided awareness among 25–40-year-old urban parents from 18% to 30% by December next year'],
          answer: 3,
          explain: 'It is specific, measurable, targeted and time-bound.'
        },
        {
          q: 'A plan targets 50,000 units at $40 with a 45% contribution margin and a $600,000 marketing budget. What is contribution after marketing?',
          options: ['$300,000', '$900,000', '$1,400,000', '$2,000,000'],
          answer: 0,
          explain: 'Revenue = 50,000 × $40 = $2,000,000. Contribution = 45% = $900,000. Minus $600,000 marketing = $300,000.'
        },
        {
          q: 'Why do many plans fail even when the strategy is sound?',
          options: ['Strategies are always wrong', 'Implementation lacks owners, budgets, timing and control mechanisms', 'Plans are usually too short', 'SWOT analysis cannot be done well'],
          answer: 1,
          explain: 'Good strategy needs programmes with owners, resources and a control loop. Most failures happen in execution and feedback.'
        }
      ],
      challenge: {
        title: 'Write the plan skeleton for a plant-based yoghurt',
        prompt: `An (illustrative) dairy co-op wants to launch a plant-based yoghurt in its home region. The regional chilled-yoghurt market is 40 million cups a year, of which plant-based is 5% and growing about 20% a year. The co-op has strong retailer relationships and cold-chain logistics but no plant-based expertise. A rival start-up holds roughly a third of the plant-based segment. Price per cup to retailers: $0.80; contribution margin 40%. Proposed first-year marketing budget: $150,000.<br><br>Draft the skeleton of a marketing plan: SWOT (two points per box), one financial and two marketing objectives, a positioning statement, the core programme, a break-even check, and two control metrics with a contingency.`,
        hints: ['Plant-based segment next year ≈ 40M × 5% × 1.2.', 'Break-even units = marketing budget ÷ contribution per cup (ignoring other fixed costs).', 'Use the co-op’s strength (retailer access, cold chain) against the opportunity (fast segment growth).'],
        model: `<p><b>Situation and SWOT</b></p><ul><li><b>S:</b> shelf access with major retailers; cold-chain logistics.</li><li><b>W:</b> no plant-based R&D; brand associated with dairy (credibility gap).</li><li><b>O:</b> segment ≈ 40M × 5% = 2.0M cups now, ≈ 2.4M next year (+20%); retailers want a second supplier.</li><li><b>T:</b> start-up with ~1/3 of the segment and authentic positioning; possible price war.</li></ul><p><b>Objectives</b></p><ul><li>Financial: reach contribution after marketing ≥ $0 in year 1 and positive in year 2.</li><li>Marketing: 15% of the plant-based segment by month 12 (≈ 360,000 cups); listing in 70% of the co-op’s existing retail doors.</li></ul><p><b>Positioning:</b> “For flexitarian families who want plant-based without giving up creaminess, [Brand] is the oat yoghurt made by local farmers who know yoghurt — tasted and approved in blind tests.”</p><p><b>Programme:</b> partner with an oat-base specialist (fix the weakness); two flavours plus plain; price at parity with the start-up; secure chilled-aisle placement next to the leader; in-store sampling plus social content; a family pack for value.</p><p><b>Break-even check:</b> contribution per cup = $0.80 × 40% = $0.32. Cups needed to recover $150,000 = 150,000 ÷ 0.32 ≈ <b>468,750 cups</b>. The 15% share goal gives ≈ 360,000 cups → contribution ≈ $115,200, so year 1 is ≈ <b>$34,800 short</b>. Options: target ~20% share (≈ 480,000 cups) or phase the budget (e.g. $110,000 in year 1). Recommendation: phase spend and treat year 1 as a deliberate investment with a year-2 payback.</p><p><b>Controls:</b> weekly rate of sale per store vs plan; repeat purchase at 8 weeks ≥ 30%. <b>Contingency:</b> if the start-up cuts price by more than 15%, respond with a multipack rather than a list-price cut to protect margin.</p>`
      },
      takeaways: [
        'Business-unit planning runs mission → SWOT → goals → strategy → programmes → implementation → control.',
        'Use the opportunity matrix to separate “pursue now” from “watch and build”.',
        'Goals must be hierarchical, quantified, realistic and consistent — and trade-offs made explicit.',
        'A good marketing plan is short, specific, owned, financially checked and equipped with controls and contingencies.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'mm-strategy-4',
      title: 'Marketing information systems and scanning the macroenvironment',
      level: 'Intermediate',
      minutes: 18,
      hook: `The best marketing decisions often come from information the company already owns — buried in order systems, call logs and the heads of its salespeople.`,
      eli5: `A football coach watches three things: the team’s own stats (goals, passes, injuries), what scouts say about the next opponent, and the weather and pitch on match day. A company does the same: its own records, intelligence about rivals and customers, and the big forces in the world — how many people there are, how much money they have, what they care about, new tech and new laws.`,
      blocks: [
        {
          type: 'map', title: 'The marketing information system', center: 'Marketing information system',
          branches: [
            { label: 'Internal records', desc: 'Orders, prices, shipments, inventory, receivables, payments, service tickets and web or app logs.', children: ['Order-to-payment', 'Sales systems', 'CRM data'] },
            { label: 'Marketing intelligence', desc: 'Everyday information about developments in the environment: competitors, channels, customers and regulators.', children: ['Sales force', 'Channel partners', 'Online reviews'] },
            { label: 'Marketing research', desc: 'Designed studies to answer a specific question (lesson 6).', children: ['Surveys', 'Experiments', 'Ethnography'] },
            { label: 'Analytics & decision support', desc: 'Data warehouses, models and dashboards that turn data into decisions (lesson 7).', children: ['Data mining', 'Forecasts', 'Dashboards'] }
          ]
        },
        {
          type: 'flow', title: 'The order-to-payment cycle', when: 'The heart of internal records — speed and accuracy here are a source of advantage',
          steps: [
            { label: 'Order received', desc: 'From sales reps, dealers, the website or an EDI link with a retailer.' },
            { label: 'Credit and availability check', kind: 'decision', desc: 'Is the customer approved and the item in stock?', branches: [ { label: 'Yes', to: 'Confirm and allocate stock' }, { label: 'No', to: 'Back-order, substitute or hold' } ] },
            { label: 'Pick, pack and ship', desc: 'Warehouse and logistics move the goods; tracking updates the customer.' },
            { label: 'Invoice', desc: 'Billing sent automatically on shipment or delivery.' },
            { label: 'Payment collected', desc: 'Cash received; days sales outstanding measured.' },
            { label: 'Data back to marketing', desc: 'Sales by product, customer, region and price feed forecasts, targeting and replenishment.' }
          ]
        },
        {
          type: 'text', title: 'From records to intelligence',
          html: `<p><b>Sales information systems</b> give managers timely reports of current sales; <b>databases and data warehouses</b> store customer, product and transaction data; <b>data mining</b> looks for patterns — which customers are drifting, which products are bought together, which regions respond to price.</p><p>A <b>marketing intelligence system</b> captures the outside world. Ways to strengthen it: train and motivate the sales force to report what they hear; get distributors and retailers to pass on information; hire specialists or mystery shoppers; network with and study competitors (annual reports, job ads, patent filings, trade shows); set up a customer advisory panel; use government and syndicated data; and systematically mine online reviews, social posts and complaint forums.</p>`
        },
        {
          type: 'case', company: 'Walmart', year: '2004', title: 'What sells before a hurricane',
          situation: `Walmart had built one of retail’s largest data warehouses, recording sales by item, store and day across its network.`,
          decision: `As Hurricane Frances approached Florida in 2004, Walmart analysts mined sales data from stores that had recently faced Hurricane Charley to predict what customers would buy, beyond the obvious torches and bottled water.`,
          outcome: `As reported at the time, the analysis showed sharp spikes in some surprising items — strawberry Pop-Tarts and beer were singled out — and Walmart shipped extra stock of them to stores in the storm’s path ahead of landfall.`,
          lesson: `Internal records become intelligence when someone asks a decision-relevant question of them. The value was not the data warehouse itself but the habit of mining it before a predictable event.`
        },
        {
          type: 'map', title: 'The six macroenvironment forces', center: 'Macroenvironment',
          branches: [
            { label: 'Demographic', desc: 'Population size and growth, age mix, ethnic and educational mix, household patterns — and huge low-income “bottom of the pyramid” markets.', children: ['Ageing', 'Urbanisation', 'BoP markets'] },
            { label: 'Economic', desc: 'Income distribution, savings, debt and credit availability shape what people can buy.', children: ['Inflation', 'Credit', 'Inequality'] },
            { label: 'Sociocultural', desc: 'Views of ourselves, others, organisations, society, nature and the universe; core values that persist and secondary values that shift; subcultures.', children: ['Values', 'Subcultures', 'Lifestyles'] },
            { label: 'Natural', desc: 'Raw-material scarcity, energy costs, pollution and climate regulation.', children: ['Climate', 'Water', 'Circularity'] },
            { label: 'Technological', desc: 'The pace of change, opportunities for innovation, R&D budgets and tech regulation.', children: ['AI', 'Mobile', 'Biotech'] },
            { label: 'Political-legal', desc: 'Laws that regulate business and growing activity by interest groups.', children: ['Privacy law', 'Advertising rules', 'Trade policy'] }
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'Bottom-of-the-pyramid markets',
          html: `<p>Billions of people live on low incomes, yet together they form a very large market. Companies that win there usually redesign the offer rather than strip down a rich-country product: <b>single-use sachets</b> of shampoo and detergent sold for a few rupees in Indian kirana stores, prepaid mobile top-ups in small amounts, and mobile money for people without bank accounts. The rules: affordable unit price (not low quality), access through local channels, and trust. More in <a href="#/lesson/india-7">India, lesson 7</a>.</p>`
        },
        {
          type: 'pyramid', title: 'Fads, trends and megatrends',
          levels: [
            { label: 'Fad', note: 'months to a year or two', desc: 'Unpredictable, short-lived, little social or economic significance. Fidget spinners in 2017. Ride it cheaply or ignore it.' },
            { label: 'Trend', note: 'several years or more', desc: 'A direction or sequence of events with momentum and durability, visible across markets. Plant-based eating, subscription buying.' },
            { label: 'Megatrend', note: 'a decade or more', desc: 'Large social, economic, political and technological changes that form slowly and then influence us for a long time. Population ageing, urbanisation, the energy transition, AI.' }
          ]
        },
        {
          type: 'compare', title: 'Telling them apart', headers: ['Test', 'Fad', 'Trend', 'Megatrend'],
          rows: [
            ['Driver', 'Novelty, social buzz', 'A real shift in needs or costs', 'Structural forces: demographics, technology, policy'],
            ['Breadth', 'One niche or product', 'Several categories', 'Almost every industry'],
            ['Fits other changes?', 'No — stands alone', 'Yes — supported by other developments', 'Yes — drives other changes'],
            ['Right response', 'Cheap, fast, reversible bets', 'New products and positioning', 'Corporate strategy and portfolio choices']
          ]
        },
        {
          type: 'scenario',
          prompt: `A viral video makes a little-known herbal drink a sudden hit; your beverage company’s social-listening dashboard lights up. The sales head wants to build a dedicated plant. What do you do?`,
          options: [
            { text: 'Build the plant — demand is clearly huge.', feedback: 'Buzz spikes look like trends early on. A fixed plant is an expensive bet on what may be a fad.', good: false },
            { text: 'Test whether it fits a broader trend (e.g. functional, low-sugar drinks): launch a co-packed limited run, watch repeat purchase over 8–12 weeks, then decide on capacity.', feedback: 'Good. Make a cheap, reversible bet while checking repeat buying and whether the spike connects to a durable trend.', good: true },
            { text: 'Ignore it — social media is noise.', feedback: 'Sometimes a fad sits on top of a real trend. Ignoring the signal entirely wastes free intelligence.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Marketing information system', def: 'People, equipment and procedures to gather, sort, analyse and distribute timely, accurate information to marketing decision makers.' },
        { term: 'Order-to-payment cycle', def: 'The sequence from receiving an order to collecting payment — the core of internal records.' },
        { term: 'Data mining', def: 'Using statistical and machine-learning methods to find useful patterns in large data sets.' },
        { term: 'Marketing intelligence system', def: 'Procedures and sources used to obtain everyday information about developments in the marketing environment.' },
        { term: 'Bottom of the pyramid', def: 'The large population of low-income consumers, reachable with affordable formats and local distribution.' },
        { term: 'Megatrend', def: 'A large, slow-forming social, economic, political or technological change with long-lasting influence.' },
        { term: 'Fad', def: 'A short-lived, unpredictable craze without lasting social or economic significance.' }
      ],
      quiz: [
        {
          q: 'A retailer notices that customers who buy baby wipes often buy coffee in the same trip. Which MIS component produced this insight?',
          options: ['Marketing intelligence from the sales force', 'Data mining of internal records', 'A focus group', 'Political-legal scanning'],
          answer: 1,
          explain: 'Pattern-finding in transaction records is data mining of internal data.'
        },
        {
          q: 'Which is the best example of a megatrend?',
          options: ['A viral dance challenge', 'A new flavour of crisps', 'Population ageing in many countries', 'A one-season fashion colour'],
          answer: 2,
          explain: 'Ageing is slow-forming, structural and affects nearly every industry for decades.'
        },
        {
          q: 'A distributor with $36.5M in annual sales cuts its order-to-payment cycle from 50 to 40 days. Roughly how much cash is freed?',
          options: ['$100,000', '$365,000', '$3.65M', '$1M'],
          answer: 3,
          explain: 'Daily sales = $36.5M ÷ 365 = $100,000. Ten days faster frees ≈ 10 × $100,000 = $1M of working capital.'
        },
        {
          q: 'Which is part of the sociocultural environment?',
          options: ['Core beliefs and values passed from parents to children', 'Interest-rate changes', 'The rate of technological change', 'Raw-material shortages'],
          answer: 0,
          explain: 'Core and secondary values, views of self and society, and subcultures are sociocultural.'
        },
        {
          q: 'What distinguishes a trend from a fad?',
          options: ['Trends always start on social media', 'Trends have momentum and durability and fit with other developments', 'Fads are always profitable', 'Trends last less than a year'],
          answer: 1,
          explain: 'A trend is durable and connected to broader changes; a fad is short-lived and stand-alone.'
        }
      ],
      challenge: {
        title: 'Set up intelligence for an e-scooter subscription',
        prompt: `An (illustrative) start-up rents e-scooters on monthly subscriptions in a mid-sized city. Annual revenue is $7.3M. Orders come from an app; but corporate clients pay invoices at 60 days on average. Management wants (a) a list of macro forces to monitor with one leading indicator each, (b) three internal-record improvements, and (c) the cash freed if corporate payment terms fall to 30 days, given corporate clients are 40% of revenue.`,
        hints: ['Use all six forces; name a concrete indicator for each.', 'Corporate revenue per day = 40% × $7.3M ÷ 365.', 'Internal records: think churn signals, utilisation and payment data.'],
        model: `<p><b>(a) Macro scan</b></p><ul><li><b>Demographic:</b> share of 18–35s and commuters in the city — indicator: annual population and commuting data.</li><li><b>Economic:</b> fuel prices and transit fares — indicator: monthly fuel price index (higher fuel prices raise scooter appeal).</li><li><b>Sociocultural:</b> attitudes to cycling and safety — indicator: survey or social-listening sentiment on micromobility.</li><li><b>Natural:</b> weather and air quality — indicator: rainy-day count vs subscriptions paused.</li><li><b>Technological:</b> battery cost and range — indicator: supplier price quotes per kWh.</li><li><b>Political-legal:</b> helmet and speed rules, parking permits — indicator: council agendas and consultations.</li></ul><p><b>(b) Internal records</b></p><ul><li>Daily ride logs per subscriber → flag users whose rides fall by more than 50% (early churn signal).</li><li>Fleet utilisation by zone and hour → rebalance stock and target marketing where scooters sit idle.</li><li>Invoice and payment data by corporate client → spot slow payers early.</li></ul><p><b>(c) Cash freed</b></p><ul><li>Corporate revenue = 40% × $7.3M = $2.92M → per day ≈ $8,000.</li><li>Cutting payment from 60 to 30 days frees 30 × $8,000 ≈ <b>$240,000</b>.</li></ul><p><b>Recommendation:</b> offer a small discount (e.g. 1%) for 30-day payment only if it costs less than the financing value of $240,000; and build the churn-signal report first, because it protects the largest revenue stream.</p>`
      },
      takeaways: [
        'An MIS combines internal records, marketing intelligence, research and analytics.',
        'The order-to-payment cycle is both an operational process and a rich marketing data source.',
        'Scan six macro forces — demographic, economic, sociocultural, natural, technological, political-legal.',
        'Match your response to the signal: cheap bets for fads, new offers for trends, portfolio moves for megatrends.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'mm-strategy-5',
      title: 'Measuring and forecasting demand',
      level: 'Intermediate',
      minutes: 22,
      hook: `Every budget, factory and hiring plan rests on one number someone guessed: how much will customers buy? Guess it badly and the rest of the plan is fiction.`,
      eli5: `Your class wants to sell ice cream at sports day. How many cones should you buy? You could count everyone who will be there (the whole market), think about how many actually like ice cream and have pocket money (the people who can buy), guess how many will pick your stall over the snack van (your share), and check what happened last year (past sales). Asking a few friends “will you buy one?” helps, but people often say yes and then don’t — so you adjust.`,
      blocks: [
        {
          type: 'pyramid', invert: true, title: 'From everyone to your customers: market levels',
          levels: [
            { label: 'Potential market', desc: 'Consumers with sufficient interest in the offer.' },
            { label: 'Available market', desc: 'Those with interest, income and access to it.' },
            { label: 'Qualified available market', desc: 'Those who are also legally and practically eligible (age limits, licences, compatible equipment).' },
            { label: 'Target (served) market', desc: 'The part of the qualified market the company decides to pursue.' },
            { label: 'Penetrated market', desc: 'Those actually buying the product — yours and competitors’.' }
          ]
        },
        {
          type: 'map', title: 'The vocabulary of demand', center: 'Demand measurement',
          branches: [
            { label: 'Market demand', desc: 'Total volume bought by a defined customer group in a defined area, period, environment and marketing programme. It is a function, not a single number — it rises with industry spending, up to a ceiling.' },
            { label: 'Market forecast', desc: 'The demand that corresponds to the expected level of industry marketing spending.' },
            { label: 'Market potential', desc: 'The upper limit approached as industry marketing spending becomes very high.', children: ['Ceiling', 'Expansible vs non-expansible'] },
            { label: 'Company demand', desc: 'The company’s estimated share of market demand at alternative levels of its own effort.' },
            { label: 'Company sales forecast', desc: 'Expected sales given a chosen marketing plan and an assumed environment. It comes after the plan, not before.' },
            { label: 'Company sales potential', desc: 'The limit company demand approaches as its effort rises relative to competitors’.' },
            { label: 'Quotas & budgets', desc: 'Sales quotas (set slightly above forecast to stretch) and sales budgets (set conservatively for purchasing and cash planning).' }
          ]
        },
        {
          type: 'formula', name: 'Total market potential',
          expr: 'Q = n × q × p',
          explain: `<b>Q</b> = total market potential; <b>n</b> = number of buyers for the product under given assumptions; <b>q</b> = quantity bought by an average buyer per period; <b>p</b> = average unit price. A variant, the <b>chain-ratio method</b>, multiplies a base number by a series of percentages (households × share with need × share who can afford × share in reach).`,
          example: `Illustrative: 8 million urban households could buy an air purifier; on average each replaces one every 4 years (q = 0.25 per year); average price $150. Q = 8,000,000 × 0.25 × $150 = <b>$300M a year</b>. A firm aiming for 12% share is planning for about $36M.`
        },
        {
          type: 'formula', name: 'Area market potential: a multiple-factor index',
          expr: 'Area index = 0.5 × income share + 0.3 × retail-sales share + 0.2 × population share',
          explain: `For consumer goods, area potential is often estimated with a weighted index of a region’s share of national disposable income, retail sales and population. The weights shown are a classic general-purpose set; adjust them to the category. For business markets, use the <b>market-buildup method</b>: list all potential buyers in each area (from industry codes or databases) and add up their estimated purchases.`,
          example: `A region has 3% of national income, 4% of retail sales and 2% of population. Index = 0.5×3 + 0.3×4 + 0.2×2 = 1.5 + 1.2 + 0.4 = <b>3.1%</b>. With a $300M national market, the region’s potential ≈ <b>$9.3M</b>. Compare with your actual regional sales to find under-served areas.`
        },
        {
          type: 'flow', title: 'Estimating future demand', when: 'Annual planning; new launches; capacity decisions',
          steps: [
            { label: 'Macroeconomic forecast', desc: 'Inflation, unemployment, interest rates, consumer spending — bought from forecasters or built in-house.' },
            { label: 'Industry forecast', desc: 'Translate the macro view into category demand with the drivers that matter.' },
            { label: 'Company sales forecast', desc: 'Apply expected share under the chosen marketing plan.' },
            { label: 'Is the product new or the market unstable?', kind: 'decision', desc: 'Choose methods by data availability.', branches: [ { label: 'Yes', to: 'Intentions, experts, market tests' }, { label: 'No', to: 'Past-sales analysis plus sales-force input' } ] },
            { label: 'Triangulate and set ranges', desc: 'Compare two or three methods, publish a base case with low/high bounds and track forecast error.' }
          ]
        },
        {
          type: 'compare', title: 'Forecasting methods', headers: ['Method', 'How it works', 'Best for', 'Watch out for'],
          rows: [
            ['Survey of buyer intentions', 'Ask buyers how likely they are to buy (purchase-probability scales)', 'Durable goods, business buyers with plans', 'Stated intent overstates action; discount it'],
            ['Sales force composite', 'Reps estimate future sales in their territories', 'B2B with close customer contact', 'Optimism or sandbagging when quotas follow forecasts'],
            ['Expert opinion', 'Dealers, consultants or panels; the Delphi method iterates anonymous rounds', 'New technologies, long horizons', 'Groupthink; experts anchoring on each other'],
            ['Past-sales analysis', 'Time series split into trend, cycle, seasonal and erratic parts; exponential smoothing; regression on drivers', 'Stable products with history', 'Breaks when the market shifts (see data-decisions-5)'],
            ['Market test', 'Sell in a test region or simulated store and project', 'New products, new channels, costly launches', 'Cost, time and competitors watching or jamming the test']
          ]
        },
        {
          type: 'interactive', widget: 'regression', title: 'Statistical demand analysis',
          note: 'Enter past periods of advertising spend (x) and unit sales (y). Read the slope as “extra units per extra $1,000 of spend” — then ask whether something else (price cuts, seasonality) moved at the same time.'
        },
        {
          type: 'case', company: 'Tata Motors (Nano)', year: '2008–2018', title: 'When the forecast meets reality',
          situation: `Tata Motors unveiled the Nano in January 2008 as a car for families who rode two-wheelers, with a target price of ₹1 lakh. The logic was a huge potential market: millions of Indian households owned scooters and might trade up.`,
          decision: `The company planned large-scale capacity. Protests over land at its original plant site in Singur, West Bengal forced a move to Sanand, Gujarat in late 2008. Bookings opened in 2009 and attracted around two hundred thousand applications, so early buyers were picked by lottery.`,
          outcome: `After the launch rush, sales fell far short of the plant’s capacity. Early reports of a few cars catching fire hurt confidence, and buyers seemed reluctant to own a car seen as “the cheapest”. Ratan Tata later said marketing it as the cheapest car had been a mistake. Production ended in 2018.`,
          lesson: `Potential market (two-wheeler households) is not available or target market. Stated interest and booking queues overstated repeatable demand, and status needs — invisible in an n × q × p sum — shaped what “affordable” buyers actually wanted.`
        },
        {
          type: 'scenario',
          prompt: `A purchase-intent survey for your new smart doorbell finds 12% “definitely will buy” and 25% “probably will buy” within a year, among 2 million target households. The product manager forecasts 740,000 units. How do you respond?`,
          options: [
            { text: 'Accept 740,000 — the survey is large and recent.', feedback: 'Adding the two boxes at face value assumes everyone who says “probably” buys. Intentions consistently overstate behaviour.', good: false },
            { text: 'Discount the boxes (for example, count 70% of “definitely” and 30% of “probably”), adjust for awareness and distribution reach, and cross-check against a market test or comparable launches.', feedback: 'Right. 2M × (12% × 0.7 + 25% × 0.3) = 2M × 15.9% ≈ 318,000 before awareness and distribution — less than half the naive figure. Then triangulate.', good: true },
            { text: 'Ignore the survey and forecast from last year’s doorbell sales.', feedback: 'A new smart product has no clean history; combine methods instead of picking one blindly.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Market potential', def: 'The upper limit of market demand as industry marketing effort becomes very large.' },
        { term: 'Available market', def: 'Consumers who have interest, income and access to a particular offer.' },
        { term: 'Penetrated market', def: 'The set of consumers who are already buying the product.' },
        { term: 'Chain-ratio method', def: 'Estimating demand by multiplying a base number by a sequence of adjusting percentages.' },
        { term: 'Multiple-factor index', def: 'A weighted combination of regional income, retail sales and population shares used to estimate area potential.' },
        { term: 'Market-buildup method', def: 'Identifying all potential buyers in each market and summing their estimated purchases.' },
        { term: 'Delphi method', def: 'A forecasting process in which experts give anonymous estimates over several rounds, revising after seeing the group’s view.' }
      ],
      quiz: [
        {
          q: 'Which comes first in the funnel of market levels?',
          options: ['Target market', 'Penetrated market', 'Available market', 'Potential market'],
          answer: 3,
          explain: 'Potential → available → qualified available → target → penetrated.'
        },
        {
          q: 'There are 5 million potential buyers; each buys 2 units a year at $10. What is total market potential?',
          options: ['$100M', '$10M', '$50M', '$20M'],
          answer: 0,
          explain: 'Q = n × q × p = 5,000,000 × 2 × $10 = $100M.'
        },
        {
          q: 'A region has 5% of national income, 6% of retail sales and 4% of population. Using weights 0.5 / 0.3 / 0.2, what is its index?',
          options: ['5.0%', '5.1%', '5.6%', '4.8%'],
          answer: 1,
          explain: '0.5×5 + 0.3×6 + 0.2×4 = 2.5 + 1.8 + 0.8 = 5.1%.'
        },
        {
          q: 'Why should a company sales forecast come after the marketing plan, not before?',
          options: ['Because forecasts are only for accountants', 'Because the plan’s spending and tactics determine the expected sales level', 'Because plans never change', 'Because the forecast is the same as market potential'],
          answer: 1,
          explain: 'Company sales depend on company effort. Using a forecast to set the budget is circular.'
        },
        {
          q: 'A business-to-business firm sells industrial adhesives and wants regional potential. Which method fits best?',
          options: ['Multiple-factor consumer index', 'Delphi panel only', 'Market-buildup from lists of potential industrial buyers', 'Survey of general consumers'],
          answer: 2,
          explain: 'Business markets are concentrated and identifiable; list buyers and sum their likely purchases.'
        }
      ],
      challenge: {
        title: 'Forecast year-1 demand for a premium kettle',
        prompt: `An (illustrative) appliance brand will launch a $60 temperature-control kettle. The country has 20 million households; 40% have the income and interest to consider a premium kettle; such households replace a kettle every 5 years. A survey of qualified households finds 10% “definitely” and 20% “probably” would choose this brand at their next purchase. The brand expects to reach 60% of qualified households through distribution in year 1.<br><br>(a) Estimate annual market potential in units and dollars for premium kettles. (b) Build a year-1 company forecast using adjusted intentions. (c) Recommend a production plan and a learning plan.`,
        hints: ['n = 20M × 40%; q = 1 ÷ 5 per year.', 'Adjust intentions (e.g. 70% of definites, 30% of probables) and apply only to households replacing this year and reached by distribution.', 'Give a range and a way to update it quickly.'],
        model: `<p><b>(a) Market potential</b></p><ul><li>n = 20M × 40% = 8M qualified households</li><li>q = 1/5 = 0.2 kettles a year → 1.6M premium kettles a year</li><li>× $60 = <b>$96M a year</b></li></ul><p><b>(b) Company forecast</b></p><ul><li>Adjusted intent = 10% × 0.7 + 20% × 0.3 = 7% + 6% = <b>13%</b> of buyers who replace this year</li><li>Replacing households reached: 1.6M × 60% = 960,000</li><li>Year-1 units ≈ 960,000 × 13% ≈ <b>124,800 units</b> (≈ $7.5M revenue, ≈ 7.8% of the category)</li><li>Range: low case at 9% conversion ≈ 86,000; high case at 17% ≈ 163,000.</li></ul><p><b>(c) Recommendation:</b> commit production for the low case (~90,000 units) with flexible supplier capacity up to the high case. Run a 3-month test in two regions with full marketing support and compare actual rate of sale with the forecast before releasing the rest. Track forecast error monthly; if actuals exceed the base by 20% for two months, trigger the extra capacity. This avoids the classic mistake of building for the potential market instead of the reachable one.</p>`
      },
      takeaways: [
        'Market demand is a function of marketing effort, with market potential as its ceiling.',
        'Narrow from potential to available to target to penetrated market before forecasting your sales.',
        'Estimate current demand with n × q × p, chain ratios, buildup lists or a multiple-factor index.',
        'Forecast future demand by triangulating methods — and always discount stated intentions.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'mm-strategy-6',
      title: 'The marketing research process and customer insight',
      level: 'Advanced',
      minutes: 22,
      hook: `Research can tell you exactly what people prefer and still lead you off a cliff — if you asked the wrong question of the wrong people in the wrong way.`,
      eli5: `Imagine asking your friends “which crisps taste better?” after one bite each. They pick the sweeter one. But you didn’t ask “should we stop selling your favourite crisps forever?” — a very different question. Good research starts by working out what decision you are making, then picks the right way to find out: watching people, asking them, or trying something small and seeing what they actually do.`,
      blocks: [
        {
          type: 'flow', title: 'The marketing research process',
          steps: [
            { label: 'Define the problem, decision alternatives and objectives', desc: 'Not too broad, not too narrow. Is the research exploratory, descriptive or causal? Write down the decision it will inform.' },
            { label: 'Develop the research plan', desc: 'Data sources, approaches, instruments, sampling plan and contact methods — and a budget weighed against the value of the information.' },
            { label: 'Collect the information', desc: 'Often the most expensive and error-prone stage: non-response, biased answers, interviewer effects.' },
            { label: 'Analyse the information', desc: 'Tabulate, compute averages and dispersion, test hypotheses, run models — and check against other sources.' },
            { label: 'Present the findings', desc: 'Lead with the answer to the decision, not the method; show uncertainty honestly.' },
            { label: 'Is the evidence strong enough to act?', kind: 'decision', desc: 'Compare what you learnt with the decision threshold.', branches: [ { label: 'Yes', to: 'Make the decision' }, { label: 'No', to: 'Run a cheaper follow-up or a market test' } ] },
            { label: 'Make the decision', desc: 'Research informs judgement; it does not replace it.' }
          ]
        },
        {
          type: 'map', title: 'Research approaches', center: 'Primary research approaches',
          branches: [
            { label: 'Observational', desc: 'Watch people in stores, homes or online without asking — what they do, not what they say.', children: ['Store observation', 'Session recordings'] },
            { label: 'Ethnographic', desc: 'Anthropology-style immersion in people’s lives to uncover unarticulated needs.', children: ['Home visits', 'Shop-alongs', 'Diaries'] },
            { label: 'Focus groups', desc: '6–10 people with a skilled moderator; good for exploring language and reactions, poor for counting.', children: ['Concept reactions', 'Vocabulary'] },
            { label: 'Surveys', desc: 'Structured questions to many people to measure knowledge, beliefs, preferences and satisfaction.', children: ['Online panels', 'Intercepts'] },
            { label: 'Behavioural data', desc: 'Purchase, loyalty-card, app and web data show what customers actually did.', children: ['Scanner data', 'Clickstreams'] },
            { label: 'Experiments', desc: 'Change one thing for matched groups to establish cause and effect.', children: ['A/B tests', 'Test markets'] }
          ]
        },
        {
          type: 'framework', name: 'Instruments, sampling and contact', when: 'Inside the research plan, before any fieldwork',
          steps: [
            { label: 'Questionnaires', desc: 'Closed questions (dichotomous, multiple choice, rating scales) are easy to tabulate; open questions reveal more. Test wording, order and length on a small pilot first.' },
            { label: 'Qualitative measures', desc: 'Word association, projective techniques (complete the story), visualisation (collages), brand personification (“if the brand were a person…”) and laddering (asking “why?” to reach deeper motives).' },
            { label: 'Technological devices', desc: 'Eye tracking, biometric and neuroscience measures add signal on attention and emotion, at a cost — and with careful ethics.' },
            { label: 'Sampling unit', desc: 'Who do we survey? The user, the buyer, the influencer — they may be different people.' },
            { label: 'Sample size and procedure', desc: 'Large samples give more reliable results, but a well-chosen probability sample beats a huge biased one. Non-probability samples (convenience, judgement, quota) are cheaper but cannot give true margins of error.' },
            { label: 'Contact method', desc: 'Online (fast, cheap, panel bias), telephone (declining response), in-person (deep, expensive), mail (slow, low response).' }
          ]
        },
        {
          type: 'case', company: 'Coca-Cola', year: '1985', title: 'New Coke: right answer to the wrong question',
          situation: `Coca-Cola had been losing share to Pepsi, whose blind “Pepsi Challenge” taste tests suggested many people preferred a sweeter cola.`,
          decision: `Coca-Cola developed a sweeter formula and ran extensive blind taste tests — reported at around 200,000 — in which the new formula beat both the old Coke and Pepsi. In April 1985 the company replaced the original with “New Coke”.`,
          outcome: `A fierce public backlash followed: angry calls and letters, protest groups and heavy media coverage. In July 1985, after 79 days, the company brought back the original as “Coca-Cola Classic”, which soon outsold the new version.`,
          lesson: `The research measured sip-test taste preference but not attachment to the brand or reactions to <b>losing</b> the original. Problem definition failed: the decision was “replace a 99-year-old icon?”, not “which liquid tastes better in one sip?”.`
        },
        {
          type: 'case', company: 'Netflix', year: '2011–2013', title: 'Data-informed commissioning of House of Cards',
          situation: `Netflix wanted exclusive original programming to differentiate its streaming service and had years of detailed viewing data from its members.`,
          decision: `In 2011 Netflix outbid traditional networks for the political drama <i>House of Cards</i>, committing to two full seasons without the usual pilot episode. Executives said viewing data showed strong overlap between fans of the British original, of director David Fincher and of actor Kevin Spacey.`,
          outcome: `The series launched in 2013 with all episodes released at once and became a flagship for Netflix originals, earning major award nominations. Netflix later stressed that data informed but did not replace creative judgement.`,
          lesson: `Behavioural data can reduce risk on a big bet, but it shows what people did with past options. Judgement was still needed to imagine a new product.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Insight from immersion',
          html: `<p>P&G under A.G. Lafley in the 2000s pushed managers to spend time living with and shopping alongside consumers in their homes, and popularised the “first moment of truth” — the seconds at the shelf when a shopper chooses. Ethnography reveals workarounds people never mention in surveys: the detergent scoop nobody uses, the phone propped on a cereal box as a recipe stand. Those workarounds are often the best product briefs.</p>`
        },
        {
          type: 'cycle', title: 'Building personas that stay useful', center: 'Personas',
          steps: [
            { label: 'Gather evidence', desc: 'Combine interviews, ethnography, survey segments and behavioural data — not imagination (basics in marketing-2).' },
            { label: 'Find patterns', desc: 'Cluster by goals, behaviours and constraints, not only demographics.' },
            { label: 'Draft the persona', desc: 'A named archetype with goals, frustrations, context, channels and a quote in their own words.' },
            { label: 'Validate', desc: 'Check the persona against new data: does the segment exist in the numbers and in size?' },
            { label: 'Use in decisions', desc: 'Pin personas to briefs, roadmaps and campaign reviews: “would Priya actually do this?”.' },
            { label: 'Refresh', desc: 'Review yearly; retire personas that no longer match behaviour.' }
          ]
        },
        {
          type: 'interactive', widget: 'decision-tree', title: 'Is the research worth its cost?',
          note: 'Model a launch decision with success and failure payoffs. Compare the expected value with and without information; research is only worth buying if its cost is below the value of the information it provides.'
        },
        {
          type: 'checklist', title: 'Before you commission research',
          items: [
            'Write the decision the research will inform and the options on the table',
            'State what result would change your mind — the decision threshold',
            'Check internal records and existing studies first',
            'Pick the approach that observes behaviour where possible, not just opinions',
            'Define who to sample: user, buyer or influencer',
            'Pilot the questionnaire on 5–10 people',
            'Estimate the value of information and cap the budget below it',
            'Agree who will act on the findings, and by when'
          ]
        }
      ],
      terms: [
        { term: 'Exploratory research', def: 'Research to shed light on the real nature of a problem and suggest possible solutions or ideas.' },
        { term: 'Causal research', def: 'Research that tests cause-and-effect relationships, usually by experiment.' },
        { term: 'Ethnographic research', def: 'Observation and immersion in people’s natural settings to understand behaviour and unspoken needs.' },
        { term: 'Laddering', def: 'A sequence of “why?” questions that moves from product attributes to deeper personal motives.' },
        { term: 'Probability sample', def: 'A sample in which every member of the population has a known chance of selection, allowing margins of error.' },
        { term: 'Persona', def: 'An evidence-based archetype of a target customer used to guide product and marketing decisions.' },
        { term: 'Value of information', def: 'How much better the expected outcome of a decision becomes if you obtain the information before deciding.' }
      ],
      quiz: [
        {
          q: 'What was the core research failure in the 1985 New Coke decision?',
          options: ['The sample was too small', 'Blind taste preference was measured, but attachment to the original brand and reaction to its removal were not', 'The new formula lost the taste tests', 'There was no competitor research'],
          answer: 1,
          explain: 'The new formula won blind tests. The problem definition missed the emotional meaning of the original.'
        },
        {
          q: 'A team wants to know whether a new checkout page CAUSES more purchases. Which approach is best?',
          options: ['Focus group', 'Ethnography', 'Survey of satisfaction', 'A randomised experiment (A/B test)'],
          answer: 3,
          explain: 'Cause and effect requires an experiment with randomly assigned groups.'
        },
        {
          q: 'A launch has a 60% chance of earning $5M and a 40% chance of losing $3M. With perfect information you would launch only in the good case. What is the expected value of perfect information?',
          options: ['$1.2M', '$1.8M', '$3.0M', '$0.6M'],
          answer: 0,
          explain: 'EV now = 0.6×5 − 0.4×3 = $1.8M. With perfect info = 0.6×5 + 0.4×0 = $3.0M. EVPI = 3.0 − 1.8 = $1.2M.'
        },
        {
          q: 'Which is a projective technique?',
          options: ['A five-point satisfaction scale', 'Asking respondents to complete a story about a brand user', 'A web analytics report', 'A dichotomous yes/no question'],
          answer: 1,
          explain: 'Projective techniques let people project feelings onto an ambiguous task, revealing motives they would not state directly.'
        },
        {
          q: 'An online panel survey of 5,000 people recruited from a gaming site is used to estimate national grocery habits. The main problem is:',
          options: ['The sample is too large', 'Online surveys cannot ask about groceries', 'The sample is a non-probability sample that may not represent the population', 'There is no problem'],
          answer: 2,
          explain: 'Size does not fix selection bias. A large, unrepresentative sample produces a precise wrong answer.'
        }
      ],
      challenge: {
        title: 'Should we research before relaunching the cereal?',
        prompt: `An (illustrative) cereal brand wants to cut sugar by 30% and change the recipe nationally. If customers accept it, the relaunch adds $6M of profit over three years; if loyal buyers reject it, the brand loses $4M. Managers think acceptance is 50/50. A research agency proposes a $250,000 study: ethnographic visits, a home-use test with branded packs, and a two-region market test. They estimate the study would correctly predict the outcome 80% of the time.<br><br>(a) Calculate expected value with no research and with perfect information. (b) Is the study worth commissioning? (c) Design the research plan, explaining how it avoids the New Coke trap.`,
        hints: ['EV(no research) = 0.5 × 6 − 0.5 × 4.', 'EVPI caps what any study can be worth; an 80%-accurate study is worth less.', 'Test the branded product in real use, include “replacement” framing, and keep the original recipe option visible.'],
        model: `<p><b>(a) Expected values</b></p><ul><li>No research: 0.5 × $6M − 0.5 × $4M = <b>$1.0M</b> (so you would launch).</li><li>Perfect information: launch only if accepted → 0.5 × $6M + 0.5 × $0 = $3.0M. <b>EVPI = $2.0M</b>.</li></ul><p><b>(b) Imperfect study (80% accurate).</b> P(positive result) = 0.5×0.8 + 0.5×0.2 = 0.5. If positive, P(accept) = 0.4 ÷ 0.5 = 0.8 → EV of launching = 0.8×6 − 0.2×4 = $4.0M. If negative, P(accept) = 0.1 ÷ 0.5 = 0.2 → EV of launching = 0.2×6 − 0.8×4 = −$2.0M, so do not launch (EV $0). EV with study = 0.5×4.0 + 0.5×0 = <b>$2.0M</b>. Value of the study = $2.0M − $1.0M = <b>$1.0M</b>, far above its $250,000 cost → <b>commission it</b>.</p><p><b>(c) Plan</b></p><ul><li><b>Problem:</b> “Will current loyal buyers keep buying if the recipe changes, and will new health-minded buyers join?” — not “which tastes better?”.</li><li><b>Approaches:</b> ethnographic breakfast visits to see how the cereal is used (with milk, as a snack, by kids); a branded home-use test over two weeks, since sip or bite tests mislead; a two-region market test measuring repeat purchase.</li><li><b>Sampling:</b> quota sample of heavy loyal buyers (the risk group) plus lapsed and new category buyers; the sampling unit includes parents who buy and children who eat.</li><li><b>Instruments:</b> include explicit replacement framing (“the old recipe will no longer be sold”) and laddering to surface emotional attachment.</li><li><b>Decision rule:</b> relaunch nationally if repeat among loyal buyers in test regions stays within 5 points of control; otherwise launch the low-sugar version as a line extension and keep the original.</li></ul>`
      },
      takeaways: [
        'Define the decision before the method — most research failures are problem-definition failures.',
        'Prefer observing behaviour and running experiments over asking opinions when the stakes are high.',
        'Samples must represent the people whose behaviour you need to predict; size cannot fix bias.',
        'Research is worth buying only up to the value of the information it provides.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'mm-strategy-7',
      title: 'Measuring marketing productivity: metrics, control and dashboards',
      level: 'Advanced',
      minutes: 20,
      hook: `A CMO who cannot show plan versus actual, and explain the gap, will eventually have the budget set by someone who can.`,
      eli5: `Imagine a car dashboard. You do not need to see every wire in the engine — you need speed, fuel, temperature and a warning light when something is wrong. A marketing dashboard is the same: a few numbers that tell the driver (the boss) if the business is on track, and a warning light that says “look here, something changed” early enough to steer.`,
      blocks: [
        {
          type: 'text', title: 'From attribution to control',
          html: `<p>You met attribution, ROAS, MER and the basics of marketing-mix modelling in <a href="#/lesson/marketing-5">Marketing, lesson 5</a>. This lesson is about <b>management control</b>: a metrics hierarchy the whole company understands, variance analysis that explains why the plan was missed, and dashboards built around decisions.</p><p><span class="hl">Marketing-mix modelling</span> uses years of aggregate sales, price, distribution and media data, plus outside factors like seasonality and the economy, to estimate how much each activity contributed — useful for annual budget allocation. Its outputs belong on the dashboard as <b>response curves</b> and <b>marginal ROI</b>, not as precise truths.</p>`
        },
        {
          type: 'pyramid', title: 'The marketing metrics hierarchy',
          levels: [
            { label: 'Business value', note: 'board level', desc: 'Profit, cash flow, shareholder value, customer equity (the sum of customers’ lifetime values).' },
            { label: 'Customer metrics', note: 'CMO level', desc: 'Customer lifetime value, retention, share of wallet, satisfaction and advocacy.' },
            { label: 'Brand metrics', note: 'brand managers', desc: 'Awareness, consideration, preference, perceived quality and price premium.' },
            { label: 'Activity & efficiency metrics', note: 'channel teams', desc: 'Reach, cost per thousand, click-through, cost per lead, conversion rate.' }
          ]
        },
        {
          type: 'map', title: 'What to measure', center: 'Marketing metrics',
          branches: [
            { label: 'Awareness & attitudes', desc: 'Prompted and unprompted awareness, consideration, image attributes.', children: ['Awareness', 'Consideration'] },
            { label: 'Behaviour', desc: 'Penetration, purchase frequency, loyalty and churn.', children: ['Penetration', 'Repeat rate'] },
            { label: 'Financial', desc: 'Sales, margin, contribution after marketing, marketing ROI.', children: ['CAM', 'ROI'] },
            { label: 'Customer value', desc: 'Lifetime value, acquisition cost, payback.', children: ['CLV', 'CAC'] },
            { label: 'Competitive', desc: 'Market share, relative price, share of voice vs share of market.', children: ['Share', 'Share of voice'] },
            { label: 'Innovation', desc: 'Share of sales from products launched in the last three years; pipeline health.' },
            { label: 'Internal', desc: 'Staff awareness of goals, commitment to the brand promise, resources adequacy.' }
          ]
        },
        {
          type: 'framework', name: 'The four types of marketing control', when: 'Design your control system once a year; run it monthly and quarterly',
          steps: [
            { label: 'Annual-plan control', desc: 'Owner: top and middle management. Are we achieving planned results? Tools: sales analysis, market-share analysis, marketing-expense-to-sales ratios, financial analysis, customer-attitude tracking.' },
            { label: 'Profitability control', desc: 'Owner: marketing controller. Where are we making and losing money — by product, territory, customer, segment and channel? Use activity-based costing so marketing and service costs land where they are caused.' },
            { label: 'Efficiency control', desc: 'Owner: line and staff managers. How efficient is each lever: sales force (calls per day, cost per call), advertising (cost per thousand, recall), promotion (redemption, incremental sales), distribution (stock-outs, delivery time)?' },
            { label: 'Strategic control', desc: 'Owner: top management and auditors. Are we pursuing the best opportunities? Tool: the marketing audit — comprehensive, systematic, independent and periodic — covering environment, strategy, organisation, systems, productivity and functions.' }
          ]
        },
        {
          type: 'formula', name: 'Sales-variance analysis: price vs volume',
          expr: 'Price variance = (Planned price − Actual price) × Actual units;  Volume variance = (Planned units − Actual units) × Planned price',
          explain: `Splits a revenue shortfall into “we sold for less” and “we sold fewer”. The two parts add up to the total variance. Follow with <b>micro-sales analysis</b>: which products, regions or customers caused the volume gap?`,
          example: `Plan: 10,000 units at $50 = $500,000. Actual: 9,000 units at $46 = $414,000. Shortfall $86,000. Price variance = ($50 − $46) × 9,000 = <b>$36,000</b> (≈ 42%). Volume variance = (10,000 − 9,000) × $50 = <b>$50,000</b> (≈ 58%). Check: 36,000 + 50,000 = 86,000. If one region of three explains most of the 1,000 missing units, that is where to look first.`
        },
        {
          type: 'flow', title: 'Designing a decision-led dashboard',
          steps: [
            { label: 'List the decisions', desc: 'Which recurring decisions should the dashboard drive? Budget shifts between channels, price moves, stock allocation, creative refresh.' },
            { label: 'Pick a few metrics per decision', desc: 'One outcome metric plus one or two leading indicators; no more than about a dozen tiles in total.' },
            { label: 'Set plan, thresholds and owners', desc: 'Every tile shows target, actual and variance with a named owner and a tolerance band (e.g. ±5%).' },
            { label: 'Build the data pipeline', desc: 'Single definitions, automated feeds, a data-quality check and a refresh cadence that matches the decision speed.' },
            { label: 'Is a metric outside its tolerance band?', kind: 'decision', desc: 'Exception reporting keeps attention on what changed.', branches: [ { label: 'Yes', to: 'Diagnose: price, volume, mix, competitor, execution' }, { label: 'No', to: 'No action; review trends monthly' } ] },
            { label: 'Act and record', desc: 'Log the decision taken, then check next period whether it worked.' }
          ]
        },
        {
          type: 'compare', title: 'Illustrative plan-vs-actual dashboard (one quarter)', headers: ['Metric', 'Plan', 'Actual', 'Variance', 'Status and next step'],
          rows: [
            ['Revenue', '$2.40M', '$2.21M', '−7.9%', 'Red: run price/volume split'],
            ['Contribution after marketing', '$480k', '$402k', '−16%', 'Red: margin falling faster than sales'],
            ['New customers', '4,000', '4,150', '+3.8%', 'Green'],
            ['Repeat rate (90-day)', '35%', '29%', '−6 pts', 'Red: likely cause of revenue gap'],
            ['Blended CAC', '$60', '$63', '+5%', 'Amber: within tolerance, watch'],
            ['Unaided brand awareness', '22%', '23%', '+1 pt', 'Green']
          ]
        },
        {
          type: 'case', company: 'Tesco (Clubcard)', year: '1995 onward', title: 'Turning loyalty data into a management system',
          situation: `In the early 1990s Tesco was a strong UK grocer but not the clear leader, and had little detailed knowledge of who its customers were.`,
          decision: `After trials, Tesco launched the Clubcard loyalty scheme nationally in 1995 and worked with the analytics firm dunnhumby to analyse members’ shopping baskets — segmenting customers, tailoring offers and informing ranging and store decisions. Tesco’s chairman at the time is often quoted as saying the analysts knew more about his customers after three months than he had learnt in decades.`,
          outcome: `Tesco became the UK’s largest grocer in the mid-1990s and the Clubcard became one of the best-known loyalty programmes in the world. Tesco later bought control of dunnhumby. The programme’s value depended on acting on the data — personalised coupons, ranges and prices — not just collecting it.`,
          lesson: `Metrics create value only when they are tied to decisions and owners. Customer-level data moved Tesco’s control system from “how much did we sell?” to “which customers changed behaviour, and why?”.`
        },
        {
          type: 'interactive', widget: 'funnel', title: 'Diagnose a plan-vs-actual gap',
          note: 'Set the planned traffic and conversion rates, then enter the actuals. Which single stage explains most of the revenue gap? That is the tile your dashboard should flag first.'
        },
        {
          type: 'scenario',
          prompt: `Quarterly revenue is 8% below plan. The dashboard shows new-customer numbers on target but the 90-day repeat rate down 6 points. The CEO asks you to raise the acquisition budget by 20%. What do you say?`,
          options: [
            { text: 'Agree — more new customers will fill the gap.', feedback: 'Acquisition is already on plan. Pouring more customers into a leaky bucket raises CAC and hides the real problem.', good: false },
            { text: 'Propose diagnosing the repeat-rate drop first (cohort analysis, product reviews, delivery times, competitor offers), fix the cause, and hold acquisition spend until repeat recovers.', feedback: 'Right. Variance analysis points at retention; the action should match the cause.', good: true },
            { text: 'Change the plan target so revenue is no longer red.', feedback: 'Moving the goalposts removes the signal without fixing anything.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Marketing metrics', def: 'Quantifiable measures used to quantify, compare and interpret marketing performance.' },
        { term: 'Marketing-mix modelling', def: 'Statistical analysis of aggregate historical data to estimate the sales effect of each marketing activity.' },
        { term: 'Marketing dashboard', def: 'A concise, regularly updated display of key metrics, targets and variances used to steer decisions.' },
        { term: 'Sales-variance analysis', def: 'Splitting the gap between planned and actual sales into price and volume effects.' },
        { term: 'Marketing audit', def: 'A comprehensive, systematic, independent and periodic review of a unit’s marketing environment, strategy and activities.' },
        { term: 'Customer equity', def: 'The total of the discounted lifetime values of all a firm’s customers.' },
        { term: 'Share of voice', def: 'A brand’s share of total category advertising or media presence, often compared with its market share.' }
      ],
      quiz: [
        {
          q: 'Plan: 20,000 units at $25. Actual: 18,000 units at $24. What is the price variance?',
          options: ['$18,000', '$20,000', '$50,000', '$68,000'],
          answer: 0,
          explain: 'Price variance = ($25 − $24) × 18,000 = $18,000. Volume variance = 2,000 × $25 = $50,000. Total = $68,000.'
        },
        {
          q: 'Which control type asks “are we pursuing the best market opportunities at all?”',
          options: ['Efficiency control', 'Annual-plan control', 'Profitability control', 'Strategic control'],
          answer: 3,
          explain: 'Strategic control, typically via a marketing audit, questions the strategy itself.'
        },
        {
          q: 'A campaign costs $200,000 and generates $900,000 of incremental revenue at a 30% gross margin. What is its marketing ROI?',
          options: ['350%', '35%', '−65%', '135%'],
          answer: 1,
          explain: 'Incremental gross margin = $900,000 × 30% = $270,000. ROI = (270,000 − 200,000) ÷ 200,000 = 35%.'
        },
        {
          q: 'Which is the best design principle for a marketing dashboard?',
          options: ['Show every metric available so nothing is missed', 'Update it once a year', 'Build it around recurring decisions, with targets, tolerance bands and owners', 'Use only activity metrics such as clicks'],
          answer: 2,
          explain: 'Dashboards exist to trigger decisions. Too many tiles hide the signal.'
        },
        {
          q: 'Why is marketing-mix modelling better suited to annual budget allocation than to daily campaign tweaks?',
          options: ['It uses aggregate historical data over long periods and estimates average response curves', 'It only works for digital channels', 'It tracks individual users across devices', 'It needs no data at all'],
          answer: 0,
          explain: 'MMM estimates average, aggregate effects across channels and time — strategic, not tactical, guidance.'
        }
      ],
      challenge: {
        title: 'Explain the miss to the board',
        prompt: `An (illustrative) premium pet-food brand planned to sell 120,000 bags at $40 in the quarter. It sold 105,000 bags at an average realised price of $37 (heavier promotions). By region: North planned 50,000, sold 49,000; South planned 40,000, sold 30,000; West planned 30,000, sold 26,000. Marketing spent $600,000 against a plan of $550,000. Contribution margin before marketing is 40% of revenue at plan price; each $1 of price reduction comes straight off contribution.<br><br>(a) Split the revenue variance into price and volume. (b) Identify where the volume went. (c) Compute planned vs actual contribution after marketing. (d) Recommend three dashboard tiles and actions.`,
        hints: ['Planned revenue = 120,000 × $40; actual = 105,000 × $37.', 'Contribution per bag at plan = 40% × $40 = $16; actual = $16 − $3.', 'Compare each region’s shortfall with the 15,000-bag total.'],
        model: `<p><b>(a) Revenue variance</b></p><ul><li>Plan: 120,000 × $40 = $4.80M. Actual: 105,000 × $37 = $3.885M. Shortfall <b>$915,000</b>.</li><li>Price variance = ($40 − $37) × 105,000 = <b>$315,000</b> (≈ 34%).</li><li>Volume variance = (120,000 − 105,000) × $40 = <b>$600,000</b> (≈ 66%). Check: 315 + 600 = 915.</li></ul><p><b>(b) Micro-sales analysis:</b> shortfall 15,000 bags — North −1,000 (2% below plan), South −10,000 (25% below), West −4,000 (13% below). <b>South explains two-thirds of the volume gap</b>; investigate distribution losses, a competitor launch or stock-outs there.</p><p><b>(c) Contribution after marketing</b></p><ul><li>Plan: 120,000 × $16 = $1.92M − $0.55M = <b>$1.37M</b>.</li><li>Actual: 105,000 × $13 = $1.365M − $0.60M = <b>$0.765M</b>.</li><li>Gap ≈ <b>$605,000 (−44%)</b> — much worse than the 19% revenue miss, because promotions cut margin and spend rose.</li></ul><p><b>(d) Dashboard and actions</b></p><ul><li><b>Realised price vs list</b> (tolerance −3%): pause blanket promotions; keep only those with proven incremental volume.</li><li><b>Volume by region vs plan</b> (tolerance −5%): South root-cause review within two weeks — distribution points, rate of sale, competitor activity.</li><li><b>Contribution after marketing vs plan</b> (tolerance −10%): require any extra spend to show expected incremental contribution before approval.</li></ul><p><b>Board message:</b> two-thirds of the miss is volume, concentrated in the South; one-third is price we gave away. We will fix distribution in the South and stop margin-eroding promotions; we expect to recover half the contribution gap next quarter.</p>`
      },
      takeaways: [
        'Build a metrics hierarchy that links channel activity to brand, customer and business value.',
        'Run four kinds of control: annual-plan, profitability, efficiency and strategic (the marketing audit).',
        'Split every revenue miss into price and volume, then drill down to where the volume went.',
        'Design dashboards around decisions: few tiles, clear targets, tolerance bands and owners.'
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-mm-new-coke', company: 'The Coca-Cola Company', industry: 'Beverages', year: '1985', track: 'mm-strategy',
    title: 'The taste tests say sweeter wins: replace a 99-year-old formula?',
    situation: `Coca-Cola had led the cola market for decades, but its share had been slipping for years while Pepsi gained, helped by its blind “Pepsi Challenge” taste-test advertising. Coca-Cola’s own researchers developed a sweeter formula and ran very large blind taste tests — reported at around 200,000 — in which the new formula beat both the original Coke and Pepsi. The company had recently enjoyed a hit with Diet Coke, showing it could launch new colas. Management’s research had not tested how loyal drinkers would react to the original being withdrawn.`,
    question: 'You lead Coca-Cola. Do you replace the original formula with the new one?',
    options: [
      { text: 'Yes — replace the original nationwide. The taste data is overwhelming and one strong flagship is simpler to market.', result: 'You risk a backlash from loyal drinkers who value the original as part of their identity and memories; sip-test wins may not translate into repeat buying.' },
      { text: 'Launch the new formula alongside the original under a different name and let the market decide.', result: 'Protects the core brand while capturing sweeter-taste fans, at the cost of some cannibalisation and a more complex portfolio. A reasonable hedge.' },
      { text: 'Before deciding, extend the research: test branded products in home use over weeks, explicitly ask loyal drinkers about the original being withdrawn, and run a regional market test of the replacement.', result: 'Costs a few months and may leak to the press, but tests the real decision — replacing an icon — rather than a sip preference. It would likely have surfaced the emotional attachment before a national launch.', best: true },
      { text: 'Do nothing — the original is sacred, and taste tests are irrelevant.', result: 'Avoids the backlash but ignores a genuine competitive problem and the evidence that tastes were shifting.' }
    ],
    whatHappened: `Coca-Cola replaced the original with “New Coke” in April 1985. Consumers reacted with intense anger — calls, letters, protest groups and heavy media coverage. After 79 days, in July 1985, the company brought back the original as “Coca-Cola Classic”, which soon outsold New Coke. The new formula was later renamed and eventually discontinued. The episode is widely taught as a research failure of problem definition: the studies answered “which tastes better in a sip?” rather than “what happens if we take away the original?”.`,
    lessons: ['Define the research problem as the actual decision, including what customers lose', 'Blind tests strip out the brand meaning that drives real purchase', 'Test replacement decisions in market before going national', 'Brand equity can be worth more than product superiority'],
    frameworks: ['Marketing research process', 'Problem definition', 'Brand equity', 'Market testing']
  },
  {
    id: 'case-mm-tata-nano', company: 'Tata Motors', industry: 'Automobiles', year: '2008', track: 'mm-strategy',
    title: 'A car for scooter families: how do you position it and how much do you build?',
    situation: `In January 2008 Tata Motors unveiled the Nano at India’s Auto Expo with a target price of ₹1 lakh, inspired by Ratan Tata’s wish to give families who rode on scooters a safer alternative. The potential market looked enormous: millions of two-wheeler households. Global media called it “the world’s cheapest car”. Later in 2008, protests over land at the planned Singur plant in West Bengal forced the company to move production to Sanand in Gujarat, adding delay and cost. A large dedicated plant was being prepared.`,
    question: 'You run the Nano launch. How do you position the car and plan capacity?',
    options: [
      { text: 'Lean into “the world’s cheapest car” and build for the full potential market of two-wheeler households.', result: 'Huge initial publicity, but buyers for whom a car is a status purchase may shun a car labelled “cheapest”; capacity sized on potential rather than available demand risks sitting idle.' },
      { text: 'Position it as a smart, affordable, safe family and city car — stress value and aspiration rather than cheapness — and phase capacity, releasing more only as repeat sales, financing uptake and rural reach prove out.', result: 'Less headline noise, but protects aspiration and reduces the risk of over-building. Requires research on how target buyers judge status and on financing availability.', best: true },
      { text: 'Target only rural first-time buyers through existing truck and rural dealers, avoiding cities.', result: 'Reaches a real need, but the dealer network, financing and service capacity in rural areas may not be ready, and urban young buyers are left uncontacted.' },
      { text: 'Cancel the project after the Singur setback.', result: 'Avoids further cost but writes off the investment and the learning about frugal engineering.' }
    ],
    whatHappened: `The Nano launched in 2009; bookings attracted around two hundred thousand applications and early buyers were chosen by lottery. After the launch rush, sales fell far short of the plant’s capacity. A few early cars caught fire, hurting confidence, and the “cheapest car” label appeared to deter aspirational buyers. Tata Motors later repositioned and upgraded the car, and Ratan Tata said marketing it as the cheapest car had been a mistake. Production ended in 2018. The case is a classic lesson in confusing the potential market with the available and target markets, and in how status needs shape demand.`,
    lessons: ['Size capacity on the available and target market, not the potential market', 'Booking queues and stated intent overstate repeatable demand', 'Price positioning must respect the status meaning of the category', 'Phase irreversible investments until demand signals are validated'],
    frameworks: ['Market levels (potential → penetrated)', 'Demand forecasting', 'Positioning', 'Bottom-of-the-pyramid marketing']
  }
]);
