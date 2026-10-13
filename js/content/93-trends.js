/* MBA Studio — 20 business trends for 2026–2027
   Facts are limited to events public by mid-2026. Anything about 2026–2027 itself is framed
   as a trend or expectation, not a settled outcome. */
MBA.addTrends([
  {
    title: "Agentic AI moves from pilots to production",
    category: "Technology",
    summary: "AI agents — systems that read data, use software tools and complete multi-step tasks with a human supervising — moved from demos in 2024 to real deployments in 2025. The 2026–27 question is no longer whether agents work, but which workflows to redesign around them and how to govern them.",
    why: "Agents change cost structures and team design: work that needed a person at every step can increasingly be done by an agent plus a reviewer. Shared standards for connecting agents to tools and to each other make them cheaper to deploy across vendors. The winners are likely to be firms that redesign whole processes, measure accuracy and keep clear accountability; firms that deploy without controls risk errors, data leaks and reputational damage.",
    examples: [
      "Anthropic released the Model Context Protocol (MCP) in late 2024 as an open way to connect AI to tools and data; OpenAI, Google, Microsoft and others adopted it in 2025, and in December 2025 it was placed under a new Linux Foundation body, the Agentic AI Foundation.",
      "Google introduced the Agent2Agent (A2A) protocol in 2025 so agents built by different vendors can coordinate, and later contributed it to the Linux Foundation.",
      "Coding agents such as Claude Code, OpenAI Codex, GitHub Copilot and Cursor became mainstream tools for software teams during 2025.",
      "Klarna, an early and vocal adopter of AI customer service, said in 2025 that it would make sure customers can always reach a human — a reminder that the human-plus-agent balance matters."
    ],
    action: "List your 10 most repetitive, rules-based workflows. Pick one with clear inputs and a measurable output, run an agent with a human approving actions, and track accuracy, cost per task and cycle time against the old process. Write an agent policy covering data access, approval rights, logging and who is accountable when an agent gets it wrong."
  },
  {
    title: "Vertical AI and vertical SaaS",
    category: "Technology",
    summary: "Many of the fastest-growing software companies serve one industry deeply — legal, healthcare, construction, restaurants, logistics — combining workflow software, payments and data with AI trained on that industry's tasks.",
    why: "General-purpose AI models are widely available, so advantage shifts to whoever owns the workflow, the proprietary data and the customer relationship in a specific industry. Vertical players can also earn revenue from payments and financial services on top of software. For founders with domain expertise, this is often a faster route to product–market fit than competing with horizontal platforms.",
    examples: [
      "Harvey (AI for law firms) and Abridge (AI that drafts clinical notes from doctor–patient conversations) raised large funding rounds in 2025 by focusing on a single profession.",
      "Toast built restaurant point-of-sale software and earns much of its revenue from payment processing.",
      "Veeva Systems became a major software provider to life sciences by serving only that industry."
    ],
    action: "If you know an industry well, map its most painful daily workflows and where money flows through them. Start with one wedge workflow that saves measurable time, collect the data that workflow produces (with permission), then expand into adjacent modules and embedded payments once you own the daily habit."
  },
  {
    title: "Deepfake fraud and the rise of trust infrastructure",
    category: "Technology",
    summary: "Cheap, convincing synthetic voice and video have made impersonation fraud a board-level risk. In response, businesses are adopting verification steps, content provenance standards and AI-based fraud detection.",
    why: "Any process that relies on recognising a voice, a face or an email style — payment approvals, password resets, hiring, customer onboarding — is now vulnerable. Losses can be large and sudden. Expect verification and provenance to become a normal part of finance, HR and customer-service processes, and a selling point for platforms.",
    examples: [
      "In 2024 the engineering firm Arup confirmed that an employee in Hong Kong was tricked into transferring roughly US$25 million after a video call in which the 'colleagues' were deepfakes.",
      "The C2PA 'Content Credentials' standard, backed by Adobe, Microsoft, Google and others, attaches tamper-evident information about how an image or video was made.",
      "The EU AI Act includes transparency duties to disclose AI-generated or manipulated content, scheduled to apply from August 2026."
    ],
    action: "Require call-back or second-channel verification for any payment change or large transfer, whatever the request looks like. Train finance, HR and support staff with realistic deepfake examples, review your customer identity checks, and decide whether your own marketing content should carry provenance labels."
  },
  {
    title: "AI search and generative engine optimisation (GEO)",
    category: "Go-to-market",
    summary: "A growing share of product research now happens inside AI assistants and AI summaries at the top of search results. Generative engine optimisation (GEO) is the practice of making sure your brand is mentioned accurately and favourably in those answers.",
    why: "If a buyer asks an AI assistant for the best option in your category and you are not mentioned, you are invisible at the moment of decision. Publishers and brands have reported fewer clicks from search as answers appear directly on the page, so traffic may fall even when influence does not. Measurement, content and PR all need to adapt in 2026–27.",
    examples: [
      "Google rolled out AI Overviews in 2024 and launched AI Mode, a conversational search experience, in 2025, later expanding it to more countries and languages.",
      "OpenAI said in October 2025 that ChatGPT had around 800 million weekly users; it also launched its own AI browser, ChatGPT Atlas, that month.",
      "A 2025 Pew Research Center study of browsing data found that people were less likely to click on result links when a Google search page showed an AI summary."
    ],
    action: "Ask the major AI assistants the 20 questions your customers ask before buying and record whether and how you appear. Publish clear, factual, well-structured pages (pricing, comparisons, specifications, FAQs), earn mentions in trusted third-party reviews and publications, and add AI-referred traffic and share of AI mentions to your marketing dashboard."
  },
  {
    title: "Usage-based and outcome-based pricing",
    category: "Go-to-market",
    summary: "Software pricing keeps shifting from per-seat licences to charging for consumption (credits, API calls, compute) or for results (resolved tickets, completed tasks). AI accelerates this: when an agent does the work, there are fewer human seats to charge for, and every task has a real compute cost.",
    why: "Value-aligned pricing lowers adoption barriers and lets revenue grow with customer success. But revenue becomes harder to forecast, gross margins depend on model costs, and badly communicated changes can trigger customer backlash. Expect hybrid models — a platform fee plus usage or outcome charges — to dominate in 2026–27.",
    examples: [
      "Intercom prices its Fin AI agent per resolved customer conversation rather than per seat.",
      "Salesforce moved Agentforce from a flat per-conversation price toward a credit-based model in 2025.",
      "Cursor's switch to usage-based pricing in mid-2025 caused surprise bills for some users and a public apology and refunds — a lesson in communicating pricing changes."
    ],
    action: "Define the unit of value your customer cares about (tickets solved, orders processed, hours saved). Pilot a hybrid price with a few customers, model the effect on revenue volatility and gross margin under high and low usage, and give customers spend caps, alerts and clear dashboards before you roll it out widely."
  },
  {
    title: "Creator-led, founder-led and community-led growth",
    category: "Go-to-market",
    summary: "Trust keeps moving from faceless brand advertising to people: creators with loyal audiences, founders who build in public, employees who post as experts, and communities where customers help each other. This now applies to B2B as much as to consumer brands.",
    why: "Paid social has become more expensive and harder to measure since privacy changes such as Apple's App Tracking Transparency (2021), and AI-generated content has flooded feeds, making a recognisable human voice more valuable. Owned audiences lower acquisition costs and speed up feedback. The risks are dependence on one personality and on platforms whose rules, algorithms or even ownership can change.",
    examples: [
      "MrBeast's Feastables used his YouTube audience to build a snack brand sold through major retailers.",
      "Skims, co-founded by Kim Kardashian, grew into a large apparel brand driven by her personal reach.",
      "Notion and Figma grew with help from active user communities, templates and ambassador programmes.",
      "The long-running uncertainty over TikTok's ownership in the US showed brands the risk of depending on a single platform."
    ],
    action: "Pick one platform where your buyers spend time and have the founder or a respected expert post consistently for 90 days. Work with 10–20 smaller creators rather than one celebrity and track results with codes and links. Build an owned list (email, community) so you keep the relationship if a platform changes its rules."
  },
  {
    title: "Efficient growth meets AI-era unit economics",
    category: "Finance",
    summary: "Investors still reward efficient growth — burn multiple, Rule of 40, CAC payback — but AI adds a new question: how much does it cost to serve each customer? AI products carry real compute costs per use, so gross margins can look more like a services business than classic software.",
    why: "Fast-growing AI products can show spectacular revenue while margins are thin, and some of that revenue comes from customers experimenting rather than committing. Expect investors and boards in 2026–27 to look harder at gross margin trends, net revenue retention and how much revenue is truly recurring. Falling model prices help, but heavier usage can cancel the savings.",
    examples: [
      "Burn multiple (net burn ÷ net new ARR), popularised by David Sacks in 2020, remains a standard test of capital efficiency.",
      "Several fast-growing AI application companies were reported in 2025 to be running thin gross margins because the model costs they pay rise with customer usage.",
      "Meta's 2023 'year of efficiency' set a template that many technology firms followed: flatter teams, fewer layers and tighter cost control alongside heavy investment in AI."
    ],
    action: "Track gross margin per customer and per feature, including model and infrastructure costs. Report burn multiple, CAC payback and net revenue retention monthly. Separate pilot or experimental revenue from committed contracts in investor updates, and use model routing, caching and smaller models to protect margins."
  },
  {
    title: "IPO window reopens while secondaries stay big",
    category: "Finance",
    summary: "After a long drought, technology IPOs picked up in 2025 in both the US and India. At the same time, the largest private companies keep using secondary sales and tender offers so employees and early investors can sell shares without going public.",
    why: "Founders now have more exit routes — public listing, strategic sale, or long-term private ownership with periodic liquidity — and need to be ready for whichever window is open. Being audit-ready, with clean governance and predictable numbers, is what lets a company move quickly when markets allow. Market sentiment can close the window again quickly, so plans should not depend on a single route.",
    examples: [
      "CoreWeave, Circle, Figma and Klarna all listed on US exchanges in 2025.",
      "In India, companies including Groww and Lenskart listed in late 2025, continuing a run of domestic technology IPOs.",
      "OpenAI arranged a large employee share sale in 2025 at a valuation reported to be around $500 billion, and SpaceX has regularly run tender offers while remaining private."
    ],
    action: "Get audit-ready early: clean cap table, timely monthly closes, strong board governance and consistent metrics. Write an employee liquidity policy (for example, periodic buybacks or tender offers once mature) and keep a realistic view of which exit route suits your business and market."
  },
  {
    title: "Stablecoins and programmable money go mainstream",
    category: "Finance",
    summary: "Stablecoins — digital tokens designed to hold a steady value, usually one US dollar — gained clear legal frameworks in major markets in 2024–25. Payment companies, banks and card networks are now building them into cross-border payments, treasury and settlement.",
    why: "Stablecoins can move money across borders in minutes, around the clock, often at lower cost than traditional correspondent banking. With regulation clearer, expect more businesses in 2026–27 to be offered stablecoin settlement by mainstream providers, especially for international payouts and supplier payments. Risks include issuer quality, compliance obligations, accounting treatment and very different rules from country to country.",
    examples: [
      "The US passed the GENIUS Act in July 2025, creating a federal framework for payment stablecoins.",
      "The EU's Markets in Crypto-Assets Regulation (MiCA) became fully applicable at the end of 2024, and Hong Kong's stablecoin licensing regime took effect in August 2025.",
      "Stripe acquired the stablecoin infrastructure company Bridge (completed in early 2025), and Circle, issuer of the USDC stablecoin, listed on the New York Stock Exchange in June 2025."
    ],
    action: "If you pay or get paid across borders, ask your payment providers what stablecoin settlement options they offer, and compare total cost and speed with your current route. Involve finance, legal and tax early on custody, accounting and local rules, and start with a small, low-risk flow such as contractor payouts."
  },
  {
    title: "Tariffs and supply-chain redesign",
    category: "Operations",
    summary: "Broad US tariff increases in 2025, retaliation and trade deals, and continued geopolitical tension have made sourcing strategy a board-level topic. Companies keep diversifying away from single-country dependence ('China+1') and moving some production closer to end markets.",
    why: "Tariff rates and rules changed repeatedly through 2025 and remained subject to negotiation and legal challenge, so landed costs are less predictable. Resilience and flexibility now compete with lowest unit cost. This creates openings for manufacturers in India, Vietnam, Mexico and elsewhere, and for logistics, customs and trade-compliance services.",
    examples: [
      "The US announced sweeping new tariffs in April 2025 and ended the 'de minimis' duty-free treatment of low-value imports for all countries in August 2025, hitting cross-border e-commerce sellers.",
      "Apple said in 2025 that most iPhones sold in the US were expected to come from India, reflecting a shift in assembly from China.",
      "The EU and the US agreed a trade framework in mid-2025 setting a baseline tariff on many EU goods, and challenges to tariffs imposed under emergency powers reached the US Supreme Court."
    ],
    action: "Map your top inputs by country of origin and single-supplier dependence. Model landed cost (tariffs, freight, lead times) under several tariff scenarios, qualify at least one alternative supplier or region for critical items, review contracts for who pays tariffs, and assign someone to track trade-policy changes weekly."
  },
  {
    title: "Physical AI: robots in warehouses, roads and factories",
    category: "Operations",
    summary: "AI is moving off the screen into machines: warehouse robots, autonomous vehicles and, more experimentally, humanoid robots. Better AI models, cheaper sensors and simulation tools are making automation practical for more varied, less structured tasks.",
    why: "Labour shortages, wage costs and reshoring make automation more attractive, and AI lets robots handle variation that used to require people. Expect steady gains in logistics and manufacturing in 2026–27, with humanoid robots still mostly at the pilot stage. Leaders must plan for job redesign and safety as much as for capital spending.",
    examples: [
      "Amazon said in 2025 that it had deployed more than one million robots across its fulfilment network.",
      "Waymo expanded its paid driverless taxi service to more US cities during 2025, including through a partnership with Uber in Austin and Atlanta.",
      "Nvidia has promoted 'physical AI' with simulation and foundation models for robotics, and humanoid-robot start-ups such as Figure raised large funding rounds."
    ],
    action: "Identify repetitive physical tasks with high injury risk, staffing gaps or quality problems. Ask vendors for robots-as-a-service or pay-per-use options to limit upfront capital, run a time-boxed pilot with clear productivity and safety metrics, and involve frontline staff in redesigning the roles around the machines."
  },
  {
    title: "Tiny teams and revenue per employee",
    category: "People",
    summary: "AI-native companies are built from day one around AI for coding, design, support, marketing and operations, and some reach significant revenue with far fewer people than earlier start-ups needed. Established companies are also asking whether a role can be done with AI before hiring.",
    why: "Revenue per employee is becoming a headline metric for start-ups and incumbents alike. Founders can get further before raising capital, and incumbents face smaller, faster competitors. When building gets cheap, distribution, brand, proprietary data and customer trust become the real moats.",
    examples: [
      "Anysphere (maker of Cursor) and Lovable were both reported in 2025 to have reached very high annual recurring revenue within a short time and with relatively small teams.",
      "Shopify CEO Tobi Lütke told staff in April 2025 that using AI was a baseline expectation and that teams should show why AI could not do a job before asking for more headcount.",
      "Midjourney is widely cited as a company that reached large scale with a very small team and no outside venture funding."
    ],
    action: "Before each new hire, ask whether a well-designed AI workflow plus an existing team member can do the job. Track revenue per employee monthly, give every team an AI tooling budget, and invest early in what AI cannot copy quickly: distribution, data, relationships and brand."
  },
  {
    title: "The shrinking first rung: entry-level jobs and AI reskilling",
    category: "People",
    summary: "AI is most capable at tasks traditionally given to junior staff — drafting, research, basic coding, first-line support. Early evidence suggests hiring for entry-level roles in AI-exposed jobs is under pressure, while employers increasingly hire on demonstrated skills rather than degrees.",
    why: "If companies stop hiring juniors, they stop building their future managers and experts. Firms that redesign apprenticeship — juniors who supervise AI, get real feedback and learn faster — may build a talent advantage. Skills-based hiring and continuous AI training are becoming core HR capabilities in 2026–27.",
    examples: [
      "A 2025 Stanford Digital Economy Lab study by Erik Brynjolfsson and co-authors found falling employment for workers aged 22–25 in occupations most exposed to AI, relative to older workers and less-exposed jobs.",
      "Duolingo's CEO described the company as 'AI-first' in 2025, saying it would gradually stop using contractors for work AI can handle.",
      "IBM, Google and many US state governments have removed four-year-degree requirements from large numbers of roles in favour of skills-based hiring."
    ],
    action: "Keep hiring juniors, but redesign their roles around supervising and improving AI output, with structured mentoring. Rewrite job descriptions around skills and outcomes, use work samples instead of credentials, and give every employee a learning plan for the AI tools in their job."
  },
  {
    title: "Agentic commerce: AI that shops for you",
    category: "Consumer",
    summary: "AI assistants are starting to complete purchases, not just recommend products. Payment networks, platforms and AI companies launched protocols in 2025 to let agents check out securely on a consumer's behalf.",
    why: "If an AI agent chooses and buys, the 'shelf' becomes the agent's shortlist. Product data quality, price, reviews and delivery promises may matter more than ad creative. Retailers face a strategic choice: open their catalogues to agents and gain reach, or block them to protect their customer relationship and advertising income. Expect this tension to play out through 2026–27.",
    examples: [
      "OpenAI launched Instant Checkout in ChatGPT in September 2025, built on an Agentic Commerce Protocol developed with Stripe, starting with Etsy sellers and with Shopify merchants to follow.",
      "Google announced its Agent Payments Protocol (AP2) in 2025, and Visa and Mastercard each launched programmes to let AI agents make card payments with user authorisation.",
      "Amazon sued Perplexity in November 2025 over its Comet browser agent shopping on Amazon on users' behalf — an early test of who controls agent access to retail sites."
    ],
    action: "Make your product data complete, accurate and machine-readable (specifications, prices, stock, delivery times, return policies). Decide your policy on AI shopping agents, test whether your products appear and can be bought through major assistants, and watch whether agent-driven orders behave differently on returns and loyalty."
  },
  {
    title: "GLP-1 drugs reshape consumer demand",
    category: "Consumer",
    summary: "GLP-1 medicines for diabetes and weight loss, such as semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound), are reaching more people as pill versions arrive and patents begin to expire in some large markets. Because they reduce appetite, they are changing what and how much people eat and buy.",
    why: "Food, beverages, snacks, restaurants, alcohol, fitness, apparel, insurance and healthcare could all be affected. Oral versions and cheaper generic semaglutide in some countries are expected to widen use in 2026–27, so effects that were niche may become mainstream in some markets. Companies that adapt portions, nutrition and services early are better placed.",
    examples: [
      "The US FDA approved an oral pill version of Wegovy for weight management in December 2025.",
      "Key semaglutide patents were set to expire in 2026 in several large markets, including India, Canada and China, opening the way for generic versions.",
      "Nestlé launched Vital Pursuit in the US in 2024, a food line aimed at people using GLP-1 medicines, and Eli Lilly launched Mounjaro in India in 2025."
    ],
    action: "If you are in food, beverage, restaurants, health or fitness, track GLP-1 adoption in your markets, test smaller portions and higher-protein, nutrient-dense products, and consider support services such as nutrition coaching and strength training. Scenario-plan volume changes instead of assuming past demand will hold."
  },
  {
    title: "Quick commerce matures and spreads",
    category: "Consumer",
    summary: "Delivery of groceries and everyday items in roughly 10–30 minutes from small 'dark stores' has boomed in India's cities and keeps expanding into new categories and smaller cities, while big e-commerce players have entered with their own fast-delivery services.",
    why: "Quick commerce is changing how urban consumers shop and how brands are discovered, with its own rules: limited shelf space, search rankings and platform advertising. Competition is intense and profitability depends on order density, basket size and ad income. Expect consolidation, more scrutiny of dark-store practices and pressure on traditional kirana stores and distributors.",
    examples: [
      "Blinkit (owned by Eternal, formerly Zomato), Swiggy Instamart and Zepto have expanded rapidly across Indian cities and into categories such as electronics, beauty and pharmacy.",
      "Flipkart launched Minutes and Amazon launched Now in India in 2024–2025 to compete in fast delivery.",
      "In Europe and the US, the 2020–21 wave of quick-commerce start-ups largely shrank or was absorbed, showing how much the model depends on dense cities and low delivery costs."
    ],
    action: "If you run a consumer brand, treat quick-commerce platforms as a distinct channel: design packs and price points for impulse and top-up purchases, budget for platform ads, and track sell-through by city and dark store. If you are a local retailer, compete on what quick commerce does poorly: personal service, credit, range depth and specialised or fresh products."
  },
  {
    title: "AI and data regulation enters the compliance phase",
    category: "Regulation",
    summary: "Rules for AI and personal data have moved from being drafted to being applied, but timelines keep shifting. The EU AI Act is phasing in, India's data protection rules have been notified with a compliance runway, and US rules are emerging mainly at state level.",
    why: "Enterprise buyers already ask detailed questions about data handling and AI use in procurement, often before the law requires it. AI used in hiring, credit, health or education may face extra obligations. Because deadlines and scope are still moving, companies need a living compliance process rather than a one-off project.",
    examples: [
      "EU AI Act obligations for general-purpose AI models began applying in August 2025; in November 2025 the European Commission proposed a 'Digital Omnibus' package that would delay some high-risk AI requirements.",
      "India notified the Digital Personal Data Protection Rules in November 2025, giving organisations a phased period to comply.",
      "California passed SB 53 in 2025, requiring large frontier-AI developers to publish safety frameworks, and Colorado delayed its AI Act to 2026."
    ],
    action: "Maintain a data map and an inventory of the AI systems you use or sell, classify each by risk, and assign an owner. Build consent, deletion and human-review processes now, prepare standard answers for customer AI and security questionnaires, and review the regulatory calendar each quarter."
  },
  {
    title: "Sustainability reporting: simplified, not abandoned",
    category: "Regulation",
    summary: "After rapid expansion, mandatory sustainability reporting is being narrowed and delayed in some places, especially the EU, while other jurisdictions adopt global ISSB standards. Supply-chain data requests from large customers and lenders continue regardless.",
    why: "Fewer companies may be directly required to report in the EU, but large customers, banks and investors still need emissions and sustainability data from suppliers. Firms that drop measurement because rules eased may find themselves unable to answer customer requests or tender questions. Expect a patchwork of rules in 2026–27 rather than one global regime.",
    examples: [
      "The EU's 2025 'Omnibus' simplification package delayed later waves of CSRD reporting, and in late 2025 EU lawmakers agreed to cut the number of companies in scope substantially.",
      "The ISSB published IFRS S1 and S2 in 2023, and a growing number of jurisdictions have moved to adopt or align with them.",
      "India's SEBI requires the largest listed companies to publish a Business Responsibility and Sustainability Report, with assurance on a core set of indicators being phased in."
    ],
    action: "Keep measuring energy use, Scope 1 and 2 emissions and key supplier data even if you are no longer legally required to report. Ask your largest customers and lenders what data they will need, keep one consistent dataset you can map to different frameworks, and track rule changes in each market you sell to."
  },
  {
    title: "The AI infrastructure boom and the power crunch",
    category: "Macro",
    summary: "Spending on AI data centres, chips and power became one of the largest investment waves in the world economy in 2025. It is driving new electricity demand, deals for nuclear and other firm power, and an active debate about whether the spending will earn its return.",
    why: "AI infrastructure spending is influencing stock markets, energy prices, grid planning and supplier fortunes. If demand keeps up, it creates large opportunities in power, cooling, construction and chips; if returns disappoint, a pullback could ripple widely. Businesses should plan for both rising AI capability and potential volatility in AI-linked markets and energy costs.",
    examples: [
      "OpenAI, SoftBank and Oracle announced the Stargate data-centre project in January 2025, and the largest cloud providers repeatedly raised their capital-spending plans during 2025.",
      "Nvidia became the first company to pass a $4 trillion market value in July 2025, and later that year passed $5 trillion.",
      "The International Energy Agency projected in 2025 that data-centre electricity demand would more than double by 2030, and tech companies signed nuclear power deals, such as Microsoft's agreement to restart a Three Mile Island reactor and Meta's with Constellation Energy."
    ],
    action: "Audit your energy use and exposure to rising power prices, evaluate efficiency upgrades, on-site solar and power purchase agreements, and check whether the build-out creates demand for your products or services. If your strategy depends on cheap AI, model scenarios where prices rise as well as fall."
  },
  {
    title: "India's digital public infrastructure scales up",
    category: "Macro",
    summary: "India's open, government-backed digital rails — Aadhaar identity, UPI real-time payments, DigiLocker, the Account Aggregator data-sharing framework and ONDC for open commerce — keep growing in usage and are being extended into credit and abroad.",
    why: "These rails lower the cost of payments, identity checks, lending and commerce, making it possible to serve customers profitably at small ticket sizes. Other countries are studying and linking to the model. For founders, building on public infrastructure means faster launch and lower costs, but less differentiation in pure payments — the value moves to credit, data and service.",
    examples: [
      "UPI, run by the National Payments Corporation of India, crossed 20 billion transactions in a single month in 2025.",
      "UPI has been linked with other countries' systems, such as Singapore's PayNow in 2023, and is accepted by some merchants abroad.",
      "The Reserve Bank of India has been piloting the Unified Lending Interface to make it faster to share data and approve loans, building on the Account Aggregator framework."
    ],
    action: "If you operate in India, accept UPI everywhere, use eKYC and Account Aggregator data to cut onboarding and credit-assessment costs, and evaluate ONDC as an additional sales channel. Compete on service, product, credit and data — not on payments the public rails already make cheap."
  }
]);
