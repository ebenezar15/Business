/* Interactive simulators — analytics, decision science, deals, global and operations games. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, shell = MBA.widgetShell;
  var $ = function (v) { return U.fmt(v, { cur: '$', compact: true, d: Math.abs(v) >= 100 || Math.abs(v) % 1 === 0 ? 0 : 2 }); };
  var pc = function (v) { return v + '%'; };
  var NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, text) { var n = document.createElementNS(NS, tag); for (var k in attrs) n.setAttribute(k, attrs[k]); if (text != null) n.textContent = text; return n; }
  function svg(w, hgt, label) { return s('svg', { viewBox: '0 0 ' + w + ' ' + hgt, class: 'chart', role: 'img', 'aria-label': label }); }

  /* ---------- statistics helpers ---------- */
  function normCdf(z) { var t = 1 / (1 + 0.2316419 * Math.abs(z)), d = 0.3989423 * Math.exp(-z * z / 2), q = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return z > 0 ? 1 - q : q; }
  function lgamma(x) { var c = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5], y = x, t = x + 5.5, ser = 1.000000000190015; t -= (x + 0.5) * Math.log(t); for (var j = 0; j < 6; j++) ser += c[j] / ++y; return -t + Math.log(2.5066282746310005 * ser / x); }
  function betacf(a, b, x) {
    var qab = a + b, qap = a + 1, qam = a - 1, c = 1, d = 1 - qab * x / qap; if (Math.abs(d) < 1e-30) d = 1e-30; d = 1 / d; var hh = d;
    for (var m = 1; m <= 200; m++) {
      var m2 = 2 * m, aa = m * (b - m) * x / ((qam + m2) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; hh *= d * c;
      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; var del = d * c; hh *= del;
      if (Math.abs(del - 1) < 3e-12) break;
    }
    return hh;
  }
  function ibeta(a, b, x) { if (x <= 0) return 0; if (x >= 1) return 1; var bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x)); return x < (a + 1) / (a + b + 2) ? bt * betacf(a, b, x) / a : 1 - bt * betacf(b, a, 1 - x) / b; }
  function tTwoSided(t, df) { return ibeta(df / 2, 0.5, df / (df + t * t)); }
  function tCrit(df, alpha) { var lo = 0, hi = 50; for (var i = 0; i < 80; i++) { var m = (lo + hi) / 2; if (tTwoSided(m, df) > alpha) lo = m; else hi = m; } return (lo + hi) / 2; }
  function randn() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  /* ================= Decision tree & value of information ================= */
  MBA.registerWidget('decision-tree', {
    title: 'Decision Tree & Value of Information', icon: '🌳', cat: 'Decision Analysis',
    desc: 'Launch, hold, or test first? Roll back the tree and price the information.',
    render: function (root) {
      var p = U.slider('Chance the launch succeeds', { min: 5, max: 95, value: 45, fmt: pc }, upd);
      var win = U.slider('Payoff if it succeeds', { min: 0, max: 20000000, step: 250000, value: 8000000, fmt: $ }, upd);
      var lose = U.slider('Payoff if it fails', { min: -10000000, max: 0, step: 250000, value: -1000000, fmt: $ }, upd);
      var cost = U.slider('Launch cost', { min: 0, max: 10000000, step: 250000, value: 3000000, fmt: $ }, upd);
      var tc = U.slider('Cost of a test market', { min: 0, max: 2000000, step: 50000, value: 300000, fmt: $ }, upd);
      var acc = U.slider('Test accuracy (right call rate)', { min: 50, max: 99, value: 80, fmt: pc }, upd);
      var sL = U.stat('EV of launching now'), sT = U.stat('EV of testing first'), sI = U.stat('Value of perfect info'), sB = U.stat('Best move');
      var o = shell(root, [p, win, lose, cost, tc, acc], [sL, sT, sI, sB]);
      function upd() {
        var P = p.get() / 100, S = win.get() - cost.get(), F = lose.get() - cost.get(), A = acc.get() / 100, T = tc.get();
        var evL = P * S + (1 - P) * F, evNow = Math.max(evL, 0);
        var evPI = P * Math.max(S, 0) + (1 - P) * Math.max(F, 0), evpi = evPI - evNow;
        var pPos = P * A + (1 - P) * (1 - A), pNeg = 1 - pPos;
        var pS_pos = pPos ? P * A / pPos : 0, pS_neg = pNeg ? P * (1 - A) / pNeg : 0;
        var evPos = pS_pos * S + (1 - pS_pos) * F, evNeg = pS_neg * S + (1 - pS_neg) * F;
        var evTest = pPos * Math.max(evPos, 0) + pNeg * Math.max(evNeg, 0) - T;
        var best = evTest > evNow ? 'Test first' : evL > 0 ? 'Launch now' : 'Don\'t launch';
        sL.set(evL, $, evL > 0 ? 'good' : 'bad'); sT.set(evTest, $, evTest > evNow ? 'good' : null); sI.set(evpi, $); sB.text(best, 'good');
        // draw the tree
        var W = 620, H = 300, g = svg(W, H, 'Decision tree');
        function node(x, y, kind, label) {
          if (kind === 'd') g.appendChild(s('rect', { x: x - 11, y: y - 11, width: 22, height: 22, rx: 3, class: 'dt-node dt-d' }));
          else if (kind === 'c') g.appendChild(s('circle', { cx: x, cy: y, r: 11, class: 'dt-node dt-c' }));
          else g.appendChild(s('polygon', { points: (x - 8) + ',' + (y - 9) + ' ' + (x - 8) + ',' + (y + 9) + ' ' + (x + 8) + ',' + y, class: 'dt-node dt-e' }));
          if (label) g.appendChild(s('text', { x: x + (kind === 'e' ? 14 : 0), y: kind === 'e' ? y + 4 : y - 16, class: 'dt-val', 'text-anchor': kind === 'e' ? 'start' : 'middle' }, label));
        }
        function edge(x1, y1, x2, y2, label, on) {
          g.appendChild(s('path', { d: 'M' + x1 + ' ' + y1 + ' C' + (x1 + 40) + ' ' + y1 + ',' + (x2 - 40) + ' ' + y2 + ',' + x2 + ' ' + y2, class: 'dt-edge' + (on ? ' on' : '') }));
          if (label) g.appendChild(s('text', { x: (x1 + x2) / 2, y: (y1 + y2) / 2 - 6, class: 'dt-lab', 'text-anchor': 'middle' }, label));
        }
        var bestKey = best === 'Test first' ? 't' : best === 'Launch now' ? 'l' : 'n';
        edge(30, 150, 200, 50, 'Launch now', bestKey === 'l'); edge(30, 150, 200, 150, 'Test (' + $(T) + ')', bestKey === 't'); edge(30, 150, 200, 255, 'Don\'t launch', bestKey === 'n');
        node(30, 150, 'd');
        edge(200, 50, 400, 20, Math.round(P * 100) + '% win', false); edge(200, 50, 400, 80, Math.round((1 - P) * 100) + '% fail', false);
        node(200, 50, 'c', 'EV ' + $(evL)); node(400, 20, 'e', $(S)); node(400, 80, 'e', $(F));
        edge(200, 150, 330, 120, Math.round(pPos * 100) + '% positive', false); edge(200, 150, 330, 190, Math.round(pNeg * 100) + '% negative', false);
        node(200, 150, 'c', 'EV ' + $(evTest));
        node(330, 120, 'e', (evPos > 0 ? 'launch → ' : 'stop → ') + $(Math.max(evPos, 0)) + ' (P(win) ' + Math.round(pS_pos * 100) + '%)');
        node(330, 190, 'e', (evNeg > 0 ? 'launch → ' : 'stop → ') + $(Math.max(evNeg, 0)) + ' (P(win) ' + Math.round(pS_neg * 100) + '%)');
        node(200, 255, 'e', '$0');
        o.chart.innerHTML = ''; o.chart.appendChild(h('div.chart-scroll', g));
        o.insight.innerHTML = 'Rolling back the tree: launching now is worth <b>' + $(evL) + '</b>; a test market is worth <b>' + $(evTest) + '</b> after its cost. Perfect information would be worth at most <b>' + $(evpi) + '</b>, so never pay more than that for any research. ' +
          (evTest > evNow ? 'The test pays for itself because a negative result lets you avoid the downside.' : 'Here the test does not change the decision enough to justify its cost.');
      }
      upd();
    }
  });

  /* ================= Monte Carlo revenue simulation ================= */
  MBA.registerWidget('monte-carlo', {
    title: 'Monte Carlo Revenue Simulation', icon: '🎲', cat: 'Decision Analysis',
    desc: 'Replace one guess with 2,000 possible futures and see the odds of losing money.',
    render: function (root) {
      var mkt = U.slider('Market size (customers)', { min: 10000, max: 1000000, step: 10000, value: 200000 }, run);
      var mktU = U.slider('Uncertainty in market size (±1 s.d.)', { min: 0, max: 50, value: 20, fmt: pc }, run);
      var sh = U.slider('Expected market share', { min: 0.5, max: 20, step: 0.5, value: 5, fmt: pc }, run);
      var shU = U.slider('Uncertainty in share (±1 s.d.)', { min: 0, max: 80, value: 40, fmt: pc }, run);
      var price = U.slider('Price per customer per year', { min: 10, max: 1000, step: 10, value: 200, fmt: $ }, run);
      var vc = U.slider('Variable cost per customer', { min: 0, max: 800, step: 10, value: 80, fmt: $ }, run);
      var fixed = U.slider('Fixed costs per year', { min: 0, max: 5000000, step: 50000, value: 1000000, fmt: $ }, run);
      var sM = U.stat('Median profit'), sP = U.stat('Chance of a loss'), s10 = U.stat('P10 (bad year)'), s90 = U.stat('P90 (good year)');
      var o = shell(root, [mkt, mktU, sh, shU, price, vc, fixed, h('button.btn.small', { type: 'button', onclick: run }, '🎲 Run 2,000 new simulations')], [sM, sP, s10, s90]);
      function run() {
        var N = 2000, res = [];
        for (var i = 0; i < N; i++) {
          var M = Math.max(0, mkt.get() * (1 + randn() * mktU.get() / 100));
          var S = Math.max(0, sh.get() / 100 * (1 + randn() * shU.get() / 100));
          res.push(M * S * (price.get() - vc.get()) - fixed.get());
        }
        res.sort(function (a, b) { return a - b; });
        var q = function (k) { return res[Math.floor(k * (N - 1))]; }, loss = res.filter(function (x) { return x < 0; }).length / N;
        var point = mkt.get() * sh.get() / 100 * (price.get() - vc.get()) - fixed.get();
        sM.set(q(0.5), $, q(0.5) >= 0 ? 'good' : 'bad'); sP.set(loss, U.pct, loss < 0.1 ? 'good' : loss < 0.3 ? 'warn' : 'bad'); s10.set(q(0.1), $, q(0.1) >= 0 ? 'good' : 'bad'); s90.set(q(0.9), $, 'good');
        var lo = res[0], hi = res[N - 1]; if (hi === lo) hi = lo + 1;
        var bins = 24, counts = new Array(bins).fill(0), w = (hi - lo) / bins;
        res.forEach(function (x) { counts[Math.min(bins - 1, Math.floor((x - lo) / w))]++; });
        U.barChart(o.chart, { bars: counts.map(function (c, k) { var mid = lo + w * (k + 0.5); return { label: k % 4 === 0 ? $(mid) : '', value: c, color: mid < 0 ? 'var(--bad)' : 'var(--accent)' }; }), yFmt: function (v) { return Math.round(v); }, label: 'Histogram of simulated profit' });
        o.insight.innerHTML = 'A single-point forecast says <b>' + $(point) + '</b>. The simulation says there is a <b>' + U.pct(loss, 0) + '</b> chance of losing money, and 80% of outcomes fall between ' + $(q(0.1)) + ' and ' + $(q(0.9)) + '. Red bars are losses. Widen the uncertainty sliders and watch the spread grow while the median barely moves.';
      }
      run();
    }
  });

  /* ================= Regression on editable data ================= */
  MBA.registerWidget('regression', {
    title: 'Regression Lab: Scatter & Best-Fit Line', icon: '📉', cat: 'Decision Analysis',
    desc: 'Edit the data and watch the slope, R² and forecast update.',
    render: function (root) {
      var data = [[10, 120], [15, 150], [20, 155], [25, 190], [30, 205], [35, 210], [40, 245], [45, 250], [50, 280], [55, 275]];
      var xName = h('input.dm-name', { value: 'Ad spend ($k)', 'aria-label': 'X variable name' }), yName = h('input.dm-name', { value: 'Sales ($k)', 'aria-label': 'Y variable name' });
      var table = h('div.reg-table');
      var pred = U.slider('Forecast Y at X =', { min: 0, max: 100, value: 60 }, upd);
      var sB = U.stat('Slope (b)'), sA = U.stat('Intercept (a)'), sR = U.stat('R²'), sF = U.stat('Forecast');
      function drawTable() {
        table.innerHTML = '';
        table.appendChild(h('div.reg-row.head', xName, yName, h('span')));
        data.forEach(function (d, i) {
          var x = h('input.num', { type: 'number', value: d[0], 'aria-label': 'X value row ' + (i + 1) }), y = h('input.num', { type: 'number', value: d[1], 'aria-label': 'Y value row ' + (i + 1) });
          x.addEventListener('input', function () { d[0] = parseFloat(x.value); upd(); }); y.addEventListener('input', function () { d[1] = parseFloat(y.value); upd(); });
          table.appendChild(h('div.reg-row', x, y, h('button.btn.ghost.small', { type: 'button', 'aria-label': 'Delete row ' + (i + 1), onclick: function () { if (data.length > 3) { data.splice(i, 1); drawTable(); upd(); } } }, '✕')));
        });
        table.appendChild(h('div.row-actions.start', h('button.btn.ghost.small', { type: 'button', onclick: function () { var l = data[data.length - 1]; data.push([l[0] + 5, l[1]]); drawTable(); upd(); } }, '+ Add row'),
          h('button.btn.ghost.small', { type: 'button', onclick: function () { data.push([5 + Math.round(Math.random() * 55), 60 + Math.round(Math.random() * 260)]); drawTable(); upd(); } }, '+ Random outlier')));
      }
      xName.addEventListener('input', upd); yName.addEventListener('input', upd);
      var o = shell(root, [table, pred], [sB, sA, sR, sF]);
      drawTable();
      function upd() {
        var pts = data.filter(function (d) { return isFinite(d[0]) && isFinite(d[1]); }), n = pts.length;
        if (n < 2) return;
        var mx = pts.reduce(function (a, d) { return a + d[0]; }, 0) / n, my = pts.reduce(function (a, d) { return a + d[1]; }, 0) / n;
        var sxy = 0, sxx = 0, syy = 0; pts.forEach(function (d) { sxy += (d[0] - mx) * (d[1] - my); sxx += (d[0] - mx) * (d[0] - mx); syy += (d[1] - my) * (d[1] - my); });
        var b = sxx ? sxy / sxx : 0, a = my - b * mx, r2 = sxx && syy ? (sxy * sxy) / (sxx * syy) : 0, X = pred.get(), Y = a + b * X;
        sB.set(b, function (v) { return v.toFixed(2); }); sA.set(a, function (v) { return v.toFixed(1); }); sR.set(r2, function (v) { return v.toFixed(2); }, r2 >= 0.7 ? 'good' : r2 >= 0.4 ? 'warn' : 'bad'); sF.set(Y, function (v) { return v.toFixed(0); });
        var xs = pts.map(function (d) { return d[0]; }).concat([X]), ys = pts.map(function (d) { return d[1]; }).concat([Y]);
        var x0 = Math.min.apply(null, xs.concat([0])), x1 = Math.max.apply(null, xs), y0 = Math.min.apply(null, ys.concat([0])), y1 = Math.max.apply(null, ys) * 1.08;
        var W = 560, H = 280, P = { l: 50, r: 16, t: 14, b: 40 };
        var SX = function (v) { return P.l + (v - x0) / (x1 - x0 || 1) * (W - P.l - P.r); }, SY = function (v) { return H - P.b - (v - y0) / (y1 - y0 || 1) * (H - P.t - P.b); };
        var g = svg(W, H, 'Scatter plot with regression line');
        for (var i = 0; i <= 4; i++) { var yv = y0 + (y1 - y0) * i / 4; g.appendChild(s('line', { x1: P.l, x2: W - P.r, y1: SY(yv), y2: SY(yv), class: 'grid' })); g.appendChild(s('text', { x: P.l - 6, y: SY(yv) + 4, class: 'tick', 'text-anchor': 'end' }, Math.round(yv))); }
        for (var j = 0; j <= 5; j++) { var xv = x0 + (x1 - x0) * j / 5; g.appendChild(s('text', { x: SX(xv), y: H - P.b + 16, class: 'tick', 'text-anchor': 'middle' }, Math.round(xv))); }
        g.appendChild(s('text', { x: (W + P.l) / 2, y: H - 4, class: 'axis-label', 'text-anchor': 'middle' }, xName.value));
        g.appendChild(s('text', { x: 12, y: H / 2, class: 'axis-label', 'text-anchor': 'middle', transform: 'rotate(-90 12 ' + H / 2 + ')' }, yName.value));
        pts.forEach(function (d) { g.appendChild(s('line', { x1: SX(d[0]), x2: SX(d[0]), y1: SY(d[1]), y2: SY(a + b * d[0]), class: 'resid' })); });
        g.appendChild(s('line', { x1: SX(x0), y1: SY(a + b * x0), x2: SX(x1), y2: SY(a + b * x1), class: 'fit' }));
        pts.forEach(function (d) { g.appendChild(s('circle', { cx: SX(d[0]), cy: SY(d[1]), r: 5, class: 'dot' })); });
        g.appendChild(s('circle', { cx: SX(X), cy: SY(Y), r: 7, class: 'marker', fill: 'var(--warn)' }));
        o.chart.innerHTML = ''; o.chart.appendChild(g);
        o.insight.innerHTML = 'Fitted line: <b>' + yName.value + ' ≈ ' + a.toFixed(1) + ' + ' + b.toFixed(2) + ' × ' + xName.value + '</b>. Each extra unit of X goes with about ' + b.toFixed(2) + ' more Y. R² = ' + r2.toFixed(2) + ' means the line explains ' + Math.round(r2 * 100) + '% of the variation. ' +
          (X > Math.max.apply(null, pts.map(function (d) { return d[0]; })) ? '⚠️ Your forecast is <b>outside the data range</b> — extrapolation is risky. ' : '') + 'Remember: a strong fit shows association, not causation. Add an outlier and see how one point can swing the slope.';
      }
      upd();
    }
  });

  /* ================= Hypothesis test (two means) ================= */
  MBA.registerWidget('hypothesis-test', {
    title: 'Hypothesis Test: Is the Difference Real?', icon: '⚖️', cat: 'Decision Analysis',
    desc: 'Compare two averages with a t-test and see the p-value and confidence interval.',
    render: function (root) {
      var m1 = U.numInput('Group A average (e.g. basket size, $)', 52, upd), s1 = U.numInput('Group A standard deviation', 18, upd), n1 = U.numInput('Group A sample size', 120, upd);
      var m2 = U.numInput('Group B average', 56, upd), s2 = U.numInput('Group B standard deviation', 20, upd), n2 = U.numInput('Group B sample size', 120, upd);
      var al = U.slider('Significance level (α)', { min: 1, max: 10, value: 5, fmt: pc }, upd);
      var sD = U.stat('Difference (B − A)'), sT = U.stat('t statistic'), sP = U.stat('p-value'), sC = U.stat('95%-style CI');
      var o = shell(root, [m1, s1, n1, m2, s2, n2, al], [sD, sT, sP, sC]);
      function upd() {
        var a = Math.max(2, n1.get()), b = Math.max(2, n2.get()), va = Math.pow(s1.get(), 2) / a, vb = Math.pow(s2.get(), 2) / b, se = Math.sqrt(va + vb);
        var d = m2.get() - m1.get(), t = se ? d / se : 0;
        var df = se ? Math.pow(va + vb, 2) / (va * va / (a - 1) + vb * vb / (b - 1)) : a + b - 2;
        var pval = tTwoSided(Math.abs(t), df), alpha = al.get() / 100, tc = tCrit(df, alpha), lo = d - tc * se, hi = d + tc * se, sig = pval < alpha;
        sD.set(d, function (v) { return (v >= 0 ? '+' : '') + v.toFixed(2); }); sT.set(t, function (v) { return v.toFixed(2); });
        sP.set(pval, function (v) { return v < 0.001 ? '< 0.001' : v.toFixed(3); }, sig ? 'good' : 'warn');
        sC.text('[' + lo.toFixed(2) + ', ' + hi.toFixed(2) + ']', sig ? 'good' : null);
        sC.querySelector('.stat-l').textContent = Math.round((1 - alpha) * 100) + '% confidence interval';
        // sampling distribution of the difference under H0, with observed t
        var pts = [], crit = [], lim = Math.max(4, Math.abs(t) + 1);
        for (var x = -lim; x <= lim + 1e-9; x += lim / 60) { var y = Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI); pts.push([x, y]); }
        U.lineChart(o.chart, { series: [{ name: 'If there were no real difference (H₀)', color: 'var(--muted)', points: pts, area: true }, { name: 'Rejection cut-offs', color: 'var(--bad)', points: [[tc, 0], [tc, 0.4]], dash: true }, { name: '', color: 'var(--bad)', points: [[-tc, 0], [-tc, 0.4]], dash: true }],
          xLabel: 't statistic', yMin: 0, yMax: 0.42, yFmt: function (v) { return v.toFixed(1); }, xFmt: function (v) { return v.toFixed(1); }, markers: [{ x: Math.max(-lim, Math.min(lim, t)), y: Math.exp(-t * t / 2) / Math.sqrt(2 * Math.PI), label: 'Your result t = ' + t.toFixed(2), color: sig ? 'var(--good)' : 'var(--warn)' }] });
        o.insight.innerHTML = sig
          ? '✅ p = ' + (pval < 0.001 ? '< 0.001' : pval.toFixed(3)) + ' is below α = ' + alpha + '. If there were truly no difference, a gap this big would happen less than ' + Math.round(alpha * 100) + '% of the time — so we <b>reject the null hypothesis</b>. Now ask: is a ' + Math.abs(d).toFixed(2) + ' difference big enough to matter commercially?'
          : '⏳ p = ' + pval.toFixed(3) + ' is above α = ' + alpha + ': the gap could plausibly be noise. The confidence interval includes 0. That is <b>not proof of no effect</b> — try a larger sample and watch the interval shrink.';
      }
      upd();
    }
  });

  /* ================= LBO returns ================= */
  MBA.registerWidget('lbo', {
    title: 'LBO Returns Model', icon: '🏦', cat: 'Investment',
    desc: 'Buy with debt, pay it down, sell later: where do private-equity returns come from?',
    render: function (root) {
      var e0 = U.slider('Entry EBITDA', { min: 1000000, max: 100000000, step: 1000000, value: 20000000, fmt: $ }, upd);
      var em = U.slider('Entry multiple (EV ÷ EBITDA)', { min: 4, max: 16, step: 0.5, value: 10, fmt: function (v) { return v + 'x'; } }, upd);
      var lev = U.slider('Debt at entry (× EBITDA)', { min: 0, max: 7, step: 0.5, value: 5, fmt: function (v) { return v + 'x'; } }, upd);
      var rate = U.slider('Interest rate on debt', { min: 2, max: 14, step: 0.5, value: 9, fmt: pc }, upd);
      var g = U.slider('EBITDA growth per year', { min: -5, max: 20, step: 0.5, value: 6, fmt: pc }, upd);
      var conv = U.slider('Cash conversion (FCF before interest ÷ EBITDA)', { min: 20, max: 90, value: 55, fmt: pc }, upd);
      var xm = U.slider('Exit multiple', { min: 4, max: 16, step: 0.5, value: 10, fmt: function (v) { return v + 'x'; } }, upd);
      var yrs = U.slider('Holding period (years)', { min: 3, max: 7, value: 5 }, upd);
      var sEq = U.stat('Equity invested'), sX = U.stat('Equity at exit'), sM = U.stat('MOIC'), sI = U.stat('IRR');
      var o = shell(root, [e0, em, lev, rate, g, conv, xm, yrs], [sEq, sX, sM, sI]);
      function upd() {
        var E = e0.get(), ev0 = E * em.get(), debt = Math.min(ev0, E * lev.get()), eq0 = ev0 - debt, cash = 0, debt0 = debt, n = yrs.get();
        for (var y = 1; y <= n; y++) {
          E *= 1 + g.get() / 100;
          var fcf = E * conv.get() / 100 - debt * rate.get() / 100;
          if (fcf >= 0) { var pay = Math.min(debt, fcf); debt -= pay; cash += fcf - pay; } else { debt -= fcf; }
        }
        var ev1 = E * xm.get(), eq1 = Math.max(0, ev1 - debt + cash), moic = eq0 ? eq1 / eq0 : 0, irr = moic > 0 ? Math.pow(moic, 1 / n) - 1 : -1;
        sEq.set(eq0, $); sX.set(eq1, $, eq1 > eq0 ? 'good' : 'bad'); sM.set(moic, function (v) { return v.toFixed(2) + 'x'; }, moic >= 2 ? 'good' : moic >= 1 ? 'warn' : 'bad'); sI.set(irr, U.pct, irr >= 0.2 ? 'good' : irr >= 0.1 ? 'warn' : 'bad');
        var growth = (E - e0.get()) * em.get(), mult = (xm.get() - em.get()) * E, delev = (debt0 - debt) + cash;
        U.barChart(o.chart, { waterfall: true, yFmt: $, label: 'Equity value bridge', bars: [
          { label: 'Equity in', value: eq0, total: true, color: 'var(--muted)' }, { label: 'EBITDA growth', value: growth }, { label: 'Multiple Δ', value: mult },
          { label: 'Debt paydown', value: delev }, { label: 'Equity out', value: eq1, total: true, color: eq1 >= eq0 ? 'var(--good)' : 'var(--bad)' }] });
        var parts = [['EBITDA growth', growth], ['multiple change', mult], ['debt paydown', delev]].sort(function (a, b) { return b[1] - a[1]; });
        o.insight.innerHTML = 'The fund puts in ' + $(eq0) + ' of equity and borrows ' + $(debt0) + '. After ' + n + ' years it gets back ' + $(eq1) + ': a <b>' + moic.toFixed(2) + 'x</b> multiple and <b>' + U.pct(irr) + '</b> IRR. The biggest driver is <b>' + parts[0][0] + '</b>. ' +
          (lev.get() >= 6 ? 'Heavy debt magnifies returns — and the risk of breaching covenants if EBITDA falls. Try −5% growth.' : 'Raise the debt slider and notice how IRR jumps while the equity cheque shrinks: that is leverage.');
      }
      upd();
    }
  });

  /* ================= FX exposure & hedging ================= */
  MBA.registerWidget('fx-exposure', {
    title: 'FX Exposure & Hedging', icon: '💱', cat: 'Global',
    desc: 'An Indian exporter is owed dollars in 90 days. How much should it hedge?',
    render: function (root) {
      var amt = U.slider('Invoice owed to you (USD)', { min: 10000, max: 5000000, step: 10000, value: 1000000, fmt: $ }, upd);
      var spot = U.slider('Spot rate today (₹ per $)', { min: 70, max: 100, step: 0.25, value: 84, fmt: function (v) { return '₹' + v.toFixed(2); } }, upd);
      var fwd = U.slider('90-day forward rate (₹ per $)', { min: 70, max: 100, step: 0.25, value: 84.75, fmt: function (v) { return '₹' + v.toFixed(2); } }, upd);
      var hr = U.slider('Share of the invoice you hedge', { min: 0, max: 100, step: 5, value: 50, fmt: pc }, upd);
      var fut = U.slider('Spot rate when the dollars arrive', { min: 70, max: 100, step: 0.25, value: 80, fmt: function (v) { return '₹' + v.toFixed(2); } }, upd);
      var cost = U.slider('Your rupee costs on this order', { min: 0, max: 400000000, step: 1000000, value: 76000000, fmt: function (v) { return '₹' + U.fmt(v / 1e7, { d: 2 }) + ' cr'; } }, upd);
      var sU = U.stat('Unhedged ₹ received'), sH = U.stat('Your ₹ received'), sM = U.stat('Your margin'), sW = U.stat('Worst case margin');
      var o = shell(root, [amt, spot, fwd, hr, fut, cost], [sU, sH, sM, sW]);
      var cr = function (v) { return '₹' + (v / 1e7).toFixed(2) + ' cr'; };
      function upd() {
        var A = amt.get(), F = fwd.get(), H = hr.get() / 100, S1 = fut.get(), C = cost.get();
        var inr = function (rate, hh) { return A * hh * F + A * (1 - hh) * rate; };
        var un = inr(S1, 0), mine = inr(S1, H), marg = (mine - C) / mine, worst = (inr(70, H) - C) / inr(70, H);
        sU.set(un, cr); sH.set(mine, cr, mine >= un ? 'good' : 'warn'); sM.set(marg, U.pct, marg > 0 ? 'good' : 'bad'); sW.set(worst, U.pct, worst > 0 ? 'good' : 'bad');
        var lines = [0, 0.5, 1].map(function (hh) { var pts = []; for (var r = 70; r <= 100; r += 1) pts.push([r, inr(r, hh)]); return pts; });
        U.lineChart(o.chart, { series: [{ name: 'No hedge', color: 'var(--bad)', points: lines[0] }, { name: '50% hedged', color: 'var(--warn)', points: lines[1], dash: true }, { name: 'Fully hedged', color: 'var(--good)', points: lines[2] }, { name: 'Your costs', color: 'var(--muted)', points: [[70, C], [100, C]], dash: true }],
          xLabel: 'Spot rate in 90 days (₹ per $)', yFmt: cr, xFmt: function (v) { return '₹' + Math.round(v); }, markers: [{ x: S1, y: mine, label: 'You: ' + cr(mine) }] });
        o.insight.innerHTML = 'This is <b>transaction exposure</b>: the rupee value of a dollar invoice moves with the exchange rate. Locking ' + Math.round(H * 100) + '% at the forward (₹' + F.toFixed(2) + ') narrows your outcomes: if the rupee strengthens to ₹70 your margin is still ' + U.pct(worst, 0) + '. Hedging removes the downside <i>and</i> the upside — its job is to protect the margin you priced, not to beat the market.';
      }
      upd();
    }
  });

  /* ================= Negotiation ZOPA ================= */
  MBA.registerWidget('negotiation-zopa', {
    title: 'Negotiation Planner: BATNA, ZOPA & Anchors', icon: '🤝', cat: 'Negotiation',
    desc: 'Map both walk-away points, see the bargaining zone, and test how anchors and extra issues change the deal.',
    render: function (root) {
      var sr = U.slider('Seller\'s walk-away price (reservation)', { min: 50000, max: 200000, step: 1000, value: 110000, fmt: $ }, upd);
      var br = U.slider('Buyer\'s walk-away price (reservation)', { min: 50000, max: 200000, step: 1000, value: 140000, fmt: $ }, upd);
      var sa = U.slider('Seller\'s opening ask (anchor)', { min: 50000, max: 250000, step: 1000, value: 165000, fmt: $ }, upd);
      var ba = U.slider('Buyer\'s opening offer (anchor)', { min: 20000, max: 200000, step: 1000, value: 100000, fmt: $ }, upd);
      var iv = U.slider('Extra issue: value to buyer of faster delivery', { min: 0, max: 40000, step: 1000, value: 15000, fmt: $ }, upd);
      var ic = U.slider('Extra issue: cost to seller of faster delivery', { min: 0, max: 40000, step: 1000, value: 5000, fmt: $ }, upd);
      var sZ = U.stat('ZOPA width'), sD = U.stat('Likely settlement'), sS = U.stat('Seller surplus'), sB = U.stat('Buyer surplus');
      var o = shell(root, [sr, br, sa, ba, iv, ic], [sZ, sD, sS, sB]);
      function upd() {
        var S = sr.get(), B = br.get(), A1 = sa.get(), A2 = ba.get(), extra = Math.max(0, iv.get() - ic.get()), zopa = B - S;
        var deal = Math.min(B, Math.max(S, (A1 + A2) / 2));
        sZ.set(zopa, $, zopa > 0 ? 'good' : 'bad');
        if (zopa < 0 && extra + zopa < 0) { sD.text('No deal', 'bad'); sS.text('—'); sB.text('—'); }
        else { sD.set(deal, $); sS.set(deal - S + (extra ? extra / 2 : 0), $, 'good'); sB.set(B - deal + (extra ? extra / 2 : 0), $, 'good'); }
        var lo = Math.min(S, B, A1, A2) * 0.9, hi = Math.max(S, B, A1, A2) * 1.05, pos = function (v) { return ((v - lo) / (hi - lo) * 100).toFixed(2) + '%'; };
        var bar = h('div.zopa-line', { role: 'img', 'aria-label': 'Bargaining range from ' + $(lo) + ' to ' + $(hi) },
          zopa > 0 ? h('div.zopa-band', { style: { left: pos(S), width: ((B - S) / (hi - lo) * 100).toFixed(2) + '%' } }, 'ZOPA') : null,
          h('span.zopa-pin.seller', { style: { left: pos(S) } }, h('b', 'Seller min'), $(S)),
          h('span.zopa-pin.buyer', { style: { left: pos(B) } }, h('b', 'Buyer max'), $(B)),
          h('span.zopa-pin.anchor.top', { style: { left: pos(A1) } }, h('b', 'Ask'), $(A1)),
          h('span.zopa-pin.anchor.top', { style: { left: pos(A2) } }, h('b', 'Offer'), $(A2)),
          (zopa >= 0 || extra + zopa >= 0) ? h('span.zopa-deal', { style: { left: pos(deal) } }, '◆') : null);
        o.chart.innerHTML = ''; o.chart.appendChild(h('div.chart-scroll', bar));
        o.insight.innerHTML = zopa > 0
          ? 'A deal is possible anywhere between ' + $(S) + ' and ' + $(B) + ' (the ZOPA). Split-the-difference between the anchors lands near <b>' + $(deal) + '</b> — move the seller\'s ask higher and watch the settlement follow: that is anchoring. ' + (extra > 0 ? 'Adding faster delivery creates <b>' + $(extra) + '</b> of new value, because it is worth more to the buyer than it costs the seller. That is integrative bargaining: grow the pie before you split it.' : 'Trading an issue that is cheap for you but valuable to them can expand the pie.')
          : extra + zopa >= 0 ? 'On price alone there is no ZOPA — but the extra issue creates enough value (' + $(extra) + ') to bridge the ' + $(-zopa) + ' gap. Package the deal.'
          : '❌ No ZOPA: the buyer\'s maximum is below the seller\'s minimum. Both sides do better with their BATNA unless someone finds new value or changes their walk-away point.';
      }
      upd();
    }
  });

  /* ================= Beer game (bullwhip) ================= */
  MBA.registerWidget('beer-game', {
    title: 'Beer Game: The Bullwhip Effect', icon: '🍺', cat: 'Operations',
    desc: 'Run one stage of a 4-stage supply chain for 20 weeks while the computer runs the others.',
    render: function (root) {
      var ROLES = ['Retailer', 'Wholesaler', 'Distributor', 'Factory'], WEEKS = 20, HOLD = 0.5, BACK = 1;
      var roleSel = h('select#bg-role', { 'aria-label': 'Choose your role' }, ROLES.map(function (r, i) { return h('option', { value: i }, r); }));
      var share = h('input#bg-share', { type: 'checkbox' });
      var orderIn = h('input#bg-order.num', { type: 'number', min: 0, value: 4, 'aria-label': 'Units to order this week' });
      var placeBtn = h('button.btn.small', { type: 'button' }, 'Place order →');
      var autoBtn = h('button.btn.ghost.small', { type: 'button' }, 'Let the computer finish');
      var resetBtn = h('button.btn.ghost.small', { type: 'button' }, 'Restart');
      var status = h('div.bg-status', { 'aria-live': 'polite' });
      var board = h('div.bg-board');
      var sW = U.stat('Week'), sC = U.stat('Your cost'), sT = U.stat('Team cost'), sB = U.stat('Bullwhip (order swing)');
      var controls = [h('label.field', h('span', 'You play'), roleSel), h('label.check', share, h('span', 'Share end-customer demand with everyone')),
        h('p.small', 'Each week: ship what you can, then order from the stage upstream. Orders take 1 week to arrive upstream; shipments take 2 weeks to arrive. Holding stock costs $0.50 a unit a week; unfilled orders (backlog) cost $1.'),
        board, h('div.row-actions.start', h('label.field', h('span', 'Order this week'), orderIn), placeBtn, autoBtn, resetBtn), status];
      var o = shell(root, controls, [sW, sC, sT, sB]);
      var st;
      function demand(w) { return w < 4 ? 4 : 8; }
      function reset() {
        st = { w: 0, me: +roleSel.value, share: share.checked, stages: ROLES.map(function () { return { inv: 12, back: 0, cost: 0, inbound: [4, 4], orderPipe: [4], lastIncoming: 4, exp: 4 }; }), hist: ROLES.map(function () { return []; }), cust: [] };
        placeBtn.disabled = false; autoBtn.disabled = false; orderIn.disabled = false; draw();
      }
      function aiOrder(k, incoming) {
        var sg = st.stages[k], signal = st.share ? demand(st.w) : incoming;
        sg.exp = 0.7 * sg.exp + 0.3 * signal;                                   // smoothed demand forecast
        var pipeline = sg.inbound.reduce(function (a, b) { return a + b; }, 0) + (sg.orderPipe ? sg.orderPipe.reduce(function (a, b) { return a + b; }, 0) : 0);
        var target = 12, net = sg.inv - sg.back;
        var pipeW = st.share ? 0.8 : 0.4;                                        // without information, players under-count the pipeline
        return Math.max(0, Math.round(sg.exp + 0.3 * (target - net) + pipeW * 0.5 * (sg.exp * 3 - pipeline)));
      }
      function step(myOrder) {
        var orders = [], incoming = demand(st.w);
        st.cust.push(incoming);
        for (var k = 0; k < 4; k++) {
          var sg = st.stages[k];
          sg.inv += sg.inbound.shift();                                          // receive shipment
          var need = incoming + sg.back, ship = Math.min(sg.inv, need);
          sg.inv -= ship; sg.back = need - ship; sg.shipped = ship; sg.lastIncoming = incoming;
          sg.cost += sg.inv * HOLD + sg.back * BACK;
          var ord = k === st.me ? myOrder : aiOrder(k, incoming);
          orders[k] = ord; st.hist[k].push(ord);
          if (k < 3) {                                                           // order reaches upstream next week; upstream ships it
            sg.orderPipe.push(ord); incoming = sg.orderPipe.shift();
          } else { sg.inbound.push(ord); }                                       // factory brews its own order (2-week delay)
          sg._ship = ship;
        }
        for (var u = 1; u < 4; u++) st.stages[u - 1].inbound.push(st.stages[u]._ship); // shipments move down one stage
        st.w++;
        if (st.w >= WEEKS) { placeBtn.disabled = true; autoBtn.disabled = true; orderIn.disabled = true; }
        draw();
      }
      function draw() {
        var me = st.stages[st.me], team = st.stages.reduce(function (a, g) { return a + g.cost; }, 0);
        sW.text(st.w + ' / ' + WEEKS); sC.set(me.cost, $); sT.set(team, $);
        var sd = function (a) { if (a.length < 2) return 0; var m = a.reduce(function (x, y) { return x + y; }, 0) / a.length; return Math.sqrt(a.reduce(function (x, y) { return x + (y - m) * (y - m); }, 0) / a.length); };
        var bw = sd(st.cust) ? sd(st.hist[3]) / sd(st.cust) : 0;
        sB.set(bw, function (v) { return v.toFixed(1) + 'x'; }, bw > 2 ? 'bad' : bw > 1.2 ? 'warn' : 'good');
        board.innerHTML = '';
        board.appendChild(h('div.bg-grid', h('b', ''), h('b', 'Stock'), h('b', 'Backlog'), h('b', 'Incoming order'), h('b', 'Arriving'),
          ROLES.map(function (r, k) {
            var g = st.stages[k];
            return [h('span' + (k === st.me ? '.me' : ''), (k === st.me ? '👉 ' : '') + r), h('span', String(g.inv)), h('span' + (g.back ? '.bad' : ''), String(g.back)), h('span', String(g.lastIncoming)), h('span', g.inbound.join(' → '))];
          })));
        var colors = ['var(--accent)', 'var(--accent-2)', 'var(--warn)', 'var(--bad)'];
        var series = [{ name: 'Customers', color: 'var(--ink)', points: st.cust.map(function (v, i) { return [i + 1, v]; }) }].concat(ROLES.map(function (r, k) { return { name: r + ' orders', color: colors[k], points: st.hist[k].map(function (v, i) { return [i + 1, v]; }) }; }));
        if (st.w >= 2) U.lineChart(o.chart, { series: series, xLabel: 'Week', yMin: 0, xMin: 1, label: 'Orders placed by each stage' });
        else { o.chart.innerHTML = ''; o.chart.appendChild(h('p.muted', 'The chart of orders appears after week 2.')); }
        status.textContent = st.w >= WEEKS ? 'Game over. Team cost ' + $(team) + '.' : 'Week ' + (st.w + 1) + ': customers want ' + (st.share || st.me === 0 ? demand(st.w) : '?') + ' units. You have ' + me.inv + ' in stock and ' + me.back + ' backlog.';
        o.insight.innerHTML = st.w < 6
          ? 'Customer demand doubles from 4 to 8 units in week 5 and then stays flat. Watch what happens to orders further up the chain.'
          : 'Customer demand changed once, by 4 units. The factory\'s orders swing <b>' + bw.toFixed(1) + 'x</b> as much as customer demand — that amplification is the <b>bullwhip effect</b>. It comes from delays, guessing demand from the orders you receive, and forgetting stock already on its way. ' + (st.share ? 'Sharing demand data usually shrinks the whip.' : 'Restart with demand sharing switched on and compare.');
      }
      placeBtn.addEventListener('click', function () { var v = Math.max(0, Math.round(+orderIn.value || 0)); step(v); });
      orderIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); placeBtn.click(); } });
      autoBtn.addEventListener('click', function () { while (st.w < WEEKS) step(aiOrder(st.me, st.stages[st.me].lastIncoming)); });
      resetBtn.addEventListener('click', reset); roleSel.addEventListener('change', reset); share.addEventListener('change', reset);
      reset();
    }
  });
})();
