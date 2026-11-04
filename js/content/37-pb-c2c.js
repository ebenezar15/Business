/* MBA Studio — Track 37: Business Model Playbooks · Playbook 4 · C2C (Consumer-to-Consumer Marketplaces) */
MBA.addTrack({
  id: 'pb-c2c',
  stage: 5,
  order: 37,
  title: 'Playbook: C2C (Consumer-to-Consumer Marketplaces)',
  icon: '🔁',
  color: '#a855f7',
  series: 'Business Model Playbooks',
  part: 'Playbook 4 · C2C',
  tagline: 'Build a place where strangers trade with each other — and trust it enough to come back',
  summary: `A C2C marketplace earns money when ordinary people buy, sell, rent or hire from each other. This playbook shows how to solve the cold-start problem with an atomic network, measure liquidity, design trust and safety, set a take rate people accept, read marketplace unit economics from GMV down to contribution, and scale city by city without losing what made the first network work.`,
  outcomes: [
    'Map the money flow of a C2C platform and explain why GMV is not revenue',
    'Size a C2C market bottom-up from real behaviour (groups, classifieds, offline trade) and spot the hard side',
    'Launch an atomic network, seed supply and track match rate, time to match and fill rate',
    'Design trust and safety (identity, reviews, escrow, protection, moderation) and fight leakage',
    'Choose between seller commission, buyer fees, listing fees, promoted listings and subscriptions — and model the contribution per transaction',
    'Scale geography by geography, handle regulation (India e-commerce rules, US INFORM Act, EU DAC7) and avoid the classic failure patterns'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'pb-c2c-1',
      title: 'How a C2C marketplace works: money flow, metrics and fit',
      level: 'Beginner',
      minutes: 15,
      hook: `A C2C marketplace owns no stock and employs no sellers — its only product is the confidence that a stranger will deliver.`,
      eli5: `Imagine a school notice board where kids pin "selling my old bicycle" notes. The board does not own any bicycles. It only helps the right kid find the right note. If the board also holds the money until the bike arrives, and lets kids rate each other, more kids will trust it and use it. A C2C marketplace is that notice board, made huge and online — and it earns a small slice of each deal for keeping it safe and easy.`,
      blocks: [
        {
          type: 'text', title: 'What makes C2C different',
          html: `<p>In <b>C2C</b> both sides are ordinary people: someone with a spare jacket, a spare seat in a car, a spare room or a free weekend meets someone who wants it. The platform is a <span class="hl">matchmaker plus referee</span>. You met platforms and network effects in <a href="#/lesson/economics-6">Economics, lesson 6</a> and marketplace archetypes in <a href="#/lesson/business-model-3">Business model, lesson 3</a>. Here we go deep on the version where <b>sellers are amateurs</b>: they list rarely, price badly, ship slowly and can disappear — so liquidity and trust are harder than in B2C.</p>`
        },
        {
          type: 'flow', title: 'Follow one transaction through a managed C2C platform',
          steps: [
            { label: 'Seller lists an item', desc: 'Photos, price, condition. Good platforms suggest a price and title so amateurs list in under a minute.' },
            { label: 'Buyer searches and finds it', desc: 'Search, feed or local map. Depth of relevant listings decides whether the buyer stays.' },
            { label: 'Is the buyer willing to trust this stranger?', kind: 'decision', desc: 'Profile, reviews, verified ID and buyer protection answer this question.', branches: [ { label: 'Yes', to: 'Pays on the platform' }, { label: 'No', to: 'Leaves, or tries to deal off-platform' } ] },
            { label: 'Buyer pays the platform (escrow)', desc: 'Money is held, not passed straight to the seller. The platform adds its buyer fee here if it charges one.' },
            { label: 'Seller ships or hands over', desc: 'Prepaid label, locker drop-off or meet-up. The platform tracks it.' },
            { label: 'Buyer confirms or the protection window passes', desc: 'Disputes go to support; otherwise money is released.' },
            { label: 'Seller is paid, minus commission', desc: 'Both sides leave a review, which feeds the next buyer\'s trust decision.' }
          ]
        },
        {
          type: 'map', title: 'The C2C family: same logic, different "item"', center: 'C2C platforms',
          branches: [
            { label: 'Resale goods', desc: 'Second-hand fashion, electronics, collectibles. Low ticket, high volume, shipping-heavy.', children: ['eBay', 'Vinted', 'Depop', 'Poshmark'] },
            { label: 'Classifieds', desc: 'Listings with contact details; the deal often happens offline. Cheap to run, hard to monetise per deal.', children: ['Craigslist', 'OLX', 'Quikr', 'Facebook Marketplace'] },
            { label: 'P2P rentals', desc: 'Use an asset for a while: a room, a car, a tool. Trust and insurance dominate.', children: ['Airbnb', 'Turo'] },
            { label: 'P2P mobility', desc: 'Sharing an empty seat on a trip people were making anyway.', children: ['BlaBlaCar'] },
            { label: 'P2P services', desc: 'People hire people for tasks; leakage risk is highest because the relationship repeats.', children: ['Cleaning', 'Tutoring', 'Pet sitting'] },
            { label: 'Creator and peer funding', desc: 'Individuals back individuals: crowdfunding and creator platforms.', children: ['Kickstarter'] },
            { label: 'C2B2C hybrids', desc: 'The platform buys from consumers, refurbishes and resells — more like a retailer.', children: ['Cars24', 'CarDekho'] }
          ]
        },
        {
          type: 'formula', name: 'From GMV to what you actually keep',
          expr: 'Net revenue = GMV × Take rate     Contribution = Net revenue − (payments + incentives + trust & support + refunds)',
          explain: `<b>GMV</b> (gross merchandise value) is the total value of deals on the platform. It is your customers' money, not yours. <b>Take rate</b> is the share you keep as fees. <b>Contribution</b> is what is left after the costs that rise with every transaction.`,
          example: `Illustrative: 1,00,000 deals a month at ₹1,000 = ₹10 crore GMV. A 10% take rate gives ₹1 crore net revenue. If payments cost 2% of GMV (₹20 lakh) and incentives plus support cost ₹30 per deal (₹30 lakh), contribution is ₹50 lakh — 5% of GMV.`
        },
        {
          type: 'compare', title: 'Three ways to run a C2C platform', headers: ['', 'Open classifieds', 'Managed marketplace', 'C2B2C (buy and resell)'],
          rows: [
            ['Who handles the money', 'Buyer and seller, offline', 'The platform (escrow)', 'The platform buys stock'],
            ['Typical revenue', 'Paid listings, featured ads, job/dealer fees', 'Commission or buyer fee, ads, shipping', 'Resale margin plus fees'],
            ['Trust tools', 'Light: reporting, moderation', 'Heavy: protection, reviews, verification', 'The platform guarantees the item'],
            ['Leakage risk', 'Not a problem (no per-deal fee)', 'Medium to high', 'Low'],
            ['Capital needed', 'Low', 'Medium', 'High (inventory)'],
            ['Example', 'Craigslist, OLX', 'Vinted, Etsy, Airbnb', 'Cars24']
          ]
        },
        {
          type: 'case', company: 'eBay', year: '1995–2002', title: 'Trust first, then own the payment',
          situation: `Pierre Omidyar launched AuctionWeb, later eBay, in 1995. Buyers sent money to strangers they had never met, often by cheque, and had no way to judge who was honest.`,
          decision: `About six months in, Omidyar launched the <b>Feedback Forum</b> so every user carried a public reputation, and users with very negative scores could be removed. Later, many eBay users adopted PayPal for payment even though eBay ran its own payment service, Billpoint. In July 2002 eBay agreed to buy PayPal in a stock deal valued at about $1.5 billion and wind down Billpoint.`,
          outcome: `Reputation plus trusted payment became the core of eBay\'s C2C model. Reports at the time said most of PayPal\'s business already came from eBay users — the market had chosen the payment tool before eBay did.`,
          lesson: `In C2C, trust infrastructure (reputation, then payments) is the product. If your users pick a third-party tool to solve trust, consider owning it.`
        },
        {
          type: 'case', company: 'Craigslist', year: '1995–today', title: 'Free for almost everyone, paid where it hurts least',
          situation: `Craigslist began as an email list of San Francisco events and became the dominant local classifieds site in the US, with a famously plain design.`,
          decision: `It kept nearly all personal listings free and charged only a few categories where businesses gain the most — such as job postings in large cities and some dealer or broker listings. It stayed private with a very small team.`,
          outcome: `The company does not publish accounts, but it is widely reported to be very profitable relative to its size. Its weakness: with contact details exchanged and payment offline, it has little control over fraud or quality, which left room for managed rivals in each category.`,
          lesson: `Classifieds monetise the business side and the posting, not each deal. Cheap to run, but it cedes trust — and therefore specialised categories — to others.`
        },
        {
          type: 'pyramid', title: 'The C2C health stack (fix lower layers first)',
          levels: [
            { label: 'Monetisation', note: 'Take rate, ads, services', desc: 'Only charge more once users would lose real value by leaving.' },
            { label: 'Retention and repeat', note: 'Users come back', desc: 'Buyers return to buy, sellers relist. Newer cohorts should retain better than older ones.' },
            { label: 'Trust', note: 'Strangers transact', desc: 'Identity, reviews, protection and fast dispute handling.' },
            { label: 'Liquidity', note: 'Things actually match', desc: 'High share of listings sell or searches convert, quickly.' },
            { label: 'Supply density', note: 'Enough of the right listings', desc: 'In a narrow category and place, buyers see enough relevant choice.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you choose the C2C model',
          items: [
            { q: 'Do people already trade this item or service with strangers today — in groups, classifieds or markets?', why: 'Existing behaviour is the strongest demand signal and your first source of supply.' },
            { q: 'Is the transaction one-off (a used jacket) or repeating (a weekly cleaner)?', why: 'Repeat relationships leak off-platform; one-off trades keep needing the platform.' },
            { q: 'What could go wrong between two strangers, and who pays when it does?', why: 'The answer sets your trust and insurance costs and often your fee level.' },
            { q: 'Will you handle the money (escrow) or let users pay each other?', why: 'Handling money enables commission and protection but adds payment, fraud and compliance costs.' },
            { q: 'Is the average deal big enough for a percentage fee to cover costs?', why: 'On a ₹300 item, fixed costs per transaction can exceed a 10% fee.' },
            { q: 'Which side is harder to attract and keep?', why: 'You subsidise and design for the hard side first.' }
          ]
        }
      ],
      terms: [
        { term: 'C2C marketplace', def: 'A platform where individuals sell, rent or provide services to other individuals, with the platform matching them and usually earning a fee.' },
        { term: 'GMV (gross merchandise value)', def: 'Total value of transactions on the platform in a period. It measures size, not the company\'s revenue.' },
        { term: 'Take rate', def: 'Net revenue divided by GMV: the share of each deal the platform keeps through fees.' },
        { term: 'Escrow', def: 'Holding the buyer\'s payment until the item or service is delivered, then releasing it to the seller.' },
        { term: 'Liquidity', def: 'How reliably and quickly buyers and sellers find a match. A liquid marketplace turns listings into sales and searches into purchases.' },
        { term: 'Managed vs open marketplace', def: 'A managed marketplace controls payment, standards and support; an open one (classifieds) only connects people.' }
      ],
      quiz: [
        { q: 'A resale app shows ₹50 crore of GMV and a 12% take rate. What is its net revenue?', options: ['₹50 crore', '₹6 crore', '₹12 crore', '₹4.4 crore'], answer: 1, explain: '₹50 crore × 12% = ₹6 crore. GMV is the users\' money; only the take is revenue.' },
        { q: 'Why did eBay\'s Feedback Forum matter so much in the early years?', options: ['It cut shipping costs', 'It replaced auctions with fixed prices', 'It allowed sellers to set higher prices', 'It let strangers judge each other\'s honesty from past behaviour'], answer: 3, explain: 'Public reputation lets a buyer trust a stranger, which is the core problem C2C must solve.' },
        { q: 'Which C2C transaction is most at risk of leakage?', options: ['A one-off sale of a used phone', 'A weekly home cleaner found on the app', 'A collectible bought by auction', 'A concert ticket resale'], answer: 1, explain: 'Repeated relationships let both sides skip the fee after the first match.' },
        { q: 'Which layer should a new marketplace fix before raising its take rate?', options: ['Monetisation', 'Brand advertising', 'Supply density and liquidity', 'Office space'], answer: 2, explain: 'Without enough relevant supply and matches, higher fees only speed up churn.' },
        { q: 'A classifieds site like Craigslist mainly earns money from…', options: ['Paid listings in a few business-heavy categories', 'A commission on every sale', 'Selling its own inventory', 'Payments float'], answer: 0, explain: 'Most personal listings are free; fees come from categories such as job postings in big cities.' }
      ],
      challenge: {
        title: 'Classifieds or managed marketplace?',
        prompt: `<p>You are launching a platform for second-hand textbooks in Pune. Average book price: ₹400. Expected volume after year one: 8,000 sales a month. Two options:</p><ul><li><b>A — classifieds</b>: free listings, ₹49 to "feature" a listing; you expect 15% of 20,000 monthly listings to be featured.</li><li><b>B — managed</b>: you hold payment and arrange campus pick-up. 12% commission; payment cost 2% of GMV; support and pick-up ₹15 per sale.</li></ul><p>Compare monthly revenue and contribution and recommend.</p>`,
        hints: ['Option A revenue = listings × featured share × fee. Assume its variable cost is close to zero.', 'Option B: GMV = sales × ₹400; then take rate, minus payments and per-sale costs.'],
        model: `<p><b>Option A (classifieds):</b> 20,000 × 15% × ₹49 = <b>₹1,47,000</b> revenue; near-zero variable cost, so contribution ≈ ₹1,47,000.</p><p><b>Option B (managed):</b> GMV = 8,000 × ₹400 = ₹32,00,000. Revenue = 12% = ₹3,84,000. Payments 2% = ₹64,000. Support and pick-up = 8,000 × ₹15 = ₹1,20,000. Contribution = ₹3,84,000 − ₹64,000 − ₹1,20,000 = <b>₹2,00,000</b> (₹25 per sale).</p><p><b>Judgement:</b> B earns more and builds trust (no fake sellers, no no-shows), which matters for students paying strangers. But B only works if most of the 8,000 sales actually happen on-platform; textbook buyers on one campus can easily meet directly. <b>Recommendation:</b> start as B on one campus with protection that students value (refund if the edition is wrong), keep listing free, and track the share of chats that end in an on-platform payment. If it stays below about half, fall back to A\'s featured-listing model.</p>`
      },
      takeaways: [
        'A C2C platform sells trust and matching; GMV is the users\' money and only the take rate is revenue.',
        'Open classifieds are cheap and hard to monetise per deal; managed marketplaces earn per deal but carry payments, trust and leakage costs.',
        'Build the stack bottom-up: supply density, liquidity, trust, retention — then monetisation.',
        'Repeating relationships leak; one-off, risky trades keep needing the platform.'
      ],
      sources: [
        { title: 'Bill Gurley — A Rake Too Far: Optimal Platform Pricing Strategy', url: 'https://abovethecrowd.com/2013/04/18/a-rake-too-far-optimal-platformpricing-strategy/' },
        { title: 'a16z — 13 Metrics for Marketplace Companies', url: 'https://a16z.com/13-metrics-for-marketplace-companies/' },
        { title: 'CNN Money — eBay to buy PayPal (July 2002)', url: 'https://money.cnn.com/2002/07/08/news/deals/ebay_paypal/index.htm' },
        { title: 'eBay founder\'s note on the Feedback Forum', url: 'https://pages.ebay.com/services/forum/feedback-foundersnote.html' },
        { title: 'HBS Digital Initiative — Craigslist business model', url: 'https://d3.harvard.edu/platform-digit/?p=315' }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'pb-c2c-2',
      title: 'Market study: sizing a C2C market and finding the hard side',
      level: 'Beginner',
      minutes: 15,
      hook: `The best C2C markets are not invented — they are found, already happening badly in WhatsApp groups, flea markets and newspaper ads.`,
      eli5: `Before opening a lemonade stall you would stand on the street and count thirsty people. Before opening a swap shop you also need to count people with things to swap. A C2C founder counts both: how many people have spare stuff, how many want it, and how often they would trade if it were easy and safe.`,
      blocks: [
        {
          type: 'text', title: 'Two markets, not one',
          html: `<p>A C2C business must size <b>supply</b> (people willing to list) and <b>demand</b> (people willing to buy) separately, then ask how many matches can happen in one place and category. Top-down numbers such as "India's second-hand market is worth X" are useful for investors, but useless for launch decisions. Size <span class="hl">bottom-up, per atomic network</span>: one city, one category, one user type. The <a href="#/lesson/pb-c2c-3">next lesson</a> uses this to launch.</p>`
        },
        {
          type: 'pyramid', invert: true, title: 'Bottom-up sizing funnel for one city and category',
          levels: [
            { label: 'Households in the target area', desc: 'Start with a population you can count: e.g. 4 lakh households in a city zone.' },
            { label: 'Households owning the item', desc: 'Share that owns children\'s clothes, a car, a spare room — whatever you trade.' },
            { label: 'Willing to sell or rent in a year', desc: 'From surveys and existing listing behaviour. Usually a small share.' },
            { label: 'Listings per seller per year', desc: 'Casual sellers list a few times; power sellers list weekly. Estimate both groups.' },
            { label: 'Sell-through rate', desc: 'Share of listings that actually sell. New platforms often see low rates.' },
            { label: 'Transactions × average price = GMV', desc: 'Then × take rate = the revenue pool you could reach.' }
          ]
        },
        {
          type: 'map', title: 'Research methods that work for C2C', center: 'C2C market research',
          branches: [
            { label: 'Count existing trade', desc: 'Scrape or hand-count listings in Facebook groups, OLX, Craigslist-style boards and local markets. Note price, time to sell and complaints.', children: ['Listings per week', 'Asking vs sold prices'] },
            { label: 'Be the marketplace by hand', desc: 'Run a WhatsApp group or a spreadsheet and match people yourself for two weeks. Measure how many matches happen.', children: ['Concierge MVP', 'Manual matching'] },
            { label: 'Interview both sides', desc: 'Separate scripts for sellers (why not sell today?) and buyers (why not buy used?). Listen for fear, hassle and price.', children: ['Seller pains', 'Buyer fears'] },
            { label: 'Find the power sellers', desc: 'In most C2C markets a small group lists most of the supply. Find them early; they decide your launch.', children: ['Resellers', 'Frequent hosts'] },
            { label: 'Map substitutes', desc: 'Buying new, renting from a company, borrowing from friends, doing nothing. These set the price ceiling.', children: ['New retail', 'B2C rental'] },
            { label: 'Read regulation', desc: 'Some categories are restricted or need licences: vehicles, food, medicines, short-term rentals.', children: ['Permits', 'Platform liability'] }
          ]
        },
        {
          type: 'matrix', name: 'Which side is the hard side?', xLabel: 'Difficulty of attracting supply →', yLabel: 'Difficulty of attracting demand →',
          cells: [
            { label: 'Demand-constrained', desc: 'Plenty of sellers, few buyers (e.g. niche collectibles). Spend on buyer acquisition and curation.' },
            { label: 'Both hard', desc: 'Rare in a good market. Narrow the category until one side gets easy.' },
            { label: 'Easy start', desc: 'Both sides plentiful — usually means fierce competition. Win on trust and convenience.' },
            { label: 'Supply-constrained (most C2C)', desc: 'Buyers are easy, good listings are scarce (rooms, cars, quality fashion). Make listing effortless and reward sellers.' }
          ]
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Sanity-check the top-down number',
          note: 'Use it only as a cross-check: enter the total second-hand market, the slice your category and cities cover, and the share you could win. If your bottom-up GMV is far above the SOM, your assumptions are too generous.'
        },
        {
          type: 'case', company: 'Vinted', year: '2008–2013', title: 'From one wardrobe problem to its biggest country',
          situation: `Milda Mitkute and Justas Janauskas started Vinted in Lithuania in 2008 so people could trade clothes from each other\'s wardrobes, beginning with women\'s fashion.`,
          decision: `Rather than spreading across categories, Vinted expanded country by country within second-hand fashion. It launched in France in 2013, a large market with a strong habit of buying second-hand.`,
          outcome: `France soon became Vinted\'s largest market and was still its most thriving one ten years later, according to the company. Fashion stayed the core while other categories were added gradually.`,
          lesson: `Pick the market where the behaviour already exists at scale. A narrow category plus the right country beat a broad "sell anything" launch.`
        },
        {
          type: 'case', company: 'Quikr', year: '2008–2022', title: 'When the market is smaller than the pitch',
          situation: `Quikr grew into one of India\'s best-known horizontal classifieds sites and raised large sums, competing head-on with OLX across many categories.`,
          decision: `It split into many verticals — cars, homes, jobs, services and more — often run as separate businesses, betting that each would monetise through transactions and services.`,
          outcome: `Investor Kinnevik cut its valuation of Quikr by 45% in 2020, citing poor performance and fraudulently inflated revenue in some verticals. Quikr shut its AtHomeDiva beauty service and laid off around 2,000 people, and by FY22 its operating revenue had fallen to about ₹49 crore.`,
          lesson: `A horizontal classifieds audience does not make every vertical a business. Size each vertical bottom-up and check that users will pay there before you build it.`
        },
        {
          type: 'compare', title: 'Demand signals: strong vs weak', headers: ['Signal', 'Strong', 'Weak'],
          rows: [
            ['Existing behaviour', 'Busy groups with daily posts and haggling', 'Survey says "I would use it"'],
            ['Pain', 'People complain about scams, no-shows, wasted time', 'People are mildly curious'],
            ['Price gap', 'Used price far below new; savings worth the hassle', 'Used price close to new'],
            ['Frequency', 'Trade repeats (kids outgrow clothes yearly)', 'Once in a lifetime'],
            ['Seller motive', 'Need cash or space now', 'No reason to bother']
          ]
        },
        {
          type: 'questions', title: 'Ask before you commit to a C2C market',
          items: [
            { q: 'How many relevant listings would a buyer see in one search in our first city?', why: 'Market depth decides whether the first buyers come back.' },
            { q: 'Where do people trade this today, and what do they hate about it?', why: 'Your first users come from there, and their pain is your pitch.' },
            { q: 'Who are the top 10% of sellers and what would make them switch?', why: 'Power sellers often supply most listings in early C2C markets.' },
            { q: 'What is the gap between the used price and the new price?', why: 'A small gap means buyers will just buy new.' },
            { q: 'Is the category restricted or regulated in our launch city?', why: 'Rules on vehicles, rentals or food can kill unit economics or the whole idea.' },
            { q: 'Does our bottom-up GMV reconcile with a top-down cross-check?', why: 'A large mismatch means one of the assumptions is wrong.' }
          ]
        }
      ],
      terms: [
        { term: 'Bottom-up sizing', def: 'Estimating a market by multiplying countable units (households, listings, sell-through, price) rather than taking a share of a big industry number.' },
        { term: 'Hard side', def: 'The side of a marketplace that is scarcer and harder to attract or keep; usually supply in C2C.' },
        { term: 'Sell-through rate', def: 'Share of listings that actually sell in a period.' },
        { term: 'Market depth', def: 'How much relevant supply a buyer sees for a typical search.' },
        { term: 'Concierge MVP', def: 'Doing the matching by hand (in a chat group or spreadsheet) to test demand before building software.' },
        { term: 'Power seller', def: 'A seller who lists far more than average, often semi-professional, and supplies a large share of listings.' }
      ],
      quiz: [
        { q: 'A zone has 2,00,000 households. 30% own children\'s clothing worth reselling, 10% of those would sell in a year, each lists 12 items, and 40% sell. How many sales a year?', options: ['28,800', '72,000', '7,200', '2,88,000'], answer: 0, explain: '2,00,000 × 30% = 60,000; × 10% = 6,000 sellers; × 12 = 72,000 listings; × 40% = 28,800 sales.' },
        { q: 'For most C2C markets such as rooms or quality used fashion, which side is usually harder?', options: ['Demand', 'Supply', 'Neither', 'Payment providers'], answer: 1, explain: 'Buyers are plentiful; good listings from amateurs are scarce, so supply is the hard side.' },
        { q: 'Which is the strongest demand signal?', options: ['A survey where 70% say they would use the app', 'A large top-down industry estimate', 'Positive press coverage', 'A busy local group with daily posts and complaints about scams'], answer: 3, explain: 'Real, frequent trade with clear pain beats stated intentions.' },
        { q: 'What did Vinted do in 2013 that shaped its growth?', options: ['Launched in the United States', 'Sold to a larger rival', 'Launched in France, which became its largest market', 'Moved into new-car sales'], answer: 2, explain: 'France had strong second-hand habits and became Vinted\'s largest market.' },
        { q: 'Quikr\'s experience mainly teaches that…', options: ['Classifieds cannot make money anywhere', 'A big horizontal audience does not make every vertical viable', 'Verticals should never be separate businesses', 'Indian users do not buy second-hand'], answer: 1, explain: 'Each vertical needs its own bottom-up case and evidence that users will pay.' }
      ],
      challenge: {
        title: 'Size a peer-to-peer camera rental market',
        prompt: `<p>You want to launch P2P rental of cameras and lenses in Bengaluru. Your research: about 60,000 people own interchangeable-lens cameras; 8% say they would rent theirs out; 25% of those actually list; each listed kit gets rented 3 days a month on average; average price ₹900 a day. Planned take rate: 18%.</p><p>Estimate annual GMV and revenue, say which side is the hard side, and name two research steps before building.</p>`,
        hints: ['Owners → willing → actually list → rental days per month × 12 → × price.', 'Think about who carries the risk if a ₹1.5 lakh lens is damaged.'],
        model: `<p><b>Supply:</b> 60,000 × 8% = 4,800 willing; × 25% = <b>1,200 listed kits</b>.</p><p><b>Volume:</b> 1,200 × 3 days × 12 = 43,200 rental days a year.</p><p><b>GMV:</b> 43,200 × ₹900 = <b>₹3.89 crore</b>. <b>Revenue</b> at 18% = <b>≈ ₹70 lakh</b>.</p><p><b>Hard side: supply.</b> Owners fear damage and theft, so willingness drops sharply from "would" to "will". Demand (weddings, trips, creators) is easier.</p><p><b>Research before building:</b> (1) run a two-week concierge test in two photography clubs, matching rentals by hand with a deposit, and record how many owners actually hand over gear; (2) get quotes for damage cover per rental day and see whether it fits inside the 18% fee. <b>Recommendation:</b> the pool is modest, so launch only if damage cover is affordable and owners convert above the assumed 25%; otherwise start as a curated rental shop and add P2P later.</p>`
      },
      takeaways: [
        'Size supply and demand separately and bottom-up, for one city and category at a time.',
        'Existing, frequent, painful trade is the best demand signal; stated intentions are weak.',
        'Identify the hard side early — usually supply — and design for it.',
        'A big audience does not make every vertical viable; prove each one.'
      ],
      sources: [
        { title: 'Vinted newsroom — 15 years of Vinted', url: 'https://company.vinted.com/newsroom/15-years-of-Vinted' },
        { title: 'Inc42 — Quikr loses unicorn status / valuation cut', url: 'https://inc42.com/buzz/fraud-coliving-business-downturn-leads-to-45-fall-in-quikr-valuation' },
        { title: 'Inc42 — Quikr FY22 results', url: 'https://inc42.com/buzz/quikrs-net-loss-more-than-halves-in-fy22-despite-19-decline-in-operating-revenue' },
        { title: 'a16z — 13 Metrics for Marketplace Companies (market depth, concentration)', url: 'https://a16z.com/13-metrics-for-marketplace-companies/' },
        { title: 'Moneylife — Quikr retrenches 2,000, discontinues AtHomeDiva', url: 'https://www.moneylife.in/article/quikr-retrenches-2000-discontinues-athomediva-services/58966.html' }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'pb-c2c-3',
      title: 'Starting: solving the cold start with an atomic network',
      level: 'Intermediate',
      minutes: 16,
      hook: `An empty marketplace is worthless to both sides at once — so you do not launch a marketplace, you launch one tiny corner of it that works.`,
      eli5: `A party with two guests is awkward and people leave. A party with twenty friends in one small room is fun, and people invite more friends. Do not rent a stadium for your first party. Fill one small room, make it great, then open the next room.`,
      blocks: [
        {
          type: 'text', title: 'The cold-start problem',
          html: `<p>Buyers will not come without listings; sellers will not list without buyers. Andrew Chen calls this the <b>cold-start problem</b>. His answer is the <span class="hl">atomic network</span>: the smallest group that is dense enough to be useful on its own and can grow by itself. In early Uber that meant a single pick-up point at a specific time, not "San Francisco". For C2C, it might be one college hostel, one apartment complex, one city\'s parents of under-fives. The growth mechanics of loops and referrals are in <a href="#/lesson/growth-5">Growth, lesson 5</a>.</p>`
        },
        {
          type: 'flow', title: 'A cold-start playbook for a C2C launch',
          steps: [
            { label: 'Pick the atomic network', desc: 'One category, one place, one user type where intent is high and people already know each other.' },
            { label: 'Seed the hard side by hand', desc: 'List items for sellers (photograph their stuff), bring in power sellers, import listings from groups with permission, or supply inventory yourself at first.' },
            { label: 'Make the first buyers succeed', desc: 'Concierge support, quick replies, guaranteed refunds. The first trades must feel safe and easy.' },
            { label: 'Is the network dense enough?', kind: 'decision', desc: 'Check match rate, time to match and repeat use against your targets.', branches: [ { label: 'Yes', to: 'Copy the playbook to the next network' }, { label: 'No', to: 'Narrow further or add supply' } ] },
            { label: 'Add loops', desc: 'Sharing listings, referral credits and "sell what you bought" prompts turn buyers into sellers.' }
          ]
        },
        {
          type: 'cycle', title: 'The liquidity flywheel', center: 'Liquidity',
          steps: [
            { label: 'More relevant listings', desc: 'Buyers find what they want faster.' },
            { label: 'Higher conversion', desc: 'More searches end in a purchase.' },
            { label: 'Sellers sell faster', desc: 'Shorter time to sell tells sellers the platform works.' },
            { label: 'Sellers list more and tell friends', desc: 'Supply grows by itself; buyers become sellers.' }
          ]
        },
        {
          type: 'compare', title: 'Ways to seed supply', headers: ['Tactic', 'How it works', 'Watch out for'],
          rows: [
            ['Do it for them', 'Team photographs and lists sellers\' items (Airbnb famously helped hosts with photos)', 'Expensive; only for a few hundred early sellers'],
            ['Bring the power sellers', 'Recruit resellers, collectors, small shops with fee holidays', 'They may crowd out casual sellers and change the feel'],
            ['Piggyback an existing network', 'Let users share listings to groups and chats where buyers already are', 'Platform rules of the host network can change'],
            ['Single-player value', 'A tool sellers use even without buyers (wardrobe catalogue, price checker)', 'Must be genuinely useful on its own'],
            ['Seed with own inventory', 'Buy and list items to fill gaps (the C2B2C path)', 'Capital and stock risk']
          ]
        },
        {
          type: 'formula', name: 'Liquidity metrics you track weekly',
          expr: 'Match (sell-through) rate = Listings sold ÷ Listings live     Fill rate = Searches with a purchase ÷ Searches with intent',
          explain: `Also track <b>time to match</b> (days from listing to sale or request to booking) and <b>repeat rate</b>. a16z lists match rate, market depth and time to match among its core marketplace metrics; Lenny Rachitsky calls fill rate the ultimate measure of marketplace health.`,
          example: `Illustrative: 2,000 listings live this week, 360 sold → match rate 18%. 5,000 buyer searches with filters applied, 600 led to a purchase → fill rate 12%. Median time to sell 9 days. Target before expanding: e.g. 30%+ match rate and under 7 days.`
        },
        {
          type: 'interactive', widget: 'viral-loop', title: 'Will buyers bring the next buyers?',
          note: 'Treat "invites" as listings shared to outside groups. Try 3 shares per user with 10% conversion (K = 0.3), then 5 shares at 25% (K = 1.25). Notice that most C2C loops sit below K = 1: they amplify paid and organic growth rather than replace it.'
        },
        {
          type: 'case', company: 'Facebook Marketplace', year: '2016', title: 'Formalising trade that was already happening',
          situation: `Facebook users were already buying and selling locally in Facebook Groups. The company said more than 450 million people visited buy-and-sell groups each month. An earlier Facebook marketplace attempt in 2007 had not taken off.`,
          decision: `In October 2016 Facebook launched Marketplace as a dedicated tab for local buying and selling, starting in the US, UK, Australia and New Zealand, built on real profiles and the existing behaviour in Groups.`,
          outcome: `Marketplace grew into one of the largest local C2C venues by riding an existing social graph instead of building supply from zero. Payment and delivery still mostly happen between users, so trust problems typical of classifieds remain.`,
          lesson: `The cheapest cold start is an existing network where the behaviour already happens. Real identities lowered the trust barrier from day one.`
        },
        {
          type: 'case', company: 'Homejoy', year: '2012–2015', title: 'Buying growth that did not stick',
          situation: `Homejoy matched customers with home cleaners and expanded fast across cities, using steep introductory discounts to win customers.`,
          decision: `It prioritised rapid geographic expansion over proving retention in its first markets. Many customers who liked their cleaner arranged later cleanings directly, skipping the platform.`,
          outcome: `Repeat use was reportedly low — one widely cited figure was that only 15–20% of customers came back within a month. Facing losses and lawsuits over whether its cleaners were contractors or employees, Homejoy shut down in July 2015.`,
          lesson: `Discounts can fill the funnel but not create liquidity or loyalty. In repeat services, solve leakage and retention in one atomic network before opening the next city.`
        },
        {
          type: 'questions', title: 'Ask before you launch',
          items: [
            { q: 'What is the smallest group of people who would find this useful on day one?', why: 'That is your atomic network; anything larger dilutes density.' },
            { q: 'How will the first 100 listings appear, and who will create them?', why: 'Seeding supply is the real launch work; plan it by name.' },
            { q: 'What match rate and time to match will prove the first network works?', why: 'Set the bar before you see the data so you do not expand too early.' },
            { q: 'Can sellers get value even before buyers arrive?', why: 'Single-player value keeps supply around during the empty phase.' },
            { q: 'Are we paying for users who will never come back?', why: 'Subsidised first orders without repeat use burn cash, as Homejoy showed.' },
            { q: 'What legal set-up do we need before handling money?', why: 'Escrow-style flows usually need a licensed payment partner and clear terms of service.' }
          ]
        },
        {
          type: 'checklist', title: 'Launch essentials (jurisdiction-neutral)',
          items: [
            'Company incorporated; terms of service and a prohibited-items list written',
            'Payment partner that supports marketplace payouts or escrow-style holds (in India, an RBI-authorised payment aggregator; in the US, a provider with marketplace onboarding and identity checks)',
            'Seller onboarding that captures identity and payout details',
            'Grievance or complaints contact published (India\'s e-commerce rules require a grievance officer)',
            'Dispute and refund policy with a response time you can actually meet',
            'Dashboard for match rate, time to match, fill rate and repeat rate'
          ]
        }
      ],
      terms: [
        { term: 'Cold-start problem', def: 'A networked product has too few users to be useful, so it cannot attract users.' },
        { term: 'Atomic network', def: 'Andrew Chen\'s term for the smallest stable network that is useful on its own and can grow by itself.' },
        { term: 'Match rate', def: 'Share of listings or requests that result in a transaction (also called sell-through or utilisation).' },
        { term: 'Fill rate', def: 'Share of searches with clear purchase intent that end in a transaction.' },
        { term: 'Time to match', def: 'How long it takes from listing (or request) to a completed transaction.' },
        { term: 'Single-player mode', def: 'A feature that is useful to one side even before the other side is present.' }
      ],
      quiz: [
        { q: 'Which is the best first atomic network for a used-baby-gear marketplace?', options: ['All of India', 'Everyone who follows a parenting influencer', 'All online shoppers in Mumbai', 'Parents of under-fives in three large apartment complexes in one city'], answer: 3, explain: 'Small, dense, high-intent and socially connected — trades can happen quickly and safely.' },
        { q: 'This week 3,000 listings were live and 450 sold. What is the match rate?', options: ['6.7%', '15%', '45%', '30%'], answer: 1, explain: '450 ÷ 3,000 = 15%.' },
        { q: 'Why did Facebook Marketplace not face a classic cold start?', options: ['It paid sellers to list', 'It sold its own inventory', 'Hundreds of millions of people were already trading in Facebook Groups', 'It charged a high commission'], answer: 2, explain: 'It formalised existing behaviour on an existing network with real identities.' },
        { q: 'Each buyer shares 4 listings to outside groups and 15% of shares bring a new user. What is K?', options: ['0.6', '4', '0.15', '1.6'], answer: 0, explain: 'K = 4 × 0.15 = 0.6 — helpful amplification but not self-sustaining growth.' },
        { q: 'What was a core reason Homejoy\'s growth did not last?', options: ['Too few cleaners in any city', 'Low repeat use and customers booking cleaners directly', 'A take rate of zero', 'Too slow expansion'], answer: 1, explain: 'Low retention and off-platform leakage undermined heavily discounted growth.' }
      ],
      challenge: {
        title: 'Plan the first 90 days of a hostel book swap',
        prompt: `<p>You are launching a C2C app for used books and notes at one university with 12,000 students. Your goal by day 90: 1,500 live listings, a 25% weekly match rate and median time to sell under 5 days. You have ₹3 lakh and four volunteers.</p><p>Design the atomic network, the supply-seeding plan and the metrics you will review weekly. Show the maths for how many sales a week you need at the target.</p>`,
        hints: ['Weekly sales at target = live listings × weekly match rate.', 'Who are the power sellers on a campus? Think final-year students and toppers\' notes.'],
        model: `<p><b>Atomic network:</b> first-year engineering students in two hostels (about 1,500 students) whose syllabus overlaps — every book listed is relevant to most buyers.</p><p><b>Seeding supply:</b> (1) volunteers run "list in 60 seconds" desks in hostel lobbies, photographing books for students; (2) recruit 50 final-year students as power sellers with zero fees for one semester; (3) a ₹50 credit for every 5 books listed, capped at ₹1 lakh in total. <b>Demand:</b> share-to-class-group buttons and a guarantee to refund if the edition is wrong.</p><p><b>Maths:</b> 1,500 listings × 25% = <b>375 sales a week</b> at target. Week-by-week dashboard: live listings, weekly match rate, median time to sell, fill rate of searches, repeat buyers, share of chats that end in on-app payment.</p><p><b>Budget:</b> ₹1 lakh listing credits, ₹1 lakh refund guarantee reserve, ₹1 lakh for desks, printing and a payment partner\'s set-up. <b>Rule:</b> do not open a second campus until the first holds 25% match rate for four weeks in a row.</p>`
      },
      takeaways: [
        'Launch an atomic network — one place, one category, one user type — not a whole market.',
        'Seed the hard side by hand; it is unscalable work that makes everything else possible.',
        'Track match rate, time to match and fill rate weekly; set targets before expanding.',
        'Discounts buy first orders, not liquidity; retention in the first network comes first.'
      ],
      sources: [
        { title: 'Lenny\'s Newsletter — The Atomic Network (excerpt from Andrew Chen)', url: 'https://www.lennysnewsletter.com/p/atomic-network' },
        { title: 'a16z — The Cold Start Problem (book page)', url: 'https://a16z.com/books/the-cold-start-problem/' },
        { title: 'Lenny\'s Newsletter — The most important marketplace metrics', url: 'https://www.lennysnewsletter.com/p/the-most-important-marketplace-metrics' },
        { title: 'Meta newsroom — Introducing Marketplace (2016)', url: 'https://about.fb.com/news/2016/10/introducing-marketplace-buy-and-sell-with-your-local-community/amp/' },
        { title: 'TechCrunch — Homejoy is shutting down (2015)', url: 'https://techcrunch.com/2015/07/17/homejoy-is-shutting-down-at-the-end-of-the-month/' }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'pb-c2c-4',
      title: 'Building: trust and safety, payments, operations and team',
      level: 'Intermediate',
      minutes: 16,
      hook: `In C2C your operations team never touches the product — it manages strangers, money and disputes, and that is where the business is won or lost.`,
      eli5: `Think of a big school fair where every student runs a stall. The organisers do not cook the food, but they check who is running each stall, hold the ticket money, settle fights over change, and throw out anyone who cheats. Without them, families stop coming. A marketplace\'s build-out is mostly being a good fair organiser.`,
      blocks: [
        {
          type: 'map', title: 'The C2C operating system', center: 'Marketplace operations',
          branches: [
            { label: 'Identity and onboarding', desc: 'Phone and email checks, ID for higher-risk categories, payout and tax details for sellers above legal thresholds.', children: ['KYC', 'Seller verification'] },
            { label: 'Payments', desc: 'Pay-ins, escrow-style holds, payouts, refunds, chargebacks. Usually through a licensed payment partner.', children: ['Escrow', 'Payouts', 'Chargebacks'] },
            { label: 'Trust and safety', desc: 'Fraud detection, counterfeit checks, prohibited items, content moderation, account bans.', children: ['Fraud models', 'Moderation'] },
            { label: 'Logistics', desc: 'Prepaid labels, pick-up points, lockers, delivery tracking; or meet-up safety for local trade.', children: ['Shipping labels', 'Lockers'] },
            { label: 'Support and disputes', desc: 'Clear rules, evidence, fast decisions. Protection policies decide who pays.', children: ['Buyer protection', 'Seller protection'] },
            { label: 'Insurance', desc: 'Essential for rentals and rides: damage, liability, theft.', children: ['Host cover', 'Guest cover'] }
          ]
        },
        {
          type: 'framework', name: 'BlaBlaCar\'s D.R.E.A.M.S. trust framework', by: 'BlaBlaCar, 2010s', when: 'When strangers must trust each other enough to share a car, a home or a high-value item',
          steps: [
            { label: 'Declared', desc: 'Real names, photos, a short bio and preferences — including how chatty you are, from "Bla" to "BlaBlaBla".' },
            { label: 'Rated', desc: 'Peer reviews after every trip, building a public track record.' },
            { label: 'Engaged', desc: 'Paying online in advance commits both sides and cuts no-shows.' },
            { label: 'Activity', desc: 'Signs of recent, reliable activity: response rate, last online, trips completed.' },
            { label: 'Moderated', desc: 'The platform checks profiles, ratings and messages and removes bad actors.' },
            { label: 'Social', desc: 'Links to social profiles and shared connections add context.' }
          ]
        },
        {
          type: 'flow', title: 'Handling a dispute without losing either side',
          steps: [
            { label: 'Buyer opens a claim within the protection window', desc: 'Item not received, not as described, damaged or fake.' },
            { label: 'Platform freezes the payout', desc: 'This is why holding the money matters.' },
            { label: 'Is there clear evidence?', kind: 'decision', desc: 'Tracking, photos, chat history, seller record.', branches: [ { label: 'Yes', to: 'Decide quickly by policy' }, { label: 'No', to: 'Ask both sides; default rules decide' } ] },
            { label: 'Refund, return or release', desc: 'Apply the published protection policy consistently.' },
            { label: 'Update risk scores', desc: 'Feed outcomes into fraud and ranking models; repeat offenders lose visibility or accounts.' }
          ]
        },
        {
          type: 'case', company: 'BlaBlaCar', year: '2006–2015', title: 'Designing trust between strangers in a car',
          situation: `Long-distance carpooling asks a stranger to share hours in a small space. Early carpooling sites in Europe were largely free notice boards, and no-shows were common.`,
          decision: `BlaBlaCar built rich profiles, mandatory peer ratings and online prepayment, packaging them as the D.R.E.A.M.S. framework. In 2015 it published a trust survey of 18,289 members in 11 countries, prepared with the research firm BIPE, to show how much members trusted well-reviewed strangers.`,
          outcome: `BlaBlaCar became Europe\'s best-known carpooling network, raised a $100 million round in 2014 and expanded far beyond France. Prepayment let it charge a booking fee while also reducing no-shows.`,
          lesson: `Trust can be engineered from many small signals. Prepayment did two jobs at once: it built commitment and made monetisation possible.`
        },
        {
          type: 'case', company: 'Turo', year: '2009–2025', title: 'When a single incident hits the whole platform',
          situation: `Turo lets people rent out their own cars. It ties its commission to the protection plan a host chooses and reported about 165,000 active hosts and 3.5 million active guests in mid-2024.`,
          decision: `Turo filed for a US IPO. In early 2025, vehicles rented through Turo were used in two separate New Year\'s Day attacks in the US, putting a spotlight on how platforms verify renters.`,
          outcome: `In February 2025 Turo withdrew its planned IPO, citing market conditions, and in April it cut about 15% of staff. Commentators noted the attacks had damaged its public image.`,
          lesson: `In P2P rentals, trust and safety is not a support function; it is brand and valuation risk. Verification depth must match the harm an asset can do.`
        },
        {
          type: 'compare', title: 'Build vs buy for a young C2C platform', headers: ['Component', 'Usually buy / partner', 'Usually build'],
          rows: [
            ['Payments and payouts', 'Licensed payment partner with marketplace features', 'Your fee logic and protection rules'],
            ['Identity checks', 'KYC / ID verification vendor', 'When to ask for ID, by risk level'],
            ['Search and ranking', 'Hosted search engine at first', 'Ranking signals (quality, trust, freshness)'],
            ['Shipping', 'Carrier and locker integrations', 'Prepaid label flow inside checkout'],
            ['Fraud detection', 'Vendor rules engine', 'Marketplace-specific signals (new account + high price + off-platform chat)'],
            ['Support', 'Helpdesk software', 'Dispute policies and playbooks']
          ]
        },
        {
          type: 'pyramid', title: 'Early team shape for a C2C startup',
          levels: [
            { label: 'Founders', note: 'Product + supply', desc: 'One owns product and data; one owns supply acquisition and community.' },
            { label: 'Supply and community', desc: 'People who recruit and coach sellers or hosts — the hard side.' },
            { label: 'Trust, safety and support', desc: 'Starts as founders answering every ticket; becomes a team with policies.' },
            { label: 'Engineering and data', desc: 'Small team; buy components, build matching and trust logic.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you build the operating model',
          items: [
            { q: 'What is the worst thing that can happen in one transaction, and how likely is it?', why: 'Sets verification depth, insurance and support staffing.' },
            { q: 'Will we hold funds, and which licensed partner will do it?', why: 'Escrow-style flows are regulated in most countries.' },
            { q: 'How fast can we resolve a dispute, and who pays when evidence is unclear?', why: 'Slow or inconsistent rulings drive both sides away.' },
            { q: 'Which trust signals will we show at the moment of decision?', why: 'Signals only help if buyers see them right before paying.' },
            { q: 'What will we build ourselves versus buy?', why: 'Build only what differentiates: matching, trust logic, fee rules.' },
            { q: 'Who owns supply as a full-time job?', why: 'Without an owner, the hard side drifts.' }
          ]
        }
      ],
      terms: [
        { term: 'Trust and safety (T&S)', def: 'Policies, tools and teams that prevent fraud, abuse and harm between users.' },
        { term: 'KYC', def: '"Know your customer": verifying a user\'s identity, often required for payouts above set limits.' },
        { term: 'Chargeback', def: 'A card payment reversed by the buyer\'s bank after a complaint; the platform or seller loses the money plus a fee.' },
        { term: 'Buyer protection', def: 'A published promise to refund buyers when items do not arrive or are not as described.' },
        { term: 'Prepayment', def: 'Paying the platform before the service happens, which raises commitment and enables fees.' }
      ],
      quiz: [
        { q: 'In D.R.E.A.M.S., what does "Engaged" refer to?', options: ['Paying online in advance', 'Posting on social media', 'Answering messages quickly', 'Following other users'], answer: 0, explain: 'Prepaying commits both sides and reduces no-shows.' },
        { q: 'Why should a C2C platform freeze the payout when a buyer files a claim?', options: ['To earn interest', 'To keep leverage to refund the buyer if the claim is valid', 'To punish the seller', 'Because banks require it in all cases'], answer: 1, explain: 'Holding the money is what makes protection credible.' },
        { q: 'Disputes cost an average ₹180 each to handle, and 2% of 50,000 monthly orders are disputed. Monthly dispute-handling cost?', options: ['₹90,000', '₹1,80,000', '₹9,00,000', '₹18,000'], answer: 1, explain: '50,000 × 2% = 1,000 disputes × ₹180 = ₹1,80,000.' },
        { q: 'What does Turo\'s 2025 experience show?', options: ['Car rental has no trust issues', 'IPOs never fail', 'Hosts prefer no insurance', 'Safety incidents can become brand and valuation risk'], answer: 3, explain: 'Highly visible incidents damaged public image around an IPO attempt that was withdrawn.' },
        { q: 'Which component should a young C2C platform most likely build itself?', options: ['A card-processing licence', 'A helpdesk tool', 'Marketplace-specific trust and ranking logic', 'A shipping carrier'], answer: 2, explain: 'Matching and trust logic differentiate; commodity components can be bought.' }
      ],
      challenge: {
        title: 'Design trust for a P2P bike rental app',
        prompt: `<p>You run a P2P rental app for premium bicycles (worth ₹40,000–₹2,00,000). Rentals average ₹1,200 a day. Last month: 3,000 rentals, 60 damage claims averaging ₹6,000, and 4 thefts averaging ₹90,000. Hosts are leaving.</p><p>Calculate the monthly loss from damage and theft per rental, and design a trust package using D.R.E.A.M.S. ideas. Say how you would fund it.</p>`,
        hints: ['Total loss ÷ rentals = loss per rental. Compare with the fee you charge.', 'Different checks for a ₹40,000 bike and a ₹2,00,000 bike.'],
        model: `<p><b>Losses:</b> damage 60 × ₹6,000 = ₹3,60,000; theft 4 × ₹90,000 = ₹3,60,000. Total ₹7,20,000 ÷ 3,000 rentals = <b>₹240 per rental</b>, or 20% of the ₹1,200 rental price — more than most take rates.</p><p><b>Trust package:</b></p><ul><li><b>Declared</b>: phone, selfie and government ID for all renters; ID plus a deposit hold for bikes above ₹1,00,000.</li><li><b>Rated</b>: two-way reviews; new renters can only book lower-value bikes until they have three good reviews.</li><li><b>Engaged</b>: full prepayment plus a refundable card hold.</li><li><b>Moderated</b>: block repeat offenders across devices; GPS tags supplied to hosts of top-tier bikes.</li></ul><p><b>Funding:</b> a protection fee of 10% on rentals (₹120) paid by the renter, plus the host choosing a cover plan. If checks cut losses by half to ₹120 per rental, the protection fee covers them. <b>Recommendation:</b> launch tiered verification immediately and publish the host guarantee clearly — hosts are the hard side and are leaving.</p>`
      },
      takeaways: [
        'C2C operations are identity, payments, trust and safety, logistics, support and insurance.',
        'Many small trust signals beat one big promise; show them at the moment of decision.',
        'Holding the money makes protection credible and enables fees.',
        'Match verification depth to the harm a transaction could cause; incidents become brand risk.'
      ],
      sources: [
        { title: 'BlaBlaCar — Entering the trust age (trust survey)', url: 'https://blog.blablacar.com/trust' },
        { title: 'OuiShare — BlaBlaCar\'s recipe for creating trust', url: 'https://www.legacy.ouishare.net/magazine/blablacars-recipe-for-creating-trust' },
        { title: 'Renaissance Capital — Turo withdraws IPO', url: 'https://www.renaissancecapital.com/IPO-Center/News/109393/car-sharing-platform-turo-withdraws-estimated-300-million-ipo' },
        { title: 'Bloomberg — Turo cuts 15% of workers after icing IPO', url: 'https://www.bloomberg.com/news/articles/2025-04-16/car-rental-startup-turo-cuts-15-of-workers-after-icing-ipo' },
        { title: 'Nasdaq — With Turo withdrawal, a slim IPO pipeline gets thinner', url: 'https://www.nasdaq.com/articles/turo-withdrawal-slim-ipo-pipeline-gets-thinner' }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'pb-c2c-5',
      title: 'Revenue and pricing: take rates, buyer fees and monetisation design',
      level: 'Intermediate',
      minutes: 17,
      hook: `In a marketplace the price you set is not for a product — it is a tax on every deal, and both sides can vote with their feet.`,
      eli5: `A school fair organiser can charge stall owners a share of their sales, charge visitors an entry ticket, sell a better stall spot near the gate, or rent out tables. Charge too much and stall owners move to the park next door. The art is charging the side that gets the most value, in the way that feels fairest.`,
      blocks: [
        {
          type: 'text', title: 'Revenue models available to C2C',
          html: `<p>You met freemium, subscription and usage pricing in <a href="#/lesson/pricing-4">Pricing, lesson 4</a>. Marketplaces add a twist: you choose <b>which side pays</b>, <b>when</b> (listing, sale, or promotion) and <b>how visibly</b>. Bill Gurley\'s essay "A Rake Too Far" argues that a modest take rate builds a larger, more defensible marketplace, because high fees push suppliers away and leave a price umbrella for rivals. He notes that eBay\'s 2011 marketplace revenue was just under 10% of its gross sales.</p>`
        },
        {
          type: 'map', title: 'C2C revenue streams', center: 'Monetisation',
          branches: [
            { label: 'Seller commission', desc: 'A percentage of each sale. Simple, but sellers feel it directly and may raise prices or leave.', children: ['Etsy transaction fee', 'Poshmark 20%'] },
            { label: 'Buyer fee', desc: 'A protection or service fee added at checkout. Lets sellers list "for free", which helps supply.', children: ['Vinted buyer protection', 'Depop marketplace fee'] },
            { label: 'Listing and featuring', desc: 'Pay to post, bump or highlight. Classic classifieds revenue.', children: ['Featured ads', 'Bumps'] },
            { label: 'Promoted listings and ads', desc: 'Sellers bid for visibility. Can grow faster than commission but can annoy buyers.', children: ['Pay per click', 'Pay per sale'] },
            { label: 'Subscriptions', desc: 'Monthly plans for power sellers or premium buyers (more listings, analytics, lower fees).', children: ['Pro seller plans'] },
            { label: 'Services and payments', desc: 'Shipping labels, authentication, insurance, instant payouts, and interest on funds held where rules allow.', children: ['Shipping', 'Authentication', 'Instant payout'] }
          ]
        },
        {
          type: 'compare', title: 'How real C2C platforms charge (as reported in the sources)', headers: ['Platform', 'Who pays', 'Headline structure', 'Note'],
          rows: [
            ['Etsy', 'Seller', 'Transaction fee raised from 5% to 6.5% in April 2022, plus other fees', 'Sellers protested; Etsy said it reinvested in marketing and tools'],
            ['Vinted', 'Buyer', 'Seller fee removed in 2016; buyer protection fee (fixed amount plus a percentage) instead', 'Fee varies by country'],
            ['Depop (US)', 'Buyer', '10% seller fee removed in July 2024; buyer marketplace fee up to 5% plus up to $1', 'Payment processing still charged to sellers'],
            ['Poshmark (US)', 'Seller', '20% on sales over $15; flat $2.95 at $15 and under', 'Includes a prepaid shipping label'],
            ['Kickstarter', 'Creator', '5% of funds raised, only if the project reaches its goal', 'Payment processing extra'],
            ['Airbnb', 'Moving to host', 'Most software-connected hosts moved to a single host-only fee of about 15.5% in late 2025', 'Guests see one all-in price']
          ]
        },
        {
          type: 'formula', name: 'Same take, different feel: seller fee vs buyer fee',
          expr: 'Seller fee: buyer pays P, seller gets P × (1 − s)     Buyer fee: buyer pays P × (1 + b) + F, seller gets P',
          explain: `<i>P</i> is the listed price, <i>s</i> the seller commission, <i>b</i> the buyer percentage fee and <i>F</i> a fixed buyer fee. Economists note that who formally pays matters less in the long run, because sellers adjust prices. But in the short run a buyer fee makes listing feel free, which helps the hard side (supply).`,
          example: `Illustrative ₹1,000 jacket. <b>Seller fee 10%</b>: buyer pays ₹1,000, seller gets ₹900, platform ₹100. <b>Buyer fee 5% + ₹10</b>: buyer pays ₹1,060, seller gets ₹1,000, platform ₹60. The buyer-fee platform earns 40% less per item, so it needs more volume or extra revenue (shipping, promoted listings) — which is the bet Vinted made.`
        },
        {
          type: 'case', company: 'Etsy', year: '2022', title: 'Raising the take rate on a loyal seller base',
          situation: `Etsy had grown rapidly during the pandemic. In Q4 2021 it reported revenue of $717.1 million on $4.2 billion of gross merchandise sales — a take rate of 17.1% including all fees and services.`,
          decision: `On 24 February 2022, alongside its results, Etsy announced that its transaction fee would rise from 5% to 6.5% from 11 April 2022. It had last raised it, from 3.5% to 5%, in 2018.`,
          outcome: `Thousands of sellers closed their shops for a week from 11 April in protest; NPR reported more than 5,000 shops took part. Etsy kept the fee and said in its annual report that it had reinvested most of the extra revenue in marketing, seller tools and customer experience.`,
          lesson: `A take-rate rise sticks when sellers have nowhere equally good to go, but it spends goodwill. Tie the increase to visible benefits sellers can measure.`
        },
        {
          type: 'case', company: 'Poshmark', year: '2024', title: 'A fee redesign reversed in three weeks',
          situation: `Poshmark, owned by South Korea\'s Naver since January 2023, had long charged sellers 20% on sales over $15 and a flat $2.95 below that.`,
          decision: `In October 2024 it switched to a lower percentage fee for sellers (5.99% plus a small fixed fee) and added a buyer protection fee at checkout, moving part of the cost to buyers.`,
          outcome: `After complaints and a drop in sales, Poshmark reverted to its original structure from 24 October 2024 — about three weeks after the change — and dropped the buyer fee.`,
          lesson: `Buyer fees worked for Vinted from the start, but adding one to an established platform changes what buyers are used to paying. Test fee changes on a slice of the market first.`
        },
        {
          type: 'flow', title: 'How to change a marketplace fee safely',
          steps: [
            { label: 'State the job of the fee', desc: 'What new value will it fund — protection, shipping, marketing? If you cannot say, do not raise it.' },
            { label: 'Model both sides\' reaction', desc: 'Estimate seller price changes, listing volume, buyer conversion and leakage.' },
            { label: 'Test in one market or cohort', desc: 'One city, one category or new sellers only, with a control group.' },
            { label: 'Did GMV and net revenue both hold up?', kind: 'decision', desc: 'Watch conversion, listings, time to sell and complaints for at least a few weeks.', branches: [ { label: 'Yes', to: 'Roll out with clear communication' }, { label: 'No', to: 'Revert or redesign' } ] },
            { label: 'Communicate and deliver the promised value', desc: 'Give notice, explain the reason and report back on what the money funded.' }
          ]
        },
        {
          type: 'interactive', widget: 'decision-tree', title: 'Roll out a fee change now, or test it first?',
          note: 'Set the chance the new fee works (say 55%), the upside from higher net revenue and the downside from lost sellers. Then add a market test that costs a little and is right 80% of the time. Notice when the test is worth more than its cost — usually when the downside (a seller exodus) is large.'
        },
        {
          type: 'questions', title: 'Ask before you set or change the take rate',
          items: [
            { q: 'Which side gets the most value and is least likely to leave?', why: 'Charge the side with the most surplus and the fewest alternatives.' },
            { q: 'What would a rival with half our fee look like to our sellers?', why: 'High fees create the price umbrella an attacker uses.' },
            { q: 'Does the fee pay for something users can see?', why: 'Protection, shipping or visibility make a fee feel fair.' },
            { q: 'Will a higher fee push trades off the platform?', why: 'Leakage rises with the fee, especially for repeat relationships.' },
            { q: 'Can we earn from services and ads instead of a higher commission?', why: 'Diversified revenue keeps the core fee low and competitive.' },
            { q: 'How will we test the change before rolling it out everywhere?', why: 'Poshmark\'s quick reversal shows the cost of skipping a test.' }
          ]
        }
      ],
      terms: [
        { term: 'Rake', def: 'Another word for take rate: the slice of each transaction a platform keeps.' },
        { term: 'Buyer protection fee', def: 'A fee charged to buyers at checkout that funds refunds, dispute handling and payment security.' },
        { term: 'Promoted listings', def: 'Paid placement where sellers pay for more visibility in search or feeds.' },
        { term: 'Price umbrella', def: 'A high price or fee that lets a competitor undercut you while still earning a profit.' },
        { term: 'Effective take rate', def: 'All platform revenue (fees, ads, services) divided by GMV.' },
        { term: 'Fee incidence', def: 'Who really bears a fee after prices adjust, which can differ from who formally pays it.' }
      ],
      quiz: [
        { q: 'A platform has $4.2 billion GMS and $717.1 million revenue in a quarter. What is its effective take rate?', options: ['5%', '6.5%', '17.1%', '58.6%'], answer: 2, explain: '717.1 ÷ 4,200 ≈ 17.1% — the figure Etsy reported for Q4 2021.' },
        { q: 'On a ₹2,000 item, a buyer fee of 5% plus ₹10 earns the platform…', options: ['₹100', '₹110', '₹200', '₹10'], answer: 1, explain: '5% × ₹2,000 = ₹100, plus ₹10 = ₹110.' },
        { q: 'Why did Vinted\'s 2016 switch to a buyer fee help growth?', options: ['Selling became free, which helped attract supply — the hard side', 'It raised revenue per item', 'It removed the need for protection', 'Buyers prefer paying more'], answer: 0, explain: 'Free listing and selling lowers the barrier for amateur sellers.' },
        { q: 'According to Gurley\'s "A Rake Too Far", the main risk of a high take rate is…', options: ['Lower GMV per buyer', 'Suppliers leaving and a price umbrella for rivals', 'Higher tax', 'Slower app speed'], answer: 1, explain: 'High rakes add friction and invite lower-fee competitors.' },
        { q: 'What is the safest first step before changing a marketplace fee everywhere?', options: ['Announce it on social media', 'Raise it only for top sellers', 'Remove buyer protection', 'Test it in one market or cohort with a control group'], answer: 3, explain: 'A controlled test reveals reactions on both sides before a full rollout.' }
      ],
      challenge: {
        title: 'Seller fee or buyer fee for a sneaker resale app?',
        prompt: `<p>Your sneaker resale app does 20,000 sales a month at an average ₹6,000. Today you charge sellers 12%. A rival launched with zero seller fees and a buyer fee of 6% + ₹49. Your data: if you match the rival model, listings rise 30% and, with the same sell-through, sales rise 30%; buyer conversion falls 5% (so sales are 30% higher × 0.95).</p><p>Compare monthly net revenue under (A) keep 12% seller fee, (B) switch to 6% + ₹49 buyer fee. Recommend.</p>`,
        hints: ['A: GMV × 12%.', 'B: new sales = 20,000 × 1.3 × 0.95; revenue per sale = 6% × ₹6,000 + ₹49.'],
        model: `<p><b>A:</b> GMV = 20,000 × ₹6,000 = ₹12 crore. Revenue at 12% = <b>₹1.44 crore</b>.</p><p><b>B:</b> Sales = 20,000 × 1.3 × 0.95 = 24,700. Revenue per sale = ₹360 + ₹49 = ₹409. Revenue = 24,700 × ₹409 = <b>≈ ₹1.01 crore</b>. GMV rises to ₹14.82 crore.</p><p><b>Reading:</b> B loses about ₹43 lakh a month (30%) now but grows supply and GMV. It only wins if extra listings keep compounding (more choice → more buyers) or if you add revenue such as authentication at ₹199 per pair: 24,700 × ₹199 ≈ ₹49 lakh, which would close the gap.</p><p><b>Recommendation:</b> do not switch everywhere. Test B in one city for six weeks with an authentication add-on. If supply growth exceeds 30% and authentication uptake is high, roll out; otherwise keep the seller fee and compete on trust (authentication) rather than price.</p>`
      },
      takeaways: [
        'Choose who pays, when and how visibly; a buyer fee can make selling feel free and help supply.',
        'Modest take rates build bigger, harder-to-attack marketplaces; high ones invite rivals and leakage.',
        'Tie any fee to value users can see, such as protection, shipping or visibility.',
        'Test fee changes in one market first — Etsy kept its rise, Poshmark reversed within weeks.'
      ],
      sources: [
        { title: 'NPR — Etsy sellers launch a week-long strike over increased fees (2022)', url: 'https://www.npr.org/2022/04/11/1091123928/etsy-strike-2022' },
        { title: 'Etsy Inc. Form 10-K for FY2021 (SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1370637/000137063722000024/etsy-20211231.htm' },
        { title: 'Depop newsroom — Depop removes selling fees in the US (2024)', url: 'https://news.depop.com/company-news/depop-removes-selling-fees-in-the-united-states-evolves-fee-structure/' },
        { title: 'Modern Retail — Poshmark reverses new fee structure after seller backlash', url: 'https://www.modernretail.co/operations/poshmark-reverses-new-fee-structure-after-seller-backlash/' },
        { title: 'Bill Gurley — A Rake Too Far', url: 'https://abovethecrowd.com/2013/04/18/a-rake-too-far-optimal-platformpricing-strategy/' },
        { title: 'Rentals United — Airbnb\'s host-only service fee for property managers', url: 'https://rentalsunited.com/blog/airbnbs-host-service-fee-property-managers/' }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'pb-c2c-6',
      title: 'Expenses and unit economics: from GMV to contribution and cash',
      level: 'Advanced',
      minutes: 17,
      hook: `A marketplace can show billions in GMV and still lose money on every order — the truth lives in the few rupees left after payments, subsidies and refunds.`,
      eli5: `If your piggy bank sees ₹1,000 pass through it but you only keep ₹100, and you spend ₹30 on the bank fee, ₹25 on a sweet to make your friend come back, and ₹20 fixing a broken toy, you really kept ₹25. Marketplace unit economics is counting what you really keep from each deal — and how long it takes to earn back what you spent to get the customer.`,
      blocks: [
        {
          type: 'pyramid', invert: true, title: 'The marketplace waterfall: GMV to contribution',
          levels: [
            { label: 'GMV', note: '100%', desc: 'Everything buyers paid for goods or services.' },
            { label: 'Net revenue', note: 'GMV × take rate', desc: 'Your fees, ads and services. Report net of refunds and incentives that reduce revenue.' },
            { label: 'Minus payment costs', desc: 'Card, UPI or wallet processing — usually charged on GMV, not on your revenue.' },
            { label: 'Minus incentives', desc: 'Coupons, free shipping, referral credits, seller bonuses.' },
            { label: 'Minus trust, safety and support', desc: 'Disputes, moderation, fraud losses, chargebacks, verification checks.' },
            { label: 'Contribution', note: 'What pays for fixed costs', desc: 'Left to pay for engineering, marketing teams, rent and profit.' }
          ]
        },
        {
          type: 'formula', name: 'Contribution per order and CAC payback',
          expr: 'Contribution per order = AOV × take rate − AOV × payment % − incentives − T&S/support − losses     Payback (months) = CAC ÷ (monthly contribution per customer)',
          explain: `AOV is the average order value (GMV per order). Payment costs hit the whole GMV, so a 2% payment fee on a 10% take rate eats a fifth of revenue. Count CAC for the side you are paying to acquire; if you pay for both sides, combine them. Basic LTV and payback were covered in <a href="#/lesson/business-model-4">Business model, lesson 4</a>.`,
          example: `Illustrative: AOV ₹1,000; take rate 12% → ₹120. Payments 2% → ₹20. Incentives ₹25. T&S and support ₹15. Fraud and refund losses ₹5. <b>Contribution = ₹55 per order</b> (5.5% of GMV). A buyer orders 4 times a year → ₹220 a year, ₹18.3 a month. Buyer CAC ₹300 → payback = 300 ÷ 18.3 ≈ <b>16.4 months</b>.`
        },
        {
          type: 'interactive', widget: 'marketplace', title: 'Build your marketplace waterfall',
          note: 'Start with the defaults, then: (1) drop sell-through to 10% and watch GMV collapse; (2) raise leakage to 40% at a 15% take rate; (3) push incentives above what the take rate earns per transaction and see contribution go negative. Liquidity and leakage move contribution more than the fee itself.'
        },
        {
          type: 'compare', title: 'C2C cost structure', headers: ['Cost', 'Fixed or variable', 'Typical driver', 'How to control it'],
          rows: [
            ['Payment processing', 'Variable', '% of GMV plus fixed per transaction', 'Push lower-cost methods (UPI, bank transfer); bundle small orders'],
            ['Incentives and coupons', 'Variable', 'Per new user or order', 'Target the hard side and new networks only; cap per user'],
            ['Trust, safety, support', 'Semi-variable', 'Disputes per 1,000 orders', 'Prevention (verification, clear listings) beats resolution'],
            ['Shipping subsidies', 'Variable', 'Per shipment', 'Prepaid labels charged to the buyer; locker drop-offs'],
            ['Performance marketing', 'Variable to step', 'CAC per side', 'Lean on loops and organic search of listings'],
            ['Engineering and product', 'Fixed', 'Team size', 'Buy commodity components; build matching and trust'],
            ['Tax and compliance', 'Fixed plus variable', 'Seller reporting, tax collection at source', 'Automate seller tax data from onboarding']
          ]
        },
        {
          type: 'map', title: 'Common cost traps in C2C', center: 'Cost traps',
          branches: [
            { label: 'Subsidising both sides forever', desc: 'Coupons for buyers and bonuses for sellers that never taper off.', children: ['Coupon addiction'] },
            { label: 'Free shipping on cheap items', desc: 'A ₹60 label on a ₹250 item can exceed the whole take.', children: ['Minimum order value'] },
            { label: 'Paying for leaked GMV', desc: 'You pay to acquire both sides, then they trade directly.', children: ['Repeat services'] },
            { label: 'Fraud and chargebacks', desc: 'New accounts selling high-value items are a classic loss source.', children: ['Velocity limits'] },
            { label: 'Inventory creep', desc: 'Buying stock to fix supply turns a marketplace into a retailer with retail risk.', children: ['C2B2C'] },
            { label: 'Vanity GMV', desc: 'Counting GMV that is refunded, cancelled or bought with your own coupons.', children: ['Happy GMV'] }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Cash: marketplaces can run on negative working capital',
          html: `<p>Buyers pay at checkout; sellers are often paid only after delivery or a protection window. That gap is a <b>float</b>: illustrative ₹10 crore monthly GMV held for an average of 5 days ≈ ₹10 crore × 5 ÷ 30 ≈ <b>₹1.7 crore</b> of other people\'s money in transit. It improves cash flow, but rules on holding customer funds (for example, India\'s payment aggregator rules, which require escrow-type accounts) limit what you can do with it. See <a href="#/lesson/finance-4">Finance, lesson 4</a> for the cash conversion cycle.</p>`
        },
        {
          type: 'case', company: 'Vinted', year: '2023–2024', title: 'Scale turning a thin fee into profit',
          situation: `Vinted earns mainly from buyer protection fees, shipping and promoted listings, with no seller fee. For years that thin model made profits elusive.`,
          decision: `It kept expanding across European countries and categories, added its own shipping network (Vinted Go) and services such as item verification, rather than adding a seller fee.`,
          outcome: `For 2024 the Vinted Group reported revenue of €813.4 million, up 36%, adjusted EBITDA of €158.9 million and net profit of €76.7 million, up from €17.8 million in 2023, operating in 22 countries.`,
          lesson: `A low take rate can be profitable once liquidity and volume are large and services add revenue per order. Unit economics improve with density.`
        },
        {
          type: 'case', company: 'Cars24', year: 'FY2024–FY2026', title: 'C2B2C: when the platform holds the inventory',
          situation: `Cars24 buys used cars from consumers and resells them to dealers through auctions and to consumers through retail — a C2B2C model that solves trust and price discovery for sellers, but puts cars on its balance sheet.`,
          decision: `It cut marketing spend by about a quarter in FY25 and moved towards recognising only the commission or fee on more transactions rather than the full sale value of vehicles.`,
          outcome: `Filings showed FY25 revenue of ₹6,233 crore (down 10%) and a net loss of ₹543 crore for the India entity. In FY26 revenue fell to about ₹5,092 crore while the loss narrowed to about ₹441 crore, according to Inc42.`,
          lesson: `Owning inventory buys trust and speed but adds capital, pricing and holding risk. Judge such businesses on contribution and losses, not on headline revenue, which accounting choices can swing.`
        },
        {
          type: 'questions', title: 'Ask before you trust your unit economics',
          items: [
            { q: 'Is contribution per order positive without coupons?', why: 'If not, growth only scales losses.' },
            { q: 'What share of GMV is cancelled, refunded or bought with our own incentives?', why: 'Vanity GMV inflates the take-rate base.' },
            { q: 'What is CAC payback for each side, and for each city cohort?', why: 'Older networks should pay back faster; if they do not, density is not working.' },
            { q: 'How much of our payment cost could move to cheaper methods?', why: 'Payment cost is charged on GMV, so small changes matter.' },
            { q: 'Are we holding inventory, and who carries the price risk?', why: 'Inventory changes the model from marketplace to retailer.' },
            { q: 'How long do we hold buyer funds, and what are the rules on that money?', why: 'Float helps cash, but regulation limits its use.' }
          ]
        }
      ],
      terms: [
        { term: 'Contribution per order', def: 'Net revenue from an order minus the variable costs it causes (payments, incentives, support, losses).' },
        { term: 'CAC payback', def: 'Months of contribution needed to earn back the cost of acquiring a customer.' },
        { term: 'Payments float', def: 'Buyer money held by the platform between checkout and seller payout.' },
        { term: 'C2B2C', def: 'A model where the platform buys from consumers and resells to consumers or dealers, taking inventory risk.' },
        { term: 'Happy GMV', def: 'Sarah Tavel\'s idea of counting only transactions that leave both sides satisfied, rather than all GMV.' },
        { term: 'Chargeback', def: 'A payment reversed by the card issuer; the platform often loses the amount plus a fee.' }
      ],
      quiz: [
        { q: 'AOV ₹800, take rate 15%, payments 2% of GMV, incentives ₹30, support ₹20. Contribution per order?', options: ['₹54', '₹70', '₹104', '₹120'], answer: 0, explain: '₹120 − ₹16 − ₹30 − ₹20 = ₹54.' },
        { q: 'A buyer brings ₹40 contribution a month. CAC is ₹600. Payback?', options: ['6 months', '10 months', '15 months', '24 months'], answer: 2, explain: '600 ÷ 40 = 15 months.' },
        { q: 'Why does a 2% payment cost hurt a marketplace more than it first appears?', options: ['It is charged on revenue', 'It is charged on GMV, so it eats a large slice of a 10% take', 'It is a fixed annual fee', 'It only applies to refunds'], answer: 1, explain: '2% of GMV is one-fifth of a 10% take rate.' },
        { q: 'What helped Vinted become profitable without a seller fee?', options: ['Raising seller fees in 2024', 'Volume across 22 countries plus services like shipping and verification', 'Selling its own inventory', 'Stopping expansion'], answer: 1, explain: 'Density, scale and added services raised revenue per order on a thin fee.' },
        { q: 'GMV ₹30 crore a month; average seller payout delay 6 days. Approximate float?', options: ['₹1 crore', '₹3 crore', '₹6 crore', '₹18 crore'], answer: 2, explain: '₹30 crore × 6 ÷ 30 days ≈ ₹6 crore of buyer money held at any time.' }
      ],
      challenge: {
        title: 'Is our resale app ready to scale?',
        prompt: `<p>Your fashion resale app in two cities: 60,000 orders a month; AOV ₹700; take rate 14% (buyer fee); payments 1.8% of GMV; shipping subsidy ₹35 per order; coupons ₹40 per order; support and fraud ₹18 per order. A new buyer costs ₹250 to acquire and orders 0.5 times a month.</p><p>Calculate contribution per order and per month, buyer CAC payback, and propose two changes that make payback under 12 months.</p>`,
        hints: ['Revenue per order = ₹700 × 14%.', 'Monthly contribution per buyer = contribution per order × 0.5.'],
        model: `<p><b>Per order:</b> revenue ₹98; payments ₹12.6; shipping ₹35; coupons ₹40; support and fraud ₹18. Contribution = 98 − 12.6 − 35 − 40 − 18 = <b>−₹7.6</b>. Monthly: 60,000 × −₹7.6 = <b>−₹4.56 lakh</b>.</p><p><b>Payback:</b> undefined — each order loses money, so the ₹250 CAC is never recovered.</p><p><b>Fix 1 — coupons:</b> limit coupons to first orders only. If that cuts average coupon cost to ₹10, contribution becomes ₹22.4.</p><p><b>Fix 2 — shipping:</b> charge buyers the label at cost for orders under ₹1,000 (cut subsidy to ₹10): contribution = ₹47.4 per order.</p><p><b>New payback:</b> ₹47.4 × 0.5 = ₹23.7 a month → 250 ÷ 23.7 ≈ <b>10.5 months</b>. <b>Recommendation:</b> do not open a third city until both fixes hold for two months and contribution stays positive without coupons.</p>`
      },
      takeaways: [
        'Read the waterfall: GMV → net revenue → minus payments, incentives, trust and support → contribution.',
        'Payment costs hit GMV, and subsidies hit every order — both can wipe out a modest take rate.',
        'Measure CAC payback by side and by city cohort; denser networks should pay back faster.',
        'Holding inventory (C2B2C) buys trust but adds capital and price risk; judge it on contribution, not revenue.'
      ],
      sources: [
        { title: 'Retail Gazette — Vinted profit triples in 2024', url: 'https://www.retailgazette.co.uk/blog/2025/04/vinted-triples/' },
        { title: 'Entrackr — Cars24 reports 10% revenue decline in FY25', url: 'https://entrackr.com/fintrackr/cars24-reports-10-revenue-decline-in-fy25-losses-rise-marginally-11160853' },
        { title: 'Inc42 — Cars24 trims FY26 net loss by 19%', url: 'https://inc42.com/buzz/cars24-trims-fy26-net-loss-by-19-yoy-to-%E2%82%B9441-cr-revenue-slides-18/' },
        { title: 'a16z — 13 Metrics for Marketplace Companies (unit economics by market)', url: 'https://a16z.com/13-metrics-for-marketplace-companies/' },
        { title: 'Lenny\'s Newsletter — The most important marketplace metrics (happy GMV)', url: 'https://www.lennysnewsletter.com/p/the-most-important-marketplace-metrics' }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'pb-c2c-7',
      title: 'Branding and creativity: community, identity and creative growth',
      level: 'Intermediate',
      minutes: 15,
      hook: `In C2C your users are the brand — every listing photo, every message and every review is your advertising, for better or worse.`,
      eli5: `A neighbourhood swap meet becomes famous not for its tables but for its people: the friendly regulars, the funny signs, the rule that everyone haggles politely. A C2C brand is the feeling of the community, plus a few simple rules that keep it that way.`,
      blocks: [
        {
          type: 'text', title: 'Positioning a C2C brand',
          html: `<p>C2C brands are built on three promises: <b>what you can find</b> (selection with a point of view), <b>how it feels to trade</b> (safe, fair, fun), and <b>who else is here</b> (identity of the community). The positioning method from <a href="#/lesson/marketing-6">Marketing, lesson 6</a> still applies, but the proof points are behavioural: protection policies, fees and community norms. A clear fee promise such as "selling is free" can be the positioning itself.</p>`
        },
        {
          type: 'map', title: 'Brand levers unique to C2C', center: 'C2C brand',
          branches: [
            { label: 'Community identity', desc: 'Who trades here: Gen Z stylists, parents, collectors, travellers.', children: ['Shared taste', 'Norms'] },
            { label: 'Fairness promise', desc: 'Simple fees and protection that users can repeat to friends.', children: ['Free to sell', 'Money-back'] },
            { label: 'Tone and naming', desc: 'Language users adopt — BlaBlaCar named itself after its chattiness scale.', children: ['Playful labels'] },
            { label: 'User content', desc: 'Listings, photos, videos and reviews are your content engine.', children: ['Shareable listings'] },
            { label: 'Rituals and events', desc: 'Drops, live selling, seasonal clear-outs that bring people back together.', children: ['Live shopping', 'Themed weeks'] },
            { label: 'Purpose', desc: 'Re-use, saving money, meeting people — but only if it is true in the product.', children: ['Circularity', 'Affordability'] }
          ]
        },
        {
          type: 'cycle', title: 'The community content loop', center: 'User-made brand',
          steps: [
            { label: 'Sellers create great listings', desc: 'Help them with photo tips, templates and good defaults.' },
            { label: 'Listings get shared', desc: 'Share buttons to chats, stories and social platforms.' },
            { label: 'New users see real people', desc: 'Authentic listings beat ads for trust.' },
            { label: 'New users buy, then sell', desc: 'Prompt them to list what they no longer use.' },
            { label: 'Platform features the best', desc: 'Curated picks and seller spotlights raise the bar for everyone.' }
          ]
        },
        {
          type: 'case', company: 'Depop', year: '2011–2026', title: 'A youth brand built from its sellers',
          situation: `Depop grew as a social, image-led app for second-hand and vintage fashion, where sellers styled and photographed their own items and buyers followed shops they liked.`,
          decision: `It leaned into a young, creative community rather than broad mass-market reach, and in 2024 removed seller fees in the UK and then the US (where it had charged 10%), moving to a buyer marketplace fee.`,
          outcome: `By the end of 2025 Depop reported about 7 million active buyers and more than 3 million active sellers, nearly 90% of them under 34. In February 2026 eBay agreed to buy it from Etsy for about $1.2 billion, explicitly to reach that younger community.`,
          lesson: `A distinct community identity is a strategic asset that larger platforms will pay for. Brand in C2C is who is there and how they behave.`
        },
        {
          type: 'case', company: 'Kickstarter', year: '2009–today', title: 'A rule that became the brand',
          situation: `Kickstarter connects individual creators with individual backers who fund projects before they exist. Backers risk paying for something that never ships.`,
          decision: `It made funding <b>all-or-nothing</b>: backers are charged only if the project reaches its goal, and Kickstarter takes 5% of the funds raised only on successful projects (payment processing is extra).`,
          outcome: `The rule reduced backers\' risk, created urgency and turned each campaign into a public story with a countdown — which creators promote themselves, bringing new backers to the platform.`,
          lesson: `A creative constraint in the rules can be the strongest brand promise. It aligns the platform\'s fee with users\' success.`
        },
        {
          type: 'framework', name: 'Three creativity methods for C2C founders', when: 'When you need a growth idea, a brand hook or a new fee design',
          steps: [
            { label: 'Steal from another industry', desc: 'Borrow a proven mechanic: auctions from art, drops from sneakers, live shopping from TV, "all-or-nothing" from group buying. Ask: which mechanic would remove our users\' biggest fear?' },
            { label: 'Reverse an assumption', desc: 'List what every rival does ("sellers pay", "ship by courier", "anyone can join") and flip one: buyers pay, lockers instead of doorsteps, invite-only. Vinted\'s buyer fee came from flipping who pays.' },
            { label: 'Constraint-based ideation', desc: 'Force a limit: "zero marketing budget", "only one city", "no photos allowed". Constraints push you towards loops and community ideas instead of paid ads.' },
            { label: 'Test cheaply', desc: 'Run the idea with one community for two weeks and measure listings, shares and repeat use before building it fully.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your second-hand furniture app is losing to a larger general classifieds site. Budget is tiny. Which creative move fits a C2C brand best?`,
          options: [
            { text: 'Run a TV ad saying you are cheaper.', feedback: 'Expensive, easy to copy and does not use your community.', good: false },
            { text: 'Launch "Room Rescue" weekends: sellers in one neighbourhood list together, the app arranges one shared van, and buyers get a themed collection page to share.', feedback: 'Good: it borrows the "drop" mechanic, solves the hard problem (moving bulky items), creates shareable content and builds density in one place.', good: true },
            { text: 'Copy the rival\'s design and lower your fee to zero.', feedback: 'Copying gives users no reason to switch; zero fees without a funding plan just cuts revenue.', good: false }
          ]
        },
        {
          type: 'questions', title: 'Ask before you invest in brand and community',
          items: [
            { q: 'Who is the community, in one sentence a member would agree with?', why: 'A vague identity attracts nobody in particular.' },
            { q: 'Which fee or protection promise can users repeat to a friend?', why: 'Simple fairness promises spread by word of mouth.' },
            { q: 'What behaviour do we reward and what do we remove?', why: 'Norms are the brand; moderation enforces them.' },
            { q: 'How do listings leave the platform and bring people back?', why: 'Shareable listings are free distribution.' },
            { q: 'Is our purpose message true in the product?', why: 'Claims about sustainability or fairness are checked by users and regulators.' },
            { q: 'Which mechanic from another industry would remove our users\' biggest fear?', why: 'Borrowed mechanics are often the fastest creative wins.' }
          ]
        }
      ],
      terms: [
        { term: 'Community identity', def: 'The shared taste, values and norms of the people trading on a platform.' },
        { term: 'All-or-nothing funding', def: 'Backers are charged only if a project reaches its goal; otherwise nobody pays.' },
        { term: 'User-generated content', def: 'Listings, photos, videos and reviews created by users, which act as the platform\'s marketing.' },
        { term: 'Reverse assumption', def: 'A creativity method that flips a standard industry practice to find a new design.' },
        { term: 'Drop', def: 'A time-limited release of items that creates urgency and repeat visits.' }
      ],
      quiz: [
        { q: 'What share of Depop\'s active users were under 34 when eBay agreed to buy it?', options: ['About 50%', 'About 25%', 'About 70%', 'Nearly 90%'], answer: 3, explain: 'Depop said nearly 90% of active buyers were under 34.' },
        { q: 'Kickstarter takes its 5% fee…', options: ['On every pledge, even if the goal is missed', 'Only when a project reaches its goal', 'Only from backers', 'Monthly from creators'], answer: 1, explain: 'All-or-nothing: no successful funding, no fee.' },
        { q: 'Which is an example of "reverse an assumption"?', options: ['Charging buyers instead of sellers', 'Adding more ads', 'Copying a rival\'s app', 'Hiring a celebrity'], answer: 0, explain: 'Flipping who pays — as Vinted did — reverses a standard assumption.' },
        { q: 'A campaign with 2,000 backers pledging ₹1,500 each succeeds. With a 5% platform fee and 3% processing, what does the creator receive?', options: ['₹30 lakh', '₹27.6 lakh', '₹28.5 lakh', '₹24 lakh'], answer: 1, explain: '₹30 lakh raised; 8% fees = ₹2.4 lakh; creator gets ₹27.6 lakh.' },
        { q: 'Why are shareable listings a brand asset in C2C?', options: ['They reduce payment costs', 'They replace moderation', 'Real listings shown outside the platform build trust and bring new users for free', 'They raise the take rate'], answer: 2, explain: 'Authentic listings act as free, trusted distribution.' }
      ],
      challenge: {
        title: 'Create a brand hook for a P2P tool-lending app',
        prompt: `<p>You run a P2P app where neighbours lend drills, ladders and pressure washers for a small fee. You have 3,000 users in one city, a ₹1 lakh brand budget and low awareness. Rival: a general classifieds site.</p><p>Use one creativity method to design a brand hook and a 6-week campaign. Estimate its cost and the listings it must produce to be worth it, assuming each new listing earns ₹60 contribution a month.</p>`,
        hints: ['Try "steal from another industry": libraries, gyms or seed exchanges.', 'Break-even listings = budget ÷ contribution per listing over a sensible period.'],
        model: `<p><b>Method — steal from libraries:</b> position the app as "<b>The Street Library of Tools</b>". Each neighbourhood gets a "librarian" (a top lender) and a library card in the app showing how many tools the street shares.</p><p><b>Campaign (6 weeks):</b> (1) printed library cards and stickers for lenders\' doors (₹30,000); (2) "Borrow-a-thon" Saturdays in three housing societies with demos (₹45,000); (3) a referral credit of ₹50 for each new lender, capped at 500 (₹25,000). Total <b>₹1,00,000</b>.</p><p><b>Worth it?</b> If each new listing earns ₹60 a month and you judge it over 12 months (₹720), break-even = ₹1,00,000 ÷ ₹720 ≈ <b>139 new active listings</b>. Target 300.</p><p><b>Recommendation:</b> run it in one district first; track listings per street and repeat borrowing; expand only if at least 139 listings stay active after two months.</p>`
      },
      takeaways: [
        'In C2C, the brand is the community and its norms; every listing is advertising.',
        'Simple fairness promises (free to sell, money-back) are positioning users repeat.',
        'Rules can be brand: all-or-nothing funding and chattiness labels became identities.',
        'Use repeatable creativity methods — steal, reverse, constrain — and test cheaply in one community.'
      ],
      sources: [
        { title: 'Depop newsroom — eBay to acquire Depop from Etsy (2026)', url: 'https://news.depop.com/ebay-to-acquire-depop-from-etsy/' },
        { title: 'Depop newsroom — Depop removes selling fees in the US', url: 'https://news.depop.com/company-news/depop-removes-selling-fees-in-the-united-states-evolves-fee-structure/' },
        { title: 'Kickstarter Help Centre — setting your funding goal', url: 'https://help.kickstarter.com/en-us/articles/16236709-how-to-set-the-right-funding-goal-for-your-kickstarter-campaign' },
        { title: 'NEXT Conference — BlaBlaCar: designing for trust between strangers', url: 'https://nextconf.eu/2013/09/blablacar-designing-for-trust-between-strangers/' }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'pb-c2c-8',
      title: 'Scaling: city by city, regulation, consolidation and failure patterns',
      level: 'Advanced',
      minutes: 17,
      hook: `Marketplace network effects are usually local — winning Delhi does not win Pune — so scaling C2C is the art of copying a working network without copying its mistakes.`,
      eli5: `If your school swap club works brilliantly, you cannot just put up a poster in another school and expect the same. You need a few keen kids there, the same simple rules, and someone to look after it. Then you do it again, and again — and at some point a bigger club may offer to join forces with you.`,
      blocks: [
        {
          type: 'compare', title: 'City-by-city vs global from day one', headers: ['', 'Local network (city by city)', 'Global network (ship anywhere)'],
          rows: [
            ['Network effect', 'Local: buyers need nearby supply (rides, rooms, furniture)', 'Cross-border: supply anywhere helps (collectibles, crafts)'],
            ['Launch unit', 'A city or neighbourhood', 'A category or community'],
            ['Expansion cost', 'Repeat supply seeding in every city', 'Shipping, payments, languages, tax'],
            ['Competition', 'Local champions can win city by city', 'Winner-take-most within a niche'],
            ['Examples', 'Facebook Marketplace (local), BlaBlaCar (routes), Airbnb (destinations)', 'eBay, Etsy, Vinted across EU countries']
          ]
        },
        {
          type: 'flow', title: 'Should we open the next city or country?',
          steps: [
            { label: 'Check the current network', desc: 'Match rate, time to match, repeat rate and contribution meet targets for several months.' },
            { label: 'Is the playbook written down?', kind: 'decision', desc: 'Supply seeding, launch events, pricing and support scripts that a new team can follow.', branches: [ { label: 'Yes', to: 'Score candidate cities' }, { label: 'No', to: 'Document it first' } ] },
            { label: 'Score candidates', desc: 'Existing trade, density, payment habits, regulation, local rivals, logistics.' },
            { label: 'Launch with a small team and a budget cap', desc: 'Seed supply first; open demand marketing only when listings reach target depth.' },
            { label: 'Review at 90 days', desc: 'Compare the new city\'s cohort curve with the first city at the same age.' }
          ]
        },
        {
          type: 'map', title: 'Scaling levers', center: 'Scaling a C2C platform',
          branches: [
            { label: 'Geography', desc: 'New cities or countries; cross-border listings between existing ones.', children: ['Local launch teams'] },
            { label: 'Category', desc: 'Adjacent categories using the same users (fashion → kids → home).', children: ['Adjacency'] },
            { label: 'Services', desc: 'Shipping networks, authentication, payments, insurance.', children: ['Vinted Go', 'Item verification'] },
            { label: 'Multi-tenanting defence', desc: 'Users also list on rivals; win with better tools, lower fees or exclusive benefits.', children: ['Cross-listing tools'] },
            { label: 'M&A', desc: 'Buy a rival or a niche community; or sell to a larger platform.', children: ['eBay–Depop', 'CarTrade–OLX India'] },
            { label: 'Funding', desc: 'Venture equity for network land-grabs; debt only once contribution is reliable.', children: ['Equity', 'Venture debt'] }
          ]
        },
        {
          type: 'compare', title: 'Regulation a C2C platform meets as it scales', headers: ['Jurisdiction', 'Rule', 'What it means for a platform'],
          rows: [
            ['India', 'Consumer Protection (E-Commerce) Rules, 2020', 'Marketplaces must publish details of themselves and sellers, appoint a grievance officer who acknowledges complaints within 48 hours and resolves them within a month, and have a resident nodal officer.'],
            ['India', 'Income-tax Section 194-O and GST collection at source', 'Platforms deduct TDS on payments to sellers (rate cut from 1% to 0.1% from 1 October 2024) and may have to collect GST at source.'],
            ['United States', 'INFORM Consumers Act (from June 2023)', 'Verify "high-volume" third-party sellers (200+ sales and $5,000+ in 12 months) and disclose details of larger sellers to buyers.'],
            ['European Union', 'DAC7 tax reporting', 'Report sellers\' income to tax authorities, with an exemption for goods sellers under 30 sales and €2,000 a year on that platform.'],
            ['Everywhere', 'Payments licensing', 'Holding buyer funds usually requires a licensed partner or a licence of your own.']
          ]
        },
        {
          type: 'case', company: 'OLX India', year: '2023', title: 'A horizontal giant sells the business',
          situation: `OLX, owned by Prosus, was one of India\'s largest classifieds platforms and had "out-executed" Quikr, by its own account. It had also built OLX Autos, a capital-heavy business buying and selling used cars.`,
          decision: `In 2023 OLX decided to exit its auto transactions business in India and sold OLX India — its classifieds and auto business, held in Sobek Auto India — to CarTrade Tech.`,
          outcome: `CarTrade completed the acquisition in August 2023 for ₹535.54 crore, adding OLX\'s large audience to its CarWale and BikeWale portfolio. CarTrade later closed the inherited C2B car-buying operation.`,
          lesson: `Audience is not profit. A horizontal classifieds site may be worth more as a lead-generation engine for a focused vertical owner than as a stand-alone business with heavy inventory bets.`
        },
        {
          type: 'case', company: 'eBay and Depop', year: '2021–2026', title: 'Consolidation: buying a younger network',
          situation: `Etsy had bought Depop in 2021 for about $1.6 billion to add a Gen Z resale community. eBay\'s core C2C marketplace skewed older.`,
          decision: `In February 2026 eBay agreed to buy Depop from Etsy for about $1.2 billion in cash, keeping Depop\'s brand and app separate. Etsy said the sale let it focus on its core marketplace.`,
          outcome: `The price was about 26% below what Etsy paid, implying a loss of roughly $420 million for Etsy. Depop brought about $1 billion of 2025 gross sales and 7 million active buyers; the deal closed in July 2026 after regulatory approvals in the US, UK, Germany and Australia.`,
          lesson: `Communities are hard to build and easy to dilute. Larger platforms often buy a distinct network and keep it separate rather than merging it into the main brand.`
        },
        {
          type: 'pyramid', title: 'Failure patterns, from most to least common (and the antidote)',
          levels: [
            { label: 'Expanding before the first network works', note: 'Antidote: density targets', desc: 'New cities copy weak metrics and burn cash.' },
            { label: 'Subsidies that never end', note: 'Antidote: taper plans', desc: 'Users stay only for coupons; contribution never turns positive.' },
            { label: 'Leakage in repeat relationships', note: 'Antidote: value on-platform', desc: 'Scheduling, protection, payments and insurance users lose if they leave.' },
            { label: 'Trust breakdown', note: 'Antidote: verification by risk', desc: 'Fraud, counterfeit or safety incidents drive users and regulators away.' },
            { label: 'Inventory creep', note: 'Antidote: stay asset-light where possible', desc: 'Buying stock to fix liquidity turns a marketplace into a retailer.' }
          ]
        },
        {
          type: 'timeline', title: 'Stages of a scaling C2C company',
          items: [
            { label: 'Stage 1', desc: 'One atomic network; founders do supply, support and fraud checks by hand.' },
            { label: 'Stage 2', desc: 'Three to five cities or categories from a written playbook; first trust and safety team; seed or Series A.' },
            { label: 'Stage 3', desc: 'Services (shipping, payments, verification) raise revenue per order; country-level launch teams.' },
            { label: 'Stage 4', desc: 'Regulation, tax reporting and public scrutiny; M&A to buy or defend communities; profitability focus.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you scale',
          items: [
            { q: 'Is our network effect local, regional or global?', why: 'It decides whether expansion is city by city or category by category.' },
            { q: 'Does each new city reach the first city\'s metrics at the same age?', why: 'Cohort comparison shows whether the playbook really transfers.' },
            { q: 'How many of our sellers also list on rivals?', why: 'High multi-tenanting means scale alone will not protect you.' },
            { q: 'Which regulations change as we cross seller or country thresholds?', why: 'Seller verification and tax reporting add cost and friction at scale.' },
            { q: 'Are we raising money to buy liquidity or to build durable services?', why: 'Investors fund land-grabs only when contribution per network improves over time.' },
            { q: 'Would we be worth more as part of a larger platform?', why: 'Consolidation is a common C2C ending — plan for it rather than drift into it.' }
          ]
        }
      ],
      terms: [
        { term: 'Local network effect', def: 'Value grows with users nearby, not users everywhere, so each city must be won separately.' },
        { term: 'Multi-tenanting', def: 'Users being active on several competing platforms at the same time (also called multi-homing).' },
        { term: 'High-volume seller (INFORM Act)', def: 'In the US, a seller with 200+ sales and $5,000+ revenue in 12 months whom marketplaces must verify.' },
        { term: 'DAC7', def: 'An EU rule requiring platforms to report sellers\' income to tax authorities, with small-seller exemptions.' },
        { term: 'Playbook', def: 'A written, repeatable launch method that a new city team can follow.' },
        { term: 'Consolidation', def: 'Mergers and acquisitions that combine marketplaces or communities.' }
      ],
      quiz: [
        { q: 'Which marketplace most needs a city-by-city expansion?', options: ['Local furniture pick-up', 'Online collectibles auctions', 'Digital art downloads', 'Rare stamps'], answer: 0, explain: 'Bulky local items create a local network effect: buyers need sellers nearby.' },
        { q: 'Under the US INFORM Consumers Act, which seller must a marketplace verify?', options: ['Any seller with one sale', 'Only sellers above $1 million', 'Only foreign sellers', 'A seller with 200+ sales and $5,000+ in 12 months'], answer: 3, explain: 'Those thresholds define a high-volume third-party seller.' },
        { q: 'eBay agreed to pay about $1.2 billion for Depop, about 26% below Etsy\'s price. Roughly what did Etsy pay?', options: ['$0.9 billion', '$1.6 billion', '$2.4 billion', '$1.2 billion'], answer: 1, explain: '$1.2 billion ÷ (1 − 0.26) ≈ $1.62 billion.' },
        { q: 'A new city\'s match rate at month 6 is 12%; the first city was 28% at month 6. What should you do?', options: ['Open three more cities', 'Raise the take rate', 'Pause expansion and find what in the playbook did not transfer', 'Cut trust and safety spend'], answer: 2, explain: 'Cohort comparison says the playbook is not transferring yet.' },
        { q: 'What was CarTrade\'s price for OLX India in 2023?', options: ['₹53.5 crore', '₹535.54 crore', '₹5,355 crore', '₹1,200 crore'], answer: 1, explain: 'CarTrade bought OLX India for ₹535.54 crore.' }
      ],
      challenge: {
        title: 'Pick the next three cities',
        prompt: `<p>Your P2P bike rental marketplace works in Bengaluru: 32% match rate, 4-day median time to first booking, ₹45 contribution per rental, 18,000 rentals a month. You have ₹2 crore for the next 12 months. Each new city needs about ₹40 lakh to seed 800 bikes and reach target density; you expect new cities to reach 40% of Bengaluru\'s monthly rentals after 9 months.</p><p>How many cities can you fund, what monthly contribution should each new city deliver at month 9, and what decision rules will you use? Mention one regulatory check.</p>`,
        hints: ['₹2 crore ÷ ₹40 lakh per city; keep a reserve.', 'Month-9 rentals = 40% × 18,000; × ₹45.'],
        model: `<p><b>Budget:</b> ₹2 crore ÷ ₹40 lakh = 5 cities in theory. Keep ₹80 lakh in reserve for overruns and trust and safety, so fund <b>3 cities</b> (₹1.2 crore).</p><p><b>Month-9 target per city:</b> 40% × 18,000 = 7,200 rentals × ₹45 = <b>₹3.24 lakh contribution a month</b>. Three cities = ₹9.72 lakh a month, about ₹1.17 crore a year — so the seeding cost pays back in roughly one year after reaching target.</p><p><b>Choose cities</b> with existing cycling communities, dense student or tech populations and safe parking: e.g. Pune, Hyderabad, Chennai — score each on density, existing rental demand, local rivals and logistics.</p><p><b>Decision rules:</b> launch one city at a time, six weeks apart; stop any city whose match rate is below 20% at month 4; release the reserve only for cities ahead of the Bengaluru curve.</p><p><b>Regulatory check:</b> local rules on renting privately owned vehicles and the e-commerce rules on grievance handling and seller disclosure; confirm insurance cover is valid in each state.</p>`
      },
      takeaways: [
        'Know whether your network effect is local or global; it sets the expansion unit.',
        'Expand only when the first network hits density targets, and compare each new city\'s cohort curve with the first.',
        'Regulation grows with you: seller verification, tax reporting, grievance rules and payments licensing.',
        'Consolidation is a normal C2C path — communities are bought and often kept separate.'
      ],
      sources: [
        { title: 'Moneycontrol — CarTrade acquires 100% of OLX India for ₹535.54 crore', url: 'https://www.moneycontrol.com/news/business/cartrade-tech-acquires-100-stake-of-olx-indias-auto-business-for-rs-535-54-cr-11173341.html' },
        { title: 'Depop newsroom — eBay to acquire Depop from Etsy', url: 'https://news.depop.com/ebay-to-acquire-depop-from-etsy/' },
        { title: 'FTC — INFORM Consumers Act guidance', url: 'https://www.ftc.gov/business-guidance/resources/INFORMAct' },
        { title: 'IndiaLaw — Summary of the Consumer Protection (E-Commerce) Rules, 2020', url: 'https://www.indialaw.in/guides/civil/consumer-protection-e-commerce-rules/' },
        { title: 'Quaderno — DAC7 reporting thresholds explained', url: 'https://quaderno.io/blog/digital-tax/dac7-reporting/' },
        { title: 'ClearTax — Section 194-O TDS on e-commerce operators', url: 'https://cleartax.in/s/section-194o' }
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-pb-etsy-fee-2022', company: 'Etsy', industry: 'Online marketplaces', year: '2022', track: 'pb-c2c',
    title: 'Raise the seller fee in a booming marketplace?',
    situation: `<p>Etsy connects millions of small, independent sellers with buyers. Pandemic demand had lifted sales sharply; in Q4 2021 Etsy reported revenue of $717.1 million on $4.2 billion of gross merchandise sales, a take rate of 17.1% including all fees and services. Its headline transaction fee was 5%, set in 2018 (up from 3.5%).</p><p>Management wanted more money to invest in marketing, search and seller tools as growth slowed after the pandemic peak. Sellers were already complaining about rising costs, mass-produced goods on the site and an offsite-ads programme that charged them on some sales.</p>`,
    question: 'You are the CEO. Do you raise the transaction fee, and how?',
    options: [
      { text: 'Raise the fee to 6.5% for all sellers, and commit publicly to reinvesting most of the extra revenue in marketing, tools and customer experience, with regular reporting.', result: 'Revenue rises; some sellers protest, but few have an equally strong alternative. The commitment gives you a defensible story and something to measure.', best: true },
      { text: 'Raise the fee to 8% to fund a large advertising push.', result: 'A bigger rise widens the price umbrella for rivals and risks a real seller exodus and leakage to sellers\' own websites.' },
      { text: 'Keep the fee at 5% and cut marketing to protect margins.', result: 'Seller goodwill is preserved, but lower marketing slows buyer growth and hurts sellers\' sales anyway.' },
      { text: 'Replace the seller fee with a buyer fee overnight.', result: 'Buyers used to fee-free checkout may convert less; a sudden switch on an established platform is risky without a test.' }
    ],
    whatHappened: `<p>On 24 February 2022 Etsy announced the fee would rise from 5% to 6.5% from 11 April 2022. Thousands of sellers closed their shops for a week in protest — NPR reported more than 5,000 shops — and demanded the increase be cancelled. Etsy kept the new fee and later said in its annual report that it had reinvested most of the incremental revenue in marketing, seller tools and customer experiences.</p>`,
    lessons: ['A take-rate rise sticks when sellers lack equally good alternatives, but it spends goodwill.', 'Link any increase to visible benefits and report on them.', 'Watch for leakage to sellers\' own channels after fee rises.'],
    frameworks: ['Take rate and the price umbrella (Gurley)', 'Two-sided pricing', 'Stakeholder communication']
  },
  {
    id: 'case-pb-vinted-buyer-fee', company: 'Vinted', industry: 'Second-hand fashion marketplace', year: '2016', track: 'pb-c2c',
    title: 'Who should pay: the seller or the buyer?',
    situation: `<p>Vinted, founded in Lithuania in 2008, let people sell clothes from their wardrobes to each other. It had expanded to France in 2013, which became its largest market. Like most marketplaces, it charged sellers a fee on each sale.</p><p>Growth depended on amateur sellers listing more items — the hard side. Many people had clothes they would sell "if it were easy and free", while buyers mainly worried about scams and items not as described.</p>`,
    question: 'You lead Vinted\'s business model. How do you charge?',
    options: [
      { text: 'Keep the seller commission and raise it slightly to fund growth.', result: 'More revenue per item, but it discourages casual sellers and slows supply growth.' },
      { text: 'Remove the seller fee and charge buyers a protection fee that funds secure payment, refunds and dispute handling.', result: 'Selling becomes free, supply grows, and buyers get a clear reason for the fee: protection.', best: true },
      { text: 'Make the platform completely free and rely on advertising.', result: 'Easy growth, but no payment control or protection, so trust and fraud problems grow and ad revenue is thin.' },
      { text: 'Charge sellers a monthly subscription.', result: 'Suits power sellers, but blocks the casual sellers who make up most supply.' }
    ],
    whatHappened: `<p>In 2016 Vinted removed its seller fee and introduced a buyer protection fee. It went on to become Lithuania\'s first unicorn in 2019, launched its own shipping business, Vinted Go, in 2021, and for 2024 reported revenue of €813.4 million and net profit of €76.7 million across 22 countries.</p>`,
    lessons: ['Charge the side that is easiest to charge and most clearly benefits — here, buyers buying protection.', 'Making the hard side free can be worth a lower revenue per item.', 'A thin fee needs volume and extra services to become profitable.'],
    frameworks: ['Two-sided pricing', 'Hard side of a marketplace', 'Fee incidence']
  },
  {
    id: 'case-pb-poshmark-fee-2024', company: 'Poshmark', industry: 'Social resale marketplace', year: '2024', track: 'pb-c2c',
    title: 'Copy the buyer-fee model on an established platform?',
    situation: `<p>Poshmark, acquired by Naver in January 2023 for about $1.2 billion and with more than 80 million registered users, had long charged sellers 20% on sales over $15 and a flat $2.95 below that, including a prepaid shipping label. Rivals such as Vinted and Depop were winning sellers with "free to sell" messages funded by buyer fees.</p><p>Management wanted to lower sellers\' costs and stay competitive for supply.</p>`,
    question: 'You run Poshmark. How do you change fees, if at all?',
    options: [
      { text: 'Switch all users at once to a low seller fee plus a new buyer protection fee.', result: 'Sellers welcome lower fees, but buyers face a new charge at checkout; if conversion drops, sellers lose sales and the change backfires.' },
      { text: 'Test a lower seller fee plus buyer fee in one segment (e.g. new listings or one category) against a control group, measuring conversion and seller earnings for several weeks.', result: 'You learn how buyers react before betting the whole marketplace, and can scale or drop the idea with evidence.', best: true },
      { text: 'Keep the 20% fee and add more promoted-listing options.', result: 'Revenue holds, but the "free to sell" rivals keep pulling supply away.' },
      { text: 'Cut the seller fee to 0% with no buyer fee.', result: 'Supply grows but revenue collapses unless other income replaces it.' }
    ],
    whatHappened: `<p>In October 2024 Poshmark introduced a lower seller fee (5.99% plus a small fixed fee) and a buyer protection fee across the US marketplace. After complaints and a drop in sales, it reverted to the original 20% / $2.95 structure from 24 October 2024 — about three weeks later — and dropped the buyer fee.</p>`,
    lessons: ['What works for a platform built around buyer fees may not transfer to one whose buyers are used to none.', 'Test fee changes on a slice of the market first.', 'Watch buyer conversion as closely as seller sentiment.'],
    frameworks: ['Two-sided pricing', 'A/B testing', 'Decision tree and value of information']
  },
  {
    id: 'case-pb-olx-india-2023', company: 'OLX India (Prosus)', industry: 'Classifieds', year: '2023', track: 'pb-c2c',
    title: 'Keep, fix or sell a big horizontal classifieds business?',
    situation: `<p>OLX was among India\'s best-known classifieds platforms, with a large audience across cars, phones, homes and household goods. Owner Prosus had also invested in OLX Autos, a capital-heavy model that bought used cars from consumers and resold them. Classifieds earned modestly per user, while the autos transactions business needed inventory, inspection centres and working capital.</p><p>Indian rivals such as CarTrade (CarWale, BikeWale), Cars24 and Spinny were focused on vehicles.</p>`,
    question: 'You are Prosus\'s head of classifieds. What do you do with OLX India?',
    options: [
      { text: 'Double down: put more capital into OLX Autos to win used-car transactions.', result: 'You compete with focused, well-funded vehicle specialists while carrying inventory risk in a business that is not your core.' },
      { text: 'Exit the capital-heavy autos transactions business and sell OLX India to a focused vertical player who values its audience as lead generation.', result: 'You stop funding losses and capture value for the audience from a buyer who can monetise it better.', best: true },
      { text: 'Shut down OLX India entirely.', result: 'You avoid future losses but throw away the audience and brand value a buyer would pay for.' },
      { text: 'Make all listings paid to raise revenue quickly.', result: 'Listings fall sharply; casual sellers move to free alternatives such as Facebook Marketplace.' }
    ],
    whatHappened: `<p>In 2023 OLX exited its auto transactions business in India. In August 2023 CarTrade Tech completed its acquisition of OLX India for ₹535.54 crore, combining the OLX audience with its vehicle portfolio; CarTrade later closed the inherited car-buying operation.</p>`,
    lessons: ['Audience is not profit; a horizontal platform can be worth more to a vertical specialist.', 'Inventory-heavy add-ons can drain a light classifieds model.', 'Sell while the audience still has strategic value to someone else.'],
    frameworks: ['Portfolio strategy', 'Asset-light vs asset-heavy models', 'Marketplace consolidation']
  }
]);
