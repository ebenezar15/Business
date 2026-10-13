/* MBA Studio — Track 6: Marketing & Brand */
MBA.addTrack({
  id: 'marketing',
  stage: 3,
  order: 6,
  title: 'Marketing & Brand',
  icon: '📣',
  color: '#ec4899',
  tagline: 'Get chosen, remembered and bought',
  summary: `Learn how customers actually choose, how to pick who to serve and how to stand out, and how strong brands are built and measured. By the end you can write a positioning statement, design a channel mix (including AI search), read marketing metrics like a CMO and plan a go-to-market launch.`,
  outcomes: [
    'Use the 4Ps/7Ps and STP to turn a product into a clear market offer',
    'Build personas and customer journeys grounded in real jobs-to-be-done',
    'Apply evidence-based brand growth (mental and physical availability) alongside emotional branding',
    'Choose and run digital channels: SEO and GEO, paid social, content, creators, email, community',
    'Measure marketing with CAC, ROAS, MER, attribution models, MMM and incrementality tests',
    'Write a sharp positioning (April Dunford) and a go-to-market plan'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-1',
      title: 'What marketing really is: the 4Ps and 7Ps',
      level: 'Beginner',
      minutes: 12,
      hook: `Marketing is not ads. It is every decision that makes the right people want, find and buy what you sell.`,
      eli5: `Imagine a lemonade stand. Marketing is not just the cardboard sign. It is choosing the lemonade recipe (product), how much a cup costs (price), which corner you stand on (place) and what you shout to people walking by (promotion). Get all four right and the queue forms by itself; get one badly wrong and the sign cannot save you.`,
      blocks: [
        { type: 'text', title: 'Marketing in one sentence', html: `<p>Peter Drucker put it simply: the aim of marketing is to know and understand the customer so well that the product <b>sells itself</b>. Selling pushes a product at people; marketing shapes the product, price, place and message so that people pull it towards them.</p><p>Marketing has two jobs: <span class="hl">create demand</span> (make people want the category and your brand) and <span class="hl">capture demand</span> (be there and be chosen when they are ready to buy).</p>` },
        { type: 'framework', name: 'The marketing mix (4Ps → 7Ps)', by: 'E. Jerome McCarthy, 1960; Booms & Bitner, 1981', when: 'When you launch or review any offer — every P must tell the same story.', steps: [
          { label: 'Product', desc: `What you sell and the problem it solves: features, quality, design, packaging, guarantees. Ask: what job is the customer hiring it for?` },
          { label: 'Price', desc: `What the customer gives up: list price, discounts, payment terms, subscription vs one-off. Price also signals quality.` },
          { label: 'Place', desc: `Where and how it is bought: own website, marketplaces, retail shelves, distributors, sales team.` },
          { label: 'Promotion', desc: `How people hear about it: advertising, PR, content, social, creators, email, events, sales.` },
          { label: 'People (services)', desc: `The staff who deliver the experience — a rude waiter ruins a great menu.` },
          { label: 'Process (services)', desc: `How the service is delivered: booking, waiting, onboarding, support.` },
          { label: 'Physical evidence (services)', desc: `The tangible cues of quality: store design, website, uniforms, reviews, packaging.` }
        ] },
        { type: 'compare', title: 'Selling mindset vs marketing mindset', headers: ['', 'Selling (inside-out)', 'Marketing (outside-in)'], rows: [
          ['Starting point', 'The product we already made', 'The customer need'],
          ['Focus', 'Convincing people', 'Being the obvious choice'],
          ['Success metric', 'Units pushed this month', 'Profitable demand over years'],
          ['Typical mistake', 'Discounting to hit targets', 'Over-researching, under-shipping']
        ] },
        { type: 'case', company: 'IKEA', year: '1950s–today', title: 'A mix where every P agrees', situation: `Furniture was traditionally expensive, delivered assembled and sold in small showrooms.`, decision: `IKEA designed flat-pack products (Product) that customers assemble themselves, enabling low prices (Price), sold through huge out-of-town stores with a guided route and a restaurant (Place, Process, Physical evidence), promoted heavily by its famous catalogue (Promotion).`, outcome: `IKEA became the world's largest furniture retailer. Customers accept the "work" of carrying and assembling because the whole mix consistently promises affordable design.`, lesson: `A marketing mix is a system. Low price only works because product design, place and process were built to support it.` },
        { type: 'scenario', prompt: `Your premium organic skincare brand is selling slowly. A board member suggests selling it in discount supermarkets to get volume. What do you do?`, options: [
          { text: 'Go into discount supermarkets right away for volume.', feedback: 'Place now contradicts price and product. Shoppers may read it as "not really premium", and existing stockists may drop you.', good: false },
          { text: 'First diagnose which P is broken (awareness? price? distribution in the right premium stores?) before changing channel.', feedback: 'Right. Fix the weakest P while keeping all Ps consistent with the premium promise.', good: true },
          { text: 'Cut the price by 40% to stimulate demand.', feedback: 'Price cuts in premium categories can damage perceived quality and margin without fixing the real problem.', good: false }
        ] },
        { type: 'callout', kind: 'myth', title: 'Myth: "Good products market themselves"', html: `<p>Great products help enormously, but people still have to <b>notice, remember and find</b> them. Many superior products lost to better-distributed, better-known rivals.</p>` },
        { type: 'flip', title: 'Which P is it?', cards: [
          { front: 'Offering free returns for 365 days', back: 'Product/Process — it changes the offer and the experience (and lowers perceived risk).' },
          { front: 'Listing on Amazon in addition to your own website', back: 'Place — a new route to the customer.' },
          { front: 'Paying a creator to review your product', back: 'Promotion.' },
          { front: 'Training store staff to give expert advice', back: 'People.' }
        ] }
      ],
      terms: [
        { term: 'Marketing mix', def: 'The set of decisions (product, price, place, promotion and, for services, people, process, physical evidence) that make up an offer.' },
        { term: 'Demand creation', def: 'Activities that make people want the category or brand before they are actively shopping.' },
        { term: 'Demand capture', def: 'Being present and chosen when people are already looking to buy, e.g. search ads.' },
        { term: 'Value proposition', def: 'The promise of value a customer gets from your offer compared to alternatives.' },
        { term: 'Channel', def: 'A route through which you reach or sell to customers (store, website, sales team, partner).' },
        { term: 'Physical evidence', def: 'Tangible cues that signal quality for a service, like a clean shop, website design or reviews.' }
      ],
      quiz: [
        { q: 'A gym introduces a 24/7 app-based entry system so members never queue at reception. Which P does this mainly change?', options: ['Price', 'Promotion', 'Process', 'Product packaging'], answer: 2, explain: 'It changes how the service is delivered — Process, one of the extra service Ps.' },
        { q: 'What is the main difference between selling and marketing?', options: ['Marketing starts from customer needs; selling starts from the existing product', 'Marketing is only advertising', 'Selling is more strategic', 'There is no difference'], answer: 0, explain: 'Marketing is outside-in: it shapes the offer around the customer.' },
        { q: 'Why can a heavy discount hurt a premium brand?', options: ['Discounts are illegal for premium goods', 'It always increases costs', 'It makes products harder to ship', 'Price signals quality, so deep cuts can lower perceived value'], answer: 3, explain: 'Price is part of the brand promise; inconsistent Ps confuse customers.' },
        { q: 'Which pair best describes marketing\'s two jobs?', options: ['Hiring and firing', 'Demand creation and demand capture', 'Cost cutting and outsourcing', 'Design and engineering'], answer: 1, explain: 'Make people want it, then make sure you are chosen when they buy.' }
      ],
      challenge: {
        title: 'Fix a café\'s marketing mix',
        prompt: `A new specialty café near a university charges ₹350 (about $4) for coffee, is open 10:00–18:00, has no seating and promotes itself only through an Instagram account with 200 followers. Sales are ₹9,000 a day; the owner needs ₹15,000 a day to break even. Students say "great coffee, too pricey, never open when I need it". Use the 7Ps to diagnose and propose three changes.`,
        hints: ['Check whether Place/Process (hours, seating) match student life.', 'Consider a student price tier rather than a blanket cut.', 'Promotion should reach students where they already are.'],
        model: `<p><b>Diagnosis by P</b></p><ul><li><b>Product</b>: strong (students praise taste) — keep.</li><li><b>Price</b>: high for students; one price for all segments.</li><li><b>Place/Process</b>: closes at 18:00 and has no seating — misses the evening study crowd, the main student use case.</li><li><b>Promotion</b>: tiny Instagram reach; no campus presence.</li><li><b>Physical evidence</b>: no place to sit means no reason to stay or post photos.</li></ul><p><b>Three changes</b></p><ol><li>Open 08:00–22:00 during term and add 15 seats with sockets (the "study spot" job).</li><li>Introduce a student loyalty card (10th coffee free) or a ₹250 filter-coffee option, keeping ₹350 specialty drinks — protects margin while widening appeal.</li><li>Promote through student societies and exam-week offers; ask regulars for reviews.</li></ol><p><b>Maths check</b>: at an average ticket of ₹300, break-even needs 50 cups a day versus about 26 today. Longer evening hours plus seating only need to add roughly 24 cups a day — plausible near a campus.</p>`
      },
      takeaways: [
        'Marketing is shaping the whole offer, not just shouting about it.',
        'Every P must reinforce the same promise — inconsistency kills brands.',
        'Services add People, Process and Physical evidence to the classic 4Ps.',
        'Diagnose the weakest P before changing price or channel.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-2',
      title: 'STP, personas and the customer journey',
      level: 'Beginner',
      minutes: 14,
      hook: `If you try to sell to everyone, you end up memorable to no one.`,
      eli5: `Think of a school canteen. Some kids want fast food before football, some want healthy snacks, some want the cheapest thing possible. Segmentation is spotting these groups. Targeting is deciding which group you will serve best. Positioning is the one sentence that makes that group think "that is the place for me".`,
      blocks: [
        { type: 'framework', name: 'STP: Segmentation → Targeting → Positioning', by: 'Popularised by Philip Kotler', when: 'Before writing any campaign, choosing channels or setting a price.', steps: [
          { label: 'Segment', desc: `Split the market into groups that want different things or buy differently. Bases: demographic (age, income), geographic, psychographic (values, lifestyle), behavioural (usage, occasion, loyalty) and, in B2B, firmographic (industry, size, tech stack).` },
          { label: 'Evaluate segments', desc: `Score each on size, growth, ability to reach it, willingness to pay, competition and fit with your strengths.` },
          { label: 'Target', desc: `Pick one (or a few) segments to serve deeply. Startups usually win by owning one niche first.` },
          { label: 'Position', desc: `Define the place you want to own in the target customer's mind relative to alternatives.` }
        ] },
        { type: 'text', title: 'Segment by need, not just by demographics', html: `<p>Two 35-year-old professionals with the same income may buy coffee for totally different reasons: one wants a fast caffeine hit on the commute, the other a cosy place to work. <b>Behavioural and needs-based segments</b> predict buying better than age alone.</p><p>Clayton Christensen's <span class="hl">Jobs-to-be-Done</span> idea asks: what "job" is the customer hiring this product to do? His team's famous milkshake study found many morning milkshakes were bought by commuters who wanted something filling and slow to consume on a boring drive — a job that competes with bananas and bagels, not other milkshakes.</p>` },
        { type: 'formula', name: 'Positioning statement (classic template)', expr: 'For [target] who [need], [brand] is the [category] that [key benefit] because [reason to believe], unlike [alternative].', explain: 'Forces you to name a specific customer, a category frame, one main benefit, proof, and what you are compared to.', example: 'For busy parents who want healthy dinners without planning, FreshBox is the meal kit that gets dinner on the table in 20 minutes, because every recipe is tested for speed, unlike supermarket shopping or takeaways.' },
        { type: 'text', title: 'Personas: a target with a face', html: `<p>A <b>persona</b> is a short, evidence-based profile of a typical target customer: their goals, frustrations, triggers to buy, objections and where they get information. Good personas come from <b>interviews and data</b>, not imagination.</p><p>Weak persona: "Priya, 32, likes yoga." Strong persona: "Priya, HR lead at a 200-person firm, must cut onboarding time before a hiring spurt, trusts peer recommendations on LinkedIn, fears tools that IT will block."</p>` },
        { type: 'timeline', title: 'A customer journey (B2C example: buying running shoes)', items: [
          { label: 'Trigger', desc: 'Old shoes hurt; signs up for a 10k race.' },
          { label: 'Awareness', desc: 'Sees creator reviews and friends\' Strava posts.' },
          { label: 'Consideration', desc: 'Compares 3 brands, reads reviews, asks an AI assistant.' },
          { label: 'Purchase', desc: 'Tries in store, buys online for a discount code.' },
          { label: 'Experience', desc: 'Comfort on first runs decides satisfaction.' },
          { label: 'Loyalty & advocacy', desc: 'Rebuys the model, recommends it in a running club.' }
        ] },
        { type: 'case', company: 'Old Spice', year: '2010', title: '"The Man Your Man Could Smell Like"', situation: `Old Spice, a Procter & Gamble brand, was seen as old-fashioned — "your grandfather's aftershave" — while rivals such as Axe owned young men.`, decision: `Agency Wieden+Kennedy noticed that women bought a large share of men's body wash. The campaign, starring Isaiah Mustafa, spoke humorously to women and men together, then followed up with dozens of rapid personalised video replies to fans and celebrities online.`, outcome: `The campaign went hugely viral, won top advertising awards and was widely reported to lift Old Spice body wash sales significantly, repositioning the brand as funny and modern.`, lesson: `Understanding who really buys (the purchaser is not always the user) can unlock a fresh target and a memorable position.` },
        { type: 'interactive', widget: 'tam-sam-som', title: 'Size your target segment', note: 'Try a niche target first: make SAM small but reachable and see whether a realistic SOM is still a worthwhile business.' },
        { type: 'checklist', title: 'Good segment test', items: [
          'Measurable — we can estimate its size',
          'Reachable — we know the channels where it gathers',
          'Different — it responds differently from other segments',
          'Substantial — big enough to pay back our effort',
          'Winnable — we have a real advantage here'
        ] }
      ],
      terms: [
        { term: 'Segmentation', def: 'Dividing a market into groups with different needs or buying behaviour.' },
        { term: 'Targeting', def: 'Choosing which segment(s) to focus your resources on.' },
        { term: 'Positioning', def: 'The distinct place you want your brand to occupy in target customers\' minds versus alternatives.' },
        { term: 'Persona', def: 'An evidence-based profile of a typical target customer, including goals, pains and buying triggers.' },
        { term: 'Jobs-to-be-Done', def: 'A lens that asks what progress a customer is trying to make, i.e. what job they "hire" a product for.' },
        { term: 'Customer journey', def: 'The stages a customer passes through from first need to purchase, use and advocacy.' },
        { term: 'Firmographics', def: 'B2B segmentation data such as industry, company size, location and tech stack.' }
      ],
      quiz: [
        { q: 'Which segmentation basis is usually most predictive of purchase behaviour?', options: ['Needs and behaviour', 'Star sign', 'Eye colour', 'Alphabetical order of surname'], answer: 0, explain: 'Needs and behaviour explain why people buy; demographics only correlate.' },
        { q: 'In the Old Spice case, the key insight was that…', options: ['Men hate humour', 'Prices were too low', 'Women bought much of the body wash', 'TV advertising no longer works'], answer: 2, explain: 'The purchaser was often a partner, so the ad spoke to both.' },
        { q: 'What does a good persona rely on?', options: ['Team brainstorming only', 'Customer interviews and data', 'Stock photos', 'Competitor slogans'], answer: 1, explain: 'Personas must be grounded in real evidence.' },
        { q: 'A startup has $50k and three possible segments. What is usually wisest?', options: ['Spread budget equally across all three', 'Wait until it has $500k', 'Target "everyone aged 18–65"', 'Focus on the one segment where it can win and reach customers cheaply'], answer: 3, explain: 'Concentration lets a small company become the obvious choice in one niche.' },
        { q: 'In Jobs-to-be-Done, the morning milkshake competed mainly with…', options: ['Other milkshake brands', 'Coffee machines', 'Bananas, bagels and other commute foods', 'Car radios only'], answer: 2, explain: 'Competition is defined by the job (a filling, slow commute snack), not the product category.' }
      ],
      challenge: {
        title: 'Segment a meal-kit market',
        prompt: `You run a meal-kit startup in a city of 2 million households. Research shows: 15% busy dual-income families, 10% fitness enthusiasts, 20% budget students, 5% older couples who like cooking. Average spend potential per month: families $120, fitness $90, students $30, older couples $80. Pick one target segment, justify it with numbers and write a positioning statement.`,
        hints: ['Multiply households by share by monthly spend for each segment.', 'Consider reachability and fit, not just size.', 'Use the positioning template.'],
        model: `<p><b>Segment value per month</b> (2,000,000 households):</p><ul><li>Families: 300,000 × $120 = <b>$36M</b></li><li>Fitness: 200,000 × $90 = $18M</li><li>Students: 400,000 × $30 = $12M</li><li>Older couples: 100,000 × $80 = $8M</li></ul><p><b>Target: busy dual-income families.</b> Largest value pool, strong need (time scarcity), willing to pay for convenience, reachable via schools, parenting communities and Instagram. Students are numerous but price-sensitive; fitness is attractive as a second segment later.</p><p><b>Positioning</b>: For busy working parents who want healthy family dinners without planning, FreshBox is the meal kit that gets dinner on the table in 20 minutes, because every recipe is tested by parents for speed and kid-approval, unlike takeaways or supermarket runs.</p><p><b>Next step</b>: 15 interviews with parents to validate the 20-minute promise and the price point before scaling ads.</p>`
      },
      takeaways: [
        'Segment, then target, then position — in that order.',
        'Needs and behaviour beat demographics for segmentation.',
        'Personas and journeys must come from real customer evidence.',
        'The buyer is not always the user; map both.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-3',
      title: 'How brands grow: availability vs emotion',
      level: 'Intermediate',
      minutes: 16,
      hook: `The biggest brands rarely win by being loved most — they win by being thought of and found most easily.`,
      eli5: `When you are thirsty at a train station you grab the drink you recognise instantly and that is right in front of you. You did not think hard. Big brands make sure they pop into your head (mental availability) and are in every fridge (physical availability). Feelings matter too — they make the brand easier to remember and nicer to pick.`,
      blocks: [
        { type: 'text', title: 'The evidence-based view', html: `<p>In <i>How Brands Grow</i> (2010), Byron Sharp of the Ehrenberg-Bass Institute summarised decades of buying data. Key findings:</p><ul><li><b>Growth comes mostly from more buyers</b>, especially light buyers who buy the category rarely, not from making existing customers more loyal.</li><li><b>Double jeopardy</b>: small brands have fewer buyers <i>and</i> those buyers are slightly less loyal. Loyalty follows size.</li><li>Most buyers of a brand also buy competitors (<b>loyalty is divided</b>).</li><li>Brands grow through <span class="hl">mental availability</span> (being easily recalled in buying situations) and <span class="hl">physical availability</span> (being easy to find and buy).</li></ul>` },
        { type: 'framework', name: 'Building mental & physical availability', by: 'Byron Sharp & Jenni Romaniuk, Ehrenberg-Bass Institute', when: 'Planning brand strategy and media for mass categories.', steps: [
          { label: 'Reach all category buyers', desc: 'Prioritise broad reach over narrow targeting for brand building; light buyers matter.' },
          { label: 'Refresh memory structures', desc: 'Link the brand to many Category Entry Points (CEPs) — the situations that trigger buying ("need a quick lunch", "gift for a host").' },
          { label: 'Use distinctive brand assets', desc: 'Consistent colours, logos, characters, sounds and shapes (Coca-Cola red and bottle, McDonald\'s arches) that make you instantly recognisable.' },
          { label: 'Be easy to buy', desc: 'Wide distribution, prominent shelf space, available on every app, fast checkout.' },
          { label: 'Stay consistent over years', desc: 'Change campaigns, not the assets. Every change resets memory.' }
        ] },
        { type: 'compare', title: 'Two schools of brand thinking', headers: ['', 'Availability school (Sharp)', 'Emotional / meaning school'], rows: [
          ['Core idea', 'Be easy to think of and find', 'Stand for something people feel'],
          ['Targeting', 'Broad reach of all category buyers', 'Deep connection with a defined tribe'],
          ['Key tools', 'Distinctive assets, distribution, reach', 'Purpose, story, identity, community'],
          ['Great at explaining', 'FMCG, mass categories', 'Premium, lifestyle, challenger brands'],
          ['Risk if overdone', 'Bland, forgettable ads', 'Preaching to a tiny group']
        ] },
        { type: 'callout', kind: 'insight', title: 'They fit together', html: `<p>Research by Les Binet and Peter Field (IPA, <i>The Long and the Short of It</i>, 2013) found <b>emotional, broad-reach brand campaigns</b> tend to drive long-term growth, while rational, targeted activation drives short-term sales. Their often-quoted rule of thumb for consumer brands is roughly <b>60% brand building / 40% activation</b>. Emotion is a tool to <i>build memory</i>, not an alternative to availability.</p>` },
        { type: 'case', company: 'Dove', year: '2004–2013', title: 'Campaign for Real Beauty', situation: `Unilever's Dove competed in a crowded beauty category where ads used idealised models. Its own research suggested very few women described themselves as beautiful.`, decision: `With agency Ogilvy, Dove launched "Real Beauty" (2004), featuring women of varied ages and body types. Later executions such as "Real Beauty Sketches" (2013) became among the most-viewed ads online of their time.`, outcome: `Dove gained a distinctive, emotionally resonant meaning that has lasted two decades and is studied in business schools as a purpose-led brand platform.`, lesson: `A consistent, emotionally true idea can become a distinctive asset — but it must be sustained and lived by the product, or it looks hollow.` },
        { type: 'case', company: 'Red Bull', year: '1987–today', title: 'A brand that became a media company', situation: `Red Bull launched in Austria in 1987 in a category that barely existed.`, decision: `Rather than classic advertising alone, it owned extreme sports and adventure: events, athletes, teams, and Red Bull Media House. The 2012 Stratos jump by Felix Baumgartner from the edge of space was watched live by millions online.`, outcome: `Red Bull became the dominant global energy-drink brand, with "gives you wings" and the bull logo as instantly recognisable assets — combined with near-ubiquitous distribution.`, lesson: `Emotional meaning (energy, daring) plus relentless availability (every fridge, every event) is a powerful combination.` },
        { type: 'case', company: 'Liquid Death', year: '2019–today', title: 'Making water distinctive', situation: `Bottled water is a near-commodity with little branding difference.`, decision: `Founder Mike Cessario packaged still and sparkling water in tallboy cans with heavy-metal style branding and the line "murder your thirst", using absurd, comedic content and merchandise.`, outcome: `It became a widely discussed, fast-growing beverage brand and later gained distribution in major retailers — proof that distinctiveness can be built even in a commodity.`, lesson: `In a sameness category, being distinctive (not just different on features) captures attention cheaply.` },
        { type: 'flip', title: 'Brand science quick check', cards: [
          { front: 'Double jeopardy', back: 'Smaller brands have fewer buyers and slightly lower loyalty among them.' },
          { front: 'Category Entry Point', back: 'A situation or need that prompts category buying, e.g. "something to drink at a party".' },
          { front: 'Distinctive brand asset', back: 'A non-name cue (colour, shape, character, sound) that instantly signals the brand.' },
          { front: 'Light buyers', back: 'People who buy your brand rarely; they make up most of your buyer base and most growth.' }
        ] },
        { type: 'scenario', prompt: `Your snack brand has 8% market share. The team wants to shift all spend to a loyalty app for existing fans. What does the evidence suggest?`, options: [
          { text: 'Go all-in on loyalty: cheaper to keep fans than win new buyers.', feedback: 'For mass brands, growth mainly comes from reaching more (light) buyers; loyalty rises with penetration, not the other way round.', good: false },
          { text: 'Keep broad reach and distribution as the core, use the app as a complement.', feedback: 'Correct. Penetration drives growth; retention tools support but rarely replace reach.', good: true }
        ] }
      ],
      terms: [
        { term: 'Mental availability', def: 'How easily a brand comes to mind in buying situations.' },
        { term: 'Physical availability', def: 'How easy a brand is to find and buy — distribution, shelf presence, online availability.' },
        { term: 'Double jeopardy law', def: 'Smaller brands suffer twice: fewer buyers and slightly lower loyalty.' },
        { term: 'Distinctive brand assets', def: 'Consistent non-verbal cues like colours, logos, mascots and jingles that trigger the brand.' },
        { term: 'Penetration', def: 'The share of category buyers who bought your brand in a period.' },
        { term: 'Brand building vs activation', def: 'Long-term memory-building work versus short-term sales-driving offers and calls to action.' }
      ],
      quiz: [
        { q: 'According to Byron Sharp, the main driver of brand growth is…', options: ['Increasing penetration (more buyers)', 'Increasing loyalty among heavy buyers', 'Raising prices', 'Reducing ad spend'], answer: 0, explain: 'Growth is mostly from more buyers, especially light buyers.' },
        { q: 'Which is a distinctive brand asset?', options: ['A 10% discount', 'A press release', 'A sales target', 'Tiffany\'s robin-egg blue box'], answer: 3, explain: 'A consistent non-name cue that triggers the brand.' },
        { q: 'Binet & Field\'s commonly cited budget split for consumer brands is roughly…', options: ['10% brand / 90% activation', '60% brand / 40% activation', '100% performance', '50% PR / 50% events'], answer: 1, explain: 'About 60:40 brand to activation is the usual rule of thumb.' },
        { q: 'What does the Liquid Death case mostly show?', options: ['Distinctiveness can be built even in commodities', 'Water must be cheap', 'Cans are illegal for water', 'Only TV ads work'], answer: 0, explain: 'Branding and packaging made a commodity stand out.' },
        { q: 'A brand changes its logo, colours and slogan every year. Likely effect?', options: ['Stronger memory structures', 'Higher physical availability', 'Weaker mental availability because memory links reset', 'No effect'], answer: 2, explain: 'Consistency builds memory; constant change erodes it.' }
      ],
      challenge: {
        title: 'Grow a regional juice brand',
        prompt: `A regional juice brand is sold in 30% of stores in its region, has strong fans but low awareness among occasional juice buyers. Budget: $1M a year. Current spend: 85% on promotions/discounts, 15% on brand. Propose a new plan using mental and physical availability.`,
        hints: ['What limits growth more: memory or distribution?', 'Rebalance towards brand building with distinctive assets.', 'Think about category entry points (breakfast, gym, kids\' lunchboxes).'],
        model: `<p><b>Diagnosis</b>: Growth is capped by both availability types: only 30% distribution, and low recall among light buyers. Heavy discounting mostly subsidises existing fans.</p><p><b>Plan ($1M)</b></p><ul><li><b>Physical availability (~$300k)</b>: trade investment to expand distribution towards 50–60% of stores and secure chilled-shelf placement; list on quick-commerce apps.</li><li><b>Brand building (~$450k)</b>: broad-reach video and outdoor around 2–3 category entry points (breakfast, post-gym, lunchboxes), using one consistent distinctive asset (e.g. a signature bottle colour and character).</li><li><b>Activation (~$250k)</b>: targeted trial offers in newly opened stores, retargeting, and sampling.</li></ul><p>This moves the split from 15:85 to roughly 45:55 brand to activation (plus distribution) — closer to evidence-based ratios while still supporting trade.</p><p><b>Measure</b>: penetration, prompted brand awareness, distribution %, and sales in new vs existing stores.</p>`
      },
      takeaways: [
        'Brands grow mainly by winning more buyers, including light buyers.',
        'Mental availability + physical availability = the engine of growth.',
        'Emotion and distinctive assets build memory; consistency compounds it.',
        'Balance long-term brand building with short-term activation.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-4',
      title: 'Digital channels in 2025–26: SEO to GEO, social, creators, email, community',
      level: 'Intermediate',
      minutes: 18,
      hook: `Your customers now ask an AI before they ask Google — and your channel plan has to follow them.`,
      eli5: `Think of channels as roads into a town. Some roads are free but take a long time to build (content and search). Some are toll roads you pay to use every time (paid ads). Some are friends giving you a lift (creators and word of mouth). Smart businesses use a few roads well instead of all roads badly.`,
      blocks: [
        { type: 'compare', title: 'The main digital channels', headers: ['Channel', 'Best for', 'Cost model', 'Watch out for'], rows: [
          ['SEO (search)', 'Capturing existing intent', 'Time + content; compounding', 'Slow; algorithm and AI-answer changes'],
          ['GEO / AI search', 'Being cited by ChatGPT, Gemini, Perplexity, Google AI Overviews', 'Content, PR, data, structured pages', 'New and fast-moving; fewer clicks'],
          ['Paid search', 'High-intent demand capture', 'Pay per click', 'Paying for customers you would get anyway'],
          ['Paid social', 'Demand creation, visual products', 'Pay per impression/click', 'Creative fatigue; rising costs'],
          ['Content', 'Education, trust, B2B', 'Time + people', 'Volume without distribution'],
          ['Creators / influencers', 'Trust and reach in niches', 'Fees, affiliate, product', 'Fake followers; disclosure rules'],
          ['Email / SMS', 'Retention, repeat purchase', 'Very low per message', 'Deliverability, consent laws'],
          ['Community', 'Loyalty, advocacy, feedback', 'Time + moderation', 'Hard to scale; needs genuine value']
        ] },
        { type: 'text', title: 'From SEO to GEO', html: `<p><b>SEO</b> (search engine optimisation) means earning unpaid ranking in search results through relevant content, technical health and links from trusted sites.</p><p>Since 2024, Google shows <b>AI Overviews</b> and assistants like ChatGPT, Gemini and Perplexity answer questions directly. <span class="hl">GEO — generative engine optimisation</span> (a term from academic research in 2023) is the practice of making your brand appear in, and be cited by, AI-generated answers.</p><ul><li>Publish clear, factual, well-structured pages that directly answer specific questions.</li><li>Include original data, comparisons and expert quotes that models like to cite.</li><li>Be mentioned on sites AI tools draw from: reviews, forums, reputable media, Wikipedia-style references.</li><li>Keep product info, pricing and FAQs crawlable and consistent everywhere.</li><li>Track "share of answer": how often assistants mention you for your key queries.</li></ul>` },
        { type: 'callout', kind: 'warning', title: 'Fewer clicks, more influence', html: `<p>AI answers often satisfy the question without a click. Publishers and marketers widely report lower click-through on queries with AI summaries. Measure brand mentions and assisted conversions, not only traffic.</p>` },
        { type: 'case', company: 'HubSpot', year: '2006–today', title: 'Inbound marketing', situation: `Founders Brian Halligan and Dharmesh Shah saw buyers ignoring cold calls and interruptive ads, and researching online instead.`, decision: `HubSpot coined and evangelised "inbound marketing": attract buyers with helpful blogs, free tools (e.g. a website grader), templates and courses, then nurture them with email. Its own blog and academy became huge traffic sources.`, outcome: `HubSpot grew into a major public CRM company, and "inbound" became standard marketing vocabulary.`, lesson: `Teaching your market is a durable channel — but in the AI era, content must be genuinely original to be found and cited.` },
        { type: 'framework', name: 'Bullseye channel selection', by: 'Gabriel Weinberg & Justin Mares, Traction (2014)', when: 'Choosing which channels to test first.', steps: [
          { label: 'Outer ring — brainstorm', desc: 'List every possible channel (they list 19) and one idea for each.' },
          { label: 'Middle ring — test', desc: 'Run cheap, fast tests on the 3–5 most promising.' },
          { label: 'Inner ring — focus', desc: 'Double down on the one channel that works; optimise until it plateaus.' },
          { label: 'Repeat', desc: 'When it saturates, go back to the outer ring.' }
        ] },
        { type: 'text', title: 'Creators, email and community', html: `<p><b>Creators</b>: micro-creators (smaller, niche audiences) often deliver higher engagement and trust than celebrities for niche products. Use clear briefs, let creators speak in their own voice, require ad disclosure (e.g. FTC rules in the US, ASA in the UK) and track with unique codes or links.</p><p><b>Email</b>: the highest-control channel because you own the list. Since February 2024, Gmail and Yahoo require bulk senders to authenticate their domains, offer one-click unsubscribe and keep spam complaints low — sloppy senders now land in spam.</p><p><b>Community</b>: forums, Discord/Slack groups or user events where customers help each other. Brands like Notion and Figma benefited from passionate user communities that create templates and tutorials.</p>` },
        { type: 'interactive', widget: 'ab-test', title: 'Test a subject line', note: 'Try 10,000 recipients per variant with open rates of 22% vs 24%. Then cut the sample to 1,000 and see whether the result is still significant.' },
        { type: 'checklist', title: 'Channel launch checklist', items: [
          'One clear goal per channel (awareness, leads, sales, retention)',
          'Tracking set up: UTM links, conversion events, codes',
          'Budget and test duration agreed before starting',
          'Success threshold defined (e.g. CAC under $60)',
          'Creative variations ready to fight fatigue',
          'Content structured for AI answers (FAQs, data, comparisons)'
        ] }
      ],
      terms: [
        { term: 'SEO', def: 'Search engine optimisation: earning unpaid visibility in search results.' },
        { term: 'GEO', def: 'Generative engine optimisation: making your brand appear in and be cited by AI-generated answers.' },
        { term: 'Paid social', def: 'Advertising on social platforms like Instagram, TikTok, LinkedIn or YouTube.' },
        { term: 'Micro-creator', def: 'A creator with a smaller, focused audience, often with high trust and engagement.' },
        { term: 'Owned media', def: 'Channels you control, such as your website, email list and app.' },
        { term: 'Creative fatigue', def: 'The decline in ad performance as the same audience sees the same ad repeatedly.' },
        { term: 'UTM parameters', def: 'Tags added to links so analytics can tell which campaign brought a visitor.' }
      ],
      quiz: [
        { q: 'GEO is mainly about…', options: ['Geographic targeting', 'Being cited in AI-generated answers', 'Buying more TV ads', 'Email automation'], answer: 1, explain: 'Generative engine optimisation targets AI assistants and AI search summaries.' },
        { q: 'Which channel gives you the most control because you own the audience?', options: ['Paid social', 'Creator posts', 'Search ads', 'Email list'], answer: 3, explain: 'Owned media like email is not subject to ad auctions in the same way.' },
        { q: 'In the Bullseye framework, after testing several channels you should…', options: ['Spread budget evenly forever', 'Stop marketing', 'Focus on the one that works best', 'Hire a celebrity'], answer: 2, explain: 'Focus and optimise the winning channel until it plateaus.' },
        { q: 'Why might website traffic fall even if your brand is doing well in 2025–26?', options: ['AI answers satisfy queries without clicks', 'Websites are banned', 'Email replaced search', 'Search engines stopped indexing'], answer: 0, explain: 'Zero-click AI answers reduce traffic; track mentions and assisted conversions too.' }
      ],
      challenge: {
        title: 'Channel plan for a B2B SaaS',
        prompt: `You market a $99/month invoicing tool for freelancers. Budget: $10,000 a month. Current: 100% Google search ads at $80 CAC, but volume is capped at ~60 customers a month. Customers stay ~20 months on average. Propose a channel mix for the next quarter, including GEO, and how you would judge success.`,
        hints: ['Compute LTV first to know what CAC you can afford.', 'Search ads are capturing existing demand; where else do freelancers gather?', 'Plan tests with thresholds.'],
        model: `<p><b>Economics</b>: revenue per customer ≈ $99 × 20 = $1,980 (before margin). At ~80% gross margin, LTV ≈ $1,580. An $80 CAC is excellent, so we can afford to test channels up to roughly $300–400 CAC (LTV:CAC ≥ 4).</p><p><b>Mix ($10k/month)</b></p><ul><li><b>$4,800</b> — keep search ads at current capped volume (~60 customers).</li><li><b>$2,000</b> — creators: 6–8 freelancer YouTubers/newsletter writers with affiliate codes.</li><li><b>$1,500</b> — content + GEO: publish original data ("average freelancer late-payment days"), comparison pages and clear FAQ pages so AI assistants cite us; free invoice template generator.</li><li><b>$1,000</b> — community: sponsor and participate in freelancer communities; referral programme (one free month each side).</li><li><b>$700</b> — paid social test on LinkedIn/Instagram to freelancer job titles.</li></ul><p><b>Judging success</b>: each test runs 6–8 weeks with UTMs/codes; keep channels with CAC under $250 and growing volume; track AI "share of answer" monthly for 20 key questions. Scale the winner (Bullseye).</p>`
      },
      takeaways: [
        'Pick a few channels and master them; test cheaply before scaling.',
        'Search is shifting to AI answers — optimise to be cited (GEO), not just ranked.',
        'Owned channels (email, community) are your insurance against rising ad costs.',
        'Creators work best when authentic, disclosed and tracked.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-5',
      title: 'Marketing analytics, attribution and marketing mix modelling',
      level: 'Advanced',
      minutes: 20,
      hook: `Every ad platform will tell you it drove your sales — add up their claims and you often "sold" more than you actually did. Measurement is how you find the truth.`,
      eli5: `Imagine your bakery hands out flyers, runs a radio ad and posts on Instagram, and sales go up. Each helper says "that was me!" Who really earned it? One honest way to find out: stop the flyers in one neighbourhood for a month and keep them going in a similar one. If sales only drop where the flyers stopped, the flyers were really working. Marketing analytics is about asking "would this sale have happened anyway?" instead of just counting who was standing nearest the till.`,
      blocks: [
        { type: 'text', title: 'The KPI stack a CMO and CFO both trust', html: `<p>Funnels and AARRR are covered in Growth, lesson 1 (<a href="#/lesson/growth-1">open it here</a>). This lesson is about the money question: <b>which marketing spend actually creates profit?</b></p><ul><li><b>CAC</b> (customer acquisition cost) = sales and marketing cost ÷ new customers. Spend $100,000, win 800 customers → CAC $125.</li><li><b>ROAS</b> (return on ad spend) = revenue a platform attributes to its ads ÷ spend on that platform. Useful for daily tuning, but each platform grades its own homework.</li><li><b>MER</b> (marketing efficiency ratio, sometimes called blended ROAS) = <b>total</b> revenue ÷ <b>total</b> marketing spend. It ignores attribution entirely, so nobody can game it.</li><li><b>Blended CAC</b> = total marketing spend ÷ <b>all</b> new customers (paid and organic). It is the CAC version of MER.</li><li><b>Contribution after marketing</b> = what is left after product, delivery and marketing costs. This is the number that pays salaries and rent.</li></ul><p><span class="hl">Rule of thumb:</span> use platform ROAS to steer campaigns, but judge the whole marketing budget on MER, blended CAC and contribution after marketing.</p>` },
        { type: 'formula', name: 'Contribution after marketing (CAM) and break-even MER', expr: 'CAM = Revenue − COGS − Variable fulfilment costs − Marketing spend;  Break-even MER = 1 ÷ Contribution margin % before marketing', explain: `<b>COGS</b> is the cost of the product itself. <b>Variable fulfilment costs</b> are shipping, packaging, payment fees and returns — anything that grows with each order. What is left before marketing is the contribution margin. Marketing must earn back more than it spends out of that margin, so the minimum MER you can afford is 1 ÷ that margin.`, example: `Revenue $1,000,000. COGS $400,000. Shipping, fees and returns $150,000 → contribution before marketing $450,000 (45%). Marketing $250,000 → <b>CAM $200,000 (20% of revenue)</b>. MER = 1,000,000 ÷ 250,000 = <b>4.0</b>. Break-even MER = 1 ÷ 0.45 ≈ <b>2.2</b>, so this business has headroom — if the revenue is truly driven by the spend.` },
        { type: 'compare', title: 'Attribution models and their built-in biases', headers: ['Model', 'How credit is split', 'Built-in bias'], rows: [
          ['Last-click', '100% to the final touch before purchase', 'Over-credits brand search, retargeting and email — channels that catch people who had already decided'],
          ['First-click', '100% to the first recorded touch', 'Over-credits discovery channels; ignores everything that actually closed the sale'],
          ['Linear', 'Equal share to every touch', 'Treats a glance at a banner the same as a product demo; rewards channels that add many cheap touches'],
          ['Time-decay', 'More credit to touches closer to the purchase', 'Still leans toward the bottom of the funnel; undervalues brand building that works over months'],
          ['Position-based (U-shaped)', 'Typically 40% first, 40% last, 20% shared by the middle', 'The weights are a judgement call, not evidence'],
          ['Data-driven', 'An algorithm compares paths that converted with paths that did not', 'Better, but only sees trackable touches (no TV, podcasts, word of mouth) and is often run by a platform that sells you the ads'],
          ['All of them', 'Assign credit for sales that happened', 'None answers "would this sale have happened without the ad?" — that needs an experiment']
        ] },
        { type: 'framework', name: 'Incrementality testing', by: 'Randomised experiments applied to advertising', when: 'Before scaling a channel, when dashboard ROAS looks too good, or to calibrate an MMM.', steps: [
          { label: '1. Ask a causal question', desc: 'Not "how many sales did Meta report?" but "how many extra sales did Meta cause?" Write down the decision the test will change.' },
          { label: '2. Pick a design', desc: '<b>Conversion lift</b>: the platform randomly withholds ads from a holdout group of users and compares them with exposed users. <b>Geo holdout</b>: you switch a channel off (or up) in matched regions and compare with similar control regions. Geo tests need no user-level tracking, so they survive privacy changes.' },
          { label: '3. Size it before you start', desc: 'Small tests produce noisy answers. Decide the minimum lift worth detecting, the test length (often 2–6 weeks, plus time for delayed sales) and how much reach you will sacrifice in the holdout.' },
          { label: '4. Measure lift', desc: 'Incremental conversions = test result − what control predicts. Incremental CAC = spend ÷ incremental customers. Incremental ROAS (iROAS) = incremental revenue ÷ spend.' },
          { label: '5. Act and re-test', desc: 'Move budget toward channels whose incremental return beats break-even, then re-test at the new spend level, because returns shrink as spend rises.' }
        ] },
        { type: 'interactive', widget: 'ab-test', title: 'Is the lift real or noise?', note: 'A conversion-lift test is just an A/B test. Try a holdout of 50,000 users converting at 2.0% (1,000) and an exposed group of 50,000 converting at 2.3% (1,150). Then shrink both groups to 5,000 users with the same rates and see whether the result is still significant.' },
        { type: 'case', company: 'eBay', year: '2012–2014', title: 'Did brand search ads do anything?', situation: `eBay spent heavily on paid search ads, including ads on its own brand name, and attribution reports credited those ads with a large volume of sales.`, decision: `Economists Thomas Blake, Chris Nosko and Steven Tadelis ran controlled experiments: brand-keyword ads were switched off, and non-brand search ads were paused in some regions while matched control regions continued as usual.`, outcome: `Brand-keyword ads produced little to no incremental sales — people searching "eBay" simply clicked the free organic link. Returns on other search ads were far lower than attribution suggested, and were concentrated among infrequent users; frequent eBay shoppers would have bought anyway.`, lesson: `Attribution measures who was present at the sale; experiments measure who caused it. The gap is largest for channels that target people who are already intending to buy.` },
        { type: 'callout', kind: 'insight', title: 'Marketing mix modelling (MMM) in plain English', html: `<p><b>MMM</b> is a statistical model, usually built on two or more years of weekly data, that explains total sales using spend by channel plus non-marketing factors: seasonality, price, promotions, distribution, competitors and the economy. It needs no cookies or user-level tracking and covers offline media like TV, radio and outdoor.</p><ul><li><b>Adstock (carry-over)</b>: an ad keeps working after it runs, fading over time. A TV burst this week still nudges sales for several weeks; a search ad fades almost immediately.</li><li><b>Saturation (diminishing returns)</b>: the first $10,000 on a channel reaches the most responsive people; the next $10,000 reaches people who are harder to persuade. Response curves bend and flatten.</li><li><b>Output</b>: each channel's contribution, its response curve, and a recommended budget split — the marginal return of the next dollar, not just the average.</li></ul><p>Open-source tools brought MMM within reach of mid-sized firms: <b>Robyn</b> from Meta's marketing science team and <b>Meridian</b> from Google, which became generally available in early 2025. The catch: models are only as good as their data and assumptions, which is why serious teams <b>calibrate MMM with experiments</b>.</p>` },
        { type: 'timeline', title: 'How privacy changes broke user-level tracking', items: [
          { label: '2017–2020', desc: 'Apple\'s Safari introduces Intelligent Tracking Prevention and Firefox blocks third-party tracking cookies by default, shrinking cross-site tracking.' },
          { label: '2020', desc: 'Google announces plans to phase out third-party cookies in Chrome, the world\'s most-used browser.' },
          { label: '2021', desc: 'Apple\'s App Tracking Transparency (iOS 14.5) makes apps ask permission to track users across other apps. Many users decline, and app-install and mobile ad measurement becomes far less precise.' },
          { label: '2022', desc: 'Meta tells investors that Apple\'s changes will cost it roughly $10 billion of revenue that year — a sign of how much ad targeting and measurement depended on tracking.' },
          { label: '2024–2025', desc: 'After repeated delays, Google drops the plan to remove third-party cookies from Chrome and later winds down most of its Privacy Sandbox replacements. Cookies survive, but consent rules, ad blockers and browser limits keep signals patchy.' },
          { label: '2026', desc: 'The consensus approach is triangulation: no single method is trusted alone, and decisions rest on MMM, experiments and attribution read together.' }
        ] },
        { type: 'framework', name: 'The 2026 measurement stack: triangulation', by: 'Common practice among measurement-mature advertisers', when: 'Setting annual and quarterly budgets, and deciding what to trust when methods disagree.', steps: [
          { label: 'MMM sets the strategy', desc: 'Refreshed monthly or quarterly. Answers: how should the total budget be split across channels, and where are we hitting saturation?' },
          { label: 'Experiments keep everyone honest', desc: 'Geo holdouts and conversion-lift tests produce causal numbers that calibrate the MMM and challenge channels whose reported ROAS looks too good.' },
          { label: 'Attribution steers the day-to-day', desc: 'Platform and analytics attribution is fast and granular — use it to compare creatives, audiences and keywords within a channel, not to set budgets between channels.' },
          { label: 'Business metrics are the referee', desc: 'MER, blended CAC and contribution after marketing tell you whether the whole system is working, whatever each model claims.' },
          { label: 'Investigate disagreements', desc: 'When MMM, a test and attribution disagree, design the next experiment to settle the question rather than picking the number you like best.' }
        ] }
      ],
      terms: [
        { term: 'MER (marketing efficiency ratio)', def: 'Total revenue divided by total marketing spend. A whole-business view that does not depend on attribution.' },
        { term: 'Blended CAC', def: 'Total marketing spend divided by all new customers, including those who arrived organically.' },
        { term: 'Contribution after marketing', def: 'Revenue minus product, fulfilment and marketing costs: the profit marketing leaves behind to cover overheads.' },
        { term: 'Attribution model', def: 'A rule or algorithm for splitting credit for a sale among the marketing touches a customer encountered.' },
        { term: 'Incrementality', def: 'The extra sales caused by marketing that would not have happened without it, measured with a control group.' },
        { term: 'Geo holdout', def: 'An experiment where a channel is switched off or changed in some regions and results are compared with similar control regions.' },
        { term: 'Adstock', def: 'The carry-over effect of advertising: its impact lingers and fades over the following weeks.' },
        { term: 'Saturation', def: 'Diminishing returns: each extra dollar in a channel produces less response than the one before.' }
      ],
      quiz: [
        { q: 'A brand had $1.2M revenue last quarter and spent $300k on all marketing. Platforms reported a combined ROAS of 6x. What is the MER?', options: ['6.0', '0.25', '4.0', '1.2'], answer: 2, explain: 'MER = total revenue ÷ total marketing spend = 1,200,000 ÷ 300,000 = 4.0. The 6x platform figure is higher because platforms each claim credit for overlapping sales.' },
        { q: 'Which attribution model is most likely to make brand search and retargeting look like your best channels?', options: ['Last-click', 'First-click', 'Linear', 'A geo holdout test'], answer: 0, explain: 'Last-click hands all credit to the final touch, which is often a brand search or retargeting ad seen by someone who had already decided to buy. A geo holdout is an experiment, not an attribution model.' },
        { q: 'In marketing mix modelling, "adstock" captures…', options: ['The stock price reaction to an ad campaign', 'The number of ads in inventory', 'Diminishing returns at high spend', 'The way an ad\'s effect carries over and fades in later weeks'], answer: 3, explain: 'Adstock is carry-over. Diminishing returns is saturation, a separate part of the model.' },
        { q: 'You run a 4-week geo test. Test regions with YouTube ads sell $1.10M; the control regions predict $1.00M without ads. YouTube spend in test regions was $40k and contribution margin is 50%. What is the incremental ROAS and is it profitable?', options: ['27.5x, very profitable', '2.5x, above the 2.0x break-even', '2.5x, below break-even', '0.4x, unprofitable'], answer: 1, explain: 'Incremental revenue = 1.10M − 1.00M = $100k. iROAS = 100,000 ÷ 40,000 = 2.5x. Break-even = 1 ÷ 0.50 = 2.0x, so it is profitable.' },
        { q: 'Why did Apple\'s App Tracking Transparency (2021) push many advertisers back toward MMM?', options: ['It banned online advertising on iPhones', 'It made MMM a legal requirement', 'It reduced user-level tracking, and MMM uses aggregate data that does not need it', 'It made last-click attribution perfectly accurate'], answer: 2, explain: 'With fewer users allowing cross-app tracking, user-level attribution became patchier. MMM works on aggregate spend and sales data, so it is unaffected.' }
      ],
      challenge: {
        title: 'Whose sales are they anyway?',
        prompt: `A DTC skincare brand reports for one quarter: revenue $2,000,000; contribution margin before marketing 60%; marketing spend $500,000 split as Meta $250,000, Google brand search $50,000, Google non-brand search $100,000 and TikTok $100,000. Actual new customers: 10,000. The platforms claim 12,500 conversions between them (Meta 6,000, brand search 3,000, non-brand 2,000, TikTok 1,500). Incrementality tests found: Meta 3,000 incremental customers (conversion lift), brand search 250 (geo holdout), non-brand search 1,200 (geo holdout), TikTok 1,600 (conversion lift). A new customer is worth about $120 of contribution in their first year. <br><br>(1) Calculate MER, blended CAC and contribution after marketing. (2) Explain why platform claims exceed actual customers. (3) Calculate incremental CAC by channel. (4) Recommend how to move $30,000 of budget, and estimate the effect.`,
        hints: ['MER = revenue ÷ total marketing; blended CAC = total marketing ÷ all new customers.', 'Incremental CAC = channel spend ÷ incremental customers. Compare it with the $120 first-year value.', 'Returns diminish: assume the next dollar in a channel performs worse than its average so far.'],
        model: `<p><b>1. Whole-business view</b></p><ul><li>MER = 2,000,000 ÷ 500,000 = <b>4.0</b>. Break-even MER = 1 ÷ 0.60 ≈ 1.67, so the overall programme is healthy.</li><li>Blended CAC = 500,000 ÷ 10,000 = <b>$50</b>.</li><li>Contribution before marketing = 2,000,000 × 60% = $1,200,000. Contribution after marketing = 1,200,000 − 500,000 = <b>$700,000 (35% of revenue)</b>.</li></ul><p><b>2. Why claims exceed reality</b>: platforms claim 12,500 conversions versus 10,000 real customers (25% over-claim). The same customer often saw a Meta ad and then searched the brand, and both platforms counted the sale. On top of that, some customers would have bought anyway.</p><p><b>3. Incremental CAC</b></p><ul><li>TikTok: 100,000 ÷ 1,600 = <b>$62.50</b> (under-credited by its own dashboard, which claimed 1,500)</li><li>Meta: 250,000 ÷ 3,000 = <b>$83.33</b></li><li>Non-brand search: 100,000 ÷ 1,200 = <b>$83.33</b></li><li>Brand search: 50,000 ÷ 250 = <b>$200</b> — well above the $120 first-year value</li><li>Total incremental customers = 3,000 + 250 + 1,200 + 1,600 = 6,050; the other 3,950 would have arrived without paid media. Paid incremental CAC = 500,000 ÷ 6,050 ≈ <b>$82.64</b>.</li></ul><p><b>4. Recommendation</b>: cut brand search from $50,000 to <b>$20,000</b> (keep bids where competitors target your name), and move the $30,000 to TikTok (+$20,000, to $120,000) and non-brand search (+$10,000, to $110,000).</p><ul><li>Lost from brand search: at most 30,000 ÷ 200 = <b>150</b> customers.</li><li>Gained, assuming new spend performs 25% worse than the average because of saturation: TikTok 20,000 ÷ 78.13 ≈ <b>256</b>; non-brand 10,000 ÷ 104.17 ≈ <b>96</b>.</li><li>Net ≈ 256 + 96 − 150 = <b>+202 customers</b>, worth about 202 × $120 ≈ <b>$24,000</b> of extra first-year contribution, for the same total budget.</li></ul><p><b>Then</b>: re-run the brand-search geo holdout at the lower spend, feed all four test results into the MMM as calibration, and judge the quarter on MER, blended CAC and contribution after marketing rather than platform ROAS.</p>`
      },
      takeaways: [
        'Steer campaigns with platform ROAS; judge the budget on MER, blended CAC and contribution after marketing.',
        'Every attribution model has a bias, and none of them proves causation.',
        'Incrementality tests (geo holdouts, conversion lift) show what marketing actually caused.',
        'MMM models carry-over (adstock) and diminishing returns (saturation) without user tracking.',
        'In 2026, triangulate: MMM for budgets, experiments to calibrate, attribution for daily optimisation.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'marketing-6',
      title: 'Positioning (April Dunford) and go-to-market strategy',
      level: 'Advanced',
      minutes: 18,
      hook: `A great product with the wrong positioning looks like a bad product — and a launch without a GTM plan is just a press release.`,
      eli5: `If a new kind of fruit appeared in a shop labelled "vegetable", people would cook it wrong and hate it. Positioning is choosing the right label and shelf so people instantly understand what it is and why it is better. Go-to-market is the plan for who you show it to first, how, and at what price.`,
      blocks: [
        { type: 'framework', name: 'Obviously Awesome positioning', by: 'April Dunford, 2019', when: 'Launching a product, entering a new market, or when sales cycles are long and prospects "don\'t get it".', steps: [
          { label: '1. Competitive alternatives', desc: 'What would customers do if you did not exist? Often a spreadsheet, an intern or "do nothing", not a named competitor.' },
          { label: '2. Unique attributes', desc: 'What do you have that the alternatives lack? Features, delivery model, expertise.' },
          { label: '3. Value (and proof)', desc: 'What do those attributes enable for customers? Back it with proof: data, case studies.' },
          { label: '4. Best-fit customers', desc: 'Who cares most about that value? Define the characteristics that make someone a great fit.' },
          { label: '5. Market category', desc: 'The frame of reference that makes your value obvious: head-to-head, a sub-category, or (rarely) a new category.' },
          { label: '(Optional) Relevant trends', desc: 'A trend that makes the offer more urgent now — used carefully.' }
        ] },
        { type: 'callout', kind: 'tip', title: 'Category choice changes everything', html: `<p>Dunford tells the story of a database product that struggled when positioned as a general database (huge, entrenched competitors) and found traction when repositioned for a specific use case where its strengths were obvious. The product did not change — the <b>frame</b> did. Choose a category where your strengths are table stakes for winning, not a curiosity.</p>` },
        { type: 'matrix', name: 'Go-to-market motion', xLabel: 'Deal size / complexity →', yLabel: 'Ease of self-serve adoption →', cells: [
          { label: 'Product-led (PLG)', desc: 'Low price, easy to try: free tier or trial, viral loops, in-product upgrade. e.g. Canva, early Slack, Dropbox.' },
          { label: 'Product-led sales', desc: 'Easy to try but big deals: users adopt free, sales team converts teams to enterprise contracts. e.g. Figma, Notion.' },
          { label: 'Marketing-led / inside sales', desc: 'Simple, smaller deals that still need persuasion: content, ads, demos, short sales cycle.' },
          { label: 'Sales-led / enterprise', desc: 'Complex, high-value: account-based marketing, field sales, pilots, procurement. e.g. Salesforce, Palantir.' }
        ] },
        { type: 'timeline', title: 'A go-to-market plan, step by step', items: [
          { label: 'ICP', desc: 'Define the ideal customer profile and the painful trigger event.' },
          { label: 'Positioning', desc: 'Run the 5-component exercise; write messaging per persona.' },
          { label: 'Pricing & packaging', desc: 'Match price model to value and motion (see Pricing track).' },
          { label: 'Channels & motion', desc: 'PLG, inside sales or field sales; pick 1–2 acquisition channels.' },
          { label: 'Launch', desc: 'Beachhead launch to a narrow segment; collect proof (case studies).' },
          { label: 'Measure & iterate', desc: 'Activation, CAC, win rate, payback; expand to adjacent segments.' }
        ] },
        { type: 'case', company: 'Dropbox', year: '2008–2010', title: 'A referral loop as the GTM engine', situation: `Dropbox found paid search expensive relative to its low-priced subscription.`, decision: `It built a referral programme giving both the inviter and the new user extra free storage, built right into onboarding.`, outcome: `Referrals became a major driver of sign-ups and the programme is one of the most cited examples of product-led growth.`, lesson: `When CAC through ads is too high for your price point, design acquisition into the product itself.` },
        { type: 'interactive', widget: 'viral-loop', title: 'Model a referral loop', note: 'Set invites per user to 3 and conversion to 20% (K = 0.6), then raise conversion to 40% (K = 1.2). Notice how growth changes shape once K passes 1.' },
        { type: 'interactive', widget: 'decision-matrix', title: 'Choose your beachhead segment', note: 'Score 3 candidate segments on pain intensity, ability to pay, reachability, competition and referenceability; weight pain highest.' },
        { type: 'checklist', title: 'GTM readiness', items: [
          'ICP written with firmographics and trigger events',
          'Positioning validated in 10+ customer conversations',
          'One primary acquisition channel with a CAC target',
          'Pricing page and sales collateral match the positioning',
          'Three proof points (logos, metrics, testimonials) ready',
          'Launch metrics dashboard live before launch day'
        ] }
      ],
      terms: [
        { term: 'Competitive alternatives', def: 'What customers would use or do if your product did not exist.' },
        { term: 'Market category', def: 'The frame of reference customers use to understand and compare your product.' },
        { term: 'ICP', def: 'Ideal customer profile: the type of account that gets the most value and is most valuable to you.' },
        { term: 'Go-to-market (GTM)', def: 'The plan for bringing a product to customers: target, positioning, pricing, channels and sales motion.' },
        { term: 'Product-led growth (PLG)', def: 'A GTM motion where the product itself drives acquisition, conversion and expansion.' },
        { term: 'Beachhead', def: 'A narrow first market you dominate before expanding to adjacent ones.' },
        { term: 'Account-based marketing (ABM)', def: 'Treating specific high-value target accounts as markets of one, with tailored campaigns.' }
      ],
      quiz: [
        { q: 'In April Dunford\'s method, what comes FIRST?', options: ['Market category', 'Tagline', 'Logo', 'Competitive alternatives'], answer: 3, explain: 'You start from what customers would do without you.' },
        { q: 'A $5/month design tool that anyone can try in two minutes most likely fits which GTM motion?', options: ['Enterprise field sales', 'Channel partners only', 'Product-led growth', 'Trade shows only'], answer: 2, explain: 'Low price and easy self-serve adoption suit PLG.' },
        { q: 'A viral coefficient (K) of 1.2 means…', options: ['Each user brings 1.2 new users on average, so growth compounds', 'Growth stops', '12% churn', 'Each user pays $1.20'], answer: 0, explain: 'K > 1 means self-sustaining viral growth (in theory).' },
        { q: 'Why do startups choose a beachhead segment?', options: ['To avoid revenue', 'Because big markets are illegal', 'To raise prices immediately', 'To win references and word of mouth in a focused market before expanding'], answer: 3, explain: 'Dominating a niche creates proof and momentum.' },
        { q: 'Repositioning a product into a different market category usually requires…', options: ['Rebuilding the product', 'Changing the frame of reference so strengths become obvious', 'Halving the price', 'Firing sales'], answer: 1, explain: 'Positioning changes the context, not necessarily the product.' }
      ],
      challenge: {
        title: 'Position and launch an AI meeting-notes tool',
        prompt: `Your startup has an AI meeting-notes tool. It is one of many. Its unique strength: it runs fully on-premise and meets strict compliance requirements. Current positioning: "AI notetaker for everyone" — conversion from trial is 2% and enterprise deals stall. Use Dunford's 5 components to reposition it and outline a 90-day GTM plan.`,
        hints: ['What do compliance-heavy firms do today instead of AI notes?', 'Which category makes on-premise a must-have, not a nice-to-have?', 'Sales-led or PLG?'],
        model: `<p><b>1. Competitive alternatives</b>: in banks, hospitals, law firms and government, AI notetakers are often banned; staff take manual notes or use human minute-takers.</p><p><b>2. Unique attributes</b>: on-premise deployment, data never leaves the client network, audit logs, compliance certifications.</p><p><b>3. Value + proof</b>: hours saved per employee each week without compliance risk; proof via a pilot with one regulated firm.</p><p><b>4. Best-fit customers</b>: regulated organisations with 1,000+ staff, a CISO who has blocked cloud AI tools, and high meeting load.</p><p><b>5. Category</b>: "secure, on-premise meeting intelligence for regulated industries" — a sub-category where cloud competitors cannot easily follow.</p><p><b>90-day GTM</b></p><ol><li>Days 1–30: list 100 target accounts; rewrite website and deck around compliance; build security documentation pack.</li><li>Days 31–60: ABM outreach to CISOs and heads of compliance; aim for 15 discovery calls and 3 paid pilots.</li><li>Days 61–90: convert pilots into case studies; speak at one compliance conference; price per-seat annual contracts with an implementation fee.</li></ol><p><b>Metrics</b>: pilots started, pilot-to-contract conversion, sales cycle length, average contract value.</p>`
      },
      takeaways: [
        'Positioning starts from customers\' real alternatives, not your feature list.',
        'Choose a market category that makes your strengths obvious.',
        'Match GTM motion to deal size and ease of adoption.',
        'Win a beachhead with proof before expanding.'
      ]
    }
  ]
});
