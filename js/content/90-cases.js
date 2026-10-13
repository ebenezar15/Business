/* MBA Studio — Case library: 30 decision-style case studies */
MBA.addCases([

  /* ---------------- business-101 ---------------- */
  {
    id: 'case-blockbuster-netflix',
    company: 'Blockbuster',
    industry: 'Video rental / Retail',
    year: '2000',
    track: 'business-101',
    title: 'Buy a tiny DVD-by-mail startup for $50 million?',
    situation: `<p>It is 2000. Blockbuster is the king of home video: thousands of stores worldwide, billions of dollars in revenue, and a brand everyone knows. A meaningful slice of its profit comes from <b>late fees</b> that customers hate.</p>
<p>Reed Hastings and Marc Randolph of <b>Netflix</b>, a small loss-making DVD-by-mail company with a few hundred thousand subscribers, fly to Dallas. They offer to sell Netflix to Blockbuster for about <b>$50 million</b> and to run Blockbuster's online brand.</p>
<p>Broadband is still rare, the dot-com bubble is bursting, and Netflix's model (no late fees, monthly subscription) looks niche.</p>`,
    question: 'You are Blockbuster\'s CEO. What do you do with the offer?',
    options: [
      { text: 'Decline politely. Netflix is a niche, loss-making business and our stores are the moat.', result: 'You protect short-term profit and late-fee income, but leave a fast-learning rival free to build the subscription and data capabilities you lack.' },
      { text: 'Buy Netflix for $50M and let its team build Blockbuster\'s online and subscription business with real autonomy.', result: 'A small bet (a fraction of one year\'s profit) buys a team, a customer list and a learning engine for the next model. You cannibalise late fees but control the future.', best: true },
      { text: 'Decline, but copy the model internally later if it ever takes off.', result: 'Possible in theory, but large incumbents usually move late, and an internal unit competing with stores fights the store managers for budget and attention.' },
      { text: 'Invest a small minority stake to watch them.', result: 'Cheap option value and learning, but no control, and it does not change how Blockbuster itself serves customers.' }
    ],
    whatHappened: `<p>Blockbuster declined; Netflix later recalled that the offer was met with little interest. Blockbuster did eventually launch Blockbuster Online (2004) and the strong "Total Access" programme (2006), and it dropped late fees, but those moves came late and were costly. After a leadership change in 2007 the company pulled back on online investment. Blockbuster filed for bankruptcy in 2010. Netflix moved into streaming and became one of the world's largest media companies.</p>`,
    lessons: [
      'A business model that relies on customers being annoyed (late fees) is fragile once a rival removes the pain.',
      'Small acquisitions can be cheap options on the future: compare the price to the cost of being wrong.',
      'Incumbents usually have the money to respond; what they lack is the will to cannibalise their own profit.'
    ],
    frameworks: ['Innovator\'s dilemma', 'Value creation vs value capture', 'Real options']
  },

  /* ---------------- economics ---------------- */
  {
    id: 'case-southwest-10-minute-turn',
    company: 'Southwest Airlines',
    industry: 'Airlines',
    year: '1972',
    track: 'economics',
    title: 'Sell a plane but keep the whole schedule?',
    situation: `<p>Southwest is a young airline flying only inside Texas, using a handful of Boeing 737s. Bigger rivals fight it in court and on price. Cash is very tight and the company decides it must <b>sell one of its four planes</b>.</p>
<p>An airline's biggest costs (aircraft, crews, maintenance) are mostly fixed. A plane earns money only when it is in the air carrying passengers; time sitting at a gate is pure cost. Industry turnaround times at the gate are typically far longer than the time actually needed to unload and reload passengers.</p>`,
    question: 'You run operations. One plane is gone. What do you do with the schedule?',
    options: [
      { text: 'Cut the schedule by a quarter to match the smaller fleet.', result: 'Revenue falls by roughly a quarter while many fixed costs (staff, gates, overhead) stay, pushing the airline deeper into losses.' },
      { text: 'Keep the full schedule with three planes by turning each plane around at the gate in about 10 minutes.', result: 'The same assets fly more hours per day, fixed costs are spread over more seats, and the culture learns to obsess over speed.', best: true },
      { text: 'Raise fares to make up for fewer flights.', result: 'On short routes where customers can drive or take the bus, demand is price-sensitive, so higher fares shrink traffic further.' },
      { text: 'Lease a replacement plane on expensive short-term terms.', result: 'Keeps the schedule but adds cost the airline cannot afford, and does not fix the underlying economics.' }
    ],
    whatHappened: `<p>Southwest kept most of its schedule by pioneering the famous <b>10-minute turn</b>. Quick turns, a single aircraft type, point-to-point routes and secondary airports became the core of its low-cost model. Southwest went on to report decades of consecutive annual profits (from 1973 until the pandemic year of 2020), an unmatched streak in US aviation.</p>`,
    lessons: [
      'When costs are mostly fixed, utilisation is everything: sweat the assets.',
      'Constraints can force the innovation that becomes your advantage.',
      'Low cost is a system (one plane type, quick turns, simple routes), not a single trick, which makes it hard to copy.'
    ],
    frameworks: ['Fixed vs variable costs', 'Asset utilisation', 'Activity-system fit (Porter)']
  },

  /* ---------------- ideation ---------------- */
  {
    id: 'case-slack-glitch',
    company: 'Tiny Speck (Slack)',
    industry: 'Software / Games',
    year: '2012',
    track: 'ideation',
    title: 'Your game failed. Is the internal chat tool the real business?',
    situation: `<p>Stewart Butterfield's company Tiny Speck spent years building <b>Glitch</b>, a quirky online game. Despite loyal fans it could not attract enough players to be viable. Money is running low.</p>
<p>To coordinate a remote team, the engineers built an internal chat tool on top of IRC with searchable history and integrations. Everyone uses it all day. The company still has some venture money and a talented team.</p>`,
    question: 'You are the CEO. What do you do now?',
    options: [
      { text: 'Keep investing in Glitch: one big marketing push could still make it work.', result: 'You burn the remaining cash on a product the market has already told you it does not want enough.' },
      { text: 'Shut down Glitch, return what money you can, and close the company.', result: 'Honest and clean, but you throw away a working team and an internal product that people love using every day.' },
      { text: 'Shut down Glitch and turn the internal chat tool into a product for other teams, testing it with friendly companies first.', result: 'You redeploy the team and cash onto a problem you have lived yourselves, with a product already proven internally.', best: true },
      { text: 'Pivot to a different game genre using the same engine.', result: 'You keep the team busy but stay in a hit-driven market where your previous attempt failed.' }
    ],
    whatHappened: `<p>Glitch shut down in late 2012. Butterfield offered investors their money back; most chose to stay. The team turned the chat tool into <b>Slack</b>, tested it with friendly companies, and launched publicly in 2014. It became one of the fastest-growing business software products ever, went public in 2019 and was acquired by Salesforce in 2021 for about $27.7 billion.</p>`,
    lessons: [
      'Look at what you built to solve your own problems: internal tools can be the real product.',
      'Pivots keep the team and the learning while changing the customer or the problem.',
      'Test with friendly early users before a public launch to shape the product.'
    ],
    frameworks: ['Pivot vs persevere (Lean Startup)', 'Founder-market fit', 'Scratch your own itch']
  },

  /* ---------------- validation ---------------- */
  {
    id: 'case-airbnb-early-days',
    company: 'Airbnb',
    industry: 'Travel / Marketplace',
    year: '2008–2009',
    track: 'validation',
    title: 'Broke founders, flat growth: what keeps you alive?',
    situation: `<p>Brian Chesky, Joe Gebbia and Nathan Blecharczyk have a website where people rent air mattresses and spare rooms. Growth is flat, investors keep saying no, and the founders are carrying credit card debt.</p>
<p>During the 2008 US election they make novelty cereal boxes, "Obama O's" and "Cap'n McCain's", and sell them, raising roughly $30,000. That gets them into Y Combinator in early 2009. Paul Graham pushes them to go and meet their users in New York, their biggest market. They notice the listing photos are terrible.</p>`,
    question: 'You are the founders. Where do you spend your scarce time?',
    options: [
      { text: 'Build more features and a better search algorithm from the office.', result: 'Engineering effort with little evidence it fixes the problem; the listings still look unappealing.' },
      { text: 'Spend on online ads to drive more traffic to the site.', result: 'More visitors land on the same poor listings, so you buy expensive traffic that does not convert.' },
      { text: 'Fly to New York, meet hosts in person, and personally photograph their apartments with a rented professional camera.', result: 'An unscalable, manual move that directly tests a hypothesis (better photos lead to more bookings) and builds deep host relationships.', best: true },
      { text: 'Pivot to a hotel booking site since hotels already have good photos.', result: 'You abandon your unique supply and enter a crowded market dominated by large incumbents.' }
    ],
    whatHappened: `<p>The founders went door to door in New York, taking professional photos. Bookings from those listings rose sharply, and revenue in the city roughly doubled within weeks, according to the founders. Airbnb later turned this into a free professional photography programme. The episode became the classic example of Paul Graham's advice, <b>"Do things that don't scale."</b> Airbnb went public in 2020.</p>`,
    lessons: [
      'Talk to users in person; the real problem is often visible within an hour.',
      'Manual, unscalable experiments are the cheapest way to validate a growth hypothesis.',
      'Persistence plus creative fundraising can buy the time you need to find what works.'
    ],
    frameworks: ['Do things that don\'t scale', 'Build-Measure-Learn', 'Customer discovery']
  },

  /* ---------------- business-model ---------------- */
  {
    id: 'case-amazon-aws',
    company: 'Amazon',
    industry: 'E-commerce / Cloud',
    year: '2003–2006',
    track: 'business-model',
    title: 'Sell your internal infrastructure to the world?',
    situation: `<p>Amazon is an online retailer with thin margins. To move fast, it has rebuilt its technology into standard internal services (storage, computing, databases) that teams can use through simple interfaces.</p>
<p>Leaders including Andy Jassy realise that many other companies struggle with the same undifferentiated "heavy lifting" of running servers. The idea: rent computing and storage to anyone, pay-as-you-go, at low prices. Critics say a bookstore has no business selling IT infrastructure, and it would need big upfront investment.</p>`,
    question: 'You are Jeff Bezos. Do you launch this as a public business?',
    options: [
      { text: 'No. Stay focused on retail; infrastructure is a cost centre, not a business.', result: 'Retail stays focused, but you miss a market where your scale and operating discipline are a real advantage.' },
      { text: 'Yes, launch simple building-block services (storage, compute) for developers, priced pay-as-you-go, and keep investing.', result: 'You create a new market with high fixed costs spread over many customers, and Amazon becomes its own biggest customer.', best: true },
      { text: 'Sell the technology as licensed software for companies to install in their own data centres.', result: 'Familiar model, but customers keep the hard work of running servers, so you lose the main value of the idea.' },
      { text: 'Offer it only to large enterprise customers through a sales force.', result: 'Slower adoption and higher cost of sales; you miss the start-ups and developers who adopt fastest.' }
    ],
    whatHappened: `<p>Amazon launched S3 (storage) in March 2006 and EC2 (compute) in August 2006. Start-ups adopted it rapidly, then enterprises followed. Amazon Web Services created the modern cloud computing market and became Amazon's largest source of operating profit for many years, funding investment across the company.</p>`,
    lessons: [
      'Capabilities you build for yourself can become a product if they solve a common problem.',
      'Usage-based pricing lowers the barrier to adoption and grows with the customer.',
      'Being your own first customer forces the product to be good enough for real workloads.'
    ],
    frameworks: ['Platform business model', 'Economies of scale', 'Business Model Canvas']
  },
  {
    id: 'case-mpesa',
    company: 'Safaricom (M-Pesa)',
    industry: 'Telecom / Fintech',
    year: '2007',
    track: 'business-model',
    title: 'A microfinance pilot gets hijacked by customers',
    situation: `<p>Kenya, mid-2000s. Most adults do not have a bank account, but mobile phones are spreading quickly. Safaricom, with funding support from the UK's development agency, pilots a service letting microfinance borrowers repay loans by phone.</p>
<p>In the pilot, people use it for something else entirely: <b>sending money to family</b>, paying each other and storing value. Banks are wary, regulation is unclear, and the service needs a network of agents (small shops) to turn cash into e-money and back.</p>`,
    question: 'You are leading the product at Safaricom. What do you launch?',
    options: [
      { text: 'Launch as designed: a loan repayment tool for microfinance institutions.', result: 'A small B2B niche that ignores the much bigger need customers revealed in the pilot.' },
      { text: 'Launch a simple person-to-person money transfer service ("send money home") with a large agent network and clear, low fees.', result: 'You follow real customer behaviour into a huge underserved market, using your brand and retail reach.', best: true },
      { text: 'Partner with banks so that only bank customers can use it.', result: 'Safer politically, but excludes most of the people who need it, killing network effects.' },
      { text: 'Wait for a full regulatory framework before launching anything.', result: 'You avoid risk but might wait years, while the opportunity may be taken by others.' }
    ],
    whatHappened: `<p>Safaricom launched M-Pesa in March 2007 positioned around "send money home". The Central Bank of Kenya allowed it to operate under a pragmatic, watchful approach. Adoption was extremely fast, and within a few years a large majority of Kenyan households used it. A widely cited study (Suri and Jack, 2016) estimated that access to M-Pesa lifted about 2% of Kenyan households out of extreme poverty. It expanded into savings, credit and merchant payments.</p>`,
    lessons: [
      'Watch what customers actually do in a pilot, not what you designed it for.',
      'Distribution (the agent network) can matter more than the technology.',
      'Constructive engagement with regulators can open markets that rules were not written for.'
    ],
    frameworks: ['Jobs to be done', 'Network effects', 'Two-sided platform']
  },
  {
    id: 'case-ikea-flat-pack',
    company: 'IKEA',
    industry: 'Furniture retail',
    year: '1950s',
    track: 'business-model',
    title: 'Boycotted by suppliers: how do you keep prices low?',
    situation: `<p>Sweden in the 1950s. Ingvar Kamprad's IKEA sells furniture by mail order and from a showroom at prices well below traditional stores. Established furniture retailers pressure manufacturers to <b>boycott IKEA</b> and keep it out of trade fairs.</p>
<p>Meanwhile, shipping assembled furniture is expensive and pieces get damaged. An employee, Gillis Lundgren, takes the legs off a table so it fits in a car.</p>`,
    question: 'You are Kamprad. How do you respond to the boycott and the cost problem?',
    options: [
      { text: 'Raise prices to traditional levels so suppliers will work with you again.', result: 'You end the conflict but give up the very thing that makes customers choose IKEA.' },
      { text: 'Design your own furniture, source from new manufacturers (including abroad), and ship it flat-packed for customers to assemble themselves.', result: 'You control design and costs, cut shipping and storage, and turn the customer into part of the production line.', best: true },
      { text: 'Sue the retailers and wait for courts to resolve it.', result: 'Slow and uncertain; meanwhile you have nothing to sell.' },
      { text: 'Switch to selling only small household goods that suppliers will still provide.', result: 'Survival, but you shrink into a small shop and lose the furniture opportunity.' }
    ],
    whatHappened: `<p>IKEA began designing its own products and sourcing from manufacturers outside Sweden, notably in Poland. Flat-pack design and self-assembly became central from the mid-1950s. The model (design for cost, huge volumes, self-service warehouses, customers transporting and assembling) let IKEA become the world's largest furniture retailer.</p>`,
    lessons: [
      'Hostile incumbents can force you to own the parts of the value chain that matter.',
      'Shifting some work to the customer can lower price and still feel like value.',
      'Design the product around the cost of the whole system (shipping, storage), not just the factory.'
    ],
    frameworks: ['Value chain analysis', 'Vertical integration', 'Design to cost']
  },

  /* ---------------- marketing ---------------- */
  {
    id: 'case-dollar-shave-club',
    company: 'Dollar Shave Club',
    industry: 'Consumer goods / D2C',
    year: '2012',
    track: 'marketing',
    title: 'Taking on Gillette with a $4,500 video',
    situation: `<p>Razors in the US are dominated by Gillette, with heavy TV advertising, retail shelf power and expensive multi-blade cartridges locked in theft-proof cases. Michael Dubin has a supplier for decent cartridges and wants to sell them by monthly subscription, delivered by mail, for a few dollars.</p>
<p>He has very little money for marketing, but he has a background in improv comedy.</p>`,
    question: 'You are the founder with a tiny budget. How do you launch?',
    options: [
      { text: 'Buy search ads for "cheap razors" and compete on price.', result: 'You attract bargain hunters with no loyalty, and your budget runs out quickly.' },
      { text: 'Try to get shelf space in drugstores at a lower price than Gillette.', result: 'Retailers favour the incumbent who funds their promotions; you would need money you do not have.' },
      { text: 'Make a funny, founder-led video that names the customer\'s frustration (overpriced razors) and links straight to a simple subscription.', result: 'Content that people want to share can reach millions for almost nothing, and the subscription turns attention into recurring revenue.', best: true },
      { text: 'Wait until you raise a big round and launch with TV ads.', result: 'You lose time and fight the incumbent on its strongest ground.' }
    ],
    whatHappened: `<p>The launch video, "Our Blades Are F***ing Great", reportedly cost about $4,500 to make. It went viral in March 2012 and the company said it got around 12,000 orders in the first two days, crashing its site. Dollar Shave Club grew quickly, helped push razor prices down across the industry, and was acquired by Unilever in 2016 for a reported $1 billion.</p>`,
    lessons: [
      'A clear enemy (overpriced, over-engineered products) makes a message memorable.',
      'Brand voice and humour can beat big budgets in the attention economy.',
      'Pair attention with a frictionless offer (subscription) to capture value.'
    ],
    frameworks: ['Positioning', 'Direct-to-consumer (D2C) model', 'Challenger brand strategy']
  },
  {
    id: 'case-netflix-qwikster',
    company: 'Netflix',
    industry: 'Media / Streaming',
    year: '2011',
    track: 'marketing',
    title: 'Split the company and raise prices at the same time?',
    situation: `<p>Mid-2011. Netflix has grown fast with a combined plan of DVDs by mail plus unlimited streaming. Reed Hastings believes streaming is the future and DVDs will decline. Studios are demanding much more money for streaming rights.</p>
<p>Netflix has already announced in July that DVD and streaming will become separate plans, a <b>roughly 60% price increase</b> for customers who want both. Now the team is considering spinning the DVD business into a separate brand and website called <b>Qwikster</b>, with separate accounts and billing.</p>`,
    question: 'You are the CEO. What do you do next?',
    options: [
      { text: 'Launch Qwikster: separate brand, separate website, separate account for DVDs.', result: 'Strategically clean for the company, but customers feel the price hike and then extra hassle at the same time, which can trigger a backlash.' },
      { text: 'Keep one brand and one website, keep the new pricing, and over-communicate why streaming is the future, apologising for how the change was handled.', result: 'Customers keep one simple experience while the company still shifts investment to streaming.', best: true },
      { text: 'Reverse the price increase completely.', result: 'Calms customers but leaves the company without money to pay for expensive streaming content.' },
      { text: 'Shut down DVDs immediately to force everyone onto streaming.', result: 'Streaming catalogue is still limited, so many customers would leave.' }
    ],
    whatHappened: `<p>Netflix announced Qwikster in September 2011, and the reaction was harsh. Netflix lost around 800,000 US subscribers in the quarter and its share price fell by about three quarters from its summer peak. Within weeks, Netflix cancelled Qwikster and kept one brand. Hastings publicly apologised for the communication. The price change stayed, streaming kept growing, and Netflix recovered strongly in the following years.</p>`,
    lessons: [
      'The right strategy can still fail through poor execution and communication.',
      'Avoid stacking two pain points (higher price plus more friction) on customers at once.',
      'Admitting a mistake quickly and reversing it can limit the damage.'
    ],
    frameworks: ['Customer experience journey', 'Change management', 'Brand architecture']
  },

  /* ---------------- sales ---------------- */
  {
    id: 'case-apple-itunes-labels',
    company: 'Apple',
    industry: 'Consumer electronics / Music',
    year: '2002–2003',
    track: 'sales',
    title: 'Convincing the record labels to sell songs for 99 cents',
    situation: `<p>The music industry is being hit by piracy (Napster and its successors). Labels sell albums on CDs and fear that selling single songs online will destroy album sales. Legal download services are clumsy, with restrictive subscriptions.</p>
<p>Apple sells the iPod (launched 2001) and has a small share of the computer market. Steve Jobs wants a store where people buy individual songs simply, for a single low price. He needs licences from all five major labels.</p>`,
    question: 'You lead the negotiation. What pitch and deal do you take to the labels?',
    options: [
      { text: 'Offer a subscription model like the existing services, with labels setting prices per song.', result: 'Easy for labels to accept, but you rebuild the confusing services that customers have already rejected.' },
      { text: 'Pitch a simple 99-cent per-song store with copy protection, start on Mac only as a "small, safe test", give labels most of the revenue per song, and get all majors on board.', result: 'You reduce the labels\' perceived risk, offer a clear consumer price, and create proof before asking for more.', best: true },
      { text: 'Skip the labels and partner only with independent artists.', result: 'Easier deals, but customers want the hits; the store would feel empty.' },
      { text: 'Build a free, ad-funded store and share ad revenue.', result: 'Labels would see it as legitimising "free music" and refuse.' }
    ],
    whatHappened: `<p>Apple launched the iTunes Music Store in April 2003 with all five majors, 99 cents per song, initially for Mac users only, with the labels receiving most of each sale. Sales beat expectations, and the Windows version followed in October 2003. iTunes became the largest music retailer in the US by 2008, and the iPod/iTunes system drove Apple's turnaround.</p>`,
    lessons: [
      'In big B2B deals, reduce the other side\'s fear before you discuss price.',
      'A limited pilot ("only Mac users") can unlock agreement to a bigger idea.',
      'Simple customer-facing pricing can be a powerful product feature.'
    ],
    frameworks: ['Negotiation: interests vs positions', 'Land and expand', 'Razor and blades (hardware plus content)']
  },

  /* ---------------- pricing ---------------- */
  {
    id: 'case-jio-free-data',
    company: 'Reliance Jio',
    industry: 'Telecom',
    year: '2016',
    track: 'pricing',
    title: 'Give away 4G data for free to enter India\'s telecom market?',
    situation: `<p>India, 2016. Mobile data is expensive and most users are on slow networks. Incumbents (Airtel, Vodafone, Idea and others) earn a lot from voice calls and price data high.</p>
<p>Reliance has invested very heavily (tens of billions of dollars) in a brand-new nationwide 4G-only network. It has enormous fixed costs and almost zero marginal cost per extra gigabyte on an underused network. It needs users fast to fill the network.</p>`,
    question: 'You are the pricing lead at Jio. What launch price do you set?',
    options: [
      { text: 'Price slightly below incumbents to win share gradually.', result: 'Incumbents can match small cuts, and you fill your network slowly while carrying huge fixed costs.' },
      { text: 'Launch with free data and voice for a few months, then switch to very low-priced plans with free voice for life.', result: 'Massive trial, fast network fill and a structural reset of industry pricing that incumbents with legacy networks struggle to match.', best: true },
      { text: 'Price at a premium as the best 4G network.', result: 'Most of India is price-sensitive; adoption would be slow and you would waste your capacity.' },
      { text: 'Target only premium urban customers first.', result: 'Smaller market that incumbents defend fiercely; under-uses your nationwide investment.' }
    ],
    whatHappened: `<p>Jio launched commercially in September 2016 with free data and voice (the "Welcome Offer", later extended), and then moved to very cheap plans with free voice. It reached around 100 million subscribers in under six months. Data prices in India fell dramatically and usage exploded. The price war triggered consolidation: Vodafone and Idea merged, and several smaller operators exited. Jio became India's largest telecom operator.</p>`,
    lessons: [
      'When marginal cost is near zero and fixed cost is huge, volume pricing can be rational.',
      'A new entrant without legacy revenue can attack pricing the incumbents depend on.',
      'Penetration pricing works best with deep pockets and a plan to monetise later.'
    ],
    frameworks: ['Penetration pricing', 'Marginal cost economics', 'Game theory: price wars']
  },
  {
    id: 'case-nespresso',
    company: 'Nestlé (Nespresso)',
    industry: 'Consumer goods / Coffee',
    year: '1988',
    track: 'pricing',
    title: 'A struggling office coffee system: who is the customer?',
    situation: `<p>Nestlé has patented a single-serve espresso capsule system and launched Nespresso in 1986 for offices and restaurants. Sales are disappointing and parts of Nestlé want to kill it.</p>
<p>Jean-Paul Gaillard, a new leader, believes the real market is <b>affluent households</b> who want café-quality espresso at home. Machines could be made by partner appliance brands; Nestlé would sell the capsules, which carry high margins.</p>`,
    question: 'You are Gaillard. How do you build the business and price it?',
    options: [
      { text: 'Keep focusing on offices and cut the capsule price to drive volume.', result: 'Lower margins in a segment that has already shown weak demand.' },
      { text: 'Target households, let partners sell the machines at accessible prices, and sell premium-priced capsules only directly (club by phone/mail, later boutiques).', result: 'You control the high-margin recurring part and the customer relationship, while partners carry the hardware.', best: true },
      { text: 'Sell capsules through supermarkets next to regular coffee.', result: 'Easy reach, but you lose control of the premium experience and invite direct price comparison.' },
      { text: 'Make the machines very expensive and luxurious to signal quality.', result: 'Raises the barrier to entry; fewer machines means fewer capsule buyers.' }
    ],
    whatHappened: `<p>Gaillard repositioned Nespresso towards households and created the Nespresso Club for direct ordering, later adding luxury boutiques from 2000 and the George Clooney campaigns from 2006. Nespresso grew into a multi-billion business for Nestlé. When key patents expired around 2012, compatible capsules appeared, and Nespresso leaned harder on brand, design and its direct relationship.</p>`,
    lessons: [
      'The razor-and-blades model works when you control the blades and the channel.',
      'Choosing the right customer segment can rescue a product that failed elsewhere.',
      'Patents buy time; brand and direct customer relationships must be built before they expire.'
    ],
    frameworks: ['Razor and blades pricing', 'Segmentation, targeting, positioning (STP)', 'Direct-to-consumer']
  },

  /* ---------------- finance ---------------- */
  {
    id: 'case-marvel-financing',
    company: 'Marvel Entertainment',
    industry: 'Media / Entertainment',
    year: '2005',
    track: 'finance',
    title: 'Bet the characters on making your own movies?',
    situation: `<p>Marvel went bankrupt in 1996 and emerged in 1998 after merging with Toy Biz. To survive it licensed film rights to major characters to studios (Spider-Man to Sony, X-Men to Fox). Those films earned billions at the box office, but Marvel received only a small slice.</p>
<p>Marvel still controls many other characters (Iron Man, Thor, Captain America and others). Making films itself would bring far more upside but requires hundreds of millions of dollars, and Marvel has no studio experience.</p>`,
    question: 'You are Marvel\'s leadership. How do you fund the next step?',
    options: [
      { text: 'Keep licensing characters to studios for fees and a small share of profits.', result: 'Low risk, steady income, but the studios keep most of the value your characters create.' },
      { text: 'Raise a large non-recourse film financing facility, using the film rights of a set of characters as collateral, and produce films yourself.', result: 'You keep control and most of the upside; the risk is losing those character rights if films fail.', best: true },
      { text: 'Issue lots of new shares to raise the money.', result: 'Possible, but dilutes shareholders heavily and investors may doubt an unproven studio.' },
      { text: 'Sell the company to a big studio now.', result: 'Secures some value, but at a price that reflects the licensing model, not the studio model.' }
    ],
    whatHappened: `<p>In 2005 Marvel arranged about $525 million of financing through Merrill Lynch, secured on the film rights of around ten characters. Marvel Studios released <b>Iron Man</b> in 2008, which was a major hit and launched the shared Marvel Cinematic Universe. Disney acquired Marvel in 2009 for about $4 billion.</p>`,
    lessons: [
      'Intellectual property can be used as collateral to raise capital without giving up equity.',
      'Licensing gives safety but caps upside; owning production captures value but adds risk.',
      'Structure financing so that the worst case is survivable (non-recourse, limited collateral).'
    ],
    frameworks: ['Debt vs equity financing', 'Risk vs return', 'Value capture']
  },

  /* ---------------- operations ---------------- */
  {
    id: 'case-zara-fast-fashion',
    company: 'Zara (Inditex)',
    industry: 'Fashion retail',
    year: '1990s',
    track: 'operations',
    title: 'Move production to Asia like everyone else?',
    situation: `<p>Most fashion retailers design collections many months in advance and manufacture in large batches in low-cost Asian factories. This lowers unit cost but means they must guess trends early, and unsold stock ends up heavily discounted.</p>
<p>Amancio Ortega's Zara, based in Galicia, Spain, owns much of its design and some production, and uses many local workshops. Labour in Spain and Portugal is far more expensive than in Asia.</p>`,
    question: 'You are Zara\'s COO. How do you structure your supply chain?',
    options: [
      { text: 'Move all production to the cheapest Asian factories with long lead times.', result: 'Lower unit cost, but you lose speed and must bet on trends months ahead, with more markdowns.' },
      { text: 'Keep fashion-sensitive items close to home (Spain, Portugal, Morocco) in small batches with quick replenishment, and source basics from Asia.', result: 'Higher unit cost on some items, but you can respond to what sells within weeks, sell more at full price and cut markdowns.', best: true },
      { text: 'Bring everything fully in-house in Spain.', result: 'Maximum control but expensive and inflexible for basic items that do not need speed.' },
      { text: 'Outsource everything, including design, to agents.', result: 'Cheap and simple, but you lose the trend-reading capability that makes the model work.' }
    ],
    whatHappened: `<p>Zara built a responsive supply chain: a large share of fashion items produced near Spain, centralised distribution, frequent small deliveries to stores, and store managers feeding back what customers want. New designs could reach stores within a few weeks. Zara typically sold a higher share of its items at full price than rivals, and Inditex became the world's largest fashion retailer.</p>`,
    lessons: [
      'The cheapest unit cost is not always the cheapest total cost once markdowns and lost sales are counted.',
      'Speed and flexibility can be a competitive advantage in uncertain demand.',
      'Match the supply chain to the product: fast for trend items, efficient for basics.'
    ],
    frameworks: ['Responsive vs efficient supply chain (Fisher)', 'Total cost of ownership', 'Postponement']
  },
  {
    id: 'case-zomato-blinkit',
    company: 'Zomato (Blinkit)',
    industry: 'Food delivery / Quick commerce',
    year: '2022',
    track: 'operations',
    title: 'Buy a loss-making 10-minute grocery business?',
    situation: `<p>India, 2022. Zomato is a listed food delivery company under pressure to show profits. Quick commerce (groceries delivered in 10–20 minutes from small "dark stores") is booming, led by Swiggy Instamart, Zepto and Blinkit (formerly Grofers). These businesses burn cash, but customers love them in big cities.</p>
<p>Blinkit is struggling and needs capital. Zomato has already lent it money. Shareholders worry about another cash-burning bet. Zomato's assets include a large delivery fleet, customer base and data on urban demand.</p>`,
    question: 'You are Zomato\'s CEO. What do you do about quick commerce?',
    options: [
      { text: 'Stay out: focus on making food delivery profitable.', result: 'Shareholders are reassured short term, but a fast-growing adjacent category may be captured by rivals with your customers.' },
      { text: 'Acquire Blinkit in an all-stock deal and focus on dark-store density, order value and operating discipline to reach profitability.', result: 'You enter at scale without spending cash, using your existing users and know-how, but you take on operational risk and short-term losses.', best: true },
      { text: 'Build your own quick commerce from scratch.', result: 'Slower and probably more expensive than buying an existing network of dark stores.' },
      { text: 'Launch 10-minute food delivery instead.', result: 'Operationally hard, and does not address the much larger grocery opportunity.' }
    ],
    whatHappened: `<p>Zomato announced the acquisition of Blinkit in mid-2022 in an all-stock deal valued at around $570 million. The market reacted negatively at first. Blinkit then expanded its dark-store network, raised average order values with a wider assortment, and reached adjusted EBITDA break-even in some periods by 2024. Blinkit grew into a major part of the group (Zomato renamed itself Eternal in 2025), and quick commerce became one of India\'s most competitive retail battlegrounds.</p>`,
    lessons: [
      'Dark-store economics hinge on order density and average order value.',
      'All-stock deals can let you enter a market without draining cash.',
      'Adjacent categories that share customers and logistics can be worth short-term pain.'
    ],
    frameworks: ['Unit economics', 'Economies of density', 'Build vs buy']
  },

  /* ---------------- people ---------------- */
  {
    id: 'case-microsoft-nadella',
    company: 'Microsoft',
    industry: 'Software / Cloud',
    year: '2014',
    track: 'people',
    title: 'Fixing a culture of internal rivalry',
    situation: `<p>Satya Nadella becomes Microsoft's third CEO in February 2014. Microsoft is very profitable from Windows and Office but missed mobile and search, and its share price has been flat for years. Teams are known for internal politics and protecting their own products. (A forced-ranking performance system had been dropped in late 2013, but the culture it created remains.)</p>
<p>The company has just agreed to buy Nokia's phone business. Azure, its cloud platform, is growing but behind Amazon Web Services.</p>`,
    question: 'You are Nadella. Where do you focus first?',
    options: [
      { text: 'A major reorganisation and layoffs to show decisiveness, with no change in strategy.', result: 'Cuts costs but leaves the culture and strategy problems untouched.' },
      { text: 'Reset the mission and culture around a "growth mindset" and "mobile-first, cloud-first", put Office on rival platforms like iPad, and back Azure heavily.', result: 'Aligns people around learning and customers rather than defending Windows, unlocking collaboration and new growth.', best: true },
      { text: 'Double down on Windows Phone to win mobile.', result: 'Pours money into a battle that the market has largely settled.' },
      { text: 'Keep things stable and avoid big changes in the first two years.', result: 'Low risk but lets a stagnant culture continue while competitors move ahead.' }
    ],
    whatHappened: `<p>Nadella made culture his top priority, drawing on Carol Dweck's "growth mindset" ideas. Microsoft launched Office for iPad in March 2014, partnered with former rivals, and invested heavily in Azure. It wrote down most of the Nokia phone acquisition in 2015. Microsoft's market value passed $1 trillion in 2019 and it became one of the world's most valuable companies, later strengthened by its partnership with OpenAI.</p>`,
    lessons: [
      'Culture change starts with what the CEO rewards and talks about every day.',
      'Letting go of a sacred cow (Windows-first) can unlock bigger opportunities.',
      'A clear mission gives people permission to collaborate across silos.'
    ],
    frameworks: ['Growth mindset', 'Kotter\'s 8-step change model', 'Mission and values alignment']
  },

  /* ---------------- technology ---------------- */
  {
    id: 'case-nvidia-cuda',
    company: 'Nvidia',
    industry: 'Semiconductors',
    year: '2006',
    track: 'technology',
    title: 'Make every graphics chip programmable for general computing?',
    situation: `<p>Nvidia makes graphics processors (GPUs) mainly for video games. Researchers have noticed that GPUs, with many small cores working in parallel, could speed up scientific computing, but programming them for non-graphics tasks is painful.</p>
<p>Jensen Huang considers <b>CUDA</b>: a platform and software tools that let developers program GPUs in a C-like language. Supporting it means adding cost to every chip and investing for years in software, libraries and developer education, with no clear market in sight. Investors focus on gaming margins.</p>`,
    question: 'You are Nvidia\'s CEO. What do you do?',
    options: [
      { text: 'Stay focused on gaming GPUs, where the money is.', result: 'Protects margins now, but leaves the company dependent on one cyclical market.' },
      { text: 'Build a separate, expensive line of specialist chips for scientific computing only.', result: 'Limits the cost, but a small installed base means few developers bother to learn the platform.' },
      { text: 'Make CUDA available on all GPUs, including cheap gaming cards, and invest for years in free tools, libraries and university programmes.', result: 'Expensive and slow to pay off, but it builds a huge installed base and a developer ecosystem that rivals cannot easily copy.', best: true },
      { text: 'License the technology to rivals to set an open standard.', result: 'Spreads adoption but gives away the advantage.' }
    ],
    whatHappened: `<p>Nvidia launched CUDA in 2006–2007 and supported it across its GPU line. For years Wall Street questioned the cost. In 2012, the AlexNet deep-learning breakthrough was trained on Nvidia GPUs using CUDA, and AI researchers standardised on it. When generative AI took off in 2022–2023, Nvidia's GPUs and CUDA ecosystem made it the central supplier of AI computing, and it became one of the world's most valuable companies.</p>`,
    lessons: [
      'Developer ecosystems create switching costs that hardware alone cannot.',
      'Long-term platform bets need a leader willing to absorb years of scepticism.',
      'An installed base on cheap products can seed a market for expensive ones.'
    ],
    frameworks: ['Platform ecosystem strategy', 'Switching costs', 'Real options']
  },
  {
    id: 'case-openai-chatgpt',
    company: 'OpenAI',
    industry: 'Artificial intelligence',
    year: '2022',
    track: 'technology',
    title: 'Release a chatbot as a "research preview" now, or wait?',
    situation: `<p>Late 2022. OpenAI has a capable model family (GPT-3.5) available to developers through an API, and an even stronger model (GPT-4) in testing. Microsoft has invested since 2019 and provides Azure computing.</p>
<p>The team has fine-tuned a model to follow instructions in a chat format. It still makes factual mistakes and can be tricked. Some argue to wait for GPT-4 and polish; others want to put a free chat interface in front of the public to learn from real usage.</p>`,
    question: 'You are OpenAI\'s leadership. What do you do?',
    options: [
      { text: 'Wait several months for GPT-4 and launch a polished product.', result: 'Better first impression, but you learn less, and competitors may move first.' },
      { text: 'Release a free, simple chat interface as a "research preview", gather feedback at scale, and be ready to add a paid tier and expand the Microsoft partnership.', result: 'Huge learning and attention, with risks around errors, misuse and computing costs.', best: true },
      { text: 'Keep it API-only for businesses and let them build chat apps.', result: 'Lower risk, but you give up direct consumer distribution and the brand.' },
      { text: 'Sell exclusive rights to one big tech company.', result: 'Cash now but you lose independence and broad reach.' }
    ],
    whatHappened: `<p>OpenAI released ChatGPT on 30 November 2022 as a low-key research preview. It passed one million users in about five days and an estimated 100 million monthly users within roughly two months, among the fastest adoption of any consumer app. OpenAI launched a paid ChatGPT Plus tier in early 2023, released GPT-4 in March 2023, and Microsoft announced a multi-year, multi-billion-dollar investment in January 2023, integrating the models into Bing, Office and Azure. The launch kicked off the generative AI race across the technology industry.</p>`,
    lessons: [
      'Shipping early to real users can create learning and distribution advantages.',
      'Interface and accessibility can matter as much as the underlying technology.',
      'Strategic partnerships can supply the capital and infrastructure a frontier technology needs.'
    ],
    frameworks: ['Minimum viable product', 'Technology adoption lifecycle', 'Strategic alliances']
  },

  /* ---------------- growth ---------------- */
  {
    id: 'case-mercado-pago',
    company: 'Mercado Libre (Mercado Pago)',
    industry: 'E-commerce / Fintech',
    year: '2003–2016',
    track: 'growth',
    title: 'Turn a checkout tool into a full fintech?',
    situation: `<p>Mercado Libre is Latin America's leading online marketplace. Buyers and sellers do not trust each other, many people lack credit cards, and payments are a major source of friction and fraud. Mercado Libre built <b>Mercado Pago</b> to handle payments safely inside its marketplace.</p>
<p>A large share of Latin Americans are unbanked or underbanked, and most retail is still offline. Mercado Pago now holds data on sellers' sales and customers' behaviour.</p>`,
    question: 'You lead Mercado Pago. What is your growth strategy?',
    options: [
      { text: 'Keep it as an internal checkout tool for the marketplace only.', result: 'Low risk, but you leave the much larger offline and financial-services opportunity to banks and start-ups.' },
      { text: 'Open it beyond the marketplace: payments for other websites, QR codes and card readers for offline shops, a digital wallet, then credit using your transaction data.', result: 'Each step reuses existing users and data, creating a flywheel that grows faster than the marketplace itself.', best: true },
      { text: 'Apply for a full bank licence and launch traditional branches.', result: 'Expensive and slow; branches are exactly what your users avoid.' },
      { text: 'Sell the payments unit to a bank.', result: 'One-off cash, but you give away a strategic asset and data.' }
    ],
    whatHappened: `<p>Mercado Pago expanded to third-party online merchants, then into offline payments (QR codes and mobile card readers), a digital wallet, and lending (Mercado Crédito) using transaction data to assess risk. It grew into one of Latin America\'s largest fintech platforms, serving tens of millions of users, and became a major driver of Mercado Libre\'s growth and value. It has also pursued banking licences in some countries as it deepened its services.</p>`,
    lessons: [
      'Solving friction in your core business can create a second business.',
      'Data from one product can unlock adjacent products (payments to credit).',
      'Expand along the path of your existing users and capabilities.'
    ],
    frameworks: ['Ansoff matrix', 'Flywheel', 'Adjacency expansion']
  },
  {
    id: 'case-instagram-burbn',
    company: 'Burbn (Instagram)',
    industry: 'Consumer apps',
    year: '2010',
    track: 'growth',
    title: 'Strip a cluttered app down to one feature?',
    situation: `<p>Kevin Systrom and Mike Krieger built <b>Burbn</b>, a location check-in app with many features (check-ins, plans, points, photo sharing). It had raised a small seed round but was confusing and growth was weak against Foursquare.</p>
<p>Looking at usage data, they see people mostly use one thing: <b>sharing photos</b>. Phone cameras are getting better but the photos still look poor, and uploading is slow.</p>`,
    question: 'You are the founders. What do you do?',
    options: [
      { text: 'Add more features to compete with Foursquare.', result: 'More complexity in a crowded space; users stay confused.' },
      { text: 'Rebuild as a simple, fast mobile app focused only on photo sharing, with filters that make phone photos look good.', result: 'A single clear use case is easy to explain and share, and filters solve a real problem.', best: true },
      { text: 'Turn Burbn into a website for photographers.', result: 'You leave the fast-growing mobile opportunity for a niche desktop audience.' },
      { text: 'Spend the seed money on marketing to get more Burbn users.', result: 'Paid growth into a product that does not retain users wastes money.' }
    ],
    whatHappened: `<p>They cut Burbn down and launched <b>Instagram</b> on iOS in October 2010. It gained about 25,000 users on its first day and around a million within a few months. Facebook acquired Instagram in April 2012 for about $1 billion, when the company had just 13 employees. Instagram later passed a billion monthly users.</p>`,
    lessons: [
      'Usage data shows the real product; follow what users actually do.',
      'Simplicity accelerates word-of-mouth growth.',
      'Removing features can be the hardest and most valuable product decision.'
    ],
    frameworks: ['Product-market fit', 'Focus (one core loop)', 'Pivot vs persevere']
  },

  /* ---------------- strategy ---------------- */
  {
    id: 'case-netflix-streaming',
    company: 'Netflix',
    industry: 'Media',
    year: '2007',
    track: 'strategy',
    title: 'Cannibalise your own DVD business?',
    situation: `<p>Netflix is profitable with millions of DVD-by-mail subscribers. Broadband is spreading in the US, but streaming quality is uneven, licensed catalogues are small and studios are suspicious. Blockbuster is fighting back with its own mail and in-store programme.</p>
<p>Streaming would require large spending on licences and technology, with the risk of making customers question why they pay for DVDs.</p>`,
    question: 'You are the CEO. What do you do?',
    options: [
      { text: 'Wait until streaming technology and catalogues mature.', result: 'Protects current profits, but a technology company or studio could build the streaming habit first.' },
      { text: 'Launch streaming as a free add-on to existing DVD subscriptions, with a limited catalogue, and keep investing.', result: 'Customers try streaming at no extra cost, you learn fast, and your brand moves with the technology.', best: true },
      { text: 'Launch streaming as a separate paid service.', result: 'Low adoption at first because the catalogue is thin, and a new price feels risky to customers.' },
      { text: 'Sell the company to a big media group.', result: 'Locks in value today, but gives up the opportunity.' }
    ],
    whatHappened: `<p>Netflix launched "Watch Now" in January 2007 with about 1,000 titles, included in subscriptions. It kept investing, added devices (game consoles, TVs), offered a streaming-only plan in 2010, and from 2013 produced original content. Streaming became the core business and Netflix expanded globally.</p>`,
    lessons: [
      'If someone will cannibalise your business, it is better that it is you.',
      'Bundling a new product into an existing one lowers the barrier to trial.',
      'Invest in the future model while the old one still funds you.'
    ],
    frameworks: ['Innovator\'s dilemma', 'S-curve of technology', 'Two-horizon strategy']
  },
  {
    id: 'case-tesla-master-plan',
    company: 'Tesla',
    industry: 'Automotive',
    year: '2006',
    track: 'strategy',
    title: 'Where should an electric car start-up begin?',
    situation: `<p>Tesla is a tiny start-up. Electric cars are seen as slow, ugly and short-range. Batteries are very expensive, so any electric car will cost a lot to make at first. Big automakers have huge scale advantages in mass-market cars.</p>
<p>The company must choose its first product and tell investors and customers how it will eventually reach the mass market.</p>`,
    question: 'You are the chairman, writing the plan. Which first move?',
    options: [
      { text: 'Start with an affordable family car to have the biggest impact immediately.', result: 'Battery costs make it impossible to build at a low price; you would lose money on each car with no scale.' },
      { text: 'Start with a low-volume, high-price sports car, use the money to build a mid-priced car, then a mass-market car, while promoting solar and clean energy.', result: 'Rich early adopters pay the high early costs, the brand becomes desirable, and each step funds the next.', best: true },
      { text: 'License your battery technology to big automakers instead of making cars.', result: 'Capital-light, but you depend on incumbents who have little reason to hurry.' },
      { text: 'Build electric delivery vans for businesses first.', result: 'Viable niche, but does little to change how consumers see electric cars.' }
    ],
    whatHappened: `<p>Elon Musk published "The Secret Tesla Motors Master Plan (just between you and me)" in 2006: build a sports car, use that money to build an affordable car, use that money to build an even more affordable car, and provide zero-emission electric power. Tesla delivered the Roadster (2008), Model S (2012) and Model 3 (2017), becoming the most valuable carmaker in the world, though the path involved near-bankruptcy and severe production struggles.</p>`,
    lessons: [
      'Enter at the top of the market when early costs are high and early adopters pay a premium.',
      'A clear multi-step plan helps investors and staff see how today fits the long-term goal.',
      'Brand desirability can change perceptions of a whole category.'
    ],
    frameworks: ['Technology adoption lifecycle', 'Experience curve', 'Top-down market entry']
  },
  {
    id: 'case-taobao-ebay',
    company: 'Alibaba (Taobao)',
    industry: 'E-commerce',
    year: '2003',
    track: 'strategy',
    title: 'Fighting eBay in China with a free marketplace',
    situation: `<p>eBay has bought EachNet, China's leading consumer-to-consumer marketplace, and plans to bring it onto eBay's global platform. eBay charges listing and transaction fees and has deep pockets.</p>
<p>Jack Ma's Alibaba is a B2B site. He worries eBay will eventually move into his business. Chinese buyers and sellers are new to online shopping, deeply distrust strangers, and like to chat and bargain before buying.</p>`,
    question: 'You are Jack Ma. What do you do?',
    options: [
      { text: 'Stay in B2B and avoid a fight with eBay.', result: 'Short-term focus, but you may face eBay later in your core market.' },
      { text: 'Launch a C2C marketplace that is free for sellers, built around local behaviour: built-in chat between buyers and sellers, and an escrow payment service to build trust.', result: 'You remove eBay\'s revenue model as a weapon and build features that fit Chinese users better.', best: true },
      { text: 'Copy eBay\'s fee model and outspend it on advertising.', result: 'You fight on eBay\'s terms with less money.' },
      { text: 'Try to sell Alibaba to eBay.', result: 'A possible exit, but gives up the much larger Chinese opportunity.' }
    ],
    whatHappened: `<p>Alibaba launched <b>Taobao</b> in 2003, free for sellers, and added the Aliwangwang chat tool and Alipay escrow payments (2004). eBay moved EachNet onto its global platform, which slowed the site, and kept charging fees. Taobao quickly overtook it, and eBay largely exited China by 2006 through a joint venture. Taobao became the core of Alibaba\'s consumer business.</p>`,
    lessons: [
      'Free can be a strategic weapon when the rival depends on fees.',
      'Local knowledge (trust, chat, payments) can beat global scale.',
      'Running a local business from a global platform can make you slow and out of touch.'
    ],
    frameworks: ['Competitive response', 'Freemium', 'Global vs local strategy']
  },

  /* ---------------- investment ---------------- */
  {
    id: 'case-wework-ipo',
    company: 'WeWork',
    industry: 'Real estate / Flexible office',
    year: '2019',
    track: 'investment',
    title: 'Push ahead with the IPO after a brutal S-1 reception?',
    situation: `<p>WeWork leases offices long term and rents them out short term as flexible desks. Its private valuation reached about $47 billion in early 2019 thanks to SoftBank. In August 2019 it publishes its IPO filing (S-1).</p>
<p>Investors see large losses (net loss of about $1.9 billion in 2018), long lease commitments against short-term revenue, and governance concerns: founder Adam Neumann has super-voting control, leased buildings he part-owns to the company, and was paid about $5.9 million for the "We" trademark (later returned). Bankers suggest the IPO may value the company at a fraction of the private valuation.</p>`,
    question: 'You are a board member representing a major investor. What do you push for?',
    options: [
      { text: 'Go ahead with the IPO at whatever price the market gives to get the cash.', result: 'A very low IPO valuation would hit employee morale and investors, and governance concerns remain.' },
      { text: 'Withdraw the IPO, change leadership and governance, cut costs and focus the business on its core, and secure rescue financing.', result: 'Painful, but it addresses the real problems before asking public investors for money.', best: true },
      { text: 'Delay a few weeks and do a bigger marketing roadshow.', result: 'The issues are structural; better marketing will not change the numbers.' },
      { text: 'Sell the company quickly to the highest bidder.', result: 'Few buyers can absorb such large lease commitments and losses.' }
    ],
    whatHappened: `<p>WeWork postponed and then withdrew its IPO in September 2019. Neumann stepped down as CEO, and SoftBank provided a rescue package. The company cut thousands of jobs and sold non-core businesses. WeWork went public through a SPAC in 2021 at a valuation of around $9 billion, but continued to struggle and filed for bankruptcy in November 2023.</p>`,
    lessons: [
      'Valuation is set by fundamentals and governance, not by the last private round.',
      'Long fixed commitments funded by short-term revenue create serious risk.',
      'Strong boards challenge founders early, before public markets do.'
    ],
    frameworks: ['Corporate governance', 'Asset-liability mismatch', 'Valuation multiples']
  },

  /* ---------------- scaling ---------------- */
  {
    id: 'case-byjus',
    company: 'Byju\'s',
    industry: 'Education technology',
    year: '2021',
    track: 'scaling',
    title: 'Pandemic boom: keep buying and borrowing to grow?',
    situation: `<p>India, 2021. During COVID-19 lockdowns, online learning explodes. Byju's is India's most valuable start-up, with heavy marketing and an aggressive sales force. Investors are offering money at rising valuations.</p>
<p>Leadership plans a string of acquisitions (test prep, coding for kids, US reading platforms) and a large dollar loan. Schools are expected to reopen. Questions are emerging about sales practices and revenue recognition, and financial statements are being filed late.</p>`,
    question: 'You are an independent board member. What do you push for?',
    options: [
      { text: 'Support the acquisitions and loan: grab market share while money is cheap.', result: 'Fast growth, but you add debt, integration risk and complexity just as demand may normalise.' },
      { text: 'Slow down acquisitions, fix financial controls and timely audits, review sales practices, and build a plan for post-pandemic demand before taking more debt.', result: 'Slower headline growth, but a stronger, more trustworthy company that can survive a downturn.', best: true },
      { text: 'Cut marketing to zero to show profit quickly.', result: 'Demand collapses; this does not fix governance or integration.' },
      { text: 'Rush to an IPO to lock in the high valuation.', result: 'Public markets require clean audits and controls you do not have yet.' }
    ],
    whatHappened: `<p>After buying WhiteHat Jr in 2020, Byju's acquired several companies in 2021, including Aakash Educational Services (reported at about $950 million) and Epic, and raised a $1.2 billion term loan. Its valuation reached about $22 billion in 2022. As schools reopened, growth slowed. Accounts were delayed, its auditor resigned in 2023, several board members left, and lenders and the company went to court over the loan. Insolvency proceedings began in 2024, and investors wrote down their stakes to a small fraction of earlier valuations.</p>`,
    lessons: [
      'Temporary demand spikes should not be treated as permanent when planning scale.',
      'Governance and financial controls must scale as fast as revenue.',
      'Debt-funded acquisitions magnify both success and failure.'
    ],
    frameworks: ['Corporate governance', 'Growth vs sustainability', 'M&A integration']
  },

  /* ---------------- legal ---------------- */
  {
    id: 'case-tylenol-recall',
    company: 'Johnson & Johnson',
    industry: 'Pharmaceuticals / Consumer health',
    year: '1982',
    track: 'legal',
    title: 'Recall everything after a tampering crisis?',
    situation: `<p>Seven people in the Chicago area die after taking Extra-Strength Tylenol capsules that someone had laced with cyanide. The tampering happened after the products reached stores, not in J&J's factories.</p>
<p>Tylenol is J&J's most important consumer brand and the US market leader in pain relief. A nationwide recall would cost around $100 million and might destroy the brand anyway.</p>`,
    question: 'You are J&J\'s chairman, James Burke. What do you do?',
    options: [
      { text: 'Recall only products from the affected Chicago batches; it was not our fault.', result: 'Saves money, but if another case happens elsewhere, public trust is gone forever.' },
      { text: 'Recall all Tylenol capsules nationwide, warn the public, cooperate fully with authorities, and relaunch with tamper-resistant packaging.', result: 'Huge short-term cost, but you put customer safety first and can rebuild trust.', best: true },
      { text: 'Stay quiet and let the police handle it to avoid linking the brand to the deaths.', result: 'Silence looks like hiding; the media will link the brand anyway.' },
      { text: 'Retire the Tylenol brand and launch a new one.', result: 'Throws away decades of brand equity and does not address safety.' }
    ],
    whatHappened: `<p>J&J recalled about 31 million bottles nationwide at a cost of around $100 million, ran public warnings and worked openly with the media and authorities. It relaunched Tylenol with triple-sealed, tamper-resistant packaging. Tylenol's market share collapsed at first but recovered within about a year. The case is widely taught as the gold standard of crisis management, and it led to new US federal tamper-resistant packaging rules.</p>`,
    lessons: [
      'In a safety crisis, act on values first; the law is the minimum standard.',
      'Speed and transparency protect trust more than legal defensiveness.',
      'A credible fix (new packaging) turns a crisis into a reason to trust again.'
    ],
    frameworks: ['Crisis management', 'Stakeholder theory', 'Reputation risk']
  },
  {
    id: 'case-boeing-737-max',
    company: 'Boeing',
    industry: 'Aerospace',
    year: '2011',
    track: 'legal',
    title: 'Re-engine an old design or build a new plane?',
    situation: `<p>Airbus launches the A320neo, a fuel-efficient update of its best-selling narrow-body jet, and wins strong orders, including a big order from American Airlines, a long-time Boeing customer.</p>
<p>Boeing must respond fast. A clean-sheet new aircraft would take many years and huge investment. Updating the 1960s-era 737 with bigger, more efficient engines is faster and cheaper, and airlines prefer not to retrain pilots on a new type. But larger engines change how the plane handles.</p>`,
    question: 'You are on Boeing\'s board. What do you require?',
    options: [
      { text: 'Re-engine the 737 and minimise pilot training differences to keep it cheap for airlines.', result: 'Fast and commercially attractive, but strong pressure to avoid training can hide important changes in how the plane behaves.' },
      { text: 'Re-engine the 737, but insist that safety engineering, transparency to regulators and pilots, and redundancy come before schedule and training cost.', result: 'Slightly slower and costlier, but the design and the people flying it are protected.', best: true },
      { text: 'Build a new aircraft from scratch even if it takes many years.', result: 'Better long-term product, but you might lose many orders to Airbus in the meantime.' },
      { text: 'Do nothing and compete on price.', result: 'You lose share in the most important aircraft segment.' }
    ],
    whatHappened: `<p>Boeing chose to re-engine the 737 as the 737 MAX. To handle changed handling characteristics it added software (MCAS) that could push the nose down based on a single sensor, and pilots were not fully informed about it. Two crashes, Lion Air (October 2018) and Ethiopian Airlines (March 2019), killed 346 people. The MAX was grounded worldwide for about 20 months. Boeing paid billions in compensation and fines, including a $2.5 billion settlement with the US Department of Justice in 2021, and its reputation was badly damaged.</p>`,
    lessons: [
      'Boards must oversee safety and risk, not only cost and schedule.',
      'Incentives to avoid regulatory or training costs can lead to hidden risk.',
      'Single points of failure in critical systems are unacceptable.'
    ],
    frameworks: ['Enterprise risk management', 'Board oversight duties', 'Ethics and incentives']
  },
  {
    id: 'case-paytm-payments-bank',
    company: 'Paytm (One97 Communications)',
    industry: 'Fintech',
    year: '2024',
    track: 'legal',
    title: 'The regulator shuts your payments bank: now what?',
    situation: `<p>India, January 2024. The Reserve Bank of India (RBI) orders Paytm Payments Bank, an associate of listed fintech Paytm, to stop accepting new deposits, top-ups and most credit transactions, citing persistent non-compliance and supervisory concerns. Many Paytm wallets, FASTags and UPI handles depend on the bank.</p>
<p>The share price falls sharply. Merchants and customers panic about whether Paytm will keep working.</p>`,
    question: 'You are Paytm\'s CEO. What is your priority?',
    options: [
      { text: 'Publicly challenge the RBI and say the action is unfair.', result: 'Damages the regulator relationship you need to survive.' },
      { text: 'Fully accept the order, work with the RBI and NPCI to move UPI handles and merchant settlements to partner banks, strengthen governance and over-communicate with merchants and customers.', result: 'You keep most services running and begin rebuilding trust, though some business is lost.', best: true },
      { text: 'Keep operations as they are and wait for the RBI to change its mind.', result: 'The deadline arrives and services stop, hurting customers badly.' },
      { text: 'Exit payments entirely and focus only on lending.', result: 'Lending distribution depends on payments users; it would weaken the core.' }
    ],
    whatHappened: `<p>The RBI extended the deadline to 15 March 2024. Paytm moved its UPI operations to partner banks (including Axis, HDFC, SBI and Yes Bank) after the NPCI approved it as a third-party app provider. Vijay Shekhar Sharma stepped down from the payments bank's board, which was reconstituted. Paytm lost some users and revenue and cut costs, then worked to rebuild its payments and distribution businesses.</p>`,
    lessons: [
      'In regulated industries, compliance is part of the product.',
      'Avoid single points of regulatory failure across your business.',
      'In a crisis, clear and frequent communication to customers is critical.'
    ],
    frameworks: ['Regulatory risk management', 'Crisis communication', 'Governance and compliance']
  },

  /* ---------------- csuite ---------------- */
  {
    id: 'case-starbucks-2008',
    company: 'Starbucks',
    industry: 'Restaurants / Coffee',
    year: '2008',
    track: 'csuite',
    title: 'Howard Schultz returns: fix the experience or cut costs?',
    situation: `<p>January 2008. Starbucks grew very fast, opening many stores a year. Traffic is now falling, the share price has dropped sharply, and a recession is starting. Schultz, who had stepped back as CEO, returns.</p>
<p>In his view the company focused on growth and efficiency (automatic espresso machines, pre-ground coffee, breakfast sandwiches whose smell overwhelms the coffee aroma) and lost the "Starbucks experience".</p>`,
    question: 'You are Schultz. What do you do first?',
    options: [
      { text: 'Keep opening stores at the same pace to show growth.', result: 'Adds sales but deepens cannibalisation and quality problems.' },
      { text: 'Cut prices and push discounts to bring traffic back.', result: 'Short-term traffic, but cheapens the brand and hurts margins.' },
      { text: 'Refocus on the core coffee experience: retrain baristas, slow expansion and close weak stores, and invest in innovation and digital, while cutting non-core costs.', result: 'Costs and short-term pain, but it repairs what made customers pay a premium.', best: true },
      { text: 'Sell the company to private equity to restructure out of the public eye.', result: 'Possible, but gives up control and the long-term upside.' }
    ],
    whatHappened: `<p>Schultz closed all 7,100 or so US stores for about three hours in February 2008 to retrain baristas in making espresso. Starbucks closed around 600 underperforming US stores, slowed openings, removed some breakfast sandwiches for a time, and introduced new initiatives including the Starbucks Card loyalty programme, Via instant coffee and mobile payments. Traffic and profits recovered, and the share price rose strongly over the following years.</p>`,
    lessons: [
      'Growth that erodes the core experience destroys value.',
      'Symbolic actions (closing all stores for training) signal priorities to staff and customers.',
      'Turnarounds combine cost discipline with reinvestment in what customers value.'
    ],
    frameworks: ['Turnaround strategy', 'Brand promise', 'Service profit chain']
  },
  {
    id: 'case-lego-turnaround',
    company: 'LEGO Group',
    industry: 'Toys',
    year: '2004',
    track: 'csuite',
    title: 'Near bankruptcy: what do you cut, and what do you keep?',
    situation: `<p>2004. LEGO is losing a lot of money and close to running out of cash. In the previous years it diversified widely (theme parks, clothing, video games, many new product lines) and the number of unique bricks and parts has exploded, making manufacturing complex and expensive.</p>
<p>Jørgen Vig Knudstorp, a 35-year-old former McKinsey consultant, becomes CEO. Children are moving to video games and electronic toys.</p>`,
    question: 'You are Knudstorp. What is your turnaround plan?',
    options: [
      { text: 'Diversify further into electronics and digital to follow children.', result: 'Spreads thin resources even further, deepening losses.' },
      { text: 'Stabilise cash first (sell non-core assets like theme parks, cut complexity of parts), then return to the core brick and the system of play, and listen to fans.', result: 'Painful cuts, but frees cash and focuses the company on what it uniquely does well.', best: true },
      { text: 'Sell the company to a large toy maker.', result: 'Possible exit, but the family owners want to keep LEGO independent.' },
      { text: 'Cut prices to win back volume.', result: 'Lower prices on a high-cost base increase losses.' }
    ],
    whatHappened: `<p>LEGO sold a controlling stake in its Legoland parks to Merlin Entertainments (2005), cut the number of unique parts sharply, outsourced some production (later partly reversed), and refocused on the core brick, licensing (Star Wars and others) and the adult fan community. It returned to profit within a couple of years and later became the world's largest toy company by revenue. Hit products followed, including The LEGO Movie (2014).</p>`,
    lessons: [
      'In a turnaround, first secure cash and survival, then grow.',
      'Complexity (too many products, parts and markets) is a silent profit killer.',
      'Go back to the core that customers love, then expand from strength.'
    ],
    frameworks: ['Turnaround: stop the bleeding, stabilise, grow', 'Core vs adjacency (Bain)', 'Complexity cost']
  }

]);
