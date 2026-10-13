/* MBA Studio — Track 2: Economics for Business */
MBA.addTrack({
  id: 'economics',
  stage: 1,
  order: 2,
  title: 'Economics for Business',
  icon: '📈',
  color: '#8b5cf6',
  tagline: 'The hidden forces behind every price, market and boom',
  summary: `Learn the economic ideas managers actually use: opportunity cost, supply and demand, elasticity, market structure, cost curves, game theory, the macro economy and behavioural economics. You will be able to explain why prices move, predict how competitors react, and read central-bank news for what it means to your business.`,
  outcomes: [
    'Use opportunity cost and marginal thinking to make decisions',
    'Predict price and volume changes with supply, demand and elasticity',
    'Identify market structures and their profit potential',
    'Apply economies of scale, scope and game theory to strategy',
    'Interpret GDP, inflation, interest rates and exchange rates for business',
    'Use behavioural economics and network effects ethically in products'
  ],
  lessons: [
    /* ---------------- Lesson 1 ---------------- */
    {
      id: 'economics-1',
      title: 'Scarcity, opportunity cost and thinking at the margin',
      level: 'Beginner',
      minutes: 11,
      hook: `The real cost of anything is what you give up to get it — and most managers forget to count it.`,
      eli5: `You have ₹100 and one evening. You can go to a movie or to a cricket match with friends — not both. If you choose the movie, the "cost" is not just ₹100; it is also the fun of the match you missed. Economics is the study of making smart choices when you cannot have everything.`,
      blocks: [
        {
          type: 'text', title: 'Scarcity is the starting point',
          html: `<p>Money, time, talent, factory capacity and attention are all <b>scarce</b> — there is never enough for everything. So every business decision is a choice between alternatives.</p><p>Economics gives you three powerful habits: <span class="hl">count opportunity costs, think at the margin, and follow incentives</span>.</p>`
        },
        {
          type: 'formula', name: 'Opportunity cost', expr: 'Opportunity cost = Value of the best alternative you give up',
          explain: 'Include what you could have earned with the same money, time or resources elsewhere — not only the cash you spend.',
          example: 'You quit a ₹15 lakh/year job to run a startup that pays you ₹6 lakh. Your opportunity cost is ₹9 lakh per year of lost salary (plus the equity or experience you might have earned). If the startup does not have a credible path to beat that, rethink.'
        },
        {
          type: 'framework', name: 'Marginal thinking', by: 'Core microeconomics (Alfred Marshall and successors)', when: 'Any "should we do a bit more or a bit less?" decision.',
          steps: [
            { label: 'Ask about the next unit', desc: 'Not "is this product profitable overall?" but "is one more unit / hour / store worth it?"' },
            { label: 'Marginal benefit (MB)', desc: 'Extra revenue or value from one more unit.' },
            { label: 'Marginal cost (MC)', desc: 'Extra cost of producing that one more unit.' },
            { label: 'Rule', desc: 'Keep going while MB > MC. Stop where MB = MC.' },
            { label: 'Ignore sunk costs', desc: 'Money already spent and unrecoverable should not affect the next decision.' }
          ]
        },
        {
          type: 'case', company: 'Concorde', year: '1960s–2003', title: 'The sunk-cost trap',
          situation: `The British and French governments funded the supersonic Concorde. Costs rose far above early estimates and it became clear it would not be commercially successful.`,
          decision: `Both governments kept funding the project, partly because so much had already been spent and pulling out was politically hard.`,
          outcome: `Only a small number of aircraft entered service and the programme never recovered its development costs. "Concorde fallacy" became a textbook name for the sunk-cost fallacy.`,
          lesson: `Past spending is gone. Decide based on future costs and future benefits only.`
        },
        {
          type: 'scenario', prompt: 'You have spent ₹40 lakh building a feature. Finishing needs ₹10 lakh more, and you now expect it to add only ₹5 lakh of value. What do you do?',
          options: [
            { text: 'Finish it — we already spent ₹40 lakh.', feedback: 'That is the sunk-cost fallacy. The ₹40 lakh is gone either way.', good: false },
            { text: 'Stop, unless the ₹10 lakh has no better use and strategic value pushes the benefit above ₹10 lakh.', feedback: 'Correct. Compare the future ₹10 lakh cost with the future ₹5 lakh benefit (plus any strategic value).', good: true },
            { text: 'Spend more to make it perfect.', feedback: 'That increases future cost without evidence of more benefit.', good: false }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Incentives drive behaviour',
          html: `<p>Pay salespeople on revenue and they may discount heavily. Pay them on gross profit and they protect price. Charlie Munger’s line: <b>"Show me the incentive and I will show you the outcome."</b> Before blaming people, check what you are rewarding.</p>`
        },
        {
          type: 'flip', title: 'Test yourself',
          cards: [
            { front: 'Sunk cost', back: 'A cost already incurred that cannot be recovered. Ignore it in future decisions.' },
            { front: 'When to stop producing more?', back: 'When marginal cost rises to equal marginal benefit.' },
            { front: 'Opportunity cost of holding ₹1 cr cash at 0% when deposits pay 7%', back: 'About ₹7 lakh a year in forgone interest.' },
            { front: 'Three habits of economic thinking', back: 'Opportunity cost, marginal thinking, incentives.' }
          ]
        }
      ],
      terms: [
        { term: 'Scarcity', def: 'Limited resources compared with unlimited wants; the reason choices are needed.' },
        { term: 'Opportunity cost', def: 'The value of the next-best alternative given up when making a choice.' },
        { term: 'Marginal cost', def: 'The extra cost of producing one more unit.' },
        { term: 'Marginal benefit', def: 'The extra value or revenue gained from one more unit.' },
        { term: 'Sunk cost', def: 'Money already spent that cannot be recovered; irrelevant to future decisions.' },
        { term: 'Incentive', def: 'A reward or penalty that motivates behaviour.' }
      ],
      quiz: [
        { q: 'You turn down a ₹50,000 consulting gig to attend a free workshop. The workshop’s opportunity cost is:', options: ['₹0', 'The workshop fee', 'Unknown', '₹50,000'], answer: 3, explain: 'You gave up ₹50,000 — that is the opportunity cost even though the workshop is free.' },
        { q: 'Which should NOT influence whether you continue a project?', options: ['Future costs', 'Future benefits', 'Money already spent', 'Alternative uses of the team'], answer: 2, explain: 'Money already spent is sunk.' },
        { q: 'Marginal revenue of one more unit is ₹90; marginal cost is ₹110. You should:', options: ['Produce more', 'Produce less', 'Keep output the same', 'Raise fixed costs'], answer: 1, explain: 'MC > MR, so the last unit loses money — cut back.' },
        { q: 'The "Concorde fallacy" is another name for:', options: ['Sunk-cost fallacy', 'Network effects', 'Price discrimination', 'Inflation'], answer: 0, explain: 'Continuing because of past spending.' },
        { q: 'A sales team paid only on revenue will most likely:', options: ['Protect margins', 'Refuse new customers', 'Focus on cost cutting', 'Discount to close deals'], answer: 3, explain: 'Revenue incentives encourage discounting to win volume.' }
      ],
      challenge: {
        title: 'Should the founder keep the day job?',
        prompt: `Arjun earns ₹18 lakh a year. His side business makes ₹4 lakh profit a year working evenings. If he goes full-time, he expects profit of ₹10 lakh in year 1 and ₹25 lakh in year 2. Using opportunity cost, should he quit now, later, or not at all? What else matters?`,
        hints: ['Compare full-time profit with salary given up plus the side-income he already earns.', 'Think about risk and learning, not only money.'],
        model: `<p><b>Year 1:</b> Full-time profit ₹10 lakh vs current total ₹22 lakh (₹18 salary + ₹4 side). Opportunity cost gap = <b>−₹12 lakh</b>.</p><p><b>Year 2:</b> ₹25 lakh vs ₹22 lakh (assuming salary flat) = <b>+₹3 lakh</b>. Cumulative over two years: −₹9 lakh.</p><p><b>Non-money factors:</b> upside if the business keeps compounding beyond year 2; equity value; skills; risk if projections miss; personal savings runway.</p><p><b>Recommendation:</b> Do not quit on these numbers alone. Set a milestone — e.g. side profit run-rate of ₹10 lakh or a signed anchor customer — plus 12 months of savings, then quit. That reduces the opportunity cost and the risk.</p>`
      },
      takeaways: [
        'Every choice has an opportunity cost — count it.',
        'Decide at the margin: continue while marginal benefit exceeds marginal cost.',
        'Ignore sunk costs.',
        'Incentives shape behaviour — design them carefully.'
      ]
    },

    /* ---------------- Lesson 2 ---------------- */
    {
      id: 'economics-2',
      title: 'Supply, demand and elasticity',
      level: 'Beginner',
      minutes: 14,
      hook: `Why do onion prices in India spike some years, and why can an airline charge ₹4,000 or ₹14,000 for the same seat?`,
      eli5: `When everyone wants the new toy and the shop has only a few, the price goes up. When the shop has piles of toys nobody wants, it puts them on sale. Demand is how many people want something at each price; supply is how much sellers offer. Where they meet is the market price.`,
      blocks: [
        {
          type: 'framework', name: 'The laws of supply and demand', by: 'Alfred Marshall, Principles of Economics, 1890', when: 'Predicting what happens to price and quantity when conditions change.',
          steps: [
            { label: 'Law of demand', desc: 'Higher price → people buy less (all else equal). Demand curve slopes down.' },
            { label: 'Law of supply', desc: 'Higher price → sellers offer more. Supply curve slopes up.' },
            { label: 'Equilibrium', desc: 'Price where quantity demanded = quantity supplied.' },
            { label: 'Demand shifters', desc: 'Income, tastes, prices of substitutes/complements, population, expectations.' },
            { label: 'Supply shifters', desc: 'Input costs, technology, weather, number of sellers, regulation.' }
          ]
        },
        {
          type: 'interactive', widget: 'supply-demand', title: 'Shift the curves',
          note: 'Simulate a bad monsoon (supply shifts left) — price rises, quantity falls. Then simulate a viral health trend (demand shifts right).'
        },
        {
          type: 'formula', name: 'Price elasticity of demand (PED)', expr: 'PED = % change in quantity demanded ÷ % change in price',
          explain: 'If |PED| > 1 demand is elastic (buyers are price-sensitive); if |PED| < 1 it is inelastic.',
          example: 'A streaming app raises price 10% and subscribers fall 4%: PED = −4 ÷ 10 = −0.4 (inelastic), so revenue rises. If subscribers fell 20%, PED = −2 (elastic) and revenue falls.'
        },
        {
          type: 'compare', title: 'What makes demand elastic or inelastic?',
          headers: ['Factor', 'More inelastic (price-insensitive)', 'More elastic (price-sensitive)'],
          rows: [
            ['Substitutes', 'Few (insulin, electricity)', 'Many (a brand of biscuits)'],
            ['Share of budget', 'Small (salt, matches)', 'Large (cars, holidays)'],
            ['Necessity', 'Need (medicine)', 'Want (luxury handbags — though status goods can differ)'],
            ['Time to adjust', 'Short run (petrol this week)', 'Long run (switching to an EV)'],
            ['Who pays', 'Someone else pays (business travel)', 'You pay (leisure travel)']
          ]
        },
        {
          type: 'interactive', widget: 'pricing-elasticity', title: 'Find the profit-maximising price',
          note: 'Set elasticity to −0.5 and raise price: revenue and profit climb. Set it to −2.5: price cuts can grow profit. Note the optimal price is not the revenue-maximising price.'
        },
        {
          type: 'case', company: 'Airlines (revenue management)', year: '1980s–today', title: 'Different prices for different elasticities',
          situation: `After US airline deregulation in 1978, carriers faced fierce competition from low-cost entrants.`,
          decision: `American Airlines pioneered "yield management": using booking data to charge price-sensitive leisure travellers less (advance purchase, restrictions) and price-insensitive business travellers more (late, flexible tickets).`,
          outcome: `Revenue management became standard across airlines, hotels, ride-hailing and now e-commerce dynamic pricing.`,
          lesson: `Segment customers by elasticity. The same product can earn more when prices match each group’s willingness to pay — as long as it feels fair.`
        },
        {
          type: 'scenario', prompt: 'Your premium coffee brand has loyal customers and few close substitutes. Costs rose 8%. What is the smartest pricing move?',
          options: [
            { text: 'Absorb the cost; never raise prices.', feedback: 'With inelastic demand, absorbing costs gives away margin unnecessarily.', good: false },
            { text: 'Raise price about 8–10% with clear communication, and watch volume weekly.', feedback: 'Good. Inelastic demand means volume should fall less than price rises — test and monitor.', good: true },
            { text: 'Double the price.', feedback: 'Even inelastic demand becomes elastic at some point; large jumps invite switching.', good: false }
          ]
        },
        {
          type: 'flip', title: 'Quick checks',
          cards: [
            { front: 'Price +5%, quantity −15%. PED?', back: '−3 (elastic). Revenue falls.' },
            { front: 'A drought hits coffee farms. Curve shift?', back: 'Supply shifts left: price up, quantity down.' },
            { front: 'Petrol price rises; what happens to demand for EVs?', back: 'Rises — EVs are substitutes for petrol cars.' },
            { front: 'Complement example', back: 'Printers and ink: cheaper printers raise demand for ink.' }
          ]
        }
      ],
      terms: [
        { term: 'Demand', def: 'The quantity buyers want at each possible price.' },
        { term: 'Supply', def: 'The quantity sellers will offer at each possible price.' },
        { term: 'Equilibrium price', def: 'The price at which quantity demanded equals quantity supplied.' },
        { term: 'Price elasticity of demand', def: 'How strongly quantity demanded responds to a price change.' },
        { term: 'Substitute', def: 'A product that can replace another (tea vs coffee).' },
        { term: 'Complement', def: 'A product used together with another (cars and petrol).' },
        { term: 'Dynamic pricing', def: 'Changing prices in real time based on demand, supply and customer segment.' }
      ],
      quiz: [
        { q: 'A new technology halves the cost of making solar panels. What happens?', options: ['Demand shifts left', 'Supply shifts right; price falls, quantity rises', 'Supply shifts left', 'Nothing'], answer: 1, explain: 'Lower input costs shift supply right.' },
        { q: 'Price rises 20%; quantity falls 10%. PED = ?', options: ['−2.0', '−10', '−0.5', '−0.2'], answer: 2, explain: '−10 ÷ 20 = −0.5 (inelastic).' },
        { q: 'If demand is inelastic, raising price will:', options: ['Lower revenue', 'Have no effect on quantity', 'Not change price', 'Raise revenue'], answer: 3, explain: 'Quantity falls proportionally less than price rises.' },
        { q: 'Which product likely has the most elastic demand?', options: ['Life-saving medicine', 'One brand of cola among many', 'Electricity', 'Salt'], answer: 1, explain: 'Many close substitutes make demand elastic.' },
        { q: 'Airline yield management works because:', options: ['All customers have the same elasticity', 'Planes have unlimited seats', 'Regulators set prices', 'Different customer segments have different price sensitivities'], answer: 3, explain: 'Segments differ in WTP and elasticity.' }
      ],
      challenge: {
        title: 'Price the gym membership',
        prompt: `A gym has 1,000 members paying ₹2,000/month. Variable cost per member is ₹400/month. Tests suggest PED ≈ −0.6. The owner wants to raise price to ₹2,200. Estimate new members, revenue and contribution. Should she do it?`,
        hints: ['% price change = 10%.', 'Members change by PED × % price change.', 'Contribution = (price − variable cost) × members.'],
        model: `<ol><li>Price change = +10%. Member change ≈ −0.6 × 10% = <b>−6%</b> → 940 members.</li><li>Revenue: before 1,000 × 2,000 = ₹20 lakh; after 940 × 2,200 = <b>₹20.68 lakh</b> (+3.4%).</li><li>Contribution: before 1,000 × 1,600 = ₹16 lakh; after 940 × 1,800 = <b>₹16.92 lakh</b> (+5.75%).</li></ol><p><b>Recommendation:</b> Raise the price, but grandfather existing members for 2–3 months or bundle a perk (free class) to reduce churn risk; monitor cancellations. Fewer members also lowers crowding, which may raise satisfaction.</p>`
      },
      takeaways: [
        'Price and quantity are set where supply meets demand; shifts move both.',
        'Elasticity tells you whether a price change raises or lowers revenue.',
        'Substitutes, budget share and time drive elasticity.',
        'Segmenting by elasticity (yield management) can unlock profit.'
      ]
    },

    /* ---------------- Lesson 3 ---------------- */
    {
      id: 'economics-3',
      title: 'Costs, scale and market structures',
      level: 'Intermediate',
      minutes: 15,
      hook: `Why can Walmart and DMart undercut your corner store and still make money — and why do some industries end up with just two or three giants?`,
      eli5: `Baking one cake needs an oven, a mixer and an hour. Baking 100 cakes uses the same oven and mixer, so each cake becomes cheaper. That is economies of scale. In some markets, the biggest bakery becomes so cheap that small ones cannot keep up and the market ends up with only a few big players.`,
      blocks: [
        {
          type: 'compare', title: 'The cost toolkit',
          headers: ['Cost', 'Meaning', 'Example (bakery)'],
          rows: [
            ['Fixed cost', 'Does not vary with output', 'Oven lease ₹50,000/month'],
            ['Variable cost', 'Varies with output', 'Flour, butter: ₹120 per cake'],
            ['Average cost', 'Total cost ÷ units', '₹50,000 + ₹120×500 = ₹1,10,000 → ₹220 per cake'],
            ['Marginal cost', 'Cost of one more unit', '≈ ₹120 until the oven is full']
          ]
        },
        {
          type: 'formula', name: 'Average cost falls with scale', expr: 'Average cost = Fixed cost ÷ Units + Variable cost per unit',
          explain: 'As units grow, fixed cost is spread thinner, so average cost falls toward the variable cost.',
          example: 'Fixed ₹50,000, variable ₹120. At 500 cakes: 100 + 120 = ₹220. At 2,000 cakes: 25 + 120 = ₹145. Scale cuts average cost by about a third.'
        },
        {
          type: 'compare', title: 'Economies of scale vs scope',
          headers: ['', 'Economies of scale', 'Economies of scope'],
          rows: [
            ['Idea', 'Make more of the same thing, cheaper per unit', 'Make different things cheaper together than separately'],
            ['Source', 'Spreading fixed cost, bulk buying, specialisation', 'Shared assets: brand, distribution, data, tech'],
            ['Example', 'A large car plant', 'Amazon using the same warehouses and logistics for many categories, and its tech for AWS'],
            ['Limit', 'Diseconomies: bureaucracy, coordination', 'Complexity, lost focus']
          ]
        },
        {
          type: 'framework', name: 'Market structures spectrum', by: 'Standard industrial organisation economics', when: 'Judging how much pricing power and profit an industry allows.',
          steps: [
            { label: 'Perfect competition', desc: 'Many sellers, identical products, free entry (e.g. wheat at a mandi). Price-takers; long-run profits near zero.' },
            { label: 'Monopolistic competition', desc: 'Many sellers, differentiated products (restaurants, salons). Some pricing power via brand.' },
            { label: 'Oligopoly', desc: 'A few big firms (telecom, airlines, cola). Firms watch each other; price wars or tacit coordination.' },
            { label: 'Monopoly', desc: 'One seller (local water utility, patent-protected drug). High pricing power; often regulated.' },
            { label: 'Platforms', desc: 'Two-sided markets with network effects (app stores, marketplaces) often tip toward one or two winners.' }
          ]
        },
        {
          type: 'case', company: 'Reliance Jio', year: '2016–2019', title: 'Scale and price reshape an oligopoly',
          situation: `Indian mobile data was relatively expensive and the market had many operators. Reliance had invested heavily in a nationwide 4G network — a huge fixed cost.`,
          decision: `Jio launched in 2016 with free voice and data for months, then very low data prices, aiming to spread its fixed network cost over a massive user base quickly.`,
          outcome: `Data usage in India exploded, data prices fell sharply, and the industry consolidated: several operators exited or merged, leaving a few large players.`,
          lesson: `When fixed costs are huge and marginal costs low, pricing for scale can redraw an industry — and oligopolies often follow.`
        },
        {
          type: 'interactive', widget: 'five-forces', title: 'Rate an industry’s attractiveness',
          note: 'Rate Indian telecom before and after Jio. Notice how rivalry and buyer power changed the profit potential.'
        },
        {
          type: 'scenario', prompt: 'You make a commodity (e.g. cement) in a region with many similar producers. Prices are falling. What is your best long-term play?',
          options: [
            { text: 'Rely on brand ads to charge a premium.', feedback: 'Hard in a near-commodity — buyers mostly compare price and delivery.', good: false },
            { text: 'Become the lowest-cost producer (scale, energy efficiency, logistics) and lock in key B2B contracts.', feedback: 'Right. In competitive markets, cost leadership and reliability win.', good: true },
            { text: 'Agree prices with competitors.', feedback: 'That is illegal cartel behaviour; competition regulators (e.g. CCI in India) have fined cement firms for it.', good: false }
          ]
        },
        {
          type: 'flip', title: 'Match the structure',
          cards: [
            { front: 'Local street food stalls', back: 'Monopolistic competition.' },
            { front: 'Commercial aircraft (Airbus, Boeing)', back: 'Oligopoly (duopoly).' },
            { front: 'A city’s piped water supplier', back: 'Natural monopoly, usually regulated.' },
            { front: 'Wheat sold by thousands of farmers', back: 'Close to perfect competition.' }
          ]
        }
      ],
      terms: [
        { term: 'Average cost', def: 'Total cost divided by the number of units produced.' },
        { term: 'Economies of scale', def: 'Falling average cost as output grows.' },
        { term: 'Economies of scope', def: 'Cost savings from producing several products using shared resources.' },
        { term: 'Oligopoly', def: 'A market dominated by a few large firms.' },
        { term: 'Monopoly', def: 'A market with a single seller and no close substitutes.' },
        { term: 'Natural monopoly', def: 'An industry where one firm can serve the market at lower cost than several (e.g. water pipes).' },
        { term: 'Barrier to entry', def: 'Anything that makes it hard for new firms to enter: capital, licences, patents, network effects.' }
      ],
      quiz: [
        { q: 'Fixed cost ₹2,00,000, variable cost ₹50/unit, 4,000 units. Average cost?', options: ['₹50', '₹100', '₹75', '₹150'], answer: 1, explain: '2,00,000 ÷ 4,000 = 50, + 50 = ₹100.' },
        { q: 'Amazon using its logistics network for many product categories is an example of:', options: ['Economies of scope', 'Perfect competition', 'Diseconomies of scale', 'Price elasticity'], answer: 0, explain: 'Shared assets across products = scope.' },
        { q: 'In perfect competition, long-run economic profit tends to:', options: ['Rise steadily', 'Be very high', 'Fall to about zero', 'Be set by government'], answer: 2, explain: 'Free entry competes profits away.' },
        { q: 'Jio’s low launch pricing was viable mainly because:', options: ['Network had low fixed cost', 'Marginal cost per extra user was low relative to the huge fixed network cost', 'Government set prices', 'Competitors raised prices'], answer: 1, explain: 'Spreading huge fixed costs over many users lowers average cost.' }
      ],
      challenge: {
        title: 'Scale or niche?',
        prompt: `You run a regional packaged-snacks brand: fixed costs ₹60 lakh/year, variable cost ₹18 per pack, price to retailers ₹25, sales 10 lakh packs. A national giant sells similar snacks at ₹22 to retailers. Calculate your average cost and decide: chase scale or find a niche?`,
        hints: ['Average cost = fixed ÷ units + variable.', 'What volume would you need to match ₹22 profitably?'],
        model: `<p><b>Average cost now:</b> 60,00,000 ÷ 10,00,000 = ₹6 + ₹18 = <b>₹24</b> per pack. Margin at ₹25 = ₹1.</p><p><b>To profit at ₹22:</b> need 60,00,000 ÷ (22 − 18) = <b>15 lakh packs just to break even</b> — 50% growth while cutting price, against a rival with bigger scale.</p><p><b>Recommendation:</b> do not fight on price. Pick a niche where your regional knowledge raises willingness to pay — local flavours, healthier recipes, regional festivals — and price at ₹28–30. Pursue scope economies (new flavours through the same distributors) rather than raw scale.</p>`
      },
      takeaways: [
        'Average cost falls as fixed costs are spread over more units.',
        'Scale = more of the same; scope = more things sharing the same assets.',
        'Market structure sets the ceiling on pricing power.',
        'In commodity markets, win on cost; elsewhere, differentiate or find a niche.'
      ]
    },

    /* ---------------- Lesson 4 ---------------- */
    {
      id: 'economics-4',
      title: 'Game theory: thinking about competitors’ moves',
      level: 'Intermediate',
      minutes: 13,
      hook: `Your best price depends on what your rival does — and your rival is thinking the same thing about you.`,
      eli5: `Two ice-cream sellers on a beach each want more customers. Each moves closer to the middle to steal the other’s customers until both end up side by side in the centre. Nobody planned it, but each move made sense on its own. Game theory studies these "I think that you think" situations.`,
      blocks: [
        {
          type: 'framework', name: 'Elements of a game', by: 'John von Neumann & Oskar Morgenstern (1944); John Nash (1950)', when: 'Any decision where the outcome depends on others’ choices: pricing, bidding, entry, negotiation.',
          steps: [
            { label: 'Players', desc: 'Who is making choices? (You, rivals, suppliers, regulators.)' },
            { label: 'Strategies', desc: 'What can each do? (Cut price, hold price, enter, wait.)' },
            { label: 'Payoffs', desc: 'What does each get for every combination of choices?' },
            { label: 'Information & timing', desc: 'Do players move together or in sequence? What do they know?' },
            { label: 'Nash equilibrium', desc: 'A set of choices where no player can do better by changing only their own choice.' }
          ]
        },
        {
          type: 'matrix', name: 'Price-war prisoner’s dilemma (profits in ₹ cr: you, rival)', xLabel: 'Rival: Hold price → Cut price', yLabel: 'You: Hold price ↑ / Cut price ↓',
          cells: [
            { label: 'Both hold: 10, 10', desc: 'Best joint outcome — but each is tempted to cut.' },
            { label: 'You hold, rival cuts: 2, 14', desc: 'Rival steals share; you suffer.' },
            { label: 'You cut, rival holds: 14, 2', desc: 'You steal share — tempting.' },
            { label: 'Both cut: 5, 5', desc: 'Nash equilibrium of a one-shot game: both worse off than if both had held.' }
          ]
        },
        {
          type: 'text', title: 'Why price wars happen — and how firms avoid them',
          html: `<p>In a one-time game, cutting price is each firm’s "dominant" choice, so both cut and both lose. But business is a <b>repeated game</b>. Over many rounds, firms can sustain higher prices through <b>tit-for-tat</b>: match a rival’s cuts, reward their restraint. Robert Axelrod’s computer tournaments (1980s) found tit-for-tat performed very well.</p><p><b>Important:</b> explicit agreements to fix prices are illegal (cartels). Firms may only make independent decisions.</p>`
        },
        {
          type: 'compare', title: 'Strategic moves',
          headers: ['Move', 'What it is', 'Example'],
          rows: [
            ['Credible commitment', 'A costly, hard-to-reverse action that changes rivals’ expectations', 'Building big capacity before a rival enters'],
            ['Price-matching guarantee', 'Promise to match any lower price', 'Retailers’ "we will match any price" policies — reduces rivals’ incentive to cut'],
            ['First-mover advantage', 'Moving first to lock in customers or resources', 'Securing scarce spectrum or prime locations'],
            ['Signalling', 'Communicating intent through public actions', 'Announcing a product launch date to deter rivals']
          ]
        },
        {
          type: 'case', company: 'Coca-Cola vs Pepsi', year: '1970s–today', title: 'Fighting on ads, not price',
          situation: `Two giants dominate the cola market. A sustained price war would destroy profits for both.`,
          decision: `Over decades both have competed mostly through advertising, product variety, distribution and celebrity marketing rather than deep, permanent price cuts.`,
          outcome: `Both remained highly profitable brands for decades — a classic example of oligopoly rivalry channelled away from price.`,
          lesson: `In repeated games, competitors often learn that non-price competition preserves the profit pool.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Score your strategic options',
          note: 'List options (hold, cut, differentiate, bundle) and score them on profit, rival reaction risk and brand impact.'
        },
        {
          type: 'scenario', prompt: 'A new rival enters your city with prices 20% below yours. You have higher customer loyalty and better service. What do you do?',
          options: [
            { text: 'Immediately cut your prices by 25% to crush them.', feedback: 'You start a price war, damaging your profits and teaching customers to expect low prices.', good: false },
            { text: 'Hold your main prices; launch a targeted "fighter" offer for your most price-sensitive segment and emphasise service.', feedback: 'Smart. You protect margin with loyal customers and defend where you are most vulnerable.', good: true },
            { text: 'Call the rival to agree on prices.', feedback: 'Illegal collusion.', good: false }
          ]
        },
        {
          type: 'flip', title: 'Test yourself',
          cards: [
            { front: 'Nash equilibrium', back: 'No player can improve by changing only their own strategy.' },
            { front: 'Why do one-shot price games end badly?', back: 'Each firm’s dominant strategy is to cut, so both cut.' },
            { front: 'Tit-for-tat', back: 'Cooperate first, then copy the rival’s last move.' },
            { front: 'Credible commitment', back: 'A costly, visible action that makes your future behaviour believable.' }
          ]
        }
      ],
      terms: [
        { term: 'Game theory', def: 'The study of strategic decisions where outcomes depend on others’ choices.' },
        { term: 'Nash equilibrium', def: 'A stable outcome where no player gains by changing strategy alone.' },
        { term: 'Prisoner’s dilemma', def: 'A game where individual incentives lead to an outcome worse for everyone.' },
        { term: 'Dominant strategy', def: 'A choice that is best regardless of what others do.' },
        { term: 'Repeated game', def: 'The same game played many times, enabling reputation and retaliation.' },
        { term: 'Cartel', def: 'An illegal agreement among competitors to fix prices or split markets.' }
      ],
      quiz: [
        { q: 'In the price-war matrix, why do both firms end up cutting in a one-shot game?', options: ['Cutting is each firm’s dominant strategy', 'Regulators require it', 'Customers prefer high prices', 'Costs go up'], answer: 0, explain: 'Whatever the rival does, cutting pays more for you in a one-shot game.' },
        { q: 'Tit-for-tat works best in:', options: ['One-shot games', 'Repeated games', 'Monopolies', 'Auctions with one bidder'], answer: 1, explain: 'It relies on future rounds to reward and punish.' },
        { q: 'Which is illegal?', options: ['Price-matching guarantee', 'Advertising heavily', 'Agreeing with a rival to set prices', 'Building extra capacity'], answer: 2, explain: 'Price-fixing agreements are cartels.' },
        { q: 'A firm builds a giant plant before a rival can enter. This is:', options: ['A sunk-cost fallacy', 'Perfect competition', 'Elastic demand', 'A credible commitment'], answer: 3, explain: 'Costly, irreversible capacity signals it will fight for volume.' }
      ],
      challenge: {
        title: 'Respond to a rival discount',
        prompt: `You and one rival each sell premium paint in a region with roughly equal share. Each earns ₹30 cr profit a year. Your rival announces a 15% discount for 3 months. Your analysis: if you match, both earn ₹22 cr this year; if you don’t, you earn ₹20 cr and they earn ₹34 cr. Lay out the game and recommend a response.`,
        hints: ['Is this one-shot or repeated?', 'What signal do you want to send for next year?'],
        model: `<p><b>Game:</b> players = you and rival; strategies = match or hold. Payoffs this year: match → (22, 22); hold → (20, 34).</p><p><b>Short term:</b> matching gives you ₹22 cr vs ₹20 cr, and limits the rival’s gain.</p><p><b>Repeated game:</b> if you don’t respond, the rival learns discounting pays and may repeat it. A measured tit-for-tat response signals you will defend share, making future cuts less attractive.</p><p><b>Recommendation:</b> respond for the same 3-month window only, ideally with a targeted promotion (e.g. dealer incentives or a free primer) rather than an across-the-board price cut, and publicly frame it as time-bound. Return to full price when the rival does.</p>`
      },
      takeaways: [
        'Map players, strategies, payoffs and timing before reacting.',
        'One-shot logic leads to price wars; repeated-game logic sustains profits.',
        'Credible commitments and signals shape rivals’ choices.',
        'Never collude — compete independently.'
      ]
    },

    /* ---------------- Lesson 5 ---------------- */
    {
      id: 'economics-5',
      title: 'Macroeconomics for managers: GDP, inflation, rates and currencies',
      level: 'Advanced',
      minutes: 16,
      hook: `A central-bank announcement you never read can double your loan EMI, halve your customers’ spending and wipe out your export profit.`,
      eli5: `Think of the whole country as one giant family. GDP is the family’s total income. Inflation is when everything at the shop costs more each year. The central bank is like a strict parent who makes borrowing more expensive (higher interest rates) when the family is overspending, and cheaper when the family needs a push.`,
      blocks: [
        {
          type: 'compare', title: 'The big macro indicators',
          headers: ['Indicator', 'What it measures', 'Business impact'],
          rows: [
            ['GDP growth', 'Total value of goods and services produced, adjusted for inflation (real GDP)', 'Strong growth → rising demand, hiring'],
            ['Inflation (CPI)', 'Rate at which consumer prices rise', 'Higher input costs, pressure on wages and prices'],
            ['Policy interest rate', 'Rate set by the central bank (e.g. RBI repo rate, US Fed funds rate)', 'Cost of loans, valuations, consumer EMIs'],
            ['Unemployment', 'Share of labour force without jobs', 'Wage pressure, consumer confidence'],
            ['Exchange rate', 'Price of one currency in another', 'Export competitiveness, import costs'],
            ['PMI', 'Survey of purchasing managers; above 50 = expansion', 'Early signal of the business cycle']
          ]
        },
        {
          type: 'framework', name: 'How central banks steer the economy', by: 'Monetary policy transmission (standard macro)', when: 'Interpreting rate decisions.',
          steps: [
            { label: 'Target', desc: 'Most central banks target low, stable inflation (RBI: 4% CPI with a 2–6% band; US Fed: 2%).' },
            { label: 'Raise rates', desc: 'When inflation is too high: borrowing gets costlier, spending and investment slow, inflation cools.' },
            { label: 'Cut rates', desc: 'When growth is weak: cheaper loans, more spending, asset prices rise.' },
            { label: 'Transmission lag', desc: 'Effects show up over many months, so policy works with a delay.' },
            { label: 'Other tools', desc: 'Bond buying/selling (QE/QT), reserve requirements, forward guidance (signalling future moves).' }
          ]
        },
        {
          type: 'formula', name: 'Real vs nominal', expr: 'Real growth ≈ Nominal growth − Inflation',
          explain: 'Nominal numbers include price rises; real numbers strip them out. Always compare your growth to inflation.',
          example: 'Your revenue grew 9% while inflation was 6%. Real growth ≈ 3%. If you raised prices 8%, almost all your growth came from price, not more customers.'
        },
        {
          type: 'interactive', widget: 'compound', title: 'Inflation silently compounds',
          note: 'Set the rate to 6% for 12 years: prices roughly double. That is why a "flat" salary or price list is really a cut.'
        },
        {
          type: 'timeline', title: 'The business cycle',
          items: [
            { label: 'Expansion', desc: 'Demand grows, hiring rises, credit is easy. Invest in capacity carefully.' },
            { label: 'Peak', desc: 'Inflation pressures, rates rise, valuations stretched. Avoid over-leverage.' },
            { label: 'Contraction / recession', desc: 'Demand falls, layoffs. Protect cash; buy assets and talent cheaply if strong.' },
            { label: 'Trough', desc: 'Rates are cut, confidence bottoms. Position for recovery.' },
            { label: 'Recovery', desc: 'Demand returns. Firms that invested in the downturn often gain share.' }
          ]
        },
        {
          type: 'case', company: 'Global interest-rate shock', year: '2022–2023', title: 'When money stopped being free',
          situation: `After years of near-zero rates and a post-pandemic spending surge, inflation in the US, UK, Europe and India rose to multi-year highs in 2022.`,
          decision: `Central banks raised policy rates rapidly — the US Fed’s hiking cycle was among its fastest in decades; the RBI also raised the repo rate several times.`,
          outcome: `Startup funding fell sharply from its 2021 peak, high-growth tech valuations dropped, and many companies shifted from "growth at all costs" to profitability and efficiency.`,
          lesson: `Interest rates are the gravity of business valuations. When rates rise, future profits are worth less today and investors demand profitability sooner.`
        },
        {
          type: 'callout', kind: 'example', title: 'Exchange rates in practice',
          html: `<p>An Indian IT firm bills a US client $1 million. At ₹80/$ it earns ₹8 crore; at ₹85/$ it earns ₹8.5 crore — with zero extra work. An importer of electronics faces the opposite. Firms manage this with <b>hedging</b> (forward contracts), natural hedges (costs and revenues in the same currency) and pricing clauses.</p>`
        },
        {
          type: 'scenario', prompt: 'Inflation is high and the central bank signals more rate hikes. You planned a big debt-funded expansion next quarter. What do you do?',
          options: [
            { text: 'Proceed exactly as planned with floating-rate debt.', feedback: 'Your interest cost may rise just as demand slows — a double hit.', good: false },
            { text: 'Phase the expansion, lock in fixed-rate funding where possible, and stress-test demand for a slowdown.', feedback: 'Prudent: reduce rate risk and keep options open.', good: true },
            { text: 'Cancel all investment forever.', feedback: 'Overreaction. Downturns can be the best time to gain share if your balance sheet is strong.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'GDP', def: 'Gross domestic product: the total value of goods and services produced in a country in a period.' },
        { term: 'Inflation', def: 'The general rise in prices over time, reducing what money can buy.' },
        { term: 'Repo rate / policy rate', def: 'The rate at which a central bank lends to commercial banks; its main lever on borrowing costs.' },
        { term: 'Real vs nominal', def: 'Real figures adjust for inflation; nominal figures do not.' },
        { term: 'Recession', def: 'A significant, broad decline in economic activity lasting months.' },
        { term: 'Exchange rate', def: 'The price of one currency in terms of another.' },
        { term: 'Hedging', def: 'Using contracts (e.g. forwards) to reduce exposure to price or currency movements.' },
        { term: 'PMI', def: 'Purchasing Managers’ Index; a monthly survey where readings above 50 signal expansion.' }
      ],
      quiz: [
        { q: 'Revenue grew 10% while inflation was 7%. Real growth is approximately:', options: ['3%', '17%', '10%', '−3%'], answer: 0, explain: '10 − 7 ≈ 3%.' },
        { q: 'To fight high inflation, a central bank typically:', options: ['Cuts interest rates', 'Prints more money', 'Raises interest rates', 'Lowers taxes'], answer: 2, explain: 'Higher rates cool borrowing and spending.' },
        { q: 'The rupee weakens from ₹82 to ₹86 per dollar. Who benefits most?', options: ['An Indian importer of iPhones', 'An Indian student paying US fees', 'An Indian software exporter billing in dollars', 'An Indian tourist in New York'], answer: 2, explain: 'Each dollar of revenue converts to more rupees.' },
        { q: 'Why did startup valuations fall in 2022?', options: ['Rising interest rates made future profits worth less today', 'Startups stopped growing entirely', 'Stock exchanges closed', 'Inflation fell to zero'], answer: 0, explain: 'Higher discount rates reduce the present value of distant profits.' },
        { q: 'A PMI reading of 47 suggests:', options: ['Strong expansion', 'Contraction in the surveyed sector', 'Hyperinflation', 'Record exports'], answer: 1, explain: 'Below 50 = contraction.' }
      ],
      challenge: {
        title: 'Macro briefing for the board',
        prompt: `You are strategy head at an Indian consumer-durables firm (ACs, fridges). 40% of components are imported in dollars; 15% of sales are exports. News: inflation above target, RBI hiking, rupee weakening, PMI slipping toward 50. Write a 5-point briefing: risks, opportunities, and actions.`,
        hints: ['Think costs (imports), revenues (exports, domestic demand), financing (rates).', 'Separate quick actions from structural ones.'],
        model: `<ol><li><b>Costs:</b> weaker rupee raises imported component costs. <i>Action:</i> hedge 6–9 months of dollar payables; accelerate local sourcing (also supported by India’s PLI schemes).</li><li><b>Domestic demand:</b> higher rates raise EMIs for consumer-financed purchases. <i>Action:</i> partner with lenders on no-cost EMI schemes; push energy-efficient models (lower running cost resonates when budgets are tight).</li><li><b>Exports:</b> weaker rupee makes exports more competitive. <i>Action:</i> push export orders; use dollar revenue as a natural hedge against dollar costs.</li><li><b>Financing:</b> rising rates. <i>Action:</i> lock fixed-rate debt for capex; delay non-critical expansion.</li><li><b>Cycle:</b> PMI near 50 suggests slowing. <i>Action:</i> keep inventory lean, build scenario plans (base/downside), and keep cash to acquire talent or distressed assets if the downturn deepens.</li></ol>`
      },
      takeaways: [
        'Watch GDP, inflation, policy rates, exchange rates and PMI.',
        'Central banks raise rates to fight inflation and cut them to support growth.',
        'Always compare nominal growth with inflation.',
        'Currency moves can make or break margins — hedge or build natural hedges.',
        'Interest rates drive valuations and the funding climate.'
      ]
    },

    /* ---------------- Lesson 6 ---------------- */
    {
      id: 'economics-6',
      title: 'Behavioural economics, network effects and platforms',
      level: 'Advanced',
      minutes: 16,
      hook: `People are not calculators, and the most valuable companies of our era win because each new user makes the product better for everyone else.`,
      eli5: `If you are told a shirt was ₹2,000 and is now ₹999, it feels like a steal — even if it was never worth ₹2,000. That is your brain using shortcuts. And a phone is useless if nobody else has one, but very useful when all your friends do. That is a network effect.`,
      blocks: [
        {
          type: 'compare', title: 'Common biases businesses see every day',
          headers: ['Bias', 'What it is', 'Business example'],
          rows: [
            ['Anchoring', 'First number seen shapes judgement', '"Was ₹2,000, now ₹999" pricing'],
            ['Loss aversion', 'Losses hurt more than equal gains please (Kahneman & Tversky)', '"Don’t lose your free trial benefits" messages'],
            ['Default effect', 'People stick with the pre-set option', 'Auto-enrolment in pension plans raises participation'],
            ['Decoy effect', 'A third option makes another look better', 'Medium popcorn priced close to large'],
            ['Social proof', 'We follow what others do', '"10,000 people bought this today"'],
            ['Present bias', 'Overvaluing now vs later', 'Buy-now-pay-later; gym memberships unused']
          ]
        },
        {
          type: 'framework', name: 'Nudge design (EAST)', by: 'UK Behavioural Insights Team, 2014 (building on Thaler & Sunstein’s "Nudge", 2008)', when: 'Designing products, policies or messages that change behaviour.',
          steps: [
            { label: 'Easy', desc: 'Remove friction: defaults, fewer steps, pre-filled forms.' },
            { label: 'Attractive', desc: 'Draw attention; make the reward salient and personal.' },
            { label: 'Social', desc: 'Show what peers do; use commitments made to others.' },
            { label: 'Timely', desc: 'Prompt people when they are most receptive (e.g. payday, onboarding).' },
            { label: 'Ethics check', desc: 'Would users thank you if they knew? If not, it is a "dark pattern" — avoid it.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Nudges vs dark patterns',
          html: `<p>Hard-to-cancel subscriptions, hidden fees and fake countdown timers exploit biases. Regulators have been cracking down: the US FTC has taken action on deceptive "click to cancel" practices, the EU’s Digital Services Act addresses dark patterns, and India’s Department of Consumer Affairs issued dark-pattern guidelines in 2023. Short-term gains can become fines and lost trust.</p>`
        },
        {
          type: 'formula', name: 'Metcalfe’s law (a rough guide)', expr: 'Possible connections = n × (n − 1) ÷ 2',
          explain: 'The number of possible links in a network grows much faster than the number of users. Real value grows more slowly than this formula, but the direction is right.',
          example: '10 users → 45 possible connections. 100 users → 4,950. 10× the users, ~110× the connections.'
        },
        {
          type: 'compare', title: 'Types of network effects',
          headers: ['Type', 'How it works', 'Example'],
          rows: [
            ['Direct', 'More users → more value to each user', 'WhatsApp, telephones'],
            ['Indirect / two-sided', 'More users on one side attract the other side', 'Uber riders and drivers; app stores'],
            ['Data', 'More usage → more data → better product', 'Google Search, recommendation engines'],
            ['Local', 'Effects work within a city or group', 'Food delivery, ride-hailing']
          ]
        },
        {
          type: 'case', company: 'Uber', year: '2009–today', title: 'Two-sided liquidity and the chicken-and-egg problem',
          situation: `A ride-hailing app is worthless to riders without drivers, and worthless to drivers without riders.`,
          decision: `Uber launched city by city, subsidising both sides with driver guarantees and rider promotions to reach "liquidity" — short wait times — then used surge pricing to balance supply and demand.`,
          outcome: `Uber became a global leader, but because network effects in ride-hailing are mostly local and drivers multi-home (use several apps), it faced intense competition and years of heavy losses before reaching sustained profitability.`,
          lesson: `Network effects are powerful but differ in strength. Local networks and easy multi-homing weaken winner-take-all dynamics.`
        },
        {
          type: 'interactive', widget: 'viral-loop', title: 'See network-driven growth',
          note: 'Set the K-factor below 1 and then above 1. Above 1 each user brings in more than one new user and growth compounds — but real-world K rarely stays above 1 for long.'
        },
        {
          type: 'scenario', prompt: 'You are launching a B2B marketplace connecting restaurants with local farmers. How do you solve the chicken-and-egg problem?',
          options: [
            { text: 'Launch nationally on day one with heavy ads.', feedback: 'Spreads liquidity too thin; both sides see empty listings.', good: false },
            { text: 'Start in one city, sign up enough supply first (farmers) and offer single-player value (e.g. free order-management tools) so the first restaurants find it useful immediately.', feedback: 'Excellent: constrain the market, seed one side, and give value before the network exists.', good: true },
            { text: 'Wait until you have 10,000 users on both sides before launching.', feedback: 'Impossible without launching.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Behavioural economics', def: 'The study of how real people make decisions, including predictable biases.' },
        { term: 'Nudge', def: 'A change in how choices are presented that steers behaviour without removing options.' },
        { term: 'Loss aversion', def: 'The tendency to feel losses more strongly than equal gains.' },
        { term: 'Dark pattern', def: 'A design that tricks users into actions against their interest.' },
        { term: 'Network effect', def: 'When a product becomes more valuable as more people use it.' },
        { term: 'Multi-homing', def: 'When users or suppliers use several competing platforms at once.' },
        { term: 'Liquidity (marketplace)', def: 'The likelihood that a buyer or seller finds a match quickly.' }
      ],
      quiz: [
        { q: 'Auto-enrolling employees in a pension plan (with opt-out) uses which effect?', options: ['Anchoring', 'Decoy effect', 'Default effect', 'Network effect'], answer: 2, explain: 'People tend to stay with the default.' },
        { q: 'A network grows from 20 to 40 users. Possible connections go from 190 to:', options: ['380', '400', '780', '1,600'], answer: 2, explain: '40 × 39 ÷ 2 = 780.' },
        { q: 'Why are ride-hailing network effects weaker than they first appear?', options: ['They are global', 'Drivers and riders multi-home and effects are local', 'There are no network effects at all', 'Regulators ban surge pricing'], answer: 1, explain: 'Local networks and multi-homing reduce lock-in.' },
        { q: 'Which is a dark pattern?', options: ['A clear one-click cancel button', 'Showing total price upfront', 'Making cancellation require a phone call during office hours only', 'Offering a free trial with reminders before billing'], answer: 2, explain: 'Deliberate friction to prevent cancellation exploits users.' },
        { q: 'A cinema prices small popcorn ₹200, medium ₹380, large ₹400. The medium is mainly a:', options: ['Decoy', 'Sunk cost', 'Complement', 'Default'], answer: 0, explain: 'It makes the large look like great value.' }
      ],
      challenge: {
        title: 'Design an ethical nudge plan',
        prompt: `A personal-finance app has 2 lakh users but only 8% set up an automatic monthly SIP (investment). Using behavioural economics, design 4 nudges to raise SIP adoption to 15% without dark patterns. Add how you will measure each.`,
        hints: ['Use EAST: Easy, Attractive, Social, Timely.', 'Plan A/B tests.'],
        model: `<ol><li><b>Easy — smart default:</b> during onboarding, pre-select a ₹500/month SIP with a clear "skip" option. Measure SIP setup rate vs control.</li><li><b>Timely — payday prompt:</b> send a reminder 1 day after the user’s typical salary credit. Measure conversion within 48 hours.</li><li><b>Attractive — goal framing:</b> show "₹500/month could grow to about ₹X in 10 years" with a simple compound chart (assumed return clearly labelled). Measure click-through to SIP.</li><li><b>Social — peer norm:</b> "Most users your age who started investing chose a monthly SIP" (only if true). Measure lift.</li></ol><p><b>Ethics guardrails:</b> one-tap pause/cancel, no fake urgency, plain-language risk disclosure. <b>Target:</b> combined lift from 8% to 15% across tests over one quarter, tracked by cohort with retention at 6 months.</p>`
      },
      takeaways: [
        'People use predictable mental shortcuts — design for real humans.',
        'Ethical nudges remove friction; dark patterns exploit it and invite regulation.',
        'Network effects make products more valuable as they grow, but vary in strength.',
        'Marketplaces must solve chicken-and-egg: start small, seed one side, add single-player value.'
      ]
    }
  ]
});
