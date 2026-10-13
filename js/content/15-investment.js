/* MBA Studio — Track 15: Investment, Valuation & Fundraising */
MBA.addTrack({
  id: 'investment',
  stage: 4,
  order: 15,
  title: 'Investment, Valuation & Fundraising',
  icon: '📈',
  color: '#eab308',
  tagline: 'Raise smart money and know what a company is worth',
  summary: `Understand every kind of capital, how venture capital really works, and how investors value companies. You will be able to read a term sheet line by line, model a cap table through several rounds, run an investor process, and judge exits — plus invest your own money sensibly.`,
  outcomes: [
    'Choose the right source of capital for each stage of a business',
    'Explain VC fund economics, the power law and what investors look for',
    'Value a company with DCF, comparables, precedent deals and the VC method',
    'Negotiate a term sheet: SAFEs, notes, liquidation preferences, anti-dilution, pools',
    'Build a cap table, run a fundraising process and survive due diligence',
    'Evaluate exits and apply index-fund basics to your own investing'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'investment-1',
      title: 'Types of capital: from bootstrapping to private equity',
      level: 'Beginner',
      minutes: 13,
      hook: `The money you raise shapes the company you build — the wrong kind of capital can be more dangerous than no capital at all.`,
      eli5: `Say you want to open a lemonade stand that needs $100. You could use your pocket money (bootstrapping), borrow from your aunt and pay her back with a bit extra (debt), or let your neighbour pay $100 in exchange for a share of all future profits (equity). Each choice changes who you answer to and who gets the money if the stand becomes famous.`,
      blocks: [
        {
          type: 'compare', title: 'The capital menu', headers: ['Source', 'What you give', 'Best for', 'Watch out for'],
          rows: [
            ['Bootstrapping', 'Your time and savings; reinvested profits', 'Businesses that can earn early revenue', 'Slower growth; personal financial risk'],
            ['Friends & family', 'Usually equity or a simple loan', 'The very first cheque to prove an idea', 'Relationships if it fails; use proper documents'],
            ['Angel investors', 'Equity (often via SAFE or note)', 'Pre-seed and seed; angels often add advice and contacts', 'Too many small angels can complicate the cap table'],
            ['Venture capital', 'Equity and board influence', 'Companies that could grow very large, very fast', 'Pressure for huge outcomes; dilution; preferences'],
            ['Private equity', 'Majority control, often with debt (buyouts)', 'Mature, cash-generating businesses', 'Heavy leverage and cost focus'],
            ['Bank debt', 'Interest and repayment; covenants; often personal guarantees', 'Predictable cash flows, assets to secure', 'Must be repaid even in bad years'],
            ['Venture debt', 'Interest plus small warrants', 'VC-backed startups extending runway after a round', 'Covenants can bite when growth slows'],
            ['Revenue-based financing', 'A % of monthly revenue until a cap is repaid', 'Recurring-revenue or e-commerce businesses', 'Effective cost can be high'],
            ['Grants', 'Nothing (but reporting obligations)', 'R&D, deep tech, social impact', 'Slow, competitive, restricted use'],
            ['Crowdfunding', 'Rewards (Kickstarter) or equity (regulated platforms)', 'Consumer products with a community', 'Public failure; many small shareholders']
          ]
        },
        {
          type: 'matrix', name: 'Choosing capital', xLabel: 'Growth ambition / speed →', yLabel: 'Predictability of cash flows →',
          cells: [
            { label: 'Debt & bootstrapping', desc: 'Steady, modest-growth businesses (a dental clinic, an agency): use profits and bank loans; keep ownership.' },
            { label: 'Growth equity, venture debt, RBF', desc: 'Fast-growing with predictable revenue (SaaS at scale): mix non-dilutive financing with later-stage equity.' },
            { label: 'Self-funding, grants, friends & family', desc: 'Lifestyle or experimental projects with uncertain revenue: keep costs low.' },
            { label: 'Angels and venture capital', desc: 'Huge potential but unpredictable: equity investors who accept high risk for a chance at outsized returns.' }
          ]
        },
        {
          type: 'formula', name: 'The cost of equity vs debt',
          expr: 'Equity sold % = Investment ÷ Post-money valuation;  Annual interest = Loan × Interest rate',
          explain: 'Equity has no repayment but you give up a share of all future value. Debt keeps your ownership but must be repaid with interest.',
          example: `Raise $1m at a $4m pre-money valuation → post-money $5m → you sell <b>20%</b>. If the company is later worth $50m, that stake is worth $10m. A $1m loan at 10% costs $100,000 a year in interest, but you keep 100%.`
        },
        {
          type: 'case', company: 'Mailchimp', year: '2001–2021', title: 'Bootstrapped to a $12 billion exit',
          situation: `Ben Chestnut and Dan Kurzius started Mailchimp as a side project of their web design agency. Email marketing was crowded, and many rivals raised venture capital.`,
          decision: `They never took outside venture funding, grew from customer revenue, and introduced a freemium plan in 2009 that drove rapid user growth.`,
          outcome: `In 2021 Intuit agreed to acquire Mailchimp for about $12 billion in cash and stock. Because there were no outside investors, the founders kept most of the value.`,
          lesson: `Venture capital is a tool, not a badge. A profitable business with strong unit economics can grow large without it — and keep its ownership.`
        },
        {
          type: 'scenario',
          prompt: `You run a profitable B2B services firm growing 15% a year with steady contracts. A VC offers $5m for 30% if you "go big". What is the most sensible response?`,
          options: [
            { text: 'Take it — VC money is the sign of a serious company.', feedback: 'VCs need companies that could return their whole fund. A 15%-growth services firm usually is not that, and the misaligned expectations hurt both sides.', good: false },
            { text: 'Fund growth from profits and a bank facility; consider growth equity only for a specific, high-return expansion.', feedback: 'Right. Predictable cash flows suit debt and internal funding, and you keep ownership.', good: true },
            { text: 'Launch an equity crowdfunding campaign.', feedback: 'Possible for consumer brands, but adds many shareholders without solving a real need.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'Before you raise any money',
          items: ['How much exactly, and what milestones will it buy?', 'Could revenue or customer prepayments fund it instead?', 'Does the business fit this investor\'s return model?', 'What control or covenants come with the money?', 'What happens if we miss the plan?']
        }
      ],
      terms: [
        { term: 'Bootstrapping', def: 'Building a business from personal savings and customer revenue, without outside investors.' },
        { term: 'Equity', def: 'Ownership in a company; equity investors share in profits and value.' },
        { term: 'Debt', def: 'Borrowed money that must be repaid with interest, regardless of performance.' },
        { term: 'Angel investor', def: 'A wealthy individual who invests their own money in early-stage companies.' },
        { term: 'Private equity', def: 'Investment firms that buy stakes (often control) in mature companies, frequently using debt.' },
        { term: 'Revenue-based financing', def: 'Funding repaid as a share of future revenue until a fixed multiple is reached.' },
        { term: 'Non-dilutive capital', def: 'Funding that does not require giving up ownership, such as grants or loans.' }
      ],
      quiz: [
        {
          q: 'You raise $2m at an $8m pre-money valuation. What percentage of the company do you sell?',
          options: ['25%', '20%', '16%', '80%'],
          answer: 1,
          explain: 'Post-money = 8 + 2 = $10m. 2 ÷ 10 = 20%.'
        },
        {
          q: 'Which business is the best fit for bank debt?',
          options: ['A pre-revenue biotech', 'A social app with no revenue', 'An established bakery chain with steady profits', 'A deep-tech fusion startup'],
          answer: 2,
          explain: 'Debt suits predictable cash flows that can cover interest and repayment.'
        },
        {
          q: 'An e-commerce brand takes $500k of revenue-based financing with a 1.4x repayment cap. How much will it repay in total?',
          options: ['$500,000', '$1,400,000', '$540,000', '$700,000'],
          answer: 3,
          explain: '$500,000 × 1.4 = $700,000, paid as a share of monthly revenue.'
        },
        {
          q: 'What is the main lesson of Mailchimp?',
          options: ['You need VC to build a large company', 'A profitable, bootstrapped company can reach a very large exit and keep its ownership', 'Bootstrapped firms cannot be acquired', 'Freemium never works'],
          answer: 1,
          explain: 'Mailchimp grew to a roughly $12bn sale to Intuit without outside venture funding.'
        }
      ],
      challenge: {
        title: 'Fund the coffee roaster',
        prompt: `A specialty coffee roaster has $3m revenue, 12% EBITDA margin ($360k), and wants $1.2m for a new roasting line that will add $1.5m revenue at the same margin. Options: (A) a bank loan of $1.2m at 9% over 5 years; (B) an angel group offering $1.2m for 25% of the company.<br><br>(a) What does each option cost in year 1? (b) What valuation does option B imply? (c) Recommend one.`,
        hints: ['Year-1 interest = loan × rate (ignore principal for the cost comparison).', 'Post-money = investment ÷ % sold.', 'Compare against the extra EBITDA the line produces.'],
        model: `<p><b>(a)</b> Option A: interest ≈ 1.2m × 9% = <b>$108,000</b> in year 1 (plus about $240,000 a year of principal repayment over 5 years). Option B: no cash cost, but 25% of all future profits and value. Extra EBITDA from the line = 1.5m × 12% = $180,000.</p><p><b>(b)</b> Post-money = 1.2m ÷ 25% = <b>$4.8m</b>; pre-money = <b>$3.6m</b>, i.e. 10x current EBITDA.</p><p><b>(c)</b> After the expansion, total EBITDA ≈ $540,000. Under B, 25% of that ($135,000 a year) belongs to the angels forever, and growing. Under A, interest of $108,000 falls as the loan is repaid, and debt service of roughly $348,000 in year 1 is covered by $540,000 EBITDA (before tax and capex). <b>Recommend the bank loan</b>, provided a stress test (e.g. the new line delivers only half its revenue) still covers repayments. Take angel equity only if the angels bring distribution or expertise worth more than 25% of the company.</p>`
      },
      takeaways: [
        'Match the capital to the business: predictable cash suits debt, uncertain huge upside suits equity.',
        'Equity is expensive if you succeed; debt is dangerous if you struggle.',
        'Many great companies were built with little or no VC money.',
        'Know exactly what milestones the money buys before you raise.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'investment-2',
      title: 'How venture capital works',
      level: 'Intermediate',
      minutes: 15,
      hook: `A VC who invests in 30 startups expects most to fail — and that single fact explains almost everything about how they behave.`,
      eli5: `Imagine a talent scout who backs 20 young footballers. Most won\'t make it professionally; a few will play in lower leagues; and maybe one becomes a superstar who pays for everything. The scout therefore only backs kids who <i>could</i> be superstars, even if they are risky. Venture capitalists think exactly like that scout.`,
      blocks: [
        {
          type: 'framework', name: 'VC fund structure', by: 'Standard limited partnership model', when: 'Understanding an investor\'s incentives',
          steps: [
            { label: 'Limited partners (LPs)', desc: 'Pension funds, endowments, sovereign funds, family offices and wealthy individuals who commit money to the fund.' },
            { label: 'General partners (GPs)', desc: 'The VC firm\'s partners who choose investments, sit on boards and manage the fund.' },
            { label: 'Fees: "2 and 20"', desc: 'Typically about 2% a year management fee on committed capital, and 20% carried interest (carry) on profits after LPs get their money back. Top firms may charge more.' },
            { label: 'Fund life', desc: 'Usually about 10 years (often extended): roughly 3–5 years of new investments, then follow-ons and exits.' },
            { label: 'Return target', desc: 'LPs typically hope for around 3x net over the fund\'s life to justify illiquidity and risk.' }
          ]
        },
        {
          type: 'formula', name: 'The power law: "return the fund"',
          expr: 'Required exit value = Fund size ÷ Ownership at exit',
          explain: 'Venture returns follow a power law: a tiny number of investments produce most of the returns. So VCs ask of every deal, "can this one company return the entire fund?"',
          example: `A $100m fund that owns 10% of a company at exit needs that company to sell for <b>$1 billion</b> just to return the fund once. That is why VCs pass on good businesses that are unlikely to become very large.`
        },
        {
          type: 'timeline', title: 'Funding stages (typical, 2025–2026)',
          items: [
            { label: 'Pre-seed', desc: 'Idea and team; prototype. Angels, accelerators (e.g. Y Combinator), pre-seed funds; usually SAFEs.' },
            { label: 'Seed', desc: 'Early product and first signs of demand. Seed funds and angels.' },
            { label: 'Series A', desc: 'Product-market fit; a repeatable way to acquire customers. First institutional lead and board seat.' },
            { label: 'Series B–C', desc: 'Scaling sales, new markets, team building; growth metrics and efficiency matter.' },
            { label: 'Growth / late stage', desc: 'Crossover funds, growth equity; preparing for IPO or acquisition.' },
            { label: 'Exit', desc: 'IPO, acquisition, or secondary sales to new investors.' }
          ]
        },
        {
          type: 'case', company: 'Google', year: '1999', title: 'The Series A that returned funds many times over',
          situation: `Larry Page and Sergey Brin had a superior search technology (PageRank) but no clear business model, and search was considered a crowded market.`,
          decision: `In June 1999 Sequoia Capital and Kleiner Perkins jointly invested $25 million, each taking a board seat — unusual for two top firms to share a deal.`,
          outcome: `Google later built its advertising model, went public in 2004, and became one of the most valuable companies in the world. The investment became one of the best-known venture returns in history.`,
          lesson: `VCs bet on exceptional teams and technology in potentially enormous markets, even before the business model is clear. One outcome like this can make an entire fund.`
        },
        {
          type: 'flip', title: 'What VCs look for',
          cards: [
            { front: 'Team', back: 'Founder-market fit, speed of learning, ability to recruit and sell the vision.' },
            { front: 'Market', back: 'Large and growing, or a new market that could become huge. "Why now?"' },
            { front: 'Product', back: 'A real insight that makes it 10x better for a specific customer, not marginally better.' },
            { front: 'Traction', back: 'Evidence of pull: retention, revenue growth, usage, strong referrals.' },
            { front: 'Business model', back: 'Gross margins and unit economics that can scale; for AI, margin after inference costs.' },
            { front: 'Defensibility', back: 'Network effects, proprietary data, switching costs, brand or scale advantages.' }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'The 2025–2026 VC market',
          html: `<p>Capital has concentrated heavily in AI: a small number of very large rounds into model builders and AI infrastructure absorbed a big share of global venture dollars, while many non-AI startups found fundraising slow. Investors emphasise efficient growth, revenue quality and a clear path to profitability. Secondaries and continuation funds have become common ways to return cash to LPs while IPOs remain selective.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your startup is profitable, growing 25% a year, and you expect it could be worth $80–150m in 7 years. A $500m VC fund passes. Why?`,
          options: [
            { text: 'They think the business is bad.', feedback: 'Not necessarily — it may be a good business, just not a fit for their model.', good: false },
            { text: 'Even a great outcome cannot meaningfully move a $500m fund.', feedback: 'Right. Owning 15% of $150m is $22.5m — under 5% of the fund. They need potential billion-dollar outcomes.', good: true },
            { text: 'VCs never invest in profitable companies.', feedback: 'They do — but the size of the possible outcome matters more than current profit.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Limited partner (LP)', def: 'An investor in a VC fund who provides capital but does not manage it.' },
        { term: 'General partner (GP)', def: 'The VC who manages the fund and makes investment decisions.' },
        { term: 'Management fee', def: 'An annual fee (often around 2%) paid by LPs to run the fund.' },
        { term: 'Carried interest', def: 'The GP\'s share (often 20%) of fund profits after LPs get their capital back.' },
        { term: 'Power law', def: 'A distribution where a very few outcomes produce most of the total returns.' },
        { term: 'Follow-on', def: 'Additional investment by an existing investor in a later round.' },
        { term: 'DPI', def: 'Distributions to paid-in capital: cash actually returned to LPs divided by what they invested.' }
      ],
      quiz: [
        {
          q: 'A $200m fund owns 8% of a startup at exit. What exit value returns the whole fund?',
          options: ['$1.6bn', '$2.5bn', '$250m', '$16bn'],
          answer: 1,
          explain: '200 ÷ 0.08 = $2.5 billion.'
        },
        {
          q: 'A $100m fund charges 2% a year management fee for 10 years. How much goes to fees?',
          options: ['$2m', '$10m', '$20m', '$200m'],
          answer: 2,
          explain: '2% × $100m × 10 = $20m (in practice fees often step down after the investment period).'
        },
        {
          q: 'What does "power law" mean in venture capital?',
          options: ['Most investments return about 3x', 'A few investments produce most of the returns', 'Large funds always beat small funds', 'Returns are evenly spread'],
          answer: 1,
          explain: 'The best one or two companies in a portfolio often return more than all the others combined.'
        },
        {
          q: 'Who typically provides most of the money in a VC fund?',
          options: ['Limited partners such as pension funds and endowments', 'The founders', 'Banks', 'Governments only'],
          answer: 0,
          explain: 'LPs commit the capital; GPs usually commit a small percentage of their own.'
        },
        {
          q: 'At which stage do investors usually expect clear evidence of product-market fit and a repeatable sales motion?',
          options: ['Pre-seed', 'Friends & family', 'Series A', 'Grant stage'],
          answer: 2,
          explain: 'Series A is generally where institutional investors look for PMF and repeatable growth.'
        }
      ],
      challenge: {
        title: 'Think like a GP',
        prompt: `You manage a $50m seed fund with a 2% annual management fee for 10 years and 20% carry. You plan to invest in 20 companies at $2m each initially (the rest held for follow-ons).<br><br>(a) How much capital is left to invest after fees? (b) How much must the portfolio return in total (gross) for LPs to receive 3x their $50m? (c) If you own 8% of your best company at exit, what exit value would return the whole fund on its own?`,
        hints: ['Fees = 2% × 50m × 10.', 'LPs first get their $50m back; then they receive 80% of profits.', 'Return-the-fund exit = fund size ÷ ownership.'],
        model: `<p><b>(a)</b> Fees = 2% × 50m × 10 = $10m → <b>$40m</b> investable. Note the plan does not fit: 20 × $2m = $40m uses everything, leaving nothing for follow-ons. Seed funds often reserve roughly half for follow-ons, so either write 20 initial cheques of about $1m, or 10–12 cheques of $2m, keeping around $20m of reserves.</p><p><b>(b)</b> LPs need $150m. Let D = total distributions. LPs get $50m back plus 80% of profit: 50 + 0.8 × (D − 50) = 150 → 0.8 × (D − 50) = 100 → D − 50 = 125 → <b>D = $175m</b>. That is 3.5x the $50m fund and about 4.4x the $40m actually invested. The GP earns 20% × 125 = $25m carry.</p><p><b>(c)</b> 50 ÷ 0.08 = <b>$625m</b> exit value to return the fund once. To get close to $175m from one company you would need about a $2.2bn exit at 8%.</p><p><b>Implication</b>: you must back companies that can plausibly reach a billion-dollar-plus outcome, and you must protect ownership in the winners with your follow-on reserves.</p>`
      },
      takeaways: [
        'VCs invest LPs\' money and earn fees plus carry.',
        'The power law forces VCs to chase outcomes big enough to return the fund.',
        'Each stage needs a different level of proof.',
        'A great business can still be the wrong fit for venture capital.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'investment-3',
      title: 'Valuation: DCF, comparables and the VC method',
      level: 'Intermediate',
      minutes: 18,
      hook: `Facebook paid $1 billion for a 13-person company with no revenue — valuation is part science, part story, and you need to speak both.`,
      eli5: `How much is a house worth? You could estimate all the rent it will earn in the future and shrink that back to today (DCF). Or you could look at what similar houses on the street sold for (comparables). For a brand-new startup with no rent yet, investors guess what it might sell for one day and work backwards (the VC method).`,
      blocks: [
        {
          type: 'compare', title: 'Four ways to value a company', headers: ['Method', 'How it works', 'Best for', 'Main weakness'],
          rows: [
            ['DCF', 'Forecast free cash flows and discount them at WACC, plus a terminal value', 'Mature firms with predictable cash flows', 'Very sensitive to growth and discount-rate assumptions'],
            ['Trading comparables', 'Apply peer multiples (EV/EBITDA, EV/Revenue, P/E) from listed companies', 'Any company with listed peers', 'Assumes the market prices peers correctly'],
            ['Precedent transactions', 'Multiples paid in past acquisitions of similar firms', 'M&A pricing', 'Includes control premiums; old deals may not reflect today\'s market'],
            ['VC method', 'Estimate exit value, divide by target return multiple, adjust for dilution', 'Early-stage startups', 'Exit value is a guess; highly negotiable']
          ]
        },
        {
          type: 'formula', name: 'DCF with a terminal value',
          expr: 'Value = Σ FCFt ÷ (1 + WACC)^t + TV ÷ (1 + WACC)^n;  TV = FCF(n+1) ÷ (WACC − g)',
          explain: 'Forecast 5–10 years explicitly, then use the Gordon growth formula for everything after. The terminal value is often more than half of the total — so test it carefully. Enterprise value − net debt = equity value.',
          example: `Next year\'s FCF beyond the forecast = $10m × 1.03 = $10.3m; WACC 9%, long-term growth 3% → TV = 10.3 ÷ 0.06 ≈ <b>$171.7m</b> at the end of the forecast, which you then discount back to today.`
        },
        {
          type: 'formula', name: 'The VC method',
          expr: 'Post-money = Exit value × Retention ÷ Target multiple;  Pre-money = Post-money − Investment',
          explain: 'Retention is the share of ownership left after future rounds dilute this investor. Early-stage VCs often target 10x or more because most deals fail.',
          example: `Exit value in 6 years $200m, target 10x, expected retention 60% → post-money = 200 × 0.6 ÷ 10 = <b>$12m</b>. Investing $3m → pre-money $9m, ownership 25%.`
        },
        {
          type: 'interactive', widget: 'valuation', title: 'Multiples and pre/post money',
          note: 'Apply a 6x and then a 10x revenue multiple to the same company. See how the pre-money and investor ownership change for a fixed raise.'
        },
        {
          type: 'interactive', widget: 'npv', title: 'Mini DCF',
          note: 'Enter five years of free cash flow and a final year that includes the terminal value. Move the discount rate by 1 point and watch value swing.'
        },
        {
          type: 'case', company: 'Facebook / Instagram', year: '2012', title: '$1 billion for 13 employees',
          situation: `Instagram had around 30 million users, was growing very fast on mobile, and had about 13 employees and no revenue. Facebook was preparing for its IPO and was weak on mobile.`,
          decision: `In April 2012 Mark Zuckerberg agreed to buy Instagram for about $1 billion in cash and stock — roughly double its most recent private valuation — negotiating largely in person over a weekend.`,
          outcome: `Instagram grew to well over a billion users and became one of Meta\'s most important businesses, widely viewed as one of the best acquisitions in tech. It later became central to US antitrust claims that Facebook bought potential rivals.`,
          lesson: `Strategic value (defending a core business, owning the future platform) can justify prices no DCF of the target alone would support. Buyers value what the asset is worth <i>to them</i>.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Valuation traps',
          html: `<ul><li>Using revenue multiples from 2021 peaks — software multiples fell sharply in 2022.</li><li>Comparing companies with very different growth, margins or revenue quality.</li><li>Confusing enterprise value (whole business) with equity value (after debt and cash).</li><li>Forgetting that headline valuations with heavy liquidation preferences overstate what common shares are worth.</li></ul>`
        }
      ],
      terms: [
        { term: 'Enterprise value (EV)', def: 'The value of the whole business: equity value plus net debt.' },
        { term: 'Equity value', def: 'What the shares are worth: enterprise value minus net debt.' },
        { term: 'Terminal value', def: 'The value of all cash flows beyond the explicit forecast period.' },
        { term: 'EV/EBITDA multiple', def: 'Enterprise value divided by EBITDA; a common valuation ratio.' },
        { term: 'Control premium', def: 'The extra an acquirer pays over the market price to gain control.' },
        { term: 'Pre-money valuation', def: 'The value of a company before new investment.' },
        { term: 'Post-money valuation', def: 'Pre-money valuation plus the new investment.' }
      ],
      quiz: [
        {
          q: 'A company has EBITDA of $20m. Peers trade at 8x EV/EBITDA. It has $40m of debt and $10m of cash. What is the implied equity value?',
          options: ['$160m', '$190m', '$200m', '$130m'],
          answer: 3,
          explain: 'EV = 8 × 20 = $160m. Net debt = 40 − 10 = $30m. Equity = 160 − 30 = $130m.'
        },
        {
          q: 'Using the Gordon growth formula, next year\'s FCF is $5m, WACC 10%, growth 2%. What is the terminal value?',
          options: ['$62.5m', '$50m', '$41.7m', '$250m'],
          answer: 0,
          explain: 'TV = 5 ÷ (0.10 − 0.02) = 5 ÷ 0.08 = $62.5m.'
        },
        {
          q: 'VC method: expected exit $300m, target 10x, no further dilution. What is the maximum post-money valuation?',
          options: ['$3m', '$30m', '$300m', '$10m'],
          answer: 1,
          explain: '300 ÷ 10 = $30m post-money.'
        },
        {
          q: 'Which method includes a control premium?',
          options: ['Trading comparables', 'Gordon growth', 'Precedent transactions', 'Book value'],
          answer: 2,
          explain: 'Precedent acquisitions reflect prices paid for control, usually above trading prices.'
        },
        {
          q: 'Why might Facebook rationally pay $1bn for Instagram with no revenue?',
          options: ['DCF of Instagram\'s own revenue justified it', 'Its strategic value to Facebook\'s mobile future and defence against a rival', 'Accounting rules required it', 'Instagram had large cash reserves'],
          answer: 1,
          explain: 'The value was strategic: owning a fast-growing mobile platform and preventing a competitor.'
        }
      ],
      challenge: {
        title: 'Price the Series A',
        prompt: `A B2B software startup has $5m ARR. Its plan shows $50m of revenue in year 5. Listed peers growing 20–30% trade at about 6x revenue. A VC wants to invest $6m, targets a 10x return, and expects 40% dilution from later rounds before exit.<br><br>(a) Estimate the exit value. (b) Use the VC method to find the post-money and pre-money. (c) What ownership would the VC take, and how might the founders respond?`,
        hints: ['Exit value = year-5 revenue × peer multiple.', 'Retention = 1 − 40%.', 'Ownership = investment ÷ post-money.'],
        model: `<p><b>(a)</b> Exit value = $50m × 6 = <b>$300m</b>.</p><p><b>(b)</b> Post-money = 300 × 0.6 ÷ 10 = <b>$18m</b>; pre-money = 18 − 6 = <b>$12m</b> (2.4x current ARR).</p><p><b>(c)</b> Ownership = 6 ÷ 18 = <b>33%</b> — high for one round (Series A leads commonly take roughly 15–25%). Founder responses: (1) challenge the exit assumptions — if the company still grows fast in year 5, an 8–10x multiple may be justified (exit $400–500m → post-money $24–30m); (2) raise less, e.g. $4m, to reach the next milestone; (3) show evidence that lowers risk (NRR, pipeline) to justify a lower target multiple. A balanced outcome might be $6m at $24m post (25%).</p>`
      },
      takeaways: [
        'Use several methods and triangulate; no single number is "the" value.',
        'DCF is driven by growth, margins, discount rate and terminal value.',
        'Startup valuation works backwards from a plausible exit.',
        'Strategic buyers value what an asset is worth to them.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'investment-4',
      title: 'Term sheets: SAFEs, preferences and the fine print',
      level: 'Advanced',
      minutes: 18,
      hook: `A higher valuation can leave founders with less money at exit — the terms matter more than the headline number.`,
      eli5: `Imagine selling a share of your treehouse to a friend for $10. They say: "Fine, but if we ever sell the treehouse, I get my $10 back first." That rule is called a liquidation preference. If the treehouse sells for $15, they take $10 and you split the rest. Term sheets are full of rules like this, and each one changes who gets what.`,
      blocks: [
        {
          type: 'compare', title: 'SAFE vs convertible note vs priced round', headers: ['', 'SAFE', 'Convertible note', 'Priced equity round'],
          rows: [
            ['What it is', 'Right to future equity; not debt', 'A loan that converts into equity', 'Shares bought at a set price'],
            ['Interest / maturity', 'None', 'Interest accrues; has a maturity date', 'N/A'],
            ['Valuation', 'Valuation cap and/or discount', 'Cap and/or discount', 'Negotiated pre-money'],
            ['Speed and cost', 'Fast, cheap (standard YC documents)', 'Fairly fast', 'Slower, more legal cost'],
            ['Typical stage', 'Pre-seed and seed', 'Seed, bridges', 'Seed (sometimes), Series A onwards']
          ]
        },
        {
          type: 'formula', name: 'Post-money SAFE ownership',
          expr: 'Ownership at conversion ≈ SAFE amount ÷ Post-money valuation cap',
          explain: 'Y Combinator introduced the SAFE in 2013 and the post-money SAFE in 2018. With a post-money cap, the investor\'s percentage is fixed before the priced round, so founders absorb dilution from every additional SAFE.',
          example: `$500k on a $5m post-money cap → the investor owns <b>10%</b> just before the next priced round (then diluted by that round like everyone else). Three such SAFEs = 30% gone.`
        },
        {
          type: 'framework', name: 'The key terms', by: 'Standard venture term sheet (e.g. NVCA model documents)', when: 'Negotiating any priced round',
          steps: [
            { label: 'Valuation and option pool', desc: 'Pre-money valuation and the size of the employee option pool. If the pool is created inside the pre-money (the "option pool shuffle"), founders bear all of its dilution.' },
            { label: 'Liquidation preference', desc: 'On a sale, preferred investors get their money back first. 1x non-participating is market standard: investors take the greater of their money back or their share as if converted.' },
            { label: 'Participation', desc: 'Participating preferred gets its money back AND its share of the rest ("double dip"). Much less founder-friendly.' },
            { label: 'Anti-dilution', desc: 'Protects investors in a down round. Broad-based weighted average is standard and mild; full ratchet resets their price to the new lower price and is harsh.' },
            { label: 'Pro-rata rights', desc: 'The right to invest in future rounds to keep the same ownership percentage.' },
            { label: 'Vesting', desc: 'Founder and employee shares typically vest over 4 years with a 1-year cliff, so departing co-founders do not keep everything.' },
            { label: 'Board and protective provisions', desc: 'Board composition and investor veto rights over key decisions (new share classes, sale of the company, more debt).' }
          ]
        },
        {
          type: 'formula', name: 'Liquidation preference payout',
          expr: 'Non-participating: Investor gets max(Preference, Ownership × Exit);  Participating: Preference + Ownership × (Exit − Preference)',
          explain: 'The preference matters most in modest exits; in big exits non-participating investors convert to common.',
          example: `Investor put $10m for 25%. Exit at $20m: non-participating takes $10m (more than 25% × 20 = $5m); participating takes 10 + 25% × 10 = $12.5m. Exit at $100m: non-participating converts → $25m; participating gets 10 + 25% × 90 = $32.5m.`
        },
        {
          type: 'formula', name: 'The option pool shuffle',
          expr: 'Effective pre-money = Headline pre-money − Value of new pool',
          explain: 'If a 20% post-money pool must be created before the investment, its value comes out of the founders\' side of the table.',
          example: `$8m pre-money, $2m investment, 20% pool in the post-money ($10m). Pool value = $2m, so the effective pre-money for existing holders is <b>$6m</b>.`
        },
        {
          type: 'case', company: 'Y Combinator SAFE', year: '2013–2018', title: 'Standardising the seed round',
          situation: `Seed rounds were often done with convertible notes, which carry interest and maturity dates and can create pressure if they come due before a priced round.`,
          decision: `Y Combinator published the SAFE (simple agreement for future equity) in 2013 as a free, standard document, and in 2018 switched to a post-money SAFE so that both sides know exactly how much ownership is being sold.`,
          outcome: `SAFEs became the dominant instrument for pre-seed and seed rounds in the US and spread internationally. The downside: founders who stack many SAFEs can be surprised by how much they have sold when the priced round arrives.`,
          lesson: `Simple documents speed up fundraising, but always model the cap table as if every SAFE has converted.`
        },
        {
          type: 'scenario',
          prompt: `Two term sheets: A at a $30m pre-money with 2x participating preference and full-ratchet anti-dilution; B at a $24m pre-money with 1x non-participating and broad-based weighted average. Both raise $6m. What do you tell your co-founder?`,
          options: [
            { text: 'Take A — the valuation is 25% higher.', feedback: 'The headline is higher, but A\'s terms take far more value in most realistic exits and punish you in any down round.', good: false },
            { text: 'Model both across exit scenarios; B is likely better unless the exit is very large.', feedback: 'Correct. Clean terms usually beat a vanity valuation. Show the waterfall at several exit values before deciding.', good: true },
            { text: 'Take whichever investor responds faster.', feedback: 'Speed matters, but not more than a 2x participating preference.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Term sheet', def: 'A mostly non-binding summary of the key terms of an investment.' },
        { term: 'SAFE', def: 'Simple agreement for future equity: a right to shares in a future priced round, usually with a valuation cap.' },
        { term: 'Convertible note', def: 'A short-term loan that converts into equity in a future round, usually at a discount or cap.' },
        { term: 'Liquidation preference', def: 'The right of preferred shareholders to be paid before common shareholders in a sale or wind-down.' },
        { term: 'Anti-dilution', def: 'Adjusts an investor\'s conversion price if shares are later sold at a lower price.' },
        { term: 'Pro-rata right', def: 'The right to invest in future rounds to maintain ownership percentage.' },
        { term: 'Vesting cliff', def: 'The period (often 1 year) before any shares vest; leave earlier and you get nothing.' },
        { term: 'Option pool', def: 'Shares reserved for future employee equity grants.' }
      ],
      quiz: [
        {
          q: 'An angel invests $300k on a $6m post-money SAFE cap. What ownership do they have just before the priced round?',
          options: ['3%', '6%', '5%', '4.8%'],
          answer: 2,
          explain: '300k ÷ 6m = 5%.'
        },
        {
          q: 'An investor owns 20% with a $5m 1x non-participating preference. The company sells for $15m. What does the investor receive?',
          options: ['$3m', '$5m', '$8m', '$15m'],
          answer: 1,
          explain: 'Max($5m preference, 20% × 15 = $3m) = $5m.'
        },
        {
          q: 'Same investor, but participating preferred. What do they receive at a $15m exit?',
          options: ['$7m', '$5m', '$3m', '$8m'],
          answer: 0,
          explain: '$5m + 20% × (15 − 5) = 5 + 2 = $7m.'
        },
        {
          q: 'Which anti-dilution protection is most founder-friendly?',
          options: ['Full ratchet', 'Participating ratchet', 'No vesting', 'Broad-based weighted average'],
          answer: 3,
          explain: 'Broad-based weighted average adjusts the price only partially and considers the size of the down round.'
        },
        {
          q: 'A founder with a 4-year vest and 1-year cliff leaves after 10 months. How much has vested?',
          options: ['25%', 'None', '10/48 of their shares', '50%'],
          answer: 1,
          explain: 'Nothing vests before the 1-year cliff; at 12 months 25% vests at once.'
        }
      ],
      challenge: {
        title: 'Compare two term sheets',
        prompt: `You are raising $5m. <br>Offer A: $20m pre-money, 2x participating liquidation preference.<br>Offer B: $16m pre-money, 1x non-participating preference.<br>Assume no other preferred shares and no option pool changes.<br><br>(a) What % does the investor own under each? (b) What do common shareholders receive at a $40m exit and at a $200m exit under each? (c) Which do you choose?`,
        hints: ['Ownership = 5 ÷ post-money.', 'A: investor takes 2 × $5m first, then its % of the rest.', 'B: investor takes the greater of $5m or its % of the exit.'],
        model: `<p><b>(a)</b> A: post $25m → 5 ÷ 25 = <b>20%</b>. B: post $21m → 5 ÷ 21 ≈ <b>23.8%</b>.</p><p><b>(b) Exit $40m</b></p><ul><li>A: investor gets 10 + 20% × (40 − 10) = 10 + 6 = $16m → common gets <b>$24m</b>.</li><li>B: investor gets max(5, 23.8% × 40 = 9.52) = $9.52m → common gets <b>$30.48m</b>.</li></ul><p><b>Exit $200m</b></p><ul><li>A: 10 + 20% × 190 = 10 + 38 = $48m → common <b>$152m</b>.</li><li>B: converts: 23.8% × 200 ≈ $47.62m → common <b>$152.38m</b>.</li></ul><p><b>(c)</b> Choose <b>B</b>. Despite the lower headline valuation, founders get more at both exit values — $6.5m more at $40m — and the gap is largest in the most likely, modest outcomes. A\'s "higher valuation" is an illusion created by the 2x participating preference. If you prefer A\'s investor, counter with A\'s valuation and B\'s terms.</p>`
      },
      takeaways: [
        'Model terms, not just the valuation — run the exit waterfall.',
        '1x non-participating preference and broad-based weighted average are market-standard.',
        'Post-money SAFEs fix the investor\'s % — stack them carefully.',
        'Watch the option pool shuffle; it lowers your effective pre-money.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'investment-5',
      title: 'Cap tables, pitch decks, the investor process and due diligence',
      level: 'Advanced',
      minutes: 17,
      hook: `Founders who own 50% at the start can own under 15% by IPO — and the ones who run a tight process keep more of it.`,
      eli5: `A cap table is like a pizza chart showing who owns which slice of the company. Every time new investors join, the pizza gets bigger (more total value, hopefully), but everyone\'s slice becomes a smaller share. Fundraising is like holding auditions: a clear story, several interested people at the same time, and honest answers when they check your homework.`,
      blocks: [
        {
          type: 'formula', name: 'Dilution through rounds',
          expr: 'Ownership after round = Ownership before × (1 − % sold in the round)',
          explain: 'Each round (and each option pool top-up) multiplies everyone\'s existing stake by the share they keep.',
          example: `Two founders own 50% each. Seed sells 20% → each 40%. Series A sells 20% and adds a 10% pool → existing holders keep 70% → each founder 28%. Series B sells 15% → each founder about <b>23.8%</b>.`
        },
        {
          type: 'interactive', widget: 'cap-table', title: 'Model your cap table',
          note: 'Add a seed, Series A and Series B. Then try raising the Series A pool from 10% to 15% and watch founder ownership drop.'
        },
        {
          type: 'framework', name: 'A classic pitch deck flow', by: 'Adapted from Sequoia Capital\'s widely shared business plan guidance', when: 'Building a 10–15 slide investor deck',
          steps: [
            { label: 'Purpose and problem', desc: 'One sentence on what you do; a painful, specific problem for a specific customer.' },
            { label: 'Solution and why now', desc: 'Your product and the change (technology, regulation, behaviour) that makes it possible now.' },
            { label: 'Market size', desc: 'Bottom-up TAM/SAM/SOM with credible assumptions.' },
            { label: 'Traction and business model', desc: 'Revenue, growth, retention, unit economics. Lead with your strongest evidence.' },
            { label: 'Competition and moat', desc: 'Honest landscape and why you will win.' },
            { label: 'Team', desc: 'Why this team is uniquely able to execute.' },
            { label: 'The ask', desc: 'How much, what milestones it buys, and runway to the next round.' }
          ]
        },
        {
          type: 'timeline', title: 'Running a fundraising process',
          items: [
            { label: 'Weeks −8 to −4', desc: 'Prepare: data room, metrics, model, deck; build a target list of 40–80 investors ranked by fit; get warm introductions.' },
            { label: 'Weeks 1–2', desc: 'Compress first meetings into a short window so investors move in parallel.' },
            { label: 'Weeks 3–5', desc: 'Partner meetings, customer calls, deeper data requests.' },
            { label: 'Weeks 5–7', desc: 'Term sheets; use competition to improve terms; choose the partner, not just the price.' },
            { label: 'Weeks 7–12', desc: 'Confirmatory due diligence, legal documents, closing and wiring of funds.' }
          ]
        },
        {
          type: 'checklist', title: 'Due diligence data room',
          items: ['Incorporation documents and cap table (fully diluted, reconciled)', 'Signed IP assignments from all founders, employees and contractors', 'Customer contracts and top-customer concentration', 'Monthly financials, bank statements, ARR and cohort data', 'Financial model with assumptions', 'Employment agreements, option grants and board approvals', 'Litigation, regulatory and data-protection compliance', 'Security and AI-model/data licensing documentation']
        },
        {
          type: 'case', company: 'Theranos', year: '2003–2022', title: 'What happens when diligence is skipped',
          situation: `Theranos claimed its device could run many blood tests from a finger-prick. It raised hundreds of millions of dollars and reached a reported valuation of about $9 billion.`,
          decision: `The company refused to share detailed technical data, citing secrecy. Many investors relied on its prominent board and partnerships instead of independent scientific validation.`,
          outcome: `Reporting by John Carreyrou of the Wall Street Journal from 2015 showed the technology did not work as claimed. The company dissolved in 2018 and founder Elizabeth Holmes was convicted of defrauding investors in 2022.`,
          lesson: `For investors: verify the core claim independently, whatever the hype. For founders: transparency in diligence builds trust — and lying to investors is a crime.`
        },
        {
          type: 'flip', title: 'Investor process rules of thumb',
          cards: [
            { front: 'When to start raising?', back: 'With at least 9–12 months of runway; a raise often takes 3–6 months.' },
            { front: 'How much to raise?', back: 'Enough for 18–24 months to hit the milestones that justify the next round, with a buffer.' },
            { front: 'Typical dilution per round?', back: 'Very roughly 15–25% per priced round, though it varies widely by market and stage.' },
            { front: 'Most important term besides price?', back: 'Who your lead investor is — you are choosing a board member for years.' }
          ]
        }
      ],
      terms: [
        { term: 'Cap table', def: 'A table listing every shareholder, security and option, and their ownership.' },
        { term: 'Fully diluted', def: 'Counting all shares, options, warrants and convertibles as if exercised or converted.' },
        { term: 'Dilution', def: 'The reduction in existing holders\' ownership percentage when new shares are issued.' },
        { term: 'Lead investor', def: 'The investor who sets the terms and usually invests the most in a round.' },
        { term: 'Data room', def: 'A secure folder of documents investors review during due diligence.' },
        { term: 'Due diligence', def: 'The investigation investors carry out to verify claims before investing.' },
        { term: 'Price per share', def: 'Pre-money valuation divided by the fully diluted pre-money share count.' }
      ],
      quiz: [
        {
          q: 'A founder owns 60%. The company sells 25% in a new round. What does the founder own afterwards?',
          options: ['35%', '48%', '45%', '40%'],
          answer: 2,
          explain: '60% × (1 − 0.25) = 45%.'
        },
        {
          q: 'Pre-money valuation $12m; fully diluted pre-money shares 10 million. What is the price per share?',
          options: ['$0.83', '$1.20', '$12', '$1.00'],
          answer: 1,
          explain: '$12m ÷ 10m shares = $1.20.'
        },
        {
          q: 'At that price, how many new shares does a $3m investment buy, and what % is that?',
          options: ['2.5m shares, 20%', '3m shares, 23%', '2.5m shares, 25%', '2m shares, 20%'],
          answer: 0,
          explain: '3m ÷ 1.20 = 2.5m shares; 2.5 ÷ 12.5m total = 20% (= 3 ÷ 15 post-money).'
        },
        {
          q: 'Why do experienced founders compress investor meetings into a short window?',
          options: ['To save travel cost', 'To create parallel interest and competition, improving terms and speed', 'Because investors require it', 'To avoid due diligence'],
          answer: 1,
          explain: 'Investors move faster and offer better terms when they know others are interested.'
        },
        {
          q: 'Which item missing from a data room most often delays or kills a deal at the diligence stage?',
          options: ['A logo file', 'Office photos', 'Signed IP assignment agreements', 'Marketing plan'],
          answer: 2,
          explain: 'If the company does not clearly own its IP, investors cannot invest safely.'
        }
      ],
      challenge: {
        title: 'Model the Series A cap table',
        prompt: `Two co-founders hold 8,000,000 shares (4m each). A seed investor holds a post-money SAFE that converts to exactly 10% of the company just before the Series A. The Series A raises $6m at a $24m pre-money valuation and requires a 10% post-money option pool to be created in the pre-money.<br><br>(a) What % does each holder own after the Series A? (b) How many total shares exist, and what is the price per share? (c) What is the founders\' "effective" pre-money?`,
        hints: ['Before the A: founders 90%, SAFE 10%.', 'After the A: Series A 6 ÷ 30 = 20%, pool 10%, existing holders 70%.', 'Price per share = pre-money ÷ pre-money fully diluted shares (incl. pool).'],
        model: `<p><b>(a) Ownership</b></p><ul><li>Post-money = 24 + 6 = $30m; Series A = 6 ÷ 30 = <b>20%</b>.</li><li>New pool = <b>10%</b>.</li><li>Existing holders keep 70%: founders 90% × 70% = <b>63%</b> (31.5% each); SAFE 10% × 70% = <b>7%</b>.</li></ul><p><b>(b) Shares</b>: before the A, founders' 8m = 90% → total 8,888,889; SAFE = 888,889 shares. These are 70% after the round → total = 8,888,889 ÷ 0.7 ≈ <b>12,698,413</b> shares. Pre-money fully diluted shares (all but Series A) = 80% ≈ 10,158,730. Price = 24,000,000 ÷ 10,158,730 ≈ <b>$2.36</b>. Series A shares ≈ 6m ÷ 2.3625 ≈ 2,539,683 (20%); pool ≈ 1,269,841 (10%).</p><p><b>(c)</b> The headline pre-money is $24m, but the pool ($3m of value) sits inside it. Existing holders\' stake is worth 70% × $30m = <b>$21m</b>, so the effective pre-money for founders and the SAFE is $21m. Negotiation tip: size the pool to a real 18-month hiring plan (perhaps 7%, not 10%) or ask for part of it to be created post-money.</p>`
      },
      takeaways: [
        'Every round multiplies your ownership by (1 − % sold).',
        'Tell a tight story: problem, why now, traction, team, ask.',
        'Run a compressed, parallel process with 9–12 months of runway left.',
        'Keep a clean data room; transparency in diligence builds trust.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'investment-6',
      title: 'Exits, IPOs and investing basics for operators',
      level: 'Advanced',
      minutes: 17,
      hook: `WeWork went from a $47 billion private valuation to a cancelled IPO in about six weeks — the exit is where every assumption gets tested in public.`,
      eli5: `Owning shares in a private company is like owning part of a house you are not allowed to sell yet. An exit is the moment you can finally sell: either another company buys the whole house (acquisition), or the house is listed so anyone can buy pieces of it (IPO). And with your own savings, the boring advice usually wins: buy a little of everything and wait a long time.`,
      blocks: [
        {
          type: 'compare', title: 'Exit routes', headers: ['Route', 'How it works', 'Pros', 'Cons'],
          rows: [
            ['Trade sale (M&A)', 'A company buys yours for cash or stock', 'Most common exit; can include a strategic premium', 'Loss of independence; earn-outs and retention terms'],
            ['Private equity buyout', 'A PE fund buys control, often with debt', 'Liquidity for mature, profitable firms', 'High leverage; cost pressure'],
            ['IPO', 'Shares sold to the public on a stock exchange', 'Raises capital, liquidity, profile', 'Expensive, slow, quarterly scrutiny, lock-ups'],
            ['Direct listing', 'Existing shares listed without raising new money (e.g. Spotify 2018)', 'No underwriting discount', 'No new capital in the classic form; needs a well-known brand'],
            ['SPAC merger', 'A listed shell company merges with a private one', 'Faster route to listing', 'Many 2020–21 SPAC deals performed poorly'],
            ['Secondary sale / tender offer', 'Existing shares sold to new investors while staying private', 'Liquidity for employees and early investors', 'Usually at a discount; needs company approval']
          ]
        },
        {
          type: 'case', company: 'WeWork', year: '2019–2023', title: 'The IPO that collapsed',
          situation: `WeWork leased office space long-term and rented it out short-term. Backed heavily by SoftBank, it reached a private valuation of about $47 billion in early 2019 while losing large amounts of money.`,
          decision: `It filed for an IPO in August 2019. The prospectus revealed heavy losses, complex governance giving co-founder Adam Neumann outsized control, and related-party dealings.`,
          outcome: `Public investors balked; discussed valuations fell dramatically, Neumann stepped down as CEO and the IPO was withdrawn in September 2019. SoftBank led a rescue. WeWork later listed via a SPAC in 2021 at a far lower valuation and filed for bankruptcy in November 2023.`,
          lesson: `Private valuations are not prices. Public markets test unit economics and governance; long-term liabilities funded by short-term revenue are fragile.`
        },
        {
          type: 'case', company: 'Flipkart and Walmart', year: '2018', title: 'A landmark strategic acquisition',
          situation: `Flipkart, founded in 2007 by Sachin Bansal and Binny Bansal, was a leading Indian e-commerce company competing fiercely with Amazon.`,
          decision: `In May 2018 Walmart agreed to buy roughly 77% of Flipkart for about $16 billion — then its largest-ever acquisition — to gain a strong position in India\'s fast-growing online retail market.`,
          outcome: `Early investors and many employees with stock options received significant liquidity, and the deal was seen as validating India\'s startup ecosystem. Walmart has since continued to invest, with Flipkart widely expected to pursue an Indian IPO.`,
          lesson: `Strategic buyers pay for market position they cannot easily build. A credible competitive alternative (Amazon was also interested) strengthens your negotiating hand.`
        },
        {
          type: 'formula', name: 'Exit waterfall (simplified)',
          expr: 'Proceeds → (1) Debt → (2) Liquidation preferences → (3) Remaining to common and converted preferred',
          explain: 'Each preferred investor chooses whether to take its preference or convert. Management carve-outs and transaction fees come off the top too.',
          example: `Exit $60m; investors invested $25m with 1x non-participating and own 40%. Converting would give 40% × 60 = $24m < $25m, so they take <b>$25m</b>. Common gets <b>$35m</b>. At a $120m exit they convert: $48m vs common $72m.`
        },
        {
          type: 'framework', name: 'Investing basics for operators', by: 'Modern portfolio theory (Markowitz, 1952); index investing (John Bogle, Vanguard, 1976)', when: 'Managing your own savings and any windfall from an exit',
          steps: [
            { label: 'Risk and return go together', desc: 'Higher expected return requires accepting more volatility. Cash < bonds < stocks < private companies.' },
            { label: 'Diversify', desc: 'Owning many assets reduces risk without necessarily reducing expected return. Your startup equity is already a concentrated bet.' },
            { label: 'Keep costs low', desc: 'Low-cost index funds track the whole market. Over long periods, most actively managed funds fail to beat their index after fees.' },
            { label: 'Time in the market', desc: 'Compounding rewards patience; trying to time the market usually costs returns.' },
            { label: 'Match assets to goals', desc: 'Money needed within a few years should not be in volatile assets.' }
          ]
        },
        {
          type: 'interactive', widget: 'compound', title: 'Compounding your exit proceeds',
          note: '$10,000 at 7% a year for 30 years grows to about $76,000. Compare with 5% and 9% — small rate differences (and fees) compound into large gaps.'
        },
        {
          type: 'callout', kind: 'tip', title: 'Before you sign an acquisition',
          html: `<ul><li>Run a competitive process — one bidder means little leverage.</li><li>Model the full waterfall; know what <i>you</i> and your employees actually take home.</li><li>Scrutinise earn-outs, escrows and retention packages, not just the headline price.</li><li>Get tax advice early — structure can change after-tax proceeds significantly.</li></ul>`
        }
      ],
      terms: [
        { term: 'Exit', def: 'An event that lets shareholders sell their stake: an acquisition, IPO or secondary sale.' },
        { term: 'IPO', def: 'Initial public offering: the first sale of a company\'s shares to the public on an exchange.' },
        { term: 'Lock-up', def: 'A period after an IPO (often around 180 days) when insiders cannot sell shares.' },
        { term: 'Earn-out', def: 'Part of the acquisition price paid later only if performance targets are met.' },
        { term: 'Secondary sale', def: 'Selling existing shares to another investor; the company raises no new money.' },
        { term: 'Index fund', def: 'A low-cost fund that holds all the securities in a market index.' },
        { term: 'Diversification', def: 'Spreading investments to reduce the impact of any one failing.' }
      ],
      quiz: [
        {
          q: 'Investors hold a $30m 1x non-participating preference and own 25%. Exit at $100m. What do they take?',
          options: ['$25m', '$55m', '$30m', '$47.5m'],
          answer: 2,
          explain: 'Max($30m, 25% × 100 = $25m) = $30m. They keep the preference.'
        },
        {
          q: 'Same investors, exit at $200m. What do they take?',
          options: ['$30m', '$80m', '$42.5m', '$50m'],
          answer: 3,
          explain: '25% × 200 = $50m > $30m, so they convert to common and take $50m.'
        },
        {
          q: '$10,000 invested at 7% a year roughly doubles in how many years (Rule of 72)?',
          options: ['About 10 years', 'About 7 years', 'About 14 years', 'About 20 years'],
          answer: 0,
          explain: '72 ÷ 7 ≈ 10.3 years.'
        },
        {
          q: 'What was the core lesson of WeWork\'s failed 2019 IPO?',
          options: ['IPOs are always a bad idea', 'Private valuations can be far above what public investors will pay once economics and governance are disclosed', 'SoftBank should have invested more', 'Office space is never profitable'],
          answer: 1,
          explain: 'The prospectus exposed losses and governance problems; the private valuation did not hold up.'
        },
        {
          q: 'A founder receives $5m from an exit. Which approach best follows investing basics?',
          options: ['Put it all into one hot stock', 'Keep it all in cash forever', 'Diversify into low-cost index funds aligned with time horizon, keeping a cash reserve', 'Invest it all in a friend\'s startup'],
          answer: 2,
          explain: 'Diversification, low costs and matching assets to goals are the core principles.'
        }
      ],
      challenge: {
        title: 'Take the acquisition offer?',
        prompt: `Your startup has an acquisition offer of $60m in cash. Investors put in $25m total with 1x non-participating preferences and own 40% fully diluted. You own 20% fully diluted; employees and other common holders own the remaining 40%. Your board believes that with $15m more funding and two more years, the company could sell for $120m — but there is perhaps a 50% chance it ends up worth only about $30m.<br><br>(a) How is $60m split today? (b) What would you personally receive at $60m, $120m and $30m (ignore further dilution)? (c) What is your expected value of waiting, and what do you recommend?`,
        hints: ['At each exit value, check whether investors take their preference or convert.', 'If investors take the preference, common holders share what is left in proportion to their common shares.', 'Expected value = 50% × outcome A + 50% × outcome B.'],
        model: `<p><b>(a) $60m today</b>: converting gives investors 40% × 60 = $24m, less than $25m, so they take the <b>$25m</b> preference. Common gets $35m, shared between you (20) and other common (40): you get 20 ÷ 60 × 35 ≈ <b>$11.67m</b>; other common ≈ $23.33m.</p><p><b>(b)</b></p><ul><li>$120m: investors convert (40% × 120 = $48m > $25m). You get 20% × 120 = <b>$24m</b>.</li><li>$30m: investors take the $25m preference; common shares $5m → you get 20 ÷ 60 × 5 ≈ <b>$1.67m</b>.</li></ul><p><b>(c)</b> Expected value of waiting = 0.5 × 24 + 0.5 × 1.67 ≈ <b>$12.8m</b> — only slightly above the certain $11.67m, before the extra dilution from raising $15m (which would reduce the $24m) and two more years of work and risk. A new preference of $15m would also make the $30m downside even worse for common.</p><p><b>Recommendation</b>: accept, unless you can run a competitive process quickly to push the price up. Use the board meeting to negotiate on terms (cash at close, limited earn-out, employee retention pool), and make sure employees understand their payout. Then diversify your proceeds rather than concentrating them.</p>`
      },
      takeaways: [
        'Exits are trade sales, PE buyouts, IPOs, direct listings, SPACs or secondaries.',
        'Run the waterfall — preferences decide who gets what in modest exits.',
        'Private valuations are tested by public markets and buyers.',
        'For your own money: diversify, keep costs low, stay invested for the long term.'
      ]
    }
  ]
});
