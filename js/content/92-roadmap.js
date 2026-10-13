/* MBA Studio — Business Roadmap: idea to scale (8 phases) */
MBA.setRoadmap([
  // ---------------------------------------------------------------- 1
  {
    id: 'rm-idea', phase: 1, title: 'Idea & Clarity', icon: '💡', duration: '1–4 weeks',
    goal: "Turn a vague idea into a sharp, written hypothesis: who has which painful problem, why now, and why you are the right person to solve it.",
    steps: [
      {
        title: 'Write down the raw idea and your "why"',
        detail: `<p>Most people stay stuck because the idea lives only in their head. Put it on one page.</p>
<ul>
<li><b>One sentence:</b> "I help <i>[specific customer]</i> solve <i>[specific problem]</i> by <i>[approach]</i>."</li>
<li><b>Your why:</b> money, freedom, impact, a problem you personally lived? Be honest — it decides how much risk and time you will accept.</li>
<li><b>Founder–market fit:</b> list your unfair advantages: skills, network, domain knowledge, savings, access to a channel.</li>
</ul>
<p>If you have several ideas, write a one-pager for each and compare them in the next step.</p>`,
        checklist: ['Write the one-sentence idea statement', 'List 3 personal reasons for starting this business', 'List your unfair advantages (skills, network, access, money)', 'Decide your risk budget: how much money and how many months you can commit']
      },
      {
        title: 'Define the customer and the problem, not the product',
        detail: `<p>Fall in love with the <span class="hl">problem</span>, not your solution. Describe:</p>
<ul>
<li><b>Who exactly:</b> a narrow segment (e.g. "independent dental clinics in tier-2 cities", not "healthcare").</li>
<li><b>The job to be done:</b> what they are trying to achieve, and what makes it painful today.</li>
<li><b>Current alternatives:</b> what they do now (spreadsheets, a competitor, a cousin, nothing). "Nothing" often means the pain is not big enough.</li>
<li><b>Frequency and intensity:</b> a problem that is frequent and expensive beats one that is rare and mild.</li>
</ul>
<p><b>By model:</b> a local shop defines a catchment area; a SaaS defines an ideal customer profile (ICP) by company size and role; a marketplace must define <i>both</i> sides (buyers and sellers).</p>`,
        checklist: ['Write a one-paragraph ideal customer profile', 'Describe the problem in the customer’s own words', 'List current alternatives and why they fall short', 'Rate the pain: frequency (1–5) × intensity (1–5)']
      },
      {
        title: 'Scan the market and "why now"',
        detail: `<p>Spend a few days on desk research before talking to anyone.</p>
<ul>
<li><b>Competitors:</b> find 5–10 direct and indirect ones. Read their reviews — 1- and 3-star reviews show unmet needs.</li>
<li><b>Market size (rough):</b> estimate TAM / SAM / SOM bottom-up: number of reachable customers × what they could pay per year.</li>
<li><b>Why now:</b> what changed? New technology (e.g. AI), regulation, behaviour (e.g. UPI payments), cost curves. Without a "why now", ask why nobody has done it already.</li>
</ul>`,
        checklist: ['List 5–10 competitors and alternatives with pricing', 'Mine competitor reviews for complaints', 'Do a bottom-up TAM/SAM/SOM estimate', 'Write your "why now" in 2–3 sentences']
      },
      {
        title: 'Score and choose one idea',
        detail: `<p>Use a simple scorecard (the <code>idea-score</code> tool in this app) across: pain intensity, market size, ability to reach customers, willingness to pay, your founder fit, capital needed, and time to first revenue.</p>
<p>Pick <b>one</b> idea to validate. Keep the others in a parking-lot file. Doing two at once usually means doing neither well.</p>`,
        checklist: ['Score each candidate idea on 6–8 criteria', 'Pick one idea and park the rest', 'Write the top 3 riskiest assumptions behind the chosen idea']
      },
      {
        title: 'Exit criteria: are you ready to validate?',
        detail: `<p>Move to Phase 2 only when you can answer all of these on one page:</p>
<ul>
<li>A specific customer segment you can name and reach.</li>
<li>A problem statement in their words, with current alternatives.</li>
<li>A rough market size and a "why now".</li>
<li>Your 3 riskiest assumptions (e.g. "they will pay ₹2,000/month", "we can reach them via WhatsApp groups").</li>
</ul>
<p>If you cannot name 20 real people or businesses who fit your customer profile, narrow the segment first.</p>`,
        checklist: ['One-page idea brief complete', 'List of 20+ named prospects to interview', 'Riskiest assumptions written and ranked', 'Time and money budget for validation agreed (with co-founder/family if relevant)']
      }
    ],
    metrics: ['Number of ideas written up and scored', 'Pain score (frequency × intensity) of the chosen problem', 'Size of reachable segment (number of customers)', 'Number of named prospects identified for interviews', 'Hours per week you can realistically commit'],
    pitfalls: ['Starting with a solution ("an app for…") instead of a problem', 'Defining the customer as "everyone"', 'Keeping the idea secret instead of discussing it — ideas are cheap, execution is not', 'Quitting your job before any validation', 'Ignoring indirect competition such as spreadsheets or doing nothing'],
    tools: ['Notes & one-pagers: Notion / Google Docs / Obsidian', 'Idea scoring: the idea-score tool in this app / a simple spreadsheet', 'Market research: Google Trends / Statista / industry reports / government statistics', 'Competitor research: SimilarWeb / G2 / app store and Google reviews', 'AI research assistants: ChatGPT / Claude / Perplexity (verify every fact)', 'Mind-mapping: Miro / Whimsical / pen and paper'],
    tracks: ['ideation', 'business-101', 'validation']
  },

  // ---------------------------------------------------------------- 2
  {
    id: 'rm-validate', phase: 2, title: 'Validate the Problem & Market', icon: '🔍', duration: '3–8 weeks',
    goal: "Prove with evidence — not opinions — that real customers have the problem, care enough to act, and will pay for a solution.",
    steps: [
      {
        title: 'Run customer discovery interviews',
        detail: `<p>Talk to <b>15–30</b> people in your segment. Use <i>The Mom Test</i> rules (Rob Fitzpatrick): ask about their past behaviour, not your idea.</p>
<ul>
<li>"Tell me about the last time you dealt with <i>[problem]</i>."</li>
<li>"What did you do about it? What did it cost you?"</li>
<li>"What have you tried? Why did it not work?"</li>
</ul>
<p>Avoid "Would you buy…?" — people are polite and say yes. Record notes within an hour; tag recurring pains.</p>
<p><b>Marketplace:</b> interview both sides. <b>B2B:</b> talk to the user <i>and</i> the budget holder.</p>`,
        checklist: ['Write a 10-question interview script focused on past behaviour', 'Book and complete 15+ interviews', 'Log each interview in a shared sheet with tagged pains', 'Identify the top 3 recurring pains and the exact words used']
      },
      {
        title: 'Size the opportunity properly',
        detail: `<p>Upgrade your Phase 1 estimate with what you learned.</p>
<ul>
<li><b>Bottom-up:</b> reachable customers × realistic price × purchase frequency.</li>
<li><b>Competitive check:</b> are customers already paying someone? That is good — it proves budget exists.</li>
<li><b>Industry attractiveness:</b> rate Porter’s five forces (the <code>five-forces</code> tool) — supplier power, buyer power, substitutes, new entrants, rivalry.</li>
</ul>`,
        checklist: ['Rebuild TAM/SAM/SOM bottom-up with interview data', 'Note who customers pay today and how much', 'Rate the five forces for your industry']
      },
      {
        title: 'Test demand with a smoke test or pre-sale',
        detail: `<p>Words are weak signals; <span class="hl">money and time</span> are strong signals. Test commitment cheaply:</p>
<ul>
<li><b>Landing page + small ad spend:</b> measure sign-up or "reserve now" conversion.</li>
<li><b>Pre-orders or deposits</b> (D2C, local services).</li>
<li><b>Letters of intent or paid pilots</b> (B2B / SaaS).</li>
<li><b>Concierge test:</b> deliver the service manually to 3–5 customers (great for services and marketplaces).</li>
<li><b>Local shop:</b> a pop-up stall, weekend market or a stock-light trial before signing a lease.</li>
</ul>`,
        checklist: ['Build a one-page landing page with a clear offer and price', 'Run a small paid or community traffic test', 'Ask at least 10 prospects for a pre-order, deposit, LOI or pilot', 'Record conversion rates at each step']
      },
      {
        title: 'Validate price and channel',
        detail: `<p>Two assumptions kill most businesses: <b>price</b> (they will not pay enough) and <b>channel</b> (you cannot reach them cheaply).</p>
<ul>
<li><b>Price:</b> use Van Westendorp questions ("At what price is this too expensive?") and, better, real price tests on the landing page.</li>
<li><b>Channel:</b> try 2–3 channels (cold outreach, community posts, ads, partnerships) and note cost and response per channel.</li>
</ul>`,
        checklist: ['Test at least two price points', 'Try 2–3 acquisition channels with small budgets', 'Estimate early CAC per channel', 'Check unit economics roughly: price minus variable cost per unit']
      },
      {
        title: 'Exit criteria: go, pivot or stop',
        detail: `<p>Decide honestly. Move to Phase 3 when most are true:</p>
<ul>
<li><b>10+ interviews</b> describe the same painful problem unprompted.</li>
<li><b>Commitment evidence:</b> pre-orders, deposits, LOIs, pilot agreements or a waiting list with meaningful conversion.</li>
<li>A price customers accepted that leaves a healthy gross margin.</li>
<li>At least one channel that reaches customers at a plausible cost.</li>
</ul>
<p>If not, <b>pivot</b> one element (segment, problem, channel, price) and re-test, or stop. Stopping early is a win — it saves years.</p>`,
        checklist: ['Summarise evidence against each riskiest assumption', 'Make a written go / pivot / stop decision', 'Share findings with an advisor or mentor for challenge', 'Set a deadline and budget for the next phase']
      }
    ],
    metrics: ['Number of interviews completed and % reporting the same pain', 'Landing-page visitor-to-sign-up conversion rate', 'Pre-orders, deposits, LOIs or paid pilots secured', 'Early CAC estimate per channel', 'Accepted price point and implied gross margin', 'Cost and time spent on validation'],
    pitfalls: ['Asking leading or hypothetical questions ("Would you use this?")', 'Interviewing friends and family instead of real target customers', 'Treating compliments and likes as validation', 'Building the product before any commitment signal', 'Confirmation bias: ignoring the interviews that disagreed', 'Validating demand but not price or channel'],
    tools: ['Scheduling & calls: Calendly / Google Meet / Zoom', 'Interview notes & tagging: Notion / Dovetail / Google Sheets', 'Surveys: Google Forms / Typeform / Tally', 'Landing pages: Carrd / Framer / Webflow / Wix', 'Pre-orders & payments: Stripe Payment Links / Razorpay / Gumroad', 'Small ad tests: Meta Ads / Google Ads / LinkedIn Ads', 'Sizing: the tam-sam-som and five-forces tools in this app'],
    tracks: ['validation', 'economics', 'pricing', 'marketing']
  },

  // ---------------------------------------------------------------- 3
  {
    id: 'rm-plan', phase: 3, title: 'Design the Business Model & Plan', icon: '🧭', duration: '2–6 weeks',
    goal: "Design how the business creates, delivers and captures value, build a simple financial model, set up the legal entity and decide how you will fund it.",
    steps: [
      {
        title: 'Design the business model',
        detail: `<p>Fill a <b>Business Model Canvas</b> (the <code>bmc</code> tool): customer segments, value proposition, channels, relationships, revenue streams, key resources, activities, partners and cost structure.</p>
<ul>
<li><b>Local shop:</b> margin per item × footfall; location and rent dominate.</li>
<li><b>D2C brand:</b> gross margin after shipping and returns vs CAC.</li>
<li><b>SaaS:</b> recurring revenue, churn and LTV:CAC.</li>
<li><b>Services:</b> utilisation and billable rate; scaling needs productised offers.</li>
<li><b>Marketplace:</b> take rate × GMV; liquidity on both sides is everything.</li>
</ul>`,
        checklist: ['Complete a Business Model Canvas', 'Choose a primary revenue model (one-off, subscription, usage, commission, retainer)', 'Write a positioning statement versus your top 3 competitors', 'Identify key partners and suppliers']
      },
      {
        title: 'Build a simple financial model',
        detail: `<p>Build a 24–36 month monthly model in a spreadsheet. Keep assumptions on one tab.</p>
<ul>
<li><b>Revenue drivers:</b> customers × price × frequency (or traffic × conversion × order value).</li>
<li><b>Costs:</b> variable cost per unit (COGS, payment fees, shipping) and fixed costs (rent, salaries, software).</li>
<li><b>Outputs:</b> monthly P&amp;L, cash flow, <span class="hl">break-even point</span> and <span class="hl">runway</span>.</li>
<li>Build three scenarios: conservative, base, optimistic.</li>
</ul>
<p>Use the <code>breakeven</code>, <code>unit-economics</code> and <code>runway</code> tools to sanity-check.</p>`,
        checklist: ['List all assumptions on one tab with sources', 'Model monthly revenue, costs, and cash for 24–36 months', 'Calculate break-even volume and month', 'Build conservative / base / optimistic scenarios', 'Calculate how much cash you need to reach break-even or the next milestone']
      },
      {
        title: 'Set up the legal and admin foundation',
        detail: `<p>Choose a structure with an accountant or lawyer — rules differ by country.</p>
<ul>
<li><b>Common options:</b> sole proprietorship (simple, unlimited liability); LLP / LLC (limited liability, flexible); private limited company (needed for equity funding; e.g. Pvt Ltd in India, Ltd in the UK, Delaware C-Corp for US VC).</li>
<li><b>Founders’ agreement:</b> equity split, roles, <b>vesting</b> (commonly 4 years with a 1-year cliff), IP assignment and exit terms.</li>
<li><b>Registrations:</b> tax IDs, GST/VAT/sales tax, business bank account, local licences (shop and establishment, food licence such as FSSAI, trade licence).</li>
<li><b>Protect:</b> trademark your name and secure domain and social handles.</li>
</ul>`,
        checklist: ['Choose legal structure with professional advice', 'Sign a founders’ agreement with vesting and IP assignment', 'Register the entity, tax IDs and indirect tax where required', 'Open a separate business bank account', 'Obtain sector licences and file a trademark application']
      },
      {
        title: 'Decide the funding plan',
        detail: `<p>Match funding to the business type — not every business should raise venture capital.</p>
<ul>
<li><b>Bootstrapping / customer funding:</b> best for services, local businesses and profitable niches.</li>
<li><b>Friends &amp; family, angels:</b> small early cheques; use simple instruments (SAFE, convertible note, CCPS in India).</li>
<li><b>Bank loans / government schemes:</b> for asset-heavy or local businesses (e.g. MUDRA or CGTMSE-backed loans in India, SBA loans in the US).</li>
<li><b>Venture capital:</b> only for businesses that can plausibly become very large; expect dilution and pressure for fast growth.</li>
<li><b>Grants and accelerators:</b> non-dilutive money and networks.</li>
</ul>
<p>Model dilution with the <code>cap-table</code> tool before you sign anything.</p>`,
        checklist: ['Decide bootstrap vs raise, and write why', 'Set the amount needed for the next 12–18 months plus a buffer', 'List 20 relevant funders, schemes or grants', 'Model dilution for the planned round']
      },
      {
        title: 'Exit criteria: a plan you can execute',
        detail: `<p>Move to Phase 4 when you have:</p>
<ul>
<li>A business model with positive <b>unit economics on paper</b> (contribution margin above zero; for subscriptions, LTV:CAC plausibly 3:1 or better).</li>
<li>A financial model showing cash needed, break-even and runway.</li>
<li>A registered entity, bank account and founders’ agreement.</li>
<li>Funding committed (savings, loan, angel money) for at least the MVP and launch phases.</li>
<li>A 90-day plan with 3–5 milestones.</li>
</ul>`,
        checklist: ['Unit economics positive in base case', 'Funding secured for at least 6–12 months', 'Legal and banking set up', '90-day milestone plan written']
      }
    ],
    metrics: ['Contribution margin per unit / per customer', 'Break-even volume and expected month', 'Cash required to reach break-even or next milestone', 'Months of runway with committed funding', 'Founder ownership after planned funding', 'LTV:CAC (subscription models) or payback period'],
    pitfalls: ['Hockey-stick projections with no driver-based assumptions', 'Forgetting payment fees, shipping, returns, taxes and founder salaries in costs', 'Equal equity splits with no vesting', 'Raising VC for a business that suits bootstrapping or debt', 'Mixing personal and business money', 'Skipping licences and tax registrations until a penalty arrives'],
    tools: ['Business model design: the bmc tool in this app / Strategyzer canvases', 'Financial modelling: Google Sheets / Excel / Causal-style planning tools', 'Company formation: local registrars, online incorporation services, a chartered accountant', 'Contracts & e-signature: DocuSign / Zoho Sign / Dropbox Sign', 'Cap table: Carta / Pulley / Qapita / a spreadsheet', 'Banking: a business current account with a local bank or neobank', 'Simulators: breakeven, runway and cap-table tools in this app'],
    tracks: ['business-model', 'finance', 'legal', 'investment']
  },

  // ---------------------------------------------------------------- 4
  {
    id: 'rm-mvp', phase: 4, title: 'Build the MVP / First Offer', icon: '🛠️', duration: '4–12 weeks',
    goal: "Build the smallest version of the offer that delivers the core value to early customers, and learn from them as fast as possible.",
    steps: [
      {
        title: 'Define the MVP scope',
        detail: `<p>An MVP is the smallest thing that tests your main value promise — not a cheap version of the final product.</p>
<ul>
<li>List every feature, then cut to the 1–3 that solve the core pain. Use MoSCoW (Must / Should / Could / Won’t).</li>
<li><b>Types of MVP:</b> concierge (manual service), Wizard of Oz (looks automated, done by hand), no-code app, single-product store, pilot service package.</li>
<li><b>Local shop:</b> a narrow, high-demand range; <b>D2C:</b> one hero product; <b>SaaS:</b> one workflow; <b>services:</b> one productised package with a fixed price; <b>marketplace:</b> one city or one category, with supply hand-curated.</li>
</ul>`,
        checklist: ['List all features and cut to must-haves only', 'Choose the MVP type (concierge, no-code, single product, pilot)', 'Write a one-page MVP spec with success criteria', 'Set a fixed build deadline (time-box)']
      },
      {
        title: 'Build or source it',
        detail: `<p>Choose the fastest path that keeps quality where customers notice.</p>
<ul>
<li><b>Software:</b> no-code/low-code or AI coding assistants for speed; hire or partner for core IP. Keep the stack boring and well supported.</li>
<li><b>Physical products:</b> small minimum-order runs, samples from 2–3 suppliers, quality checks before paying the balance.</li>
<li><b>Services:</b> write the delivery checklist, templates and onboarding flow.</li>
<li><b>Shops:</b> fit-out on a budget; negotiate a short lease or a rent-free fit-out period.</li>
</ul>`,
        checklist: ['Pick build approach (in-house, freelance, agency, no-code, supplier)', 'Get samples or prototypes and test quality', 'Write contracts that give you ownership of IP and designs', 'Set up basic analytics or a sales log from day one']
      },
      {
        title: 'Set up payments, delivery and support basics',
        detail: `<p>Make it easy to buy and easy to get help.</p>
<ul>
<li><b>Payments:</b> payment gateway, UPI/QR, cards, invoices for B2B.</li>
<li><b>Fulfilment:</b> shipping partner, delivery SLAs, returns policy; for software, onboarding emails.</li>
<li><b>Support:</b> one channel (WhatsApp, email or chat) with a response-time promise.</li>
<li><b>Legal pages:</b> terms, privacy policy, refund policy (required by payment gateways and data laws).</li>
</ul>`,
        checklist: ['Integrate a payment method and test a real transaction', 'Define delivery or onboarding process end to end', 'Publish terms, privacy and refund policies', 'Set up one support channel with response targets']
      },
      {
        title: 'Beta test with early customers',
        detail: `<p>Give the MVP to 5–20 early adopters (ideally those who pre-paid or signed LOIs). Watch them use it.</p>
<ul>
<li>Run usability sessions: ask them to complete a task while thinking aloud.</li>
<li>Track whether they use it again without being reminded — <span class="hl">repeat usage</span> is the best early signal.</li>
<li>Ask: "How would you feel if you could no longer use this?" (Sean Ellis test).</li>
<li>Fix the top 3 issues each week; ignore nice-to-have requests for now.</li>
</ul>`,
        checklist: ['Onboard 5–20 beta customers', 'Run at least 5 observed usability sessions', 'Track repeat usage or reorders', 'Ship weekly fixes for the top issues']
      },
      {
        title: 'Exit criteria: ready to launch',
        detail: `<p>Move to Phase 5 when:</p>
<ul>
<li>Beta customers get the core value without your hand-holding (or your manual process is documented and repeatable).</li>
<li>Some customers have <b>paid</b> and some have <b>returned</b> or renewed.</li>
<li>Quality, payments, delivery and support work reliably end to end.</li>
<li>You have 3–5 testimonials or case stories.</li>
</ul>`,
        checklist: ['Core value delivered reliably to beta users', 'At least a handful of paying and repeat customers', 'Testimonials collected with permission', 'Known critical bugs or quality defects fixed']
      }
    ],
    metrics: ['Time and cost to build the MVP', 'Activation rate (share of users who reach the core value)', 'Repeat usage / reorder rate among beta customers', 'Sean Ellis "very disappointed" percentage', 'Defect or return rate', 'Customer support tickets per customer'],
    pitfalls: ['Building for months in secret before any customer touches it', 'Gold-plating features nobody asked for', 'Over-investing in branding, office or inventory before demand is proven', 'Not owning the code, designs or supplier moulds', 'Measuring sign-ups instead of real usage', 'Ignoring legal basics like privacy policy and refund terms'],
    tools: ['No-code / low-code: Bubble / Glide / Softr / Airtable', 'AI coding & design: Cursor / GitHub Copilot / Claude / Figma', 'E-commerce: Shopify / WooCommerce / Dukaan', 'Payments: Stripe / Razorpay / PayPal / UPI QR', 'Product analytics: Mixpanel / PostHog / Google Analytics', 'Support: WhatsApp Business / Freshdesk / Intercom / Zoho Desk', 'Sourcing: Alibaba / IndiaMART / local trade fairs', 'Project management: Trello / Linear / Asana / Jira'],
    tracks: ['technology', 'operations', 'validation']
  },

  // ---------------------------------------------------------------- 5
  {
    id: 'rm-launch', phase: 5, title: 'Launch & Get First Customers', icon: '🚀', duration: '1–3 months',
    goal: "Launch publicly, win your first 10–100 paying customers through hands-on selling, and find at least one channel that works.",
    steps: [
      {
        title: 'Plan the launch',
        detail: `<p>A launch is a campaign, not a single day.</p>
<ul>
<li><b>Pre-launch (2–4 weeks):</b> build a waitlist, warm up communities, line up testimonials, prepare press or creator outreach.</li>
<li><b>Launch week:</b> email the waitlist, post in communities, run launch offers, use platforms such as Product Hunt (software) or a launch event (local).</li>
<li><b>Post-launch:</b> follow up every lead personally.</li>
</ul>
<p><b>Local shop:</b> soft opening for friends, then a grand opening with a local offer and Google Business Profile ready.</p>`,
        checklist: ['Build a launch calendar (pre, during, post)', 'Prepare launch assets: page, visuals, demo, FAQs', 'Line up 10+ partners, creators or communities to share', 'Set a specific launch target (sign-ups, orders, revenue)']
      },
      {
        title: 'Do things that do not scale',
        detail: `<p>Paul Graham’s advice: early customers are won <b>one by one</b>.</p>
<ul>
<li>Personal outreach: DMs, calls, emails, walk-ins to shops near you.</li>
<li>Founder-led sales: the founder should close the first customers — you learn objections first-hand.</li>
<li>White-glove onboarding: set up the product for customers yourself.</li>
<li>Ask every happy customer for a referral and a review.</li>
</ul>`,
        checklist: ['Do 20+ personal outreach touches per day for a month', 'Founder personally closes the first customers', 'Personally onboard each new customer', 'Ask every happy customer for a review and a referral']
      },
      {
        title: 'Test acquisition channels systematically',
        detail: `<p>Use the <b>Bullseye framework</b> (Weinberg &amp; Mares, <i>Traction</i>): brainstorm many channels, run cheap tests on 3, then focus on the one that works.</p>
<ul>
<li><b>B2B / SaaS:</b> outbound, LinkedIn, partnerships, content, marketplaces/app stores.</li>
<li><b>D2C:</b> creators and influencers, Meta/Google ads, marketplaces (Amazon, Flipkart), quick-commerce listings.</li>
<li><b>Local:</b> Google Maps listing, local WhatsApp groups, flyers, partnerships with nearby businesses.</li>
<li><b>Services:</b> referrals, LinkedIn thought leadership, directories.</li>
</ul>
<p>Track each channel’s CAC and conversion with the <code>funnel</code> tool.</p>`,
        checklist: ['List 10+ possible channels', 'Run small time-boxed tests on the 3 most promising', 'Track CAC, conversion and payback by channel', 'Double down on the best channel and pause the rest']
      },
      {
        title: 'Build a basic sales and feedback loop',
        detail: `<p>Even with 10 customers, write things down.</p>
<ul>
<li>Use a simple CRM to track every lead, stage and reason for loss.</li>
<li>Write a sales script and an objection list; update it weekly.</li>
<li>Run a monthly check-in or survey (NPS) and log feature requests by frequency.</li>
<li>Calculate early retention: do customers come back in month 2 and 3?</li>
</ul>`,
        checklist: ['Set up a CRM or pipeline sheet', 'Document sales script and top objections with answers', 'Run NPS or check-in calls with every customer', 'Track month-2 and month-3 retention']
      },
      {
        title: 'Exit criteria: early traction',
        detail: `<p>Move to Phase 6 when:</p>
<ul>
<li>You have a steady flow of paying customers (for example, the first 10–100 depending on price point).</li>
<li>At least <b>one channel</b> brings customers at a CAC your margins can afford.</li>
<li>Retention or repeat purchase is stable or improving across cohorts.</li>
<li>Revenue is growing month on month, even if small.</li>
</ul>`,
        checklist: ['First paying customer cohort reached', 'One repeatable channel identified', 'Month-on-month revenue growth for 2–3 months', 'Cohort retention tracked and not collapsing']
      }
    ],
    metrics: ['Number of paying customers and monthly revenue', 'Conversion rate at each funnel stage', 'CAC and payback by channel', 'Month-2 / month-3 retention or repeat purchase rate', 'Net Promoter Score (NPS)', 'Sales cycle length (B2B)'],
    pitfalls: ['Expecting the launch day alone to create a business', 'Spreading thin across too many channels', 'Scaling paid ads before retention is proven', 'Delegating early sales before the founder understands objections', 'Deep discounting that trains customers to never pay full price', 'Not following up with leads'],
    tools: ['CRM: HubSpot / Zoho CRM / Pipedrive / a Google Sheet', 'Email marketing: Mailchimp / Brevo / ConvertKit', 'Social & scheduling: Buffer / Hootsuite / Meta Business Suite', 'Local presence: Google Business Profile / Justdial / Yelp', 'Launch platforms: Product Hunt / Indie Hackers / community forums', 'Outreach: LinkedIn Sales Navigator / Apollo / WhatsApp Business', 'Surveys & NPS: Typeform / Delighted / Google Forms', 'Funnel analysis: the funnel tool in this app'],
    tracks: ['marketing', 'sales', 'growth']
  },

  // ---------------------------------------------------------------- 6
  {
    id: 'rm-run', phase: 6, title: 'Run & Manage', icon: '⚙️', duration: 'Ongoing (set up in 1–3 months)',
    goal: "Build the operating system of the business — processes, finance cadence, team, compliance and metrics — so it runs reliably without heroics.",
    steps: [
      {
        title: 'Document and improve core operations',
        detail: `<p>Write <b>standard operating procedures (SOPs)</b> for anything done more than twice: order fulfilment, onboarding, invoicing, support, inventory, hiring.</p>
<ul>
<li>Map the process, find the bottleneck, fix it first (Theory of Constraints).</li>
<li><b>Inventory businesses:</b> set reorder points and use EOQ (the <code>eoq</code> tool); track stock turns.</li>
<li><b>Services:</b> track utilisation and delivery quality.</li>
<li><b>SaaS:</b> uptime, incident response and release process.</li>
<li>Automate repetitive tasks with workflow tools and AI assistants — but only after the process is stable.</li>
</ul>`,
        checklist: ['Write SOPs for the 5 most frequent processes', 'Identify and fix the main bottleneck', 'Set reorder points or capacity plans', 'Automate at least 2 repetitive tasks']
      },
      {
        title: 'Set a finance cadence',
        detail: `<p>Cash is the oxygen of the business. Set a rhythm:</p>
<ul>
<li><b>Weekly:</b> cash balance, receivables, payables, 13-week cash forecast.</li>
<li><b>Monthly:</b> close the books, produce P&amp;L, balance sheet and cash flow; compare to budget.</li>
<li><b>Quarterly:</b> re-forecast, review pricing and unit economics, tax filings.</li>
</ul>
<p>Manage working capital: shorten customer payment terms, negotiate supplier terms (the <code>working-capital</code> tool shows the cash conversion cycle). Separate tax money into its own account.</p>`,
        checklist: ['Use accounting software and reconcile monthly', 'Produce monthly P&L, balance sheet and cash flow', 'Maintain a rolling 13-week cash forecast', 'Set and track a budget versus actuals', 'Calendar all tax and statutory deadlines']
      },
      {
        title: 'Build the team and culture',
        detail: `<p>Hire when a role is clearly needed and you can describe success in 90 days.</p>
<ul>
<li>Write a scorecard per role: mission, outcomes, competencies.</li>
<li>Use structured interviews and a work-sample task (skills-based hiring).</li>
<li>Decide employee vs contractor carefully — misclassification has legal risk.</li>
<li>Write down values and how decisions are made; run weekly 1:1s.</li>
<li>Set up payroll, contracts, statutory benefits (e.g. PF/ESI in India) and an employee handbook.</li>
</ul>`,
        checklist: ['Create a hiring scorecard for each open role', 'Use structured interviews and a work sample', 'Set up payroll and statutory benefits', 'Hold weekly 1:1s and a weekly team meeting', 'Write a short values and ways-of-working document']
      },
      {
        title: 'Stay compliant and manage risk',
        detail: `<p>Build a <b>compliance calendar</b> and a simple risk register.</p>
<ul>
<li>Tax: GST/VAT returns, income tax, TDS/withholding, annual filings with the company registrar.</li>
<li>Data protection: GDPR (EU/UK), India’s DPDP Act, US state privacy laws — collect only data you need, get consent, secure it.</li>
<li>Contracts: standard customer, supplier and employment templates reviewed by a lawyer.</li>
<li>Insurance: liability, property, cyber, and key-person where relevant.</li>
<li>Board or advisor meetings with minutes if you have investors.</li>
</ul>`,
        checklist: ['Create a compliance calendar with owners', 'Review data handling against applicable privacy law', 'Standardise core contracts', 'Buy appropriate insurance', 'Keep a top-10 risk register with mitigations']
      },
      {
        title: 'Install a metrics and management rhythm',
        detail: `<p>Pick a <b>North Star metric</b> (the one number that best captures value delivered) plus 5–8 KPIs on one dashboard.</p>
<ul>
<li>Set quarterly <b>OKRs</b> (the <code>okr</code> tool) — 2–3 objectives, measurable key results.</li>
<li>Weekly KPI review; monthly business review; quarterly planning.</li>
<li>Example KPIs: <i>shop</i> — footfall, average bill, gross margin; <i>D2C</i> — AOV, repeat rate, CAC, return rate; <i>SaaS</i> — MRR, net revenue retention, churn; <i>services</i> — utilisation, realisation, pipeline; <i>marketplace</i> — GMV, take rate, liquidity.</li>
</ul>`,
        checklist: ['Choose a North Star metric', 'Build a one-page KPI dashboard', 'Set quarterly OKRs', 'Run weekly KPI and monthly business reviews']
      },
      {
        title: 'Exit criteria: a business that runs without the founder in every task',
        detail: `<p>Move to Phase 7 when:</p>
<ul>
<li>Core processes are documented and others can run them.</li>
<li>Books close monthly; you know your margins and cash runway at any time.</li>
<li>Compliance is on a calendar with no overdue filings.</li>
<li>A dashboard is reviewed weekly and drives decisions.</li>
<li>The founder spends most time on customers, strategy and people, not firefighting.</li>
</ul>`,
        checklist: ['SOPs cover core operations', 'Monthly close done on time for 3 months', 'No overdue statutory filings', 'Founder time audit shows less firefighting']
      }
    ],
    metrics: ['Gross margin and contribution margin', 'Monthly burn and cash runway', 'Cash conversion cycle (DSO + DIO − DPO)', 'On-time delivery / SLA performance', 'Employee retention and engagement', 'North Star metric trend'],
    pitfalls: ['Running the business from your bank balance instead of a cash forecast', 'Hiring friends or "generalists" without clear outcomes', 'Ignoring compliance until notices or penalties arrive', 'Founder as a bottleneck for every decision', 'Tracking too many vanity metrics', 'Automating a broken process'],
    tools: ['Accounting: QuickBooks / Zoho Books / Xero / Tally', 'Payroll & HR: Gusto / Deel / Keka / Razorpay Payroll / BambooHR', 'Inventory & ops: Zoho Inventory / Odoo / Cin7 / Shopify POS', 'Workflow automation: Zapier / Make / n8n', 'Documentation & SOPs: Notion / Confluence / Google Docs', 'Dashboards: Looker Studio / Power BI / Metabase', 'Compliance & e-sign: local compliance platforms / DocuSign / Zoho Sign', 'OKRs: the okr tool in this app / Lattice / Perdoo'],
    tracks: ['operations', 'finance', 'people', 'legal']
  },

  // ---------------------------------------------------------------- 7
  {
    id: 'rm-grow', phase: 7, title: 'Grow', icon: '📈', duration: '6–24 months',
    goal: "Reach clear product–market fit and turn early traction into a repeatable, profitable growth engine.",
    steps: [
      {
        title: 'Confirm product–market fit',
        detail: `<p>Signs of PMF: customers pull the product from you, retention curves <span class="hl">flatten</span> rather than decline to zero, referrals grow, and sales cycles shorten.</p>
<ul>
<li>Sean Ellis test: 40%+ of users "very disappointed" without you is a common benchmark.</li>
<li>Plot cohort retention (the <code>retention</code> tool). A flat tail means a loyal core.</li>
<li>Find your <b>best customers</b> and narrow your ICP around them.</li>
</ul>`,
        checklist: ['Plot cohort retention curves', 'Run a Sean Ellis survey', 'Profile your best 20% of customers', 'Update ICP and positioning around them']
      },
      {
        title: 'Build a repeatable growth engine',
        detail: `<p>Pick the engine that fits your model and invest in it:</p>
<ul>
<li><b>Paid engine:</b> works when LTV comfortably exceeds CAC and payback is short.</li>
<li><b>Viral / referral engine:</b> built-in sharing or referral rewards (the <code>viral-loop</code> tool).</li>
<li><b>Content / SEO / AI-search engine:</b> compounding inbound.</li>
<li><b>Sales engine (B2B):</b> SDR → AE → customer success, with a defined playbook.</li>
<li><b>Product-led growth:</b> free trial or freemium with self-serve upgrade.</li>
<li><b>Local:</b> loyalty programmes, repeat offers, partnerships, second location only after the first is profitable.</li>
</ul>
<p>Run experiments weekly: hypothesis → test → measure (the <code>ab-test</code> tool) → scale or kill.</p>`,
        checklist: ['Choose a primary growth engine', 'Build a growth model (inputs → revenue)', 'Run a weekly experiment cadence with a backlog', 'Document a sales or marketing playbook']
      },
      {
        title: 'Expand revenue per customer and retention',
        detail: `<p>Growth from existing customers is usually cheaper than new acquisition.</p>
<ul>
<li>Upsell and cross-sell; tiered pricing and add-ons.</li>
<li>Raise prices periodically for new customers; grandfather or give notice to existing ones.</li>
<li>Customer success: onboarding, health scores, renewal reviews.</li>
<li>Track <b>net revenue retention</b> (SaaS) or <b>repeat rate and AOV</b> (retail/D2C).</li>
</ul>`,
        checklist: ['Introduce tiers, bundles or add-ons', 'Review pricing at least annually', 'Set up customer health scoring or win-back campaigns', 'Track NRR or repeat purchase rate monthly']
      },
      {
        title: 'Grow efficiently',
        detail: `<p>Investors and lenders in 2025–2026 reward <b>efficient growth</b>.</p>
<ul>
<li><b>Burn multiple</b> = net burn ÷ net new ARR (lower is better).</li>
<li><b>Rule of 40</b> = growth % + profit margin % (the <code>rule-of-40</code> tool), used for software.</li>
<li><b>CAC payback</b> months; contribution margin after marketing.</li>
<li>Cut channels and projects that do not pay back; reinvest in those that do.</li>
</ul>`,
        checklist: ['Calculate burn multiple or CAC payback each month', 'Kill the bottom 20% of spend by ROI', 'Build an annual operating plan with growth and efficiency targets']
      },
      {
        title: 'Exit criteria: a growth engine you can pour fuel into',
        detail: `<p>Move to Phase 8 when:</p>
<ul>
<li>Retention curves are flat and healthy across several cohorts.</li>
<li>One or two channels deliver predictable growth at acceptable CAC payback.</li>
<li>Unit economics improve, not worsen, as volume grows.</li>
<li>Playbooks exist so new hires can run sales, marketing and success.</li>
<li>Demand exceeds your current capacity, systems or team.</li>
</ul>`,
        checklist: ['Flat retention across 3+ cohorts', 'Predictable pipeline or demand forecast', 'Healthy CAC payback and contribution margin', 'Playbooks documented for growth functions']
      }
    ],
    metrics: ['Revenue growth rate (MoM / YoY)', 'Cohort retention and net revenue retention', 'CAC payback period and LTV:CAC', 'Burn multiple or Rule of 40', 'Referral share of new customers', 'Experiment velocity (tests per month)'],
    pitfalls: ['Scaling spend before product–market fit (premature scaling)', 'Chasing every customer segment instead of the best one', 'Revenue growth with worsening unit economics', 'Ignoring churn while celebrating new sales', 'Never raising prices', 'Hiring sales teams before a founder-proven playbook exists'],
    tools: ['Product analytics: Amplitude / Mixpanel / PostHog', 'Experimentation: Optimizely / VWO / GrowthBook', 'Marketing automation: HubSpot / Klaviyo / MoEngage / CleverTap', 'Customer success: Gainsight / ChurnZero / Freshdesk', 'Subscription billing: Chargebee / Stripe Billing / Zoho Subscriptions', 'SEO & AI search: Ahrefs / Semrush / Google Search Console', 'Referrals & loyalty: ReferralCandy / Smile.io', 'Simulators: retention, viral-loop, ab-test and rule-of-40 tools in this app'],
    tracks: ['growth', 'marketing', 'pricing', 'sales']
  },

  // ---------------------------------------------------------------- 8
  {
    id: 'rm-scale', phase: 8, title: 'Scale & Expand', icon: '🌍', duration: '2–5+ years',
    goal: "Scale the organisation, systems and capital base; expand into new products, segments or markets; and keep long-term options (including exits) open.",
    steps: [
      {
        title: 'Design the organisation for scale',
        detail: `<p>What got you here will not get you there.</p>
<ul>
<li>Move from founder-run to a <b>leadership team</b>: hire or promote heads of functions (finance, operations, sales, product, people).</li>
<li>Choose a structure: functional, product/business-unit, or regional. Keep spans of control sensible.</li>
<li>Define decision rights (e.g. RACI or RAPID) so decisions do not all flow to the CEO.</li>
<li>Invest in managers: training, career paths, performance reviews, equity refresh.</li>
<li>Protect culture: write it down, hire for it, and model it.</li>
</ul>`,
        checklist: ['Build a leadership team with clear owners per function', 'Publish an org chart and decision-rights matrix', 'Launch manager training and a performance cycle', 'Set up an ESOP or long-term incentive plan']
      },
      {
        title: 'Upgrade systems and governance',
        detail: `<p>Replace duct tape with systems that scale.</p>
<ul>
<li><b>ERP / finance:</b> multi-entity accounting, audited financials, internal controls.</li>
<li><b>Data:</b> a single source of truth for customers and metrics.</li>
<li><b>Security:</b> access control, backups; certifications such as SOC 2 or ISO 27001 if selling to enterprises.</li>
<li><b>Governance:</b> a formal board with independent members, audit committee as you grow, clear policies.</li>
</ul>`,
        checklist: ['Implement an ERP or scalable finance stack', 'Get audited financials', 'Put security controls and needed certifications in place', 'Hold regular board meetings with a standard pack']
      },
      {
        title: 'Raise and allocate capital wisely',
        detail: `<p>Match capital to the plan:</p>
<ul>
<li><b>Equity:</b> Series A/B/C or growth equity for fast-scaling businesses.</li>
<li><b>Debt:</b> working-capital lines, term loans, venture debt or revenue-based financing for businesses with predictable revenue.</li>
<li><b>Internal cash:</b> profitable businesses can self-fund expansion.</li>
</ul>
<p>Allocate capital like an investor: rank projects by return (the <code>npv</code> tool), set hurdle rates, and review results. Keep 12–24 months of runway in uncertain markets.</p>`,
        checklist: ['Write a 3-year strategic plan with capital needs', 'Compare equity, debt and internal funding options', 'Rank investment projects by NPV/IRR and strategic fit', 'Maintain an investor or lender update cadence']
      },
      {
        title: 'Expand: new products, segments and markets',
        detail: `<p>Use the <b>Ansoff matrix</b>: market penetration → product development → market development → diversification (riskiest).</p>
<ul>
<li><b>Local shop:</b> new locations or franchising — standardise the model first.</li>
<li><b>D2C:</b> new categories, offline retail, marketplaces, international shipping.</li>
<li><b>SaaS:</b> new modules, move up-market (enterprise) or down-market, new geographies with local compliance.</li>
<li><b>Services:</b> productise, add offices, or build software from repeated work.</li>
<li><b>Marketplace:</b> city-by-city or category-by-category expansion, reusing the playbook.</li>
</ul>
<p>Pilot each expansion small, with clear kill criteria, before full roll-out. Consider acquisitions to buy capability or market access.</p>`,
        checklist: ['Rank expansion options using the Ansoff matrix and a decision matrix', 'Run a time-boxed pilot with kill criteria', 'Check local laws, tax and data rules for new markets', 'Assess acquisition targets where build is slower than buy']
      },
      {
        title: 'Exit criteria and long-term options',
        detail: `<p>Scaling is complete when the business runs as an institution: a leadership team, governance and systems that work without the founder. Then choose the long-term path:</p>
<ul>
<li><b>Keep and compound:</b> a profitable, owner-run business paying dividends.</li>
<li><b>Strategic sale (M&amp;A):</b> to a competitor or larger player.</li>
<li><b>Private equity / secondary sale:</b> partial liquidity for founders and early investors.</li>
<li><b>IPO:</b> public listing; needs years of audited results, governance and predictable growth.</li>
<li><b>Succession:</b> hand over to a professional CEO or the next generation.</li>
</ul>
<p>Prepare years in advance: clean books, documented processes, diversified customer base, and a valuation view (the <code>valuation</code> tool).</p>`,
        checklist: ['Leadership team runs day-to-day operations', 'Clean, audited books and a data room maintained', 'No single customer or person is a critical dependency', 'Long-term ownership path decided with the board and family']
      }
    ],
    metrics: ['Revenue and profit growth by segment / market', 'EBITDA margin and free cash flow', 'Net revenue retention or repeat rate at scale', 'Revenue per employee', 'Return on invested capital (ROIC)', 'Leadership bench strength and regrettable attrition'],
    pitfalls: ['Founder refusing to delegate or let go of control', 'Expanding to new markets before the core is profitable', 'Over-hiring in good times, then painful layoffs', 'Culture dilution as headcount grows', 'Over-reliance on one investor, customer or channel', 'Weak governance and controls that surface during due diligence'],
    tools: ['ERP: NetSuite / SAP Business One / Odoo / Microsoft Dynamics', 'HRIS & performance: Workday / Darwinbox / Lattice / Culture Amp', 'Data & BI: Snowflake / BigQuery / Power BI / Tableau', 'Security & compliance: Vanta / Drata / Sprinto', 'Board & investor relations: board-portal software / Visible / Carta', 'Capital allocation: the npv, valuation and decision-matrix tools in this app', 'Strategy: Ansoff matrix / scenario planning workshops'],
    tracks: ['scaling', 'strategy', 'investment', 'csuite']
  }
]);
