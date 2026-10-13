/* MBA Studio — Track 23: Business Communication */
MBA.addTrack({
  id: "communication",
  stage: 3,
  order: 23,
  title: "Business Communication",
  icon: "✍️",
  color: "#4d7c0f",
  tagline: "Make busy people understand, agree and act",
  summary: `Good ideas lose to clearly communicated ones every day. In this track you will learn to write emails, memos and decision documents that get read; structure arguments with the Pyramid Principle; build slides and charts that make one point honestly; and handle the highest-stakes moments — board meetings, investor updates, crises and layoffs — with clarity and humanity.`,
  outcomes: [
    "Write plain-English business messages with the bottom line up front",
    "Restructure a rambling draft into a Pyramid / SCQA argument",
    "Write narrative memos, one-pagers and decision documents in the Amazon style",
    "Design slide storylines with action titles, horizontal and vertical logic",
    "Choose, annotate and honestly scale charts for executive audiences",
    "Draft board updates, investor updates and crisis or layoff communications"
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: "communication-1",
      title: "Clear business writing: audience, purpose, plain English and BLUF",
      level: "Beginner",
      minutes: 13,
      hook: "Most business writing fails before the first word — because the writer never decided who it is for and what they should do next.",
      eli5: `Imagine shouting “Dinner!” up the stairs versus giving a long speech about how you shopped, chopped onions, and what the weather was like — and only at the very end saying dinner is ready. Your family would stop listening halfway. Business writing works the same way: say the important thing first, in simple words, so the reader knows exactly what to do.`,
      blocks: [
        {
          type: "text", title: "Writing is a product, the reader is the customer",
          html: `<p>Every email, report and message costs the reader <b>attention</b>, the scarcest resource in any company. A senior manager may receive hundreds of messages a day and give most of them a few seconds.</p><p>So treat writing like product design. Before you write, answer three questions:</p><ul><li><b>Who</b> exactly is reading? (Their role, what they already know, what they care about.)</li><li><b>Why</b> am I writing? (To inform, to get a decision, to ask for help, to persuade.)</li><li><b>What</b> should they do or believe after reading?</li></ul><p>If you cannot answer the third question in one sentence, you are not ready to write.</p>`
        },
        {
          type: "framework", name: "The APB check: Audience, Purpose, Bottom line", by: "Synthesis of standard business-writing practice", when: "Before writing any message longer than three lines",
          steps: [
            { label: "Audience", desc: "Name the reader. A CFO wants numbers and risk; an engineer wants specifics; a customer wants to know what changes for them. Write for the most important reader, not for everyone." },
            { label: "Purpose", desc: "Pick one verb: inform, request, decide, persuade, apologise. Messages that try to do three things usually do none." },
            { label: "Bottom line", desc: "Write the one sentence you most need them to remember. This goes at the top." },
            { label: "Action", desc: "State what you need, from whom, by when: “Please approve by Thursday 5 pm.”" },
            { label: "Support", desc: "Only then add the reasons and evidence, shortest first, in the order the reader needs them." },
            { label: "Cut", desc: "Re-read as the reader. Delete anything that does not help them act." }
          ]
        },
        {
          type: "callout", kind: "example", title: "Before / after: the BLUF rewrite",
          html: `<p><b>Before (142 words, the ask is in the last line):</b><br><i>“Hi all, as you know we have been looking at the warehouse situation for a few weeks now. Priya and I visited the two sites and met the landlords. Site A is closer to the motorway but the rent is higher, and Site B has more space but would need some work on the loading bays. We also talked to the logistics team, who had several views... After a lot of discussion we think Site B might be the better option on balance, assuming the loading-bay work can be done in time. We would need sign-off by Friday to hold the lease.”</i></p><p><b>After (BLUF, 58 words):</b><br><b>Subject: Decision needed by Fri — lease Site B warehouse</b><br><i>“Please approve leasing Site B by Friday, or we lose it. Why B: 30% more space for 8% more rent than Site A, enough for two years of growth. Risk: loading bays need about 6 weeks of work; the landlord will pay half. Full comparison attached.”</i></p><p>The reader now knows the decision, the deadline, the reason and the risk in ten seconds.</p>`
        },
        {
          type: "compare", title: "Plain English swaps", headers: ["Instead of", "Write", "Why"],
          rows: [
            ["We are going to be in a position to commence", "We will start", "Shorter, active"],
            ["It has been decided that the budget will be reduced", "The board cut the budget", "Says who acted (active voice)"],
            ["Leverage synergies to optimise outcomes", "Combine the two sales teams to save $2m", "Concrete beats abstract"],
            ["At this point in time", "Now", "Filler"],
            ["Revenue was impacted negatively", "Revenue fell 6%", "Name the change and the number"],
            ["Please do not hesitate to contact me", "Questions? Call me on extension 214", "Specific and usable"]
          ]
        },
        {
          type: "formula", name: "Flesch Reading Ease (a readability check)",
          expr: "Score = 206.835 − 1.015 × (words ÷ sentences) − 84.6 × (syllables ÷ words)",
          explain: `Developed by Rudolf Flesch in 1948. Higher is easier: roughly 60–70 is plain English most adults read comfortably; below 30 reads like an academic paper. It only measures sentence length and word length — it cannot tell you whether your logic is clear — but long sentences and long words are the two most common faults in business writing.`,
          example: `A 100-word draft has 5 sentences and 150 syllables: 206.835 − 1.015 × 20 − 84.6 × 1.5 = 206.835 − 20.3 − 126.9 ≈ <b>60</b>. Split it into 8 sentences and swap a few long words so it has 140 syllables: 206.835 − 1.015 × 12.5 − 84.6 × 1.4 = 206.835 − 12.69 − 118.44 ≈ <b>76</b>. Same message, noticeably easier.`
        },
        {
          type: "callout", kind: "insight", title: "Where BLUF comes from",
          html: `<p><b>BLUF — Bottom Line Up Front</b> — is a military writing convention: orders and reports put the conclusion and required action first, because the reader may be interrupted at any moment. George Orwell made a similar case for plain language in his 1946 essay <i>Politics and the English Language</i> (“Never use a long word where a short one will do”), and governments have since pushed plain-language rules, such as the US Plain Writing Act of 2010.</p>`
        },
        {
          type: "scenario",
          prompt: "You need your VP to approve $40,000 for an urgent security fix. She reads email on her phone between meetings. What is your opening line?",
          options: [
            { text: "“Hi, I wanted to give you some background on the security audit we ran last month...”", feedback: "She may never scroll down to the ask. Background first is the most common business-writing mistake.", good: false },
            { text: "“Please approve $40k today for a security fix — our customer database is exposed until it is done.”", feedback: "Right: decision, amount, deadline and the reason it matters, in one line she can act on from her phone.", good: true },
            { text: "“URGENT!!! Please read ASAP.”", feedback: "Urgency without content creates anxiety but no action. Say what is urgent and what you need.", good: false }
          ]
        },
        {
          type: "checklist", title: "Before you hit send",
          items: [
            "Subject line states the topic and the action (e.g. “Decision needed by Fri: ...”)",
            "First two lines contain the bottom line and the ask",
            "Every paragraph has one idea; most sentences under about 20 words",
            "Active voice — it is clear who does what",
            "Numbers instead of vague words (“fell 6%” not “declined somewhat”)",
            "Jargon and acronyms removed or explained for this reader",
            "Re-read once as the busiest person on the To: line"
          ]
        }
      ],
      terms: [
        { term: "BLUF", def: "Bottom Line Up Front: state the conclusion and the required action at the start of a message." },
        { term: "Plain English", def: "Writing the intended reader can understand on first reading: short sentences, common words, active voice." },
        { term: "Active voice", def: "The subject does the action (“The team missed the deadline”), rather than having it done to them (“The deadline was missed”)." },
        { term: "Audience analysis", def: "Working out who the reader is, what they know and what they need before you write." },
        { term: "Call to action", def: "The specific request you make of the reader: what, who, by when." },
        { term: "Readability score", def: "A formula such as Flesch Reading Ease that estimates how hard text is to read from sentence and word length." }
      ],
      quiz: [
        { q: "What does BLUF ask you to do?", options: ["Put background first so the reader has context", "Put the conclusion and the ask at the start", "Bold every important line", "Keep all emails under 50 words"], answer: 1, explain: "Bottom Line Up Front: the conclusion and required action come first; supporting detail follows." },
        { q: "Which sentence is in the active voice?", options: ["Mistakes were made in the forecast", "The budget has been reduced", "Finance cut the marketing budget by 10%", "It was decided that hiring would pause"], answer: 2, explain: "In the active voice the actor (Finance) is the subject and does the action." },
        { q: "A 120-word paragraph has 4 sentences. What is the average sentence length, and what should you do?", options: ["30 words — split some sentences", "12 words — fine as is", "4 words — merge sentences", "480 words — cut drastically"], answer: 0, explain: "120 ÷ 4 = 30 words per sentence, well above the roughly 15–20 word average that reads comfortably. Split them." },
        { q: "Your purpose in an email should usually be…", options: ["As broad as possible so everyone finds something useful", "Hidden until the end to build suspense", "Decided after you finish writing", "One clear verb: inform, request, decide or persuade"], answer: 3, explain: "A single purpose makes the message easy to act on. Multiple purposes are better split into separate messages." },
        { q: "Two hundred managers each spend 6 minutes decoding an unclear company-wide email. How much management time is lost?", options: ["2 hours", "12 hours", "20 hours", "200 minutes"], answer: 2, explain: "200 × 6 = 1,200 minutes = 20 hours. Unclear writing has a real, multiplied cost." }
      ],
      challenge: {
        title: "Rewrite the status email",
        prompt: `Your project lead sends this to the COO: <i>“Hi, just an update on Project Atlas. The team has been working hard. We had some issues with the vendor in March which pushed things back a bit, and testing found 14 bugs, 3 of them serious. We are fixing those. We think launch might move from 1 May to around 22 May. Also we might need about $25k more for extra testers, which would help hit the new date. Let me know what you think.”</i><br><br>Rewrite it using APB and BLUF. Include a subject line, the bottom line, the ask, the reasons and the risk.`,
        hints: ["What decision does the COO need to make? That is your first line.", "Separate facts (14 bugs, 3 serious) from asks ($25k).", "Give the COO a clear choice and the consequence of each option."],
        model: `<p><b>Subject:</b> Atlas launch moves to 22 May — approve $25k for testers by Wed to protect that date</p><p><b>Bottom line:</b> Atlas will launch on <b>22 May, three weeks late</b>. Please approve <b>$25k</b> for extra testers by Wednesday; without it, launch likely slips to mid-June.</p><p><b>Why the delay</b></p><ul><li>Vendor delivery slipped two weeks in March.</li><li>Testing found 14 bugs; <b>3 are serious</b> (data loss in checkout). All 3 have fixes in progress.</li></ul><p><b>Why the $25k</b>: two contract testers for four weeks let us run regression tests in parallel with fixes, saving roughly three weeks.</p><p><b>Risk</b>: if another serious bug appears, we will tell you by 12 May and recommend a date.</p><p><b>Options</b></p><ul><li>A. Approve $25k → launch 22 May (recommended).</li><li>B. Do not approve → launch around mid-June.</li></ul><p>Why it works: the COO can decide from the subject line alone, the ask has an amount and deadline, facts are grouped, and the recommendation is explicit. Word count fell slightly, but more importantly the decision moved from the last line to the first.</p>`
      },
      takeaways: [
        "Decide audience, purpose and bottom line before writing a word.",
        "Put the conclusion and the ask in the first two lines (BLUF).",
        "Prefer short sentences, common words, active voice and real numbers.",
        "Unclear writing has a multiplied cost — every reader pays it."
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: "communication-2",
      title: "The Pyramid Principle and SCQA in depth",
      level: "Beginner",
      minutes: 16,
      hook: "Executives do not read your argument — they read the top of it and decide whether to keep going.",
      eli5: `Think of a family tree drawn upside down. At the very top is one person — your main idea. Under it sit three “children” — the reasons. Under each child are “grandchildren” — the facts that prove that reason. If someone only looks at the top, they still get the main idea. If they want proof, they look lower. That is the Pyramid.`,
      blocks: [
        {
          type: "text", title: "Going deeper than the basics",
          html: `<p>You met the Pyramid Principle and SCQA in the C-suite track (consulting toolkit). There you learned the headline rule: <b>lead with the answer, then support it</b>. Here we go further: how to <b>build</b> a pyramid from a messy pile of findings, how to test it with the vertical and horizontal rules, how to choose between deductive and inductive logic, and how to adapt SCQA to different situations.</p><p>The method comes from Barbara Minto, who developed it while working with consultants at McKinsey and published it as <i>The Pyramid Principle</i>. The core insight is about the reader’s mind: people understand ideas faster when they get the summary first and then the supporting groups, instead of assembling the conclusion themselves.</p>`
        },
        {
          type: "framework", name: "Building a pyramid: the four rules", by: "Barbara Minto, The Pyramid Principle", when: "Turning analysis into a recommendation, memo or deck storyline",
          steps: [
            { label: "1. One governing thought at the top", desc: "A single sentence that answers the reader’s question. Not a topic (“Q3 results”) but a point (“Q3 profit fell because of freight costs, which we can recover by spring”)." },
            { label: "2. Vertical logic: question and answer", desc: "Each idea raises a question in the reader’s mind (“Why?” “How?” “Is that true?”). The ideas directly beneath it must answer exactly that question." },
            { label: "3. Horizontal logic: same kind of idea", desc: "Ideas at the same level must be of the same type (all reasons, all steps, all problems) and MECE — no overlap, no gaps." },
            { label: "4. Logical order", desc: "Order ideas in each group in one of three ways: time order (steps 1, 2, 3), structural order (regions, parts of a process), or degree order (most to least important)." },
            { label: "Test: the key line", desc: "Read only the governing thought and the 2–5 ideas directly below it. If that “key line” alone persuades a sceptic, the pyramid works. If not, fix it before writing any detail." }
          ]
        },
        {
          type: "compare", title: "Inductive vs deductive groupings", headers: ["", "Inductive (grouping)", "Deductive (chain)"],
          rows: [
            ["Shape", "Several parallel reasons that each support the point", "A sequence: statement → comment → therefore"],
            ["Example", "“Enter Brazil: market is large, competition is weak, our product fits local needs.”", "“Freight costs rose 30%. Our prices are fixed for a year. Therefore margin will fall until we renegotiate.”"],
            ["Strength", "Robust — if one reason falls, the others still stand", "Shows cause and effect clearly"],
            ["Weakness", "Reasons can feel like a list if they are not the same type", "Reader must hold every step; one broken link breaks the argument"],
            ["Use at the top of a pyramid?", "Usually yes — easier to read", "Sparingly; better lower down"]
          ]
        },
        {
          type: "framework", name: "SCQA patterns for different situations", by: "Adapted from Minto’s introduction patterns", when: "Writing the opening of any memo or presentation",
          steps: [
            { label: "Standard: S → C → Q → A", desc: "Context, then what changed, then the question, then your answer. Best when the reader needs to be brought up to speed." },
            { label: "Direct: A → S → C", desc: "Answer first, then quickly why it is needed. Best for senior readers who know the background and want the decision." },
            { label: "Concern-led: C → S → A", desc: "Lead with the problem when it is urgent and the reader may not know it yet (“Our largest customer has served notice...”)." },
            { label: "Question-led: Q → S → C → A", desc: "Open with the question the reader asked you. Good for replies and briefings." },
            { label: "Keep S short", desc: "The Situation should be something the reader already agrees with — one or two sentences. If it needs proof, it is not the situation." },
            { label: "Make C a real change", desc: "The Complication is what creates tension: a new threat, an opportunity, a gap between plan and actual. No complication, no reason to read." }
          ]
        },
        {
          type: "callout", kind: "example", title: "Before / after: a full Pyramid rewrite (illustrative company)",
          html: `<p><b>Before — chronological “here is what we did”:</b><br><i>“Over the past six weeks the team analysed our subscription business. We pulled data on 48,000 customers and interviewed 30 who cancelled. We looked at pricing, onboarding, support tickets and competitor offers. Pricing is broadly in line with competitors. Support response times have doubled since January. Many cancellations happen in the first 60 days. Customers who complete setup in week one cancel much less. A competitor launched a free tier in March. We have several ideas, including better onboarding, more support staff, and possibly a lower-price plan...”</i></p><p><b>After — Pyramid with SCQA opening:</b><br><b>S:</b> Subscriptions have driven our growth for three years.<br><b>C:</b> Monthly churn rose from 3% to 5% since January, which at current trends wipes out about a third of new sales.<br><b>Q:</b> How do we get churn back to 3%?<br><b>A (governing thought):</b> <span class="hl">Fix the first 60 days: guided setup and faster support can recover most of the lost customers, at far lower cost than a price cut.</span></p><ul><li><b>Most churn is early:</b> customers who leave in the first 60 days account for the majority of cancellations; those who finish setup in week one rarely leave.</li><li><b>Support delays are the trigger:</b> response times doubled since January, and slow support was the most common reason given in exit interviews.</li><li><b>Price is not the main problem:</b> our price is in line with rivals; the competitor’s free tier has drawn few of our paying customers so far.</li></ul><p>Notice: the key line (governing thought + three bold points) persuades on its own, the three points are all <i>reasons</i> (horizontal logic), and each answers “why should we fix the first 60 days?” (vertical logic).</p>`
        },
        {
          type: "flip", title: "Diagnose the pyramid",
          cards: [
            { front: "Top line: “Market overview”", back: "A topic, not a point. Rewrite as a sentence that answers a question: “The market is growing 12% a year but consolidating fast.”" },
            { front: "Group: “Costs are high; Raise prices; Customer survey results”", back: "Breaks horizontal logic — a problem, an action and a source mixed together. Make all three the same type." },
            { front: "Group of seven reasons", back: "Too many to hold in mind. Group them into 3–4 higher-level reasons (often 2–5 works best)." },
            { front: "Supporting points do not answer “why?” for the point above", back: "Vertical logic failure. Either the top point or the support is wrong — rewrite until each level answers the question raised by the level above." },
            { front: "Situation needs three paragraphs of evidence", back: "It is not a situation. The S should be uncontroversial; move the contested part into the Complication or the body." }
          ]
        },
        {
          type: "scenario",
          prompt: "Your CEO asks: “Should we close the Leeds office?” You have done the analysis and the answer is yes. Which opening do you use?",
          options: [
            { text: "Standard SCQA: two paragraphs on the history of the Leeds office before the recommendation.", feedback: "The CEO asked a direct question and knows the background. Making them wait for the answer wastes their time.", good: false },
            { text: "Direct pattern: “Yes — close Leeds by Q3 and move the team to Manchester; it saves £1.2m a year with little client impact. Here is why...”", feedback: "Right. For a senior reader who asked a direct question, answer first, then give the support.", good: true },
            { text: "Present all the data neutrally and let the CEO decide.", feedback: "You did the analysis; holding back the recommendation pushes the thinking back onto the busiest person in the room.", good: false }
          ]
        },
        {
          type: "checklist", title: "Pyramid quality test",
          items: [
            "Governing thought is one full sentence that answers the reader’s question",
            "Key line (top + next level) persuades on its own",
            "Each group contains ideas of the same kind",
            "Each group is MECE and has 2–5 items",
            "Each group follows time, structural or degree order",
            "Situation is uncontroversial; Complication creates real tension",
            "Detail and methodology are below the line or in an appendix"
          ]
        }
      ],
      terms: [
        { term: "Governing thought", def: "The single sentence at the top of the pyramid that answers the reader’s main question." },
        { term: "Key line", def: "The governing thought plus the ideas directly beneath it — the skeleton of the argument." },
        { term: "Vertical logic", def: "Each idea raises a question that the ideas directly beneath it answer." },
        { term: "Horizontal logic", def: "Ideas at the same level are of the same kind, MECE, and logically ordered." },
        { term: "Inductive reasoning", def: "Several separate facts or reasons that together support a conclusion." },
        { term: "Deductive reasoning", def: "A chain of statements where the conclusion follows from the earlier steps." },
        { term: "SCQA", def: "Situation, Complication, Question, Answer — a flexible structure for introductions." }
      ],
      quiz: [
        { q: "Which is a good governing thought?", options: ["Customer churn analysis", "Churn findings and next steps", "We can cut churn from 5% to 3% by fixing the first 60 days", "Overview of the subscription business"], answer: 2, explain: "A governing thought is a full sentence making a point, not a topic label." },
        { q: "A group under “Why we should enter Brazil” lists: large market; hire a country manager; weak competition. What is wrong?", options: ["Too few items", "It breaks horizontal logic — an action is mixed in with reasons", "It is deductive", "Nothing"], answer: 1, explain: "“Hire a country manager” is an action, not a reason. Items in a group must be the same kind of idea." },
        { q: "Minto’s three ways to order ideas within a group are…", options: ["Time, structure and degree (importance)", "Alphabetical, numeric and random", "Past, present and future only", "Cost, benefit and risk"], answer: 0, explain: "Time order (steps), structural order (parts of a whole) and degree order (most to least important)." },
        { q: "Monthly churn rises from 3% to 5%. By how much has churn risen in relative terms?", options: ["2%", "40%", "5%", "About 67%"], answer: 3, explain: "(5 − 3) ÷ 3 ≈ 0.67, so a 67% relative increase — or 2 percentage points. Be precise about which you mean." },
        { q: "When should you use the Direct (A → S → C) opening?", options: ["When a senior reader already knows the background and wants the decision", "When the reader knows nothing about the topic", "Only in written reports, never in meetings", "When you have not reached a conclusion"], answer: 0, explain: "Busy, informed readers want the answer first; context can follow briefly." }
      ],
      challenge: {
        title: "Build the pyramid for a pricing recommendation",
        prompt: `You are a product manager at an (illustrative) project-management software company. Your findings, in no particular order:<ul><li>Our Pro plan is $12/user/month; the two main rivals charge $15 and $16.</li><li>Win rate against rivals is 41% and has not changed in a year.</li><li>Only 6% of lost deals cite price as the main reason.</li><li>Gross margin is 78%.</li><li>We shipped automation and reporting features this year that rivals charge extra for.</li><li>A test raising price to $14 for new sign-ups in two regions showed no measurable drop in conversion over 8 weeks.</li><li>Existing customers are on annual contracts renewing throughout the year.</li></ul>Build a pyramid: write the SCQA opening, the governing thought, three supporting points (horizontal logic) with evidence underneath (vertical logic), and say which supporting point is weakest.`,
        hints: ["Start with the question the CEO is asking: should we change the price?", "Group the facts into reasons of the same kind: customers, competitors, evidence from tests.", "Think about what a sceptic would attack first."],
        model: `<p><b>S:</b> Pro has been priced at $12/user/month since launch and is our main revenue driver.<br><b>C:</b> We have since added automation and reporting that rivals charge extra for, yet we are still priced 20–25% below them.<br><b>Q:</b> Should we raise the price?<br><b>A — governing thought:</b> <span class="hl">Raise Pro to $14 for new customers now and for existing customers at renewal, with a one-year grandfathering offer.</span></p><ol><li><b>Customers are not choosing us on price.</b> Only 6% of lost deals cite price; win rate is steady at 41%.</li><li><b>We are under-priced versus rivals for more value.</b> Rivals charge $15–16 and charge extra for features we include.</li><li><b>Direct evidence says demand will hold.</b> An 8-week, two-region test at $14 showed no measurable drop in conversion.</li></ol><p><b>Impact (illustrative):</b> a $2 rise is +16.7% revenue per seat ($2 ÷ $12). Because extra price falls almost entirely to profit, contribution per seat rises from $9.36 (78% × $12) to $11.36 (the $9.36 plus the full $2), a 21% increase in gross profit per seat if volume holds.</p><p><b>Weakest point:</b> point 3 — eight weeks in two regions may miss effects on larger customers and on renewals. Mitigate with a staged rollout and a churn watch on the first renewal cohort.</p><p><b>Structure check:</b> all three points are reasons (horizontal), each answers “why raise the price?” (vertical), ordered from customer behaviour to market to direct evidence.</p>`
      },
      takeaways: [
        "Write the governing thought as a full sentence that answers the reader’s question.",
        "Vertical logic: each level answers the question raised by the level above.",
        "Horizontal logic: same kind of idea, MECE, in time, structural or degree order.",
        "Choose the SCQA pattern to suit the reader — senior readers usually want the answer first.",
        "Test the key line before writing any detail."
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: "communication-3",
      title: "Memos and narratives: six-pagers, one-pagers and decision documents",
      level: "Intermediate",
      minutes: 15,
      hook: "Slides let you hide a weak argument behind bullet points; a well-written page of prose has nowhere to hide.",
      eli5: `If you tell your friend a plan out loud, you can wave your hands and skip the tricky bits. If you have to write it down in full sentences — who, what, why, what could go wrong — you quickly find the holes in your own plan. That is why some companies make leaders write their ideas as stories on paper before any meeting.`,
      blocks: [
        {
          type: "text", title: "Why narrative beats bullets for big decisions",
          html: `<p>In the Scaling track you saw that Amazon replaced slide decks in senior meetings with narrative memos read silently at the start of the meeting. Here we look at <b>how to write</b> those documents — and the simpler formats most companies use every week.</p><p>Jeff Bezos’s argument, made in internal emails and later in shareholder letters, was that full sentences force the writer to show how ideas connect: “because”, “therefore”, “unless”. A bullet like “Expand to Germany” hides all of that. In his 2017 shareholder letter he also noted that great memos are written and rewritten, shared with colleagues for improvement, and can take a week or more.</p>`
        },
        {
          type: "framework", name: "Anatomy of a narrative (six-page) memo", by: "Based on public accounts of Amazon practice, e.g. Bryar & Carr, Working Backwards (2021)", when: "Major proposals, annual plans, strategy reviews",
          steps: [
            { label: "Purpose and ask (first paragraph)", desc: "What this document is for and the decision requested. The reader should know in 30 seconds why they are reading." },
            { label: "Context and tenets", desc: "The situation and the principles guiding your choices (“Tenets: we optimise for customer trust over short-term revenue”). Tenets let readers argue with your assumptions, not just your conclusions." },
            { label: "The problem or opportunity, with data", desc: "What is true today, with numbers in the text, not hidden in charts." },
            { label: "The proposal", desc: "What you will do, in enough detail to be judged. Include alternatives you rejected and why." },
            { label: "Risks and how you will know", desc: "What could go wrong, early warning metrics, and when you would change course." },
            { label: "Resources, timeline and FAQs", desc: "People, money, milestones; then the hard questions a sceptic will ask, answered honestly. Appendices hold detail and do not count toward the page limit." }
          ]
        },
        {
          type: "case", company: "Amazon", year: "2004 onward", title: "Working backwards from the press release",
          situation: `As Amazon grew, product ideas often started with technology or internal goals rather than customer benefit, and debates in slide-driven meetings rewarded presentation style.`,
          decision: `Alongside the narrative memo, teams adopted the <b>PR/FAQ</b>: before building a product, write the press release announcing it (customer, problem, solution, a customer quote) and a set of FAQs for customers and for internal stakeholders (costs, risks, why now). Former executives Colin Bryar and Bill Carr describe the process in <i>Working Backwards</i> (2021).`,
          outcome: `Most PR/FAQs never become products — that is the point: weak ideas fail on paper cheaply. Bryar and Carr link the process to the development of offerings such as Kindle and AWS. The narrative culture, with silent reading at the start of meetings, became one of Amazon’s best-known management practices.`,
          lesson: `Writing the end-state first (what would the customer say?) exposes vague benefits early, when changing course costs almost nothing.`
        },
        {
          type: "compare", title: "Choosing the right document", headers: ["Format", "Length", "Best for", "Watch out for"],
          rows: [
            ["Email / Slack message", "A few lines", "Updates, quick asks, single decisions", "Hiding the ask; reply-all chains"],
            ["One-pager", "One page", "A single proposal or status, read in 3 minutes", "Cramming six pages into one with tiny font"],
            ["Decision document", "1–3 pages", "Choosing between options with a named decision-maker", "Presenting only one real option"],
            ["Narrative memo (six-pager)", "Up to 6 pages + appendix", "Strategy, annual plans, big bets", "Using it for small decisions — overkill"],
            ["PR/FAQ", "1-page release + FAQs", "New product or service ideas", "Writing marketing fluff instead of a customer benefit"],
            ["Slide deck", "Varies", "Large audiences, visual data, workshops", "Replacing thinking with formatting"]
          ]
        },
        {
          type: "framework", name: "The decision document template", by: "Common practice in well-run companies", when: "Whenever a choice between options needs a single accountable decision-maker",
          steps: [
            { label: "Decision needed, owner and deadline", desc: "“Decide by 15 March: which CRM do we adopt? Decider: COO. Input: Sales, Finance, IT.”" },
            { label: "Recommendation", desc: "Your recommended option, in one sentence, and the single most important reason." },
            { label: "Options (2–4, all real)", desc: "Including “do nothing”. Each with cost, benefit, risk and reversibility." },
            { label: "Criteria and scoring", desc: "What matters and how much (weights agreed before scoring, so the criteria are not reverse-engineered)." },
            { label: "Dissent", desc: "Record who disagrees and why. This improves the decision and builds trust." },
            { label: "What happens next", desc: "Owner, first steps, and the metric that will show whether it worked." }
          ]
        },
        {
          type: "interactive", widget: "decision-matrix", title: "Score the options in your decision document",
          note: "Enter 3 options and 4 criteria. Agree the weights first, then score. Try changing one weight by 10 points — if the winner flips, say so in the document: the decision is sensitive to that judgement."
        },
        {
          type: "callout", kind: "example", title: "Before / after: a one-pager opening",
          html: `<p><b>Before:</b> <i>“Customer Support Tooling Review — Background: In 2022 we selected our current ticketing tool. Since then the team has grown from 12 to 40 agents...”</i></p><p><b>After:</b> <i>“<b>Ask:</b> approve moving support to a new ticketing tool by 1 June (cost: $60k a year, $15k more than today). <b>Why:</b> agents spend about 20% of each shift switching between three systems; the new tool merges them and we expect first-response time to fall from 9 hours to under 4. <b>Risk:</b> a two-week migration dip, mitigated by moving one team at a time.”</i></p><p>The first version is an archive. The second is a decision.</p>`
        },
        {
          type: "checklist", title: "Memo review before circulating",
          items: [
            "First paragraph states the purpose and the decision requested",
            "Tenets or assumptions are explicit so readers can challenge them",
            "Numbers sit in sentences with comparisons (vs plan, vs last year)",
            "At least one rejected alternative is described fairly",
            "Risks have owners and early warning metrics",
            "A hard FAQ section answers the questions you hope nobody asks",
            "A colleague who disagrees has read it and their critique is addressed"
          ]
        }
      ],
      terms: [
        { term: "Narrative memo", def: "A proposal written in full prose (often up to six pages) and read silently before discussion." },
        { term: "PR/FAQ", def: "A future press release plus frequently asked questions, written before building a product to test whether the customer benefit is real." },
        { term: "Tenets", def: "Explicit guiding principles in a document that explain how trade-offs will be made." },
        { term: "One-pager", def: "A single-page summary of a proposal or status, designed to be read in a few minutes." },
        { term: "Decision document", def: "A short document that names a decision, its owner, the options, criteria, recommendation and dissent." },
        { term: "Working backwards", def: "Starting from the desired customer outcome and reasoning back to what to build." }
      ],
      quiz: [
        { q: "Why do narrative memos tend to expose weak thinking better than slides?", options: ["They are longer", "Full sentences force the writer to show how ideas connect (because, therefore, unless)", "They use more charts", "Executives prefer reading to listening"], answer: 1, explain: "Prose makes the logic between ideas explicit; bullets can list ideas without proving they connect." },
        { q: "What does a PR/FAQ ask you to write first?", options: ["The budget", "The engineering design", "The future press release announcing the product to customers", "The org chart"], answer: 2, explain: "You start from the end customer’s point of view — the press release — and work backwards." },
        { q: "In a decision document, why agree criteria weights before scoring options?", options: ["To stop people reverse-engineering weights to favour their preferred option", "Because the software requires it", "Weights do not matter", "To make the document longer"], answer: 0, explain: "Fixing weights first reduces bias; otherwise weights can be adjusted until the favoured option wins." },
        { q: "Option A scores 8 on cost (weight 40%) and 6 on quality (weight 60%). Option B scores 5 on cost and 9 on quality. Which wins?", options: ["A with 6.8", "Tie", "A with 7.2", "B with 7.4"], answer: 3, explain: "A = 0.4×8 + 0.6×6 = 3.2 + 3.6 = 6.8. B = 0.4×5 + 0.6×9 = 2.0 + 5.4 = 7.4. B wins." },
        { q: "Which section is MOST often missing from weak proposals?", options: ["The title", "Rejected alternatives and honest risks", "The author’s name", "The date"], answer: 1, explain: "Showing alternatives you rejected and the real risks is what makes a proposal credible." }
      ],
      challenge: {
        title: "Write the decision document skeleton",
        prompt: `Your 80-person company must choose how to handle payroll from next year. Options: (A) keep the in-house payroll clerk and spreadsheets — $55k/year, error rate about 2% of payslips; (B) payroll software run by HR — $18k/year software plus 0.3 of an HR person ($24k), error rate under 0.5%; (C) fully outsourced provider — $48k/year, error rate under 0.5%, less control over timing. The CFO decides. Sales and HR leaders have strong views. Write the skeleton of a decision document: decision and owner, recommendation, options table, criteria with weights, dissent, next steps.`,
        hints: ["Compute the annual cost of each option first.", "Think about criteria beyond cost: accuracy, control, employee experience, reversibility.", "Include “dissent” even if you have to anticipate it."],
        model: `<p><b>Decision:</b> How will we run payroll from 1 January? <b>Decider:</b> CFO. <b>Input:</b> HR, Sales, Finance. <b>Deadline:</b> 30 September (to allow a parallel run in Q4).</p><p><b>Recommendation:</b> Option B — payroll software run by HR. It is the cheapest accurate option and keeps control in-house.</p><table><thead><tr><th>Option</th><th>Annual cost</th><th>Error rate</th><th>Control</th><th>Reversibility</th></tr></thead><tbody><tr><td>A. In-house + spreadsheets</td><td>$55k</td><td>~2%</td><td>High</td><td>n/a (status quo)</td></tr><tr><td>B. Software + HR</td><td>$18k + $24k = <b>$42k</b></td><td>&lt;0.5%</td><td>High</td><td>Easy (annual licence)</td></tr><tr><td>C. Outsourced</td><td>$48k</td><td>&lt;0.5%</td><td>Medium</td><td>Medium (contract notice)</td></tr></tbody></table><p><b>Criteria and weights (agreed first):</b> accuracy 40%, cost 30%, control and timing 20%, ease of change 10%. Scored 1–5: A = 0.4×2 + 0.3×2 + 0.2×5 + 0.1×5 = 0.8 + 0.6 + 1.0 + 0.5 = <b>2.9</b>; B = 0.4×5 + 0.3×5 + 0.2×4 + 0.1×4 = 2.0 + 1.5 + 0.8 + 0.4 = <b>4.7</b>; C = 0.4×5 + 0.3×4 + 0.2×3 + 0.1×3 = 2.0 + 1.2 + 0.6 + 0.3 = <b>4.1</b>.</p><p><b>Savings:</b> B saves $13k a year versus A ($55k − $42k) and cuts errors by at least three-quarters.</p><p><b>Dissent:</b> HR worries about workload (0.3 FTE is an estimate); Sales prefers C for commission-calculation support. Response: review HR time after one quarter; ask the software vendor to demo commission handling before signing.</p><p><b>Next steps:</b> HR lead owns selection by 15 October; parallel run in November and December; success metric — payroll errors below 0.5% and zero late payments in Q1.</p>`
      },
      takeaways: [
        "Use full prose for big decisions — it exposes the logic between ideas.",
        "Lead every document with purpose and the decision requested.",
        "Write the press release first to test whether the customer benefit is real.",
        "Decision documents name one decider, real options, pre-agreed criteria and dissent."
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: "communication-4",
      title: "Slides that work: one message per slide, action titles and storyline logic",
      level: "Intermediate",
      minutes: 15,
      hook: "If someone reads only your slide titles, they should get your whole argument.",
      eli5: `A comic book tells a story one picture at a time. Each panel shows one thing happening, and the speech bubble tells you what it means. If one panel tried to show the whole story, you would not understand it. Good slides are comic panels: one idea each, with a caption that says the point.`,
      blocks: [
        {
          type: "text", title: "Slides are a storyline, not a stack of pages",
          html: `<p>You saw in the C-suite track that strong decks use <b>action titles</b> — full-sentence headlines that state the point (“Q3 revenue grew 18%, led by enterprise”) rather than topics (“Q3 revenue”). Here we look at the full craft: planning the storyline before opening any software, testing it with horizontal and vertical logic, and choosing the right chart for each message.</p><p>The best decks are built <b>on paper first</b>. Consultants often sketch a “ghost deck” — blank slides with only titles — and only then fill in the evidence.</p>`
        },
        {
          type: "framework", name: "Horizontal and vertical logic in a deck", by: "Standard practice in strategy consulting, building on the Pyramid Principle", when: "Checking any deck before it goes to a senior audience",
          steps: [
            { label: "Write the ghost deck", desc: "List slide titles only, as full sentences. Each title is one point from your pyramid." },
            { label: "Horizontal test (across)", desc: "Read only the titles, in order, aloud. Do they tell a complete, persuasive story with no gaps or jumps? If not, add, cut or reorder." },
            { label: "Vertical test (down)", desc: "On each slide, does everything in the body prove the title — and nothing else? Remove data that does not support the headline." },
            { label: "One message per slide", desc: "If a slide needs “and” in the title to cover its content, it is probably two slides." },
            { label: "Executive summary first", desc: "Slide 2 states the answer and the key line. Many senior readers will read only this slide." },
            { label: "Appendix for the rest", desc: "Methodology, extra data and backup go after the main story, ready for questions." }
          ]
        },
        {
          type: "callout", kind: "example", title: "Before / after: slide titles",
          html: `<p><b>Before (topic titles):</b> 1. Background · 2. Market · 3. Competitors · 4. Customer research · 5. Financials · 6. Next steps</p><p><b>After (action titles, read as a story):</b></p><ol><li>We recommend entering the Spanish market in 2026 with our mid-tier product</li><li>Spain’s mid-tier segment is growing faster than our home market</li><li>No competitor serves mid-tier buyers with local delivery under 48 hours</li><li>Spanish buyers in our tests value delivery speed over brand</li><li>Entry pays back in about three years on conservative assumptions</li><li>We need a decision by June to hire a country lead for Q4 launch</li></ol><p>The “after” titles pass the horizontal test: read alone, they make the whole case.</p>`
        },
        {
          type: "framework", name: "Choosing the chart: five kinds of comparison", by: "Gene Zelazny, Say It With Charts (1985)", when: "Before drawing any chart — decide what comparison your message makes",
          steps: [
            { label: "Component (parts of a whole)", desc: "“Enterprise is 60% of revenue.” Use a single stacked bar or, sparingly, a pie with few slices." },
            { label: "Item (ranking)", desc: "“Region North has the highest churn.” Use a horizontal bar chart, sorted." },
            { label: "Time series (change over time)", desc: "“Margins fell for four quarters.” Use a line chart or column chart." },
            { label: "Frequency distribution (how many in each range)", desc: "“Most deals are $10–25k.” Use a histogram." },
            { label: "Correlation (relationship between two variables)", desc: "“Bigger discounts do not lead to faster closes.” Use a scatter plot." },
            { label: "The rule", desc: "Start from the message (the action title), identify the comparison, then pick the chart — never the other way round." }
          ]
        },
        {
          type: "compare", title: "Slide design: weak vs strong", headers: ["", "Weak", "Strong"],
          rows: [
            ["Title", "“Sales by region”", "“North drove 70% of the sales decline”"],
            ["Text", "Paragraphs copied from a memo", "A few words or labels; the speaker or a memo carries the detail"],
            ["Chart", "Default colours, legend far away, 3-D effects", "One highlight colour on the bar that proves the point, direct labels"],
            ["Numbers", "Six decimal places", "Rounded to what matters (18%, $4.2m)"],
            ["Source", "Missing", "Small footnote with source and date"],
            ["Density", "Everything on one slide", "One message; extra detail in appendix"]
          ]
        },
        {
          type: "callout", kind: "warning", title: "When slides go wrong: the 2003 Columbia investigation",
          html: `<p>After the Space Shuttle Columbia disaster in 2003, the accident investigation board criticised NASA’s reliance on dense PowerPoint briefings. Information scientist Edward Tufte analysed one engineering slide about possible foam-strike damage: the most important caveat — that the test data came from pieces of foam far smaller than the one that struck the shuttle — was buried in a low-level bullet, while the title sounded reassuring. The board noted concern about the use of slides in place of technical papers. The lesson for business: <b>a vague or misleading title, with the critical fact buried, can lead smart people to the wrong decision.</b></p>`
        },
        {
          type: "scenario",
          prompt: "You have 20 minutes with the executive committee and a 45-slide deck. What do you do?",
          options: [
            { text: "Talk fast and get through all 45 slides.", feedback: "At over two slides a minute nobody absorbs anything, and there will be no time for the discussion you need.", good: false },
            { text: "Cut to about 8–10 main slides with action titles, put the rest in an appendix, and leave half the time for discussion.", feedback: "Right. A common rule of thumb is about 2 minutes per main slide; senior meetings are for decisions, not presentations.", good: true },
            { text: "Shrink the font so the content fits on fewer slides.", feedback: "Density is not clarity. The audience will read rather than listen, and the message gets lost.", good: false }
          ]
        },
        {
          type: "checklist", title: "Deck review checklist",
          items: [
            "Ghost deck titles alone tell the whole story (horizontal logic)",
            "Every title is a full sentence making one point",
            "Everything on each slide supports its title (vertical logic)",
            "Executive summary on slide 2 with the recommendation",
            "Each chart type matches its comparison (component, item, time, frequency, correlation)",
            "One highlight colour shows the reader where to look",
            "Sources and dates on every data slide",
            "Appendix holds detail; main body fits the time slot with room for discussion"
          ]
        }
      ],
      terms: [
        { term: "Action title", def: "A full-sentence slide headline that states the slide’s conclusion." },
        { term: "Ghost deck", def: "A draft deck of titles only, used to test the storyline before building content." },
        { term: "Horizontal logic", def: "Reading only the slide titles in order gives a complete, logical story." },
        { term: "Vertical logic", def: "Everything on a slide supports that slide’s title, and nothing else is there." },
        { term: "Executive summary", def: "The opening slide or paragraph that states the answer and key supporting points." },
        { term: "Appendix", def: "Back-up slides with detail and methodology, kept out of the main storyline." }
      ],
      quiz: [
        { q: "Which is an action title?", options: ["Customer survey results", "Customers rank delivery speed above price", "Survey: 1,200 responses", "Appendix A"], answer: 1, explain: "An action title states the conclusion in a full sentence." },
        { q: "You want to show that the share of revenue from enterprise grew from 40% to 60% over five years. What is the best chart?", options: ["Scatter plot", "Pie chart for each year side by side", "100% stacked columns over time, or a line of the enterprise share", "Histogram"], answer: 2, explain: "Component share over time is shown well by stacked 100% columns or simply a line of the share; multiple pies are hard to compare." },
        { q: "The “horizontal test” of a deck means…", options: ["Reading only the titles in order to check they tell the full story", "Checking all slides are landscape", "Aligning text boxes", "Counting the number of slides"], answer: 0, explain: "Horizontal logic is about the storyline formed by the titles." },
        { q: "Using a rule of thumb of about 2 minutes per main slide, how many main slides fit a 30-minute slot if you keep half the time for discussion?", options: ["30", "15", "10", "About 7–8"], answer: 3, explain: "Half of 30 minutes is 15 minutes of presenting; 15 ÷ 2 ≈ 7–8 main slides." },
        { q: "Zelazny’s method says you should choose a chart by…", options: ["Picking the most eye-catching design", "First stating the message, then identifying the type of comparison", "Using pie charts for everything", "Copying last quarter’s deck"], answer: 1, explain: "Message first, then comparison type, then chart." }
      ],
      challenge: {
        title: "Fix the board deck storyline",
        prompt: `A head of operations shares this ghost deck for a 15-minute board slot: 1. Agenda · 2. Our warehouse network · 3. Order volume data 2021–2025 · 4. Benchmarks · 5. Options considered · 6. Automation vendor comparison (14 vendors, 22 criteria) · 7. Risks · 8. Summary and ask: approve $8m for warehouse automation (saves an estimated $2.4m a year from 2027).<br><br>Rewrite the storyline: give 6–8 action titles, say what moves to the appendix, and calculate the simple payback to include in the executive summary.`,
        hints: ["The ask is buried on slide 8 — where should it be?", "Each title should be a full-sentence point that a board member could repeat.", "Simple payback = investment ÷ annual savings."],
        model: `<p><b>Payback:</b> $8m ÷ $2.4m per year ≈ <b>3.3 years</b> from 2027, i.e. roughly mid-2030 if savings start on 1 January 2027.</p><p><b>New storyline (action titles):</b></p><ol><li>We ask the board to approve $8m for warehouse automation, paying back in about 3.3 years</li><li>Order volumes have outgrown our manual warehouses: peak days already exceed capacity</li><li>Labour cost per order has risen each year and is now above peer benchmarks</li><li>Automation is the lowest-cost of three options (automate, build a new site, outsource)</li><li>Our preferred vendor scored highest on reliability and total cost (full comparison in appendix)</li><li>The main risks are installation delays and peak-season disruption; we phase the rollout to avoid Q4</li><li>Decision today lets us install during 2026 and capture savings from 2027</li></ol><p><b>Appendix:</b> agenda (unnecessary for a 15-minute slot), the full 14-vendor, 22-criteria comparison, detailed volume data, methodology for the $2.4m savings estimate.</p><p><b>Why it works:</b> the ask and the payback are on slide 1, the titles alone make the case (horizontal logic), each slide proves only its title (vertical logic), and 7 main slides fit a 15-minute slot with time for questions.</p>`
      },
      takeaways: [
        "Build the ghost deck of action titles before designing any slide.",
        "Horizontal logic: titles alone tell the story. Vertical logic: each slide proves its title.",
        "Pick the chart from the comparison your message makes.",
        "Put the answer first and the detail in the appendix."
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: "communication-5",
      title: "Data storytelling: honest charts and numbers for executives",
      level: "Advanced",
      minutes: 16,
      hook: "The same numbers can be drawn to tell opposite stories — your job is to tell the true one so clearly it cannot be missed.",
      eli5: `If you stand on a chair next to your friend for a photo, you look much taller — but you have not grown. Charts can do the same trick: by starting the scale in the wrong place, a tiny change can look enormous. Honest data storytelling means taking the photo with both of you standing on the floor, then pointing to what matters.`,
      blocks: [
        {
          type: "framework", name: "The data storytelling sequence", by: "Synthesis of Cole Nussbaumer Knaflic, Storytelling with Data (2015), and Zelazny", when: "Turning analysis into a chart an executive will understand in five seconds",
          steps: [
            { label: "1. Context", desc: "Who is the audience and what decision will this chart support?" },
            { label: "2. The message", desc: "Write the one-sentence takeaway first — it becomes the chart title." },
            { label: "3. The right chart", desc: "Match the comparison: line for time, sorted bar for ranking, scatter for relationship." },
            { label: "4. Remove clutter", desc: "Delete gridlines, borders, 3-D effects, legends you can replace with direct labels." },
            { label: "5. Focus attention", desc: "Grey for everything; one strong colour for the data that proves the point. Add a short annotation at the key moment (“Price rise, March”)." },
            { label: "6. Tell the so-what", desc: "End with the implication or action: what should the audience do because of this chart?" }
          ]
        },
        {
          type: "formula", name: "Tufte’s Lie Factor",
          expr: "Lie factor = (size of effect shown in the graphic) ÷ (size of effect in the data)",
          explain: `Proposed by Edward Tufte in <i>The Visual Display of Quantitative Information</i> (1983). A lie factor of 1 is honest. Above about 1.05 or below 0.95, the chart is distorting the data. Truncated bar-chart axes are the most common cause.`,
          example: `Revenue grew from $100m to $104m: a 4% increase. A bar chart whose axis starts at $98m draws bars 2 and 6 units tall — the second bar looks 200% bigger. Lie factor = 200% ÷ 4% = <b>50</b>. Start the axis at zero and the bars look nearly equal, which is the truth.`
        },
        {
          type: "compare", title: "Common ways charts mislead", headers: ["Trick", "What it does", "Honest alternative"],
          rows: [
            ["Truncated bar axis", "Makes small differences look huge", "Bars start at zero; for small changes use a line chart or show the % change directly"],
            ["Cumulative totals", "A cumulative line always rises, hiding slowing sales", "Show sales per period"],
            ["Dual y-axes", "Two scales can be stretched to suggest any correlation", "Two separate charts, or index both series to 100"],
            ["Cherry-picked time window", "Starts at a low point to exaggerate growth", "Show a full, relevant period and say why it was chosen"],
            ["Area or 3-D pictograms", "Doubling height and width quadruples the area", "Use bars or lines where length encodes value"],
            ["Percent of what?", "“Up 50%” from a tiny base", "Show the absolute numbers next to the percentage"]
          ]
        },
        {
          type: "callout", kind: "example", title: "Before / after: an executive chart",
          html: `<p><b>Before:</b> Title “Monthly churn by segment, Jan–Dec”. Six coloured lines, a legend at the bottom, gridlines, values to two decimals.</p><p><b>After:</b> Title <span class="hl">“SMB churn doubled after the June price rise; other segments are stable”</span>. Five lines in light grey; SMB in one strong colour; a short annotation at June: “Price +15%”; direct labels at the line ends (“SMB 4%”, “Enterprise 1%”); no legend; source footnote.</p><p>The executive gets the point in five seconds — and can still see the context that the other segments are stable.</p>`
        },
        {
          type: "case", company: "Florence Nightingale", year: "1855–1858", title: "A chart that changed policy",
          situation: `During the Crimean War, Florence Nightingale collected data on British soldiers’ deaths in military hospitals. Many more soldiers were dying from preventable diseases linked to poor sanitation than from battle wounds, but officials were not acting on it.`,
          decision: `Working with statistician William Farr, she presented the data in “rose” (polar area) diagrams, colouring deaths by cause, so that the size of preventable disease deaths compared with wound deaths was impossible to ignore. She sent the analysis to officials and the public.`,
          outcome: `Her reports helped drive reforms in army sanitation and hospital design, and in 1858 she became the first woman elected a Fellow of the Royal Statistical Society.`,
          lesson: `A chart designed around one clear message, for a specific decision-maker, can move institutions. Data does not speak for itself — someone has to make it speak.`
        },
        {
          type: "flip", title: "Presenting numbers to executives",
          cards: [
            { front: "“Revenue was $47,312,906”", back: "Round to what matters: “Revenue was $47.3m, 6% above plan.” Always give a comparison." },
            { front: "“Churn rose 25%”", back: "Ambiguous. Say “Churn rose from 2.0% to 2.5% a month — up 0.5 percentage points.”" },
            { front: "“We have 1.2m users”", back: "Add meaning: “1.2m users, of whom 300k are active weekly.” Vanity numbers without context mislead." },
            { front: "“Costs are $3.6m a year”", back: "Make it tangible: “$300k a month, or about $15 per customer.”" },
            { front: "“The model predicts 18% growth”", back: "Show uncertainty: “Our base case is 18%; the range is 12–22% depending on the enterprise pipeline.”" }
          ]
        },
        {
          type: "interactive", widget: "ab-test", title: "Before you claim a result, check it is real",
          note: "Enter two conversion rates with small samples (e.g. 100 visitors each) and see whether the difference is significant. Then increase the samples. A chart showing a ‘winner’ that is not statistically meaningful is a misleading chart."
        },
        {
          type: "scenario",
          prompt: "Your quarterly revenue grew 3%, below the 8% plan. Your boss suggests showing a cumulative revenue chart since launch for the board, “because it looks great.” What do you do?",
          options: [
            { text: "Use the cumulative chart — it is technically accurate.", feedback: "A cumulative line always rises; using it to hide a miss erodes board trust when they notice, and boards usually do.", good: false },
            { text: "Show quarterly revenue vs plan, title it honestly (“Q3 revenue grew 3%, below our 8% plan, mainly due to delayed enterprise deals”), and add the recovery plan.", feedback: "Right. Bad news delivered early and clearly, with a plan, builds credibility. Hiding it destroys it.", good: true },
            { text: "Leave revenue out and focus on user growth.", feedback: "Omitting the headline metric the board tracks is itself misleading and will be spotted.", good: false }
          ]
        },
        {
          type: "checklist", title: "Honest chart checklist",
          items: [
            "Title states the takeaway in one sentence",
            "Bar charts start at zero; any non-zero axis is clearly marked and justified",
            "Time window is complete and relevant, not cherry-picked",
            "Absolute numbers shown alongside percentages",
            "Percentage points distinguished from percent change",
            "One highlight colour; annotations at key events",
            "Uncertainty shown where it matters (ranges, sample sizes)",
            "Source and date in a footnote"
          ]
        }
      ],
      terms: [
        { term: "Lie factor", def: "Tufte’s ratio of the effect size shown in a graphic to the effect size in the data; 1 is honest." },
        { term: "Truncated axis", def: "A chart axis that starts above zero, exaggerating differences in bar charts." },
        { term: "Percentage point", def: "The simple difference between two percentages (2% to 2.5% is +0.5 percentage points, a 25% relative rise)." },
        { term: "Direct labelling", def: "Writing labels next to the data instead of in a separate legend." },
        { term: "Data-ink ratio", def: "Tufte’s idea that most of the ink in a chart should show data, not decoration." },
        { term: "Annotation", def: "A short note on a chart explaining a key event or value." },
        { term: "Cumulative chart", def: "A chart of running totals; it can hide slowing growth because it never falls." }
      ],
      quiz: [
        { q: "Sales rise from 200 to 210 units. A bar chart starts its axis at 195. What is the approximate lie factor?", options: ["About 1", "About 4", "About 10", "About 40"], answer: 3, explain: "True change: 10 ÷ 200 = 5%. The bars are drawn 5 and 15 units tall, so the second looks (15 − 5) ÷ 5 = 200% bigger. Lie factor = 200% ÷ 5% = 40." },
        { q: "Conversion falls from 4% to 3%. Which statement is accurate?", options: ["Conversion fell 1%", "Conversion fell 1 percentage point, a 25% relative decline", "Conversion fell 33%", "Conversion fell 75%"], answer: 1, explain: "4% − 3% = 1 percentage point; 1 ÷ 4 = 25% relative decline." },
        { q: "What is the best chart to show that discount size and time-to-close are unrelated?", options: ["Scatter plot", "Pie chart", "Stacked column", "Cumulative line"], answer: 0, explain: "A relationship (correlation) between two variables is shown with a scatter plot." },
        { q: "Why are cumulative charts risky for showing business performance?", options: ["They are hard to draw", "They always rise, so they can hide a slowdown or decline", "They require a log scale", "Boards are not allowed to see them"], answer: 1, explain: "Running totals never fall, so they mask what is happening in each period." },
        { q: "In data storytelling, what should the chart title normally be?", options: ["The name of the dataset", "The date range", "The one-sentence takeaway", "The analyst’s name"], answer: 2, explain: "The title carries the message so the reader knows what to see." }
      ],
      challenge: {
        title: "The investor chart",
        prompt: `Your startup’s monthly recurring revenue (MRR) for six months: Jan $200k, Feb $206k, Mar $210k, Apr $212k, May $213k, Jun $214k. Your co-founder made a bar chart with the y-axis starting at $195k and the title “Explosive growth!” for the investor update.<br><br>(a) Calculate total growth Jan–Jun and the month-on-month growth in Feb and Jun. (b) Calculate the lie factor of the co-founder’s chart for Jan vs Jun. (c) Redesign the chart and title honestly, and write the one-paragraph so-what for investors.`,
        hints: ["Growth = (end − start) ÷ start.", "On the truncated chart, Jan’s bar is $5k tall and Jun’s is $19k tall.", "Honest does not mean defeatist — say what you are doing about it."],
        model: `<p><b>(a) Growth</b></p><ul><li>Jan → Jun: ($214k − $200k) ÷ $200k = <b>7%</b> over five months.</li><li>Feb: ($206k − $200k) ÷ $200k = <b>3.0%</b>. Jun: ($214k − $213k) ÷ $213k ≈ <b>0.5%</b>.</li><li>Growth is slowing sharply: from 3% a month to about 0.5%.</li></ul><p><b>(b) Lie factor</b></p><ul><li>Truncated bars: Jan = $200k − $195k = $5k; Jun = $214k − $195k = $19k. Visual increase = ($19k − $5k) ÷ $5k = <b>280%</b>.</li><li>Real increase = 7%. Lie factor = 280 ÷ 7 = <b>40</b>.</li></ul><p><b>(c) Redesign</b></p><ul><li>Chart: a column chart of <b>month-on-month growth %</b> (3.0%, 1.9%, 1.0%, 0.5%, 0.5%), or MRR as a line with an honest axis and the growth rate labelled.</li><li>Title: <span class="hl">“MRR reached $214k, but monthly growth slowed from 3% to 0.5% as new sales stalled”</span>.</li><li>Annotation at March: e.g. “Lead sales rep left” if that is the cause.</li></ul><p><b>So-what for investors:</b> “Growth slowed sharply in Q2 because new-customer sales fell while churn stayed low. We have hired a replacement sales lead (starting August) and are testing a partner channel. We will report whether monthly growth is back above 2% in the September update. If you can introduce us to channel partners in logistics, that is our biggest ask.”</p><p><b>Why:</b> investors compare updates over time; a misleading chart found later damages trust far more than one weak quarter.</p>`
      },
      takeaways: [
        "Write the takeaway first, then use it as the chart title.",
        "Choose the chart from the comparison; remove clutter; highlight one thing.",
        "Bar charts start at zero — check the lie factor of anything you publish.",
        "Distinguish percentage points from percent change and show absolute numbers.",
        "Deliver bad numbers clearly, early and with a plan."
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: "communication-6",
      title: "High-stakes communication: boards, investors, crises and difficult announcements",
      level: "Advanced",
      minutes: 18,
      hook: "In a crisis, your first words are remembered longer than your next five years of results.",
      eli5: `If you break a neighbour’s window playing football, you have a choice. You can hide, make excuses, or knock on the door, say “I did it, I’m sorry, here is how I will fix it.” The first two make it much worse when they find out. The third is scary — but it is the one people respect. Companies face the same choice, just with millions of people watching.`,
      blocks: [
        {
          type: "text", title: "Going beyond crisis leadership",
          html: `<p>The Legal track covered the Tylenol recall as a lesson in risk and governance, and the C-suite track covered crisis leadership. Here we focus on the <b>words</b>: what to say, in what order, to whom, and in which channel — in board updates, investor updates, crises and painful announcements like layoffs.</p><p>All four share one rule: <span class="hl">people forgive bad news far more readily than they forgive being surprised, misled or treated without respect.</span></p>`
        },
        {
          type: "framework", name: "Crisis communication: the first 24 hours", by: "Synthesis of public-health crisis principles (“be first, be right, be credible”) and corporate practice", when: "Any event that threatens people’s safety, trust or the company’s reputation",
          steps: [
            { label: "1. Put people first", desc: "Lead with the human impact and what you are doing for those affected — before talking about the company." },
            { label: "2. Say what you know, what you do not know, and when you will update", desc: "Speed matters, but never speculate. “We will update at 6 pm” buys trust while facts emerge." },
            { label: "3. Take appropriate responsibility", desc: "Do not deny what is true or blame others prematurely. Lawyers matter, but defensive legal language often does more damage than the liability it avoids." },
            { label: "4. Act visibly", desc: "Concrete actions (recall, pause, refund, investigation) speak louder than statements." },
            { label: "5. One voice, many channels", desc: "A senior spokesperson; consistent messages to employees, customers, regulators, investors and media — employees first or at the same time, never last." },
            { label: "6. Update and follow through", desc: "Report progress, admit mistakes in the response, and later explain what has changed so it does not happen again." }
          ]
        },
        {
          type: "case", company: "Johnson & Johnson", year: "1982", title: "Tylenol: the words behind the recall",
          situation: `Seven people in the Chicago area died after taking Extra-Strength Tylenol capsules that had been laced with cyanide after leaving the factory. J&J did not cause the tampering, but its most important consumer brand was now linked to deaths.`,
          decision: `Under chairman James Burke, J&J’s communication matched its actions: it warned the public not to take Tylenol capsules, halted advertising, recalled around 31 million bottles nationwide, offered to exchange capsules for tablets, and worked openly with police, regulators and the media. Burke appeared in person on television. Executives pointed to J&J’s Credo, which puts responsibility to patients and customers first.`,
          outcome: `Tylenol returned in tamper-resistant packaging within months and regained much of its market share within about a year. The response is still taught as the benchmark for crisis communication.`,
          lesson: `Communication was credible because it was backed by costly action. The message “your safety comes before our product” was proven, not just stated.`
        },
        {
          type: "case", company: "BP", year: "2010", title: "Deepwater Horizon: when words made it worse",
          situation: `On 20 April 2010 an explosion on the Deepwater Horizon drilling rig in the Gulf of Mexico, operated for BP, killed 11 workers and caused one of the largest marine oil spills in history. The well leaked for 87 days before it was capped in July.`,
          decision: `CEO Tony Hayward became the public face of the response. Early on he described the spill as relatively tiny compared with the very big ocean, and in late May he said, “There’s no one who wants this thing over more than I do. I’d like my life back.” He apologised for that remark, but it came while families of the dead workers were grieving. In June he was photographed attending a yacht race.`,
          outcome: `The remarks became symbols of an out-of-touch response, intensified political anger, and overshadowed BP’s actual clean-up spending. Hayward was replaced as CEO later in 2010. BP’s total costs from the disaster ran into tens of billions of dollars.`,
          lesson: `In a crisis, the leader’s words must centre the victims, not the company or themselves. One careless sentence can define the response for years.`
        },
        {
          type: "case", company: "Airbnb", year: "May 2020", title: "A layoff letter that was widely praised",
          situation: `As the COVID-19 pandemic halted travel, Airbnb’s business collapsed. CEO Brian Chesky wrote that the company expected 2020 revenue to be less than half of 2019’s, and it had to cut about 1,900 people — roughly a quarter of its workforce.`,
          decision: `Chesky’s letter to employees, also published publicly, explained the reasons and the principles used to decide who was affected, and set out the support offered: in the US, 14 weeks of base pay plus one more week per year of service; waiving the equity cliff for people with under a year’s tenure; 12 months of health insurance; letting people keep their laptops; and an alumni directory plus redeploying much of the recruiting team to help departing employees find new jobs. He ended with a personal message of gratitude.`,
          outcome: `The letter was widely cited as a model of how to communicate a layoff with clarity and dignity. Airbnb recovered strongly and went public in December 2020.`,
          lesson: `Difficult announcements land better when they explain the why, show the decision principles, are specific about support, and treat departing people as valued colleagues.`
        },
        {
          type: "compare", title: "Board update vs investor update", headers: ["", "Board update (before a meeting)", "Monthly investor update (startup)"],
          rows: [
            ["Purpose", "Prepare directors to oversee and decide", "Keep investors informed and get help"],
            ["Opens with", "Summary: performance vs plan, decisions needed, key risks", "Headline metrics and one-line summary of the month"],
            ["Core content", "KPIs vs plan, strategy progress, risks, people, financials, items for approval", "Highlights, lowlights, KPIs, cash and runway, hiring, asks"],
            ["Bad news", "Early, in the summary, with a plan — never a surprise in the meeting", "In the “lowlights” section, every month, without spin"],
            ["Length", "Short memo on top of a board pack; papers sent days ahead", "A few hundred words; same format every month"],
            ["Ask", "Specific decisions or approvals", "Specific intros, hires, advice"]
          ]
        },
        {
          type: "callout", kind: "example", title: "Before / after: announcing bad news to staff",
          html: `<p><b>Before:</b> <i>“As part of our ongoing journey to optimise our operating model and unlock synergies, we are realigning resources, which will impact some roles.”</i></p><p><b>After:</b> <i>“Today I have to share hard news. We are closing our Bristol support centre on 30 June, and 85 colleagues will lose their jobs. This is because support volume has moved online and the centre runs at half capacity. It is not a reflection of the team’s work, which has been excellent. Everyone affected will hear from their manager in person today, receive 12 weeks’ pay plus one week per year of service, and get help finding new roles. I made this decision and I am sorry for what it means for people we value.”</i></p><p>The second version says what, who, when, why, what support, and who is accountable — in plain words.</p>`
        },
        {
          type: "scenario",
          prompt: "A data breach exposed some customers’ email addresses. Legal says: “Say nothing until the investigation is complete in three weeks.” Journalists are already asking. What do you recommend?",
          options: [
            { text: "Follow legal advice and say nothing for three weeks.", feedback: "Silence lets others tell the story, and many jurisdictions require prompt breach notification. Customers will feel misled.", good: false },
            { text: "Issue a short statement today: what happened, what data was affected as far as you know, what customers should do, what you are doing, and when you will update — reviewed by legal for accuracy.", feedback: "Right. Be first, be right, be credible: share what you know, admit what you do not, give a next update time. Legal review keeps it accurate without silencing it.", good: true },
            { text: "Say the breach was caused by a vendor and not your fault.", feedback: "Shifting blame before the facts are known looks evasive — and customers trusted you, not your vendor.", good: false }
          ]
        },
        {
          type: "checklist", title: "Before any high-stakes announcement",
          items: [
            "Lead with impact on people, then actions, then the company",
            "State what you know, what you do not, and when you will update",
            "Affected people hear first and in person where possible",
            "Specific support is described (money, time, help)",
            "One accountable leader speaks in plain words",
            "Every word read as if quoted in tomorrow’s headline",
            "Employees, customers, investors, regulators and media sequenced deliberately",
            "Follow-up promised and delivered"
          ]
        }
      ],
      terms: [
        { term: "Crisis communication", def: "How an organisation communicates during an event that threatens safety, trust or reputation." },
        { term: "Holding statement", def: "A short early statement saying what is known, what is being done and when more information will follow." },
        { term: "Board pack", def: "The papers sent to directors before a board meeting, usually with a summary memo on top." },
        { term: "Investor update", def: "A regular (often monthly) report from a startup to its investors on metrics, highlights, lowlights and asks." },
        { term: "Stakeholder sequencing", def: "Planning the order and channel in which each group hears news, so no key group is surprised." },
        { term: "Euphemism", def: "Vague, softened language (“realigning resources”) that hides the real message; it erodes trust in hard announcements." }
      ],
      quiz: [
        { q: "Which principle best explains why the Tylenol response was credible?", options: ["It used clever slogans", "Its words were backed by costly, visible action", "It blamed the tamperer", "It avoided the media"], answer: 1, explain: "J&J’s recall and openness proved its message that customer safety came first." },
        { q: "What was the main communication failure in BP’s 2010 response?", options: ["Too many press releases", "Using social media", "Leader statements that centred the company and CEO rather than the victims", "Announcing the well was capped"], answer: 2, explain: "Remarks like “I’d like my life back” put the CEO at the centre while families grieved." },
        { q: "Airbnb’s 2020 US severance was 14 weeks’ base pay plus one week per year of service. How many weeks for someone with 4 years’ service?", options: ["18 weeks", "14 weeks", "15 weeks", "56 weeks"], answer: 0, explain: "14 + (1 × 4) = 18 weeks of base pay." },
        { q: "In a monthly investor update, bad news should appear…", options: ["Only once it is fixed", "Never — investors want good news", "Only in the annual report", "Every month in a clear lowlights section, with a plan"], answer: 3, explain: "Consistent, honest lowlights build trust and let investors help early." },
        { q: "Which opening is best for a layoff announcement?", options: ["“We are on an exciting journey of transformation...”", "“Today I have to share hard news: 85 colleagues will lose their jobs...”", "“Due to market conditions, some changes have been made.”", "“As you may have heard from the press...”"], answer: 1, explain: "Direct, specific, human, and from an accountable leader — before employees hear it elsewhere." }
      ],
      challenge: {
        title: "Product recall: draft the first statement and the board note",
        prompt: `You are CEO of an (illustrative) children’s car-seat maker with $300m revenue. At 9 am you learn that a buckle on one model can release under heavy impact. No injuries are confirmed; 120,000 seats of that model were sold over 18 months. A full recall and replacement would cost about $14m. Your general counsel suggests waiting for more testing (two weeks) before saying anything. Your largest retailer’s buyer has already heard rumours.<br><br>(a) Decide your approach. (b) Draft a 120–180 word public statement. (c) Draft the 5-line summary at the top of an emergency board note, including the cost as a share of revenue.`,
        hints: ["Use the first-24-hours framework: people first, known/unknown, action, update time.", "$14m ÷ $300m is the cost as a share of revenue.", "Who must hear before the public: regulators, retailers, employees?"],
        model: `<p><b>(a) Approach:</b> act now. A child-safety risk with possible serious harm outweighs the cost of a recall; waiting two weeks risks injuries, regulatory penalties and destroyed trust if the rumour breaks first. Notify the product-safety regulator and major retailers this morning, brief employees at the same time as the public, issue a voluntary recall with a stop-use instruction, and keep testing in parallel.</p><p><b>(b) Public statement (about 150 words):</b><br><i>“Today we are recalling our [Model X] child car seat because tests show its buckle may release in a severe crash. We know of no injuries, but your child’s safety comes first, so please stop using this model now and use another seat if you can. Check your model number at [website] or call [number], open 24 hours. We will send every owner a free replacement seat or a full refund, whichever you prefer, and cover shipping. We have told the [regulator] and our retail partners, and we are working with them. Our engineers are continuing tests and we will publish an update by Friday at 5 pm. I am sorry for the worry this causes families who trusted us. — [Name], CEO”</i></p><p><b>(c) Board note summary:</b></p><ol><li>Voluntary recall of 120,000 Model X seats announced today after a buckle defect was found; no injuries known.</li><li>Estimated cost <b>$14m ≈ 4.7% of annual revenue</b> ($14m ÷ $300m); covered by cash, no financing needed.</li><li>Regulator, top retailers and staff notified before public announcement.</li><li>Root-cause review under way; update to the board Friday.</li><li>Decision needed: approve recall budget and an independent safety review of all buckle suppliers.</li></ol><p><b>Why:</b> the statement leads with the child-safety action, separates known from unknown, gives a remedy and a next-update time, and has an accountable signatory — the Tylenol pattern, not the BP pattern.</p>`
      },
      takeaways: [
        "People forgive bad news more readily than surprise or spin.",
        "In a crisis: people first, known/unknown, visible action, next update time.",
        "Words must be backed by action — Tylenol worked because the recall proved the message.",
        "Hard announcements: what, who, when, why, support, and an accountable leader, in plain words.",
        "Board and investor updates put the bad news in the summary, with a plan."
      ]
    }
  ]
});
