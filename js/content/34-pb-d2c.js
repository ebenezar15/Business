/* MBA Studio — Track 34: Business Model Playbooks · Playbook 1 · D2C (Direct-to-Consumer) */
MBA.addTrack({
  id: 'pb-d2c',
  stage: 5,
  order: 34,
  title: 'Playbook: D2C (Direct-to-Consumer)',
  icon: '📦',
  color: '#f97316',
  series: 'Business Model Playbooks',
  part: 'Playbook 1 · D2C',
  tagline: 'Build a consumer brand that sells direct, earns money on every order and scales without burning out',
  summary: `A practical playbook for running or advising a direct-to-consumer brand. You will learn how money really flows through a D2C order, how to size and test a consumer market, how to launch and build the operating stack, how to price, how to read contribution margin after shipping, returns, RTO and ads, how to build a brand people talk about, and how to scale into marketplaces, quick commerce and stores without repeating the famous failures.`,
  outcomes: [
    'Map the D2C value chain and money flow, and judge when D2C fits a product and when it does not',
    'Size a consumer market bottom-up and test demand cheaply before ordering inventory',
    'Launch a first offer, choose contract or own manufacturing, and win the first 100 customers',
    'Price with bundles, thresholds and subscriptions, and calculate contribution margin per order and LTV:CAC',
    'Build a brand and creative engine (creators, community, retention) that lowers paid-acquisition dependence',
    'Plan omnichannel scale and funding, and avoid the failure patterns of 2021–2025 (Allbirds, Casper, Thrasio, Sugar)'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'pb-d2c-1',
      title: 'How the D2C model works: value chain, money flow and fit',
      level: 'Beginner',
      minutes: 15,
      hook: `A D2C brand keeps the retailer's margin — and inherits every job the retailer used to do, from finding customers to taking back the parcel nobody opened.`,
      eli5: `Imagine you bake great cookies. Normally a shop buys them from you cheaply, puts them on its shelf and keeps a big slice of the price. Going D2C means you sell from your own stall and website. You keep the whole price — but now you must pay for the stall, bring people to it, pack each box, post it, and refund the cookies that arrive broken. D2C is a good deal only if your cookies are special enough that people come looking for <i>your</i> stall.`,
      blocks: [
        {
          type: 'text', title: 'What D2C really means in 2025–26',
          html: `<p>In <a href="#/lesson/business-model-1">the business-model basics</a> D2C was one line: <i>sell directly, skip retailers</i>. In practice almost no successful brand stays pure. A modern D2C brand is <b>brand-led</b>: it owns the product idea, the brand, the customer data and the first-party channel (website or app), and then <span class="hl">chooses</span> which other channels to add — marketplaces (Amazon, Flipkart, Nykaa), quick commerce (Blinkit, Zepto, Instamart), and finally its own or partner stores.</p><p>The test is not "do we sell only online?" but "do we control the brand, the price and the customer relationship?"</p>`
        },
        {
          type: 'flow', title: 'Money and goods in one D2C order',
          steps: [
            { label: 'Brand designs product and briefs a manufacturer', desc: 'Contract manufacturer or own plant makes stock to the brand\'s specification. The brand pays for inventory weeks or months before it sells.' },
            { label: 'Ads, creators and content create demand', desc: 'Meta, Google, YouTube, creators, SEO and email bring a visitor to the site, app or marketplace listing. This is the biggest variable cost for most young brands.' },
            { label: 'Customer pays (prepaid or cash on delivery)', desc: 'Payment gateway takes a fee; in India a large share of orders may be COD, so cash arrives only after delivery — or never, if the parcel is refused.' },
            { label: 'Was the order delivered and kept?', kind: 'decision', desc: 'Delivery failures (return to origin, RTO) and customer returns both cost money twice: shipping out and back.', branches: [ { label: 'Yes', to: 'Revenue recognised, contribution earned' }, { label: 'No', to: 'RTO / return cost, stock may be damaged' } ] },
            { label: 'Repeat purchase', desc: 'Email, SMS, WhatsApp and the product itself bring the customer back at almost no acquisition cost. Repeat orders are where D2C profit usually lives.' }
          ]
        },
        {
          type: 'compare', title: 'Who takes what: retail chain vs marketplace vs own website (illustrative, ₹1,000 MRP)', headers: ['', 'Traditional retail', 'Marketplace', 'Own website / app'],
          rows: [
            ['Brand receives (before its own costs)', 'Roughly ₹450–550 after distributor and retailer margins', 'Price minus commission, fixed and fulfilment fees', 'Full price minus payment fee'],
            ['Who finds the customer', 'Shelf and store traffic', 'Marketplace search and ads you buy on it', 'You: ads, creators, SEO, email'],
            ['Who ships and handles returns', 'Retailer', 'Often the marketplace (for a fee)', 'You (or your 3PL)'],
            ['Customer data', 'None', 'Very little', 'Full: email, phone, order history'],
            ['Pricing control', 'Low: retailer promotions', 'Medium: platform sales events', 'High']
          ]
        },
        {
          type: 'map', title: 'The D2C metrics map', center: 'Profitable D2C',
          branches: [
            { label: 'Traffic and conversion', desc: 'Sessions × conversion rate = orders. A small conversion change moves CAC a lot.', children: ['Sessions', 'Conversion %', 'Add-to-cart %'] },
            { label: 'Order value', desc: 'Average order value (AOV) spreads fixed per-order costs like shipping.', children: ['AOV', 'Units per order'] },
            { label: 'Gross margin', desc: 'Price minus product cost. D2C needs room for ads and shipping, so many brands aim well above typical retail-brand margins.', children: ['COGS %', 'Discounts'] },
            { label: 'Contribution margin', desc: 'What is left per order after COGS, shipping, packing, payment fees, returns and RTO — before and after marketing.', children: ['CM before ads', 'CM after ads'] },
            { label: 'Acquisition', desc: 'Customer acquisition cost (CAC) on new customers, blended and by channel.', children: ['CAC', 'ROAS', 'MER'] },
            { label: 'Retention', desc: 'Repeat rate, orders per customer per year and LTV decide whether CAC pays back.', children: ['Repeat %', 'LTV', 'Payback'] }
          ]
        },
        {
          type: 'case', company: 'Lenskart', year: '2010–2025', title: 'Vertical integration as the D2C moat',
          situation: `Lenskart launched online in 2010 to sell eyewear directly, in a category where frames and lenses passed through many hands before reaching a local optician. Eyewear needs an eye test and fitting, which pure online selling struggles with.`,
          decision: `It opened its first store in New Delhi in 2013 and kept integrating: its own manufacturing at Bhiwadi (with another plant being set up in Telangana) and regional hubs in Singapore and the UAE, selling through its app, website and its own stores.`,
          outcome: `By October 2025 Business Standard reported more than 3,150 stores across 14 countries, FY25 revenue from operations of ₹6,652.5 crore (up 22.5%) and a net profit of ₹297.34 crore against a small loss the year before, as it prepared a roughly $900 million IPO and planned 450 new stores in the year.`,
          lesson: `"Direct" can mean owning the whole chain, including stores. Where a product needs touch, fitting or service, D2C brands win by integrating, not by staying online-only.`
        },
        {
          type: 'case', company: 'boAt (Imagine Marketing)', year: '2014–2025', title: 'Asset-light brand, marketplace-heavy channel',
          situation: `boAt, founded in 2013 and launched as a brand in 2014, sells earphones, speakers, smartwatches and chargers to mid-market Indian buyers. It designs and markets products but outsources much of the manufacturing to contract manufacturers and sources a significant share of stock from China, Vietnam and Hong Kong.`,
          decision: `Rather than relying on its own website, it sold heavily through Amazon and Flipkart plus offline retail partners, investing in brand, influencers and sponsorships to stand out on crowded marketplace shelves.`,
          outcome: `Its 2025 updated draft prospectus showed FY25 revenue from operations of ₹3,073 crore (slightly down from ₹3,118 crore) and a return to a net profit of about ₹61 crore after a ₹79.7 crore loss in FY24. The filing lists heavy dependence on a few marketplaces and on contract manufacturers as key risks.`,
          lesson: `A D2C-born brand can scale fast without factories or a dominant own website — but it then rents its customers and its supply, and margins depend on platform fees and supplier reliability.`
        },
        {
          type: 'matrix', name: 'When does D2C fit?', xLabel: 'Repeat purchase frequency →', yLabel: 'Gross margin headroom →',
          cells: [
            { label: 'Brand-led, one-off', desc: 'High margin but rare purchase (mattresses, luggage). Each sale must pay back its own CAC; referrals and stores matter. Casper struggled here.' },
            { label: 'D2C sweet spot', desc: 'High margin and frequent repeat (skincare, supplements, coffee, eyewear refills). Retention turns CAC into profit.' },
            { label: 'Avoid pure D2C', desc: 'Low margin, rare purchase (bulky commodity goods). Shipping and CAC eat everything; use retail or marketplaces.' },
            { label: 'Marketplace / q-commerce first', desc: 'Low margin but frequent (snacks, staples). Win on availability where people already shop; own site is a brand tool, not the main till.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you choose a D2C model',
          items: [
            { q: 'Is our gross margin high enough to pay for shipping, returns and ads on the first order?', why: 'If the first order loses money and repeat is weak, every sale deepens the hole.' },
            { q: 'How often will a happy customer reorder?', why: 'Repeat frequency decides whether CAC pays back; it is the single biggest lever in D2C economics.' },
            { q: 'Does the product need touch, trial or fitting?', why: 'If yes, plan stores, try-at-home or easy returns early — as Lenskart and Warby Parker did.' },
            { q: 'Can a customer explain why our brand is different in one sentence?', why: 'Without a clear difference you compete on ads and discounts, which incumbents and marketplaces win.' },
            { q: 'Where do our customers already shop for this category?', why: 'If they search on Amazon or Blinkit, a website-only plan fights habit and costs more CAC.' },
            { q: 'Who will make the product, and how much cash will stock lock up?', why: 'Inventory is paid for months before revenue arrives; it sets your funding need.' }
          ]
        }
      ],
      terms: [
        { term: 'D2C (direct-to-consumer)', def: `A brand that sells to end customers through channels it controls (website, app, own stores), usually alongside selected marketplaces and retailers.` },
        { term: 'AOV (average order value)', def: `Total revenue divided by number of orders. Higher AOV spreads fixed per-order costs like shipping.` },
        { term: 'CAC (customer acquisition cost)', def: `Marketing and sales spend divided by the number of new customers acquired in the same period.` },
        { term: 'Contribution margin per order', def: `Revenue from an order minus all variable costs of that order (product, packing, shipping, payment, returns), before or after marketing.` },
        { term: 'RTO (return to origin)', def: `A shipment that fails to reach the customer and comes back to the seller — common with cash-on-delivery orders in India.` },
        { term: 'First-party data', def: `Customer information a brand collects directly (email, phone, purchases), which it can use for retention without paying a platform.` }
      ],
      quiz: [
        { q: "Which statement best describes a modern D2C brand?", options: ["It controls brand, price and the customer relationship, and chooses which other channels to add","It never sells on marketplaces","It must own its factories","It only sells by subscription"], answer: 0, explain: "Most successful D2C brands are omnichannel; the defining feature is control of brand, pricing and customer data." },
        { q: "A ₹1,000 MRP product earns the brand ₹500 through a distributor and retailer. On its own site it pays ₹80 shipping and ₹20 payment fee. Before marketing, how much more does the brand keep per unit on its own site?", options: ["₹200","₹300","₹400","₹500"], answer: 2, explain: "Own site: ₹1,000 − ₹80 − ₹20 = ₹900. Retail: ₹500. Difference ₹400 — but the brand must now spend on ads to find the customer." },
        { q: "Which product is the weakest fit for a pure D2C model?", options: ["A premium face serum bought every two months","Prescription eyewear with stores","A coffee subscription","A bulky, low-margin storage box bought once"], answer: 3, explain: "Low margin plus rare purchase means shipping and CAC eat the whole order." },
        { q: "Why does a COD order that is refused at the door hurt twice?", options: ["GST is charged twice","The brand pays forward and return shipping and earns no revenue","The customer gets a refund and keeps the product","Payment gateways fine the brand"], answer: 1, explain: "An RTO costs forward and reverse logistics plus handling, with zero sale." },
        { q: "boAt's 2025 prospectus lists dependence on a few marketplaces as a risk. What is the core danger?", options: ["Marketplaces never pay","Changes in fees, algorithms or payment terms can cut margins and visibility","Marketplaces own the brand","Marketplace sales cannot be counted as revenue"], answer: 1, explain: "When a few platforms control demand, their fee and ranking decisions directly hit your margins and cash flow." }
      ],
      challenge: {
        title: 'Should a pickle brand go D2C?',
        prompt: `<p>A family brand sells homemade pickles through local shops at an MRP of ₹300 per 400 g jar. Shops and the distributor together keep about 45% of MRP. Product cost is ₹90 per jar. The owners want to launch a website. Shipping a single jar costs about ₹85 (glass, heavy), a 3-jar pack costs ₹110 to ship, and the payment fee is 2%. Customers typically buy a jar every 6–8 weeks. (All numbers illustrative.)</p><p>Compare what the brand keeps per jar in retail versus a single-jar and a 3-jar online order, before marketing. Then recommend how (or whether) to go D2C.</p>`,
        hints: ['Retail: brand receives MRP × (1 − 45%) and pays product cost.', 'Online: subtract product cost, shipping and 2% payment fee; compare per jar for a 3-pack.'],
        model: `<p><b>Retail per jar:</b> ₹300 × 55% = ₹165 received − ₹90 cost = <b>₹75</b>.</p><p><b>Online single jar:</b> ₹300 − ₹90 − ₹85 shipping − ₹6 fee = <b>₹119</b>, before any ads.</p><p><b>Online 3-jar pack at ₹900:</b> ₹900 − ₹270 − ₹110 − ₹18 = ₹502, i.e. <b>₹167 per jar</b>.</p><ul><li>The single-jar order looks better than retail only until ads are added; a CAC of even ₹200 makes it a loss.</li><li>The 3-pack more than doubles the per-jar contribution versus retail and leaves room for CAC of a few hundred rupees, especially as customers reorder every 6–8 weeks.</li></ul><p><b>Recommendation:</b> go D2C with packs and a reorder reminder (WhatsApp/email), not single jars; keep shops for discovery and walk-in demand; test a marketplace listing for the 3-pack. Glass weight makes single-jar shipping the main trap.</p>`
      },
      takeaways: [
        'D2C means controlling brand, price and customer data — not refusing every other channel.',
        'You keep the retailer margin but pay for demand, fulfilment, returns and RTO yourself.',
        'High gross margin plus frequent repeat is the D2C sweet spot; low margin plus rare purchase is a trap.',
        'Products that need touch or fitting push successful D2C brands into stores and integration (Lenskart).'
      ],
      sources: [
        { title: 'Business Standard — Lenskart accelerates store expansion ahead of IPO (Oct 2025)', url: 'https://www.business-standard.com/amp/companies/news/lenskart-accelerates-store-expansion-ahead-of-10-billion-dollar-ipo-125101401379_1.html' },
        { title: 'MediaNama — boAt parent files updated DRHP for ₹1,500 crore IPO (Oct 2025)', url: 'https://www.medianama.com/2025/10/223-boat-ipo-rs-1500-crore-offer-sebi-filing-drhp/' },
        { title: 'Storyboard18 — boAt returns to profit in FY25', url: 'https://www.storyboard18.com/brand-marketing/boat-returns-to-profit-in-fy25-with-rs-60-crore-net-gain-revenue-tops-rs-3000-crore-82051.htm' },
        { title: 'Amazon Shipping India — What is RTO and how to reduce it', url: 'https://shipping.amazon.in/blog/what-is-rto-how-to-reduce-return-to-origin' }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'pb-d2c-2',
      title: 'Market study for a consumer brand: sizing, research and demand signals',
      level: 'Beginner',
      minutes: 15,
      hook: `Most failed D2C brands did not lack ads — they launched into a category where nobody was searching, everyone was copying, or the demand they saw was a one-time spike.`,
      eli5: `Before opening a lemonade stand, you would count how many thirsty people walk past, look at what the other stands charge, and maybe hand out free cups to see who comes back tomorrow. A D2C market study is the same: count real buyers, watch what they already buy, and test whether they pay — before you order a truckload of lemons.`,
      blocks: [
        {
          type: 'text', title: 'Size bottom-up, not from a big report',
          html: `<p>You met TAM, SAM and SOM in <a href="#/lesson/validation-4">Validation: market sizing</a>. For a consumer brand the useful version is <b>bottom-up</b>: <span class="hl">number of reachable buyers × purchases per year × price</span>. Top-down figures ("the Indian beauty market is worth billions") tell you nothing about whether <i>your</i> customers exist in reachable numbers.</p>`
        },
        {
          type: 'formula', name: 'Bottom-up consumer market size', expr: 'Serviceable market = Target buyers × Purchases per year × Average price',
          explain: 'Target buyers: people who have the problem, can afford your price and can be reached through your channels. Purchases per year: from category data or your survey. Price: your planned net price, not MRP.',
          example: 'Illustrative: 40 lakh urban women aged 22–35 in the top 30 cities who already buy premium skincare online × 4 purchases a year × ₹700 = ₹1,120 crore. Winning 2% of that by year 3 = ₹22.4 crore of revenue.'
        },
        {
          type: 'pyramid', invert: true, title: 'From everyone to your first buyers',
          levels: [
            { label: 'Category users', desc: 'Everyone who uses the category (all skincare users). Large and mostly unreachable for a new brand.' },
            { label: 'Buy online in the category', desc: 'Those who already buy this category online or on quick commerce. Your channels can reach them.' },
            { label: 'Have the specific problem', desc: 'Those with the need your product solves (e.g. sensitive skin, clean-label snacks).' },
            { label: 'Willing to pay your price', desc: 'Those whose willingness to pay matches your price band — check with price tests, not opinions.' },
            { label: 'First 1,000 customers', desc: 'The niche you can reach cheaply: a community, a creator audience, a city.' }
          ]
        },
        {
          type: 'map', title: 'Where to find D2C demand signals', center: 'Demand evidence',
          branches: [
            { label: 'Search', desc: 'Keyword volumes on Google and on marketplaces show what people already look for, and how fast it is growing.', children: ['Google Trends', 'Amazon/Flipkart search', 'Nykaa search'] },
            { label: 'Marketplace shelves', desc: 'Best-seller ranks, review counts and review complaints of top products show size and unmet needs.', children: ['Review mining', 'Price bands'] },
            { label: 'Communities', desc: 'Reddit, Instagram comments, WhatsApp groups and forums reveal language and frustrations.', children: ['Comment mining', 'Polls'] },
            { label: 'Paid tests', desc: 'Small ad spend to a landing page or pre-order shows real click-through and conversion, not stated intent.', children: ['Fake-door page', 'Pre-orders'] },
            { label: 'Retail and q-commerce', desc: 'Which brands are on Blinkit or in modern trade, and how many SKUs a category gets, signal velocity.', children: ['Dark-store listings', 'Shelf share'] },
            { label: 'Competitor ad libraries', desc: 'Meta\'s ad library shows which competitor ads have run for months — a proxy for ads that work.', children: ['Long-running ads', 'Offers used'] }
          ]
        },
        {
          type: 'case', company: 'Glossier', year: '2010–2023', title: 'A community that did the market research',
          situation: `Emily Weiss built a following with her beauty blog Into the Gloss while working at Vogue. When she founded Glossier in 2014, she already had an engaged readership talking about what they wanted from beauty products.`,
          decision: `Glossier launched with just four products (a balm, a face mist, a skin tint and a moisturiser) and sold online only, building on that audience. Later demand evidence also guided channel choices: Glossier said it was one of the most-searched brands on Sephora's site that Sephora did not stock, with searches about buying Glossier at Sephora up as much as 200% in a year.`,
          outcome: `Glossier raised funding that valued it at $1.2 billion after 2018–19 rounds, and in July 2022 announced its first wholesale partner, Sephora, entering its US and Canadian stores in early 2023.`,
          lesson: `An owned audience is a research lab: it tells you what to make first, and search data tells you where customers expect to find you.`
        },
        {
          type: 'case', company: 'Casper', year: '2014–2022', title: 'A great story in a crowded, copyable category',
          situation: `Casper, founded in 2014, was a pioneer of the bed-in-a-box mattress sold online. Mattresses are bought rarely, and the product was relatively easy for rivals to imitate; many online mattress brands followed.`,
          decision: `Casper grew through heavy marketing, then wholesale (including Target) and dozens of its own stores, and listed on the NYSE in February 2020 at $12 a share.`,
          outcome: `It struggled to make money in an increasingly competitive category. In November 2021 a private equity firm agreed to take it private at $6.90 a share, valuing it far below the $1.1 billion it was once worth privately.`,
          lesson: `A market study must ask how quickly others can copy you and how often customers buy. Rare purchases plus easy imitation make CAC very hard to recover.`
        },
        {
          type: 'framework', name: 'Five-part D2C competitor and substitute scan', when: 'Before you choose a category, price band and positioning',
          steps: [
            { label: 'Incumbent FMCG brands', desc: 'Large brands with retail reach and budgets. Note their price, claims and weak spots (e.g. ingredient concerns).' },
            { label: 'Other D2C brands', desc: 'Who is already doing "the D2C version"? List their hero products, AOV, ratings and how long their ads have run.' },
            { label: 'Marketplace private labels', desc: 'Platforms may launch cheaper own-label products in fast-selling categories.' },
            { label: 'Substitutes', desc: 'Different ways to do the same job: a home remedy, a service, a gadget. Substitutes cap your price.' },
            { label: 'Copy speed', desc: 'Estimate how fast a contract manufacturer could make a near-identical product for a rival. Low copy-time means you must win on brand, community or IP.' }
          ]
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Size your category',
          note: 'Enter a top-down market, then narrow it to the share your channels can reach and the share you can realistically win. Compare the result with your bottom-up estimate — if the two differ by 10x, find out why.'
        },
        {
          type: 'questions', title: 'Ask before you commit to a category',
          items: [
            { q: 'How many people search for this need each month on Google and on the main marketplaces?', why: 'Search volume is real demand you can capture; zero search means you must create demand, which is expensive.' },
            { q: 'What do one- and two-star reviews of the top products complain about?', why: 'Repeated complaints are the gap your product must fill and the message your ads should lead with.' },
            { q: 'Is the demand stable, seasonal or a spike?', why: 'Ordering stock for a spike that fades is how brands end up with dead inventory (as many pandemic-boom brands found).' },
            { q: 'How quickly could a rival copy our product with the same contract manufacturer?', why: 'Fast copying turns a product idea into a price war unless brand or community protects it.' },
            { q: 'How often will customers rebuy, and at what price band?', why: 'Repeat frequency and price set your LTV ceiling and how much CAC you can afford.' },
            { q: 'Did people pay in a test, or only say they would?', why: 'Pre-orders and paid clicks beat survey enthusiasm, which overstates demand.' }
          ]
        }
      ],
      terms: [
        { term: 'Bottom-up sizing', def: `Estimating a market from reachable buyers × purchase frequency × price, rather than from a published total.` },
        { term: 'Demand signal', def: `Observable evidence that people want something: searches, reviews, pre-orders, paid clicks, waitlists.` },
        { term: 'Fake-door test', def: `Advertising a product before it exists and measuring how many people try to buy, to test demand cheaply.` },
        { term: 'Review mining', def: `Reading competitors' customer reviews at scale to find recurring complaints and the words customers use.` },
        { term: 'Copy speed', def: `How quickly a competitor could launch a near-identical product, often through the same contract manufacturers.` },
        { term: 'Substitute', def: `A different product or behaviour that does the same job for the customer and therefore limits your price.` }
      ],
      quiz: [
        { q: "Which is the best bottom-up market estimate for a new snack brand?", options: ["India's packaged food market size from a report","Total population of India × average snack spend","Number of Instagram followers of top food creators","Reachable health-snack buyers × packs per year × net price"], answer: 3, explain: "Bottom-up sizing starts from reachable buyers, frequency and price." },
        { q: "You spend ₹20,000 on ads to a pre-order page and get 160 pre-orders. What is the cost per pre-order?", options: ["₹80","₹125","₹100","₹160"], answer: 1, explain: "₹20,000 ÷ 160 = ₹125. Compare that with the contribution you expect from a first order." },
        { q: "Why was Casper's category hard for a D2C brand?", options: ["Purchases are rare and the product was easy for rivals to imitate","Mattresses cannot be shipped","Customers refused to buy online","There was no demand"], answer: 0, explain: "Rare purchase plus easy imitation made acquisition costs hard to recover." },
        { q: "What did Glossier's Sephora search data indicate?", options: ["Customers wanted cheaper products","Sephora wanted to copy Glossier","Customers already expected to find Glossier at Sephora — a channel demand signal","Glossier should stop selling online"], answer: 2, explain: "High searches for a brand a retailer does not stock show unmet channel demand." },
        { q: "Which demand evidence is strongest?", options: ["Friends saying \"I would buy it\"","Paid pre-orders from strangers reached by ads","A survey with 80% purchase intent","Likes on a launch teaser"], answer: 1, explain: "Money from strangers is the strongest signal; stated intent overstates demand." }
      ],
      challenge: {
        title: 'Size and test a men\'s grooming brand',
        prompt: `<p>You plan a beard-care brand. Your research (illustrative): 1.2 crore men in India buy grooming products online; 25% of them have beards they care for; you estimate 3 purchases a year at ₹450 net. A ₹30,000 ad test drove 3,000 visits and 75 orders at ₹450.</p><p>1) Size the serviceable market bottom-up. 2) Compute the test conversion rate and cost per order. 3) Say what else you need to know before ordering 10,000 units.</p>`,
        hints: ['1.2 crore × 25% = target buyers; × 3 × ₹450.', 'Conversion = orders ÷ visits; cost per order = spend ÷ orders.'],
        model: `<p><b>1) Market:</b> 1.2 crore × 25% = 30 lakh beard-care buyers. 30,00,000 × 3 × ₹450 = <b>₹405 crore</b> a year.</p><p><b>2) Test:</b> conversion = 75 ÷ 3,000 = <b>2.5%</b>; cost per order = ₹30,000 ÷ 75 = <b>₹400</b> — almost the whole ₹450 order value.</p><p><b>3) Before ordering 10,000 units:</b></p><ul><li>Repeat rate: will 30–40% reorder within 90 days? Without it, a ₹400 CAC on a ₹450 order cannot work.</li><li>Contribution after product, shipping and returns per order (likely ₹200–250 here).</li><li>Copy speed and competitor prices on marketplaces.</li><li>Channel: does a marketplace listing convert cheaper than ads to your site?</li></ul><p><b>Recommendation:</b> the market is large enough, but the test economics are not yet viable. Run a second test with a 2-product kit (higher AOV) and track 60-day repeat before committing to a large order; start with a small MOQ batch.</p>`
      },
      takeaways: [
        'Size bottom-up: reachable buyers × purchases per year × net price.',
        'Look for evidence of paying behaviour — searches, reviews, pre-orders — not stated intent.',
        'Scan incumbents, other D2C brands, marketplace private labels, substitutes and copy speed.',
        'Rare purchases in easily copied categories make CAC very hard to recover (Casper).'
      ],
      sources: [
        { title: 'Retail Dive — Glossier enters wholesale with Sephora deal (Jul 2022)', url: 'https://www.retaildive.com/news/glossier-first-wholesale-deal-sephora/628133' },
        { title: 'Wikipedia — Glossier (company history)', url: 'https://en.wikipedia.org/wiki/Glossier' },
        { title: 'CNBC — Casper to be taken private by Durational Capital (Nov 2021)', url: 'https://www.cnbc.com/2021/11/15/mattress-maker-casper-to-be-taken-private-by-pe-firm-durational-capital.html' },
        { title: 'Business Standard — India D2C funding falls to $757 million in 2024 (Tracxn)', url: 'https://www.business-standard.com/amp/companies/start-ups/india-s-d2c-segment-sees-funding-decline-to-757-million-in-2024-125041601070_1.html' }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'pb-d2c-3',
      title: 'Starting a D2C brand: first offer, setup and the first 100 customers',
      level: 'Intermediate',
      minutes: 16,
      hook: `Your first product is not your brand's final form — it is the cheapest experiment that can prove strangers will pay, come back and tell a friend.`,
      eli5: `Starting a D2C brand is like opening a tiny food cart before a restaurant. You cook one dish really well, sell it to people walking past, watch who comes back, and only then rent the big kitchen. Opening the restaurant first means paying rent for months while you are still guessing the menu.`,
      blocks: [
        {
          type: 'flow', title: 'From idea to first 100 customers',
          steps: [
            { label: 'Pick one hero product', desc: 'One product that solves a sharp problem better than alternatives. Resist launching a range — it multiplies inventory, cash and confusion.' },
            { label: 'Make a small batch', desc: 'Contract manufacturer or white-label at the lowest workable minimum order quantity (MOQ). Pay a little more per unit to keep cash flexible.' },
            { label: 'Set up the legal and operating basics', desc: 'Entity, tax registration, product-category licences, labels, a store, a payment gateway and a shipping partner.' },
            { label: 'Do strangers pay at a viable price?', kind: 'decision', desc: 'Measure conversion and cost per order from small paid tests and community launches.', branches: [ { label: 'Yes', to: 'Find the first 100 and track repeat' }, { label: 'No', to: 'Change offer, price or audience before buying more stock' } ] },
            { label: 'Win the first 100 by hand', desc: 'Founder-led selling, communities, creators who genuinely like it, events and marketplaces. Call or message every early buyer.' },
            { label: 'Measure 60–90 day repeat', desc: 'Repeat rate and reviews tell you if you have product-market fit before you scale spend.' }
          ]
        },
        {
          type: 'compare', title: 'Make it yourself, contract manufacture or white-label?', headers: ['', 'White-label (existing formula)', 'Contract manufacturing (your formula)', 'Own manufacturing'],
          rows: [
            ['Upfront cash', 'Lowest', 'Medium: MOQ, moulds, tooling', 'Highest: plant, people, licences'],
            ['Speed to launch', 'Weeks', 'Months', 'Many months to years'],
            ['Differentiation', 'Low: rivals can buy the same product', 'Medium–high: your spec, but supplier knows it', 'High: process know-how and quality control'],
            ['Margin', 'Lowest (supplier markup)', 'Medium', 'Highest at scale'],
            ['Best for', 'Testing demand quickly', 'Most early and growth-stage brands', 'Brands with scale or where process is the moat (Lenskart lenses)']
          ]
        },
        {
          type: 'checklist', title: 'Setup essentials (jurisdiction-neutral, with India and US notes)',
          items: [
            'Entity chosen and registered (India: LLP or private limited; US: LLC or C-corp if raising VC) — the India lessons cover entity choice in detail.',
            'Tax registration done (India: GST registration is generally required for selling online across states; US: sales-tax collection rules vary by state).',
            'Category licences checked (India: FSSAI for food, cosmetics rules for beauty, BIS for many electronics; US: FDA rules for food and cosmetics).',
            'Labels show legally required details (ingredients, net quantity, MRP in India, manufacturer, expiry, customer-care contact).',
            'Trademark search and filing for the brand name in your classes before spending on branding.',
            'Store live on a hosted platform with payment gateway, COD rules and clear return policy.',
            'Shipping partner or aggregator integrated, with pin-code serviceability checks.',
            'Product liability insurance and a simple supplier contract (specs, quality checks, MOQ, payment terms).'
          ]
        },
        {
          type: 'case', company: 'Warby Parker', year: '2010–2011', title: 'A launch built on a clear price and a try-at-home promise',
          situation: `Four Wharton MBA students saw that prescription glasses were expensive and hard to buy online because people want to try frames on. They received a $2,500 seed investment through a university venture programme.`,
          decision: `They launched in February 2010 with a simple promise: stylish glasses for $95, sold online, plus Home Try-On — choose five frames, try them at home free for five days. Coverage in Vogue and GQ came the same month.`,
          outcome: `NextShark reports that within four weeks it sold out its 15 available styles and built a waitlist of about 20,000 customers. In 2011 it shipped more than 100,000 pairs of glasses and had around 60 employees. Home Try-On remained part of the model until the end of 2025, by which time stores generated most of its revenue.`,
          lesson: `Remove the main reason people do not buy online (here: "I need to try it on") and make the price instantly understandable. A sharp launch offer does more than a big range.`
        },
        {
          type: 'case', company: 'Gymshark', year: '2012–2013', title: 'From a garage to a sold-out trade-show stand',
          situation: `Two school friends, Ben Francis and Lewis Morgan, started Gymshark in 2012 while at university, first drop-shipping bodybuilding supplements. They saw that gym-goers wanted better-fitting, more stylish gym wear.`,
          decision: `In 2013 Francis began making apparel in his parents' garage on a made-to-order basis, using a sewing machine and screen printer bought with £1,000 of savings. They took a stand at the BodyPower fitness expo.`,
          outcome: `They sold out of stock on the first day of the show, and afterwards a tracksuit went viral on Facebook, reportedly generating £30,000 of sales within 30 minutes. When revenue reached £250,000 both founders left university to work on it full time.`,
          lesson: `Start with made-to-order or small batches, go where the community already gathers, and let early buyers become your marketing.`
        },
        {
          type: 'cycle', title: 'The first-100-customers loop', center: 'Learn fast',
          steps: [
            { label: 'Reach a tight niche', desc: 'One community, creator audience or city where the problem is felt most.' },
            { label: 'Sell by hand', desc: 'DMs, WhatsApp, events, a marketplace listing. Founder answers every question.' },
            { label: 'Deliver delight', desc: 'Handwritten note, fast replies, easy returns. Early buyers forgive flaws if they feel heard.' },
            { label: 'Ask for feedback and reviews', desc: 'Call buyers; collect photos, reviews and the exact words they use.' },
            { label: 'Fix and refine', desc: 'Change the formula, pack or message before buying more stock.' }
          ]
        },
        {
          type: 'interactive', widget: 'funnel', title: 'Work out how many visitors your first 100 orders need',
          note: 'Set landing-page visits and stage conversions (view product, add to cart, checkout, pay). Try a 1% vs 3% final conversion and see how much traffic — and ad spend — the first 100 orders require.'
        },
        {
          type: 'questions', title: 'Ask before you place your first production order',
          items: [
            { q: 'What is the smallest batch the manufacturer will run, and what does it cost per unit at that size?', why: 'MOQ decides how much cash you lock up before learning anything.' },
            { q: 'Which licences and labels does this category legally need where we sell?', why: 'Missing food, cosmetics or electronics compliance can force a recall or delisting.' },
            { q: 'Is our brand name free to trademark?', why: 'Rebranding after launch wastes every rupee spent on awareness.' },
            { q: 'What will we do if the first 500 units do not sell in 90 days?', why: 'A plan for slow stock (bundles, sampling, marketplaces) avoids panic discounting.' },
            { q: 'Who exactly are the first 100 customers and where do they gather?', why: 'Naming the niche makes early marketing cheap and focused.' },
            { q: 'How will we know we have product-market fit?', why: 'Set a target in advance (e.g. 30% repeat within 90 days, 4.3+ ratings) so you do not scale on hope.' }
          ]
        }
      ],
      terms: [
        { term: 'Hero product', def: `The single product a brand launches and leads with, which defines what it is known for.` },
        { term: 'MOQ (minimum order quantity)', def: `The smallest production run a manufacturer accepts. Lower MOQ means less cash locked in stock.` },
        { term: 'White-label', def: `A ready-made product made by a manufacturer and sold under your brand with little or no change.` },
        { term: 'Contract manufacturing', def: `A third party produces your product to your formula and specification.` },
        { term: 'Product-market fit (consumer)', def: `Strong evidence that a defined group buys, repeats and recommends the product without heavy discounts.` },
        { term: 'Made-to-order', def: `Producing items only after an order is placed, which avoids inventory risk at the cost of slower delivery.` }
      ],
      quiz: [
        { q: "Why launch with one hero product rather than a range of ten?", options: ["Marketplaces only allow one product","It is legally required","It limits cash in inventory and makes the message and learning clearer","It always gives higher gross margin"], answer: 2, explain: "A range multiplies stock, cash and confusion before you know what works." },
        { q: "Your landing page converts 2% of visitors into orders. How many visitors do you need for 100 orders?", options: ["2,000","5,000","10,000","20,000"], answer: 1, explain: "100 ÷ 2% = 5,000 visitors." },
        { q: "What problem did Warby Parker's Home Try-On solve?", options: ["High shipping costs","Payment failures","Lack of prescription data","Customers' need to try frames before buying online"], answer: 3, explain: "It removed the biggest barrier to buying glasses online." },
        { q: "Which manufacturing route gives the lowest upfront cash but the least differentiation?", options: ["White-label","Contract manufacturing to your formula","Own plant","Made-to-order in a garage"], answer: 0, explain: "White-label is fast and cheap but rivals can buy the same product." },
        { q: "A manufacturer's MOQ is 3,000 units at ₹120. You expect to sell 250 units a month. How many months of stock will you hold?", options: ["6","10","12","25"], answer: 2, explain: "3,000 ÷ 250 = 12 months, with ₹3.6 lakh tied up — negotiate a smaller first batch or a higher price for a lower MOQ." }
      ],
      challenge: {
        title: 'Plan the launch of a protein snack',
        prompt: `<p>You will launch a high-protein bar. A white-label supplier offers an existing recipe at ₹38/bar, MOQ 2,000. A contract manufacturer can make your own recipe at ₹30/bar but with an MOQ of 10,000 and a ₹1.5 lakh trial fee. You plan to sell boxes of 6 bars at ₹540 (₹90/bar). You have ₹6 lakh in total for stock and launch marketing. (Illustrative.)</p><p>Compare cash needs, choose a route for the first 90 days and design a plan for the first 100 customers.</p>`,
        hints: ['Compute cash locked for each option: MOQ × unit cost (+ trial fee).', 'Ask what you learn in 90 days, and how much is left for marketing.'],
        model: `<p><b>Cash locked in stock:</b></p><ul><li>White-label: 2,000 × ₹38 = <b>₹76,000</b>.</li><li>Contract: 10,000 × ₹30 + ₹1.5 lakh = <b>₹4.5 lakh</b>, leaving only ₹1.5 lakh for marketing, and 10,000 bars = 1,667 boxes to sell before expiry.</li></ul><p><b>Gross margin per bar:</b> white-label ₹90 − ₹38 = ₹52 (58%); contract ₹90 − ₹30 = ₹60 (67%).</p><p><b>Choice for the first 90 days:</b> white-label. It keeps ₹5.2 lakh for testing channels and leaves room to change flavour or positioning. Move to your own recipe once 60-day repeat proves demand.</p><p><b>First 100 customers:</b> sample boxes at two local gyms and running clubs; 10 micro-creators who actually train; a marketplace and quick-commerce listing in one city; a WhatsApp group for buyers with a reorder reminder. Target: 100 orders, 4.3+ rating, 30% repeat within 60 days.</p>`
      },
      takeaways: [
        'Launch one hero product in a small batch; keep cash for learning.',
        'White-label to test, contract manufacture to differentiate, own manufacturing when scale or process is the moat.',
        'Get the boring basics right early: entity, tax, licences, labels, trademark.',
        'Win the first 100 by hand in a tight niche, and judge fit by repeat and reviews, not launch-day sales.'
      ],
      sources: [
        { title: 'Wikipedia — Warby Parker (history, Home Try-On, retail model)', url: 'https://en.wikipedia.org/wiki/Warby_Parker' },
        { title: 'Wikipedia — Gymshark (founding and early growth)', url: 'https://en.wikipedia.org/wiki/Gymshark' },
        { title: 'NextShark — How Warby Parker\'s founders took $2,500 and built a $1.2 billion company', url: 'https://nextshark.com/warby-parker-co-founders' },
        { title: 'Warby Parker Q4 and full-year 2024 results (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/1504776/000150477625000007/warbyparkerincearningsrele.htm' },
        { title: 'Amazon Shipping India — RTO causes and COD controls', url: 'https://shipping.amazon.in/blog/what-is-rto-how-to-reduce-return-to-origin' }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'pb-d2c-4',
      title: 'Building the D2C machine: operations, stack, suppliers and go-to-market',
      level: 'Intermediate',
      minutes: 17,
      hook: `Behind every smooth "order delivered" message is a chain of suppliers, warehouses, couriers and software — and a single weak link shows up as a one-star review.`,
      eli5: `Think of a D2C brand as a relay race. The factory hands the product to the warehouse, the warehouse to the courier, the courier to the customer, and the website and messages keep everyone in step. You do not have to run every leg yourself, but you must pick good runners and watch the baton.`,
      blocks: [
        {
          type: 'map', title: 'The D2C operating stack', center: 'D2C stack',
          branches: [
            { label: 'Storefront', desc: 'Hosted e-commerce platform (Shopify-style) or a custom app, with fast mobile pages and a simple checkout.', children: ['Site/app', 'Checkout', 'Reviews'] },
            { label: 'Payments', desc: 'Gateway for cards, UPI and wallets; COD rules and fraud or RTO scoring.', children: ['Gateway', 'COD controls'] },
            { label: 'Fulfilment', desc: 'Own warehouse or third-party logistics (3PL); courier aggregator for rates and pin-code coverage.', children: ['3PL', 'Courier mix', 'Packaging'] },
            { label: 'Marketplaces and q-commerce', desc: 'Seller accounts, catalogue, pricing, ads and stock feeds for Amazon, Flipkart, Nykaa, Blinkit, Zepto and others.', children: ['Listings', 'Platform ads', 'Dark-store stock'] },
            { label: 'Retention', desc: 'Email, SMS and WhatsApp automation, loyalty and subscriptions.', children: ['Flows', 'Segments', 'Loyalty'] },
            { label: 'Data and finance', desc: 'One view of orders, CAC by channel, contribution margin and inventory; inventory and accounts software.', children: ['Dashboards', 'Inventory', 'GST/tax'] }
          ]
        },
        {
          type: 'flow', title: 'Order-to-cash: where things go wrong',
          steps: [
            { label: 'Order placed', desc: 'Check address quality and pin-code serviceability at checkout.' },
            { label: 'Is this a high-risk COD order?', kind: 'decision', desc: 'First-time buyer, high value, high-RTO pin code.', branches: [ { label: 'Yes', to: 'Confirm by WhatsApp/OTP or offer a prepaid incentive' }, { label: 'No', to: 'Ship within 24 hours' } ] },
            { label: 'Pick, pack and ship', desc: 'Right-size packaging; weight and size slabs drive courier cost.' },
            { label: 'Delivery attempt', desc: 'Act on non-delivery reports within 24 hours and arrange a re-attempt.' },
            { label: 'Delivered or returned', desc: 'Tag every RTO and return with a reason code; review weekly by pin code, product and courier.' },
            { label: 'Cash collected', desc: 'COD remittance and marketplace payouts arrive days or weeks later — plan working capital for the gap.' }
          ]
        },
        {
          type: 'case', company: 'boAt (Imagine Marketing)', year: '2022–2025', title: 'The hidden risks of an outsourced supply chain',
          situation: `boAt grew into a leading Indian consumer-electronics brand by designing products and outsourcing much of the production to contract manufacturers, sourcing a significant share of stock-in-trade from China, Vietnam and Hong Kong, and relying on third-party logistics partners for warehousing and distribution.`,
          decision: `To gain more control it built a manufacturing joint venture (Califonix), while continuing to prepay suppliers and build inventory ahead of demand peaks such as sale events. Its IPO plan earmarked ₹225 crore of proceeds for working capital.`,
          outcome: `The 2025 updated draft prospectus flagged residual dependence on contract manufacturers, foreign-exchange exposure, inventory and obsolescence risk, and past logistics problems including delivery delays and a warehouse fire. FY25 EBITDA margin was 4.64%.`,
          lesson: `Outsourcing manufacturing and logistics makes a brand fast and asset-light, but working capital, supplier concentration and logistics failures become the brand's problems. Build dual suppliers and buffer cash early.`
        },
        {
          type: 'case', company: 'Honasa Consumer (Mamaearth)', year: '2024', title: 'Re-wiring offline distribution mid-flight',
          situation: `Honasa, parent of Mamaearth, The Derma Co, Aqualogica, Dr Sheth's and BBlunt, grew online and then pushed into general trade (kirana and chemist shops) through a two-layer chain of super-stockists and sub-distributors.`,
          decision: `In 2024 it launched "Project Neev", replacing the two layers in the top 50 cities with direct distributors to improve control and margins, and took back excess stock sitting in the old channel.`,
          outcome: `The inventory correction cut Q2 FY25 revenue by about ₹63 crore and the company reported a quarterly loss of about ₹19 crore. Its shares fell more than 20% in a day and slipped below the ₹324 IPO price. Reporting also pointed to muted demand for the core Mamaearth brand, too many SKUs and a focus on pushing stock into distribution rather than retail sell-through.`,
          lesson: `When D2C brands move offline, judge success by sell-through to shoppers, not by stock pushed to distributors. Primary sales that outrun real demand come back as returns.`
        },
        {
          type: 'compare', title: 'Fulfilment options', headers: ['', 'Founder ships from home/office', 'Third-party logistics (3PL)', 'Marketplace fulfilment', 'Own warehouse'],
          rows: [
            ['Good for', 'First few hundred orders', 'Growing brands, multi-channel', 'Marketplace-heavy sellers', 'Large, stable volume'],
            ['Fixed cost', 'Very low', 'Low–medium', 'Low (fees per unit)', 'High'],
            ['Control', 'Full', 'Shared, by SLA', 'Platform rules', 'Full'],
            ['Watch out for', 'Founder time; errors', 'Storage fees, SLA breaches', 'Fees, stock limits, payout cycles', 'Fixed cost when growth slows']
          ]
        },
        {
          type: 'pyramid', title: 'Team build order for a D2C brand',
          levels: [
            { label: 'Specialists at scale', note: 'Year 3+', desc: 'Retail/offline sales, category managers, data analysts, international.' },
            { label: 'Channel owners', note: 'Year 2', desc: 'Marketplace and quick-commerce manager, retention/CRM manager, creative lead.' },
            { label: 'Growth and ops core', note: 'Year 1', desc: 'Performance marketer (in-house or agency), operations/supply-chain lead, customer support.' },
            { label: 'Founders', note: 'Day 0', desc: 'Product and brand owner + growth/operations owner. Founders do sales and support themselves at first.' }
          ]
        },
        {
          type: 'interactive', widget: 'working-capital', title: 'Feel the cash gap',
          note: 'Set inventory days high (stock bought months ahead), receivable days for COD and marketplace payouts, and payable days to suppliers. See how a 90-day cash conversion cycle turns fast growth into a cash shortage.'
        },
        {
          type: 'questions', title: 'Ask before you lock in suppliers and partners',
          items: [
            { q: 'Do we have a second supplier for our top three products?', why: 'One supplier failure can stop sales for months.' },
            { q: 'What are the 3PL\'s storage fees, SLAs and penalties for errors?', why: 'Hidden storage and handling fees quietly eat contribution margin.' },
            { q: 'How many days pass between paying for stock and receiving cash from customers or marketplaces?', why: 'This cash conversion cycle sets how much funding growth needs.' },
            { q: 'Are we measuring sell-through to shoppers, or only stock shipped to distributors?', why: 'Pushing stock into channels inflates revenue until it comes back as returns (Honasa 2024).' },
            { q: 'Which tasks should the founders still do personally?', why: 'Early on, founders handling support and sales gives the fastest learning.' },
            { q: 'What happens to our tech stack if order volume grows 5x?', why: 'Checkout, inventory sync and support tools often break during sale events.' }
          ]
        }
      ],
      terms: [
        { term: '3PL (third-party logistics)', def: `An outside company that stores, packs and ships your orders for fees per unit and per storage space.` },
        { term: 'NDR (non-delivery report)', def: `A courier notice that a delivery attempt failed; fast follow-up reduces RTO.` },
        { term: 'Sell-through', def: `The share of stock that actually sells to end customers, as opposed to stock shipped to distributors or retailers.` },
        { term: 'Primary vs secondary sales', def: `Primary: brand to distributor. Secondary: distributor to retailer. Neither equals sales to the shopper.` },
        { term: 'Cash conversion cycle', def: `Days of inventory + days to collect cash − days you take to pay suppliers.` },
        { term: 'Super-stockist', def: `A large intermediary that buys from a brand and supplies smaller distributors in a region.` }
      ],
      quiz: [
        { q: "Which metric best shows that an offline push is healthy?", options: ["Stock shipped to distributors","Sell-through to shoppers","Number of distributors signed","Marketing spend"], answer: 1, explain: "Only real shopper sales prove demand; stock sitting in the channel can return." },
        { q: "Inventory 75 days, receivables 20 days, payables 30 days. What is the cash conversion cycle?", options: ["45 days","125 days","95 days","65 days"], answer: 3, explain: "75 + 20 − 30 = 65 days." },
        { q: "Which order is the best candidate for a WhatsApp confirmation before shipping?", options: ["A first-time, high-value COD order to a high-RTO pin code","A prepaid repeat order","A marketplace order","An order from an employee"], answer: 0, explain: "High-risk COD orders are where confirmation reduces RTO most." },
        { q: "What was the main operating lesson of Honasa's Project Neev quarter?", options: ["Never sell offline","Online channels collapsed","Excess stock in old distribution layers had to be taken back, hitting revenue","IPO money ran out"], answer: 2, explain: "The inventory correction cut about ₹63 crore of quarterly revenue." },
        { q: "Why might a growing brand choose a 3PL over its own warehouse?", options: ["Lower fixed cost and flexibility while volume is uncertain","3PLs are always cheaper per order at any volume","Marketplaces require it","It avoids GST"], answer: 0, explain: "A 3PL turns fixed warehouse cost into variable cost while growth is uncertain." }
      ],
      challenge: {
        title: 'Choose a fulfilment set-up for a growing brand',
        prompt: `<p>Your home-fragrance brand ships 3,000 orders a month, growing 8% a month. The founders pack orders in a rented room (₹40,000/month rent and staff, error rate 3%). A 3PL quotes ₹28 per order for pick-pack plus ₹15,000/month storage, with a 0.5% error SLA. An error costs you about ₹250 (reshipping and goodwill). (Illustrative.)</p><p>Compare monthly cost now, and after 6 months of 8% growth. Recommend a plan.</p>`,
        hints: ['Include error cost: orders × error rate × ₹250.', 'Orders after 6 months ≈ 3,000 × 1.08⁶ ≈ 4,760.'],
        model: `<p><b>Now (3,000 orders):</b></p><ul><li>In-house: ₹40,000 + errors 3,000 × 3% × ₹250 = ₹22,500 → <b>₹62,500</b>.</li><li>3PL: 3,000 × ₹28 = ₹84,000 + ₹15,000 + errors 3,000 × 0.5% × ₹250 = ₹3,750 → <b>₹1,02,750</b>.</li></ul><p><b>In 6 months (≈4,760 orders):</b> in-house needs more people — assume ₹70,000 — plus errors 4,760 × 3% × ₹250 = ₹35,700 → ≈₹1,05,700. 3PL: 4,760 × ₹28 = ₹1,33,280 + ₹15,000 + ₹5,950 → ≈₹1,54,230.</p><p><b>Reading:</b> in-house is cheaper on paper, but founders' time and the 3% error rate (hurting reviews and repeat) are not priced in, and growth will soon need a second site.</p><p><b>Recommendation:</b> fix the error rate in-house now (checklists, barcode scanning) and negotiate the 3PL rate down (₹22–24 at 5,000 orders) for a switch in 4–6 months, ideally before the festive peak. Move sale-event overflow to the 3PL first as a trial.</p>`
      },
      takeaways: [
        'The D2C stack is storefront, payments, fulfilment, marketplaces, retention and data — integrate them early.',
        'COD controls, NDR follow-up and RTO reason codes are core operations in India, not afterthoughts.',
        'Outsourcing keeps you light but makes supplier concentration and working capital your risk (boAt).',
        'Offline expansion must be judged on sell-through, not stock pushed into distribution (Honasa).'
      ],
      sources: [
        { title: 'MediaNama — boAt updated DRHP: risks and use of proceeds (Oct 2025)', url: 'https://www.medianama.com/2025/10/223-boat-ipo-rs-1500-crore-offer-sebi-filing-drhp/' },
        { title: 'YourStory — How distribution woes and inventory correction hit Mamaearth (Nov 2024)', url: 'https://yourstory.com/2024/11/distribution-woes-inventory-correction-mamaearth-honasa-consumer' },
        { title: 'Amazon Shipping India — What is RTO and how to reduce it', url: 'https://shipping.amazon.in/blog/what-is-rto-how-to-reduce-return-to-origin' },
        { title: 'D2C Insider — BRND.ME quick commerce crosses 10% of revenues (Jan 2026)', url: 'https://pulse.d2cinsider.com/brnd-me-sees-quick-commerce-cross-10-of-revenues-as-instant-delivery-reshapes-its-d2c-channel-mix/' }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'pb-d2c-5',
      title: 'Revenue and pricing for D2C: AOV, bundles, subscriptions and channel prices',
      level: 'Intermediate',
      minutes: 16,
      hook: `In D2C, the price on the product page matters less than the price of the whole basket — because shipping, CAC and returns are paid per order, not per unit.`,
      eli5: `If you post one sweet in a box, the postage costs more than the sweet. If you post ten sweets in the same box, the postage barely matters. D2C pricing is mostly about getting people to put more sweets in each box and to order again without needing another advert.`,
      blocks: [
        {
          type: 'text', title: 'Revenue models in D2C',
          html: `<p>You learned cost-plus, competitor and value-based pricing in <a href="#/lesson/pricing-1">Pricing 1</a> and subscription models in <a href="#/lesson/pricing-4">Pricing 4</a>. D2C brands combine them in a few typical ways: <b>one-off product sales</b>, <b>bundles and kits</b>, <b>subscriptions or auto-replenishment</b>, <b>hardware plus membership</b> (Peloton), and <b>services attached to products</b> (such as Warby Parker's in-store eye exams). The goal is to raise <span class="hl">contribution per order</span> and <span class="hl">orders per customer</span>.</p>`
        },
        {
          type: 'map', title: 'Where D2C revenue comes from', center: 'D2C revenue',
          branches: [
            { label: 'One-off product sales', desc: 'The entry point. Usually the most expensive revenue, because each first order carries CAC.', children: ['Hero SKU', 'Trial size'] },
            { label: 'Bundles and kits', desc: 'Raise AOV and spread shipping and CAC over more units.', children: ['Routines', 'Gift sets'] },
            { label: 'Subscriptions', desc: 'Committed repeat orders for consumables; small discount in return for predictability.', children: ['Auto-replenish', 'Memberships'] },
            { label: 'Hardware plus membership', desc: 'Device sold once, content or service billed monthly (Peloton). Depends on continued use.', children: ['Device', 'Monthly fee'] },
            { label: 'Services attached', desc: 'Eye exams, consultations, installation — add value and footfall to stores.', children: ['Exams', 'Fittings'] },
            { label: 'Channel revenue', desc: 'Marketplace, quick-commerce and wholesale sales at lower margin per unit but lower CAC.', children: ['Marketplaces', 'Q-commerce', 'Retail'] }
          ]
        },
        {
          type: 'framework', name: 'D2C pricing toolkit', when: 'When setting launch prices, building bundles or adding a new channel',
          steps: [
            { label: 'Anchor on value and the alternative', desc: 'Price against what the customer would otherwise buy (salon visit, optician, pharmacy brand), not against your cost.' },
            { label: 'Design the basket', desc: 'Hero product + kit + refill. Bundles raise AOV and spread shipping and CAC over more units.' },
            { label: 'Free-shipping threshold', desc: 'Set it a little above your typical single-item order so many customers add one more item.' },
            { label: 'Subscription or auto-replenish', desc: 'Small discount for committed repeat orders; only works for consumables with a natural cycle.' },
            { label: 'Prepaid incentives (India)', desc: 'A small prepaid discount or COD fee shifts orders away from COD where RTO is costly — size it below the RTO saving.' },
            { label: 'Channel price architecture', desc: 'Keep a consistent consumer price across site, marketplaces and stores; vary pack sizes and bundles by channel instead.' }
          ]
        },
        {
          type: 'formula', name: 'Discount break-even volume', expr: 'Volume increase needed = Old margin ÷ (Old margin − Discount) − 1',
          explain: 'Margins and discount as a share of the original price. Shows how many more units a discount must sell just to earn the same gross profit.',
          example: 'Gross margin 60%, discount 20%: 0.60 ÷ (0.60 − 0.20) − 1 = 0.5 → you must sell 50% more units to stand still. At a 30% discount you need 100% more.'
        },
        {
          type: 'compare', title: 'Worked example: one serum, three ways to sell it (illustrative)', headers: ['', 'Single bottle', 'Bundle of 2', 'Subscription (every 2 months)'],
          rows: [
            ['Price paid', '₹599', '₹999', '₹509 per order (15% off)'],
            ['Product cost', '₹120', '₹240', '₹120'],
            ['Shipping and packing', '₹70', '₹70 (one parcel)', '₹70'],
            ['Payment fee (2%)', '₹12', '₹20', '₹10'],
            ['Contribution before ads', '₹397 (66%)', '₹669 (67%)', '₹309 (61%)'],
            ['Why use it', 'Entry offer', 'Raises AOV; ₹335 per bottle', 'Six orders a year with no new CAC']
          ]
        },
        {
          type: 'case', company: 'Warby Parker', year: '2010–2024', title: 'A simple price point that grows into a high-value customer',
          situation: `Warby Parker entered US eyewear selling glasses for $95, far below what many shoppers were used to paying at opticians. It kept prices low by designing its own frames and working directly with suppliers, avoiding licensing fees and extra markups. A low, clear price made buying online feel safe.`,
          decision: `Over time it added higher-priced lens options, contact lenses (from 2019) and eye exams, while keeping the entry price easy to understand and selling through stores as well as online.`,
          outcome: `In 2024 it reported net revenue of $771.3 million (up 15.2%), a 55.3% gross margin helped by faster growth in glasses — its highest-margin category — 2.51 million active customers and average revenue per customer of $307.`,
          lesson: `A memorable entry price wins the first order; add-ons, upgrades and adjacent products raise revenue per customer without changing the headline price.`
        },
        {
          type: 'case', company: 'Peloton', year: '2020–2025', title: 'Hardware plus subscription — and what happens when demand fades',
          situation: `Peloton sells connected bikes and treadmills plus a monthly membership for classes. Demand surged during pandemic lockdowns, when gyms were closed; afterwards many users returned to gyms or free alternatives.`,
          decision: `The company restructured repeatedly: in 2024 it announced a cut of about 15% of its workforce, and in August 2025 a further 6% cut targeting at least $100 million of run-rate savings, saying operating expenses remained too high.`,
          outcome: `In its fiscal fourth quarter of 2025 revenue fell 6% to $606.9 million and its member base shrank about 6% to 6 million, although it posted a quarterly net profit of $21.6 million after cost cuts.`,
          lesson: `Subscriptions on top of hardware create recurring revenue only while members keep using the product. Price and cost plans built on a demand spike must be stress-tested for normal times.`
        },
        {
          type: 'case', company: 'BRND.ME (formerly Mensa Brands)', year: '2024–2026', title: 'Different packs for different channels',
          situation: `BRND.ME, a group that owns several consumer brands in health, wellness and lifestyle, saw instant-delivery platforms (Blinkit, Swiggy Instamart, Zepto, BigBasket Now) grow quickly for impulse and top-up buying.`,
          decision: `Instead of listing its standard D2C packs, it designed smaller pack sizes, single-use SKUs and channel-specific assortments for quick commerce, piloting items such as single protein bars before scaling.`,
          outcome: `The company said such SKUs performed two to three times better on instant-delivery platforms, quick commerce passed 10% of group net revenue, and two of its brands earned close to 30% of sales there.`,
          lesson: `Price architecture is also pack architecture: a smaller, lower-priced pack can suit a channel without discounting the core product.`
        },
        {
          type: 'cycle', title: 'The AOV and repeat loop', center: 'Revenue per customer',
          steps: [
            { label: 'Entry offer', desc: 'Hero product or trial size at an easy price.' },
            { label: 'Basket builders', desc: 'Bundles, threshold for free shipping, "complete the routine".' },
            { label: 'Post-purchase upsell', desc: 'One-click add-on after payment, refill reminders timed to usage.' },
            { label: 'Subscription or loyalty', desc: 'Commitment discount or points for the next order.' },
            { label: 'New product for existing customers', desc: 'Adjacent product launched to the base first, at no new CAC.' }
          ]
        },
        {
          type: 'interactive', widget: 'pricing-elasticity', title: 'Test a price change',
          note: 'Set your current price, volume and unit cost, then try different elasticities. See when a 10% price rise still raises profit, and when a discount only buys volume at a loss.'
        },
        {
          type: 'questions', title: 'Ask before you change prices or add a discount',
          items: [
            { q: 'What will the customer compare our price with?', why: 'The alternative sets willingness to pay more than our cost does.' },
            { q: 'How many more units must this discount sell to break even?', why: 'Deep discounts usually need impossible volume increases (50% more units for 20% off at 60% margin).' },
            { q: 'Will the same product be cheaper on a marketplace than on our site?', why: 'Channel price gaps train customers to skip your site and erode trust.' },
            { q: 'Is our free-shipping threshold just above the typical single-item order?', why: 'A well-placed threshold raises AOV; a badly placed one just gives away margin.' },
            { q: 'Does this product have a natural reorder cycle for subscription?', why: 'Subscriptions on non-consumables lead to cancellations and refund costs.' },
            { q: 'Does a smaller pack for quick commerce cannibalise our main pack or reach new occasions?', why: 'Channel packs should open new uses, not just cheapen existing buyers.' }
          ]
        }
      ],
      terms: [
        { term: 'Free-shipping threshold', def: `The basket value above which shipping is free, used to nudge customers to add items.` },
        { term: 'Bundle', def: `Two or more products sold together at a price below their separate prices, used to raise AOV.` },
        { term: 'Subscription (auto-replenishment)', def: `Recurring orders at set intervals, usually with a small discount, for consumable products.` },
        { term: 'Price architecture', def: `The planned set of prices, pack sizes and bundles across products and channels.` },
        { term: 'Revenue per customer', def: `Total revenue from a customer over a period; Warby Parker reports average revenue per customer.` },
        { term: 'Post-purchase upsell', def: `An offer shown after payment to add a product to the same shipment.` }
      ],
      quiz: [
        { q: "Gross margin is 60%. You offer 20% off. By how much must unit sales rise to keep gross profit the same?", options: ["20%","33%","50%","100%"], answer: 2, explain: "0.60 ÷ 0.40 − 1 = 0.5 → 50% more units." },
        { q: "In the worked example, what is the contribution per bottle in the bundle of 2?", options: ["₹335","₹309","₹397","₹669"], answer: 0, explain: "₹669 ÷ 2 ≈ ₹335 per bottle, versus ₹397 for a single — but one parcel and one CAC serve two bottles." },
        { q: "Your typical single-item order is ₹549. Which free-shipping threshold is most sensible?", options: ["₹299","₹699","₹549","₹1,999"], answer: 1, explain: "Slightly above the typical order nudges many customers to add one item; ₹1,999 is too far for most." },
        { q: "What did BRND.ME change for quick commerce?", options: ["Cut prices on all products by half","Sold only subscriptions","Stopped selling online","Launched smaller packs, single-use SKUs and channel-specific assortments"], answer: 3, explain: "It adapted pack architecture to instant, impulse-driven buying." },
        { q: "What is the main risk in Peloton-style hardware-plus-subscription revenue?", options: ["Subscriptions cannot be priced","Recurring revenue depends on members continuing to use the product after demand spikes fade","Hardware has no gross margin","Customers cannot pay monthly"], answer: 1, explain: "Membership revenue shrinks when usage drops, as Peloton's 2025 results showed." }
      ],
      challenge: {
        title: 'Design the price ladder for a coffee brand',
        prompt: `<p>A specialty coffee brand sells 250 g bags at ₹650. Product cost ₹210 per bag, shipping and packing ₹75 per parcel, payment fee 2%. The typical order is one bag. You are considering: (a) a 2-bag bundle at ₹1,199; (b) a monthly subscription of one bag at 10% off; (c) a site-wide 25% off sale. (Illustrative.)</p><p>Compute contribution before ads for a single bag, (a) and (b); compute the volume increase needed for (c) to break even on gross margin; recommend a price ladder.</p>`,
        hints: ['Contribution = price − product cost − shipping − 2% of price.', 'Gross margin per bag = (650 − 210) ÷ 650 ≈ 68%.'],
        model: `<p><b>Single bag:</b> ₹650 − ₹210 − ₹75 − ₹13 = <b>₹352</b>.</p><p><b>(a) Bundle:</b> ₹1,199 − ₹420 − ₹75 − ₹24 = <b>₹680</b> per parcel (₹340 per bag), almost double the single-bag contribution per order.</p><p><b>(b) Subscription:</b> price ₹585 − ₹210 − ₹75 − ₹12 = <b>₹288</b> per order, but about 12 orders a year with no new CAC = ₹3,456 of annual contribution if the subscriber stays.</p><p><b>(c) 25% off:</b> gross margin 68%; 0.68 ÷ (0.68 − 0.25) − 1 ≈ <b>58% more bags</b> just to stand still — before extra shipping.</p><p><b>Recommendation:</b> entry single bag at ₹650; free shipping above ₹1,100 to push the 2-bag bundle; subscription at 10% off as the default for repeat buyers; replace site-wide sales with bundle offers and a subscriber-only early access. Keep the same prices on marketplaces and use a 100 g trial pack for quick commerce.</p>`
      },
      takeaways: [
        'Price the basket: bundles and thresholds spread shipping and CAC over more units.',
        'Discounts need large volume increases to pay off; prefer bundles and value-adds.',
        'Subscriptions and memberships work only when usage naturally repeats (Peloton\'s lesson).',
        'Keep consumer prices consistent across channels and vary packs by channel instead (BRND.ME).'
      ],
      sources: [
        { title: 'Warby Parker Q4 and full-year 2024 results (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/1504776/000150477625000007/warbyparkerincearningsrele.htm' },
        { title: 'Retail Dive — Peloton to shrink workforce by 6% (Aug 2025)', url: 'https://www.retaildive.com/news/peloton-layoffs-cost-cutting-effort-q4/757158' },
        { title: 'D2C Insider — BRND.ME sees quick commerce cross 10% of revenues (Jan 2026)', url: 'https://pulse.d2cinsider.com/brnd-me-sees-quick-commerce-cross-10-of-revenues-as-instant-delivery-reshapes-its-d2c-channel-mix/' },
        { title: 'Wikipedia — Warby Parker (pricing and product history)', url: 'https://en.wikipedia.org/wiki/Warby_Parker' },
        { title: 'NextShark — How Warby Parker\'s founders took $2,500 and built a $1.2 billion company', url: 'https://nextshark.com/warby-parker-co-founders' }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'pb-d2c-6',
      title: 'Expenses and unit economics: contribution margin per order, CAC and payback',
      level: 'Advanced',
      minutes: 18,
      hook: `A 70% gross margin can become a loss on every order once shipping, payment fees, returns, RTO and ads are counted — and many brands only discover this after raising money.`,
      eli5: `Imagine selling a ₹100 toy that costs ₹30 to make. Feels like ₹70 profit. But the box and postage cost ₹15, the card fee ₹2, one in ten toys comes back, and you paid ₹60 in adverts to find the buyer. Suddenly you lose money on that first sale — and you only win if the same child comes back to buy again without a new advert.`,
      blocks: [
        {
          type: 'pyramid', title: 'The D2C margin ladder (from top line to what is left)',
          levels: [
            { label: 'CM3: after all marketing', note: 'Pays fixed costs', desc: 'Contribution after acquisition and retention marketing. Must cover salaries, rent and software, then profit.' },
            { label: 'CM2: after fulfilment, fees, returns', note: 'Before ads', desc: 'Subtract packing, shipping, payment and COD fees, returns and RTO costs.' },
            { label: 'CM1: gross margin', desc: 'Net revenue minus product cost (COGS), after discounts.' },
            { label: 'Net revenue', desc: 'What the customer paid, minus discounts and taxes such as GST.' }
          ]
        },
        {
          type: 'formula', name: 'Contribution margin per order', expr: 'CM2 = Net AOV − COGS − Pick/pack − Shipping − Payment/COD fees − Returns − RTO cost;   CM3 = CM2 − Marketing per order',
          explain: 'RTO cost per delivered order = (RTO share of shipped orders ÷ delivered share) × cost per RTO. Marketing per order for a new customer is CAC.',
          example: 'Illustrative skincare order: net AOV ₹1,000 − COGS ₹280 − pick/pack ₹40 − shipping ₹70 − payment/COD fees ₹25 − returns ₹30 − RTO ₹25 = CM2 ₹530 (53%). With CAC ₹900, the first order loses ₹370.'
        },
        {
          type: 'compare', title: 'Worked example: does this customer pay back in 12 months? (illustrative)', headers: ['Line', 'Value', 'How it is calculated'],
          rows: [
            ['CM2 per order', '₹530', 'From the formula above'],
            ['CAC (new customer)', '₹900', 'Paid social + creators ÷ new customers'],
            ['First-order CM3', '−₹370', '₹530 − ₹900'],
            ['Repeat orders in 12 months', '0.7 per customer', '35% reorder × 2 extra orders each'],
            ['CM per repeat order', '₹500', '₹530 − ₹30 retention cost (email/WhatsApp, loyalty)'],
            ['12-month contribution', '₹880', '₹530 + 0.7 × ₹500'],
            ['12-month LTV:CAC', '0.98', '₹880 ÷ ₹900 — not paid back in a year'],
            ['After fixes', '1.40', 'CAC ₹700, repeat 45% × 2 = 0.9 → ₹530 + ₹450 = ₹980 ÷ ₹700']
          ]
        },
        {
          type: 'interactive', widget: 'd2c-margin', title: 'Build your own order waterfall',
          note: 'Start with AOV ₹1,000, COGS 28%, shipping ₹70, payment 2.5%, returns 3%, discount 0% and CAC ₹900. Then (1) raise AOV to ₹1,300 with a bundle, (2) cut CAC to ₹700, (3) add repeat orders — and watch which lever moves LTV:CAC the most.'
        },
        {
          type: 'callout', kind: 'insight', title: 'Why CAC rose after 2021',
          html: `<p>In April 2021 Apple began requiring apps to ask permission before tracking users across other apps and websites (App Tracking Transparency). Research summarised by UCLA Anderson found that revenue growth fell about 37% for e-commerce firms most dependent on Meta advertising, relative to firms with more diverse ad budgets, and concluded that starting a small e-commerce firm had become substantially more expensive. Practical response: diversify channels (Google, marketplaces, creators, quick commerce), invest in first-party data and retention, and judge marketing by blended contribution, not platform-reported ROAS.</p>`
        },
        {
          type: 'case', company: 'The Whole Truth', year: 'FY24–FY25', title: 'Fast growth, improving but still negative unit economics',
          situation: `The Whole Truth is an Indian clean-label food brand selling protein bars, peanut butter, dark chocolate, muesli and similar products, with product sales as its only revenue source.`,
          decision: `It scaled sales aggressively, spending heavily on raw materials and marketing as volumes grew.`,
          outcome: `Revenue from operations rose about 3.3x to ₹216 crore in FY25 from ₹65 crore. Materials were the largest cost at 53% of expenses (₹131 crore), advertising was ₹41 crore (16.5%), and marketplace charges and transport were about ₹9 crore each. The loss rose to ₹28 crore, but the company spent ₹1.15 to earn each rupee of revenue, down from ₹1.48 a year earlier.`,
          lesson: `Watch the cost-per-rupee trend, not just the loss: scale should push product, marketing and fulfilment costs down as a share of revenue. Food brands carry high material costs, so marketing efficiency decides profitability.`
        },
        {
          type: 'case', company: 'SUGAR Cosmetics', year: 'FY24–2026', title: 'When fixed costs from stores outrun demand',
          situation: `SUGAR, founded in 2015 by Vineeta Singh and Kaushik Mukherjee, sells make-up through its website, e-commerce platforms and physical stores. Its peak valuation was about ₹3,000 crore in 2022.`,
          decision: `It expanded aggressively offline, opening many exclusive stores.`,
          outcome: `FY25 operating revenue fell about 20% to ₹404 crore while net loss nearly doubled to ₹135 crore. An Economic Times report cited by Inc42 said it shut 30–40% of the physical stores it had opened because of per-store losses. A 2026 funding round valued it at roughly ₹550–600 crore, a 75–80% cut from its November 2024 valuation.`,
          lesson: `Stores turn variable costs into fixed ones (rent, staff). Each store needs its own contribution and payback test before a roll-out.`
        },
        {
          type: 'flow', title: 'Diagnose a loss-making D2C brand',
          steps: [
            { label: 'Is CM2 below about 40–50% of net revenue?', kind: 'decision', desc: 'If too little is left before ads, marketing can never make it profitable.', branches: [ { label: 'Yes', to: 'Fix COGS, AOV, shipping, RTO and returns first' }, { label: 'No', to: 'Check CAC and repeat' } ] },
            { label: 'Does 12-month contribution cover CAC?', kind: 'decision', desc: 'LTV:CAC on a 12-month cash basis, by channel and cohort.', branches: [ { label: 'Yes', to: 'Check fixed costs and cash cycle' }, { label: 'No', to: 'Cut CAC or raise repeat before scaling spend' } ] },
            { label: 'Are fixed costs growing faster than CM3?', desc: 'Team, stores, office and software can sink a brand with healthy unit economics.' },
            { label: 'Is cash trapped in stock?', desc: 'Slow-moving SKUs and over-ordering show up as cash shortages even when profit looks fine.' }
          ]
        },
        {
          type: 'questions', title: 'Ask before you scale ad spend',
          items: [
            { q: 'What is our contribution margin per order after shipping, fees, returns and RTO — not just gross margin?', why: 'Many brands see 60–70% gross margin but much lower contribution once fulfilment and ads are counted.' },
            { q: 'What is CAC for new customers only, by channel?', why: 'Blended CAC that includes repeat buyers flatters new-customer economics.' },
            { q: 'How many months until a cohort\'s contribution repays its CAC?', why: 'Payback sets how much cash growth consumes; beyond 12 months is risky for young brands.' },
            { q: 'What share of orders is COD, and what is our RTO cost per delivered order?', why: 'In India, RTO is often one of the largest hidden costs.' },
            { q: 'Which SKUs lose money after returns?', why: 'High-return items (sizes, shades) can drain profit from the whole range.' },
            { q: 'Are fixed costs per order falling as we grow?', why: 'If not, growth is adding complexity rather than leverage.' }
          ]
        }
      ],
      terms: [
        { term: 'CM1 / CM2 / CM3', def: `Layers of contribution margin: after product cost, after fulfilment and fees, and after marketing.` },
        { term: 'LTV:CAC', def: `Contribution a customer generates over a period divided by the cost of acquiring them; below 1 means the customer has not paid back.` },
        { term: 'Payback period', def: `Months until the cumulative contribution from a customer cohort equals its acquisition cost.` },
        { term: 'ROAS', def: `Return on ad spend: revenue attributed to ads ÷ ad spend. Ignores product, shipping and returns costs.` },
        { term: 'MER (marketing efficiency ratio)', def: `Total revenue ÷ total marketing spend across all channels; a blended check on platform-reported ROAS.` },
        { term: 'App Tracking Transparency (ATT)', def: `Apple's 2021 rule requiring apps to ask permission to track users across other apps and sites, which weakened ad targeting.` },
        { term: 'Cohort', def: `A group of customers acquired in the same period, tracked together over time.` }
      ],
      quiz: [
        { q: "Net AOV ₹800, COGS ₹240, shipping and packing ₹90, fees ₹20, returns and RTO ₹30. What is CM2?", options: ["₹320","₹560","₹450","₹420"], answer: 3, explain: "₹800 − 240 − 90 − 20 − 30 = ₹420 (52.5%)." },
        { q: "CM2 per order ₹420, CAC ₹600, and each customer places 0.5 extra orders in a year at the same CM2. What is 12-month LTV:CAC?", options: ["0.70","1.05","1.40","0.53"], answer: 1, explain: "₹420 + 0.5 × ₹420 = ₹630; ₹630 ÷ ₹600 = 1.05." },
        { q: "Why can a high ROAS still lose money?", options: ["ROAS ignores product, shipping, fees and returns","ROAS includes fixed costs","ROAS counts only repeat orders","ROAS is calculated after tax"], answer: 0, explain: "A 3x ROAS on a product with low contribution margin can still lose money per order." },
        { q: "What did The Whole Truth's \"₹1.15 spent per rupee earned\" (down from ₹1.48) indicate?", options: ["It was profitable","Revenue had fallen","It was still loss-making but costs were falling as a share of revenue","Marketing had stopped"], answer: 2, explain: "Spending more than ₹1 per ₹1 earned means a loss, but the trend was improving with scale." },
        { q: "Which change most directly lowers RTO cost on COD orders?", options: ["Bigger discounts","Confirming high-risk COD orders and nudging prepaid","More SKUs","Free returns"], answer: 1, explain: "Address/OTP confirmation and prepaid incentives reduce refused deliveries." }
      ],
      challenge: {
        title: 'Fix the unit economics of a COD-heavy coffee brand',
        prompt: `<p>An Indian coffee brand (illustrative): net AOV ₹800; COGS 35%; shipping and packing ₹90; payment fees 2%; returns negligible. Half of orders are COD and 20% of COD orders are refused, so 10% of all shipped orders are RTO, each costing about ₹200. CAC is ₹650. 40% of customers reorder, averaging 1.5 extra orders a year, with ₹20 retention cost per repeat order.</p><p>1) Compute CM2 per delivered order and 12-month LTV:CAC. 2) Evaluate Move A: allow COD only above ₹999 and give a prepaid cashback, which cuts COD to 20% of orders and RTO to 4% of shipped orders — at ₹30 or at ₹10 cashback on prepaid orders. 3) Evaluate Move B: a retention programme raising repeat to 0.9 extra orders per customer. Recommend.</p>`,
        hints: ['RTO cost per delivered order = (RTO share ÷ delivered share) × ₹200.', 'Average cashback cost per order = cashback × prepaid share.'],
        model: `<p><b>1) Today:</b> COGS ₹280; fees ₹16; RTO per delivered = (0.10 ÷ 0.90) × ₹200 ≈ ₹22. CM2 = 800 − 280 − 90 − 16 − 22 = <b>₹392</b> (49%). Repeat: 40% × 1.5 = 0.6 orders × (392 − 20) = ₹223. 12-month contribution = ₹615; <b>LTV:CAC = 0.95</b>.</p><p><b>2) Move A:</b> RTO per delivered = (0.04 ÷ 0.96) × ₹200 ≈ ₹8 (saves ₹14).</p><ul><li>₹30 cashback on 80% prepaid = ₹24 per order → CM2 ≈ ₹382. <b>Worse</b>: the incentive costs more than the RTO saved.</li><li>₹10 cashback → ₹8 per order → CM2 ≈ ₹398. Slightly better, plus less cash stuck in COD remittance.</li></ul><p><b>3) Move B:</b> 0.9 × ₹372 = ₹335; total = 392 + 335 = ₹727; <b>LTV:CAC ≈ 1.12</b>.</p><p><b>Recommendation:</b> do Move B first (biggest gain), apply Move A with a small (₹10) incentive or a COD fee on first orders, and work CAC down toward ₹550–600 through creators and bundles. Target 12-month LTV:CAC of at least 1.3 before scaling ad spend.</p>`
      },
      takeaways: [
        'Track the ladder: gross margin → CM2 after fulfilment, fees, returns and RTO → CM3 after marketing.',
        'Judge growth by 12-month LTV:CAC and payback on new-customer cohorts, not by ROAS.',
        'Size COD incentives below the RTO cost they save; retention is usually the biggest lever.',
        'Fixed costs (stores, teams) can sink brands with acceptable per-order economics (SUGAR).'
      ],
      sources: [
        { title: 'Entrackr — The Whole Truth records 3.3x revenue growth to ₹216 crore in FY25', url: 'https://entrackr.com/fintrackr/the-whole-truth-records-33x-revenue-growth-to-rs-216-cr-in-fy25-11032738' },
        { title: 'Inc42 — SUGAR Cosmetics raises ₹145 crore at a near-80% valuation cut', url: 'https://inc42.com/buzz/sugar-cosmetics-raises-₹145-cr-from-a91-at-a-near-80-valuation-cut/' },
        { title: 'UCLA Anderson Review — App tracking limits and small e-commerce advertisers (2025)', url: 'https://anderson-review.ucla.edu/barred-from-stalking-us-across-the-internet-returns-for-some-advertisers-plummet' },
        { title: 'Amazon Shipping India — RTO cost components', url: 'https://shipping.amazon.in/blog/what-is-rto-how-to-reduce-return-to-origin' },
        { title: 'Eightx — The contribution margin bible for DTC brands (vendor benchmarks)', url: 'https://eightx.co/blog/contribution-margin-bible-dtc' }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'pb-d2c-7',
      title: 'Branding and creativity: positioning, creators, community and retention',
      level: 'Intermediate',
      minutes: 16,
      hook: `When everyone can rent the same factory and buy the same ads, the only thing a rival cannot copy overnight is what people believe and say about your brand.`,
      eli5: `Two kids sell the same lemonade. One just shouts "lemonade!". The other has a funny name, lets friends invent flavours, and gives every tenth cup free to the kid who brings a friend. Soon the second stand has a queue — not because the lemonade is different, but because people feel part of it and keep talking about it.`,
      blocks: [
        {
          type: 'text', title: 'A brand is a shortcut for trust and choice',
          html: `<p>You studied positioning in <a href="#/lesson/mm-brands-4">Marketing Management: positioning</a> and digital channels in <a href="#/lesson/marketing-4">Marketing 4</a>. For D2C the brand has an extra, very practical job: it <span class="hl">lowers CAC</span> (people search for you, click your ads and recommend you) and <span class="hl">raises repeat</span> (people trust you with the next purchase). Every creative decision should be judged on those two effects.</p>`
        },
        {
          type: 'pyramid', title: 'D2C brand-building ladder',
          levels: [
            { label: 'Advocacy and community', note: 'Customers market you', desc: 'Reviews, user content, referrals, events, a community that feels ownership.' },
            { label: 'Distinctive assets', desc: 'Name, colour, packaging, tone of voice and founder story that are instantly recognisable.' },
            { label: 'Clear position', desc: 'One sentence: for whom, what problem, why us, versus what alternative.' },
            { label: 'Product that delivers', note: 'Foundation', desc: 'No brand survives a product that disappoints. Ratings and repeat come first.' }
          ]
        },
        {
          type: 'case', company: 'Gymshark', year: '2013–2025', title: 'Creators and community as the media plan',
          situation: `Gymshark sold online to young gym-goers, competing with global sportswear giants that had far bigger advertising budgets.`,
          decision: `It built its brand on social media and fitness creators — by 2020 it was paying 125 influencers — and ran community campaigns such as the "66 Days | Change Your Life" challenge on TikTok, which asked users to post their own content under #gymshark66. Later it added community-led stores: the Regent Street flagship opened in October 2022 with event and workout spaces.`,
          outcome: `A General Atlantic investment in 2020 valued Gymshark at £1.25 billion. FY24 revenue reached £607.3 million, though pre-tax profit fell for a third year to £11.8 million as it invested in omnichannel growth. Creator deals also brought public disputes, including a lawsuit from an influencer whose partnership ended early.`,
          lesson: `Creators and community can replace much of a paid-media budget, but they need contracts, values alignment and a plan for profit as the brand grows.`
        },
        {
          type: 'case', company: 'Warby Parker', year: '2010–2026', title: 'Purpose and collaborations that stay on-brand',
          situation: `Warby Parker needed a reason for people to talk about a pair of glasses beyond price.`,
          decision: `From launch it ran "Buy a Pair, Give a Pair": for each pair sold it funds glasses through non-profit partners such as VisionSpring. It also built playful limited editions and collaborations with artists, celebrities and creators.`,
          outcome: `The company says it has distributed more than 25 million pairs through the programme in over 80 countries, and Fast Company ranked it the world's most innovative company in 2015. Purpose became part of its story at its 2021 public listing as a public benefit corporation.`,
          lesson: `A purpose works when it is simple, tied to the product and measurable. Collaborations keep a brand fresh without changing its core.`
        },
        {
          type: 'cycle', title: 'The retention engine (email, SMS, WhatsApp, product)', center: 'Repeat purchase',
          steps: [
            { label: 'Welcome', desc: 'Set expectations, teach how to use the product, ask one question to segment.' },
            { label: 'Use and delight', desc: 'How-to content, check-in at the moment results appear.' },
            { label: 'Replenish', desc: 'Reminder timed to when the product runs out; one-tap reorder.' },
            { label: 'Reward', desc: 'Loyalty points, early access, referral credit.' },
            { label: 'Win back', desc: 'Lapsed-customer offer, survey on why they left.' }
          ]
        },
        {
          type: 'framework', name: 'Three creativity methods for D2C teams', when: 'When ads fatigue, growth stalls or the category looks the same',
          steps: [
            { label: 'Reverse the category assumption', desc: 'List what every brand in your category does (hide ingredients, use models, discount often) and ask what happens if you do the opposite. Clean-label brands that print every ingredient on the front of pack reversed "hide the details".' },
            { label: 'Steal from another industry', desc: 'Borrow a mechanic from elsewhere: try-at-home from fashion, drops from streetwear, challenges from fitness apps, subscriptions from software.' },
            { label: 'Constraint sprint', desc: 'Give the team a hard limit — "zero ad budget for 30 days" or "one 15-second video" — and generate 20 ideas. Constraints force channel creativity such as referrals, collaborations and PR stunts.' }
          ]
        },
        {
          type: 'interactive', widget: 'retention', title: 'See what retention does to the base',
          note: 'Compare monthly churn of 12% (typical one-off buyers) with 6% (a strong replenishment flow). Watch how many customers remain after 12 months — that difference is free future revenue without new CAC.'
        },
        {
          type: 'questions', title: 'Ask before you sign creators or launch a campaign',
          items: [
            { q: 'Can we say who we are for and why we are different in one sentence?', why: 'Creators and ads amplify a position; they cannot invent one.' },
            { q: 'Does this creator\'s audience match our buyer, and do they genuinely use the product?', why: 'Mismatched or paid-only endorsements bring clicks without repeat buyers.' },
            { q: 'What is the cost per first order from each creator, not just views?', why: 'Views are cheap; first orders and repeat are what pay back.' },
            { q: 'What do our contracts say about exclusivity, disclosure and early termination?', why: 'Creator disputes and undisclosed ads create legal and reputation risk (Gymshark faced both).' },
            { q: 'What will make a customer reorder without another ad?', why: 'Retention flows and product experience turn one-time buyers into profit.' },
            { q: 'Is our purpose claim specific and verifiable?', why: 'Vague claims invite backlash; measurable ones (pairs donated) build trust.' }
          ]
        }
      ],
      terms: [
        { term: 'Distinctive brand assets', def: `Recognisable elements (colour, shape, logo, voice) that let people identify a brand instantly.` },
        { term: 'Creator (influencer) marketing', def: `Paying or partnering with people who have engaged audiences to create content about a brand.` },
        { term: 'User-generated content (UGC)', def: `Photos, videos and reviews made by customers, often used in ads because it feels authentic.` },
        { term: 'Retention flow', def: `An automated sequence of messages (email, SMS, WhatsApp) triggered by customer behaviour, such as a refill reminder.` },
        { term: 'Referral programme', def: `A reward for customers who bring new customers, turning advocacy into acquisition.` },
        { term: 'Public benefit corporation', def: `A US company form that commits to a stated social purpose alongside profit; Warby Parker uses it.` }
      ],
      quiz: [
        { q: "You pay ₹3 lakh to 30 micro-creators and get 600 first orders. What is the creator CAC?", options: ["₹500","₹300","₹1,000","₹5,000"], answer: 0, explain: "₹3,00,000 ÷ 600 = ₹500 per first order." },
        { q: "For a D2C brand, what are the two main economic effects of a strong brand?", options: ["Higher rent and lower prices","Lower CAC and higher repeat","More SKUs and more discounts","Lower taxes and faster shipping"], answer: 1, explain: "Brand drives organic demand and trust, lowering acquisition cost and raising repeat purchase." },
        { q: "Which is an example of \"steal from another industry\"?", options: ["Copying a rival's ad word for word","Adding more colours","Lowering prices","Using streetwear-style limited drops for a snack brand"], answer: 3, explain: "Borrowing a proven mechanic from a different industry creates something new in yours." },
        { q: "Which retention message usually earns the most for a consumable product?", options: ["A generic monthly newsletter","A brand anniversary post","A refill reminder timed to when the product runs out","An invitation to follow on social media"], answer: 2, explain: "Timed replenishment reminders match the moment of need." },
        { q: "What did Gymshark's rising revenue and falling pre-tax profit (FY24) show?", options: ["Brand-led growth still needs cost discipline as investment in omnichannel rises","Creators stopped working","The brand had collapsed","Wholesale was banned"], answer: 0, explain: "Revenue grew to £607.3 million while pre-tax profit fell for a third year as it invested." }
      ],
      challenge: {
        title: 'Reduce paid dependence for a skincare brand',
        prompt: `<p>Your skincare brand spends 80% of marketing on Meta ads; CAC has risen from ₹600 to ₹950 in two years (illustrative). Repeat rate is 25% in 90 days. You have ₹10 lakh a month to reallocate.</p><p>Use one creativity method and the retention cycle to propose a 90-day plan with budget split and target metrics. Show what CAC you need if 12-month contribution per customer is ₹1,050.</p>`,
        hints: ['For LTV:CAC of 1.5, CAC must be 1,050 ÷ 1.5.', 'Combine an acquisition idea (creators, referrals) with a retention fix (refill reminders).'],
        model: `<p><b>Target CAC:</b> ₹1,050 ÷ 1.5 = <b>₹700</b> (from ₹950 now).</p><p><b>Creativity method — reverse the assumption:</b> the category hides formulation details; publish full ingredient percentages and a dermatologist Q&amp;A series. Pair with <b>steal from fitness apps</b>: a "28-day skin challenge" where buyers post weekly photos.</p><p><b>Budget (₹10 lakh/month):</b></p><ul><li>Meta ads ₹5 lakh, mainly retargeting and creator content as ads.</li><li>40 micro-creators ₹2.5 lakh, paid per first order where possible.</li><li>Referral credit ₹1 lakh (₹150 per referred first order).</li><li>Retention flows and samples ₹1 lakh; content and community ₹0.5 lakh.</li></ul><p><b>Retention:</b> welcome series, day-25 refill reminder, challenge check-ins, win-back at day 60. Target 90-day repeat from 25% to 35%.</p><p><b>Targets at day 90:</b> blended new-customer CAC ≤ ₹750 on the way to ₹700; 30% of first orders from non-Meta channels; 90-day repeat 35%.</p>`
      },
      takeaways: [
        'In D2C, judge brand work by two numbers: lower CAC and higher repeat.',
        'Product first, then position, distinctive assets and community.',
        'Creators and community can replace paid media, but need contracts and profit discipline (Gymshark).',
        'Use structured creativity: reverse assumptions, steal from other industries, run constraint sprints.'
      ],
      sources: [
        { title: 'Wikipedia — Gymshark (social media, influencers, stores)', url: 'https://en.wikipedia.org/wiki/Gymshark' },
        { title: 'Retail Gazette — Gymshark breaks £600m revenue barrier despite profit dip (Apr 2025)', url: 'https://www.retailgazette.co.uk/blog/2025/04/gymshark-breaks-600m/' },
        { title: 'Wikipedia — Warby Parker (Buy a Pair, Give a Pair; collaborations)', url: 'https://en.wikipedia.org/wiki/Warby_Parker' },
        { title: 'Entrackr — The Whole Truth FY25 (clean-label food brand)', url: 'https://entrackr.com/fintrackr/the-whole-truth-records-33x-revenue-growth-to-rs-216-cr-in-fy25-11032738' }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'pb-d2c-8',
      title: 'Scaling D2C: omnichannel, funding, rollups and failure patterns',
      level: 'Advanced',
      minutes: 18,
      hook: `The D2C brands that survived 2022–2025 were not the ones that grew fastest — they were the ones that added channels, stores and capital only when each step paid for itself.`,
      eli5: `Scaling a brand is like adding floors to a house. Each new floor (a marketplace, a store, a new country) needs strong walls underneath. If you stack floors quickly on a weak base because someone lent you money for bricks, the house wobbles — and the lender wants the money back anyway.`,
      blocks: [
        {
          type: 'timeline', title: 'The D2C funding and profitability cycle',
          items: [
            { label: '2010–2016', desc: 'First wave: Warby Parker (2010), Glossier (2014), Casper (2014). Cheap social ads and the novelty of buying direct.' },
            { label: '2020–2021', desc: 'Pandemic e-commerce boom. Indian D2C funding hits about $1.7 billion in 2021 (Tracxn); Amazon aggregators like Thrasio raise billions.' },
            { label: 'April 2021', desc: 'Apple\'s App Tracking Transparency weakens ad targeting; acquisition costs rise for Meta-dependent brands.' },
            { label: '2022–2023', desc: 'Funding tightens; Casper taken private; Glossier moves into Sephora; Honasa (Mamaearth) lists in November 2023 at ₹324 a share.' },
            { label: '2024', desc: 'Indian D2C funding falls to about $757 million with no new unicorns; Thrasio files for Chapter 11; Allbirds closes stores.' },
            { label: '2025–2026', desc: 'Profit-first: boAt returns to profit and files for IPO; Lenskart lists on the NSE and BSE in November 2025 (issue price ₹402); quick commerce becomes a major channel.' }
          ]
        },
        {
          type: 'flow', title: 'Adding a channel: the decision path',
          steps: [
            { label: 'Is the core channel profitable at the contribution level?', kind: 'decision', desc: 'Positive CM3 and payback under about 12 months on new cohorts.', branches: [ { label: 'Yes', to: 'Pick the next channel' }, { label: 'No', to: 'Fix unit economics first' } ] },
            { label: 'Marketplaces and quick commerce', desc: 'Where customers already shop; add fees and platform ads into contribution.' },
            { label: 'Modern trade and specialty retail', desc: 'Wholesale margins and slotting costs; judge by sell-through and returns.' },
            { label: 'Own stores', desc: 'Pilot two or three stores with a clear payback target before a roll-out.' },
            { label: 'New geographies', desc: 'Distributor or marketplace first; own operations only when demand is proven.' }
          ]
        },
        {
          type: 'case', company: 'Allbirds', year: '2024–2026', title: 'Pulling back from stores and own international operations',
          situation: `Allbirds, a D2C pioneer in sustainable shoes, listed on Nasdaq in November 2021 and expanded its own stores and international operations.`,
          decision: `As sales fell, it closed 15 stores in 2024 and moved several international markets to a distributor model, which removed about $22 million from revenue. In January 2026 it said it would close all remaining full-price US stores by February 2026 and focus on e-commerce, wholesale and international distributors.`,
          outcome: `2024 net revenue fell more than 25% to $189.8 million; gross margin improved to 42.7% and the net loss narrowed to $93.3 million.`,
          lesson: `Own stores and own country operations multiply fixed costs. If the product is not pulling repeat demand, more doors only add losses; distributors and wholesale can be the more profitable way to reach customers.`
        },
        {
          type: 'case', company: 'Thrasio', year: '2018–2024', title: 'The rollup that bought growth with borrowed money',
          situation: `Founded in 2018, Thrasio bought small third-party private-label brands selling on Amazon, betting it could grow them with central marketing, sourcing and operations. By early 2021 it had acquired nearly 100 brands.`,
          decision: `It raised billions of dollars — about $3.4 billion from investors according to CNBC — including a roughly $1 billion round in 2021, to buy more sellers quickly at the peak of the pandemic e-commerce boom.`,
          outcome: `As e-commerce growth slowed after the pandemic and economic uncertainty rose, it filed for Chapter 11 bankruptcy in February 2024, agreeing with lenders to cut about $495 million of debt.`,
          lesson: `Buying many brands does not create a brand. Rollups need real operating synergies, conservative debt and brands with lasting demand; pandemic-era sales were not a stable base for valuations.`
        },
        {
          type: 'case', company: 'Honasa Consumer (Mamaearth)', year: '2023–2024', title: 'From D2C start-up to listed house of brands',
          situation: `Honasa built Mamaearth online and added brands such as The Derma Co, Aqualogica, Dr Sheth's and BBlunt, moving into offline retail. In FY23 it reported a loss of about ₹151 crore.`,
          decision: `It went public in November 2023 at ₹324 a share; the fresh-issue money was earmarked largely for advertising and store expansion, while founders and investors sold shares.`,
          outcome: `Shares closed the first day up about 4%, valuing it at about ₹10,850 crore. A year later, after the Project Neev inventory correction and a quarterly loss, the stock fell below its IPO price.`,
          lesson: `Public markets reward predictable, profitable growth. A house of brands must keep its hero brand healthy while it adds new ones and new channels.`
        },
        {
          type: 'map', title: 'Funding options for a D2C brand', center: 'Funding the next stage',
          branches: [
            { label: 'Bootstrapping and pre-orders', desc: 'Customer cash funds stock. Slower, but you keep control.', children: ['Pre-orders', 'Founder capital'] },
            { label: 'Angels and venture capital', desc: 'For fast growth with a credible path to profit; 2024 Indian funding was weighted to early stages.', children: ['Seed', 'Series A–D'] },
            { label: 'Revenue-based and inventory finance', desc: 'Repaid from a share of revenue or against stock; fits brands with steady sales.', children: ['RBF', 'Working-capital loans'] },
            { label: 'Strategic buyers', desc: 'FMCG companies and consumer groups buy brands that fill a gap.', children: ['Acquisition', 'Minority stake'] },
            { label: 'IPO', desc: 'For large, profitable brands: Honasa (2023), boAt filing (2025), Lenskart (2025).', children: ['Fresh issue', 'Offer for sale'] }
          ]
        },
        {
          type: 'matrix', name: 'Scale-up failure patterns', xLabel: 'Speed of expansion →', yLabel: 'Strength of unit economics →',
          cells: [
            { label: 'Steady compounder', desc: 'Good economics, measured pace. Adds channels as each pays back (Warby Parker\'s store roll-out).' },
            { label: 'Category winner', desc: 'Good economics, fast scale with capital. Rare; needs disciplined cohort tracking (Lenskart).' },
            { label: 'Stalled niche', desc: 'Weak economics, slow pace. Fix product, AOV or repeat before raising more.' },
            { label: 'Blow-up risk', desc: 'Weak economics, fast scale on cheap money: Thrasio, Casper\'s losses, aggressive store openings that later close (Allbirds, SUGAR).' }
          ]
        },
        {
          type: 'interactive', widget: 'runway', title: 'Test your runway before you scale',
          note: 'Enter cash, monthly burn and revenue growth. Then double marketing spend without improving payback and see how many months you lose. Plan fundraising when you still have 9–12 months of runway.'
        },
        {
          type: 'questions', title: 'Ask before a big scaling move',
          items: [
            { q: 'Do new cohorts on our current channels pay back CAC within about 12 months?', why: 'Scaling a channel that does not pay back multiplies losses.' },
            { q: 'What is the payback period of a pilot store, including fit-out and rent?', why: 'Store roll-outs turned into closures for several brands (Allbirds, SUGAR).' },
            { q: 'What contribution margin remains after marketplace or quick-commerce fees and platform ads?', why: 'New channels bring volume but different cost lines; some SKUs lose money there.' },
            { q: 'Are we raising to fund proven growth or to discover a model?', why: 'Investors in 2024–25 funded profit paths, not experiments, at late stages.' },
            { q: 'If we acquire a brand, what will we actually do better than its owner?', why: 'Rollups failed where the only plan was to buy revenue (Thrasio).' },
            { q: 'Is our hero brand still growing on repeat demand?', why: 'Adding brands and channels cannot hide a weakening core (Honasa 2024).' },
            { q: 'How much debt can we service if sales fall 20%?', why: 'Leverage turns a slowdown into insolvency.' }
          ]
        }
      ],
      terms: [
        { term: 'Omnichannel', def: `Selling through several connected channels — own site, marketplaces, quick commerce, retail and stores — with consistent brand and pricing.` },
        { term: 'Rollup (aggregator)', def: `A company that buys many small brands to grow them with shared marketing, sourcing and operations.` },
        { term: 'Distributor model', def: `Selling to a local partner who imports, markets and sells in a country, instead of running your own operation.` },
        { term: 'Revenue-based financing', def: `Funding repaid as a share of future revenue rather than through equity dilution.` },
        { term: 'Offer for sale (OFS)', def: `In an IPO, existing shareholders selling their shares; the money goes to them, not the company.` },
        { term: 'Chapter 11', def: `US bankruptcy process that lets a company keep operating while it restructures its debts.` }
      ],
      quiz: [
        { q: "A pilot store costs ₹40 lakh to open and earns ₹2 lakh a month in contribution after rent and staff. What is the payback period?", options: ["10 months","20 months","24 months","40 months"], answer: 1, explain: "₹40 lakh ÷ ₹2 lakh = 20 months — long enough that the brand should test more before a roll-out." },
        { q: "According to Tracxn data reported by Business Standard, roughly how much did Indian D2C brands raise in 2024?", options: ["$1.7 billion","$1.6 billion","$930 million","$757 million"], answer: 3, explain: "2024 funding was about $757 million, down 18% from about $930 million in 2023 and far below $1.7 billion in 2021." },
        { q: "What was the core weakness of the Thrasio model?", options: ["It sold only offline","It had no products","It bought revenue quickly with large funding at a peak, without lasting brand advantages","It refused to use Amazon"], answer: 2, explain: "Rapid acquisitions at pandemic valuations met slowing e-commerce, leading to Chapter 11 in 2024." },
        { q: "Why did Allbirds' switch to international distributors reduce revenue but help profitability?", options: ["It recognises wholesale revenue and removes the fixed costs of running its own operations","Distributors pay no money","It raises prices","It avoids all taxes"], answer: 0, explain: "The brand books lower wholesale revenue but sheds store, staff and local overhead." },
        { q: "In an IPO, money from an offer for sale goes to…", options: ["The company","Selling shareholders","The regulator","Customers"], answer: 1, explain: "OFS proceeds go to existing shareholders; only the fresh issue funds the company." }
      ],
      challenge: {
        title: 'Plan the next 24 months for a ₹150 crore D2C brand',
        prompt: `<p>An Indian personal-care brand (illustrative) has ₹150 crore revenue: 45% own site, 40% marketplaces, 10% quick commerce, 5% modern trade. CM3 is 8% on the site, 5% on marketplaces, 2% on quick commerce, −4% in modern trade. It has ₹40 crore cash and burns ₹2 crore a month. A VC offers ₹100 crore if it opens 100 stores in 18 months; a pilot of 3 stores shows 26-month payback.</p><p>Assess the offer, compute runway, and propose a 24-month scaling plan.</p>`,
        hints: ['Runway = cash ÷ monthly burn.', 'Compare store payback with the 12–18 month rule of thumb; check which channel already earns the best CM3.'],
        model: `<p><b>Runway:</b> ₹40 crore ÷ ₹2 crore = <b>20 months</b> — enough to fix economics without rushing.</p><p><b>Store offer:</b> a 26-month payback on a pilot is weak; 100 stores at that payback would tie up most of the ₹100 crore for years and add rent and staff as fixed cost. This is the Allbirds / SUGAR pattern. Decline the condition, or negotiate a smaller round tied to profitability milestones.</p><p><b>Channel contribution today (CM3 × revenue):</b> site ₹67.5 crore × 8% = ₹5.4 crore; marketplaces ₹60 crore × 5% = ₹3.0 crore; quick commerce ₹15 crore × 2% = ₹0.3 crore; modern trade ₹7.5 crore × −4% = −₹0.3 crore. Total ≈ ₹8.4 crore.</p><p><b>24-month plan:</b></p><ul><li>0–6 months: raise site repeat (subscriptions, refill flows) and AOV; redesign quick-commerce packs to lift CM3 to 5%; renegotiate or exit loss-making modern-trade accounts.</li><li>6–12 months: improve 3 pilot stores (location, assortment, events) to reach under 18-month payback before opening more.</li><li>12–24 months: add 10–15 stores only if pilots hit target; expand quick commerce in tier-2 cities; consider a Gulf distributor rather than own operations.</li><li>Funding: raise a smaller round or revenue-based finance tied to profit milestones; aim for EBITDA break-even within 18 months.</li></ul>`
      },
      takeaways: [
        'Add channels in order of proven contribution: core channel → marketplaces/quick commerce → retail → own stores → new countries.',
        'The 2021 boom and 2022–2025 correction rewarded profitable, patient scaling over funded speed.',
        'Rollups and store roll-outs fail when fixed costs and debt outrun real repeat demand (Thrasio, Allbirds, SUGAR).',
        'Match funding to the stage: customer cash and debt for proven economics, equity for real growth, IPO for profitable scale.'
      ],
      sources: [
        { title: 'Retail Dive — Allbirds Q4 sales plunge as shift from DTC takes a toll (Mar 2025)', url: 'https://www.retaildive.com/news/allbirds-q4-sales-plunge-shift-dtc-takes-toll/742274' },
        { title: 'FashionUnited — Allbirds to shutter remaining full-price US stores by February 2026', url: 'https://fashionunited.uk/news/retail/allbirds-to-shutter-remaining-full-price-us-stores-by-february-2026/2026012885989' },
        { title: 'CNBC — Top Amazon aggregator Thrasio files for bankruptcy (Feb 2024)', url: 'https://www.cnbc.com/2024/02/28/top-amazon-aggregator-thrasio-files-for-bankruptcy.html' },
        { title: 'Wharton Magazine — Thrasio: buying and expanding Amazon businesses (2021)', url: 'https://magazine.wharton.upenn.edu/issues/spring-summer-2021/thrasio' },
        { title: 'Business Standard — Honasa Consumer gains 4% on market debut (Nov 2023)', url: 'https://www.business-standard.com/markets/ipo/honasa-consumer-ipo-gains-4-on-market-debut-value-hits-rs-10-850-cr-123110700826_1.html' },
        { title: 'Business Standard — India D2C funding falls to $757 million in 2024 (Tracxn)', url: 'https://www.business-standard.com/amp/companies/start-ups/india-s-d2c-segment-sees-funding-decline-to-757-million-in-2024-125041601070_1.html' }
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-pb-glossier-sephora', company: 'Glossier', industry: 'Beauty / D2C', year: '2022', track: 'pb-d2c',
    title: 'Should a community-born D2C brand go wholesale?',
    situation: `<p>Glossier was founded in 2014 out of the beauty blog Into the Gloss and grew as an online-only brand with a devoted community; funding in 2018–19 valued it at $1.2 billion. After closing its stores during the pandemic it reopened a store fleet from August 2021, and its stores drew more than 250,000 visitors by early 2022.</p><p>But 2022 was hard: the company made layoffs early in the year after what it called "mistakes" on its path to scale, the founder stepped down as CEO in May, and it raised some prices as production and shipping costs rose. Glossier said it was one of the most-searched brands on Sephora's website that Sephora did not sell, and that searches about buying Glossier at Sephora had risen as much as 200% in a year.</p>`,
    question: 'You are the new CEO in mid-2022. How do you grow reach without losing the brand?',
    options: [
      { text: 'Stay strictly direct: only own website and own stores, and spend more on paid social.', result: 'Keeps control and margin, but paid acquisition is costly after Apple\'s 2021 privacy changes, and store roll-outs add fixed costs while the company is cutting staff.' },
      { text: 'Sign one selective prestige-retail partner (Sephora) in the US and Canada, keep own stores and site for community and launches.', result: 'Captures existing search demand with a retailer that shares a discovery-led, community-minded positioning, at lower acquisition cost per customer; margin per unit is lower but reach and awareness rise.', best: true },
      { text: 'Go broad: drugstores, supermarkets and discounters at once.', result: 'Fast volume but risks diluting a premium, community-led brand and losing control of presentation and pricing.' },
      { text: 'Launch many new sub-brands to create news.', result: 'Spreads a shrinking team thin; Glossier had already paused its Glossier Play line after about a year.' }
    ],
    whatHappened: `<p>In July 2022 Glossier announced Sephora as its first wholesale partner, entering Sephora's US and Canadian stores, website and app in early 2023, while saying its own store fleet would keep expanding. It later added other retailers such as Space NK and Mecca. In 2026, under new leadership, it announced it would close nine of its twelve stores, keeping New York, Los Angeles and London — a sign that the hybrid, wholesale-friendly model had become its main route to customers.</p>`,
    lessons: [
      'Search data showing customers expect you at a retailer is a strong channel signal.',
      'Choose wholesale partners whose positioning matches yours; selective beats broad for premium brands.',
      'Own stores are best as brand and community spaces, not the only route to scale.'
    ],
    frameworks: ['Omnichannel channel design', 'Channel conflict management', 'Brand positioning']
  },
  {
    id: 'case-pb-allbirds-reset', company: 'Allbirds', industry: 'Footwear / D2C', year: '2023–2024', track: 'pb-d2c',
    title: 'Shrink the store fleet or double down?',
    situation: `<p>Allbirds became a D2C icon for sustainable shoes, listed on Nasdaq in November 2021 and built a fleet of its own stores plus its own operations in several international markets. By 2023–24 sales were falling, losses were large and gross margins were under pressure.</p><p>Management had to choose where to cut and where to invest, knowing that every channel change would reduce reported revenue in the short term.</p>`,
    question: 'You are the CEO. What is your reset plan?',
    options: [
      { text: 'Open more stores to win back awareness.', result: 'Adds fixed rent and staff costs while product demand is weak; losses likely widen.' },
      { text: 'Discount heavily across all channels to clear stock and restore growth.', result: 'Short-term volume, but trains customers to wait for sales and erodes an already-squeezed gross margin.' },
      { text: 'Close unprofitable stores, move selected international markets to distributors, fix gross margin, and focus investment on product renewal and fewer, stronger channels.', result: 'Revenue falls in the short term, but fixed costs drop and margins improve, buying time for product-led recovery.', best: true },
      { text: 'Exit wholesale and go back to online-only.', result: 'Loses reach and discovery just as acquisition costs are high.' }
    ],
    whatHappened: `<p>Allbirds closed 15 stores in 2024 and converted several international markets to a distributor model, which removed about $22 million of revenue. 2024 net revenue fell more than 25% to $189.8 million, but gross margin rose about 170 basis points to 42.7% and the net loss narrowed by more than 39% to $93.3 million. In January 2026 it announced it would close all remaining full-price US stores by February 2026 and focus on e-commerce, wholesale and distributors — showing that cost cuts alone had not restored growth, and product demand remained the core problem.</p>`,
    lessons: [
      'Own stores and own country operations turn D2C into a high-fixed-cost business.',
      'Distributor and wholesale models trade revenue for lower risk and better margins.',
      'Cost resets buy time; only renewed product demand restores growth.'
    ],
    frameworks: ['Operating leverage', 'Channel economics', 'Turnaround management']
  },
  {
    id: 'case-pb-thrasio-rollup', company: 'Thrasio', industry: 'E-commerce aggregator', year: '2021', track: 'pb-d2c',
    title: 'Raise a billion to buy more Amazon brands?',
    situation: `<p>Thrasio, founded in 2018 by Joshua Silberstein and Carlos Cashman, bought third-party private-label businesses selling on Amazon and tried to grow them with central marketing, sourcing and operations. It had acquired nearly 100 brands by early 2021 and raised more than $1.75 billion by then; e-commerce demand was at a pandemic high and many rival aggregators were bidding for the same sellers.</p><p>In late 2021, with a planned SPAC merger on hold, investors offered about $1 billion more to accelerate acquisitions.</p>`,
    question: 'You are on the board. What do you do with the offer?',
    options: [
      { text: 'Take it all and buy as many brands as possible before rivals do.', result: 'Locks in pandemic-peak prices and adds integration complexity; if demand normalises, the portfolio is overvalued and harder to manage.' },
      { text: 'Take less capital, pause new deals, and prove you can grow the brands you already own (organic growth, margins, inventory discipline) before buying more.', result: 'Slower headline growth, but protects the balance sheet and tests whether the operating model really adds value.', best: true },
      { text: 'Use the money to launch a single new brand of your own.', result: 'Ignores the core thesis and adds a new risk without fixing the existing portfolio.' },
      { text: 'Load up on debt instead of equity to avoid dilution.', result: 'Raises fixed repayment obligations just as revenue may slow — a common path to distress.' }
    ],
    whatHappened: `<p>Thrasio raised the round and kept acquiring; CNBC reported it raised about $3.4 billion from investors in total. As e-commerce growth slowed after the pandemic and economic uncertainty rose, it filed for Chapter 11 bankruptcy in February 2024, agreeing with lenders to cut about $495 million of debt.</p>`,
    lessons: [
      'A rollup only creates value if the acquirer runs brands better than their founders did.',
      'Peak-demand prices plus debt make portfolios fragile when growth normalises.',
      'Prove organic growth on owned brands before buying more.'
    ],
    frameworks: ['M&A synergies', 'Capital structure', 'Rollup strategy']
  },
  {
    id: 'case-pb-honasa-neev', company: 'Honasa Consumer (Mamaearth)', industry: 'Beauty and personal care / D2C', year: '2024', track: 'pb-d2c',
    title: 'Clean up the distribution channel — even if it hurts a quarter?',
    situation: `<p>Honasa listed in November 2023 at ₹324 a share, valuing it at about ₹10,850 crore on its first day. It had grown Mamaearth online and expanded into general trade through a two-layer chain of super-stockists and sub-distributors in its top cities.</p><p>By 2024 there were signs that stock in the channel exceeded real shopper demand: the core Mamaearth brand was growing slowly as consumers shifted toward active-ingredient products, and the range had many SKUs. Fixing the channel would mean taking back excess and near-expiry stock.</p>`,
    question: 'You are the CEO of a newly listed company. What do you do?',
    options: [
      { text: 'Keep pushing stock through the existing chain to protect quarterly revenue.', result: 'Revenue looks fine for a while, but stock ages, retailers return it, and a larger correction comes later with greater damage to trust.' },
      { text: 'Move to direct distributors in the top cities, take back excess stock now, explain the one-time impact clearly to investors, and track secondary sales and sell-through from then on.', result: 'A painful quarter, but a cleaner channel, better margins and data on true demand.', best: true },
      { text: 'Exit offline entirely and return to online-only.', result: 'Gives up a large and growing part of the Indian market and the reach the IPO was meant to fund.' },
      { text: 'Launch many new SKUs to fill the channel with fresh products.', result: 'Worsens SKU proliferation and repeats the overstocking problem.' }
    ],
    whatHappened: `<p>Honasa launched Project Neev, replacing the two-layer structure in the top 50 cities with direct distributors. The inventory correction cut Q2 FY25 revenue by about ₹63 crore and the company posted a quarterly loss of about ₹19 crore. The share price fell more than 20% in a day and slipped below the ₹324 IPO price, with market value falling from about ₹10,425 crore to about ₹7,309 crore within days. Distributors publicly disputed how returns were handled. The episode became a widely discussed example of the gap between primary sales and real consumer demand.</p>`,
    lessons: [
      'Measure offline success by sell-through to shoppers, not stock shipped to distributors.',
      'Channel corrections are cheaper early than late; communicate them clearly.',
      'A house of brands still depends on the health of its hero brand.'
    ],
    frameworks: ['Channel design', 'Primary vs secondary sales', 'Investor communication']
  }
]);
