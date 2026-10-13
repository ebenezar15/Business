/* MBA Studio — Track 22: Negotiation & Influence */
MBA.addTrack({
  id: 'negotiation',
  stage: 3,
  order: 22,
  title: 'Negotiation & Influence',
  icon: '🤝',
  color: '#c2410c',
  tagline: 'Claim value, create value, keep the relationship',
  summary: `Negotiation is how deals, jobs, partnerships and disputes actually get decided. You will prepare like a professional (interests, BATNA, reservation price, ZOPA), bargain over price without leaving money on the table, design creative deals that grow the pie, use influence ethically, manage teams, coalitions and cultures, and handle the hardest situations — power gaps, salary talks, dirty tricks and disputes.`,
  outcomes: [
    'Prepare any negotiation with interests, BATNA, reservation price, target and ZOPA',
    'Anchor, make first offers and concede in a deliberate pattern',
    'Create value with logrolling, packages, contingent contracts and MESOs',
    'Recognise influence tactics and cognitive biases — and use persuasion ethically',
    'Lead multi-party, team and cross-cultural negotiations and build coalitions',
    'Negotiate from weakness, negotiate your own pay, counter dirty tricks and use mediation'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'negotiation-1',
      title: 'Negotiation fundamentals: interests, BATNA, reservation price and ZOPA',
      level: 'Beginner',
      minutes: 15,
      hook: `Most negotiations are won or lost before anyone speaks — in how well each side understood what it really wanted and what it would do without a deal.`,
      eli5: `Two sisters argue over the last orange. They cut it in half. One squeezes her half for juice and throws away the peel; the other grates her peel for a cake and throws away the fruit. If they had asked <b>why</b> each wanted the orange, both could have had everything they needed. Positions are "I want the orange". Interests are "I want juice" and "I want peel". Good negotiators dig for interests.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than the sales track',
          html: `<p>You met BATNA, ZOPA and anchoring in the Sales track (sales-3) as tools for closing a deal. This track treats negotiation as a discipline in its own right — for deals, partnerships, jobs, disputes and internal politics.</p><p>A negotiation is any situation where two or more parties who depend on each other try to reach a joint decision while having partly different interests. That covers a supplier contract, a merger, a salary, a budget fight between two of your managers, and a ceasefire.</p>`
        },
        {
          type: 'framework', name: 'Principled negotiation', by: 'Roger Fisher and William Ury, Getting to Yes (1981)', when: 'As the default mindset for almost any negotiation',
          steps: [
            { label: '1. Separate the people from the problem', desc: 'Be soft on the people, hard on the problem. Deal with emotions and perceptions directly, not through concessions.' },
            { label: '2. Focus on interests, not positions', desc: 'A position is what someone says they want ("$500k"). An interest is why ("we must show the board 20% savings"). Ask "why?" and "why not?".' },
            { label: '3. Invent options for mutual gain', desc: 'Brainstorm several possible deals before deciding. Look for things cheap for you and valuable to them.' },
            { label: '4. Insist on objective criteria', desc: 'Anchor the agreement on market prices, precedent, expert valuation or a fair procedure — not on who shouts loudest.' },
            { label: '5. Know your BATNA', desc: 'Your Best Alternative To a Negotiated Agreement is the yardstick for every offer and your real source of power.' }
          ]
        },
        {
          type: 'formula', name: 'Reservation price, ZOPA and surplus',
          expr: 'ZOPA = buyer’s reservation price − seller’s reservation price (exists only if positive)',
          explain: `Your <b>BATNA</b> is what you will actually do if there is no deal. Your <b>reservation price</b> (walk-away point) is the worst deal you would accept — derived from your BATNA after adjusting for differences in risk, timing and non-price factors. Your <b>target</b> is your ambitious but justifiable goal. The <b>ZOPA</b> is the overlap of the two reservation prices. Any deal inside it splits a <b>surplus</b>: each side’s gain over its walk-away.`,
          example: `You are selling a business. Your BATNA is a $380k offer from another buyer, but that buyer pays in two instalments, which you value at $20k less certainty — so your reservation price for an all-cash deal is about <b>$400k</b>. The buyer’s reservation is <b>$460k</b>. ZOPA = $400k to $460k ($60k of surplus). A deal at $430k gives you $30k of surplus and the buyer $30k. At $450k you get $50k and the buyer $10k.`
        },
        { type: 'interactive', widget: 'negotiation-zopa', title: 'Map the bargaining zone', note: 'Drag the buyer\'s walk-away below the seller\'s: the ZOPA disappears. Then add value with the delivery issue and watch a deal become possible again.' },
        {
          type: 'compare', title: 'Positions vs interests', headers: ['Situation', 'Stated position', 'Possible underlying interests'],
          rows: [
            ['Supplier contract', '"We need a 15% price cut."', 'Hit a cost-saving target; reduce risk of price spikes; look good to the CFO'],
            ['Job offer', '"I need $120k."', 'Pay a mortgage; recognition of seniority; match a friend’s pay; career growth'],
            ['Landlord renewal', '"Rent goes up 10%."', 'Cover rising costs; avoid empty months; keep a reliable tenant'],
            ['Partnership', '"We want exclusivity."', 'Protect an investment in training; avoid a rival free-riding; predictable volume']
          ]
        },
        {
          type: 'case', company: 'Egypt, Israel and the United States', year: '1978', title: 'Camp David: sovereignty vs security',
          situation: `After the 1967 war Israel occupied Egypt’s Sinai Peninsula. In September 1978, US President Jimmy Carter hosted Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin at Camp David for 13 days of talks. Positions looked incompatible: Egypt demanded all of Sinai back; Israel would not return to the pre-1967 lines.`,
          decision: `The negotiators looked beneath the positions. Egypt’s core interest was <b>sovereignty</b> over its land; Israel’s was <b>security</b> — not having Egyptian tanks on its border. The US mediators used a "single negotiating text", revising one draft over and over rather than trading demands.`,
          outcome: `The Camp David Accords led to the 1979 Egypt–Israel peace treaty: Sinai was returned to Egypt, with large demilitarised zones and international monitoring. The peace between the two countries has held for decades.`,
          lesson: `When positions clash, interests may not. Sovereignty and security were both achievable once separated. Fisher and Ury used this example in Getting to Yes.`
        },
        {
          type: 'checklist', title: 'One-page negotiation prep',
          items: ['My interests, ranked', 'Their likely interests, ranked (and how I will test them)', 'My BATNA — and one action to improve it before we meet', 'Their likely BATNA and how strong it is', 'My reservation price and my target', 'Estimated ZOPA', 'Objective criteria I can cite (market data, precedent)', 'Issues I can trade and what each is worth to each side', 'Questions to ask in the first meeting']
        },
        {
          type: 'scenario',
          prompt: `You are hiring a senior engineer. She says: "I need $160k, final." Your band tops out at $150k. What is your best next move?`,
          options: [
            { text: 'Say the band is fixed and end the conversation.', feedback: 'You may lose a great hire over a position without testing interests.', good: false },
            { text: 'Ask what is behind the $160k — e.g. a competing offer, a cost of living, or a sense of fair level — and explore signing bonus, title, equity or remote days.', feedback: 'Right. The number is a position. If the interest is a competing offer’s total cash in year one, a signing bonus might solve it inside your band.', good: true },
            { text: 'Agree to $160k immediately to avoid losing her.', feedback: 'You break your own band (and internal equity) without learning whether something cheaper would have met her interest.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Position', def: 'What a party says it wants — a demand or stated number.' },
        { term: 'Interest', def: 'The underlying need, concern or goal that explains a position.' },
        { term: 'BATNA', def: 'Best Alternative To a Negotiated Agreement — what you will actually do if no deal is reached.' },
        { term: 'Reservation price', def: 'Your walk-away point: the least favourable deal you would still accept.' },
        { term: 'Target', def: 'The ambitious but defensible outcome you aim for.' },
        { term: 'ZOPA', def: 'Zone of possible agreement — the range between the two sides’ reservation prices.' },
        { term: 'Surplus', def: 'The value a party gains from a deal compared with its reservation price.' }
      ],
      quiz: [
        { q: 'Seller’s reservation price: $250k. Buyer’s reservation price: $290k. What is the ZOPA?', options: ['$250k–$290k, worth $40k', 'There is none', '$270k exactly', '$290k–$330k'], answer: 0, explain: 'The overlap runs from the seller’s minimum to the buyer’s maximum: $40k of surplus.' },
        { q: 'In that ZOPA, a deal closes at $275k. How is the surplus split?', options: ['Seller $15k, buyer $25k', 'Seller $25k, buyer $15k', 'Each $20k', 'Seller $40k, buyer $0'], answer: 1, explain: 'Seller gains 275 − 250 = 25; buyer gains 290 − 275 = 15.' },
        { q: 'Your best alternative job pays $85k, but has a long commute you would happily pay $5k a year to avoid. What is your reservation salary for a job with no commute?', options: ['$90k', '$85k', '$75k', '$80k'], answer: 3, explain: 'The no-commute job is worth $5k more to you, so you would accept as little as $85k − $5k = $80k.' },
        { q: '"We must have a 15% discount" is best described as…', options: ['An interest', 'A BATNA', 'A position', 'A ZOPA'], answer: 2, explain: 'It is a stated demand. The interest might be a cost target or a budget cycle.' },
        { q: 'What most directly increases your negotiating power before the meeting?', options: ['Improving your BATNA', 'Preparing a louder opening', 'Hiding your interests completely', 'Agreeing to meet on their schedule'], answer: 0, explain: 'A better alternative raises your walk-away point and makes you credible.' }
      ],
      challenge: {
        title: 'Prepare to renew your office lease',
        prompt: `Your 40-person company’s office lease ends in 4 months. The landlord proposes a 5-year renewal at $55 per sq ft (you pay $48 now) for 10,000 sq ft. A comparable building two streets away has offered $50 per sq ft, but moving would cost about $150,000 (fit-out, IT, downtime). You expect to grow to 55 people in 2 years. Prepare: your interests, the landlord’s likely interests, your BATNA and reservation price, the likely ZOPA, and an opening plan.`,
        hints: ['Convert the moving cost into a per-sq-ft-per-year figure over 5 years.', 'An empty floor costs the landlord months of zero rent plus broker fees.', 'Growth is an issue you can trade.'],
        model: `<p><b>Your BATNA:</b> move to the other building at $50. Moving cost = $150,000 ÷ (10,000 sq ft × 5 years) = <b>$3 per sq ft per year</b>. Effective BATNA ≈ <b>$53</b>. Add a little for disruption risk: <b>reservation price ≈ $53–54</b> per sq ft for an equivalent lease.</p><p><b>Landlord’s BATNA:</b> re-let the floor. Likely 6+ months empty plus broker fees and a rent-free incentive for a new tenant. At 10,000 sq ft × $55 ÷ 12 ≈ $46k per month, six empty months ≈ $275k. Their reservation is probably <b>below $50</b> to keep a reliable tenant. So the ZOPA likely spans roughly <b>$49–$54</b>.</p><p><b>Interests.</b> Yours: predictable cost, room to grow to 55 people, minimal disruption. Theirs: occupancy, long-term income, a creditworthy tenant, low re-letting cost.</p><p><b>Opening plan:</b></p><ul><li>Cite objective criteria: the $50 comparable offer and current market vacancy.</li><li>Open at <b>$49</b> with a 5-year term (term length is valuable to them).</li><li>Trade growth: ask for a <b>right of first refusal</b> on the adjacent space and an expansion option at the same rate — cheap for them, valuable to you.</li><li>If they hold above $52, ask for 3 months rent-free or a fit-out contribution instead of moving on price.</li><li>Walk away (and sign the other building) above about $54 effective.</li></ul><p><b>Recommendation:</b> aim for $50–51 with an expansion option; your preparation shows that staying is worth up to about $53, and the landlord gains more from keeping you than from a vacancy.</p>`
      },
      takeaways: [
        'Dig beneath positions to interests — that is where solutions hide.',
        'Your BATNA is your power; improve it before you negotiate.',
        'Reservation price = BATNA adjusted for risk, timing and non-price factors.',
        'ZOPA defines what is possible; the negotiation decides how the surplus is split.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'negotiation-2',
      title: 'Distributive bargaining: anchors, first offers and concessions',
      level: 'Beginner',
      minutes: 14,
      hook: `When the only issue is price, every dollar you concede is a dollar they keep — so the first number and the rhythm of concessions matter enormously.`,
      eli5: `At a market stall, the seller says a scarf costs $40. You think it is worth $15. You offer $15, they say $35, you say $20, they say $30… and you end up around $25 — right in the middle. Notice that if the seller had started at $60, the "middle" would have been higher. That first number is the <b>anchor</b>, and the way each side gives ground step by step is the <b>concession pattern</b>.`,
      blocks: [
        {
          type: 'text', title: 'Claiming value',
          html: `<p><b>Distributive</b> (or "win-lose") bargaining is about dividing a fixed amount: the price of a used car, a one-off settlement, a commission rate. The ZOPA is set; the fight is over where inside it the deal lands.</p><p>Even in deals with many issues, there is always a distributive moment. Strong negotiators create value <i>and</i> claim their fair share of it. Pure "nice" negotiators often create value and then give it all away.</p>`
        },
        {
          type: 'framework', name: 'The first-offer playbook', by: 'Built on anchoring research (Tversky & Kahneman 1974; Galinsky & Mussweiler 2001)', when: 'Single-issue or price-heavy negotiations',
          steps: [
            { label: '1. Decide who should go first', desc: 'If you know the market well, go first: research shows first offers anchor final outcomes. If you know little, let them go first — their offer reveals information.' },
            { label: '2. Be ambitious but justifiable', desc: 'Aim near the edge of what you can defend with objective reasons. An absurd anchor damages trust and can end the talks.' },
            { label: '3. Use a precise number', desc: 'A precise offer ($4,850) signals research and draws smaller counter-moves than a round one ($5,000).' },
            { label: '4. Justify, then stop talking', desc: 'Give the reason ("based on three comparable sales") and let silence do its work.' },
            { label: '5. Neutralise their anchor', desc: 'If they open first and extreme, do not counter from it. Name it as off-market, restate your criteria and re-anchor with your own number.' }
          ]
        },
        {
          type: 'formula', name: 'The midpoint tendency',
          expr: 'Likely settlement ≈ (your first offer + their first offer) ÷ 2, if it lies inside the ZOPA',
          explain: `Many single-issue negotiations end near the midpoint of the two opening offers, because both sides expect roughly symmetrical concessions. This is why your opening offer matters so much: moving it moves the midpoint. It is a tendency, not a law — a much stronger BATNA pulls the deal toward you.`,
          example: `Buying a used van. You open at $18,000; the seller opened at $26,000. Midpoint = <b>$22,000</b>. If your research shows a fair market range of $20,500–$22,500 and you opened at $16,000 instead, the midpoint drops to $21,000 — but only if $16,000 is still credible, or the seller may walk away.`
        },
        { type: 'interactive', widget: 'negotiation-zopa', title: 'Feel the pull of an anchor', note: 'Keep both walk-away prices fixed and move only the seller\'s opening ask from $130k to $190k. Where does the likely settlement land?' },
        {
          type: 'compare', title: 'Concession patterns and what they signal', headers: ['Pattern', 'Example (your moves)', 'What the other side hears'],
          rows: [
            ['Shrinking steps', '$4,000 → $2,000 → $1,000 → $500', '"We are approaching their limit." Most effective.'],
            ['Equal steps', '$1,000 → $1,000 → $1,000', '"Keep pushing; the next $1,000 is coming."'],
            ['One big move then nothing', '$6,000 → 0 → 0', '"They had lots of room" — then frustration and deadlock.'],
            ['Growing steps', '$500 → $1,000 → $2,000', '"Pressure works; push harder." Worst pattern.'],
            ['Conditional concession', '"If you can do 3-year term, I can move $1,000."', 'A trade, not a gift. Protects value.']
          ]
        },
        {
          type: 'case', company: 'NBA and the players’ union', year: '2011', title: 'The 2011 lockout: splitting the revenue pie',
          situation: `The NBA’s collective bargaining agreement expired in mid-2011. Owners said many teams were losing money and wanted a bigger share of "basketball-related income" (BRI); under the old deal players received 57%. The owners locked the players out from July 2011.`,
          decision: `Months of bargaining focused on a classic distributive issue — the percentage split of BRI — alongside system issues like the salary cap. Games were cancelled as talks stalled, raising costs for both sides.`,
          outcome: `A deal was reached in late November 2011. Players’ share fell to a band of roughly 49–51% of BRI, and the season was shortened from 82 to 66 games, starting on Christmas Day.`,
          lesson: `In distributive fights, deadlines and the cost of no-deal (lost games for both sides) drive the endgame. Both sides lost revenue while discovering where the ZOPA was — a cost that better preparation and earlier information sharing can reduce.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Endgame traps',
          html: `<ul><li><b>Splitting the difference</b> too early rewards whoever anchored more aggressively.</li><li><b>The nibble:</b> after agreement, "just one more small thing". Respond with a trade ("Sure, if…") or "that was not part of our deal".</li><li><b>The winner’s curse:</b> if your first offer is instantly accepted, you probably offered too much. Prepare so this does not happen.</li><li><b>Deadline pressure:</b> deadlines speed concessions — make sure the deadline is real, and whose problem it is.</li></ul>`
        },
        {
          type: 'scenario',
          prompt: `A supplier opens at $120 per unit for a component. Your research says the market range is $78–$90. What do you do?`,
          options: [
            { text: 'Counter at $105 to show good faith.', feedback: 'Countering near their anchor accepts it as the reference point and puts the midpoint far above the market.', good: false },
            { text: 'Say $120 is well outside the market, show your benchmark data, and re-anchor at $79.', feedback: 'Right. You refuse their anchor, give objective criteria and set your own reference point.', good: true },
            { text: 'Ask them to "sharpen their pencil" and wait for a better offer.', feedback: 'You learn little and leave their anchor standing. Better to re-anchor with evidence.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Distributive bargaining', def: 'Negotiation over a fixed amount where one side’s gain is the other’s loss.' },
        { term: 'Anchor', def: 'A first number that pulls the other side’s judgement and the final outcome toward it.' },
        { term: 'Counter-anchor', def: 'Rejecting an extreme opening and replacing it with your own justified reference point.' },
        { term: 'Concession pattern', def: 'The size and sequence of moves each side makes, which signals how close they are to their limit.' },
        { term: 'Nibble', def: 'A request for a small extra concession after the deal seems agreed.' },
        { term: 'Winner’s curse', def: 'The regret of having an offer accepted immediately, suggesting you gave away too much.' }
      ],
      quiz: [
        { q: 'You open at $50k; they open at $80k. Both reservation prices lie between. Where is the deal most likely to land if concessions are symmetrical?', options: ['$50k', '$80k', '$65k', '$72k'], answer: 2, explain: 'Midpoint of the openings: (50 + 80) ÷ 2 = $65k.' },
        { q: 'Which concession pattern best signals you are near your limit?', options: ['$500, $1,000, $2,000', '$4,000, $2,000, $1,000, $500', '$1,000, $1,000, $1,000', '$0, $0, $6,000'], answer: 1, explain: 'Shrinking steps communicate that room is running out.' },
        { q: 'When is it usually better to let the other side make the first offer?', options: ['When you have little information about value', 'When you know the market very well', 'Always', 'Never'], answer: 0, explain: 'If you lack information, their offer reveals it and protects you from under-anchoring.' },
        { q: 'Your first offer is accepted instantly. What does this most likely indicate?', options: ['You negotiated brilliantly', 'They are irrational', 'The ZOPA was zero', 'You may have offered too much (winner’s curse)'], answer: 3, explain: 'Instant acceptance suggests your offer was better for them than they expected.' },
        { q: 'In the 2011 NBA lockout, what was the central distributive issue?', options: ['Stadium locations', 'The split of basketball-related income between players and owners', 'Television technology', 'International expansion'], answer: 1, explain: 'The BRI split, which moved from 57% to about 49–51% for players.' }
      ],
      challenge: {
        title: 'Buy the delivery van',
        prompt: `You need a used delivery van. The dealer lists it at $31,500. Research: three comparable vans sold in the last month for $26,000, $27,200 and $28,100. Your BATNA is a slightly older van from another dealer for $25,500, which would need about $1,500 of repairs. Plan your opening, concession pattern and walk-away, and script your first two moves.`,
        hints: ['Turn your BATNA into an equivalent price for this van.', 'Your opening should be ambitious but defensible from the comparables.', 'Plan shrinking concessions that end at your target, not your limit.'],
        model: `<p><b>Reservation price.</b> BATNA = $25,500 + $1,500 repairs = $27,000 for an older van. This van is newer; you might pay up to about <b>$28,000</b> for it. Walk away above that.</p><p><b>Target:</b> the comparable median, <b>$27,200</b>. <b>Opening:</b> <b>$25,900</b> — precise, below the lowest comparable but defensible (the $26,000 sale plus a small negotiation margin).</p><p><b>Planned concessions</b> (shrinking): $25,900 → $26,600 (+700) → $26,950 (+350) → $27,150 (+200) → final $27,250 (+100) if needed. Each move tied to a trade where possible (e.g. "if you include a full service and new tyres").</p><p><b>Script.</b> Move 1: "I have looked at three comparable sales in the last month — $26,000, $27,200 and $28,100. Given the mileage, I can offer <b>$25,900</b> today." Then stop talking. Move 2 (after their counter, say $30,500): "That is above every recent sale. I can move to $26,600 if you include the service and a 3-month warranty."</p><p><b>Recommendation:</b> expect to close around $27,000–27,300; walk to the other dealer above $28,000.</p>`
      },
      takeaways: [
        'In price fights, the first credible number shapes the outcome — prepare to set it.',
        'Never counter from an extreme anchor; re-anchor with objective criteria.',
        'Concede in shrinking steps and trade rather than give.',
        'Deadlines and the cost of no-deal drive the endgame.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'negotiation-3',
      title: 'Integrative negotiation: creating value with trades, packages and contingencies',
      level: 'Intermediate',
      minutes: 17,
      hook: `The best deals are not won by squeezing the other side — they are designed so both sides get more than they thought possible.`,
      eli5: `You and your friend are swapping lunch. You love crisps but don’t care about apples; your friend loves apples and is not fussed about crisps. Swap your apple for their crisps and you are both happier — nobody lost anything. That is <b>integrative</b> negotiation: find the things you value differently and trade them, so the "pie" gets bigger before you split it.`,
      blocks: [
        {
          type: 'framework', name: 'Five sources of joint value', by: 'Integrative bargaining research (Walton & McKersie 1965; Lax & Sebenius; Raiffa)', when: 'Any deal with more than one issue — which is almost every deal',
          steps: [
            { label: '1. Different priorities → logrolling', desc: 'Trade issues you care less about for ones you care more about. Payment terms for price, volume for delivery speed.' },
            { label: '2. Different forecasts → contingent contracts', desc: 'If you disagree about the future, bet on it: earn-outs, performance bonuses, price adjustments tied to a measurable outcome.' },
            { label: '3. Different risk attitudes', desc: 'Let the less risk-averse party bear more risk in exchange for more upside (fixed fee vs revenue share).' },
            { label: '4. Different time preferences', desc: 'One side wants cash now, the other can wait: shift payments in time.' },
            { label: '5. Shared or complementary capabilities', desc: 'Add issues that create value for both — co-marketing, data sharing, joint IP.' }
          ]
        },
        {
          type: 'formula', name: 'Logrolling: value created by a trade',
          expr: 'Joint gain = (value to receiver − cost to giver) summed over every issue traded',
          explain: `A concession creates value whenever it is worth more to the side receiving it than it costs the side giving it. Add up the differences across issues. A good package trades your low-cost issues for their high-value ones and vice versa.`,
          example: `Buyer and supplier. Faster delivery is worth $50k a year to the buyer and costs the supplier $10k. 60-day payment terms (instead of 30) are worth $40k to the supplier’s cash flow and cost the buyer $8k. Trading both creates (50 − 10) + (40 − 8) = <b>$72k</b> a year of joint value — before anyone argues about price.`
        },
        {
          type: 'compare', title: 'Integrative tools', headers: ['Tool', 'How it works', 'Example'],
          rows: [
            ['Packaging', 'Negotiate all issues together; never close issues one by one', '"Nothing is agreed until everything is agreed"'],
            ['MESO', 'Multiple Equivalent Simultaneous Offers: present 2–3 packages equally good for you; see which they choose', 'A: $100k, 30-day terms. B: $104k, 60-day. C: $97k, 2-year commitment'],
            ['Contingent contract', 'Tie payment to an outcome both can observe', 'Acquisition earn-out based on next year’s revenue'],
            ['Post-settlement settlement', 'After agreeing, ask: "Is there a deal that is better for both of us?"', 'Swap delivery schedule for a small price change'],
            ['Bridging', 'Invent a new option that meets both sides’ core interests', 'Camp David: sovereignty + demilitarisation']
          ]
        },
        {
          type: 'case', company: 'Disney and Pixar', year: '2004–2006', title: 'From broken partnership to acquisition',
          situation: `Pixar’s films were distributed by Disney under a co-financing deal. In 2004 talks to renew it broke down between Pixar CEO Steve Jobs and Disney CEO Michael Eisner, and Pixar said it would look for other partners after its remaining films. Disney’s own animation studio was struggling.`,
          decision: `After Bob Iger became Disney CEO in 2005, he reopened talks and proposed buying Pixar outright. Key interests went beyond price: Pixar’s leaders wanted to protect its creative culture; Disney needed to revive animation. The deal was paid in Disney stock, and Iger agreed to a set of commitments to preserve Pixar’s identity and way of working. Ed Catmull and John Lasseter were given leadership of both Pixar and Disney Animation.`,
          outcome: `Announced in January 2006 as an all-stock deal valued at about $7.4 billion, it made Jobs Disney’s largest individual shareholder. Disney Animation later recovered with films such as <i>Tangled</i> and <i>Frozen</i>, while Pixar kept producing hits.`,
          lesson: `The deal created value by trading on different interests: Disney paid with stock (aligning Jobs with Disney’s future), and gave culture and leadership commitments that cost Disney little but were essential to Pixar. Price alone could not have closed it.`
        },
        {
          type: 'formula', name: 'Contingent contract (earn-out)',
          expr: 'Total price = upfront payment + earn-out tied to a measurable future result',
          explain: `When buyer and seller disagree about the future, arguing over the forecast is a dead end. A contingent contract lets each side "bet" on its own belief. Design it on metrics that are hard to manipulate, over a short period, with clear accounting rules — earn-outs are a frequent source of later disputes.`,
          example: `The seller expects next year’s EBITDA of $10M; the buyer expects $6M. At an 8× multiple they value the business at $80M vs $48M — no ZOPA. Deal: <b>$50M upfront + 8× every $1M of EBITDA above $6M</b>, capped at $32M. If EBITDA is $10M, total = 50 + 32 = $82M; if $6M, total = $50M. Each side gets its price in the world it believes in.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Score packages before you offer them', note: 'Use the criteria as negotiation issues (price, payment terms, contract length, service level) and weight them by how much you care. Build three packages with the same total score — that is your MESO.'
        },
        {
          type: 'scenario',
          prompt: `You are negotiating a software contract. The customer insists on a 20% discount. You know their budget closes in 3 weeks and they want a fast rollout. Your implementation team has spare capacity this month. What do you propose?`,
          options: [
            { text: 'Give 20% to close before quarter-end.', feedback: 'You give away value without learning or trading.', good: false },
            { text: 'Offer three equivalent packages: 8% off with a 3-year term; 5% off plus free accelerated implementation; list price with premium support included.', feedback: 'Right — a MESO. Their choice reveals priorities, and every package is equally good for you. Spare implementation capacity is cheap for you and valuable to them.', good: true },
            { text: 'Refuse any discount on principle.', feedback: 'You may lose a deal where cheap-to-give issues could have bridged the gap.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Integrative negotiation', def: 'Negotiation that creates joint value by finding trades and options that benefit both sides.' },
        { term: 'Logrolling', def: 'Trading concessions on issues you value less for gains on issues you value more.' },
        { term: 'Package deal', def: 'Negotiating several issues together so trade-offs across them are possible.' },
        { term: 'MESO', def: 'Multiple Equivalent Simultaneous Offers — several packages of equal value to you, offered at once.' },
        { term: 'Contingent contract', def: 'An agreement whose terms depend on a future, measurable event.' },
        { term: 'Earn-out', def: 'Part of an acquisition price paid later only if the business hits agreed targets.' },
        { term: 'Post-settlement settlement', def: 'Looking for a mutually better deal after a first agreement is reached.' }
      ],
      quiz: [
        { q: 'A 2-year contract is worth $30k to the supplier and costs you $5k in flexibility. Quick payment is worth $20k to the supplier and costs you $12k. Trading both creates how much joint value?', options: ['$50k', '$17k', '$33k', '$25k'], answer: 2, explain: '(30 − 5) + (20 − 12) = 25 + 8 = $33k.' },
        { q: 'Earn-out: $50M upfront + 8× each $1M of EBITDA above $6M (cap $32M). Actual EBITDA: $8M. Total price?', options: ['$66M', '$58M', '$82M', '$64M'], answer: 0, explain: 'Earn-out = 8 × (8 − 6) = $16M. Total = $50M + $16M = $66M.' },
        { q: 'What is the main purpose of a MESO?', options: ['To confuse the other side', 'To reveal their priorities while offering packages equally good for you', 'To set a very high anchor', 'To avoid discussing price'], answer: 1, explain: 'Their choice among equivalent offers tells you what they value.' },
        { q: 'Two parties disagree strongly about next year’s sales. Which tool fits best?', options: ['Splitting the difference', 'Walking away', 'A higher anchor', 'A contingent contract'], answer: 3, explain: 'Contingent terms let each side bet on its own forecast.' },
        { q: 'Why did stock consideration help the Disney–Pixar deal?', options: ['Stock is always cheaper than cash', 'It avoided any price negotiation', 'It aligned Pixar’s owners with Disney’s future success', 'It was required by law'], answer: 2, explain: 'Paying in stock made Jobs and other Pixar holders part-owners of the combined company.' }
      ],
      challenge: {
        title: 'Design a distribution deal',
        prompt: `Your food start-up wants a national retailer to stock its snacks. Issues: wholesale price (you want $2.40/unit, they want $2.00), payment terms (you want 30 days, they want 90), shelf placement (eye-level vs bottom shelf), exclusivity (they want 12 months’ exclusivity) and promotional funding. Your notes: each 10 cents of price is worth $60k a year to you; moving from 30 to 90 days costs you about $40k a year in financing; eye-level placement is worth about $150k a year to you in extra sales; exclusivity costs you little this year because no other retailer is close to signing. Design a MESO with three packages and explain the logic.`,
        hints: ['Rank issues by value to you and estimated value to them.', 'Exclusivity is cheap for you — use it as currency.', 'Make each package roughly equal in value to you.'],
        model: `<p><b>Value to you (per year):</b> price $60k per 10c; payment terms 30 → 90 days costs $40k; eye-level placement +$150k; exclusivity ≈ $0–20k cost this year.</p><p><b>Likely value to them:</b> price and payment terms (margin, cash), exclusivity (differentiation), and low promotional spend.</p><p><b>Cost to you of each concession vs your ideal</b> ($2.40, 30 days, eye-level, no exclusivity, no promo money): price $6k per cent off; 60-day terms ≈ $20k; 90-day terms ≈ $40k; 12-month exclusivity ≈ $10k; a promotional contribution costs what you pay.</p><p><b>MESO (each costs you about $70k a year):</b></p><table><thead><tr><th></th><th>Price</th><th>Terms</th><th>Exclusivity</th><th>Promo funding</th><th>Cost to you</th></tr></thead><tbody><tr><td>A</td><td>$2.30</td><td>30 days</td><td>12 months</td><td>None</td><td>$60k + $10k = $70k</td></tr><tr><td>B</td><td>$2.35</td><td>90 days</td><td>None</td><td>None</td><td>$30k + $40k = $70k</td></tr><tr><td>C</td><td>$2.40</td><td>90 days</td><td>12 months</td><td>$20k from you</td><td>$40k + $10k + $20k = $70k</td></tr></tbody></table><p>Eye-level placement is included in all three. Their choice tells you whether they care most about unit price (A), cash flow (B) or exclusivity plus marketing support (C).</p><p><b>Logic:</b> eye-level placement (+$150k) is non-negotiable in every package because it is worth more to you than any price point; exclusivity is your cheapest currency, so it appears in two packages. Keep every package above your walk-away — a total concession of more than about $150k would wipe out the value of the deal’s placement.</p><p><b>Recommendation:</b> lead with the MESO, listen to their choice, then do a post-settlement check: "Is there anything that would make this better for both of us?"</p>`
      },
      takeaways: [
        'Most deals have several issues — package them and trade across them.',
        'Value is created wherever an issue is worth more to one side than it costs the other.',
        'Use contingent contracts to bridge different forecasts.',
        'MESOs reveal priorities without giving away value.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'negotiation-4',
      title: 'The psychology of influence: persuasion, ethics and biases at the table',
      level: 'Intermediate',
      minutes: 15,
      hook: `People say yes for reasons they rarely notice — understanding those reasons makes you more persuasive and much harder to manipulate.`,
      eli5: `Why do you want the toy all your friends have? Why does a "last one left!" sign make a sweet seem tastier? Why do you find it hard to say no to a friend who just did you a favour? Our brains use shortcuts to decide quickly. Persuaders use those shortcuts — some fairly, some sneakily. Learning them is like learning how magic tricks work: you enjoy the show but you cannot be fooled as easily.`,
      blocks: [
        {
          type: 'framework', name: 'Seven principles of influence', by: 'Robert Cialdini, Influence (1984); unity added in Pre-Suasion (2016)', when: 'To persuade ethically — and to spot when you are being steered',
          steps: [
            { label: '1. Reciprocity', desc: 'We feel obliged to return favours. Give first: useful data, a concession, a referral. Defence: accept gifts, but judge the deal on its merits.' },
            { label: '2. Commitment and consistency', desc: 'Once people commit (especially in writing or in public), they act consistently. Get small agreements early ("We both want this live by March, right?").' },
            { label: '3. Social proof', desc: 'We follow what similar others do. Cite comparable clients or peers.' },
            { label: '4. Authority', desc: 'We defer to credible expertise. Show credentials and data before the ask.' },
            { label: '5. Liking', desc: 'We say yes to people we like: similarity, genuine compliments, cooperation toward shared goals.' },
            { label: '6. Scarcity', desc: 'Things seem more valuable when rare or about to disappear. Only honest scarcity is ethical — and false deadlines are a classic trick.' },
            { label: '7. Unity', desc: 'Shared identity ("we are both founders", "fellow alumni") is stronger than mere liking.' }
          ]
        },
        {
          type: 'case', company: 'UK Behavioural Insights Team and HMRC', year: '2011–2012', title: 'One sentence that collected more tax',
          situation: `The UK tax authority (HMRC) sent reminder letters to people who had not paid their income tax on time. Standard letters stressed rules and penalties.`,
          decision: `Working with the government’s Behavioural Insights Team, HMRC ran randomised trials of different wordings. Some letters added a <b>social norm</b>: that most people in the UK — or in the recipient’s own area — pay their tax on time.`,
          outcome: `The social-norm letters increased the share of people paying within the following weeks compared with the standard letter, bringing forward millions of pounds in revenue at almost no cost. The team published the results.`,
          lesson: `Social proof is powerful, especially when the group is similar to the reader. It was tested with randomised trials (see Data & Decisions) rather than assumed — a model for ethical influence.`
        },
        {
          type: 'compare', title: 'Biases that distort negotiators', headers: ['Bias', 'What happens at the table', 'Antidote'],
          rows: [
            ['Fixed-pie bias', 'Assuming their gain must be your loss, so you never look for trades', 'Ask about priorities; propose packages'],
            ['Anchoring', 'Over-weighting the first number heard', 'Set your reservation price in writing before the meeting'],
            ['Reactive devaluation', 'Discounting a proposal because the other side made it', 'Ask "would I like this if a neutral party suggested it?"'],
            ['Overconfidence', 'Over-estimating your chance of winning in court or the market', 'Get an outside view; estimate base rates'],
            ['Escalation of commitment', 'Refusing to walk away because you have invested so much', 'Re-check your BATNA; ignore sunk costs'],
            ['Framing (loss aversion)', 'Losses loom about twice as large as gains, so "loss" frames make people more risk-seeking', 'Frame your proposal as a gain for them; reframe their losses']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Framing in practice',
          html: `<p>"This contract saves you $200k a year" and "Without this contract you lose $200k a year" describe the same facts. Research by Kahneman and Tversky shows people respond differently: loss frames push decision-makers to take risks to avoid the loss. When you want the other side to accept a sure deal, frame the deal as a <b>sure gain</b> and the alternative (litigation, delay) as a <b>risky gamble</b>.</p>`
        },
        {
          type: 'framework', name: 'An ethics test for persuasion', by: 'Common practice in negotiation ethics teaching', when: 'Before using any tactic you are unsure about',
          steps: [
            { label: 'Transparency test', desc: 'Would I be comfortable if the other side knew exactly what I was doing and why?' },
            { label: 'Reciprocity test', desc: 'Would I accept it as fair if it were done to me?' },
            { label: 'Front-page test', desc: 'Would I be happy to see it described in tomorrow’s newspaper or in a court filing?' },
            { label: 'Legal line', desc: 'Lying about material facts (not just your reservation price) can be fraud. "We have another offer" when you do not may cross that line.' },
            { label: 'Relationship test', desc: 'Will this tactic damage a relationship I will need next year?' }
          ]
        },
        {
          type: 'flip', title: 'Name the principle',
          cards: [
            { front: '"Only 3 seats left at this price — offer ends Friday."', back: 'Scarcity (check whether it is real).' },
            { front: '"Twelve of the top 20 banks use our platform."', back: 'Social proof.' },
            { front: 'A supplier sends a detailed free market report before the pitch.', back: 'Reciprocity.' },
            { front: '"You said earlier speed matters most — this option is fastest."', back: 'Commitment and consistency.' },
            { front: '"As fellow family-business owners, we both know…"', back: 'Unity.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `A vendor’s rep says: "My manager will kill me, but if you sign today I can do 25% off. Tomorrow the price goes back up." You have not finished comparing alternatives. What do you do?`,
          options: [
            { text: 'Sign — 25% is a great discount.', feedback: 'Scarcity and a possibly false deadline are pushing you to skip your own process.', good: false },
            { text: 'Thank them, say your decision date is next Thursday after your evaluation, and ask them to put the 25% offer in writing valid to that date.', feedback: 'Right. You name the deadline tactic politely, keep your process and test whether the scarcity is real.', good: true },
            { text: 'Accuse them of manipulation.', feedback: 'Calling out tactics aggressively damages the relationship; a calm process answer is enough.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Reciprocity', def: 'The urge to return favours and concessions.' },
        { term: 'Social proof', def: 'Using what similar others do as a guide to what is right.' },
        { term: 'Commitment and consistency', def: 'The tendency to act in line with what we have already said or done.' },
        { term: 'Reactive devaluation', def: 'Valuing a proposal less simply because the other side offered it.' },
        { term: 'Fixed-pie bias', def: 'The false belief that the other side’s interests are directly opposed to yours on every issue.' },
        { term: 'Loss aversion', def: 'Losses feel larger than equivalent gains, which shifts how people respond to framing.' },
        { term: 'Escalation of commitment', def: 'Continuing a failing course because of what has already been invested.' }
      ],
      quiz: [
        { q: 'A letter says "9 out of 10 people in your town pay on time." Which principle is this?', options: ['Authority', 'Scarcity', 'Reciprocity', 'Social proof'], answer: 3, explain: 'It uses the behaviour of similar others as a norm.' },
        { q: 'Your team rejects a compromise mainly because the rival proposed it. This is…', options: ['Reactive devaluation', 'Anchoring', 'Social proof', 'Loss aversion'], answer: 0, explain: 'Reactive devaluation discounts an idea because of its source.' },
        { q: 'Which is the most ethical use of scarcity?', options: ['Inventing a rival bidder', 'Stating a real capacity limit, with evidence', 'Setting a fake midnight deadline', 'Hiding the price until the last minute'], answer: 1, explain: 'Scarcity is ethical only when true and verifiable.' },
        { q: 'You want the other side to accept a certain settlement rather than go to trial. How should you frame it?', options: ['As a loss they must accept', 'As a gamble', 'As a sure gain compared with a risky trial', 'Do not frame it at all'], answer: 2, explain: 'People are more risk-averse when choices are framed as gains.' },
        { q: 'A negotiator keeps raising a bid because they have already spent 6 months on the deal. This is…', options: ['Commitment and consistency used well', 'Integrative bargaining', 'Good BATNA management', 'Escalation of commitment'], answer: 3, explain: 'Sunk time should not raise your walk-away; only the future matters.' }
      ],
      challenge: {
        title: 'Persuade a reluctant board — ethically',
        prompt: `You lead procurement at a hospital group. You want the board to approve switching to a new supplier of surgical supplies that is 8% cheaper (about $1.2M a year) with equal quality in a 6-month pilot at one hospital. The board is cautious: the current supplier has served them for 15 years and its CEO is friendly with two board members, who have praised it publicly. Plan a persuasion approach using at least four influence principles ethically, address the board’s likely biases, and state what you will not do.`,
        hints: ['Think about which biases the board members are prone to (commitment, liking).', 'What evidence counts as authority and social proof here?', 'How do you frame the decision?'],
        model: `<p><b>Diagnose the resistance.</b> Commitment and consistency (two members praised the incumbent publicly), liking (relationship with its CEO), and loss aversion (fear of a quality failure).</p><p><b>Approach:</b></p><ul><li><b>Authority:</b> present the pilot data with the chief surgeon and head of infection control, who signed off on quality equivalence.</li><li><b>Social proof:</b> cite comparable hospital groups that use the new supplier (verified references).</li><li><b>Commitment (ethically):</b> remind the board of its own public goal to reduce costs without compromising care, and show this decision is consistent with it. Give the two members a face-saving path: "The incumbent served us well; markets have changed."</li><li><b>Framing:</b> present $1.2M a year as funding for specific patient services (gain), and the status quo as an ongoing $1.2M cost — but give the honest risk picture.</li><li><b>Reduce perceived risk:</b> propose a phased roll-out (one more hospital per quarter) with a quality trigger to revert, and invite the incumbent to re-bid — fairness also counters reactive devaluation.</li></ul><p><b>What I will not do:</b> exaggerate the savings, hide the pilot’s limitations, lobby members privately with selective data, or invent urgency.</p><p><b>Recommendation:</b> request approval for a staged switch with clear quality gates and a final competitive re-bid — the ethical, persuasive path that also protects the board’s reputation.</p>`
      },
      takeaways: [
        'Reciprocity, commitment, social proof, authority, liking, scarcity and unity drive most "yes" decisions.',
        'Use influence only in ways you would be happy for the other side to see.',
        'Name and neutralise biases: fixed pie, anchoring, reactive devaluation, escalation.',
        'Frame sure deals as gains; test persuasion with evidence where you can.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'negotiation-5',
      title: 'Multi-party, team and cross-cultural negotiation',
      level: 'Advanced',
      minutes: 17,
      hook: `Add a third party, an internal team or a different culture and the simple two-person model breaks — coalitions, back-channels and unspoken rules start deciding the outcome.`,
      eli5: `Picking a film with one friend is easy: you trade "your choice tonight, mine next week". With five friends it gets messy — two team up, one sulks, someone’s parent has the final say. And if a new friend comes from a family where saying "no" directly is rude, you may think they agreed when they did not. Big negotiations are like that: more people, side deals, and different rules about how to talk.`,
      blocks: [
        {
          type: 'text', title: 'Why more parties change everything',
          html: `<p>With two parties, there is one relationship and one ZOPA. With five, there are ten pairs of relationships, shifting coalitions, and agreements that can be blocked by any party with veto power.</p><ul><li><b>Coalitions:</b> parties combine to reach a winning or blocking position.</li><li><b>Process matters more:</b> who sets the agenda, who drafts the text and what decision rule applies (unanimity, majority) can decide the result.</li><li><b>Internal negotiations:</b> every "side" is itself a team with different interests. Often the hardest negotiation is inside your own organisation.</li></ul>`
        },
        {
          type: 'framework', name: 'Managing a multi-party negotiation', by: 'Synthesis of practice (Sebenius’s 3-D negotiation; consensus-building literature)', when: 'Joint ventures, consortia, union talks, regulatory processes, internal budget fights',
          steps: [
            { label: '1. Map the parties', desc: 'Who decides, who influences, who can block? Draw the full table, including parties who are not in the room (boards, regulators, voters).' },
            { label: '2. Sequence the talks', desc: 'Whom do you approach first? Early commitments from respected parties create momentum — the order can change the outcome.' },
            { label: '3. Build and protect coalitions', desc: 'Find parties with aligned interests. Watch for rivals building blocking coalitions.' },
            { label: '4. Control the process', desc: 'Volunteer to draft the single text, propose the agenda and the decision rule. Process power is real power.' },
            { label: '5. Use back-channels carefully', desc: 'Private conversations can explore options without public loss of face — but keep them consistent with the main channel or trust collapses.' }
          ]
        },
        {
          type: 'case', company: 'United States and the Soviet Union', year: 'October 1962', title: 'The Cuban Missile Crisis back-channel',
          situation: `US reconnaissance found Soviet nuclear missile sites in Cuba. For 13 days the world faced the risk of nuclear war. President Kennedy’s advisers (the ExComm) were divided between air strikes and a naval "quarantine". Soviet leader Nikita Khrushchev sent two letters: a conciliatory one offering to remove the missiles in exchange for a US pledge not to invade Cuba, and a tougher one adding the removal of US Jupiter missiles from Turkey.`,
          decision: `Kennedy publicly answered the first letter, accepting the no-invasion pledge. Privately, his brother Robert Kennedy met Soviet Ambassador Anatoly Dobrynin and conveyed that the Jupiter missiles in Turkey would be removed later — on condition that this part stayed secret.`,
          outcome: `On 28 October Khrushchev announced the missiles would be withdrawn. The US removed the Jupiter missiles from Turkey in the following months. Cuba, a key party, was largely excluded from the deal — which Fidel Castro resented.`,
          lesson: `A back-channel let both leaders make a concession without public loss of face, and responding to the softer of two signals gave the other side an exit. It also shows the risk of leaving parties out of the room.`
        },
        {
          type: 'compare', title: 'Cross-cultural differences that trip up negotiators', headers: ['Dimension', 'One end', 'Other end', 'What to do'],
          rows: [
            ['Communicating', 'Low-context: explicit, say what you mean (US, Netherlands, Germany)', 'High-context: meaning in context and relationship (Japan, China, many Gulf and South Asian cultures)', 'Summarise agreements in writing; listen for what is not said'],
            ['Disagreeing', 'Open confrontation is normal (Israel, France, Germany)', 'Disagreement is indirect to protect harmony (Japan, Thailand, Indonesia)', 'Create private, face-saving ways to say no'],
            ['Trusting', 'Task-based: trust from competence and results', 'Relationship-based: trust from time together, meals, personal ties', 'Invest time before the business agenda'],
            ['Deciding', 'Top-down: the boss decides', 'Consensual: broad agreement first (e.g. Japanese ringi process)', 'Ask how decisions are made; expect different speeds'],
            ['Scheduling', 'Linear time: agendas and deadlines are firm', 'Flexible time: plans adapt to relationships and events', 'Clarify which deadlines are real']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Culture is a starting hypothesis, not a stereotype',
          html: `<p>Frameworks like Edward Hall’s high/low context and Erin Meyer’s <i>The Culture Map</i> (2014) describe <b>averages</b>. The individual across the table may be a Silicon Valley-trained engineer or a third-generation family-business owner. Use culture to prepare questions, then observe the actual person. Organisational culture (a start-up vs a state-owned enterprise) often matters as much as nationality.</p>`
        },
        {
          type: 'framework', name: 'Negotiating as a team', by: 'Common practice in deal and labour negotiations', when: 'Whenever more than one person from your side is at the table',
          steps: [
            { label: 'Align internally first', desc: 'Agree interests, reservation price and trade-offs inside your team before meeting the other side.' },
            { label: 'Assign roles', desc: 'Lead speaker, technical expert, note-taker / observer. One voice on numbers.' },
            { label: 'Agree signals and caucuses', desc: 'Set a signal to call a private break. Never disagree with each other in front of the other side.' },
            { label: 'Debrief after every session', desc: 'What did we learn about their interests? What changed? What do we offer next?' }
          ]
        },
        {
          type: 'scenario',
          prompt: `You lead a three-company consortium bidding for a city transport contract. One partner privately tells the city it would accept a lower price than the consortium agreed. What do you do?`,
          options: [
            { text: 'Ignore it and hope the city does not use it.', feedback: 'The city will use it; your price floor has leaked.', good: false },
            { text: 'Call a private meeting of the consortium to realign on interests, price and communication rules — then present one consistent position.', feedback: 'Right. Coalitions only have power if they hold together. Fix the internal negotiation first.', good: true },
            { text: 'Publicly expel the partner.', feedback: 'You may lose capabilities the bid needs and signal disarray to the city.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Coalition', def: 'A group of parties who combine their power to reach or block an agreement.' },
        { term: 'Blocking coalition', def: 'A group large enough to prevent any agreement it opposes.' },
        { term: 'Back-channel', def: 'A private communication line used alongside formal talks to explore options safely.' },
        { term: 'Single negotiating text', def: 'One draft, revised repeatedly by a facilitator, instead of competing proposals.' },
        { term: 'High-context culture', def: 'A culture where much meaning is carried by context, relationship and what is left unsaid.' },
        { term: 'Caucus', def: 'A private break for one side’s team to confer during a negotiation.' },
        { term: 'Face', def: 'A person’s public dignity and reputation, which they will work hard to protect.' }
      ],
      quiz: [
        { q: 'Three shareholders hold 40%, 35% and 25%. Decisions need more than 50%. Which statement is true?', options: ['The 40% holder controls everything', 'Any two together can win, so all three have similar bargaining power', 'The 25% holder is irrelevant', 'No decision is possible'], answer: 1, explain: '40 + 35, 40 + 25 and 35 + 25 all exceed 50%. Each holder is pivotal in some coalition.' },
        { q: 'In the Cuban Missile Crisis, how was the Turkey missile concession handled?', options: ['Announced publicly by Kennedy', 'Rejected outright', 'Agreed privately through a back-channel and kept secret', 'Decided by the United Nations'], answer: 2, explain: 'Robert Kennedy conveyed it privately to Ambassador Dobrynin on condition of secrecy.' },
        { q: 'A counterpart from a high-context culture says "That may be difficult." This most likely means…', options: ['Probably no', 'Yes', 'They need a lower price', 'They did not understand'], answer: 0, explain: 'In high-context, indirect cultures, "difficult" is often a polite no. Check privately.' },
        { q: 'With 5 parties at the table, how many two-party relationships are there?', options: ['5', '20', '25', '10'], answer: 3, explain: 'n(n − 1) ÷ 2 = 5 × 4 ÷ 2 = 10.' },
        { q: 'The most important rule for a negotiating team at the table is…', options: ['Everyone should make offers', 'Never show disagreement in front of the other side; caucus instead', 'The most junior member leads', 'Avoid breaks'], answer: 1, explain: 'Visible internal disagreement leaks information and weakens your position.' }
      ],
      challenge: {
        title: 'Build a joint venture across three countries',
        prompt: `Your German engineering firm (direct, task-focused, fast decision by the CEO) wants a joint venture with a Japanese component maker (consensus decisions, relationship-first) and an Indian systems integrator (relationship-based, fast-moving, family-controlled). Issues: equity split, who leads technology, where the JV is headquartered, and IP ownership. The Japanese partner has said "we will study it carefully" about your proposed 50/25/25 split. Plan the process: sequencing, coalitions, cultural adjustments and how to read the Japanese response.`,
        hints: ['"We will study it carefully" may be a soft signal.', 'Who should you talk to first and why?', 'Which issues can be traded across partners with different interests?'],
        model: `<p><b>Read the signal.</b> "We will study it carefully" from a consensus-driven, high-context partner likely means the 50/25/25 split is a problem but they will not say so in a group meeting. Follow up privately and indirectly, ideally through a trusted intermediary or one-to-one dinner, and ask which parts need more thought.</p><p><b>Map interests.</b> German firm: technology leadership, IP protection. Japanese firm: quality control, long-term stability, a voice proportional to its components’ importance. Indian firm: market access, speed, a meaningful equity stake and local leadership.</p><p><b>Sequencing.</b> Meet the Japanese partner first, one-to-one and early, because consensus takes time and they need to build agreement internally (nemawashi). Then the Indian family owners in person, with time for relationship-building. Bring all three together only to confirm a single draft text.</p><p><b>Trades (logrolling across partners).</b></p><ul><li>Equity 40/30/30 instead of 50/25/25, in exchange for German technology leadership and German-held core IP licensed to the JV.</li><li>Japanese partner gets a quality veto and the head of manufacturing.</li><li>Indian partner gets the JV headquarters and CEO, with fast local decision rights within a budget.</li></ul><p><b>Process:</b> propose that your firm drafts the single negotiating text; set an agreed timetable that allows Japanese internal consensus; confirm every meeting in a written summary (protects against misunderstandings in high-context exchanges).</p><p><b>Recommendation:</b> concede on equity split, which matters symbolically to partners, to secure what you value most — technology leadership and IP — and invest early time in relationships before the formal rounds.</p>`
      },
      takeaways: [
        'In multi-party deals, map who can decide and who can block — then sequence your approaches.',
        'Process power (agenda, drafting, decision rule) shapes outcomes.',
        'Back-channels help parties concede without losing face; keep them consistent.',
        'Use culture to prepare questions, not to stereotype the person in front of you.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'negotiation-6',
      title: 'Hard situations: power gaps, pay talks, dirty tricks and disputes',
      level: 'Advanced',
      minutes: 18,
      hook: `The real test of a negotiator is not a friendly deal between equals — it is the moment you are weaker, under pressure, or facing someone who plays dirty.`,
      eli5: `Imagine a much bigger kid wants your football. You are weaker, so a straight fight is a bad idea. But you have options: find other kids who want to play fairly (allies), point to the playground rules (fair standards), offer to share in a way that suits both, or call a teacher to help (a mediator). Negotiating from weakness is about changing the game, not shouting louder.`,
      blocks: [
        {
          type: 'framework', name: 'Negotiating from the weaker position', by: 'Synthesis of negotiation research and practice', when: 'Small supplier vs giant retailer, start-up vs incumbent, employee vs employer',
          steps: [
            { label: '1. Improve your BATNA', desc: 'Even a modest alternative (another customer, another job offer) changes your behaviour and their perception.' },
            { label: '2. Weaken their alternatives, honestly', desc: 'Show what makes you hard to replace: switching costs, unique IP, speed, a relationship with their customers.' },
            { label: '3. Build coalitions', desc: 'Join with others in the same position: buying groups, industry associations, co-investors.' },
            { label: '4. Appeal to norms and criteria', desc: 'Big players care about reputation and fairness standards — market rates, published policies, regulation.' },
            { label: '5. Change the game', desc: 'Add issues, bring in new parties, or change the timing. Do not accept the frame that only price matters.' }
          ]
        },
        {
          type: 'case', company: 'Apple and Qualcomm', year: '2017–2019', title: 'A global legal war that ended in a morning',
          situation: `In 2017 Apple sued Qualcomm over modem-chip licensing fees, Apple’s contract manufacturers stopped paying Qualcomm royalties, and Qualcomm counter-sued in courts around the world, seeking import bans on some iPhones. Apple had moved to Intel as its modem supplier, but needed 5G modems for future iPhones.`,
          decision: `As the main US trial opened in San Diego in April 2019, the companies announced a global settlement: all litigation was dropped, Apple made a payment to Qualcomm (amount undisclosed), and they signed a six-year licence (with an option to extend) and a multi-year chip supply agreement.`,
          outcome: `Hours later Intel announced it was exiting the 5G smartphone modem business. Commentators widely concluded that Apple’s BATNA — a credible alternative 5G modem — had weakened. Apple later bought most of Intel’s smartphone modem business to build its own chips.`,
          lesson: `Litigation is a BATNA, not a goal. When one side’s alternative collapses, the ZOPA moves fast. It also shows the long-game response to dependency: build your own alternative.`
        },
        {
          type: 'formula', name: 'Comparing job offers: total compensation',
          expr: 'Annual total comp = base + target bonus + (equity grant ÷ vesting years) + benefits value; signing bonus is one-off',
          explain: `Compare offers on the same basis. Value equity realistically (a private start-up’s options are worth much less than their paper value). Separate one-off cash (signing bonus) from recurring pay, because future raises are usually a percentage of base.`,
          example: `Offer A: $100k base, 10% bonus, $80k equity over 4 years → 100 + 10 + 20 = <b>$130k/year</b>. Offer B: $110k base, 5% bonus, $40k equity over 4 years → 110 + 5.5 + 10 = <b>$125.5k/year</b>. A pays more today; B has a higher base, which compounds through future percentage raises and is more certain.`
        },
        {
          type: 'checklist', title: 'Salary and offer negotiation',
          items: ['Research market ranges (levels, peers, published bands) before any call', 'Delay giving a number; ask for their range first', 'If you must name a number, give a well-researched, precise range with your target at the bottom', 'Get the full offer in writing before negotiating', 'Negotiate the package: base, bonus, equity, signing bonus, title, start date, remote days, learning budget', 'Show enthusiasm for the role while negotiating terms', 'Ask "Is there flexibility on…?" rather than issuing ultimatums', 'Only mention a competing offer if it is real'],
        },
        {
          type: 'compare', title: 'Dirty tricks and how to respond', headers: ['Tactic', 'What it looks like', 'Response'],
          rows: [
            ['Good cop / bad cop', 'One person is hostile, the other "friendly" offers a slightly better deal', 'Name it lightly; treat both as one side; judge offers against your BATNA'],
            ['Limited authority', '"I need to check with my boss" after every concession', 'Confirm who decides at the start; make your concessions conditional on final approval too'],
            ['False deadline / exploding offer', '"This offer expires at 5pm"', 'Ask why; test whether it is real; propose your own timeline'],
            ['Extreme anchor', 'An outrageous first number', 'Do not counter from it; re-anchor with criteria'],
            ['Nibbling', 'Small extra demands after agreement', '"Happy to discuss — what would you give in return?"'],
            ['Personal attacks / stress', 'Uncomfortable rooms, insults, long waits', 'Call a break; address the process; "Let us agree how we will work together."']
          ]
        },
        {
          type: 'compare', title: 'Ways to resolve disputes', headers: ['', 'Negotiation', 'Mediation', 'Arbitration', 'Litigation'],
          rows: [
            ['Who decides', 'The parties', 'The parties, helped by a neutral', 'A private arbitrator', 'A judge or jury'],
            ['Binding?', 'If agreed', 'Only if settlement signed', 'Yes, limited appeal', 'Yes, with appeals'],
            ['Cost and speed', 'Lowest, fastest', 'Low, fast', 'Medium', 'Highest, slowest'],
            ['Confidential?', 'Yes', 'Yes', 'Usually', 'Mostly public'],
            ['Relationship', 'Best preserved', 'Often preserved', 'Strained', 'Often destroyed']
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'Mediation and deals that need enforcement',
          html: `<p><b>NFL lockout, 2011:</b> owners locked out players from March to July 2011. Talks went through the US federal mediation service and then court-ordered mediation, before the sides agreed a 10-year labour deal; only one preseason game was cancelled and no regular-season games were lost.</p><p><b>US–China "Phase One" trade deal, January 2020:</b> China committed to buy an additional $200 billion of US goods and services over two years compared with 2017 levels. Analysis by the Peterson Institute for International Economics found China bought only around three-fifths of the promised amount, partly due to the pandemic. Lesson: purchase commitments with weak enforcement are fragile; design monitoring, triggers and remedies into the deal.</p>`
        },
        {
          type: 'scenario',
          prompt: `A large retailer (40% of your revenue) demands an extra 6% discount at renewal or it will delist you. What is your best plan?`,
          options: [
            { text: 'Accept — you cannot lose 40% of revenue.', feedback: 'You may have to concede something, but accepting immediately teaches them that threats work and leaves value on the table.', good: false },
            { text: 'Quantify what delisting costs them (sales, shopper loyalty, replacement cost), offer value-for-value trades (promotions, exclusive pack sizes, logistics savings), and urgently grow other channels to improve your BATNA.', feedback: 'Right. You challenge the frame, trade instead of conceding, and work on your dependency for the long term.', good: true },
            { text: 'Threaten to pull your products first.', feedback: 'A threat you cannot carry out destroys credibility.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Power asymmetry', def: 'A situation where one side has much stronger alternatives or resources than the other.' },
        { term: 'Total compensation', def: 'The full value of a job package: base, bonus, equity, benefits and one-off payments.' },
        { term: 'Exploding offer', def: 'An offer with a short, often artificial, deadline to prevent comparison shopping.' },
        { term: 'Limited authority', def: 'A tactic where a negotiator claims they cannot approve concessions without someone else.' },
        { term: 'Mediation', def: 'A process where a neutral third party helps the sides reach their own agreement.' },
        { term: 'Arbitration', def: 'A private process where a neutral arbitrator makes a binding decision.' },
        { term: 'Enforcement mechanism', def: 'Terms that monitor and give remedies if a party fails to deliver what it promised.' }
      ],
      quiz: [
        { q: 'Offer A: $100k base, 10% bonus, $80k equity vesting over 4 years. Offer B: $110k base, 5% bonus, $40k equity over 4 years. Annual totals?', options: ['A $130k, B $125.5k', 'A $190k, B $155.5k', 'A $110k, B $115.5k', 'A $125.5k, B $130k'], answer: 0, explain: 'A: 100 + 10 + 20 = 130. B: 110 + 5.5 + 10 = 125.5.' },
        { q: 'Which dispute process uses a neutral who helps but cannot impose a decision?', options: ['Arbitration', 'Litigation', 'Mediation', 'Expert determination'], answer: 2, explain: 'Mediators facilitate; the parties decide.' },
        { q: 'What most likely drove the timing of the 2019 Apple–Qualcomm settlement?', options: ['A sudden court ruling', 'A weakened alternative supply of 5G modems for Apple', 'A government order', 'Qualcomm’s bankruptcy'], answer: 1, explain: 'Intel exited 5G smartphone modems the same day, consistent with Apple’s BATNA having weakened.' },
        { q: 'The counterpart says after every concession "I need my boss to approve." Best response?', options: ['Make bigger concessions', 'Walk out immediately', 'Ignore it', 'Confirm who has authority and make your own concessions conditional on final approval'], answer: 3, explain: 'Protect yourself from one-sided commitments.' },
        { q: 'The Phase One trade deal shows that…', options: ['Purchase commitments need monitoring and enforcement to be reliable', 'Trade deals are always fully delivered', 'Mediation always fails', 'Tariffs never change'], answer: 0, explain: 'China bought only about three-fifths of the commitment; design enforcement into deals.' }
      ],
      challenge: {
        title: 'Negotiate your offer',
        prompt: `You received an offer for a product-manager role: $112k base, 10% target bonus, $60k of RSUs vesting over 4 years, start in 2 weeks. Public data for this level in your city shows base salaries of roughly $115k–$135k. You also have a verbal (not yet written) offer elsewhere at $120k base with no equity. You prefer the first company. The recruiter says: "This is our standard offer and it expires Friday." Plan your negotiation: target, walk-away, which issues to raise, how to handle the deadline and the competing offer, and write your opening email.`,
        hints: ['Compute total comp for both offers on the same basis.', 'The verbal offer is real but unwritten — how should you use it honestly?', 'Ask for things that are easy for them to give.'],
        model: `<p><b>Numbers.</b> Offer 1 total: 112 + 11.2 + 15 = <b>$138.2k/year</b>. Offer 2: $120k base, no equity, assume a similar 10% bonus → <b>$132k</b> (confirm). Offer 1 is ahead on total, but its base is below the market range of $115k–$135k.</p><p><b>Target:</b> base <b>$124k</b> (lower-middle of market), plus a $10k signing bonus. <b>Walk-away:</b> base at least $116k or an equivalent package. Above that I accept, because I prefer the company.</p><p><b>Issues to raise:</b> base (recurring, compounding), signing bonus (one-off, often easier to approve), RSU refresh at first review, start date flexibility, learning budget.</p><p><b>Deadline:</b> politely ask for until next Wednesday to finalise — reasonable for a decision of this size — and confirm whether Friday is firm.</p><p><b>Competing offer:</b> mention it truthfully as a verbal offer, without exaggerating.</p><p><b>Opening email:</b> "Thank you — I am excited about the role and the team, and I would like to make this work. Based on public data for this level in the city ($115k–$135k base) and a verbal offer I have received at $120k, I was hoping for a base of $124k and a $10k signing bonus to offset a bonus I forgo by leaving now. Is there flexibility there? I would also appreciate until Wednesday to finalise. I am keen to join."</p><p><b>Recommendation:</b> expect a landing around $118–122k base and/or a signing bonus. Accept anything above the walk-away; keep the tone collaborative — you will be working with these people.</p>`
      },
      takeaways: [
        'When weaker, improve your BATNA, build coalitions, cite norms and change the game.',
        'Compare job offers on total compensation; base pay compounds, signing bonuses do not.',
        'Name dirty tricks calmly and respond through process, not anger.',
        'Choose the right dispute process, and design enforcement into every agreement.'
      ]
    }
  ]
});
