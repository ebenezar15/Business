/* MBA Studio — 20 business trends for 2025–2026 */
MBA.addTrends([
  {
    title: "AI agents & agentic workflows",
    category: "Technology",
    summary: "AI is moving from chatbots that answer questions to agents that take actions: they read data, use software tools, follow multi-step plans and complete tasks such as resolving support tickets, writing and testing code, reconciling invoices or qualifying leads, with humans reviewing the output.",
    why: "Work that used to need a person for every step can increasingly be handled by an agent plus a human supervisor. This changes cost structures, team design and what customers expect in speed. Companies that redesign processes around agents (not just bolt on a chatbot) are likely to gain the biggest productivity advantage; those that deploy without controls risk errors, data leaks and brand damage.",
    examples: [
      "Klarna reported in 2024 that its AI assistant was handling a large share of customer-service chats, and later said it would keep human agents available for customers who want them — a sign that the human-plus-AI balance matters.",
      "Salesforce launched Agentforce in 2024 to let businesses deploy autonomous agents across sales, service and commerce.",
      "Coding agents such as GitHub Copilot, Cursor and Claude Code are now widely used by software teams to write, review and test code.",
      "Anthropic released the open Model Context Protocol (MCP) in late 2024 as a standard way to connect AI agents to tools and data; it has since been adopted by many other AI vendors."
    ],
    action: "Map your 10 most repetitive, rules-based workflows. Pick one with clear inputs and measurable output (e.g. support triage or invoice matching), run an agent pilot with a human approving every action, measure accuracy, cost and time saved, then expand. Set an AI usage policy covering data, approval rights and accountability."
  },
  {
    title: "AI-native startups with tiny teams",
    category: "People",
    summary: "A new kind of company is built from day one around AI tools for coding, design, support, marketing and operations. Some reach meaningful revenue with far fewer employees than earlier startups needed.",
    why: "Revenue per employee is becoming a headline metric. Founders can get further before raising capital, which shifts negotiating power away from investors and lowers the cost of testing ideas. Incumbents face smaller, faster competitors. The flip side: when building is cheap, distribution, brand, proprietary data and customer trust become the real moats.",
    examples: [
      "Midjourney became widely known as an image-generation company that grew to large scale with a very small team and reportedly no outside venture funding.",
      "Anysphere (maker of the Cursor code editor) was reported in 2025 to have reached very high annual recurring revenue within a few years with a relatively small team.",
      "Y Combinator partners said publicly in 2025 that many companies in recent batches were growing fast with small teams, helped by AI coding tools."
    ],
    action: "Before every new hire, ask: can a well-designed AI workflow plus an existing team member do this? Track revenue per employee monthly. Invest early in what AI cannot copy quickly: distribution channels, proprietary data, customer relationships and brand."
  },
  {
    title: "Generative engine optimisation (AI search reshaping SEO)",
    category: "Go-to-market",
    summary: "More people now get answers from AI assistants and AI summaries at the top of search results instead of clicking through ten blue links. Generative engine optimisation (GEO) is the practice of making your brand, products and content show up accurately in those AI-generated answers.",
    why: "If customers ask an AI assistant 'best accounting software for a small firm' and your brand is not mentioned, you are invisible at the moment of decision. Many publishers and content sites have reported falling click-through from search as AI summaries answer queries directly. Traffic may fall even while influence on purchase decisions remains — so measurement must change too.",
    examples: [
      "Google rolled out AI Overviews in search in 2024 and launched an AI Mode in 2025.",
      "OpenAI launched ChatGPT search in late 2024, and Perplexity has built an answer engine that cites sources.",
      "Several news publishers have publicly complained of reduced referral traffic since AI summaries became common, and some have signed content-licensing deals with AI companies."
    ],
    action: "Ask the major AI assistants the 20 questions your customers ask before buying, and record whether and how you are mentioned. Publish clear, factual, well-structured content (comparisons, pricing, FAQs, specifications), earn mentions in trusted third-party sources and reviews, and add AI-referred traffic and brand-mention share to your marketing dashboard."
  },
  {
    title: "Usage-based and outcome-based pricing",
    category: "Go-to-market",
    summary: "Software pricing is shifting from paying per user ('per seat') to paying for consumption (per API call, per gigabyte, per transaction) or for results (per resolved ticket, per qualified lead). AI is accelerating this, because when an agent does the work, there may be fewer human seats to charge for.",
    why: "Pricing aligned to value can lower the barrier to adoption and grow revenue as customers grow. But revenue becomes less predictable, gross margins depend on compute costs, and finance teams must forecast usage. Buyers increasingly ask 'what am I paying per outcome?' — a question every vendor should be ready to answer.",
    examples: [
      "Snowflake built its business on a consumption model where customers pay for compute and storage they actually use.",
      "Intercom prices its Fin AI agent per resolved customer conversation rather than per seat.",
      "Zendesk announced outcome-based pricing for its AI agents in 2024, and Salesforce initially priced Agentforce per conversation."
    ],
    action: "Identify the unit of value your customer cares about (tickets solved, orders processed, hours saved). Test a hybrid model — a platform fee plus usage or outcome charges — with a few customers, model the impact on revenue volatility and gross margin, and give customers spend controls and dashboards so usage pricing does not create bill shock."
  },
  {
    title: "Vertical SaaS & vertical AI",
    category: "Technology",
    summary: "Instead of one horizontal tool for every industry, many fast-growing software companies serve a single industry deeply — restaurants, construction, clinics, law firms, logistics — combining workflow software, payments, data and now AI trained on industry-specific tasks.",
    why: "Vertical players can know the customer's workflow better, charge for payments and financial services on top of software, and build data moats. For founders with domain expertise, a vertical focus is often a faster path to product–market fit than competing with large horizontal platforms.",
    examples: [
      "Toast built restaurant point-of-sale software and earns a large share of its revenue from payment processing.",
      "Veeva Systems became a major software provider to the life-sciences industry by focusing only on that vertical.",
      "Harvey (AI for legal work) and Abridge (AI for clinical documentation) are examples of AI start-ups targeting a single profession."
    ],
    action: "If you have deep knowledge of one industry, map its most painful daily workflows and where money flows (payments, financing, insurance). Start with one wedge workflow, then expand into adjacent modules and embedded payments once you own the daily habit."
  },
  {
    title: "Embedded finance",
    category: "Finance",
    summary: "Non-financial companies now offer financial products — payments, lending, insurance, cards, accounts — inside their own apps, usually built on top of licensed banking and payments partners.",
    why: "Embedding finance can add high-margin revenue, increase customer stickiness and use data the platform already has (e.g. a merchant's sales history) to lend more accurately. But regulators are watching closely, partner-bank failures and compliance lapses can hurt customers, and credit losses can arrive quickly in a downturn.",
    examples: [
      "Shopify offers merchant financing (Shopify Capital) and business accounts directly inside its platform.",
      "Stripe provides building blocks such as Stripe Capital and Treasury that let platforms offer lending and accounts to their own users.",
      "Buy-now-pay-later providers such as Klarna and Affirm are embedded at checkout across many online stores.",
      "In India, platforms embed UPI payments and partner with banks and NBFCs to offer credit to merchants and consumers."
    ],
    action: "Look at where money already moves through your business (customers paying you, suppliers being paid, cash gaps). Ask whether a partner-led payment, financing or insurance product would genuinely help customers. Start with a regulated partner, keep compliance and credit risk with them initially, and track attach rate and loss rates carefully."
  },
  {
    title: "Quick commerce",
    category: "Consumer",
    summary: "Quick commerce promises delivery of groceries and everyday items in roughly 10–30 minutes from small 'dark stores' close to customers. It collapsed in much of Europe and the US after 2022 but has boomed in India's dense cities.",
    why: "Quick commerce is changing how urban consumers shop and how brands are discovered. For consumer brands it is a new, fast-growing channel with its own rules (limited shelf space, data on search rankings, platform advertising). For kirana stores and traditional distributors it is a competitive threat. Profitability depends on order density, basket size and advertising income.",
    examples: [
      "Blinkit (owned by Zomato's parent, now called Eternal), Swiggy Instamart and Zepto have expanded rapidly across Indian cities.",
      "Flipkart (Minutes) and Amazon (Now) launched quick-delivery services in India in 2024–2025.",
      "Getir and Gorillas grew rapidly in Europe during the pandemic, then shrank sharply; Getir later withdrew from several countries."
    ],
    action: "If you run a consumer brand, treat quick-commerce platforms as a distinct channel: optimise packs and price points for impulse and top-up buying, budget for platform ads, and track sell-through by city. If you are a local retailer, compete on what quick commerce does poorly — personal service, credit, range depth and fresh or specialised products."
  },
  {
    title: "Creator economy, founder-led brands & community-led growth",
    category: "Go-to-market",
    summary: "Trust is moving from faceless corporate advertising to people: creators with loyal audiences, founders who build in public, and communities where customers help each other. Many new consumer brands are launched by creators, and many B2B companies grow through communities and user advocates.",
    why: "Paid social advertising has become more expensive and harder to target since privacy changes such as Apple's App Tracking Transparency (2021). Brands that own an audience or community can acquire customers more cheaply and get feedback faster. The risks: dependence on a single personality, platform algorithm changes and reputational shocks.",
    examples: [
      "MrBeast launched Feastables chocolate bars, using his YouTube audience to drive retail demand.",
      "Kim Kardashian co-founded Skims, which grew into a large apparel brand driven by her personal reach.",
      "Notion and Figma grew with help from active user communities, templates and ambassador programmes.",
      "Many Indian D2C founders use LinkedIn, Instagram and YouTube to build brands around their own story."
    ],
    action: "Pick one platform where your customers spend time and have the founder post consistently for 90 days. Partner with 10–20 small creators (rather than one celebrity) and track sales by code or link. Create a place for customers to meet and help each other, and reward your most active advocates."
  },
  {
    title: "Efficient growth: burn multiple and profitability focus",
    category: "Finance",
    summary: "After cheap money ended with interest-rate rises in 2022, investors shifted from 'growth at all costs' to efficient growth. Metrics such as burn multiple, Rule of 40, CAC payback and path to profitability now shape valuations and fundraising.",
    why: "Start-ups that burn heavily without efficient growth find it hard to raise the next round, and down rounds or shutdowns follow. Efficient businesses keep control, survive downturns and can raise on better terms. For established firms, the same discipline appears as cost programmes and a focus on free cash flow.",
    examples: [
      "David Sacks of Craft Ventures popularised the burn multiple (net burn divided by net new ARR) in 2020 as a test of capital efficiency.",
      "Many technology companies, including Meta with its 2023 'year of efficiency', cut costs and headcount after 2022.",
      "Zerodha, India's large stockbroker, is frequently cited as an example of a bootstrapped, profitable start-up that grew without venture capital."
    ],
    action: "Calculate your burn multiple, CAC payback and contribution margin every month and show them in board or investor updates. Set a target path to break-even, cut spend that does not pay back, and keep at least 18–24 months of runway when raising is uncertain."
  },
  {
    title: "Secondaries and longer time to IPO",
    category: "Finance",
    summary: "Top private companies are staying private for longer, raising huge rounds from private investors. To give early employees and investors cash before an IPO, they increasingly use secondary sales and company-run tender offers.",
    why: "Founders now need a liquidity plan for employees that does not depend on an IPO. Investors manage longer holding periods, and the secondary market sets informal valuations. Markets differ, however: India's public markets have been relatively open to young technology companies in recent years, giving Indian founders more domestic IPO options.",
    examples: [
      "SpaceX, Stripe and OpenAI have run tender offers that allowed employees to sell shares while remaining private.",
      "Databricks raised very large private funding rounds rather than listing publicly.",
      "In India, companies such as Swiggy and Ola Electric listed on stock exchanges in 2024."
    ],
    action: "Design ESOPs with a clear liquidity policy (e.g. periodic buybacks or tender offers once the company is mature). Keep the cap table clean and the company audit-ready, and evaluate whether a domestic listing, a strategic sale or staying private best serves shareholders."
  },
  {
    title: "Venture debt & revenue-based financing",
    category: "Finance",
    summary: "Founders are increasingly using non-dilutive capital: venture debt (loans to VC-backed companies) and revenue-based financing (capital repaid as a share of future revenue). They fill gaps between equity rounds or fund inventory and marketing.",
    why: "Debt lets founders grow without giving up as much ownership, and suits businesses with predictable revenue such as SaaS or repeat-purchase D2C. But debt must be repaid even when growth slows; covenants and personal guarantees can be dangerous. The 2023 collapse of Silicon Valley Bank, a major venture lender, showed how quickly lender risk can affect start-ups.",
    examples: [
      "Silicon Valley Bank's failure in March 2023 disrupted banking and venture lending for many start-ups before it was acquired by First Citizens.",
      "Revenue-based financing providers such as Clearco and Pipe grew during the e-commerce and SaaS boom.",
      "In India, venture-debt funds such as Alteria Capital and Trifecta Capital and revenue-based financiers such as GetVantage and Recur Club serve start-ups."
    ],
    action: "Use debt for predictable needs — inventory, receivables, marketing with proven payback — not to cover losses. Compare the total cost of debt with the dilution cost of equity, read covenants carefully, avoid personal guarantees where possible, and spread banking across more than one institution."
  },
  {
    title: "Supply chain regionalisation ('China+1' and nearshoring)",
    category: "Operations",
    summary: "After pandemic disruptions, geopolitical tensions and tariffs, companies are diversifying production away from a single country — adding capacity in India, Vietnam, Mexico, Eastern Europe and elsewhere — and moving some production closer to end markets.",
    why: "Resilience now competes with lowest cost in supply-chain decisions. Diversification creates opportunities for manufacturers and suppliers in alternative countries and for logistics and compliance services. It also raises costs and complexity. Tariff changes, including broad US tariffs announced in 2025, make sourcing strategy a board-level topic.",
    examples: [
      "Apple has expanded iPhone assembly in India through partners such as Foxconn and Tata Electronics.",
      "Mexico overtook China as the largest source of US goods imports in 2023, helped by nearshoring.",
      "India's Production Linked Incentive (PLI) schemes aim to attract manufacturing in electronics and other sectors.",
      "Samsung has made Vietnam a major hub for smartphone production."
    ],
    action: "Map your top 20 inputs by country of origin and single-supplier dependence. Qualify at least one alternative supplier or region for critical items, model landed cost including tariffs, freight and lead times, and hold strategic buffer stock where disruption risk is highest."
  },
  {
    title: "Sustainability reporting (CSRD, ISSB and beyond)",
    category: "Regulation",
    summary: "Large companies are being required to report on climate and sustainability with the same rigour as financial results. The EU's Corporate Sustainability Reporting Directive (CSRD) and the ISSB's IFRS S1 and S2 standards are the main frameworks, and their scope and timing are still evolving.",
    why: "Even small suppliers are affected because large customers need emissions and sustainability data from their supply chain. Banks and investors use this data in lending and investing decisions. Regulatory scope is shifting — the EU proposed simplifying and delaying parts of CSRD in 2025 — so firms must follow developments rather than assume rules are fixed.",
    examples: [
      "The ISSB published IFRS S1 and S2 in June 2023, and a number of jurisdictions have moved to adopt or align with them.",
      "The EU began phasing in CSRD reporting from financial year 2024, then in 2025 proposed an 'Omnibus' package to reduce scope and postpone some requirements.",
      "India's SEBI requires the largest listed companies to publish a Business Responsibility and Sustainability Report (BRSR).",
      "California passed climate-disclosure laws (SB 253 and SB 261) in 2023 covering large companies doing business in the state."
    ],
    action: "Start measuring your energy use, Scope 1 and 2 emissions and key supplier data now, even if you are not legally required to report. Ask your largest customers what data they will need from you, and assign an owner to track regulatory changes in each market you sell to."
  },
  {
    title: "Data privacy & AI regulation",
    category: "Regulation",
    summary: "Laws governing personal data and artificial intelligence are spreading. The EU AI Act introduces risk-based rules for AI systems; India's Digital Personal Data Protection (DPDP) Act, GDPR in Europe and multiple US state laws govern personal data.",
    why: "Fines can be large, and enterprise customers now ask detailed questions about data handling and AI use in procurement. Building with privacy and AI governance from the start is far cheaper than retrofitting. Using AI in hiring, credit, health or education may fall into high-risk categories with extra obligations.",
    examples: [
      "The EU AI Act entered into force in August 2024, with prohibitions on certain AI practices applying from February 2025 and further obligations phasing in afterwards.",
      "Ireland's Data Protection Commission fined Meta 1.2 billion euros in 2023 over EU–US data transfers under GDPR.",
      "India passed the Digital Personal Data Protection Act in 2023, with implementing rules notified in 2025.",
      "US states such as California, Colorado and others have passed privacy laws, and Colorado passed an AI law focused on high-risk systems."
    ],
    action: "Create a data map (what personal data you collect, why, where it is stored, who can access it). Write an AI use policy and an inventory of AI systems you use or sell, classify their risk, add consent and deletion processes, and prepare standard answers for customer security and AI questionnaires."
  },
  {
    title: "Remote, hybrid & global talent (including four-day-week experiments)",
    category: "People",
    summary: "Work arrangements have settled into a mix: fully remote, hybrid, and return-to-office mandates. Some firms experiment with four-day weeks or compressed hours to attract and retain talent.",
    why: "Work model is now a competitive lever in hiring. Remote access widens the talent pool and can cut costs, while in-person time can help with mentoring, culture and innovation. Leaders must choose deliberately and design management, communication and performance systems to match.",
    examples: [
      "Amazon required most corporate employees to return to the office five days a week from January 2025.",
      "A 2022 UK four-day-week pilot run by 4 Day Week Global with researchers and the think tank Autonomy involved around 60 companies, and most chose to continue the policy afterwards.",
      "Companies such as GitLab and Automattic have operated as fully remote organisations for years, documenting their practices publicly.",
      "Employer-of-record platforms such as Deel and Remote let companies hire across borders, and many multinationals have expanded global capability centres in Indian cities."
    ],
    action: "Decide your work model based on the work, not fashion: which tasks need in-person collaboration, which need deep focus. Write it down, set clear core hours and communication norms, measure outcomes rather than hours, and if you test a four-day week, run a time-boxed pilot with defined productivity metrics."
  },
  {
    title: "Skills-based hiring",
    category: "People",
    summary: "Employers are dropping degree requirements for many roles and hiring based on demonstrated skills — work samples, portfolios, certifications and structured assessments. AI tools are also changing which skills matter.",
    why: "Skills-based hiring widens the talent pool, can improve diversity and reduces dependence on credentials that may not predict performance. As AI automates routine tasks, skills such as judgment, communication and AI fluency gain importance — so job descriptions and training plans need rewriting.",
    examples: [
      "IBM and Google publicly removed four-year-degree requirements for many roles.",
      "Several US states, starting with Maryland in 2022, removed degree requirements for many state government jobs.",
      "LinkedIn has promoted skills-based profiles and hiring tools on its platform."
    ],
    action: "Rewrite job descriptions around outcomes and skills, remove degree requirements unless legally needed, use paid work samples and structured interviews, and give every employee a budget and plan for learning AI tools relevant to their role."
  },
  {
    title: "India's digital public infrastructure (UPI, ONDC and the India Stack)",
    category: "Macro",
    summary: "India has built open, government-backed digital rails — Aadhaar identity, UPI real-time payments, DigiLocker, the Account Aggregator framework for data sharing and ONDC for open e-commerce — that any business can build on.",
    why: "These rails lower the cost of payments, identity checks, lending and commerce, making it possible to serve customers profitably at small ticket sizes. Other countries study the model. For founders, building on public infrastructure can mean faster launch and lower costs, but also lower differentiation in pure payments.",
    examples: [
      "UPI, run by the National Payments Corporation of India (NPCI), has become the dominant way to make digital payments in India, from street vendors to large retailers.",
      "The Open Network for Digital Commerce (ONDC) was launched in 2022 to let buyers and sellers on different apps transact on a shared network.",
      "UPI has been linked with other countries' systems, such as Singapore's PayNow in 2023, and is accepted at some merchants abroad.",
      "The Account Aggregator framework lets individuals share financial data with consent, supporting faster lending decisions."
    ],
    action: "If you operate in India, accept UPI everywhere, use eKYC and Account Aggregator data to cut onboarding and credit costs, and evaluate ONDC as an additional sales channel. Compete on service, product and data — not on payments that the public rails already make cheap."
  },
  {
    title: "Subscription fatigue",
    category: "Consumer",
    summary: "Consumers who signed up for many subscriptions — streaming, software, boxes, apps — are becoming more selective, rotating services, choosing bundles and ad-supported tiers, and cancelling more readily. Regulators are also scrutinising hard-to-cancel subscriptions.",
    why: "Subscription businesses can no longer assume sign-ups will stay. Churn management, clear value, flexible plans and honest cancellation flows become essential. Dark patterns that trap users bring legal and reputational risk.",
    examples: [
      "Netflix launched a cheaper ad-supported plan in 2022 and cracked down on password sharing in 2023.",
      "Disney, Warner Bros. Discovery and others launched streaming bundles in 2024 to reduce churn.",
      "The US Federal Trade Commission finalised a 'click-to-cancel' rule in 2024; a federal appeals court vacated it in 2025, but the scrutiny of cancellation practices continues under existing laws."
    ],
    action: "Track churn and reasons by cohort, offer pause, downgrade and annual options, make cancellation simple and honest, and keep proving value with usage summaries. Consider bundles or partnerships to lower acquisition costs and reduce churn."
  },
  {
    title: "GLP-1 drugs reshaping consumer categories",
    category: "Consumer",
    summary: "GLP-1 medicines for diabetes and weight loss, such as semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound), are being used by a growing number of people. Because they reduce appetite, they may change what and how much consumers eat and buy.",
    why: "Food, beverage, snacking, restaurant, fitness, apparel, insurance and healthcare businesses may all be affected. Some companies already report shifts in demand and are launching new products, while patent expiries for semaglutide in several countries from 2026 are expected to bring cheaper generics and wider use.",
    examples: [
      "Walmart said in 2023 that it was seeing a slight pullback in food purchases among shoppers taking GLP-1 drugs.",
      "Nestlé launched Vital Pursuit in the US in 2024, a frozen-food line marketed to people using GLP-1 medications.",
      "Novo Nordisk (Ozempic, Wegovy) and Eli Lilly (Mounjaro, Zepbound) have become two of the world's most valuable pharmaceutical companies; Lilly launched Mounjaro in India in 2025."
    ],
    action: "If you are in food, beverage, restaurants, health or fitness, track GLP-1 adoption in your markets, test smaller portions, higher-protein and nutrient-dense products, and consider services that support users (nutrition, muscle retention, coaching). Scenario-plan volume impacts rather than assuming past demand patterns will hold."
  },
  {
    title: "Energy transition and the power demand of AI",
    category: "Macro",
    summary: "The world is shifting toward renewable energy, electric vehicles and batteries, with China leading in manufacturing scale. At the same time, data centres for AI are driving new electricity demand, pushing companies to secure clean, reliable power, including nuclear deals.",
    why: "Energy costs, policy incentives and customer expectations are reshaping manufacturing, transport and real-estate decisions. New markets are opening in solar, storage, EV charging, grid equipment and efficiency services. Policy can change quickly, as shown by changes to US clean-energy tax credits in 2025, so investments need scenario planning.",
    examples: [
      "The US Inflation Reduction Act of 2022 created large clean-energy incentives, some of which were scaled back by legislation passed in 2025.",
      "China's BYD became one of the world's largest electric-vehicle makers, and Chinese firms dominate solar-panel and battery manufacturing.",
      "Microsoft agreed in 2024 to buy power from a planned restart of a Three Mile Island reactor, and Google signed agreements for small modular reactors, to supply data centres.",
      "India has set a target of 500 GW of non-fossil power capacity by 2030."
    ],
    action: "Audit your energy use and cost exposure, evaluate rooftop solar, efficiency upgrades or green power purchase agreements, and ask whether the transition creates a product or service opportunity in your industry. Build policy-change scenarios into any long-term energy investment."
  }
]);
