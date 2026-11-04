/* MBA Studio — Track 35: Business Model Playbooks · Playbook 2 · B2B (Business-to-Business) */
MBA.addTrack({
  id: 'pb-b2b',
  stage: 5,
  order: 35,
  title: 'Playbook: B2B (Business-to-Business)',
  icon: '🏢',
  color: '#2563eb',
  series: 'Business Model Playbooks',
  part: 'Playbook 2 · B2B',
  tagline: 'Sell to companies: fewer customers, bigger cheques, longer cycles and compounding accounts',
  summary: `B2B companies sell to other organisations — software, services, components, supplies or a marketplace that connects business buyers and sellers. This playbook shows how money really flows in B2B, how to define an ideal customer and win the first design partners, how to pick a sales motion and do the pipeline maths, how to price and read ACV, NRR, CAC payback and the magic number, how distribution businesses survive working capital, and how B2B brands, communities and partner ecosystems help a company land, expand and go global.`,
  outcomes: [
    'Map the B2B value chain for SaaS, services, distribution and B2B marketplaces, and know which metrics matter for each',
    'Write an ideal customer profile, size a market bottom-up and map a buying committee before you sell',
    'Win design partners, run paid pilots and letters of intent, and get from 10 to 100 customers',
    'Choose a sales motion (founder-led, PLG, inside, field, channel) and size pipeline, reps and quota',
    'Price with seats, usage, tiers and value, and calculate ACV, NRR, CAC payback, magic number and cash conversion',
    'Scale through land-and-expand, partners and new countries while avoiding the classic B2B failure patterns'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'pb-b2b-1',
      title: 'How B2B works: value chains, money flow and the metrics that matter',
      level: 'Beginner',
      minutes: 15,
      hook: `In B2B one customer can be worth more than ten thousand consumers — but you must convince six to ten of their people, wait months and then keep earning it every year.`,
      eli5: `Imagine you run a lemonade stand. Selling cups to people walking past is B2C. Now imagine you sell big jugs of lemon syrup to every café in town. That is B2B. You have fewer customers, but each one buys a lot, again and again. Before a café buys, the owner, the chef and the accountant all want a say. If your syrup keeps their customers happy, they order more and tell other cafés. If it runs out on a busy day, you lose them for years.`,
      blocks: [
        {
          type: 'text', title: 'What makes B2B different',
          html: `<p>In <b>B2B</b> the buyer is an organisation. It buys to <span class="hl">make money, save money or reduce risk</span>, not for personal pleasure. That changes everything: purchases are justified with numbers, approved by several people, written into contracts and renewed (or not) every year.</p><p>You met the basic selling process in <a href="#/lesson/sales-1">Sales, lesson 1</a>. This playbook goes deeper and model-specific: how each type of B2B business makes money, and the numbers a founder or advisor must run.</p>`
        },
        {
          type: 'map', title: 'Four common B2B business models', center: 'B2B',
          branches: [
            { label: 'B2B SaaS / software', desc: 'Sells access to software by subscription or usage. High gross margin (Datadog, for example, reported 81% GAAP gross margin in 2024), big up-front sales and marketing cost, value builds through renewals and expansion.', children: ['ARR', 'NRR', 'CAC payback'] },
            { label: 'Services & agencies', desc: 'Sells people-hours or outcomes: IT services, consulting, agencies, outsourcing. Revenue scales with headcount; the game is utilisation, pricing per project and repeat contracts.', children: ['Utilisation', 'Bill rate', 'Order book'] },
            { label: 'Industrial & distribution', desc: 'Makes or resells physical goods (components, MRO supplies, raw materials). Thin-to-moderate gross margin; profit depends on logistics, credit terms and inventory turns.', children: ['Gross margin', 'Inventory turns', 'Cash conversion'] },
            { label: 'B2B marketplaces', desc: 'Connects business buyers and sellers (procurement, wholesale, listings). Earns a take rate, subscriptions from sellers, or margin when it trades inventory itself.', children: ['GMV', 'Take rate', 'Repeat orders'] }
          ]
        },
        {
          type: 'flow', title: 'How money flows in a typical B2B SaaS deal',
          steps: [
            { label: 'Marketing and sales create a qualified opportunity', kind: 'start', desc: 'You spend money first (ads, content, events, SDRs). This is customer acquisition cost (CAC).' },
            { label: 'Buying committee evaluates', desc: 'Users trial it, IT runs a security review, finance checks ROI, procurement negotiates terms.' },
            { label: 'Is there a signed contract?', kind: 'decision', desc: 'Most deals die here from "no decision", not from losing to a rival.', branches: [ { label: 'Yes', to: 'Invoice and onboarding' }, { label: 'No', to: 'Nurture and retry next budget cycle' } ] },
            { label: 'Invoice, often annually in advance', desc: 'Annual prepay brings cash in before you deliver; it shows up as deferred revenue on the balance sheet.' },
            { label: 'Customer uses the product and renews or expands', kind: 'end', desc: 'Profit arrives in years 2, 3 and beyond. Churn destroys the model; expansion makes it compound.' }
          ]
        },
        {
          type: 'compare', title: 'Same label, different economics', headers: ['', 'B2B SaaS', 'IT services', 'MRO distribution', 'B2B marketplace'],
          rows: [
            ['What is sold', 'Software access', 'Skilled people and projects', 'Physical products, delivered', 'Matching, trust, sometimes credit'],
            ['Typical gross margin', 'High', 'Medium (people cost)', 'Low to medium', 'High on fees; low if it trades stock'],
            ['Main cash risk', 'CAC paid before revenue', 'Bench (unbilled) staff', 'Inventory and customer credit', 'Subsidies and credit losses'],
            ['Key metric', 'NRR and CAC payback', 'Utilisation and order book', 'Cash conversion cycle', 'Repeat GMV and take rate'],
            ['Example', 'Salesforce, Zoho, Freshworks', 'TCS, Infosys', 'Grainger, Moglix', 'IndiaMART, Udaan']
          ]
        },
        {
          type: 'formula', name: 'Net revenue retention (NRR)', expr: 'NRR = (Starting ARR − churn − contraction + expansion) ÷ Starting ARR',
          explain: 'Take the recurring revenue from customers you had a year ago and see what they pay today. Above 100% means existing customers grow even if you sign no new ones.',
          example: 'Start: ₹10 crore ARR. Lost customers: ₹0.8 crore. Downgrades: ₹0.2 crore. Upsells: ₹1.5 crore. NRR = (10 − 0.8 − 0.2 + 1.5) ÷ 10 = 105%. SaaS Capital\'s 2025 survey of over 1,000 private B2B SaaS firms found a median NRR of 101% and gross retention of 91%.'
        },
        {
          type: 'case', company: 'Tata Consultancy Services (TCS)', year: 'FY2025', title: 'A services model that compounds through contracts',
          situation: `TCS sells IT services — building, running and modernising systems for large enterprises worldwide. Revenue scales with skilled people, so the business must keep a very large workforce busy on billable work.`,
          decision: `Instead of chasing one-off projects, TCS builds a large multi-year order book and staffs it through a global delivery model, onboarding tens of thousands of trainees a year (42,000 in FY25) to keep labour costs and capacity predictable.`,
          outcome: `In FY25 TCS crossed US$30 billion in revenue (rupee revenue ₹2,55,324 crore, up 6%), signed deals with total contract value of $39.4 billion ($21.6 billion of it from North America), ended the year with 607,979 employees and reported a Q4 operating margin of 24.2%.`,
          lesson: `In services, the order book is your pipeline and utilisation is your gross margin. Growth means hiring ahead of demand — so contract visibility matters as much as winning deals.`
        },
        {
          type: 'case', company: 'W.W. Grainger', year: '2024', title: 'Two distribution models under one roof',
          situation: `Grainger distributes maintenance, repair and operating (MRO) supplies — the gloves, bearings, tools and safety gear every factory needs but rarely plans for. Large customers want service and account managers; small ones want to search and click.`,
          decision: `It runs two models: a "High-Touch" business for large North American customers, with about 2 million products and inventory-management services, and an "Endless Assortment" online model (Zoro.com with 14 million+ products and Japan's MonotaRO with 24 million+).`,
          outcome: `In 2024 Grainger reported sales of $17.2 billion, up 4.2%, and about $1.9 billion of profit. The online Endless Assortment segment grew faster in Q4 (15.1%), driven by B2B and enterprise customers at MonotaRO.`,
          lesson: `One B2B market can need two different operating models. Match cost-to-serve to customer size: people for complex accounts, self-serve for the long tail.`
        },
        {
          type: 'pyramid', invert: true, title: 'The B2B revenue funnel (from strangers to compounding accounts)',
          levels: [
            { label: 'Ideal-customer accounts in your market', desc: 'Companies that match your ICP. You do not sell to everyone; you sell to accounts with the problem and budget.' },
            { label: 'Engaged accounts', desc: 'Someone in the account reads, trials, attends a webinar or replies to outreach.' },
            { label: 'Qualified opportunities', desc: 'Pain, budget owner, timing and decision process confirmed (see MEDDPICC in Sales, lesson 2).' },
            { label: 'Closed-won customers', desc: 'A signed contract. Typical B2B win rates on qualified deals are well below half.' },
            { label: 'Expanded accounts', desc: 'More seats, more products, more sites. Expansion is the cheapest revenue you will ever earn.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you choose a B2B model',
          items: [
            { q: 'Does the buyer save or make measurable money from what I sell?', why: 'B2B purchases are justified with numbers; without a business case, deals stall at finance.' },
            { q: 'Who signs, who uses and who can block the purchase?', why: 'Users, budget owners and IT/procurement are often different people with different fears.' },
            { q: 'Is revenue recurring, repeat or one-off?', why: 'Recurring revenue lets you spend on acquisition and earn it back over years; one-off projects do not.' },
            { q: 'How much cash do I need before a customer pays?', why: 'SaaS spends CAC up front; distribution funds inventory and credit; services fund bench staff.' },
            { q: 'What will it cost to serve the smallest customer I accept?', why: 'Small accounts on a high-touch model destroy margin; set a floor or a self-serve path.' },
            { q: 'What makes a customer stay and grow every year?', why: 'In B2B most lifetime value comes after the first contract, through renewals and expansion.' }
          ]
        }
      ],
      terms: [
        { term: 'ARR (annual recurring revenue)', def: 'The yearly value of all active subscription contracts at a point in time. It excludes one-off fees.' },
        { term: 'ACV (annual contract value)', def: 'The average yearly value of one customer contract. It shapes which sales motion you can afford.' },
        { term: 'Net revenue retention (NRR)', def: 'Revenue today from last year\'s customers divided by their revenue a year ago, including upsells and losses.' },
        { term: 'Order book / TCV', def: 'Total contract value of signed but not yet delivered work. In services it is the best predictor of next year\'s revenue.' },
        { term: 'MRO', def: 'Maintenance, repair and operating supplies: the everyday items factories and offices consume, from fasteners to safety gear.' },
        { term: 'Buying committee', def: 'The group of people inside a customer who influence, approve or can veto a purchase.' }
      ],
      quiz: [
        { q: 'A SaaS firm starts the year with $2m ARR from existing customers. It loses $200k to churn, $100k to downgrades and gains $400k from upsells. What is its NRR?', options: ['95%', '105%', '110%', '120%'], answer: 1, explain: '(2,000 − 200 − 100 + 400) ÷ 2,000 = 2,100 ÷ 2,000 = 105%.' },
        { q: 'Which metric matters most for the health of an MRO distributor?', options: ['Daily active users', 'Viral coefficient', 'Net Promoter Score only', 'Cash conversion cycle'], answer: 3, explain: 'Distributors fund inventory and customer credit, so how fast cash goes out and comes back decides whether growth can be financed.' },
        { q: 'Why does an IT services firm like TCS hire tens of thousands of trainees each year?', options: ['Because revenue scales with skilled people, so capacity must be built ahead of contracted demand', 'To lower gross margin deliberately', 'Because software licences require it', 'To avoid signing multi-year contracts'], answer: 0, explain: 'Services revenue is people-hours. The order book tells the firm how much capacity to build.' },
        { q: 'Grainger runs a High-Touch model and an Endless Assortment online model. What is the main logic?', options: ['Tax reasons', 'Avoiding competition with MonotaRO', 'Matching cost-to-serve to customer size and needs', 'Selling only to consumers online'], answer: 2, explain: 'Large, complex accounts justify people and services; the long tail is served cheaply through self-serve e-commerce.' },
        { q: 'In a B2B SaaS model, when does a typical customer become profitable for the seller?', options: ['On the day the contract is signed', 'After enough months of gross profit to repay acquisition cost — often in year two or later', 'Before the first demo', 'Never; SaaS only profits from services'], answer: 1, explain: 'CAC is spent up front and recovered through monthly gross profit, so renewals and expansion are where profit lives.' }
      ],
      challenge: {
        title: 'Pick the right B2B model for a capability',
        prompt: `<p>Three engineers have built software that predicts when factory machines will fail. They could:</p><ul><li><b>A. SaaS:</b> sell a subscription at about ₹6 lakh per plant per year; gross margin around 80%; they estimate ₹7 lakh of sales and marketing cost to win each plant.</li><li><b>B. Services:</b> run analytics projects at ₹25 lakh per project, with about 40% gross margin after engineer salaries; most clients buy one project.</li><li><b>C. Distribution add-on:</b> bundle sensors plus software and resell through an MRO distributor, earning ₹1.5 lakh margin per plant per year after the distributor's cut, with little acquisition cost of their own.</li></ul><p>Compare the three models over three years for one customer plant, assuming SaaS customers renew for three years and services clients buy once. Which would you start with, and why?</p>`,
        hints: ['For SaaS: three years of gross profit minus the one-time acquisition cost.', 'For services: one project\'s gross profit. For the distribution route, think about who owns the customer relationship.'],
        model: `<p><b>Three-year gross profit per plant</b></p><ul><li><b>A. SaaS:</b> ₹6 lakh × 80% = ₹4.8 lakh a year. Over 3 years = ₹14.4 lakh, minus ₹7 lakh CAC = <b>₹7.4 lakh</b>. Year 1 alone is negative (4.8 − 7 = −₹2.2 lakh), so this needs funding up front.</li><li><b>B. Services:</b> ₹25 lakh × 40% = <b>₹10 lakh</b>, mostly in year 1 — but it does not repeat, and every new project needs new selling and new engineers.</li><li><b>C. Distribution:</b> ₹1.5 lakh × 3 = <b>₹4.5 lakh</b>, almost no CAC, but the distributor owns the customer and the data.</li></ul><p><b>Recommendation:</b> start with a few paid services projects (B) to fund the team and learn which predictions customers value most, but design each project so it leaves software running in the plant. Convert those plants into SaaS subscriptions (A) once the product repeats. Use the distributor route (C) later as a channel for smaller plants you cannot reach directly. The SaaS model wins long term because profit compounds through renewals and expansion — provided churn stays low.</p>`
      },
      takeaways: [
        'B2B buyers purchase to make money, save money or reduce risk, so every deal needs a business case.',
        'SaaS, services, distribution and marketplaces share a label but have very different cash and margin profiles.',
        'NRR above 100% means existing customers grow on their own; it is the engine of B2B value.',
        'Match cost-to-serve to customer size: people for complex accounts, self-serve for the long tail.'
      ],
      sources: [
        { title: 'Outlook Business — TCS Q4 FY25 results, FY25 revenue crosses $30bn', url: 'https://www.outlookbusiness.com/corporate/tcs-q4-results-net-profit-declines-2-misses-street-estimates' },
        { title: 'Distribution Strategy Group — Grainger sales hit $17.2B in 2024', url: 'https://distributionstrategy.com/2025/01/grainger-sales-hit-17-2b-in-2024-up-4-2/' },
        { title: 'SaaS Capital — 2025 B2B SaaS Retention Benchmarks', url: 'https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf' },
        { title: 'Growth Method — Gartner B2B buying journey explained', url: 'https://www.growthmethod.com/gartner-b2b-buying-journey/' }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'pb-b2b-2',
      title: 'B2B market study: ICP, bottom-up sizing and buying committees',
      level: 'Beginner',
      minutes: 15,
      hook: `In B2B you can often list every possible customer by name — so stop guessing market size from reports and count the accounts.`,
      eli5: `If you sell football boots to everyone, you guess how many people play football. If you sell kit to football clubs, you can open the league table and count them. B2B market study is like that: write down exactly which clubs you serve, count them, ask how much each spends, and find out who in each club decides — the coach, the captain or the treasurer.`,
      blocks: [
        {
          type: 'text', title: 'Start with the ideal customer profile (ICP)',
          html: `<p>An <b>ICP</b> describes the type of <i>company</i> that gets the most value from you and is easiest to win and keep: industry, size, geography, technology used, trigger events and budget owner. A <b>persona</b> (from <a href="#/lesson/marketing-2">Marketing, lesson 2</a>) describes a <i>person</i> inside that company.</p><p>A good ICP is narrow enough that you could list 500 real company names that fit it. "SMEs in India" is not an ICP; "auto-component makers in Pune and Chennai with 200–1,000 employees and a central maintenance team" is.</p>`
        },
        {
          type: 'framework', name: 'Build an ICP in five passes', when: 'Before your first outbound campaign, and again after every 20 closed deals',
          steps: [
            { label: '1. Firmographics', desc: 'Industry, revenue band, headcount, number of sites, region. Use public data (company registries, LinkedIn, industry associations).' },
            { label: '2. Technographics', desc: 'What tools and systems they already run. A company already on a modern ERP or cloud stack is easier to integrate with.' },
            { label: '3. Pain and trigger events', desc: 'What happens that makes the problem urgent: a new regulation, an audit failure, a new plant, a funding round, a new CXO.' },
            { label: '4. Budget owner and buying committee', desc: 'Whose budget pays, who uses, who signs, who can block (IT security, legal, procurement).' },
            { label: '5. Disqualifiers', desc: 'Signals that predict churn or endless sales cycles: too small, heavy customisation needs, no internal champion.' }
          ]
        },
        {
          type: 'formula', name: 'Bottom-up B2B market sizing', expr: 'SAM = Number of ICP accounts × realistic annual spend per account',
          explain: 'Count the accounts that match your ICP and multiply by what one account would pay you per year. Top-down "industry reports" are only a cross-check. (Basic TAM/SAM/SOM is in Validation, lesson 4.)',
          example: 'Illustrative: 50,000 trucking firms with 10–100 trucks, average 30 trucks, at ₹500 per truck per month = ₹1.8 lakh ACV. SAM = 50,000 × ₹1.8 lakh = ₹900 crore. Winning 3% in five years = 1,500 customers = ₹27 crore ARR.'
        },
        {
          type: 'pyramid', invert: true, title: 'From every company to accounts you can actually win (illustrative)',
          levels: [
            { label: 'All companies in the industry', note: 'e.g. every trucking firm', desc: 'Includes one-truck owners and giant fleets who will never buy the same product.' },
            { label: 'ICP accounts (SAM)', note: '50,000 firms × ₹1.8 lakh', desc: 'Right size, right problem, a fleet manager who owns the budget.' },
            { label: 'Reachable this year', desc: 'Accounts in the regions, languages and channels you can cover with today\'s team.' },
            { label: 'In-market now', desc: 'Accounts with a trigger event: new regulation, rising breakdowns, a new fleet manager.' },
            { label: 'Realistic share (SOM)', note: '1,500 customers in 5 years', desc: 'What your team, product and channels can win against competitors and "do nothing".' }
          ]
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Cross-check your bottom-up number', note: 'Enter the top-down market, then shrink it to the share your ICP represents. If the top-down SOM is far from your bottom-up count of accounts × ACV, one of your assumptions is wrong.'
        },
        {
          type: 'map', title: 'Who sits on a B2B buying committee', center: 'Buying committee',
          branches: [
            { label: 'Economic buyer', desc: 'Owns the budget and signs. Cares about ROI, risk and strategic fit.', children: ['CFO', 'COO', 'Business head'] },
            { label: 'Champion', desc: 'Wants your product to win and sells it internally when you are not in the room. You must equip them.', children: ['Team lead', 'Ops manager'] },
            { label: 'Users', desc: 'Will use it daily. They decide adoption, which decides renewal.', children: ['Analysts', 'Engineers', 'Agents'] },
            { label: 'Technical evaluators', desc: 'Check integration, data security and reliability.', children: ['IT', 'InfoSec', 'Architects'] },
            { label: 'Blockers / gatekeepers', desc: 'Can delay or kill a deal on terms or compliance.', children: ['Procurement', 'Legal', 'Compliance'] }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Buyers spend most of their journey without you',
          html: `<p>Gartner's research, widely cited, finds complex B2B purchases involve roughly <b>6–10 decision makers</b>, and buyers spend only about <b>17%</b> of the buying journey meeting potential suppliers — around 5–6% with any one vendor when comparing several. Most of the work happens in their own research and internal meetings. Your market study must therefore find out <i>what they read, whom they ask and what they need to convince each other</i>.</p>`
        },
        {
          type: 'compare', title: 'B2B research methods and what each tells you', headers: ['Method', 'Best for', 'Watch out for'],
          rows: [
            ['Problem interviews (20–40)', 'Pain, workarounds, who pays today', 'Polite interest is not demand; ask about past behaviour (The Mom Test)'],
            ['Account mapping on LinkedIn and registries', 'Counting ICP accounts, roles, team sizes', 'Data gaps for small private firms'],
            ['Job postings', 'Signals of pain and budget (e.g. hiring 5 maintenance planners)', 'Not every opening is a buying signal'],
            ['Competitor pricing pages, reviews (G2, Capterra), RFPs', 'Price bands, feature gaps, switching reasons', 'Enterprise prices are hidden; ask buyers'],
            ['Small paid tests (ads, landing page, waitlist)', 'Which segments respond, cost per lead', 'Low budgets give noisy data'],
            ['Channel research (distributors, integrators, trade fairs)', 'How buyers already buy in the category', 'Channel partners may protect existing suppliers']
          ]
        },
        {
          type: 'case', company: 'Moglix', year: '2015–2021', title: 'Picking a procurement wedge in Indian manufacturing',
          situation: `Factories in India buy thousands of low-value MRO items from fragmented local dealers, with little price transparency and messy paperwork. Founder Rahul Garg, an IIT Kanpur alumnus, started Moglix in 2015 to digitise this procurement.`,
          decision: `Moglix focused on industrial buyers — from SMEs to large manufacturing plants — with recurring MRO spend, then added procurement software (used, it said, by Unilever to manage supplies worth $30 billion a year across 70+ countries) and a supply-chain financing arm, Credlix.`,
          outcome: `In 2021 a $120 million Series E led by Falcon Edge and Harvard Management Company made Moglix a unicorn. It said 500,000+ SMEs and 3,000 manufacturing plants across India, Singapore, the UK and the UAE used the platform.`,
          lesson: `A precise ICP (industrial plants with recurring MRO spend) gave Moglix repeat orders and large accounts to expand into with software and finance. Know which accounts carry most of the spend.`
        },
        {
          type: 'case', company: 'IndiaMART', year: 'FY2025', title: 'A marketplace that charges the side with the clearest ROI',
          situation: `IndiaMART lists millions of Indian suppliers and lets business buyers post enquiries. Buyers are many and price-sensitive; suppliers want leads.`,
          decision: `Buyers use it free. Suppliers pay annual subscriptions for visibility and buy-leads, paid in advance — so IndiaMART collects cash before it delivers the service.`,
          outcome: `FY25 consolidated revenue rose 16% to ₹1,388 crore with a 39% standalone EBITDA margin. It ended the year with 217,000 paying suppliers out of 8.4 million supplier storefronts, 27 million unique business enquiries in Q4 and ₹1,678 crore of deferred revenue (up 17%).`,
          lesson: `Market study should identify which side gets measurable value and can pay. Only a few percent of IndiaMART's listed suppliers pay — yet that is enough for a very profitable business.`
        },
        {
          type: 'questions', title: 'Ask before you commit to a B2B market',
          items: [
            { q: 'Can I list 500 real companies that fit my ICP?', why: 'If you cannot name them, you cannot target them, and your market size is a guess.' },
            { q: 'What event makes this problem urgent enough to buy now?', why: 'Without a trigger, deals end in "no decision", the most common B2B loss.' },
            { q: 'Whose budget pays, and is it already allocated to a substitute?', why: 'Replacing an existing line item is easier than creating a new budget.' },
            { q: 'What does the account spend today on the problem, including people and spreadsheets?', why: 'Current spend anchors willingness to pay and your bottom-up size.' },
            { q: 'How do buyers in this category already buy — direct, distributors, integrators, tenders?', why: 'Fighting the existing channel is slow and expensive; using it can be fast.' },
            { q: 'How concentrated is spend — do 20% of accounts hold 80% of value?', why: 'Concentration decides whether you need field sales for a few or self-serve for many.' }
          ]
        }
      ],
      terms: [
        { term: 'Ideal customer profile (ICP)', def: 'A description of the type of company that gains most from your product and is easiest to win and keep.' },
        { term: 'Firmographics', def: 'Company facts used for targeting: industry, size, revenue, location, number of sites.' },
        { term: 'Technographics', def: 'Information about which technologies and software a company already uses.' },
        { term: 'Trigger event', def: 'A change inside an account (new rules, funding, leadership, expansion) that makes buying urgent.' },
        { term: 'Champion', def: 'A person inside the customer who wants you to win and sells for you internally.' },
        { term: 'Bottom-up sizing', def: 'Estimating a market by counting target accounts and multiplying by realistic spend per account.' }
      ],
      quiz: [
        { q: 'There are 8,000 companies that fit your ICP and each would pay about $20,000 a year. What is your bottom-up SAM?', options: ['$16 million', '$80 million', '$160 million', '$1.6 billion'], answer: 2, explain: '8,000 × $20,000 = $160 million.' },
        { q: 'Which is the best example of an ICP?', options: ['All SMEs in Asia', 'Logistics companies in Maharashtra with 50–300 trucks and a fleet manager', 'Anyone who uses spreadsheets', 'Fortune 500 companies, plus startups'], answer: 1, explain: 'It is specific enough to list real accounts and implies a clear user and budget owner.' },
        { q: 'According to widely cited Gartner research, roughly how much of the B2B buying journey is spent meeting potential suppliers?', options: ['About 50%', 'About 75%', 'About 90%', 'About 17%'], answer: 3, explain: 'Buyers do most of the work in independent research and internal meetings, so content and champions matter.' },
        { q: 'Who on a buying committee is most likely to delay a deal over data-protection terms?', options: ['InfoSec or legal', 'The end user', 'The champion', 'The SDR'], answer: 0, explain: 'Technical evaluators and legal/compliance teams act as gatekeepers on security and contract terms.' },
        { q: 'IndiaMART lets buyers use the platform free and charges suppliers. Why does this make sense?', options: ['Buyers are legally barred from paying', 'It lowers the number of suppliers', 'Suppliers get measurable leads and can justify the cost', 'It avoids deferred revenue'], answer: 2, explain: 'Charge the side with clear ROI; keep the other side free to maximise enquiries.' }
      ],
      challenge: {
        title: 'Size and segment a B2B market',
        prompt: `<p>You plan a compliance-tracking SaaS for private hospitals in India. Your research (illustrative): about 6,000 private hospitals with 50+ beds; 1,500 of them belong to chains of 3+ hospitals. Interviews suggest chains would pay ₹4 lakh per hospital per year, standalone hospitals ₹1.5 lakh. Chains have central quality teams and IT reviews; standalone hospitals decide through the owner-doctor.</p><p>1) Calculate the bottom-up SAM for each segment and in total. 2) Which segment would you target first, and with what sales approach? 3) List the buying committee for your first segment.</p>`,
        hints: ['Standalone = 6,000 − 1,500 = 4,500 hospitals.', 'Think about cost to serve: chains give more value per deal but need security reviews.'],
        model: `<p><b>1. Sizing</b></p><ul><li>Chains: 1,500 × ₹4 lakh = <b>₹60 crore</b>.</li><li>Standalone: 4,500 × ₹1.5 lakh = <b>₹67.5 crore</b>.</li><li>Total SAM ≈ <b>₹127.5 crore</b>.</li></ul><p><b>2. First segment:</b> chains. Each chain deal covers 3+ hospitals (₹12 lakh+ per deal), there are central quality teams (a natural champion), and a win becomes a reference for other chains. Approach: founder-led sales into 30–40 named chain accounts, with a paid pilot in one hospital per chain and expansion to the rest. Standalone hospitals come later through a lighter self-serve plan or channel partners (hospital software vendors, accreditation consultants).</p><p><b>3. Buying committee (chain):</b> economic buyer — COO or CFO; champion — head of quality/accreditation; users — quality officers and nursing heads; technical evaluator — IT/InfoSec (patient data); blockers — procurement and legal. Prepare an ROI story (avoided penalties, faster audits) for the CFO and a data-security pack for IT.</p>`
      },
      takeaways: [
        'Write an ICP narrow enough to list real accounts; refine it after every 20 deals.',
        'Size B2B markets bottom-up: number of ICP accounts × realistic spend per account.',
        'Map the buying committee early; most of the decision happens without you in the room.',
        'Research how the category is bought today — direct, distributor, integrator or tender — before choosing a channel.'
      ],
      sources: [
        { title: 'KrASIA — Moglix becomes unicorn after $120m round', url: 'https://kr-asia.com/indias-b2b-marketplace-moglix-becomes-latest-unicorn-after-usd-120-million-round' },
        { title: 'Entrepreneur India — IndiaMART closes FY25 results', url: 'https://india.entrepreneur.com/news-and-trends/indiamart-closes-fy25-with-a-net-profit-of-inr-181-crore/490851' },
        { title: 'Growth Method — Gartner B2B buying journey explained', url: 'https://www.growthmethod.com/gartner-b2b-buying-journey/' },
        { title: 'Freshworks — The Freshdesk story: how it started', url: 'https://www.freshworks.com/theworks/company-news/the-freshdesk-story' }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'pb-b2b-3',
      title: 'Starting a B2B company: design partners, pilots and the first 100 customers',
      level: 'Intermediate',
      minutes: 16,
      hook: `Your first B2B customers are not buyers — they are co-designers who will tell you exactly what to build if you give them a reason to care.`,
      eli5: `Imagine designing a new school bag. Instead of guessing, you give prototypes to five students, meet them every week and change the bag based on what breaks. In return they get the finished bag cheaply and their names on the label. In B2B those five students are "design partners". When the bag works for them, their friends — the next customers — believe you faster.`,
      blocks: [
        {
          type: 'timeline', title: 'The B2B start-up path from idea to 100 customers',
          items: [
            { label: 'Weeks 0–6', desc: '30+ problem interviews with people in ICP accounts. Goal: one painful, frequent, budgeted problem.' },
            { label: 'Weeks 4–12', desc: 'Sign 3–5 design partners: free or discounted early access in exchange for weekly feedback and data.' },
            { label: 'Months 3–6', desc: 'Convert design partners to paid pilots with written success criteria; collect letters of intent from look-alike accounts.' },
            { label: 'Months 6–12', desc: 'First 10 paying customers through founder-led sales; publish case studies with numbers.' },
            { label: 'Months 12–24', desc: '10 → 100 customers: repeatable playbook, first sales hire, one or two scalable channels.' }
          ]
        },
        {
          type: 'compare', title: 'Design partner vs pilot vs letter of intent', headers: ['', 'Design partner', 'Paid pilot / proof of concept', 'Letter of intent (LOI)'],
          rows: [
            ['What it is', 'An early customer who co-builds with you', 'A time-boxed trial in a real environment against agreed goals', 'A written, usually non-binding statement of intent to buy if conditions are met'],
            ['Typical price', 'Free or deep discount', 'Paid, often credited to the first annual contract', 'None yet'],
            ['What you get', 'Problem insight, data, a future reference', 'Evidence of value, budget commitment, a path to contract', 'Proof of demand for investors and your own planning'],
            ['Main risk', 'Building a custom tool for one client', 'Endless "pilot purgatory" with no conversion', 'Treating it as revenue — it is not']
          ]
        },
        {
          type: 'flow', title: 'Run a pilot that converts',
          steps: [
            { label: 'Agree the success metric in writing', kind: 'start', desc: 'One or two measurable outcomes, e.g. "cut invoice processing time by 40% for one team in 8 weeks".' },
            { label: 'Name the economic buyer and decision date', desc: 'If nobody with budget will review results on a set date, it is a free trial, not a pilot.' },
            { label: 'Charge something and pre-agree commercial terms', desc: 'A paid pilot proves budget. Write the post-pilot price and contract length into the pilot agreement.' },
            { label: 'Did the pilot hit the agreed metric?', kind: 'decision', desc: 'Review jointly with data, not opinions.', branches: [ { label: 'Yes', to: 'Convert to annual contract and expand to more teams' }, { label: 'No', to: 'Diagnose: wrong ICP, wrong use case or product gap' } ] },
            { label: 'Turn the result into a case study', kind: 'end', desc: 'A named customer with numbers is your strongest sales asset for the next 10 accounts.' }
          ]
        },
        {
          type: 'checklist', title: 'Legal and operational essentials for a B2B start-up',
          items: [
            'Incorporate an entity customers can contract with (India: private limited company; US: often a Delaware C-corp if you will raise US venture capital)',
            'Founder agreement with vesting; IP assigned to the company (see Legal, lesson 1)',
            'Standard customer contract: master services agreement + order form; data processing agreement if you hold personal data',
            'Basic security hygiene from day one: access control, backups, a written security policy — enterprise buyers will ask',
            'Tax registration (India: GST; cross-border: check export of services and US sales tax nexus)',
            'Invoicing and collections process; clear payment terms (e.g. annual in advance, net 30)',
            'A simple CRM to track every account, contact and conversation'
          ]
        },
        {
          type: 'case', company: 'Freshdesk (now Freshworks)', year: '2010', title: 'A Hacker News comment, $400 of ads and 150 beta sign-ups',
          situation: `Girish Mathrubootham had spent nine years at Zoho (then AdventNet), building on-premise helpdesk products. In mid-2010 he read a Hacker News thread about Zendesk raising prices by 60–300%, with unhappy users in the comments.`,
          decision: `He and colleague Shan Krishnasamy resigned in October 2010 to build a cloud helpdesk. Before building much, they put up a website and a beta sign-up form and spent about $350–400 on small Google, Facebook and LinkedIn ads, then interviewed sign-ups about what they actually used.`,
          outcome: `They got 150+ valid sign-ups, saw that leads clustered in a few niche segments, and learned that small businesses wanted core problems solved and one invoice for several tools, not flashy social features. They incorporated in the US because Indian gateways then could not handle recurring card payments, and ran on a burn of about $5,000 a month for a six-person team.`,
          lesson: `A competitor's price rise can reveal an underserved segment. Cheap demand tests plus customer conversations told Freshdesk what to build first — and what to leave out.`
        },
        {
          type: 'case', company: 'Postman', year: '2012–2016', title: 'From a side project to an enterprise wedge',
          situation: `Abhinav Asthana built a small tool to test APIs for his own work and published it on the Chrome web store as a free, open-source REST client. By 2012 it had about 2,000 downloads.`,
          decision: `Instead of selling to companies first, the team let developers adopt it bottom-up. Co-founder Abhijit Kane noticed many people at Walmart Labs already used it — a signal of company-level demand. They incorporated, raised $1 million from Nexus Venture Partners in 2015 and built paid collaboration features on a monthly subscription.`,
          outcome: `By mid-2016 Postman reported over 3 million developers and 1.6 million monthly active users, with offices in Bengaluru and Austin. Usage inside companies became the entry point for team and enterprise plans.`,
          lesson: `In developer and technical markets, individual adoption can be your first "customers". Watch for clusters of users inside one company — that is your enterprise pipeline.`
        },
        {
          type: 'cycle', title: 'The first-10-customers loop', center: 'Founder-led learning',
          steps: [
            { label: 'Target', desc: 'Pick 50 named ICP accounts and the likely champion in each.' },
            { label: 'Reach', desc: 'Warm intros, personal emails, communities, events. The founder does it personally.' },
            { label: 'Discover', desc: 'Run discovery calls: current process, cost of the problem, decision process.' },
            { label: 'Pilot', desc: 'Paid pilot with written success metric and decision date.' },
            { label: 'Prove', desc: 'Measure results, write a case study, ask for referrals.' },
            { label: 'Refine', desc: 'Update ICP, pitch, pricing and product before the next round.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you sign your first customers',
          items: [
            { q: 'Will this design partner pay something within six months?', why: 'Free partners who never pay usually signal a nice-to-have problem.' },
            { q: 'Is their request useful to at least three other ICP accounts?', why: 'Building one-off features turns a product company into a custom-development shop.' },
            { q: 'Who will judge the pilot, on what metric and by which date?', why: 'Without a decision owner and date, pilots drift for months.' },
            { q: 'Can we publish their name and results?', why: 'Named references with numbers are the main way the next ten customers gain trust.' },
            { q: 'What will our standard contract, price and payment terms be?', why: 'Every bespoke contract slows future deals and complicates revenue recognition.' },
            { q: 'What will enterprise buyers ask about security, and can we answer it?', why: 'A failed security questionnaire can kill a deal after months of work.' }
          ]
        }
      ],
      terms: [
        { term: 'Design partner', def: 'An early customer who gets early access in return for regular feedback and help shaping the product.' },
        { term: 'Paid pilot / proof of concept (POC)', def: 'A short, paid trial in a real environment with agreed success criteria and a decision date.' },
        { term: 'Letter of intent (LOI)', def: 'A written, usually non-binding statement that a customer intends to buy if stated conditions are met.' },
        { term: 'Founder-led sales', def: 'The founders personally sell the first deals, learning the customer and the pitch before hiring salespeople.' },
        { term: 'Master services agreement (MSA)', def: 'The main contract that sets legal terms; each purchase is then added through an order form.' },
        { term: 'Pilot purgatory', def: 'When pilots run on and on without converting into paid contracts.' }
      ],
      quiz: [
        { q: 'You run 10 paid pilots; 60% convert to annual contracts worth $12,000 each. How much new ARR do you add?', options: ['$12,000', '$60,000', '$72,000', '$120,000'], answer: 2, explain: '10 × 60% = 6 customers × $12,000 = $72,000 ARR.' },
        { q: 'What most clearly separates a pilot from a free trial?', options: ['An agreed success metric, a named economic buyer and a decision date', 'The length of time', 'The number of users', 'Whether it is on-premise'], answer: 0, explain: 'A pilot is a structured test that ends in a buying decision.' },
        { q: 'A letter of intent should be treated as…', options: ['Booked revenue', 'Evidence of demand, not revenue', 'Legally binding in all cases', 'A replacement for a contract'], answer: 1, explain: 'LOIs are usually non-binding. They help planning and fund-raising but do not count as revenue.' },
        { q: 'What did Freshdesk learn from its early beta sign-ups?', options: ['Customers wanted Twitter and Facebook support first', 'Enterprises would pay $1 million upfront', 'There was no demand outside India', 'Small businesses wanted core helpdesk problems solved and one invoice for several tools'], answer: 3, explain: 'They re-prioritised features toward basics like multiple support emails and SLAs.' },
        { q: 'A design partner asks for a feature only they need. What is the best response?', options: ['Build it immediately to keep them happy', 'Check whether at least a few other ICP accounts need it; if not, offer a workaround', 'End the partnership', 'Charge them nothing more and build it secretly'], answer: 1, explain: 'Build for the segment, not for one customer, or you become a custom-development shop.' }
      ],
      challenge: {
        title: 'Design a pilot programme for a warehouse AI tool',
        prompt: `<p>Your start-up has software that suggests where to store items in a warehouse to cut picking time. You have three interested distributors. Plan: an 8-week paid pilot at ₹2 lakh, credited against a ₹12 lakh annual contract if they convert. You can run five pilots this half-year.</p><p>1) Write the success criteria and governance for one pilot. 2) If 3 of 5 pilots convert, how much ARR and how much pilot cash do you collect, and how much of the pilot fees is credited? 3) What would you do if a pilot misses its target?</p>`,
        hints: ['Pilot fees collected = 5 × ₹2 lakh; credits apply only to converting customers.', 'Success criteria should be measurable, owned and dated.'],
        model: `<p><b>1. Pilot design:</b> success metric — "reduce average pick time per order by 20% in Zone A versus the 4-week baseline"; data from the client's warehouse system; weekly 30-minute reviews with the warehouse manager (champion); final review in week 8 with the COO (economic buyer); post-pilot price and 12-month contract pre-agreed in the pilot order form.</p><p><b>2. Maths:</b> pilot cash collected = 5 × ₹2 lakh = <b>₹10 lakh</b>. Converting customers = 3, ARR = 3 × ₹12 lakh = <b>₹36 lakh</b>. Credits = 3 × ₹2 lakh = ₹6 lakh, so first-year cash from the three converters = 3 × (12 − 2) = ₹30 lakh, plus the ₹10 lakh already collected → total ₹40 lakh, of which ₹4 lakh came from the two that did not convert.</p><p><b>3. Missed target:</b> diagnose jointly — was it data quality, adoption by pickers or a product gap? If the cause is fixable within 4 weeks, offer one extension with a new date. If the account is outside your ICP (e.g. very small warehouse), stop and record the learning. Never let a pilot run without an end date.</p><p><b>Recommendation:</b> run the five pilots only with accounts that match the ICP, insist on payment and a decision date, and turn the first success into a named case study before approaching the next 20 distributors.</p>`
      },
      takeaways: [
        'Start with 3–5 design partners who share a painful, budgeted problem — not with a big launch.',
        'Make pilots paid, measured, time-boxed and owned by an economic buyer.',
        'An LOI is evidence of demand, never revenue.',
        'Founder-led sales for the first 10 customers creates the playbook you will later hand to a sales team.'
      ],
      sources: [
        { title: 'Freshworks — The Freshdesk story: how it started', url: 'https://www.freshworks.com/theworks/company-news/the-freshdesk-story' },
        { title: 'YourStory — How Postman went from a Chrome webstore hobby to 3 million users', url: 'https://yourstory.com/2016/06/postman' },
        { title: 'Zoho — About us and company timeline', url: 'https://www.zoho.com/aboutus.html' },
        { title: 'Growth Method — Gartner B2B buying journey explained', url: 'https://www.growthmethod.com/gartner-b2b-buying-journey/' }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'pb-b2b-4',
      title: 'Building the B2B engine: sales motions, pipeline maths and enterprise readiness',
      level: 'Intermediate',
      minutes: 17,
      hook: `Your sales motion is decided by one number — how much a customer pays per year — because that number decides how much selling effort you can afford.`,
      eli5: `If you sell ₹50 pens, you cannot send a salesperson to every buyer; you put them in shops. If you sell ₹50 lakh machines, you can send an engineer to visit, demo and negotiate. B2B companies work the same way: cheap products sell themselves online, mid-priced ones need a phone or video call, and expensive ones need people on the ground and many meetings.`,
      blocks: [
        {
          type: 'pyramid', title: 'Sales motion by contract size (ACV bands are rough rules of thumb)',
          levels: [
            { label: 'Field / enterprise sales', note: 'ACV roughly $100k+', desc: 'Account executives, solution engineers, legal and security reviews, 6–18 month cycles. Few accounts, very high value.' },
            { label: 'Inside sales', note: 'ACV roughly $10k–100k', desc: 'Remote AEs and SDRs on video calls; demos, trials and 1–3 month cycles.' },
            { label: 'PLG + sales-assist', note: 'ACV roughly $1k–25k', desc: 'Users sign up and pay online; a small team helps accounts that show buying signals (product-qualified leads).' },
            { label: 'Self-serve / channel', note: 'ACV under ~$1k', desc: 'No salesperson touches the deal. Website, app stores, marketplaces, resellers.' }
          ]
        },
        {
          type: 'compare', title: 'Five B2B sales motions', headers: ['Motion', 'Best when', 'Watch out for'],
          rows: [
            ['Founder-led', 'First 10–30 customers; learning the pitch', 'Founder becomes the bottleneck; nothing is written down'],
            ['Product-led growth (PLG) + sales-assist', 'Users can get value alone in minutes; many users per company', 'Lots of free users who never pay; weak enterprise features (see Growth, lesson 4)'],
            ['Inside sales', 'Mid-market ACV; demo-able product', 'Rep cost rises faster than bookings if win rates are low'],
            ['Field / enterprise', 'Large ACV, complex integration, many stakeholders', 'Long cycles and heavy cost before first revenue'],
            ['Channel / partners', 'Customers already buy through integrators, resellers or distributors', 'You lose control of the customer and share margin with partners']
          ]
        },
        {
          type: 'formula', name: 'Pipeline maths: work backwards from the target', expr: 'Wins needed = Bookings target ÷ ACV; Opportunities needed = Wins ÷ Win rate; Reps = Target ÷ (Quota × Attainment)',
          explain: 'Start from the bookings you need, divide by average deal size to get wins, divide by win rate to get qualified opportunities, then check you have enough reps and enough time (sales cycle) to work them. Pipeline coverage of 3–4× the target is a common rule of thumb.',
          example: 'Target $3m new ARR, ACV $30k → 100 wins. Win rate 20% → 500 qualified opportunities. Quota $800k and typical attainment 70% → each rep delivers $560k → 3,000 ÷ 560 ≈ 5.4, so 6 fully ramped reps.'
        },
        {
          type: 'interactive', widget: 'b2b-pipeline', title: 'Build your pipeline plan', note: 'Set quota, ACV, win rate, sales cycle, pipeline coverage and number of reps. Try lowering win rate from 25% to 15% and see how much more pipeline you need — then try lengthening the sales cycle.'
        },
        {
          type: 'flow', title: 'The enterprise deal path (where time disappears)',
          steps: [
            { label: 'Discovery and demo', kind: 'start', desc: 'Champion confirms pain and value; you map the buying committee.' },
            { label: 'Technical validation / POC', desc: 'IT tests integration, data flows and performance.' },
            { label: 'Security review', desc: 'Questionnaires, SOC 2 or ISO 27001 reports, penetration tests, data-residency questions.' },
            { label: 'Does the vendor pass security and legal?', kind: 'decision', desc: 'Many start-ups lose months here.', branches: [ { label: 'Yes', to: 'Procurement and contract' }, { label: 'No', to: 'Remediate or exit the deal' } ] },
            { label: 'Procurement and contract', desc: 'Vendor onboarding, price negotiation, MSA redlines, payment terms (often net 30–90).' },
            { label: 'Signature and kickoff', kind: 'end', desc: 'Hand over to onboarding / customer success with the success plan agreed in the sale.' }
          ]
        },
        {
          type: 'case', company: 'Atlassian', year: '2002–2015', title: 'Building a big B2B company without a big sales team',
          situation: `Enterprise software was traditionally sold by large field-sales armies (think Oracle and SAP). Atlassian's co-founders sold tools such as Jira and Confluence to software teams who could try them and buy online.`,
          decision: `They chose a "self-service" model: easy trials and online purchase, with money that would have gone to salespeople spent on research and development instead.`,
          outcome: `By 2015 Fortune reported Atlassian had been profitable for 12 years, with more than 43,000 organisations (including 80 of the Fortune 100) using its products — won without a large sales team. Fiscal 2014 revenue was over $215 million.`,
          lesson: `If users can discover, try and buy on their own, a low-touch motion lets you serve many accounts cheaply and invest in product. It works best when the first buyer is a technical team, not a committee.`
        },
        {
          type: 'case', company: 'Slack', year: '2014–2019', title: 'Adding an enterprise layer on top of PLG',
          situation: `Slack spread bottom-up: teams started free, often without IT approval, then upgraded. But large companies needed security, compliance and central control before rolling it out to thousands of staff.`,
          decision: `In 2017 Slack launched Enterprise Grid — for organisations with many connected workspaces, with e-discovery, data loss prevention and encryption key management — and focused its sales effort on large organisations.`,
          outcome: `Its 2019 filing showed revenue of $400 million (up from $105 million two years earlier) and 575 customers paying over $100,000 a year (from 135 two years earlier); those 575 contributed about 40% of revenue, even though fewer than 15% of 600,000+ organisations using Slack paid.`,
          lesson: `PLG creates the "land"; an enterprise product plus a sales team captures the "expand". Plan for security and admin features before big accounts ask.`
        },
        {
          type: 'map', title: 'The B2B operating stack', center: 'Revenue engine',
          branches: [
            { label: 'Go-to-market team', desc: 'SDRs create meetings, AEs close, solution engineers prove, customer success retains and expands.', children: ['SDR', 'AE', 'SE', 'CSM'] },
            { label: 'Tools', desc: 'CRM, sales engagement, product analytics, billing, contract and e-signature tools.', children: ['CRM', 'Billing', 'CPQ'] },
            { label: 'Trust pack', desc: 'Security documentation and certifications enterprise buyers ask for.', children: ['SOC 2', 'ISO 27001', 'DPA'] },
            { label: 'Partners', desc: 'Integrators, resellers, cloud marketplaces and technology partners that source or deliver deals.', children: ['SIs', 'Resellers', 'Marketplaces'] },
            { label: 'Operating rhythm', desc: 'Weekly pipeline review, monthly forecast, quarterly win-loss analysis.', children: ['Forecast', 'Win-loss'] }
          ]
        },
        {
          type: 'questions', title: 'Ask before you hire your first salespeople',
          items: [
            { q: 'Can someone other than the founder close a deal using a written playbook?', why: 'Hiring reps before the pitch is repeatable usually burns cash and good people.' },
            { q: 'Does our ACV pay for the motion we are planning?', why: 'Field sales on a $5k ACV can never earn back its cost.' },
            { q: 'How many qualified opportunities do we create per month, and from where?', why: 'Reps without pipeline cannot hit quota, whatever their skill.' },
            { q: 'How long until a new rep is fully productive (ramp)?', why: 'Ramp takes several months, so you must hire well before the revenue is needed.' },
            { q: 'Are we ready for security reviews and procurement?', why: 'Enterprise deals stall for months without a trust pack and standard contract.' },
            { q: 'Who owns the customer after signature?', why: 'Without customer success, churn erases what sales books.' }
          ]
        }
      ],
      terms: [
        { term: 'SDR / AE', def: 'Sales development representatives create qualified meetings; account executives run the deal and close it.' },
        { term: 'Quota and attainment', def: 'Quota is a rep\'s bookings target; attainment is the share of quota actually achieved.' },
        { term: 'Pipeline coverage', def: 'Value of qualified pipeline divided by the target for the period, often aimed at 3–4×.' },
        { term: 'Product-qualified lead (PQL)', def: 'A user or account whose product usage signals readiness to buy or upgrade.' },
        { term: 'SOC 2 / ISO 27001', def: 'Independent security assurance reports and certifications commonly requested by enterprise buyers.' },
        { term: 'Ramp time', def: 'How long a new salesperson takes to reach full productivity.' },
        { term: 'Sales cycle', def: 'Time from first qualified conversation to signed contract.' }
      ],
      quiz: [
        { q: 'Target: $2m new ARR. ACV: $25k. Win rate: 25%. How many qualified opportunities do you need?', options: ['80', '200', '320', '500'], answer: 2, explain: 'Wins = 2,000,000 ÷ 25,000 = 80. Opportunities = 80 ÷ 0.25 = 320.' },
        { q: 'Which motion fits a product with $600 ACV sold to small businesses?', options: ['Self-serve or channel', 'Field sales', 'Enterprise account teams', 'Paid pilots for every customer'], answer: 0, explain: 'A $600 contract cannot fund human selling; self-serve or partners must carry it.' },
        { q: 'Rep quota is $1m, typical attainment 75%, team target $6m. How many ramped reps are needed?', options: ['6', '7', '10', '8'], answer: 3, explain: 'Each rep delivers $750k. 6,000 ÷ 750 = 8 reps.' },
        { q: 'What did Slack\'s Enterprise Grid mainly add?', options: ['A cheaper free tier', 'Security, compliance and central control for large organisations', 'A hardware device', 'An app for consumers'], answer: 1, explain: 'Large companies needed e-discovery, data loss prevention and encryption key management before wide roll-out.' },
        { q: 'Why could Atlassian spend more on R&D than many rivals?', options: ['Its self-service model needed far less spending on salespeople', 'It charged the highest prices', 'It had no competitors', 'It sold only services'], answer: 0, explain: 'Low-touch selling freed money for product development.' }
      ],
      challenge: {
        title: 'Build next year\'s sales capacity plan',
        prompt: `<p>Your mid-market SaaS needs <b>$3m of new ARR</b> next year. Facts: ACV $30k; win rate on qualified opportunities 20%; sales cycle 90 days; AE quota $800k with typical attainment 70%; new AEs take 4 months to ramp; marketing will source 40% of opportunities; each SDR creates about 15 qualified opportunities a month.</p><p>Calculate wins, opportunities, AEs and SDRs needed, and explain when you must hire.</p>`,
        hints: ['Opportunities = wins ÷ win rate; split them between marketing and SDRs.', 'Ramped capacity per AE = quota × attainment. Account for ramp and the 90-day cycle when timing hires.'],
        model: `<p><b>1. Wins:</b> 3,000,000 ÷ 30,000 = <b>100 wins</b>.</p><p><b>2. Opportunities:</b> 100 ÷ 20% = <b>500 qualified opportunities</b>. Marketing sources 40% = 200; SDRs must source 300.</p><p><b>3. SDRs:</b> each creates 15 × 12 = 180 a year → 300 ÷ 180 = 1.7 → <b>2 SDRs</b>.</p><p><b>4. AEs:</b> productive capacity = $800k × 70% = $560k → 3,000 ÷ 560 = 5.4 → <b>6 ramped AEs</b>. Because ramp is 4 months and the cycle is 90 days, an AE hired in January closes little before May–June. To get a full year from six reps you need them hired and ramping by the start of the year, or you need about 7–8 AEs if some join mid-year.</p><p><b>5. Pipeline check:</b> 500 opportunities × $30k = $15m of pipeline, i.e. 5× the target — consistent with a 20% win rate.</p><p><b>Recommendation:</b> hire 2 SDRs and bring the AE team to 6 ramped reps by Q1 (hiring the gap in Q4 of the current year), track monthly opportunity creation against the 42-per-month plan (500 ÷ 12), and lift win rate through better qualification before adding more heads.</p>`
      },
      takeaways: [
        'ACV decides the sales motion: self-serve, PLG plus assist, inside, field or channel.',
        'Do pipeline maths backwards: target → wins → opportunities → reps and SDRs.',
        'Enterprise deals are often won or lost in security review and procurement — prepare a trust pack early.',
        'PLG lands accounts; an enterprise product and sales team expand them.'
      ],
      sources: [
        { title: 'Fortune — How Atlassian is redefining business collaboration (2015)', url: 'https://fortune.com/2015/04/27/atlassian-redefines-collaboration' },
        { title: 'TechTarget — Slack revenues show enterprise growth ahead of public listing', url: 'https://www.techtarget.com/enterprise-software/news/252462365/Slack-revenues-show-enterprise-growth-ahead-of-public-listing' },
        { title: 'Growth Method — Gartner B2B buying journey explained', url: 'https://www.growthmethod.com/gartner-b2b-buying-journey/' },
        { title: 'Corporate Finance Institute — The SaaS magic number', url: 'https://corporatefinanceinstitute.com/resources/valuation/saas-magic-number' }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'pb-b2b-5',
      title: 'B2B revenue and pricing: seats, usage, tiers, value and contracts',
      level: 'Intermediate',
      minutes: 17,
      hook: `A B2B price is not a number on a page — it is a metric you charge on, a contract length, a discount policy and a renewal plan, and each one moves your revenue for years.`,
      eli5: `Imagine renting a bicycle to a delivery company. You could charge per rider (seats), per kilometre ridden (usage), a small/medium/large plan (tiers), or a share of the money the riders earn because the bike is faster (value). Then you agree whether they pay monthly or for a whole year up front, and whether a big fleet gets a discount. Choosing well means the price grows when the customer gets more value.`,
      blocks: [
        {
          type: 'text', title: 'Pricing basics, applied to B2B',
          html: `<p>You met cost-plus, competitor and value-based pricing in <a href="#/lesson/pricing-1">Pricing, lesson 1</a>, and subscription and usage models in <a href="#/lesson/pricing-4">Pricing, lesson 4</a>. In B2B the key extra decision is the <b>value metric</b>: the unit you charge on. The best value metric <span class="hl">grows as the customer gets more value</span>, is easy to predict for the buyer's budget and is hard to game.</p>`
        },
        {
          type: 'compare', title: 'B2B revenue models', headers: ['Model', 'How it charges', 'Good for', 'Risk'],
          rows: [
            ['Per seat', 'Price per user per month/year', 'Collaboration tools; value tied to people', 'Customers share logins; revenue shrinks when they cut staff or AI replaces users'],
            ['Usage / consumption', 'Per API call, GB, transaction, invoice', 'Infrastructure, payments, data', 'Revenue is harder to forecast; bill shock'],
            ['Tiered (good-better-best)', 'Feature or volume bundles', 'Serving small to large accounts with one product', 'Too many tiers confuse buyers'],
            ['Platform fee + usage (hybrid)', 'Fixed base plus variable component', 'Predictable floor with upside', 'More complex to explain and bill'],
            ['Value / outcome-based', 'Share of savings or results', 'Clear, measurable ROI', 'Disputes over measurement; slow to agree'],
            ['Project / retainer (services)', 'Fixed fee, time and materials, or monthly retainer', 'Agencies, consulting, IT services', 'Scope creep; revenue tied to headcount']
          ]
        },
        {
          type: 'formula', name: 'Value-based price ceiling', expr: 'Price ceiling ≈ Customer\'s annual value created × capture share (often 10–30%)',
          explain: 'Estimate the money your product saves or earns the customer each year, then keep most of it for the customer so the purchase is an easy decision. The rest of the value is the customer\'s reason to buy.',
          example: 'Illustrative: software saves 200 staff hours a month at ₹600 an hour = ₹1.2 lakh a month = ₹14.4 lakh a year. Capturing 10–20% → price of ₹1.44–2.88 lakh a year per site.'
        },
        {
          type: 'case', company: 'HubSpot', year: '2024', title: 'Moving every tier to seat-based pricing',
          situation: `HubSpot had grown from one marketing app into a suite of "Hubs" used by more than 190,000 businesses. Sales Hub and Service Hub had seat minimums, so small teams had to buy more seats than they needed just to start.`,
          decision: `From 5 March 2024 HubSpot moved all Hubs and tiers (Starter, Professional, Enterprise) to seats-based pricing: it removed seat minimums for Sales Hub and Service Hub, introduced a paid Core Seat (with edit access and AI features) and free, unlimited View-Only Seats for paid accounts, and kept five users on the free tier.`,
          outcome: `The change applied to new customers immediately. HubSpot said existing customers would be migrated at the same price, but might see a migration-related increase of about 5% or less at renewal, with advance notice.`,
          lesson: `Packaging is a growth lever: lower the entry barrier (no minimums, free viewers) and let revenue grow with the seats that create value. Announce changes for existing customers early and cap the impact.`
        },
        {
          type: 'case', company: 'Salesforce', year: '2023', title: 'A list-price rise across the core clouds',
          situation: `After the pandemic, many enterprise software vendors were lifting prices. Salesforce sells mostly per-user subscriptions to large companies under annual or multi-year contracts.`,
          decision: `In mid-2023 Salesforce announced an average 9% list-price increase from August across Sales Cloud, Service Cloud, Marketing Cloud, Industries and Tableau, applying to new customers and existing customers buying new products.`,
          outcome: `Forrester advised buyers to bring deals forward to lock old prices, review upcoming renewals (where uplifts of 3%, 4%, 7% or more were already common) and cut unused "shelfware" before renewing.`,
          lesson: `Price rises in B2B land at renewal and in procurement negotiations, not on the website. Strong products can raise prices — but buyers respond by auditing usage, so make sure customers actually use what they pay for.`
        },
        {
          type: 'matrix', name: 'Choosing a value metric', xLabel: 'Predictability for the buyer →', yLabel: 'Link to value delivered →',
          cells: [
            { label: 'Pure usage', desc: 'Strong link to value but hard to budget (e.g. per API call). Add caps, commitments or alerts.' },
            { label: 'Hybrid (platform + usage)', desc: 'Strong link to value and a predictable floor. Often the best of both.' },
            { label: 'Random add-on fees', desc: 'Weak link and unpredictable. Annoys procurement; avoid.' },
            { label: 'Flat seat or tier price', desc: 'Easy to budget but may under-charge heavy users or over-charge light ones.' }
          ]
        },
        {
          type: 'pyramid', title: 'From list price to the cash you actually keep (price waterfall)',
          levels: [
            { label: 'Pocket price', note: 'What you really keep', desc: 'After all discounts, credits, free months, partner margins and payment delays.' },
            { label: 'Partner margin and payment terms', desc: 'Reseller cuts and long payment terms reduce real value.' },
            { label: 'Multi-year and volume discounts', desc: 'Given for commitment and scale; should be traded for something (term, prepayment, case study).' },
            { label: 'Negotiated discount', desc: 'Rep or manager discounts at quarter-end. Track them; they become habits.' },
            { label: 'List price', note: 'Published or quoted', desc: 'The starting point. In enterprise deals it is rarely what is paid.' }
          ]
        },
        {
          type: 'flow', title: 'Setting a B2B price, step by step',
          steps: [
            { label: 'Quantify value per account', kind: 'start', desc: 'Hours saved, revenue gained, risk avoided — in the customer\'s money, from pilots and interviews.' },
            { label: 'Pick the value metric', desc: 'Seats, usage, sites, transactions or a hybrid that grows with value and is easy to budget.' },
            { label: 'Build 2–4 packages', desc: 'Good-better-best tiers by segment, with the features large accounts need (security, admin, support) in the top tier.' },
            { label: 'Does the price pay back acquisition cost fast enough?', kind: 'decision', desc: 'Check ACV against the sales motion and CAC payback (lesson 6).', branches: [ { label: 'Yes', to: 'Set discount and renewal rules' }, { label: 'No', to: 'Raise price, cut cost-to-serve or change the motion' } ] },
            { label: 'Set discount, contract and renewal rules', kind: 'end', desc: 'Annual prepay, approval levels, uplift caps — then review prices at least once a year.' }
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'Discount rules that protect revenue',
          html: `<ul><li><b>Give to get:</b> trade a discount for something — annual prepayment, a two-year term, a public case study, a reference call.</li><li><b>Set approval levels:</b> e.g. reps up to 10%, sales head up to 20%, CEO/CFO above.</li><li><b>Write the renewal price into the contract</b> (e.g. "renews at list less 10%, with an annual uplift cap of 5–7%").</li><li><b>Never discount the first year so deeply that the renewal looks like a price shock.</b></li></ul><p>Deeper discounting and price-war tactics are covered in <a href="#/lesson/pricing-5">Pricing, lesson 5</a>.</p>`
        },
        {
          type: 'questions', title: 'Ask before you set or change a B2B price',
          items: [
            { q: 'What unit grows as the customer gets more value from us?', why: 'The right value metric lets revenue expand without new sales effort.' },
            { q: 'Can the buyer predict next year\'s bill well enough to budget it?', why: 'Unpredictable bills scare finance teams and slow approvals.' },
            { q: 'How much measurable value do we create per account per year?', why: 'Value sets the ceiling; capturing 10–30% leaves the customer a clear reason to buy.' },
            { q: 'What do we get in return for every discount?', why: 'Unearned discounts train buyers to wait for quarter-end.' },
            { q: 'What happens to our revenue if customers cut headcount or automate with AI?', why: 'Pure per-seat pricing shrinks when user counts fall.' },
            { q: 'How will existing customers be moved to the new pricing, and when?', why: 'Surprise renewal increases trigger churn and procurement push-back.' }
          ]
        }
      ],
      terms: [
        { term: 'Value metric', def: 'The unit you charge on — seats, usage, transactions, sites — ideally linked to the value the customer gets.' },
        { term: 'List price vs pocket price', def: 'List is the quoted price; pocket price is what you keep after discounts, credits and partner margins.' },
        { term: 'Annual prepay', def: 'The customer pays for 12 months in advance, improving the seller\'s cash flow.' },
        { term: 'Renewal uplift', def: 'A pre-agreed price increase applied when a contract renews.' },
        { term: 'Shelfware', def: 'Software licences a customer pays for but does not use; a common target in renewal negotiations.' },
        { term: 'Hybrid pricing', def: 'A fixed platform fee plus a variable usage charge.' }
      ],
      quiz: [
        { q: 'List price is $100 per seat per month. A customer buys 50 seats annually with a 15% discount. What is the annual contract value?', options: ['$42,500', '$51,000', '$60,000', '$69,000'], answer: 1, explain: '$100 × 50 × 12 = $60,000; less 15% = $51,000.' },
        { q: 'Your tool saves a client ₹20 lakh a year. Using a 15% capture share, what price would you aim for?', options: ['₹1.5 lakh', '₹15 lakh', '₹20 lakh', '₹3 lakh'], answer: 3, explain: '15% × ₹20 lakh = ₹3 lakh a year, leaving ₹17 lakh of value with the customer.' },
        { q: 'Which pricing risk grows when customers automate work with AI?', options: ['Per-seat revenue shrinks as user counts fall', 'Usage pricing becomes illegal', 'Platform fees disappear', 'Annual contracts become monthly'], answer: 0, explain: 'If fewer humans log in, pure seat-based revenue declines; hybrid or usage metrics help.' },
        { q: 'What did HubSpot\'s 2024 change remove for Sales Hub and Service Hub?', options: ['Free trials', 'Enterprise tier', 'Seat minimums', 'AI features'], answer: 2, explain: 'It removed seat minimums and added free View-Only Seats, lowering the entry barrier.' },
        { q: 'A quarter-end discount is best given in exchange for…', options: ['Nothing — speed matters', 'A promise to consider renewing', 'Removing the security review', 'A longer term, prepayment or a public case study'], answer: 3, explain: 'Give to get: discounts should buy commitment or marketing value.' }
      ],
      challenge: {
        title: 'Price an invoice-automation SaaS',
        prompt: `<p>Your SaaS reads supplier invoices and posts them to accounting. Manual processing costs customers about $2.50 per invoice; your tool removes most of that. Two typical customers:</p><ul><li><b>A</b>: 5 users, 2,000 invoices a month.</li><li><b>B</b>: 20 users, 30,000 invoices a month.</li></ul><p>Compare three options: (1) $40 per user per month; (2) $0.50 per invoice; (3) hybrid: $300 a month platform fee including 1,000 invoices, then $0.30 per extra invoice. Calculate monthly price and price as a share of value for each customer, and recommend one.</p>`,
        hints: ['Value per month = invoices × $2.50.', 'For the hybrid, extra invoices = total − 1,000.'],
        model: `<p><b>Value created per month:</b> A = 2,000 × $2.50 = $5,000; B = 30,000 × $2.50 = $75,000.</p><p><b>(1) Per seat:</b> A = 5 × $40 = $200 (4% of value); B = 20 × $40 = $800 (about 1% of value). Badly under-prices heavy users.</p><p><b>(2) Per invoice:</b> A = 2,000 × $0.50 = $1,000 (20%); B = 30,000 × $0.50 = $15,000 (20%). Fair share but B's bill is volatile and large — procurement will push back.</p><p><b>(3) Hybrid:</b> A = $300 + 1,000 × $0.30 = $600 (12%); B = $300 + 29,000 × $0.30 = $300 + $8,700 = $9,000 (12%).</p><p><b>Recommendation:</b> the hybrid. It captures a consistent 12% of value across sizes, gives every customer a predictable floor, and grows automatically as invoice volume grows (built-in expansion). Offer an annual commitment (e.g. pre-buy invoice volume at a 10% discount) to improve forecastability and cash, and add a volume tier above 50,000 invoices for the largest accounts.</p>`
      },
      takeaways: [
        'Choose a value metric that grows with customer value and is easy to budget.',
        'Value sets the ceiling; capture a minority share so buying is an easy decision.',
        'Manage the price waterfall: every discount should buy term, prepayment or a reference.',
        'Communicate price changes early and cap the impact on existing customers at renewal.'
      ],
      sources: [
        { title: 'HubSpot — Upcoming changes to HubSpot\'s pricing (seats-based model, 2024)', url: 'https://www.hubspot.com/company-news/announcing-upcoming-changes-to-hubspots-pricing' },
        { title: 'Forrester — Salesforce to raise prices an average of 9%', url: 'https://www.forrester.com/blogs/salesforce-to-raise-prices-an-average-of-9-next-month' },
        { title: 'SaaS Capital — 2025 B2B SaaS Retention Benchmarks', url: 'https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf' },
        { title: 'Corporate Finance Institute — The SaaS magic number', url: 'https://corporatefinanceinstitute.com/resources/valuation/saas-magic-number' }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'pb-b2b-6',
      title: 'B2B unit economics: CAC payback, magic number and working capital',
      level: 'Advanced',
      minutes: 18,
      hook: `B2B companies rarely die from too few customers — they die from paying for growth before the cash comes back.`,
      eli5: `Imagine you lend a friend ₹100 to start a juice stall, and they repay you ₹10 a week. You get your money back in ten weeks, and after that it is profit. If you lend to twenty friends at once, you need ₹2,000 today even though the profit is real. B2B growth works the same way: winning a customer costs money now, and the customer pays it back slowly. Distributors have an extra problem — they also pay for the juice before the shop pays them.`,
      blocks: [
        {
          type: 'text', title: 'Two cash traps in B2B',
          html: `<p><b>Software and services</b> pay customer acquisition cost (CAC) up front and earn it back through monthly gross profit. <b>Distribution and B2B commerce</b> pay suppliers and hold stock before customers pay, often on 30–90 days of credit. Both can be profitable on paper and still run out of cash. Basic working capital and cash conversion are in <a href="#/lesson/finance-4">Finance, lesson 4</a>; SaaS burn and runway are in <a href="#/lesson/finance-7">Finance, lesson 7</a>.</p>`
        },
        {
          type: 'formula', name: 'CAC payback period', expr: 'CAC payback (months) = CAC per customer ÷ (Monthly recurring revenue per customer × Gross margin %)',
          explain: 'How many months of gross profit it takes to earn back what you spent to win the customer. Use fully loaded sales and marketing cost, not just ad spend.',
          example: 'ACV $24,000 → $2,000 a month. Gross margin 80% → $1,600 gross profit a month. CAC $30,000 → payback = 30,000 ÷ 1,600 ≈ 18.75 months. If customers churn before month 19, you lose money on them.'
        },
        {
          type: 'formula', name: 'SaaS magic number (sales efficiency)', expr: 'Magic number = Net new ARR in the quarter ÷ Sales & marketing spend in the previous quarter',
          explain: 'How much new recurring revenue each dollar of sales and marketing creates, using a one-quarter lag. A common reading: below 0.5 fix efficiency before spending more; 0.5–0.75 investigate; above 0.75 efficient; above 1 consider investing more. (Some analysts use quarterly revenue growth × 4 instead of net new ARR — be consistent.)',
          example: 'Net new ARR this quarter $1.2m; S&M last quarter $1.5m → magic number = 0.8, an efficient engine.'
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'Test your SaaS unit economics', note: 'Enter ARPU, gross margin, churn and CAC. Try raising monthly churn from 1% to 3% and watch LTV:CAC collapse — then try halving CAC with a partner channel.'
        },
        {
          type: 'compare', title: 'Cost structure by B2B model', headers: ['', 'B2B SaaS', 'IT services / agency', 'Distribution / B2B commerce'],
          rows: [
            ['Biggest variable cost', 'Hosting, support, payment fees', 'Delivery staff salaries', 'Cost of goods, freight, credit losses'],
            ['Biggest fixed / semi-fixed cost', 'R&D, sales and marketing team', 'Bench, recruiting, training', 'Warehouses, sales force, systems'],
            ['Contribution measured per', 'Customer per year', 'Project or account', 'Order and customer'],
            ['Typical trap', 'CAC payback longer than customer life', 'Low utilisation, fixed-price overruns', 'Long customer credit, slow-moving stock']
          ]
        },
        {
          type: 'flow', title: 'Contribution per order in B2B distribution (illustrative)',
          steps: [
            { label: 'Order value ₹50,000', kind: 'start', desc: 'An SME buys industrial supplies on 75-day credit.' },
            { label: 'Gross margin 18% → ₹9,000', desc: 'After the cost of the goods.' },
            { label: 'Minus delivery ₹1,500', desc: 'Last-mile freight to the plant.' },
            { label: 'Minus cost of credit ₹1,233', desc: '₹50,000 × 12% a year × 75 ÷ 365 days.' },
            { label: 'Minus sales commission 2% → ₹1,000', desc: 'Field rep or partner payout.' },
            { label: 'Contribution ₹5,267 (about 10.5% of order)', kind: 'end', desc: 'Before warehouse, tech and head-office costs. Add a 2% bad-debt rate and it falls to about ₹4,267.' }
          ]
        },
        {
          type: 'interactive', widget: 'working-capital', title: 'See how credit terms eat cash', note: 'Set days sales outstanding (DSO), inventory days (DIO) and payables days (DPO). Move DSO from 45 to 90 days and watch the cash conversion cycle — and the cash you need to grow — jump.'
        },
        {
          type: 'cycle', title: 'The distribution cash cycle', center: 'Cash tied up',
          steps: [
            { label: 'Buy stock', desc: 'Pay the supplier, often within 30 days (DPO).' },
            { label: 'Hold inventory', desc: 'Goods sit in the warehouse for inventory days (DIO). Slow movers trap cash.' },
            { label: 'Sell on credit', desc: 'Business customers expect 30–90 days to pay (DSO).' },
            { label: 'Collect', desc: 'Chase payment; some never pays — bad debt.' },
            { label: 'Reinvest', desc: 'Collected cash buys the next round of stock. Faster loops need less capital.' }
          ]
        },
        {
          type: 'case', company: 'Udaan', year: '2016–2025', title: 'When discounts and credit outrun unit economics',
          situation: `Udaan was founded in 2016 by former Flipkart executives Sujeet Kumar, Amod Malviya and Vaibhav Gupta to let small retailers order from brands and wholesalers online, with its own logistics and credit. It raised heavily and reached a peak valuation of about $3.2 billion.`,
          decision: `To win kirana stores from their usual distributors, Udaan offered better prices — often deep discounts — across many categories at once, plus working-capital credit. Some brands, such as Parle according to Inc42, stayed away to protect their existing distributor networks.`,
          outcome: `Reported GMV peaked at about ₹9,900 crore in FY22 and was roughly flat at ₹5,707 crore in FY24; losses fell about 19% after cost cuts and restructuring, and a later round valued the company near $1.3 billion. Management said it cut supply-chain costs from 10% to 3.5% and focused on fewer segments.`,
          lesson: `In B2B commerce, discount-led growth and loose credit can create volume without contribution. Prove positive contribution per order in a focused cluster before scaling nationally.`
        },
        {
          type: 'case', company: 'OfBusiness', year: 'FY2024', title: 'Making B2B commerce profitable by pricing the credit',
          situation: `OfBusiness, founded in 2015, sells raw materials such as steel, polymers, chemicals and construction materials to small and medium manufacturers — customers who often struggle to get bank credit.`,
          decision: `It pairs commerce with a separately capitalised lending arm, Oxyzo (about 70% owned), so financing is underwritten and priced as a business in its own right rather than given away to win orders.`,
          outcome: `For FY24 OfBusiness reported operating revenue of ₹19,296 crore (up about 26%) and consolidated net profit of about ₹603 crore (up 30%); Oxyzo earned ₹903 crore of operating revenue and ₹290 crore of profit.`,
          lesson: `Working capital is a product, not a giveaway. When credit is priced for risk and funded properly, it can turn a thin-margin trading business into a profitable one.`
        },
        {
          type: 'questions', title: 'Ask before you spend on growth',
          items: [
            { q: 'What is our fully loaded CAC payback, by segment?', why: 'Averages hide segments that never pay back.' },
            { q: 'Is our gross retention at least 90%?', why: 'SaaS Capital calls ~90% GRR "table stakes"; below it, growth leaks out.' },
            { q: 'Do customers pay before, during or after we deliver?', why: 'Annual prepay funds growth; long credit terms consume it.' },
            { q: 'What is contribution per order after freight, credit cost and commissions?', why: 'Gross margin alone overstates profit in distribution.' },
            { q: 'How much extra working capital does 50% growth require?', why: 'Fast growth in distribution can bankrupt a profitable firm.' },
            { q: 'What is our magic number trend over the last four quarters?', why: 'Falling efficiency means more spend is buying less growth.' }
          ]
        }
      ],
      terms: [
        { term: 'CAC (customer acquisition cost)', def: 'Total sales and marketing cost divided by new customers won in the period.' },
        { term: 'CAC payback', def: 'Months of gross profit from a customer needed to recover its acquisition cost.' },
        { term: 'Magic number', def: 'Net new ARR in a quarter divided by the previous quarter\'s sales and marketing spend.' },
        { term: 'Cash conversion cycle (CCC)', def: 'Days of receivables plus days of inventory minus days of payables: how long cash is tied up in operations.' },
        { term: 'DSO', def: 'Days sales outstanding: the average number of days customers take to pay.' },
        { term: 'Contribution margin', def: 'Revenue minus all variable costs of serving an order or customer, before fixed overheads.' }
      ],
      quiz: [
        { q: 'CAC is $18,000. A customer pays $1,500 a month at 75% gross margin. What is the CAC payback?', options: ['12 months', '16 months', '18 months', '24 months'], answer: 1, explain: 'Gross profit per month = 1,500 × 0.75 = $1,125. 18,000 ÷ 1,125 = 16 months.' },
        { q: 'Net new ARR this quarter is $600k; last quarter S&M spend was $1.2m. What is the magic number, and what does it suggest?', options: ['2.0 — invest heavily', '1.2 — very efficient', '0.5 — fix efficiency before spending more', '0.05 — normal'], answer: 2, explain: '600 ÷ 1,200 = 0.5, at the low end; improve conversion, pricing or retention before adding spend.' },
        { q: 'A distributor has DSO 75 days, inventory days 60 and payables days 30. What is its cash conversion cycle?', options: ['45 days', '105 days', '135 days', '165 days'], answer: 1, explain: 'CCC = 75 + 60 − 30 = 105 days.' },
        { q: 'What did OfBusiness do differently from many B2B commerce players with its credit offer?', options: ['Gave unlimited free credit', 'Stopped offering credit', 'Only sold to large corporates', 'Ran lending as a separately capitalised business, Oxyzo, that prices risk'], answer: 3, explain: 'Credit was a priced product with its own balance sheet, not a subsidy to win orders.' },
        { q: 'An order of ₹1,00,000 at 15% gross margin carries ₹2,000 freight and ₹2,000 credit cost. What is its contribution?', options: ['₹11,000', '₹13,000', '₹15,000', '₹19,000'], answer: 0, explain: '15% × 1,00,000 = ₹15,000 − 2,000 − 2,000 = ₹11,000.' }
      ],
      challenge: {
        title: 'Can a profitable distributor afford to grow?',
        prompt: `<p>An industrial-supplies distributor has annual revenue of ₹100 crore, gross margin 18% (so cost of goods ₹82 crore), DSO 75 days, inventory days 60 (on cost of goods) and payables 30 days (on cost of goods). The founder wants to grow revenue 50% next year by offering 90-day credit to win new SME customers.</p><p>1) Estimate today's net working capital. 2) Estimate working capital after 50% growth if DSO rises to 90 days. 3) How much extra cash is needed, and what would you recommend?</p>`,
        hints: ['Receivables = revenue × DSO ÷ 365; inventory = COGS × DIO ÷ 365; payables = COGS × DPO ÷ 365.', 'After growth: revenue ₹150 crore, COGS ₹123 crore.'],
        model: `<p><b>1. Today</b></p><ul><li>Receivables = 100 × 75 ÷ 365 ≈ ₹20.5 crore</li><li>Inventory = 82 × 60 ÷ 365 ≈ ₹13.5 crore</li><li>Payables = 82 × 30 ÷ 365 ≈ ₹6.7 crore</li><li>Net working capital ≈ 20.5 + 13.5 − 6.7 = <b>₹27.3 crore</b></li></ul><p><b>2. After growth with 90-day credit</b> (revenue ₹150 crore, COGS ₹123 crore)</p><ul><li>Receivables = 150 × 90 ÷ 365 ≈ ₹37.0 crore</li><li>Inventory = 123 × 60 ÷ 365 ≈ ₹20.2 crore</li><li>Payables = 123 × 30 ÷ 365 ≈ ₹10.1 crore</li><li>Net working capital ≈ 37.0 + 20.2 − 10.1 = <b>₹47.1 crore</b></li></ul><p><b>3. Extra cash needed</b> ≈ 47.1 − 27.3 = <b>₹19.8 crore</b>. The extra gross profit is 50 × 18% = ₹9 crore, before the costs of serving new customers — so growth cannot fund itself in year one.</p><p><b>Recommendation:</b> do not offer blanket 90-day credit. Offer longer terms only to customers who pass a credit check, price the credit (e.g. 1.5% per month beyond 45 days) or route it through an NBFC or invoice-discounting partner, negotiate longer supplier terms, and cut slow-moving inventory. Grow 25–30% with existing terms and raise working-capital debt before pushing harder.</p>`
      },
      takeaways: [
        'Measure CAC payback by segment with fully loaded costs; customers who churn before payback destroy value.',
        'Use the magic number to decide whether to spend more on sales and marketing.',
        'In distribution, compute contribution per order after freight, credit cost and commission — not just gross margin.',
        'Credit is a product to be priced and funded, not a free weapon to win orders.'
      ],
      sources: [
        { title: 'Inc42 — How high can Udaan fly? A look into its blueprint for revival', url: 'https://inc42.com/features/how-high-can-udaan-fly-blueprint-revival/' },
        { title: 'ETtech via OfBusiness — FY24 operating revenue up 26% to ₹19,296 crore', url: 'https://www.ofbusiness.com/press-media/ofbusiness-fy24-operating-revenue-up-26-on-year-to-rs-19296-crore/144778' },
        { title: 'Corporate Finance Institute — The SaaS magic number', url: 'https://corporatefinanceinstitute.com/resources/valuation/saas-magic-number' },
        { title: 'SaaS Capital — 2025 B2B SaaS Retention Benchmarks', url: 'https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf' },
        { title: 'Distribution Strategy Group — Grainger sales hit $17.2B in 2024', url: 'https://distributionstrategy.com/2025/01/grainger-sales-hit-17-2b-in-2024-up-4-2/' }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'pb-b2b-7',
      title: 'B2B branding and creativity: trust, thought leadership and community',
      level: 'Intermediate',
      minutes: 15,
      hook: `"Nobody gets fired for buying the market leader" — B2B branding exists to make choosing you feel safe for the person whose job is on the line.`,
      eli5: `When your class picks a team captain, kids vote for someone they already know and trust, not the stranger with the loudest speech. B2B buyers are the same. Long before they talk to a salesperson, they have read your guides, heard about you from friends at other companies and seen you at events. A strong B2B brand means that when the problem appears, your name is the one they already trust.`,
      blocks: [
        {
          type: 'text', title: 'Why brand matters more in B2B than people think',
          html: `<p>B2B buyers are people with careers. They worry about picking a vendor that fails, so <b>perceived risk</b> often beats a slightly better feature list. Brand reduces that risk through familiarity, proof and community. Remember that buyers do most of their research before meeting you — so your content, reviews and community are your sales team in the rooms you are not in. Brand fundamentals are in <a href="#/lesson/marketing-3">Marketing, lesson 3</a>.</p>`
        },
        {
          type: 'pyramid', title: 'The B2B trust pyramid (build from the base up)',
          levels: [
            { label: 'Advocacy', note: 'Customers sell for you', desc: 'Champions speak at your events, write reviews and recommend you when they change jobs.' },
            { label: 'Community', desc: 'Users help each other learn, share templates and build careers around your product.' },
            { label: 'Thought leadership', desc: 'Original data, research reports and a clear point of view on where the industry is going.' },
            { label: 'Proof', desc: 'Named case studies with numbers, analyst mentions, review-site ratings, security certifications.' },
            { label: 'Clear positioning', note: 'The foundation', desc: 'For whom, which problem, why you are different — in one sentence a buyer can repeat to the CFO.' }
          ]
        },
        {
          type: 'framework', name: 'B2B positioning in one sentence', when: 'Before writing your website, pitch deck or analyst briefing',
          steps: [
            { label: 'For (ICP)', desc: 'The specific type of company and role you serve.' },
            { label: 'Who struggle with (problem)', desc: 'The costly, frequent problem in their words.' },
            { label: 'We are (category)', desc: 'The category buyers will compare you in — or a new one you define.' },
            { label: 'That (key benefit)', desc: 'The measurable outcome, e.g. "close the books three days faster".' },
            { label: 'Unlike (alternative)', desc: 'The status quo or main rival, including spreadsheets and doing nothing.' },
            { label: 'Proof', desc: 'One fact that makes the claim believable: a customer result, a number, a certification.' }
          ]
        },
        {
          type: 'case', company: 'Salesforce', year: 'Ongoing', title: 'Turning users into a career community',
          situation: `CRM is a crowded category, and Salesforce products need trained admins and developers inside each customer to deliver value. A shortage of skilled people limits adoption and renewals.`,
          decision: `Salesforce built the Trailblazer Community and the free Trailhead learning platform, plus community groups, MVP programmes and user-led conferences, alongside its Dreamforce event.`,
          outcome: `Salesforce says the community runs more than 1,300 local and virtual groups in 90+ countries, with 200+ MVP experts; in its survey, 80% of users said community engagement helped them extend capabilities and cut costs, and three in five members said it helped them get a new job or promotion.`,
          lesson: `In B2B, a community that builds users' careers builds your moat: trained people pull your product into their next company.`
        },
        {
          type: 'case', company: 'Zoho', year: '1996–today', title: 'A contrarian brand built on product, privacy and independence',
          situation: `Zoho began in 1996 as AdventNet in New Jersey, making network-management software, launched ManageEngine in 2003 and Zoho CRM and Writer in 2005, competing against heavily funded US rivals.`,
          decision: `It chose the opposite of the Silicon Valley playbook: it never took investor money, says it invests more in R&D and support than sales and marketing, refuses ads in its products, opened offices in small towns such as Tenkasi, ran a "Made in India, Made for the World" campaign and even a Super Bowl ad for Zoho One in 2020.`,
          outcome: `Zoho reported passing 100 million users in 2023 and runs a large suite of business apps with a partner marketplace of 500+ partners.`,
          lesson: `A B2B brand can be built on beliefs customers can verify — privacy, independence, price transparency — rather than on ad spend alone. Consistency over decades turns them into trust.`
        },
        {
          type: 'cycle', title: 'The B2B content-to-community flywheel', center: 'Trust',
          steps: [
            { label: 'Original insight', desc: 'Publish data only you have (anonymised benchmarks, surveys, product usage trends).' },
            { label: 'Distribution', desc: 'LinkedIn posts by founders and experts, newsletters, podcasts, partner channels.' },
            { label: 'Engagement', desc: 'Webinars, workshops, templates and calculators that solve a real task.' },
            { label: 'Community', desc: 'Users meet, teach and certify each other; champions emerge.' },
            { label: 'Advocacy', desc: 'Champions share results, write reviews, refer peers — feeding new insight.' }
          ]
        },
        {
          type: 'compare', title: 'Creativity methods that work in B2B', headers: ['Method', 'How to use it', 'Example'],
          rows: [
            ['Reverse an industry assumption', 'List 5 things "everyone" in the category does; ask "what if we did the opposite?"', 'Atlassian sold without a large sales team; Zoho stayed bootstrapped'],
            ['Steal from B2C', 'Borrow a consumer tactic and adapt it to business buyers', 'Free tiers, in-product virality, community events like fan festivals'],
            ['Teach, do not pitch', 'Turn your expertise into free training or certification', 'Trailhead; HubSpot Academy-style courses'],
            ['Make the invisible visible', 'Publish data on a hidden cost buyers feel but cannot measure', 'Annual "state of the industry" benchmark reports'],
            ['Constraint sprint', 'Give a team one week and a tiny budget to win 10 meetings from one ICP', 'Forces sharp messages and creative channels']
          ]
        },
        {
          type: 'questions', title: 'Ask before you invest in B2B brand and content',
          items: [
            { q: 'Can a buyer repeat our positioning to their CFO in one sentence?', why: 'If the champion cannot retell it, the message dies inside the buying committee.' },
            { q: 'What do we know that nobody else can publish?', why: 'Original data earns attention and citations; generic content is ignored.' },
            { q: 'Where do our ICP buyers learn and ask peers for advice?', why: 'Brand work only counts in the channels buyers actually use.' },
            { q: 'Does our community help members\' careers, or just promote us?', why: 'People join for their own growth; promotional communities fade.' },
            { q: 'How will we measure brand: branded search, direct traffic, win rate, sales-cycle length?', why: 'B2B brand pays off in conversion and speed, not just impressions.' },
            { q: 'Are our case studies named, numeric and recent?', why: 'Vague proof does not reduce perceived risk for the buyer.' }
          ]
        }
      ],
      terms: [
        { term: 'Positioning', def: 'The place you want to hold in a target buyer\'s mind: for whom, which problem, how you are different.' },
        { term: 'Thought leadership', def: 'Content with an original point of view or data that helps buyers think about their problem.' },
        { term: 'Category design', def: 'Defining and naming a new product category so buyers compare you on your terms.' },
        { term: 'Community-led growth', def: 'Growth driven by users helping, teaching and recommending each other.' },
        { term: 'Perceived risk', def: 'The buyer\'s fear of a bad decision; often more important than small feature differences in B2B.' },
        { term: 'Champion', def: 'A user inside a customer who promotes your product internally and to peers.' }
      ],
      quiz: [
        { q: 'A webinar gets 400 registrants; 40% attend; 10% of attendees become qualified opportunities; you win 25% at $20,000 ACV. What new ARR does it create?', options: ['$40,000', '$80,000', '$160,000', '$320,000'], answer: 1, explain: '400 × 40% = 160 attendees; × 10% = 16 opportunities; × 25% = 4 wins × $20,000 = $80,000.' },
        { q: 'What does strong B2B branding mainly reduce for buyers?', options: ['Tax', 'The number of features', 'Contract length', 'Perceived risk of a bad decision'], answer: 3, explain: 'Buyers fear choosing a vendor that fails; familiarity and proof reduce that risk.' },
        { q: 'Which is the best evidence for a case study?', options: ['"Customers love us"', 'A list of features', 'A named customer, a measured result and a time frame', 'A stock photo of a handshake'], answer: 2, explain: 'Specific, verifiable proof lowers perceived risk.' },
        { q: 'Why does Salesforce invest in Trailhead training?', options: ['Trained users increase adoption and carry the product into new companies', 'To replace its sales team', 'Because training is its main revenue', 'To avoid publishing documentation'], answer: 0, explain: 'A skilled community expands usage and creates champions across the market.' },
        { q: 'Which creativity method did Zoho use when it refused venture money and ads in products?', options: ['Steal from B2C', 'Constraint sprint', 'Reverse an industry assumption', 'Category design only'], answer: 2, explain: 'It did the opposite of the funded Silicon Valley playbook and made that part of its brand.' }
      ],
      challenge: {
        title: 'Build a 6-month brand plan for a niche B2B start-up',
        prompt: `<p>You lead marketing at a start-up selling safety-compliance software to mid-sized chemical plants in India and the Gulf. Budget: ₹30 lakh for six months. Average deal: ₹8 lakh ACV; win rate on qualified opportunities 25%. Buyers are plant heads and safety officers who rarely click ads but attend industry events and trust peers.</p><p>Write a positioning sentence, pick three brand/content initiatives with budgets, and estimate how many qualified opportunities you need to recover the budget in first-year revenue.</p>`,
        hints: ['Use For / who struggle with / we are / that / unlike / proof.', 'Revenue to cover ₹30 lakh = 30 ÷ 8 ≈ 4 wins → opportunities = wins ÷ 25%.'],
        model: `<p><b>Positioning:</b> "For safety heads at mid-sized chemical plants who struggle to keep permits, inspections and incident records audit-ready, [Company] is a compliance operating system that cuts audit preparation from weeks to days — unlike spreadsheets and generic EHS suites — as shown at [Plant X], which passed its last audit with zero findings."</p><p><b>Initiatives (₹30 lakh):</b></p><ul><li><b>Original benchmark report (₹8 lakh):</b> survey 150 plants on incidents, audit findings and time spent; launch at a trade show and through industry associations.</li><li><b>Safety leaders' roundtables (₹14 lakh):</b> six small dinners in Gujarat, Maharashtra and the Gulf for 15–20 plant heads each, led by a respected customer champion.</li><li><b>Free toolkit + certification (₹8 lakh):</b> downloadable inspection templates and a short online "audit-ready" course for safety officers.</li></ul><p><b>Payback maths:</b> to recover ₹30 lakh in first-year revenue: 30 ÷ 8 = 3.75 → <b>4 wins</b>; at 25% win rate → <b>16 qualified opportunities</b>. Six roundtables with ~100 plant heads need to produce about 16 opportunities (16%), plausible for a well-targeted audience.</p><p><b>Recommendation:</b> run the benchmark first (it feeds the roundtables and PR), track branded search, opportunities sourced and win rate on brand-touched deals, and double down on whichever channel produces the cheapest qualified opportunity.</p>`
      },
      takeaways: [
        'B2B brand exists to reduce perceived risk for the person whose job depends on the decision.',
        'Build from positioning and proof up to thought leadership, community and advocacy.',
        'Original data and career-building communities create trust that ads cannot buy.',
        'Use deliberate creativity methods — reverse assumptions, steal from B2C, teach instead of pitch.'
      ],
      sources: [
        { title: 'Salesforce — All about the Trailblazer Community', url: 'https://www.salesforce.com/blog/what-is-the-trailblazer-community/' },
        { title: 'Zoho — About us and company timeline', url: 'https://www.zoho.com/aboutus.html' },
        { title: 'Fortune — How Atlassian is redefining business collaboration (2015)', url: 'https://fortune.com/2015/04/27/atlassian-redefines-collaboration' },
        { title: 'Growth Method — Gartner B2B buying journey explained', url: 'https://www.growthmethod.com/gartner-b2b-buying-journey/' }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'pb-b2b-8',
      title: 'Scaling B2B: land-and-expand, partners, going global — and how B2B companies fail',
      level: 'Advanced',
      minutes: 18,
      hook: `The best B2B companies grow even if they stop selling to new customers — because every account they land keeps getting bigger.`,
      eli5: `Think of planting a tree in a friend's garden. First you plant one small sapling (one team uses your product). If it grows well, they ask for more trees in other corners (other teams, other offices). Soon you are looking after their whole garden. Scaling B2B means planting saplings that grow, finding gardeners who plant for you (partners), and moving to new towns (countries) — without forgetting to water the trees you already planted.`,
      blocks: [
        {
          type: 'cycle', title: 'Land-and-expand', center: 'Account growth',
          steps: [
            { label: 'Land', desc: 'Win one team, site or use case with a small, fast contract.' },
            { label: 'Adopt', desc: 'Onboard well; reach first value quickly; track usage.' },
            { label: 'Prove', desc: 'Measure outcomes; run business reviews with the economic buyer.' },
            { label: 'Expand', desc: 'More seats, more sites, more products, higher tiers.' },
            { label: 'Renew', desc: 'Lock in multi-year terms; turn champions into references.' }
          ]
        },
        {
          type: 'formula', name: 'How NRR compounds a cohort', expr: 'Cohort revenue after n years = Starting ARR × NRR^n',
          explain: 'A group of customers that keeps expanding becomes a growth engine by itself. SaaS Capital\'s 2025 survey found median growth of 24%; companies with NRR of 120–130% grew at a median of 38%, and those above 130% at 50%.',
          example: '$1m cohort at 120% NRR → year 1 $1.2m, year 2 $1.44m, year 3 $1.728m — 73% more revenue with no new logos. At 90% NRR the same cohort shrinks to $0.729m.'
        },
        {
          type: 'interactive', widget: 'retention', title: 'Watch retention shape your cohorts', note: 'Change churn and see the cohort curve. Then imagine adding expansion revenue on top — that is the gap between companies at 90% and 120% NRR.'
        },
        {
          type: 'case', company: 'Datadog', year: '2024', title: 'Land with one product, expand across the platform',
          situation: `Datadog started with infrastructure monitoring for engineering teams moving to the cloud, then added logs, application monitoring, security and more on one platform.`,
          decision: `It lands with a team or a product and expands as customers move more workloads to the cloud and adopt more products, with pricing that grows with usage and with each product added.`,
          outcome: `For 2024 Datadog reported revenue of $2.68 billion (up 26%), about 3,610 customers with ARR of $100,000 or more (up 13%) and 462 customers above $1 million (up 17%), plus $775 million of free cash flow.`,
          lesson: `A multi-product platform with usage-linked pricing turns every landed account into an expansion opportunity. Track the count of $100k+ and $1m+ customers as your expansion scoreboard.`
        },
        {
          type: 'map', title: 'Scaling levers for a B2B company', center: 'Scale',
          branches: [
            { label: 'Expand accounts', desc: 'Customer success, new products, higher tiers, usage growth.', children: ['NRR', 'Cross-sell'] },
            { label: 'Move up-market', desc: 'Enterprise features, field sales, security certifications — bigger ACV but longer cycles.', children: ['SSO', 'Audit logs', 'SLAs'] },
            { label: 'Partner ecosystem', desc: 'System integrators, resellers, app marketplaces and cloud marketplaces that source and deliver deals.', children: ['SIs', 'Resellers', 'Marketplaces'] },
            { label: 'New geographies', desc: 'Pick markets with the same ICP; localise compliance, data residency, payments and support hours.', children: ['US', 'EU', 'Middle East', 'SE Asia'] },
            { label: 'New segments', desc: 'Adjacent industries or company sizes that share the same core problem.', children: ['Verticals', 'SMB vs enterprise'] },
            { label: 'Funding mix', desc: 'Bootstrapping, venture capital, revenue-based or venture debt, IPO.', children: ['Equity', 'Debt', 'Cash flow'] }
          ]
        },
        {
          type: 'compare', title: 'Going international from India: three common routes', headers: ['', 'US first', 'Middle East / SE Asia first', 'Partner-led'],
          rows: [
            ['Why', 'Largest software spend; high ACV', 'Closer time zones, similar buyers, faster sales cycles', 'Use partners\' customer relationships'],
            ['What it needs', 'US entity, US-based sales leaders, SOC 2, US-hour support', 'Local partners, data-residency answers, Arabic/local language where needed', 'Partner enablement, a partner margin, co-selling'],
            ['Risk', 'High CAC; strong competitors', 'Smaller deal sizes in some markets', 'Less control over pricing and customer experience'],
            ['Example signal', 'Freshworks incorporated in the US early for payments, listed on Nasdaq in 2021', 'Zoho opened offices in Dubai and Singapore (2018), launched in Jeddah and Cairo (2020) and opened in Doha (2024)', 'Zoho partnered with TCS (2020) and PwC India (2023)']
          ]
        },
        {
          type: 'case', company: 'Zilingo', year: '2015–2023', title: 'How a B2B unicorn unravelled',
          situation: `Zilingo, founded in 2015 by Ankiti Bose and Dhruv Kapoor in Singapore, became a B2B fashion platform offering manufacturing, logistics and technology services to fashion businesses. It reached a valuation of about $1 billion in 2019, backed by Sequoia and Temasek.`,
          decision: `As it raised a new round in 2022, a whistle-blower complaint and due diligence raised questions about financial practices. After an independent forensic investigation, the company dismissed the CEO in May 2022; she disputed the findings and alleged harassment.`,
          outcome: `A management buyout bid failed, creditors found a buyer for some assets, and in January 2023 the board appointed a provisional liquidator.`,
          lesson: `Scaling multiplies weaknesses in governance, finance controls and unit economics. Audited numbers, independent boards and clean revenue recognition are survival tools, not paperwork.`
        },
        {
          type: 'compare', title: 'Classic B2B failure patterns', headers: ['Failure pattern', 'Early warning sign', 'Prevention'],
          rows: [
            ['Hiring sales before repeatability', 'Reps miss quota across the board', 'Founder closes 20–30 deals with a written playbook first'],
            ['Moving up-market too early', 'Deals stall in security review; product roadmap hijacked by one client', 'Build enterprise features only when 3+ target accounts need them'],
            ['Leaky bucket', 'Gross retention below ~90%', 'Customer success, onboarding, product fixes before more acquisition'],
            ['Customer concentration', 'One client is 20–30%+ of revenue', 'Diversify; cap dependence; multi-year contracts'],
            ['Credit-fuelled commerce', 'GMV grows, contribution negative, receivables balloon', 'Price credit; underwrite; grow cluster by cluster'],
            ['Weak governance', 'Unaudited numbers, related-party deals, board with no independents', 'Audit early, independent directors, finance controls']
          ]
        },
        {
          type: 'questions', title: 'Ask before you scale',
          items: [
            { q: 'Is our NRR above 100% and gross retention near or above 90%?', why: 'Scaling acquisition on a leaky base multiplies losses.' },
            { q: 'Do we have a repeatable motion that people other than the founders can run?', why: 'Scale requires playbooks, not heroics.' },
            { q: 'Which new market has the same ICP and buying process as our current one?', why: 'Expanding into a different ICP is a new start-up, not scaling.' },
            { q: 'What will partners earn, and why would they prioritise us?', why: 'Partners sell what makes them money and is easy to deliver.' },
            { q: 'What is our largest customer\'s share of revenue?', why: 'Concentration gives one buyer power over your pricing and survival.' },
            { q: 'Are our finances audit-ready and our board independent enough?', why: 'Governance failures can destroy a company faster than competitors.' },
            { q: 'Which funding fits our cash profile — equity, venture debt, revenue-based finance or cash flow?', why: 'Debt suits predictable recurring revenue; equity suits uncertain, long payback bets.' }
          ]
        }
      ],
      terms: [
        { term: 'Land-and-expand', def: 'Winning a small first contract in an account and growing it through more users, sites and products.' },
        { term: 'Logo', def: 'Sales slang for a customer company (as in "new logos" vs expansion).' },
        { term: 'System integrator (SI)', def: 'A partner that implements and integrates software for clients, often influencing which vendor is chosen.' },
        { term: 'Data residency', def: 'Rules or customer requirements about the country where data must be stored.' },
        { term: 'Customer concentration', def: 'The share of revenue that comes from your largest customers.' },
        { term: 'Venture debt / revenue-based financing', def: 'Loans to growing companies repaid from future revenue, usually with less dilution than equity.' }
      ],
      quiz: [
        { q: 'A $2m customer cohort has NRR of 110% each year. What is its revenue after two years?', options: ['$2.2m', '$2.4m', '$2.42m', '$2.64m'], answer: 2, explain: '2 × 1.1 × 1.1 = $2.42m.' },
        { q: 'A reseller takes a 25% margin on a $40,000 deal. How much revenue do you keep?', options: ['$10,000', '$25,000', '$40,000', '$30,000'], answer: 3, explain: '$40,000 × (1 − 0.25) = $30,000.' },
        { q: 'Which is the clearest early warning of a "leaky bucket"?', options: ['Gross retention well below 90%', 'A rising number of $1m customers', 'Shorter sales cycles', 'More partner-sourced deals'], answer: 0, explain: 'Low gross retention means existing revenue drains away faster than sales can refill it.' },
        { q: 'Datadog reports its count of $100k+ and $1m+ ARR customers. Why is that useful?', options: ['It replaces revenue reporting', 'It shows expansion within accounts', 'It measures marketing spend', 'It is required by tax law'], answer: 1, explain: 'Growth in large-customer counts is a scoreboard for land-and-expand.' },
        { q: 'What is the strongest lesson from Zilingo\'s collapse for scaling founders?', options: ['Never raise venture capital', 'Governance and audited finances matter as much as growth', 'B2B fashion can never work', 'Always pivot to consumers'], answer: 1, explain: 'Questions over financial practices during due diligence triggered a crisis that ended in liquidation.' }
      ],
      challenge: {
        title: 'Plan the next stage for an Indian B2B SaaS',
        prompt: `<p>Your HR-software company has ₹40 crore ARR, 1,200 mid-market customers in India, NRR 108%, gross retention 88%, CAC payback 22 months and one customer at 12% of revenue. The board wants to (a) enter the US, (b) launch an enterprise tier, or (c) build a partner channel with payroll firms in the Middle East. You can fund only one major initiative this year.</p><p>Diagnose the base, choose one option, and set three metrics and targets for the year.</p>`,
        hints: ['Look first at gross retention and CAC payback against benchmarks.', 'Which option re-uses the same ICP and buying process with the lowest CAC?'],
        model: `<p><b>Diagnosis:</b> gross retention of 88% is below the ~90% "table stakes" level (SaaS Capital), and 22-month payback is slow for mid-market. NRR of 108% is decent but partly masks churn. One customer at 12% is a concentration risk. Fix the base before an expensive bet.</p><p><b>Option review:</b> (a) the US means a new ICP context, high CAC and long ramp — worst fit now; (b) an enterprise tier could raise ACV and NRR but needs security work and field sales; (c) Middle East payroll partners give access to similar mid-market buyers, at lower CAC, using partners' trust.</p><p><b>Choice:</b> (c) partner-led Middle East expansion, combined with a retention programme at home. Give partners an illustrative 20% margin, joint selling for the first 20 deals, and localised compliance (payroll rules, data residency).</p><p><b>Year targets:</b> gross retention from 88% → 91%; CAC payback from 22 → 16 months on partner-sourced deals; ₹4 crore new ARR from the Middle East (e.g. 80 customers × ₹5 lakh), with the largest customer below 10% of revenue. Revisit the US option once GRR and payback are healthy.</p>`
      },
      takeaways: [
        'NRR compounds: expansion inside existing accounts is the cheapest and most durable growth.',
        'Scale only a repeatable motion; fix retention and payback before adding expensive bets.',
        'Choose new markets and partners that share your ICP and buying process.',
        'Governance, audited numbers and diversified customers are part of the scaling plan, not afterthoughts.'
      ],
      sources: [
        { title: 'Datadog — Fourth quarter and fiscal year 2024 results', url: 'https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-fiscal-year-2024-financial' },
        { title: 'SaaS Capital — 2025 B2B SaaS Retention Benchmarks', url: 'https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf' },
        { title: 'Business Today — Liquidation process for Zilingo begins', url: 'https://www.businesstoday.in/amp/entrepreneurship/story/liquidation-process-for-b2b-fashion-tech-start-up-zilingo-begins-claims-report-366925-2023-01-20' },
        { title: 'Business Standard — Freshworks prices IPO at $36 per share', url: 'https://www.business-standard.com/amp/article/markets/freshworks-prices-ipo-at-36-per-share-to-raise-over-1-bn-via-us-listing-121092200565_1.html' },
        { title: 'Zoho — About us and company timeline', url: 'https://www.zoho.com/aboutus.html' }
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-pb-atlassian-cloud', company: 'Atlassian', industry: 'B2B software', year: '2020', track: 'pb-b2b',
    title: 'Stop selling the on-premise product to force a move to cloud?',
    situation: `<p>Atlassian sold Jira, Confluence and other tools in three forms: cloud subscriptions, self-hosted "Server" licences and higher-priced "Data Center" editions for large on-premise deployments. Supporting several versions split engineering effort, and cloud subscriptions gave recurring revenue and faster product updates. The company said more than 90% of new customers already started on cloud.</p><p>But many existing Server customers — some in regulated industries or the EU — were wary of moving data to the cloud, and cheap self-hosted licences (such as $10 for up to 10 users) were popular with small teams.</p>`,
    question: 'You are Atlassian\'s co-CEO in 2020. What do you do with the Server product line?',
    options: [
      { text: 'Keep selling and supporting Server indefinitely alongside cloud.', result: 'Avoids upsetting customers, but engineering stays split, cloud improvements slow and Atlassian carries the cost of three products for years.' },
      { text: 'Announce an end date for Server with a long transition (stop new sales in a few months, end support after several years), keep Data Center for customers who must stay on-premise, and invest in migration tools and cloud compliance.', result: 'Focuses the company on cloud and recurring revenue while giving customers time and an on-premise option; expect complaints about price and lost features.', best: true },
      { text: 'Shut down Server immediately and require all customers to move to cloud within six months.', result: 'Fastest focus, but likely to cause mass churn among regulated and EU customers and serious reputational damage.' },
      { text: 'Spin Server off into a separate company.', result: 'Keeps customers served, but creates a competitor using your own code and confuses the market.' }
    ],
    whatHappened: `<p>In October 2020 co-CEO Scott Farquhar told customers Atlassian would stop selling new Server licences from 2 February 2021 and end support in February 2024, describing the shift as "sharpening our focus as a cloud-first company". Data Center editions continued but at higher prices (from $27,000 for up to 500 users), and some customers complained loudly about cost, data-protection concerns and feature gaps between cloud and server versions.</p>`,
    lessons: [
      'Retiring a legacy product frees R&D and lifts recurring revenue, but needs a long runway and a fallback for customers who cannot move.',
      'Announce dates clearly and early; migration tools and compliance answers matter as much as the decision.',
      'Price changes bundled with forced migrations are the main source of backlash — budget for it.'
    ],
    frameworks: ['Product life cycle and portfolio pruning', 'Switching costs and lock-in', 'Recurring revenue economics']
  },
  {
    id: 'case-pb-zendesk-sale', company: 'Zendesk', industry: 'B2B SaaS (customer service software)', year: '2022', track: 'pb-b2b',
    title: 'Accept a lower buyout offer months after rejecting a higher one?',
    situation: `<p>In February 2022 Zendesk's board rejected a non-binding offer from a private-equity consortium valuing the company at about $17 billion ($127–132 a share), saying it significantly undervalued the company. Activist investor JANA Partners objected and moved to nominate directors. On 9 June, after a strategic review, Zendesk said it would remain independent; markets reacted badly, and the share price fell by nearly half during June amid difficult market conditions.</p><p>Weeks later, Hellman & Friedman and Permira offered $77.50 a share in cash, about a 34% premium to the previous close, valuing Zendesk at roughly $10.2 billion.</p>`,
    question: 'You are on Zendesk\'s board in June 2022. What do you recommend?',
    options: [
      { text: 'Reject the offer and stay public; wait for software valuations to recover.', result: 'Keeps upside if markets rebound, but leaves shareholders exposed, invites a proxy fight with the activist and may depress the share price further.' },
      { text: 'Accept the cash offer after confirming no better bid exists, because it offers a meaningful premium to today\'s price and certainty in a falling market.', result: 'Delivers certain value to shareholders and ends the activist fight, at the cost of admitting the earlier, higher offer is gone.', best: true },
      { text: 'Launch a large share buyback with debt to support the price.', result: 'May lift the price briefly but adds leverage during a downturn and does not resolve shareholder pressure.' },
      { text: 'Go back to the February bidders and insist on $127 a share.', result: 'Unrealistic after a market reset; likely ends with no deal at all.' }
    ],
    whatHappened: `<p>In late June 2022 Zendesk agreed to be acquired by an investor group led by Hellman & Friedman and Permira for $77.50 a share in cash, about $10.2 billion including debt, with the board voting unanimously in favour after "working constructively with major shareholders". The price was far below the roughly $17 billion offer rejected in February.</p>`,
    lessons: [
      'A board must judge offers against realistic alternatives at that moment, not against past highs.',
      'Market regimes change fast; the cost of waiting can be large in a sell-off.',
      'Activist investors and shareholder pressure shape what a board can credibly reject.'
    ],
    frameworks: ['Valuation multiples and market regimes', 'Board fiduciary duty', 'BATNA in M&A negotiations']
  },
  {
    id: 'case-pb-slack-salesforce', company: 'Slack Technologies', industry: 'B2B collaboration software', year: '2020', track: 'pb-b2b',
    title: 'Sell to Salesforce or keep fighting Microsoft Teams alone?',
    situation: `<p>Slack had grown through bottom-up adoption and an enterprise product, Enterprise Grid, reaching hundreds of large customers. But Microsoft was bundling Teams with Office 365 and pushing it hard during the pandemic. In 2020 Slack filed an antitrust complaint with the European Commission over the bundling. Slack was still loss-making, and its enterprise sales depended on winning against a rival that came "free" with software customers already paid for.</p><p>Salesforce, the largest CRM vendor, approached Slack about an acquisition that would make Slack the interface for its Customer 360 platform.</p>`,
    question: 'You are Slack\'s CEO in late 2020. What do you recommend to the board?',
    options: [
      { text: 'Stay independent and outspend Microsoft on sales and marketing.', result: 'Preserves independence, but a loss-making company competing against a bundled product risks burning cash with no guarantee of winning large accounts.' },
      { text: 'Sell to Salesforce, negotiating to keep the product and brand intact with the founder leading it as a unit, and gain Salesforce\'s enterprise sales reach and platform.', result: 'Gives shareholders a large premium and Slack access to a vast enterprise customer base, at the cost of independence and some neutrality towards other platforms.', best: true },
      { text: 'Cut prices to zero for large enterprises to match Teams.', result: 'Destroys revenue and still may not overcome bundling inside existing Microsoft contracts.' },
      { text: 'Pivot to consumer messaging.', result: 'Abandons Slack\'s strengths and enters a market dominated by giant free apps.' }
    ],
    whatHappened: `<p>In December 2020 Salesforce agreed to buy Slack in a cash-and-stock deal worth $27.7 billion, its largest acquisition, with Stewart Butterfield continuing to lead Slack as a unit and Slack becoming the interface for a "Slack-first Customer 360". The deal was completed in July 2021.</p>`,
    lessons: [
      'Bundling by a platform owner can change the economics of a standalone B2B product.',
      'Distribution matters: an acquirer with enterprise reach can be worth more than independence.',
      'Negotiate for brand and leadership continuity if the product\'s culture is part of its value.'
    ],
    frameworks: ['Bundling and platform competition', 'Build, partner or sell decisions', 'Distribution as a moat']
  },
  {
    id: 'case-pb-freshworks-ipo', company: 'Freshworks', industry: 'B2B SaaS', year: '2021', track: 'pb-b2b',
    title: 'Where should an Indian-born SaaS company go public?',
    situation: `<p>Freshworks began in Chennai in 2010 as Freshdesk, a cloud helpdesk for small and mid-sized businesses, and was incorporated in the US from the start because it needed US payment processors for recurring billing. Renamed Freshworks in 2017, it sold a family of business software products to customers around the world and was backed by Sequoia, Accel and Tiger Global.</p><p>The founders had to choose how to give investors and employees liquidity and raise growth capital.</p>`,
    question: 'You are Freshworks\' CEO in 2021. What listing route do you choose?',
    options: [
      { text: 'Stay private and raise another large private round.', result: 'Avoids public scrutiny but delays liquidity for early investors and employees and forgoes a public-market currency for hiring and acquisitions.' },
      { text: 'IPO on a US exchange (Nasdaq), where SaaS peers and specialist investors are concentrated and the company is already a US entity.', result: 'Access to deep SaaS investor demand and comparable valuations, plus a global brand signal; requires US reporting standards and exposes the stock to US tech volatility.', best: true },
      { text: 'List only in India to be close to the founding team.', result: 'Strong local pride, but at that time Indian markets had few SaaS comparables and the company\'s legal structure and customers were mostly outside India.' },
      { text: 'Sell the company to a larger CRM vendor.', result: 'Immediate liquidity, but ends independence before the company reaches its full potential.' }
    ],
    whatHappened: `<p>In September 2021 Freshworks priced its IPO at $36 a share on the Nasdaq Global Select Market under the ticker FRSH, raising about $1.03 billion at a valuation above $10 billion — the first Indian-origin software-products start-up to list on a US exchange. Founder Girish Mathrubootham named the IPO project "Project Superstar" in honour of actor Rajinikanth.</p>`,
    lessons: [
      'Listing venue should follow where your comparable companies, investors and legal entity are.',
      'Early structural choices (US incorporation for payments) shape later financing options.',
      'An IPO is a financing and liquidity event, not the finish line; public markets then judge growth and efficiency every quarter.'
    ],
    frameworks: ['Capital markets and listing choice', 'Comparable company valuation', 'Founder liquidity and governance']
  }
]);
