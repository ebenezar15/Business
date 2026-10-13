/* Pages. Each returns a DOM node. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, RD = MBA.render;
  var P = {};

  function trackProgress(t) {
    var n = (t.lessons || []).length, d = (t.lessons || []).filter(function (l) { return MBA.store.isDone(l.id); }).length;
    return { n: n, d: d, p: n ? d / n : 0 };
  }
  function ring(p, color, size) {
    size = size || 46; var r = size / 2 - 4, c = 2 * Math.PI * r;
    var wrap = h('span.ring', { style: { width: size + 'px', height: size + 'px' } });
    wrap.innerHTML = '<svg viewBox="0 0 ' + size + ' ' + size + '"><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-bg"/><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-fg" stroke="' + color + '" stroke-dasharray="' + c + '" stroke-dashoffset="' + c * (1 - p) + '"/></svg><b>' + Math.round(p * 100) + '%</b>';
    return wrap;
  }
  function pageHead(icon, title, sub) { return h('header.page-head', h('div.page-icon', icon), h('div', h('h1', title), sub ? h('p.lead', sub) : null)); }
  function nextLesson() {
    var all = MBA.allLessons();
    for (var i = 0; i < all.length; i++) if (!MBA.store.isDone(all[i].lesson.id)) return all[i];
    return null;
  }
  function trackCard(t) {
    var pr = trackProgress(t);
    return h('a.track-card.reveal', { href: '#/track/' + t.id, style: { '--track': t.color } },
      h('div.tc-top', h('span.tc-icon', t.icon), ring(pr.p, t.color)),
      h('h3', t.title), h('p', t.tagline || ''), h('small', pr.n + ' lessons · ' + pr.d + ' done'));
  }

  /* ================= HOME ================= */
  P.home = function () {
    var lv = MBA.store.level(), nx = nextLesson(), totalL = MBA.allLessons().length;
    var doneL = Object.keys(MBA.store.get().done).length;
    var hero = h('section.hero',
      h('div.hero-text',
        h('p.eyebrow', 'The interactive business school'),
        h('h1', 'From ', h('span.grad', 'zero'), ' to ', h('span.grad', 'boardroom'), '.'),
        h('p.lead', 'Everything top B-schools teach — strategy, finance, marketing, operations, people, investing — plus how the best operators run companies today. Explained simply, made interactive, tested with real cases.'),
        h('div.hero-cta',
          h('a.btn.big', { href: nx ? '#/lesson/' + nx.lesson.id : '#/path' }, doneL ? 'Continue learning →' : 'Start from zero →'),
          h('a.btn.big.ghost', { href: '#/lab' }, '💡 I have an idea'))),
      h('div.hero-art', { 'aria-hidden': 'true' }, heroArt()));
    var stats = h('section.kpis',
      kpi('🏅', lv.name, lv.xp.toLocaleString() + ' XP'),
      kpi('🔥', MBA.store.streak() + ' day streak', 'Learn a little every day'),
      kpi('📘', doneL + ' / ' + totalL, 'lessons completed'),
      kpi('🧭', MBA.tracks.length + ' tracks', MBA.cases.length + ' cases · ' + MBA.challenges.length + ' challenges'));
    var who = h('section.paths',
      h('h2', 'Where are you starting?'),
      h('div.path-grid',
        persona('🌱', 'Total beginner', 'Never studied business? Start with Foundations: what a business is, how money flows, how markets work.', '#/track/business-101', 'Start Business 101'),
        persona('💡', 'I have an idea', 'Get clarity in 20 minutes: the Idea Clarity Lab turns your fuzzy idea into a one-page plan and experiments to run.', '#/lab', 'Open the Lab'),
        persona('🏪', 'I run a business', 'Run the Business Health Diagnostic. Get a scored report and the exact lessons and tools to fix your weakest areas.', '#/advisor', 'Diagnose my business'),
        persona('👔', 'C-suite / advisor track', 'Strategy, capital, governance, consulting toolkit, decision-making — and 30+ case problems to practise on.', '#/arena', 'Enter the Arena')));
    var stages = h('section', h('h2', 'The curriculum'), h('p.muted', '4 stages · ' + MBA.tracks.length + ' tracks · ' + totalL + ' lessons — designed so each builds on the last.'),
      h('div.stage-strip', MBA.STAGES.map(function (s) {
        var ts = MBA.tracks.filter(function (t) { return t.stage === s.n; });
        return h('a.stage-card.reveal', { href: '#/path#stage-' + s.n }, h('span.stage-n', 'Stage ' + s.n), h('h3', s.icon + ' ' + s.name), h('p', s.desc), h('div.stage-icons', ts.map(function (t) { return h('span', { title: t.title }, t.icon); })));
      })));
    var tools = h('section', h('h2', 'Learn by playing'), h('p.muted', 'Move sliders, watch the numbers and charts react, and build intuition no textbook gives you.'),
      h('div.tool-mini', ['unit-economics', 'breakeven', 'pricing-elasticity', 'runway', 'cap-table', 'funnel'].map(function (id) {
        var w = MBA.widgets[id]; return w ? h('a.tool-chip', { href: '#/tool/' + id }, h('span', w.icon), w.title) : null;
      }), h('a.tool-chip.more', { href: '#/toolkit' }, 'All ' + Object.keys(MBA.widgets).length + ' tools →')));
    var daily = MBA.cases.length ? (function () {
      var c = MBA.cases[new Date().getDate() % MBA.cases.length];
      return h('section.daily', h('div', h('p.eyebrow', 'Case of the day'), h('h2', c.company + ': ' + c.title), h('p', c.question)), h('a.btn', { href: '#/case/' + c.id }, 'Make the call →'));
    })() : null;
    return h('div.page.home', hero, stats, who, daily, stages, tools);
  };
  function kpi(icon, a, b) { return h('div.kpi', h('span', icon), h('div', h('b', a), h('small', b))); }
  function persona(icon, title, text, href, cta) { return h('a.persona.reveal', { href: href }, h('span.p-icon', icon), h('h3', title), h('p', text), h('span.link', cta + ' →')); }
  function heroArt() {
    var d = h('div.orbit');
    var icons = MBA.tracks.slice(0, 18).map(function (t) { return t.icon; });
    if (!icons.length) icons = ['💰', '📈', '🧠', '🚀', '🤝', '⚙️', '🎯', '🏷️'];
    icons.forEach(function (ic, i) {
      var ring = i < 6 ? 0 : i < 12 ? 1 : 2, n = ring === 0 ? Math.min(6, icons.length) : 6;
      d.appendChild(h('span.orb.r' + ring, { style: { '--a': ((i % 6) / n * 360) + 'deg', '--d': (i * 0.15) + 's' } }, ic));
    });
    d.appendChild(h('div.orbit-core', 'MBA'));
    return d;
  }

  /* ================= PATH ================= */
  P.path = function () {
    var page = h('div.page', pageHead('🧭', 'Learning path', 'Follow the stages in order if you are new. Jump to any track if you already know the basics.'));
    MBA.STAGES.forEach(function (s) {
      var ts = MBA.tracks.filter(function (t) { return t.stage === s.n; });
      page.appendChild(h('section.stage', { id: 'stage-' + s.n },
        h('div.stage-head', h('span.stage-n', 'Stage ' + s.n), h('h2', s.icon + ' ' + s.name), h('p.muted', s.desc)),
        h('div.track-grid', ts.map(trackCard))));
    });
    return page;
  };

  /* ================= TRACK ================= */
  P.track = function (id) {
    var t = MBA.track(id); if (!t) return P.notFound();
    var pr = trackProgress(t);
    var page = h('div.page', { style: { '--track': t.color } },
      h('nav.crumbs', h('a', { href: '#/path' }, 'Learning path'), ' / ', h('span', 'Stage ' + t.stage)),
      h('header.track-hero', h('span.th-icon', t.icon), h('div', h('h1', t.title), h('p.lead', t.summary)), ring(pr.p, t.color, 84)),
      t.outcomes ? h('section.outcomes', h('h3', 'After this track you can:'), h('ul', t.outcomes.map(function (o) { return h('li', o); }))) : null,
      h('ol.lesson-list', (t.lessons || []).map(function (l, i) {
        var done = MBA.store.isDone(l.id), q = MBA.store.get().quiz[l.id];
        return h('li.reveal', { style: { '--i': i } }, h('a.lesson-row' + (done ? '.done' : ''), { href: '#/lesson/' + l.id },
          h('span.lr-num', done ? '✓' : String(i + 1)),
          h('div.lr-main', h('b', l.title), h('small', l.hook || '')),
          h('div.lr-meta', h('span.pill.lvl-' + (l.level || 'Beginner').toLowerCase(), l.level), h('span.pill', l.minutes + ' min'), q != null ? h('span.pill', 'Quiz ' + Math.round(q * 100) + '%') : null)));
      })),
      pr.p === 1 ? certificate(t) : null);
    return page;
  };
  function certificate(t) {
    var name = MBA.store.get().name || 'Learner';
    return h('section.cert', h('p.eyebrow', 'Certificate of completion'), h('h2', name), h('p', 'has completed the ' + t.title + ' track of MBA Studio'), h('p.muted', new Date().toLocaleDateString()), U.embedded ? null : h('button.btn.ghost.small', { onclick: function () { window.print(); } }, '🖨️ Print'));
  }

  /* ================= LESSON ================= */
  P.lesson = function (id) { var f = MBA.lesson(id); return f ? RD.lesson(f) : P.notFound(); };

  /* ================= ROADMAP ================= */
  P.roadmap = function (id) {
    var rm = MBA.roadmap;
    var page = h('div.page', pageHead('🗺️', 'Business roadmap', 'The step-by-step path to start, run, manage and scale any business — with checklists that save your progress.'));
    if (!rm.length) return page;
    var sel = rm.filter(function (p) { return p.id === id; })[0] || rm[0];
    page.appendChild(h('div.rm-track', rm.map(function (p) {
      var keys = [], d = 0; (p.steps || []).forEach(function (s, si) { (s.checklist || []).forEach(function (_, ci) { keys.push('rm:' + p.id + ':' + si + ':' + ci); }); });
      keys.forEach(function (k) { if (MBA.store.isChecked(k)) d++; });
      return h('a.rm-node' + (p === sel ? '.active' : ''), { href: '#/roadmap/' + p.id }, h('span.rm-dot', p.icon), h('b', p.phase + '. ' + p.title), h('small', keys.length ? Math.round(d / keys.length * 100) + '% done' : ''), h('i.rm-bar', { style: { width: (keys.length ? d / keys.length * 100 : 0) + '%' } }));
    })));
    var p = sel;
    page.appendChild(h('section.rm-phase',
      h('div.rm-head', h('span.rm-big', p.icon), h('div', h('p.eyebrow', 'Phase ' + p.phase + ' · ' + (p.duration || '')), h('h2', p.title), h('p.lead', p.goal))),
      h('div.rm-steps', (p.steps || []).map(function (s, si) {
        return h('details.rm-step.reveal', { open: si === 0 }, h('summary', h('span.lr-num', String(si + 1)), h('b', s.title)),
          RD.html(s.detail),
          h('ul.checks', (s.checklist || []).map(function (c, ci) {
            var key = 'rm:' + p.id + ':' + si + ':' + ci, cb = h('input', { type: 'checkbox' }); cb.checked = MBA.store.isChecked(key);
            cb.addEventListener('change', function () { MBA.store.setCheck(key, cb.checked); if (cb.checked) MBA.store.addXP(5, 'Roadmap step'); });
            return h('li', h('label', cb, h('span', { html: c })));
          })));
      })),
      h('div.rm-side',
        box('📏 Measure', p.metrics), box('🕳️ Pitfalls', p.pitfalls), box('🧰 Tools', p.tools),
        p.tracks ? h('div.side-box', h('h4', '📘 Learn'), h('div', p.tracks.map(function (tid) { var t = MBA.track(tid); return t ? h('a.tag', { href: '#/track/' + tid }, t.icon + ' ' + t.title) : null; }))) : null)));
    var i = rm.indexOf(p);
    page.appendChild(h('div.lesson-foot', rm[i - 1] ? h('a.btn.ghost', { href: '#/roadmap/' + rm[i - 1].id }, '← ' + rm[i - 1].title) : h('span'), rm[i + 1] ? h('a.btn', { href: '#/roadmap/' + rm[i + 1].id }, 'Next: ' + rm[i + 1].title + ' →') : h('span')));
    return page;
  };
  function box(title, items) { return items && items.length ? h('div.side-box', h('h4', title), h('ul', items.map(function (x) { return h('li', { html: x }); }))) : null; }

  /* ================= IDEA CLARITY LAB ================= */
  var LAB = [
    { k: 'idea', q: 'Describe your idea in one or two sentences.', help: 'Messy is fine. We will sharpen it.', ex: 'An app that helps small restaurants cut food waste.' },
    { k: 'who', q: 'Who exactly has the problem? Be specific.', help: 'Not "everyone". A segment you could find and talk to this week.', ex: 'Owners of independent restaurants with 20–80 seats in tier-1 cities.' },
    { k: 'pain', q: 'What is the painful problem, and how often does it happen?', help: 'Problems that are urgent, frequent and expensive make the best businesses.', ex: 'They throw away 5–10% of ingredients every week because they over-order.' },
    { k: 'today', q: 'What do they do about it today?', help: 'Your real competitor is often a spreadsheet, a WhatsApp group, or doing nothing.', ex: 'The chef guesses orders from memory; some use Excel.' },
    { k: 'solution', q: 'What is your solution, and why is it 10x better on one thing?', help: 'Pick ONE dimension: cheaper, faster, easier, more accurate, more fun…', ex: 'Predicts tomorrow\'s orders from POS data in one tap — far less waste with no extra work.' },
    { k: 'why', q: 'Why you, and why now?', help: 'Unfair insight, skills, network, or a new technology/regulation/behaviour.', ex: 'I ran a restaurant for 6 years; cheap AI forecasting and cloud POS APIs make it possible now.' },
    { k: 'model', q: 'How will you make money?', help: 'Subscription, per-transaction, one-off sale, commission, ads, licensing…', ex: 'Monthly subscription per outlet.' },
    { k: 'price', q: 'What will you charge, and what will it cost you to deliver?', help: 'Rough numbers are fine. Price per customer per month/unit, and cost per customer/unit.', ex: '$49/month; ~$8/month in hosting & support.' },
    { k: 'reach', q: 'How will the first 100 customers find you?', help: 'Name 2–3 concrete channels.', ex: 'Restaurant associations, POS partner marketplace, walk-ins with a free waste audit.' },
    { k: 'risk', q: 'What is the riskiest assumption — the thing that, if false, kills the idea?', help: 'Usually: they don\'t care enough to pay, or you can\'t reach them cheaply.', ex: 'Owners will connect their POS and trust the predictions.' },
    { k: 'goal', q: 'What would success look like in 90 days?', help: 'A number: interviews done, pre-orders, pilots, revenue.', ex: '30 interviews, 5 paid pilots at $49.' },
    { k: 'resources', q: 'What resources do you have? (time, money, skills, team)', help: 'Be honest — the plan adapts to it.', ex: 'Evenings + weekends, $3,000 savings, no technical co-founder.' }
  ];
  P.lab = function () {
    var s = MBA.store.get(); s.lab.idea = s.lab.idea || {}; var A = s.lab.idea;
    var step = A._step || 0;
    var page = h('div.page', pageHead('💡', 'Idea Clarity Lab', 'Answer 12 questions. Get a one-page business plan, a validation plan and the lessons you need next. Your answers stay in your browser.'));
    var area = h('div.lab');
    page.appendChild(area);
    function draw() {
      area.innerHTML = '';
      if (step >= LAB.length) return area.appendChild(labReport(A, function () { step = 0; A._step = 0; MBA.store.save(); draw(); }));
      var q = LAB[step];
      var ta = h('textarea.lab-input', { rows: 4, placeholder: 'e.g. ' + q.ex, 'aria-label': q.q }); ta.value = A[q.k] || '';
      ta.addEventListener('input', function () { A[q.k] = ta.value; MBA.store.save(); });
      area.appendChild(h('div.lab-progress', h('i', { style: { width: (step / LAB.length * 100) + '%' } })));
      area.appendChild(h('div.lab-card.pop',
        h('p.eyebrow', 'Question ' + (step + 1) + ' of ' + LAB.length),
        h('h2', q.q), h('p.muted', q.help), ta,
        h('div.row-actions',
          step ? h('button.btn.ghost', { onclick: function () { step--; A._step = step; MBA.store.save(); draw(); } }, '← Back') : h('span'),
          h('button.btn', { onclick: function () { step++; A._step = step; MBA.store.save(); draw(); } }, step === LAB.length - 1 ? 'Generate my plan ✨' : 'Next →'))));
      setTimeout(function () { ta.focus(); }, 50);
    }
    draw();
    return page;
  };
  function labReport(A, restart) {
    var nums = (A.price || '').match(/\d+(?:[.,]\d+)?/g) || [];
    var price = parseFloat((nums[0] || '').replace(',', '')), cost = parseFloat((nums[1] || '').replace(',', ''));
    var gm = price && cost != null && isFinite(cost) ? (price - cost) / price : null;
    var filled = LAB.filter(function (q) { return (A[q.k] || '').trim().length > 8; }).length;
    var clarity = filled / LAB.length;
    var gaps = LAB.filter(function (q) { return (A[q.k] || '').trim().length <= 8; });
    var vague = /everyone|all people|anybody|every business/i.test(A.who || '');
    var v = function (k) { return U.esc(A[k] || '—'); };
    var experiments = [
      '<b>Problem interviews (week 1–2):</b> talk to 15–20 people matching "' + v('who') + '". Ask about the last time the problem happened, what it cost, and what they tried. Never pitch. (See <a href="#/track/validation">Validation</a>.)',
      '<b>Smoke test (week 2–3):</b> a one-page site stating the 10x promise, with a "Get early access / pre-order" button. Drive 300–500 visitors from your channels: ' + v('reach') + '.',
      '<b>Concierge MVP (week 3–8):</b> deliver the outcome manually to 3–5 customers before building software. Charge something — even a small amount — to test willingness to pay.',
      '<b>Riskiest assumption test:</b> design one experiment that could prove "' + v('risk') + '" false within 2 weeks. Decide in advance what result means go / pivot / stop.'
    ];
    var recs = ['validation', 'business-model', 'pricing'];
    if (vague) recs.unshift('marketing');
    if (/no (tech|technical)|non-technical|can.t code/i.test(A.resources || '')) recs.push('technology');
    if (/\$|money|savings|fund/i.test(A.resources || '')) recs.push('investment');
    var node = h('div.report',
      h('div.report-head', h('div', h('p.eyebrow', 'Your one-page plan'), h('h2', A.idea ? (A.idea.length > 90 ? A.idea.slice(0, 90) + '…' : A.idea) : 'Untitled idea')),
        h('div.clarity', ring(clarity, 'var(--accent)', 84), h('small', 'Clarity score'))),
      h('div.report-grid',
        rbox('🎯 Customer', A.who, vague ? '⚠️ Too broad. Narrow to a segment you can name, find and reach this week.' : null),
        rbox('😣 Problem', A.pain), rbox('🔁 Current alternative', A.today), rbox('✨ Solution & 10x', A.solution),
        rbox('⏱️ Why you / why now', A.why), rbox('💵 Business model', A.model),
        rbox('🏷️ Price & unit cost', A.price, gm != null && isFinite(gm) ? 'Estimated gross margin: <b>' + U.pct(gm, 0) + '</b>' + (gm < 0.3 ? ' — thin; check pricing or delivery cost.' : gm > 0.6 ? ' — healthy.' : '.') : 'Add numbers (price and cost) to estimate your margin.'),
        rbox('📣 First 100 customers', A.reach), rbox('💣 Riskiest assumption', A.risk), rbox('🏁 90-day goal', A.goal), rbox('🧰 Resources', A.resources)),
      h('section.report-sec', h('h3', '🧪 Your validation plan'), h('ol', experiments.map(function (x) { return h('li', { html: x }); }))),
      gaps.length ? h('section.report-sec.warnbox', h('h3', '❓ Still unclear'), h('ul', gaps.map(function (q) { return h('li', q.q); }))) : null,
      h('section.report-sec', h('h3', '📘 Learn next'), h('div', recs.filter(function (x, i, a) { return a.indexOf(x) === i; }).map(function (tid) { var t = MBA.track(tid); return t ? h('a.tag', { href: '#/track/' + tid }, t.icon + ' ' + t.title) : null; }),
        h('a.tag', { href: '#/roadmap' }, '🗺️ Business roadmap'), h('a.tag', { href: '#/tool/idea-score' }, '💡 Score this idea'), h('a.tag', { href: '#/tool/bmc' }, '🗺️ Business Model Canvas'))),
      h('div.row-actions', h('button.btn.ghost', { onclick: restart }, '✏️ Edit answers'), U.embedded ? null : h('button.btn', { onclick: function () { window.print(); } }, '🖨️ Print / save PDF')));
    if (!A._rewarded) { A._rewarded = 1; MBA.store.save(); setTimeout(function () { MBA.store.addXP(40, 'Idea plan created'); U.confetti(); }, 300); }
    return node;
  }
  function rbox(t, v, note) { return h('div.rbox', h('h4', t), h('p', v || '—'), note ? h('p.rnote', { html: note }) : null); }

  /* ================= ADVISOR DIAGNOSTIC ================= */
  var DIAG = [
    { d: 'Customer & problem', t: 'validation', q: 'How well do you know your target customer?', o: ['We sell to "everyone"', 'Rough idea of who buys', 'Clear segment and persona, based on interviews', 'Precise ICP backed by data on who retains and pays most'], fix: 'Define your Ideal Customer Profile from your best-retaining customers; run 10 interviews this month.' },
    { d: 'Customer & problem', t: 'validation', q: 'How strong is evidence that customers need what you sell?', o: ['Mostly our belief', 'Some positive conversations', 'People pay and come back', 'Strong retention, referrals, and they would be very disappointed without us'], fix: 'Run the Sean Ellis "very disappointed" survey and study your retention curve before spending more on growth.' },
    { d: 'Growth & sales', t: 'marketing', q: 'How predictable is customer acquisition?', o: ['Random word of mouth', 'One channel works sometimes', 'One reliable channel with known CAC', 'Multiple scalable channels with tracked CAC and payback'], fix: 'Pick one channel, instrument it end-to-end (spend → leads → customers) and calculate CAC weekly.' },
    { d: 'Growth & sales', t: 'sales', q: 'Do you have a repeatable sales process?', o: ['Founder sells ad hoc', 'Some steps, not written down', 'Defined pipeline stages and conversion rates', 'Documented playbook; new reps ramp predictably'], fix: 'Write down your sales stages, track conversion between them, and build a one-page playbook.' },
    { d: 'Pricing & unit economics', t: 'pricing', q: 'How did you set your price?', o: ['Guessed / copied competitors', 'Cost plus a markup', 'Tested willingness to pay', 'Value-based with tiers, regularly reviewed'], fix: 'Interview customers on value delivered; test a higher price or a premium tier with new customers.' },
    { d: 'Pricing & unit economics', t: 'finance', q: 'Do you know your contribution margin and LTV:CAC?', o: ['No idea', 'Roughly', 'Yes, calculated quarterly', 'Tracked monthly by segment and channel'], fix: 'Compute contribution margin per order/customer and LTV:CAC. Use the Unit Economics tool.' },
    { d: 'Cash & finance', t: 'finance', q: 'How many months of runway (cash ÷ monthly burn)?', o: ['Under 3 months / unknown', '3–6 months', '6–18 months', 'Profitable or 18+ months'], fix: 'Build a 13-week cash forecast now; cut non-essential burn; start financing talks early.' },
    { d: 'Cash & finance', t: 'finance', q: 'How are your books and financial reporting?', o: ['Shoebox / mixed with personal', 'Bookkeeping done late', 'Monthly P&L and balance sheet', 'Monthly close, budget vs actual, KPI dashboard'], fix: 'Separate business and personal accounts; get a bookkeeper; close the books monthly.' },
    { d: 'Product & operations', t: 'operations', q: 'How are core processes run?', o: ['In the founder\'s head', 'Partly documented', 'Key processes have SOPs and owners', 'Measured, automated where possible, continuously improved'], fix: 'Document your top 5 recurring processes as SOPs with a named owner and one KPI each.' },
    { d: 'Product & operations', t: 'technology', q: 'How do you use data, software and AI?', o: ['Barely', 'Basic tools, data scattered', 'Core systems connected; weekly metrics', 'Data-driven decisions; automation & AI in key workflows'], fix: 'Define a North Star metric and 5 input metrics; automate one repetitive workflow with AI this quarter.' },
    { d: 'Team & leadership', t: 'people', q: 'How clear are roles, goals and accountability?', o: ['Everyone does everything', 'Roles exist but goals unclear', 'Clear roles and quarterly goals', 'OKRs cascade, regular 1:1s and reviews'], fix: 'Set 3 company OKRs per quarter, give every key metric an owner, and start weekly 1:1s.' },
    { d: 'Team & leadership', t: 'people', q: 'How do you hire?', o: ['Friends / whoever is available', 'Unstructured interviews', 'Scorecards and structured interviews', 'Structured process, employer brand, strong onboarding'], fix: 'Write a scorecard (mission, outcomes, competencies) before each hire; use structured interviews.' },
    { d: 'Strategy & moat', t: 'strategy', q: 'Why will customers choose you over alternatives in 3 years?', o: ['Not sure', 'Better service / price today', 'A clear differentiator that is hard to copy', 'Compounding advantages (network effects, brand, scale, switching costs)'], fix: 'Use the 7 Powers / VRIO lens to pick ONE durable advantage and invest in it deliberately.' },
    { d: 'Strategy & moat', t: 'strategy', q: 'Do you have a written strategy and say no to things?', o: ['We chase every opportunity', 'Rough priorities', 'Written strategy and annual plan', 'Clear choices, reviewed quarterly, resources follow strategy'], fix: 'Write a one-page strategy: diagnosis, guiding policy, coherent actions (Rumelt). List what you will NOT do.' },
    { d: 'Governance & risk', t: 'legal', q: 'How protected are you legally?', o: ['Nothing formal', 'Company registered, some contracts', 'Founder agreement, IP assigned, standard contracts', 'Compliance calendar, privacy policies, insurance, legal review'], fix: 'Sign a founders\' agreement with vesting, assign IP to the company, and use reviewed customer contracts.' },
    { d: 'Governance & risk', t: 'legal', q: 'Do you track your biggest risks?', o: ['No', 'Informally', 'A risk list reviewed occasionally', 'Risk register with owners, mitigations and board review'], fix: 'Create a risk register: top 10 risks × likelihood × impact, with an owner and mitigation each.' }
  ];
  P.advisor = function () {
    var s = MBA.store.get(); s.lab.diag = s.lab.diag || {}; var A = s.lab.diag;
    var page = h('div.page', pageHead('🩺', 'Business Health Diagnostic', 'Answer 16 questions like a seasoned advisor would ask. Get a scored report, your top priorities, and the exact lessons and tools to fix them. Use it on your own business — or a startup you advise.'));
    var form = h('div.diag');
    var groups = {};
    DIAG.forEach(function (q, i) { (groups[q.d] = groups[q.d] || []).push([q, i]); });
    Object.keys(groups).forEach(function (g) {
      form.appendChild(h('h3.diag-group', g));
      groups[g].forEach(function (pair) {
        var q = pair[0], i = pair[1];
        form.appendChild(h('div.diag-q.reveal', h('p', h('b', (i + 1) + '. '), q.q), h('div.diag-opts', q.o.map(function (o, oi) {
          var b = h('button.diag-opt' + (A[i] === oi ? '.sel' : ''), { onclick: function () {
            A[i] = oi; MBA.store.save(); this.parentNode.querySelectorAll('.diag-opt').forEach(function (x) { x.classList.remove('sel'); }); this.classList.add('sel'); upd();
          } }, h('span.lvl', String(oi)), o);
          return b;
        }))));
      });
    });
    var result = h('div.diag-result');
    page.appendChild(h('div.diag-layout', form, h('aside.diag-side', result)));
    function upd() {
      result.innerHTML = '';
      var answered = Object.keys(A).length;
      var dims = Object.keys(groups), scores = dims.map(function (g) {
        var a = groups[g].filter(function (p) { return A[p[1]] != null; });
        return a.length ? a.reduce(function (x, p) { return x + A[p[1]]; }, 0) / (a.length * 3) : 0;
      });
      var overall = scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
      result.appendChild(h('div.side-box', h('h4', 'Health score'), h('div.big-score', Math.round(overall * 100) + '/100'), h('small', answered + ' / ' + DIAG.length + ' answered')));
      var rc = h('div.w-chart'); result.appendChild(rc);
      U.radar(rc, { axes: dims.map(function (d) { return d.split(' ')[0]; }), values: scores.map(function (x) { return x * 5; }), max: 5 });
      var fixes = DIAG.map(function (q, i) { return { q: q, v: A[i] }; }).filter(function (x) { return x.v != null && x.v < 2; }).sort(function (a, b) { return a.v - b.v; }).slice(0, 5);
      if (fixes.length) result.appendChild(h('div.side-box', h('h4', '🔧 Top priorities'), h('ol', fixes.map(function (f) {
        var t = MBA.track(f.q.t);
        return h('li', h('b', f.q.d + ': '), f.q.fix, t ? h('a.tag', { href: '#/track/' + t.id }, t.icon + ' ' + t.title) : null);
      }))));
      else if (answered) result.appendChild(h('p.muted', 'No critical gaps among answered questions. 🎉'));
      if (answered === DIAG.length && !U.embedded) result.appendChild(h('button.btn.ghost.small', { onclick: function () { window.print(); } }, '🖨️ Print report'));
    }
    upd();
    return page;
  };

  /* ================= TOOLKIT ================= */
  P.toolkit = function () {
    var cats = {};
    Object.keys(MBA.widgets).forEach(function (id) { var w = MBA.widgets[id]; (cats[w.cat] = cats[w.cat] || []).push([id, w]); });
    var page = h('div.page', pageHead('🧰', 'Toolkit', 'Calculators, simulators and canvases used by founders, consultants and CFOs. Every one explains its result in plain English.'));
    Object.keys(cats).forEach(function (c) {
      page.appendChild(h('h2', c));
      page.appendChild(h('div.tool-grid', cats[c].map(function (p) {
        return h('a.tool-card.reveal', { href: '#/tool/' + p[0] }, h('span.tool-icon', p[1].icon), h('b', p[1].title), h('small', p[1].desc));
      })));
    });
    return page;
  };
  P.tool = function (id) {
    if (!MBA.widgets[id]) return P.notFound();
    var related = MBA.allLessons().filter(function (x) { return (x.lesson.blocks || []).some(function (b) { return b.type === 'interactive' && b.widget === id; }); }).slice(0, 6);
    return h('div.page', h('nav.crumbs', h('a', { href: '#/toolkit' }, 'Toolkit')), RD.widget(id),
      related.length ? h('section', h('h3', 'Learn the concepts behind it'), h('div', related.map(function (x) { return h('a.tag', { href: '#/lesson/' + x.lesson.id }, x.track.icon + ' ' + x.lesson.title); }))) : null);
  };

  /* ================= CASES ================= */
  P.cases = function () {
    var page = h('div.page', pageHead('📚', 'Case library', 'Step into the shoes of real leaders at the moment of decision. Choose, then see what actually happened.'));
    var filter = h('div.filters'), grid = h('div.case-grid');
    var inds = ['All'].concat(MBA.cases.map(function (c) { return c.industry; }).filter(function (x, i, a) { return x && a.indexOf(x) === i; }).sort());
    var cur = 'All';
    inds.forEach(function (ind) { filter.appendChild(h('button.chip' + (ind === cur ? '.on' : ''), { onclick: function () { cur = ind; filter.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x.textContent === ind); }); draw(); } }, ind)); });
    function draw() {
      grid.innerHTML = '';
      MBA.cases.filter(function (c) { return cur === 'All' || c.industry === cur; }).forEach(function (c) {
        var done = MBA.store.get().cases[c.id];
        grid.appendChild(h('a.case-card' + (done ? '.done' : ''), { href: '#/case/' + c.id }, h('small', (c.industry || '') + ' · ' + (c.year || '')), h('h3', c.company), h('p', c.title), done ? h('span.pill.good', done === 2 ? '✓ Best call' : '✓ Played') : null));
      });
    }
    draw();
    page.appendChild(filter); page.appendChild(grid);
    return page;
  };
  P.case = function (id) {
    var c = MBA.cases.filter(function (x) { return x.id === id; })[0]; if (!c) return P.notFound();
    var out = h('div.case-out');
    var page = h('div.page.narrow', h('nav.crumbs', h('a', { href: '#/cases' }, 'Case library')),
      h('p.eyebrow', (c.industry || '') + ' · ' + (c.year || '')), h('h1', c.company + ': ' + c.title),
      h('section.block', RD.html(c.situation)),
      h('section.block.scenario', h('h3', '🤔 ' + c.question), h('div.sc-options', (c.options || []).map(function (o) {
        return h('button.sc-opt', { onclick: function () {
          if (out.childNodes.length) return;
          this.classList.add('chosen', o.best ? 'good' : 'bad');
          var s = MBA.store.get(); var first = !s.cases[c.id]; s.cases[c.id] = o.best ? 2 : 1; MBA.store.save();
          if (first) MBA.store.addXP(o.best ? 30 : 15, 'Case decided');
          var best = (c.options || []).filter(function (x) { return x.best; }).map(function (x) { return x.text; });
          out.appendChild(h('div.case-reveal',
            h('div.' + (o.best ? 'ok' : 'no'), h('b', o.best ? '✅ That was the strongest call. ' : '🤔 Likely outcome: '), h('span', { html: o.result })),
            !o.best && best.length ? h('p', h('b', 'Strongest option: '), best.join(' / ')) : null,
            h('h3', '📈 What actually happened'), RD.html(c.whatHappened),
            c.lessons ? h('div', h('h3', '🎓 Lessons'), h('ul', c.lessons.map(function (l) { return h('li', { html: l }); }))) : null,
            c.frameworks ? h('p', h('b', 'Frameworks: '), c.frameworks.join(' · ')) : null,
            c.track && MBA.track(c.track) ? h('a.tag', { href: '#/track/' + c.track }, 'Go deeper: ' + MBA.track(c.track).title + ' →') : null));
          if (o.best) U.confetti();
        } }, h('span', { html: o.text }));
      })), out));
    return page;
  };

  /* ================= ARENA ================= */
  P.arena = function () {
    var page = h('div.page', pageHead('🏆', 'Challenge arena', 'Consulting-style case problems and real operator dilemmas. Structure your answer, then compare with a model answer and self-score against the rubric.'));
    var roles = ['All'].concat(MBA.challenges.map(function (c) { return c.role; }).filter(function (x, i, a) { return x && a.indexOf(x) === i; }));
    var cur = 'All', filter = h('div.filters'), list = h('div.arena-list');
    roles.forEach(function (r) { filter.appendChild(h('button.chip' + (r === cur ? '.on' : ''), { onclick: function () { cur = r; filter.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x.textContent === r); }); draw(); } }, r)); });
    function draw() {
      list.innerHTML = '';
      MBA.challenges.filter(function (c) { return cur === 'All' || c.role === cur; }).sort(function (a, b) { return a.difficulty - b.difficulty; }).forEach(function (c) {
        var sc = MBA.store.get().challenges['arena:' + c.id];
        list.appendChild(h('a.arena-row', { href: '#/challenge/' + c.id }, h('span.diff.d' + c.difficulty, '●'.repeat(c.difficulty) + '○'.repeat(3 - c.difficulty)), h('div', h('b', c.title), h('small', (c.role || '') + (MBA.track(c.track) ? ' · ' + MBA.track(c.track).title : ''))), sc ? h('span.pill.good', typeof sc === 'number' && sc > 1 ? 'Score ' + Math.round((sc - 1) * 100) + '%' : 'Attempted') : null));
      });
    }
    draw();
    page.appendChild(filter); page.appendChild(list);
    return page;
  };
  P.challenge = function (id) {
    var c = MBA.challenges.filter(function (x) { return x.id === id; })[0]; if (!c) return P.notFound();
    var key = 'arena:' + c.id, s = MBA.store.get();
    var ta = h('textarea.work', { rows: 12, placeholder: '1. Clarify the objective\n2. Structure (issue tree / framework)\n3. Analyse the numbers\n4. Recommendation + risks + next steps' });
    ta.value = s.notes[key] || ''; ta.addEventListener('input', function () { s.notes[key] = ta.value; MBA.store.save(); });
    var hints = h('div.hints'), hi = 0, model = h('div.model');
    var table = c.data ? h('div.table-wrap', h('table.compare', h('thead', h('tr', c.data.headers.map(function (x) { return h('th', x); }))), h('tbody', c.data.rows.map(function (r) { return h('tr', r.map(function (x) { return h('td', String(x)); })); })))) : null;
    return h('div.page.narrow', h('nav.crumbs', h('a', { href: '#/arena' }, 'Challenge arena')),
      h('p.eyebrow', (c.role || '') + ' · Difficulty ' + '●'.repeat(c.difficulty)), h('h1', c.title),
      h('section.block', RD.html(c.scenario), table),
      h('section.block', h('h3', 'Your tasks'), h('ol', (c.tasks || []).map(function (t) { return h('li', { html: t }); }))),
      h('section.challenge-box', h('h3', '✍️ Your answer'), ta,
        h('div.row-actions',
          h('button.btn.ghost.small', { onclick: function () { if (c.hints && hi < c.hints.length) hints.appendChild(h('p.hint', '💡 ' + c.hints[hi++])); } }, 'Hint'),
          h('button.btn.small', { onclick: function () {
            if (model.childNodes.length) return;
            var checks = (c.rubric || []).map(function (r) { var cb = h('input', { type: 'checkbox' }); return [cb, h('li', h('label', cb, h('span', r)))]; });
            model.appendChild(h('div.model-inner', h('h4', 'Model answer'), RD.html(c.modelAnswer),
              checks.length ? h('div', h('h4', 'Self-score: did your answer include…'), h('ul.checks', checks.map(function (x) { return x[1]; })),
                h('button.btn.small', { onclick: function () {
                  var n = checks.filter(function (x) { return x[0].checked; }).length, sc = n / checks.length;
                  var first = !s.challenges[key]; s.challenges[key] = 1 + sc; MBA.store.save();
                  if (first) MBA.store.addXP(Math.round(20 + 60 * sc), 'Arena challenge');
                  U.toast('Scored ' + Math.round(sc * 100) + '%'); if (sc === 1) U.confetti();
                } }, 'Save my score')) : null));
          } }, 'Reveal model answer')),
        hints, model));
  };

  /* ================= GLOSSARY ================= */
  P.glossary = function () {
    var terms = [], seen = {};
    MBA.allLessons().forEach(function (x) { (x.lesson.terms || []).forEach(function (t) { var k = t.term.toLowerCase(); if (!seen[k]) { seen[k] = 1; terms.push({ term: t.term, def: t.def, lesson: x.lesson, track: x.track }); } }); });
    terms.sort(function (a, b) { return a.term.localeCompare(b.term); });
    var input = h('input.search', { type: 'search', placeholder: 'Search ' + terms.length + ' business terms…', 'aria-label': 'Search glossary' });
    var list = h('dl.glossary');
    function draw() {
      var q = input.value.toLowerCase().trim(); list.innerHTML = ''; var letter = '';
      terms.filter(function (t) { return !q || t.term.toLowerCase().indexOf(q) >= 0 || t.def.toLowerCase().indexOf(q) >= 0; }).forEach(function (t) {
        var L = t.term[0].toUpperCase(); if (L !== letter && !q) { letter = L; list.appendChild(h('h3.g-letter', L)); }
        list.appendChild(h('div.g-item', h('dt', t.term), h('dd', h('span', { html: t.def }), ' ', h('a.g-src', { href: '#/lesson/' + t.lesson.id }, t.track.icon + ' ' + t.lesson.title))));
      });
    }
    input.addEventListener('input', draw); draw();
    return h('div.page.narrow', pageHead('📖', 'Glossary', 'Every important term from every lesson, in plain English.'), input, list);
  };

  /* ================= FRAMEWORKS LIBRARY ================= */
  P.frameworks = function () {
    var items = [];
    MBA.allLessons().forEach(function (x) { (x.lesson.blocks || []).forEach(function (b) { if (b.type === 'framework' || b.type === 'matrix' || b.type === 'formula') items.push({ b: b, x: x }); }); });
    var input = h('input.search', { type: 'search', placeholder: 'Search ' + items.length + ' frameworks, matrices and formulas…', 'aria-label': 'Search frameworks' });
    var kinds = { framework: '🧠 Frameworks', matrix: '🔲 Matrices', formula: '🧮 Formulas' }, cur = 'all';
    var filter = h('div.filters', [['all', 'All']].concat(Object.keys(kinds).map(function (k) { return [k, kinds[k]]; })).map(function (p) {
      return h('button.chip' + (p[0] === cur ? '.on' : ''), { 'data-k': p[0], onclick: function () { cur = p[0]; filter.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('on', c.getAttribute('data-k') === cur); }); draw(); } }, p[1]);
    }));
    var grid = h('div.fw-lib');
    function draw() {
      var q = input.value.toLowerCase(); grid.innerHTML = '';
      items.filter(function (it) { return (cur === 'all' || it.b.type === cur) && (!q || (it.b.name || '').toLowerCase().indexOf(q) >= 0); }).forEach(function (it) {
        var open = h('details.fw-item', h('summary', h('span.tag-k', it.b.type), h('b', it.b.name), h('small', it.x.track.icon + ' ' + it.x.lesson.title)));
        open.addEventListener('toggle', function () { if (open.open && open.childNodes.length === 1) { var n = RD.block(it.b, it.x.lesson); n.classList.add('in'); open.appendChild(n); open.appendChild(h('a.tag', { href: '#/lesson/' + it.x.lesson.id }, 'Open lesson →')); } }, false);
        grid.appendChild(open);
      });
    }
    input.addEventListener('input', draw); draw();
    return h('div.page.narrow', pageHead('🧠', 'Frameworks library', 'Your consultant\'s cheat sheet: every framework, 2×2 matrix and formula in the course — searchable, interactive.'), input, filter, grid);
  };

  /* ================= PRACTICE ================= */
  P.practice = function () {
    var pool = [];
    MBA.allLessons().forEach(function (x) { (x.lesson.quiz || []).forEach(function (q) { pool.push({ q: q, x: x }); }); });
    var page = h('div.page.narrow', pageHead('🎲', 'Daily drill', '10 random questions from across the whole curriculum. The fastest way to keep everything fresh.'));
    if (!pool.length) return page;
    var picks = []; for (var i = 0; i < Math.min(10, pool.length); i++) picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    var fake = { id: 'drill-' + Date.now(), quiz: picks.map(function (p) { return p.q; }) };
    page.appendChild(RD.quiz(fake, function (c, n) { if (c / n >= 0.7) MBA.store.addXP(30, 'Drill bonus'); }));
    page.appendChild(h('button.btn', { onclick: function () { MBA.app.route(); } }, 'New drill ↻'));
    return page;
  };

  /* ================= TRENDS ================= */
  P.trends = function () {
    var page = h('div.page', pageHead('📡', 'What\'s changing now', 'The shifts reshaping business in 2025–2026 — and what to do about each.'));
    page.appendChild(h('div.trend-grid', MBA.trends.map(function (t, i) {
      return h('details.trend.reveal', { style: { '--i': i % 6 } }, h('summary', h('span.pill', t.category), h('h3', t.title), h('p', { html: t.summary })),
        h('div.trend-body', h('p', h('b', 'Why it matters: '), h('span', { html: t.why })), t.examples ? h('ul', t.examples.map(function (e) { return h('li', { html: e }); })) : null, h('p.action', h('b', '👉 Do this: '), h('span', { html: t.action }))));
    })));
    return page;
  };

  /* ================= PROFILE ================= */
  P.profile = function () {
    var s = MBA.store.get(), lv = MBA.store.level();
    var name = h('input.search', { value: s.name || '', placeholder: 'Your name (for certificates)', 'aria-label': 'Your name' });
    name.addEventListener('input', function () { s.name = name.value; MBA.store.save(); });
    var bar = lv.next ? (lv.xp - lv.floor) / (lv.next - lv.floor) : 1;
    return h('div.page.narrow', pageHead('👤', 'Your progress'), name,
      h('section.side-box', h('h4', '🏅 ' + lv.name), h('div.xpbar', h('i', { style: { width: bar * 100 + '%' } })), h('small', lv.xp + ' XP' + (lv.next ? ' · ' + (lv.next - lv.xp) + ' XP to ' + lv.nextName : ' · max rank'))),
      h('div.track-grid', MBA.tracks.map(trackCard)),
      h('section.side-box', h('h4', 'Certificates'), (function () {
        var done = MBA.tracks.filter(function (t) { return trackProgress(t).p === 1; });
        return done.length ? h('ul', done.map(function (t) { return h('li', h('a', { href: '#/track/' + t.id }, t.icon + ' ' + t.title)); })) : h('p.muted', 'Complete every lesson in a track to earn its certificate.');
      })()),
      h('div.row-actions',
        U.embedded ? null : h('button.btn.ghost.small', { onclick: function () {
          var blob = new Blob([JSON.stringify(s, null, 1)], { type: 'application/json' }), a = h('a', { href: URL.createObjectURL(blob), download: 'mba-studio-progress.json' }); document.body.appendChild(a); a.click(); a.remove();
        } }, '⬇️ Export progress'),
        h('label.btn.ghost.small', '⬆️ Import', h('input', { type: 'file', accept: 'application/json', style: { display: 'none' }, onchange: function (e) {
          var f = e.target.files[0]; if (!f) return; var r = new FileReader(); r.onload = function () { try { localStorage.setItem('mba-studio-v1', r.result); location.reload(); } catch (err) { U.toast('Import failed'); } }; r.readAsText(f);
        } })),
        U.confirmBtn('Reset everything', 'Click again to erase all progress', function () { MBA.store.reset(); location.hash = '#/'; location.reload(); }, 'danger')));
  };

  /* ================= SEARCH ================= */
  P.search = function (q) {
    q = decodeURIComponent(q || '').toLowerCase();
    var res = [];
    if (q) {
      MBA.tracks.forEach(function (t) { if ((t.title + ' ' + t.summary).toLowerCase().indexOf(q) >= 0) res.push(['Track', t.icon + ' ' + t.title, '#/track/' + t.id]); });
      MBA.allLessons().forEach(function (x) {
        var l = x.lesson, hay = (l.title + ' ' + (l.hook || '')).toLowerCase();
        if (hay.indexOf(q) >= 0) res.push(['Lesson', x.track.icon + ' ' + l.title, '#/lesson/' + l.id]);
        (l.blocks || []).forEach(function (b) { if ((b.name || b.company || '').toLowerCase().indexOf(q) >= 0) res.push([b.type === 'case' ? 'Case' : 'Framework', (b.name || b.company) + ' — in ' + l.title, '#/lesson/' + l.id]); });
        (l.terms || []).forEach(function (t) { if (t.term.toLowerCase().indexOf(q) >= 0) res.push(['Term', t.term + ' — ' + l.title, '#/lesson/' + l.id]); });
      });
      MBA.cases.forEach(function (c) { if ((c.company + ' ' + c.title).toLowerCase().indexOf(q) >= 0) res.push(['Case', c.company + ': ' + c.title, '#/case/' + c.id]); });
      MBA.challenges.forEach(function (c) { if (c.title.toLowerCase().indexOf(q) >= 0) res.push(['Challenge', c.title, '#/challenge/' + c.id]); });
      Object.keys(MBA.widgets).forEach(function (id) { var w = MBA.widgets[id]; if ((w.title + ' ' + w.desc).toLowerCase().indexOf(q) >= 0) res.push(['Tool', w.icon + ' ' + w.title, '#/tool/' + id]); });
    }
    return h('div.page.narrow', pageHead('🔎', 'Search', res.length + ' results for "' + q + '"'),
      h('ul.search-res', res.slice(0, 150).map(function (r) { return h('li', h('a', { href: r[2] }, h('span.pill', r[0]), ' ', r[1])); })));
  };

  P.notFound = function () { return h('div.page.narrow', pageHead('🧭', 'Not found', 'That page does not exist (yet).'), h('a.btn', { href: '#/' }, 'Go home')); };

  MBA.pages = P;
})();
