/* MBA Studio — Track 4: Validation & Customer Discovery */
MBA.addTrack({
  id: "validation",
  stage: 2,
  order: 4,
  title: "Validation & Customer Discovery",
  icon: "🔬",
  color: "#f97316",
  tagline: "Prove people want it before you build it",
  summary: `Most new products fail because nobody wants them badly enough — not because the team could not build them. After this track you will be able to turn an idea into testable hypotheses, interview customers without fooling yourself, size a market honestly, run cheap MVP experiments, and tell whether you have product–market fit or need to pivot.`,
  outcomes: [
    "Turn a business idea into clear, falsifiable hypotheses and find the riskiest one",
    "Run customer interviews that produce facts, not compliments (The Mom Test)",
    "Choose the right MVP type — concierge, Wizard-of-Oz, landing page, fake door, pre-sale",
    "Size a market top-down and bottom-up (TAM / SAM / SOM)",
    "Design experiments with success criteria and read product–market fit signals",
    "Decide rationally between pivot and persevere"
  ],
  lessons: [
    /* ---------------------------------------------------------------- 1 */
    {
      id: "validation-1",
      title: "The Lean Startup loop: ideas are guesses",
      level: "Beginner",
      minutes: 12,
      hook: "Every business plan is a stack of guesses dressed up as facts — your job is to find out which guesses are wrong before the money runs out.",
      eli5: `Imagine you want to sell lemonade at the park. You <i>think</i> people are thirsty, you <i>think</i> they will pay $2, and you <i>think</i> the park is busy on Saturday. Instead of buying 100 lemons, you bring one jug and a sign. By lunchtime you know which of your guesses were right. That is the whole idea of the Lean Startup: make a small thing, watch what happens, learn, and then decide what to do next.`,
      blocks: [
        {
          type: "text",
          title: "Why validation exists",
          html: `<p>A startup is not a small version of a big company. A big company <b>executes</b> a known business model. A startup is <b>searching</b> for a business model that works (Steve Blank's definition).</p>
<p>When you are searching, the biggest risk is not "can we build it?" but "<span class="hl">does anyone want it enough to pay?</span>" Post-mortems of failed startups (for example, CB Insights' recurring analyses) consistently list "no market need" among the top reasons for failure.</p>
<p>Validation is the discipline of reducing that risk <b>cheaply and quickly</b>, before you spend years and savings on a full product.</p>`
        },
        {
          type: "framework",
          name: "Build – Measure – Learn",
          by: "Eric Ries, The Lean Startup (2011), building on Steve Blank's Customer Development",
          when: "Any time you are uncertain about customers, problem, solution or business model — i.e. almost always early on.",
          steps: [
            { label: "Ideas → write hypotheses", desc: "State what must be true for the idea to work: who the customer is, what problem they have, what they will pay. Write each as a testable sentence." },
            { label: "Build (the smallest thing)", desc: "Build a Minimum Viable Product: the cheapest artefact that can test the hypothesis. It may be a video, a landing page or you doing the service by hand." },
            { label: "Measure (real behaviour)", desc: "Collect data on what people DO — sign-ups, pre-payments, repeat usage — not what they SAY they will do." },
            { label: "Learn (validated learning)", desc: "Compare results to the success criterion you set in advance. Was the hypothesis supported or refuted?" },
            { label: "Decide: pivot or persevere", desc: "If supported, invest more. If refuted, change one big element of the plan (a pivot) and loop again. Speed through the loop is the real competitive advantage." }
          ]
        },
        {
          type: "formula",
          name: "A good hypothesis",
          expr: "We believe [specific customer] has [problem] and will [measurable action] when we offer [solution]. We will know we are right if [metric] reaches [threshold] within [time].",
          explain: "Specific customer = a group you can actually find. Measurable action = something observable (pay, sign up, return). Threshold and time are set BEFORE the test so you cannot move the goalposts afterwards.",
          example: "We believe owners of independent cafés in Pune lose 2+ hours a week on supplier ordering and will pay ₹1,500/month for an ordering assistant. We will know we are right if 5 of the first 20 cafés we pitch agree to a paid 1-month pilot within 3 weeks (25% conversion)."
        },
        {
          type: "case",
          company: "Zappos",
          year: "1999",
          title: "Testing 'will people buy shoes online?' with no inventory",
          situation: `In 1999 many people believed nobody would buy shoes without trying them on. Founder Nick Swinmurn wanted to test that core assumption before building warehouses and buying stock.`,
          decision: `He photographed shoes in local shoe stores and posted them on a simple website. When someone ordered, he went to the store, bought the pair at full retail price and shipped it.`,
          outcome: `Each sale lost money, but orders came in — proving demand existed. The company went on to raise money, build real operations and was acquired by Amazon in 2009.`,
          lesson: `Test the riskiest assumption (demand) first, with something unscalable. Efficiency can come later; it is pointless to optimise a business nobody wants.`
        },
        {
          type: "compare",
          title: "Traditional plan vs Lean approach",
          headers: ["", "Traditional business plan", "Lean / Customer Development"],
          rows: [
            ["Starting point", "5-year forecast and full spec", "List of hypotheses"],
            ["First output", "Finished product", "MVP / experiment"],
            ["Evidence", "Research reports, opinions", "Customer behaviour"],
            ["Failure", "Discovered at launch, expensive", "Discovered early, cheap"],
            ["Best for", "Known model (opening another franchise outlet)", "Unknown model (new product, new market)"]
          ]
        },
        {
          type: "callout",
          kind: "myth",
          title: "Myth: 'Lean means cheap and low quality'",
          html: `<p>Lean means <b>minimum waste of learning time</b>, not shoddy products. An MVP must be good enough to give a true signal. A buggy app that people abandon tells you about the bugs, not about demand.</p>`
        },
        {
          type: "flip",
          title: "Test yourself",
          cards: [
            { front: "What is a startup, in Steve Blank's words?", back: "A temporary organisation searching for a repeatable and scalable business model." },
            { front: "What is 'validated learning'?", back: "Progress measured by evidence from real customer behaviour that a hypothesis is true or false." },
            { front: "Why set success criteria before the test?", back: "So you cannot reinterpret any result as a success afterwards (moving the goalposts)." },
            { front: "What is the unit of progress in Lean Startup?", back: "Validated learning — not lines of code or features shipped." }
          ]
        },
        {
          type: "checklist",
          title: "Before you build anything",
          items: [
            "I have written 5–10 hypotheses about customer, problem, solution, channel and price",
            "Each hypothesis names a specific customer segment",
            "Each has a metric, threshold and deadline",
            "I know which one would kill the idea if false",
            "I have a test for that one costing under 2 weeks and little money"
          ]
        }
      ],
      terms: [
        { term: "Hypothesis", def: "A testable statement about your business that could be proven wrong by evidence." },
        { term: "Lean Startup", def: "A method (Eric Ries, 2011) of building companies through rapid Build–Measure–Learn cycles instead of long upfront planning." },
        { term: "Customer Development", def: "Steve Blank's process of discovering and validating customers before scaling: discovery, validation, creation, building." },
        { term: "Validated learning", def: "Knowledge backed by real customer behaviour from an experiment." },
        { term: "MVP", def: "Minimum Viable Product: the smallest thing you can build to test a hypothesis and start learning." },
        { term: "Pivot", def: "A structured change to one fundamental part of the business model based on what you learned." }
      ],
      quiz: [
        { q: "According to Steve Blank, how is a startup different from a big company?", options: ["It has fewer employees", "It is searching for a business model rather than executing a known one", "It does not need revenue", "It always uses technology"], answer: 1, explain: "Big companies execute known models; startups search for one that is repeatable and scalable." },
        { q: "Which is the best-written hypothesis?", options: ["People will love our app", "Young people need better fitness", "20% of gym members we email will join a paid waitlist at $10 within 2 weeks", "Our product is better than competitors"], answer: 2, explain: "It has a specific segment, a measurable action, a threshold and a deadline." },
        { q: "What did Zappos' founder do to test demand in 1999?", options: ["Ran a big survey", "Built a warehouse first", "Raised venture capital and launched nationally", "Posted photos of shoes from local stores and bought them only when orders came in"], answer: 3, explain: "A classic unscalable test of the riskiest assumption: will people buy shoes online at all?" },
        { q: "In Build–Measure–Learn, what should you mainly measure?", options: ["What customers actually do", "What customers say they might do", "How many features you shipped", "How many hours the team worked"], answer: 0, explain: "Behaviour (sign-ups, payments, repeat use) is far more reliable than stated intentions." }
      ],
      challenge: {
        title: "Turn an idea into hypotheses",
        prompt: `You want to launch a weekly meal-kit subscription for busy nurses on night shifts in your city (about 8,000 nurses). Price idea: $45/week. Write the 5 most important hypotheses, rank them by risk, and design a test for the riskiest one with a clear success threshold.`,
        hints: ["Cover customer, problem, solution, channel and price.", "Riskiest = most uncertain AND most fatal if wrong.", "Your test should take days, not months."],
        model: `<ol>
<li><b>Problem:</b> Night-shift nurses struggle to eat healthy meals and currently rely on takeaway/vending (risk: medium).</li>
<li><b>Willingness to pay:</b> At least 15% of interested nurses will pay $45/week (risk: <b>high</b> — this is a lot for many nurses).</li>
<li><b>Channel:</b> We can reach nurses cheaply via hospital staff groups and unions (risk: medium).</li>
<li><b>Solution:</b> Nurses will actually cook kits after a shift — maybe they want ready-to-eat meals instead (risk: <b>high</b>).</li>
<li><b>Operations:</b> We can deliver at odd hours profitably (risk: medium, but testable later).</li>
</ol>
<p><b>Riskiest:</b> #4 combined with #2 — do tired nurses want to cook at all, and will they pay?</p>
<p><b>Test:</b> Post in two hospital staff groups a simple page offering two options — "Cook-at-home kit $45/week" and "Ready-to-heat meals $55/week" — with a $10 refundable deposit to reserve a slot. Success: 30+ deposits within 10 days, and see which option wins. Then hand-deliver the first 2 weeks yourself (concierge) to learn usage before building anything.</p>`
      },
      takeaways: [
        "A business idea is a set of guesses; write them as testable hypotheses.",
        "Test the riskiest assumption first, with the cheapest possible experiment.",
        "Measure behaviour, not opinions — and set success criteria in advance.",
        "Speed through Build–Measure–Learn is a competitive advantage."
      ]
    },

    /* ---------------------------------------------------------------- 2 */
    {
      id: "validation-2",
      title: "Riskiest assumptions & customer interviews (The Mom Test)",
      level: "Beginner",
      minutes: 14,
      hook: "Everyone will tell you your idea is great — and that is exactly why most customer conversations are useless.",
      eli5: `If you ask your mum "Do you like my cake idea?" she will say yes because she loves you. But if you ask "When did you last buy a cake, and where?" she has to tell you a real fact. Good customer interviews ask about real past actions, not opinions about your idea.`,
      blocks: [
        {
          type: "matrix",
          name: "Assumption mapping",
          xLabel: "Evidence we have → (low to high)",
          yLabel: "Importance to the business →",
          cells: [
            { label: "Test first (critical, unknown)", desc: "Important AND little evidence. These are your riskiest assumptions — design experiments for these now." },
            { label: "Monitor (critical, known)", desc: "Important and already supported by evidence. Keep checking, but no urgent test needed." },
            { label: "Park (minor, unknown)", desc: "Uncertain but not fatal if wrong. Revisit later." },
            { label: "Ignore for now", desc: "Unimportant and already known. Do not waste time here." }
          ]
        },
        {
          type: "framework",
          name: "The Mom Test — three rules",
          by: "Rob Fitzpatrick, The Mom Test (2013)",
          when: "Every customer conversation in discovery, sales or product research.",
          steps: [
            { label: "Talk about their life, not your idea", desc: "Once you pitch, people get polite. Ask about how they handle the problem today." },
            { label: "Ask about specifics in the past, not generics or the future", desc: "'When was the last time…?' beats 'Would you ever…?' The past is data; the future is fiction." },
            { label: "Talk less and listen more", desc: "Aim for the customer to talk most of the time. Silence is fine — it invites detail." }
          ]
        },
        {
          type: "compare",
          title: "Bad questions vs good questions",
          headers: ["", "Bad (opinion / future)", "Good (fact / past)"],
          rows: [
            ["Interest", "Would you use an app that does X?", "How do you deal with X today?"],
            ["Pain", "Is X a big problem for you?", "When did X last happen? What did it cost you?"],
            ["Spending", "Would you pay $20 for this?", "What have you already spent trying to solve it?"],
            ["Priority", "Do you like this feature?", "What else have you tried? Why did you stop?"],
            ["Commitment", "Let me know if you're interested!", "Can I set up a trial with your team next Tuesday?"]
          ]
        },
        {
          type: "callout",
          kind: "warning",
          title: "Three kinds of bad data",
          html: `<ul><li><b>Compliments</b> — "Love it!" means nothing. Deflect and ask about their behaviour.</li>
<li><b>Fluff</b> — generics ("I usually…"), future promises ("I would definitely…"). Anchor back to a specific past example.</li>
<li><b>Ideas / feature requests</b> — dig for the motivation: "Why do you want that? What would it let you do?"</li></ul>`
        },
        {
          type: "text",
          title: "Commitment is the real signal",
          html: `<p>A good meeting ends with the customer giving up something of value: <b>time</b> (a follow-up, a trial), <b>reputation</b> (an intro to their boss), or <b>money</b> (a deposit, a letter of intent, a pre-order).</p>
<p>If every conversation ends with "sounds great, keep me posted", you have learned that the problem is <span class="hl">not urgent enough</span> — which is also valuable.</p>
<p>Practical rhythm: 15–20 interviews per segment usually reveal repeating patterns. Take notes in the customer's own words, and tag each note: pain, workaround, spending, emotion, commitment.</p>`
        },
        {
          type: "scenario",
          prompt: "You interview a restaurant owner about your table-booking software. She says: 'Oh yes, no-shows are a huge problem, I would definitely pay for something that fixes that.' What do you do next?",
          options: [
            { text: "Note 'validated — will pay' and move on.", feedback: "That is a future promise (fluff). Nothing has been validated yet.", good: false },
            { text: "Ask: 'When was the last no-show? What did it cost that night? What have you tried to fix it?'", feedback: "Right. Anchor in a specific past event, its cost and existing workarounds. If she has tried nothing, the pain may be mild.", good: true },
            { text: "Show her your prototype immediately so she can see how good it is.", feedback: "Pitching too early turns the conversation into compliments. Learn first, pitch later.", good: false }
          ]
        },
        {
          type: "case",
          company: "Intuit",
          year: "1980s onward",
          title: "Follow Me Home: watching real behaviour",
          situation: `Intuit co-founder Scott Cook wanted to understand how people really used Quicken, its personal-finance software, rather than relying on what they said in surveys.`,
          decision: `Intuit staff asked buyers in stores if they could follow them home and silently watch them install and use the product. The 'Follow Me Home' practice became part of Intuit's culture.`,
          outcome: `Observing real use revealed problems and unexpected uses that customers never mentioned in questionnaires — for example, small-business owners using personal-finance software for their companies, an insight associated with the later creation of QuickBooks.`,
          lesson: `Watching what people actually do in their own context beats asking what they think. Observation is the ultimate Mom Test.`
        },
        {
          type: "checklist",
          title: "Interview script skeleton",
          items: [
            "Context: tell me about your role / a typical week",
            "Last time: walk me through the last time [problem] happened",
            "Impact: what did it cost (time, money, stress)?",
            "Workarounds: what do you do about it today? What have you tried?",
            "Spend: what do you pay for current solutions?",
            "Close: who else should I talk to? Can we do a follow-up or pilot?"
          ]
        },
        {
          type: "interactive",
          widget: "idea-score",
          title: "Score your idea after interviews",
          note: "Fill in the scorecard twice: once with your gut feeling, once using only evidence from interviews. The gap shows how much you were guessing."
        }
      ],
      terms: [
        { term: "Riskiest assumption", def: "The belief that is most important to your success and has the least evidence behind it." },
        { term: "Assumption mapping", def: "Plotting assumptions by importance and evidence to decide what to test first (popularised by David Bland)." },
        { term: "The Mom Test", def: "Rob Fitzpatrick's rules for asking questions that even your mum cannot lie to you about." },
        { term: "Workaround", def: "What people currently do to cope with a problem. Costly workarounds signal real pain." },
        { term: "Commitment signal", def: "A customer giving time, reputation or money — the real proof of interest." },
        { term: "Letter of intent (LOI)", def: "A written, usually non-binding statement that a customer intends to buy; a stronger signal than verbal interest." },
        { term: "Early adopter", def: "A customer who has the problem, knows it, is actively looking, and has budget or has hacked together a solution." }
      ],
      quiz: [
        { q: "Which question follows The Mom Test?", options: ["Would you buy this?", "Do you think this is a good idea?", "Tell me about the last time you had to reorder stock — what happened?", "How much would you pay for this?"], answer: 2, explain: "It asks about a specific past event, giving facts rather than opinions." },
        { q: "In assumption mapping, which assumptions do you test first?", options: ["Important and low evidence", "Unimportant and low evidence", "Important and high evidence", "The easiest to test"], answer: 0, explain: "Critical-and-unknown assumptions are the ones that can kill the business." },
        { q: "A meeting ends with 'Great, keep me posted.' What did you learn?", options: ["The customer is ready to buy", "Nothing useful", "The problem may not be urgent; no commitment was given", "You should raise prices"], answer: 2, explain: "Lack of commitment is a signal that the pain is weak or that you did not ask for a next step." },
        { q: "Which is the STRONGEST evidence of demand?", options: ["10 people say they love it", "A survey with 500 responses saying 'likely to buy'", "Lots of likes on social media", "5 customers pay a deposit"], answer: 3, explain: "Money is the strongest commitment signal." },
        { q: "A customer asks for a specific feature. Best response?", options: ["Add it to the roadmap", "Ask why they want it and what it would let them do", "Ignore it", "Promise it next week"], answer: 1, explain: "Dig for the underlying motivation; the real need may be solved differently." }
      ],
      challenge: {
        title: "Fix a bad interview script",
        prompt: `A founder building an expense app for freelancers wrote these questions: (1) Do you find expenses annoying? (2) Would you use an app that scans receipts automatically? (3) Would you pay $8/month? (4) What features would you want? (5) Can I count on you to sign up when we launch? Rewrite them into a Mom-Test-proof script and explain what a 'good' answer would look like.`,
        hints: ["Replace every 'would you' with 'when did you last'.", "Look for money already being spent.", "End with a real commitment request."],
        model: `<ol>
<li><b>"Walk me through what you did with receipts last month."</b> Good answer: specific steps, time spent, frustration.</li>
<li><b>"When did expenses last cause a real problem — a missed claim, a tax issue, a late invoice?"</b> Good: a concrete event with a cost (e.g. "I lost about $300 of deductions last year").</li>
<li><b>"What tools or people do you use today? What do you pay?"</b> Good: they already pay for an accountant or app — a budget exists.</li>
<li><b>"What have you tried that didn't work? Why did you stop?"</b> Reveals switching triggers and objections.</li>
<li><b>Close:</b> "We are running a 4-week paid pilot at $8/month, first month refundable. Want me to set you up now?" Good: card details or a scheduled onboarding call.</li>
</ol>
<p><b>Why:</b> the original questions all ask for opinions about the future, which produce polite yeses. The new ones collect facts, past spending and commitment.</p>`
      },
      takeaways: [
        "Map assumptions by importance and evidence; test critical unknowns first.",
        "Ask about specific past behaviour, never about hypothetical futures.",
        "Compliments are noise; commitments (time, reputation, money) are signal.",
        "Existing spending and painful workarounds are the best proof a problem is real."
      ]
    },

    /* ---------------------------------------------------------------- 3 */
    {
      id: "validation-3",
      title: "Problem/solution fit & MVP types",
      level: "Intermediate",
      minutes: 15,
      hook: "Dropbox validated a product that did not yet work for most users — with a three-minute video.",
      eli5: `Before building a whole treehouse, you might draw it and ask friends if they would come over to play. Or you could put a blanket over two chairs and see if anyone actually crawls in. An MVP is the blanket fort: a quick, cheap version that shows whether people really want the treehouse.`,
      blocks: [
        {
          type: "text",
          title: "Problem/solution fit first",
          html: `<p><b>Problem/solution fit</b> means: a specific group has a painful problem, and your proposed solution addresses it in a way they value. You reach it before <b>product–market fit</b> (a real product, retained and paid for at scale).</p>
<p>Evidence of problem/solution fit: repeated pain in interviews, costly workarounds, early adopters asking "when can I get it?", and first commitments (deposits, pilots, LOIs).</p>`
        },
        {
          type: "framework",
          name: "The MVP spectrum (cheapest to most real)",
          by: "Lean Startup practice (Ries, Blank, Bland & Osterwalder's Testing Business Ideas)",
          when: "Choose the cheapest MVP that can test your riskiest assumption.",
          steps: [
            { label: "Explainer video / demo", desc: "Show what the product would do. Measures interest (sign-ups). Example: Dropbox's 2007–08 demo video." },
            { label: "Landing page / smoke test", desc: "A page describing the offer with a sign-up or 'buy' button. Measures conversion from targeted traffic. Example: Buffer." },
            { label: "Fake door", desc: "A button or menu item for a feature that does not exist yet; clicking shows 'coming soon'. Measures real demand inside an existing product." },
            { label: "Concierge MVP", desc: "You deliver the service manually and openly, customer by customer. Measures whether the outcome is valued. Example: Food on the Table." },
            { label: "Wizard-of-Oz MVP", desc: "The customer sees an automated product, but humans do the work behind the curtain. Measures whether the experience is valued before you build the tech." },
            { label: "Pre-sales / crowdfunding", desc: "Customers pay (or deposit) before the product exists. The strongest signal. Example: Pebble on Kickstarter, 2012." },
            { label: "Single-feature product", desc: "A real, working product that does one job very well. Measures retention." }
          ]
        },
        {
          type: "case",
          company: "Dropbox",
          year: "2007–2008",
          title: "A video as an MVP",
          situation: `File syncing that 'just works' was technically hard to build, and Drew Houston struggled to convince investors that people wanted it — many existing sync products had disappointed users.`,
          decision: `He made a short screencast demonstrating how Dropbox would work, full of in-jokes for the tech community, and posted it online (notably to Digg/Hacker News audiences).`,
          outcome: `As Eric Ries recounts in The Lean Startup, the beta waiting list jumped from about 5,000 to about 75,000 people essentially overnight. That validated demand before the full product was ready for the public.`,
          lesson: `When building is expensive, test demand with a representation of the product. The video targeted early adopters — exactly the segment that would try a beta.`
        },
        {
          type: "case",
          company: "Buffer",
          year: "2010",
          title: "Two-page landing test",
          situation: `Joel Gascoigne wanted to build a tool to schedule tweets but did not know if people would pay.`,
          decision: `He put up a page explaining the product with a 'Plans and Pricing' button. Clicking it said the product was not ready and asked for an email. He then added a page with actual price tiers between the two steps to test willingness to pay.`,
          outcome: `Enough people clicked through the pricing page and left emails that he built the first version in weeks, and Buffer had paying customers soon after launch.`,
          lesson: `A landing page can test two things in sequence: interest, then interest at a price. Add the price step — free interest is cheap.`
        },
        {
          type: "compare",
          title: "Concierge vs Wizard-of-Oz",
          headers: ["", "Concierge", "Wizard-of-Oz"],
          rows: [
            ["Customer knows a human does it?", "Yes", "No — looks automated"],
            ["Tests", "Is the outcome valuable?", "Is the product experience valuable?"],
            ["Example", "Food on the Table: founder personally planned meals and shopping lists for the first family", "Early Aardvark (Q&A service, later bought by Google) routed questions with humans behind the scenes while testing"],
            ["Risk", "Hard to scale; small sample", "Ethical/transparency concerns; must automate before scale"]
          ]
        },
        {
          type: "callout",
          kind: "example",
          title: "Pre-sales: the gold standard",
          html: `<p>Pebble raised over $10 million on Kickstarter in 2012 for a smartwatch that did not yet exist — clear proof of willingness to pay. Tesla took refundable deposits for the Model 3 in 2016 from hundreds of thousands of people before production.</p>
<p>Lesson: if people will give you money for a promise, demand is real. But pre-sales create an obligation — Pebble later struggled with manufacturing and was sold in 2016.</p>`
        },
        {
          type: "scenario",
          prompt: "You run a 10,000-user note-taking app and want to know if users want an AI meeting-summary feature that would take 3 months to build. Which MVP first?",
          options: [
            { text: "Build the full feature — you have users already.", feedback: "Three months of engineering before any evidence. Too expensive a test.", good: false },
            { text: "Fake door: add a 'Summarise meeting (beta)' button and measure click-through, then offer a waitlist.", feedback: "Good — cheap, measures real behaviour inside the product. Be honest in the 'coming soon' message.", good: true },
            { text: "Survey users: 'Would you like AI summaries?'", feedback: "Most will say yes; stated interest overestimates demand.", good: false }
          ]
        },
        {
          type: "interactive",
          widget: "funnel",
          title: "Model your landing-page MVP",
          note: "Set 2,000 visitors, 20% click 'pricing', 30% leave an email, 10% pre-pay. How many paying customers? Which step would you try to improve first?"
        }
      ],
      terms: [
        { term: "Problem/solution fit", def: "Evidence that a specific segment has a painful problem and values your proposed solution." },
        { term: "Concierge MVP", def: "Delivering the service manually and openly to learn what customers value." },
        { term: "Wizard-of-Oz MVP", def: "A front-end that looks automated while humans secretly do the work." },
        { term: "Fake door test", def: "Offering a feature or product that does not exist yet to measure how many try to use it." },
        { term: "Smoke test", def: "A landing page or ad that measures demand before the product exists." },
        { term: "Pre-sale", def: "Collecting payment or a deposit before delivery — strongest evidence of demand." }
      ],
      quiz: [
        { q: "Dropbox's early MVP was mainly…", options: ["A working enterprise product", "A demo video", "A concierge service", "A pop-up shop"], answer: 1, explain: "A screencast showing how the product would work grew the beta waitlist dramatically." },
        { q: "In a Wizard-of-Oz MVP, the customer…", options: ["Knows a human is doing the work", "Pays nothing ever", "Believes the product is automated", "Must sign an NDA"], answer: 2, explain: "Humans work behind the curtain; the customer sees a 'real' product." },
        { q: "Which MVP gives the strongest evidence of willingness to pay?", options: ["Explainer video", "Social media poll", "Fake door click", "Pre-sale with payment"], answer: 3, explain: "Money changing hands beats every other signal." },
        { q: "Buffer added a pricing page between the landing page and email sign-up in order to…", options: ["Test willingness to pay, not just interest", "Improve SEO", "Comply with regulations", "Reduce traffic"], answer: 0, explain: "It tested whether interest survived seeing a price." },
        { q: "1,000 visitors, 8% click 'Buy', 25% of those leave a card. How many pre-orders?", options: ["8", "20", "80", "250"], answer: 1, explain: "1,000 × 8% = 80 clicks; 80 × 25% = 20 pre-orders." }
      ],
      challenge: {
        title: "Pick and design an MVP",
        prompt: `You want to launch an AI tutor for high-school maths that adapts to each student. Building the real adaptive engine would take ~6 months and $150k. Your riskiest assumptions: (a) parents will pay $30/month, (b) students will keep using it weekly. Design a sequence of two MVPs (each under 4 weeks) with success thresholds.`,
        hints: ["One MVP for willingness to pay, one for engagement.", "Concierge or Wizard-of-Oz can simulate the AI tutor.", "Write the threshold before the test."],
        model: `<p><b>MVP 1 — Landing page + pre-sale (week 1–2), tests (a):</b> Target parents via school WhatsApp groups and $500 of local ads. Page offers "AI maths tutor, $30/month, first 50 families get founding price." Collect a $30 refundable first-month payment.<br>Success: ≥ 3% of visitors pay (e.g. ≥ 30 of 1,000).</p>
<p><b>MVP 2 — Wizard-of-Oz tutor (weeks 3–6), tests (b):</b> The 30 paying students use a simple chat interface; behind it, two maths tutors (helped by an off-the-shelf LLM) reply and pick practice problems. Track weekly active use.<br>Success: ≥ 60% still active in week 4, and ≥ 50% of parents renew at full price.</p>
<p><b>Decision:</b> pass both → build the adaptive engine, starting with the problem types tutors spent most time on. Fail (a) → test a cheaper price or sell to schools. Fail (b) → interview churned students before building anything.</p>`
      },
      takeaways: [
        "Reach problem/solution fit before trying to scale a product.",
        "Pick the cheapest MVP that can test your riskiest assumption.",
        "Concierge tests the outcome; Wizard-of-Oz tests the experience.",
        "Pre-sales are the strongest demand signal — but they create obligations."
      ]
    },

    /* ---------------------------------------------------------------- 4 */
    {
      id: "validation-4",
      title: "Market sizing: TAM, SAM, SOM",
      level: "Intermediate",
      minutes: 14,
      hook: "Investors hear '1% of a $100-billion market' every day — and they ignore it. Here is how to size a market they will believe.",
      eli5: `Imagine all the kids in your country who like ice cream — that is the total market. The kids in your town who can walk to your stand are the market you can actually serve. The kids who will really buy from you this summer, instead of from the shop down the road, are the slice you can realistically win.`,
      blocks: [
        {
          type: "framework",
          name: "TAM → SAM → SOM",
          by: "Standard venture/consulting practice",
          when: "Pitch decks, deciding whether an opportunity is big enough, choosing a beachhead segment.",
          steps: [
            { label: "TAM — Total Addressable Market", desc: "Total annual revenue if every possible customer in the world bought your type of solution." },
            { label: "SAM — Serviceable Available Market", desc: "The part of TAM your product and business model can actually reach: right geography, segment, language, channel, regulation." },
            { label: "SOM — Serviceable Obtainable Market", desc: "The share of SAM you can realistically win in 3–5 years given competition, sales capacity and budget." }
          ]
        },
        {
          type: "compare",
          title: "Top-down vs bottom-up",
          headers: ["", "Top-down", "Bottom-up"],
          rows: [
            ["Starts from", "Industry reports (e.g. 'global fitness market')", "Count of real customers × price"],
            ["Speed", "Fast", "Slower; needs research"],
            ["Credibility", "Low with investors — easy to inflate", "High — shows you understand customers"],
            ["Typical error", "Market defined too broadly", "Underestimating new uses / expansion"],
            ["Use it for", "Sanity check of the ceiling", "Your plan and your pitch"]
          ]
        },
        {
          type: "formula",
          name: "Bottom-up market size",
          expr: "Market size = Number of target customers × Purchase frequency per year × Average price",
          explain: "Count customers you could identify by name or category (e.g. dental clinics in Germany), multiply by how often they buy and what they pay. For SaaS: customers × annual contract value (ACV).",
          example: "Scheduling software for dental clinics in Germany. About 40,000 clinics (assumption to verify from official registries) × €1,200/year = €48M SAM. If you can win 8% in 5 years: SOM ≈ 3,200 clinics × €1,200 = €3.84M ARR."
        },
        {
          type: "interactive",
          widget: "tam-sam-som",
          title: "Size a market",
          note: "Start with a big TAM, then narrow by geography and segment. Notice how quickly a 'billion-dollar' market becomes a few million in realistic SOM — that is normal and honest."
        },
        {
          type: "callout",
          kind: "warning",
          title: "The 1% fallacy",
          html: `<p>"The market is $50B; if we get just 1% we make $500M." This tells an investor you have not thought about <b>how</b> you will win customers. Always show the path: number of sales reps × deals per rep, or marketing budget ÷ CAC = customers per year.</p>`
        },
        {
          type: "case",
          company: "Uber (valuation debate)",
          year: "2014",
          title: "How you define the market changes everything",
          situation: `In 2014 NYU professor Aswath Damodaran valued Uber by treating its market as the existing taxi and car-service market — giving a value well below what investors were paying.`,
          decision: `Investor Bill Gurley (Benchmark, an Uber backer) replied publicly that the market was not just taxis: cheaper, more convenient rides could replace car ownership and create new trips, so the market could be far larger than taxis.`,
          outcome: `Ride-hailing did grow well beyond the old taxi market in many cities, though Uber took many years to become profitable. Damodaran himself later acknowledged the 'total market' debate as a key lesson.`,
          lesson: `TAM is not fixed. New products that are cheaper or more convenient can expand a market. But expansion stories must be backed by evidence of new behaviour, not hope.`
        },
        {
          type: "flip",
          title: "Quick checks",
          cards: [
            { front: "What is a beachhead market?", back: "A small, specific segment you can dominate first, then expand from (term popularised by Geoffrey Moore's Crossing the Chasm)." },
            { front: "Why do investors prefer bottom-up?", back: "It is built from countable customers and real prices, so it reveals whether you understand the business." },
            { front: "SAM vs SOM?", back: "SAM = what you could serve; SOM = what you can realistically win given competition and capacity." },
            { front: "Name one way TAM can grow.", back: "A cheaper/easier product brings in non-consumers (e.g. ride-hailing creating new trips)." }
          ]
        }
      ],
      terms: [
        { term: "TAM", def: "Total Addressable Market: total yearly revenue opportunity if everyone who could buy did." },
        { term: "SAM", def: "Serviceable Available Market: the portion of TAM your offer and model can actually reach." },
        { term: "SOM", def: "Serviceable Obtainable Market: the share of SAM you can realistically capture in a few years." },
        { term: "Bottom-up sizing", def: "Building market size from customer counts × frequency × price." },
        { term: "Top-down sizing", def: "Starting from a total industry figure and narrowing with percentages." },
        { term: "Beachhead market", def: "A narrow first segment to dominate before expanding." },
        { term: "ACV", def: "Annual Contract Value: average yearly revenue per customer contract." }
      ],
      quiz: [
        { q: "Which method is generally more credible to investors?", options: ["Top-down from a big industry report", "Bottom-up from customer counts and prices", "Taking 1% of the world market", "Copying a competitor's number"], answer: 1, explain: "Bottom-up shows you know who the customers are and what they pay." },
        { q: "5,000 target gyms × $3,000 per year. What is the market size?", options: ["$1.5M", "$150M", "$15M", "$1.5B"], answer: 2, explain: "5,000 × $3,000 = $15,000,000." },
        { q: "SOM is…", options: ["The total world market", "The market you can serve", "The market your competitors own", "The share you can realistically win"], answer: 3, explain: "SOM = obtainable share given competition, capacity and time." },
        { q: "What was Bill Gurley's main argument against a taxi-sized valuation of Uber?", options: ["The market could expand beyond taxis as rides got cheaper and easier", "Uber was already profitable", "Taxis would be banned", "The market was smaller than thought"], answer: 0, explain: "Better, cheaper products can create new demand and expand the TAM." }
      ],
      challenge: {
        title: "Size a B2B market bottom-up",
        prompt: `You are building inventory software for independent pharmacies in India. Assume about 600,000 retail pharmacies (verify in real life), of which about 30% are in cities where you can sell and support. Price: ₹12,000/year. Your sales team can sign up roughly 4,000 pharmacies in year 1, growing 2× per year. Compute TAM, SAM and a 3-year SOM, and comment on the pitch.`,
        hints: ["TAM = all pharmacies × price.", "SAM = reachable share × price.", "SOM comes from sales capacity, not a percentage."],
        model: `<ul>
<li><b>TAM:</b> 600,000 × ₹12,000 = ₹720 crore (₹7.2B) per year.</li>
<li><b>SAM:</b> 30% × 600,000 = 180,000 pharmacies × ₹12,000 = ₹216 crore (₹2.16B).</li>
<li><b>SOM (capacity-based):</b> Year 1: 4,000; Year 2: 8,000 new; Year 3: 16,000 new. Cumulative ≈ 28,000 (before churn) × ₹12,000 ≈ ₹33.6 crore ARR — about 15.6% of SAM.</li>
</ul>
<p><b>Comment:</b> 15% of SAM in 3 years is aggressive; assume churn (say 15%/yr) and show a downside case of ~20,000 customers. The pitch is credible because SOM is built from sales capacity. Upside story: expand to ordering, credit and distributor payments to raise revenue per pharmacy.</p>`
      },
      takeaways: [
        "TAM is the ceiling, SAM is what you can reach, SOM is what you can win.",
        "Build your numbers bottom-up: customers × frequency × price.",
        "Derive SOM from capacity (sales, marketing budget ÷ CAC), never from '1%'.",
        "Market definitions can expand — but only with evidence of new behaviour."
      ]
    },

    /* ---------------------------------------------------------------- 5 */
    {
      id: "validation-5",
      title: "Experiments & metrics that matter",
      level: "Intermediate",
      minutes: 14,
      hook: "Vanity metrics make you feel good; actionable metrics make you decide.",
      eli5: `If you count how many people walked past your lemonade stand, you feel busy. If you count how many bought a second cup the next day, you learn whether your lemonade is good. Experiments work best when you decide which number matters before you start.`,
      blocks: [
        {
          type: "framework",
          name: "Test card (experiment design)",
          by: "Strategyzer / David Bland & Alex Osterwalder, Testing Business Ideas (2019)",
          when: "Before every experiment — write it down in one minute.",
          steps: [
            { label: "We believe that…", desc: "The hypothesis (one at a time)." },
            { label: "To verify that, we will…", desc: "The experiment: what you build/do, for whom, for how long." },
            { label: "And measure…", desc: "One primary metric (plus guardrails)." },
            { label: "We are right if…", desc: "The threshold, written before you see the data." },
            { label: "Then we will…", desc: "The decision you commit to for each outcome." }
          ]
        },
        {
          type: "compare",
          title: "Vanity vs actionable metrics",
          headers: ["", "Vanity metric", "Actionable metric"],
          rows: [
            ["Website", "Total page views", "Visitor → sign-up conversion by channel"],
            ["App", "Total downloads", "Week-4 retention of each cohort"],
            ["Social", "Followers", "Clicks that become paying customers"],
            ["Sales", "Meetings booked", "Pipeline converted to paid contracts"],
            ["Why it matters", "Always goes up; flatters", "Can go down; tells you what to change"]
          ]
        },
        {
          type: "formula",
          name: "Cohort retention",
          expr: "Retention (week N) = Users from cohort still active in week N ÷ Users who started in that cohort",
          explain: "A cohort is a group that started in the same period (e.g. all sign-ups in March). Tracking each cohort separately shows whether the product is getting better over time.",
          example: "March cohort: 400 sign-ups; 120 active in week 4 → 30%. April cohort after onboarding change: 500 sign-ups, 190 active in week 4 → 38%. The change likely helped."
        },
        {
          type: "interactive",
          widget: "ab-test",
          title: "Is the difference real?",
          note: "Try 1,000 visitors per variant with 5.0% vs 5.6% conversion — probably not significant. Now try 10,000 per variant. Small startups often need bigger effects, not more decimals."
        },
        {
          type: "callout",
          kind: "tip",
          title: "Experiments when you have little traffic",
          html: `<ul><li>Test <b>big</b> differences (new value proposition, 2× price) — small tweaks need huge samples.</li>
<li>Use qualitative depth: 10 usability sessions can beat a weak A/B test.</li>
<li>Use sequential tests: run one version for a week, then the other — accept it is noisier.</li>
<li>Track <b>one metric that matters</b> at a time (Alistair Croll & Ben Yoskovitz, Lean Analytics).</li></ul>`
        },
        {
          type: "framework",
          name: "AARRR — Pirate metrics",
          by: "Dave McClure, 2007",
          when: "To find which stage of the customer journey is the bottleneck.",
          steps: [
            { label: "Acquisition", desc: "How do people find you? (visits, sign-ups by channel)" },
            { label: "Activation", desc: "Do they have a great first experience? (reach the 'aha' moment)" },
            { label: "Retention", desc: "Do they come back? (cohort curves)" },
            { label: "Referral", desc: "Do they tell others? (invites, K-factor)" },
            { label: "Revenue", desc: "Do they pay? (conversion to paid, ARPU)" }
          ]
        },
        {
          type: "scenario",
          prompt: "Your app got 50,000 downloads after a viral post. Week-1 retention is 4%; for your earlier, small organic cohorts it was 25%. The team wants to celebrate and spend on more ads. What do you advise?",
          options: [
            { text: "Celebrate and buy ads — downloads prove demand.", feedback: "Downloads are a vanity metric here. 4% retention means the new users did not find value.", good: false },
            { text: "Pause paid growth; study the retained 25% organic users and fix activation for the new segment first.", feedback: "Yes. Pouring users into a leaky bucket wastes money. Find who retains and why.", good: true },
            { text: "Shut the product down.", feedback: "Too drastic — the organic cohort shows a valuable segment may exist.", good: false }
          ]
        },
        {
          type: "case",
          company: "Obama 2008 campaign",
          year: "2007–2008",
          title: "One A/B test, millions of dollars",
          situation: `The campaign's digital team (led on analytics by Dan Siroker, who later co-founded Optimizely) wanted more website visitors to sign up with their email address — sign-ups later turned into volunteers and donors.`,
          decision: `Instead of debating designs, they tested combinations of splash-page images and button text (e.g. 'Sign Up' vs 'Learn More') on real traffic.`,
          outcome: `The winning combination — a family photo with a 'Learn More' button — raised the sign-up rate substantially versus the original, and the team estimated it brought in millions of additional email addresses and significant extra donations. Several staff favourites, including videos, performed worse.`,
          lesson: `Experts' opinions are hypotheses too. When you have traffic, let a properly designed test decide.`
        },
        {
          type: "checklist",
          title: "Experiment hygiene",
          items: [
            "One hypothesis per experiment",
            "Primary metric and threshold written in advance",
            "Sample size or duration decided in advance",
            "Guardrail metric (e.g. refunds, complaints) monitored",
            "Result and decision logged in a shared experiment log"
          ]
        }
      ],
      terms: [
        { term: "Vanity metric", def: "A number that looks impressive but does not guide decisions (e.g. total sign-ups)." },
        { term: "Actionable metric", def: "A metric tied to a specific behaviour that you can influence and learn from." },
        { term: "Cohort", def: "A group of users who started in the same period, tracked together over time." },
        { term: "Statistical significance", def: "Confidence that a difference between variants is unlikely to be random noise." },
        { term: "AARRR", def: "Acquisition, Activation, Retention, Referral, Revenue — a funnel for diagnosing growth." },
        { term: "Guardrail metric", def: "A metric you watch to make sure an experiment does not cause harm elsewhere." },
        { term: "One Metric That Matters", def: "The single most important number for your current stage (Lean Analytics)." }
      ],
      quiz: [
        { q: "Which is an actionable metric?", options: ["Total registered users", "Week-4 retention for the May cohort", "Social media followers", "Press mentions"], answer: 1, explain: "Cohort retention shows whether the product delivers lasting value and responds to changes." },
        { q: "Cohort of 800 users, 200 active in week 6. Retention?", options: ["4%", "40%", "25%", "75%"], answer: 2, explain: "200 ÷ 800 = 25%." },
        { q: "With low traffic, what should you A/B test?", options: ["Big, bold differences", "Button shade of blue", "Font size by 1px", "Nothing ever"], answer: 0, explain: "Small effects need very large samples to detect." },
        { q: "In AARRR, 'Activation' means…", options: ["Users paying", "Users inviting friends", "Users visiting the site", "Users reaching a great first experience / 'aha' moment"], answer: 3, explain: "Activation is the first moment of real value." },
        { q: "Why write the success threshold before the test?", options: ["It is legally required", "To avoid reinterpreting results to fit what you hoped", "It makes tests faster", "Investors demand it"], answer: 1, explain: "Pre-commitment protects against confirmation bias." }
      ],
      challenge: {
        title: "Design a pricing experiment",
        prompt: `Your B2B scheduling tool converts 4% of trial users to paid at $29/month. You get ~1,500 trials a month. The CEO wants to test $49/month. Write a test card and explain how you would decide, including what 'win' means in revenue terms.`,
        hints: ["Compare revenue per trial, not conversion alone.", "Pick a guardrail metric.", "At what conversion does $49 break even with $29?"],
        model: `<p><b>We believe</b> customers value the tool enough that a $49 price will not reduce conversion proportionally.</p>
<p><b>We will</b> randomly split new trials 50/50 for 4 weeks (~750 per arm) between $29 and $49.</p>
<p><b>Measure</b> revenue per trial = conversion × price. <b>Guardrails:</b> 60-day churn, support tickets about price.</p>
<p><b>Break-even:</b> at $29 × 4% = $1.16 per trial. $49 needs conversion ≥ 1.16 ÷ 49 = <b>2.37%</b>.</p>
<p><b>We are right if</b> $49 conversion is ≥ 3% (giving $1.47 per trial, +27%) and 60-day churn is not meaningfully worse.</p>
<p><b>Then:</b> win → roll out $49 and add a cheaper starter tier for price-sensitive users. Lose → keep $29 and test packaging (annual plan, feature tiers) instead. Note: with ~750 trials per arm, small differences will not be significant, so only act on a clear gap.</p>`
      },
      takeaways: [
        "Write a test card: hypothesis, experiment, metric, threshold, decision.",
        "Track cohorts and actionable metrics, not vanity totals.",
        "With little traffic, test bold changes and use qualitative depth.",
        "Use AARRR to find the real bottleneck before spending on growth."
      ]
    },

    /* ---------------------------------------------------------------- 6 */
    {
      id: "validation-6",
      title: "Product–market fit & pivot vs persevere",
      level: "Advanced",
      minutes: 16,
      hook: "Marc Andreessen said you can always feel when product–market fit is happening — and when it is not.",
      eli5: `Think of a new song. If only your friends play it to be nice, it is not a hit. If strangers keep playing it again and again and teaching it to others, it is a hit. Product–market fit is when your product becomes a 'hit' with a specific group — and pivoting is when you rewrite the song because the current one is not catching on.`,
      blocks: [
        {
          type: "text",
          title: "What product–market fit (PMF) is",
          html: `<p>Marc Andreessen (2007): PMF means "being in a good market with a product that can satisfy that market." Before PMF, focus on nothing else. After PMF, the job switches to scaling.</p>
<p>Signals that you have it: <span class="hl">retention curves flatten</span>, customers buy without heavy persuasion, word of mouth drives growth, sales cycles shorten, and users are upset when the product breaks. Signals you do not: growth only comes from paid spend, churn stays high, every deal needs the founder.</p>`
        },
        {
          type: "formula",
          name: "Sean Ellis PMF test",
          expr: "PMF score = % of active users answering 'Very disappointed' to 'How would you feel if you could no longer use this product?'",
          explain: "Options: Very disappointed / Somewhat disappointed / Not disappointed / I no longer use it. Survey users who have used the product recently and meaningfully. Sean Ellis found that products scoring around 40% or more 'very disappointed' tended to grow well.",
          example: "You survey 250 active users: 85 very, 110 somewhat, 55 not disappointed. Score = 85 ÷ 250 = 34% — close but below the 40% benchmark. Study the 85 to learn who they are and what they love."
        },
        {
          type: "case",
          company: "Superhuman",
          year: "2017–2019",
          title: "Turning PMF into an engine",
          situation: `Founder Rahul Vohra (as he described in a widely read First Round Review article) found that Superhuman's email client scored 22% on the Sean Ellis test — well short of 40%.`,
          decision: `He segmented: who said 'very disappointed'? He narrowed to that high-expectation customer profile, asked them what they loved most, then asked 'somewhat disappointed' users what held them back. The roadmap split roughly half on doubling down on what lovers loved, half on fixing blockers for the nearly-convinced.`,
          outcome: `By focusing on the right segment, the score jumped substantially immediately; over about three quarters of work it climbed to 58%, and Vohra tracked it as a core metric.`,
          lesson: `PMF is measurable and improvable. Segment to find who loves you, understand why, and build for the people who are almost there — not for everyone.`
        },
        {
          type: "interactive",
          widget: "retention",
          title: "Does your curve flatten?",
          note: "Set monthly churn to 15% then 3%. A curve that keeps falling to zero means no PMF. A curve that flattens (a stable core keeps using it) is the strongest quantitative PMF signal."
        },
        {
          type: "framework",
          name: "Types of pivots",
          by: "Eric Ries, The Lean Startup",
          when: "When evidence shows the current strategy will not reach PMF, but you have learned something valuable.",
          steps: [
            { label: "Zoom-in pivot", desc: "One feature becomes the whole product (Instagram: from the Burbn check-in app to photo sharing, 2010)." },
            { label: "Zoom-out pivot", desc: "The product becomes one feature of a bigger product." },
            { label: "Customer-segment pivot", desc: "Same product, different customer who values it more." },
            { label: "Customer-need pivot", desc: "Same customer, different and more important problem." },
            { label: "Platform pivot", desc: "From an application to a platform, or the reverse." },
            { label: "Business-model / value-capture pivot", desc: "Change how you make money (e.g. from licence to subscription)." },
            { label: "Technology pivot", desc: "Same solution delivered with a different, cheaper or better technology." }
          ]
        },
        {
          type: "case",
          company: "Slack (Tiny Speck)",
          year: "2012–2014",
          title: "The game failed; the internal tool won",
          situation: `Stewart Butterfield's company Tiny Speck built an online game, Glitch. It did not attract enough players and was shut down in 2012.`,
          decision: `The team had built an internal chat tool to coordinate their own work. They realised it was more valuable than the game and pivoted the company to it.`,
          outcome: `Slack launched publicly in 2014, grew quickly through word of mouth inside companies, and was acquired by Salesforce in a deal announced in 2020 (about $27.7 billion).`,
          lesson: `Pivots keep what you learned and built (team, tech, insight) and change direction. Butterfield had done something similar before: Flickr also grew out of a game project.`
        },
        {
          type: "compare",
          title: "Pivot, persevere or stop?",
          headers: ["Evidence", "Persevere", "Pivot", "Stop"],
          rows: [
            ["Retention", "Flattening curve in a segment", "Falling to zero, but one segment or feature retains", "Falls to zero everywhere"],
            ["Customer pull", "Inbound demand, referrals", "Strong pull for something adjacent", "None after many tries"],
            ["Learning", "Each loop improves key metric", "Metrics stuck; clear new insight", "Metrics stuck; no new insight"],
            ["Runway", "Enough to reach next milestone", "Enough for 1–2 more loops", "Not enough for a real test"]
          ]
        },
        {
          type: "callout",
          kind: "insight",
          title: "Avoid the 'land of the living dead'",
          html: `<p>The most common failure is not a clear flop but a product with <i>some</i> traction — enough to keep going, not enough to grow. Ries calls this the danger of never deciding. Fix it with regular <b>pivot-or-persevere meetings</b> (e.g. every 6–8 weeks) using the pre-agreed metrics. Quibi (2020) shows the opposite trap: it raised well over a billion dollars and launched big without validating demand, then shut down within about a year.</p>`
        },
        {
          type: "checklist",
          title: "PMF review (monthly)",
          items: [
            "Sean Ellis score measured on active users (target ≥ 40%)",
            "Retention curves plotted by cohort — do they flatten?",
            "Share of new users from word of mouth / organic tracked",
            "Who are the 'very disappointed' users? Is our ICP sharp?",
            "Pivot/persevere decision recorded with reasons"
          ]
        }
      ],
      terms: [
        { term: "Product–market fit (PMF)", def: "When a product satisfies a strong market demand so well that customers retain, pay and refer others." },
        { term: "Sean Ellis test", def: "Survey asking how users would feel if they could no longer use the product; ~40% 'very disappointed' is the common benchmark." },
        { term: "Retention curve", def: "A chart of the % of a cohort still active over time. A flattening curve signals PMF." },
        { term: "ICP (Ideal Customer Profile)", def: "A precise description of the customer who gets the most value and is most likely to buy and stay." },
        { term: "Pivot", def: "A structured course correction that changes one fundamental element of the strategy." },
        { term: "Persevere", def: "Keep the current strategy because evidence shows progress toward PMF." },
        { term: "HXC", def: "High-expectation customer — Superhuman's term for the demanding user who gets the most value." }
      ],
      quiz: [
        { q: "300 active users surveyed: 126 'very disappointed'. Sean Ellis score?", options: ["30%", "36%", "42%", "126%"], answer: 2, explain: "126 ÷ 300 = 42% — above the 40% benchmark." },
        { q: "Which retention pattern most strongly suggests PMF?", options: ["Steady decline to zero", "Curve that flattens at a stable level", "High week-1, then zero", "Spikes after every ad campaign"], answer: 1, explain: "A flat tail means a core group keeps getting value." },
        { q: "Instagram moving from the Burbn app to photo sharing was a…", options: ["Zoom-in pivot", "Platform pivot", "Business-model pivot", "Technology pivot"], answer: 0, explain: "One feature (photos) became the whole product." },
        { q: "What did Superhuman do first to raise its PMF score?", options: ["Lowered price", "Bought ads", "Built every requested feature", "Segmented to find who loved the product and focused on them"], answer: 3, explain: "Focus on the high-expectation segment, then fix blockers for the nearly-convinced." },
        { q: "Slack originated from…", options: ["A university project", "An internal tool built while making a game", "An acquisition", "A government contract"], answer: 1, explain: "Tiny Speck built it while working on the game Glitch." }
      ],
      challenge: {
        title: "Pivot or persevere?",
        prompt: `Your fitness-coaching app (18 months old, 9 months runway) has 6,000 users. Overall monthly churn is 18%; no flattening. Sean Ellis score: 19% overall — but among physiotherapy patients recovering from injuries (11% of users) it is 52%, and their 6-month retention is 45%. They found you by word of mouth from physios. What do you recommend and how would you execute it?`,
        hints: ["Look for the segment that already has PMF signals.", "What kind of pivot is this?", "Define the milestone and metric for the next 3 months."],
        model: `<p><b>Recommendation: customer-segment pivot</b> toward injury rehabilitation, not a full restart.</p>
<ul>
<li><b>Evidence:</b> the rehab segment scores 52% (>40%), has a flattening retention curve (45% at 6 months vs falling to near zero overall) and grows via physio referrals — all PMF signals.</li>
<li><b>Why not persevere:</b> 19% overall and 18% churn without flattening means the general fitness market is not working; 9 months of runway does not allow drifting.</li>
<li><b>Execution (next 90 days):</b> interview 20 rehab users and 10 physios; rebuild onboarding around rehab programmes; launch a physio referral/partner channel (physios as distribution); test pricing per recovery programme and possible insurer or clinic payment.</li>
<li><b>Milestone:</b> 1,500 rehab users, Sean Ellis ≥ 45% in the new ICP, 3-month retention ≥ 50%, 30% of sign-ups via physios. Hit it → raise on this story. Miss it → reassess with ~5 months runway left.</li>
</ul>`
      },
      takeaways: [
        "PMF shows up as flattening retention, word of mouth and customer pull.",
        "Use the Sean Ellis test (≥ 40% 'very disappointed') and segment the results.",
        "Pivot = change one big thing while keeping what you learned.",
        "Hold regular, metric-based pivot-or-persevere meetings to avoid the living-dead zone."
      ]
    }
  ]
});
