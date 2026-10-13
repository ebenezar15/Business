/* MBA Studio — Track 19: Data, Statistics & Decision Analysis */
MBA.addTrack({
  id: 'data-decisions',
  stage: 3,
  order: 19,
  title: 'Data, Statistics & Decision Analysis',
  icon: '📊',
  color: '#7c3aed',
  tagline: 'Turn uncertainty into better decisions',
  summary: `Learn the quantitative toolkit managers use when the future is uncertain. You will reason with probabilities and expected value, read distributions and confidence intervals, judge whether a result is real or noise, build and interpret regressions, forecast demand, value information with decision trees, and finish with simulation and optimisation.`,
  outcomes: [
    'Use probability, conditional probability and expected value to compare risky options',
    'Read distributions, standard errors and confidence intervals without being fooled by noise',
    'Run and interpret hypothesis tests and tell statistical from practical significance',
    'Build, read and challenge a regression — and explain why correlation is not causation',
    'Forecast demand with moving averages, exponential smoothing and seasonality, and measure error',
    'Structure decisions with trees, value information, and use Monte Carlo and linear programming'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'data-decisions-1',
      title: 'Probability and expected value for managers',
      level: 'Beginner',
      minutes: 14,
      hook: `Every big decision is a bet — the managers who win over time are not luckier, they simply price the odds better.`,
      eli5: `Imagine a bag with 3 red marbles and 7 blue ones. If you pull one without looking, you have a 3-in-10 chance of red. Now imagine a game: red wins you $10, blue loses you $2. Play it many times and on average you win 0.3 × $10 − 0.7 × $2 = $1.60 per go. That average is the <b>expected value</b>. Business is full of bags of marbles — product launches, sales deals, hires — and probability is how you count the marbles before you pull.`,
      blocks: [
        {
          type: 'text', title: 'Why managers need probability',
          html: `<p>You met expected value briefly in the C-Suite track as a decision shortcut. Here we go further: how to <b>build</b> the probabilities in the first place, how to combine them, and how to update them when new evidence arrives.</p><p>A probability is a number between 0 (impossible) and 1 (certain). In business it rarely comes from a textbook coin — it comes from <b>base rates</b> (how often has this happened before?), <b>data</b>, and <b>expert judgement</b>, ideally all three.</p>`
        },
        {
          type: 'framework', name: 'Five probability rules every manager uses', by: 'Standard probability theory', when: 'Whenever you combine several uncertain events into one plan',
          steps: [
            { label: '1. Complement', desc: 'P(not A) = 1 − P(A). If a deal has a 30% chance of closing, it has a 70% chance of not closing.' },
            { label: '2. AND (independent events)', desc: 'P(A and B) = P(A) × P(B). A plan that needs three independent 90% steps succeeds only 0.9 × 0.9 × 0.9 ≈ 73% of the time.' },
            { label: '3. OR (mutually exclusive)', desc: 'P(A or B) = P(A) + P(B) when they cannot both happen. For overlapping events subtract the overlap: P(A) + P(B) − P(A and B).' },
            { label: '4. At least one', desc: 'P(at least one success) = 1 − P(all fail). Three pitches at 20% each: 1 − 0.8³ ≈ 49%.' },
            { label: '5. Conditional probability', desc: 'P(A | B) means "the probability of A given that B happened". It is the engine of learning from evidence and of Bayes’ rule.' }
          ]
        },
        {
          type: 'formula', name: 'Expected value (EV)',
          expr: 'EV = Σ (probability of outcome × value of outcome)',
          explain: `List every outcome that matters, give each a probability (they must add up to 1) and a value (profit, cost, NPV). Multiply and add. EV is the long-run average result if you could repeat the bet many times.`,
          example: `A product launch: 30% chance of a hit (+$10M), 50% a modest success (+$2M), 20% a flop (−$4M). EV = 0.3 × 10 + 0.5 × 2 + 0.2 × (−4) = 3 + 1 − 0.8 = <b>+$3.2M</b>. Positive, so worth doing — if the company can survive the flop.`
        },
        {
          type: 'formula', name: 'Bayes’ rule (updating on evidence)',
          expr: 'P(A | B) = P(B | A) × P(A) ÷ P(B)',
          explain: `Start with a <b>prior</b> P(A) — the base rate. Multiply by how likely the evidence is if A is true. Divide by how likely the evidence is overall. The result is the <b>posterior</b>: your updated belief.`,
          example: `1% of transactions are fraud. A detector flags 90% of frauds but also wrongly flags 5% of honest transactions. Of 10,000 transactions: 100 are fraud, 90 flagged; 9,900 honest, 495 flagged. P(fraud | flagged) = 90 ÷ (90 + 495) ≈ <b>15%</b>. Most flags are false alarms — because fraud is rare.`
        },
        {
          type: 'case', company: 'Statistical Research Group (Abraham Wald)', year: '1943', title: 'Where to armour the bombers',
          situation: `During the Second World War, the US military studied bombers returning from missions and recorded where they had bullet holes. Holes clustered on the wings and fuselage; engines showed few. The instinct was to add armour where the holes were.`,
          decision: `Statistician Abraham Wald, working with Columbia University’s Statistical Research Group, pointed out that the sample only contained planes that <b>survived</b>. Planes hit in the engines mostly did not come back to be counted.`,
          outcome: `His analysis recommended protecting the areas where returning planes showed the <b>fewest</b> holes. The story has become the textbook illustration of <b>survivorship bias</b>.`,
          lesson: `Always ask: what is the probability of this data <i>given</i> how it was collected? Studying only successful start-ups, surviving funds or retained customers produces the same trap.`
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: "It has a 70% chance, so it will happen"',
          html: `<p>A 70% event fails 3 times in 10. Judge a decision by the <b>quality of the reasoning and information</b> at the time, not only by the outcome. Poker players call confusing the two "resulting".</p>`
        },
        {
          type: 'scenario',
          prompt: `A new screening test for a rare equipment defect (present in 2% of units) is 95% accurate at catching defects, with a 10% false-positive rate. A unit tests positive. Your plant manager wants to scrap it immediately ($8,000 unit). What do you do?`,
          options: [
            { text: 'Scrap it — the test is 95% accurate.', feedback: 'This ignores the base rate. Only about 16% of positives are real defects (0.019 ÷ (0.019 + 0.098)), so you would scrap mostly good units.', good: false },
            { text: 'Send positives for a cheaper second, independent inspection before scrapping.', feedback: 'Right. A positive raises the probability from 2% to about 16%, which justifies a second look, not a write-off. A second independent test would update the odds again.', good: true },
            { text: 'Ignore the test — it is clearly unreliable.', feedback: 'Too far. The test is informative: it raises the risk eight-fold. Use it as a filter, not a verdict.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Probability', def: 'A number from 0 to 1 expressing how likely an event is.' },
        { term: 'Base rate', def: 'How often something happens in the relevant population before you look at specific evidence.' },
        { term: 'Expected value', def: 'The probability-weighted average of all outcomes; the long-run average if the bet were repeated.' },
        { term: 'Conditional probability', def: 'The probability of one event given that another has occurred, written P(A | B).' },
        { term: 'Bayes’ rule', def: 'The formula for updating a prior belief into a posterior belief after seeing evidence.' },
        { term: 'Survivorship bias', def: 'Drawing conclusions from the cases that survived a filter while ignoring those that did not.' },
        { term: 'Independence', def: 'Two events are independent if knowing one happened does not change the probability of the other.' }
      ],
      quiz: [
        { q: 'A launch plan needs two independent approvals, each with a 90% chance. What is the probability both happen?', options: ['90%', '81%', '99%', '180%'], answer: 1, explain: 'Independent AND: 0.9 × 0.9 = 0.81.' },
        { q: 'Bidding for a contract costs $20,000. You have a 25% chance of winning, and a win is worth $200,000 profit. What is the net expected value of bidding?', options: ['+$30,000', '+$50,000', '−$20,000', '+$180,000'], answer: 0, explain: 'EV = 0.25 × $200,000 − $20,000 = $50,000 − $20,000 = +$30,000.' },
        { q: '2% of units are defective. A test catches 95% of defects and falsely flags 10% of good units. Roughly what share of flagged units are truly defective?', options: ['95%', '90%', '50%', 'About 16%'], answer: 3, explain: 'True positives 0.02 × 0.95 = 0.019; false positives 0.98 × 0.10 = 0.098. 0.019 ÷ 0.117 ≈ 16%.' },
        { q: 'You pitch three independent investors, each with a 20% chance of saying yes. What is the chance at least one says yes?', options: ['60%', '20%', 'About 49%', '0.8%'], answer: 2, explain: '1 − (0.8 × 0.8 × 0.8) = 1 − 0.512 = 0.488 ≈ 49%.' },
        { q: 'A study of "habits of billionaire founders" interviews only billionaires. The main flaw is…', options: ['Small sample size', 'Survivorship bias', 'Too much data', 'Rounding error'], answer: 1, explain: 'Many people with the same habits failed and were never interviewed — the sample is filtered on success.' }
      ],
      challenge: {
        title: 'Which pilot should we fund?',
        prompt: `You have budget for one pilot. <b>Pilot A</b> (new enterprise product): 25% chance of +$12M NPV, 45% chance of +$2M, 30% chance of −$3M. <b>Pilot B</b> (expansion of an existing line): 70% chance of +$3M, 30% chance of +$0.5M. The company has $40M of cash and a board that hates surprises. Calculate the EV of each, describe the spread of outcomes, and recommend.`,
        hints: ['Multiply each probability by its value and add.', 'Look at the worst case as well as the average.', 'Can the company absorb the worst case of A?'],
        model: `<p><b>Pilot A EV</b> = 0.25 × 12 + 0.45 × 2 + 0.30 × (−3) = 3.0 + 0.9 − 0.9 = <b>+$3.0M</b>.</p><p><b>Pilot B EV</b> = 0.70 × 3 + 0.30 × 0.5 = 2.1 + 0.15 = <b>+$2.25M</b>.</p><table><thead><tr><th></th><th>Pilot A</th><th>Pilot B</th></tr></thead><tbody><tr><td>Expected value</td><td>$3.0M</td><td>$2.25M</td></tr><tr><td>Best case</td><td>+$12M</td><td>+$3M</td></tr><tr><td>Worst case</td><td>−$3M (30% chance)</td><td>+$0.5M</td></tr></tbody></table><p><b>Reading it:</b> A has the higher EV (+$0.75M) but a 30% chance of a loss; B never loses money. A $3M loss is under 10% of the $40M cash pile, so it does not threaten survival.</p><p><b>Recommendation:</b> fund <b>Pilot A</b> on expected value, because the downside is affordable — but present it to the board as a portfolio bet, with the outcome range, and set a stage-gate after 6 months to cut the loss early if signals point to the −$3M branch. If the board’s risk tolerance is genuinely low, B is a defensible second choice; the board should know it costs about $0.75M of expected value.</p>`
      },
      takeaways: [
        'Expected value = Σ probability × value; use it, but always look at the worst case too.',
        'Chained plans fail more than intuition suggests: multiply the probabilities.',
        'Rare events + imperfect tests = mostly false alarms. Respect the base rate.',
        'Ask how your data was filtered before trusting it (survivorship bias).'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'data-decisions-2',
      title: 'Distributions, variance and the normal curve',
      level: 'Beginner',
      minutes: 15,
      hook: `An average without a spread is half a fact — and a sample without a confidence interval is a guess wearing a suit.`,
      eli5: `Line up everyone in your class by height. Most are near the middle, a few are very short or very tall — that bell shape is a <b>normal distribution</b>. The <b>average</b> tells you the middle; the <b>standard deviation</b> tells you how spread out the line is. If you only measure 5 classmates, your average could be a bit off. Measure 50 and you get much closer. Statistics tells you exactly <i>how</i> close.`,
      blocks: [
        {
          type: 'text', title: 'Centre and spread',
          html: `<p>Every set of numbers has a <b>centre</b> (mean, median) and a <b>spread</b> (range, variance, standard deviation).</p><ul><li><b>Mean</b>: the arithmetic average. Pulled around by extreme values.</li><li><b>Median</b>: the middle value. Better for skewed data like incomes, deal sizes or house prices.</li><li><b>Variance</b>: the average squared distance from the mean.</li><li><b>Standard deviation (σ or s)</b>: the square root of variance, in the same units as the data. "Delivery takes 3 days ± 1 day" is a mean and a standard deviation.</li></ul>`
        },
        {
          type: 'compare', title: 'Distributions you meet in business', headers: ['', 'Shape', 'Where you see it', 'Watch out'],
          rows: [
            ['Normal', 'Symmetric bell', 'Measurement errors, heights, many averages', 'Underestimates extreme events'],
            ['Right-skewed', 'Long tail to the right', 'Incomes, order values, deal sizes, time-to-close', 'Mean > median; report both'],
            ['Power law / fat tail', 'A few huge values dominate', 'Film box office, VC returns, app downloads', 'The average is driven by rare giants'],
            ['Binomial', 'Counts of yes/no outcomes', 'Conversions, defects, clicks', 'Needs independent trials'],
            ['Poisson', 'Counts of events per period', 'Calls per hour, arrivals, claims', 'Variance ≈ mean']
          ]
        },
        {
          type: 'framework', name: 'The 68–95–99.7 rule', by: 'Property of the normal distribution', when: 'Quickly judging whether a value is ordinary or unusual',
          steps: [
            { label: '±1 standard deviation', desc: 'About 68% of values fall within one σ of the mean.' },
            { label: '±2 standard deviations', desc: 'About 95% fall within two σ (precisely 1.96σ).' },
            { label: '±3 standard deviations', desc: 'About 99.7% fall within three σ. Six Sigma quality (Operations track) pushes defects far beyond this.' },
            { label: 'z-score', desc: 'z = (value − mean) ÷ σ tells you how many standard deviations away something is. |z| above 2 is unusual; above 3 is rare.' }
          ]
        },
        {
          type: 'formula', name: 'Standard error and the 95% confidence interval',
          expr: 'SE = s ÷ √n     95% CI = sample mean ± 1.96 × SE',
          explain: `A sample mean wobbles from sample to sample. The <b>standard error</b> measures that wobble. Because of the <b>central limit theorem</b>, averages of reasonably large samples are roughly normal even when the underlying data are not. A 95% confidence interval is a range built so that, across many repeated samples, 95% of such ranges would contain the true value.`,
          example: `You survey 100 customers: average spend $50, standard deviation $20. SE = 20 ÷ √100 = $2. 95% CI = 50 ± 1.96 × 2 = 50 ± 3.92 → <b>$46.08 to $53.92</b>. To halve the interval to ±$1.96 you need 4× the sample: 400 customers.`
        },
        {
          type: 'case', company: 'The Literary Digest', year: '1936', title: 'A huge sample, a wrong answer',
          situation: `The Literary Digest magazine polled voters for the 1936 US presidential election by mail, using lists such as its own subscribers, telephone directories and car registrations. It received over two million replies.`,
          decision: `On that enormous sample it predicted that Alf Landon would defeat Franklin D. Roosevelt.`,
          outcome: `Roosevelt won in one of the biggest landslides in US history. George Gallup, using a much smaller but more representative sample, called the result correctly. The magazine folded soon afterwards.`,
          lesson: `Standard error only measures <b>random</b> sampling noise. It says nothing about <b>bias</b> in who gets sampled or who replies. A biased sample of two million is worse than a representative sample of two thousand.`
        },
        {
          type: 'callout', kind: 'tip', title: 'Variance is a cost',
          html: `<p>In operations, variance costs money even when the average is fine. A supplier averaging 5-day delivery with σ = 3 days forces you to hold far more safety stock than one averaging 6 days with σ = 0.5 days. Ask for the spread, not just the average.</p>`
        },
        {
          type: 'flip', title: 'Test yourself',
          cards: [
            { front: 'Mean $80k, median $55k. What shape?', back: 'Right-skewed: a few large values pull the mean above the median.' },
            { front: 'What happens to SE if you quadruple the sample?', back: 'It halves, because SE = s ÷ √n and √4 = 2.' },
            { front: 'Does a 95% CI mean a 95% chance the true value is inside?', back: 'Strictly, no: 95% of intervals built this way capture the truth. In practice managers read it as a plausible range.' },
            { front: 'Central limit theorem in one line', back: 'Averages of large-enough random samples are approximately normal, whatever the shape of the original data.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Store A’s weekly sales average $100k with σ = $10k. This week it sold $78k. Your regional VP wants to put the store manager on a performance plan. What do you say?`,
          options: [
            { text: 'Agree — sales were 22% below average.', feedback: 'Percentages hide the spread. You need to know how unusual $78k is relative to normal week-to-week variation.', good: false },
            { text: 'Compute z = (78 − 100) ÷ 10 = −2.2: unusual, so investigate causes (weather, stock-outs, local events) before judging the manager.', feedback: 'Right. A week beyond 2σ deserves a look, but one data point is not a verdict. Check for special causes, then watch the next weeks.', good: true },
            { text: 'Ignore it — sales always vary.', feedback: 'At more than 2 standard deviations below normal, this is unlikely to be routine noise. Investigate.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Standard deviation', def: 'A measure of how spread out values are around the mean, in the same units as the data.' },
        { term: 'Median', def: 'The middle value when data are sorted; robust to extreme values.' },
        { term: 'Normal distribution', def: 'The symmetric bell-shaped distribution described by a mean and a standard deviation.' },
        { term: 'z-score', def: 'How many standard deviations a value lies from the mean.' },
        { term: 'Standard error', def: 'The standard deviation of a sample statistic, such as a sample mean; s ÷ √n for a mean.' },
        { term: 'Confidence interval', def: 'A range around an estimate built so that a stated share of such ranges contain the true value.' },
        { term: 'Sampling bias', def: 'A systematic difference between who is sampled and the population you care about.' }
      ],
      quiz: [
        { q: 'A sample of 400 orders has standard deviation $40. What is the standard error of the mean?', options: ['$10', '$0.10', '$2', '$40'], answer: 2, explain: 'SE = 40 ÷ √400 = 40 ÷ 20 = $2.' },
        { q: 'Sample mean $50, SE $2. What is the approximate 95% confidence interval?', options: ['$46.08 to $53.92', '$48 to $52', '$30 to $70', '$44 to $56'], answer: 0, explain: '50 ± 1.96 × 2 = 50 ± 3.92.' },
        { q: 'IQ-style scores have mean 100 and σ 15. What is the z-score of 130?', options: ['1.3', '30', '0.5', '2'], answer: 3, explain: '(130 − 100) ÷ 15 = 2.' },
        { q: 'Roughly what share of normally distributed values lie within one standard deviation of the mean?', options: ['50%', '68%', '95%', '99.7%'], answer: 1, explain: 'The 68–95–99.7 rule.' },
        { q: 'Why did the 1936 Literary Digest poll fail despite two million replies?', options: ['The sample was too small', 'The standard error was too large', 'Its sample was biased, which a bigger sample cannot fix', 'Polls cannot predict elections'], answer: 2, explain: 'Bias is systematic; sample size only shrinks random error.' }
      ],
      challenge: {
        title: 'How many customers do we need to survey?',
        prompt: `Your pricing team wants to estimate average monthly spend of a new segment. A pilot of 25 customers shows mean $120, standard deviation $50. The CFO wants the 95% confidence interval to be no wider than ±$5 before setting prices. (a) What is the current 95% CI? (b) Roughly what sample size meets the CFO’s target? (c) What else must be true for the estimate to be trusted?`,
        hints: ['SE = s ÷ √n, CI half-width = 1.96 × SE.', 'Solve 1.96 × 50 ÷ √n ≤ 5 for n.', 'Think about who answers the survey.'],
        model: `<p><b>(a) Current CI.</b> SE = 50 ÷ √25 = 10. Half-width = 1.96 × 10 = 19.6. CI ≈ <b>$100.40 to $139.60</b> — too wide for pricing. (With only 25 customers a t-value of about 2.06 is slightly more exact, giving ±$20.6; the conclusion is the same.)</p><p><b>(b) Sample size.</b> Need 1.96 × 50 ÷ √n ≤ 5 → √n ≥ 19.6 → n ≥ 384.2 → <b>about 385 customers</b>.</p><p><b>(c) Conditions.</b></p><ul><li>The sample must be <b>representative</b>: random from the segment, not just the keenest users who answer emails (Literary Digest problem).</li><li>Spend is probably right-skewed — report the <b>median</b> too, and check for a few huge accounts dominating.</li><li>Measure actual spend from billing data where possible rather than self-reported spend.</li></ul><p><b>Recommendation:</b> extend the pilot to ~400 randomly selected customers from billing records, report mean, median and CI, then price.</p>`
      },
      takeaways: [
        'Always report a spread with an average; use the median for skewed data.',
        'Standard error shrinks with √n: four times the data halves the uncertainty.',
        'A 95% CI ≈ estimate ± 2 standard errors.',
        'Big biased samples are worse than small representative ones.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'data-decisions-3',
      title: 'Hypothesis tests and significance in business',
      level: 'Intermediate',
      minutes: 16,
      hook: `Half of what your dashboards call "trends" is noise — hypothesis testing is the discipline of not reacting to it.`,
      eli5: `Your friend says their coin is lucky and always lands heads. You flip it 3 times: heads, heads, heads. Lucky coin? A normal coin does that 1 time in 8 — not that rare. Flip it 20 times and get 18 heads? A normal coin almost never does that. A <b>hypothesis test</b> asks: "If nothing special were going on, how surprising is what I saw?" If it is very surprising, you start believing something special is going on.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than A/B tests',
          html: `<p>In the Technology track you ran A/B tests and met "statistical significance". Here we open the box: what a test actually computes, what a p-value does and does not mean, and the two ways you can be wrong.</p><p>Every test starts with a <b>null hypothesis (H₀)</b> — "no effect, no difference" — and an <b>alternative (H₁)</b>. You then ask how likely data at least as extreme as yours would be <i>if H₀ were true</i>. That probability is the <b>p-value</b>.</p>`
        },
        {
          type: 'framework', name: 'The five-step test', by: 'Classical (Neyman–Pearson / Fisher) testing', when: 'Before claiming any change "worked"',
          steps: [
            { label: '1. State H₀ and H₁', desc: 'H₀: the new training does not change average sales. H₁: it does. Write it before you see the data.' },
            { label: '2. Choose α', desc: 'The false-alarm rate you accept, usually 5% (α = 0.05). Stricter (1%) when a wrong "yes" is expensive.' },
            { label: '3. Compute the test statistic', desc: 'Usually (observed effect − effect under H₀) ÷ standard error. It measures the signal in units of noise.' },
            { label: '4. Get the p-value', desc: 'The probability of a statistic at least this extreme if H₀ were true. Small p = data hard to explain by chance alone.' },
            { label: '5. Decide and size the effect', desc: 'If p < α, reject H₀. Then ask the business question: is the effect big enough to matter, and what is its confidence interval?' }
          ]
        },
        {
          type: 'formula', name: 'One-sample t-statistic (intuition)',
          expr: 't = (sample mean − hypothesised mean) ÷ (s ÷ √n)',
          explain: `The numerator is the signal; the denominator (the standard error) is the noise. A |t| of about 2 or more is significant at the 5% level for reasonable sample sizes. The "t" comes from the Student’s t distribution, which allows for the extra uncertainty of estimating s from small samples.`,
          example: `Reps historically sell 50 units a month. After new training, 64 reps average 52.5 with s = 8. SE = 8 ÷ √64 = 1. t = (52.5 − 50) ÷ 1 = <b>2.5</b>, p ≈ 0.015. Reject H₀: the training very probably helps. The 95% CI for the new mean is about 50.5 to 54.5.`
        },
        {
          type: 'matrix', name: 'The two ways to be wrong', xLabel: 'What is actually true →', yLabel: 'What you decide →',
          cells: [
            { label: 'Type I error (false positive)', desc: 'You declare an effect that is not there. Probability = α. Example: rolling out a "winning" checkout that was just noise.' },
            { label: 'Correct: true positive', desc: 'You detect a real effect. Probability = power (1 − β). Aim for 80% or more when designing tests.' },
            { label: 'Correct: true negative', desc: 'No effect, and you rightly say so.' },
            { label: 'Type II error (false negative)', desc: 'A real effect exists but your test misses it (probability β). Usually caused by too small a sample. You kill a good idea.' }
          ]
        },
        {
          type: 'case', company: 'Guinness (William Sealy Gosset)', year: '1908', title: 'The brewer who invented the t-test',
          situation: `Guinness hired scientifically trained brewers in Dublin to improve the consistency of barley, hops and beer. William Sealy Gosset kept running into a problem: experiments with only a handful of samples did not behave like the large-sample theory of the time predicted.`,
          decision: `He worked out the distribution of the mean for small samples. Guinness did not want staff publishing under their own names, so in 1908 he published the result under the pen name "Student".`,
          outcome: `"Student’s t-test" became one of the most used tools in science and business, from drug trials to marketing experiments.`,
          lesson: `Hypothesis testing was born in industry to answer a business question — is this batch really different, or is it noise? — on small, expensive samples.`
        },
        {
          type: 'interactive', widget: 'ab-test', title: 'Significance in action', note: 'Enter 10,000 visitors per arm with 4.0% vs 4.6% conversion (z ≈ 2.1, p ≈ 0.04). Then keep the rates and cut the traffic to 2,000 per arm: same lift, no longer significant — a Type II risk.'
        },
        {
          type: 'callout', kind: 'warning', title: 'Statistical vs practical significance, and the p-hacking trap',
          html: `<ul><li><b>Significant ≠ important.</b> With 10 million users, a 0.01% lift can have p &lt; 0.001 and still not pay for the engineering. Always report the effect size and its confidence interval.</li><li><b>Not significant ≠ no effect.</b> A small test may simply lack power.</li><li><b>Multiple comparisons.</b> Test 20 metrics at α = 0.05 and the chance of at least one false positive is 1 − 0.95²⁰ ≈ 64%. Pre-register one primary metric, or tighten α (e.g. Bonferroni: α ÷ number of tests).</li><li><b>The p-value is not</b> the probability that H₀ is true. In 2016 the American Statistical Association issued a formal statement warning against exactly these misreadings.</li></ul>`
        },
        {
          type: 'scenario',
          prompt: `Your marketing team tested 12 new email subject lines against the current one. One shows a lift with p = 0.04; the other 11 show nothing. They want to switch all campaigns to the winner. What do you do?`,
          options: [
            { text: 'Switch — p is below 0.05.', feedback: 'With 12 comparisons, about a 46% chance exists (1 − 0.95¹²) that at least one looks significant by luck alone.', good: false },
            { text: 'Treat it as a promising lead: re-test the winner alone against control with a fresh sample, and check the size of the lift.', feedback: 'Right. A confirmation test removes the multiple-comparison problem and tells you if the effect is practically meaningful.', good: true },
            { text: 'Abandon testing — the results are inconclusive.', feedback: 'There is a possible signal worth one clean confirmation test.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Null hypothesis', def: 'The default assumption of no effect or no difference that a test tries to reject.' },
        { term: 'p-value', def: 'The probability of data at least as extreme as observed if the null hypothesis were true.' },
        { term: 'Significance level (α)', def: 'The false-positive rate you accept in advance, commonly 0.05.' },
        { term: 'Type I error', def: 'A false positive: rejecting a true null hypothesis.' },
        { term: 'Type II error', def: 'A false negative: failing to detect a real effect.' },
        { term: 'Statistical power', def: 'The probability a test detects a real effect of a given size; rises with sample size.' },
        { term: 'Effect size', def: 'How big the difference is, in business units — the number that decides whether it matters.' },
        { term: 'p-hacking', def: 'Running many analyses or stopping tests early until something crosses p < 0.05.' }
      ],
      quiz: [
        { q: 'Historical mean 100. A sample of 36 has mean 103 and s = 12. What is the t-statistic?', options: ['3', '0.25', '1.5', '9'], answer: 2, explain: 'SE = 12 ÷ √36 = 2. t = (103 − 100) ÷ 2 = 1.5 — not significant at 5%.' },
        { q: 'A p-value of 0.03 means…', options: ['There is a 3% chance the null is true', 'If there were no effect, results at least this extreme would occur about 3% of the time', 'The effect is 3% large', 'There is a 97% chance the new version is better'], answer: 1, explain: 'A p-value is computed assuming H₀ is true; it is not the probability of H₀.' },
        { q: 'You launch a feature that a test said worked, but it truly had no effect. This is a…', options: ['Type I error', 'Type II error', 'Correct decision', 'Power failure'], answer: 0, explain: 'A false positive is a Type I error.' },
        { q: 'You run 10 independent tests of useless changes at α = 0.05. Roughly what is the chance at least one looks significant?', options: ['5%', '50%', '10%', 'About 40%'], answer: 3, explain: '1 − 0.95¹⁰ ≈ 0.40.' },
        { q: 'A test on 5 million users finds a significant 0.02% lift in conversion. The best response is…', options: ['Ship immediately — it is significant', 'Ask whether the lift is worth the cost of building and maintaining it', 'Re-run with fewer users', 'Report it as a major win'], answer: 1, explain: 'Huge samples make tiny effects significant. Practical significance is a business judgement.' }
      ],
      challenge: {
        title: 'Did the new onboarding actually work?',
        prompt: `Your SaaS company tested a new onboarding flow. Control: 10,000 trials, 400 converted to paid (4.0%). New flow: 10,000 trials, 460 converted (4.6%). Each paid customer is worth $600 of gross profit. The new flow costs $150,000 to build and maintain for a year. You get 120,000 trials a year. (a) Is the difference statistically significant? (b) Is it practically significant? (c) What would you recommend and what would you watch?`,
        hints: ['Pooled rate = (400 + 460) ÷ 20,000. SE of the difference = √(p(1 − p)(1/n₁ + 1/n₂)).', 'z = difference ÷ SE; |z| > 1.96 is significant at 5%.', 'Translate the lift into extra customers per year and gross profit.'],
        model: `<p><b>(a) Statistical significance.</b> Pooled p = 860 ÷ 20,000 = 0.043. SE = √(0.043 × 0.957 × (1/10,000 + 1/10,000)) ≈ 0.00287. Difference = 0.006. z = 0.006 ÷ 0.00287 ≈ <b>2.09</b>, p ≈ 0.04. Significant at 5%, but not by a wide margin.</p><p><b>(b) Practical significance.</b> 95% CI for the lift ≈ 0.6% ± 1.96 × 0.29% ≈ 0.04 to 1.16 percentage points. At the point estimate: 120,000 × 0.6% = 720 extra customers × $600 = <b>$432,000</b> a year vs $150,000 cost. Even near the low end of the interval (say 0.1 pp): 120 customers × $600 = $72,000 — below cost.</p><table><thead><tr><th>Lift scenario</th><th>Extra customers</th><th>Gross profit</th><th>Net of $150k</th></tr></thead><tbody><tr><td>0.6 pp (estimate)</td><td>720</td><td>$432k</td><td>+$282k</td></tr><tr><td>0.25 pp (break-even ≈ 0.21 pp)</td><td>300</td><td>$180k</td><td>+$30k</td></tr><tr><td>0.1 pp (low end)</td><td>120</td><td>$72k</td><td>−$78k</td></tr></tbody></table><p><b>(c) Recommendation:</b> roll out — the expected payoff is strongly positive and the break-even lift (0.21 pp) sits well inside the plausible range. But keep a <b>5–10% holdout</b> on the old flow for another month to confirm the effect, and watch guardrails: 90-day retention of the new converts (did we just pull in weaker customers?) and support tickets.</p>`
      },
      takeaways: [
        'A test asks: how surprising is this data if nothing changed?',
        'p-values are not the probability your idea works.',
        'Balance Type I (false alarm) and Type II (missed effect) errors; small tests miss real effects.',
        'Significant is not the same as important — always size the effect in money.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'data-decisions-4',
      title: 'Regression: correlation, drivers and the causation trap',
      level: 'Intermediate',
      minutes: 17,
      hook: `Regression is the most used — and most misused — tool in business analytics; reading one properly is a boardroom superpower.`,
      eli5: `If you plot how many hours your friends practise football against how many goals they score, the dots roughly climb upwards. <b>Regression</b> draws the best straight line through the dots, so you can say "each extra hour of practice goes with about half a goal more". But careful: maybe the friends who practise more are also the ones with the best boots and coaches. The line shows things move <i>together</i>; it does not prove one <i>causes</i> the other.`,
      blocks: [
        {
          type: 'text', title: 'Correlation first',
          html: `<p>The <b>correlation coefficient (r)</b> runs from −1 to +1 and measures how tightly two variables move together in a straight line. r = 0.8 is strong and positive; r = −0.3 is weak and negative; r ≈ 0 means no <i>linear</i> relationship (there could still be a curved one).</p><p>Correlation is symmetric and unit-free. It tells you nothing about which variable drives which — or whether a third factor drives both.</p>`
        },
        {
          type: 'formula', name: 'Simple linear regression',
          expr: 'Y = a + b × X + error     R² = share of variation in Y explained',
          explain: `<b>a</b> (intercept) is the predicted Y when X = 0. <b>b</b> (slope or coefficient) is the change in Y for a one-unit change in X. Ordinary least squares picks a and b to minimise the sum of squared errors. In simple regression, R² = r².`,
          example: `Monthly sales ($k) regressed on ad spend ($k): Sales = 120 + 3.5 × Ads, R² = 0.49. At $40k of ads, predicted sales = 120 + 140 = <b>$260k</b>. Each extra $1k of ads is associated with $3.5k of sales. R² = 0.49 means ads explain about half the month-to-month variation (so r = 0.7).`
        },
        {
          type: 'framework', name: 'Reading a multiple regression output', by: 'Standard econometrics practice', when: 'Whenever an analyst hands you a table of coefficients',
          steps: [
            { label: '1. The equation', desc: 'Store sales = 200 + 4 × footfall (00s/week) − 30 × competitor within 1 km (0/1) + 15 × loyalty members (000s).' },
            { label: '2. "Holding others constant"', desc: 'The −30 means: comparing stores with the same footfall and loyalty base, those with a nearby competitor sell $30k less. This is the big advantage over simple correlations.' },
            { label: '3. Standard errors and p-values', desc: 'Is each coefficient distinguishable from zero? A coefficient of 15 with SE 20 is not reliable.' },
            { label: '4. R² and adjusted R²', desc: 'How much variation the model explains. Adjusted R² penalises adding useless variables; R² alone always rises when you add more.' },
            { label: '5. Residuals and range', desc: 'Look at the errors for patterns, and never predict far outside the range of the data you fitted (extrapolation).' }
          ]
        },
        {
          type: 'compare', title: 'Why correlation is not causation', headers: ['Trap', 'What happens', 'Business example'],
          rows: [
            ['Confounding (omitted variable)', 'A third factor drives both X and Y', 'Stores with more staff sell more — but both follow from being in busy locations'],
            ['Reverse causality', 'Y causes X, not the other way round', 'Firms that advertise more grow faster — or growing firms can afford more ads'],
            ['Selection', 'The sample is filtered in a way linked to Y', 'Customers who use feature X churn less — engaged customers find feature X'],
            ['Coincidence / data mining', 'Test enough pairs and some correlate by chance', 'A share price "predicted" by an unrelated sports result'],
            ['How to get causation', 'Randomised experiments, natural experiments, difference-in-differences', 'A/B tests; rolling a change out region by region and comparing to regions not yet changed']
          ]
        },
        {
          type: 'case', company: 'Oakland Athletics', year: '2002', title: 'Moneyball: finding the variable the market mispriced',
          situation: `The Oakland A’s had one of the smallest payrolls in Major League Baseball — roughly a third of the New York Yankees’. They could not outbid rich teams for stars.`,
          decision: `General manager Billy Beane and his staff leaned on statistical analysis (building on the work of Bill James and other "sabermetricians") showing that <b>on-base percentage</b> was more closely related to scoring runs than the traditional batting average that scouts and salaries emphasised. They bought players who got on base cheaply.`,
          outcome: `The 2002 A’s won 103 games, including a then-American League record 20-game winning streak, and reached the playoffs. Michael Lewis told the story in <i>Moneyball</i> (2003). Within a few years rich teams copied the approach and the edge narrowed.`,
          lesson: `Regression creates value when it reveals a driver the market misprices. Once everyone runs the same model, the advantage is arbitraged away — analytics is a race, not a moat.`
        },
        {
          type: 'case', company: 'NASA / Morton Thiokol', year: '1986', title: 'Challenger: the data that was left out',
          situation: `The night before the Space Shuttle Challenger launch, with forecast temperatures far below any previous launch, engineers and managers discussed whether cold affected the O-ring seals in the solid rocket boosters.`,
          decision: `The charts discussed focused on past flights that had shown O-ring damage. Plotted alone, those flights did not show a clear link with temperature, and the launch went ahead.`,
          outcome: `Challenger broke apart 73 seconds after launch, killing all seven crew. Later analyses, including work associated with the Rogers Commission, showed that once flights <b>without</b> damage were included, the pattern was stark: damage was concentrated at the cold launches.`,
          lesson: `A relationship can vanish when you analyse only the "interesting" cases. Include the zeros, plot all the data, and be most careful when predicting outside the range you have observed.`
        },
        {
          type: 'scenario',
          prompt: `An analyst shows that regions with more sales reps have higher revenue (r = 0.85) and proposes hiring 50 reps in every region. What is your first question?`,
          options: [
            { text: '"Great — how fast can we hire?"', feedback: 'Reps were probably allocated to the biggest markets. The correlation may mostly reflect market size, not rep impact.', good: false },
            { text: '"What happens when we control for market size, and can we pilot extra reps in a few randomly chosen regions?"', feedback: 'Right. Multiple regression controls for the confounder; a randomised pilot tests causation directly.', good: true },
            { text: '"r is not 1.0, so ignore it."', feedback: 'A strong correlation is worth investigating; it just is not proof of cause.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Correlation (r)', def: 'A number from −1 to +1 measuring the strength of a linear relationship.' },
        { term: 'Regression coefficient', def: 'The estimated change in the outcome for a one-unit change in a predictor, holding other predictors constant.' },
        { term: 'R²', def: 'The share of the variation in the outcome explained by the model.' },
        { term: 'Confounder', def: 'A third variable that influences both the predictor and the outcome, creating a misleading correlation.' },
        { term: 'Residual', def: 'The difference between an actual value and the model’s prediction.' },
        { term: 'Extrapolation', def: 'Using a model to predict outside the range of data it was fitted on.' },
        { term: 'Multicollinearity', def: 'When predictors are highly correlated with each other, making individual coefficients unstable.' }
      ],
      quiz: [
        { q: 'Two variables have a correlation of r = 0.6. In a simple regression, what is R²?', options: ['0.6', '0.36', '0.77', '1.2'], answer: 1, explain: 'In simple regression R² = r² = 0.36.' },
        { q: 'Model: Revenue = 50 + 2 × Ad spend (both in $k). Predicted revenue at $30k ad spend?', options: ['$80k', '$60k', '$110k', '$1,550k'], answer: 2, explain: '50 + 2 × 30 = 110.' },
        { q: 'In a multiple regression, the coefficient on "competitor nearby" is −30. This means…', options: ['Competitors cause a $30k loss everywhere', 'Stores with competitors sell $30k less on average, holding the other variables constant', '30% of stores have competitors', 'The model explains 30% of sales'], answer: 1, explain: 'Coefficients are conditional associations, controlling for the other predictors.' },
        { q: 'Firms that spend more on training have higher profits. Which is the most plausible alternative explanation?', options: ['Profitable firms can afford more training (reverse causality)', 'Training always increases profit', 'The correlation must be negative', 'R² is too high'], answer: 0, explain: 'Causation may run from profit to training budgets.' },
        { q: 'What was the key analytical mistake before the Challenger launch?', options: ['Using too many decimal places', 'Excluding flights with no O-ring damage from the analysis', 'Running a randomised experiment', 'Using regression instead of correlation'], answer: 1, explain: 'Dropping the no-damage flights hid the relationship between cold and damage.' }
      ],
      challenge: {
        title: 'Should we cut the discount programme?',
        prompt: `A retailer regresses weekly store profit ($k) on several variables across 200 stores: Profit = 15 + 0.8 × Footfall (000s) + 6 × Premium-location (0/1) − 0.5 × Discount depth (%) ; R² = 0.62; all coefficients significant. The CFO concludes: "Every 1 point of discount costs us $500 a week per store — cut all discounts." Interpret the model, compute the predicted profit for a premium store with 20,000 weekly visitors and 10% discounts, and critique the CFO’s conclusion.`,
        hints: ['Plug the values in: footfall is in thousands.', 'Ask why some stores discount more than others.', 'How would you test causation?'],
        model: `<p><b>Prediction.</b> 15 + 0.8 × 20 + 6 × 1 − 0.5 × 10 = 15 + 16 + 6 − 5 = <b>$32k</b> per week.</p><p><b>Interpretation.</b> Holding footfall and location constant, each extra point of discount depth is <i>associated</i> with $0.5k lower weekly profit. The model explains 62% of profit variation — useful, but 38% is unexplained.</p><p><b>Critique.</b></p><ul><li><b>Reverse causality / confounding:</b> stores may discount deeply <i>because</i> they are struggling (weak local economy, new competitor). Discounts could be a symptom, not the cause.</li><li><b>Omitted variables:</b> local competition and stock clearance needs are not in the model.</li><li><b>Range:</b> data may only cover 0–20% discounts; cutting to zero everywhere may lie outside experience — traffic could fall sharply.</li></ul><p><b>Recommendation:</b> do not cut all discounts on this evidence. Run a <b>randomised test</b>: reduce discount depth by 5 points in ~30 randomly chosen stores for 8 weeks versus matched controls, measuring profit, footfall and basket size. If profit rises without traffic collapsing, roll out in stages.</p>`
      },
      takeaways: [
        'Correlation measures co-movement; regression estimates how much Y changes with X.',
        'Multiple regression "holds other things constant" — but only the things you included.',
        'Confounding, reverse causality and selection make correlations lie; experiments reveal cause.',
        'Plot all the data, including the zeros, and do not extrapolate far.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'data-decisions-5',
      title: 'Forecasting: smoothing, seasonality and forecast error',
      level: 'Intermediate',
      minutes: 15,
      hook: `Every budget, hiring plan and inventory order is a forecast in disguise — the only question is whether you measured how wrong it usually is.`,
      eli5: `If you want to guess how many ice creams your stall will sell next Saturday, you might average the last three Saturdays. If last Saturday was much busier, maybe give it more weight. And if summer is coming, bump the guess up because summer is always busier. That is forecasting: look back, weigh recent history, adjust for the season — then check how close your guesses usually were.`,
      blocks: [
        {
          type: 'text', title: 'The parts of a time series',
          html: `<p>Most business data over time (sales, calls, web traffic) is a mix of four parts:</p><ul><li><b>Level</b> — the current baseline.</li><li><b>Trend</b> — steady growth or decline.</li><li><b>Seasonality</b> — repeating patterns by week, month or quarter (December retail, Monday call spikes).</li><li><b>Noise</b> — random variation you cannot predict.</li></ul><p>Good forecasting separates these, models the predictable parts and is honest about the noise.</p>`
        },
        {
          type: 'formula', name: 'Moving average and exponential smoothing',
          expr: 'MA = average of last k periods     Fₜ₊₁ = α × Aₜ + (1 − α) × Fₜ',
          explain: `A <b>moving average</b> smooths noise by averaging the last k actuals. <b>Exponential smoothing</b> updates the old forecast F by a fraction α of the latest error: high α (e.g. 0.5) reacts fast but chases noise; low α (e.g. 0.1) is stable but slow to spot real changes. Extensions (Holt, Holt-Winters) add trend and seasonality.`,
          example: `Sales last three months: 100, 120, 110 → 3-month MA = 330 ÷ 3 = <b>110</b>. Exponential smoothing with α = 0.3, last forecast 100, last actual 120: F = 0.3 × 120 + 0.7 × 100 = 36 + 70 = <b>106</b>.`
        },
        {
          type: 'formula', name: 'Seasonal index',
          expr: 'Seasonal index = average for the season ÷ overall average     Forecast = baseline × index',
          explain: `An index of 1.4 means that season runs 40% above an average period. Divide actuals by the index to "deseasonalise" them and see the real trend; multiply the baseline forecast by the index to put seasonality back.`,
          example: `A retailer’s Q4 index is 1.4 and Q1 is 0.8. Next year’s baseline is 1,000 units per quarter. Forecast: Q4 = 1,000 × 1.4 = <b>1,400</b>; Q1 = <b>800</b>. If Q1 actually sells 840, the deseasonalised figure is 840 ÷ 0.8 = 1,050 — running 5% above baseline.`
        },
        {
          type: 'formula', name: 'Forecast error: MAPE and bias',
          expr: 'MAPE = average of |Actual − Forecast| ÷ Actual     Bias = average of (Forecast − Actual)',
          explain: `<b>MAPE</b> (mean absolute percentage error) says how far off you typically are. <b>Bias</b> says whether you are consistently too high or too low — a sales team that always under-forecasts to beat targets shows negative bias. Watch both: a forecast can have a low MAPE and still be biased. MAPE misbehaves when actuals are near zero; use MAE or weighted MAPE there.`,
          example: `Actuals 100 and 200; forecasts 110 and 180. Errors: 10 ÷ 100 = 10%, 20 ÷ 200 = 10%. MAPE = <b>10%</b>. Bias = ((110 − 100) + (180 − 200)) ÷ 2 = −5 units: slightly under-forecasting.`
        },
        {
          type: 'case', company: 'Walmart', year: '2004', title: 'Hurricanes and strawberry Pop-Tarts',
          situation: `As Hurricane Frances approached Florida in 2004, Walmart’s data team studied sales patterns from stores hit by Hurricane Charley a few weeks earlier, looking for what customers bought before a storm beyond the obvious flashlights and water.`,
          decision: `As reported by <i>The New York Times</i> in November 2004, the analysis found that sales of strawberry Pop-Tarts rose to about seven times their normal rate ahead of a hurricane, and beer was a top seller. Walmart pre-positioned these products on trucks heading to stores in the storm’s path.`,
          outcome: `The story became a classic example of event-driven forecasting: using analogous past events to adjust a baseline forecast for a known upcoming shock.`,
          lesson: `Pure time-series methods cannot see a hurricane coming. Combine statistical baselines with <b>causal drivers</b> (promotions, weather, holidays, launches) and analogous events.`
        },
        {
          type: 'callout', kind: 'insight', title: 'Forecasting in 2025–26',
          html: `<p>Machine-learning forecasters (gradient-boosted trees, and newer "foundation" time-series models) now handle thousands of products with external signals like weather and promotions. They still need the basics: a naive benchmark to beat, honest error tracking, and a human who knows that next month includes a product launch the model has never seen. Always ask: <b>does the fancy model beat "same as last year"?</b></p>`
        },
        {
          type: 'checklist', title: 'Before you sign off a forecast',
          items: ['Compared against a naive benchmark (last period or same period last year)', 'Seasonality identified and removed before reading the trend', 'Known events (promotions, launches, holidays) added explicitly', 'MAPE and bias reported from past forecasts, not just the fit', 'A range (low / base / high) given, not one number', 'Owner and date set to review forecast vs actual']
        }
      ],
      terms: [
        { term: 'Time series', def: 'Data recorded at regular intervals over time.' },
        { term: 'Moving average', def: 'The average of the most recent k periods, used to smooth noise.' },
        { term: 'Exponential smoothing', def: 'A forecast that updates by a fraction α of the latest error, weighting recent data more.' },
        { term: 'Seasonal index', def: 'The ratio of a season’s typical level to the overall average.' },
        { term: 'MAPE', def: 'Mean absolute percentage error — the average size of forecast misses as a percentage of actuals.' },
        { term: 'Forecast bias', def: 'A persistent tendency to forecast too high or too low.' },
        { term: 'Naive forecast', def: 'A simple benchmark such as "next period equals this period".' }
      ],
      quiz: [
        { q: 'Exponential smoothing with α = 0.2. Last forecast 50, last actual 60. Next forecast?', options: ['52', '58', '60', '55'], answer: 0, explain: '0.2 × 60 + 0.8 × 50 = 12 + 40 = 52.' },
        { q: 'Actuals 80, 100, 120; forecasts 88, 95, 120. What is the MAPE?', options: ['10%', '7.5%', '5%', '13 units'], answer: 2, explain: 'Errors: 8/80 = 10%, 5/100 = 5%, 0/120 = 0%. Average = 5%.' },
        { q: 'December’s seasonal index is 1.5. The baseline forecast is 2,000 units a month. December forecast?', options: ['1,333', '2,000', '3,500', '3,000'], answer: 3, explain: '2,000 × 1.5 = 3,000.' },
        { q: 'Raising α in exponential smoothing makes the forecast…', options: ['React faster to recent changes but chase more noise', 'Ignore recent data', 'Remove seasonality', 'Always more accurate'], answer: 0, explain: 'Higher α puts more weight on the latest actual.' },
        { q: 'Last four months: 40, 44, 48, 52. A 4-month moving average forecast for next month is 46. What is wrong?', options: ['Nothing', 'The moving average lags a clear upward trend', 'The MAPE is too low', 'It double-counts seasonality'], answer: 1, explain: 'Moving averages lag trends; a trend-aware method would forecast about 56.' }
      ],
      challenge: {
        title: 'Forecast next year’s quarterly demand',
        prompt: `A garden-furniture company sold the following units over two years. Year 1: Q1 200, Q2 600, Q3 400, Q4 200 (total 1,400). Year 2: Q1 220, Q2 660, Q3 440, Q4 220 (total 1,540). (a) Compute seasonal indices. (b) Forecast Year 3 by quarter, assuming the year-on-year growth continues. (c) Last year’s forecasts were Q1 200, Q2 700, Q3 400, Q4 200 against Year 2 actuals — compute MAPE and bias, and say what you would change.`,
        hints: ['Seasonal index = quarter’s share × 4. Both years have the same pattern.', 'Growth = 1,540 ÷ 1,400.', 'MAPE uses absolute errors divided by actuals.'],
        model: `<p><b>(a) Indices.</b> Year 1 average quarter = 350. Q1 200/350 = 0.571, Q2 600/350 = 1.714, Q3 400/350 = 1.143, Q4 200/350 = 0.571 (Year 2 gives identical ratios: 220/385 etc.). Indices sum to 4.0.</p><p><b>(b) Year 3.</b> Growth = 1,540 ÷ 1,400 = 1.10. Year 3 total = 1,694; baseline quarter = 423.5.</p><table><thead><tr><th>Quarter</th><th>Index</th><th>Forecast</th></tr></thead><tbody><tr><td>Q1</td><td>0.571</td><td>242</td></tr><tr><td>Q2</td><td>1.714</td><td>726</td></tr><tr><td>Q3</td><td>1.143</td><td>484</td></tr><tr><td>Q4</td><td>0.571</td><td>242</td></tr></tbody></table><p>(Each is Year 2 × 1.10: 220 → 242, 660 → 726, 440 → 484.)</p><p><b>(c) Last year’s accuracy.</b> Errors: Q1 |200 − 220| ÷ 220 = 9.1%; Q2 |700 − 660| ÷ 660 = 6.1%; Q3 |400 − 440| ÷ 440 = 9.1%; Q4 9.1%. <b>MAPE ≈ 8.3%</b>. Bias = (−20 + 40 − 40 − 20) ÷ 4 = <b>−10 units</b> per quarter: the forecast missed the 10% growth in three quarters and over-shot the peak.</p><p><b>Recommendation:</b> forecast as trend × seasonal index rather than copying last year, track bias monthly, and add weather and promotion drivers for Q2, where the money is made. Give operations a ±10% range around Q2 to plan capacity.</p>`
      },
      takeaways: [
        'Separate level, trend, seasonality and noise before forecasting.',
        'Exponential smoothing balances responsiveness (high α) and stability (low α).',
        'Track MAPE for size of error and bias for direction.',
        'Always beat a naive benchmark and add known events explicitly.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'data-decisions-6',
      title: 'Decision trees, the value of information and risk attitude',
      level: 'Advanced',
      minutes: 18,
      hook: `Before you pay for more research, ask one question: could the answer change what we do? If not, the information is worth exactly zero.`,
      eli5: `You are deciding whether to hold your birthday party outdoors. If it rains, outdoors is a disaster; if it is sunny, it is the best party ever. A weather forecast would help — but only because it might change your choice. If you were going to have the party indoors no matter what, the forecast is useless to you. Decision trees draw out the choices and chances like branches, so you can see which path is best and what a forecast is really worth.`,
      blocks: [
        {
          type: 'framework', name: 'Building and solving a decision tree', by: 'Decision analysis (Howard Raiffa, Ronald Howard, 1960s)', when: 'Sequential decisions with uncertainty: launches, R&D stages, litigation, bids',
          steps: [
            { label: '1. Decision nodes (squares)', desc: 'Points where you choose: launch / test first / abandon.' },
            { label: '2. Chance nodes (circles)', desc: 'Points where uncertainty resolves: demand high or low. Probabilities on each branch must add to 1.' },
            { label: '3. Payoffs at the end', desc: 'Net value of each complete path, including costs already incurred along it.' },
            { label: '4. Roll back', desc: 'Work right to left: at chance nodes take the expected value; at decision nodes pick the best branch.' },
            { label: '5. Sensitivity', desc: 'Find the probability at which the decision flips. If it is close to your estimate, get more information.' }
          ]
        },
        {
          type: 'formula', name: 'Expected value of perfect information (EVPI)',
          expr: 'EVPI = EV with perfect information − EV of best action without it',
          explain: `EVPI is the ceiling on what <b>any</b> research, test or consultant can be worth. Real (imperfect) information is worth less: its value is the expected value of sample information (EVSI), computed with Bayes’ rule.`,
          example: `Launch: 40% success (+$5M), 60% failure (−$2M). EV(launch) = 2.0 − 1.2 = +$0.8M; EV(don’t) = 0, so launch. With perfect foresight you would launch only on success: 0.4 × 5 = $2.0M. <b>EVPI = 2.0 − 0.8 = $1.2M.</b> Never pay more than $1.2M for market research on this decision.`
        },
        {
          type: 'text', title: 'Worked example: is a test market worth it?',
          html: `<p>Continue the launch above. A test market costs $0.3M. It is imperfect: it says "positive" for 80% of products that will succeed and for 20% that will fail.</p><ul><li>P(positive) = 0.4 × 0.8 + 0.6 × 0.2 = 0.32 + 0.12 = <b>0.44</b>.</li><li>If positive: P(success) = 0.32 ÷ 0.44 ≈ 0.727. EV(launch) = 0.727 × 5 − 0.273 × 2 ≈ <b>+$3.09M</b> → launch.</li><li>If negative (0.56): P(success) = 0.08 ÷ 0.56 ≈ 0.143. EV(launch) = 0.143 × 5 − 0.857 × 2 ≈ <b>−$1.0M</b> → don’t launch (0).</li><li>EV with test = 0.44 × 3.09 + 0.56 × 0 ≈ <b>$1.36M</b>.</li><li><b>EVSI = 1.36 − 0.8 = $0.56M</b> &gt; $0.3M cost. Run the test: net EV $1.06M vs $0.8M launching blind.</li></ul><p>The test is valuable because a negative result <b>changes the decision</b>.</p>`
        },
        {
          type: 'matrix', name: 'Risk attitude', xLabel: 'Size of the bet relative to the firm →', yLabel: 'Ability to repeat the bet →',
          cells: [
            { label: 'Many small repeatable bets', desc: 'Be close to risk-neutral: maximise expected value. Ad tests, pricing experiments, small pilots.' },
            { label: 'Many large bets', desc: 'Portfolio thinking: diversify (VC funds, pharma pipelines), but watch correlated failures.' },
            { label: 'One-off small bet', desc: 'EV still a good guide; the downside does not threaten anything.' },
            { label: 'One-off bet-the-company', desc: 'Be risk-averse: use certainty equivalents, insist on survivable worst cases, buy insurance or partner to share risk.' }
          ]
        },
        {
          type: 'formula', name: 'Certainty equivalent and risk premium',
          expr: 'Risk premium = Expected value − Certainty equivalent',
          explain: `The <b>certainty equivalent (CE)</b> is the sure amount you would accept instead of the gamble. A risk-averse decision-maker has CE &lt; EV; the gap is the price they would pay to remove the risk. This is why firms buy insurance with negative expected value and why founders sell some shares early.`,
          example: `A lawsuit: 50% chance of winning $10M, 50% of $0. EV = $5M. If the board would settle today for $3.5M, CE = $3.5M and the risk premium is <b>$1.5M</b>.`
        },
        {
          type: 'case', company: 'Netflix', year: '2006–2009', title: 'The Netflix Prize: when better information is not worth using',
          situation: `In 2006 Netflix offered $1 million to any team that could improve the accuracy of its movie-rating predictions (its Cinematch system) by 10%. Thousands of teams competed using a large anonymised ratings dataset.`,
          decision: `In 2009 the team "BellKor’s Pragmatic Chaos" won with a complex blend of many models.`,
          outcome: `Netflix later explained on its tech blog (2012) that it adopted some of the ideas, but did not put the full winning ensemble into production: the extra accuracy did not justify the engineering cost, and the business had shifted to streaming, where viewing behaviour mattered more than star ratings. The dataset release also drew privacy criticism.`,
          lesson: `Information has value only through the decisions it improves, net of the cost of using it. A 10% better prediction of the wrong target can be worth little.`
        },
        {
          type: 'scenario',
          prompt: `Your team proposes a $500k customer study before deciding whether to enter a new market. On current estimates, entering has EV +$4M and not entering $0. Even in the study’s most pessimistic plausible result, entering still has positive EV. What do you do?`,
          options: [
            { text: 'Commission the study — more data is always better.', feedback: 'If no plausible result changes the decision, the study’s decision value is zero. It may still help execution, but not the go/no-go call.', good: false },
            { text: 'Skip the study for the entry decision; spend a smaller budget on research that shapes how you enter (pricing, segment).', feedback: 'Right. Information is worth buying only where it can change an action.', good: true },
            { text: 'Delay the decision a year to gather data.', feedback: 'Delay has its own cost — rivals move and the +$4M EV is pushed back.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Decision tree', def: 'A diagram of choices (squares), uncertainties (circles) and payoffs, solved by rolling back expected values.' },
        { term: 'Rolling back', def: 'Solving a tree from right to left: expected values at chance nodes, best choice at decision nodes.' },
        { term: 'EVPI', def: 'Expected value of perfect information — the maximum worth of any information about an uncertainty.' },
        { term: 'EVSI', def: 'Expected value of sample (imperfect) information, such as a test market.' },
        { term: 'Certainty equivalent', def: 'The guaranteed amount a decision-maker considers as good as a risky gamble.' },
        { term: 'Risk premium', def: 'Expected value minus certainty equivalent — what you would give up to remove risk.' },
        { term: 'Risk-averse', def: 'Preferring a certain outcome to a gamble with the same expected value.' }
      ],
      quiz: [
        { q: 'A project has a 60% chance of +$3M and a 40% chance of −$1M. What is its EV?', options: ['+$2M', '+$1.4M', '+$1.8M', '+$1M'], answer: 1, explain: '0.6 × 3 − 0.4 × 1 = 1.8 − 0.4 = 1.4.' },
        { q: 'Same project, alternative is $0. What is the EVPI?', options: ['$1.8M', '$0.4M', '$3M', '$1.4M'], answer: 1, explain: 'With perfect info you invest only in the good state: 0.6 × 3 = 1.8. EVPI = 1.8 − 1.4 = 0.4.' },
        { q: 'A gamble has EV $200k. A manager would accept $150k for certain instead. The risk premium is…', options: ['$350k', '$150k', '$200k', '$50k'], answer: 3, explain: 'Risk premium = EV − CE = 200 − 150 = $50k.' },
        { q: 'When is information worth zero for a decision?', options: ['When it is expensive', 'When it is imperfect', 'When no possible result would change your choice', 'When probabilities are below 50%'], answer: 2, explain: 'Information creates value only by changing actions.' },
        { q: 'When rolling back a decision tree, at a chance node you…', options: ['Take the expected value of its branches', 'Pick the best branch', 'Pick the worst branch', 'Add all payoffs'], answer: 0, explain: 'Chance nodes are averaged by probability; decision nodes take the best option.' }
      ],
      challenge: {
        title: 'Settle or go to trial?',
        prompt: `Your company is being sued. Options: <b>settle now</b> for $4M, or <b>go to trial</b> (legal costs $1M). At trial: 30% chance you win (pay $0 damages), 50% you lose with damages of $6M, 20% you lose with damages of $12M. A specialist firm offers a $150k jury-research study that would tell you, with near certainty, whether a "large damages" verdict is likely — if it is, you would settle. (a) Solve the tree without the study. (b) What is the most the study could be worth? (c) Recommend, including risk attitude.`,
        hints: ['Work in costs: lower is better.', 'Trial expected cost = legal costs + expected damages.', 'With perfect knowledge of the $12M branch, you settle in that state and go to trial otherwise.'],
        model: `<p><b>(a) Without the study.</b> Expected damages = 0.3 × 0 + 0.5 × 6 + 0.2 × 12 = 3.0 + 2.4 = $5.4M. Trial expected cost = 5.4 + 1.0 = <b>$6.4M</b> vs settle <b>$4.0M</b>. Settle.</p><p><b>(b) Value of the study (treated as perfect information about the $12M state).</b> If the study says "large damages likely" (20%): settle, $4M. Otherwise (80%), the remaining outcomes are 0.3/0.8 = 37.5% win, 0.5/0.8 = 62.5% lose $6M → expected trial cost = 1 + 0.625 × 6 = $4.75M, still worse than $4M → settle anyway. So every result leads to settling: <b>EVPI = $0</b>. The study cannot change the decision, so it is worth nothing for this choice.</p><p><b>(c) Recommendation.</b> Settle for $4M and decline the study. Settling also removes a 20% tail risk of a $13M total cost (12 + 1), which a risk-averse board should value beyond the $2.4M expected saving. Only revisit if the settlement demand rises above $4.75M (the expected cost of trial if the large-damages branch could be ruled out) — then information might change the call. Negotiate the settlement down using the trial EV as your BATNA (see the Negotiation track).</p>`
      },
      takeaways: [
        'Draw decisions as trees: squares choose, circles average, roll back from the right.',
        'EVPI caps what any research is worth; information is valuable only if it can change the decision.',
        'Use Bayes’ rule to value imperfect tests (EVSI).',
        'For bet-the-company choices, use certainty equivalents, not just expected value.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'data-decisions-7',
      title: 'Monte Carlo simulation and optimisation with linear programming',
      level: 'Advanced',
      minutes: 19,
      hook: `Plans built on average inputs are wrong on average — simulation shows the range of futures, and optimisation finds the best plan inside your constraints.`,
      eli5: `Imagine guessing how long your walk to school takes. Some days the bus is late, some days the lights are green. Instead of using one guess, you could imagine the walk 1,000 times, each time rolling dice for the bus and the lights, and see how often you are late. That is <b>Monte Carlo simulation</b>. <b>Linear programming</b> is a different trick: if you have only so much flour and so much time, it tells you the best mix of cakes and cookies to bake for the most money.`,
      blocks: [
        {
          type: 'text', title: 'The flaw of averages',
          html: `<p>Sam Savage named it the <b>flaw of averages</b>: plugging average inputs into a model does not give the average output whenever the model has limits, thresholds or non-linear effects.</p><p><b>Example (illustrative):</b> you can make 100 units; demand is equally likely to be anywhere from 50 to 150 (average 100); margin is $10 per unit sold. At "average demand" profit = 100 × $10 = $1,000. But you can never sell more than 100: half the time demand is below 100 (averaging 75), half the time you are capped at 100. Expected units sold = 0.5 × 75 + 0.5 × 100 = 87.5, so expected profit = <b>$875</b>, not $1,000.</p>`
        },
        {
          type: 'framework', name: 'Running a Monte Carlo simulation', by: 'Method named by Stanislaw Ulam and John von Neumann, 1940s', when: 'When several uncertain inputs interact and you need the range and risk of an outcome',
          steps: [
            { label: '1. Build the deterministic model', desc: 'A spreadsheet or script: NPV = f(demand, price, cost, launch date…).' },
            { label: '2. Replace key inputs with distributions', desc: 'Demand ~ normal(mean 10,000, σ 2,000); cost ~ triangular(min, most likely, max). Use data or calibrated expert ranges.' },
            { label: '3. Model correlations', desc: 'If high demand tends to come with high prices, link them — ignoring correlation understates or overstates risk.' },
            { label: '4. Run thousands of trials', desc: 'Draw random inputs, compute the outcome, repeat 10,000 times.' },
            { label: '5. Read the distribution', desc: 'Report mean, P(loss), 5th and 95th percentiles (P5 / P95) and which inputs drive most of the variance (a tornado chart).' }
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'What a simulation tells the board (illustrative)',
          html: `<p>A new plant’s single-point NPV is +$20M. After 10,000 simulated runs: mean NPV +$14M (lower, because delays and overruns are asymmetric), P5 = −$18M, P95 = +$40M, and a <b>27% chance of a negative NPV</b>. The tornado chart shows construction delay drives most of the risk — so the team negotiates a fixed-price, penalty-backed construction contract before approval.</p>`
        },
        {
          type: 'formula', name: 'Linear programming (LP)',
          expr: 'Maximise c₁x₁ + c₂x₂ subject to a₁x₁ + a₂x₂ ≤ b (for each constraint), x ≥ 0',
          explain: `LP finds the best values of <b>decision variables</b> (how much of each product, route, shift) to maximise or minimise a linear <b>objective</b> (profit, cost) under linear <b>constraints</b> (hours, materials, demand). With two products you can solve it by hand: the optimum lies at a <b>corner</b> of the feasible region. Spreadsheet solvers handle thousands of variables.`,
          example: `A workshop makes tables ($70 profit) and chairs ($50). Carpentry: table 4h, chair 3h, 240h available. Painting: table 2h, chair 1h, 100h available. Corners: (0 tables, 80 chairs) → $4,000; (50, 0) → $3,500; (30, 40) → 30 × 70 + 40 × 50 = <b>$4,100</b>. Check (30, 40): carpentry 120 + 120 = 240 ✓; painting 60 + 40 = 100 ✓. Optimum: 30 tables, 40 chairs.`
        },
        {
          type: 'text', title: 'Shadow prices: what is one more hour worth?',
          html: `<p>Every <b>binding</b> constraint (fully used at the optimum) has a <b>shadow price</b>: the increase in the objective from one more unit of that resource, within a range.</p><p>In the workshop, both constraints bind. Solving 4y₁ + 2y₂ = 70 and 3y₁ + y₂ = 50 gives <b>carpentry = $15/hour</b> and <b>painting = $5/hour</b>. Check: 240 × 15 + 100 × 5 = 3,600 + 500 = $4,100 — the same total profit.</p><ul><li>Pay up to $15 extra per hour for carpentry overtime; it adds profit until the mix shifts.</li><li>Painting overtime is worth only $5 an hour — do not pay a $20 premium for it.</li><li>A constraint with slack (unused capacity) has a shadow price of zero: more of it is worthless.</li></ul>`
        },
        {
          type: 'case', company: 'US Air Force / George Dantzig', year: '1947', title: 'From military logistics to every supply chain',
          situation: `After the Second World War, the US Air Force needed to plan training, deployment and supply for huge numbers of people and aircraft — problems with many activities competing for limited resources.`,
          decision: `Mathematician George Dantzig, working on these planning problems, developed the <b>simplex method</b> for solving linear programs in 1947. Leonid Kantorovich had developed related ideas in the Soviet Union in 1939, and Tjalling Koopmans applied them to transport; the two shared the 1975 Nobel Prize in economics.`,
          outcome: `Linear and integer programming became core to airline crew scheduling, refinery blending, shipping routes, retail replenishment and advertising allocation. Modern solvers handle millions of variables.`,
          lesson: `Whenever a decision is "how to allocate scarce resources across many competing uses", there is probably an optimisation model that beats intuition — and its shadow prices tell you where to invest in more capacity.`
        },
        {
          type: 'compare', title: 'Simulation vs optimisation', headers: ['', 'Monte Carlo simulation', 'Linear programming'],
          rows: [
            ['Question answered', 'What range of outcomes could happen?', 'What is the best plan?'],
            ['Inputs', 'Probability distributions', 'Fixed coefficients and constraints'],
            ['Output', 'Distribution of results, P(loss), percentiles', 'Optimal decisions, objective value, shadow prices'],
            ['Typical use', 'Capex approvals, project risk, pricing risk', 'Product mix, scheduling, routing, blending, budgets'],
            ['Combine them', 'Simulate uncertainty around an optimised plan', 'Stochastic / robust optimisation']
          ]
        },
        {
          type: 'scenario',
          prompt: `In the workshop, the carpentry team offers 20 extra overtime hours at a $12/hour premium. Painting offers 20 extra hours at a $12/hour premium. You can afford one. Which?`,
          options: [
            { text: 'Painting — it is the scarcer step.', feedback: 'Painting’s shadow price is $5/hour, less than the $12 premium: you would lose about $7 an hour.', good: false },
            { text: 'Carpentry — its shadow price ($15/hour) exceeds the $12 premium.', feedback: 'Right — about $3 net gain per hour, roughly $60 for 20 hours, assuming the shadow price holds over that range (re-solve the LP to confirm).', good: true },
            { text: 'Neither — both cost the same.', feedback: 'Same cost, different value. Shadow prices tell you which resource is worth more.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Monte Carlo simulation', def: 'Running a model thousands of times with random draws from input distributions to see the range of outcomes.' },
        { term: 'Flaw of averages', def: 'The error of plugging average inputs into a model and assuming the output is the average result.' },
        { term: 'P5 / P95', def: 'The 5th and 95th percentile outcomes from a simulation: a plausible low and high case.' },
        { term: 'Linear programming', def: 'A method to optimise a linear objective subject to linear constraints.' },
        { term: 'Binding constraint', def: 'A constraint that is fully used at the optimal solution.' },
        { term: 'Shadow price', def: 'The increase in the objective from one more unit of a constrained resource.' },
        { term: 'Feasible region', def: 'All combinations of decisions that satisfy every constraint.' }
      ],
      quiz: [
        { q: 'In the workshop LP, what is the profit at 20 tables and 50 chairs, and is it feasible?', options: ['$3,900, feasible', '$4,100, feasible', '$3,900, infeasible', '$3,400, feasible'], answer: 0, explain: 'Profit 20 × 70 + 50 × 50 = 1,400 + 2,500 = 3,900. Carpentry 80 + 150 = 230 ≤ 240; painting 40 + 50 = 90 ≤ 100. Feasible but below $4,100.' },
        { q: 'Carpentry has a shadow price of $15/hour. This means…', options: ['Carpentry costs $15 an hour', 'One more carpentry hour adds about $15 of profit', 'Carpenters should be paid $15', 'Carpentry is not a binding constraint'], answer: 1, explain: 'Shadow price = marginal value of an extra unit of the resource.' },
        { q: 'A constraint has unused (slack) capacity at the optimum. Its shadow price is…', options: ['Very high', 'Negative', 'Equal to its cost', 'Zero'], answer: 3, explain: 'More of a resource you are not fully using adds nothing.' },
        { q: 'Capacity is 100 units; demand is equally likely to be 50 or 150; margin $10/unit. Expected profit?', options: ['$1,000', '$750', '$1,500', '$500'], answer: 1, explain: 'Sell 50 (profit $500) or 100 (capped, $1,000) with equal odds: average $750 — not the $1,000 from "average demand".' },
        { q: 'The main output that a Monte Carlo simulation adds over a single-point forecast is…', options: ['A distribution of outcomes, including the probability of loss', 'A higher NPV', 'The optimal product mix', 'Certainty about the future'], answer: 0, explain: 'Simulation shows range and risk, not a better point estimate.' }
      ],
      challenge: {
        title: 'Plan the bakery’s product mix',
        prompt: `A bakery makes cakes ($12 profit each) and loaves ($5 each). Oven time: cake 2 hours of oven-slot, loaf 0.5 hours; 100 oven-hours a week. Decoration labour: cake 1 hour, loaf 0 hours; 40 hours a week. Demand for loaves is capped at 120 a week. (a) Find the profit-maximising mix. (b) Which constraints bind and what are their shadow prices? (c) The owner can rent a second oven adding 20 oven-hours for $80 a week, or hire 10 more decoration hours for $60. Which, if either? (d) How would you use Monte Carlo here?`,
        hints: ['List the corners of the feasible region and evaluate profit at each.', 'At the optimum, which resources are fully used?', 'Shadow price × extra hours vs the cost.'],
        model: `<p><b>(a) Corners</b> (C = cakes, L = loaves). Constraints: 2C + 0.5L ≤ 100; C ≤ 40; L ≤ 120.</p><table><thead><tr><th>Corner</th><th>Check</th><th>Profit</th></tr></thead><tbody><tr><td>C = 40, L = 0</td><td>oven 80</td><td>$480</td></tr><tr><td>C = 40, L = 40</td><td>oven 80 + 20 = 100</td><td>$480 + $200 = $680</td></tr><tr><td>C = 20, L = 120</td><td>oven 40 + 60 = 100</td><td>$240 + $600 = <b>$840</b></td></tr><tr><td>C = 0, L = 120</td><td>oven 60</td><td>$600</td></tr></tbody></table><p><b>Optimum: 20 cakes, 120 loaves, $840/week.</b> Per oven-hour, loaves earn $5 ÷ 0.5 = $10 vs cakes $12 ÷ 2 = $6, so fill loaf demand first.</p><p><b>(b) Binding:</b> oven (100 used) and loaf demand (120). Decoration has slack (20 of 40 used) → shadow price <b>$0</b>. Oven: an extra hour makes 0.5 more cake = <b>$6/hour</b>. Loaf demand: one more loaf sold uses 0.5 oven-hour, displacing 0.25 cake ($3), so net <b>$5 − $3 = $2</b> per extra unit of demand.</p><p><b>(c)</b> Second oven: 20 hours × $6 = $120 extra profit vs $80 cost → <b>+$40/week, do it</b> (10 more cakes needs 10 decoration hours; 30 of 40 used, still feasible). Decoration hours: shadow price $0 → <b>do not hire</b>.</p><p><b>(d) Monte Carlo:</b> loaf demand and cake demand are uncertain. Simulate weekly demand (e.g. loaves normal around 120, σ 20) to see how often the extra oven capacity is actually used and the distribution of weekly profit, then decide whether a flexible rental beats a fixed one.</p><p><b>Recommendation:</b> make 20 cakes and 120 loaves now, rent the extra oven (re-optimised plan: 30 cakes, 120 loaves, $960 − $80 = $880/week), and push marketing to lift loaf demand, worth $2 per extra unit.</p>`
      },
      takeaways: [
        'Average inputs do not give average outputs when there are caps and thresholds — simulate.',
        'Report simulation results as ranges: mean, P5, P95 and probability of loss.',
        'LP optimum sits at a corner; check each corner and every constraint.',
        'Shadow prices tell you exactly which extra capacity is worth paying for.'
      ]
    }
  ]
});
