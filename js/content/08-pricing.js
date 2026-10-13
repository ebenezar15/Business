/* MBA Studio — Track 8: Pricing & Revenue Models */
MBA.addTrack({
  id: 'pricing',
  stage: 3,
  order: 8,
  title: 'Pricing & Revenue Models',
  icon: '🏷️',
  color: '#14b8a6',
  tagline: 'The fastest lever on profit',
  summary: `Price is the single most powerful profit lever and the one most companies set by guesswork. After this track you can measure willingness to pay, design tiers and freemium funnels, choose between subscription, usage-based and outcome-based models (including AI pricing), avoid price wars and raise prices without losing customers.`,
  outcomes: [
    'Compare cost-plus, competitor-based and value-based pricing and know when each fits',
    'Measure willingness to pay with Van Westendorp and calculate price elasticity',
    'Use anchoring, decoys and good-better-best tiers ethically and effectively',
    'Design freemium, trials, subscription, usage-based, hybrid and AI/outcome-based pricing',
    'Track ARPU, MRR/ARR, NRR and expansion revenue',
    'Plan price increases and avoid destructive discounting and price wars'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-1',
      title: 'Pricing fundamentals: cost-plus, competitor and value-based',
      level: 'Beginner',
      minutes: 14,
      hook: `A 1% better price often lifts profit far more than a 1% cut in costs or a 1% rise in volume.`,
      eli5: `Imagine you bake cookies. Cost-plus pricing says "my cookie costs 20 cents to make, so I sell it for 30". Competitor pricing says "the bakery next door charges 50, so I'll charge 50". Value-based pricing asks "how much is a warm, fresh cookie worth to a hungry kid after football?" — maybe 80. The last question usually earns the most.`,
      blocks: [
        { type: 'text', title: 'Why pricing matters so much', html: `<p>Every extra unit of price goes <b>straight to profit</b> because costs do not change. McKinsey research (Marn and Rosiello, HBR 1992) found that for a typical large company, a 1% price improvement raised operating profit by around 11% — more than equal improvements in volume or variable costs.</p><p>Yet many firms set prices once, copy competitors, and rarely revisit them.</p>` },
        { type: 'formula', name: 'The price lever', expr: 'Profit = (Price − Variable cost) × Volume − Fixed costs', explain: 'Small changes in price move profit by a large percentage when margins are thin.', example: 'Price $100, variable cost $70, volume 10,000, fixed costs $200,000 → profit = 30 × 10,000 − 200,000 = $100,000. Raise price 5% to $105 with no volume loss: profit = 35 × 10,000 − 200,000 = $150,000 → +50%.' },
        { type: 'compare', title: 'Three ways to set price', headers: ['', 'Cost-plus', 'Competitor-based', 'Value-based'], rows: [
          ['How', 'Cost + markup %', 'Match, beat or premium vs rivals', 'Based on value to the customer vs the next best alternative'],
          ['Pros', 'Simple, covers costs', 'Market-tested, easy to explain', 'Captures most profit; aligns with customer outcomes'],
          ['Cons', 'Ignores customers; leaves money on the table', 'Copies rivals\' mistakes; invites price wars', 'Needs research; value differs by segment'],
          ['Good for', 'Contracts, commodities, government work', 'Mature, comparable products', 'Differentiated products, B2B, software']
        ] },
        { type: 'framework', name: 'Economic value estimation (EVE)', by: 'Tom Nagle, The Strategy and Tactics of Pricing', when: 'Setting a value-based price, especially in B2B.', steps: [
          { label: 'Reference value', desc: 'The price of the customer\'s next best alternative.' },
          { label: '+ Positive differentiation value', desc: 'Extra value you provide (time saved, revenue added, risk reduced).' },
          { label: '− Negative differentiation value', desc: 'Where you are worse (switching costs, missing features).' },
          { label: '= Economic value to the customer', desc: 'The ceiling. Price somewhere between your cost and this value, leaving the customer a reason to buy.' }
        ] },
        { type: 'interactive', widget: 'breakeven', title: 'Price vs break-even', note: 'Fixed costs $50,000, variable cost $20. Compare break-even units at $30, $40 and $60 — see how a higher price dramatically lowers the volume you need.' },
        { type: 'case', company: 'Apple', year: '2007–today', title: 'Pricing on value, not cost', situation: `Smartphones have a hardware bill of materials far below their retail price, and many Android rivals sell similar specifications for less.`, decision: `Apple prices on perceived value (design, ecosystem, privacy, resale value, status) and builds a ladder of models and storage tiers, where extra storage carries a large price premium relative to its component cost.`, outcome: `Apple has consistently captured a very large share of global smartphone industry profits despite a minority of unit volume.`, lesson: `Customers pay for value as they perceive it, not for your costs. A strong brand and ecosystem raise willingness to pay.` },
        { type: 'scenario', prompt: `Your software saves a client's finance team about $200,000 a year. It costs you $5,000 a year to serve them. A competitor charges $30,000. What price do you consider?`, options: [
          { text: '$6,000 — cost plus 20%.', feedback: 'You leave enormous value on the table and may even look "too cheap to be serious".', good: false },
          { text: 'Around $40,000–$60,000, justified by ROI and differentiation, with room to negotiate.', feedback: 'Value-based: well below the $200k value so the client gains, but well above cost and anchored above the rival thanks to differentiation.', good: true },
          { text: '$25,000 to undercut the competitor.', feedback: 'Undercutting a differentiated product signals lower quality and can trigger a price war.', good: false }
        ] },
        { type: 'flip', title: 'Pricing basics', cards: [
          { front: 'Markup vs margin on a $100 price with $60 cost', back: 'Markup = 40 ÷ 60 ≈ 67%. Margin = 40 ÷ 100 = 40%.' },
          { front: 'Price floor', back: 'Your cost (below it you lose money per unit).' },
          { front: 'Price ceiling', back: 'The customer\'s perceived economic value.' }
        ] }
      ],
      terms: [
        { term: 'Cost-plus pricing', def: 'Setting price by adding a markup to cost.' },
        { term: 'Value-based pricing', def: 'Setting price based on the value the customer receives compared with alternatives.' },
        { term: 'Markup', def: 'Profit as a percentage of cost.' },
        { term: 'Margin', def: 'Profit as a percentage of price.' },
        { term: 'Reference value', def: 'The price of the customer\'s next best alternative.' },
        { term: 'Economic value to customer (EVC)', def: 'The maximum a rational customer should pay: reference value plus net differentiation value.' }
      ],
      quiz: [
        { q: 'A product costs $40 and sells for $50. What is the margin?', options: ['10%', '25%', '20%', '80%'], answer: 2, explain: 'Margin = 10 ÷ 50 = 20%. (Markup = 10 ÷ 40 = 25%.)' },
        { q: 'Which pricing method captures the most value for differentiated products?', options: ['Value-based', 'Cost-plus', 'Random', 'Matching the cheapest rival'], answer: 0, explain: 'Value-based pricing ties price to customer value.' },
        { q: 'Price $50, variable cost $30, volume 1,000, fixed $15,000. Profit after a 10% price rise with no volume change?', options: ['$5,000', '$15,000', '$20,000', '$10,000'], answer: 3, explain: 'New price $55: (55 − 30) × 1,000 − 15,000 = $10,000, doubling profit from $5,000.' },
        { q: 'In economic value estimation, the reference value is…', options: ['Your cost', 'The price of the customer\'s next best alternative', 'Your target margin', 'The list price'], answer: 1, explain: 'It is the starting point for value.' }
      ],
      challenge: {
        title: 'Price a B2B tool from scratch',
        prompt: `You built software that automates compliance reporting. Customers currently pay a consultant $40,000 a year. Your tool also saves about 200 internal staff hours (staff cost $60/hour) but requires a one-off migration costing the client about $5,000 in time. Your cost to serve: $4,000/year. Estimate economic value and recommend a price.`,
        hints: ['Reference value = consultant cost.', 'Add positive differentiation, subtract negative.', 'Leave the customer a clear gain.'],
        model: `<p><b>EVE</b></p><ul><li>Reference value (consultant): <b>$40,000</b></li><li>+ Positive differentiation: 200 h × $60 = <b>$12,000</b></li><li>− Negative differentiation: migration $5,000 one-off (≈ $1,700/year over 3 years)</li><li>≈ Economic value: <b>~$50,000/year</b></li></ul><p><b>Recommendation</b>: list at <b>$30,000/year</b> (value share of about 60%, giving the client a clear ~$20k annual gain and an easy "cheaper than the consultant" story). Offer free migration support on 2-year contracts to remove the negative value. Margin vs $4k cost is very healthy.</p><p><b>Test</b>: try $25k, $30k and $36k with prospects; watch win rate and negotiation pushback.</p>`
      },
      takeaways: [
        'Price is usually the strongest profit lever.',
        'Cost sets the floor; customer value sets the ceiling.',
        'Value-based pricing beats cost-plus for differentiated products.',
        'Know the difference between markup and margin.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-2',
      title: 'Willingness to pay, Van Westendorp and price elasticity',
      level: 'Beginner',
      minutes: 16,
      hook: `You cannot read customers' minds about price — but you can measure them.`,
      eli5: `Ask friends how much they would pay for a concert ticket. Some say $20, some $100. If you set $100, only superfans come; at $20, the hall is full but you earn little. Willingness to pay is how much each person would pay. Elasticity is how many people stop buying when you raise the price a bit.`,
      blocks: [
        { type: 'framework', name: 'Van Westendorp Price Sensitivity Meter', by: 'Peter van Westendorp, 1976', when: 'Early research on new products to find an acceptable price range.', steps: [
          { label: 'Too cheap', desc: '"At what price would it be so cheap you would doubt its quality?"' },
          { label: 'Cheap / good value', desc: '"At what price is it a bargain — great value for money?"' },
          { label: 'Getting expensive', desc: '"At what price is it getting expensive, but you would still consider it?"' },
          { label: 'Too expensive', desc: '"At what price is it so expensive you would not consider it?"' },
          { label: 'Plot and read', desc: 'Plot cumulative curves; intersections give an acceptable price range and an "optimal" point. Use as a range, not a precise answer.' }
        ] },
        { type: 'compare', title: 'Ways to measure willingness to pay', headers: ['Method', 'How', 'Strength', 'Weakness'], rows: [
          ['Van Westendorp', '4 survey questions', 'Quick, finds a range', 'Stated, not real behaviour'],
          ['Gabor-Granger', '"Would you buy at $X?" at several prices', 'Builds a demand curve', 'Respondents anchor on prices shown'],
          ['Conjoint analysis', 'Choose between bundles of features and prices', 'Values each feature', 'Complex, needs specialist tools'],
          ['Price tests (A/B)', 'Show different prices to real visitors', 'Real behaviour', 'Fairness/legal risks; needs traffic'],
          ['Sales negotiation data', 'Analyse discounts and win/loss', 'Real B2B data', 'Noisy, biased by sales tactics']
        ] },
        { type: 'formula', name: 'Price elasticity of demand', expr: 'Elasticity = % change in quantity ÷ % change in price', explain: 'If |elasticity| > 1, demand is elastic (customers are sensitive; price rises reduce revenue). If < 1, inelastic (price rises increase revenue).', example: 'Price rises 10% and units fall 5% → elasticity = −5 ÷ 10 = −0.5 (inelastic). Revenue: 1.10 × 0.95 = 1.045 → +4.5%.' },
        { type: 'interactive', widget: 'pricing-elasticity', title: 'Find the profit-maximising price', note: 'Set unit cost to $20 and try elasticity −1.5 and then −3. Notice that the profit-maximising price is lower when customers are more price-sensitive.' },
        { type: 'callout', kind: 'insight', title: 'What makes demand inelastic?', html: `<ul><li>Few substitutes (strong brand, unique features, lock-in).</li><li>Small share of the customer's budget.</li><li>Someone else pays (business expenses, insurance).</li><li>High switching costs (data, training, integrations).</li><li>Necessity or habit (utilities, coffee for some people).</li></ul>` },
        { type: 'case', company: 'Netflix', year: '2011 vs 2023', title: 'Same company, different elasticity', situation: `In 2011 Netflix split its DVD and streaming plans, effectively raising the price for customers who wanted both by about 60%, and briefly planned to spin DVDs off as "Qwikster".`, decision: `The change was announced abruptly, with little perceived extra value.`, outcome: `Netflix lost around 800,000 US subscribers in a quarter and its share price fell sharply; Qwikster was cancelled. Years later, with a far larger content library and stronger habit, Netflix raised prices repeatedly and, in 2023, cracked down on password sharing while still growing subscribers.`, lesson: `Elasticity is not fixed — it falls as perceived value, habit and lack of substitutes grow. How you communicate a change matters too.` },
        { type: 'flip', title: 'Elasticity drills', cards: [
          { front: 'Price +20%, units −30%. Elasticity?', back: '−1.5 (elastic). Revenue ≈ 1.2 × 0.7 = 0.84 → −16%.' },
          { front: 'Price −10%, units +5%. Revenue?', back: '0.9 × 1.05 = 0.945 → −5.5%. Inelastic, so the cut lost revenue.' },
          { front: 'Is petrol usually elastic or inelastic short-term?', back: 'Inelastic — people still need to drive.' }
        ] },
        { type: 'scenario', prompt: `Survey results say 70% of users "would pay" $20/month for a premium tier. How confident should you be?`, options: [
          { text: 'Very — launch at $20 and forecast 70% conversion.', feedback: 'Stated willingness to pay usually overstates real behaviour by a wide margin.', good: false },
          { text: 'Treat it as a signal; validate with a real price test or pre-orders before forecasting.', feedback: 'Correct — real money reveals real willingness to pay.', good: true }
        ] }
      ],
      terms: [
        { term: 'Willingness to pay (WTP)', def: 'The maximum price a customer would pay for a product.' },
        { term: 'Van Westendorp', def: 'A four-question survey method that estimates an acceptable price range.' },
        { term: 'Price elasticity', def: 'How much quantity demanded changes in response to a price change.' },
        { term: 'Elastic demand', def: 'Quantity changes proportionally more than price (|E| > 1).' },
        { term: 'Inelastic demand', def: 'Quantity changes proportionally less than price (|E| < 1).' },
        { term: 'Conjoint analysis', def: 'A research method that infers how much customers value each feature by asking them to choose between bundles.' }
      ],
      quiz: [
        { q: 'Price falls 10% and units rise 25%. Elasticity is…', options: ['−2.5', '−0.4', '−1.0', '+2.5'], answer: 0, explain: '25 ÷ −10 = −2.5: elastic.' },
        { q: 'If demand is inelastic, a price increase will usually…', options: ['Decrease revenue', 'Have no effect on volume', 'Increase revenue', 'Make the product illegal'], answer: 2, explain: 'Volume falls by proportionally less than the price rise.' },
        { q: 'Which method uses real purchase behaviour rather than stated answers?', options: ['Van Westendorp', 'A live price test', 'Gabor-Granger survey', 'Focus group'], answer: 1, explain: 'A/B or live tests observe actual buying.' },
        { q: 'Why did Netflix\'s 2011 price change go badly?', options: ['Prices were lowered', 'Streaming was free', 'Netflix stopped streaming', 'A large, abrupt increase with little perceived new value'], answer: 3, explain: 'Customers saw a big hike without extra value; communication was poor.' },
        { q: 'Which factor makes demand LESS price-sensitive?', options: ['Many close substitutes', 'Product is a large share of budget', 'High switching costs', 'Easy price comparison'], answer: 2, explain: 'Lock-in reduces sensitivity.' }
      ],
      challenge: {
        title: 'Should the gym raise prices?',
        prompt: `A gym has 2,000 members at $50/month. Variable cost per member is $10/month. A test at a sister gym suggests a rise to $60 would lose 10% of members. Calculate elasticity, revenue and contribution before and after, and recommend.`,
        hints: ['% change in price = 20%; % change in quantity = −10%.', 'Contribution = (price − variable cost) × members.', 'Consider who leaves and why.'],
        model: `<p><b>Elasticity</b> = −10% ÷ +20% = <b>−0.5</b> (inelastic).</p><p><b>Before</b>: revenue 2,000 × $50 = $100,000; contribution 2,000 × $40 = <b>$80,000</b>.</p><p><b>After</b>: 1,800 members; revenue 1,800 × $60 = $108,000; contribution 1,800 × $50 = <b>$90,000</b> (+12.5%). Fewer members also means less crowding and lower wear.</p><p><b>Recommendation</b>: raise to $60 for new members now; for existing members, raise with 60 days' notice plus a visible improvement (new equipment, longer hours) or offer a 12-month lock at $55 to protect loyal members. Monitor cancellations weekly and keep a cheaper off-peak tier to retain price-sensitive members.</p>`
      },
      takeaways: [
        'Measure willingness to pay; do not guess it.',
        'Stated WTP overstates reality — confirm with real tests.',
        'Elasticity tells you whether a price change helps or hurts revenue.',
        'Value, habit and switching costs make demand less elastic.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-3',
      title: 'Psychological pricing and good-better-best tiers',
      level: 'Intermediate',
      minutes: 16,
      hook: `People rarely know what something is worth — they judge prices by comparison, and you design what they compare against.`,
      eli5: `At the cinema, a small popcorn is $5, a large is $8.50 and a medium is $8. Suddenly the large looks like a bargain. The medium is there mainly to make the large look good. Shops use tricks like this all the time — knowing them helps you price well and buy smart.`,
      blocks: [
        { type: 'case', company: 'The Economist (Dan Ariely experiment)', year: '2008', title: 'The decoy effect', situation: `In <i>Predictably Irrational</i>, Dan Ariely described an Economist subscription offer: web-only $59, print-only $125, print + web $125.`, decision: `He tested it with MIT students. With all three options, most chose print + web and nobody chose print-only. When the "useless" print-only option was removed, most switched to the cheaper web-only option.`, outcome: `The print-only option acted as a <b>decoy</b>: by making print + web look like a free upgrade, it shifted choices towards the expensive bundle.`, lesson: `The options you show change what people choose. An option nobody buys can still do a lot of work.` },
        { type: 'framework', name: 'Key pricing psychology effects', by: 'Behavioural economics (Kahneman, Tversky, Thaler, Ariely and others)', when: 'Designing price pages, menus and offers.', steps: [
          { label: 'Anchoring', desc: 'The first price seen sets expectations. Show the premium plan or "was" price first.' },
          { label: 'Decoy (asymmetric dominance)', desc: 'Add an option that is clearly worse than your target option to make the target look better.' },
          { label: 'Charm pricing', desc: '$9.99 reads as "9-something" (left-digit effect). Common in mass retail; luxury brands often prefer round prices to signal quality.' },
          { label: 'Compromise effect', desc: 'With three options, many choose the middle — so put your target option there.' },
          { label: 'Pain of paying & framing', desc: '"$1 a day" feels smaller than "$365 a year"; bundles and subscriptions reduce repeated payment pain.' },
          { label: 'Loss aversion', desc: 'Losses loom larger than gains: "Don\'t lose your saved files" can beat "Get more storage".' }
        ] },
        { type: 'text', title: 'Good-better-best (GBB)', html: `<p>Instead of one price, offer <b>three tiers</b> that serve different segments:</p><ul><li><b>Good</b>: entry option, wins price-sensitive buyers, protects against low-cost rivals.</li><li><b>Better</b>: the target — most customers should pick this.</li><li><b>Best</b>: premium for high-value customers; also anchors the middle as reasonable.</li></ul><p>Differentiate tiers by <b>features that different segments value differently</b> (e.g. users, storage, support, admin controls, security), not random extras.</p>` },
        { type: 'compare', title: 'Designing tiers: example SaaS', headers: ['', 'Starter $19', 'Pro $49 (target)', 'Business $99'], rows: [
          ['Who', 'Freelancers', 'Small teams', 'Growing companies'],
          ['Users', '1', 'Up to 10', 'Unlimited'],
          ['Key fence', 'Basic features', 'Automations, integrations', 'SSO, admin, audit logs, priority support'],
          ['Role', 'Entry and anti-competitor', 'Volume and profit', 'Anchor and high-value capture']
        ] },
        { type: 'case', company: 'Apple', year: 'Ongoing', title: 'A ladder of prices', situation: `Apple sells many iPhone models at once, from a lower-priced model to "Pro Max", each with several storage tiers.`, decision: `Each step up adds a modest amount (storage, camera, screen) for a step in price, nudging buyers upwards; the top models anchor the range.`, outcome: `Buyers who came for a mid-priced model often trade up one or two steps, raising average selling price.`, lesson: `A well-designed ladder with small steps lets every segment find a price and encourages upgrades.` },
        { type: 'callout', kind: 'warning', title: 'Psychology is not manipulation licence', html: `<p>Fake "was" prices, hidden fees ("drip pricing") and fake countdown timers are increasingly illegal. Regulators in the US (FTC rules on junk fees and negative-option subscriptions) and the UK and EU (consumer-protection rules) have tightened enforcement. Use psychology to <b>clarify value</b>, not to deceive — deception destroys trust and invites fines.</p>` },
        { type: 'interactive', widget: 'ab-test', title: 'Test a decoy on your pricing page', note: 'Variant A: two plans. Variant B: adds a decoy. Try 3,000 visitors each with 4.0% vs 4.8% upgrade to the premium plan. Is it significant?' },
        { type: 'scenario', prompt: `You sell two plans: Basic $10 and Premium $30. 90% choose Basic. You want more Premium sales. Best move?`, options: [
          { text: 'Add a $25 "Plus" plan with only slightly more than Basic.', feedback: 'A decoy close to Premium in price but far weaker in value makes Premium look like the obvious upgrade.', good: true },
          { text: 'Remove Basic entirely.', feedback: 'You may lose most of your price-sensitive customers.', good: false },
          { text: 'Cut Premium to $12.', feedback: 'You would destroy margin and the anchor.', good: false }
        ] }
      ],
      terms: [
        { term: 'Anchoring', def: 'Relying heavily on the first number seen when judging prices.' },
        { term: 'Decoy effect', def: 'Adding an inferior option shifts preference towards a similar but clearly better option.' },
        { term: 'Charm pricing', def: 'Prices ending in 9 or 99 that feel lower due to the left-digit effect.' },
        { term: 'Compromise effect', def: 'The tendency to choose the middle option among three.' },
        { term: 'Good-better-best', def: 'A three-tier pricing structure aimed at different customer segments.' },
        { term: 'Price fence', def: 'A rule or feature difference that separates tiers so customers self-select (e.g. number of users).' },
        { term: 'Drip pricing', def: 'Revealing extra mandatory fees only late in the buying process — increasingly regulated.' }
      ],
      quiz: [
        { q: 'In Ariely\'s Economist example, the print-only option at $125 acted as…', options: ['A decoy making print + web look like a bargain', 'The most popular option', 'A discount', 'A loss leader'], answer: 0, explain: 'Nobody chose it, but it shifted choices.' },
        { q: 'With three tiers, where should you usually place the plan you most want to sell?', options: ['Cheapest', 'Most expensive', 'Hidden', 'Middle'], answer: 3, explain: 'The compromise effect favours the middle.' },
        { q: 'Why might a luxury brand avoid $99.99 prices?', options: ['It is illegal', 'Round prices signal quality rather than bargains', 'Card machines cannot process cents', 'Taxes'], answer: 1, explain: 'Charm prices signal discount.' },
        { q: 'A good price fence between tiers is…', options: ['Features that different segments value differently, e.g. SSO for enterprises', 'Random colours', 'Making the cheap plan broken', 'Charging by surname'], answer: 0, explain: 'Fences let customers self-select by value.' }
      ],
      challenge: {
        title: 'Redesign a pricing page',
        prompt: `A project-management SaaS has one plan at $15/user/month. Customers range from 2-person agencies to 500-person companies needing SSO and audit logs. 30% of trial users say "too expensive", while large customers say "we'd pay more for security features". Design a good-better-best structure with prices, fences and the expected role of each tier.`,
        hints: ['What do small teams need vs enterprises?', 'Use security/admin as the top fence.', 'Where will the anchor sit?'],
        model: `<p><b>Tiers</b></p><ul><li><b>Starter — $8/user/month</b>: up to 5 users, core boards and tasks. Role: win price-sensitive small teams, block cheap rivals.</li><li><b>Team — $15/user/month (target)</b>: unlimited projects, automations, integrations, reporting. Role: the default choice for most teams; same price as today, so existing customers are unaffected.</li><li><b>Enterprise — $30/user/month (annual, min 50 seats)</b>: SSO, audit logs, admin controls, data residency, priority support, SLA. Role: capture high willingness to pay; anchor the Team plan as good value.</li></ul><p><b>Page design</b>: show Enterprise or Team first with "Most popular" on Team; annual billing toggle (e.g. two months free); transparent pricing with no hidden fees.</p><p><b>Expected effect</b>: Starter converts some of the 30% who found it too expensive; Enterprise lifts ARPU among large accounts; measure tier mix, conversion and ARPU after 60 days.</p>`
      },
      takeaways: [
        'People judge prices by comparison — design the comparison.',
        'Decoys and anchors shift choices; use them honestly.',
        'Good-better-best serves multiple segments with one page.',
        'Fence tiers by value differences between segments.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-4',
      title: 'Revenue models: freemium, trials, subscription, usage and AI pricing',
      level: 'Intermediate',
      minutes: 18,
      hook: `How you charge can matter more than how much you charge.`,
      eli5: `A buffet charges one price for all you can eat (subscription). A taxi charges by the kilometre (usage). A free sample at the supermarket lets you taste before buying (freemium/trial). A lawyer who only gets paid if you win is charging for outcomes. Same food, rides and advice — very different ways of paying.`,
      blocks: [
        { type: 'compare', title: 'Revenue models compared', headers: ['Model', 'How it charges', 'Great when', 'Examples'], rows: [
          ['One-off sale', 'Pay once', 'Durable goods, clear ownership', 'Furniture, perpetual licences'],
          ['Subscription', 'Fixed recurring fee', 'Ongoing value, predictable use', 'Netflix, Spotify, Microsoft 365'],
          ['Per seat', 'Per user per month', 'Value grows with people using it', 'Slack, many SaaS tools'],
          ['Usage-based', 'Pay for consumption', 'Usage varies widely; value tracks usage', 'AWS, Twilio, Snowflake'],
          ['Hybrid', 'Platform fee + usage or seats + credits', 'Need predictability and growth', 'Many 2025–26 AI and SaaS products'],
          ['Outcome-based', 'Pay per result', 'Outcome is measurable and attributable', 'Intercom Fin per resolution'],
          ['Razor & blades', 'Cheap base, profitable consumables', 'Repeat consumable purchases', 'Printers & ink, Gillette'],
          ['Advertising / marketplace take rate', 'Others pay to reach users, or a % of each transaction', 'Large audiences or two-sided markets', 'Google, Meta, Airbnb, Uber']
        ] },
        { type: 'case', company: 'Adobe', year: '2012–2013', title: 'From boxes to Creative Cloud', situation: `Adobe sold Creative Suite as expensive perpetual licences, with big upgrade cycles every couple of years and lots of piracy.`, decision: `After launching Creative Cloud in 2012, Adobe announced in May 2013 that new versions would be subscription-only, despite loud user protests and a planned short-term revenue dip.`, outcome: `Revenue dipped during the transition, then grew strongly and became far more predictable; Adobe's market value rose substantially over the following years. It is a standard business-school case on subscription transitions.`, lesson: `Switching to subscription trades short-term revenue for predictable, compounding recurring revenue — if you communicate the "J-curve" to investors and keep shipping value.` },
        { type: 'case', company: 'Snowflake', year: '2014–today', title: 'Pay for what you use', situation: `Traditional data warehouses required large upfront licences and fixed capacity.`, decision: `Snowflake separated storage from compute and charged by consumption (credits), so customers start small and pay more as they run more workloads.`, outcome: `It enabled easy entry and strong expansion — Snowflake reported very high net revenue retention around its 2020 IPO — but revenue also became sensitive to customers optimising usage when budgets tightened.`, lesson: `Usage pricing aligns price with value and fuels expansion, but makes revenue less predictable.` },
        { type: 'text', title: 'Freemium vs free trial', html: `<p><b>Freemium</b>: a free plan forever, with limits; paid plans unlock more. Works when the free product is cheap to serve and free users create value (virality, network effects, content). Examples: Spotify, Zoom (time-limited meetings on free), Slack (message history limits), Canva.</p><p><b>Free trial</b>: full product for a limited time (often 7–30 days). Works when value shows quickly. <b>Opt-out trials</b> (card required) usually convert a higher share of trial users; <b>opt-in</b> (no card) gets more sign-ups. Design for activation: users who reach the "aha" moment convert.</p>` },
        { type: 'text', title: 'AI pricing in 2025–26', html: `<p>AI features have real <b>marginal cost</b> (compute per request), which breaks the "software is free to copy" assumption. Common patterns:</p><ul><li><b>Premium consumer tiers</b>: e.g. ChatGPT Plus at $20/month and a much higher-priced Pro tier for heavy users.</li><li><b>Credits</b>: a monthly allowance of AI actions, with top-ups.</li><li><b>Per-action / per-conversation</b>: Salesforce introduced per-conversation pricing for Agentforce in 2024 and later added flexible credit-based options.</li><li><b>Outcome-based</b>: Intercom charges per AI resolution for its Fin agent ($0.99 per resolution at launch), and Zendesk introduced outcome-based pricing for AI agents.</li><li><b>Seats under pressure</b>: if AI agents replace human users, per-seat pricing shrinks as customers succeed — a key reason vendors move to usage or outcome pricing.</li></ul>` },
        { type: 'interactive', widget: 'retention', title: 'Subscription health', note: 'Compare 3% vs 8% monthly churn over 24 months. Notice how small churn differences compound into big differences in surviving revenue.' },
        { type: 'matrix', name: 'Choosing a pricing metric', xLabel: 'Usage variability across customers →', yLabel: 'Need for budget predictability →', cells: [
          { label: 'Flat subscription / seats', desc: 'Similar usage, buyers want fixed budgets (most classic SaaS).' },
          { label: 'Hybrid: commit + overage / credits', desc: 'Usage varies, but finance wants predictability — committed spend with drawdown.' },
          { label: 'Simple tiers or one-off', desc: 'Low variability and low need for predictability — keep it simple.' },
          { label: 'Pure usage / outcome', desc: 'Usage varies hugely and buyers accept variable bills (developers, infrastructure, AI agents).' }
        ] },
        { type: 'scenario', prompt: `Your AI customer-support agent can resolve tickets that human agents used to handle. You currently charge $50 per human seat. As AI succeeds, customers cut seats. What should you consider?`, options: [
          { text: 'Keep seat pricing and hope seats do not fall.', feedback: 'Your revenue shrinks exactly as your product succeeds — a broken value metric.', good: false },
          { text: 'Move to a hybrid: platform fee plus per-resolution pricing tied to outcomes.', feedback: 'Aligns revenue with value delivered and protects you as seats decline.', good: true },
          { text: 'Make AI free to win market share.', feedback: 'AI has real compute costs; free unlimited AI can destroy gross margin.', good: false }
        ] }
      ],
      terms: [
        { term: 'Subscription', def: 'Recurring fixed payments for ongoing access.' },
        { term: 'Usage-based pricing', def: 'Charging according to how much the customer consumes.' },
        { term: 'Value metric', def: 'The unit you charge for (seats, API calls, resolutions) — ideally one that grows with customer value.' },
        { term: 'Freemium', def: 'A permanently free tier with paid upgrades.' },
        { term: 'Outcome-based pricing', def: 'Charging per measurable result, such as a resolved support ticket.' },
        { term: 'Hybrid pricing', def: 'Combining a fixed fee with usage, seats or credits.' },
        { term: 'Credits', def: 'Prepaid units customers spend on actions such as AI requests.' }
      ],
      quiz: [
        { q: 'Which model best aligns price with value when customer usage varies a lot?', options: ['One-off sale', 'Flat price for all', 'Usage-based', 'Donations'], answer: 2, explain: 'Usage pricing scales with consumption.' },
        { q: 'Adobe\'s 2013 move to subscription caused…', options: ['Immediate revenue jump', 'A short-term revenue dip followed by strong, predictable growth', 'Bankruptcy', 'No change'], answer: 1, explain: 'The classic subscription J-curve.' },
        { q: 'Why are AI features challenging for classic SaaS pricing?', options: ['They are always free', 'Customers dislike AI', 'They cannot be priced', 'They have real per-use compute costs, and can reduce the number of seats needed'], answer: 3, explain: 'Marginal cost and seat compression change the economics.' },
        { q: 'Intercom\'s Fin pricing per resolution is an example of…', options: ['Cost-plus pricing', 'Freemium', 'Outcome-based pricing', 'Per-seat pricing'], answer: 2, explain: 'Customers pay per successful result.' },
        { q: 'A card-required (opt-out) free trial usually…', options: ['Gets fewer sign-ups but a higher trial-to-paid rate', 'Gets more sign-ups and fewer conversions', 'Is banned everywhere', 'Has no effect'], answer: 0, explain: 'The card filters for serious users.' }
      ],
      challenge: {
        title: 'Price an AI writing assistant',
        prompt: `You launch an AI writing tool for marketing teams. Compute cost averages $0.02 per generation; light users make ~200 generations a month, heavy users ~5,000. Competitors charge $20–30/user/month flat. Design a pricing model that protects gross margin (target 75%+) and is easy to buy.`,
        hints: ['Compute cost for light vs heavy users.', 'Consider seats plus included credits.', 'Offer predictable overage or top-ups.'],
        model: `<p><b>Cost per user</b>: light 200 × $0.02 = $4/month; heavy 5,000 × $0.02 = $100/month. A flat $25 makes heavy users unprofitable.</p><p><b>Design: hybrid seats + credits</b></p><ul><li><b>Starter $25/user/month</b> — includes 1,000 generations (max cost $20; typical user far below). Gross margin on a typical light user ≈ (25 − 4) ÷ 25 = 84%.</li><li><b>Pro $60/user/month</b> — 3,000 generations, brand voice, team templates.</li><li><b>Top-ups</b>: extra generations cost us $0.02 × 1,000 = $20 per thousand, so sell top-ups at <b>$80 per 1,000</b> to keep a 75% margin (or nudge heavy users to Pro, where included credits are cheaper per unit).</li><li><b>Enterprise</b>: annual committed credits with volume discount, SSO, admin controls.</li></ul><p><b>Margin check</b>: blended margin depends on usage mix — model it monthly and adjust included credits; use cheaper models for simple tasks to cut cost per generation.</p><p><b>Why it works</b>: easy per-seat purchase, price comparable to rivals, protection from heavy users, and natural expansion via top-ups.</p>`
      },
      takeaways: [
        'Choose a value metric that grows as customer value grows.',
        'Subscriptions trade short-term cash for predictable recurring revenue.',
        'Usage and outcome pricing align with value but reduce predictability.',
        'AI has real marginal costs — price with credits, usage or outcomes to protect margin.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-5',
      title: 'Discounting, price wars and recurring-revenue metrics',
      level: 'Advanced',
      minutes: 16,
      hook: `A 20% discount on a 30% margin product means you must sell three times as much just to stand still.`,
      eli5: `If you sell sweets for $1 and they cost you 70 cents, you make 30 cents each. Give a 20-cent discount and you only make 10 cents — so you must sell three sweets to earn what one used to earn. Price wars are when two shops keep cutting until neither makes any money.`,
      blocks: [
        { type: 'formula', name: 'Volume needed to offset a discount', expr: 'Required volume increase = Discount % ÷ (Margin % − Discount %)', explain: 'How much more you need to sell to keep the same gross profit after a price cut.', example: 'Margin 30%, discount 20%: 20 ÷ (30 − 20) = 200% more volume — you must triple sales. Margin 60%, discount 10%: 10 ÷ 50 = 20% more volume.' },
        { type: 'case', company: 'JCPenney', year: '2012–2013', title: '"Fair and Square" pricing', situation: `JCPenney's customers were used to frequent coupons and sales. New CEO Ron Johnson (formerly Apple's retail chief) wanted honest, simple, everyday low prices.`, decision: `In 2012 it largely eliminated coupons and constant sales in favour of lower everyday prices and monthly promotions.`, outcome: `Sales fell by roughly a quarter in 2012 and the company lost heavily; Johnson was ousted in 2013 and coupons came back.`, lesson: `Customers often value the <i>feeling</i> of a deal, not just the final price. Changing a pricing model abruptly — without testing on real customers — can shatter demand.` },
        { type: 'case', company: 'Uber vs Didi in China', year: '2014–2016', title: 'An expensive price war', situation: `Uber and local rival Didi fought for the Chinese ride-hailing market with heavy subsidies to riders and drivers.`, decision: `Both sides spent huge sums on incentives. Uber's CEO publicly acknowledged it was losing over $1 billion a year in China.`, outcome: `In 2016 Uber sold its China business to Didi in exchange for a stake in the combined company.`, lesson: `Price wars are wars of attrition; the side with deeper pockets and local advantage usually wins, and both burn value.` },
        { type: 'framework', name: 'Avoiding and fighting price wars', by: 'Adapted from Rao, Bergen & Davis, HBR (2000)', when: 'A competitor cuts prices.', steps: [
          { label: 'Diagnose', desc: 'Is the cut temporary, targeted or strategic? Which customers are at risk?' },
          { label: 'Respond with value, not price', desc: 'Emphasise quality, service, outcomes; add bundles rather than cut list price.' },
          { label: 'Use a fighter brand or tier', desc: 'A lower-priced offer for price-sensitive segments, protecting the main brand.' },
          { label: 'Targeted response', desc: 'Match only for at-risk customers or in contested regions.' },
          { label: 'Signal', desc: 'Make clear you will defend key segments, discouraging further cuts.' },
          { label: 'Exit if needed', desc: 'Sometimes ceding a low-margin segment is the right move.' }
        ] },
        { type: 'compare', title: 'Recurring revenue metrics', headers: ['Metric', 'Formula', 'What it tells you'], rows: [
          ['MRR / ARR', 'Sum of monthly recurring revenue; ARR = MRR × 12', 'Size and growth of the recurring base'],
          ['ARPU / ARPA', 'Revenue ÷ users (or accounts)', 'Monetisation per customer'],
          ['Expansion MRR', 'Upgrades + add-ons + usage growth', 'Growth from existing customers'],
          ['Churned MRR', 'MRR lost from cancellations and downgrades', 'Leakage'],
          ['NRR', '(Start + expansion − contraction − churn) ÷ Start', 'Overall health of the base'],
          ['Quick ratio (SaaS)', '(New + expansion MRR) ÷ (churned + contraction MRR)', 'Growth efficiency; above ~4 is often called strong']
        ] },
        { type: 'interactive', widget: 'unit-economics', title: 'Discount impact on LTV', note: 'Set ARPU $100, margin 80%, churn 3%. Then apply a 25% "forever" discount (ARPU $75) and see how LTV and payback change.' },
        { type: 'checklist', title: 'Discount discipline', items: [
          'Every discount has a reason code in the CRM',
          'Approval levels rise with discount size',
          'Discounts are traded for something (term, upfront payment, case study)',
          'Time-limited, not permanent ("first year only")',
          'Track realised price vs list price monthly (price waterfall)',
          'Reps are paid on margin or net revenue, not just volume'
        ] },
        { type: 'flip', title: 'Metric drills', cards: [
          { front: 'MRR $250k. ARR?', back: '$3M.' },
          { front: 'New MRR $40k, expansion $20k, churn $10k, contraction $5k. Quick ratio?', back: '60 ÷ 15 = 4.0.' },
          { front: 'Margin 40%, discount 10%. Volume needed?', back: '10 ÷ 30 ≈ 33% more.' }
        ] }
      ],
      terms: [
        { term: 'Price war', def: 'Repeated competitive price cuts that erode profits for all players.' },
        { term: 'Fighter brand', def: 'A lower-priced brand or tier launched to counter low-cost rivals without cutting the main brand\'s price.' },
        { term: 'MRR / ARR', def: 'Monthly / annual recurring revenue from subscriptions.' },
        { term: 'ARPU', def: 'Average revenue per user (ARPA = per account).' },
        { term: 'Expansion revenue', def: 'Extra revenue from existing customers through upgrades, add-ons or more usage.' },
        { term: 'Price waterfall', def: 'A breakdown from list price to final realised price showing every discount and rebate.' },
        { term: 'SaaS quick ratio', def: 'Ratio of MRR gained (new + expansion) to MRR lost (churn + contraction).' }
      ],
      quiz: [
        { q: 'Gross margin 50%, discount 10%. Volume increase needed to keep gross profit flat?', options: ['10%', '50%', '100%', '25%'], answer: 3, explain: '10 ÷ (50 − 10) = 25%.' },
        { q: 'What was the main lesson from JCPenney\'s 2012 pricing change?', options: ['Coupons are illegal', 'Customers value the experience of deals; abrupt untested changes can collapse demand', 'Everyday low prices always work', 'Department stores should only sell online'], answer: 1, explain: 'Removing deals removed a key perceived value.' },
        { q: 'A competitor cuts price 30%. Usually the best first response is…', options: ['Diagnose and respond with value or a targeted/fighter offer', 'Immediately cut 35%', 'Ignore all customers', 'Exit the market'], answer: 0, explain: 'Avoid a blanket price war.' },
        { q: 'New MRR $30k, expansion $10k, churn $8k, contraction $2k. Quick ratio?', options: ['2', '5', '4', '40'], answer: 2, explain: '40 ÷ 10 = 4.' }
      ],
      challenge: {
        title: 'The end-of-quarter discount',
        prompt: `Your sales team wants to offer a 30% discount on annual plans in the last two weeks of the quarter to hit target. Product gross margin is 75%. Historically, end-of-quarter discounts have trained customers to wait. ARR target gap: $400k. Average deal: $20k list. Analyse the impact and propose an alternative.`,
        hints: ['How many extra deals does the discount need to break even on gross profit?', 'What does it do to future buying behaviour and NRR?', 'What can you trade instead?'],
        model: `<p><b>Economics</b>: required volume increase = 30 ÷ (75 − 30) ≈ <b>67%</b> more deals just to keep gross profit flat. At a $14k discounted deal, closing the $400k gap needs ~29 deals vs 20 at list.</p><p><b>Hidden costs</b>: discounted prices become the renewal anchor (lower future ARR and NRR); customers learn to wait for quarter-end, lengthening cycles; reps lose pricing discipline.</p><p><b>Alternative</b></p><ul><li>Offer <b>non-price incentives</b>: extra onboarding, an additional module free for the first year, or extended payment terms.</li><li>If a discount is used: max 10–15%, first year only, in exchange for a multi-year commitment or upfront payment or a case study.</li><li>Pull forward genuine deals with mutual action plans rather than blanket offers.</li><li>Fix the root cause: pipeline coverage and forecasting so targets do not depend on last-minute discounting.</li></ul>`
      },
      takeaways: [
        'Discounts need far more volume than intuition suggests.',
        'Never give without getting — trade discounts for value.',
        'Avoid price wars; respond with value, fighter brands or targeted moves.',
        'Track MRR, ARPU, expansion, NRR and quick ratio as one system.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'pricing-6',
      title: 'Monetisation design and raising prices the right way',
      level: 'Advanced',
      minutes: 16,
      hook: `The companies with the strongest pricing power are the ones that can raise prices and see customers stay.`,
      eli5: `When your favourite ice-cream shop raises the price by 20 cents but also adds a new flavour and tells you why, you probably keep going. If it suddenly doubles the price with no explanation, you go somewhere else. Raising prices is normal — the way you do it decides whether people stay.`,
      blocks: [
        { type: 'callout', kind: 'insight', title: 'Pricing power as a test of a business', html: `<p>Warren Buffett has said that the single most important decision in evaluating a business is its <b>pricing power</b>: if you can raise prices without losing business to a competitor, you have a very good business.</p>` },
        { type: 'framework', name: 'Monetisation design canvas', by: 'Synthesis of practice (e.g. Simon-Kucher, Monetizing Innovation by Ramanujam & Tacke, 2016)', when: 'Designing how a new product makes money — ideally before building it.', steps: [
          { label: 'Segments & WTP', desc: 'Which segments exist and what is each willing to pay? Design the product around WTP, not the other way round.' },
          { label: 'Value metric', desc: 'What unit grows with value: seats, usage, outcomes, transactions?' },
          { label: 'Packaging', desc: 'Tiers, add-ons and bundles that fit segments; decide what is free.' },
          { label: 'Revenue streams', desc: 'Core subscription, usage, services, marketplace fees, data/partner revenue — which mix?' },
          { label: 'Price levels', desc: 'Set using value estimation and tests.' },
          { label: 'Governance', desc: 'Who owns pricing; discount rules; regular reviews (at least annually).' }
        ] },
        { type: 'case', company: 'Costco', year: '1985–2024', title: 'Raise membership, keep the hot dog', situation: `Costco's business model earns much of its profit from membership fees, while keeping product markups low. Its $1.50 hot dog-and-soda combo has stayed at that price since 1985.`, decision: `Costco raises membership fees only every several years. In September 2024 it raised the US Gold Star fee from $60 to $65 and Executive from $120 to $130, while keeping the hot dog at $1.50 as a symbol of value.`, outcome: `Costco's membership renewal rates have stayed very high (around 90% in the US and Canada), showing strong pricing power when value is clear.`, lesson: `Raise prices where value is strongest and protect visible "value signals" that customers care about emotionally.` },
        { type: 'timeline', title: 'A price increase playbook', items: [
          { label: 'Research', desc: 'Check WTP, competitor prices and segment sensitivity; quantify value delivered.' },
          { label: 'Design', desc: 'Decide who is affected (new vs existing customers), amount, and any grandfathering.' },
          { label: 'Add value', desc: 'Pair the increase with new features, better service or clearer packaging.' },
          { label: 'Communicate', desc: 'Give notice (e.g. 30–90 days), explain why, show value, offer options (annual lock-in, downgrade path).' },
          { label: 'Enable teams', desc: 'Train sales and support with FAQs; set rules for exceptions.' },
          { label: 'Monitor', desc: 'Track churn, downgrades, win rate and NRR weekly; be ready to adjust.' }
        ] },
        { type: 'compare', title: 'Ways to raise effective price', headers: ['Approach', 'Example', 'Risk'], rows: [
          ['List price increase', 'Plan goes from $49 to $59', 'Visible; churn if value unclear'],
          ['Repackaging', 'Move a popular feature to a higher tier', 'Feels like a "take-away" if mishandled'],
          ['New premium tier', 'Add an Enterprise or Pro plan', 'Low — captures high WTP'],
          ['Reduce discounts', 'Tighten discount approvals', 'Sales pushback'],
          ['Usage / add-on monetisation', 'Charge for AI credits or extra storage', 'Bill shock if unpredictable'],
          ['Shrinkflation (consumer goods)', 'Smaller pack, same price', 'Strong backlash and regulatory attention when discovered']
        ] },
        { type: 'interactive', widget: 'pricing-elasticity', title: 'Model a price increase', note: 'Set a $49 price, 1,000 customers and elasticity −0.4. Try a 20% increase. How does profit change? Now try elasticity −1.8.' },
        { type: 'scenario', prompt: `You plan to raise prices 25% for all existing customers next month with a one-line email. What is the main risk and the better plan?`, options: [
          { text: 'No risk — customers rarely leave.', feedback: 'Abrupt, unexplained rises spark churn and public backlash (remember Netflix 2011).', good: false },
          { text: 'Give 60–90 days\' notice, explain the added value, offer an annual lock-in at the old price, and phase increases for long-standing customers.', feedback: 'Correct — notice, value, options and segmentation reduce churn.', good: true }
        ] },
        { type: 'checklist', title: 'Price increase readiness', items: [
          'Value delivered is quantified and communicated',
          'Segments ranked by sensitivity; at-risk accounts identified',
          'Notice period and grandfathering policy set',
          'Customer-facing email, FAQ and sales scripts approved',
          'Downgrade path exists (keep them, even at a lower tier)',
          'Dashboard tracks churn, downgrades and NRR weekly'
        ] }
      ],
      terms: [
        { term: 'Pricing power', def: 'The ability to raise prices without losing significant business.' },
        { term: 'Grandfathering', def: 'Letting existing customers keep their old price for a period after an increase.' },
        { term: 'Monetisation', def: 'The overall design of how a product generates revenue.' },
        { term: 'Revenue stream', def: 'A distinct source of revenue, such as subscriptions, usage fees, services or commissions.' },
        { term: 'Repackaging', def: 'Changing what is included in each tier or plan, which changes effective price.' },
        { term: 'Shrinkflation', def: 'Reducing product size or quantity while keeping the price the same.' }
      ],
      quiz: [
        { q: 'According to Buffett, the most important factor in evaluating a business is…', options: ['Number of employees', 'Pricing power', 'Office location', 'Logo design'], answer: 1, explain: 'Pricing power indicates a strong competitive position.' },
        { q: 'Costco\'s 2024 move shows…', options: ['Raising every product price at once', 'Abolishing membership', 'Cutting all prices', 'Raising membership fees while protecting visible value signals like the $1.50 hot dog'], answer: 3, explain: 'It raised fees where value is clear and kept the icon.' },
        { q: 'Which approach to raising effective price is usually lowest risk?', options: ['Shrinkflation', 'Removing features from all plans overnight', 'Adding a new premium tier', 'A surprise 50% increase'], answer: 2, explain: 'A new tier captures higher WTP without forcing anyone to pay more.' },
        { q: '1,000 customers at $50, elasticity −0.5. Price +20%. Approximate new revenue?', options: ['$54,000', '$50,000', '$60,000', '$45,000'], answer: 0, explain: 'Volume −10% → 900 × $60 = $54,000.' },
        { q: '"Monetizing Innovation" argues you should…', options: ['Price only after launch', 'Always use freemium', 'Copy competitor prices', 'Design the product around willingness to pay before building'], answer: 3, explain: 'Price-first product design reduces failed launches.' }
      ],
      challenge: {
        title: 'Plan a SaaS price increase',
        prompt: `Your SaaS has 4,000 customers on $40/month. Prices have not changed in 4 years while you added many features. Monthly churn is 2%. You want to move to $50 for new customers and existing customers. Estimates: if handled well, churn spikes to 4% for two months then returns to 2%; badly handled, 8% for two months. Calculate the MRR impact of both scenarios and design the rollout.`,
        hints: ['Current MRR = 4,000 × $40.', 'Compute customers after two months under each churn rate.', 'Compare with doing nothing.'],
        model: `<p><b>Baseline</b>: MRR = 4,000 × $40 = <b>$160,000</b>. Doing nothing for two months at 2% churn: 4,000 × 0.98² ≈ 3,842 customers → <b>$153,700</b>.</p><p><b>Well handled</b> (4% for two months): 4,000 × 0.96² ≈ 3,686 customers × $50 = <b>$184,300</b> (+20% vs baseline).</p><p><b>Badly handled</b> (8%): 4,000 × 0.92² ≈ 3,386 × $50 = <b>$169,300</b> (+10%) — still higher, but you lose about 300 more customers, and their referrals and reviews.</p><p><b>Rollout</b></p><ol><li>New customers move to $50 immediately.</li><li>Existing customers: 90 days' notice with a clear list of features added since their last price change.</li><li>Option to lock in $45 for 12 months on annual billing (improves cash and retention).</li><li>Keep a lighter plan at $35 for price-sensitive customers as a downgrade path.</li><li>Support and CSMs reach out to the top 10% of accounts personally.</li><li>Track churn and downgrades weekly; pause if churn exceeds 5% in the first month.</li></ol>`
      },
      takeaways: [
        'Design monetisation early — segments, value metric, packaging, streams, price.',
        'Pricing power is the real test of competitive strength.',
        'Raise prices with notice, value and options; protect symbolic value signals.',
        'Review prices regularly — never leaving them for years is a hidden cost.'
      ]
    }
  ]
});
