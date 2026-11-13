/* MBA Studio — Track 38: US Business & Government Contracting · Track 1 · Start & register */
MBA.addTrack({
  id: 'us-start',
  stage: 5,
  order: 38,
  title: 'US Business 1: Starting & registering a company',
  icon: '🗽',
  color: '#3b82f6',
  series: 'US Business & Government Contracting',
  part: 'Track 1 · Start & register',
  tagline: 'Go from idea to a legally formed, banked, licensed and protected US company, even from outside the US',
  summary: `A step-by-step guide to forming a business in the United States. You will learn who registers you where (state, IRS, city, USPTO, FinCEN, SAM.gov), how to choose an entity and a state, how to file the formation papers and issue founder stock, how to get an EIN and handle the federal identity rules for foreign owners, how to set up banking and books, which licences, permits and trademarks you need, and how a non-US (for example Indian) founder should structure, operate and stay compliant. It reflects research as of November 2026.`,
  outcomes: [
    'Map every federal, state and local registration a new US business needs, in the right order',
    'Choose between sole proprietorship, LLC, C-corp, S-corp election and other forms on liability, tax, fundraising and paperwork',
    'Pick a state of formation (home state, Delaware, Wyoming, Nevada, Texas) and estimate franchise taxes and foreign-qualification costs',
    'File the formation, adopt governing documents, issue founder stock and make a timely Section 83(b) election',
    'Get an EIN, understand the 2025–26 beneficial-ownership rules and the Form 5472 duty for foreign-owned LLCs, and set up banking, books, licences and a trademark',
    'Run a 90-day launch plan as a non-US founder, including flip structures, visas, treaty withholding and the reverse-flip trend'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'us-start-1',
      title: 'The US registration map: who registers you where',
      level: 'Beginner',
      minutes: 15,
      hook: `There is no single "register your company" office in the United States. A new business is stitched together from a state filing, a federal tax number, a few state tax accounts and a city licence, and missing one piece can quietly cost you penalties for years.`,
      eli5: `Think of starting a US business like moving into a new apartment building. The building manager (your <b>state</b>) gives you the keys and puts your name on the door. The national post office (the <b>IRS</b>) gives you a mailbox number so letters and taxes find you. The neighbourhood council (your <b>city or county</b>) checks that you are allowed to run a shop from that address. If you want to protect your shop's name everywhere in the country, you go to the national name registry (the <b>USPTO</b>). Each office only does its own job, so you have to visit each one.`,
      blocks: [
        {
          type: 'text', title: 'Three layers of government',
          html: `<p>The US is a federal system. That matters for business because <b>companies are created by states, not by the federal government</b>. There is no "US company"; there is a Delaware corporation, a Texas LLC or a California corporation.</p><ul><li><b>State layer:</b> the Secretary of State (or a Division of Corporations) creates your entity. The state revenue department handles sales tax and state income or franchise tax. The state labour or workforce agency handles unemployment insurance once you hire.</li><li><b>Federal layer:</b> the IRS gives you an Employer Identification Number (EIN) and taxes your income. The USPTO registers trademarks and patents. FinCEN collects beneficial-ownership data (now only from foreign companies registered in the US). SAM.gov registers you if you want to sell to the federal government.</li><li><b>Local layer:</b> cities and counties issue business licences, zoning approvals, health permits and sometimes local taxes.</li></ul><p>The order matters: you normally <span class="hl">form the entity first</span>, then get the EIN, then open the bank account, then register for state taxes and local licences.</p>`
        },
        {
          type: 'map', title: 'Who registers you where', center: 'Your US business',
          branches: [
            { label: 'Secretary of State', desc: 'Forms the LLC or corporation in your chosen state; also "foreign-qualifies" you in any other state where you do business. Annual reports and fees keep you in good standing.', children: ['Articles / certificate', 'Registered agent', 'Annual report'] },
            { label: 'IRS (federal tax)', desc: 'Issues the EIN (free) and receives your income-tax, payroll-tax and information returns. Elections such as S-corp status (Form 2553) are filed here.', children: ['EIN (Form SS-4)', 'Form 2553', 'Form 5472'] },
            { label: 'State revenue / tax department', desc: 'Sales-tax permit (seller\'s permit), state income or franchise tax account and state payroll withholding.', children: ['Seller\'s permit', 'Withholding account'] },
            { label: 'State labour / workforce agency', desc: 'Unemployment-insurance account when you hire; new-hire reporting; often workers\' compensation rules.', children: ['UI account', 'New-hire reporting'] },
            { label: 'City / county', desc: 'General business licence, zoning and occupancy, health or signage permits, local business taxes, and DBA (assumed-name) filings in some states.', children: ['Business licence', 'Zoning', 'DBA'] },
            { label: 'USPTO', desc: 'Federal trademark registration (brand names and logos) and patents. Optional but powerful.', children: ['Trademark', 'Patent'] },
            { label: 'FinCEN', desc: 'Beneficial-ownership (BOI) reports. Since 2025, US-formed companies are exempt; foreign companies registered to do business in a US state still report.', children: ['BOI report (foreign cos.)'] },
            { label: 'SBA and SAM.gov', desc: 'The SBA offers free advice, loan guarantees and small-business certifications. SAM.gov registration (free, gives a Unique Entity ID) is required to bid on most federal contracts.', children: ['SBA advisers', 'UEI', 'Certifications'] }
          ]
        },
        {
          type: 'flow', title: 'Master flowchart: from idea to open for business',
          when: 'Use this as your launch order. Later lessons zoom into each box.',
          steps: [
            { label: 'Decide entity type and owners', desc: 'Sole proprietor, LLC or C-corp? Who owns what percentage? (Lesson 2)' },
            { label: 'Will you raise venture capital or issue stock options?', kind: 'decision', desc: 'Investors almost always want a Delaware C-corp.', branches: [ { label: 'Yes', to: 'Delaware C-corp' }, { label: 'No', to: 'LLC in your home state is often simplest' } ] },
            { label: 'Choose the state and a registered agent', desc: 'Home state vs Delaware/Wyoming; you will need an agent with a street address in the formation state. (Lesson 3)' },
            { label: 'Check the name and file the formation', desc: 'Articles of organization (LLC) or certificate of incorporation (corporation) with the Secretary of State. (Lesson 4)' },
            { label: 'Adopt the operating agreement or bylaws; issue founder equity', desc: 'File any Section 83(b) election within 30 days of receiving restricted stock. (Lesson 4)' },
            { label: 'Get an EIN from the IRS', desc: 'Online if the responsible party has an SSN/ITIN; otherwise by phone, fax or mail. (Lesson 5)' },
            { label: 'Is the company foreign-formed or foreign-owned?', kind: 'decision', desc: 'Extra federal filings may apply.', branches: [ { label: 'Foreign-owned US single-member LLC', to: 'Form 5472 + pro forma 1120 each year' }, { label: 'Foreign entity registered in a state', to: 'FinCEN BOI report within 30 days' } ] },
            { label: 'Open a business bank account and set up books', desc: 'Keep personal and company money apart from day one. (Lesson 6)' },
            { label: 'Register for state taxes, foreign-qualify where needed, get local licences and insurance', desc: 'Sales tax, payroll accounts, city licence, zoning, insurance. (Lesson 7)' },
            { label: 'Open for business; diarise annual filings', desc: 'Annual reports, franchise taxes, registered-agent renewals and tax returns.' }
          ]
        },
        {
          type: 'compare', title: 'Typical registrations by business type (illustrative, check your state)', headers: ['Registration', 'Online SaaS LLC, no staff', 'Retail shop with staff', 'Federal contractor'],
          rows: [
            ['State formation', 'Yes', 'Yes', 'Yes'],
            ['EIN', 'Yes (needed for a bank account even with no staff)', 'Yes', 'Yes'],
            ['Sales-tax permit', 'Only where SaaS is taxable and you have nexus', 'Yes', 'Depends on what you sell'],
            ['State payroll / UI accounts', 'No', 'Yes', 'Usually yes'],
            ['City business licence', 'Often yes, even for a home office', 'Yes, plus zoning and signage', 'Yes'],
            ['SAM.gov (UEI)', 'No', 'No', 'Yes, before bidding']
          ]
        },
        {
          type: 'case', company: 'Stripe Atlas', year: '2016–2026', title: 'Packaging the registration map into one product',
          situation: `For a founder in Bengaluru, Lagos or Berlin, the US registration map is hard: you need a Delaware filing, a registered agent, an EIN without an SSN, founder stock paperwork, an 83(b) election and a bank account.`,
          decision: `Stripe launched Atlas in 2016 to bundle these steps. As of November 2026 its site lists a one-time fee of $500 for a Delaware C-corp or LLC, including state filing fees, the IRS tax-ID filing, the first year of registered-agent service ($100 a year after that), Cooley-designed formation documents, founder equity issuance and the 83(b) filing.`,
          outcome: `Stripe says more than 120,000 companies have been incorporated through Atlas. It does not remove ongoing duties: Delaware franchise tax and annual reports, federal tax returns and any state registrations remain the founder's job.`,
          lesson: `Formation services save time on the first few boxes of the map, but no service files your taxes, licences and annual reports forever. Know the whole map so you know what is still yours.`
        },
        {
          type: 'case', company: 'South Dakota v. Wayfair, Inc.', year: '2018', title: 'Why state registrations follow your sales, not your office',
          situation: `For decades, a state could only make a seller collect its sales tax if the seller had a physical presence there. Online sellers like Wayfair shipped into South Dakota without collecting tax.`,
          decision: `South Dakota passed a law requiring remote sellers with more than $100,000 of sales or 200 transactions into the state to collect tax, and sued to test it.`,
          outcome: `In June 2018 the US Supreme Court overruled the physical-presence rule. Nearly every sales-tax state then adopted "economic nexus" thresholds, so an online business can owe sales-tax registration in states it has never visited.`,
          lesson: `Your registration map is not fixed at launch. As sales grow into new states, you may need new sales-tax permits (and sometimes foreign qualification). Track sales by state from day one.`
        },
        {
          type: 'callout', kind: 'myth', title: 'Myth: "I registered with the IRS, so my company exists"',
          html: `<p>An EIN is a tax ID, not a company. The IRS will issue an EIN to a sole proprietor with no entity at all. Your <b>limited liability</b> only exists once the <b>state</b> accepts your formation filing. Get the state filing first, then apply for the EIN in the entity's exact legal name.</p>`
        },
        {
          type: 'questions', title: 'Ask before you start registering',
          items: [
            { q: 'In which state will the company be formed, and in which states will it actually operate?', why: 'Formation and operation can differ; every operating state may need foreign qualification and tax accounts.' },
            { q: 'Who is the "responsible party" and do they have an SSN or ITIN?', why: 'This decides whether you can get the EIN online in minutes or must apply by phone, fax or mail.' },
            { q: 'Will we hire employees in the first year, and where?', why: 'Employees trigger state payroll, unemployment-insurance and workers\' compensation registrations.' },
            { q: 'Do we sell taxable goods or services, and into which states?', why: 'Sales-tax permits follow economic nexus, not just your office address.' },
            { q: 'Is our activity regulated at federal, state or city level?', why: 'Alcohol, firearms, transport, food, health care and many trades need licences before you start.' },
            { q: 'Do we plan to sell to the federal government?', why: 'SAM.gov registration and a UEI take time and are needed before most bids; start early.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Registration rules, fees and thresholds change often and differ by state and city. This lesson reflects research as of November 2026. Check the official sites before you act: your state's Secretary of State and revenue department, <b>irs.gov</b>, <b>sba.gov</b>, <b>sam.gov</b> and <b>fincen.gov</b>. For your situation, use a qualified attorney or CPA, or a free adviser from the SBA network (SCORE, a Small Business Development Center or an APEX Accelerator for government contracting).</p>`
        }
      ],
      terms: [
        { term: 'Secretary of State', def: `The state office (in some states a "Division of Corporations") that creates LLCs and corporations and keeps their public records.` },
        { term: 'EIN (Employer Identification Number)', def: `A free nine-digit federal tax ID issued by the IRS. Needed for most business bank accounts, payroll and tax returns.` },
        { term: 'Foreign qualification', def: `Registering a company formed in one state to "do business" in another state. In US usage, "foreign" often just means "from another state".` },
        { term: 'Economic nexus', def: `A connection to a state created by sales volume alone, which can require you to register and collect that state's sales tax.` },
        { term: 'UEI (Unique Entity ID)', def: `The 12-character ID that SAM.gov assigns to entities that register to do business with the federal government.` },
        { term: 'Good standing', def: `A state's confirmation that your entity has filed its annual reports and paid its fees; banks and investors often ask for a certificate of good standing.` }
      ],
      quiz: [
        { q: 'Which office actually creates a US LLC or corporation?', options: ['The IRS', 'The Secretary of State (or Division of Corporations) of a state', 'The SBA', 'The USPTO'], answer: 1, explain: 'Entities are created under state law. The IRS only issues tax IDs and collects taxes.' },
        { q: 'What is the usual correct order?', options: ['EIN, then state filing, then bank account', 'Bank account, then EIN, then state filing', 'State filing, then EIN, then bank account', 'City licence, then state filing, then EIN'], answer: 2, explain: 'The EIN application asks for the entity\'s legal name and type, and banks ask for both the formation documents and the EIN.' },
        { q: 'After South Dakota v. Wayfair (2018), an online seller may need to register for sales tax in a state because of…', options: ['Having a warehouse there only', 'Its sales volume or transactions into that state', 'Its founder\'s citizenship', 'Its trademark registration'], answer: 1, explain: 'Wayfair allowed states to use economic nexus thresholds based on sales into the state.' },
        { q: 'A small software LLC with no employees still usually needs an EIN because…', options: ['It is legally required for every LLC on the day of formation', 'Banks and payment processors usually require one to open business accounts', 'The city licence needs it', 'FinCEN requires it'], answer: 1, explain: 'A single-member LLC with no staff can sometimes use the owner\'s SSN for tax, but banks and processors almost always ask for an EIN.' },
        { q: 'Which registration is needed before bidding on most federal contracts?', options: ['USPTO trademark', 'SAM.gov entity registration with a UEI', 'A Delaware certificate of incorporation', 'A seller\'s permit'], answer: 1, explain: 'Federal contracting requires an active SAM.gov registration. The sibling track <a href="#/lesson/us-govcon-1">US GovCon</a> covers this in depth.' }
      ],
      challenge: {
        title: 'Map the registrations for a coffee-and-catering startup',
        prompt: `<p>Two friends plan a coffee kiosk in Austin, Texas, with three part-time staff. They will also cater office events across the Texas border in Oklahoma a few times a month and sell coffee beans online to customers nationwide. One founder is a US citizen; the other is an Indian citizen living in India with no SSN or ITIN.</p><p>List every registration they likely need, who issues it, and the order in which they should do it. Flag any item that depends on facts they must still check.</p>`,
        hints: ['Start with the state filing; think about Oklahoma activity separately.', 'Who should be the EIN responsible party so they can apply online?', 'Food and staff each trigger their own permits and accounts.'],
        model: `<ol><li><b>Texas formation</b> (Secretary of State): e.g. a Texas LLC, with a registered agent in Texas.</li><li><b>Operating agreement</b> between the two members, with ownership percentages.</li><li><b>EIN</b> from the IRS: the US-citizen founder can act as responsible party and apply online; otherwise the Indian founder would need phone/fax/mail.</li><li><b>Bank account</b> in the LLC's name.</li><li><b>Texas Comptroller</b>: sales and use tax permit (prepared food is taxable).</li><li><b>Texas Workforce Commission</b>: unemployment-tax account for the three staff; federal payroll deposits via the EIN; I-9 checks for each hire.</li><li><b>City of Austin / county health</b>: food establishment or mobile vending permit, food-handler certifications, zoning and signage for the kiosk location.</li><li><b>Oklahoma</b>: check whether regular catering there is "doing business" requiring foreign qualification, and whether Oklahoma sales tax and local health permits apply to those events.</li><li><b>Online bean sales</b>: track sales by state; register for sales tax wherever economic-nexus thresholds are crossed (many unprocessed coffee beans are exempt food, so check each state).</li><li><b>Insurance</b>: general liability, product liability and workers\' compensation (optional in Texas but often wise).</li><li><b>Optional</b>: USPTO trademark for the brand once the name is cleared.</li></ol><p>Flags to check: Oklahoma "doing business" rules, food-tax treatment of beans by state, and local permit names, which vary by city.</p>`
      },
      takeaways: [
        'States create companies; the IRS only numbers them for tax.',
        'Form first, then EIN, then bank, then state tax accounts and local licences.',
        'Sales-tax and qualification duties follow where you sell and operate, not just where you formed.',
        'Write down every registration with its renewal date; most penalties come from forgotten annual filings.'
      ],
      sources: [
        { title: 'SBA — Launch your business (licences, permits, registrations)', url: 'https://www.sba.gov/counseling/launch-your-business/' },
        { title: 'IRS — Get an employer identification number', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number' },
        { title: 'Delaware Division of Corporations — Annual report and tax instructions', url: 'https://corp.delaware.gov/paytaxes/' },
        { title: 'Stripe Atlas — product page (price and inclusions)', url: 'https://stripe.com/atlas' },
        { title: 'Mayer Brown — FinCEN permanently eliminates BOI reporting for US companies (Aug 2026)', url: 'https://www.mayerbrown.com/en/insights/publications/2026/08/the-final-chapter-fincen-permanently-eliminates-boi-reporting-requirements-for-us-companies-and-us-persons' }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'us-start-2',
      title: 'Choosing an entity: sole prop, LLC, C-corp, S-corp and more',
      level: 'Beginner',
      minutes: 18,
      hook: `The entity you pick on day one decides who can sue your house, how many times your profit is taxed, and whether a venture capitalist will even take the meeting.`,
      eli5: `Picture three ways to run a lemonade stand. Alone, with no paperwork, you <i>are</i> the stand: if a customer sues, they can take your bike (sole proprietorship). Or you put the stand inside a sturdy box with its own name, so problems usually stay inside the box, and the stand's profit is still added to your pocket money for tax (LLC). Or you build a bigger box that can sell little pieces of itself to grown-ups who want to invest; it pays its own tax, and you pay again when it hands you money (C-corporation).`,
      blocks: [
        {
          type: 'text', title: 'Four questions decide the entity',
          html: `<ul><li><b>Liability:</b> if the business is sued or owes money, can creditors reach the owners' personal assets?</li><li><b>Taxation:</b> is profit taxed once on the owners' returns (<span class="hl">pass-through</span>) or first at the company and again when paid out as dividends (<span class="hl">double tax</span>)?</li><li><b>Fundraising:</b> can you issue preferred stock and stock options that investors and employees understand?</li><li><b>Paperwork and cost:</b> annual reports, separate tax returns, board minutes, payroll for owners.</li></ul><p>Remember: <b>LLC and corporation are state-law legal forms</b>; <b>S-corp and C-corp are federal tax classifications</b>. An LLC can even elect to be taxed as an S-corp or a C-corp.</p>`
        },
        {
          type: 'compare', title: 'US entity types compared (federal rules as of November 2026)', headers: ['', 'Sole prop / general partnership', 'LLC (single- or multi-member)', 'C-corporation', 'S-corporation (tax election)'],
          rows: [
            ['Formation', 'None needed (a DBA if you use another name)', 'Articles of organization with a state', 'Certificate / articles of incorporation', 'A corporation (or LLC) that files IRS Form 2553'],
            ['Owner liability', 'Unlimited personal liability (partners are jointly liable)', 'Limited, if formalities and separation are kept', 'Limited', 'Limited'],
            ['Default federal tax', 'Pass-through on the owner\'s return (Schedule C / Form 1065)', 'Single-member: disregarded; multi-member: partnership. Can elect corporate tax', '21% corporate tax, then tax on dividends', 'Pass-through (Form 1120-S); owner-employees take a reasonable salary'],
            ['Who can own it', 'Anyone', 'Anyone, including foreigners and companies', 'Anyone, including foreigners and funds', 'Max 100 shareholders; individuals (and certain trusts/estates); no partnerships, corporations or non-resident aliens; one class of stock'],
            ['Fundraising', 'Very hard', 'Possible but awkward for VC (K-1s, tax for foreign/tax-exempt LPs)', 'Standard for VC: preferred stock, option pools, SAFEs', 'Poor: one class of stock, ownership limits'],
            ['Paperwork', 'Lowest', 'Low to medium; operating agreement', 'Highest: board, bylaws, minutes, separate return', 'Corporate paperwork plus payroll for owners']
          ]
        },
        {
          type: 'flow', title: 'Decision flow: which entity?',
          steps: [
            { label: 'Are you testing an idea with tiny risk and no partners?', kind: 'decision', desc: 'Freelancing or a side project with little liability exposure.', branches: [ { label: 'Yes', to: 'Sole proprietorship (consider insurance)' }, { label: 'No', to: 'Continue' } ] },
            { label: 'Will you raise venture capital or grant stock options broadly?', kind: 'decision', desc: 'VCs, accelerators and option plans are built around corporations.', branches: [ { label: 'Yes', to: 'Delaware C-corp' }, { label: 'No', to: 'Continue' } ] },
            { label: 'Are any owners non-resident aliens or companies?', kind: 'decision', desc: 'They cannot hold S-corp stock.', branches: [ { label: 'Yes', to: 'LLC (partnership or disregarded) or C-corp' }, { label: 'No', to: 'Continue' } ] },
            { label: 'Is profit large enough that payroll savings beat extra costs?', kind: 'decision', desc: 'S-corp status can cut self-employment tax on profit above a reasonable salary.', branches: [ { label: 'Yes', to: 'LLC or corporation with S-corp election (Form 2553)' }, { label: 'No', to: 'Plain LLC' } ] },
            { label: 'Is the mission charitable or must profit serve a public purpose?', desc: 'Consider a nonprofit 501(c)(3) (no owners, tax-exempt, donations deductible) or a benefit corporation / PBC (for-profit with a stated public benefit).' }
          ]
        },
        {
          type: 'formula', name: 'Double tax vs pass-through (simplified, federal only)',
          expr: 'C-corp: cash to owner = Profit × (1 − 21%) × (1 − dividend tax rate). Pass-through: cash to owner = Profit × (1 − owner\'s marginal rate, after any QBI deduction)',
          explain: 'The 21% federal corporate rate applies to C-corp profit. Qualified dividends are then taxed to the shareholder (0%, 15% or 20% plus, for higher earners, a 3.8% net investment income tax). Pass-through profit is taxed once at the owner\'s rates; many owners can deduct up to 20% of qualified business income (QBI), a deduction the 2025 tax law made permanent. State taxes come on top.',
          example: '$100,000 profit, all paid out. C-corp: $100,000 × 0.79 = $79,000; dividend tax at 15% leaves about $67,150. Pass-through at a 24% marginal rate with a 20% QBI deduction: taxable $80,000 × 24% = $19,200 tax, leaving about $80,800 (before self-employment tax, which can apply to active owners). If the C-corp reinvests instead of paying dividends, only the 21% layer applies now, which is why growth startups accept the C-corp.'
        },
        {
          type: 'case', company: 'OpenAI', year: '2019–2025', title: 'From capped-profit LLC to a public benefit corporation',
          situation: `OpenAI began in 2015 as a nonprofit. In 2019 it created a "capped-profit" LLC under the nonprofit so it could raise billions from investors such as Microsoft, while capping their returns. By 2024 that unusual structure made further fundraising difficult.`,
          decision: `After nearly a year of work with the Delaware and California attorneys general, OpenAI completed a recapitalization in late October 2025: the nonprofit became the OpenAI Foundation, and the business became OpenAI Group PBC, a Delaware public benefit corporation that the Foundation controls.`,
          outcome: `Press reports said Microsoft holds about 27% of the PBC and the Foundation a stake of roughly a quarter, with conventional equity replacing the capped units.`,
          lesson: `Entity choice is about money and control as much as tax. A PBC lets a company raise ordinary equity while writing a public purpose into its charter, but changing structure later is slow, costly and public.`
        },
        {
          type: 'case', company: 'Patagonia', year: '2022', title: 'Using trusts and a 501(c)(4) to lock in a mission',
          situation: `Patagonia's founder Yvon Chouinard and his family owned the outdoor-clothing company privately and did not want to sell it or take it public.`,
          decision: `In September 2022 the family transferred all voting stock to the Patagonia Purpose Trust and the non-voting stock (about 98% of the equity) to the Holdfast Collective, a 501(c)(4) nonprofit that uses profits not reinvested in the business to fight climate change.`,
          outcome: `The company stayed a for-profit corporation that pays tax, while ownership of its profits moved to a nonprofit. The structure drew wide praise and also scrutiny, because 501(c)(4) gifts are not tax-deductible donations but avoided gift and estate tax on the transfer.`,
          lesson: `Nonprofit and benefit structures are tools for very specific goals. Most founders need a simple LLC or C-corp; mission structures need specialist lawyers and accept permanent trade-offs on control and exit.`
        },
        {
          type: 'callout', kind: 'tip', title: 'LP, LLP, benefit corporation and 501(c)(3) in one line each',
          html: `<ul><li><b>LP (limited partnership):</b> a general partner with unlimited liability runs it; limited partners invest passively. Common for investment funds.</li><li><b>LLP (limited liability partnership):</b> partners are shielded from each other\'s malpractice; many states limit LLPs to licensed professions such as law and accounting.</li><li><b>Benefit corporation / PBC:</b> a for-profit corporation whose charter names a public benefit that directors must balance with profit (Delaware calls it a public benefit corporation).</li><li><b>501(c)(3) nonprofit:</b> formed as a state nonprofit corporation, then applies to the IRS (Form 1023 or 1023-EZ). No owners, tax-exempt, donations deductible; profits cannot benefit insiders.</li></ul>`
        },
        {
          type: 'scenario', prompt: `A US resident designer and a friend in India want to start a design agency. They expect about $150,000 profit in year two and have no plans to raise venture capital. Which structure fits best at the start?`,
          options: [
            { text: 'An S-corp, to save self-employment tax.', feedback: 'Not allowed: a non-resident alien cannot be an S-corp shareholder, so the election would be invalid.', good: false },
            { text: 'A multi-member LLC taxed as a partnership, with a careful operating agreement and tax advice on the Indian partner\'s US filings.', feedback: 'Good fit: limited liability, single level of US tax, flexible profit splits. The partnership must withhold tax on the foreign partner\'s share of effectively connected income, so get a CPA early.', good: true },
            { text: 'A Delaware C-corp, because "everyone uses Delaware".', feedback: 'Workable but adds double tax on distributed profit and corporate paperwork without the VC benefit that usually justifies it.', good: false }
          ]
        },
        {
          type: 'questions', title: 'Ask before you choose an entity',
          items: [
            { q: 'Will we raise outside equity in the next two years?', why: 'If yes, starting as a Delaware C-corp avoids a costly conversion later.' },
            { q: 'Are any owners non-US persons, companies or funds?', why: 'They rule out S-corp status and change withholding and filing duties.' },
            { q: 'How much profit will we take out each year versus reinvest?', why: 'Double tax bites when profit is distributed; pass-through suits owner-income businesses.' },
            { q: 'What is our real liability risk, and can insurance cover it?', why: 'An entity shields owners only if kept separate; insurance covers what the shield does not.' },
            { q: 'Who decides what, and what happens if a founder leaves?', why: 'The operating agreement or bylaws plus vesting decide control and exits, whatever the entity.' },
            { q: 'Will we sell to the federal government or seek small-business certifications?', why: 'Ownership and control tests for some programmes depend on who owns the entity and how it is governed.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Tax rates, deductions and entity rules change; the 2025 federal tax law alone changed several. This lesson reflects research as of November 2026. Check <b>irs.gov</b> (S corporations, Form 2553, Publication 535 successors) and your state Secretary of State. Ask a qualified CPA or attorney, or a free SCORE or Small Business Development Center adviser via <b>sba.gov</b>, before you file.</p>`
        }
      ],
      terms: [
        { term: 'Pass-through taxation', def: `Business profit is not taxed at the entity; it flows to the owners' personal returns and is taxed once there.` },
        { term: 'Double taxation', def: `A C-corporation pays corporate tax on profit, and shareholders pay tax again on dividends they receive from what is left.` },
        { term: 'Disregarded entity', def: `A single-member LLC that the IRS ignores for income tax by default; its activity is reported on the owner\'s return.` },
        { term: 'S-corporation election', def: `A choice filed on IRS Form 2553 that lets an eligible corporation (or LLC) be taxed as a pass-through, subject to strict ownership limits.` },
        { term: 'Public benefit corporation (PBC)', def: `A for-profit Delaware corporation whose charter states a public benefit that directors must balance with shareholder interests.` },
        { term: 'QBI deduction', def: `A federal deduction of up to 20% of qualified business income for many pass-through owners, made permanent by the 2025 tax law.` }
      ],
      quiz: [
        { q: 'Which owner would make an S-corp election invalid?', options: ['A US citizen living abroad', 'A green-card holder', 'A non-resident alien living in India', 'A US resident trust of an allowed type'], answer: 2, explain: 'Non-resident aliens cannot be S-corp shareholders under IRS rules.' },
        { q: 'A C-corp earns $200,000 and distributes all of it after the 21% federal tax. Shareholders pay 15% on the dividend. What reaches them after federal tax?', options: ['$134,300', '$158,000', '$170,000', '$200,000'], answer: 0, explain: '$200,000 × 0.79 = $158,000; × 0.85 = $134,300.' },
        { q: 'Why do venture investors prefer a Delaware C-corp?', options: ['It pays no tax', 'It can issue preferred stock and option pools on familiar, well-tested law', 'It has no annual filings', 'It hides the owners\' names from the IRS'], answer: 1, explain: 'Standard VC documents, preferred stock and option plans assume a Delaware corporation.' },
        { q: '"LLC" and "S-corp" are best described as…', options: ['Two state-law legal forms', 'A state-law legal form and a federal tax classification', 'Two federal tax classifications', 'The same thing'], answer: 1, explain: 'An LLC is formed under state law; S-corp is an IRS tax status that an eligible LLC or corporation can elect.' },
        { q: 'What did Patagonia\'s 2022 restructuring move to a nonprofit?', options: ['All the voting stock', 'The non-voting stock carrying most of the economic value', 'Only the brand', 'Nothing; it went public'], answer: 1, explain: 'Non-voting stock (about 98% of equity) went to the Holdfast Collective; voting stock went to a purpose trust.' }
      ],
      challenge: {
        title: 'Pick an entity for three founders',
        prompt: `<p>Three cases (all numbers illustrative):</p><ol><li>Maya, a US citizen, does freelance bookkeeping from home, earning about $60,000 profit, no staff.</li><li>Raj (Indian citizen in Pune) and Sam (US citizen in Seattle) are building AI software and plan a seed round of $2 million within a year.</li><li>Lena, a US resident, runs a profitable landscaping business with $180,000 profit and five employees; no investors planned.</li></ol><p>Recommend an entity (and any tax election) for each, with two reasons and one risk.</p>`,
        hints: ['Ask: VC? non-US owners? profit level vs reasonable salary?', 'Remember S-corp ownership limits.'],
        model: `<ol><li><b>Maya:</b> single-member LLC (disregarded). Reasons: limited liability for little cost; simple Schedule C tax. Risk: an LLC does not protect her from her own professional errors, so carry professional liability insurance. Revisit S-corp status once profit comfortably exceeds a reasonable salary plus extra payroll costs.</li><li><b>Raj and Sam:</b> Delaware C-corp. Reasons: seed investors expect it; it can issue preferred stock and an option pool; a non-US founder can own C-corp shares. Risk: double tax on any dividends, and Raj must also consider India\'s overseas-investment rules (Lesson 8). File 83(b) elections within 30 days.</li><li><b>Lena:</b> LLC (or corporation) with an S-corp election on Form 2553. Reasons: pass-through tax; paying herself a reasonable salary and taking the rest as distributions can reduce self-employment tax; no ownership conflicts. Risk: the IRS challenges unreasonably low salaries, and she must run payroll for herself.</li></ol>`
      },
      takeaways: [
        'Liability, tax, fundraising and paperwork are the four tests for any entity.',
        'LLC and corporation are legal forms; S-corp and C-corp are tax treatments.',
        'VC-backed startups almost always use a Delaware C-corp; owner-income businesses often prefer an LLC.',
        'Non-resident aliens cannot own S-corp stock, so foreign founders choose an LLC or C-corp.'
      ],
      sources: [
        { title: 'IRS — S corporations (eligibility)', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations' },
        { title: 'IRS — Working Families Tax Cuts: what gig workers should know (FS-2026-07, QBI permanence)', url: 'https://www.irs.gov/newsroom/the-working-families-tax-cuts-what-gig-economy-workers-should-know' },
        { title: 'SBA — Launch your business (choose a structure)', url: 'https://www.sba.gov/counseling/launch-your-business/' },
        { title: 'YourStory — OpenAI restructures, Microsoft stake in PBC (Oct 2025)', url: 'https://yourstory.com/ai-story/openai-restructures-microsoft-stake-in-pbc' }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'us-start-3',
      title: 'Choosing the state: home state, Delaware, Wyoming, Nevada or Texas',
      level: 'Intermediate',
      minutes: 18,
      hook: `About two-thirds of the Fortune 500 are Delaware corporations, yet for a one-person LLC Delaware can simply mean paying two states instead of one.`,
      eli5: `Choosing a state is like choosing which country's rules your football club plays under. A famous league (Delaware) has experienced referees and a thick, well-known rulebook, which big clubs and investors love. But if your club only ever plays in your own town, you still have to register with the local league too, so you pay two sets of fees. Some leagues (Wyoming, Nevada, Texas) are cheaper or friendlier to club owners, but fewer people know their rulebooks well.`,
      blocks: [
        {
          type: 'text', title: 'Formation state vs operating state',
          html: `<p>You can form your company in any state, regardless of where you live. But if the company <b>"transacts business"</b> in another state (an office, employees, a shop, regular in-person work), that state will usually require <span class="hl">foreign qualification</span>: a registration, a fee, a registered agent there and annual reports there too. States define "doing business" differently; isolated sales, holding bank accounts or interstate commerce often do not count, while a permanent office or staff usually do.</p><p>So a California founder who forms a Delaware LLC and works from San Francisco typically pays Delaware's fees <b>and</b> registers in California, where the franchise-tax rules apply anyway.</p>`
        },
        {
          type: 'compare', title: 'Popular formation states (check each state site for current fees)', headers: ['', 'Home state', 'Delaware', 'Wyoming', 'Nevada', 'Texas'],
          rows: [
            ['Best for', 'Local LLCs and small businesses', 'VC-backed C-corps, public companies', 'Low-cost holding or online LLCs', 'Founders wanting director-friendly law', 'Large companies leaving Delaware; Texas operators'],
            ['Courts', 'General state courts', 'Court of Chancery (judges, no juries) and an experienced Supreme Court', 'General courts plus a newer chancery court for business disputes', 'Business court docket', 'Business Court launched September 2024'],
            ['Recurring state cost (typical)', 'Varies; e.g. California has an $800 minimum franchise tax', 'Corporation: franchise tax (min $175 or $400 by method) + $50 annual report; LLC: annual tax (commonly $300)', 'Annual report licence tax, $60 minimum (secondary sources)', 'Annual list plus state business licence (about $350/yr per secondary sources)', 'Franchise tax report; no tax due below a revenue threshold'],
            ['Investor familiarity', 'Low for VC', 'Very high', 'Low', 'Medium', 'Rising for public companies'],
            ['Foreign qualification needed at home?', 'No', 'Yes, if you operate elsewhere', 'Yes, if you operate elsewhere', 'Yes, if you operate elsewhere', 'Yes, if you operate elsewhere']
          ]
        },
        {
          type: 'formula', name: 'Delaware franchise tax: the two methods',
          expr: 'Authorized shares method: $175 for ≤5,000 shares; $250 for 5,001–10,000; +$85 per extra 10,000 shares. Assumed par value capital method: $400 per $1,000,000 (or part) of assumed par value capital, minimum $400. Maximum $200,000. Pay the lower; add the $50 annual report fee.',
          explain: 'Delaware sends the authorized-shares bill by default, which frightens founders with 10 million authorized shares. The assumed par value capital method uses gross assets ÷ issued shares to compute an "assumed par" per share, multiplies it by authorized shares, and taxes that capital. For small startups it is usually far cheaper. Corporations file by March 1; late filing adds a $200 penalty plus 1.5% monthly interest.',
          example: 'A startup has 10,000,000 authorized shares, 8,000,000 issued, par $0.00001, and $100,000 gross assets. Authorized-shares method: $250 + (999 × $85) = $85,165. Assumed par value method: $100,000 ÷ 8,000,000 = $0.0125 per share; × 10,000,000 authorized = $125,000 capital → $400 (minimum). Total due ≈ $400 + $50 report fee = $450 instead of $85,215.'
        },
        {
          type: 'timeline', title: 'The "DExit" debate, 2024–2026',
          items: [
            { label: 'Jan 2024', desc: 'Delaware\'s Court of Chancery (Tornetta v. Musk) rescinds Elon Musk\'s 2018 Tesla pay package, finding Musk controlled the process.' },
            { label: 'Jun 2024', desc: 'Tesla shareholders approve moving Tesla\'s incorporation to Texas; Tesla confirms it is now a Texas corporation.' },
            { label: 'Sep 2024', desc: 'Texas launches its specialist Business Court.' },
            { label: 'Feb 2025', desc: 'Delaware Supreme Court (Maffei v. Palkon) applies the business judgment rule to TripAdvisor\'s planned move to Nevada, making "clear-day" exits easier.' },
            { label: 'Mar 2025', desc: 'Delaware enacts SB 21: statutory safe harbors for controller and conflicted transactions and narrower books-and-records rights.' },
            { label: 'Dec 2025', desc: 'Delaware Supreme Court reverses the rescission remedy and reinstates Musk\'s 2018 package, cutting the plaintiff\'s legal fee award.' },
            { label: 'Feb 2026', desc: 'Delaware Supreme Court (Rutledge v. Clearway Energy) upholds SB 21\'s safe harbors as constitutional.' }
          ]
        },
        {
          type: 'case', company: 'Tesla', year: '2018–2025', title: 'The pay ruling that started "DExit"',
          situation: `In 2018 Tesla's board granted Elon Musk a performance-based option package later valued at about $56 billion. A shareholder, Richard Tornetta, sued in Delaware's Court of Chancery, arguing the board was not independent of Musk.`,
          decision: `In January 2024 Chancellor Kathaleen McCormick rescinded the package. Musk urged companies to leave Delaware, and in June 2024 Tesla shareholders voted to reincorporate in Texas, where Tesla is headquartered.`,
          outcome: `On December 19, 2025 the Delaware Supreme Court reinstated the 2018 package, holding that rescission was too extreme a remedy, while leaving in place findings on the flawed process; it awarded $1 nominal damages and cut the plaintiff's lawyers' fee from about $345 million to about $54 million. Tesla stayed in Texas.`,
          lesson: `Your state of incorporation decides which court reviews board decisions when a founder or controller is conflicted. For most startups Delaware's predictability still wins; for founder-controlled public companies, other states now compete hard.`
        },
        {
          type: 'case', company: 'Delaware Division of Corporations', year: '2024', title: 'Why Delaware still dominates',
          situation: `Delaware's corporate law, Court of Chancery and decades of case law make outcomes more predictable for investors and boards.`,
          decision: `The state keeps updating its law quickly (SB 21 in 2025 was passed within weeks) to keep companies from leaving.`,
          outcome: `Its 2024 annual report says 66.7% of Fortune 500 companies were incorporated in Delaware and 81.4% of US-based IPOs in 2024 chose Delaware, with 289,810 new business entities formed that year.`,
          lesson: `Market share is a network effect: lawyers, investors and template documents all assume Delaware. A small local business gains little from it; a startup planning to raise capital usually gains a lot.`
        },
        {
          type: 'interactive', widget: 'decision-matrix', title: 'Score your formation state',
          note: 'Try options such as "Home state LLC", "Delaware C-corp", "Wyoming LLC". Weight criteria like investor expectations, annual cost, foreign-qualification burden and court predictability, then see which wins for your plan.'
        },
        {
          type: 'questions', title: 'Ask before you pick a state',
          items: [
            { q: 'Where will we physically operate, hire and keep an office?', why: 'Those states will require foreign qualification and taxes regardless of where you form.' },
            { q: 'Will investors, acquirers or an accelerator require Delaware?', why: 'Many term sheets and accelerators assume a Delaware C-corp; converting later costs legal fees.' },
            { q: 'What is the all-in annual cost in both states?', why: 'Franchise taxes, annual reports and two registered agents add up for a small business.' },
            { q: 'Do we have a controlling founder or conflicted deals ahead?', why: 'State law decides how courts review controller transactions, which drove the 2024–26 DExit debate.' },
            { q: 'Which Delaware franchise-tax method will we use?', why: 'Choosing the assumed par value capital method and reporting gross assets can cut a startup\'s bill from tens of thousands to a few hundred dollars.' },
            { q: 'Who is our registered agent, and how will we receive lawsuits and state notices?', why: 'Missed service of process can lead to default judgments; missed state mail can lead to loss of good standing.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>State fees, franchise-tax rules and corporate law change, and court decisions in this area moved fast in 2024–26. This lesson reflects research as of November 2026. Check <b>corp.delaware.gov</b>, <b>wyobiz.wyo.gov</b>, the Nevada and Texas Secretary of State sites and your home state\'s site. A corporate attorney or CPA, or a free SBA-network adviser (SCORE or a Small Business Development Center), can confirm what fits your plan.</p>`
        }
      ],
      terms: [
        { term: 'Registered agent', def: `A person or company with a street address in the formation state who accepts lawsuits and official notices for your entity during business hours.` },
        { term: 'Court of Chancery', def: `Delaware's specialist business court, where judges (not juries) decide corporate disputes, building a deep body of case law.` },
        { term: 'Franchise tax', def: `An annual state tax for the privilege of existing as an entity there; Delaware computes it by authorized shares or by assumed par value capital.` },
        { term: 'Assumed par value capital method', def: `Delaware's alternative franchise-tax calculation based on gross assets and issued shares, usually far cheaper for startups.` },
        { term: 'Reincorporation', def: `Moving a company\'s legal home to a new state, usually by conversion or merger, with board and shareholder approval.` },
        { term: 'SB 21 (Delaware, 2025)', def: `A 2025 amendment to Delaware law creating safe harbors for controller and conflicted transactions and narrowing books-and-records demands; upheld by the Delaware Supreme Court in February 2026.` }
      ],
      quiz: [
        { q: 'A Texas founder forms a Delaware LLC and runs it from an office in Dallas with two employees. What else is usually required?', options: ['Nothing', 'Foreign qualification in Texas', 'A USPTO registration', 'A federal charter'], answer: 1, explain: 'An office and staff in Texas are "doing business" there, so the Delaware LLC must register as a foreign LLC in Texas.' },
        { q: 'Under Delaware\'s authorized-shares method, roughly what is the tax on 10,000,000 authorized shares?', options: ['$175', '$400', 'About $85,165', '$200,000'], answer: 2, explain: '$250 for the first 10,000 plus $85 for each of the remaining 999 blocks of 10,000 = $85,165.' },
        { q: 'Using the assumed par value capital method, a startup with $250,000 gross assets, 5,000,000 issued and 10,000,000 authorized shares owes about…', options: ['$400', '$800', '$85,165', '$1,000'], answer: 0, explain: '$250,000 ÷ 5,000,000 = $0.05 per share; × 10,000,000 = $500,000 assumed capital, which is less than $1 million, so the tax is the $400 minimum.' },
        { q: 'What did the Delaware Supreme Court do in December 2025 in the Tesla pay case?', options: ['Affirmed rescission', 'Reinstated the 2018 package and cut the fee award', 'Ordered Tesla back to Delaware', 'Dismissed the case for lack of jurisdiction'], answer: 1, explain: 'It held rescission was too extreme, reinstated the package, awarded $1 nominal damages and reduced the fee award.' },
        { q: 'Why does Delaware remain the default for VC-backed startups?', options: ['It has no taxes', 'Predictable corporate law, a specialist court and investor familiarity', 'It does not require registered agents', 'It lets companies avoid foreign qualification'], answer: 1, explain: 'Network effects around law, courts and standard documents keep Delaware dominant.' }
      ],
      challenge: {
        title: 'Fix a frightening franchise-tax bill',
        prompt: `<p>A two-founder Delaware C-corp receives a notice saying it owes about $85,000 in franchise tax. Facts: 10,000,000 authorized shares, 9,000,000 issued at par $0.0001, total gross assets on its federal return of $450,000. (Illustrative.)</p><p>Calculate the tax under the assumed par value capital method, state what they must file and by when, and give two habits that avoid this panic next year.</p>`,
        hints: ['Assumed par = gross assets ÷ issued shares; compare with stated par.', 'Multiply by authorized shares; $400 per $1M or part.'],
        model: `<p><b>Assumed par:</b> $450,000 ÷ 9,000,000 = $0.05 per share, higher than the $0.0001 stated par, so use $0.05.</p><p><b>Assumed par value capital:</b> $0.05 × 10,000,000 = $500,000 → under $1 million, so tax = <b>$400</b> (the minimum). With the $50 annual report fee the total is <b>$450</b>.</p><p><b>Action:</b> file the annual report online at corp.delaware.gov, entering gross assets and issued shares so the system computes the alternative method, by <b>March 1</b> (late filing adds a $200 penalty plus 1.5% monthly interest).</p><p><b>Habits:</b> (1) diarise March 1 and gather gross assets and issued shares in January; (2) never pay the default authorized-shares bill without checking the alternative method; consider keeping authorized shares sensible.</p>`
      },
      takeaways: [
        'Form where investors and your plans need you to be, but expect to register wherever you operate.',
        'Delaware franchise tax has two methods; startups should almost always check the assumed par value capital method.',
        'The 2024–26 DExit debate (Tesla, TripAdvisor, SB 21) mainly affects controlled public companies, not most startups.',
        'Every state you touch adds a registered agent, annual report and deadline to track.'
      ],
      sources: [
        { title: 'Delaware Division of Corporations — How to calculate franchise taxes', url: 'https://corp.delaware.gov/frtaxcalc/' },
        { title: 'Delaware Division of Corporations — 2024 annual report', url: 'https://corp.delaware.gov/stats/2024-annual-report/' },
        { title: 'Gibson Dunn — Delaware reinstates Musk pay package, slashes fee award (Dec 2025)', url: 'https://gibsondunn.com/delaware-reinstates-musk-pay-package-slashes-345-million-fee-award/' },
        { title: 'Bloomberg Law — Delaware\'s business law overhaul (SB 21) explained', url: 'https://news.bloomberglaw.com/litigation/corporate-capital-delawares-business-law-overhaul-explained' },
        { title: 'Fenwick — Delaware Supreme Court upholds constitutionality of SB 21 (2026)', url: 'https://www.fenwick.com/insights/publications/open-for-business-delaware-supreme-court-upholds-constitutionality-of-sb-21' },
        { title: 'Sidley — Tesla shareholders approve reincorporation and pay ratification (June 2024)', url: 'https://www.sidley.com/en/newslanding/newsannouncements/2024/06/tesla-shareholders-approve-recommendations-of-special-committee-represented-by-sidley' }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'us-start-4',
      title: 'Filing the formation: documents, founder stock and the 83(b) election',
      level: 'Intermediate',
      minutes: 17,
      hook: `The most expensive mistake in US startup formation costs nothing to avoid: a one-page tax election that must reach the IRS within 30 days of receiving your shares.`,
      eli5: `Forming a company is like starting a club with a written rulebook. First you check nobody else has your club's name, then you send the town hall a form saying the club exists. Next you write the rulebook (who votes, who decides), hand out membership cards (shares) to the founders, and agree that a founder who quits early gives some cards back. Finally, you tell the tax office "please tax my cards now while they are worth almost nothing", because later they might be worth a lot.`,
      blocks: [
        {
          type: 'flow', title: 'Formation step by step',
          steps: [
            { label: 'Search the name', desc: 'Check the state business-entity database, the USPTO trademark database and domain names. A state accepting your name does not mean you can use it as a brand.' },
            { label: 'Appoint a registered agent', desc: 'A commercial agent or a person with a street address in the state.' },
            { label: 'File the formation document', desc: 'LLC: articles (or certificate) of organization. Corporation: certificate (or articles) of incorporation, stating authorized shares and par value.' },
            { label: 'Is it an LLC or a corporation?', kind: 'decision', desc: 'Governing documents differ.', branches: [ { label: 'LLC', to: 'Signed operating agreement: members, percentages, management, transfers, exits' }, { label: 'Corporation', to: 'Bylaws plus initial board consent' } ] },
            { label: 'Initial resolutions', desc: 'Appoint officers, adopt bylaws, approve stock issuance, authorise a bank account, set the fiscal year, adopt an equity plan if needed.' },
            { label: 'Issue founder equity', desc: 'Stock purchase agreements with vesting (often 4 years with a 1-year cliff); founders pay a small price or assign IP.' },
            { label: 'File Section 83(b) elections within 30 days', desc: 'For restricted (vesting) stock. Keep proof of filing and give a copy to the company.' },
            { label: 'File a DBA if trading under another name', desc: 'An assumed or fictitious name filing at state or county level, depending on the state.' }
          ]
        },
        {
          type: 'compare', title: 'LLC vs corporation paperwork', headers: ['', 'LLC', 'Corporation'],
          rows: [
            ['State filing', 'Articles / certificate of organization', 'Certificate / articles of incorporation'],
            ['Internal rulebook', 'Operating agreement (not filed with the state)', 'Bylaws (not filed) plus shareholder agreements'],
            ['Owners called', 'Members, holding membership interests or units', 'Shareholders / stockholders, holding shares'],
            ['Managed by', 'Members, or appointed managers', 'Board of directors, which appoints officers'],
            ['Early decisions recorded in', 'Written consent of members/managers', 'Initial written consent of the incorporator and board'],
            ['Equity for staff', 'Profits interests (more complex)', 'Stock options under an equity incentive plan']
          ]
        },
        {
          type: 'formula', name: 'Why the 83(b) election matters',
          expr: 'Without 83(b): ordinary income each time shares vest = (Fair market value at vesting − price paid) × shares vesting. With 83(b): ordinary income now = (FMV today − price paid) × all restricted shares (often $0).',
          explain: 'Section 83(b) lets you be taxed when you receive restricted stock instead of as it vests. If you pay full fair market value at founding, the income is zero, and later growth is capital gain, with the holding period starting now. Miss the 30-day window and you cannot fix it.',
          example: 'A founder buys 4,000,000 shares at $0.0001 ($400) that vest over 4 years. In year 2 the company raises money at $1.00 per share. Without 83(b), the 1,000,000 shares vesting that year create about $999,900 of ordinary income, without any cash to pay the tax. With 83(b) filed on time, the founder reported $0 income at purchase and owes nothing as shares vest.'
        },
        {
          type: 'timeline', title: 'The 30-day 83(b) clock',
          items: [
            { label: 'Day 0', desc: 'Stock is transferred (stock purchase agreement signed and shares issued).' },
            { label: 'Days 1–5', desc: 'Complete IRS Form 15620 (the standard 83(b) form, released November 2024) or an equivalent statement.' },
            { label: 'By day 30', desc: 'File: since mid-2025 the IRS accepts Form 15620 online through an individual IRS Online Account (identity verification required), or mail it by certified mail with return receipt.' },
            { label: 'Same week', desc: 'Give a copy to the company; keep the online confirmation or postal receipt forever.' },
            { label: 'Tax season', desc: 'Keep the election with your records; it no longer has to be attached to your return.' }
          ]
        },
        {
          type: 'case', company: 'Facebook (Eduardo Saverin)', year: '2004–2009', title: 'Founder equity without clear documents',
          situation: `Facebook co-founder Eduardo Saverin held a large early stake from the original 2004 arrangement, but the founders' roles and contributions were not tied together by careful vesting and governance documents. Facebook later reorganized as a Delaware corporation.`,
          decision: `In 2005, as new shares were issued to others in the Delaware company, Saverin's percentage was heavily diluted. He sued; Facebook countersued.`,
          outcome: `The parties settled in 2009 on confidential terms, and Saverin was restored as a co-founder in the company's records. The dispute became the centre of the film "The Social Network".`,
          lesson: `Write founder equity, vesting, IP assignment and roles into signed documents at formation. Ambiguity about who owns what is cheap to fix on day one and very expensive later.`
        },
        {
          type: 'case', company: 'Stripe Atlas and the 83(b) problem', year: '2016–2026', title: 'Automating the deadline founders miss',
          situation: `Many first-time and non-US founders did not know about the 30-day 83(b) deadline; foreign founders without an SSN or ITIN also struggled to mail the election correctly from abroad.`,
          decision: `Stripe Atlas built 83(b) filing into its incorporation package, alongside founder equity issuance.`,
          outcome: `Its product page lists "83(b) tax election filing" as included. Separately, the IRS's mid-2025 online option now lets US-taxpayer founders with an IRS Online Account file Form 15620 electronically and get instant confirmation.`,
          lesson: `Treat the 83(b) as part of formation, not as a tax-season chore. Non-US founders should still get advice on whether and how the election affects them.`
        },
        {
          type: 'interactive', widget: 'cap-table', title: 'Model founder splits and future dilution',
          note: 'Enter two or three founders, add an option pool and a seed round, and watch how each founder\'s percentage shrinks. Try a 10% option pool versus 15% before the round.'
        },
        {
          type: 'checklist', title: 'Formation document checklist',
          items: [
            'Name searched in the state database, USPTO and domain registrar',
            'Registered agent appointed',
            'Certificate of incorporation or articles of organization filed and stamped copy saved',
            'Bylaws or operating agreement signed by all required parties',
            'Initial board or member consent: officers, bank, fiscal year, stock issuance',
            'Founder stock purchase agreements with vesting and IP assignment',
            '83(b) elections filed within 30 days, proof saved, copies to company',
            'Stock ledger or cap table started',
            'DBA filed if using a trade name',
            'Minute book (digital) created with all of the above'
          ]
        },
        {
          type: 'questions', title: 'Ask before you file and issue stock',
          items: [
            { q: 'Is the name free as a trademark, not just in the state database?', why: 'A state accepting a name gives no protection against a trademark owner who can force you to rebrand.' },
            { q: 'How many shares will we authorize, and at what par value?', why: 'This affects Delaware franchise tax and how easily you can grant options later.' },
            { q: 'What vesting and acceleration terms apply to each founder?', why: 'Vesting protects the company if a founder leaves early; investors usually insist on it.' },
            { q: 'Has every founder assigned their pre-formation IP to the company?', why: 'Investors and acquirers check that the company owns its code, designs and brand.' },
            { q: 'Who is filing each founder\'s 83(b), by what date and by which method?', why: 'The 30-day deadline is strict and cannot be cured.' },
            { q: 'Do we need a DBA for the brand we trade under?', why: 'Using an unregistered trade name can create banking problems and, in some states, penalties.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Formation forms, filing fees and IRS procedures change; the 83(b) online option is new since 2025. This lesson reflects research as of November 2026. Check your Secretary of State site and <b>irs.gov</b> (Form 15620 and Section 83(b) guidance). A startup attorney or CPA, or a free SCORE or Small Business Development Center adviser via <b>sba.gov</b>, should review founder documents before you sign.</p>`
        }
      ],
      terms: [
        { term: 'Certificate of incorporation', def: `The document filed with the state to create a corporation, stating its name, agent, authorized shares and par value.` },
        { term: 'Operating agreement', def: `The private contract among LLC members setting ownership, management, profit splits, transfers and exits.` },
        { term: 'Vesting', def: `Earning shares over time (often 4 years with a 1-year cliff); unvested shares can be bought back if a founder leaves.` },
        { term: 'Section 83(b) election', def: `A filing within 30 days of receiving restricted property that chooses to be taxed on its value now rather than as it vests.` },
        { term: 'DBA (doing business as)', def: `An assumed, fictitious or trade name registration that lets an entity or person trade under a name other than its legal name.` },
        { term: 'Par value', def: `A nominal minimum price per share stated in the charter, often a tiny fraction of a cent for startups.` }
      ],
      quiz: [
        { q: 'What is the deadline for a Section 83(b) election?', options: ['30 days after the stock is transferred', 'By the next April 15', '90 days after vesting', 'Any time before an exit'], answer: 0, explain: 'The election must be filed within 30 days of the transfer of the restricted property.' },
        { q: 'Which document is filed with the state for an LLC?', options: ['Operating agreement', 'Articles (certificate) of organization', 'Bylaws', 'Form 2553'], answer: 1, explain: 'The articles create the LLC; the operating agreement stays private.' },
        { q: 'A founder bought 2,000,000 restricted shares at FMV and filed an 83(b). When 500,000 vest at $2 per share, what ordinary income arises?', options: ['$1,000,000', '$500,000', '$0', '$2,000,000'], answer: 2, explain: 'With a timely 83(b) and FMV paid, vesting creates no ordinary income; later gains are capital gains.' },
        { q: 'Since mid-2025, how can a US taxpayer file Form 15620?', options: ['Only by fax', 'Online through an IRS individual Online Account, or by mail', 'Only with the annual tax return', 'Through the Secretary of State'], answer: 1, explain: 'The IRS added an online filing option for Form 15620 in mid-2025; mail remains allowed.' },
        { q: 'Why do investors care about founders\' IP assignment agreements?', options: ['They reduce franchise tax', 'They ensure the company, not individuals, owns the technology and brand', 'They replace the 83(b)', 'They are required by the IRS'], answer: 1, explain: 'Clean IP ownership is checked in every financing and acquisition.' }
      ],
      challenge: {
        title: 'Set up founder equity correctly',
        prompt: `<p>Three founders form a Delaware C-corp on March 3 with 10,000,000 authorized shares at $0.00001 par. They want to split 8,000,000 shares 45% / 35% / 20% and reserve the rest for an option pool. One founder is in India with no SSN or ITIN. (Illustrative.)</p><p>Write their formation and equity checklist for the first 30 days, including share numbers, vesting terms, the 83(b) plan for each founder, and the main risk for the India-based founder.</p>`,
        hints: ['Compute shares per founder.', 'Who can file online and who must mail?'],
        model: `<p><b>Shares:</b> 3,600,000 / 2,800,000 / 1,600,000; 2,000,000 unissued for an equity plan to be adopted later.</p><p><b>Day 1–3:</b> board consent adopting bylaws, appointing officers, approving stock purchase agreements at $0.00001 per share (total $36, $28 and $16), IP assignments and a bank resolution.</p><p><b>Vesting:</b> 4 years, 1-year cliff, monthly thereafter; consider double-trigger acceleration.</p><p><b>83(b):</b> stock transferred March 3, so file by <b>April 2</b>. US founders can file Form 15620 online via their IRS Online Account or by certified mail. The India-based founder cannot use online filing without US identity credentials, so mails a signed Form 15620 by courier with tracking well before the deadline, marking the taxpayer ID as applied for or not applicable per the form instructions, and gets advice on whether the election matters for a non-resident (it can matter if they later move to the US or have US-source compensation).</p><p><b>Risk:</b> the India-based founder must also comply with India\'s overseas-investment (ODI/LRS) rules when acquiring shares in a foreign company (Lesson 8).</p>`
      },
      takeaways: [
        'Clear the name with the USPTO as well as the state.',
        'Sign the operating agreement or bylaws, board consents and founder stock agreements at the start.',
        'Use vesting and IP assignment for every founder.',
        'File every 83(b) within 30 days; online filing via Form 15620 has been possible since mid-2025.'
      ],
      sources: [
        { title: 'Alston & Bird — IRS online filing for Section 83(b) elections (Aug 2025)', url: 'https://www.alston.com/en/insights/publications/2025/08/irs-online-filing-section-83b-elections' },
        { title: 'Goodwin — Online filing of Section 83(b) elections (July 2025)', url: 'https://www.goodwinlaw.com/en/insights/publications/2025/07/alerts-practices-erisa-online-filing-of-section-83b-elections' },
        { title: 'Stripe Atlas — what is included', url: 'https://stripe.com/atlas' },
        { title: 'Delaware Division of Corporations — franchise tax calculation', url: 'https://corp.delaware.gov/frtaxcalc/' }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'us-start-5',
      title: 'The EIN and federal identity: SS-4, ITIN, BOI and Form 5472',
      level: 'Intermediate',
      minutes: 17,
      hook: `A foreign founder can get a US company formed in a day, then lose weeks to an EIN fax queue, and a $25,000 penalty to a form most people have never heard of.`,
      eli5: `Your company now exists, but the national tax office does not know it yet. Getting an EIN is like getting your company its own phone number in the government directory. If the boss has a US personal number (SSN or ITIN), you can sign up online in minutes. If not, you have to phone, fax or post the form. And if the company is owned by someone abroad, the tax office wants a short yearly note saying what money moved between the company and its owner.`,
      blocks: [
        {
          type: 'flow', title: 'Getting an EIN (Form SS-4)',
          steps: [
            { label: 'Entity formed and legal name final', desc: 'Apply in the exact name on the state filing.' },
            { label: 'Does the responsible party have an SSN or ITIN, and is the principal business in the US?', kind: 'decision', desc: 'The IRS online tool needs a domestic entity, a US principal place of business (or territory) and the responsible party\'s SSN/ITIN.', branches: [ { label: 'Yes', to: 'Apply online (free, EIN issued immediately)' }, { label: 'No', to: 'Phone (international applicants), fax or mail Form SS-4' } ] },
            { label: 'Online route', desc: 'IRS hours (Eastern): Mon–Fri 6 a.m.–1 a.m., Sat 6 a.m.–9 p.m., Sun 6 p.m.–midnight. One EIN per responsible party per day. Download the confirmation letter at once.' },
            { label: 'Paper route', desc: 'International applicants can call the IRS (267-941-1099, not toll-free) on weekdays; fax usually returns an EIN in about four business days; mail takes about four weeks (IRS Taxpayer Advocate guidance). A third-party designee can sign and handle the call for you.' },
            { label: 'Store the EIN letter (CP 575) safely', desc: 'Banks ask for it; a replacement letter (147C) can be requested by phone if lost.' }
          ]
        },
        {
          type: 'text', title: 'Responsible party, ITIN and why they are different',
          html: `<p>The <b>responsible party</b> on Form SS-4 is the individual who ultimately owns or controls the entity (for example the CEO or managing member). The IRS wants a real human, not a nominee.</p><p>An <b>ITIN</b> (Individual Taxpayer Identification Number, applied for on <b>Form W-7</b>) is for individuals who need a US tax number but cannot get an SSN. You generally apply for it with a US tax return or another qualifying reason, plus original or certified identity documents (or via an IRS Certifying Acceptance Agent). You <span class="hl">do not need an ITIN to get an EIN</span>: a foreign responsible party can apply by phone, fax or mail. But an ITIN later helps with online IRS tools, some banks and personal US tax filings.</p>`
        },
        {
          type: 'timeline', title: 'FinCEN beneficial ownership (BOI): how the rule changed',
          items: [
            { label: 'Jan 1, 2024', desc: 'Corporate Transparency Act reporting begins for most small US and foreign companies.' },
            { label: 'Dec 3, 2024', desc: 'Texas Top Cop Shop v. Garland: a Texas federal court blocks the CTA nationwide.' },
            { label: 'Jan 23, 2025', desc: 'US Supreme Court stays that injunction; a separate injunction (Smith) keeps reporting paused until it is lifted in February 2025.' },
            { label: 'Mar 21–26, 2025', desc: 'FinCEN interim final rule: all US-formed companies and US persons exempt; only "foreign reporting companies" (formed abroad and registered to do business in a US state) must report. Existing ones by April 25, 2025; new ones within 30 days of registration taking effect.' },
            { label: 'Aug 11–14, 2026', desc: 'Final rule announced and published, effective August 14, 2026: makes the exemption permanent, removes the need for foreign companies to report US-person owners or company applicants, and plans deletion of US persons\' past data.' }
          ]
        },
        {
          type: 'compare', title: 'Who files what with FinCEN and the IRS (as of November 2026)', headers: ['Entity', 'FinCEN BOI report?', 'Extra IRS filing for foreign ownership'],
          rows: [
            ['Delaware C-corp owned by an Indian founder', 'No: it is a US-formed (domestic) company, so exempt', 'Form 5472 with Form 1120 if it has 25%+ foreign ownership and reportable related-party transactions'],
            ['Wyoming single-member LLC owned by a non-US person', 'No: domestic company, exempt', 'Yes: Form 5472 attached to a pro forma Form 1120 every year, even with no income'],
            ['Indian private limited company registered to do business in Texas', 'Yes: foreign reporting company; report non-US beneficial owners within 30 days of registration', 'Depends on US activity (effectively connected income, branch rules)'],
            ['US LLC owned by US citizens', 'No', 'No foreign-ownership filing']
          ]
        },
        {
          type: 'formula', name: 'The Form 5472 rule for foreign-owned single-member LLCs',
          expr: 'Foreign-owned disregarded LLC → treated as a corporation for Section 6038A reporting → file pro forma Form 1120 + Form 5472 by the corporate due date (calendar year: April 15) → penalty for failure: $25,000 per form per year, plus more if the failure continues after IRS notice',
          explain: 'Since 2017 regulations, a US single-member LLC owned by a foreign person must report "reportable transactions" with its owner and related parties: money contributed, distributions, loans, payments for services, even paying formation costs. The pro forma 1120 is mostly blank (name, address, EIN, and the attached 5472). These returns have generally been filed by fax or mail, not e-file; check the current Form 5472 instructions for the address.',
          example: 'An Indian founder forms a Wyoming LLC in June, wires $5,000 in to cover formation and software, and earns no US income. Next April 15 the LLC still files a pro forma 1120 with Form 5472 reporting the $5,000 contribution. Skipping it risks a $25,000 penalty, five times the money involved.'
        },
        {
          type: 'case', company: 'Texas Top Cop Shop, Inc. v. Garland', year: '2024–2025', title: 'The court fight that reshaped beneficial-ownership reporting',
          situation: `The Corporate Transparency Act required tens of millions of small US companies to report their owners to FinCEN, with civil penalties for wilful failure. Small businesses and advocacy groups sued, arguing Congress lacked power to require it.`,
          decision: `On December 3, 2024 a federal judge in the Eastern District of Texas issued a nationwide preliminary injunction. The Fifth Circuit first stayed it, then reinstated it, and on January 23, 2025 the US Supreme Court stayed the injunction pending appeal.`,
          outcome: `With another injunction lifted in February 2025, FinCEN instead used rulemaking: the March 2025 interim final rule exempted all domestic companies and US persons, and the August 2026 final rule made that permanent. Foreign reporting companies remain covered.`,
          lesson: `Federal compliance rules can change sharply within months. Always check the agency's current page and date before relying on an article, and set a reminder to recheck rules that are in litigation.`
        },
        {
          type: 'case', company: 'Farhy v. Commissioner', year: '2023–2024', title: 'Are foreign information-return penalties enforceable?',
          situation: `Alon Farhy failed to file Forms 5471 reporting foreign corporations he owned. The IRS assessed $10,000-per-form penalties under Section 6038 and tried to collect them administratively.`,
          decision: `In 2023 the US Tax Court held the IRS had no authority to assess those penalties administratively. The IRS appealed.`,
          outcome: `In May 2024 the D.C. Circuit reversed, holding the IRS can assess and collect these international information-return penalties. Section 6038A penalties for Form 5472 (now $25,000) follow a similar structure.`,
          lesson: `Do not rely on hoped-for loopholes in international information-return penalties. If your US company is foreign-owned, put Form 5472 on the annual calendar from year one.`
        },
        {
          type: 'checklist', title: 'Federal identity checklist for a foreign-owned company',
          items: [
            'Formation documents and exact legal name ready',
            'Responsible party identified (real individual with control)',
            'EIN obtained online, or by phone/fax/mail if no SSN/ITIN; EIN letter saved',
            'Decided whether an ITIN (Form W-7) is needed for personal US filings',
            'Checked FinCEN status: domestic company exempt; foreign company registered in a state reports within 30 days',
            'If foreign-owned single-member LLC: Form 5472 + pro forma 1120 diarised for April 15',
            'Records kept of every transfer between the company and its owners'
          ]
        },
        {
          type: 'questions', title: 'Ask before you apply for an EIN',
          items: [
            { q: 'Does our responsible party have an SSN or ITIN, and where is our principal place of business?', why: 'This decides online versus phone/fax/mail and how long you wait.' },
            { q: 'Is our company formed in the US or abroad?', why: 'US-formed companies are exempt from BOI reporting; foreign companies registered in a state must still file.' },
            { q: 'Is any owner of 25% or more a foreign person?', why: 'That can trigger Form 5472 reporting with a $25,000 penalty for missing it.' },
            { q: 'Who will sign as third-party designee, if anyone?', why: 'A designee can speed up phone and fax applications but sees your information.' },
            { q: 'Where will IRS mail go, and who reads it?', why: 'IRS notices go by post; missing one can turn a fixable issue into a penalty.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>FinCEN\'s rules changed in March 2025 and again in August 2026, and IRS procedures and phone numbers change. This lesson reflects research as of November 2026. Check <b>irs.gov</b> (EIN, Form SS-4, Form W-7, Form 5472 instructions) and <b>fincen.gov/boi</b> before filing. A CPA or enrolled agent experienced with foreign-owned companies, or a free SBA-network adviser (SCORE or a Small Business Development Center), can help.</p>`
        }
      ],
      terms: [
        { term: 'Form SS-4', def: `The IRS application for an Employer Identification Number, filed online, by phone (international applicants), fax or mail.` },
        { term: 'Responsible party', def: `The individual who ultimately owns or controls an entity and is named on the EIN application.` },
        { term: 'ITIN (Form W-7)', def: `An IRS tax number for individuals who need one but cannot get a Social Security number.` },
        { term: 'Foreign reporting company', def: `Under FinCEN's current rule, a company formed outside the US that registers to do business in a US state; it must file a BOI report.` },
        { term: 'Form 5472', def: `An IRS information return reporting transactions between a 25%-foreign-owned US company (or foreign-owned single-member LLC) and related parties.` },
        { term: 'Pro forma Form 1120', def: `A mostly blank corporate return that a foreign-owned disregarded LLC files only to carry its Form 5472.` }
      ],
      quiz: [
        { q: 'A Delaware C-corp wholly owned by a founder living in India must file a FinCEN BOI report in 2026?', options: ['Yes, within 30 days of formation', 'No; US-formed companies are exempt under the 2025 interim and 2026 final rules', 'Only if it has revenue', 'Only if it has a US bank account'], answer: 1, explain: 'The exemption depends on where the company is formed, not who owns it; domestic companies are exempt.' },
        { q: 'What is the penalty for failing to file a required Form 5472?', options: ['$500', '$10,000', '$25,000 per form per year (plus continuation penalties)', 'No penalty if there is no income'], answer: 2, explain: 'Section 6038A penalties are $25,000, and they apply even when the LLC had no income.' },
        { q: 'Which applicant can use the IRS online EIN tool?', options: ['A Wyoming LLC whose only owner lives abroad with no SSN/ITIN', 'A Delaware C-corp with a US office and a responsible party who has an SSN', 'An Indian company with no US presence', 'Anyone, any time of day'], answer: 1, explain: 'The online tool needs a domestic entity, a US principal place of business and an SSN/ITIN for the responsible party, during set hours.' },
        { q: 'How many EINs can one responsible party obtain online per day?', options: ['One', 'Three', 'Five', 'Unlimited'], answer: 0, explain: 'The IRS limits online applications to one EIN per responsible party per day.' },
        { q: 'Under the August 2026 final rule, a foreign reporting company must report…', options: ['All beneficial owners including US persons', 'Its non-US beneficial owners; US persons are exempt', 'Nothing at all', 'Only its revenue'], answer: 1, explain: 'The final rule kept reporting for foreign reporting companies but exempted reporting of US-person owners and applicants.' }
      ],
      challenge: {
        title: 'Plan the federal identity steps for a foreign-owned LLC',
        prompt: `<p>Priya, an Indian resident with no SSN or ITIN, forms a single-member Wyoming LLC on 10 February to sell design templates online to US customers. She contributes $3,000, pays a $500 formation service fee from her personal card and plans to take out about $20,000 of profit during the year. (Illustrative.)</p><p>List the steps to get the EIN, state her FinCEN position, and describe her annual IRS filing duty, including what she must track.</p>`,
        hints: ['Online EIN is not available to her; what are the routes?', 'The LLC is domestic for FinCEN.', 'Every transfer between Priya and the LLC is reportable.'],
        model: `<p><b>EIN:</b> she cannot use the online tool (no SSN/ITIN). She calls the IRS international line on a weekday, or faxes a signed SS-4 (about four business days), naming herself as responsible party; a formation service can act as third-party designee. Save the EIN letter for the bank.</p><p><b>FinCEN:</b> a Wyoming LLC is a US-formed company, so it is exempt from BOI reporting under the March 2025 interim final rule, made permanent by the August 2026 final rule.</p><p><b>IRS:</b> as a foreign-owned disregarded entity, the LLC files a pro forma Form 1120 with Form 5472 by April 15 of next year (or extends with Form 7004), reporting the $3,000 contribution, the $500 formation cost she paid for it, and each profit distribution. Penalty risk: $25,000 for not filing.</p><p><b>Also:</b> she should get advice on whether her US sales create effectively connected income requiring a Form 1040-NR (online sales of digital goods managed from India often do not, but facts matter), and keep a ledger of every transfer.</p>`
      },
      takeaways: [
        'EINs are free; the online tool needs an SSN/ITIN and a US principal place of business.',
        'Foreign responsible parties use phone, fax or mail, and do not need an ITIN for an EIN.',
        'Since 2025 (made permanent in August 2026), US-formed companies do not file BOI reports; foreign companies registered in a state still do.',
        'Foreign-owned single-member LLCs file Form 5472 with a pro forma 1120 every year; the penalty is $25,000.'
      ],
      sources: [
        { title: 'IRS — Get an employer identification number (hours, limits, eligibility)', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number' },
        { title: 'Taxpayer Advocate Service — Getting an EIN', url: 'https://www.taxpayeradvocate.irs.gov/get-help/general/getting-an-ein' },
        { title: 'Mayer Brown — FinCEN final rule on BOI (Aug 2026)', url: 'https://www.mayerbrown.com/en/insights/publications/2026/08/the-final-chapter-fincen-permanently-eliminates-boi-reporting-requirements-for-us-companies-and-us-persons' },
        { title: 'SCOTUSblog — Justices allow enforcement of the CTA to go forward (Jan 2025)', url: 'https://www.scotusblog.com/2025/01/justices-allow-enforcement-of-corporate-transparency-law-to-go-forward/' },
        { title: 'Ballard Spahr — FinCEN permanently exempts US entities and persons (Aug 2026)', url: 'https://www.ballardspahr.com/insights/alerts-and-articles/2026/08/fincen-permanently-exempts-us-entities-and-persons-from-beneficial-ownership-reporting' }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'us-start-6',
      title: 'Bank, books and money setup',
      level: 'Intermediate',
      minutes: 16,
      hook: `Limited liability is a promise you keep with your bank statements: mix personal and company money and a court can treat the company as you.`,
      eli5: `Your company is like a pet that owns its own piggy bank. If you take coins from the pet's piggy bank for your own sweets, and drop your own coins in whenever you like, nobody can tell whose money is whose. Then if the pet breaks a neighbour's window, the neighbour can say "the pet and its owner are really the same" and come after your piggy bank too. Separate piggy banks keep the pet's trouble with the pet.`,
      blocks: [
        {
          type: 'checklist', title: 'Documents banks usually ask for',
          items: [
            'Stamped formation document (certificate of incorporation or articles of organization)',
            'EIN confirmation letter (CP 575) or 147C letter',
            'Operating agreement or bylaws plus a board/member resolution authorising the account',
            'Ownership chart showing every 25%+ owner (banks still collect beneficial ownership under FinCEN\'s Customer Due Diligence rule)',
            'Government photo ID (passport for non-US owners) and proof of address',
            'A US business address (registered agent addresses are often not accepted as the operating address)',
            'Description of the business, expected volumes and countries involved'
          ]
        },
        {
          type: 'compare', title: 'Banking options for founders (check current eligibility)', headers: ['', 'Big US bank branch', 'Online fintech (e.g. Mercury, Relay)', 'Stripe Treasury / payment-platform accounts', 'Multi-currency (e.g. Wise Business)'],
          rows: [
            ['Non-US founder friendly?', 'Usually needs in-person visit and US ties', 'Often yes for US entities, but country restrictions and reviews apply', 'Tied to the platform; good for Atlas companies', 'Yes; useful for receiving USD and paying abroad'],
            ['Deposit insurance', 'FDIC insured directly', 'Via partner banks (pass-through FDIC coverage only if records are right)', 'Via partner banks', 'Varies by product and country'],
            ['Strengths', 'Credit lines, cash deposits, relationships', 'Fast online opening, startup tooling', 'Integrated with payments', 'FX and cross-border transfers'],
            ['Limits', 'Hard to open remotely', 'Accounts can be closed after risk reviews; you depend on the fintech\'s records', 'Platform dependency', 'Not always a full US bank account']
          ]
        },
        {
          type: 'case', company: 'Synapse Financial Technologies', year: '2024–2025', title: 'When your "bank" is really a fintech middleman',
          situation: `Synapse connected consumer and business fintech apps to partner banks, keeping the ledgers of who owned which dollars in pooled accounts.`,
          decision: `It filed for Chapter 11 bankruptcy in April 2024. Partner banks froze accounts while they tried to reconcile records that did not match.`,
          outcome: `More than 100,000 end users lost access to funds; the court-appointed trustee estimated a shortfall of $65–95 million. The CFPB sued Synapse and in late 2025 designated about $46 million from its victims fund, roughly half the gap.`,
          lesson: `FDIC insurance protects you when a bank fails, not when a fintech's records fail. Know which bank actually holds your money, keep a second account, and download statements monthly.`
        },
        {
          type: 'case', company: 'Kinney Shoe Corp. v. Polan', year: '1991', title: 'Veil piercing in an undercapitalized company',
          situation: `Lincoln Polan formed Industrial Realty, which subleased a building from Kinney Shoe. Industrial had no assets, no bank account and no capital, issued no stock and held no meetings. When rent went unpaid, Kinney won a judgment against Industrial and then sued Polan personally.`,
          decision: `The trial court said Kinney had assumed the risk of dealing with a thin company. Kinney appealed to the US Court of Appeals for the Fourth Circuit.`,
          outcome: `The Fourth Circuit reversed and held Polan personally liable, because he ignored corporate formalities and put no money into the company, so treating it as separate would be unfair.`,
          lesson: `Courts pierce the veil when owners treat the company as a shell: no capital, no separate accounts, no records. Fund the company adequately, sign contracts in its name and keep its formalities.`
        },
        {
          type: 'compare', title: 'Cash vs accrual accounting', headers: ['', 'Cash method', 'Accrual method'],
          rows: [
            ['Revenue recorded when', 'Money is received', 'It is earned (invoice / delivery)'],
            ['Expenses recorded when', 'Money is paid', 'They are incurred'],
            ['Who can use it for tax', 'Most small businesses below the gross-receipts test (about $31 million average annual receipts for 2025, inflation-adjusted yearly)', 'Anyone; required above the test and for some entities'],
            ['Good for', 'Simplicity, matching tax to cash', 'Investor reporting, GAAP, understanding true margins'],
            ['Watch out', 'Can hide unpaid bills and receivables', 'Tax can be due on income not yet collected']
          ]
        },
        {
          type: 'flow', title: 'Money setup in your first month',
          steps: [
            { label: 'Open the business account in the entity\'s exact name', desc: 'Use the EIN, not a personal SSN.' },
            { label: 'Capitalize the company', desc: 'Founders put in documented money (equity or a written loan). Record it in the books and, for foreign-owned LLCs, for Form 5472.' },
            { label: 'Connect payment processing', desc: 'Stripe, PayPal, Square or similar, paying out to the business account.' },
            { label: 'Choose bookkeeping software and a chart of accounts', desc: 'QuickBooks, Xero or similar; connect bank feeds; pick cash or accrual.' },
            { label: 'Will you pay contractors?', kind: 'decision', desc: 'Collect W-9 (US) or W-8BEN / W-8BEN-E (foreign) before paying.', branches: [ { label: 'Yes', to: 'Track totals; 1099-NEC if a US payee gets $2,000+ (payments from 2026)' }, { label: 'No', to: 'Continue' } ] },
            { label: 'Monthly close', desc: 'Reconcile bank and card accounts, review profit and cash, save receipts.' }
          ]
        },
        {
          type: 'callout', kind: 'tip', title: 'Payment processors and the 2025 tax law',
          html: `<p>Processors like Stripe need a US entity, an EIN and a US bank account for a US account (Stripe Atlas exists partly to give foreign founders all three). They report your sales to the IRS on <b>Form 1099-K</b> when you exceed <b>$20,000 and 200 transactions</b> in a year (restored by the 2025 tax law). If you pay US contractors, the <b>1099-NEC</b> threshold rose from $600 to <b>$2,000 for payments made after December 31, 2025</b>, per the IRS.</p>`
        },
        {
          type: 'interactive', widget: 'runway', title: 'How long will your starting cash last?',
          note: 'Enter your starting bank balance, monthly burn (formation fees, registered agent, software, insurance, salaries) and expected revenue growth. See how many months you have before you must raise money or cut costs.'
        },
        {
          type: 'questions', title: 'Ask before you open accounts and books',
          items: [
            { q: 'Which actual bank holds our deposits, and is it FDIC-insured?', why: 'With fintechs, your protection depends on the partner bank and accurate records (Synapse).' },
            { q: 'Do we have at least two ways to receive and hold money?', why: 'Accounts get frozen during reviews; a backup keeps payroll and suppliers paid.' },
            { q: 'How is each founder\'s money going in: equity or loan, and documented?', why: 'Clear capitalization supports the liability shield and is needed for Form 5472.' },
            { q: 'Cash or accrual, and who closes the books monthly?', why: 'Late or messy books lead to wrong taxes and slow fundraising due diligence.' },
            { q: 'Do we collect W-9 or W-8 forms before paying anyone?', why: 'Missing forms can require backup withholding and penalties.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Banking eligibility, fintech terms and tax thresholds change; several thresholds changed for 2026. This lesson reflects research as of November 2026. Check <b>irs.gov</b> (Forms 1099, 1099-K, accounting methods), <b>fdic.gov</b> and your bank\'s current terms. A CPA, or a free SCORE or Small Business Development Center adviser via <b>sba.gov</b>, can help set up your books.</p>`
        }
      ],
      terms: [
        { term: 'Piercing the corporate veil', def: `A court disregarding an entity\'s separate existence and holding owners personally liable, usually for undercapitalization, commingling or fraud.` },
        { term: 'Commingling', def: `Mixing personal and business funds in the same account or paying personal costs from the business, which weakens the liability shield.` },
        { term: 'Cash method', def: `Accounting that records income when received and expenses when paid; allowed for most small businesses.` },
        { term: 'Accrual method', def: `Accounting that records income when earned and expenses when incurred, matching revenue to costs.` },
        { term: 'Form 1099-NEC', def: `An IRS form reporting payments to non-employee US service providers; from 2026 payments, required at $2,000 or more.` },
        { term: 'Pass-through FDIC coverage', def: `Deposit insurance that reaches end customers of a fintech only if the partner bank\'s records properly show who owns the funds.` }
      ],
      quiz: [
        { q: 'In Kinney Shoe v. Polan, why was the owner held personally liable?', options: ['He signed a personal guarantee', 'The company was undercapitalized and ignored formalities', 'He was a non-US person', 'He used the cash method'], answer: 1, explain: 'No capital and no formalities made it unfair to treat the company as separate.' },
        { q: 'For payments made in 2026, a US contractor paid $1,500 for services needs a 1099-NEC?', options: ['Yes, the threshold is $600', 'No, the threshold is now $2,000', 'Yes, always', 'Only if paid by card'], answer: 1, explain: 'The IRS says the threshold is $2,000 for payments made after December 31, 2025.' },
        { q: 'What did the Synapse collapse show founders?', options: ['FDIC insurance covers fintech record failures', 'Know which bank holds your money and keep a backup account', 'Never use online banking', 'Banks cannot freeze accounts'], answer: 1, explain: 'FDIC insurance covers bank failure, not middleware ledger failures.' },
        { q: 'A startup invoices $50,000 in December, collected in February. Under the cash method, the revenue is recorded…', options: ['In December', 'In February', 'Split equally', 'Never'], answer: 1, explain: 'Cash method records income when received.' },
        { q: 'A company has $120,000 cash and burns $15,000 per month with no revenue. Runway is…', options: ['6 months', '8 months', '10 months', '12 months'], answer: 1, explain: '$120,000 ÷ $15,000 = 8 months.' }
      ],
      challenge: {
        title: 'Set up money for a two-founder SaaS',
        prompt: `<p>A Delaware C-corp with a US founder and an Indian founder has $60,000 from the founders (to be documented), expects monthly costs of $9,000 and first revenue in month 6 growing to $6,000/month by month 12. It will pay a US contractor $1,800 and an Indian contractor $12,000 this year. (Illustrative.)</p><p>Design their banking, bookkeeping and payment setup, compute rough runway, and list the tax forms they collect or file for the contractors.</p>`,
        hints: ['Two accounts; which bank holds the money?', 'Runway before revenue = cash ÷ burn.', 'W-9 vs W-8BEN; 1099-NEC threshold.'],
        model: `<p><b>Banking:</b> primary account at an FDIC-insured bank or well-established fintech (confirm the partner bank), plus a backup account; Stripe paying out to the primary account.</p><p><b>Capital:</b> board resolution documenting $60,000 as stock purchase or a convertible note/loan; record it in the books.</p><p><b>Books:</b> accounting software with bank feeds; accrual basis for investor reporting (tax can be on cash method); monthly close by a bookkeeper.</p><p><b>Runway:</b> $60,000 ÷ $9,000 ≈ 6.7 months with no revenue. Revenue starting month 6 extends this only slightly, so they should raise money or cut costs by about month 5.</p><p><b>Contractors:</b> collect a W-9 from the US contractor; at $1,800 for 2026 payments, no 1099-NEC is required (below $2,000), but keep records. Collect a W-8BEN from the Indian individual; services performed in India are generally foreign-source, so no US withholding or 1099 applies, but keep the form on file.</p>`
      },
      takeaways: [
        'Open a business account in the entity\'s name and never mix personal money in.',
        'Fund the company properly and document how money goes in and out.',
        'Know which bank actually holds fintech deposits and keep a backup account.',
        'Choose cash or accrual on purpose; note the 2026 thresholds: 1099-NEC at $2,000 and 1099-K at $20,000 and 200 transactions.'
      ],
      sources: [
        { title: 'IRS — Am I required to file a Form 1099 or other information return?', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return' },
        { title: 'IRS — Working Families Tax Cuts: gig economy workers (FS-2026-07, 1099-K threshold)', url: 'https://www.irs.gov/newsroom/the-working-families-tax-cuts-what-gig-economy-workers-should-know' },
        { title: 'Banking Dive — CFPB sues Synapse, plans victims fund payout', url: 'https://www.bankingdive.com/news/cfpb-sues-synapse-plans-use-victims-fund-pay-end-users/758776/' },
        { title: 'Wikipedia — Kinney Shoe Corp. v. Polan (4th Cir. 1991)', url: 'https://en.wikipedia.org/wiki/Kinney_Shoe_Corp_v._Polan' },
        { title: 'Stripe Atlas — entity, EIN and bank setup for founders', url: 'https://stripe.com/atlas' }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'us-start-7',
      title: 'Licences, permits, insurance and protecting your brand',
      level: 'Intermediate',
      minutes: 18,
      hook: `You can form a company in an afternoon, but opening a café, selling wine or running a moving van legally can take months of permits, and a brand you never registered can be taken from you.`,
      eli5: `Forming a company gives you a shop. Licences are the keys to the rooms inside: one for selling food, one for the van, one for hiring a plumber. Insurance is the umbrella for when something goes wrong. A trademark is a name tag sewn onto your shop sign so nobody else in the country can use the same name for the same kind of shop.`,
      blocks: [
        {
          type: 'pyramid', title: 'Layers of permission to operate', levels: [
            { label: 'Federal licences', note: 'Only for regulated activities', desc: 'The SBA lists activities needing federal licences or permits: agriculture imports and interstate transport (USDA), alcohol (TTB), aviation (FAA), firearms and explosives (ATF), fish and wildlife (FWS), commercial fishing (NOAA), maritime transport (FMC), drilling on federal land (BSEE), nuclear energy (NRC), broadcasting (FCC), and oversize vehicles (via DOT and states).' },
            { label: 'State licences', note: 'Broader than federal', desc: 'Professional and occupational licences (contractors, cosmetologists, engineers, health professionals), state alcohol permits, sales-tax permit, and industry rules such as money transmission.' },
            { label: 'Local licences and zoning', note: 'City and county', desc: 'General business licence, zoning and certificate of occupancy, health, fire, signage and home-occupation permits. Commonly regulated locally: construction, restaurants, retail, dry cleaning, vending machines, auctions.' },
            { label: 'Registrations for tax and staff', note: 'Everyone with sales or employees', desc: 'Seller\'s permit, state payroll and unemployment accounts, workers\' compensation.' }
          ]
        },
        {
          type: 'compare', title: 'Insurance basics for a new US business', headers: ['Policy', 'Covers', 'Who needs it'],
          rows: [
            ['General liability', 'Injuries and property damage to others; some advertising injury', 'Almost everyone, often required by landlords and clients'],
            ['Professional liability (E&O)', 'Claims that your advice or service caused loss', 'Consultants, agencies, software and services firms'],
            ['Workers\' compensation', 'Employee injuries on the job', 'Required in nearly every state once you have employees (Texas is a notable opt-out state)'],
            ['Commercial property / business owner\'s policy', 'Equipment, inventory, premises; BOP bundles with liability', 'Shops, offices, makers'],
            ['Cyber liability', 'Data breaches, ransomware, notification costs', 'Anyone holding customer data'],
            ['Directors and officers (D&O)', 'Claims against directors and officers', 'Companies with outside investors or boards'],
            ['Commercial auto', 'Vehicles used for business', 'Any business vehicle use']
          ]
        },
        {
          type: 'flow', title: 'USPTO trademark process (fees effective January 18, 2025)',
          steps: [
            { label: 'Search', desc: 'Search the USPTO trademark database, state registers, the web and app stores for similar marks on related goods or services.' },
            { label: 'Are you domiciled outside the US?', kind: 'decision', desc: 'Since August 3, 2019, foreign-domiciled applicants must use a US-licensed attorney.', branches: [ { label: 'Yes', to: 'Hire a US-licensed trademark attorney' }, { label: 'No', to: 'May file yourself (an attorney is still wise)' } ] },
            { label: 'File in Trademark Center', desc: 'Base application fee $350 per class. Surcharges: $100 per class for insufficient information, $200 per class for using free-form text instead of the ID Manual, and $200 per extra 1,000 characters of free-form text.' },
            { label: 'Filing basis', desc: 'Use in commerce (with a specimen showing the mark as used, e.g. a product label or a website page with a buy button) or intent to use.' },
            { label: 'Examination', desc: 'A USPTO examining attorney reviews it, typically months after filing; you respond to any office action by the deadline.' },
            { label: 'Publication and 30-day opposition window', desc: 'Anyone who thinks they would be harmed can oppose.' },
            { label: 'Registration or notice of allowance', desc: 'Intent-to-use applicants then file a statement of use ($150 per class) within 6 months, extendable in 6-month steps.' },
            { label: 'Maintain', desc: 'Section 8 declaration between years 5–6 and 9–10; renewal every 10 years ($325 per class for the Section 9 renewal).' }
          ]
        },
        {
          type: 'case', company: 'Jack Daniel\'s Properties v. VIP Products', year: '2023', title: 'A parody dog toy and the limits of "it\'s just a joke"',
          situation: `VIP Products sold a "Bad Spaniels" dog toy shaped and labelled like a Jack Daniel's whiskey bottle, with poop jokes in place of the whiskey wording. Jack Daniel's sued for trademark infringement and dilution.`,
          decision: `Lower courts applied a free-speech test that protected expressive works. The case went to the US Supreme Court.`,
          outcome: `In June 2023 the Supreme Court ruled unanimously for Jack Daniel's on the threshold question: when a parody is used as the defendant's own brand (a source identifier), the special free-speech screen does not apply, and the ordinary likelihood-of-confusion test governs. The case went back to the lower courts.`,
          lesson: `Using someone else's famous mark as part of your own brand is risky even as a joke. Clear your name and logo before you print packaging.`
        },
        {
          type: 'case', company: 'Abitron Austria GmbH v. Hetronic International', year: '2023', title: 'US trademark law stops at the border',
          situation: `Hetronic, a US maker of radio remote controls, won a large jury award against former foreign distributors who sold look-alike products, mostly in Europe.`,
          decision: `The defendants argued the US Lanham Act could not reach sales made abroad. The Supreme Court took the case.`,
          outcome: `In June 2023 the Court held that the Lanham Act's infringement provisions apply only where the infringing "use in commerce" is domestic, sending the case back to narrow the damages.`,
          lesson: `A US trademark protects you in the US. If you sell in India, Europe or elsewhere, register there too (for example through the Madrid Protocol); and a foreign registration does not protect you in the US.`
        },
        {
          type: 'text', title: 'Copyrights and patents in brief',
          html: `<ul><li><b>Copyright</b> protects original works (code, text, designs, photos) automatically on creation. Registering with the US Copyright Office is needed before suing for infringement of a US work and unlocks statutory damages if done early. Make sure contractors assign copyright to the company in writing.</li><li><b>Patents</b> protect inventions. A <b>provisional application</b> holds a filing date for 12 months while you test the idea; a non-provisional application is then examined. Public disclosure can destroy patent rights in many countries, so file before you publish or pitch openly. Small and micro entities pay reduced USPTO fees.</li><li><b>Trade secrets</b> (recipes, algorithms, customer lists) are protected by keeping them secret: NDAs, access controls and employee agreements.</li></ul>`
        },
        {
          type: 'interactive', widget: 'breakeven', title: 'Can your fixed compliance costs pay for themselves?',
          note: 'Add annual fixed costs such as licences, insurance (e.g. $2,500), a trademark ($350+ per class), registered agent and accounting to your other fixed costs. Enter price and variable cost per unit and see how many units you must sell to break even.'
        },
        {
          type: 'questions', title: 'Ask before you open your doors',
          items: [
            { q: 'Is any part of our activity on the federal list (alcohol, firearms, transport, broadcasting, wildlife)?', why: 'Federal permits can take months and must be in place before you operate.' },
            { q: 'Does our state license our profession or trade?', why: 'Unlicensed work can void contracts and bring fines.' },
            { q: 'Does our location\'s zoning allow our use, including home-based work?', why: 'Signing a lease before checking zoning is a classic, costly mistake.' },
            { q: 'Have we searched our name at the USPTO, not just the state?', why: 'A prior federal registrant can force a rebrand after you have paid for signs and packaging.' },
            { q: 'Which insurance do our landlord, clients and state require?', why: 'Contracts often require proof of coverage before you start work.' },
            { q: 'Do we sell taxable goods or services, and where?', why: 'You may need a seller\'s permit before your first sale in each nexus state.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Licensing rules vary by state, county and city, and USPTO fees and procedures change (the current structure took effect January 18, 2025). This lesson reflects research as of November 2026. Check <b>sba.gov</b> (licences and permits), <b>uspto.gov</b>, <b>copyright.gov</b> and your state and city sites. A licensed attorney (required for foreign-domiciled trademark applicants), an insurance broker, or a free SCORE or Small Business Development Center adviser can help.</p>`
        }
      ],
      terms: [
        { term: 'Seller\'s permit', def: `A state registration allowing you to collect sales tax on taxable sales; names vary (sales-tax permit, sales and use tax licence).` },
        { term: 'Zoning', def: `Local rules on what activities can happen at a location (retail, office, industrial, home occupation).` },
        { term: 'Specimen', def: `Evidence submitted to the USPTO showing the trademark as actually used with the goods or services, such as a label or webpage.` },
        { term: 'Intent-to-use application', def: `A trademark application filed before use begins; registration issues only after a statement of use is accepted.` },
        { term: 'Opposition', def: `A 30-day window after USPTO publication in which others may challenge a trademark application.` },
        { term: 'Provisional patent application', def: `A lower-cost filing that secures a priority date for 12 months before a full patent application.` }
      ],
      quiz: [
        { q: 'What is the USPTO base trademark application fee per class since January 18, 2025?', options: ['$250', '$350', '$500', '$750'], answer: 1, explain: 'The base application fee is $350 per class, with surcharges for insufficient information or free-form descriptions.' },
        { q: 'A London-based founder wants to file a US trademark. What is required?', options: ['Nothing special', 'A US-licensed attorney', 'A US citizen co-owner', 'A US bank account'], answer: 1, explain: 'Since August 2019, foreign-domiciled applicants must be represented by a US-licensed attorney.' },
        { q: 'An application in 2 classes uses free-form text in both instead of the ID Manual. Base plus that surcharge totals…', options: ['$700', '$900', '$1,100', '$1,500'], answer: 2, explain: '2 × $350 = $700 plus 2 × $200 = $400, total $1,100.' },
        { q: 'Abitron v. Hetronic (2023) held that the Lanham Act…', options: ['Applies worldwide', 'Reaches infringing use in commerce only in the US', 'Does not cover registered marks', 'Bans parody'], answer: 1, explain: 'The infringement provisions apply where the infringing use in commerce is domestic.' },
        { q: 'Fixed costs of $30,000 a year, price $50, variable cost $20 per unit. Break-even units?', options: ['600', '1,000', '1,500', '2,000'], answer: 1, explain: '$30,000 ÷ ($50 − $20) = 1,000 units.' }
      ],
      challenge: {
        title: 'Licences and brand plan for a craft brewery taproom',
        prompt: `<p>Two founders plan a small brewery with a taproom in Denver, selling beer on site and cans to local shops, under the brand "Mile High Hops" (hypothetical). They have not yet signed a lease.</p><p>List the federal, state and local permits likely needed, the insurance they should buy, and their trademark steps and USPTO fees for beer (Class 32) and taproom services (Class 43), assuming they use the ID Manual.</p>`,
        hints: ['Alcohol is regulated federally and by the state.', 'Zoning before lease.', 'Two classes × base fee.'],
        model: `<p><b>Federal:</b> TTB Brewer\'s Notice before brewing; TTB label approval (COLA) for packaged beer; federal excise tax returns.</p><p><b>State (Colorado):</b> state manufacturer/brewpub licence from the liquor enforcement division; sales-tax licence; state payroll and unemployment accounts.</p><p><b>Local:</b> zoning check and certificate of occupancy <i>before</i> signing the lease; city liquor licence and local hearing; health, fire and signage permits; building permits for the brewhouse.</p><p><b>Insurance:</b> general liability, liquor liability, property/BOP, workers\' compensation (required in Colorado once they hire), product liability, commercial auto if delivering.</p><p><b>Trademark:</b> search USPTO and state registers for HOPS-style marks (crowded field; "Mile High" is geographically descriptive and may be weak); consider a more distinctive name; file in Class 32 and Class 43 at $350 each = <b>$700</b> (intent-to-use if not yet selling, then $150 per class statement of use). Monitor the 30-day opposition period.</p>`
      },
      takeaways: [
        'Federal licences cover a short list of activities; states and cities regulate far more.',
        'Check zoning before signing a lease.',
        'USPTO base fee is $350 per class since January 18, 2025, with surcharges for incomplete or free-form filings; foreign-domiciled applicants need a US attorney.',
        'US trademarks protect only the US; register in each country you sell in.'
      ],
      sources: [
        { title: 'SBA — Launch your business: apply for licences and permits', url: 'https://www.sba.gov/counseling/launch-your-business/' },
        { title: 'USPTO — Summary of 2025 trademark fee changes', url: 'https://www.uspto.gov/trademarks/fees-payment-information/summary-2025-trademark-fee-changes' },
        { title: 'USPTO — Trademark process', url: 'https://www.uspto.gov/trademarks/basics/trademark-process' },
        { title: 'Supreme Court docket 22-148 — Jack Daniel\'s Properties v. VIP Products (decided June 8, 2023)', url: 'https://www.supremecourt.gov/docket/docketfiles/html/public/22-148.html' },
        { title: 'Supreme Court docket 21-1043 — Abitron Austria GmbH v. Hetronic International (decided June 29, 2023)', url: 'https://www.supremecourt.gov/docket/docketfiles/html/public/21-1043.html' }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'us-start-8',
      title: 'The non-US and Indian founder playbook',
      level: 'Advanced',
      minutes: 20,
      hook: `Owning a US company is easy from Bengaluru; working for it inside the US is a visa question, and in 2024–25 some of India's best-known startups paid hundreds of millions of dollars to undo their US "flip".`,
      eli5: `Imagine you run a cricket academy in Pune and want American kids to join. You can open a US branch on paper from home, and own it. But owning the branch does not give you permission to coach on American fields; that needs a separate pass (a visa). Some academies even made the American branch the "parent" so American sponsors would invest, then later found it was cheaper to have the parent back home, and paid a big fee to move it.`,
      blocks: [
        {
          type: 'compare', title: 'Two structures for an Indian founder', headers: ['', 'US parent ("flip"): Delaware C-corp owns Indian subsidiary', 'Indian parent: Indian company owns a US subsidiary'],
          rows: [
            ['Why chosen', 'US VCs, accelerators (e.g. YC), US customers and a possible US IPO', 'India-first business, Indian investors, planned Indian IPO'],
            ['Founder shares held', 'In the US company (founders must follow India\'s overseas investment / LRS rules)', 'In the Indian company'],
            ['Indian operations', 'Wholly owned Indian subsidiary does engineering and sales; needs transfer-pricing agreements', 'Parent operates directly; US sub sells to US customers'],
            ['Key risks', 'Indian tax residency of the parent (place of effective management), transfer pricing, costly reverse flip later', 'US investors less familiar; US sub needs its own tax filings and Form 5472'],
            ['Undoing it', 'Reverse flip: merge US parent into Indian company; can trigger US and Indian taxes', 'Simpler: close or sell the US sub']
          ]
        },
        {
          type: 'map', title: 'What you can do remotely, and what needs presence', center: 'Running a US company from India',
          branches: [
            { label: 'Fully remote', desc: 'Form the entity, get an EIN by phone/fax, sign documents electronically, issue stock, open fintech accounts in many cases, use Stripe, hire US contractors.', children: ['Formation', 'EIN', 'Stripe'] },
            { label: 'Harder remotely', desc: 'Big-bank accounts, some state licences and leases, and IRS online tools that need US identity verification.', children: ['Branch banks', 'Leases'] },
            { label: 'Visits (B-1)', desc: 'Business visitors may attend meetings, negotiate contracts and consult with partners, but may not do productive work or be paid by a US source.', children: ['Meetings', 'Negotiations'] },
            { label: 'Needs a work visa', desc: 'Actually working in the US for your company (running daily operations, coding, selling on site).', children: ['L-1', 'O-1', 'H-1B'] },
            { label: 'Tax and compliance', desc: 'US returns, Form 5472, treaty forms, Indian ODI and transfer-pricing filings; usually handled by CPAs on both sides.', children: ['W-8BEN-E', 'Transfer pricing'] }
          ]
        },
        {
          type: 'compare', title: 'Visa reality: owning is not working (check uscis.gov and travel.state.gov)', headers: ['Visa', 'Fits', 'Key conditions for an Indian founder'],
          rows: [
            ['E-2 treaty investor', 'Investors from treaty countries', 'Not available: India is not on the State Department\'s E-1/E-2 treaty country list (verified November 2026). Some founders gain a second citizenship from a treaty country, which is a complex, long-term route.'],
            ['L-1A intracompany manager', 'Founders of an Indian company opening a US office', 'At least one continuous year in the past three working abroad for the related company in a managerial or executive role; "new office" petitions get a shorter initial stay and must show the office will grow'],
            ['O-1A extraordinary ability', 'Founders with strong awards, press, funding or publications', 'Evidence of sustained acclaim; the company or an agent can petition'],
            ['H-1B specialty occupation', 'Founders employed by their own US company', 'Annual lottery; the company must truly employ and control the founder; a September 2025 proclamation added a $100,000 payment for many new petitions, so check current rules'],
            ['B-1 business visitor', 'Short trips', 'Meetings and negotiations only; no productive work']
          ]
        },
        {
          type: 'formula', name: 'Cross-border withholding with a W-8BEN-E (US–India treaty)',
          expr: 'US tax withheld on a payment to an Indian company = Gross payment × (30% statutory rate, or the lower treaty rate claimed on Form W-8BEN-E)',
          explain: 'A US payer generally withholds 30% on US-source passive income (dividends, interest, royalties) paid to foreign persons, unless the recipient gives a valid W-8BEN-E claiming a treaty rate. Under the US–India treaty, dividends are generally 15% (for a company holding at least 10% of voting stock) or 25%; royalties and fees for included services are generally 15%. Payment for services performed entirely outside the US is usually not US-source and not subject to this withholding.',
          example: 'A Delaware parent pays a $100,000 royalty to its Indian group company for software IP. Without a W-8BEN-E: $30,000 withheld. With a valid W-8BEN-E claiming the treaty: $15,000 withheld, and India generally gives a foreign tax credit. If instead the Indian company is paid $100,000 for engineering work done in India, there is generally no US withholding, but transfer pricing must show the fee is at arm\'s length.'
        },
        {
          type: 'callout', kind: 'insight', title: 'Transfer pricing: the bill you do not see coming',
          html: `<p>When a US parent pays its Indian subsidiary for engineering, both tax authorities care about the price. The IRS (Section 482) and India\'s Income Tax Department both require <b>arm\'s-length pricing</b>, as if unrelated companies had agreed it. Indian subsidiaries typically charge cost plus a markup, file an accountant\'s report (Form 3CEB) each year and keep benchmarking studies. An intercompany services agreement, signed at the start, is essential.</p>`
        },
        {
          type: 'case', company: 'Groww', year: '2024–2025', title: 'Paying to come home',
          situation: `Groww, an Indian investing app, was built with a US (Delaware) parent company, a common setup for raising venture capital from US investors.`,
          decision: `As an Indian IPO became the goal, Groww moved its parent back to India, completing the reverse flip in early 2024 after National Company Law Tribunal approval. Reports, which vary, put its US tax bill for the move in the range of about $60 million to $160 million.`,
          outcome: `Its parent, Billionbrains Garage Ventures, listed on Indian exchanges on November 12, 2025 at a premium to its ₹100 issue price, after an issue subscribed about 17.6 times.`,
          lesson: `A US parent is a choice with an exit cost. If your long-term listing, customers and regulators are in India, model the cost of flipping back before you flip out.`
        },
        {
          type: 'case', company: 'Razorpay, Meesho, PhonePe and Zepto', year: '2022–2025', title: 'The reverse-flip wave',
          situation: `Many Indian startups had foreign parents: Razorpay, Meesho, Groww and Dream11 in the US; PhonePe and Zepto in Singapore. Indian public markets became attractive, and India allowed fast-track inbound mergers of foreign holding companies into Indian subsidiaries from September 2024.`,
          decision: `Razorpay completed its move from the US in May 2025 (reports said it paid about $150 million in taxes). Meesho received NCLT approval on May 27, 2025 for its US-to-India move (reported US tax of about $280–300 million). PhonePe moved from Singapore in 2022; Zepto received NCLT approval for its Singapore-to-India move in 2025.`,
          outcome: `Meesho listed in India on December 10, 2025, opening about 46% above its IPO price. Groww had listed in November 2025. The flips were expensive but opened the Indian IPO route.`,
          lesson: `Pick the parent jurisdiction for where you will raise money and list in 5–10 years, not just for the first round. Investors and founders can both bear large taxes when the structure changes.`
        },
        {
          type: 'checklist', title: '90-day US launch checklist for a non-US founder',
          items: [
            'Days 1–7: Decide entity and state (Delaware C-corp if raising VC; LLC for owner-income); confirm India ODI/LRS route with a CA before buying shares',
            'Days 1–7: Search name at USPTO and state; appoint registered agent; file formation',
            'Days 2–10: Sign bylaws/operating agreement, board consents, founder stock and IP assignment; file 83(b) elections within 30 days',
            'Days 5–20: Get EIN by phone/fax (or online if a co-founder has an SSN/ITIN); save the EIN letter',
            'Days 10–30: Open primary and backup business accounts; set up Stripe or another processor; start bookkeeping',
            'Days 10–30: Sign an intercompany services agreement if an Indian entity will do the work; set transfer-pricing markup',
            'Days 20–45: Collect W-8BEN-E / W-8BEN / W-9 forms from all payees; check sales-tax nexus and state registrations',
            'Days 30–60: File US trademark through a US-licensed attorney; buy core insurance; get any local licence',
            'Days 30–60: Confirm FinCEN status (US-formed company exempt; foreign company registered in a state reports within 30 days)',
            'Days 45–90: Diarise annual filings: Delaware March 1 report/franchise tax, federal return, Form 5472 if foreign-owned, state annual reports',
            'Days 60–90: Get visa advice before anyone works in the US; plan B-1 trips only for meetings',
            'Day 90: Review runway, cap table and a 5-year view of where you will raise and list'
          ]
        },
        {
          type: 'interactive', widget: 'cap-table', title: 'See what a US seed round does to an Indian founding team',
          note: 'Set two founders at 50/50, add a 10% option pool and a $1.5M seed at a $6M pre-money valuation. Then compare with a smaller pool or a higher valuation, and note each founder\'s stake.'
        },
        {
          type: 'questions', title: 'Ask before you flip or set up in the US',
          items: [
            { q: 'Where will we most likely raise our next two rounds and eventually list?', why: 'The parent jurisdiction should match the long-term capital market; reverse flips have cost companies tens or hundreds of millions.' },
            { q: 'How will Indian resident founders lawfully hold shares in the US company?', why: 'India\'s overseas investment rules and the LRS limit apply; non-compliance creates penalties and blocks later transactions.' },
            { q: 'Who will actually work in the US, and on what visa?', why: 'Ownership gives no right to work; E-2 is not open to Indian nationals.' },
            { q: 'Is the US parent at risk of being treated as Indian tax resident?', why: 'If key decisions are made in India, India may claim the parent is resident (place of effective management).' },
            { q: 'Have we priced intercompany services at arm\'s length and documented it?', why: 'Both the IRS and India audit transfer pricing; documentation is your defence.' },
            { q: 'Have we collected the right W-8 or W-9 forms for every cross-border payment?', why: 'Wrong forms mean 30% withholding or penalties for the payer.' }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Not legal or tax advice',
          html: `<p>Immigration, cross-border tax and Indian foreign-exchange rules change frequently, and visa fees changed in 2025. This lesson reflects research as of November 2026. Check <b>uscis.gov</b>, <b>travel.state.gov</b>, <b>irs.gov</b> (W-8BEN-E, treaty tables), <b>fincen.gov</b> and, on the Indian side, <b>rbi.org.in</b> and <b>incometax.gov.in</b>. Work with a US immigration attorney, a US CPA and an Indian chartered accountant; a free SCORE or Small Business Development Center adviser via <b>sba.gov</b> can help with US basics.</p>`
        }
      ],
      terms: [
        { term: 'Flip', def: `Restructuring so that a foreign (often Delaware) company becomes the parent of an existing Indian business.` },
        { term: 'Reverse flip', def: `Moving the parent back to India, usually by merging the foreign parent into the Indian company, often with significant tax costs.` },
        { term: 'E-2 treaty investor visa', def: `A US visa for investors from countries with a qualifying treaty; India is not a treaty country.` },
        { term: 'Form W-8BEN-E', def: `A form a foreign entity gives a US payer to certify foreign status and claim reduced treaty withholding rates.` },
        { term: 'Transfer pricing', def: `Setting prices for transactions between related companies at arm\'s length so each country taxes its fair share.` },
        { term: 'ODI / LRS', def: `India\'s overseas direct investment rules and Liberalised Remittance Scheme, which govern how Indian residents invest in foreign companies.` }
      ],
      quiz: [
        { q: 'Can an Indian citizen (with no other citizenship) get an E-2 treaty investor visa?', options: ['Yes, with $100,000 invested', 'No, India is not an E-2 treaty country', 'Yes, if the company is in Delaware', 'Only through an LLC'], answer: 1, explain: 'The State Department\'s treaty list does not include India for E-1 or E-2.' },
        { q: 'A Delaware parent pays a $50,000 dividend to its 100%-owning Indian company that provides a valid W-8BEN-E. Under the treaty, US withholding is generally…', options: ['$0', '$7,500', '$12,500', '$15,000'], answer: 1, explain: 'A company owning at least 10% of voting stock generally gets 15%: $50,000 × 15% = $7,500.' },
        { q: 'Which company listed in India on December 10, 2025 after reversing its US flip?', options: ['Meesho', 'PhonePe', 'Zepto', 'Flipkart'], answer: 0, explain: 'Meesho received NCLT approval in May 2025, completed its move and listed in December 2025.' },
        { q: 'A founder of an Indian company who has managed it for two years wants to open and run its new US office. The best-fit visa is usually…', options: ['B-1', 'L-1A (new office)', 'E-2', 'No visa needed because he owns it'], answer: 1, explain: 'L-1A fits managers transferring to a related US office after at least one year abroad in the past three.' },
        { q: 'Why do Indian subsidiaries of US parents usually charge "cost plus a markup"?', options: ['To avoid US sales tax', 'To meet arm\'s-length transfer-pricing rules in both countries', 'Because the IRS sets the markup', 'To qualify for E-2'], answer: 1, explain: 'Both tax authorities require arm\'s-length pricing; cost-plus is a common accepted method with benchmarking.' }
      ],
      challenge: {
        title: 'Flip or not? Advise an Indian SaaS team',
        prompt: `<p>Two founders in Hyderabad run a profitable Indian private limited company selling HR software, 70% of revenue from US mid-sized companies. A US seed fund offers $2 million but "needs a Delaware C-corp". Long term, the founders would like to list in India. One founder wants to move to the US to lead sales within a year. (Illustrative.)</p><p>Recommend a structure, explain the trade-offs, the visa route for the sales founder, the cross-border tax steps, and a first-90-day plan.</p>`,
        hints: ['Compare a full flip with an Indian parent plus US subsidiary.', 'Which visa fits a founder of an existing Indian company?', 'W-8BEN-E, transfer pricing, ODI.'],
        model: `<p><b>Options:</b> (1) Full flip to a Delaware parent: satisfies the fund, but India IPO later means a reverse flip with potentially large taxes (Groww, Razorpay, Meesho). (2) Keep the Indian parent and create a US subsidiary for US sales: simpler for an India listing, but the fund must invest in the Indian company (possible for many funds) or accept the structure.</p><p><b>Recommendation:</b> negotiate option 2 first; if the fund insists, model the reverse-flip cost now and include it in the decision. Many funds now invest directly in Indian companies.</p><p><b>Visa:</b> the sales founder has worked for the Indian company for over a year, so an <b>L-1A new-office</b> petition through the US subsidiary is the natural route (E-2 is unavailable to Indian nationals; O-1A if they have strong acclaim; H-1B depends on the lottery and current fees).</p><p><b>Tax:</b> intercompany agreement (US sub resells or the Indian parent sells directly with the US sub as a cost-plus sales service provider); W-8BEN-E from the Indian parent for payments from the US sub; US sub files Form 1120 and Form 5472 (25%+ foreign-owned); Indian ODI filings for the investment in the US sub; transfer-pricing documentation and Form 3CEB in India.</p><p><b>First 90 days:</b> follow the lesson\'s checklist: form the Delaware sub, EIN by phone/fax, bank and Stripe, contracts, trademark via a US attorney, insurance, sales-tax nexus review, then the L-1A petition once the US office is set up.</p>`
      },
      takeaways: [
        'Choose the parent jurisdiction for where you will raise and list long term; reverse flips are costly.',
        'You can form and run much of a US company remotely, but working in the US needs a visa; India is not an E-2 treaty country.',
        'Use W-8BEN-E forms to claim treaty withholding rates and keep transfer pricing at arm\'s length.',
        'A 90-day plan covers formation, 83(b), EIN, banking, contracts, trademark, insurance and an annual compliance calendar.'
      ],
      sources: [
        { title: 'US State Department — Treaty countries (E-1/E-2 list)', url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html' },
        { title: 'Entrackr — Razorpay completes reverse flip to India (2025)', url: 'https://entrackr.com/news/razorpay-completes-reverse-flip-to-india-9317267' },
        { title: 'YourStory — Meesho gets NCLT approval for reverse flip from US (June 2025)', url: 'https://yourstory.com/2025/06/meesho-gets-nclt-approval-for-its-reverse-flip-from-us' },
        { title: 'YourStory — Groww shares debut at 14% premium (Nov 2025)', url: 'https://yourstory.com/2025/11/groww-shares-hit-public-markets-14-percent-premium-debut' },
        { title: 'Indian Express — Meesho IPO listing (Dec 2025)', url: 'https://indianexpress.com/article/business/market/meesho-share-price-today-listing-strong-stock-market-debut-nse-bse-10412313/' },
        { title: 'Stripe Atlas — incorporating from outside the US', url: 'https://stripe.com/atlas' }
      ]
    }
  ]
});

/* ------------------------------------------------------------------ Library cases */
MBA.addCases([
  {
    id: 'case-us-tesla-texas', company: 'Tesla', industry: 'Automotive / Corporate governance', year: '2024', track: 'us-start',
    title: 'Leave Delaware after losing the pay case?',
    situation: `<p>In January 2024 Delaware's Court of Chancery rescinded Elon Musk's 2018 Tesla pay package, then valued at about $56 billion, finding that the board was not independent of Musk and the process was flawed. Tesla was headquartered in Austin, Texas, which had just created a specialist Business Court (opening September 2024). Musk publicly urged companies to leave Delaware.</p><p>The board had to decide whether to propose moving Tesla's state of incorporation, knowing that reincorporation needs a shareholder vote and could itself be challenged.</p>`,
    question: 'You chair Tesla\'s board in spring 2024. What do you recommend?',
    options: [
      { text: 'Stay in Delaware and appeal; reincorporation looks like retaliation against the court.', result: 'Keeps Delaware\'s predictable law and investor familiarity, but does nothing about the board\'s concern over future rulings on a controller-led company.' },
      { text: 'Propose reincorporation to Texas through an independent special committee, and ask shareholders to vote on both the move and re-ratifying the pay package, while appealing.', result: 'Gives shareholders a clean, informed vote and aligns legal home with headquarters, while preserving the appeal.', best: true },
      { text: 'Move to Nevada immediately by board decision alone.', result: 'Not possible: reincorporation requires shareholder approval, and skipping process invites further litigation.' }
    ],
    whatHappened: `<p>A special committee recommended the move. On June 13, 2024 shareholders approved reincorporating in Texas (about 84% of votes cast excluding the Musks) and re-ratified the pay package; Tesla confirmed it was now a Texas corporation. Chancery refused to accept the ratification, but on December 19, 2025 the Delaware Supreme Court reinstated the 2018 package, calling rescission too extreme a remedy and cutting the plaintiff's fee award from about $345 million to about $54 million. Meanwhile Delaware enacted SB 21 (March 2025) to win back confidence; its safe harbors were upheld in February 2026.</p>`,
    lessons: [
      'State of incorporation decides which courts and standards review conflicted board decisions.',
      'Reincorporation is a shareholder decision; a clean process matters.',
      'Jurisdictions compete: Delaware responded with SB 21 to the exits of Tesla and others.'
    ],
    frameworks: ['Choice of jurisdiction', 'Corporate governance', 'Controlling stockholder doctrine']
  },
  {
    id: 'case-us-groww-reverse-flip', company: 'Groww', industry: 'Fintech / Investing', year: '2023–2024', track: 'us-start',
    title: 'Pay a large tax to bring the parent home?',
    situation: `<p>Groww grew into one of India's largest retail investing platforms with a Delaware parent, a structure that suited its early US venture investors. By 2023 its customers, regulators (SEBI) and planned IPO were all in India. Indian regulators and exchanges generally expect a listed company to be Indian, and a foreign parent complicates broker licensing.</p><p>Moving the parent to India would trigger a US tax charge on the deemed transfer of value, reported in a wide range of about $60–160 million.</p>`,
    question: 'You are Groww\'s CEO in 2023. What do you do?',
    options: [
      { text: 'Keep the Delaware parent and list in the US.', result: 'Avoids the flip tax, but the business, customers and brand are Indian, and Indian retail investors (its own users) could not easily own it.' },
      { text: 'Reverse flip to India, pay the US tax, and prepare for an Indian IPO.', result: 'Expensive up front, but aligns the parent with its market, regulator and listing venue.', best: true },
      { text: 'Stay private indefinitely to avoid the decision.', result: 'Delays liquidity for investors and employees, and the tax cost tends to rise as valuation grows.' }
    ],
    whatHappened: `<p>Groww completed its reverse flip to India in early 2024 after NCLT approval. Its Indian parent, Billionbrains Garage Ventures, raised about ₹6,632 crore in an IPO subscribed roughly 17.6 times and listed on November 12, 2025 at a premium to its ₹100 issue price. Razorpay (May 2025) and Meesho (NCLT approval May 2025; listed December 2025) followed similar paths.</p>`,
    lessons: [
      'Choose the parent jurisdiction for your eventual listing venue, not only your first round.',
      'The cost of a reverse flip tends to rise with valuation, so earlier can be cheaper.',
      'Regulated businesses benefit from a parent in the regulator\'s jurisdiction.'
    ],
    frameworks: ['Holding-company structuring', 'Cost-benefit analysis', 'Exit planning']
  },
  {
    id: 'case-us-openai-pbc', company: 'OpenAI', industry: 'Artificial intelligence', year: '2024–2025', track: 'us-start',
    title: 'Which entity can raise $100 billion and keep a mission?',
    situation: `<p>OpenAI was a nonprofit that controlled a capped-profit LLC. The cap on investor returns and the complex structure made it hard to raise the very large sums needed for computing power, and some investors conditioned funding on a simpler structure. Critics and state attorneys general worried that converting to a normal for-profit would abandon the charitable mission and its assets.</p>`,
    question: 'You advise OpenAI\'s board in early 2025. What structure do you recommend?',
    options: [
      { text: 'Convert fully to an ordinary for-profit C-corp and sell the nonprofit\'s control.', result: 'Simplest for investors, but faces strong opposition from attorneys general and critics, and risks litigation over charitable assets.' },
      { text: 'Turn the operating company into a public benefit corporation that issues ordinary equity, controlled by the nonprofit foundation, negotiated with the Delaware and California attorneys general.', result: 'Raises conventional capital while writing the mission into the charter and keeping nonprofit control; slower and still contested.', best: true },
      { text: 'Keep the capped-profit LLC unchanged.', result: 'Preserves the mission design but limits fundraising at the scale required.' }
    ],
    whatHappened: `<p>In May 2025 OpenAI said the nonprofit would keep control. In late October 2025 it completed the recapitalization: the nonprofit became the OpenAI Foundation, controlling OpenAI Group PBC. Press reports said Microsoft holds about 27% and the Foundation roughly a quarter, after close to a year of work with the Delaware and California attorneys general.</p>`,
    lessons: [
      'A PBC can combine conventional equity with a stated public benefit.',
      'Changing entity structure late is slow and involves regulators, not just lawyers.',
      'Choose a structure early that fits both your mission and your future capital needs.'
    ],
    frameworks: ['Entity choice', 'Stakeholder governance', 'Capital structure']
  },
  {
    id: 'case-us-synapse-banking', company: 'Synapse Financial Technologies (fintech partners)', industry: 'Fintech / Banking', year: '2024', track: 'us-start',
    title: 'Where should a startup keep its money?',
    situation: `<p>Many startups and consumers held funds through fintech apps that used Synapse, a "banking-as-a-service" middleman, to reach partner banks. In April 2024 Synapse filed for bankruptcy; partner banks froze pooled accounts because Synapse's ledgers did not match the banks' records. End users who believed they had FDIC-insured deposits could not access their money.</p>`,
    question: 'You are a founder setting up treasury in 2025. How do you hold your cash?',
    options: [
      { text: 'Keep everything in one fintech account that advertises FDIC insurance.', result: 'Convenient, but if the fintech\'s records fail, FDIC pass-through coverage may not protect you, and one freeze stops payroll.' },
      { text: 'Use an account where you know the insured bank holding the funds, keep a second account at a different institution, and download statements monthly.', result: 'Slightly more admin, but a freeze or failure at one provider does not stop the business, and records support any claim.', best: true },
      { text: 'Hold most cash in a payment processor balance.', result: 'Processor balances are not bank deposits and can be held back for risk reviews.' }
    ],
    whatHappened: `<p>More than 100,000 end users lost access to funds; the bankruptcy trustee estimated a shortfall of $65–95 million. The CFPB sued Synapse and in late 2025 allocated about $46 million from its civil penalty fund to affected users, roughly half the gap. The case pushed regulators to propose stronger record-keeping rules for custodial accounts.</p>`,
    lessons: [
      'FDIC insurance covers bank failure, not a fintech\'s bad records.',
      'Redundancy (two accounts) is cheap insurance for payroll and suppliers.',
      'Know the legal chain: your app, the middleware and the bank that actually holds the money.'
    ],
    frameworks: ['Treasury management', 'Counterparty risk', 'Vendor due diligence']
  }
]);
