/* MBA Studio — Track 11: People, HR & Leadership */
MBA.addTrack({
  id: 'people',
  stage: 3,
  order: 11,
  title: 'People, HR & Leadership',
  icon: '🤝',
  color: '#22c55e',
  tagline: 'Hire, grow and lead the people who build the business',
  summary: `Companies are just groups of people pointed at a goal. After this track you will be able to hire well, pay fairly, set goals and give feedback that actually changes behaviour, build a culture people want to join, and lead a team (or a team of managers) through change.`,
  outcomes: [
    'Explain what really motivates people at work (Herzberg, Pink) and design for it',
    'Run a structured hiring process with scorecards and make your first 10 hires well',
    'Design salary bands and an employee equity (ESOP) plan with vesting',
    'Set OKRs and give clear, kind, direct feedback (Radical Candor, SBI)',
    'Build culture and psychological safety in office, hybrid and remote teams',
    'Lead change with Kotter’s 8 steps and adapt your leadership style to the person'
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: 'people-1',
      title: 'Why people work: motivation & organisational behaviour',
      level: 'Beginner',
      minutes: 12,
      hook: 'Doubling someone’s pay rarely doubles their effort — understanding why is the first skill of every manager.',
      eli5: `Think of a school football team. Giving everyone new boots stops them complaining, but it does not make them train harder. What makes them run until they drop is wanting to win, getting better every week and feeling the coach trusts them. Work is the same: some things stop people being unhappy, other things make them truly want to give their best.`,
      blocks: [
        { type: 'text', title: 'What is organisational behaviour?', html: `<p><b>Organisational behaviour (OB)</b> is the study of how people think, feel and act inside organisations. It borrows from psychology, sociology and economics.</p><p>Three levels matter: the <b>individual</b> (personality, motivation, decisions), the <b>team</b> (trust, roles, conflict) and the <b>organisation</b> (structure, culture, incentives). Most "people problems" a manager faces sit at one of these levels — diagnosing the right level is half the fix.</p>` },
        { type: 'framework', name: 'Herzberg’s Two-Factor Theory', by: 'Frederick Herzberg, 1959', when: 'When engagement is low and you need to know whether to fix the basics or add meaning.',
          steps: [
            { label: 'Hygiene factors', desc: 'Pay, job security, working conditions, company policies, relationship with your boss. If they are bad, people are dissatisfied. If they are good, people are merely “not unhappy”.' },
            { label: 'Motivators', desc: 'Achievement, recognition, interesting work, responsibility, growth. These create real satisfaction and extra effort.' },
            { label: 'The key insight', desc: 'Satisfaction and dissatisfaction are two separate scales. Fixing hygiene removes complaints; only motivators create drive.' },
            { label: 'How to use it', desc: 'First audit hygiene (are we paying fairly? are tools broken?). Then design motivators into roles: ownership of outcomes, visible wins, learning paths.' }
          ] },
        { type: 'framework', name: 'Drive: Autonomy, Mastery, Purpose', by: 'Daniel Pink, 2009', when: 'For creative and knowledge work where carrots and sticks backfire.',
          steps: [
            { label: 'Baseline rewards', desc: 'Pay people fairly and enough to “take money off the table”. Below that, nothing else works.' },
            { label: 'Autonomy', desc: 'Control over task, time, technique and team. Tell people the goal, let them choose the route.' },
            { label: 'Mastery', desc: 'The urge to get better at something that matters. Give stretch work, feedback and time to learn.' },
            { label: 'Purpose', desc: 'Connecting work to something bigger than yourself — customers helped, problems solved.' }
          ] },
        { type: 'compare', title: 'Extrinsic vs intrinsic motivation', headers: ['', 'Extrinsic', 'Intrinsic'],
          rows: [
            ['Source', 'Rewards and punishments from outside (bonus, fear of firing)', 'The work itself is satisfying'],
            ['Works best for', 'Simple, routine, measurable tasks', 'Creative, complex, judgement-heavy tasks'],
            ['Risk', 'People game the metric; effort stops when reward stops', 'Hard to “install”; needs the right role and manager'],
            ['Manager lever', 'Commission, piece rates, bonuses', 'Ownership, learning, meaningful goals, recognition']
          ] },
        { type: 'case', company: 'Google', year: '2008–2010s', title: 'Project Oxygen: do managers even matter?',
          situation: `Google’s engineering culture was sceptical of managers — some leaders wondered if they were overhead. The People Analytics team set out to test whether managers made any difference.`,
          decision: `They analysed performance reviews, engagement surveys and interviews, comparing teams with highly rated vs poorly rated managers, and distilled the behaviours of the best managers into a short list (initially eight, later expanded to ten).`,
          outcome: `Managers clearly did matter: teams with better managers had higher satisfaction and lower turnover. Top behaviours included being a good coach, empowering the team without micromanaging, caring about people’s success and wellbeing, and communicating clearly. Technical skill ranked lower than people expected.`,
          lesson: `Good management is a learnable set of behaviours, not a personality type. Measure it and train for it.` },
        { type: 'callout', kind: 'myth', title: 'Myth: “Money is the only motivator”', html: `<p>Pay below market <b>destroys</b> motivation (a hygiene failure). But once pay feels fair, more cash mostly buys compliance, not commitment. For knowledge work, autonomy and growth often matter more at the margin.</p>` },
        { type: 'scenario', prompt: 'Your best designer is disengaged. Pay is at market rate. What do you try first?',
          options: [
            { text: 'Give a 15% raise to keep them happy', feedback: 'Pay is already fair, so this is a hygiene factor. It may delay the exit but rarely restores drive.', good: false },
            { text: 'Have a 1:1 to learn what they want to master and give them ownership of a meaningful project', feedback: 'Right. You are pulling the motivator levers — autonomy, mastery, purpose — after confirming the basics are fine.', good: true },
            { text: 'Set tighter weekly targets so they stay focused', feedback: 'More control usually reduces autonomy and makes creative disengagement worse.', good: false }
          ] },
        { type: 'flip', title: 'Test yourself', cards: [
          { front: 'Is a good office canteen a hygiene factor or a motivator?', back: 'Hygiene — its absence annoys, its presence rarely inspires.' },
          { front: 'Pink’s three intrinsic drivers?', back: 'Autonomy, mastery, purpose.' },
          { front: 'What did Project Oxygen test?', back: 'Whether managers matter — and which behaviours make a great manager.' },
          { front: 'Three levels of OB?', back: 'Individual, team, organisation.' }
        ] }
      ],
      terms: [
        { term: 'Organisational behaviour', def: 'The study of how individuals and groups act inside organisations, and how to shape that behaviour.' },
        { term: 'Hygiene factor', def: 'Something like pay or working conditions that causes dissatisfaction when poor but does not create motivation when good.' },
        { term: 'Motivator', def: 'A factor such as achievement, recognition or growth that creates genuine satisfaction and effort.' },
        { term: 'Intrinsic motivation', def: 'Doing something because the activity itself is rewarding.' },
        { term: 'Extrinsic motivation', def: 'Doing something to earn a reward or avoid a punishment.' },
        { term: 'Engagement', def: 'How emotionally committed an employee is to their work and the organisation; usually measured by surveys.' },
        { term: 'People analytics', def: 'Using data about employees (reviews, surveys, attrition) to make better people decisions.' }
      ],
      quiz: [
        { q: 'According to Herzberg, raising pay that is already fair mainly…', options: ['Creates lasting motivation', 'Increases creativity', 'Has no effect on anything', 'Reduces dissatisfaction but adds little drive'], answer: 3, explain: 'Pay is a hygiene factor: fixing it removes complaints, but motivators create drive.' },
        { q: 'Which is NOT one of Daniel Pink’s three drivers?', options: ['Autonomy', 'Mastery', 'Purpose', 'Security'], answer: 3, explain: 'Pink names autonomy, mastery and purpose. Security is closer to a hygiene factor.' },
        { q: 'For a simple, repetitive packing task, which incentive tends to work well?', options: ['Piece-rate or output bonus', 'Unlimited autonomy over goals', 'A vague mission statement', 'Removing all targets'], answer: 0, explain: 'Extrinsic rewards work best for routine, measurable tasks.' },
        { q: 'Google’s Project Oxygen found that…', options: ['Managers are unnecessary overhead', 'Technical skill was the top trait of great managers', 'Good managers improved satisfaction and retention through learnable behaviours', 'Only pay predicted retention'], answer: 2, explain: 'Coaching, empowering and caring behaviours mattered most — and can be trained.' },
        { q: 'An engineer says “I never get to decide how I solve problems.” Which driver is missing?', options: ['Autonomy', 'Purpose', 'Hygiene', 'Mastery'], answer: 0, explain: 'Control over technique is autonomy.' }
      ],
      challenge: {
        title: 'Fix the engagement survey',
        prompt: `You run a 40-person customer support team. Annual attrition is 45% (each leaver costs roughly 3 months of salary to replace). Survey comments: “pay is below other call centres”, “the ticketing tool crashes daily”, “I never know if customers were happy”, “no path to grow”. Average salary is $40,000. Build a 90-day plan using Herzberg and Pink, and estimate the money at stake.`,
        hints: ['Sort each complaint into hygiene vs motivator.', 'Cost of attrition = leavers × replacement cost.', 'Hygiene first, then motivators.'],
        model: `<p><b>1. Size the problem.</b> 45% of 40 = 18 leavers/year. Replacement ≈ 3 months × $40,000/12 = $10,000 each → <b>≈ $180,000/year</b>.</p>
<p><b>2. Diagnose.</b> Hygiene: below-market pay, broken tool. Motivators: no feedback on impact (purpose/achievement), no growth path (mastery).</p>
<p><b>3. Days 1–30 (hygiene):</b> benchmark pay; if 8% below market, a raise costs 40 × $3,200 = $128,000 — still less than attrition. Fix or replace the ticketing tool.</p>
<p><b>4. Days 31–90 (motivators):</b> share weekly customer-satisfaction scores and thank-you notes per agent (purpose, recognition); create a Tier 1 → Tier 2 → team lead ladder with skill badges (mastery); let senior agents own a product area (autonomy).</p>
<p><b>5. Measure:</b> monthly pulse survey, attrition, CSAT. Target: attrition below 30% → saves ≈ 6 leavers × $10,000 = $60,000/year on top of better service.</p>`
      },
      takeaways: [
        'Fix hygiene factors first — unfair pay or broken tools block everything else.',
        'Motivation for knowledge work comes from autonomy, mastery and purpose.',
        'Extrinsic rewards suit routine tasks; they can backfire on creative work.',
        'Great management is a set of learnable behaviours (Project Oxygen).'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'people-2',
      title: 'Hiring: scorecards, structured interviews & your first 10 hires',
      level: 'Beginner',
      minutes: 14,
      hook: 'Your company will never be better than the people you hire — and most hiring mistakes are made before the first interview.',
      eli5: `Imagine picking players for a cricket team by chatting about films with each of them. You would pick whoever you liked most, not whoever bowls best. Good hiring means first writing down exactly what the player must do (bowl 20 overs, field at slip), then testing every candidate on the same things, the same way.`,
      blocks: [
        { type: 'framework', name: 'The “Who” method (A-method for hiring)', by: 'Geoff Smart & Randy Street, 2008 (building on Brad Smart’s Topgrading)', when: 'Any important hire, especially leaders and early employees.',
          steps: [
            { label: '1. Scorecard', desc: 'Write the mission of the role, 3–5 measurable outcomes for the first year (e.g. “grow enterprise pipeline to $2M”), and the competencies needed. This is not a job description of duties — it is a definition of success.' },
            { label: '2. Source', desc: 'Build a pipeline before you need it: referrals from your network and team, targeted outreach, communities. Referrals tend to be a strong source.' },
            { label: '3. Select', desc: 'Structured interviews: a screening call, a deep chronological “career walk-through” interview, focused interviews on specific outcomes, and reference checks.' },
            { label: '4. Sell', desc: 'Great candidates have options. Sell fit, family, freedom, fortune and fun — the mission, the team, autonomy, the package and the culture.' }
          ] },
        { type: 'compare', title: 'Unstructured vs structured interviews', headers: ['', 'Unstructured chat', 'Structured interview'],
          rows: [
            ['Questions', 'Different for each candidate', 'Same core questions for everyone'],
            ['Scoring', 'Gut feel at the end', 'Rubric scored right after, before discussing'],
            ['Bias risk', 'High — “similar to me” and halo effects', 'Lower — evidence compared to a standard'],
            ['Predictive power', 'Weaker in research', 'Among the stronger predictors in research on selection methods'],
            ['Candidate experience', 'Feels friendly, can feel random', 'Feels fair and professional when done warmly']
          ] },
        { type: 'case', company: 'Amazon', year: '1999–today', title: 'The Bar Raiser',
          situation: `Growing fast, Amazon worried that hiring managers under pressure to fill seats would lower the quality bar.`,
          decision: `Every interview loop includes a specially trained “Bar Raiser” from outside the hiring team, who has veto power and asks: is this person better than half the people currently in this role?`,
          outcome: `The programme became a core part of Amazon’s hiring and is widely copied. It slows some hires but protects long-term talent density.`,
          lesson: `Separate the person who feels the pain of an empty seat from the person who guards the standard.` },
        { type: 'text', title: 'Your first 10 hires', html: `<p>Early hires shape the culture more than any values poster. Each one is roughly 10% of the company.</p><ul><li><b>Hire generalists who love ambiguity</b> early; specialists later.</li><li><b>Hire for the next 18 months</b>, not the next 5 years — and not just for today.</li><li><b>Founders should run hiring personally</b> for the first 20–30 people.</li><li><b>Look for “slope” over “intercept”</b> — learning speed matters more than current title.</li><li><b>Avoid hiring friends by default</b>; use the same scorecard for everyone.</li></ul>` },
        { type: 'formula', name: 'Rough cost of a mis-hire', expr: 'Cost ≈ Recruiting cost + Salary paid while ineffective + Manager time + Lost output + Severance & re-hire',
          explain: 'No single universal number exists, but every part is real. For senior roles, lost output and team disruption usually dominate.',
          example: 'A $120,000/year sales manager hired via a 20% agency fee ($24,000), underperforming for 6 months ($60,000 salary), 1 month severance ($10,000), plus a new search ($24,000) ≈ $118,000 — before counting the missed quota and team morale.' },
        { type: 'interactive', widget: 'decision-matrix', title: 'Score your finalists', note: 'Enter the scorecard outcomes as criteria, weight them (e.g. pipeline building 40%, coaching 30%, culture add 30%) and score two candidates 1–5 on evidence from interviews.' },
        { type: 'callout', kind: 'warning', title: 'HR legal basics for hiring (check your country)', html: `<ul><li><b>Anti-discrimination:</b> most countries ban decisions based on protected characteristics (e.g. sex, race, religion, age, disability, pregnancy). Never ask about plans for children, age or religion.</li><li><b>Employee vs contractor:</b> calling someone a contractor does not make them one. Control over hours and methods often makes them an employee in law, with tax and benefits consequences.</li><li><b>Right to work & contracts:</b> verify work eligibility; give written terms (pay, notice, IP assignment, confidentiality).</li><li><b>AI screening:</b> automated CV filters can be regulated — e.g. New York City requires bias audits of automated employment decision tools, and the EU AI Act treats hiring AI as high-risk.</li></ul>` },
        { type: 'checklist', title: 'Before you open a role', items: ['Write a scorecard with 3–5 measurable outcomes', 'Agree the interview loop and who assesses which competency', 'Prepare the same core questions and a 1–4 scoring rubric', 'Decide the salary band before talking to candidates', 'Ask the team for referrals', 'Plan a reference-check script (ask: what would you rate them 1–10 and why not a 10?)'] }
      ],
      terms: [
        { term: 'Scorecard', def: 'A one-page definition of a role’s mission, measurable outcomes and competencies, used to judge every candidate the same way.' },
        { term: 'Structured interview', def: 'An interview where all candidates get the same core questions and are scored against a predefined rubric.' },
        { term: 'Topgrading', def: 'Brad Smart’s rigorous hiring method built around a detailed chronological interview and verified references, aiming to hire “A-players”.' },
        { term: 'A-player', def: 'A candidate with a high chance of achieving the outcomes that only the top portion of available candidates could achieve.' },
        { term: 'Bar Raiser', def: 'Amazon’s trained, independent interviewer with veto power who protects the hiring standard.' },
        { term: 'Halo effect', def: 'Letting one impressive trait (a famous employer, charisma) colour your judgement of everything else.' },
        { term: 'Misclassification', def: 'Treating a worker as an independent contractor when the law sees them as an employee.' }
      ],
      quiz: [
        { q: 'What is the FIRST step in the Who / A-method?', options: ['Post the job ad', 'Write a scorecard of outcomes', 'Call references', 'Negotiate salary'], answer: 1, explain: 'You cannot judge candidates until you have defined what success in the role looks like.' },
        { q: 'Why does Amazon’s Bar Raiser come from outside the hiring team?', options: ['To remove urgency bias and protect the standard', 'To save the manager’s time', 'Because they know the salary bands', 'To sell the candidate'], answer: 0, explain: 'The hiring manager feels pressure to fill the seat; an independent assessor guards quality.' },
        { q: 'Which interview question is legally risky in most countries?', options: ['Walk me through your last role', 'What outcome are you proudest of?', 'Are you planning to have children soon?', 'How would you approach this case?'], answer: 2, explain: 'Family plans relate to protected characteristics (sex, pregnancy).' },
        { q: 'A mis-hire costs $24k recruiting, $50k salary while ineffective, $8k severance and $24k to re-hire. Total direct cost?', options: ['$82,000', '$98,000', '$106,000', '$74,000'], answer: 2, explain: '24 + 50 + 8 + 24 = $106,000, before lost output.' },
        { q: 'For early-stage hires, “slope over intercept” means…', options: ['Prefer learning speed over current experience level', 'Prefer the cheapest candidate', 'Prefer people with the steepest salary demands', 'Hire only senior people'], answer: 0, explain: 'In a fast-changing startup, how fast someone grows matters more than where they start.' }
      ],
      challenge: {
        title: 'Hire your first Head of Sales',
        prompt: `You are the founder of a B2B SaaS startup with $600k ARR, 12 people, and you have personally closed every deal so far. Investors want you to hire a Head of Sales. Budget: $150k base + $50k variable. Write the scorecard and the interview process, and say which profile you would look for.`,
        hints: ['Outcomes should be measurable within 12 months.', 'Think: builder vs scaler — which do you need now?', 'Include a work-sample task.'],
        model: `<p><b>Mission:</b> turn founder-led sales into a repeatable process that a team can run.</p>
<p><b>Outcomes (12 months):</b> 1) grow ARR from $600k to $1.5M; 2) document a sales playbook (ICP, qualification, stages) that a new rep can follow; 3) hire and ramp 2 account executives to 70% of quota within 6 months; 4) keep forecast accuracy within ±15%.</p>
<p><b>Competencies:</b> hands-on closer, process builder, coach, data-driven, high ownership.</p>
<p><b>Profile:</b> a “builder” who has taken a company roughly from $1M to $5–10M ARR and still enjoys closing deals — <i>not</i> a big-company VP who has only managed managers.</p>
<p><b>Process:</b> 30-min screen → 2-hour chronological career interview (founder + co-founder) → work sample: run a discovery call with you role-playing a real lost prospect → team interview on coaching → independent “bar raiser” (an investor or advisor) → 3 references from former bosses and reps. Score each outcome 1–4 independently before debriefing.</p>`
      },
      takeaways: [
        'Define success (a scorecard) before you meet any candidate.',
        'Structured interviews with rubrics beat gut feel and reduce bias.',
        'Early hires shape culture — founders should own hiring.',
        'Know the legal red lines: protected characteristics, contractor status, AI screening rules.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'people-3',
      title: 'Compensation & equity: bands, ESOPs and vesting',
      level: 'Intermediate',
      minutes: 14,
      hook: 'Pay is a message: it tells people what you value, whether you are fair, and whether they own part of the future.',
      eli5: `Imagine friends opening a lemonade stand. Some get pocket money every day (salary). Others agree to take less now in exchange for a slice of the stand if it becomes a big shop one day (equity). To stop someone grabbing a slice and leaving on day two, you say “your slice grows a little every month you keep helping” (vesting).`,
      blocks: [
        { type: 'framework', name: 'Total rewards', by: 'Common HR practice', when: 'When designing an offer or a company-wide pay policy.',
          steps: [
            { label: 'Base salary', desc: 'Fixed cash, set by role level and market. The biggest driver of “am I paid fairly?”.' },
            { label: 'Variable pay', desc: 'Bonuses and sales commission tied to results. Common in sales (often a 50/50 or 60/40 base/variable split).' },
            { label: 'Equity', desc: 'Stock options or shares (RSUs) that align people with long-term company value.' },
            { label: 'Benefits', desc: 'Health cover, pension/401(k), leave, parental policies.' },
            { label: 'Non-cash', desc: 'Flexibility, learning budget, career growth, mission. Often decisive for top talent.' }
          ] },
        { type: 'text', title: 'Salary bands', html: `<p>A <b>salary band</b> gives each job level a minimum, midpoint and maximum (e.g. Engineer L3: $100k–$130k). Bands make pay predictable and fairer, help with budgeting, and reduce the “whoever negotiates hardest wins” problem.</p><p>Key terms: the <b>compa-ratio</b> (salary ÷ band midpoint) shows where someone sits. Many companies set bands at a chosen market percentile (e.g. the 50th or 75th) using salary survey data. Pay-transparency laws in several US states and the <b>EU Pay Transparency Directive</b> (to be transposed by June 2026) increasingly require ranges in job ads and gender pay reporting.</p>` },
        { type: 'formula', name: 'Compa-ratio', expr: 'Compa-ratio = Employee salary ÷ Midpoint of band',
          explain: 'Below 1.0 = paid under the midpoint (new or still growing in the role); above 1.0 = paid above (experienced or a flight risk if it is very high with no promotion path).',
          example: 'Band $100k–$130k → midpoint $115k. An engineer on $103.5k has a compa-ratio of 0.90; a colleague on $126.5k has 1.10.' },
        { type: 'timeline', title: 'Standard startup vesting: 4 years with a 1-year cliff', items: [
          { label: 'Day 1', desc: 'Grant of, say, 48,000 options. 0 vested.' },
          { label: 'Month 12 (cliff)', desc: '25% vests at once: 12,000 options. Leave before this and you get nothing.' },
          { label: 'Months 13–48', desc: '1/48 vests monthly: 1,000 options per month.' },
          { label: 'Month 48', desc: 'Fully vested: 48,000. Many companies add refresh grants to keep retention.' },
          { label: 'Leaving', desc: 'You usually have a limited exercise window (often 90 days) to buy vested options — some companies extend this.' }
        ] },
        { type: 'compare', title: 'Stock options vs RSUs', headers: ['', 'Stock options', 'RSUs (restricted stock units)'],
          rows: [
            ['What you get', 'The right to buy shares at a fixed strike price', 'Actual shares delivered as they vest'],
            ['Value', 'Only the gain above strike price (can be zero)', 'Full share value (worth something unless the company is worth zero)'],
            ['Typical at', 'Early-stage startups', 'Late-stage and public companies'],
            ['Cost to employee', 'Must pay strike price (and possibly tax) to exercise', 'No purchase; taxed as income on vesting'],
            ['Risk', 'High risk, high upside', 'Lower risk, lower upside per unit']
          ] },
        { type: 'formula', name: 'Value of an option grant at exit', expr: 'Gain = Vested options × (Price per share at exit − Strike price)',
          explain: 'Ownership % gets diluted by later funding rounds, so the share count stays the same but the company has more shares in total.',
          example: '40,000 vested options, strike $1.00, acquisition at $6.00/share → 40,000 × $5.00 = $200,000 before tax. If the exit price is $0.80, the options are worth $0 (“underwater”).' },
        { type: 'interactive', widget: 'cap-table', title: 'See how an ESOP pool dilutes founders', note: 'Add a 10–15% option pool before a Seed round and watch how founders’ ownership changes. Note that investors usually want the pool created in the pre-money valuation.' },
        { type: 'case', company: 'Buffer', year: '2013–today', title: 'Fully transparent salaries',
          situation: `Social media software company Buffer wanted to build trust in a remote team and remove secrecy around pay.`,
          decision: `In 2013 it published every employee’s salary and the formula behind it (role, level, location factor), later simplifying the formula over time.`,
          outcome: `Buffer reported a surge of job applications after publishing, and the formula reduced negotiation games. It also had to revise the formula several times, for example how much location should affect pay.`,
          lesson: `Transparency forces you to have a defensible system. You do not have to publish names to benefit — publishing bands and the logic captures most of it.` }
      ],
      terms: [
        { term: 'Salary band', def: 'The minimum-to-maximum pay range for a job level.' },
        { term: 'Compa-ratio', def: 'Salary divided by the band midpoint; shows where someone sits in the band.' },
        { term: 'ESOP', def: 'Employee Stock Option Plan / Pool — the shares set aside to grant options to employees.' },
        { term: 'Vesting', def: 'Earning your equity over time so that people who leave early do not keep it all.' },
        { term: 'Cliff', def: 'A waiting period (usually 1 year) before any equity vests.' },
        { term: 'Strike price', def: 'The fixed price at which an option lets you buy a share.' },
        { term: 'RSU', def: 'Restricted Stock Unit — a promise to deliver shares as they vest, common at large companies.' },
        { term: 'Dilution', def: 'The reduction in your ownership percentage when the company issues new shares.' }
      ],
      quiz: [
        { q: 'A band is $80k–$120k. An employee earns $90k. Their compa-ratio is…', options: ['0.75', '0.90', '1.10', '1.125'], answer: 1, explain: 'Midpoint = $100k; 90 ÷ 100 = 0.90.' },
        { q: 'With 4-year vesting and a 1-year cliff on 4,800 options, how many have vested after 18 months?', options: ['1,200', '1,800', '2,400', '900'], answer: 1, explain: '1,200 at the cliff + 6 months × 100/month = 1,800.' },
        { q: 'Options with a $2 strike when shares are worth $1.50 are…', options: ['In the money', 'Fully vested', 'Underwater', 'RSUs'], answer: 2, explain: 'The strike price is above the share value, so exercising makes no sense.' },
        { q: 'Why do late-stage companies often switch from options to RSUs?', options: ['RSUs are tax-free', 'Options are illegal after Series B', 'RSUs never dilute', 'The upside of options shrinks and RSUs keep value even if the price falls'], answer: 3, explain: 'With a high share price, new options offer little gain; RSUs hold value.' },
        { q: 'Which is a hygiene-type part of total rewards most linked to perceived fairness?', options: ['Base salary', 'Learning budget', 'Mission', 'Refresh grants'], answer: 0, explain: 'Base salary relative to peers and market drives fairness perceptions.' }
      ],
      challenge: {
        title: 'Design an offer for a senior engineer',
        prompt: `Your Series A startup (10,000,000 fully diluted shares, last priced at $3.00/share, latest strike price $0.80) wants to hire a senior engineer whose market base is $180k. You can pay at most $150k cash. Design the offer: how many options, what vesting, and how you explain the value — honestly.`,
        hints: ['Estimate the cash gap over 4 years.', 'Use the strike, not the preferred price, for the employee’s cost.', 'Show scenarios, not promises.'],
        model: `<p><b>Cash gap:</b> $30k/year × 4 years = $120k.</p>
<p><b>Grant:</b> to “cover” the gap you might aim for options whose paper value at the preferred price is a multiple of the gap because of risk. E.g. 80,000 options (0.8% of the company), 4-year vest, 1-year cliff.</p>
<p><b>Honest scenarios (before tax, ignoring further dilution):</b></p><ul><li>Company fails: $0.</li><li>Exit at today’s $3.00/share: 80,000 × ($3.00 − $0.80) = $176,000.</li><li>Exit at $15/share (5×): 80,000 × $14.20 = $1,136,000.</li></ul>
<p><b>Also offer:</b> a pay review to market at the next round, an extended exercise window (e.g. 5–10 years) to show good faith, and a clear level in your band.</p>
<p><b>Explain:</b> the % ownership, the strike, the dilution expected from future rounds, and that most startup equity ends up worth little — let the candidate choose a cash/equity mix if possible.</p>`
      },
      takeaways: [
        'Total rewards = base + variable + equity + benefits + non-cash.',
        'Salary bands and compa-ratios make pay fair and explainable — and are increasingly legally required.',
        'Standard startup vesting: 4 years, 1-year cliff, monthly thereafter.',
        'Options only pay off above the strike price; always show employees realistic scenarios.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'people-4',
      title: 'Performance management: OKRs, feedback & Radical Candor',
      level: 'Intermediate',
      minutes: 15,
      hook: 'Most people do not fail because they are lazy — they fail because nobody told them clearly what “great” looks like or how they are doing.',
      eli5: `A football coach who only gives marks at the end of the season is useless; you need to know at half-time that you keep leaving the left side open. Good performance management is a clear goal (win the league), a few scores you watch (goals conceded), and quick, honest half-time talks.`,
      blocks: [
        { type: 'framework', name: 'OKRs — Objectives & Key Results', by: 'Andy Grove at Intel (1970s), popularised by John Doerr at Google from 1999', when: 'Quarterly or yearly goal setting to align teams on a few priorities.',
          steps: [
            { label: 'Objective', desc: 'Qualitative, inspiring, time-bound: “Make onboarding delightful for new customers this quarter.”' },
            { label: 'Key results (2–5)', desc: 'Measurable outcomes, not tasks: “Activation rate from 35% to 50%”, “Time-to-first-value under 10 minutes”.' },
            { label: 'Initiatives', desc: 'The work you think will move the KRs (new setup wizard, onboarding emails). Kept separate from KRs.' },
            { label: 'Weekly check-ins', desc: 'Confidence score per KR (e.g. 0–10); discuss blockers, not status theatre.' },
            { label: 'Score & reflect', desc: 'Score 0.0–1.0 at the end. For stretch OKRs, about 0.6–0.7 is a healthy result at Google. Do not tie OKR scores mechanically to bonuses — it kills ambition.' }
          ] },
        { type: 'interactive', widget: 'okr', title: 'Build an OKR', note: 'Write one objective and three key results. Check each KR: is it an outcome (a number that moves) rather than a task (“launch X”)?' },
        { type: 'matrix', name: 'Radical Candor', xLabel: 'Challenge directly →', yLabel: 'Care personally →',
          cells: [
            { label: 'Ruinous empathy', desc: 'Kind but unclear. You avoid hard feedback to spare feelings — and the person keeps failing. The most common mistake.' },
            { label: 'Radical candor', desc: 'You care and you are clear: “I want you to succeed, so I need to tell you the demo lost the client’s attention at slide 4.”' },
            { label: 'Manipulative insincerity', desc: 'Neither caring nor clear — vague praise to someone’s face, criticism behind their back.' },
            { label: 'Obnoxious aggression', desc: 'Clear but uncaring: brutal honesty that makes people defensive. Better than silence but corrodes trust.' }
          ] },
        { type: 'framework', name: 'SBI feedback model', by: 'Center for Creative Leadership', when: 'Any feedback conversation — positive or corrective.',
          steps: [
            { label: 'Situation', desc: '“In yesterday’s client call with Acme…”' },
            { label: 'Behaviour', desc: 'Observable facts, not judgements: “…you interrupted the client three times while they explained their budget.”' },
            { label: 'Impact', desc: '“…they went quiet and we never learned their budget. That makes pricing harder.”' },
            { label: 'Then ask', desc: '“How did it feel from your side?” — and agree a next step.' }
          ] },
        { type: 'case', company: 'Adobe & Microsoft', year: '2012–2013', title: 'Killing the annual rating ritual',
          situation: `Annual reviews with forced rankings took huge manager time and created internal competition. Microsoft’s “stack ranking” was widely blamed for making colleagues compete rather than collaborate.`,
          decision: `Adobe replaced annual reviews with ongoing “check-ins” in 2012. Microsoft dropped stack ranking in late 2013.`,
          outcome: `Adobe reported saving large amounts of manager time and lower involuntary attrition after the change; many large firms (Deloitte, GE, Accenture and others) moved toward more frequent, lighter-weight conversations.`,
          lesson: `Separate development conversations (frequent, forward-looking) from pay decisions (less frequent, calibrated).` },
        { type: 'compare', title: 'Goal & performance systems', headers: ['', 'Annual review', 'Continuous check-ins', 'OKRs'],
          rows: [
            ['Frequency', 'Once a year', 'Weekly–monthly 1:1s', 'Quarterly cycle, weekly check-ins'],
            ['Best for', 'Pay and promotion records', 'Coaching, fast course-correction', 'Alignment on priorities'],
            ['Risk', 'Recency bias, surprises', 'Can become unstructured chat', 'Too many OKRs; tasks disguised as KRs']
          ] },
        { type: 'scenario', prompt: 'A well-liked team member has missed three deadlines. The team is starting to cover for them. You…',
          options: [
            { text: 'Wait for the annual review so it is “official”', feedback: 'Ruinous empathy plus recency bias. Problems grow and the team resents you.', good: false },
            { text: 'Have a private SBI conversation this week, ask what is going on, and agree a clear plan with a check-in date', feedback: 'Radical candor: caring (private, curious) and direct (specific facts, clear expectations).', good: true },
            { text: 'Mention in the team meeting that “some people” keep missing deadlines', feedback: 'Manipulative insincerity — vague, public and not actionable.', good: false }
          ] },
        { type: 'flip', title: 'Task or key result?', cards: [
          { front: '“Launch the new pricing page”', back: 'Task / initiative — it describes work, not an outcome.' },
          { front: '“Raise trial-to-paid conversion from 8% to 11%”', back: 'Key result — measurable outcome.' },
          { front: '“Hold 4 customer workshops”', back: 'Task. Better KR: “NPS of workshop attendees ≥ 50”.' },
          { front: 'Healthy score for a stretch OKR?', back: 'Around 0.6–0.7. Always 1.0 means goals are too easy.' }
        ] }
      ],
      terms: [
        { term: 'OKR', def: 'Objectives and Key Results: an inspiring goal plus 2–5 measurable outcomes that show progress.' },
        { term: 'Key result', def: 'A measurable outcome (a number that moves), not an activity.' },
        { term: 'Radical Candor', def: 'Kim Scott’s framework (2017) for feedback that both cares personally and challenges directly.' },
        { term: 'SBI', def: 'Situation–Behaviour–Impact: a simple structure for specific, non-judgemental feedback.' },
        { term: 'Stack ranking', def: 'Forcing managers to rank employees on a curve so a fixed share are rated low.' },
        { term: 'Calibration', def: 'Managers comparing ratings together to make them consistent and fair across teams.' },
        { term: 'PIP', def: 'Performance Improvement Plan: a documented plan with clear goals and a deadline for an underperformer.' }
      ],
      quiz: [
        { q: 'Which is a well-written key result?', options: ['Redesign the onboarding flow', 'Improve onboarding', 'Increase week-1 activation from 30% to 45%', 'Hire a designer'], answer: 2, explain: 'It is measurable and describes an outcome.' },
        { q: 'Avoiding hard feedback because you like someone falls into which Radical Candor quadrant?', options: ['Obnoxious aggression', 'Radical candor', 'Manipulative insincerity', 'Ruinous empathy'], answer: 3, explain: 'High care, low challenge = ruinous empathy.' },
        { q: 'A team scores 1.0 on every OKR every quarter. What does this most likely mean?', options: ['The goals are not ambitious enough', 'The team is exceptional', 'The OKR software is broken', 'They should get bigger bonuses'], answer: 0, explain: 'Stretch goals should be hard; consistent 1.0 suggests sandbagging.' },
        { q: 'In SBI, “You were rude” is a problem because…', options: ['It is too short', 'It is a judgement, not an observable behaviour', 'It mentions impact', 'It is positive'], answer: 1, explain: 'Describe what you saw (“interrupted three times”), not a label.' },
        { q: 'Who created OKRs at Intel?', options: ['Peter Drucker', 'John Doerr', 'Andy Grove', 'Kim Scott'], answer: 2, explain: 'Andy Grove built them on Drucker’s management by objectives; John Doerr later brought them to Google.' }
      ],
      challenge: {
        title: 'Rescue a messy OKR set',
        prompt: `A 15-person marketing team has these quarterly OKRs: (1) “Do more content” — KRs: publish 30 blog posts, post on LinkedIn daily, launch a podcast; (2) “Be the best” — KR: improve brand; (3–7) five more objectives. Pipeline from marketing is $400k per quarter; the company needs $600k. Rewrite them.`,
        hints: ['Fewer objectives — 1 to 3.', 'Start from the business need ($600k pipeline).', 'Separate KRs from initiatives.'],
        model: `<p><b>Problems:</b> too many objectives, KRs are tasks, “improve brand” is unmeasurable, nothing links to the $600k need.</p>
<p><b>Objective 1: Make marketing the engine of next quarter’s pipeline.</b></p><ul><li>KR1: Marketing-sourced pipeline from $400k to $600k.</li><li>KR2: Sales-accepted lead rate from 25% to 40%.</li><li>KR3: Cost per sales-accepted lead below $300.</li></ul>
<p><b>Objective 2: Become the go-to voice for our niche.</b></p><ul><li>KR1: Organic sign-ups from content from 120 to 200 per month.</li><li>KR2: 3 of our top-10 target keywords on page 1.</li></ul>
<p><b>Initiatives (not KRs):</b> 12 deep pillar articles instead of 30 thin posts, a webinar series with partners, a lead-scoring model with sales. <b>Rhythm:</b> weekly 15-minute KR confidence check; score at quarter end, reflect, and don’t tie scores to bonuses.</p>`
      },
      takeaways: [
        'OKRs = few inspiring objectives + measurable outcome KRs; tasks are initiatives.',
        'Give feedback early, privately and specifically (SBI).',
        'Aim for radical candor: care personally AND challenge directly.',
        'Separate frequent development talks from less frequent pay decisions.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'people-5',
      title: 'Culture, psychological safety & the hybrid workplace',
      level: 'Intermediate',
      minutes: 15,
      hook: 'Culture is what people do when the boss is not in the room — and in a hybrid world, the boss is rarely in the room.',
      eli5: `Every family has unwritten rules: who speaks first at dinner, whether you can admit you broke a vase. A company is the same. If people are scared to admit mistakes, the vase stays broken in secret. A good culture is one where saying “I messed up” or “I have a crazy idea” feels safe.`,
      blocks: [
        { type: 'text', title: 'What culture really is', html: `<p>Culture = the <b>behaviours that are rewarded, tolerated and punished</b>. Values on the wall only matter if they decide who gets hired, promoted and fired.</p><p>Edgar Schein described three layers: visible <b>artifacts</b> (offices, dress, rituals), <b>espoused values</b> (what we say), and <b>basic assumptions</b> (what we actually believe without thinking). When the layers disagree, people believe the behaviour, not the poster.</p>` },
        { type: 'case', company: 'Google', year: '2012–2015', title: 'Project Aristotle: what makes a team effective?',
          situation: `Google studied around 180 of its teams to find why some performed far better than others. They expected the answer to be the mix of people — smartest, most senior, most similar.`,
          decision: `Researchers looked at team composition and team norms, using interviews, surveys and performance data.`,
          outcome: `Who was on the team mattered less than how the team worked together. Five dynamics stood out, with <b>psychological safety</b> by far the most important, followed by dependability, structure & clarity, meaning, and impact.`,
          lesson: `Build norms where people can take interpersonal risks: ask questions, admit mistakes, challenge ideas — without being punished or embarrassed.` },
        { type: 'framework', name: 'Building psychological safety', by: 'Amy Edmondson (1999 onward), Harvard Business School', when: 'Any team, especially where mistakes are costly or innovation matters.',
          steps: [
            { label: 'Frame the work', desc: 'Say openly that the work is uncertain and you need everyone’s input: “We have not done this before; I will miss things.”' },
            { label: 'Invite participation', desc: 'Ask open questions, go round the room, make it easy for quieter people to speak first.' },
            { label: 'Respond productively', desc: 'Thank people for bad news, separate the mistake from the person, focus on learning. One sarcastic reply can undo months.' },
            { label: 'Hold high standards', desc: 'Safety is not comfort. Safe + high standards = learning zone; safe + low standards = comfort zone.' }
          ] },
        { type: 'case', company: 'Netflix', year: '2009–today', title: 'The culture deck: freedom and responsibility',
          situation: `Netflix wanted a fast, innovative company with few rules. Reed Hastings and Patty McCord wrote down how they actually ran the company.`,
          decision: `In 2009 they published a slide deck describing “freedom and responsibility”: hire highly talented people, pay top of market, give context not control, remove rules like fixed vacation days, and use the “keeper test” — would a manager fight to keep this person? If not, give a generous severance.`,
          outcome: `The deck was viewed many millions of times and became one of the most copied culture documents in tech; Hastings and Erin Meyer expanded it in the 2020 book “No Rules Rules”. It also attracted criticism as too harsh for many organisations.`,
          lesson: `Culture works when it is explicit, consistent with incentives and honest about trade-offs. Copying Netflix’s rules without its talent density and pay usually fails.` },
        { type: 'case', company: 'Zappos', year: '2013–2020', title: 'The Holacracy experiment',
          situation: `CEO Tony Hsieh wanted to remove traditional management hierarchy to keep Zappos entrepreneurial as it grew.`,
          decision: `Zappos adopted Holacracy — self-organising “circles” and roles instead of managers. In 2015 Hsieh offered severance to staff who did not want to embrace the new model.`,
          outcome: `A notable share of employees took the offer, and the company reported confusion over roles and meetings. Zappos later moved away from strict Holacracy toward its own adapted approach.`,
          lesson: `Structure changes are culture changes. Radical models need deep buy-in, training and tolerance for a slow transition.` },
        { type: 'compare', title: 'Office, hybrid and remote', headers: ['', 'Office-first', 'Hybrid', 'Remote-first'],
          rows: [
            ['Strength', 'Spontaneous learning, mentoring juniors', 'Flexibility plus some in-person time', 'Global talent pool, deep focus, lower office cost'],
            ['Risk', 'Narrow talent pool, commute cost', 'Two-tier culture (office people get noticed)', 'Isolation, slower onboarding, weaker social ties'],
            ['Must-have practices', 'Clear focus time', 'Anchor days when teams are actually together', 'Written culture, async decisions, regular offsites'],
            ['Example', 'Many banks after 2023 return-to-office mandates', 'Many large tech firms', 'GitLab and Automattic (fully remote, written handbooks)']
          ] },
        { type: 'callout', kind: 'insight', title: 'DEI and employer brand in 2025–2026', html: `<p>The language around Diversity, Equity & Inclusion has become politically contested, especially in the US, and many firms have renamed or reshaped programmes. The durable business practices remain: <b>fair, structured hiring</b>, <b>pay-equity audits</b>, <b>inclusive team norms</b> (psychological safety), and <b>wide talent sourcing</b>. Always check local law — rules on quotas, data collection and reporting differ widely between the US, UK, EU and India.</p><p><b>Employer brand</b> is your reputation as a place to work: what employees say on Glassdoor, LinkedIn and to friends. It is built by how you treat people (including candidates you reject and people you let go), not by careers-page slogans.</p>` },
        { type: 'checklist', title: 'Culture health check', items: ['Can every manager name 3–5 values with a behaviour example for each?', 'Have we promoted or fired someone based on values recently?', 'Do people raise bad news early (ask: when did someone last admit a mistake in a meeting?)', 'Do remote people get the same information and visibility as office people?', 'Do we run a regular pay-equity check?', 'Do rejected candidates get a timely, respectful reply?'] }
      ],
      terms: [
        { term: 'Culture', def: 'The shared behaviours and assumptions that are rewarded, tolerated or punished in an organisation.' },
        { term: 'Psychological safety', def: 'A shared belief that the team is safe for interpersonal risk-taking, such as asking questions or admitting mistakes.' },
        { term: 'Keeper test', def: 'Netflix’s question: would a manager fight hard to keep this person if they were leaving?' },
        { term: 'Holacracy', def: 'A self-management system that replaces managers with roles and circles that govern themselves.' },
        { term: 'Async work', def: 'Collaboration that does not require people to be online at the same time — written updates, recorded demos, documented decisions.' },
        { term: 'Employer brand', def: 'A company’s reputation as an employer among current, former and potential employees.' },
        { term: 'Pay-equity audit', def: 'A review of whether people in similar roles are paid similarly regardless of gender, ethnicity or other characteristics.' }
      ],
      quiz: [
        { q: 'Project Aristotle found the most important factor in team effectiveness was…', options: ['Average IQ', 'Psychological safety', 'Being in the same office', 'Team size'], answer: 1, explain: 'How the team worked together mattered more than who was on it; psychological safety led.' },
        { q: 'High psychological safety with low standards creates…', options: ['A learning zone', 'An anxiety zone', 'A comfort zone', 'An apathy zone'], answer: 2, explain: 'Edmondson: safety needs to be paired with high standards to create learning.' },
        { q: 'A company’s values say “we celebrate risk-taking”, but the last person whose experiment failed was demoted. Employees will believe…', options: ['The values poster', 'The behaviour', 'Whatever HR says', 'Nothing changes'], answer: 1, explain: 'Culture is what is rewarded and punished, not what is written.' },
        { q: 'The biggest cultural risk of hybrid work is often…', options: ['Higher office rent', 'Too many offsites', 'Better focus', 'A two-tier culture where in-office staff get more visibility'], answer: 3, explain: 'Proximity bias can quietly disadvantage remote workers.' },
        { q: 'Which is the best lesson from Netflix’s culture deck?', options: ['Every company should remove vacation limits', 'Pay below market to attract believers', 'Make culture explicit and consistent with how you hire, pay and let people go', 'Avoid writing culture down'], answer: 2, explain: 'Its power came from being explicit and consistent; copying single rules usually fails.' }
      ],
      challenge: {
        title: 'Fix a fearful engineering team',
        prompt: `After a major outage, the CTO publicly blamed one engineer. Since then, incident reports are late, nobody admits mistakes, and two senior engineers resigned. The team is 30 people, half remote. You are the new VP Engineering. Write a 60-day plan.`,
        hints: ['Model the behaviour yourself first.', 'Think rituals: post-mortems, meeting norms.', 'Include remote-specific fixes and a measure.'],
        model: `<p><b>Week 1–2: reset the frame.</b> Hold 1:1s with all 30 (video for remote). Say publicly: “Outages are system failures; we fix systems, not people.” Share a mistake you made.</p>
<p><b>Week 2–4: blameless post-mortems.</b> Introduce a template (timeline, contributing factors, what made sense at the time, actions). Leaders go first. Thank whoever reports an incident fastest.</p>
<p><b>Week 3–8: meeting norms.</b> Remote people speak first in hybrid meetings; written pre-reads; anonymous question box for all-hands; rotate who runs incident reviews.</p>
<p><b>Repair trust:</b> ask the CTO to acknowledge the public blame was wrong (privately to the engineer, then to the team).</p>
<p><b>Measure:</b> time from incident to report, number of near-misses reported (should go <i>up</i>), a 5-question psychological safety pulse survey (e.g. “If you make a mistake here, it is not held against you”) at day 0 and day 60, regretted attrition.</p>`
      },
      takeaways: [
        'Culture is the behaviour you reward and punish, not the words you write.',
        'Psychological safety is the top driver of team effectiveness — pair it with high standards.',
        'Copying another company’s culture rules without its context usually fails.',
        'Hybrid and remote work need deliberate, written practices to avoid a two-tier culture.'
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'people-6',
      title: 'Leadership, managing managers & leading change',
      level: 'Advanced',
      minutes: 16,
      hook: 'Most transformations fail not because the strategy was wrong but because leaders underestimated how people experience change.',
      eli5: `A good swimming teacher holds a beginner’s hand, gives tips to someone improving, and just watches an expert. Using the same style for everyone fails. Leading a whole school to swim a new stroke is harder still: you need to explain why, find helpers, show early wins and keep going until it becomes normal.`,
      blocks: [
        { type: 'matrix', name: 'Situational Leadership', xLabel: 'Directive behaviour →', yLabel: 'Supportive behaviour →',
          cells: [
            { label: 'S3 Supporting', desc: 'Capable but unsure or unmotivated. Listen, encourage, decide together. E.g. a skilled analyst nervous about presenting to the board.' },
            { label: 'S2 Coaching', desc: 'Some skill, still learning, needs both direction and encouragement. Explain decisions, invite ideas.' },
            { label: 'S4 Delegating', desc: 'Skilled and confident. Agree the outcome and get out of the way.' },
            { label: 'S1 Directing', desc: 'New to the task, enthusiastic but inexperienced. Give clear instructions and close follow-up.' }
          ] },
        { type: 'compare', title: 'Leadership styles (Goleman, 2000)', headers: ['Style', 'In one phrase', 'Use when', 'Overuse risk'],
          rows: [
            ['Visionary', '“Come with me”', 'A new direction is needed', 'Vague if not backed by plans'],
            ['Coaching', '“Try this”', 'Developing people for the long term', 'Slow in a crisis'],
            ['Affiliative', '“People come first”', 'Healing rifts, stressful times', 'Poor performance goes unaddressed'],
            ['Democratic', '“What do you think?”', 'Building buy-in, using expertise', 'Endless meetings'],
            ['Pacesetting', '“Do as I do, now”', 'Highly skilled team, short sprint', 'Burnout'],
            ['Commanding', '“Do what I tell you”', 'Real emergencies', 'Kills initiative']
          ] },
        { type: 'text', title: 'From managing people to managing managers', html: `<p>Each step up changes the job:</p><ul><li><b>Individual contributor:</b> results come from your own work.</li><li><b>First-line manager:</b> results come through your team. Your new tools are 1:1s, feedback, hiring and delegation.</li><li><b>Manager of managers:</b> results come through <i>systems</i> — who you hire as managers, goals, operating rhythm (weekly metrics reviews, quarterly planning) and coaching your managers to coach.</li></ul><p>Andy Grove’s rule: a manager’s output = the output of their organisation plus the neighbouring organisations they influence. Look for <b>high-leverage activities</b> — a decision, a training session or a good hire affects many people at once. Do <b>skip-level 1:1s</b> to hear the truth, but never undercut your managers.</p>` },
        { type: 'framework', name: 'Kotter’s 8 Steps for Leading Change', by: 'John Kotter, 1995–1996', when: 'Any large change: new strategy, merger, reorganisation, AI adoption.',
          steps: [
            { label: '1. Create urgency', desc: 'Show honestly why the status quo is dangerous (data, customer stories).' },
            { label: '2. Build a guiding coalition', desc: 'A group with enough power, credibility and skill to lead the change.' },
            { label: '3. Form a strategic vision', desc: 'A clear picture of the future you can explain in under five minutes.' },
            { label: '4. Enlist a volunteer army', desc: 'Communicate constantly, through every channel; recruit believers.' },
            { label: '5. Remove barriers', desc: 'Change systems, structures and incentives that block the new way.' },
            { label: '6. Generate short-term wins', desc: 'Visible wins within months build credibility and silence cynics.' },
            { label: '7. Sustain acceleration', desc: 'Do not declare victory too early; use credibility to change more.' },
            { label: '8. Institute change', desc: 'Anchor new behaviours in culture, hiring and promotion.' }
          ] },
        { type: 'case', company: 'Microsoft', year: '2014–2020s', title: 'Satya Nadella and the growth-mindset culture',
          situation: `When Nadella became CEO in 2014, Microsoft was seen as internally competitive and siloed, defending Windows while missing mobile. Stack ranking had only just been dropped.`,
          decision: `Nadella put culture at the centre, using Carol Dweck’s idea of a “growth mindset” — moving from “know-it-alls” to “learn-it-alls”. He reframed the mission (“empower every person and every organisation on the planet to achieve more”), embraced partners and rivals (Office on iPhone, Linux on Azure) and pushed collaboration across divisions.`,
          outcome: `Microsoft refocused on cloud (Azure) and became one of the world’s most valuable companies over the following decade. Nadella has said that culture change was the most important part of the turnaround.`,
          lesson: `Strategy and culture change together. Kotter’s steps are visible: urgency (missing mobile), vision (new mission), removing barriers (ranking, silos), and anchoring in leadership behaviours.` },
        { type: 'callout', kind: 'warning', title: 'AI in HR: useful, regulated, risky', html: `<p>AI is now used to write job ads, screen CVs, schedule interviews, answer HR questions, summarise feedback and predict attrition. Two rules for leaders:</p><ul><li><b>Bias in, bias out.</b> Reuters reported in 2018 that Amazon scrapped an experimental CV-screening model because it had learned to penalise CVs mentioning “women’s” (e.g. women’s chess club) — it copied patterns from historical hiring.</li><li><b>It is regulated.</b> The EU AI Act classifies AI used for recruitment, promotion and termination as <b>high-risk</b> (with obligations such as human oversight, documentation and risk management being phased in), and has banned emotion recognition in the workplace since February 2025. New York City requires bias audits for automated hiring tools.</li></ul><p>Use AI to <b>assist</b> humans, keep a person accountable for decisions, test outcomes by group, and tell candidates when AI is used.</p>` },
        { type: 'scenario', prompt: 'You must roll out an AI assistant to 400 customer-service staff who fear job losses. Where do you start?',
          options: [
            { text: 'Announce the tool by email and set a usage target', feedback: 'Skips urgency, coalition and vision. Fear will turn into quiet resistance.', good: false },
            { text: 'Explain the business reason honestly, form a pilot group of respected agents, be clear about job impact, and share early wins they generate', feedback: 'This follows Kotter: urgency, coalition, vision, volunteers and short-term wins — with honesty about jobs to maintain trust.', good: true },
            { text: 'Promise that no job will ever change', feedback: 'A promise you probably cannot keep destroys credibility later.', good: false }
          ] },
        { type: 'flip', title: 'Quick check', cards: [
          { front: 'Experienced, confident employee on a familiar task: which style?', back: 'S4 Delegating.' },
          { front: 'Kotter’s most commonly skipped step?', back: 'Creating real urgency (step 1) — and declaring victory too soon (step 7).' },
          { front: 'Grove’s formula for a manager’s output?', back: 'Output of their organisation + of neighbouring organisations under their influence.' },
          { front: 'What is a skip-level 1:1?', back: 'Meeting your managers’ direct reports to learn what is really happening.' }
        ] }
      ],
      terms: [
        { term: 'Situational leadership', def: 'Hersey and Blanchard’s model: adapt how directive and supportive you are to each person’s skill and commitment on a task.' },
        { term: 'Guiding coalition', def: 'The group of influential people who lead a change effort together.' },
        { term: 'Growth mindset', def: 'Carol Dweck’s idea that abilities can be developed through effort and learning.' },
        { term: 'High-leverage activity', def: 'Work by a manager that affects many people’s output at once, like hiring, training or a key decision.' },
        { term: 'Skip-level meeting', def: 'A manager meeting the reports of their reports to gather unfiltered information.' },
        { term: 'Operating rhythm', def: 'The regular cadence of meetings, reviews and planning that keeps an organisation aligned.' },
        { term: 'High-risk AI system', def: 'Under the EU AI Act, AI used in sensitive areas such as employment, which must meet strict requirements.' }
      ],
      quiz: [
        { q: 'A new hire is enthusiastic but has never done the task. Situational leadership suggests…', options: ['S4 Delegating', 'S3 Supporting', 'S1 Directing', 'No leadership needed'], answer: 2, explain: 'Low competence, high commitment → clear direction and close follow-up.' },
        { q: 'What is Kotter’s first step?', options: ['Generate short-term wins', 'Create a sense of urgency', 'Institute change', 'Remove barriers'], answer: 1, explain: 'Without urgency, people see no reason to change.' },
        { q: 'Which leadership style is most appropriate in a genuine emergency, like a data-centre fire?', options: ['Democratic', 'Affiliative', 'Commanding', 'Coaching'], answer: 2, explain: 'Commanding works in real crises but destroys initiative if overused.' },
        { q: 'As a manager of managers, your highest-leverage activity is usually…', options: ['Hiring and coaching good managers and setting the operating rhythm', 'Doing the hardest technical work yourself', 'Attending every team meeting', 'Approving all expenses'], answer: 0, explain: 'Your results now come through systems and the managers you build.' },
        { q: 'Why did Amazon reportedly scrap its experimental CV-screening AI?', options: ['It was too slow', 'It cost too much', 'It was banned by law', 'It had learned to penalise CVs associated with women'], answer: 3, explain: 'It learned from historical, male-dominated hiring data — a classic bias-in, bias-out failure.' }
      ],
      challenge: {
        title: 'Lead a reorganisation',
        prompt: `You are the new COO of a 600-person company. Sales, product and support are in silos; customer churn has risen from 8% to 14% a year; managers are promoted for technical skill and many have never been trained. You want to move to cross-functional “customer segment” teams within 9 months. Write the change plan.`,
        hints: ['Use Kotter’s 8 steps as a skeleton.', 'Address manager capability.', 'Define early wins and measures.'],
        model: `<p><b>1. Urgency (month 1):</b> show the cost of churn — e.g. on $60M revenue, going from 8% to 14% churn means about $3.6M of extra revenue lost each year. Share customer quotes about hand-offs.</p>
<p><b>2. Coalition:</b> heads of sales, product, support + 6 respected middle managers + an HR partner.</p>
<p><b>3. Vision:</b> “One team owns each customer segment end-to-end.” One-page explanation of what changes and what does not.</p>
<p><b>4. Communicate:</b> all-hands, team Q&As, FAQ, weekly updates; managers briefed first so they can answer questions.</p>
<p><b>5. Remove barriers:</b> shared segment KPIs (net revenue retention, CSAT) replace functional ones; joint planning; change bonus criteria.</p>
<p><b>6. Short-term wins (months 2–4):</b> pilot with one segment; publish its churn and response-time results.</p>
<p><b>7. Scale (months 4–8):</b> roll out segment by segment; adapt based on pilot.</p>
<p><b>8. Anchor (month 9+):</b> management training (1:1s, feedback, situational leadership) for all ~60 managers; promotion criteria include cross-team collaboration.</p>
<p><b>Measure:</b> churn back below 10% within 12 months, engagement scores, regretted attrition of key people during the change.</p>`
      },
      takeaways: [
        'Adapt your style to the person and the situation — no single style always works.',
        'Managing managers means building systems, rhythms and other managers.',
        'Use Kotter’s 8 steps; most failures skip urgency or declare victory too early.',
        'AI in HR can scale bias — keep humans accountable and follow fast-evolving rules.'
      ]
    }
  ]
});
