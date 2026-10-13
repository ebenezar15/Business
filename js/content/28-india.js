/* MBA Studio — Track 28: India Business Lens */
MBA.addTrack({
  id: 'india',
  stage: 5,
  order: 28,
  title: 'India Business Lens',
  icon: '🛺',
  color: '#ea580c',
  tagline: 'Build, fund and sell in the world\'s most populous market',
  summary: `Understand how India\'s economy and consumers really work, set up and run a company the right way, handle GST, build on India Stack, raise money in the Indian startup ecosystem, learn from India\'s great family businesses and take products to Bharat beyond the big cities. Numbers use ₹ with lakh and crore, with rough dollar conversions.`,
  outcomes: [
    'Segment Indian consumers by income, city tier and formality, and size a market in lakh and crore',
    'Choose between Pvt Ltd, LLP, OPC and proprietorship and plan Companies Act compliance',
    'Explain how GST and input tax credit work and calculate a monthly GST liability',
    'Use Aadhaar, UPI, DigiLocker, Account Aggregator, ONDC and OCEN to cut cost and reach customers',
    'Navigate Indian venture funding, ESOP taxation, flipping and reverse flipping, and new-age IPOs',
    'Design family-business governance and a go-to-market plan for Bharat'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'india-1',
      title: 'India\'s economy and consumer: tiers, the informal sector and the demographic dividend',
      level: 'Beginner',
      minutes: 14,
      hook: `"1.4 billion customers" is the most expensive mistake in Indian business plans — the real market is far smaller, far more varied and far more interesting.`,
      eli5: `Imagine a giant school with 1,400 students. A few hundred have big pocket money and buy snacks every day. Many more have a little money and buy a small snack sometimes. The rest mostly bring food from home. If you open a snack stall and assume all 1,400 will buy your fancy ₹200 sandwich, you will fail. But if you sell a ₹10 snack the middle group loves, you might do very well. India is like that school — very big, but in layers.`,
      blocks: [
        {
          type: 'text', title: 'The big picture',
          html: `<p>India became the world\'s most populous country in 2023 (about 1.4 billion people) and its economy is around <b>$4 trillion</b>, among the five largest in the world. But divided by population, income per person is still only around <b>$2,700–2,900</b> a year — a lower-middle-income country.</p><p>Three features shape almost every business decision:</p><ul><li><b>Services-led growth:</b> IT, finance and other services are a large share of output, while agriculture still employs a large share of workers (around two-fifths) but produces a much smaller share of GDP.</li><li><b>A huge informal sector:</b> most workers do not have formal contracts, payslips or social security.</li><li><b>Deep variety:</b> 28 states and 8 union territories, 22 scheduled languages and wide income gaps between and within states.</li></ul>`
        },
        {
          type: 'callout', kind: 'tip', title: 'Lakh and crore in 30 seconds',
          html: `<ul><li><b>1 lakh</b> = 1,00,000 = one hundred thousand ≈ $1,140</li><li><b>1 crore</b> = 1,00,00,000 = 100 lakh = ten million ≈ $114,000</li><li><b>₹100 crore</b> = one billion rupees ≈ $11.4 million</li><li><b>₹1 lakh crore</b> = one trillion rupees ≈ $11.4 billion</li></ul><p>Indians write commas in pairs after the first thousand: 12,34,56,789 = 12 crore 34 lakh 56 thousand 789. Dollar figures in this track use roughly <b>₹88 per $</b> — the rate moves, so treat conversions as approximate.</p>`
        },
        {
          type: 'framework', name: 'India 1, India 2, India 3', by: 'A consumer-class lens popularised by Indian venture investors', when: 'Before choosing your price point, channel and message',
          steps: [
            { label: 'India 1 — the affluent consumer class', desc: 'Roughly the top tenth of the population (on one widely cited VC estimate, about 12–14 crore people). Buys premium brands, subscriptions, travel, investments. Most venture-backed consumer startups sell here first.' },
            { label: 'India 2 — the aspirers', desc: 'A larger group with smartphones and UPI who buy selectively: value fashion, small-ticket credit, entertainment, upgraded staples. Very price-sensitive but digitally active.' },
            { label: 'India 3 — the struggling majority', desc: 'Close to a billion people with limited discretionary income. Reached by FMCG sachets, government schemes, basic telecom and payments — rarely profitable for venture-style models.' },
            { label: 'So what?', desc: 'Pick one segment and design for it: price, pack size, channel, language and trust signals all change between segments. "All of India" is not a target market.' }
          ]
        },
        {
          type: 'compare', title: 'City tiers at a glance', headers: ['', 'Tier 1 (metros)', 'Tier 2', 'Tier 3 and rural'],
          rows: [
            ['Examples', 'Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Pune, Kolkata', 'Jaipur, Lucknow, Indore, Coimbatore, Kochi, Nagpur', 'Smaller towns and villages'],
            ['Typical shopping', 'Modern retail, quick commerce, premium online brands', 'Mix of kiranas, malls and e-commerce; fast-growing online', 'Kiranas, weekly haats, assisted and social commerce'],
            ['Language', 'English plus regional language', 'Regional language dominant online', 'Regional language almost entirely'],
            ['Payment', 'UPI, cards, buy-now-pay-later', 'UPI; cash on delivery common online', 'UPI growing fast; cash still important'],
            ['Cost to serve', 'Lowest per order (dense)', 'Medium', 'Highest per order; needs local partners']
          ]
        },
        {
          type: 'formula', name: 'Dependency ratio and the demographic dividend',
          expr: 'Dependency ratio = (People aged 0–14 + people aged 65+) ÷ People aged 15–64',
          explain: `A <b>demographic dividend</b> is the growth boost a country gets when its working-age share is high and the dependency ratio is falling — more earners per dependant. India\'s median age is under 30 and its working-age share is projected to keep rising for roughly the next two decades. But the dividend is only an <i>opportunity</i>: it pays off only if people find productive jobs. Female labour-force participation has historically been low, although recent surveys show it rising.`,
          example: `<i>Illustrative.</i> In a town of 100 people with 25 children, 7 elderly and 68 working-age adults: (25 + 7) ÷ 68 = <b>47%</b> — 47 dependants per 100 workers. If 10 more of those adults move from unpaid or informal work into productive jobs, output per person rises even though the population did not change.`
        },
        {
          type: 'text', title: 'The informal sector and formalisation',
          html: `<p>Most Indian workers are informal: small shops, farms, construction, self-employment. Many businesses are tiny, cash-heavy and outside the tax net. For a company this means <b>opaque data, weak credit histories and hard-to-reach customers</b>.</p><p>Several forces have been pulling activity into the formal, recorded economy: <b>Jan Dhan</b> bank accounts (over 50 crore opened since 2014), <b>GST</b> (2017) linking businesses through invoices, <b>UPI</b> payments leaving a digital trail, and <b>Udyam</b> registration for small firms. Formalisation creates markets for accounting software, credit, payroll and insurance — but it also squeezes small firms that relied on staying invisible.</p>`
        },
        {
          type: 'case', company: 'Demonetisation', year: 'November 2016', title: 'An overnight shock to a cash economy',
          situation: `On 8 November 2016 the government withdrew the legal-tender status of ₹500 and ₹1,000 notes — about 86% of the currency in circulation by value — with the stated aims of fighting black money, counterfeiting and corruption, and pushing digital payments.`,
          decision: `People had to deposit or exchange old notes within weeks while new notes were printed and distributed. Cash ran short for some time.`,
          outcome: `Nearly all the withdrawn currency came back into banks, according to the RBI, which undercut the black-money goal. Cash-dependent informal businesses were hit hard in the short run. Digital payments got a lasting boost: wallets surged immediately, and UPI — launched only months earlier — gained awareness and momentum.`,
          lesson: `In India, policy can reshape markets overnight. Businesses serving cash-heavy segments need contingency plans, and policy shocks can also open the door for new behaviours (here, digital payments).`
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Size an Indian market properly',
          note: 'Start from households in your target segment, not total population. Try 3 crore India 1 households with ₹2,400 a year of spend, then cut to the share that fits your product.'
        },
        {
          type: 'scenario',
          prompt: `Your premium cold-pressed juice (₹180 a bottle) sells well in Bengaluru and Mumbai. Investors push you to "go national" across 50 cities next year. What do you do?`,
          options: [
            { text: 'Launch in 50 cities at the same price — India is huge.', feedback: 'Your buyers are India 1, concentrated in metros. In many tier-2 cities the addressable base at ₹180 is small and cold-chain costs are high.', good: false },
            { text: 'Map India 1 density city by city, expand to the 8–10 cities with enough target households and cold-chain partners, and test a smaller, cheaper pack for India 2.', feedback: 'Correct. Expand where your segment lives, and use a pack-size or price-point experiment to learn whether a second segment is worth chasing.', good: true },
            { text: 'Cut the price to ₹40 everywhere to reach the mass market.', feedback: 'A cold-pressed product cannot be made profitably at ₹40, and you would confuse your premium brand.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Lakh / crore', def: 'Indian units: 1 lakh = 100,000; 1 crore = 10 million = 100 lakh.' },
        { term: 'India 1 / 2 / 3', def: 'A segmentation of Indian consumers into the affluent class, the aspiring middle and the low-income majority.' },
        { term: 'Tier-2 / tier-3 city', def: 'Smaller cities below the metros, increasingly important for consumer growth.' },
        { term: 'Informal sector', def: 'Economic activity without formal contracts, registration or social security.' },
        { term: 'Demographic dividend', def: 'Growth potential created when the working-age share of the population is high and rising.' },
        { term: 'Dependency ratio', def: 'Children plus elderly people per working-age person.' },
        { term: 'Formalisation', def: 'The shift of firms and workers into the registered, taxed, digitally recorded economy.' }
      ],
      quiz: [
        {
          q: 'How much is ₹3.5 crore in lakh?',
          options: ['35 lakh', '3,500 lakh', '350 lakh', '0.35 lakh'],
          answer: 2,
          explain: '1 crore = 100 lakh, so 3.5 crore = 350 lakh (₹35 million).'
        },
        {
          q: 'At roughly ₹88 per $, ₹50 crore is approximately:',
          options: ['$5.7 million', '$570,000', '$57 million', '$44 million'],
          answer: 0,
          explain: '₹50 crore = ₹500 million; 500 ÷ 88 ≈ $5.7 million.'
        },
        {
          q: 'A district has 30 children, 10 elderly and 80 working-age people. What is the dependency ratio?',
          options: ['33%', '40%', '80%', '50%'],
          answer: 3,
          explain: '(30 + 10) ÷ 80 = 50% — 50 dependants per 100 working-age people.'
        },
        {
          q: 'Why is "1.4 billion customers" a poor basis for a premium product\'s market size?',
          options: ['Most Indians do not use money', 'Only a minority — mostly India 1 — can afford premium discretionary products', 'Indians do not buy brands', 'Population figures are unreliable'],
          answer: 1,
          explain: 'Purchasing power is concentrated. Size from the segment that can and will pay, not the whole population.'
        },
        {
          q: 'What was a lasting effect of the 2016 demonetisation?',
          options: ['A lasting boost to digital payments, including UPI', 'The permanent removal of most black money', 'The end of cash in India', 'A rise in the use of ₹1,000 notes'],
          answer: 0,
          explain: 'Nearly all the notes returned to banks, but the shock accelerated digital payment adoption.'
        }
      ],
      challenge: {
        title: 'Size the market for a premium protein snack',
        prompt: `You plan a ₹50 high-protein snack bar. Assume about <b>3 crore</b> India 1 households. Your research suggests 20% of them are health-conscious snackers who could buy about 4 bars a month.<br><br>(a) Calculate the serviceable market in ₹ crore and US$. (b) If you can win 3% of it in three years, what is your revenue? (c) What would you test before believing these numbers?`,
        hints: ['Households × share × bars per year × price.', '4 bars a month × 12 = 48 bars a year.', 'Every number in the chain is a guess — which one is the riskiest?'],
        model: `<p><b>(a) Serviceable market (SAM)</b></p><ul><li>Target households: 3 crore × 20% = <b>60 lakh</b></li><li>Annual spend per household: 48 bars × ₹50 = <b>₹2,400</b></li><li>SAM = 60 lakh × ₹2,400 = ₹1,440 crore ≈ <b>$164 million</b></li></ul><p><b>(b) Obtainable share (SOM):</b> 3% × ₹1,440 crore = <b>₹43.2 crore</b> a year ≈ $4.9 million.</p><p><b>(c) What to test</b></p><ul><li><b>Frequency</b> (riskiest): will people really eat 4 bars a month? Run a 4-week subscription pilot with 500 households and measure repeat purchase.</li><li><b>Price:</b> test ₹40, ₹50 and ₹60 on quick-commerce listings.</li><li><b>Segment share:</b> check the 20% with survey plus actual sell-through data in 2–3 metros.</li><li><b>Channel economics:</b> quick commerce and modern trade take margins — confirm you still make money at ₹50.</li></ul><p><b>Recommendation:</b> treat ₹43 crore as a hypothesis. Launch in 3 metros via quick commerce and D2C, measure repeat rate for 3 months, then re-size.</p>`
      },
      takeaways: [
        'India is big but layered — size markets by segment, not population.',
        '1 lakh = 100,000; 1 crore = 10 million = 100 lakh.',
        'City tier changes language, channel, payment and cost to serve.',
        'The demographic dividend is an opportunity that only pays if jobs are created.',
        'Formalisation (GST, UPI, Jan Dhan) is creating new markets in data, credit and software.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'india-2',
      title: 'Setting up in India: entity choice, Companies Act basics and Startup India',
      level: 'Beginner',
      minutes: 16,
      hook: `The entity you pick in week one decides whether a VC can invest in you in year two — and what your penalty notices look like in year three.`,
      eli5: `Starting a business is like choosing a vehicle for a long trip. A bicycle (sole proprietorship) is cheap and simple but if you crash, you get hurt personally. A car built with a partner (LLP) protects you better. A bus with a proper licence and many seats (Private Limited company) costs more to run and has more rules, but it can carry investors and grow big. Pick the vehicle for the trip you plan, not just for the first kilometre.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than business-101',
          html: `<p>Business-101 listed India\'s legal structures, and legal-1 covered founder agreements. Here we go into how each Indian entity actually works, what the <b>Companies Act, 2013</b> requires every year, and what <b>DPIIT recognition</b> under Startup India gets you.</p><p>Companies and LLPs are registered with the <b>Registrar of Companies (ROC)</b> through the Ministry of Corporate Affairs (MCA) online portal.</p>`
        },
        {
          type: 'compare', title: 'Choosing an entity', headers: ['', 'Sole proprietorship', 'One Person Company (OPC)', 'LLP', 'Private Limited (Pvt Ltd)'],
          rows: [
            ['Separate legal entity?', 'No — you are the business', 'Yes', 'Yes', 'Yes'],
            ['Liability', 'Unlimited, personal', 'Limited to share capital', 'Limited to agreed contribution', 'Limited to share capital'],
            ['Owners', 'One person', 'One member (Indian citizen) plus a nominee', 'Minimum 2 partners, 2 designated partners (one resident in India)', 'Minimum 2 shareholders and 2 directors (one resident in India); maximum 200 members'],
            ['Raising equity', 'Not possible', 'Limited; must convert to Pvt Ltd for investors', 'Hard — no shares; VCs rarely invest', 'Easy — shares, preference shares, ESOPs; the standard for funded startups'],
            ['Foreign investment', 'Not available', 'Not practical', 'Allowed under the automatic route only in sectors open to 100% automatic-route FDI', 'Allowed in most sectors under FDI rules'],
            ['Compliance load', 'Lowest (tax returns, GST if applicable)', 'Moderate (lighter than Pvt Ltd)', 'Moderate (annual return and statement of accounts; audit above thresholds)', 'Highest (board meetings, AGM, audit, ROC filings)'],
            ['Income tax (broad)', 'Personal slab rates', 'Company rates', '30% plus surcharge and cess', 'About 25.2% effective under the 22% concessional regime (incl. surcharge and cess)'],
            ['Best for', 'Freelancers, small traders testing an idea', 'Solo founders wanting limited liability', 'Professional firms, family partnerships, consultancies', 'Any startup planning to raise outside capital or issue ESOPs']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'General information as of 2026',
          html: `<p><b>General information as of 2026 — rules change; check with a chartered accountant or company secretary.</b> Thresholds, forms, due dates and tax rates in this lesson are revised often (for example, the Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026 and renumbered many sections). Use this lesson to ask the right questions, not as legal or tax advice.</p>`
        },
        {
          type: 'framework', name: 'Incorporating a Private Limited company', by: 'MCA process (SPICe+)', when: 'Setting up a company that may raise investment',
          steps: [
            { label: '1. Digital signatures', desc: 'Get a Digital Signature Certificate (DSC) for each proposed director and subscriber — needed to sign MCA forms.' },
            { label: '2. Name and incorporation (SPICe+)', desc: 'The integrated SPICe+ web form reserves the name and incorporates the company, allots Director Identification Numbers (DIN), and generates PAN and TAN. Linked forms can open a bank account and register for GST, EPFO and ESIC.' },
            { label: '3. MoA and AoA', desc: 'The Memorandum of Association states the company\'s objects and capital; the Articles of Association are its internal rulebook (board powers, share transfers, investor rights later go here).' },
            { label: '4. After incorporation', desc: 'Appoint the first statutory auditor within 30 days; hold the first board meeting within 30 days; issue share certificates; deposit subscription money.' },
            { label: '5. Commencement of business', desc: 'File INC-20A, declaring that subscribers have paid for their shares, within 180 days of incorporation — before starting business or borrowing.' },
            { label: '6. Other registrations', desc: 'Shops and Establishments licence (state), Professional Tax (some states), GST if thresholds or rules require, Import Export Code if trading abroad.' }
          ]
        },
        {
          type: 'timeline', title: 'A Pvt Ltd company\'s annual compliance calendar (financial year April–March)',
          items: [
            { label: 'Every quarter', desc: 'Board meetings: at least four a year with no more than 120 days between them (lighter rules for small companies and OPCs). TDS returns quarterly.' },
            { label: 'Monthly', desc: 'GST returns (if registered), TDS deposits, payroll filings (PF, ESI) where applicable.' },
            { label: 'By 30 June', desc: 'DPT-3 return of deposits/outstanding loans, where applicable.' },
            { label: 'By 30 September', desc: 'Annual General Meeting — within six months of the year end. Directors\' KYC due around this time.' },
            { label: 'Within 30 days of AGM', desc: 'File financial statements with the ROC (AOC-4).' },
            { label: 'Within 60 days of AGM', desc: 'File the annual return (MGT-7 / MGT-7A for small companies and OPCs).' },
            { label: 'By 31 October', desc: 'Company income-tax return (for companies requiring audit), after the tax audit report.' }
          ]
        },
        {
          type: 'framework', name: 'DPIIT recognition and Startup India benefits', by: 'Startup India initiative (launched January 2016)', when: 'Right after incorporating an innovative venture',
          steps: [
            { label: 'Eligibility', desc: 'A Pvt Ltd, LLP or registered partnership, up to 10 years from incorporation, with turnover not above ₹100 crore (≈ $11.4M) in any year, working on innovation or a scalable model with job or wealth-creation potential. Recognition is free and online.' },
            { label: 'Compliance relief', desc: 'Self-certification under certain labour and environmental laws for an initial period; easier public-procurement rules (relaxed prior-turnover and experience requirements).' },
            { label: 'IP support', desc: 'Fast-tracked patent examination, an 80% rebate on patent fees and a 50% rebate on trademark fees, and facilitators to help file.' },
            { label: 'Funding support', desc: 'Government Fund of Funds for Startups (managed by SIDBI) investing through SEBI-registered funds, and a credit guarantee scheme for startup loans.' },
            { label: 'Tax holiday (separate approval)', desc: 'Eligible startups can apply to an Inter-Ministerial Board for a 100% deduction of profits for 3 consecutive years out of their first 10 — for startups incorporated before 1 April 2030. Only a small fraction of recognised startups have obtained it.' },
            { label: 'Angel tax relief', desc: 'The "angel tax" on share issues above fair value was abolished for all companies from the 2024–25 tax year, removing a long-running pain point for startups.' }
          ]
        },
        {
          type: 'case', company: 'Startup India', year: '2016–2025', title: 'What a recognition programme can and cannot do',
          situation: `Before 2016, Indian founders complained about slow approvals, heavy compliance, angel-tax notices and patchy access to early capital. Many top startups also chose to hold their main company abroad.`,
          decision: `The government launched Startup India in January 2016 with an action plan: DPIIT recognition, self-certification, IP fee rebates, a Fund of Funds through SIDBI, tax incentives and faster exit rules. Later steps included abolishing angel tax and extending the tax-holiday window.`,
          outcome: `DPIIT-recognised startups grew to well over a lakh by 2025. The Fund of Funds became an important backer of domestic venture funds. But the tax holiday reached relatively few companies, and founders still cite compliance, tax disputes and contract enforcement as frictions.`,
          lesson: `Recognition is quick, free and worth doing for IP and procurement benefits. Do not build a business plan around tax incentives — build one that works without them.`
        },
        {
          type: 'scenario',
          prompt: `Two founders are launching a B2B SaaS product. One says: "Let\'s start as an LLP — it\'s cheaper and has less compliance. We can convert later when we raise money."`,
          options: [
            { text: 'Agree — save money now.', feedback: 'Conversion later costs time and legal fees, can raise tax and stamp-duty questions, and delays your first round. Investors expect shares and an ESOP pool from day one.', good: false },
            { text: 'Incorporate as a Pvt Ltd now, with a founders\' agreement, vesting and a planned ESOP pool, and apply for DPIIT recognition.', feedback: 'Correct. If you plan to raise equity or issue ESOPs, Pvt Ltd is the standard. The extra compliance cost is small compared with the friction it removes.', good: true },
            { text: 'Start as a sole proprietorship under one founder\'s name.', feedback: 'This leaves one founder with unlimited liability and no legal way to share ownership with the other.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'First 90 days after incorporation',
          items: ['Founders\' agreement with vesting and IP assignment signed', 'Bank account opened and share capital deposited', 'First board meeting held and auditor appointed', 'INC-20A filed within 180 days', 'GST registration decided (threshold or mandatory rules)', 'DPIIT recognition applied for', 'Compliance calendar set up with a CA or company secretary', 'Trademark application filed for the brand name']
        }
      ],
      terms: [
        { term: 'Private Limited company', def: 'A company with limited liability, 2–200 shareholders and restrictions on share transfers; the usual vehicle for funded startups.' },
        { term: 'LLP', def: 'Limited Liability Partnership — a partnership with a separate legal identity and limited liability, governed by the LLP Act, 2008.' },
        { term: 'OPC', def: 'One Person Company — a company with a single member and a nominee, for solo founders wanting limited liability.' },
        { term: 'DIN / DSC', def: 'Director Identification Number, needed to be a director; Digital Signature Certificate, used to sign MCA filings.' },
        { term: 'MoA / AoA', def: 'Memorandum of Association (objects and capital) and Articles of Association (internal rules) — the company\'s constitution.' },
        { term: 'ROC', def: 'Registrar of Companies — the authority with which companies and LLPs file incorporation documents and annual returns.' },
        { term: 'AOC-4 / MGT-7', def: 'Annual ROC filings for financial statements (AOC-4) and the annual return (MGT-7, or MGT-7A for small companies and OPCs).' },
        { term: 'DPIIT recognition', def: 'Official startup status from the Department for Promotion of Industry and Internal Trade, unlocking Startup India benefits.' }
      ],
      quiz: [
        {
          q: 'Which entity is the standard choice for a startup planning to raise venture capital and grant ESOPs?',
          options: ['Sole proprietorship', 'LLP', 'Partnership firm', 'Private Limited company'],
          answer: 3,
          explain: 'Pvt Ltd companies issue shares and preference shares and can run ESOP schemes — what VCs and employees expect.'
        },
        {
          q: 'What is the minimum number of directors for a Private Limited company?',
          options: ['One', 'Two', 'Three', 'Seven'],
          answer: 1,
          explain: 'A Pvt Ltd needs at least two directors, at least one of whom must be resident in India.'
        },
        {
          q: 'A company\'s financial year ended 31 March. Its AGM is held on 20 September. By when is AOC-4 due?',
          options: ['20 October', '30 September', '31 December', '20 November'],
          answer: 0,
          explain: 'Financial statements (AOC-4) are due within 30 days of the AGM: 20 September + 30 days = 20 October.'
        },
        {
          q: 'Which is NOT a condition for DPIIT startup recognition?',
          options: ['Up to 10 years from incorporation', 'Turnover not above ₹100 crore in any year', 'At least ₹1 crore of paid-up capital', 'Working on innovation or a scalable business model'],
          answer: 2,
          explain: 'There is no minimum capital requirement for recognition; the conditions concern age, turnover, entity type and innovation.'
        },
        {
          q: 'Within how many days of incorporation must a company with share capital file its commencement-of-business declaration (INC-20A)?',
          options: ['30 days', '90 days', '365 days', '180 days'],
          answer: 3,
          explain: 'INC-20A must be filed within 180 days, confirming subscribers have paid for their shares.'
        }
      ],
      challenge: {
        title: 'Pick the right vehicle for three ventures',
        prompt: `Recommend an entity for each, with reasons and the key compliance each will face:<ol><li><b>Ananya</b>, a freelance UX designer earning about ₹18 lakh (≈ $20,000) a year from Indian and US clients, no plans to hire.</li><li><b>Two chartered accountants</b> starting an advisory practice with three staff, sharing profits 60:40, no outside investors.</li><li><b>A three-founder AI startup</b> that wants a seed round from Indian angels and a US fund within 12 months and plans to hire 15 engineers with ESOPs.</li></ol>`,
        hints: ['Ask: will they raise equity? Do they need limited liability? How much compliance can they handle?', 'Think about professional rules too — some professions have their own rules on the form of practice.', 'Foreign investment and ESOPs point strongly in one direction.'],
        model: `<table><thead><tr><th>Venture</th><th>Entity</th><th>Why</th><th>Key compliance</th></tr></thead><tbody><tr><td>Ananya</td><td>Sole proprietorship (or OPC later)</td><td>Simple, low cost, no investors. Liability risk is low for design work; professional-indemnity insurance covers most of it. Move to an OPC if contracts grow large.</td><td>Income-tax return (consider presumptive taxation for professionals if eligible); GST registration once services cross the ₹20 lakh threshold — note exports of services are zero-rated but registration rules still apply; check with a CA.</td></tr><tr><td>CA advisory</td><td>LLP</td><td>Limited liability between partners, flexible profit-sharing in the LLP agreement, lighter compliance than a company, no need for shares. Check ICAI rules on the form of practice.</td><td>Annual return (Form 11) and statement of accounts (Form 8); audit if turnover or contribution crosses thresholds; income tax at 30% plus surcharge and cess; GST.</td></tr><tr><td>AI startup</td><td>Private Limited</td><td>Needed for equity rounds, preference shares for investors, ESOPs and FDI from the US fund.</td><td>Board meetings, AGM, statutory audit, AOC-4, MGT-7, INC-20A; FEMA reporting on foreign investment; DPIIT recognition; ESOP scheme approved by shareholders.</td></tr></tbody></table><p><b>Common advice:</b> whatever the entity, keep business and personal money separate, sign written agreements on day one, and set up a compliance calendar with a CA or company secretary.</p>`
      },
      takeaways: [
        'Raising equity or granting ESOPs? Choose a Private Limited company.',
        'LLPs suit professional and family partnerships that will not raise outside equity.',
        'Companies Act compliance is a calendar: board meetings, AGM, AOC-4, MGT-7 — miss dates and penalties add up.',
        'DPIIT recognition is free and useful; the tax holiday is a bonus, not a business model.',
        'General information as of 2026 — always confirm with a CA or company secretary.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'india-3',
      title: 'GST: how it works, input tax credit and registration',
      level: 'Intermediate',
      minutes: 16,
      hook: `Under GST your supplier\'s carelessness can become your tax bill — which is why finance teams in India chase vendors as hard as customers.`,
      eli5: `Imagine a sandwich passes through three hands: a baker makes bread, a café adds fillings, and you buy it. Each time it changes hands, a tax is added — but each person gets back the tax they already paid on what they bought. So the baker pays tax on the bread, the café only pays tax on the fillings and work it added, and in the end the total tax equals the tax on the final sandwich. That "getting back" is called <b>input tax credit</b>.`,
      blocks: [
        {
          type: 'text', title: 'What GST is',
          html: `<p>The <b>Goods and Services Tax</b> started on 1 July 2017, replacing a tangle of central and state taxes (excise, service tax, VAT, entry tax and more). It is a <b>destination-based tax on consumption</b>, collected at every stage of the supply chain on the <b>value added</b>.</p><p>India uses a <b>dual GST</b>: the Centre and the states both tax the same transaction. Everything runs through the <b>GST Network (GSTN)</b> portal, where invoices uploaded by sellers flow into buyers\' records. Goods are classified by <b>HSN</b> codes and services by <b>SAC</b> codes, which decide the rate.</p>`
        },
        {
          type: 'compare', title: 'CGST, SGST and IGST', headers: ['Type of supply', 'Taxes charged', 'Example at an 18% rate'],
          rows: [
            ['Intra-state (seller and place of supply in the same state)', 'CGST (Centre) + SGST/UTGST (state), split equally', 'A Pune firm sells ₹1,00,000 to a Mumbai firm: CGST ₹9,000 + SGST ₹9,000'],
            ['Inter-state (different states)', 'IGST (collected by the Centre, then shared with the destination state)', 'A Pune firm sells ₹1,00,000 to a Bengaluru firm: IGST ₹18,000'],
            ['Imports', 'IGST (plus customs duty)', 'Paid at customs; creditable for registered importers'],
            ['Exports', 'Zero-rated', 'Export under a bond/LUT without paying IGST, or pay and claim a refund']
          ]
        },
        {
          type: 'formula', name: 'Net GST payable',
          expr: 'GST payable = Output tax on sales − Eligible input tax credit (ITC) on purchases',
          explain: `<b>Output tax</b> is the GST you charge customers. <b>ITC</b> is the GST you paid suppliers on business purchases, which you can offset. Credits are used in a set order: IGST credit first against IGST, then against CGST and SGST; CGST credit cannot pay SGST and vice versa.`,
          example: `A trader buys goods for ₹1,00,000 + ₹18,000 GST and sells them for ₹1,50,000 + ₹27,000 GST. Net payable = ₹27,000 − ₹18,000 = <b>₹9,000</b> — exactly 18% of the ₹50,000 value added.`
        },
        {
          type: 'callout', kind: 'example', title: 'GST through a supply chain',
          html: `<ul><li><b>Manufacturer</b> sells to distributor: ₹1,000 + ₹180 GST. Pays ₹180.</li><li><b>Distributor</b> sells to retailer: ₹1,200 + ₹216. Pays ₹216 − ₹180 = <b>₹36</b> (18% of ₹200 added).</li><li><b>Retailer</b> sells to consumer: ₹1,500 + ₹270. Pays ₹270 − ₹216 = <b>₹54</b> (18% of ₹300 added).</li></ul><p>Total collected = ₹180 + ₹36 + ₹54 = <b>₹270</b> = 18% of the final ₹1,500 price. No tax on tax — as long as the credit chain is unbroken.</p>`
        },
        {
          type: 'framework', name: 'When can you claim input tax credit?', by: 'CGST Act, 2017 (section 16 and related rules)', when: 'Every month, before filing your return',
          steps: [
            { label: '1. Valid tax invoice', desc: 'You hold a proper GST invoice (or debit note) with your GSTIN on it.' },
            { label: '2. Goods or services received', desc: 'You must have actually received them.' },
            { label: '3. It appears in GSTR-2B', desc: 'Your supplier must have reported the invoice in their outward return so it shows in your auto-generated GSTR-2B statement.' },
            { label: '4. Supplier has paid the tax', desc: 'The tax must actually be paid to the government by your supplier.' },
            { label: '5. You file your return and pay the supplier', desc: 'You must file your own return; if you do not pay the supplier within 180 days, the credit must be reversed until you do.' },
            { label: '6. Not a blocked credit', desc: 'Some purchases never give credit — for example many motor vehicles, food and beverages, personal consumption and construction of immovable property for own use.' },
            { label: '7. Within the time limit', desc: 'Claim by the deadline (broadly 30 November after the end of the financial year, or the annual return if earlier).' }
          ]
        },
        {
          type: 'compare', title: 'Registration: who must register? (verify current limits with a CA)', headers: ['Situation', 'Broad rule'],
          rows: [
            ['Supplier of goods only (most states)', 'Register when aggregate turnover exceeds ₹40 lakh (≈ $45,000) a year in most states; lower limits (₹20 lakh or ₹10 lakh) apply in some states, including several special-category states'],
            ['Supplier of services', 'Register above ₹20 lakh (≈ $23,000); ₹10 lakh in a few special-category states'],
            ['Mandatory regardless of turnover', 'Inter-state supply of goods, many e-commerce sellers and all e-commerce operators, casual and non-resident taxable persons, those liable under reverse charge, and some others'],
            ['Composition scheme (optional)', 'For small businesses (broadly up to ₹1.5 crore turnover for goods, lower for services): pay a low flat rate on turnover, simpler returns — but no ITC and no collecting GST from customers'],
            ['E-invoicing', 'Required for businesses above ₹5 crore aggregate turnover for B2B invoices'],
            ['E-way bill', 'Generally required to move goods worth more than ₹50,000 in a consignment']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'General information as of 2026 — rules change',
          html: `<p><b>General information as of 2026 — rules change; check with a chartered accountant or company secretary.</b></p><p>GST changes frequently through GST Council decisions. A major reform ("GST 2.0") took effect on 22 September 2025: most goods and services moved into two main slabs of <b>5% and 18%</b>, with a special higher rate of <b>40%</b> for selected luxury and "sin" goods, the old 12% and 28% slabs were largely removed, and some items (for example individual health and life insurance premiums) became exempt. Always check the current rate for your HSN/SAC code and the current registration thresholds for your state.</p>`
        },
        {
          type: 'timeline', title: 'The GST compliance cycle (regular monthly filer)',
          items: [
            { label: 'Day 1–10', desc: 'Raise invoices (e-invoices if required); reconcile last month\'s purchases with GSTR-2B.' },
            { label: 'By the 11th', desc: 'File GSTR-1: details of outward supplies (sales). This feeds your customers\' GSTR-2B.' },
            { label: 'By the 20th', desc: 'File GSTR-3B: summary return; claim ITC and pay net tax in cash.' },
            { label: 'Quarterly option', desc: 'Small taxpayers (up to ₹5 crore turnover) can use the QRMP scheme: quarterly returns with monthly tax payments.' },
            { label: 'By 31 December', desc: 'Annual return GSTR-9 for the previous financial year (and a reconciliation statement above specified turnover).' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your packaging supplier has not filed GSTR-1 for two months. ₹3.6 lakh of your ITC is missing from GSTR-2B. Your finance team suggests claiming it anyway because "we have the invoices".`,
          options: [
            { text: 'Claim it — you paid the GST to the supplier.', feedback: 'If the invoice is not in GSTR-2B, the claim is not allowed and can lead to reversal with interest and penalties.', good: false },
            { text: 'Do not claim it yet; hold back the GST portion of the supplier\'s payment until they file, add a contract clause making GST filing a payment condition, and track vendor compliance ratings.', feedback: 'Correct. Protect your cash by linking payment of the GST amount to the supplier\'s filing, and treat GST compliance as a vendor-selection criterion.', good: true },
            { text: 'Stop buying from the supplier immediately.', feedback: 'Possibly later, but first try to fix the problem — switching suppliers has its own cost and risk.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'GSTIN', def: 'The 15-character GST identification number given to each registered person in each state.' },
        { term: 'CGST / SGST / IGST', def: 'Central GST and State GST on intra-state supplies; Integrated GST on inter-state supplies and imports.' },
        { term: 'Input tax credit (ITC)', def: 'GST paid on business purchases that can be offset against GST charged on sales.' },
        { term: 'GSTR-1 / GSTR-3B', def: 'The monthly (or quarterly) outward-supply return and the summary return with tax payment.' },
        { term: 'GSTR-2B', def: 'An auto-generated monthly statement of the ITC available to you based on suppliers\' filings.' },
        { term: 'HSN / SAC', def: 'Classification codes for goods (HSN) and services (SAC) that determine the GST rate.' },
        { term: 'Composition scheme', def: 'A simplified option for small businesses paying a low flat rate on turnover, without ITC.' },
        { term: 'Zero-rated supply', def: 'Exports and supplies to SEZs: no GST is charged but input credits are still allowed or refunded.' }
      ],
      quiz: [
        {
          q: 'A Gujarat seller supplies goods to a buyer in Rajasthan. Which GST applies?',
          options: ['CGST + SGST', 'IGST', 'SGST only', 'No GST'],
          answer: 1,
          explain: 'Supplies between states attract IGST.'
        },
        {
          q: 'A firm charges ₹4,50,000 output GST and has ₹3,10,000 of eligible ITC. What is net GST payable in cash?',
          options: ['₹7,60,000', '₹3,10,000', '₹1,40,000', '₹4,50,000'],
          answer: 2,
          explain: '₹4,50,000 − ₹3,10,000 = ₹1,40,000.'
        },
        {
          q: 'Which of these is generally a requirement for claiming ITC?',
          options: ['The invoice appears in your GSTR-2B', 'The supplier is in the same state', 'The purchase is over ₹50,000', 'You are on the composition scheme'],
          answer: 0,
          explain: 'ITC is generally allowed only for invoices the supplier has reported, reflected in GSTR-2B.'
        },
        {
          q: 'A business on the composition scheme:',
          options: ['Can claim full ITC', 'Must charge 18% to customers', 'Can make unlimited inter-state sales of goods', 'Cannot claim ITC or collect GST from customers'],
          answer: 3,
          explain: 'Composition dealers pay a flat rate on turnover from their own pocket and give up ITC — in exchange for simplicity.'
        },
        {
          q: 'A distributor buys at ₹2,000 + 18% GST and sells at ₹2,500 + 18% GST (intra-state). How much CGST does it pay in cash, assuming no other credits?',
          options: ['₹45', '₹90', '₹225', '₹450'],
          answer: 0,
          explain: 'Value added ₹500 × 18% = ₹90 net GST, split equally: CGST ₹45 and SGST ₹45.'
        }
      ],
      challenge: {
        title: 'Calculate a month\'s GST for a Bengaluru electronics seller',
        prompt: `A Karnataka-registered seller of electronics accessories (all at 18%) has this month:<ul><li>Sales within Karnataka: ₹20,00,000</li><li>Sales to other states: ₹10,00,000</li><li>Purchases from a Karnataka supplier: ₹12,00,000 (in GSTR-2B)</li><li>Purchases from a Maharashtra supplier: ₹6,00,000 (in GSTR-2B)</li><li>Purchases from Supplier X in Karnataka: ₹2,00,000 — <b>not</b> in GSTR-2B</li></ul>Calculate output tax by type, eligible ITC by type, and the cash payable for IGST, CGST and SGST. Advise on Supplier X.`,
        hints: ['Output: intra-state sales split into CGST 9% + SGST 9%; inter-state sales are IGST 18%.', 'Supplier X\'s credit is not eligible this month.', 'Use IGST credit against IGST first.'],
        model: `<p><b>1. Output tax</b></p><ul><li>Intra-state ₹20,00,000: CGST ₹1,80,000 + SGST ₹1,80,000</li><li>Inter-state ₹10,00,000: IGST ₹1,80,000</li><li>Total output tax: <b>₹5,40,000</b></li></ul><p><b>2. Eligible ITC</b></p><ul><li>Karnataka supplier ₹12,00,000: CGST ₹1,08,000 + SGST ₹1,08,000</li><li>Maharashtra supplier ₹6,00,000: IGST ₹1,08,000</li><li>Supplier X: ₹36,000 (CGST ₹18,000 + SGST ₹18,000) — <b>not eligible this month</b></li><li>Total eligible ITC: <b>₹3,24,000</b></li></ul><p><b>3. Set-off and cash payable</b></p><table><thead><tr><th></th><th>Output</th><th>ITC used</th><th>Cash</th></tr></thead><tbody><tr><td>IGST</td><td>₹1,80,000</td><td>₹1,08,000 (IGST)</td><td>₹72,000</td></tr><tr><td>CGST</td><td>₹1,80,000</td><td>₹1,08,000 (CGST)</td><td>₹72,000</td></tr><tr><td>SGST</td><td>₹1,80,000</td><td>₹1,08,000 (SGST)</td><td>₹72,000</td></tr><tr><td><b>Total</b></td><td>₹5,40,000</td><td>₹3,24,000</td><td><b>₹2,16,000</b></td></tr></tbody></table><p>Check: ₹5,40,000 − ₹3,24,000 = ₹2,16,000 (≈ $2,450).</p><p><b>4. Supplier X:</b> the missing ₹36,000 is real cash out of your pocket until X files. Hold back the GST portion of X\'s payment until the invoice appears in GSTR-2B, then claim it in a later month within the time limit. If X repeatedly fails, switch suppliers. Confirm current rates and rules with your CA.</p>`
      },
      takeaways: [
        'GST taxes value added at each stage; ITC prevents tax on tax.',
        'Intra-state = CGST + SGST; inter-state = IGST; exports are zero-rated.',
        'No GSTR-2B, no credit — vendor compliance is your cash flow.',
        'Registration thresholds differ for goods, services and states, and some sellers must register regardless.',
        'General information as of 2026 — rates and limits change; confirm with a CA.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'india-4',
      title: 'India Stack: Aadhaar, UPI, DigiLocker, Account Aggregator, ONDC and OCEN',
      level: 'Intermediate',
      minutes: 16,
      hook: `India built public digital "roads" for identity, payments and data — and the businesses winning now are the ones building shops along those roads.`,
      eli5: `Imagine your town builds free roads, free street lights and a free post office that anyone can use. Suddenly opening a shop is much cheaper: you do not need to build your own road to reach customers. India Stack is like that, but digital: free or cheap shared systems for proving who you are, sending money, sharing documents and finding sellers. Businesses use these "roads" instead of building their own.`,
      blocks: [
        {
          type: 'framework', name: 'The layers of India Stack', by: 'Digital public infrastructure built since 2009', when: 'Designing any product that onboards, pays, lends to or sells to Indians',
          steps: [
            { label: 'Identity — Aadhaar and eKYC', desc: 'A 12-digit biometric ID run by UIDAI, with over 130 crore numbers issued. Authentication and eKYC let approved entities verify identity in seconds instead of collecting photocopies.' },
            { label: 'Payments — UPI', desc: 'The Unified Payments Interface (NPCI, 2016) lets any bank account pay any other instantly via a phone number, UPI ID or QR code, across any app.' },
            { label: 'Documents — DigiLocker and eSign', desc: 'Government-issued documents (driving licences, mark sheets, vehicle registration) stored digitally and shareable with consent; eSign lets people sign documents online.' },
            { label: 'Data — Account Aggregator (AA)', desc: 'RBI-regulated consent managers that let a person share financial data (bank statements, investments, insurance) with a lender or adviser — only with explicit, revocable consent.' },
            { label: 'Commerce — ONDC', desc: 'The Open Network for Digital Commerce: an open protocol where any buyer app can discover any seller on any seller app, instead of one platform owning both sides.' },
            { label: 'Credit — OCEN (and ULI)', desc: 'The Open Credit Enablement Network: common standards so lenders can embed loans in any platform. The RBI has also piloted a Unified Lending Interface (ULI) to pull data for loan decisions.' }
          ]
        },
        {
          type: 'compare', title: 'What each layer does for a business', headers: ['Rail', 'Business use', 'Example impact'],
          rows: [
            ['Aadhaar eKYC / video KYC', 'Paperless onboarding for bank accounts, telecom, wallets, brokerage', 'Account opening in minutes instead of days; lower onboarding cost'],
            ['UPI', 'Collect payments from anyone; recurring mandates (AutoPay); payouts', 'Zero merchant fee on most UPI payments; kirana stores accept digital payments via a printed QR'],
            ['DigiLocker', 'Verify documents directly from the issuer', 'Fewer forged documents; faster hiring and loan checks'],
            ['Account Aggregator', 'Underwrite loans using real bank-statement data; wealth and insurance advice', 'Credit for thin-file borrowers and small businesses'],
            ['ONDC', 'Sell on many buyer apps at once; lower commissions', 'Small sellers and local services reach customers without one dominant marketplace'],
            ['OCEN / ULI', 'Embed credit at the point of need (invoices, inventory, purchases)', 'Small-ticket working-capital loans inside the apps businesses already use']
          ]
        },
        {
          type: 'case', company: 'UPI', year: '2016–2025', title: 'Free rails, hard business models',
          situation: `In 2016 India was cash-heavy and card acceptance was limited, especially at small merchants. NPCI launched UPI as an interoperable, bank-led system that any app could plug into.`,
          decision: `Demonetisation in late 2016 drove early adoption. From January 2020 the government set a zero merchant discount rate (MDR) on UPI, making it free for merchants. Third-party apps such as PhonePe, Google Pay and Paytm competed for users.`,
          outcome: `UPI became the dominant way Indians pay digitally, crossing roughly 20 billion transactions a month in 2025, and was linked to payment systems in other countries. But free payments squeezed app economics: payment apps moved to monetise through lending, insurance, merchant "soundbox" devices, advertising and wealth products. Market concentration — two apps hold the large majority of volume — led NPCI to propose market-share caps, with deadlines repeatedly extended.`,
          lesson: `When public rails make a service free, value shifts to what you build on top: credit, data, software and distribution. Do not plan to profit from the rail itself.`
        },
        {
          type: 'formula', name: 'Why the rails matter: small-ticket loan economics',
          expr: 'Profit per loan = Interest earned − Cost of funds − Expected credit loss − Origination and servicing cost',
          explain: `On small loans the fixed cost of verifying the borrower can wipe out the profit. eKYC, Account Aggregator data, e-mandates via UPI AutoPay and eSign cut that fixed cost dramatically — which is what makes small-ticket credit viable.`,
          example: `<i>Illustrative.</i> A ₹50,000 working-capital loan for 3 months at 2% a month earns ₹3,000 interest. Cost of funds (1% a month) = ₹1,500; expected loss (2%) = ₹1,000.<br>With manual KYC and paper documents costing ₹800: profit = 3,000 − 1,500 − 1,000 − 800 = <b>−₹300</b> (a loss).<br>With digital rails costing ₹150: profit = 3,000 − 1,500 − 1,000 − 150 = <b>+₹350</b>.`
        },
        {
          type: 'case', company: 'Namma Yatri on ONDC', year: '2022–present', title: 'An open-network ride app',
          situation: `Auto-rickshaw drivers in Bengaluru complained about high commissions on ride-hailing platforms. ONDC, set up as a not-for-profit company and piloted from 2022, offered an open protocol for discovery and transactions.`,
          decision: `Namma Yatri, built by a team from the payments company Juspay, launched in Bengaluru in late 2022 on the open network with a <b>zero-commission</b> model: drivers keep the fare and pay a small subscription, while riders pay drivers directly, often via UPI.`,
          outcome: `It gained a large driver and rider base in Bengaluru and expanded to other cities, showing that open networks can work for local services. ONDC overall has grown more slowly in retail than early hopes, with much of its volume depending on incentives and a few buyer apps.`,
          lesson: `Open networks lower the toll a platform can charge — great for sellers, and an opening for new business models — but you still need a reason for buyers to show up.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Consent, privacy and limits',
          html: `<ul><li>In 2017 the Supreme Court recognised privacy as a fundamental right; its 2018 Aadhaar judgment limited private companies\' use of Aadhaar authentication. Private use is now allowed only for permitted purposes and approved entities, under rules that have changed over time.</li><li>The <b>Digital Personal Data Protection Act, 2023</b> sets consent and purpose-limitation duties; its rules were notified in November 2025 with phased compliance (legal-4 covers DPDP in detail).</li><li>Design for consent: collect only what you need, explain why, honour revocation.</li></ul><p><b>General information as of 2026 — rules change; check with a chartered accountant or company secretary</b> (and a privacy lawyer for data questions).</p>`
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'See how cheaper onboarding changes the maths',
          note: 'Treat CAC as your onboarding plus acquisition cost. Cut it by half — the effect of eKYC and digital document checks — and watch the LTV:CAC ratio and payback improve.'
        },
        {
          type: 'scenario',
          prompt: `You run a B2B marketplace selling inventory to 50,000 kirana stores. Many ask for 15–30 days of credit, but you have no data on their finances. What do you build?`,
          options: [
            { text: 'Give everyone 30 days\' credit from your own balance sheet.', feedback: 'Without data you will take heavy losses and lock up working capital.', good: false },
            { text: 'Partner with a regulated lender: use consented Account Aggregator bank data, GST and UPI transaction history, and your own order history to underwrite; collect via UPI AutoPay; embed the offer at checkout.', feedback: 'Correct. The rails provide data, identity and collections; the regulated lender carries the credit risk; you provide distribution and context.', good: true },
            { text: 'Refuse credit — cash only.', feedback: 'Safe but you lose to competitors who offer credit; kiranas run on working capital.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Building on India Stack',
          items: ['List each step of your customer journey that needs identity, payment, documents, data or credit', 'Check which rails you may legally use and which licences or partners are needed', 'Design consent flows that are clear, specific and revocable', 'Accept UPI everywhere, including AutoPay for subscriptions', 'Use DigiLocker or issuer verification instead of photocopies', 'Plan monetisation that does not depend on charging for the rail itself', 'Review DPDP compliance and data retention']
        }
      ],
      terms: [
        { term: 'Aadhaar', def: 'India\'s 12-digit biometric identity number, issued by UIDAI.' },
        { term: 'eKYC', def: 'Electronic verification of a customer\'s identity, for example via Aadhaar authentication or video KYC.' },
        { term: 'UPI', def: 'Unified Payments Interface — NPCI\'s real-time, interoperable bank-to-bank payment system.' },
        { term: 'MDR', def: 'Merchant discount rate — the fee merchants pay to accept payments; zero for most UPI payments.' },
        { term: 'Account Aggregator', def: 'An RBI-licensed consent manager that moves financial data between institutions with the user\'s permission.' },
        { term: 'ONDC', def: 'Open Network for Digital Commerce — an open protocol connecting any buyer app to any seller app.' },
        { term: 'OCEN', def: 'Open Credit Enablement Network — common standards for embedding loans in any platform.' },
        { term: 'Digital public infrastructure', def: 'Shared, interoperable digital systems (identity, payments, data) that public and private players build on.' }
      ],
      quiz: [
        {
          q: 'What does an Account Aggregator do?',
          options: ['Lends money to small businesses', 'Moves a person\'s financial data between institutions with explicit consent', 'Issues Aadhaar numbers', 'Processes card payments'],
          answer: 1,
          explain: 'AAs are consent managers; they do not see or store the data for their own use, and they do not lend.'
        },
        {
          q: 'Why did UPI\'s zero merchant fee push payment apps toward lending, ads and devices?',
          options: ['UPI was banned', 'Banks refused to join', 'Payment processing itself earned almost nothing, so they needed other revenue', 'Cards became free'],
          answer: 2,
          explain: 'With zero MDR on the rail, apps had to earn from services built on top of payments.'
        },
        {
          q: 'A ₹1,00,000 loan earns ₹6,000 interest; cost of funds ₹3,000; expected loss ₹2,000; origination cost ₹1,500. What is the profit per loan?',
          options: ['₹1,000', '₹2,500', '₹500', '−₹500'],
          answer: 3,
          explain: '6,000 − 3,000 − 2,000 − 1,500 = −₹500. Cutting origination cost with digital rails is what makes such loans viable.'
        },
        {
          q: 'What is the core idea of ONDC?',
          options: ['Any buyer app can discover and transact with any seller on any seller app', 'A single government shopping app', 'A tax on e-commerce', 'A payment system'],
          answer: 0,
          explain: 'ONDC unbundles discovery from the platform, so sellers are not locked into one marketplace.'
        },
        {
          q: 'Which legal development limited private companies\' use of Aadhaar authentication?',
          options: ['The GST Act 2017', 'The Supreme Court\'s 2018 Aadhaar judgment', 'The Companies Act 2013', 'The LLP Act 2008'],
          answer: 1,
          explain: 'The 2018 judgment upheld Aadhaar but restricted private use, which later laws and rules partly reopened for permitted purposes.'
        }
      ],
      challenge: {
        title: 'Design a digital MSME lending product',
        prompt: `You are product head at an NBFC. You want to offer 90-day invoice-financing loans of ₹2–10 lakh (≈ $2,300–11,400) to small manufacturers. Today, onboarding takes 10 days, costs ₹2,500 per application, and half the applicants drop out. Average loan ₹5 lakh, interest 18% a year, cost of funds 10% a year, expected loss 2.5% of principal per 90-day loan.<br><br>(a) Design the journey using India Stack rails. (b) Calculate profit per loan at today\'s ₹2,500 onboarding cost vs a digital ₹400. (c) What risks remain?`,
        hints: ['Interest for 90 days ≈ annual rate × 90 ÷ 365.', 'Think identity, data, signing, collection.', 'Rails reduce cost; they do not remove credit or fraud risk.'],
        model: `<p><b>(a) Digital journey</b></p><ol><li><b>Identity:</b> Aadhaar-based eKYC or video KYC for the proprietor/directors; PAN and GSTIN verification.</li><li><b>Data:</b> consented Account Aggregator bank statements (12 months), GST return data and the invoice being financed.</li><li><b>Decision:</b> automated scorecard plus a human check above a limit.</li><li><b>Contract:</b> eSign the loan agreement; documents verified via DigiLocker where available.</li><li><b>Disbursal and collection:</b> instant transfer; e-mandate (UPI AutoPay or e-NACH) for repayment, ideally linked to the buyer\'s payment of the invoice.</li></ol><p><b>(b) Profit per ₹5 lakh, 90-day loan</b></p><ul><li>Interest: ₹5,00,000 × 18% × 90 ÷ 365 = ₹22,192</li><li>Cost of funds: ₹5,00,000 × 10% × 90 ÷ 365 = ₹12,329</li><li>Expected loss: 2.5% × ₹5,00,000 = ₹12,500</li></ul><table><thead><tr><th></th><th>Manual (₹2,500)</th><th>Digital (₹400)</th></tr></thead><tbody><tr><td>Interest − funds − loss</td><td>−₹2,637</td><td>−₹2,637</td></tr><tr><td>Profit per loan</td><td><b>−₹5,137</b></td><td><b>−₹3,037</b></td></tr></tbody></table><p>Insight: digital onboarding helps, but at a 2.5% loss rate <b>over 90 days</b> the product loses money either way. The fix is better underwriting: AA and GST data should bring expected loss down. At a 1% loss (₹5,000): 22,192 − 12,329 − 5,000 − 400 = <b>+₹4,463</b> per loan digitally, vs +₹2,363 manually. Repeat customers (no onboarding cost) are even more profitable.</p><p><b>(c) Remaining risks:</b> fake or duplicate invoices (verify against GST e-invoices), concentration on a few buyers, consent and DPDP compliance, fraud via mule accounts, and RBI digital-lending guidelines (disclosures, direct disbursal to borrower accounts).</p><p><b>Recommendation:</b> launch digitally, but price and approve on data — target loss below about 1% per cycle using AA, GST and e-invoice verification, and focus on repeat borrowers.</p>`
      },
      takeaways: [
        'India Stack provides shared rails for identity, payments, documents, data, commerce and credit.',
        'Free rails move value to services on top: credit, software, data and distribution.',
        'Digital onboarding makes small-ticket finance possible — but underwriting still decides profit.',
        'Open networks like ONDC lower platform tolls but still need buyer demand.',
        'Build consent and privacy in from day one under the DPDP Act.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'india-5',
      title: 'The Indian VC and startup ecosystem: stages, ESOP tax, flipping and new-age IPOs',
      level: 'Advanced',
      minutes: 18,
      hook: `A decade ago the best Indian startups moved their head office to Delaware or Singapore; now many are paying large tax bills to move back home before listing.`,
      eli5: `Imagine you start a lemonade stand in your neighbourhood but the big buyers of lemonade stands live in another city. So you register your stand in that city — it is easier for them to invest. Years later, your own neighbourhood builds a huge market where people pay high prices for lemonade stands. Now you want to move your stand\'s registration back home to sell it there — but the move costs you a fee. That is flipping and reverse flipping.`,
      blocks: [
        {
          type: 'timeline', title: 'How the ecosystem grew',
          items: [
            { label: '2007–2014', desc: 'Flipkart, Ola, Paytm, Zomato and others founded; foreign VCs dominate; many startups hold their parent company abroad.' },
            { label: '2016', desc: 'Startup India launched; Jio\'s cheap data, UPI and demonetisation reshape digital consumption.' },
            { label: '2018', desc: 'Walmart buys a majority (about 77%) of Flipkart for about $16 billion — a landmark exit.' },
            { label: '2020–2021', desc: 'Pandemic digital boom; record funding and many new unicorns; IPO wave of Zomato, Nykaa, Paytm, Policybazaar and others.' },
            { label: '2022–2023', desc: '"Funding winter": global rate rises cut funding sharply; down rounds, layoffs and the collapse of edtech giant Byju\'s.' },
            { label: '2024–2025', desc: 'Angel tax abolished; profitability becomes the priority; wave of reverse flips; firms such as Groww, Pine Labs and Meesho list in India in late 2025.' }
          ]
        },
        {
          type: 'compare', title: 'Funding stages in India (typical; ranges vary widely)', headers: ['Stage', 'What it funds', 'Typical investors', 'What they look for'],
          rows: [
            ['Pre-seed / angel', 'Prototype, first customers', 'Friends and family, angels, angel networks, accelerators', 'Founders, problem insight, early signs of pull'],
            ['Seed', 'Product–market fit search, first team', 'Seed funds, micro-VCs, angels; government Fund of Funds via SEBI-registered funds', 'Strong early usage or revenue, a sharp wedge'],
            ['Series A', 'Repeatable growth engine', 'Indian and global VC firms', 'Product–market fit, unit economics trending right, a big market'],
            ['Series B–D (growth)', 'Scale, new categories, geographies', 'Larger VCs, crossover and growth funds, PE', 'Efficient growth, path to profit, governance'],
            ['Pre-IPO / IPO', 'Liquidity, public currency for acquisitions', 'Mutual funds, insurers, foreign and retail investors', 'Profitability or clear path, clean structure and governance']
          ]
        },
        {
          type: 'framework', name: 'Flipping and reverse flipping', by: 'Common structuring practice', when: 'Choosing where your parent company should live',
          steps: [
            { label: 'Why founders flipped', desc: 'Foreign VCs preferred familiar law (Delaware, Singapore); easier foreign listings and ESOPs for global hires; perceived Indian tax and regulatory uncertainty. The Indian business became a subsidiary of a foreign parent.' },
            { label: 'Costs of being flipped', desc: 'Two jurisdictions\' compliance, FEMA and overseas-investment rules for Indian residents holding shares abroad, and a harder path to listing in India.' },
            { label: 'Why reverse flip now', desc: 'India\'s public market became deep and receptive to tech listings, with strong domestic investor demand; regulators favour Indian-domiciled companies in sectors such as fintech; "Indian" status can help with customers and government business.' },
            { label: 'How it is done', desc: 'A share swap (foreign shareholders swap into the Indian company) or an inbound cross-border merger approved by the courts/NCLT. A 2024 rule change created a simpler route to merge a foreign holding company into its Indian wholly owned subsidiary.' },
            { label: 'The price', desc: 'Shareholders may owe capital-gains tax on the move — PhonePe\'s 2022 move from Singapore to India was widely reported to have cost about ₹8,000 crore (≈ $900M) in tax. Groww, Zepto, Razorpay, Meesho and Pine Labs are among firms that moved home.' }
          ]
        },
        {
          type: 'formula', name: 'ESOP taxation in India (basic case)',
          expr: 'Tax at exercise = (FMV on exercise date − exercise price) × shares × your slab rate; later, capital gains = Sale price − FMV at exercise',
          explain: `Two tax events: (1) when you <b>exercise</b>, the "perquisite" (the discount to fair market value) is taxed as salary, and your employer deducts TDS; (2) when you <b>sell</b>, the gain above the FMV at exercise is a capital gain. Employees of eligible startups (with the special tax-holiday certification) can defer the exercise-time tax until the earliest of about five years, leaving the company or selling the shares. Broadly, listed shares held over 12 months are taxed at 12.5% on long-term gains above a ₹1.25 lakh annual exemption; unlisted shares need a 24-month holding for long-term treatment.`,
          example: `You exercise 10,000 options at ₹10 when FMV is ₹210. Perquisite = 10,000 × ₹200 = <b>₹20 lakh</b> (≈ $22,700). At 30% plus 4% cess (31.2%, ignoring surcharge) the tax is about <b>₹6.24 lakh</b> — payable even though you have not sold a single share.`
        },
        {
          type: 'callout', kind: 'warning', title: 'General information as of 2026',
          html: `<p><b>General information as of 2026 — rules change; check with a chartered accountant or company secretary.</b> ESOP, capital-gains and cross-border structuring rules change frequently (capital-gains rates changed in July 2024, and the Income-tax Act, 2025 took effect on 1 April 2026). Founders considering a flip or reverse flip need specialist tax and legal advice.</p>`
        },
        {
          type: 'compare', title: 'Three new-age IPOs of 2021', headers: ['', 'Zomato (now Eternal)', 'Nykaa (FSN E-Commerce)', 'Paytm (One97 Communications)'],
          rows: [
            ['IPO', 'July 2021, issue price ₹76', 'November 2021, issue price ₹1,125', 'November 2021, issue price ₹2,150; about ₹18,300 crore raised — then India\'s largest IPO'],
            ['Listing day', 'Listed at a large premium', 'Listed nearly 80% above issue price', 'Fell about 27% on day one'],
            ['Profitable at IPO?', 'No', 'Yes — unusual among peers', 'No'],
            ['What happened next', 'Fell below issue price in 2022; recovered strongly as Blinkit quick commerce grew; joined the Sensex in December 2024; renamed Eternal in 2025', 'Strong debut, then a long decline from its peak as growth and competition were questioned', 'Fell far below issue price; RBI action against Paytm Payments Bank in early 2024; later returned to reported profit'],
            ['Lesson', 'Markets reward a credible path to profit and a second growth engine', 'Profitability at IPO does not guarantee a premium valuation forever', 'Price, regulation and a clear business model matter more than hype']
          ]
        },
        {
          type: 'case', company: 'Paytm', year: '2021–2024', title: 'When the IPO price is the problem',
          situation: `Paytm had pioneered mobile wallets and digital payments in India and built a huge user base. It IPO\'d in November 2021 at a valuation above ₹1.3 lakh crore, with many business lines (payments, lending distribution, wealth, commerce) and continued losses.`,
          decision: `Bankers and the company priced the IPO at the top of market enthusiasm. Investors were asked to pay for future profits from many unproven lines.`,
          outcome: `The stock fell sharply on listing and kept falling. Analysts questioned the path to profit. In January 2024 the RBI ordered Paytm Payments Bank to stop accepting new deposits and most new credits (effective from March 2024) over compliance concerns, hitting the wallet and FASTag businesses. Paytm cut costs, moved UPI handles to partner banks and focused on payments and merchant lending distribution.`,
          lesson: `An IPO is not the finish line. Leaving something on the table for new investors, having a simple story and keeping regulators onside matter more than the headline valuation.`
        },
        {
          type: 'interactive', widget: 'cap-table', title: 'Model founder dilution to IPO',
          note: 'Add a seed, Series A, B and C round, and a 10–12% ESOP pool. See how much founders own at IPO — and why Indian regulators require promoters to hold a minimum stake for a lock-in period.'
        },
        {
          type: 'scenario',
          prompt: `A late-stage startup offers you either ₹40 lakh salary, or ₹32 lakh salary plus options on 20,000 shares at ₹50 (current FMV ₹400, IPO "expected in 2–3 years"). What should you ask before deciding?`,
          options: [
            { text: 'Nothing — options are free money.', feedback: 'Options are worth something only if the company succeeds and you can sell; exercising also triggers tax on the FMV gap.', good: false },
            { text: 'Ask about the vesting schedule, exercise window after leaving, buyback or liquidity history, whether the company qualifies for tax deferral, total shares outstanding and liquidation preferences.', feedback: 'Correct. These determine what the options are really worth and how much cash you need to exercise.', good: true },
            { text: 'Take the cash always — ESOPs never pay out in India.', feedback: 'Not true — employees at companies such as Zomato, Flipkart and others have made life-changing gains. Evaluate, do not dismiss.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Flipping', def: 'Moving a startup\'s parent company abroad (e.g. to Delaware or Singapore) with the Indian business as a subsidiary.' },
        { term: 'Reverse flipping', def: 'Moving the parent company back to India, often before an Indian IPO.' },
        { term: 'Perquisite tax on ESOPs', def: 'Tax on the gap between fair market value and exercise price when options are exercised, treated as salary.' },
        { term: 'DRHP', def: 'Draft Red Herring Prospectus — the IPO offer document filed with SEBI for review.' },
        { term: 'Offer for sale (OFS)', def: 'The part of an IPO in which existing shareholders sell shares; the money goes to them, not the company.' },
        { term: 'Anchor investors', def: 'Large institutional investors allotted shares a day before an IPO opens, signalling demand.' },
        { term: 'AIF', def: 'Alternative Investment Fund — the SEBI-registered vehicle used by Indian VC and PE funds.' }
      ],
      quiz: [
        {
          q: 'You exercise 5,000 options at ₹20 when FMV is ₹220. What is the perquisite value taxed as salary?',
          options: ['₹11 lakh', '₹1 lakh', '₹10 lakh', '₹2.2 lakh'],
          answer: 2,
          explain: '5,000 × (₹220 − ₹20) = ₹10,00,000 = ₹10 lakh.'
        },
        {
          q: 'Why have many Indian startups reverse-flipped before listing?',
          options: ['Foreign listing is banned', 'To list on Indian exchanges, where demand for tech IPOs became strong, and to be treated as Indian-owned by regulators', 'It removes all taxes', 'VCs refuse to invest in foreign companies'],
          answer: 1,
          explain: 'Indian listings became attractive, and Indian domicile helps in regulated sectors — though the move can carry a large tax cost.'
        },
        {
          q: 'Which 2021 IPO company was profitable at the time of listing?',
          options: ['Paytm', 'Zomato', 'Policybazaar', 'Nykaa'],
          answer: 3,
          explain: 'Nykaa was profitable at IPO, unusually among its new-age peers.'
        },
        {
          q: 'In an IPO, money from the "offer for sale" goes to:',
          options: ['Existing shareholders selling their shares', 'The company, for expansion', 'SEBI', 'The stock exchange'],
          answer: 0,
          explain: 'OFS proceeds go to selling shareholders; only the fresh issue raises money for the company.'
        },
        {
          q: 'What was a major cost reported for PhonePe\'s 2022 move of its domicile from Singapore to India?',
          options: ['Losing its UPI licence', 'About ₹8,000 crore in tax paid by shareholders', 'Being delisted', 'A ban on foreign investors'],
          answer: 1,
          explain: 'The move triggered capital-gains tax for shareholders, widely reported at around ₹8,000 crore.'
        }
      ],
      challenge: {
        title: 'Exercise now or wait? An ESOP decision',
        prompt: `Priya holds 20,000 vested options at an exercise price of ₹10. The latest FMV is ₹500. The company is not eligible for tax deferral. An IPO is expected in about 2 years, and she guesses the shares will be worth ₹800 then. Assume a 31.2% tax rate on salary income (30% + 4% cess, ignoring surcharge) and 12.5% on long-term capital gains on listed shares above a ₹1.25 lakh exemption.<br><br>Compare (A) exercising now and selling after the IPO with (B) exercising at the IPO and selling immediately. Show the tax and cash needed, then advise her.`,
        hints: ['Option A: perquisite now = 20,000 × (500 − 10). Later capital gain = 20,000 × (800 − 500).', 'Option B: perquisite at IPO = 20,000 × (800 − 10); selling immediately at ₹800 creates no further gain.', 'What does Priya lose under A if the company fails?'],
        model: `<p><b>Option A — exercise now, sell after IPO (held over 12 months, listed by then)</b></p><ul><li>Exercise cost: 20,000 × ₹10 = ₹2 lakh</li><li>Perquisite: 20,000 × ₹490 = ₹98 lakh → tax 31.2% = <b>₹30.58 lakh</b> now</li><li>Capital gain at ₹800: 20,000 × ₹300 = ₹60 lakh; taxable after exemption ₹58.75 lakh × 12.5% = <b>₹7.34 lakh</b></li><li><b>Total tax ≈ ₹37.92 lakh</b>; cash needed today ≈ ₹32.58 lakh</li></ul><p><b>Option B — exercise and sell at IPO</b></p><ul><li>Perquisite: 20,000 × ₹790 = ₹1.58 crore → tax 31.2% = <b>₹49.30 lakh</b></li><li>No further gain if sold at ₹800 straight away</li><li>Cash needed today: ₹0 (tax is funded from sale proceeds — check the company allows a cashless exercise or sale)</li></ul><p><b>Comparison:</b> A saves about ₹49.30 − ₹37.92 = <b>₹11.4 lakh</b> of tax <i>if</i> the IPO happens at ₹800. But A puts about ₹32.6 lakh (≈ $37,000) of cash at risk in an unlisted company for two years. If the IPO is delayed or priced at ₹300, she will have paid tax on a ₹500 value she never received.</p><p><b>Advice:</b> do not exercise everything now unless she can afford to lose ₹32.6 lakh. A middle path: exercise a portion she can comfortably fund (say 25%), check whether the company runs buybacks or secondary sales, and keep the rest for a cashless exercise at liquidity. Confirm surcharge, holding-period and lock-in details with a CA — these numbers are illustrative.</p>`
      },
      takeaways: [
        'Indian funding runs angel → seed → Series A → growth → IPO, with domestic capital playing a growing role.',
        'ESOPs are taxed twice: perquisite at exercise and capital gains at sale — plan cash for the first.',
        'Reverse flipping to list in India is now common, but can carry a large tax cost.',
        'Zomato, Nykaa and Paytm show that IPO pricing, profitability and regulation shape outcomes after listing.',
        'General information as of 2026 — confirm tax treatment with a CA.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'india-6',
      title: 'Family business in India: governance and succession',
      level: 'Advanced',
      minutes: 17,
      hook: `India\'s largest business group nearly tore itself apart because its founder left no will — and some of its oldest groups have survived for over a century because they planned.`,
      eli5: `Imagine a family that runs a famous sweet shop. Grandpa built it. Now his three grandchildren all want to run it, some cousins just want a share of the money, and the head cook (not family) knows more than anyone. Without clear rules — who decides, who gets paid, who takes over — the family fights and the shop suffers. Family-business governance is just writing those rules down before the fight starts.`,
      blocks: [
        {
          type: 'text', title: 'Why this matters in India',
          html: `<p>A large share of India\'s biggest companies are controlled by founding families, called <b>promoters</b>. Even listed giants often have a promoter group holding a controlling stake, with the rest held by the public (listed companies must keep at least 25% public shareholding, with time allowed to reach it).</p><p>Family control brings real strengths — long-term thinking, patient capital, fast decisions, trusted relationships — and real risks: succession fights, related-party transactions that favour the family over minority shareholders, and leaders chosen for blood rather than ability. You met board basics in legal-5; here we focus on the family layer above the board.</p>`
        },
        {
          type: 'framework', name: 'The three-circle model', by: 'Renato Tagiuri and John Davis, early 1980s', when: 'Understanding why family firms are hard to govern',
          steps: [
            { label: 'Family', desc: 'Members care about harmony, fairness, identity and care for every relative — whether or not they work in the business.' },
            { label: 'Ownership', desc: 'Shareholders care about returns, dividends, control and the value of their stake.' },
            { label: 'Business', desc: 'Managers and employees care about performance, careers and merit.' },
            { label: 'The overlaps', desc: 'People sit in different overlaps: a family member who owns shares but does not work in the firm wants dividends; one who works there wants reinvestment and a promotion. Most conflicts come from these different positions, not from bad people.' },
            { label: 'Implication', desc: 'Each circle needs its own forum: a family council for family issues, a shareholders\' agreement for ownership, and a professional board for the business.' }
          ]
        },
        {
          type: 'framework', name: 'Family governance architecture', by: 'Common practice in multigenerational families', when: 'Before the second generation joins — or before the third generation multiplies the owners',
          steps: [
            { label: 'Family constitution', desc: 'A written charter of values, who may work in the business and on what terms, dividend policy, share-transfer rules and how disputes are resolved.' },
            { label: 'Family council and assembly', desc: 'A small elected council handles family matters; a wider assembly keeps every branch informed and heard.' },
            { label: 'Holding structure', desc: 'Shares held through holding companies or private trusts so ownership does not fragment with each generation.' },
            { label: 'Professional board', desc: 'Strong independent directors who can challenge the family; related-party transactions approved by the audit committee and, where required, minority shareholders.' },
            { label: 'Succession plan', desc: 'Criteria, timelines, development paths and outside experience for next-generation leaders — and the option of a professional CEO.' },
            { label: 'Family office', desc: 'Manages wealth, philanthropy and liquidity for family members, reducing pressure on the operating company.' }
          ]
        },
        {
          type: 'case', company: 'Reliance Industries', year: '2002–2023', title: 'From a bitter split to a planned handover',
          situation: `Dhirubhai Ambani built Reliance from a textile trading business into a petrochemicals giant. When he died in 2002, he was widely reported to have left no will, and his sons Mukesh and Anil soon clashed over control.`,
          decision: `In 2005 their mother, Kokilaben Ambani, brokered a split: Mukesh took the flagship petrochemicals and refining business; Anil took telecom, power and financial services.`,
          outcome: `The two paths diverged dramatically. Mukesh\'s Reliance grew into telecom (Jio), retail and new energy, becoming India\'s most valuable company for long stretches; several of Anil\'s companies ran into heavy debt, and Reliance Communications entered insolvency proceedings in 2019. Having lived through the split, Mukesh Ambani planned his own succession publicly: in 2022–2023 his children took leadership roles — Akash at Jio, Isha at Reliance Retail, Anant in new energy — and all three joined the Reliance board in 2023.`,
          lesson: `The absence of a succession plan is itself a decision — usually a costly one. Clear roles, staged handovers and board oversight reduce the risk of a fight.`
        },
        {
          type: 'case', company: 'Tata Group', year: '2012–2024', title: 'Trust ownership and a boardroom battle',
          situation: `Tata Sons, the group\'s holding company, is about two-thirds owned by charitable Tata Trusts, with the Shapoorji Pallonji (Mistry) family the largest minority holder. In 2012 Cyrus Mistry succeeded Ratan Tata as chairman of Tata Sons — the first chairman in decades from outside the Tata surname.`,
          decision: `In October 2016 the Tata Sons board removed Mistry, citing loss of confidence. Mistry alleged poor governance and oppression of minority shareholders and went to the tribunals.`,
          outcome: `The appellate tribunal ordered his reinstatement in 2019, but in 2021 the Supreme Court ruled in favour of Tata Sons. N. Chandrasekaran, a long-time Tata executive, became chairman in 2017 — a professional, non-family leader. After Ratan Tata\'s death in 2024, Noel Tata became chairman of Tata Trusts.`,
          lesson: `Trust ownership can protect a group\'s long-term mission and keep ownership from fragmenting, but the relationship between trusts, the holding board and operating management must be written down precisely — ambiguity becomes litigation.`
        },
        {
          type: 'case', company: 'Bajaj and Godrej', year: '2008 and 2024', title: 'Planned splits that kept the peace',
          situation: `Large families with multiple branches often reach a point where joint management no longer works.`,
          decision: `<b>Bajaj:</b> around 2008, under Rahul Bajaj, the group demerged into Bajaj Auto (led by Rajiv Bajaj), Bajaj Finserv (led by Sanjiv Bajaj) and a holding company, giving each son a clear domain. <b>Godrej:</b> in 2024 the 127-year-old group agreed a family realignment: one branch (Adi and Nadir Godrej) took the listed companies such as Godrej Consumer Products and Godrej Properties, the other (Jamshyd Godrej and Smita Godrej Crishna\'s family) took Godrej & Boyce and a large Mumbai land bank, with agreements on use of the brand.`,
          outcome: `Both separations were negotiated without the public litigation seen in other families. Bajaj Finance, within Bajaj Finserv, grew into one of India\'s most valuable financial companies.`,
          lesson: `Splitting by business line, with clear brand-use rules, can preserve both family relationships and value — if done before conflict hardens.`
        },
        {
          type: 'compare', title: 'Succession models', headers: ['Model', 'How it works', 'Strength', 'Risk'],
          rows: [
            ['Single heir', 'One child leads everything', 'Clear authority', 'Others feel excluded; depends on one person\'s ability'],
            ['Split by business', 'Each branch gets its own company', 'Ends turf wars', 'Loses group scale; brand disputes'],
            ['Professional CEO, family owners', 'Family governs through the board; outsiders manage', 'Merit-based management', 'Owner–manager tension; family may disengage'],
            ['Trust or foundation ownership', 'Shares held by trusts with a mission', 'Ownership stays intact for generations', 'Governance between trust and company can be contested']
          ]
        },
        {
          type: 'scenario',
          prompt: `You advise the 70-year-old founder of a ₹2,000 crore engineering group. His daughter is CFO and highly rated; his son runs a loss-making division; a non-family COO is the real operator. The founder says, "I\'ll decide succession in my will."`,
          options: [
            { text: 'Agree — a will is enough.', feedback: 'A will transfers shares, not leadership, legitimacy or agreement. Reliance shows what can happen when nothing is settled while the founder is alive.', good: false },
            { text: 'Propose a 3-year plan: a family constitution, independent directors, clear selection criteria for the CEO role, a performance review of the son\'s division, and a role for the COO — with the founder moving to chairman.', feedback: 'Correct. Settle governance and leadership while the founder can still broker agreement, and separate ownership from management roles.', good: true },
            { text: 'Make the son CEO because he is the eldest male.', feedback: 'Choosing by birth order rather than ability risks both performance and family harmony — and the daughter may leave.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Family-business health check',
          items: ['A written family constitution exists and is reviewed', 'Rules for family members joining the business (education, outside experience, reporting lines)', 'Independent directors who can and do disagree', 'Related-party transactions approved by the audit committee', 'A documented succession plan with timelines', 'Dividend and liquidity policy for non-working family owners', 'A forum for family disputes outside the boardroom', 'Wills and holding structures aligned with the governance plan']
        }
      ],
      terms: [
        { term: 'Promoter', def: 'In India, the founder or controlling person/group of a company, identified as such in regulatory filings.' },
        { term: 'Three-circle model', def: 'A framework showing family, ownership and business as overlapping systems with different interests.' },
        { term: 'Family constitution', def: 'A written charter governing family values, roles, ownership rules and dispute resolution.' },
        { term: 'Family council', def: 'A representative body that handles family matters separately from the company board.' },
        { term: 'Related-party transaction', def: 'A deal between a company and its promoters, directors or their entities; requires special approvals.' },
        { term: 'Demerger', def: 'Splitting a company into separate companies, often used to separate businesses for different family branches.' },
        { term: 'Minimum public shareholding', def: 'The rule that listed Indian companies must have at least 25% of shares held by the public.' }
      ],
      quiz: [
        {
          q: 'In the three-circle model, a family member who owns shares but does not work in the business most likely wants:',
          options: ['A senior job', 'Higher reinvestment and lower dividends', 'Regular dividends and information about performance', 'No involvement at all'],
          answer: 2,
          explain: 'Non-working owners typically care about returns and transparency, which can clash with working members who want reinvestment.'
        },
        {
          q: 'What triggered the Reliance split between Mukesh and Anil Ambani?',
          options: ['A government order', 'Disputes after Dhirubhai Ambani died in 2002, reportedly without a will', 'A failed IPO', 'A merger with Tata'],
          answer: 1,
          explain: 'Without a settled succession plan, the brothers clashed; their mother brokered a split in 2005.'
        },
        {
          q: 'Who holds the majority of Tata Sons?',
          options: ['The Tata family members personally', 'Foreign institutional investors', 'The Indian government', 'Charitable Tata Trusts'],
          answer: 3,
          explain: 'Tata Trusts own roughly two-thirds of Tata Sons, which is why trust–company governance is central to the group.'
        },
        {
          q: 'Which governance mechanism most directly protects minority shareholders in a promoter-controlled listed company?',
          options: ['Audit-committee and shareholder approval of related-party transactions', 'A family office', 'A family assembly', 'Larger dividends to the promoter'],
          answer: 0,
          explain: 'Independent scrutiny of deals between the company and promoter entities protects minorities from value transfer.'
        },
        {
          q: 'The Godrej family\'s 2024 realignment is an example of which succession model?',
          options: ['Single heir', 'Split by business between family branches', 'Sale to private equity', 'Trust ownership'],
          answer: 1,
          explain: 'Branches took separate companies and assets, with agreements on use of the brand.'
        }
      ],
      challenge: {
        title: 'Governance for a third-generation textile group',
        prompt: `A Surat textile group (₹800 crore ≈ $91M revenue, unlisted) is owned 50:50 by two brothers in their late 60s. Third generation: the elder brother\'s son (35, runs exports, strong results), the younger brother\'s two daughters (one a chartered accountant at a Big Four firm, one a doctor not interested in the business) and a nephew (28, runs a loss-making retail venture funded by the group). The brothers increasingly disagree on investment. A private-equity fund has offered ₹150 crore for a 20% stake.<br><br>Design a governance and succession plan, and say what to do about the PE offer.`,
        hints: ['Use the three circles: who is in family only, ownership, business?', 'Think about how 50:50 ownership deadlocks — and how it fragments in the next generation.', 'What would a PE investor require on governance?'],
        model: `<p><b>1. Diagnose with three circles</b></p><ul><li><b>Family + owners + business:</b> the brothers, the elder son, the nephew.</li><li><b>Family + future owners only:</b> the doctor daughter (wants returns, not a job); the CA daughter (could join on merit).</li><li><b>Key risks:</b> 50:50 deadlock; a loss-making venture funded without clear rules; no succession criteria.</li></ul><p><b>2. Governance plan (12–24 months)</b></p><ol><li><b>Family constitution:</b> entry rules (relevant degree, 3+ years outside experience, report to non-family managers initially), dividend policy, share-transfer and exit rules (rights of first refusal, valuation formula).</li><li><b>Board:</b> 2 brothers + 2–3 independent directors (one with textile and one with finance expertise) — breaks the deadlock with a casting role for an independent chair.</li><li><b>Capital allocation rule:</b> any venture must meet hurdle rates; the nephew\'s retail venture gets a 12-month plan with milestones, then a fix, sell or close decision.</li><li><b>Succession:</b> run a transparent process for CEO with criteria; the elder son is a strong candidate. Invite the CA daughter to join as CFO-track if she wishes. Brothers become chairman and vice-chairman.</li><li><b>Liquidity:</b> a regular dividend and a periodic buyback window so non-working owners are not trapped.</li></ol><p><b>3. The PE offer:</b> ₹150 crore for 20% implies a post-money equity value of ₹750 crore (about 0.9× revenue). PE brings discipline and an eventual IPO path, but will require board seats, information rights, veto rights and an exit within roughly 5–7 years. <b>Recommendation:</b> put governance in place first (6–12 months), then run a competitive process for a minority investor — governance improvements should raise the valuation, and the family will negotiate from unity rather than division.</p>`
      },
      takeaways: [
        'Family, ownership and business are different circles with different interests — govern each separately.',
        'A family constitution, independent board and succession plan prevent most fights.',
        'Reliance shows the cost of no plan; Bajaj and Godrej show planned splits; Tata shows trust ownership.',
        'Protect minority shareholders with scrutiny of related-party deals.',
        'Settle leadership while the founder can still broker agreement.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'india-7',
      title: 'Go-to-market in Bharat: distribution, kiranas, vernacular, price points and trust',
      level: 'Advanced',
      minutes: 18,
      hook: `In much of India the winning product is not the best one — it is the one that is in the neighbourhood shop, in a ₹10 pack, explained in the customer\'s language, by someone they trust.`,
      eli5: `Imagine selling a great new game to kids in many villages. If the game is only in a big city mall, they cannot get it. If it costs ₹500, they cannot afford it. If the instructions are in a language they do not read, they will not try it. And if they have never heard of you, they will not risk their money. You need the game in the local shop, in a cheap small version, explained in their language, recommended by the shopkeeper they trust.`,
      blocks: [
        {
          type: 'framework', name: 'The Bharat GTM checklist (the 4 As plus trust)', by: 'Adapted from Jagdish Sheth and Rajendra Sisodia\'s "4 A\'s of marketing"', when: 'Before launching beyond metros',
          steps: [
            { label: 'Availability', desc: 'Can the customer find it within a short walk? Distribution reach through distributors, kiranas, rural sellers and e-commerce delivery networks.' },
            { label: 'Affordability', desc: 'Is the ticket size right for daily-wage incomes? Sachets, small packs and ₹1, ₹5, ₹10, ₹20 price points; small-ticket credit or EMIs for durables.' },
            { label: 'Acceptability', desc: 'Does it fit local needs, tastes, climate and usage? Product and pack adapted, not just translated.' },
            { label: 'Awareness', desc: 'Do they know it exists and what it does? Vernacular video, regional TV and cricket, local influencers, shopkeeper recommendations.' },
            { label: 'Trust', desc: 'Will they risk their money? Cash on delivery, easy returns, assisted buying, known faces, visible brand presence in the local market.' }
          ]
        },
        {
          type: 'formula', name: 'The margin stack: what the brand actually keeps',
          expr: 'Brand realisation = MRP − retailer margin − distributor margin − GST (− trade schemes)',
          explain: `In India, packaged goods carry a printed <b>MRP</b> (maximum retail price) that includes all taxes. Every layer of the channel takes a margin from it, so the brand receives much less than the MRP — before its own production, freight and marketing costs.`,
          example: `<i>Illustrative</i>, for a ₹100 MRP product with 18% GST:<br>Retailer margin 15% of MRP → retailer buys at ₹85.<br>Distributor margin about ₹5 → distributor buys at ₹80.<br>Brand receives ₹80 including GST; GST portion = 80 × 18 ÷ 118 = ₹12.20.<br>Net realisation ≈ <b>₹67.80 — about 68% of MRP</b> — before trade schemes, freight and product cost.`
        },
        {
          type: 'compare', title: 'Channels in Bharat', headers: ['Channel', 'How it works', 'Strengths', 'Watch-outs'],
          rows: [
            ['General trade (kiranas)', 'Company → super-stockist → distributor → (wholesaler) → kirana; salesmen visit shops on fixed "beats"', 'Reach: kiranas are commonly estimated at over a crore (10M+) and still carry most FMCG sales', 'Credit to retailers, many layers, limited shelf space'],
            ['B2B e-commerce', 'Apps such as Udaan and Jumbotail supply kiranas directly', 'Cuts layers, offers credit and data', 'Thin margins; mixed profitability'],
            ['Modern trade', 'Supermarket chains (e.g. DMart, Reliance Retail)', 'Volume and visibility in cities', 'Strong buyer power and listing fees'],
            ['Quick commerce', 'Dark stores delivering in minutes (Blinkit, Zepto, Swiggy Instamart)', 'Fast-growing in metros and larger cities', 'Commissions, ad spend and limited tier-3 presence'],
            ['Social and value e-commerce', 'Low-price marketplaces and social sharing (e.g. Meesho)', 'Reaches price-sensitive tier-2+ buyers', 'Returns, cash on delivery, low average order value'],
            ['Assisted / rural direct', 'Local entrepreneurs, self-help groups, agents', 'Trust and last-mile reach', 'Slow to scale; training and support needed']
          ]
        },
        {
          type: 'case', company: 'Reliance Jio', year: '2016–2020', title: 'Collapsing the price of data',
          situation: `In 2016 mobile data in India was expensive and most people used it sparingly. Incumbent telcos earned much of their profit from voice calls.`,
          decision: `Jio launched commercially in September 2016 with a nationwide 4G-only network and free voice and data for an introductory period running into early 2017, then very low data prices with free voice. In 2017 it launched the JioPhone, a feature phone available for a refundable ₹1,500 deposit, to pull feature-phone users onto 4G.`,
          outcome: `Jio reached 10 crore (100 million) subscribers in about 170 days. Data prices fell dramatically and usage exploded, fuelling the rise of video, UPI and vernacular apps. The industry consolidated — Vodafone and Idea merged in 2018 and several players exited — and Jio became the largest operator by subscribers. In 2020 Jio Platforms raised large investments from Meta (Facebook), Google and others.`,
          lesson: `In Bharat, price can be the product. A radical drop in price, backed by massive investment and simple distribution, can create a market rather than just win share. It also shows the scale of capital that strategy requires.`
        },
        {
          type: 'case', company: 'Hindustan Unilever', year: '2001–present', title: 'Project Shakti: distribution through women entrepreneurs',
          situation: `Many villages were too small and too scattered for HUL\'s distributors to serve profitably, yet together they represented a huge market. Many rural women had little income of their own.`,
          decision: `Starting with a pilot in Andhra Pradesh around 2001, HUL recruited women — often from self-help groups — as "Shakti Ammas", who bought products from HUL and sold them door to door in their villages, earning a margin. HUL provided training and, later, digital tools, and added "Shaktimaan" sellers on bicycles to cover nearby villages.`,
          outcome: `The network expanded to cover a large number of villages across many states, giving HUL reach where conventional distribution did not pay, and giving women entrepreneurs income and standing. It became one of the best-known examples of inclusive distribution.`,
          lesson: `In Bharat, trusted local people can be the channel. Designing distribution that creates income for the community builds both reach and trust.`
        },
        {
          type: 'case', company: 'Meesho', year: '2015–2025', title: 'From WhatsApp resellers to value e-commerce',
          situation: `Founded in 2015, Meesho started as a platform for resellers — often homemakers — who shared product catalogues on WhatsApp and Facebook with friends and neighbours and earned a margin, acting as trusted intermediaries for buyers new to online shopping.`,
          decision: `It then moved to a direct marketplace focused on unbranded, low-price products for value-conscious buyers in smaller towns. In 2021 it dropped commissions for sellers, earning instead from advertising and logistics services, and built its own logistics network.`,
          outcome: `Meesho became one of India\'s largest e-commerce platforms by orders, with a large share of users from tier-2 and smaller towns. It moved its parent company back to India and listed on Indian exchanges in late 2025.`,
          lesson: `For Bharat, start with trust (people you know), then win on price and selection. Zero-commission models shift monetisation to ads and services — the same pattern seen with UPI.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Vernacular, trust and price-point tactics',
          html: `<ul><li><b>Vernacular first:</b> design voice and video in Hindi and regional languages, not translated English. Many first-time internet users prefer voice search and video.</li><li><b>Price points beat prices:</b> customers remember ₹5, ₹10, ₹20. Adjust grams, not price — the sachet revolution (popularised by CavinKare\'s Chik shampoo) works this way.</li><li><b>Trust signals:</b> cash on delivery, simple returns, recommendations from the kirana owner, recognisable local faces in ads, and a phone or WhatsApp number that a human answers.</li><li><b>Credit is distribution:</b> kiranas stock what their distributor gives them on credit.</li><li><b>Seasonality:</b> harvest cycles, monsoon and festivals drive rural spending.</li></ul>`
        },
        {
          type: 'interactive', widget: 'funnel', title: 'Model a tier-2 launch funnel',
          note: 'Set a vernacular video campaign as the top of the funnel and compare conversion with and without cash on delivery (raise the checkout conversion step) — then see how many customers and how much revenue each produces.'
        },
        {
          type: 'scenario',
          prompt: `Your metro D2C snack brand (₹99 packs online) wants to grow in tier-2 and tier-3 towns in Uttar Pradesh. What is the best first move?`,
          options: [
            { text: 'Run Instagram ads in English to tier-3 audiences and sell the ₹99 pack online.', feedback: 'Wrong price point, wrong language and a channel where your customer is not shopping for snacks.', good: false },
            { text: 'Launch a ₹10 and ₹20 pack, appoint distributors in 2–3 districts to cover kiranas with credit terms, use Hindi video and in-store displays, and measure repeat orders by shop.', feedback: 'Correct. Match price point, channel, language and trust to how these customers actually buy, and start small enough to learn.', good: true },
            { text: 'List on every quick-commerce app.', feedback: 'Quick commerce is concentrated in larger cities; it will not reach most tier-3 buyers yet.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Kirana', def: 'A small neighbourhood grocery store, the backbone of Indian retail.' },
        { term: 'General trade', def: 'The traditional distribution channel of distributors, wholesalers and independent shops.' },
        { term: 'MRP', def: 'Maximum Retail Price — the legally printed, tax-inclusive price on packaged goods.' },
        { term: 'Super-stockist', def: 'A large intermediary that buys from the company and supplies distributors across a region.' },
        { term: 'Beat plan', def: 'A salesman\'s fixed route of retail outlets visited on set days.' },
        { term: 'Price point', def: 'A memorable price (₹5, ₹10, ₹20) that the product is designed to hit, often by changing pack size.' },
        { term: 'Cash on delivery (COD)', def: 'Paying when the parcel arrives — a key trust mechanism for new online shoppers.' },
        { term: 'Vernacular', def: 'Content and interfaces in local Indian languages rather than English.' }
      ],
      quiz: [
        {
          q: 'A ₹50 MRP product (18% GST included): retailer margin 16% of MRP, distributor margin ₹2. What does the brand receive before GST is removed?',
          options: ['₹42', '₹48', '₹40', '₹34'],
          answer: 2,
          explain: 'Retailer buys at ₹50 × 0.84 = ₹42; distributor buys at ₹42 − ₹2 = ₹40, which is what the brand receives including GST.'
        },
        {
          q: 'In the example above, what is the brand\'s net realisation after removing 18% GST from ₹40?',
          options: ['₹32.80', '₹34.00', '₹33.90', '₹35.20'],
          answer: 2,
          explain: 'GST portion = 40 × 18 ÷ 118 = ₹6.10; ₹40 − ₹6.10 = ₹33.90 (about 68% of MRP).'
        },
        {
          q: 'What made Project Shakti effective?',
          options: ['It used local women entrepreneurs as trusted sellers in villages that distributors could not serve profitably', 'It used TV advertising only', 'It sold premium products to metros', 'It relied on quick commerce'],
          answer: 0,
          explain: 'Shakti created a trusted, low-cost last mile and income for rural women.'
        },
        {
          q: 'How did Jio reach 10 crore subscribers so fast?',
          options: ['By buying a rival', 'Through government mandates', 'Through 3G technology', 'Free introductory services, then very low data prices on a nationwide 4G network, plus a low-cost 4G feature phone'],
          answer: 3,
          explain: 'Radical pricing and a cheap phone, backed by huge investment, created mass demand.'
        },
        {
          q: 'Why do brands in Bharat often change grams rather than price?',
          options: ['Price points like ₹5 and ₹10 are easy to pay and remember, so the pack is sized to hit them', 'MRP is set by the government', 'GST rules require it', 'Kiranas cannot change prices'],
          answer: 0,
          explain: 'Hitting familiar price points matters more to customers than exact grams, so brands adjust pack size.'
        }
      ],
      challenge: {
        title: 'Launch a ₹10 snack pack in eastern Uttar Pradesh',
        prompt: `Your snack brand plans a ₹10 MRP pack (assume 5% GST included in MRP). Retailer margin: 12% of MRP. Distributor margin: ₹0.44 per pack. Product cost: ₹4.50 per pack; freight to distributor: ₹0.40.<br><br>A distributor can sell 3 lakh packs a month. Their costs are ₹60,000 a month (van, salesman), and they carry about 20 days of stock and retailer credit.<br><br>(a) Calculate the brand\'s contribution per pack and per month for this territory. (b) Calculate the distributor\'s monthly profit and annual return on working capital. (c) Recommend a launch plan.`,
        hints: ['Retailer buys at ₹10 × 0.88; distributor buys at that minus ₹0.44.', 'Strip GST: divide by 1.05.', 'Distributor working capital ≈ monthly purchases × 20 ÷ 30.'],
        model: `<p><b>(a) Brand economics per pack</b></p><ul><li>Retailer buys at ₹10 × 0.88 = ₹8.80</li><li>Distributor buys at ₹8.80 − ₹0.44 = ₹8.36 (brand receives this, including GST)</li><li>Net of GST: ₹8.36 ÷ 1.05 = <b>₹7.96</b></li><li>Less product ₹4.50 and freight ₹0.40 → contribution <b>₹3.06 per pack</b> (about 31% of MRP)</li><li>Per month: 3,00,000 × ₹3.06 = <b>₹9.18 lakh</b> (≈ $10,400) before marketing and overheads</li></ul><p><b>(b) Distributor economics</b></p><ul><li>Gross margin: 3,00,000 × ₹0.44 = ₹1,32,000 a month</li><li>Less costs ₹60,000 → profit <b>₹72,000 a month</b> (₹8.64 lakh a year)</li><li>Monthly purchases: 3,00,000 × ₹8.36 = ₹25.08 lakh; working capital ≈ 25.08 × 20 ÷ 30 = <b>₹16.72 lakh</b></li><li>Return on working capital ≈ 8.64 ÷ 16.72 ≈ <b>52% a year</b> — attractive enough to recruit good distributors, provided volumes hold. At 1.5 lakh packs, profit falls to ₹6,000 a month — so early volume support matters.</li></ul><p><b>(c) Launch plan</b></p><ol><li>Start in 2–3 districts with one strong distributor each; give launch schemes (for example a free display rack and 30-day credit on the first order) to get onto kirana shelves.</li><li>Hindi and Bhojpuri video on YouTube and short-video apps; point-of-sale posters; local cricket sponsorships.</li><li>Track weekly: outlets reached, repeat orders per outlet, stock-outs.</li><li>Scale to more districts once repeat orders per outlet are stable and distributors hit at least 2.5 lakh packs a month.</li></ol><p><b>Recommendation:</b> go — the margin stack supports both brand and distributor — but fund 3–4 months of launch support per district and watch distributor volume closely, because it drives everyone\'s economics.</p>`
      },
      takeaways: [
        'In Bharat, availability, affordability, acceptability, awareness and trust decide winners.',
        'Know your margin stack — the brand often keeps only about two-thirds of MRP before its own costs.',
        'Kiranas and distributors run on credit and ROI; make the channel profitable or you will not get shelf space.',
        'Price points, vernacular content and trusted local people beat clever metro marketing.',
        'Jio, Shakti and Meesho show three routes: radical price, trusted distribution and social trust plus value.'
      ]
    }
  ]
});
