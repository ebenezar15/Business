/* MBA Studio — Track 7: Sales & Business Development */
MBA.addTrack({
  id: 'sales',
  stage: 3,
  order: 7,
  title: 'Sales & Business Development',
  icon: '🤝',
  color: '#d946ef',
  tagline: 'Turn interest into revenue, deal by deal',
  summary: `Learn how professional selling really works — from the first conversation to a signed contract and a renewal. You will be able to run discovery, qualify deals, negotiate with confidence, read a pipeline like a CRO and design a sales team, comp plan and AI-assisted sales stack for 2025–26.`,
  outcomes: [
    'Explain the sales process and manage a pipeline with stages and forecasts',
    'Qualify deals with BANT and MEDDPICC and run SPIN-style discovery',
    'Use Challenger techniques and Harvard negotiation tools (BATNA, ZOPA, anchoring)',
    'Track win rate, cycle length, quota attainment, pipeline coverage and NRR',
    'Design SDR/AE/CSM teams, comp plans, partner channels and founder-led sales',
    'Use AI SDRs and modern sales tech without wrecking your brand'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-1',
      title: 'How selling works: B2C, B2B and enterprise',
      level: 'Beginner',
      minutes: 12,
      hook: `Nothing happens in business until somebody sells something.`,
      eli5: `Selling lemonade to a thirsty kid takes five seconds: they see it, they want it, they pay. Selling a new playground to a whole school takes months: the head teacher, the parents' committee and the finance person all need to agree. Same idea — helping someone decide — but very different journeys.`,
      blocks: [
        { type: 'text', title: 'Selling is helping someone decide', html: `<p>Great salespeople do not "push". They <b>diagnose a problem, show a better future and reduce the risk of changing</b>. The customer's biggest competitor is usually not another vendor — it is <span class="hl">doing nothing</span>.</p><p>The more money, people and risk involved, the longer and more structured the sale becomes.</p>` },
        { type: 'compare', title: 'B2C vs B2B vs enterprise', headers: ['', 'B2C', 'B2B (SMB / mid-market)', 'Enterprise'], rows: [
          ['Typical buyer', 'One person', 'Owner or small team', 'Buying committee (often 6–10+ people)'],
          ['Deal size', 'Small', 'Hundreds to tens of thousands', 'Hundreds of thousands to millions'],
          ['Cycle length', 'Minutes to days', 'Weeks', 'Months to over a year'],
          ['Driver', 'Emotion, convenience, brand', 'ROI, ease, speed', 'Risk, strategy, politics, ROI'],
          ['How it is sold', 'Store, website, app', 'Inside sales, demos, trials', 'Field sales, pilots, procurement, legal']
        ] },
        { type: 'framework', name: 'The classic sales process', by: 'Common B2B practice (variants in every CRM)', when: 'Structuring any considered B2B sale.', steps: [
          { label: 'Prospect', desc: 'Find accounts that match your ideal customer profile (ICP).' },
          { label: 'Connect', desc: 'Get a first conversation: outbound email, call, LinkedIn, referral, inbound lead.' },
          { label: 'Discover', desc: 'Understand pains, impact, decision process. Talk less, ask more.' },
          { label: 'Demonstrate / propose', desc: 'Show how you solve their specific problem; quantify value.' },
          { label: 'Handle objections & negotiate', desc: 'Address risk, price, timing; agree terms.' },
          { label: 'Close', desc: 'Contract signed, payment terms agreed.' },
          { label: 'Onboard & expand', desc: 'Deliver value, renew and grow the account.' }
        ] },
        { type: 'case', company: 'Salesforce', year: '1999–2000s', title: 'Selling a new model', situation: `Business software was sold as expensive on-premise licences with long installations. Marc Benioff's start-up offered CRM over the internet by subscription.`, decision: `Salesforce marketed itself with a bold "No Software" campaign and built a highly structured sales machine. Its team (described in Aaron Ross's book <i>Predictable Revenue</i>) separated prospecting from closing so each role could specialise.`, outcome: `Salesforce became the largest CRM company and the role split it popularised (SDR prospecting, AE closing) became standard in SaaS.`, lesson: `A new business model often needs a new way of selling, and specialised roles make sales scalable and predictable.` },
        { type: 'callout', kind: 'myth', title: 'Myth: great salespeople are smooth talkers', html: `<p>Research on top performers — from Neil Rackham's studies of thousands of sales calls to analyses of recorded calls by Gong — repeatedly points the same way: top sellers <b>ask better questions, listen more and plan next steps</b>. Talking a lot is not the skill.</p>` },
        { type: 'scenario', prompt: `A prospect says "Send me some information and I'll get back to you." What is the best response?`, options: [
          { text: 'Send the full brochure and wait.', feedback: 'This usually kills momentum; the prospect rarely reads it.', good: false },
          { text: 'Ask what specifically they want to evaluate and agree a short follow-up call with a date.', feedback: 'Good — you learn the real interest and secure a next step.', good: true },
          { text: 'Push for a signature today with a discount.', feedback: 'Premature pressure without understanding needs damages trust.', good: false }
        ] },
        { type: 'flip', title: 'Quick check', cards: [
          { front: 'The most common "competitor" in B2B sales', back: 'Doing nothing (status quo).' },
          { front: 'Who signs in enterprise deals?', back: 'A buying committee: economic buyer, users, IT/security, procurement, legal.' },
          { front: 'Why separate prospecting and closing roles?', back: 'Specialisation increases efficiency and makes pipeline predictable.' }
        ] }
      ],
      terms: [
        { term: 'Prospect', def: 'A potential customer who matches your target profile but has not bought yet.' },
        { term: 'Lead', def: 'A person or company that has shown some interest or been identified for outreach.' },
        { term: 'Buying committee', def: 'The group of people who influence or approve a B2B purchase.' },
        { term: 'Sales cycle', def: 'The time from first contact to a closed deal.' },
        { term: 'Status quo', def: 'The customer\'s current way of doing things — often the real competitor.' },
        { term: 'Inbound vs outbound', def: 'Inbound leads come to you (e.g. website sign-ups); outbound means you reach out first.' }
      ],
      quiz: [
        { q: 'Which is usually the biggest competitor in a B2B sale?', options: ['The cheapest rival', 'Government regulation', 'The customer doing nothing', 'Your own marketing team'], answer: 2, explain: 'Many deals are lost to "no decision".' },
        { q: 'An enterprise deal typically differs from B2C because it…', options: ['Involves a buying committee and a longer cycle', 'Has one decision maker', 'Never involves legal', 'Is always cheaper'], answer: 0, explain: 'Many stakeholders and higher risk lengthen the process.' },
        { q: 'What does research on top-performing salespeople consistently highlight?', options: ['They talk the most', 'They discount most', 'They avoid follow-ups', 'They ask better questions and listen'], answer: 3, explain: 'Questioning and listening outperform pitching.' },
        { q: 'Salesforce helped popularise which sales structure?', options: ['One person does everything', 'Separate prospecting (SDR) and closing (AE) roles', 'Selling only through retail', 'No sales team at all'], answer: 1, explain: 'Described in Predictable Revenue.' }
      ],
      challenge: {
        title: 'Map a sale end to end',
        prompt: `You sell a $30,000/year staff-scheduling software to hospitals. Your contact is a nurse manager who loves the demo. Nothing has moved for six weeks. Map who is likely in the buying committee, why the deal is stuck, and your next three actions.`,
        hints: ['Who owns the budget? Who worries about data security?', 'Is there a compelling event or deadline?', 'How do you get access beyond your champion?'],
        model: `<p><b>Likely buying committee</b>: nurse manager (user/champion), director of nursing (decision maker), CFO or finance (economic buyer), IT/security (data, integration with HR systems), procurement and legal (contract), possibly union or HR reps.</p><p><b>Why stuck</b>: single-threaded — only the champion is engaged; no quantified business case; no deadline; IT and finance have not been involved.</p><p><b>Next three actions</b></p><ol><li>Coach the champion: build a one-page business case together (e.g. overtime and agency-staff cost saved — even a 5% reduction on a large overtime budget can dwarf $30k).</li><li>Ask the champion to set up a meeting with the director of nursing and finance; offer to present the ROI.</li><li>Send the IT security pack proactively and propose a mutual action plan with dates leading to a decision before the next budget cycle.</li></ol>`
      },
      takeaways: [
        'Selling is helping a customer decide and reducing the risk of change.',
        'Bigger, riskier purchases mean more stakeholders and longer cycles.',
        'Always secure a concrete next step.',
        'Specialised roles make sales scalable.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-2',
      title: 'Pipeline, qualification and discovery (BANT, MEDDPICC, SPIN)',
      level: 'Beginner',
      minutes: 16,
      hook: `Most lost deals were never real deals — qualification tells you which ones to chase.`,
      eli5: `A fisherman cannot catch every fish, so he checks which fish are actually biting before spending all day on one spot. Qualification is checking whether a customer truly has the problem, the money and the power to buy. Discovery is asking good questions so you understand exactly what bait they want.`,
      blocks: [
        { type: 'text', title: 'The pipeline', html: `<p>A <b>pipeline</b> is the list of open deals and the stage each one is in. Each stage has a rough probability of closing. Multiplying deal values by probabilities gives a <span class="hl">weighted pipeline</span> — the basis of a sales forecast.</p>` },
        { type: 'formula', name: 'Weighted pipeline & coverage', expr: 'Weighted pipeline = Σ (deal value × stage probability);  Coverage = Pipeline ÷ Quota', explain: 'Coverage of roughly 3x is a common rule of thumb for B2B teams; the right number depends on your actual win rate.', example: 'Deals: $50k at 20%, $40k at 50%, $30k at 80% → weighted = 10k + 20k + 24k = $54k. If quarterly quota is $100k and total pipeline is $120k, coverage = 1.2x — a warning sign.' },
        { type: 'compare', title: 'BANT vs MEDDPICC', headers: ['', 'BANT', 'MEDDIC / MEDDPICC'], rows: [
          ['Origin', 'IBM, decades ago', 'PTC in the 1990s (Dick Dunkel, Jack Napoli); later extended'],
          ['Elements', 'Budget, Authority, Need, Timing', 'Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition'],
          ['Best for', 'Quick SMB qualification', 'Complex, multi-stakeholder enterprise deals'],
          ['Weakness', 'Budget often does not exist yet for new categories', 'Can feel heavy for small deals']
        ] },
        { type: 'framework', name: 'MEDDPICC in plain English', by: 'Derived from MEDDIC at PTC', when: 'Deals above ~$25k or with a buying committee.', steps: [
          { label: 'Metrics', desc: 'The measurable gain the customer expects (e.g. cut churn 2 points, save 400 hours).' },
          { label: 'Economic buyer', desc: 'The person who can release the money and say yes despite others saying no.' },
          { label: 'Decision criteria', desc: 'What they will judge vendors on: technical, financial, risk.' },
          { label: 'Decision process', desc: 'The steps, people and dates to get to a decision.' },
          { label: 'Paper process', desc: 'Legal, security review, procurement, signatures — often the hidden delay.' },
          { label: 'Identify pain', desc: 'The business problem that makes change urgent.' },
          { label: 'Champion', desc: 'An insider with influence who sells for you when you are not in the room.' },
          { label: 'Competition', desc: 'Other vendors, internal builds and the status quo.' }
        ] },
        { type: 'framework', name: 'SPIN Selling questions', by: 'Neil Rackham, 1988 (research on thousands of sales calls)', when: 'Discovery calls in larger, considered sales.', steps: [
          { label: 'Situation', desc: '"How do you handle invoicing today?" — facts; keep these few, do homework first.' },
          { label: 'Problem', desc: '"Where does that process break down?" — uncover difficulties.' },
          { label: 'Implication', desc: '"What happens to cash flow when invoices go out late?" — make the cost of the problem vivid.' },
          { label: 'Need-payoff', desc: '"If invoices went out the same day, what would that be worth?" — the customer states the value themselves.' }
        ] },
        { type: 'case', company: 'PTC', year: '1990s', title: 'The birth of MEDDIC', situation: `Parametric Technology Corporation (PTC), a CAD software company, was growing fast and needed consistent forecasting and deal discipline across a large sales force.`, decision: `Sales leaders including Dick Dunkel and Jack Napoli codified what their best reps did into a qualification checklist: MEDDIC.`, outcome: `PTC is widely credited with exceptional growth during that period, and MEDDIC spread across enterprise software as alumni took it to other companies.`, lesson: `Codifying what top performers do into a shared language lets an entire team qualify and forecast consistently.` },
        { type: 'interactive', widget: 'funnel', title: 'Pipeline funnel', note: 'Model 1,000 prospects → 10% meetings → 40% qualified → 25% won. Then improve qualification so fewer bad deals get in but win rate rises to 35%. Compare closed deals.' },
        { type: 'scenario', prompt: `In discovery, the prospect says "We lose maybe 5 hours a week to manual reporting." What is the strongest next question?`, options: [
          { text: '"Great, our tool automates reports. Want a demo?"', feedback: 'Too early — you have not established the impact, so the value feels small.', good: false },
          { text: '"What happens downstream when those reports are late or wrong?"', feedback: 'An implication question that reveals the bigger business cost.', good: true },
          { text: '"What is your budget?"', feedback: 'Budget matters, but asking before value is established anchors the deal low.', good: false }
        ] }
      ],
      terms: [
        { term: 'Pipeline', def: 'All open sales opportunities, organised by stage.' },
        { term: 'Qualification', def: 'Checking whether a prospect is likely and able to buy, so effort goes to real deals.' },
        { term: 'BANT', def: 'Budget, Authority, Need, Timing — a simple qualification checklist.' },
        { term: 'MEDDPICC', def: 'Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition.' },
        { term: 'Champion', def: 'A person inside the customer who wants you to win and has influence.' },
        { term: 'Economic buyer', def: 'The person with final authority over the budget for this purchase.' },
        { term: 'Pipeline coverage', def: 'Total pipeline value divided by the sales target for the period.' },
        { term: 'Implication question', def: 'A SPIN question that explores the consequences of a problem to show its true cost.' }
      ],
      quiz: [
        { q: 'Weighted pipeline for deals of $100k at 10% and $50k at 60% is…', options: ['$40k', '$150k', '$60k', '$10k'], answer: 0, explain: '10k + 30k = $40k.' },
        { q: 'In MEDDPICC, "Paper process" refers to…', options: ['Printing proposals', 'Marketing brochures', 'Legal, procurement and signature steps', 'Invoices after close'], answer: 2, explain: 'The administrative path to a signed contract.' },
        { q: 'Which SPIN question type makes the cost of a problem vivid?', options: ['Situation', 'Implication', 'Problem', 'Need-payoff'], answer: 1, explain: 'Implication questions explore consequences.' },
        { q: 'Quota is $500k and pipeline is $600k. Coverage is…', options: ['0.83x', '3x', '6x', '1.2x'], answer: 3, explain: '600 ÷ 500 = 1.2x, below a typical ~3x rule of thumb.' },
        { q: 'Why might BANT fail for a brand-new product category?', options: ['It is too long', 'It ignores need', 'Budgets often do not exist yet for things buyers have never bought', 'It is illegal'], answer: 2, explain: 'Budget may need to be created by a strong business case.' }
      ],
      challenge: {
        title: 'Qualify three deals',
        prompt: `You have one week and three deals. Deal A: $120k, strong pain, you have only met an IT analyst, no timeline. Deal B: $40k, CFO is sponsoring, decision in 30 days, competitor also bidding. Deal C: $200k, champion is enthusiastic, no defined metrics, procurement process unknown, "maybe next year". Score them with MEDDPICC and decide where to spend your time.`,
        hints: ['Which deals have an economic buyer engaged?', 'Which have a decision process and timing?', 'What single action would most improve each deal?'],
        model: `<p><b>Quick MEDDPICC read</b></p><ul><li><b>Deal B</b> — Economic buyer (CFO) engaged, decision process and date known, pain clear; competition is the main risk. <b>Most qualified.</b></li><li><b>Deal A</b> — Pain is strong, but no economic buyer, champion or timeline. Large but early.</li><li><b>Deal C</b> — Champion exists, but no metrics, unknown paper process, no urgency. Big number, low probability.</li></ul><p><b>Time allocation</b>: ~60% on B (win the decision criteria: tailored ROI, reference call, mutual action plan to close in 30 days). ~25% on A (ask the analyst to introduce the budget owner; build a metrics-based case). ~15% on C (co-build metrics with the champion and map procurement; otherwise move it to next year's pipeline).</p><p><b>Forecast honestly</b>: B in commit; A and C in pipeline, not forecast.</p>`
      },
      takeaways: [
        'A weighted pipeline turns hope into a forecast.',
        'Qualify hard: losing early is cheaper than losing late.',
        'MEDDPICC for complex deals; BANT for simple ones.',
        'SPIN: let customers state the value in their own words.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-3',
      title: 'Challenger selling and negotiation (BATNA, ZOPA, anchoring)',
      level: 'Intermediate',
      minutes: 18,
      hook: `The best sellers teach customers something new — and the best negotiators know exactly when to walk away.`,
      eli5: `Imagine selling your old bicycle. If a neighbour already offered you $80, you will not accept $50 from someone else — that $80 is your safety net (BATNA). If the buyer would pay up to $120 and you would accept anything above $80, there is a "deal zone" between $80 and $120 (ZOPA). Whoever names a sensible first number often pulls the final price towards it (anchoring).`,
      blocks: [
        { type: 'framework', name: 'The Challenger Sale', by: 'Matthew Dixon & Brent Adamson (CEB), 2011', when: 'Complex B2B sales where customers think they already know what they need.', steps: [
          { label: 'Teach', desc: 'Bring a commercial insight that reframes how the customer sees their business ("you think your problem is X; it is actually Y and it costs you Z").' },
          { label: 'Tailor', desc: 'Adapt the message to each stakeholder\'s priorities — CFO, operations head, end user.' },
          { label: 'Take control', desc: 'Be comfortable discussing money and pushing back; lead the process rather than following it.' }
        ] },
        { type: 'callout', kind: 'insight', title: 'Five seller profiles', html: `<p>CEB's research grouped reps into five profiles: <b>Hard Worker, Relationship Builder, Lone Wolf, Reactive Problem Solver and Challenger</b>. Challengers were heavily over-represented among star performers, especially in complex sales, while pure Relationship Builders were the least likely to be stars. Relationships still matter — but insight earns them.</p>` },
        { type: 'text', title: 'Principled negotiation', html: `<p>The Harvard Negotiation Project's <i>Getting to Yes</i> (Fisher & Ury, 1981), taught at Harvard's Program on Negotiation (PON), recommends:</p><ul><li><b>Separate the people from the problem.</b></li><li><b>Focus on interests, not positions</b> — why they want something, not just what they say.</li><li><b>Invent options for mutual gain</b> — trade things cheap for you but valuable for them.</li><li><b>Use objective criteria</b> — market benchmarks, published prices, precedent.</li></ul>` },
        { type: 'formula', name: 'BATNA and ZOPA', expr: 'ZOPA = range between seller\'s walk-away price and buyer\'s walk-away price (exists only if buyer max ≥ seller min)', explain: 'BATNA = Best Alternative To a Negotiated Agreement; it sets your walk-away point. Improve your BATNA before negotiating and you gain power.', example: 'You sell a contract. Your walk-away is $80k (another client will pay that). The buyer\'s budget limit is $110k (their alternative costs that). ZOPA = $80k–$110k. Anchoring first at $120k with a justified value story tends to pull the final number higher within the zone.' },
        { type: 'compare', title: 'Negotiation tactics: what works', headers: ['Tactic', 'What it is', 'Use it when'], rows: [
          ['Anchoring', 'Make a well-justified first offer', 'You know the market and value well'],
          ['Trading, not conceding', '"If you sign a 2-year term, we can do X"', 'Always — never give without getting'],
          ['Packaging', 'Negotiate several issues at once', 'To find trades on price, term, scope, payment'],
          ['Silence', 'Pause after stating your price', 'To avoid negotiating against yourself'],
          ['Walk away', 'Exit when below BATNA', 'When the deal destroys value']
        ] },
        { type: 'case', company: 'Gong', year: '2015–today', title: 'Teaching with data', situation: `Gong, a conversation-intelligence company, sold into a market where sales leaders relied on gut feel about what happened on calls.`, decision: `It published "Gong Labs" research from analysed sales calls — for example on talk-to-listen ratios and question patterns — giving buyers commercial insight before they ever took a demo.`, outcome: `Gong became a leading revenue-intelligence brand, and its data-driven content is a frequently cited example of insight-led (Challenger-style) marketing and selling.`, lesson: `Teach your customer something valuable about their own business; credibility follows.` },
        { type: 'scenario', prompt: `A procurement manager says: "Your competitor is 20% cheaper. Match it or we walk." What do you do?`, options: [
          { text: 'Match the price immediately to save the deal.', feedback: 'You concede value with nothing in return and teach the buyer that pressure works.', good: false },
          { text: 'Ask what is included in the competitor\'s offer and re-anchor on outcomes; offer a trade (e.g. longer term or reduced scope for a lower price).', feedback: 'Correct — clarify interests, compare like-for-like, trade rather than concede.', good: true },
          { text: 'Say the competitor is terrible.', feedback: 'Bad-mouthing rivals erodes trust and rarely works.', good: false }
        ] },
        { type: 'flip', title: 'Negotiation terms', cards: [
          { front: 'BATNA', back: 'Your best alternative if this deal fails — your source of power.' },
          { front: 'ZOPA', back: 'Zone of possible agreement between both sides\' walk-away points.' },
          { front: 'Reservation price', back: 'The worst deal you will still accept.' },
          { front: 'Logrolling', back: 'Trading issues you value less for ones you value more.' }
        ] }
      ],
      terms: [
        { term: 'Commercial insight', def: 'A new, provocative idea about the customer\'s business that leads to your solution.' },
        { term: 'BATNA', def: 'Best Alternative To a Negotiated Agreement — what you do if no deal is reached.' },
        { term: 'ZOPA', def: 'Zone of possible agreement — the overlap between what each side will accept.' },
        { term: 'Anchoring', def: 'The tendency for the first number mentioned to influence the final outcome.' },
        { term: 'Reservation price', def: 'Your walk-away point in a negotiation.' },
        { term: 'Interests vs positions', def: 'Positions are what people demand; interests are why they want it.' }
      ],
      quiz: [
        { q: 'The "Teach" step in the Challenger Sale means…', options: ['Offering a commercial insight that reframes the customer\'s view', 'Running product training', 'Teaching junior reps', 'Sending a manual'], answer: 0, explain: 'Challengers lead with insight about the customer\'s business.' },
        { q: 'Seller minimum: $60k. Buyer maximum: $50k. What is the ZOPA?', options: ['$50k–$60k', '$60k', '$55k', 'There is no ZOPA'], answer: 3, explain: 'Buyer max is below seller min, so no overlap.' },
        { q: 'What most increases your negotiating power?', options: ['Talking louder', 'A stronger BATNA', 'Conceding early', 'Hiding information about value'], answer: 1, explain: 'Good alternatives let you walk away.' },
        { q: 'A buyer asks for a 15% discount. The best principle is…', options: ['Trade: get something in return, like a longer term', 'Never discount ever', 'Give 20% to be generous', 'Ignore the request'], answer: 0, explain: 'Trade, do not concede.' },
        { q: 'In CEB\'s research, which profile was least likely to be a star in complex sales?', options: ['Challenger', 'Hard Worker', 'Relationship Builder', 'Lone Wolf'], answer: 2, explain: 'Pure relationship building underperformed insight-led selling.' }
      ],
      challenge: {
        title: 'Negotiate an annual contract',
        prompt: `You are selling a $100k/year analytics platform. Your gross margin is 80%. The buyer wants $75k. Your BATNA: another prospect likely to sign at $85k next quarter. You learn the buyer cares most about fast implementation before their busy season and a longer-term price lock. Plan your negotiation.`,
        hints: ['Define your walk-away and target.', 'What can you trade that is cheap for you but valuable to them?', 'Anchor with value.'],
        model: `<p><b>Set the numbers</b>: target $95k, walk-away ~$85k (near BATNA, adjusted for the certainty of a deal now). Their stated $75k is a position, not necessarily their limit.</p><p><b>Re-anchor on value</b>: quantify the outcome (e.g. if the platform saves 2 analysts' time worth $150k+, $100k is easily justified).</p><p><b>Trades</b></p><ul><li>Fast-track implementation before busy season (cheap for you if scheduled now; valuable to them).</li><li>3-year price lock with 5% annual uplift cap in exchange for a <b>2- or 3-year commitment</b>.</li><li>Small discount (to ~$90–92k) only if they sign by month-end and pay annually upfront.</li></ul><p><b>Script</b>: "If we can guarantee go-live before your busy season and lock pricing for three years, could you commit to a 3-year term at $92k?"</p><p><b>Walk-away</b>: below $85k for a 1-year deal with no trades, pursue the alternative prospect.</p>`
      },
      takeaways: [
        'Teach, tailor, take control — insight earns the right to sell.',
        'Know your BATNA and walk-away before you start.',
        'Anchor with a justified number; trade, never just concede.',
        'Negotiate interests, not positions.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-4',
      title: 'Sales metrics and the revenue engine',
      level: 'Intermediate',
      minutes: 16,
      hook: `A CRO can tell if a quarter will be good in week two — by reading a handful of numbers.`,
      eli5: `A football coach watches more than the final score: shots on target, passes completed, how tired players are. Sales leaders do the same: how many deals we win, how long they take, how big they are and whether customers stay and buy more.`,
      blocks: [
        { type: 'formula', name: 'Sales velocity', expr: 'Sales velocity = (Number of opportunities × Win rate × Average deal size) ÷ Sales cycle length (days)', explain: 'Revenue the pipeline generates per day. Improve any of the four levers to speed up revenue.', example: '100 opps × 25% × $20,000 ÷ 60 days ≈ $8,333 per day (~$250k a month). Cutting cycle to 45 days raises it to ~$11,111/day.' },
        { type: 'compare', title: 'Core sales metrics', headers: ['Metric', 'Formula', 'Why it matters'], rows: [
          ['Win rate', 'Deals won ÷ deals closed (won + lost)', 'Quality of selling and qualification'],
          ['Sales cycle length', 'Average days from opportunity created to close', 'Cash timing, capacity'],
          ['Average contract value (ACV)', 'Annual contract revenue ÷ deals', 'Sets which sales motion you can afford'],
          ['Quota attainment', 'Bookings ÷ quota per rep; % of reps at quota', 'Health of plan and hiring'],
          ['Pipeline coverage', 'Pipeline ÷ quota', 'Forecast risk'],
          ['Net revenue retention (NRR)', '(Start ARR + expansion − contraction − churn) ÷ Start ARR', 'Whether existing customers grow'],
          ['CAC payback', 'CAC ÷ (monthly revenue per customer × gross margin)', 'How fast sales spend comes back']
        ] },
        { type: 'formula', name: 'Net revenue retention (NRR)', expr: 'NRR = (Starting ARR + Expansion − Contraction − Churn) ÷ Starting ARR', explain: 'Measures revenue from a cohort of existing customers a year later. Above 100% means the base grows even with zero new customers.', example: 'Start ARR $10M; expansion +$2.5M; contraction −$0.5M; churn −$1M → NRR = 11 ÷ 10 = 110%.' },
        { type: 'interactive', widget: 'unit-economics', title: 'Sales efficiency check', note: 'Set CAC to $15,000 and ARPU to $1,000/month at 80% margin. Then test what happens to payback if a better sales process cuts CAC by 30%.' },
        { type: 'case', company: 'Snowflake', year: '2020', title: 'Selling for expansion', situation: `Snowflake, a cloud data platform, charged customers based on consumption rather than fixed seats.`, decision: `Its sales and customer teams focused on landing customers and then helping them run more workloads, so spending grew as usage grew.`, outcome: `At its 2020 IPO, Snowflake reported net revenue retention well above 150% — among the highest of any software company at the time — showing that existing customers were the main growth engine.`, lesson: `In usage or seat-expansion models, NRR can matter as much as new bookings; post-sale teams become revenue teams.` },
        { type: 'callout', kind: 'warning', title: 'Vanity vs value metrics', html: `<p>Number of calls made or emails sent are <b>activity metrics</b>. Useful for coaching, dangerous as targets — reps will optimise volume over quality. Tie compensation and forecasts to <b>outcomes</b> (pipeline created, wins, retained revenue).</p>` },
        { type: 'flip', title: 'Metric drills', cards: [
          { front: '40 won, 60 lost. Win rate?', back: '40%.' },
          { front: 'Start ARR $5M, expansion $1M, churn $0.5M. NRR?', back: '(5 + 1 − 0.5) ÷ 5 = 110%.' },
          { front: '10 reps, 6 hit quota. Attainment rate?', back: '60% of reps at quota.' },
          { front: 'CAC $12k, ARPU $1k/month, 75% margin. Payback?', back: '12,000 ÷ 750 = 16 months.' }
        ] },
        { type: 'scenario', prompt: `Only 35% of your reps hit quota this year. What is the most likely first diagnosis?`, options: [
          { text: 'Fire the bottom 65%.', feedback: 'When most reps miss, the problem is usually systemic: quota too high, poor territories, weak pipeline or product issues.', good: false },
          { text: 'Check whether quotas, territories and pipeline generation match reality.', feedback: 'Correct. Healthy teams often aim for most reps — commonly cited as roughly 60–70%+ — reaching quota.', good: true }
        ] }
      ],
      terms: [
        { term: 'Win rate', def: 'Share of closed opportunities that were won.' },
        { term: 'Quota', def: 'The sales target assigned to a rep or team for a period.' },
        { term: 'ACV', def: 'Average (or annual) contract value — yearly revenue per contract.' },
        { term: 'NRR', def: 'Net revenue retention: how much revenue an existing customer cohort generates now vs a year ago, including expansion.' },
        { term: 'GRR', def: 'Gross revenue retention: like NRR but excluding expansion; maximum 100%.' },
        { term: 'Sales velocity', def: 'How quickly the pipeline turns into revenue.' },
        { term: 'Bookings', def: 'The value of contracts signed in a period (not yet necessarily recognised as revenue).' }
      ],
      quiz: [
        { q: '50 opps, 20% win rate, $10k deals, 50-day cycle. Sales velocity per day?', options: ['$1,000', '$2,000', '$5,000', '$10,000'], answer: 1, explain: '50 × 0.2 × 10,000 ÷ 50 = $2,000/day.' },
        { q: 'NRR above 100% means…', options: ['You signed lots of new logos', 'Gross margin is high', 'No customers churned at all', 'Existing customers expanded more than they churned/contracted'], answer: 3, explain: 'Expansion outweighs losses within the existing base.' },
        { q: 'Which is an activity metric rather than an outcome metric?', options: ['Revenue closed', 'NRR', 'Calls made', 'Win rate'], answer: 2, explain: 'Calls are inputs, not results.' },
        { q: 'Start ARR $20M, expansion $3M, contraction $1M, churn $2M. NRR?', options: ['100%', '90%', '110%', '115%'], answer: 0, explain: '(20 + 3 − 1 − 2) ÷ 20 = 100%.' }
      ],
      challenge: {
        title: 'Diagnose a slowing sales team',
        prompt: `Last year: 400 opportunities, 25% win rate, $30k average deal, 90-day cycle. This year: 450 opportunities, 18% win rate, $28k deal, 120-day cycle. Bookings target rose 20%. Calculate sales velocity for both years, identify the main problem and propose fixes.`,
        hints: ['Velocity = opps × win rate × deal ÷ cycle.', 'Which lever moved most?', 'Think qualification, competition and pricing.'],
        model: `<p><b>Velocity</b></p><ul><li>Last year: 400 × 0.25 × 30,000 ÷ 90 = <b>$33,333/day</b></li><li>This year: 450 × 0.18 × 28,000 ÷ 120 = <b>$18,900/day</b> — down about 43%.</li></ul><p><b>Diagnosis</b>: more opportunities, but lower win rate and much longer cycle. This pattern suggests looser qualification (more weak deals entering), possibly a new competitor or longer buying processes, plus discounting (smaller deals).</p><p><b>Fixes</b></p><ol><li>Tighten entry criteria with MEDDPICC; remove stale deals to see real coverage.</li><li>Win/loss interviews on 20 lost deals to see whether competition, price or product gaps drive losses.</li><li>Mutual action plans to shorten cycles; involve economic buyers earlier.</li><li>Discount approval rules to protect deal size.</li><li>Reset the 20% higher target or add capacity — the current engine cannot deliver it.</li></ol>`
      },
      takeaways: [
        'Sales velocity combines the four levers: opportunities, win rate, deal size, cycle.',
        'NRR above 100% means your base grows on its own.',
        'Target outcomes, coach activities.',
        'When most reps miss quota, fix the system, not the people.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-5',
      title: 'Building the sales team: roles, comp, partners and founder-led sales',
      level: 'Advanced',
      minutes: 18,
      hook: `Hire salespeople before you know how to sell, and you will burn cash learning in public.`,
      eli5: `A new band starts by the singer playing every gig and learning which songs the crowd loves. Only when they know the setlist works do they hire a tour manager, roadies and promoters. Founder-led sales is the singer learning the setlist; the sales team is the tour crew who repeat it in many cities.`,
      blocks: [
        { type: 'timeline', title: 'How sales teams typically evolve', items: [
          { label: 'Founder-led', desc: 'Founders sell the first customers, learn objections, pricing and the ICP.' },
          { label: 'First AEs', desc: 'Hire 2 reps together (so you can compare) once there is a repeatable pitch.' },
          { label: 'Specialise', desc: 'Add SDRs for pipeline, CSMs for retention, sales engineers for technical deals.' },
          { label: 'Segment', desc: 'Split teams by customer size (SMB, mid-market, enterprise) and region.' },
          { label: 'Scale & enable', desc: 'RevOps, enablement, partner/channel teams, management layers.' }
        ] },
        { type: 'compare', title: 'Key sales roles', headers: ['Role', 'Main job', 'Typical measure'], rows: [
          ['SDR / BDR', 'Prospect and book qualified meetings', 'Meetings held, pipeline created'],
          ['AE (account executive)', 'Run the sales cycle and close', 'Bookings vs quota, win rate'],
          ['SE (sales engineer)', 'Technical demos, proofs of concept', 'Technical win rate'],
          ['CSM (customer success)', 'Adoption, renewal, health', 'GRR/NRR, health scores'],
          ['AM (account manager)', 'Expansion and upsell', 'Expansion revenue'],
          ['RevOps', 'Systems, data, territories, forecasting', 'Forecast accuracy, efficiency']
        ] },
        { type: 'formula', name: 'Comp plan basics', expr: 'OTE = Base salary + Target variable pay;  Quota ≈ (often) 4–5 × OTE for SaaS AEs', explain: 'OTE (on-target earnings) is what a rep earns at 100% quota. AEs commonly have around a 50/50 base/variable split; SDRs and CSMs have more base. Accelerators pay higher rates above quota. These are common rules of thumb, not laws.', example: 'AE OTE $160k = $80k base + $80k variable. Quota $720k ARR (4.5x OTE). Commission rate = 80k ÷ 720k ≈ 11% of bookings, rising to e.g. 16% above 100%.' },
        { type: 'case', company: 'Stripe', year: '2010–2011', title: 'The "Collison installation"', situation: `Stripe's founders, Patrick and John Collison, had a developer payments product that people liked in principle but were slow to adopt.`, decision: `Instead of waiting for sign-ups, when someone agreed to try Stripe they would say "give me your laptop" and set the user up on the spot — a story Paul Graham popularised in his essay "Do Things That Don't Scale".`, outcome: `The founders learned exactly where adoption broke down and won early users who became advocates.`, lesson: `Founder-led sales is research and selling at once: you discover the ICP, pitch, objections and pricing before scaling.` },
        { type: 'text', title: 'Partnerships and channel sales', html: `<p>Not every customer needs to be won by your own reps. <b>Partners</b> can multiply reach:</p><ul><li><b>Resellers / VARs</b> buy and resell, often adding services.</li><li><b>Referral partners</b> send leads for a fee (often a percentage of first-year revenue).</li><li><b>Systems integrators & agencies</b> implement your product for clients — HubSpot built a large solutions-partner ecosystem of agencies.</li><li><b>Technology partners & marketplaces</b> — integrations and cloud marketplaces (AWS, Azure, Google Cloud) where enterprises can buy using existing cloud budgets.</li></ul><p>Trade-off: partners bring reach and trust but take margin and you lose some control over the customer experience.</p>` },
        { type: 'interactive', widget: 'decision-matrix', title: 'Direct sales vs partner channel', note: 'Score direct sales, resellers and a cloud marketplace on cost, speed to market, control of customer, margin and reach. Weight what matters for an early-stage company.' },
        { type: 'scenario', prompt: `You have $2M ARR, all closed by the two founders. Your first sales hire should be…`, options: [
          { text: 'A VP of Sales from a big enterprise company to build the whole team.', feedback: 'Often premature: big-company VPs are used to systems and brand they will not have yet.', good: false },
          { text: 'Two hungry AEs who can sell with an unfinished playbook, with founders still closely involved.', feedback: 'Good — hiring two lets you compare, and founders stay close to learn and refine the playbook.', good: true },
          { text: '10 SDRs to flood the pipeline.', feedback: 'SDRs without closers and a proven message just create unworkable meetings.', good: false }
        ] },
        { type: 'checklist', title: 'Before you hire your first salesperson', items: [
          'Founders have closed 10–20+ customers themselves',
          'You can describe the ICP and top 3 objections',
          'There is a written pitch and demo that works',
          'Pricing has been tested and is not changing weekly',
          'You know your sales cycle length and average deal size',
          'CRM is set up with defined stages'
        ] }
      ],
      terms: [
        { term: 'SDR / BDR', def: 'Sales/business development representative — prospects and books meetings.' },
        { term: 'Account executive (AE)', def: 'Salesperson who runs deals from qualification to close.' },
        { term: 'CSM', def: 'Customer success manager — ensures customers adopt, get value and renew.' },
        { term: 'OTE', def: 'On-target earnings: base plus variable pay at 100% of quota.' },
        { term: 'Accelerator', def: 'A higher commission rate paid above quota to reward over-performance.' },
        { term: 'Channel partner', def: 'A third party that sells, refers or implements your product.' },
        { term: 'RevOps', def: 'Revenue operations — the team running sales/marketing/CS systems, data and processes.' }
      ],
      quiz: [
        { q: 'An AE has OTE $150k with a 50/50 split. Variable pay at target is…', options: ['$50k', '$100k', '$150k', '$75k'], answer: 3, explain: 'Half of OTE is variable.' },
        { q: 'Why hire two first AEs rather than one?', options: ['It is cheaper', 'To compare performance and separate person problems from playbook problems', 'Legal requirement', 'To avoid founders selling'], answer: 1, explain: 'One rep failing could be the person or the playbook — two gives a signal.' },
        { q: 'The "Collison installation" illustrates…', options: ['Founders doing hands-on, unscalable selling to learn and win early users', 'Automated onboarding', 'Channel partnerships', 'Outsourced sales'], answer: 0, explain: 'Founders set users up personally.' },
        { q: 'A main downside of channel partners is…', options: ['They never bring leads', 'They are illegal in SaaS', 'Margin sharing and less control of the customer experience', 'They cannot sell to enterprises'], answer: 2, explain: 'Reach comes at a cost of margin and control.' },
        { q: 'A CSM is mainly measured on…', options: ['New logos', 'Retention and adoption (GRR/NRR)', 'Ad clicks', 'Meetings booked'], answer: 1, explain: 'CSMs protect and grow the existing base.' }
      ],
      challenge: {
        title: 'Design a comp plan and team',
        prompt: `Your startup sells $24k ACV software. Target: add $3M new ARR next year. Win rate 25%, AE can run ~60 opportunities a year, ramp 4 months. Design the team (AEs, SDRs) and a simple AE comp plan.`,
        hints: ['Deals needed = 3M ÷ 24k.', 'Opportunities needed = deals ÷ win rate.', 'Adjust for ramp time.'],
        model: `<p><b>Maths</b></p><ul><li>Deals needed: $3M ÷ $24k = <b>125</b>.</li><li>Opportunities needed: 125 ÷ 0.25 = <b>500</b>.</li><li>Per fully ramped AE: 60 opps × 25% = 15 deals ≈ <b>$360k</b> new ARR/year.</li><li>Ramp: hired at the start of the year, an AE is productive ~8 of 12 months ≈ $240k. AEs needed ≈ 3M ÷ 240k ≈ <b>12–13</b>; add ~15% buffer for attrition → ~14 AEs.</li><li>SDRs: if each SDR sources ~10 qualified opportunities a month (120/year) and half of the 500 opps come from SDRs, we need ~2–3 SDRs; plan 3–4 given ramp.</li></ul><p><b>AE comp plan</b>: OTE $140k = $70k base + $70k variable; annual quota $360k (about 2.6x OTE — lower than the common 4–5x because ACV is modest, so check affordability: total AE cost vs new ARR). Commission 19.4% of ARR up to quota; 1.5x accelerator above 100%; paid on signed and first payment received; clawback if customer churns within 90 days.</p><p><b>Sanity check</b>: if the cost per $1 of new ARR is too high, raise ACV, improve win rate, or add a PLG/partner channel.</p>`
      },
      takeaways: [
        'Founders sell first; hire reps when the playbook is proven.',
        'Specialise roles (SDR, AE, SE, CSM) as you scale.',
        'Comp plans drive behaviour — reward outcomes and retention.',
        'Partners multiply reach at the cost of margin and control.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'sales-6',
      title: 'AI SDRs and the 2025–26 sales tech stack',
      level: 'Advanced',
      minutes: 16,
      hook: `AI can now send a million personalised emails — which is exactly why the average one gets ignored.`,
      eli5: `Imagine everyone in your class got a robot that writes birthday cards. Soon everyone receives 100 cards a day and stops reading them. The cards that still get read are from someone who really knows you. AI makes sales faster, but trust and relevance become even more valuable.`,
      blocks: [
        { type: 'framework', name: 'The modern sales tech stack', by: 'Common 2025–26 practice', when: 'Designing or auditing sales tooling.', steps: [
          { label: 'CRM (system of record)', desc: 'Salesforce, HubSpot and others: accounts, contacts, deals, forecasts.' },
          { label: 'Data & enrichment', desc: 'Tools such as Clay, Apollo and ZoomInfo find contacts, firmographics and buying signals.' },
          { label: 'Engagement', desc: 'Sequencing email/call/LinkedIn steps (Outreach, Salesloft, HubSpot sequences).' },
          { label: 'Conversation intelligence', desc: 'Call recording, transcription and coaching (Gong and others).' },
          { label: 'AI agents', desc: 'AI SDRs that research, write and send outreach and book meetings (e.g. 11x, Artisan); CRM-native agents such as Salesforce Agentforce.' },
          { label: 'CPQ & contracts', desc: 'Configure-price-quote, e-signature, deal desk.' }
        ] },
        { type: 'compare', title: 'Human SDR vs AI SDR vs hybrid', headers: ['', 'Human SDR', 'AI SDR', 'Hybrid (common best practice)'], rows: [
          ['Volume', 'Limited', 'Very high', 'High where it helps'],
          ['Personalisation', 'Deep but slow', 'Broad, sometimes generic or wrong', 'AI research, human judgement on key accounts'],
          ['Cost', 'Salary, ramp, turnover', 'Software fee', 'Mixed'],
          ['Risk', 'Inconsistency', 'Spam complaints, brand damage, hallucinated facts', 'Managed with review and guardrails'],
          ['Best use', 'Strategic accounts', 'Research, enrichment, inbound follow-up, long-tail', 'Tiered by account value']
        ] },
        { type: 'callout', kind: 'warning', title: 'Deliverability is now a hard constraint', html: `<p>Since February 2024, Google and Yahoo require bulk senders to authenticate domains (SPF, DKIM, DMARC), honour one-click unsubscribe and keep spam complaint rates very low (Google cites staying below 0.3%). Blasting AI-generated emails can get a whole domain filtered to spam. Many teams send from separate sub-domains, warm them up and cap volume.</p>` },
        { type: 'case', company: 'Artisan & the AI SDR wave', year: '2024–2025', title: '"Stop hiring humans"', situation: `A wave of startups launched autonomous AI SDRs promising to replace outbound teams.`, decision: `Artisan ran provocative San Francisco billboards reading "Stop Hiring Humans" to promote its AI agent "Ava".`, outcome: `The campaign generated huge attention and backlash. Across the market, practitioners reported mixed results: AI agents were strong at research, data and speed-to-lead, while fully automated cold outreach often produced low reply rates and brand risk.`, lesson: `Use AI to augment sellers (research, drafting, follow-up, coaching) and keep humans accountable for relevance, relationships and judgement.` },
        { type: 'text', title: 'Where AI genuinely helps sellers (2025–26)', html: `<ul><li><b>Speed to lead</b>: AI answers inbound leads instantly and books meetings 24/7.</li><li><b>Account research</b>: summaries of annual reports, news, hiring and tech stack before a call.</li><li><b>Call prep and notes</b>: auto-generated summaries, next steps and CRM updates.</li><li><b>Coaching</b>: analysis of talk ratios, objections and competitor mentions.</li><li><b>Forecasting</b>: deal-risk signals from engagement data.</li><li><b>Buyer side too</b>: buyers use AI to research vendors, so clear public pricing, documentation and comparisons matter more.</li></ul>` },
        { type: 'interactive', widget: 'ab-test', title: 'AI vs human-written outreach', note: 'Compare 2,000 AI emails with 2.0% reply rate vs 500 human-researched emails with 6% reply. Check significance, then think about meetings per hour of work.' },
        { type: 'scenario', prompt: `Your CEO wants to replace all 8 SDRs with an AI SDR sending 50,000 emails a month. What do you recommend?`, options: [
          { text: 'Do it immediately — it is cheaper.', feedback: 'Risks domain reputation, spam complaints and brand damage, and you lose human insight into the market.', good: false },
          { text: 'Pilot AI on inbound follow-up and low-value segments with guardrails; redeploy SDRs to high-value accounts; compare pipeline per dollar.', feedback: 'Correct — test, measure qualified pipeline (not emails sent) and protect deliverability.', good: true },
          { text: 'Ban AI tools entirely.', feedback: 'You would miss real productivity gains in research, notes and speed-to-lead.', good: false }
        ] },
        { type: 'checklist', title: 'AI in sales — guardrails', items: [
          'Human review for messages to top-tier accounts',
          'Domain authentication and sending limits in place',
          'Clear opt-out and compliance with GDPR/CAN-SPAM and local rules',
          'Fact-check AI claims about prospects before sending',
          'Measure qualified pipeline and revenue, not activity volume',
          'Log AI-generated actions in the CRM for auditability'
        ] }
      ],
      terms: [
        { term: 'AI SDR', def: 'Software agent that researches prospects and writes and sends outreach to book meetings.' },
        { term: 'Conversation intelligence', def: 'Tools that record and analyse sales calls for coaching and insight.' },
        { term: 'Deliverability', def: 'The ability of your emails to reach inboxes rather than spam folders.' },
        { term: 'Speed to lead', def: 'How quickly you respond to an inbound enquiry; faster responses tend to convert better.' },
        { term: 'Enrichment', def: 'Adding data (job title, company size, tech stack) to contact records.' },
        { term: 'CPQ', def: 'Configure-price-quote software for building accurate quotes.' }
      ],
      quiz: [
        { q: 'What is the biggest risk of high-volume AI cold email?', options: ['It is too slow', 'It costs more than humans', 'AI cannot write English', 'Domain reputation and spam filtering, plus brand damage'], answer: 3, explain: 'Mailbox providers penalise high complaint rates.' },
        { q: 'Which task is AI currently best suited to in sales?', options: ['Final enterprise negotiation alone', 'Building executive trust over dinners', 'Account research, notes and fast inbound follow-up', 'Signing contracts on behalf of the CEO'], answer: 2, explain: 'AI excels at research, summarisation and speed.' },
        { q: 'Which metric best judges an AI SDR pilot?', options: ['Qualified pipeline generated per dollar', 'Emails sent', 'Number of AI prompts', 'Open rate alone'], answer: 0, explain: 'Outcomes, not activity.' },
        { q: 'Since 2024, Gmail and Yahoo bulk-sender rules require…', options: ['Paper mail backups', 'A paid licence per email', 'Only plain-text emails', 'Domain authentication, easy unsubscribe and low spam rates'], answer: 3, explain: 'These are the core sender requirements.' }
      ],
      challenge: {
        title: 'Design an AI-augmented outbound motion',
        prompt: `You lead sales at a mid-market HR software company. 6 SDRs book 90 meetings a month (cost ~$50k/month fully loaded). An AI SDR vendor offers unlimited outreach for $5k/month. Your TAM is 8,000 accounts: 500 strategic (ACV $60k), 7,500 mid-tier (ACV $12k). Design a 90-day pilot.`,
        hints: ['Tier accounts by value.', 'Keep a control group.', 'Define success thresholds before starting.'],
        model: `<p><b>Design</b></p><ul><li><b>Strategic 500</b>: human SDRs + AE, AI used only for research briefs and drafts reviewed by humans. Goal: deeper multi-threading.</li><li><b>Mid-tier 7,500</b>: split randomly — 3,750 to AI SDR (with sending caps, separate warmed sub-domain), 3,750 to 2 human SDRs as control.</li><li><b>Inbound</b>: AI responds within minutes and books meetings.</li></ul><p><b>Metrics</b>: meetings held, qualified opportunities, pipeline $, cost per qualified opportunity, spam complaint rate (stop if it approaches limits), unsubscribe rate, and AE feedback on meeting quality.</p><p><b>Success threshold</b>: AI arm produces qualified pipeline at ≤50% of human cost per opportunity with equal or better meeting-to-opportunity conversion and no deliverability incidents.</p><p><b>Outcome options</b>: if it wins, redeploy SDRs towards strategic accounts and expansion rather than cutting blindly; if not, keep AI for research and inbound only.</p>`
      },
      takeaways: [
        'AI amplifies good selling and bad selling alike.',
        'Protect deliverability and brand — they are hard to rebuild.',
        'Use AI for research, speed and notes; keep humans on judgement and trust.',
        'Judge tools by qualified pipeline and revenue, not activity.'
      ]
    }
  ]
});
