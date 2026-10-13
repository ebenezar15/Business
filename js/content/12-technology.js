/* MBA Studio — Track 12: Technology, Data & AI */
MBA.addTrack({
  id: 'technology',
  stage: 3,
  order: 12,
  title: 'Technology, Data & AI',
  icon: '🤖',
  color: '#06b6d4',
  tagline: 'Lead in a world where every company is a software company',
  summary: `You do not need to code to lead technology well — you need to understand how software creates value, how to decide with data, and how to adopt AI safely. After this track you can talk confidently with engineers, prioritise products and AI use cases, judge build-vs-buy, and ask the right questions on security and tech due diligence.`,
  outcomes: [
    'Explain why software, cloud and SaaS businesses have such different economics',
    'Use APIs and platforms as strategic tools, not just technical plumbing',
    'Build metrics trees, choose a North Star and read an A/B test',
    'Run product discovery and prioritise a roadmap with RICE',
    'Explain LLMs, generative AI and AI agents, and prioritise AI use cases by ROI',
    'Govern AI and cyber risk (EU AI Act, NIST) and run a tech due-diligence review'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-1',
      title: 'How tech businesses work: software, cloud & SaaS',
      level: 'Beginner',
      minutes: 13,
      hook: 'Selling the millionth copy of an app costs almost nothing — that single fact explains why software companies can become so big so fast.',
      eli5: `Baking cakes means buying flour and eggs for every single cake. Writing a cake recipe is hard work once, but you can share it with a million people for free. Software is like the recipe: expensive to create, nearly free to copy. And “cloud” means renting someone else’s giant kitchen instead of building your own.`,
      blocks: [
        { type: 'text', title: 'The economics of software', html: `<p>Software has <b>high fixed costs</b> (engineers building the product) and <b>very low marginal costs</b> (serving one more customer). That creates:</p><ul><li><b>High gross margins</b> — SaaS companies often run at roughly 70–85%, versus much lower for hardware or retail.</li><li><b>Scale economies</b> — once the product exists, growth mostly costs sales & marketing.</li><li><b>Winner-take-most markets</b> when network effects or data advantages exist.</li></ul><p>Trade-off: you must spend heavily before revenue arrives, so investors care a lot about growth, retention and burn.</p>` },
        { type: 'framework', name: 'The cloud stack: IaaS, PaaS, SaaS', by: 'NIST cloud definitions (2011) and industry usage', when: 'To understand what you are buying and what you still have to manage.',
          steps: [
            { label: 'On-premises', desc: 'You own the servers, the building, the software and the staff. Maximum control, maximum effort.' },
            { label: 'IaaS — Infrastructure as a Service', desc: 'Rent servers, storage and networking (AWS EC2, Azure VMs, Google Compute). You still manage operating systems and apps.' },
            { label: 'PaaS — Platform as a Service', desc: 'Rent a ready platform to run your code and databases (Heroku, Google App Engine, managed databases). You manage your app.' },
            { label: 'SaaS — Software as a Service', desc: 'Use finished software in a browser for a subscription (Salesforce, Slack, Google Workspace). You manage only your data and users.' }
          ] },
        { type: 'compare', title: 'Buying software: then vs now', headers: ['', 'Licence + on-premises', 'SaaS subscription'],
          rows: [
            ['Payment', 'Big upfront licence + ~20% yearly maintenance', 'Monthly or annual subscription'],
            ['Accounting for the buyer', 'Capital expense (CapEx)', 'Operating expense (OpEx)'],
            ['Updates', 'Big, painful upgrades every few years', 'Continuous, automatic'],
            ['Vendor revenue', 'Lumpy, deal-driven', 'Recurring (ARR), predictable'],
            ['Switching', 'Hard — sunk cost', 'Easier in theory; data and habits still lock in']
          ] },
        { type: 'formula', name: 'SaaS gross margin', expr: 'Gross margin % = (Revenue − Cost of revenue) ÷ Revenue',
          explain: 'Cost of revenue for SaaS = hosting/cloud bills, customer support, third-party software in the product, payment fees. AI features add model inference costs, which can lower margins noticeably.',
          example: 'Revenue $10M; cloud $1.2M; support $0.8M; AI model costs $0.5M → gross margin = (10 − 2.5) ÷ 10 = 75%.' },
        { type: 'case', company: 'Netflix', year: '2008–2016', title: 'Moving everything to the cloud',
          situation: `In 2008 a major database corruption stopped Netflix shipping DVDs for several days. Its own data centres were becoming a bottleneck just as streaming was taking off.`,
          decision: `Netflix decided to move its systems to Amazon Web Services and re-architect them into many small, independent services, rather than simply copying the old system to the cloud.`,
          outcome: `The migration took about seven years and completed in early 2016. Netflix could scale streaming globally on demand, and its engineering practices (microservices, “Chaos Monkey” deliberately breaking systems to test resilience) became widely copied.`,
          lesson: `Digital transformation is not “lift and shift”. The value comes from redesigning how the business works on top of the new technology.` },
        { type: 'interactive', widget: 'rule-of-40', title: 'Health check a SaaS company', note: 'Try a company growing 60% with −25% margin, then one growing 15% with 25% margin. Both score 35–40 — the Rule of 40 balances growth and profitability.' },
        { type: 'flip', title: 'Test yourself', cards: [
          { front: 'Gmail for business is IaaS, PaaS or SaaS?', back: 'SaaS — finished software you just use.' },
          { front: 'Why are software gross margins high?', back: 'Near-zero marginal cost of serving one more customer.' },
          { front: 'What does ARR stand for?', back: 'Annual Recurring Revenue — yearly value of active subscriptions.' },
          { front: 'Why can AI features hurt SaaS margins?', back: 'Every AI request costs compute (inference), unlike normal software usage which is very cheap.' }
        ] }
      ],
      terms: [
        { term: 'Marginal cost', def: 'The cost of producing or serving one more unit or customer.' },
        { term: 'SaaS', def: 'Software as a Service — software delivered over the internet for a subscription.' },
        { term: 'IaaS / PaaS', def: 'Renting raw infrastructure (IaaS) or a ready-made platform to run code (PaaS) from a cloud provider.' },
        { term: 'ARR', def: 'Annual Recurring Revenue: the annualised value of subscription contracts.' },
        { term: 'CapEx vs OpEx', def: 'Capital expenditure buys long-term assets; operating expenditure is ongoing running cost.' },
        { term: 'Microservices', def: 'Building software as many small, independent services that communicate via APIs.' },
        { term: 'Inference cost', def: 'The compute cost each time an AI model produces an answer.' }
      ],
      quiz: [
        { q: 'Why can software companies scale faster than a bakery?', options: ['They pay engineers less', 'Serving another customer costs almost nothing', 'They have no competitors', 'They never need marketing'], answer: 1, explain: 'Near-zero marginal cost means revenue grows faster than costs.' },
        { q: 'A company rents servers from AWS but installs and manages its own operating systems and apps. This is…', options: ['SaaS', 'PaaS', 'IaaS', 'On-premises'], answer: 2, explain: 'Infrastructure is rented; everything above is managed by the customer.' },
        { q: 'Revenue $20M, cost of revenue $5M. Gross margin?', options: ['75%', '25%', '80%', '60%'], answer: 0, explain: '(20 − 5) ÷ 20 = 75%.' },
        { q: 'What was the main lesson of Netflix’s cloud migration?', options: ['Cloud is always cheaper', 'Re-architecting the business for the cloud, not just copying systems, creates the value', 'Never use a single vendor', 'Data centres are obsolete for every company'], answer: 1, explain: 'Netflix rebuilt into microservices to gain scale and resilience.' },
        { q: 'For the buyer, switching from licences to SaaS mainly shifts spending from…', options: ['OpEx to CapEx', 'Tax to equity', 'Marketing to R&D', 'CapEx to OpEx'], answer: 3, explain: 'Upfront capital purchases become ongoing operating expenses.' }
      ],
      challenge: {
        title: 'Should the factory move to SaaS?',
        prompt: `A 300-person manufacturer runs an on-premises ERP bought for $1.2M eight years ago, with $240k/year maintenance and two in-house IT staff ($90k each) mostly patching it. A SaaS ERP quotes $300k/year plus $400k one-off implementation. Compare 5-year costs and give a recommendation with risks.`,
        hints: ['The old licence is a sunk cost — ignore it.', 'Will the IT staff be freed for other work?', 'Consider non-cost factors: upgrades, security, data migration.'],
        model: `<p><b>Stay (5 years):</b> maintenance $240k × 5 = $1.2M + IT staff $180k × 5 = $0.9M → <b>$2.1M</b> (plus likely hardware refresh and a forced upgrade).</p>
<p><b>Move:</b> $400k + $300k × 5 = <b>$1.9M</b>. If one IT person is redeployed to analytics, the economic gap widens in favour of SaaS.</p>
<p><b>Ignore:</b> the original $1.2M — sunk cost.</p>
<p><b>Non-cost:</b> SaaS brings automatic updates, better security patching and mobile access; risks are migration failure, customisations that cannot be replicated, and vendor lock-in.</p>
<p><b>Recommendation:</b> move, but redesign processes to fit standard SaaS workflows instead of re-creating old customisations; run a phased migration (finance first, then production), negotiate price caps on renewal and data-export rights.</p>`
      },
      takeaways: [
        'Software = high fixed cost, near-zero marginal cost → high margins and scale.',
        'IaaS, PaaS and SaaS differ in how much you manage yourself.',
        'SaaS turns lumpy licences into predictable recurring revenue (ARR).',
        'AI features add real per-use costs — watch gross margin.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-2',
      title: 'APIs, platforms & digital transformation',
      level: 'Beginner',
      minutes: 13,
      hook: 'An internal memo about how teams should talk to each other helped create the world’s biggest cloud business.',
      eli5: `In a restaurant you do not walk into the kitchen; you tell the waiter what you want and the waiter brings it back. An API is the waiter between two pieces of software: a clear menu of what you can ask for and what you will get back. Companies that build good “waiters” let other businesses plug into them.`,
      blocks: [
        { type: 'text', title: 'What is an API?', html: `<p>An <b>API (Application Programming Interface)</b> is a defined way for software to request data or actions from other software. When an app shows a map, takes a card payment or sends a text message, it is usually calling another company’s API (e.g. Google Maps, Stripe, Twilio).</p><p>Why leaders care: APIs let you <b>build faster</b> (buy capabilities instead of building them), <b>partner at scale</b> (others integrate with you) and even <b>sell capabilities as products</b>.</p>` },
        { type: 'case', company: 'Amazon', year: 'c. 2002–2006', title: 'The API mandate and the birth of AWS',
          situation: `Amazon’s teams were slowed down by tangled systems and dependencies. Jeff Bezos wanted small teams that could move independently (“two-pizza teams”).`,
          decision: `As recounted by former engineer Steve Yegge, Bezos mandated that all teams expose their data and functionality only through service interfaces (APIs), designed so they could be offered to outside developers — no back doors.`,
          outcome: `Amazon became a collection of reusable services. It realised its infrastructure skills could be sold, launching Amazon Web Services with S3 and EC2 in 2006 — which grew into a market-leading cloud business and a major source of Amazon’s operating profit.`,
          lesson: `Architecture is strategy. Designing internal capabilities as clean, external-ready APIs creates options you cannot see yet.` },
        { type: 'framework', name: 'Pipeline vs platform business', by: 'Parker, Van Alstyne & Choudary, “Platform Revolution” (2016)', when: 'When deciding whether to sell a product or orchestrate an ecosystem.',
          steps: [
            { label: 'Pipeline', desc: 'Create a product and push it to customers in a linear chain (a car maker, a newspaper). Value is created inside the firm.' },
            { label: 'Platform', desc: 'Connect producers and consumers and let them create value with each other (App Store, Airbnb, Shopify apps). Value is created by the ecosystem.' },
            { label: 'Core interaction', desc: 'Identify the key exchange the platform enables (a booking, an app download, a payment).' },
            { label: 'Governance', desc: 'Set rules, take-rates, quality controls and API access so the ecosystem stays healthy and trustworthy.' }
          ] },
        { type: 'compare', title: 'Digitisation → digitalisation → transformation', headers: ['Stage', 'What it means', 'Example'],
          rows: [
            ['Digitisation', 'Turning analogue into digital data', 'Scanning paper invoices into PDFs'],
            ['Digitalisation', 'Using digital tools to improve existing processes', 'Automatic invoice matching and e-payments'],
            ['Digital transformation', 'Changing the business model and customer value using technology', 'A machine maker selling “uptime as a service” with sensors and predictive maintenance']
          ] },
        { type: 'case', company: 'Stripe', year: '2010–today', title: 'Payments as a few lines of code',
          situation: `Accepting online payments used to require merchant accounts, paperwork and weeks of integration work.`,
          decision: `Stripe focused on developers: clean documentation and an API that let a startup accept card payments with very little code.`,
          outcome: `Developers chose Stripe and brought it into their companies as those companies grew; Stripe became one of the most valuable private fintech firms, expanding into billing, tax and fraud products.`,
          lesson: `When developers are the buyer, developer experience (docs, simplicity, reliability) is the product and the marketing.` },
        { type: 'scenario', prompt: 'You lead a regional bank. Fintechs want to connect to your customer accounts (with consent). What do you do?',
          options: [
            { text: 'Block all access to protect customers', feedback: 'Regulation (e.g. open banking rules in the UK and EU) often requires access anyway, and fintechs will route around you via competitors.', good: false },
            { text: 'Publish secure, consented APIs and partner with the best fintechs, keeping the customer relationship', feedback: 'Good. You turn a threat into distribution and stay the trusted platform, with security and consent built in.', good: true },
            { text: 'Build copies of every fintech app yourself', feedback: 'Slow and expensive; you are unlikely to out-innovate dozens of specialists in every niche.', good: false }
          ] },
        { type: 'checklist', title: 'Digital transformation readiness', items: ['Is the goal a business outcome (revenue, cost, customer experience), not “deploy tool X”?', 'Is there a senior business owner, not just IT?', 'Have we mapped the customer journey we want to change?', 'Are our core systems accessible through APIs?', 'Do we have a plan to retrain staff and change incentives?', 'Have we defined 2–3 metrics to judge success in 6–12 months?'] }
      ],
      terms: [
        { term: 'API', def: 'A defined interface that lets one piece of software request data or actions from another.' },
        { term: 'Platform business', def: 'A business that creates value by enabling interactions between external producers and consumers.' },
        { term: 'Two-pizza team', def: 'Amazon’s idea that a team should be small enough to be fed by two pizzas, so it can move fast and own a service.' },
        { term: 'Open banking', def: 'Regulation and practice of letting customers securely share bank data with third parties through APIs.' },
        { term: 'Digital transformation', def: 'Using technology to fundamentally change how a business creates and delivers value, not just to automate old steps.' },
        { term: 'Developer experience (DX)', def: 'How easy and pleasant it is for developers to use a product, its APIs and documentation.' },
        { term: 'Take rate', def: 'The percentage a platform keeps from each transaction it enables.' }
      ],
      quiz: [
        { q: 'In the restaurant analogy, the API is…', options: ['The kitchen', 'The customer', 'The menu and the waiter', 'The food'], answer: 2, explain: 'It defines what you can request and carries requests and responses.' },
        { q: 'Which business is a platform rather than a pipeline?', options: ['A furniture manufacturer', 'Airbnb', 'A local bakery', 'A newspaper printing press'], answer: 1, explain: 'Airbnb connects hosts and guests who create value with each other.' },
        { q: 'Scanning paper forms into PDFs is…', options: ['Digitisation', 'Digital transformation', 'A platform strategy', 'An API'], answer: 0, explain: 'It converts analogue to digital without changing the process or model.' },
        { q: 'Why did Amazon’s API mandate matter strategically?', options: ['It reduced the number of engineers', 'It made internal services reusable and sellable, which helped enable AWS', 'It was required by regulators', 'It replaced all databases'], answer: 1, explain: 'External-ready interfaces turned internal infrastructure into a product.' },
        { q: 'Stripe’s key early advantage was…', options: ['Lowest fees in the market', 'Physical card terminals', 'A bank licence in every country', 'Developer experience: simple API and great docs'], answer: 3, explain: 'Developers adopted it because it was easy, then it grew with their companies.' }
      ],
      challenge: {
        title: 'Digitally transform a logistics firm',
        prompt: `A mid-size trucking company (200 trucks, $80M revenue, 4% net margin) takes orders by phone and email, tracks deliveries with calls to drivers, and invoices on paper. Large shippers are asking for real-time tracking via API. Propose a 12-month transformation roadmap and a business case.`,
        hints: ['Separate digitisation, digitalisation and new business model.', 'What value does an API create for shippers?', 'Put rough numbers on savings or revenue.'],
        model: `<p><b>Phase 1 (0–3 months) — digitise:</b> GPS telematics in all trucks, a driver mobile app for proof of delivery, e-invoicing.</p>
<p><b>Phase 2 (3–8 months) — digitalise:</b> online booking portal, automatic invoicing on delivery (cuts days sales outstanding), route optimisation.</p>
<p><b>Phase 3 (6–12 months) — transform:</b> publish a tracking & booking API for large shippers so their systems book loads and track automatically; offer premium “guaranteed window” delivery.</p>
<p><b>Business case (illustrative):</b> 2% fuel/route savings on ~$30M fuel & driver costs ≈ $600k/year; invoicing 10 days faster frees working capital on $80M revenue ≈ $2.2M one-off cash; retaining or winning one large shipper worth $5M revenue at 4% margin ≈ $200k profit. Cost: maybe $1–1.5M year one using SaaS telematics and TMS tools.</p>
<p><b>Governance:</b> a business owner (COO), monthly metrics: on-time %, invoice cycle time, API-connected shippers.</p>`
      },
      takeaways: [
        'APIs let you build faster, partner at scale and sell capabilities.',
        'Platforms create value through ecosystems; pipelines create it in-house.',
        'Real transformation changes the business model, not just the paperwork.',
        'Architecture decisions (like Amazon’s API mandate) can become strategy.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-3',
      title: 'Data-driven decisions: metrics trees, North Star & A/B tests',
      level: 'Intermediate',
      minutes: 15,
      hook: 'Opinions are free; a well-designed experiment can be worth millions — and protect you from your own confident mistakes.',
      eli5: `If your lemonade sales drop, is it the price, the weather or the new sign? A metrics tree is like breaking “sales” into its parts: people walking by × people who stop × people who buy × cups per person. An A/B test is trying the old sign on Monday mornings and the new sign on others at random, so you know which one really works.`,
      blocks: [
        { type: 'framework', name: 'Metrics tree', by: 'Common analytics practice (driver trees)', when: 'To find which lever really moves a top-level number and to assign ownership.',
          steps: [
            { label: 'Top metric', desc: 'Revenue, or your North Star metric.' },
            { label: 'Break it down', desc: 'Revenue = Customers × Orders per customer × Average order value.' },
            { label: 'Break again', desc: 'Customers = Visitors × Conversion rate + Returning customers.' },
            { label: 'Assign owners', desc: 'Marketing owns visitors, product owns conversion, CRM owns repeat orders.' },
            { label: 'Diagnose', desc: 'When the top number moves, walk down the tree to find which branch changed.' }
          ] },
        { type: 'formula', name: 'E-commerce revenue tree', expr: 'Revenue = Visitors × Conversion rate × Average order value',
          explain: 'Each factor is a lever. A small improvement in each multiplies.',
          example: '200,000 visitors × 2% × $50 = $200,000. Improving each by 10% → 220,000 × 2.2% × $55 = $266,200 — a 33% revenue gain.' },
        { type: 'text', title: 'North Star metric and dashboards', html: `<p>A <b>North Star metric</b> is the single number that best captures the value customers get and predicts long-term revenue — e.g. Airbnb’s nights booked, Spotify’s time spent listening. (See the Growth track for details.)</p><p>Good dashboards are <b>few, owned and actionable</b>: one page, 5–10 metrics, each with an owner, a target and a trend. Separate <b>leading indicators</b> (activation, pipeline) from <b>lagging</b> ones (revenue, churn). Beware <b>vanity metrics</b> (total sign-ups ever, page views) that only go up.</p>` },
        { type: 'framework', name: 'The modern analytics stack', by: 'Common 2020s data architecture', when: 'When you are asked to fund a “data platform”.',
          steps: [
            { label: 'Sources', desc: 'Product events, CRM (Salesforce, HubSpot), payments (Stripe), ads, support tools.' },
            { label: 'Ingestion', desc: 'Tools that copy data into one place automatically (e.g. Fivetran, Airbyte) plus event tracking (Segment, Amplitude SDKs).' },
            { label: 'Warehouse / lakehouse', desc: 'Central storage for analysis (Snowflake, BigQuery, Databricks, Redshift).' },
            { label: 'Transformation & definitions', desc: 'Cleaning and defining metrics once (e.g. dbt, a semantic layer) so “active user” means the same everywhere.' },
            { label: 'Consumption', desc: 'BI dashboards (Looker, Power BI, Tableau), product analytics, experiments, and increasingly AI assistants querying the data in plain English.' }
          ] },
        { type: 'interactive', widget: 'ab-test', title: 'Is the new version really better?', note: 'Try 5,000 visitors per variant with 4.0% vs 4.4% conversion — then 500 per variant with the same rates. Same lift, very different confidence.' },
        { type: 'case', company: 'Microsoft Bing', year: '2012', title: 'The idea nobody prioritised',
          situation: `An engineer proposed a small change to how ad headlines were displayed in Bing search results. It sat in the backlog for months because nobody thought it was important.`,
          decision: `An engineer finally ran it as a simple online A/B test.`,
          outcome: `As described by Ron Kohavi and Stefan Thomke (Harvard Business Review, 2017), the change raised revenue by about 12% — worth over $100M a year in the US alone at the time — becoming one of Bing’s best revenue ideas ever.`,
          lesson: `We are bad at predicting which ideas will work. A cheap experimentation system beats opinions — including the HiPPO (highest paid person’s opinion).` },
        { type: 'callout', kind: 'warning', title: 'Classic data traps', html: `<ul><li><b>Correlation ≠ causation:</b> users who use feature X retain better — maybe because engaged users find feature X.</li><li><b>Peeking:</b> stopping a test the moment it looks significant inflates false positives. Fix sample size in advance.</li><li><b>Goodhart’s law:</b> “When a measure becomes a target, it ceases to be a good measure.” Reward call-centre speed and calls get rushed.</li><li><b>Simpson’s paradox:</b> a trend can reverse when you split data into groups — always check segments.</li></ul>` },
        { type: 'checklist', title: 'Before you trust an A/B test', items: ['Hypothesis written down before launch', 'One primary metric chosen in advance', 'Sample size / duration calculated (cover full weekly cycles)', 'Random assignment checked (similar group sizes)', 'Guardrail metrics watched (revenue, latency, complaints)', 'Result replicated or effect size plausible'] }
      ],
      terms: [
        { term: 'Metrics tree', def: 'A diagram breaking a top metric into the drivers that multiply or add up to it.' },
        { term: 'North Star metric', def: 'The single metric that best captures customer value and predicts long-term success.' },
        { term: 'A/B test', def: 'A randomised experiment comparing a control version (A) against a variant (B).' },
        { term: 'Statistical significance', def: 'How unlikely the observed difference would be if there were truly no difference; often judged at 95% confidence.' },
        { term: 'Vanity metric', def: 'A number that looks good but does not guide decisions, like cumulative sign-ups.' },
        { term: 'Data warehouse', def: 'A central database designed for analysing data from many sources.' },
        { term: 'Goodhart’s law', def: 'When a measure becomes a target, people optimise the measure instead of the goal.' }
      ],
      quiz: [
        { q: '100,000 visitors × 3% conversion × $40 average order. Revenue?', options: ['$12,000', '$120,000', '$1,200,000', '$40,000'], answer: 1, explain: '100,000 × 0.03 = 3,000 orders × $40 = $120,000.' },
        { q: 'Which is a vanity metric?', options: ['Weekly active users', 'Week-4 retention', 'Net revenue retention', 'Cumulative total downloads since launch'], answer: 3, explain: 'Cumulative counts only go up and hide whether things are getting better.' },
        { q: 'You stop an A/B test on day 2 because B is “winning”. The main risk is…', options: ['Peeking — a false positive', 'Simpson’s paradox', 'Too large a sample', 'Goodhart’s law'], answer: 0, explain: 'Early stopping on noise inflates false positives; set duration in advance.' },
        { q: 'In the analytics stack, where should “active user” be defined once for everyone?', options: ['In each dashboard separately', 'In the ads platform', 'In the CRM', 'In the transformation / semantic layer'], answer: 3, explain: 'Central definitions avoid three teams reporting three different numbers.' },
        { q: 'The Bing headline experiment teaches that…', options: ['Only big redesigns matter', 'Senior people predict winners best', 'Small, unloved ideas can have huge impact — so test cheaply', 'A/B tests are too slow for search engines'], answer: 2, explain: 'Humans are poor at predicting which ideas work; experimentation reveals it.' }
      ],
      challenge: {
        title: 'Why did revenue drop 15%?',
        prompt: `An online furniture store’s monthly revenue fell from $1.0M to $850k. Data: visitors 400k → 420k; conversion 1.25% → 1.0%; average order $200 → $202. Mobile share of traffic rose from 55% to 70%. Diagnose with a metrics tree and propose next steps, including one A/B test.`,
        hints: ['Check each branch: which changed most?', 'Segment conversion by device.', 'Design a test with a clear metric.'],
        model: `<p><b>Tree:</b> Revenue = Visitors × Conversion × AOV. Before: 400k × 1.25% × $200 = $1.0M. After: 420k × 1.0% × $202 ≈ $848k.</p>
<p><b>Diagnosis:</b> traffic (+5%) and AOV (+1%) are fine; <b>conversion fell 20%</b>. Mobile share jumped — mobile usually converts lower, so the mix shift alone explains part of it; check whether mobile conversion itself also fell (e.g. a broken checkout after a recent release, slow page loads).</p>
<p><b>Next steps:</b> 1) split conversion by device and by funnel step (product → cart → checkout → payment); 2) check releases and page-speed logs; 3) check where the new mobile traffic comes from (a new low-intent ad campaign?).</p>
<p><b>A/B test:</b> if mobile checkout drop-off is the issue, test a one-page mobile checkout with Apple/Google Pay vs current. Primary metric: mobile order conversion; guardrails: AOV, refund rate. Run at least two full weeks with a pre-calculated sample size.</p>`
      },
      takeaways: [
        'Break big numbers into metrics trees to find the real lever.',
        'Use a few owned, actionable metrics — avoid vanity metrics.',
        'A/B tests beat opinions; decide sample size and metric before you start.',
        'Define metrics once in a shared layer so everyone uses the same truth.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-4',
      title: 'Product management: discovery, roadmaps & RICE',
      level: 'Intermediate',
      minutes: 14,
      hook: 'Most features shipped by software teams are rarely used — product management exists to build the right thing before building the thing right.',
      eli5: `Imagine your friends ask for a bigger treehouse. A good builder first asks why: is it too small, too hot, or too far from snacks? Maybe what they need is a window and a snack basket on a rope. Product managers find the real problem first, test cheap ideas, and only then build.`,
      blocks: [
        { type: 'text', title: 'What a product manager does', html: `<p>A <b>product manager (PM)</b> is responsible for <b>what</b> gets built and <b>why</b> — engineering and design own <b>how</b>. Marty Cagan (Silicon Valley Product Group) frames the job as tackling four risks before building:</p><ul><li><b>Value</b> — will customers buy or use it?</li><li><b>Usability</b> — can they figure out how to use it?</li><li><b>Feasibility</b> — can we build it with our time, skills and tech?</li><li><b>Viability</b> — does it work for the business (legal, sales, finance, brand)?</li></ul>` },
        { type: 'framework', name: 'Continuous discovery', by: 'Teresa Torres (Opportunity Solution Tree), Marty Cagan', when: 'Every week — not as a one-off research phase.',
          steps: [
            { label: 'Outcome', desc: 'Start from a measurable outcome (e.g. increase week-1 activation), not a feature request.' },
            { label: 'Opportunities', desc: 'Interview customers weekly to find unmet needs, pains and desires. Map them under the outcome.' },
            { label: 'Solutions', desc: 'Generate several solutions per opportunity — never just one.' },
            { label: 'Assumption tests', desc: 'Test the riskiest assumption cheaply: prototypes, fake-door tests, concierge versions.' },
            { label: 'Build & measure', desc: 'Ship the smallest version, measure against the outcome, iterate.' }
          ] },
        { type: 'formula', name: 'RICE prioritisation', expr: 'RICE score = (Reach × Impact × Confidence) ÷ Effort',
          explain: 'Reach = people affected per period; Impact = 0.25 (minimal) to 3 (massive); Confidence = 50–100%; Effort = person-months. Created at Intercom.',
          example: 'Feature A: reach 2,000 users/quarter, impact 2, confidence 80%, effort 4 → 2,000 × 2 × 0.8 ÷ 4 = 800. Feature B: reach 500, impact 3, confidence 50%, effort 1 → 750. Close call — A slightly ahead, but B is cheaper to test first.' },
        { type: 'compare', title: 'Roadmap formats', headers: ['', 'Feature/date roadmap', 'Outcome (Now/Next/Later) roadmap'],
          rows: [
            ['Shows', 'Features with delivery dates', 'Problems and goals by time horizon'],
            ['Good for', 'Fixed commitments (regulatory, contracts)', 'Uncertain, discovery-heavy work'],
            ['Risk', 'False certainty; teams ship features nobody uses', 'Stakeholders may feel it is vague'],
            ['Sales team reaction', 'Love it (until dates slip)', 'Needs coaching and examples']
          ] },
        { type: 'case', company: 'Slack', year: '2013–2014', title: 'Discovery before launch',
          situation: `Slack began as an internal chat tool at Tiny Speck, a games company whose game (Glitch) failed.`,
          decision: `Rather than a big launch, the team convinced friendly companies to try it, watched how they used it, and kept improving based on feedback before a public preview in 2013 and launch in 2014. Stewart Butterfield’s memo “We Don’t Sell Saddles Here” urged the team to sell the outcome (less email, better teamwork) not the features.`,
          outcome: `Slack grew very fast through word of mouth inside companies and was acquired by Salesforce in 2021.`,
          lesson: `Watch real users, solve the underlying job, and describe value in the customer’s words.` },
        { type: 'interactive', widget: 'decision-matrix', title: 'Prioritise your backlog', note: 'Use criteria like Reach, Impact, Confidence and (inverse) Effort with weights. Compare 3–4 backlog items and see if the ranking matches your gut.' },
        { type: 'scenario', prompt: 'Your largest customer (15% of revenue) demands a custom feature that no other customer has asked for. What do you do?',
          options: [
            { text: 'Build exactly what they asked for, immediately', feedback: 'Risky: you may become a custom dev shop and slow the core roadmap.', good: false },
            { text: 'Dig into the underlying problem; check if other customers share it; offer a general solution or a configurable option, with clear timing', feedback: 'Good — discovery reveals the real need, and a general solution serves many customers.', good: true },
            { text: 'Refuse — the roadmap is fixed', feedback: 'Ignores a real business risk (15% of revenue) and a possible signal.', good: false }
          ] },
        { type: 'flip', title: 'Quick check', cards: [
          { front: 'Cagan’s four product risks?', back: 'Value, usability, feasibility, viability.' },
          { front: 'What is a fake-door test?', back: 'Showing a button or offer for a feature that does not exist yet to measure interest.' },
          { front: 'RICE: what does C stand for?', back: 'Confidence — how sure you are about your reach and impact estimates.' },
          { front: 'Now/Next/Later shows…', back: 'Problems and goals by time horizon rather than fixed feature dates.' }
        ] }
      ],
      terms: [
        { term: 'Product manager', def: 'The person accountable for deciding what to build and why, to achieve customer and business outcomes.' },
        { term: 'Product discovery', def: 'The work of figuring out what to build by learning about customers and testing ideas cheaply.' },
        { term: 'MVP', def: 'Minimum viable product — the smallest thing you can build to learn whether an idea works.' },
        { term: 'RICE', def: 'A prioritisation score: Reach × Impact × Confidence ÷ Effort.' },
        { term: 'Roadmap', def: 'A plan showing the problems, goals or features a team will work on over time.' },
        { term: 'Fake-door test', def: 'Advertising a not-yet-built feature to measure demand before building.' },
        { term: 'Backlog', def: 'The prioritised list of work items a product team might do.' }
      ],
      quiz: [
        { q: 'A feature reaches 1,000 users, impact 1, confidence 100%, effort 2. RICE score?', options: ['2,000', '500', '1,000', '250'], answer: 1, explain: '1,000 × 1 × 1.0 ÷ 2 = 500.' },
        { q: 'Which risk asks “can customers figure out how to use it?”', options: ['Value', 'Viability', 'Feasibility', 'Usability'], answer: 3, explain: 'Usability risk is about whether users can work it.' },
        { q: 'Continuous discovery should start from…', options: ['A desired outcome', 'The CEO’s favourite feature', 'A competitor’s feature list', 'The engineering estimate'], answer: 0, explain: 'Opportunities and solutions are mapped under a measurable outcome.' },
        { q: 'When is a dated feature roadmap most appropriate?', options: ['Early-stage discovery', 'Fixed commitments like regulatory deadlines', 'Exploring a new market', 'Never'], answer: 1, explain: 'Hard external deadlines justify date commitments.' },
        { q: 'Butterfield’s “We Don’t Sell Saddles Here” argued Slack should sell…', options: ['Lower prices', 'More features', 'The outcome — better teamwork and less email', 'Enterprise contracts only'], answer: 2, explain: 'Sell horse-riding, not saddles: the transformation, not the tool.' }
      ],
      challenge: {
        title: 'Prioritise a quarter',
        prompt: `You are PM for a B2B invoicing app (8 engineers ≈ 24 person-months per quarter). Candidates: (A) bank-feed integration — reach 3,000 accounts, impact 2, confidence 80%, effort 8; (B) mobile app — reach 1,500, impact 1, confidence 50%, effort 12; (C) automatic payment reminders — reach 4,000, impact 1, confidence 90%, effort 3; (D) AI invoice data extraction — reach 2,500, impact 3, confidence 50%, effort 6. Score with RICE, choose, and say what discovery you would do first.`,
        hints: ['Compute each score.', 'Check total effort against capacity.', 'Low confidence = run a cheap test first.'],
        model: `<p><b>Scores:</b> A = 3,000 × 2 × 0.8 ÷ 8 = <b>600</b>; B = 1,500 × 1 × 0.5 ÷ 12 = <b>62.5</b>; C = 4,000 × 1 × 0.9 ÷ 3 = <b>1,200</b>; D = 2,500 × 3 × 0.5 ÷ 6 = <b>625</b>.</p>
<p><b>Plan (24 pm):</b> C (3) + A (8) + D (6) = 17 pm, leaving ~7 pm buffer for bugs and tech debt. Drop B for now.</p>
<p><b>Discovery first on D</b> (confidence only 50%): run a two-week prototype with 20 customers using an off-the-shelf AI document-extraction API; measure accuracy and time saved. If accuracy is high and customers value it, confidence rises and D may become the top item next quarter.</p>
<p><b>Outcome to track:</b> days-to-get-paid for customers and weekly active accounts.</p>`
      },
      takeaways: [
        'PMs own what and why; reduce value, usability, feasibility and viability risks.',
        'Discover continuously: outcome → opportunities → solutions → cheap tests.',
        'Use RICE to make trade-offs visible, then apply judgement.',
        'Prefer outcome roadmaps unless dates are truly fixed.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-5',
      title: 'AI for business leaders: LLMs, generative AI & agents',
      level: 'Advanced',
      minutes: 17,
      hook: 'In two years AI went from a chat window to agents that can do multi-step work — leaders who understand what it can and cannot do will capture the value.',
      eli5: `Imagine a parrot that has read every book in the library. It is brilliant at guessing the next word, so it can write, summarise and explain almost anything — but sometimes it confidently makes things up. Give the parrot a calculator, a phone and a to-do list, and it becomes an assistant that can actually do tasks. That is an AI agent.`,
      blocks: [
        { type: 'framework', name: 'How a large language model (LLM) works — in plain English', by: 'Transformer architecture: Vaswani et al., “Attention Is All You Need”, 2017', when: 'To understand strengths, weaknesses and costs.',
          steps: [
            { label: 'Pre-training', desc: 'The model reads a huge amount of text and learns to predict the next “token” (piece of a word). Doing this at scale produces broad knowledge and reasoning-like abilities.' },
            { label: 'Post-training', desc: 'Human feedback and further training teach it to follow instructions, be helpful and refuse harmful requests.' },
            { label: 'Prompt & context', desc: 'At use time you give instructions and context (documents, data). The context window limits how much it can consider at once.' },
            { label: 'Retrieval (RAG)', desc: 'Retrieval-augmented generation: search your own documents and feed the relevant parts into the prompt so answers use your facts.' },
            { label: 'Tools & agents', desc: 'The model can call tools (search, databases, APIs, code) and loop: plan → act → check → repeat. That makes it an agent.' }
          ] },
        { type: 'timeline', title: 'A short history of the AI wave', items: [
          { label: '2017', desc: 'Google researchers publish the Transformer architecture.' },
          { label: '2020', desc: 'OpenAI’s GPT-3 shows that scale produces surprisingly general abilities.' },
          { label: 'Nov 2022', desc: 'ChatGPT launches and becomes one of the fastest-adopted consumer products ever.' },
          { label: '2023', desc: 'GPT-4, Claude, Llama, Gemini; enterprises launch pilots everywhere.' },
          { label: '2024', desc: 'Multimodal models (text, image, voice); “reasoning” models that think step by step; costs per token fall sharply.' },
          { label: '2025–2026', desc: 'AI agents and coding agents move into production; focus shifts from pilots to measurable ROI, governance and agentic workflows.' }
        ] },
        { type: 'compare', title: 'Three kinds of AI a leader will meet', headers: ['', 'Traditional ML', 'Generative AI (LLMs)', 'AI agents'],
          rows: [
            ['Does', 'Predicts or classifies from structured data', 'Creates text, images, code; answers questions', 'Plans and executes multi-step tasks using tools'],
            ['Example', 'Fraud scoring, demand forecasting, churn prediction', 'Drafting emails, summarising contracts, chat support', 'Resolving a support ticket end-to-end, fixing code, processing an invoice'],
            ['Data needed', 'Your own labelled historical data', 'Works out of the box; better with your context (RAG)', 'Model + tools + permissions + clear goals'],
            ['Main risk', 'Bias, drift', 'Hallucination, data leakage', 'Wrong actions at scale, security, accountability']
          ] },
        { type: 'matrix', name: 'AI use-case prioritisation', xLabel: 'Feasibility (data, risk, complexity) →', yLabel: 'Business value →',
          cells: [
            { label: 'Strategic bets', desc: 'High value, hard. E.g. an agent that handles full insurance claims. Plan carefully, pilot in stages.' },
            { label: 'Quick wins — do first', desc: 'High value, easy. E.g. drafting support replies, summarising sales calls, internal knowledge search.' },
            { label: 'Avoid', desc: 'Low value, hard. Impressive demos with no business case.' },
            { label: 'Nice to have', desc: 'Low value, easy. Let teams experiment with off-the-shelf tools.' }
          ] },
        { type: 'formula', name: 'Simple AI ROI', expr: 'Annual ROI = (Hours saved × Loaded hourly cost + Revenue uplift − Error costs − Run costs) ÷ Total investment',
          explain: 'Count only hours that are actually redeployed or avoided. Run costs include licences, model usage (tokens), integration and human review time.',
          example: '50 support agents save 1 hour/day each × 220 days × $35/hour = $385,000. Run costs $120,000/year; build $150,000. Year-1 net = 385 − 120 − 150 = $115,000 → ROI ≈ 43% on $270k spent; year 2 far higher.' },
        { type: 'compare', title: 'Build, buy or partner?', headers: ['', 'Buy (SaaS AI tool)', 'Build on a model API', 'Train / fine-tune your own'],
          rows: [
            ['Speed', 'Days–weeks', 'Weeks–months', 'Months+'],
            ['Differentiation', 'Low — competitors can buy it too', 'Medium–high — your data and workflow', 'High, but rarely needed'],
            ['Cost & skills', 'Licence fees; little tech skill', 'Engineers + usage costs', 'Scarce ML talent, compute, data'],
            ['Choose when', 'Generic use (meeting notes, writing help)', 'Core workflow using your data', 'Unique data at huge scale, strict control']
          ] },
        { type: 'case', company: 'Klarna', year: '2024–2025', title: 'The AI customer-service bet',
          situation: `Swedish fintech Klarna moved aggressively to use AI across the company, including customer service.`,
          decision: `In early 2024 Klarna announced its OpenAI-powered assistant was handling around two-thirds of customer service chats, saying it did the work of roughly 700 full-time agents, with faster resolution times.`,
          outcome: `In 2025 CEO Sebastian Siemiatkowski said the focus on cost had hurt quality in some cases, and Klarna began making it easier for customers to reach a human again, re-hiring some human agents in a flexible model.`,
          lesson: `AI can take on large volumes of routine work, but design for quality and escalation to humans — measure customer satisfaction, not just cost per contact.` },
        { type: 'callout', kind: 'tip', title: 'Agentic workflows: how to start', html: `<ol><li>Pick a <b>repetitive, rules-heavy, digital</b> process with clear success criteria (e.g. invoice matching, lead research, first-line IT tickets).</li><li>Map it step by step; mark where judgement or approvals are needed.</li><li>Start with <b>human-in-the-loop</b>: the agent drafts or proposes, a person approves.</li><li>Give the agent the <b>least privilege</b> it needs (read-only first).</li><li>Log every action; measure accuracy, time saved and escalations; widen autonomy as trust is earned.</li></ol>` }
      ],
      terms: [
        { term: 'LLM', def: 'Large language model — an AI model trained on vast text to predict the next token, enabling it to write, summarise and reason.' },
        { term: 'Generative AI', def: 'AI that creates new content — text, images, audio, code — rather than only classifying or predicting.' },
        { term: 'Hallucination', def: 'When an AI model produces confident but false or made-up information.' },
        { term: 'RAG', def: 'Retrieval-augmented generation: feeding relevant documents from your own sources into the prompt so answers are grounded.' },
        { term: 'AI agent', def: 'An AI system that can plan and take multi-step actions using tools to reach a goal.' },
        { term: 'Token', def: 'A small chunk of text that models read and write; usage is usually priced per token.' },
        { term: 'Human-in-the-loop', def: 'A design where a person reviews or approves AI outputs before they take effect.' },
        { term: 'Fine-tuning', def: 'Further training a pre-trained model on specific data to adapt its behaviour.' }
      ],
      quiz: [
        { q: 'At its core, an LLM is trained to…', options: ['Search the internet', 'Predict the next token', 'Store a database of facts', 'Execute code'], answer: 1, explain: 'Next-token prediction at huge scale produces its abilities.' },
        { q: 'You want a chatbot to answer from your company’s HR policies. The usual first approach is…', options: ['Train a model from scratch', 'Traditional ML classification', 'RAG over your policy documents', 'Hire more HR staff'], answer: 2, explain: 'RAG grounds answers in your documents cheaply and quickly.' },
        { q: '20 analysts save 30 min/day × 220 days at $50/hour. Annual value?', options: ['$110,000', '$220,000', '$55,000', '$440,000'], answer: 0, explain: '20 × 0.5 h × 220 × $50 = $110,000.' },
        { q: 'High-value, high-feasibility AI use cases should be…', options: ['Avoided', 'Left to teams to play with', 'Treated as long-term strategic bets only', 'Done first as quick wins'], answer: 3, explain: 'They deliver value fast and build credibility.' },
        { q: 'The main lesson from Klarna’s AI customer service story is…', options: ['AI cannot handle customer service', 'Optimise for quality and human escalation, not cost alone', 'Always build your own model', 'Agents should have unlimited permissions'], answer: 1, explain: 'Klarna re-emphasised human access after quality concerns.' }
      ],
      challenge: {
        title: 'Build the AI plan for an insurer',
        prompt: `You are COO of a mid-size insurer: 400 claims handlers (loaded cost $60k/year each), 2,000 claims per day, 30% of handler time spent reading documents and writing letters. The board wants an AI plan with ROI in 12 months. Prioritise use cases, choose build/buy, estimate value and name the main risks.`,
        hints: ['List 4–5 use cases and place them on value × feasibility.', 'Be conservative: not all saved time becomes savings.', 'Claims affect customers — think fairness and regulation.'],
        model: `<p><b>Use cases:</b> (1) summarise claim documents for handlers — high value, high feasibility → quick win; (2) draft customer letters — quick win; (3) triage/routing of new claims — medium; (4) fraud flagging (traditional ML, existing data) — strategic; (5) fully autonomous claims decisions — high risk, defer.</p>
<p><b>Value:</b> 30% of time on documents/letters = 120 FTE-equivalents ($7.2M). If AI cuts that work by a third → 40 FTE ≈ <b>$2.4M/year</b>. Assume only half is realised in year 1 (adoption curve) → $1.2M.</p>
<p><b>Build/buy:</b> buy an enterprise LLM platform; build the claims-specific workflow on a model API with RAG over policy wordings; keep humans approving every decision.</p>
<p><b>Costs (illustrative):</b> platform + usage $400k/year, integration $500k → year-1 net ≈ $300k; year 2 ≈ $2M as adoption grows and build costs end.</p>
<p><b>Risks:</b> hallucinated facts in letters (mitigate with citations and review), privacy of medical data, bias in triage, regulatory scrutiny (insurance pricing/claims AI may be high-risk under the EU AI Act in some cases), staff fear — reinvest capacity into faster service and train handlers.</p>`
      },
      takeaways: [
        'LLMs predict text; with RAG and tools they become useful, grounded assistants and agents.',
        'Prioritise AI use cases by value × feasibility; start with quick wins.',
        'Buy for generic needs, build on model APIs for your core workflows.',
        'Measure ROI honestly and keep humans in the loop where quality and trust matter.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'technology-6',
      title: 'AI governance, cybersecurity & tech due diligence',
      level: 'Advanced',
      minutes: 16,
      hook: 'One stolen password took down the largest fuel pipeline on the US East Coast — tech risk is now board-level business risk.',
      eli5: `Owning a shop means locking the door, knowing who has keys and having insurance. Owning a digital business means the same, but the doors are passwords, the keys are logins and the thieves are anywhere in the world. And if you hire a robot helper (AI), you need rules for what it may and may not do.`,
      blocks: [
        { type: 'framework', name: 'EU AI Act — risk-based tiers', by: 'European Union, in force August 2024, obligations phased in 2025–2027', when: 'Any company that builds or uses AI affecting people in the EU.',
          steps: [
            { label: 'Unacceptable risk — banned', desc: 'E.g. social scoring, manipulative AI exploiting vulnerabilities, emotion recognition at work or school. Prohibitions apply from February 2025.' },
            { label: 'High risk — strict rules', desc: 'AI in hiring, credit scoring, education, critical infrastructure, some medical and law-enforcement uses. Requires risk management, data quality, documentation, human oversight, accuracy and registration. Main obligations phase in from 2026–2027 (timelines have faced proposed adjustments, so check the latest).' },
            { label: 'Limited risk — transparency', desc: 'Chatbots must disclose they are AI; AI-generated content (deepfakes) must be labelled.' },
            { label: 'Minimal risk', desc: 'Spam filters, game AI — no new obligations.' },
            { label: 'General-purpose AI models', desc: 'Model providers face transparency and copyright obligations (from August 2025), with extra duties for the most powerful models.' }
          ] },
        { type: 'framework', name: 'NIST AI Risk Management Framework', by: 'US National Institute of Standards and Technology, 2023', when: 'To structure an internal AI governance programme (voluntary, widely used).',
          steps: [
            { label: 'Govern', desc: 'Policies, roles and accountability: who approves AI use cases, an AI inventory, acceptable-use rules.' },
            { label: 'Map', desc: 'Understand each use case’s context, users, impacts and who could be harmed.' },
            { label: 'Measure', desc: 'Test for accuracy, bias, robustness, security and privacy — before and after launch.' },
            { label: 'Manage', desc: 'Prioritise and act on risks: mitigations, monitoring, incident response, decommissioning.' }
          ] },
        { type: 'case', company: 'Air Canada', year: '2024', title: 'Liable for what the chatbot said',
          situation: `A customer asked Air Canada’s website chatbot about bereavement fares. The chatbot wrongly said he could apply for the discount after travelling.`,
          decision: `When refused the refund, the customer took the airline to British Columbia’s Civil Resolution Tribunal. Air Canada argued the chatbot was responsible for its own words.`,
          outcome: `In February 2024 the tribunal rejected that argument and ordered Air Canada to pay compensation: the company is responsible for all information on its website, including from a chatbot.`,
          lesson: `You own your AI’s outputs. Ground customer-facing AI in approved content, test it, and keep clear escalation paths.` },
        { type: 'case', company: 'Colonial Pipeline', year: '2021', title: 'Ransomware through one password',
          situation: `Colonial operates a major fuel pipeline supplying much of the US East Coast.`,
          decision: `Attackers (the DarkSide ransomware group) got in through a legacy VPN account protected only by a password — no multi-factor authentication. Colonial shut down pipeline operations as a precaution and paid a ransom of about $4.4M in bitcoin.`,
          outcome: `Fuel shortages and panic buying hit several states for days. The US Department of Justice later recovered part of the ransom. The incident pushed new US pipeline security directives.`,
          lesson: `Basic hygiene (MFA everywhere, removing unused accounts, segmenting IT from operations, tested backups) prevents most attacks. Cyber risk is operational and reputational risk.` },
        { type: 'checklist', title: 'Executive cybersecurity basics', items: ['Multi-factor authentication on every account, especially email, VPN and admin', 'Up-to-date asset inventory and patching of critical systems', 'Offline / immutable backups, restore-tested at least yearly', 'Least-privilege access; remove leavers’ accounts the same day', 'Phishing and social-engineering training (help desk identity checks too)', 'Incident response plan rehearsed with a tabletop exercise', 'Vendor security reviews for critical suppliers', 'Rules on what data staff may paste into AI tools'] },
        { type: 'compare', title: 'Tech due diligence: what to check', headers: ['Area', 'Key questions', 'Red flags'],
          rows: [
            ['Architecture & scalability', 'Can it handle 10× load? How modular is it?', 'Single fragile monolith, no one understands it'],
            ['Code & tech debt', 'Test coverage, release frequency, code quality', 'No automated tests, months between releases'],
            ['Team & key people', 'Who knows the critical systems? Retention?', 'One “hero” engineer, no documentation'],
            ['Security & compliance', 'Pen tests, SOC 2 / ISO 27001, incident history, GDPR', 'Past breach not disclosed; secrets in code'],
            ['IP & open source', 'Who owns the code? Open-source licence compliance?', 'Contractors without IP assignment; copyleft code in product'],
            ['AI & data', 'Data rights, model dependencies, AI Act exposure, inference costs', 'Training data scraped without rights; total dependence on one model vendor'],
            ['Costs', 'Cloud bill trends vs revenue', 'Cloud costs growing faster than revenue']
          ] },
        { type: 'scenario', prompt: 'Staff are pasting customer contracts into a free public AI chatbot to summarise them. What should the CEO do?',
          options: [
            { text: 'Ban all AI tools company-wide', feedback: 'Staff will use them anyway on personal devices (“shadow AI”), with even less visibility.', good: false },
            { text: 'Provide an approved enterprise AI tool with data protections, publish a short acceptable-use policy and train staff', feedback: 'Right. Meet the need safely: enterprise terms (no training on your data), access controls, and clear rules.', good: true },
            { text: 'Do nothing — productivity gains are worth it', feedback: 'Confidential data may be exposed and contracts or privacy laws breached.', good: false }
          ] },
        { type: 'flip', title: 'Quick check', cards: [
          { front: 'Is AI CV screening high-risk under the EU AI Act?', back: 'Yes — employment uses are listed as high-risk.' },
          { front: 'NIST AI RMF four functions?', back: 'Govern, Map, Measure, Manage.' },
          { front: 'Single most effective account protection?', back: 'Multi-factor authentication (MFA).' },
          { front: 'What is “shadow AI”?', back: 'Employees using unapproved AI tools outside IT’s visibility.' }
        ] }
      ],
      terms: [
        { term: 'EU AI Act', def: 'The EU’s risk-based law regulating AI systems and general-purpose AI models.' },
        { term: 'AI governance', def: 'The policies, roles and processes that decide how AI is approved, used, monitored and controlled.' },
        { term: 'MFA', def: 'Multi-factor authentication: requiring a second proof of identity beyond a password.' },
        { term: 'Ransomware', def: 'Malware that encrypts or steals data and demands payment to restore or not leak it.' },
        { term: 'SOC 2', def: 'A widely used US audit report on a service provider’s security and data controls.' },
        { term: 'Technical debt', def: 'The future cost of shortcuts taken in software today, which slow down later changes.' },
        { term: 'Tech due diligence', def: 'An investigation of a company’s technology, team, security and IP before an investment or acquisition.' },
        { term: 'Shadow AI', def: 'Use of AI tools by employees without approval or oversight.' }
      ],
      quiz: [
        { q: 'Under the EU AI Act, a workplace emotion-recognition system is…', options: ['Minimal risk', 'Limited risk', 'Prohibited', 'Unregulated'], answer: 2, explain: 'Emotion recognition in workplaces and schools is banned (with narrow exceptions like medical or safety use).' },
        { q: 'The Air Canada chatbot ruling established that…', options: ['Companies are responsible for information their chatbots give', 'Chatbots are separate legal entities', 'AI advice is never binding', 'Only human agents can create liability'], answer: 0, explain: 'The tribunal held the airline liable for its chatbot’s wrong answer.' },
        { q: 'How did attackers get into Colonial Pipeline?', options: ['A zero-day exploit in pipeline control software', 'A rogue insider', 'Physical break-in', 'A legacy VPN account with no MFA'], answer: 3, explain: 'A single compromised password on an account without MFA.' },
        { q: 'Which is the biggest tech due-diligence red flag?', options: ['Weekly releases with automated tests', 'SOC 2 report available', 'Contractors wrote core code without IP assignment', 'Documented architecture'], answer: 2, explain: 'The buyer may not own the core IP.' },
        { q: 'NIST AI RMF’s “Map” function is about…', options: ['Drawing network diagrams', 'Understanding context, users and potential impacts of each AI use', 'Buying AI tools', 'Training models'], answer: 1, explain: 'Map = understand the context and risks before measuring and managing.' }
      ],
      challenge: {
        title: 'Diligence an AI startup acquisition',
        prompt: `Your company plans to buy “ScreenAI”, a 25-person startup selling AI-powered candidate screening to European employers, for $40M. ARR $5M growing 80%. Their product calls a third-party LLM API; gross margin is 55%. Two engineers wrote 80% of the code. Prepare the top tech/AI due-diligence findings to investigate and how they affect the deal.`,
        hints: ['Hiring AI in Europe → which risk tier?', 'Margin and model dependency.', 'Key-person and IP risk.'],
        model: `<p><b>1. Regulatory (critical):</b> candidate screening is <b>high-risk</b> under the EU AI Act. Check readiness: risk management, data governance, bias testing by group, documentation, human oversight, logging. Gaps → remediation cost and timeline; consider a price holdback or specific indemnities.</p>
<p><b>2. Bias & liability:</b> request bias audit results (e.g. selection rates by gender/ethnicity where lawful), complaints, and customer contracts — who is liable for discriminatory outcomes?</p>
<p><b>3. Unit economics:</b> 55% gross margin is low for SaaS because of LLM usage. Model costs per screening, price trends, ability to switch models or use smaller ones → margin path to 70%+?</p>
<p><b>4. Vendor dependency:</b> single LLM provider — terms of use, data-processing agreements, what happens if prices or policies change.</p>
<p><b>5. Key-person & IP:</b> two engineers wrote 80% of code → retention packages (earn-outs, vesting), code documentation, IP assignment for all contributors, open-source licence scan.</p>
<p><b>6. Security & data:</b> candidate personal data under GDPR — DPIAs, data retention, breach history, SOC 2/ISO 27001.</p>
<p><b>Deal impact:</b> proceed only with a remediation plan, retention for key engineers, regulatory indemnities and possibly part of the price as earn-out tied to compliance and margin milestones.</p>`
      },
      takeaways: [
        'AI regulation is risk-based: know which tier each use case falls into.',
        'You are liable for what your AI tells customers — ground and test it.',
        'Most breaches exploit basics: MFA, patching, access control and backups.',
        'Tech due diligence covers code, people, security, IP, AI/data rights and cloud costs.'
      ]
    }
  ]
});
