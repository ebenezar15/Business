/* Track 17 — Legal, Governance & Risk */
MBA.addTrack({
  id: "legal",
  stage: 4,
  order: 17,
  title: "Legal, Governance & Risk",
  icon: "⚖️",
  color: "#a16207",
  tagline: "Protect the company you are building",
  summary: `Understand the legal and governance foundations every founder and executive needs: picking an entity, protecting IP, signing sensible contracts, hiring lawfully, handling personal data, running a board and managing risk and crises. Everything here is general education, not legal advice — the goal is to know which questions to ask and when to call a qualified lawyer in your jurisdiction.`,
  outcomes: [
    "Choose a sensible legal entity and set up founder agreements with vesting",
    "Identify which type of IP protects what — patent, trademark, copyright or trade secret",
    "Read a commercial contract and spot the clauses that matter most",
    "Explain the core ideas of GDPR, India's DPDP Act and CCPA",
    "Describe board duties, good governance and anti-bribery compliance",
    "Build a risk register and heat map, lead a crisis response and outline ESG reporting"
  ],
  lessons: [
    /* ---------------------------------------------------------- 1 */
    {
      id: "legal-1",
      title: "Legal entities and founder agreements",
      level: "Beginner",
      minutes: 13,
      hook: "Most startup legal disasters are not lawsuits from outsiders — they are fights between co-founders that a one-page agreement would have prevented.",
      eli5: `Starting a company is like starting a band. If you don't agree early who owns the songs, who gets paid what, and what happens if the drummer quits after two weeks, the band can fall apart when the first hit arrives. A legal entity is the band's official name and bank account; the founder agreement is the band's rulebook.`,
      blocks: [
        { type: "callout", kind: "warning", title: "Not legal advice", html: `<p>Laws differ by country and state and change often. This track teaches concepts so you can ask good questions. <b>Always consult a qualified lawyer</b> for your specific situation.</p>` },
        { type: "compare", title: "Common entity types (names vary by country)", headers: ["", "Sole proprietorship", "Partnership", "LLC / LLP", "Company / Corporation"], rows: [
          ["Separate legal person?", "No", "Usually no (general partnership)", "Yes", "Yes"],
          ["Owner liability", "Unlimited — personal assets at risk", "Unlimited for general partners", "Limited to investment (generally)", "Limited to investment (generally)"],
          ["Raising equity", "Not possible", "Hard", "Possible but awkward for VC", "Designed for it — shares, options"],
          ["Typical use", "Freelancer, small shop", "Professional firms", "Small businesses, consultancies", "Startups seeking investors (e.g. Delaware C-corp in the US, Private Limited Company in India and the UK)"]
        ] },
        { type: "framework", name: "Founder agreement essentials", by: "Common startup legal practice", when: "Before writing serious code, taking money or signing customers — ideally in the first weeks.", steps: [
          { label: "Equity split", desc: "Who owns what percentage, and why. Base it on future contribution, not just the idea." },
          { label: "Vesting", desc: "Founders earn their shares over time (commonly 4 years with a 1-year cliff) so a departing founder doesn't keep a large stake for little work." },
          { label: "IP assignment", desc: "All code, designs and inventions created for the company belong to the company — including anything made before incorporation." },
          { label: "Roles and decision-making", desc: "Who is CEO, who decides what, how deadlocks are broken." },
          { label: "Leaving and buy-back", desc: "What happens to unvested and vested shares if a founder leaves, is fired or becomes unable to work." },
          { label: "Commitment and non-compete/non-solicit", desc: "Full-time expectations; restrictions are enforceable to very different degrees by jurisdiction." }
        ] },
        { type: "formula", name: "Vesting with a cliff", expr: "Vested shares = Total shares × (Months served ÷ Vesting months), with 0 vested before the cliff", explain: "A 1-year cliff means nothing vests until 12 months; then 12/48 (25%) vests at once, and the rest monthly. In the US, founders with vesting stock often file an 83(b) election within 30 days so tax is based on today's low value — ask a tax adviser.", example: "Founder with 3,000,000 shares on 4-year vesting, 1-year cliff, leaves at month 20: vested = 3,000,000 × 20 ÷ 48 = 1,250,000 shares. The company can typically buy back the 1,750,000 unvested shares. If she left at month 10 — before the cliff — zero would be vested." },
        { type: "case", company: "Facebook", year: "2004–2009", title: "Co-founder dilution dispute", situation: `Eduardo Saverin was an early co-founder and funder of Facebook. As the company moved to California and raised venture capital, relations with Mark Zuckerberg broke down.`, decision: `Through a restructuring, Saverin's ownership percentage was sharply diluted while other holders were not diluted the same way. He sued.`, outcome: `The case was settled confidentially; Saverin was acknowledged as a co-founder and kept a meaningful stake. The dispute was dramatised in the film "The Social Network".`, lesson: `Clear, early founder agreements on equity, roles, vesting and dilution protections prevent expensive fights later.` },
        { type: "scenario", prompt: "You and two friends start a company with a 33/33/33 split and no vesting. After four months, one friend takes a full-time job elsewhere but keeps 33%. What should you have done?", options: [
          { text: "Used 4-year vesting with a 1-year cliff for all founders, plus a buy-back right for unvested shares.", feedback: "Yes. He would have had 0% vested at month 4, and the company could recover his shares for new hires.", good: true },
          { text: "Nothing — equal splits are always fair.", feedback: "Equal splits without vesting leave the company stuck with an inactive owner.", good: false },
          { text: "Just ask him nicely to give his shares back.", feedback: "Hope is not a legal strategy. He has no obligation without an agreement.", good: false }
        ] },
        { type: "checklist", title: "Day-one legal hygiene", items: [
          "Incorporate the right entity in the right jurisdiction for your fundraising plans",
          "Sign a founder agreement with vesting and IP assignment",
          "Open a separate business bank account — never mix personal and company money",
          "Keep a clean cap table from day one",
          "Register for required tax IDs and licences",
          "Use written contracts with every contractor that assign IP to the company"
        ] }
      ],
      terms: [
        { term: "Legal entity", def: "An organisation the law treats as a separate 'person' that can own assets, sign contracts and be sued." },
        { term: "Limited liability", def: "Owners can lose only what they invested; personal assets are generally protected from business debts." },
        { term: "Vesting", def: "Earning ownership of shares gradually over time or milestones." },
        { term: "Cliff", def: "An initial period (often 12 months) before any shares vest." },
        { term: "IP assignment", def: "A legal transfer of rights in work created by a person to the company." },
        { term: "Cap table", def: "A table listing who owns which shares, options and convertible instruments in a company." },
        { term: "Dilution", def: "The fall in an owner's percentage when new shares are issued." }
      ],
      quiz: [
        { q: "Which entity type exposes the owner's personal assets to business debts?", options: ["Private limited company", "Delaware C-corp", "Sole proprietorship", "LLC"], answer: 2, explain: "A sole proprietorship is not separate from its owner." },
        { q: "A founder with 2,400,000 shares on 4-year vesting and a 1-year cliff leaves at month 30. How many shares are vested?", options: ["1,500,000", "600,000", "2,400,000", "0"], answer: 0, explain: "2,400,000 × 30 ÷ 48 = 1,500,000." },
        { q: "Why do VC-backed startups usually use a corporation/company rather than a partnership?", options: ["Corporations pay no tax", "Partnerships are illegal", "Corporations never need lawyers", "Corporations are built to issue shares, preferred stock and options to investors and employees"], answer: 3, explain: "Share structures make equity investment and option pools straightforward." },
        { q: "What does an IP assignment clause in a founder agreement ensure?", options: ["Founders own their code personally", "The company owns IP that founders create for it", "Investors own all IP", "Nobody owns the IP"], answer: 1, explain: "Investors will check that the company — not individuals — owns its core IP." }
      ],
      challenge: {
        title: "Set up three co-founders properly",
        prompt: `Asha (CEO, full-time, came up with the idea), Rohit (CTO, full-time, will build the product) and Meera (part-time adviser on sales for the first 6 months, then may join) want to incorporate and raise a pre-seed round in 4 months. Propose entity, equity split logic, vesting and key founder-agreement clauses.`,
        hints: ["Should a part-time person get the same deal as full-timers?", "Vesting and cliff for all.", "Reserve an option pool for future hires."],
        model: `<p><b>Entity:</b> a company/corporation in the jurisdiction their target investors prefer (e.g. a private limited company locally, or a Delaware C-corp if raising mainly from US investors — confirm with a lawyer and tax adviser).</p><p><b>Equity (illustrative):</b> Asha 45%, Rohit 45%, option pool 10% reserved. Meera is not yet a founder: offer her an <b>advisor grant</b> (e.g. 0.5–1%) vesting monthly over 2 years, with a right to convert to a founder-level package if she joins full-time.</p><p><b>Vesting:</b> 4 years, 1-year cliff for Asha and Rohit; consider "double-trigger" acceleration on acquisition plus termination.</p><p><b>Key clauses:</b> IP assignment (including pre-incorporation work); roles (Asha CEO, Rohit CTO), deadlock resolution (e.g. board or agreed mediator); buy-back of unvested shares at cost on departure; confidentiality; good-leaver/bad-leaver terms; dispute resolution forum.</p><p><b>Before fundraising:</b> clean cap table, signed contractor IP agreements, board of two founders with room for an investor seat.</p>`
      },
      takeaways: [
        "Pick an entity that fits how you will raise money.",
        "Every founder vests — no exceptions.",
        "The company, not individuals, must own the IP.",
        "Founder agreements are cheapest before there's anything to fight over."
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "legal-2",
      title: "Intellectual property: protect your ideas",
      level: "Beginner",
      minutes: 13,
      hook: "Your brand, code and secret recipes can be worth more than every building and machine you own — if you protect them properly.",
      eli5: `Imagine you invent a new board game. The rules-machine you designed could be patented, the game's name and logo can be trademarked, the rulebook and artwork are copyrighted automatically, and your secret strategy for winning can stay a trade secret if you never tell anyone. Four different locks for four different treasures.`,
      blocks: [
        { type: "compare", title: "The four main types of IP", headers: ["", "Patent", "Trademark", "Copyright", "Trade secret"], rows: [
          ["Protects", "New, non-obvious inventions (products, processes)", "Brand identifiers: names, logos, slogans", "Original creative works: code, text, music, designs", "Valuable confidential info: recipes, algorithms, customer lists"],
          ["How you get it", "Apply and be examined; must disclose the invention", "Use, and stronger with registration", "Automatic on creation in most countries; registration helps enforcement", "Keep it secret with reasonable measures"],
          ["Duration", "Generally 20 years from filing", "Potentially forever if used and renewed", "Long — often author's life + 70 years in many countries", "As long as it stays secret"],
          ["Weakness", "Costly; public disclosure; limited time", "Doesn't protect the product itself", "Protects expression, not the idea", "Lost if leaked or independently discovered/reverse engineered"]
        ] },
        { type: "case", company: "Coca-Cola", year: "1886 onward", title: "The trade-secret formula", situation: `Coca-Cola's syrup formula could have been patented — but a patent would have expired after a limited term and required publishing the formula.`, decision: `The company kept the formula as a closely guarded trade secret with very limited access.`, outcome: `More than a century later, the formula remains secret and the mystique is part of the brand.`, lesson: `If something can't easily be reverse-engineered and you can keep it secret, a trade secret can outlast any patent.` },
        { type: "case", company: "Apple vs Samsung", year: "2011–2018", title: "Design patents and smartphone wars", situation: `Apple sued Samsung, alleging its Galaxy phones copied iPhone design and features.`, decision: `The dispute went through courts in many countries over several years, including a high-profile US jury verdict in Apple's favour in 2012.`, outcome: `After appeals and retrials, the companies settled the remaining US dispute in 2018. Results in other countries were mixed.`, lesson: `IP can be a powerful competitive weapon, but enforcement is slow, expensive and uncertain. Build moats beyond IP too.` },
        { type: "framework", name: "IP strategy for a startup", by: "Common practice", when: "Before launch and before fundraising due diligence.", steps: [
          { label: "1. Inventory", desc: "List your assets: brand names, code, designs, data, processes, algorithms." },
          { label: "2. Ownership", desc: "Confirm the company owns everything — signed IP assignments from founders, employees and contractors." },
          { label: "3. Protect the brand", desc: "Search for conflicts, then register key trademarks in your main markets and classes." },
          { label: "4. Decide patent vs secret", desc: "Patent what competitors could copy by looking at your product; keep secret what they can't see (e.g. backend algorithms)." },
          { label: "5. Check freedom to operate", desc: "Make sure you aren't infringing others' patents or trademarks, especially before big launches." },
          { label: "6. Watch open-source licences", desc: "Some licences (e.g. 'copyleft' like GPL) can require you to share your own code if you distribute it." }
        ] },
        { type: "flip", title: "Which IP protects it?", cards: [
          { front: "The Nike 'swoosh' logo", back: "Trademark." },
          { front: "A novel battery chemistry", back: "Patent (or trade secret if it can't be reverse-engineered)." },
          { front: "Your app's source code", back: "Copyright automatically; key algorithms may be trade secrets." },
          { front: "Your list of 5,000 enterprise customers and their pricing", back: "Trade secret — protect with access controls and NDAs." },
          { front: "Your company name", back: "Trademark (registering a company name with the government does not by itself give trademark rights)." }
        ] },
        { type: "callout", kind: "insight", title: "AI and IP in 2025–2026", html: `<p>Generative AI has raised open questions: whether training on copyrighted material is lawful, and whether AI-generated output can be protected. Several authorities, including the US Copyright Office, have said works need meaningful human authorship to be copyrighted. Courts in several countries are still deciding major cases. <b>Practical step:</b> keep records of human contribution, and check the terms of the AI tools you use.</p>` },
        { type: "checklist", title: "IP due diligence before a funding round", items: [
          "All founders, employees and contractors have signed IP assignment agreements",
          "Core trademarks searched and registered (or filed) in key markets",
          "Open-source components listed with licences checked",
          "Confidential information protected by NDAs and access controls",
          "No known infringement claims or disputes outstanding"
        ] }
      ],
      terms: [
        { term: "Patent", def: "A time-limited exclusive right to an invention, granted in exchange for publicly disclosing it." },
        { term: "Trademark", def: "A sign (name, logo, slogan) that identifies the source of goods or services." },
        { term: "Copyright", def: "Rights in original creative expression such as text, code, art and music." },
        { term: "Trade secret", def: "Valuable business information protected by keeping it confidential." },
        { term: "NDA", def: "Non-disclosure agreement — a contract to keep shared information confidential." },
        { term: "Freedom to operate", def: "An analysis of whether your product might infringe others' IP rights." },
        { term: "Copyleft licence", def: "An open-source licence that requires derivative works to be shared under the same terms." }
      ],
      quiz: [
        { q: "Which type of IP is lost if the information becomes public?", options: ["Patent", "Trademark", "Trade secret", "Copyright"], answer: 2, explain: "Trade secrets exist only while secret." },
        { q: "Why might a company choose a trade secret over a patent?", options: ["Patents protect forever", "Trade secrets are registered by the government", "Trade secrets stop independent invention", "Patents require public disclosure and expire, while a well-kept secret can last indefinitely"], answer: 3, explain: "Patents trade disclosure for a limited monopoly." },
        { q: "Your startup's name and logo are best protected by…", options: ["Trademark", "Patent", "Copyright only", "NDA"], answer: 0, explain: "Trademarks protect brand identifiers." },
        { q: "A contractor wrote your core code but never signed an IP assignment. The main risk?", options: ["None — paying for work means you own it everywhere", "The contractor may own the copyright, a problem in investor due diligence", "The code becomes public domain", "The code is automatically patented"], answer: 1, explain: "In many jurisdictions copyright stays with the creator unless assigned in writing." },
        { q: "Copyright protects…", options: ["Ideas", "Facts", "Business methods", "The specific expression of an idea"], answer: 3, explain: "Copyright covers expression, not the underlying idea." }
      ],
      challenge: {
        title: "Build an IP plan",
        prompt: `A food-tech startup has: (1) a brand name and logo, (2) a unique plant-based protein extraction process, (3) a recipe-recommendation app, (4) supplier price lists. It has a budget of about $25,000 for IP this year and plans to launch in India and the US. Recommend how to protect each asset.`,
        hints: ["Can competitors see the extraction process from the product?", "Trademarks are cheap relative to patents.", "Don't forget ownership/assignments."],
        model: `<ol><li><b>Brand:</b> clearance search, then file trademarks in India and the US for the core classes (food products, software/app). Relatively low cost; do this first.</li><li><b>Extraction process:</b> if it can't be reverse-engineered from the end product, consider a <b>trade secret</b> (restricted access, NDAs, need-to-know, logging). If it's visible or likely to be independently invented soon, file a <b>provisional/priority patent application</b> to secure a date, then decide on full filings. Most of the budget goes here if patenting.</li><li><b>App:</b> copyright arises automatically; ensure every developer has signed IP assignments; audit open-source licences.</li><li><b>Supplier price lists:</b> trade secret — access controls, confidentiality clauses in employment contracts.</li></ol><p><b>Budget split (illustrative):</b> trademarks ~15–20%, patent work ~60–70%, contracts/assignments and audits ~15–20%. Confirm costs with an IP attorney in each country.</p>`
      },
      takeaways: [
        "Four tools: patents (inventions), trademarks (brands), copyright (expression), trade secrets (confidential know-how).",
        "Ownership first — get signed IP assignments from everyone.",
        "Patent what can be copied by inspection; keep secret what can't.",
        "IP enforcement is slow and costly — combine it with other moats."
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "legal-3",
      title: "Contracts and employment law basics",
      level: "Intermediate",
      minutes: 15,
      hook: "A contract is a risk-allocation machine — read the clauses that decide who pays when things go wrong.",
      eli5: `When you lend your bicycle to a friend, you might agree: "Bring it back by Sunday, and if you break it, you fix it." That's a contract! Business contracts just write these promises down carefully, including what happens if someone breaks a promise.`,
      blocks: [
        { type: "framework", name: "The clauses that matter most in a commercial contract", by: "Common commercial practice", when: "Any customer, supplier, partnership or software agreement.", steps: [
          { label: "Scope and deliverables", desc: "Exactly what is being provided, to what standard, by when. Vague scope is the top source of disputes." },
          { label: "Payment terms", desc: "Price, invoicing, due dates (e.g. net 30), late fees, currency, price changes." },
          { label: "Term and termination", desc: "How long it lasts, renewal, and how either side can exit (for convenience or for breach, with notice)." },
          { label: "Limitation of liability", desc: "Caps how much each side can owe if things go wrong, often a multiple of fees paid; excludes indirect losses." },
          { label: "Indemnities", desc: "One side promises to cover specific losses of the other (e.g. third-party IP claims)." },
          { label: "Warranties", desc: "Promises about quality or facts (e.g. the software will perform materially as described)." },
          { label: "Confidentiality, IP and data", desc: "Who owns what is created; how confidential info and personal data are handled." },
          { label: "Governing law and disputes", desc: "Which country's law applies and whether disputes go to courts or arbitration." }
        ] },
        { type: "formula", name: "Liability cap exposure", expr: "Maximum exposure ≈ Cap multiple × Fees in cap period (plus any uncapped carve-outs)", explain: "Most B2B contracts cap liability at, say, 12 months of fees. Carve-outs (often data breaches, IP indemnities, gross negligence, confidentiality) may be uncapped or have a higher 'super-cap'.", example: "A $200,000-per-year SaaS contract with a cap of 1× annual fees limits ordinary exposure to $200,000. If data-breach losses carry a super-cap of 3×, exposure for a breach could reach $600,000 — check your cyber insurance covers that." },
        { type: "compare", title: "Employee vs independent contractor (general tests)", headers: ["", "Employee", "Contractor"], rows: [
          ["Control", "Company controls how, when and where work is done", "Contractor controls methods; delivers a result"],
          ["Integration", "Part of the organisation; uses company tools", "Runs own business, has other clients"],
          ["Benefits and taxes", "Employer handles payroll taxes, statutory benefits, leave", "Contractor handles own taxes and benefits"],
          ["Protection", "Employment protections (minimum wage, unfair dismissal, etc., depending on country)", "Fewer statutory protections"],
          ["Risk of misclassification", "—", "Back taxes, penalties and claims if a 'contractor' is really an employee"]
        ] },
        { type: "case", company: "Uber", year: "2016–2021", title: "Are drivers workers?", situation: `Uber treated its UK drivers as self-employed contractors. Drivers argued they were 'workers', entitled to minimum wage and holiday pay.`, decision: `The case went through UK employment tribunals and appeals up to the UK Supreme Court.`, outcome: `In 2021 the Supreme Court ruled the drivers were workers, pointing to Uber's control over pricing, contract terms and ratings. Uber then introduced minimum earnings guarantees and holiday pay for UK drivers.`, lesson: `Labels in a contract don't decide status; the reality of control does. Gig-economy models must be designed around local employment law.` },
        { type: "checklist", title: "Employment law basics before your first hires", items: [
          "Written employment contracts or offer letters with role, pay, notice and IP/confidentiality",
          "Payroll registration and statutory contributions in each country you hire",
          "Anti-discrimination and anti-harassment policy with a reporting channel",
          "Clear contractor vs employee classification, reviewed by a lawyer",
          "Employee handbook covering leave, conduct and data use",
          "Lawful, documented process for performance management and terminations",
          "If hiring abroad without an entity, consider an Employer of Record (EOR)"
        ] },
        { type: "scenario", prompt: "A large enterprise customer sends you their standard contract with unlimited liability for your startup and payment in 120 days. The deal is worth $150,000 a year. What do you do?", options: [
          { text: "Sign immediately — big logos matter more than terms.", feedback: "Unlimited liability could bankrupt the company over one incident, and 120-day payment strains cash.", good: false },
          { text: "Negotiate: propose a liability cap of 12 months' fees with a modest super-cap for data breaches, and payment at net 45–60.", feedback: "Good. These are standard, reasonable asks; large customers often accept them for vendors.", good: true },
          { text: "Refuse to negotiate and walk away.", feedback: "Walking away too early loses a valuable customer; most terms are negotiable.", good: false }
        ] },
        { type: "callout", kind: "tip", title: "Contract hygiene", html: `<p>Keep a <b>contract register</b>: counterparty, value, renewal date, notice period, liability cap, special obligations. Many companies lose money through auto-renewals they forgot or obligations nobody tracked. Contract-management and AI review tools can flag unusual clauses — but a human should approve material terms.</p>` }
      ],
      terms: [
        { term: "Limitation of liability", def: "A clause capping the amount one party can be required to pay the other for losses." },
        { term: "Indemnity", def: "A promise to compensate the other party for specific losses, often from third-party claims." },
        { term: "Warranty", def: "A contractual promise that something is true or will perform as described." },
        { term: "Termination for convenience", def: "A right to end a contract without needing a reason, usually with notice." },
        { term: "Governing law", def: "The legal system that will be used to interpret a contract." },
        { term: "Misclassification", def: "Treating someone as a contractor when the law sees them as an employee or worker." },
        { term: "Employer of Record (EOR)", def: "A third party that legally employs staff on your behalf in a country where you have no entity." }
      ],
      quiz: [
        { q: "Your contract caps liability at 12 months' fees on a $50,000/month deal. Ordinary maximum exposure?", options: ["$50,000", "$1,200,000", "$600,000", "Unlimited"], answer: 2, explain: "12 × $50,000 = $600,000." },
        { q: "What most decides whether someone is an employee or contractor?", options: ["The real degree of control and integration in the work", "The job title in the contract", "Whether they invoice monthly", "Their age"], answer: 0, explain: "Courts look at substance, as in the UK Uber case." },
        { q: "An indemnity clause typically…", options: ["Sets the price", "Ends the contract", "Makes one party cover specified losses of the other", "Chooses the court"], answer: 2, explain: "Indemnities allocate specific risks, such as IP infringement claims." },
        { q: "The most common source of contract disputes is…", options: ["Vague scope and deliverables", "Governing law", "Font size", "Signature colour"], answer: 0, explain: "Unclear expectations about what's delivered cause most fights." }
      ],
      challenge: {
        title: "Mark up a supplier contract",
        prompt: `You're COO of a D2C brand. A packaging supplier's contract says: 3-year term, auto-renews for another 3 years unless cancelled 180 days before expiry; minimum order of 500,000 units a year (you used 300,000 last year); supplier liability capped at $1,000; you indemnify supplier for all claims of any kind; disputes in the supplier's home courts abroad. List your top changes and why.`,
        hints: ["Which clauses shift too much risk to you?", "Think about volume commitment vs actual use.", "Balance: what might you concede?"],
        model: `<ol><li><b>Term and renewal:</b> 1-year initial term, renewals of 1 year, notice of 60–90 days. Add a calendar reminder in the contract register.</li><li><b>Minimum volume:</b> reduce to around 300,000 (last year's use) or replace with a non-binding forecast plus tiered pricing.</li><li><b>Supplier liability cap:</b> $1,000 is far too low — ask for 12 months of fees, with uncapped or super-capped liability for defective packaging causing product damage or recalls.</li><li><b>Indemnity:</b> make it mutual and limited to each party's own negligence, breach or IP infringement — not "all claims of any kind".</li><li><b>Disputes:</b> neutral governing law and arbitration in a neutral venue, or your home jurisdiction.</li><li><b>Add:</b> quality specifications and acceptance testing, delivery SLAs with credits, termination for repeated breach.</li></ol><p><b>Possible concession:</b> accept a modest minimum volume in exchange for better price and stronger quality terms.</p>`
      },
      takeaways: [
        "Read scope, payment, termination, liability, indemnity and governing law first.",
        "Liability caps define your worst case — know the number.",
        "Employment status depends on reality, not labels.",
        "Track every contract's renewal and obligations in a register."
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "legal-4",
      title: "Data privacy: GDPR, DPDP and CCPA",
      level: "Intermediate",
      minutes: 14,
      hook: "Customer data is an asset — and a liability. Privacy law now reaches almost every business that has a website.",
      eli5: `When a friend tells you a secret, they trust you to keep it, use it only for what they intended, and not share it. Privacy laws make companies treat people's personal information the same way: ask properly, use it only for the agreed reason, protect it and delete it when done.`,
      blocks: [
        { type: "framework", name: "Core privacy principles (shared across most laws)", by: "Based on GDPR Article 5 and OECD privacy principles", when: "Designing any product or process that touches personal data.", steps: [
          { label: "Lawfulness and transparency", desc: "Have a valid legal basis (e.g. consent, contract, legitimate interests) and tell people clearly what you do." },
          { label: "Purpose limitation", desc: "Use data only for the purposes you stated." },
          { label: "Data minimisation", desc: "Collect only what you actually need." },
          { label: "Accuracy", desc: "Keep data correct and up to date." },
          { label: "Storage limitation", desc: "Delete or anonymise data when you no longer need it." },
          { label: "Security", desc: "Protect data with appropriate technical and organisational measures; notify breaches as the law requires." },
          { label: "Accountability", desc: "Be able to prove compliance — records, policies, assessments, training." }
        ] },
        { type: "compare", title: "Three major privacy laws at a glance (high level)", headers: ["", "GDPR (EU/EEA)", "DPDP Act (India)", "CCPA/CPRA (California)"], rows: [
          ["In force", "2018", "Act passed 2023; implementing rules notified 2025, phased in", "CCPA 2020; amended by CPRA from 2023"],
          ["Who it covers", "Organisations in the EU, and those outside targeting or monitoring people in the EU", "Processing of digital personal data in India, and outside India if offering goods/services to people in India", "For-profit businesses meeting size/data thresholds dealing with California residents"],
          ["Key rights", "Access, correction, erasure, portability, objection", "Access, correction, erasure, grievance redress, nominate a representative", "Know, delete, correct, opt out of sale/sharing"],
          ["Notable features", "Several legal bases; Data Protection Officer in some cases; breach notification within 72 hours to regulators", "Consent-centred with 'consent managers'; obligations for 'Significant Data Fiduciaries'; Data Protection Board", "Focus on selling/sharing data; 'Do Not Sell or Share' link"],
          ["Penalties", "Up to €20M or 4% of global annual turnover, whichever is higher", "Up to ₹250 crore per instance for some breaches", "Per-violation fines; private right of action for certain data breaches"]
        ] },
        { type: "formula", name: "GDPR maximum fine", expr: "Max fine = higher of (€20 million, 4% of worldwide annual turnover)", explain: "This is the upper tier for serious infringements; a lower tier is €10M or 2%. Actual fines depend on severity, intent, cooperation and other factors.", example: "A company with €2 billion turnover: 4% = €80M, which is higher than €20M, so the maximum is €80M. A company with €100M turnover: 4% = €4M, so the €20M figure is the maximum." },
        { type: "case", company: "Meta (Facebook)", year: "2023", title: "Record GDPR fine over data transfers", situation: `Meta transferred EU users' personal data to the US. After the EU's top court struck down the EU–US 'Privacy Shield' in 2020 (the Schrems II judgment), these transfers faced legal challenge.`, decision: `Ireland's Data Protection Commission, following an EU-level binding decision, ruled the transfers unlawful.`, outcome: `In 2023 Meta was fined €1.2 billion — the largest GDPR fine to date at that time — and ordered to bring transfers into compliance. A new EU–US Data Privacy Framework was adopted later in 2023.`, lesson: `Cross-border data flows are a board-level risk. Know where your data goes and on what legal basis.` },
        { type: "checklist", title: "Privacy starter kit for a startup", items: [
          "Map what personal data you collect, why, where it's stored and who you share it with (data map)",
          "Publish a clear privacy notice",
          "Get valid consent where required; make withdrawal easy",
          "Sign data processing agreements with vendors (cloud, email, analytics)",
          "Set retention periods and delete data on schedule",
          "Encrypt sensitive data; use access controls and logging",
          "Have a breach response plan with legal notification timelines",
          "Run a privacy impact assessment for risky new features (e.g. AI profiling, children's data)"
        ] },
        { type: "scenario", prompt: "Your marketing team wants to upload your entire customer email list to an ad platform for targeting, and also to a new AI tool to 'generate insights'. What's the right move?", options: [
          { text: "Do it — it's our data.", feedback: "Personal data belongs to the individuals in an important sense; you need a lawful basis and must respect your privacy notice.", good: false },
          { text: "Check your privacy notice and legal basis, sign a data processing agreement with the vendors, minimise fields (e.g. hashed emails only), honour opt-outs and do a quick risk assessment for the AI tool.", feedback: "Correct — purpose limitation, minimisation and vendor contracts are key.", good: true },
          { text: "Never use customer data for marketing.", feedback: "Too restrictive; marketing can be lawful when done properly.", good: false }
        ] },
        { type: "callout", kind: "insight", title: "Privacy as a feature", html: `<p>Apple has made privacy a central marketing message, for example with App Tracking Transparency (2021), which requires apps to ask permission before tracking users across other apps. Strong privacy can build trust and differentiate a brand.</p>` }
      ],
      terms: [
        { term: "Personal data", def: "Any information relating to an identifiable person — name, email, location, device ID and more." },
        { term: "Data controller / Data fiduciary", def: "The organisation that decides why and how personal data is processed (GDPR uses 'controller', India's DPDP Act 'data fiduciary')." },
        { term: "Data processor", def: "A vendor that processes personal data on behalf of a controller, like a cloud provider." },
        { term: "Lawful basis", def: "A legally recognised reason for processing personal data, such as consent or contract." },
        { term: "Data minimisation", def: "Collecting and keeping only the personal data you truly need." },
        { term: "DPA", def: "Data processing agreement — a contract setting rules for a vendor processing personal data." },
        { term: "Privacy impact assessment", def: "A structured review of privacy risks before launching a risky data use." }
      ],
      quiz: [
        { q: "A company has €1.5 billion global turnover. Maximum upper-tier GDPR fine?", options: ["€20 million", "€15 million", "€1.5 billion", "€60 million"], answer: 3, explain: "4% of €1.5B = €60M, which exceeds €20M." },
        { q: "Which principle says 'collect only what you need'?", options: ["Accuracy", "Data minimisation", "Accountability", "Transparency"], answer: 1, explain: "Minimisation limits risk and is a core requirement." },
        { q: "GDPR can apply to a company with no EU office if it…", options: ["Never has EU users", "Uses US servers", "Offers goods or services to, or monitors, people in the EU", "Has fewer than 10 staff"], answer: 2, explain: "GDPR has extraterritorial reach." },
        { q: "What was the core issue in Meta's 2023 €1.2B GDPR fine?", options: ["Cookie banners", "Children's ads", "Employee monitoring", "Transfers of EU users' data to the US"], answer: 3, explain: "Cross-border transfers after Schrems II." },
        { q: "Under India's DPDP Act, the organisation that determines the purpose of processing is called a…", options: ["Data fiduciary", "Data principal", "Consent manager", "Data Protection Board"], answer: 0, explain: "The data principal is the individual; the data fiduciary decides purposes and means." }
      ],
      challenge: {
        title: "Privacy plan for a health app",
        prompt: `A wellness app with 400,000 users in India, the EU and California collects names, emails, sleep data, heart-rate data from wearables and in-app chat with coaches. It wants to train an AI model on user data and share anonymised insights with insurers. Outline the top privacy risks and a 60-day compliance plan.`,
        hints: ["Health data is sensitive/special-category under GDPR.", "Is 'anonymised' really anonymous?", "Consent, minimisation, DPAs, retention, security."],
        model: `<p><b>Top risks:</b> (1) health data is <b>special-category</b> under GDPR, needing explicit consent or another narrow basis; (2) using data to train AI may be a new purpose not covered by the original notice; (3) "anonymised" wearable data can often be re-identified — sharing with insurers is high-risk and reputationally sensitive; (4) cross-border transfers; (5) chat logs with coaches contain very sensitive content.</p><p><b>60-day plan:</b></p><ol><li><b>Weeks 1–2:</b> data map; appoint a privacy lead/DPO; review all vendor DPAs.</li><li><b>Weeks 2–4:</b> privacy impact assessment on AI training and insurer sharing; update privacy notices; build granular, opt-in consents (separate toggles for AI training and data sharing).</li><li><b>Weeks 3–6:</b> minimisation — pseudonymise training data, exclude chat content by default, set retention (e.g. delete raw heart-rate data after a defined period).</li><li><b>Weeks 4–8:</b> security — encryption, access logs, breach response plan with 72-hour GDPR notification readiness; mechanisms for EU transfers; California "Do Not Sell or Share" link; DPDP grievance process.</li></ol><p><b>Recommendation:</b> pause insurer data sharing until a legal review and robust anonymisation testing are complete; the trust risk outweighs the revenue at this stage.</p>`
      },
      takeaways: [
        "Privacy principles are similar everywhere: lawful, limited, minimal, secure, accountable.",
        "GDPR fines can reach 4% of global turnover — it's a board issue.",
        "Map your data before anything else.",
        "AI training and data sharing are new purposes — get fresh, clear consent where needed."
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "legal-5",
      title: "Corporate governance, boards and compliance",
      level: "Advanced",
      minutes: 16,
      hook: "Governance failures rarely start with villains — they start with boards that don't ask hard questions.",
      eli5: `In a school, the principal runs things day to day, but a school board checks the principal is doing a good job, spending money wisely and following the rules. In a company, the CEO is the principal and the board of directors is the school board — there to guide, question and protect the owners.`,
      blocks: [
        { type: "framework", name: "Fiduciary duties of directors", by: "Common-law principles, codified in many countries' company laws", when: "Every board decision.", steps: [
          { label: "Duty of care", desc: "Make informed decisions: read the materials, ask questions, seek expert advice when needed." },
          { label: "Duty of loyalty", desc: "Act in the company's interest, not your own; disclose and avoid conflicts of interest." },
          { label: "Duty of good faith / oversight", desc: "Make sure systems exist to monitor key risks and compliance, and act on red flags." },
          { label: "Duty to act within powers", desc: "Follow the company's constitution and the law." }
        ] },
        { type: "compare", title: "Board composition by stage", headers: ["", "Seed / Series A", "Growth stage", "Listed company"], rows: [
          ["Typical size", "3 (e.g. 2 founders + 1 investor)", "5–7", "8–12+"],
          ["Independents", "Optional", "1–2 recommended", "Often a majority, depending on listing rules"],
          ["Committees", "None", "Audit, maybe compensation", "Audit, Nomination, Remuneration/Compensation, often Risk"],
          ["Focus", "Strategy, hiring, fundraising", "Scaling, controls, CEO performance", "Oversight, shareholder value, compliance, succession"]
        ] },
        { type: "case", company: "Theranos", year: "2003–2018", title: "A prestigious board that couldn't oversee", situation: `Theranos claimed its device could run many tests from a finger-prick of blood. Its board included famous former statesmen and military leaders but few people with deep laboratory or medical-device expertise.`, decision: `The board relied heavily on the founder's claims; the founder held voting control.`, outcome: `Investigative reporting by The Wall Street Journal (from 2015) and regulators revealed the technology did not work as claimed. The company collapsed, and founder Elizabeth Holmes was convicted of fraud in 2022.`, lesson: `Boards need relevant expertise, independence and real information rights. Famous names are not oversight.` },
        { type: "case", company: "Uber", year: "2017", title: "Governance reset", situation: `Uber faced a series of crises in 2017: allegations of sexual harassment and toxic culture, a lawsuit by Waymo over trade secrets, and investigations into its practices.`, decision: `The board commissioned an investigation led by former US Attorney General Eric Holder, which recommended governance reforms. Investors pressed founder-CEO Travis Kalanick to resign, which he did in June 2017.`, outcome: `Dara Khosrowshahi became CEO. Uber added independent directors, an independent chair and moved toward one-share-one-vote before its 2019 IPO.`, lesson: `Founder control and weak checks can tolerate culture and compliance risks until they become existential.` },
        { type: "callout", kind: "warning", title: "Anti-bribery: zero tolerance", html: `<p>Laws such as the US <b>Foreign Corrupt Practices Act (FCPA)</b> and the <b>UK Bribery Act 2010</b> make it a serious crime to bribe officials — and the UK Act also covers private-sector bribery and a company's failure to prevent bribery. Liability can extend to bribes paid by agents or distributors.</p><p><b>Siemens</b> paid one of the largest anti-corruption settlements in history (over a billion dollars combined with US and German authorities, 2008) after investigators found systematic bribery, and then rebuilt its compliance programme.</p>` },
        { type: "checklist", title: "A basic compliance programme", items: [
          "Code of conduct, signed by all staff annually",
          "Anti-bribery policy: gifts, hospitality and facilitation-payment rules",
          "Third-party due diligence on agents, distributors and resellers",
          "Whistleblower hotline with protection from retaliation",
          "Conflict-of-interest disclosures for directors and senior staff",
          "Regular training and risk-based audits",
          "Board audit committee oversight of compliance reports"
        ] },
        { type: "flip", title: "Governance quick checks", cards: [
          { front: "What is a related-party transaction?", back: "A deal between the company and an insider (e.g. a director's other company). Must be disclosed, approved by disinterested directors and on fair terms." },
          { front: "Why separate Chair and CEO?", back: "To reduce concentration of power and strengthen the board's ability to oversee the CEO." },
          { front: "What does an audit committee do?", back: "Oversees financial reporting, internal controls, external auditors and often compliance." },
          { front: "Dual-class shares — the trade-off?", back: "They let founders keep control and long-term focus, but weaken shareholders' ability to hold them accountable." }
        ] },
        { type: "scenario", prompt: "You're an independent director. The CEO proposes signing a large office lease with a company owned by her spouse at a rate she says is 'market'. What do you do?", options: [
          { text: "Approve — the CEO has been honest so far.", feedback: "Trust is not a process. Related-party transactions need independent review.", good: false },
          { text: "Require full disclosure, the CEO's recusal, an independent market rent assessment and approval by disinterested directors, recorded in minutes.", feedback: "Correct — this is how a duty of loyalty conflict is properly handled.", good: true },
          { text: "Leak it to the press.", feedback: "Breaches confidentiality and skips proper board process.", good: false }
        ] }
      ],
      terms: [
        { term: "Corporate governance", def: "The system of rules, practices and checks by which a company is directed and controlled." },
        { term: "Fiduciary duty", def: "A legal duty to act in another's best interest — directors owe it to the company (and in effect its shareholders)." },
        { term: "Independent director", def: "A board member without material ties to management or major shareholders." },
        { term: "Shareholder rights", def: "Rights such as voting on directors and major deals, receiving information and dividends, and suing for breaches in some cases." },
        { term: "FCPA", def: "US law prohibiting bribery of foreign officials and requiring accurate books and records for listed companies." },
        { term: "Related-party transaction", def: "A transaction between a company and its insiders or their affiliates." },
        { term: "Whistleblower", def: "A person who reports wrongdoing inside an organisation." }
      ],
      quiz: [
        { q: "A director reads board papers carefully and asks for an expert opinion before a major acquisition. Which duty is she fulfilling?", options: ["Duty of loyalty", "Duty of care", "Duty of confidentiality only", "No duty"], answer: 1, explain: "Being informed is the core of the duty of care." },
        { q: "What was a key governance weakness at Theranos?", options: ["Too many lab scientists on the board", "Too many independent auditors", "Being publicly listed", "Lack of relevant expertise and dependence on the founder's claims"], answer: 3, explain: "The board lacked domain expertise and real oversight." },
        { q: "Under anti-bribery laws, a company can be liable for bribes paid by…", options: ["Only its CEO", "Nobody outside head office", "Its agents, distributors and other third parties acting for it", "Competitors"], answer: 2, explain: "Third-party bribery is a major source of liability, hence due diligence." },
        { q: "Which is the best way to handle a director's conflict of interest?", options: ["Disclose, recuse and have disinterested directors decide", "Keep it quiet", "Let the conflicted director decide", "Ask employees to vote"], answer: 0, explain: "Disclosure and recusal protect the decision's integrity." },
        { q: "After 2017, Uber's governance reforms included…", options: ["Giving the founder more votes", "Removing the board", "Adding independent directors and an independent chair", "Going private"], answer: 2, explain: "Independence strengthened oversight before the 2019 IPO." }
      ],
      challenge: {
        title: "Fix the board",
        prompt: `A Series C healthtech (valuation around $600M, 400 staff, entering hospitals in three countries) has a board of 4: two founders (CEO controls 55% of votes via super-voting shares) and two VC partners. No independent directors, no committees. A whistleblower email alleges sales staff gave expensive gifts to hospital procurement officials. Recommend governance changes and how to handle the allegation.`,
        hints: ["Separate the immediate investigation from the structural fixes.", "Hospital officials may be public officials.", "Committees, independents, compliance programme."],
        model: `<p><b>Immediate (week 1–4):</b></p><ul><li>Board forms a special committee of non-executive directors (initially the two VCs, plus an independent as soon as possible) to oversee an <b>independent investigation by outside counsel</b>; protect the whistleblower; preserve documents.</li><li>Many hospital procurement staff are public officials — potential FCPA/local anti-corruption exposure. Counsel advises on self-reporting decisions.</li><li>Suspend the gifts practice immediately; interim gifts-and-hospitality policy.</li></ul><p><b>Structural (next 6 months):</b></p><ul><li>Expand board to 6–7 with <b>2 independents</b>: one with audit/finance expertise (to chair an <b>audit committee</b>) and one with healthcare regulatory expertise.</li><li>Create audit and compensation committees; consider an independent chair or lead independent director given the CEO's voting control.</li><li>Hire a Chief Compliance Officer with a dotted line to the audit committee; build the compliance programme (code, training, third-party due diligence, hotline, audits).</li><li>Consider a sunset clause on super-voting shares before IPO.</li></ul><p><b>Why:</b> the company is moving into regulated, high-risk markets; governance must mature before a crisis or IPO forces it.</p>`
      },
      takeaways: [
        "Directors owe duties of care and loyalty — informed, conflict-free decisions.",
        "Boards need relevant expertise and independence, not just famous names.",
        "Bribery through third parties is still your company's bribery.",
        "Build governance before you need it — an IPO or crisis is too late."
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "legal-6",
      title: "Risk management, crisis response and ESG",
      level: "Advanced",
      minutes: 17,
      hook: "You can't avoid every risk — but you can decide in advance which ones you'll accept, which you'll reduce, and how you'll act when the worst happens.",
      eli5: `Before a school trip, a teacher thinks: what could go wrong? Someone gets lost (likely, not too bad — use name tags and a buddy system), the bus breaks down (unlikely, annoying — have a phone number ready), a serious injury (rare, very bad — bring a first-aid kit and a plan). That list is a risk register; the plan for the worst case is crisis management.`,
      blocks: [
        { type: "formula", name: "Risk score", expr: "Risk score = Likelihood (1–5) × Impact (1–5)", explain: "Rate each risk on how likely it is and how bad it would be. Scores of 15–25 are high (red), 8–14 medium (amber), 1–7 low (green). Use it to prioritise, not as precise science.", example: "Ransomware attack: likelihood 4, impact 5 → 20 (red, top priority). Key supplier fails: likelihood 2, impact 4 → 8 (amber). Office flood: likelihood 1, impact 3 → 3 (green). After adding offline backups and incident drills, ransomware impact may drop to 3 → residual score 12." },
        { type: "matrix", name: "Risk heat map (simplified)", xLabel: "Likelihood: low → high", yLabel: "Impact: low → high", cells: [
          { label: "Prepare (low likelihood, high impact)", desc: "Rare disasters: pandemics, major fraud, plant explosion. Insurance, business-continuity plans, crisis playbooks." },
          { label: "Act now (high likelihood, high impact)", desc: "Top priority: cyber attacks, key-customer concentration, regulatory breach. Reduce actively, assign owners, report to board." },
          { label: "Accept / monitor (low, low)", desc: "Minor, unlikely issues. Note them and review periodically." },
          { label: "Manage routinely (high likelihood, low impact)", desc: "Frequent small issues: minor errors, small stock-outs. Fix with processes and controls." }
        ] },
        { type: "framework", name: "Enterprise risk management cycle", by: "Inspired by COSO ERM (2017) and ISO 31000 (2018)", when: "Annually in depth, quarterly review, and whenever strategy changes.", steps: [
          { label: "1. Set risk appetite", desc: "The board decides how much risk the company is willing to take in pursuit of its goals (e.g. zero tolerance for safety and bribery, moderate for market experiments)." },
          { label: "2. Identify", desc: "Strategic, operational, financial, compliance, technology/cyber, people, reputational, climate risks." },
          { label: "3. Assess", desc: "Likelihood × impact, before (inherent) and after controls (residual)." },
          { label: "4. Respond", desc: "Avoid, reduce, transfer (insurance, contracts) or accept." },
          { label: "5. Monitor and report", desc: "Risk register with owners, key risk indicators and regular board/committee review." }
        ] },
        { type: "case", company: "Johnson & Johnson", year: "1982", title: "The Tylenol poisonings", situation: `Seven people in the Chicago area died after taking Tylenol capsules that had been laced with cyanide after leaving the factory. Tylenol was a leading painkiller brand.`, decision: `J&J put public safety first: it warned the public, stopped advertising, and recalled Tylenol capsules nationwide — on the order of 31 million bottles — at great cost. It cooperated openly with authorities and media.`, outcome: `J&J reintroduced Tylenol in tamper-resistant packaging, and the brand recovered much of its market share within about a year. The case became the classic example of crisis leadership; it also helped lead to tamper-evident packaging becoming standard.`, lesson: `In a crisis, act fast, put people first, be transparent and let your values guide costly decisions.` },
        { type: "case", company: "Boeing", year: "2018–2024", title: "737 MAX: when culture and oversight fail", situation: `Two 737 MAX crashes (Lion Air, 2018; Ethiopian Airlines, 2019) killed 346 people. Investigations pointed to the MCAS flight-control software, inadequate pilot information and weaknesses in certification oversight.`, decision: `The fleet was grounded worldwide for around 20 months. Boeing's initial communications were widely criticised as defensive. The CEO was replaced in late 2019.`, outcome: `Boeing faced enormous costs, legal settlements and lasting reputational damage. A door-plug blowout on an Alaska Airlines 737 MAX 9 in January 2024 renewed scrutiny of its quality and safety culture.`, lesson: `When cost and schedule pressure override safety culture, risk accumulates silently. Boards must oversee mission-critical risks directly.` },
        { type: "compare", title: "ESG and sustainability reporting landscape (high level)", headers: ["Framework", "What it is", "Who it affects"], rows: [
          ["ISSB (IFRS S1 and S2)", "Global baseline standards for sustainability and climate-related financial disclosures, issued 2023", "Adopted or being adopted by many jurisdictions"],
          ["EU CSRD / ESRS", "EU directive requiring detailed sustainability reporting with 'double materiality' (impact on the world and on the company)", "Large EU companies and some non-EU groups; scope and timing were reduced by EU simplification proposals in 2025"],
          ["India BRSR", "Business Responsibility and Sustainability Report required by SEBI", "Top listed companies in India, with assurance for key metrics phased in"],
          ["GHG Protocol", "Standard for measuring emissions: Scope 1 (direct), Scope 2 (purchased energy), Scope 3 (value chain)", "Used by most reporting frameworks"]
        ] },
        { type: "interactive", widget: "decision-matrix", title: "Prioritise risk responses", note: "List three risk-mitigation projects (e.g. backup data centre, supplier diversification, compliance training). Score each on risk reduction, cost, time to implement and regulatory importance. Which earns the budget first?" },
        { type: "checklist", title: "Crisis response playbook — first 24 hours", items: [
          "Activate a small crisis team: CEO, legal, communications, operations, HR",
          "Establish facts — what we know, what we don't, what we're doing",
          "Put people's safety first; stop the harm (recall, shutdown, isolate systems)",
          "Notify regulators, insurers and partners as legally required",
          "Issue an early holding statement: empathy, action, next update time",
          "Brief employees before or as the public hears",
          "Log every decision and its rationale",
          "Set a regular update rhythm and stick to it"
        ] }
      ],
      terms: [
        { term: "Enterprise risk management (ERM)", def: "A company-wide approach to identifying, assessing and managing risks in line with strategy." },
        { term: "Risk register", def: "A list of risks with likelihood, impact, owner, controls and actions." },
        { term: "Risk appetite", def: "The amount and type of risk an organisation is willing to accept to achieve its goals." },
        { term: "Residual risk", def: "The risk remaining after controls are in place." },
        { term: "Heat map", def: "A colour-coded grid plotting risks by likelihood and impact." },
        { term: "ESG", def: "Environmental, Social and Governance factors used to assess a company's sustainability and conduct." },
        { term: "Scope 3 emissions", def: "Indirect greenhouse-gas emissions across a company's value chain, such as suppliers and product use." },
        { term: "Double materiality", def: "Reporting both how sustainability issues affect the company and how the company affects people and the planet." }
      ],
      quiz: [
        { q: "A risk has likelihood 3 and impact 5. Its score and band?", options: ["15 — red", "8 — amber", "2 — green", "35 — red"], answer: 0, explain: "3 × 5 = 15, which is in the high band (15–25)." },
        { q: "Buying cyber insurance is which risk response?", options: ["Avoid", "Reduce", "Accept", "Transfer"], answer: 3, explain: "Insurance transfers financial impact to another party." },
        { q: "What made J&J's 1982 Tylenol response a model?", options: ["Denying responsibility", "Fast nationwide recall, transparency and putting public safety first", "Raising prices", "Waiting for regulators to act"], answer: 1, explain: "Speed, transparency and values-led action rebuilt trust." },
        { q: "Scope 2 emissions are…", options: ["Direct emissions from company vehicles", "All supplier emissions", "Emissions from purchased electricity, heat or steam", "Emissions from customers' use"], answer: 2, explain: "Scope 2 covers purchased energy." },
        { q: "Low likelihood but catastrophic impact risks are best handled by…", options: ["Ignoring them", "Daily process fixes", "Firing the risk owner", "Preparation: insurance, continuity plans and crisis playbooks"], answer: 3, explain: "You can't prevent all rare events; you can prepare." }
      ],
      challenge: {
        title: "Build a risk register",
        prompt: `You're the new COO of a $40M-revenue online electronics retailer. 70% of products come from one contract manufacturer in one country; all customer data sits on one cloud region; 35% of revenue comes from one marketplace platform; the company has had two minor data incidents this year; and a large retail customer now asks for Scope 1–3 emissions data. Build a top-5 risk register with scores, responses and owners.`,
        hints: ["Score likelihood × impact for each.", "Use avoid/reduce/transfer/accept.", "Name an owner and a key risk indicator (KRI)."],
        model: `<ol><li><b>Data breach / ransomware</b> — L4 × I5 = <b>20 (red)</b>. Reduce: MFA, offline backups, incident drills; Transfer: cyber insurance. Owner: CTO. KRI: incidents per quarter, patch time.</li><li><b>Supplier concentration (70% one manufacturer)</b> — L3 × I5 = <b>15 (red)</b>. Reduce: qualify a second supplier in another country for top SKUs; safety stock. Owner: COO. KRI: % volume from top supplier.</li><li><b>Marketplace dependence (35%)</b> — L3 × I4 = <b>12 (amber)</b>. Reduce: grow direct channel and email list; diversify marketplaces. Owner: CMO. KRI: % revenue by channel.</li><li><b>Loss of key customer over missing ESG data</b> — L3 × I3 = <b>9 (amber)</b>. Reduce: measure Scope 1–2 now with the GHG Protocol; estimate main Scope 3 categories with suppliers. Owner: CFO. KRI: data-request response time.</li><li><b>Single cloud region outage</b> — L2 × I4 = <b>8 (amber)</b>. Reduce: multi-zone or secondary-region failover; tested recovery plan. Owner: CTO. KRI: recovery-time test results.</li></ol><p><b>Governance:</b> present to the board with a stated risk appetite; review quarterly; top two red risks get funded mitigation in this quarter's plan.</p>`
      },
      takeaways: [
        "Score risks by likelihood × impact, then act on the red ones first.",
        "Responses: avoid, reduce, transfer or accept — explicitly.",
        "In a crisis: people first, act fast, be transparent, update on a rhythm.",
        "ESG reporting is becoming mandatory for many firms and their suppliers — start measuring early."
      ]
    }
  ]
});
