/* MBA Studio — Track 1: Business 101 */
MBA.addTrack({
  id: 'business-101',
  stage: 1,
  order: 1,
  title: 'Business 101',
  icon: '🏪',
  color: '#6366f1',
  tagline: 'What a business really is — and how it works',
  summary: `Start from zero and learn what a business actually does: create value for customers and capture some of it as profit. By the end you will be able to explain any company's model, read its basic numbers, pick a legal structure, and follow the business news like an insider.`,
  outcomes: [
    'Explain value creation vs value capture for any company',
    'Calculate revenue, costs, gross profit and net profit',
    'Choose between sole proprietorship, partnership, LLP/LLC and company',
    'Map how marketing, sales, operations, finance and HR fit together',
    'Read business headlines and key metrics with confidence',
    'Use core business vocabulary like a practitioner'
  ],
  lessons: [
    /* ---------------- Lesson 1 ---------------- */
    {
      id: 'business-101-1',
      title: 'What is a business? Value creation in one picture',
      level: 'Beginner',
      minutes: 10,
      hook: `Every business on earth — from a tea stall to Apple — runs on one simple idea: solve a problem people will pay for.`,
      eli5: `Imagine it is a hot day and you set up a lemonade stand. Thirsty people walk past. You turn lemons, sugar and water (worth a little) into a cold drink (worth more to a thirsty person). The gap between what the drink is worth to them and what it cost you is the "value" you created. If you charge a fair price, some of that value goes into your pocket as profit and the rest stays with the happy customer. That is a business.`,
      blocks: [
        {
          type: 'text', title: 'The one-sentence definition',
          html: `<p>A <b>business</b> is an organisation that <span class="hl">creates something people value, delivers it to them, and captures part of that value as money</span> — enough to cover its costs and keep going.</p><p>Three verbs matter: <b>create</b>, <b>deliver</b>, <b>capture</b>. Miss any one and the business fails: a great product nobody hears about (no delivery), or a popular free service that never makes money (no capture).</p>`
        },
        {
          type: 'framework', name: 'The Value Stick', by: 'Felix Oberholzer-Gee (Harvard Business School), popularised in "Better, Simpler Strategy", 2021', when: 'Whenever you want to see who gets how much of the value a business creates.',
          steps: [
            { label: 'Willingness to pay (WTP)', desc: 'The maximum a customer would pay. A thirsty runner might pay ₹100 for cold lemonade.' },
            { label: 'Price', desc: 'What you actually charge, say ₹40. WTP minus price = customer delight (₹60).' },
            { label: 'Cost', desc: 'What it costs you to make one, say ₹15. Price minus cost = your margin (₹25).' },
            { label: 'Willingness to sell (WTS)', desc: 'The lowest pay suppliers and employees would accept. Cost minus WTS = supplier/employee surplus.' },
            { label: 'Total value created', desc: 'WTP minus WTS. Great businesses raise WTP (better product) or lower WTS (better place to work/supply) — not just raise price.' }
          ]
        },
        {
          type: 'compare', title: 'Value creation vs value capture',
          headers: ['', 'Value creation', 'Value capture'],
          rows: [
            ['Question', 'How much better off is the customer?', 'How much of that do we keep?'],
            ['Driven by', 'Product quality, convenience, speed, price', 'Pricing power, competition, cost control'],
            ['Example', 'Google Search saves you hours', 'Google captures value through ads, not search fees'],
            ['Failure mode', 'Nobody wants it', 'Everyone wants it, nobody pays']
          ]
        },
        {
          type: 'case', company: 'IKEA', year: '1950s–today', title: 'Creating value by asking customers to do some work',
          situation: `Furniture in post-war Sweden was expensive and delivered fully assembled, which meant bulky transport and high prices for young families.`,
          decision: `Founder Ingvar Kamprad's team adopted flat-pack design: customers pick items from a warehouse, carry them home and assemble them. Huge stores, standard designs and global sourcing kept costs very low.`,
          outcome: `IKEA became the world's largest furniture retailer. Customers accept the "work" of assembly because prices are far lower and they can take items home the same day.`,
          lesson: `Value can be created by redesigning who does what. IKEA lowered its cost a lot and lowered customer WTP only a little — so total value grew.`
        },
        {
          type: 'formula', name: 'Profit, the simplest equation in business', expr: 'Profit = Revenue − Costs  |  Revenue = Price × Quantity',
          explain: 'Revenue is all the money coming in from sales. Costs are everything you spend to make and sell. Profit is what is left.',
          example: 'Lemonade: 200 cups × ₹40 = ₹8,000 revenue. Ingredients ₹15 × 200 = ₹3,000, stall rent ₹1,500. Profit = 8,000 − 3,000 − 1,500 = ₹3,500.'
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: "Business is about making money"',
          html: `<p>Money is the <i>result</i>, not the purpose. Peter Drucker put it bluntly: the purpose of a business is to <b>create a customer</b>. Companies that chase profit without creating value (e.g. hidden fees) usually lose customers over time.</p>`
        },
        {
          type: 'flip', title: 'Test yourself',
          cards: [
            { front: 'The three verbs of every business', back: 'Create value, deliver value, capture value.' },
            { front: 'WTP − Price =', back: 'Customer delight (the value the customer keeps).' },
            { front: 'Price − Cost =', back: 'The firm’s margin per unit.' },
            { front: 'Two ways to grow total value', back: 'Raise willingness to pay, or lower willingness to sell (cost of inputs/talent).' }
          ]
        },
        {
          type: 'scenario', prompt: 'Your cafe sells coffee at ₹150. A rival opens next door at ₹120. What is the most value-creating response?',
          options: [
            { text: 'Match the ₹120 price immediately.', feedback: 'This only moves value from you to customers; total value created does not change and your margin shrinks.', good: false },
            { text: 'Raise customers’ willingness to pay — faster service, better seating, a loyalty perk.', feedback: 'Right. Raising WTP grows the pie, so you can keep your price and still delight customers.', good: true },
            { text: 'Cut ingredient quality to protect margin.', feedback: 'This lowers WTP. You save cost but customers notice and leave.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Business', def: 'An organisation that creates value for customers and captures part of it as money to sustain itself.' },
        { term: 'Value', def: 'How much better off someone is because of a product or service — often measured by what they would pay.' },
        { term: 'Willingness to pay (WTP)', def: 'The highest price a customer would accept before walking away.' },
        { term: 'Revenue', def: 'Total money received from selling goods or services (price × quantity). Also called sales or the "top line".' },
        { term: 'Cost', def: 'Money spent to produce and sell a product — materials, wages, rent, marketing.' },
        { term: 'Profit', def: 'Revenue minus costs. The "bottom line".' },
        { term: 'Customer', def: 'The person or organisation that pays. Not always the user (e.g. advertisers pay for free social media).' }
      ],
      quiz: [
        { q: 'A customer would pay up to ₹500 for a haircut. You charge ₹300 and it costs you ₹180. What is the customer delight?', options: ['₹120', '₹200', '₹320', '₹500'], answer: 1, explain: 'Customer delight = WTP − Price = 500 − 300 = ₹200.' },
        { q: 'Which statement best describes a business?', options: ['An organisation that maximises revenue', 'Any activity that involves money', 'A company listed on a stock exchange', 'An organisation that creates, delivers and captures value'], answer: 3, explain: 'Create, deliver, capture — revenue alone is not enough and most businesses are not listed.' },
        { q: 'Revenue is ₹50,000 and total costs are ₹42,000. Profit is:', options: ['₹92,000', '₹42,000', '₹8,000', '₹50,000'], answer: 2, explain: 'Profit = Revenue − Costs = 50,000 − 42,000 = ₹8,000.' },
        { q: 'How did IKEA create value with flat-pack furniture?', options: ['By charging premium prices', 'By lowering cost much more than it lowered customer willingness to pay', 'By selling only online', 'By advertising heavily on TV'], answer: 1, explain: 'Flat-pack cut transport and assembly cost a lot, while customers valued the low price and same-day take-home.' },
        { q: 'Google Search is free to users. Who is the paying customer?', options: ['Advertisers', 'Users', 'The government', 'Nobody'], answer: 0, explain: 'Users get the value; advertisers pay to reach them. The customer is whoever pays.' }
      ],
      challenge: {
        title: 'Map the value stick of a local bakery',
        prompt: `A neighbourhood bakery sells cakes at ₹600. Customer surveys suggest people would pay up to ₹900 for a cake for a birthday. Each cake costs ₹350 in ingredients and baker time. The baker would be happy working for a bit less than she is paid now because she loves the shop. Draw the value stick and suggest two ways to increase total value created (not just raise prices).`,
        hints: ['Write WTP, price, cost and WTS from top to bottom.', 'Think: what would make a birthday cake worth even more? What would make the job even more attractive?'],
        model: `<p><b>Value stick:</b> WTP ₹900 → Price ₹600 → Cost ₹350 → WTS (a bit below cost because the baker is happy).</p><ul><li>Customer delight = 900 − 600 = <b>₹300</b></li><li>Firm margin = 600 − 350 = <b>₹250</b> per cake</li><li>Employee surplus = small positive (baker paid above her minimum)</li></ul><p><b>Raise WTP:</b> free personalised message and candles, guaranteed same-day delivery, photo of the cake on WhatsApp before pickup. These cost little but make the cake worth more on a special day.</p><p><b>Lower WTS:</b> give the baker creative freedom to design a monthly special and credit her by name — the job becomes more attractive, improving retention without higher wages.</p><p><b>Recommendation:</b> keep price at ₹600 for now; once WTP rises, test ₹650 on premium designs. Growing the pie beats fighting over it.</p>`
      },
      takeaways: [
        'A business creates, delivers and captures value — all three are required.',
        'Profit = Revenue − Costs; Revenue = Price × Quantity.',
        'The best strategies raise willingness to pay or lower costs, not just raise prices.',
        'The customer is whoever pays — not always the user.'
      ]
    },

    /* ---------------- Lesson 2 ---------------- */
    {
      id: 'business-101-2',
      title: 'Customers, stakeholders and why businesses exist',
      level: 'Beginner',
      minutes: 11,
      hook: `A company that ignores its employees, suppliers or community eventually pays — ask any brand that has faced a boycott or strike.`,
      eli5: `Think of a school cricket team. The players want to play, parents want their kids safe, the coach wants to win, the school wants a good reputation, and the ground owner wants the pitch looked after. A business is the same: lots of people care about it for different reasons. Keep only one group happy and the whole thing wobbles.`,
      blocks: [
        {
          type: 'text', title: 'Who has a stake?',
          html: `<p>A <b>stakeholder</b> is anyone affected by, or able to affect, a business. The big ones are <b>customers, employees, owners/shareholders, suppliers, lenders, government and the community</b>.</p><p>A <b>shareholder</b> is a specific stakeholder: someone who owns part of the company.</p>`
        },
        {
          type: 'matrix', name: 'Stakeholder Power–Interest Grid', xLabel: 'Interest in the business →', yLabel: 'Power over the business →',
          cells: [
            { label: 'Keep satisfied', desc: 'High power, lower interest — e.g. regulators, a big lender. Brief them, avoid surprises.' },
            { label: 'Manage closely', desc: 'High power, high interest — e.g. key customers, major investors, core employees. Involve them in decisions.' },
            { label: 'Monitor', desc: 'Low power, low interest — e.g. the general public. Watch for changes.' },
            { label: 'Keep informed', desc: 'Low power, high interest — e.g. local community, small suppliers. Communicate regularly.' }
          ]
        },
        {
          type: 'compare', title: 'Shareholder view vs stakeholder view',
          headers: ['', 'Shareholder primacy', 'Stakeholder capitalism'],
          rows: [
            ['Core idea', 'Maximise returns to owners', 'Balance the interests of all stakeholders'],
            ['Famous voice', 'Milton Friedman, 1970 essay', 'Business Roundtable statement, 2019'],
            ['Strength', 'Clear goal, easy to measure', 'Long-term trust and resilience'],
            ['Risk', 'Short-termism, ignoring harm', 'Vague goals; "accountable to everyone = no one"']
          ]
        },
        {
          type: 'case', company: 'Amul (GCMMF)', year: '1946–today', title: 'A business owned by its suppliers',
          situation: `Dairy farmers in Kheda district, Gujarat, were being underpaid by middlemen and a private dairy that controlled milk collection.`,
          decision: `With Tribhuvandas Patel and later Verghese Kurien, farmers formed a cooperative: they own the business, sell milk to it, and share in its success. Amul built processing plants and a national brand.`,
          outcome: `Amul became one of India's best-known food brands and the model was copied nationwide during Operation Flood, helping make India the world's largest milk producer.`,
          lesson: `Who owns a business shapes who it serves. Aligning a key stakeholder (farmers) with ownership created trust, supply loyalty and scale.`
        },
        {
          type: 'framework', name: 'Customer vs user vs buyer vs payer', by: 'Common B2B sales practice', when: 'Use whenever you design or sell a product — especially to companies.',
          steps: [
            { label: 'User', desc: 'Uses the product daily (e.g. a nurse using hospital software).' },
            { label: 'Buyer / decision maker', desc: 'Chooses the product (e.g. the hospital’s IT head).' },
            { label: 'Payer', desc: 'Signs the cheque (e.g. the CFO or an insurer).' },
            { label: 'Influencer', desc: 'Shapes the decision (e.g. doctors’ opinions, reviews).' },
            { label: 'So what?', desc: 'Each needs a different message: users want ease, buyers want fit, payers want ROI.' }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Why do firms exist at all?',
          html: `<p>Economist Ronald Coase (1937) asked: why not just hire freelancers for everything? His answer: <b>transaction costs</b> — searching, negotiating and policing contracts is expensive. Firms exist when doing things inside is cheaper than buying them in the market. That is why platforms like Upwork, and now AI agents, change how big firms need to be.</p>`
        },
        {
          type: 'scenario', prompt: 'You run a food-delivery startup. Riders are protesting low pay per order. Investors want you to cut costs. What do you do first?',
          options: [
            { text: 'Ignore riders; they are replaceable.', feedback: 'Riders are a high-interest stakeholder whose power grows when they organise. Strikes hit service and brand.', good: false },
            { text: 'Meet rider representatives, share the unit economics, and co-design incentives (e.g. peak-hour bonuses) that raise pay where it matters most.', feedback: 'Good. Transparency and targeted incentives can raise rider pay and reliability without wrecking margins — and you can explain the plan to investors.', good: true },
            { text: 'Raise pay across the board without telling investors.', feedback: 'Surprising a high-power stakeholder (investors) damages trust. Balance, and communicate.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Stakeholder check before any big decision',
          items: ['Who gains and who loses?', 'Which high-power stakeholders must hear first?', 'Is there a legal or regulatory angle?', 'How will employees hear about it?', 'What would the headline be if this went public?']
        }
      ],
      terms: [
        { term: 'Stakeholder', def: 'Anyone who affects or is affected by a business: customers, staff, owners, suppliers, lenders, government, community.' },
        { term: 'Shareholder', def: 'An owner of shares in a company — one type of stakeholder.' },
        { term: 'Cooperative', def: 'A business owned and run by its members (e.g. farmers or customers) who share its benefits.' },
        { term: 'Transaction costs', def: 'The cost of finding, negotiating and enforcing deals in a market.' },
        { term: 'B2B / B2C', def: 'Business-to-business (selling to companies) vs business-to-consumer (selling to individuals).' },
        { term: 'Decision-making unit (DMU)', def: 'The group of people involved in a buying decision, especially in B2B.' }
      ],
      quiz: [
        { q: 'In the power–interest grid, a regulator that rarely pays attention but can shut you down is:', options: ['Monitor', 'Keep informed', 'Keep satisfied', 'Manage closely'], answer: 2, explain: 'High power, low interest = keep satisfied.' },
        { q: 'Who owns Amul?', options: ['Its dairy-farmer members through cooperatives', 'The Government of India', 'A private family', 'Foreign investors'], answer: 0, explain: 'Amul is a cooperative owned by milk-producing farmers.' },
        { q: 'According to Coase, firms exist because:', options: ['Governments require them', 'Transaction costs make doing some things internally cheaper', 'Workers prefer offices', 'Taxes are lower for firms'], answer: 1, explain: 'Firms internalise activities when market transactions are costlier.' },
        { q: 'In hospital software sales, the nurse is most likely the:', options: ['Payer', 'User', 'Regulator', 'Shareholder'], answer: 1, explain: 'The nurse uses the product daily; others decide and pay.' }
      ],
      challenge: {
        title: 'Stakeholder map for a new factory',
        prompt: `A garment company plans to open a 500-worker factory in a small town. List at least six stakeholders, place each in the power–interest grid, and write one action per quadrant.`,
        hints: ['Think inside (workers, managers, owners) and outside (town, government, buyers).', 'Global fashion brands buying from you have high power over labour standards.'],
        model: `<p><b>Manage closely (high power, high interest):</b> global brand buyers, owners/investors, skilled supervisors. <i>Action:</i> share an ethical-sourcing and safety plan before construction; invite buyer audits.</p><p><b>Keep satisfied (high power, lower interest):</b> state labour department, pollution-control board, bank lender. <i>Action:</i> get permits early, file compliance reports on time.</p><p><b>Keep informed (low power, high interest):</b> local community, workers’ families, small local suppliers. <i>Action:</i> town meeting, local hiring targets, a grievance hotline.</p><p><b>Monitor:</b> national media, NGOs not yet active. <i>Action:</i> track news; publish a simple factory-standards page.</p><p><b>Why it matters:</b> the 2013 Rana Plaza collapse in Bangladesh showed that ignoring worker safety can harm everyone in the chain, including global brands.</p>`
      },
      takeaways: [
        'Stakeholders include customers, employees, owners, suppliers, lenders, government and the community.',
        'Use the power–interest grid to decide who to involve and who to inform.',
        'In B2B, users, buyers and payers are often different people with different needs.',
        'Ownership structure (e.g. cooperatives like Amul) shapes who a business serves.'
      ]
    },

    /* ---------------- Lesson 3 ---------------- */
    {
      id: 'business-101-3',
      title: 'Revenue, costs and profit: the money basics',
      level: 'Beginner',
      minutes: 14,
      hook: `Plenty of businesses with booming sales go bust — because they never understood which costs grow with every sale.`,
      eli5: `Your lemonade stand pays ₹1,500 a day for the spot whether you sell 1 cup or 500 — that is a fixed cost. Every cup also needs lemons and sugar — that is a variable cost. You only start making money after you have sold enough cups to pay for the spot. That magic number is your break-even point.`,
      blocks: [
        {
          type: 'compare', title: 'Fixed vs variable costs',
          headers: ['', 'Fixed costs', 'Variable costs'],
          rows: [
            ['Definition', 'Do not change with volume (in the short run)', 'Rise with every unit sold'],
            ['Examples', 'Rent, salaries, insurance, software subscriptions', 'Raw materials, packaging, delivery, payment fees'],
            ['Risk', 'You pay even with zero sales', 'Squeezes margin on each unit'],
            ['Lever', 'Spread over more units (scale)', 'Negotiate, redesign, automate']
          ]
        },
        {
          type: 'formula', name: 'Contribution margin & break-even', expr: 'Contribution per unit = Price − Variable cost  |  Break-even units = Fixed costs ÷ Contribution per unit',
          explain: 'Each unit sold "contributes" this amount towards paying fixed costs. Once fixed costs are covered, every extra contribution is profit.',
          example: 'A cloud kitchen sells biryani at ₹250; ingredients + packaging + delivery commission = ₹150. Contribution = ₹100. Monthly rent + salaries = ₹3,00,000. Break-even = 3,00,000 ÷ 100 = 3,000 plates a month (about 100 a day).'
        },
        {
          type: 'interactive', widget: 'breakeven', title: 'Play with break-even',
          note: 'Try raising price by 10% and watch how far the break-even point falls. Then try cutting fixed costs by 10% — which helps more?'
        },
        {
          type: 'framework', name: 'The profit ladder (simple income statement)', by: 'Standard accounting', when: 'Reading any company’s results.',
          steps: [
            { label: 'Revenue', desc: 'All sales. The top line.' },
            { label: '− Cost of goods sold (COGS)', desc: 'Direct cost of what you sold: materials, factory labour.' },
            { label: '= Gross profit', desc: 'Shows if the product itself makes money. Gross margin % = gross profit ÷ revenue.' },
            { label: '− Operating expenses', desc: 'Marketing, salaries of non-factory staff, rent, R&D.' },
            { label: '= Operating profit (EBIT)', desc: 'Profit from running the business before interest and tax.' },
            { label: '− Interest and tax', desc: 'Cost of borrowing and payments to government.' },
            { label: '= Net profit', desc: 'The bottom line — what belongs to the owners.' }
          ]
        },
        {
          type: 'interactive', widget: 'pnl', title: 'Build a P&L waterfall',
          note: 'Enter revenue and costs for the cloud kitchen. See how a 5-point rise in COGS % wipes out a big share of net profit.'
        },
        {
          type: 'callout', kind: 'warning', title: 'Profit is not cash',
          html: `<p>A business can be profitable on paper and still run out of cash — for example if customers pay in 90 days but suppliers want payment in 30. <b>Revenue is an opinion, cash is a fact</b>, as the saying goes. You will go deeper in the Finance track.</p>`
        },
        {
          type: 'case', company: 'Costco', year: '1983–today', title: 'Low margins, high volume, membership profit',
          situation: `Warehouse clubs compete on price. Costco wanted rock-bottom prices while still making money.`,
          decision: `Costco caps its markups at low levels, stocks a limited range (so each item sells in big volume), and charges an annual membership fee.`,
          outcome: `Membership fees make up a large share of Costco's operating profit, while low product margins keep members loyal and renewal rates high.`,
          lesson: `Profit can come from a different line than you expect. Costco uses thin product margins to make the membership — a nearly pure-profit stream — irresistible.`
        },
        {
          type: 'flip', title: 'Quick numbers',
          cards: [
            { front: 'Price ₹80, variable cost ₹50, fixed costs ₹60,000. Break-even units?', back: '60,000 ÷ (80 − 50) = 2,000 units.' },
            { front: 'Revenue ₹10 lakh, COGS ₹6 lakh. Gross margin?', back: '40%.' },
            { front: 'Top line vs bottom line', back: 'Top = revenue. Bottom = net profit.' },
            { front: 'Which costs fall per unit as you grow?', back: 'Fixed costs per unit — they are spread across more units.' }
          ]
        }
      ],
      terms: [
        { term: 'Fixed cost', def: 'A cost that stays the same regardless of how much you sell, in the short run (e.g. rent).' },
        { term: 'Variable cost', def: 'A cost that rises with each unit produced or sold (e.g. ingredients).' },
        { term: 'Contribution margin', def: 'Price minus variable cost per unit — what each sale adds towards fixed costs and profit.' },
        { term: 'Break-even point', def: 'The sales volume at which total revenue equals total costs; profit is zero.' },
        { term: 'COGS', def: 'Cost of goods sold — the direct costs of producing the goods sold in a period.' },
        { term: 'Gross margin', def: 'Gross profit as a percentage of revenue. Shows how profitable the product itself is.' },
        { term: 'Net profit', def: 'What is left after all costs, interest and taxes. Also called net income.' }
      ],
      quiz: [
        { q: 'Which is a variable cost for a T-shirt brand?', options: ['Office rent', 'Designer salary', 'Website subscription', 'Fabric per shirt'], answer: 3, explain: 'Fabric rises with every shirt made.' },
        { q: 'Price ₹500, variable cost ₹300, fixed costs ₹1,00,000. Break-even units?', options: ['200', '333', '500', '1,000'], answer: 2, explain: '1,00,000 ÷ (500 − 300) = 500 units.' },
        { q: 'Revenue ₹200, COGS ₹120, operating expenses ₹50. Operating profit?', options: ['₹30', '₹80', '₹150', '₹70'], answer: 0, explain: 'Gross profit 80 − opex 50 = ₹30.' },
        { q: 'Where does a large share of Costco’s operating profit come from?', options: ['High product markups', 'Advertising sales', 'Membership fees', 'Selling data'], answer: 2, explain: 'Costco keeps markups low; membership fees are a key profit source.' },
        { q: 'A company is profitable but runs out of cash. Most likely cause?', options: ['Too few products', 'Customers pay much later than suppliers must be paid', 'Prices are too high', 'Gross margin is too high'], answer: 1, explain: 'Timing gaps between collecting and paying cash can kill profitable firms.' }
      ],
      challenge: {
        title: 'Should the cafe open on Sundays?',
        prompt: `A cafe is closed on Sundays. Opening would add fixed costs of ₹6,000 per Sunday (staff wages + electricity). Average ticket is ₹300 and variable cost per ticket is ₹120. The owner expects 40 customers on a Sunday. Should she open? What is the minimum number of customers needed?`,
        hints: ['Contribution per customer = price − variable cost.', 'Compare Sunday contribution with the extra Sunday fixed cost.'],
        model: `<ol><li>Contribution per customer = 300 − 120 = <b>₹180</b>.</li><li>Break-even customers = 6,000 ÷ 180 = <b>33.3 → 34 customers</b>.</li><li>Expected 40 customers × ₹180 = ₹7,200 contribution − ₹6,000 = <b>₹1,200 extra profit per Sunday</b> (≈ ₹62,000 a year).</li></ol><p><b>Recommendation:</b> Open, but treat it as a test for 6–8 weeks. The safety margin is thin (40 vs 34), so promote a Sunday brunch combo to lift ticket size. If traffic falls below 34, shorten hours to cut fixed cost.</p>`
      },
      takeaways: [
        'Separate fixed from variable costs — it changes every decision.',
        'Break-even units = fixed costs ÷ (price − variable cost).',
        'Gross profit tests the product; net profit tests the whole business.',
        'Profit is not cash — timing of payments matters.'
      ]
    },

    /* ---------------- Lesson 4 ---------------- */
    {
      id: 'business-101-4',
      title: 'Types of businesses and legal structures',
      level: 'Intermediate',
      minutes: 13,
      hook: `The legal structure you pick on day one decides who is liable if things go wrong, how you pay tax, and whether investors can even give you money.`,
      eli5: `If you run a lemonade stand alone and a customer sues, your piggy bank and your bicycle are at risk because you and the stand are the same thing. If you create a "company", it is like a separate person in the eyes of the law — it owns the stand, so only the stand's money is at risk, not your bicycle.`,
      blocks: [
        {
          type: 'compare', title: 'The main legal structures',
          headers: ['', 'Sole proprietorship', 'Partnership', 'LLP / LLC', 'Private limited company', 'Public company'],
          rows: [
            ['Separate legal entity?', 'No', 'No (general partnership)', 'Yes', 'Yes', 'Yes'],
            ['Owner liability', 'Unlimited', 'Unlimited, often joint', 'Limited', 'Limited to share capital', 'Limited'],
            ['Raise equity from investors', 'Very hard', 'Hard', 'Possible but awkward for VCs', 'Yes — standard for startups', 'Yes, from the public via stock exchange'],
            ['Compliance burden', 'Lowest', 'Low', 'Moderate', 'Higher (board, filings, audit)', 'Highest (disclosure, regulators)'],
            ['Typical use', 'Freelancer, small shop', 'Family business, small firms', 'Professional firms, consultancies', 'Startups, SMEs', 'Large mature firms']
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'Country names differ',
          html: `<p><b>India:</b> sole proprietorship, partnership firm, LLP, One Person Company (OPC), Private Limited (Pvt Ltd), Public Limited.<br><b>USA:</b> sole proprietorship, partnership, LLC, C-Corp (most VC-backed startups use a Delaware C-Corp), S-Corp.<br><b>UK:</b> sole trader, partnership, LLP, private limited (Ltd), public limited (PLC).<br>Always confirm with a local lawyer or chartered accountant.</p>`
        },
        {
          type: 'framework', name: 'Choosing your structure', by: 'Practical founder checklist', when: 'Before registering your business.',
          steps: [
            { label: '1. Risk', desc: 'Could you face lawsuits or large debts? If yes, you want limited liability.' },
            { label: '2. Funding', desc: 'Will you raise equity from angels/VCs? Then you almost certainly need a private limited company (or a C-Corp in the US).' },
            { label: '3. Co-founders', desc: 'Multiple owners need clear share splits, vesting and exit rules — easiest inside a company.' },
            { label: '4. Tax', desc: 'Compare pass-through taxation (profits taxed once in owners’ hands) vs corporate tax plus dividend tax.' },
            { label: '5. Admin', desc: 'Can you handle board meetings, annual filings, audits? Start simple if you are just testing an idea.' }
          ]
        },
        {
          type: 'compare', title: 'Types of business by what they do',
          headers: ['Type', 'What it does', 'Example'],
          rows: [
            ['Manufacturing', 'Makes physical goods', 'Tata Motors, Toyota'],
            ['Retail / trading', 'Buys and resells goods', 'DMart, Walmart'],
            ['Services', 'Sells expertise or time', 'Infosys, McKinsey, a salon'],
            ['Platform / marketplace', 'Connects buyers and sellers', 'Airbnb, Amazon Marketplace'],
            ['Software / SaaS', 'Sells software access by subscription', 'Salesforce, Zoho'],
            ['Franchise', 'Licenses a brand and system to local owners', 'McDonald’s, Domino’s']
          ]
        },
        {
          type: 'case', company: 'Tata Group', year: '1868–today', title: 'A conglomerate held by trusts',
          situation: `The Tata Group spans many businesses — from software (TCS) to steel, cars, salt and airlines.`,
          decision: `The holding company, Tata Sons, is majority-owned by philanthropic Tata Trusts. Operating companies such as TCS and Tata Motors are separately listed public companies.`,
          outcome: `Profits flowing up as dividends help fund philanthropy, while each listed company answers to its own public shareholders and regulators.`,
          lesson: `Legal structure is a design tool: holding companies, subsidiaries and trusts let a group separate risk, raise capital and pursue a mission at the same time.`
        },
        {
          type: 'timeline', title: 'A typical startup’s structure journey',
          items: [
            { label: 'Idea', desc: 'Founder works as an individual or sole proprietor to test demand.' },
            { label: 'First revenue', desc: 'Registers a private limited company; signs a founders’ agreement with vesting.' },
            { label: 'Seed round', desc: 'Issues shares (or SAFEs/convertible notes) to angels; sets up an ESOP pool.' },
            { label: 'Growth rounds', desc: 'Adds a board with investor directors; stronger governance and audits.' },
            { label: 'IPO', desc: 'Converts to a public company and lists shares on a stock exchange.' }
          ]
        },
        {
          type: 'scenario', prompt: 'Two friends start a design agency, plan no outside investment, and want limited liability with simple admin. Best fit?',
          options: [
            { text: 'General partnership', feedback: 'Simple, but both partners carry unlimited, joint liability.', good: false },
            { text: 'LLP (or LLC in the US)', feedback: 'Good fit: limited liability, flexible profit-sharing, lighter compliance than a company. Fine because they do not need VC money.', good: true },
            { text: 'Public company', feedback: 'Far too heavy — public companies have strict disclosure and listing requirements.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Limited liability', def: 'Owners can lose only what they invested, not personal assets, if the business fails.' },
        { term: 'Legal entity', def: 'Something the law treats as a "person" that can own property, sign contracts and be sued.' },
        { term: 'Sole proprietorship', def: 'A business owned by one person with no legal separation between owner and business.' },
        { term: 'LLP / LLC', def: 'Limited liability partnership / company: limited liability with flexible, partnership-like management.' },
        { term: 'Private limited company', def: 'A company with limited liability whose shares are not traded publicly; the usual vehicle for startups.' },
        { term: 'Public company', def: 'A company whose shares can be bought by the public, usually on a stock exchange.' },
        { term: 'Holding company', def: 'A company whose main job is owning shares in other companies (subsidiaries).' }
      ],
      quiz: [
        { q: 'Which structure gives the owner unlimited personal liability?', options: ['Private limited company', 'LLP', 'Sole proprietorship', 'Public company'], answer: 2, explain: 'A sole proprietor and the business are legally the same, so liability is unlimited.' },
        { q: 'A founder wants to raise money from venture capital. The most common structure is:', options: ['Sole proprietorship', 'General partnership', 'Private limited company / C-Corp', 'Cooperative'], answer: 2, explain: 'VCs invest via shares in companies, often a Delaware C-Corp in the US or Pvt Ltd in India.' },
        { q: 'Who majority-owns Tata Sons?', options: ['Tata Trusts', 'The Indian government', 'Foreign investors', 'TCS'], answer: 0, explain: 'Philanthropic Tata Trusts hold the majority of Tata Sons.' },
        { q: 'McDonald’s licensing its brand and system to local owners is an example of:', options: ['A cooperative', 'A franchise', 'A platform', 'A sole proprietorship'], answer: 1, explain: 'Franchising lets local operators use the brand and system in return for fees.' }
      ],
      challenge: {
        title: 'Advise three founders',
        prompt: `Recommend a structure for each and explain why: (a) Priya, a freelance UX designer earning steadily, no employees; (b) three engineers building an AI tool who plan to raise a seed round in 6 months; (c) two chartered accountants opening a small advisory practice.`,
        hints: ['Ask: risk, funding, number of owners, admin tolerance.', 'Investor needs are often the deciding factor.'],
        model: `<p><b>(a) Priya:</b> Sole proprietorship to start (minimal admin). Add professional indemnity insurance. Move to an OPC/LLC if income or legal risk grows.</p><p><b>(b) AI founders:</b> Private limited company now (or a Delaware C-Corp if targeting US investors). Sign a founders’ agreement with 4-year vesting and a 1-year cliff, assign all IP to the company, and reserve an ESOP pool. Investors will expect this.</p><p><b>(c) Accountants:</b> LLP — limited liability protects each partner from the other’s mistakes, profit sharing is flexible, and many professional firms use it. No VC funding needed.</p>`
      },
      takeaways: [
        'Structure decides liability, tax, admin burden and ability to raise money.',
        'Limited liability protects personal assets.',
        'Startups that will raise equity should incorporate as a company early.',
        'Holding companies and subsidiaries let groups separate risk and capital.'
      ]
    },

    /* ---------------- Lesson 5 ---------------- */
    {
      id: 'business-101-5',
      title: 'The business functions map: how it all fits together',
      level: 'Intermediate',
      minutes: 13,
      hook: `When marketing promises what operations cannot deliver and finance has not funded, customers notice before the CEO does.`,
      eli5: `A business is like a restaurant. The marketing person puts up posters to attract diners. The waiter (sales) takes orders. The kitchen (operations) cooks. The cashier (finance) handles money and checks there is enough to buy tomorrow's vegetables. The manager (HR) hires and trains everyone. If the poster promises pizza but the kitchen only makes dosa, it all falls apart.`,
      blocks: [
        {
          type: 'framework', name: 'Porter’s Value Chain', by: 'Michael Porter, 1985', when: 'To see which activities create value and where costs sit.',
          steps: [
            { label: 'Inbound logistics', desc: 'Receiving and storing inputs (raw materials, components).' },
            { label: 'Operations', desc: 'Turning inputs into products or services.' },
            { label: 'Outbound logistics', desc: 'Getting the product to customers — warehousing, delivery.' },
            { label: 'Marketing & sales', desc: 'Making customers aware, persuading them to buy, pricing.' },
            { label: 'Service', desc: 'Support after the sale — repairs, help desk, returns.' },
            { label: 'Support activities', desc: 'Firm infrastructure (finance, legal), HR, technology, procurement — they power every primary activity.' }
          ]
        },
        {
          type: 'compare', title: 'Who does what (and what they measure)',
          headers: ['Function', 'Core job', 'Typical metrics', 'Leader'],
          rows: [
            ['Marketing', 'Create demand and build the brand', 'Leads, CAC, brand awareness', 'CMO'],
            ['Sales', 'Convert demand into revenue', 'Bookings, win rate, pipeline', 'CRO / VP Sales'],
            ['Product / R&D', 'Decide what to build and build it', 'Adoption, retention, release velocity', 'CPO / CTO'],
            ['Operations', 'Deliver reliably and efficiently', 'On-time delivery, cost per unit, quality', 'COO'],
            ['Finance', 'Plan, fund and control money', 'Cash, margin, ROI, forecast accuracy', 'CFO'],
            ['HR / People', 'Hire, develop and retain talent', 'Time to hire, attrition, engagement', 'CHRO']
          ]
        },
        {
          type: 'case', company: 'Zara (Inditex)', year: '1990s–today', title: 'Functions wired together for speed',
          situation: `Fashion trends change fast; most retailers designed collections many months ahead and risked big unsold stock.`,
          decision: `Zara linked store managers (sales data), designers (product) and largely nearby factories (operations) tightly. Stores report what sells; designers react; production runs in small batches with frequent deliveries.`,
          outcome: `Zara could get new designs into stores in weeks rather than months, sold more at full price and reduced markdowns compared with traditional rivals.`,
          lesson: `Competitive advantage often comes from how functions connect, not how good any one is in isolation.`
        },
        {
          type: 'timeline', title: 'Follow one order through the business',
          items: [
            { label: 'Marketing', desc: 'An Instagram ad brings a shopper to the site.' },
            { label: 'Sales', desc: 'Checkout converts; a discount code is applied.' },
            { label: 'Finance', desc: 'Payment is captured, GST/VAT recorded, revenue booked.' },
            { label: 'Operations', desc: 'Warehouse picks, packs and ships within 24 hours.' },
            { label: 'Service', desc: 'Customer asks to exchange size; support handles it.' },
            { label: 'Product', desc: 'Return data shows sizing is off; the size chart is fixed.' }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: '2025–26: AI is blurring the lines',
          html: `<p>Many companies now use AI agents for first-line support, sales outreach drafting, invoice processing and recruiting screens. The functions still exist, but small teams can cover more ground, and <b>"RevOps"</b> (one team aligning marketing, sales and customer success data) has become common.</p>`
        },
        {
          type: 'scenario', prompt: 'Marketing launches a big sale; orders triple; the warehouse falls days behind and complaints flood in. What was the root failure?',
          options: [
            { text: 'Marketing spent too much.', feedback: 'Demand was the goal. The issue is that operations was not ready for it.', good: false },
            { text: 'Lack of cross-functional planning (sales & operations planning).', feedback: 'Exactly. A simple S&OP meeting would have aligned the promotion with warehouse capacity, staffing and stock.', good: true },
            { text: 'Customers are too impatient.', feedback: 'Blaming customers never fixes the system.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Before launching anything, ask each function',
          items: ['Marketing: who is the target and what is the promise?', 'Sales: how will we convert and at what price?', 'Ops: can we deliver the volume and quality?', 'Finance: is it funded, and what is the expected return?', 'People: do we have the staff and training?', 'Service: how will we handle problems?']
        }
      ],
      terms: [
        { term: 'Value chain', def: 'The sequence of activities a firm performs to design, make, sell, deliver and support its product.' },
        { term: 'Primary activities', def: 'Activities directly involved in creating and delivering the product.' },
        { term: 'Support activities', def: 'Activities that enable primary ones: HR, technology, procurement, finance and infrastructure.' },
        { term: 'S&OP', def: 'Sales and operations planning — a regular process aligning demand forecasts with supply capacity.' },
        { term: 'C-suite', def: 'Top executives whose titles start with "Chief": CEO, CFO, COO, CMO, CTO, CHRO.' },
        { term: 'RevOps', def: 'Revenue operations — aligning marketing, sales and customer-success processes, data and tools.' }
      ],
      quiz: [
        { q: 'In Porter’s value chain, HR is a:', options: ['Primary activity', 'Support activity', 'Outbound logistics activity', 'Customer'], answer: 1, explain: 'HR supports all primary activities.' },
        { q: 'Which metric most belongs to Operations?', options: ['Brand awareness', 'On-time delivery rate', 'Win rate', 'Employee engagement'], answer: 1, explain: 'Operations owns reliable, efficient delivery.' },
        { q: 'Zara’s key advantage came mainly from:', options: ['Celebrity ads', 'Lowest prices in the market', 'Tight links between store data, design and nearby production', 'Online-only sales'], answer: 2, explain: 'Speed from integrated functions let Zara respond to trends quickly.' },
        { q: 'Who typically leads the finance function?', options: ['CMO', 'CHRO', 'COO', 'CFO'], answer: 3, explain: 'The Chief Financial Officer.' }
      ],
      challenge: {
        title: 'Fix a broken launch',
        prompt: `A D2C skincare brand ran a festival campaign. Results: website visits up 5x, conversion normal, but 30% of orders shipped late, 12% were cancelled and support tickets doubled. Cash is now tight because ad spend was paid upfront. Write a one-page cross-functional fix plan for the next campaign.`,
        hints: ['Go function by function.', 'Think about forecasting, inventory, staffing and cash timing.'],
        model: `<p><b>Root cause:</b> marketing scaled demand without a joint plan with operations and finance.</p><ul><li><b>Planning:</b> start a weekly S&OP meeting 6 weeks before any campaign; set a demand forecast range (base/high).</li><li><b>Operations:</b> pre-position inventory for the high case; book temporary warehouse staff; agree a courier surge plan.</li><li><b>Marketing:</b> cap daily ad spend at the warehouse’s daily shipping capacity; pause ads automatically when backlog exceeds 1 day.</li><li><b>Service:</b> pre-written replies, proactive delay messages, AI chatbot for "where is my order".</li><li><b>Finance:</b> phase ad spend; negotiate supplier credit; track cash weekly.</li></ul><p><b>Success metric:</b> next campaign with ≥95% on-time shipping and cancellations under 3%.</p>`
      },
      takeaways: [
        'Every business has the same core functions; the magic is how they connect.',
        'The value chain shows where value and cost are created.',
        'Each function has its own metrics — and its own blind spots.',
        'Cross-functional planning (like S&OP) prevents promise–delivery gaps.'
      ]
    },

    /* ---------------- Lesson 6 ---------------- */
    {
      id: 'business-101-6',
      title: 'Reading business news, key metrics and vocabulary',
      level: 'Advanced',
      minutes: 15,
      hook: `"Revenue up 20%, margins compressed, guidance cut, stock down 12%" — by the end of this lesson that headline will tell you a full story.`,
      eli5: `Business news is like a cricket scorecard. Runs (revenue) matter, but so do run rate (growth), wickets lost (losses), and what the captain says about the next match (guidance). Once you know what each number means, you can tell who is really winning.`,
      blocks: [
        {
          type: 'framework', name: 'How to read an earnings headline', by: 'Analyst practice', when: 'Every time a company reports results.',
          steps: [
            { label: '1. Revenue & growth', desc: 'How much did sales grow vs last year (YoY)? Is growth speeding up or slowing?' },
            { label: '2. Margins', desc: 'Gross, operating and net margin. "Margin expansion" = keeping more of each rupee/dollar.' },
            { label: '3. Profit vs expectations', desc: 'Did earnings per share (EPS) "beat" or "miss" analyst consensus?' },
            { label: '4. Cash flow', desc: 'Free cash flow shows whether profits turn into cash.' },
            { label: '5. Guidance', desc: 'Management’s forecast for the next quarter/year. Often moves the stock more than past results.' },
            { label: '6. The story', desc: 'Why did it happen? New product, price change, cost cuts, macro factors, one-offs?' }
          ]
        },
        {
          type: 'compare', title: 'Key metrics cheat-sheet',
          headers: ['Metric', 'Formula / meaning', 'Why it matters'],
          rows: [
            ['YoY growth', '(This period − same period last year) ÷ last year', 'Removes seasonality'],
            ['Gross margin', 'Gross profit ÷ revenue', 'Pricing power & production efficiency'],
            ['EBITDA', 'Earnings before interest, tax, depreciation, amortisation', 'Rough operating cash profit (use with care)'],
            ['EPS', 'Net profit ÷ number of shares', 'Profit per share; drives valuation'],
            ['P/E ratio', 'Share price ÷ EPS', 'How much investors pay for ₹1/$1 of profit'],
            ['Market cap', 'Share price × shares outstanding', 'What the market values the equity at'],
            ['Free cash flow', 'Operating cash flow − capital expenditure', 'Cash the business truly generates']
          ]
        },
        {
          type: 'formula', name: 'Year-over-year growth', expr: 'YoY growth % = (Current − Prior) ÷ Prior × 100',
          explain: 'Compare a period with the same period a year earlier so seasonal effects (festivals, holidays) cancel out.',
          example: 'Q3 revenue ₹1,200 cr vs Q3 last year ₹1,000 cr → (1,200 − 1,000) ÷ 1,000 = 20% YoY. If Q2 was ₹1,300 cr, a QoQ fall is not alarming if Q2 had a festival.'
        },
        {
          type: 'interactive', widget: 'compound', title: 'Why growth rates compound',
          note: 'Compare 10% vs 20% annual growth over 10 years. The gap is much larger than double — that is why investors obsess over growth rates.'
        },
        {
          type: 'case', company: 'Nokia', year: '2007–2013', title: 'When the headlines lag the reality',
          situation: `Nokia was the world’s largest phone maker when Apple launched the iPhone in 2007, and its sales stayed strong for a while.`,
          decision: `Nokia kept betting on its Symbian platform for too long, then in 2011 partnered with Microsoft on Windows Phone rather than Android.`,
          outcome: `Its smartphone share collapsed and in 2013 it agreed to sell its devices business to Microsoft. Nokia reinvented itself around telecom network equipment.`,
          lesson: `Today’s revenue is a lagging indicator. Read news for shifts in growth, market share and platform momentum — not just current size.`
        },
        {
          type: 'flip', title: 'Decode the jargon',
          cards: [
            { front: '"Top-line growth, bottom-line pressure"', back: 'Revenue grew, but net profit fell or grew slower — costs rose faster.' },
            { front: '"Guidance cut"', back: 'Management lowered its forecast for future results.' },
            { front: '"Headwinds / tailwinds"', back: 'External factors hurting / helping results (e.g. currency, demand).' },
            { front: '"Run-rate"', back: 'Current period annualised — e.g. ₹10 cr this month → ₹120 cr annual run-rate.' },
            { front: '"Like-for-like / same-store sales"', back: 'Growth from existing stores only, excluding new openings.' },
            { front: '"Basis points (bps)"', back: 'One hundredth of a percentage point. Margin up 150 bps = up 1.5 points.' }
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'A 10-minute daily news habit',
          html: `<ul><li>Skim one business paper (e.g. Economic Times, Mint, FT, WSJ, Bloomberg) for 5 headlines.</li><li>Pick one company story: write revenue growth, margin trend and the "why" in one line.</li><li>Ask: who wins, who loses, what would I do as CEO?</li><li>Weekly: read one earnings call transcript summary — management’s Q&A is where the real story often appears.</li></ul>`
        },
        {
          type: 'scenario', prompt: 'A company reports revenue +25% YoY, net profit +2%, and cuts next-year guidance. The stock falls 10%. What is the best interpretation?',
          options: [
            { text: 'Investors are irrational — revenue is up 25%.', feedback: 'Markets price the future. Weak profit growth plus a guidance cut signals that growth is getting expensive and may slow.', good: false },
            { text: 'Growth is costly (margins squeezed) and the outlook is weaker; investors lowered their view of future profits.', feedback: 'Correct. Look at margins and guidance, not just revenue.', good: true },
            { text: 'The company must be about to go bankrupt.', feedback: 'Too extreme. It is still growing and profitable.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'YoY / QoQ', def: 'Year-over-year / quarter-over-quarter comparisons.' },
        { term: 'EBITDA', def: 'Earnings before interest, taxes, depreciation and amortisation — a rough measure of operating profit.' },
        { term: 'EPS', def: 'Earnings per share: net profit divided by number of shares.' },
        { term: 'Market capitalisation', def: 'Total market value of a company’s shares (price × shares).' },
        { term: 'Guidance', def: 'A company’s official forecast of future results.' },
        { term: 'Basis point', def: 'One hundredth of one percent (0.01%).' },
        { term: 'Free cash flow', def: 'Cash from operations minus investment in long-term assets; the cash a business can distribute or reinvest.' },
        { term: 'P/E ratio', def: 'Price-to-earnings: share price divided by EPS; a common valuation shortcut.' }
      ],
      quiz: [
        { q: 'Revenue last Q2: ₹800 cr. This Q2: ₹920 cr. YoY growth?', options: ['12%', '15%', '13%', '20%'], answer: 1, explain: '(920 − 800) ÷ 800 = 15%.' },
        { q: 'Operating margin rose from 18% to 19.5%. That is an increase of:', options: ['1.5 bps', '15 bps', '1,500 bps', '150 bps'], answer: 3, explain: '1.5 percentage points = 150 basis points.' },
        { q: 'Share price ₹500, EPS ₹25. P/E ratio?', options: ['20', '12.5', '25', '475'], answer: 0, explain: '500 ÷ 25 = 20.' },
        { q: 'Which often moves a stock most on results day?', options: ['Last year’s revenue', 'Guidance for future periods', 'Number of employees', 'Office locations'], answer: 1, explain: 'Markets price the future, so guidance matters a lot.' },
        { q: 'A company earned ₹5 cr in March. Its annual run-rate is:', options: ['₹5 cr', '₹15 cr', '₹60 cr', '₹50 cr'], answer: 2, explain: '₹5 cr × 12 = ₹60 cr.' }
      ],
      challenge: {
        title: 'Write the analyst note',
        prompt: `A listed retailer reports: revenue ₹4,800 cr (last year same quarter ₹4,000 cr); gross margin 22% (last year 24%); net profit ₹190 cr (last year ₹200 cr); 60 new stores opened; same-store sales growth 4%; guidance maintained. Write a 5-line summary: what happened, why, and what you would watch next quarter.`,
        hints: ['Calculate YoY growth.', 'Separate growth from new stores vs existing stores.', 'Explain the margin change in basis points.'],
        model: `<ol><li><b>Growth:</b> revenue +20% YoY (4,800 vs 4,000), but same-store sales only +4% — most growth came from 60 new stores.</li><li><b>Margins:</b> gross margin down 200 bps (24% → 22%), likely from discounting or new-store opening costs.</li><li><b>Profit:</b> net profit −5% YoY despite higher sales — growth is not yet profitable.</li><li><b>Outlook:</b> guidance held, so management expects new stores to mature.</li><li><b>Watch next:</b> same-store growth (does it rise above inflation?), gross margin recovery, and profitability of the new-store cohort.</li></ol><p><b>Verdict:</b> expansion-led growth with weaker unit health; neutral until margins recover.</p>`
      },
      takeaways: [
        'Read results in order: growth, margins, profit vs expectations, cash, guidance, story.',
        'YoY comparisons remove seasonality; basis points describe small margin changes precisely.',
        'Markets react to the future (guidance), not just the past.',
        'Separate growth from new units vs existing units (same-store sales).',
        'A small daily news habit builds business intuition quickly.'
      ]
    }
  ]
});
