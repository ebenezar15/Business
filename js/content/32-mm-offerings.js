/* MBA Studio — Track 32: Marketing Management IV — Products, Services, Pricing & Channels */
MBA.addTrack({
  id: 'mm-offerings',
  stage: 5,
  order: 32,
  title: 'Marketing Management IV: Products, Services, Pricing & Channels',
  icon: '📦',
  color: '#0891b2',
  series: 'Marketing Management',
  part: 'Part IV · Shaping and delivering value',
  tagline: 'Design what you sell, price it well and get it to the customer',
  summary: `This is where strategy turns into things customers can touch, buy and receive. You will design products layer by layer, manage lines and mixes, engineer service quality, set and adapt prices with a disciplined process, and design the channels, retailers and logistics that carry value to the market.`,
  outcomes: [
    'Build an offer layer by layer with the customer-value hierarchy and choose the differentiation levers that matter',
    'Analyse a product line and mix, and use captive, bundle, by-product and two-part pricing across it',
    'Diagnose a service with the four service characteristics, the quality-gaps model and the five quality dimensions',
    'Set a price with the six-step process and adapt it by geography, discount, segment and time',
    'Respond to a competitor price cut with a structured decision flow instead of a reflex',
    'Design and manage channels, retail formats and market logistics, and handle channel conflict in an omnichannel world'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'mm-offerings-1',
      title: 'Product strategy I: product levels, classifications and differentiation',
      level: 'Beginner',
      minutes: 14,
      hook: `Nobody wants a drill; they want a hole in the wall, a shelf that stays up and a partner who is impressed — product strategy is deciding which of those layers you will win on.`,
      eli5: `Think of a birthday cake. The <b>core</b> is "something sweet to celebrate with". The <b>basic</b> cake is sponge and icing. The <b>expected</b> cake arrives on time, tastes fresh and has the right name spelled correctly. The <b>augmented</b> cake comes with candles, a free knife and a photo-worthy box. The <b>potential</b> cake is whatever no bakery offers yet — maybe it changes flavour layer by layer. Every bakery sells the core. The winners compete in the outer layers.`,
      blocks: [
        {
          type: 'text', title: 'A product is a bundle of benefits',
          html: `<p>A <b>product</b> is anything offered to a market to satisfy a want or need: physical goods, services, experiences, events, places, information, even ideas. In <a href="#/lesson/marketing-1">Marketing, lesson 1</a> you met Product as one of the 4Ps. Here we open that box.</p><p>The key shift: customers do not buy features, they buy <span class="hl">expected benefits</span>. Your job is to decide which benefits to deliver, at which layer, better than rivals.</p>`
        },
        {
          type: 'pyramid', title: 'The customer-value hierarchy (build from the base up)',
          levels: [
            { label: 'Potential product', note: 'What it could become', desc: `All the future augmentations and transformations. This is where tomorrow's competition will be fought — e.g. a car that updates itself overnight over the air.` },
            { label: 'Augmented product', note: 'Beyond expectations', desc: `Extras that exceed what buyers expect: free installation, a generous warranty, a loyalty app. Warning: today's augmentation becomes tomorrow's expectation.` },
            { label: 'Expected product', note: 'Normal conditions', desc: `The attributes buyers normally expect when they buy: a hotel room has clean sheets, working Wi-Fi and hot water. Missing these causes anger, not just disappointment.` },
            { label: 'Basic product', note: 'The core made real', desc: `The core benefit turned into a tangible offer: a room with a bed, a bathroom and a door that locks.` },
            { label: 'Core benefit', note: 'What is really bought', desc: `The fundamental need served: rest and safety away from home. Every competitor must deliver this; few win on it alone.` }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Augmentation has a cost and a half-life',
          html: `<ul><li>Each augmentation adds cost, so it must lift willingness to pay or loyalty by more than it costs.</li><li>Augmented benefits soon become <b>expected</b> (free hotel Wi-Fi was once a perk). Plan the next layer before rivals copy this one.</li><li>A counter-strategy also works: strip the augmentation and sell the basic product cheaply (low-cost airlines, budget hotels).</li></ul>`
        },
        {
          type: 'compare', title: 'Consumer-goods classes: how people shop for them', headers: ['', 'Convenience', 'Shopping', 'Specialty', 'Unsought'],
          rows: [
            ['How people buy', 'Often, quickly, little effort', 'Compare suitability, quality, price, style', 'Make a special effort for a particular brand', 'Do not normally think of buying'],
            ['Examples', 'Soap, snacks, newspapers, impulse and emergency items', 'Furniture, clothing, appliances', 'Luxury watches, a specific camera, a famous restaurant', 'Life insurance, smoke alarms, funeral plans'],
            ['Distribution', 'Intensive: everywhere', 'Selective: fewer, well-chosen outlets', 'Exclusive or very selective', 'Wherever a seller can start a conversation'],
            ['Marketing emphasis', 'Availability, pack, price, mass reach', 'Range, sales help, comparison content', 'Brand prestige, experience', 'Personal selling and education']
          ]
        },
        {
          type: 'framework', name: 'Classifying products by durability, tangibility and buyer', when: 'Before choosing price, distribution and promotion, because each class implies a different playbook',
          steps: [
            { label: 'Nondurable goods', desc: 'Consumed in one or a few uses (shampoo, soft drinks). Buy often, so make them widely available, keep margins modest and advertise to build preference.' },
            { label: 'Durable goods', desc: 'Survive many uses (fridges, cars). Need more personal selling, service and warranties, and earn higher margins.' },
            { label: 'Services', desc: 'Intangible, inseparable, variable and perishable (haircuts, audits). Need quality control, credibility and adaptability — lesson 3 goes deep.' },
            { label: 'Industrial: materials and parts', desc: 'Enter the customer\'s product completely: raw materials (wheat, iron ore) and manufactured parts (chips, tyres). Bought on price and reliability of supply; branding is rare but possible (see ingredient branding in lesson 2).' },
            { label: 'Industrial: capital items', desc: 'Long-lasting goods that help make the product: installations (factories, turbines) and equipment (forklifts, laptops). Long sales cycles, many buyers involved.' },
            { label: 'Industrial: supplies and business services', desc: 'Short-lasting items and services (lubricants, cleaning, legal advice) that keep operations running. Often bought on routine reorders or long contracts.' }
          ]
        },
        {
          type: 'map', title: 'Where can a product differ?', center: 'Product differentiation',
          branches: [
            { label: 'Form', desc: 'Size, shape or physical structure. Pills, liquids and patches can deliver the same medicine in different forms.', children: ['Size', 'Shape', 'Structure'] },
            { label: 'Features and customisation', desc: 'Functions that supplement the basic job, and the ability to tailor the product to one customer (configure-to-order, personal engraving).', children: ['Add-ons', 'Mass customisation'] },
            { label: 'Performance quality', desc: 'The level at which primary characteristics operate: low, average, high, superior. Match it to the target and price; more is not always better.', children: ['Speed', 'Power', 'Accuracy'] },
            { label: 'Conformance quality', desc: 'How consistently every unit meets the promised specification. A brilliant design with uneven build loses trust.', children: ['Consistency', 'Low defect rate'] },
            { label: 'Durability and reliability', desc: 'Expected operating life under normal conditions, and the probability that it will not fail within a given time. Valued most where failure is expensive.', children: ['Life span', 'Failure rate'] },
            { label: 'Repairability', desc: 'Ease of fixing it when it breaks: modular parts, diagnostics, self-repair kits, right-to-repair rules.', children: ['Spare parts', 'Remote fixes'] },
            { label: 'Style and design', desc: 'Look and feel (style), plus design: the total set of features that affect how a product looks, feels and works for the customer.', children: ['Aesthetics', 'Ease of use'] }
          ]
        },
        {
          type: 'case', company: 'Dyson', year: '1978–2016', title: 'Winning a boring category on performance and design',
          situation: `Vacuum cleaners were a mature, low-interest category where established brands competed on price and bags that clogged and lost suction. James Dyson worked on a bagless cyclonic design for years, reportedly building over 5,000 prototypes, and was turned down by established manufacturers who earned money from replacement bags.`,
          decision: `After licensing the technology in Japan, Dyson launched his own machine, the DC01, in the UK in 1993 at a premium price. The pitch was a differentiated core performance claim (no loss of suction), backed by a transparent see-through bin and striking industrial design that made the technology visible.`,
          outcome: `Dyson became a leading vacuum brand in the UK and later in many other markets, and used the same engineering-plus-design formula to stretch into hand dryers, bladeless fans and, in 2016, a premium hair dryer.`,
          lesson: `In a commoditised category, a credible performance difference that customers can <i>see</i> through design justifies a premium. The rivals' revenue from bags was also a reason they ignored the threat.`
        },
        {
          type: 'scenario',
          prompt: `You manage a mid-priced hotel. Guests now expect free Wi-Fi and online check-in; rivals offer both. Your budget allows one upgrade. Which is the best use of it?`,
          options: [
            { text: 'Add a rooftop pool, the most visible augmentation possible.', feedback: 'Expensive, slow and easy to compare. It may not fit your mid-priced target and will not fix weak expected attributes.', good: false },
            { text: 'First audit expected attributes (cleanliness, noise, Wi-Fi speed). Fix any failures, then add one cheap augmentation your target values, such as late checkout for members.', feedback: 'Right. Failing on expected attributes destroys satisfaction; augmentations only pay off once the basics are solid. Choose ones that matter to your segment and are cheap to deliver.', good: true },
            { text: 'Cut the price by 15% to win on value.', feedback: 'Price cuts are instantly copied and erode margin. They are not a product strategy.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Customer-value hierarchy', def: `Five layers of a product: core benefit, basic, expected, augmented and potential product. Each layer adds customer value.` },
        { term: 'Augmented product', def: `Benefits that go beyond what customers normally expect, such as extra services or a better warranty.` },
        { term: 'Convenience goods', def: `Products bought frequently, quickly and with little comparison, such as soap or snacks.` },
        { term: 'Specialty goods', def: `Products with unique traits or brand identity that buyers will make a special effort to get.` },
        { term: 'Unsought goods', def: `Products consumers do not know about or do not normally think of buying, such as life insurance.` },
        { term: 'Conformance quality', def: `The degree to which every unit produced matches the promised specification.` },
        { term: 'Design', def: `The total set of features that affect how a product looks, feels and functions in the customer's hands.` }
      ],
      quiz: [
        { q: 'A hotel guest is furious because the room has no hot water. Which layer of the customer-value hierarchy failed?', options: ['Potential product', 'Augmented product', 'Expected product', 'Core benefit'], answer: 2, explain: 'Hot water is a normal expectation of a hotel room. Failing on expected attributes causes strong dissatisfaction.' },
        { q: 'Life insurance and smoke alarms are typical examples of which class of consumer goods?', options: ['Unsought goods', 'Shopping goods', 'Convenience goods', 'Specialty goods'], answer: 0, explain: 'Most people do not think of buying them until prompted, so they need personal selling and education.' },
        { q: 'A carmaker\'s design is excellent, but some cars from one factory have uneven panel gaps. Which quality dimension is weak?', options: ['Performance quality', 'Style', 'Durability', 'Conformance quality'], answer: 3, explain: 'Conformance quality is consistency against the specification across all units.' },
        { q: 'An appliance maker expects 4% of units sold to need a warranty repair costing $150 each. What is the expected warranty cost per unit sold?', options: ['$4', '$6', '$15', '$60'], answer: 1, explain: '4% × $150 = $6 per unit. On 50,000 units that is $300,000 to build into price and budget.' },
        { q: 'Why are augmented benefits a moving target?', options: ['They are illegal in many markets', 'They cost nothing to provide', 'Competitors copy them and customers soon treat them as expected', 'They only matter for industrial goods'], answer: 2, explain: 'Augmentations become the norm, so firms must keep innovating at the potential-product level.' }
      ],
      challenge: {
        title: 'Rebuild an electric scooter offer',
        prompt: `<p>You lead product at a company selling a $600 commuter e-scooter. Reviews say it rides well, but owners complain about flat tyres, slow repairs (3 weeks) and a confusing app. A rival at $550 offers a 2-year warranty versus your 1 year. Your data: 10% of scooters need one repair a year at an average cost of $80 to you.</p><p>Use the customer-value hierarchy and the differentiation map to propose what to fix and what to add. Estimate the cost per scooter of extending your warranty to 2 years.</p>`,
        hints: ['Sort complaints into layers: which are failures of expected attributes and which are missing augmentations?', 'Warranty cost per unit = repair probability per year × cost per repair × extra years covered.'],
        model: `<p><b>1. Diagnose by layer.</b></p><ul><li><b>Core</b> (cheap, quick short trips) and <b>basic</b> (a scooter that rides well): fine.</li><li><b>Expected</b>: failing. Owners expect tyres that do not puncture constantly, repairs in days not weeks, and an app that works. These are reliability, repairability and design failures.</li><li><b>Augmented</b>: behind the rival on warranty.</li></ul><p><b>2. Fix expected attributes first.</b> Switch to puncture-resistant or solid tyres (reliability), design for modular swap of tyres, battery and controller so repairs take days, and simplify the app to three core tasks (design).</p><p><b>3. Warranty maths.</b> Extra year of cover = 10% × $80 = <b>$8 per scooter</b>. Better tyres should cut repair frequency, so the real cost is likely below $8. On a $600 product this is about 1.3% of price — cheap reassurance.</p><p><b>4. Add one augmentation that is hard to copy:</b> a 72-hour repair promise with a loaner scooter in major cities, using the modular design.</p><p><b>Recommendation:</b> keep the $600 price, match the 2-year warranty, and lead communications with "fixed in 72 hours". Compete on reliability and repairability rather than cutting price to the rival's $550.</p>`
      },
      takeaways: [
        'Customers buy benefits; design the offer layer by layer from core benefit to potential product.',
        'Failing an expected attribute hurts more than missing an augmentation, so fix basics first.',
        'Product class (convenience, shopping, specialty, unsought; durable or not; consumer or industrial) sets the marketing playbook.',
        'Differentiate on the dimensions your target values: form, features, performance, conformance, durability, reliability, repairability, style and design.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'mm-offerings-2',
      title: 'Product strategy II: lines, mixes, co-branding and packaging',
      level: 'Beginner',
      minutes: 15,
      hook: `Most companies do not sell one product — they sell a family, and the family can be priced, stretched and pruned so the whole earns far more than its parts.`,
      eli5: `Imagine an ice-cream van. It sells cones (one line), lollies (another line) and drinks (a third). The number of lines is the van's <b>width</b>. Within cones it offers small, medium and large in eight flavours — that is <b>depth</b>. The van can add a fancy "deluxe sundae" to look premium (stretching up), sell sprinkles as an extra (optional feature), and give the cone free if you buy the drink (bundling). How you arrange and price the whole family matters as much as any single ice cream.`,
      blocks: [
        {
          type: 'pyramid', title: 'The product hierarchy (from need to single item)',
          levels: [
            { label: 'Item (SKU)', note: 'One distinct unit', desc: 'A single version with its own size, price and appearance: a 330 ml can of a particular cola flavour.' },
            { label: 'Product type', desc: 'Items within a line that share a form: diet colas, regular colas, flavoured colas.' },
            { label: 'Product line', desc: 'Closely related products that work similarly, are sold to the same groups, or through the same outlets: the cola line.' },
            { label: 'Product class', desc: 'Products within a family with a recognised functional coherence: carbonated soft drinks.' },
            { label: 'Product family', desc: 'All classes that satisfy the core need reasonably well: all drinks.' },
            { label: 'Need family', note: 'The root', desc: 'The core need behind the family: quenching thirst.' }
          ]
        },
        {
          type: 'framework', name: 'Four dimensions of a product mix', when: 'When you review the whole portfolio, plan expansions or explain a company\'s strategy',
          steps: [
            { label: 'Width', desc: 'How many different product lines the company carries. Wider mixes use the brand and channels more fully.' },
            { label: 'Length', desc: 'The total number of items in the mix (sometimes quoted as average items per line). Longer mixes cover more segments.' },
            { label: 'Depth', desc: 'How many variants of each product: sizes, formulas, colours. Three sizes × two formulas = depth of six.' },
            { label: 'Consistency', desc: 'How closely the lines relate in end use, production and distribution. High consistency builds reputation in one arena; low consistency spreads the company across many.' }
          ]
        },
        {
          type: 'compare', title: 'Product-line decisions', headers: ['Move', 'What it means', 'When it works', 'Risk'],
          rows: [
            ['Stretch down', 'Add a lower-priced item', 'To block low-price rivals or tap a growing value segment', 'Cannibalises core; can cheapen the brand'],
            ['Stretch up', 'Add a premium item', 'For growth, margins or to lift the whole line\'s image (e.g. Nissan launching Infiniti in 1989)', 'Customers may doubt the brand can do premium; often needs a separate name'],
            ['Two-way stretch', 'Add both above and below', 'Mid-market players hemmed in on both sides', 'Complexity and confused positioning'],
            ['Line filling', 'Add items within the current range', 'To fill gaps rivals could use, use excess capacity, satisfy dealers', 'Items too similar confuse buyers and cannibalise'],
            ['Modernising', 'Refresh the line', 'When designs or technology date', 'Timing: too early cannibalises, too late lets rivals win'],
            ['Featuring', 'Spotlight a few items', 'To pull traffic (low-priced item) or signal quality (a halo item)', 'Distorts the mix if overused'],
            ['Pruning', 'Remove weak items', 'When items lose money, tie up capacity or confuse', 'Losing the few loyal buyers of an item']
          ]
        },
        {
          type: 'map', title: 'Product-mix pricing: price the family, not the item', center: 'Mix pricing',
          branches: [
            { label: 'Optional-feature pricing', desc: 'Base price plus priced extras. Decide what is standard and what is optional; a low base can attract traffic but irritate if the "real" car costs much more.', children: ['Car trims', 'Seat selection'] },
            { label: 'Captive-product pricing', desc: 'Low price on the main product, high margin on the consumables that must be used with it.', children: ['Razors and blades', 'Printers and ink', 'Consoles and games'] },
            { label: 'Two-part pricing', desc: 'A fixed fee plus a variable usage fee, common in services. Keep the fixed fee low enough to attract buyers; profit can come from usage.', children: ['Phone plans', 'Theme parks', 'Gym plus classes'] },
            { label: 'By-product pricing', desc: 'Sell what would otherwise be waste. Any price above disposal cost helps the main product\'s economics.', children: ['Sawdust', 'Molasses', 'Fly ash'] },
            { label: 'Bundling', desc: 'Pure bundling sells only the bundle; mixed bundling sells items alone or together, with a bundle discount. Works when buyers value items differently.', children: ['Value meals', 'Software suites', 'Streaming bundles'] }
          ]
        },
        {
          type: 'case', company: 'Gillette', year: '1900s–2017', title: 'Captive pricing — and its limits',
          situation: `Gillette built its business on disposable blades for safety razors. From the 1990s it released ever more advanced systems (Mach3 in 1998, Fusion in 2006), selling the handle relatively cheaply and earning most of its profit on replacement cartridges, protected by patents. P&G bought Gillette in 2005.`,
          decision: `The model depended on shoppers accepting high cartridge prices. From 2012, online challengers such as Dollar Shave Club and Harry's sold cheaper cartridges by subscription and mocked "overpriced" blades. Gillette responded with its own subscription service and, in 2017, publicly cut cartridge prices substantially.`,
          outcome: `Gillette kept market leadership, but its pricing power and share were dented. The captive model became visibly fragile once a credible low-priced substitute could reach customers directly.`,
          lesson: `Captive pricing works while switching costs and patents protect the consumable. Push the consumable margin too far and you create the opening for an attacker.`
        },
        {
          type: 'callout', kind: 'example', title: 'Co-branding and ingredient branding',
          html: `<p><b>Co-branding</b> combines two or more established brands in one offer (a credit card carrying an airline's brand, a sportswear brand designed with a luxury house). It borrows credibility and reaches new buyers, but each brand's reputation is tied to the other's behaviour.</p><p><b>Ingredient branding</b> builds brand equity for a component inside another product. In 1991 Intel launched "Intel Inside", sharing PC makers' advertising costs if they displayed its logo. Buyers began asking for the chip by name, which gave Intel pull with PC makers. Other examples: Gore-Tex fabrics, Dolby audio. It works when the ingredient is important to performance and hard for buyers to judge on their own.</p>`
        },
        {
          type: 'flow', title: 'Should we stretch the line?',
          steps: [
            { label: 'Spot the gap', desc: 'Segment growth above or below your current price range, or a rival entering one.' },
            { label: 'Is the gap big and profitable enough to matter?', kind: 'decision', desc: 'Size the segment and its margins.', branches: [ { label: 'Yes', to: 'Check the brand fit' }, { label: 'No', to: 'Stay focused; monitor' } ] },
            { label: 'Can our current brand credibly stretch there?', kind: 'decision', desc: 'Downward stretches risk cheapening the brand; upward ones risk disbelief.', branches: [ { label: 'Yes', to: 'Sub-brand under the master brand' }, { label: 'No', to: 'New, separate brand (as Nissan did with Infiniti)' } ] },
            { label: 'Estimate cannibalisation', desc: 'What share of the new item\'s sales comes from your existing items, and is net contribution still positive?' },
            { label: 'Launch, then review the line', desc: 'Re-run line analysis: sales and profit by item, overlap, and items to prune.' }
          ]
        },
        {
          type: 'checklist', title: 'Packaging, labelling, warranties and guarantees',
          items: [
            'Does the pack protect the product through the whole logistics journey and on the shelf?',
            'Does it win the shelf in about three seconds: recognisable colour, shape and brand cues?',
            'Is it convenient: easy to open, reseal, carry, store and dispose of or recycle?',
            'Does the label meet legal rules (ingredients, nutrition, origin, safety, unit pricing) in each market?',
            'Are sustainability claims specific and provable, avoiding vague "eco" language?',
            'Does a warranty or guarantee signal quality where buyers are uncertain? L.L.Bean\'s long-standing satisfaction guarantee is a well-known example of a guarantee used as a brand promise.',
            'Have you costed the warranty: expected claim rate × cost per claim, and built it into price?'
          ]
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'Captive pricing is lifetime economics',
          note: 'Treat ARPU as the monthly refill spend, gross margin as the refill margin and churn as the share of owners who stop buying refills each month. Then set CAC to the loss you take on each discounted starter device and see how churn decides whether the device subsidy pays back.'
        }
      ],
      terms: [
        { term: 'Product line', def: `A group of closely related products that function similarly or are sold to the same customers or through the same outlets.` },
        { term: 'Product mix (assortment)', def: `All the products and items a company offers, described by width, length, depth and consistency.` },
        { term: 'Line stretching', def: `Lengthening a product line beyond its current price or quality range, downward, upward or both.` },
        { term: 'Captive-product pricing', def: `Pricing the main product low and the required consumables high, such as printers and ink.` },
        { term: 'Mixed bundling', def: `Offering items both separately and as a discounted bundle.` },
        { term: 'Ingredient branding', def: `Building a brand for a component inside other companies' products, such as Intel Inside or Gore-Tex.` },
        { term: 'Warranty', def: `A formal statement of the performance the maker promises, with remedies such as repair or refund if it falls short.` }
      ],
      quiz: [
        { q: 'A company has 4 product lines with 5, 8, 3 and 4 items. What are its mix width and total length?', options: ['Width 20, length 4', 'Width 4, length 5', 'Width 5, length 20', 'Width 4, length 20'], answer: 3, explain: 'Width = number of lines (4). Length = total items (5 + 8 + 3 + 4 = 20); average length per line is 5.' },
        { q: 'A theme park charges an entry fee plus a fee for each premium ride. This is:', options: ['Two-part pricing', 'By-product pricing', 'Captive-product pricing', 'Pure bundling'], answer: 0, explain: 'A fixed fee plus a variable usage fee is two-part pricing.' },
        { q: 'A razor handle sells at a $2 loss. Each cartridge earns $3 of contribution and a typical user buys 30 a year for 2 years. Lifetime contribution per user?', options: ['$88', '$90', '$178', '$180'], answer: 2, explain: '30 × 2 × $3 = $180 from cartridges, minus the $2 handle loss = $178.' },
        { q: 'Nissan created the separate Infiniti brand in 1989 mainly to solve which problem?', options: ['Pruning unprofitable items', 'Doubt that a mass-market brand could credibly sell luxury cars', 'Line filling at the low end', 'Lowering packaging costs'], answer: 1, explain: 'Upward stretches often need a separate brand because buyers doubt the original brand can do premium.' },
        { q: 'What usually makes ingredient branding succeed?', options: ['The ingredient is cheap and invisible', 'The final product maker refuses to mention it', 'The ingredient matters to performance and buyers cannot easily judge it themselves', 'It is only used for services'], answer: 2, explain: 'A trusted ingredient brand reduces buyer uncertainty about an important, hard-to-judge component.' }
      ],
      challenge: {
        title: 'Price a water-filter jug as a captive product',
        prompt: `<p><i>Illustrative.</i> You sell a filter jug at $20 that costs $18 to make, and filters at $8 that cost $1.50. Owners who stay with you (60% of buyers) replace a filter every 2 months for about 2 years. You sell 100,000 jugs a year.</p><p>Marketing proposes cutting the jug to $12, which research suggests would lift unit sales to 180,000. Should you do it? What attachment rate would make the cut break even, and what risks matter?</p>`,
        hints: ['Contribution per filter = $8 − $1.50. Count filters per active owner over 2 years.', 'Write total contribution for each option and solve for the attachment rate that equalises them.'],
        model: `<p><b>Per active owner:</b> 6 filters a year × 2 years = 12 filters × $6.50 = <b>$78</b>.</p><p><b>Today (jug $20):</b> jugs 100,000 × $2 = $0.2m; filters 100,000 × 60% × $78 = $4.68m. Total <b>$4.88m</b>.</p><p><b>Proposal (jug $12):</b> jugs 180,000 × (−$6) = −$1.08m; filters 180,000 × 60% × $78 = $8.424m. Total <b>$7.344m</b>, about $2.46m more.</p><p><b>Break-even attachment:</b> −$1.08m + 180,000 × a × $78 ≥ $4.88m → 14.04m × a ≥ 5.96m → <b>a ≥ 42.5%</b>. Attachment can fall from 60% to about 42% before the cut stops paying.</p><p><b>Risks:</b> cheap compatible filters from rivals (protect with a design patent or a fit-and-certify programme), retailer pushback on a loss-leading jug, and cash flow (you pay for the subsidy now and earn back over two years).</p><p><b>Recommendation:</b> cut to $12, bundle two filters in the starter box to build the habit, offer a filter subscription at a small discount to lock in attachment, and track attachment monthly against the 42% floor.</p>`
      },
      takeaways: [
        'Map the hierarchy from need family to SKU, and describe the mix by width, length, depth and consistency.',
        'Stretch, fill, modernise, feature and prune lines deliberately, and estimate cannibalisation before adding items.',
        'Price the family: optional-feature, captive, two-part, by-product and bundle pricing can make the whole worth more than the parts.',
        'Co-branding, ingredient branding, packaging and warranties are product decisions that shape perceived quality.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'mm-offerings-3',
      title: 'Designing and managing services: characteristics, quality gaps and excellence',
      level: 'Intermediate',
      minutes: 16,
      hook: `You cannot test-drive a haircut, store an empty airline seat or guarantee that every waiter has a good day — services need their own marketing rules.`,
      eli5: `Buying a toy is easy: you can pick it up, look at it and take it home. Buying a magic show for a party is different. You cannot see it before it happens, the magician has to be there, a good magician might have a bad day, and if nobody books Saturday night that show is lost forever. So the magician shows videos and reviews (to make it less invisible), trains hard (to be consistent) and charges more on busy Saturdays (to fill quiet days).`,
      blocks: [
        {
          type: 'text', title: 'Almost every offer is part service',
          html: `<p>A <b>service</b> is any act or performance one party offers another that is essentially intangible and does not result in ownership of anything. Services dominate rich economies, and manufacturers increasingly earn money from services around their products (maintenance, financing, software). <a href="#/lesson/operations-6">Operations, lesson 6</a> covers how to run service operations; this lesson is about <b>marketing</b> them.</p>`
        },
        {
          type: 'compare', title: 'The service-mix spectrum', headers: ['Category', 'What it looks like', 'Examples'],
          rows: [
            ['Pure tangible good', 'No services attached', 'Salt, toothpaste'],
            ['Tangible good with services', 'A good plus services that make it attractive', 'Cars with warranties, finance and maintenance plans'],
            ['Hybrid', 'Roughly equal parts good and service', 'Restaurants: food and service matter equally'],
            ['Major service with minor goods', 'A core service with supporting goods', 'Air travel with meals and drinks on board'],
            ['Pure service', 'Primarily intangible', 'Babysitting, psychotherapy, consulting']
          ]
        },
        {
          type: 'map', title: 'Four distinctive characteristics and what to do about each', center: 'Services',
          branches: [
            { label: 'Intangibility', desc: 'Cannot be seen, tasted or touched before purchase, so buyers look for signals of quality. Make the intangible tangible.', children: ['Physical evidence', 'Reviews and guarantees', 'Clear process maps'] },
            { label: 'Inseparability', desc: 'Produced and consumed at the same time, often with the provider present. The employee is part of the product, and customers co-produce.', children: ['Train front-line staff', 'Serve larger groups', 'Faster or digital delivery'] },
            { label: 'Variability', desc: 'Quality depends on who, when, where and how. Reduce variance without killing warmth.', children: ['Hiring and training', 'Standard blueprints', 'Satisfaction tracking'] },
            { label: 'Perishability', desc: 'Cannot be stored. Unused capacity is lost forever, so manage demand and supply together.', children: ['Time-based pricing', 'Reservations', 'Part-time staff', 'Shared capacity'] }
          ]
        },
        {
          type: 'flow', title: 'The service-quality gaps model: where quality leaks out',
          when: 'Use it to diagnose why customers are disappointed even though everyone is "working hard".',
          steps: [
            { label: 'Customer expectations', kind: 'start', desc: 'Formed by word of mouth, personal needs, past experience and the firm\'s own promises.' },
            { label: 'Gap 1: management misreads expectations', desc: 'Leaders assume they know what customers want and do not research it.' },
            { label: 'Gap 2: wrong service standards', desc: 'Management understands expectations but sets standards that do not reflect them (e.g. "answer in 20 seconds" when customers want a solved problem).' },
            { label: 'Gap 3: delivery misses the standard', desc: 'Poorly trained, overloaded or unmotivated staff, or systems that do not support them.' },
            { label: 'Gap 4: communication overpromises', desc: 'Advertising promises more than operations can deliver.' },
            { label: 'Gap 5: perceived service falls short of expected service', kind: 'end', desc: 'The customer\'s verdict — the sum of gaps 1 to 4. Close the internal gaps to close this one.' }
          ]
        },
        {
          type: 'framework', name: 'Five dimensions of service quality', when: 'To design surveys and standards; the dimensions are listed in roughly the order customers usually rank them',
          steps: [
            { label: 'Reliability', desc: 'Performing the promised service dependably and accurately. Usually the most important: do what you said, the first time.' },
            { label: 'Responsiveness', desc: 'Willingness to help quickly. Speed of response, especially when something has gone wrong.' },
            { label: 'Assurance', desc: 'Knowledge, courtesy and the ability to convey trust and confidence (a calm pilot, a credentialed doctor).' },
            { label: 'Empathy', desc: 'Caring, individualised attention: remembering the customer, understanding their situation.' },
            { label: 'Tangibles', desc: 'Facilities, equipment, staff appearance and materials. Important as signals, but rarely enough on their own.' }
          ]
        },
        {
          type: 'cycle', title: 'The service-profit chain', center: 'Profit and growth',
          steps: [
            { label: 'Internal service quality', desc: 'Good tools, training, selection and workplace design for employees.' },
            { label: 'Satisfied, productive employees', desc: 'Engaged staff stay longer and serve better.' },
            { label: 'Greater service value', desc: 'More effective, efficient value creation and delivery for customers.' },
            { label: 'Satisfied, loyal customers', desc: 'Customers who return, buy more and refer others.' },
            { label: 'Healthy profits and growth', desc: 'Which funds reinvestment in internal service quality, restarting the loop.' }
          ]
        },
        {
          type: 'case', company: 'The Ritz-Carlton Hotel Company', year: '1980s–today', title: 'Engineering warmth at scale',
          situation: `Luxury hotels sell an intangible, variable experience delivered by thousands of employees across many properties. A single careless interaction can undo the effect of a beautiful lobby.`,
          decision: `Ritz-Carlton codified its service in its "Gold Standards" (a credo, service values and the motto "We are Ladies and Gentlemen serving Ladies and Gentlemen"), held short daily line-up meetings to reinforce one standard at a time, and empowered employees to spend up to $2,000 to resolve a guest's problem without asking a manager.`,
          outcome: `It became the first hospitality company to win the US Malcolm Baldrige National Quality Award (1992), and won it again in 1999. Its approach is widely studied and it runs a training arm teaching other companies its methods.`,
          lesson: `Variability is managed through selection, a short list of standards, daily reinforcement and empowerment. Empowerment closes Gap 3 because staff can fix problems in the moment.`
        },
        {
          type: 'callout', kind: 'insight', title: 'The new service realities',
          html: `<ul><li><b>The customer relationship has shifted.</b> Customers compare service publicly through reviews and social media, and expect fast, personalised, always-on help.</li><li><b>Self-service technologies</b> (ATMs, airline kiosks, apps, AI chat assistants) cut cost and waiting but must be easy and must offer a quick route to a human when they fail.</li><li><b>Differentiation</b> comes from the primary service package (what customers expect) plus secondary features, delivery (more reliable, faster, more personal people and processes) and image.</li><li><b>Managing expectations:</b> underpromise slightly, explain what will happen next, and recover brilliantly when things go wrong. A well-handled failure often builds more loyalty than no failure at all.</li><li><b>Product-support services</b> (installation, parts, repairs, training) are a big profit pool for equipment makers. Survey customers on what matters, guarantee response times, and offer tiered service contracts.</li></ul>`
        },
        {
          type: 'scenario',
          prompt: `A bank\'s survey shows customers rate branch staff as friendly (empathy high) but complain that card-replacement requests are "lost" and take weeks (reliability low). The marketing team wants a new advertising campaign: "We care about you." What should you recommend?`,
          options: [
            { text: 'Run the campaign — empathy is a strength, so lead with it.', feedback: 'This widens Gap 4: promising care while failing on reliability makes the disappointment worse.', good: false },
            { text: 'Hold the campaign. Fix the replacement process first (standard, tracking, a guaranteed time), then communicate the fixed promise.', feedback: 'Correct. Reliability usually matters most. Close Gaps 2 and 3 before making new promises.', good: true },
            { text: 'Redesign the branches to look more modern.', feedback: 'Tangibles are rarely the problem when reliability is failing.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Intangibility', def: `Services cannot be seen, tasted or touched before purchase, so buyers rely on cues of quality.` },
        { term: 'Inseparability', def: `Services are produced and consumed at the same time, so the provider is part of the service.` },
        { term: 'Variability', def: `Service quality varies with who provides it and when, where and how.` },
        { term: 'Perishability', def: `Services cannot be stored; unused capacity is lost for ever.` },
        { term: 'Service-quality gaps model', def: `A diagnosis of five gaps between what customers expect and what they perceive, four of which sit inside the firm.` },
        { term: 'Self-service technology', def: `Tools that let customers serve themselves, such as kiosks, apps and chat assistants.` },
        { term: 'Service recovery', def: `What a firm does to put things right after a service failure.` }
      ],
      quiz: [
        { q: 'A 200-room hotel runs at 70% occupancy on a night when the average room rate is $150. How much room revenue is lost to perishability that night?', options: ['$21,000', '$9,000', '$30,000', '$6,000'], answer: 1, explain: '30% of 200 rooms = 60 empty rooms × $150 = $9,000 that can never be recovered.' },
        { q: 'Advertising promises "zero waiting" but branches have queues. Which gap is this?', options: ['Gap 1', 'Gap 2', 'Gap 3', 'Gap 4'], answer: 3, explain: 'Gap 4 is the gap between delivery and external communications: overpromising.' },
        { q: 'Which quality dimension do customers usually rank most important?', options: ['Reliability', 'Tangibles', 'Empathy', 'Assurance'], answer: 0, explain: 'Doing what was promised, accurately, is typically the top driver.' },
        { q: 'A restaurant uses reservations, early-bird menus and part-time staff on weekends. Which characteristic is it managing?', options: ['Intangibility', 'Inseparability', 'Perishability', 'Conformance'], answer: 2, explain: 'These tactics balance demand and capacity because empty tables cannot be stored.' },
        { q: 'On a 7-point scale, customers expect 6.5 for responsiveness and rate a firm 5.2. What is the gap score?', options: ['+1.3', '5.85', '11.7', '−1.3'], answer: 3, explain: 'Gap score = perception − expectation = 5.2 − 6.5 = −1.3. Negative means service falls short.' }
      ],
      challenge: {
        title: 'Fix a clinic chain\'s service',
        prompt: `<p><i>Illustrative.</i> A chain of 20 dental clinics has falling repeat visits. Data: average wait past appointment time 25 minutes; 30% of patients say the bill was higher than quoted; staff turnover 40% a year; online reviews praise the dentists\' skill but call reception "rude". Chairs sit empty on weekday mornings but are full on Saturdays.</p><p>Diagnose using the four characteristics, the gaps model and the five quality dimensions, and propose a 90-day plan.</p>`,
        hints: ['Map each symptom to a quality dimension and to the gap that causes it.', 'Perishability suggests a demand-side and a supply-side fix for the weekday/Saturday imbalance.'],
        model: `<p><b>Diagnosis</b></p><ul><li><b>Reliability</b> (late appointments, surprise bills): Gap 3 (delivery misses standards) and Gap 4 (quotes overpromise). The core clinical service is fine; the surrounding process fails.</li><li><b>Empathy and assurance</b> at reception: variability driven by 40% turnover and weak training — internal service quality is low, breaking the service-profit chain at the first link.</li><li><b>Perishability</b>: empty weekday chairs, crowded Saturdays.</li></ul><p><b>90-day plan</b></p><ol><li><b>Standards (Gap 2):</b> "seen within 10 minutes" and "final bill within 10% of the written quote, or we explain before treatment".</li><li><b>Delivery (Gap 3):</b> schedule buffers, a reception script and training, a small recovery budget each receptionist can use (a free cleaning voucher) without approval; review pay and rota to cut turnover.</li><li><b>Communication (Gap 4):</b> written, itemised quotes; text alerts if running late.</li><li><b>Perishability:</b> weekday-morning pricing for cleanings (time-based pricing), a Saturday booking fee for non-urgent visits, and part-time hygienists on Saturdays.</li><li><b>Measure:</b> monthly gap scores on the five dimensions, wait time, quote accuracy and repeat-visit rate.</li></ol><p><b>Recommendation:</b> fix reliability and reception first; only then advertise the new promise.</p>`
      },
      takeaways: [
        'Services are intangible, inseparable, variable and perishable; each needs its own counter-strategy.',
        'Diagnose disappointment with the gaps model: four internal gaps add up to the customer\'s gap.',
        'Reliability usually matters most; tangibles matter least on their own.',
        'Invest in employees and recovery: the service-profit chain links internal quality to customer loyalty and profit.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'mm-offerings-4',
      title: 'Setting the price: how buyers read prices and the six-step process',
      level: 'Intermediate',
      minutes: 17,
      hook: `Customers rarely know what a product "should" cost — they judge your price against a number in their head, and the best pricers manage that number as carefully as their costs.`,
      eli5: `You go to the school fair with $10. Last year a lemonade cost $1, so $1 feels normal (your <b>reference price</b>). One stall charges $3 but says "fresh squeezed with real mint" — maybe it is better, so expensive must mean good? Another charges $0.99 and it feels much cheaper than $1, even though it is only one cent less. Setting a price is working out what the drink costs to make, what other stalls charge, and what number feels right to the people walking by.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than the basics',
          html: `<p>You met cost-plus, competitor and value-based pricing in <a href="#/lesson/pricing-1">Pricing, lesson 1</a>, and willingness to pay and elasticity in <a href="#/lesson/pricing-2">Pricing, lesson 2</a>. This lesson puts them into a single, ordered <b>price-setting process</b> and adds how buyers actually process prices.</p>`
        },
        {
          type: 'map', title: 'How consumers process prices', center: 'Price perception',
          branches: [
            { label: 'Reference prices', desc: 'Internal (memory of past prices, "fair" price, usual discounted price) and external (a "was" price, a rival\'s price next to yours). Sellers frame prices against favourable references.', children: ['Fair price', 'Last price paid', 'Competitor price'] },
            { label: 'Price-quality inferences', desc: 'When quality is hard to judge (wine, perfume, consultants, first-time purchases), a higher price signals higher quality. Too low a price can scare buyers away.', children: ['Prestige goods', 'Unfamiliar brands'] },
            { label: 'Price endings', desc: 'Prices ending in 9 or 99 feel noticeably cheaper because we read left to right (left-digit effect) and associate them with discounts. Round prices signal quality and simplicity.', children: ['$4.99 vs $5', 'Round = premium'] },
            { label: 'Price cues', desc: 'Signs like "sale" or "lowest price" boost sales even without big cuts, but lose power when overused.', children: ['Sale signs', 'Price-matching'] },
            { label: 'Gain or loss framing', desc: 'People feel losses more than equal gains, so a surcharge hurts more than a missed discount of the same size.', children: ['Surcharge vs discount'] }
          ]
        },
        {
          type: 'flow', title: 'The six-step price-setting process',
          steps: [
            { label: '1. Select the pricing objective', desc: 'Survival, maximum current profit, maximum market share (penetration), maximum market skimming, or product-quality leadership. Non-profits may aim for partial cost recovery.' },
            { label: '2. Determine demand', desc: 'Estimate how many units sell at each price: surveys, price experiments, statistical analysis of past data. Measure price sensitivity and elasticity.' },
            { label: '3. Estimate costs', desc: 'Fixed and variable costs at different volumes, the experience curve (costs fall as cumulative output grows) and target costing (start from the price customers will pay, subtract the desired margin, then engineer the product to that cost).' },
            { label: '4. Analyse competitors\' costs, prices and offers', desc: 'Where your offer has features rivals lack, estimate their value to the customer and add it to the rival\'s price; subtract for features you lack.' },
            { label: '5. Select a pricing method', desc: 'Markup, target-return, perceived-value, value (including EDLP), going-rate or auction pricing.' },
            { label: '6. Select the final price', desc: 'Check company pricing policies, gain-and-risk-sharing options, and the impact on other parties: distributors, sales force, competitors, suppliers and regulators.' }
          ]
        },
        {
          type: 'formula', name: 'Markup and target-return pricing',
          expr: 'Markup price = Unit cost ÷ (1 − Desired return on sales)   |   Target-return price = Unit cost + (Target ROI × Invested capital) ÷ Unit sales',
          explain: `<b>Unit cost</b> = variable cost + fixed costs ÷ expected unit sales. Both methods ignore demand and competition, so treat them as a <b>floor check</b>, not the answer. Target-return also assumes you hit the volume forecast; check break-even volume to see what happens if you do not.`,
          example: `<i>Illustrative.</i> Variable cost $10, fixed costs $300,000, expected sales 50,000 units → unit cost = $10 + $6 = $16.<br>Markup with a 20% return on sales: $16 ÷ 0.8 = <b>$20</b>.<br>Target-return with $1m invested and a 20% ROI target: $16 + ($200,000 ÷ 50,000) = $16 + $4 = <b>$20</b>.<br>Break-even at $20: $300,000 ÷ ($20 − $10) = <b>30,000 units</b>. At 30,000 units the target return vanishes.`
        },
        {
          type: 'compare', title: 'Pricing methods compared', headers: ['Method', 'How it works', 'Best for', 'Watch out'],
          rows: [
            ['Markup', 'Add a standard percentage to unit cost', 'Retailers with thousands of items; construction bids', 'Ignores demand and rivals'],
            ['Target-return', 'Price to earn a target ROI on capital at forecast volume', 'Utilities, capital-intensive firms', 'Collapses if volume misses'],
            ['Perceived-value', 'Price at the value buyers perceive from performance, reliability, service, reputation', 'Differentiated B2B and branded goods', 'Needs real value research, not hope'],
            ['Value pricing / EDLP', 'Fairly low price for a high-quality offer; EDLP keeps a constant low price with few promotions', 'Retailers with a low-cost operating model', 'Needs structurally lower costs to survive'],
            ['High-low', 'Higher everyday prices with frequent deep promotions', 'Retailers whose shoppers enjoy deals', 'Trains customers to wait for sales'],
            ['Going-rate', 'Price at or near the market leader', 'Commodities and oligopolies', 'No pricing power of your own'],
            ['Auction', 'Buyers or sellers bid: English (ascending), Dutch (descending), sealed-bid', 'Ad slots, procurement, used goods, spectrum', 'Winner\'s curse; design rules matter']
          ]
        },
        {
          type: 'case', company: 'DMart (Avenue Supermarts)', year: '2002–today', title: 'EDLP built on a low-cost model',
          situation: `Indian grocery shoppers are highly price-conscious, and many modern-retail chains competed with heavy promotions while leasing expensive store space.`,
          decision: `Founder Radhakishan Damani opened the first DMart in Mumbai in 2002 and built it around everyday low prices. The model kept costs structurally low: a focused assortment of fast-moving staples and household goods, a preference for owning store properties rather than leasing them, simple stores, and paying suppliers faster than industry norms in return for better buying terms.`,
          outcome: `DMart grew steadily into one of India\'s most profitable large retailers and listed on the stock exchanges in 2017 to strong investor demand, while staying cautious about rapid expansion.`,
          lesson: `EDLP is not a price tactic; it is a cost strategy. Without structurally lower costs, a retailer cannot keep prices low every day and still earn a return.`
        },
        {
          type: 'callout', kind: 'tip', title: 'Selecting the final price: three checks',
          html: `<ul><li><b>Company pricing policies:</b> consistency with your positioning, penalty and fee rules, discount authority for sales reps.</li><li><b>Gain-and-risk sharing:</b> when buyers resist a price because they doubt the value, guarantee part of it ("pay us only if energy savings reach X", outcome-based fees).</li><li><b>Impact on other parties:</b> will distributors earn enough margin? Will the sales force sell it? How will rivals react? Could regulators see it as predatory, collusive or discriminatory?</li></ul>`
        },
        {
          type: 'interactive', widget: 'pricing-elasticity', title: 'Find the profit-maximising price',
          note: 'Set unit cost to $16 and start at a $20 price. Raise elasticity from 1.5 to 3 and watch the optimal price fall toward cost — the more price-sensitive the market, the less a markup formula tells you.'
        },
        {
          type: 'checklist', title: 'Before you publish a price',
          items: [
            'Objective written down (profit, share, skimming, quality leadership or survival)',
            'Demand estimated at three or more price points, with an elasticity range',
            'Unit cost at realistic volumes, plus break-even volume at the proposed price',
            'Competitor prices adjusted for differences in value',
            'At least two methods compared (e.g. markup floor vs perceived-value ceiling)',
            'Reference price and price ending chosen deliberately',
            'Channel margins, sales incentives and legal rules checked'
          ]
        }
      ],
      terms: [
        { term: 'Reference price', def: `The price a buyer compares an offer against: a remembered, fair or displayed price.` },
        { term: 'Experience curve', def: `The decline in average cost as cumulative production grows, because the firm learns to make the product more efficiently.` },
        { term: 'Target costing', def: `Starting from the price customers will pay, subtracting the desired margin and designing the product to hit the resulting cost.` },
        { term: 'Perceived-value pricing', def: `Setting price based on the value customers believe they get, built through performance, service, reputation and communication.` },
        { term: 'EDLP', def: `Everyday low pricing: a constant low price with few or no temporary promotions.` },
        { term: 'Going-rate pricing', def: `Setting price largely on competitors' prices, often near the market leader.` },
        { term: 'Gain-and-risk sharing', def: `Pricing in which the seller guarantees some of the promised value, for example by refunding if results fall short.` }
      ],
      quiz: [
        { q: 'Unit cost is $16 and the firm wants a 20% return on sales. What is the markup price?', options: ['$19.20', '$20.00', '$18.00', '$16.20'], answer: 1, explain: '$16 ÷ (1 − 0.20) = $20. Adding 20% of cost ($19.20) is a markup on cost, not on sales.' },
        { q: 'With an 80% experience curve, the first unit costs $100. What does the 4th unit cost?', options: ['$80', '$60', '$64', '$51.20'], answer: 2, explain: 'Each doubling of cumulative output cuts cost to 80%: unit 2 = $80, unit 4 = $64, unit 8 = $51.20.' },
        { q: 'A buyer cannot judge a new wine and assumes the $40 bottle is better than the $12 one. This is:', options: ['A price-quality inference', 'Going-rate pricing', 'A left-digit effect', 'Target-return pricing'], answer: 0, explain: 'When quality is hard to judge, buyers use price as a quality signal.' },
        { q: 'Fixed costs $300,000, variable cost $10, price $20. What is break-even volume?', options: ['15,000', '20,000', '50,000', '30,000'], answer: 3, explain: '$300,000 ÷ ($20 − $10) = 30,000 units.' },
        { q: 'Which retailer most needs structurally low costs to succeed?', options: ['A high-low department store', 'An EDLP grocer', 'A luxury boutique using prestige pricing', 'An auction house'], answer: 1, explain: 'EDLP gives up promotional spikes and keeps prices low every day, which only pays if costs are lower than rivals.' }
      ],
      challenge: {
        title: 'Price a smart bike lock',
        prompt: `<p><i>Illustrative.</i> You are launching a smart bike lock with app tracking. Variable cost $28 a unit, fixed costs $600,000 a year, invested capital $2m. Forecast: 40,000 units in year 1 at a "reasonable" price. Rivals: a basic lock at $59 and a premium app-connected lock at $99. Research suggests buyers value your extra features (longer battery, theft insurance for a year) at about $85 on average, compared with the $99 premium lock\'s package.</p><p>Run the six steps and recommend a price. Show markup (25% return on sales), target-return (20% ROI) and perceived-value answers, and the break-even at your chosen price.</p>`,
        hints: ['Unit cost = $28 + $600,000 ÷ 40,000.', 'Compare cost-based floors with the value-based ceiling, then choose a price ending deliberately.'],
        model: `<p><b>1. Objective:</b> profitable share in the premium-but-not-luxury segment (not skimming, not penetration).</p><p><b>2–3. Demand and cost:</b> unit cost = $28 + $15 = <b>$43</b>.</p><ul><li>Markup: $43 ÷ 0.75 = <b>$57.33</b>.</li><li>Target-return: $43 + ($400,000 ÷ 40,000) = <b>$53</b>.</li></ul><p><b>4. Competitors:</b> the $99 premium lock sets the upper reference; buyers value our package at about $85, so pricing at $99 would ask them to pay more than perceived value.</p><p><b>5. Method:</b> perceived value points to roughly $79–85. Cost methods give a floor of about $53–57.</p><p><b>6. Final price: $79.</b> It sits below the perceived value (leaving buyers a surplus) and below the $99 reference; the 9-ending signals value. Contribution = $79 − $28 = $51. Break-even = $600,000 ÷ $51 ≈ <b>11,765 units</b>.</p><p><b>Profit check:</b> at 40,000 units, 40,000 × $51 − $600,000 = <b>$1.44m</b>. Even if volume falls to 30,000 at the higher price: $1.53m − $0.6m = $0.93m, still well above the $57 option at 40,000 units ($29 × 40,000 − $0.6m = $0.56m).</p><p><b>Recommendation:</b> launch at $79 with a 1-year theft-insurance guarantee (gain-and-risk sharing), give retailers a margin they will accept, and A/B test $79 vs $89 online in the first quarter.</p>`
      },
      takeaways: [
        'Buyers judge prices against reference prices, infer quality from price and respond to price endings and cues.',
        'Follow the six steps: objective, demand, costs, competitors, method, final price.',
        'Cost-based methods give a floor; perceived value gives a ceiling; choose deliberately between them.',
        'EDLP and value pricing are cost strategies, not just price points.',
        'Check the final price against policies, risk-sharing options and its effect on channels, rivals and regulators.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'mm-offerings-5',
      title: 'Adapting prices and responding to price changes',
      level: 'Intermediate',
      minutes: 17,
      hook: `A list price is only where the conversation starts — geography, discounts, promotions, segments and rivals' moves turn one price into a structure of hundreds.`,
      eli5: `A cinema has one "real" ticket price, but children pay less, Tuesday shows are cheaper, people who book early save money and the popcorn-and-ticket combo is a deal. That is <b>adapting</b> the price. Now the new cinema across the road cuts its price in half. Does our cinema panic and copy it? Or does it first ask: will this last, who will actually switch, and is there a smarter answer than a price war?`,
      blocks: [
        {
          type: 'text', title: 'From one price to a price structure',
          html: `<p>Companies rarely charge one price. They build a <b>price structure</b> that varies by place, order size, timing, customer and channel. Discounting tactics and price wars were introduced in <a href="#/lesson/pricing-5">Pricing, lesson 5</a>; here you get the full menu of adaptations and a decision process for reacting to rivals.</p>`
        },
        {
          type: 'compare', title: 'Geographical pricing, discounts and allowances', headers: ['Tool', 'What it is', 'Why use it'],
          rows: [
            ['Geographical pricing', 'Different prices by location, reflecting shipping cost, local demand or taxes', 'Stay competitive far from the plant; reflect local willingness to pay'],
            ['Countertrade (barter, compensation deals, buyback, offset)', 'Payment partly or wholly in goods instead of cash', 'Sell into markets short of hard currency'],
            ['Cash discount', 'A reduction for paying promptly, e.g. "2/10, net 30"', 'Speed up cash collection'],
            ['Quantity discount', 'A lower price per unit for larger orders', 'Pass on economies of selling and shipping in bulk'],
            ['Functional (trade) discount', 'Offered to channel members for performing functions such as selling, storing, record-keeping', 'Pay intermediaries for their role'],
            ['Seasonal discount', 'For buying out of season', 'Smooth production across the year'],
            ['Allowances', 'Trade-in allowances, or promotional allowances for dealers who advertise or display the product', 'Encourage upgrades and channel support']
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'Countertrade: fighter jets for palm oil',
          html: `<p>In 2003 Malaysia agreed to buy Sukhoi fighter jets from Russia and arranged for part of the payment to be made in palm oil, one of its main exports, rather than in hard currency. Barter-style deals like this are still used where currency is scarce or controlled, in defence contracts (offsets) and in some commodity trade.</p>`
        },
        {
          type: 'map', title: 'Promotional and differentiated pricing', center: 'Adapting price',
          branches: [
            { label: 'Promotional pricing', desc: 'Short-term moves to drive traffic or trial: loss-leaders, special-event pricing, cash rebates, low-interest financing, longer payment terms, warranties and service contracts, psychological discounting ("was $X"). Overuse trains buyers to wait.', children: ['Loss-leader', 'Rebates', 'Financing'] },
            { label: 'Customer-segment pricing', desc: 'Different groups pay different prices for the same thing.', children: ['Students', 'Seniors', 'Members'] },
            { label: 'Product-form pricing', desc: 'Versions are priced differently but not in proportion to their costs.', children: ['Premium edition', 'Gift pack'] },
            { label: 'Image pricing', desc: 'The same product at two prices based on image differences: a perfume in a luxury bottle versus a simple one.', children: ['Luxury pack'] },
            { label: 'Channel pricing', desc: 'Different prices depending on where it is bought: a soft drink in a restaurant, a vending machine and a supermarket.', children: ['Restaurant', 'Vending', 'Online'] },
            { label: 'Location pricing', desc: 'Same product, different price by position even when costs are equal: theatre seats, stadium tiers.', children: ['Front row', 'Balcony'] },
            { label: 'Time pricing', desc: 'Prices vary by season, day or hour; yield and dynamic pricing in airlines, hotels and ride-hailing.', children: ['Peak/off-peak', 'Dynamic pricing'] }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'When differentiated pricing works — and when it backfires',
          html: `<p>It works when the market can be segmented, people paying the low price cannot resell to those paying the high price, rivals cannot undersell in the high-price segment, the cost of policing it is lower than the extra revenue, and customers do not see it as unfair. Personalised online prices based on browsing data are increasingly scrutinised by regulators; a price difference customers cannot understand quickly becomes a trust problem.</p>`
        },
        {
          type: 'formula', name: 'Volume change needed to keep profit after a price change',
          expr: 'Required % change in volume = −ΔP% ÷ (CM% + ΔP%)',
          explain: `<b>ΔP%</b> is the price change (negative for a cut). <b>CM%</b> is the contribution margin as a share of the current price. The lower your margin, the more extra volume a cut must win — and the less volume an increase can afford to lose.`,
          example: `<i>Illustrative.</i> Price $100, variable cost $60, so CM = 40%.<br>Cut 10%: −(−10) ÷ (40 − 10) = <b>+33.3%</b> more units just to stand still.<br>Raise 10%: −10 ÷ (40 + 10) = <b>−20%</b>: you can lose up to a fifth of volume and still earn the same contribution.`
        },
        {
          type: 'flow', title: 'Responding to a competitor\'s price cut',
          steps: [
            { label: 'A competitor cuts its price', kind: 'start', desc: 'Gather facts: by how much, on what products, in which channels and segments.' },
            { label: 'Is the cut likely to be temporary?', kind: 'decision', desc: 'A clearance sale or quarter-end push differs from a structural repositioning.', branches: [ { label: 'Yes', to: 'Hold price; monitor; reassure key accounts' }, { label: 'No', to: 'Assess the damage' } ] },
            { label: 'Will it seriously hurt our share and profit if we ignore it?', kind: 'decision', desc: 'Use the required-volume formula and customer data on who would switch.', branches: [ { label: 'No', to: 'Hold price; strengthen value message' }, { label: 'Yes', to: 'Choose a response' } ] },
            { label: 'Choose the response', desc: 'Options: (a) maintain price and add perceived value (service, communication); (b) reduce price, if costs fall with volume; (c) raise price and improve quality to move upmarket; (d) launch a low-priced fighter brand to fight on the rival\'s ground.' },
            { label: 'Execute and monitor', kind: 'end', desc: 'Watch share, margin and the rival\'s next move; avoid an escalating price war that teaches the market to wait.' }
          ]
        },
        {
          type: 'case', company: 'Qantas (Jetstar)', year: '2000–2020', title: 'A fighter brand that became a business',
          situation: `Virgin Blue entered the Australian domestic market in 2000 with low fares, and the collapse of Ansett in 2001 left Qantas and Virgin Blue as the main domestic carriers. Matching low fares with the full-service Qantas brand would have cut yields across the whole network.`,
          decision: `Rather than cut Qantas fares across the board, the group launched a separate low-cost airline, Jetstar, which began flying in 2004 with its own lower cost base and simpler product. Qantas kept its premium brand and fares for business and full-service travellers.`,
          outcome: `Jetstar grew into a major low-cost group with affiliates in several Asian markets, while Qantas protected its premium positioning. Virgin later shifted upmarket to chase corporate travellers, before entering voluntary administration in 2020.`,
          lesson: `A fighter brand lets you meet a low-price attack without repricing your core brand — but only if it has a genuinely lower cost base, not just a lower price.`
        },
        {
          type: 'scenario',
          prompt: `Your costs have risen 8% and you must raise prices. Customers are loyal but vocal. Which approach usually protects relationships best?`,
          options: [
            { text: 'Raise the price 8% overnight without explanation.', feedback: 'Surprise increases feel unfair and trigger switching and bad publicity.', good: false },
            { text: 'Give notice, explain the cost reasons honestly, offer choices (a smaller or no-frills version, or locking in the old price with a longer contract), and consider unbundling extras rather than raising the headline price.', feedback: 'Right. Advance notice, a fair reason and options reduce resentment. Alternatives include delayed quotation pricing, escalator clauses, unbundling and reducing discounts.', good: true },
            { text: 'Quietly shrink the pack and keep the price.', feedback: 'This "shrinkflation" can work short term but is widely criticised and in some countries now requires disclosure; when discovered it damages trust.', good: false }
          ]
        },
        {
          type: 'interactive', widget: 'pricing-elasticity', title: 'Test a price cut before a rival forces one',
          note: 'Set unit cost to $60 and price to $100. With elasticity 1.5, cut price 10% and see whether profit rises or falls; then try elasticity 4. Only very price-sensitive markets reward the cut.'
        }
      ],
      terms: [
        { term: 'Countertrade', def: `Paying for goods partly or wholly with other goods rather than cash, including barter, buyback and offset deals.` },
        { term: 'Functional discount', def: `A discount to channel members for performing functions such as selling, storing and record-keeping.` },
        { term: 'Loss-leader pricing', def: `Pricing a well-known item very low to bring shoppers into the store, hoping they buy other items too.` },
        { term: 'Differentiated pricing', def: `Selling the same product at different prices to different segments, forms, images, channels, locations or times.` },
        { term: 'Fighter brand', def: `A lower-priced brand launched to fight a low-price competitor without cutting the price of the main brand.` },
        { term: 'Escalator clause', def: `A contract term letting the seller raise the price in line with a specified cost or inflation index.` }
      ],
      quiz: [
        { q: 'Terms are "2/10, net 30". By paying on day 10 rather than day 30, roughly what annual rate does the buyer earn?', options: ['About 37%', 'About 2%', 'About 24%', 'About 10%'], answer: 0, explain: '2 ÷ 98 ≈ 2.04% for 20 days; × 365 ÷ 20 ≈ 37% a year. Cash discounts are expensive for sellers and attractive for buyers.' },
        { q: 'Contribution margin is 40%. A 10% price cut needs roughly what increase in volume to keep contribution unchanged?', options: ['10%', '25%', '33%', '40%'], answer: 2, explain: '10 ÷ (40 − 10) = 33.3%.' },
        { q: 'A soft drink costs more in a restaurant than in a supermarket. This is:', options: ['Image pricing', 'Location pricing', 'Product-form pricing', 'Channel pricing'], answer: 3, explain: 'The price differs by the channel through which it is bought.' },
        { q: 'With a 40% contribution margin, how much volume can a 10% price increase lose before contribution falls?', options: ['10%', '20%', '25%', '40%'], answer: 1, explain: '−10 ÷ (40 + 10) = −20%.' },
        { q: 'A rival launches a permanent low-price offer that is winning your price-sensitive customers. You want to keep your premium brand\'s price. Which response fits?', options: ['Ignore it; it must be temporary', 'Cut the premium brand\'s price to match', 'Launch a lower-cost fighter brand for the price-sensitive segment', 'Raise prices on all products'], answer: 2, explain: 'A fighter brand meets the threat in that segment while protecting the premium brand\'s pricing — provided it has a lower cost base.' }
      ],
      challenge: {
        title: 'Match the cut or not?',
        prompt: `<p><i>Illustrative.</i> You sell a branded detergent at $50 a tub (variable cost $30) and sell 100,000 tubs a year. A rival has cut its comparable product by 15% and says the price is permanent. Your research suggests that if you do nothing you lose 15% of volume; if you match, volume rises about 5% because some buyers prefer you at equal prices.</p><p>Compare (a) hold price, (b) match to $42.50, and (c) hold price on your brand and launch a fighter product at $39 with a variable cost of $27 that you expect to sell 20,000 units (half taken from your main brand). Recommend one.</p>`,
        hints: ['Contribution per unit: $20 today; $12.50 if you match.', 'For the fighter, count only the incremental volume it adds versus the "hold" scenario, and the main-brand units it cannibalises.'],
        model: `<p><b>Baseline today:</b> 100,000 × $20 = $2.0m.</p><p><b>(a) Hold:</b> 85,000 × $20 = <b>$1.70m</b>.</p><p><b>(b) Match:</b> 105,000 × $12.50 = <b>$1.31m</b>. The formula says a 15% cut needs 15 ÷ (40 − 15) = 60% more volume to stand still; a 5% gain is nowhere near.</p><p><b>(c) Hold + fighter:</b> main brand loses the rival-driven 15% <i>and</i> 10,000 units to its own fighter: 75,000 × $20 = $1.50m. Fighter: 20,000 × ($39 − $27) = $0.24m. Total <b>$1.74m</b>.</p><p><b>Comparison:</b> match $1.31m &lt; hold $1.70m &lt; fighter $1.74m. The fighter edges ahead only if its own fixed costs (pack design, listing fees) stay below about $40,000 a year and its cannibalisation stays near half.</p><p><b>Recommendation:</b> do not match. Hold the brand price and strengthen its value message; pilot the fighter in the most price-sensitive channel (discounters) for six months, track cannibalisation, and kill it if cannibalisation exceeds half or its fixed costs eat the gain.</p>`
      },
      takeaways: [
        'Adapt price by geography, discounts and allowances, promotions and differentiated pricing — but keep the structure fair and explainable.',
        'Low margins make price cuts very expensive: use the required-volume formula before reacting.',
        'Follow a decision flow for rival cuts: temporary or permanent, how much damage, then choose among hold-and-add-value, cut, move up or a fighter brand.',
        'Raise prices with notice, reasons and options rather than surprise.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'mm-offerings-6',
      title: 'Marketing channels and value networks: design, management, conflict and omnichannel',
      level: 'Advanced',
      minutes: 19,
      hook: `A great product with the wrong channel is invisible; the channel you choose today locks in costs, partners and customer habits for a decade.`,
      eli5: `A farmer grows apples. She could sell every apple herself at her gate (few buyers), or give them to a wholesaler who sells to shops all over the city (many buyers, but the wholesaler takes a share). Each helper in the chain does a job — storing, carrying, selling, collecting money — and takes some of the price for it. Channel design is choosing which helpers to use, how many, and how to keep them working together instead of fighting.`,
      blocks: [
        {
          type: 'map', title: 'What channels do: functions and flows', center: 'Channel functions',
          branches: [
            { label: 'Information', desc: 'Gather and share market research on customers, competitors and conditions.', children: ['Research', 'Demand signals'] },
            { label: 'Promotion and negotiation', desc: 'Communicate offers persuasively and agree price and terms so ownership can transfer.', children: ['Selling', 'Terms'] },
            { label: 'Ordering and payment', desc: 'Signal intent to buy back up the chain and move money down it.', children: ['Orders', 'Collections'] },
            { label: 'Financing and risk', desc: 'Fund inventory at each level and bear the risk of carrying it.', children: ['Inventory finance', 'Obsolescence risk'] },
            { label: 'Physical possession', desc: 'Storage and movement of goods from raw material to the final customer.', children: ['Warehousing', 'Transport'] },
            { label: 'Title and service', desc: 'Transfer ownership and support the customer after the sale.', children: ['Ownership', 'Returns and repairs'] }
          ]
        },
        {
          type: 'text', title: 'Channel levels and service channels',
          html: `<p>A <b>zero-level channel</b> (direct marketing) goes straight from maker to customer: a brand\'s own website, factory outlet or sales force. A <b>one-level</b> channel uses one intermediary (a retailer); <b>two-level</b> adds a wholesaler; <b>three-level</b> adds a jobber or sub-distributor, common for small retailers in fragmented markets like India\'s kirana network. Functions can be shifted between members, but not eliminated: someone always stores, ships and collects.</p><p><b>Service sectors</b> have channels too: banks use branches, ATMs, apps and agents; schools and health systems use online and outreach channels to reach people in remote places. Intermediaries also reduce work: 4 producers selling directly to 5 retailers need 20 contacts; through one distributor they need only 9.</p>`
        },
        {
          type: 'flow', title: 'Designing a channel system',
          steps: [
            { label: 'Analyse customer service needs', desc: 'Lot size (how many units at once), waiting and delivery time, spatial convenience, product variety (assortment breadth) and service backup (installation, repair, credit). More service means higher channel cost and price.' },
            { label: 'Set objectives and constraints', desc: 'Target service levels by segment, shaped by product traits (perishable, bulky, technical), the company\'s resources, competitors\' channels, and the legal environment.' },
            { label: 'Identify alternatives', desc: 'Types of intermediaries (company sales force, agents, distributors, retailers, online marketplaces); number of intermediaries (exclusive, selective, intensive); and terms and responsibilities (price policy, conditions of sale, territorial rights, specific services).' },
            { label: 'Do economics, control and adaptability support the option?', kind: 'decision', desc: 'Compare sales and cost at each volume; how much control over pricing and service you keep; how flexible the commitment is.', branches: [ { label: 'Yes', to: 'Recruit members and sign terms' }, { label: 'No', to: 'Return to alternatives' } ] },
            { label: 'Launch and manage', desc: 'Select, train, motivate and evaluate members, and modify the design as the market changes.' }
          ]
        },
        {
          type: 'compare', title: 'How many intermediaries?', headers: ['', 'Exclusive', 'Selective', 'Intensive'],
          rows: [
            ['What it means', 'One or very few dealers per territory', 'More than a few but not all willing outlets', 'As many outlets as possible'],
            ['Typical products', 'Luxury cars, high-end fashion, some equipment', 'Appliances, branded clothing, electronics', 'Snacks, soft drinks, toothpaste, phone top-ups'],
            ['Upside', 'Strong dealer commitment, service and image', 'Good coverage with control and lower cost', 'Maximum availability and impulse sales'],
            ['Downside', 'Limited reach; legal scrutiny of exclusive territories', 'Requires active partner management', 'Little control; price competition among outlets']
          ]
        },
        {
          type: 'cycle', title: 'Channel-management decisions', center: 'Channel partners',
          steps: [
            { label: 'Select', desc: 'Judge years in business, other lines carried, growth, financial strength, cooperativeness and service reputation.' },
            { label: 'Train', desc: 'Product, selling and service training so partners represent the brand well.' },
            { label: 'Motivate', desc: 'Treat members as partners: fair margins, co-op advertising, data sharing, joint plans. Use power carefully (reward, expert, referent, legitimate, coercive).' },
            { label: 'Evaluate', desc: 'Against standards: sales quota, average inventory, delivery time, handling of damaged goods, cooperation with promotions, customer service.' },
            { label: 'Modify', desc: 'Add or drop members, add channels or redesign the system as buying patterns, markets and the product life cycle change.' }
          ]
        },
        {
          type: 'framework', name: 'Channel integration systems', when: 'When conventional channels (independent members each maximising their own profit) produce conflict and waste',
          steps: [
            { label: 'Corporate VMS', desc: 'Successive stages of production and distribution under single ownership (a fashion brand that owns its factories and stores).' },
            { label: 'Administered VMS', desc: 'One dominant member coordinates the others through size and power, e.g. a leading brand that shapes retailers\' displays and promotions.' },
            { label: 'Contractual VMS', desc: 'Independent firms bound by contracts: wholesaler-sponsored voluntary chains, retailer cooperatives and franchises (manufacturer-retailer, manufacturer-wholesaler such as soft-drink bottlers, service-firm-retailer such as fast food).' },
            { label: 'Horizontal marketing system', desc: 'Two or more unrelated firms at the same level pool resources: a bank placing ATMs or branches inside supermarkets.' },
            { label: 'Multichannel and omnichannel', desc: 'Serving segments through several channels; omnichannel makes them work as one (buy online, pick up in store, return anywhere, one customer record).' }
          ]
        },
        {
          type: 'case', company: 'Apple (Apple Retail)', year: '2001–today', title: 'Building a company-owned channel',
          situation: `Around 2000, Macs were sold mainly through computer superstores and resellers, where they sat among many Windows PCs and sales staff had little reason to explain what made a Mac different. Apple had little control over how its products were shown, demonstrated or supported.`,
          decision: `Apple hired Ron Johnson from Target to build a retail chain, prototyped the store design in a warehouse, and opened its first two stores in May 2001 in Virginia and California, despite widespread scepticism in the business press. Stores were organised around what customers wanted to do rather than product categories, with free workshops and a Genius Bar for face-to-face support.`,
          outcome: `Apple Stores became a key channel for the iPod, iPhone and later products, and are widely reported to achieve some of the highest sales per square foot in retailing. Apple kept selling through carriers and selected retailers at the same time, so the stores worked as a flagship within a multichannel system.`,
          lesson: `A corporate (owned) channel buys control over presentation, service and the customer relationship, at the cost of capital and fixed commitment. It works best when the product needs explaining and the brand experience is part of the value.`
        },
        {
          type: 'map', title: 'Channel conflict: types, causes and fixes', center: 'Conflict',
          branches: [
            { label: 'Types', desc: 'Vertical (between levels: brand vs retailer), horizontal (between members at the same level: two dealers in one city) and multichannel (online store vs physical partners).', children: ['Vertical', 'Horizontal', 'Multichannel'] },
            { label: 'Causes', desc: 'Goal incompatibility (brand wants share, dealer wants margin), unclear roles and territories, differences in perception, and dependence on one partner.', children: ['Goals', 'Territories', 'Dependence'] },
            { label: 'Fixes', desc: 'Strategic justification (explain why the change helps everyone), dual compensation (pay existing channels for sales in their area via new channels), superordinate goals, employee exchanges, joint associations, co-optation, diplomacy, mediation and arbitration.', children: ['Dual compensation', 'Shared goals', 'Arbitration'] },
            { label: 'Legal limits', desc: 'Exclusive dealing, exclusive territories, tying agreements and refusing to deal can breach competition law in some circumstances.', children: ['Competition law'] }
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'E-commerce, m-commerce and the brick-and-click race',
          html: `<p><b>Pure-click</b> firms began online only; <b>brick-and-click</b> firms combine stores and digital. The lines have blurred in both directions: Amazon bought Whole Foods in 2017 to gain physical stores, while online-born brands such as Warby Parker opened showrooms. Large hotel groups ran "book direct" campaigns from 2016 to shift guests from online travel agencies to their own apps — a live example of multichannel conflict managed with member-only rates rather than by cutting off the agencies. <b>m-commerce</b> (mobile shopping) is now the default in many markets, especially India and South-East Asia.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your appliance brand sells through 300 independent dealers. You want to launch your own online store at the same prices. Dealers threaten to push rival brands. What is the strongest move?`,
          options: [
            { text: 'Launch online at 10% below dealer prices to win share fast.', feedback: 'This invites dealers to switch brands and starts a multichannel price war you may lose in the stores where most customers still buy.', good: false },
            { text: 'Launch online at the same prices, route installation and repairs to local dealers with a commission on online sales in their territory, and share online demand data with them.', feedback: 'Correct. Dual compensation plus a clear role for dealers (service) turns a competitor channel into a lead source for them.', good: true },
            { text: 'Drop the dealers and go fully direct.', feedback: 'Risky: you lose coverage, installation and service capacity overnight, as several brands that went "all-in" on direct have learned.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Marketing channel', def: `The set of interdependent organisations that make a product available for use or consumption.` },
        { term: 'Channel level', def: `Each layer of intermediaries between producer and final buyer; a zero-level channel is direct.` },
        { term: 'Selective distribution', def: `Using more than a few, but not all, of the intermediaries willing to carry a product.` },
        { term: 'Vertical marketing system (VMS)', def: `Producer, wholesaler and retailers acting as one unified system through ownership, power or contracts.` },
        { term: 'Channel conflict', def: `Action by one channel member that prevents another from achieving its goals.` },
        { term: 'Dual compensation', def: `Paying existing channels for sales made in their territory through new channels, to reduce conflict.` },
        { term: 'Omnichannel', def: `Integrating all channels so customers can move between them seamlessly with one experience.` }
      ],
      quiz: [
        { q: 'Four producers sell to five retailers. How many contacts are needed with no intermediary, and with one distributor in between?', options: ['20 and 9', '9 and 20', '20 and 20', '5 and 4'], answer: 0, explain: 'Direct: 4 × 5 = 20 contacts. Via one distributor: 4 + 5 = 9.' },
        { q: 'An agency charges 5% of sales. A company sales force costs $400,000 a year plus 2% of sales. Above what sales level is the company sales force cheaper?', options: ['$8.0m', '$20.0m', '$13.3m', '$4.0m'], answer: 2, explain: '0.05S = 400,000 + 0.02S → 0.03S = 400,000 → S ≈ $13.3m. Below that, the agency costs less.' },
        { q: 'Fast-food franchising is an example of which system?', options: ['Corporate VMS', 'Administered VMS', 'Horizontal marketing system', 'Contractual VMS'], answer: 3, explain: 'Independent franchisees are tied to the franchisor by contract.' },
        { q: 'Which customer service output is about how far buyers must travel to buy?', options: ['Lot size', 'Spatial convenience', 'Service backup', 'Assortment breadth'], answer: 1, explain: 'Spatial convenience is the ease of reaching the point of purchase.' },
        { q: 'Two franchise dealers in the same city fight over customers. This is:', options: ['Horizontal conflict', 'Vertical conflict', 'Multichannel conflict', 'Not conflict, just competition'], answer: 0, explain: 'Conflict between members at the same level of the channel is horizontal.' }
      ],
      challenge: {
        title: 'Agents or our own sales force?',
        prompt: `<p><i>Illustrative.</i> A premium cookware maker is entering a new country. Option A: independent sales agents paid 6% of sales. Option B: its own sales team costing $450,000 a year plus 3% of sales. Forecast sales: $10m in year 1, rising to $20m by year 3. Products need in-store demonstrations, and the brand wants control over pricing and display.</p><p>Evaluate both with the economic, control and adaptive criteria, and recommend a plan.</p>`,
        hints: ['Find the sales level where the two costs are equal.', 'Agents are flexible but sell other brands; a team gives control but is a fixed commitment.'],
        model: `<p><b>Economics.</b> Break-even: 0.06S = 450,000 + 0.03S → 0.03S = 450,000 → <b>S = $15m</b>.</p><ul><li>Year 1 ($10m): agents $600,000 vs own team $750,000 → agents cheaper by $150,000.</li><li>Year 3 ($20m): agents $1.2m vs own team $1.05m → own team cheaper by $150,000.</li></ul><p><b>Control.</b> Agents carry several brands and may push whichever pays most; demonstrations and price discipline are harder to enforce. An own team gives control over display, training and price.</p><p><b>Adaptability.</b> Agent contracts are easier to exit if the market disappoints; a team is a fixed commitment with hiring and severance costs.</p><p><b>Recommendation:</b> start with agents in year 1 on a two-year contract with clear performance standards (demonstration days, price policy, minimum display), and a written transition clause. Build a small own team in the two largest cities in year 2 as sales approach $15m, and switch fully once sales pass break-even and the market is proven. Use a decision matrix with economics weighted highest, then control.</p>`
      },
      takeaways: [
        'Channels perform functions and flows that can be shifted between members but never eliminated.',
        'Design from customer service needs: lot size, waiting time, spatial convenience, assortment and service backup.',
        'Judge options on economics, control and adaptability; choose exclusive, selective or intensive coverage deliberately.',
        'Manage members as partners (select, train, motivate, evaluate, modify) and resolve conflict with roles, dual compensation and shared goals.',
        'Omnichannel means integrating channels around the customer, not simply adding more of them.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'mm-offerings-7',
      title: 'Retailing, wholesaling and market logistics',
      level: 'Advanced',
      minutes: 19,
      hook: `The last few metres to the customer — the shelf, the app, the delivery van — are where most of the price is spent and where many brands are won or lost.`,
      eli5: `Think of a school canteen. Someone decides which snacks to stock (assortment), where to put them (store layout), how much to charge (price) and whether to make its own brand of cookies (private label). Behind it, a big supplier buys from many factories and splits huge boxes into canteen-sized ones (wholesaling). And a van must arrive before break time every day, with not too much stock and never too little (logistics).`,
      blocks: [
        {
          type: 'text', title: 'Retailers, wholesalers and the flow of goods',
          html: `<p><b>Retailing</b> is every activity involved in selling goods or services directly to final consumers for personal use. <b>Wholesaling</b> is selling to those who buy for resale or business use. <b>Market logistics</b> is planning and controlling the physical flow from origin to the point of use, at a profit.</p><p>Inventory policy (EOQ, safety stock) is covered in <a href="#/lesson/operations-4">Operations, lesson 4</a> and supply-chain design in <a href="#/lesson/operations-5">Operations, lesson 5</a>. Here the lens is <b>marketing</b>: which retail format, which assortment, what service level customers will pay for.</p>`
        },
        {
          type: 'compare', title: 'Major types of retailer', headers: ['Group', 'Formats', 'Examples of how they compete'],
          rows: [
            ['Store retailers', 'Specialty stores, department stores, supermarkets, convenience stores, drugstores, discount stores, off-price retailers (factory outlets, warehouse clubs), superstores and hypermarkets, category killers', 'Range, convenience, price, experience; warehouse clubs compete on low prices and bulk packs for members'],
            ['Non-store retailers', 'Direct selling (party plans, multi-level), direct marketing (catalogues, TV shopping), online and app retail, automated vending, buying services', 'Reach, convenience, personal relationships, 24/7 availability'],
            ['Corporate and contractual', 'Corporate chains, voluntary chains (wholesaler-sponsored), retailer cooperatives, consumer cooperatives, franchises, merchandising conglomerates', 'Buying power, shared branding and systems, economies of scale']
          ]
        },
        {
          type: 'map', title: 'Retailer marketing decisions', center: 'Retail strategy',
          branches: [
            { label: 'Target market', desc: 'Define the shopper precisely; everything else follows. A store aimed at everyone usually satisfies no one.', children: ['Segment', 'Mission'] },
            { label: 'Channels', desc: 'Stores, website, app, marketplace, quick commerce, and how they connect (click-and-collect, ship-from-store).', children: ['Stores', 'Online', 'Pickup'] },
            { label: 'Assortment', desc: 'Breadth and depth of range, chosen to match the target; a few exclusive or hard-to-find items differentiate.', children: ['Breadth', 'Depth', 'Exclusives'] },
            { label: 'Procurement', desc: 'Where to buy, at what terms; direct product profitability measures each item\'s handling cost from warehouse to checkout.', children: ['Buying terms', 'DPP'] },
            { label: 'Prices', desc: 'High markup with lower volume (boutiques) or low markup with high volume (discounters); EDLP or high-low.', children: ['Markup', 'EDLP / high-low'] },
            { label: 'Services', desc: 'Pre-purchase (ordering, information), post-purchase (delivery, installation, returns) and ancillary (credit, gift wrapping, Wi-Fi).', children: ['Delivery', 'Returns', 'Credit'] },
            { label: 'Store atmosphere and experiences', desc: 'Layout, lighting, music, scent and in-store activities (classes, demos, cafés) that make a visit worth leaving home for.', children: ['Layout', 'Events'] },
            { label: 'Communications', desc: 'Advertising, loyalty programmes, retail media networks selling ad space on the retailer\'s own app and site, and personalised offers.', children: ['Loyalty', 'Retail media'] }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Private labels and how manufacturers respond',
          html: `<p>A <b>private label</b> (store brand) is developed by the retailer. Retailers like them because margins are often higher, they differentiate the store and they strengthen bargaining power with brand owners. Discount grocers such as Aldi sell mostly own-label products.</p><p><b>Manufacturer responses:</b></p><ul><li><b>Innovate</b> faster and protect it, so the brand stays ahead of copies.</li><li><b>Build brand value</b> through communication and design that store brands cannot easily match.</li><li><b>Offer a value line</b> or fighter product, or sharpen pricing where gaps are too wide.</li><li><b>Partner</b> with big retailers on category management and exclusive pack sizes.</li><li><b>Supply private labels</b> themselves to use spare capacity — with care not to fund a competitor to the main brand.</li></ul>`
        },
        {
          type: 'case', company: 'Costco (Kirkland Signature)', year: '1995–today', title: 'A store brand customers seek out',
          situation: `Costco runs warehouse clubs with a deliberately narrow assortment of a few thousand items, low markups and income from annual membership fees. A narrow range gives it big volumes per item and strong buying power.`,
          decision: `In 1995 it launched Kirkland Signature, named after the Washington town where it was then headquartered. Rather than position it as a cheap copy, Costco set quality at or above leading brands and sometimes co-produced items with well-known manufacturers (for example, coffee labelled as roasted by Starbucks).`,
          outcome: `Kirkland Signature became one of the best-known store brands in the world and accounts for a large share of Costco\'s sales, supporting member loyalty and renewals.`,
          lesson: `A private label can be a reason to shop at the store, not just a margin tool, when it is positioned on quality-for-value and fits the retailer\'s promise.`
        },
        {
          type: 'framework', name: 'What wholesalers do — and where wholesaling is heading', when: 'To decide whether to use a wholesaler, or how a wholesaler can stay relevant',
          steps: [
            { label: 'Selling and promoting', desc: 'A wholesaler\'s sales force reaches many small customers at low cost; small retailers trust it more than a distant manufacturer.' },
            { label: 'Buying and assortment building', desc: 'Selects items and builds the assortment customers need, saving them work.' },
            { label: 'Bulk breaking', desc: 'Buys in truckloads and sells in smaller lots.' },
            { label: 'Warehousing, transport and financing', desc: 'Holds inventory close to customers, delivers fast, and extends credit to customers or pays suppliers early.' },
            { label: 'Risk bearing, market information and management services', desc: 'Absorbs theft, damage and obsolescence risk; shares market news; helps retailers with training, layouts and accounting.' },
            { label: 'Trends', desc: 'Pressure from manufacturers selling direct and big retailers buying direct; response through scale, technology, value-added services (e.g. foodservice and pharma distributors) and B2B e-commerce platforms for small shops.' }
          ]
        },
        {
          type: 'flow', title: 'Market logistics: from customer promise to delivered order',
          steps: [
            { label: 'Set the customer service promise', desc: 'Delivery speed, order completeness, accuracy and returns, by segment. Integrated logistics starts from the market, not the warehouse.' },
            { label: 'Order processing', desc: 'Shorten the order-to-payment cycle: order entry, credit check, allocation, invoicing, payment. Faster cycles cut inventory and improve service.' },
            { label: 'Is the item in stock at the right node?', kind: 'decision', desc: 'Inventory decisions set reorder points and order quantities that balance holding cost against stock-out cost.', branches: [ { label: 'Yes', to: 'Pick, pack and ship' }, { label: 'No', to: 'Back-order, substitute or ship from another node' } ] },
            { label: 'Warehousing', desc: 'How many locations and where; storage warehouses for long holding versus distribution centres that move goods quickly (cross-docking); automation.' },
            { label: 'Transportation', desc: 'Road, rail, water, pipeline, air and multimodal combinations, chosen on speed, frequency, dependability, capability, availability, traceability and cost.' },
            { label: 'Delivered, measured and improved', kind: 'end', desc: 'Track total logistics cost against service metrics; minimising one cost (e.g. transport) often raises another (inventory).' }
          ]
        },
        {
          type: 'case', company: 'Walmart', year: '1980s–today', title: 'Logistics as a marketing weapon',
          situation: `Walmart\'s everyday-low-price promise required lower costs than rivals, and its early stores were in small towns that big distributors served poorly.`,
          decision: `It built a network of large distribution centres feeding clusters of nearby stores, ran its own truck fleet, used cross-docking so many goods passed through without long storage, invested early in a private satellite network and shared point-of-sale data with suppliers through its Retail Link system from the early 1990s. A late-1980s partnership with one of its largest consumer-goods suppliers moved replenishment toward continuous, data-driven ordering.`,
          outcome: `Walmart became the world\'s largest retailer by revenue, and its supply-chain practices became a benchmark. Its logistics advantage underpinned EDLP rather than being a back-office detail.`,
          lesson: `Market logistics is part of the value proposition. When logistics is designed around the customer promise and data is shared with suppliers, it becomes a competitive advantage rivals struggle to copy.`
        },
        {
          type: 'interactive', widget: 'eoq', title: 'Balance ordering and holding costs',
          note: 'Try annual demand 5,000, order cost $100 and holding cost $4 per unit per year: EOQ should be 500. Then halve the order cost (as better order processing would) and watch the optimal order shrink and total cost fall.'
        },
        {
          type: 'checklist', title: 'Organisational lessons for market logistics',
          items: [
            'One executive owns total logistics cost and service, not separate owners for transport, warehousing and inventory',
            'Service standards are set from customer research, by segment, not from internal habit',
            'Total cost (transport + warehousing + inventory + lost sales) is measured, not each piece in isolation',
            'Demand data is shared with suppliers and channel partners to damp the bullwhip effect',
            'Returns and reverse logistics are designed in, especially for online sales',
            'Sustainability (emissions per order, packaging) is tracked alongside cost and speed'
          ]
        }
      ],
      terms: [
        { term: 'Private label', def: `A brand developed and owned by a retailer or wholesaler rather than a manufacturer.` },
        { term: 'Category killer', def: `A large specialty store with a very deep assortment in one category, such as toys or electronics.` },
        { term: 'Retail media network', def: `A retailer selling advertising on its own website, app and stores, using its shopper data.` },
        { term: 'Bulk breaking', def: `Buying in large quantities and selling in smaller lots to customers.` },
        { term: 'Integrated logistics', def: `Managing all logistics activities as one system, starting from customer service requirements.` },
        { term: 'Cross-docking', def: `Moving goods from inbound to outbound trucks at a distribution centre with little or no storage time.` },
        { term: 'Order-to-payment cycle', def: `The time from receiving an order to delivery and receiving payment.` }
      ],
      quiz: [
        { q: 'A retailer buys an item for $60 and sells it for $100. What is its markup on the selling price?', options: ['66.7%', '60%', '40%', '33.3%'], answer: 2, explain: 'Markup on selling price = ($100 − $60) ÷ $100 = 40%. Markup on cost would be $40 ÷ $60 = 66.7%.' },
        { q: 'Gross margin is $600,000 and average inventory at cost is $200,000. What is GMROI (gross margin return on inventory)?', options: ['3.0', '0.33', '4.0', '1.5'], answer: 0, explain: 'GMROI = gross margin ÷ average inventory at cost = 600,000 ÷ 200,000 = 3.0.' },
        { q: 'Annual demand 5,000 units, order cost $100, holding cost $4 per unit per year. What is the EOQ?', options: ['250', '1,000', '707', '500'], answer: 3, explain: 'EOQ = √(2 × 5,000 × 100 ÷ 4) = √250,000 = 500.' },
        { q: 'Which is NOT a typical wholesaler function?', options: ['Bulk breaking', 'Setting the manufacturer\'s brand positioning', 'Financing customers', 'Warehousing'], answer: 1, explain: 'Brand positioning is the manufacturer\'s job; wholesalers sell, assort, break bulk, store, ship, finance, bear risk and share information.' },
        { q: 'A company cuts transport cost by shipping by sea instead of air, but stock-outs and inventory rise. What principle does this show?', options: ['Cross-docking', 'Line pruning', 'Total-cost thinking in integrated logistics', 'Functional discounting'], answer: 2, explain: 'Logistics costs interact; optimising one piece in isolation can raise total cost or hurt service.' }
      ],
      challenge: {
        title: 'Launch a private label in one category',
        prompt: `<p><i>Illustrative.</i> A supermarket chain sells 100,000 units a year of a leading brand of olive oil at $4.00, buying at $3.20. It could launch its own label at $3.20 retail, bought from a contract packer at $2.08. It expects 30% of current buyers to switch to the store brand, with total category units unchanged.</p><p>Calculate the change in category gross margin. Then set an ordering policy for the private label if order cost is $80 and holding cost is $0.40 per unit per year. Finally, list the risks and the likely response from the brand owner.</p>`,
        hints: ['Gross margin per unit: brand $0.80; private label $1.12.', 'EOQ = √(2DS ÷ H) with D = 30,000.'],
        model: `<p><b>Margin today:</b> 100,000 × $0.80 = <b>$80,000</b>.</p><p><b>With private label:</b> brand 70,000 × $0.80 = $56,000; store brand 30,000 × $1.12 = $33,600. Total <b>$89,600</b>, up $9,600 (+12%), even though average selling price falls.</p><p><b>Ordering policy:</b> EOQ = √(2 × 30,000 × $80 ÷ $0.40) = √12,000,000 ≈ <b>3,464 units</b>, about 9 orders a year. Add safety stock for supplier lead-time variability (see the operations lessons).</p><p><b>Risks:</b> quality complaints harm the whole store\'s reputation; the brand owner may cut promotional support or offer a deeper discount; shelf space given to the private label may reduce category variety.</p><p><b>Likely brand response:</b> a promotion or value pack to narrow the price gap, an innovation (e.g. a premium organic line), or an offer to manufacture the store brand itself.</p><p><b>Recommendation:</b> launch with a quality at or near the brand (positioned like a quality-for-value store brand, not the cheapest option), test in one region for 12 weeks, and track category margin, switching rate and complaints against the $89,600 target.</p>`
      },
      takeaways: [
        'Retail formats differ in how they compete: range, convenience, price or experience — choose a target first, then align assortment, price, service, atmosphere and communications.',
        'Private labels raise retailer margin and loyalty; manufacturers respond with innovation, brand building, value lines and partnerships.',
        'Wholesalers survive by doing the work others cannot do cheaply: selling to many small buyers, bulk breaking, storing, financing and information.',
        'Market logistics starts from the customer promise and is judged on total cost and service, not on any one cost line.'
      ]
    }
  ]
});

/* ------------------------------------------------------------------ Case library */
MBA.addCases([
  {
    id: 'case-mm-nike-direct', company: 'Nike', industry: 'Sportswear', year: '2017', track: 'mm-offerings',
    title: 'Cut thousands of retail partners to sell direct?',
    situation: `<p>In 2017 Nike sold much of its product through a huge network of wholesale accounts, from global sporting chains to small independent shops and department stores. Its own website, app and stores were growing fast and earned higher margins per pair, gave Nike customer data and let it control how the brand was presented. Many mid-tier retailers, meanwhile, displayed Nike alongside discounted rivals and shared little data.</p><p>Management was considering concentrating wholesale on a small number of "strategic partners" and moving much more volume to its own digital and physical channels.</p>`,
    question: 'You are Nike\'s head of strategy. How far should you shift from wholesale to direct?',
    options: [
      { text: 'Go aggressively direct: drop most wholesale accounts quickly, stop selling through marketplaces and push nearly all growth through Nike\'s own app, site and stores.', result: 'Margins and data improve at first, but Nike gives up shelf space, physical availability and the discovery that wholesale stores provide; rivals fill the vacated shelves.' },
      { text: 'Grow direct and digital strongly, but keep a curated, well-supported wholesale network — including specialist running and sneaker stores — with clear roles for each channel and shared data.', result: 'Nike gains margin and customer data while keeping physical availability and reach; channel conflict is managed by giving partners differentiated product and services.', best: true },
      { text: 'Stay wholesale-led and treat direct channels as a showcase only.', result: 'Nike keeps reach but misses the margin, data and brand-control benefits of direct, and stays exposed to retailers\' discounting.' },
      { text: 'Move most volume onto a large online marketplace to maximise reach at low cost.', result: 'Reach rises but Nike loses control of price and presentation and faces counterfeit and grey-market issues, the opposite of its goals.' }
    ],
    whatHappened: `<p>Nike announced its "Consumer Direct Offense" in 2017, focusing wholesale on a short list of key partners, and later accelerated the shift. It ended a pilot of selling directly on Amazon in 2019 and, over the following years, stopped selling to many smaller and mid-tier retailers. Direct sales rose sharply, especially during the pandemic.</p><p>From 2023, however, growth slowed, inventory built up and newer running brands such as On and Hoka won space on the wholesale shelves Nike had vacated. Nike began rebuilding relationships with retailers it had cut back, and Elliott Hill, a long-time Nike executive with a wholesale background, became CEO in late 2024 with restoring wholesale partnerships as an explicit priority.</p>`,
    lessons: [
      'Direct channels raise margin and data, but physical availability and discovery through partners are hard to replace.',
      'Shelf space given up is shelf space a competitor takes; channel decisions are hard to reverse quickly.',
      'Design channels as a system with distinct roles rather than treating them as rivals to be eliminated.'
    ],
    frameworks: ['Channel-design criteria: economic, control, adaptive', 'Multichannel conflict and dual compensation', 'Physical and mental availability']
  },
  {
    id: 'case-mm-uber-surge', company: 'Uber', industry: 'Ride-hailing', year: '2014', track: 'mm-offerings',
    title: 'Keep surge pricing when demand spikes during a crisis?',
    situation: `<p>Uber used "surge pricing": when ride requests outstripped available drivers in an area, an algorithm multiplied fares. Uber argued this pulled more drivers onto the road and allocated scarce rides to those who needed them most, keeping wait times short. But high multipliers during storms, holidays and emergencies triggered anger and accusations of price gouging, and regulators were paying attention.</p><p>Uber had to decide how its time-based pricing should behave when demand spiked because of an emergency.</p>`,
    question: 'You run Uber\'s pricing team. What policy do you set?',
    options: [
      { text: 'Keep the algorithm unconstrained in all conditions; explain the economics publicly.', result: 'Supply responds, but each emergency produces viral outrage, legal risk under anti-gouging laws and lasting damage to trust.' },
      { text: 'Cap surge multipliers during declared emergencies, make prices clearer before booking, and keep dynamic pricing in normal conditions.', result: 'Uber keeps the supply benefit of time-based pricing most of the time while removing the most damaging cases of perceived unfairness.', best: true },
      { text: 'Abolish dynamic pricing and charge fixed fares at all times.', result: 'Prices feel fair, but at peaks drivers stay home, wait times soar and many riders cannot get a car at any price.' },
      { text: 'Keep surge but hide the multiplier so riders do not notice.', result: 'Hidden price increases feel deceptive when discovered, and regulators take a dim view.' }
    ],
    whatHappened: `<p>In July 2014 Uber reached an agreement with the New York State Attorney General to limit surge pricing during declared emergencies and extended a similar policy across the United States. After surge pricing during a hostage siege in Sydney in December 2014 drew outrage, Uber apologised and offered refunds. Uber\'s own analysis of a 2015 surge outage during a sold-out New York concert reported that wait times rose sharply and fewer requests were fulfilled when surge was unavailable — evidence for its supply argument.</p><p>Uber later moved to showing riders an upfront fare rather than a multiplier, making the price easier to understand before booking.</p>`,
    lessons: [
      'Time-based pricing can balance supply and demand, but it only survives if customers see it as fair.',
      'Perceived fairness matters most at moments of need; set guardrails before a crisis, not after.',
      'Transparency (an upfront price) reduces the sense of being exploited even when prices vary.'
    ],
    frameworks: ['Differentiated (time) pricing', 'Reference prices and fairness', 'Supply and demand']
  }
]);
