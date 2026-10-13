/* MBA Studio — Track 24: Corporate Finance II: M&A, LBOs & Capital Structure */
MBA.addTrack({
  id: 'corp-finance',
  stage: 4,
  order: 24,
  title: 'Corporate Finance II: M&A, LBOs & Capital Structure',
  icon: '🏦',
  color: '#1d4ed8',
  tagline: 'How the big money decisions really get made',
  summary: `Go beyond the basics of finance into the decisions boards and deal teams make: how much debt to carry, how to return cash to shareholders, when an acquisition creates value, how a leveraged buyout earns its return, how to defend a valuation, how to hedge risks you cannot control and what happens when a company cannot pay its debts. Every idea comes with worked numbers you can check yourself.`,
  outcomes: [
    'Choose a sensible capital structure using the tax shield, distress costs, trade-off and pecking-order thinking',
    'Compare dividends and buybacks and read the signals they send',
    'Run accretion/dilution maths and judge whether synergies justify the premium paid',
    'Build a simple LBO: sources and uses, debt paydown, exit, MOIC and IRR',
    'Defend a deal valuation with a full DCF, the EV-to-equity bridge, comps, precedents and a football field',
    'Explain hedging, Value at Risk, covenants and restructuring under Chapter 11 and India\'s IBC'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'corp-finance-1',
      title: 'Capital structure: how much debt is too much?',
      level: 'Beginner',
      minutes: 16,
      hook: `Two identical companies can have very different fates simply because one borrowed too much — or too little.`,
      eli5: `Imagine buying a bicycle to run a delivery round. You can pay with your own savings, or borrow some of the money from your aunt. Borrowing means you keep more savings for other things and, if the round goes well, your own money earns a bigger percentage. But your aunt wants paying back every month whether it rains or not. Borrow a little and you are fine; borrow a lot and one rainy month could mean you lose the bike. Capital structure is just deciding how much of the bike to buy with borrowed money.`,
      blocks: [
        {
          type: 'text', title: 'Where we are going',
          html: `<p>In the <b>finance</b> track you met WACC and in <b>investment</b> you met the different types of capital. Here we go further and ask the question every CFO and board must answer: <b>what mix of debt and equity should this company use?</b></p><p>The <b>capital structure</b> is that mix. It matters because debt is cheaper than equity (lenders take less risk and interest is usually tax-deductible) but debt also brings fixed obligations that can push a company into distress when times turn bad.</p>`
        },
        {
          type: 'framework', name: 'Modigliani–Miller: the starting point', by: 'Franco Modigliani & Merton Miller, 1958 and 1963', when: 'To understand what really changes when a firm borrows',
          steps: [
            { label: 'The pizza idea (no taxes)', desc: 'In a perfect world with no taxes, no bankruptcy costs and perfect information, firm value does not depend on how you finance it. Slicing a pizza into more pieces does not create more pizza. Value comes from the assets and their cash flows, not the labels on the claims.' },
            { label: 'Leverage raises the cost of equity', desc: 'Adding debt makes equity riskier, so shareholders demand a higher return. In the perfect world this exactly offsets the cheaper debt, leaving WACC unchanged.' },
            { label: 'Add corporate taxes', desc: 'Because interest is tax-deductible, debt shields some profit from tax. Now borrowing does create value: the government takes a smaller slice of the pizza.' },
            { label: 'Add distress costs', desc: 'Too much debt raises the chance of financial distress: lost customers and suppliers, fire-sale assets, legal fees and management distraction. These costs eventually outweigh the tax benefit.' },
            { label: 'So what?', desc: 'MM tells you where to look. Capital structure matters only because of real-world frictions: taxes, distress costs, information gaps and incentives. Every capital structure argument should name which friction it relies on.' }
          ]
        },
        {
          type: 'formula', name: 'The interest tax shield',
          expr: 'Annual tax shield = Interest × Tax rate;   PV of tax shield (permanent debt) ≈ Debt × Tax rate',
          explain: 'If debt is kept at a constant level forever and the shield is as risky as the debt, discounting Interest × t at the cost of debt gives D × t. Value of levered firm ≈ Value unlevered + PV(tax shield) − PV(expected distress costs).',
          example: `An all-equity firm is worth <b>$1,000m</b>. It borrows <b>$400m</b> permanently at 6% and uses it to buy back shares. Tax rate 25%. Annual interest = $24m; annual tax saving = 24 × 25% = <b>$6m</b>. PV of the shield = 400 × 25% = <b>$100m</b>, so the firm is worth about <b>$1,100m</b> before any distress costs.`
        },
        {
          type: 'compare', title: 'Leverage magnifies returns both ways (illustrative)', headers: ['', 'All equity', '50% debt at 6%'],
          rows: [
            ['Assets / capital', '$1,000m (all equity)', '$500m debt + $500m equity'],
            ['Normal year EBIT $100m', 'Tax 25 → net income 75 → ROE 7.5%', 'Interest 30 → EBT 70 → tax 17.5 → net income 52.5 → ROE 10.5%'],
            ['Bad year EBIT $40m', 'Tax 10 → net income 30 → ROE 3.0%', 'Interest 30 → EBT 10 → tax 2.5 → net income 7.5 → ROE 1.5%'],
            ['Terrible year EBIT $20m', 'Net income 15 → ROE 1.5%', 'EBT −10 → loss → ROE negative; interest cover only 0.7x'],
            ['Lesson', 'Steadier', 'Higher average return, much wider swings — and a floor where you cannot pay interest']
          ]
        },
        {
          type: 'matrix', name: 'Trade-off vs pecking order: which explains behaviour?', xLabel: 'Information gap between managers and investors →', yLabel: 'Stability & tangibility of cash flows →',
          cells: [
            { label: 'Trade-off rules (stable, transparent)', desc: 'Utilities, pipelines, real-estate owners. Steady cash flows and hard assets that lenders value: borrow up to the point where the extra tax shield equals the extra distress cost.' },
            { label: 'Debt but carefully signalled', desc: 'Mature firms with complex businesses (e.g. conglomerates). Can carry debt, but issuing equity would be read as "management thinks shares are overpriced", so they prefer retained earnings, then debt.' },
            { label: 'Low debt, equity-funded', desc: 'Young firms with volatile cash flows and few hard assets but well-understood stories (e.g. listed growth tech). Distress costs are high, tax shields small (few profits to shield).' },
            { label: 'Pecking order rules', desc: 'Firms with big information gaps (biotech, early tech). Use internal cash first, then debt, then equity as a last resort — because equity issues are discounted by sceptical investors.' }
          ]
        },
        {
          type: 'case', company: 'Apple', year: '2013', title: 'Borrowing billions while sitting on cash',
          situation: `In 2013 Apple held well over $100 billion of cash and investments, but a large share was held overseas, where bringing it home would have triggered US tax under the rules of the time. Investors were pressing Apple to return more cash.`,
          decision: `Instead of repatriating cash, Apple sold about $17 billion of bonds in April 2013 — at the time the largest corporate bond deal on record — and used debt to help fund dividends and share buybacks.`,
          outcome: `Apple kept borrowing in later years while running a very large capital return programme. Its low borrowing cost (it is a very strong credit) plus the tax-deductibility of interest made debt cheap relative to the alternative.`,
          lesson: `Capital structure decisions are often about frictions — here, tax on repatriation and the tax deductibility of interest — exactly as Modigliani–Miller predicts. A strong, cash-rich firm can rationally borrow.`
        },
        {
          type: 'checklist', title: 'Setting a target leverage',
          items: [
            'How stable are cash flows through a downturn? Stress EBITDA by 20–40%',
            'What interest cover (EBIT ÷ interest) and Net debt ÷ EBITDA keep us at our target credit rating?',
            'Are there profits to shield? (Loss-making firms gain nothing from the tax shield)',
            'How costly would distress be? (Customers who need long warranties, key staff, supplier credit)',
            'Do we need flexibility to invest or acquire in a downturn?',
            'What do peers with similar business risk carry — and why?'
          ]
        },
        {
          type: 'scenario',
          prompt: `You are CFO of a cyclical steel distributor. A board member says: "Debt is cheaper than equity, so let us borrow 5x EBITDA and buy back half our shares." What do you say?`,
          options: [
            { text: 'Agree — cheaper capital always lowers WACC and raises value.', feedback: 'Modigliani–Miller shows the cost of equity rises with leverage. Beyond a point distress costs dominate, especially in a cyclical business where EBITDA can halve.', good: false },
            { text: 'Stress-test EBITDA in a downturn, set leverage so interest cover stays comfortable at the bottom of the cycle, and size any buyback to that.', feedback: 'Right. Leverage should be set on bad-year cash flows, not good-year ones. A cyclical firm usually carries less debt than a utility.', good: true },
            { text: 'Refuse all debt — any borrowing is dangerous.', feedback: 'Zero debt gives up a real tax shield and may leave equity holders with a lower return than they could safely earn.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Capital structure', def: 'The mix of debt and equity a company uses to fund its assets.' },
        { term: 'Modigliani–Miller (MM)', def: 'The theorem that, without taxes and frictions, financing choices do not change firm value; real-world frictions explain why they do.' },
        { term: 'Interest tax shield', def: 'The tax saved because interest is deductible: interest × tax rate each year.' },
        { term: 'Financial distress costs', def: 'Direct (legal, advisory) and indirect (lost customers, suppliers, staff, under-investment) costs of being close to default.' },
        { term: 'Trade-off theory', def: 'Firms borrow until the marginal tax benefit of debt equals the marginal expected cost of distress.' },
        { term: 'Pecking order theory', def: 'Firms prefer internal cash, then debt, then equity, because issuing equity signals that shares may be overvalued (Myers and Majluf, 1984).' },
        { term: 'Interest cover', def: 'EBIT ÷ interest expense; how many times profits cover the interest bill.' }
      ],
      quiz: [
        {
          q: 'In the original Modigliani–Miller world (no taxes, no distress costs), what happens to firm value when a company swaps equity for debt?',
          options: ['It rises because debt is cheaper', 'It falls because risk rises', 'It stays the same', 'It depends on the share price'],
          answer: 2,
          explain: 'Without frictions, the cheaper debt is exactly offset by a higher cost of equity; total value is unchanged.'
        },
        {
          q: 'A firm carries $200m of permanent debt and pays tax at 30%. What is the approximate present value of its interest tax shield?',
          options: ['$6m', '$60m', '$200m', '$140m'],
          answer: 1,
          explain: 'PV ≈ D × t = 200 × 30% = $60m.'
        },
        {
          q: 'Assets $200m, EBIT $30m, tax 25%. If financed with $100m debt at 8% and $100m equity, what is ROE?',
          options: ['16.5%', '11.25%', '22%', '15%'],
          answer: 0,
          explain: 'Interest 8 → EBT 22 → tax 5.5 → net income 16.5 on equity of 100 = 16.5%. All-equity ROE would be 22.5 ÷ 200 = 11.25%.'
        },
        {
          q: 'According to the pecking order theory, which funding source does a firm prefer LAST?',
          options: ['Retained earnings', 'Bank debt', 'Bonds', 'New equity'],
          answer: 3,
          explain: 'Issuing equity signals that managers think shares are overvalued, so investors mark the price down. It is the last resort.'
        },
        {
          q: 'Which company should typically carry the LEAST debt?',
          options: ['An early biotech with volatile cash flows and mostly intangible assets', 'A regulated electricity network', 'A toll-road operator', 'A mature real-estate landlord with long leases'],
          answer: 0,
          explain: 'Volatile cash flows, few profits to shield and intangible assets make distress likely and costly.'
        }
      ],
      challenge: {
        title: 'How much should we borrow?',
        prompt: `An all-equity manufacturer is worth $800m and earns stable EBIT of $90m. Tax rate 25%. The board is considering two recapitalisations, borrowing permanently at 7% and using the cash to buy back shares:<br><br>• <b>Option A:</b> borrow $300m. Analysts estimate the probability of financial distress rises from 2% to 10%.<br>• <b>Option B:</b> borrow $500m. Probability of distress rises to 40%.<br><br>If distress happens it would cost about 25% of firm value. (a) Value each option using the tax shield minus the increase in expected distress costs. (b) Check interest cover. (c) Recommend.`,
        hints: ['PV of tax shield ≈ D × t.', 'Expected distress cost = increase in probability × cost of distress (25% × $800m).', 'Interest cover = EBIT ÷ (D × 7%).'],
        model: `<p><b>Cost of distress</b> = 25% × $800m = <b>$200m</b>.</p><table><thead><tr><th></th><th>Option A ($300m)</th><th>Option B ($500m)</th></tr></thead><tbody><tr><td>PV tax shield (D × 25%)</td><td>$75m</td><td>$125m</td></tr><tr><td>Increase in distress probability</td><td>10% − 2% = 8%</td><td>40% − 2% = 38%</td></tr><tr><td>Expected distress cost</td><td>8% × 200 = $16m</td><td>38% × 200 = $76m</td></tr><tr><td><b>Net value created</b></td><td><b>+$59m</b></td><td><b>+$49m</b></td></tr><tr><td>Interest (7%)</td><td>$21m</td><td>$35m</td></tr><tr><td>Interest cover (90 ÷ interest)</td><td>4.3x</td><td>2.6x</td></tr></tbody></table><p><b>Reading it</b>: going from $300m to $500m adds $50m of tax shield but $60m of expected distress cost, so the extra borrowing destroys value at the margin. Option B also leaves thin interest cover — a 30% fall in EBIT to $63m would take cover to 1.8x and likely breach covenants.</p><p><b>Recommendation</b>: choose <b>Option A</b> (about $300m). It captures most of the tax benefit while keeping cover above 4x. Revisit if cash flows prove more stable than assumed. Note the numbers on distress probability are estimates — present a range to the board.</p>`
      },
      takeaways: [
        'MM says financing does not create value in a perfect world — so look for the real frictions.',
        'The tax shield (≈ D × t for permanent debt) is the main benefit of debt.',
        'Distress costs rise sharply at high leverage, especially for volatile, intangible-heavy firms.',
        'Set leverage on bad-year cash flows, not good-year ones.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'corp-finance-2',
      title: 'Payout policy: dividends, buybacks and signalling',
      level: 'Beginner',
      minutes: 14,
      hook: `What a company does with its spare cash tells investors more about management's confidence than any press release.`,
      eli5: `Your football club made extra money from a great season. It can hand every member a cash envelope (a dividend), buy back some memberships so each remaining member owns a bigger share of the club (a buyback), or keep the money to build a new pitch (reinvest). The club is worth the same total either way on the day — but members read a lot into what the club chooses, and they get upset if a promised envelope stops arriving.`,
      blocks: [
        {
          type: 'text', title: 'Three things you can do with cash',
          html: `<p>Once a company has funded every project that beats its cost of capital, the spare cash belongs to shareholders. It can:</p><ul><li><b>Pay dividends</b> — regular cash per share, or a one-off <i>special dividend</i>.</li><li><b>Buy back shares</b> — on the market or through a tender offer; fewer shares remain, so each owns more.</li><li><b>Keep it</b> — as a buffer, for acquisitions or future investment.</li></ul><p>Payout policy is the rule a company follows for choosing among these. You met dividends briefly in the <b>finance</b> track; here we look at why the choice matters.</p>`
        },
        {
          type: 'framework', name: 'Why payout policy matters', by: 'Miller & Modigliani (1961) irrelevance; Lintner (1956) smoothing; signalling theory', when: 'Setting or judging a payout policy',
          steps: [
            { label: 'Irrelevance (baseline)', desc: 'In a frictionless world, paying $1 out simply moves $1 from the company to the shareholder: the share price falls by $1 on the ex-dividend date. Value comes from investment decisions, not payout.' },
            { label: 'Taxes', desc: 'Dividends and capital gains are often taxed differently. Where gains are taxed less or later, buybacks are more tax-efficient for many holders.' },
            { label: 'Signalling', desc: 'Managers know more than investors. Raising a dividend says "we are confident earnings can support this". Cutting it says the opposite, so markets punish cuts heavily.' },
            { label: 'Agency costs of free cash', desc: 'Spare cash tempts managers into empire-building acquisitions (Jensen, 1986). Committing to payouts disciplines management.' },
            { label: 'Clienteles', desc: 'Retirees and income funds like steady dividends; growth investors prefer reinvestment or buybacks. Changing policy can churn the shareholder base.' }
          ]
        },
        {
          type: 'compare', title: 'Dividends vs buybacks', headers: ['', 'Dividends', 'Buybacks'],
          rows: [
            ['Commitment', 'Sticky — firms smooth dividends and hate cutting them', 'Flexible — can be scaled up or paused quietly'],
            ['Signal', 'Strong signal of long-term confidence in earnings', 'Can signal "we think our shares are cheap" — only if true'],
            ['Tax', 'Taxed as income for many investors', 'Often taxed later and/or at capital-gains rates; rules vary by country'],
            ['Who benefits', 'All shareholders equally', 'Sellers get cash; holders get a bigger share of the firm'],
            ['Risk', 'Cutting later causes a big price drop', 'Buying at too high a price destroys value for remaining holders; can flatter EPS']
          ]
        },
        {
          type: 'formula', name: 'Buyback maths: EPS goes up, value per share may not',
          expr: 'New EPS = (Net income − after-tax interest lost on cash) ÷ (Shares − Shares bought back)',
          explain: 'A buyback raises EPS whenever the earnings yield on the shares (E/P) is higher than the after-tax return on the cash spent. That is arithmetic, not value creation: value per share rises only if the shares are bought below their true worth.',
          example: `Net income $100m, 50m shares → EPS <b>$2.00</b>. Share price $40 (P/E 20, earnings yield 5%). The firm spends $200m of cash earning 4% pre-tax to buy 5m shares. Lost interest after 25% tax = 200 × 4% × 0.75 = $6m. New EPS = (100 − 6) ÷ 45 = <b>$2.09</b> (+4.4%). But if the market value of the firm (including the cash) was 50m × $40 = $2,000m, after the buyback it is $1,800m ÷ 45m = <b>still $40</b> per share. EPS rose; value per share did not.`
        },
        {
          type: 'case', company: 'General Electric', year: '2017–2018', title: 'When the dividend signal breaks',
          situation: `GE had been a symbol of reliable dividends for decades. By 2017 its power business was struggling, cash flow was far below expectations and its finance arm carried large legacy liabilities.`,
          decision: `In November 2017 GE halved its quarterly dividend from 24 cents to 12 cents. In late 2018 it cut it again, to just 1 cent per share.`,
          outcome: `The cuts confirmed investors\' fears about GE\'s cash generation and the shares fell heavily over this period. GE later went through a major restructuring and split into three companies (completed 2024).`,
          lesson: `A dividend is a promise. Paying out more than sustainable free cash flow buys short-term approval but makes the eventual cut — and the loss of trust — much worse. Contrast with Apple, which since 2012 has paired a modest dividend with very large, flexible buybacks.`
        },
        {
          type: 'scenario',
          prompt: `Your company has $500m of spare cash. The share price has risen 60% this year and now trades well above your internal DCF value. The CEO wants a big buyback "to support the share price". What do you advise?`,
          options: [
            { text: 'Do the buyback — it will raise EPS.', feedback: 'EPS may rise, but buying shares above intrinsic value transfers wealth from remaining shareholders to those who sell.', good: false },
            { text: 'Prefer a special dividend or hold the cash for now; buy back when shares trade below intrinsic value.', feedback: 'Right. A special dividend returns cash fairly to all holders without committing to a new regular level, and buybacks are best done when shares are cheap.', good: true },
            { text: 'Raise the regular dividend by $500m a year.', feedback: 'This is a one-off pile of cash. Turning it into a recurring commitment risks a painful cut later.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'A sound payout policy',
          items: [
            'Fund all positive-NPV investments first',
            'Keep a liquidity buffer sized for a downturn',
            'Set the regular dividend at a level free cash flow can sustain through the cycle',
            'Return the rest flexibly (buybacks or special dividends)',
            'Buy back only when shares are below your honest estimate of intrinsic value',
            'Do not link executive pay to EPS in a way that rewards buybacks by themselves'
          ]
        }
      ],
      terms: [
        { term: 'Dividend', def: 'Cash paid to shareholders per share, usually quarterly, half-yearly or yearly.' },
        { term: 'Share buyback (repurchase)', def: 'The company buys its own shares, reducing shares outstanding.' },
        { term: 'Payout ratio', def: 'Dividends (or dividends + buybacks) divided by net income.' },
        { term: 'Dividend yield', def: 'Annual dividend per share ÷ share price.' },
        { term: 'Ex-dividend date', def: 'The date from which a buyer of the share no longer receives the next dividend; the price typically drops by about the dividend.' },
        { term: 'Signalling', def: 'Using actions (like changing dividends) to convey private information about the firm\'s prospects.' },
        { term: 'Tender offer', def: 'A buyback where the company offers to buy a set number of shares from holders at a stated price.' }
      ],
      quiz: [
        {
          q: 'A share trades at $50 and pays an annual dividend of $2. What is the dividend yield?',
          options: ['2%', '25%', '4%', '5%'],
          answer: 2,
          explain: '2 ÷ 50 = 4%.'
        },
        {
          q: 'In a frictionless world, what happens to the share price when a $1 dividend is paid?',
          options: ['It falls by about $1', 'It rises by $1', 'It is unchanged', 'It doubles'],
          answer: 0,
          explain: 'Cash leaves the company and goes to shareholders; the share is worth $1 less.'
        },
        {
          q: 'Why do companies smooth dividends and avoid cutting them?',
          options: ['Accounting rules forbid cuts', 'Dividends are tax-deductible', 'Buybacks are illegal in most countries', 'Cuts send a strong negative signal about future earnings'],
          answer: 3,
          explain: 'Investors read dividend changes as management\'s view of sustainable earnings.'
        },
        {
          q: 'Net income $60m, 30m shares. The firm spends cash earning nothing to buy back 3m shares. New EPS?',
          options: ['$2.00', '$2.22', '$1.80', '$2.10'],
          answer: 1,
          explain: '60 ÷ 27 = $2.22 (up from $2.00), because no interest income was lost.'
        },
        {
          q: 'When does a buyback create value for the shareholders who do NOT sell?',
          options: ['Whenever EPS goes up', 'Whenever it is funded with debt', 'When shares are bought below their intrinsic value', 'Always, because fewer shares exist'],
          answer: 2,
          explain: 'Remaining holders gain only if the company pays less than the shares are really worth.'
        }
      ],
      challenge: {
        title: 'Dividend, buyback or keep the cash?',
        prompt: `A listed consumer company has net income of $300m, 150m shares and a share price of $30 (P/E 15). It holds $900m of cash earning 4% pre-tax; tax 25%. It needs $300m as a safety buffer. Management believes intrinsic value is about $36 per share.<br><br>(a) What is current EPS? (b) If it spends $600m on a buyback at $30, what is new EPS? (c) Compare with a $600m special dividend. (d) Recommend.`,
        hints: ['Shares bought = 600 ÷ 30.', 'Lost interest after tax = 600 × 4% × (1 − 25%).', 'Think about who gains if shares are truly worth $36.'],
        model: `<p><b>(a)</b> EPS = 300 ÷ 150 = <b>$2.00</b>.</p><p><b>(b) Buyback</b>: shares bought = 600 ÷ 30 = 20m → 130m remain. Lost after-tax interest = 600 × 4% × 0.75 = $18m. New net income = $282m. New EPS = 282 ÷ 130 = <b>$2.17</b> (+8.5%).</p><p><b>(c) Special dividend</b>: $600m ÷ 150m = <b>$4 per share</b> in cash. EPS falls slightly to 282 ÷ 150 = $1.88 because interest income is lost, but every holder is treated identically.</p><p><b>Value view</b>: if shares are truly worth $36, buying at $30 transfers about $6 × 20m = $120m of value to the shareholders who stay. If management is wrong and value is below $30, the transfer runs the other way.</p><p><b>Recommendation</b>: keep the $300m buffer and do the <b>$600m buyback</b>, ideally via a tender offer or staged programme so it can be paused if the price rises above intrinsic value. Keep the regular dividend unchanged — this is excess cash, not a new recurring level. Disclose the reasoning so the signal ("we believe our shares are undervalued") is credible.</p>`
      },
      takeaways: [
        'Payout does not create value in a frictionless world; taxes, signals and agency costs make it matter.',
        'Dividends are sticky promises; buybacks are flexible.',
        'A buyback raises EPS whenever the earnings yield exceeds the after-tax yield on cash — that alone is not value creation.',
        'Buy back only below intrinsic value; never pay a dividend you cannot sustain.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'corp-finance-3',
      title: 'M&A: synergies, premiums and accretion/dilution',
      level: 'Intermediate',
      minutes: 18,
      hook: `Most big acquisitions look brilliant in the press release — the maths shows which ones were doomed on day one.`,
      eli5: `Two lemonade stands on the same street decide to merge. They can share one fridge and one sign (cost savings), and maybe sell more by offering lemonade and cookies together (extra sales). But one owner has to pay the other extra to give up control. If the savings are smaller than that extra payment — or the two owners argue about everything — the merger makes everyone poorer.`,
      blocks: [
        {
          type: 'text', title: 'Going deeper than strategy',
          html: `<p>In the <b>strategy</b> track you met the logic of corporate strategy and the Quaker–Snapple and Disney cases; in <b>C-suite</b> you practised M&A case interviews. Here we do the deal maths that bankers and boards actually run: what premium is being paid, what synergies are needed to justify it and whether the deal raises or lowers earnings per share.</p>`
        },
        {
          type: 'framework', name: 'Why deals happen (good and bad reasons)', by: 'Synthesis of corporate finance practice', when: 'Screening any proposed acquisition',
          steps: [
            { label: 'Cost synergies', desc: 'Combine overlapping functions, stores, plants or purchasing. The most reliable synergy because management controls it.' },
            { label: 'Revenue synergies', desc: 'Cross-sell products, enter new markets, bundle. Real but much harder to achieve and often over-promised.' },
            { label: 'Capabilities and assets', desc: 'Buy technology, talent, IP or brands faster than you could build them (buy vs build).' },
            { label: 'Market power and consolidation', desc: 'Reduce competition and gain pricing power — and attract antitrust scrutiny.' },
            { label: 'Bad reasons', desc: 'Empire-building, "diversification" shareholders can do themselves, using inflated stock as currency, or chasing EPS accretion with no strategic logic. Hubris (Roll, 1986) explains many overpayments.' }
          ]
        },
        {
          type: 'formula', name: 'Does the deal create value for the buyer?',
          expr: 'Buyer NPV = PV(synergies) − Premium paid − Integration costs;   Premium = Offer price − Target standalone value',
          explain: 'The control premium (typically a meaningful percentage above the undisturbed share price) must be paid to persuade target shareholders to sell. The buyer only wins if synergies are larger. Note that the target\'s shareholders capture the premium on day one, while the buyer bears the risk of delivering synergies over years.',
          example: `Target trades at $20 × 30m shares = $600m. Offer: 30% premium → $26 a share = <b>$780m</b>; premium = <b>$180m</b>. Integration costs $40m. The buyer needs synergies with a present value above <b>$220m</b>. If after-tax cost synergies of $25m a year are capitalised at 10% (a perpetuity), PV = $250m → NPV ≈ +$30m. Thin: if synergies come in 15% lower, value is destroyed.`
        },
        {
          type: 'formula', name: 'Accretion / dilution',
          expr: 'Pro forma EPS = (Buyer NI + Target NI + after-tax synergies − after-tax cost of funding) ÷ (Buyer shares + New shares issued)',
          explain: 'Accretive = pro forma EPS above the buyer\'s standalone EPS. Quick rule for all-stock deals: if the buyer\'s P/E is higher than the P/E it pays for the target, the deal is accretive. For cash deals, compare the target\'s earnings yield at the offer price with the after-tax cost of debt (or interest forgone on cash).',
          example: `Buyer: NI $500m, 250m shares, EPS $2.00, price $40 (P/E 20). Target bought for $780m with NI $60m (offer P/E 13).<br><b>All-stock</b>: issue 780 ÷ 40 = 19.5m shares → EPS = 560 ÷ 269.5 = <b>$2.08</b> (+3.9%, accretive).<br><b>All-cash, debt at 6%, tax 25%</b>: after-tax interest = 780 × 6% × 0.75 = $35.1m → EPS = (560 − 35.1) ÷ 250 = <b>$2.10</b> (+5.0%).<br>Both are accretive <i>before any synergies</i> — yet neither tells you whether value was created. Accretion is accounting; NPV is value.`
        },
        {
          type: 'compare', title: 'Cost vs revenue synergies', headers: ['', 'Cost synergies', 'Revenue synergies'],
          rows: [
            ['Examples', 'Close duplicate head offices, merge purchasing, consolidate plants', 'Cross-selling, pricing power, new channels, bundles'],
            ['Who controls it', 'Mostly the buyer', 'Customers and competitors'],
            ['Typical reliability', 'Higher; still often delayed', 'Lower; frequently missed'],
            ['Hidden costs', 'Severance, IT integration, lost morale and talent', 'Customer churn from disruption, channel conflict'],
            ['How to value', 'Phase in over 2–3 years, net of one-off costs', 'Probability-weight heavily or exclude from the price you pay']
          ]
        },
        {
          type: 'timeline', title: 'Three famous deals',
          items: [
            { label: '2000 AOL–Time Warner', desc: 'Announced in January 2000 as an all-stock merger valued at roughly $165 billion at the peak of the dot-com boom. Promised synergies between internet distribution and media content largely failed to appear; cultures clashed.' },
            { label: '2002 The write-down', desc: 'AOL Time Warner recorded a loss of nearly $99 billion for 2002, mostly goodwill write-downs — then one of the largest annual losses in US corporate history. The companies separated in 2009.' },
            { label: '2006 Disney–Pixar', desc: 'The counter-example you met in strategy: Disney paid about $7.4 billion in stock, protected Pixar\'s culture and put its leaders in charge of Disney Animation. Capabilities, not just cost cuts, drove value.' },
            { label: '2015 Kraft–Heinz', desc: 'Heinz (backed by 3G Capital and Berkshire Hathaway) merged with Kraft, betting on aggressive cost synergies. Margins rose quickly.' },
            { label: '2019 Kraft Heinz write-down', desc: 'A write-down of roughly $15 billion on Kraft and Oscar Mayer brands, a dividend cut and an SEC inquiry. Cost cuts had not offset weakening brands and shifting consumer tastes (you met this in finance from the budgeting angle).' }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'Why so many deals disappoint',
          html: `<ul><li><b>Winner\'s curse</b>: in an auction the winner is often the bidder who most overestimated synergies.</li><li><b>Premium paid up front, synergies delivered later</b> — and only partly.</li><li><b>Integration</b>: culture, systems and talent losses (AOL–Time Warner).</li><li><b>Over-reliance on cost cuts</b> while under-investing in what customers value (Kraft Heinz).</li><li><b>Stock-for-stock at bubble prices</b> transfers value in surprising directions.</li></ul><p>Research on deal returns is mixed, but a common finding is that target shareholders capture most of the gains from announcements, while acquirers\' average returns are close to zero or negative.</p>`
        },
        {
          type: 'scenario',
          prompt: `Your bankers present a deal that is 6% EPS-accretive in year 1, all-cash funded by debt. Synergies in the model are 70% revenue synergies. The premium is 45%. What is your first question?`,
          options: [
            { text: '"Great, how quickly can we sign?"', feedback: 'Accretion with cheap debt is easy to manufacture. It says nothing about value.', good: false },
            { text: '"What is the PV of cost synergies alone, and does it cover the premium plus integration costs?"', feedback: 'Exactly. Price the deal on the synergies you control; treat revenue synergies as upside.', good: true },
            { text: '"Can we make it all-stock instead to improve accretion?"', feedback: 'Changing the currency changes the accounting, not whether you are overpaying.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Synergy', def: 'Extra value created by combining two businesses, from lower costs or higher revenues.' },
        { term: 'Control premium', def: 'The amount paid above the target\'s undisturbed market value to acquire control.' },
        { term: 'Accretion / dilution', def: 'Whether the combined company\'s EPS is higher (accretive) or lower (dilutive) than the buyer\'s standalone EPS.' },
        { term: 'Goodwill', def: 'The part of the purchase price above the fair value of identifiable net assets; written down if the deal underperforms.' },
        { term: 'Winner\'s curse', def: 'The tendency for the winning bidder in an auction to have overpaid.' },
        { term: 'Integration costs', def: 'One-off costs to combine firms: severance, systems, rebranding, advisers.' },
        { term: 'Due diligence', def: 'Investigation of a target\'s finances, legal position, operations and people before signing.' }
      ],
      quiz: [
        {
          q: 'A target trades at $40 per share. The buyer offers $52. What is the control premium?',
          options: ['12%', '23%', '52%', '30%'],
          answer: 3,
          explain: '(52 − 40) ÷ 40 = 30%.'
        },
        {
          q: 'Buyer P/E is 25. It buys a target at an offer P/E of 15 in an all-stock deal (no synergies). The deal is:',
          options: ['Accretive', 'Dilutive', 'Neutral', 'Impossible to tell'],
          answer: 0,
          explain: 'Paying a lower P/E with higher-P/E stock is accretive: the buyer receives more earnings per share issued than its own shares earn.'
        },
        {
          q: 'Which synergies are usually most reliable?',
          options: ['Cross-selling', 'Pricing power', 'Consolidating duplicate purchasing and overheads', 'Entering new countries'],
          answer: 2,
          explain: 'Cost synergies are largely under management\'s control; revenue synergies depend on customers and competitors.'
        },
        {
          q: 'Premium $150m, integration costs $30m. After-tax synergies of $15m a year forever, discounted at 10%. NPV to the buyer?',
          options: ['+$30m', '$0', '−$30m', '+$150m'],
          answer: 2,
          explain: 'PV synergies = 15 ÷ 10% = $150m. NPV = 150 − 150 − 30 = −$30m.'
        },
        {
          q: 'What mainly drove the 2002 loss of nearly $99 billion at AOL Time Warner?',
          options: ['A huge fine', 'Goodwill write-downs after the merger failed to deliver', 'Interest costs on acquisition debt', 'A fall in the US dollar'],
          answer: 1,
          explain: 'The stock-funded purchase created enormous goodwill, written down as the expected value disappeared.'
        }
      ],
      challenge: {
        title: 'Run the deal maths',
        prompt: `BrewCo (illustrative) has net income $200m, 100m shares and a share price of $30 (P/E 15). It wants to buy SnackCo: net income $40m, 20m shares, price $24 (market value $480m). BrewCo offers a 25% premium. Tax rate 25%.<br><br>(a) What is the offer price and offer P/E? (b) EPS impact if all-stock? (c) EPS impact if all-cash funded with debt at 7%? (d) Integration costs are $30m. What annual pre-tax cost synergies (valued as a perpetuity at 10%) are needed to break even? (e) Recommend.`,
        hints: ['Offer = 480 × 1.25.', 'All-stock: new shares = offer ÷ BrewCo price.', 'Break-even: PV(after-tax synergies) = premium + integration costs.'],
        model: `<p><b>(a)</b> Offer = $480m × 1.25 = <b>$600m</b> ($30 per SnackCo share). Offer P/E = 600 ÷ 40 = <b>15x</b>.</p><p><b>(b) All-stock</b>: new shares = 600 ÷ 30 = 20m. Pro forma EPS = (200 + 40) ÷ 120 = <b>$2.00</b> vs standalone $2.00 → <b>neutral</b> (offer P/E equals buyer P/E).</p><p><b>(c) All-cash</b>: after-tax interest = 600 × 7% × 0.75 = $31.5m. EPS = (240 − 31.5) ÷ 100 = <b>$2.085</b> → <b>+4.25% accretive</b> (target earnings yield 6.7% > after-tax debt cost 5.25%).</p><p><b>(d) Break-even synergies</b>: premium = 600 − 480 = $120m; plus integration $30m = <b>$150m</b> to recover. After-tax synergies S × 0.75 ÷ 10% = 150 → S × 0.75 = 15 → <b>S = $20m pre-tax a year</b>.</p><p><b>(e) Recommendation</b>: the cash deal looks better on EPS, but that only reflects cheap debt. Proceed only if diligence supports <b>clearly more than $20m a year of cost synergies</b> (e.g. a bottom-up plan of $28–30m with named owners) — otherwise lower the offer. Set a walk-away price: with $25m of credible pre-tax synergies, PV = 25 × 0.75 ÷ 10% = $187.5m, so the maximum premium is 187.5 − 30 = $157.5m, i.e. an offer up to about $637.5m. Also check leverage after adding $600m of debt.</p>`
      },
      takeaways: [
        'A deal creates value only if PV(synergies) exceeds the premium plus integration costs.',
        'Accretion/dilution is arithmetic about funding, not proof of value.',
        'Price deals on cost synergies you control; treat revenue synergies as upside.',
        'Culture, integration and overpayment explain most failures (AOL–Time Warner, Kraft Heinz).'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'corp-finance-4',
      title: 'LBOs and private equity: how the returns are made',
      level: 'Intermediate',
      minutes: 20,
      hook: `A leveraged buyout is like buying a house with a big mortgage that the house itself pays off — and then selling it for more.`,
      eli5: `Imagine buying a small rental flat for 100 coins. You pay 30 coins of your own and borrow 70. Every month the rent pays down the loan. After five years you sell the flat for 130 coins, and only 30 coins of loan are left. You get 100 coins back on your 30 — more than three times your money — even though the flat itself only rose 30%. That is a leveraged buyout: borrowed money plus a business whose cash pays the loan down.`,
      blocks: [
        {
          type: 'text', title: 'What private equity does',
          html: `<p>In the <b>investment</b> track you met private equity as one type of capital. Here you build the engine. A <b>private equity (PE) fund</b> raises money from investors (pension funds, endowments, sovereign funds) and buys whole companies, usually funding a large share of the price with debt that sits on the <i>acquired company\'s</i> balance sheet. This is a <b>leveraged buyout (LBO)</b>.</p><p>Good LBO candidates have <b>stable, predictable cash flows</b>, modest capital needs, a defensible market position, room for operational improvement and a plausible exit (sale to a strategic buyer, another PE fund or an IPO).</p>`
        },
        {
          type: 'compare', title: 'Sources & uses (illustrative LBO, $m)', headers: ['Uses', '$m', 'Sources', '$m'],
          rows: [
            ['Purchase enterprise value (8.0x EBITDA of $100m)', '800', 'Senior and other debt (5.0x EBITDA)', '500'],
            ['Fees and expenses', '20', 'Sponsor equity', '320'],
            ['<b>Total uses</b>', '<b>820</b>', '<b>Total sources</b>', '<b>820</b>']
          ]
        },
        {
          type: 'framework', name: 'The three engines of LBO returns', by: 'Standard PE value-creation bridge', when: 'Explaining or pressure-testing a PE return',
          steps: [
            { label: '1. EBITDA growth', desc: 'Grow revenue and margins: pricing, cost programmes, add-on acquisitions, better management. Value = EBITDA increase × entry multiple.' },
            { label: '2. Debt paydown (deleveraging)', desc: 'Free cash flow repays debt, so more of the enterprise value belongs to equity at exit.' },
            { label: '3. Multiple expansion', desc: 'Selling at a higher EV/EBITDA multiple than you paid. Pleasant, but largely market-driven — prudent models assume exit multiple = entry multiple.' },
            { label: 'Minus: fees and leakage', desc: 'Transaction fees, monitoring fees and costs reduce what equity receives.' }
          ]
        },
        {
          type: 'formula', name: 'MOIC and IRR',
          expr: 'MOIC = Equity value at exit ÷ Equity invested;   IRR (single in, single out) = MOIC^(1/years) − 1',
          explain: 'MOIC (multiple on invested capital) tells you how many times your money you got back; IRR tells you how fast. Rules of thumb over 5 years: 2.0x ≈ 15% IRR; 3.0x ≈ 25% IRR. A quick deal at a modest multiple can have a high IRR but small absolute profit.',
          example: `Continuing the deal above. Over 5 years EBITDA grows from $100m to <b>$140m</b> and free cash flow repays $250m of debt, leaving <b>$250m</b>. Exit at <b>9.0x</b>: EV = 9 × 140 = <b>$1,260m</b>. Equity at exit = 1,260 − 250 = <b>$1,010m</b>.<br>MOIC = 1,010 ÷ 320 = <b>3.16x</b>. IRR = 3.156^(1/5) − 1 ≈ <b>25.8%</b>.<br><b>Bridge of the $690m gain</b>: EBITDA growth 40 × 8.0 = $320m + multiple expansion 1.0x × 140 = $140m + debt paydown $250m − fees $20m = <b>$690m</b>. Note how much relied on the higher exit multiple: at an 8.0x exit, equity = 1,120 − 250 = $870m → 2.72x, about 22% IRR.`
        },
        {
          type: 'interactive', widget: 'npv', title: 'Check the IRR yourself',
          note: 'Enter −320 in year 0, then 0, 0, 0, 0 and 1,010 in year 5. The IRR should be about 25.8%. Then change the exit to 870 and watch IRR fall to about 22%.'
        },
        {
          type: 'text', title: 'PE fund economics in one paragraph',
          html: `<p>Investors (<b>limited partners, LPs</b>) commit capital to a fund run by the PE firm (<b>general partner, GP</b>), typically for about 10 years. The traditional terms are "<b>2 and 20</b>": an annual management fee of around 2% of committed capital (often lower for large funds and stepping down later), plus <b>carried interest</b> of 20% of profits, usually only after LPs have received their money back plus a <b>hurdle</b> (preferred return) of around 8% a year.</p><p><i>Illustrative, simplified (ignoring fees)</i>: a $1bn fund returns $2bn. Profit = $1bn; carry = 20% = $200m to the GP; LPs receive $1.8bn = 1.8x net. Early on, fees and unrealised investments make returns look negative — the <b>J-curve</b>.</p>`
        },
        {
          type: 'case', company: 'Blackstone & Hilton', year: '2007–2018', title: 'A buyout that nearly failed — then made a fortune',
          situation: `In 2007, at the peak of the credit boom, Blackstone agreed to buy Hilton Hotels for about $26 billion, funded heavily with debt.`,
          decision: `The financial crisis then hit travel hard and the value of the investment fell well below cost. Rather than walking away, Blackstone restructured the debt in 2010 (buying some back at a discount and injecting more equity), invested in management and expanded the asset-light franchising and management business.`,
          outcome: `Hilton returned to the stock market in 2013, and Blackstone completed its exit in 2018. The deal has been widely reported as earning Blackstone around $14 billion of profit — among the most profitable buyouts ever.`,
          lesson: `Leverage amplifies both outcomes. Holding power (patient equity, renegotiable debt) and real operational improvement turned a badly timed entry into a success. Many other 2006–07 buyouts did not recover.`
        },
        {
          type: 'checklist', title: 'Screening an LBO candidate',
          items: [
            'Stable, recurring cash flows that can service debt in a downturn',
            'Low capex and working-capital needs (cash available for debt paydown)',
            'Clear operational improvement plan with named levers',
            'Entry multiple and leverage tested against exit at the same (or lower) multiple',
            'Covenant headroom under a downside case',
            'At least two credible exit routes'
          ]
        }
      ],
      terms: [
        { term: 'Leveraged buyout (LBO)', def: 'Acquisition of a company funded largely with debt secured on the target\'s own assets and cash flows.' },
        { term: 'Sponsor', def: 'The private equity firm that organises an LBO and provides the equity.' },
        { term: 'Sources & uses', def: 'A table showing where deal money comes from (debt, equity) and what it pays for (price, fees); the two must balance.' },
        { term: 'MOIC', def: 'Multiple on invested capital: exit equity value ÷ equity invested.' },
        { term: 'IRR', def: 'Internal rate of return: the annualised return that makes the NPV of all cash flows zero.' },
        { term: 'Carried interest', def: 'The GP\'s share of fund profits (often 20%), usually paid after LPs receive capital plus a hurdle.' },
        { term: 'Hurdle rate (preferred return)', def: 'The minimum annual return LPs must receive before the GP earns carry, commonly about 8%.' },
        { term: 'Multiple expansion', def: 'Exiting at a higher valuation multiple than the entry multiple.' }
      ],
      quiz: [
        {
          q: 'A sponsor invests $200m and receives $500m after 5 years. What is the MOIC?',
          options: ['2.0x', '3.0x', '2.5x', '1.5x'],
          answer: 2,
          explain: '500 ÷ 200 = 2.5x.'
        },
        {
          q: 'Roughly what IRR does a 2.0x MOIC over 5 years correspond to?',
          options: ['About 15%', 'About 20%', 'About 10%', 'About 40%'],
          answer: 0,
          explain: '2^(1/5) − 1 ≈ 14.9%.'
        },
        {
          q: 'Which is the LEAST controllable source of LBO returns?',
          options: ['Cost reduction', 'Debt paydown from free cash flow', 'Add-on acquisitions', 'Multiple expansion'],
          answer: 3,
          explain: 'Exit multiples depend largely on market conditions at exit.'
        },
        {
          q: 'Entry EV $600m (6x EBITDA of $100m), debt $360m. Exit after 5 years at 6x EBITDA of $120m, debt reduced to $160m. Equity value at exit?',
          options: ['$720m', '$560m', '$480m', '$360m'],
          answer: 1,
          explain: 'Exit EV = 6 × 120 = 720; equity = 720 − 160 = $560m (vs $240m invested = 2.33x).'
        },
        {
          q: 'A fund returns $3bn on $1.5bn invested (ignore fees and hurdle). With 20% carry, how much do LPs receive?',
          options: ['$3.0bn', '$2.4bn', '$2.7bn', '$2.1bn'],
          answer: 2,
          explain: 'Profit = $1.5bn; carry = $0.3bn; LPs get 3.0 − 0.3 = $2.7bn.'
        }
      ],
      challenge: {
        title: 'Build a mini LBO',
        prompt: `A sponsor is looking at a business-services company with EBITDA of $50m. Ignore fees.<br><br>• Entry at 10.0x EBITDA, funded with 6.0x debt and the rest equity.<br>• Base case: EBITDA reaches $70m in year 5; cumulative free cash flow repays $150m of debt.<br>• Exit at 10.0x.<br><br>(a) Sources & uses. (b) Exit equity, MOIC and IRR. (c) Attribute the gain. (d) What if exit is at 8.0x? (e) Would you invest if the fund targets 20%+ IRR?`,
        hints: ['Entry EV = 10 × 50; debt = 6 × 50.', 'IRR = MOIC^(1/5) − 1.', 'Value-creation bridge: EBITDA growth × entry multiple + debt paydown + multiple change × exit EBITDA.'],
        model: `<p><b>(a) Sources & uses</b>: Uses = EV $500m. Sources = debt $300m + equity <b>$200m</b>.</p><p><b>(b) Base case</b>: exit EV = 10 × 70 = $700m; remaining debt = 300 − 150 = $150m; equity = <b>$550m</b>. MOIC = 550 ÷ 200 = <b>2.75x</b>; IRR = 2.75^0.2 − 1 ≈ <b>22.4%</b>.</p><p><b>(c) Bridge of the $350m gain</b>: EBITDA growth 20 × 10 = $200m; debt paydown $150m; multiple expansion $0. Total $350m ✓. Returns rest on operations and cash generation, not the market — a healthy profile.</p><p><b>(d) Exit at 8.0x</b>: EV = 8 × 70 = $560m; equity = 560 − 150 = $410m; MOIC = <b>2.05x</b>; IRR ≈ <b>15.4%</b>. The two-turn multiple contraction wipes out $140m (2 × 70) of equity value.</p><p><b>(e) Recommendation</b>: invest, but conditionally. The base case clears 20% without needing multiple expansion; the downside still returns capital at about 2x. Before signing: (1) diligence the path from $50m to $70m EBITDA (a 7% CAGR — check it is mostly within management control), (2) test whether free cash flow can really repay $150m (about $30m a year) after interest, and (3) ensure covenants have headroom if EBITDA stalls. Consider slightly less leverage if the business is more cyclical than it looks.</p>`
      },
      takeaways: [
        'An LBO uses the target\'s own cash flows to repay acquisition debt.',
        'Returns come from EBITDA growth, debt paydown and (less reliably) multiple expansion.',
        'Always show MOIC and IRR together; 2x in 5 years ≈ 15%, 3x ≈ 25%.',
        'PE funds earn fees plus carry; LP net returns are meaningfully lower than gross deal returns.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'corp-finance-5',
      title: 'Valuation for deals: DCF, the equity bridge and the football field',
      level: 'Advanced',
      minutes: 20,
      hook: `In a boardroom, no one asks "what is it worth?" — they ask "what range is defensible, and why?"`,
      eli5: `When you sell a used bike you check three things: what similar bikes are selling for online today, what people paid for similar bikes recently, and how much use you will get out of it over the years. Each gives a slightly different answer. You line them up, see where they overlap, and that is your fair price range. Deal valuation is exactly this, done carefully with spreadsheets.`,
      blocks: [
        {
          type: 'text', title: 'Beyond the basics',
          html: `<p>In <b>investment</b> you met DCF, comparables and the VC method. In deals you need more rigour: a full DCF with a carefully built terminal value, a precise bridge from enterprise value to the price per share, and a <b>football field</b> that shows every method side by side so a board can see the range — and where the offer sits in it.</p>`
        },
        {
          type: 'framework', name: 'Building a deal-grade DCF', by: 'Standard corporate finance practice', when: 'Valuing a target or defending a fairness opinion',
          steps: [
            { label: 'Unlevered free cash flow', desc: 'FCF = EBIT × (1 − tax) + depreciation & amortisation − capex − increase in working capital. "Unlevered" means before interest, so it belongs to all capital providers.' },
            { label: 'Explicit forecast', desc: 'Forecast 5–10 years until the business reaches a steady state. Tie revenue to drivers (volume, price, share) and margins to a clear story.' },
            { label: 'Discount at WACC', desc: 'Use target capital structure weights and a beta that reflects the target\'s business risk, not the buyer\'s.' },
            { label: 'Terminal value — two ways', desc: 'Gordon growth: TV = FCF(n+1) ÷ (WACC − g), with g no higher than long-run nominal GDP. Exit multiple: TV = EBITDA(n) × peer multiple. Cross-check one against the other.' },
            { label: 'Sensitivity', desc: 'Show a grid of WACC vs g (or exit multiple). If the conclusion flips within plausible inputs, say so.' }
          ]
        },
        {
          type: 'formula', name: 'Full DCF worked example (illustrative, $m)',
          expr: 'EV = Σ FCFt ÷ (1 + WACC)^t + TV ÷ (1 + WACC)^n',
          explain: 'FCF years 1–5: 100, 110, 120, 130, 140. WACC 10%, terminal growth 3%. Discount factors: 0.9091, 0.8264, 0.7513, 0.6830, 0.6209.',
          example: `PV of FCF = 90.9 + 90.9 + 90.2 + 88.8 + 86.9 = <b>447.7</b>.<br>TV at year 5 = 140 × 1.03 ÷ (0.10 − 0.03) = 144.2 ÷ 0.07 = <b>2,060</b>. PV of TV = 2,060 × 0.6209 = <b>1,279.1</b>.<br>EV = 447.7 + 1,279.1 = <b>≈ 1,727</b>. The terminal value is <b>74%</b> of the total — typical, and why it deserves the most scrutiny.<br>Cross-check: if year-5 EBITDA is 200, the TV implies 2,060 ÷ 200 = 10.3x EBITDA. If peers trade at 7–8x, the growth assumption is probably too rich.`
        },
        {
          type: 'compare', title: 'Sensitivity of EV ($m) to WACC and terminal growth', headers: ['WACC \\ g', '2%', '3%', '4%'],
          rows: [
            ['9%', '1,786', '2,022', '2,353'],
            ['10%', '1,556', '<b>1,727</b>', '1,954'],
            ['11%', '1,377', '1,506', '1,670']
          ]
        },
        {
          type: 'formula', name: 'From enterprise value to price per share',
          expr: 'Equity value = EV − Debt − Preferred shares − Minority (non-controlling) interests − Debt-like items + Cash + Non-operating assets',
          explain: 'EV values the operating business for all claimants. To reach what shareholders own, subtract every claim ranking ahead of them and add assets not captured in FCF. Debt-like items include leases (depending on accounting), unfunded pensions and sometimes deferred consideration. Then divide by diluted shares (including in-the-money options).',
          example: `EV 1,727 − debt 400 + cash 100 − minority interests 27 = equity value <b>1,400</b>. Diluted shares 50m → <b>$28.00 per share</b>. Forget the minority interest and you overstate value by about $0.54 a share — enough to mislead a board.`
        },
        {
          type: 'compare', title: 'Football field, same company ($ per share; year-1 EBITDA $170m, net bridge −$327m, 50m shares)', headers: ['Method', 'Range', 'What drives it', 'Caveat'],
          rows: [
            ['52-week trading range', '$19 – $26', 'Market\'s recent view', 'No control premium; can reflect market moods'],
            ['Trading comparables (EV/EBITDA 7–9x)', '$17 – $24', 'How peers are priced today', 'Peers differ in growth, margins and risk'],
            ['Precedent transactions (9–11x)', '$24 – $31', 'Prices paid for control in past deals', 'Includes premiums and old market conditions'],
            ['DCF (WACC 9–11%, g 2–4%)', '$21 – $41', 'Intrinsic cash flows (EV 1,377 – 2,353)', 'Very sensitive to TV inputs'],
            ['LBO analysis (20–25% IRR)', '$20 – $24', 'What a financial buyer could pay', 'Acts as a floor for strategic bids'],
            ['<b>Proposed offer</b>', '<b>$30</b>', 'Top of precedents, inside the DCF range, above trading', 'Board judges whether it is fair']
          ]
        },
        {
          type: 'case', company: 'HP & Autonomy', year: '2011–2012', title: 'When the valuation inputs are wrong',
          situation: `In 2011 Hewlett-Packard agreed to buy UK software company Autonomy for about $11 billion, a large premium to its market price, as part of a pivot toward software.`,
          decision: `HP\'s valuation relied heavily on Autonomy\'s reported revenue growth and margins. Some observers questioned the price at the time.`,
          outcome: `About a year later HP took an $8.8 billion write-down, attributing more than $5 billion of it to alleged accounting improprieties at Autonomy. Years of litigation followed in the UK and US; former Autonomy executives disputed the allegations, and the cases produced findings and verdicts going in different directions.`,
          lesson: `A DCF is only as good as its inputs. Quality-of-earnings diligence — testing whether revenue is real, recurring and correctly recognised — matters as much as the model. When an offer sits far above every other method on the football field, ask why.`
        },
        {
          type: 'interactive', widget: 'valuation', title: 'Multiples sanity check',
          note: 'Enter EBITDA of 200 and try multiples of 7x, 9x and 10.3x. Compare each with the DCF EV of about 1,727.'
        },
        {
          type: 'checklist', title: 'Before you present a valuation to a board',
          items: [
            'Terminal value share of EV stated, and implied exit multiple cross-checked',
            'Terminal growth at or below long-run nominal GDP',
            'Every EV-to-equity bridge item listed (debt, leases, pensions, minorities, cash)',
            'Diluted share count used',
            'Comps selected on business similarity, not just sector label',
            'Precedents adjusted for market conditions at the time',
            'Football field shows where the offer sits — and why'
          ]
        }
      ],
      terms: [
        { term: 'Unlevered free cash flow', def: 'Cash generated by operations after tax, capex and working capital, before any payments to lenders or shareholders.' },
        { term: 'Terminal value', def: 'The value of all cash flows beyond the explicit forecast, by Gordon growth or an exit multiple.' },
        { term: 'EV-to-equity bridge', def: 'The adjustments (debt, cash, minorities, debt-like items) that turn enterprise value into equity value.' },
        { term: 'Minority (non-controlling) interest', def: 'The part of a consolidated subsidiary owned by outside shareholders; a claim on EV that the parent\'s shareholders do not own.' },
        { term: 'Trading comparables', def: 'Valuation multiples of similar listed companies today.' },
        { term: 'Precedent transactions', def: 'Multiples paid in past acquisitions of similar companies, including control premiums.' },
        { term: 'Football field', def: 'A chart of value ranges from different methods shown side by side.' },
        { term: 'Fairness opinion', def: 'An adviser\'s opinion to a board on whether a deal price is fair to shareholders from a financial point of view.' }
      ],
      quiz: [
        {
          q: 'Final-year FCF is $50m, growth 2%, WACC 9%. What is the Gordon-growth terminal value at the end of that year?',
          options: ['$556m', '$714m', '$729m', '$625m'],
          answer: 2,
          explain: 'TV = 50 × 1.02 ÷ (0.09 − 0.02) = 51 ÷ 0.07 ≈ $729m.'
        },
        {
          q: 'EV $900m, debt $300m, cash $50m, minority interests $20m. Equity value?',
          options: ['$630m', '$570m', '$650m', '$600m'],
          answer: 0,
          explain: '900 − 300 + 50 − 20 = $630m.'
        },
        {
          q: 'Why do precedent transactions usually give higher values than trading comps?',
          options: ['They use revenue, not EBITDA', 'They include a control premium', 'They ignore debt', 'They are always more recent'],
          answer: 1,
          explain: 'Acquirers pay above market prices to gain control.'
        },
        {
          q: 'In the DCF example, the terminal value is 74% of EV. What is the best response?',
          options: ['Shorten the forecast to 3 years', 'Ignore it — this is unusual', 'Remove the terminal value', 'Cross-check the implied exit multiple and run sensitivities'],
          answer: 3,
          explain: 'A large TV share is normal; it must be tested against market multiples and with sensitivity tables.'
        },
        {
          q: 'In a football field, what role does LBO analysis often play?',
          options: ['It sets the maximum any buyer will pay', 'It indicates a floor — what a financial buyer could pay', 'It replaces the DCF', 'It measures the control premium'],
          answer: 1,
          explain: 'It shows what a PE buyer could afford at its target IRR; strategic buyers with synergies can usually pay more.'
        }
      ],
      challenge: {
        title: 'Is $30 a fair offer?',
        prompt: `You advise the board of a listed target. The bidder offers $30 per share. Your DCF gives EV of $1,727m (WACC 10%, g 3%). Debt $400m, cash $100m, minority interests $27m, unfunded pension $60m (not yet included). Diluted shares 50m. Peers trade at 7–9x EBITDA; recent deals were done at 9–11x. Year-1 EBITDA is $170m.<br><br>(a) Recompute DCF value per share including the pension. (b) Implied value per share from comps and precedents on year-1 EBITDA. (c) Is $30 fair? What would you tell the board?`,
        hints: ['Treat the unfunded pension as debt-like.', 'Equity = EV − debt + cash − minorities − pension; divide by 50m.', 'Apply the same bridge to multiples-based EVs.'],
        model: `<p><b>(a) DCF</b>: equity = 1,727 − 400 + 100 − 27 − 60 = <b>$1,340m</b> → <b>$26.80 per share</b> (vs $28.00 before the pension).</p><p><b>(b) Multiples</b> (bridge items net = −400 + 100 − 27 − 60 = −387):</p><table><thead><tr><th>Method</th><th>EV</th><th>Equity</th><th>Per share</th></tr></thead><tbody><tr><td>Comps 7x</td><td>1,190</td><td>803</td><td>$16.06</td></tr><tr><td>Comps 9x</td><td>1,530</td><td>1,143</td><td>$22.86</td></tr><tr><td>Precedents 9x</td><td>1,530</td><td>1,143</td><td>$22.86</td></tr><tr><td>Precedents 11x</td><td>1,870</td><td>1,483</td><td>$29.66</td></tr></tbody></table><p><b>(c) Judgement</b>: $30 is above the comps range ($16–23), at the very top of precedents ($23–30) and about 12% above the base-case DCF ($26.80). The DCF\'s sensitivity range is wide, so the offer is not above every plausible intrinsic value, but it is a full price relative to all market evidence.</p><p><b>Advice to the board</b>: the offer appears <b>fair</b> and likely attractive. Before recommending, (1) check whether a higher bid is realistic (strategic buyers with large synergies), (2) confirm the pension and any other debt-like items with actuaries, and (3) test the DCF\'s growth assumptions — the implied exit multiple of about 10x sits above peers. A reasonable stance: recommend acceptance, while allowing a market check for superior offers.</p>`
      },
      takeaways: [
        'A deal DCF needs a defensible terminal value, cross-checked with an exit multiple.',
        'The EV-to-equity bridge must capture every claim: debt, leases, pensions, minorities.',
        'Comps show today\'s market price; precedents include control premiums; LBO analysis gives a floor.',
        'The football field turns many methods into one board-ready picture of the range.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'corp-finance-6',
      title: 'Financial risk management: hedging and Value at Risk',
      level: 'Advanced',
      minutes: 17,
      hook: `Many good businesses have been sunk not by bad products but by an interest rate, a currency or an oil price they forgot to manage.`,
      eli5: `Imagine you are going on holiday abroad in three months and you are worried the foreign money will get more expensive. You could agree today with a shop to buy your holiday money at today\'s price in three months (a forward). Or you could pay a small fee for the right, but not the duty, to buy at today\'s price if it rises (an option). Either way you sleep better. Companies do the same with interest rates, currencies and fuel.`,
      blocks: [
        {
          type: 'text', title: 'Why hedge at all?',
          html: `<p>In the <b>legal</b> track you built a risk register for operational risks. Here we tackle <b>financial</b> risks: movements in interest rates, exchange rates and commodity prices that can swing profits and cash regardless of how well you run the business.</p><p>In a perfect MM world, hedging would not add value — shareholders could diversify themselves. In reality it helps because it <b>reduces the chance of financial distress</b>, keeps cash available for good investments in bad times, makes planning and pricing easier and can lower borrowing costs. The goal is not to bet on markets but to <b>remove risks you are not paid to take</b>.</p>`
        },
        {
          type: 'compare', title: 'The three big financial risks', headers: ['Risk', 'Who is exposed', 'Typical hedge'],
          rows: [
            ['Interest-rate risk', 'Borrowers with floating-rate debt; holders of fixed-rate bonds; banks', 'Interest-rate swaps (pay fixed, receive floating); caps'],
            ['FX (currency) risk', 'Exporters, importers, firms with foreign subsidiaries or foreign-currency debt', 'Forwards, currency options, natural hedges (costs in the same currency as revenues)'],
            ['Commodity risk', 'Airlines (fuel), food makers (wheat, cocoa), manufacturers (metals), energy users', 'Futures, swaps, options, fixed-price supply contracts']
          ]
        },
        {
          type: 'framework', name: 'The hedging toolkit (conceptual)', by: 'Standard derivatives practice', when: 'Choosing an instrument',
          steps: [
            { label: 'Forward', desc: 'A private agreement to buy or sell an amount at a fixed price on a future date. Locks in certainty — you lose upside as well as downside. Usually no upfront cost.' },
            { label: 'Future', desc: 'Like a forward but standardised and exchange-traded, with daily margin payments. Liquid, but margin calls can strain cash.' },
            { label: 'Option', desc: 'The right, not the obligation, to buy (call) or sell (put) at a strike price. Protects the downside and keeps the upside — for an upfront premium, like insurance.' },
            { label: 'Swap', desc: 'An exchange of cash-flow streams, e.g. paying a fixed interest rate and receiving a floating one. Turns floating debt into fixed (or the reverse) without refinancing.' },
            { label: 'Natural hedge', desc: 'Matching costs and revenues in the same currency, or borrowing in the currency you earn. Often the cheapest hedge of all.' }
          ]
        },
        {
          type: 'formula', name: 'FX hedge worked example (illustrative)',
          expr: 'Hedged proceeds = Foreign amount × Forward rate;   Option floor = Amount × Strike − Premium',
          explain: 'An Indian IT exporter will receive $10m in 3 months. Spot is ₹84/$; the 3-month forward is ₹84.60/$. A USD put option (right to sell dollars at ₹84) costs ₹0.80 per dollar.',
          example: `<b>Forward</b>: locks in 10m × 84.60 = <b>₹846m</b> whatever happens.<br><b>Unhedged</b>: if the rupee strengthens to ₹82/$, proceeds = ₹820m (₹26m worse than the forward); if it weakens to ₹87/$, ₹870m.<br><b>Option</b>: premium = 10m × 0.80 = ₹8m. Worst case = 840 − 8 = <b>₹832m</b>; at ₹87 the exporter lets the option lapse and receives 870 − 8 = <b>₹862m</b>.<br>Forward = certainty; option = insurance with upside, at a cost.`
        },
        {
          type: 'formula', name: 'Value at Risk (VaR) intuition',
          expr: 'Parametric VaR ≈ Position × Volatility (per period) × z-score;   multi-day VaR ≈ 1-day VaR × √days',
          explain: 'VaR answers: "On a normal day, what is the most we expect to lose with X% confidence?" At 95% one-tailed, z ≈ 1.645; at 99%, z ≈ 2.33. The square-root-of-time rule assumes independent days.',
          example: `A $10m portfolio with daily volatility of 1.5%: 1-day 95% VaR = 10m × 1.5% × 1.645 ≈ <b>$247,000</b>. On about 1 day in 20 you should expect to lose more than this. 10-day VaR ≈ 247,000 × √10 ≈ <b>$780,000</b>.<br><b>Limit</b>: VaR says nothing about <i>how much</i> you lose on the bad days beyond the threshold. Market returns have fat tails, and correlations jump in a crisis — as risk managers learned in 1998 (LTCM) and 2008. Pair VaR with stress tests and Expected Shortfall (the average loss beyond VaR).`
        },
        {
          type: 'case', company: 'Southwest Airlines', year: '1999–2009', title: 'The hedge that worked — until it did not',
          situation: `Fuel is one of an airline\'s biggest costs. In the late 1990s and early 2000s Southwest built an unusually large fuel-hedging programme, using options and other contracts years in advance.`,
          decision: `As oil prices rose sharply through the mid-2000s, Southwest kept a high proportion of its fuel hedged at prices well below market.`,
          outcome: `The hedges saved the airline very large sums during the oil spike and helped it stay profitable while many rivals struggled. When oil prices collapsed in late 2008, however, the value of its hedges fell and Southwest reported significant hedge-related losses and reduced its hedge positions.`,
          lesson: `Hedging reduces risk; it does not guarantee gains. A hedge looks brilliant when prices move one way and costly when they move the other. Judge a hedging programme by whether it stabilised the business, not by its profit in a single year.`
        },
        {
          type: 'scenario',
          prompt: `Your treasurer has hedged 100% of next year\'s expected foreign revenue with forwards — and suggests hedging 150% "because the rupee is sure to strengthen". What do you do?`,
          options: [
            { text: 'Approve — the treasurer is the expert.', feedback: 'Hedging more than your exposure is speculation. If the view is wrong, the extra 50% is a pure loss.', good: false },
            { text: 'Reject; set a policy of hedging a rolling 50–80% of forecast exposure, with board-approved limits.', feedback: 'Right. Forecast exposures are uncertain; layered partial hedges reduce risk without creating new bets.', good: true },
            { text: 'Cancel all hedges to keep the upside.', feedback: 'That swaps a managed risk for an unmanaged one; a big currency move could hit margins and covenants.', good: false }
          ]
        },
        {
          type: 'checklist', title: 'A sound hedging policy',
          items: [
            'Map exposures: amounts, currencies, timing, and natural offsets',
            'State the objective (protect margin, cash flow or covenants) — not "make money"',
            'Set hedge ratios and tenors (e.g. 75% of next 12 months, 50% of months 13–24)',
            'Approve instruments and counterparties; forbid speculation',
            'Track hedge effectiveness and accounting treatment',
            'Stress-test liquidity for margin calls and collateral'
          ]
        }
      ],
      terms: [
        { term: 'Hedging', def: 'Taking a position that offsets an existing risk, reducing the variability of outcomes.' },
        { term: 'Forward contract', def: 'An agreement to buy or sell at a fixed price on a future date.' },
        { term: 'Option', def: 'The right, but not the obligation, to buy (call) or sell (put) at a set strike price, for a premium.' },
        { term: 'Interest-rate swap', def: 'An agreement to exchange fixed-rate for floating-rate interest payments on a notional amount.' },
        { term: 'Natural hedge', def: 'Reducing risk by matching revenues and costs (or assets and debts) in the same currency or commodity.' },
        { term: 'Value at Risk (VaR)', def: 'The loss that should not be exceeded over a period at a given confidence level under normal conditions.' },
        { term: 'Expected Shortfall', def: 'The average loss on the days when losses exceed VaR; captures tail risk better.' }
      ],
      quiz: [
        {
          q: 'A company has a $100m floating-rate loan at benchmark + 2%. It enters a swap paying fixed 4% and receiving the benchmark. What is its all-in fixed rate?',
          options: ['4%', '2%', '8%', '6%'],
          answer: 3,
          explain: 'It pays benchmark + 2% to the bank, receives benchmark from the swap and pays 4% fixed: net 4% + 2% = 6%.'
        },
        {
          q: 'An importer must pay €5m in 6 months. Which hedge removes the risk of the euro rising while keeping the benefit if it falls?',
          options: ['Buy a euro call option', 'Sell euros forward', 'Buy a euro put option', 'Do nothing'],
          answer: 0,
          explain: 'A call gives the right to buy euros at the strike; if the euro falls, let it lapse and buy cheaper.'
        },
        {
          q: 'Portfolio $20m, daily volatility 1%, 95% one-tailed z = 1.645. One-day VaR?',
          options: ['$200,000', '$329,000', '$466,000', '$164,500'],
          answer: 1,
          explain: '20m × 1% × 1.645 = $329,000.'
        },
        {
          q: 'What is the biggest weakness of VaR?',
          options: ['It is hard to calculate', 'It ignores the size of losses beyond the threshold', 'It only works for currencies', 'Regulators forbid it'],
          answer: 1,
          explain: 'VaR is a threshold; it says nothing about how bad the tail can get.'
        },
        {
          q: 'Why can hedging add value even though shareholders could diversify themselves?',
          options: ['It always earns a profit', 'It removes the need for equity', 'It lowers the chance and cost of financial distress', 'It increases revenue'],
          answer: 2,
          explain: 'Frictions such as distress costs and under-investment make stable cash flows valuable to the firm.'
        }
      ],
      challenge: {
        title: 'Hedge the jet fuel bill',
        prompt: `A regional airline (illustrative) will buy 100 million litres of jet fuel next year. The current forward price is $0.80 per litre. Its operating profit is $60m at that price, and its loan covenants require operating profit above $30m. A call option capping the price at $0.85 costs $0.03 per litre.<br><br>(a) What fuel price would breach the covenant if unhedged? (b) What is the profit if fuel rises to $1.20 under: no hedge, 100% forward, 100% call option? (c) And if fuel falls to $0.60? (d) Recommend a policy.`,
        hints: ['Each $0.01 per litre = $1m of profit.', 'Option cost = 100m × 0.03 = $3m; maximum effective price = 0.85 + 0.03.', 'Think about a partial hedge.'],
        model: `<p><b>(a)</b> Each $0.01 = $1m. The covenant breaks when profit falls by more than $30m, i.e. fuel above <b>$1.10/litre</b> (0.80 + 0.30).</p><table><thead><tr><th>Fuel price</th><th>No hedge</th><th>100% forward at $0.80</th><th>100% call (strike $0.85, cost $3m)</th></tr></thead><tbody><tr><td>$1.20</td><td>60 − 40 = <b>$20m</b> (breach)</td><td><b>$60m</b></td><td>60 − 5 − 3 = <b>$52m</b></td></tr><tr><td>$0.60</td><td>60 + 20 = <b>$80m</b></td><td><b>$60m</b></td><td>60 + 20 − 3 = <b>$77m</b></td></tr></tbody></table><p><b>Reading it</b>: the forward gives certainty but forgoes the $20m upside; the option costs $3m but protects against breach and keeps most of the upside. Unhedged, a plausible price spike breaches covenants.</p><p><b>(d) Recommendation</b>: a layered programme — e.g. hedge about 70% of next year\'s volume (half with forwards for low cost, half with calls to keep upside) and a smaller share of the following year, rolling quarterly. With 70% hedged at $0.80–0.88, even fuel at $1.30 leaves profit well above the $30m covenant. The board should approve limits and forbid hedging above forecast volume.</p>`
      },
      takeaways: [
        'Hedge to remove risks you are not paid to take, not to bet on markets.',
        'Forwards and swaps give certainty; options give insurance with upside, for a premium.',
        'VaR is a useful threshold but blind to tail size — always add stress tests.',
        'Judge hedging by business stability, not by the hedge\'s profit in a single year.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'corp-finance-7',
      title: 'Restructuring and distress: covenants, Chapter 11 and India\'s IBC',
      level: 'Advanced',
      minutes: 19,
      hook: `Companies rarely die from losses alone — they die when the cash runs out before the creditors agree on a plan.`,
      eli5: `Imagine a group of friends lent money to someone who opened a café that is now struggling. If each friend rushes to grab the coffee machine, the chairs and the till, the café closes and everyone gets a little. If they all agree to pause, keep the café open and accept smaller repayments — or a share of the café instead — they may each get back far more. Restructuring is that organised pause, with a judge or a rulebook making sure everyone is treated fairly.`,
      blocks: [
        {
          type: 'text', title: 'How distress unfolds',
          html: `<p>Distress usually follows a path: <b>weaker earnings</b> → <b>tighter covenants</b> → <b>a liquidity crunch</b> (cash runs short as suppliers demand faster payment and credit lines are cut) → <b>default</b> → negotiation or a formal process. The earlier management acts, the more options remain.</p><p>This lesson builds on capital structure (lesson 1) and LBOs (lesson 4): high leverage leaves little room when things go wrong.</p>`
        },
        {
          type: 'formula', name: 'Covenant headroom',
          expr: 'Leverage = Net debt ÷ EBITDA;   EBITDA headroom = 1 − (Net debt ÷ Covenant max) ÷ Current EBITDA',
          explain: 'Covenants are promises in loan agreements. <b>Maintenance covenants</b> (tested regularly, e.g. quarterly) are common in bank loans; <b>incurrence covenants</b> (tested only when you take an action such as borrowing more) are common in high-yield bonds. "Covenant-lite" loans have fewer maintenance tests, which can delay — but not prevent — a reckoning.',
          example: `Net debt $400m; EBITDA $120m → leverage <b>3.33x</b>. Covenant maximum 4.0x. The covenant breaks if EBITDA falls below 400 ÷ 4.0 = <b>$100m</b>, a fall of only <b>16.7%</b>. If EBITDA drops to $90m, leverage = 4.44x → breach → lenders can demand repayment or, more often, charge fees and tighten terms in exchange for a waiver.`
        },
        {
          type: 'framework', name: 'The restructuring options ladder', by: 'Common restructuring practice', when: 'A company is heading toward a breach or default',
          steps: [
            { label: '1. Operational fixes', desc: 'Cut costs, sell non-core assets, release working capital. Necessary in every case.' },
            { label: '2. Amend & extend', desc: 'Negotiate covenant waivers, later maturities or payment-in-kind interest with lenders, usually for a fee and higher rate.' },
            { label: '3. New money', desc: 'Raise equity (often heavily dilutive) or rescue financing, sometimes from existing owners.' },
            { label: '4. Out-of-court restructuring', desc: 'Debt-for-equity swap or exchange offer: creditors accept less debt and take ownership. Faster and cheaper than court, but needs near-unanimous agreement.' },
            { label: '5. Formal process', desc: 'Chapter 11 (US), administration or restructuring plans (UK), CIRP under the IBC (India). Binds hold-outs, but costs more and damages the brand.' },
            { label: '6. Liquidation', desc: 'Sell assets and distribute proceeds by priority. Value is usually lowest here.' }
          ]
        },
        {
          type: 'compare', title: 'US Chapter 11 vs India\'s IBC (simplified)', headers: ['', 'US Chapter 11', 'India: Insolvency and Bankruptcy Code, 2016'],
          rows: [
            ['Who runs the company', 'Usually existing management ("debtor in possession"), under court supervision', 'An insolvency (resolution) professional replaces the board\'s powers during the process'],
            ['Who decides', 'Creditor classes vote on the plan; court confirms', 'Committee of Creditors (mainly financial creditors) approves a resolution plan; NCLT confirms'],
            ['Breathing space', 'Automatic stay stops creditor actions', 'Moratorium stops suits and enforcement'],
            ['Time limits', 'No fixed limit; large cases can take months to years', '180 days, extendable, with an overall limit of 330 days (including litigation) set by a 2019 amendment — often exceeded in practice'],
            ['New money', 'DIP (debtor-in-possession) financing with priority', 'Interim finance with priority as resolution process cost'],
            ['Landmark example', 'Many: airlines, retailers, energy firms', 'Essar Steel: acquired by ArcelorMittal (with Nippon Steel) for about ₹42,000 crore after a Supreme Court ruling in 2019']
          ]
        },
        {
          type: 'formula', name: 'Absolute priority: who gets what',
          expr: 'Distribute value in order: admin costs & DIP → secured → unsecured → subordinated → equity',
          explain: 'Each class is paid in full before the next receives anything (in principle; negotiated deviations are common). Equity is usually wiped out when value is below debt.',
          example: `Reorganised value $600m. Claims: DIP loan $100m, secured loan $300m, unsecured bonds $400m. DIP gets $100m (100%); secured $300m (100%); unsecured get the remaining $200m = <b>50 cents on the dollar</b>, often in the form of new equity; old shareholders get <b>nothing</b>.`
        },
        {
          type: 'case', company: 'Toys "R" Us', year: '2005–2018', title: 'An LBO that could not survive a changing market',
          situation: `In 2005 KKR, Bain Capital and Vornado Realty Trust bought Toys "R" Us in a leveraged buyout of about $6.6 billion. The deal left the retailer with around $5 billion of debt and interest costs widely reported at roughly $400 million a year.`,
          decision: `The company stayed private, refinanced repeatedly and tried to compete with Walmart, Target and fast-growing Amazon. Heavy interest payments limited what it could invest in stores, e-commerce and prices.`,
          outcome: `It filed for Chapter 11 in September 2017, hoping to restructure. After weak holiday sales, it announced in March 2018 that it would liquidate its US business, closing its stores with the loss of tens of thousands of jobs. The brand was later revived on a small scale under new owners.`,
          lesson: `Leverage reduces a firm\'s ability to invest exactly when its industry is changing. Analysts still debate how much blame lies with the LBO debt versus competition from Amazon and big-box rivals — the honest answer is both: the debt removed the margin for error.`
        },
        {
          type: 'checklist', title: 'Early warning signs of distress',
          items: [
            'Covenant headroom below 15–20% of EBITDA',
            'A 13-week cash flow forecast showing a shortfall',
            'Suppliers shortening payment terms or demanding cash upfront',
            'Large debt maturities within 12–18 months and no refinancing plan',
            'Auditor going-concern doubts',
            'Bonds trading well below par'
          ]
        },
        {
          type: 'scenario',
          prompt: `Your company will breach its leverage covenant in two quarters. The CEO wants to say nothing to lenders and "hope sales recover". What do you recommend?`,
          options: [
            { text: 'Wait — telling lenders early will spook them.', feedback: 'Surprise breaches destroy trust and weaken your bargaining position. Lenders are far more flexible when approached early with a credible plan.', good: false },
            { text: 'Build a 13-week cash forecast and a credible plan, hire advisers, and open talks with lenders now about an amendment.', feedback: 'Right. Early engagement keeps the cheaper options (amend & extend, out-of-court deals) on the table.', good: true },
            { text: 'File for bankruptcy immediately to get protection.', feedback: 'A formal process is costly and damaging; it should come after consensual options have been explored.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Covenant', def: 'A promise in a loan agreement, such as keeping leverage below a set level.' },
        { term: 'Maintenance vs incurrence covenant', def: 'Maintenance covenants are tested regularly; incurrence covenants only when the borrower takes a specific action.' },
        { term: 'Liquidity crunch', def: 'A shortage of cash to meet obligations as they fall due, even if the business may be viable.' },
        { term: 'Chapter 11', def: 'US bankruptcy process that lets a company reorganise under court protection rather than liquidate.' },
        { term: 'IBC (Insolvency and Bankruptcy Code)', def: 'India\'s 2016 law creating a time-bound, creditor-led insolvency resolution process overseen by the NCLT.' },
        { term: 'Absolute priority rule', def: 'Senior claims are paid in full before junior claims receive anything.' },
        { term: 'Debt-for-equity swap', def: 'Creditors exchange some or all of their debt for ownership of the company.' },
        { term: 'DIP financing', def: 'New loans to a company in Chapter 11, given priority over existing claims.' }
      ],
      quiz: [
        {
          q: 'Net debt $300m, EBITDA $100m, covenant max 4.0x. How far can EBITDA fall before breach?',
          options: ['To $75m (25% fall)', 'To $80m (20% fall)', 'To $60m (40% fall)', 'To $90m (10% fall)'],
          answer: 0,
          explain: '300 ÷ 4.0 = $75m, a 25% fall from $100m.'
        },
        {
          q: 'Value $500m; claims: secured $350m, unsecured $300m. Under absolute priority, unsecured creditors recover:',
          options: ['100%', '0%', '75%', '50%'],
          answer: 3,
          explain: 'Secured get 350; 150 left for 300 of unsecured claims = 50%.'
        },
        {
          q: 'Under India\'s IBC, which body approves the resolution plan before the NCLT confirms it?',
          options: ['The shareholders', 'The Committee of Creditors', 'The Reserve Bank of India', 'The company\'s auditors'],
          answer: 1,
          explain: 'The Committee of Creditors, made up mainly of financial creditors, votes on resolution plans.'
        },
        {
          q: 'Which covenant type gives lenders the EARLIEST warning?',
          options: ['Incurrence covenants', 'No covenants (cov-lite)', 'Maintenance covenants', 'Negative pledge only'],
          answer: 2,
          explain: 'Maintenance covenants are tested regularly, so a breach surfaces as soon as performance weakens.'
        },
        {
          q: 'What was a key problem for Toys "R" Us after its 2005 LBO?',
          options: ['It had no debt', 'Heavy interest costs limited investment while competition intensified', 'It was banned from e-commerce', 'Its owners sold it to Amazon'],
          answer: 1,
          explain: 'Roughly $400m a year of interest limited investment in stores, prices and online, as Amazon and big-box rivals grew.'
        }
      ],
      challenge: {
        title: 'Out of court or into court?',
        prompt: `A manufacturer (illustrative) has a $500m secured term loan and $400m of unsecured notes, both at 8%. EBITDA has fallen to $80m and similar firms sell for about 6x EBITDA. Capex needs are $30m a year.<br><br>Proposal (out of court): secured lenders keep a new $300m loan and receive 90% of the new equity; noteholders swap into 10% of the equity; old shareholders are wiped out.<br>Alternative: Chapter 11, where professional fees and lost business would reduce enterprise value by about $60m.<br><br>(a) Is the company solvent on a value basis? Can it pay its interest? (b) Recoveries for each class under the proposal. (c) Recoveries under Chapter 11 with strict absolute priority. (d) Recommend.`,
        hints: ['EV = 6 × 80.', 'New equity value = EV − new debt.', 'In court, EV falls by $60m before distribution.'],
        model: `<p><b>(a)</b> EV = 6 × 80 = <b>$480m</b>, far below debt of $900m: insolvent on a value basis. Interest = 900 × 8% = $72m; EBITDA − capex = $50m → it cannot cover interest. Action is unavoidable.</p><p><b>(b) Out of court</b>: new equity = 480 − 300 = $180m.</p><ul><li>Secured: $300m new loan + 90% × 180 = $162m → <b>$462m = 92.4%</b> recovery.</li><li>Unsecured: 10% × 180 = <b>$18m = 4.5%</b>.</li><li>Old equity: <b>0</b>.</li></ul><p>New interest = 300 × 8% = $24m; EBITDA ÷ interest = 3.3x and EBITDA − capex ($50m) covers it twice over.</p><p><b>(c) Chapter 11</b>: EV = 480 − 60 = $420m. Secured get 420 ÷ 500 = <b>84%</b>; unsecured <b>0%</b>; equity 0.</p><p><b>(d) Recommendation</b>: pursue the <b>out-of-court debt-for-equity swap</b>. Secured lenders recover about 92% vs 84% in court, noteholders get something rather than nothing, and the company avoids a costly, brand-damaging process — so both classes should agree. Use a pre-packaged Chapter 11 as a fallback to bind any hold-outs. Pair it with operational fixes so EBITDA recovers.</p>`
      },
      takeaways: [
        'Watch covenant headroom and 13-week cash forecasts — liquidity kills before losses do.',
        'Act early: amend & extend and out-of-court swaps preserve the most value.',
        'Chapter 11 and India\'s IBC give breathing space and bind hold-outs, at a cost.',
        'Absolute priority usually wipes out equity when value is below debt.',
        'Toys "R" Us shows how heavy LBO debt removes the margin for error in a changing market.'
      ]
    }
  ]
});
