/* MBA Studio — Track 13: Growth & Product-Led Strategy */
MBA.addTrack({
  id: 'growth',
  stage: 4,
  order: 13,
  title: 'Growth & Product-Led Strategy',
  icon: '🚀',
  color: '#84cc16',
  tagline: 'Build growth engines, not one-off spikes',
  summary: `Growth is not a marketing trick — it is a system built on a product people keep using. After this track you can map funnels and growth loops, choose a North Star, find your “aha moment”, read retention cohorts, design product-led, viral and referral engines, and run a disciplined experimentation and growth-accounting process.`,
  outcomes: [
    'Map a business with AARRR and redesign it as compounding growth loops',
    'Choose a North Star metric and define activation and the aha moment',
    'Read cohort retention curves and know when you have product-market fit',
    'Design product-led growth: freemium, self-serve and product-qualified leads',
    'Model virality (K-factor), network effects, referrals, content and community loops',
    'Run growth experiments with ICE and diagnose growth with growth accounting'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-1',
      title: 'Funnels, loops & the AARRR pirate metrics',
      level: 'Beginner',
      minutes: 13,
      hook: 'Funnels leak and need constant refilling; loops feed themselves — the best companies are built on loops.',
      eli5: `A funnel is like pouring water into a leaky bucket: you must keep pouring. A loop is like a snowball rolling downhill: every turn picks up more snow, which makes the next turn bigger. When each customer brings the next customer, growth starts to feed itself.`,
      blocks: [
        { type: 'framework', name: 'AARRR — Pirate Metrics', by: 'Dave McClure, 2007', when: 'To find where a startup is losing people and what to measure at each stage.',
          steps: [
            { label: 'Acquisition', desc: 'How do people find you? Visits, sign-ups by channel, cost per sign-up.' },
            { label: 'Activation', desc: 'Do they have a great first experience — reach the “aha moment”? E.g. % of sign-ups who create their first project.' },
            { label: 'Retention', desc: 'Do they come back? Week-1, month-1, month-6 retention by cohort.' },
            { label: 'Referral', desc: 'Do they tell others? Invites sent, viral coefficient, share rate.' },
            { label: 'Revenue', desc: 'Do they pay? Conversion to paid, ARPU, lifetime value.' }
          ] },
        { type: 'interactive', widget: 'funnel', title: 'Find the leakiest stage', note: 'Start with 10,000 visitors. Double the weakest conversion rate, then double the strongest one. Which gives more customers? (Usually fixing the weakest stage wins.)' },
        { type: 'compare', title: 'Funnels vs growth loops', headers: ['', 'Funnel', 'Growth loop'],
          rows: [
            ['Shape', 'Linear: top to bottom, then ends', 'Circular: output of one cycle is input to the next'],
            ['Typical driver', 'Paid ads, sales outreach', 'Users inviting users, user content ranking on Google, revenue reinvested in ads'],
            ['Growth pattern', 'Linear — stop spending, growth stops', 'Compounding when the loop is strong'],
            ['Team set-up', 'Siloed by stage (marketing, sales, product)', 'Cross-functional team owns the whole loop'],
            ['Key question', 'Where do we lose people?', 'How does each new user create the next one?']
          ] },
        { type: 'framework', name: 'Anatomy of a growth loop', by: 'Popularised by Reforge (Brian Balfour, Andrew Chen and others), late 2010s', when: 'When designing scalable growth beyond paid ads.',
          steps: [
            { label: 'New user', desc: 'Someone signs up.' },
            { label: 'Action', desc: 'They do something valuable: create a design, send a file, post a review, invite a teammate.' },
            { label: 'Output', desc: 'That action produces something others can see: a shared link, a public page, an invite email.' },
            { label: 'Exposure', desc: 'Non-users see the output and some sign up — back to step 1.' },
            { label: 'Measure', desc: 'Loop strength = new users generated per cycle and cycle time. Faster, stronger loops compound more.' }
          ] },
        { type: 'case', company: 'Hotmail', year: '1996–1997', title: 'The email signature that spread itself',
          situation: `Hotmail launched in 1996 as one of the first free web-based email services, with little money for marketing.`,
          decision: `At investor Tim Draper’s suggestion, every outgoing email carried a line at the bottom: “PS: I love you. Get your free email at Hotmail.” Each email became an advert, sent by a friend.`,
          outcome: `Hotmail grew extremely fast — to roughly 12 million users in about a year and a half — and Microsoft acquired it at the end of 1997 for a reported price of around $400M.`,
          lesson: `Build the invitation into normal product use. The product itself was the distribution channel — an early, famous viral loop.` },
        { type: 'callout', kind: 'insight', title: 'Order matters: fix the bucket before pouring', html: `<p>Founders love Acquisition because it is visible. But if Activation and Retention are weak, extra traffic just flows out of a leaky bucket and raises your CAC. A common rule: <b>retention → activation → referral → acquisition</b> — work from the product outward.</p>` },
        { type: 'flip', title: 'Test yourself', cards: [
          { front: 'AARRR stands for…', back: 'Acquisition, Activation, Retention, Referral, Revenue.' },
          { front: 'Why do loops compound and funnels do not?', back: 'In a loop, the output of each cycle (new users, content) becomes input to the next cycle.' },
          { front: 'Hotmail’s loop in one line?', back: 'Every email sent advertised Hotmail to the recipient.' },
          { front: 'Which stage should usually be fixed first?', back: 'Retention (and activation) — otherwise new users leak away.' }
        ] }
      ],
      terms: [
        { term: 'Funnel', def: 'A model of the stages a customer passes through, with drop-off at each stage.' },
        { term: 'Growth loop', def: 'A closed system where the output of one cycle (e.g. invites, content) drives new input (new users).' },
        { term: 'AARRR', def: 'Dave McClure’s “pirate metrics”: Acquisition, Activation, Retention, Referral, Revenue.' },
        { term: 'Conversion rate', def: 'The percentage of people who move from one stage to the next.' },
        { term: 'CAC', def: 'Customer acquisition cost — what you spend to win one new customer.' },
        { term: 'Viral growth', def: 'Growth where existing users bring in new users through using or sharing the product.' }
      ],
      quiz: [
        { q: 'Which AARRR stage measures whether a new user has a great first experience?', options: ['Acquisition', 'Activation', 'Retention', 'Revenue'], answer: 1, explain: 'Activation = reaching first value, the aha moment.' },
        { q: '10,000 visitors → 20% sign up → 25% activate → 10% pay. Paying customers?', options: ['500', '200', '50', '2,000'], answer: 2, explain: '10,000 × 0.2 = 2,000 × 0.25 = 500 × 0.1 = 50.' },
        { q: 'What makes a growth loop different from a funnel?', options: ['It uses more paid ads', 'It has more stages', 'It only works for B2B', 'Its output becomes input for the next cycle'], answer: 3, explain: 'That self-feeding property creates compounding.' },
        { q: 'A startup has 5% month-1 retention and wants to triple its ad budget. Best advice?', options: ['Fix activation and retention first', 'Triple the budget — growth solves everything', 'Switch ad platforms', 'Raise prices'], answer: 0, explain: 'Pouring users into a leaky bucket wastes CAC.' },
        { q: 'In the Hotmail case, the “output” that others saw was…', options: ['TV adverts', 'The signature line in every email', 'Press articles', 'Search ads'], answer: 1, explain: 'Each email exposed recipients to the offer.' }
      ],
      challenge: {
        title: 'Find the growth loop',
        prompt: `You run an online invoicing tool for freelancers: 5,000 sign-ups/month from Google ads at $40 per sign-up; 30% activate (send a first invoice); 40% of activated users still active after 3 months. Each active user sends invoices to about 6 different clients per month. Map the funnel, then design a growth loop and estimate its potential.`,
        hints: ['Who sees the product’s output?', 'Clients receiving invoices may themselves be freelancers or small businesses.', 'Estimate: users × exposures × conversion.'],
        model: `<p><b>Funnel today:</b> 5,000 sign-ups ($200k/month) → 1,500 activate → 600 retained at month 3. Cost per retained user ≈ $333.</p>
<p><b>Loop:</b> new user → sends invoice → client receives a well-designed invoice page with “Paid with InvoiceCo — get your free invoicing in 2 minutes” → some clients (many are small businesses or freelancers) sign up → they send invoices…</p>
<p><b>Estimate:</b> say 3,000 active users × 6 clients = 18,000 invoice views/month. If 1% sign up → 180 new users/month at near-zero cost, growing as the active base grows. Improving the page (one-click “create your own invoice”, pay-by-card that showcases the product) to 2% → 360/month.</p>
<p><b>Priorities:</b> 1) raise activation from 30% (templates, import client list) — this also increases invoices sent; 2) build and A/B test the invoice-page call-to-action; 3) only then scale ads.</p>`
      },
      takeaways: [
        'AARRR shows where you lose people; fix retention and activation before acquisition.',
        'Loops feed themselves and compound; funnels need constant refilling.',
        'The best loops are built into normal product use (Hotmail’s signature).',
        'Measure loop strength: new users per cycle and cycle speed.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-2',
      title: 'North Star metric, activation & the aha moment',
      level: 'Beginner',
      minutes: 13,
      hook: 'Facebook found that getting a new user to 7 friends in 10 days mattered more than almost anything else — that is the power of knowing your aha moment.',
      eli5: `When you join a new football club, the moment you score your first goal with your new teammates is when you think “I love this place”. Before that you might quit. Companies search for that moment for their users — and then make sure everybody gets there as fast as possible.`,
      blocks: [
        { type: 'framework', name: 'North Star Metric (NSM)', by: 'Popularised by Sean Ellis and Amplitude’s North Star playbook', when: 'To align every team on one measure of customer value that leads to revenue.',
          steps: [
            { label: 'Captures value', desc: 'It measures customers getting real value, not your effort: e.g. Airbnb “nights booked”, Spotify “time spent listening”.' },
            { label: 'Leads revenue', desc: 'If it grows, revenue should follow over time.' },
            { label: 'Is measurable & movable', desc: 'Teams can influence it weekly.' },
            { label: 'Break into inputs', desc: 'E.g. nights booked = active guests × searches per guest × booking conversion. Each team owns an input metric.' },
            { label: 'Add guardrails', desc: 'Pair it with counter-metrics (refunds, complaints, margin) so it is not gamed.' }
          ] },
        { type: 'flip', title: 'Guess the North Star', cards: [
          { front: 'Airbnb', back: 'Nights booked.' },
          { front: 'Spotify', back: 'Time spent listening.' },
          { front: 'Slack (early)', back: 'Messages sent / teams actively communicating.' },
          { front: 'A B2B invoicing tool', back: 'Invoices paid through the product (value delivered to customers).' },
          { front: 'Why not “revenue”?', back: 'Revenue is lagging and measures what you capture, not the value customers receive.' }
        ] },
        { type: 'formula', name: 'Activation rate', expr: 'Activation rate = Users who reach the aha moment within X days ÷ New sign-ups',
          explain: 'Define the aha moment as an action that strongly predicts long-term retention, with a time window.',
          example: '8,000 sign-ups in March; 2,400 created and shared a first project within 7 days → activation = 30%. Raising it to 40% adds 800 activated users a month without any extra marketing.' },
        { type: 'case', company: 'Facebook', year: 'c. 2007–2008', title: '7 friends in 10 days',
          situation: `Facebook’s growth team, led by Chamath Palihapitiya, wanted to know what separated users who stayed from those who left.`,
          decision: `Analysing data, they found that users who connected with about 7 friends within their first 10 days were far more likely to stay. They focused the new-user experience on that goal — friend suggestions, contact import, “People You May Know”.`,
          outcome: `The simple, memorable target aligned the whole company and became one of the most famous examples of a growth team’s activation metric.`,
          lesson: `Find the behaviour that predicts retention, make it simple to communicate, and redesign onboarding around it.` },
        { type: 'case', company: 'Slack', year: '2014–2015', title: 'The 2,000-message threshold',
          situation: `Slack wanted to know when a team was “hooked”.`,
          decision: `Looking at usage data, Slack found that once a team had exchanged about 2,000 messages, the vast majority kept using the product — Stewart Butterfield cited roughly 93% retention for such teams.`,
          outcome: `Onboarding and the free plan were geared to get whole teams communicating quickly, rather than individuals exploring features alone.`,
          lesson: `For collaborative products, activation is a team event — invite the team, not just the user.` },
        { type: 'framework', name: 'How to find your aha moment', by: 'Common growth-team practice', when: 'Early in product-market fit work, and again after big product changes.',
          steps: [
            { label: 'Split retained vs churned users', desc: 'Compare users still active at day 30 or 60 with those who left.' },
            { label: 'List early actions', desc: 'What did retained users do in their first days that churned users did not?' },
            { label: 'Find the threshold', desc: 'Find the number and time window where retention jumps (e.g. 3 projects in 7 days).' },
            { label: 'Test causality', desc: 'Run experiments that push users toward the action. If retention rises, it is causal, not just correlation.' },
            { label: 'Redesign onboarding', desc: 'Remove steps that do not lead there; add templates, guided set-up, invites.' }
          ] },
        { type: 'scenario', prompt: 'Your note-taking app picks “daily sign-ups” as its North Star. What is the problem?',
          options: [
            { text: 'Nothing — sign-ups lead to revenue', feedback: 'Sign-ups measure acquisition, not value. You could grow it while every user churns.', good: false },
            { text: 'It measures acquisition, not value; something like “weekly active note-takers who create or revisit notes” fits better', feedback: 'Right. A good NSM reflects customers receiving value repeatedly.', good: true },
            { text: 'It should be monthly revenue instead', feedback: 'Revenue is lagging and does not tell teams what value to create.', good: false }
          ] },
        { type: 'checklist', title: 'Onboarding audit', items: ['Is the aha moment defined with a number and time window?', 'How many steps from sign-up to aha? Can we remove any?', 'Do we offer templates or sample data so the product is not empty?', 'For team products, do we prompt invites early?', 'Do we send nudges (email/in-app) to users who stall?', 'Is activation tracked weekly by cohort?'] }
      ],
      terms: [
        { term: 'North Star metric', def: 'The single metric that best captures the value customers get and predicts long-term growth.' },
        { term: 'Input metric', def: 'A driver of the North Star that a team can influence directly.' },
        { term: 'Aha moment', def: 'The point when a new user first experiences the core value of the product.' },
        { term: 'Activation', def: 'Getting a new user to the aha moment, usually within a defined time window.' },
        { term: 'Onboarding', def: 'The first-use experience that guides new users to value.' },
        { term: 'Counter-metric', def: 'A metric watched alongside a target to catch harmful side effects.' },
        { term: 'Time-to-value', def: 'How long it takes a new user to get their first real benefit.' }
      ],
      quiz: [
        { q: 'Which is the best North Star for a ride-hailing app?', options: ['App downloads', 'Completed rides per week', 'Number of drivers registered', 'Marketing spend'], answer: 1, explain: 'Completed rides reflect value for both riders and drivers and lead to revenue.' },
        { q: '5,000 sign-ups, 1,750 reach the aha moment in 7 days. Activation rate?', options: ['25%', '30%', '35%', '17.5%'], answer: 2, explain: '1,750 ÷ 5,000 = 35%.' },
        { q: 'Facebook’s famous activation goal was…', options: ['7 friends in 10 days', '10 posts in 7 days', '1 photo per day', '100 likes in a month'], answer: 0, explain: 'Users reaching about 7 friends in 10 days were much more likely to stay.' },
        { q: 'You notice retained users all used feature X early. Before redesigning onboarding you should…', options: ['Remove all other features', 'Assume it is causal', 'Raise prices', 'Run an experiment nudging users to X to test causality'], answer: 3, explain: 'Correlation might just reflect motivated users; test it.' },
        { q: 'Why add counter-metrics to a North Star?', options: ['To make dashboards longer', 'To catch gaming and harmful side effects', 'To replace the North Star', 'To satisfy investors'], answer: 1, explain: 'E.g. pushing bookings could raise cancellations or refunds.' }
      ],
      challenge: {
        title: 'Define activation for a design tool',
        prompt: `A collaborative online whiteboard has 20,000 sign-ups/month. Data: of users who create a board AND invite at least one collaborator within 3 days, 55% are active at day 60; of those who only create a board, 15%; of those who do neither, 3%. Today 25% create a board and invite, 35% only create, 40% do neither. Define the aha moment, estimate the impact of improving it, and propose three onboarding changes.`,
        hints: ['Compute current day-60 actives.', 'Model moving 10 percentage points into the top group.', 'Remember to test causality.'],
        model: `<p><b>Aha moment (hypothesis):</b> create a board and invite ≥1 collaborator within 3 days.</p>
<p><b>Today:</b> 5,000 × 55% = 2,750; 7,000 × 15% = 1,050; 8,000 × 3% = 240 → <b>4,040</b> day-60 actives per monthly cohort.</p>
<p><b>If 10 pts move from “only create” to “create + invite”:</b> 7,000 × 55% = 3,850; 5,000 × 15% = 750; 240 → <b>4,840</b> (+20%) — if the relationship is causal.</p>
<p><b>Changes:</b> 1) ask “Who do you work with?” during sign-up and pre-fill invites from the user’s domain; 2) templates (retro, brainstorm) that are designed for a group, with an “invite your team to vote” prompt; 3) share-link previews that let guests contribute without a full sign-up.</p>
<p><b>Validate:</b> A/B test the new onboarding; primary metric = % reaching aha in 3 days, secondary = day-60 retention of the cohort.</p>`
      },
      takeaways: [
        'A North Star measures value delivered, not effort or vanity.',
        'Break it into input metrics that teams own, and add counter-metrics.',
        'Find the aha moment from data, then test it is causal.',
        'Redesign onboarding to get users to the aha moment fast — for teams, invite early.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-3',
      title: 'Retention: the foundation of all growth',
      level: 'Intermediate',
      minutes: 15,
      hook: 'If users do not stay, nothing else matters — retention is the difference between a rocket and a leaky balloon.',
      eli5: `Imagine a bath with the plug pulled out. Turning the tap higher (marketing) helps a bit, but the water keeps draining. Putting the plug in (retention) is what lets the bath fill. And the best products are like baths where the water level slowly rises on its own as people come back more often.`,
      blocks: [
        { type: 'text', title: 'What a cohort is', html: `<p>A <b>cohort</b> is a group of users who started in the same period (e.g. everyone who signed up in January). A <b>cohort retention table</b> shows what % of each cohort is still active after 1, 2, 3… periods.</p><p>Why cohorts? Total active users can rise even while each new cohort retains worse — new sign-ups hide the leak. Cohorts show the truth.</p>` },
        { type: 'interactive', widget: 'retention', title: 'Watch the curve', note: 'Set monthly churn at 10% and then at 3%. Look at how many users from a 1,000-user cohort remain after 12 months. Small churn changes have huge long-term effects.' },
        { type: 'compare', title: 'Reading retention curves', headers: ['Curve shape', 'What it means', 'What to do'],
          rows: [
            ['Declines to zero', 'No product-market fit — everyone eventually leaves', 'Stop scaling acquisition; return to discovery'],
            ['Flattens (plateau)', 'A core group finds lasting value — a sign of product-market fit', 'Raise the plateau, then scale acquisition'],
            ['Smile (dips then rises)', 'Returning users and growing usage outweigh churn — best case', 'Find what drives resurrection/expansion and amplify it'],
            ['Newer cohorts flatten higher', 'The product is improving', 'Keep shipping what works']
          ] },
        { type: 'formula', name: 'Net revenue retention (NRR)', expr: 'NRR = (Starting MRR + Expansion − Contraction − Churned MRR) ÷ Starting MRR',
          explain: 'For subscription businesses, revenue retention matters as much as user retention. NRR above 100% means existing customers grow revenue even with no new sales.',
          example: 'Cohort starts at $100k MRR; after 12 months: +$25k expansion, −$5k downgrades, −$10k churn → NRR = 110/100 = 110%. Top public SaaS companies have reported NRR well above 120% at times.' },
        { type: 'framework', name: 'Retention by timeframe', by: 'Common growth practice (e.g. Reforge: activation, engagement, resurrection)', when: 'To pick the right levers for each phase of the user lifecycle.',
          steps: [
            { label: 'Early (days 1–7)', desc: 'Driven by activation: onboarding, the aha moment, time-to-value.' },
            { label: 'Medium (weeks 2–8)', desc: 'Driven by habit: triggers, reminders, new use cases, social features.' },
            { label: 'Long-term (months)', desc: 'Driven by deep value and switching costs: data stored, integrations, team adoption, network.' },
            { label: 'Resurrection', desc: 'Win back dormant users with new features, seasonal triggers, personalised re-engagement.' }
          ] },
        { type: 'case', company: 'Duolingo', year: '2018–2020s', title: 'Streaks and a retention-first growth model',
          situation: `Duolingo’s daily active users had stalled. The team needed to know which lever mattered most.`,
          decision: `The growth team built a model of user states (new, current, at-risk, dormant, resurrected) and found that improving the retention of current users had the biggest impact on DAU. They invested in streaks (and protections like streak freezes), leaderboards with weekly leagues, and better-timed notifications.`,
          outcome: `As described publicly by former growth leader Jorge Mazal, DAUs grew several-fold over the following years, and streaks became central to the Duolingo brand.`,
          lesson: `Model your user states, find the lever with the most impact (often current-user retention), and use habit mechanics that genuinely help users reach their goals.` },
        { type: 'callout', kind: 'warning', title: 'Retention traps', html: `<ul><li><b>Dark patterns</b> (making cancellation hard) inflate retention but destroy trust and can be illegal — e.g. US FTC actions over cancellation flows.</li><li><b>Wrong frequency:</b> measure at the natural usage interval — a tax app is yearly, a chat app daily.</li><li><b>Blended averages</b> hide that one segment retains brilliantly and another terribly. Always segment by channel, plan and persona.</li></ul>` },
        { type: 'scenario', prompt: 'Total monthly active users grew 40% this year, but month-3 retention fell from 30% to 18% across cohorts. The CEO is celebrating. You…',
          options: [
            { text: 'Celebrate too — growth is growth', feedback: 'New sign-ups are hiding a worsening leak. Growth will stall and CAC will rise.', good: false },
            { text: 'Show the cohort chart, find which channels or segments drive the drop, and shift focus to activation and retention', feedback: 'Correct. Cohorts expose the real health; segmenting shows where to act.', good: true },
            { text: 'Increase acquisition spend to compensate', feedback: 'That makes the bucket leak faster and more expensively.', good: false }
          ] }
      ],
      terms: [
        { term: 'Cohort', def: 'A group of users who started in the same time period, tracked together over time.' },
        { term: 'Retention rate', def: 'The percentage of a cohort still active after a given period.' },
        { term: 'Churn', def: 'The rate at which users or revenue leave in a period.' },
        { term: 'Plateau', def: 'The point where a retention curve flattens — a sign a core group gets lasting value.' },
        { term: 'Smile curve', def: 'A retention curve that dips and then rises as users return or increase usage over time.' },
        { term: 'NRR', def: 'Net revenue retention: revenue from an existing customer cohort after expansion, contraction and churn, as % of the start.' },
        { term: 'Resurrection', def: 'A dormant user becoming active again.' }
      ],
      quiz: [
        { q: 'A retention curve that keeps falling toward zero suggests…', options: ['Strong product-market fit', 'Lack of product-market fit', 'Great virality', 'A smile curve'], answer: 1, explain: 'If every cohort eventually leaves, nobody finds lasting value.' },
        { q: 'Starting MRR $200k, expansion $30k, contraction $10k, churn $20k. NRR?', options: ['85%', '115%', '90%', '100%'], answer: 3, explain: '(200 + 30 − 10 − 20) ÷ 200 = 200/200 = 100%.' },
        { q: 'Why look at cohorts instead of total active users?', options: ['Cohorts are easier to calculate', 'Investors require it by law', 'New sign-ups can hide worsening retention in totals', 'Totals are always wrong'], answer: 2, explain: 'Growing totals can mask each cohort retaining worse.' },
        { q: 'Duolingo’s growth team found the biggest DAU lever was…', options: ['Retaining current users', 'Paid acquisition', 'Price cuts', 'New languages only'], answer: 0, explain: 'Current-user retention had the largest effect in their model.' },
        { q: 'For a tax-filing app, retention should be measured…', options: ['Daily', 'Weekly', 'Hourly', 'Yearly'], answer: 3, explain: 'Match the measurement to the natural usage frequency.' }
      ],
      challenge: {
        title: 'Diagnose a meal-kit company',
        prompt: `A meal-kit subscription spends $60 to acquire a customer; average order margin is $15/week. Cohort data: week-4 retention 50%, week-12 25%, week-26 12%, and still falling. Customers acquired via 50%-off first-box coupons retain half as well as referred customers. Is the business healthy? What should management do?`,
        hints: ['Estimate weeks of margin per acquired customer.', 'Look at curve shape.', 'Segment by channel.'],
        model: `<p><b>Rough payback:</b> sum of retention over 26 weeks ≈ average ~ (1 + 0.5)/2 × 4 + (0.5 + 0.25)/2 × 8 + (0.25 + 0.12)/2 × 14 ≈ 3 + 3 + 2.6 ≈ <b>8.6 paid weeks</b> → 8.6 × $15 ≈ <b>$129</b> margin in 26 weeks vs $60 CAC. Positive, but the curve has not flattened, so long-term value is limited and coupon cohorts are much worse (≈ $65 if they retain half as well — barely break-even after the discount cost).</p>
<p><b>Diagnosis:</b> no clear plateau = weak long-term fit for many customers; coupons attract deal-seekers.</p>
<p><b>Actions:</b> 1) cut deep-discount coupon spend; shift to referrals and smaller discounts spread over several boxes; 2) improve habit and flexibility (easy skip-a-week instead of cancel, recipe personalisation); 3) win-back campaigns for lapsed users (resurrection); 4) track week-26 retention by channel monthly — target a visible plateau before scaling marketing.</p>`
      },
      takeaways: [
        'Retention is the foundation: without it, acquisition is wasted money.',
        'Use cohort curves; look for a plateau (fit) or a smile (best case).',
        'Track revenue retention (NRR) as well as user retention.',
        'Model user states and segment — the biggest lever is often current-user retention.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-4',
      title: 'Product-led growth: freemium, self-serve & PQLs',
      level: 'Intermediate',
      minutes: 15,
      hook: 'Figma, Canva, Slack and Zoom spread through companies before procurement ever heard of them — the product itself did the selling.',
      eli5: `Instead of a salesperson knocking on your door to sell you a bicycle, a shop lets you ride one free around the park. If you love it, you pay for the fancy version — and your friends see you riding and want one too. That is product-led growth: the product is the salesperson.`,
      blocks: [
        { type: 'compare', title: 'Sales-led vs product-led growth', headers: ['', 'Sales-led (SLG)', 'Product-led (PLG)'],
          rows: [
            ['First touch', 'Demo with a salesperson', 'Sign up and use it yourself'],
            ['Buyer', 'Executive / procurement', 'End user, then team, then company'],
            ['Time to value', 'Weeks–months', 'Minutes'],
            ['CAC', 'High', 'Lower at the start, sales added later'],
            ['Best for', 'Complex, high-price, regulated products', 'Products individuals can try and get value from quickly'],
            ['Examples', 'Traditional ERP, large security platforms', 'Slack, Figma, Canva, Zoom, Notion, Dropbox']
          ] },
        { type: 'framework', name: 'The PLG motion', by: 'OpenView (Blake Bartlett) and Wes Bush, “Product-Led Growth”, 2019', when: 'When designing go-to-market for a product users can adopt themselves.',
          steps: [
            { label: 'Free entry', desc: 'Freemium, free trial or open self-serve sign-up — no sales call needed.' },
            { label: 'Fast time-to-value', desc: 'Templates, guided onboarding, instant results.' },
            { label: 'Built-in spread', desc: 'Collaboration, sharing and invites pull in teammates.' },
            { label: 'Self-serve upgrade', desc: 'Paywalls on features teams need as they grow: more seats, admin, history, storage.' },
            { label: 'Product-led sales', desc: 'Sales reaches out to accounts showing strong usage signals (PQLs) to sell enterprise plans.' }
          ] },
        { type: 'compare', title: 'Freemium vs free trial vs reverse trial', headers: ['', 'Freemium', 'Free trial', 'Reverse trial'],
          rows: [
            ['How it works', 'Free forever with limits', 'Full product for X days, then pay', 'Full product for X days, then drop to free tier'],
            ['Strength', 'Huge top of funnel, word of mouth', 'Urgency, higher conversion rate', 'Users feel premium value, keep a free fallback'],
            ['Risk', 'Free users cost money; low conversion', 'Smaller funnel; lose non-converters', 'More complex to design'],
            ['Example', 'Canva, Zoom (time-limited group meetings), Spotify', 'Many B2B SaaS tools (14–30 days)', 'Used by some tools such as Airtable and others']
          ] },
        { type: 'formula', name: 'Freemium economics', expr: 'Value per free sign-up = Free-to-paid conversion % × Paid LTV − Cost to serve free users',
          explain: 'Freemium conversion rates are often in the low single digits, so free users must be cheap to serve and should bring in others (virality).',
          example: '100,000 free users; 3% convert = 3,000 paid × $300 LTV = $900,000. Serving free users costs $0.50/month × 100,000 × 12 = $600,000/year. Value per free sign-up ≈ ($900k − $600k) ÷ 100k = $3 — positive, but only just. Free users who invite others make it much better.' },
        { type: 'text', title: 'Product-qualified leads (PQLs)', html: `<p>A <b>PQL</b> is a user or account that has shown buying intent through product usage — not just by downloading an e-book (an MQL). Examples:</p><ul><li>10+ active users from the same company domain on a free plan</li><li>Hit a paywall (e.g. storage or seat limit) twice in a week</li><li>Used admin or security features that only enterprises need</li></ul><p>Sales then contacts these accounts with context (“your 40 designers are already using us — want SSO and central billing?”). This hybrid is often called <b>product-led sales</b>.</p>` },
        { type: 'case', company: 'Figma', year: '2016–2025', title: 'Multiplayer design in the browser',
          situation: `Design tools were desktop apps with files emailed back and forth. Developers, product managers and marketers could not easily see or comment on designs.`,
          decision: `Figma built a browser-based, real-time collaborative design tool with a generous free plan. Anyone with a link could view and comment, pulling non-designers into the product.`,
          outcome: `Figma spread team by team inside companies, then sold enterprise plans. Adobe agreed to buy it for about $20B in 2022, but the deal was abandoned in late 2023 after regulatory pushback; Figma went public in 2025.`,
          lesson: `Collaboration is a built-in growth loop: every share link is an invitation, and every new viewer is a potential editor and buyer.` },
        { type: 'case', company: 'Canva', year: '2013–today', title: 'Making design easy for everyone',
          situation: `Professional design software was powerful but hard to learn and expensive for non-designers.`,
          decision: `Canva offered a free, browser-based tool with thousands of templates, monetising through Canva Pro and later team and enterprise plans. Template pages also attract searches on Google for things like “birthday invitation template”.`,
          outcome: `Canva became one of the world’s most-used design platforms, with a very large base of free users and a growing paid base, reportedly profitable for years — unusual among fast-growing startups.`,
          lesson: `Freemium works when the free product is genuinely useful, cheap to serve, and naturally leads to paid needs (brand kits, teams, premium content).` },
        { type: 'interactive', widget: 'unit-economics', title: 'Does your freemium model pay?', note: 'Enter blended ARPU across paid users, gross margin and churn. Compare a PLG company with $50 CAC to a sales-led one with $2,000 CAC and higher ARPU.' }
      ],
      terms: [
        { term: 'Product-led growth (PLG)', def: 'A go-to-market strategy where the product itself drives acquisition, conversion and expansion.' },
        { term: 'Freemium', def: 'A free-forever version of a product with limits, designed to convert some users to paid plans.' },
        { term: 'Free trial', def: 'Time-limited access to the full product before payment is required.' },
        { term: 'Reverse trial', def: 'Users get premium features for a limited time and then fall back to a free plan if they do not pay.' },
        { term: 'PQL', def: 'Product-qualified lead — a user or account whose product usage signals readiness to buy.' },
        { term: 'Self-serve', def: 'Customers can sign up, pay and upgrade without talking to a salesperson.' },
        { term: 'Product-led sales', def: 'A hybrid model where sales teams focus on accounts already showing strong product usage.' }
      ],
      quiz: [
        { q: 'Which product is LEAST suited to pure PLG?', options: ['A note-taking app', 'A team chat tool', 'A core banking system for large banks', 'An online design tool'], answer: 2, explain: 'Complex, regulated, high-price systems need sales-led processes.' },
        { q: '50,000 free users, 4% convert, LTV $250, free users cost $200,000 to serve. Net value?', options: ['$300,000', '$500,000', '$700,000', '$100,000'], answer: 0, explain: '2,000 × $250 = $500,000 − $200,000 = $300,000.' },
        { q: 'Which is the best example of a PQL?', options: ['Someone downloaded a white paper', 'A company has 25 active free users and hit the seat limit', 'A visitor read the pricing page once', 'A trade-show badge scan'], answer: 1, explain: 'Usage plus hitting a paywall signals real intent.' },
        { q: 'Figma’s key built-in growth loop was…', options: ['TV advertising', 'Cold calling designers', 'Discount coupons', 'Share links that pulled collaborators into the product'], answer: 3, explain: 'Each shared design invited new viewers and editors.' },
        { q: 'A reverse trial means…', options: ['Users start with premium features, then drop to free if they do not pay', 'Users pay first, then get a refund', 'Sales calls before any trial', 'Trial only for enterprise'], answer: 0, explain: 'It combines the urgency of a trial with the safety net of freemium.' }
      ],
      challenge: {
        title: 'Move a sales-led SaaS to PLG',
        prompt: `A project-management SaaS sells only through demos: CAC $6,000, average contract $9,000/year, 90% gross margin, 12% annual churn, sales cycle 60 days. Smaller teams complain they cannot just try it. Design a PLG motion (free plan or trial, paywalls, PQL definition) and explain how sales changes.`,
        hints: ['Which features should be free vs paid?', 'Define a PQL using usage signals.', 'Keep sales for large accounts.'],
        model: `<p><b>Entry:</b> free plan for up to 5 users and 3 projects; 14-day reverse trial of the Business plan for every new workspace.</p>
<p><b>Time-to-value:</b> templates (product launch, sprint, client project), import from spreadsheets, invite prompt during set-up.</p>
<p><b>Paywalls:</b> more than 5 users, unlimited projects, timeline/Gantt views, integrations (Pro, ~$10/user/month); SSO, audit logs, advanced permissions (Enterprise, sales-led).</p>
<p><b>PQL:</b> workspace with ≥8 weekly active users from one company domain, or ≥3 paywall hits in a week, or admin settings visited by a company with 200+ employees.</p>
<p><b>Sales:</b> shifts from cold outreach to PQL follow-up; SDRs contact PQLs within 24 hours; AEs focus on Enterprise expansion. Expected effect: lower blended CAC for small teams (self-serve), shorter cycles for PQL-sourced deals, more expansion revenue.</p>
<p><b>Metrics:</b> sign-up → activation (project with 3+ members in 7 days), free → paid conversion, PQL → enterprise win rate, NRR.</p>`
      },
      takeaways: [
        'PLG lets users try, adopt and spread the product before talking to sales.',
        'Choose freemium, trial or reverse trial based on cost to serve and time-to-value.',
        'Use PQLs — usage signals — to focus sales on accounts ready to buy.',
        'Collaboration and sharing turn the product into its own distribution channel.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-5',
      title: 'Virality, network effects, referrals, content & community',
      level: 'Advanced',
      minutes: 16,
      hook: 'Dropbox paid users in storage, not cash, to invite friends — and turned customers into its biggest acquisition channel.',
      eli5: `If you tell two friends about a great ice-cream shop and each of them tells two more, the news spreads fast. That is virality. If the shop becomes better the more people visit (say, more flavours because more customers), that is a network effect. Together they can make one shop win the whole town.`,
      blocks: [
        { type: 'formula', name: 'Viral coefficient (K-factor)', expr: 'K = Invites sent per user × Conversion rate of invites',
          explain: 'K above 1 means each user brings more than one new user — self-sustaining growth. Most products have K well below 1, but even K = 0.3–0.5 greatly lowers effective CAC. Cycle time (how fast invites happen) matters as much as K.',
          example: 'Each user sends 5 invites; 10% sign up → K = 0.5. 1,000 users bring 500, who bring 250, then 125… ≈ 2,000 total users from 1,000 paid ones — your effective CAC halves.' },
        { type: 'interactive', widget: 'viral-loop', title: 'Simulate a viral loop', note: 'Try K = 0.5, then K = 1.1. Then keep K at 0.8 and shorten the cycle time. Notice how speed changes the curve.' },
        { type: 'case', company: 'Dropbox', year: '2008–2010', title: 'Give storage, get storage',
          situation: `Dropbox had a product people loved, but paid search ads were expensive compared with what a customer was worth.`,
          decision: `Inspired by PayPal’s earlier cash referral bonuses, Dropbox built a two-sided referral programme: both the inviter and the new user got extra free storage. Inviting was built into onboarding and made very easy.`,
          outcome: `In a 2010 talk, Drew Houston reported that referrals permanently increased sign-ups by about 60%, and that users grew from roughly 100,000 to around 4 million in about 15 months.`,
          lesson: `The best referral rewards are part of the product (storage, credits, features), benefit both sides, and are offered when the user is happiest.` },
        { type: 'compare', title: 'Types of network effects', headers: ['Type', 'How value grows', 'Examples'],
          rows: [
            ['Direct (same-side)', 'More users of the same type make it more useful for each user', 'Phone networks, WhatsApp, Slack inside a company'],
            ['Two-sided (cross-side)', 'More users on one side attract the other side', 'Uber riders/drivers, Airbnb guests/hosts, app stores'],
            ['Data', 'More usage improves the product through data', 'Waze traffic, search ranking, recommendation engines'],
            ['Local', 'Value grows within a city or group, not globally', 'Food delivery, ride-hailing — why winning each city matters']
          ] },
        { type: 'case', company: 'Zoom', year: '2019–2020', title: 'Every meeting is a demo',
          situation: `Video conferencing was crowded (Skype, WebEx, Google Meet). Zoom focused on reliability and simplicity: click a link and join.`,
          decision: `Guests did not need a paid account to join; the free plan allowed group meetings up to 40 minutes. Every meeting exposed new people to the product, and hosts who hit the time limit upgraded.`,
          outcome: `When the pandemic hit in 2020, Zoom reported daily meeting participants jumping from about 10 million in December 2019 to over 300 million in April 2020.`,
          lesson: `When using the product requires inviting others, distribution is built in — and friction-free joining is the conversion step.` },
        { type: 'framework', name: 'Content, SEO and community loops', by: 'Growth-loop practice (Reforge and others)', when: 'When viral sharing is weak but users or the company create content others search for.',
          steps: [
            { label: 'User-generated content loop', desc: 'Users create content → it is indexed by Google → searchers find it → some sign up and create more (Pinterest pins, Quora/Reddit answers, TripAdvisor reviews).' },
            { label: 'Company-generated / programmatic SEO', desc: 'Create many useful pages from data (Zapier’s pages for each app-to-app integration; Canva template pages) → search traffic → sign-ups.' },
            { label: 'Community-led growth', desc: 'Members help each other, create templates and run events (Notion ambassadors and template creators, Figma Community files) → new members discover the product through peers.' },
            { label: 'Measure', desc: 'Pages or posts created per user, search impressions, sign-ups per page, cycle time.' }
          ] },
        { type: 'callout', kind: 'warning', title: 'Viral done badly', html: `<p>Spammy tactics — auto-messaging a user’s entire address book, misleading invites — can produce a short spike, but they damage trust, get blocked by email providers and app stores, and may break privacy and anti-spam laws. Sustainable virality comes from <b>genuine value in sharing</b> (collaboration, showing off creations, getting a reward the friend also wants).</p>` },
        { type: 'checklist', title: 'Referral programme design', items: ['Reward is valuable to both sides and tied to the product', 'Ask at a moment of delight (after a success, not at sign-up)', 'One-tap sharing with a pre-written, editable message', 'Clear progress tracking (“2 of 3 friends joined”)', 'Fraud controls (self-referrals, fake accounts)', 'Measure K, invite conversion and referred-user retention vs other channels'] }
      ],
      terms: [
        { term: 'K-factor', def: 'Viral coefficient: average number of new users each existing user brings in.' },
        { term: 'Viral cycle time', def: 'How long it takes for a user to join, invite others and for those invitees to join.' },
        { term: 'Network effect', def: 'When a product becomes more valuable as more people use it.' },
        { term: 'Two-sided marketplace', def: 'A platform connecting two different groups, like buyers and sellers, where each side attracts the other.' },
        { term: 'Referral programme', def: 'A structured incentive for existing customers to invite new ones.' },
        { term: 'Programmatic SEO', def: 'Creating many search-optimised pages from structured data to capture specific searches.' },
        { term: 'Community-led growth', def: 'Growth driven by a community of users who help, teach and recruit each other.' }
      ],
      quiz: [
        { q: 'Users send 4 invites each and 20% convert. K-factor?', options: ['0.2', '0.4', '0.8', '4.0'], answer: 2, explain: '4 × 0.2 = 0.8.' },
        { q: 'With K = 0.5, 1,000 paid users eventually lead to about how many total users?', options: ['1,500', '2,000', '1,000', 'Infinite'], answer: 1, explain: 'Geometric series: 1,000 ÷ (1 − 0.5) = 2,000.' },
        { q: 'Uber riders attracting drivers and vice versa is a…', options: ['Two-sided network effect', 'Direct network effect', 'Data network effect', 'Content loop'], answer: 0, explain: 'Value crosses between two different user groups.' },
        { q: 'What made Dropbox’s referral programme especially effective?', options: ['Large cash payments', 'Rewards only for the inviter', 'A TV campaign', 'Two-sided rewards built into the product (extra storage)'], answer: 3, explain: 'Both sides got something valuable that was part of the product.' },
        { q: 'Zapier’s thousands of integration pages are an example of…', options: ['Community-led growth', 'Paid acquisition', 'Programmatic SEO / content loop', 'A referral programme'], answer: 2, explain: 'Pages built from structured data capture specific search demand.' }
      ],
      challenge: {
        title: 'Design a referral programme',
        prompt: `A language-learning app has 200,000 monthly active users, paid plan $10/month, CAC via ads $25, 12-month average paid lifetime. Today 2% of users invite anyone; invited friends convert to sign-up at 15%. Design a referral programme and estimate its impact on growth and effective CAC.`,
        hints: ['What reward fits the product?', 'Model invites per user × conversion.', 'Compare referred CAC (reward cost) to $25.'],
        model: `<p><b>Design:</b> “Give a friend 1 month of Premium free, get 1 month free yourself when they finish their first week.” Ask after a user hits a 7-day streak or completes a unit (moment of delight). One-tap share to messaging apps with a personal link and the inviter’s progress.</p>
<p><b>Assumptions:</b> share of users who invite rises from 2% to 8%; each inviter sends 3 invites; 15% sign up.</p>
<p><b>Impact:</b> 200,000 × 8% × 3 × 15% = <b>7,200 new users/month</b> (vs 200,000 × 2% × ~3 × 15% ≈ 1,800 today). K ≈ 0.036 — small, but meaningful extra users each month.</p>
<p><b>Cost:</b> each successful referral gives away up to 2 months of Premium. Since free months mainly cost serving capacity, the true marginal cost is low; even counted at full price ($20) it is below the $25 ad CAC, and referred users usually retain better.</p>
<p><b>Measure:</b> invite rate, invite → sign-up, referred-user 30-day retention vs paid-ad users, fraud rate. Iterate on the ask moment and message with A/B tests.</p>`
      },
      takeaways: [
        'K = invites per user × invite conversion; cycle time matters as much as K.',
        'Even K below 1 lowers effective CAC by multiplying paid acquisition.',
        'Network effects (direct, two-sided, data, local) create defensibility, not just growth.',
        'Content, SEO and community loops work when sharing is weak but content is searchable.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'growth-6',
      title: 'Growth experimentation, growth accounting & sustainable growth',
      level: 'Advanced',
      minutes: 16,
      hook: 'MoviePass grew to millions of subscribers in months — and collapsed. Not all growth is good growth.',
      eli5: `Imagine a gardener who tries a new fertiliser on one row at a time, writes down what happened and keeps only what works. That is experimentation. Then, each month, the gardener counts new plants, plants that grew bigger, plants that died and plants that came back. That count tells whether the garden is truly healthy — not just whether it got bigger.`,
      blocks: [
        { type: 'framework', name: 'The growth experimentation process', by: 'Sean Ellis & Morgan Brown, “Hacking Growth” (2017)', when: 'Weekly, by a cross-functional growth team.',
          steps: [
            { label: 'Analyse', desc: 'Study data and talk to users to find the biggest opportunity (e.g. 60% drop-off at step 2 of onboarding).' },
            { label: 'Ideate', desc: 'Anyone can submit ideas with a hypothesis: “If we X, then metric Y will improve because Z.”' },
            { label: 'Prioritise', desc: 'Score ideas with ICE and pick the top few for the week.' },
            { label: 'Test', desc: 'Run A/B tests with pre-set metrics and sample sizes.' },
            { label: 'Learn & scale', desc: 'Document results (wins AND losses), roll out winners, feed learnings into the next cycle.' }
          ] },
        { type: 'formula', name: 'ICE score', expr: 'ICE = (Impact + Confidence + Ease) ÷ 3   (each scored 1–10)',
          explain: 'A quick, rough way to rank ideas. Some teams multiply instead of averaging. Use it to sort, not as precise truth.',
          example: 'Idea A: shorter sign-up form — I 6, C 8, E 9 → 7.7. Idea B: new referral programme — I 9, C 5, E 3 → 5.7. Run A this week; scope a cheap test of B.' },
        { type: 'interactive', widget: 'ab-test', title: 'Read the result', note: 'Your test shows 10.0% vs 10.6% with 3,000 users per arm. Is it significant? How many users would you need to be confident?' },
        { type: 'formula', name: 'Growth accounting & quick ratio', expr: 'MRR change = New + Expansion + Resurrected − Contraction − Churned;  Quick ratio = (New + Expansion + Resurrected) ÷ (Contraction + Churned)',
          explain: 'Popularised by Social Capital (Jonathan Hsu) and Mamoon Hamid for SaaS. A quick ratio above about 4 is often cited as strong for early-stage SaaS; near 1 means you are running to stand still.',
          example: 'Month: new $50k, expansion $20k, resurrected $5k, contraction $10k, churn $15k → net +$50k MRR; quick ratio = 75 ÷ 25 = 3.0. Company B adds the same net +$50k with new $150k and churn $100k → quick ratio 1.5: same growth, much weaker engine.' },
        { type: 'case', company: 'MoviePass', year: '2017–2019', title: 'Growth that destroyed the company',
          situation: `MoviePass offered a movie-ticket subscription. In August 2017 it cut the price to $9.95/month for up to one cinema ticket per day — less than the price of a single ticket in many cities.`,
          decision: `The company paid cinemas close to full price for every ticket its subscribers used, betting it could later make money from data and partnerships.`,
          outcome: `Subscribers surged into the millions within months, but every heavy user lost money. Its parent company burned through cash, restricted usage, and MoviePass shut down in 2019.`,
          lesson: `Growth with negative unit economics is not growth — it is subsidised demand. Check contribution margin per user before scaling.` },
        { type: 'compare', title: 'Sustainable vs bad growth', headers: ['', 'Sustainable growth', 'Bad growth'],
          rows: [
            ['Unit economics', 'Positive contribution margin; LTV comfortably above CAC', 'Every new customer loses money'],
            ['Retention', 'Cohorts plateau or smile', 'Cohorts decay to zero; totals propped up by spend'],
            ['Source', 'Loops, referrals, organic, efficient paid', 'Heavy discounts, paid spend you cannot stop'],
            ['Quick ratio', 'High — little churn to replace', 'Near 1 — refilling a leaky bucket'],
            ['Customer trust', 'Earned value', 'Dark patterns, spam, misleading offers']
          ] },
        { type: 'interactive', widget: 'compound', title: 'Small gains compound', note: 'Compare 5% monthly growth with 7% over 24 months. A growth team that adds 2 points of monthly growth through many small experiments changes the company’s trajectory.' },
        { type: 'scenario', prompt: 'Your app’s MRR grew 20% last quarter. Growth accounting shows new MRR doubled, but churned MRR tripled after a heavy-discount campaign. The board asks you to repeat the campaign. You…',
          options: [
            { text: 'Repeat it — 20% growth is excellent', feedback: 'The engine is getting weaker: the quick ratio fell and discount customers churn fast.', good: false },
            { text: 'Show the growth accounting, compare discount-cohort retention and LTV with others, and shift budget to channels with better retention', feedback: 'Right. Growth accounting reveals quality; reallocate to sustainable sources.', good: true },
            { text: 'Stop all marketing until churn is zero', feedback: 'Too extreme — some churn is normal. Fix the source of bad churn, keep efficient channels.', good: false }
          ] }
      ],
      terms: [
        { term: 'Growth team', def: 'A cross-functional team (product, engineering, data, marketing) focused on running experiments to improve growth metrics.' },
        { term: 'ICE', def: 'Impact, Confidence, Ease — a quick scoring method to prioritise growth ideas.' },
        { term: 'Hypothesis', def: 'A testable statement: if we do X, metric Y will change because of Z.' },
        { term: 'Growth accounting', def: 'Breaking total growth into new, expansion, resurrected, contraction and churned components.' },
        { term: 'Quick ratio (SaaS)', def: 'Growth inflows divided by losses (contraction + churn); shows growth efficiency.' },
        { term: 'Contribution margin', def: 'Revenue per customer minus the variable costs of serving that customer.' },
        { term: 'Dark pattern', def: 'A design that tricks users into actions they did not intend, like hidden cancellation.' }
      ],
      quiz: [
        { q: 'Idea scores: Impact 8, Confidence 6, Ease 4. ICE (average)?', options: ['6.0', '192', '18', '5.0'], answer: 0, explain: '(8 + 6 + 4) ÷ 3 = 6.0.' },
        { q: 'New $40k, expansion $10k, resurrected $0, contraction $5k, churn $20k. Quick ratio?', options: ['1.0', '2.5', '2.0', '4.0'], answer: 2, explain: '(40 + 10 + 0) ÷ (5 + 20) = 50 ÷ 25 = 2.0.' },
        { q: 'Why did MoviePass fail despite rapid subscriber growth?', options: ['Not enough marketing', 'Each heavy user cost more than they paid — negative unit economics', 'Cinemas refused to sell tickets', 'Its app was too slow'], answer: 1, explain: 'It paid near full price for tickets while charging less than one ticket per month.' },
        { q: 'Which is the best experiment hypothesis?', options: ['Let us try a new homepage', 'Make onboarding better', 'Users like videos', 'If we add a progress bar to onboarding, completion will rise from 40% to 48% because users see how close they are'], answer: 3, explain: 'It states the change, the metric, the expected effect and the reason.' },
        { q: 'Two companies both add $50k net MRR. Company A has a quick ratio of 4, B of 1.3. Which is healthier?', options: ['B — it acquires more', 'They are identical', 'A — it loses much less to churn', 'Cannot know'], answer: 2, explain: 'A grows efficiently; B must replace large churn every month.' }
      ],
      challenge: {
        title: 'Set up a growth team',
        prompt: `A B2C fitness app: 300,000 MAU, $8M ARR. Last 6 months of MRR averages: new $120k, expansion $10k, resurrected $15k, contraction $15k, churn $110k per month. The CEO wants to “double growth” and proposes doubling the ad budget. As the new Head of Growth, diagnose with growth accounting and propose a 90-day experimentation plan.`,
        hints: ['Compute net new MRR and quick ratio.', 'Where is the biggest lever — inflow or outflow?', 'List 4–5 experiments and ICE-score them.'],
        model: `<p><b>Growth accounting:</b> inflows 120 + 10 + 15 = $145k; outflows 15 + 110 = $125k → net +$20k/month; quick ratio = 1.16. The company is running to stand still: almost all new revenue replaces churn.</p>
<p><b>Implication:</b> doubling ads adds new MRR but, at current retention, much of it churns. Cutting churn from $110k to $80k adds +$30k net per month — more than doubling net growth with no extra spend.</p>
<p><b>90-day plan:</b> weekly growth meeting; one North Star (weekly active workout-ers); a shared experiment log.</p>
<ul><li><b>E1</b> onboarding: personalised plan + first workout within 24h (I 8, C 7, E 6 → 7.0).</li><li><b>E2</b> streaks with “freeze” protection (I 7, C 7, E 7 → 7.0).</li><li><b>E3</b> annual-plan offer at month 2 (I 7, C 6, E 8 → 7.0) — locks in commitment, watch refunds.</li><li><b>E4</b> win-back campaign for lapsed users with a new programme (I 5, C 6, E 8 → 6.3).</li><li><b>E5</b> pause instead of cancel (I 6, C 7, E 9 → 7.3) — not a dark pattern: make cancel equally easy.</li></ul>
<p><b>Targets (90 days):</b> churned MRR below $90k, quick ratio above 1.6, then reassess ad spend with cohort LTV by channel.</p>`
      },
      takeaways: [
        'Run growth as a weekly cycle: analyse, ideate, prioritise (ICE), test, learn.',
        'Growth accounting shows the quality of growth, not just the total.',
        'A low quick ratio means you are refilling a leaky bucket — fix churn first.',
        'Growth with negative unit economics (MoviePass) is subsidised demand, not success.'
      ]
    }
  ]
});
