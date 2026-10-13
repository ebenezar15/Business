/* MBA Studio — Track 10: Operations & Supply Chain */
MBA.addTrack({
  id: 'operations',
  stage: 3,
  order: 10,
  title: 'Operations & Supply Chain',
  icon: '⚙️',
  color: '#64748b',
  tagline: 'Deliver the promise, every time, at the right cost',
  summary: `Learn how work actually gets done: how to find the bottleneck, remove waste, build quality in, hold the right inventory, and design supply chains that are both efficient and resilient. You will finish able to run an operating cadence with clear KPIs and to judge where automation and AI agents genuinely help.`,
  outcomes: [
    'Map a process and find its bottleneck, capacity and throughput',
    'Apply Lean (Toyota Production System) and Six Sigma (DMAIC) tools',
    'Set order quantities, safety stock and reorder points',
    'Design and de-risk a supply chain: sourcing, nearshoring, resilience and ESG',
    'Manage service queues, KPIs, OKRs and a weekly operating rhythm',
    'Decide where automation and AI agents should (and should not) be used'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'operations-1',
      title: 'What operations is: process, capacity and bottlenecks',
      level: 'Beginner',
      minutes: 13,
      hook: `Every business is a set of processes, and the slowest step decides how much the whole business can sell.`,
      eli5: `Imagine making sandwiches with friends: one slices bread, one adds filling, one wraps. If the filling person is slow, it does not matter how fast the others are — sandwiches only come out as fast as the filling gets done. That slow step is the <b>bottleneck</b>. Operations is the job of finding it and fixing it, again and again.`,
      blocks: [
        {
          type: 'text', title: 'Operations in one sentence',
          html: `<p>Operations turns <b>inputs</b> (materials, people, information) into <b>outputs</b> (products and services) that customers value. The job is to deliver on four promises: <b>cost, quality, speed and flexibility</b>. You can rarely be best at all four, so operations strategy is about choosing which ones matter most for your customers.</p>`
        },
        {
          type: 'framework', name: 'Process analysis', by: 'Core operations management', when: 'Any time a process is too slow, too expensive or unpredictable',
          steps: [
            { label: '1. Map the flow', desc: 'Draw every step from order to delivery, including waiting and hand-offs.' },
            { label: '2. Measure each step', desc: 'Record the time per unit (cycle time) and how many people or machines work on it.' },
            { label: '3. Compute capacity', desc: 'Capacity of a step = resources ÷ time per unit. Two cooks each taking 4 minutes per burger = 30 burgers per hour.' },
            { label: '4. Find the bottleneck', desc: 'The step with the lowest capacity limits the whole process. Process capacity = bottleneck capacity.' },
            { label: '5. Elevate and repeat', desc: 'Add capacity at the bottleneck, then find the next bottleneck. Improving non-bottleneck steps adds nothing to output.' }
          ]
        },
        {
          type: 'formula', name: "Little's Law",
          expr: 'Inventory (WIP) = Throughput × Flow time',
          explain: `Proved by John Little in 1961. In any stable process, the average number of items inside equals the rate they flow through multiplied by how long each stays. Know two, and you get the third.`,
          example: `A coffee shop serves 60 customers an hour and each spends 15 minutes (0.25 hours) inside → 60 × 0.25 = <b>15 customers</b> in the shop on average. To cut flow time to 10 minutes at the same throughput, you need only 10 people inside — fewer queues.`
        },
        {
          type: 'formula', name: 'Takt time and utilisation',
          expr: 'Takt time = Available time ÷ Customer demand;  Utilisation = Actual output ÷ Capacity',
          explain: 'Takt time is the pace at which you must produce to meet demand. If any step is slower than takt, you will fall behind.',
          example: `A shift has 480 minutes and customers want 240 units → takt = <b>2 minutes</b> per unit. A step that takes 2.5 minutes needs a second worker.`
        },
        {
          type: 'case', company: 'Ford Motor Company', year: '1913', title: 'The moving assembly line',
          situation: `Building a Model T chassis took a team of workers over 12 hours, with workers moving around a stationary car.`,
          decision: `Ford broke the work into small standardised tasks and brought the car to the worker on a moving line, setting a steady pace for every step.`,
          outcome: `Chassis assembly time fell to roughly an hour and a half. Costs fell, Ford cut the Model T\'s price repeatedly and car ownership spread across America.`,
          lesson: `Flow, standard work and a paced line can transform cost. But Ford\'s rigid "any colour so long as it is black" model later lost ground to GM\'s variety — efficiency must fit the market.`
        },
        {
          type: 'flip', title: 'Process vocabulary',
          cards: [
            { front: 'Throughput', back: 'The rate at which a process produces finished output (units per hour).' },
            { front: 'Flow time (lead time)', back: 'Total time one unit spends in the process, including waiting.' },
            { front: 'WIP', back: 'Work in process: units started but not yet finished.' },
            { front: 'Bottleneck', back: 'The step with the lowest capacity; it sets the capacity of the whole process.' },
            { front: 'Theory of Constraints', back: 'Eliyahu Goldratt\'s method (The Goal, 1984): identify, exploit, subordinate to, elevate the constraint, then repeat.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your bakery\'s output is stuck at 200 loaves a day. Ovens can bake 200 a day, mixing can handle 350, and packing 300. Your manager wants to buy a faster packing machine. What do you say?`,
          options: [
            { text: 'Buy it — faster packing means more loaves.', feedback: 'Packing is not the bottleneck. Output stays at 200 because the ovens limit it.', good: false },
            { text: 'Invest in oven capacity (or run the ovens longer) first.', feedback: 'Correct. Only adding capacity at the bottleneck increases output. After that, packing at 300 becomes the next constraint to watch.', good: true },
            { text: 'Hire another mixer.', feedback: 'Mixing already has spare capacity; this only adds cost and WIP.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Capacity', def: 'The maximum output a resource or process can produce in a given time.' },
        { term: 'Bottleneck', def: 'The step with the lowest capacity, which limits the whole process.' },
        { term: 'Throughput', def: 'The actual rate of output of a process.' },
        { term: "Little's Law", def: 'WIP = Throughput × Flow time; holds for any stable process.' },
        { term: 'Takt time', def: 'Available time divided by customer demand; the required production pace.' },
        { term: 'Utilisation', def: 'Actual output divided by capacity.' }
      ],
      quiz: [
        {
          q: 'A process has three steps with capacities of 40, 25 and 35 units per hour. What is the process capacity?',
          options: ['100 per hour', '33 per hour', '25 per hour', '40 per hour'],
          answer: 2,
          explain: 'The bottleneck (25 per hour) sets the capacity of the whole process.'
        },
        {
          q: 'A loan office approves 20 applications a week and on average has 60 applications in progress. How long does an application take?',
          options: ['3 weeks', '0.33 weeks', '1,200 weeks', '40 weeks'],
          answer: 0,
          explain: "Little's Law: Flow time = WIP ÷ Throughput = 60 ÷ 20 = 3 weeks."
        },
        {
          q: 'A factory has 420 minutes of production time per day and demand of 210 units. What is the takt time?',
          options: ['0.5 minutes', '210 minutes', '4 minutes', '2 minutes'],
          answer: 3,
          explain: '420 ÷ 210 = 2 minutes per unit.'
        },
        {
          q: 'Three nurses each take 12 minutes per patient at triage. What is triage capacity per hour?',
          options: ['5 patients', '15 patients', '36 patients', '12 patients'],
          answer: 1,
          explain: 'Each nurse: 60 ÷ 12 = 5 per hour. Three nurses: 15 per hour.'
        },
        {
          q: 'Why does improving a non-bottleneck step usually not increase output?',
          options: ['Because it increases quality', 'Because output is still limited by the slowest step', 'Because it reduces takt time', 'Because utilisation falls to zero'],
          answer: 1,
          explain: 'A chain is only as strong as its weakest link; extra capacity elsewhere just builds WIP or idle time.'
        }
      ],
      challenge: {
        title: 'Fix the lunch rush',
        prompt: `A burger restaurant has three steps: order taking (1 cashier, 1 minute per order), grilling (2 cooks, each 4 minutes per burger, one at a time) and assembly (1 person, 1.5 minutes per burger). Lunch demand is 36 burgers per hour.<br><br>(a) Find each step\'s capacity and the bottleneck. (b) What happens to the queue during a 2-hour rush? (c) If customers spend 20 minutes in the restaurant on average at a throughput of 30 per hour, how many are inside? (d) Recommend a fix.`,
        hints: ['Capacity = resources × (60 ÷ minutes per unit).', 'Queue growth = demand − capacity per hour.', "Use Little's Law for (c)."],
        model: `<p><b>(a) Capacities</b></p><ul><li>Order taking: 60 ÷ 1 = 60/hour</li><li>Grilling: 2 × (60 ÷ 4) = <b>30/hour — bottleneck</b></li><li>Assembly: 60 ÷ 1.5 = 40/hour</li></ul><p><b>(b)</b> Demand 36 vs capacity 30 → the queue grows by 6 orders an hour, so about 12 customers are backed up after 2 hours, and waits keep lengthening.</p><p><b>(c)</b> Little\'s Law: 30 per hour × (20 ÷ 60) hour = <b>10 customers</b> inside on average.</p><p><b>(d) Fix</b>: add a third cook (or a two-burger grill) during the rush → grill capacity 45/hour. The new bottleneck is assembly at 40/hour, which still exceeds demand of 36. Cheaper alternatives: pre-grill patties for the most popular burger just before the rush, or move a cashier to help at the grill when the order queue is short.</p>`
      },
      takeaways: [
        'The bottleneck sets the output of the whole system.',
        'Little\'s Law links WIP, throughput and flow time.',
        'Takt time tells you the pace demand requires.',
        'Fix the constraint, then look for the next one.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'operations-2',
      title: 'Lean and the Toyota Production System',
      level: 'Intermediate',
      minutes: 15,
      hook: `Toyota showed the world that the fastest way to cut cost is not to squeeze people, but to remove waste and let workers stop the line.`,
      eli5: `Imagine tidying your room so everything you need for school is exactly where you reach for it — no hunting for socks, no walking back and forth. Lean is doing that for a whole factory or office: get rid of every bit of waiting, walking, searching and redoing, so only the useful work is left.`,
      blocks: [
        {
          type: 'framework', name: 'The Toyota Production System (TPS) house', by: 'Taiichi Ohno and Toyota, 1950s–1970s', when: 'Designing any process for flow and quality',
          steps: [
            { label: 'Goal (the roof)', desc: 'Highest quality, lowest cost, shortest lead time — by continually removing waste.' },
            { label: 'Pillar 1: Just-in-time', desc: 'Make only what is needed, when it is needed, in the amount needed. Use kanban signals to pull work rather than push it.' },
            { label: 'Pillar 2: Jidoka', desc: '"Automation with a human touch": stop at the first sign of a defect. Any worker can pull the andon cord to halt the line.' },
            { label: 'Foundation: Heijunka and standard work', desc: 'Level the production schedule and document the current best way to do each task.' },
            { label: 'Culture: Kaizen and respect for people', desc: 'Continuous small improvements by the people who do the work; managers go to the gemba (the real place) to see problems.' }
          ]
        },
        {
          type: 'compare', title: 'The 8 wastes (TIMWOODS)', headers: ['Waste', 'Factory example', 'Office example'],
          rows: [
            ['Transport', 'Moving parts between distant buildings', 'Emailing files between five systems'],
            ['Inventory', 'Piles of parts waiting', 'A backlog of unread tickets'],
            ['Motion', 'Workers walking to fetch tools', 'Clicking through ten screens to find data'],
            ['Waiting', 'Machine idle for a part', 'Waiting for approval signatures'],
            ['Overproduction', 'Making more than ordered', 'Reports nobody reads'],
            ['Over-processing', 'Polishing hidden surfaces', 'Three people checking the same invoice'],
            ['Defects', 'Scrap and rework', 'Data entry errors'],
            ['Skills (unused talent)', 'Workers\' ideas ignored', 'Experts doing admin']
          ]
        },
        {
          type: 'formula', name: 'Process cycle efficiency (PCE)',
          expr: 'PCE = Value-added time ÷ Total lead time',
          explain: 'Value-added time is time the customer would pay for. Most processes are shockingly low — under 10% is common — because work mostly waits.',
          example: `A custom part needs 45 minutes of real work but spends 5 days (7,200 minutes) in the factory → PCE = 45 ÷ 7,200 ≈ <b>0.6%</b>. The biggest gains come from cutting waiting, not working faster.`
        },
        {
          type: 'timeline', title: 'How Lean spread',
          items: [
            { label: '1920s', desc: 'Sakichi Toyoda\'s automatic loom stops itself when a thread breaks — the origin of jidoka.' },
            { label: '1950s–70s', desc: 'Taiichi Ohno develops TPS at Toyota, inspired partly by how US supermarkets restock shelves (pull).' },
            { label: '1984', desc: 'NUMMI, a GM–Toyota joint venture, reopens GM\'s Fremont plant using TPS.' },
            { label: '1990', desc: '"The Machine That Changed the World" (Womack, Jones, Roos) coins "lean production" for Western audiences.' },
            { label: '2000s–today', desc: 'Lean spreads to hospitals, software (Lean Startup, Kanban boards, DevOps) and services.' }
          ]
        },
        {
          type: 'case', company: 'NUMMI (GM and Toyota)', year: '1984–2010', title: 'Same workers, different system',
          situation: `GM\'s Fremont, California plant had been one of its worst, with poor quality, high absenteeism and bitter labour relations. It closed in 1982.`,
          decision: `Toyota and GM reopened it as NUMMI in 1984, rehiring many of the same unionised workers but running it on TPS: teams, standard work, andon cords and kaizen. Workers were sent to Japan for training.`,
          outcome: `Within a few years NUMMI\'s quality and productivity were among the best in GM\'s system, with largely the same workforce. GM struggled to replicate the results elsewhere because it copied tools rather than the management culture. The plant closed in 2010 after GM\'s bankruptcy; Tesla later bought the site.`,
          lesson: `Lean is a management system, not a toolkit. The andon cord only works if managers respond to it with help, not blame.`
        },
        {
          type: 'checklist', title: 'Starting Lean in your team this month',
          items: ['Walk the process (gemba) and map every step and wait', 'Measure lead time and value-added time', 'Pick the biggest waste and run one kaizen experiment', 'Visualise work on a kanban board with WIP limits', 'Standardise the improved method', 'Give everyone a way to "stop the line" when they see a problem']
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: Lean means layoffs',
          html: `<p>Toyota\'s approach links improvement to job security: if improvements eliminate a task, the person is redeployed, not fired. If kaizen leads to layoffs, people stop suggesting improvements. Lean done as headcount cutting usually stalls.</p>`
        }
      ],
      terms: [
        { term: 'Lean', def: 'A management approach focused on maximising customer value by eliminating waste and improving flow.' },
        { term: 'Just-in-time (JIT)', def: 'Producing only what is needed, when needed, in the quantity needed.' },
        { term: 'Jidoka', def: 'Building quality in by stopping work automatically or manually as soon as a problem appears.' },
        { term: 'Kanban', def: 'A visual signal (card or board) that authorises production or movement; it creates pull.' },
        { term: 'Kaizen', def: 'Continuous, incremental improvement involving everyone.' },
        { term: 'Andon', def: 'A cord, button or light that any worker can use to signal a problem and stop the line.' },
        { term: 'Gemba', def: 'The real place where value is created; "go to the gemba" means see it yourself.' }
      ],
      quiz: [
        {
          q: 'An insurance claim needs 2 hours of actual work but takes 10 working days of 8 hours from receipt to payment. What is the process cycle efficiency?',
          options: ['20%', '2.5%', '10%', '0.25%'],
          answer: 1,
          explain: 'Total lead time = 10 × 8 = 80 working hours. 2 ÷ 80 = 2.5%.'
        },
        {
          q: 'Which TPS pillar means "stop and fix problems immediately"?',
          options: ['Heijunka', 'Kanban', 'Jidoka', 'Kaizen'],
          answer: 2,
          explain: 'Jidoka builds quality in by stopping at the first defect.'
        },
        {
          q: 'A team keeps writing a weekly report that nobody reads. Which waste is this?',
          options: ['Overproduction', 'Transport', 'Defects', 'Motion'],
          answer: 0,
          explain: 'Producing more than the customer needs is overproduction — often called the worst waste because it hides others.'
        },
        {
          q: 'What was the key lesson from NUMMI?',
          options: ['Robots beat people', 'Union workers cannot use Lean', 'Japan has better workers', 'The management system, not the workforce, drove the results'],
          answer: 3,
          explain: 'Largely the same workforce produced dramatically better results under TPS.'
        },
        {
          q: 'A "pull" system means:',
          options: ['Producing to a forecast and pushing stock to stores', 'Production is triggered by actual downstream consumption', 'Pulling workers off the line', 'Customers collect from the factory'],
          answer: 1,
          explain: 'In pull, downstream use (signalled by kanban) authorises upstream production.'
        }
      ],
      challenge: {
        title: 'Lean the invoice approval process',
        prompt: `Supplier invoices at your company take 12 calendar days from receipt to payment approval. The steps: scanned and emailed to AP (1 day wait), keyed into the ERP by hand (10 min of work), matched to the purchase order (15 min), emailed to the budget owner for approval (average 7 days wait), sent to the finance manager for a second approval on everything (3 days wait, 5 min), scheduled for payment (10 min). Suppliers complain, and you miss early-payment discounts.<br><br>(a) Calculate PCE using calendar time. (b) Identify the wastes. (c) Propose a future-state process.`,
        hints: ['Add up the value-added minutes.', '12 days × 24 × 60 minutes.', 'Which approvals add value? Which can be automated or rule-based?'],
        model: `<p><b>(a)</b> Value-added time = 10 + 15 + 5 + 10 = 40 minutes. Lead time = 12 × 24 × 60 = 17,280 minutes. PCE = 40 ÷ 17,280 ≈ <b>0.23%</b>. Over 99% of the time the invoice is waiting.</p><p><b>(b) Wastes</b>: waiting (approvals), transport (emailing between people), over-processing (double approval on every invoice, manual keying), defects risk (manual data entry), inventory (a queue of invoices).</p><p><b>(c) Future state</b></p><ul><li>Suppliers submit e-invoices or a portal; OCR/AI extraction replaces keying.</li><li>Automatic three-way match (PO, goods receipt, invoice); matched invoices under a threshold (say $5,000) auto-approve.</li><li>Only exceptions go to the budget owner, with a 48-hour SLA and mobile approval.</li><li>Second approval only for invoices above a high threshold.</li><li>Target: most invoices approved within 1–2 days. Measure lead time weekly and capture early-payment discounts.</li></ul>`
      },
      takeaways: [
        'Lean = maximise value by removing waste and improving flow.',
        'TPS rests on just-in-time and jidoka, built on standard work and kaizen.',
        'Most lead time is waiting; attack the waits first.',
        'Copying tools without the culture fails — see NUMMI.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'operations-3',
      title: 'Six Sigma and quality management',
      level: 'Intermediate',
      minutes: 15,
      hook: `A 99% success rate sounds great — until you realise it means thousands of wrong parcels, bad parts or failed safety checks every day.`,
      eli5: `If you bake 100 cookies and 1 is burnt, you might shrug. But if an airline gets 1 in 100 maintenance checks wrong, that is a disaster. Six Sigma is a way of measuring mistakes very precisely, finding their real causes and fixing them so they almost never happen.`,
      blocks: [
        {
          type: 'framework', name: 'DMAIC', by: 'Six Sigma — Motorola, 1980s; popularised by GE in the 1990s', when: 'Improving an existing process with a measurable defect problem',
          steps: [
            { label: 'Define', desc: 'State the problem, the customer and what "defect" means. Write a project charter with scope and target.' },
            { label: 'Measure', desc: 'Collect baseline data: defect rate, cycle time, variation. Check the measurement system itself is reliable.' },
            { label: 'Analyse', desc: 'Find root causes with tools like fishbone diagrams, 5 Whys, Pareto charts and regression.' },
            { label: 'Improve', desc: 'Design and pilot solutions that remove root causes; confirm the effect with data.' },
            { label: 'Control', desc: 'Lock in gains with standard work, mistake-proofing (poka-yoke) and control charts that flag drift.' }
          ]
        },
        {
          type: 'formula', name: 'Defects per million opportunities (DPMO)',
          expr: 'DPMO = Defects ÷ (Units × Opportunities per unit) × 1,000,000',
          explain: 'Six Sigma quality is 3.4 DPMO (allowing for a conventional 1.5-sigma long-term shift). About 66,800 DPMO is roughly 3 sigma, 6,210 is about 4 sigma.',
          example: `200 defects found in 5,000 units, each with 4 opportunities for error → 200 ÷ 20,000 × 1,000,000 = <b>10,000 DPMO</b> — roughly 3.8 sigma.`
        },
        {
          type: 'compare', title: 'Cost of quality', headers: ['Category', 'What it is', 'Example'],
          rows: [
            ['Prevention', 'Stopping defects before they happen', 'Training, design reviews, mistake-proofing'],
            ['Appraisal', 'Finding defects through inspection', 'Testing, audits, quality checks'],
            ['Internal failure', 'Defects caught before the customer', 'Scrap, rework, downtime'],
            ['External failure', 'Defects that reach the customer', 'Returns, warranty, recalls, lawsuits, lost reputation']
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'The 1-10-100 rule of thumb',
          html: `<p>A widely used heuristic: a defect that costs $1 to prevent costs about $10 to fix inside the company and $100 or more once it reaches the customer. The exact ratio varies, but the direction is reliable — <b>invest in prevention</b>.</p>`
        },
        {
          type: 'case', company: 'Boeing 737 MAX', year: '2018–2024', title: 'When quality and safety culture slip',
          situation: `Under competitive pressure from Airbus, Boeing updated the 737 rather than designing a new plane. A flight-control system called MCAS relied on a single angle-of-attack sensor, and pilots were not fully informed about it.`,
          decision: `Design, certification and training choices prioritised speed and cost. Concerns about production pressure and quality had been raised internally.`,
          outcome: `Lion Air Flight 610 (October 2018) and Ethiopian Airlines Flight 302 (March 2019) crashed, killing 346 people. The MAX was grounded worldwide for around 20 months, costing Boeing billions. In January 2024 a door plug blew out of an Alaska Airlines 737 MAX 9 shortly after take-off; investigators found bolts had not been reinstalled. The FAA capped 737 MAX production while Boeing worked on its quality systems.`,
          lesson: `External failure costs are catastrophic. Quality is a culture: people must be able to raise concerns and stop the line without fear.`
        },
        {
          type: 'flip', title: 'Root-cause tools',
          cards: [
            { front: '5 Whys', back: 'Ask "why?" repeatedly (about five times) until you reach a root cause you can fix, not a symptom.' },
            { front: 'Fishbone (Ishikawa) diagram', back: 'Groups possible causes under headings such as Methods, Machines, Materials, Measurement, People, Environment.' },
            { front: 'Pareto chart', back: 'Ranks causes by frequency; often roughly 80% of defects come from about 20% of causes.' },
            { front: 'Control chart', back: 'Plots a metric over time with statistical limits to separate normal variation from a real change.' },
            { front: 'Poka-yoke', back: 'Mistake-proofing: designing so the error cannot happen (e.g. a plug that only fits one way).' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your e-commerce warehouse ships the wrong item in about 2% of orders. The operations director proposes adding a second person to double-check every box. What do you recommend?`,
          options: [
            { text: 'Approve — more inspection means fewer errors.', feedback: 'Inspection catches some errors but adds cost and does not remove the cause. Human checkers miss errors too.', good: false },
            { text: 'Run a DMAIC project: measure where errors occur, find root causes, and mistake-proof the pick with barcode scanning.', feedback: 'Correct. Fix the process so errors cannot happen, then use sampling and control charts to keep it there.', good: true },
            { text: 'Accept 2% as normal for the industry.', feedback: 'Every wrong shipment costs reshipping, returns and customer trust. It is worth solving.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Six Sigma', def: 'A data-driven method for reducing variation and defects, targeting 3.4 defects per million opportunities.' },
        { term: 'DMAIC', def: 'Define, Measure, Analyse, Improve, Control — the Six Sigma improvement cycle.' },
        { term: 'DPMO', def: 'Defects per million opportunities.' },
        { term: 'Root cause', def: 'The underlying reason a problem occurs; fixing it prevents recurrence.' },
        { term: 'Poka-yoke', def: 'Mistake-proofing a process so errors are impossible or immediately obvious.' },
        { term: 'Cost of quality', def: 'Total cost of prevention, appraisal, internal failure and external failure.' },
        { term: 'Lean Six Sigma', def: 'A combination of Lean\'s focus on flow and waste with Six Sigma\'s focus on variation.' }
      ],
      quiz: [
        {
          q: 'A bank processes 10,000 forms, each with 5 fields that could be wrong, and finds 150 errors. What is the DPMO?',
          options: ['15,000', '300', '1,500', '3,000'],
          answer: 3,
          explain: '150 ÷ (10,000 × 5) × 1,000,000 = 150 ÷ 50,000 × 1,000,000 = 3,000 DPMO.'
        },
        {
          q: 'Which DMAIC phase uses control charts to keep gains in place?',
          options: ['Define', 'Control', 'Analyse', 'Measure'],
          answer: 1,
          explain: 'The Control phase monitors the improved process to prevent backsliding.'
        },
        {
          q: 'A product recall falls into which cost-of-quality category?',
          options: ['External failure', 'Appraisal', 'Prevention', 'Internal failure'],
          answer: 0,
          explain: 'The defect reached customers — the most expensive category.'
        },
        {
          q: 'A USB-C connector that works either way up is an example of:',
          options: ['A control chart', 'Kaizen', 'Poka-yoke', 'Pareto analysis'],
          answer: 2,
          explain: 'The design removes the possibility of inserting it wrongly — mistake-proofing.'
        },
        {
          q: 'What does the Boeing 737 MAX story mainly illustrate?',
          options: ['Inspection is always enough', 'External failure costs and weak quality culture can be catastrophic', 'Six Sigma is only for factories', 'Speed to market never matters'],
          answer: 1,
          explain: 'Design and production quality failures led to fatal crashes, groundings, huge costs and regulatory limits.'
        }
      ],
      challenge: {
        title: 'Wrong-item shipments',
        prompt: `An online retailer ships 60,000 orders a month. 1,200 contain a wrong item. Each error costs about $25 (return shipping, re-shipping, staff time, credits). A barcode scan-to-verify system costs $8,000 a month and is expected to cut errors by 75%.<br><br>(a) What is the error rate and monthly cost? (b) Is the scanning system worth it? (c) Outline a DMAIC plan.`,
        hints: ['Error rate = 1,200 ÷ 60,000.', 'Savings = errors avoided × $25.', 'Remember the hidden cost of lost customers.'],
        model: `<p><b>(a)</b> Error rate = 1,200 ÷ 60,000 = <b>2%</b>. Monthly cost = 1,200 × $25 = <b>$30,000</b> (before lost customer lifetime value).</p><p><b>(b)</b> Errors avoided = 75% × 1,200 = 900 → saving 900 × $25 = $22,500. Net benefit = 22,500 − 8,000 = <b>$14,500 a month</b> (about $174,000 a year), plus fewer unhappy customers. Approve.</p><p><b>(c) DMAIC</b></p><ul><li><b>Define</b>: defect = any order with a wrong or missing item; target below 0.5%.</li><li><b>Measure</b>: log errors by SKU, picker, shift, zone for 4 weeks.</li><li><b>Analyse</b>: Pareto chart — e.g. look-alike SKUs stored side by side, or new temporary staff.</li><li><b>Improve</b>: scan-to-verify, separate look-alike items, clearer labels, pilot in one zone first.</li><li><b>Control</b>: weekly control chart of error rate; alert if it exceeds the upper limit.</li></ul>`
      },
      takeaways: [
        'Define the defect, measure it, then fix the root cause — DMAIC.',
        'Prevention is far cheaper than failures that reach customers.',
        'Mistake-proof the process instead of adding inspectors.',
        'Quality depends on a culture where people can raise problems safely.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'operations-4',
      title: 'Inventory management: EOQ, safety stock and JIT',
      level: 'Intermediate',
      minutes: 15,
      hook: `Inventory is cash sitting on a shelf — too much and you choke, too little and you lose the sale.`,
      eli5: `Think of your family\'s fridge. If you shop every day, you waste time travelling. If you buy a month\'s food at once, things go bad and the fridge is overflowing. Somewhere in between is the best amount to buy each trip. And you always keep a little extra milk in case someone drinks more than usual — that is safety stock.`,
      blocks: [
        {
          type: 'compare', title: 'Why hold inventory — and what it costs', headers: ['Reasons to hold it', 'Costs of holding it'],
          rows: [
            ['Meet demand immediately', 'Capital tied up (cost of money)'],
            ['Buffer against uncertain demand or supply', 'Storage, insurance, handling'],
            ['Order in economical batches', 'Obsolescence, spoilage, theft'],
            ['Smooth seasonal production', 'Hides process problems (Lean\'s "water level hides the rocks")']
          ]
        },
        {
          type: 'formula', name: 'Economic order quantity (EOQ)',
          expr: 'EOQ = √(2 × D × S ÷ H)',
          explain: 'D = annual demand (units), S = cost per order, H = holding cost per unit per year. EOQ balances ordering cost (fewer, bigger orders) against holding cost (smaller, frequent orders). At EOQ, the two are equal.',
          example: `D = 10,000, S = $50, H = $4 → EOQ = √(2 × 10,000 × 50 ÷ 4) = √250,000 = <b>500 units</b>. That is 20 orders a year. Ordering cost = 20 × 50 = $1,000; holding cost = (500 ÷ 2) × 4 = $1,000; total <b>$2,000</b>.`
        },
        {
          type: 'interactive', widget: 'eoq', title: 'Find the sweet spot',
          note: 'Double the ordering cost and notice EOQ rises only by about 41% (square root). Then double holding cost.'
        },
        {
          type: 'formula', name: 'Safety stock and reorder point',
          expr: 'Safety stock = z × σ(daily demand) × √(Lead time in days);  Reorder point = Average daily demand × Lead time + Safety stock',
          explain: 'z sets the service level: about 1.65 for 95% and 2.33 for 99% (no stock-out during a replenishment cycle). This version assumes lead time is fixed and demand varies.',
          example: `Average demand 100/day, standard deviation 20/day, lead time 9 days, 95% service. Safety stock = 1.65 × 20 × 3 = <b>99 units</b>. Reorder point = 100 × 9 + 99 = <b>999 units</b>.`
        },
        {
          type: 'framework', name: 'ABC analysis', by: 'Based on the Pareto principle', when: 'Deciding where to focus inventory control effort',
          steps: [
            { label: 'A items', desc: 'Roughly the top 20% of SKUs that make up most (often around 80%) of value. Tight control, frequent reviews, accurate forecasts.' },
            { label: 'B items', desc: 'The middle group. Moderate control and periodic review.' },
            { label: 'C items', desc: 'Many low-value SKUs. Simple rules, larger orders, fewer reviews — or consider cutting the slowest movers.' }
          ]
        },
        {
          type: 'case', company: 'Toyota', year: '2011–2021', title: 'Just-in-time meets reality',
          situation: `Toyota pioneered just-in-time with minimal buffers. The March 2011 earthquake and tsunami in Japan cut off many suppliers and halted production for weeks.`,
          decision: `Toyota mapped its supply chain several tiers deep and, for critical parts such as semiconductors, asked suppliers to hold larger buffers — a business continuity plan rather than pure JIT.`,
          outcome: `When the global chip shortage hit in 2021, Toyota was widely reported to have weathered the first months better than many rivals because of those chip stockpiles, although it later also had to cut output.`,
          lesson: `JIT is a principle, not a dogma. Hold strategic buffers for critical, hard-to-replace parts with long lead times.`
        },
        {
          type: 'scenario',
          prompt: `A spare-parts business has a 99% service-level target on all 8,000 SKUs. Inventory is eating cash. What do you change first?`,
          options: [
            { text: 'Cut all safety stock by 30% across the board.', feedback: 'Blunt cuts will hurt critical items as much as slow movers.', good: false },
            { text: 'Use ABC/XYZ segmentation: keep high service on critical A items, lower targets on C items, and discontinue dead stock.', feedback: 'Correct. Differentiated service levels free cash while protecting the items customers care about most.', good: true },
            { text: 'Move to just-in-time for every SKU.', feedback: 'Spare parts have lumpy, unpredictable demand — pure JIT would cause stock-outs.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'EOQ', def: 'Economic order quantity: the order size that minimises total ordering plus holding cost.' },
        { term: 'Holding cost', def: 'Annual cost of keeping one unit in stock: capital, storage, insurance, obsolescence.' },
        { term: 'Safety stock', def: 'Extra inventory held to protect against variation in demand or supply.' },
        { term: 'Reorder point', def: 'The inventory level that triggers a new order.' },
        { term: 'Service level', def: 'The probability of not running out of stock during a replenishment cycle.' },
        { term: 'ABC analysis', def: 'Classifying items by value to focus control effort where it matters most.' },
        { term: 'Lead time', def: 'Time between placing an order and receiving it.' }
      ],
      quiz: [
        {
          q: 'Annual demand 2,000 units, ordering cost $40, holding cost $10 per unit per year. What is the EOQ?',
          options: ['400', '200', 'About 126', '160'],
          answer: 2,
          explain: '2 × 2,000 × 40 = 160,000; ÷ 10 = 16,000; √16,000 ≈ 126 units.'
        },
        {
          q: 'Average daily demand 50 units, lead time 6 days, safety stock 40. What is the reorder point?',
          options: ['300', '340', '90', '260'],
          answer: 1,
          explain: '50 × 6 + 40 = 340 units.'
        },
        {
          q: 'At the EOQ, how do annual ordering cost and annual holding cost compare?',
          options: ['Ordering cost is double', 'Holding cost is zero', 'They are equal', 'Holding cost is double'],
          answer: 2,
          explain: 'The EOQ is exactly where the two cost curves cross.'
        },
        {
          q: 'Raising the service level from 95% to 99% does what to safety stock?',
          options: ['Nothing', 'Lowers it', 'Removes it', 'Raises it (z rises from about 1.65 to 2.33)'],
          answer: 3,
          explain: 'A higher z multiplies the same variability, so safety stock grows by about 41%.'
        },
        {
          q: 'What did Toyota change after the 2011 earthquake?',
          options: ['Abandoned JIT completely', 'Mapped deep-tier suppliers and held buffers of critical parts like chips', 'Moved all production to the US', 'Stopped using suppliers'],
          answer: 1,
          explain: 'It kept JIT for most parts but added strategic buffers and supply chain visibility.'
        }
      ],
      challenge: {
        title: 'The bike shop\'s ordering policy',
        prompt: `A bike-parts wholesaler sells 4,800 units a year of its best-selling chain (about 96 a week). Each order costs $72 to place and receive; holding cost is $12 per unit per year. Today it orders 1,200 units once a quarter. Supplier lead time is 4 weeks; weekly demand has a standard deviation of 20 units. Target service level is 95% (z = 1.65).<br><br>(a) Calculate the EOQ and its annual cost. (b) Compare with the current policy. (c) Set the safety stock and reorder point.`,
        hints: ['Annual cost = (D ÷ Q) × S + (Q ÷ 2) × H.', 'Use weeks consistently: σ weekly × √(4 weeks).'],
        model: `<p><b>(a) EOQ</b> = √(2 × 4,800 × 72 ÷ 12) = √57,600 = <b>240 units</b> → 20 orders a year. Ordering = 20 × 72 = $1,440; holding = 120 × 12 = $1,440; total <b>$2,880</b>.</p><p><b>(b) Current policy</b> (Q = 1,200): 4 orders × 72 = $288; holding = 600 × 12 = $7,200; total <b>$7,488</b>. Switching saves about <b>$4,608 a year</b> on this one SKU and frees cash: average stock falls from 600 to 120 units (plus safety stock).</p><p><b>(c)</b> Safety stock = 1.65 × 20 × √4 = 1.65 × 40 = <b>66 units</b>. Reorder point = 96 × 4 + 66 = 384 + 66 = <b>450 units</b>. Rule: when stock hits 450, order 240.</p><p><b>Caveat</b>: check supplier minimum order quantities and volume discounts; if a discount applies at 500 units, compare total cost including purchase price.</p>`
      },
      takeaways: [
        'EOQ balances ordering cost against holding cost.',
        'Safety stock protects service levels against variability.',
        'Segment inventory (ABC) — not every SKU deserves the same service level.',
        'Just-in-time needs strategic buffers for critical parts.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'operations-5',
      title: 'Supply chain design, procurement, resilience and ESG',
      level: 'Advanced',
      minutes: 18,
      hook: `In March 2021 one ship stuck sideways in the Suez Canal held up billions of dollars of trade a day — your supply chain is only as strong as its narrowest point.`,
      eli5: `A supply chain is like a relay race from the farm or mine all the way to the shop. If one runner trips, everyone behind them stops. Good supply chain design is choosing your runners, deciding how far apart they stand, and keeping a backup runner ready — while making sure nobody cheats or harms anyone along the way.`,
      blocks: [
        {
          type: 'framework', name: 'The bullwhip effect', by: 'Lee, Padmanabhan and Whang, 1997', when: 'Diagnosing why orders swing much more than real demand',
          steps: [
            { label: 'What it is', desc: 'Small changes in consumer demand become bigger and bigger swings in orders as you move up the chain to wholesalers, manufacturers and raw-material suppliers. P&G noticed it in orders for Pampers nappies, whose consumer demand is very stable.' },
            { label: 'Cause 1: forecast updating', desc: 'Each tier forecasts from the orders it receives, not true demand, and adds its own buffer.' },
            { label: 'Cause 2: order batching', desc: 'Ordering in big monthly batches creates spikes.' },
            { label: 'Cause 3: price promotions', desc: 'Discounts make buyers stock up, then stop ordering.' },
            { label: 'Cause 4: shortage gaming', desc: 'When supply is rationed, buyers over-order, then cancel.' },
            { label: 'Cures', desc: 'Share point-of-sale data, vendor-managed inventory, smaller frequent orders, everyday low pricing, and allocation based on past sales.' }
          ]
        },
        {
          type: 'case', company: 'Zara (Inditex)', year: '1990s–today', title: 'Speed beats cheap',
          situation: `Most fashion retailers design collections many months ahead and manufacture in low-cost Asian factories, betting on what will sell.`,
          decision: `Zara keeps a large share of production close to its Spanish headquarters — in Spain, Portugal, Morocco and Turkey — with in-house design and logistics. Stores send sales data and customer feedback constantly, and new designs can reach stores in a matter of weeks.`,
          outcome: `Zara produces in smaller batches, sells more at full price, and is left with less unsold stock than traditional rivals. It accepts higher unit labour costs in exchange for responsiveness.`,
          lesson: `Optimise the total cost, not the unit cost. For fast-changing products, speed and flexibility can be worth more than the cheapest factory.`
        },
        {
          type: 'case', company: 'Apple under Tim Cook', year: '1998–today', title: 'Supply chain as competitive weapon',
          situation: `When Tim Cook joined Apple in 1998 as head of operations, the company held too much inventory and ran its own factories.`,
          decision: `He closed factories and warehouses, outsourced assembly to contract manufacturers such as Foxconn, cut the number of suppliers and drove inventory down to days. Apple later used its cash to prepay suppliers and lock up scarce components and manufacturing capacity.`,
          outcome: `Apple gained huge scale and control without owning factories. But concentration in China became a risk, highlighted by COVID lockdowns at a major iPhone plant in 2022. Apple has since been shifting some production to India and Vietnam.`,
          lesson: `Outsourcing manufacturing is not outsourcing control. Concentration brings efficiency — and risk.`
        },
        {
          type: 'timeline', title: 'Shocks that reshaped supply chains',
          items: [
            { label: '2011', desc: 'Japan earthquake and Thai floods expose single-source dependencies in autos and hard drives.' },
            { label: '2020', desc: 'COVID-19: factory shutdowns, demand swings, shortages of PPE and later of semiconductors.' },
            { label: 'Mar 2021', desc: 'The Ever Given container ship blocks the Suez Canal for six days, creating a queue of hundreds of ships.' },
            { label: '2022', desc: 'Russia\'s invasion of Ukraine disrupts energy, grain and metals supply.' },
            { label: '2023–24', desc: 'Red Sea shipping attacks force many carriers to re-route around Africa, adding time and cost.' },
            { label: '2025–26', desc: 'Sweeping US tariffs and trade tensions push firms towards "China + 1", nearshoring to Mexico and friend-shoring, and continuous tariff scenario planning.' }
          ]
        },
        {
          type: 'matrix', name: 'Kraljic purchasing matrix', xLabel: 'Supply risk →', yLabel: 'Profit impact →',
          cells: [
            { label: 'Leverage items', desc: 'High spend, many suppliers. Use competitive bidding and volume to negotiate price.' },
            { label: 'Strategic items', desc: 'High spend, few suppliers. Build long-term partnerships, joint planning and dual sourcing.' },
            { label: 'Non-critical items', desc: 'Low spend, many suppliers. Simplify: catalogues, automation, minimal management time.' },
            { label: 'Bottleneck items', desc: 'Low spend but hard to get. Secure supply with buffers, contracts and alternative designs.' }
          ]
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Score your suppliers',
          note: 'Compare a low-cost distant supplier with a nearshore one on cost, lead time, quality, risk and ESG. Change the weights and see if the winner flips.'
        },
        {
          type: 'compare', title: 'Supply chain ESG essentials (2025–2026)', headers: ['Topic', 'What it means', 'Why it matters now'],
          rows: [
            ['Scope 3 emissions', 'Emissions in your value chain, often most of a company\'s footprint', 'Customers and regulators increasingly ask for them; supplier data is the hard part'],
            ['Forced labour', 'Ensuring no forced or child labour in sub-tiers', 'US Uyghur Forced Labor Prevention Act (2022) lets customs detain goods; EU forced-labour ban adopted'],
            ['Reporting rules', 'EU CSRD and due-diligence directives', 'Scope and timelines were narrowed and delayed in 2025, but large firms still face requirements'],
            ['Carbon border tax', 'EU CBAM charges for embedded carbon in imports such as steel and aluminium', 'Definitive charges phase in from 2026'],
            ['Worker safety', 'Factory safety audits and remediation', 'The 2013 Rana Plaza collapse in Bangladesh killed over 1,100 garment workers']
          ]
        },
        {
          type: 'checklist', title: 'Supply chain resilience review',
          items: ['Map tier-1 and critical tier-2/3 suppliers', 'Identify single-source and single-country dependencies', 'Calculate time-to-recover for critical parts', 'Dual-source or hold buffers for strategic and bottleneck items', 'Compare total landed cost, not unit price', 'Run tariff and disruption scenarios each quarter', 'Audit suppliers on labour and environmental standards']
        }
      ],
      terms: [
        { term: 'Bullwhip effect', def: 'Amplification of order swings as you move upstream in a supply chain.' },
        { term: 'Nearshoring', def: 'Moving production to a nearby country (e.g. Mexico for the US) to shorten lead times and reduce risk.' },
        { term: 'China + 1', def: 'Keeping Chinese suppliers but adding at least one other country to diversify risk.' },
        { term: 'Total landed cost', def: 'Unit price plus freight, duties, tariffs, inventory carrying, quality and risk costs.' },
        { term: 'Kraljic matrix', def: 'Peter Kraljic\'s 1983 framework that segments purchases by profit impact and supply risk.' },
        { term: 'Scope 3 emissions', def: 'Indirect greenhouse gas emissions across a company\'s supply chain and product use.' },
        { term: 'Dual sourcing', def: 'Buying the same item from two suppliers to reduce dependency.' }
      ],
      quiz: [
        {
          q: 'Consumer demand for nappies is stable, yet the manufacturer sees wildly swinging orders. This is:',
          options: ['The Pareto principle', 'Little\'s Law', 'The bullwhip effect', 'Economies of scale'],
          answer: 2,
          explain: 'Order variability amplifies upstream — Lee, Padmanabhan and Whang\'s bullwhip effect.'
        },
        {
          q: 'A supplier quotes $10 per unit plus $1.50 freight and duty; another quotes $11 plus $0.30. Ignoring inventory costs, which has the lower landed cost?',
          options: ['The second, at $11.30 vs $11.50', 'The first, at $11.50 vs $11.30', 'They are equal', 'The first, at $10'],
          answer: 0,
          explain: 'Landed cost: 10 + 1.50 = $11.50; 11 + 0.30 = $11.30.'
        },
        {
          q: 'Low spend but very few possible suppliers — which Kraljic category?',
          options: ['Leverage', 'Strategic', 'Non-critical', 'Bottleneck'],
          answer: 3,
          explain: 'Bottleneck items are low impact but high supply risk; secure supply rather than chase price.'
        },
        {
          q: 'What was central to Zara\'s supply chain advantage?',
          options: ['Lowest-cost factories in Asia', 'Responsiveness: nearby production and fast design-to-store cycles', 'Huge seasonal inventories', 'No in-house design'],
          answer: 1,
          explain: 'Zara trades higher unit cost for speed and less unsold stock.'
        },
        {
          q: 'A product needs 10 weeks of pipeline inventory from Asia vs 2 weeks from Mexico. For 52,000 units a year, how many more units are in the pipeline from Asia?',
          options: ['10,000', '2,000', '8,000', '12,000'],
          answer: 2,
          explain: 'Weekly demand = 1,000. Asia: 10,000 units in transit; Mexico: 2,000. Difference = 8,000.'
        }
      ],
      challenge: {
        title: 'China or Mexico?',
        prompt: `A US company buys 100,000 units a year of a component. <br>Supplier A (China): $10.00 per unit, freight and duties $1.50, lead time 10 weeks.<br>Supplier B (Mexico): $12.00 per unit, freight and duties $0.80, lead time 2 weeks.<br>Inventory carrying cost is 25% of the landed unit value per year. Assume pipeline inventory equals lead time × weekly demand.<br><br>(a) Compare total annual cost including pipeline inventory. (b) What non-cost factors matter? (c) Recommend a sourcing strategy.`,
        hints: ['Weekly demand = 100,000 ÷ 52.', 'Inventory cost = units in pipeline × landed cost × 25%.', 'Think about tariffs, disruptions and demand changes.'],
        model: `<p><b>(a)</b></p><ul><li>Landed cost: A = $11.50; B = $12.80.</li><li>Purchase cost: A = $1,150,000; B = $1,280,000.</li><li>Pipeline: A = 100,000 × 10 ÷ 52 ≈ 19,231 units × $11.50 ≈ $221,154 → carrying 25% ≈ <b>$55,288</b>. B = 100,000 × 2 ÷ 52 ≈ 3,846 units × $12.80 ≈ $49,231 → carrying ≈ <b>$12,308</b>.</li><li>Total: A ≈ <b>$1,205,288</b>; B ≈ <b>$1,292,308</b>. A is cheaper by about $87,000 (≈7%).</li></ul><p><b>(b) Non-cost factors</b>: tariff risk (a further tariff of under $1 a unit on A would erase its advantage), shipping disruptions (Suez, Red Sea), speed to respond to demand changes, less safety stock and fewer obsolete units with shorter lead time, quality, IP protection, ESG and forced-labour compliance.</p><p><b>(c) Recommendation</b>: dual-source. Keep roughly 60–70% with A for cost, qualify B for 30–40% to build a relationship and a fast-response option, and shift volume as tariffs or risks change. Review quarterly with tariff scenarios. This is the "China + 1" approach.</p>`
      },
      takeaways: [
        'Small demand changes become big order swings upstream — share real demand data.',
        'Compare total landed cost and risk, not just unit price.',
        'Segment suppliers with Kraljic and dual-source strategic and bottleneck items.',
        'Resilience and ESG compliance are now board-level supply chain issues.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'operations-6',
      title: 'Service operations, KPIs and AI in operations',
      level: 'Advanced',
      minutes: 16,
      hook: `Run a team at 95% utilisation and the queue explodes — understanding why is the difference between a calm operation and constant firefighting.`,
      eli5: `Think of a single checkout at a supermarket. If customers arrive a bit slower than the cashier can serve, the line stays short. But as arrivals get close to the cashier\'s top speed, the line suddenly gets very long, because any little delay never gets a chance to clear. Good managers leave some slack, measure the right things every week, and use machines for the simple jobs.`,
      blocks: [
        {
          type: 'formula', name: 'Queueing basics (single server)',
          expr: 'Utilisation ρ = λ ÷ μ;  Average wait in queue Wq = ρ ÷ (μ − λ)',
          explain: 'λ = arrival rate, μ = service rate (same units). This is the classic M/M/1 model with random arrivals and service times. Waiting time grows explosively as utilisation approaches 100%.',
          example: `μ = 10 customers/hour. At λ = 8 (ρ = 80%): Wq = 0.8 ÷ 2 = 0.4 hours = <b>24 minutes</b>. At λ = 9 (ρ = 90%): Wq = 0.9 ÷ 1 = 0.9 hours = <b>54 minutes</b>. A 12.5% increase in demand more than doubles the wait.`
        },
        {
          type: 'framework', name: 'The psychology of waiting', by: 'David Maister, 1985', when: 'Designing any customer-facing queue',
          steps: [
            { label: 'Occupied time feels shorter', desc: 'Give people something to do: menus to read, forms to complete.' },
            { label: 'Uncertain waits feel longer', desc: 'Show expected wait times and progress.' },
            { label: 'Unexplained waits feel longer', desc: 'Tell people why there is a delay.' },
            { label: 'Unfair waits feel longer', desc: 'Use a single visible queue and clear rules.' },
            { label: 'Anxiety makes waits feel longer', desc: 'Reassure: "you are in the right line".' }
          ]
        },
        {
          type: 'compare', title: 'Operations metrics that matter', headers: ['Area', 'KPI', 'Watch out for'],
          rows: [
            ['Delivery', 'On-time in-full (OTIF)', 'Hitting "on time" by padding promise dates'],
            ['Quality', 'First-pass yield; defect rate', 'Counting only defects customers report'],
            ['Speed', 'Lead time; cycle time', 'Averages hiding long tails — use percentiles'],
            ['Cost', 'Cost per unit / per order', 'Cutting cost by shifting it to customers'],
            ['Service', 'First-contact resolution; CSAT', 'Optimising handle time at the expense of resolution'],
            ['Capacity', 'Utilisation', 'Targeting 100% — it destroys flow']
          ]
        },
        {
          type: 'framework', name: 'Operating cadence', by: 'Common practice; Amazon\'s Weekly Business Review is a well-known example', when: 'Running a business week to week',
          steps: [
            { label: 'Daily', desc: 'Short stand-ups on yesterday\'s issues and today\'s priorities; tiered huddles escalate blockers.' },
            { label: 'Weekly business review', desc: 'Review a consistent set of input and output metrics against targets. Discuss anomalies, not every number.' },
            { label: 'Monthly', desc: 'Financial close, forecast update, deeper dives on one or two problem areas.' },
            { label: 'Quarterly', desc: 'Set and score OKRs, review strategy and resource allocation.' },
            { label: 'Annually', desc: 'Strategic plan and budget.' }
          ]
        },
        {
          type: 'interactive', widget: 'okr', title: 'Write an operations OKR',
          note: 'Example: Objective "Customers get their orders fast and right". Key results: OTIF from 88% to 96%; wrong-item rate from 2% to 0.5%; median ticket resolution under 4 hours.'
        },
        {
          type: 'case', company: 'Klarna', year: '2024–2025', title: 'AI agents in customer service',
          situation: `Swedish payments company Klarna deployed an AI assistant built on OpenAI models to handle customer service chats.`,
          decision: `In February 2024 Klarna said the assistant was handling about two-thirds of its customer service chats in its first month — work it described as equivalent to about 700 full-time agents — with faster resolution times.`,
          outcome: `In 2025 Klarna\'s CEO said the company had pushed too far on cost and that quality had suffered for some interactions; it began recruiting human agents again so customers could always reach a person.`,
          lesson: `AI agents can absorb large volumes of routine work, but design for quality and escalation. Measure resolution and satisfaction, not just cost per contact.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Where AI agents fit in ops (2025–2026)',
          html: `<ul><li><b>Strong fit</b>: high-volume, rule-based, well-documented tasks — tier-1 support, invoice processing, order status, scheduling, data entry, demand-forecast drafts.</li><li><b>Human in the loop</b>: refunds above a threshold, safety, regulated decisions, angry or vulnerable customers.</li><li><b>Design rules</b>: clear escalation paths, logged decisions, quality sampling, and a KPI for "AI resolved without re-contact".</li></ul>`
        }
      ],
      terms: [
        { term: 'Arrival rate (λ)', def: 'How many customers or jobs arrive per unit of time.' },
        { term: 'Service rate (μ)', def: 'How many customers one server can handle per unit of time.' },
        { term: 'OTIF', def: 'On-time in-full: the share of orders delivered complete and on the promised date.' },
        { term: 'First-contact resolution', def: 'The share of customer issues solved in the first interaction.' },
        { term: 'OKR', def: 'Objectives and Key Results: a qualitative goal plus 2–4 measurable results. Developed by Andy Grove at Intel and brought to Google by John Doerr in 1999.' },
        { term: 'Weekly business review (WBR)', def: 'A weekly meeting reviewing a fixed set of metrics to spot and act on anomalies.' },
        { term: 'Human in the loop', def: 'A design where a person reviews or approves automated decisions in defined cases.' }
      ],
      quiz: [
        {
          q: 'A single help-desk agent can resolve 12 tickets per hour; 9 arrive per hour. What is utilisation?',
          options: ['75%', '133%', '25%', '90%'],
          answer: 0,
          explain: 'ρ = 9 ÷ 12 = 75%.'
        },
        {
          q: 'Using the M/M/1 formula with μ = 12 and λ = 9, what is the average wait in the queue?',
          options: ['30 minutes', '45 minutes', '15 minutes', '20 minutes'],
          answer: 2,
          explain: 'Wq = ρ ÷ (μ − λ) = 0.75 ÷ 3 = 0.25 hours = 15 minutes.'
        },
        {
          q: 'Why is targeting 100% utilisation in a service team a bad idea?',
          options: ['It lowers wages', 'Waiting times grow without limit as utilisation nears 100%', 'It improves quality too much', 'Customers prefer idle staff'],
          answer: 1,
          explain: 'With variable arrivals, queues explode near full utilisation — slack is needed to absorb variation.'
        },
        {
          q: 'Which is the best key result for the objective "Delight customers with fast delivery"?',
          options: ['Launch a new courier partnership', 'Work harder on delivery', 'Hold weekly delivery meetings', 'Raise the share of orders delivered within 48 hours from 70% to 90%'],
          answer: 3,
          explain: 'Key results must be measurable outcomes, not activities.'
        },
        {
          q: 'What does the Klarna experience suggest?',
          options: ['AI agents should replace all human service', 'AI can handle high volumes, but quality and human escalation must be designed in', 'AI customer service does not work', 'Cost per contact is the only metric that matters'],
          answer: 1,
          explain: 'Klarna saw large efficiency gains, then rebalanced towards human access to protect quality.'
        }
      ],
      challenge: {
        title: 'Staff the support team in the age of AI',
        prompt: `Your support team receives 200 tickets a day. Each human agent can resolve 25 tickets a day. Leadership wants agents at no more than 80% utilisation. A vendor claims its AI agent will fully resolve 40% of tickets. The tickets left for humans will be harder: each agent will then resolve only 20 a day.<br><br>(a) How many agents are needed today? (b) How many after the AI is deployed? (c) What KPIs and safeguards do you put in place before cutting any roles?`,
        hints: ['Agents = tickets ÷ (tickets per agent × target utilisation).', 'Do not forget the harder mix after automation.'],
        model: `<p><b>(a) Today</b>: 200 ÷ (25 × 0.8) = 200 ÷ 20 = <b>10 agents</b>.</p><p><b>(b) With AI</b>: humans handle 60% × 200 = 120 tickets. 120 ÷ (20 × 0.8) = 120 ÷ 16 = 7.5 → <b>8 agents</b>. A naive estimate that ignores the harder mix would say 120 ÷ 20 = 6 — overstating savings by two people.</p><p><b>(c) Safeguards</b></p><ul><li>Pilot for 4–8 weeks on one queue before changing headcount.</li><li>KPIs: AI resolution rate <i>without re-contact within 7 days</i>, CSAT for AI vs human, escalation rate, time to reach a human, errors and refunds caused.</li><li>Clear escalation: any customer can ask for a human; sensitive categories go straight to people.</li><li>Redeploy agents to complex cases, proactive outreach and training the AI on new issues rather than immediate layoffs; reduce headcount through natural attrition if the data holds.</li></ul>`
      },
      takeaways: [
        'Queues explode near 100% utilisation — plan for slack.',
        'Manage perceived waiting as well as actual waiting.',
        'Run a steady cadence of daily, weekly, monthly and quarterly reviews on a few clear KPIs.',
        'Use AI agents for routine volume, with escalation and quality metrics built in.'
      ]
    }
  ]
});
