/* MBA Studio — Track 36: Business Model Playbooks · Playbook 3 · B2C (Business-to-Consumer) */
MBA.addTrack({
  id: 'pb-b2c',
  stage: 5,
  order: 36,
  title: 'Playbook: B2C (Business-to-Consumer)',
  icon: '🛍️',
  color: '#16a34a',
  series: 'Business Model Playbooks',
  part: 'Playbook 3 · B2C',
  tagline: 'Sell to millions of individuals: stores, restaurants, apps, subscriptions and quick commerce',
  summary: `A practical playbook for any business whose customer is an individual person: retailers, restaurants and QSR chains, consumer apps and subscriptions, e-commerce retailers, consumer services and quick commerce. You will learn how money flows, how to size and study a consumer market, how to open the first store or launch the first app, how to price, how to read four-wall and per-order economics, how to build a brand people talk about, and how to scale through clusters, franchising and digital without breaking.`,
  outcomes: [
    'Explain how B2C differs from D2C and B2B, and map the money flow of a store, an app and a platform',
    'Size a consumer market bottom-up and judge a location with footfall and catchment maths',
    'Launch a first store or app with the right legal basics and win the first 100 regulars',
    'Price with freemium, tiers, memberships and menu architecture, and model blended ARPU',
    'Build four-wall EBITDA and per-order contribution, find break-even and spot cost traps',
    'Scale with clusters, franchising, dark stores and funding while avoiding the classic B2C failure patterns'
  ],
  lessons: [
    /* ================================================================== 1 */
    {
      id: 'pb-b2c-1',
      title: 'How B2C works: value chain, money flow and the metrics that matter',
      level: 'Beginner',
      minutes: 15,
      hook: `A tea stall, a Spotify subscription and a 10-minute grocery app all sell to the same person — you — yet each one makes money in a completely different way.`,
      eli5: `Imagine a school canteen. Hundreds of students each spend a little money every day. No single student matters much, but if the canteen is in the right corridor, has the snacks kids love and keeps the queue short, those small coins add up to a lot. That is B2C: many small buyers, each one choosing freely, every day. The canteen does not need to bake the samosas itself — it can buy them from a supplier (a retailer), cook them (a restaurant), or let outside sellers set up tables and take a cut (a platform). Same students, different ways of earning.`,
      blocks: [
        {
          type: 'text', title: 'B2C, D2C and B2B: get the words right',
          html: `<p><b>B2C</b> means any business whose paying customer is an individual consumer. That includes a supermarket selling other companies' brands, a restaurant chain, a gym, a music app and a delivery platform.</p><p><b>D2C</b> is a narrower case: a <i>brand</i> selling <i>its own product</i> directly to consumers, skipping retailers (covered in the D2C playbook). Every D2C brand is B2C, but most B2C businesses are not D2C — Costco, Blinkit and Domino's franchisees sell to consumers without being the brand owner of most of what they sell.</p><p>In <a href="#/lesson/sales-1">Sales, lesson 1</a> you saw that B2C selling is short-cycle and emotional. This playbook goes deeper: how the whole business model is built around that fact.</p>`
        },
        {
          type: 'map', title: 'Five B2C archetypes', center: 'Business sells to a person',
          branches: [
            { label: 'Retailer', desc: 'Buys goods from brands and resells them with a margin; wins on range, location, price and convenience.', children: ['Supermarkets', 'E-commerce retailers', 'Private label'] },
            { label: 'Restaurant / QSR', desc: 'Transforms ingredients into meals; earns on food margin and speed, often through delivery apps too.', children: ['Dine-in', 'Takeaway', 'Delivery'] },
            { label: 'Consumer app / subscription', desc: 'Software or content sold by subscription, ads or in-app purchases; near-zero cost per extra user.', children: ['Freemium', 'Tiers', 'Ads'] },
            { label: 'Consumer service', desc: 'Time and expertise sold to individuals: fitness, education, travel, salons.', children: ['Memberships', 'Packages', 'Pay per visit'] },
            { label: 'Platform / quick commerce', desc: 'Connects consumers with sellers or restaurants and takes a fee, or holds its own inventory in dark stores.', children: ['Commission', 'Delivery fee', 'Ads'] }
          ]
        },
        {
          type: 'flow', title: 'Who pays whom: money flow in a delivery-led B2C order',
          steps: [
            { label: 'Consumer pays the order value', desc: 'Item prices plus delivery, handling or platform fees, minus any discount. Payment goes through a gateway that keeps a small fee.' },
            { label: 'Platform or retailer collects the cash', desc: 'If it owns the inventory it keeps the full price and pays suppliers later. If it is a marketplace it keeps a commission and owes the rest to the seller.' },
            { label: 'Is the business holding stock?', kind: 'decision', desc: 'This single choice changes revenue recognition, working capital and margin.', branches: [ { label: 'Yes (inventory / 1P)', to: 'Revenue = full order value; margin = price minus purchase cost' }, { label: 'No (marketplace / 3P)', to: 'Revenue = commission + fees; seller keeps the rest' } ] },
            { label: 'Costs flow out', desc: 'Delivery riders, store or dark-store rent and staff, packaging, refunds, marketing and technology.' },
            { label: 'Contribution left per order', desc: 'What remains after all variable costs. Multiply by orders per month and subtract fixed costs to get profit.' }
          ]
        },
        {
          type: 'compare', title: 'The scoreboard differs by archetype', headers: ['', 'Store / restaurant', 'Consumer app', 'Platform / quick commerce'],
          rows: [
            ['North-star metric', 'Same-store sales growth, sales per sq ft', 'Daily active users, paid subscribers', 'Orders, gross/net order value'],
            ['Engagement', 'Footfall, conversion, ticket size', 'DAU/MAU ratio, retention curves', 'Order frequency, monthly transacting users'],
            ['Money per customer', 'Average bill, visits per month', 'ARPU, ARPPU (per payer)', 'Average order value, take rate'],
            ['Profit unit', 'Four-wall EBITDA per store', 'Gross margin, LTV vs CAC', 'Contribution per order, EBITDA % of order value'],
            ['Biggest fixed cost', 'Rent and staff', 'Engineering and content', 'Dark stores, tech and fleet']
          ]
        },
        {
          type: 'case', company: 'Spotify', year: 'Q2 2025', title: 'Two consumer businesses inside one app',
          situation: `Spotify runs a free, ad-supported tier and a paid Premium tier. In Q2 2025 it had 696 million monthly active users, of whom 276 million were Premium subscribers and 433 million used the ad-supported tier.`,
          decision: `Keep both tiers: the free tier acts as a giant top of funnel and earns advertising; Premium earns a monthly fee (average revenue per Premium user was €4.57 a month in the quarter).`,
          outcome: `Premium generated about €3.74 billion of revenue in the quarter at a 33.1% gross margin; advertising generated €453 million at an 18.3% margin. Dividing ad revenue by ad users suggests roughly €0.35 per free user per month — over ten times less than a payer (our calculation from the reported figures).`,
          lesson: `In a consumer app, the payer and the free user are different economic animals. Track them separately: conversion from free to paid is often worth more than any ad optimisation.`
        },
        {
          type: 'case', company: 'Haldiram\'s', year: 'FY24–2025', title: 'A consumer brand that reaches people through many doors',
          situation: `Haldiram's sells around 500 types of snacks, sweets, ready-to-eat foods and drinks in India, competing with Bikaji, Bikanervala, PepsiCo and ITC. Its consumers mostly buy it from other businesses' shelves — kiranas, supermarkets and online retailers — so the brand reaches people through many doors.`,
          decision: `Rather than pick one channel, it has relied on wide availability across retail plus its own consumer-facing presence. In March 2025 Temasek agreed to buy close to 10% of Haldiram Snacks Food for about ₹8,000 crore, valuing it at about $10 billion — reported as India's largest private-equity consumer deal.`,
          outcome: `Registrar filings cited by the Economic Times show FY24 revenue of about ₹12,800 crore and EBITDA of about ₹2,580 crore, an EBITDA margin near 20%.`,
          lesson: `A B2C business is defined by who consumes, not by which channel it uses. Many big consumer brands are "B2C through B2B channels" — availability is the strategy.`
        },
        {
          type: 'interactive', widget: 'marketplace', title: 'Platform economics in one screen',
          note: 'Set GMV, take rate and incentives. Then raise discounts by a few points and watch how quickly net revenue disappears — the classic B2C platform trap.'
        },
        {
          type: 'matrix', name: 'When does B2C fit?', xLabel: 'Purchase frequency →', yLabel: 'Margin per purchase →',
          cells: [
            { label: 'High margin, rare purchase', desc: 'Furniture, jewellery, travel. Needs brand trust and big ticket conversion; showrooms and content work.' },
            { label: 'High margin, frequent', desc: 'Coffee, beauty, subscriptions. The sweet spot: loyalty, habit and memberships compound value.' },
            { label: 'Low margin, rare', desc: 'Hard B2C: costly to acquire each customer for little profit. Avoid or bundle into something frequent.' },
            { label: 'Low margin, frequent', desc: 'Groceries, quick commerce, QSR. Wins on volume, density and operational excellence; tiny errors kill profit.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you choose a B2C model',
          items: [
            { q: 'Will we own inventory or take a commission?', why: 'It decides your revenue line, working capital needs and how much control you have over price and quality.' },
            { q: 'How often will one person buy from us in a year?', why: 'Frequency drives lifetime value; low-frequency B2C must recover acquisition cost on the first sale.' },
            { q: 'What is our profit unit — the store, the order or the subscriber?', why: 'You can only manage what you can measure per unit; it also shapes how you raise money.' },
            { q: 'Which costs are fixed (rent, salaries, tech) and which scale with each sale?', why: 'High fixed costs reward density and scale but punish slow ramp-ups.' },
            { q: 'Why will a consumer choose us over the nearest substitute tomorrow?', why: 'Consumers switch at almost zero cost; without a clear reason you are buying every order with discounts.' },
            { q: 'Can we reach customers without paying a gatekeeper every time?', why: 'Aggregator commissions and app-store fees can quietly take a double-digit share of revenue.' }
          ]
        }
      ],
      terms: [
        { term: 'B2C', def: 'Any business whose paying customer is an individual consumer, whether it makes, resells or connects.' },
        { term: 'D2C', def: 'A brand selling its own products directly to consumers, without retail middlemen. A subset of B2C.' },
        { term: 'Marketplace (3P) vs inventory (1P)', def: 'In 3P the platform takes a commission on third-party sellers; in 1P it buys and resells stock itself.' },
        { term: 'ARPU / ARPPU', def: 'Average revenue per user (all users) and per paying user. A freemium app has a much higher ARPPU than ARPU.' },
        { term: 'DAU/MAU', def: 'Daily active users divided by monthly active users — a measure of how habitual a product is.' },
        { term: 'Four-wall EBITDA', def: 'Profit of a single store before head-office costs, depreciation and interest: sales minus that store\'s own costs.' }
      ],
      quiz: [
        { q: 'Which of these is B2C but NOT D2C?', options: ['A sneaker brand selling on its own website', 'A mattress maker with its own stores', 'A skincare brand selling via Instagram', 'A supermarket selling hundreds of other companies\' brands'], answer: 3, explain: 'A supermarket sells to consumers (B2C) but does not own most brands it sells, so it is not D2C.' },
        { q: 'A marketplace processes ₹100 crore of orders at an 18% take rate. What is its revenue from commissions?', options: ['₹18 crore', '₹100 crore', '₹82 crore', '₹1.8 crore'], answer: 0, explain: 'Marketplace revenue is the commission: 18% × ₹100 crore = ₹18 crore. The rest belongs to sellers.' },
        { q: 'An app has 2 million MAU and 500,000 DAU. What is DAU/MAU?', options: ['4%', '40%', '25%', '400%'], answer: 2, explain: '0.5 ÷ 2 = 25%: the average user opens it on about one day in four.' },
        { q: 'Which quadrant is most attractive for building loyalty and memberships?', options: ['Low margin, rare purchase', 'High margin, frequent purchase', 'High margin, rare purchase', 'Low margin, frequent purchase'], answer: 1, explain: 'Frequent purchases create habit and data; high margins fund rewards and service.' },
        { q: 'Spotify\'s Premium ARPU was about €4.57 a month while ad revenue worked out near €0.35 per free user. What does this imply?', options: ['Free users are worthless', 'Ads should be removed', 'Premium should be made free', 'Converting free users to paid is a powerful lever'], answer: 3, explain: 'Each conversion multiplies that user\'s monthly revenue many times, so free-to-paid conversion is a key lever.' }
      ],
      challenge: {
        title: 'Map the money of a neighbourhood bakery app',
        prompt: `<p>A bakery chain with 6 outlets wants to add delivery. Option A: list on a food aggregator (commission 25% of order value, aggregator handles delivery). Option B: own app with its own riders (rider cost ₹45 per order, app and marketing ₹1.5 lakh a month fixed). Average order ₹400, food cost 32% of price. Expected 3,000 delivery orders a month.</p><p>Draw the money flow for each option and compute monthly contribution after delivery costs. Which would you choose now, and when would you switch?</p>`,
        hints: ['Option A contribution per order = price − food cost − commission.', 'Option B: per-order contribution minus fixed monthly cost; find the order volume where A and B are equal.'],
        model: `<p><b>Option A (aggregator).</b> Per order: ₹400 − ₹128 food − ₹100 commission = <b>₹172</b>. Monthly: 3,000 × 172 = <b>₹5.16 lakh</b>.</p><p><b>Option B (own app).</b> Per order: ₹400 − ₹128 − ₹45 rider = ₹227. Monthly: 3,000 × 227 = ₹6.81 lakh − ₹1.5 lakh fixed = <b>₹5.31 lakh</b>.</p><p><b>Crossover.</b> B beats A when 227Q − 150,000 > 172Q → 55Q > 150,000 → Q > <b>about 2,727 orders a month</b>. At 3,000 orders B is only slightly ahead, and that assumes the bakery can generate its own demand, which aggregators provide for free.</p><p><b>Recommendation:</b> start on the aggregator to learn demand by area and time, push loyal customers to WhatsApp or app reorders, and move to own delivery only in the 1–2 outlets where orders reliably exceed ~3,500 a month. Keep both: the aggregator for discovery, the own channel for repeat orders.</p>`
      },
      takeaways: [
        'B2C is defined by the customer (a person), not by the channel; D2C is just one kind of B2C.',
        'Decide early whether you own inventory or take a commission — it changes revenue, cash and control.',
        'Pick one profit unit (store, order or subscriber) and measure everything against it.',
        'Frequency and margin together decide whether loyalty, memberships or pure efficiency should drive your strategy.'
      ],
      sources: [
        { title: 'Spotify Q2 2025 shareholder deck (Form 6-K, SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1639920/000114036125027654/ef20052398_ex99-1.htm' },
        { title: 'Economic Times — Haldiram Snacks announces Temasek as strategic investment partner (2025)', url: 'https://economictimes.indiatimes.com/industry/cons-products/fmcg/haldiram-snacks-announces-temasek-as-strategic-investment-partner/articleshow/119745952.cms' },
        { title: 'The Arc — Blinkit says margins have bottomed out, will start owning inventory (2025)', url: 'https://www.thearcweb.com/article/blinkit-says-margins-have-bottomed-out-will-start-owning-inventory-bPUUeW5spQ4eHgjH' },
        { title: 'Business Standard — Eternal Q1 FY26 results', url: 'https://www.business-standard.com/companies/news/zomatos-parent-eternal-net-profit-falls-90-yoy-125072101198_1.html' }
      ]
    },

    /* ================================================================== 2 */
    {
      id: 'pb-b2c-2',
      title: 'Market study: sizing, segments, footfall and demand signals',
      level: 'Beginner',
      minutes: 16,
      hook: `In B2C, the market is not "India" or "Gen Z" — it is the 40,000 people who live within ten minutes of your door, or the 2% of app installers who will ever pay.`,
      eli5: `If you want to open a juice stall, you do not count everyone in the country who drinks juice. You stand at the corner for a week with a notebook: how many people walk past at 8 a.m., how many stop at the tea shop, how many carry gym bags. Then you guess how many would buy your juice and how often. That counting — people, stops and repeat visits — is market study for B2C.`,
      blocks: [
        {
          type: 'text', title: 'Bottom-up beats top-down',
          html: `<p>You met TAM, SAM and SOM in <a href="#/lesson/validation-4">Validation, lesson 4</a>. In B2C the number that matters is built <b>bottom-up</b>: <span class="hl">reachable people × share who will try × purchase frequency × spend per purchase</span>. For a store, "reachable" means a catchment area; for an app, it means installs you can afford to buy or earn.</p>`
        },
        {
          type: 'formula', name: 'Bottom-up B2C demand', expr: 'Annual revenue = Reachable people × Trial rate × Repeat buyers % × Purchases per year × Average ticket',
          explain: 'Reachable people: households in the catchment or installs per year. Trial rate: share who buy once. Repeat buyers: share who come back. Frequency and ticket come from observation or competitor data.',
          example: 'Illustrative café: 30,000 office workers in a tech park × 20% try × 40% become regulars × 150 visits a year × ₹120 = ₹4.3 crore a year from regulars (30,000 × 0.2 × 0.4 = 2,400 regulars; 2,400 × 150 × 120 = ₹4.32 crore).'
        },
        {
          type: 'pyramid', invert: true, title: 'The catchment funnel for a physical store',
          levels: [
            { label: 'Population in catchment', note: '10–15 min travel', desc: 'Map households or office workers by drive, walk or delivery time, not by straight-line distance.' },
            { label: 'Target segment', note: 'Fit your offer', desc: 'Filter by income, age, life stage and habits that match the offer (e.g. office workers for a tea kiosk).' },
            { label: 'Passing footfall', note: 'Who actually walks by', desc: 'Count at the site at different hours and days. Peak hours matter more than daily totals.' },
            { label: 'Walk-ins', note: 'Capture rate', desc: 'Share of passers-by who enter. Visibility, frontage and parking change this hugely.' },
            { label: 'Buyers and regulars', note: 'Conversion and repeat', desc: 'Share of walk-ins who buy, and who come back within 30 days. Regulars pay the rent.' }
          ]
        },
        {
          type: 'map', title: 'Ways to segment consumers', center: 'Consumer segments',
          branches: [
            { label: 'Geographic', desc: 'City tier, neighbourhood, delivery zone. Essential for stores and quick commerce.', children: ['Pin code', 'City tier'] },
            { label: 'Demographic', desc: 'Age, income, gender, household size. Useful first cut but rarely enough on its own.', children: ['Income band', 'Life stage'] },
            { label: 'Behavioural', desc: 'Usage frequency, occasion, channel, first-time vs experienced buyer. Usually the most predictive.', children: ['Heavy users', 'Occasion'] },
            { label: 'Needs / jobs', desc: 'What job the purchase does: quick refuel, treat, social outing, self-improvement.', children: ['Functional', 'Emotional'] },
            { label: 'Value', desc: 'Profitability tiers — the top 20% of customers often drive most profit.', children: ['High-LTV', 'Deal seekers'] }
          ]
        },
        {
          type: 'case', company: 'Cult.fit', year: 'FY24–FY26', title: 'Segment data that reshapes the plan',
          situation: `Cult.fit runs fitness centres, digital fitness and a sports-products business in India. Its 2026 draft IPO prospectus (DRHP) says it held an estimated 4–6% share of a fragmented fitness-services market and had more than four times as many centres as the next player.`,
          decision: `The company disclosed who its customers actually are: nearly 46% of paid users were first-time gym users when they joined, and about one-third of paid members were women. It also warned that Tier II cities may mean longer acquisition cycles, more price sensitivity and slower payback.`,
          outcome: `Revenue from operations rose from ₹926.7 crore in FY24 to ₹1,720.6 crore in FY26, while net loss narrowed from ₹888.5 crore to ₹251.9 crore.`,
          lesson: `Behavioural segments ("first-time gym user") are more useful than demographics. They tell you what to sell (onboarding, beginner classes) and where expansion will be slower.`
        },
        {
          type: 'case', company: 'Domino\'s India (Jubilant FoodWorks)', year: '2021–2022', title: 'Store density as a market-study output',
          situation: `Jubilant FoodWorks, master franchisee of Domino's in India, had pioneered 30-minute delivery in India and built its brand on it.`,
          decision: `In December 2022 it launched 20-minute delivery across 20 zones in 14 cities, combining analytics on demand by pin code, in-store process changes and more stores within each vicinity.`,
          outcome: `The promise was rolled out zone by zone rather than nationally. Domino's global CEO called India its largest market outside the US.`,
          lesson: `For delivery-led B2C, "market study" is a map: where orders come from, how far riders travel and where an extra store shortens the trip.`
        },
        {
          type: 'interactive', widget: 'funnel', title: 'Build a catchment or install funnel',
          note: 'Enter footfall (or installs) and each stage conversion. Then raise only the repeat stage by 10 points and compare it with doubling traffic.'
        },
        {
          type: 'framework', name: 'Five demand signals to check before you commit', when: 'Before signing a lease or spending on an app launch',
          steps: [
            { label: 'Search and social interest', desc: 'Local searches for the category, Instagram tags and reviews of nearby competitors show unmet demand and complaints.' },
            { label: 'Competitor queues and ratings', desc: 'Visit rivals at peak hours. Long queues and 3.8-star ratings mean demand is there but service is weak.' },
            { label: 'Aggregator data', desc: 'Delivery-app listings reveal price points, best-sellers and delivery times by area.' },
            { label: 'Pre-sales and waitlists', desc: 'A pop-up, a cloud-kitchen test or a waitlist page measures real intent cheaply.' },
            { label: 'Substitutes', desc: 'Map what customers do today instead: home cooking, street vendors, YouTube workouts. Your price must beat the substitute on value.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you pick a location or a launch market',
          items: [
            { q: 'How many target customers live or work within our real travel or delivery time?', why: 'Catchment, not city size, decides whether a store or dark store can reach break-even.' },
            { q: 'What is footfall at our peak hours, and what share would we need to capture?', why: 'If the required capture rate is above what rivals achieve, the site is too weak.' },
            { q: 'Which behavioural segment will become regulars, and how often will they come?', why: 'Repeat frequency drives revenue far more than one-time trial.' },
            { q: 'What are customers using today instead of us?', why: 'Substitutes set the price ceiling and the switching story.' },
            { q: 'What do competitor reviews complain about?', why: 'Complaints are a free list of positioning opportunities.' },
            { q: 'What would a cheap test (pop-up, cloud kitchen, landing page) tell us first?', why: 'Testing before committing to a 9-year lease or a big launch avoids the costliest mistakes.' }
          ]
        }
      ],
      terms: [
        { term: 'Catchment area', def: 'The area from which a store draws most of its customers, usually defined by travel or delivery time.' },
        { term: 'Footfall', def: 'The number of people passing or entering a location in a given period.' },
        { term: 'Capture rate', def: 'Share of passing people who enter the store; a measure of visibility and appeal.' },
        { term: 'Behavioural segmentation', def: 'Grouping consumers by what they do — frequency, occasion, channel — rather than who they are.' },
        { term: 'Bottom-up sizing', def: 'Estimating a market by multiplying reachable customers by trial, repeat, frequency and spend.' },
        { term: 'Substitute', def: 'A different way of meeting the same need, such as home cooking instead of a restaurant meal.' }
      ],
      quiz: [
        { q: 'A site has 4,000 passers-by a day; 5% walk in and 50% of walk-ins buy. How many purchases a day?', options: ['200', '2,000', '100', '20'], answer: 2, explain: '4,000 × 5% = 200 walk-ins; 200 × 50% = 100 purchases.' },
        { q: 'Which segmentation is usually most predictive of B2C buying?', options: ['Behavioural (frequency, occasion)', 'Star sign', 'Company size', 'Height'], answer: 0, explain: 'What people do — how often and on what occasion — predicts future buying better than demographics alone.' },
        { q: 'Why did Domino\'s India roll out 20-minute delivery zone by zone?', options: ['Regulation required it', 'Customers outside metros dislike pizza', 'Riders refused', 'Speed depends on store density in each area'], answer: 3, explain: 'Delivery time depends on how close stores are to demand, so the promise works only where density supports it.' },
        { q: 'Cult.fit\'s DRHP said nearly 46% of paid users were first-time gym users. What is a sensible implication?', options: ['Stop serving beginners', 'Invest in onboarding and beginner formats', 'Raise prices only for beginners', 'Target only athletes'], answer: 1, explain: 'A beginner-heavy base needs easy onboarding and habit building to keep members.' },
        { q: 'Bottom-up: 50,000 households × 10% try × 30% repeat × 24 orders a year × ₹500. Annual revenue from repeaters?', options: ['₹1.8 crore', '₹6 crore', '₹18 crore', '₹60 lakh'], answer: 0, explain: '50,000 × 0.1 × 0.3 = 1,500 repeaters; 1,500 × 24 × ₹500 = ₹1.8 crore.' }
      ],
      challenge: {
        title: 'Pick between two sites for a salad bar',
        prompt: `<p>Site A (office district): 6,000 passers-by between 12 and 2 p.m. on weekdays, rent ₹3 lakh a month, quiet on weekends. Site B (residential high street): 3,500 passers-by a day spread evenly, 7 days, rent ₹1.6 lakh. You expect a capture rate of 4% at A and 5% at B, conversion of 60% in both, average bill ₹320. Assume 22 working days a month at A and 30 days at B. Food and packaging are 35% of sales.</p><p>Estimate monthly sales and sales minus food and rent for each site. Which would you choose and what would you test first?</p>`,
        hints: ['Daily buyers = passers-by × capture × conversion.', 'Remember different operating days and that rent is fixed.'],
        model: `<p><b>Site A.</b> 6,000 × 4% × 60% = 144 buyers/day × ₹320 = ₹46,080/day × 22 days = <b>₹10.14 lakh</b>. Minus food 35% (₹3.55 lakh) and rent ₹3 lakh = <b>₹3.59 lakh</b>.</p><p><b>Site B.</b> 3,500 × 5% × 60% = 105 buyers/day × ₹320 = ₹33,600/day × 30 = <b>₹10.08 lakh</b>. Minus food ₹3.53 lakh and rent ₹1.6 lakh = <b>₹4.95 lakh</b>.</p><p><b>Judgement.</b> Sales are similar, but B is more profitable after rent and less dependent on a two-hour lunch rush that strains staff and kitchen capacity. A also carries weekend dead time. A could win if you add delivery and corporate catering, but that is extra risk.</p><p><b>Recommendation:</b> choose B, but first run a two-week pop-up or delivery-only test in both catchments to validate capture rates — the whole answer rests on the 4% and 5% guesses.</p>`
      },
      takeaways: [
        'Size B2C markets bottom-up: reachable people × trial × repeat × frequency × ticket.',
        'For physical B2C, the market is a catchment map and a footfall count at peak hours.',
        'Behavioural segments (frequency, occasion, first-time vs experienced) predict demand best.',
        'Test cheaply — pop-ups, cloud kitchens, waitlists — before signing long leases.'
      ],
      sources: [
        { title: 'YourStory — Cult.fit files draft IPO papers (DRHP highlights, 2026)', url: 'https://yourstory.com/2026/07/cultfit-files-draft-ipo-papers-rs-950-crore-fresh-issue' },
        { title: 'Business Standard — Domino\'s launches 20-minute deliveries across 20 zones (2022)', url: 'https://www.business-standard.com/article/companies/domino-s-india-launches-20-minutes-delivery-across-20-zones-in-14-cities-122122001080_1.html' },
        { title: 'Franchise India — Jubilant FoodWorks FY25 results and store count', url: 'https://www.franchiseindia.com/insights/en/news/jubilant-foodworks-posts-49-cr-profit-in-q4-adds-325-stores-in-fy25.56465' },
        { title: 'YourStory — Chai Point forays into the café format with 100th store (2018)', url: 'https://yourstory.com/2018/06/chai-point-forays-cafe-format-100th-store-bengaluru' }
      ]
    },

    /* ================================================================== 3 */
    {
      id: 'pb-b2c-3',
      title: 'Starting: the first store or app, legal basics and the first 100 regulars',
      level: 'Intermediate',
      minutes: 16,
      hook: `Most B2C businesses do not die from lack of customers on day one — they die because the first 100 customers never came back.`,
      eli5: `Starting a B2C business is like opening a lemonade stand on your street. First you check that your parents (and the neighbourhood rules) allow it. Then you make one great lemonade, not ten flavours. You stand where people walk past. And the real win is not the first glass you sell — it is the neighbour who comes back every afternoon and brings a friend.`,
      blocks: [
        {
          type: 'flow', title: 'From idea to first 100 regulars',
          steps: [
            { label: 'Define one hero offer', desc: 'One product or class or feature that solves one job brilliantly. Fewer items means less waste, faster service and a clear story.' },
            { label: 'Run a cheap test', desc: 'Pop-up, kiosk, cloud kitchen, WhatsApp pre-orders, or a minimum app with one core loop. Measure repeat, not just trial.' },
            { label: 'Do people return within 30 days?', kind: 'decision', desc: 'Repeat rate is the first proof of product-market fit in B2C.', branches: [ { label: 'Yes', to: 'Lock legal setup and a small permanent site or launch' }, { label: 'No', to: 'Change the offer, price or location — not the marketing budget' } ] },
            { label: 'Set up legally and operationally', desc: 'Entity, tax registration, licences, payments, basic accounting and consumer terms (see the compare table).' },
            { label: 'Win the first 100 regulars by hand', desc: 'Founder at the counter, names remembered, WhatsApp group, referral card, local partnerships.' },
            { label: 'Write the playbook', desc: 'Recipes, opening checklist, service scripts and daily metrics so that store 2 or version 2 works without the founder.' }
          ]
        },
        {
          type: 'compare', title: 'Legal and operational essentials (check local rules)', headers: ['Area', 'What you need', 'India notes', 'US notes'],
          rows: [
            ['Entity', 'A company or LLP for liability protection and fundraising', 'Private limited or LLP; see <a href="#/lesson/india-2">India, lesson 2</a>', 'LLC or C-corp (if raising VC)'],
            ['Tax', 'Indirect tax registration and invoicing', 'GST registration above thresholds or when selling via e-commerce operators', 'State sales-tax permits; rules vary by state'],
            ['Food and health', 'Licence or permit for any food business', 'FSSAI registration or licence; health trade licence', 'County health permit and inspections'],
            ['Premises and staff', 'Shop licence, fire and signage approvals, labour registrations', 'Shops and Establishments registration; PF/ESI once headcount thresholds are crossed', 'Business licence, workers compensation, payroll registrations'],
            ['Consumer protection', 'Clear prices, refunds, privacy notice, app-store and payment rules', 'Consumer Protection (E-Commerce) Rules; DPDP Act for data', 'FTC rules on pricing and auto-renewal; state privacy laws'],
            ['Franchising (later)', 'Disclosure and contracts before selling franchises', 'Mainly contract law; no single franchise statute', 'FTC Franchise Rule requires a disclosure document']
          ]
        },
        {
          type: 'case', company: 'Chai Point', year: '2010–2018', title: 'Start where the target customer already is',
          situation: `India drinks huge amounts of tea, mostly from unbranded street stalls. Chai Point began operations in 2010 in Bengaluru with retail outlets placed mainly in tech parks, where its target customer — the white-collar office worker — spent the day.`,
          decision: `Rather than a sit-down café, it started with an on-the-go format: quick, consistent tea at the moments office workers wanted it. It later added delivery and automated dispensers for offices.`,
          outcome: `By 2018 it opened its 100th store, claimed close to 0.3 million cups a day across stores, delivery and dispensers, and reported in-store customers repeating two to three times a week.`,
          lesson: `A focused first location next to a dense, homogeneous segment makes the first 100 regulars much easier — and gives clean data on frequency.`
        },
        {
          type: 'case', company: 'Byju\'s', year: '2011–2024', title: 'A strong start that scale later undid',
          situation: `Byju Raveendran began by teaching mathematics to friends, built a following through classes, launched the company in 2011 and its app in 2015. The product was born from proven, in-person demand.`,
          decision: `During the pandemic boom it grew aggressively, with acquisitions and heavy spending, as its valuation rose from about $5 billion to $22 billion in 2022.`,
          outcome: `By 2024 its valuation had fallen below $2 billion, its auditor Deloitte had resigned over delayed accounts, US lenders said they were owed $1 billion, and India's Supreme Court revived insolvency proceedings. The scaling decision is analysed in the case library.`,
          lesson: `Starting from real demand is necessary but not sufficient. The habits that win the first customers (founder-led, high-touch) must be matched by governance and unit economics before scaling.`
        },
        {
          type: 'cycle', title: 'The first-100-regulars loop', center: 'Regulars',
          steps: [
            { label: 'Personal welcome', desc: 'Founder or lead staff greet, learn names, ask what customers want.' },
            { label: 'Consistent hero product', desc: 'Same taste, same speed every time — consistency creates habit.' },
            { label: 'Small reward', desc: 'Stamp card, free add-on on the 5th visit, early access to new items.' },
            { label: 'Ask for feedback and referral', desc: 'One question at the counter or in the app; give regulars a "bring a friend" perk.' },
            { label: 'Fix and tell', desc: 'Act on feedback and tell regulars you did. This turns customers into fans.' }
          ]
        },
        {
          type: 'interactive', widget: 'retention', title: 'See why early retention decides everything',
          note: 'Set month-1 retention at 25% and then 45%. Watch how the surviving cohort after a year changes — that is the difference between renting customers and owning them.'
        },
        {
          type: 'callout', kind: 'tip', title: 'Apps: launch with one loop',
          html: `<p>For a consumer app, the MVP is one core loop that brings people back (lesson → streak, workout → progress, order → reorder). RevenueCat's 2025 subscription-app report found that nearly 30% of annual subscriptions are cancelled in the first month — so onboarding and the first week matter more than features. See <a href="#/lesson/growth-2">Growth, lesson 2</a> on the aha moment.</p>`
        },
        {
          type: 'questions', title: 'Ask before you open the doors or ship the app',
          items: [
            { q: 'What is our single hero product, and can we deliver it consistently 100 times a day?', why: 'Consistency builds habit; a wide menu at launch multiplies waste and errors.' },
            { q: 'Which licences must be in hand before day one?', why: 'A food or premises closure in week one destroys trust and cash.' },
            { q: 'What repeat rate within 30 days will we treat as proof?', why: 'Setting the bar in advance stops you from scaling something people try once and forget.' },
            { q: 'Who will personally talk to the first 100 customers?', why: 'Early insight comes from conversations, not dashboards.' },
            { q: 'How will we capture contact details to bring people back?', why: 'Without a phone number, app account or loyalty ID you cannot re-engage anyone.' },
            { q: 'What will we write down so that a second site works without the founder?', why: 'Undocumented know-how is the first barrier to scaling.' }
          ]
        }
      ],
      terms: [
        { term: 'Hero product', def: 'The single item or feature a new business is known for and executes best.' },
        { term: 'Pop-up', def: 'A temporary store or stall used to test demand cheaply before a long lease.' },
        { term: 'Cloud kitchen', def: 'A delivery-only kitchen with no dine-in space, used to test food concepts at low cost.' },
        { term: 'Repeat rate', def: 'Share of first-time customers who buy again within a set period, such as 30 days.' },
        { term: 'FSSAI', def: 'India\'s Food Safety and Standards Authority; food businesses need its registration or licence.' },
        { term: 'Franchise disclosure', def: 'Information a franchisor must give prospective franchisees before signing; mandatory in the US under the FTC Franchise Rule.' }
      ],
      quiz: [
        { q: 'What is the best early proof of B2C product-market fit?', options: ['Repeat purchases within a set period', 'Instagram followers', 'Press coverage', 'Number of menu items'], answer: 0, explain: 'People coming back without heavy discounts is the strongest early signal.' },
        { q: 'A pop-up gets 600 first-time buyers in a month; 150 return within 30 days. Repeat rate?', options: ['15%', '40%', '4%', '25%'], answer: 3, explain: '150 ÷ 600 = 25%.' },
        { q: 'Why did Chai Point start in tech parks?', options: ['Rent was free', 'Its target segment was concentrated there', 'Tea is illegal on streets', 'To avoid GST'], answer: 1, explain: 'Office workers, its core segment, were densely concentrated in tech parks.' },
        { q: 'If repeat is weak after a test, what should you change first?', options: ['Marketing budget', 'Logo', 'Offer, price or location', 'Office furniture'], answer: 2, explain: 'Weak repeat is a product or fit problem; more marketing only buys more one-time trials.' },
        { q: 'A café needs 300 regulars visiting 12 times a month at ₹150 to cover costs. What monthly revenue do regulars generate?', options: ['₹54,000', '₹5.4 lakh', '₹1.8 lakh', '₹54 lakh'], answer: 1, explain: '300 × 12 × ₹150 = ₹5,40,000 = ₹5.4 lakh.' }
      ],
      challenge: {
        title: 'Plan the launch of a neighbourhood fitness studio',
        prompt: `<p>You plan a 2,000 sq ft group-fitness studio. Rent ₹1.2 lakh a month, two trainers ₹1.4 lakh, other fixed costs ₹0.4 lakh. Membership ₹3,000 a month. Variable cost per member (towels, app, payment fees) ₹200 a month. You can run a 6-week pop-up in a community hall for ₹60,000.</p><p>(1) How many paying members do you need to break even? (2) Design a launch plan for the first 100 members. (3) What must the pop-up prove before you sign the lease?</p>`,
        hints: ['Break-even members = fixed costs ÷ (price − variable cost).', 'Think about which segment you will target first and what repeat or attendance metric you will track.'],
        model: `<p><b>1. Break-even.</b> Fixed = 1.2 + 1.4 + 0.4 = ₹3.0 lakh. Contribution per member = 3,000 − 200 = ₹2,800. Break-even = 300,000 ÷ 2,800 = <b>about 108 members</b>.</p><p><b>2. First 100.</b> Target one behavioural segment (e.g. first-time exercisers aged 25–40 within 2 km). Founder-led free trial week, small batches with names on a board, a WhatsApp group per batch, a "bring a friend" free class, partnerships with two nearby offices and a housing society.</p><p><b>3. Pop-up proof.</b> At least 150 trial sign-ups, 40%+ converting to a paid month, and attendance of 2+ classes a week among payers by week 4. That implies a path to 108 paying members once you open.</p><p><b>Recommendation:</b> sign the lease only if the pop-up clears these bars; otherwise change the format or location. The pop-up costs ₹60,000; a wrong lease could cost ₹15–20 lakh.</p>`
      },
      takeaways: [
        'Start with one hero offer, close to a dense target segment.',
        'Treat repeat within 30 days as the first proof; fix the offer before spending on marketing.',
        'Get licences, tax and consumer-protection basics right before day one.',
        'Win the first 100 regulars by hand, then write the playbook so store two works without you.'
      ],
      sources: [
        { title: 'YourStory — Chai Point forays into café format with 100th store (2018)', url: 'https://yourstory.com/2018/06/chai-point-forays-cafe-format-100th-store-bengaluru' },
        { title: 'Hindustan Times / Reuters — How Byju\'s went from startup star to facing insolvency (2024)', url: 'https://www.hindustantimes.com/education/explainer-how-byjus-went-from-startup-star-to-facing-insolvency-101723637743894.html' },
        { title: 'RevenueCat — State of Subscription Apps 2025', url: 'https://www.revenuecat.com/state-of-subscription-apps-2025/' },
        { title: 'YourStory — Cult.fit DRHP highlights (2026)', url: 'https://yourstory.com/2026/07/cultfit-files-draft-ipo-papers-rs-950-crore-fresh-issue' }
      ]
    },

    /* ================================================================== 4 */
    {
      id: 'pb-b2c-4',
      title: 'Building: operations, tech stack, team, suppliers and the go-to-market engine',
      level: 'Intermediate',
      minutes: 17,
      hook: `In B2C, operations are the product: the queue, the delivery time and the shelf that is never empty are what customers actually experience.`,
      eli5: `Think of a busy school canteen at lunch break. The food matters, but what makes it great is that the queue moves fast, the favourite snacks never run out, and the same friendly person is there every day. Building a B2C business means designing that lunch break so it works every single day, in every branch.`,
      blocks: [
        {
          type: 'map', title: 'The B2C operating system', center: 'Daily experience',
          branches: [
            { label: 'Assortment', desc: 'Which products, how many SKUs, own label vs brands. Fewer SKUs usually means faster turns and less waste.', children: ['SKU count', 'Private label'] },
            { label: 'Supply and inventory', desc: 'Suppliers, reorder rules, cold chain, wastage control. Stock-outs lose sales; overstock loses cash.', children: ['Fill rate', 'Shrinkage'] },
            { label: 'Store or dark-store ops', desc: 'Layout, picking, opening and closing checklists, food safety, peak-hour staffing.', children: ['Throughput', 'Pick time'] },
            { label: 'People', desc: 'Hiring, training, pay and scheduling of front-line staff — the largest controllable cost and the face of the brand.', children: ['Training', 'Retention'] },
            { label: 'Technology', desc: 'POS, inventory, app, CRM, delivery routing, analytics. Buy standard tools first; build only what differentiates.', children: ['POS', 'CRM'] },
            { label: 'Go-to-market', desc: 'Footfall, aggregators, performance marketing, CRM and referrals working as one engine.', children: ['Acquire', 'Retain'] }
          ]
        },
        {
          type: 'compare', title: 'Starter tech stack by archetype', headers: ['Need', 'Store / QSR', 'Consumer app / subscription', 'E-commerce / quick commerce'],
          rows: [
            ['Selling', 'Cloud POS with inventory and KOT (kitchen tickets)', 'App-store billing or web checkout with a subscription manager', 'Storefront, cart, payment gateway, order management'],
            ['Customers', 'Phone-number CRM, loyalty, WhatsApp messaging', 'Product analytics (events, cohorts), push and email', 'CRM, segmentation, push and WhatsApp'],
            ['Operations', 'Recipe costing, staff rostering, food-safety logs', 'Customer support, content pipeline', 'Warehouse/dark-store management, picking, rider routing'],
            ['Insight', 'Daily sales by hour and item; four-wall P&L', 'DAU/MAU, retention cohorts, trial-to-paid conversion', 'Order frequency, contribution per order by zone']
          ]
        },
        {
          type: 'case', company: 'Trader Joe\'s', year: '2010s', title: 'Operations designed around a value proposition',
          situation: `Trader Joe's is a US grocery chain with small stores. A 2010 Fortune estimate, summarised in an HBS Digital Initiative analysis, put its range at about 4,000 SKUs versus roughly 50,000 at a typical grocery store, with about 80% of SKUs private label and sales per square foot about double Whole Foods'.`,
          decision: `It used few SKUs and own-label products to shrink stores and lift inventory turns, then reinvested part of the margin in higher wages and more staff per shift: crew restock shelves continuously, walk customers to products, and staff a bagger at checkouts. It sells small pack sizes and does not price items by weight, which speeds checkout.`,
          outcome: `Small, productive stores made urban locations viable; the analysis notes the chain grew past 440 stores financed through retained earnings.`,
          lesson: `Every operating choice — SKU count, pay, shelf depth, checkout design — should reinforce the same customer promise. Copying one piece without the others rarely works.`
        },
        {
          type: 'case', company: 'Blinkit', year: '2025', title: 'Building a dark-store machine — and taking ownership of stock',
          situation: `Blinkit, Eternal's (formerly Zomato) quick-commerce business, delivers groceries and more in minutes from small "dark stores". It added 243 dark stores in April–June 2025 to reach 1,544, with average order value around ₹521, and was still loss-making at the adjusted EBITDA level.`,
          decision: `It began moving from a marketplace model (third-party sellers own stock) to owning inventory itself, to control procurement, pricing, fill rates and fulfilment end to end. Management said it expected roughly one percentage point of extra contribution margin, and targeted 2,000 stores by December 2025.`,
          outcome: `Its CEO said some cities already showed adjusted EBITDA above 2.5% of net order value and the long-term aim was 5–6%. The shift made revenue look much closer to order value and required more working capital.`,
          lesson: `In quick commerce, the build is the moat: dense stores, high fill rates and tight picking. Owning stock adds margin and control but also inventory risk.`
        },
        {
          type: 'flow', title: 'The daily store or dark-store rhythm',
          steps: [
            { label: 'Forecast demand by hour', desc: 'Use last 4 same weekdays plus events and weather.' },
            { label: 'Prep and stock to forecast', desc: 'Par levels per SKU; perishables ordered daily.' },
            { label: 'Staff to the peaks', desc: 'Roster more people at lunch, evening or weekend peaks; cross-train roles.' },
            { label: 'Serve and measure', desc: 'Track throughput, wait or delivery time, stock-outs and complaints live.' },
            { label: 'Close and review', desc: 'Wastage, cash, top sellers, and one improvement for tomorrow.' }
          ]
        },
        {
          type: 'cycle', title: 'The B2C go-to-market engine', center: 'Repeat revenue',
          steps: [
            { label: 'Be visible', desc: 'Location, aggregator ranking, app-store search, local social media.' },
            { label: 'Convert the first visit', desc: 'Clear menu or onboarding, fast service, a trial offer that does not train discount habits.' },
            { label: 'Capture identity', desc: 'Phone number, app login or loyalty ID at the first purchase.' },
            { label: 'Bring them back', desc: 'Personalised offers, new items, streaks, reminders.' },
            { label: 'Turn them into advocates', desc: 'Referral rewards, reviews, shareable moments.' }
          ]
        },
        {
          type: 'interactive', widget: 'eoq', title: 'How much to order, how often',
          note: 'Change holding cost (high for perishables) and ordering cost. See why fresh categories need small, frequent orders.'
        },
        {
          type: 'questions', title: 'Ask before you lock the operating model',
          items: [
            { q: 'How many SKUs do we really need to deliver the promise?', why: 'Each extra SKU adds inventory, space and complexity; fewer SKUs often raise turns and quality.' },
            { q: 'Will we own inventory or let partners hold it?', why: 'Ownership adds margin and control but ties up cash and adds wastage risk.' },
            { q: 'What service metric will we never miss (wait time, delivery time, fill rate)?', why: 'Customers remember the worst experience; one non-negotiable metric focuses the team.' },
            { q: 'Which tools do we buy, and what, if anything, must we build?', why: 'Building commodity tech burns months; build only what differentiates the experience.' },
            { q: 'How will we pay and train front-line staff?', why: 'Staff turnover drives errors and slow service, and front-line people are the brand.' },
            { q: 'Which channel brings the first visit and which brings the second?', why: 'Acquisition and retention channels differ; budgeting only for the first leaks value.' }
          ]
        }
      ],
      terms: [
        { term: 'SKU', def: 'Stock-keeping unit: one distinct product version (size, flavour) tracked in inventory.' },
        { term: 'Private label', def: 'Products sold under the retailer\'s own brand, usually at higher margin than national brands.' },
        { term: 'Dark store', def: 'A small warehouse closed to walk-in shoppers, used only to pick and dispatch online orders fast.' },
        { term: 'Fill rate', def: 'Share of ordered items that are in stock and delivered; a key quick-commerce quality metric.' },
        { term: 'Inventory turns', def: 'How many times stock is sold and replaced in a year; higher turns mean less cash tied up.' },
        { term: 'POS', def: 'Point-of-sale system that records sales, payments and often inventory and customer data.' }
      ],
      quiz: [
        { q: 'Why can fewer SKUs make a store more profitable?', options: ['Customers prefer less choice in all cases', 'It removes the need for staff', 'Suppliers pay more for fewer SKUs', 'Higher turns, less space and less waste per unit of sales'], answer: 3, explain: 'Sales concentrate on fewer items, lifting turns and lowering inventory and space costs.' },
        { q: 'Blinkit\'s shift from marketplace to owning inventory most directly increases...', options: ['Working capital needs and margin control', 'App downloads', 'The number of sellers', 'Rider wages'], answer: 0, explain: 'Owning stock means paying for it upfront and carrying it, in exchange for control over procurement and margin.' },
        { q: 'A dark store ships 1,200 orders a day with 97% fill rate. About how many orders have at least one missing item if misses are spread one per order?', options: ['3', '120', '36', '360'], answer: 2, explain: '3% of 1,200 = 36 orders with a missing item.' },
        { q: 'Which tech choice is usually wise for a first store?', options: ['Build your own POS', 'Buy a standard cloud POS and CRM', 'Avoid any software', 'Build a custom ERP'], answer: 1, explain: 'Standard tools are cheap and fast; build only what differentiates.' },
        { q: 'Trader Joe\'s reinvested part of its margin in staff mainly to...', options: ['Support small stores, fast restocking and product discovery', 'Reduce prices to zero', 'Run TV ads', 'Open in malls'], answer: 0, explain: 'More, better-paid staff kept small shelves stocked and guided customers to new private-label items.' }
      ],
      challenge: {
        title: 'Design the operating model for a 10-outlet bakery chain',
        prompt: `<p>A bakery chain has 10 outlets and 140 SKUs. Wastage is 9% of sales; the top 30 SKUs make 78% of sales. Staff turnover is 60% a year. It plans to add delivery through aggregators.</p><p>Propose an operating model: assortment, production (central kitchen vs in-store), staffing and the 4 metrics you would show on a daily dashboard. Estimate the effect on wastage if cutting to 60 SKUs reduces wastage to 5% on monthly chain sales of ₹1.2 crore.</p>`,
        hints: ['Use the 80/20 split to cut the tail.', 'Wastage saving = (old % − new %) × sales, adjusted for any lost sales.'],
        model: `<p><b>Assortment:</b> cut from 140 to about 60 SKUs, keeping the top 30 plus a rotating set of seasonal items; review the tail monthly.</p><p><b>Production:</b> central kitchen for doughs and fillings, in-store baking of finish items for freshness; daily par levels per outlet by hour.</p><p><b>Staffing:</b> standard roles and a 2-week training programme, a pay step-up at 6 months to reduce turnover, and a cross-trained floater per 3 outlets for peaks.</p><p><b>Daily dashboard:</b> sales by hour vs forecast, wastage %, stock-outs of top 30 SKUs, and average service or delivery time.</p><p><b>Wastage maths:</b> 9% − 5% = 4% × ₹1.2 crore = <b>₹4.8 lakh a month</b> saved (about ₹57.6 lakh a year). Even if the cut loses 3% of sales (₹3.6 lakh) at a 55% contribution margin (₹1.98 lakh), the net gain is about ₹2.8 lakh a month.</p><p><b>Recommendation:</b> cut the tail, centralise prep and fix staff retention before adding delivery volume.</p>`
      },
      takeaways: [
        'In B2C, operations are what customers experience; design them around one clear promise.',
        'Fewer SKUs and own label can raise turns, margin and speed — but only with the right staffing.',
        'Owning inventory buys control and margin at the cost of cash and wastage risk.',
        'Buy standard tools, measure daily, and build a go-to-market loop that brings customers back, not just in.'
      ],
      sources: [
        { title: 'HBS Digital Initiative — Trader Joe\'s: using operations to support a distinct value proposition', url: 'https://d3.harvard.edu/platform-rctom/submission/trader-joes-using-operations-to-support-a-distinct-value-proposition/' },
        { title: 'The Arc — Blinkit says margins have bottomed out, will start owning inventory (2025)', url: 'https://www.thearcweb.com/article/blinkit-says-margins-have-bottomed-out-will-start-owning-inventory-bPUUeW5spQ4eHgjH' },
        { title: 'Business Standard — Eternal Q1 FY26 results', url: 'https://www.business-standard.com/companies/news/zomatos-parent-eternal-net-profit-falls-90-yoy-125072101198_1.html' },
        { title: 'Retail Insider — Costco Q4 fiscal 2025 earnings review', url: 'https://retail-insider.com/retail-insider/2025/09/costco-wholesale-corp-4th-q-fiscal-2025-earnings-review-commentary-bruce-winder' }
      ]
    },

    /* ================================================================== 5 */
    {
      id: 'pb-b2c-5',
      title: 'Revenue and pricing: freemium, tiers, memberships and menu architecture',
      level: 'Intermediate',
      minutes: 17,
      hook: `Consumers rarely compare your price with your cost — they compare it with the next tab on their phone, so B2C pricing is really the design of choices.`,
      eli5: `A cinema sells tickets, but also popcorn, combo meals and a yearly pass. Some people only buy a ticket; some buy the big combo every time; some buy the pass and come every week. The cinema did not just pick "a price" — it built a menu of choices so that each kind of person finds one that feels right. That is B2C pricing.`,
      blocks: [
        {
          type: 'text', title: 'Revenue models you can combine',
          html: `<p>You met freemium, trials and subscription in <a href="#/lesson/pricing-4">Pricing, lesson 4</a> and good-better-best tiers in <a href="#/lesson/pricing-3">lesson 3</a>. In B2C the real skill is <b>combining</b> them: a store can add a membership, an app can add ads and a premium tier, a platform can add delivery fees and a loyalty pass. Each layer serves a different segment and lifts <span class="hl">blended revenue per customer</span>.</p>`
        },
        {
          type: 'pyramid', title: 'A B2C revenue stack (build from the base up)',
          levels: [
            { label: 'Premium tier / membership', note: 'Few, very valuable', desc: 'Top tier or paid membership with exclusive benefits (Costco Executive, Duolingo Max). Small share of users, large share of profit.' },
            { label: 'Core paid plan or full-price purchase', note: 'The engine', desc: 'The standard subscription or the main menu at list price.' },
            { label: 'Add-ons and bundles', note: 'Lift the ticket', desc: 'Combos, sides, in-app purchases, extended warranties.' },
            { label: 'Free or entry offer', note: 'Wide funnel', desc: 'Free tier with ads, entry-price items, trial classes — brings people in.' }
          ]
        },
        {
          type: 'formula', name: 'Blended ARPU for a freemium app', expr: 'Blended ARPU = (Payers ÷ Users) × ARPPU + (Free users ÷ Users) × Ad revenue per free user',
          explain: 'ARPPU is average revenue per paying user. Annual plans lower ARPPU per month but improve retention.',
          example: 'Illustrative: 1,000,000 users, 6% pay. Of payers, 60% are on ₹1,499/year (₹124.9 a month) and 40% on ₹199/month → ARPPU = 0.6 × 124.9 + 0.4 × 199 ≈ ₹154.5. Free users earn ₹3 a month in ads. Blended ARPU = 0.06 × 154.5 + 0.94 × 3 = 9.27 + 2.82 ≈ ₹12.1 a month.'
        },
        {
          type: 'case', company: 'Duolingo', year: 'Q2 2025', title: 'Freemium with a ladder of tiers',
          situation: `Duolingo's language app is free with ads, with paid tiers (Super and, at the top, Max with AI features such as Video Call). In Q2 2025 it had 128.3 million monthly and 47.7 million daily active users.`,
          decision: `Keep the free product genuinely useful to grow habit, then convert a small share to paid and push some payers up to Max.`,
          outcome: `Paid subscribers reached 10.9 million (9.0% of trailing-twelve-month MAUs) and subscription revenue was $210.7 million of $252.3 million total. Management said Max had grown to about 8% of subscribers. Gross margin dipped one point to 72.4% because of higher AI costs for Max.`,
          lesson: `Freemium works when the free tier builds daily habit (DAU/MAU here is about 37%). The top tier lifts ARPPU but can carry new variable costs — price it accordingly.`
        },
        {
          type: 'case', company: 'Costco', year: 'FY2025', title: 'Moving members up a tier with benefits, not discounts',
          situation: `Costco earns a low margin on goods and collects annual membership fees from 81 million paid members. Executive members pay more for extra rewards. In FY2025 membership fees were $5.32 billion against net income of about $8.1 billion.`,
          decision: `In mid-2025 it gave Executive members extra shopping hours in US warehouses and a monthly credit on qualifying Instacart orders, aiming to upgrade Gold Star members to Executive.`,
          outcome: `Costco said the extra hours added roughly 1% to US warehouse sales and drove meaningful upgrades. Executive members reached 38.7 million — 47.7% of paid members but 74.2% of worldwide sales.`,
          lesson: `A premium tier works when its benefits change behaviour (more visits, bigger baskets), not just when it discounts. Measure upgrades and spend per member, not tier sign-ups alone.`
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'Subscriber economics: ARPU, churn and CAC',
          note: 'Enter ARPU ₹150, gross margin 70%, monthly churn 6% and CAC ₹600. Then halve churn — compare that with raising price 20%.'
        },
        {
          type: 'compare', title: 'Pricing tactics that work in B2C (and their risks)', headers: ['Tactic', 'How it works', 'Risk'],
          rows: [
            ['Decoy / anchor tier', 'A premium option makes the middle plan look like good value', 'Customers sense manipulation if the decoy is absurd'],
            ['Annual plan discount', 'Lower monthly-equivalent price for commitment; improves retention', 'Revenue arrives upfront but refunds and renewals need care'],
            ['Combos and bundles', 'Raise average ticket in restaurants and retail', 'Can cannibalise high-margin single items'],
            ['Membership or loyalty pass', 'Fixed fee for free delivery, discounts or perks', 'Heavy users can make it loss-making; cap benefits'],
            ['Dynamic and surge fees', 'Higher delivery fees at peaks or in rain', 'Feels unfair; must be transparent'],
            ['Entry price points', 'Small packs or low-priced items for trial (₹10 sachets, ₹49 items)', 'Low margin; must lead to repeat or upsell']
          ]
        },
        {
          type: 'flow', title: 'Rolling out a consumer price or tier change safely',
          steps: [
            { label: 'Define the goal and segment', desc: 'Raise ARPPU, lift conversion, or move users to annual plans — for which segment?' },
            { label: 'Model blended revenue and margin', desc: 'Include tier mix, variable costs of benefits and expected churn change.' },
            { label: 'Test on a slice', desc: 'A/B test by user cohort, city or store cluster for 2–6 weeks.' },
            { label: 'Did revenue per user and retention both hold or improve?', kind: 'decision', desc: 'Look beyond week-one conversion.', branches: [ { label: 'Yes', to: 'Roll out with clear communication; grandfather loyal users if needed' }, { label: 'No', to: 'Adjust benefits or price points and re-test' } ] },
            { label: 'Monitor after launch', desc: 'Track churn, complaints, upgrades and downgrades monthly for at least two cycles.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Discounts train customers',
          html: `<p>Platforms that buy orders with heavy discounts often find customers return only when the next coupon arrives. Loyalty programmes such as Zomato's relaunched Gold (introduced in January 2023 at ₹149 for three months with delivery and dine-in benefits) try to convert discount-seekers into committed members — but only work if the benefits cost less than the extra orders they bring. See <a href="#/lesson/mm-customers-2">Customers, lesson 2</a> on loyalty design.</p>`
        },
        {
          type: 'questions', title: 'Ask before you set or change a consumer price',
          items: [
            { q: 'What will the customer compare our price with?', why: 'The reference price (rival, substitute, last purchase) frames whether ours feels fair.' },
            { q: 'Which segment is each tier or pack built for?', why: 'Tiers without a clear segment confuse buyers and cannibalise revenue.' },
            { q: 'Do premium benefits carry their own variable cost?', why: 'AI features, free delivery or extra hours cost money every time they are used.' },
            { q: 'How will this change frequency and retention, not just conversion?', why: 'A price that lifts sign-ups but raises churn can lower lifetime value.' },
            { q: 'What happens if competitors match it tomorrow?', why: 'Price moves are copied fast in B2C; durable advantage comes from structure, not one cut.' },
            { q: 'How will we test it before rolling out?', why: 'A/B tests by city, store or user cohort reveal elasticity with limited risk.' }
          ]
        }
      ],
      terms: [
        { term: 'Freemium', def: 'A free core product with paid upgrades; free users widen the funnel, payers fund the business.' },
        { term: 'ARPPU', def: 'Average revenue per paying user — higher than ARPU in any freemium model.' },
        { term: 'Paid penetration', def: 'Share of active users who pay; Duolingo reported about 9% in Q2 2025.' },
        { term: 'Membership fee', def: 'An upfront periodic fee for access or benefits, as in warehouse clubs and delivery passes.' },
        { term: 'Average ticket', def: 'Average spend per transaction in a store or restaurant.' },
        { term: 'Decoy pricing', def: 'Adding an option mainly to make another option look better value.' }
      ],
      quiz: [
        { q: 'An app has 500,000 users; 4% pay ₹200 a month and free users earn ₹2 a month in ads. Monthly revenue?', options: ['₹40 lakh', '₹10 lakh', '₹49.6 lakh', '₹1 crore'], answer: 2, explain: 'Payers: 20,000 × ₹200 = ₹40 lakh. Free: 480,000 × ₹2 = ₹9.6 lakh. Total ₹49.6 lakh — always add both streams.' },
        { q: 'Duolingo\'s Max tier lowered gross margin slightly mainly because...', options: ['Ads were removed', 'AI features add cost per use', 'Prices were cut', 'Users churned'], answer: 1, explain: 'Max features such as Video Call rely on AI, which carries a variable cost.' },
        { q: 'Costco Executive members were 47.7% of paid members but 74.2% of sales. What does that suggest?', options: ['Executive members spend far more per member', 'Gold Star members spend more', 'Membership tiers do not matter', 'Executive members visit less'], answer: 0, explain: 'A minority of members generate most sales, so upgrading members lifts revenue disproportionately.' },
        { q: 'Which change usually improves subscription LTV the most for an app with 8% monthly churn?', options: ['A new logo', 'Doubling free users', 'Removing the annual plan', 'Cutting churn to 5%'], answer: 3, explain: 'Lifetime ≈ 1 ÷ churn: 12.5 months becomes 20 months, a 60% lift in LTV.' },
        { q: 'What is the main risk of an all-you-can-eat delivery membership?', options: ['Too few heavy users', 'Heavy users can cost more in benefits than they pay', 'It cannot be priced', 'It reduces data'], answer: 1, explain: 'The heaviest users self-select into memberships; uncapped benefits can make them unprofitable.' }
      ],
      challenge: {
        title: 'Redesign a fitness app\'s pricing',
        prompt: `<p>A fitness app has 800,000 MAU. Today: free tier with ads (₹2.5 per free user a month) and one plan at ₹299/month; 3% of MAU pay; monthly churn among payers is 10%.</p><p>Proposal: add an annual plan at ₹1,999 (expected to take 50% of new payers, with annual churn equivalent to 3% a month) and a premium plan at ₹599/month with live coaching (5% of payers; coaching costs ₹150 per premium user a month). Payers rise to 3.5% of MAU because the annual plan looks cheaper.</p><p>Compute monthly revenue before and after (ignore one-off timing of annual cash), and comment on retention.</p>`,
        hints: ['Annual plan monthly equivalent = ₹1,999 ÷ 12.', 'Split payers into the three plans after the change: 50% annual, 5% premium, 45% monthly.'],
        model: `<p><b>Before.</b> Payers = 3% × 800,000 = 24,000 × ₹299 = ₹71.8 lakh. Free = 776,000 × ₹2.5 = ₹19.4 lakh. Total ≈ <b>₹91.2 lakh</b>.</p><p><b>After.</b> Payers = 3.5% × 800,000 = 28,000. Annual 14,000 × ₹166.6 = ₹23.3 lakh. Premium 1,400 × ₹599 = ₹8.4 lakh (coaching cost 1,400 × 150 = ₹2.1 lakh). Monthly 12,600 × ₹299 = ₹37.7 lakh. Payer revenue = ₹69.4 lakh. Free = 772,000 × ₹2.5 = ₹19.3 lakh. Total ≈ <b>₹88.7 lakh</b> revenue (₹86.6 lakh after coaching cost).</p><p><b>Read-out.</b> Month-one revenue falls slightly because annual plans have a lower monthly equivalent. But half the payers now churn at about 3% a month instead of 10%: average lifetime rises from 10 months to about 33 months for that group, so lifetime value per annual payer ≈ ₹166.6 × 33 ≈ ₹5,500 vs ₹299 × 10 ≈ ₹2,990 for a monthly payer.</p><p><b>Recommendation:</b> launch the annual plan (big LTV gain) and pilot premium in two cities to confirm coaching demand and cost before rolling out.</p>`
      },
      takeaways: [
        'B2C pricing is choice architecture: combine free, core, add-on and premium layers.',
        'Model blended ARPU and ARPPU separately; conversion and tier mix move them more than list price.',
        'Premium tiers must change behaviour and carry their own cost; check gross margin per tier.',
        'Optimise for retention and lifetime value, not month-one revenue.'
      ],
      sources: [
        { title: 'Duolingo Q2 2025 shareholder letter (Form 8-K, SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1562088/000156208825000165/q2fy25duolingo6-30x25share.htm' },
        { title: 'Retail Insider — Costco Q4 fiscal 2025 earnings review', url: 'https://retail-insider.com/retail-insider/2025/09/costco-wholesale-corp-4th-q-fiscal-2025-earnings-review-commentary-bruce-winder' },
        { title: 'Business Today — Zomato rolls out revamped Gold loyalty programme (2023)', url: 'https://www.businesstoday.in/latest/corporate/story/zomato-rolls-out-revamped-gold-loyalty-programme-with-delivery-and-dine-in-benefits-367325-2023-01-24' },
        { title: 'Spotify Q2 2025 shareholder deck (Form 6-K, SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1639920/000114036125027654/ef20052398_ex99-1.htm' },
        { title: 'RevenueCat — State of Subscription Apps 2025', url: 'https://www.revenuecat.com/state-of-subscription-apps-2025/' }
      ]
    },

    /* ================================================================== 6 */
    {
      id: 'pb-b2c-6',
      title: 'Expenses and unit economics: four-wall EBITDA, per-order contribution and cash',
      level: 'Advanced',
      minutes: 18,
      hook: `A B2C business can grow revenue every month and still be walking off a cliff — the truth sits in one store's P&L or one order's waterfall.`,
      eli5: `Imagine running a lemonade stand where every glass sells for ₹20, but lemons, sugar and cups cost ₹12, and you pay your cousin ₹5 per glass to carry it to customers. You make ₹3 a glass. Now the park charges ₹300 a day for your spot. You need to sell 100 glasses just to pay the park. Unit economics is doing this sum honestly — for every glass, and for every stand.`,
      blocks: [
        {
          type: 'text', title: 'Two lenses: the unit and the box',
          html: `<p>In <a href="#/lesson/business-model-4">Business Model, lesson 4</a> you learned unit economics per customer. B2C operators use two more lenses: <b>per order</b> (does each basket make money after delivery, packaging and discounts?) and <b>per box</b> (does each store, kitchen or dark store cover its rent and staff?). A business needs both to be positive at maturity.</p>`
        },
        {
          type: 'pyramid', title: 'The store P&L stack (from sales to four-wall EBITDA)',
          levels: [
            { label: 'Four-wall EBITDA', note: 'Target often 15–25% for mature QSR (illustrative)', desc: 'What one site earns before head office, depreciation, interest and tax.' },
            { label: 'Occupancy and utilities', note: 'Fixed', desc: 'Rent, common-area charges, electricity. Location quality is paid here.' },
            { label: 'Store labour', note: 'Semi-fixed', desc: 'Salaries and incentives; flexes only partly with sales.' },
            { label: 'Channel and marketing costs', note: 'Variable', desc: 'Aggregator commissions, payment fees, local marketing, royalties.' },
            { label: 'Cost of goods', note: 'Variable', desc: 'Food, merchandise, packaging, wastage.' },
            { label: 'Net sales', note: 'After discounts and taxes', desc: 'The top line actually earned at this site.' }
          ]
        },
        {
          type: 'formula', name: 'Store break-even and payback', expr: 'Break-even sales = Fixed site costs ÷ Contribution margin %;  Payback (months) = Capex ÷ Monthly four-wall EBITDA',
          explain: 'Contribution margin % = 1 − variable costs as % of sales. Capex includes fit-out, equipment and deposits not recovered.',
          example: 'Illustrative QSR outlet: sales ₹15 lakh/month. Variable: food 30%, blended aggregator commission 11%, marketing/royalty 4% → 45%, so contribution 55%. Fixed: staff ₹2.2 lakh, rent ₹1.5 lakh, utilities ₹0.6 lakh, other ₹0.45 lakh = ₹4.75 lakh. Four-wall EBITDA = 15 × 0.55 − 4.75 = ₹3.5 lakh (23%). Break-even = 4.75 ÷ 0.55 ≈ ₹8.6 lakh/month. Capex ₹60 lakh → payback ≈ 17 months.'
        },
        {
          type: 'interactive', widget: 'breakeven', title: 'Find the store break-even',
          note: 'Enter fixed costs ₹4.75 lakh, price ₹300 per order and variable cost ₹135. Then raise rent by ₹1 lakh and see how many extra orders you need.'
        },
        {
          type: 'flow', title: 'Per-order waterfall for quick commerce (illustrative)',
          steps: [
            { label: 'Average order value ₹500', desc: 'What the customer pays for items.' },
            { label: 'Gross margin on goods ₹90 (18%)', desc: 'Retail margin or commission on the basket.' },
            { label: 'Plus fees and ad income ₹30', desc: 'Delivery/handling fees ₹15 and brand advertising ₹15.' },
            { label: 'Minus fulfilment ₹75', desc: 'Last-mile rider ₹45, dark-store picking and rent allocation ₹25, packaging ₹5.' },
            { label: 'Minus payments, discounts and wastage ₹22.5', desc: 'Payment 1.5% (₹7.5), discounts ₹10, wastage 1% (₹5).' },
            { label: 'Contribution ₹22.5 per order (4.5%)', desc: 'Positive, but a ₹25 coupon or a 3-km longer ride wipes it out.' }
          ]
        },
        {
          type: 'interactive', widget: 'd2c-margin', title: 'Play with a per-order waterfall',
          note: 'The widget is built for brands but the maths is the same: set AOV ₹500, COGS 82%, shipping ₹45 and discounts 2%. Try raising AOV to ₹650 — fixed per-order costs get spread thinner.'
        },
        {
          type: 'case', company: 'Dunzo', year: 'FY23', title: 'When per-order losses meet heavy fixed costs',
          situation: `Dunzo, a Bengaluru delivery startup backed by Reliance Retail and Google, pushed into quick commerce with dark stores (Dunzo Daily) as Blinkit, Zepto and Swiggy Instamart expanded.`,
          decision: `It scaled dark stores, advertising and staff quickly. In FY23 total expenses reached about ₹2,054 crore, including ₹309.7 crore on advertising, ₹338 crore on employees and ₹367.4 crore on delivery runners, while operating revenue was ₹226.6 crore.`,
          outcome: `Net loss rose nearly fourfold to about ₹1,801 crore. Inc42 noted that rivals generated far more revenue (Zepto about ₹2,024 crore, Blinkit about ₹724 crore in FY23). Dunzo faced unpaid salaries and retreated from consumer quick commerce towards B2B delivery.`,
          lesson: `Spending roughly eight rupees for every rupee of revenue only works if each order is on a clear path to positive contribution and fixed costs are spread over rapidly growing volume. Without both, scale accelerates losses.`
        },
        {
          type: 'case', company: 'Cult.fit', year: 'FY24–FY26', title: 'Lease-heavy centres: fixed costs cut both ways',
          situation: `Cult.fit operates a large network of leased fitness centres plus digital and product businesses. Its draft prospectus shows revenue rising from ₹926.7 crore (FY24) to ₹1,720.6 crore (FY26).`,
          decision: `It kept expanding centres while lifting utilisation; its IPO plan earmarked about ₹276.6 crore for new centres and ₹217.5 crore for lease-related payments.`,
          outcome: `Net loss narrowed from ₹888.5 crore to ₹251.9 crore as revenue grew faster than largely fixed costs. The DRHP warns that lease obligations stay fixed even if membership growth slows.`,
          lesson: `High fixed costs create strong operating leverage: profits improve quickly as utilisation rises, and fall just as quickly if demand dips. Track utilisation per centre, not just total members.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Common B2C cost traps',
          html: `<ul><li><b>Rent creep:</b> escalation clauses (illustrative: 5% a year, or 15% every three years) can outpace same-store sales.</li><li><b>Aggregator dependence:</b> double-digit commissions on a growing share of sales quietly shrink margin.</li><li><b>Discount addiction:</b> coupons recorded as marketing hide that the core order loses money.</li><li><b>Wastage and shrinkage:</b> expired stock, theft and errors are often 2–5% of sales in fresh categories (illustrative range).</li><li><b>Allocating head office away:</b> great four-wall numbers can still hide an unprofitable company if central costs are large.</li></ul>`
        },
        {
          type: 'questions', title: 'Ask before you open the next box or scale the next city',
          items: [
            { q: 'Is contribution per order positive without discounts?', why: 'If the core order loses money, growth only multiplies the loss.' },
            { q: 'What sales does this site need to break even, and how long until it gets there?', why: 'Ramp-up time drives how much cash each new store consumes.' },
            { q: 'What is the payback period on capex, and is it under our target?', why: 'Payback over 3–4 years makes expansion depend on outside funding.' },
            { q: 'Which costs rise automatically each year?', why: 'Rent escalations and wage inflation can erode margin even when sales grow.' },
            { q: 'How much cash is tied up in inventory and deposits?', why: 'Working capital can sink a profitable store chain during fast expansion.' },
            { q: 'What share of sales comes through channels that take a commission?', why: 'Aggregator mix often explains margin decline better than food cost.' }
          ]
        }
      ],
      terms: [
        { term: 'Four-wall EBITDA', def: 'Profit generated within a single store\'s four walls before central overheads, depreciation, interest and tax.' },
        { term: 'Contribution per order', def: 'Order revenue minus all variable costs of fulfilling that order.' },
        { term: 'Payback period', def: 'Months needed for a site\'s cash profits to repay its upfront investment.' },
        { term: 'Operating leverage', def: 'When a high share of costs is fixed, profit rises (or falls) faster than revenue.' },
        { term: 'Utilisation', def: 'Share of capacity used — seats, class slots, rider time or store hours.' },
        { term: 'Shrinkage', def: 'Inventory lost to theft, damage, errors or expiry.' }
      ],
      quiz: [
        { q: 'A store has fixed costs of ₹6 lakh a month and a 40% contribution margin. Break-even monthly sales?', options: ['₹2.4 lakh', '₹10 lakh', '₹15 lakh', '₹24 lakh'], answer: 2, explain: '₹6 lakh ÷ 0.40 = ₹15 lakh.' },
        { q: 'Capex ₹48 lakh and four-wall EBITDA ₹2 lakh a month. Payback?', options: ['12 months', '24 months', '36 months', '48 months'], answer: 1, explain: '48 ÷ 2 = 24 months.' },
        { q: 'A ₹500 order has ₹22.5 contribution. A new ₹30 coupon is added. What happens?', options: ['Contribution becomes −₹7.5', 'Contribution rises', 'No change', 'Revenue doubles'], answer: 0, explain: '22.5 − 30 = −₹7.5 per order: every coupon order now loses money.' },
        { q: 'Why did Cult.fit\'s losses narrow as revenue grew?', options: ['Rent fell to zero', 'It stopped marketing', 'It closed all centres', 'Revenue grew faster than largely fixed costs'], answer: 3, explain: 'With high fixed costs, extra utilisation drops mostly to the bottom line — operating leverage.' },
        { q: 'Dunzo\'s FY23 loss of ~₹1,801 crore on ~₹227 crore of revenue is a loss-to-revenue ratio of about...', options: ['0.8x', '2x', '8x', '80x'], answer: 2, explain: '1,801 ÷ 227 ≈ 7.9, so roughly 8x.' }
      ],
      challenge: {
        title: 'Should a pizza chain open store number 21?',
        prompt: `<p>A regional pizza chain plans a new outlet. Capex ₹55 lakh. Expected sales: ₹8 lakh/month in months 1–6, ₹12 lakh/month from month 7. Variable costs: food and packaging 32%, aggregator commission on 60% of sales at 22%, card fees 1%. Fixed: rent ₹1.6 lakh, staff ₹2.4 lakh, utilities and other ₹0.8 lakh.</p><p>Compute four-wall EBITDA in the ramp-up and mature phases, break-even sales, cumulative cash after 24 months, and payback. Recommend whether to open, and what one lever would most improve the case.</p>`,
        hints: ['Aggregator cost as % of total sales = 60% × 22% = 13.2%.', 'Total variable % = 32% + 13.2% + 1% = 46.2%.'],
        model: `<p><b>Contribution margin.</b> Variable = 32% + 13.2% + 1% = 46.2% → contribution 53.8%. Fixed = 1.6 + 2.4 + 0.8 = ₹4.8 lakh.</p><p><b>Break-even</b> = 4.8 ÷ 0.538 ≈ <b>₹8.92 lakh/month</b>.</p><p><b>Ramp-up (months 1–6):</b> 8 × 0.538 − 4.8 = 4.30 − 4.8 = <b>−₹0.50 lakh/month</b> → −₹3.0 lakh over six months.</p><p><b>Mature (month 7+):</b> 12 × 0.538 − 4.8 = 6.46 − 4.8 = <b>₹1.66 lakh/month</b> (13.8% margin).</p><p><b>Cash after 24 months:</b> −55 − 3.0 + 18 × 1.66 = −58 + 29.9 = <b>−₹28.1 lakh</b>. Payback ≈ 6 + (58 ÷ 1.66) ≈ 6 + 35 = <b>about 41 months</b>.</p><p><b>Recommendation:</b> do not open on these terms — payback near 3.5 years is too slow. The biggest lever is channel mix: moving delivery from aggregators to own app for half of delivery orders (cutting aggregator share to 30% of sales, saving up to 6.6 points before own-delivery costs) would lift mature EBITDA towards ₹2.45 lakh/month and payback towards about 2.5 years; net of rider costs the gain is smaller, so model it carefully. Negotiating rent or capex down also helps. Re-run the case with those terms before committing.</p>`
      },
      takeaways: [
        'Check both lenses: contribution per order and four-wall EBITDA per site.',
        'Break-even sales = fixed site costs ÷ contribution margin; payback = capex ÷ monthly EBITDA.',
        'Discounts, aggregator commissions and rent escalation are the silent margin killers.',
        'High fixed costs give operating leverage: great when utilisation rises, painful when it falls.'
      ],
      sources: [
        { title: 'Inc42 — Dunzo\'s quick commerce folly (FY23 financials)', url: 'https://inc42.com/features/dunzos-quick-commerce-folly' },
        { title: 'YourStory — Cult.fit files draft IPO papers (DRHP highlights, 2026)', url: 'https://yourstory.com/2026/07/cultfit-files-draft-ipo-papers-rs-950-crore-fresh-issue' },
        { title: 'The Arc — Blinkit says margins have bottomed out, will start owning inventory (2025)', url: 'https://www.thearcweb.com/article/blinkit-says-margins-have-bottomed-out-will-start-owning-inventory-bPUUeW5spQ4eHgjH' },
        { title: 'Franchise India — Jubilant FoodWorks FY25 results', url: 'https://www.franchiseindia.com/insights/en/news/jubilant-foodworks-posts-49-cr-profit-in-q4-adds-325-stores-in-fy25.56465' }
      ]
    },

    /* ================================================================== 7 */
    {
      id: 'pb-b2c-7',
      title: 'Branding and creativity: positioning, experience design and campaigns people share',
      level: 'Intermediate',
      minutes: 16,
      hook: `The best B2C marketing is often not an ad at all — it is a product moment so good that customers advertise it for you.`,
      eli5: `Think of the ice-cream shop that writes your name on the cup and plays a silly song when someone orders the giant sundae. Nobody forgets it, and everyone tells their friends. The shop did not buy a billboard; it designed a moment worth talking about. B2C branding is deciding what you stand for and then building moments that prove it.`,
      blocks: [
        {
          type: 'text', title: 'Brand = promise × proof × repetition',
          html: `<p>You studied positioning in <a href="#/lesson/marketing-6">Marketing, lesson 6</a> and brand equity in <a href="#/lesson/mm-brands-1">Brands, lesson 1</a>. For B2C operators the practical version is simple: pick one <b>promise</b> a busy person can remember, back it with <b>proof</b> they experience every visit, and <b>repeat</b> it across every touchpoint — store, packaging, app, staff and price.</p>`
        },
        {
          type: 'map', title: 'Where a B2C brand is actually built', center: 'Brand in the customer\'s head',
          branches: [
            { label: 'Product moments', desc: 'The taste, the streak, the 10-minute arrival — the core experience.', children: ['Signature item', 'Speed'] },
            { label: 'Space and packaging', desc: 'Store design, smell, music, unboxing. Physical cues signal price and personality.', children: ['Layout', 'Pack'] },
            { label: 'People', desc: 'How staff greet, recommend and recover from mistakes.', children: ['Service scripts', 'Empowerment'] },
            { label: 'Price signals', desc: 'An iconic price can become the brand (a fixed-price item, everyday low prices).', children: ['Anchor item', 'Value'] },
            { label: 'Content and community', desc: 'Social posts, newsletters, clubs, user-generated content.', children: ['UGC', 'Events'] },
            { label: 'Shareable data and rituals', desc: 'Year-in-review recaps, streaks, badges that customers post themselves.', children: ['Recaps', 'Badges'] }
          ]
        },
        {
          type: 'case', company: 'Spotify', year: '2016–2025', title: 'Wrapped: turning user data into free advertising',
          situation: `Music streaming apps offer similar catalogues, so differentiation is hard. Spotify had personal listening data for every user.`,
          decision: `Since December 2016 (after a simpler "Year in Music" in 2015) it has released Wrapped, a personal year-in-review of top artists, songs and genres. In 2019 it adopted a social-media story format designed to be shared on Instagram, and it backs the launch with billboards and TV.`,
          outcome: `In December 2019 more than 1.2 million posts on Twitter discussed Wrapped; the campaign won several Webby Awards in 2020, and its release has historically coincided with a jump in app-store ranking. Apple Music, YouTube Music and others launched similar recaps.`,
          lesson: `A creative idea that customers share about themselves scales at near-zero media cost. The asset was data the company already had; the creativity was in packaging it as identity.`
        },
        {
          type: 'case', company: 'Costco', year: '1985–2025', title: 'An iconic price as a brand promise',
          situation: `Costco's positioning is member value: low margins, quality goods, trust. A promise like "great value" is abstract and easy for rivals to claim.`,
          decision: `It has kept its hot dog and soda combo at $1.50 for 40 years, and its Kirkland Signature own label aims to give members roughly 15–20% better value than national brands at equal or better quality.`,
          outcome: `In fiscal 2025 Costco sold 245 million hot dog and soda combos and 157 million rotisserie chickens, and reported its 15th consecutive quarter of rising member satisfaction scores.`,
          lesson: `One visible, unchanging proof point makes an abstract promise concrete and talked about. (The membership-fee side of this story is in <a href="#/lesson/pricing-6">Pricing, lesson 6</a>.)`
        },
        {
          type: 'framework', name: 'Three creativity methods for B2C teams', when: 'When you need a campaign, a new product moment or a store concept',
          steps: [
            { label: 'Constraint-based ideation', desc: 'Set a hard limit: "zero media budget", "only things we already own", "one item under ₹50". Constraints force original ideas — Wrapped used only existing data.' },
            { label: 'Steal like an artist (cross-industry)', desc: 'Borrow a mechanic from another industry: a gym borrows video-game streaks, a café borrows airline status tiers, a grocer borrows the magazine format for a product newsletter.' },
            { label: 'Reverse assumptions', desc: 'List what every rival assumes (big range, constant discounts, heavy ads) and flip one: tiny range, no discounts, no ads. Trader Joe\'s and Costco both win partly by reversing category norms.' }
          ]
        },
        {
          type: 'cycle', title: 'The shareable-moment loop', center: 'Word of mouth',
          steps: [
            { label: 'Design a moment', desc: 'A ritual, surprise, recap or iconic item tied to the brand promise.' },
            { label: 'Make it easy to share', desc: 'Story-sized visuals, a hashtag, a photo spot in store.' },
            { label: 'Customers post', desc: 'Their friends see it from a trusted source.' },
            { label: 'New customers try', desc: 'Lower acquisition cost than paid ads.' },
            { label: 'Learn and refresh', desc: 'Measure shares and sign-ups; keep the format, refresh the content yearly.' }
          ]
        },
        {
          type: 'interactive', widget: 'viral-loop', title: 'How far can word of mouth carry you?',
          note: 'Set invites per user and conversion per invite. Find the K-factor at which referrals alone keep growing your base, then compare with a realistic K of 0.3.'
        },
        {
          type: 'scenario',
          prompt: `Your 15-outlet café chain has a ₹10 lakh marketing budget for the festive season. Which idea best builds the brand?`,
          options: [
            { text: 'Spend it all on a 30% discount across all items for two weeks.', feedback: 'Discounts lift short-term traffic but teach customers to wait for deals and say nothing about the brand.', good: false },
            { text: 'Create a limited festive drink with a story, a collectible cup and an in-store photo spot; give regulars early access via the loyalty app.', feedback: 'Strong: a product moment that is shareable, rewards loyal customers and reinforces the brand without cutting price.', good: true },
            { text: 'Run generic TV ads saying "best coffee in town".', feedback: 'Expensive, unprovable and unlikely to be remembered against bigger brands.', good: false }
          ]
        },
        {
          type: 'questions', title: 'Ask before you launch a campaign or brand idea',
          items: [
            { q: 'What single promise should a customer repeat about us?', why: 'If the team cannot say it in one line, customers will not remember it.' },
            { q: 'Where will customers experience proof of the promise every visit?', why: 'Advertising that the product does not back up destroys trust.' },
            { q: 'Would customers share this without being paid?', why: 'Shareability multiplies reach at near-zero cost.' },
            { q: 'Which rival assumption are we reversing?', why: 'Doing what everyone does makes you invisible.' },
            { q: 'Does this idea attract the segment we want, or only deal-seekers?', why: 'Creative that pulls the wrong customers raises churn.' },
            { q: 'How will we measure brand effect (searches, direct traffic, repeat), not just clicks?', why: 'Brand building shows up over months; last-click metrics undervalue it.' }
          ]
        }
      ],
      terms: [
        { term: 'Brand promise', def: 'The single benefit a brand commits to deliver every time, in words a customer can repeat.' },
        { term: 'Proof point', def: 'A concrete, visible fact that makes the promise believable, such as an iconic price or delivery time.' },
        { term: 'User-generated content (UGC)', def: 'Posts, photos and reviews created by customers rather than the company.' },
        { term: 'K-factor', def: 'New users generated per existing user through invites or sharing; above 1 means self-sustaining growth.' },
        { term: 'Experience design', def: 'Deliberately shaping every moment of the customer journey — space, staff, product and digital.' },
        { term: 'Constraint-based ideation', def: 'Generating ideas under deliberate limits to force originality.' }
      ],
      quiz: [
        { q: 'What made Spotify Wrapped cheap to scale?', options: ['Paid influencers only', 'It replaced the app', 'It was sold as a product', 'Customers shared their own results'], answer: 3, explain: 'Users posted their own recaps, so reach came mostly from free sharing.' },
        { q: 'Costco\'s $1.50 hot dog combo mainly works as...', options: ['A profit centre', 'A visible proof of the value promise', 'A regulatory requirement', 'An employee perk'], answer: 1, explain: 'An unchanging iconic price makes "member value" concrete and memorable.' },
        { q: 'Which is an example of "reverse assumptions"?', options: ['Adding more SKUs like rivals', 'Running bigger discounts than rivals', 'Selling a tiny range with no promotions in a category built on range and deals', 'Copying a competitor\'s logo'], answer: 2, explain: 'Flipping a category norm (range, discounts) is reverse-assumption thinking.' },
        { q: 'If each user sends 4 invites and 10% convert, what is K?', options: ['0.4', '0.04', '4', '40'], answer: 0, explain: 'K = 4 × 0.10 = 0.4: each user brings 0.4 new users.' },
        { q: 'Which metric best captures brand effect over time?', options: ['Last-click conversions only', 'Direct and branded search traffic plus repeat rate', 'Number of ads run', 'Follower count alone'], answer: 1, explain: 'Brand shows up as people seeking you out directly and returning.' }
      ],
      challenge: {
        title: 'Create a "Wrapped" for a non-tech business',
        prompt: `<p>You run a 25-outlet sandwich chain with a loyalty app used by 120,000 members. Average member visits 3 times a month. Marketing budget for December is ₹6 lakh.</p><p>Use one creativity method to design a shareable year-end idea. Estimate reach if 15% of members open the recap, 20% of openers share it, each share reaches 150 people and 1% of viewers visit. What would one new customer need to be worth to justify ₹6 lakh?</p>`,
        hints: ['Steal the mechanic from Spotify: what data do you already have about each member?', 'Chain the percentages: members → openers → sharers → views → visits.'],
        model: `<p><b>Idea (steal like an artist):</b> "Your Sandwich Year" — each member gets a story-format recap: favourite sandwich, total visits, "you are in the top 5% of chutney lovers", the outlet they visit most, and a badge. Final card: a code giving a friend a free side on first visit.</p><p><b>Reach maths:</b> 120,000 × 15% = 18,000 open; × 20% = 3,600 share; × 150 = 540,000 views; × 1% = <b>5,400 visits</b> from new or lapsed customers.</p><p><b>Value:</b> ₹6 lakh ÷ 5,400 ≈ <b>₹111 per new visitor</b>. If a sandwich visit earns ₹90 contribution and 25% of visitors become regulars worth ₹2,000 a year in contribution, expected value per visitor ≈ 90 + 0.25 × 2,000 = ₹590 — well above ₹111.</p><p><b>Recommendation:</b> run it, spend most of the budget on design and in-store screens rather than media, and track redeemed friend codes to measure true effect.</p>`
      },
      takeaways: [
        'A B2C brand is a promise proved at every touchpoint and repeated consistently.',
        'Iconic proof points (a fixed price, a delivery time, a recap) make abstract promises memorable.',
        'Use constraint-based ideation, cross-industry borrowing and reverse assumptions to find original ideas.',
        'Design moments customers share; measure brand through direct demand and repeat, not just clicks.'
      ],
      sources: [
        { title: 'Wikipedia — Spotify Wrapped (history, formats and reception, with cited press)', url: 'https://en.wikipedia.org/wiki/Spotify_Wrapped' },
        { title: 'Retail Insider — Costco Q4 fiscal 2025 earnings review', url: 'https://retail-insider.com/retail-insider/2025/09/costco-wholesale-corp-4th-q-fiscal-2025-earnings-review-commentary-bruce-winder' },
        { title: 'HBS Digital Initiative — Trader Joe\'s operating model', url: 'https://d3.harvard.edu/platform-rctom/submission/trader-joes-using-operations-to-support-a-distinct-value-proposition/' },
        { title: 'YourStory — Chai Point café format and loyalty face-recognition billing (2018)', url: 'https://yourstory.com/2018/06/chai-point-forays-cafe-format-100th-store-bengaluru' }
      ]
    },

    /* ================================================================== 8 */
    {
      id: 'pb-b2c-8',
      title: 'Scaling: clusters, franchising, dark stores, funding — and how B2C companies fail',
      level: 'Advanced',
      minutes: 18,
      hook: `Scaling B2C is copying a winning box hundreds of times — and every copy also copies its flaws.`,
      eli5: `If your lemonade stand works on one street, you might open stands on the next five streets so one delivery bike can serve all of them. Later, friends in other towns might run stands under your name and pay you a share. But if your lemonade only tasted good because you made it yourself, every new stand will disappoint. Scaling means making the recipe, not the founder, do the work.`,
      blocks: [
        {
          type: 'compare', title: 'Four ways to scale a B2C business', headers: ['Route', 'How it works', 'Best when', 'Watch out for'],
          rows: [
            ['Company-owned clusters', 'Open many owned sites close together in one city before moving on', 'Unit economics are proven; you want control and shared costs (kitchen, riders, marketing)', 'Capital-hungry; cannibalisation between nearby sites'],
            ['Franchising', 'Partners invest in and run sites under your brand; you earn fees and royalties', 'Format is simple and documented; you want fast reach with less capital', 'Quality control, partner selection, disclosure rules (see <a href="#/lesson/scaling-6">Scaling, lesson 6</a>)'],
            ['Master franchise / licensing', 'One partner gets rights to a whole country or region', 'Entering distant markets with local expertise', 'Dependence on one partner\'s execution'],
            ['Digital and asset-light', 'App, delivery-only kitchens, dark stores, marketplaces', 'Demand is online and dense; tech advantage', 'Cash burn, regulation, platform fees']
          ]
        },
        {
          type: 'timeline', title: 'A typical B2C scaling path',
          items: [
            { label: 'Prove 1', desc: 'One site or one app version with positive contribution and strong repeat.' },
            { label: 'Repeat 3–5', desc: 'Same city, different micro-markets; write the playbook; hire site managers.' },
            { label: 'Cluster 20–50', desc: 'Dense city clusters; central kitchen or warehouse; brand awareness compounds.' },
            { label: 'Multi-city', desc: 'Regional managers, systems, data; choose owned vs franchise per market.' },
            { label: 'National / international', desc: 'Franchise partners or master franchisees; public markets or large funding.' }
          ]
        },
        {
          type: 'case', company: 'Jubilant FoodWorks (Domino\'s India)', year: 'FY25', title: 'Scaling a master franchise through density and new markets',
          situation: `Jubilant FoodWorks holds the master franchise for Domino's in India and has added other brands such as Dunkin' Donuts. Its network strategy relies on dense city clusters that support fast delivery.`,
          decision: `In FY25 it added 208 outlets across brands in India to reach 2,304, and took a controlling stake in DP Eurasia, which runs Domino's in Turkiye, Azerbaijan and Georgia.`,
          outcome: `The group ended FY25 with 3,316 stores. India revenue grew 14.3% to about ₹6,105 crore, while consolidated net profit fell to about ₹217 crore from ₹400 crore, with the company noting that the new structure made results not directly comparable.`,
          lesson: `Clustering owned stores builds delivery speed and brand presence. Acquisitions add reach quickly but bring integration costs and can dilute near-term profit.`
        },
        {
          type: 'case', company: 'Swiggy', year: '2024', title: 'Going public to fund quick-commerce scale',
          situation: `Swiggy, a food-delivery and quick-commerce platform, had FY24 operating revenue of about ₹11,247 crore and a loss of about ₹2,350 crore (down 44%). A Finshots analysis cited quick commerce (Instamart) as the source of most of its EBITDA losses.`,
          decision: `It listed in November 2024 with an IPO of about ₹11,327 crore, of which ₹4,499 crore was fresh capital. About ₹1,179 crore was earmarked for dark-store expansion and lease payments and about ₹1,115 crore for brand marketing.`,
          outcome: `Public markets funded the dark-store race against Blinkit and Zepto. The prospectus flagged ongoing losses, dependence on cost-effective customer acquisition and the need to manage dark stores well.`,
          lesson: `B2C scale races are capital races. Public money buys time, but the per-order and per-store economics from lesson 6 still decide who survives.`
        },
        {
          type: 'pyramid', title: 'What must be in place before scaling (build bottom-up)',
          levels: [
            { label: 'Funding and governance', note: 'Fuel and brakes', desc: 'Capital matched to payback periods; a board, audited accounts and controls before big money arrives.' },
            { label: 'Systems and data', note: 'See every box', desc: 'Daily dashboards per site and per cohort; standard tech across locations.' },
            { label: 'People engine', note: 'Managers who can run sites', desc: 'Hiring, training and incentive systems that produce good site managers repeatedly.' },
            { label: 'Documented playbook', note: 'Recipe, not founder', desc: 'Operating manuals, recipes, layouts and service standards that work without the founder.' },
            { label: 'Proven unit economics', note: 'The foundation', desc: 'Positive contribution per order and four-wall EBITDA at mature sites, with known ramp-up time.' }
          ]
        },
        {
          type: 'map', title: 'How B2C companies fail at scale', center: 'Scaling failure',
          branches: [
            { label: 'Scaling a loss', desc: 'Expanding before the unit is profitable, so growth multiplies losses (Dunzo in quick commerce).', children: ['Negative contribution', 'Discount-led growth'] },
            { label: 'Governance gaps', desc: 'Weak controls, delayed accounts and debt taken on for growth (Byju\'s, see the case library).', children: ['Audit issues', 'Over-leverage'] },
            { label: 'Quality dilution', desc: 'New sites or franchisees cannot match the original experience; reviews and repeat fall.', children: ['Inconsistent service', 'Bad partners'] },
            { label: 'Cannibalisation', desc: 'New stores steal sales from old ones instead of adding demand.', children: ['Overlapping catchments'] },
            { label: 'Fixed-cost trap', desc: 'Long leases and big teams locked in before demand is proven.', children: ['Lease escalation', 'Overhiring'] }
          ]
        },
        {
          type: 'interactive', widget: 'runway', title: 'How long does the money last while you scale?',
          note: 'Enter cash raised, monthly burn and revenue growth. Then slow growth by half and see how many months of runway disappear — the reason scaling plans need a buffer.'
        },
        {
          type: 'questions', title: 'Ask before you scale to the next city or raise the next round',
          items: [
            { q: 'Are mature sites or cohorts profitable without discounts?', why: 'Scaling multiplies whatever the unit does, good or bad.' },
            { q: 'Can a new manager run a site from the playbook within 60 days?', why: 'If not, the founder is still the system, and growth will stall or quality will drop.' },
            { q: 'Owned cluster or franchise for this market — and why?', why: 'The choice trades control and margin against capital and speed.' },
            { q: 'Will a new site add demand or steal it from existing ones?', why: 'Overlapping catchments can lower total profit even as store count rises.' },
            { q: 'Is our funding matched to the payback period of new sites?', why: 'Funding 3-year paybacks with 18 months of runway forces distress decisions.' },
            { q: 'Are governance and audits ready for the money we are raising?', why: 'Many B2C collapses started with controls that lagged growth.' }
          ]
        }
      ],
      terms: [
        { term: 'Cluster strategy', def: 'Opening many sites close together in one area to share costs and build density before expanding elsewhere.' },
        { term: 'Master franchise', def: 'A licence giving one partner the right to develop a brand across a whole country or region.' },
        { term: 'Royalty', def: 'An ongoing fee, usually a percentage of sales, paid by a franchisee to the brand owner.' },
        { term: 'Cannibalisation', def: 'When a new site or product takes sales from your existing ones rather than from rivals.' },
        { term: 'Fresh issue vs offer for sale', def: 'In an IPO, a fresh issue raises new money for the company; an offer for sale lets existing shareholders sell.' },
        { term: 'Runway', def: 'Months of operation the current cash can fund at the present burn rate.' }
      ],
      quiz: [
        { q: 'Which scaling route needs the least capital from the brand owner?', options: ['Company-owned clusters', 'Building flagship stores', 'Franchising', 'Opening a central kitchen'], answer: 2, explain: 'Franchisees invest in and run the sites; the brand earns fees and royalties.' },
        { q: 'Swiggy\'s IPO raised about ₹11,327 crore, of which ₹4,499 crore was fresh issue. The rest went to...', options: ['The company for dark stores', 'Debt repayment only', 'Government taxes', 'Existing shareholders selling shares'], answer: 3, explain: 'The offer-for-sale portion goes to selling shareholders, not the company.' },
        { q: 'What should be in place first before scaling?', options: ['National TV campaign', 'Proven unit economics at mature sites', 'International franchise deals', 'A large head office'], answer: 1, explain: 'Everything else multiplies the unit; it must work first.' },
        { q: 'A chain has cash of ₹30 crore and burns ₹2.5 crore a month. Runway?', options: ['12 months', '6 months', '18 months', '75 months'], answer: 0, explain: '30 ÷ 2.5 = 12 months.' },
        { q: 'Jubilant\'s FY25 profit fell while store count and revenue rose. A likely reason given in the case?', options: ['It closed all Indian stores', 'An acquisition changed the group structure and costs', 'Pizza became illegal', 'It stopped delivery'], answer: 1, explain: 'Taking control of DP Eurasia changed the structure and made results not directly comparable.' }
      ],
      challenge: {
        title: 'Owned cluster or franchise for a café brand\'s next 50 sites?',
        prompt: `<p>A café brand has 30 owned sites in one city. Mature site: sales ₹14 lakh/month, four-wall EBITDA 18%, capex ₹45 lakh. A franchise model would charge a 6% royalty on sales plus a ₹10 lakh upfront fee; franchisees fund capex. The brand would need ₹1.5 crore a year extra in support staff to manage franchisees.</p><p>For 50 new sites, compare annual profit to the brand and capital needed under (A) owned cluster expansion in two new cities and (B) franchising. Recommend a mix.</p>`,
        hints: ['Owned: profit = 50 × monthly EBITDA × 12; capital = 50 × capex.', 'Franchise: royalty income = 50 × sales × 6% × 12, minus support costs; upfront fees are one-off.'],
        model: `<p><b>A. Owned.</b> EBITDA per site = 14 × 18% = ₹2.52 lakh/month → ₹30.24 lakh/year. For 50 sites: <b>₹15.1 crore a year</b>. Capital: 50 × ₹45 lakh = <b>₹22.5 crore</b> (payback about 18 months per site at maturity).</p><p><b>B. Franchise.</b> Royalty per site = 14 × 6% = ₹0.84 lakh/month → ₹10.08 lakh/year. For 50: ₹5.04 crore − ₹1.5 crore support = <b>₹3.54 crore a year</b>, plus one-off fees of 50 × ₹10 lakh = ₹5 crore. Capital needed by the brand: close to zero.</p><p><b>Trade-off.</b> Owned earns about four times more profit per year but needs ₹22.5 crore and slower rollout. Franchise is capital-light but cedes margin and control over quality.</p><p><b>Recommendation:</b> a hybrid. Build owned clusters (say 20 sites) in the one or two largest new cities where density and brand matter most, funded by existing cash flow plus modest debt; franchise 30 sites in smaller cities to experienced multi-unit operators with strict audits. Re-check that mature-site EBITDA holds above 15% in new cities before accelerating.</p>`
      },
      takeaways: [
        'Scale only what works: positive unit economics, a documented playbook and a manager engine come first.',
        'Choose owned clusters, franchising, master franchise or digital models per market, trading control against capital.',
        'Fund expansion to match payback periods and build governance before big money arrives.',
        'Most B2C failures are scaled losses, quality dilution, cannibalisation, fixed-cost traps or governance gaps.'
      ],
      sources: [
        { title: 'Franchise India — Jubilant FoodWorks FY25 results and store count', url: 'https://www.franchiseindia.com/insights/en/news/jubilant-foodworks-posts-49-cr-profit-in-q4-adds-325-stores-in-fy25.56465' },
        { title: 'Zerodha — Swiggy IPO details, use of proceeds and risks', url: 'https://zerodha.com/ipo/389561/swiggy/' },
        { title: 'Hindustan Times / Reuters — How Byju\'s went from startup star to facing insolvency (2024)', url: 'https://www.hindustantimes.com/education/explainer-how-byjus-went-from-startup-star-to-facing-insolvency-101723637743894.html' },
        { title: 'Inc42 — Dunzo\'s quick commerce folly', url: 'https://inc42.com/features/dunzos-quick-commerce-folly' },
        { title: 'YourStory — Cult.fit files draft IPO papers (2026)', url: 'https://yourstory.com/2026/07/cultfit-files-draft-ipo-papers-rs-950-crore-fresh-issue' }
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-pb-spotify-free-tier',
    company: 'Spotify',
    industry: 'Consumer subscription / music streaming',
    year: '2025',
    track: 'pb-b2c',
    title: 'Keep a free tier that earns a fraction of a paying user?',
    situation: `<p>In Q2 2025 Spotify had 696 million monthly active users. 433 million used the free, ad-supported tier and 276 million paid for Premium. Premium revenue was about €3.74 billion in the quarter at a 33.1% gross margin, with average revenue per Premium user of €4.57 a month. Advertising revenue was €453 million at an 18.3% gross margin — roughly €0.35 per free user per month.</p><p>Some investors argue the free tier dilutes margins and that a paywall would force more people to pay.</p>`,
    question: 'You are Spotify\'s head of consumer strategy. What do you do with the free tier?',
    options: [
      { text: 'Shut the free tier and require Premium for everyone.', result: 'Short-term revenue per user rises, but the top of the funnel collapses: future payers no longer get a free habit-forming trial, and rivals with free offers capture them.', best: false },
      { text: 'Keep the free tier as the main acquisition funnel, improve ad monetisation and design clear upgrade moments into Premium and other tiers.', result: 'Preserves reach and habit formation while steadily converting users whose payer value is many times their ad value; ad improvements narrow the margin gap.', best: true },
      { text: 'Keep the free tier exactly as it is and focus only on Premium price rises.', result: 'Price rises without better conversion and ad yield risk churn while leaving the biggest lever — free-to-paid conversion — untouched.', best: false }
    ],
    whatHappened: `<p>Spotify has continued to run freemium with both an ad-supported tier and Premium. In Q2 2025, with 433 million ad-supported users alongside 276 million subscribers, it reported operating income of €406 million for the quarter — evidence that the two-tier model can be profitable while keeping a free entry point.</p>`,
    lessons: ['In freemium B2C, the free tier is a funnel and a habit builder, not just a revenue line.', 'Track payers and free users as separate businesses with separate margins.', 'Conversion and upgrade design often beat both price rises and paywalls.'],
    frameworks: ['Freemium economics', 'Blended ARPU', 'Customer lifetime value']
  },
  {
    id: 'case-pb-blinkit-inventory',
    company: 'Blinkit (Eternal)',
    industry: 'Quick commerce',
    year: '2025',
    track: 'pb-b2c',
    title: 'Switch a quick-commerce marketplace to owning inventory?',
    situation: `<p>By June 2025 Blinkit ran 1,544 dark stores after adding 243 in a single quarter, with net order value of about ₹9,203 crore that quarter and an adjusted EBITDA loss of about ₹162 crore (roughly −1.8% of order value). Average order value was around ₹521. Some mature cities already showed adjusted EBITDA above 2.5% of order value.</p><p>Until then, much of the stock in its stores was owned by third-party sellers, with Blinkit earning commissions and fees. The Arc reported that foreign-owned rivals face stricter foreign-investment rules on holding e-commerce inventory, a constraint that shapes which models each player can run. Owning stock would mean more working capital and wastage risk.</p>`,
    question: 'You are Blinkit\'s CEO. Do you move to an inventory-led model?',
    options: [
      { text: 'Stay a pure marketplace to keep the balance sheet light.', result: 'Keeps working capital low but leaves procurement margin, pricing control and fill-rate improvements on the table while rivals optimise.', best: false },
      { text: 'Move to owning inventory over a few quarters, working directly with brands, while tightening wastage controls and continuing dense store expansion.', result: 'Captures better procurement economics (management expected about one point of contribution margin) and end-to-end control, at the cost of more working capital and inventory risk.', best: true },
      { text: 'Pause store openings until the business is profitable, then decide.', result: 'Protects cash short-term but cedes density — the main driver of delivery speed and order growth — to competitors in a land-grab market.', best: false }
    ],
    whatHappened: `<p>In Q1 FY26 Eternal announced the shift to inventory ownership over the next two to three quarters and said it expected to work directly with brands without disruption. Blinkit's CEO said margins appeared to have bottomed out, targeted 2,000 stores by December 2025 and a long-term adjusted EBITDA margin of 5–6% of order value. Revenue began to look much closer to order value as the transition progressed.</p>`,
    lessons: ['Owning inventory trades capital and risk for margin and control.', 'In quick commerce, density and fill rate are the operating moat.', 'Regulatory structure can open or close business-model options.'],
    frameworks: ['1P vs 3P models', 'Contribution margin per order', 'Working capital']
  },
  {
    id: 'case-pb-dominos-20min',
    company: 'Domino\'s India (Jubilant FoodWorks)',
    industry: 'Quick-service restaurants',
    year: '2022',
    track: 'pb-b2c',
    title: 'Promise 20-minute pizza delivery?',
    situation: `<p>Domino's India, run by master franchisee Jubilant FoodWorks, built its brand on the 30-minute delivery promise. By 2022 food-delivery apps had made fast delivery from many restaurants normal, and quick-commerce apps were training consumers to expect 10–20 minutes for groceries.</p><p>A faster promise could lift frequency and satisfaction, but it needs stores close to demand, faster kitchens and safe rider operations.</p>`,
    question: 'You are Jubilant\'s CEO. How do you respond?',
    options: [
      { text: 'Announce 20-minute delivery nationally, everywhere, at once.', result: 'Big headlines, but many stores are too far from customers; missed promises and pressure on riders damage trust and raise safety concerns.', best: false },
      { text: 'Launch 20-minute delivery zone by zone where store density supports it, backed by kitchen process changes, analytics and new stores in each vicinity.', result: 'Delivers the promise reliably where it is feasible, creates a growth reason to add stores, and scales as density rises.', best: true },
      { text: 'Keep 30 minutes; speed does not matter for pizza.', result: 'Protects operations short-term but lets aggregators and rivals redefine the category expectation.', best: false }
    ],
    whatHappened: `<p>On 20 December 2022 Domino's announced 20-minute delivery across 20 zones in 14 cities, citing optimised in-store processes, dynamic resource planning, technology upgrades and more stores within each vicinity, while stressing rider safety. Domino's global CEO said India was its largest market outside the US. Jubilant continued expanding its network, reaching 2,304 stores across brands in India by FY25.</p>`,
    lessons: ['A delivery promise is only as good as store density in each zone.', 'Roll out operational promises where they can be kept, then expand.', 'Speed promises can justify network investment that also deepens a moat.'],
    frameworks: ['Service promise design', 'Cluster strategy', 'Operations capacity']
  },
  {
    id: 'case-pb-chai-point-channels',
    company: 'Chai Point',
    industry: 'Beverage retail / QSR',
    year: '2018',
    track: 'pb-b2c',
    title: 'More stores, cafés or tea dispensers in offices?',
    situation: `<p>Chai Point started in 2010 with on-the-go outlets in Bengaluru tech parks targeting white-collar workers, then added delivery. By 2018 it had stores in Bengaluru, Hyderabad, Pune, Mumbai and Delhi, saw in-store regulars visit two to three times a week and reported 50–70% repeat online orders a month. It claimed India's tea market was worth about ₹1.5 lakh crore.</p><p>In April 2018 it raised a $20 million Series C. Options included opening many more kiosks, shifting to larger sit-down cafés, or investing in boxC, its automated hot-beverage dispensers placed inside offices. Peak tea times overlap with traffic jams, which makes stopping at a store harder for commuters.</p>`,
    question: 'You are the CEO. Where do you put the new money?',
    options: [
      { text: 'Put almost all of it into hundreds of new kiosks.', result: 'Grows visibility, but each kiosk carries rent and staff, and commute-time friction caps how often office workers stop.', best: false },
      { text: 'Convert the network to large sit-down cafés.', result: 'Raises experience and average ticket but adds heavy rent and capex per site and moves away from the high-frequency on-the-go habit.', best: false },
      { text: 'Build a multi-channel model: invest heavily in office dispensers (boxC) where the customer already is, keep selective stores, and test a café format for experience and loyalty.', result: 'Places the product at the point of habit inside offices with low per-site fixed cost, while stores and cafés keep the brand visible.', best: true }
    ],
    whatHappened: `<p>Chai Point directed a substantial portion of the Series C into sales, marketing and service for boxC, calling it the next growth driver. In June 2018 it opened its 100th store in Bengaluru as its first café format, with Wi-Fi, food pairings and face-recognition billing for its loyalty programme. It said it was selling close to 0.3 million cups a day across stores, delivery and dispensers.</p>`,
    lessons: ['Go to where the habit happens: channel placement can matter more than store count.', 'Mixing low-fixed-cost channels with flagship stores balances reach and brand.', 'Repeat frequency data should guide channel investment.'],
    frameworks: ['Channel strategy', 'Jobs-to-be-done', 'Operating leverage']
  }
]);
