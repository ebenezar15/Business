/* MBA Studio — Track 20: Ethics, Leadership & Corporate Accountability */
MBA.addTrack({
  id: 'ethics',
  stage: 4,
  order: 20,
  title: 'Ethics, Leadership & Corporate Accountability',
  icon: '⚖️',
  color: '#be123c',
  tagline: 'Do well by doing right — and know the difference under pressure',
  summary: `Ethics is not a poster in the lobby; it is a decision skill you use when targets, bosses and friendships pull you in different directions. After this track you will be able to reason through grey-zone dilemmas with four classic lenses, explain the shareholder vs stakeholder debate, spot the organisational forces that turn good people into scandal headlines, judge boards and CEO pay, handle the new ethics of data and AI, and build a culture — and a personal playbook — that holds up when nobody is watching.`,
  outcomes: [
    'Analyse a business dilemma through consequences, duties, virtue and fairness lenses',
    'Explain Friedman’s shareholder view, the 2019 Business Roundtable statement and what “purpose” really changes',
    'Diagnose how incentives, slippery slopes and groupthink produced Wells Fargo, Dieselgate, Boeing and Theranos',
    'Evaluate a board and a CEO pay package for accountability gaps',
    'Apply fairness tests and responsible-AI practices to data and algorithmic products',
    'Design a speak-up system and write a personal ethics playbook built on the front-page test'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'ethics-1',
      title: 'Why ethics is a business skill: four lenses for hard decisions',
      level: 'Beginner',
      minutes: 13,
      hook: `Almost nobody wakes up planning to commit fraud — scandals are built one “reasonable” decision at a time, by people who never learned to see the choice in front of them.`,
      eli5: `Imagine you are captain of your school football team. The referee misses a handball by your best friend that would have given the other team a penalty. You could stay quiet (your team wins — good result for you), tell the ref (it is the honest rule), ask “what would a captain I admire do?”, or ask “would I think this was fair if it happened to us?”. Those four questions are the four big ways philosophers think about right and wrong. Business ethics is just asking them — calmly, every time — before the whistle blows.`,
      blocks: [
        {
          type: 'text', title: 'Law, compliance and ethics are not the same thing',
          html: `<p><b>Law</b> is the minimum society will enforce. <b>Compliance</b> is a company’s system for following laws and its own rules. <b>Ethics</b> is the bigger question: <i>what is the right thing to do, given everyone my decision affects?</i></p><p>Laws lag behind reality — especially in new areas like data, AI and gig work — so “it’s legal” is the start of the conversation, not the end. And most ethical failures in business are not cartoon villainy; they are ordinary people under pressure who never stopped to name the dilemma.</p><p>That is why ethics is a <span class="hl">skill</span>, like negotiation or financial analysis: you can practise spotting dilemmas, reasoning through them and acting on your conclusion.</p>`
        },
        {
          type: 'matrix', name: 'The legal–ethical grid', xLabel: 'Illegal → Legal', yLabel: 'Unethical → Ethical (top)',
          cells: [
            { label: 'Ethical but illegal', desc: 'Rare in business: e.g. breaking a rule you believe is unjust. Take legal advice and act openly — never assume your conscience is a defence.' },
            { label: 'Ethical and legal', desc: 'The target zone. Most decisions live here — the skill is keeping them here when pressure rises.' },
            { label: 'Unethical and illegal', desc: 'Fraud, bribery, price-fixing, falsifying safety data. Easy to condemn in theory; the hard part is noticing when you are drifting toward it.' },
            { label: 'Legal but unethical', desc: 'The danger zone where most scandals start: exploiting a loophole, a confusing contract, a vulnerable customer. Today’s legal-but-unethical practice is often tomorrow’s regulation — and headline.' }
          ]
        },
        {
          type: 'framework', name: 'Four lenses for an ethical decision', by: 'Moral philosophy: Bentham & Mill, Kant, Aristotle, Rawls', when: 'Any decision where people could be harmed, misled or treated unequally — run all four, then look for where they agree or clash.',
          steps: [
            { label: '1. Consequences (utilitarianism)', desc: 'Which option produces the best overall outcome for everyone affected, not just us? List stakeholders, likely benefits and harms, short and long term. Trap: it can justify hurting a minority if the majority gains.' },
            { label: '2. Duties and rights (deontology)', desc: 'Are there lines we must not cross whatever the payoff — lying, breaking a promise, violating consent or safety? Kant’s test: could this rule be applied by everyone? Am I treating people only as a means to my end?' },
            { label: '3. Virtue (character)', desc: 'What would a person of integrity, courage and fairness do? Who am I becoming — and what is my team learning — if I choose this? Good for habits and culture.' },
            { label: '4. Fairness and justice', desc: 'Are benefits and burdens shared fairly? Rawls’ “veil of ignorance”: would you accept this rule if you did not know whether you would be the CEO, the customer or the night-shift worker?' },
            { label: '5. Decide, then test', desc: 'Where all four lenses agree, act with confidence. Where they clash, choose the option you can defend publicly and reduce the harm to whoever loses out.' }
          ]
        },
        {
          type: 'compare', title: 'One decision, four lenses: a defect found after launch (illustrative)', headers: ['Lens', 'Key question', 'What it suggests'],
          rows: [
            ['Consequences', 'Total harm vs total cost?', 'A recall costs money; injuries, lawsuits and lost trust likely cost far more. Recall.'],
            ['Duties / rights', 'What do we owe customers?', 'A duty not to knowingly sell something unsafe and to warn honestly. Recall and disclose.'],
            ['Virtue', 'Who do we want to be?', 'A company that owns its mistakes. Lead the recall publicly.'],
            ['Fairness', 'Who bears the burden?', 'Do not shift the risk onto customers who cannot see it. Offer a fair remedy to all, not just the loud ones.']
          ]
        },
        {
          type: 'case', company: 'Merck & Co.', year: '1978–1987', title: 'Mectizan: a drug for people who could not pay',
          situation: `Merck researchers found that ivermectin, an animal medicine, could treat river blindness (onchocerciasis), a parasitic disease that blinded people in poor regions of Africa and Latin America. The people who needed it could not pay, and governments in affected countries had little budget.`,
          decision: `After failing to find a buyer such as an aid agency, Merck announced in 1987 that it would donate the human version, Mectizan, “to all who need it, for as long as needed”, working with the WHO and others to distribute it.`,
          outcome: `The donation programme has run for decades and reached very large numbers of people, and river blindness has been eliminated in several countries. Merck gained lasting reputational and recruiting goodwill, but the decision was made before those benefits were certain.`,
          lesson: `A pure short-term profit lens said “shelve it”. Duty, virtue and long-run consequences pointed the other way. Great ethical decisions often look obvious only in hindsight.`
        },
        {
          type: 'formula', name: 'The “cut-corner calculus” — and why it fails', expr: 'Naive expected cost of misconduct = P(caught) × Penalty',
          explain: `This is how people rationalise misconduct: “there’s only a small chance anyone finds out”. It is a consequentialist calculation done badly. It ignores harm to <b>others</b> (the duty and fairness lenses), it underestimates detection (whistleblowers, data trails, journalists), and it ignores reputation, careers and criminal liability.`,
          example: `A manager estimates a 5% chance of being caught mis-labelling a product, with a $2m fine: naive cost = 0.05 × $2m = $100k, less than the $400k saved. But if detection is really 30% and the true cost (fine + recall + lost customers) is $20m, expected cost = 0.30 × $20m = <b>$6m</b> — fifteen times the saving. And even if the numbers came out “positive”, deceiving customers would still fail the duty lens.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Most dilemmas are right vs right',
          html: `<p>Ethicist Rushworth Kidder argued that the toughest choices are not right vs wrong but <b>right vs right</b>. Four classic tensions:</p><ul><li><b>Truth vs loyalty</b> — honesty to a customer vs loyalty to your boss.</li><li><b>Individual vs community</b> — one employee’s needs vs the team’s.</li><li><b>Short term vs long term</b> — this quarter’s numbers vs next decade’s trust.</li><li><b>Justice vs mercy</b> — applying the rule vs giving a second chance.</li></ul><p>Naming which tension you face is half the work.</p>`
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> You are a product manager at a toy company. Two weeks before the holiday launch, testing shows a small part can detach under rough use — below the legal threshold, but a choking risk for toddlers who are not the target age. Your boss, who promoted you and whom you like, says: “It’s legal and it’s labelled 6+. Ship it — this launch is half our year.” What do you do?`,
          options: [
            { text: 'Ship it. It is legal, labelled, and your boss has made the call.', feedback: 'Legal-but-unethical zone. Labels do not stop toddlers in homes with older siblings, and “my boss decided” is exactly the rationalisation behind most scandals. Loyalty is real, but it does not outrank foreseeable harm to children.', good: false },
            { text: 'Quietly report the company to the regulator before talking to anyone internally.', feedback: 'Escalating externally can be right when internal routes fail or are unsafe — but here you have not yet tried. Going straight outside damages trust and may not even be needed.', good: false },
            { text: 'Bring the test data and a fix to your boss: estimate the redesign cost and delay, propose a fix or a stronger warning plus a design change for the next batch, and say clearly you cannot sign off as-is. Escalate to quality/legal if overruled.', feedback: 'Strong. You honour loyalty (go to your boss first, with solutions) and duty (you will not sign off on a foreseeable harm). Bringing numbers turns a moral argument into a business decision your boss can say yes to.', good: true }
          ]
        }
      ],
      terms: [
        { term: 'Business ethics', def: 'Applying principles of right and wrong to business decisions, especially where people could be harmed, misled or treated unfairly.' },
        { term: 'Compliance', def: 'The systems a company uses to follow laws, regulations and its own policies. Necessary but not sufficient for ethical behaviour.' },
        { term: 'Consequentialism (utilitarianism)', def: 'Judging an action by its outcomes — the best choice produces the most overall good for those affected.' },
        { term: 'Deontology', def: 'Judging an action by duties and rights — some acts (lying, breaking promises, violating consent) are wrong even if they produce good results.' },
        { term: 'Virtue ethics', def: 'Judging actions by the character they express and build: honesty, courage, fairness, prudence.' },
        { term: 'Veil of ignorance', def: 'John Rawls’ thought experiment: choose the rule you would accept if you did not know which person in the situation you would be.' },
        { term: 'Right vs right dilemma', def: 'A choice between two genuine values (e.g. truth and loyalty) rather than between right and wrong.' }
      ],
      quiz: [
        {
          q: 'A company uses a confusing cancellation process that is legal but traps customers in subscriptions. Which quadrant of the legal–ethical grid is this?',
          options: ['Ethical and legal', 'Ethical but illegal', 'Unethical and illegal', 'Legal but unethical'],
          answer: 3,
          explain: 'It is legal (for now) but exploits customers — the classic “legal but unethical” danger zone, which regulators often later outlaw.'
        },
        {
          q: 'Which lens asks “would I accept this rule if I didn’t know whether I would be the CEO or the night-shift worker”?',
          options: ['Fairness / justice (Rawls)', 'Utilitarianism', 'Virtue ethics', 'Shareholder primacy'],
          answer: 0,
          explain: 'That is Rawls’ veil of ignorance, the core of the fairness/justice lens.'
        },
        {
          q: 'A manager estimates a 10% chance of being caught hiding a defect, and the full cost if caught (fines, recall, lost sales) is $30m. What is the expected cost?',
          options: ['$300k', '$3m', '$30m', '$0.3m per year'],
          answer: 1,
          explain: '0.10 × $30m = $3m. And that still ignores the harm to customers, which the duty lens says matters regardless of the maths.'
        },
        {
          q: 'What is the main weakness of judging decisions only by consequences?',
          options: ['It ignores outcomes entirely', 'It can justify harming a minority if the majority gains, and is easy to bias in your own favour', 'It only works for non-profits', 'It forbids all risk-taking'],
          answer: 1,
          explain: 'Consequentialism is powerful but can trample individual rights and invites self-serving estimates — which is why you add the duty, virtue and fairness lenses.'
        },
        {
          q: 'Your boss asks you to tell a client a delivery is “on track” when you know it will be two weeks late. In Kidder’s terms, which tension is this?',
          options: ['Justice vs mercy', 'Individual vs community', 'Truth vs loyalty', 'There is no tension — it is simply right vs wrong'],
          answer: 2,
          explain: 'Loyalty to your boss pulls against honesty to the client. Naming it helps you find a third way: e.g. tell the client honestly, with a recovery plan agreed with your boss.'
        }
      ],
      challenge: {
        title: 'The auto-enrol add-on',
        prompt: `You lead product at a consumer fintech app with 500,000 active users. The growth team proposes automatically adding a $3/month “Account Protection” add-on to every account, with an opt-out link in settings. It is legal in your market if disclosed in the terms. Their data: if offered as opt-in, about 4% of users buy it; with auto-enrolment they expect 25% to keep paying (most simply will not notice). Many of your users are young and on low incomes.<br><br>Run the four lenses, calculate the monthly revenue of each option, and make a recommendation the CEO can act on.`,
        hints: ['Monthly revenue = paying users × $3.', 'Ask who the extra 21% of payers are — people who chose it, or people who did not notice?', 'Consider long-term consequences: complaints, refunds, regulators, app-store reviews, trust.'],
        model: `<p><b>1. The numbers</b></p><ul><li>Opt-in: 500,000 × 4% = 20,000 payers × $3 = <b>$60,000/month</b> ($720k/year).</li><li>Auto-enrol: 500,000 × 25% = 125,000 payers × $3 = <b>$375,000/month</b> ($4.5m/year).</li><li>The extra 105,000 payers are, by the team’s own description, mostly people who did not notice — revenue from inattention, not choice.</li></ul><p><b>2. Four lenses</b></p><table><thead><tr><th>Lens</th><th>Verdict on auto-enrol</th></tr></thead><tbody><tr><td>Consequences</td><td>Short-term gain, but likely refunds, chargebacks, complaints, bad reviews and regulatory attention (consumer regulators have repeatedly targeted negative-option and hard-to-cancel practices). Long-run trust in a <i>money</i> app is the core asset.</td></tr><tr><td>Duties / rights</td><td>Fails informed consent: charging people for something they did not knowingly choose.</td></tr><tr><td>Virtue</td><td>Teaches the team that winning means exploiting inattention.</td></tr><tr><td>Fairness</td><td>The burden falls hardest on low-income users who can least afford $36/year of waste. Behind the veil of ignorance, nobody picks this rule.</td></tr></tbody></table><p><b>3. Recommendation</b>: reject auto-enrolment. Instead (a) make the opt-in excellent — offer it at moments of real need (e.g. after a suspicious-login alert), (b) A/B test clear messaging, and (c) set a goal of 8–10% <i>informed</i> uptake (= $120k–$150k/month). Report revenue <i>and</i> complaint, refund and cancellation rates so the team is rewarded for value, not confusion.</p>`
      },
      takeaways: [
        'Legal is the floor, not the ceiling — most scandals start in the “legal but unethical” zone.',
        'Run four lenses: consequences, duties, virtue and fairness; act with confidence where they agree.',
        'Most hard dilemmas are right vs right — name the tension before you decide.',
        'The “chance of getting caught” calculation is how rationalisation sounds; reject it.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'ethics-2',
      title: 'Shareholder vs stakeholder capitalism: what is a company for?',
      level: 'Beginner',
      minutes: 14,
      hook: `In 1970 an economist said a company’s only social responsibility is to make profit; in 2019 the CEOs of America’s biggest companies said it wasn’t — and the argument is still deciding who gets fired, funded and paid.`,
      eli5: `Imagine a bakery owned by five friends who each put in money. One view says: the baker’s job is to make the most money for those five friends, honestly and within the rules — if the friends want to give to charity, they can do it with their own share. Another view says: the bakery also depends on its workers, its flour suppliers, its neighbours and its customers, so it should look after all of them, because a bakery that treats them badly will not last. Most real debates are about where between those two views a company should sit.`,
      blocks: [
        {
          type: 'text', title: 'What Friedman actually argued',
          html: `<p>You met the shareholder vs stakeholder debate in <b>Business 101</b>; here we go deeper into the arguments, the law and what changed in practice.</p><p>Milton Friedman’s 1970 New York Times Magazine essay, <i>“The Social Responsibility of Business Is to Increase Its Profits”</i>, is often caricatured as “greed is good”. His actual argument was narrower:</p><ul><li><b>Agency:</b> executives are employees of the owners. If they spend company money on causes the owners did not choose, they are effectively taxing shareholders (or customers or workers) without consent.</li><li><b>Rules of the game:</b> profit should be pursued “without deception or fraud” and within the law.</li><li><b>Enlightened self-interest is fine:</b> spending on the community or employees is legitimate if it serves the long-run interest of the business.</li></ul><p>Critics reply that “the rules of the game” are themselves shaped by corporate lobbying, that many harms (pollution, data misuse) are not yet illegal, and that shareholders are not one group with one goal.</p>`
        },
        {
          type: 'timeline', title: 'A century of “what is a company for?”',
          items: [
            { label: '1919', desc: 'Dodge v. Ford (Michigan): the court says a business corporation is organised primarily for the profit of its stockholders, after Henry Ford tried to hold back dividends to benefit workers and customers.' },
            { label: '1932', desc: 'Berle & Means, The Modern Corporation and Private Property: ownership has separated from control in big companies — managers, not owners, run them.' },
            { label: '1970', desc: 'Friedman’s essay: the social responsibility of business is to increase its profits within the rules.' },
            { label: '1976', desc: 'Jensen & Meckling formalise agency theory; it later underpins stock-based CEO pay.' },
            { label: '1984', desc: 'R. Edward Freeman’s Strategic Management: A Stakeholder Approach popularises stakeholder theory.' },
            { label: '2006', desc: 'UK Companies Act s.172: directors must promote the company’s success for its members while having regard to employees, suppliers, customers, community, environment and the long term.' },
            { label: '2013', desc: 'India’s Companies Act makes CSR spending mandatory for larger profitable companies (Section 135).' },
            { label: '2019', desc: 'Business Roundtable “Statement on the Purpose of a Corporation”: CEOs commit to all stakeholders.' },
            { label: '2020s', desc: 'ESG investing booms, then faces political backlash and scrutiny of “greenwashing” claims.' }
          ]
        },
        {
          type: 'compare', title: 'Four answers to “what is a company for?”', headers: ['', 'Shareholder primacy', 'Enlightened shareholder value', 'Stakeholder capitalism', 'Shared value'],
          rows: [
            ['Core idea', 'Maximise returns to owners within the law', 'Maximise long-run owner value — which requires treating stakeholders well', 'Balance the interests of all stakeholders; owners are one among several', 'Find opportunities where solving a social problem is also profitable'],
            ['Key voices', 'Friedman (1970); agency theory', 'UK Companies Act 2006 s.172', 'Freeman (1984); Business Roundtable (2019)', 'Porter & Kramer (2011)'],
            ['Strength', 'Clear goal, clear accountability', 'Pragmatic; matches most laws', 'Captures real dependencies and harms', 'Aligns profit and impact'],
            ['Weakness', 'Can ignore harms the law misses; short-termism', 'Hard to measure “long run”', '“Accountable to everyone” can mean accountable to no one', 'Ignores the hard trade-offs where impact costs profit']
          ]
        },
        {
          type: 'framework', name: 'Stakeholder salience', by: 'Mitchell, Agle & Wood, 1997', when: 'Deciding which stakeholder claims need attention first — deeper than a simple power/interest grid.',
          steps: [
            { label: 'Power', desc: 'Can this group impose its will — through votes, money, law, strikes or media? (Activist investors, regulators, unions.)' },
            { label: 'Legitimacy', desc: 'Is the claim widely seen as proper — based on a contract, a right or real harm? (Injured customers, local residents near a plant.)' },
            { label: 'Urgency', desc: 'Is the claim time-sensitive and critical to them? (A safety risk, a factory closure next month.)' },
            { label: 'Read the combinations', desc: 'Groups with all three are “definitive” — act now. Groups with legitimacy and urgency but no power (e.g. contract workers abroad) are “dependent”: easy to ignore and exactly where ethical failures hide.' }
          ]
        },
        {
          type: 'case', company: 'Business Roundtable', year: '2019', title: '181 CEOs redefine the purpose of a corporation',
          situation: `Since 1997 the Business Roundtable, an association of large-company CEOs in the US, had endorsed the principle that corporations exist mainly to serve shareholders. Public pressure over inequality, climate and corporate behaviour was rising.`,
          decision: `In August 2019 it published a new Statement on the Purpose of a Corporation, signed by 181 CEOs, committing to deliver value to customers, invest in employees, deal fairly with suppliers, support communities and generate long-term value for shareholders.`,
          outcome: `It made headlines worldwide. Critics, including academic studies of the signatories, found little evidence that companies changed their governance documents, board duties or pay plans in response; others argued it gave cover to managers to avoid accountability to anyone.`,
          lesson: `A statement of purpose matters only when it changes decisions, incentives and governance. Ask: what did they stop doing, and whose pay changed?`
        },
        {
          type: 'case', company: 'Danone', year: '2020–2021', title: 'A “mission company” meets an activist',
          situation: `French food group Danone, under CEO Emmanuel Faber, became the first large listed French company to adopt the legal status of “entreprise à mission” in 2020, writing social and environmental objectives into its articles of association.`,
          decision: `Shareholders approved the change by a very large majority. But Danone’s share price and growth lagged rivals such as Nestlé and Unilever, and activist investors argued that purpose had become an excuse for weak performance.`,
          outcome: `In March 2021 the board removed Faber as chairman and CEO. Danone kept its mission-company status under new leadership.`,
          lesson: `Purpose does not suspend the need to perform. Stakeholder commitments are most durable when paired with competitive results — and leaders who preach purpose face extra scrutiny when numbers slip.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Weigh the stakeholders',
          note: `Score a real decision (e.g. closing a plant vs keeping it) against criteria such as shareholder return, employee impact, community impact, customer impact and long-term reputation. Change the weights to see how a “shareholder primacy” board and a “stakeholder” board would vote differently.`
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> You are an independent director. An activist fund holding 6% of the shares demands that the board close a profitable-but-low-margin factory in a small town and move production abroad, saving $12m a year. The factory is the town’s largest employer. The CEO wants to resist completely. How do you vote?`,
          options: [
            { text: 'Close it immediately — the board’s duty is to shareholders, and the activist has a point.', feedback: 'Speed is not the duty. Even under shareholder primacy, a rushed closure can destroy value through severance, quality problems and reputational damage. You have not examined alternatives.', good: false },
            { text: 'Refuse to discuss it — the company’s purpose statement says we protect our communities.', feedback: 'Using purpose as a shield against legitimate performance questions is exactly what got Danone’s CEO removed. The activist’s numbers deserve an answer.', good: false },
            { text: 'Ask management for a full analysis: the true savings after transition costs, options to raise the plant’s productivity, and — if closure is right — a responsible transition plan (notice, retraining, support for the town). Decide on the evidence.', feedback: 'Strong. You take the shareholder claim seriously, treat employees and community as stakeholders with legitimate, urgent claims, and make a decision you can defend to both.', good: true }
          ]
        }
      ],
      terms: [
        { term: 'Shareholder primacy', def: 'The view that a company’s main purpose is to maximise returns to its shareholders, within the law.' },
        { term: 'Stakeholder capitalism', def: 'The view that companies should create value for and balance the interests of all stakeholders — customers, employees, suppliers, communities and shareholders.' },
        { term: 'Agency problem', def: 'The conflict that arises when managers (agents) run a company on behalf of owners (principals) and may pursue their own interests.' },
        { term: 'Enlightened shareholder value', def: 'Maximise long-term shareholder value by taking stakeholders seriously; embodied in UK company law (s.172).' },
        { term: 'Shared value', def: 'Porter and Kramer’s idea of finding business opportunities in solving social problems.' },
        { term: 'Stakeholder salience', def: 'How much attention a stakeholder’s claim deserves, based on its power, legitimacy and urgency.' },
        { term: 'Corporate purpose', def: 'A company’s reason for existing beyond profit. Meaningful only if it shapes strategy, incentives and governance.' }
      ],
      quiz: [
        {
          q: 'Which statement best describes Friedman’s 1970 argument?',
          options: ['Companies should break laws if profitable', 'Executives spending company money on social causes the owners did not choose is like taxing them without consent; profit should be pursued within the rules and without fraud', 'Companies should ignore employees entirely', 'Companies should maximise market share'],
          answer: 1,
          explain: 'Friedman’s core point was about agency and consent, with profit pursued “without deception or fraud” within the rules of the game.'
        },
        {
          q: 'Under India’s Companies Act 2013, a qualifying company must spend at least 2% of its average net profit of the last three years on CSR. If its average net profit is ₹500 crore, what is the minimum CSR spend?',
          options: ['₹5 crore', '₹2 crore', '₹50 crore', '₹10 crore'],
          answer: 3,
          explain: '2% × ₹500 crore = ₹10 crore.'
        },
        {
          q: 'What is the most common criticism of the 2019 Business Roundtable statement?',
          options: ['It was signed by too few CEOs', 'It abolished shareholder voting', 'There was little evidence that signatories changed governance, pay or decisions afterwards', 'It was illegal under US law'],
          answer: 2,
          explain: 'Researchers and journalists found few concrete changes in governance documents or pay — a reminder that purpose must change incentives to be real.'
        },
        {
          q: 'In the stakeholder salience model, overseas contract workers with a legitimate and urgent safety claim but little power are…',
          options: ['Dependent stakeholders — easy to ignore, which is where ethical failures often hide', 'Definitive stakeholders', 'Not stakeholders', 'Dangerous stakeholders'],
          answer: 0,
          explain: 'Legitimacy + urgency without power = dependent. Their claims are real but easy to neglect.'
        },
        {
          q: 'What does the Danone case most clearly show?',
          options: ['Mission-company status is illegal', 'Shareholders always reject purpose', 'Purpose commitments do not protect leaders from accountability for weak performance', 'Activist investors only care about ESG'],
          answer: 2,
          explain: 'Shareholders approved the mission status, yet the CEO was removed when performance lagged peers. Purpose and performance have to travel together.'
        }
      ],
      challenge: {
        title: 'The plant in Millbrook (illustrative)',
        prompt: `A listed manufacturer can move production from its plant in Millbrook (1,200 employees, the town’s largest employer) to a lower-cost site abroad. Annual savings: $12m. One-off costs of closure and transition: $20m (severance, moving equipment, dual-running). There is a risk of quality problems in the first year. An alternative: invest $15m in automation at Millbrook, saving $7m a year but cutting 300 jobs through retirement and voluntary redundancy over two years.<br><br>Compare the options financially (simple payback), assess them through a shareholder lens and a stakeholder lens, and recommend what the board should do.`,
        hints: ['Simple payback = one-off cost ÷ annual savings.', 'Use the salience model: who has power, legitimacy and urgency?', 'Consider hybrid options and how you would carry out whichever choice you make.'],
        model: `<p><b>1. Financials (simple payback)</b></p><table><thead><tr><th>Option</th><th>Cost</th><th>Annual saving</th><th>Payback</th></tr></thead><tbody><tr><td>A: Close and move</td><td>$20m</td><td>$12m</td><td>20 ÷ 12 ≈ <b>1.7 years</b></td></tr><tr><td>B: Automate Millbrook</td><td>$15m</td><td>$7m</td><td>15 ÷ 7 ≈ <b>2.1 years</b></td></tr></tbody></table><p>Over five years (ignoring discounting): A = 5 × 12 − 20 = <b>$40m</b>; B = 5 × 7 − 15 = <b>$20m</b>. A looks better on paper — but A carries first-year quality risk and supply-chain distance, which could erode the gap.</p><p><b>2. Shareholder lens</b>: A wins on headline numbers; B is lower risk and keeps a proven workforce. A disciplined board would stress-test A’s savings (wage inflation abroad, logistics, quality).</p><p><b>3. Stakeholder lens</b>: Millbrook employees and the town are definitive stakeholders (legitimate, urgent, and with some power via media and politics). A costs 1,200 jobs at once; B costs 300 over two years, largely without forced redundancy.</p><p><b>4. Recommendation</b>: choose <b>B</b> as the base plan and commit to a productivity target that, if missed after two years, triggers a re-review. B captures more than half of A’s savings with far less risk and harm, and the board can explain it to the activist as a value-creating decision, not charity. If the board does choose A, it must fund a responsible transition: long notice, enhanced severance, retraining and support for local suppliers.</p>`
      },
      takeaways: [
        'Friedman’s argument is about agency and consent within the rules — not “anything for profit”.',
        'Most company law sits in between: long-run shareholder value that requires treating stakeholders well.',
        'Purpose is real only when it changes incentives, governance and hard decisions.',
        'Purpose does not excuse weak performance; durable stakeholder strategies also win commercially.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'ethics-3',
      title: 'How good organisations go bad: incentives, slippery slopes and groupthink',
      level: 'Intermediate',
      minutes: 17,
      hook: `Wells Fargo did not hire 5,000 crooks — it built a system that taught thousands of ordinary employees to open accounts nobody asked for.`,
      eli5: `Imagine your teacher gives a sweet for every page of homework handed in, without checking what is on the page. At first everyone works harder. Then someone hands in a page of scribbles and still gets a sweet. Soon half the class is scribbling, everyone tells themselves “everyone else does it”, and the one kid who complains is told to stop being a snitch. Nobody planned to cheat — the rules made cheating easy and honesty lonely. Most company scandals work exactly like that.`,
      blocks: [
        {
          type: 'framework', name: 'The fraud triangle', by: 'Donald Cressey, 1950s', when: 'Diagnosing why misconduct happens — and where to intervene before it does.',
          steps: [
            { label: 'Pressure', desc: 'Unrealistic targets, fear of losing a job or bonus, personal debt, a boss who will not hear “no”.' },
            { label: 'Opportunity', desc: 'Weak controls, nobody checking, complex products, too much power in one person’s hands.' },
            { label: 'Rationalisation', desc: 'The story that makes it feel acceptable: “it’s temporary”, “everyone does it”, “no one really gets hurt”, “they don’t pay us enough”.' },
            { label: 'Where leaders act', desc: 'You can reduce pressure (realistic targets), remove opportunity (controls, separation of duties) and attack rationalisations (culture, examples, speaking openly about grey zones). Remove any one side and misconduct drops.' }
          ]
        },
        {
          type: 'text', title: 'Five forces that bend good people',
          html: `<ul><li><b>Incentives and Goodhart’s law.</b> “When a measure becomes a target, it ceases to be a good measure.” Pay people for accounts opened and you get accounts — not necessarily customers.</li><li><b>Slippery slopes.</b> Research by Francesca Gino and Max Bazerman found people are more likely to accept unethical behaviour when it creeps in gradually than when it appears suddenly. Today’s small fudge becomes tomorrow’s baseline.</li><li><b>Ethical fading.</b> Ann Tenbrunsel and David Messick describe how framing a choice as “a business decision” or “an engineering issue” makes the ethical dimension disappear from view.</li><li><b>Groupthink.</b> Irving Janis (1972) showed cohesive groups under pressure suppress doubts, assume unanimity and stereotype critics. Signs: no one plays devil’s advocate; dissenters self-censor.</li><li><b>Obedience and conformity.</b> Classic experiments by Stanley Milgram and Solomon Asch showed how strongly people defer to authority and to the group — even against their own judgement.</li></ul>`
        },
        {
          type: 'case', company: 'Wells Fargo', year: '2002–2020', title: 'The cross-selling machine',
          situation: `Wells Fargo was admired for “cross-selling” — getting each customer to hold many products. Its slogan internally was “Eight is great”. Branch staff faced aggressive daily sales targets, with managers monitoring progress several times a day.`,
          decision: `Rather than miss targets, many employees opened deposit and credit-card accounts customers had not requested, sometimes moving money between them or creating fake email addresses. Leaders treated it as a problem of individual bad apples and fired employees, rather than changing the targets.`,
          outcome: `In September 2016 regulators fined the bank $185m and it disclosed it had fired around 5,300 employees over several years. CEO John Stumpf resigned within weeks; the board clawed back tens of millions of dollars of executive pay. In 2018 the US Federal Reserve imposed an unusual cap on the bank’s asset growth, which stayed in place until 2025, and in 2020 the bank agreed to pay $3bn to settle criminal and civil investigations.`,
          lesson: `When thousands of people break the rules in the same way, the problem is the system, not the people. Leaders own the incentives they design — and the warnings they ignore.`
        },
        {
          type: 'case', company: 'Volkswagen', year: '2006–2017', title: 'Dieselgate: engineering around the test',
          situation: `Volkswagen bet heavily on “clean diesel” to sell cars in the US, where nitrogen-oxide (NOx) limits were strict. Meeting those limits at reasonable cost proved very hard, and the company culture was widely described as top-down and fearful of delivering bad news.`,
          decision: `Engineers installed “defeat device” software that detected when a car was on a test bench and switched on full emissions controls, then reduced them on the road. Researchers at West Virginia University, in a study commissioned by the ICCT, found real-world NOx far above test levels in 2014.`,
          outcome: `In September 2015 the US EPA issued a notice of violation; VW admitted around 11 million vehicles worldwide had the software. CEO Martin Winterkorn resigned. VW pleaded guilty to criminal charges in the US in 2017, and its total costs for fines, buy-backs and settlements ran to tens of billions of euros.`,
          lesson: `Impossible targets + a culture that punishes bad news = engineers solving the wrong problem. Ethical fading turned a lie into a “technical solution”.`
        },
        {
          type: 'compare', title: 'Four scandals, one pattern', headers: ['', 'Wells Fargo', 'VW Dieselgate', 'Boeing 737 MAX', 'Theranos'],
          rows: [
            ['Pressure', 'Daily sales targets', 'Win the US diesel market at low cost', 'Match Airbus’s A320neo quickly, minimise pilot retraining', 'Investor hype, a founder’s vision, launch deadlines with Walgreens'],
            ['Opportunity', 'Weak checks on account opening', 'Tests only measured lab conditions', 'Regulator delegated much certification work to Boeing; MCAS not fully explained to pilots', 'Secrecy, a board with little lab expertise, founder control'],
            ['Rationalisation', '“Customers might use it; it’s just paperwork”', '“It’s a technical solution”', '“It’s a derivative of a proven plane”; internal messages later released mocked regulators', '“The technology will catch up”; critics are “haters”'],
            ['Who spoke up', 'Employees who called the ethics line — some reported being fired', 'Outside researchers', 'Some engineers and test pilots raised concerns internally', 'Employees Tyler Shultz and Erika Cheung, and journalist John Carreyrou (WSJ, 2015)'],
            ['Cost', 'Fines, $3bn settlement, asset cap, CEO exit', 'Tens of billions, CEO exit, criminal cases', '346 lives lost in two crashes; ~20-month grounding; CEO fired in 2019', 'Company collapsed; founder convicted of fraud in 2022']
          ]
        },
        {
          type: 'flip', title: 'Spot the rationalisation',
          cards: [
            { front: '“I didn’t have a choice — my manager told me to.”', back: '<b>Denial of responsibility.</b> Authority shifts blame in our heads, not in the eyes of the law or the people harmed.' },
            { front: '“No one really gets hurt. It’s just an accounting thing.”', back: '<b>Denial of injury.</b> Ask: who would be upset if they knew? That is who gets hurt.' },
            { front: '“They deserved it — that customer was always difficult.”', back: '<b>Denial of the victim.</b> Mistreatment does not become fair because the target is unpopular.' },
            { front: '“Our competitors do far worse.”', back: '<b>Social weighting.</b> Comparing yourself to the worst makes anything look fine.' },
            { front: '“I’m doing it to save my team’s jobs.”', back: '<b>Appeal to higher loyalty.</b> Loyalty is a value — but not a licence to harm outsiders.' },
            { front: '“I’ve earned it after all the unpaid overtime.”', back: '<b>Metaphor of the ledger.</b> Banking past good deeds to “spend” on bad ones.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Whistleblowing: brave, protected (sometimes), and costly',
          html: `<p>Whistleblowers expose problems that leaders miss or hide — but they often pay a heavy personal price. Theranos employee Tyler Shultz has described intense legal pressure from the company after he raised concerns.</p><p>Protections have grown: the US SEC whistleblower programme (created under Dodd-Frank, 2010) can award a share of large sanctions and bans retaliation; the EU Whistleblower Directive (2019) requires many organisations to provide safe internal channels. Practical rules: <b>document facts</b> (dates, data — not opinions), use internal channels first where safe, get independent legal advice before going outside, and never take data you are not authorised to hold.</p>`
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> You join a sales team and notice that several colleagues book deals in the last week of the quarter with “side letters” promising customers they can cancel for free — which means the revenue should not be counted yet. Your manager, who has been kind and generous to you, says: “Everyone does it, finance never asks, and it all evens out next quarter.” What do you do?`,
          options: [
            { text: 'Go along this once — you are new, and it “evens out”.', feedback: 'This is the slippery slope in action. Side letters that hide cancellation rights can mean misstated revenue — the kind of issue that has triggered restatements and fraud cases. The first step is the easiest one to refuse.', good: false },
            { text: 'Decline to use side letters yourself, and raise it — first with your manager as a risk to them and the team (“if audit finds these, we all get hurt”), then with finance or the ethics line if nothing changes.', feedback: 'Good. You refuse to participate, frame it in terms your manager cares about, and escalate through proper channels if needed — without assuming bad intent.', good: true },
            { text: 'Post anonymously on social media about your company’s “fraud”.', feedback: 'You do not yet know the full picture, and public accusations before using internal channels can harm innocent people, breach confidentiality and weaken any legal protections you would have.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Fraud triangle', def: 'Pressure, opportunity and rationalisation — the three conditions that together make misconduct likely.' },
        { term: 'Goodhart’s law', def: 'When a measure becomes a target, it ceases to be a good measure, because people optimise the number rather than the goal.' },
        { term: 'Slippery slope', def: 'Gradual escalation of small ethical lapses, each of which seems minor compared with the last.' },
        { term: 'Ethical fading', def: 'When framing a decision as purely business or technical makes its ethical side invisible.' },
        { term: 'Groupthink', def: 'A tendency for cohesive groups to suppress dissent and reach poor decisions to preserve harmony (Janis, 1972).' },
        { term: 'Whistleblower', def: 'Someone who reports wrongdoing inside an organisation to people who can act on it, internally or externally.' },
        { term: 'Defeat device', def: 'Software or hardware that makes a product behave differently during testing than in real use.' }
      ],
      quiz: [
        {
          q: 'A sales rep earns $15 for each new account and must hit 40 accounts a month, but genuine demand in their branch supports about 25. What is the monthly “pressure gap” in accounts and in bonus dollars?',
          options: ['15 accounts / $225', '25 accounts / $375', '40 accounts / $600', '15 accounts / $600'],
          answer: 0,
          explain: '40 − 25 = 15 accounts the rep cannot fill honestly, worth 15 × $15 = $225 — plus the fear of missing target. That gap is the “pressure” side of the fraud triangle.'
        },
        {
          q: 'Which side of the fraud triangle does “separation of duties” (different people approving and paying invoices) mainly reduce?',
          options: ['Pressure', 'Rationalisation', 'Opportunity', 'None'],
          answer: 2,
          explain: 'Controls such as separation of duties remove opportunity.'
        },
        {
          q: 'VW engineers framing emissions cheating as a “technical solution” is an example of…',
          options: ['Groupthink', 'Ethical fading', 'Stakeholder salience', 'Shared value'],
          answer: 1,
          explain: 'Ethical fading: describing an act in technical or business language makes its moral nature disappear from view.'
        },
        {
          q: 'What was the strongest signal that Wells Fargo’s problem was systemic, not a few bad apples?',
          options: ['The CEO resigned', 'Thousands of employees across many branches did the same thing in response to the same targets', 'The fine was large', 'Customers complained'],
          answer: 1,
          explain: 'When thousands of people break rules in the same way under the same incentives, the system is producing the behaviour.'
        },
        {
          q: 'Which is NOT a classic symptom of groupthink?',
          options: ['Self-censorship of doubts', 'Illusion of unanimity', 'Stereotyping outside critics', 'Appointing a designated devil’s advocate'],
          answer: 3,
          explain: 'A designated devil’s advocate is a remedy for groupthink, not a symptom.'
        }
      ],
      challenge: {
        title: 'Redesign the branch incentive plan',
        prompt: `You are the new head of retail banking at a mid-size bank (illustrative). Branch staff earn a quarterly bonus of up to $3,000 based 100% on “products sold” against a target. Complaints about unwanted products have tripled in two years, and the internal ethics line received 40 reports last year — with 6 reporters later leaving the bank “by mutual agreement”.<br><br>Diagnose the problem with the fraud triangle and design a new incentive plan (with weights) plus three controls. Explain how you will know it is working.`,
        hints: ['Map each fact to pressure, opportunity or rationalisation.', 'A balanced scorecard can include customer outcomes, quality and conduct gates.', 'The 6 departures are a red flag about retaliation — what does that do to future reporting?'],
        model: `<p><b>1. Diagnosis (fraud triangle)</b></p><ul><li><b>Pressure:</b> 100% of bonus on product volume with a target that creates a gap vs real demand.</li><li><b>Opportunity:</b> products can apparently be opened without verified customer consent.</li><li><b>Rationalisation:</b> the departure of 6 of 40 reporters (15%) signals that speaking up is punished, so silence becomes “normal”.</li></ul><p><b>2. New quarterly bonus (max $3,000)</b></p><table><thead><tr><th>Measure</th><th>Weight</th><th>Max $</th></tr></thead><tbody><tr><td>Products that are still active and used after 90 days</td><td>40%</td><td>$1,200</td></tr><tr><td>Customer satisfaction / complaint rate for the branch</td><td>30%</td><td>$900</td></tr><tr><td>Service quality (audited file checks)</td><td>30%</td><td>$900</td></tr><tr><td><b>Conduct gate</b>: any confirmed unauthorised product = zero bonus that quarter, regardless of other scores</td><td>Gate</td><td>—</td></tr></tbody></table><p>Weights sum to 100% and the dollar amounts to $3,000.</p><p><b>3. Controls</b></p><ol><li>Customer consent confirmed by e-signature or a text to the customer for every new product.</li><li>Monthly data analytics: flag accounts with no deposits or use within 30 days, by employee and branch.</li><li>Independent review of the 6 departures; a non-retaliation policy with consequences for managers who retaliate; reports routed to the board audit committee.</li></ol><p><b>4. Is it working?</b> Track: complaint rate (target: back to the level of two years ago within a year), 90-day product usage, unauthorised-product findings, and ethics-line volume — <i>rising</i> reports in year one is a good sign of trust, not a bad one.</p>`
      },
      takeaways: [
        'Misconduct needs pressure, opportunity and rationalisation — remove one side.',
        'If many people misbehave the same way, fix the system they are responding to.',
        'Slippery slopes and ethical fading let good people do bad things without noticing.',
        'Protect the people who speak up — retaliation silences the next warning.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'ethics-4',
      title: 'Leadership accountability: boards, CEO pay and governance failures',
      level: 'Intermediate',
      minutes: 16,
      hook: `Enron had a board full of experienced directors and a 60-plus-page code of ethics — and still collapsed into one of the largest bankruptcies in US history.`,
      eli5: `Imagine a school club where the treasurer handles all the money and the committee that is supposed to check the accounts is made up of the treasurer’s best friends, who meet twice a year and get free pizza from the treasurer. On paper there is “oversight”. In reality nobody is checking. Corporate governance is about making sure the people watching the money are independent, informed and brave enough to ask awkward questions — and that the leaders’ rewards match what is good for the club.`,
      blocks: [
        {
          type: 'text', title: 'From structure to accountability',
          html: `<p>In <b>Legal, Governance & Risk</b> you learned what boards are and how they are composed, and in the C-suite track how executives work with them. Here we go further: <i>why do boards that look good on paper fail, and how do pay packages shape what leaders do?</i></p><p>The root is the <b>agency problem</b>: managers run the company on behalf of owners and may favour their own interests — empire-building, short-termism, excessive pay, hiding bad news. Boards, auditors, pay design and disclosure rules are all tools to narrow that gap. Each can fail.</p><p>Accountability also flows downward: <b>“tone at the top”</b> sets what employees believe is truly rewarded, whatever the code of conduct says.</p>`
        },
        {
          type: 'framework', name: 'Seven ways boards fail', by: 'Synthesis of governance research and post-scandal inquiries', when: 'Assessing whether a board can actually hold management to account.',
          steps: [
            { label: '1. Independence in name only', desc: 'Directors with business ties, friendships or consulting fees from the company — or appointed by the CEO — rarely challenge the CEO.' },
            { label: '2. Information asymmetry', desc: 'The board only sees what management chooses to show, in polished slides, the night before.' },
            { label: '3. Missing expertise', desc: 'A board without people who understand the core technology or risk (Theranos had few medical-lab experts) cannot spot nonsense.' },
            { label: '4. Dominant CEO / founder control', desc: 'Combined CEO-chair roles or dual-class shares can make the board advisory in practice.' },
            { label: '5. Groupthink and collegiality', desc: 'Directors who value harmony over challenge; nobody wants to be the awkward one.' },
            { label: '6. Pay that rewards the wrong thing', desc: 'Short-term share price or volume targets invite risk-taking and manipulation.' },
            { label: '7. Waivers and exceptions', desc: 'Every “just this once” exception to policy is a warning sign — Enron’s board waived its own conflict-of-interest rules.' }
          ]
        },
        {
          type: 'case', company: 'Enron', year: '1997–2001', title: 'The board that waived its own code',
          situation: `Enron transformed from a pipeline company into an energy-trading powerhouse and was celebrated as one of America’s most innovative companies. It used complex “special purpose entities” to keep debt off its balance sheet and book profits early.`,
          decision: `The board approved arrangements in which CFO Andrew Fastow ran partnerships that did deals with Enron itself — a glaring conflict of interest — waiving the company’s code of conduct to allow it. Directors relied on management and the auditor, Arthur Andersen, which also earned large consulting fees from Enron.`,
          outcome: `When the structures unravelled in late 2001, Enron restated years of earnings and filed for bankruptcy in December 2001. Employees lost jobs and retirement savings held in Enron shares; Arthur Andersen collapsed. A US Senate subcommittee report criticised the board for failing to safeguard shareholders. The scandal (with WorldCom) led to the Sarbanes-Oxley Act of 2002.`,
          lesson: `A code of ethics is worthless if the board grants exceptions for the powerful. Auditor independence and director scepticism are not formalities.`
        },
        {
          type: 'case', company: 'Satyam Computer Services', year: '2008–2009', title: 'India’s “Enron moment”',
          situation: `Satyam was one of India’s largest IT services firms, with a board that included respected independent directors. In December 2008 the board approved buying two companies linked to the founder’s family (Maytas) for about $1.6bn.`,
          decision: `Investors revolted and the deal was withdrawn within a day; several independent directors resigned. In January 2009 founder-chairman B. Ramalinga Raju confessed in a letter to the board that the accounts had been falsified for years, including thousands of crores of rupees of cash that did not exist.`,
          outcome: `The Indian government replaced the board, the company was sold to Tech Mahindra later in 2009, and Raju and others were convicted. The scandal accelerated governance reforms in India, reflected in the Companies Act 2013 (stronger rules on independent directors, audit committees and auditor rotation).`,
          lesson: `Independent directors who approve a related-party deal without hard questions fail their core duty. The market caught what the board missed.`
        },
        {
          type: 'formula', name: 'CEO pay ratio', expr: 'Pay ratio = CEO total annual compensation ÷ Median employee annual compensation',
          explain: `US listed companies have had to disclose this ratio since 2018, under rules from the Dodd-Frank Act; the UK requires similar disclosure for large listed companies. <b>Total compensation</b> includes salary, bonus, the grant-date value of shares and options, and benefits. The ratio says nothing about whether the CEO is worth it — but it shows how pay is distributed and invites the question.`,
          example: `CEO: salary $1.5m + bonus $2.5m + share awards $10m + other $0.5m = $14.5m. Median employee: $58,000. Ratio = 14,500,000 ÷ 58,000 = <b>250:1</b>. If the company reports record profits while freezing frontline pay and the CEO’s share awards vest on a one-year share-price target, a good board asks hard questions.`
        },
        {
          type: 'compare', title: 'Designing executive pay: what drives behaviour', headers: ['Element', 'Intended effect', 'Risk if badly designed', 'Better practice'],
          rows: [
            ['Annual bonus', 'Hit this year’s goals', 'Short-termism, gaming of targets', 'Mix financial and non-financial goals; board discretion to reduce'],
            ['Stock options', 'Align with shareholders', 'Reward volatility and risk; options are “free upside”', 'Use sparingly; long vesting'],
            ['Performance shares (PSUs)', 'Reward multi-year performance', 'Targets set too low; metrics that can be manipulated (e.g. EPS via buybacks)', '3–5 year horizons; relative returns; quality metrics'],
            ['Clawbacks', 'Recover pay based on misstated results or misconduct', 'Never enforced', 'Mandatory for US listed companies after an accounting restatement under SEC rules adopted in 2022'],
            ['Say-on-pay vote', 'Shareholder voice on pay', 'Advisory votes ignored', 'Engage after significant “against” votes; the UK gives shareholders a binding vote on pay policy']
          ]
        },
        {
          type: 'timeline', title: 'Governance reforms, usually written after a scandal',
          items: [
            { label: '1992', desc: 'UK Cadbury Report: separate chair and CEO roles, independent directors, audit committees.' },
            { label: '2002', desc: 'US Sarbanes-Oxley Act after Enron and WorldCom: CEO/CFO certify accounts, stronger auditor independence, internal-control reporting.' },
            { label: '2010', desc: 'US Dodd-Frank Act: say-on-pay votes, pay-ratio disclosure, whistleblower awards.' },
            { label: '2013', desc: 'India’s Companies Act after Satyam; UK introduces binding shareholder votes on directors’ pay policy.' },
            { label: '2017–18', desc: 'India’s Kotak Committee recommendations on board independence and separating chair/MD roles in large listed firms; UK Corporate Governance Code update emphasising workforce voice.' },
            { label: '2022–23', desc: 'SEC requires listed companies to adopt and enforce clawback policies.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> You chair the remuneration committee. The CEO — capable, well liked and a personal friend — missed every target for the long-term share plan this year, so the award will lapse. Management proposes a special one-off “retention grant” of equal value, arguing a competitor is trying to hire the CEO. Several directors are inclined to agree. What do you do?`,
          options: [
            { text: 'Approve it — losing the CEO would hurt shareholders more than the grant costs.', feedback: 'Replacing a lapsed performance award with a no-strings grant tells everyone targets do not really matter. It also teaches the CEO that missing targets is costless — and investors often vote against exactly this.', good: false },
            { text: 'Decline the replacement grant; ask for evidence of the retention risk; if a grant is genuinely needed, make it performance-based with stretching multi-year targets, and disclose the reasoning to shareholders. Declare your friendship and consider whether you should step back from the decision.', feedback: 'Strong. You protect the integrity of pay-for-performance, test the claim rather than accepting it, and manage your own conflict of interest openly.', good: true },
            { text: 'Approve it but bury it in the footnotes of the annual report.', feedback: 'Hiding a controversial decision is a governance failure on top of a pay failure — and it will be found by proxy advisers and journalists.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Questions an accountable director asks',
          items: [
            'Am I truly independent — no money, friendship or favour that would make challenge awkward?',
            'Do I get raw information (internal audit, whistleblower reports, customer complaints), not just management slides?',
            'Does the board have the expertise to understand the company’s core technology and biggest risks?',
            'Is anyone on the board a designated sceptic in big decisions?',
            'Are there exceptions or waivers to policy being granted — and for whom?',
            'Does executive pay reward long-term, hard-to-fake outcomes, with enforceable clawbacks?',
            'When did the board last meet without management present?'
          ]
        }
      ],
      terms: [
        { term: 'Corporate governance', def: 'The system of rules, practices and people (boards, auditors, shareholders) that directs and controls a company and holds its leaders accountable.' },
        { term: 'Independent director', def: 'A board member with no material relationship with the company or its management that could compromise judgement.' },
        { term: 'Tone at the top', def: 'The ethical climate set by leaders’ words and, more importantly, by what they reward and tolerate.' },
        { term: 'Related-party transaction', def: 'A deal between the company and someone connected to its insiders (e.g. a founder’s family business). Needs strict, independent approval.' },
        { term: 'Say-on-pay', def: 'A shareholder vote on executive pay — advisory in the US, binding on pay policy in the UK.' },
        { term: 'Clawback', def: 'A policy allowing the company to recover pay already awarded, for example after a restatement or misconduct.' },
        { term: 'CEO pay ratio', def: 'CEO total compensation divided by the median employee’s; a required disclosure for US listed companies.' }
      ],
      quiz: [
        {
          q: 'A CEO’s total compensation is $9m and the median employee earns $45,000. What is the CEO pay ratio?',
          options: ['20:1', '200:1', '2,000:1', '450:1'],
          answer: 1,
          explain: '9,000,000 ÷ 45,000 = 200.'
        },
        {
          q: 'Which governance failure was central to Enron?',
          options: ['The board waived conflict-of-interest rules so the CFO could run partnerships dealing with the company', 'The company had no board', 'Shareholders voted against all directors', 'It was a private company with no auditor'],
          answer: 0,
          explain: 'The board approved Fastow’s conflicted partnerships by waiving the code of conduct — a textbook “exception for the powerful”.'
        },
        {
          q: 'Why are stock options sometimes criticised as an incentive?',
          options: ['They are illegal in most countries', 'They pay out even if the share price falls', 'They reward upside without equivalent downside, which can encourage excessive risk-taking', 'They always vest immediately'],
          answer: 2,
          explain: 'Options are valuable when prices rise but simply expire worthless if they fall, so they can reward volatility and risk.'
        },
        {
          q: 'Which law introduced CEO and CFO certification of financial statements in the US after Enron?',
          options: ['Dodd-Frank Act', 'Companies Act 2013', 'Cadbury Report', 'Sarbanes-Oxley Act'],
          answer: 3,
          explain: 'Sarbanes-Oxley (2002) required executives to certify accounts and strengthened internal controls and auditor independence.'
        },
        {
          q: 'At Satyam, what was the first visible governance red flag before the confession?',
          options: ['A proposed related-party acquisition of founder-family-linked companies approved by the board', 'A rise in the share price', 'A new CFO', 'A change of auditor'],
          answer: 0,
          explain: 'In December 2008 the board approved buying Maytas companies linked to the founder’s family — investors revolted within hours.'
        }
      ],
      challenge: {
        title: 'Review a CEO pay package',
        prompt: `You are a new independent director at a listed retailer (illustrative). The proposed CEO package: salary $1.2m; annual bonus up to 200% of salary, based 100% on same-year revenue growth; stock options worth $6m at grant, vesting fully after one year; no clawback. Median employee pay is $32,000. Last year the company grew revenue 12% but profit fell, partly due to heavy discounting, and staff turnover in stores rose sharply.<br><br>Calculate the maximum pay ratio, identify the design flaws, and propose a redesigned package of similar maximum value.`,
        hints: ['Maximum total = salary + max bonus + option value.', 'Ask what behaviour each element rewards — revenue at any cost?', 'Consider multi-year horizons, profit and quality metrics, people metrics and clawbacks.'],
        model: `<p><b>1. Maximum pay and ratio</b></p><ul><li>Salary $1.2m + max bonus (200% × $1.2m) $2.4m + options $6.0m = <b>$9.6m</b>.</li><li>Ratio = 9,600,000 ÷ 32,000 = <b>300:1</b>.</li></ul><p><b>2. Design flaws</b></p><ol><li><b>Bonus on revenue only</b> rewards growth at any cost — exactly last year’s pattern (revenue up 12%, profit down through discounting).</li><li><b>One-year option vesting</b> encourages short-term share-price moves, not lasting value.</li><li><b>No clawback</b>: nothing can be recovered if results are later restated or misconduct emerges.</li><li><b>No people or customer measures</b>, despite rising store turnover.</li></ol><p><b>3. Redesigned package (max ≈ $9.6m)</b></p><table><thead><tr><th>Element</th><th>Max value</th><th>Design</th></tr></thead><tbody><tr><td>Salary</td><td>$1.2m</td><td>Unchanged</td></tr><tr><td>Annual bonus</td><td>$2.4m</td><td>40% operating profit, 25% like-for-like sales, 20% customer satisfaction, 15% store staff retention; board discretion to reduce</td></tr><tr><td>Performance shares</td><td>$6.0m</td><td>3-year performance, 2-year holding period; 50% relative total shareholder return vs retail peers, 50% return on capital</td></tr><tr><td>Clawback & malus</td><td>—</td><td>Covers restatements and serious misconduct</td></tr></tbody></table><p><b>Recommendation</b>: approve only the redesigned package. The maximum is the same, so the CEO cannot claim a pay cut, but the incentives now reward profitable, sustainable growth. Explain the change in the remuneration report to win shareholder support in the say-on-pay vote.</p>`
      },
      takeaways: [
        'Boards fail through weak independence, poor information, missing expertise and exceptions for the powerful.',
        'Pay design is behaviour design: reward multi-year, hard-to-fake outcomes and enforce clawbacks.',
        'Most governance reforms are written after scandals — learn from them before yours.',
        'Directors must manage their own conflicts openly, including friendships.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'ethics-5',
      title: 'Technology and AI ethics: privacy, algorithmic bias and responsible AI',
      level: 'Advanced',
      minutes: 17,
      hook: `An algorithm can be accurate overall, legal in your market and still treat whole groups of people unfairly — and in 2026 your company will be held responsible for it, not the model.`,
      eli5: `Imagine a robot that picks your school’s football team by studying the last ten years of teams. If almost no girls were picked in the past, the robot “learns” that girls are not footballers and keeps leaving them out — not because it hates girls, but because it copied history. Tech ethics is about checking what the robot learned, being honest about how it decides, only using people’s information in ways they would expect, and keeping a human who can say “wait, that’s not fair”.`,
      blocks: [
        {
          type: 'text', title: 'Beyond compliance: the ethics layer',
          html: `<p>You met data-privacy law (GDPR, India’s DPDP Act, CCPA) in <b>Legal</b> and AI governance and the EU AI Act in <b>Technology</b>. Here we go one level up: the ethical choices that the law does not settle for you.</p><ul><li><b>Privacy</b> is not only “did they click accept?” but “would they be surprised or upset by this use?” — often called <i>contextual integrity</i>.</li><li><b>Fairness</b> has several mathematical definitions that can conflict; choosing one is an ethical decision, not a technical detail.</li><li><b>Accountability</b> means a named human owns the outcome. “The algorithm decided” is not an answer a regulator, court or customer accepts.</li></ul>`
        },
        {
          type: 'framework', name: 'Responsible AI principles in practice', by: 'Common core of the OECD AI Principles (2019), NIST AI Risk Management Framework (2023) and company frameworks', when: 'Before building or buying any system that makes or shapes decisions about people.',
          steps: [
            { label: 'Fairness', desc: 'Test performance and outcomes by group (gender, age, ethnicity, disability, region). Decide which fairness definition matters for this use and why.' },
            { label: 'Transparency & explainability', desc: 'People should know when AI is involved and get a meaningful reason for decisions that affect them (a loan refusal, a job rejection).' },
            { label: 'Privacy & data minimisation', desc: 'Collect only what you need; use it only for purposes people would reasonably expect; protect it.' },
            { label: 'Safety & robustness', desc: 'Test for failure modes, misuse and adversarial attacks; monitor performance drift after launch.' },
            { label: 'Human oversight', desc: 'Keep a human able to review, override and stop the system — especially for high-stakes decisions.' },
            { label: 'Accountability', desc: 'Name an owner, document decisions, provide a route for people to challenge outcomes, and audit regularly.' }
          ]
        },
        {
          type: 'case', company: 'Facebook / Cambridge Analytica', year: '2014–2019', title: 'When “consent” was not enough',
          situation: `A researcher’s personality-quiz app on Facebook collected data not only from users who installed it but, through Facebook’s then-permitted friend permissions, from their friends. The data was passed to political consultancy Cambridge Analytica.`,
          decision: `Facebook learned of the data transfer in 2015 and asked for the data to be deleted, but did not verify deletion or tell affected users at the time.`,
          outcome: `When the story broke in March 2018, Facebook said data of up to 87 million people may have been shared. CEO Mark Zuckerberg testified before the US Congress; the US FTC imposed a $5bn penalty in 2019 for privacy violations, along with new oversight requirements.`,
          lesson: `Technically “permitted” data flows can still violate users’ reasonable expectations. Failing to tell people promptly turned a data problem into a trust crisis.`
        },
        {
          type: 'case', company: 'COMPAS risk scores', year: '2016', title: 'Two fair definitions that cannot both hold',
          situation: `COMPAS is a commercial tool used in some US courts to estimate the risk that a defendant will reoffend. In 2016 ProPublica analysed scores in one Florida county.`,
          decision: `ProPublica reported that Black defendants who did not reoffend were more likely than white defendants to be wrongly labelled high-risk (unequal false-positive rates). The vendor responded that the scores were equally accurate for both groups at each score level (calibration).`,
          outcome: `Computer scientists then showed mathematically that when two groups have different underlying rates of the outcome, a score generally cannot be both calibrated and have equal error rates for both groups. Both sides were “right” under their own definition.`,
          lesson: `Fairness is a choice between definitions, with real people on each side of the trade-off. Leaders must decide it explicitly and explain it — not leave it to whoever wrote the code.`
        },
        {
          type: 'formula', name: 'Adverse-impact ratio (the four-fifths rule)', expr: 'Impact ratio = Selection rate of group A ÷ Selection rate of the most-selected group',
          explain: `Used in US employment guidance since 1978 as a rough screen: if a group’s selection rate is <b>below 80%</b> of the most-selected group’s rate, that is evidence of possible adverse impact worth investigating. It is a red flag, not a verdict — and it applies to AI screening tools as much as to human recruiters (New York City now requires bias audits of automated hiring tools).`,
          example: `An AI CV screener advances 150 of 500 male applicants (30%) and 72 of 400 female applicants (18%). Impact ratio = 18% ÷ 30% = <b>0.60</b> — well below 0.80. Pause the tool, investigate which features drive the gap, and fix or replace it before further use.`
        },
        {
          type: 'matrix', name: 'AI risk map: how much oversight?', xLabel: 'Human in the loop → Fully automated', yLabel: 'Impact on people: low → high (top)',
          cells: [
            { label: 'High impact, human decides', desc: 'AI assists a doctor, loan officer or recruiter. Watch for automation bias — humans rubber-stamping the machine. Train, audit overrides.' },
            { label: 'High impact, automated', desc: 'Automatic credit refusals, benefit fraud flags, content bans. Highest scrutiny: fairness testing, explanations, appeals, regular audits. Often “high-risk” under the EU AI Act.' },
            { label: 'Low impact, human decides', desc: 'Drafting emails, summarising notes. Light-touch: accuracy checks, data-leak rules.' },
            { label: 'Low impact, automated', desc: 'Product recommendations, spam filters. Monitor for drift and manipulation (dark patterns), but proportionate controls.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> Your growth team wants to train a sales-coaching AI on two years of recorded customer support calls. It would likely boost conversion. The privacy policy says recordings are used “to improve our services” — legal counsel thinks that probably covers it. Customers were never told their calls might train an AI, and some calls include health and money details. What do you recommend?`,
          options: [
            { text: 'Go ahead — the policy wording probably covers it and the commercial upside is real.', feedback: '“Probably legal” is not the same as “expected by customers”. Sensitive data used in a surprising way is exactly how trust crises start — and regulators have been increasingly sceptical of broad, vague consent.', good: false },
            { text: 'Proceed with safeguards: strip or redact sensitive details, use only calls from customers notified going forward (with an opt-out), document the purpose, and test the model for leaks of personal data before use.', feedback: 'Good. You capture much of the value while respecting reasonable expectations, minimising data and creating an audit trail. Transparency going forward turns a hidden practice into a disclosed one.', good: true },
            { text: 'Ban all use of customer data for AI permanently.', feedback: 'Over-correction. Responsible use is possible; a blanket ban gives up value and pushes teams toward shadow workarounds.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Responsible AI launch checklist',
          items: [
            'Named business owner accountable for outcomes (not just the data science team)',
            'Purpose and data sources documented; sensitive data minimised or excluded',
            'Performance and selection rates tested by relevant group; fairness definition chosen and justified',
            'Users told when AI is involved; meaningful explanation available for decisions about them',
            'Human review and override for high-impact decisions; overrides logged and analysed',
            'Channel for people to challenge a decision, with a response time',
            'Monitoring for drift, errors and misuse after launch; re-audit at least annually',
            'Checked against applicable law (e.g. EU AI Act risk tier, privacy law, anti-discrimination law)'
          ]
        }
      ],
      terms: [
        { term: 'Algorithmic bias', def: 'Systematic, unfair differences in how an algorithm treats groups, often learned from historical data or proxies.' },
        { term: 'Contextual integrity', def: 'The idea that a data use is appropriate when it matches the norms of the context in which the data was shared.' },
        { term: 'Calibration', def: 'A score is calibrated if people with the same score have the same actual outcome rate, regardless of group.' },
        { term: 'False-positive rate', def: 'The share of people who did not have the outcome but were flagged as if they would (e.g. wrongly labelled high-risk).' },
        { term: 'Adverse-impact ratio', def: 'A group’s selection rate divided by the highest group’s rate; below 0.8 is a common red flag.' },
        { term: 'Automation bias', def: 'The tendency of humans to over-trust and defer to automated recommendations.' },
        { term: 'Data minimisation', def: 'Collecting and keeping only the personal data that is necessary for a specific purpose.' }
      ],
      quiz: [
        {
          q: 'An AI hiring tool advances 90 of 300 applicants from group A (30%) and 60 of 300 from group B (20%). What is group B’s impact ratio, and does it pass the four-fifths rule?',
          options: ['0.67 — fails', '0.80 — passes', '1.5 — passes', '0.10 — fails'],
          answer: 0,
          explain: '20% ÷ 30% = 0.67, below 0.80 — a red flag for adverse impact requiring investigation.'
        },
        {
          q: 'What did the COMPAS debate reveal?',
          options: ['The tool used race directly as an input', 'When base rates differ between groups, calibration and equal error rates generally cannot both be achieved', 'Algorithms are always less biased than humans', 'Courts banned all risk tools'],
          answer: 1,
          explain: 'Researchers showed these fairness definitions conflict when base rates differ — so choosing one is an ethical decision.'
        },
        {
          q: 'Which situation calls for the HIGHEST level of AI oversight?',
          options: ['A spam filter', 'An assistant that drafts internal emails', 'Product recommendations on a shopping site', 'Fully automated refusal of loan applications'],
          answer: 3,
          explain: 'High impact on people plus full automation = highest risk: fairness tests, explanations, appeals and audits.'
        },
        {
          q: 'What was the core ethical failure in the Cambridge Analytica case?',
          options: ['Facebook sold its company', 'Friends of quiz-takers had their data collected and passed on without meaningful awareness, and users were not told promptly when Facebook learned of it', 'Users posted too much', 'The quiz was inaccurate'],
          answer: 1,
          explain: 'Data flowed in ways users would not have expected, and Facebook did not inform affected users when it learned of the transfer in 2015.'
        },
        {
          q: 'A loan officer approves 99% of the AI’s recommendations without reading the files. This illustrates…',
          options: ['Data minimisation', 'Calibration', 'Automation bias', 'Contextual integrity'],
          answer: 2,
          explain: 'Automation bias: a human “in the loop” who simply rubber-stamps provides little real oversight.'
        }
      ],
      challenge: {
        title: 'Audit the credit-limit algorithm',
        prompt: `You are Chief Risk Officer at a digital lender (illustrative). A new model sets credit limits automatically. Results for one month of applicants:<br><ul><li>Group A: 4,000 applicants, 2,400 approved; average approved limit $3,000; default rate after 12 months 4%.</li><li>Group B: 2,500 applicants, 1,000 approved; average approved limit $1,800; default rate after 12 months 4%.</li></ul>The data science team says “the model doesn’t use group membership, so it’s fair”. Calculate the approval rates and impact ratio, explain why the team’s argument is weak, and set out what you would do.`,
        hints: ['Approval rate = approved ÷ applicants.', 'Equal default rates among approved applicants suggest Group B may be held to a stricter bar than needed.', 'Proxies (postcode, device type, shopping patterns) can encode group membership.'],
        model: `<p><b>1. Numbers</b></p><ul><li>Group A approval rate = 2,400 ÷ 4,000 = <b>60%</b>.</li><li>Group B approval rate = 1,000 ÷ 2,500 = <b>40%</b>.</li><li>Impact ratio = 40% ÷ 60% = <b>0.67</b> — below the 0.80 red-flag line.</li><li>Limits: Group B approved customers receive 1,800 ÷ 3,000 = 60% of Group A’s average limit.</li></ul><p><b>2. Why “we don’t use group membership” is weak</b></p><ul><li><b>Proxies:</b> variables such as postcode, employer type or device can correlate strongly with group membership.</li><li><b>Equal default rates (4%)</b> among approved customers suggest Group B applicants who are approved perform as well as Group A — so the model may be setting an unnecessarily high bar for Group B, excluding creditworthy people.</li><li>“Fairness through unawareness” does not prevent disparate outcomes; regulators look at outcomes too.</li></ul><p><b>3. Actions</b></p><ol><li>Pause automatic decisions for borderline Group B applicants; route them to human review in the meantime.</li><li>Run feature-importance and proxy analysis; test a version without the strongest proxies and compare accuracy and approval rates.</li><li>Choose and document the fairness target with legal and compliance — e.g. similar approval rates among applicants with similar actual repayment risk.</li><li>Add explanations for refusals and an appeal route; monitor monthly by group; report to the board risk committee.</li></ol><p><b>Recommendation</b>: do not scale the model until the impact ratio is investigated and either justified by genuine risk differences or fixed. Better models often widen the creditworthy customer base — fairness here is also growth.</p>`
      },
      takeaways: [
        '“Legal” and “consented” do not settle whether a data use matches people’s reasonable expectations.',
        'Fairness has competing definitions; choosing one is a leadership decision to make explicitly.',
        'Test outcomes by group — the four-fifths ratio is a fast first screen.',
        'Match oversight to impact and automation; a rubber-stamping human is not oversight.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'ethics-6',
      title: 'Building an ethical culture and your personal ethics playbook',
      level: 'Advanced',
      minutes: 16,
      hook: `The test of a company’s ethics is not its code of conduct — it is what happens to the first person who says “I think this is wrong”.`,
      eli5: `A football team can have a rulebook pinned on the changing-room wall, but players learn the real rules by watching what the coach does: does the star player who cheats get benched, or protected? Does the kid who admits a mistake get praised, or laughed at? An ethical culture is a team where the real rules and the written rules are the same. And your personal playbook is deciding — before the big match — what you will and won’t do, so you are not making it up under pressure.`,
      blocks: [
        {
          type: 'text', title: 'Codes do not create culture — systems do',
          html: `<p>Enron had a detailed code of ethics. Wells Fargo had a values statement about doing what is right for customers. What employees actually followed were the <b>signals</b>: what got rewarded, who got promoted, what happened to those who spoke up.</p><p>Culture is “how we really do things here”. It shows in five places: <b>incentives</b> (what is paid for), <b>promotions</b> (who rises), <b>consequences</b> (whether stars are held to the same rules), <b>stories</b> (what leaders celebrate) and <b>speak-up</b> (whether bad news travels up safely).</p><p>Research by Amy Edmondson on psychological safety (which you met in <b>People</b>) shows that teams where people feel safe to raise concerns catch problems earlier. Ethics needs that same safety, plus courage.</p>`
        },
        {
          type: 'compare', title: 'Compliance-based vs values-based ethics programmes', headers: ['', 'Compliance-based', 'Values-based (integrity)'],
          rows: [
            ['Aim', 'Prevent illegal conduct', 'Enable responsible conduct'],
            ['Spirit', 'Rules, monitoring, penalties', 'Shared values, judgement, accountability'],
            ['Leader role', 'Enforcer — legal and compliance own it', 'Role model — line leaders own it'],
            ['Typical tools', 'Policies, sign-offs, audits, hotline', 'Plus: dilemma training, values in hiring and promotion, open discussion of grey zones'],
            ['Weakness alone', '“If it’s not forbidden, it’s fine”; box-ticking', 'Can become vague without enforcement'],
            ['Best practice', 'Both: clear rules for the bright lines, values and judgement for the grey zone', '(Lynn Sharp Paine’s “organisational integrity” argument, 1994)']
          ]
        },
        {
          type: 'framework', name: 'Elements of an effective ethics and speak-up system', by: 'Drawn from the US Sentencing Guidelines’ “effective compliance and ethics program” elements and the EU Whistleblower Directive', when: 'Designing or auditing an ethics programme.',
          steps: [
            { label: '1. Tone at the top — and in the middle', desc: 'Senior leaders talk about ethics, but middle managers are who employees watch daily. Train and hold them accountable.' },
            { label: '2. Clear standards', desc: 'A short, readable code with real examples of grey zones — not 60 pages of legalese.' },
            { label: '3. Multiple speak-up channels', desc: 'Manager, HR, ethics office, anonymous hotline, and a direct route to the board audit committee for senior-leader issues.' },
            { label: '4. Fair, fast investigation', desc: 'Independent of the accused’s chain of command, with feedback to the reporter on the outcome where possible.' },
            { label: '5. Zero tolerance for retaliation', desc: 'Retaliation is itself a serious offence. Track what happens to reporters a year later.' },
            { label: '6. Consistent consequences', desc: 'Star performers and senior people face the same rules. Nothing destroys a culture faster than protected stars.' },
            { label: '7. Incentives aligned', desc: 'Conduct gates in bonuses; values assessed in promotions.' },
            { label: '8. Measure and learn', desc: 'Report volumes, substantiation rates, time to close, employee surveys on whether people feel safe to speak.' }
          ]
        },
        {
          type: 'case', company: 'Johnson & Johnson', year: '1982', title: 'The Tylenol recall',
          situation: `Seven people in the Chicago area died after taking Extra-Strength Tylenol capsules that had been laced with cyanide — tampering that happened after the product left J&J’s factories. Tylenol was one of J&J’s most important brands.`,
          decision: `J&J’s leaders, pointing to the company’s Credo (written in 1943, which puts responsibility to patients and customers first, and shareholders last), pulled Tylenol capsules from shelves nationwide — around 31 million bottles — cooperated with authorities and the media, and warned the public not to use them.`,
          outcome: `The recall was very costly in the short term. J&J reintroduced Tylenol in new tamper-resistant packaging, and the brand recovered much of its market share. The episode helped drive industry-wide tamper-evident packaging and is still taught as a model of values-led crisis response.`,
          lesson: `A credo only matters when it decides a costly choice. Values written down in calm times made a fast, expensive, right decision possible under pressure.`
        },
        {
          type: 'flip', title: 'Your personal ethics tests',
          cards: [
            { front: 'The front-page test', back: 'Would you be comfortable if this decision appeared on the front page of tomorrow’s newspaper, read by your family and friends? (Warren Buffett put it this way to Salomon employees after the firm’s 1991 bond-trading scandal.)' },
            { front: 'The mirror test', back: 'Will I respect myself tomorrow morning if I do this?' },
            { front: 'The mentor test', back: 'Would I be comfortable explaining this, in full detail, to the person whose judgement I most admire?' },
            { front: 'The reversibility test', back: 'Would I think this was fair if it were done to me, or to someone I love?' },
            { front: 'The scale test', back: 'What if everyone in my position did this, every time?' },
            { front: 'The “future regret” test', back: 'In five years, which choice will I wish I had made?' }
          ]
        },
        {
          type: 'framework', name: 'Giving voice to your values', by: 'Based on Mary Gentile’s “Giving Voice to Values” approach', when: 'You already know what is right — the question is how to say it effectively.',
          steps: [
            { label: '1. Assume you will act', desc: 'Shift from “should I?” to “how will I?”. Most people know what is right; they lack a script.' },
            { label: '2. Anticipate the arguments', desc: 'List the reasons you will hear: “everyone does it”, “it’s immaterial”, “it’s not your call”. Prepare a response to each.' },
            { label: '3. Find your levers', desc: 'Frame in terms the listener cares about: risk, reputation, customer loyalty, long-term value. Offer an alternative, not only an objection.' },
            { label: '4. Recruit allies', desc: 'Who else shares the concern? A peer, a risk partner, a respected senior person.' },
            { label: '5. Practise the words', desc: 'Rehearse out loud. A calm, prepared sentence beats a perfect argument you never say.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `<b>Values conflict.</b> You have just become CEO of a 400-person company. In your first month, three separate employees tell you the top-performing sales director — who brings in a fifth of revenue and is loved by key clients — regularly bullies junior staff. Previous complaints were “handled informally”. Your CFO warns: “If we lose him, we miss the year.” What do you do?`,
          options: [
            { text: 'Have a quiet word with him and keep the complaints informal — the revenue risk is too large.', feedback: 'This is the “protected star” pattern — the fastest way to tell 400 people that the written values are fiction. Informal handling has already failed.', good: false },
            { text: 'Commission a prompt, independent investigation; protect the reporters; act on the findings whatever they are; meanwhile build relationships between other leaders and his key clients to reduce dependency.', feedback: 'Strong. You treat the complaints seriously and fairly (he is entitled to due process), signal that rules apply to stars, and manage the business risk instead of letting it decide the ethics.', good: true },
            { text: 'Fire him immediately to make an example.', feedback: 'Decisive, but skipping a fair investigation is unjust and legally risky. Consistent consequences need due process too.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Write your personal ethics playbook',
          items: [
            'My three non-negotiables (lines I will not cross for any job, boss or bonus):',
            'The front-page, mirror and mentor tests I will run before any grey-zone decision',
            'My “walk-away” savings buffer, so financial pressure never forces my hand',
            'Two people I can call for honest counsel when I face a dilemma',
            'The exact words I will use to raise a concern with my boss (practised out loud)',
            'How I will respond when someone reports a problem to me: thank them, protect them, follow up',
            'A yearly review: where did I compromise, and what would I do differently?'
          ]
        }
      ],
      terms: [
        { term: 'Ethical culture', def: 'The shared, often unwritten understanding of what is really rewarded, tolerated and punished in an organisation.' },
        { term: 'Speak-up system', def: 'The channels, investigation processes and protections that let people raise concerns safely and get them dealt with.' },
        { term: 'Retaliation', def: 'Any adverse treatment (demotion, exclusion, dismissal) of someone because they raised a concern in good faith.' },
        { term: 'Front-page test', def: 'Asking whether you would be comfortable seeing your decision reported on the front page of a newspaper, read by people you care about.' },
        { term: 'Values-based programme', def: 'An ethics approach that builds judgement and shared values alongside rules, owned by line leaders.' },
        { term: 'Credo', def: 'A short statement of beliefs and priorities; J&J’s 1943 Credo ranks customers first and shareholders last.' },
        { term: 'Substantiation rate', def: 'The share of investigated reports found to be true; very low rates may signal weak investigations or low trust.' }
      ],
      quiz: [
        {
          q: 'Which signal tells employees most clearly what a company’s real values are?',
          options: ['The length of the code of conduct', 'What happens to high performers who break the rules and to people who speak up', 'The values poster in reception', 'The CEO’s annual letter'],
          answer: 1,
          explain: 'Consequences for stars and treatment of reporters are the loudest cultural signals.'
        },
        {
          q: 'A 2,000-person company received 30 ethics reports last year; 9 were substantiated. What was the substantiation rate?',
          options: ['3%', '9%', '30%', '15%'],
          answer: 2,
          explain: '9 ÷ 30 = 30%.'
        },
        {
          q: 'Why did J&J’s 1982 Tylenol response become a model case?',
          options: ['It denied responsibility', 'It waited for the police to finish investigating before acting', 'Leaders used the company Credo to justify a fast, costly nationwide recall that put customer safety first', 'It sold the Tylenol brand'],
          answer: 2,
          explain: 'J&J recalled around 31 million bottles even though the tampering happened outside its factories, guided by its Credo.'
        },
        {
          q: 'What is the starting assumption of the “Giving Voice to Values” approach?',
          options: ['That you will act — the challenge is how to speak up effectively', 'That most people do not know right from wrong', 'That whistleblowing should always be external', 'That rules are unnecessary'],
          answer: 0,
          explain: 'It moves from “should I?” to “how will I?”, focusing on scripts, levers, allies and practice.'
        },
        {
          q: 'Which is the best measure that a speak-up system is NOT working?',
          options: ['Report volume rises after a new hotline launch', 'People who reported concerns tend to leave or be demoted within a year', 'Most reports are about minor issues', 'Investigations take two weeks'],
          answer: 1,
          explain: 'Patterns of departure or demotion after reporting suggest retaliation — which silences future reports. Rising volume early on is often a sign of growing trust.'
        }
      ],
      challenge: {
        title: 'Design a speak-up system for a scale-up',
        prompt: `You are the new Chief People Officer at a fast-growing logistics company (illustrative): 2,000 employees across 12 warehouses and an office. There is a hotline nobody uses (2 reports last year). An engagement survey shows only 35% agree “I can raise concerns without fear”. Last quarter a warehouse safety issue surfaced only after an injury, and staff later said “everyone knew”. Your budget for year one is $250,000.<br><br>Design the system, allocate the budget, set targets for year one, and explain what “success” looks like to the board.`,
        hints: ['Use the eight elements: tone, standards, channels, investigation, anti-retaliation, consequences, incentives, measurement.', 'Warehouse workers may not use email or a web form — think about language and access.', 'Expect report volumes to RISE if the system works.'],
        model: `<p><b>1. Diagnosis</b>: 2 reports among 2,000 people = 0.1 per 100 employees — far too low for a company this size to reflect reality; the injury proves concerns exist but do not travel. Only 35% feel safe to speak.</p><p><b>2. Design</b></p><ul><li><b>Channels:</b> multilingual phone and text-message hotline run by a third party; QR codes in every warehouse; a named “speak-up champion” in each site trained to receive concerns; direct route to the audit committee for senior-leader issues.</li><li><b>Standards:</b> a short code with warehouse-specific examples (safety shortcuts, overtime pressure, harassment).</li><li><b>Investigation:</b> a small central team independent of site managers; 30-day target to close; feedback to reporters.</li><li><b>Anti-retaliation:</b> policy with clear sanctions; check in with every reporter at 3 and 12 months.</li><li><b>Consequences and incentives:</b> site-manager bonuses include a safety and conduct gate; promotions consider survey results from their teams.</li><li><b>Tone:</b> CEO and site managers share real examples of concerns raised and fixed (anonymised) every quarter.</li></ul><p><b>3. Budget ($250,000)</b></p><table><thead><tr><th>Item</th><th>Cost</th></tr></thead><tbody><tr><td>Third-party multilingual hotline and case system</td><td>$40,000</td></tr><tr><td>Investigator (1 FTE) and external specialist support</td><td>$110,000</td></tr><tr><td>Training: 13 site leaders, 25 champions, all managers</td><td>$60,000</td></tr><tr><td>Communication materials, QR signage, translation</td><td>$20,000</td></tr><tr><td>Pulse surveys and analytics</td><td>$20,000</td></tr><tr><td><b>Total</b></td><td><b>$250,000</b></td></tr></tbody></table><p><b>4. Year-one targets</b>: reports rise to roughly 1–2 per 100 employees (20–40 reports); 90% of cases closed within 30 days; no substantiated retaliation; “safe to raise concerns” from 35% to 55%; zero serious safety issues that “everyone knew about” beforehand.</p><p><b>5. Message to the board</b>: “Success in year one looks like <i>more</i> reports, not fewer. We are buying early warning — the cheapest form of risk management we have.”</p>`
      },
      takeaways: [
        'Culture is set by incentives, promotions, consequences and how speak-up is treated — not by the code.',
        'Combine clear rules for bright lines with values and judgement for the grey zone.',
        'Protect reporters and hold stars to the same rules; both are non-negotiable signals.',
        'Write your personal playbook — non-negotiables, tests, allies and words — before you need it.'
      ]
    }
  ]
});
