/* MBA Studio — Challenge arena: 30 case-interview and operator problems */
MBA.addChallenges([

  /* =================== DIFFICULTY 1 =================== */
  {
    id: 'ch-cafe-breakeven',
    title: 'Is the new café ever going to break even?',
    difficulty: 1,
    track: 'business-101',
    role: 'Founder',
    scenario: `<p>You opened a small café six months ago. It is open 30 days a month and serves about <b>95 customers a day</b>. The average ticket is <b>$8.00</b>, and the variable cost per ticket (ingredients, cups, card fees) is <b>$2.80</b>. Your monthly fixed costs are below. You are losing money and want to know how far you are from break-even and which fix to try first.</p>
<p>Two ideas: (A) raise the average price by $0.50 (you expect to lose about 5% of customers), or (B) train staff to offer a pastry; you expect 30% of customers to add one at $3.50 (cost $1.20).</p>`,
    data: { headers: ['Fixed cost (per month)', 'Amount'], rows: [['Rent', '$6,500'], ['Salaried staff', '$8,400'], ['Utilities', '$1,100'], ['Loan repayment', '$1,200'], ['Other (insurance, software)', '$800'], ['Total', '$18,000']] },
    tasks: ['Calculate contribution per ticket and break-even customers per day.', 'Calculate the current monthly profit or loss.', 'Evaluate ideas A, B and both together.', 'Recommend what to do.'],
    hints: ['Contribution = price minus variable cost.', 'Break-even units = fixed costs divided by contribution per unit.', 'For the pastry idea, add the extra contribution per average customer: 30% x ($3.50 - $1.20).'],
    modelAnswer: `<p><b>1. Structure.</b> Profit = (customers x contribution per customer) - fixed costs.</p>
<p><b>2. Today.</b> Contribution per ticket = $8.00 - $2.80 = <b>$5.20</b>. Break-even = $18,000 / $5.20 = 3,462 tickets/month = <b>about 116 customers a day</b>. Current: 95 x 30 = 2,850 tickets x $5.20 = $14,820, so a <b>loss of $3,180/month</b>.</p>
<p><b>3. Options.</b></p>
<table><thead><tr><th>Option</th><th>Contribution / customer</th><th>Customers / month</th><th>Monthly profit</th><th>Break-even / day</th></tr></thead>
<tbody><tr><td>Today</td><td>$5.20</td><td>2,850</td><td>-$3,180</td><td>116</td></tr>
<tr><td>A: +$0.50 price, -5% customers</td><td>$5.70</td><td>2,708</td><td>-$2,567</td><td>105</td></tr>
<tr><td>B: pastry attach (+0.30 x $2.30 = +$0.69)</td><td>$5.89</td><td>2,850</td><td>-$1,214</td><td>102</td></tr>
<tr><td>A + B</td><td>$6.39</td><td>2,708</td><td>-$699</td><td>94</td></tr></tbody></table>
<p><b>4. Recommendation.</b> Start with <span class="hl">B (pastry attach)</span>: it is the biggest single improvement with no risk of losing customers. Then test A for two weeks and track daily customers. Together they cut the gap to about $700/month; close the rest with roughly <b>3–4 more customers a day</b> (e.g., a morning loyalty card or office pre-orders) or a rent renegotiation. Next steps: track attach rate daily, review weekly, and set a 3-month deadline to reach break-even.</p>`,
    rubric: ['Calculates contribution and break-even correctly (about 116/day).', 'Quantifies current loss ($3,180/month).', 'Compares options with numbers, including the combination.', 'Gives a clear, sequenced recommendation with a metric to track.']
  },
  {
    id: 'ch-backpack-sizing',
    title: 'Guesstimate: the school backpack market in India',
    difficulty: 1,
    track: 'ideation',
    role: 'Advisor',
    scenario: `<p>A founder wants to launch a durable, mid-priced school backpack brand in India and asks you: <b>"How big is the market each year, in rupees?"</b> There is no report to buy. Build a structured estimate in 10 minutes, state your assumptions, and sanity-check the result.</p>`,
    tasks: ['Choose an approach (top-down from population or bottom-up from schools).', 'Estimate number of bags sold per year.', 'Estimate average price and total market value.', 'Sanity-check and say what the founder\'s realistic target segment is.'],
    hints: ['Start with India\'s population (about 1.4 billion).', 'What share is school-age (roughly 6–17)? How many are enrolled?', 'How often is a bag replaced? Use a price mix, not one price.'],
    modelAnswer: `<p><b>Approach: top-down (demand side).</b> Bags per year = school-going children / replacement cycle; value = bags x average price.</p>
<ol><li>Population about <b>1.4 billion</b>.</li>
<li>Ages 6–17 are about <b>20%</b> = 280 million.</li>
<li>Enrolled in school about <b>90%</b> = 252 million students.</li>
<li>A bag is replaced every <b>1.5 years</b> on average = 252 / 1.5 = <b>168 million bags/year</b>.</li>
<li>Price mix: 60% budget at ₹300, 30% mid at ₹700, 10% premium at ₹1,500. Weighted average = 180 + 210 + 150 = <b>₹540</b>.</li>
<li>Market = 168 million x ₹540 = ₹90.7 billion = <span class="hl">about ₹9,000 crore a year (about $1.1 billion)</span>.</li></ol>
<p><b>Sanity check:</b> that is about ₹360 per student per year (₹540 / 1.5), which feels plausible for a household that buys a bag every year or two. A supply-side check would be to estimate the top brands\' revenue plus the unbranded share.</p>
<p><b>So what:</b> the founder\'s <b>mid + premium segment</b> is 40% of bags but (₹210 + ₹150) / ₹540 = 67% of value, about <b>₹6,000 crore</b>, concentrated in cities. Recommendation: target urban private-school parents first, test online and school-partnership channels, and refine the estimate with 20 parent interviews on replacement frequency and price.</p>`,
    rubric: ['Clear, logical structure with stated assumptions.', 'Arithmetic is correct and units are consistent.', 'Uses a price mix rather than one price.', 'Includes a sanity check and a "so what" for the founder.']
  },
  {
    id: 'ch-candle-pricing',
    title: 'Pricing a premium soy candle',
    difficulty: 1,
    track: 'pricing',
    role: 'CMO',
    scenario: `<p>You are launching a hand-poured soy candle sold on your own website and to gift shops. Unit costs: wax and fragrance $3.20, glass jar $1.80, label and box $1.00 (total <b>$6.00</b>). Shipping and payment for a website order average <b>$4.00</b> per candle. Gift shops buy at <b>50% of retail price</b> and you ship to them in bulk (about $0.50 per candle).</p>
<p>Mass-market candles sell for $12–18; premium boutique brands sell for $32–45. In a survey of 150 target customers the median willingness to pay for your candle was <b>$30</b>.</p>`,
    tasks: ['Compute a cost-plus price (2.5x unit cost) and its margin.', 'Propose a value-based retail price and compute contribution on the website and via shops.', 'Suggest one way to increase order value.'],
    hints: ['Value-based pricing starts from what customers will pay and competitor anchors, not from cost.', 'Wholesale price = 50% of retail.'],
    modelAnswer: `<p><b>Cost-plus:</b> 2.5 x $6.00 = $15. Website contribution = $15 - $6 - $4 = <b>$5 (33%)</b>. It positions you with mass-market candles and leaves money on the table versus a $30 willingness to pay.</p>
<p><b>Value-based:</b> anchor just below premium boutique brands and the survey median: <span class="hl">$28 retail</span>.</p>
<ul><li>Website: $28 - $6 - $4 = <b>$18 contribution (64%)</b>.</li>
<li>Gift shops: wholesale $14 - $6 - $0.50 = <b>$7.50 contribution (54%)</b>.</li></ul>
<p><b>Increase order value:</b> a 3-candle bundle at $75 (saves the customer $9). Cost = 3 x $6 + about $6 shipping = $24, so contribution = <b>$51</b> versus $18 for a single candle. Shipping is spread over more units.</p>
<p><b>Recommendation:</b> launch at $28 with a $75 bundle and a $32 limited-edition scent to test the top of the range. Next steps: run the website at $28 vs $32 for 4 weeks, track conversion and bundle uptake, and keep the retail price consistent across shops so they do not undercut you.</p>`,
    rubric: ['Calculates cost-plus price and shows its weakness.', 'Sets a value-based price justified by survey and competitors.', 'Computes channel contributions correctly.', 'Proposes an order-value lever with numbers.']
  },
  {
    id: 'ch-funnel-leak',
    title: 'Find the leak in the e-commerce funnel',
    difficulty: 1,
    track: 'marketing',
    role: 'CMO',
    scenario: `<p>Your online store spent <b>$15,000</b> on ads last month. Average order value is <b>$60</b>. The CEO says "ads are too expensive, cut the budget". You pull the funnel and compare it with benchmarks for your category.</p>`,
    data: { headers: ['Stage', 'Count', 'Step conversion', 'Benchmark'], rows: [['Ad impressions', '2,000,000', '-', '-'], ['Clicks', '30,000', '1.5% CTR', '1.0–2.0%'], ['Landing page visits', '27,000', '90%', '85–95%'], ['Add to cart', '1,620', '6%', '6–8%'], ['Checkout started', '810', '50%', '55–65%'], ['Purchases', '324', '40%', '60–75%']] },
    tasks: ['Calculate CAC, revenue and return on ad spend (ROAS).', 'Identify the biggest leak versus benchmark.', 'Estimate the impact of fixing it.', 'Respond to the CEO.'],
    hints: ['CAC = ad spend / purchases.', 'Compare each step to its benchmark, not just the absolute numbers.'],
    modelAnswer: `<p><b>Current:</b> CAC = $15,000 / 324 = <b>$46.30</b>. Revenue = 324 x $60 = <b>$19,440</b>. ROAS = 19,440 / 15,000 = <b>1.30x</b>.</p>
<p><b>Diagnosis:</b> top-of-funnel steps are at or above benchmark. The biggest gap is <span class="hl">checkout to purchase: 40% vs 60–75%</span>. Cart to checkout (50% vs 55–65%) is a smaller second leak. The problem is not the ads; it is the checkout.</p>
<p><b>Impact:</b> lifting checkout completion to 65% gives 810 x 0.65 = about <b>527 purchases</b>. CAC = $15,000 / 527 = <b>$28.50</b>; revenue = about <b>$31,600</b>; ROAS about 2.1x, with no extra ad spend.</p>
<p><b>Likely causes to test:</b> surprise shipping costs at the last step, forced account creation, few payment options (wallets, UPI, buy-now-pay-later), slow mobile pages, lack of trust signals.</p>
<p><b>Answer to the CEO:</b> do not cut ads yet. Fix checkout first: show shipping costs early, add guest checkout and more payment options, and A/B test. Review after 4 weeks; if CAC is still above target, then reallocate spend.</p>`,
    rubric: ['Computes CAC, revenue and ROAS correctly.', 'Compares to benchmarks to find the true bottleneck.', 'Quantifies the upside of the fix.', 'Gives concrete hypotheses and a clear reply to the CEO.']
  },
  {
    id: 'ch-read-pnl',
    title: 'Revenue up 20%, profit halved: explain it to the board',
    difficulty: 1,
    track: 'finance',
    role: 'CFO',
    scenario: `<p>You are the new CFO of a kitchenware company. The board asks why operating profit fell even though revenue grew 20%. Here are the last two years (in $ millions).</p>`,
    data: { headers: ['Line', '2023', '2024'], rows: [['Revenue', '10.0', '12.0'], ['Cost of goods sold', '6.0', '7.8'], ['Gross profit', '4.0', '4.2'], ['Sales and marketing', '1.5', '2.0'], ['General and admin', '1.0', '1.1'], ['R&D', '0.5', '0.6'], ['Operating profit', '1.0', '0.5']] },
    tasks: ['Calculate gross margin and operating margin for both years.', 'Quantify how much of the profit drop comes from gross margin vs operating costs.', 'Propose what to investigate next.'],
    hints: ['Gross margin = gross profit / revenue.', 'What would gross profit have been at last year\'s margin?'],
    modelAnswer: `<p><b>Margins:</b> gross margin fell from 40% (4.0/10.0) to <b>35%</b> (4.2/12.0). Operating margin fell from 10% to <b>4.2%</b> (0.5/12.0).</p>
<p><b>Bridge (profit fell by $0.5M):</b></p>
<ul><li>Volume effect: at the old 40% margin, $2.0M extra revenue would add $0.8M gross profit.</li>
<li>Margin effect: the 5-point drop on $12.0M revenue cost <b>$0.6M</b> (4.8 - 4.2).</li>
<li>Operating costs rose $0.7M (3.0 to 3.7): S&M +$0.5M, G&A +$0.1M, R&D +$0.1M.</li>
<li>Check: +0.8 - 0.6 - 0.7 = <b>-0.5</b>. Correct.</li></ul>
<p><b>Key message:</b> growth was bought with <span class="hl">lower gross margin and more marketing</span>. Each extra $1 of revenue came with $0.25 more S&M ($0.5M / $2.0M) and lower margins.</p>
<p><b>Next steps:</b> (1) break down COGS by product and channel: input-cost inflation, discounting, or a shift to lower-margin products? (2) Measure S&M efficiency by channel (CAC, payback). (3) Set a target to restore gross margin to 38–40% through price, supplier negotiation or mix.</p>`,
    rubric: ['Calculates margins correctly.', 'Builds a profit bridge that reconciles to -$0.5M.', 'Identifies gross margin compression and S&M growth as drivers.', 'Lists specific next investigations.']
  },
  {
    id: 'ch-sales-capacity',
    title: 'How many sales reps do we need next year?',
    difficulty: 1,
    track: 'sales',
    role: 'Founder',
    scenario: `<p>Your B2B software start-up wants <b>$3.0M of new annual recurring revenue (ARR)</b> next year. Average deal size is <b>$30,000</b>, and the win rate from a qualified opportunity is <b>20%</b>. Each account executive (AE) has a quota of $600k but historically reps achieve about <b>75%</b> of quota. You have <b>3 fully ramped AEs</b>. New AEs take 6 months to ramp and deliver about half of a ramped rep\'s output in that time. A sales development rep (SDR) generates about <b>15 qualified opportunities a month</b>.</p>`,
    tasks: ['How many deals and qualified opportunities are needed?', 'How many new AEs must start on day 1?', 'How many SDRs are needed?'],
    hints: ['Effective capacity per ramped AE = quota x attainment.', 'A new rep: first half-year at 50%, second half at 100%.'],
    modelAnswer: `<p><b>Deals:</b> $3.0M / $30k = <b>100 deals</b>. At 20% win rate: 100 / 0.20 = <b>500 qualified opportunities</b>.</p>
<p><b>AE capacity:</b> ramped AE = $600k x 75% = <b>$450k/year</b>. Existing 3 AEs = $1.35M. Gap = <b>$1.65M</b>.</p>
<p>New AE in year 1 = first 6 months at 50% ($112.5k) + next 6 months at 100% ($225k) = <b>$337.5k</b>. Needed: $1.65M / $337.5k = 4.9, so <span class="hl">hire 5 AEs, starting on day 1</span> (8 in total). Any hiring delay cuts their contribution, so start recruiting now.</p>
<p><b>SDRs:</b> 500 opportunities / (15 x 12 = 180 per SDR per year) = 2.8, so <b>3 SDRs</b> (plus marketing-sourced leads as a buffer).</p>
<p><b>Recommendation:</b> hire 5 AEs and 3 SDRs in Q1, add a sales manager when the team passes about 6–8 reps, and track pipeline coverage (aim for 3x the quarterly target). Check that the cost of the extra team still gives a CAC payback under about 18 months.</p>`,
    rubric: ['Calculates deals and opportunities correctly.', 'Applies attainment and ramp correctly.', 'Sizes the SDR team.', 'Mentions timing risk and an efficiency check.']
  },
  {
    id: 'ch-bakery-bottleneck',
    title: 'Morning rush: where is the bakery bottleneck?',
    difficulty: 1,
    track: 'operations',
    role: 'COO',
    scenario: `<p>A bakery sells out every morning. During the 4-hour morning peak, demand is <b>95 loaves per hour</b>. Each loaf sells for $4.00 and contributes <b>$2.50</b>. The line has four steps with these hourly capacities. Extra proofing racks would cost <b>$6,000</b> and add 30 loaves/hour of proofing capacity.</p>`,
    data: { headers: ['Step', 'Capacity (loaves/hour)'], rows: [['Mixing', '120'], ['Proofing', '80'], ['Baking', '100'], ['Packaging', '150']] },
    tasks: ['Find the bottleneck and current throughput.', 'Calculate lost contribution per day and per year.', 'Evaluate the proofing-rack investment and say what the new bottleneck is.'],
    hints: ['A line can only go as fast as its slowest step.', 'After you fix one bottleneck, a new one appears.'],
    modelAnswer: `<p><b>Bottleneck:</b> proofing at <b>80/hour</b>. Throughput = 80, demand = 95, shortfall = 15 loaves/hour.</p>
<p><b>Lost contribution:</b> 15 x 4 hours = 60 loaves/day x $2.50 = <b>$150/day</b>, about <b>$54,750/year</b> (365 days).</p>
<p><b>Investment:</b> proofing becomes 110/hour; the new bottleneck is <b>baking at 100/hour</b>, which is above demand (95), so throughput rises to 95 and the full $150/day is recovered. Payback = $6,000 / $150 = <span class="hl">40 days</span>.</p>
<p><b>Recommendation:</b> buy the racks now. Then watch baking: if demand grows above 100/hour, look at oven scheduling or a second oven. This is the Theory of Constraints: improve the bottleneck, not the steps that already have spare capacity.</p>`,
    rubric: ['Identifies proofing as the bottleneck.', 'Calculates lost contribution correctly.', 'Computes payback and identifies the new bottleneck.', 'Clear recommendation.']
  },
  {
    id: 'ch-hiring-funnel',
    title: 'Hire 6 support agents in 8 weeks',
    difficulty: 1,
    track: 'people',
    role: 'CHRO',
    scenario: `<p>You must hire <b>6 customer support agents</b> within 8 weeks. Your historical funnel: 30% of applicants pass the screening call, 40% of those pass the interview, and only <b>60%</b> of offers are accepted. One job board brings about 40 applications a week. Your offer is <b>$38,000</b>; the local market median for the role is <b>$42,000</b>. About 1 in 7 new hires leaves in the first month.</p>`,
    tasks: ['How many applications do you need?', 'Is the timeline realistic with current sourcing?', 'What would you change in the process?'],
    hints: ['Multiply the conversion rates together.', 'Add a buffer for early attrition.', 'Low offer acceptance usually points to pay or candidate experience.'],
    modelAnswer: `<p><b>Funnel yield:</b> 0.30 x 0.40 x 0.60 = <b>7.2%</b> of applicants become hires. For 6 hires: 6 / 0.072 = 84 applications. With early attrition (about 1 in 7), plan for <b>7 hires</b>: 7 / 0.072 = <span class="hl">about 98, so roughly 100 applications</span>.</p>
<p><b>Timeline:</b> at 40 applications/week you need about 2.5 weeks of sourcing. Add 1 week screening, 2 weeks interviews and 2–4 weeks notice periods, and you are at 7.5–9.5 weeks: tight. Sourcing must finish in the first two weeks.</p>
<p><b>Fixes:</b></p>
<ul><li>Raise the offer to around $41–42k: if acceptance rises from 60% to 80%, yield becomes 9.6% and you need only about 73 applications.</li>
<li>Add sources: employee referrals with a bonus, a second job board, local colleges.</li>
<li>Speed up: same-week interviews, a group assessment day, offers within 48 hours.</li></ul>
<p><b>Recommendation:</b> fix pay to market, run a hiring day in week 2, and track the funnel weekly.</p>`,
    rubric: ['Calculates funnel yield and applications correctly.', 'Adds buffer for attrition.', 'Checks the timeline realistically.', 'Links low acceptance to below-market pay and proposes fixes.']
  },
  {
    id: 'ch-crm-build-buy',
    title: 'Build our own CRM or buy one?',
    difficulty: 1,
    track: 'technology',
    role: 'CTO',
    scenario: `<p>Your 40-person sales team needs a CRM. An engineer argues "we can build a better one in six months". Compare the <b>3-year total cost of ownership</b>.</p>`,
    data: { headers: ['Item', 'Buy (SaaS CRM)', 'Build in-house'], rows: [['Licence', '$90 per user per month, 40 users', '-'], ['One-time cost', '$25,000 implementation', '2 engineers x 6 months at $150k/yr loaded'], ['Ongoing people', '0.25 FTE admin at $120k/yr', '0.5 FTE engineer at $150k/yr, for the remaining 2.5 years'], ['Hosting', 'Included', '$6,000 per year']] },
    tasks: ['Calculate 3-year TCO for each option.', 'List non-financial factors.', 'Recommend.'],
    hints: ['Build cost = 2 x $150k x 0.5 year.', 'Do not forget the opportunity cost of engineers.'],
    modelAnswer: `<p><b>Buy:</b> licences 40 x $90 x 12 = $43,200/yr x 3 = $129,600; implementation $25,000; admin 0.25 x $120k x 3 = $90,000. <b>Total = $244,600.</b></p>
<p><b>Build:</b> development 2 x $150k x 0.5 = $150,000; maintenance 0.5 x $150k x 2.5 = $187,500; hosting $18,000. <b>Total = $355,500.</b></p>
<p><b>Non-financial:</b> a CRM is not your differentiator; SaaS vendors ship features, security and integrations continuously; a home-built tool depends on a few engineers; and two engineers for six months is lost product work, the biggest hidden cost.</p>
<p><b>Recommendation:</b> <span class="hl">buy</span>, saving about $111k over 3 years plus the opportunity cost. Build only the thin integrations that are unique to you. Negotiate a multi-year discount and check data-export terms to avoid lock-in.</p>`,
    rubric: ['Correct TCO math for both options.', 'Mentions opportunity cost and core vs non-core.', 'Clear recommendation with negotiation or risk points.']
  },
  {
    id: 'ch-cinema-elasticity',
    title: 'Should the cinema cut weekday ticket prices?',
    difficulty: 1,
    track: 'economics',
    role: 'CEO',
    scenario: `<p>Your cinema sells <b>4,000 weekday tickets a week at $12</b>. The film distributor takes <b>50%</b> of every ticket. 60% of visitors buy snacks, spending on average $8 at an 80% margin. Weekday seats are mostly empty (capacity 10,000 a week). Your analyst estimates weekday demand has a <b>price elasticity of -1.5</b>. Proposal: cut weekday prices to <b>$9</b>.</p>`,
    tasks: ['Estimate the new number of tickets.', 'Compare weekly contribution (tickets plus snacks) before and after.', 'Calculate the minimum volume increase needed to break even.', 'Recommend.'],
    hints: ['Price change = -25%. Volume change = elasticity x price change.', 'Snack contribution per visitor = 0.6 x $8 x 0.8.'],
    modelAnswer: `<p><b>Volume:</b> price -25% x elasticity -1.5 = <b>+37.5%</b>, so 4,000 to <b>5,500 tickets</b> (within capacity).</p>
<p><b>Contribution per visitor:</b> tickets: $6.00 at $12, $4.50 at $9 (after the 50% distributor share). Snacks: 0.6 x $8 x 0.8 = <b>$3.84</b>.</p>
<ul><li>Before: 4,000 x ($6.00 + $3.84) = <b>$39,360</b>/week.</li>
<li>After: 5,500 x ($4.50 + $3.84) = <b>$45,870</b>/week, <span class="hl">+$6,510 (+16.5%)</span>.</li></ul>
<p><b>Break-even:</b> $39,360 / $8.34 = 4,719 tickets, so you need only <b>+18% volume</b>, which an elasticity of about -0.7 would deliver. The idea has a good margin of safety, mostly because of snacks.</p>
<p><b>Risks:</b> weekend customers switching to weekdays, and the elasticity estimate itself. <b>Recommendation:</b> run a 4-week test on weekdays only, track total visitors and snack spend, and check weekend sales for cannibalisation.</p>`,
    rubric: ['Applies elasticity correctly.', 'Includes snack contribution, not just tickets.', 'Calculates break-even volume.', 'Recommends a controlled test and names risks.']
  },

  /* =================== DIFFICULTY 2 =================== */
  {
    id: 'ch-d2c-unit-economics',
    title: 'Fix the unit economics of a skincare D2C brand',
    difficulty: 2,
    track: 'growth',
    role: 'Founder',
    scenario: `<p>Your D2C skincare brand grows fast on paid social but burns cash. Investors ask you to show a path to <b>12-month payback</b> on customer acquisition. Current data per first order and per customer are below. About 35% of customers reorder within 12 months, and those who do place about 2 more orders that year (each with the same contribution as a first order).</p>`,
    data: { headers: ['Item', 'Value'], rows: [['Average order value (AOV)', '$40.00'], ['Product cost (COGS, 30%)', '$12.00'], ['Shipping and packaging', '$6.00'], ['Payment fees (3%)', '$1.20'], ['Returns and discounts (7%)', '$2.80'], ['Blended CAC (paid social)', '$55.00']] },
    tasks: ['Calculate contribution per order and 12-month contribution per customer.', 'Compare with CAC.', 'Model at least three levers and a combined plan.', 'Recommend the plan and the metrics to track.'],
    hints: ['12-month value = first order + (repeat rate x repeat orders x contribution).', 'Bundles raise AOV while shipping stays fixed.', 'Subscriptions raise repeat rate and frequency.'],
    modelAnswer: `<p><b>Current:</b> contribution per order = 40 - 12 - 6 - 1.20 - 2.80 = <b>$18.00</b>. 12-month value = 18 + (0.35 x 2 x 18) = 18 + 12.60 = <b>$30.60</b> vs CAC $55: you <b>lose $24.40 per customer</b> in year 1 (ratio 0.56).</p>
<p><b>Levers:</b></p>
<ul><li><b>Bundles to raise AOV to $52:</b> 52 - 15.60 (30%) - 6 - 1.56 - 3.64 = <b>$25.20</b> first-order contribution.</li>
<li><b>Subscribe-and-save refills:</b> raise repeat rate to 50% with 3 repeat orders at $40 AOV ($18 each): 0.5 x 3 x 18 = <b>$27.00</b>.</li>
<li><b>Cheaper acquisition:</b> shift budget to creator partnerships and referrals to bring blended CAC to <b>$40</b>.</li></ul>
<p><b>Combined:</b> 25.20 + 27.00 = <b>$52.20</b> vs CAC $40, a <span class="hl">12-month value/CAC of 1.3x</span>, so payback in under 12 months.</p>
<p><b>Recommendation:</b> (1) launch bundles and a refill subscription immediately; (2) cap paid social at a CAC of $45 and move 30% of budget to creators and referral; (3) negotiate shipping rates. Track: first-order contribution, 90-day repeat rate, CAC by channel, and payback by monthly cohort.</p>`,
    rubric: ['Correct contribution and 12-month value math.', 'Shows the gap vs CAC clearly.', 'Models multiple levers with numbers.', 'Recommends a combined plan and cohort metrics.']
  },
  {
    id: 'ch-saas-churn',
    title: 'Our SaaS churn has nearly doubled. Why?',
    difficulty: 2,
    track: 'growth',
    role: 'CPO',
    scenario: `<p>Monthly logo churn at your project-tool company has risen from about 2.0% to <b>3.5%</b> over two quarters. ARR is $6.6M across 1,000 customers. The CEO wants a diagnosis and a plan. Data by segment below. Extra fact: among SMB customers, those who connect at least one integration in the first 14 days churn <b>2.0%</b> a month; those who do not churn <b>7.0%</b>. Only <b>50%</b> of SMB customers connect an integration.</p>`,
    data: { headers: ['Segment', 'Customers', 'Monthly logo churn', 'Monthly revenue per account'], rows: [['SMB (under 10 seats)', '700', '4.5%', '$300'], ['Mid-market', '250', '1.4%', '$900'], ['Enterprise', '50', '0.4%', '$2,300']] },
    tasks: ['Verify the blended churn and calculate monthly revenue churn.', 'Identify where churn is concentrated and the likely root cause.', 'Estimate the impact of raising integration completion to 75%.', 'Propose a plan.'],
    hints: ['Weight churn by customer count for logo churn and by revenue for revenue churn.', 'Segment, then look for a behaviour that predicts churn.'],
    modelAnswer: `<p><b>Check:</b> customers lost per month = 700 x 4.5% + 250 x 1.4% + 50 x 0.4% = 31.5 + 3.5 + 0.2 = 35.2, i.e. <b>3.52%</b> logo churn. MRR = 210,000 + 225,000 + 115,000 = $550,000. MRR lost = 9,450 + 3,150 + 460 = $13,060 = <b>2.4% revenue churn</b>.</p>
<p><b>Where:</b> SMB is 89% of lost customers (31.5 / 35.2) and 72% of lost MRR (9,450 / 13,060). <b>Root cause:</b> activation. Check: 0.5 x 2.0% + 0.5 x 7.0% = 4.5%, so the SMB churn is fully explained by the half who never connect an integration.</p>
<p><b>Impact:</b> at 75% completion, SMB churn = 0.75 x 2.0% + 0.25 x 7.0% = <b>3.25%</b>. That saves 700 x 1.25% = about 8.75 customers and <b>$2,625 MRR per month</b>; over 12 months the retained MRR builds to roughly $31k MRR (about $375k ARR), before compounding.</p>
<p><b>Plan:</b></p>
<ol><li>Onboarding: an in-app integration wizard and templates in the first session; email and in-app nudges on days 1, 3 and 7.</li>
<li>Pooled customer success for SMB: webinars and a check-in at day 10 for anyone not yet integrated.</li>
<li>Offer annual plans with a discount to lock in commitment.</li>
<li>Exit survey and a cancellation save flow (pause option, downgrade).</li></ol>
<p><b>Metrics:</b> % connecting an integration in 14 days (target 75%), SMB churn by monthly cohort, net revenue retention.</p>`,
    rubric: ['Weighted churn math correct (logo and revenue).', 'Segments and finds the activation root cause.', 'Quantifies the improvement.', 'Specific, prioritised plan with leading indicators.']
  },
  {
    id: 'ch-runway-crunch',
    title: 'Six months of cash left. What now?',
    difficulty: 2,
    track: 'finance',
    role: 'CFO',
    scenario: `<p>Your SaaS start-up has <b>$2.4M in cash</b>. Monthly revenue is <b>$250k</b>, growing about 3% a month, with a 70% gross margin. Operating expenses are <b>$560k/month</b> ($400k payroll, $160k other). Accounts receivable are slow: days sales outstanding (DSO) is <b>72 days</b>. A fundraise typically takes 6 months, and the board wants at least 12 months of runway before you start. A lender offers <b>$1M of venture debt</b> if you show a credible plan.</p>`,
    tasks: ['Calculate current net burn and runway.', 'Build a plan to reach at least 12 months of runway.', 'Check whether the company can become "default alive" without new money.'],
    hints: ['Net burn = opex - gross profit.', 'Cash released by lowering DSO = daily revenue x days reduced.', 'Default alive: revenue at which gross profit covers opex.'],
    modelAnswer: `<p><b>Today:</b> gross profit = $250k x 70% = $175k. Net burn = 560 - 175 = <b>$385k/month</b>. Runway = 2.4 / 0.385 = <b>6.2 months</b>. Too short to raise safely.</p>
<p><b>Plan:</b></p>
<ol><li><b>Cut $120k/month opex:</b> freeze 6 open roles, cut unused tools and low-ROI marketing. Burn becomes <b>$265k</b>; runway = 2.4 / 0.265 = 9.1 months.</li>
<li><b>Collect faster:</b> DSO from 72 to 45 days. Daily revenue = 250k x 12 / 365 = $8,219; 27 days x $8,219 = <b>about $222k</b> released.</li>
<li><b>Venture debt $1M</b> as a buffer.</li></ol>
<p>New runway = (2.4 + 0.222 + 1.0) / 0.265 = <span class="hl">about 13.7 months</span>, and growth reduces burn further each month.</p>
<p><b>Default alive?</b> Gross profit must cover $440k of opex, so revenue must reach 440 / 0.7 = $629k. At 3% monthly growth from $250k: 1.03^n = 2.52, n = about 31 months. That is longer than the runway, so the company is <b>not default alive</b>: you still need to raise, or grow faster.</p>
<p><b>Recommendation:</b> make the cuts this month, start collections and annual-prepay offers, sign the venture debt, and begin fundraising in about 3 months with a clear path to profitability. Report a 13-week cash forecast to the board every month.</p>`,
    rubric: ['Correct burn and runway math.', 'Combines cost, working capital and financing levers with numbers.', 'Default-alive check done correctly.', 'Concrete timeline and board reporting.']
  },
  {
    id: 'ch-cap-table-dilution',
    title: 'How much will we own after Seed and Series A?',
    difficulty: 2,
    track: 'investment',
    role: 'Founder',
    scenario: `<p>Two co-founders own 50/50 of 10 million shares. They are planning:</p>
<ul><li><b>Seed:</b> $2M at an $8M pre-money valuation, with a new <b>10% option pool</b> (of post-money) created before the round.</li>
<li><b>Series A:</b> $8M at a $32M pre-money valuation. The investor requires the unissued pool to be topped up to <b>15% of post-money</b>, again created before the round. Assume no options were granted between rounds.</li></ul>`,
    tasks: ['Calculate ownership after the Seed round.', 'Calculate ownership after Series A.', 'Explain the "option pool shuffle" and its effect on the founders\' effective valuation.', 'Suggest negotiation points.'],
    hints: ['Seed investor owns $2M / $10M post = 20%.', 'If the pool comes out of the pre-money, only existing holders are diluted by it.'],
    modelAnswer: `<p><b>After Seed:</b> investor 20%, pool 10%, founders <b>70%</b> (35% each). Shares: founders\' 10M = 70%, so total = 14.29M; price per share = $10M / 14.29M = <b>$0.70</b> (not $0.80). The founders\' effective pre-money is 70% x $10M = <b>$7M</b>, not $8M: that is the option pool shuffle.</p>
<p><b>After Series A</b> (post-money $40M): new investor 20%, pool 15%. The remaining 65% is split between founders and seed in the ratio 70:20.</p>
<ul><li>Founders = 65% x 70/90 = <b>50.6%</b> (25.3% each).</li>
<li>Seed investor = 65% x 20/90 = <b>14.4%</b>.</li>
<li>Check: 20 + 15 + 50.6 + 14.4 = 100%.</li></ul>
<p>Each founder\'s stake is worth 25.3% x $40M = <span class="hl">about $10.1M on paper</span>. Without the top-up, founders would own 70% x 80% = 56%.</p>
<p><b>Negotiation:</b> size the pool from a real 18-month hiring plan rather than a round number; ask for part of the pool to be created post-money; count existing unissued options; and compare offers on effective pre-money, not headline pre-money.</p>`,
    rubric: ['Correct Seed and Series A percentages that sum to 100%.', 'Explains the option pool shuffle with the effective pre-money number.', 'Gives practical negotiation tactics.']
  },
  {
    id: 'ch-supply-shock',
    title: 'Lead times just jumped from 6 to 14 weeks',
    difficulty: 2,
    track: 'operations',
    role: 'COO',
    scenario: `<p>You sell phone chargers. 70% of units come from one supplier in Shenzhen. Port congestion and new export checks have pushed lead time from <b>6 to 14 weeks</b> for any order placed today. Demand is steady at <b>5,000 units a week</b>. You have <b>30,000 units</b> in stock and <b>20,000</b> in transit arriving at the start of week 5. Each lost sale costs <b>$15 of contribution</b> and risks losing retail shelf space.</p>`,
    data: { headers: ['Option', 'Details'], rows: [['Air freight from current supplier', 'Can produce 10,000 units in 4 weeks; air takes 1 week; air premium $1.00 per unit over sea'], ['Alternate supplier in Vietnam', 'Qualified samples; 8-week lead time; unit cost $10.80 vs $10.00; minimum order 10,000'], ['Allocate stock', 'Prioritise top customers and best-selling SKUs']] },
    tasks: ['Find the size and timing of the stock-out.', 'Build a plan to close the gap and cost it.', 'Recommend longer-term changes.'],
    hints: ['Weeks of cover = (stock + in-transit) / weekly demand.', 'New regular orders arrive in week 15.'],
    modelAnswer: `<p><b>Gap:</b> cover = (30,000 + 20,000) / 5,000 = <b>10 weeks</b>. A regular order placed today arrives after 14 weeks, so weeks 11–14 are uncovered: 4 x 5,000 = <b>20,000 units</b>, or <b>$300k</b> of lost contribution at risk, plus shelf-space risk.</p>
<p><b>Plan (order everything today):</b></p>
<ul><li>Air freight 10,000 from Shenzhen: arrives about week 5–6; premium 10,000 x $1.00 = <b>$10,000</b>.</li>
<li>Vietnam order of 10,000: arrives week 8; premium 10,000 x $0.80 = <b>$8,000</b>.</li>
<li>Regular sea order from Shenzhen for week 15 onward.</li></ul>
<p>Cover = 10 + 2 + 2 = <b>14 weeks</b>, closing the gap for <span class="hl">$18,000 vs $300,000 at risk</span>. Keep an allocation plan ready in case of further delays.</p>
<p><b>Longer term:</b> dual-source (for example 60/40 Shenzhen/Vietnam); recalculate the reorder point with the new lead time (14 weeks x 5,000 = 70,000 units plus safety stock); weekly control-tower review of supplier and port data; agree contract terms on lead times.</p>`,
    rubric: ['Calculates cover and stock-out correctly.', 'Combines options to close the gap and costs them.', 'Compares mitigation cost to value at risk.', 'Proposes structural resilience changes.']
  },
  {
    id: 'ch-gtm-legal-ai',
    title: 'Go-to-market plan for an AI contract-review tool',
    difficulty: 2,
    track: 'sales',
    role: 'CMO',
    scenario: `<p>Your start-up is launching an AI contract-review tool for mid-sized UK law firms. Average contract value is <b>£12,000 a year</b>. You have a <b>£300k</b> budget for the first 6 months and a target of <b>40 paying firms</b> by month 6. Your team estimated each channel.</p>`,
    data: { headers: ['Channel (6 months)', 'Cost', 'Qualified meetings', 'Meeting-to-win rate'], rows: [['Outbound (2 SDRs)', '£90k', '180', '10%'], ['LinkedIn ads + webinars', '£60k', '80', '8%'], ['Legal-tech conferences (2)', '£50k', '60', '15%'], ['Partnership with practice-management software', '£20k + 20% of year-1 revenue', '50', '20%'], ['Content / SEO', '£30k', '20', '10%']] },
    tasks: ['Calculate wins and cost per win by channel.', 'Check whether the mix meets the target within budget.', 'Define the ideal customer profile and the sales capacity needed.', 'Recommend a launch plan.'],
    hints: ['Partner cost = fixed fee + 20% x £12k x partner wins.', 'Count the sales team needed to run all those meetings.'],
    modelAnswer: `<table><thead><tr><th>Channel</th><th>Wins</th><th>Total cost</th><th>Cost per win</th></tr></thead><tbody>
<tr><td>Outbound</td><td>18</td><td>£90k</td><td>£5.0k</td></tr>
<tr><td>Ads + webinars</td><td>6.4</td><td>£60k</td><td>£9.4k</td></tr>
<tr><td>Conferences</td><td>9</td><td>£50k</td><td>£5.6k</td></tr>
<tr><td>Partnership</td><td>10</td><td>£20k + £24k = £44k</td><td>£4.4k</td></tr>
<tr><td>Content</td><td>2</td><td>£30k</td><td>£15k (but builds over time)</td></tr></tbody></table>
<p><b>Total:</b> about <b>45 wins</b> for £274k: meets 40 firms within budget, with £26k left as a buffer. First-year revenue from 45 firms is about £540k.</p>
<p><b>ICP:</b> firms with 20–200 lawyers and a commercial-contracts practice, a partner sponsoring innovation, and on the partner\'s practice-management software.</p>
<p><b>Capacity:</b> 390 meetings in 6 months = about 65 a month. An account executive can run about 30 first meetings a month, so you need <b>2 AEs plus founder-led selling</b> for the biggest deals.</p>
<p><b>Recommendation:</b> lead with the <span class="hl">partnership and outbound</span> (lowest cost per win), use conferences for credibility, keep ads small and test-driven, and start content now for the long term. Offer a 60-day paid pilot with clear success metrics (review time saved). Review cost per win monthly and shift budget to the best channel.</p>`,
    rubric: ['Correct wins and cost per win, including partner revenue share.', 'Checks total against target and budget.', 'Defines a sharp ICP.', 'Sizes sales capacity and sets a review loop.']
  },
  {
    id: 'ch-tutor-marketplace',
    title: 'Chicken-and-egg: a tutoring marketplace in Lagos',
    difficulty: 2,
    track: 'business-model',
    role: 'Founder',
    scenario: `<p>You run a home-tutoring marketplace in one Lagos neighbourhood. Parents book a tutor; you take a <b>15%</b> commission. A matched family books about <b>8 lessons a month</b> at <b>₦8,000</b> per lesson. Last month 150 parent requests came in but only <b>45%</b> were matched within 48 hours, even though you have 60 tutors who each offer about 40 lesson-slots a month. Requests and tutors by subject:</p>`,
    data: { headers: ['Subject', 'Parent requests / month', 'Active tutors'], rows: [['Mathematics', '70', '15'], ['Sciences', '40', '10'], ['English', '30', '20'], ['Coding', '10', '15']] },
    tasks: ['Calculate current monthly revenue and tutor utilisation.', 'Explain why matching is low despite spare tutor capacity.', 'Decide which side to grow first and how.', 'Estimate revenue if the match rate reaches 80%.'],
    hints: ['Revenue per matched family = 8 x ₦8,000 x 15%.', 'Look at supply and demand by subject, not in total.'],
    modelAnswer: `<p><b>Today:</b> matched families = 150 x 45% = about 68. Revenue per family = 8 x ₦8,000 x 15% = <b>₦9,600</b>. Revenue = 68 x ₦9,600 = <b>about ₦652,800/month</b>. Utilisation = 68 x 8 = 544 lessons / (60 x 40 = 2,400 slots) = <b>about 23%</b>.</p>
<p><b>Why:</b> the problem is a <span class="hl">mismatch, not a shortage</span>. Maths and sciences have 110 requests (73% of demand) but only 25 tutors (42% of supply), while English and coding have more tutors than requests. Tutors with little work will also churn.</p>
<p><b>Which side:</b> grow <b>supply in maths and sciences</b> first, in this one neighbourhood: recruit 20–25 tutors through university departments and teacher networks, with a ₦5,000 first-month bonus (about ₦125,000 in total). Give tutors a free scheduling and payment tool ("single-player value") so they stay even when bookings are slow. Do not spend on parent marketing until matching works.</p>
<p><b>Upside:</b> at 80% match: 120 families x ₦9,600 = <b>₦1,152,000/month</b>, +₦499,200 a month for a one-time ₦125,000.</p>
<p><b>Next steps:</b> track match rate within 48 hours by subject, repeat bookings and tutor earnings; expand to a second neighbourhood only when matching is above 80%.</p>`,
    rubric: ['Correct revenue and utilisation math.', 'Spots the subject mismatch.', 'Chooses the constrained side and proposes tactics including single-player value.', 'Quantifies upside and sets expansion criteria.']
  },
  {
    id: 'ch-gym-profit-decline',
    title: 'Why did the gym chain\'s profit fall by 40%?',
    difficulty: 2,
    track: 'strategy',
    role: 'Advisor',
    scenario: `<p>A US chain of 120 mid-priced gyms has seen operating profit fall from $24M to about $14M in two years. The CEO thinks costs are out of control. You have this data. Additional facts: a low-cost competitor ($10–25/month) has opened near 40 of the clubs; monthly member churn rose from 3.0% to 3.8%; the marketing team has run regular "two months half price" promotions.</p>`,
    data: { headers: ['Metric', '2022', '2024'], rows: [['Clubs', '120', '120'], ['Average members', '300,000', '290,000'], ['Average monthly fee', '$40', '$38'], ['Membership revenue', '$144.0M', '$132.2M'], ['Personal training revenue', '$16.0M', '$18.0M'], ['Total revenue', '$160.0M', '$150.2M'], ['Operating costs', '$136.0M', '$136.2M'], ['Operating profit', '$24.0M', '$14.0M']] },
    tasks: ['Build an issue tree for the profit decline.', 'Split the membership revenue change into price and volume effects.', 'Diagnose the root cause.', 'Recommend actions.'],
    hints: ['Profit = revenue - costs. Which moved?', 'Volume effect = change in members x old price x 12; price effect = change in price x new members x 12.'],
    modelAnswer: `<p><b>Issue tree:</b> Profit down $10M = Revenue down $9.8M + Costs up $0.2M. Costs are essentially flat, so <b>the CEO\'s hypothesis is wrong</b>; this is a revenue problem.</p>
<p><b>Membership revenue (-$11.76M):</b></p>
<ul><li>Volume: -10,000 members x $40 x 12 = <b>-$4.80M</b>.</li>
<li>Price: -$2 x 290,000 x 12 = <b>-$6.96M</b>.</li>
<li>Check: -4.80 - 6.96 = -11.76. Personal training +$2.0M partly offsets.</li></ul>
<p><b>Root cause:</b> the bigger driver is <span class="hl">price erosion from blanket discounting</span> in response to low-cost competitors, plus higher churn. Discounts are given to everyone, including loyal members who would not leave.</p>
<p><b>Recommendations:</b></p>
<ol><li>Stop blanket promotions; use targeted retention offers only for at-risk members.</li>
<li>Differentiate rather than match low-cost gyms: classes, coaching and community; create a tiered offer (basic off-peak plan and premium plan).</li>
<li>Grow personal training, which is rising: bundle it into premium tiers.</li>
<li>Review the 40 clubs facing the competitor: reposition, or close the weakest.</li></ol>
<p><b>Next steps:</b> club-level P&L and churn analysis, a pricing test in 10 clubs, and a churn-reduction target of back to 3.0%.</p>`,
    rubric: ['Uses a revenue/cost issue tree and rejects the cost hypothesis with data.', 'Price/volume split correct and reconciled.', 'Links root cause to competitor and discount behaviour.', 'Actionable, segmented recommendations.']
  },
  {
    id: 'ch-ai-support-case',
    title: 'Business case for an AI support agent',
    difficulty: 2,
    track: 'technology',
    role: 'CTO',
    scenario: `<p>Your support team has <b>60 agents</b> (loaded cost <b>$45,000</b> each per year) handling <b>300,000 tickets a year</b>. A vendor's AI agent resolved <b>40%</b> of tickets on its own in a pilot, with customer satisfaction similar to humans. Pricing: <b>$0.90 per resolved ticket</b> plus a <b>$60,000/year</b> platform fee. Implementation costs <b>$150,000</b> once. Agent attrition is 30% a year. Assume year 1 runs at half the full benefit while you ramp up, and flat ticket volume.</p>`,
    tasks: ['Calculate full-year savings and AI costs.', 'Build a 3-year net benefit.', 'Explain how to realise savings responsibly.', 'List risks and the metrics to monitor.'],
    hints: ['Tickets resolved by AI = 40% x 300,000.', 'Agent capacity freed = tickets / tickets per agent.'],
    modelAnswer: `<p><b>Full year:</b> AI resolves 120,000 tickets. Each agent handles 300,000 / 60 = 5,000 tickets, so <b>24 agents\' worth of capacity</b> is freed = 24 x $45k = <b>$1.08M</b>. AI cost = 120,000 x $0.90 + $60k = <b>$168k</b>. Net = <b>$912k/year</b>.</p>
<p><b>3 years:</b></p>
<ul><li>Year 1: $540k savings - ($54k usage + $60k fee) - $150k implementation = <b>$276k</b>.</li>
<li>Year 2: <b>$912k</b>. Year 3: <b>$912k</b>.</li>
<li>Total = <span class="hl">about $2.1M</span>.</li></ul>
<p><b>Realising it responsibly:</b> with 30% attrition (about 18 agents a year), you can reduce headcount over time mainly by not backfilling, and redeploy some agents to complex cases, proactive outreach and AI quality review.</p>
<p><b>Risks:</b> wrong or invented answers, poor escalation to humans, privacy and data security, customers forced through bots, vendor lock-in. <b>Metrics:</b> resolution rate, customer satisfaction on AI tickets, re-contact rate within 7 days, escalation time, cost per resolution.</p>
<p><b>Recommendation:</b> approve a phased rollout starting with simple, high-volume topics, with clear guardrails, a human handoff and a review gate at 3 months.</p>`,
    rubric: ['Correct savings, cost and 3-year math.', 'Uses attrition to realise savings without mass layoffs.', 'Names quality and safety risks with metrics.', 'Phased recommendation with review gates.']
  },
  {
    id: 'ch-gbb-pricing',
    title: 'Moving from one plan to Good-Better-Best',
    difficulty: 2,
    track: 'pricing',
    role: 'CPO',
    scenario: `<p>Your project-management SaaS has one plan at <b>$12 per user per month</b>, with 50,000 paid seats (MRR $600,000). You propose three tiers: <b>Basic $8</b>, <b>Pro $15</b>, <b>Business $25</b> (Business adds single sign-on, admin controls and audit logs). A pricing survey suggests the seat mix would be <b>25% Basic, 55% Pro, 20% Business</b>. You expect about <b>5% of seats</b> to leave because of the change.</p>`,
    tasks: ['Calculate the new blended price and MRR, with and without seat loss.', 'Calculate how many seats you could lose before revenue falls.', 'Design the feature fences and the rollout to existing customers.'],
    hints: ['Blended price = sum of share x price.', 'Break-even seats = current MRR / new blended price.'],
    modelAnswer: `<p><b>Blended price:</b> 0.25 x 8 + 0.55 x 15 + 0.20 x 25 = 2 + 8.25 + 5 = <b>$15.25</b>.</p>
<ul><li>No seat loss: 50,000 x $15.25 = <b>$762,500 MRR (+27%)</b>.</li>
<li>5% loss: 47,500 x $15.25 = <b>$724,375 MRR (+20.7%)</b>.</li></ul>
<p><b>Break-even:</b> $600,000 / $15.25 = 39,344 seats, so you could lose about <b>21% of seats</b> before revenue falls. Big margin of safety.</p>
<p><b>Fences:</b> Basic limits projects and integrations (for small teams); Pro adds automations, dashboards and integrations (most teams); Business adds SSO, admin controls, audit logs and priority support (what IT and procurement require).</p>
<p><b>Rollout:</b> launch tiers for <span class="hl">new customers first</span> and A/B test the page; grandfather existing customers at $12 for 12 months with a clear notice, then move them to Pro with an incentive to commit annually. Monitor conversion to paid, tier mix, downgrades and churn monthly.</p>`,
    rubric: ['Correct blended price and MRR math.', 'Break-even seat loss calculated.', 'Logical feature fences tied to customer segments.', 'Safe rollout plan for existing customers.']
  },

  /* =================== DIFFICULTY 3 =================== */
  {
    id: 'ch-term-sheets',
    title: 'Two term sheets: the higher valuation is not always better',
    difficulty: 3,
    track: 'investment',
    role: 'Founder',
    scenario: `<p>Before this round, founders own <b>85%</b> and angels <b>15%</b> of your company (no option pool). You have two Series A offers. In both, the new option pool is created before the round and counted in the post-money. Assume no later rounds and that the pool is fully issued at exit.</p>`,
    data: { headers: ['Term', 'Fund A', 'Fund B'], rows: [['Investment', '$10M', '$12M'], ['Pre-money valuation', '$40M', '$60M'], ['New option pool (of post-money)', '10%', '15%'], ['Liquidation preference', '1x non-participating', '1x participating, no cap'], ['Anti-dilution', 'Broad-based weighted average', 'Full ratchet'], ['Board', '2 founders, 1 investor', '2 founders, 2 investors, 1 independent chosen by investors']] },
    tasks: ['Calculate ownership for each offer and the effective pre-money.', 'Calculate founder proceeds at exits of $60M, $150M and $500M.', 'Assess the control and downside terms.', 'Recommend and plan the negotiation.'],
    hints: ['Non-participating: investor takes the larger of its preference or its share of the exit.', 'Participating: investor takes its preference AND its share of what is left.', 'Effective pre-money = existing holders\' share x post-money.'],
    modelAnswer: `<p><b>Ownership:</b></p>
<ul><li>A: post $50M; investor 20%; pool 10%; remaining 70%: founders 59.5%, angels 10.5%. Effective pre-money = 70% x $50M = <b>$35M</b>.</li>
<li>B: post $72M; investor 16.7%; pool 15%; remaining 68.3%: founders 58.1%, angels 10.2%. Effective pre-money = 68.3% x $72M = <b>$49.2M</b>.</li></ul>
<p><b>Founder proceeds ($M):</b></p>
<table><thead><tr><th>Exit</th><th>Offer A</th><th>Offer B</th></tr></thead><tbody>
<tr><td>$60M</td><td>59.5% x 60 = 35.7 (investor converts: 20% = 12 &gt; 10)</td><td>58.1% x (60 - 12) = 27.9</td></tr>
<tr><td>$150M</td><td>59.5% x 150 = 89.3</td><td>58.1% x 138 = 80.2</td></tr>
<tr><td>$500M</td><td>59.5% x 500 = 297.5</td><td>58.1% x 488 = 283.4</td></tr></tbody></table>
<p>Despite a $20M higher headline valuation, <span class="hl">founders receive more under A at every exit</span> because of B\'s participating preference and bigger pool.</p>
<p><b>Control and downside:</b> B\'s full ratchet would reprice the investor\'s shares to any lower future price, crushing founders in a down round. B\'s board gives investors effective control (2 + their chosen independent).</p>
<p><b>Recommendation:</b> prefer A. Use B to negotiate: ask A for a higher pre-money (e.g., $45M) or a smaller pool sized to the hiring plan. If you prefer Fund B as a partner, require 1x non-participating, broad-based weighted average and a balanced board (2-2-1 with a mutually agreed independent).</p>`,
    rubric: ['Correct ownership and effective pre-money for both.', 'Correct waterfall math at all three exits.', 'Explains participation, ratchet and board control risks.', 'Recommendation with specific negotiation asks.']
  },
  {
    id: 'ch-acquisition-saas',
    title: 'Should we pay $320M for this vertical SaaS company?',
    difficulty: 3,
    track: 'csuite',
    role: 'CEO',
    scenario: `<p>Your listed software company (revenue $300M) is considering buying a vertical SaaS company: revenue <b>$40M</b> growing 25%, EBITDA $4M. The seller asks <b>$320M</b> (8x revenue). Your team\'s standalone discounted cash flow (DCF) value of the target is <b>$250M</b>. Assume a 25% tax rate, a 10% discount rate and 2% long-term growth (so a perpetuity is valued at cash flow / 8%).</p>`,
    data: { headers: ['Synergy', 'Estimate', 'Timing / risk'], rows: [['Cost: duplicate G&A, hosting, tools', '$8M per year pre-tax', 'Fully achieved from year 2; $10M one-time cost to achieve'], ['Revenue: cross-sell to your customers', '$10M revenue at 80% margin = $8M per year pre-tax', 'From year 3; your team says 50% likely'], ['Key people', '5 engineers and 2 product leaders built the core product', 'Retention uncertain']] },
    tasks: ['Value the cost and revenue synergies.', 'Estimate the maximum price you can justify.', 'Recommend a bid, structure and walk-away price.', 'List integration risks.'],
    hints: ['After-tax synergy / (discount rate - growth) gives a perpetuity value.', 'Discount delayed synergies back to today; weight risky ones by probability.'],
    modelAnswer: `<p><b>Cost synergies:</b> $8M x (1 - 25%) = $6M after tax / 8% = $75M, minus $10M cost to achieve = $65M; one year delay: 65 / 1.1 = <b>about $59M</b>.</p>
<p><b>Revenue synergies:</b> $8M x 0.75 = $6M / 8% = $75M; x 50% probability = $37.5M; discounted 3 years: 37.5 / 1.331 = <b>about $28M</b>.</p>
<p><b>Maximum value to us:</b> 250 + 59 + 28 = <b>about $337M</b>. At $320M, we would hand almost all synergy value to the seller and keep only about $17M of cushion (5%), with no room for integration problems.</p>
<p><b>Recommendation:</b> <span class="hl">bid about $280–290M upfront plus an earnout of up to $30M</span> tied to year-2 revenue, so the seller is paid for growth only if it happens. Walk away above about $320M in total guaranteed value. Use retention packages (stock vesting over 3–4 years) for the 7 key people as a condition of closing.</p>
<p><b>Integration risks:</b> loss of key talent, slower product roadmap, culture clash, customer churn during migration, and over-optimistic cross-sell. Appoint an integration lead, a 100-day plan and synergy tracking reported to the board.</p>`,
    rubric: ['Values synergies with tax, timing and probability.', 'Computes a maximum price and compares to the ask.', 'Proposes a structure (earnout, retention) and a walk-away price.', 'Names integration risks and governance.']
  },
  {
    id: 'ch-ev-market-entry',
    title: 'Market entry: Indonesia or Brazil for an Indian EV two-wheeler maker?',
    difficulty: 3,
    track: 'strategy',
    role: 'CEO',
    scenario: `<p>You run an Indian electric scooter maker with a strong home market. The board wants one international market in the next 18 months. Your team built this <b>illustrative</b> comparison (figures are planning assumptions, not official statistics).</p>`,
    data: { headers: ['Factor', 'Indonesia', 'Brazil'], rows: [['Two-wheeler sales per year (year 5)', '6.0M', '1.8M'], ['Expected EV share in year 5', '10%', '6%'], ['Our target share of EV segment', '8%', '10%'], ['Average selling price', '$1,400', '$2,500'], ['Contribution margin', '15%', '22%'], ['Entry investment (local assembly needed)', '$25M (local content rules for incentives)', '$20M (assembly to avoid high import duties)'], ['Competition', 'Japanese incumbents dominate petrol bikes; local EV start-ups; big ride-hailing fleets', 'Japanese incumbents; small EV market'], ['Fit with our product', 'Similar use (commuting, delivery), similar price points', 'Higher price, longer distances']] },
    tasks: ['Estimate year-5 revenue and contribution for each market.', 'Estimate simple payback.', 'Weigh qualitative factors and choose.', 'Design an entry mode and go/no-go milestones.'],
    hints: ['Units = market x EV share x our share.', 'Payback = investment / annual contribution at year-5 run-rate.'],
    modelAnswer: `<p><b>Year-5 economics:</b></p>
<ul><li>Indonesia: 6.0M x 10% x 8% = <b>48,000 units</b> x $1,400 = <b>$67.2M revenue</b>; x 15% = <b>$10.1M contribution</b>; payback 25 / 10.1 = about <b>2.5 years</b>.</li>
<li>Brazil: 1.8M x 6% x 10% = <b>10,800 units</b> x $2,500 = <b>$27.0M</b>; x 22% = <b>$5.9M</b>; payback 20 / 5.9 = about <b>3.4 years</b>.</li></ul>
<p><b>Qualitative:</b> Indonesia is larger, closer to your product (price, commuting and delivery use) and has a B2B beachhead in ride-hailing and delivery fleets. Risks: strong incumbents, local-content rules, subsidy changes, and charging/battery-swap infrastructure.</p>
<p><b>Choice:</b> <span class="hl">Indonesia</span>, unless due diligence shows the incentive or local-content rules are unworkable.</p>
<p><b>Entry mode (staged):</b></p>
<ol><li>Phase 1 (0–9 months): import a limited batch; pilot 2,000 scooters with 2–3 delivery and ride-hailing fleets; partner for battery swapping.</li>
<li>Phase 2: if fleet uptime is above 95%, cost per km beats petrol by 30%+, and there are 10,000+ unit orders, commit to the $25M local assembly (possibly with a local partner).</li>
<li>Phase 3: consumer retail in 2–3 cities.</li></ol>
<p>Kill or pivot criteria: pilot economics fail or policy turns against imports and incentives.</p>`,
    rubric: ['Correct revenue, contribution and payback for both markets.', 'Balances numbers with qualitative fit and risk.', 'Clear choice.', 'Staged entry with measurable go/no-go milestones.']
  },
  {
    id: 'ch-scale-20-100',
    title: 'Hiring plan: from 20 to 100 people in 12 months',
    difficulty: 3,
    track: 'scaling',
    role: 'CHRO',
    scenario: `<p>Your start-up just raised a Series B and must grow from <b>20 to 100 people</b> in 12 months. Today: 12 engineers, 3 product/design, 2 sales, 1 customer success, 2 founders. There is no HR, finance or recruiting team. The board-approved target org is below. Expect about <b>15% annual attrition</b>. An in-house recruiter makes about <b>36 hires</b> in their first year (including ramp-up). Average loaded cost of a new hire is about <b>$130,000</b> a year.</p>`,
    data: { headers: ['Function', 'Today', 'Target in 12 months'], rows: [['Engineering', '12', '45'], ['Product and design', '3', '10'], ['Sales', '2', '18'], ['Customer success / support', '1', '12'], ['Marketing', '0', '6'], ['G&A (finance, people, legal, IT)', '0', '7'], ['Founders', '2', '2'], ['Total', '20', '100']] },
    tasks: ['Calculate net hires and total hires including attrition.', 'Size the recruiting team.', 'Sequence hiring by quarter and leadership layer.', 'Estimate the payroll impact.', 'Name the culture and process systems to build.'],
    hints: ['Attrition on average headcount (about 60) also needs replacing.', 'Hire leaders before their teams.'],
    modelAnswer: `<p><b>Hires:</b> net new = 33 + 7 + 16 + 11 + 6 + 7 = <b>80</b>. Attrition: 15% of average headcount 60 = 9. <b>Total about 89 hires.</b></p>
<p><b>Recruiting team:</b> 89 / 36 = 2.5, so <span class="hl">3 recruiters + 1 coordinator</span>, plus an executive search firm for VP hires. Hire the Head of People and first recruiter in month 1.</p>
<p><b>Sequence:</b></p>
<ul><li>Q1 (+15): VP Engineering, VP Sales, Head of People, finance lead, 2 engineering managers, first recruiters, senior engineers.</li>
<li>Q2 (+20), Q3 (+22), Q4 (+23): teams under the new leaders. Total 80.</li>
<li>Spans of 6–8 people per manager mean roughly 12–14 managers at 100 people: promote some, hire some.</li></ul>
<p><b>Payroll:</b> 80 x $130k = <b>$10.4M added annual run-rate</b>; since hires are spread through the year, year-1 cost is roughly half, about <b>$5.2M</b>. Check this against the runway plan.</p>
<p><b>Systems:</b> written values and a hiring bar (structured interviews, scorecards), job levels and salary bands, a 30-60-90 day onboarding programme, quarterly goals (OKRs), manager training, performance reviews twice a year, and an engagement pulse survey. Interviewing will take a lot of engineering time: limit each engineer to about 3 hours a week.</p>`,
    rubric: ['Correct hire counts including attrition.', 'Sizes recruiting capacity.', 'Sequences leaders first by quarter.', 'Estimates payroll impact.', 'Covers culture and people-systems for scale.']
  },
  {
    id: 'ch-board-whistleblower',
    title: 'A whistleblower says revenue was inflated, 3 weeks before closing a round',
    difficulty: 3,
    track: 'legal',
    role: 'CEO',
    scenario: `<p>You are CEO of a late-stage private fintech. Quarterly revenue reported to the board was <b>$25M</b>. An anonymous email to you and the audit committee chair claims a regional sales team <b>booked revenue on contracts not yet signed</b>, inflating the quarter by about <b>8%</b>. Your CFO says it is a "timing issue". A new funding round, priced at about <b>10x annual recurring revenue</b>, is due to close in 3 weeks. The board meets in 10 days.</p>`,
    tasks: ['Size the potential impact.', 'Lay out what you must do in the first 48 hours and the first 2 weeks.', 'Decide what to tell the new investors.', 'Propose fixes to prevent a repeat.'],
    hints: ['Who should run the investigation so it is independent?', 'Closing a round on numbers you suspect are wrong creates legal liability.'],
    modelAnswer: `<p><b>Impact:</b> 8% x $25M = <b>$2M</b> per quarter, about $8M annualised. At 10x ARR, that is up to <b>$80M of valuation</b> built on possibly false numbers, plus legal exposure for misleading investors.</p>
<p><b>First 48 hours:</b></p>
<ol><li>Treat it seriously; do not try to identify or retaliate against the whistleblower.</li>
<li>Preserve evidence: freeze deletion of emails, CRM records and contracts for the region.</li>
<li>Formally hand oversight to the <b>audit committee</b>; it hires outside counsel and forensic accountants who report to the committee, not to management (the CFO is conflicted).</li></ol>
<p><b>First 2 weeks:</b> a targeted review of the region\'s contracts against signature dates and revenue-recognition rules (ASC 606 / IFRS 15 / Ind AS 115); brief the full board at the meeting; prepare to restate if needed; plan communications.</p>
<p><b>Investors:</b> <span class="hl">you cannot close on numbers you have reason to doubt</span>. Tell the lead investor that a review is underway and propose a short delay. This protects the company and you personally; trust is far easier to keep than rebuild.</p>
<p><b>Prevention:</b> a deal desk that checks signed contracts before booking, separation of sales and revenue recognition, commission paid on cash or signed contracts only, quarterly internal audit samples, and a formal whistleblower policy.</p>`,
    rubric: ['Quantifies financial and valuation exposure.', 'Ensures independence (audit committee, outside counsel).', 'Refuses to close the round on suspect numbers and communicates transparently.', 'Proposes concrete internal controls.']
  },
  {
    id: 'ch-idea-stage-gym-saas',
    title: 'Advising an idea-stage founder: gym software for small Indian cities',
    difficulty: 3,
    track: 'csuite',
    role: 'Advisor',
    scenario: `<p>A first-time solo founder asks for your advice. She has quit her job, spent ₹8 lakh with an agency building an app that helps small gyms in tier-2 and tier-3 Indian cities manage memberships and payments, and three gym owners "loved it". She wants to raise <b>₹3 crore at a ₹30 crore valuation</b> before launching. Her planned price is <b>₹999 per gym per month</b>.</p>
<p>Your quick estimates: about <b>30,000</b> small gyms in her target cities (illustrative); an average gym has 300 members paying ₹1,000 a month; gross margin about 80%. A field salesperson costs ₹40,000 a month and could sign about 8 gyms a month.</p>`,
    tasks: ['Diagnose the biggest risks in her plan.', 'Size the market for software alone and with payments.', 'Calculate CAC and payback.', 'Give her a 90-day validation plan and fundraising advice.'],
    hints: ['Payments: what if you took 1% of membership fees collected through the app?', 'CAC = salesperson cost / gyms signed per month.'],
    modelAnswer: `<p><b>Diagnosis (biggest risks):</b> (1) willingness to pay is unproven ("loved it" is not payment); (2) market size; (3) distribution is expensive (field sales to scattered small gyms); (4) solo founder, no technical co-founder; (5) the valuation is not supported by any traction.</p>
<p><b>Market size:</b></p>
<ul><li>Software: 30,000 x ₹999 x 12 = <b>about ₹36 crore a year</b> at 100% share, which is too small for a venture-scale business.</li>
<li>Payments at 1% of fees: 300 x ₹1,000 = ₹3 lakh/month per gym x 1% = ₹3,000/month; x 30,000 x 12 = <b>about ₹108 crore</b>. Combined about <span class="hl">₹144 crore</span>, a better story, especially if expanded to other small fitness and coaching businesses.</li></ul>
<p><b>CAC and payback:</b> ₹40,000 / 8 = <b>₹5,000 per gym</b>. Monthly contribution = ₹999 x 80% = about ₹800, so payback = 5,000 / 800 = <b>about 6 months</b>; better with payments revenue.</p>
<p><b>90-day plan:</b></p>
<ol><li>Interview 20–30 gym owners about how they collect fees today and what that costs them.</li>
<li>Sign 10 paying gyms (even with a discount) and run payments for them; measure collections, usage and 3-month retention (target 80%+).</li>
<li>Test one cheaper channel (equipment suppliers, gym-owner associations, WhatsApp communities).</li>
<li>Look for a technical co-founder.</li></ol>
<p><b>Fundraising:</b> do not raise ₹3 crore now. Raise a small angel round (around ₹50 lakh–1 crore) after the 10-gym proof, at a valuation set by that traction. Next step: we meet again in 30 days to review interview findings.</p>`,
    rubric: ['Clear diagnosis of key risks, including founder and valuation.', 'Correct market sizing with an expanded payments model.', 'CAC and payback calculated.', 'Specific 90-day plan and realistic fundraising advice.']
  },
  {
    id: 'ch-dark-store-economics',
    title: 'Make a quick-commerce dark store profitable',
    difficulty: 3,
    track: 'operations',
    role: 'COO',
    scenario: `<p>You run operations for a 10-minute grocery delivery company in India. A typical mature dark store does <b>1,200 orders a day</b> (30 days a month). Data per order and per store below. The CEO wants every mature store at positive EBITDA within two quarters.</p>`,
    data: { headers: ['Item', 'Value'], rows: [['Average order value (AOV)', '₹480'], ['Gross margin incl. brand ad income', '18% of AOV'], ['Delivery fee collected (average)', '₹10 per order'], ['Last-mile delivery cost', '₹45 per order'], ['Picking and packing', '₹12 per order'], ['Packaging', '₹5 per order'], ['Payment gateway', '1.5% of AOV'], ['Discounts and coupons', '₹15 per order'], ['Fixed store costs (rent, staff, utilities)', '₹5,00,000 per month']] },
    tasks: ['Calculate contribution per order and monthly store EBITDA.', 'Calculate break-even orders per day.', 'Model the effect of raising AOV to ₹550.', 'Recommend a lever plan.'],
    hints: ['Contribution = gross margin + fees - variable costs.', 'Break-even orders/day = fixed costs / (30 x contribution per order).'],
    modelAnswer: `<p><b>Contribution per order:</b> 18% x 480 = ₹86.40; + ₹10 fee; - 45 - 12 - 5 - 7.20 (1.5% x 480) - 15 = <b>₹12.20</b>.</p>
<p><b>Store EBITDA:</b> 1,200 x 30 x 12.20 = ₹4,39,200 - ₹5,00,000 = <b>-₹60,800/month</b>. Break-even = 5,00,000 / (30 x 12.20) = <b>about 1,366 orders/day</b>.</p>
<p><b>AOV to ₹550:</b> margin 99.00 + 10 - 45 - 12 - 5 - 8.25 - 15 = <b>₹23.75</b>. EBITDA = 1,200 x 30 x 23.75 = ₹8,55,000 - ₹5,00,000 = <span class="hl">+₹3,55,000/month</span>. Break-even falls to 5,00,000 / (30 x 23.75) = <b>about 702 orders/day</b>.</p>
<p><b>Lever plan:</b></p>
<ol><li><b>AOV:</b> widen assortment (personal care, home, electronics accessories, larger pack sizes); free delivery only above a minimum basket; smart bundles.</li>
<li><b>Discounts:</b> target coupons to new users and lapsed users only.</li>
<li><b>Last mile:</b> batch orders at peak and tighten the delivery radius to cut cost per order from ₹45 towards ₹38.</li>
<li><b>Margin:</b> grow brand advertising income and private label.</li></ol>
<p><b>Next steps:</b> store-level weekly dashboard (orders/day, AOV, contribution per order, rider cost per order), test minimum-basket thresholds in 5 stores, and pause opening new stores in areas that cannot reach about 700 orders/day.</p>`,
    rubric: ['Correct contribution and EBITDA math.', 'Correct break-even calculation.', 'Shows AOV as the strongest lever with numbers.', 'Concrete lever plan with store-level metrics.']
  },
  {
    id: 'ch-price-war',
    title: 'Our only competitor just cut prices by 10%',
    difficulty: 3,
    track: 'economics',
    role: 'CFO',
    scenario: `<p>You and one rival (B) supply an industrial solvent. The market is <b>1M units a year</b> at <b>$100</b>, split 50/50. Your variable cost is <b>$60 per unit</b> (B\'s is similar). B just cut its price to <b>$90</b>. Your analysts estimate these scenarios for next year. Your sales team also learned that B\'s plant can produce at most <b>600,000 units a year</b>.</p>`,
    data: { headers: ['Your response', 'Market size', 'Your share'], rows: [['Match at $90', '1.05M', '50%'], ['Hold at $100', '1.025M', '35% (if B had unlimited capacity)'], ['Undercut to $85 (B likely retaliates to $80; both at $80)', '1.10M', '50%']] },
    tasks: ['Calculate your contribution today and in each scenario.', 'Factor in B\'s capacity limit.', 'Calculate B\'s own result from its price cut.', 'Recommend a response, including legal limits.'],
    hints: ['Contribution = units x (price - variable cost).', 'If you hold, can B actually serve 65% of the market?'],
    modelAnswer: `<p><b>Today:</b> 500,000 x $40 = <b>$20.0M</b>.</p>
<ul><li><b>Match:</b> 525,000 x $30 = <b>$15.75M</b>.</li>
<li><b>Hold (naive):</b> 1.025M x 35% = 358,750 x $40 = $14.35M. <b>With B\'s capacity limit:</b> B can sell only 600,000, so you sell 1.025M - 600,000 = 425,000 x $40 = <span class="hl">$17.0M</span>.</li>
<li><b>Price war at $80:</b> 550,000 x $20 = <b>$11.0M</b>.</li></ul>
<p><b>B\'s view:</b> before, 500,000 x $40 = $20M. If you hold: 600,000 x $30 = <b>$18M</b>. If you match: 525,000 x $30 = <b>$15.75M</b>. B\'s cut makes B worse off in every case, so it may well reverse it if you do not follow.</p>
<p><b>Recommendation:</b> <b>hold list price</b>; protect key accounts with non-price value (guaranteed supply, technical service, longer contracts) and only targeted, contract-specific responses for the few largest at-risk customers. Publicly emphasise your reliable capacity. Avoid escalation.</p>
<p><b>Legal limits:</b> never discuss prices with B directly or indirectly; that is illegal collusion under competition law. Your decisions must be made independently and based on your own analysis. Next steps: monitor weekly share by account and revisit in one quarter.</p>`,
    rubric: ['Correct contribution math for every scenario.', 'Uses the capacity constraint to change the answer.', 'Analyses the competitor\'s payoff (game theory).', 'Recommends a targeted response and notes antitrust limits.']
  },
  {
    id: 'ch-ai-feature-margin',
    title: 'Our AI assistant is eating our gross margin',
    difficulty: 3,
    track: 'technology',
    role: 'CTO',
    scenario: `<p>Your SaaS company sells an AI assistant add-on at <b>$20 per user per month</b>. It calls a large language model through an API. Core SaaS gross margin is 80%, but finance says the add-on is far below that. Usage and <b>illustrative</b> prices below.</p>`,
    data: { headers: ['Item', 'Value'], rows: [['Requests per active user per month (average)', '400'], ['Usage split', '90% of users average 250 requests; 10% average 1,750'], ['Tokens per request', '3,000 input, 500 output'], ['Large model price', '$3 per 1M input tokens, $15 per 1M output tokens'], ['Cached input price', '10% of normal input price'], ['Small model price', 'one tenth of the large model'], ['Other infrastructure (search index, hosting)', '$0.80 per user per month']] },
    tasks: ['Calculate cost per request and gross margin for the average, light and heavy users.', 'Model prompt caching (60% of input tokens cached) and routing 70% of requests to the small model.', 'Recommend pricing and engineering changes.'],
    hints: ['Cost per request = input tokens x input price + output tokens x output price.', 'Apply caching first, then routing.'],
    modelAnswer: `<p><b>Cost per request:</b> 3,000 x $3/1M + 500 x $15/1M = $0.0090 + $0.0075 = <b>$0.0165</b>.</p>
<ul><li>Average user: 400 x 0.0165 = $6.60 + $0.80 = <b>$7.40</b>, margin (20 - 7.40)/20 = <b>63%</b>.</li>
<li>Light user: 250 x 0.0165 = $4.13 + $0.80 = $4.93, margin <b>75%</b>.</li>
<li>Heavy user: 1,750 x 0.0165 = $28.88 + $0.80 = $29.68, margin <b>-48%</b>: you lose money on them.</li></ul>
<p><b>Caching:</b> input = 3,000 x (0.4 x $3 + 0.6 x $0.30)/1M = 3,000 x $1.38/1M = $0.00414; plus output $0.0075 = <b>$0.01164</b> (-29%).</p>
<p><b>Routing 70% to the small model:</b> 0.3 x 0.01164 + 0.7 x 0.001164 = <b>$0.00431</b> per request. Average user: 400 x 0.00431 = $1.72 + $0.80 = $2.52, margin <span class="hl">about 87%</span>. Heavy user: 1,750 x 0.00431 = $7.54 + $0.80 = $8.34, margin about 58%.</p>
<p><b>Recommendation:</b> (1) implement caching and a router that sends simple tasks to the small model, with quality tests on a fixed evaluation set; (2) include 1,000 requests per user per month, then sell credit packs or a "Pro AI" tier for heavy users; (3) monitor cost per request and margin by customer weekly. Re-check vendor prices regularly, as they change quickly.</p>`,
    rubric: ['Correct token cost math.', 'Segments light vs heavy users and finds negative margin.', 'Correctly models caching and routing.', 'Combines engineering and pricing fixes with quality safeguards.']
  },
  {
    id: 'ch-smoke-test-pivot',
    title: 'Three landing pages, one decision: which customer do we serve?',
    difficulty: 3,
    track: 'validation',
    role: 'Founder',
    scenario: `<p>You are exploring a meal-kit and nutrition service for people with type 2 diabetes. You spent <b>$1,500 on ads</b> for each of three landing pages, each asking for a <b>$10 refundable deposit</b> (or a demo request for the B2B page). You also ran 20 interviews: patients say they "want to eat better" but worry about cost; adult children caring for diabetic parents describe high anxiety and say they would pay. Planned price is <b>$99 a month</b> with a 35% gross margin. You expect about <b>60%</b> of depositors to become paying customers.</p>`,
    data: { headers: ['Variant', 'Cost per click', 'Visitors', 'Sign-ups', 'Deposits / demo requests'], rows: [['A: Meal kits for people with diabetes', '$0.50', '3,000', '240', '12 deposits'], ['B: Meal plans for caregivers of diabetic parents', '$0.60', '2,500', '300', '45 deposits'], ['C: Diabetes nutrition programme for employers (B2B)', '$1.00', '1,500', '-', '30 demo requests, 6 serious pilot conversations']] },
    tasks: ['Calculate conversion rates and cost per deposit.', 'Estimate CAC and payback for the best consumer segment.', 'Decide where to focus and what you still do not know.', 'Design the next experiment.'],
    hints: ['Visitors = spend / cost per click.', 'Deposits measure intent, not retention.'],
    modelAnswer: `<p><b>Funnel:</b></p>
<ul><li>A: deposits 12 / 3,000 = <b>0.4%</b>; cost per deposit = $1,500 / 12 = <b>$125</b>.</li>
<li>B: deposits 45 / 2,500 = <b>1.8%</b>; cost per deposit = $1,500 / 45 = <b>$33</b>.</li>
<li>C: 30 demo requests / 1,500 = 2.0%; $50 per demo request; 6 serious conversations ($250 each).</li></ul>
<p><b>Segment B economics:</b> CAC = $33.3 / 0.6 = <b>about $56</b>. Monthly contribution = $99 x 35% = <b>$34.65</b>, so payback = 56 / 34.65 = <b>about 1.6 months</b>, if customers stay.</p>
<p><b>Decision:</b> <span class="hl">focus on caregivers (B)</span>: 4.5x better deposit conversion than A, backed by interview evidence of urgency and willingness to pay. Keep C warm: pursue the 6 pilot conversations at low effort, since B2B could be a cheaper channel later.</p>
<p><b>Unknowns:</b> retention (does anyone stay 3+ months?), whether the parent actually uses the service, delivery and food costs at small scale, and medical and regulatory claims you can safely make.</p>
<p><b>Next experiment (8 weeks):</b> a concierge MVP for 20 depositors (manual meal plans and a local kitchen partner), charging $99. Success criteria: 60%+ still paying in month 2, a measurable health or adherence signal (for example, logged meals), and NPS above 40. If criteria fail, revisit C before building technology.</p>`,
    rubric: ['Correct conversion and cost-per-deposit math.', 'CAC and payback computed with the deposit-to-paid assumption.', 'Chooses a focus using both numbers and interviews.', 'Names the riskiest unknowns and designs a test with success criteria.']
  }

]);
