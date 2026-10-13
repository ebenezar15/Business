/* Interactive simulators — finance, economics & pricing. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h;

  /* Shared layout: controls left, results right, chart + plain-English insight below. */
  function shell(root, controls, stats) {
    var chart = h('div.w-chart');
    var insight = h('p.w-insight', { 'aria-live': 'polite' });
    root.appendChild(h('div.w-grid',
      h('div.w-controls', controls),
      h('div.w-results', h('div.stats', stats), insight)
    ));
    root.appendChild(chart);
    return { chart: chart, insight: insight };
  }
  MBA.widgetShell = shell;

  var $ = function (v) { return U.fmt(v, { cur: '$', compact: true, d: Math.abs(v) >= 100 || Math.abs(v) % 1 === 0 ? 0 : 2 }); };
  var $2 = function (v) { return U.fmt(v, { cur: '$', d: 2 }); };

  /* ---------------- Break-even ---------------- */
  MBA.registerWidget('breakeven', {
    title: 'Break-even Calculator', icon: '⚖️', cat: 'Finance',
    desc: 'How many units must you sell before you stop losing money?',
    render: function (root) {
      var fixed = U.slider('Fixed costs / month (rent, salaries)', { min: 1000, max: 100000, step: 1000, value: 20000, fmt: $ }, upd);
      var price = U.slider('Price per unit', { min: 1, max: 200, value: 40, fmt: $ }, upd);
      var vc = U.slider('Variable cost per unit (materials, delivery)', { min: 0, max: 150, value: 15, fmt: $ }, upd);
      var sales = U.slider('Expected units sold / month', { min: 0, max: 5000, step: 10, value: 1000 }, upd);
      var sBE = U.stat('Break-even units'), sCM = U.stat('Contribution margin / unit'), sP = U.stat('Profit at expected sales'), sMS = U.stat('Margin of safety');
      var o = shell(root, [fixed, price, vc, sales], [sBE, sCM, sP, sMS]);
      function upd() {
        var F = fixed.get(), P = price.get(), V = vc.get(), Q = sales.get(), cm = P - V;
        var be = cm > 0 ? F / cm : Infinity, profit = cm * Q - F;
        sBE.set(Math.ceil(be), function (v) { return isFinite(v) ? Math.ceil(v).toLocaleString() + ' units' : 'never'; }, cm <= 0 ? 'bad' : null);
        sCM.set(cm, $2, cm > 0 ? 'good' : 'bad');
        sP.set(profit, $, profit >= 0 ? 'good' : 'bad');
        sMS.text(isFinite(be) && Q > 0 ? U.pct((Q - be) / Q) : '—', Q > be ? 'good' : 'warn');
        var maxQ = Math.max(Q * 1.6, isFinite(be) ? be * 1.6 : Q * 2, 100), pts = 30, rev = [], cost = [];
        for (var i = 0; i <= pts; i++) { var q = maxQ * i / pts; rev.push([q, P * q]); cost.push([q, F + V * q]); }
        U.lineChart(o.chart, {
          series: [{ name: 'Revenue', color: 'var(--good)', points: rev }, { name: 'Total cost', color: 'var(--bad)', points: cost }],
          xLabel: 'Units sold', yFmt: $, markers: isFinite(be) ? [{ x: be, y: P * be, label: 'Break-even ≈ ' + Math.ceil(be).toLocaleString() }] : []
        });
        o.insight.innerHTML = cm <= 0
          ? '🚨 Each sale <b>loses</b> money (price ≤ variable cost). No volume can save this — raise price or cut unit cost.'
          : 'Every unit sold contributes <b>' + $2(cm) + '</b> toward covering ' + $(F) + ' of fixed costs. You need <b>' + Math.ceil(be).toLocaleString() + ' units</b> a month to break even' +
            (Q >= be ? ', and at your forecast you earn ' + $(profit) + '.' : ' — your forecast is short by ' + Math.ceil(be - Q).toLocaleString() + ' units.');
      }
      upd();
    }
  });

  /* ---------------- Unit economics ---------------- */
  MBA.registerWidget('unit-economics', {
    title: 'Unit Economics (LTV : CAC)', icon: '🧮', cat: 'Finance',
    desc: 'Is each customer worth more than it costs to acquire them?',
    render: function (root) {
      var arpu = U.slider('Revenue per customer / month (ARPU)', { min: 5, max: 500, value: 50, fmt: $ }, upd);
      var gm = U.slider('Gross margin', { min: 5, max: 95, value: 70, fmt: function (v) { return v + '%'; } }, upd);
      var churn = U.slider('Monthly churn (customers lost)', { min: 0.5, max: 20, step: 0.5, value: 4, fmt: function (v) { return v + '%'; } }, upd);
      var cac = U.slider('Customer acquisition cost (CAC)', { min: 10, max: 3000, step: 10, value: 400, fmt: $ }, upd);
      var sL = U.stat('Lifetime value (LTV)'), sR = U.stat('LTV : CAC'), sPb = U.stat('CAC payback'), sLife = U.stat('Avg. lifetime');
      var o = shell(root, [arpu, gm, churn, cac], [sL, sR, sPb, sLife]);
      function upd() {
        var A = arpu.get(), G = gm.get() / 100, c = churn.get() / 100, C = cac.get();
        var life = 1 / c, ltv = A * G * life, ratio = ltv / C, pb = C / (A * G);
        sL.set(ltv, $); sLife.set(life, function (v) { return v.toFixed(1) + ' mo'; });
        sR.set(ratio, function (v) { return v.toFixed(1) + 'x'; }, ratio >= 3 ? 'good' : ratio >= 1 ? 'warn' : 'bad');
        sPb.set(pb, function (v) { return v.toFixed(1) + ' mo'; }, pb <= 12 ? 'good' : pb <= 24 ? 'warn' : 'bad');
        var pts = [], months = Math.min(60, Math.ceil(Math.max(pb * 1.6, 12)));
        var cum = -C, surv = 1;
        for (var m = 0; m <= months; m++) { pts.push([m, cum]); cum += A * G * surv; surv *= (1 - c); }
        U.lineChart(o.chart, { series: [{ name: 'Cumulative profit from one customer', color: 'var(--accent)', points: pts, area: true }], xLabel: 'Months since acquisition', yFmt: $, legend: true });
        o.insight.innerHTML = ratio >= 3
          ? '✅ Healthy: each customer returns <b>' + ratio.toFixed(1) + 'x</b> what they cost. Investors usually look for ≥3x and payback under 12–18 months.'
          : ratio >= 1 ? '⚠️ Profitable per customer but thin (' + ratio.toFixed(1) + 'x). Try cutting churn — it has the biggest lever on LTV.'
          : '🚨 You lose money on every customer. Growing faster would only burn cash faster.';
      }
      upd();
    }
  });

  /* ---------------- Pricing & elasticity ---------------- */
  MBA.registerWidget('pricing-elasticity', {
    title: 'Price Elasticity & Profit', icon: '🏷️', cat: 'Pricing',
    desc: 'Find the price that maximises profit — not just revenue.',
    render: function (root) {
      var p0 = U.slider('Current price', { min: 5, max: 200, value: 50, fmt: $ }, upd);
      var q0 = U.slider('Units sold at current price / month', { min: 100, max: 20000, step: 100, value: 2000 }, upd);
      var e = U.slider('Price elasticity of demand', { min: 0.2, max: 4, step: 0.1, value: 1.5, fmt: function (v) { return '−' + v.toFixed(1); } }, upd);
      var uc = U.slider('Unit cost', { min: 0, max: 150, value: 20, fmt: $ }, upd);
      var test = U.slider('Try a new price', { min: 5, max: 250, value: 60, fmt: $ }, upd);
      var sQ = U.stat('Units at new price'), sRev = U.stat('Revenue change'), sPr = U.stat('Profit change'), sOpt = U.stat('Profit-max price');
      var o = shell(root, [p0, q0, e, uc, test], [sQ, sRev, sPr, sOpt]);
      function demand(P, P0, Q0, E) { return Q0 * Math.pow(P / P0, -E); }
      function upd() {
        var P0 = p0.get(), Q0 = q0.get(), E = e.get(), C = uc.get(), P = test.get();
        var Q = demand(P, P0, Q0, E), r0 = P0 * Q0, r1 = P * Q, pr0 = (P0 - C) * Q0, pr1 = (P - C) * Q;
        var opt = E > 1 ? C * E / (E - 1) : Infinity;
        sQ.set(Q, function (v) { return Math.round(v).toLocaleString(); });
        sRev.set((r1 - r0) / r0, function (v) { return (v >= 0 ? '+' : '') + U.pct(v); }, r1 >= r0 ? 'good' : 'bad');
        sPr.set(pr0 ? (pr1 - pr0) / Math.abs(pr0) : 0, function (v) { return (v >= 0 ? '+' : '') + U.pct(v); }, pr1 >= pr0 ? 'good' : 'bad');
        sOpt.text(isFinite(opt) ? $2(opt) : 'raise it!', 'good');
        var pts = [], rev = [], hi = Math.max(P0, P) * 2.2;
        for (var i = 1; i <= 40; i++) { var pp = Math.max(C + 0.5, 1) + (hi - C) * i / 40; var qq = demand(pp, P0, Q0, E); pts.push([pp, (pp - C) * qq]); rev.push([pp, pp * qq]); }
        U.lineChart(o.chart, {
          series: [{ name: 'Profit', color: 'var(--good)', points: pts }, { name: 'Revenue', color: 'var(--accent-2)', points: rev, dash: true }],
          xLabel: 'Price', xFmt: $, yFmt: $, markers: [{ x: P, y: pr1, label: 'Your test: ' + $(pr1) }]
        });
        o.insight.innerHTML = E <= 1
          ? 'Demand is <b>inelastic</b> (|E| ≤ 1): customers barely react to price, so raising price grows both revenue and profit. Real markets cap this — watch competitors and churn.'
          : 'With elasticity −' + E.toFixed(1) + ', a 10% price rise cuts volume by about ' + (E * 10).toFixed(0) + '%. The profit-maximising price is <b>' + $2(opt) + '</b> (formula: cost × E ÷ (E − 1)). Notice revenue and profit peak at different prices.';
      }
      upd();
    }
  });

  /* ---------------- Supply & demand ---------------- */
  MBA.registerWidget('supply-demand', {
    title: 'Supply & Demand', icon: '📈', cat: 'Economics',
    desc: 'Shift the curves and watch the market find a new price.',
    render: function (root) {
      var d = U.slider('Demand shift (more buyers, higher incomes, trend)', { min: -40, max: 40, value: 0, fmt: function (v) { return (v > 0 ? '+' : '') + v; } }, upd);
      var s = U.slider('Supply shift (more producers, cheaper inputs, tech)', { min: -40, max: 40, value: 0, fmt: function (v) { return (v > 0 ? '+' : '') + v; } }, upd);
      var cap = U.slider('Price ceiling (0 = none)', { min: 0, max: 100, value: 0, fmt: function (v) { return v ? $(v) : 'none'; } }, upd);
      var sP = U.stat('Equilibrium price'), sQ = U.stat('Equilibrium quantity'), sG = U.stat('Shortage at ceiling');
      var o = shell(root, [d, s, cap], [sP, sQ, sG]);
      function upd() {
        // Demand: P = 100 + dShift - Q ; Supply: P = 10 - sShift + Q*0.8
        var D = d.get(), S = s.get(), C = cap.get();
        var Q = (100 + D - 10 + S) / 1.8, P = 100 + D - Q;
        var dem = [], sup = [];
        for (var q = 0; q <= 120; q += 4) { dem.push([q, 100 + D - q]); sup.push([q, 10 - S + 0.8 * q]); }
        var markers = [{ x: Q, y: P, label: 'Equilibrium ' + $(P) }], shortage = 0;
        if (C && C < P) { var qd = 100 + D - C, qs = (C - 10 + S) / 0.8; shortage = Math.max(0, qd - qs); markers.push({ x: Math.max(0, qs), y: C, label: 'Ceiling', color: 'var(--bad)' }); }
        sP.set(P, $2); sQ.set(Q, function (v) { return v.toFixed(0) + ' units'; }); sG.set(shortage, function (v) { return v.toFixed(0) + ' units'; }, shortage ? 'bad' : null);
        var series = [{ name: 'Demand', color: 'var(--accent)', points: dem }, { name: 'Supply', color: 'var(--warn)', points: sup }];
        if (C) series.push({ name: 'Price ceiling', color: 'var(--bad)', points: [[0, C], [120, C]], dash: true });
        U.lineChart(o.chart, { series: series, xLabel: 'Quantity', yLabel: 'Price', yFmt: $, yMin: 0, yMax: 160, markers: markers });
        var msg = [];
        if (D > 0) msg.push('Higher demand pushes price <b>up</b>.'); if (D < 0) msg.push('Weaker demand pulls price <b>down</b>.');
        if (S > 0) msg.push('More supply pushes price <b>down</b> and quantity up.'); if (S < 0) msg.push('Scarcer supply (e.g. a drought or a chip shortage) pushes price <b>up</b>.');
        if (shortage) msg.push('The ceiling holds price below equilibrium, so buyers want more than sellers offer: a <b>shortage</b> of ' + shortage.toFixed(0) + ' units (think queues, black markets).');
        o.insight.innerHTML = msg.join(' ') || 'Price settles where the amount buyers want equals the amount sellers offer. Move a slider to shock the market.';
      }
      upd();
    }
  });

  /* ---------------- Compound growth / TVM ---------------- */
  MBA.registerWidget('compound', {
    title: 'Compounding & Time Value of Money', icon: '⏳', cat: 'Finance',
    desc: 'Why a dollar today beats a dollar tomorrow — and why small growth rates win big.',
    render: function (root) {
      var p = U.slider('Starting amount', { min: 100, max: 100000, step: 100, value: 10000, fmt: $ }, upd);
      var add = U.slider('Added every year', { min: 0, max: 20000, step: 100, value: 1000, fmt: $ }, upd);
      var r = U.slider('Annual growth / return rate', { min: 0, max: 30, step: 0.5, value: 8, fmt: function (v) { return v + '%'; } }, upd);
      var y = U.slider('Years', { min: 1, max: 40, value: 20 }, upd);
      var sF = U.stat('Future value'), sC = U.stat('You put in'), sG = U.stat('Growth earned'), sD = U.stat('Doubling time (Rule of 72)');
      var o = shell(root, [p, add, r, y], [sF, sC, sG, sD]);
      function upd() {
        var P = p.get(), A = add.get(), R = r.get() / 100, Y = y.get(), v = P, pts = [[0, P]], inv = [[0, P]];
        for (var i = 1; i <= Y; i++) { v = v * (1 + R) + A; pts.push([i, v]); inv.push([i, P + A * i]); }
        var put = P + A * Y;
        sF.set(v, $, 'good'); sC.set(put, $); sG.set(v - put, $); sD.text(R ? (72 / (R * 100)).toFixed(1) + ' yrs' : '—');
        U.lineChart(o.chart, { series: [{ name: 'Value', color: 'var(--good)', points: pts, area: true }, { name: 'Money put in', color: 'var(--muted)', points: inv, dash: true }], xLabel: 'Years', yFmt: $ });
        o.insight.innerHTML = 'After ' + Y + ' years, <b>' + U.pct((v - put) / v, 0) + '</b> of the final value is pure growth. The same maths works backwards: ' + $(P) + ' received ' + Y + ' years from now is worth only <b>' + $(P / Math.pow(1 + R, Y)) + '</b> today at ' + (R * 100) + '% — that is <i>discounting</i>.';
      }
      upd();
    }
  });

  /* ---------------- NPV / IRR ---------------- */
  MBA.registerWidget('npv', {
    title: 'NPV & IRR Investment Appraisal', icon: '🏗️', cat: 'Finance',
    desc: 'Should we invest? Discount future cash flows to today.',
    render: function (root) {
      var inv = U.numInput('Upfront investment ($)', 100000, upd);
      var flows = [30000, 35000, 40000, 40000, 35000].map(function (v, i) { return U.numInput('Year ' + (i + 1) + ' cash flow', v, upd); });
      var rate = U.slider('Discount rate (cost of capital)', { min: 0, max: 30, step: 0.5, value: 10, fmt: function (v) { return v + '%'; } }, upd);
      var sN = U.stat('NPV'), sI = U.stat('IRR'), sP = U.stat('Payback period'), sPI = U.stat('Profitability index');
      var o = shell(root, [inv].concat(flows, [rate]), [sN, sI, sP, sPI]);
      function npv(r, cf) { return cf.reduce(function (a, c, t) { return a + c / Math.pow(1 + r, t); }, 0); }
      function irr(cf) { var lo = -0.99, hi = 5; if (npv(lo, cf) * npv(hi, cf) > 0) return NaN; for (var i = 0; i < 100; i++) { var m = (lo + hi) / 2; if (npv(lo, cf) * npv(m, cf) <= 0) hi = m; else lo = m; } return (lo + hi) / 2; }
      function upd() {
        var cf = [-inv.get()].concat(flows.map(function (f) { return f.get(); })), r = rate.get() / 100;
        var n = npv(r, cf), i = irr(cf), cum = 0, pb = null;
        for (var t = 0; t < cf.length; t++) { var prev = cum; cum += cf[t]; if (pb === null && cum >= 0 && t > 0) pb = t - 1 + (-prev) / cf[t]; }
        sN.set(n, $, n >= 0 ? 'good' : 'bad');
        sI.text(isFinite(i) ? U.pct(i) : 'n/a', isFinite(i) && i > r ? 'good' : 'bad');
        sP.text(pb != null ? pb.toFixed(1) + ' yrs' : 'never');
        sPI.text(inv.get() ? (1 + n / inv.get()).toFixed(2) : '—');
        U.barChart(o.chart, { bars: cf.map(function (c, t) { return { label: 'Y' + t, value: c / Math.pow(1 + r, t), color: c < 0 ? 'var(--bad)' : 'var(--accent)' }; }), yFmt: $ });
        o.insight.innerHTML = 'Bars show each year\'s cash flow <b>in today\'s money</b>. ' + (n >= 0
          ? '✅ NPV is positive, so the project creates value above the ' + (r * 100) + '% return investors demand. Accept (if no better use of capital).'
          : '❌ NPV is negative — the project earns less than your cost of capital. Reject, or find ways to raise cash flows / cut the investment.');
      }
      upd();
    }
  });

  /* ---------------- P&L waterfall ---------------- */
  MBA.registerWidget('pnl', {
    title: 'P&L Builder (Income Statement)', icon: '📊', cat: 'Finance',
    desc: 'Watch revenue flow down to net profit.',
    render: function (root) {
      var rev = U.slider('Revenue', { min: 10000, max: 1000000, step: 10000, value: 500000, fmt: $ }, upd);
      var cogs = U.slider('Cost of goods sold (% of revenue)', { min: 5, max: 90, value: 40, fmt: function (v) { return v + '%'; } }, upd);
      var opex = U.slider('Operating expenses (salaries, rent, marketing)', { min: 0, max: 800000, step: 5000, value: 180000, fmt: $ }, upd);
      var da = U.slider('Depreciation & amortisation', { min: 0, max: 100000, step: 1000, value: 20000, fmt: $ }, upd);
      var int = U.slider('Interest', { min: 0, max: 100000, step: 1000, value: 10000, fmt: $ }, upd);
      var tax = U.slider('Tax rate', { min: 0, max: 40, value: 25, fmt: function (v) { return v + '%'; } }, upd);
      var sGM = U.stat('Gross margin'), sEB = U.stat('EBITDA margin'), sNI = U.stat('Net income'), sNM = U.stat('Net margin');
      var o = shell(root, [rev, cogs, opex, da, int, tax], [sGM, sEB, sNI, sNM]);
      function upd() {
        var R = rev.get(), C = R * cogs.get() / 100, GP = R - C, E = GP - opex.get(), EBIT = E - da.get(), EBT = EBIT - int.get(), T = Math.max(0, EBT * tax.get() / 100), NI = EBT - T;
        sGM.set(GP / R, U.pct); sEB.set(E / R, U.pct, E >= 0 ? 'good' : 'bad'); sNI.set(NI, $, NI >= 0 ? 'good' : 'bad'); sNM.set(NI / R, U.pct, NI >= 0 ? 'good' : 'bad');
        U.barChart(o.chart, {
          waterfall: true, yFmt: $, bars: [
            { label: 'Revenue', value: R, total: true, color: 'var(--accent)' }, { label: 'COGS', value: -C }, { label: 'Gross profit', value: GP, total: true, color: 'var(--accent-2)' },
            { label: 'Opex', value: -opex.get() }, { label: 'EBITDA', value: E, total: true, color: 'var(--accent-2)' }, { label: 'D&A', value: -da.get() },
            { label: 'Interest', value: -int.get() }, { label: 'Tax', value: -T }, { label: 'Net income', value: NI, total: true, color: NI >= 0 ? 'var(--good)' : 'var(--bad)' }
          ]
        });
        o.insight.innerHTML = 'Of every $1 of sales you keep <b>' + $2(NI / R) + '</b>. Gross margin tells you if the <i>product</i> is profitable; EBITDA tells you if the <i>business operations</i> are; net income is what is left for owners after the bank and the government.';
      }
      upd();
    }
  });

  /* ---------------- Runway ---------------- */
  MBA.registerWidget('runway', {
    title: 'Cash Runway & Burn', icon: '🛫', cat: 'Finance',
    desc: 'How many months until the money runs out?',
    render: function (root) {
      var cash = U.slider('Cash in bank', { min: 10000, max: 5000000, step: 10000, value: 1000000, fmt: $ }, upd);
      var cost = U.slider('Monthly costs', { min: 5000, max: 500000, step: 5000, value: 120000, fmt: $ }, upd);
      var rev = U.slider('Monthly revenue today', { min: 0, max: 400000, step: 1000, value: 30000, fmt: $ }, upd);
      var g = U.slider('Monthly revenue growth', { min: 0, max: 25, step: 0.5, value: 6, fmt: function (v) { return v + '%'; } }, upd);
      var cg = U.slider('Monthly cost growth', { min: 0, max: 10, step: 0.5, value: 1, fmt: function (v) { return v + '%'; } }, upd);
      var sB = U.stat('Net burn now'), sR = U.stat('Runway'), sBE = U.stat('Cash-flow breakeven'), sL = U.stat('Lowest cash');
      var o = shell(root, [cash, cost, rev, g, cg], [sB, sR, sBE, sL]);
      function upd() {
        var c = cash.get(), C = cost.get(), R = rev.get(), G = g.get() / 100, CG = cg.get() / 100, pts = [[0, c]], run = null, be = null, low = c;
        for (var m = 1; m <= 48; m++) {
          c += R - C; if (R >= C && be === null) be = m; R *= 1 + G; C *= 1 + CG; pts.push([m, c]); low = Math.min(low, c);
          if (c < 0 && run === null) run = m;
        }
        sB.set(cost.get() - rev.get(), $, cost.get() > rev.get() ? 'warn' : 'good');
        sR.text(run === null ? '48+ months' : run + ' months', run === null || run > 18 ? 'good' : run > 9 ? 'warn' : 'bad');
        sBE.text(be === null ? 'not in 4 yrs' : 'month ' + be, be !== null && (run === null || be < run) ? 'good' : 'bad');
        sL.set(low, $, low >= 0 ? 'good' : 'bad');
        U.lineChart(o.chart, { series: [{ name: 'Cash balance', color: 'var(--accent)', points: pts, area: true }], xLabel: 'Months from now', yFmt: $, legend: true, markers: run ? [{ x: run, y: 0, label: 'Out of cash', color: 'var(--bad)' }] : [] });
        o.insight.innerHTML = run === null
          ? '✅ You reach cash-flow breakeven before the money runs out (the "default alive" test popularised by Paul Graham).'
          : '⚠️ You are <b>default dead</b>: cash hits zero in month ' + run + '. Start fundraising at least 6–9 months before that, or cut burn now. Rule of thumb: keep 18–24 months of runway after a raise.';
      }
      upd();
    }
  });

  /* ---------------- Working capital ---------------- */
  MBA.registerWidget('working-capital', {
    title: 'Cash Conversion Cycle', icon: '🔄', cat: 'Finance',
    desc: 'How long is your cash stuck in inventory and unpaid invoices?',
    render: function (root) {
      var dio = U.slider('Days inventory outstanding (DIO)', { min: 0, max: 180, value: 60 }, upd);
      var dso = U.slider('Days sales outstanding (customers pay after)', { min: 0, max: 120, value: 45 }, upd);
      var dpo = U.slider('Days payables outstanding (you pay suppliers after)', { min: 0, max: 120, value: 30 }, upd);
      var rev = U.slider('Annual revenue', { min: 100000, max: 50000000, step: 100000, value: 5000000, fmt: $ }, upd);
      var sC = U.stat('Cash conversion cycle'), sT = U.stat('Cash tied up');
      var o = shell(root, [dio, dso, dpo, rev], [sC, sT]);
      function upd() {
        var I = dio.get(), S = dso.get(), P = dpo.get(), ccc = I + S - P, tied = rev.get() / 365 * ccc;
        sC.set(ccc, function (v) { return Math.round(v) + ' days'; }, ccc <= 0 ? 'good' : ccc > 60 ? 'bad' : 'warn');
        sT.set(tied, $, tied <= 0 ? 'good' : 'warn');
        o.chart.innerHTML = '';
        var max = Math.max(I + S, P, 1) * 1.05, w = function (v) { return (v / max * 100).toFixed(1) + '%'; };
        o.chart.appendChild(h('div.ccc',
          h('div.ccc-row', h('span', 'You hold stock'), h('div.ccc-track', h('i.ccc-bar.inv', { style: { width: w(I) } }, I + 'd'))),
          h('div.ccc-row', h('span', 'Customer owes you'), h('div.ccc-track', h('i.ccc-bar.rec', { style: { 'margin-left': w(I), width: w(S) } }, S + 'd'))),
          h('div.ccc-row', h('span', 'You owe supplier'), h('div.ccc-track', h('i.ccc-bar.pay', { style: { width: w(P) } }, P + 'd'))),
          h('div.ccc-row', h('span', 'Cash gap'), h('div.ccc-track', h('i.ccc-bar.gap', { style: { 'margin-left': w(Math.min(P, I + S)), width: w(Math.max(0, ccc)) } }, Math.max(0, ccc) + 'd')))
        ));
        o.insight.innerHTML = ccc <= 0
          ? '✅ Negative cycle: customers pay you <b>before</b> you pay suppliers, so growth <i>generates</i> cash (Amazon and Dell famously ran this way).'
          : 'Your cash is locked up for <b>' + ccc + ' days</b>, roughly ' + $(tied) + '. Shrink it by collecting faster (deposits, card payments), holding less stock, or negotiating longer supplier terms.';
      }
      upd();
    }
  });

  /* ---------------- Rule of 40 ---------------- */
  MBA.registerWidget('rule-of-40', {
    title: 'Rule of 40 Health Check', icon: '🩺', cat: 'Finance',
    desc: 'Balance growth against profitability like SaaS investors do.',
    render: function (root) {
      var g = U.slider('Annual revenue growth', { min: -20, max: 200, value: 35, fmt: function (v) { return v + '%'; } }, upd);
      var m = U.slider('Profit (or FCF / EBITDA) margin', { min: -80, max: 50, value: -5, fmt: function (v) { return v + '%'; } }, upd);
      var sS = U.stat('Rule of 40 score'), sV = U.stat('Verdict');
      var o = shell(root, [g, m], [sS, sV]);
      function upd() {
        var G = g.get(), M = m.get(), S = G + M;
        sS.set(S, function (v) { return Math.round(v) + '%'; }, S >= 40 ? 'good' : S >= 20 ? 'warn' : 'bad');
        sV.text(S >= 40 ? 'Healthy' : S >= 20 ? 'Needs work' : 'Concerning', S >= 40 ? 'good' : S >= 20 ? 'warn' : 'bad');
        var line = [], i; for (i = -20; i <= 120; i += 10) line.push([i, 40 - i]);
        U.lineChart(o.chart, { series: [{ name: 'Rule of 40 line (growth + margin = 40)', color: 'var(--muted)', points: line, dash: true }], xLabel: 'Growth %', yLabel: 'Margin %', yMin: -80, yMax: 60, xMin: -20, markers: [{ x: G, y: M, label: 'You: ' + Math.round(S) + '%', color: S >= 40 ? 'var(--good)' : 'var(--bad)' }], xFmt: function (v) { return Math.round(v) + '%'; }, yFmt: function (v) { return Math.round(v) + '%'; } });
        o.insight.innerHTML = 'A company growing fast can afford losses; a slow-growing one must be profitable. Above the dashed line = healthy. ' + (G > 60 && M < -20 ? 'High growth funded by heavy losses works only while capital is cheap.' : '');
      }
      upd();
    }
  });

  /* ---------------- Cap table ---------------- */
  MBA.registerWidget('cap-table', {
    title: 'Cap Table & Dilution', icon: '🥧', cat: 'Investment',
    desc: 'See how each funding round shrinks your slice (but grows the pie).',
    render: function (root) {
      var pool = U.slider('Employee option pool created at seed', { min: 0, max: 20, value: 10, fmt: function (v) { return v + '%'; } }, upd);
      var rounds = [
        ['Seed', 2000000, 8000000], ['Series A', 8000000, 32000000], ['Series B', 25000000, 100000000]
      ].map(function (r) {
        return { name: r[0], raise: U.slider(r[0] + ' raise', { min: 0, max: r[1] * 3, step: r[1] / 20, value: r[1], fmt: $ }, upd), pre: U.slider(r[0] + ' pre-money valuation', { min: r[2] / 4, max: r[2] * 4, step: r[2] / 20, value: r[2], fmt: $ }, upd) };
      });
      var sF = U.stat('Founders own'), sV = U.stat('Founders\' stake worth'), sPM = U.stat('Final post-money');
      var ctr = []; rounds.forEach(function (r) { ctr.push(r.raise, r.pre); });
      var o = shell(root, [pool].concat(ctr), [sF, sV, sPM]);
      function upd() {
        var own = { Founders: 1 }, post = 0, rows = [];
        rows.push({ label: 'Start', own: JSON.parse(JSON.stringify(own)) });
        rounds.forEach(function (r, i) {
          var R = r.raise.get(), PRE = r.pre.get(); if (!R) return;
          post = PRE + R; var newInv = R / post, keep = 1 - newInv;
          for (var k in own) own[k] *= keep;
          // pre-money pool: carved out of existing holders before the investor's stake
          if (i === 0 && pool.get()) { var pl = Math.min(pool.get() / 100, own.Founders); own.Founders -= pl; own['Option pool'] = pl; }
          own[r.name + ' investors'] = newInv;
          rows.push({ label: r.name, own: JSON.parse(JSON.stringify(own)) });
        });
        sF.set(own.Founders, U.pct, own.Founders > 0.5 ? 'good' : own.Founders > 0.25 ? 'warn' : 'bad');
        sV.set(own.Founders * post, $, 'good'); sPM.set(post, $);
        var colors = { Founders: 'var(--accent)', 'Option pool': 'var(--muted)', 'Seed investors': 'var(--warn)', 'Series A investors': 'var(--accent-2)', 'Series B investors': 'var(--good)' };
        o.chart.innerHTML = '';
        rows.forEach(function (row) {
          var bar = h('div.stack');
          for (var k in row.own) if (row.own[k] > 0.0005) bar.appendChild(h('i', { style: { width: (row.own[k] * 100) + '%', background: colors[k] }, title: k + ': ' + U.pct(row.own[k]) }, row.own[k] > 0.07 ? U.pct(row.own[k], 0) : ''));
          o.chart.appendChild(h('div.stack-row', h('span', row.label), bar));
        });
        var leg = h('div.legend-row'); for (var k in colors) leg.appendChild(h('span', h('i', { style: { background: colors[k] } }), k));
        o.chart.appendChild(leg);
        o.insight.innerHTML = 'Founders now own <b>' + U.pct(own.Founders) + '</b>, but that slice is worth <b>' + $(own.Founders * post) + '</b> on paper. Dilution per round = raise ÷ post-money. Option pools are usually carved out of founders\' stake <i>before</i> the investor buys in ("pre-money pool").';
      }
      upd();
    }
  });

  /* ---------------- Valuation ---------------- */
  MBA.registerWidget('valuation', {
    title: 'Valuation by Multiples', icon: '💎', cat: 'Investment',
    desc: 'Value a company like bankers and VCs do — then check the round maths.',
    render: function (root) {
      var rev = U.slider('Annual revenue (or ARR)', { min: 100000, max: 100000000, step: 100000, value: 5000000, fmt: $ }, upd);
      var g = U.slider('Revenue growth rate', { min: 0, max: 200, value: 60, fmt: function (v) { return v + '%'; } }, upd);
      var em = U.slider('EBITDA margin', { min: -50, max: 50, value: 10, fmt: function (v) { return v + '%'; } }, upd);
      var mult = U.slider('Revenue multiple applied', { min: 0.5, max: 30, step: 0.5, value: 8, fmt: function (v) { return v + 'x'; } }, upd);
      var ebm = U.slider('EBITDA multiple applied', { min: 3, max: 40, step: 0.5, value: 15, fmt: function (v) { return v + 'x'; } }, upd);
      var raise = U.slider('New money raised', { min: 0, max: 50000000, step: 250000, value: 5000000, fmt: $ }, upd);
      var sR = U.stat('Value (revenue multiple)'), sE = U.stat('Value (EBITDA multiple)'), sPost = U.stat('Post-money'), sD = U.stat('Investor stake');
      var o = shell(root, [rev, g, em, mult, ebm, raise], [sR, sE, sPost, sD]);
      function upd() {
        var R = rev.get(), vr = R * mult.get(), eb = R * em.get() / 100, ve = eb > 0 ? eb * ebm.get() : NaN, post = vr + raise.get();
        sR.set(vr, $); sE.text(isFinite(ve) ? $(ve) : 'n/a (loss-making)'); sPost.set(post, $); sD.set(raise.get() / post, U.pct);
        U.barChart(o.chart, { bars: [{ label: 'Revenue', value: R }, { label: 'EBITDA', value: eb }, { label: 'Rev × mult', value: vr, color: 'var(--accent-2)' }, { label: 'EBITDA × mult', value: isFinite(ve) ? ve : 0, color: 'var(--warn)' }, { label: 'Post-money', value: post, color: 'var(--good)' }], yFmt: $ });
        var hint = g.get() >= 80 ? 'Fast growth justifies a higher multiple.' : g.get() < 20 ? 'Slow growth: buyers anchor on profit (EBITDA) multiples.' : '';
        o.insight.innerHTML = 'Pre-money ' + $(vr) + ' + new money ' + $(raise.get()) + ' = post-money ' + $(post) + '. ' + hint + ' Multiples come from <i>comparable</i> companies — they move with interest rates and market mood, so always sanity-check with a DCF.';
      }
      upd();
    }
  });

  /* ---------------- EOQ ---------------- */
  MBA.registerWidget('eoq', {
    title: 'Inventory: Economic Order Quantity', icon: '📦', cat: 'Operations',
    desc: 'Order too often and you pay ordering costs; too much and you pay holding costs.',
    render: function (root) {
      var D = U.slider('Annual demand (units)', { min: 100, max: 100000, step: 100, value: 12000 }, upd);
      var S = U.slider('Cost per order (admin, shipping)', { min: 5, max: 1000, step: 5, value: 100, fmt: $ }, upd);
      var H = U.slider('Holding cost / unit / year', { min: 0.1, max: 50, step: 0.1, value: 2.5, fmt: $2 }, upd);
      var L = U.slider('Supplier lead time (days)', { min: 1, max: 60, value: 7 }, upd);
      var sQ = U.stat('Optimal order size'), sN = U.stat('Orders per year'), sT = U.stat('Total annual cost'), sR = U.stat('Reorder point');
      var o = shell(root, [D, S, H, L], [sQ, sN, sT, sR]);
      function upd() {
        var d = D.get(), s = S.get(), hh = H.get(), q = Math.sqrt(2 * d * s / hh), tc = d / q * s + q / 2 * hh;
        sQ.set(q, function (v) { return Math.round(v).toLocaleString() + ' units'; }); sN.set(d / q, function (v) { return v.toFixed(1); }); sT.set(tc, $); sR.set(d / 365 * L.get(), function (v) { return Math.round(v).toLocaleString() + ' units'; });
        var oc = [], hc = [], tt = [];
        for (var i = 1; i <= 40; i++) { var qq = q * 3 * i / 40; oc.push([qq, d / qq * s]); hc.push([qq, qq / 2 * hh]); tt.push([qq, d / qq * s + qq / 2 * hh]); }
        U.lineChart(o.chart, { series: [{ name: 'Ordering cost', color: 'var(--warn)', points: oc, dash: true }, { name: 'Holding cost', color: 'var(--accent-2)', points: hc, dash: true }, { name: 'Total', color: 'var(--accent)', points: tt }], xLabel: 'Order size (units)', yFmt: $, yMax: tc * 3, markers: [{ x: q, y: tc, label: 'EOQ' }] });
        o.insight.innerHTML = 'EOQ = √(2 × demand × order cost ÷ holding cost). Total cost is lowest where ordering and holding costs are equal. Reorder when stock hits <b>' + Math.round(d / 365 * L.get()) + ' units</b> (add safety stock for uncertain demand).';
      }
      upd();
    }
  });
})();
