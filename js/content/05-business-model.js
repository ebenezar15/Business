/* MBA Studio — Track 5: Business Models & Business Engineering */
MBA.addTrack({
  id: "business-model",
  stage: 2,
  order: 5,
  title: "Business Models & Business Engineering",
  icon: "⚙️",
  color: "#ef4444",
  tagline: "Design how your business creates, delivers and captures value",
  summary: `A great product inside a bad business model still fails. After this track you will be able to map any business on one page, design a value proposition customers want, choose and combine model archetypes, check the unit economics, and engineer the whole business as a system — processes, feedback loops, flywheels, operating model, AI automation and built-in moats.`,
  outcomes: [
    "Map any company on the Business Model Canvas and spot its weak blocks",
    "Design a value proposition with the Value Proposition Canvas",
    "Compare 11+ business model archetypes and know when each works",
    "Calculate unit economics: contribution margin, LTV, CAC, payback",
    "Engineer a business as a system: value chain, processes, feedback loops, flywheels",
    "Design an operating model with automation/AI and moats built in"
  ],
  lessons: [
    /* ---------------------------------------------------------------- 1 */
    {
      id: "business-model-1",
      title: "What a business model is: the Business Model Canvas",
      level: "Beginner",
      minutes: 13,
      hook: "Two companies can sell almost the same product and one becomes a giant while the other goes bust — the difference is the business model.",
      eli5: `A business model is the recipe for how a business makes money. A pizza shop's recipe says: who eats the pizza, why they choose this shop, how the pizza reaches them, what it costs to make and how much people pay. If any ingredient in the recipe is wrong — too expensive, nobody nearby, no way to deliver — the whole dish fails, even if the pizza tastes great.`,
      blocks: [
        {
          type: "text",
          title: "Create, deliver, capture",
          html: `<p>A <b>business model</b> describes how an organisation <b>creates</b> value (solves a problem), <b>delivers</b> it (reaches customers) and <b>captures</b> value (earns more than it spends).</p>
<p>Many founders obsess over the product (create) and forget distribution (deliver) and pricing/cost (capture). <span class="hl">Innovation in the model itself</span> — not just the product — explains companies like IKEA, Netflix and Airbnb.</p>`
        },
        {
          type: "framework",
          name: "Business Model Canvas — 9 building blocks",
          by: "Alexander Osterwalder & Yves Pigneur, Business Model Generation (2010)",
          when: "To describe, design, compare or stress-test any business on a single page.",
          steps: [
            { label: "1. Customer segments", desc: "Who are we creating value for? Mass market, niche, multi-sided (e.g. riders AND drivers)." },
            { label: "2. Value propositions", desc: "What problem do we solve, what job do we get done, why us instead of alternatives?" },
            { label: "3. Channels", desc: "How do we reach, sell to and deliver to customers? Own stores, website, partners, app stores." },
            { label: "4. Customer relationships", desc: "Self-service, personal assistance, community, automated — and how we acquire and keep customers." },
            { label: "5. Revenue streams", desc: "What do customers pay for and how: one-off sale, subscription, usage fee, commission, licence, ads." },
            { label: "6. Key resources", desc: "The assets that make the model work: brand, data, patents, people, capital, physical assets." },
            { label: "7. Key activities", desc: "What we must do exceptionally well: production, problem-solving, running a platform." },
            { label: "8. Key partnerships", desc: "Suppliers and allies we rely on; what we outsource." },
            { label: "9. Cost structure", desc: "The main costs. Is the model cost-driven (lowest cost) or value-driven (premium)?" }
          ]
        },
        {
          type: "case",
          company: "IKEA",
          year: "1950s onward",
          title: "Business model innovation in furniture",
          situation: `Traditional furniture stores sold pre-assembled furniture, delivered it, and had high costs for transport, storage and showroom staff.`,
          decision: `IKEA redesigned the model: flat-pack furniture designed for cheap shipping, huge out-of-town stores where customers pick items from the warehouse themselves, transport them and assemble them at home.`,
          outcome: `The customer does part of the work (activities shift to the customer), cutting costs so IKEA can offer stylish furniture at low prices. It became the world's largest furniture retailer.`,
          lesson: `Changing WHO does WHICH activity in the canvas (key activities, channels, cost structure) can create a new model even with an ordinary product.`
        },
        {
          type: "interactive",
          widget: "bmc",
          title: "Build a canvas",
          note: "Pick a business you know (your local gym, Spotify, a coffee chain) and fill all 9 blocks. Then ask: which single block, if it broke, would kill the business?"
        },
        {
          type: "compare",
          title: "Same product, different models",
          headers: ["", "Blockbuster (stores)", "Netflix (DVD-by-mail, then streaming)"],
          rows: [
            ["Channel", "Physical stores", "Post, then internet"],
            ["Revenue", "Per-rental fees + late fees", "Monthly subscription, no late fees"],
            ["Key resource", "Store network & stock", "Recommendation data, then content & tech"],
            ["Cost structure", "Rent and store staff", "Postage then servers and content"],
            ["Outcome", "Filed for bankruptcy in 2010", "Became a global streaming leader"]
          ]
        },
        {
          type: "callout",
          kind: "tip",
          title: "How to use the canvas well",
          html: `<ul><li>Start with <b>customer segments</b> and <b>value propositions</b> — the right side drives the left side.</li>
<li>Use sticky notes: one idea per note, so you can move and test them.</li>
<li>Draw <b>several</b> alternative canvases for the same idea, then test the riskiest blocks.</li>
<li>Check fit: do revenue streams cover the cost structure created by key activities and resources?</li></ul>`
        },
        {
          type: "flip",
          title: "Which block is it?",
          cards: [
            { front: "Airbnb's hosts AND guests", back: "Customer segments (multi-sided)." },
            { front: "Spotify's music licences with labels", back: "Key partnerships (and a major part of cost structure)." },
            { front: "Coca-Cola's brand", back: "Key resource." },
            { front: "Amazon Prime's annual fee", back: "Revenue stream (subscription)." },
            { front: "Apple's App Store as a way to reach users", back: "Channel (for developers) and part of the value proposition for users." }
          ]
        }
      ],
      terms: [
        { term: "Business model", def: "How a company creates, delivers and captures value." },
        { term: "Business Model Canvas", def: "A one-page template with 9 blocks for describing and designing a business model." },
        { term: "Value proposition", def: "The bundle of benefits that makes a customer choose you over alternatives." },
        { term: "Revenue stream", def: "A way the business earns cash from a customer segment (sale, subscription, fee, etc.)." },
        { term: "Cost structure", def: "The most important costs incurred to operate the model." },
        { term: "Multi-sided model", def: "A business that serves two or more interdependent customer groups (e.g. buyers and sellers)." },
        { term: "Business model innovation", def: "Creating advantage by changing how value is created, delivered or captured, not just the product." }
      ],
      quiz: [
        { q: "A business model explains how a company…", options: ["Writes its marketing slogans", "Creates, delivers and captures value", "Hires its employees", "Pays taxes"], answer: 1, explain: "Create, deliver and capture value is the standard definition." },
        { q: "IKEA's flat-pack self-assembly mainly changed which canvas blocks?", options: ["Customer segments only", "Revenue streams only", "Key activities, channels and cost structure", "Key partnerships only"], answer: 2, explain: "Customers take over transport and assembly, lowering costs." },
        { q: "Which is a key resource for Coca-Cola?", options: ["Its brand", "Its customers", "Its price", "Its subscription"], answer: 0, explain: "The brand is a core intangible asset." },
        { q: "Where should you usually start filling the canvas?", options: ["Cost structure", "Key partnerships", "Key resources", "Customer segments and value proposition"], answer: 3, explain: "Who you serve and what you offer drive everything else." }
      ],
      challenge: {
        title: "Canvas a local business",
        prompt: `A neighbourhood bakery sells bread and cakes over the counter. Revenue is flat at about $20,000/month, with rent $4,000, staff $7,000 and ingredients ~$6,000. Fill in its Business Model Canvas, identify the weakest block, and propose ONE business model change (not a product change) that could raise profit.`,
        hints: ["Profit today ≈ $3,000/month — fragile.", "Think about revenue streams and channels.", "Subscriptions, wholesale and pre-orders change the model."],
        model: `<p><b>Canvas (short):</b> Segments — local families, office workers. Value prop — fresh, local bread. Channels — counter only. Relationships — personal, walk-in. Revenue — one-off sales. Resources — baker skill, oven, location. Activities — baking, selling. Partners — flour suppliers. Costs — rent, staff, ingredients (~$17k/month).</p>
<p><b>Weakest block:</b> revenue streams + channels — unpredictable walk-in sales, unsold stock waste, one location.</p>
<p><b>Change: a bread subscription plus B2B wholesale.</b> E.g. 150 households × $30/month bread subscription = $4,500/month of predictable revenue, baked to order (less waste). Supply 5 cafés at wholesale with spare oven capacity in early morning hours. Same product, same oven — but better utilisation, predictable demand and lower waste. Test first with a pre-order sign-up sheet at the counter (aim: 50 sign-ups in 2 weeks).</p>`
      },
      takeaways: [
        "A business model = how you create, deliver and capture value.",
        "The 9-block canvas puts the whole business on one page.",
        "Start with customers and value proposition; check costs vs revenues.",
        "Changing the model (who does what, how you charge) can beat changing the product."
      ]
    },

    /* ---------------------------------------------------------------- 2 */
    {
      id: "business-model-2",
      title: "The Value Proposition Canvas",
      level: "Beginner",
      minutes: 12,
      hook: "People do not buy a drill; they buy a hole in the wall — and really, a picture hanging in their home.",
      eli5: `When you choose a school bag, you are not really buying 'a bag'. You want to carry books without a sore back, look cool to friends and not lose your stuff. A good product designer lists all those wishes and worries first, then designs the bag to fix the worries and grant the wishes.`,
      blocks: [
        {
          type: "framework",
          name: "Value Proposition Canvas",
          by: "Alexander Osterwalder et al., Value Proposition Design (2014)",
          when: "To zoom into the 'customer segment' and 'value proposition' blocks and design a strong fit.",
          steps: [
            { label: "Customer jobs", desc: "What the customer is trying to get done: functional (commute to work), social (look professional), emotional (feel safe)." },
            { label: "Pains", desc: "Bad outcomes, obstacles and risks around the job: wasted time, high cost, fear of mistakes." },
            { label: "Gains", desc: "Outcomes and benefits the customer wants: savings, status, ease, delight." },
            { label: "Products & services", desc: "What you offer to help with the jobs." },
            { label: "Pain relievers", desc: "How exactly your offer removes or reduces specific pains." },
            { label: "Gain creators", desc: "How exactly your offer produces specific gains." },
            { label: "Fit", desc: "You have fit when your pain relievers and gain creators address the jobs, pains and gains that matter MOST to the customer." }
          ]
        },
        {
          type: "text",
          title: "Jobs-to-be-done in one paragraph",
          html: `<p>Clayton Christensen's <b>jobs-to-be-done</b> idea: customers "hire" products to make progress in a specific situation. His team's famous milkshake study found many morning milkshakes were bought by commuters who wanted something filling and slow to consume during a boring drive — competing not with other milkshakes, but with bananas, bagels and doughnuts.</p>
<p>Lesson: define competition by the <span class="hl">job</span>, not by product category.</p>`
        },
        {
          type: "case",
          company: "Nespresso",
          year: "1986 onward",
          title: "A value proposition around convenience and ritual",
          situation: `Making café-quality espresso at home required expensive machines and skill. Instant coffee was easy but tasted worse.`,
          decision: `Nestlé's Nespresso offered sealed single-serve capsules and simple machines, later adding a members' club, boutiques and a premium brand image.`,
          outcome: `Nespresso became one of Nestlé's major growth businesses. The value proposition relieved pains (mess, skill, inconsistency) and created gains (quality, speed, status).`,
          lesson: `Map pains and gains carefully; the winning offer often combines a functional benefit (consistent espresso) with emotional and social ones (indulgence, prestige).`
        },
        {
          type: "compare",
          title: "Weak vs strong value propositions",
          headers: ["", "Weak", "Strong"],
          rows: [
            ["Focus", "Features ('AI-powered, cloud-based')", "Outcome ('Close your books in 2 days, not 10')"],
            ["Customer", "Everyone", "A specific segment with a specific job"],
            ["Pains", "Generic", "The top 1–3 extreme pains"],
            ["Proof", "Claims", "Numbers, testimonials, guarantees"],
            ["Versus alternatives", "Not mentioned", "Clear why better than the current workaround"]
          ]
        },
        {
          type: "formula",
          name: "Value proposition statement",
          expr: "Our [product] helps [customer segment] who want to [job] by [reducing pain] and [creating gain], unlike [alternative].",
          explain: "A one-sentence test of whether your value proposition is clear. If you cannot fill every gap specifically, you do not have fit yet.",
          example: "Our invoicing app helps freelance designers who want to get paid on time by sending automatic reminders and accepting cards in one click, unlike spreadsheets and email chasing that leave them waiting about 45 days."
        },
        {
          type: "scenario",
          prompt: "Interviews with small restaurant owners show their biggest pain is staff no-shows on busy nights; your product is a beautiful online-menu builder. What do you do?",
          options: [
            { text: "Keep the menu builder and market it harder.", feedback: "Your offer does not address their top pain — poor fit, expensive marketing.", good: false },
            { text: "Rethink the offer: explore a shift-swapping/scheduling tool, or reframe your product around the jobs owners rank highest.", feedback: "Right. Fit means addressing the jobs and pains customers rank as most important.", good: true },
            { text: "Add 30 more features to the menu builder.", feedback: "More features rarely fix a mismatch between offer and the customer's top pains.", good: false }
          ]
        },
        {
          type: "checklist",
          title: "Value proposition checklist",
          items: [
            "Focuses on jobs, pains or gains many customers care about",
            "Addresses the most extreme pains, not trivial ones",
            "Beats the current workaround on at least one dimension by a lot",
            "Is hard to copy (or leverages something we uniquely have)",
            "Can be explained in one sentence and proven with evidence"
          ]
        }
      ],
      terms: [
        { term: "Customer job", def: "The task, problem or need a customer is trying to handle (functional, social or emotional)." },
        { term: "Pain", def: "Anything that annoys the customer before, during or after the job." },
        { term: "Gain", def: "An outcome or benefit the customer wants or would be delighted by." },
        { term: "Pain reliever", def: "A specific way your offer reduces a customer pain." },
        { term: "Gain creator", def: "A specific way your offer produces a customer gain." },
        { term: "Jobs-to-be-done", def: "Christensen's theory that customers 'hire' products to make progress in a situation." },
        { term: "Fit", def: "When your offer addresses the jobs, pains and gains that matter most to the customer." }
      ],
      quiz: [
        { q: "In the Value Proposition Canvas, 'feeling secure' is an example of…", options: ["A pain reliever", "A product", "An emotional job or gain", "A channel"], answer: 2, explain: "Emotional jobs and gains describe how the customer wants to feel." },
        { q: "In Christensen's milkshake study, the morning milkshake competed with…", options: ["Other milkshake brands only", "Bananas, bagels and other commute foods", "Coffee machines", "Restaurants"], answer: 1, explain: "Competition is defined by the job (a filling, boring-commute snack)." },
        { q: "Which is the strongest value proposition?", options: ["Cut month-end closing from 10 days to 2 for mid-size retailers", "AI-powered cloud accounting", "The best accounting tool", "Accounting for everyone"], answer: 0, explain: "It names an outcome, a segment and a measurable improvement." },
        { q: "You achieve 'fit' when…", options: ["You have many features", "Your price is lowest", "Investors like your idea", "Your offer addresses the customer's most important jobs, pains and gains"], answer: 3, explain: "Fit is about relevance to what matters most to the customer." }
      ],
      challenge: {
        title: "Write a value proposition canvas",
        prompt: `You are launching a service that delivers pre-portioned healthy lunches to software teams in offices (minimum 10 meals/day per office, $11 per meal). Fill in the customer profile (for the office manager AND the employee — two segments), map pain relievers/gain creators, and write the one-sentence value proposition for each.`,
        hints: ["The buyer (office manager) and the user (employee) have different jobs.", "Think about admin hassle, budget, perks, dietary needs."],
        model: `<p><b>Office manager</b> — Jobs: keep staff happy, run perks within budget. Pains: chasing orders, dietary complaints, invoices from many vendors. Gains: one invoice, positive feedback, predictable cost.<br>Pain relievers: one weekly order, single monthly invoice, auto dietary tagging. Gain creators: satisfaction report each month, budget cap per head.<br><i>VP:</i> "Our lunch service helps office managers give teams a healthy daily perk with one order and one invoice a month, unlike juggling delivery apps and expense claims."</p>
<p><b>Employee</b> — Jobs: eat well without losing time. Pains: 30-minute queues, unhealthy options, cost. Gains: tasty, healthy, social lunch.<br>Pain relievers: lunch arrives at 12:30, no queues; gain creators: rotating menu, nutrition info, eat together.<br><i>VP:</i> "Healthy, tasty lunch at your desk in zero minutes, unlike queues and greasy takeaway."</p>
<p><b>Model note:</b> at $11 × 10 meals × ~21 days ≈ $2,310/month per office — sell to the manager, design for the employee.</p>`
      },
      takeaways: [
        "Map customer jobs, pains and gains before designing the offer.",
        "Define competition by the job customers are hiring for.",
        "Strong value propositions promise specific, measurable outcomes for a specific segment.",
        "In B2B, buyers and users often have different jobs — design for both."
      ]
    },

    /* ---------------------------------------------------------------- 3 */
    {
      id: "business-model-3",
      title: "Business model archetypes",
      level: "Intermediate",
      minutes: 18,
      hook: "Gillette and Nespresso make much of their money not on the thing you notice but on what you keep buying afterwards.",
      eli5: `There are a few classic ways to make money, like recipes in a cookbook. You can sell something once (a bike), rent it monthly (a gym membership), take a small cut every time two people trade (a market stall owner), give something away free and sell extras (a free game with paid skins), or sell cheap printers and earn on the ink. Most big companies mix a few recipes together.`,
      blocks: [
        {
          type: "compare",
          title: "The main archetypes",
          headers: ["Model", "How money is made", "Famous example", "Watch out for"],
          rows: [
            ["Subscription", "Recurring fee for ongoing access", "Netflix, Amazon Prime", "Churn; must keep delivering value"],
            ["SaaS", "Subscription software, usually per seat or tier", "Salesforce, Microsoft 365", "High CAC upfront; needs low churn"],
            ["Usage-based", "Pay for what you consume", "AWS, Snowflake, Twilio, AI APIs", "Revenue less predictable; depends on customer growth"],
            ["Freemium", "Free tier, paid upgrades", "Spotify, Dropbox, Zoom", "Free users cost money; conversion often small"],
            ["Marketplace", "Commission (take rate) on transactions", "Airbnb, Etsy, Uber", "Chicken-and-egg; disintermediation"],
            ["Razor & blade", "Cheap/at-cost base product, profit on refills", "Gillette, printers, Nespresso", "Generic refills, regulation, patents expire"],
            ["Franchise", "Fees + royalties from independent operators", "McDonald's, Subway", "Brand control; franchisee profitability"],
            ["D2C", "Sell directly to consumers online, skipping retailers", "Warby Parker, Dollar Shave Club", "Rising ad costs make CAC hard"],
            ["Advertising", "Free to users; advertisers pay for attention", "Google, Meta", "Needs huge scale; privacy rules"],
            ["Licensing", "Others pay to use your IP", "Arm (chip designs), Disney characters", "Protecting IP; dependence on licensees"],
            ["Aggregator", "Own the user relationship; suppliers come to you", "Google Search, Netflix, Booking.com", "Regulation; supplier backlash"]
          ]
        },
        {
          type: "case",
          company: "Gillette",
          year: "Early 1900s onward",
          title: "The original razor-and-blades model",
          situation: `King C. Gillette's disposable safety-razor blades needed a handle to work. Each customer would need many blades over years.`,
          decision: `Over time Gillette priced handles attractively (sometimes giving them away through promotions) and earned recurring profit on proprietary replacement blades, protected by patents and brand.`,
          outcome: `The model became so famous it named a category. But in the 2010s subscription disruptors like Dollar Shave Club (acquired by Unilever in 2016) and Harry's attacked high blade prices online.`,
          lesson: `Razor-and-blade works only if customers are locked into YOUR refills (patents, design, brand). When that lock weakens, high refill margins become an invitation for competitors.`
        },
        {
          type: "case",
          company: "Nespresso",
          year: "2000s–2010s",
          title: "Razor-and-blade meets premium brand",
          situation: `Nespresso's machines were made and sold through partners, and capsules were sold mainly via Nespresso's own club, boutiques and website.`,
          decision: `Patented capsules and a direct relationship gave Nespresso control over the high-margin repeat purchase. Marketing (including campaigns with George Clooney) built a luxury image.`,
          outcome: `As key patents expired around 2012, compatible capsules from competitors arrived in many markets, pressuring prices. Nespresso leaned harder on brand, boutique experience, new systems (Vertuo) and sustainability messaging.`,
          lesson: `Patents are a temporary lock; brand and direct customer relationships are more durable ones.`
        },
        {
          type: "formula",
          name: "Marketplace revenue",
          expr: "Net revenue = GMV × Take rate",
          explain: "GMV (gross merchandise value) is the total value of transactions on the platform. The take rate is the % the marketplace keeps. Investors value marketplaces on both GMV growth and take-rate sustainability.",
          example: "A home-services marketplace processes $40M of bookings a year (GMV) and keeps 15%. Net revenue = $40M × 15% = $6M. Raising the take rate to 20% gives $8M — but may push providers to take customers off-platform."
        },
        {
          type: "matrix",
          name: "Choosing a revenue model",
          xLabel: "Usage frequency →",
          yLabel: "Value per transaction →",
          cells: [
            { label: "High value, rare", desc: "One-off sale, financing or licence (cars, enterprise software deals, houses)." },
            { label: "High value, frequent", desc: "Subscription/SaaS or usage-based (cloud computing, business software)." },
            { label: "Low value, rare", desc: "Hard to monetise directly — consider ads, bundling or marketplace commission." },
            { label: "Low value, frequent", desc: "Freemium, ads, micro-transactions, razor-and-blade refills (coffee capsules, games)." }
          ]
        },
        {
          type: "text",
          title: "Aggregators and the 2025–2026 shift",
          html: `<p>Ben Thompson's <b>aggregation theory</b>: on the internet, distribution is nearly free, so the winners own the <b>user relationship</b> and aggregate many suppliers (Google, Netflix, Booking). Suppliers become interchangeable and the aggregator gains power.</p>
<p>In 2025–2026, AI is reshaping models: many AI products charge by <b>usage or outcome</b> (per task resolved, per API call) rather than per seat, because AI agents may reduce the number of human 'seats'. Hybrid pricing — a platform fee plus usage credits — has become common for AI software.</p>`
        },
        {
          type: "flip",
          title: "Name the model",
          cards: [
            { front: "McDonald's earns rent and royalties from local owners", back: "Franchise (plus a large real-estate component)." },
            { front: "Arm earns a fee for each chip made with its designs", back: "Licensing (upfront licence + per-unit royalties)." },
            { front: "Spotify Free with ads + Premium plan", back: "Freemium combined with advertising and subscription." },
            { front: "AWS charges per GB stored and per compute hour", back: "Usage-based (consumption) pricing." },
            { front: "Etsy keeps a % of each sale", back: "Marketplace (take rate)." }
          ]
        },
        {
          type: "callout",
          kind: "insight",
          title: "Mix and match",
          html: `<p>Most strong companies combine archetypes. Amazon is a retailer, a marketplace (third-party sellers), a subscription (Prime), an ad business and a usage-based cloud (AWS). Each model strengthens the others — the start of thinking about the business as a <b>system</b>.</p>`
        }
      ],
      terms: [
        { term: "Subscription", def: "Customers pay a recurring fee for continued access to a product or service." },
        { term: "Freemium", def: "A free basic product with paid premium upgrades." },
        { term: "Take rate", def: "The percentage of each transaction a marketplace keeps as revenue." },
        { term: "GMV", def: "Gross Merchandise Value: total value of transactions on a marketplace." },
        { term: "Razor-and-blade model", def: "Selling a base product cheaply and profiting from proprietary consumables." },
        { term: "Usage-based pricing", def: "Charging according to consumption (calls, GB, hours, tasks)." },
        { term: "Aggregator", def: "A platform that owns user demand and aggregates many interchangeable suppliers." },
        { term: "D2C", def: "Direct-to-consumer: selling straight to end customers, usually online, without retailers." }
      ],
      quiz: [
        { q: "A marketplace has $25M GMV and a 12% take rate. Net revenue?", options: ["$2.5M", "$3M", "$12M", "$25M"], answer: 1, explain: "$25M × 12% = $3M." },
        { q: "What most threatens a razor-and-blade model?", options: ["Customers using it too much", "Cheap compatible refills once patents expire", "High brand loyalty", "Low handle price"], answer: 1, explain: "Generic refills attack the profit pool (as Nespresso saw after patents expired)." },
        { q: "Arm earning royalties on chips made with its designs is…", options: ["Franchising", "Advertising", "Licensing", "Marketplace"], answer: 2, explain: "Others pay to use Arm's intellectual property." },
        { q: "Why are many AI products moving to usage- or outcome-based pricing?", options: ["It is required by law", "Seats are easier to count", "Ads pay more", "AI agents may reduce human seats, so value tracks work done rather than users"], answer: 3, explain: "Pricing follows the unit of value; with agents, that is often tasks or outcomes." },
        { q: "According to aggregation theory, winners on the internet own…", options: ["The user relationship / demand", "The most factories", "The most patents", "The cheapest suppliers"], answer: 0, explain: "Owning demand lets aggregators commoditise suppliers." }
      ],
      challenge: {
        title: "Choose a model for a pet-care startup",
        prompt: `You run an app connecting dog owners with vetted local dog-walkers. Average walk: $20. Owners book ~8 walks a month. You're considering: (A) 20% commission per walk; (B) owners pay $15/month subscription + walkers keep 100%; (C) walkers pay $30/month to be listed. Compare revenue per active owner and risks, then recommend.`,
        hints: ["Compute monthly revenue per owner for A and B.", "Think about disintermediation (walker and owner going off-app).", "Which side is scarcer?"],
        model: `<ul>
<li><b>A — 20% commission:</b> 8 × $20 × 20% = <b>$32/owner/month</b>. Risk: after a few walks, owner and walker swap numbers and leave (disintermediation), because the commission is large and repeat.</li>
<li><b>B — $15 subscription:</b> <b>$15/owner/month</b>, predictable. Walkers love it (keep 100%). Risk: lower revenue; owners who walk rarely may churn.</li>
<li><b>C — walker listing fee:</b> depends on walker:owner ratio. If 1 walker serves 5 owners → $6/owner. Risk: walkers are the scarce side; charging them shrinks supply.</li>
</ul>
<p><b>Recommendation:</b> a hybrid — a lower 10–12% take rate (≈ $16–19/owner) that is bundled with things that keep transactions on-platform: insurance cover, GPS walk tracking, in-app payments and rebooking. That raises the cost of leaving. Test with two cities: A/B the 12% hybrid vs the $15 subscription, measure revenue per owner and 90-day retention of both owners and walkers.</p>`
      },
      takeaways: [
        "Know the main archetypes and the risk each carries.",
        "Razor-and-blade needs a durable lock on the refill.",
        "Marketplace revenue = GMV × take rate; too high a take rate drives leakage.",
        "AI is pushing software toward usage- and outcome-based pricing.",
        "Great companies combine models that reinforce each other."
      ]
    },

    /* ---------------------------------------------------------------- 4 */
    {
      id: "business-model-4",
      title: "Unit economics: does each customer make money?",
      level: "Intermediate",
      minutes: 16,
      hook: "If you lose money on every customer, growing faster just means losing money faster.",
      eli5: `If it costs you $3 to make a lemonade and $2 to put up a poster that brings one customer, but you sell the lemonade for $4, you lose $1 per new customer. Selling more does not help — unless that customer comes back every day. Unit economics is checking the maths for one customer (or one cup) before you try to scale.`,
      blocks: [
        {
          type: "formula",
          name: "Contribution margin per unit",
          expr: "Contribution margin = Price − Variable costs per unit",
          explain: "Variable costs rise with each unit sold (ingredients, packaging, delivery, payment fees, marketplace commissions). What is left contributes to fixed costs (rent, salaries) and profit.",
          example: "A meal-kit box sells for $60. Food $24, packaging $5, delivery $8, payment fees $2 → variable costs $39. Contribution = $21 (35%)."
        },
        {
          type: "formula",
          name: "LTV, CAC and payback",
          expr: "LTV = ARPU × Gross margin % ÷ Monthly churn;  Payback (months) = CAC ÷ (ARPU × Gross margin %)",
          explain: "LTV (lifetime value) is the gross profit a customer generates over their life. CAC (customer acquisition cost) = sales & marketing spend ÷ new customers. A common rule of thumb for subscription businesses: LTV:CAC of about 3:1 or better and payback under about 12–18 months.",
          example: "SaaS: ARPU $100/month, gross margin 80%, churn 2.5%/month → LTV = 100 × 0.8 ÷ 0.025 = $3,200. CAC = $1,200 → LTV:CAC = 2.7, payback = 1,200 ÷ 80 = 15 months. Okay, not great."
        },
        {
          type: "interactive",
          widget: "unit-economics",
          title: "Tune the engine",
          note: "Start with ARPU $50, margin 70%, churn 5%, CAC $400. Then halve churn — notice LTV doubles. Reducing churn is often the cheapest way to improve unit economics."
        },
        {
          type: "case",
          company: "Webvan",
          year: "1999–2001",
          title: "Scaling before the unit economics worked",
          situation: `Webvan, an online grocery delivery company, raised large sums around its 1999 IPO and built expensive automated warehouses in several US cities.`,
          decision: `It expanded rapidly into new markets before proving that each order and each warehouse could be profitable, with thin grocery margins and costly delivery.`,
          outcome: `Webvan went bankrupt in 2001. Online grocery later succeeded for others with denser demand, shared infrastructure and better economics per order.`,
          lesson: `Prove unit economics in one market first. Scale multiplies whatever economics you have — good or bad.`
        },
        {
          type: "compare",
          title: "Healthy vs unhealthy unit economics",
          headers: ["Metric", "Warning sign", "Healthy (rough rule of thumb)"],
          rows: [
            ["Contribution margin", "Negative or near zero", "Clearly positive and improving with scale"],
            ["LTV:CAC", "Below 1:1", "About 3:1 or more"],
            ["CAC payback", "Over 24 months", "Under 12–18 months (SaaS)"],
            ["Gross margin (software)", "Under 50%", "70–80%+ (AI products often lower due to compute costs)"],
            ["Net revenue retention (B2B)", "Under 90%", "Over 100% (expansion beats churn)"]
          ]
        },
        {
          type: "callout",
          kind: "warning",
          title: "Common unit-economics mistakes",
          html: `<ul><li><b>Blended CAC</b> that includes free organic customers hides how expensive paid customers really are — look at paid CAC separately.</li>
<li><b>Using revenue instead of gross margin</b> in LTV inflates it.</li>
<li><b>Ignoring discounts and refunds</b> in ARPU.</li>
<li><b>Assuming early churn</b> (from your most loyal first users) will hold at scale.</li>
<li><b>AI compute</b>: inference costs per user can be large and usage-dependent — model them as variable costs.</li></ul>`
        },
        {
          type: "interactive",
          widget: "breakeven",
          title: "How many units to break even?",
          note: "Fixed costs $30,000/month, price $60, variable cost $39. Break-even ≈ 1,429 boxes/month. What happens if you cut delivery cost by $4?"
        },
        {
          type: "scenario",
          prompt: "Your D2C skincare brand: average first order $45, contribution $18 per order; paid-social CAC is $55; 40% of customers reorder about 3 more times in a year. What should you do before raising ad spend?",
          options: [
            { text: "Increase ad spend now — revenue is growing.", feedback: "First-order contribution ($18) is far below CAC ($55); you rely on repeat orders. Check first.", good: false },
            { text: "Compute 12-month contribution per customer and improve retention/AOV before scaling.", feedback: "Yes: 18 + (0.4 × 3 × 18) = $39.60 < $55 CAC. You lose money on each new customer within a year. Fix retention, AOV or CAC first.", good: true },
            { text: "Cut the price to grow faster.", feedback: "Lower price shrinks contribution further — worse unit economics.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Unit economics", def: "Revenue and costs for a single unit (product, order or customer)." },
        { term: "Contribution margin", def: "Price minus variable costs; what each unit contributes to fixed costs and profit." },
        { term: "CAC", def: "Customer Acquisition Cost: sales and marketing spend ÷ number of new customers." },
        { term: "LTV", def: "Lifetime Value: the gross profit a customer generates over their relationship with you." },
        { term: "Payback period", def: "Months of gross profit needed to recover the cost of acquiring a customer." },
        { term: "Churn", def: "The percentage of customers (or revenue) lost in a period." },
        { term: "Net revenue retention (NRR)", def: "Revenue this year from last year's customers ÷ their revenue last year, including upsells and churn." }
      ],
      quiz: [
        { q: "Price $50, variable costs $32. Contribution margin %?", options: ["18%", "32%", "64%", "36%"], answer: 3, explain: "($50 − $32) ÷ $50 = 36%." },
        { q: "ARPU $40, gross margin 75%, monthly churn 3%. LTV?", options: ["$1,000", "$1,333", "$900", "$30"], answer: 0, explain: "40 × 0.75 ÷ 0.03 = $1,000." },
        { q: "LTV $1,000 and CAC $500. LTV:CAC is…", options: ["0.5", "1", "2", "5"], answer: 2, explain: "1,000 ÷ 500 = 2:1 — below the ~3:1 rule of thumb." },
        { q: "The main lesson from Webvan is…", options: ["Never sell groceries online", "Prove unit economics before scaling", "Automated warehouses always fail", "IPOs are bad"], answer: 1, explain: "Scaling multiplied unprofitable economics." },
        { q: "Which change usually raises LTV the most cheaply?", options: ["Reducing churn", "Raising CAC", "Hiring more salespeople", "Opening new markets"], answer: 0, explain: "LTV is inversely proportional to churn — halving churn doubles LTV." }
      ],
      challenge: {
        title: "Fix a SaaS company's unit economics",
        prompt: `A B2B SaaS tool: ARPU $200/month, gross margin 70%, monthly churn 4%, blended CAC $2,400 (but paid-channel CAC is $4,000). Compute LTV, LTV:CAC (blended and paid) and payback. Then propose three levers with target numbers that bring paid LTV:CAC to at least 3:1.`,
        hints: ["LTV = 200 × 0.7 ÷ 0.04.", "Levers: churn, price/ARPU, gross margin, CAC.", "Show the maths of your plan."],
        model: `<p><b>Today:</b> LTV = 200 × 0.70 ÷ 0.04 = <b>$3,500</b>. Blended LTV:CAC = 3,500 ÷ 2,400 = 1.46. Paid = 3,500 ÷ 4,000 = <b>0.88 — losing money on paid customers</b>. Payback (paid) = 4,000 ÷ 140 ≈ 28.6 months.</p>
<p><b>Levers:</b></p>
<ol>
<li><b>Churn 4% → 2%:</b> better onboarding, annual plans with discount, customer success for top accounts. LTV → 200 × 0.7 ÷ 0.02 = $7,000.</li>
<li><b>ARPU $200 → $240:</b> add a premium tier / usage add-ons. With churn 2%: 240 × 0.7 ÷ 0.02 = $8,400.</li>
<li><b>Paid CAC $4,000 → $3,000:</b> cut worst-performing channels, improve landing-page conversion, add partner referrals.</li>
</ol>
<p><b>Result:</b> paid LTV:CAC = 8,400 ÷ 3,000 = <b>2.8</b>; add gross margin 70% → 75% (cheaper hosting/support automation): LTV = 240 × 0.75 ÷ 0.02 = $9,000 → <b>3.0:1</b>, payback 3,000 ÷ 180 ≈ 16.7 months. Until then, slow paid spend and grow via channels with lower CAC.</p>`
      },
      takeaways: [
        "Check contribution margin per unit before anything else.",
        "LTV uses gross margin, not revenue; churn is in the denominator.",
        "Aim for roughly LTV:CAC ≥ 3 and payback under 12–18 months in subscription businesses.",
        "Scale multiplies your unit economics — fix them before pouring money in."
      ]
    },

    /* ---------------------------------------------------------------- 5 */
    {
      id: "business-model-5",
      title: "Business engineering: the business as a system",
      level: "Advanced",
      minutes: 18,
      hook: "Amazon's strategy fits on a napkin: a loop where every improvement makes the next one easier.",
      eli5: `A bicycle is not just a pile of parts; the pedals turn the chain, the chain turns the wheel, and the wheel moves you forward. A business is the same: marketing brings customers, customers bring money, money pays for better products, better products bring more customers. Business engineering means designing how all the parts connect so the whole machine runs smoothly — and ideally speeds itself up.`,
      blocks: [
        {
          type: "text",
          title: "From model to machine",
          html: `<p>The Business Model Canvas describes <b>what</b> the business is. <b>Business engineering</b> designs <b>how</b> it actually runs: the chain of activities, the processes, the information flows, the people and the technology — and how they interact over time.</p>
<p>The tools: <b>value chain</b> (where value is created), <b>process maps</b> (how work flows), <b>systems thinking</b> (how parts influence each other through feedback loops) and <b>flywheels</b> (self-reinforcing growth loops).</p>`
        },
        {
          type: "framework",
          name: "Value chain",
          by: "Michael Porter, Competitive Advantage (1985)",
          when: "To find where in your activities you create value or cost — and where to differentiate.",
          steps: [
            { label: "Inbound logistics", desc: "Receiving and storing inputs (raw materials, data, supplier goods)." },
            { label: "Operations", desc: "Turning inputs into the product or service." },
            { label: "Outbound logistics", desc: "Getting the product to customers (warehousing, delivery, digital delivery)." },
            { label: "Marketing & sales", desc: "Making customers aware and persuading them to buy." },
            { label: "Service", desc: "Support after purchase: installation, help, returns, upgrades." },
            { label: "Support activities", desc: "Firm infrastructure, HR, technology development and procurement that support every primary activity." }
          ]
        },
        {
          type: "framework",
          name: "Process mapping in 5 steps",
          by: "Operations / lean practice (SIPOC, swimlane diagrams)",
          when: "Before automating or improving any recurring workflow (order-to-cash, hire-to-retire, lead-to-deal).",
          steps: [
            { label: "Name the process & outcome", desc: "E.g. 'Order-to-cash: from customer order to money in the bank'." },
            { label: "SIPOC", desc: "List Suppliers, Inputs, Process steps (5–7), Outputs and Customers." },
            { label: "Swimlanes", desc: "Draw each step in the lane of who does it (sales, ops, finance, system). Hand-offs between lanes are where delays happen." },
            { label: "Measure", desc: "Time, cost and error rate per step. Separate work time from waiting time." },
            { label: "Redesign", desc: "Eliminate, simplify, standardise, then automate — in that order. Automating a bad process just makes mistakes faster." }
          ]
        },
        {
          type: "text",
          title: "Systems thinking: feedback loops",
          html: `<p>Donella Meadows and Peter Senge popularised <b>systems thinking</b>: look at how parts influence each other over time rather than at single events.</p>
<ul><li><b>Reinforcing loop (R)</b> — change amplifies itself: more users → more content → more users. Drives exponential growth (or collapse).</li>
<li><b>Balancing loop (B)</b> — change is counteracted: rapid growth → overloaded support → worse service → slower growth.</li>
<li><b>Delays</b> — effects arrive later (hiring takes months), which causes over- and under-reaction.</li></ul>
<p>Great business engineers <span class="hl">strengthen reinforcing loops and remove the balancing loops that limit them</span> before they bite.</p>`
        },
        {
          type: "case",
          company: "Amazon",
          year: "2001",
          title: "The flywheel on a napkin",
          situation: `After the dot-com crash, Amazon was criticised for losses. Jeff Bezos and his team, influenced by Jim Collins' flywheel concept, sketched how the business reinforces itself.`,
          decision: `The loop: lower prices → better customer experience → more traffic → more third-party sellers → wider selection → better experience. Growth also spreads fixed costs, enabling even lower prices. Amazon invested in every link (marketplace, Prime, fulfilment).`,
          outcome: `The flywheel became the core of Amazon's strategy for decades, extended by Prime, Fulfilment by Amazon and advertising.`,
          lesson: `Design your business as a loop, not a line. Identify the links and invest where a push accelerates the whole wheel.`
        },
        {
          type: "timeline",
          title: "Building a flywheel (steps)",
          items: [
            { label: "1. List", desc: "Write the 4–6 most important things your business does well." },
            { label: "2. Connect", desc: "Draw arrows: which one causes which? Look for a closed loop." },
            { label: "3. Test", desc: "Check each arrow with data (does more X really cause more Y?)." },
            { label: "4. Invest", desc: "Put resources into the weakest link of the loop." },
            { label: "5. Guard", desc: "Spot balancing loops (capacity, quality, trust) that could stall the wheel." }
          ]
        },
        {
          type: "interactive",
          widget: "viral-loop",
          title: "Feel a reinforcing loop",
          note: "Set the K-factor to 0.5, then 1.1. Below 1, growth fades; above 1, the loop compounds — the same logic as any flywheel."
        },
        {
          type: "scenario",
          prompt: "Your marketplace's growth is slowing. Data: new sellers take 3 weeks to be approved, and buyer searches often find too few results in new cities. Where do you push the flywheel?",
          options: [
            { text: "Spend more on buyer advertising in new cities.", feedback: "More buyers meeting thin supply will churn — this feeds a balancing loop (bad experience).", good: false },
            { text: "Cut seller onboarding from 3 weeks to 3 days via a simplified, partly automated approval process.", feedback: "Right. Supply is the bottleneck link; fixing the process accelerates the whole loop.", good: true },
            { text: "Raise the take rate to fund more ads.", feedback: "That discourages sellers — the scarce side — and slows the wheel.", good: false }
          ]
        }
      ],
      terms: [
        { term: "Business engineering", def: "Designing how a business runs as a system: activities, processes, information, people and technology." },
        { term: "Value chain", def: "Porter's map of primary and support activities through which a firm creates value." },
        { term: "Process map", def: "A diagram of the steps, owners and hand-offs in a workflow." },
        { term: "SIPOC", def: "Suppliers, Inputs, Process, Outputs, Customers — a high-level process template." },
        { term: "Reinforcing loop", def: "A feedback loop where change amplifies itself (growth or decline)." },
        { term: "Balancing loop", def: "A feedback loop that counteracts change and limits growth." },
        { term: "Flywheel", def: "A self-reinforcing loop of business activities where each push makes the next easier (Jim Collins)." }
      ],
      quiz: [
        { q: "Which is a reinforcing loop?", options: ["More orders → overloaded support → fewer orders", "More users → more content → more users", "Price rise → lower demand", "Hiring delays → slower output"], answer: 1, explain: "Each step amplifies the previous one." },
        { q: "In the process-redesign order, what comes LAST?", options: ["Eliminate", "Simplify", "Standardise", "Automate"], answer: 3, explain: "Automating a bad process just makes mistakes faster." },
        { q: "In Porter's value chain, HR is a…", options: ["Support activity", "Primary activity", "Customer segment", "Revenue stream"], answer: 0, explain: "HR supports all primary activities." },
        { q: "In Amazon's flywheel, more third-party sellers lead to…", options: ["Higher prices", "Less traffic", "Wider selection and better customer experience", "Fewer customers"], answer: 2, explain: "Selection improves the experience, attracting more traffic." }
      ],
      challenge: {
        title: "Engineer a flywheel for a B2B SaaS",
        prompt: `You run a recruiting software company for mid-size firms. Facts: customers who use the integrated job board hire 30% faster; candidates who apply through it build profiles; more profiles make search better for employers. Sales cycles are 60 days; onboarding takes 5 weeks with lots of manual data import. Draw the flywheel, identify one balancing loop, and propose two business-engineering moves.`,
        hints: ["Loop: employers ↔ candidate profiles ↔ search quality.", "Look at onboarding as the limiting process.", "Think about data, automation, and pricing that rewards usage."],
        model: `<p><b>Flywheel:</b> more employers → more job posts → more candidates apply and build profiles → richer candidate database → better search & faster hires → stronger results and referrals → more employers.</p>
<p><b>Balancing loop:</b> faster sales growth → more onboarding backlog (5 weeks, manual) → delayed value, early churn → negative word of mouth → slower sales.</p>
<p><b>Moves:</b></p>
<ol>
<li><b>Re-engineer onboarding:</b> map the process (SIPOC + swimlanes), remove steps, build connectors to the top 5 HR systems and use AI to clean imported data. Target: 5 weeks → 1 week; first hire in 30 days.</li>
<li><b>Strengthen the data loop:</b> offer candidates free profile tools (CV feedback, alerts) so profiles grow independently of employers; price employers on hires/usage tiers so heavy users are rewarded for posting more.</li>
</ol>
<p><b>Metric to watch:</b> time-to-first-hire and profiles added per month — the two links that drive the wheel.</p>`
      },
      takeaways: [
        "Business engineering turns the model into a working system of activities and processes.",
        "Use the value chain to see where you create value and cost.",
        "Map, eliminate, simplify, standardise — then automate.",
        "Design reinforcing loops (flywheels) and remove the balancing loops that slow them."
      ]
    },

    /* ---------------------------------------------------------------- 6 */
    {
      id: "business-model-6",
      title: "Operating model design, AI automation & moats in the model",
      level: "Advanced",
      minutes: 18,
      hook: "In 2026 two competitors can have the same product but one runs with a fraction of the people — the difference is the operating model.",
      eli5: `Two restaurants serve the same burger. One has a messy kitchen where everyone shouts and waits. The other has a clear station for each job, a screen that sends orders automatically and a robot that fries the chips. The second is faster, cheaper and harder to beat. The operating model is how the kitchen is organised; a moat is anything that stops other restaurants copying you.`,
      blocks: [
        {
          type: "framework",
          name: "Operating model canvas (POLISM)",
          by: "Andrew Campbell, Mikel Gutierrez & Mark Lancelott, Operating Model Canvas (2017)",
          when: "To translate strategy and business model into how the organisation actually works.",
          steps: [
            { label: "Processes / value chain", desc: "The core work that delivers the value proposition." },
            { label: "Organisation", desc: "Structure, roles, decision rights — who decides what." },
            { label: "Locations", desc: "Where work and assets sit (offices, plants, remote, regions)." },
            { label: "Information", desc: "Systems, data and tools that support processes and decisions." },
            { label: "Suppliers", desc: "What is bought or outsourced versus done in-house." },
            { label: "Management system", desc: "Planning, budgeting, KPIs, incentives and governance rhythm." }
          ]
        },
        {
          type: "matrix",
          name: "Where to apply automation and AI",
          xLabel: "Volume / repetitiveness of the task →",
          yLabel: "Judgement & risk involved →",
          cells: [
            { label: "Human-led, AI-assisted", desc: "Low volume, high judgement (strategy, big deals, legal disputes). AI drafts and researches; humans decide." },
            { label: "Human-in-the-loop AI", desc: "High volume, high judgement (credit decisions, medical triage, claims). AI proposes; humans review exceptions and samples." },
            { label: "Leave / simplify", desc: "Low volume, low judgement. Often cheapest to eliminate or keep manual." },
            { label: "Full automation / AI agents", desc: "High volume, low judgement (data entry, invoice matching, tier-1 support, scheduling). Automate end to end with monitoring." }
          ]
        },
        {
          type: "text",
          title: "AI in the operating model (2025–2026 practice)",
          html: `<p>Leading companies now redesign workflows around AI rather than bolting chatbots onto old processes:</p>
<ul><li><b>AI agents</b> handle multi-step tasks (support tickets, lead research, reconciliation) with humans supervising exceptions.</li>
<li><b>Metrics shift</b> from headcount to <b>revenue per employee</b>, cost per task and resolution quality.</li>
<li><b>New costs</b> appear: model/inference spend, evaluation, data governance, security, and change management.</li>
<li><b>Controls</b> matter: audit logs, human approval for high-risk actions, and regular quality sampling.</li></ul>
<p>Rule: <span class="hl">redesign the process first, then choose where AI fits</span> using the matrix above.</p>`
        },
        {
          type: "formula",
          name: "Automation business case",
          expr: "Annual saving = (Volume × Time per task × Cost per hour × Share automated) − Annual automation cost",
          explain: "Include the full automation cost (licences, inference, integration amortised, oversight time). Also value faster cycle time and fewer errors where you can.",
          example: "60,000 invoices/year × 0.1 h × $40/h = $240,000 of manual work. Automate 75% → $180,000 saved. Costs: software + inference $45,000 + 0.5 FTE oversight $35,000 = $80,000. Net ≈ $100,000/year, plus faster month-end close."
        },
        {
          type: "compare",
          title: "Moats you can build into the model",
          headers: ["Moat", "How the model creates it", "Example"],
          rows: [
            ["Network effects", "Each user makes the product more valuable for others", "Visa, WhatsApp, marketplaces"],
            ["Switching costs", "Data, workflows and integrations make leaving painful", "Salesforce, SAP, Microsoft 365"],
            ["Scale economies", "Fixed costs spread over more units → lower unit cost", "Amazon fulfilment, Costco"],
            ["Proprietary data loops", "Usage generates data that improves the product", "Google Search, Tesla driving data"],
            ["Brand", "Trust and identity lets you charge more", "Apple, Hermès"],
            ["Process / operating excellence", "Hard-to-copy system of activities", "Toyota Production System"]
          ]
        },
        {
          type: "case",
          company: "Costco",
          year: "1983 onward",
          title: "A model engineered as a moat",
          situation: `Retail is competitive and low-margin. Costco wanted to offer the lowest possible prices.`,
          decision: `It engineered the whole system around that goal: a membership fee (a large share of its operating profit), a limited range of a few thousand items (far fewer than a typical supermarket) bought in huge volumes, low mark-ups, warehouse stores and well-paid staff with low turnover.`,
          outcome: `Members renew at very high rates; the low prices drive volume, volume drives supplier bargaining power, which keeps prices low. Rivals find it hard to copy the whole system at once.`,
          lesson: `A moat is strongest when many parts of the operating model reinforce each other — copying one part is not enough.`
        },
        {
          type: "scenario",
          prompt: "Your 40-person customer-support team handles 30,000 tickets a month; about 60% are password resets and order-status questions. The CEO wants to 'replace support with AI' next month. What do you recommend?",
          options: [
            { text: "Switch everything to an AI chatbot next month and lay off the team.", feedback: "High risk: complex and emotional cases need humans, and there is no process redesign, testing or quality control.", good: false },
            { text: "Automate the 60% low-judgement tickets with AI agents plus easy escalation; redeploy agents to complex cases and retention; measure resolution quality.", feedback: "Right — this follows the matrix: full automation for high-volume/low-judgement, human-in-the-loop for the rest.", good: true },
            { text: "Do nothing — AI is not reliable yet.", feedback: "You leave major savings and speed on the table while competitors redesign.", good: false }
          ]
        },
        {
          type: "checklist",
          title: "Operating-model redesign checklist",
          items: [
            "Strategy and value proposition stated in one sentence",
            "Core processes mapped with time, cost and errors",
            "Each process placed on the automation/AI matrix",
            "Decision rights and human approvals defined for AI actions",
            "KPIs updated (cost per task, quality, revenue per employee)",
            "Moat check: does this design make us harder to copy?"
          ]
        }
      ],
      terms: [
        { term: "Operating model", def: "How an organisation is set up to deliver its strategy: processes, structure, locations, information, suppliers and management system." },
        { term: "AI agent", def: "Software that uses AI to plan and carry out multi-step tasks, often using tools and systems, with varying human oversight." },
        { term: "Human-in-the-loop", def: "A design where people review or approve AI outputs, especially for risky decisions." },
        { term: "Revenue per employee", def: "Revenue divided by headcount; a common efficiency signal in AI-era operating models." },
        { term: "Moat", def: "A durable advantage that protects profits from competitors (Warren Buffett's term)." },
        { term: "Switching costs", def: "The time, money and risk a customer bears to move to a competitor." },
        { term: "Data loop", def: "A cycle where product usage produces data that improves the product, attracting more usage." }
      ],
      quiz: [
        { q: "Which task is best suited to full AI automation?", options: ["Negotiating an acquisition", "Approving large loans without review", "Matching invoices to purchase orders at high volume", "Designing company strategy"], answer: 2, explain: "High volume, low judgement, clear rules." },
        { q: "In the automation business case, which cost is often forgotten?", options: ["Human oversight and inference costs", "Office rent", "Marketing", "Dividends"], answer: 0, explain: "Oversight time, inference and integration are real ongoing costs." },
        { q: "Costco's moat comes mainly from…", options: ["A single patent", "Celebrity advertising", "Being the newest retailer", "Many reinforcing parts of the model (membership, limited range, volume, low mark-ups)"], answer: 3, explain: "Whole-system fit is hard to copy." },
        { q: "Data, workflows and integrations that make leaving painful create…", options: ["Network effects", "Switching costs", "Scale economies", "Brand"], answer: 1, explain: "That is the definition of switching costs." }
      ],
      challenge: {
        title: "Redesign an operating model with AI",
        prompt: `A 120-person accounting firm serves 800 small businesses at an average fee of $500/month. Staff spend ~45% of time on bookkeeping data entry and reconciliation, ~25% on client questions, ~30% on tax advice and planning. Margins are falling as clients push fees down. Propose a redesigned operating model: what to automate, how roles change, new KPIs, and a moat.`,
        hints: ["Revenue = 800 × $500 × 12.", "Use the automation/AI matrix.", "Consider moving pricing from hours to outcomes or tiers."],
        model: `<p><b>Baseline:</b> revenue = 800 × $500 × 12 = <b>$4.8M</b>; revenue per employee = $40,000 — low.</p>
<ol>
<li><b>Automate (high volume, low judgement):</b> bank-feed reconciliation, receipt capture, categorisation with AI + rules; human review of exceptions only. Target: bookkeeping time 45% → 15%.</li>
<li><b>Human-in-the-loop:</b> AI assistant drafts answers to client questions using each client's books; accountants approve. Target: response time 2 days → same day.</li>
<li><b>Human-led, AI-assisted:</b> tax planning and advisory — the high-value work, now 50%+ of staff time.</li>
<li><b>Roles:</b> bookkeepers retrained as "client finance managers" (exception handling + advisory); a small automation/data team (3–4 people) owns workflows and quality sampling.</li>
<li><b>Pricing:</b> tiered packages (Essentials $350, Growth $700 with monthly advisory, CFO-lite $1,500) — capture the value of advice rather than hours.</li>
<li><b>KPIs:</b> clients per accountant (from ~7 to 15+), cost per reconciled transaction, close time (days), advisory revenue %, client NPS, revenue per employee (target $70k+).</li>
<li><b>Moat:</b> switching costs (clean integrated books, history, workflows) plus a data loop — benchmarks across 800+ similar businesses that make advice better than a solo accountant's.</li>
</ol>`
      },
      takeaways: [
        "The operating model turns strategy into processes, structure, information and management rhythm.",
        "Place each process on the volume × judgement matrix before applying AI.",
        "Build a full automation business case, including oversight and inference costs.",
        "The strongest moats come from many parts of the model reinforcing each other."
      ]
    }
  ]
});
