/* Interactive simulators — growth, marketing, operations & experimentation. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, shell = MBA.widgetShell;
  var $ = function (v) { return U.fmt(v, { cur: '$', compact: true }); };
  var p = function (v) { return v + '%'; };

  /* ---------------- Funnel ---------------- */
  MBA.registerWidget('funnel', {
    title: 'Marketing & Sales Funnel', icon: '🫗', cat: 'Marketing',
    desc: 'Find the leakiest stage — fixing it is usually cheaper than buying more traffic.',
    render: function (root) {
      var v = U.slider('Visitors / month', { min: 1000, max: 500000, step: 1000, value: 50000 }, upd);
      var s1 = U.slider('Visitor → Sign-up / lead', { min: 0.5, max: 40, step: 0.5, value: 5, fmt: p }, upd);
      var s2 = U.slider('Lead → Activated / qualified', { min: 1, max: 90, value: 40, fmt: p }, upd);
      var s3 = U.slider('Activated → Paying customer', { min: 1, max: 90, value: 20, fmt: p }, upd);
      var val = U.slider('Revenue per customer', { min: 5, max: 2000, step: 5, value: 120, fmt: $ }, upd);
      var spend = U.slider('Marketing spend / month', { min: 0, max: 200000, step: 1000, value: 25000, fmt: $ }, upd);
      var sC = U.stat('Customers / month'), sR = U.stat('Revenue / month'), sCAC = U.stat('CAC'), sROAS = U.stat('ROAS');
      var o = shell(root, [v, s1, s2, s3, val, spend], [sC, sR, sCAC, sROAS]);
      function upd() {
        var V = v.get(), L = V * s1.get() / 100, A = L * s2.get() / 100, C = A * s3.get() / 100, R = C * val.get(), S = spend.get();
        sC.set(C, function (x) { return Math.round(x).toLocaleString(); }); sR.set(R, $, 'good');
        sCAC.set(C ? S / C : Infinity, $); sROAS.set(S ? R / S : Infinity, function (x) { return isFinite(x) ? x.toFixed(1) + 'x' : '∞'; }, R >= S ? 'good' : 'bad');
        o.chart.innerHTML = '';
        var stages = [['Visitors', V], ['Leads', L], ['Activated', A], ['Customers', C]], wrap = h('div.funnel');
        stages.forEach(function (st, i) {
          var w = Math.max(8, Math.sqrt(st[1] / V) * 100);
          wrap.appendChild(h('div.funnel-stage', { style: { width: w + '%', 'animation-delay': i * 90 + 'ms' } }, h('b', Math.round(st[1]).toLocaleString()), ' ' + st[0]));
        });
        o.chart.appendChild(wrap);
        var rates = [s1.get(), s2.get(), s3.get()], names = ['visitor → lead', 'lead → activation', 'activation → paying'];
        var worst = rates.indexOf(Math.min.apply(null, rates));
        o.insight.innerHTML = 'Each customer costs <b>' + $(C ? S / C : 0) + '</b> to acquire. Your weakest step is <b>' + names[worst] + '</b> — doubling that rate doubles customers with zero extra ad spend.';
      }
      upd();
    }
  });

  /* ---------------- TAM SAM SOM ---------------- */
  MBA.registerWidget('tam-sam-som', {
    title: 'Market Sizing: TAM · SAM · SOM', icon: '🎯', cat: 'Validation',
    desc: 'How big is the prize you can realistically win?',
    render: function (root) {
      var pop = U.numInput('Potential customers in the world/category', 5000000, upd);
      var spend = U.numInput('Annual spend per customer ($)', 600, upd);
      var reach = U.slider('% you can actually serve (geography, segment, channel)', { min: 1, max: 100, value: 20, fmt: p }, upd);
      var share = U.slider('% of that you can win in 3–5 years', { min: 0.1, max: 30, step: 0.1, value: 3, fmt: p }, upd);
      var sT = U.stat('TAM'), sS = U.stat('SAM'), sO = U.stat('SOM');
      var o = shell(root, [pop, spend, reach, share], [sT, sS, sO]);
      function upd() {
        var T = pop.get() * spend.get(), S = T * reach.get() / 100, O = S * share.get() / 100;
        sT.set(T, $); sS.set(S, $); sO.set(O, $, 'good');
        o.chart.innerHTML = '';
        var r1 = 120, r2 = Math.max(14, r1 * Math.sqrt(S / (T || 1))), r3 = Math.max(6, r1 * Math.sqrt(O / (T || 1)));
        o.chart.appendChild(h('div.circles',
          h('div.circle.c1', { style: { width: r1 * 2 + 'px', height: r1 * 2 + 'px' } }, h('span', 'TAM ' + $(T))),
          h('div.circle.c2', { style: { width: r2 * 2 + 'px', height: r2 * 2 + 'px' } }, r2 > 40 ? h('span', 'SAM') : null),
          h('div.circle.c3', { style: { width: r3 * 2 + 'px', height: r3 * 2 + 'px' } }, r3 > 22 ? h('span', 'SOM') : null)));
        o.insight.innerHTML = '<b>TAM</b> = everyone who could ever buy. <b>SAM</b> = the part your product and channels can reach. <b>SOM</b> = what you can realistically capture soon (' + $(O) + '/yr). Investors trust a careful <i>bottom-up</i> SOM more than a giant TAM.';
      }
      upd();
    }
  });

  /* ---------------- Retention ---------------- */
  MBA.registerWidget('retention', {
    title: 'Cohort Retention Curve', icon: '🧲', cat: 'Growth',
    desc: 'Does your curve flatten? That is the clearest sign of product–market fit.',
    render: function (root) {
      var d1 = U.slider('Drop-off in first month', { min: 5, max: 90, value: 45, fmt: p }, upd);
      var c = U.slider('Ongoing monthly churn after that', { min: 0, max: 20, step: 0.5, value: 3, fmt: p }, upd);
      var floor = U.slider('Long-term loyal floor', { min: 0, max: 60, value: 25, fmt: p }, upd);
      var exp = U.slider('Expansion revenue from retained users / month', { min: 0, max: 5, step: 0.5, value: 1, fmt: p }, upd);
      var s6 = U.stat('Users left at month 6'), s12 = U.stat('Users left at month 12'), sNRR = U.stat('Revenue retained at month 12 (NRR)');
      var o = shell(root, [d1, c, floor, exp], [s6, s12, sNRR]);
      function upd() {
        var pts = [[0, 100]], rv = [[0, 100]], u = 100 - d1.get(), F = floor.get(), C = c.get() / 100, rev = u;
        pts.push([1, u]); rv.push([1, rev]);
        for (var m = 2; m <= 18; m++) { u = F + (u - F) * (1 - C); if (u < F) u = Math.min(u, F); rev = u * Math.pow(1 + exp.get() / 100, m - 1); pts.push([m, u]); rv.push([m, rev]); }
        s6.set(pts[6][1], function (v) { return v.toFixed(0) + '%'; }); s12.set(pts[12][1], function (v) { return v.toFixed(0) + '%'; }, pts[12][1] > 20 ? 'good' : 'warn');
        sNRR.set(rv[12][1], function (v) { return v.toFixed(0) + '%'; }, rv[12][1] >= 100 ? 'good' : 'warn');
        U.lineChart(o.chart, { series: [{ name: 'Users retained %', color: 'var(--accent)', points: pts }, { name: 'Revenue retained %', color: 'var(--good)', points: rv, dash: true }], xLabel: 'Months since sign-up', yMin: 0, yFmt: function (v) { return Math.round(v) + '%'; } });
        o.insight.innerHTML = F > 0 && C > 0
          ? 'The curve <b>flattens</b> near ' + F + '% — a core group gets lasting value. That is a product–market-fit signal. If revenue retention beats 100%, existing customers grow faster than they leave ("negative churn") — the holy grail of SaaS.'
          : 'A curve that keeps sliding towards zero means you are filling a leaky bucket: fix the product before spending on growth.';
      }
      upd();
    }
  });

  /* ---------------- Viral loop ---------------- */
  MBA.registerWidget('viral-loop', {
    title: 'Viral Loop (K-factor)', icon: '🦠', cat: 'Growth',
    desc: 'Each user invites others — when does growth become self-sustaining?',
    render: function (root) {
      var seed = U.slider('Starting users', { min: 10, max: 10000, step: 10, value: 1000 }, upd);
      var inv = U.slider('Invites sent per user', { min: 0, max: 20, step: 0.5, value: 4 }, upd);
      var conv = U.slider('Invite conversion rate', { min: 1, max: 60, value: 20, fmt: p }, upd);
      var cyc = U.slider('Cycle time (days per loop)', { min: 1, max: 60, value: 7 }, upd);
      var sK = U.stat('K-factor'), sU = U.stat('Users after 90 days'), sM = U.stat('Viral multiplier');
      var o = shell(root, [seed, inv, conv, cyc], [sK, sU, sM]);
      function upd() {
        var K = inv.get() * conv.get() / 100, cycles = Math.floor(90 / cyc.get()), total = seed.get(), batch = seed.get(), pts = [[0, total]];
        for (var i = 1; i <= cycles; i++) { batch = batch * K; total += batch; pts.push([i * cyc.get(), total]); if (total > 1e12) break; }
        sK.set(K, function (v) { return v.toFixed(2); }, K >= 1 ? 'good' : K >= 0.5 ? 'warn' : null);
        sU.set(total, function (v) { return U.fmt(v, { compact: true }); });
        sM.text(K < 1 ? (1 / (1 - K)).toFixed(2) + 'x' : 'exponential', K >= 1 ? 'good' : null);
        U.lineChart(o.chart, { series: [{ name: 'Total users', color: 'var(--accent)', points: pts, area: true }], xLabel: 'Days', legend: true });
        o.insight.innerHTML = 'K = invites × conversion = <b>' + K.toFixed(2) + '</b>. ' + (K >= 1 ? 'Above 1, every cohort recruits a bigger one — true viral growth (rare and usually temporary).' : 'Below 1, virality is an <i>amplifier</i>: every paid user brings ' + (1 / (1 - K)).toFixed(2) + ' users in total. Shorter cycle times compound faster.');
      }
      upd();
    }
  });

  /* ---------------- A/B test ---------------- */
  MBA.registerWidget('ab-test', {
    title: 'A/B Test Significance', icon: '🧪', cat: 'Growth',
    desc: 'Is variant B really better, or did you get lucky?',
    render: function (root) {
      var na = U.numInput('Visitors A', 5000, upd), ca = U.numInput('Conversions A', 250, upd);
      var nb = U.numInput('Visitors B', 5000, upd), cb = U.numInput('Conversions B', 300, upd);
      var sA = U.stat('Rate A'), sB = U.stat('Rate B'), sL = U.stat('Lift'), sP = U.stat('Confidence');
      var o = shell(root, [na, ca, nb, cb], [sA, sB, sL, sP]);
      function cdf(z) { var t = 1 / (1 + 0.2316419 * Math.abs(z)), d = 0.3989423 * Math.exp(-z * z / 2), q = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return z > 0 ? 1 - q : q; }
      function upd() {
        var NA = Math.max(1, na.get()), NB = Math.max(1, nb.get()), A = ca.get() / NA, B = cb.get() / NB;
        var pp = (ca.get() + cb.get()) / (NA + NB), se = Math.sqrt(pp * (1 - pp) * (1 / NA + 1 / NB)), z = se ? (B - A) / se : 0, conf = 1 - 2 * (1 - cdf(Math.abs(z)));
        sA.set(A, U.pct); sB.set(B, U.pct); sL.set(A ? (B - A) / A : 0, function (v) { return (v >= 0 ? '+' : '') + U.pct(v); }, B > A ? 'good' : 'bad');
        sP.set(conf, U.pct, conf >= 0.95 ? 'good' : conf >= 0.8 ? 'warn' : 'bad');
        U.barChart(o.chart, { bars: [{ label: 'Variant A', value: A * 100, color: 'var(--muted)' }, { label: 'Variant B', value: B * 100, color: 'var(--accent)' }], yFmt: function (v) { return v.toFixed(1) + '%'; } });
        o.insight.innerHTML = conf >= 0.95
          ? '✅ Statistically significant at 95%: the difference is very unlikely to be chance. Ship B (and check it did not hurt other metrics).'
          : '⏳ Not significant yet (' + U.pct(conf, 0) + ' confidence). Keep the test running to a pre-set sample size — stopping early when it "looks good" is the #1 testing mistake.';
      }
      upd();
    }
  });

  /* ---------------- Five forces ---------------- */
  MBA.registerWidget('five-forces', {
    title: 'Porter\'s Five Forces Rater', icon: '🛡️', cat: 'Strategy',
    desc: 'Rate each force (1 = weak, 5 = intense) to judge how attractive an industry is.',
    render: function (root) {
      var names = ['Rivalry among competitors', 'Threat of new entrants', 'Threat of substitutes', 'Buyer power', 'Supplier power'];
      var short = ['Rivalry', 'New entrants', 'Substitutes', 'Buyers', 'Suppliers'];
      var sl = names.map(function (n, i) { return U.slider(n, { min: 1, max: 5, value: [4, 2, 3, 3, 2][i] }, upd); });
      var sS = U.stat('Industry attractiveness'), sW = U.stat('Biggest threat');
      var o = shell(root, sl, [sS, sW]);
      function upd() {
        var v = sl.map(function (s) { return s.get(); }), avg = v.reduce(function (a, b) { return a + b; }, 0) / 5, att = (5 - avg) / 4;
        sS.set(att, U.pct, att >= 0.5 ? 'good' : att >= 0.3 ? 'warn' : 'bad');
        sW.text(short[v.indexOf(Math.max.apply(null, v))]);
        U.radar(o.chart, { axes: short, values: v, max: 5, color: att >= 0.5 ? 'var(--good)' : 'var(--bad)' });
        o.insight.innerHTML = 'The smaller the shape, the more profit the industry leaves for its players. Airlines score high on almost every force — that is why they have struggled to earn their cost of capital; strong software platforms and luxury brands score low. Strategy = position yourself where forces are weakest, or reshape them.';
      }
      upd();
    }
  });

  /* ---------------- Idea score ---------------- */
  MBA.registerWidget('idea-score', {
    title: 'Idea Validation Scorecard', icon: '💡', cat: 'Validation',
    desc: 'Score your idea honestly. The weakest dimension is your next experiment.',
    render: function (root) {
      var crit = [
        ['Problem pain — is it urgent & frequent?', 'Talk to 10+ people who have the problem; ask about the last time it happened and what it cost them.'],
        ['Willingness to pay — will they pay now?', 'Run a pre-sale, deposit or pricing-page test.'],
        ['Market size & growth', 'Do a bottom-up SOM estimate.'],
        ['Reachability — can you find buyers cheaply?', 'Name 2 channels and test them with $100.'],
        ['Founder–market fit — unfair insight/skills', 'Partner with someone who has lived the problem.'],
        ['Differentiation vs alternatives', 'List what customers do today and why yours is 10x better on one thing.'],
        ['Unit economics potential', 'Estimate price, unit cost and CAC; check LTV:CAC ≥ 3.'],
        ['Why now? — timing / trend', 'Find the tech, regulation or behaviour shift that makes this possible now.']
      ];
      var sl = crit.map(function (c) { return U.slider(c[0], { min: 1, max: 5, value: 3 }, upd); });
      var sS = U.stat('Overall score'), sV = U.stat('Verdict');
      var o = shell(root, sl, [sS, sV]);
      function upd() {
        var v = sl.map(function (s) { return s.get(); }), tot = v.reduce(function (a, b) { return a + b; }, 0), sc = tot / 40;
        sS.set(sc * 100, function (x) { return Math.round(x) + '/100'; }, sc >= 0.75 ? 'good' : sc >= 0.55 ? 'warn' : 'bad');
        sV.text(sc >= 0.75 ? 'Build an MVP' : sc >= 0.55 ? 'Validate more' : 'Rethink / pivot', sc >= 0.75 ? 'good' : sc >= 0.55 ? 'warn' : 'bad');
        U.radar(o.chart, { axes: ['Pain', 'Pay', 'Market', 'Reach', 'Founder fit', 'Different', 'Unit econ', 'Why now'], values: v, max: 5 });
        var low = v.indexOf(Math.min.apply(null, v));
        o.insight.innerHTML = 'Weakest area: <b>' + crit[low][0].split(' —')[0] + '</b>. Next experiment: ' + crit[low][1];
      }
      upd();
    }
  });

  /* ---------------- Decision matrix ---------------- */
  MBA.registerWidget('decision-matrix', {
    title: 'Weighted Decision Matrix', icon: '🧭', cat: 'Leadership',
    desc: 'Compare options objectively: weight what matters, score each option.',
    render: function (root) {
      var crits = ['Impact', 'Cost (5 = cheap)', 'Speed', 'Risk (5 = low)', 'Strategic fit'];
      var opts = ['Option A', 'Option B', 'Option C'];
      var w = crits.map(function (c, i) { return U.slider('Weight: ' + c, { min: 0, max: 5, value: [5, 3, 3, 4, 4][i] }, upd); });
      var grid = h('div.dm-grid'), cells = [];
      var names = opts.map(function (n) { var inp = h('input.dm-name', { value: n, 'aria-label': 'Option name' }); inp.addEventListener('input', upd); return inp; });
      grid.appendChild(h('span')); names.forEach(function (n) { grid.appendChild(n); });
      crits.forEach(function (c, i) {
        grid.appendChild(h('span.dm-crit', c)); cells[i] = [];
        opts.forEach(function (_, j) { var s = h('input.num', { type: 'number', min: 1, max: 5, value: [[5, 3, 4], [2, 4, 3], [2, 5, 4], [3, 4, 2], [5, 3, 4]][i][j], 'aria-label': c + ' score' }); s.addEventListener('input', upd); cells[i][j] = s; grid.appendChild(s); });
      });
      var sW = U.stat('Winner'), sM = U.stat('Margin');
      var o = shell(root, w.concat([h('p.small', 'Score each option 1–5:'), grid]), [sW, sM]);
      function upd() {
        var tot = opts.map(function (_, j) { return crits.reduce(function (a, _, i) { return a + w[i].get() * (+cells[i][j].value || 0); }, 0); });
        var max = Math.max.apply(null, tot), wi = tot.indexOf(max), sorted = tot.slice().sort(function (a, b) { return b - a; });
        sW.text(names[wi].value, 'good'); sM.text(sorted[0] ? U.pct((sorted[0] - sorted[1]) / sorted[0], 0) : '—');
        U.barChart(o.chart, { bars: tot.map(function (t, j) { return { label: names[j].value, value: t, color: j === wi ? 'var(--good)' : 'var(--muted)' }; }) });
        o.insight.innerHTML = (sorted[0] - sorted[1]) / (sorted[0] || 1) < 0.08 ? 'Too close to call — the matrix says <b>gather more information</b> on the criteria with the highest weight.' : '<b>' + names[wi].value + '</b> wins. Sanity check: would you still pick it if you changed the top weight by one point? If not, the decision is fragile.';
      }
      upd();
    }
  });

  /* ---------------- SWOT ---------------- */
  function listBuilder(storeKey, sections, cls) {
    return function (root) {
      var s = MBA.store.get(), data = s.lab[storeKey] || {};
      var grid = h('div.' + cls);
      sections.forEach(function (sec) {
        var ta = h('textarea', { placeholder: sec.ph, 'aria-label': sec.name, rows: 5 }); ta.value = data[sec.key] || '';
        ta.addEventListener('input', function () { data[sec.key] = ta.value; s.lab[storeKey] = data; MBA.store.save(); });
        grid.appendChild(h('div.box.' + sec.key, { style: sec.area ? { 'grid-area': sec.area } : null }, h('b', sec.name), sec.help ? h('small', sec.help) : null, ta));
      });
      root.appendChild(grid);
      root.appendChild(h('div.row-actions',
        h('button.btn.ghost', { onclick: function () { window.print(); } }, '🖨️ Print / save as PDF'),
        h('button.btn.ghost', { onclick: function () { if (confirm('Clear all boxes?')) { s.lab[storeKey] = {}; MBA.store.save(); root.innerHTML = ''; MBA.widgets[storeKey].render(root); } } }, 'Clear')));
      root.appendChild(h('p.w-insight', 'Saved automatically in this browser.'));
    };
  }
  MBA.registerWidget('swot', {
    title: 'SWOT Builder', icon: '🧩', cat: 'Strategy', desc: 'Internal strengths & weaknesses vs. external opportunities & threats.',
    render: listBuilder('swot', [
      { key: 's', name: 'Strengths (internal)', ph: 'What do we do better than anyone? Unique assets?' },
      { key: 'w', name: 'Weaknesses (internal)', ph: 'Where do we lose deals? What do we lack?' },
      { key: 'o', name: 'Opportunities (external)', ph: 'Trends, unmet needs, regulation changes…' },
      { key: 't', name: 'Threats (external)', ph: 'Competitors, substitutes, macro risks…' }
    ], 'swot-grid')
  });
  MBA.registerWidget('bmc', {
    title: 'Business Model Canvas', icon: '🗺️', cat: 'Business Model', desc: 'Map your whole business on one page (Osterwalder).',
    render: listBuilder('bmc', [
      { key: 'kp', name: 'Key Partners', ph: 'Suppliers, allies…', area: 'kp' },
      { key: 'ka', name: 'Key Activities', ph: 'What must we do well?', area: 'ka' },
      { key: 'kr', name: 'Key Resources', ph: 'People, IP, capital…', area: 'kr' },
      { key: 'vp', name: 'Value Proposition', ph: 'What job do we do for whom?', area: 'vp' },
      { key: 'cr', name: 'Customer Relationships', ph: 'Self-serve, personal, community…', area: 'cr' },
      { key: 'ch', name: 'Channels', ph: 'How we reach & deliver', area: 'ch' },
      { key: 'cs', name: 'Customer Segments', ph: 'Who exactly?', area: 'cs' },
      { key: 'co', name: 'Cost Structure', ph: 'Biggest costs, fixed vs variable', area: 'co' },
      { key: 'rs', name: 'Revenue Streams', ph: 'How & how much they pay', area: 'rs' }
    ], 'bmc-grid')
  });
  MBA.registerWidget('okr', {
    title: 'OKR Builder', icon: '🎯', cat: 'Leadership', desc: 'One inspiring Objective, 3 measurable Key Results (Andy Grove / John Doerr).',
    render: listBuilder('okr', [
      { key: 'o', name: 'Objective', help: 'Qualitative, inspiring, time-bound', ph: 'e.g. Become the go-to tool for independent cafés in Pune by Q4' },
      { key: 'k1', name: 'Key Result 1', help: 'Number from X to Y', ph: 'e.g. Grow paying cafés from 40 to 150' },
      { key: 'k2', name: 'Key Result 2', ph: 'e.g. Raise 90-day retention from 60% to 80%' },
      { key: 'k3', name: 'Key Result 3', ph: 'e.g. Cut onboarding time from 3 days to 1 hour' },
      { key: 'in', name: 'Initiatives (the work)', ph: 'Projects you will run to move the KRs' }
    ], 'okr-grid')
  });
})();
