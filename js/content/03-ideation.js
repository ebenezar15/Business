/* MBA Studio — Track 3: Ideation & Opportunity */
MBA.addTrack({
  id: 'ideation',
  stage: 2,
  order: 3,
  title: 'Ideation & Opportunity',
  icon: '💡',
  color: '#f59e0b',
  tagline: 'Find problems worth solving — and ideas worth betting on',
  summary: `Learn where great business ideas really come from and how professionals generate, sharpen and judge them. You will use Jobs-to-be-Done, design thinking, first-principles reasoning, Blue Ocean and SCAMPER, then score opportunities, write a sharp problem statement and test your own founder–market fit — including AI-native opportunities emerging in 2025–26.`,
  outcomes: [
    'Spot opportunities from problems, trends, unbundling and "why now" shifts',
    'Use Jobs-to-be-Done and design thinking to understand real needs',
    'Generate ideas with first principles, SCAMPER and the Blue Ocean ERRC grid',
    'Score and compare opportunities with a structured scorecard',
    'Turn a vague idea into a crisp problem statement and hypothesis',
    'Assess founder–market fit and AI-native opportunity patterns'
  ],
  lessons: [
    /* ---------------- Lesson 1 ---------------- */
    {
      id: 'ideation-1',
      title: 'Where good ideas come from',
      level: 'Beginner',
      minutes: 12,
      hook: `Most great companies did not start with a genius flash — they started with an annoying problem, a shifting trend, or a bundle that was ready to be broken apart.`,
      eli5: `Imagine every time you go to school the gate is jammed and everyone waits in a queue. You could complain — or you could invent a better gate and sell it to every school. Business ideas are often just "annoyances someone decided to fix", especially when something new (like phones or AI) makes the fix suddenly possible.`,
      blocks: [
        {
          type: 'framework', name: 'Five sources of opportunity', by: 'Synthesis of Peter Drucker, "Innovation and Entrepreneurship" (1985), and startup practice', when: 'When you are looking for ideas or checking where an idea came from.',
          steps: [
            { label: 'Problems & frustrations', desc: 'Things people complain about, hack around with spreadsheets, or pay too much for. "Pain" is the best signal.' },
            { label: 'Trends & shifts', desc: 'New technology, regulation, demographics or behaviour (e.g. UPI payments, ageing populations, generative AI).' },
            { label: 'Unbundling & rebundling', desc: 'Take one feature of a big product and do it 10x better (unbundle), or combine scattered tools into one (rebundle).' },
            { label: 'Arbitrage & transplant', desc: 'Bring a model that works in one market or industry into another (e.g. quick-commerce adapted to Indian cities).' },
            { label: 'Your unfair insight', desc: 'Something you know from your job, community or hobby that most people do not.' }
          ]
        },
        {
          type: 'case', company: 'Airbnb', year: '2007–2009', title: 'A rent problem meets a hotel shortage',
          situation: `In 2007 founders Brian Chesky and Joe Gebbia struggled to pay rent in San Francisco. A big design conference had sold out the city’s hotels.`,
          decision: `They put air mattresses in their apartment and rented them to attendees with breakfast — "Air Bed & Breakfast". Early traction was weak, so they visited hosts in New York and improved listing photos themselves.`,
          outcome: `Better photos and host trust features helped bookings grow, and Airbnb went on to become a global platform for short-term stays.`,
          lesson: `A small, personal problem plus a visible demand spike revealed a much bigger opportunity: unused space as inventory. Doing "things that don’t scale" early helped them learn fast.`
        },
        {
          type: 'compare', title: 'Unbundling vs rebundling',
          headers: ['', 'Unbundling', 'Rebundling'],
          rows: [
            ['Idea', 'Pull one job out of a big bundle and do it far better', 'Combine many separate tools or services into one'],
            ['Example', 'Craigslist categories turned into separate startups (Airbnb for rooms, Indeed for jobs)', 'Super-apps like WeChat; Notion combining docs, wikis and tasks'],
            ['When it works', 'Bundle serves the niche badly', 'Users juggle too many tools'],
            ['Risk', 'Too small a market', 'Becoming mediocre at everything']
          ]
        },
        {
          type: 'formula', name: 'The "why now?" test', expr: 'Opportunity = Real pain × Enabling change ÷ Existing solutions',
          explain: 'A good idea needs a painful problem, something new that makes a better solution possible now, and weak existing alternatives. (This is a thinking aid, not a literal calculation.)',
          example: 'Instant digital payments for small shops in India: pain (cash handling), enabling change (UPI launched 2016, cheap smartphones, cheap data), existing solutions weak (card machines costly). Result: an explosion of QR-code payments.'
        },
        {
          type: 'callout', kind: 'tip', title: 'Keep a "bug list"',
          html: `<p>For two weeks, write down every time something annoys you, takes too long, or costs too much — at work, at home, online. Also note when people around you build workarounds (WhatsApp groups, spreadsheets, manual reminders). Workarounds are proof that a need exists.</p>`
        },
        {
          type: 'flip', title: 'Name the source',
          cards: [
            { front: 'Uber (taxis hard to find, smartphones with GPS spreading)', back: 'Problem + technology trend ("why now").' },
            { front: 'Indeed (job listings out of classified ads)', back: 'Unbundling.' },
            { front: 'Zomato starting by putting restaurant menus online', back: 'Problem (finding menus) + internet adoption.' },
            { front: 'A nurse building scheduling software for hospitals', back: 'Unfair insight from domain experience.' }
          ]
        },
        {
          type: 'checklist', title: 'Your idea-hunting routine',
          items: ['Keep a bug list for 14 days', 'Interview 5 people in an industry you know', 'List 3 trends changing your industry', 'Find one big product you could unbundle', 'Write one "why now?" sentence per idea']
        }
      ],
      terms: [
        { term: 'Opportunity', def: 'A problem or need that can be solved profitably, at a time when a solution is possible.' },
        { term: 'Pain point', def: 'A specific problem that frustrates customers enough that they want it fixed.' },
        { term: 'Why now', def: 'The recent change that makes an idea possible or timely today when it was not before.' },
        { term: 'Unbundling', def: 'Separating one function from a broad product and serving it better on its own.' },
        { term: 'Rebundling', def: 'Combining several separate products or services into one integrated offering.' },
        { term: 'Workaround', def: 'A makeshift fix people use when no good solution exists — a strong signal of demand.' }
      ],
      quiz: [
        { q: 'Which is the strongest early signal of a real opportunity?', options: ['Friends say "nice idea"', 'People already use clumsy workarounds and pay for partial fixes', 'A large market report', 'A cool technology'], answer: 1, explain: 'Workarounds and spending show real pain.' },
        { q: 'Airbnb’s first insight came from:', options: ['A market research firm', 'A government grant', 'Their own rent problem and a hotel shortage during a conference', 'Copying a Chinese company'], answer: 2, explain: 'A personal problem plus a visible demand spike.' },
        { q: 'Pulling the "jobs" section out of classifieds into a dedicated site is:', options: ['Rebundling', 'Arbitrage', 'Price discrimination', 'Unbundling'], answer: 3, explain: 'One function separated and served better.' },
        { q: 'For instant payments in Indian shops, the "why now" was:', options: ['UPI plus cheap smartphones and data', 'Higher cash usage', 'Fewer small shops', 'Credit cards becoming free'], answer: 0, explain: 'New infrastructure and device adoption made it possible.' }
      ],
      challenge: {
        title: 'Generate three opportunities',
        prompt: `Pick an industry you know (or use: neighbourhood clinics). For each of three sources — a problem, a trend, and an unbundling — write one opportunity in this format: "For [who], who struggle with [pain], [idea] is possible now because [why now]."`,
        hints: ['Be specific about who.', 'Your "why now" should be a real recent change.'],
        model: `<p><b>Industry: neighbourhood clinics.</b></p><ol><li><b>Problem:</b> For small clinics whose patients wait 60+ minutes, a WhatsApp-based live queue tracker is possible now because nearly all patients use WhatsApp and the WhatsApp Business API makes automated messages affordable.</li><li><b>Trend:</b> For doctors who spend hours writing notes, an AI scribe that drafts prescriptions and notes from the consultation conversation is possible now because speech-to-text and large language models became accurate and cheap in 2024–25 (with consent and data-privacy safeguards).</li><li><b>Unbundling:</b> For clinics that use bulky hospital software for just billing, a simple GST-ready billing and pharmacy-inventory app is possible now because cloud tools and digital payments are standard.</li></ol><p><b>Next step:</b> talk to 5 clinic owners and ask how they handle each today and what it costs them.</p>`
      },
      takeaways: [
        'Ideas come from problems, trends, unbundling/rebundling, transplants and unfair insights.',
        'Workarounds are evidence of real demand.',
        'Every strong idea needs a credible "why now".',
        'Start from a specific person with a specific pain.'
      ]
    },

    /* ---------------- Lesson 2 ---------------- */
    {
      id: 'ideation-2',
      title: 'Jobs-to-be-Done: what are customers really hiring?',
      level: 'Beginner',
      minutes: 13,
      hook: `People don’t want a quarter-inch drill; they want a quarter-inch hole — and often what they really want is a picture on the wall.`,
      eli5: `When you buy a birthday card, you are not buying paper. You are "hiring" it to make a friend feel special. If a funny video message does that job better, you might "fire" the card. Jobs-to-be-Done means asking: what job is the customer trying to get done, and what else could do it?`,
      blocks: [
        {
          type: 'framework', name: 'Jobs-to-be-Done (JTBD)', by: 'Clayton Christensen, Bob Moesta and colleagues; popularised in "Competing Against Luck" (2016)', when: 'Understanding why customers buy, switch, or ignore a product.',
          steps: [
            { label: 'Functional job', desc: 'The practical task: "get to work on time", "file taxes".' },
            { label: 'Emotional job', desc: 'How they want to feel: "feel in control", "not feel stupid".' },
            { label: 'Social job', desc: 'How they want to be seen: "look professional to clients".' },
            { label: 'Circumstance', desc: 'The situation that triggers the job: "rushed morning commute".' },
            { label: 'Competing solutions', desc: 'Everything they could hire, including doing nothing, spreadsheets or asking a friend.' }
          ]
        },
        {
          type: 'formula', name: 'The job story', expr: 'When [situation], I want to [motivation], so I can [expected outcome].',
          explain: 'Job stories focus on context and outcome rather than personas or features.',
          example: 'When I am leaving for a long drive at 7 a.m., I want something filling I can eat with one hand, so I can stay full and not get bored until lunch.'
        },
        {
          type: 'case', company: 'The "milkshake" study', year: '1990s–2000s', title: 'Hiring a milkshake for the commute',
          situation: `Christensen’s team worked with a fast-food chain that wanted to sell more milkshakes. Improving flavour and price based on customer surveys did not move sales.`,
          decision: `Researchers instead watched when and why people bought them. Many were bought early morning by solo commuters who wanted something to make a boring drive interesting and keep them full.`,
          outcome: `The insight pointed to making the morning shake thicker (lasting longer) and faster to buy — competing with bananas, bagels and boredom, not other milkshakes.`,
          lesson: `Your real competition is anything customers hire for the same job. Understand the circumstance, not just the demographic.`
        },
        {
          type: 'compare', title: 'Persona thinking vs JTBD thinking',
          headers: ['', 'Persona thinking', 'JTBD thinking'],
          rows: [
            ['Focus', 'Who the customer is (age, income)', 'What progress they are trying to make'],
            ['Question', '"What do 30-year-old women want?"', '"What job are people hiring this for, and when?"'],
            ['Competition', 'Similar products', 'Any solution to the same job, including non-consumption'],
            ['Output', 'Feature lists', 'Clear success criteria and switching triggers']
          ]
        },
        {
          type: 'framework', name: 'Forces of progress (switching interview)', by: 'Bob Moesta & Chris Spiek (Re-Wired Group)', when: 'Interviewing people who recently switched products.',
          steps: [
            { label: 'Push of the situation', desc: 'What was bad enough to make them look? ("Our spreadsheet broke during audit.")' },
            { label: 'Pull of the new solution', desc: 'What attracted them? ("Saw a colleague close books in 2 days.")' },
            { label: 'Anxiety of the new', desc: 'What worried them? ("Will migration lose data?")' },
            { label: 'Habit of the present', desc: 'What kept them stuck? ("Everyone knows the old way.")' },
            { label: 'Design implication', desc: 'Grow push and pull; shrink anxiety (free migration, guarantees) and habit (easy import).' }
          ]
        },
        {
          type: 'scenario', prompt: 'You sell a premium meal-kit. Interviews show customers mainly want "to feel like a good parent on busy weekdays without cooking stress." Which product move fits the job best?',
          options: [
            { text: 'Add more exotic gourmet recipes.', feedback: 'Gourmet adds complexity — it fights the "no stress" part of the job.', good: false },
            { text: 'Create 20-minute, kid-approved recipes with nutrition info parents can trust.', feedback: 'Yes: functional (quick), emotional (no stress) and social (good parent) jobs all addressed.', good: true },
            { text: 'Cut price by 30%.', feedback: 'Price is not the main barrier the job reveals.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Running 5 JTBD interviews',
          items: ['Interview people who switched in the last 90 days', 'Ask about the moment they first thought "this isn’t working"', 'Ask what else they tried, including doing nothing', 'Capture anxieties and habits, not just reasons to buy', 'Write one job story per interview', 'Look for repeated circumstances across interviews']
        }
      ],
      terms: [
        { term: 'Jobs-to-be-Done', def: 'A theory that customers "hire" products to make progress in a specific circumstance.' },
        { term: 'Job story', def: 'A statement of situation, motivation and outcome: "When…, I want to…, so I can…".' },
        { term: 'Non-consumption', def: 'When people have the job but use no product at all — often the biggest competitor.' },
        { term: 'Switching interview', def: 'An interview with someone who recently changed products, to uncover what drove the switch.' },
        { term: 'Emotional job', def: 'How the customer wants to feel while getting the job done.' },
        { term: 'Social job', def: 'How the customer wants to be perceived by others.' }
      ],
      quiz: [
        { q: 'In JTBD, the morning milkshake mostly competed with:', options: ['Other milkshake brands', 'Bananas, bagels and boredom on the commute', 'Coffee machines at home', 'Ice-cream parlours'], answer: 1, explain: 'Anything hired for the same job in that circumstance.' },
        { q: 'Which is a correctly formed job story?', options: ['As a 35-year-old manager I want a dashboard', 'Users want more features', 'When I close the month-end books, I want all invoices matched automatically, so I can finish without overtime', 'Our product is the best accounting tool'], answer: 2, explain: 'It includes situation, motivation and outcome.' },
        { q: 'In the forces of progress, "Will I lose my data if I switch?" is:', options: ['Anxiety of the new', 'Push of the situation', 'Pull of the new solution', 'Habit of the present'], answer: 0, explain: 'It is a fear about the new solution.' },
        { q: 'Who is the best person to interview for JTBD insights?', options: ['Someone who has never heard of the category', 'Your investors', 'Your competitors’ employees', 'Someone who recently switched to or from a solution'], answer: 3, explain: 'Recent switchers remember the triggers and trade-offs.' }
      ],
      challenge: {
        title: 'Map the job for a coworking space',
        prompt: `A coworking space in Bengaluru has 60% occupancy. Members are mostly freelancers and remote employees of large firms. Write (a) two job stories for different members, (b) the forces of progress for someone choosing between working from home and the coworking space, and (c) two product changes that follow.`,
        hints: ['Think about functional, emotional and social jobs.', 'Working from home is the main competitor (non-consumption of offices).'],
        model: `<p><b>(a) Job stories</b></p><ul><li>When I have a client video call, I want a quiet, professional background and reliable internet, so I look credible and win repeat work. (Freelancer)</li><li>When I have worked alone at home for days, I want to be around other focused people, so I feel motivated and less isolated. (Remote employee)</li></ul><p><b>(b) Forces (home → coworking)</b>: <i>Push</i> — noise, distractions, loneliness, power cuts. <i>Pull</i> — productivity, community, meeting rooms. <i>Anxiety</i> — cost, commute, will my employer reimburse? <i>Habit</i> — zero commute, comfort.</p><p><b>(c) Changes:</b> 1) Bookable call booths and guaranteed backup internet + power (pull). 2) Flexible 10-day passes with invoices formatted for employer reimbursement (reduce anxiety and habit). Measure: occupancy and pass-to-monthly conversion.</p>`
      },
      takeaways: [
        'Customers hire products to make progress in a specific circumstance.',
        'Jobs have functional, emotional and social sides.',
        'Your real competition includes doing nothing.',
        'Interview recent switchers and map push, pull, anxiety and habit.'
      ]
    },

    /* ---------------- Lesson 3 ---------------- */
    {
      id: 'ideation-3',
      title: 'Design thinking and first-principles thinking',
      level: 'Intermediate',
      minutes: 14,
      hook: `Design thinking helps you understand people deeply; first principles help you rebuild a solution from the ground up — great founders use both.`,
      eli5: `Design thinking is like being a detective who watches how your grandmother struggles with the TV remote before making a new one. First-principles thinking is like asking "what is a remote actually made of and why does it cost so much?" and then building a cheaper one from scratch instead of copying the old design.`,
      blocks: [
        {
          type: 'framework', name: 'Design thinking (5 stages)', by: 'Stanford d.school and IDEO (popularised 2000s)', when: 'When the problem is human and fuzzy, and you need fresh solutions.',
          steps: [
            { label: 'Empathise', desc: 'Observe and interview real users in their context. Watch what they do, not just what they say.' },
            { label: 'Define', desc: 'Write a sharp point-of-view: "[User] needs [need] because [insight]."' },
            { label: 'Ideate', desc: 'Generate many ideas without judging. Use "How might we…?" questions.' },
            { label: 'Prototype', desc: 'Build cheap, rough versions — paper sketches, clickable mock-ups, a role-play.' },
            { label: 'Test', desc: 'Put prototypes in front of users, learn, and loop back. It is iterative, not linear.' }
          ]
        },
        {
          type: 'case', company: 'GE Healthcare (MRI for children)', year: 'late 2000s', title: 'The Adventure Series scanners',
          situation: `GE designer Doug Dietz saw a frightened child crying before an MRI scan he had helped design. Many young children needed sedation to stay still.`,
          decision: `Using empathy-driven design, his team redesigned the scan rooms as adventures (pirate ships, jungle themes) with stories told by staff, without changing the core machine.`,
          outcome: `Hospitals reported happier children and less need for sedation in many cases — a widely cited design-thinking story.`,
          lesson: `Sometimes the opportunity is not in the technology but in the human experience around it.`
        },
        {
          type: 'compare', title: 'Reasoning by analogy vs first principles',
          headers: ['', 'By analogy', 'First principles'],
          rows: [
            ['Method', 'Do what others do, with small tweaks', 'Break the problem down to basic truths, rebuild from there'],
            ['Speed', 'Fast, low effort', 'Slow, effortful'],
            ['Typical result', 'Incremental improvement', 'Occasional breakthrough'],
            ['Example question', '"How do other battery makers price?"', '"What do the raw materials in a battery cost on the commodity market?"']
          ]
        },
        {
          type: 'framework', name: 'First-principles in 4 steps', by: 'Rooted in Aristotle; popularised in business by Elon Musk’s accounts of SpaceX and Tesla', when: 'When an industry’s costs or assumptions seem stuck.',
          steps: [
            { label: '1. State the assumption', desc: '"Rockets are expensive" / "Eyeglasses must cost a lot."' },
            { label: '2. Break it down', desc: 'What is it made of? What does each part really cost? What is truly required?' },
            { label: '3. Challenge each part', desc: 'Which costs are physics and which are habit, regulation or middlemen?' },
            { label: '4. Rebuild', desc: 'Design a new solution from the essential parts.' }
          ]
        },
        {
          type: 'case', company: 'SpaceX', year: '2002–today', title: 'Rebuilding the cost of reaching orbit',
          situation: `Launch rockets were very expensive, built largely by a few contractors, and thrown away after one use.`,
          decision: `Musk has described asking what rocket raw materials actually cost, finding they were a small fraction of the price. SpaceX built many parts in-house and pursued reusable boosters.`,
          outcome: `Falcon 9 first stages now land and fly again routinely, and SpaceX became the leading commercial launch provider with significantly lower launch prices than many traditional options.`,
          lesson: `Separating physical limits from industry habits can reveal huge cost gaps.`
        },
        {
          type: 'scenario', prompt: 'Your team wants to build a better school-fee collection app. Which "empathise" step is most useful first?',
          options: [
            { text: 'Survey 1,000 parents online about desired features.', feedback: 'Surveys capture what people say, not what they do, and you do not yet know the right questions.', good: false },
            { text: 'Spend a fee week in two school offices watching how staff and parents actually handle payments, receipts and follow-ups.', feedback: 'Yes. Observation reveals hidden steps, workarounds and emotions.', good: true },
            { text: 'Copy the top competitor’s app.', feedback: 'That is reasoning by analogy — fast but unlikely to find new insight.', good: false }
          ]
        },
        {
          type: 'flip', title: 'Quick checks',
          cards: [
            { front: '"How might we…?"', back: 'An ideation prompt that frames a problem as an open opportunity.' },
            { front: 'Prototype fidelity early on', back: 'Low — paper, slides, role-play. Cheap to throw away.' },
            { front: 'First-principles question for eyeglasses', back: 'What do lenses and frames really cost to make, and where does the rest of the price go?' },
            { front: 'Is design thinking linear?', back: 'No — teams loop between stages based on what they learn.' }
          ]
        }
      ],
      terms: [
        { term: 'Design thinking', def: 'A human-centred process to understand users, define problems, ideate, prototype and test.' },
        { term: 'Empathy (in design)', def: 'Deeply understanding users’ experiences, feelings and context.' },
        { term: 'Prototype', def: 'An early, rough version of a solution used to learn quickly.' },
        { term: 'How might we (HMW)', def: 'A question format that turns problems into opportunities for ideas.' },
        { term: 'First principles', def: 'Basic truths that cannot be reduced further; reasoning up from them instead of copying.' },
        { term: 'Reasoning by analogy', def: 'Making decisions based on what others have done in similar situations.' }
      ],
      quiz: [
        { q: 'What is the first stage of the d.school design thinking process?', options: ['Prototype', 'Ideate', 'Test', 'Empathise'], answer: 3, explain: 'Start by understanding users.' },
        { q: 'GE’s child-friendly MRI rooms show that:', options: ['Opportunity can lie in the human experience around a technology', 'The machine had to be rebuilt', 'Children prefer no MRI', 'Price was the main issue'], answer: 0, explain: 'The core scanner was largely the same; the experience changed.' },
        { q: 'Asking "what do the raw materials of a rocket actually cost?" is an example of:', options: ['Reasoning by analogy', 'SCAMPER', 'First-principles thinking', 'Market sizing'], answer: 2, explain: 'Breaking down to basic truths.' },
        { q: 'Early prototypes should usually be:', options: ['Polished and expensive', 'Cheap and fast to change', 'Built only after launch', 'Kept secret from users'], answer: 1, explain: 'Low fidelity lets you learn fast.' },
        { q: 'Which is a well-written point-of-view statement?', options: ['We need an app', 'Busy school accountants need a way to track fee follow-ups because chasing parents by phone takes days every term', 'Users want AI', 'Payments are hard'], answer: 1, explain: 'It names the user, the need and the insight.' }
      ],
      challenge: {
        title: 'Rethink a costly service',
        prompt: `Wedding photography in your city costs ₹1.5–3 lakh for a package, and many middle-income couples skip a professional photographer. Use first-principles thinking to break down the cost, then use design thinking to propose and test one new offering.`,
        hints: ['List the real cost components: time, equipment, editing, travel, marketing, margin.', 'Which parts could be redesigned or automated?'],
        model: `<p><b>First-principles breakdown (illustrative):</b> photographer time on the day; equipment (cameras, lenses — reused across many events); editing time (often the largest hidden cost); album printing; marketing and sales effort; margin.</p><p><b>Challenge each:</b> equipment is shared across events; editing can be heavily AI-assisted in 2025–26 (culling, colour, retouching); albums are optional — many couples share digitally; marketing cost can fall via referral programmes.</p><p><b>Offer:</b> a "4-hour essentials" package — one photographer, AI-assisted editing, 300 edited photos delivered in 72 hours online, optional album upsell — priced to reach couples who currently skip professionals.</p><p><b>Design-thinking test:</b> interview 8 recently married couples who skipped a photographer; show a one-page offer and sample gallery; measure how many book a call. Iterate on hours, deliverables and price.</p>`
      },
      takeaways: [
        'Design thinking = empathise, define, ideate, prototype, test — in loops.',
        'Observe behaviour; do not rely only on what people say.',
        'First principles separates real constraints from industry habits.',
        'Combine both: deep human insight plus a rebuilt cost structure.'
      ]
    },

    /* ---------------- Lesson 4 ---------------- */
    {
      id: 'ideation-4',
      title: 'Creative toolkits: Blue Ocean (ERRC) and SCAMPER',
      level: 'Intermediate',
      minutes: 14,
      hook: `Instead of fighting rivals in a crowded "red ocean", you can redraw the boundaries of the market so competition becomes irrelevant.`,
      eli5: `If every ice-cream shop on your street competes by adding more flavours, you could instead sell ice-cream at children’s birthday parties with a fun "make your own sundae" kit. You have stopped fighting over the same customers and created a new space. That is a blue ocean.`,
      blocks: [
        {
          type: 'framework', name: 'Blue Ocean ERRC Grid', by: 'W. Chan Kim & Renée Mauborgne (INSEAD), "Blue Ocean Strategy", 2005', when: 'Redesigning an offering to escape head-to-head competition.',
          steps: [
            { label: 'Eliminate', desc: 'Which factors the industry takes for granted should be removed entirely?' },
            { label: 'Reduce', desc: 'Which factors should be cut well below the industry standard?' },
            { label: 'Raise', desc: 'Which factors should be raised well above the industry standard?' },
            { label: 'Create', desc: 'Which factors should be created that the industry has never offered?' },
            { label: 'Strategy canvas', desc: 'Plot your offering vs competitors on these factors. A good blue ocean has a clearly different shape.' }
          ]
        },
        {
          type: 'case', company: 'Cirque du Soleil', year: '1984–2000s', title: 'Neither circus nor theatre',
          situation: `The traditional circus industry was in decline: star performers were costly, animal acts drew criticism, and children had other entertainment.`,
          decision: `Cirque eliminated animal acts and star performers, reduced the thrill-and-danger focus, raised the artistic venue experience, and created a theme, storyline and artistic music and dance.`,
          outcome: `It attracted adults and corporate clients willing to pay theatre-like prices, and became one of the best-known live entertainment brands in the world — the flagship case in "Blue Ocean Strategy".`,
          lesson: `Value innovation means raising buyer value while cutting cost at the same time — by changing which factors you compete on.`
        },
        {
          type: 'matrix', name: 'ERRC Grid — budget hotel example (citizenM-style)', xLabel: 'Cut ← → Add', yLabel: 'Bold change ↑',
          cells: [
            { label: 'Eliminate', desc: 'Large lobbies with reception desks, room service, bellboys.' },
            { label: 'Create', desc: 'Self check-in kiosks, stylish shared living-room lounges, app-controlled rooms.' },
            { label: 'Reduce', desc: 'Room size, in-room furniture, restaurant options.' },
            { label: 'Raise', desc: 'Bed quality, shower, design, central locations, Wi-Fi.' }
          ]
        },
        {
          type: 'framework', name: 'SCAMPER', by: 'Bob Eberle (1971), building on Alex Osborn’s brainstorming checklist', when: 'Generating many variations of an existing product or process quickly.',
          steps: [
            { label: 'Substitute', desc: 'Swap a material, ingredient, channel or person. (Plant-based milk instead of dairy.)' },
            { label: 'Combine', desc: 'Merge two products or functions. (Phone + camera + music player = smartphone.)' },
            { label: 'Adapt', desc: 'Borrow an idea from another context. (Toyota adapted supermarket restocking ideas for just-in-time production.)' },
            { label: 'Modify / Magnify', desc: 'Change size, shape, frequency. (Single-serve sachets of shampoo for low-income buyers.)' },
            { label: 'Put to another use', desc: 'New users or uses. (Bubble wrap was first tried as wallpaper.)' },
            { label: 'Eliminate', desc: 'Remove a part or step. (Dollar Shave Club removed the retail shelf and fancy packaging.)' },
            { label: 'Reverse / Rearrange', desc: 'Change the order. (IKEA: customer assembles; pay before you eat at fast-food counters.)' }
          ]
        },
        {
          type: 'case', company: 'Dollar Shave Club', year: '2011–2016', title: 'Eliminate the store, raise the convenience',
          situation: `Razor blades were expensive, locked behind store counters, and dominated by big brands with costly advertising and multi-blade "innovation".`,
          decision: `Dollar Shave Club sold simple razors by low-cost monthly subscription delivered to the door, launched with a viral, low-budget YouTube video in 2012.`,
          outcome: `It grew rapidly and was acquired by Unilever in 2016 for a reported $1 billion, pushing incumbents to launch their own direct and subscription options.`,
          lesson: `Eliminating a "given" (retail shelf) and creating convenience (auto-replenishment) can redraw a mature market.`
        },
        {
          type: 'scenario', prompt: 'You run a coaching institute for entrance exams; every rival competes on more classroom hours and star teachers. Which ERRC move is most "blue ocean"?',
          options: [
            { text: 'Add even more hours and hire a bigger star teacher.', feedback: 'That is fighting harder in the red ocean — costs rise for everyone.', good: false },
            { text: 'Reduce live hours, eliminate long commutes with hybrid classes, raise personalised doubt-solving, and create AI-driven weak-topic drills with weekly parent reports.', feedback: 'Yes — a different value curve that lowers cost and raises value where students feel it.', good: true },
            { text: 'Cut prices 30% with the same model.', feedback: 'A price cut alone is not value innovation; rivals can match it.', good: false }
          ]
        },
        {
          type: 'flip', title: 'Name the SCAMPER move',
          cards: [
            { front: 'Shampoo sold in ₹1–2 sachets', back: 'Modify (smaller size) — opened mass rural markets in India.' },
            { front: 'Phone + camera', back: 'Combine.' },
            { front: 'Netflix moving from mailed DVDs to streaming', back: 'Substitute (the delivery channel).' },
            { front: 'IKEA flat-pack self-assembly', back: 'Reverse/Rearrange (who does the assembly).' }
          ]
        }
      ],
      terms: [
        { term: 'Red ocean', def: 'Existing market space where firms compete head-to-head on the same factors.' },
        { term: 'Blue ocean', def: 'New market space created by changing the factors of competition, making rivals less relevant.' },
        { term: 'Value innovation', def: 'Raising buyer value and lowering cost at the same time.' },
        { term: 'ERRC grid', def: 'Eliminate–Reduce–Raise–Create: a tool for redesigning an offering’s value curve.' },
        { term: 'Strategy canvas', def: 'A chart comparing how much different offerings deliver on each competitive factor.' },
        { term: 'SCAMPER', def: 'Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse — an idea-generation checklist.' }
      ],
      quiz: [
        { q: 'Cirque du Soleil eliminated:', options: ['Music and dance', 'Animal acts and star performers', 'The tent', 'Ticket sales'], answer: 1, explain: 'Costly, declining-value factors were removed.' },
        { q: 'Value innovation means:', options: ['Raising buyer value while lowering cost', 'Raising price', 'Copying the market leader', 'Adding every feature'], answer: 0, explain: 'Both at once — not a trade-off.' },
        { q: 'Dollar Shave Club’s key move was best described as:', options: ['Adding more blades', 'Opening flagship stores', 'Lowering quality', 'Eliminating retail and creating subscription delivery'], answer: 3, explain: 'Removing the shelf and adding convenience.' },
        { q: 'Which SCAMPER letter fits "use hotel booking software ideas for hospital bed management"?', options: ['Combine', 'Eliminate', 'Adapt', 'Reverse'], answer: 2, explain: 'Borrowing an idea from another context.' }
      ],
      challenge: {
        title: 'Build an ERRC grid for gyms',
        prompt: `Gyms in your city compete on more machines, bigger spaces and long-term memberships with high upfront fees, yet most members stop going within months. Build an ERRC grid for a new fitness concept for busy professionals aged 30–45, and say what new customers it could attract.`,
        hints: ['List the factors gyms compete on first.', 'Think about who currently does not go to gyms at all (non-customers).'],
        model: `<p><b>Factors today:</b> number of machines, space, long contracts, upfront fees, personal trainers (expensive add-on), showers/amenities, location.</p><ul><li><b>Eliminate:</b> long lock-in contracts and big upfront fees; rows of rarely used machines.</li><li><b>Reduce:</b> floor space (smaller studios near offices), amenities.</li><li><b>Raise:</b> coaching per session (small groups of 6), habit support (booking reminders, progress tracking), convenience (30-minute slots before and after work).</li><li><b>Create:</b> a guaranteed results plan with check-ins, company wellness partnerships paying part of the fee, and an app with home routines for travel days.</li></ul><p><b>New customers:</b> professionals who avoid gyms because they feel intimidated or have tried and quit — the "non-customers" who represent a much larger pool. <b>Test:</b> one studio near a business park, monthly passes, measure 90-day retention vs the gym industry pattern.</p>`
      },
      takeaways: [
        'Escape crowded markets by changing what you compete on.',
        'ERRC: eliminate, reduce, raise, create — aim for a distinct value curve.',
        'SCAMPER is a fast checklist to generate many variations.',
        'Look at non-customers — they are often the biggest blue ocean.'
      ]
    },

    /* ---------------- Lesson 5 ---------------- */
    {
      id: 'ideation-5',
      title: 'Evaluating opportunities and writing a sharp problem statement',
      level: 'Advanced',
      minutes: 15,
      hook: `Ideas are cheap; the scarce skill is choosing which one deserves the next two years of your life.`,
      eli5: `Imagine you have five lemonade stand locations to choose from. You would check: how many thirsty people walk by, how many other stands are there, how far you have to carry lemons, and whether you actually like that spot. Scoring ideas is the same — check them against a few clear questions before you pick.`,
      blocks: [
        {
          type: 'framework', name: 'Opportunity scorecard', by: 'Synthesis of VC and accelerator practice (e.g. Y Combinator advice, Timmons model)', when: 'Comparing several ideas before committing.',
          steps: [
            { label: 'Pain intensity', desc: 'Is it a "hair on fire" problem? Do people pay or build workarounds today?' },
            { label: 'Market size', desc: 'Enough buyers, with budget, now or soon?' },
            { label: 'Why now', desc: 'What changed that makes this possible and timely?' },
            { label: 'Ability to win', desc: 'Your insight, distribution access, technology or cost edge.' },
            { label: 'Business model', desc: 'Can it make money with healthy unit economics?' },
            { label: 'Founder fit', desc: 'Do you care deeply and have relevant skills/network?' }
          ]
        },
        {
          type: 'interactive', widget: 'idea-score', title: 'Score your idea',
          note: 'Score two of your own ideas honestly. If the gap between them is small, run more customer interviews before deciding.'
        },
        {
          type: 'formula', name: 'Bottom-up market sizing', expr: 'SAM-style estimate = Number of target customers × Annual spend per customer',
          explain: 'TAM is the total market; SAM is the part you can serve; SOM is what you can realistically capture in a few years. Bottom-up estimates are usually more credible than big top-down numbers.',
          example: 'Software for dental clinics in India: suppose 20,000 clinics you could reach × ₹30,000/year subscription = ₹60 crore SAM. If you win 5% in 3 years: ₹3 crore SOM. (Use your own verified clinic count.)'
        },
        {
          type: 'interactive', widget: 'tam-sam-som', title: 'Size the market',
          note: 'Enter a top-down TAM, then narrow to SAM and SOM. Compare with your bottom-up number — if they differ by 10x, find out why.'
        },
        {
          type: 'compare', title: 'Weak vs strong problem statements',
          headers: ['', 'Weak', 'Strong'],
          rows: [
            ['Who', '"Small businesses"', '"Owners of 2–10 person restaurants in tier-2 Indian cities"'],
            ['Problem', '"Accounting is hard"', '"Spend 6–8 hours a week reconciling delivery-app payouts with bank statements"'],
            ['Evidence', 'None', '"12 of 15 interviewed owners do this manually in Excel; 4 pay an accountant extra"'],
            ['Impact', 'Vague', '"Errors cause missed refunds and tax notices"'],
            ['Solution in statement?', 'Yes ("they need our app")', 'No — the problem stands on its own']
          ]
        },
        {
          type: 'formula', name: 'Problem statement template', expr: '[Specific customer] struggles to [job/task] because [root cause], which leads to [cost/consequence]. Today they [current workaround].',
          explain: 'Keep the solution out. Name a specific segment, a measurable pain and current behaviour.',
          example: 'Independent pharmacies in Pune struggle to avoid stock expiry because they track batches on paper, which leads to write-offs and lost sales. Today they rely on monthly manual checks by the owner.'
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Compare your shortlist',
          note: 'Weight pain and founder fit higher than market size at the very early stage, then see whether your ranking changes.'
        },
        {
          type: 'scenario', prompt: 'Idea A: huge market, mild pain, no special insight. Idea B: smaller niche, intense pain, you worked in the industry for 8 years and know 50 potential buyers. Which do you pursue first?',
          options: [
            { text: 'Idea A — big markets are everything.', feedback: 'Big markets with mild pain and no edge often mean slow adoption and fierce competition.', good: false },
            { text: 'Idea B — intense pain plus founder insight and access gives a faster path to paying customers; check that the niche can expand.', feedback: 'Yes. Many great companies start in a niche they can dominate, then expand.', good: true },
            { text: 'Neither — wait for a perfect idea.', feedback: 'There is no perfect idea; evidence comes from testing.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'TAM / SAM / SOM', def: 'Total addressable, serviceable available, and serviceable obtainable market — from total market to what you can realistically win.' },
        { term: 'Bottom-up sizing', def: 'Estimating market size from customer counts and spend per customer.' },
        { term: 'Top-down sizing', def: 'Starting from a big industry figure and narrowing it with percentages.' },
        { term: 'Problem statement', def: 'A clear description of who has what problem, why, and its consequences — without the solution.' },
        { term: 'Hair-on-fire problem', def: 'A problem so urgent people actively seek and pay for a solution now.' },
        { term: 'Beachhead market', def: 'A small, specific first segment you can dominate before expanding.' },
        { term: 'Hypothesis', def: 'A testable belief, e.g. "70% of owners will pay ₹999/month to save 5 hours a week".' }
      ],
      quiz: [
        { q: '15,000 target gyms × ₹24,000 per year = ?', options: ['₹3.6 crore', '₹36 crore', '₹360 crore', '₹24 crore'], answer: 1, explain: '15,000 × 24,000 = 36,00,00,000 = ₹36 crore.' },
        { q: 'A strong problem statement should NOT include:', options: ['A specific customer segment', 'The consequence of the problem', 'Your proposed solution', 'Current workarounds'], answer: 2, explain: 'Keep the solution out so you stay open to the best fix.' },
        { q: 'At the very earliest stage, which factor deserves the highest weight?', options: ['Pain intensity and evidence of demand', 'Office location', 'Logo design', 'Number of features'], answer: 0, explain: 'Without real pain, nothing else matters.' },
        { q: 'SOM is:', options: ['The total market worldwide', 'The government’s estimate', 'All customers who could ever use it', 'The share you can realistically capture in the near term'], answer: 3, explain: 'Serviceable obtainable market.' },
        { q: 'A beachhead market is:', options: ['The biggest possible segment', 'A small, specific segment you can dominate first', 'A coastal city', 'A competitor’s market'], answer: 1, explain: 'Win a focused segment, then expand.' }
      ],
      challenge: {
        title: 'Pick between two ideas',
        prompt: `You have two ideas. (1) An AI tool that writes Instagram captions for anyone (pain: mild; market: huge; many competitors). (2) Compliance software that helps Indian small manufacturers file pollution-control and labour returns (pain: high — fines and inspections; market: ~ tens of thousands of units in your state; you worked 5 years at a compliance consultancy). Score both on the six-factor scorecard (1–5), size idea 2 bottom-up with your own assumption, and write a problem statement for the winner.`,
        hints: ['Be honest about "ability to win" in crowded markets.', 'State assumptions clearly when sizing.'],
        model: `<p><b>Scores (1–5):</b></p><ul><li>Caption tool: pain 2, market 5, why now 4, ability to win 1, model 3, founder fit 2 → <b>17</b></li><li>Compliance software: pain 5, market 3, why now 4 (digital filing portals spreading), ability to win 4, model 4, founder fit 5 → <b>25</b></li></ul><p><b>Bottom-up sizing (assumptions):</b> 20,000 reachable small manufacturers × ₹36,000/year = <b>₹72 crore SAM</b> in one state; SOM at 3% in 3 years ≈ ₹2.2 crore ARR — a credible beachhead with expansion to other states and compliance areas.</p><p><b>Problem statement:</b> Small manufacturers (20–200 workers) in Gujarat struggle to file pollution-control and labour returns on time because rules change often and they rely on part-time consultants and paper records, which leads to penalties and stressful inspections. Today they pay consultants per filing and track deadlines in diaries or Excel.</p><p><b>Next step:</b> 15 interviews with factory owners to validate pain and willingness to pay.</p>`
      },
      takeaways: [
        'Score ideas on pain, market, why now, ability to win, model and founder fit.',
        'Bottom-up sizing is more credible than giant top-down numbers.',
        'A strong problem statement names the customer, root cause, consequence and workaround — not the solution.',
        'Start with a beachhead niche you can win.'
      ]
    },

    /* ---------------- Lesson 6 ---------------- */
    {
      id: 'ideation-6',
      title: 'Founder–market fit and AI-native opportunities (2025–26)',
      level: 'Advanced',
      minutes: 16,
      hook: `In the AI era anyone can build a demo in a weekend — so the edge shifts to who understands the customer, owns the workflow and reaches buyers first.`,
      eli5: `If a school needs a new football coach, they pick someone who played football, knows the kids and loves the game — not just someone who read a book about it. Founder–market fit is the same: the best person to solve a problem is often someone who has lived it. And AI is like a super-helpful assistant that lets that person build much more with a tiny team.`,
      blocks: [
        {
          type: 'framework', name: 'Founder–market fit', by: 'Popularised by investors such as Chris Dixon (a16z) and Y Combinator partners', when: 'Before committing years to an idea.',
          steps: [
            { label: 'Lived experience', desc: 'Have you personally felt this problem or served these customers?' },
            { label: 'Insight', desc: 'Do you know something true about this market that most people do not?' },
            { label: 'Access', desc: 'Can you reach the first 20 customers through your own network?' },
            { label: 'Skills', desc: 'Can your team build and sell the first version?' },
            { label: 'Staying power', desc: 'Will you still care about this problem after years of setbacks?' }
          ]
        },
        {
          type: 'case', company: 'Zerodha', year: '2010–today', title: 'A trader building for traders',
          situation: `Nithin Kamath had been an active trader and sub-broker for years and felt that brokerage fees in India were high and opaque.`,
          decision: `He and his brother Nikhil founded Zerodha in 2010 with a discount, flat-fee model and later zero brokerage on equity delivery, investing heavily in their own trading technology and investor education.`,
          outcome: `Zerodha grew into one of India’s largest stockbrokers by active clients, famously bootstrapped without venture capital.`,
          lesson: `Founder–market fit — years inside the industry — gave insight into what customers hated and how to build a cheaper, simpler model.`
        },
        {
          type: 'compare', title: 'AI-native opportunity patterns (2025–26)',
          headers: ['Pattern', 'What it means', 'Examples of the pattern'],
          rows: [
            ['Vertical AI agents', 'AI that performs a specific job end-to-end for one industry', 'Legal research and drafting, medical scribes, insurance claims handling'],
            ['Service-as-software', 'Sell an outcome previously delivered by people (priced per task or outcome, not per seat)', 'AI bookkeeping, AI-powered customer support resolution'],
            ['Workflow ownership', 'Own the system where work happens, with AI built in', 'AI-first CRMs, code editors with AI agents'],
            ['Proprietary data loops', 'Each customer interaction improves the model for all', 'Domain-specific copilots trained on usage feedback'],
            ['AI infrastructure & tooling', 'Picks and shovels for AI builders', 'Evaluation, observability, security and guardrail tools']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'The "thin wrapper" trap',
          html: `<p>A product that is only a nice interface on top of a general AI model is easy to copy — and the model providers themselves keep adding features. Durable AI businesses usually add at least one of: <b>proprietary data, deep workflow integration, distribution, regulatory know-how, or trust</b> in a specific industry.</p>`
        },
        {
          type: 'framework', name: 'AI opportunity filter', by: 'Synthesis of 2024–26 investor and operator practice', when: 'Judging whether an AI idea can become a lasting business.',
          steps: [
            { label: 'Expensive human task?', desc: 'Is there a task businesses already pay people a lot to do, repetitively?' },
            { label: 'Good-enough accuracy?', desc: 'Can AI do it well enough today with human review where needed?' },
            { label: 'Clear outcome to price?', desc: 'Can you charge per resolved ticket, per claim, per document?' },
            { label: 'Moat beyond the model?', desc: 'Data, integrations, compliance, brand, distribution.' },
            { label: 'Gets better as models improve?', desc: 'Ideally, model progress makes your product stronger, not obsolete.' }
          ]
        },
        {
          type: 'timeline', title: 'How the AI opportunity landscape shifted',
          items: [
            { label: 'Nov 2022', desc: 'ChatGPT launch brings generative AI to the mass market.' },
            { label: '2023', desc: 'Wave of "wrapper" apps and copilots; enterprises run pilots.' },
            { label: '2024', desc: 'Costs per token fall sharply; focus moves to vertical use cases and reliability.' },
            { label: '2025', desc: 'Agentic AI: systems that take multi-step actions; AI coding tools grow very fast.' },
            { label: '2025–26', desc: 'Outcome-based pricing, small teams with large revenue per employee, and trust/governance as differentiators.' }
          ]
        },
        {
          type: 'scenario', prompt: 'You have a background in hospital administration. Which AI-native idea fits you best?',
          options: [
            { text: 'A general AI writing assistant for everyone.', feedback: 'Crowded, low founder–market fit, easy to copy.', good: false },
            { text: 'An AI agent that prepares and follows up on insurance pre-authorisation and claims for mid-sized hospitals, priced per approved claim.', feedback: 'Strong fit: you know the workflow and buyers, the task is costly and repetitive, and outcome pricing is clear.', good: true },
            { text: 'Building a new foundation model from scratch.', feedback: 'Needs huge capital and research talent; no edge from your background.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Founder–market fit self-check',
          items: ['I can name 20 potential customers personally', 'I have experienced this problem or worked closely with those who have', 'I can explain a non-obvious insight about this market', 'My team can build v1 in weeks using AI tools', 'I know what my moat will be beyond the model', 'I would still work on this after two hard years']
        }
      ],
      terms: [
        { term: 'Founder–market fit', def: 'How well a founder’s experience, insight, access and passion match the market they are attacking.' },
        { term: 'AI agent', def: 'An AI system that can plan and carry out multi-step tasks using tools, not just answer questions.' },
        { term: 'Vertical AI', def: 'AI products built for one specific industry or job rather than general use.' },
        { term: 'Service-as-software', def: 'Software that delivers a finished outcome previously provided by human services, often priced per result.' },
        { term: 'Thin wrapper', def: 'A product that adds little beyond a user interface on top of someone else’s AI model.' },
        { term: 'Moat', def: 'A durable advantage that protects a business from competitors.' },
        { term: 'Outcome-based pricing', def: 'Charging per result delivered (e.g. per resolved ticket) rather than per user seat.' }
      ],
      quiz: [
        { q: 'Which is the best evidence of founder–market fit?', options: ['Reading about the industry for a week', 'A large social media following in an unrelated area', 'Years working in the industry and personal access to early customers', 'A strong logo'], answer: 2, explain: 'Lived experience and access matter most.' },
        { q: 'A "thin wrapper" AI product is risky mainly because:', options: ['It is too expensive to build', 'It is easy to copy and model providers can add the same features', 'Customers dislike AI', 'It requires custom chips'], answer: 1, explain: 'Little proprietary value beyond the model.' },
        { q: 'Charging an AI support tool per resolved ticket is an example of:', options: ['Outcome-based pricing', 'Per-seat pricing', 'Freemium', 'Cost-plus pricing'], answer: 0, explain: 'Price is tied to the result delivered.' },
        { q: 'Zerodha’s early edge mainly came from:', options: ['Large venture capital rounds', 'Government contracts', 'A celebrity endorsement', 'The founder’s years of trading experience and a low-cost model'], answer: 3, explain: 'Founder–market fit plus a cheaper, simpler model; it bootstrapped.' }
      ],
      challenge: {
        title: 'Design your AI-native venture',
        prompt: `Using your own background (or a role you know well), propose one AI-native business. Include: (1) the expensive human task it automates, (2) the target customer and problem statement, (3) pricing model, (4) moat beyond the model, (5) your founder–market fit score (1–5 on each of the five factors) and the biggest gap.`,
        hints: ['Start from tasks businesses already pay for.', 'Be honest about gaps — then plan to fill them with a co-founder or advisor.'],
        model: `<p><b>Example — background: 6 years as a chartered accountant at a mid-size firm.</b></p><ol><li><b>Task:</b> monthly GST reconciliation and vendor follow-up for small businesses — repetitive, error-prone, done by junior accountants.</li><li><b>Customer & problem:</b> Indian SMEs with ₹5–50 crore turnover struggle to match purchase invoices with supplier GST filings because data arrives in many formats, which leads to lost input tax credit and notices. Today they rely on junior staff and spreadsheets.</li><li><b>Pricing:</b> per-entity monthly fee plus an outcome component tied to input tax credit recovered (with a cap), sold via CA firms as channel partners.</li><li><b>Moat:</b> integrations with accounting tools and GST data, a growing dataset of vendor mismatch patterns, trust from CA partners, compliance know-how.</li><li><b>Founder–market fit:</b> lived experience 5, insight 4, access 5 (CA network), skills 2 (no engineering), staying power 4. <b>Gap:</b> technical co-founder — recruit an engineer who has built data pipelines, and build v1 using AI coding tools to move fast.</li></ol><p><b>First test:</b> run the process semi-manually for 5 SMEs for 2 months, measure hours saved and credit recovered, then automate.</p>`
      },
      takeaways: [
        'Founder–market fit — experience, insight, access, skills, staying power — de-risks a venture.',
        'AI-native opportunities favour vertical agents, outcome pricing and owning the workflow.',
        'Avoid thin wrappers; build moats in data, integration, distribution and trust.',
        'Start semi-manual, prove the outcome, then automate.'
      ]
    }
  ]
});
