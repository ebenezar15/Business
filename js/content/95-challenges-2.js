/* MBA Studio — Challenge arena, part 2: 10 problems for the Phase 2 tracks */
MBA.addChallenges([

  /* =================== DIFFICULTY 1 =================== */
  {
    id: 'ch-heater-recall-ethics',
    title: 'A safety fault, a funding round in six weeks: recall or stay quiet?',
    difficulty: 1,
    track: 'ethics',
    role: 'CEO',
    scenario: `<p>You run an <b>illustrative</b> consumer-hardware start-up that sells smart electric heaters. You have shipped <b>40,000 units</b>. Your quality engineer reports a thermostat fault: lab tests suggest about <b>1 unit in 8,000</b> could overheat during a winter. Three overheating incidents have already been reported by customers (minor, no injuries so far). Annual profit is about <b>$5M</b>, and you are six weeks from closing a funding round.</p>
<p>Three options are on the table. (A) <b>Full recall</b> and replacement: about <b>$60 per unit</b>. (B) <b>Silent fix</b>: push a firmware update over the internet that fixes the fault on connected units (about <b>70%</b> are online) for about $0.3M, and say nothing. (C) <b>Hybrid</b>: firmware update for connected units plus recall of the unconnected ones, with a public safety notice and a report to the product-safety regulator.</p>`,
    data: { headers: ['Option', 'Direct cost', 'Units still at risk', 'Disclosure'], rows: [['A: full recall', '40,000 x $60 = ?', '0 (after recall)', 'Public'], ['B: silent firmware fix', '$0.3M', '30% of 40,000 = ?', 'None'], ['C: firmware + recall of unconnected units + notice', '$0.3M + ? x $60', '0 (after recall)', 'Public + regulator']] },
    tasks: ['Fill in the costs and expected incidents for each option.', 'Map the stakeholders and what each one is owed.', 'Test each option with at least two ethical lenses.', 'Recommend what to do, including what you tell investors.'],
    hints: ['Expected incidents = units at risk x probability (1/8,000).', 'Lenses: consequences (harm vs cost), duties (law, honesty, informed consent) and the "front page" test.', 'Ask what the investors would think if they learned about the fault after closing.'],
    modelAnswer: `<p><b>1. Numbers.</b> If nothing is done: 40,000 / 8,000 = <b>5 expected incidents</b> per winter.</p>
<table><thead><tr><th>Option</th><th>Direct cost</th><th>Units at risk</th><th>Expected incidents</th></tr></thead>
<tbody><tr><td>A: full recall</td><td>40,000 x $60 = <b>$2.4M</b></td><td>0</td><td>0 (after recall)</td></tr>
<tr><td>B: silent fix</td><td><b>$0.3M</b></td><td>12,000</td><td>12,000 / 8,000 = <b>1.5</b></td></tr>
<tr><td>C: hybrid</td><td>$0.3M + 12,000 x $60 = <b>$1.02M</b></td><td>0</td><td>0 (after recall)</td></tr></tbody></table>
<p><b>2. Stakeholders.</b> Customers (physical safety, honest information); regulator (legal reporting duty in many markets); employees (pride, legal exposure); current and new investors (accurate disclosure before they commit money); retailers (liability); the founders themselves (personal reputation and legal risk).</p>
<p><b>3. Lenses.</b> <i>Consequences:</i> B saves about $0.7M versus C but leaves an expected 1.5 fires in homes, plus the risk of discovery, which would cost far more (lawsuits, regulator penalties, loss of the round). <i>Duties:</i> B breaks the duty to warn and, in many jurisdictions, the legal duty to report a known hazard; it also misleads investors. <i>Front page test:</i> "Start-up knew heaters could overheat, fixed some quietly" is indefensible. B fails all three. A and C both pass; C achieves the same safety outcome at <b>$1.38M less</b> than A.</p>
<p><b>4. Recommendation.</b> <span class="hl">Choose C</span>: push the firmware update now, recall and replace the 12,000 unconnected units, issue a clear public safety notice, report to the regulator, and tell the incoming investors in writing before closing, with the cost ($1.02M, about 20% of a year\'s profit) and the fix plan. Then fix the root cause: add thermal cut-off hardware and a pre-launch safety review. The round may slip a few weeks; hiding the issue could end the company.</p>`,
    rubric: ['Correct cost and expected-incident math for all three options.', 'Identifies stakeholders including investors and the regulator.', 'Applies at least two ethical lenses and rejects the silent fix with reasons.', 'Clear recommendation with disclosure plan and root-cause fix.']
  },
  {
    id: 'ch-board-update-scqa',
    title: 'Rewrite a rambling board update using SCQA',
    difficulty: 1,
    track: 'communication',
    role: 'COO',
    scenario: `<p>Your <b>illustrative</b> B2B software company\'s board meets on Thursday. The CEO drafted this update and asks you to fix it. Board members will read it on their phones five minutes before the meeting.</p>
<p><i>"Hi all, busy quarter! The team shipped the new onboarding flow in July which was a big lift for engineering, and we also hired 4 people in sales and one in marketing. Pipeline looks healthy. Revenue for Q3 came in at $4.2M. We did see some churn which we think is related to a few things including onboarding changes and also maybe pricing, still digging into it, monthly churn was 2.4% vs 1.5% last quarter. Marketing ran a great event. We are thinking it might make sense to look at investing in an onboarding team and maybe pausing some hiring, around $300k, would love thoughts. Plan for Q3 was $4.8M. Also the office move is on track."</i></p>`,
    tasks: ['Identify the single most important message for the board.', 'Rewrite the update using Situation, Complication, Question, Answer (SCQA), with the answer first in the subject line.', 'Put the supporting numbers in a small table and make the ask explicit.', 'Cut or move anything that does not support the message.'],
    hints: ['Calculate the revenue miss as a percentage of plan.', 'A board update should end with a clear decision request, not "would love thoughts".', 'Ask: if they read only the first line, what must they know?'],
    modelAnswer: `<p><b>1. The core message.</b> Revenue missed plan because churn jumped after the onboarding change; we want approval for a $300k fix funded by delaying two sales hires.</p>
<p><b>2. Math.</b> Revenue $4.2M vs plan $4.8M: miss of $0.6M = 0.6 / 4.8 = <b>12.5% below plan</b>. Monthly churn rose from 1.5% to 2.4%, an increase of 0.9 points, or <b>60%</b> (0.9 / 1.5).</p>
<p><b>3. Rewrite.</b></p>
<p><b>Subject:</b> Q3 revenue 12.5% below plan due to churn spike; requesting approval of $300k onboarding fix</p>
<ul><li><b>Situation:</b> Q3 revenue was $4.2M against a plan of $4.8M.</li>
<li><b>Complication:</b> Monthly churn rose from 1.5% to 2.4% after we launched the new onboarding flow in July. Exit interviews point mainly to onboarding; pricing is a secondary hypothesis we are still testing.</li>
<li><b>Question:</b> How do we stop the churn without increasing burn?</li>
<li><b>Answer:</b> Create a 3-person onboarding team ($300k annualised), funded by delaying two planned sales hires to Q1. Target: churn back below 1.7% by end of Q4.</li></ul>
<table><thead><tr><th>Metric</th><th>Q2</th><th>Q3</th><th>Plan / target</th></tr></thead>
<tbody><tr><td>Revenue</td><td>n/a in draft</td><td>$4.2M</td><td>$4.8M</td></tr>
<tr><td>Monthly churn</td><td>1.5%</td><td>2.4%</td><td>&lt;1.7% by Q4 end</td></tr></tbody></table>
<p><b>Decision requested:</b> approve the reallocation of $300k on Thursday.</p>
<p><b>For information (appendix):</b> 5 hires made (4 sales, 1 marketing); marketing event; office move on track. "Pipeline looks healthy" is removed until it can be backed by a number (e.g., pipeline coverage vs next quarter\'s target).</p>
<p><b>4. Why this works.</b> The answer is in the first line, every number supports it, and the board knows exactly what it is being asked to decide.</p>`,
    rubric: ['Calculates the 12.5% miss and churn change correctly.', 'Puts the answer and decision request first.', 'Uses a clean SCQA structure with no unsupported claims.', 'Moves non-essential items to an appendix.']
  },
  {
    id: 'ch-career-decision-tree',
    title: 'Stay or jump? A career decision tree for a product leader',
    difficulty: 1,
    track: 'self-leadership',
    role: 'CPO',
    scenario: `<p>You are a VP of Product at a large company and have been offered the <b>Chief Product Officer</b> role at an <b>illustrative</b> Series B start-up. Look at a four-year horizon. All figures are pre-tax and simplified.</p>
<ul><li><b>Stay:</b> $250k a year. You estimate a 50% chance of promotion at the end of year 2, which would add $80k a year for years 3 and 4.</li>
<li><b>Jump:</b> $180k a year plus stock options. Your estimate of what the options are worth after four years: company fails (60%): $0; modest acquisition (30%): $1.0M; big outcome (10%): $5.0M.</li></ul>
<p>You have a mortgage, savings covering about 9 months of expenses, and you have said for years that you want to build something from the ground up.</p>`,
    tasks: ['Draw the decision tree and calculate the expected value of each path over four years.', 'Quantify the downside of the jump.', 'Name the non-financial factors and how you would weigh them.', 'Make a recommendation, including what you would negotiate or check first.'],
    hints: ['Expected value = sum of (probability x outcome) for each branch.', 'Compare the jump\'s most likely outcome, not just its average.', 'Consider the regret-minimisation test: which choice will you regret more at 80?'],
    modelAnswer: `<p><b>1. Tree and expected values (4 years).</b></p>
<table><thead><tr><th>Path</th><th>Branch</th><th>Probability</th><th>Outcome</th><th>Probability x outcome</th></tr></thead>
<tbody><tr><td>Stay</td><td>Salary 4 x $250k</td><td>100%</td><td>$1,000k</td><td>$1,000k</td></tr>
<tr><td>Stay</td><td>Promotion: 2 x $80k</td><td>50%</td><td>$160k</td><td>$80k</td></tr>
<tr><td><b>Stay total</b></td><td></td><td></td><td></td><td><b>$1,080k</b></td></tr>
<tr><td>Jump</td><td>Salary 4 x $180k</td><td>100%</td><td>$720k</td><td>$720k</td></tr>
<tr><td>Jump</td><td>Options: fail</td><td>60%</td><td>$0</td><td>$0</td></tr>
<tr><td>Jump</td><td>Options: modest exit</td><td>30%</td><td>$1,000k</td><td>$300k</td></tr>
<tr><td>Jump</td><td>Options: big exit</td><td>10%</td><td>$5,000k</td><td>$500k</td></tr>
<tr><td><b>Jump total</b></td><td></td><td></td><td></td><td><b>$1,520k</b></td></tr></tbody></table>
<p>The jump has a higher expected value by <b>$440k</b>. Break-even: the options need an expected value of only $360k (the $280k salary gap plus the $80k promotion EV) to match staying.</p>
<p><b>2. Downside.</b> The most likely single outcome (60%) is that the options are worth nothing: you would earn $720k versus $1,000–1,160k, i.e. <b>$280k–$440k less</b>. That is survivable only if your finances can absorb a lower salary and a possible job search if the start-up fails.</p>
<p><b>3. Non-financial factors.</b> Learning and scope (very high at the start-up), alignment with your stated goal of building something, family stability, workload, and the quality of the founders. Score each option 1–5 on the factors you weight most; be honest about risk tolerance rather than letting the big-exit branch seduce you.</p>
<p><b>4. Recommendation.</b> <span class="hl">Jump, conditionally.</span> First: (a) check the start-up\'s runway (aim for 18–24 months) and talk to its investors; (b) negotiate salary toward $200k or more options, and ask for a longer post-departure exercise window; (c) raise your savings buffer to 12 months before starting. If the runway is short or the founders do not pass your diligence, stay and revisit in a year.</p>`,
    rubric: ['Correct expected values for both paths ($1,080k vs $1,520k).', 'Explicitly quantifies the most likely downside.', 'Includes non-financial values and risk tolerance.', 'Recommendation with concrete conditions and negotiation points.']
  },

  /* =================== DIFFICULTY 2 =================== */
  {
    id: 'ch-ad-spend-regression',
    title: 'Does more ad spend really drive sales? Read the regression',
    difficulty: 2,
    track: 'data-decisions',
    role: 'CMO',
    scenario: `<p>You are CMO of an <b>illustrative</b> online home-goods retailer. Over the last 12 weeks your team increased weekly digital ad spend step by step from $20k to $75k. An analyst ran a simple linear regression of weekly sales on ad spend. The CEO now wants to jump to <b>$100k a week</b>, quoting the forecast from the model. Your gross margin is <b>40%</b> of sales.</p>`,
    data: { headers: ['Week', 'Ad spend ($k)', 'Sales ($k)'], rows: [['1', '20', '205'], ['2', '25', '236'], ['3', '30', '241'], ['4', '35', '268'], ['5', '40', '262'], ['6', '45', '298'], ['7', '50', '284'], ['8', '55', '315'], ['9', '60', '309'], ['10', '65', '342'], ['11', '70', '331'], ['12', '75', '356'], ['Regression output', 'Sales = 168.6 + 2.50 x Spend', 'R-squared 0.95; slope std error 0.19; residual std error 11.1']] },
    tasks: ['Interpret the slope, intercept and R-squared in plain language.', 'Forecast weekly sales at $80k and at $100k spend, and say how much you trust each.', 'Calculate the profit return on each extra $1 of ad spend.', 'Identify at least two reasons the regression may overstate the true effect.', 'Recommend what to do next.'],
    hints: ['Incremental gross profit per $1 of ads = slope x gross margin.', 'Look at how spend changed over time: could something else have grown alongside it?', 'Forecasts outside the range of the data (20–75) are extrapolations.'],
    modelAnswer: `<p><b>1. Interpretation.</b> Slope 2.50: each extra $1k of weekly ad spend is <i>associated with</i> about $2.5k more weekly sales. Intercept 168.6: the model\'s sales at zero spend (an extrapolation; do not take literally). R-squared 0.95: spend explains 95% of the week-to-week variation in sales in this sample. The slope is statistically strong (t = 2.50 / 0.19, about 13).</p>
<p><b>2. Forecasts.</b> At $80k: 168.6 + 2.50 x 80 = <b>$368.6k</b> (model gives $368.5k unrounded); a rough range of plus or minus 2 residual errors is about <b>$346k–$391k</b>. Only slightly beyond the data, so moderately reliable. At $100k: 168.6 + 2.50 x 100 = <b>$418.6k</b>, but this is well outside the tested range; returns from ads usually diminish as you saturate the audience, so treat it as an upper bound.</p>
<p><b>3. Profit return.</b> Each extra $1 of ads brings about $2.50 of sales x 40% margin = <b>$1.00 of gross profit</b>. So at the estimated slope, extra spend only <b>breaks even</b> before any other costs (fulfilment, returns). At a slope one standard error lower (2.31), it returns $0.92: a loss.</p>
<p><b>4. Why it may overstate.</b> (a) <b>Confounding with time:</b> spend rose every single week, so anything else that grew over the period (seasonality ahead of the holidays, a new product range, organic word of mouth) is mixed into the slope. (b) <b>Reverse causality/targeting:</b> the team may have raised spend when demand already looked strong. (c) Attribution: some sales would have happened anyway via brand search.</p>
<p><b>5. Recommendation.</b> <span class="hl">Do not jump to $100k.</span> Hold spend near $60k and run a <b>controlled experiment</b>: for 4–6 weeks, raise spend in a random half of regions (or turn ads off for a holdout group) and compare. Scale only if the measured incremental return is clearly above $1 of gross profit per $1 of ads after fulfilment costs.</p>`,
    rubric: ['Correctly interprets slope, intercept and R-squared (association, not causation).', 'Correct forecasts and flags extrapolation at $100k.', 'Computes the $1.00 gross-profit return per $1 and its implication.', 'Names confounding by time trend or similar biases.', 'Recommends an experiment with a clear decision rule.']
  },
  {
    id: 'ch-supplier-negotiation-prep',
    title: 'Negotiation prep sheet: the supplier wants a 9.5% price rise',
    difficulty: 2,
    track: 'negotiation',
    role: 'Founder',
    scenario: `<p>You run an <b>illustrative</b> direct-to-consumer kitchenware brand. Your contract manufacturer makes your best-selling product: <b>200,000 units a year</b> at <b>$4.20</b> per unit. At renewal they ask for <b>$4.60</b>, citing raw material costs. You have a quote from an alternative supplier and some intelligence about the incumbent.</p>`,
    data: { headers: ['Item', 'Value'], rows: [['Alternative supplier B: price', '$4.10 per unit'], ['Switching cost to B (tooling, testing, qualification)', '$60,000 one-time'], ['Extra expected defects/risk with a new supplier (your estimate)', 'about $0.05 per unit in year 1'], ['Incumbent\'s variable cost (industry estimate)', 'about $3.80 per unit'], ['If they lose you, incumbent can refill about half the capacity', 'at about $0.40 contribution per unit'], ['Incumbent\'s known priorities', 'Fill capacity, faster payment (you pay in 60 days today)']] },
    tasks: ['Calculate your BATNA and reservation (walk-away) price for a one-year deal.', 'Estimate the supplier\'s reservation price.', 'Identify the ZOPA and its value in dollars.', 'Set your opening anchor and target, and list tradeable issues.', 'Show how a two-year deal changes your BATNA.'],
    hints: ['Your walk-away = B\'s price + switching cost per unit + risk cost per unit.', 'The supplier walks away when the price leaves them worse off than their own alternative (refilling half the volume).', 'Things that are cheap for you but valuable for them make good trades.'],
    modelAnswer: `<p><b>1. Your BATNA (one year).</b> Switch to B: $4.10 + $60,000 / 200,000 ($0.30) + $0.05 risk = <b>$4.45 per unit</b>. This is your reservation price: pay the incumbent up to $4.45, never more.</p>
<p><b>2. Their reservation price.</b> If they lose you, they earn 100,000 x $0.40 = $40,000 contribution. To be no worse off keeping you: (p - $3.80) x 200,000 = $40,000, so p = $3.80 + $0.20 = <b>$4.00</b>.</p>
<p><b>3. ZOPA.</b> <b>$4.00 to $4.45</b>, width $0.45 x 200,000 = <b>$90,000 a year</b> of value to divide. Their ask of $4.60 sits above your walk-away; your current price of $4.20 sits inside the zone.</p>
<p><b>4. Plan.</b></p>
<table><thead><tr><th>Element</th><th>Number / approach</th></tr></thead>
<tbody><tr><td>Opening anchor</td><td>$4.05, justified by B\'s $4.10 quote and the volume you bring</td></tr>
<tr><td>Target</td><td>$4.15–$4.20 (keep most of the ZOPA)</td></tr>
<tr><td>Walk-away</td><td>$4.45 (one-year deal)</td></tr>
<tr><td>Trades to offer</td><td>Two-year commitment; payment in 30 days instead of 60; a rolling 6-month forecast to help their capacity planning</td></tr>
<tr><td>Trades to ask for</td><td>Price indexed to the main raw material (shares risk both ways); quality guarantees</td></tr></tbody></table>
<p><b>5. Two-year deal.</b> Switching cost spreads over 400,000 units ($0.15 per unit), so your BATNA becomes $4.10 + $0.15 + $0.05 = <b>$4.30</b>. A two-year deal is worth more to them (filled capacity) but your walk-away also falls, so ask for a lower price in exchange: about $4.10–$4.15 for two years.</p>
<p><b>Recommendation:</b> <span class="hl">Open at $4.05, aim to land at or below $4.20 on a two-year, index-linked deal with 30-day payment</span>, and start qualifying supplier B in parallel to make your BATNA real.</p>`,
    rubric: ['Correct BATNA/reservation price ($4.45) and supplier reservation ($4.00).', 'Identifies the ZOPA and its value ($90,000).', 'Sets anchor, target and walk-away consistently.', 'Proposes value-creating trades and analyses the two-year option.']
  },
  {
    id: 'ch-india-entity-gst',
    title: 'India set-up: which legal entity, and do we need GST registration?',
    difficulty: 2,
    track: 'india',
    role: 'Founder',
    scenario: `<p>Two co-founders in Bengaluru are turning a freelance software practice into a SaaS start-up. Year-1 projections: <b>₹18 lakh</b> of sales to Indian business clients and <b>₹30 lakh</b> of sales to US clients (paid in dollars). They plan to raise an angel round within 12 months and to give stock options (ESOPs) to early hires. Expected year-1 profit is about <b>₹10 lakh</b>.</p>
<p><b>All figures and rules below are illustrative simplifications for learning. Tax rates, thresholds and compliance costs change; always verify with a chartered accountant (CA) before acting.</b></p>`,
    data: { headers: ['Factor (illustrative)', 'Sole proprietorship', 'LLP', 'Private limited company'], rows: [['Can raise equity from angels/VCs', 'No', 'Difficult; investors rarely accept', 'Yes (standard)'], ['Can issue ESOPs', 'No', 'No (not in the usual form)', 'Yes'], ['Liability', 'Unlimited, personal', 'Limited', 'Limited'], ['Income tax on profit (approx.)', 'Owner\'s slab rates', 'About 31.2% (30% + 4% cess)', 'About 25.2% under the concessional regime (22% + 10% surcharge + 4% cess)'], ['Annual compliance cost (rough)', 'Low', 'Medium', 'Higher (audit, board meetings, filings)'], ['GST registration threshold for services (most states)', 'Aggregate turnover above ₹20 lakh', 'Same', 'Same']] },
    tasks: ['Choose an entity and justify it against the founders\' plans.', 'Compare income tax on ₹10 lakh profit for an LLP and a private limited company.', 'Work out whether GST registration is required, and how exports and domestic sales are treated.', 'List the first set-up steps in order.'],
    hints: ['Aggregate turnover for the GST threshold includes exports.', 'Exports of services are generally "zero-rated": they can be made without paying GST under a Letter of Undertaking (LUT).', 'Indian business clients usually want a GST invoice so they can claim input tax credit.'],
    modelAnswer: `<p><b>1. Entity.</b> <span class="hl">Private limited company.</span> The deciding factors are the founders\' own plans: angel and venture investors invest in private limited companies through shares, and ESOPs require a company. A proprietorship cannot raise equity and leaves the founders personally liable; an LLP has limited liability but does not fit equity fundraising or ESOPs. The higher compliance cost is the price of being investable.</p>
<p><b>2. Tax on ₹10 lakh profit (illustrative).</b></p>
<table><thead><tr><th>Entity</th><th>Effective rate</th><th>Tax</th></tr></thead>
<tbody><tr><td>LLP</td><td>30% x 1.04 = 31.2%</td><td>₹3.12 lakh</td></tr>
<tr><td>Pvt Ltd (concessional regime)</td><td>22% x 1.10 x 1.04 = 25.17%</td><td>₹2.52 lakh</td></tr></tbody></table>
<p>The company pays about ₹0.6 lakh less at this profit level, but dividends are taxed again in shareholders\' hands, whereas an LLP\'s profit share is generally not taxed again for partners. For a start-up reinvesting profits, this is secondary to fundraising fit.</p>
<p><b>3. GST.</b> Aggregate turnover = ₹18 lakh + ₹30 lakh = <b>₹48 lakh</b>, above the ₹20 lakh threshold, so <b>registration is required</b> (exports count toward aggregate turnover). Domestic SaaS sales: charge GST (18% for most software services) = 18% x ₹18 lakh = <b>₹3.24 lakh</b> collected from clients, who can usually claim it back as input tax credit. Exports: zero-rated; file an <b>LUT</b> to export without paying IGST, and claim credit or a refund of GST paid on inputs (cloud hosting, software, co-working). Registering also makes you credible with Indian B2B buyers.</p>
<p><b>4. Steps.</b> (1) Incorporate the private limited company (name approval, directors\' IDs, PAN/TAN); (2) a founders\' agreement with share vesting; (3) bank account and a foreign-currency receipt process for export income; (4) GST registration, then file the LUT before invoicing US clients; (5) consider DPIIT start-up recognition; (6) adopt an ESOP plan before the first hires; (7) set up monthly bookkeeping and a CA for GST returns and annual filings. <b>Verify every rate, threshold and step with a CA.</b></p>`,
    rubric: ['Chooses Pvt Ltd for clear, plan-based reasons (equity, ESOPs, liability).', 'Correct illustrative tax comparison.', 'Correct GST threshold logic including exports, LUT and domestic GST.', 'Ordered set-up steps and an explicit note to verify with a CA.']
  },
  {
    id: 'ch-bakery-carbon-baseline',
    title: 'Build a Scope 1, 2 and 3 baseline and a 2030 reduction plan',
    difficulty: 2,
    track: 'esg',
    role: 'COO',
    scenario: `<p>You are COO of an <b>illustrative</b> regional bakery chain (central bakery, 25 shops, a delivery van fleet). A major supermarket customer now asks every supplier for a greenhouse gas baseline and a credible reduction plan. Your team gathered last year\'s activity data. <b>Emission factors are illustrative</b>; in practice use your country\'s official factors.</p>`,
    data: { headers: ['Activity (last year)', 'Amount', 'Emission factor (illustrative)'], rows: [['Natural gas for ovens', '500,000 kWh', '0.18 kg CO2e per kWh'], ['Diesel for delivery vans', '60,000 litres', '2.7 kg CO2e per litre'], ['Refrigerant leaked from chillers', '20 kg', '3,900 kg CO2e per kg (high-GWP gas)'], ['Grid electricity', '2,000,000 kWh', '0.40 kg CO2e per kWh'], ['Purchased ingredients and packaging', '$6,000,000 spend', '0.5 kg CO2e per $'], ['Inbound freight (by suppliers)', '1,000,000 tonne-km', '0.1 kg CO2e per tonne-km'], ['Employee commuting (survey estimate)', 'n/a', '300 tonnes CO2e'], ['Waste to landfill', 'n/a', '50 tonnes CO2e']] },
    tasks: ['Classify each line into Scope 1, 2 or 3 and calculate the baseline in tonnes.', 'Show each scope\'s share of the total.', 'Build a 2030 plan for Scope 1 and 2 that meets a 42% cut, using the options listed in the hints, with cost per tonne.', 'Propose how to tackle Scope 3.'],
    hints: ['1,000 kg = 1 tonne.', 'Scope 1 = direct (fuel, refrigerants); Scope 2 = purchased electricity; Scope 3 = everything else in the value chain.', 'Options: LED lighting and controls cut electricity 10% (annualised cost $10k, saves $24k of power); renewable electricity tariff for 60% of the remaining load (+$12k a year); refrigerant leak fixes and low-GWP gas (-70 t, $7k a year); electrify half the vans (saves half the diesel, adds 90,000 kWh grid power, +$15k a year).', 'Do the efficiency step before the renewable step: order changes the numbers.'],
    modelAnswer: `<p><b>1. Baseline (tonnes CO2e).</b></p>
<table><thead><tr><th>Source</th><th>Scope</th><th>Calculation</th><th>Tonnes</th></tr></thead>
<tbody><tr><td>Natural gas</td><td>1</td><td>500,000 x 0.18 / 1,000</td><td>90</td></tr>
<tr><td>Diesel</td><td>1</td><td>60,000 x 2.7 / 1,000</td><td>162</td></tr>
<tr><td>Refrigerant</td><td>1</td><td>20 x 3,900 / 1,000</td><td>78</td></tr>
<tr><td><b>Scope 1</b></td><td></td><td></td><td><b>330 (7.2%)</b></td></tr>
<tr><td>Electricity</td><td>2</td><td>2,000,000 x 0.40 / 1,000</td><td><b>800 (17.5%)</b></td></tr>
<tr><td>Ingredients and packaging</td><td>3</td><td>6,000,000 x 0.5 / 1,000</td><td>3,000</td></tr>
<tr><td>Freight</td><td>3</td><td>1,000,000 x 0.1 / 1,000</td><td>100</td></tr>
<tr><td>Commuting + waste</td><td>3</td><td>300 + 50</td><td>350</td></tr>
<tr><td><b>Scope 3</b></td><td></td><td></td><td><b>3,450 (75.3%)</b></td></tr>
<tr><td><b>Total</b></td><td></td><td></td><td><b>4,580</b></td></tr></tbody></table>
<p><b>2. Scope 1+2 plan.</b> Baseline 1,130 t; a 42% cut needs <b>about 475 t</b>.</p>
<table><thead><tr><th>Initiative</th><th>Tonnes saved</th><th>Net annual cost</th><th>Cost per tonne</th></tr></thead>
<tbody><tr><td>LED + controls (-200,000 kWh x 0.40)</td><td>80</td><td>$10k - $24k = -$14k (saves money)</td><td>-$175</td></tr>
<tr><td>Renewable tariff on 60% of remaining 1,800,000 kWh (1,080,000 x 0.40)</td><td>432</td><td>$12k</td><td>about $28</td></tr>
<tr><td>Refrigerant fixes + low-GWP gas</td><td>70</td><td>$7k</td><td>$100</td></tr>
<tr><td>Electrify half the vans: 81 t diesel saved - 36 t new grid power (90,000 x 0.40)</td><td>45</td><td>$15k</td><td>about $333</td></tr>
<tr><td><b>Total</b></td><td><b>627 (55% of 1,130)</b></td><td><b>$20k</b></td><td></td></tr></tbody></table>
<p>Note the ordering effect: the renewable tariff covers 1,800,000 kWh after LEDs, so it saves 432 t, not 480 t. The plan beats the 42% target with margin for slippage. If budget is tight, the first three initiatives alone give 582 t (52%) at a net cost of $5k a year.</p>
<p><b>3. Scope 3 (75% of the total).</b> Ingredients dominate (3,000 t). Engage the suppliers covering roughly 70% of ingredient spend (flour, dairy, packaging) to share real product-level data and set their own targets; shift spend-based estimates to supplier-specific data over two years; test lower-impact recipes and packaging; cut food waste (which also saves money).</p>
<p><b>Recommendation:</b> <span class="hl">Publish the 4,580 t baseline, commit to a 42% Scope 1+2 cut by 2030 using all four initiatives (about $20k a year net), and launch a supplier engagement programme for Scope 3</span>, reporting progress to the supermarket every year.</p>`,
    rubric: ['Correct scope classification and baseline (330 / 800 / 3,450 = 4,580 t).', 'Correct shares by scope.', 'Plan meets the 42% target with tonnes and cost per tonne, handling the ordering effect.', 'Credible Scope 3 approach focused on purchased goods.']
  },

  /* =================== DIFFICULTY 3 =================== */
  {
    id: 'ch-lbo-returns',
    title: 'LBO model: does this buyout clear a 20% IRR, and how much debt is too much?',
    difficulty: 3,
    track: 'corp-finance',
    role: 'Advisor',
    scenario: `<p>You advise a private equity fund looking at an <b>illustrative</b> specialty-retail business with EBITDA of <b>$50M</b>. The seller wants <b>8.0x EBITDA</b>. The fund\'s hurdle is a <b>20% IRR</b> over five years. Assume (to keep it simple): no fees; capital expenditure equals depreciation at <b>$8M</b> a year; no working-capital change; tax at <b>25%</b> of (EBITDA - depreciation - interest); interest at <b>8%</b> on the opening debt balance each year; all free cash flow repays debt.</p>
<p>The lead partner proposes <b>5.0x</b> debt. A banker is offering <b>6.5x</b> "to juice the returns". Base case: EBITDA grows 5% a year; exit at 8.0x in year 5. Downside: EBITDA drops to $40M in year 1 and stays flat; exit at 7.0x.</p>`,
    tasks: ['Calculate entry enterprise value, debt and equity at 5.0x.', 'Project debt paydown for five years in the base case.', 'Calculate exit equity value, MOIC and IRR (base, and at a 7.0x exit).', 'Break the base-case equity gain into EBITDA growth, debt paydown and multiple change.', 'Compare 5.0x vs 6.5x leverage in base and downside cases and recommend.'],
    hints: ['Free cash flow = EBITDA - capex - interest - tax.', 'MOIC = exit equity / entry equity; IRR = MOIC^(1/5) - 1.', 'Exit equity = exit EV - remaining debt.'],
    modelAnswer: `<p><b>1. Entry.</b> EV = 8.0 x $50M = <b>$400M</b>. Debt = 5.0 x $50M = <b>$250M</b>. Equity = <b>$150M</b>.</p>
<p><b>2. Base case ($M).</b></p>
<table><thead><tr><th>Year</th><th>EBITDA</th><th>Interest</th><th>Tax</th><th>FCF (repays debt)</th><th>Closing debt</th></tr></thead>
<tbody><tr><td>1</td><td>52.5</td><td>20.0</td><td>6.1</td><td>18.4</td><td>231.6</td></tr>
<tr><td>2</td><td>55.1</td><td>18.5</td><td>7.2</td><td>21.5</td><td>210.2</td></tr>
<tr><td>3</td><td>57.9</td><td>16.8</td><td>8.3</td><td>24.8</td><td>185.4</td></tr>
<tr><td>4</td><td>60.8</td><td>14.8</td><td>9.5</td><td>28.5</td><td>156.9</td></tr>
<tr><td>5</td><td>63.8</td><td>12.6</td><td>10.8</td><td>32.5</td><td>124.5</td></tr></tbody></table>
<p>Check year 1: tax = 25% x (52.5 - 8 - 20) = 6.1; FCF = 52.5 - 8 - 20 - 6.1 = 18.4.</p>
<p><b>3. Returns.</b> Exit at 8.0x: EV = 8.0 x 63.8 = $510.5M; equity = 510.5 - 124.5 = <b>$386.0M</b>; MOIC = 386.0 / 150 = <b>2.57x</b>; IRR = 2.57^(0.2) - 1 = <b>20.8%</b>: just clears the hurdle. Exit at 7.0x: EV $446.7M, equity $322.2M, MOIC 2.15x, IRR <b>16.5%</b>: misses it.</p>
<p><b>4. Value bridge.</b> Gain = 386.0 - 150 = $236.0M = EBITDA growth (13.8 x 8.0 = <b>$110.5M</b>) + debt paydown (250 - 124.5 = <b>$125.5M</b>) + multiple change (<b>$0</b>). More than half the return comes from deleveraging, which only works if cash flow holds up.</p>
<p><b>5. Leverage comparison.</b></p>
<table><thead><tr><th>Case</th><th>5.0x debt ($150M equity)</th><th>6.5x debt ($75M equity)</th></tr></thead>
<tbody><tr><td>Base, exit 8.0x</td><td>$386M equity, 2.57x, 20.8%</td><td>$286M equity, 3.81x, 30.7%</td></tr>
<tr><td>Downside (EBITDA $40M, exit 7.0x)</td><td>$81M equity, 0.54x, -11.7%</td><td>Debt $300M exceeds EV $280M: <b>equity wiped out</b></td></tr>
<tr><td>Year-1 interest cover in downside (EBITDA / interest)</td><td>40 / 20 = 2.0x</td><td>40 / 26 = 1.5x</td></tr>
<tr><td>Year-1 pre-tax cash after capex and interest, downside</td><td>$12M</td><td>$6M</td></tr></tbody></table>
<p><b>Recommendation.</b> <span class="hl">Reject 6.5x.</span> It raises the base-case IRR to about 31% but leaves almost no cushion: a modest downturn wipes out the equity and starves the business of cash to invest (the Toys "R" Us lesson). At 5.0x the deal only just clears 20% in the base case and fails if the exit multiple slips, so <b>bid no more than about 7.5x</b>, or proceed at 8.0x only with a credible plan for EBITDA growth above 5% and covenant headroom. Walk away if the seller insists on 8.0x with no improvement in the plan.</p>`,
    rubric: ['Correct entry structure and year-by-year debt paydown.', 'Correct MOIC and IRR in base and 7.0x exit cases.', 'Value bridge splitting growth, deleveraging and multiple.', 'Stress-tests both leverage levels with coverage and downside equity.', 'Clear recommendation with a price or leverage limit.']
  },
  {
    id: 'ch-fx-hedge-euro',
    title: 'A €5 million receivable in six months: hedge it, and how?',
    difficulty: 3,
    track: 'global',
    role: 'CFO',
    scenario: `<p>You are CFO of an <b>illustrative</b> Indian engineering-services exporter. A German client will pay <b>€5,000,000</b> in six months. Your costs for the project are in rupees: <b>₹430 million</b>. The board wants to know whether to hedge. <b>Market rates are illustrative.</b></p>`,
    data: { headers: ['Market input', 'Value'], rows: [['Spot rate today', '₹90.00 per €'], ['Rupee interest rate', '6.5% a year'], ['Euro interest rate', '2.5% a year'], ['6-month euro put option (right to sell € at ₹90.00)', 'Premium ₹1.20 per €, paid today'], ['Scenarios for spot in 6 months', '₹84 / ₹90 / ₹96 per €']] },
    tasks: ['Calculate the 6-month forward rate using interest rate parity.', 'Calculate rupee proceeds and project profit under no hedge, a forward hedge and an option hedge, in each scenario.', 'Explain the trade-offs between the three.', 'Recommend a hedging policy for this receivable.'],
    hints: ['Forward = spot x (1 + rupee rate x 0.5) / (1 + euro rate x 0.5).', 'Option proceeds per € = max(₹90, spot) - ₹1.20 premium (ignore interest on the premium).', 'Profit = rupee proceeds - ₹430M of costs.'],
    modelAnswer: `<p><b>1. Forward rate.</b> 90.00 x (1 + 0.0325) / (1 + 0.0125) = 90.00 x 1.0325 / 1.0125 = <b>₹91.78 per €</b>. The euro trades at a forward premium because rupee interest rates are higher.</p>
<p><b>2. Outcomes (₹ million).</b></p>
<table><thead><tr><th>Spot in 6 months</th><th>No hedge</th><th>Forward (₹91.78)</th><th>Put option (floor ₹88.80)</th></tr></thead>
<tbody><tr><td>₹84</td><td>420.0 (loss 10.0)</td><td>458.9 (profit 28.9)</td><td>444.0 (profit 14.0)</td></tr>
<tr><td>₹90</td><td>450.0 (profit 20.0)</td><td>458.9 (profit 28.9)</td><td>444.0 (profit 14.0)</td></tr>
<tr><td>₹96</td><td>480.0 (profit 50.0)</td><td>458.9 (profit 28.9)</td><td>474.0 (profit 44.0)</td></tr></tbody></table>
<p>Checks: forward 5.0M x 91.78 = ₹458.9M; option at ₹84 or ₹90: 5.0M x (90 - 1.20) = ₹444.0M; at ₹96: 5.0M x (96 - 1.20) = ₹474.0M.</p>
<p><b>3. Trade-offs.</b> <i>No hedge:</i> a speculative bet; a 6.7% fall in the euro turns a profitable project into a loss. <i>Forward:</i> locks in the best certain result (₹28.9M profit) at no upfront cost, but gives up upside and is a binding obligation if the client pays late or less. <i>Option:</i> guarantees at least ₹14.0M profit and keeps most of the upside, but costs ₹6.0M of premium, which lowers profit in every scenario where the option is not needed.</p>
<p><b>4. Recommendation.</b> <span class="hl">Hedge about 75% with a forward and 25% with a put option.</span> Blended proceeds: ₹455.2M at ₹84 and ₹462.7M at ₹96, so profit is protected (at least about ₹25M) while keeping some upside and flexibility if the payment timing slips. Adopt a standing policy: hedge confirmed foreign-currency receivables in a band (for example 50–100%), never speculate, and match the hedge timing to the invoice terms. Also explore natural hedges, such as buying some euro-priced inputs.</p>`,
    rubric: ['Correct forward rate via interest rate parity (₹91.78).', 'Correct proceeds and profit for all three strategies in all scenarios.', 'Explains certainty vs upside vs cost trade-offs, including counterparty and timing risk.', 'Recommends a specific hedge ratio and a policy.']
  },
  {
    id: 'ch-three-horizons-portfolio',
    title: 'Allocate a $20M innovation budget across three horizons',
    difficulty: 3,
    track: 'innovation',
    role: 'CTO',
    scenario: `<p>You are CTO of an <b>illustrative</b> mid-size software company. Next year\'s product and R&amp;D budget is <b>$20M</b>, of which <b>$5M</b> is non-negotiable "keep the lights on" work (security, compliance, infrastructure), counted in Horizon 1. Last year almost all spend went to the core product. The board has asked for a deliberate mix across three horizons: H1 (extend the core), H2 (emerging adjacent businesses) and H3 (options on the future). The project list is below; payoff is the estimated net present value if the project succeeds.</p>`,
    data: { headers: ['Project', 'Horizon', 'Cost ($M)', 'Probability of success', 'Payoff if success ($M)'], rows: [['A: Checkout redesign', 'H1', '3', '80%', '9'], ['B: Platform reliability programme', 'H1', '4', '90%', '8'], ['C: New pricing tiers', 'H1', '2', '70%', '6'], ['D: Feature parity a large customer demands', 'H1', '5', '90%', '5'], ['E: Product for small businesses', 'H2', '4', '40%', '20'], ['F: New geography launch', 'H2', '3', '35%', '15'], ['G: Partner API programme', 'H2', '2', '50%', '7'], ['H: AI agent product (stage 1 of 3)', 'H3', '2', '15%', '60'], ['I: Hardware device', 'H3', '4', '10%', '30'], ['J: Blockchain loyalty pilot', 'H3', '1.5', '5%', '20']] },
    tasks: ['Calculate the expected value (EV) and EV per $ for each project.', 'Choose a portfolio within the $15M discretionary budget.', 'Show the resulting horizon mix and compare it with a 70/20/10 guideline.', 'Explain how to manage the H3 bets and what EV alone misses.', 'Recommend the portfolio and the governance around it.'],
    hints: ['EV = probability x payoff - cost.', 'Rank by EV per $ when budget is the constraint, then sanity-check the horizon mix.', 'A staged H3 project is an option: you can stop after stage 1.'],
    modelAnswer: `<p><b>1. Expected values ($M).</b></p>
<table><thead><tr><th>Project</th><th>H</th><th>Cost</th><th>p x payoff</th><th>EV</th><th>EV per $</th></tr></thead>
<tbody><tr><td>H: AI agent stage 1</td><td>3</td><td>2</td><td>0.15 x 60 = 9.0</td><td>7.0</td><td>3.50</td></tr>
<tr><td>A: Checkout</td><td>1</td><td>3</td><td>7.2</td><td>4.2</td><td>1.40</td></tr>
<tr><td>C: Pricing tiers</td><td>1</td><td>2</td><td>4.2</td><td>2.2</td><td>1.10</td></tr>
<tr><td>E: SMB product</td><td>2</td><td>4</td><td>8.0</td><td>4.0</td><td>1.00</td></tr>
<tr><td>B: Reliability</td><td>1</td><td>4</td><td>7.2</td><td>3.2</td><td>0.80</td></tr>
<tr><td>F: New geography</td><td>2</td><td>3</td><td>5.25</td><td>2.25</td><td>0.75</td></tr>
<tr><td>G: Partner API</td><td>2</td><td>2</td><td>3.5</td><td>1.5</td><td>0.75</td></tr>
<tr><td>D: Feature parity</td><td>1</td><td>5</td><td>4.5</td><td>-0.5</td><td>-0.10</td></tr>
<tr><td>J: Blockchain pilot</td><td>3</td><td>1.5</td><td>1.0</td><td>-0.5</td><td>-0.33</td></tr>
<tr><td>I: Hardware</td><td>3</td><td>4</td><td>3.0</td><td>-1.0</td><td>-0.25</td></tr></tbody></table>
<p><b>2. Portfolio.</b> Fill $15M in EV-per-$ order: H ($2M) + A ($3M) + C ($2M) + E ($4M) + B ($4M) = <b>$15M</b>, total EV <b>$20.6M</b>. F and G are positive but do not fit; D, I and J destroy value on these estimates.</p>
<p><b>3. Horizon mix.</b> H1 = $5M lights-on + A + B + C ($9M) = <b>$14M (70%)</b>; H2 = E = <b>$4M (20%)</b>; H3 = H = <b>$2M (10%)</b>. The value-ranked portfolio lands exactly on 70/20/10, a good sign the guideline and the numbers agree here.</p>
<p><b>4. Managing H3 and the limits of EV.</b> Fund only stage 1 of the AI agent with clear kill criteria (e.g., 10 paying design partners and usage targets within 6 months) before releasing stage 2: staging is what makes a 15% bet worth taking. EV alone misses: correlation between projects, strategic value (D may protect a key customer: negotiate scope or charge for it rather than build it free), capability building, uncertainty in the estimates themselves (treat p and payoff as ranges), and timing of payoffs.</p>
<p><b>5. Recommendation.</b> <span class="hl">Fund A, B, C, E and stage 1 of H ($20M including $5M lights-on, 70/20/10).</span> Decline D unless the customer co-funds it; decline I and J. Keep F and G as first in line if any project is killed or comes in under budget. Run quarterly portfolio reviews with separate metrics per horizon (H1: revenue and margin; H2: growth and unit economics; H3: learning milestones), and protect H2/H3 teams from being raided for H1 emergencies.</p>`,
    rubric: ['Correct EV and EV per $ for all ten projects.', 'Builds a portfolio within budget with total EV.', 'Shows horizon mix against 70/20/10.', 'Explains staging/kill criteria for H3 and what EV misses (correlation, strategy, uncertainty).', 'Clear recommendation with governance.']
  }

]);
