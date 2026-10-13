/* MBA Studio — Case library, part 2: 10 decision cases for the Phase 2 tracks */
MBA.addCases([

  /* ---------------- data-decisions ---------------- */
  {
    id: 'case-oakland-moneyball',
    company: 'Oakland Athletics',
    industry: 'Professional sports (baseball)',
    year: '2002',
    track: 'data-decisions',
    title: 'Lose three stars on a tiny budget: trust the scouts or the spreadsheet?',
    situation: `<p>It is the winter before the 2002 season. The Oakland A's have just won 102 games, then lost in the play-offs. Now three of their best players (Jason Giambi, Johnny Damon and closer Jason Isringhausen) leave as free agents for richer clubs. Oakland's payroll is roughly <b>$40 million</b>; the New York Yankees spend more than <b>three times</b> as much.</p>
<p>Traditional scouts judge players by what they see: speed, arm strength, a "baseball body", batting average and stolen bases. General manager <b>Billy Beane</b> and his assistant Paul DePodesta have been studying a different idea, popularised by the writer Bill James and others: runs come from <b>not making outs</b>. Statistics such as <b>on-base percentage</b> predict runs scored better than batting average does, yet the market prices players mainly on the traditional measures. That means some players who walk a lot, look unathletic or have unusual deliveries may be <b>cheap relative to the runs they create</b>.</p>
<p>The scouting department, many with decades of experience, is sceptical. The manager on the field controls who plays each day.</p>`,
    question: 'You are the general manager. How do you rebuild the roster?',
    options: [
      { text: 'Trust the experienced scouts: chase the best-looking young talent you can afford and hope for a breakout.', result: 'You compete for the same visible traits as rich clubs, so you pay market prices for them. With a third of the budget you get a third of the talent.' },
      { text: 'Replace the departed stars in aggregate: buy cheap players whose on-base percentage adds up to what you lost, and build the decision process around that data.', result: 'You buy runs where the market is mispricing them. It is controversial internally and needs leadership to push through, but it gives a poor club a real edge.', best: true },
      { text: 'Ask the owner to raise payroll sharply to keep pace with the big-market clubs.', result: 'The owner has signalled that budgets will stay tight, and even a large increase would not close a three-times gap.' },
      { text: 'Run the numbers, but let each scout decide whether to use them.', result: 'Data that nobody is required to act on rarely changes decisions. You pay for analysis and keep the old biases.' }
    ],
    whatHappened: `<p>Oakland rebuilt the roster around undervalued on-base skills, signing or trading for players other clubs had passed over. After a slow start, the 2002 A's set an American League record with a <b>20-game winning streak</b>, won 103 games and reached the play-offs again, where they lost in the first round. Michael Lewis's 2003 book <i>Moneyball</i> made the approach famous.</p>
<p>The edge did not last: richer clubs hired their own analysts. The Boston Red Sox, whose owner tried to hire Beane after 2002, brought in Bill James and won the World Series in 2004. Within a decade data analytics was standard across the sport, and the advantage moved to new, harder-to-measure areas.</p>`,
    lessons: [
      'Data creates value where the market misprices something because everyone uses the same old measure.',
      'Choose the metric that best predicts the outcome you care about (runs), not the one that is easiest to see.',
      'Analytics only changes results when the decision process and the people with authority change too.',
      'An information edge decays as rivals copy it: keep looking for the next mispriced variable.'
    ],
    frameworks: ['Predictive vs vanity metrics', 'Market inefficiency', 'Base rates vs intuition', 'Diffusion of an advantage']
  },

  /* ---------------- ethics ---------------- */
  {
    id: 'case-wells-fargo-cross-sell',
    company: 'Wells Fargo',
    industry: 'Retail banking',
    year: '2013',
    track: 'ethics',
    title: 'Aggressive sales goals and a newspaper exposé: bad apples or a bad barrel?',
    situation: `<p>Wells Fargo is admired on Wall Street for <b>cross-selling</b>: getting each household to hold more of its products (checking, savings, credit cards, online banking). Its slogan internally is "Eight is great", meaning eight products per customer. Branch employees face daily sales targets, with pay, rankings and job security tied to them.</p>
<p>In December 2013 the <i>Los Angeles Times</i> reports that branch staff, under heavy pressure, have opened accounts and issued cards that customers never asked for, sometimes moving small amounts of money between accounts or creating fake email addresses. The bank has already been firing employees for this behaviour. Investors love the cross-sell numbers, and senior leaders believe the problem is a small group of rule-breakers.</p>`,
    question: 'You are the CEO. How do you respond?',
    options: [
      { text: 'Treat it as misconduct by a few employees: fire those involved, add monitoring, keep the targets.', result: 'The incentive that drives the behaviour stays in place, so the problem keeps coming back, and each wave of firings makes the bank look worse when the full story emerges.' },
      { text: 'Investigate the root cause independently, scrap or redesign product-count sales goals, refund and notify affected customers, report to regulators and hold senior leaders accountable.', result: 'Costly and embarrassing in the short term, and the cross-sell metric drops, but it removes the cause, limits the scandal and protects trust, which is a bank\'s core asset.', best: true },
      { text: 'Quietly soften the targets a little and say nothing publicly.', result: 'Some pressure eases, but customers are not made whole and the bank loses control of the story when regulators or journalists find the rest.' },
      { text: 'Challenge the newspaper\'s reporting and defend the sales culture as industry-leading.', result: 'Short-term defence of the share price, but if the story is true it destroys credibility with regulators, staff and customers.' }
    ],
    whatHappened: `<p>The bank kept its approach for years. In <b>September 2016</b> regulators fined Wells Fargo a combined <b>$185 million</b>; the bank said it had fired about <b>5,300</b> employees over five years and that up to about 2 million accounts might have been opened without authorisation (a figure later raised to about 3.5 million). CEO John Stumpf faced hostile hearings in Congress, gave up tens of millions of dollars in pay and resigned in October 2016. The bank eliminated product sales goals for retail bankers.</p>
<p>In 2018 the US Federal Reserve imposed an unusual <b>cap on the bank\'s total assets</b> until it fixed its governance, which held back growth for years, and in 2020 the bank agreed to pay <b>$3 billion</b> to settle criminal and civil investigations. Further scandals in other units surfaced along the way.</p>`,
    lessons: [
      'Incentives are an ethical design choice: if hitting the target requires cheating for many people, the target is the problem.',
      'When misconduct is widespread, "bad apples" is usually a "bad barrel": look at systems and leaders, not only frontline staff.',
      'The cost of a delayed admission grows over time; early, full disclosure is usually cheaper.',
      'A metric investors love can hide value destruction; ask how each number is produced.'
    ],
    frameworks: ['Goodhart\'s law', 'Bad apples vs bad barrels', 'Stakeholder analysis', 'Fraud triangle (pressure, opportunity, rationalisation)']
  },

  /* ---------------- global ---------------- */
  {
    id: 'case-uber-china',
    company: 'Uber',
    industry: 'Ride-hailing',
    year: '2016',
    track: 'global',
    title: 'Losing over a billion dollars a year in China: fight on or fold into the rival?',
    situation: `<p>Uber entered China in 2014 and made it a top priority, setting up a local entity (Uber China) and raising money from Chinese investors such as Baidu. Its rival <b>Didi Chuxing</b>, formed in 2015 from the merger of two local apps, is backed by Tencent and Alibaba, has far more riders and drivers, and in May 2016 receives a <b>$1 billion</b> investment from Apple.</p>
<p>Both companies are paying huge subsidies to riders and drivers. In early 2016 CEO Travis Kalanick says publicly that Uber is losing <b>more than $1 billion a year</b> in China. In July 2016 China legalises ride-hailing nationally, but the new rules also restrict pricing below cost and add licensing requirements. Uber is preparing for an eventual IPO and its investors want a path to profit.</p>`,
    question: 'You are Uber\'s CEO. What do you do about China?',
    options: [
      { text: 'Keep fighting: raise more money and outspend Didi city by city until it blinks.', result: 'Didi has local champions behind it and the home advantage; the new pricing rules make subsidy wars harder to win. You keep burning cash that could fund other markets.' },
      { text: 'Sell Uber China to Didi in exchange for a significant equity stake and a board seat, ending the subsidy war.', result: 'You stop the losses immediately, keep upside in China\'s growth through Didi shares and redeploy capital to winnable markets, but you give up direct control.', best: true },
      { text: 'Shut down Uber China and walk away with nothing.', result: 'Stops the losses but throws away the value of the drivers, riders and brand you built, which a buyer would pay for.' },
      { text: 'Retreat to a few premium cities with a high-end service only.', result: 'Smaller losses, but Didi can still undercut you, and a niche position rarely supports the scale economics ride-hailing needs.' }
    ],
    whatHappened: `<p>In <b>August 2016</b> Uber agreed to sell Uber China to Didi. Uber received a stake in Didi (widely reported at about 17.7% economic interest, with a smaller voting share), Kalanick joined Didi\'s board, and Didi invested <b>$1 billion</b> in Uber. The subsidy war ended. Uber made similar "merge with the local leader for a stake" deals later in Southeast Asia (with Grab, 2018) and Russia (with Yandex, 2017).</p>
<p>The Didi stake later became a source of value and of volatility: Didi listed in New York in 2021, then faced a Chinese regulatory crackdown and delisted in 2022. Uber went public in 2019 and eventually reached operating profitability without China.</p>`,
    lessons: [
      'Local network effects plus home-government support make "outspend the local champion" a very expensive strategy.',
      'Exit is a strategic option: swapping a losing position for equity in the winner can preserve value.',
      'Regulation is part of the market: a new rule can change which strategy is possible overnight.',
      'Count the opportunity cost: capital burned in one market cannot be spent defending others.'
    ],
    frameworks: ['CAGE distance', 'Network effects and local scale', 'Liability of foreignness', 'Real options (exit for equity)']
  },

  /* ---------------- negotiation ---------------- */
  {
    id: 'case-disney-pixar',
    company: 'The Walt Disney Company',
    industry: 'Media / Animation',
    year: '2005',
    track: 'negotiation',
    title: 'The partner who walked out: renegotiate, rebuild or buy Pixar?',
    situation: `<p>Since 1991 Disney has distributed Pixar\'s computer-animated films (<i>Toy Story</i>, <i>Finding Nemo</i>, <i>The Incredibles</i>) and shared the profits. The films are enormous hits, while Disney\'s own animation studio has struggled. In early 2004 talks to renew the deal collapse after a bitter relationship between Disney CEO Michael Eisner and Pixar CEO <b>Steve Jobs</b>. Pixar plans to go elsewhere after its last contracted film.</p>
<p>In October 2005 <b>Bob Iger</b> becomes Disney\'s CEO. He has noticed that Disney\'s recent popular animated characters mostly come from Pixar, not Disney. Animation drives theme parks, toys and TV. Pixar is a public company; Jobs owns about half of it. Pixar\'s creative leaders (John Lasseter and Ed Catmull) care deeply about protecting their culture from a big corporation.</p>`,
    question: 'You are Disney\'s new CEO. What is your negotiation strategy with Pixar?',
    options: [
      { text: 'Offer Pixar a better distribution deal with a larger profit share.', result: 'Jobs has strong alternatives (any studio would distribute Pixar), so you would pay more for less control, and Disney animation stays weak.' },
      { text: 'Rebuild Disney\'s own CG animation studio and compete with Pixar.', result: 'Possible over many years, but Disney\'s own recent CG work has been unremarkable; the creative talent gap is the real problem.' },
      { text: 'Rebuild the relationship personally, then propose buying Pixar for stock, putting Pixar\'s leaders in charge of all Disney animation and committing in writing to protect Pixar\'s culture.', result: 'Expensive, but it addresses what Pixar\'s side values (creative control, culture, upside via Disney shares) as well as price, and it fixes Disney\'s core creative weakness.', best: true },
      { text: 'Wait: Pixar will need a distributor and will come back on Disney\'s terms.', result: 'Misreads both sides\' BATNAs. Pixar has many suitors; Disney has no hit-making animation studio of its own.' }
    ],
    whatHappened: `<p>Iger opened talks with Jobs soon after taking over. In <b>January 2006</b> Disney agreed to buy Pixar in an all-stock deal valued at about <b>$7.4 billion</b>. Jobs became Disney\'s largest individual shareholder and joined its board; Catmull and Lasseter took charge of both Pixar and Walt Disney Animation Studios, and Disney agreed to preserve many elements of Pixar\'s identity and practices.</p>
<p>Many analysts called the price high. Over the next decade Pixar kept producing hits and Disney Animation revived with films such as <i>Tangled</i> and <i>Frozen</i>. The deal also became the template for Disney\'s later acquisitions of Marvel (2009) and Lucasfilm (2012).</p>`,
    lessons: [
      'Assess both sides\' BATNAs honestly: here Pixar\'s alternative was strong and Disney\'s was weak.',
      'Interests beat positions: Pixar cared about creative control and culture as much as money.',
      'Relationships are an asset in negotiation; a change of person can reopen a deal that "failed".',
      'Paying in stock and handing over leadership can align the other side with the combined company\'s success.'
    ],
    frameworks: ['BATNA and ZOPA', 'Interests vs positions', 'Integrative (value-creating) negotiation', 'Acqui-hire of capabilities']
  },

  /* ---------------- communication ---------------- */
  {
    id: 'case-airbnb-layoff-letter',
    company: 'Airbnb',
    industry: 'Travel / Marketplace',
    year: '2020',
    track: 'communication',
    title: 'Laying off a quarter of the company: how do you say it?',
    situation: `<p>It is spring 2020. COVID-19 has stopped global travel almost overnight. Airbnb, which had been preparing to go public, raises emergency financing and cuts costs, but it is clear the business will be much smaller for a long time: the company expects 2020 revenue to be <b>less than half</b> of 2019\'s.</p>
<p>CEO Brian Chesky decides Airbnb must reduce its workforce of about <b>7,500</b> people by roughly <b>1,900</b>, around 25%. Employees are working from home, anxious and following the news closely. Whatever the company writes will be shared publicly within minutes.</p>`,
    question: 'You are the CEO. How do you communicate the layoffs?',
    options: [
      { text: 'A short, legal-reviewed email from HR: roles are eliminated, details to follow.', result: 'Legally safe but cold. Departing people feel discarded, remaining staff lose trust, and the public reads it as a company that does not care.' },
      { text: 'A personal letter from the CEO to all staff that explains why, how the decision was made, exactly what departing people will receive, and what happens next, followed quickly by individual conversations.', result: 'Painful news delivered with clarity and respect. Departing employees know where they stand; remaining employees see how the company behaves under pressure.', best: true },
      { text: 'Delay the decision and cut a little at a time as the situation becomes clearer.', result: 'Rolling cuts create months of fear, and the best people leave on their own while you wait.' },
      { text: 'Hold an all-hands video call and announce it live, then send details later.', result: 'Personal in tone, but people hear life-changing news without knowing whether they are affected or what support they get, which multiplies anxiety.' }
    ],
    whatHappened: `<p>On <b>5 May 2020</b> Chesky sent a long letter to all employees, later published on the company\'s website. It explained the business outlook, the principles used to decide which teams were cut, and specific support: in the US, 14 weeks\' base pay plus an extra week per year of service, equity vesting for people who had not yet reached their one-year cliff, a year of health insurance, and the right to keep their laptops. Airbnb turned much of its recruiting team into an alumni placement team and created a public directory of departing staff for other employers.</p>
<p>The letter was widely praised as a model of humane, transparent communication. Airbnb went public in December 2020, and the episode is still used as a reference for how to lead through layoffs.</p>`,
    lessons: [
      'Lead with the "why", then the "how", then the concrete "what you get": people need all three.',
      'Specifics (weeks of pay, healthcare, equity) build more trust than warm adjectives.',
      'Your audience for a layoff message includes those who stay, future hires and the public.',
      'One clear cut with generous support usually beats repeated small cuts.'
    ],
    frameworks: ['Pyramid principle (answer first)', 'SCQA', 'Procedural justice', 'Stakeholder communication plan']
  },

  /* ---------------- corp-finance ---------------- */
  {
    id: 'case-toys-r-us-lbo',
    company: 'Toys "R" Us',
    industry: 'Retail (toys)',
    year: '2005',
    track: 'corp-finance',
    title: 'Buy a struggling retailer with mostly borrowed money?',
    situation: `<p>Toys "R" Us is a famous toy retailer whose market share has been squeezed for years by Walmart and Target, which use toys as low-price traffic builders, and by the rise of online shopping. Its baby-products chain, Babies "R" Us, is growing and profitable; the toy business is not. The company owns a lot of valuable real estate.</p>
<p>In 2005 a consortium of private equity firms <b>KKR</b> and <b>Bain Capital</b> with real-estate investor <b>Vornado</b> negotiates to buy the whole company for about <b>$6.6 billion</b>, a premium for shareholders. The plan is a <b>leveraged buyout (LBO)</b>: most of the price will be financed with debt placed on the company itself, which it will have to service from its own cash flows. Investors expect a turnaround, with the real estate as a safety net.</p>`,
    question: 'You sit on the consortium\'s investment committee. How do you approach the deal?',
    options: [
      { text: 'Proceed with heavy leverage: the brand, the real estate and cost cuts will cover the interest, and debt magnifies equity returns.', result: 'Great returns if the turnaround works. But in a low-margin, competitive retail business, large fixed interest payments leave little cash to invest in stores, prices and e-commerce.' },
      { text: 'Proceed only with much lower leverage and a funded plan to invest in stores and online, accepting a lower expected return.', result: 'Lower headline IRR, but the company keeps the flexibility to compete. LBO math works best when cash flows are stable; these are not.', best: true },
      { text: 'Walk away: a structurally challenged retailer is a poor LBO candidate.', result: 'A defensible discipline call. You miss the upside if the turnaround succeeds, but you avoid putting fragile cash flows under a heavy debt load.', best: true },
      { text: 'Buy only the real estate and lease it back to the retailer.', result: 'Lower risk for you, but higher rent payments weaken the retailer in the same way debt would.' }
    ],
    whatHappened: `<p>The buyout closed in 2005, leaving the company with roughly <b>$5 billion of debt</b>; interest payments in later years were reported at around <b>$400 million a year</b>. Toys "R" Us remained profitable at the operating level for some years, but debt service consumed much of the cash that could have gone into stores, prices and online capability, while Amazon, Walmart and Target kept gaining. A planned IPO in 2010 was withdrawn.</p>
<p>In <b>September 2017</b> the company filed for Chapter 11 bankruptcy, and in 2018 it announced the liquidation of its US stores, affecting tens of thousands of jobs. The case became a widely cited example of the risks of loading a structurally challenged business with debt.</p>`,
    lessons: [
      'Leverage magnifies outcomes in both directions; it suits stable, predictable cash flows, not businesses in decline.',
      'Interest is a fixed claim: every dollar of interest is a dollar not invested in competing.',
      'Asset backing (real estate) protects lenders more than it protects the operating business.',
      'Test an LBO against a "flat or falling EBITDA" case, not only the base plan.'
    ],
    frameworks: ['LBO returns (IRR, MOIC)', 'Interest coverage and leverage ratios', 'Financial distress costs', 'Value bridge: growth, deleveraging, multiple']
  },

  /* ---------------- innovation ---------------- */
  {
    id: 'case-intel-dram-exit',
    company: 'Intel',
    industry: 'Semiconductors',
    year: '1985',
    track: 'innovation',
    title: 'Abandon the business you were founded on?',
    situation: `<p>Intel was founded in 1968 as a <b>memory</b> company and created early commercial DRAM chips. Memory is its identity: its engineers, its factories and its reputation are built around it. It also makes microprocessors, a newer business that got a boost when IBM chose an Intel processor for its PC.</p>
<p>By the mid-1980s Japanese manufacturers are producing high-quality memory at prices Intel cannot match, investing heavily through the downturn. Intel\'s memory market share has collapsed and the business is losing money. Inside the company, middle managers have already been shifting factory capacity toward higher-margin microprocessors, but top management still talks about memory as the core.</p>
<p>President Andy Grove later recalled asking chairman Gordon Moore what a new management team would do if the board threw them out. Moore answered: get out of memories.</p>`,
    question: 'You are Intel\'s top management. What do you do?',
    options: [
      { text: 'Invest heavily to regain memory leadership: it is our heritage and a technology driver.', result: 'You fight well-funded rivals on cost in a commodity market where you have lost the advantage, risking the cash the microprocessor business needs.' },
      { text: 'Exit DRAM, close or convert the memory fabs and bet the company on microprocessors.', result: 'Painful layoffs and losses in the short term, but resources move to the business where Intel has a real edge and a growing market.', best: true },
      { text: 'Stay in memory but focus on a premium niche while growing microprocessors.', result: 'Feels like a compromise, but splits scarce capital and leadership attention, and delays the hard decision.' },
      { text: 'Lobby for trade protection and wait for prices to recover.', result: 'Trade action may help at the margin, but does not fix a cost and quality gap, and waiting burns cash.' }
    ],
    whatHappened: `<p>Intel exited the DRAM business in <b>1985–86</b>, closing plants and cutting thousands of jobs, and posted a loss in 1986. It focused on microprocessors, launching the 386 in 1985 and becoming the main supplier to the fast-growing PC industry. By the early 1990s Intel was the world\'s largest semiconductor company.</p>
<p>Grove later described the episode as a <b>strategic inflection point</b> in his book <i>Only the Paranoid Survive</i>. Researchers noted that resource allocation by middle managers had moved ahead of top management\'s stated strategy: the organisation "knew" before the leaders admitted it.</p>`,
    lessons: [
      'Identity can blind leaders: ask what a newcomer with no history would do.',
      'Watch where resources are actually flowing; emergent strategy often signals the future before the official one does.',
      'Exiting a declining core frees capital and talent for the next growth engine.',
      'Speed matters at an inflection point: the cost of delay is cash and morale.'
    ],
    frameworks: ['Strategic inflection points', 'Three horizons of growth', 'Emergent vs deliberate strategy', 'Exit and resource reallocation']
  },

  /* ---------------- self-leadership ---------------- */
  {
    id: 'case-ford-mulally-red-slide',
    company: 'Ford Motor Company',
    industry: 'Automotive',
    year: '2006',
    track: 'self-leadership',
    title: 'Every chart is green, but the company is losing billions',
    situation: `<p>In September 2006 <b>Alan Mulally</b>, an executive from Boeing, becomes CEO of Ford. The company is heading for a record loss (it would report a loss of about $12.7 billion for 2006). Its culture is known for executive rivalry: leaders protect their territory and admitting a problem is seen as career-limiting.</p>
<p>Mulally sets up a weekly <b>Business Plan Review</b>: every senior leader presents the status of their key projects colour-coded green (on track), yellow (at risk) or red (off track). For the first weeks, almost every slide is <b>green</b>. Then Mark Fields, head of the Americas, shows a <b>red</b> slide: a launch of a new vehicle is delayed by a technical problem. The room goes silent; several executives expect Fields to be fired.</p>`,
    question: 'You are the new CEO. How do you react in that moment, and what do you do next?',
    options: [
      { text: 'Ask sharply why this was not caught earlier and who is responsible, to show high standards.', result: 'Everyone learns that red is dangerous; the slides stay green and you keep flying blind.' },
      { text: 'Thank him publicly for the visibility, ask the room "who can help Mark with this?", and keep the same calm, problem-solving response every week.', result: 'You make honesty safe and turn problems into shared work. Over the following weeks the charts start to show the real picture.', best: true },
      { text: 'Say nothing in the meeting and deal with it privately later.', result: 'The room reads silence as disapproval. You lose the moment to set a new norm.' },
      { text: 'Bring in consultants to audit every project instead of relying on the executives.', result: 'You may find the problems, but you signal distrust and fail to build a team that tells you the truth itself.' }
    ],
    whatHappened: `<p>Mulally reportedly applauded and thanked Fields for the clarity, then asked who could help. The next week the slides came in a mix of colours. The weekly review became the core of Mulally\'s "One Ford" plan, built on shared data, transparency and holding each other accountable for the plan rather than for looking good.</p>
<p>Ford had borrowed about <b>$23.6 billion</b> in late 2006, pledging most of its assets, which gave it a cushion when the financial crisis hit. It was the only one of the three big US automakers not to go through a government-funded bankruptcy in 2009, and returned to profit that year. Fields later became Ford\'s CEO.</p>`,
    lessons: [
      'Your first reaction to bad news teaches the organisation whether to bring you bad news again.',
      'Self-leadership under pressure means managing your own emotions so the team can manage the problem.',
      'Separate the problem from the person: "the plan is red", not "you are failing".',
      'Rituals (a weekly review, a shared format) turn a one-off moment into a culture.'
    ],
    frameworks: ['Psychological safety', 'Emotional regulation', 'Leader shadow (behaviour sets norms)', 'Operating rhythm']
  },

  /* ---------------- esg ---------------- */
  {
    id: 'case-unilever-sustainable-living',
    company: 'Unilever',
    industry: 'Consumer goods',
    year: '2010',
    track: 'esg',
    title: 'Double the business while halving its footprint?',
    situation: `<p><b>Paul Polman</b> became Unilever\'s CEO in 2009, after a decade of slow growth. Soon after joining he stopped giving earnings guidance and moved away from full quarterly profit reporting, telling investors who wanted short-term trading to look elsewhere.</p>
<p>In 2010 he proposes a bold plan: <b>double the size of the business while halving its environmental footprint</b> and increasing its positive social impact, with public targets for 2020 on health and hygiene, sourcing agricultural raw materials sustainably, and greenhouse gas, water and waste per product use. Most of a consumer product\'s emissions come not from Unilever\'s factories but from farms that grow its ingredients and from consumers using products (for example, heating water to shower or wash clothes).</p>
<p>Some investors worry this will distract from margins; competitors are watching.</p>`,
    question: 'You are the CEO. How do you build sustainability into the strategy?',
    options: [
      { text: 'Keep sustainability as a corporate responsibility programme run by a small team, separate from brand strategy.', result: 'Low risk, low impact. It produces reports but does not change products, suppliers or growth.' },
      { text: 'Make it the core of the business plan: public, measurable targets across the value chain (including Scope 3), owned by brand and supply chain leaders and tied to growth.', result: 'Differentiates brands and builds supplier resilience, but invites scrutiny if targets are missed and needs constant proof that it supports financial performance.', best: true },
      { text: 'Announce ambitious goals for reputation, but only measure what happens in your own factories.', result: 'Easy to hit and report, but ignores where most of the footprint is. Risks accusations of greenwashing.' },
      { text: 'Wait until regulation forces disclosure, then comply.', result: 'Avoids early costs, but leaves you a follower when customers, retailers and talent start rewarding leaders.' }
    ],
    whatHappened: `<p>Unilever launched the <b>Unilever Sustainable Living Plan</b> in November 2010 and reported progress every year. It made significant progress on sustainable sourcing and on factory emissions, water and waste, and reported that its "sustainable living brands" grew faster than the rest of the portfolio. It fell well short of halving the footprint per consumer use, largely because emissions during consumer use proved hard to influence.</p>
<p>In 2017 Unilever rejected a takeover approach from Kraft Heinz reportedly valued at about $143 billion, and then faced pressure to raise margins. Later, some investors publicly criticised the company for focusing on brand "purpose" over performance, and after 2023 new management reset several targets and narrowed the agenda to fewer, more business-critical priorities. The plan remains one of the most studied attempts to integrate sustainability into corporate strategy.</p>`,
    lessons: [
      'Most of a product company\'s footprint sits in Scope 3: targets that ignore it miss the point.',
      'ESG works best when owned by the line (brands, supply chain), not a separate department.',
      'Public targets create accountability in both directions: progress builds trust, misses must be explained honestly.',
      'Long-term strategy still needs a credible link to financial performance to survive investor pressure.'
    ],
    frameworks: ['Scope 1, 2 and 3 emissions', 'Shared value', 'Stakeholder capitalism vs shareholder primacy', 'Materiality assessment']
  },

  /* ---------------- india ---------------- */
  {
    id: 'case-zerodha-bootstrapping',
    company: 'Zerodha',
    industry: 'Financial services (stock broking)',
    year: '2015',
    track: 'india',
    title: 'Venture capital is knocking: raise big or stay bootstrapped?',
    situation: `<p>Founded in 2010 by brothers <b>Nithin and Nikhil Kamath</b>, Zerodha is an online discount broker in India. Instead of charging a percentage of each trade like traditional bank-owned brokers, it charges a <b>flat ₹20 per order</b> for intraday and derivatives trades, and in 2015 it makes equity delivery trades free. It has built its own trading platform (Kite) and a free investor education site (Varsity).</p>
<p>Growth is steady and the company is profitable without outside capital. India\'s consumer-internet boom is in full swing and venture capital firms are offering large cheques to fintech start-ups, which are spending heavily on advertising, cashbacks and referral bonuses. Only a small share of Indians invest directly in stocks, so the market could grow enormously, and competitors may soon copy the flat-fee model.</p>`,
    question: 'You are the founder. Do you raise a big venture round to grow faster?',
    options: [
      { text: 'Raise a large round and spend on TV ads and referral bonuses to grab the market before copycats arrive.', result: 'Faster user growth for a while, but paid users who come for bonuses are less loyal, and investor expectations push you to monetise harder later.' },
      { text: 'Stay bootstrapped and profitable: grow through low prices, product quality, education and word of mouth, and keep control of the pace.', result: 'Slower in some years, but growth is organic, customers are well informed and loyal, and you keep full control and avoid pressure for a quick exit.', best: true },
      { text: 'Raise money and use it to acquire a traditional broker for its customer base.', result: 'Buys customers on a high-cost, full-service model that clashes with your low-cost, tech-first one.' },
      { text: 'Sell the company to a large bank-owned broker while valuations are high.', result: 'A certain payout, but you exit a market just before it grows enormously.' }
    ],
    whatHappened: `<p>Zerodha never raised outside venture capital. It grew mainly by word of mouth, low costs, technology and education, and around <b>2019</b> became India\'s largest broker by active clients, overtaking long-established bank-owned brokers. The pandemic-era surge in retail investing boosted volumes further, and the company reported very large profits for a fintech of its size.</p>
<p>Competition intensified: venture-backed Groww overtook Zerodha in active clients in 2023, and from late 2024 tighter rules from the regulator SEBI on derivatives trading and broker charges hit the industry\'s revenues. Zerodha remains one of India\'s best-known examples of a profitable, bootstrapped tech company.</p>`,
    lessons: [
      'Venture capital is a tool, not a goal: if the business funds itself, outside money mostly buys speed and pressure.',
      'In a trust-based product, education and word of mouth can beat paid acquisition.',
      'A simple, transparent price can be a powerful wedge against incumbents with complex fees.',
      'Regulation is a key variable in Indian financial services: plan for rules to change.'
    ],
    frameworks: ['Bootstrapping vs venture funding', 'Disruptive pricing (flat fee)', 'Customer acquisition cost and word of mouth', 'Regulatory risk']
  }

]);
