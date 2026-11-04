/* App shell + hash router. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, P = MBA.pages;

  /* Strings are group labels; arrays are [href, icon, label]. */
  var NAV = [
    ['#/', '🏠', 'Home'],
    'Learn',
    ['#/path', '🧭', 'Learning path'],
    ['#/placement', '🎯', 'Placement test'],
    ['#/careers', '🧳', 'Career paths'],
    ['#/series/marketing', '🗺️', 'Marketing map'],
    ['#/review', '🔁', 'Review flashcards'],
    ['#/practice', '🎲', 'Daily drill'],
    'Practise',
    ['#/cases', '📚', 'Case library'],
    ['#/arena', '🏆', 'Challenge arena'],
    ['#/sim', '🏭', 'Company simulation'],
    ['#/toolkit', '🧰', 'Toolkit'],
    'Build a business',
    ['#/lab', '💡', 'Idea Clarity Lab'],
    ['#/roadmap', '🗺️', 'Business roadmap'],
    ['#/advisor', '🩺', 'Health diagnostic'],
    ['#/capstone', '🎓', 'Capstone plan'],
    'Reference',
    ['#/frameworks', '🧠', 'Frameworks'],
    ['#/glossary', '📖', 'Glossary'],
    ['#/trends', '📡', 'Trends 2026–27'],
    'You',
    ['#/notes', '🗒️', 'Notes & Bookmarks'],
    ['#/profile', '👤', 'Progress']
  ];

  function routes(parts) {
    var a = parts[0] || '', b = parts[1];
    switch (a) {
      case '': return P.home();
      case 'path': return P.path();
      case 'track': return P.track(b);
      case 'lesson': return P.lesson(b);
      case 'roadmap': return P.roadmap(b);
      case 'lab': return P.lab();
      case 'advisor': return P.advisor();
      case 'toolkit': return P.toolkit();
      case 'tool': return P.tool(b);
      case 'cases': return P.cases();
      case 'case': return parts[2] === 'discuss' ? P.discuss(b) : P.case(b);
      case 'arena': return P.arena();
      case 'challenge': return P.challenge(b);
      case 'glossary': return P.glossary();
      case 'frameworks': return P.frameworks();
      case 'practice': return P.practice();
      case 'trends': return P.trends();
      case 'profile': return P.profile();
      case 'notes': return P.notes();
      case 'sim': return P.sim();
      case 'review': return P.review();
      case 'placement': return P.placement();
      case 'capstone': return P.capstone();
      case 'careers': return P.careers(b);
      case 'series': return P.series(b);
      case 'search': return P.search(b);
      default: return P.notFound();
    }
  }

  function route() {
    var hash = location.hash || '#/';
    var anchor = null, m = hash.match(/^#\/[^#]*#(.+)$/);
    if (m) { anchor = m[1]; hash = hash.slice(0, hash.length - m[1].length - 1); }
    var parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var main = document.getElementById('main');
    var node;
    try { node = routes(parts); } catch (e) { if (window.console) console.error(e); node = P.notFound(); }
    main.innerHTML = '';
    main.appendChild(node);
    main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter');
    document.querySelectorAll('.nav a').forEach(function (a) {
      var href = a.getAttribute('href'), cur = '#/' + (parts[0] || '');
      a.classList.toggle('active', href === cur || (href === '#/path' && /^(track|lesson)$/.test(parts[0])) || (href === '#/toolkit' && parts[0] === 'tool') || (href === '#/cases' && parts[0] === 'case') || (href === '#/arena' && parts[0] === 'challenge'));
      if (a.classList.contains('active')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var h1 = main.querySelector('h1');
    document.title = (h1 && parts.length ? h1.textContent + ' · ' : '') + 'MBA Studio';
    document.body.classList.remove('nav-open');
    U.drawerClose && U.drawerClose();
    var act = document.querySelector('.nav a.active');
    if (act && window.innerWidth <= 900 && act.scrollIntoView) act.scrollIntoView({ inline: 'center', block: 'nearest' });
    if (anchor) { var t = document.getElementById(anchor); if (t) setTimeout(function () { t.scrollIntoView({ behavior: 'smooth' }); }, 60); }
    else window.scrollTo(0, 0);
    U.reveal(main);
    refreshHUD();
  }

  function refreshHUD() {
    var lv = MBA.store.level(), el = document.getElementById('hud');
    if (!el) return;
    var bar = lv.next ? (lv.xp - lv.floor) / (lv.next - lv.floor) : 1;
    el.innerHTML = '';
    el.appendChild(h('a.hud', { href: '#/profile', title: 'Your progress' },
      h('span.hud-rank', lv.name), h('span.hud-xp', lv.xp.toLocaleString() + ' XP · 🔥 ' + MBA.store.streak()),
      h('span.xpbar', h('i', { style: { width: bar * 100 + '%' } }))));
  }
  U.refreshHUD = refreshHUD;

  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
  }

  function shell() {
    var s = MBA.store.get();
    applyTheme(s.theme);
    var search = h('form.top-search', { role: 'search', onsubmit: function (e) { e.preventDefault(); var v = this.q.value.trim(); if (v) location.hash = '#/search/' + encodeURIComponent(v); } },
      h('input', { name: 'q', type: 'search', placeholder: 'Search lessons, terms, frameworks…', 'aria-label': 'Search' }));
    var app = h('div.app',
      h('aside.side',
        h('a.brand', { href: '#/', 'aria-label': 'MBA Studio home' }, logo(), h('span', h('b', 'MBA Studio'), h('small', 'Zero → Boardroom'))),
        h('nav.nav', { 'aria-label': 'Main' }, (function () {
          var n = 0;
          return NAV.map(function (it) {
            if (typeof it === 'string') return h('span.nav-group', it);
            n++;
            return h('a', { href: it[0] }, h('span.nav-n', { 'aria-hidden': 'true' }, (n < 10 ? '0' : '') + n), h('span.nav-ico', { 'aria-hidden': 'true' }, it[1]), h('span.nav-label', it[2]));
          });
        })()),
        h('div#hud'),
        h('div.rail-foot', h('button.chipbtn', { type: 'button', onclick: function () {
          var cur = document.documentElement.getAttribute('data-theme');
          var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
          s.theme = dark ? 'light' : 'dark'; MBA.store.save(); applyTheme(s.theme);
          U.toast(s.theme === 'dark' ? 'Dark theme' : 'Light theme');
          if (MBA.app.route) MBA.app.route();
        } }, '◐ Theme'), h('span.rail-note', 'Learn · Practise · Build'))),
      h('div.content',
        h('header.topbar', h('button.menu-btn', { 'aria-label': 'Menu', onclick: function () { document.body.classList.toggle('nav-open'); } }, '☰'), search),
        h('main#main'),
        h('footer.foot', 'MBA Studio · Learn anywhere, offline. Educational content — not legal, tax or investment advice.')),
      h('div.scrim', { onclick: function () { document.body.classList.remove('nav-open'); } }),
      h('div#toasts', { 'aria-live': 'polite' }));
    document.body.appendChild(app);
    U.drawerInit();
  }

  /* Brand mark: a ring of value (gold) with a growth wave (teal) running through it. */
  function logo() {
    var w = document.createElement('span'); w.className = 'logo'; w.setAttribute('aria-hidden', 'true');
    w.innerHTML = '<svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--accent)" stroke-width="1.6"/>' +
      '<path class="logo-wave" d="M8 22c3.5-9 6.5 4 9-4.5s6 4.5 10-2.5" fill="none" stroke="var(--accent-2)" stroke-width="2.2" stroke-linecap="round"/>' +
      '<circle cx="18" cy="17" r="2.6" fill="var(--accent)"/></svg>';
    return w;
  }

  MBA.app = { route: route };

  document.addEventListener('DOMContentLoaded', function () {
    MBA.sortTracks();
    shell();
    window.addEventListener('hashchange', route);
    route();
  });
})();
