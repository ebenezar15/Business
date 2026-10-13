/* B-school teaching features: case discussion, company simulation, spaced repetition,
   placement test, capstone plan and career paths. Registers pages on MBA.pages. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, RD = MBA.render, P = MBA.pages;

  function pageHead(icon, title, sub) { return h('header.page-head', h('div.page-icon', icon), h('div', h('h1', title), sub ? h('p.lead', sub) : null)); }
  function store() { return MBA.store.get(); }
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); }
  function findCase(id) { return MBA.cases.filter(function (c) { return c.id === id; })[0]; }
  function findChallenge(id) { return MBA.challenges.filter(function (c) { return c.id === id; })[0]; }

  /* =====================================================================
     1. CASE DISCUSSION MODE  (#/case/:id/discuss)
     ===================================================================== */
  var RUBRIC = [
    { k: 'frame', name: 'Problem framing', levels: ['Restated the facts', 'Named the decision', 'Named the decision and what is at stake', 'Sharp framing: decision, stakes, constraints and the real tension'] },
    { k: 'evidence', name: 'Use of evidence', levels: ['No facts from the case', 'One or two facts', 'Relevant facts and numbers', 'Facts weighed for reliability, with numbers'] },
    { k: 'tradeoffs', name: 'Trade-offs', levels: ['Only one side considered', 'Mentioned a downside', 'Compared options on clear criteria', 'Explicit criteria, weighed, with what you give up'] },
    { k: 'rec', name: 'Recommendation', levels: ['No clear choice', 'A choice, vaguely argued', 'Clear choice with reasons', 'Clear, actionable choice with first steps and owner'] },
    { k: 'risks', name: 'Risks & mitigation', levels: ['No risks', 'Risks listed', 'Risks with mitigations', 'Risks, mitigations and signals that would change your mind'] }
  ];
  var MIN = { frame: 40, rec: 60, risks: 40 };

  P.discuss = function (id) {
    var c = findCase(id); if (!c) return P.notFound();
    var s = store(); s.discuss[id] = s.discuss[id] || { step: 0 }; var D = s.discuss[id];
    var page = h('div.page.narrow.discuss', h('nav.crumbs', h('a', { href: '#/cases' }, 'Case library'), ' / ', h('a', { href: '#/case/' + id }, c.company), ' / ', h('span', 'Discussion')),
      h('p.eyebrow', 'Case discussion · ' + (c.industry || '') + ' · ' + (c.year || '')), h('h1', c.company + ': ' + c.title),
      h('p.lead', 'Work through the case like a classroom discussion. Each stage unlocks only after you commit your thinking in writing.'));
    var steps = ['Frame', 'Recommend', 'Trade-offs', 'Outcome', 'Self-score'];
    var rail = h('ol.disc-rail', { 'aria-label': 'Discussion progress' });
    var area = h('div.disc-area');
    page.appendChild(rail); page.appendChild(area);

    function save() { MBA.store.save(); }
    function paintRail() {
      rail.innerHTML = '';
      steps.forEach(function (n, i) { rail.appendChild(h('li' + (i < D.step ? '.done' : i === D.step ? '.cur' : ''), { 'aria-current': i === D.step ? 'step' : null }, h('span', String(i + 1)), n)); });
    }
    function writeBox(key, label, help, placeholder) {
      var tid = 'disc-' + key;
      var ta = h('textarea.work', { id: tid, rows: 6, placeholder: placeholder });
      ta.value = D[key] || '';
      var count = h('small.disc-count');
      function cnt() { var n = ta.value.trim().length; count.textContent = n + ' / ' + MIN[key] + ' characters minimum'; count.classList.toggle('ok', n >= MIN[key]); }
      ta.addEventListener('input', function () { D[key] = ta.value; save(); cnt(); });
      cnt();
      return { node: h('div.disc-write', h('label.disc-label', { for: tid }, label), h('p.muted', help), ta, count), ta: ta };
    }
    function gate(btnText, check, onOk) {
      var msg = h('p.disc-msg', { role: 'alert' });
      var b = h('button.btn', { type: 'button', onclick: function () { var e = check(); if (e) { msg.textContent = e; return; } msg.textContent = ''; onOk(); } }, btnText);
      return h('div.row-actions.start', b, msg);
    }
    function situation() { return h('section.block', h('div.block-tag', '📍 The situation'), RD.html(c.situation)); }
    function optionsBlock(withResults) {
      return h('section.block', h('div.block-tag', '🧭 Options on the table'), h('h3', c.question),
        h('ol.disc-opts', (c.options || []).map(function (o, i) {
          return h('li' + (D.pick === i ? '.picked' : ''), h('span', { html: o.text }),
            withResults ? h('div.disc-result.' + (o.best ? 'good' : 'meh'), h('b', o.best ? 'Strongest option. ' : 'Likely result: '), h('span', { html: o.result })) : null);
        })));
    }
    function draw() {
      paintRail(); area.innerHTML = '';
      if (D.step === 0) {
        var w = writeBox('frame', 'Stage 1 — Frame the problem', 'What is the real decision here, who must make it, and what is at stake if they get it wrong? Do not recommend anything yet.', 'The decision is whether… The stakes are… The key tension is…');
        area.appendChild(situation()); area.appendChild(w.node);
        area.appendChild(gate('Commit framing and continue →', function () { return (D.frame || '').trim().length < MIN.frame ? 'Write at least ' + MIN.frame + ' characters to frame the problem.' : ''; }, function () { D.step = 1; save(); draw(); }));
      } else if (D.step === 1) {
        area.appendChild(situation());
        area.appendChild(h('section.block.disc-yours', h('div.block-tag', 'Your framing'), h('p', D.frame)));
        area.appendChild(optionsBlock(false));
        var radios = h('div.disc-pick', { role: 'radiogroup', 'aria-label': 'Which option do you recommend?' }, (c.options || []).map(function (o, i) {
          var r = h('input', { type: 'radio', name: 'disc-pick', value: i }); r.checked = D.pick === i;
          r.addEventListener('change', function () { D.pick = i; save(); });
          return h('label', r, h('span', 'Option ' + (i + 1)));
        }).concat([(function () { var r = h('input', { type: 'radio', name: 'disc-pick', value: -1 }); r.checked = D.pick === -1; r.addEventListener('change', function () { D.pick = -1; save(); }); return h('label', r, h('span', 'Something else')); })()]));
        var w2 = writeBox('rec', 'Stage 2 — Your recommendation', 'Pick an option (or propose your own) and argue for it with evidence from the case: facts, numbers, what the company is good at.', 'I recommend… because (1)… (2)… The first three steps are…');
        area.appendChild(h('div.disc-write', h('p.disc-label', 'Which option do you recommend?'), radios));
        area.appendChild(w2.node);
        area.appendChild(gate('Commit recommendation →', function () {
          if (D.pick == null) return 'Choose an option first.';
          return (D.rec || '').trim().length < MIN.rec ? 'Argue your case in at least ' + MIN.rec + ' characters.' : '';
        }, function () { D.step = 2; save(); draw(); }));
      } else if (D.step === 2) {
        area.appendChild(h('section.block.disc-yours', h('div.block-tag', 'Your recommendation'), h('p', D.rec)));
        var w3 = writeBox('risks', 'Stage 3 — Trade-offs and risks', 'What do you give up by choosing this? What could go wrong, how would you reduce the risk, and what signal would make you change course?', 'We give up… The biggest risk is… We would mitigate it by… We would change course if…');
        area.appendChild(w3.node);
        area.appendChild(gate('Commit and reveal what happened →', function () { return (D.risks || '').trim().length < MIN.risks ? 'Write at least ' + MIN.risks + ' characters on trade-offs and risks.' : ''; }, function () {
          D.step = 3; save();
          var first = !s.cases[id]; var best = D.pick >= 0 && c.options[D.pick] && c.options[D.pick].best;
          s.cases[id] = Math.max(s.cases[id] || 0, best ? 2 : 1); save();
          if (first) MBA.store.addXP(best ? 30 : 15, 'Case decided');
          draw();
        }));
      } else if (D.step === 3) {
        area.appendChild(optionsBlock(true));
        area.appendChild(h('section.block', h('div.block-tag', '📈 What actually happened'), RD.html(c.whatHappened),
          c.lessons ? h('div', h('h3', '🎓 Lessons'), h('ul', c.lessons.map(function (l) { return h('li', { html: l }); }))) : null,
          c.frameworks ? h('p', h('b', 'Frameworks: '), c.frameworks.join(' · ')) : null));
        area.appendChild(h('section.block.disc-yours', h('div.block-tag', 'Your thinking, for comparison'),
          h('p', h('b', 'Framing: '), D.frame), h('p', h('b', 'Recommendation (' + (D.pick >= 0 ? 'option ' + (D.pick + 1) : 'your own') + '): '), D.rec), h('p', h('b', 'Risks: '), D.risks)));
        area.appendChild(h('div.row-actions.start', h('button.btn', { type: 'button', onclick: function () { D.step = 4; save(); draw(); } }, 'Score my thinking →')));
      } else {
        D.scores = D.scores || {};
        var total = h('b.big-score');
        var tbl = h('div.rubric', RUBRIC.map(function (r) {
          return h('fieldset.rubric-row', h('legend', r.name), h('div.rubric-levels', r.levels.map(function (lv, i) {
            var inp = h('input', { type: 'radio', name: 'rb-' + r.k, value: i + 1 }); inp.checked = D.scores[r.k] === i + 1;
            inp.addEventListener('change', function () { D.scores[r.k] = i + 1; save(); sum(); });
            return h('label', inp, h('span', h('b', String(i + 1)), ' ' + lv));
          })));
        }));
        function sum() {
          var n = RUBRIC.filter(function (r) { return D.scores[r.k]; }).length, t = RUBRIC.reduce(function (a, r) { return a + (D.scores[r.k] || 0); }, 0);
          total.textContent = t + ' / 20';
          if (n === RUBRIC.length && !D.done) { D.done = 1; save(); MBA.store.addXP(20 + t * 2, 'Case discussion'); if (t >= 16) U.confetti(); }
        }
        area.appendChild(h('section.block', h('div.block-tag', '🧮 Self-score against the rubric'), h('p.muted', 'Be honest: compare your written answers above with what happened and with the lessons. Pick the level that best describes your work on each line.'), tbl, h('p', 'Total: ', total)));
        area.appendChild(h('div.row-actions.start', h('a.btn.ghost', { href: '#/cases' }, '← Back to cases'), U.confirmBtn('Start this discussion again', 'Click again to clear your answers', function () { s.discuss[id] = { step: 0 }; D = s.discuss[id]; save(); draw(); })));
        sum();
      }
    }
    draw();
    return page;
  };

  /* =====================================================================
     2. COMPANY SIMULATION  (#/sim)
     ===================================================================== */
  var SIM = { quarters: 8, unitCost: 22, salary: 30000, hireCost: 12000, overhead: 150000, capPerHead: 1500, baseDemand: 60000 };
  var RIVALS = [
    { name: 'BudgetBrew', style: 'Low price, lean team', color: 'var(--accent-2)' },
    { name: 'Lux Labs', style: 'Premium quality, high price', color: 'var(--warn)' },
    { name: 'Rocket Co', style: 'Buys growth with marketing', color: 'var(--bad)' }
  ];
  function newSim() {
    return {
      q: 0, done: false, over: null,
      me: { name: 'Your company', cash: 2000000, heads: 15, price: 60, quality: 1, adstock: 150000, own: 1, raised: 0 },
      rivals: [
        { cash: 3000000, heads: 14, price: 45, quality: 0.9, adstock: 100000 },
        { cash: 4000000, heads: 22, price: 85, quality: 1.3, adstock: 150000 },
        { cash: 6000000, heads: 18, price: 62, quality: 1.0, adstock: 350000 }
      ],
      hist: []
    };
  }
  function simValuation(st) {
    var last = st.hist[st.hist.length - 1], prev = st.hist[st.hist.length - 2];
    var run = last ? last.me.rev * 4 : 1000000, growth = last && prev && prev.me.rev ? last.me.rev / prev.me.rev - 1 : 0.1;
    var mult = Math.max(1.5, Math.min(8, 3 + growth * 12));
    return Math.max(4000000, run * mult);
  }
  function rivalMoves(st) {
    var me = st.me, R = st.rivals;
    // BudgetBrew: always undercut the cheapest price by ~10%, tiny marketing
    var minP = Math.min(me.price, R[1].price, R[2].price); R[0].price = Math.max(30, Math.round(minP * 0.9)); R[0].mkt = 60000; R[0].hire = R[0].cash > 1500000 ? 1 : 0;
    // Lux Labs: premium, invests in quality, keeps price high
    R[1].price = Math.max(70, Math.round(Math.max(me.price, 60) * 1.35)); R[1].mkt = 150000; R[1].hire = R[1].cash > 2000000 ? 2 : 0;
    // Rocket Co: heavy marketing while cash lasts, prices near the player
    R[2].price = Math.max(35, Math.round(me.price * 0.98)); R[2].mkt = R[2].cash > 1500000 ? 450000 : 120000; R[2].hire = R[2].cash > 2500000 ? 3 : -1;
    if (R[2].cash < 800000 && !R[2].raised) { R[2].cash += 4000000; R[2].raised = 1; }
  }
  function simulateQuarter(st, dec) {
    var me = st.me, all = [me].concat(st.rivals);
    me.price = dec.price; me.mkt = dec.mkt; me.hire = dec.hire;
    if (dec.raise > 0) {
      var pre = simValuation(st), post = pre + dec.raise;
      me.own *= pre / post; me.cash += dec.raise; me.raised += dec.raise; st.lastRaise = { amount: dec.raise, pre: pre, dil: dec.raise / post };
    } else st.lastRaise = null;
    rivalMoves(st);
    var noise = 1 + 0.04 * Math.sin((st.q + 1) * 2.3);
    all.forEach(function (c) {
      c.heads = Math.max(3, c.heads + (c.hire || 0));
      c.quality = Math.min(2.2, c.quality + 0.004 * c.heads);
      c.adstock = 0.55 * c.adstock + (c.mkt || 0);
    });
    var avgP = all.reduce(function (a, c) { return a + c.price; }, 0) / all.length;
    var demand = SIM.baseDemand * Math.pow(1.07, st.q) * Math.pow(avgP / 60, -0.7) * noise;
    var attract = all.map(function (c) { return Math.pow(c.quality, 1.3) * Math.pow(Math.max(c.adstock, 1000) / 100000, 0.35) * Math.pow(c.price / 60, -2.2); });
    var sumA = attract.reduce(function (a, b) { return a + b; }, 0);
    var unitCost = SIM.unitCost * Math.pow(0.97, st.q);
    var rows = all.map(function (c, i) {
      var want = demand * attract[i] / sumA, cap = c.heads * SIM.capPerHead, units = Math.min(want, cap);
      var rev = units * c.price, cogs = units * unitCost, staff = c.heads * SIM.salary + Math.max(0, c.hire || 0) * SIM.hireCost;
      var ebitda = rev - cogs - staff - (c.mkt || 0) - SIM.overhead;
      c.cash += ebitda;
      return { units: units, lost: want - units, rev: rev, ebitda: ebitda, cash: c.cash, share: 0, heads: c.heads, price: c.price, mkt: c.mkt || 0, quality: c.quality };
    });
    var totU = rows.reduce(function (a, r) { return a + r.units; }, 0);
    rows.forEach(function (r) { r.share = totU ? r.units / totU : 0; });
    st.hist.push({ q: st.q + 1, me: rows[0], rivals: rows.slice(1), raise: st.lastRaise });
    st.q++;
    if (me.cash < 0) { st.done = true; st.over = 'bankrupt'; }
    else if (st.q >= SIM.quarters) st.done = true;
  }
  P.sim = function () {
    var s = store(); if (!s.sim) s.sim = newSim(); var st = s.sim;
    var page = h('div.page.sim', pageHead('🏭', 'Company simulation', 'Run a consumer subscription company for 8 quarters against three computer-run rivals. Each quarter set price, marketing, hiring and fundraising — then see your P&L, cash and market share.'));
    var area = h('div'); page.appendChild(area);
    function save() { MBA.store.save(); }
    function money(v) { return U.fmt(v, { cur: '$', compact: true }); }
    function draw() {
      area.innerHTML = '';
      var last = st.hist[st.hist.length - 1], me = st.me;
      var kpis = h('div.stats.sim-kpis',
        stat('Quarter', st.done ? 'Finished' : (st.q + 1) + ' of ' + SIM.quarters),
        stat('Cash', money(me.cash), me.cash < 500000 ? 'bad' : 'good'),
        stat('Market share', last ? U.pct(last.me.share) : '—'),
        stat('Your ownership', U.pct(me.own)));
      area.appendChild(kpis);
      if (!st.done) area.appendChild(decisionForm());
      if (st.hist.length) area.appendChild(results());
      if (st.done) area.appendChild(scorecard());
      area.appendChild(h('div.row-actions.start', U.confirmBtn('Restart simulation', 'Click again to restart from quarter 1', function () { s.sim = newSim(); st = s.sim; save(); draw(); })));
    }
    function stat(l, v, tone) { return h('div.stat' + (tone ? '.' + tone : ''), h('span.stat-l', l), h('b.stat-v', v)); }
    function decisionForm() {
      var me = st.me, val = simValuation(st);
      var price = U.slider('Price per subscriber per quarter', { min: 30, max: 120, value: me.price, fmt: money }, preview);
      var mkt = U.slider('Marketing spend this quarter', { min: 0, max: 800000, step: 10000, value: me.mkt != null ? me.mkt : 150000, fmt: money }, preview);
      var hire = U.slider('Hire (+) or let go (−) people', { min: -5, max: 15, value: 2, fmt: function (v) { return (v > 0 ? '+' : '') + v; } }, preview);
      var raise = U.slider('Raise equity this quarter', { min: 0, max: 6000000, step: 250000, value: 0, fmt: function (v) { return v ? money(v) : 'No raise'; } }, preview);
      var pv = h('div.sim-preview', { 'aria-live': 'polite' });
      function preview() {
        var heads = Math.max(3, me.heads + hire.get()), burn = heads * SIM.salary + Math.max(0, hire.get()) * SIM.hireCost + mkt.get() + SIM.overhead;
        var dil = raise.get() ? raise.get() / (val + raise.get()) : 0;
        pv.innerHTML = '';
        pv.appendChild(h('p', h('b', 'Fixed spend this quarter: '), money(burn), ' (', heads + ' people, capacity ' + (heads * SIM.capPerHead).toLocaleString() + ' subscribers)'));
        pv.appendChild(h('p', h('b', 'Investors value you at '), money(val), ' pre-money.', raise.get() ? ' Raising ' + money(raise.get()) + ' sells ' + U.pct(dil) + ' of the company; you would own ' + U.pct(me.own * (1 - dil)) + '.' : ''));
      }
      preview();
      return h('section.block.sim-form', h('h2', 'Quarter ' + (st.q + 1) + ' decisions'),
        h('div.w-grid', h('div.w-controls', price, mkt, hire, raise), h('div', pv, h('p.small.muted', 'Rivals: ' + RIVALS.map(function (r) { return r.name + ' (' + r.style + ')'; }).join(' · ')))),
        h('div.row-actions.start', h('button.btn', { type: 'button', onclick: function () {
          simulateQuarter(st, { price: price.get(), mkt: mkt.get(), hire: hire.get(), raise: raise.get() }); save();
          if (st.done) MBA.store.addXP(st.over ? 20 : 60, 'Simulation finished');
          draw();
        } }, 'Run quarter ' + (st.q + 1) + ' →')));
    }
    function results() {
      var last = st.hist[st.hist.length - 1], names = ['You'].concat(RIVALS.map(function (r) { return r.name; }));
      var rows = [last.me].concat(last.rivals);
      var tbl = h('div.table-wrap', h('table.compare', h('thead', h('tr', ['Company', 'Price', 'Subscribers', 'Revenue', 'EBITDA', 'Cash', 'Share'].map(function (x) { return h('th', x); }))),
        h('tbody', rows.map(function (r, i) {
          return h('tr' + (i === 0 ? '.me' : ''), h('th', names[i]), h('td', money(r.price)), h('td', Math.round(r.units).toLocaleString() + (r.lost > 1 ? ' (lost ' + Math.round(r.lost).toLocaleString() + ')' : '')), h('td', money(r.rev)), h('td.' + (r.ebitda >= 0 ? 'pos' : 'neg'), money(r.ebitda)), h('td', money(r.cash)), h('td', U.pct(r.share)));
        }))));
      var shareChart = h('div.w-chart'), cashChart = h('div.w-chart');
      var colors = ['var(--accent)'].concat(RIVALS.map(function (r) { return r.color; }));
      if (st.hist.length < 2) shareChart.appendChild(h('p.muted', 'The share chart appears after quarter 2.'));
      else U.lineChart(shareChart, { series: names.map(function (n, i) { return { name: n, color: colors[i], points: st.hist.map(function (q) { var r = i ? q.rivals[i - 1] : q.me; return [q.q, r.share * 100]; }) }; }), xLabel: 'Quarter', yMin: 0, xMin: 1, yFmt: function (v) { return Math.round(v) + '%'; }, xFmt: function (v) { return 'Q' + Math.round(v); }, label: 'Market share by quarter' });
      U.barChart(cashChart, { bars: st.hist.map(function (q) { return { label: 'Q' + q.q, value: q.me.cash, color: q.me.cash < 0 ? 'var(--bad)' : 'var(--accent)' }; }), yFmt: money, label: 'Your cash at quarter end' });
      var me = last.me, msgs = [];
      if (me.lost > 1) msgs.push('You turned away ' + Math.round(me.lost).toLocaleString() + ' subscribers because you lacked people — capacity is ' + SIM.capPerHead.toLocaleString() + ' per employee.');
      if (me.ebitda < 0) msgs.push('You lost ' + money(-me.ebitda) + ' this quarter. Runway at this burn: about ' + Math.max(0, Math.floor(st.me.cash / -me.ebitda)) + ' quarters.');
      if (last.raise) msgs.push('You raised ' + money(last.raise.amount) + ' at ' + money(last.raise.pre) + ' pre-money, selling ' + U.pct(last.raise.dil) + ' of the company.');
      if (!msgs.length) msgs.push('Profitable quarter with no capacity shortfall. Can you grow share without wrecking margins?');
      return h('section.block', h('h2', 'Quarter ' + last.q + ' results'), tbl, h('ul.sim-msgs', msgs.map(function (m) { return h('li', m); })),
        h('div.sim-charts', h('div', h('h3', 'Market share'), shareChart), h('div', h('h3', 'Your cash'), cashChart)));
    }
    function scorecard() {
      var me = st.me, cumRev = st.hist.reduce(function (a, q) { return a + q.me.rev; }, 0), cumE = st.hist.reduce(function (a, q) { return a + q.me.ebitda; }, 0);
      var share = st.hist[st.hist.length - 1].me.share, val = st.over ? 0 : simValuation(st) + Math.max(0, me.cash), stake = val * me.own;
      var score = st.over ? 10 : Math.round(Math.min(100, 25 * Math.min(1, share / 0.35) + 25 * Math.min(1, stake / 30000000) + 25 * (cumE > 0 ? 1 : Math.max(0, 1 + cumE / 3000000)) + 25 * Math.min(1, me.own / 0.6)));
      var s2 = store(); s2.lab.simBest = Math.max(s2.lab.simBest || 0, score); MBA.store.save();
      var verdict = st.over ? 'You ran out of cash. In real life this is where the story usually ends: watch burn and raise before you need to.'
        : score >= 75 ? 'Excellent: you built share and value while keeping control of the company.'
        : score >= 50 ? 'Solid. Look at which line below is weakest and try a different strategy.'
        : 'Tough run. Common causes: pricing below cost, hiring ahead of demand, or giving away too much equity.';
      return h('section.block.sim-score', h('h2', st.over ? '💥 Game over in quarter ' + st.q : '🏁 Final scorecard'),
        h('div.stats', stat('Score', score + ' / 100', score >= 75 ? 'good' : score >= 50 ? 'warn' : 'bad'), stat('Revenue, 8 quarters', money(cumRev)), stat('Cumulative EBITDA', money(cumE), cumE >= 0 ? 'good' : 'bad'),
          stat('Final market share', U.pct(share)), stat('Company value', money(val)), stat('Your stake', money(stake) + ' (' + U.pct(me.own, 0) + ')')),
        h('p', verdict), h('p.muted', 'Best score so far: ' + (s2.lab.simBest || score) + ' / 100. Related lessons: ', h('a', { href: '#/track/pricing' }, 'Pricing'), ' · ', h('a', { href: '#/track/finance' }, 'Finance'), ' · ', h('a', { href: '#/track/investment' }, 'Fundraising')));
    }
    draw();
    return page;
  };

  /* =====================================================================
     3. SPACED-REPETITION REVIEW  (#/review)  — SM-2 style scheduling
     ===================================================================== */
  function quizRefs() {
    var map = {};
    MBA.allLessons().forEach(function (x) { (x.lesson.quiz || []).forEach(function (q, i) { map[x.lesson.id + ':' + i] = { q: q, x: x }; }); });
    return map;
  }
  function buildDeck() {
    var cards = [], seen = {};
    var refs = quizRefs(), s = store();
    Object.keys(s.missed).forEach(function (r) {
      var m = refs[r]; if (!m) return;
      cards.push({ id: 'q:' + r, kind: 'Missed question', front: m.q.q, back: '<b>' + m.q.options[m.q.answer] + '</b><br>' + (m.q.explain || ''), src: m.x });
    });
    MBA.allLessons().forEach(function (x) {
      (x.lesson.terms || []).forEach(function (t) {
        var k = t.term.toLowerCase(); if (seen[k]) return; seen[k] = 1;
        cards.push({ id: 't:' + k, kind: 'Term', front: t.term, back: t.def, src: x });
      });
    });
    return cards;
  }
  function sm2(card, q) {
    var c = card ? { e: card.e, n: card.n, i: card.i } : { e: 2.5, n: 0, i: 0 };
    if (q < 3) { c.n = 0; c.i = 1; }
    else { c.i = c.n === 0 ? 1 : c.n === 1 ? 6 : Math.round(c.i * c.e); c.n++; }
    c.e = Math.max(1.3, c.e + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    c.d = today() + c.i;
    return c;
  }
  P.review = function () {
    var s = store(), deck = buildDeck(), t = today(), NEW_PER_DAY = 15;
    if (s.srsDay.day !== t) { s.srsDay = { day: t, newSeen: 0, reviewed: 0 }; MBA.store.save(); }
    var due = deck.filter(function (c) { return s.srs[c.id] && s.srs[c.id].d <= t; }).sort(function (a, b) { return s.srs[a.id].d - s.srs[b.id].d; });
    var fresh = deck.filter(function (c) { return !s.srs[c.id]; });
    fresh.sort(function (a, b) { return (a.kind === 'Term') - (b.kind === 'Term'); }); // missed questions first
    var newLeft = Math.max(0, NEW_PER_DAY - s.srsDay.newSeen);
    var queue = due.concat(fresh.slice(0, newLeft));
    var learned = Object.keys(s.srs).filter(function (k) { return s.srs[k].n >= 2; }).length;
    var page = h('div.page.narrow', pageHead('🔁', 'Spaced-repetition review', 'Flashcards from every glossary term and every quiz question you got wrong. Cards you know come back less often; cards you miss come back tomorrow.'));
    var stats = h('div.stats', stat('Due now', String(due.length)), stat('New today', String(Math.min(newLeft, fresh.length))), stat('Learned', String(learned)), stat('Missed questions', String(Object.keys(s.missed).length)));
    page.appendChild(stats);
    var area = h('div.srs'); page.appendChild(area);
    var idx = 0, flipped = false, interacted = false;   // only move focus after the learner starts reviewing
    function stat(l, v) { return h('div.stat', h('span.stat-l', l), h('b.stat-v', v)); }
    function draw() {
      area.innerHTML = '';
      if (idx >= queue.length) {
        area.appendChild(h('div.srs-done', h('h2', queue.length ? '✅ Session complete' : '🎉 Nothing due'), h('p', queue.length ? 'You reviewed ' + queue.length + ' cards. Come back tomorrow — the schedule spaces cards out as you learn them.' : 'No cards are due and you have used today\'s new cards. Answer more quizzes or come back tomorrow.'),
          h('div.row-actions.start', h('a.btn', { href: '#/practice' }, 'Take a daily drill'), h('a.btn.ghost', { href: '#/glossary' }, 'Browse the glossary'))));
        return;
      }
      var c = queue[idx], st = s.srs[c.id];
      var card = h('div.srs-card' + (flipped ? '.flipped' : ''), { tabindex: '0', role: 'button', 'aria-label': flipped ? 'Answer shown' : 'Show answer' },
        h('div.srs-meta', h('span.pill', c.kind), h('small', (idx + 1) + ' / ' + queue.length + (st ? ' · next interval ' + st.i + 'd' : ' · new'))),
        h('div.srs-front', { html: c.front }),
        flipped ? h('div.srs-back', { html: c.back }) : h('p.muted', 'Think of the answer, then press Space or tap to reveal.'),
        flipped ? h('a.g-src', { href: '#/lesson/' + c.src.lesson.id }, 'From: ' + c.src.track.icon + ' ' + c.src.lesson.title) : null);
      card.addEventListener('click', function (e) { if (e.target.tagName !== 'A' && !flipped) { interacted = true; flipped = true; draw(); } });
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !flipped) { e.preventDefault(); interacted = true; flipped = true; draw(); } });
      area.appendChild(card);
      if (flipped) {
        var grades = [['Again', 1, 'bad'], ['Hard', 3, 'warn'], ['Good', 4, ''], ['Easy', 5, 'good']];
        area.appendChild(h('div.srs-grades', { role: 'group', 'aria-label': 'How well did you know it?' }, grades.map(function (g, i) {
          return h('button.btn' + (g[2] ? '.g-' + g[2] : ''), { type: 'button', onclick: function () { grade(g[1]); } }, h('kbd', String(i + 1)), ' ' + g[0]);
        })));
      } else area.appendChild(h('div.srs-grades', h('button.btn', { type: 'button', onclick: function () { interacted = true; flipped = true; draw(); } }, h('kbd', 'Space'), ' Show answer')));
      if (interacted) setTimeout(function () { var f = area.querySelector(flipped ? '.srs-grades .btn' : '.srs-card'); if (f) f.focus(); }, 0);
    }
    function grade(q) {
      interacted = true;
      var c = queue[idx], wasNew = !s.srs[c.id];
      s.srs[c.id] = sm2(s.srs[c.id], q);
      if (wasNew) s.srsDay.newSeen++;
      s.srsDay.reviewed = (s.srsDay.reviewed || 0) + 1;
      if (c.id.indexOf('q:') === 0 && q >= 4 && s.srs[c.id].n >= 3) delete s.missed[c.id.slice(2)];
      if (q < 3) queue.push(c);
      MBA.store.save(); MBA.store.addXP(2, 'Card reviewed');
      idx++; flipped = false; draw();
    }
    function onKey(e) {
      if (!document.body.contains(area)) { document.removeEventListener('keydown', onKey); return; }
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === ' ' && !flipped && idx < queue.length && !/^(A|BUTTON)$/.test(e.target.tagName)) { e.preventDefault(); interacted = true; flipped = true; draw(); }
      else if (flipped && /^[1-4]$/.test(e.key)) { e.preventDefault(); grade([1, 3, 4, 5][+e.key - 1]); }
    }
    document.addEventListener('keydown', onKey);
    draw();
    return page;
  };

  /* =====================================================================
     4. PLACEMENT TEST  (#/placement)
     ===================================================================== */
  function buildPlacement() {
    var picks = [];
    MBA.STAGES.forEach(function (st) {
      var pool = [];
      MBA.tracks.filter(function (t) { return t.stage === st.n; }).forEach(function (t) {
        (t.lessons || []).forEach(function (l) { if (l.level !== 'Advanced') (l.quiz || []).forEach(function (q, i) { pool.push({ ref: l.id + ':' + i, track: t.id }); }); });
      });
      var used = {}, take = 4;
      for (var guard = 0; take > 0 && pool.length && guard < 500; guard++) {
        var k = Math.floor(Math.random() * pool.length), c = pool[k];
        if (used[c.track] && guard < 200) continue;
        used[c.track] = 1; picks.push({ ref: c.ref, stage: st.n }); pool.splice(k, 1); take--;
      }
    });
    return { qs: picks, i: 0, answers: [], done: false };
  }
  P.placement = function () {
    var s = store(), refs = quizRefs();
    var page = h('div.page.narrow', pageHead('🎯', 'Placement test', '20 questions across all five stages. Answer what you can — skip what you don\'t know. Lessons you prove you know are marked "tested out" so you can jump ahead.'));
    var area = h('div'); page.appendChild(area);
    function save() { MBA.store.save(); }
    function draw() {
      area.innerHTML = '';
      var T = s.placement;
      if (!T || (!T.done && !T.qs)) {
        var testedN = Object.keys(s.tested).length;
        area.appendChild(h('section.block', h('h2', 'How it works'), h('ul',
          h('li', '4 questions from each stage, drawn from lesson quizzes.'),
          h('li', 'Each correct answer marks its lesson as tested out.'),
          h('li', 'Score 3 or more of 4 in a stage and every Beginner lesson in that stage is marked tested out too.'),
          h('li', 'Tested-out lessons count towards track progress but not towards certificates — complete them for that.')),
          testedN ? h('p.muted', 'You currently have ' + testedN + ' lessons marked tested out.') : null,
          h('div.row-actions.start', h('button.btn', { type: 'button', onclick: function () { s.placement = buildPlacement(); save(); draw(); } }, 'Start the placement test →'))));
        return;
      }
      if (!T.done) return question(T);
      results(T);
    }
    function question(T) {
      var item = T.qs[T.i], m = refs[item.ref];
      if (!m) { T.answers[T.i] = null; T.i++; if (T.i >= T.qs.length) finish(T); save(); return draw(); }
      var stg = MBA.STAGES.filter(function (x) { return x.n === item.stage; })[0];
      var order = m.q.options.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
      area.appendChild(h('div.lab-progress', h('i', { style: { width: (T.i / T.qs.length * 100) + '%' } })));
      area.appendChild(h('div.q-card.pop', h('p.eyebrow', 'Question ' + (T.i + 1) + ' of ' + T.qs.length + ' · Stage ' + stg.n + ': ' + stg.name),
        h('p.q-text', { html: m.q.q }),
        h('div.q-opts', order.map(function (oi, k) {
          return h('button.q-opt', { type: 'button', onclick: function () { answer(T, oi === m.q.answer, item.ref); } }, h('span.q-letter', 'ABCDEF'[k]), h('span', { html: m.q.options[oi] }));
        })),
        h('div.row-actions.start', h('button.btn.ghost.small', { type: 'button', onclick: function () { answer(T, false, item.ref, true); } }, 'I don\'t know — skip'))));
    }
    function answer(T, right, ref, skipped) {
      T.answers[T.i] = right ? 1 : 0;
      if (!right && !skipped) s.missed[ref] = Date.now();
      T.i++;
      if (T.i >= T.qs.length) finish(T);
      save(); draw();
    }
    function finish(T) {
      T.done = true; T.marked = [];
      var byStage = {};
      T.qs.forEach(function (q, i) {
        byStage[q.stage] = byStage[q.stage] || [0, 0]; byStage[q.stage][1]++;
        if (T.answers[i]) { byStage[q.stage][0]++; var lid = q.ref.split(':')[0]; if (!s.tested[lid]) { s.tested[lid] = Date.now(); T.marked.push(lid); } }
      });
      T.byStage = byStage;
      Object.keys(byStage).forEach(function (n) {
        if (byStage[n][0] >= 3) MBA.tracks.filter(function (t) { return t.stage === +n; }).forEach(function (t) {
          t.lessons.forEach(function (l) { if (l.level === 'Beginner' && !s.tested[l.id]) { s.tested[l.id] = Date.now(); T.marked.push(l.id); } });
        });
      });
      MBA.store.addXP(40, 'Placement test');
    }
    function results(T) {
      var right = T.answers.filter(Boolean).length;
      area.appendChild(h('section.block', h('h2', 'You scored ' + right + ' / ' + T.qs.length),
        h('div.stats', MBA.STAGES.map(function (st) { var b = (T.byStage || {})[st.n] || [0, 0]; return h('div.stat' + (b[1] && b[0] / b[1] >= 0.75 ? '.good' : ''), h('span.stat-l', 'Stage ' + st.n + ' · ' + st.name), h('b.stat-v', b[0] + ' / ' + b[1])); })),
        h('p', (T.marked || []).length ? (T.marked.length + ' lessons are now marked tested out.') : 'No lessons were marked — start from the beginning of the path.'),
        (T.marked || []).length ? h('details', h('summary', 'See which lessons'), h('ul', T.marked.map(function (id) { var f = MBA.lesson(id); return f ? h('li', h('a', { href: '#/lesson/' + id }, f.track.icon + ' ' + f.lesson.title)) : null; }))) : null,
        h('div.row-actions.start', h('a.btn', { href: '#/path' }, 'See my learning path →'),
          h('button.btn.ghost', { type: 'button', onclick: function () { s.placement = buildPlacement(); save(); draw(); } }, 'Retake'),
          U.confirmBtn('Undo tested-out marks', 'Click again to clear all tested-out marks', function () { s.tested = {}; s.placement = null; save(); draw(); }))));
    }
    draw();
    return page;
  };

  /* =====================================================================
     5. CAPSTONE BUSINESS PLAN  (#/capstone)
     ===================================================================== */
  P.capstone = function () {
    var s = store(), L = s.lab, I = L.idea || {}, B = L.bmc || {}, UE = L['w:unit-economics'], PR = L['w:pricing-elasticity'];
    s.lab.capstone = s.lab.capstone || {}; var C = s.lab.capstone;
    var page = h('div.page.narrow.capstone', pageHead('🎓', 'Capstone business plan', 'Your Idea Lab answers, Business Model Canvas, unit economics and pricing work pulled into one plan. Fill the gaps, then print it or share it.'));
    function has(o) { return o && Object.keys(o).some(function (k) { return k[0] !== '_' && String(o[k]).trim(); }); }
    var parts = [['Idea Lab', has(I), '#/lab'], ['Business Model Canvas', has(B), '#/tool/bmc'], ['Unit economics', !!UE, '#/tool/unit-economics'], ['Pricing', !!PR, '#/tool/pricing-elasticity']];
    var doneN = parts.filter(function (p) { return p[1]; }).length;
    page.appendChild(h('section.side-box.no-print', h('h4', 'Plan completeness: ' + doneN + ' / 4 inputs'),
      h('ul.cap-inputs', parts.map(function (p) { return h('li' + (p[1] ? '.ok' : ''), p[1] ? '✅ ' : '⬜ ', h('a', { href: p[2] }, p[0]), p[1] ? '' : ' — not started'); })),
      h('div.row-actions.start', U.embedded ? h('p.small.muted', 'To print, open MBA Studio from index.html on your computer.') : h('button.btn', { type: 'button', onclick: function () { window.print(); } }, '🖨️ Print / save as PDF'))));
    function sec(title, body, link) { return h('section.cap-sec', h('h2', title), body, link ? h('p.no-print.small', h('a', { href: link[1] }, link[0] + ' →')) : null); }
    function val(v) { return v && String(v).trim() ? String(v) : null; }
    function para(label, v) { return h('p', h('b', label + ': '), val(v) || h('span.muted', 'Not filled in yet')); }
    function edit(key, label, ph) {
      var id = 'cap-' + key, ta = h('textarea.work', { id: id, rows: 4, placeholder: ph }); ta.value = C[key] || '';
      ta.addEventListener('input', function () { C[key] = ta.value; MBA.store.save(); out.textContent = ta.value; });
      var out = h('p.print-only.pre', C[key] || '');
      return h('div', h('label.disc-label.no-print', { for: id }, label), h('div.no-print', ta), out);
    }
    var name = h('input.search.no-print', { id: 'cap-name', value: C.name || '', placeholder: 'Company name', 'aria-label': 'Company name' });
    var nameOut = h('h1.cap-title', C.name || (I.idea ? 'Business plan' : 'Untitled venture'));
    name.addEventListener('input', function () { C.name = name.value; MBA.store.save(); nameOut.textContent = name.value || 'Business plan'; });
    page.appendChild(h('div.cap-doc', name, nameOut, h('p.muted', 'Prepared by ' + (s.name || 'a MBA Studio learner') + ' · ' + new Date().toLocaleDateString()),
      sec('1. Executive summary', h('div', para('The idea', I.idea), para('Customer', I.who), para('Problem', I.pain), para('Solution & why it is 10x better', I.solution), para('Why us, why now', I.why)), ['Edit in the Idea Lab', '#/lab']),
      sec('2. Business model', bmcGrid(B), ['Edit the canvas', '#/tool/bmc']),
      sec('3. Unit economics', ueBlock(UE), ['Open the unit economics tool', '#/tool/unit-economics']),
      sec('4. Pricing', priceBlock(PR, I), ['Open the pricing tool', '#/tool/pricing-elasticity']),
      sec('5. Go-to-market', h('div', para('First 100 customers', I.reach), para('Revenue model', I.model), edit('gtm', 'Channels, sales motion and partnerships', 'Which channels, what CAC you expect, who sells and how…'))),
      sec('6. Risks and how we will test them', h('div', para('Riskiest assumption', I.risk), L.swot && val(L.swot.t) ? para('External threats (SWOT)', L.swot.t) : null, edit('risks', 'Other risks and mitigations', 'Market, execution, financing, regulatory…'))),
      sec('7. Milestones and the ask', h('div', para('90-day goal', I.goal), L.okr && val(L.okr.o) ? para('Objective (OKR)', L.okr.o) : null, para('Resources today', I.resources), edit('ask', 'Funding ask and use of funds', 'e.g. Raising $500k for 18 months of runway: 50% product, 30% go-to-market, 20% operations…')))));
    return page;
  };
  function bmcGrid(B) {
    var cells = [['kp', 'Key partners'], ['ka', 'Key activities'], ['kr', 'Key resources'], ['vp', 'Value proposition'], ['cr', 'Customer relationships'], ['ch', 'Channels'], ['cs', 'Customer segments'], ['co', 'Cost structure'], ['rs', 'Revenue streams']];
    return h('div.cap-bmc', cells.map(function (c) { return h('div.cap-cell', h('b', c[1]), h('p', B[c[0]] && B[c[0]].trim() ? B[c[0]] : '—')); }));
  }
  function ueBlock(v) {
    if (!v) return h('p.muted', 'Open the unit economics tool and move the sliders to your numbers — they are saved and appear here.');
    var gm = v.gm / 100, c = v.churn / 100, ltv = v.arpu * gm / c, ratio = ltv / v.cac, pb = v.cac / (v.arpu * gm);
    return h('div.table-wrap', h('table.compare', h('tbody',
      tr('Revenue per customer / month', U.fmt(v.arpu, { cur: '$' })), tr('Gross margin', v.gm + '%'), tr('Monthly churn', v.churn + '%'), tr('Customer acquisition cost', U.fmt(v.cac, { cur: '$' })),
      tr('Lifetime value (LTV)', U.fmt(ltv, { cur: '$' })), tr('LTV : CAC', ratio.toFixed(1) + 'x' + (ratio >= 3 ? ' (healthy)' : ' (below the 3x benchmark)')), tr('CAC payback', pb.toFixed(1) + ' months'))));
  }
  function priceBlock(v, I) {
    if (!v) return h('div', h('p', h('b', 'Price and cost (from the Idea Lab): '), I.price || h('span.muted', 'Not filled in yet')), h('p.muted', 'Open the pricing tool to model elasticity — your settings will appear here.'));
    var opt = v.e > 1 ? v.uc * v.e / (v.e - 1) : null;
    return h('div.table-wrap', h('table.compare', h('tbody', tr('Current price', U.fmt(v.p0, { cur: '$' })), tr('Units at current price', Math.round(v.q0).toLocaleString()), tr('Price elasticity', '−' + v.e.toFixed(1)), tr('Unit cost', U.fmt(v.uc, { cur: '$' })),
      tr('Price tested', U.fmt(v.test, { cur: '$' })), tr('Profit-maximising price (model)', opt ? U.fmt(opt, { cur: '$', d: 2 }) : 'Demand is inelastic: test higher prices'))));
  }
  function tr(a, b) { return h('tr', h('th', a), h('td', b)); }

  /* =====================================================================
     6. CAREER PATHS  (#/careers, #/careers/:id)
     ===================================================================== */
  var CAREERS = [
    { id: 'consulting', icon: '🧩', name: 'Management consultant', blurb: 'Structure ambiguous problems, analyse fast, and communicate recommendations to senior leaders.',
      skills: ['Issue trees & hypotheses', 'Market sizing', 'Profitability & market-entry cases', 'Slides & storytelling'],
      items: ['lesson:csuite-3', 'lesson:csuite-4', 'lesson:communication-2', 'lesson:communication-4', 'lesson:strategy-2', 'lesson:strategy-3', 'lesson:validation-4', 'lesson:finance-3', 'lesson:data-decisions-4', 'lesson:global-4',
        'challenge:*role:Advisor', 'challenge:*track:strategy', 'case:*track:strategy', 'tool:five-forces', 'tool:decision-matrix'] },
    { id: 'pm', icon: '📱', name: 'Product manager', blurb: 'Find the right problem, decide what to build, and work with engineering, design and go-to-market to ship it.',
      skills: ['Customer discovery', 'Prioritisation', 'Experimentation & metrics', 'Pricing & growth'],
      items: ['lesson:ideation-2', 'lesson:validation-2', 'lesson:validation-3', 'lesson:technology-3', 'lesson:technology-4', 'lesson:growth-2', 'lesson:growth-3', 'lesson:growth-4', 'lesson:pricing-3', 'lesson:data-decisions-3', 'lesson:communication-3',
        'challenge:*role:CPO', 'challenge:*role:CTO', 'case:*track:growth', 'tool:ab-test', 'tool:retention', 'tool:funnel'] },
    { id: 'vc-ib', icon: '🏦', name: 'Venture capital / investment banking', blurb: 'Value companies, structure deals and judge which businesses will compound.',
      skills: ['Financial statements', 'Valuation & DCF', 'Term sheets & cap tables', 'M&A and LBOs'],
      items: ['lesson:finance-2', 'lesson:finance-3', 'lesson:finance-6', 'lesson:investment-2', 'lesson:investment-3', 'lesson:investment-4', 'lesson:corp-finance-3', 'lesson:corp-finance-4', 'lesson:corp-finance-5', 'lesson:strategy-4',
        'challenge:*role:CFO', 'challenge:*track:investment', 'challenge:*track:corp-finance', 'case:*track:investment', 'case:*track:corp-finance', 'tool:valuation', 'tool:cap-table', 'tool:lbo', 'tool:npv'] },
    { id: 'founder', icon: '🚀', name: 'Founder', blurb: 'Go from idea to a validated, financed, growing company — and lead the people who build it.',
      skills: ['Validation', 'Unit economics', 'Fundraising', 'Hiring & leadership'],
      items: ['lesson:ideation-1', 'lesson:validation-1', 'lesson:validation-2', 'lesson:business-model-1', 'lesson:business-model-4', 'lesson:pricing-1', 'lesson:sales-1', 'lesson:finance-7', 'lesson:investment-4', 'lesson:people-2', 'lesson:negotiation-1', 'lesson:scaling-1',
        'challenge:*role:Founder', 'case:*track:validation', 'case:*track:business-model', 'tool:idea-score', 'tool:unit-economics', 'tool:runway', 'page:lab', 'page:sim', 'page:capstone'] }
  ];
  var PAGES = { lab: ['💡 Idea Clarity Lab', '#/lab'], sim: ['🏭 Company simulation', '#/sim'], capstone: ['🎓 Capstone business plan', '#/capstone'] };
  function expandCareer(c) {
    var s = store(), out = [], seen = {};
    function push(o) { if (!seen[o.key]) { seen[o.key] = 1; out.push(o); } }
    c.items.forEach(function (it) {
      var p = it.split(':'), kind = p[0], ref = p.slice(1).join(':');
      if (ref.indexOf('*') === 0) {
        var f = ref.slice(1).split(':'), field = f[0], v = f[1], list = kind === 'case' ? MBA.cases : MBA.challenges;
        list.filter(function (x) { return x[field] === v; }).slice(0, 3).forEach(function (x) {
          push(kind === 'case' ? { key: 'case:' + x.id, kind: 'Case', label: x.company + ': ' + x.title, href: '#/case/' + x.id + '/discuss', done: !!s.cases[x.id] }
            : { key: 'challenge:' + x.id, kind: 'Challenge', label: x.title, href: '#/challenge/' + x.id, done: !!s.challenges['arena:' + x.id] });
        });
      } else if (kind === 'lesson') { var f2 = MBA.lesson(ref); if (f2) push({ key: it, kind: 'Lesson', label: f2.track.icon + ' ' + f2.lesson.title, href: '#/lesson/' + ref, done: MBA.store.isDone(ref) || !!s.tested[ref] }); }
      else if (kind === 'tool') { var w = MBA.widgets[ref]; if (w) push({ key: it, kind: 'Tool', label: w.icon + ' ' + w.title, href: '#/tool/' + ref, done: false }); }
      else if (kind === 'page' && PAGES[ref]) push({ key: it, kind: 'Practice', label: PAGES[ref][0], href: PAGES[ref][1], done: false });
    });
    return out;
  }
  P.careers = function (id) {
    if (id) {
      var c = CAREERS.filter(function (x) { return x.id === id; })[0]; if (!c) return P.notFound();
      var items = expandCareer(c), done = items.filter(function (x) { return x.done; }).length;
      return h('div.page.narrow', h('nav.crumbs', h('a', { href: '#/careers' }, 'Career paths')), pageHead(c.icon, c.name, c.blurb),
        h('section.side-box', h('h4', 'Skills you will build'), h('div', c.skills.map(function (k) { return h('span.tag', k); })), h('div.xpbar', h('i', { style: { width: (items.length ? done / items.length * 100 : 0) + '%' } })), h('small', done + ' of ' + items.length + ' steps done')),
        h('ol.lesson-list.career-list', items.map(function (x, i) {
          return h('li', h('a.lesson-row' + (x.done ? '.done' : ''), { href: x.href }, h('span.lr-num', x.done ? '✓' : String(i + 1)), h('div.lr-main', h('b', x.label)), h('div.lr-meta', h('span.pill', x.kind))));
        })));
    }
    return h('div.page', pageHead('🧭', 'Career paths', 'Pick a destination. Each path is an ordered list of lessons, cases, challenges and tools from across the course.'),
      h('div.path-grid', CAREERS.map(function (c) {
        var items = expandCareer(c), done = items.filter(function (x) { return x.done; }).length;
        return h('a.persona', { href: '#/careers/' + c.id }, h('span.p-icon', c.icon), h('h3', c.name), h('p', c.blurb), h('small', items.length + ' steps · ' + done + ' done'), h('span.link', 'Open path →'));
      })));
  };
  MBA.careers = CAREERS;
  MBA.features = { expandCareer: expandCareer, sm2: sm2, buildDeck: buildDeck };
})();
