/* Block + lesson renderers. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h;

  function html(s) { return h('div.rich', { html: s || '' }); }

  /* Embeds a simulator widget into any container. */
  function widget(id, title, note) {
    var def = MBA.widgets[id];
    if (!def) return h('div.callout.warning', 'Interactive "' + id + '" is not available.');
    var body = h('div.widget-body');
    var box = h('section.widget.reveal',
      h('header.widget-head', h('span.widget-icon', def.icon), h('div', h('b', title || def.title), h('small', def.desc)), h('a.widget-open', { href: '#/tool/' + id, title: 'Open full screen' }, '⤢')),
      note ? h('p.widget-note', '🎮 ' + note) : null,
      body);
    try { def.render(body); } catch (e) { body.textContent = 'Could not load this interactive.'; if (window.console) console.error(e); }
    return box;
  }

  var R = {};

  R.text = function (b) { return h('section.block.reveal', b.title ? h('h3', b.title) : null, html(b.html)); };

  R.callout = function (b) {
    var icons = { tip: '💡', warning: '⚠️', example: '🧾', insight: '🔍', myth: '🙅' };
    var names = { tip: 'Tip', warning: 'Watch out', example: 'Example', insight: 'Insight', myth: 'Myth vs reality' };
    return h('aside.callout.reveal.' + (b.kind || 'tip'), h('div.callout-head', h('span', icons[b.kind] || '💡'), h('b', b.title || names[b.kind] || 'Note')), html(b.html));
  };

  R.framework = function (b) {
    var steps = b.steps || [], cur = -1, timer = null;
    var detail = h('div.fw-detail', { 'aria-live': 'polite' }, h('p.muted', 'Tap a step, or press ▶ to walk through it.'));
    var nodes = steps.map(function (s, i) {
      var n = h('button.fw-step', { style: { '--i': i }, onclick: function () { stop(); go(i); } }, h('span.fw-num', String(i + 1)), h('span.fw-label', s.label));
      return n;
    });
    function go(i) {
      cur = i;
      nodes.forEach(function (n, k) { n.classList.toggle('active', k === i); n.classList.toggle('seen', k < i); });
      detail.innerHTML = '';
      detail.appendChild(h('div.fw-card', h('small', 'Step ' + (i + 1) + ' of ' + steps.length), h('h4', steps[i].label), html(steps[i].desc)));
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; play.textContent = '▶ Play'; } }
    var play = h('button.btn.small', {
      onclick: function () {
        if (timer) return stop();
        play.textContent = '⏸ Pause'; go(cur < 0 || cur >= steps.length - 1 ? 0 : cur + 1);
        timer = setInterval(function () { if (cur >= steps.length - 1) return stop(); go(cur + 1); }, 3800);
      }
    }, '▶ Play');
    return h('section.block.framework.reveal',
      h('div.block-tag', '🧠 Framework'),
      h('h3', b.name), b.by ? h('p.byline', b.by) : null,
      b.when ? h('p.when', h('b', 'Use it when: '), b.when) : null,
      h('div.fw-steps' + (steps.length > 6 ? '.many' : ''), nodes),
      h('div.fw-controls', play, h('button.btn.small.ghost', { onclick: function () { stop(); if (cur > 0) go(cur - 1); } }, '←'), h('button.btn.small.ghost', { onclick: function () { stop(); if (cur < steps.length - 1) go(cur + 1); } }, '→')),
      detail);
  };

  R.matrix = function (b) {
    var detail = h('div.mx-detail', h('p.muted', 'Tap a quadrant to learn what it means.'));
    var cells = (b.cells || []).map(function (c, i) {
      return h('button.mx-cell.q' + i, { style: { '--i': i }, onclick: function () {
        cells.forEach(function (x) { x.classList.remove('active'); }); this.classList.add('active');
        detail.innerHTML = ''; detail.appendChild(h('div.fw-card', h('h4', c.label), html(c.desc)));
      } }, h('b', c.label));
    });
    return h('section.block.matrix.reveal', h('div.block-tag', '🔲 2×2 Matrix'), h('h3', b.name),
      h('div.mx-wrap', h('div.mx-y', b.yLabel || ''), h('div.mx-grid', cells), h('div.mx-x', b.xLabel || '')), detail);
  };

  R.formula = function (b) {
    return h('section.block.formula.reveal', h('div.block-tag', '🧮 Formula'), h('h3', b.name),
      h('div.formula-expr', b.expr),
      b.explain ? h('div.formula-explain', html(b.explain)) : null,
      b.example ? h('div.formula-example', h('b', 'Worked example'), html(b.example)) : null);
  };

  R.compare = function (b) {
    var t = h('table.compare');
    if (b.headers) t.appendChild(h('thead', h('tr', b.headers.map(function (x) { return h('th', { html: x }); }))));
    t.appendChild(h('tbody', (b.rows || []).map(function (r) { return h('tr', r.map(function (c, i) { return h(i ? 'td' : 'th', { html: c }); })); })));
    return h('section.block.reveal', b.title ? h('h3', b.title) : null, h('div.table-wrap', t));
  };

  R.flip = function (b) {
    return h('section.block.reveal', h('div.block-tag', '🃏 Flashcards'), h('h3', b.title || 'Test yourself'),
      h('div.flips', (b.cards || []).map(function (c, i) {
        var card = h('button.flip', { style: { '--i': i }, 'aria-label': 'Flip card', onclick: function () { card.classList.toggle('flipped'); } },
          h('span.flip-inner', h('span.flip-front', { html: c.front }), h('span.flip-back', { html: c.back })));
        return card;
      })));
  };

  R.timeline = function (b) {
    return h('section.block.reveal', h('div.block-tag', '🕰️ Timeline'), h('h3', b.title || 'Timeline'),
      h('ol.timeline', (b.items || []).map(function (it, i) { return h('li', { style: { '--i': i } }, h('b', it.label), html(it.desc)); })));
  };

  R.case = function (b) {
    var parts = [['📍 Situation', b.situation], ['🤔 The decision', b.decision], ['📈 What happened', b.outcome], ['🎓 The lesson', b.lesson]];
    var shown = 1, body = h('div.case-parts'), btn;
    function draw() {
      body.innerHTML = '';
      parts.slice(0, shown).forEach(function (p, i) { if (p[1]) body.appendChild(h('div.case-part', { style: { '--i': i } }, h('b', p[0]), html(p[1]))); });
      btn.style.display = shown >= parts.length ? 'none' : '';
      if (parts[shown]) btn.textContent = 'Reveal ' + parts[shown][0].replace(/^\S+\s/, '').toLowerCase() + ' →';
    }
    btn = h('button.btn.small', { onclick: function () { shown++; draw(); } }, 'Reveal next →');
    var node = h('section.block.case.reveal', h('div.block-tag', '📚 Case study'), h('h3', b.company + (b.title ? ': ' + b.title : '')), b.year ? h('p.byline', b.year) : null, body, btn);
    draw();
    return node;
  };

  R.interactive = function (b) { return widget(b.widget, b.title, b.note); };

  R.scenario = function (b) {
    var fb = h('div.sc-feedback', { 'aria-live': 'polite' });
    return h('section.block.scenario.reveal', h('div.block-tag', '🎯 What would you do?'), h('div.rich', { html: b.prompt }),
      h('div.sc-options', (b.options || []).map(function (o) {
        return h('button.sc-opt', { onclick: function () {
          this.parentNode.querySelectorAll('.sc-opt').forEach(function (x) { x.classList.remove('chosen', 'good', 'bad'); });
          this.classList.add('chosen', o.good ? 'good' : 'bad');
          fb.innerHTML = ''; fb.appendChild(h('div.' + (o.good ? 'ok' : 'no'), h('b', o.good ? '✅ Strong choice. ' : '🤔 Think again. '), h('span', { html: o.feedback })));
        } }, h('span', { html: o.text }));
      })), fb);
  };

  R.checklist = function (b, ctx) {
    var base = 'cl:' + (ctx && ctx.id || 'x') + ':' + (b.title || '').slice(0, 30);
    return h('section.block.checklist.reveal', h('div.block-tag', '☑️ Checklist'), h('h3', b.title || 'Checklist'),
      h('ul.checks', (b.items || []).map(function (it, i) {
        var key = base + ':' + i, cb = h('input', { type: 'checkbox' }); cb.checked = MBA.store.isChecked(key);
        cb.addEventListener('change', function () { MBA.store.setCheck(key, cb.checked); });
        return h('li', h('label', cb, h('span', { html: it })));
      })));
  };

  function block(b, ctx) {
    var fn = R[b.type];
    if (!fn) return h('div');
    try { return fn(b, ctx); } catch (e) { if (window.console) console.error(e, b); return h('div.callout.warning', 'Could not render a block.'); }
  }

  /* ---------- quiz ---------- */
  function quiz(lesson, onDone) {
    var qs = lesson.quiz || [], answered = 0, correct = 0;
    var score = h('div.quiz-score');
    var wrap = h('section.quiz', h('h2', '📝 Quick check'), h('p.muted', 'Answer to lock in what you learned. +10 XP per correct answer.'));
    qs = qs.map(function (q) {
      // shuffle options so the right answer's position carries no signal
      var order = q.options.map(function (_, i) { return i; });
      for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = order[i]; order[i] = order[j]; order[j] = t; }
      return { q: q.q, explain: q.explain, options: order.map(function (i) { return q.options[i]; }), answer: order.indexOf(q.answer) };
    });
    qs.forEach(function (q, qi) {
      var exp = h('div.q-explain');
      var opts = h('div.q-opts', q.options.map(function (o, oi) {
        return h('button.q-opt', { onclick: function () {
          if (card.classList.contains('done')) return;
          card.classList.add('done'); answered++;
          var right = oi === q.answer; if (right) { correct++; MBA.store.addXP(10, 'Correct answer'); }
          opts.children[q.answer].classList.add('right'); if (!right) this.classList.add('wrong');
          exp.innerHTML = ''; exp.appendChild(h('p', h('b', right ? '✅ Correct. ' : '❌ Not quite. '), h('span', { html: q.explain || '' })));
          if (answered === qs.length) {
            var s = MBA.store.get(); s.quiz[lesson.id] = Math.max(s.quiz[lesson.id] || 0, correct / qs.length); MBA.store.save();
            score.innerHTML = ''; score.appendChild(h('p', h('b', 'Score: ' + correct + ' / ' + qs.length), correct === qs.length ? ' — perfect! 🎉' : correct / qs.length >= 0.6 ? ' — solid.' : ' — re-read the lesson and try again.'));
            if (correct === qs.length) U.confetti();
            onDone && onDone(correct, qs.length);
          }
        } }, h('span.q-letter', 'ABCDEF'[oi]), h('span', { html: o }));
      }));
      var card = h('div.q-card', h('p.q-text', h('b', 'Q' + (qi + 1) + '. '), h('span', { html: q.q })), opts, exp);
      wrap.appendChild(card);
    });
    wrap.appendChild(score);
    wrap.appendChild(h('button.btn.ghost.small', { onclick: function () { var p = wrap.parentNode, n = quiz(lesson, onDone); p.replaceChild(n, wrap); } }, '↻ Retry quiz'));
    return wrap;
  }

  /* ---------- challenge ---------- */
  function challenge(c, key) {
    if (!c) return null;
    var s = MBA.store.get(), ta = h('textarea.work', { rows: 7, placeholder: 'Think it through here: structure → numbers → recommendation. Saved automatically.' });
    ta.value = s.notes[key] || '';
    ta.addEventListener('input', function () { s.notes[key] = ta.value; MBA.store.save(); });
    var hints = h('div.hints'), hi = 0, model = h('div.model');
    return h('section.challenge-box',
      h('div.block-tag', '🏆 Challenge'), h('h2', c.title || 'Apply it'), html(c.prompt), ta,
      h('div.row-actions',
        (c.hints || []).length ? h('button.btn.ghost.small', { onclick: function () { if (hi < c.hints.length) { hints.appendChild(h('p.hint', '💡 ' + c.hints[hi++])); } } }, 'Get a hint') : null,
        h('button.btn.small', { onclick: function () {
          if (model.childNodes.length) return;
          model.appendChild(h('div.model-inner', h('h4', 'Model answer'), html(c.model)));
          if (!s.challenges[key]) { s.challenges[key] = 1; MBA.store.save(); MBA.store.addXP(25, 'Challenge attempted'); }
        } }, 'Compare with model answer')),
      hints, model);
  }

  /* ---------- bookmarks & personal notes ---------- */
  function bookmarkBtn(key, label, href) {
    var on = MBA.store.isBookmarked(key);
    var b = h('button.btn.ghost.small.bm-btn' + (on ? '.on' : ''), { 'aria-pressed': on ? 'true' : 'false', title: 'Bookmark this page' });
    function paint() { b.textContent = on ? '★ Bookmarked' : '☆ Bookmark'; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    b.addEventListener('click', function () { on = MBA.store.toggleBookmark(key, label, href); paint(); U.toast(on ? 'Bookmarked — find it under Notes & Bookmarks' : 'Bookmark removed'); });
    paint();
    return b;
  }
  function noteBox(key, title) {
    var s = MBA.store.get(), id = 'note-' + key.replace(/[^a-z0-9]+/gi, '-');
    var ta = h('textarea.work', { id: id, rows: 4, placeholder: 'Your own notes: what clicked, what to apply at work, questions to revisit. Saved automatically.' });
    ta.value = s.notes[key] || '';
    ta.addEventListener('input', function () { if (ta.value.trim()) s.notes[key] = ta.value; else delete s.notes[key]; MBA.store.save(); });
    return h('section.notes-box.reveal', h('h2', h('label', { for: id }, '🗒️ ' + (title || 'My notes'))), ta, h('small', 'All your notes are collected on the ', h('a', { href: '#/notes' }, 'Notes & Bookmarks'), ' page.'));
  }

  /* ---------- whole lesson ---------- */
  function lesson(found) {
    var t = found.track, l = found.lesson, i = found.index, ls = t.lessons;
    var prev = ls[i - 1], next = ls[i + 1];
    var done = MBA.store.isDone(l.id);
    var page = h('article.lesson', { style: { '--track': t.color } });
    page.appendChild(h('nav.crumbs', h('a', { href: '#/path' }, 'Learning path'), ' / ', h('a', { href: '#/track/' + t.id }, t.icon + ' ' + t.title), ' / ', h('span', 'Lesson ' + (i + 1))));
    page.appendChild(h('header.lesson-head',
      h('div.lesson-meta', h('span.pill.lvl-' + (l.level || 'Beginner').toLowerCase(), l.level || 'Beginner'), h('span.pill', '⏱ ' + (l.minutes || 10) + ' min'), done ? h('span.pill.good', '✓ Completed') : null,
        bookmarkBtn('lesson:' + l.id, t.icon + ' ' + l.title, '#/lesson/' + l.id)),
      h('h1', l.title), l.hook ? h('p.hook', l.hook) : null));
    if (l.eli5) page.appendChild(h('section.eli5.reveal', h('div.eli5-badge', '🧒 Explain it simply'), html(l.eli5)));
    var body = h('div.lesson-body');
    (l.blocks || []).forEach(function (b) { body.appendChild(block(b, l)); });
    page.appendChild(body);
    if (l.terms && l.terms.length) {
      page.appendChild(h('section.terms.reveal', h('h2', '📖 Key terms'), h('dl', l.terms.map(function (x) { return [h('dt', x.term), h('dd', { html: x.def })]; }))));
    }
    if (l.takeaways && l.takeaways.length) page.appendChild(h('section.takeaways.reveal', h('h2', '🎯 Key takeaways'), h('ul', l.takeaways.map(function (x) { return h('li', { html: x }); }))));
    if (l.quiz && l.quiz.length) page.appendChild(quiz(l));
    if (l.challenge) page.appendChild(challenge(l.challenge, 'lesson:' + l.id));
    page.appendChild(noteBox('mynote:lesson:' + l.id));
    var completeBtn = h('button.btn.big' + (done ? '.ghost' : ''), { onclick: function () {
      if (MBA.store.completeLesson(l.id)) { U.confetti(); completeBtn.textContent = '✓ Completed'; completeBtn.classList.add('ghost'); }
      if (next) location.hash = '#/lesson/' + next.id;
      else { U.toast('Track complete! 🎓 Certificate unlocked in your profile.'); location.hash = '#/track/' + t.id; }
    } }, done ? (next ? 'Next lesson →' : 'Back to track') : (next ? '✓ Mark complete & continue →' : '✓ Complete track'));
    page.appendChild(h('footer.lesson-foot',
      prev ? h('a.btn.ghost', { href: '#/lesson/' + prev.id }, '← ' + prev.title) : h('span'),
      completeBtn));
    return page;
  }

  MBA.render = { block: block, lesson: lesson, widget: widget, html: html, quiz: quiz, challenge: challenge, bookmarkBtn: bookmarkBtn, noteBox: noteBox };
})();
