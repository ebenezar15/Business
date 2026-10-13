/* MBA Studio — Track 26: Self-Leadership & Interpersonal Dynamics */
MBA.addTrack({
  id: 'self-leadership',
  stage: 4,
  order: 26,
  title: 'Self-Leadership & Interpersonal Dynamics',
  icon: '🧭',
  color: '#059669',
  tagline: 'Lead yourself first — everything else is easier after that',
  summary: `Before you can lead a team, a company or a negotiation, you have to lead the person in the mirror. This track is a practical workshop: you will map your values and blind spots, manage your own reactions, build trust and handle hard conversations, influence people you do not manage, protect your energy and judgement, and build a career strategy and support network that carry you through setbacks. Expect lots of exercises — the learning happens when you do them.`,
  outcomes: [
    'Map your values, strengths and blind spots with the Johari window and structured feedback',
    'Recognise and regulate your emotional reactions using evidence-based techniques',
    'Build trust deliberately and run difficult and feedback conversations well',
    'Influence peers, senior leaders and partners without formal authority',
    'Protect focus and energy, make cleaner decisions and spot early signs of burnout',
    'Bounce back from setbacks and design a career strategy with a personal board of directors'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'self-leadership-1',
      title: 'Self-awareness: values, strengths, feedback and the Johari window',
      level: 'Beginner',
      minutes: 14,
      hook: `Most people believe they know themselves well — and the people who work with them often see something rather different.`,
      eli5: `Think of your face. You see it in the mirror every day, so you think you know it — but you have never seen the back of your own head, and your friends see it all the time. Self-awareness is like using two mirrors: one is honest reflection on what you value and what you are good at; the other is asking people around you what they see that you cannot. The more you use both mirrors, the fewer surprises you get.`,
      blocks: [
        {
          type: 'text', title: 'Two kinds of self-awareness',
          html: `<p>Organisational psychologist Tasha Eurich distinguishes two kinds:</p><ul><li><b>Internal self-awareness</b> — how clearly you see your own values, passions, reactions and impact.</li><li><b>External self-awareness</b> — how well you understand how <i>other people</i> see you.</li></ul><p>They are not the same. Some people are deeply reflective but have no idea how they come across; others read the room brilliantly but cannot say what they actually want. Her research suggests far fewer people are genuinely self-aware than believe they are — and that experience and seniority can make it worse, because fewer people give senior leaders honest feedback.</p><p>A practical tip from the same research: when reflecting, ask <b>“what?”</b> (“What situations drain me? What would I do differently?”) rather than <b>“why?”</b> (“Why am I like this?”), which tends to spiral into rumination.</p>`
        },
        {
          type: 'matrix', name: 'The Johari window', xLabel: 'Known to me → Not known to me', yLabel: 'Not known to others → Known to others (top)',
          cells: [
            { label: 'Open (arena)', desc: 'What you and others both see: your skills, style, stated values. Growing this area builds trust and makes teamwork easier.' },
            { label: 'Blind spot', desc: 'What others see but you do not: “you interrupt when excited”, “you go quiet when you disagree”. Only feedback can shrink it.' },
            { label: 'Hidden (façade)', desc: 'What you know but keep private: doubts, ambitions, mistakes. Some privacy is healthy; appropriate self-disclosure builds connection.' },
            { label: 'Unknown', desc: 'What neither you nor others yet know: untested strengths, reactions to situations you have never faced. New challenges reveal it.' }
          ]
        },
        {
          type: 'framework', name: 'Clarify your values in 30 minutes', by: 'Common coaching exercise', when: 'Starting a new role, facing a big career choice, or feeling “off” without knowing why.',
          steps: [
            { label: '1. Peak moments', desc: 'Write down three moments at work or school when you felt proud, energised and most yourself. What was happening?' },
            { label: '2. Low moments', desc: 'Write down two moments when you felt angry, drained or compromised. Values often show up most clearly when they are violated.' },
            { label: '3. Extract the values', desc: 'For each moment, name the value at stake: fairness, mastery, freedom, family, recognition, security, creativity, service, loyalty…' },
            { label: '4. Shortlist five', desc: 'Group similar words and pick your top five. Define each in one sentence in your own words — “fairness” means different things to different people.' },
            { label: '5. Stress-test', desc: 'Rank them: if you had to give up one, which goes first? Then check your calendar and bank statement: does how you spend time and money match the list?' }
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'The “reflected best self” exercise',
          html: `<p>Researchers including Laura Morgan Roberts and colleagues developed an exercise to find strengths through others’ eyes:</p><ol><li>Ask 10–15 people from different parts of your life to write a short story of a time you were at your best.</li><li>Look for patterns across the stories: what were you doing, and what impact did it have?</li><li>Write a short “best self” portrait and use it to shape roles and projects.</li></ol><p>Strengths that others notice repeatedly — but you take for granted — are often your most valuable ones. Tools such as Gallup’s CliftonStrengths can offer a starting vocabulary, but stories from real people are the stronger evidence.</p>`
        },
        {
          type: 'case', company: 'Microsoft — Satya Nadella', year: '2014', title: 'A public blind spot, owned quickly',
          situation: `You met Nadella’s growth-mindset culture change in <b>People</b>. A personal example from early in his tenure: months after becoming CEO in 2014, he was asked at the Grace Hopper Celebration of Women in Computing what advice he had for women uncomfortable asking for a raise. He suggested trusting that the system would reward them over time — “good karma”.`,
          decision: `The answer drew immediate criticism for ignoring the real pay gaps women face. Within hours Nadella emailed Microsoft employees saying he had answered the question “completely wrong”, and later wrote that the episode taught him about his own blind spots.`,
          outcome: `The quick, unqualified admission was widely noted, and Microsoft continued to publish pay-equity information in later years. Nadella has described learning, including from mistakes, as central to the “learn-it-all” culture he wanted.`,
          lesson: `Everyone has a blind spot — even a CEO who champions learning. What matters is how fast you notice it, own it without excuses and act on it.`
        },
        {
          type: 'checklist', title: 'Collect useful feedback this month',
          items: [
            'Pick 5 people who see you in different settings (boss, peer, direct report, customer, friend)',
            'Ask one specific question: “What is one thing I do that I should keep doing, and one thing I could do differently?”',
            'Make it safe: ask in private, give them time, and say “I’ll only say thank you, not argue”',
            'Write down exactly what was said, then say thank you — no defending',
            'Look for themes that appear 2+ times: those are your likely blind spots',
            'Choose one behaviour to work on and tell someone, so they can notice progress',
            'Go back in 6–8 weeks and ask: “Have you noticed any change?”'
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> Three colleagues independently tell you that in meetings you “shut down ideas too quickly”. Your instinct is that you are just being efficient and they are being too sensitive. What is the most self-aware response?`,
          options: [
            { text: 'Explain to them that you are just efficient and they should not take it personally.', feedback: 'This defends the intention (“I’m efficient”) and ignores the impact. Three independent people saying the same thing is strong evidence of a blind spot.', good: false },
            { text: 'Thank them, treat the pattern as real, and run an experiment: for the next month, ask two questions about any idea before evaluating it — and ask one colleague to tell you how it is going.', feedback: 'Exactly. You accept the data, separate intent from impact, and turn feedback into a small, observable behaviour change with a feedback loop.', good: true },
            { text: 'Stop contributing ideas in meetings altogether, to be safe.', feedback: 'Over-correction. The goal is not to silence yourself but to change one specific behaviour so others’ ideas get a fair hearing.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Internal self-awareness', def: 'Seeing clearly your own values, passions, aspirations, reactions and impact.' },
        { term: 'External self-awareness', def: 'Understanding how other people see you.' },
        { term: 'Johari window', def: 'A 2x2 model (Luft and Ingham, 1955) of what is known or unknown to you and to others: open, blind, hidden and unknown.' },
        { term: 'Blind spot', def: 'Something about you that others can see but you cannot — reduced only through feedback.' },
        { term: 'Core values', def: 'The small set of principles that most drive your choices and sense of fulfilment.' },
        { term: 'Intent vs impact', def: 'The difference between what you meant to do and how it actually affected others; feedback is mostly about impact.' }
      ],
      quiz: [
        {
          q: 'A colleague tells you that you sigh loudly whenever the finance team presents. You had no idea. Which Johari quadrant was this in?',
          options: ['Open', 'Hidden', 'Blind spot', 'Unknown'],
          answer: 2,
          explain: 'Others knew; you did not — the definition of a blind spot.'
        },
        {
          q: 'According to Tasha Eurich’s work, which reflection question is more useful?',
          options: ['“What situations bring out my worst, and what could I do differently?”', '“Why am I like this?”', '“Why do people misunderstand me?”', '“Why can’t I change?”'],
          answer: 0,
          explain: '“What” questions lead to insight and action; “why” questions often spiral into rumination.'
        },
        {
          q: 'You ask 6 people for feedback. 4 mention you rarely share credit; 1 mentions punctuality; 1 says nothing. What share of respondents raised the credit theme?',
          options: ['4%', '40%', '50%', 'About 67%'],
          answer: 3,
          explain: '4 ÷ 6 ≈ 67%. A theme raised by two-thirds of people is very likely real, even if it surprises you.'
        },
        {
          q: 'What is the best evidence for a strength in the “reflected best self” exercise?',
          options: ['Your own gut feeling', 'Patterns that appear across stories from many different people', 'A single personality test score', 'Your job title'],
          answer: 1,
          explain: 'Repeated patterns across several independent stories are stronger evidence than any single source.'
        },
        {
          q: 'Your top value is “family”, but your calendar shows 70-hour weeks and no evening free for a month. What does the values exercise suggest?',
          options: ['Values do not matter at work', 'Change your value to “achievement”', 'Nothing — this is normal', 'There is a gap between stated values and actual choices worth addressing deliberately'],
          answer: 3,
          explain: 'Comparing values with how you spend time and money reveals gaps you can choose to close — or consciously accept for a set period.'
        }
      ],
      challenge: {
        title: 'Your personal self-awareness audit',
        prompt: `You are a team lead six months into your first management role. Your team’s engagement score dropped from 78 to 64 (out of 100). In the anonymous comments, three people mention “decisions made without us” and two mention “feedback only when something goes wrong”. Your own view is that you have been protecting the team from senior-management chaos.<br><br>Design a 60-day self-awareness plan: what you will reflect on, whom you will ask and how, what you will change, and how you will measure progress.`,
        hints: ['Separate your intent (protecting the team) from the impact (people feel excluded).', 'Use both mirrors: internal reflection and external feedback.', 'Pick one or two observable behaviours, not a personality overhaul.'],
        model: `<p><b>1. Read the data honestly</b></p><ul><li>Engagement fell 14 points (78 → 64), an 18% relative drop (14 ÷ 78).</li><li>Two themes: exclusion from decisions (3 mentions) and only negative feedback (2 mentions). These sit in my <b>blind spot</b>: my intent was protection; the impact is exclusion.</li></ul><p><b>2. Internal mirror (week 1)</b></p><ul><li>Values exercise: is “protecting the team” really about control or my own discomfort with conflict?</li><li>“What” questions: What decisions did I make alone in the last month? Which could the team have shaped?</li></ul><p><b>3. External mirror (weeks 1–3)</b></p><ul><li>One-to-ones with each team member: “What is one thing I should keep doing and one thing I should change?” Only reply “thank you”.</li><li>Ask my own manager and one peer what they observe.</li></ul><p><b>4. Two behaviour experiments (weeks 3–8)</b></p><ol><li><b>Decision sharing:</b> for any decision affecting the team, state upfront whether it is “I decide”, “I decide after your input” or “you decide” — and invite input before deciding.</li><li><b>Positive feedback:</b> give at least two specific pieces of positive feedback per person per month.</li></ol><p><b>5. Measure</b>: a 3-question pulse survey at day 30 and day 60 (“I have a say in decisions that affect me”, “I get useful feedback”, “I would recommend this team”); target 70+ on the next full survey. Share the plan with the team at the start — making it public builds accountability and the open area of the Johari window.</p>`
      },
      takeaways: [
        'Self-awareness has two mirrors: internal reflection and how others see you.',
        'Blind spots shrink only through feedback — make it safe and only say “thank you”.',
        'Ask “what” not “why” when reflecting.',
        'Check whether your calendar and spending match your stated values.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'self-leadership-2',
      title: 'Emotional intelligence: managing your own reactions',
      level: 'Beginner',
      minutes: 14,
      hook: `The email you write in the first ten minutes after being angry is almost never the one you want your boss to read.`,
      eli5: `Imagine a dog that barks at every sound. Barking is useful when there is a burglar, but not at the postman every morning. Your emotions are like that dog: they are quick, protective and often useful — but sometimes they react to the postman. Emotional intelligence is not about making the dog stop barking; it is about noticing it is barking, checking what it is barking at, and deciding calmly what to do next. And it is also about noticing when other people’s dogs are barking.`,
      blocks: [
        {
          type: 'framework', name: 'Four domains of emotional intelligence', by: 'Peter Salovey & John Mayer (1990) introduced the concept; Daniel Goleman popularised this four-domain model', when: 'Diagnosing which part of your emotional skill set needs work.',
          steps: [
            { label: 'Self-awareness', desc: 'Noticing your emotions as they happen and understanding what triggers them.' },
            { label: 'Self-management', desc: 'Choosing your response: staying calm under pressure, recovering from setbacks, keeping commitments when you do not feel like it.' },
            { label: 'Social awareness', desc: 'Reading other people’s emotions and the mood of a group; empathy.' },
            { label: 'Relationship management', desc: 'Using all of the above to influence, resolve conflict, coach and work in teams.' }
          ]
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: “EQ matters more than IQ”',
          html: `<p>Popular books have claimed emotional intelligence matters “twice as much” as IQ for success. The research is more modest: measures of emotional intelligence do predict some job performance and leadership outcomes, especially in roles with lots of interpersonal contact, but effects vary by how EI is measured and overlap with personality and general ability.</p><p>The useful takeaway is not a ranking — it is that emotional skills are <b>learnable</b> and matter a lot when the job is working with people, which describes almost every leadership job.</p>`
        },
        {
          type: 'framework', name: 'The pause routine: notice → name → choose', by: 'Built on emotion-regulation research (James Gross) and affect-labelling studies (Matthew Lieberman and colleagues)', when: 'The moment you feel a strong reaction: anger, panic, defensiveness, embarrassment.',
          steps: [
            { label: '1. Notice the body', desc: 'Strong emotion usually shows physically first: jaw tight, face hot, heart racing, urge to interrupt. Treat it as a signal to slow down.' },
            { label: '2. Pause and breathe', desc: 'A few slow breaths with longer exhales. Buy time with a neutral phrase: “Let me think about that.”' },
            { label: '3. Name it precisely', desc: 'Silently label the feeling: not just “bad” but “embarrassed”, “undermined”, “anxious about the deadline”. Lab studies suggest labelling an emotion in words can reduce its intensity.' },
            { label: '4. Reframe (reappraise)', desc: 'Ask: what else could explain this? Is it a threat or a problem to solve? What would I advise a friend?' },
            { label: '5. Choose a response', desc: 'Decide what outcome you want, then act — or decide to wait. Sleeping on an angry email is a valid response.' }
          ]
        },
        {
          type: 'compare', title: 'Suppression vs reappraisal', headers: ['', 'Suppression', 'Reappraisal'],
          rows: [
            ['What it is', 'Hiding the emotion: keeping a straight face while boiling inside', 'Changing how you interpret the situation, so the emotion itself shifts'],
            ['Example', '“I’m fine” — said through gritted teeth', '“My boss is under pressure from the board; this isn’t about me”'],
            ['What research by James Gross and others suggests', 'Habitual use is linked to worse memory of the conversation, more stress and weaker relationships', 'Habitual use is linked to better wellbeing and relationships'],
            ['When it helps', 'Short term, when you must stay composed (a live client meeting)', 'Most of the time — but not as a way to excuse genuine mistreatment']
          ]
        },
        {
          type: 'case', company: 'PepsiCo — Indra Nooyi', year: '2006–2018', title: 'Social awareness at scale',
          situation: `Indra Nooyi became CEO of PepsiCo in 2006 — one of very few women and immigrants leading a company of that size at the time. Leading a global workforce, she wanted senior executives to feel seen as whole people, not just as results.`,
          decision: `After a visit home to India, where relatives and neighbours congratulated her mother on raising a CEO, Nooyi began writing personal letters to the parents of her senior executives, thanking them for the “gift” of their child to the company. She has described this in interviews and in her memoir, <i>My Life in Full</i> (2021).`,
          outcome: `She has said many executives and parents were deeply moved, and the practice became one of the best-known examples of her leadership style. During her tenure she also pushed PepsiCo’s “Performance with Purpose” agenda.`,
          lesson: `Social awareness means noticing what matters to people beyond the job description. Small, personal acts of recognition can have outsized effects on loyalty and trust.`
        },
        {
          type: 'flip', title: 'Build your emotion vocabulary',
          cards: [
            { front: '“I’m angry” — what else could it be?', back: 'Frustrated (blocked from a goal), resentful (treated unfairly), betrayed (trust broken), irritated (small repeated annoyance). Each points to a different fix.' },
            { front: '“I’m stressed” — what else could it be?', back: 'Overwhelmed (too much), anxious (uncertain future), pressured (someone else’s expectations), unprepared (skill or time gap).' },
            { front: '“I feel bad about the meeting”', back: 'Embarrassed (exposed in front of others), disappointed (expected more), guilty (I did something wrong), ashamed (I am something wrong). Guilt can drive repair; shame tends to drive hiding.' },
            { front: 'Why bother naming precisely?', back: 'A precise label tells you what need is unmet and what action might help — and labelling itself can take some of the heat out of the feeling.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> In a leadership meeting, a peer says in front of your boss: “Honestly, the delays are mostly because of your team.” You feel your face go hot. It is partly true — but your team was waiting on his for two weeks. What do you do in the next 60 seconds?`,
          options: [
            { text: 'Fire back immediately: “That’s rich, given your team held us up for two weeks.”', feedback: 'It may be true, but in the heat of the moment it looks defensive and turns a problem into a fight in front of your boss. The audience remembers the tone, not the facts.', good: false },
            { text: 'Say nothing, then complain about him to your team afterwards.', feedback: 'Suppression plus venting: the issue stays unresolved, your boss hears only one side, and you damage the relationship further behind his back.', good: false },
            { text: 'Breathe, then say calmly: “There were delays on our side — and some came from a dependency on your team. Shall we map the timeline together after this and bring a joint fix back to the group?”', feedback: 'Strong. You owned your part, corrected the record without attacking, and moved to problem-solving. Pausing and reappraising (“he’s under pressure too”) made a composed response possible.', good: true }
          ]
        },
        {
          type: 'checklist', title: 'A two-minute daily emotional check-in',
          items: [
            'Morning: what am I likely to feel today, and in which meeting?',
            'Name one emotion I felt strongly yesterday — precisely',
            'What triggered it, and what need was underneath (respect, control, certainty, fairness)?',
            'Did I respond or react? What would I do differently?',
            'Notice one person whose mood seemed off — check in with them',
            'Rule for the week: no important email sent within 30 minutes of feeling angry'
          ]
        }
      ],
      terms: [
        { term: 'Emotional intelligence (EI)', def: 'The ability to recognise, understand and manage your own emotions and to recognise and influence the emotions of others.' },
        { term: 'Self-management', def: 'Choosing your response to emotions rather than being driven by them.' },
        { term: 'Affect labelling', def: 'Putting a feeling into words (“I feel anxious”); studies suggest it can reduce emotional intensity.' },
        { term: 'Cognitive reappraisal', def: 'Changing how you interpret a situation so your emotional response changes.' },
        { term: 'Expressive suppression', def: 'Hiding outward signs of an emotion without changing the feeling itself.' },
        { term: 'Trigger', def: 'A situation, word or behaviour that reliably provokes a strong emotional reaction in you.' }
      ],
      quiz: [
        {
          q: 'Which domain of emotional intelligence is about reading a group’s mood before a meeting?',
          options: ['Self-awareness', 'Self-management', 'Social awareness', 'Technical skill'],
          answer: 2,
          explain: 'Reading others’ emotions and group dynamics is social awareness.'
        },
        {
          q: 'You tell yourself, “My client is shouting because their own boss is threatening their job — this isn’t personal.” Which technique is this?',
          options: ['Cognitive reappraisal', 'Suppression', 'Avoidance', 'Venting'],
          answer: 0,
          explain: 'You changed your interpretation of the situation — the definition of reappraisal.'
        },
        {
          q: 'What does research generally suggest about habitual emotional suppression?',
          options: ['It is the healthiest strategy', 'It is linked to more stress and weaker relationships than reappraisal', 'It has no effects', 'It improves memory of conversations'],
          answer: 1,
          explain: 'Studies by James Gross and colleagues link habitual suppression to worse wellbeing and relationship outcomes than reappraisal.'
        },
        {
          q: 'Which statement about EI is most accurate?',
          options: ['EI is fixed at birth', 'EI has been proven to matter twice as much as IQ in every job', 'EI is unrelated to leadership', 'EI skills are learnable and matter most in roles with lots of interpersonal contact'],
          answer: 3,
          explain: 'The evidence supports EI as learnable and useful, especially in people-heavy roles — not dramatic universal claims.'
        },
        {
          q: 'You set a rule to wait 30 minutes before replying to any email that makes you angry. You receive 5 such emails a week and used to reply instantly; about 2 of those replies a week caused problems. If the rule prevents 3 out of 4 problem replies, how many problem replies remain each month (4 weeks)?',
          options: ['2', '6', '8', '0'],
          answer: 0,
          explain: '2 problem replies × 4 weeks = 8 per month; preventing 3/4 leaves 8 × 1/4 = 2.'
        }
      ],
      challenge: {
        title: 'Map and rewire your top trigger',
        prompt: `You are a product manager. Over the last month you noticed three incidents where you reacted badly: (1) you snapped at an engineer who said a feature would be late; (2) you sent a sharp Slack message after a sales leader promised a customer something not on the roadmap; (3) you went silent and disengaged when your boss changed priorities without consulting you.<br><br>Identify the common trigger and underlying need, design a pause routine for each situation, and write the words you would actually say next time.`,
        hints: ['Look for the common thread: what was threatened each time — control, respect, certainty?', 'Use notice → name → choose.', 'Write real sentences, not principles.'],
        model: `<p><b>1. Common trigger</b>: in all three, a commitment I care about changed <i>without my input</i>. The underlying need is <b>control/predictability</b> (and some respect). Naming it precisely: not “angry” but “undermined and anxious about letting customers down”.</p><p><b>2. Pause routines and scripts</b></p><table><thead><tr><th>Situation</th><th>Pause</th><th>What I will say</th></tr></thead><tbody><tr><td>Engineer says “it will be late”</td><td>Breathe; reappraise: telling me early is a gift, not a failure</td><td>“Thanks for flagging early. What’s driving the delay, and what are our options — cut scope, move the date, or add help?”</td></tr><tr><td>Sales over-promises</td><td>No reply for 30 minutes; draft, then edit</td><td>“I want to help you keep this customer. This isn’t on the roadmap yet — can we get on a call today to agree what we can honestly offer?”</td></tr><tr><td>Boss changes priorities</td><td>Notice the urge to withdraw; name it (“I feel sidelined”)</td><td>“I want to make sure I understand the new priority. Can you share what changed? And for next time, could I get an early heads-up so I can prepare the team?”</td></tr></tbody></table><p><b>3. Prevention</b>: since the trigger is surprises, build early-warning habits — a weekly risk check with engineering, a shared roadmap page for sales, and a standing monthly priorities conversation with my boss.</p><p><b>4. Measure</b>: count “reactions I regret” per week in a simple log; target from about one a week to one a month within two months.</p>`
      },
      takeaways: [
        'Emotional intelligence = self-awareness, self-management, social awareness and relationship management.',
        'Notice → name → choose: a few seconds of pause changes the conversation.',
        'Reappraisal beats suppression as a habit.',
        'Find your top trigger and the need underneath it; build habits that prevent it.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'self-leadership-3',
      title: 'Trust, feedback and difficult conversations',
      level: 'Intermediate',
      minutes: 16,
      hook: `The conversations you are avoiding are usually the ones that would change your career, your team or your relationships the most.`,
      eli5: `Trust is like a piggy bank. Every time you keep a promise, tell the truth kindly, or show you care more about the other person than about looking good, you drop a coin in. A difficult conversation spends some coins. If the bank is full, the conversation goes fine and often adds coins afterwards. If it is empty, even a small conversation feels like a fight. So fill the bank early — and learn to spend it well.`,
      blocks: [
        {
          type: 'formula', name: 'The trust equation', expr: 'Trust = (Credibility + Reliability + Intimacy) ÷ Self-orientation',
          explain: `From David Maister, Charles Green and Robert Galford’s <i>The Trusted Advisor</i> (2000). <b>Credibility</b>: do you know what you are talking about and say it honestly? <b>Reliability</b>: do you do what you said, consistently? <b>Intimacy</b>: is it safe to share sensitive things with you? <b>Self-orientation</b>: how much are you focused on yourself (looking smart, winning, your commission) rather than the other person? It sits in the denominator, so it has the largest effect. Score each from 1 to 10 as a thinking tool — it is not a precise measurement.`,
          example: `A consultant is credible (8), reliable (7) and moderately safe to confide in (6), but always steering conversations to her next sale (self-orientation 7). Trust = (8 + 7 + 6) ÷ 7 = 21 ÷ 7 = <b>3.0</b>. If she simply listened more and stopped pitching (self-orientation 3), trust = 21 ÷ 3 = <b>7.0</b> — more than double, without becoming any smarter.`
        },
        {
          type: 'text', title: 'Feedback: from SBI to a two-way conversation',
          html: `<p>You met the <b>SBI model</b> (Situation–Behaviour–Impact) and Radical Candor in <b>People</b>. Here we go further in two directions:</p><ul><li><b>Add Intent (SBI-I).</b> After describing the impact, ask about their intent: “What were you aiming for?” This turns a verdict into a conversation and often reveals information you did not have.</li><li><b>Get good at receiving.</b> Douglas Stone and Sheila Heen (<i>Thanks for the Feedback</i>, 2014) argue the receiver controls whether feedback lands — so the skill that matters most for your growth is receiving well.</li></ul><p>Rule of thumb: feedback about <b>behaviour</b> (“you interrupted Priya twice”) can be acted on; feedback about <b>character</b> (“you’re arrogant”) mostly triggers defence.</p>`
        },
        {
          type: 'callout', kind: 'example', title: 'An SBI-I script, start to finish',
          html: `<p><b>Situation:</b> “In yesterday’s client call…”</p><p><b>Behaviour:</b> “…when the client asked about pricing, you said we could ‘probably do 20% off’ before we’d discussed it.”</p><p><b>Impact:</b> “That anchored them at 20%, and our margin on the deal drops to near zero. It also put me in a tricky spot with finance.”</p><p><b>Intent:</b> “I’m guessing you were trying to keep the deal moving — what was going through your mind?”</p><p><b>Next step:</b> “Can we agree that discounts go through a quick check with me first? I’ll make sure I reply within the hour.”</p>`
        },
        {
          type: 'framework', name: 'The three feedback triggers (and what to do)', by: 'Douglas Stone & Sheila Heen, 2014', when: 'You feel defensive while receiving feedback — diagnose which trigger fired.',
          steps: [
            { label: 'Truth trigger', desc: '“That’s just wrong.” You reject the content. Fix: get specific — ask “Can you give me an example?” and “What would it look like if I did it well?” Look for what is right in it before what is wrong.' },
            { label: 'Relationship trigger', desc: '“Who are you to tell me?” You react to the giver, not the message. Fix: separate the two topics — discuss the feedback first, then the relationship issue separately.' },
            { label: 'Identity trigger', desc: '“I’m a failure.” The feedback threatens your sense of who you are. Fix: replace all-or-nothing labels with a growth view — “I’m someone who is working on this.”' }
          ]
        },
        {
          type: 'framework', name: 'The three conversations inside every difficult conversation', by: 'Douglas Stone, Bruce Patton & Sheila Heen, Difficult Conversations, 1999', when: 'Preparing for any conversation you are dreading.',
          steps: [
            { label: '1. The “what happened?” conversation', desc: 'Each side has its own story. Shift from “who’s right?” to “how do we each see it?” and from blame to “what did we each contribute?”. Separate intent from impact.' },
            { label: '2. The feelings conversation', desc: 'Difficult conversations are full of feelings that leak out if ignored. Name yours briefly and acknowledge theirs before problem-solving.' },
            { label: '3. The identity conversation', desc: 'What does this situation say about me — am I competent, good, worthy of respect? Knowing what is at stake for you keeps you steady.' },
            { label: 'Then: start from the “third story”', desc: 'Open by describing the difference as a neutral observer would: “We seem to see the launch timeline differently — I’d like to understand your view and share mine.”' }
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> A long-time team member, who is also a friend, has missed three deadlines this quarter, and others are starting to cover for her. You have avoided raising it because she has had a hard year personally. What is the best way to open the conversation?`,
          options: [
            { text: '“I know things have been hard, so don’t worry about the deadlines — we’ll manage.”', feedback: 'Kind in the moment but unfair to the team and to her: she is denied clear expectations and the chance to fix it. This is what Radical Candor calls ruinous empathy.', good: false },
            { text: '“You’ve missed three deadlines and people are fed up. This needs to stop.”', feedback: 'Direct but harsh, and it leads with judgement and others’ frustration rather than facts and care. Likely to trigger the identity and relationship triggers.', good: false },
            { text: '“I care about you and about how this goes for you, so I want to talk about something I’ve been avoiding. The last three deadlines slipped, and others have been covering. I’d like to understand what’s going on and work out together what would help.”', feedback: 'Strong. It combines care and directness, states facts not character, owns your own avoidance, and invites her story first (the “what happened” conversation).', good: true }
          ]
        },
        {
          type: 'checklist', title: 'Before a difficult conversation',
          items: [
            'What is my purpose? (Understand, solve a problem, agree next steps — not “win”)',
            'What are the facts, and what are my interpretations of them?',
            'What did I contribute to the situation?',
            'What might their story be? What might they be feeling?',
            'What is at stake for my identity — and am I steady about it?',
            'My opening sentence, written as the “third story”',
            'One question I will ask before giving my view',
            'Time and place: private, unhurried, not on a Friday at 6pm'
          ]
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Which conversation first?',
          note: `List the 3–5 conversations you are avoiding. Score each on impact if resolved, cost of waiting, relationship risk and your readiness. Weight “cost of waiting” highest and see which one rises to the top — then schedule it this week.`
        }
      ],
      terms: [
        { term: 'Trust equation', def: 'Trust = (Credibility + Reliability + Intimacy) ÷ Self-orientation; a model from The Trusted Advisor.' },
        { term: 'Self-orientation', def: 'How focused you appear to be on yourself rather than the other person; the biggest destroyer of trust.' },
        { term: 'SBI-I', def: 'Situation–Behaviour–Impact–Intent: the SBI feedback model plus a question about the other person’s intent.' },
        { term: 'Feedback triggers', def: 'Truth, relationship and identity reactions that make us reject feedback (Stone and Heen).' },
        { term: 'Third story', def: 'A neutral description of a disagreement that both sides would accept, used to open a difficult conversation.' },
        { term: 'Ruinous empathy', def: 'Caring personally but failing to challenge directly; withholding needed feedback to avoid discomfort.' }
      ],
      quiz: [
        {
          q: 'Using the trust equation, an advisor scores Credibility 9, Reliability 6, Intimacy 5 and Self-orientation 4. What is the trust score?',
          options: ['5.0', '4.0', '20.0', '2.0'],
          answer: 0,
          explain: '(9 + 6 + 5) ÷ 4 = 20 ÷ 4 = 5.0.'
        },
        {
          q: 'Which change would usually increase trust the MOST, according to the trust equation?',
          options: ['Adding one more credential', 'Sounding more confident', 'Reducing self-orientation — listening more and pushing your own agenda less', 'Sending more status updates'],
          answer: 2,
          explain: 'Self-orientation is the denominator, so lowering it multiplies the effect of everything above it.'
        },
        {
          q: 'You hear feedback and think “Who is she to judge me — she’s always late herself.” Which trigger is this?',
          options: ['Truth trigger', 'Identity trigger', 'No trigger', 'Relationship trigger'],
          answer: 3,
          explain: 'You are reacting to the giver rather than the content — the relationship trigger.'
        },
        {
          q: 'What does the “I” in SBI-I add?',
          options: ['Asking about the other person’s intent, turning a verdict into a conversation', 'Impact on the company share price', 'An instruction to improve', 'Information about HR policy'],
          answer: 0,
          explain: 'Intent invites their side of the story and often surfaces information you did not have.'
        },
        {
          q: 'Which opening best uses the “third story”?',
          options: ['“You always ignore my emails.”', '“It looks like we see the hiring plan differently — I’d like to understand your view and share mine.”', '“My boss agrees with me, so…”', '“I’m sure you didn’t mean it, but you were wrong.”'],
          answer: 1,
          explain: 'The third story describes the disagreement neutrally, in a way both sides would accept.'
        }
      ],
      challenge: {
        title: 'Rebuild trust with a key peer',
        prompt: `You lead marketing at a 150-person software company. Your relationship with the head of sales has broken down: he says marketing leads are “junk”; you think his team does not follow up (your data: of 400 marketing-qualified leads last quarter, only 160 were contacted within 48 hours). Two weeks ago you argued in front of the CEO. You need his support for next year’s plan.<br><br>Score the trust equation from his point of view, plan the conversation using the three conversations, and write your opening lines and the feedback you would give using SBI-I.`,
        hints: ['Contact rate = contacted ÷ total leads.', 'How does he see your self-orientation after the argument in front of the CEO?', 'What did you contribute to the problem?'],
        model: `<p><b>1. The facts</b>: 160 ÷ 400 = <b>40%</b> of leads contacted within 48 hours. That is a real issue — but so might be lead quality. Both can be true.</p><p><b>2. Trust equation from his view (honest estimate)</b>: Credibility 6 (he doubts the leads), Reliability 7, Intimacy 3 (we argued publicly), Self-orientation 8 (he sees me defending marketing’s numbers). Trust = (6 + 7 + 3) ÷ 8 = 16 ÷ 8 = <b>2.0</b>. Biggest levers: lower self-orientation and rebuild intimacy.</p><p><b>3. Three conversations</b></p><ul><li><b>What happened:</b> his story is likely “my reps waste time on unqualified leads”; mine is “good leads go cold”. My contribution: I never asked his reps what a good lead looks like, and I raised it first in front of the CEO.</li><li><b>Feelings:</b> he probably felt embarrassed in front of the CEO; I felt dismissed.</li><li><b>Identity:</b> for me — “am I a leader who delivers?”; I can be steady about that without winning this argument.</li></ul><p><b>4. Opening (third story + ownership)</b>: “I want to start by apologising for raising the lead issue in front of the CEO — that wasn’t fair to you. It seems we see the lead problem differently, and I’d really like to understand what your reps are seeing.”</p><p><b>5. Feedback (later in the conversation, SBI-I)</b>: “Last quarter (S), about 40% of the 400 leads were contacted within 48 hours (B). Our data shows leads go cold fast, so we may both be losing deals (I). What’s getting in the way for your reps (Intent)?”</p><p><b>6. Joint next step</b>: agree a shared definition of a qualified lead with his top reps, a 24-hour follow-up target for leads meeting it, and a monthly joint review — and present it to the CEO <i>together</i>.</p>`
      },
      takeaways: [
        'Trust = (Credibility + Reliability + Intimacy) ÷ Self-orientation — lowering self-focus pays most.',
        'Upgrade SBI to SBI-I: ask about intent before concluding.',
        'Receiving feedback is a skill: diagnose truth, relationship and identity triggers.',
        'Every difficult conversation has three layers: what happened, feelings and identity.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'self-leadership-4',
      title: 'Influence without authority, managing up and building your network',
      level: 'Intermediate',
      minutes: 16,
      hook: `The higher you rise, the less you get done by telling people what to do — and the more by people choosing to help you.`,
      eli5: `Imagine you want to build a giant sandcastle at the beach, but you are not in charge of anyone. You could shout orders (nobody listens). Or you could notice what each kid wants: one loves digging moats, one wants to be in the photo, one just wants to hang out with the cool older kid. If you help each of them get what they want while building your castle, suddenly everyone is helping. Influence is trading in the things other people care about — honestly, and so everyone comes out ahead.`,
      blocks: [
        {
          type: 'framework', name: 'The influence model: trade in currencies', by: 'Allan Cohen & David Bradford, Influence Without Authority', when: 'You need help from someone who does not report to you — a peer, another team, a partner, a senior leader.',
          steps: [
            { label: '1. Assume they are a potential ally', desc: 'Start from the belief that they could help, not that they are blocking you on purpose.' },
            { label: '2. Clarify your goals and priorities', desc: 'What exactly do you need — and what can you trade off? Know your must-haves vs nice-to-haves.' },
            { label: '3. Diagnose their world', desc: 'What are they measured on? What pressures do they face from their boss? What do they worry about?' },
            { label: '4. Identify their currencies — and yours', desc: 'What do they value (see the table below), and what can you offer at low cost to you?' },
            { label: '5. Mind the relationship', desc: 'Is there trust? A history? Your approach for a stranger differs from a long-time colleague.' },
            { label: '6. Make the exchange', desc: 'Ask clearly, offer genuinely, and deliver your side. Reciprocity over time builds a reputation that makes the next ask easier.' }
          ]
        },
        {
          type: 'compare', title: 'Currencies people value at work', headers: ['Currency type', 'Examples', 'How you might offer it'],
          rows: [
            ['Inspiration', 'Vision, doing something meaningful, excellence', 'Show how the project matters to customers or the mission'],
            ['Task', 'Resources, help, information, faster delivery', 'Lend an analyst, share data, unblock a dependency'],
            ['Position', 'Recognition, visibility, reputation, contacts', 'Credit them in front of senior leaders; invite them to present'],
            ['Relationship', 'Being understood, belonging, personal support', 'Listen, include them early, follow through on small promises'],
            ['Personal', 'Learning, ownership, gratitude, comfort', 'Offer a stretch opportunity; say thank you specifically']
          ]
        },
        {
          type: 'text', title: 'Persuasion principles — and the line you must not cross',
          html: `<p>Robert Cialdini’s research (<i>Influence</i>, 1984; later editions add “unity”) identifies principles that make people more likely to say yes: <b>reciprocity</b>, <b>commitment and consistency</b>, <b>social proof</b>, <b>authority</b>, <b>liking</b>, <b>scarcity</b> and <b>unity</b> (shared identity).</p><p>Used honestly, they help good ideas get a fair hearing: start by helping (reciprocity), ask for a small first step (commitment), show that respected peers already support it (social proof), and share your genuine expertise (authority).</p><p>Used dishonestly — fake deadlines, invented consensus, flattery — they are manipulation, and they destroy trust once discovered. The test: <span class="hl">would I be comfortable if the other person saw exactly how and why I framed it this way?</span></p>`
        },
        {
          type: 'checklist', title: 'Managing up: make your boss successful (and yourself)',
          items: [
            'I know my boss’s top 3 priorities and what their own boss judges them on',
            'I know their preferred style: detail or headline? Written or verbal? Morning or evening?',
            'I bring problems with options and a recommendation, not just problems',
            'No surprises: bad news reaches them early and from me',
            'We have agreed how often we meet and what I decide alone vs escalate',
            'I ask for feedback and for what “great” would look like in my role this quarter',
            'I respect their time: one-page pre-reads, clear asks, decisions needed stated upfront',
            'When I disagree, I say so privately and clearly — then commit if the decision goes the other way'
          ]
        },
        {
          type: 'framework', name: 'Three networks every leader needs', by: 'Herminia Ibarra & Mark Hunter, “How Leaders Create and Use Networks” (2007)', when: 'Moving from a functional role into leadership, or feeling stuck in your current role.',
          steps: [
            { label: 'Operational network', desc: 'People you need to get today’s work done — mostly internal, defined by the job. Most people have this.' },
            { label: 'Personal network', desc: 'Contacts outside your organisation — peers, alumni, professional groups — for learning, referrals and perspective.' },
            { label: 'Strategic network', desc: 'Relationships that help you see future priorities and win support for them — across functions and levels. New leaders most often under-invest here, feeling it is “political”.' },
            { label: 'Weak ties matter', desc: 'Sociologist Mark Granovetter (1973) found that acquaintances — “weak ties” — are often the source of new information and job opportunities, because they move in different circles from your close friends.' }
          ]
        },
        {
          type: 'case', company: 'Illustrative', year: 'Composite example', title: 'The analyst who got a data platform built',
          situation: `Meera, a mid-level analyst at a retailer (fictional), wanted a shared customer-data dashboard. She had no budget and no authority over the IT team, whose roadmap was full. Two previous requests from her department had been rejected.`,
          decision: `She diagnosed IT’s world: they were measured on reducing ad-hoc report requests, which consumed a large share of their time. She offered a currency they valued — she would build the first version herself using existing tools and train business users, reducing their ad-hoc requests. She secured a supportive quote from a respected regional director (social proof) and asked IT only for read-access and a two-week review (a small first commitment).`,
          outcome: `IT agreed because the project solved their problem. When ad-hoc requests from her area fell, IT’s head presented the dashboard to the leadership team — with Meera credited — and added it to the official roadmap.`,
          lesson: `She stopped asking for what she wanted and started offering what they needed. Influence is mostly diagnosis.`
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> You need a senior engineer from another team for two weeks to finish a launch. Her manager, a peer of yours, has said “we’re too busy”. Which approach is most likely to work and preserve the relationship?`,
          options: [
            { text: 'Escalate to your shared boss immediately and ask them to order it.', feedback: 'Sometimes escalation is necessary, but as a first move it costs relationship capital and teaches your peer you go over their head. Save it for when exchange fails.', good: false },
            { text: 'Ask your peer what their team is under pressure to deliver, then offer something they value — e.g. one of your engineers for their backlog later, public credit for the launch, or a narrower ask (3 days, specific tasks).', feedback: 'Good. You diagnose their world, trade currencies and reduce the cost of yes. If it still fails, you can escalate together as a shared trade-off for your boss to decide.', good: true },
            { text: 'Message the engineer directly and ask her to help on the side.', feedback: 'Going around her manager damages trust with both of them and puts the engineer in an awkward position.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Influence without authority', def: 'Getting cooperation from people you do not manage by understanding and exchanging what each side values.' },
        { term: 'Currencies', def: 'Things people value — inspiration, task help, position, relationship, personal growth — that can be exchanged to build cooperation.' },
        { term: 'Managing up', def: 'Deliberately working with your boss so that both of you succeed: understanding their goals, style and pressures.' },
        { term: 'Strategic network', def: 'Relationships that help you see future priorities and gain support for them across the organisation.' },
        { term: 'Weak ties', def: 'Acquaintances outside your close circle; often a source of new information and opportunities.' },
        { term: 'Social proof', def: 'People’s tendency to follow what others like them are doing.' }
      ],
      quiz: [
        {
          q: 'According to Cohen and Bradford, what is the first step in influencing someone you do not manage?',
          options: ['Escalate to their boss', 'Assume they are a potential ally', 'Offer money', 'Send a detailed proposal'],
          answer: 1,
          explain: 'Starting from the assumption that they could help changes how you approach them — and how they respond.'
        },
        {
          q: 'Giving a peer public credit in front of the leadership team is an example of which currency?',
          options: ['Task', 'Inspiration', 'Personal', 'Position'],
          answer: 3,
          explain: 'Recognition and visibility are position-related currencies.'
        },
        {
          q: 'You spend 10 hours a week in your operational network, 1 hour in your personal network and 0 in your strategic network. Ibarra and Hunter would most likely say…',
          options: ['This is ideal', 'You should drop the personal network', 'You are under-investing in the strategic network, which matters most as you move into leadership', 'Networking is unimportant'],
          answer: 2,
          explain: 'New leaders typically over-rely on operational networks and neglect strategic ones.'
        },
        {
          q: 'Which use of a persuasion principle crosses into manipulation?',
          options: ['Inventing a fake deadline to pressure a decision', 'Sharing genuine data that respected peers support your proposal', 'Helping someone first before asking for help', 'Asking for a small pilot before a big commitment'],
          answer: 0,
          explain: 'A fabricated deadline is false scarcity — deceptive and trust-destroying once discovered.'
        },
        {
          q: 'Why do weak ties often matter in job searches, according to Granovetter?',
          options: ['They are more loyal', 'They move in different circles and so bring new information', 'They are always more senior', 'They are easier to manipulate'],
          answer: 1,
          explain: 'Close contacts know what you know; acquaintances connect you to new information and openings.'
        }
      ],
      challenge: {
        title: 'Win support for a cross-functional project',
        prompt: `You are an operations manager at a consumer-goods company (illustrative). You want to cut product returns, which cost about $4m a year. Your analysis suggests 40% of returns come from misleading product descriptions on the website (owned by e-commerce), and 25% from packaging damage (owned by the logistics team). You have no authority over either team. Your boss is supportive but busy and dislikes surprises.<br><br>Calculate the value at stake in each area, map each stakeholder’s currencies, and write your influence plan, including how you will manage up.`,
        hints: ['Value at stake = share of returns × $4m.', 'What is each team measured on, and what would make them look good?', 'Think about a small first commitment and who provides social proof.'],
        model: `<p><b>1. Value at stake</b></p><ul><li>Descriptions (e-commerce): 40% × $4m = <b>$1.6m</b>/year.</li><li>Packaging (logistics): 25% × $4m = <b>$1.0m</b>/year.</li><li>Together $2.6m of the $4m. Even halving these saves about <b>$1.3m</b>.</li></ul><p><b>2. Stakeholder currencies</b></p><table><thead><tr><th>Stakeholder</th><th>Measured on / worries</th><th>Currencies I can offer</th></tr></thead><tbody><tr><td>E-commerce lead</td><td>Conversion rate, customer reviews</td><td>Data showing which product pages drive returns and bad reviews (task); credit in the results (position)</td></tr><tr><td>Logistics lead</td><td>Cost per order, damage claims</td><td>Analyst time to identify the worst SKUs (task); a joint business case that funds better packaging from returns savings</td></tr><tr><td>My boss</td><td>Margin; no surprises</td><td>A one-page plan; early warning of any conflict; a clear ask</td></tr></tbody></table><p><b>3. Influence plan</b></p><ol><li><b>Manage up first</b>: a 15-minute meeting with my boss with a one-page summary and one ask — “Can I run a 6-week pilot with both teams, and will you mention it at the next leadership meeting?”</li><li><b>Diagnose before asking</b>: 1:1s with each lead asking what they are measured on and what frustrates them about returns.</li><li><b>Small first commitment</b>: pilot on the 20 products with the most returns; my team does the analysis.</li><li><b>Social proof</b>: share early results from the first team that agrees with the second.</li><li><b>Shared credit</b>: results presented jointly by the three of us.</li></ol><p><b>Recommendation</b>: start with e-commerce (largest value, fastest to change — editing product pages is cheap), then use those results to bring logistics in.</p>`
      },
      takeaways: [
        'Influence is diagnosis: understand their world and trade in what they value.',
        'Use persuasion principles honestly — never fake scarcity, consensus or flattery.',
        'Manage up: know your boss’s priorities and style, and never let them be surprised.',
        'Invest deliberately in operational, personal and strategic networks — including weak ties.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'self-leadership-5',
      title: 'Energy, focus and decision hygiene',
      level: 'Intermediate',
      minutes: 16,
      hook: `Your calendar is a moral document: it shows what you actually prioritise, whatever you say in meetings.`,
      eli5: `Think of your attention like a torch with a battery. If you wave it around the room every few seconds — phone, email, chat, back to work — you never see anything clearly and the battery runs down fast. If you point it at one thing for a while, you see every detail. And if you never recharge the battery with sleep and rest, the beam gets dimmer and dimmer until you are just stumbling around. This lesson is about where you point the torch and how you keep the battery charged.`,
      blocks: [
        {
          type: 'matrix', name: 'The Eisenhower matrix', xLabel: 'Urgent → Not urgent', yLabel: 'Not important → Important (top)',
          cells: [
            { label: 'Do now (urgent + important)', desc: 'Crises, real deadlines, a key customer escalation. If you live here permanently, you are firefighting — fix the root causes.' },
            { label: 'Schedule (important, not urgent)', desc: 'Strategy, deep work, learning, relationships, health, preventing tomorrow’s fires. The quadrant that builds careers — and the first to be squeezed. Put it in the calendar.' },
            { label: 'Delegate or decline (urgent, not important)', desc: 'Many meetings, interruptions and other people’s priorities. Ask: does it need me? Can it be shorter, async or someone else’s?' },
            { label: 'Delete (neither)', desc: 'Mindless scrolling, low-value reports nobody reads. Eliminate without guilt.' }
          ]
        },
        {
          type: 'text', title: 'Deep work and the cost of switching',
          html: `<p>Cal Newport (<i>Deep Work</i>, 2016) argues that the ability to focus without distraction on cognitively demanding tasks is becoming both rarer and more valuable. The evidence base behind this is consistent:</p><ul><li><b>Task switching has costs.</b> Decades of lab research show that switching between tasks slows people down and increases errors compared with finishing one task at a time.</li><li><b>Attention residue.</b> Sophie Leroy’s research (2009) found that when people switch tasks before finishing, part of their attention stays stuck on the previous task, reducing performance on the next.</li><li><b>Interruptions add up.</b> Every notification is a small switch. A day of constant pings can leave no long blocks for hard thinking.</li></ul><p>Practical moves: protect 1–2 blocks of 60–120 minutes for your most important work, batch email and chat at set times, and turn off non-essential notifications.</p>`
        },
        {
          type: 'callout', kind: 'myth', title: 'Myths to drop (careful with pop productivity)',
          html: `<ul><li><b>“I’m good at multitasking.”</b> For tasks that need thinking, people switch rather than truly do two at once — and those who multitask heavily do not seem to get better at it.</li><li><b>“Willpower is a battery that runs out after a few decisions.”</b> The famous “ego depletion” findings have struggled in large replication studies. Fatigue is real, but the simple battery model is not well supported.</li><li><b>“Successful people sleep 4 hours.”</b> Health bodies such as the US CDC and the American Academy of Sleep Medicine recommend at least 7 hours a night for adults; chronic short sleep is linked to worse attention, mood and health.</li></ul><p>When a productivity claim sounds too neat, ask: what study, how many people, has it been replicated?</p>`
        },
        {
          type: 'formula', name: 'Your weekly focus budget', expr: 'Deep-work hours = Working hours − Meetings − Shallow work − Buffer',
          explain: `<b>Shallow work</b> is email, chat, admin and coordination. <b>Buffer</b> is for the unexpected. If the result is near zero, no productivity trick will help — you need to change commitments, not technique.`,
          example: `A manager works 45 hours: meetings 22 h, email/chat 12 h, buffer 5 h → deep work = 45 − 22 − 12 − 5 = <b>6 hours</b>. Declining or shortening a third of meetings (−7 h) and batching messages into three daily slots (−4 h) gives 6 + 7 + 4 = <b>17 hours</b> — nearly triple, at the same total workload.`
        },
        {
          type: 'framework', name: 'Burnout: know the signs and the causes', by: 'Christina Maslach & Michael Leiter; WHO ICD-11 (2019) definition', when: 'You or someone on your team feels chronically exhausted, cynical or ineffective.',
          steps: [
            { label: 'What it is', desc: 'The WHO classifies burnout as an occupational phenomenon (not a medical condition) resulting from chronic workplace stress that has not been successfully managed.' },
            { label: 'Three signs', desc: '1) Exhaustion — feeling drained; 2) cynicism or mental distance from the job; 3) reduced sense of effectiveness.' },
            { label: 'Six causes (areas of work life)', desc: 'Mismatches in workload, control, reward, community, fairness and values. Burnout is usually a mismatch between person and job, not personal weakness.' },
            { label: 'What helps', desc: 'Fix the mismatch where possible (workload, autonomy, recognition), protect recovery (sleep, time off, boundaries) and talk to someone early. Persistent low mood, anxiety or physical symptoms deserve a conversation with a doctor or mental-health professional.' }
          ]
        },
        {
          type: 'checklist', title: 'Decision hygiene for important choices',
          items: [
            'Write down the decision and the criteria BEFORE looking at options in detail',
            'Break the judgement into independent parts and score each separately (structure beats gut feel)',
            'Collect independent views before discussion — people anchor on whoever speaks first',
            'Run a pre-mortem: “It is a year from now and this failed. Why?”',
            'Delay intuition: form your overall view only after the structured assessment',
            'Check your state: am I tired, angry or rushed? If so and the decision can wait, wait',
            'Record the decision, your reasoning and your confidence, so you can learn later'
          ]
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Practise structured judgement',
          note: `Take a real choice (two job offers, which project to prioritise). Set weights for your criteria first, score each option on each criterion separately, and only then look at the total. Does it match your gut? If not, which criterion is your gut over- or under-weighting?`
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> For three months you have worked 60-hour weeks. You feel exhausted on Monday mornings, have started to not care about results you used to love, and snap at your team. Your boss just offered you an exciting extra project. What is the wise response?`,
          options: [
            { text: 'Accept — it is a great opportunity and you can push through.', feedback: 'These are classic signs of burnout (exhaustion, cynicism, irritability). Adding load without removing any risks your health and your performance on everything.', good: false },
            { text: 'Thank your boss, be honest that your current load is not sustainable, and propose a trade: what could be dropped, delegated or delayed if you take this on? Also protect sleep and recovery, and talk to someone if the feelings persist.', feedback: 'Wise. You address the workload mismatch directly, keep the opportunity open on sustainable terms and treat the warning signs seriously.', good: true },
            { text: 'Decline and say nothing about why.', feedback: 'Protecting yourself is right, but silence leaves your boss unaware of a real problem they may be able to fix — and may look like lack of ambition.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Deep work', def: 'Focused, distraction-free work on cognitively demanding tasks (Cal Newport).' },
        { term: 'Attention residue', def: 'Part of your attention staying on a previous task after switching, reducing performance on the new one (Sophie Leroy).' },
        { term: 'Eisenhower matrix', def: 'A 2x2 for sorting tasks by urgency and importance: do, schedule, delegate, delete.' },
        { term: 'Burnout', def: 'A syndrome from chronic, unmanaged workplace stress: exhaustion, cynicism and reduced effectiveness (WHO ICD-11).' },
        { term: 'Decision hygiene', def: 'Practices that reduce noise and bias in judgement — structure, independent views, delayed intuition (Kahneman, Sibony and Sunstein, Noise, 2021).' },
        { term: 'Pre-mortem', def: 'Imagining a decision has failed and listing the reasons why, before committing.' },
        { term: 'Shallow work', def: 'Logistical, low-cognitive-demand tasks such as email and admin, often done while distracted.' }
      ],
      quiz: [
        {
          q: 'Preparing next year’s strategy, with no deadline yet, belongs in which Eisenhower quadrant?',
          options: ['Do now', 'Delegate', 'Schedule (important, not urgent)', 'Delete'],
          answer: 2,
          explain: 'Important but not urgent — the quadrant that gets squeezed unless you put it in your calendar.'
        },
        {
          q: 'You work 50 hours: meetings 20 h, shallow work 15 h, buffer 5 h. How many deep-work hours remain?',
          options: ['30', '10', '15', '5'],
          answer: 1,
          explain: '50 − 20 − 15 − 5 = 10 hours.'
        },
        {
          q: 'Which of these is one of the three signs of burnout in the WHO / Maslach definition?',
          options: ['Increased cynicism or mental distance from the job', 'Working long hours', 'Wanting a promotion', 'Disliking your boss'],
          answer: 0,
          explain: 'The three dimensions are exhaustion, cynicism/mental distance, and reduced professional efficacy.'
        },
        {
          q: 'What is the status of the “willpower is a battery that runs out” (ego depletion) idea?',
          options: ['Universally proven', 'Proven only for executives', 'Never studied', 'Large replication studies have struggled to confirm it, so treat it cautiously'],
          answer: 3,
          explain: 'Large multi-lab replications found little or no effect, so the simple battery model is not well supported.'
        },
        {
          q: 'Why should a team write down independent views before discussing a big decision?',
          options: ['To save paper', 'To avoid everyone anchoring on the first or most senior speaker', 'Because discussion is useless', 'To make the meeting longer'],
          answer: 1,
          explain: 'Independent judgements reduce anchoring and groupthink — a core decision-hygiene practice.'
        }
      ],
      challenge: {
        title: 'Redesign a drowning manager’s week',
        prompt: `You coach Arjun, a newly promoted engineering manager (illustrative). His 50-hour week: 26 hours of meetings (including 8 hours of recurring status meetings), 14 hours of Slack and email (checked roughly every 10 minutes), 6 hours fixing urgent bugs himself, and 4 hours of everything else. He has no time for 1:1s with his 7 reports, hiring or planning. He sleeps about 5.5 hours and says he feels “numb” about work.<br><br>Calculate his current deep-work time, redesign his week with numbers, and address the energy and burnout signals.`,
        hints: ['Use the focus budget formula — where are his deep hours now?', 'Sort his activities using the Eisenhower matrix: what can be delegated or deleted?', 'Do not ignore sleep and the word “numb”.'],
        model: `<p><b>1. Current state</b>: 26 + 14 + 6 + 4 = 50 hours. Deep, important-not-urgent work (1:1s, hiring, planning) = <b>0 hours</b>. Checking messages every 10 minutes means about 6 switches an hour — attention residue all day.</p><p><b>2. Redesign (target: 45 hours)</b></p><table><thead><tr><th>Activity</th><th>Now</th><th>New</th><th>How</th></tr></thead><tbody><tr><td>Recurring status meetings</td><td>8 h</td><td>2 h</td><td>Replace with a written async update; keep one 30-min weekly sync</td></tr><tr><td>Other meetings</td><td>18 h</td><td>14 h</td><td>Decline those where he is not needed; default to 25 minutes</td></tr><tr><td>Slack and email</td><td>14 h</td><td>8 h</td><td>Three batches a day; notifications off; urgent-only channel</td></tr><tr><td>Fixing bugs himself</td><td>6 h</td><td>1 h</td><td>Delegate via an on-call rotation — growth for his engineers</td></tr><tr><td>1:1s (7 × 30 min)</td><td>0 h</td><td>3.5 h</td><td>Weekly, protected</td></tr><tr><td>Hiring and planning (deep blocks)</td><td>0 h</td><td>8 h</td><td>Four 2-hour blocks, mornings</td></tr><tr><td>Admin / buffer</td><td>4 h</td><td>8.5 h</td><td>Buffer for the unexpected</td></tr><tr><td><b>Total</b></td><td><b>50 h</b></td><td><b>45 h</b></td><td></td></tr></tbody></table><p>Check: 2 + 14 + 8 + 1 + 3.5 + 8 + 8.5 = 45.</p><p><b>3. Energy and burnout</b>: “numb” plus exhaustion and 5.5 hours of sleep are warning signs. Recommend aiming for 7+ hours of sleep (the 5 hours saved helps), a short break or holiday soon, a conversation with his own manager about workload and support, and professional help if the numbness persists. Frame it as performance, not weakness: a manager with no time for his team and no sleep will make worse decisions.</p><p><b>4. Review in 4 weeks</b>: deep hours per week (target 8+), 1:1s held (target 7/7), hours worked, and a 1–10 energy score.</p>`
      },
      takeaways: [
        'Schedule the important-not-urgent work first, or it never happens.',
        'Task switching and attention residue are real costs — batch messages, protect deep blocks.',
        'Be sceptical of neat productivity claims; prefer replicated evidence.',
        'Burnout is usually a job mismatch — fix the workload, protect recovery and seek help early.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'self-leadership-6',
      title: 'Resilience, career strategy and your personal board of directors',
      level: 'Advanced',
      minutes: 17,
      hook: `Every career you admire includes a setback that looked, at the time, like the end of the story.`,
      eli5: `Think of a tree in a storm. A stiff tree snaps; a tree with deep roots and a bendy trunk sways and stands up again when the wind stops. Resilience is not never getting knocked about — it is having roots (people who support you, a sense of what you stand for) and a bendy trunk (the habit of seeing setbacks as temporary and fixable). Career strategy is choosing which way to grow, and your “personal board” is the group of people who help you choose.`,
      blocks: [
        {
          type: 'framework', name: 'The three Ps of explanatory style', by: 'Martin Seligman’s research on learned optimism', when: 'After a setback, to check how you are explaining it to yourself.',
          steps: [
            { label: 'Personal', desc: 'Pessimistic: “It’s entirely my fault; I’m not good enough.” Resilient: “I contributed — and so did timing, the market and other people. What was mine to learn?”' },
            { label: 'Pervasive', desc: 'Pessimistic: “This ruins everything.” Resilient: “This affects this project; my health, relationships and other skills are intact.”' },
            { label: 'Permanent', desc: 'Pessimistic: “It will always be like this.” Resilient: “This is a bad season, not a permanent state.”' },
            { label: 'Then act', desc: 'Pick one small action within your control today. Action rebuilds a sense of agency faster than rumination.' }
          ]
        },
        {
          type: 'case', company: 'Tata Group — Ratan Tata', year: '1999–2008', title: 'From a near-sale to buying the buyer’s brands',
          situation: `Ratan Tata became chairman of the Tata Group in 1991. Tata Motors’ first passenger car, the Indica, launched in 1998 and initially struggled. In 1999 Tata held talks with Ford about selling the passenger-car business; the talks did not lead to a deal (a widely retold account says the Tata team found the Ford side dismissive).`,
          decision: `Tata kept the business, improved the Indica, and over the next decade the group made bold international acquisitions — Tetley (2000), Corus steel (2007) and, in 2008, Jaguar Land Rover, bought from Ford.`,
          outcome: `JLR struggled in the 2008–09 financial crisis but later became a major profit contributor for Tata Motors for several years. Not every bet worked: the ultra-low-cost Nano, launched in 2008, did not meet its sales ambitions and was eventually discontinued. Ratan Tata, who died in 2024, was widely remembered for persistence and for putting values at the centre of the group.`,
          lesson: `A setback is data, not a verdict. Resilient leaders stay in the game, keep improving, and accept that some bets will still fail.`
        },
        {
          type: 'compare', title: 'Your support team: mentor, sponsor, coach and more', headers: ['Role', 'What they do', 'How to find or grow one'],
          rows: [
            ['Mentor', 'Advises you from experience; helps you think', 'Ask for specific advice on a specific problem first; a relationship grows from there'],
            ['Sponsor', 'Spends their own reputation to advocate for you when you are not in the room — promotions, stretch roles', 'Earned through outstanding, visible work for a senior leader; tell them what you want next'],
            ['Coach', 'Asks questions to help you find your own answers; often trained, sometimes paid', 'Company programmes, professional coaches, peer coaching circles'],
            ['Peer ally', 'Someone at your level who shares information and covers for you', 'Trade help generously across teams'],
            ['Truth-teller', 'Gives you blunt, caring feedback no one else will', 'Explicitly ask them for it — and thank them every time'],
            ['Reverse mentor', 'Someone younger or from a different background who updates your view (tech, culture, customers)', 'Offer something in return: your experience, introductions']
          ]
        },
        {
          type: 'framework', name: 'Build a personal board of directors', by: 'Common career-coaching practice', when: 'Once a year, and whenever you face a big career decision.',
          steps: [
            { label: '1. Define the “company”', desc: 'You are the CEO of your career. Write your 3-year intent in one sentence: the kind of work, impact and life you want.' },
            { label: '2. Map the seats', desc: 'Aim for 5–7 people covering: a mentor in your field, a sponsor, a peer ally, a truth-teller, someone outside your industry, and a reverse mentor.' },
            { label: '3. Find the gaps', desc: 'Most people have plenty of peers and no sponsor, or many similar people and no outside view. Who is missing?' },
            { label: '4. Invest before you need it', desc: 'Give before you ask: share articles, make introductions, help with their problems. Relationships built in good times hold in bad ones.' },
            { label: '5. Hold “board meetings”', desc: 'Not a formal meeting — a few conversations a year where you share your plan and ask: “What am I missing? What would you do?”' }
          ]
        },
        {
          type: 'framework', name: 'Career strategy: Plan A, Plan B, Plan Z', by: 'Reid Hoffman & Ben Casnocha, The Start-up of You (2012)', when: 'Planning your next two to five years without pretending you can predict them.',
          steps: [
            { label: 'Plan A — what you are doing now', desc: 'Your current direction, built on your assets (skills, network, reputation), aspirations and market realities. Keep iterating it.' },
            { label: 'Plan B — the pivot', desc: 'A related direction you could move to if Plan A stalls or you learn something new — ideally one that uses the same skills and network.' },
            { label: 'Plan Z — the lifeboat', desc: 'Your fallback if everything goes wrong: savings buffer, a job you could always get, a place to live cheaply. Knowing Plan Z exists lets you take bigger risks in Plan A.' },
            { label: 'Build career capital', desc: 'Cal Newport (So Good They Can’t Ignore You, 2012) argues rare and valuable skills give you leverage to shape your work — build them deliberately.' }
          ]
        },
        {
          type: 'interactive', widget: 'compound', title: 'Career capital compounds (a metaphor)',
          note: `Treat your skills and network like an investment. Try a “starting value” of 100 and compare 5% vs 15% annual growth over 10 years. Small, consistent improvements — a course, a stretch project, new relationships — compound. This is a metaphor, not a salary forecast.`
        },
        {
          type: 'scenario',
          prompt: `<b>Reflection prompt.</b> You were passed over for a promotion you expected; a peer got it. Your manager said: “You’re strong technically, but leadership didn’t see enough evidence you can lead across teams.” You feel humiliated and are tempted to start interviewing elsewhere tomorrow. What do you do first?`,
          options: [
            { text: 'Resign and take the first external offer to prove a point.', feedback: 'A decision made in the heat of a “personal, pervasive, permanent” story. You might leave anyway — but make it a choice, not a reaction.', good: false },
            { text: 'Give yourself a few days, then ask your manager for specific examples of “leading across teams”, agree two visible opportunities to show it in the next six months, ask who could sponsor you — and quietly update your Plan B so you have options.', feedback: 'Resilient and strategic. You turn vague feedback into concrete evidence-building, recruit a sponsor and keep options open without burning bridges.', good: true },
            { text: 'Accept it silently and work harder at your technical tasks.', feedback: 'More of the same will produce the same result. The feedback was about cross-team leadership, not technical output.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'After a setback: the 7-day reset',
          items: [
            'Day 1–2: let yourself feel it; talk to one trusted person; avoid big decisions',
            'Write the story using the 3 Ps — then rewrite it as specific, temporary and partly outside your control',
            'List what was yours to learn (be honest) and what was not',
            'Ask one person for specific feedback on what would have changed the outcome',
            'Pick one small action you can take this week that moves you forward',
            'Review Plan A, B and Z — do any need updating?',
            'Tell your personal board what happened and what you are trying next'
          ]
        }
      ],
      terms: [
        { term: 'Resilience', def: 'The capacity to recover, adapt and keep moving after setbacks.' },
        { term: 'Explanatory style', def: 'How you habitually explain bad events — personal, pervasive and permanent vs specific, temporary and partly external.' },
        { term: 'Sponsor', def: 'A senior person who actively advocates for you and puts their reputation behind you when you are not in the room.' },
        { term: 'Personal board of directors', def: 'A deliberately chosen group of advisers who give you diverse perspectives on your career.' },
        { term: 'Career capital', def: 'The rare and valuable skills, relationships and reputation that give you options and leverage.' },
        { term: 'Plan A / B / Z', def: 'Current plan, pivot option and fallback lifeboat (Hoffman and Casnocha).' },
        { term: 'Growth mindset', def: 'Carol Dweck’s term for the belief that abilities can be developed through effort, strategy and help from others.' }
      ],
      quiz: [
        {
          q: 'After a failed product launch, a manager says: “I’m useless at everything and I’ll never be trusted again.” Which two Ps are most visible?',
          options: ['Personal only', 'Pervasive and permanent', 'None of them', 'Specific and temporary'],
          answer: 1,
          explain: '“Useless at everything” is pervasive; “never be trusted again” is permanent.'
        },
        {
          q: 'What is the key difference between a mentor and a sponsor?',
          options: ['A sponsor actively advocates for you in rooms you are not in; a mentor mainly advises', 'A mentor is always paid', 'They are the same', 'A sponsor only gives feedback'],
          answer: 0,
          explain: 'Sponsors spend their own capital on your behalf; mentors give advice.'
        },
        {
          q: 'Your skills “index” starts at 100. Growing 10% a year, roughly what is it after 2 years?',
          options: ['110', '120', '121', '200'],
          answer: 2,
          explain: '100 × 1.1 × 1.1 = 121 — compounding adds a little extra on top of 10% + 10%.'
        },
        {
          q: 'What is the main purpose of a Plan Z in Hoffman and Casnocha’s model?',
          options: ['To replace Plan A immediately', 'To impress recruiters', 'To avoid all risk', 'To provide a safe fallback so you can take bigger, smarter risks with Plan A'],
          answer: 3,
          explain: 'Knowing you have a lifeboat makes it rational to take bolder bets in your main plan.'
        },
        {
          q: 'Your personal board has four colleagues from your own team and nobody else. What is the biggest gap?',
          options: ['Too many sponsors', 'Too much diversity', 'No outside perspective and probably no sponsor', 'Nothing — this is ideal'],
          answer: 2,
          explain: 'A board of similar insiders shares your blind spots and cannot advocate for you at senior levels.'
        }
      ],
      challenge: {
        title: 'Bounce back from a redundancy',
        prompt: `You are 34, a marketing manager whose role was eliminated in a restructuring. You have 3 months’ severance, savings equal to 4 months of expenses, and monthly expenses of $4,000. Your strengths: brand campaigns and team leadership. Your network is mostly ex-colleagues from one company. You are wondering whether to (a) find a similar role quickly, (b) move into product marketing at a tech company (a growing field), or (c) freelance.<br><br>Use the 3 Ps to reframe the setback, calculate your runway, build a Plan A/B/Z and a personal board, and set a 90-day plan.`,
        hints: ['Runway = (severance months + savings months) of expenses, if spending stays at $4,000.', 'Which option builds on your existing career capital while moving you somewhere growing?', 'Who is missing from your network — and what weak ties could help?'],
        model: `<p><b>1. Reframe (3 Ps)</b>: not personal — a restructuring removed the role, not a judgement on me (I will still ask for feedback). Not pervasive — my skills, references and health are intact. Not permanent — the job market for experienced marketers exists; this is a transition.</p><p><b>2. Runway</b>: severance covers 3 months × $4,000 = $12,000; savings cover 4 months = $16,000. Total $28,000 ÷ $4,000 = <b>7 months</b>. Cutting spending 15% to $3,400 stretches it to 28,000 ÷ 3,400 ≈ <b>8.2 months</b>.</p><p><b>3. Plans</b></p><ul><li><b>Plan A — product marketing at a tech company</b>: builds on campaign and leadership skills, in a growing field. Gap: tech product knowledge — close it with a short course and one portfolio project (a positioning and launch plan for a real product).</li><li><b>Plan B — similar brand role</b>: quickest route; actively apply in parallel from week 4 so I am not waiting on Plan A.</li><li><b>Plan Z — freelance campaign work</b>: 2–3 small clients from my old network to cover part of expenses if both stall by month 5.</li></ul><p><b>4. Personal board</b> (fill gaps): a product marketing leader (mentor in the new field — reach via weak ties); a former boss as sponsor and reference; a peer ally job-hunting at the same time; a truth-teller friend to review my CV and story; a recruiter in tech (outside view).</p><p><b>5. 90-day plan</b></p><ol><li>Days 1–14: rest a little, tell my story calmly to 10 contacts, ask each for two introductions (weak ties).</li><li>Days 15–45: course plus portfolio project; 15 conversations with product marketers; apply to Plan B roles in parallel.</li><li>Days 46–90: target 20 Plan A applications with referrals where possible; decide by day 90 whether to keep pushing Plan A or switch focus to Plan B, using offers and feedback as data.</li></ol><p><b>Recommendation</b>: pursue Plan A with Plan B in parallel — the 7–8 month runway allows a focused 3-month push without panic, and Plan Z protects against the downside.</p>`
      },
      takeaways: [
        'Check your explanatory style: make setbacks specific, temporary and partly external — then act.',
        'Build a personal board with a mentor, a sponsor, a truth-teller and outside perspectives — before you need it.',
        'Keep a Plan A, B and Z; a lifeboat lets you take bolder bets.',
        'Career capital compounds — invest a little, consistently.'
      ]
    }
  ]
});
