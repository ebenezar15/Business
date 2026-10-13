/* MBA Studio — Track 21: Global Business & Political Economy */
MBA.addTrack({
  id: 'global',
  stage: 4,
  order: 21,
  title: 'Global Business & Political Economy',
  icon: '🌍',
  color: '#0369a1',
  tagline: 'Win in a world of borders, currencies and politics',
  summary: `Learn why countries trade, how tariffs, currencies and politics change the economics of a deal, and how to choose, enter and run operations across borders. You will finish able to size FX exposure and design a hedge, score country risk, pick an entry mode, stress-test a supply chain against export controls and geopolitics, and organise a company that is both global and local.`,
  outcomes: [
    'Explain comparative advantage, tariffs, trade blocs and the WTO, and calculate a landed cost',
    'Measure transaction, translation and economic FX exposure and design a basic hedge',
    'Score political and country risk, including sanctions and regulatory risk',
    'Choose between export, licensing, franchising, JV, acquisition and greenfield entry using CAGE, AAA and OLI',
    'Build a resilient global supply chain that survives export controls and geopolitical shocks',
    'Balance global integration with local responsiveness and understand transfer pricing'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'global-1',
      title: 'Why countries trade: comparative advantage, tariffs, the WTO and trade blocs',
      level: 'Beginner',
      minutes: 14,
      hook: `A single phone contains parts from dozens of countries — and one tariff announcement can change which country it is assembled in next year.`,
      eli5: `Imagine you are great at both maths and drawing, and your friend is a bit slower at both. You still finish homework faster if you do all the maths and your friend does all the drawing, and you swap. Why? Because every hour you spend drawing is an hour of brilliant maths you gave up. Countries work the same way: each one does what it gives up the <b>least</b> to make, then they trade. A <b>tariff</b> is like the school charging a fee every time you swap — fewer swaps happen, and someone pays the fee.`,
      blocks: [
        {
          type: 'text', title: 'Absolute vs comparative advantage',
          html: `<p>In 1817 the economist <b>David Ricardo</b> showed something surprising: two countries can both gain from trade <i>even if one is better at making everything</i>.</p><p><b>Absolute advantage</b> = you can make more of something with the same resources. <b>Comparative advantage</b> = you give up less of other things to make it (a lower <b>opportunity cost</b>). Trade follows comparative advantage, not absolute advantage.</p><p>You met opportunity cost in the economics track (economics-1). Here we apply it to whole countries, then look at the policies governments use to shape trade.</p>`
        },
        {
          type: 'formula', name: 'Comparative advantage via opportunity cost',
          expr: 'Opportunity cost of good X = Units of Y given up ÷ Units of X gained',
          explain: `Work out, for each country, how much of the other good it sacrifices to make one more unit. The country with the <b>lower</b> opportunity cost has the comparative advantage and should specialise in that good.`,
          example: `<i>Illustrative.</i> In one worker-day, Country A makes 10 shirts or 1 machine part; Country B makes 20 shirts or 5 machine parts. B is better at both (absolute advantage).<br>Opportunity cost of 1 machine part: A = 10 shirts, B = 20 ÷ 5 = <b>4 shirts</b> → B specialises in machine parts.<br>Opportunity cost of 1 shirt: A = 1 ÷ 10 = <b>0.1 part</b>, B = 5 ÷ 20 = 0.25 part → A specialises in shirts.<br>At any trade price between 4 and 10 shirts per part (say 6), both countries end up with more than they could make alone.`
        },
        {
          type: 'framework', name: 'The trade-policy toolkit', by: 'Standard trade economics', when: 'Whenever you source from, or sell into, another country',
          steps: [
            { label: 'Tariffs (customs duties)', desc: 'A tax on imports, usually a percentage of the customs value. Paid by the importer, but the economic cost is shared between foreign suppliers (lower prices), importers (lower margins) and consumers (higher prices).' },
            { label: 'Quotas and licences', desc: 'Limits on the quantity that can be imported, or permission required to import at all.' },
            { label: 'Subsidies', desc: 'Government support for domestic producers (cash, cheap loans, tax breaks). Production-linked incentives (PLI) in India and the US CHIPS Act are modern examples.' },
            { label: 'Non-tariff barriers', desc: 'Product standards, testing, certification, labelling and slow customs procedures. Often harder to see, and sometimes more costly, than tariffs.' },
            { label: 'Trade remedies', desc: 'Anti-dumping duties (against goods sold below normal value) and countervailing duties (against foreign subsidies), imposed after an investigation.' },
            { label: 'Rules of origin and local content', desc: 'Rules deciding which country a product "comes from". They decide whether a good qualifies for a trade deal\'s lower tariff.' }
          ]
        },
        {
          type: 'formula', name: 'Landed cost',
          expr: 'Landed cost per unit = Customs value × (1 + tariff rate) + port, broker & inland costs',
          explain: `Customs value is usually the CIF value (cost + insurance + freight) in most countries, and the FOB value in the United States. Always compare suppliers on landed cost, not the factory price.`,
          example: `A component costs $36 FOB plus $4 freight and insurance = $40 CIF. With a 25% tariff: $40 × 1.25 = $50, plus $3 of port and trucking = <b>$53 landed</b>. A domestic supplier quoting $48 delivered is now cheaper, even though its factory price looked higher.`
        },
        {
          type: 'compare', title: 'Levels of economic integration', headers: ['Level', 'What is removed or shared', 'Example'],
          rows: [
            ['Free trade area (FTA)', 'Tariffs between members; each keeps its own tariffs to outsiders, so rules of origin are needed', 'USMCA (replaced NAFTA in 2020), ASEAN Free Trade Area'],
            ['Customs union', 'FTA plus a common external tariff', 'Mercosur (with exceptions), the EU customs union'],
            ['Common (single) market', 'Customs union plus free movement of goods, services, capital and people', 'EU single market'],
            ['Economic and monetary union', 'Single market plus a shared currency and central bank', 'The euro area'],
            ['Mega-regional agreements', 'Partial tariff cuts and common rules across many economies', 'RCEP (in force 2022), CPTPP']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'The WTO: rules, exceptions and a broken referee',
          html: `<p>The <b>World Trade Organization</b> (1995, succeeding the 1947 GATT) sets the baseline rules: <b>most-favoured-nation</b> treatment (a tariff cut for one member applies to all) and <b>national treatment</b> (imports must not face worse internal rules than local goods once they cross the border).</p><p>Two big exceptions matter for business: free trade agreements are allowed to give members better terms, and countries can cite <b>national security</b>. The WTO\'s Appellate Body — its court of appeal for disputes — has been unable to hear appeals since December 2019 because the US blocked new judge appointments. In practice, more trade policy is now set by unilateral action and bilateral deals than by the multilateral rulebook.</p>`
        },
        {
          type: 'case', company: 'US–China trade war', year: '2018 onward', title: 'Who actually paid the tariffs?',
          situation: `From 2018 the US imposed tariffs on hundreds of billions of dollars of Chinese imports under "Section 301", alongside steel and aluminium tariffs on many countries under "Section 232". China retaliated with tariffs on US goods, including soybeans.`,
          decision: `Companies had to choose: absorb the cost, raise prices, or move production. Many moved final assembly to Vietnam, Mexico, India and elsewhere while still buying components from China. The US government made large support payments to farmers hit by retaliation. From 2025 the US announced much broader tariffs on many trading partners, with rates and exemptions changing repeatedly.`,
          outcome: `Several economic studies found that most of the cost of the 2018–2019 tariffs was passed through to US importers and consumers rather than absorbed by Chinese exporters. Direct US imports from China fell as a share of the total, while imports from countries such as Vietnam and Mexico rose — partly real relocation and partly the same supply chains rerouted.`,
          lesson: `Tariffs rarely disappear demand; they redirect it. Plan for policy volatility: model several tariff scenarios, keep sourcing options open and write tariff-sharing clauses into supply contracts.`
        },
        {
          type: 'scenario',
          prompt: `You run a US kitchen-appliance brand. Your main component, made in China, faces a new 25% tariff from next quarter. Gross margin will fall from 40% to about 31%. What do you do first?`,
          options: [
            { text: 'Move all production to Vietnam immediately.', feedback: 'A rushed move risks quality problems, and Vietnam may face tariffs of its own. Tariffs can also change again — do not bet the company on one policy snapshot.', good: false },
            { text: 'Model landed cost under several tariff scenarios, negotiate cost sharing with the supplier, test a modest price increase, and qualify a second-country supplier for part of the volume.', feedback: 'Right. Spread the hit across supplier, price and mix, and buy optionality with a second source rather than a single big bet.', good: true },
            { text: 'Wait — the tariff will probably be removed soon.', feedback: 'Hope is not a strategy. Some tariffs have lasted many years. At minimum, prepare the options now so you can act fast.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Comparative advantage', def: 'Being able to produce a good at a lower opportunity cost than others; the basis for gains from trade.' },
        { term: 'Tariff', def: 'A tax on imported goods, usually a percentage of their customs value.' },
        { term: 'Non-tariff barrier', def: 'Any obstacle to trade other than a tariff: standards, licences, quotas, testing or slow customs.' },
        { term: 'Most-favoured-nation (MFN)', def: 'The WTO rule that a trade benefit given to one member must be given to all members.' },
        { term: 'Rules of origin', def: 'Criteria that decide which country a product legally comes from, and so whether it qualifies for a trade deal\'s tariff.' },
        { term: 'Anti-dumping duty', def: 'An extra tariff on imports found to be sold below their normal value, after an investigation.' },
        { term: 'Customs union', def: 'A group of countries with free trade among themselves and a common tariff toward outsiders.' },
        { term: 'Landed cost', def: 'The full cost of getting an imported product to your door: price, freight, insurance, duties and fees.' }
      ],
      quiz: [
        {
          q: 'Country A makes 8 tonnes of rice or 2 laptops per worker-month. Country B makes 6 tonnes of rice or 3 laptops. Who has the comparative advantage in laptops?',
          options: ['Country A — it makes more rice', 'Country B — its opportunity cost per laptop is 2 tonnes vs A\'s 4 tonnes', 'Neither — trade cannot help', 'Country A — it has absolute advantage in laptops'],
          answer: 1,
          explain: 'A gives up 8 ÷ 2 = 4 tonnes of rice per laptop; B gives up 6 ÷ 3 = 2 tonnes. B has the lower opportunity cost, so B should make laptops.'
        },
        {
          q: 'A part has a CIF value of $80. The tariff is 15% and port plus trucking costs are $5. What is the landed cost?',
          options: ['$85', '$97', '$92', '$100'],
          answer: 1,
          explain: '$80 × 1.15 = $92 after the tariff, plus $5 of port and trucking = $97.'
        },
        {
          q: 'What distinguishes a customs union from a free trade area?',
          options: ['Members share a common external tariff', 'Members share a currency', 'People can move freely', 'There are no tariffs inside the group'],
          answer: 0,
          explain: 'Both remove internal tariffs. A customs union adds a common tariff towards outsiders, so complex rules of origin are less needed inside it.'
        },
        {
          q: 'Evidence on the 2018–2019 US tariffs on Chinese goods suggests that:',
          options: ['Chinese exporters absorbed nearly all of the cost', 'Trade between the two countries stopped completely', 'Tariffs had no effect on where goods were made', 'Most of the cost was passed through to US importers and consumers'],
          answer: 3,
          explain: 'Several studies found high pass-through to US prices, while sourcing shifted partly to countries like Vietnam and Mexico.'
        },
        {
          q: 'Why do free trade agreements need rules of origin?',
          options: ['To set the common external tariff', 'To decide which currency is used', 'To stop goods from outside the FTA being routed through the lowest-tariff member to dodge duties', 'To harmonise product safety standards'],
          answer: 2,
          explain: 'In an FTA each member keeps its own external tariffs, so rules of origin stop "tariff shopping" through the member with the lowest duty.'
        }
      ],
      challenge: {
        title: 'Where should the e-bike frame come from?',
        prompt: `You are COO of a US e-bike company buying 50,000 frames a year. Three quotes (illustrative tariff rates — real rates change, so you would check the current schedule):<ul><li><b>China:</b> $400 FOB, $20 freight/insurance, total tariff 30%, 6-week lead time, proven quality.</li><li><b>Vietnam:</b> $440 FOB, $25 freight/insurance, tariff 10%, 7-week lead time, new supplier.</li><li><b>Mexico:</b> $480 FOB, $10 freight, 0% tariff <i>if</i> USMCA rules of origin are met (25% if not), 1-week lead time.</li></ul>Calculate landed cost per frame (use CIF as the customs value for simplicity) and the annual difference. Recommend a sourcing strategy.`,
        hints: ['Landed cost = (FOB + freight) × (1 + tariff).', 'Do not stop at the cheapest number — think about lead time, quality risk and how likely each tariff is to change.', 'What happens to Mexico if the frames use too many Chinese parts to qualify for USMCA?'],
        model: `<p><b>1. Landed cost per frame</b></p><table><thead><tr><th>Source</th><th>CIF</th><th>Tariff</th><th>Landed</th><th>Annual (50k)</th></tr></thead><tbody><tr><td>China</td><td>$420</td><td>30%</td><td>$546.00</td><td>$27.3M</td></tr><tr><td>Vietnam</td><td>$465</td><td>10%</td><td>$511.50</td><td>$25.6M</td></tr><tr><td>Mexico (qualifies)</td><td>$490</td><td>0%</td><td>$490.00</td><td>$24.5M</td></tr><tr><td>Mexico (fails origin)</td><td>$490</td><td>25%</td><td>$612.50</td><td>$30.6M</td></tr></tbody></table><p>Mexico, if it qualifies, saves $56 per frame vs China = <b>$2.8M a year</b>; Vietnam saves $34.50 = $1.7M.</p><p><b>2. Beyond price</b></p><ul><li><b>Lead time:</b> Mexico\'s 1 week vs 6–7 weeks cuts inventory in transit — at 50,000 frames a year (about 960 a week), 5 fewer weeks means roughly 4,800 fewer frames tied up, about $2.4M of working capital.</li><li><b>Origin risk:</b> confirm the Mexican supplier\'s bill of materials meets USMCA rules; if it fails, Mexico becomes the most expensive option.</li><li><b>Policy risk:</b> all three tariff rates could change. Vietnam has attracted scrutiny for transshipment of Chinese goods.</li><li><b>Quality risk:</b> both new suppliers need qualification runs.</li></ul><p><b>3. Recommendation:</b> move toward a <b>dual-source model</b> — about 60% Mexico (after an audited origin check and a pilot run) and 40% Vietnam or China, with tariff-sharing clauses in every contract. Keep China qualified as a fallback while the new suppliers ramp up. Re-run the landed-cost model every quarter.</p>`
      },
      takeaways: [
        'Trade follows comparative advantage — lower opportunity cost, not being best at everything.',
        'Always compare suppliers on landed cost, including duties and freight.',
        'Tariff costs are usually shared, and much of the cost often lands on importers and consumers.',
        'Trade blocs differ in depth: FTA, customs union, single market, monetary union.',
        'With a weakened WTO referee, plan for policy volatility and keep sourcing options open.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'global-2',
      title: 'Exchange rates and FX risk: exposure and hedging',
      level: 'Beginner',
      minutes: 15,
      hook: `A company can win the contract, deliver on time, hit every cost target — and still lose money because a currency moved 8% while the invoice was unpaid.`,
      eli5: `Imagine you agree to sell your old bike to a cousin abroad for 100 of their coins, paid next month. Today 100 coins buy you a new video game. Next month the coins might buy the game plus a snack — or only half the game. You did nothing different; the "price" of their coins in your money changed. A <b>hedge</b> is like agreeing today with a shopkeeper exactly how many of your coins you will get for their 100 coins next month, so there are no surprises.`,
      blocks: [
        {
          type: 'text', title: 'Beyond the basics',
          html: `<p>In economics-5 you saw that a weaker rupee helps exporters and hurts importers. Here we go further: <b>what moves currencies</b>, the <b>three kinds of FX exposure</b> a company has, and <b>how to hedge</b> with real numbers.</p><p>Quotes are written as the price of one unit of foreign currency in home currency. "₹85/$" means one US dollar costs 85 rupees. If it goes to ₹88/$, the dollar has <b>strengthened</b> and the rupee has <b>weakened</b>.</p>`
        },
        {
          type: 'framework', name: 'What moves exchange rates', by: 'International macroeconomics', when: 'To understand (not predict) currency moves',
          steps: [
            { label: 'Interest-rate differentials', desc: 'Higher rates attract investors seeking yield, supporting a currency in the short run. Central-bank surprises move FX within minutes.' },
            { label: 'Inflation (purchasing power parity)', desc: 'Over long periods, a country with higher inflation tends to see its currency weaken, so that a basket of goods costs roughly the same everywhere.' },
            { label: 'Trade and current account', desc: 'Persistent deficits mean a country must keep attracting foreign money; if that money hesitates, the currency falls.' },
            { label: 'Capital flows and risk mood', desc: 'In global panics money tends to flow into the US dollar, Swiss franc and Japanese yen ("safe havens") and out of emerging markets.' },
            { label: 'Policy and intervention', desc: 'Central banks can buy or sell their currency, set pegs or bands, and impose capital controls. Pegs can break suddenly.' }
          ]
        },
        {
          type: 'formula', name: 'The forward rate (covered interest parity)',
          expr: 'Forward = Spot × (1 + home interest rate) ÷ (1 + foreign interest rate)',
          explain: `A bank can lock in a future exchange rate today because it can borrow one currency and deposit the other. The forward rate simply reflects the <b>interest-rate gap</b> — it is <i>not</i> a forecast of where the currency will be.`,
          example: `Spot ₹85.00/$. One-year rupee rate 6.5%, dollar rate 4.5%. Forward = 85 × 1.065 ÷ 1.045 = <b>₹86.63/$</b>. The dollar trades at a forward <b>premium</b> of about 1.9% because rupee rates are higher. An Indian exporter selling dollars forward therefore locks in more rupees than today\'s spot.`
        },
        {
          type: 'compare', title: 'The three types of FX exposure', headers: ['', 'Transaction', 'Translation', 'Economic (operating)'],
          rows: [
            ['What it is', 'Known foreign-currency cash flows: invoices, payables, loans', 'Re-stating a foreign subsidiary\'s accounts in the parent\'s currency', 'How currency moves change future competitiveness and cash flows'],
            ['Example', 'An Indian exporter has a $2M receivable due in 90 days', 'A UK parent\'s euro-based German subsidiary looks smaller in pounds when the euro falls', 'A Japanese carmaker loses US price competitiveness when the yen strengthens for years'],
            ['Hits', 'Cash and profit', 'Reported equity and earnings; often no cash impact', 'Long-term value, market share, margins'],
            ['Usual response', 'Forwards, options, invoicing currency', 'Often left unhedged, or hedged with matching foreign debt', 'Operational: produce where you sell, diversify suppliers and markets']
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'Hedged vs unhedged: a $2 million receivable',
          html: `<p>An Indian exporter will receive <b>$2,000,000</b> in 90 days. Spot is ₹85.00/$; the 90-day forward is ₹85.50/$.</p><ul><li><b>Hedge with a forward:</b> locks in $2M × 85.50 = <b>₹17.10 crore</b>, whatever happens.</li><li><b>Unhedged, rupee strengthens to ₹82:</b> receives ₹16.40 crore — <b>₹70 lakh less</b> than hedged.</li><li><b>Unhedged, rupee weakens to ₹88:</b> receives ₹17.60 crore — ₹50 lakh more than hedged.</li></ul><p>A forward removes both the downside and the upside. That is the point: the business is in the business of making products, not betting on currencies. (1 crore = 100 lakh = 10 million.)</p>`
        },
        {
          type: 'compare', title: 'The hedging toolkit', headers: ['Tool', 'How it works', 'Pros', 'Cons'],
          rows: [
            ['Forward contract', 'Agree today a rate for exchanging a fixed amount on a future date', 'Simple, no upfront cost, full certainty', 'You give up favourable moves; must deliver even if the deal falls through'],
            ['Currency option', 'Pay a premium for the right, not the obligation, to exchange at a set rate', 'Protects the downside, keeps the upside; good for uncertain cash flows (bids)', 'Upfront premium cost'],
            ['Natural hedge', 'Match revenues and costs (or assets and debt) in the same currency', 'Cheap and durable; reduces economic exposure', 'Requires changing operations or financing; rarely perfect'],
            ['Invoicing currency', 'Bill or buy in your own currency', 'Pushes risk to the other side', 'They may charge more for taking the risk, or refuse'],
            ['Netting', 'Offset payables and receivables across group companies before hedging', 'Cuts the volume and cost of hedging', 'Needs a central treasury and good data'],
            ['Price-adjustment clauses', 'Contract price resets if the rate moves beyond a band', 'Shares risk with customers', 'Harder to negotiate; customers may resist']
          ]
        },
        {
          type: 'case', company: 'Airbus', year: '2000s–present', title: 'Selling in dollars, paying in euros',
          situation: `Commercial aircraft are priced in US dollars worldwide, but a large share of Airbus\'s costs — engineering, assembly, salaries — are in euros (and pounds). When the euro strengthens, each dollar of revenue covers fewer euros of cost.`,
          decision: `Airbus runs a large, multi-year <b>hedge book</b>, selling a high proportion of expected future dollar revenue forward years in advance. It has also pushed some sourcing into dollars — a natural hedge — and periodically cited the weak dollar as a reason for cost-cutting programmes.`,
          outcome: `The hedge book smooths results: a sharp currency move hits profits gradually rather than overnight. But it also means reported results reflect rates locked in years earlier, and a long-term currency trend still has to be met with cost and sourcing changes.`,
          lesson: `Financial hedges buy <b>time</b>; operational hedges (where you produce and buy) handle <b>economic</b> exposure. Big exporters need both.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Pegs can break overnight',
          html: `<p>On 15 January 2015 the Swiss National Bank suddenly abandoned the minimum rate of 1.20 francs per euro it had defended since 2011. The franc jumped dramatically within minutes. Swiss exporters saw their costs rise sharply against foreign competitors, and several retail currency brokers suffered losses large enough to put them out of business. Lesson: an official peg reduces volatility day to day, but concentrates risk into rare, violent moves.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your company expects $10M of export revenue over the next 12 months. Your CEO asks: "Should we hedge all of it with forwards today?"`,
          options: [
            { text: 'Yes — hedge 100% of the 12 months now.', feedback: 'Risky: if orders come in lower than forecast you are over-hedged and must still deliver dollars you do not have. Rates are also locked for longer than needed.', good: false },
            { text: 'No — currencies are random, so hedging is pointless.', feedback: 'Randomness is exactly why firms hedge: to protect margins and plan with confidence. Not hedging is itself a bet.', good: false },
            { text: 'Layer it: hedge a high share of confirmed near-term orders and a smaller share of later, less certain forecasts, then roll forward each month.', feedback: 'Correct. A layered hedge (for example 75% of months 1–3, 50% of months 4–6, 25% of months 7–12) matches hedges to forecast confidence and averages rates over time.', good: true }
          ]
        }
      ],
      terms: [
        { term: 'Spot rate', def: 'The exchange rate for immediate delivery (usually two business days).' },
        { term: 'Forward contract', def: 'An agreement to exchange a fixed amount of currency at a set rate on a future date.' },
        { term: 'Covered interest parity', def: 'The rule that forward rates reflect the interest-rate gap between two currencies.' },
        { term: 'Transaction exposure', def: 'Risk on known foreign-currency cash flows such as invoices and loans.' },
        { term: 'Translation exposure', def: 'Changes in reported results when foreign subsidiaries\' accounts are converted to the parent\'s currency.' },
        { term: 'Economic exposure', def: 'The long-run effect of currency moves on a firm\'s competitiveness and future cash flows.' },
        { term: 'Natural hedge', def: 'Offsetting currency risk by matching revenues and costs, or assets and debts, in the same currency.' }
      ],
      quiz: [
        {
          q: 'Spot is ₹84/$. The rupee interest rate is 7% and the dollar rate is 5%. Roughly what is the one-year forward?',
          options: ['₹82.40/$', '₹84.00/$', '₹85.60/$', '₹88.20/$'],
          answer: 2,
          explain: '84 × 1.07 ÷ 1.05 = 84 × 1.01905 ≈ ₹85.60/$. The higher-interest currency (rupee) trades at a forward discount.'
        },
        {
          q: 'A German subsidiary of a UK company makes the same profit in euros, but reported group profit in pounds falls because the euro weakened. This is:',
          options: ['Translation exposure', 'Transaction exposure', 'Economic exposure', 'Interest-rate risk'],
          answer: 0,
          explain: 'Converting a subsidiary\'s accounts into the parent\'s reporting currency creates translation exposure, often with no direct cash effect.'
        },
        {
          q: 'An importer must pay €500,000 in 3 months. Which action hedges this transaction exposure?',
          options: ['Sell euros forward', 'Buy euros forward', 'Do nothing; it is translation exposure', 'Invoice its own customers in euros'],
          answer: 1,
          explain: 'The importer needs euros later, so it buys euros forward to lock in the cost today.'
        },
        {
          q: 'A US exporter bids for a contract in yen that it may or may not win. Which tool fits best?',
          options: ['A forward contract for the full amount', 'Netting', 'A currency option', 'Translation hedge'],
          answer: 2,
          explain: 'With an uncertain cash flow, an option protects the downside without obliging delivery if the bid is lost.'
        },
        {
          q: 'An Indian exporter hedged $1M at ₹86. At maturity spot is ₹89. Compared with not hedging, the hedge:',
          options: ['Gained ₹3 lakh', 'Gained ₹30 lakh', 'Lost ₹3 lakh', 'Gave up ₹30 lakh of upside'],
          answer: 3,
          explain: 'Unhedged it would receive ₹8.9 crore; hedged it receives ₹8.6 crore — ₹30 lakh of foregone gain. That is the price of certainty, not a mistake.'
        }
      ],
      challenge: {
        title: 'Design an FX policy for an Indian SaaS company',
        prompt: `Your Bengaluru SaaS firm earns <b>$6M a year</b> (about $500k a month) from US customers. Almost all costs — salaries, office, cloud resold in rupees — are <b>₹45 crore a year</b>. Spot is ₹85/$; the 12-month forward is about ₹86.6/$.<br><br>(a) What is annual operating profit at ₹85, ₹80 and ₹90? (b) How much does profit change per ₹1 move? (c) Propose a hedging policy the board can approve.`,
        hints: ['Revenue in rupees = $6M × rate.', 'A ₹1 move on $6M is ₹60 lakh.', 'Think about forecast certainty month by month — annual contracts make near-term revenue very predictable.'],
        model: `<p><b>(a) Profit sensitivity</b></p><table><thead><tr><th>Rate</th><th>Revenue</th><th>Costs</th><th>Profit</th></tr></thead><tbody><tr><td>₹80/$</td><td>₹48 crore</td><td>₹45 crore</td><td>₹3 crore</td></tr><tr><td>₹85/$</td><td>₹51 crore</td><td>₹45 crore</td><td>₹6 crore</td></tr><tr><td>₹90/$</td><td>₹54 crore</td><td>₹45 crore</td><td>₹9 crore</td></tr></tbody></table><p><b>(b)</b> Each ₹1 move = $6M × ₹1 = <b>₹60 lakh</b> of profit — 10% of the base-case ₹6 crore. A 6% rupee rally (₹85 → ₹80) halves profit. This is a big, one-directional transaction exposure.</p><p><b>(c) Proposed policy</b></p><ul><li><b>Objective:</b> protect budgeted margins, not speculate.</li><li><b>Layered forwards:</b> 75% of expected receipts for months 1–3, 50% for months 4–6, 25% for months 7–12; roll monthly. Contracted annual subscriptions can be hedged at the high end.</li><li><b>Benefit of the forward premium:</b> selling dollars forward at about ₹86.6 vs ₹85 spot adds roughly 1.9% to rupee revenue on hedged amounts.</li><li><b>Options</b> for uncertain new-business pipeline, within a premium budget.</li><li><b>Natural hedges:</b> pay US-based staff, tools and marketing in dollars from dollar revenue; consider dollar pricing escalators in multi-year contracts.</li><li><b>Governance:</b> board-approved limits, approved banks, monthly reporting of hedge ratio and mark-to-market; no hedging beyond forecast exposure.</li></ul><p><b>Recommendation:</b> adopt the layered policy now. It roughly halves the profit swing from currency moves over the next 6 months while keeping some upside.</p>`
      },
      takeaways: [
        'Interest rates, inflation, trade balances and risk mood all move currencies — nobody predicts them reliably.',
        'Forward rates reflect interest-rate gaps, not forecasts.',
        'Know your exposure type: transaction, translation or economic — each needs a different response.',
        'Financial hedges buy time; operational hedges handle long-run economic exposure.',
        'Layer hedges to match forecast confidence and set the policy before you need it.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'global-3',
      title: 'Political economy and country risk: institutions, regulation and sanctions',
      level: 'Intermediate',
      minutes: 16,
      hook: `The best market on paper can become a write-off in a week — because a law, a court or a government decided it should.`,
      eli5: `Imagine joining a new football league. Before signing up you would ask: are the referees fair? Do the rules change in the middle of a match? Can the team owner take your boots? Is your team even allowed to play against some others? Countries are leagues with different referees and rulebooks. <b>Country risk</b> is the chance that the rules, the referee or the league itself turn against you.`,
      blocks: [
        {
          type: 'text', title: 'Institutions: the rules of the game',
          html: `<p>Economist <b>Douglass North</b> called institutions "the rules of the game" — formal ones (laws, courts, property rights, regulators) and informal ones (norms, trust, how things really get done).</p><p><b>Daron Acemoglu, Simon Johnson and James Robinson</b> (Nobel prize 2024) argued that <b>inclusive institutions</b> — secure property, fair courts, open competition — explain why some countries grow rich, while <b>extractive institutions</b> concentrate power and wealth in a few hands.</p><p>For a business, institutions decide whether contracts are enforced, whether licences are granted fairly, and whether profits can be taken home. PESTEL (strategy-2) gives you the checklist; political economy explains <i>why</i> rules change and who changes them.</p>`
        },
        {
          type: 'framework', name: 'Country-risk layers', by: 'Common practice in political-risk analysis', when: 'Before investing in, or depending on, a country',
          steps: [
            { label: '1. Political stability', desc: 'Elections, coups, unrest, succession risk. Look at how power changes hands, not just who holds it today.' },
            { label: '2. Policy and regulatory risk', desc: 'Sudden changes in tax, licensing, pricing caps, data rules or foreign-ownership limits — including retrospective changes.' },
            { label: '3. Expropriation and contract enforcement', desc: 'Outright nationalisation is rare; "creeping" expropriation (fines, forced renegotiation, licence delays) is more common. Can you enforce a contract in local courts?' },
            { label: '4. Transfer and convertibility', desc: 'Can you convert local profits into hard currency and send them home? Capital controls and FX shortages trap cash.' },
            { label: '5. Sanctions and geopolitical alignment', desc: 'Is the country, a partner, or a sector subject to sanctions or export controls — now, or plausibly soon?' },
            { label: '6. Governance and corruption', desc: 'Bribery risk exposes you to laws like the US FCPA and UK Bribery Act wherever you operate.' },
            { label: '7. Macro and social licence', desc: 'Inflation, debt crises, FX collapse; public and political attitudes toward foreign firms in your sector.' }
          ]
        },
        {
          type: 'matrix', name: 'Market attractiveness vs country risk', xLabel: 'Market attractiveness →', yLabel: 'Country risk →',
          cells: [
            { label: 'Avoid / monitor', desc: 'High risk, modest prize. Serve opportunistically through exports or distributors with cash-in-advance terms.' },
            { label: 'Enter with protection', desc: 'High prize, high risk. Use partners, staged investment, political-risk insurance, local financing and treaty protection.' },
            { label: 'Export / light touch', desc: 'Low risk but small prize. Serve through e-commerce or distributors; do not divert scarce management time.' },
            { label: 'Commit', desc: 'Attractive and stable. Invest for scale, local teams and long-term position.' }
          ]
        },
        {
          type: 'case', company: 'Uber', year: '2014–2016', title: 'China: a local champion with friends',
          situation: `Uber entered China around 2014 and fought a subsidy war with Didi Chuxing, which itself was formed by a 2015 merger of rivals backed by Tencent and Alibaba. (The pricing track covered the price-war economics.) Beyond money, Didi had home-field advantages: integration with WeChat and Alipay, local data and closer understanding of regulators.`,
          decision: `In mid-2016 China issued national rules that legalised ride-hailing but tightened requirements on drivers and vehicles and discouraged selling rides below cost. Facing continued heavy losses, Uber agreed in August 2016 to sell Uber China to Didi in exchange for a minority stake in the combined business (reported at about 18% economic interest), with Didi also investing $1 billion in Uber.`,
          outcome: `Uber exited the market but kept financial exposure to its growth. Didi became dominant in China. (Didi itself later faced a major regulatory crackdown after its 2021 US listing.)`,
          lesson: `In markets where regulators, data rules and local ecosystems favour domestic champions, the question is not only "can we win?" but "will we be allowed to win?" A negotiated exit for a stake can be better than an unwinnable war.`
        },
        {
          type: 'compare', title: 'Sanctions and controls: what a business must know', headers: ['Type', 'What it does', 'Business implication'],
          rows: [
            ['Comprehensive embargo', 'Bans almost all trade with a country', 'Usually means no business at all, directly or via intermediaries'],
            ['Sectoral sanctions', 'Restrict specific activities, e.g. finance, energy or defence, in a country', 'Some deals allowed; check the precise activity and counterparties'],
            ['Targeted (blocking) sanctions', 'Freeze assets of listed people and firms; under the US "50% rule", entities majority-owned by them are blocked too', 'Screen ownership, not just names, of customers, suppliers and banks'],
            ['Secondary sanctions', 'Penalise non-US (or non-home) firms that deal with a sanctioned target', 'Can reach you even if you have no presence in the sanctioning country'],
            ['Export controls', 'Restrict sending specific goods, software or technology to certain destinations or users', 'Classify your products; covered in depth in global-5']
          ]
        },
        {
          type: 'case', company: 'Western companies in Russia', year: '2022–2023', title: 'Exits under sanctions and countersanctions',
          situation: `After Russia\'s full-scale invasion of Ukraine in February 2022, the US, EU, UK and others imposed sweeping sanctions. Many Western firms announced they would leave Russia.`,
          decision: `Early movers sold quickly: McDonald\'s sold its Russian restaurants to an existing local licensee, which reopened them under a new brand. BP announced it would exit its large stake in Rosneft. As exits grew, Russia required government approval for sales by investors from "unfriendly" countries, imposed large mandatory discounts and demanded payments to the state, and in some cases placed foreign-owned assets under temporary state management.`,
          outcome: `Many companies took very large write-downs; some that waited found exiting slower, costlier or temporarily impossible.`,
          lesson: `Country risk compounds: sanctions from your home side and countermeasures from the host side can trap capital. Have an exit plan before you need it, and recognise that options narrow over time.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Tools for managing political risk',
          html: `<ul><li><b>Political-risk insurance:</b> covers expropriation, currency inconvertibility, political violence and breach of contract — from MIGA (World Bank group), national development finance agencies and private insurers.</li><li><b>Investment treaties:</b> bilateral investment treaties can give access to international arbitration. Vodafone and Cairn both won arbitration awards after India\'s 2012 retrospective tax change; India repealed the retrospective provision in 2021.</li><li><b>Structure:</b> local partners, local debt (so you owe what is at risk), staged investment and keeping critical IP outside the country.</li><li><b>Relationships:</b> broad local stakeholder support — employees, suppliers, communities — is a real shield.</li></ul>`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Score two countries',
          note: 'Pick two candidate markets. Use criteria such as market size, growth, regulatory stability, currency convertibility, sanctions exposure and partner availability. Give risk criteria high weights and see whether the ranking changes.'
        },
        {
          type: 'scenario',
          prompt: `A new distributor in a neighbouring country offers to buy $3M of your industrial sensors a year, paying a 10% premium. Their end customers are "various industrial firms" they will not name, and the country borders a sanctioned state.`,
          options: [
            { text: 'Accept — the distributor is not on any sanctions list.', feedback: 'Name screening is not enough. Unnamed end users, a premium price and proximity to a sanctioned state are classic diversion red flags.', good: false },
            { text: 'Run enhanced due diligence: beneficial-ownership checks, end-user certificates, product classification under export controls, and contract clauses banning re-export; walk away if answers are unclear.', feedback: 'Correct. Regulators expect a risk-based process. A 10% premium is not worth penalties, a ban from export privileges or reputational damage.', good: true },
            { text: 'Accept but ask them to pay in cryptocurrency to stay private.', feedback: 'This adds money-laundering risk on top of sanctions risk. Never structure a deal to avoid scrutiny.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Institutions', def: 'The formal and informal rules that shape economic behaviour: laws, courts, property rights, norms.' },
        { term: 'Country risk', def: 'The chance that political, regulatory, economic or social conditions in a country hurt a business\'s value.' },
        { term: 'Creeping expropriation', def: 'Gradual erosion of a foreign investment\'s value through fines, licence delays, forced renegotiation or discriminatory rules.' },
        { term: 'Transfer and convertibility risk', def: 'The risk you cannot convert local profits into foreign currency or move them out of the country.' },
        { term: 'Secondary sanctions', def: 'Penalties on third-country firms that deal with a sanctioned target.' },
        { term: 'Political-risk insurance', def: 'Insurance against losses from expropriation, inconvertibility, political violence or government breach of contract.' },
        { term: 'Beneficial owner', def: 'The real person who ultimately owns or controls a company, behind any shell entities.' }
      ],
      quiz: [
        {
          q: 'A government does not nationalise your factory but keeps delaying licence renewals and imposing new fines until the business is worth little. This is:',
          options: ['Transfer risk', 'Translation exposure', 'Creeping expropriation', 'A secondary sanction'],
          answer: 2,
          explain: 'Gradual value destruction through regulatory pressure is creeping expropriation — more common than outright nationalisation.'
        },
        {
          q: 'Under the US "50% rule", an entity is treated as blocked if:',
          options: ['50% or more of its revenue comes from a sanctioned country', 'It is 50% or more owned, in aggregate, by blocked persons', 'Half its directors are foreign', 'It has operated for under 50 months'],
          answer: 1,
          explain: 'Entities owned 50% or more by blocked persons are blocked even if not named on the list — so screen ownership, not just names.'
        },
        {
          q: 'Which risk does political-risk insurance typically NOT cover?',
          options: ['Expropriation', 'Currency inconvertibility', 'Political violence', 'A competitor cutting prices'],
          answer: 3,
          explain: 'Ordinary commercial risks like competition are not covered; the policy covers government and political events.'
        },
        {
          q: 'What made Uber\'s position in China especially hard, beyond Didi\'s subsidies?',
          options: ['Ride-hailing was banned outright', 'Didi had local ecosystem ties (WeChat, Alipay), local data and closer understanding of regulators', 'Uber had no capital', 'China required all apps to be free'],
          answer: 1,
          explain: 'Didi was backed by Tencent and Alibaba and was a domestic champion in a market where regulation and ecosystems favour local players.'
        },
        {
          q: 'You plan a $50M plant in a high-growth but high-risk country. Which combination reduces political risk most sensibly?',
          options: ['Fund it all with home-country equity and move fast', 'Avoid all local partners to keep control', 'Stage the investment, use some local debt, buy political-risk insurance and check treaty protection', 'Keep profits in local currency indefinitely'],
          answer: 2,
          explain: 'Staging limits capital at risk, local debt aligns liabilities with assets, and insurance plus treaties provide recourse if things go wrong.'
        }
      ],
      challenge: {
        title: 'Two markets, one investment',
        prompt: `Your packaged-foods company can build one $40M plant. <b>Country A</b>: 200 million people, 6% GDP growth, frequent policy changes on foreign ownership in food retail, currency fell 30% over three years, strong local partner available. <b>Country B</b>: 60 million people, 2.5% growth, stable courts, convertible currency, high labour costs, crowded market.<br><br>Build a weighted scorecard, recommend a market and an entry structure, and list three protections.`,
        hints: ['Weight criteria before scoring, so you are not tempted to tweak weights to fit a favourite.', 'Separate the prize (size, growth, margin) from the risks (policy, currency, enforcement).', 'Ask how you could capture A\'s growth while limiting capital at risk.'],
        model: `<p><b>1. Scorecard (1–5, higher is better)</b></p><table><thead><tr><th>Criterion</th><th>Weight</th><th>A</th><th>B</th></tr></thead><tbody><tr><td>Market size and growth</td><td>30%</td><td>5</td><td>2</td></tr><tr><td>Competitive intensity</td><td>15%</td><td>4</td><td>2</td></tr><tr><td>Regulatory stability</td><td>20%</td><td>2</td><td>5</td></tr><tr><td>Currency and convertibility</td><td>15%</td><td>2</td><td>5</td></tr><tr><td>Cost base</td><td>10%</td><td>4</td><td>2</td></tr><tr><td>Partner availability</td><td>10%</td><td>5</td><td>3</td></tr><tr><td><b>Weighted score</b></td><td>100%</td><td><b>3.70</b></td><td><b>3.15</b></td></tr></tbody></table><p>A: 1.5 + 0.6 + 0.4 + 0.3 + 0.4 + 0.5 = <b>3.70</b>. B: 0.6 + 0.3 + 1.0 + 0.75 + 0.2 + 0.3 = <b>3.15</b>. A leads, but only because of the prize — its risk scores are weak.</p><p><b>2. Recommendation:</b> enter Country A, but not with a $40M wholly owned plant on day one. Form a <b>joint venture</b> with the local partner, start with contract manufacturing or a smaller first phase (for example $15M), and expand when policy and currency behave.</p><p><b>3. Protections</b></p><ul><li><b>Political-risk insurance</b> for expropriation and inconvertibility.</li><li><b>Local-currency debt</b> for part of the funding, so a currency fall shrinks liabilities too.</li><li><b>Structure through a treaty jurisdiction</b> with a bilateral investment treaty, and keep brands and recipes licensed from outside the country with a royalty stream.</li></ul><p>Keep B as an export market served by a distributor — low risk, low effort.</p>`
      },
      takeaways: [
        'Institutions — courts, property rights, regulators — decide whether a market\'s profits are actually yours.',
        'Score country risk in layers: politics, policy, expropriation, convertibility, sanctions, governance, macro.',
        'Screen ownership and end use, not just names, for sanctions compliance.',
        'In high-prize, high-risk markets, use partners, staging, local debt, insurance and treaties.',
        'Plan your exit before you enter — options shrink when a crisis hits.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'global-4',
      title: 'CAGE distance and market entry modes in depth',
      level: 'Intermediate',
      minutes: 17,
      hook: `Walmart was the world\'s biggest retailer and still lost about a billion dollars in Germany — not because it chose the wrong country, but the wrong way in.`,
      eli5: `Opening a branch of your lemonade stand in another town can be done many ways. You can drive lemonade there and sell it (export). You can sell your secret recipe to someone there (licensing). You can let them use your name, recipe and stall design for a fee (franchising). You can team up with a local kid and share the profits (joint venture). You can buy an existing stall (acquisition). Or you can build a brand-new stall yourself (greenfield). Each gives you a different mix of control, cost and risk.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than the scaling track',
          html: `<p>You met the <b>CAGE framework</b> (Cultural, Administrative, Geographic, Economic distance) in scaling-6. Three ideas take it further:</p><ul><li><b>Distance is between a pair of countries</b>, not a property of one. India is "close" to the UAE (diaspora, flights, trade ties) but "far" from Brazil.</li><li><b>Industry decides which distance matters.</b> Cultural distance hits food, media and retail; administrative distance hits regulated sectors like banking, telecoms and defence; geographic distance hits heavy or perishable goods; economic distance matters most when you compete on cost or sell to a specific income segment.</li><li><b>Distance shapes strategy and entry mode</b>, not just the go/no-go decision.</li></ul>`
        },
        {
          type: 'framework', name: 'The AAA strategies for handling distance', by: 'Pankaj Ghemawat, 2007', when: 'Deciding how to create value across borders',
          steps: [
            { label: 'Adaptation', desc: 'Change products, prices and operations to fit each market. Gains local relevance but adds cost and complexity. Example: McDonald\'s vegetarian menu in India.' },
            { label: 'Aggregation', desc: 'Group countries into regions or segments to gain scale while allowing some variation. Example: a regional hub serving several Gulf states.' },
            { label: 'Arbitrage', desc: 'Exploit differences between countries — labour cost, skills, tax, regulation. Example: Indian IT services delivering to US clients.' },
            { label: 'Pick a primary', desc: 'Most firms cannot excel at all three at once; choose the one or two that fit your advantage and organise around them.' }
          ]
        },
        {
          type: 'compare', title: 'The six entry modes', headers: ['Mode', 'Control', 'Capital', 'Speed', 'Risk & exit cost', 'Typical use'],
          rows: [
            ['Exporting', 'Low over the market; high over product', 'Very low', 'Fast', 'Low; easy to stop', 'Testing demand; light products; distant markets'],
            ['Licensing', 'Low — the licensee runs it', 'Very low', 'Fast', 'Low capital risk; risk of creating a competitor and leaking IP', 'Patents, brands, technology in markets you will not run yourself'],
            ['Franchising', 'Medium — via brand standards and contracts', 'Low', 'Fast at scale', 'Brand risk if franchisees under-perform', 'Restaurants, hotels, retail and services with a repeatable format'],
            ['Joint venture', 'Shared', 'Medium', 'Medium', 'Partner disputes; complex exits', 'Markets needing local knowledge, relationships or legal ownership limits'],
            ['Acquisition', 'High', 'High (upfront)', 'Fast', 'Overpaying; integration and culture clash', 'Buying scale, brands, licences or talent'],
            ['Greenfield subsidiary', 'Highest', 'High', 'Slow', 'Highest; hard to exit', 'Protecting core know-how; building your own culture and operations']
          ]
        },
        {
          type: 'framework', name: 'Why own rather than license? The OLI paradigm', by: 'John Dunning (eclectic paradigm), 1970s–80s', when: 'Deciding whether to invest abroad directly or work through others',
          steps: [
            { label: 'O — Ownership advantage', desc: 'Do you have something special (brand, technology, process) that can beat local firms despite being foreign? If not, do not go.' },
            { label: 'L — Location advantage', desc: 'Is there a reason to operate in that country (customers, costs, resources, tariffs avoided) rather than export from home?' },
            { label: 'I — Internalisation advantage', desc: 'Is it better to keep the activity inside your firm than to sell or license it? Yes when know-how is tacit, contracts are hard to enforce or partners could become competitors.' },
            { label: 'Decision', desc: 'O only → export. O + L but weak I → license or franchise. O + L + I → foreign direct investment (JV, acquisition or greenfield).' },
            { label: 'Add learning (Uppsala model)', desc: 'Johanson and Vahlne (1977) observed firms go step by step — export, then sales office, then production — and start with "psychically" close markets. Born-global digital firms skip steps, but the learning logic still holds.' }
          ]
        },
        {
          type: 'matrix', name: 'Choosing an entry mode', xLabel: 'Need to control know-how and quality →', yLabel: 'Need for local knowledge and relationships →',
          cells: [
            { label: 'Licensing or franchising with local partners', desc: 'Partners bring local know-how; your know-how is codifiable or well protected.' },
            { label: 'Joint venture or acquisition', desc: 'You need both local insight and tight control — share ownership or buy it, and plan integration carefully.' },
            { label: 'Exporting', desc: 'Little local adaptation needed and little to protect on the ground — sell from home through distributors or online.' },
            { label: 'Greenfield subsidiary', desc: 'Your edge is in tacit know-how or culture you must protect, and the market is close enough to learn yourself.' }
          ]
        },
        {
          type: 'case', company: 'Walmart', year: '1997–2006', title: 'Germany: the wrong way in',
          situation: `Scaling-6 told this as a CAGE story. Look at the entry mode. Walmart entered Germany in 1997 by buying the Wertkauf hypermarket chain (21 stores) and in 1998 the Interspar chain (74 stores) — a total under 100 stores in a market dominated by deeply entrenched discounters such as Aldi and Lidl.`,
          decision: `Acquisitions gave instant presence but not <b>scale</b>: Walmart lacked the purchasing volume and dense network that made its US cost advantage work. Many stores were in poor locations. Management initially came from the US and clashed with German works councils and unions; parts of its US-style ethics code were challenged in German courts.`,
          outcome: `Walmart sold its 85 remaining German stores to Metro in 2006 and took a loss widely reported at around $1 billion.`,
          lesson: `An acquisition is only as good as the assets bought. If your ownership advantage depends on scale and systems, buying a sub-scale chain does not transfer it. Match entry mode to how your advantage actually works.`
        },
        {
          type: 'case', company: 'Starbucks', year: '1999–2025', title: 'China: entry mode as a journey',
          situation: `Starbucks entered China in 1999 through licensing and joint ventures with regional partners, because it needed local knowledge, real-estate access and relationships.`,
          decision: `As it learned the market, it moved toward control — for example buying out the remaining 50% of its East China joint venture in 2017 for about $1.3 billion — and built a large wholly owned network. Then competition intensified, notably from Luckin Coffee and other fast-growing local chains with app-first, lower-price models.`,
          outcome: `In 2025 Starbucks agreed to sell a majority stake in its China retail operations to the investment firm Boyu Capital while keeping a significant stake and the brand licence — moving back toward a partnership model.`,
          lesson: `Entry mode is not a one-time choice. Firms often start with partners to learn, take control to capture value, and bring partners back when local competition or politics change the economics.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Choose an entry mode',
          note: 'Set options as Export, Franchise, JV and Greenfield. Score them on control, capital needed, speed, local knowledge and exit flexibility. Then double the weight on "control" and watch whether the answer flips.'
        },
        {
          type: 'scenario',
          prompt: `Your Indian D2C skincare brand (strong online, ₹150 crore revenue) wants to enter the UAE. Retail there is dominated by a few mall operators and pharmacy chains, and many customers already know your brand from India.`,
          options: [
            { text: 'Build 15 company-owned stores in Dubai malls in year one.', feedback: 'High capital and high exit cost before you have proven demand. Mall leases are long and expensive.', good: false },
            { text: 'Start with cross-border e-commerce plus a distribution agreement with a pharmacy chain; open one flagship after demand is proven.', feedback: 'Good. CAGE distance is low (diaspora, flights, trade ties), so export and distribution let you learn cheaply before committing capital.', good: true },
            { text: 'License the brand to a local manufacturer for a 3% royalty.', feedback: 'Low risk, but you lose control of formulation and quality — dangerous for a skincare brand whose trust is its edge.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'CAGE framework', def: 'Cultural, Administrative, Geographic and Economic distance between two countries.' },
        { term: 'AAA strategies', def: 'Adaptation, Aggregation and Arbitrage — three ways to create value across borders.' },
        { term: 'OLI paradigm', def: 'Ownership, Location and Internalisation advantages explaining when firms invest abroad directly.' },
        { term: 'Licensing', def: 'Granting another firm rights to use your IP (patents, brand, technology) for a royalty.' },
        { term: 'Master franchise', def: 'A franchise agreement giving one partner the right to develop (and often sub-franchise) a whole country or region.' },
        { term: 'Joint venture', def: 'A separate company owned jointly by two or more parents that share control, investment and profits.' },
        { term: 'Greenfield investment', def: 'Building a new foreign operation from scratch rather than buying one.' },
        { term: 'Uppsala model', def: 'The observation that firms internationalise gradually, starting with close markets and low-commitment modes.' }
      ],
      quiz: [
        {
          q: 'A firm has a strong brand (O) and a reason to be in the market (L), but its recipe is easy to codify and franchisees are reliable. OLI suggests:',
          options: ['Franchising or licensing', 'A greenfield subsidiary', 'Exporting only', 'Staying home'],
          answer: 0,
          explain: 'Ownership and location advantages exist, but internalisation is weak — so franchising captures value without heavy investment.'
        },
        {
          q: 'Which CAGE dimension matters MOST for a bank entering a new country?',
          options: ['Geographic', 'Cultural', 'Administrative', 'Economic'],
          answer: 2,
          explain: 'Banking is heavily regulated — licences, capital rules and foreign-ownership limits make administrative distance decisive.'
        },
        {
          q: 'Indian IT services firms delivering software to US clients from India mainly use which AAA strategy?',
          options: ['Adaptation', 'Arbitrage', 'Aggregation', 'None'],
          answer: 1,
          explain: 'They exploit differences in labour cost and skills between countries — arbitrage.'
        },
        {
          q: 'Why did Walmart\'s acquisitions in Germany fail to transfer its US advantage?',
          options: ['German law banned acquisitions', 'It bought too many stores', 'It paid in euros', 'Its edge depended on scale and systems, and under 100 sub-scale stores could not deliver them'],
          answer: 3,
          explain: 'Walmart\'s ownership advantage was purchasing scale and logistics density. Buying a small, poorly located network did not recreate it.'
        },
        {
          q: 'A restaurant chain opens company stores costing £600k each that earn £225k EBITDA a year, or franchises them earning a 6% royalty on £1.5M sales. Per store, which is TRUE?',
          options: ['Franchising earns more cash per store', 'The company store earns £225k on £600k (37.5% pre-tax return); franchising earns £90k with almost no capital', 'Both earn the same', 'The franchise needs more capital'],
          answer: 1,
          explain: '6% × £1.5M = £90k royalty with little capital; the company store earns more absolute cash but needs £600k. The right choice depends on capital, control and speed.'
        }
      ],
      challenge: {
        title: 'Taking an Indian restaurant chain to the UK',
        prompt: `Your profitable Indian casual-dining chain wants 20 UK restaurants within 5 years. Estimates per restaurant: revenue £1.5M a year, store EBITDA margin 15%, build-out capex £600k. Franchise option: 6% royalty on sales plus a £30k upfront fee per store; your UK support team would cost about £200k a year (for any number of franchised stores up to 20). A JV partner with UK restaurant experience offers to fund 50% of capex for 50% of profits.<br><br>Compare company-owned, franchise and JV for 20 stores on capital needed, annual cash to you and return on capital. Then recommend an approach, considering CAGE and control.`,
        hints: ['Company-owned: 20 × £600k capex; 20 × 15% × £1.5M EBITDA.', 'Franchise: 20 × 6% × £1.5M royalty, minus support costs; upfront fees are one-off.', 'JV: half the capex, half the EBITDA.'],
        model: `<p><b>1. Economics at 20 stores</b></p><table><thead><tr><th></th><th>Company-owned</th><th>Franchise</th><th>50/50 JV</th></tr></thead><tbody><tr><td>Your capital</td><td>£12.0M</td><td>~£0.2M (team set-up)</td><td>£6.0M</td></tr><tr><td>Annual cash to you</td><td>£4.5M EBITDA</td><td>£1.8M royalty − £0.2M = £1.6M</td><td>£2.25M</td></tr><tr><td>Return on capital</td><td>37.5%</td><td>Very high (little capital)</td><td>37.5%</td></tr><tr><td>One-off fees</td><td>—</td><td>£0.6M</td><td>—</td></tr><tr><td>Control</td><td>Full</td><td>Contractual only</td><td>Shared</td></tr></tbody></table><p>Calculations: company EBITDA = 20 × 15% × £1.5M = £4.5M; £4.5M ÷ £12M = 37.5%. Royalty = 20 × 6% × £1.5M = £1.8M. JV = half of each.</p><p><b>2. CAGE and control</b></p><ul><li><b>Cultural:</b> low-to-medium distance — Indian food is mainstream in the UK and the diaspora is large, but competition from independent curry houses is intense. Brand consistency is your edge, so quality control matters.</li><li><b>Administrative:</b> stable rules, but employment law, food-safety standards and work-visa rules for specialist chefs need local expertise.</li><li><b>Economic:</b> higher rents and wages than India — store economics must be re-validated, not assumed.</li></ul><p><b>3. Recommendation:</b> a <b>hybrid</b>. Open 2–3 company-owned flagships (about £1.8M) to prove UK unit economics and build the playbook. If store EBITDA reaches 15%, sign a <b>master franchise or JV</b> with an experienced UK operator for the remaining stores. This keeps capital at risk low until the model is proven, while keeping control where the brand is formed.</p>`
      },
      takeaways: [
        'CAGE distance is between pairs of countries, and the industry decides which distance matters most.',
        'Choose a primary AAA strategy: adaptation, aggregation or arbitrage.',
        'OLI explains when to own versus license: own when know-how is tacit or contracts are weak.',
        'An acquisition does not transfer an advantage that depends on scale you did not buy.',
        'Entry mode evolves — partner to learn, own to capture value, partner again when the game changes.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'global-5',
      title: 'Global supply chains, export controls and geopolitics',
      level: 'Advanced',
      minutes: 18,
      hook: `For thirty years supply chains were built for the lowest cost; now a single government licence decision can wipe billions off a chipmaker\'s sales overnight.`,
      eli5: `Imagine your class builds a giant Lego model. For years, everyone bought pieces from the one shop with the cheapest prices, across town. Then one day the road is blocked, or the shop is told it cannot sell certain pieces to your school. Smart classes now keep some pieces in a cupboard, buy from two shops, and check which pieces might be banned before designing the model.`,
      blocks: [
        {
          type: 'text', title: 'From efficiency to resilience',
          html: `<p>Operations-5 covered supply-chain resilience basics. Here we add the <b>geopolitical</b> layer. Recent shocks taught companies that concentration is a hidden cost:</p><ul><li><b>2011:</b> the Tōhoku earthquake and tsunami in Japan disrupted automotive and electronics parts worldwide.</li><li><b>2020–2022:</b> COVID-19 closures, container shortages and the 2021 chip shortage halted car production lines.</li><li><b>March 2021:</b> the <i>Ever Given</i> blocked the Suez Canal for six days.</li><li><b>From late 2023:</b> attacks on Red Sea shipping forced many vessels to sail around Africa, adding time and cost.</li><li><b>2018 onward:</b> tariffs and export controls turned trade policy into a strategic weapon.</li></ul>`
        },
        {
          type: 'compare', title: 'The new geography of supply', headers: ['Strategy', 'What it means', 'Example', 'Trade-off'],
          rows: [
            ['Offshoring', 'Producing in the lowest-cost country, often far away', 'Electronics assembly concentrated in China from the 2000s', 'Cheap but concentrated and exposed'],
            ['China+1', 'Keep China but add at least one other country', 'Apple expanding iPhone assembly in India through Foxconn and Tata Electronics; Samsung\'s large phone production in Vietnam', 'More resilience; higher cost while new sites ramp up'],
            ['Nearshoring', 'Move production closer to the customer', 'US firms using Mexico; European firms using Eastern Europe or Turkey', 'Shorter lead times; sometimes higher labour cost'],
            ['Friend-shoring', 'Source from politically aligned countries', 'A term popularised by US Treasury Secretary Janet Yellen in 2022', 'Lower political risk; smaller supplier pool'],
            ['Reshoring', 'Bring production back home, often with subsidies', 'Semiconductor fabs supported by the US CHIPS and Science Act (2022)', 'Highest control; highest cost; skills shortages']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Export controls in plain English',
          html: `<p>Export controls restrict sending certain <b>goods, software and technology</b> to certain <b>destinations, end users or end uses</b> — especially "dual-use" items with military potential.</p><ul><li><b>US:</b> the Export Administration Regulations (EAR) classify items by an <b>ECCN</b> code; the <b>Entity List</b> names restricted buyers; the <b>Foreign Direct Product Rule</b> can reach items made abroad with US technology or tools.</li><li><b>Deemed exports:</b> showing controlled technology to a foreign national, even at home, can count as an export.</li><li><b>Others:</b> the EU dual-use regulation, Japan and the Netherlands (key for chipmaking equipment), and India\'s SCOMET list.</li></ul><p>Basic compliance: classify every product, screen every customer and end user, look for red flags (unusual routing, vague end use), keep records, and train sales teams.</p>`
        },
        {
          type: 'case', company: 'Nvidia', year: '2022–2025', title: 'Selling AI chips across a geopolitical fault line',
          situation: `In October 2022 the US imposed sweeping controls on exporting advanced AI chips and chipmaking equipment to China. Nvidia, whose data-centre GPUs power AI training, had a large China business.`,
          decision: `Nvidia designed lower-performance chips for China (such as the A800 and H800) that met the rules. The US tightened the rules in October 2023, catching those chips, so Nvidia created further compliant versions, including the H20. In April 2025 the US government said exports of the H20 would require a licence.`,
          outcome: `Nvidia took a charge of about $4.5 billion in early 2025 related to H20 inventory and purchase commitments and said it could not ship further planned H20 sales. US policy then shifted several times — including conditional approvals linked to revenue-sharing with the US government — while Chinese authorities encouraged domestic buyers to use local chips. Nvidia\'s China share of data-centre sales fell sharply, and Chinese firms such as Huawei accelerated their own AI chips.`,
          lesson: `When your product is strategically important, governments become stakeholders in your sales. Export controls can change faster than product cycles, and they can create competitors in the restricted market. Scenario-plan for policy, not just demand.`
        },
        {
          type: 'case', company: 'Toyota', year: '2011–2021', title: 'Global production, lean — and a stockpile',
          situation: `Toyota pioneered just-in-time production (operations-2) and builds many vehicles in or near the markets where it sells them — across North America, Europe and Asia — which reduces currency and tariff exposure. The 2011 earthquake showed the weakness of lean chains: Toyota discovered it did not know all of its lower-tier suppliers, and production was disrupted for months.`,
          decision: `Afterwards Toyota built a detailed database of its multi-tier suppliers and adopted a business-continuity plan that included asking suppliers to hold larger buffer stocks of critical, hard-to-replace parts such as semiconductors.`,
          outcome: `When the global chip shortage hit in 2021, Toyota was widely reported to have weathered the first months better than many rivals because of those buffers, though it too was eventually forced to cut output.`,
          lesson: `Lean is not the same as zero inventory everywhere. Hold strategic buffers for parts that are critical, slow to source and geographically concentrated — and map your suppliers\' suppliers.`
        },
        {
          type: 'framework', name: 'Geopolitical supply-chain stress test', by: 'Synthesis of common resilience practice', when: 'Annually, and before any major sourcing decision',
          steps: [
            { label: '1. Map to tier 2–3', desc: 'Know where critical inputs are actually made, not just who invoices you.' },
            { label: '2. Classify and screen', desc: 'Which items are export-controlled or likely to be? Which suppliers or customers sit near sanctions lines?' },
            { label: '3. Find concentration', desc: 'Flag any input where one country or one supplier is above, say, 50% of supply.' },
            { label: '4. Model scenarios', desc: 'Tariff jumps, licence bans, shipping-lane closure, a regional conflict. Estimate time-to-recover and lost gross profit.' },
            { label: '5. Choose responses by part', desc: 'Dual-source, buffer stock, redesign for substitutable parts, regionalise, or accept the risk consciously.' },
            { label: '6. Govern', desc: 'Give one executive ownership; report risk to the board; review whenever policy changes.' }
          ]
        },
        {
          type: 'formula', name: 'Is resilience worth paying for?',
          expr: 'Expected annual loss = Probability of disruption × Lost gross profit; invest if risk reduction > cost of resilience',
          explain: `Compare the annual cost of a resilience measure with the expected loss it avoids. Remember the formula understates the value for rare, catastrophic events that could threaten the company itself.`,
          example: `Dual-sourcing adds 4% to $50M of spend = <b>$2.0M a year</b>. A 3-month disruption has an estimated 10% annual probability and would cost $30M of gross profit → expected loss $3.0M. If dual-sourcing cuts that impact by 70%, it avoids 0.7 × $3.0M = <b>$2.1M</b> a year — slightly more than it costs, before even counting the tail risk.`
        },
        {
          type: 'scenario',
          prompt: `After a tense news week, a board member demands that you "get completely out of China within 12 months". 70% of your components come from China, many from suppliers with no alternatives yet.`,
          options: [
            { text: 'Agree and order an immediate full exit.', feedback: 'A rushed exit risks quality failures, stock-outs and higher costs — and many "new" suppliers still rely on Chinese inputs.', good: false },
            { text: 'Refuse — China is cheapest and nothing will happen.', feedback: 'Ignoring concentration risk is how companies get caught. The board is right to worry.', good: false },
            { text: 'Present a stress test by part: dual-source the most critical and concentrated items first, add buffers where switching is slow, set a target such as no country above 50% for critical parts within three years, and report progress quarterly.', feedback: 'Correct. A prioritised China+1 plan cuts the biggest risks quickly and avoids paying for resilience where it is not needed.', good: true }
          ]
        }
      ],
      terms: [
        { term: 'Export controls', def: 'Government rules restricting the export of sensitive goods, software and technology to certain destinations or users.' },
        { term: 'Dual-use item', def: 'A product or technology with both civilian and military uses.' },
        { term: 'Entity List', def: 'A US list of foreign parties that need a licence (often denied) to receive items subject to US export rules.' },
        { term: 'Foreign Direct Product Rule', def: 'A US rule that can apply controls to items made abroad using US technology, software or equipment.' },
        { term: 'China+1', def: 'Keeping production in China while adding at least one other country to reduce concentration.' },
        { term: 'Friend-shoring', def: 'Moving supply chains to politically allied countries.' },
        { term: 'Tier-2 supplier', def: 'Your supplier\'s supplier — often where hidden concentration lies.' }
      ],
      quiz: [
        {
          q: 'A US firm shares controlled chip-design technology with a foreign-national engineer in its California office. Under US rules this may be:',
          options: ['Always legal because it happens in the US', 'A "deemed export" requiring a licence', 'A tariff violation', 'Covered only by EU law'],
          answer: 1,
          explain: 'Releasing controlled technology to a foreign national can be treated as an export to their home country, even inside the US.'
        },
        {
          q: 'A resilience measure costs $1.5M a year. Disruption probability is 20% a year with a $20M loss, and the measure cuts impact by 50%. Is it worth it on expected value?',
          options: ['No — it saves $1.0M', 'Yes — it saves $4M', 'Yes — it saves $2.0M a year vs $1.5M cost', 'No — it saves nothing'],
          answer: 2,
          explain: 'Expected loss = 20% × $20M = $4M; a 50% reduction saves $2M a year, more than the $1.5M cost.'
        },
        {
          q: 'What did Toyota change after the 2011 earthquake that helped in the 2021 chip shortage?',
          options: ['It abandoned lean production', 'It moved all production to Japan', 'It stopped using semiconductors', 'It mapped multi-tier suppliers and held buffer stocks of critical parts like chips'],
          answer: 3,
          explain: 'Toyota kept lean principles but added supplier mapping and strategic buffers for hard-to-replace parts.'
        },
        {
          q: 'Which is the best description of "China+1"?',
          options: ['Keeping China in the supply chain while adding at least one other production country', 'Leaving China entirely', 'Selling only to China', 'Adding one Chinese supplier'],
          answer: 0,
          explain: 'China+1 diversifies without abandoning China\'s scale and supplier ecosystem.'
        },
        {
          q: 'What happened when US export controls tightened on Nvidia\'s China-specific chips?',
          options: ['Nvidia was unaffected', 'Nvidia had to redesign products repeatedly and took a multi-billion-dollar charge in 2025, while Chinese rivals accelerated', 'China banned all US goods', 'The controls applied only to gaming chips'],
          answer: 1,
          explain: 'Successive rule changes forced repeated redesigns and, in 2025, a charge of about $4.5 billion tied to H20 chips.'
        }
      ],
      challenge: {
        title: 'De-risk a consumer-electronics supply chain',
        prompt: `You are COO of a $600M-revenue smart-home device company (gross margin 40%). 75% of final assembly and most chips and batteries come from China. Your devices use a Wi-Fi chip from a US design firm. Customers are 60% US, 25% EU, 15% Asia. A new US tariff of 25% on Chinese-assembled devices is under discussion, and shipping disruptions have added 3 weeks to lead times.<br><br>Build a three-year resilience plan. Quantify what is at stake and prioritise actions.`,
        hints: ['First, what is the gross profit at risk if US-bound devices face a 25% tariff? Assume landed cost for US sales is about 50% of US revenue.', 'Separate final assembly (easier to move) from components (harder).', 'Use the expected-loss formula to justify dual-sourcing.'],
        model: `<p><b>1. What is at stake</b></p><ul><li>US revenue = 60% × $600M = $360M. Landed cost of US units ≈ 50% × $360M = $180M. A 25% tariff on that ≈ <b>$45M a year</b> — about 19% of total gross profit ($240M = 40% × $600M).</li><li>Plus lead-time risk: 3 extra weeks of inventory in transit ties up about 3 ÷ 52 × $216M of annual US cost of sales (60% of $360M) ≈ <b>$12.5M</b> of extra working capital.</li></ul><p><b>2. Priorities</b></p><ol><li><b>Year 1 — final assembly China+1:</b> move assembly of US-bound devices to Mexico or Vietnam (Mexico gives shorter lead times; check USMCA rules of origin). Final assembly is the easiest stage to move and often determines country of origin for tariffs.</li><li><b>Year 1 — compliance:</b> classify products and the Wi-Fi chip under export rules; screen distributors in Asia.</li><li><b>Year 1–2 — buffers:</b> 8–12 weeks of safety stock for single-source chips and batteries.</li><li><b>Year 2–3 — components:</b> qualify second sources for batteries and power components outside China; redesign boards to accept alternative chips.</li><li><b>Governance:</b> one owner, quarterly board report, target no single country above 50% of any critical input by year 3.</li></ol><p><b>3. Cost vs benefit:</b> if the move raises unit costs 5% on US units ($9M a year) but avoids a $45M tariff with even a 50% probability (expected $22.5M), the case is strong — and it also cuts lead times.</p><p><b>Recommendation:</b> start the Mexico/Vietnam assembly line now for US volume; dual-source components over three years; keep China for EU and Asian volume, where tariff risk is lower.</p>`
      },
      takeaways: [
        'Supply chains are now judged on resilience and political exposure, not just cost.',
        'Export controls follow technology — classify products, screen customers and watch for diversion.',
        'China+1, nearshoring and friend-shoring trade higher cost for lower concentration risk.',
        'Map to tier 2–3: hidden concentration usually sits with your suppliers\' suppliers.',
        'Price resilience with expected loss, then add a premium for catastrophic tail risks.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'global-6',
      title: 'Running a global company: global vs local, transfer pricing and emerging-market multinationals',
      level: 'Advanced',
      minutes: 18,
      hook: `The hardest question in a multinational is not "where do we go next?" but "what should headquarters decide, and what should the country manager decide?"`,
      eli5: `Think of a chain of ice-cream shops in many countries. If headquarters decides everything, every shop sells the same flavours — cheap and consistent, but maybe nobody in one country likes them. If every shop decides everything, each sells local favourites, but the chain loses its buying power and brand. Great chains decide some things centrally (the cone, the brand, the freezer) and let shops choose others (the flavours). Running a global company is choosing which is which.`,
      blocks: [
        {
          type: 'matrix', name: 'The integration–responsiveness grid', xLabel: 'Pressure for local responsiveness →', yLabel: 'Pressure for global integration →',
          cells: [
            { label: 'Global', desc: 'Standard products, centralised decisions, maximum scale. Fits semiconductors, aircraft engines, many B2B components.' },
            { label: 'Transnational', desc: 'Global scale and local fit at once, with knowledge flowing in all directions. Hard to run; fits consumer goods, pharmaceuticals, many tech platforms.' },
            { label: 'International (home-replication)', desc: 'Sell home-country products abroad with light adaptation; HQ holds the know-how. Common early stage.' },
            { label: 'Multidomestic', desc: 'Each country runs largely as its own business with local products and brands. Fits food, media, retail and services with strong local tastes.' }
          ]
        },
        {
          type: 'text', title: 'Who decides what?',
          html: `<p>The grid comes from work by <b>C.K. Prahalad and Yves Doz</b> and by <b>Christopher Bartlett and Sumantra Ghoshal</b> (1980s). In practice, companies split <b>activities</b>, not whole firms:</p><ul><li><b>Usually global:</b> brand architecture, core technology platforms, capital allocation, treasury and FX, compliance standards, procurement of big inputs.</li><li><b>Usually local:</b> pricing, channel mix, promotions, product variants, hiring and government relations.</li><li><b>Centres of excellence:</b> a subsidiary leads a capability for the whole group — for example R&D in Bengaluru or design in Milan.</li><li><b>Reverse innovation:</b> products built for emerging markets that later sell in rich ones — GE developed low-cost portable ECG machines in India that it later sold elsewhere.</li></ul>`
        },
        {
          type: 'case', company: 'Unilever in India (Hindustan Unilever)', year: '1930s–present', title: 'Being local inside a global group',
          situation: `Unilever has operated in India for about a century. Its Indian business, Hindustan Unilever (HUL), is a separately listed company in which Unilever holds a majority stake (raised to about two-thirds in 2013).`,
          decision: `HUL runs largely as a local business: Indian brands and formats, low-price sachets for rural buyers, a huge distribution network reaching small shops, and Project Shakti, which trained rural women as door-to-door sellers. At the same time it uses Unilever\'s global brands, R&D and management systems, and pays Unilever a royalty for technology and brands — a royalty Unilever raised in 2013, which drew scrutiny from minority investors.`,
          outcome: `HUL has long been one of India\'s largest and most valuable consumer companies, and a major training ground for leaders who went on to run businesses elsewhere in Unilever.`,
          lesson: `Transnational in practice: local products and distribution, global brands and know-how. When the subsidiary is listed, every cross-border charge (royalties, services, transfer prices) is also a governance question for minority shareholders.`
        },
        {
          type: 'formula', name: 'Transfer pricing and the arm\'s-length principle',
          expr: 'Group tax = Σ (Profit in each country × that country\'s tax rate); profit in each country depends on the internal (transfer) price',
          explain: `A <b>transfer price</b> is what one part of a group charges another for goods, services, IP or loans. Tax authorities require the <b>arm\'s-length</b> price — what unrelated parties would agree. Setting prices to park profit in low-tax places is the core of profit shifting, and is challenged by tax authorities everywhere.`,
          example: `<i>Illustrative.</i> A factory in Country A (tax 25%) makes a unit for $60. A sister distributor in Country B (tax 12.5%) sells it for $100 with $10 of its own costs.<br>Transfer price $90: A profit $30 → tax $7.50; B profit $0 → tax $0. Group tax <b>$7.50</b>.<br>Transfer price $70: A profit $10 → $2.50; B profit $20 → $2.50. Group tax <b>$5.00</b>.<br>The lower price "saves" $2.50 per unit — but only if $70 is genuinely arm\'s length. Otherwise A\'s tax authority will adjust it, with interest and penalties.`
        },
        {
          type: 'compare', title: 'Transfer-pricing methods (OECD guidelines)', headers: ['Method', 'How it sets the price', 'Best for'],
          rows: [
            ['Comparable uncontrolled price (CUP)', 'Price charged between unrelated parties for the same item', 'Commodities and standard products'],
            ['Resale price', 'Final sale price minus a normal distributor margin', 'Distributors that do not add much value'],
            ['Cost plus', 'Cost plus a normal mark-up', 'Contract manufacturers and service centres (e.g. IT captives)'],
            ['Transactional net margin (TNMM)', 'Compares the net margin with similar independent companies', 'The most widely used method in practice'],
            ['Profit split', 'Splits combined profit by each side\'s contribution', 'Highly integrated operations where both sides add unique value']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'The tax rules have tightened',
          html: `<ul><li><b>BEPS:</b> the OECD/G20 project (from 2013) against base erosion and profit shifting.</li><li><b>Country-by-country reporting:</b> groups with revenue of €750 million or more report revenue, profit, tax and employees by country to tax authorities.</li><li><b>Pillar Two:</b> a global minimum effective tax of 15% for large groups, implemented by many countries from 2024. Its application to US-headquartered groups has been contested and negotiated since 2025.</li><li><b>India</b> has an active transfer-pricing regime and an Advance Pricing Agreement programme that lets firms agree methods with the tax department in advance.</li></ul><p>Transfer pricing is a specialist area — always use qualified tax advisers.</p>`
        },
        {
          type: 'case', company: 'Tata Motors and Jaguar Land Rover', year: '2008–present', title: 'An emerging-market multinational buys a crown jewel',
          situation: `In 2008, at the start of the global financial crisis, Tata Motors bought Jaguar and Land Rover from Ford for about $2.3 billion. Sceptics doubted an Indian firm could run two British luxury brands; Tata Steel had bought Anglo-Dutch Corus in 2007.`,
          decision: `Tata largely let JLR keep its British management, design and engineering identity, while investing heavily in new models, plants (including in China, Slovakia and later India) and electrification — the "light-touch owner, heavy investor" model.`,
          outcome: `JLR became a major profit and cash contributor in many years, though highly cyclical and exposed to China demand, Brexit and supply disruption — including a serious 2025 cyberattack that halted production for weeks. Other emerging-market multinationals followed similar paths: Lenovo bought IBM\'s PC business (2005), Geely bought Volvo Cars (2010) and Haier bought GE Appliances (2016).`,
          lesson: `Emerging-market multinationals often buy brands, technology and access rather than build them, and succeed when they respect the acquired firm\'s identity while providing patient capital.`
        },
        {
          type: 'scenario',
          prompt: `You are the new CEO of a consumer-goods multinational. Country managers complain HQ\'s global product launches do not fit their markets; HQ complains countries create too many variants and waste scale. What do you do?`,
          options: [
            { text: 'Centralise all product decisions at HQ.', feedback: 'You gain scale but risk becoming the Walmart-in-Germany story everywhere — losing local fit in markets with strong tastes.', good: false },
            { text: 'Give countries full freedom.', feedback: 'You gain fit but lose purchasing scale, brand consistency and R&D leverage.', good: false },
            { text: 'Define a global "core" (brand, formulations platform, packaging specs, procurement) and a local "flex" layer (variants, pack sizes, pricing, channels), with a few countries acting as centres of excellence.', feedback: 'Correct. Split by activity, not by firm — the essence of the transnational model.', good: true }
          ]
        },
        {
          type: 'checklist', title: 'Running a global company well',
          items: ['Written decision rights: what HQ decides, what countries decide', 'Common data, finance and compliance systems across countries', 'Treasury policy covering FX, cash pooling and repatriation', 'Transfer-pricing policy with documentation and benchmarking', 'Country risk reviewed at least annually', 'Local leaders in senior group roles, not just expatriates', 'Mechanisms to spread local innovations to other markets']
        }
      ],
      terms: [
        { term: 'Integration–responsiveness grid', def: 'A 2×2 that classifies multinational strategies by pressure for global efficiency vs local fit.' },
        { term: 'Transnational strategy', def: 'Pursuing global efficiency, local responsiveness and worldwide learning at the same time.' },
        { term: 'Transfer price', def: 'The price charged between companies in the same group for goods, services, IP or loans.' },
        { term: 'Arm\'s-length principle', def: 'Transfer prices must match what independent parties would agree in similar circumstances.' },
        { term: 'Pillar Two', def: 'An OECD/G20 framework for a 15% global minimum effective tax on large multinational groups.' },
        { term: 'Reverse innovation', def: 'Innovations developed first for emerging markets that later spread to developed markets.' },
        { term: 'Emerging-market multinational', def: 'A multinational headquartered in an emerging economy, such as Tata, Haier, Lenovo or Infosys.' }
      ],
      quiz: [
        {
          q: 'A packaged-food company sells very different products in each country, each run by a local team. It is following which strategy?',
          options: ['Multidomestic', 'Global', 'International', 'Arbitrage'],
          answer: 0,
          explain: 'High local responsiveness and low integration — each country operates as its own business.'
        },
        {
          q: 'Factory in Country X (tax 30%) makes a unit for $50; sister company in Country Y (tax 10%) sells it for $100 with no other costs. At a transfer price of $80, what is group tax per unit?',
          options: ['$9', '$11', '$15', '$20'],
          answer: 1,
          explain: 'X earns $80 − $50 = $30, taxed at 30% = $9. Y earns $100 − $80 = $20, taxed at 10% = $2. Group tax = $11 per unit.'
        },
        {
          q: 'Which transfer-pricing method is most often used for a captive IT service centre?',
          options: ['Resale price', 'Profit split', 'Cost plus', 'CUP'],
          answer: 2,
          explain: 'Routine service providers are usually paid their costs plus an arm\'s-length mark-up.'
        },
        {
          q: 'What made Hindustan Unilever\'s 2013 royalty increase to Unilever a governance issue?',
          options: ['Royalties are illegal in India', 'It was paid in dollars', 'HUL had no brands', 'HUL is listed, so payments to the parent affect minority shareholders'],
          answer: 3,
          explain: 'Cross-border charges from a parent to a listed subsidiary shift value between majority and minority shareholders, so they draw scrutiny.'
        },
        {
          q: 'Which pattern best describes Tata Motors\' approach to JLR after 2008?',
          options: ['Replace all British management with Indian executives', 'Keep JLR\'s identity and management while investing heavily', 'Merge JLR into Tata Motors\' India brands', 'Sell the brands within two years'],
          answer: 1,
          explain: 'Tata acted as a light-touch owner and patient investor — a model several emerging-market acquirers followed.'
        }
      ],
      challenge: {
        title: 'Organise a global expansion — and price the internal flows',
        prompt: `A US consumer-electronics accessories firm ($400M revenue) is expanding in India and Indonesia. It plans: product design and brand in the US; an India subsidiary that will (a) run Indian sales and (b) host a 300-person engineering centre serving the whole group; Indonesian sales through a local subsidiary.<br><br>(1) Which decisions should be global vs local? (2) The engineering centre will cost ₹60 crore a year. Propose a transfer-pricing approach and the annual charge to the US parent, assuming a benchmark mark-up of 15%. (3) What risks should the CFO watch?`,
        hints: ['Use the integration–responsiveness logic activity by activity.', 'A captive engineering centre is a routine service provider — think cost plus.', '₹60 crore × 1.15 = ?'],
        model: `<p><b>1. Global vs local</b></p><table><thead><tr><th>Global (HQ)</th><th>Local (country)</th></tr></thead><tbody><tr><td>Brand, core product design, quality standards</td><td>Pricing, pack and bundle choices, promotions</td></tr><tr><td>Engineering platform and roadmap</td><td>Channel mix (marketplaces, retail, distributors)</td></tr><tr><td>Treasury, FX hedging, capital allocation</td><td>Hiring, local partnerships, government relations</td></tr><tr><td>Compliance standards and transfer-pricing policy</td><td>Service and warranty operations</td></tr></tbody></table><p>This is a transnational design: the India engineering centre is a <b>centre of excellence</b> for the group while Indian sales stay locally responsive.</p><p><b>2. Transfer pricing for the engineering centre</b></p><ul><li>Method: <b>cost plus</b> (or TNMM using a cost-plus net margin), benchmarked against independent engineering-services firms.</li><li>Charge = ₹60 crore × 1.15 = <b>₹69 crore</b> a year (about $8M at roughly ₹86/$), giving India taxable profit of ₹9 crore.</li><li>Document with a benchmarking study; consider an Advance Pricing Agreement with India\'s tax department for certainty.</li><li>Keep Indian sales on a separate arm\'s-length arrangement (e.g. resale-price or TNMM for a distributor).</li></ul><p><b>3. CFO risks</b></p><ul><li>Tax authorities arguing the centre creates valuable IP and deserves more than cost plus.</li><li>FX: rupee costs vs dollar charges — hedge the centre\'s budget.</li><li>Permanent establishment risk if US staff conclude contracts in India.</li><li>Repatriation rules and withholding taxes on royalties or dividends from Indonesia and India.</li></ul><p><b>Recommendation:</b> launch with a documented cost-plus policy at 15%, seek an APA within two years, and write decision rights into the operating model before hiring country leaders.</p>`
      },
      takeaways: [
        'Split decisions by activity: global core, local flex.',
        'The transnational ideal — scale, local fit and shared learning — is powerful but hard to run.',
        'Transfer prices must be arm\'s length; documentation and benchmarking are essential.',
        'Listed subsidiaries make every parent charge a governance issue.',
        'Emerging-market multinationals often buy brands and technology, then win with patient capital.'
      ]
    }
  ]
});
