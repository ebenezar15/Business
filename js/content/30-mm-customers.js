/* MBA Studio — Marketing Management II: Customers, Loyalty & Segments (elective series) */
MBA.addTrack({
  id: 'mm-customers',
  stage: 5,
  order: 30,
  title: 'Marketing Management II: Customers, Loyalty & Segments',
  icon: '🧑‍🤝‍🧑',
  color: '#9333ea',
  series: 'Marketing Management',
  part: 'Part II · Connecting with customers',
  tagline: 'Know who buys, why they buy, and who is worth keeping',
  summary: `Go deep on the customer. You will measure value, satisfaction and lifetime value, build loyalty systems that survive a price war, decode the psychology and decision shortcuts behind every purchase, sell into a business buying center, and choose which segments deserve your money — and which you should ethically leave alone.`,
  outcomes: [
    'Calculate customer perceived value, NPS and a discounted customer lifetime value',
    'Design a loyalty system using interaction, rewards, institutional ties and win-backs',
    'Explain a purchase through cultural, social, personal and psychological influences',
    'Map the five-stage buying process and the heuristics that bend it',
    'Sell into an organisational buying center through the eight-stage B2B process',
    'Segment a market on the right bases and pick targets with clear, ethical criteria'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'mm-customers-1',
      title: 'Customer value, satisfaction and lifetime value',
      level: 'Beginner',
      minutes: 15,
      hook: `Customers do not buy products — they buy the gap between everything they get and everything it costs them, and the firms that measure that gap win.`,
      eli5: `Think about choosing a barber. One is cheap but far away, always late and a bit rude. Another costs a little more, is round the corner, remembers your name and never messes up. Most people pick the second one, even though the price is higher, because the <b>whole deal</b> is better: less travel, less waiting, less worry. Marketers call that whole deal <b>customer perceived value</b>. If you keep giving someone a good deal for years, they are worth far more to you than one haircut — that is <b>lifetime value</b>.`,
      blocks: [
        {
          type: 'text', title: 'Value is a comparison, not a price tag',
          html: `<p><b>Customer perceived value</b> = total customer benefit − total customer cost, <i>as the customer sees it</i>, compared with the best alternative. You can raise value by adding benefit <i>or</i> by removing cost — and non-money costs (time, effort, worry) are often the cheapest to remove.</p><p>You met the basic idea of a value proposition in <a href="#/lesson/marketing-1">Marketing 1</a>; here we make it measurable.</p>`
        },
        {
          type: 'map', title: 'What goes into perceived value', center: 'Customer perceived value',
          branches: [
            { label: 'Product benefit', desc: 'Performance, features, reliability, design.', children: ['Quality', 'Durability'] },
            { label: 'Service benefit', desc: 'Delivery, installation, support, returns.', children: ['Speed', 'Ease'] },
            { label: 'People benefit', desc: 'Competence and courtesy of the staff the customer meets.', children: ['Expertise', 'Empathy'] },
            { label: 'Image benefit', desc: 'What owning the brand says about the buyer.', children: ['Status', 'Belonging'] },
            { label: 'Monetary cost', desc: 'Price plus fees, running costs and switching costs.', children: ['Price', 'Total cost of use'] },
            { label: 'Time cost', desc: 'Searching, travelling, waiting, learning to use it.' },
            { label: 'Energy cost', desc: 'Physical and mental effort to buy and use.' },
            { label: 'Psychological cost', desc: 'Risk, anxiety, fear of looking foolish.' }
          ]
        },
        {
          type: 'flow', title: 'How a customer judges satisfaction',
          steps: [
            { label: 'Expectations form', desc: 'From past experience, friends, reviews and the firm’s own promises.' },
            { label: 'Customer experiences the product or service', desc: 'Every touchpoint counts: buying, using, getting help.' },
            { label: 'Does performance match expectations?', kind: 'decision', desc: 'The judgement is relative — the same experience can delight one person and disappoint another.',
              branches: [ { label: 'Below', to: 'Dissatisfied: complains or quietly leaves' }, { label: 'Meets', to: 'Satisfied: may still switch for a better deal' }, { label: 'Above', to: 'Delighted: repeats and recommends' } ] },
            { label: 'Behaviour follows', desc: 'Repurchase, word of mouth, complaints or defection — and new expectations for next time.' }
          ]
        },
        {
          type: 'compare', title: 'Ways to monitor satisfaction', headers: ['Method', 'What it tells you', 'Watch out for'],
          rows: [
            ['Periodic surveys (CSAT)', 'Satisfaction with specific touchpoints', 'Low response rates; only the happy or furious answer'],
            ['Net Promoter Score', 'Willingness to recommend, one simple number', 'Says little about why; easy to game if staff are paid on it'],
            ['Complaint and suggestion tracking', 'Real problems in customers’ own words', 'Most unhappy customers never complain — they leave'],
            ['Mystery shopping', 'What the experience is actually like', 'A snapshot, not a trend'],
            ['Lost-customer analysis', 'Why people defected', 'Hard to reach ex-customers; answers are polite, not honest'],
            ['Behavioural data', 'Repeat rate, basket size, churn', 'Shows what, not why — pair with listening']
          ]
        },
        {
          type: 'formula', name: 'Net Promoter Score',
          expr: 'NPS = % promoters (9–10) − % detractors (0–6)',
          explain: `Ask "How likely are you to recommend us to a friend?" on a 0–10 scale. Passives (7–8) count in the base but not in the score. NPS runs from −100 to +100. It is a <b>tracking</b> tool: compare against yourself and close competitors, and always follow up with "why?".`,
          example: `400 responses: 180 promoters (45%), 140 passives (35%), 80 detractors (20%). NPS = 45 − 20 = <b>+25</b>. Converting 40 detractors into passives lifts NPS to 45 − 10 = +35 without gaining a single promoter.`
        },
        {
          type: 'formula', name: 'Customer lifetime value (discounted)',
          expr: 'CLV = m ÷ (1 + i − r)   then subtract acquisition cost',
          explain: `<b>m</b> = annual margin per customer (revenue × gross margin, less cost to serve). <b>r</b> = annual retention rate. <b>i</b> = discount rate. This version assumes margin arrives at the end of each year and the customer is certain to stay for year 1. It goes deeper than the simple LTV in <a href="#/lesson/finance-4">Finance 4</a> and <a href="#/lesson/growth-3">Growth 3</a> by discounting future years.`,
          example: `<i>Illustrative.</i> A customer spends $40 a month at 60% margin → m = $24 × 12 = <b>$288</b>. r = 80%, i = 10%.<br>Year by year: Y1 288 ÷ 1.1 = 261.8; Y2 230.4 ÷ 1.21 = 190.4; Y3 184.3 ÷ 1.331 = 138.5; Y4 147.5 ÷ 1.464 = 100.7; Y5 118.0 ÷ 1.611 = 73.2 → five-year value ≈ <b>$765</b>.<br>Forever: 288 ÷ (1 + 0.10 − 0.80) = 288 ÷ 0.30 = <b>$960</b>. With $150 acquisition cost, net CLV = <b>$810</b>.<br>Lift retention to 90%: 288 ÷ 0.20 = $1,440 — a 10-point retention gain adds 50% to value.`
        },
        {
          type: 'pyramid', title: 'Customer profitability tiers', levels: [
            { label: 'Platinum', note: 'Few, very profitable', desc: 'Heavy users, low cost to serve, not price-sensitive. Protect and deepen.' },
            { label: 'Gold', note: 'Profitable, could be more', desc: 'Buy from several suppliers. Grow share of wallet with bundles and service.' },
            { label: 'Iron', note: 'Break-even volume', desc: 'Keep the lights on. Serve efficiently, mostly digital self-service.' },
            { label: 'Lead', note: 'Lose money', desc: 'High cost to serve, heavy discounting or returns. Re-price, re-route to cheaper channels, or let go.' }
          ]
        },
        {
          type: 'case', company: 'Zappos', year: '2000s–today', title: 'Service as the product',
          situation: `Selling shoes online looked risky: customers could not try them on, and returns were expensive.`,
          decision: `Zappos removed the psychological and time costs: free shipping both ways, a famously long return window, a 24/7 call centre with no scripts and no call-time targets, and staff empowered to solve problems however they saw fit. Stories of marathon support calls and unexpected upgrades spread by word of mouth.`,
          outcome: `Zappos built an unusually loyal, repeat-buying customer base and a service reputation that became its brand. Amazon acquired it in 2009 in a deal valued at roughly $1.2 billion and kept it running as a separate brand.`,
          lesson: `Spending on service looks like cost on a P&L, but if it lifts retention and referrals it raises lifetime value — the right lens for judging it.`
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'Feel the retention lever',
          note: 'Set ARPU and margin to match the CLV example, then cut churn from 20% to 10%. Watch LTV and LTV:CAC — the same effect as raising retention in the formula above.'
        },
        {
          type: 'scenario',
          prompt: `Your call centre’s NPS jumped 15 points after managers started telling agents "anything below a 9 hurts your bonus". Repeat purchases are flat. The CEO wants to celebrate. What do you say?`,
          options: [
            { text: 'Celebrate — NPS is the single number that predicts growth.', feedback: 'A score that staff are pressured to inflate stops measuring the customer. Flat repeat purchases are the warning sign.', good: false },
            { text: 'Decouple NPS from individual bonuses, sample customers independently, and track it alongside repeat rate, complaints and churn.', feedback: 'Right. Measures used to reward people get gamed. Triangulate attitude (NPS) with behaviour (retention).', good: true },
            { text: 'Stop measuring satisfaction — it is all noise.', feedback: 'Throwing away the measure removes your early warning system. Fix how it is collected and used instead.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Customer perceived value', def: 'The difference between all the benefits a customer expects and all the costs (money, time, effort, risk) of getting them, versus alternatives.' },
        { term: 'Total customer cost', def: 'Monetary, time, energy and psychological costs of acquiring, using and disposing of a product.' },
        { term: 'Net Promoter Score (NPS)', def: 'Percentage of promoters (9–10) minus percentage of detractors (0–6) on a likelihood-to-recommend question.' },
        { term: 'Customer lifetime value (CLV)', def: 'The present value of the future profits expected from a customer over the whole relationship.' },
        { term: 'Cost to serve', def: 'What it costs to handle one customer: support, delivery, returns, discounts. Two customers with the same revenue can have very different profits.' },
        { term: 'Total quality management', def: 'An organisation-wide approach of continuously improving the quality of every process, product and service.' },
        { term: 'Share of wallet', def: 'The proportion of a customer’s total spending in a category that goes to you.' }
      ],
      quiz: [
        { q: 'A hotel adds a 2-minute app check-in that replaces a 20-minute queue. Which part of perceived value has it improved?', options: ['Image benefit', 'Monetary cost', 'Time and energy cost', 'Product benefit'], answer: 2, explain: 'Price and room are unchanged; the customer saves time and effort — a cost reduction.' },
        { q: 'Out of 200 respondents, 90 score 9–10, 60 score 7–8 and 50 score 0–6. What is the NPS?', options: ['+45', '+20', '+30', '+70'], answer: 1, explain: 'Promoters 45%, detractors 25%. NPS = 45 − 25 = +20.' },
        { q: 'Annual margin $500, retention 75%, discount rate 10%. Using CLV = m ÷ (1 + i − r), what is CLV before acquisition cost?', options: ['$1,429', '$2,000', '$667', '$5,000'], answer: 0, explain: '500 ÷ (1 + 0.10 − 0.75) = 500 ÷ 0.35 ≈ $1,429.' },
        { q: 'Why can a customer with high revenue be unprofitable?', options: ['Revenue is not recorded', 'High cost to serve, heavy discounts and returns can exceed margin', 'Big customers never churn', 'NPS is low'], answer: 1, explain: 'Customer profitability = margin − cost to serve. Demanding, discount-heavy accounts can lose money.' },
        { q: 'Which monitoring method is best for learning why customers left?', options: ['Lost-customer analysis', 'Mystery shopping', 'NPS of current customers', 'Counting complaints'], answer: 0, explain: 'Only contacting defectors tells you why they went; current-customer measures miss them.' }
      ],
      challenge: {
        title: 'Is the premium plan worth defending?',
        prompt: `<i>Illustrative.</i> A meal-kit company has two plans. <b>Basic</b>: $60/month, 30% margin, 60% annual retention, acquisition cost $90. <b>Premium</b>: $100/month, 35% margin, 75% annual retention, acquisition cost $200. Discount rate 10%. Marketing wants to cut the premium budget because "premium customers cost more than twice as much to acquire". Calculate net CLV for each plan and advise.`,
        hints: ['Annual margin m = monthly price × 12 × margin %.', 'Use CLV = m ÷ (1 + i − r), then subtract acquisition cost. Compare net CLV and the ratio of CLV to acquisition cost.'],
        model: `<p><b>1. Annual margin</b>: Basic 60 × 12 × 30% = <b>$216</b>. Premium 100 × 12 × 35% = <b>$420</b>.</p><p><b>2. Gross CLV</b>: Basic 216 ÷ (1.10 − 0.60) = 216 ÷ 0.50 = <b>$432</b>. Premium 420 ÷ (1.10 − 0.75) = 420 ÷ 0.35 = <b>$1,200</b>.</p><p><b>3. Net of acquisition</b>: Basic 432 − 90 = <b>$342</b> (CLV:CAC 4.8x). Premium 1,200 − 200 = <b>$1,000</b> (CLV:CAC 6.0x).</p><p><b>Recommendation</b>: Premium customers cost 2.2x as much to acquire but are worth almost 3x as much net. Do not cut the premium budget — shift money toward it until its marginal acquisition cost rises. Also test what drives premium’s higher retention (variety? delivery slots?) and see if any of it can lift Basic retention, where each extra point is worth more because Basic’s denominator is larger.</p>`
      },
      takeaways: [
        'Value = total benefit − total cost as the customer sees it; non-money costs are often cheapest to remove.',
        'Satisfaction is performance relative to expectations, so over-promising is a self-inflicted wound.',
        'NPS is useful for tracking, useless as a bonus target; pair attitude with behaviour.',
        'Discounted CLV puts a price on retention — small retention gains create large value gains.',
        'Rank customers by profit, not revenue: cost to serve separates platinum from lead.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'mm-customers-2',
      title: 'Cultivating relationships: CRM, loyalty and customer data',
      level: 'Beginner',
      minutes: 15,
      hook: `Winning a new customer costs far more than keeping one — yet most firms still spend most of their budget on strangers.`,
      eli5: `Your favourite corner shop owner knows you like the spicy crisps, keeps a pack aside, and lets you pay tomorrow if you forgot your wallet. You would not walk ten minutes further to save a coin. That is <b>customer relationship management</b>: remembering each person, treating them as an individual, and making it a little bit special to stay. Big companies try to do the same thing with data instead of memory.`,
      blocks: [
        {
          type: 'cycle', title: 'The customer relationship loop', center: 'Lifetime relationship',
          steps: [
            { label: 'Attract', desc: 'Target the right prospects — those likely to become profitable, not just any sign-up.' },
            { label: 'Onboard', desc: 'Get the first experience right; early disappointment drives most defection.' },
            { label: 'Personalise', desc: 'Use what you know to tailor offers, messages and service.' },
            { label: 'Serve and recover', desc: 'Make it easy to complain and fix problems fast.' },
            { label: 'Reward and bond', desc: 'Loyalty programmes, community and ties that raise switching costs.' },
            { label: 'Advocate', desc: 'Loyal customers refer others — feeding the next Attract stage.' }
          ]
        },
        {
          type: 'framework', name: 'Four levers for building loyalty', when: 'Designing a retention programme or diagnosing high churn',
          steps: [
            { label: '1. Interaction', desc: 'Listen and talk with customers: advisory panels, executives answering service calls, community forums. Customer empowerment means they can also talk to each other and publicly about you — design for it.' },
            { label: '2. Loyalty programmes', desc: 'Frequency rewards (points, tiers, free items) and clubs. They work when rewards are attainable and relevant; copied programmes become a cost of doing business.' },
            { label: '3. Institutional ties', desc: 'Structural links that make leaving costly: integrated software, stored preferences, long-term contracts, shared tools. Strongest — but must feel like help, not a trap.' },
            { label: '4. Win-backs', desc: 'Contact lapsed customers quickly with a reason to return. Ex-customers are often cheaper to win than strangers because they already know you.' }
          ]
        },
        {
          type: 'pyramid', title: 'The loyalty ladder', levels: [
            { label: 'Partner', desc: 'Co-creates with you: beta tests, advisory boards, joint plans.' },
            { label: 'Advocate', desc: 'Recommends you unprompted, defends you online.' },
            { label: 'Member', desc: 'Belongs to your programme or community; part of their identity.' },
            { label: 'Repeat customer', desc: 'Buys again, but may still shop around.' },
            { label: 'First-time customer', desc: 'Has bought once; most fragile stage.' },
            { label: 'Prospect', desc: 'Fits your target but has not bought.' }
          ]
        },
        {
          type: 'flow', title: 'Handling a complaint (service recovery)',
          steps: [
            { label: 'Make complaining easy', desc: 'Visible channels, short forms, no hold-music marathons. Silent unhappy customers are the dangerous ones.' },
            { label: 'Respond fast and own it', desc: 'Acknowledge within hours; apologise without blaming the customer.' },
            { label: 'Can the front line fix it now?', kind: 'decision', desc: 'Empowered staff with a clear budget to resolve issues resolve most cases at first contact.',
              branches: [ { label: 'Yes', to: 'Resolve and confirm the fix' }, { label: 'No', to: 'Escalate with a named owner and deadline' } ] },
            { label: 'Compensate fairly', desc: 'Match the remedy to the harm and the customer’s value.' },
            { label: 'Fix the root cause', desc: 'Log, categorise and feed complaints into product and process changes.' }
          ]
        },
        {
          type: 'map', title: 'Customer data: the engine and its risks', center: 'Customer data',
          branches: [
            { label: 'Customer database', desc: 'Organised records of each customer: contact, purchases, preferences, service history. Different from a mailing list.' },
            { label: 'Data warehouse', desc: 'All data from stores, web, app, call centre and partners pulled into one place for analysis.' },
            { label: 'Data mining', desc: 'Statistics and machine learning that find patterns: who will churn, what sells together, who responds to offers.', children: ['Churn prediction', 'Next best offer', 'Segments'] },
            { label: 'Personalisation', desc: 'Using the insights to tailor price, product, message and timing to individuals.' },
            { label: 'Downsides', desc: 'Expensive to build, often under-used, can push the firm to treat customers as numbers.', children: ['Cost', 'Bad data', 'Creepiness'] },
            { label: 'Privacy and law', desc: 'Consent, minimal collection and security are legal duties — see the privacy lesson in Legal.', children: ['GDPR', 'DPDP', 'CCPA'] }
          ]
        },
        {
          type: 'case', company: 'Harley-Davidson', year: '1983–today', title: 'Harley Owners Group: loyalty through belonging',
          situation: `In the early 1980s Harley-Davidson was struggling against Japanese rivals with better quality and lower prices. A management team had just bought the company back from its conglomerate owner.`,
          decision: `Alongside quality improvements, Harley launched the Harley Owners Group (H.O.G.) in 1983: a factory-sponsored club organised through local dealer chapters, with rides, rallies, magazines and events. Executives rode with customers to listen.`,
          outcome: `H.O.G. grew into one of the largest factory-sponsored motorcycle clubs in the world. It turned owners into a community, tied them to dealers (an institutional tie) and became a source of product feedback. Harley’s later struggle has been attracting younger riders — a reminder that a community built around one generation can age with it.`,
          lesson: `Social bonds are harder to copy than points. But loyalty to an identity needs refreshing as the customer base changes.`
        },
        {
          type: 'callout', kind: 'warning', title: 'When data mining gets creepy',
          html: `<p>A widely reported 2012 newspaper investigation described how the US retailer Target built a model that spotted likely pregnancies from shopping patterns (such as switching to unscented lotion and buying supplements) and sent baby-product offers. The story sparked public unease about how much retailers infer. Target reportedly started mixing baby offers in with unrelated items so the mailings felt less targeted.</p><p><b>Lesson</b>: being able to infer something does not mean you should act on it visibly. Ask "would this customer be comfortable if they knew how we know?"</p>`
        },
        {
          type: 'interactive', widget: 'retention', title: 'Reduce defection',
          note: 'Lower monthly churn by two points and watch how many customers from the original cohort are still with you after 24 months.'
        },
        {
          type: 'checklist', title: 'Before you launch a loyalty programme',
          items: [
            'Defined which customers you most want to retain (by profitability, not volume)',
            'Rewards are attainable within a few visits or months, not years',
            'Reward cost modelled as a % of margin, including breakage assumptions',
            'Programme gives data you will actually use for personalisation',
            'Clear consent and privacy notice; customers can see and delete their data',
            'Plan for what you will do when a competitor copies it'
          ]
        }
      ],
      terms: [
        { term: 'Customer relationship management (CRM)', def: 'Managing detailed information about individual customers and every touchpoint to maximise loyalty and lifetime value.' },
        { term: 'Customer empowerment', def: 'Customers’ ability, via digital tools and social media, to compare, review, complain publicly and shape a brand’s reputation.' },
        { term: 'Defection (churn)', def: 'Customers stopping buying from you. The defection rate is the share lost per period.' },
        { term: 'Institutional ties', def: 'Structural links — integrations, contracts, stored data — that make switching costly and staying easier.' },
        { term: 'Win-back', def: 'A deliberate effort to recover lapsed or lost customers.' },
        { term: 'Data warehouse', def: 'A central store that combines customer data from many sources for analysis.' },
        { term: 'Data mining', def: 'Using statistical and machine-learning methods to find useful patterns in large datasets.' }
      ],
      quiz: [
        { q: 'A software firm stores a client’s workflows and integrates with its accounting system, making switching painful. This is an example of…', options: ['A frequency programme', 'Interaction', 'A win-back', 'An institutional tie'], answer: 3, explain: 'Structural integration creates institutional (structural) ties that raise switching costs.' },
        { q: 'A café has 2,000 regulars and loses 30% a year. If it cuts defection to 20%, how many more of the original 2,000 remain after two years?', options: ['300', '200', '480', '600'], answer: 0, explain: 'At 30%: 2,000 × 0.7 × 0.7 = 980. At 20%: 2,000 × 0.8 × 0.8 = 1,280. Difference = 300 more regulars.' },
        { q: 'Which is the strongest reason loyalty programmes often fail to create advantage?', options: ['Customers dislike rewards', 'They are easy for competitors to copy and become a cost of doing business', 'They are illegal in most countries', 'They reduce data collection'], answer: 1, explain: 'When every rival offers points, the programme becomes table stakes. Advantage comes from relevance, data use and emotional or structural bonds.' },
        { q: 'In service recovery, which step prevents the same complaint from happening again?', options: ['Fixing the root cause', 'Apologising quickly', 'Offering compensation', 'Escalating to a manager'], answer: 0, explain: 'Only feeding complaints back into process and product removes the cause.' },
        { q: 'What does the Harley Owners Group mainly illustrate?', options: ['Price discounts build loyalty', 'Data mining predicts churn', 'Community and identity create bonds rivals struggle to copy', 'Loyalty is permanent once earned'], answer: 2, explain: 'H.O.G. built social bonds and dealer ties; the later ageing problem shows loyalty is not permanent.' }
      ],
      challenge: {
        title: 'Design a loyalty system for a café chain',
        prompt: `<i>Illustrative.</i> A 40-store café chain has 50,000 identifiable regulars who each generate $180 of annual margin. Annual defection is 35%. A proposed app-based programme costs $400,000 a year to run plus rewards worth 8% of the regulars’ margin. Management believes it can cut defection to 28%. Is it worth it in year one, and how would you design it so it is not just a copyable points scheme?`,
        hints: ['Customers saved = 50,000 × (35% − 28%). Value them at a year of margin as a conservative first cut.', 'Then think about levers beyond points: interaction, personalisation, institutional ties, win-backs.'],
        model: `<p><b>1. Customers saved</b>: 50,000 × 7 points = <b>3,500</b> regulars kept who would have left. Conservatively valued at one year of margin: 3,500 × $180 = <b>$630,000</b>.</p><p><b>2. Programme cost</b>: $400,000 + 8% × (50,000 × $180 = $9.0m) = $400,000 + $720,000 = <b>$1.12m</b>.</p><p><b>3. Year-one verdict</b>: on one year of margin it loses about $490,000. But retained customers are worth more than one year: at 72% retention and 10% discount, CLV ≈ 180 ÷ (1.10 − 0.72) ≈ $474 each → 3,500 × 474 ≈ <b>$1.66m</b>, which beats $1.12m. So the case rests on lifetime value and on the defection cut being real — run a pilot in 8 stores against matched controls first.</p><p><b>4. Design beyond points</b>: (a) personalise — favourite order one tap away, offers tied to individual habits; (b) interaction — feedback in the app answered within a day; (c) institutional ties — stored payment and mobile order-ahead so leaving means losing convenience; (d) win-backs — automatic offer after 21 days of no visits; (e) cap reward cost by giving more to high-margin regulars, not everyone. <b>Recommendation</b>: pilot, measure incremental retention, scale only if the defection cut is at least 5 points.</p>`
      },
      takeaways: [
        'Retention compounds: every point of defection removed lifts lifetime value across the whole base.',
        'Four loyalty levers: interaction, programmes, institutional ties and win-backs — points alone are easily copied.',
        'Make complaining easy and fix root causes; recovered customers can become your most loyal.',
        'Customer data powers personalisation but brings cost, quality and privacy risks — act only where customers would be comfortable.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'mm-customers-3',
      title: 'What shapes consumer behaviour: culture to the mind',
      level: 'Intermediate',
      minutes: 17,
      hook: `Two people with the same income can stand in the same aisle and see completely different products — because they are not really choosing with their wallets.`,
      eli5: `Why do you like the football team you like? Probably because your family or friends did (social), because of where you grew up (culture), because of who you are (personal), and because of a great memory of a match (psychological). Buying is the same. Every purchase is pushed by layers: the world you live in, the people around you, your own life, and what happens inside your head.`,
      blocks: [
        {
          type: 'map', title: 'Four layers of influence on a purchase', center: 'Consumer behaviour',
          branches: [
            { label: 'Cultural', desc: 'The deepest layer: values learned from family and society.', children: ['Culture', 'Subculture (religion, region, ethnicity)', 'Social class'] },
            { label: 'Social', desc: 'The people whose opinions we care about.', children: ['Reference groups', 'Opinion leaders', 'Family', 'Roles and status'] },
            { label: 'Personal', desc: 'Our situation and self-image.', children: ['Age and life stage', 'Occupation', 'Wealth', 'Personality', 'Self-concept', 'Lifestyle and values'] },
            { label: 'Psychological', desc: 'What happens in the mind as we meet a product.', children: ['Motivation', 'Perception', 'Learning', 'Emotions', 'Memory'] }
          ]
        },
        {
          type: 'text', title: 'Social and personal factors in practice',
          html: `<ul><li><b>Reference groups</b>: membership groups (friends, colleagues), aspirational groups (people we want to be like) and dissociative groups (people we do not want to be like). Influencer marketing works through aspiration.</li><li><b>Family</b>: the family of orientation (parents) shapes values; the family of procreation (partner, children) shapes everyday buying. Who decides varies by category.</li><li><b>Self-concept</b>: we buy brands whose personality matches our actual self — or the self we would like to be.</li><li><b>Life stage</b> matters more than age: first job, new parent, empty nester and divorce each reset buying.</li></ul>`
        },
        {
          type: 'pyramid', title: 'The hierarchy of needs applied to products', levels: [
            { label: 'Self-actualisation', desc: 'Growth and meaning: courses, creative tools, adventure travel.' },
            { label: 'Esteem', desc: 'Status and recognition: luxury goods, premium cards, visible brands.' },
            { label: 'Social', desc: 'Love and belonging: gifts, clubs, social apps, dining out.' },
            { label: 'Safety', desc: 'Security and stability: insurance, locks, savings, trusted brands.' },
            { label: 'Physiological', desc: 'Food, water, warmth, sleep: staples and essentials.' }
          ]
        },
        {
          type: 'compare', title: 'Three views of motivation', headers: ['', 'Needs hierarchy', 'Two-factor theory', 'Unconscious motives'],
          rows: [
            ['Core idea', 'Needs are ranked; lower ones are satisfied first', 'Dissatisfiers cause unhappiness when missing; satisfiers create real motivation', 'Real reasons for buying are often hidden even from the buyer'],
            ['Marketing use', 'Which need does the product serve for this segment?', 'Remove dissatisfiers (no warranty), then add satisfiers (delight)', 'Laddering interviews: keep asking "why does that matter?"'],
            ['Example', 'Same car sold on safety to parents, status to executives', 'A phone that overheats loses even if it has great features', 'A sports car bought "for the engine" may really be about youth or freedom'],
            ['Limitation', 'Needs are not strictly ordered in reality', 'Lines between the two shift over time', 'Hard to research; easy to over-interpret']
          ]
        },
        {
          type: 'flow', title: 'Perception: from exposure to memory',
          steps: [
            { label: 'Exposure', desc: 'Thousands of ads and products reach us daily.' },
            { label: 'Selective attention', desc: 'We notice what relates to current needs, what we expect, and what is unusually large, novel or moving.' },
            { label: 'Selective distortion', desc: 'We interpret information to fit what we already believe — why blind taste tests and branded tests give different winners.' },
            { label: 'Selective retention', desc: 'We remember the good points of brands we like and forget those of rivals.' },
            { label: 'Stored in memory', desc: 'What survives joins the brand’s network of associations.' }
          ]
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: subliminal ads control what you buy',
          html: `<p>In 1957 a market researcher claimed that flashing "Eat popcorn" and "Drink Coca-Cola" on a cinema screen boosted sales. He later admitted the study was essentially made up, and controlled experiments have found at most small, short-lived effects in narrow lab conditions. Marketers win by being <b>noticed</b> — distinctive, relevant, repeated — not by hiding messages.</p>`
        },
        {
          type: 'cycle', title: 'How consumers learn', center: 'Learning',
          steps: [
            { label: 'Drive', desc: 'An internal push to act — hunger, boredom, ambition.' },
            { label: 'Cue', desc: 'A stimulus that says when, where and how to respond: an ad, a smell, a friend’s post.' },
            { label: 'Response', desc: 'The person tries a product.' },
            { label: 'Reinforcement', desc: 'A good experience strengthens the link; a bad one weakens it.' },
            { label: 'Generalise or discriminate', desc: 'Generalise to similar products (a brand extension) or learn to tell your brand apart from look-alikes.' }
          ]
        },
        {
          type: 'text', title: 'Emotions and memory',
          html: `<p><b>Emotions</b> are not noise in a decision — they often <i>are</i> the decision. Brands evoke pride, nostalgia, fun or relief, and those feelings colour judgements of quality.</p><p><b>Memory</b> works like an <b>associative network</b>: the brand is a node linked to other nodes (colours, places, people, feelings). <b>Encoding</b> is how information gets in — deeper, more personal processing creates stronger links. <b>Retrieval</b> is getting it back out — strong, unique, well-cued links win at the moment of choice. Rivals’ ads can interfere; packaging and in-store cues help retrieval.</p>`
        },
        {
          type: 'case', company: 'Coca-Cola', year: '1985', title: 'New Coke: tasted better, felt wrong',
          situation: `Pepsi was gaining share and winning blind taste challenges. Coca-Cola ran extensive taste research, and a sweeter new formula beat both Pepsi and original Coke in blind tests.`,
          decision: `In April 1985 the company replaced the original formula with "New Coke" rather than selling both.`,
          outcome: `A fierce public backlash followed: protest calls, letters and groups demanding the old drink back. Within about three months the company brought back the original as "Coca-Cola Classic", which went on to outsell New Coke by a wide margin.`,
          lesson: `Blind tests measured taste; they missed the associative network of memory, identity and nostalgia attached to the brand. Taking it away triggered loss and emotion that no taste score captured.`
        },
        {
          type: 'scenario',
          prompt: `You market an expensive, quiet electric scooter. Research shows buyers say they choose it for "efficiency", but laddering interviews keep ending at "I want people to see I am ahead of the curve". Your agency proposes ads full of range and charging-time statistics. What do you do?`,
          options: [
            { text: 'Run the statistics ads — that is what customers say matters.', feedback: 'Stated reasons are often rationalisations. Facts are needed, but they do not tap the real motive.', good: false },
            { text: 'Lead with self-concept: show the scooter with aspirational early adopters, and keep the efficiency facts as proof points.', feedback: 'Right. Speak to the esteem and self-image motive, and give the rational facts that let buyers justify it to themselves and others.', good: true },
            { text: 'Cut the price to appeal to a mass market.', feedback: 'This undermines the status motive that is actually driving demand in your segment.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Subculture', def: 'A group within a culture sharing distinct values — by nationality, religion, region or ethnicity.' },
        { term: 'Reference group', def: 'Any group that directly or indirectly influences a person’s attitudes or behaviour.' },
        { term: 'Self-concept', def: 'How a person sees themselves (actual self) and would like to be seen (ideal self); brands are chosen to express it.' },
        { term: 'Selective distortion', def: 'The tendency to interpret information in ways that fit existing beliefs.' },
        { term: 'Two-factor theory', def: 'The idea that some attributes only prevent dissatisfaction (dissatisfiers) while others actively motivate (satisfiers).' },
        { term: 'Associative network memory', def: 'A model of memory as nodes linked by associations; recall spreads from one node to connected ones.' },
        { term: 'Stimulus generalisation', def: 'Responding to a similar stimulus the same way — why look-alike packaging and brand extensions work.' }
      ],
      quiz: [
        { q: 'A teenager buys the trainers worn by a famous athlete she admires but has never met. Which group is influencing her?', options: ['Membership group', 'Dissociative group', 'Family of orientation', 'Aspirational group'], answer: 3, explain: 'Aspirational groups are those a person wants to belong to or be like.' },
        { q: 'A laptop with a weak battery is rejected even though it has great features. In two-factor terms, battery life is acting as a…', options: ['Dissatisfier', 'Satisfier', 'Cue', 'Reference group'], answer: 0, explain: 'A dissatisfier causes rejection when inadequate, even if satisfiers are present.' },
        { q: 'Why did branded and blind taste tests give different results for Coke?', options: ['Selective attention', 'Selective distortion and brand associations', 'Physiological needs', 'Stimulus discrimination'], answer: 1, explain: 'People interpret the taste through what they believe about the brand — distortion fed by memory associations.' },
        { q: 'Which statement about subliminal advertising is best supported?', options: ['It reliably doubles sales', 'It is the main way modern ads work', 'The famous 1957 popcorn study was later admitted to be essentially fabricated', 'It works only on television'], answer: 2, explain: 'The original claim was fabricated; controlled evidence shows small effects at most.' },
        { q: 'A soap brand launches a shampoo using the same name and colours, expecting buyers to trust it. This relies on…', options: ['Selective retention', 'Unconscious motives', 'Social class', 'Stimulus generalisation'], answer: 3, explain: 'Customers generalise their learned response from the soap to the similar-looking shampoo.' }
      ],
      challenge: {
        title: 'Why isn’t the premium mattress selling?',
        prompt: `<i>Illustrative.</i> An online mattress start-up sells a ₹60,000 mattress with a 100-night trial. Website traffic is strong but only 0.4% of visitors buy, against 1.2% for a rival. Exit surveys mention "can’t feel it before buying", "my spouse wasn’t sure", and "didn’t know the brand". Use the four layers of influence and the psychological processes to diagnose the problem and propose five actions.`,
        hints: ['Sort each survey quote into a layer: social (spouse), psychological (perceived risk, learning, memory).', 'Think about how to reduce perceived risk, involve the second decider and build memory associations.'],
        model: `<p><b>Diagnosis by layer</b></p><ul><li><b>Social</b>: the spouse is a co-decider; the site speaks only to the visitor.</li><li><b>Psychological — perception and risk</b>: buyers cannot touch it, so functional and financial risk feel high; the 100-night trial may not be noticed (selective attention).</li><li><b>Psychological — memory</b>: an unknown brand has few associations to retrieve; trust is weak.</li><li><b>Personal</b>: ₹60,000 is a big share of income for many visitors — a high-involvement purchase.</li></ul><p><b>Five actions</b></p><ol><li>Make the risk-reducer impossible to miss: trial and free return pickup in the headline and at checkout.</li><li>Add a "share with your partner" link and a couples’ comparison page.</li><li>Open a few experience corners in furniture stores so people can lie on it — touch builds learning.</li><li>Show reviews from people similar to the visitor (reference groups), with sleep-quality stories.</li><li>Build distinctive brand cues (a colour, a mascot, a memorable promise) repeated across ads so the brand gets retrieved when need arises.</li></ol><p><b>Measure</b>: test each change with A/B splits; a move from 0.4% to 0.8% conversion would double sales on the same traffic.</p>`
      },
      takeaways: [
        'Purchases are shaped by four layers: cultural, social, personal and psychological.',
        'Motivation runs deeper than stated reasons — ladder until you reach the real motive.',
        'Perception is selective at every step; distinctiveness beats hidden messages.',
        'Memory is an associative network: brands win by building strong, unique, easily cued links.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'mm-customers-4',
      title: 'The buying decision: five stages and the shortcuts that bend them',
      level: 'Intermediate',
      minutes: 17,
      hook: `Customers do not work through a tidy checklist — but knowing the checklist tells you exactly where you are losing them.`,
      eli5: `Imagine your old bike breaks (problem). You ask friends and look online (search). You compare three bikes on price, speed and looks (evaluate). You almost buy one, but your dad says it is a bad brand, so you pick another (purchase). Then you ride it and decide if you are happy, and tell your friends (after the purchase). For a chocolate bar you skip most of this — you just grab one. Your brain uses shortcuts all the time.`,
      blocks: [
        {
          type: 'flow', title: 'The five-stage buying process',
          steps: [
            { label: 'Problem recognition', desc: 'An internal trigger (hunger, a broken phone) or external one (an ad, a friend’s new gadget) creates a gap between actual and desired state.' },
            { label: 'Information search', desc: 'Personal sources (friends), commercial (ads, sites), public (reviews, media) and experiential (handling, trying). Commercial sources inform; personal sources legitimise.' },
            { label: 'Evaluation of alternatives', desc: 'Buyers compare brands on the attributes that matter to them, weighted by importance.' },
            { label: 'Do intervening factors block the purchase?', kind: 'decision', desc: 'Between intention and purchase: other people’s attitudes, unexpected events, and perceived risk.',
              branches: [ { label: 'No', to: 'Purchase: brand, dealer, quantity, timing, payment' }, { label: 'Yes', to: 'Delay, switch brand or abandon' } ] },
            { label: 'Post-purchase behaviour', desc: 'Satisfaction, use, disposal and word of mouth — and doubt (cognitive dissonance) that the firm should actively reassure.' }
          ]
        },
        {
          type: 'pyramid', invert: true, title: 'From every brand to the chosen one', levels: [
            { label: 'Total set', desc: 'Every brand available in the category.' },
            { label: 'Awareness set', desc: 'Brands the buyer knows about.' },
            { label: 'Consideration set', desc: 'Brands that meet initial buying criteria.' },
            { label: 'Choice set', desc: 'The two or three strong contenders.' },
            { label: 'Decision', desc: 'The brand bought. If you are not in the consideration set, nothing else matters.' }
          ]
        },
        {
          type: 'formula', name: 'Expectancy-value model',
          expr: 'Attitude toward brand = Σ (importance weight × belief score)',
          explain: `The buyer forms beliefs about how well each brand performs on each attribute, and weights each attribute by importance. The brand with the highest total wins — <i>if</i> buyers really are this deliberate (most are not for cheap, low-risk items).`,
          example: `<i>Illustrative laptop choice.</i> Weights: battery 40%, weight 30%, price 30%. Scores out of 10: Brand A 9, 6, 5 → 3.6 + 1.8 + 1.5 = <b>6.9</b>. Brand B 6, 8, 8 → 2.4 + 2.4 + 2.4 = <b>7.2</b>. B wins. Brand A could win by (a) improving weight, (b) persuading buyers battery matters even more, or (c) correcting a wrong belief about its price.`
        },
        {
          type: 'map', title: 'Between intention and purchase', center: 'Intention to buy',
          branches: [
            { label: 'Attitudes of others', desc: 'A partner’s or friend’s negative view — stronger when they are close and feel strongly.' },
            { label: 'Unanticipated situations', desc: 'Job loss, an out-of-stock item, a rude salesperson, a better offer appearing.' },
            { label: 'Perceived risk', desc: 'Grows with price, uncertainty and low self-confidence.', children: ['Functional', 'Physical', 'Financial', 'Social', 'Psychological', 'Time'] },
            { label: 'Risk reducers', desc: 'What firms offer to get past the block.', children: ['Warranties', 'Free returns', 'Trials', 'Reviews', 'Trusted brand'] }
          ]
        },
        {
          type: 'matrix', name: 'Moderating effects: involvement and brand differences', xLabel: 'Differences between brands →', yLabel: 'Buyer involvement →',
          cells: [
            { label: 'Dissonance-reducing buying', desc: 'High involvement, few visible differences (flooring, insurance). Buyers decide quickly, then seek reassurance. Support them after purchase.' },
            { label: 'Complex buying', desc: 'High involvement, big differences (car, laptop). Buyers work through every stage. Educate on attributes and weights.' },
            { label: 'Habitual buying', desc: 'Low involvement, few differences (salt, petrol). Repetition and shelf presence drive choice; price promotions win trial.' },
            { label: 'Variety-seeking buying', desc: 'Low involvement, clear differences (biscuits, snacks). Buyers switch for novelty. Leaders hold shelf space; challengers use sampling and deals.' }
          ]
        },
        {
          type: 'compare', title: 'Behavioural decision theory: shortcuts that bend the model', headers: ['Shortcut', 'What happens', 'Marketing implication'],
          rows: [
            ['Availability heuristic', 'Judging likelihood by how easily examples come to mind', 'A vivid recall story makes a brand feel unsafe; vivid testimonials feel typical'],
            ['Representativeness', 'Judging by resemblance to a category prototype', 'Look-alike packaging borrows a leader’s quality cues'],
            ['Anchoring and adjustment', 'Starting from an initial number and adjusting too little', 'The first price shown frames every later one'],
            ['Mental accounting', 'Treating money differently by mental "account" (bonus, gift, savings)', 'Gift cards and windfalls are spent more freely; fees feel worse when itemised'],
            ['Framing', 'The same facts feel different depending on presentation', '"95% fat-free" beats "5% fat"; a discount feels better than a surcharge of equal size']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Going deeper than the economics lesson',
          html: `<p>You met loss aversion, defaults and decoys in <a href="#/lesson/economics-6">Economics 6</a>. Marketers add two practical rules from mental accounting: <b>segregate gains</b> (list each benefit separately so the bundle feels bigger) and <b>integrate losses</b> (one all-in price hurts less than several small fees). And remember that a "deal" is judged against a reference price — remove the reference and you remove the deal.</p>`
        },
        {
          type: 'case', company: 'J.C. Penney', year: '2011–2013', title: '“Fair and Square” pricing meets shopper psychology',
          situation: `The US department store relied on frequent sales and coupons. A new CEO hired from Apple’s retail business argued that customers were tired of fake "regular" prices that almost nobody paid.`,
          decision: `In 2012 the company replaced most promotions with everyday low prices, monthly values and clearance tiers, rounded to whole dollars.`,
          outcome: `Sales fell sharply — by roughly a quarter that year — and the CEO was replaced in 2013, after which sales and coupons returned.`,
          lesson: `Shoppers did not just want low prices; they wanted the <i>feeling</i> of a deal. Removing reference prices removed the anchor, the framing of savings and the thrill of the hunt — a costly lesson in behavioural decision theory.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Be the buyer',
          note: 'Enter three brands and four attributes with your own weights. Then change one weight and see whether the winner flips — that is what persuasive advertising tries to do.'
        },
        {
          type: 'scenario',
          prompt: `Your online bank charges a ₹99 monthly account fee plus ₹20 per transfer and ₹49 for a card. Customers call it "nickel-and-diming" and churn. Total revenue per customer is about ₹250 a month. What change best uses mental accounting?`,
          options: [
            { text: 'Itemise every fee more clearly so customers understand what they pay for.', feedback: 'Separated losses hurt more. Clearer itemisation may increase the pain.', good: false },
            { text: 'Offer one flat ₹249 monthly plan that includes transfers and the card, and list the benefits separately.', feedback: 'Right. Integrate the losses into one price and segregate the gains into a list of benefits.', good: true },
            { text: 'Raise the account fee but hide transfer charges in the small print.', feedback: 'Unethical and likely illegal under consumer-protection rules; it also destroys trust once discovered.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Consideration set', def: 'The brands a buyer seriously considers; a brand outside it cannot be chosen.' },
        { term: 'Expectancy-value model', def: 'Attitude toward a brand is the sum of beliefs about its attributes weighted by each attribute’s importance.' },
        { term: 'Perceived risk', def: 'The buyer’s sense that a purchase could go wrong — functionally, physically, financially, socially, psychologically or in wasted time.' },
        { term: 'Cognitive dissonance', def: 'Post-purchase doubt that the right choice was made.' },
        { term: 'Heuristic', def: 'A mental shortcut that speeds decisions but causes predictable errors.' },
        { term: 'Mental accounting', def: 'The way people categorise and treat money differently depending on its source or intended use.' },
        { term: 'Framing', def: 'Presenting the same information in different ways that change choices.' }
      ],
      quiz: [
        { q: 'Weights: comfort 50%, style 30%, price 20%. Shoe X scores 8, 6, 5; shoe Y scores 6, 9, 7. Which wins under expectancy-value?', options: ['X with 6.8', 'Y with 7.1', 'X with 7.2', 'They tie'], answer: 1, explain: 'X: 4.0 + 1.8 + 1.0 = 6.8. Y: 3.0 + 2.7 + 1.4 = 7.1. Y wins.' },
        { q: 'A buyer chooses home insurance quickly, then reads reviews to reassure herself. This is…', options: ['Habitual buying', 'Variety-seeking buying', 'Dissonance-reducing buying', 'Complex buying'], answer: 2, explain: 'High involvement with few perceived differences leads to quick choice followed by reassurance-seeking.' },
        { q: 'A tour operator says "90% of travellers rate us excellent" rather than "10% do not". This is…', options: ['Anchoring', 'Framing', 'Availability', 'Representativeness'], answer: 1, explain: 'Same fact, more attractive presentation — framing.' },
        { q: 'After a widely shared video of a phone catching fire, buyers overestimate the risk of that brand. Which heuristic?', options: ['Mental accounting', 'Anchoring', 'Representativeness', 'Availability'], answer: 3, explain: 'Vivid, easily recalled examples inflate perceived likelihood.' },
        { q: 'What did J.C. Penney’s 2012 pricing change mainly underestimate?', options: ['Shoppers’ reliance on reference prices and the feeling of a deal', 'The cost of rounding prices', 'Online competition only', 'Supplier power'], answer: 0, explain: 'Removing sales removed anchors and framing of savings; traffic and sales fell.' }
      ],
      challenge: {
        title: 'Get into the choice set',
        prompt: `<i>Illustrative.</i> Your e-bike brand is known by 40% of target buyers, considered by 15%, in the final choice set of 6% and chosen by 2%. The leader’s figures are 80%, 45%, 25% and 12%. Buyers weight range 40%, price 35%, brand trust 25%. They score you 9 / 6 / 4 and the leader 7 / 6 / 9. Where is the biggest leak, what is your expectancy-value gap, and what should you do?`,
        hints: ['Compute conversion between each funnel stage for both brands.', 'Calculate both expectancy-value totals and see which attribute closes the gap fastest.'],
        model: `<p><b>1. Stage conversion</b> (you vs leader): aware→consider 15/40 = <b>38%</b> vs 45/80 = 56%; consider→choice 6/15 = 40% vs 25/45 = 56%; choice→buy 2/6 = <b>33%</b> vs 12/25 = 48%. Your weakest relative step is awareness itself (half the leader’s), then awareness-to-consideration.</p><p><b>2. Expectancy-value</b>: You 3.6 + 2.1 + 1.0 = <b>6.7</b>. Leader 2.8 + 2.1 + 2.25 = <b>7.15</b>. Gap 0.45, all from brand trust (4 vs 9).</p><p><b>3. What closes it</b>: raising trust from 4 to 6 adds 0.5 → 7.2, ahead of the leader. Raising range further is capped at 10 (+0.4 at most). So trust is the lever.</p><p><b>Recommendation</b>: (a) reduce perceived risk with a 3-year warranty, free test rides and visible reviews; (b) grow awareness in places where e-bike intent is high (cycling routes, commuter forums); (c) persuade buyers to weight range more (framing: "the only e-bike that does your weekly commute on one charge"). Track the funnel monthly.</p>`
      },
      takeaways: [
        'Five stages: problem, search, evaluation, purchase, post-purchase — find where you leak.',
        'Expectancy-value shows three routes to win: change the product, the beliefs or the weights.',
        'Involvement and brand differences change how much of the process buyers actually use.',
        'Heuristics, mental accounting and framing make choices predictably irrational — design for them ethically.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'mm-customers-5',
      title: 'Business markets: buying centers and B2B relationships',
      level: 'Advanced',
      minutes: 18,
      hook: `In a business sale the person who signs the cheque may never use the product — and the person who uses it may be the one who kills your deal.`,
      eli5: `When a school buys new computers, the head teacher does not just walk into a shop. The IT teacher writes what is needed, the finance officer checks the budget, the teachers who will use them give opinions, the receptionist decides which salespeople get a meeting, and the board says yes at the end. Selling to a business means winning over that whole team, and then keeping them happy for years.`,
      blocks: [
        {
          type: 'compare', title: 'How business markets differ from consumer markets', headers: ['', 'Consumer market', 'Business market'],
          rows: [
            ['Buyers', 'Millions of individuals', 'Fewer, larger buyers; often geographically concentrated'],
            ['Demand', 'Direct', 'Derived from their customers’ demand — and often more volatile (a small change downstream swings orders upstream)'],
            ['Price sensitivity', 'Varies', 'Total demand often inelastic in the short run; individual suppliers face hard bargaining'],
            ['Who buys', 'One person or family', 'Professional purchasers and a multi-person buying center'],
            ['Relationship', 'Often transactional', 'Close, long-term, with customisation and shared planning'],
            ['Process', 'Quick, emotional', 'Formal: specifications, proposals, contracts — but still human and emotional']
          ]
        },
        {
          type: 'framework', name: 'Three buying situations', when: 'Deciding how hard to sell and who to target',
          steps: [
            { label: 'Straight rebuy', desc: 'Routine reorder from approved suppliers (office supplies, raw materials). In-suppliers keep quality high and automate reordering; out-suppliers try to get a small trial order.' },
            { label: 'Modified rebuy', desc: 'The buyer wants to change specs, prices or terms. More people get involved — an opening for challengers and a threat for incumbents.' },
            { label: 'New task', desc: 'First-time purchase of something new (a new ERP system, a factory). Many people, long process, lots of information needed. Biggest opportunity; also where systems selling shines.' },
            { label: 'Systems buying and selling', desc: 'Buyers prefer one supplier for a complete solution — turnkey projects, managed services. Sellers bundle products, installation, training and maintenance.' }
          ]
        },
        {
          type: 'map', title: 'Roles in the buying center', center: 'Buying center',
          branches: [
            { label: 'Initiator', desc: 'Spots the need and asks for a purchase.' },
            { label: 'User', desc: 'Will work with the product daily; often shapes specs and can veto in practice.' },
            { label: 'Influencer', desc: 'Defines specs or evaluates options: engineers, IT, consultants.' },
            { label: 'Decider', desc: 'Chooses the product and supplier.' },
            { label: 'Approver', desc: 'Authorises the decision: CFO, board, procurement committee.' },
            { label: 'Buyer', desc: 'Formally selects suppliers and negotiates terms: procurement.' },
            { label: 'Gatekeeper', desc: 'Controls information and access: assistants, procurement, IT security.' }
          ]
        },
        {
          type: 'flow', title: 'The eight stages of the B2B buying process',
          steps: [
            { label: 'Problem recognition', desc: 'Internal (a machine breaks, a new product line) or external (a trade show, a salesperson’s insight).' },
            { label: 'General need description', desc: 'Broad characteristics and quantity needed.' },
            { label: 'Product specification', desc: 'Technical specs, often after value analysis of components.' },
            { label: 'Supplier search', desc: 'Directories, online marketplaces, referrals; buyers build a shortlist.' },
            { label: 'Proposal solicitation', desc: 'Requests for proposals (RFPs); sellers present formal proposals and pitch.' },
            { label: 'Supplier selection', desc: 'Weighted scoring on price, quality, service, reliability, risk — then negotiation. Often two or more suppliers to avoid dependence.' },
            { label: 'Order-routine specification', desc: 'Final order with quantities, delivery, returns, warranties; often a blanket contract.' },
            { label: 'Performance review', desc: 'Buyer rates the supplier: continue, modify or drop — feeding the next rebuy.' }
          ]
        },
        {
          type: 'text', title: 'What influences organisational buyers',
          html: `<ul><li><b>Environmental</b>: economy, interest rates, regulation, technology, supply shortages.</li><li><b>Organisational</b>: objectives, policies, centralised vs local purchasing, procurement tools and e-auctions.</li><li><b>Interpersonal</b>: power, status and persuasion inside the buying center.</li><li><b>Individual</b>: each member’s age, job, risk appetite and career incentives. Nobody gets promoted for a cheap failure; many buy "safe" brands to protect themselves.</li></ul><p>Map these with the qualification tools from <a href="#/lesson/sales-2">Sales 2</a>.</p>`
        },
        {
          type: 'cycle', title: 'Building a trusted B2B relationship', center: 'Trust',
          steps: [
            { label: 'Credibility', desc: 'Deliver on promises; competence shown in small early orders.' },
            { label: 'Benevolence', desc: 'Show you care about the buyer’s outcomes — tell them when they should buy less.' },
            { label: 'Information sharing', desc: 'Forecasts, inventory data, roadmaps — vertical coordination between buyer and seller.' },
            { label: 'Specific investments', desc: 'Dedicated tooling, integration, on-site staff. They deepen ties but create lock-in and the risk of opportunism.' },
            { label: 'Joint review', desc: 'Regular business reviews with scorecards keep both sides honest and renew the cycle.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Opportunism, and institutional and government buyers',
          html: `<p><b>Opportunism</b> is cheating or under-delivering on an implicit contract — cutting quality, shirking service. It is more likely when one side has made specific investments the other could exploit. Guard against it with contracts, monitoring, and relationships both sides value.</p><p><b>Institutional buyers</b> (hospitals, schools, prisons) have tight budgets and captive users. <b>Government buyers</b> require bids, documentation and transparency, and often favour domestic or small suppliers. India’s Government e-Marketplace (GeM), launched in 2016, moved much public procurement online so smaller sellers can bid directly.</p>`
        },
        {
          type: 'case', company: 'Caterpillar', year: 'Decades to today', title: 'Selling uptime through a dealer system',
          situation: `Construction and mining customers buy heavy equipment as a long-term investment. A broken-down machine idles an entire site, so the buying center — owners, fleet managers, operators, finance — cares about total cost of ownership, not just sticker price.`,
          decision: `Caterpillar sells and supports its machines mainly through a worldwide network of independent dealers, many family-owned for generations. Dealers handle parts, service, financing, used equipment and, increasingly, telematics that monitor machine health remotely.`,
          outcome: `Caterpillar has long commanded premium prices and strong loyalty in its markets. Its pitch is a system — machine, parts availability, service and data — sold to every role in the buying center. The dealer relationship itself is an institutional tie for both the customer and Caterpillar.`,
          lesson: `In B2B, the product is the whole system of support. Sell lifecycle value to the decider and approver, and reliability and ease to the user and influencer.`
        },
        {
          type: 'interactive', widget: 'negotiation-zopa', title: 'Supplier selection meets negotiation',
          note: 'Set the buyer’s budget ceiling and your walk-away price for a three-year service contract. See where the deal zone is, then add a value item (longer term, faster payment) and watch it grow.'
        },
        {
          type: 'checklist', title: 'Account plan for a new-task enterprise sale',
          items: [
            'Named every buying-center role, including the gatekeeper and the users',
            'Know each person’s personal win (career, workload, risk) as well as the company’s',
            'Have a champion who will sell for you in meetings you cannot attend',
            'Total cost of ownership case ready for the approver',
            'Mapped which of the eight buying stages the account is in',
            'Plan for the first performance review before the contract is signed'
          ]
        }
      ],
      terms: [
        { term: 'Derived demand', def: 'Demand for business goods that ultimately comes from demand for consumer goods.' },
        { term: 'Buying center', def: 'Everyone who participates in an organisation’s purchase decision and shares its risks.' },
        { term: 'Straight rebuy / modified rebuy / new task', def: 'The three buying situations, from routine reorder to first-time purchase.' },
        { term: 'Systems selling', def: 'Offering a complete, integrated solution rather than separate components.' },
        { term: 'Gatekeeper', def: 'A buying-center member who controls the flow of information and access to others.' },
        { term: 'Vertical coordination', def: 'Close cooperation between buyer and seller across the supply chain, such as shared forecasts and planning.' },
        { term: 'Opportunism', def: 'Taking advantage of a partner by cheating or under-delivering on what was expected.' }
      ],
      quiz: [
        { q: 'A company reorders the same printer paper every month from its approved supplier. Which buying situation?', options: ['New task', 'Modified rebuy', 'Straight rebuy', 'Systems buying'], answer: 2, explain: 'Routine reorders from approved suppliers are straight rebuys.' },
        { q: 'The hospital doctor who will use a new scanner every day, and whose objections can stall the purchase, is the…', options: ['Gatekeeper', 'User', 'Approver', 'Buyer'], answer: 1, explain: 'Users work with the product; they often shape specs and have informal veto power.' },
        { q: 'Car sales fall 10%, and a steel supplier’s orders from carmakers fall 25% as they also cut inventories. This illustrates…', options: ['Inelastic demand', 'Opportunism', 'Systems selling', 'Derived and volatile demand'], answer: 3, explain: 'Business demand is derived from consumer demand and swings more sharply upstream.' },
        { q: 'Which B2B stage comes immediately after proposal solicitation?', options: ['Supplier selection', 'Product specification', 'Order-routine specification', 'Supplier search'], answer: 0, explain: 'Proposals are evaluated in supplier selection; order routine follows.' },
        { q: 'Opportunism is most likely when…', options: ['Both sides can switch freely', 'One side has made specific investments the other could exploit', 'The purchase is a straight rebuy of a commodity', 'There is a government tender'], answer: 1, explain: 'Specific investments create lock-in, which gives the other party a chance to exploit it.' }
      ],
      challenge: {
        title: 'Sell a scheduling platform to a hospital group',
        prompt: `<i>Illustrative.</i> You sell AI staff-scheduling software. A 12-hospital group spends ₹8 crore a year on agency nurses to fill gaps. Your platform costs ₹1.5 crore a year plus ₹50 lakh one-time integration, and pilots elsewhere cut agency spend by 20–30%. The chief nursing officer is keen; IT security is worried; procurement wants three bids; the CFO and board must approve. Map the buying center, build the value case and design the sales plan.`,
        hints: ['List each of the seven roles and what each one fears or wants.', 'Value case: savings at 20% and 30% of ₹8 crore, versus first-year cost of ₹2 crore.'],
        model: `<p><b>1. Buying center</b>: Initiator and likely decider — chief nursing officer (wants fewer gaps, less burnout). Users — ward managers and nurses (fear clunky tools, unfair rotas). Influencers — IT security (data protection, integration), HR (labour rules). Buyer — procurement (fair process, three bids). Approver — CFO and board (ROI, risk). Gatekeeper — IT security and the CNO’s office.</p><p><b>2. Value case</b>: savings 20% × ₹8 crore = <b>₹1.6 crore</b>; at 30% = <b>₹2.4 crore</b> a year. Year-one cost ₹2.0 crore (licence + integration); later years ₹1.5 crore. Year 1 net: −₹0.4 crore to +₹0.4 crore; from year 2: <b>+₹0.1 to +₹0.9 crore</b> a year, before softer gains (less overtime, lower turnover). Payback within about 12–18 months at the midpoint (25% → ₹2.0 crore saving).</p><p><b>3. Plan</b>: (a) offer a 3-hospital paid pilot with a shared-savings clause — reduces approver risk; (b) security review pack and data-residency answer up front for IT; (c) nurse co-design sessions so users become champions; (d) meet procurement’s three-bid rule with a clear scoring sheet that includes outcomes, not just price; (e) agree the performance-review scorecard (agency spend, fill rate, nurse satisfaction) before signing. <b>Recommendation</b>: lead with the pilot plus shared savings; it turns a new-task purchase into a low-risk decision.</p>`
      },
      takeaways: [
        'Business demand is derived and volatile; buyers are fewer, larger and more professional.',
        'Buying situation sets the sales effort: straight rebuy, modified rebuy or new task.',
        'Win every role in the buying center — users and gatekeepers can kill deals deciders like.',
        'Trust is built through credibility, benevolence, shared information and joint reviews; guard against opportunism.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'mm-customers-6',
      title: 'Segmentation and targeting: choosing whom to serve',
      level: 'Advanced',
      minutes: 18,
      hook: `A strategy that tries to please everyone is a strategy that nobody chose — targeting is the art of deciding who you will disappoint.`,
      eli5: `A pizza shop cannot make one pizza everybody loves. So it notices groups: students who want cheap and fast, families who want big sizes and deals, and food lovers who want fancy toppings. That is <b>segmentation</b>. Then the shop decides which groups it is best at serving and focuses on them. That is <b>targeting</b>. You saw the basics of STP in <a href="#/lesson/marketing-2">Marketing 2</a>; now we do it properly.`,
      blocks: [
        {
          type: 'map', title: 'Bases for segmenting consumer markets', center: 'Consumer segments',
          branches: [
            { label: 'Geographic', desc: 'Countries, regions, cities, neighbourhoods, climate, urban vs rural.', children: ['Region', 'City tier', 'Climate'] },
            { label: 'Demographic', desc: 'Easy to measure and often linked to needs.', children: ['Age and life stage', 'Gender', 'Income', 'Generation', 'Race and culture'] },
            { label: 'Psychographic', desc: 'Personality, values and lifestyle — why two people of the same age buy differently.', children: ['Values', 'Lifestyle', 'Personality'] },
            { label: 'Behavioural', desc: 'How people actually relate to the product — usually the most useful.', children: ['Needs and benefits', 'Decision roles', 'User status', 'Usage rate', 'Loyalty status', 'Buyer-readiness', 'Attitude'] }
          ]
        },
        {
          type: 'pyramid', invert: true, title: 'The nested approach for business markets (outside in)', levels: [
            { label: 'Demographics', desc: 'Industry, company size, location. Easiest to observe.' },
            { label: 'Operating variables', desc: 'Technology used, user status, capabilities they need from suppliers.' },
            { label: 'Purchasing approaches', desc: 'Centralised or local buying, power structure, policies, criteria (price vs service).' },
            { label: 'Situational factors', desc: 'Urgency, order size, specific application.' },
            { label: 'Personal characteristics', desc: 'Buyer–seller similarity, attitude to risk, loyalty. Hardest to observe, most precise.' }
          ]
        },
        {
          type: 'framework', name: 'Five tests of a useful segment', when: 'Before committing budget to any segment',
          steps: [
            { label: 'Measurable', desc: 'You can estimate its size, purchasing power and characteristics.' },
            { label: 'Substantial', desc: 'Large and profitable enough to justify a tailored programme.' },
            { label: 'Accessible', desc: 'You can reach and serve it through media and channels you can use.' },
            { label: 'Differentiable', desc: 'It responds differently to the mix than other segments; otherwise it is not really a separate segment.' },
            { label: 'Actionable', desc: 'You have the resources to design an effective programme for it.' }
          ]
        },
        {
          type: 'flow', title: 'From segments to a target choice',
          steps: [
            { label: 'Segment on needs', desc: 'Group customers by the problems they want solved and benefits they seek.' },
            { label: 'Describe each segment', desc: 'Add demographics, media habits and behaviour so you can find and reach them.' },
            { label: 'Score attractiveness', desc: 'Size, growth, profitability, competitive intensity, risk.' },
            { label: 'Does it fit our objectives and capabilities?', kind: 'decision', desc: 'An attractive segment you cannot win is a trap.',
              branches: [ { label: 'Yes', to: 'Shortlist and choose a coverage pattern' }, { label: 'No', to: 'Drop or partner' } ] },
            { label: 'Test, position and launch', desc: 'Pilot the offer, then build the positioning and mix for each target.' }
          ]
        },
        {
          type: 'compare', title: 'Patterns of target selection', headers: ['Pattern', 'What it means', 'Upside', 'Risk'],
          rows: [
            ['Single-segment concentration', 'One product for one segment', 'Deep knowledge, strong niche position', 'All eggs in one basket'],
            ['Selective specialisation', 'Several unrelated attractive segments', 'Diversified risk', 'Little synergy'],
            ['Product specialisation', 'One product to many segments', 'Expertise in one product', 'Disruption of that product'],
            ['Market specialisation', 'Many products for one segment', 'Becomes the go-to supplier', 'Segment budget cuts hit hard'],
            ['Full coverage', 'All groups, via mass or differentiated marketing', 'Scale and reach', 'Only for very large firms; costly'],
            ['Niche, local, individual', 'Narrow groups, local tailoring, or mass customisation for one', 'Loyal customers, premium prices', 'Small size; complexity']
          ]
        },
        {
          type: 'case', company: 'Marriott', year: '1980s–today', title: 'One company, many targeted hotel brands',
          situation: `Marriott’s full-service hotels served one broad market. Business travellers who needed a clean, efficient room — not a ballroom — were under-served.`,
          decision: `In the early 1980s Marriott used structured customer research (trade-off studies of which features travellers would pay for) to design Courtyard, aimed at the moderate-price business traveller. It went on to build or buy brands for other segments, from budget to luxury (it acquired Ritz-Carlton in the 1990s) and long-stay, then added many more through the Starwood acquisition in 2016.`,
          outcome: `Marriott became the world’s largest hotel company by rooms, with a portfolio of around thirty brands, each aimed at a distinct segment and linked by one loyalty programme.`,
          lesson: `Differentiated full coverage works when each brand meets a clearly different need — and a shared loyalty programme ties the segments together.`
        },
        {
          type: 'case', company: 'Tata Motors (Nano)', year: '2008–2018', title: 'The right segment, the wrong frame',
          situation: `Millions of Indian families rode on two-wheelers, sometimes four to a scooter. Tata set out to build a safe, affordable car for them.`,
          decision: `The Nano was unveiled in 2008 at a target price of ₹1 lakh and widely publicised as the "world’s cheapest car".`,
          outcome: `Sales fell far short of plans after early production problems and a few fire incidents. Many aspiring buyers did not want to be seen in "the cheapest car" — a car is a status purchase. Ratan Tata later said marketing it as the cheapest car was a mistake. Production ended in 2018.`,
          lesson: `Demographics (income) pointed to the segment; psychographics (aspiration, self-concept) decided the outcome. Target on needs and identity, not just budget.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Ethical targeting',
          html: `<p>Targeting becomes controversial when it exploits vulnerable groups or promotes harmful products to them. The US tobacco cartoon mascot "Joe Camel" was retired in 1997 amid regulatory pressure and criticism that it appealed to children. Today the same questions apply to gambling apps, high-cost credit and data-driven ads aimed at teenagers. A useful test: <b>would you be comfortable explaining this targeting choice to the people being targeted, and to a regulator?</b></p>`
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Size the segment',
          note: 'Enter the total market, then narrow it to the segment you can serve and the share you can realistically win. Is it "substantial" enough to justify a tailored programme?'
        },
        {
          type: 'scenario',
          prompt: `Your fintech app finds that its most profitable users are low-income workers who repeatedly use expensive short-term credit. The growth team wants to target look-alikes with aggressive ads. What do you do?`,
          options: [
            { text: 'Go ahead — the segment is measurable, substantial, accessible and profitable.', feedback: 'It passes the five tests but fails the ethics test: profits come from harm to a vulnerable group, inviting regulatory and reputational damage.', good: false },
            { text: 'Redesign the offer around this segment’s real need (smoothing irregular income) with fair pricing, and target on that benefit.', feedback: 'Right. Serve the segment’s need in a way that helps them; a fair product can still be a profitable one and builds lasting trust.', good: true },
            { text: 'Drop the segment entirely and only target high-income users.', feedback: 'Avoids harm but abandons customers who need good financial products. Fair design is better than exclusion.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Psychographic segmentation', def: 'Dividing buyers by personality, values and lifestyle.' },
        { term: 'Behavioural segmentation', def: 'Dividing buyers by their knowledge of, attitude to, use of or response to a product.' },
        { term: 'Nested approach', def: 'Segmenting business markets layer by layer, from easily observed demographics to personal characteristics of buyers.' },
        { term: 'Buyer-readiness stage', def: 'Where someone sits from unaware to intending to buy; each stage needs a different message.' },
        { term: 'Niche', def: 'A narrowly defined group with a distinct set of needs, often willing to pay a premium.' },
        { term: 'Mass customisation', def: 'Meeting each customer’s individual requirements at scale, using flexible production and digital tools.' },
        { term: 'Differentiable', def: 'A segment test: the group must respond differently to marketing than other groups.' }
      ],
      quiz: [
        { q: 'Splitting customers into heavy, medium and light users is which kind of segmentation?', options: ['Demographic', 'Geographic', 'Psychographic', 'Behavioural'], answer: 3, explain: 'Usage rate is a behavioural base.' },
        { q: 'Two segments respond identically to every price, ad and product change. Which test have they failed?', options: ['Differentiable', 'Measurable', 'Accessible', 'Substantial'], answer: 0, explain: 'If they respond the same, they are effectively one segment.' },
        { q: 'A firm sells microscopes to university labs, government labs and private labs. Which pattern?', options: ['Market specialisation', 'Single-segment concentration', 'Product specialisation', 'Full coverage'], answer: 2, explain: 'One product sold to several segments = product specialisation.' },
        { q: 'In the nested approach for business markets, which layer is hardest to observe?', options: ['Demographics', 'Operating variables', 'Purchasing approaches', 'Personal characteristics'], answer: 3, explain: 'Inner layers like attitude to risk and loyalty are the most precise and the hardest to see.' },
        { q: 'Segment A: 20,000 buyers × ₹3,000 margin, 70% reachable. Segment B: 50,000 × ₹1,000, 90% reachable. Which has the larger reachable margin pool?', options: ['A, with ₹4.2 crore', 'B, with ₹4.5 crore', 'They are equal', 'A, with ₹6 crore'], answer: 1, explain: 'A: 20,000 × 3,000 × 0.7 = ₹4.2 crore. B: 50,000 × 1,000 × 0.9 = ₹4.5 crore.' }
      ],
      challenge: {
        title: 'Choose the targets for a fitness app',
        prompt: `<i>Illustrative.</i> A fitness app is considering three segments. <b>Busy parents</b>: 4m people, 8% growth, ₹1,200 annual margin each, low competition, fit with your short-workout product: high. <b>Gym regulars</b>: 6m, 4% growth, ₹1,500 margin, high competition, fit: medium. <b>Older beginners (55+)</b>: 3m, 12% growth, ₹1,000 margin, low competition, fit: low today. Weights: size of margin pool 35%, growth 20%, competition 20%, fit 25%. Score each 1–5, pick a coverage pattern and justify.`,
        hints: ['Margin pool = people × margin: parents ₹480 crore, gym ₹900 crore, older ₹300 crore. Turn into 1–5 scores.', 'Weighted score = Σ weight × score. Then check the five segment tests and ethics.'],
        model: `<p><b>1. Margin pools</b>: Parents 4m × 1,200 = <b>₹480 crore</b>; Gym 6m × 1,500 = <b>₹900 crore</b>; Older 3m × 1,000 = <b>₹300 crore</b>.</p><p><b>2. Scores (1–5)</b> — pool / growth / competition (5 = low) / fit:<br>Parents 3 / 3 / 4 / 5 → 0.35×3 + 0.20×3 + 0.20×4 + 0.25×5 = 1.05 + 0.6 + 0.8 + 1.25 = <b>3.70</b><br>Gym 5 / 2 / 1 / 3 → 1.75 + 0.4 + 0.2 + 0.75 = <b>3.10</b><br>Older 2 / 5 / 4 / 2 → 0.7 + 1.0 + 0.8 + 0.5 = <b>3.00</b></p><p><b>3. Choice</b>: lead with <b>busy parents</b> (single-segment concentration now) — highest score, strong fit, low rivalry. Treat <b>older beginners</b> as the next segment: fastest-growing, low competition, but needs product work (guided, low-impact sessions, medical safety cues). Avoid head-on with gym regulars despite the big pool — high competition and medium fit.</p><p><b>4. Tests and ethics</b>: parents are measurable, substantial, accessible (parenting communities, school-run timing), differentiable (time-starved benefit) and actionable. For 55+, avoid health fear messaging; build with physiotherapist input. Over time this becomes <b>market specialisation</b> around "fitness for people short on time or confidence".</p>`
      },
      takeaways: [
        'Segment on needs and behaviour first, then describe segments with demographics so you can reach them.',
        'Use the nested approach for B2B: from industry and size inward to buyer personality.',
        'Five tests: measurable, substantial, accessible, differentiable, actionable.',
        'Choose a coverage pattern deliberately; niche and individual marketing can beat mass reach.',
        'Ethical targeting: if you could not defend it to the people targeted, do not do it.'
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-mm-starbucks-rewards',
    company: 'Starbucks',
    industry: 'Restaurants (coffee)',
    year: '2016',
    track: 'mm-customers',
    title: 'Reward visits or reward spending?',
    situation: `<p>Starbucks Rewards, tied to the Starbucks mobile app with stored-value payment and (from 2015 across the US) Mobile Order &amp; Pay, has become one of the most used loyalty programmes in retail. Members earn one <b>star per transaction</b> regardless of how much they spend, and enough stars earn a free drink.</p><p>The flaw: a customer who buys a single cheap coffee earns the same as one who buys drinks for a whole team. Some customers split orders into separate transactions to collect more stars, slowing queues. Management wants the programme to reward its most valuable customers, but frequent small-ticket regulars are vocal and loyal.</p>`,
    question: 'You run the loyalty programme. How do you change it?',
    options: [
      { text: 'Keep one star per visit — it is simple and regulars love it.', result: 'Keeps goodwill, but the programme keeps over-rewarding small tickets and rewarding order-splitting, and it under-rewards the highest-spending members.' },
      { text: 'Switch to stars per dollar spent, explain the change clearly, and add more ways to earn and personalised offers through the app.', result: 'Aligns rewards with customer value and stops order-splitting. Expect backlash from small-ticket regulars, who now earn rewards more slowly; personalised offers and later redemption options can soften it.', best: true },
      { text: 'Replace the programme with a flat discount for all customers.', result: 'Expensive, easily copied, gives away margin to customers who would have bought anyway, and loses the data and personalisation the app provides.' },
      { text: 'Make the programme paid-membership only.', result: 'Could raise revenue, but shrinks the member base and the data that powers personalisation, with uncertain take-up.' }
    ],
    whatHappened: `<p>In 2016 Starbucks moved US Rewards to earning stars <b>per dollar spent</b> rather than per visit. Many customers who bought inexpensive drinks complained loudly that they would now earn rewards more slowly, and the change got widespread press coverage.</p><p>Membership nonetheless kept growing. Starbucks later added tiered redemption (cheaper rewards for fewer stars), more payment options and increasingly personalised offers driven by its data and AI efforts. It has reported that Rewards members account for a large share — more than half — of spending in its US company-operated stores, making the programme central to its strategy.</p>`,
    lessons: [
      'Reward the behaviour that creates value for the firm — but expect resistance from those who gained from the old rules.',
      'Loyalty programmes are as much about data and personalisation as about free items.',
      'Explain changes clearly and give something back (new ways to earn or redeem) to limit backlash.',
      'Institutional ties (stored value, mobile ordering) make a programme hard for rivals to copy.'
    ],
    frameworks: ['Customer lifetime value', 'Loyalty programme design', 'Customer profitability tiers', 'Institutional ties']
  },
  {
    id: 'case-mm-amazon-prime',
    company: 'Amazon',
    industry: 'E-commerce',
    year: '2004–2005',
    track: 'mm-customers',
    title: 'Charge a yearly fee for “free” fast shipping?',
    situation: `<p>Amazon already offered free standard shipping on orders above a minimum value, with slower delivery. Customers often hesitated at checkout when shipping costs appeared, and fast delivery was expensive.</p><p>An idea circulated inside the company: charge an annual fee for <b>unlimited two-day shipping</b> on eligible items. Finance teams worried that heavy users would cost far more in shipping than the fee would bring in, and that the programme could lose money on its best customers.</p>`,
    question: 'You are on the leadership team. Do you launch it?',
    options: [
      { text: 'Do not launch — the heaviest users will make it unprofitable.', result: 'Avoids a shipping cost risk but leaves the checkout shipping objection in place and misses a chance to change how often customers shop.' },
      { text: 'Launch an annual membership with unlimited two-day shipping on eligible items, accept the shipping cost, and treat it as a loyalty system that changes buying habits.', result: 'Shipping costs rise, but members shop more often and across more categories, the sunk annual fee pushes them to "get their money’s worth", and Amazon becomes their default store.', best: true },
      { text: 'Offer per-order express shipping discounts instead.', result: 'Cheaper to run, but every order still involves a shipping decision, so the mental barrier at checkout remains.' },
      { text: 'Raise the free-shipping minimum to recover costs.', result: 'Saves money in the short term but increases friction and pushes small orders to rivals.' }
    ],
    whatHappened: `<p>Amazon launched <b>Amazon Prime</b> in the US in February 2005 at $79 a year for unlimited two-day shipping on eligible items. It went on to add video streaming (2011), music, reading, grocery and other benefits, raising the US annual fee over time to $99 (2014), $119 (2018) and $139 (2022).</p><p>In 2021 the company said it had more than 200 million Prime members worldwide. Prime is widely studied as a loyalty system: the upfront fee works through mental accounting (members feel they should use it), free fast shipping removes a cost at every purchase, and the bundle of benefits creates institutional ties that make switching unattractive. It has also faced regulatory scrutiny over how hard it was to cancel.</p>`,
    lessons: [
      'Removing a cost at every purchase can change behaviour more than a one-off discount.',
      'A sunk membership fee shapes usage through mental accounting.',
      'Judge loyalty investments on lifetime value and share of wallet, not on per-order cost.',
      'Easy, honest cancellation matters: loyalty that depends on friction invites regulators.'
    ],
    frameworks: ['Customer lifetime value', 'Mental accounting', 'Institutional ties', 'Total customer cost']
  }
]);
