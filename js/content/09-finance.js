/* MBA Studio — Track 9: Finance & Accounting */
MBA.addTrack({
  id: 'finance',
  stage: 3,
  order: 9,
  title: 'Finance & Accounting',
  icon: '💰',
  color: '#0ea5e9',
  tagline: 'Read the scoreboard of business',
  summary: `Learn the language every business is scored in. You will read and link the three financial statements, diagnose a company with ratios, manage cash and working capital, judge investments with NPV and the cost of capital, and run a startup on burn, runway and efficiency metrics.`,
  outcomes: [
    'Record transactions with double entry and explain accrual vs cash accounting',
    'Read a P&L, balance sheet and cash flow statement and show how they link',
    'Diagnose performance with margins, ROE, ROCE, liquidity ratios and DuPont',
    'Free up cash by managing the cash conversion cycle and unit economics',
    'Evaluate projects with NPV, IRR, payback and a WACC built from CAPM',
    'Run a startup on burn, runway, burn multiple and the Rule of 40'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'finance-1',
      title: 'Accounting basics: double entry, accrual vs cash',
      level: 'Beginner',
      minutes: 12,
      hook: `A business can be profitable and still run out of money next Friday — accounting is how you see both truths at once.`,
      eli5: `Imagine you run a lemonade stand. On Saturday you sell 20 cups but your neighbour says "I'll pay you Monday" for 5 of them. Did you earn money on Saturday? You did the work, so yes — but the coins are not in your jar yet. Accounting keeps two kinds of score: what you <b>earned</b> (profit) and what is actually in the <b>jar</b> (cash). Double entry is just the rule that every time something happens, you write it down in two places so the books always balance, like a see-saw.`,
      blocks: [
        {
          type: 'text', title: 'Why accounting exists',
          html: `<p>Accounting is the <b>language of business</b>. Investors, banks, tax authorities and managers all need the same facts recorded the same way, so companies follow rules: <b>GAAP</b> in the US and <b>IFRS</b> in most other countries.</p><p>Every number in a financial statement started life as a single transaction — a sale, a purchase, a salary payment — recorded in a <b>ledger</b>.</p>`
        },
        {
          type: 'formula', name: 'The accounting equation',
          expr: 'Assets = Liabilities + Equity',
          explain: `<b>Assets</b> are what the business owns or controls (cash, stock, machines, money owed by customers). <b>Liabilities</b> are what it owes to others (loans, unpaid supplier bills). <b>Equity</b> is what is left for the owners. The equation must <i>always</i> balance — that is why it is called a balance sheet.`,
          example: `You start a bakery with $10,000 of your own money and a $5,000 bank loan. Assets: $15,000 cash. Liabilities: $5,000 loan. Equity: $10,000. Check: 15,000 = 5,000 + 10,000.`
        },
        {
          type: 'framework', name: 'Double-entry bookkeeping', by: 'Formalised by Luca Pacioli, 1494', when: 'Every time you record any transaction',
          steps: [
            { label: '1. Identify the two sides', desc: 'Every transaction changes at least two accounts. Buying flour with cash: inventory goes up, cash goes down.' },
            { label: '2. Debit and credit', desc: 'A debit is the left side, a credit the right. Debits increase assets and expenses; credits increase liabilities, equity and revenue. Total debits always equal total credits.' },
            { label: '3. Post to the ledger', desc: 'Each account (Cash, Inventory, Revenue...) has its own running balance in the general ledger.' },
            { label: '4. Trial balance', desc: 'At period end, list all balances. If debits do not equal credits, something was recorded wrongly.' },
            { label: '5. Produce the statements', desc: 'Revenue and expense accounts flow into the P&L; asset, liability and equity accounts into the balance sheet.' }
          ]
        },
        {
          type: 'compare', title: 'Cash accounting vs accrual accounting', headers: ['', 'Cash basis', 'Accrual basis'],
          rows: [
            ['When revenue counts', 'When cash arrives', 'When it is earned (goods delivered / service performed)'],
            ['When expenses count', 'When cash leaves', 'When the related resource is used up (matching principle)'],
            ['Who uses it', 'Very small businesses, personal budgets', 'Almost all companies; required under GAAP / IFRS for larger firms'],
            ['Strength', 'Simple, shows liquidity', 'Shows true economic performance of a period'],
            ['Blind spot', 'Can make a bad month look good (or vice versa)', 'Profit can look healthy while cash runs out']
          ]
        },
        {
          type: 'callout', kind: 'example', title: 'One sale, two entries',
          html: `<p>You deliver $1,500 of goods that cost you $1,000, on 30-day credit.</p><ul><li>Entry 1: Accounts receivable +$1,500 / Revenue +$1,500</li><li>Entry 2: Cost of goods sold +$1,000 / Inventory −$1,000</li></ul><p>Profit this month: <b>$500</b>. Cash received this month: <b>$0</b>. Both are true.</p>`
        },
        {
          type: 'flip', title: 'Accrual concepts — test yourself',
          cards: [
            { front: 'Deferred revenue', back: 'Cash received before you have delivered. It is a liability (you owe the customer the service) until you earn it.' },
            { front: 'Accounts receivable', back: 'Revenue earned but not yet paid by customers. An asset.' },
            { front: 'Prepaid expense', back: 'Cash paid in advance (e.g. annual insurance). An asset that is expensed month by month.' },
            { front: 'Accrued expense', back: 'A cost incurred but not yet paid (e.g. wages owed at month end). A liability.' },
            { front: 'Depreciation', back: 'Spreading the cost of a long-lived asset (a $50,000 oven) over its useful life instead of expensing it all at once.' }
          ]
        },
        {
          type: 'scenario',
          prompt: `Your SaaS startup signs a customer who pays $24,000 upfront for a 2-year subscription in January. Your co-founder wants to report $24,000 revenue in January to impress investors. What do you do?`,
          options: [
            { text: 'Book $24,000 revenue in January — the cash is in the bank.', feedback: 'This breaks the revenue recognition rules (ASC 606 / IFRS 15). Investors doing diligence will restate it, and you lose credibility.', good: false },
            { text: 'Record $24,000 deferred revenue and recognise $1,000 per month for 24 months, while showing the strong cash collection separately.', feedback: 'Correct. Revenue follows delivery. You can still proudly show bookings and cash collected as separate metrics.', good: true },
            { text: 'Record nothing until the contract ends.', feedback: 'Too conservative — you are delivering the service every month, so you earn revenue every month.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Ledger', def: 'The master record of every account and its balance.' },
        { term: 'Debit / credit', def: 'The left and right sides of every entry. Debits must always equal credits.' },
        { term: 'Accrual accounting', def: 'Recording revenue when earned and expenses when incurred, regardless of when cash moves.' },
        { term: 'Matching principle', def: 'Expenses are recorded in the same period as the revenue they helped produce.' },
        { term: 'Deferred revenue', def: 'Cash received for goods or services not yet delivered; a liability.' },
        { term: 'GAAP / IFRS', def: 'The two main rulebooks for financial reporting: US GAAP and International Financial Reporting Standards.' }
      ],
      quiz: [
        {
          q: 'A company starts with $20,000 of owner money and borrows $30,000. What are its total assets?',
          options: ['$20,000', '$30,000', '$50,000', '$10,000'],
          answer: 2,
          explain: 'Assets = Liabilities + Equity = $30,000 + $20,000 = $50,000 (all held as cash).'
        },
        {
          q: 'A customer pays $12,000 in December for a 12-month service starting 1 January. Under accrual accounting, how much revenue is recognised in January?',
          options: ['$1,000', '$12,000', '$0', '$6,000'],
          answer: 0,
          explain: 'Revenue is earned as the service is delivered: $12,000 ÷ 12 months = $1,000 per month.'
        },
        {
          q: 'Which statement about double-entry bookkeeping is TRUE?',
          options: ['Only cash transactions need two entries', 'Total debits must equal total credits', 'Revenue is recorded as a debit', 'It is only used under cash accounting'],
          answer: 1,
          explain: 'The defining rule of double entry is that every transaction has equal debits and credits, which keeps the accounting equation balanced.'
        },
        {
          q: 'You buy a $60,000 machine with cash that will last 5 years. Using straight-line depreciation, what is the annual expense on the P&L?',
          options: ['$60,000 in year 1', '$6,000', '$15,000', '$12,000'],
          answer: 3,
          explain: '$60,000 ÷ 5 years = $12,000 per year. The cash left in year 1, but the cost is matched over the asset\'s useful life.'
        },
        {
          q: 'Why can a profitable company run out of cash?',
          options: ['Profit is always equal to cash', 'Customers may not have paid yet and money may be tied up in inventory', 'Depreciation uses up cash every month', 'Revenue is recorded only when cash arrives'],
          answer: 1,
          explain: 'Under accrual accounting, revenue counts when earned. If customers pay late or you build stock, cash lags profit.'
        }
      ],
      challenge: {
        title: 'The café that made a profit and lost cash',
        prompt: `Your café\'s first month: cash sales $20,000; a corporate catering invoice of $5,000 sent but not yet paid; bought $6,000 of ingredients (paid in cash) of which $4,000 were used; paid $12,000 upfront for a 12-month insurance policy; rent $3,000 and staff $7,000 paid in cash.<br><br>Calculate (a) accrual profit for the month and (b) the change in cash. Explain the gap to your worried co-owner.`,
        hints: ['Revenue includes the unpaid invoice under accrual accounting.', 'Only the ingredients used, and one month of insurance, are expenses this month.', 'Cash counts every dollar that actually came in or went out.'],
        model: `<p><b>(a) Accrual profit</b></p><ul><li>Revenue: $20,000 + $5,000 = <b>$25,000</b></li><li>Ingredients used: −$4,000</li><li>Insurance (1/12 of $12,000): −$1,000</li><li>Rent: −$3,000; Staff: −$7,000</li><li><b>Profit = $25,000 − $15,000 = $10,000</b></li></ul><p><b>(b) Change in cash</b></p><ul><li>In: $20,000 cash sales</li><li>Out: $6,000 ingredients + $12,000 insurance + $3,000 rent + $7,000 staff = $28,000</li><li><b>Cash change = −$8,000</b></li></ul><p><b>The $18,000 gap</b> is explained by: $5,000 receivable not collected, $2,000 of ingredients sitting on the shelf, and $11,000 of insurance prepaid for future months. ($5,000 + $2,000 + $11,000 = $18,000.)</p><p><b>Message to co-owner:</b> the business model works (a $10,000 profit), but this month we invested cash in stock and prepayments. Chase the $5,000 invoice and keep a cash buffer for months with big upfront payments.</p>`
      },
      takeaways: [
        'Assets = Liabilities + Equity, always.',
        'Every transaction is recorded twice: debits equal credits.',
        'Accrual accounting shows performance; cash shows survival — track both.',
        'Upfront customer cash is deferred revenue, not revenue.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'finance-2',
      title: 'The three financial statements and how they link',
      level: 'Beginner',
      minutes: 15,
      hook: `Three documents tell you almost everything about a company — and fraudsters get caught when those three stop agreeing with each other.`,
      eli5: `Think of a football team. The <b>P&L</b> is this season\'s results: how many goals scored minus conceded. The <b>balance sheet</b> is a photo of the squad and the club\'s bank account on one day. The <b>cash flow statement</b> is the club\'s bank statement for the season: money in from tickets, money out for new players. Each one tells part of the story; together they tell the truth.`,
      blocks: [
        {
          type: 'framework', name: 'The P&L (income statement)', by: 'Standard format', when: 'To see whether the business made a profit over a period',
          steps: [
            { label: 'Revenue', desc: 'Sales earned in the period (the "top line").' },
            { label: '− Cost of goods sold (COGS)', desc: 'Direct costs of making or delivering what you sold. Revenue − COGS = Gross profit.' },
            { label: '− Operating expenses', desc: 'Sales & marketing, R&D, general & admin. Gross profit − opex = EBITDA (before depreciation & amortisation).' },
            { label: '− Depreciation & amortisation', desc: 'Spreading the cost of long-lived assets. EBITDA − D&A = EBIT (operating profit).' },
            { label: '− Interest and tax', desc: 'Financing costs and tax. EBIT − interest = EBT; EBT − tax = Net income (the "bottom line").' }
          ]
        },
        {
          type: 'compare', title: 'The three statements at a glance', headers: ['', 'P&L', 'Balance sheet', 'Cash flow statement'],
          rows: [
            ['Question answered', 'Did we make a profit?', 'What do we own and owe?', 'Where did the cash go?'],
            ['Time frame', 'A period (month, year)', 'A single point in time', 'A period'],
            ['Basis', 'Accrual', 'Accrual', 'Cash'],
            ['Key line', 'Net income', 'Equity, cash, debt', 'Operating cash flow, free cash flow'],
            ['Can be flattered by', 'Aggressive revenue recognition', 'Overstated assets', 'Hardest to fake — but timing tricks exist']
          ]
        },
        {
          type: 'framework', name: 'How the statements link', by: 'Three-statement model', when: 'Building or checking any financial model',
          steps: [
            { label: 'Net income → cash flow', desc: 'Net income is the first line of operating cash flow (indirect method).' },
            { label: 'Add back non-cash items', desc: 'Depreciation reduced profit but used no cash this period, so it is added back.' },
            { label: 'Working capital changes', desc: 'More receivables or inventory uses cash (subtract). More payables saves cash (add).' },
            { label: 'Investing & financing', desc: 'Capex (buying equipment) is investing cash out. Borrowing, repaying debt, issuing shares and paying dividends are financing.' },
            { label: 'Ending cash → balance sheet', desc: 'Beginning cash + net change = ending cash on the balance sheet. Net income − dividends also adds to retained earnings in equity. If the balance sheet balances, your model links.' }
          ]
        },
        {
          type: 'formula', name: 'Operating cash flow (indirect method)',
          expr: 'CFO = Net income + D&A − ΔReceivables − ΔInventory + ΔPayables',
          explain: 'Start from accrual profit, then undo the non-cash items and the cash tied up in (or released from) working capital.',
          example: `Net income $100k, depreciation $30k, receivables up $20k, inventory up $10k, payables up $15k → CFO = 100 + 30 − 20 − 10 + 15 = <b>$115k</b>. With capex of $50k, free cash flow = $65k.`
        },
        {
          type: 'interactive', widget: 'pnl', title: 'Build a P&L waterfall',
          note: 'Change COGS and operating expenses and watch gross profit, EBITDA and net income move. Try raising revenue 20% with flat opex — notice the operating leverage.'
        },
        {
          type: 'case', company: 'Enron', year: '1997–2001', title: 'When earnings and cash told different stories',
          situation: `Enron was one of America\'s most admired companies, reporting fast-growing profits from energy trading. It used <b>mark-to-market accounting</b> to book the estimated future profits of long-term deals immediately, and used off-balance-sheet "special purpose entities" to hide debt.`,
          decision: `Management, with its auditor Arthur Andersen signing off, kept reported earnings rising even as many deals produced little real cash.`,
          outcome: `Analysts and short sellers noticed that reported profits were not matched by operating cash flow. In late 2001 Enron restated its earnings and filed for bankruptcy. Arthur Andersen collapsed, and the scandal led to the <b>Sarbanes-Oxley Act (2002)</b>, which made CEOs and CFOs personally certify their financial statements.`,
          lesson: `Always compare net income with operating cash flow. A persistent gap where profit is high but cash is weak is a red flag.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Wirecard (2020): check that the cash exists',
          html: `<p>German payments company Wirecard reported about €1.9 billion of cash held in trustee accounts in Asia. In June 2020 the auditors could not confirm it, the company admitted the money probably did not exist, and it filed for insolvency. Journalists at the <i>Financial Times</i> had raised questions for years. Lesson: the balance sheet\'s cash line should be independently verified with the banks.</p>`
        },
        {
          type: 'checklist', title: 'Reading a set of accounts in 10 minutes',
          items: ['Revenue growth vs last year', 'Gross margin trend', 'Operating profit vs operating cash flow', 'Capex and free cash flow', 'Cash vs debt on the balance sheet', 'Receivables and inventory growing faster than revenue?', 'Auditor\'s opinion and notes on revenue recognition']
        }
      ],
      terms: [
        { term: 'Gross profit', def: 'Revenue minus cost of goods sold.' },
        { term: 'EBITDA', def: 'Earnings before interest, tax, depreciation and amortisation — a rough proxy for operating cash profit.' },
        { term: 'EBIT', def: 'Earnings before interest and tax; also called operating profit.' },
        { term: 'Retained earnings', def: 'Cumulative profits kept in the business rather than paid out as dividends; part of equity.' },
        { term: 'Capex', def: 'Capital expenditure — cash spent on long-lived assets like equipment or buildings.' },
        { term: 'Free cash flow (FCF)', def: 'Operating cash flow minus capex: the cash the business generates that owners could take out.' },
        { term: 'Working capital', def: 'Current assets minus current liabilities; mainly receivables + inventory − payables.' }
      ],
      quiz: [
        {
          q: 'Revenue $500k, COGS $200k, opex $180k, depreciation $20k. What is EBIT?',
          options: ['$300k', '$120k', '$100k', '$80k'],
          answer: 2,
          explain: 'Gross profit = 500 − 200 = 300. EBITDA = 300 − 180 = 120. EBIT = 120 − 20 = $100k.'
        },
        {
          q: 'Which statement shows a snapshot at a single point in time?',
          options: ['P&L', 'Cash flow statement', 'Statement of changes in revenue', 'Balance sheet'],
          answer: 3,
          explain: 'The balance sheet is a photo on one date; the P&L and cash flow statement cover a period.'
        },
        {
          q: 'Net income $80k, depreciation $10k, receivables increased $25k, payables increased $5k. What is operating cash flow?',
          options: ['$70k', '$90k', '$120k', '$60k'],
          answer: 0,
          explain: 'CFO = 80 + 10 − 25 + 5 = $70k. Higher receivables use cash; higher payables provide it.'
        },
        {
          q: 'A company repays $1m of debt. Where does this appear?',
          options: ['P&L as an expense', 'Cash flow from financing', 'Cash flow from investing', 'Cash flow from operations'],
          answer: 1,
          explain: 'Repaying principal is a financing cash outflow. Only the interest goes through the P&L.'
        },
        {
          q: 'What is the strongest red flag in the Enron pattern?',
          options: ['High revenue growth', 'Paying dividends', 'Rising reported profit with weak operating cash flow', 'Large depreciation charges'],
          answer: 2,
          explain: 'Profits that never turn into cash suggest aggressive or fictitious accounting.'
        }
      ],
      challenge: {
        title: 'Link the three statements',
        prompt: `A manufacturer\'s year: revenue $1,000k, COGS $600k, operating expenses $250k (including $40k depreciation), interest $20k, tax rate 20%. During the year receivables rose $30k, inventory rose $20k, payables rose $10k. It bought $80k of equipment, borrowed $50k of new debt and paid $24k of dividends.<br><br>Build (a) the P&L down to net income, (b) the cash flow statement, and (c) say how much retained earnings and cash change on the balance sheet.`,
        hints: ['EBIT = revenue − COGS − opex (depreciation is already inside opex).', 'Tax = 20% of EBT.', 'CFO starts from net income and adds back depreciation.'],
        model: `<p><b>(a) P&L</b></p><ul><li>Gross profit = 1,000 − 600 = 400</li><li>EBIT = 400 − 250 = 150</li><li>EBT = 150 − 20 = 130</li><li>Tax = 20% × 130 = 26</li><li><b>Net income = $104k</b></li></ul><p><b>(b) Cash flow</b></p><ul><li>CFO = 104 + 40 − 30 − 20 + 10 = <b>$104k</b></li><li>CFI = −$80k (equipment)</li><li>CFF = +50 − 24 = <b>+$26k</b></li><li><b>Net change in cash = 104 − 80 + 26 = +$50k</b></li></ul><p><b>(c) Balance sheet</b></p><ul><li>Retained earnings rise by 104 − 24 = <b>$80k</b></li><li>Cash rises by <b>$50k</b>; debt rises by $50k; net fixed assets rise by 80 − 40 = $40k.</li></ul><p><b>Check:</b> assets change = cash 50 + receivables 30 + inventory 20 + fixed assets 40 = 140. Liabilities + equity change = payables 10 + debt 50 + retained earnings 80 = 140. It balances.</p>`
      },
      takeaways: [
        'P&L = performance over a period; balance sheet = position on a date; cash flow = movement of cash.',
        'Net income flows into both retained earnings and operating cash flow.',
        'Ending cash on the cash flow statement must equal cash on the balance sheet.',
        'Compare profit with operating cash flow every time — it is the best fraud and health check.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'finance-3',
      title: 'Financial ratios and DuPont analysis',
      level: 'Intermediate',
      minutes: 14,
      hook: `Ratios turn a wall of numbers into a doctor\'s check-up: in five minutes you can tell whether a business is healthy, sick, or quietly over-leveraged.`,
      eli5: `Saying "the shop made $50,000" means little on its own. Was that from selling $100,000 of stuff or $10 million? Did the owner put in $100,000 or $5 million? Ratios compare one number with another so you can judge size-free: like comparing runs per over in cricket instead of total runs.`,
      blocks: [
        {
          type: 'compare', title: 'The core ratio families', headers: ['Family', 'Ratio', 'Formula', 'Tells you'],
          rows: [
            ['Profitability', 'Gross margin', 'Gross profit ÷ Revenue', 'Pricing power and production efficiency'],
            ['Profitability', 'Operating (EBIT) margin', 'EBIT ÷ Revenue', 'Efficiency of the whole operation'],
            ['Profitability', 'Net margin', 'Net income ÷ Revenue', 'What is left for owners per $1 of sales'],
            ['Returns', 'ROE', 'Net income ÷ Shareholders\' equity', 'Return on the owners\' money'],
            ['Returns', 'ROCE', 'EBIT ÷ Capital employed', 'Return on all long-term capital, debt + equity'],
            ['Liquidity', 'Current ratio', 'Current assets ÷ Current liabilities', 'Can we pay bills due within a year?'],
            ['Liquidity', 'Quick ratio', '(Current assets − Inventory) ÷ Current liabilities', 'Same, without relying on selling stock'],
            ['Leverage', 'Debt / EBITDA; interest cover', 'Net debt ÷ EBITDA; EBIT ÷ Interest', 'How risky the debt load is']
          ]
        },
        {
          type: 'formula', name: 'DuPont analysis',
          expr: 'ROE = Net margin × Asset turnover × Equity multiplier',
          explain: `Net margin = Net income ÷ Revenue (profitability). Asset turnover = Revenue ÷ Total assets (efficiency). Equity multiplier = Total assets ÷ Equity (leverage). Developed at the DuPont company in the early twentieth century, it shows <i>why</i> ROE is high or low.`,
          example: `Net income $50, revenue $1,000, assets $500, equity $250. Net margin 5% × turnover 2.0 × multiplier 2.0 = <b>20% ROE</b>. Check: 50 ÷ 250 = 20%.`
        },
        {
          type: 'matrix', name: 'Margin vs turnover: two roads to good returns', xLabel: 'Asset turnover →', yLabel: 'Margin →',
          cells: [
            { label: 'Premium / luxury', desc: 'High margins, slow-moving assets (luxury goods, specialised software). Returns come from pricing power.' },
            { label: 'Exceptional', desc: 'High margins and fast turnover — rare and usually attacked by competitors. Protect it with a moat.' },
            { label: 'Danger zone', desc: 'Thin margins and heavy assets. Returns are poor unless leverage props up ROE — fragile.' },
            { label: 'Volume machine', desc: 'Thin margins, very fast turnover (discount retail, warehouse clubs). Returns come from operational efficiency.' }
          ]
        },
        {
          type: 'case', company: 'Costco', year: 'Long-running model', title: 'Low margins, high returns',
          situation: `Costco sells a limited range of goods in bulk with famously low markups on merchandise. Its gross margins are much thinner than a typical supermarket\'s.`,
          decision: `Instead of maximising margin per item, it charges an annual membership fee and turns over its inventory very quickly, often selling goods before it has to pay suppliers.`,
          outcome: `Membership fees contribute a large share of its operating profit, renewal rates are high, and its returns on capital have been strong for decades despite thin product margins.`,
          lesson: `A low margin is not automatically bad. DuPont shows that asset turnover can matter as much as margin.`
        },
        {
          type: 'callout', kind: 'warning', title: 'Leverage flatters ROE',
          html: `<p>Two companies can earn the same margin and turnover, but the one with more debt shows a higher ROE because its equity multiplier is bigger. That is why analysts also look at <b>ROCE</b> or <b>ROIC</b>, which include debt in the capital base and are not inflated by borrowing.</p>`
        },
        {
          type: 'flip', title: 'Quick ratio drills',
          cards: [
            { front: 'Current assets $300k, current liabilities $200k. Current ratio?', back: '1.5x — $1.50 of short-term assets for every $1 due within a year.' },
            { front: 'EBIT $120k, capital employed $800k. ROCE?', back: '15%' },
            { front: 'EBIT $90k, interest $30k. Interest cover?', back: '3.0x — profits cover interest three times.' },
            { front: 'Gross margin falling while revenue grows. Likely cause?', back: 'Discounting, rising input costs, or a shift to lower-margin products.' }
          ]
        },
        {
          type: 'checklist', title: 'Ratio analysis done right',
          items: ['Compare to the same company over 3–5 years', 'Compare to direct peers, not other industries', 'Check how each ratio is defined (EBIT vs EBITDA, average vs ending balance)', 'Look for the story behind the change', 'Combine ratios — no single ratio decides']
        }
      ],
      terms: [
        { term: 'ROE', def: 'Return on equity: net income divided by shareholders\' equity.' },
        { term: 'ROCE', def: 'Return on capital employed: EBIT divided by (total assets − current liabilities).' },
        { term: 'Asset turnover', def: 'Revenue divided by total assets; how hard the assets work.' },
        { term: 'Equity multiplier', def: 'Total assets divided by equity; a measure of financial leverage.' },
        { term: 'Current ratio', def: 'Current assets divided by current liabilities.' },
        { term: 'Interest cover', def: 'EBIT divided by interest expense; how comfortably a firm can pay its interest.' }
      ],
      quiz: [
        {
          q: 'Net margin 8%, asset turnover 1.5, equity multiplier 2.0. What is ROE?',
          options: ['11.5%', '24%', '16%', '12%'],
          answer: 1,
          explain: '8% × 1.5 × 2.0 = 24%.'
        },
        {
          q: 'Current assets $450k (including $150k inventory), current liabilities $300k. What is the quick ratio?',
          options: ['1.5', '0.5', '2.0', '1.0'],
          answer: 3,
          explain: '(450 − 150) ÷ 300 = 1.0.'
        },
        {
          q: 'Company A and B have identical margins and asset turnover, but A has a much higher ROE. The most likely reason?',
          options: ['A uses more debt', 'A has better products', 'A has a lower tax rate on revenue', 'A has higher gross margin'],
          answer: 0,
          explain: 'With margin and turnover equal, the only DuPont lever left is the equity multiplier — leverage.'
        },
        {
          q: 'Revenue $2m, gross profit $800k, EBIT $300k. What is the operating margin?',
          options: ['40%', '30%', '15%', '25%'],
          answer: 2,
          explain: 'EBIT ÷ Revenue = 300 ÷ 2,000 = 15%. (Gross margin would be 40%.)'
        },
        {
          q: 'Why is ROCE often preferred over ROE when comparing companies?',
          options: ['It ignores operating profit', 'It is not inflated by how much debt a company uses', 'It is always higher', 'It only uses cash figures'],
          answer: 1,
          explain: 'ROCE includes debt in the capital base, so it measures operating returns independent of financing choices.'
        }
      ],
      challenge: {
        title: 'Which company is really better?',
        prompt: `Company A: net income $40m, revenue $400m, total assets $800m, equity $400m.<br>Company B: net income $30m, revenue $1,000m, total assets $500m, equity $125m.<br><br>Run a full DuPont analysis on both. Which has the higher ROE, why, and which would you rather lend to?`,
        hints: ['Compute each of the three DuPont components separately.', 'Multiply them and check against net income ÷ equity.', 'Think about what a high equity multiplier means for a lender.'],
        model: `<p><b>Company A</b>: net margin 40 ÷ 400 = 10%; turnover 400 ÷ 800 = 0.5; multiplier 800 ÷ 400 = 2.0. ROE = 10% × 0.5 × 2.0 = <b>10%</b> (check 40 ÷ 400 = 10%).</p><p><b>Company B</b>: net margin 30 ÷ 1,000 = 3%; turnover 1,000 ÷ 500 = 2.0; multiplier 500 ÷ 125 = 4.0. ROE = 3% × 2.0 × 4.0 = <b>24%</b> (check 30 ÷ 125 = 24%).</p><p><b>Interpretation:</b> B\'s ROE is higher, driven by fast turnover and heavy leverage (assets are 4x equity, so roughly three-quarters of assets are financed by liabilities). Its return on assets is 30 ÷ 500 = 6% vs A\'s 40 ÷ 800 = 5%, so B is only modestly more efficient; most of the ROE gap is leverage.</p><p><b>As a lender</b>, I prefer A: half of its assets are equity-funded and its 10% margin gives a bigger cushion if sales fall. B\'s 3% margin and 4x leverage mean a small downturn could wipe out profit and equity.</p>`
      },
      takeaways: [
        'Ratios make companies of different sizes comparable.',
        'DuPont splits ROE into margin, turnover and leverage.',
        'High ROE from leverage is riskier than high ROE from margin or turnover.',
        'Always compare against history and direct peers.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'finance-4',
      title: 'Working capital, cash conversion and unit economics',
      level: 'Intermediate',
      minutes: 15,
      hook: `Amazon grew for years partly on its suppliers\' money — understanding the cash conversion cycle shows you how.`,
      eli5: `Imagine you buy apples on Monday, sell them as pies on Friday, and your customers pay you next Wednesday. Your money is "stuck" for about 9 days. If the apple farmer lets you pay him in two weeks, you never need your own money at all — the farmer is effectively lending it to you. That gap between paying out and getting paid is the cash conversion cycle.`,
      blocks: [
        {
          type: 'formula', name: 'Cash conversion cycle (CCC)',
          expr: 'CCC = DIO + DSO − DPO',
          explain: `<b>DIO</b> (days inventory outstanding) = Inventory ÷ COGS × 365. <b>DSO</b> (days sales outstanding) = Receivables ÷ Revenue × 365. <b>DPO</b> (days payables outstanding) = Payables ÷ COGS × 365. The CCC is how many days your cash is tied up in operations.`,
          example: `DIO 45 + DSO 30 − DPO 40 = <b>35 days</b>. If revenue is $10,000 per day, cutting DSO by 10 days frees about $100,000 of cash — permanently.`
        },
        {
          type: 'interactive', widget: 'working-capital', title: 'Shrink the cycle',
          note: 'Try cutting DSO by 15 days and extending DPO by 10. Watch the cash conversion cycle and the cash released.'
        },
        {
          type: 'case', company: 'Dell and Amazon', year: '1990s–2010s', title: 'Negative working capital as a growth engine',
          situation: `Dell sold PCs direct to customers and built each machine to order. Amazon sells online and collects card payments within days of a sale.`,
          decision: `Both kept very little inventory relative to sales, collected cash from customers quickly, and paid suppliers on standard trade terms.`,
          outcome: `Both operated for long periods with a <b>negative cash conversion cycle</b>: they received customers\' cash before paying suppliers. Growth generated cash rather than consuming it, helping fund expansion without as much outside capital.`,
          lesson: `Working capital design is strategy. A business model that collects before it pays can grow faster on less capital.`
        },
        {
          type: 'formula', name: 'Contribution margin',
          expr: 'Contribution margin per unit = Price − Variable cost per unit',
          explain: 'The amount each sale contributes towards covering fixed costs and then profit. Contribution margin ratio = contribution ÷ price.',
          example: `A meal-kit sells for $60. Ingredients $22, packaging $5, delivery $8, payment fees $2 → variable cost $37. Contribution = <b>$23</b> per box (about 38%).`
        },
        {
          type: 'formula', name: 'Customer unit economics',
          expr: 'LTV = ARPU × Gross margin % ÷ Monthly churn;   CAC payback = CAC ÷ (ARPU × Gross margin %)',
          explain: 'LTV estimates gross profit from a customer over their lifetime. CAC is what it costs to acquire them. A common rule of thumb is LTV:CAC of 3 or more and payback within about 12–18 months for SMB SaaS.',
          example: `ARPU $50/month, gross margin 80%, churn 4% per month → LTV = 40 ÷ 0.04 = <b>$1,000</b>. CAC $300 → LTV:CAC ≈ 3.3; payback = 300 ÷ 40 = <b>7.5 months</b>.`
        },
        {
          type: 'interactive', widget: 'unit-economics', title: 'Stress-test your unit economics',
          note: 'Halve churn and watch LTV double. Then raise CAC by 50% and see how payback stretches.'
        },
        {
          type: 'scenario',
          prompt: `Your B2B distributor is growing 40% a year but keeps needing to extend its overdraft. Customers pay in 60 days; suppliers want payment in 30. What is the highest-leverage move?`,
          options: [
            { text: 'Raise more equity so you can keep growing.', feedback: 'Possible, but it dilutes owners to fund a structural problem. Fix the cycle first.', good: false },
            { text: 'Offer a small early-payment discount, invoice on delivery, and negotiate 45–60 day supplier terms.', feedback: 'Correct. Growth consumes cash when the CCC is long; shortening DSO and lengthening DPO makes growth self-funding.', good: true },
            { text: 'Slow growth until profits catch up.', feedback: 'Sometimes necessary, but it gives up market share before trying the cheaper fix.', good: false }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Supplier finance needs disclosure',
          html: `<p>Some firms stretch payables using "supply chain finance", where a bank pays suppliers early and the company pays the bank later. Used heavily, it can hide debt-like obligations — a factor in the 2018 collapse of UK contractor Carillion and in the 2021 failure of Greensill Capital. Since 2023–2024, US GAAP and IFRS require more disclosure of these programmes.</p>`
        }
      ],
      terms: [
        { term: 'DSO', def: 'Days sales outstanding: average days to collect cash from customers.' },
        { term: 'DIO', def: 'Days inventory outstanding: average days stock sits before it is sold.' },
        { term: 'DPO', def: 'Days payables outstanding: average days you take to pay suppliers.' },
        { term: 'Cash conversion cycle', def: 'DIO + DSO − DPO; days your cash is tied up in operations.' },
        { term: 'Contribution margin', def: 'Price minus variable cost; what each sale contributes to fixed costs and profit.' },
        { term: 'LTV', def: 'Lifetime value: gross profit expected from a customer over their relationship with you.' },
        { term: 'CAC', def: 'Customer acquisition cost: total sales and marketing spend ÷ new customers acquired.' }
      ],
      quiz: [
        {
          q: 'DIO 50 days, DSO 40 days, DPO 70 days. What is the cash conversion cycle?',
          options: ['160 days', '60 days', '20 days', '−20 days'],
          answer: 2,
          explain: '50 + 40 − 70 = 20 days.'
        },
        {
          q: 'Annual revenue $7.3m and receivables $1.2m. What is DSO (365-day year)?',
          options: ['60 days', '45 days', '30 days', '73 days'],
          answer: 0,
          explain: 'Revenue per day = 7.3m ÷ 365 = $20k. DSO = 1.2m ÷ 20k = 60 days.'
        },
        {
          q: 'ARPU $100/month, gross margin 70%, monthly churn 2%. What is LTV?',
          options: ['$5,000', '$1,400', '$7,000', '$3,500'],
          answer: 3,
          explain: 'LTV = 100 × 0.70 ÷ 0.02 = $3,500.'
        },
        {
          q: 'A product sells for $40 with variable costs of $26. What is the contribution margin ratio?',
          options: ['65%', '35%', '14%', '54%'],
          answer: 1,
          explain: 'Contribution = 40 − 26 = $14; 14 ÷ 40 = 35%.'
        },
        {
          q: 'Why can fast growth bankrupt a company with a long cash conversion cycle?',
          options: ['Growth always lowers margins', 'More sales means more cash tied up in inventory and receivables before customers pay', 'Taxes rise faster than revenue', 'Depreciation increases'],
          answer: 1,
          explain: 'Every extra dollar of sales needs working capital up front; if the cycle is long, cash outflows run ahead of inflows.'
        }
      ],
      challenge: {
        title: 'Free up cash at a wholesale distributor',
        prompt: `A distributor has annual revenue $7.3m, COGS $5.84m, receivables $1.0m, inventory $0.96m and payables $0.48m.<br><br>(a) Calculate DSO, DIO, DPO and the CCC. (b) The CFO believes DSO can drop to 35 days and DPO can rise to 45 days. How much cash is released and what is the new CCC? (c) What would you do with the cash?`,
        hints: ['Revenue per day = 7.3m ÷ 365; COGS per day = 5.84m ÷ 365.', 'Cash released = days saved × the relevant daily amount.'],
        model: `<p><b>(a)</b> Revenue/day = $20,000; COGS/day = $16,000.</p><ul><li>DSO = 1,000,000 ÷ 20,000 = <b>50 days</b></li><li>DIO = 960,000 ÷ 16,000 = <b>60 days</b></li><li>DPO = 480,000 ÷ 16,000 = <b>30 days</b></li><li>CCC = 60 + 50 − 30 = <b>80 days</b></li></ul><p><b>(b)</b></p><ul><li>DSO 50 → 35: 15 days × $20,000 = <b>$300,000</b> released (receivables fall to $700k)</li><li>DPO 30 → 45: 15 days × $16,000 = <b>$240,000</b> released (payables rise to $720k)</li><li>Total cash released ≈ <b>$540,000</b>; new CCC = 60 + 35 − 45 = <b>50 days</b></li></ul><p><b>(c)</b> Pay down the expensive overdraft first, then target inventory (60 days is the biggest component — ABC analysis could cut slow movers). Keep supplier relationships healthy: negotiate longer terms in exchange for volume commitments rather than simply paying late.</p>`
      },
      takeaways: [
        'CCC = DIO + DSO − DPO; every day cut frees cash.',
        'Negative working capital lets growth fund itself (Dell, Amazon).',
        'Contribution margin tells you whether each sale actually helps.',
        'LTV:CAC and payback are the core unit economics of subscription businesses.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'finance-5',
      title: 'Managerial accounting, break-even and FP&A',
      level: 'Intermediate',
      minutes: 15,
      hook: `Before you hire, launch or cut prices, one number tells you how much you need to sell just to stand still.`,
      eli5: `Your school band rents a hall for $300 (fixed — same whatever happens) and each ticket costs $2 to print (variable). If tickets sell for $8, each one "earns" $6 towards the rent. You need 50 tickets to cover the hall. Ticket 51 is your first real profit. That is break-even, and planning a whole company\'s year this way is called budgeting.`,
      blocks: [
        {
          type: 'compare', title: 'Cost behaviour', headers: ['Type', 'Behaviour', 'Examples'],
          rows: [
            ['Fixed', 'Same total regardless of volume (within a range)', 'Rent, salaried staff, software licences, insurance'],
            ['Variable', 'Rises in proportion to volume', 'Raw materials, shipping, payment fees, sales commission'],
            ['Semi-variable', 'Fixed base plus a variable part', 'Phone plans, utilities, cloud hosting with a minimum'],
            ['Step-fixed', 'Fixed until capacity is hit, then jumps', 'Adding a second shift or another warehouse']
          ]
        },
        {
          type: 'formula', name: 'Break-even and target profit (CVP)',
          expr: 'Break-even units = Fixed costs ÷ (Price − Variable cost);  Units for target = (Fixed costs + Target profit) ÷ Contribution per unit',
          explain: 'Cost-volume-profit (CVP) analysis shows how profit changes with volume. Margin of safety = (Actual sales − Break-even sales) ÷ Actual sales.',
          example: `Fixed costs $60,000/month, price $25, variable cost $10 → contribution $15 → break-even = <b>4,000 units</b>. For $30,000 profit: (60,000 + 30,000) ÷ 15 = <b>6,000 units</b>. Selling 5,000 units gives a margin of safety of (5,000 − 4,000) ÷ 5,000 = 20%.`
        },
        {
          type: 'interactive', widget: 'breakeven', title: 'Find your break-even point',
          note: 'Raise fixed costs (a new hire) and see how many more units you must sell. Then raise price by 10% and compare.'
        },
        {
          type: 'formula', name: 'Degree of operating leverage (DOL)',
          expr: 'DOL = Total contribution ÷ Operating profit',
          explain: 'How sensitive profit is to a change in sales. High fixed-cost businesses (airlines, software, hotels) have high operating leverage: great in booms, painful in downturns.',
          example: `Selling 5,000 units in the example: contribution 5,000 × 15 = $75,000; operating profit 75,000 − 60,000 = $15,000. DOL = 75,000 ÷ 15,000 = <b>5</b>. A 10% rise in sales lifts profit about 50%.`
        },
        {
          type: 'framework', name: 'The FP&A cycle', by: 'Financial Planning & Analysis practice', when: 'Running a company\'s planning year',
          steps: [
            { label: 'Annual plan / budget', desc: 'Set revenue, headcount and spend targets for the year, tied to strategy.' },
            { label: 'Driver-based model', desc: 'Build forecasts from operational drivers (leads × conversion × price; heads × cost) rather than last year + 5%.' },
            { label: 'Monthly close & variance analysis', desc: 'Compare actual vs budget. Split variances into volume, price and cost effects; explain the "why".' },
            { label: 'Rolling forecast', desc: 'Every month or quarter, re-forecast the next 12–18 months so decisions use current reality, not a stale budget.' },
            { label: 'Scenario planning', desc: 'Base, upside and downside cases with pre-agreed actions for each.' }
          ]
        },
        {
          type: 'case', company: 'Kraft Heinz', year: '2015–2019', title: 'When cost-cutting goes too far',
          situation: `After the 2015 merger backed by 3G Capital and Berkshire Hathaway, Kraft Heinz applied rigorous <b>zero-based budgeting</b> (every cost justified from zero each year) and drove margins up.`,
          decision: `Savings were prioritised while consumer tastes shifted towards fresher, healthier and private-label products.`,
          outcome: `In February 2019 the company announced a write-down of roughly $15 billion on brands including Kraft and Oscar Mayer, cut its dividend and disclosed an SEC inquiry into its procurement accounting. The share price fell sharply.`,
          lesson: `Budgets are a tool for strategy, not a replacement for it. Cutting brand and innovation spend can boost short-term margins while eroding long-term value.`
        },
        {
          type: 'callout', kind: 'insight', title: '2025–2026 FP&A practice',
          html: `<p>Modern finance teams run <b>driver-based rolling forecasts</b> in planning tools connected to the ERP and CRM, close the books in days rather than weeks, and increasingly use AI assistants to draft variance commentary and reconcile accounts. The human job shifts to asking better questions and challenging assumptions.</p>`
        }
      ],
      terms: [
        { term: 'Fixed cost', def: 'A cost that does not change with volume in the short term.' },
        { term: 'Variable cost', def: 'A cost that rises and falls with the number of units sold.' },
        { term: 'Break-even point', def: 'The sales volume at which total contribution exactly covers fixed costs; profit is zero.' },
        { term: 'Margin of safety', def: 'How far sales can fall before you hit break-even, as a % of current sales.' },
        { term: 'Operating leverage', def: 'The degree to which profit swings with sales, driven by the share of fixed costs.' },
        { term: 'Variance analysis', def: 'Explaining differences between actual results and the budget.' },
        { term: 'Zero-based budgeting', def: 'Building each budget from zero, justifying every cost, rather than adjusting last year\'s numbers.' }
      ],
      quiz: [
        {
          q: 'Fixed costs $45,000, price $30, variable cost $12. What is the break-even volume?',
          options: ['1,500 units', '3,750 units', '2,000 units', '2,500 units'],
          answer: 3,
          explain: 'Contribution = 30 − 12 = $18. 45,000 ÷ 18 = 2,500 units.'
        },
        {
          q: 'Same business: how many units for a $27,000 profit?',
          options: ['4,000', '3,500', '5,000', '2,500'],
          answer: 0,
          explain: '(45,000 + 27,000) ÷ 18 = 72,000 ÷ 18 = 4,000 units.'
        },
        {
          q: 'Which business typically has the highest operating leverage?',
          options: ['A consulting firm paying contractors per hour', 'A software company with mostly salaried engineers and low hosting costs', 'A reseller paying cost-plus per item', 'A drop-shipper'],
          answer: 1,
          explain: 'Software has high fixed costs and very low variable costs, so profit swings sharply with revenue.'
        },
        {
          q: 'Actual sales 8,000 units; break-even 6,000 units. What is the margin of safety?',
          options: ['33%', '75%', '25%', '20%'],
          answer: 2,
          explain: '(8,000 − 6,000) ÷ 8,000 = 25%.'
        },
        {
          q: 'What is the main advantage of a rolling forecast over a static annual budget?',
          options: ['It never changes', 'It always shows higher profits', 'It keeps a forward 12–18 month view updated with current reality', 'It removes the need for variance analysis'],
          answer: 2,
          explain: 'A rolling forecast is refreshed regularly so decisions reflect what is actually happening.'
        }
      ],
      challenge: {
        title: 'Should the bakery add a night shift?',
        prompt: `A bakery sells loaves at $4.00 with a variable cost of $1.50 per loaf. Fixed costs are $70,000 a month and the current shift can bake at most 40,000 loaves a month, which it already sells.<br><br>A supermarket chain offers a contract for 12,000 extra loaves a month at $3.20 each. Meeting it needs a night shift, a <b>step-fixed</b> cost of $18,000 a month that adds 20,000 loaves of capacity.<br><br>(a) What are today\'s break-even volume and monthly profit? (b) What does the contract add to monthly profit? (c) How many contract loaves does the night shift need just to pay for itself, and what is its margin of safety? (d) Recommend what to do, including what you would negotiate.`,
        hints: ['Contribution per loaf is price minus variable cost — and the contract price is different from the shop price.', 'Treat the night shift as a separate decision: its own fixed cost against its own contribution.', 'The shift has 8,000 loaves of spare capacity even after the contract. What could fill it?'],
        model: `<p><b>(a) Today</b>: contribution = 4.00 − 1.50 = $2.50 per loaf. Break-even = 70,000 ÷ 2.50 = <b>28,000 loaves</b>. Profit = 40,000 × 2.50 − 70,000 = <b>$30,000/month</b>. Margin of safety = (40,000 − 28,000) ÷ 40,000 = 30%.</p><p><b>(b) The contract</b>: contribution = 3.20 − 1.50 = $1.70 per loaf × 12,000 = $20,400. Minus the $18,000 night shift = <b>+$2,400/month</b>. Total profit rises to $32,400.</p><p><b>(c) Night-shift break-even</b> = 18,000 ÷ 1.70 ≈ <b>10,588 loaves</b>. Margin of safety = (12,000 − 10,588) ÷ 12,000 ≈ <b>12%</b>. If the supermarket orders about 12% less than promised, the shift loses money.</p><p><b>(d) Recommendation</b>: the deal as offered is barely worth the effort and risk. Before signing:</p><ul><li><b>Negotiate price</b>: at $3.40 the contribution is $1.90 × 12,000 = $22,800, so the shift earns $4,800/month and break-even falls to about 9,474 loaves.</li><li><b>Negotiate a volume floor</b> (minimum monthly order or take-or-pay) so the step-fixed cost is covered.</li><li><b>Fill the spare 8,000 loaves</b> of night capacity: every extra shop loaf adds $2.50, so 3,000 more retail loaves would add $7,500/month.</li></ul><p><b>Risks</b>: buyer power of a large supermarket at renewal, cannibalisation if shoppers buy the cheaper supermarket loaf instead, and quality control on a new shift. Sign only with a better price or a volume guarantee — otherwise keep capacity for higher-margin growth.</p>`
      },
      takeaways: [
        'Separate fixed from variable costs before any pricing or hiring decision.',
        'Break-even = fixed costs ÷ contribution per unit.',
        'High operating leverage magnifies both gains and losses.',
        'Good FP&A is driver-based, rolling and focused on explaining variances.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'finance-6',
      title: 'Time value of money, capital budgeting and WACC',
      level: 'Advanced',
      minutes: 18,
      hook: `A dollar today is worth more than a dollar next year — and getting that one idea right separates value-creating investments from expensive mistakes.`,
      eli5: `If I offer you $100 today or $100 in a year, you take it today: you could put it in a savings account and have more than $100 next year. So money in the future has to be "shrunk" to compare it with money now. Big companies do this to decide whether a new factory is worth building: they shrink all its future cash back to today and see if it beats the cost.`,
      blocks: [
        {
          type: 'formula', name: 'Future and present value',
          expr: 'FV = PV × (1 + r)^n;   PV = FV ÷ (1 + r)^n',
          explain: 'r is the interest or discount rate per period, n the number of periods. Rule of 72: money doubles in roughly 72 ÷ r years.',
          example: `$1,000 at 8% for 9 years → 1,000 × 1.08^9 ≈ <b>$1,999</b> (doubles, as the Rule of 72 predicts). $1,000 received in 3 years at 10% is worth 1,000 ÷ 1.331 ≈ <b>$751</b> today.`
        },
        {
          type: 'interactive', widget: 'compound', title: 'Feel compounding',
          note: 'Compare 5% and 10% over 30 years. Doubling the rate more than doubles the result.'
        },
        {
          type: 'compare', title: 'Capital budgeting tools', headers: ['Tool', 'Rule', 'Strength', 'Weakness'],
          rows: [
            ['NPV', 'Accept if NPV > 0', 'Measures value created in dollars; uses all cash flows and the cost of capital', 'Needs a discount rate; less intuitive to non-finance people'],
            ['IRR', 'Accept if IRR > cost of capital', 'Easy to communicate as a %', 'Can mislead when comparing projects of different size or with unusual cash flow patterns'],
            ['Payback', 'Accept if cash is recovered within X years', 'Simple; highlights liquidity risk', 'Ignores time value and everything after payback'],
            ['Profitability index', 'PV of inflows ÷ investment > 1', 'Useful when capital is rationed', 'Same discount-rate dependence as NPV']
          ]
        },
        {
          type: 'formula', name: 'Net present value',
          expr: 'NPV = −Investment + Σ CFt ÷ (1 + r)^t',
          explain: 'Discount every future cash flow at the cost of capital and subtract the upfront investment. Positive NPV means the project earns more than investors require.',
          example: `Invest $1,000; receive $400 a year for 3 years; r = 10%. PV = 400 × (0.9091 + 0.8264 + 0.7513) = 400 × 2.4869 ≈ $994.7. <b>NPV ≈ −$5</b>. Payback is a comfortable 2.5 years, yet the project slightly destroys value — IRR is about 9.7%, just below 10%.`
        },
        {
          type: 'interactive', widget: 'npv', title: 'NPV and IRR calculator',
          note: 'Enter −1,000 then 400, 400, 400. Move the discount rate from 8% to 12% and watch NPV cross zero near the IRR.'
        },
        {
          type: 'framework', name: 'Building the discount rate: CAPM and WACC', by: 'CAPM: Sharpe, Lintner and others, 1960s', when: 'Valuing projects or companies',
          steps: [
            { label: 'Cost of equity (CAPM)', desc: 'Re = Risk-free rate + Beta × Equity risk premium. Beta measures how much the stock moves with the market. Example: 4% + 1.2 × 5% = 10%.' },
            { label: 'Cost of debt', desc: 'The interest rate the company pays on new borrowing. Interest is tax-deductible, so after-tax cost = Rd × (1 − tax rate).' },
            { label: 'Weights', desc: 'Use market values: E ÷ (D + E) and D ÷ (D + E).' },
            { label: 'WACC', desc: 'WACC = E/V × Re + D/V × Rd × (1 − t). Example: 60% × 10% + 40% × 6% × 0.75 = 6.0% + 1.8% = 7.8%.' },
            { label: 'Adjust for project risk', desc: 'A risky new venture deserves a higher rate than the company\'s average WACC.' }
          ]
        },
        {
          type: 'case', company: 'Eurotunnel (Channel Tunnel)', year: '1987–2007', title: 'Great project, poor investment',
          situation: `The Channel Tunnel linking the UK and France was privately financed with equity and large bank loans, based on forecasts of construction cost and traffic.`,
          decision: `Investors committed on projected cash flows decades into the future.`,
          outcome: `Construction costs ran far above the original budget, opening was delayed, and traffic and revenue came in below forecasts. The company went through repeated financial restructurings and original shareholders lost most of their investment, even though the tunnel itself became vital infrastructure.`,
          lesson: `NPV is only as good as its cash flow forecasts. Stress-test cost overruns, delays and demand — and remember that a project can be good for society but bad for its first investors.`
        },
        {
          type: 'checklist', title: 'Before approving a capital project',
          items: ['Use incremental cash flows only (ignore sunk costs)', 'Include working capital and tax effects', 'Discount at a rate that reflects the project\'s risk', 'Run base, upside and downside cases', 'Check the break-even assumption — what must be true for NPV > 0?', 'Plan a post-investment review']
        }
      ],
      terms: [
        { term: 'Time value of money', def: 'The idea that money today is worth more than the same amount in the future.' },
        { term: 'Discount rate', def: 'The rate used to convert future cash flows into today\'s value; reflects risk and opportunity cost.' },
        { term: 'NPV', def: 'Net present value: the present value of future cash flows minus the investment.' },
        { term: 'IRR', def: 'Internal rate of return: the discount rate at which NPV equals zero.' },
        { term: 'Payback period', def: 'How long it takes to recover the initial investment from cash flows.' },
        { term: 'Beta', def: 'A measure of how much a stock\'s returns move relative to the overall market.' },
        { term: 'WACC', def: 'Weighted average cost of capital: the blended return required by debt and equity holders.' }
      ],
      quiz: [
        {
          q: 'What is the present value of $1,210 received in 2 years at a 10% discount rate?',
          options: ['$1,100', '$1,000', '$990', '$1,089'],
          answer: 1,
          explain: '1,210 ÷ 1.1² = 1,210 ÷ 1.21 = $1,000.'
        },
        {
          q: 'Risk-free rate 3%, beta 1.5, equity risk premium 6%. What is the cost of equity under CAPM?',
          options: ['9%', '10.5%', '13.5%', '12%'],
          answer: 3,
          explain: '3% + 1.5 × 6% = 3% + 9% = 12%.'
        },
        {
          q: 'Equity 70% at 12%, debt 30% at 5%, tax rate 20%. What is WACC?',
          options: ['9.6%', '10.4%', '8.9%', '9.9%'],
          answer: 0,
          explain: '0.7 × 12% + 0.3 × 5% × 0.8 = 8.4% + 1.2% = 9.6%.'
        },
        {
          q: 'A project has an IRR of 14% and the company\'s cost of capital is 9%. Its NPV at 9% is:',
          options: ['Negative', 'Exactly zero', 'Positive', 'Impossible to tell'],
          answer: 2,
          explain: 'If IRR exceeds the discount rate (for a normal invest-then-receive project), NPV at that rate is positive.'
        },
        {
          q: 'Using the Rule of 72, roughly how long does money take to double at 6%?',
          options: ['6 years', '12 years', '18 years', '7.2 years'],
          answer: 1,
          explain: '72 ÷ 6 = 12 years.'
        }
      ],
      challenge: {
        title: 'Approve the automation machine?',
        prompt: `A factory can buy an automation machine for $500,000. It will save $150,000 a year in labour for 5 years, then be worthless. The company\'s WACC is 10%.<br><br>Calculate (a) payback, (b) NPV, (c) approximate IRR. (d) The operations team admits savings might only be $120,000 a year. Does your decision change?`,
        hints: ['The 5-year annuity factor at 10% is 3.7908.', 'For IRR, find the rate where the annuity factor equals 500 ÷ 150 = 3.333.', 'Annuity factors: 15% → 3.3522, 16% → 3.2743.'],
        model: `<p><b>(a) Payback</b> = 500,000 ÷ 150,000 = <b>3.33 years</b>.</p><p><b>(b) NPV</b> = −500,000 + 150,000 × 3.7908 = −500,000 + 568,620 = <b>+$68,620</b>. Accept: it creates value.</p><p><b>(c) IRR</b>: we need an annuity factor of 3.333. At 15% it is 3.3522, at 16% 3.2743. Interpolating: 15% + (3.3522 − 3.3333) ÷ (3.3522 − 3.2743) ≈ 15% + 0.24% ≈ <b>15.2%</b>, comfortably above the 10% WACC.</p><p><b>(d) Downside</b>: 120,000 × 3.7908 = 454,896 → NPV = <b>−$45,104</b>. The decision flips. Break-even annual saving = 500,000 ÷ 3.7908 ≈ <b>$131,900</b>.</p><p><b>Recommendation</b>: approve only if we are confident savings exceed about $132k a year. Ask operations to validate the labour savings with a pilot, or negotiate the price down — every $10,000 off the price adds $10,000 to NPV.</p>`
      },
      takeaways: [
        'Discount future cash to compare it with money today.',
        'NPV > 0 creates value; IRR and payback are useful supporting views.',
        'WACC blends the after-tax cost of debt and the CAPM cost of equity.',
        'Always find the break-even assumption that flips the decision.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'finance-7',
      title: 'Startup and SaaS finance: burn, runway and efficiency',
      level: 'Advanced',
      minutes: 15,
      hook: `Startups rarely die from competition — they die when the bank account hits zero. These metrics are your fuel gauge.`,
      eli5: `A startup is like a rocket that has not yet reached orbit. It burns fuel (cash) every month. <b>Burn</b> is how much fuel you use, <b>runway</b> is how many months until the tank is empty, and <b>efficiency</b> is how much height (revenue growth) you get per litre. Investors pay to refuel only rockets that are climbing efficiently.`,
      blocks: [
        {
          type: 'formula', name: 'Burn and runway',
          expr: 'Net burn = Cash out − Cash in (per month);  Runway (months) = Cash balance ÷ Net burn',
          explain: 'Gross burn is total monthly spending; net burn subtracts cash receipts. Use the average of the last 3 months, and remember burn usually rises as you hire.',
          example: `Cash $6m; spending $650k/month; cash collected $250k/month → net burn <b>$400k</b> → runway = 6,000 ÷ 400 = <b>15 months</b>.`
        },
        {
          type: 'interactive', widget: 'runway', title: 'Runway simulator',
          note: 'Increase revenue growth by 2 points per month and see how many months you add. Then add 5 hires.'
        },
        {
          type: 'formula', name: 'Burn multiple',
          expr: 'Burn multiple = Net burn ÷ Net new ARR (same period)',
          explain: 'Popularised by David Sacks in 2020: how many dollars you burn to add one dollar of annual recurring revenue. Commonly cited guide: under 1 is excellent, 1–1.5 good, 1.5–2 suspect, above 2 bad (stricter at later stages).',
          example: `Burned $3m over the year and added $2m of net new ARR → burn multiple = <b>1.5</b>.`
        },
        {
          type: 'formula', name: 'Rule of 40',
          expr: 'Revenue growth % + Profit margin % ≥ 40%',
          explain: 'A health check for scaling software companies, usually using free cash flow or EBITDA margin. Fast growth can justify losses; slower growth needs profits.',
          example: `Growth 30% + FCF margin 5% = 35% (below the bar). Growth 60% + margin −15% = 45% (passes).`
        },
        {
          type: 'interactive', widget: 'rule-of-40', title: 'Rule of 40 check',
          note: 'Find three combinations that score exactly 40. Which would investors prefer in 2026, and why?'
        },
        {
          type: 'flip', title: 'SaaS metrics cheat sheet',
          cards: [
            { front: 'ARR', back: 'Annual recurring revenue: the annualised value of active subscriptions (MRR × 12).' },
            { front: 'NRR (net revenue retention)', back: 'Revenue this year from last year\'s customers ÷ their revenue last year, including expansion, downgrades and churn. Above 100% means you grow even with zero new customers.' },
            { front: 'CAC payback', back: 'Months of gross profit from a new customer needed to recover what it cost to acquire them.' },
            { front: 'Default alive', back: 'Paul Graham\'s test (2015): on current growth and costs, will you reach profitability before the cash runs out?' },
            { front: 'Gross margin for AI products', back: 'Often lower than classic SaaS because model inference costs scale with usage. Track it per customer and per feature.' }
          ]
        },
        {
          type: 'timeline', title: 'From "growth at all costs" to efficiency',
          items: [
            { label: '2015', desc: 'Rule of 40 discussed widely among SaaS investors; Paul Graham publishes "Default Alive or Default Dead?".' },
            { label: '2020–21', desc: 'Near-zero interest rates and abundant capital: high valuations, high burn tolerated.' },
            { label: 'May 2022', desc: 'Sequoia shares its "Adapting to Endure" presentation with founders, urging them to cut burn and extend runway as markets fall.' },
            { label: '2023–24', desc: 'Efficiency era: layoffs, burn multiple and Rule of 40 become board-level metrics.' },
            { label: '2025–26', desc: 'AI-native startups raise large rounds; investors scrutinise gross margin after inference costs, revenue quality (usage vs committed) and revenue per employee.' }
          ]
        },
        {
          type: 'case', company: 'Sequoia Capital memo', year: '2022', title: 'Adapting to Endure',
          situation: `After a decade of cheap capital, public tech valuations fell sharply in early 2022 as interest rates rose.`,
          decision: `Sequoia told its portfolio founders that the downturn could last, that fundraising would get harder, and that they should prioritise runway, cut non-essential spend and move towards self-sufficiency rather than waiting for the market to return.`,
          outcome: `Many startups cut costs and extended runway; those that had not adjusted faced down rounds or shut-downs in 2023. The memo became a reference point for the shift from growth-at-all-costs to efficient growth.`,
          lesson: `Plan runway for the market you have, not the one you want. Start fundraising with at least 9–12 months of cash left.`
        }
      ],
      terms: [
        { term: 'Gross burn', def: 'Total cash spent in a month.' },
        { term: 'Net burn', def: 'Cash spent minus cash received in a month.' },
        { term: 'Runway', def: 'Months until cash runs out at the current net burn.' },
        { term: 'Burn multiple', def: 'Net burn divided by net new ARR; lower is more efficient.' },
        { term: 'Rule of 40', def: 'Growth rate plus profit margin should be at least 40% for a healthy software company.' },
        { term: 'NRR', def: 'Net revenue retention: how revenue from an existing customer cohort changes over a year.' },
        { term: 'Default alive', def: 'A company that will reach profitability on its current trajectory before its cash runs out.' }
      ],
      quiz: [
        {
          q: 'Cash $3.6m, monthly spending $500k, monthly cash collected $200k. What is the runway?',
          options: ['7.2 months', '18 months', '12 months', '10 months'],
          answer: 2,
          explain: 'Net burn = 500 − 200 = $300k. Runway = 3,600 ÷ 300 = 12 months.'
        },
        {
          q: 'A company burned $8m last year and added $4m of net new ARR. What is its burn multiple?',
          options: ['0.5', '2.0', '4.0', '1.0'],
          answer: 1,
          explain: '8 ÷ 4 = 2.0 — expensive growth by most benchmarks.'
        },
        {
          q: 'Which company passes the Rule of 40?',
          options: ['Growth 20%, margin 10%', 'Growth 50%, margin −5%', 'Growth 35%, margin 0%', 'Growth 15%, margin 20%'],
          answer: 1,
          explain: '50 + (−5) = 45%, above 40. The others score 30%, 35% and 35%.'
        },
        {
          q: 'NRR of 120% means:',
          options: ['Existing customers generate 20% more revenue than a year ago, net of churn', '20% of customers churned', 'Revenue grew 120% in total', 'New customers grew 20%'],
          answer: 0,
          explain: 'NRR measures the same cohort: expansion exceeded churn and downgrades by 20%.'
        },
        {
          q: 'Why do investors look closely at gross margin in AI-native startups?',
          options: ['AI products have no variable costs', 'Gross margin is not used in SaaS', 'Regulators require it', 'Model inference costs grow with usage and can compress margins'],
          answer: 3,
          explain: 'Each query costs compute, so revenue may scale without the near-zero marginal cost of classic software.'
        }
      ],
      challenge: {
        title: 'Twelve months of runway — now what?',
        prompt: `Your B2B SaaS startup has $4.8m in the bank. Monthly spending is $600k and monthly cash collections are $200k. ARR is $2.4m today, up from $0.6m a year ago; average net burn over the last year was also about $400k/month.<br><br>(a) Calculate net burn, runway and burn multiple. (b) The board asks you to cut $100k of monthly spend. What is the new runway? (c) When should you start fundraising, and what story do you tell?`,
        hints: ['Net new ARR = 2.4 − 0.6.', 'Burn multiple uses the same period for burn and ARR growth.', 'A raise typically takes 3–6 months from first meeting to cash in the bank.'],
        model: `<p><b>(a)</b> Net burn = 600 − 200 = <b>$400k/month</b>. Runway = 4,800 ÷ 400 = <b>12 months</b>. Net new ARR = 2.4 − 0.6 = $1.8m; annual net burn = 400 × 12 = $4.8m; burn multiple = 4.8 ÷ 1.8 ≈ <b>2.7</b> — inefficient.</p><p><b>(b)</b> Net burn becomes $300k → runway = 4,800 ÷ 300 = <b>16 months</b>. If ARR keeps growing, collections rise and runway extends further.</p><p><b>(c)</b> Start the process <b>now</b>: with 3–6 months to close and a target of never raising with fewer than 6 months left, you need to begin with 12+ months of runway. Story: ARR quadrupled (0.6 → 2.4m, +300%), and with the cost cut the burn multiple heads towards about 2, with a plan to reach below 1.5 within a year by focusing spend on the highest-converting channels. Show NRR, gross margin and CAC payback by segment to prove efficiency. Also prepare a "default alive" plan in case the raise fails.</p><p><i>Note:</i> Rule of 40 is less meaningful at this size — burn multiple and CAC payback are the better efficiency tests early on.</p>`
      },
      takeaways: [
        'Runway = cash ÷ net burn; start raising with 12+ months left.',
        'Burn multiple shows how efficiently cash turns into ARR.',
        'Rule of 40 balances growth and profitability for scaling software firms.',
        'In 2025–26, investors scrutinise AI gross margins and revenue quality.'
      ]
    }
  ]
});
