/* MBA Studio — Marketing Management series, Part III: Brands, Positioning & Competition */
MBA.addTrack({
  id: 'mm-brands',
  stage: 5,
  order: 31,
  title: 'Marketing Management III: Brands, Positioning & Competition',
  icon: '🏷️',
  color: '#e11d48',
  series: 'Marketing Management',
  part: 'Part III · Building strong brands',
  tagline: 'Build a brand people choose, defend it and keep it alive',
  summary: `Go beyond logos and slogans. You will learn what brand equity really is and how to build, measure and refresh it; how to design a brand architecture and decide when to stretch a brand; how to craft a sharp positioning with points of parity and difference; how leaders, challengers, followers and nichers compete; and how strategy changes across the product life cycle and in a downturn.`,
  outcomes: [
    'Explain brand equity and diagnose a brand with the resonance pyramid and equity models',
    'Choose brand elements, borrow associations and run a brand audit and tracking system',
    'Design a brand architecture and portfolio, and judge a brand extension with numbers',
    'Write a positioning with a competitive frame, POPs, PODs, a mantra and a bull’s-eye',
    'Pick the right competitive strategy for a leader, challenger, follower or nicher',
    'Adapt marketing to each life-cycle stage and protect the brand in a recession'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'mm-brands-1',
      title: 'Brand equity: why a name can be worth more than the factory',
      level: 'Beginner',
      minutes: 14,
      hook: `Two identical bottles, one with a famous label: shoppers pay more, forgive more and come back more for the labelled one — that gap is brand equity, and it sits on the balance sheet of the customer’s mind.`,
      eli5: `Imagine two lemonade stands with exactly the same lemonade. One belongs to a kid everyone knows makes it fresh every morning and always gives a fair cup; the other is a stranger. Most people walk to the kid they know, even if it costs a little more. The trust and good feeling attached to that kid’s name is the brand. Brand equity is simply how much extra people do — pay, choose, recommend, forgive — because of the name.`,
      blocks: [
        {
          type: 'text', title: 'A brand is a promise stored in memory',
          html: `<p>A <b>brand</b> is a name, sign, symbol or design — or a mix — that identifies a seller and sets it apart. But the logo is only the trigger. The real brand is the network of <b>associations</b> it switches on in a customer’s head: quality, feelings, people, places, past experiences.</p><p>You met the basics of how brands grow in <a href="#/lesson/marketing-3">How brands grow</a>. Here we go deeper into how managers <i>measure and engineer</i> that memory.</p>`
        },
        {
          type: 'map', title: 'What a brand does — for buyers and for firms', center: 'A strong brand',
          branches: [
            { label: 'Shortcut for buyers', desc: 'Cuts search time: you do not re-evaluate every option on every shopping trip.', children: ['Faster choice', 'Habit'] },
            { label: 'Risk reducer', desc: 'Signals consistent quality, lowering functional, financial, social and safety risk.', children: ['Functional', 'Social', 'Financial'] },
            { label: 'Self-expression', desc: 'Lets people say something about who they are or want to be.', children: ['Identity', 'Belonging'] },
            { label: 'Legal property', desc: 'Trademarks, designs and trade dress can be protected and licensed for decades.', children: ['Trademark', 'Licensing'] },
            { label: 'Price premium', desc: 'Customers accept higher prices and are less price-sensitive to rivals’ cuts.', children: ['Margin', 'Inelastic demand'] },
            { label: 'Predictable demand', desc: 'Loyal buyers make sales forecastable and give a cushion in a crisis.', children: ['Loyalty', 'Forgiveness'] },
            { label: 'Growth platform', desc: 'A trusted name lowers the cost of launching new products and entering new channels.', children: ['Extensions', 'Retailer clout'] }
          ]
        },
        {
          type: 'text', title: 'Customer-based brand equity, and the scope of branding',
          html: `<p><b>Brand equity</b> is the <span class="hl">difference in how customers respond to the marketing of a product because they know the brand</span>, compared with the same offer unbranded. Positive equity shows up as willingness to pay more, trial of extensions, tolerance of a mistake, and higher response to ads.</p><p>Almost anything can be branded: physical goods, services, retailers, people (athletes, CEOs), places (cities, countries), organisations, sports teams and ideas. The test is always the same — does the name create <b>meaningful differences</b> in the customer’s mind?</p>`
        },
        {
          type: 'compare', title: 'Three popular ways to model brand equity', headers: ['', 'Brand asset valuation pillars', 'Brand dynamics ladder', 'Brand resonance pyramid'],
          rows: [
            ['Core idea', 'Strong brands score on four pillars measured in large consumer surveys', 'Consumers move up a ladder of attachment to a brand', 'Equity is built in a sequence of six blocks, from awareness to deep loyalty'],
            ['Building blocks', 'Energised differentiation, relevance, esteem, knowledge', 'Presence → relevance → performance → advantage → bonding', 'Salience → performance and imagery → judgements and feelings → resonance'],
            ['Key insight', 'Differentiation and relevance predict future health; esteem and knowledge show current stature. Knowledge running ahead of differentiation is a warning sign.', 'Most customers stall at the lower rungs; bonded customers drive a disproportionate share of value', 'Both a “head” route (performance, judgements) and a “heart” route (imagery, feelings) lead to resonance'],
            ['Best for', 'Comparing many brands across categories', 'Tracking conversion through a loyalty funnel', 'Diagnosing exactly which block is weak and planning fixes']
          ]
        },
        {
          type: 'pyramid', title: 'The brand resonance pyramid (build from the bottom)',
          levels: [
            { label: 'Resonance', note: 'Relationship: “What about you and me?”', desc: 'Behavioural loyalty, attitudinal attachment, sense of community and active engagement — customers who talk about, defend and co-create the brand.' },
            { label: 'Judgements  |  Feelings', note: 'Response: “What about you?”', desc: 'Head: quality, credibility, consideration, superiority. Heart: warmth, fun, excitement, security, social approval, self-respect.' },
            { label: 'Performance  |  Imagery', note: 'Meaning: “What are you?”', desc: 'Performance: reliability, durability, service, style, price. Imagery: user profiles, usage situations, personality, history and heritage.' },
            { label: 'Salience', note: 'Identity: “Who are you?”', desc: 'Breadth and depth of awareness — is the brand recalled easily, and in enough buying and usage situations?' }
          ]
        },
        {
          type: 'pyramid', invert: true, title: 'The brand dynamics ladder: where customers drop off',
          levels: [
            { label: 'Presence', desc: 'I know of it and I know what it offers.' },
            { label: 'Relevance', desc: 'It offers something I need, at a price I would consider.' },
            { label: 'Performance', desc: 'It delivers on the basics — it works.' },
            { label: 'Advantage', desc: 'It is better than the alternatives on something I care about.' },
            { label: 'Bonding', desc: 'Nothing else beats it — I am loyal and would recommend it.' }
          ]
        },
        {
          type: 'case', company: 'Apple', year: '1997–today', title: 'Equity that turns hardware into a premium relationship',
          situation: `When Steve Jobs returned in 1997, Apple was losing money, had a confusing product line and a small, loyal but shrinking base. Its brand still carried strong imagery — creative, rebellious, design-led — but performance and relevance had slipped.`,
          decision: `Apple cut the line to a few products, ran the “Think different” campaign to restate who the brand was for, and then delivered on performance with the iMac, iPod, iPhone and a tightly integrated ecosystem. It opened its own retail stores from 2001 to control the experience end to end.`,
          outcome: `Apple became one of the most valuable brands in the world, topping a leading consultancy’s global brand ranking every year since 2013. It sustains price premiums in categories where rivals compete heavily on price, and its owners show unusually high repurchase loyalty.`,
          lesson: `Imagery alone did not save Apple; it reached resonance when performance and judgements caught up with the feelings. Equity is built on both sides of the pyramid.`
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: “Brand equity is just awareness”',
          html: `<p>Awareness is only the <b>foundation block</b>. Plenty of famous brands have high awareness and weak equity — everyone knows them, few prefer them. Watch the gap between <i>knowledge</i> and <i>differentiation</i>: when people know you well but see nothing special, decline usually follows.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your juice brand has 90% prompted awareness, but tracking shows only 20% of aware shoppers say it is “better than other brands” and very few feel any emotional connection. Where should next year’s budget go first?`,
          options: [
            { text: 'Double the awareness advertising — awareness drives everything.', feedback: 'Salience is already strong. More of the same buys little; the weak blocks are higher up the pyramid.', good: false },
            { text: 'Diagnose the middle blocks: fix a real performance point of difference and build imagery and feelings around it.', feedback: 'Right. The pyramid shows the brand is stuck between salience and judgement. Give people a reason to prefer it, then attach feelings to that reason.', good: true },
            { text: 'Launch a loyalty app to build resonance immediately.', feedback: 'Resonance cannot be skipped to. A loyalty scheme on a brand nobody prefers mostly rewards people who would have bought anyway.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Brand equity', def: 'The extra value customers create for a product because of what they know and feel about its brand, compared with the same offer unbranded.' },
        { term: 'Brand associations', def: 'The thoughts, images, feelings and experiences linked to a brand in memory. Strong, favourable and unique associations create equity.' },
        { term: 'Brand salience', def: 'How easily and often the brand comes to mind in buying and usage situations — the depth and breadth of awareness.' },
        { term: 'Brand resonance', def: 'The top of the pyramid: loyalty, attachment, community and active engagement with the brand.' },
        { term: 'Head and heart routes', def: 'The two routes up the pyramid: rational (performance → judgements) and emotional (imagery → feelings).' },
        { term: 'Energised differentiation', def: 'In brand asset valuation thinking, the sense that a brand is distinctive and has momentum — a leading indicator of future value.' },
        { term: 'Price premium', def: 'The extra a customer will pay for a branded product over a comparable alternative; one of the clearest signals of equity.' }
      ],
      quiz: [
        { q: 'Which block sits at the base of the brand resonance pyramid?', options: ['Resonance', 'Feelings', 'Salience', 'Imagery'], answer: 2, explain: 'Salience (awareness and recall in the right situations) is the foundation; everything else is built on it.' },
        { q: 'A brand is widely known, but surveys show low differentiation and falling relevance. What does an equity model suggest?', options: ['Future decline is likely unless it rebuilds a reason to prefer it', 'The brand is healthy because knowledge is high', 'It should immediately raise prices', 'It should stop advertising'], answer: 0, explain: 'Knowledge and esteem reflect past stature; differentiation and relevance predict the future. High knowledge with low differentiation is a classic early warning.' },
        { q: 'An unbranded bottle of shampoo sells at $4. The identical branded version sells the same volume at $5.20. What is the price premium attributable to the brand?', options: ['$0.20 (5%)', '$1.20 (30%)', '$1.20 (23%)', '$5.20 (100%)'], answer: 1, explain: '$5.20 − $4.00 = $1.20, which is $1.20 ÷ $4.00 = 30% over the unbranded price.' },
        { q: 'Which of these is part of brand IMAGERY rather than performance?', options: ['Durability', 'Service speed', 'Price level', 'The kind of person who typically uses it'], answer: 3, explain: 'User profiles, personality, heritage and usage situations are imagery; durability, service and price are performance.' },
        { q: 'In the brand dynamics ladder, which rung means “it is better than the alternatives on something I care about”?', options: ['Presence', 'Relevance', 'Performance', 'Advantage'], answer: 3, explain: 'Advantage is the step where the brand beats alternatives on a valued dimension; bonding comes after.' }
      ],
      challenge: {
        title: 'Diagnose a tired snack brand',
        prompt: `You manage “Crunchwell” (illustrative), a 40-year-old crisp brand. Data: prompted awareness 92%; “brand I would consider” 55%; “has the best taste” 18% (the leader scores 35%); “a brand for people like me” 12% among 18–30s; repeat-purchase rate 30% (category average 38%). Price is 10% below the leader and margin is thin. Use the resonance pyramid to locate the weak blocks, and propose three priorities with how you would measure success.`,
        hints: ['Walk up the pyramid block by block and mark each as strong, medium or weak using the numbers.', 'A below-leader price with weak repeat suggests the issue is not price — ask what would give people a reason to choose and return.'],
        model: `<p><b>1. Diagnosis by block</b></p><ul><li><b>Salience — strong.</b> 92% awareness; the brand is known.</li><li><b>Performance — weak.</b> Only 18% rate its taste best versus 35% for the leader, and repeat (30%) trails the category (38%). Product experience is not winning.</li><li><b>Imagery — weak, especially with young adults.</b> 12% of 18–30s see it as “for people like me”: the brand has aged with its buyers.</li><li><b>Judgements — medium.</b> 55% consideration means people do not reject it, but they do not prefer it.</li><li><b>Resonance — weak.</b> Low repeat despite a 10% price discount shows little loyalty.</li></ul><p><b>2. Priorities</b></p><ol><li><b>Fix performance first:</b> blind-test recipes against the leader and relaunch the core flavour only if it wins or ties. Measure: blind preference ≥ 50%, “best taste” score up from 18% to 25%+ in 12 months.</li><li><b>Refresh imagery without abandoning heritage:</b> new usage occasions (sharing at gaming nights, lunchboxes) and creators aged 18–30. Measure: “for people like me” among 18–30s from 12% to 20%.</li><li><b>Earn back the margin:</b> once preference improves, close half the price gap (raise ~5%) rather than funding growth with discounts. Measure: repeat rate to 36%+ with price gap at 5%.</li></ol><p><b>Recommendation:</b> do not spend on awareness. Spend on the product and on imagery, in that order, and track the pyramid quarterly so the board sees which block is moving.</p>`
      },
      takeaways: [
        'Brand equity is the extra response a brand earns compared with the same offer unbranded.',
        'The resonance pyramid builds from salience, through meaning and response, to relationship — you cannot skip blocks.',
        'Awareness without differentiation is a warning sign, not a strength.',
        'Strong brands win on both the head route (performance) and the heart route (imagery and feelings).'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'mm-brands-2',
      title: 'Building, measuring and managing brand equity over time',
      level: 'Intermediate',
      minutes: 16,
      hook: `Brands are not born strong; they are built from deliberate choices — a name, a colour, a partner, a thousand customer touchpoints — and they decay quietly unless someone is measuring.`,
      eli5: `Think of a brand like a reputation at school. You build it with what you are called and how you look (your elements), what you actually do every day (your activities), and who you hang out with (borrowed associations). Teachers keep report cards (audits and tracking) so problems are spotted early. If your reputation slips, you need a plan to win people back (revitalisation).`,
      blocks: [
        {
          type: 'text', title: 'Three levers for building equity',
          html: `<p>Managers build equity with three levers:</p><ol><li><b>Brand elements</b> — names, logos, symbols, characters, slogans, jingles, packages, URLs.</li><li><b>Marketing activities</b> — the product, price, channels and communications, designed as one holistic programme.</li><li><b>Secondary associations</b> — meaning borrowed from other entities: companies, places, people, events, causes.</li></ol>`
        },
        {
          type: 'map', title: 'Six criteria for choosing brand elements', center: 'Brand elements',
          branches: [
            { label: 'Memorable', desc: 'Easy to notice, say and recall at the moment of purchase.', children: ['Short', 'Distinctive'] },
            { label: 'Meaningful', desc: 'Suggests the category or a key benefit, or is at least credible.', children: ['Descriptive', 'Suggestive'] },
            { label: 'Likable', desc: 'Aesthetically or emotionally appealing in its own right.', children: ['Fun', 'Rich imagery'] },
            { label: 'Transferable', desc: 'Works across categories and across languages and cultures.', children: ['Extensions', 'Global'] },
            { label: 'Adaptable', desc: 'Can be refreshed over time without losing recognition.', children: ['Logo updates', 'Mascot redesign'] },
            { label: 'Protectable', desc: 'Legally registrable and hard for rivals to copy; not so generic it loses protection.', children: ['Trademark', 'Avoid genericide'] }
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'Offensive vs defensive criteria',
          html: `<p>The first three criteria (memorable, meaningful, likable) <b>build</b> equity; the last three (transferable, adaptable, protectable) <b>defend</b> it. A very descriptive name is meaningful but often hard to protect and hard to extend — there is a trade-off, so choose consciously.</p>`
        },
        {
          type: 'compare', title: 'Borrowing equity: sources of secondary associations', headers: ['Source', 'How meaning transfers', 'Main risk'],
          rows: [
            ['Co-branding / ingredient brands', 'Two brands combine; each lends credibility (e.g. a component brand inside a device)', 'Partner’s scandal or quality slip hurts you; loss of control'],
            ['Country or region of origin', 'Heritage signals quality (Swiss watches, Italian fashion, Darjeeling tea)', 'Stereotypes cut both ways; moving production can break the link'],
            ['Endorsers and creators', 'Admiration for the person transfers to the brand', 'Overshadowing the brand; personal controversies'],
            ['Events, sports and causes', 'Brand absorbs the energy or values of the event or cause', 'Seen as opportunistic if fit is weak'],
            ['Channels and retailers', 'Being stocked by a prestigious store implies status', 'Discount channels can drag premium imagery down'],
            ['Licensing', 'Characters or names lend instant recognition', 'Over-licensing dilutes and cheapens the brand']
          ]
        },
        {
          type: 'flow', title: 'The brand-building and measurement process',
          steps: [
            { label: 'Define the desired brand knowledge', desc: 'Which associations must customers hold? Write them as a short list tied to the positioning.' },
            { label: 'Choose and design brand elements', desc: 'Score options on the six criteria; run legal and linguistic checks in every target market.' },
            { label: 'Design holistic marketing', desc: 'Make product, price, channel and communications reinforce the same associations; include internal branding so staff live the promise.' },
            { label: 'Borrow associations where they fit', desc: 'Partners, origin, endorsers, events — only where they strengthen the target associations.' },
            { label: 'Brand audit: does reality match intent?', kind: 'decision', desc: 'A full inventory (what the firm does) and exploratory research (what customers actually think).', branches: [ { label: 'Yes', to: 'Track and reinforce' }, { label: 'No', to: 'Reposition or revitalise' } ] },
            { label: 'Track and value the brand', desc: 'Regular tracking studies on awareness, image and preference; periodic financial brand valuation.' }
          ]
        },
        {
          type: 'formula', name: 'Brand valuation (earnings-split logic, simplified)',
          expr: 'Brand value = Σ [ Economic profit × Role of brand % ] ÷ (1 + brand discount rate)^t',
          explain: `<b>Economic profit</b> is operating profit after tax minus a charge for the capital employed. <b>Role of brand</b> is the share of the purchase decision driven by the brand rather than price, convenience or features. The <b>brand discount rate</b> is lower for strong, stable brands and higher for weak ones.`,
          example: `A brand earns economic profit of $200m a year, steady. Research says the brand drives 40% of choice, so branded earnings are $80m. With a 10% brand discount rate and treating it as a perpetuity: $80m ÷ 0.10 = <b>$800m</b>. If the brand weakens and the discount rate rises to 12%: $80m ÷ 0.12 ≈ $667m — a $133m loss of value without any change in this year’s profit.`
        },
        {
          type: 'cycle', title: 'Managing brand equity over time', center: 'Consistent meaning',
          steps: [
            { label: 'Audit', desc: 'Map every touchpoint and research what customers think, every few years or before big moves.' },
            { label: 'Track', desc: 'Measure awareness, image, preference and loyalty quarterly to spot drift early.' },
            { label: 'Reinforce', desc: 'Keep the core meaning consistent while innovating the product and keeping marketing fresh.' },
            { label: 'Detect decline', desc: 'Falling relevance, ageing users or weak differentiation trigger action.' },
            { label: 'Revitalise', desc: 'Either expand depth/breadth of awareness (new uses, occasions) or refresh the meaning (new imagery, new segments).' }
          ]
        },
        {
          type: 'case', company: 'Harley-Davidson', year: '1981–2000s', title: 'Revitalising a brand through its community',
          situation: `By the early 1980s Harley-Davidson was struggling: quality had slipped under conglomerate ownership and Japanese makers were winning the heavyweight motorcycle market. A management group bought the company back from its owner, AMF, in 1981.`,
          decision: `Alongside quality improvements, Harley founded the Harley Owners Group (HOG) in 1983 — company-sponsored chapters, rallies and rides that connected riders with each other and with employees and dealers.`,
          outcome: `HOG grew into one of the best-known brand communities in the world, with members across many countries. It helped Harley recover and become a symbol of freedom and rebellion. Later, the brand faced a different problem — an ageing core rider base — showing that even resonance must be renewed for new generations.`,
          lesson: `A brand community turns customers into advocates and co-owners of meaning. But revitalisation is never finished: the community must keep recruiting younger members.`
        },
        {
          type: 'case', company: 'Amul', year: '1966–today', title: 'Reinforcement through consistent, topical creativity',
          situation: `Amul, the brand of India’s Gujarat dairy co-operatives, needed its butter to stay top-of-mind in a market where it had many local and later global rivals.`,
          decision: `From 1966 the “Amul girl” mascot, created with an advertising agency, has appeared in hoardings and later social posts commenting wittily on current events, with the line “Utterly Butterly Delicious”.`,
          outcome: `The campaign became one of the longest-running in the world. The mascot is instantly recognisable; the execution changes weekly but the brand elements stay constant, so the brand feels both timeless and current.`,
          lesson: `Reinforcement means changing the execution while protecting the core elements. Consistency of meaning is not the same as repeating the same ad.`
        },
        {
          type: 'checklist', title: 'Running a brand audit',
          items: [
            'List every brand element and check it is used consistently in every market and channel',
            'Inventory all products, prices, channels and communications carrying the brand',
            'Run qualitative research: free associations, projective techniques, brand personality',
            'Measure the resonance blocks quantitatively against the top two rivals',
            'Check internal branding: can frontline staff state the brand promise?',
            'Compare intended associations with actual ones and list the gaps',
            'Decide: reinforce, reposition, or revitalise — with named owners and metrics'
          ]
        }
      ],
      terms: [
        { term: 'Brand elements', def: 'The trademarkable devices that identify a brand: name, logo, symbol, character, slogan, jingle, packaging.' },
        { term: 'Secondary associations', def: 'Meanings a brand borrows from other entities such as partner brands, countries, endorsers or events.' },
        { term: 'Internal branding', def: 'Activities that help employees understand and deliver the brand promise, so the experience matches the advertising.' },
        { term: 'Brand community', def: 'A group of customers bonded by their shared attachment to a brand, often meeting online or in person.' },
        { term: 'Brand audit', def: 'A comprehensive check of a brand’s health: what the firm does with it and what customers actually think of it.' },
        { term: 'Brand tracking', def: 'Regular, repeated surveys that measure awareness, image and preference over time to spot changes early.' },
        { term: 'Brand revitalisation', def: 'Actions to restore a fading brand, by widening its use or refreshing its meaning.' },
        { term: 'Genericide', def: 'When a brand name becomes the generic word for the category and loses legal protection.' }
      ],
      quiz: [
        { q: 'Which pair of brand-element criteria is mainly DEFENSIVE?', options: ['Memorable and likable', 'Meaningful and memorable', 'Adaptable and protectable', 'Likable and meaningful'], answer: 2, explain: 'Transferable, adaptable and protectable defend and leverage equity; memorable, meaningful and likable build it.' },
        { q: 'A premium skincare brand signs a deal to be sold in a deep-discount chain. Which risk from secondary associations is most relevant?', options: ['Country-of-origin stereotypes', 'Channel imagery dragging premium perceptions down', 'Genericide', 'Overshadowing by an endorser'], answer: 1, explain: 'Channels lend meaning; a discount channel can cheapen a premium brand’s image.' },
        { q: 'Economic profit is $50m a year, the role of brand is 30% and the brand discount rate is 8%. Treating branded earnings as a perpetuity, what is the brand value?', options: ['$187.5m', '$15m', '$625m', '$120m'], answer: 0, explain: 'Branded earnings = $50m × 30% = $15m. Value = $15m ÷ 0.08 = $187.5m.' },
        { q: 'What is the main difference between a brand audit and brand tracking?', options: ['Audits are quarterly; tracking is once a decade', 'An audit is a periodic, comprehensive health check; tracking is routine repeated measurement', 'Tracking is only financial', 'There is no difference'], answer: 1, explain: 'An audit is a deep, occasional diagnosis; tracking is a regular pulse that spots change.' },
        { q: 'Amul changes its hoarding message almost every week. Why is this still consistent brand management?', options: ['Because the prices never change', 'Because it never uses social media', 'Because the core elements and meaning stay fixed while the execution stays fresh', 'Because consistency does not matter'], answer: 2, explain: 'Reinforcement is about constant meaning and elements, not identical ads.' }
      ],
      challenge: {
        title: 'Choose a name and a partner for a new oat drink',
        prompt: `A start-up (illustrative) is launching an oat drink in the UK and India. Three name options: “OatMilk Daily” (descriptive), “Oatla” (coined, playful), “Haverly” (abstract, sounds premium). It can also co-brand with either a famous coffee-shop chain (barista edition) or a popular fitness creator. Score the names on the six criteria, pick one partner, and set up three tracking metrics for year one.`,
        hints: ['Score each name 1–5 on all six criteria, and think about trademark strength for descriptive names.', 'For the partner, ask which association the brand most needs first — credible performance (it foams in coffee) or lifestyle imagery.'],
        model: `<p><b>1. Name scoring (1–5)</b></p><ul><li><b>OatMilk Daily:</b> memorable 3, meaningful 5, likable 2, transferable 2, adaptable 3, protectable 1 → <b>16</b>. Too descriptive to trademark and blocks extensions beyond milk.</li><li><b>Oatla:</b> memorable 5, meaningful 4 (suggests oats), likable 4, transferable 4 (easy to say in English and Hindi), adaptable 4, protectable 4 → <b>25</b>. Check it does not infringe existing oat brands with similar sounds.</li><li><b>Haverly:</b> memorable 3, meaningful 1, likable 3, transferable 3, adaptable 4, protectable 5 → <b>19</b>. Needs heavy spending to give it meaning.</li></ul><p><b>Choice: Oatla</b>, subject to a legal clearance search in both countries.</p><p><b>2. Partner:</b> the coffee chain. The category’s first purchase barrier is performance (“does it froth, does it curdle?”). A barista edition sold in a respected chain borrows credibility for the performance block. The creator can follow in year two to build imagery once performance is proven.</p><p><b>3. Year-one tracking:</b> unaided awareness among oat-drink buyers (target 15%), “works well in coffee” agreement among aware buyers (target 50%), and repeat-purchase rate at 90 days (target 35%).</p>`
      },
      takeaways: [
        'Equity is built with three levers: brand elements, holistic marketing and borrowed associations.',
        'Choose elements that both build (memorable, meaningful, likable) and defend (transferable, adaptable, protectable).',
        'Measure with periodic audits, regular tracking and financial valuation.',
        'Reinforce by keeping meaning constant while refreshing execution; revitalise before decline becomes irreversible.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'mm-brands-3',
      title: 'Branding strategy: architecture, portfolios and extensions',
      level: 'Intermediate',
      minutes: 16,
      hook: `Every new product forces a choice that will echo for decades: give it a new name, or lend it an old one — and get it wrong and you can damage the brand you meant to borrow from.`,
      eli5: `A family with many children has to decide how to name them. Some families give every child a completely different name (individual brands). Some use one surname everyone recognises (family or corporate brand). Some do both: “Tata Steel”, “Tata Motors”. When a famous older child vouches for a new sibling, people trust the newcomer faster — but if the newcomer misbehaves, the whole family’s reputation suffers.`,
      blocks: [
        {
          type: 'compare', title: 'Four branding strategies', headers: ['Strategy', 'How it works', 'Example', 'Strength', 'Weakness'],
          rows: [
            ['Individual names (house of brands)', 'Each product has its own brand; the company stays in the background', 'Procter & Gamble: Tide, Pampers, Gillette', 'Failures do not spread; each brand can target a different segment', 'Costly: every brand needs its own investment'],
            ['Family / umbrella names', 'Several products share a family brand within a company', 'Dove across soap, shampoo and deodorant', 'Economies in communication; easier launches', 'One scandal or failure hits the whole family'],
            ['Corporate name + individual name (sub-brands)', 'Company name endorses or combines with a product name', 'Toyota Corolla, Microsoft Teams', 'Corporate credibility plus product-specific meaning', 'Two levels to manage and keep consistent'],
            ['Corporate name only (branded house)', 'One master brand across everything', 'Virgin, Tata in many businesses, Google products', 'Maximum leverage of one strong brand', 'Can be stretched too far; hard to serve opposing segments']
          ]
        },
        {
          type: 'pyramid', title: 'The brand hierarchy (illustrative coffee example)',
          levels: [
            { label: 'Corporate brand', note: 'e.g. Nestlé', desc: 'The company. Signals size, trust and corporate values; may or may not appear on pack.' },
            { label: 'Family brand', note: 'e.g. Nescafé', desc: 'Used across several products in a category; carries the main consumer meaning.' },
            { label: 'Individual brand', note: 'e.g. a premium named blend', desc: 'Specific to one product line; targets a particular segment or price point.' },
            { label: 'Modifier', note: 'e.g. Decaf, Classic, Gold', desc: 'Signals a version, size, flavour or level within a line.' }
          ]
        },
        {
          type: 'map', title: 'Roles brands play in a portfolio', center: 'Brand portfolio',
          branches: [
            { label: 'Flagship / power brand', desc: 'The main profit and equity engine; protected and invested in.', children: ['Core', 'Most investment'] },
            { label: 'Flanker or fighter', desc: 'Positioned against rivals’ low-price or niche brands so the flagship does not have to cut price.', children: ['Shields flagship', 'Lower margin'] },
            { label: 'Cash cow', desc: 'A mature brand with loyal buyers that is milked with little support.', children: ['Harvest', 'Low spend'] },
            { label: 'Low-end entry', desc: 'Brings new, price-sensitive buyers into the portfolio, hoping to trade them up later.', children: ['Trade-up', 'Volume'] },
            { label: 'High-end prestige', desc: 'Adds status and credibility to the whole portfolio, even at modest volume.', children: ['Halo', 'Margin'] },
            { label: 'Silver bullet', desc: 'A sub-brand or programme that strengthens how people see the parent brand.', children: ['Image lift'] }
          ]
        },
        {
          type: 'flow', title: 'Should we extend the brand? A decision flow',
          steps: [
            { label: 'Define the parent brand’s equity', desc: 'List the associations that are strong, favourable and unique — the assets you would be lending.' },
            { label: 'Generate candidate categories', desc: 'Where would those associations be relevant and valued?' },
            { label: 'Is there a perceived fit?', kind: 'decision', desc: 'Fit can come from shared attributes, benefits, usage, users or expertise — as customers see it, not as the factory sees it.', branches: [ { label: 'Yes', to: 'Evaluate the economics' }, { label: 'No', to: 'Use a new or sub-brand instead' } ] },
            { label: 'Evaluate economics and feedback risk', desc: 'Incremental profit after cannibalisation, plus the risk that a failure would hurt the parent.' },
            { label: 'Test, launch and monitor both brands', desc: 'Track the extension and the parent’s image; stop early if the parent suffers.' }
          ]
        },
        {
          type: 'framework', name: 'Brand extensions: benefits, costs and success factors', when: 'Before any line or category extension',
          steps: [
            { label: 'Benefits', desc: 'Faster acceptance, lower launch and trial cost, easier retailer listings, and potential feedback that refreshes or clarifies the parent’s meaning.' },
            { label: 'Costs and risks', desc: 'Confusing or diluting the parent, cannibalising its sales, failure that tarnishes the parent, and missing the chance to build a new brand with its own equity.' },
            { label: 'Success factor 1 — fit', desc: 'Customers must see a logical link. Expertise fit (we are good at this) often matters more than physical similarity.' },
            { label: 'Success factor 2 — a strong parent', desc: 'Brands with favourable, abstract associations (style, trust, adventure) stretch further than ones tied to a single product attribute.' },
            { label: 'Success factor 3 — a real advantage', desc: 'An extension must still win on its own merits in the new category; the name buys trial, not repeat.' },
            { label: 'Success factor 4 — support', desc: 'Retailer support and enough marketing investment; extensions fail when treated as free launches.' }
          ]
        },
        {
          type: 'formula', name: 'Customer equity',
          expr: 'Customer equity = Σ (lifetime value of every current and future customer)',
          explain: `Brand equity looks at the customer’s mind; <b>customer equity</b> looks at the customer’s wallet over time. The two are complementary: strong brands acquire and retain customers more cheaply, and customer data shows which brand associations drive retention and spend.`,
          example: `A portfolio has 200,000 customers worth an average $150 lifetime value each = $30m. A low-end entry brand adds 50,000 customers at $40 each ($2m), and if 20% of them later trade up to the flagship worth $150, that adds a further 10,000 × ($150 − $40) = $1.1m. Total uplift ≈ $3.1m before acquisition costs.`
        },
        {
          type: 'case', company: 'Titan Company', year: '1987–today', title: 'Building a portfolio of brands with distinct roles',
          situation: `Titan, a joint venture of the Tata Group and the Tamil Nadu Industrial Development Corporation, launched quartz watches in India in 1987, when the market was dominated by mechanical watches from a state-owned maker.`,
          decision: `Rather than stretch one name across every price point, Titan built a portfolio: Titan as the stylish flagship, Sonata as an affordable value brand, Fastrack as a youth brand (later spun out on its own), and Tanishq for jewellery — where it tackled shoppers’ distrust of gold purity with in-store purity testing.`,
          outcome: `Titan became India’s leading watch company and Tanishq one of the country’s biggest jewellery brands. Each brand serves a different segment without dragging the others up or down.`,
          lesson: `Distinct portfolio roles let a company cover the market from entry to premium without confusing any single brand’s meaning.`
        },
        {
          type: 'case', company: 'Toyota (Lexus)', year: '1983–2000s', title: 'Why the luxury car did not say Toyota',
          situation: `In the 1980s Toyota was famous for reliable, good-value cars. It wanted to compete with German luxury makers in the US, but its name stood for sensible value, not prestige.`,
          decision: `Toyota created a new brand, Lexus, with its own dealer network and service standards, launching the LS 400 in 1989. When an early recall happened, dealers collected cars from owners’ homes — reinforcing the service promise.`,
          outcome: `Lexus quickly became one of the best-selling luxury brands in the US, a position it held for much of the 2000s.`,
          lesson: `When the parent’s associations clash with the target segment, a separate brand (with quiet corporate backing) can stretch further than an extension.`
        },
        {
          type: 'callout', kind: 'warning', title: 'When the name stretches too far',
          html: `<p>A frequently cited warning is <b>Colgate’s</b> foray into frozen ready meals in the early 1980s (“Colgate Kitchen Entrées”). The product did not last: few shoppers wanted dinner from a brand so firmly linked to toothpaste and mint. The lesson is not “never extend” but “check the fit through the customer’s eyes”. Concrete, single-attribute brands stretch least.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your premium bottled-water brand is known for purity and Alpine origin. Sales are flat. The team proposes three extensions. Which has the best chance?`,
          options: [
            { text: 'A cheap mass-market cola under the same name to grow volume.', feedback: 'Poor fit and a downward stretch that would dilute premium imagery.', good: false },
            { text: 'A sparkling mineral water and a lightly flavoured still water under the same brand.', feedback: 'Strong fit: the purity and origin associations are directly relevant, and both lines can command the brand’s premium.', good: true },
            { text: 'A branded energy bar with chocolate coating.', feedback: 'Weak fit with purity; the name buys little credibility here and a flop could tarnish the parent.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Brand architecture', def: 'How a company organises and names its brands and sub-brands and how they relate to each other.' },
        { term: 'House of brands vs branded house', def: 'Many separately named brands versus one master brand used across everything.' },
        { term: 'Line extension', def: 'Using the parent brand for a new product in the same category (new flavour, size or form).' },
        { term: 'Category extension', def: 'Using the parent brand to enter a different product category.' },
        { term: 'Flanker brand', def: 'A brand launched to protect the flagship by competing with rivals at a price point or niche the flagship should not serve.' },
        { term: 'Brand dilution', def: 'Weakening of a brand’s associations, often caused by poorly fitting or poor-quality extensions.' },
        { term: 'Customer equity', def: 'The total discounted lifetime value of all of a firm’s customers.' }
      ],
      quiz: [
        { q: 'A company wants to sell a low-price product without damaging its premium flagship. Which portfolio role fits?', options: ['High-end prestige brand', 'Flanker or fighter brand', 'Cash cow', 'Silver bullet'], answer: 1, explain: 'A flanker or fighter brand competes at the low end so the flagship keeps its price and image.' },
        { q: 'Why did Toyota launch Lexus as a separate brand rather than a “Toyota Luxury” line?', options: ['Toyota’s value associations clashed with luxury prestige', 'Toyota could not legally use its own name', 'Lexus was a separate company', 'Luxury buyers prefer Japanese names'], answer: 0, explain: 'The parent stood for sensible value; a new brand with its own dealers could build prestige associations.' },
        { q: 'An extension sells 100,000 units at a $3 contribution each, but 30,000 of those buyers switched from the parent product, which has a $4 contribution. What is the incremental contribution?', options: ['$300,000', '$180,000', '$120,000', '$420,000'], answer: 1, explain: 'Gross: 100,000 × $3 = $300,000. Lost from the parent: 30,000 × $4 = $120,000. Incremental = $300,000 − $120,000 = $180,000.' },
        { q: 'Which type of parent brand usually stretches furthest?', options: ['One tied tightly to a single product attribute', 'A brand with low awareness', 'A brand known only for low price', 'One with abstract associations like trust or adventure'], answer: 3, explain: 'Abstract, favourable associations transfer to more categories than concrete attribute associations.' },
        { q: 'In a branded-house strategy, the main risk is that…', options: ['Each brand needs its own large budget', 'Communication economies are impossible', 'A failure in one business can damage every business carrying the name', 'Retailers refuse to stock the products'], answer: 2, explain: 'Using one master brand everywhere creates leverage but also shared risk.' }
      ],
      challenge: {
        title: 'Extend, sub-brand or new brand?',
        prompt: `“Saffron Spoon” (illustrative) is a trusted Indian ready-to-eat curry brand. Management wants to enter frozen premium desserts. Forecast for year one: 400,000 units at ₹60 contribution each; marketing cost ₹1.2 crore with the parent name, or ₹2.5 crore with a new brand (less trial help). Research: 25% of shoppers say a dessert from a curry brand “feels odd”; a failed launch could cut the parent’s ₹50 crore annual contribution by an estimated 2% for a year (probability of failure 30% with the parent name, 35% with a new brand, but a new brand’s failure would not touch the parent). Recommend extension, sub-brand, or new brand.`,
        hints: ['Compute contribution minus marketing for each option, then subtract expected damage to the parent (probability × damage).', 'A sub-brand (“Sweet Spoon by Saffron Spoon”) can sit between the two: assume a cost of ₹1.8 crore and half the parent damage.'],
        model: `<p><b>Gross contribution:</b> 400,000 × ₹60 = ₹2.4 crore (assume similar volume across options for simplicity).</p><p><b>Parent damage if failure:</b> 2% × ₹50 crore = ₹1 crore.</p><ul><li><b>Straight extension:</b> ₹2.4 − ₹1.2 = ₹1.2 crore, minus expected damage 30% × ₹1 crore = ₹0.3 crore → <b>₹0.9 crore</b>. Plus the 25% “feels odd” reaction may cut volume, so this is optimistic.</li><li><b>New brand:</b> ₹2.4 − ₹2.5 = <b>−₹0.1 crore</b> in year one, no parent risk. Builds a separate asset but loses money initially.</li><li><b>Sub-brand:</b> ₹2.4 − ₹1.8 = ₹0.6 crore, minus 30% × ₹0.5 crore = ₹0.15 crore → <b>₹0.45 crore</b>, with a distinct name that reduces the “curry dessert” oddness.</li></ul><p><b>Recommendation:</b> the numbers favour the straight extension only if volume holds — but the fit problem (a quarter of shoppers find it odd) is exactly what drags volume in real extensions. If a 20% volume shortfall is assumed, the extension falls to about ₹0.42 crore, below the sub-brand. Choose a <b>sub-brand</b> with light endorsement: it borrows trust for food safety and quality, keeps distance from “curry”, and limits feedback risk. Test in two cities first and track the parent’s image monthly.</p>`
      },
      takeaways: [
        'Branding strategy ranges from a house of brands to a branded house; most firms mix both.',
        'Give each brand in a portfolio a clear role: flagship, flanker, cash cow, entry, prestige.',
        'Extend only where customers see fit and the extension can win on its own merits.',
        'Count cannibalisation and the risk to the parent before celebrating an extension’s sales.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'mm-brands-4',
      title: 'Crafting positioning: frames, points of parity and difference, and mantras',
      level: 'Intermediate',
      minutes: 16,
      hook: `A brand that tries to stand for everything ends up standing for nothing — positioning is the discipline of choosing what to be famous for, and what to give up.`,
      eli5: `In a football team, every player needs the basics — run, pass, kick (points of parity). But each is picked for something special: speed, heading, vision (points of difference). Positioning is deciding which team you are in (the frame), proving you can do the basics, and making sure everyone knows the one special thing you do best.`,
      blocks: [
        {
          type: 'text', title: 'From STP to a precise positioning',
          html: `<p>You met segmentation, targeting and positioning in <a href="#/lesson/marketing-2">STP, personas and the customer journey</a> and a practical positioning method in <a href="#/lesson/marketing-6">Positioning and go-to-market</a>. Here we add the brand manager’s toolkit: a <b>competitive frame of reference</b>, <b>points of parity (POPs)</b>, <b>points of difference (PODs)</b>, a <b>brand mantra</b> and the <b>positioning bull’s-eye</b>.</p><p>Positioning is the act of designing the offering and image so it occupies a <span class="hl">distinct, valued place in the target customer’s mind</span>.</p>`
        },
        {
          type: 'flow', title: 'Building a positioning step by step',
          steps: [
            { label: 'Choose the target', desc: 'Who exactly? Positioning is always relative to a specific customer.' },
            { label: 'Set the competitive frame of reference', desc: 'Which category and which rivals will customers compare you with? Announce category membership by stating category benefits, comparing to the exemplar brands, or using a product descriptor.' },
            { label: 'Is the frame where we can win?', kind: 'decision', desc: 'A narrow frame can make you the leader of a smaller arena; a broad frame offers more growth but stronger rivals.', branches: [ { label: 'Yes', to: 'Define POPs' }, { label: 'No', to: 'Reframe or change the target' } ] },
            { label: 'Define points of parity', desc: 'Category POPs (must-haves to be credible), correlational POPs (to neutralise weaknesses linked to your PODs) and competitive POPs (to negate rivals’ PODs).' },
            { label: 'Choose points of difference', desc: 'Attributes or benefits that are desirable to customers, deliverable by the firm, and differentiating from rivals.' },
            { label: 'Distil into a mantra and a story', desc: 'Three to five words that guide every decision, plus a narrative that brings them alive.' }
          ]
        },
        {
          type: 'compare', title: 'Points of parity vs points of difference', headers: ['', 'Points of parity (POPs)', 'Points of difference (PODs)'],
          rows: [
            ['Purpose', 'Remove reasons not to buy; be “good enough”', 'Give a reason to choose you'],
            ['Customer judgement', '“It is as good as the others on this”', '“It is better or unique on this”'],
            ['Test', 'Clears the threshold of acceptability', 'Desirable, deliverable and differentiating'],
            ['Typical error', 'Neglecting a basic and being ruled out', 'Choosing a POD customers do not care about, or rivals can copy fast'],
            ['Example (illustrative budget hotel)', 'Clean rooms, safe location, decent Wi-Fi', 'Fastest check-in in the city, every time']
          ]
        },
        {
          type: 'pyramid', title: 'The positioning bull’s-eye (centre first)',
          levels: [
            { label: 'Brand mantra', note: 'The bull’s-eye', desc: 'Three to five words capturing the brand’s essence; a filter for every decision.' },
            { label: 'Desired positioning', note: 'POPs, PODs, values, personality', desc: 'The specific associations the brand must own, plus its personality and values.' },
            { label: 'Reasons to believe & execution', note: 'Proof and look-and-feel', desc: 'Product facts, guarantees, endorsements, and the visual and verbal identity that make the positioning credible.' },
            { label: 'Target customers and their needs', note: 'The outer ring', desc: 'Who they are, what they want, and the competitive frame they buy in.' }
          ]
        },
        {
          type: 'map', title: 'Where differentiation can come from', center: 'Differentiation',
          branches: [
            { label: 'Product and design', desc: 'Features, performance, durability, style.', children: ['Features', 'Design'] },
            { label: 'Services', desc: 'Ordering ease, delivery, installation, training, repair, guarantees.', children: ['Delivery', 'Warranty'] },
            { label: 'Employees', desc: 'Better-trained, more competent, courteous, responsive staff.', children: ['Hiring', 'Training'] },
            { label: 'Channels', desc: 'Coverage, expertise and performance of distribution.', children: ['Coverage', 'Experience'] },
            { label: 'Image', desc: 'Symbols, atmosphere, events and stories that create a distinct personality.', children: ['Symbols', 'Story'] },
            { label: 'Price and value model', desc: 'A different way of charging or a different value-for-money point.', children: ['Subscription', 'Guarantee'] }
          ]
        },
        {
          type: 'case', company: 'Avis', year: '1962–2012', title: '“We try harder”: turning number two into a POD',
          situation: `In the early 1960s Avis was a distant second to Hertz in US car rental and had been losing money for years.`,
          decision: `With its advertising agency, Avis openly admitted it was “only No. 2” and argued that this was a reason to choose it: a smaller company has to try harder — cleaner cars, shorter queues. The company backed the claim with internal programmes so staff delivered the promise.`,
          outcome: `Avis returned to profit within a short time, and “We try harder” remained its slogan for about five decades.`,
          lesson: `A clear frame (car rental vs the leader) plus an honest, believable POD beats vague claims of superiority. The promise worked because internal branding made it deliverable.`
        },
        {
          type: 'case', company: 'Tata Motors (Nano)', year: '2008–2018', title: 'When a POD becomes a stigma',
          situation: `Tata unveiled the Nano in 2008 as a car for families moving up from two-wheelers, at a headline price of about one lakh rupees.`,
          decision: `Publicity framed it as “the world’s cheapest car”. Launch was also delayed when protests forced a factory move from Singur in West Bengal to Gujarat.`,
          outcome: `Sales were far below expectations. Many buyers — for whom a car is a status purchase — did not want to be seen in “the cheapest car”, and Ratan Tata later acknowledged that the cheap label had been a mistake. Production ended around 2018.`,
          lesson: `A POD must be desirable to the target, including emotionally. “Cheapest” was differentiating and deliverable, but for an aspirational purchase it was not desirable.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Small businesses and storytelling',
          html: `<p><b>Small firms</b> cannot fund many PODs, so they should focus on one or two, build buzz through community and word of mouth, use a tight set of brand elements, and lean on secondary associations (local origin, a respected stockist).</p><p><b>Storytelling-based positioning</b> treats the brand as a narrative: a <i>setting</i> (time, place, context), a <i>cast</i> (the customer as hero, the brand as guide), a <i>conflict</i> to overcome, and a consistent <i>language</i>. Stories make PODs memorable — but the facts still have to be true.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your new snack wants two PODs: “tastes indulgent” and “genuinely healthy”. Customers believe those are opposites. What is the best approach?`,
          options: [
            { text: 'Claim both loudly in every ad and hope repetition wins.', feedback: 'Negatively correlated claims tend to cancel out; customers believe neither.', good: false },
            { text: 'Lead with one POD and make the other a credible POP, using proof (a nutrition score, a chef endorsement) or a new explanation of why both can be true.', feedback: 'Right. Separate the attributes, borrow credibility, or reframe the relationship — and treat one as the parity point.', good: true },
            { text: 'Drop health entirely and position as indulgent only.', feedback: 'Possible, but you give up a real advantage. Usually the better move is to keep health as a parity point with proof.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Competitive frame of reference', def: 'The category and set of rivals the brand is compared against; it defines which associations matter.' },
        { term: 'Points of parity (POPs)', def: 'Associations shared with rivals that the brand must have to be credible in the category.' },
        { term: 'Points of difference (PODs)', def: 'Attributes or benefits customers strongly associate with the brand, rate positively and believe they cannot find to the same extent elsewhere.' },
        { term: 'Correlational POP', def: 'A parity point needed to offset a weakness customers assume comes with your POD (e.g. “cheap must mean low quality”).' },
        { term: 'Brand mantra', def: 'A three-to-five-word statement of the brand’s essence used internally to guide decisions.' },
        { term: 'Positioning bull’s-eye', def: 'A set of concentric rings linking target needs, proof points, desired positioning and the mantra at the centre.' },
        { term: 'Category membership', def: 'The customer’s understanding of what category a product belongs to — the first thing positioning must establish.' }
      ],
      quiz: [
        { q: 'Which three tests should a point of difference pass?', options: ['Cheap, fast, popular', 'Desirable, deliverable, differentiating', 'Memorable, meaningful, likable', 'Legal, local, low-cost'], answer: 1, explain: 'A POD must matter to customers, be something the firm can deliver, and be distinct from rivals.' },
        { q: 'A budget airline adds free seat selection because low-cost carriers are assumed to be stressful. This is best described as…', options: ['A correlational point of parity', 'A brand mantra', 'A category extension', 'A flanker brand'], answer: 0, explain: 'It neutralises a weakness customers link to its low-price POD.' },
        { q: 'Why did Avis’s “We try harder” work?', options: ['It denied being second', 'It used an honest frame and a believable POD backed by real service', 'It slashed prices below Hertz', 'It changed its name'], answer: 1, explain: 'Admitting second place made the claim credible, and internal programmes delivered it.' },
        { q: 'Survey: 70% of target buyers rate “fast charging” as important; your phone charges 40% faster than the nearest rival; rivals need 2 years to catch up. Only 10% rate “unique colours” as important. Which is the stronger POD?', options: ['Unique colours, because no rival has them', 'Both are equally strong', 'Neither — use price', 'Fast charging, because it is desirable, deliverable and hard to copy quickly'], answer: 3, explain: 'Fast charging scores on all three tests; colours are differentiating but not desirable to most of the target.' },
        { q: 'Where does the brand mantra sit in the positioning bull’s-eye?', options: ['The outer ring', 'In the reasons-to-believe ring', 'At the centre', 'Outside the bull’s-eye'], answer: 2, explain: 'The mantra is the bull’s-eye — the essence that every outer ring supports.' }
      ],
      challenge: {
        title: 'Position a neighbourhood gym',
        prompt: `“IronHouse” (illustrative) is an independent gym in a city suburb. Rivals: a national low-cost chain (₹999/month, 24/7, crowded) and a premium boutique studio (₹6,000/month, classes only). IronHouse charges ₹2,500, has certified coaches on the floor all day, and a strong women’s strength-training community. Write a full positioning: target, frame, POPs, PODs (tested), mantra, and three reasons to believe.`,
        hints: ['Pick a frame that makes your strengths count — are you a “gym” versus the chain, or “coached training” versus the boutique?', 'Check each POD against desirable, deliverable and differentiating, and list a correlational POP if the price looks high versus the chain.'],
        model: `<p><b>Target:</b> 25–45-year-olds, especially women, who want to get stronger safely and have been intimidated or under-served by crowded low-cost gyms.</p><p><b>Frame of reference:</b> “gyms in the neighbourhood” — so the chain is the main comparison. Against the chain, IronHouse’s coaching becomes a strong POD; against a boutique, it would only be parity.</p><p><b>POPs:</b> good equipment, clean changing rooms, convenient hours (6am–10pm is enough for most), reasonable price — and a <i>correlational POP</i>: show that ₹2,500 is value, e.g. it costs less than two personal-training sessions elsewhere.</p><p><b>PODs (tested):</b></p><ul><li><b>Coaches on the floor all day</b> — desirable (beginners want guidance), deliverable (already staffed), differentiating (the chain has none).</li><li><b>A welcoming strength community for women</b> — desirable to the core target, deliverable (existing members and programmes), hard for the chain to copy quickly.</li></ul><p><b>Mantra:</b> “Coached strength, together.”</p><p><b>Reasons to believe:</b> (1) every coach certified and named on the wall; (2) a free coached first session and form check; (3) member stories of first deadlift milestones shared monthly.</p><p><b>Story:</b> the member is the hero who has felt lost in big gyms; IronHouse is the guide that gets them strong. Numbers check: at ₹2,500 vs ₹999 the premium is ₹1,501 a month — the story must make one coached hour a week feel worth more than that, which it does versus ₹1,000+ for a single PT session.</p>`
      },
      takeaways: [
        'Positioning starts with a target and a competitive frame; change the frame and the right PODs change.',
        'POPs remove reasons to reject you; PODs give reasons to choose you.',
        'A POD must be desirable, deliverable and differentiating — including emotionally desirable.',
        'Distil the positioning into a mantra and tell it as a story that staff and customers can repeat.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'mm-brands-5',
      title: 'Competitive dynamics: leaders, challengers, followers and nichers',
      level: 'Advanced',
      minutes: 17,
      hook: `Your best strategy depends less on how good you are than on where you stand — what works for the market leader can bankrupt a challenger, and what saves a nicher would bore a giant.`,
      eli5: `In a playground game, the biggest kid (leader) wants to keep the best spot and get more kids playing. The second-biggest (challenger) tries to take that spot. Some kids just copy what works (followers). And some find a corner nobody else wanted and become kings of that corner (nichers). Each needs different tricks.`,
      blocks: [
        {
          type: 'map', title: 'Four competitive positions', center: 'Market position',
          branches: [
            { label: 'Market leader', desc: 'Largest share; sets prices, launches, channel norms.', children: ['Expand market', 'Defend', 'Grow share'] },
            { label: 'Market challenger', desc: 'Runner-up that chooses to attack for share.', children: ['Pick target', 'Pick attack'] },
            { label: 'Market follower', desc: 'Runner-up that prefers to copy and improve rather than provoke.', children: ['Cloner', 'Imitator', 'Adapter'] },
            { label: 'Market nicher', desc: 'Serves a small segment the big players ignore, often with high margins.', children: ['Specialise', 'Own a niche'] }
          ]
        },
        {
          type: 'framework', name: 'The market-leader playbook', when: 'When you are number one and want to stay there profitably',
          steps: [
            { label: '1. Expand total market demand', desc: 'Leaders gain most when the whole category grows. Find new customers (people who never tried, new segments, new geographies) and more usage (bigger amounts, more frequent use, new uses).' },
            { label: '2. Protect current share', desc: 'Keep innovating, fill gaps in the line, keep prices fair, and use proactive moves (pre-empting rivals) or defensive moves (reducing the chance and damage of attacks).' },
            { label: '3. Increase share — carefully', desc: 'Gaining share is profitable only if costs fall with scale, the offering is superior, and gains do not trigger price wars or regulators.' }
          ]
        },
        {
          type: 'compare', title: 'Six ways a leader can defend', headers: ['Defence', 'What it means', 'When it fits'],
          rows: [
            ['Position defence', 'Strengthen the brand’s core position so it is almost unassailable in customers’ minds', 'Always — the foundation'],
            ['Flank defence', 'Launch flanker brands or products to guard weak spots', 'When rivals attack a low-price or niche segment'],
            ['Pre-emptive defence', 'Attack first: new launches, aggressive signals, locking in channels', 'When you can see the attack coming'],
            ['Counteroffensive', 'Hit back — at the attacker’s core, its flank, or with your own innovation', 'When an attack has started to bite'],
            ['Mobile defence', 'Broaden or diversify into new territories that can become future bases', 'When the category itself is shifting'],
            ['Contraction defence', 'Withdraw from weak markets to concentrate on strong ones', 'When resources are stretched too thin']
          ]
        },
        {
          type: 'flow', title: 'Choosing a challenger’s attack',
          steps: [
            { label: 'Define the objective and the target', desc: 'Attack the leader (high risk, high payoff), a firm of your size that is underperforming, or small local firms.' },
            { label: 'Do you have clearly superior resources?', kind: 'decision', desc: 'A head-on fight needs more resources or a real product edge.', branches: [ { label: 'Yes', to: 'Frontal attack' }, { label: 'No', to: 'Look for weak spots' } ] },
            { label: 'Is there an unserved segment or geography?', kind: 'decision', desc: 'Flanks are where the leader is weak or not looking.', branches: [ { label: 'Yes', to: 'Flank attack' }, { label: 'No', to: 'Consider encirclement or bypass' } ] },
            { label: 'Encirclement or bypass', desc: 'Encirclement: attack on many fronts with many products. Bypass: avoid the leader entirely via new markets or new technology.' },
            { label: 'If resources are small: guerrilla', desc: 'Small, intermittent attacks — local price cuts, bursts of promotion, legal moves — to harass and wear down a bigger rival.' }
          ]
        },
        {
          type: 'case', company: 'PepsiCo vs Coca-Cola', year: '1975–1985', title: 'The Pepsi Challenge and the New Coke backlash',
          situation: `Coca-Cola led the US cola market. Pepsi needed a way to attack the leader’s core claim — that Coke simply tasted best.`,
          decision: `From 1975 Pepsi ran the “Pepsi Challenge”: blind taste tests in shops and malls, filmed for ads, in which many participants preferred Pepsi’s sweeter taste. It was a frontal attack on the leader’s strongest point, using evidence.`,
          outcome: `Pepsi gained share in supermarkets. Coca-Cola eventually responded in 1985 by changing its formula (“New Coke”), which tested well in taste tests — but loyal customers protested about losing the original. Within about three months Coca-Cola brought back the old formula as “Coca-Cola Classic”.`,
          lesson: `A smart challenger can provoke a leader into abandoning its own position. Coke’s equity lay in heritage and attachment, not only taste; its best defence was position defence, not copying the challenger’s battlefield.`
        },
        {
          type: 'text', title: 'Followers and nichers: profitable without being number one',
          html: `<p><b>Followers</b> let others pay for pioneering and copy what works. A <b>cloner</b> copies the leader closely; an <b>imitator</b> copies some things but keeps differences in packaging, price or channel; an <b>adapter</b> takes the leader’s products and improves them, sometimes becoming a challenger itself. (A counterfeiter, who copies illegally, is not a strategy but a risk to manage.)</p><p><b>Nichers</b> specialise — by end-user, product feature, quality or price level, geography, customer size or service — and win by knowing a small group so well that they earn high margins. The risk is that the niche dries up or a giant moves in, so strong nichers develop <i>multiple</i> niches.</p>`
        },
        {
          type: 'cycle', title: 'The move–countermove loop', center: 'Competitive dynamics',
          steps: [
            { label: 'Read the field', desc: 'Map rivals’ goals, strengths, likely reactions and how they read your moves.' },
            { label: 'Choose a move', desc: 'Pick the arena (segment, channel, feature) where your advantage is greatest.' },
            { label: 'Signal and act', desc: 'Launch, price or promote; signals can deter or invite a response.' },
            { label: 'Rival responds', desc: 'Match, ignore, counter-attack elsewhere, or retreat.' },
            { label: 'Learn and reset', desc: 'Update your read of each rival and of customers, then plan the next move.' }
          ]
        },
        {
          type: 'matrix', name: 'Customer vs competitor orientation', xLabel: 'Attention to customers →', yLabel: 'Attention to competitors →',
          cells: [
            { label: 'Competitor-centred', desc: 'Reacts to every rival move; good at tactics, can lose sight of what customers want.' },
            { label: 'Market-centred', desc: 'Balances both: understands customers deeply and anticipates rivals. The goal.' },
            { label: 'Product-oriented', desc: 'Watches neither; makes what it is good at and hopes buyers come.' },
            { label: 'Customer-centred', desc: 'Spots unmet needs well, but can be blindsided by a rival’s move.' }
          ]
        },
        {
          type: 'interactive', widget: 'five-forces', title: 'Rate the battlefield before you attack', note: 'Rate rivalry and buyer power high, then low. A challenger should prefer an attack where rivalry is not already a price war and buyers reward a real difference.'
        },
        {
          type: 'scenario',
          prompt: `You lead the detergent market. A new rival sells a basic powder at a fraction of your price through small rural shops and is growing fast among first-time buyers. What is your best first response?`,
          options: [
            { text: 'Cut your flagship’s price to match.', feedback: 'You would sacrifice margin on all your existing customers to win a segment that values price above everything. Classic mistake.', good: false },
            { text: 'Ignore it — those buyers were never yours.', feedback: 'Low-end entrants often move up-market. Ignoring the flank lets the challenger build scale and distribution.', good: false },
            { text: 'Launch a separately branded low-price product (flank defence) and keep the flagship premium.', feedback: 'Right. A fighter brand meets the challenger where it attacks while protecting the flagship’s price and image.', good: true }
          ]
        }
      ],
      terms: [
        { term: 'Market challenger', def: 'A runner-up firm that actively attacks the leader or others to gain share.' },
        { term: 'Frontal attack', def: 'Matching the rival’s product, price and promotion head-on; needs superior resources.' },
        { term: 'Flank attack', def: 'Attacking where the rival is weak — an underserved segment or geography.' },
        { term: 'Bypass attack', def: 'Avoiding direct conflict by moving into new products, markets or technologies.' },
        { term: 'Guerrilla attack', def: 'Small, intermittent attacks to harass and demoralise a larger rival.' },
        { term: 'Flank defence', def: 'Protecting weak spots, often with flanker brands, so attackers have no easy opening.' },
        { term: 'Market nicher', def: 'A firm that specialises in serving a small segment very well, often at high margins.' },
        { term: 'Market-centred company', def: 'One that balances attention to customers and to competitors when making strategy.' }
      ],
      quiz: [
        { q: 'Why does a market leader often gain the most when the whole category grows?', options: ['Regulators prefer leaders', 'Leaders have no costs', 'It captures the largest share of any new demand', 'Followers cannot advertise'], answer: 2, explain: 'With the largest share, the leader captures the biggest slice of any expansion in total demand.' },
        { q: 'A small challenger with limited money targets one region with short, unpredictable price promotions. This is a…', options: ['Guerrilla attack', 'Frontal attack', 'Encirclement attack', 'Position defence'], answer: 0, explain: 'Small, intermittent harassment by a resource-poor attacker is guerrilla warfare.' },
        { q: 'A category is worth $2bn a year. The leader holds 40% with a 25% contribution margin. If it wins 2 extra share points with no price cut, how much extra annual contribution does it earn?', options: ['$4m', '$10m', '$40m', '$100m'], answer: 1, explain: '2 points of $2bn = $40m extra revenue; × 25% margin = $10m extra contribution.' },
        { q: 'Which follower type takes the leader’s products and improves them?', options: ['Cloner', 'Counterfeiter', 'Imitator', 'Adapter'], answer: 3, explain: 'Adapters improve on the leader’s products and may later become challengers.' },
        { q: 'What does the New Coke episode best illustrate?', options: ['Leaders should always copy challengers', 'Brand equity can rest on attachment and heritage, not just product attributes', 'Blind tests predict loyalty perfectly', 'Price is the only weapon'], answer: 1, explain: 'Customers valued the original as part of their identity; changing it attacked the brand’s own resonance.' }
      ],
      challenge: {
        title: 'Defend against a challenger’s flank attack',
        prompt: `You lead the premium headphone market (illustrative): revenue $500m, 35% share, 30% contribution margin, average price $250. A challenger launches a $90 model with good sound and strong social buzz, aimed at students. Your research: if you do nothing you lose 3 share points next year (of a $1.43bn market). Option A: cut your entry model from $150 to $99 — keeps share but cuts contribution on 400,000 existing entry units from $45 to $10 each. Option B: launch a flanker brand at $89 with $15 contribution per unit, costing $8m to launch, expected to sell 300,000 units with 25% cannibalisation from your entry model. Recommend a defence with the numbers.`,
        hints: ['Value of 3 share points: 3% × $1.43bn × 30% margin. Compare that with the cost of each option.', 'For the flanker, subtract cannibalised contribution: 25% of 300,000 units would otherwise have bought your $45-contribution entry model.'],
        model: `<p><b>Cost of doing nothing:</b> 3% × $1.43bn ≈ $42.9m revenue × 30% ≈ <b>$12.9m</b> contribution lost per year.</p><p><b>Option A — price cut:</b> contribution on 400,000 entry units falls by $35 each = <b>−$14m</b>. It costs more than the loss it prevents and also teaches customers your brand can be cheap — damaging the premium position.</p><p><b>Option B — flanker:</b> 300,000 × $15 = $4.5m. Cannibalised: 75,000 units × $45 = $3.375m lost. Net from units = $1.125m, minus $8m launch = −$6.9m in year one. But if the flanker blocks most of the 3-point loss (say it saves two-thirds, ≈ $8.6m), the year-one net is about <b>+$1.7m</b>, and launch costs do not recur.</p><p><b>Recommendation:</b> Option B, a <b>flank defence</b> under a distinct brand name so the flagship keeps its $250 positioning. Pair it with <b>position defence</b> for the flagship (exclusive features, creator partnerships) and track: share among under-25s, flagship average price, and cannibalisation rate quarterly. Avoid the price cut — it is the most expensive defence and erodes equity.</p>`
      },
      takeaways: [
        'Strategy depends on position: leaders expand, defend and grow share carefully; challengers choose a target and an attack.',
        'Frontal attacks need superior resources; most challengers do better on flanks or by bypassing.',
        'Followers and nichers can be very profitable without ever leading the market.',
        'Aim to be market-centred: watch customers and competitors, not just one.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'mm-brands-6',
      title: 'Life-cycle strategy, market evolution and marketing in a downturn',
      level: 'Advanced',
      minutes: 17,
      hook: `The same marketing plan that launched a product will kill it five years later — the right moves change as a market is born, grows, matures and fades, and recessions rewrite the rules overnight.`,
      eli5: `Think of a new playground craze. First, only a few kids know about it and someone has to explain it (introduction). Then everyone wants one (growth). Then everyone has one and kids compare which is best (maturity). Finally a new craze arrives and fewer kids care (decline). A smart seller changes what they say and do at each stage — and some crazes vanish in weeks (fads) while others keep coming back (fashions).`,
      blocks: [
        {
          type: 'text', title: 'The product life cycle and the pioneer’s gamble',
          html: `<p>The <b>product life cycle (PLC)</b> describes sales and profit over a product’s life: introduction, growth, maturity and decline. Profit usually turns positive only in growth and peaks in early maturity.</p><p>Being first — the <b>pioneer</b> — can bring advantages: becoming the category prototype in customers’ minds, setting standards, gaining scale, and locking up channels. But pioneers also pay to educate the market and often stumble; well-resourced <b>fast followers</b> regularly overtake them. Pioneering pays most when the firm can keep innovating and defend its lead.</p>`
        },
        {
          type: 'compare', title: 'Marketing across the life cycle', headers: ['', 'Introduction', 'Growth', 'Maturity', 'Decline'],
          rows: [
            ['Objective', 'Create awareness and trial', 'Maximise share', 'Maximise profit, defend share', 'Cut spend, milk or exit'],
            ['Product', 'Basic offer', 'Extensions, service, warranty', 'Diversify brands and models', 'Phase out weak items'],
            ['Price', 'Skim or penetrate', 'Price to penetrate the market', 'Match or beat rivals', 'Cut or hold for loyalists'],
            ['Distribution', 'Selective', 'Intensive', 'More intensive', 'Selective; drop weak outlets'],
            ['Communication', 'Educate early adopters and dealers', 'Build mass awareness and preference', 'Stress differences and benefits', 'Minimal; retain hard-core loyals'],
            ['Competitors', 'Few', 'Growing', 'Many, then shake-out', 'Declining']
          ]
        },
        {
          type: 'map', title: 'Not every curve looks the same', center: 'Life-cycle shapes',
          branches: [
            { label: 'Classic S-curve', desc: 'Slow start, rapid growth, long plateau, gradual decline.' },
            { label: 'Growth–slump–maturity', desc: 'Strong early sales, a drop, then a stable level from late adopters and replacement buying.' },
            { label: 'Cycle–recycle', desc: 'A second hump driven by a new promotion push or relaunch.' },
            { label: 'Scalloped', desc: 'Successive growth waves as new uses or users are found.' },
            { label: 'Style', desc: 'A basic, distinctive mode of expression that lasts generations, coming in and out of favour.', children: ['Homes', 'Clothing'] },
            { label: 'Fashion', desc: 'A currently popular style: distinctiveness, emulation, mass fashion, decline.', children: ['Emulation'] },
            { label: 'Fad', desc: 'Comes quickly into view, is adopted with great zeal, peaks early and declines fast.', children: ['Fidget spinners'] }
          ]
        },
        {
          type: 'framework', name: 'Three levers in the maturity stage', when: 'When growth slows and the category is crowded',
          steps: [
            { label: 'Market modification', desc: 'Expand the number of users (convert non-users, enter new segments, win rivals’ customers) or the usage rate (more occasions, larger amounts, new uses).' },
            { label: 'Product modification', desc: 'Improve quality (durability, reliability), features (convenience, safety, versatility) or style (aesthetic appeal).' },
            { label: 'Marketing-programme modification', desc: 'Change price, channels, communications or service — but cuts in price and heavy promotions are easy for rivals to copy.' }
          ]
        },
        {
          type: 'flow', title: 'What to do with a declining product',
          steps: [
            { label: 'Confirm decline is structural', desc: 'Separate a temporary dip from a permanent shift (new technology, changed tastes).' },
            { label: 'Is the remaining industry attractive?', kind: 'decision', desc: 'Few exits barriers, loyal pockets of demand, rivals leaving?', branches: [ { label: 'Yes', to: 'Check our strength' }, { label: 'No', to: 'Harvest or divest' } ] },
            { label: 'Are we competitively strong?', kind: 'decision', desc: 'Strong brand, low cost or a defensible niche?', branches: [ { label: 'Yes', to: 'Invest or hold to own what is left' }, { label: 'No', to: 'Harvest or exit' } ] },
            { label: 'Execute the chosen path', desc: 'Harvesting: cut costs and support gradually while maintaining sales. Divesting: sell to a firm that values it more. Holding: become the last brand standing.' }
          ]
        },
        {
          type: 'cycle', title: 'How markets evolve', center: 'Market evolution',
          steps: [
            { label: 'Emergence', desc: 'A latent need is spotted; a pioneer creates a first product.' },
            { label: 'Growth', desc: 'Rivals enter; the market expands and segments form.' },
            { label: 'Maturity and fragmentation', desc: 'Rivals split the market into ever smaller segments.' },
            { label: 'Consolidation', desc: 'A new attribute or technology reunites segments around a new leader.' },
            { label: 'Decline or reinvention', desc: 'Demand falls unless a new technology restarts the cycle.' }
          ]
        },
        {
          type: 'case', company: 'Arm & Hammer (Church & Dwight)', year: '1970s', title: 'Finding new uses for a mature product',
          situation: `Arm & Hammer baking soda was a century-old, mature product used mainly for baking — a shrinking use as fewer people baked at home.`,
          decision: `In the early 1970s the brand promoted putting an open box in the refrigerator to absorb odours, and later suggested other uses such as freshening carpets and drains. It then extended the baking-soda benefit into toothpaste, laundry detergent and cat litter.`,
          outcome: `Sales of the mature product rose substantially and the brand became a broad household-products platform.`,
          lesson: `Market modification through new uses can restart growth for a mature product, and a clear core benefit (deodorising, cleaning) gives a natural path for extensions.`
        },
        {
          type: 'case', company: 'Hyundai', year: '2009', title: 'Hyundai Assurance: marketing that answered the recession',
          situation: `In the 2008–09 financial crisis, US car sales collapsed. People were afraid to take on car loans because they feared losing their jobs.`,
          decision: `Hyundai launched “Hyundai Assurance” in early 2009: buyers who lost their job within a year could return the car without damaging their credit. The offer was promoted heavily, including during the Super Bowl.`,
          outcome: `Very few cars were returned, and Hyundai was among the few brands to gain US market share in 2009 while the overall market shrank.`,
          lesson: `In a downturn, address the customer’s new fear directly. Reducing perceived risk can beat price cutting — and costs less than it seems.`
        },
        {
          type: 'callout', kind: 'myth', title: 'Critique: the PLC is a map, not a destiny',
          html: `<p>The PLC is criticised because stage lengths vary wildly, it is hard to tell which stage you are in, and it can become a <b>self-fulfilling prophecy</b>: managers who think a product is “in decline” cut support and cause the decline. Many “mature” products have been revived. Use the PLC to ask good questions, not to forecast mechanically.</p>`
        },
        {
          type: 'checklist', title: 'Marketing in an economic downturn',
          items: [
            'Re-research customers: what has changed in their fears, budgets and priorities?',
            'Reduce perceived risk with guarantees, flexible payment or trial offers before cutting price',
            'Keep investing in the brand where possible — share of voice is cheaper when rivals go quiet',
            'Offer smaller sizes or value tiers (flanker) rather than discounting the flagship',
            'Cut wasteful spending, not the activities that build mental availability',
            'Put the brand on the customer’s side with honest, reassuring communication',
            'Get closer to retailers and channel partners who are also under pressure',
            'Review the portfolio: support winners and harvest or divest weak brands'
          ]
        }
      ],
      terms: [
        { term: 'Product life cycle (PLC)', def: 'The pattern of sales and profit over a product’s life: introduction, growth, maturity and decline.' },
        { term: 'Pioneer advantage', def: 'Benefits of entering a market first, such as becoming the category prototype; not guaranteed.' },
        { term: 'Fad', def: 'A product or style adopted quickly with great enthusiasm that peaks early and declines fast.' },
        { term: 'Market modification', def: 'Growing a mature product by finding new users or increasing usage, including new uses.' },
        { term: 'Harvesting', def: 'Gradually cutting a product’s costs and support while trying to maintain sales, to maximise cash before exit.' },
        { term: 'Market fragmentation', def: 'A mature market splitting into many small segments served by different competitors.' },
        { term: 'Market consolidation', def: 'A new attribute or technology pulling fragmented segments together around a new leader.' }
      ],
      quiz: [
        { q: 'In which stage is the objective usually “maximise profit while defending share”?', options: ['Introduction', 'Growth', 'Maturity', 'Decline'], answer: 2, explain: 'Maturity is crowded and slow-growing; the focus shifts from grabbing share to profit and defence.' },
        { q: 'A toy craze explodes in three months and collapses within a year. This is a…', options: ['Fad', 'Style', 'Scalloped life cycle', 'Classic S-curve'], answer: 0, explain: 'Fads come quickly, are adopted with zeal, peak early and decline fast.' },
        { q: 'A brand sells 1 million units a year at $2 contribution. A new-use campaign costing $600,000 raises volume by 20%. What is the net gain?', options: ['$400,000', '−$200,000', '$1.4m', '$200,000'], answer: 1, explain: '20% × 1m = 200,000 extra units × $2 = $400,000 extra contribution, minus the $600,000 campaign = −$200,000 in year one. It pays only if the new use keeps lifting sales in later years.' },
        { q: 'Which is a main criticism of the PLC?', options: ['It has too few stages', 'It only applies to services', 'It ignores price completely', 'It can become self-fulfilling if managers cut support too early'], answer: 3, explain: 'Labelling a product “declining” can lead to cuts that cause decline.' },
        { q: 'What did Hyundai Assurance mainly do for customers in 2009?', options: ['Lower the sticker price sharply', 'Offer free fuel', 'Remove the fear of being stuck with a car loan after a job loss', 'Extend the warranty to 20 years'], answer: 2, explain: 'It reduced perceived financial risk, the key barrier in a recession.' }
      ],
      challenge: {
        title: 'Rescue a mature tea brand in a recession',
        prompt: `“Morning Leaf” (illustrative) is a mature packaged-tea brand: 10 million packs a year at ₹40 contribution each (₹40 crore). A recession is starting; shoppers are trading down. Options: (A) cut price so contribution falls to ₹30 a pack, expected to hold volume; (B) launch a smaller ₹10 sachet pack (₹3 contribution each), expected to sell 30 million sachets but cannibalise 5% of main-pack volume, with ₹2 crore launch cost; (C) cut advertising by ₹5 crore, expected to lose 8% of volume over the year. Evaluate each and recommend, using life-cycle and downturn thinking.`,
        hints: ['Compute year-one contribution for each option versus the ₹40 crore baseline.', 'Think beyond year one: which option damages long-term equity, and which keeps buyers in the brand?'],
        model: `<p><b>Baseline:</b> 10m × ₹40 = ₹40 crore.</p><ul><li><b>A — price cut:</b> 10m × ₹30 = ₹30 crore → <b>−₹10 crore</b>. It also resets the reference price; restoring it after the recession is hard.</li><li><b>B — sachets:</b> sachets 30m × ₹3 = ₹9 crore; cannibalisation 5% × 10m = 0.5m packs × ₹40 = ₹2 crore; launch ₹2 crore → net <b>+₹5 crore</b>. It keeps cash-strapped buyers in the brand at a price they can afford (a market-modification move and a value flanker).</li><li><b>C — cut advertising:</b> saves ₹5 crore but loses 8% × 10m = 0.8m × ₹40 = ₹3.2 crore → <b>+₹1.8 crore</b> this year, yet weakens salience exactly when rivals may also go quiet, and the loss compounds in later years.</li></ul><p><b>Recommendation:</b> choose <b>B</b>, keep the main pack’s price, and keep advertising at least steady to grow share of voice cheaply while rivals cut. Use the PLC as a prompt rather than a verdict: the brand is mature, not dead — sachets bring new and trading-down users, and messaging can stress value per cup. Track main-pack price premium, sachet-to-pack trade-up, and share of voice quarterly.</p>`
      },
      takeaways: [
        'Marketing objectives and the mix change at each life-cycle stage.',
        'Maturity is not the end: modify the market, the product or the marketing programme.',
        'Treat the PLC as a diagnostic, not a forecast; it can become self-fulfilling.',
        'In a downturn, cut risk for customers and protect brand investment rather than racing to discount.'
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-mm-burberry',
    company: 'Burberry',
    industry: 'Luxury fashion',
    year: '2006',
    track: 'mm-brands',
    title: 'A famous check everyone has — and the wrong people wear',
    situation: `<p>2006. Burberry is a British brand founded in the 1850s and famous for the trench coat and its beige check pattern. A revival in the late 1990s and early 2000s had made it fashionable again, but success brought problems.</p><p>The check was everywhere — on caps, scarves, prams and countless counterfeits — and in the UK it became linked with an image very far from luxury. The business ran through many licensees and distributors in different countries, so products, prices and quality varied widely. Angela Ahrendts becomes CEO, with designer Christopher Bailey leading creative.</p>`,
    question: 'You are the new CEO. How do you restore the brand’s luxury equity?',
    options: [
      { text: 'Maximise licensing: add more licensees and categories to grow royalty income quickly.', result: 'More short-term income, but the brand becomes even more diluted and harder to control.' },
      { text: 'Retake control: buy back licences, centralise design, cut the overexposed check, focus on the heritage trench coat and invest in digital to reach a new generation of luxury buyers.', result: 'Costly and slow at first, but rebuilds consistent luxury meaning and the price premium.', best: true },
      { text: 'Abandon the heritage and relaunch under a new, edgier name.', result: 'Throws away a century and a half of equity and recognition.' },
      { text: 'Move into discount outlets and supermarkets to capture the mass demand for the check.', result: 'Volume rises briefly while luxury buyers flee; equity collapses.' }
    ],
    whatHappened: `<p>Ahrendts and Bailey bought back or ended many licences and distributors, put all design under one creative leader, sharply reduced visible use of the check, and made the trench coat the centre of the brand. Burberry invested early and heavily in digital — including its “Art of the Trench” social site (2009) and live-streamed runway shows — to connect with younger luxury customers. Revenue grew several-fold over her tenure, and Burberry became a case study in luxury revitalisation before Ahrendts left to join Apple in 2014.</p>`,
    lessons: [
      'Licensing can build reach but dilute equity; luxury brands need control over every touchpoint.',
      'Revitalisation often means going back to the core heritage and expressing it in a modern way.',
      'Restricting a famous element can increase its value.'
    ],
    frameworks: ['Brand revitalisation', 'Brand elements and consistency', 'Secondary associations: channels and licensing']
  },
  {
    id: 'case-mm-hul-nirma',
    company: 'Hindustan Unilever (vs Nirma)',
    industry: 'Consumer goods (detergents)',
    year: '1980s',
    track: 'mm-brands',
    title: 'A low-price challenger is eating the market from below',
    situation: `<p>1980s India. Hindustan Lever (now Hindustan Unilever) leads detergents with Surf, a premium brand. Karsanbhai Patel’s Nirma, started in 1969 by selling cheap yellow detergent powder door to door in Gujarat, has grown into a national brand by pricing at a fraction of Surf and reaching small towns and villages through low-cost distribution.</p><p>Nirma has become one of the largest detergents in India by volume, mostly among households that had previously used soap bars or no detergent at all. Surf’s share is under pressure.</p>`,
    question: 'You run HLL’s detergents business. How do you respond?',
    options: [
      { text: 'Cut Surf’s price sharply to match Nirma.', result: 'Destroys Surf’s margin on all existing buyers and its premium image, and still may not match Nirma’s low costs.' },
      { text: 'Ignore Nirma: its buyers are poor, rural and not Surf’s target.', result: 'Lets the challenger build scale and distribution and move up-market over time.' },
      { text: 'Launch a separate low-cost brand built on a lean cost structure to fight Nirma in its own segment, while keeping Surf premium.', result: 'Protects Surf’s price and image and contests the fast-growing low end directly.', best: true },
      { text: 'Exit detergents and focus on soaps.', result: 'Abandons a large, growing category to the challenger.' }
    ],
    whatHappened: `<p>HLL launched Wheel in the late 1980s as a low-priced detergent, using a leaner manufacturing and distribution model to keep costs down — an effort widely reported internally as a strategy to inhibit Nirma’s growth. Surf stayed premium and was later strengthened as Surf Excel. Wheel grew into one of HLL’s largest brands by volume, and the company kept its leadership of the category. The episode became a classic Indian example of a flank defence with a fighter brand.</p>`,
    lessons: [
      'A fighter brand lets a leader meet a low-price challenger without cutting the flagship’s price.',
      'Fighter brands only work if their cost structure is genuinely lean — otherwise they lose money on every pack.',
      'Low-end challengers often grow the category; the leader should compete for those new users, not ignore them.'
    ],
    frameworks: ['Flank defence', 'Brand portfolio roles (fighter brand)', 'Low-end disruption']
  }
]);
