/* MBA Studio — core registry + progress store. Classic script (works on file://). */
(function () {
  'use strict';

  var MBA = {
    tracks: [],
    cases: [],
    challenges: [],
    roadmap: [],
    trends: [],
    widgets: {},

    addTrack: function (t) { this.tracks.push(t); },
    addCases: function (a) { this.cases.push.apply(this.cases, a); },
    addChallenges: function (a) { this.challenges.push.apply(this.challenges, a); },
    setRoadmap: function (a) { this.roadmap = a; },
    addTrends: function (a) { this.trends.push.apply(this.trends, a); },
    registerWidget: function (id, def) { this.widgets[id] = def; },

    STAGES: [
      { n: 1, name: 'Foundations', desc: 'Zero to fluent: how business and economies actually work.', icon: '🌱' },
      { n: 2, name: 'Build', desc: 'Turn a fuzzy idea into a validated, well-designed business.', icon: '🛠️' },
      { n: 3, name: 'Core Functions', desc: 'Every department a company runs on, plus the analysis, negotiation and communication skills that tie them together.', icon: '⚙️' },
      { n: 4, name: 'Grow & Lead', desc: 'Strategy, capital, deals, innovation, ethics, global business and leading yourself and others.', icon: '🚀' },
      { n: 5, name: 'Specialise', desc: 'Electives that go deep on one lens: sustainability and impact, and doing business in India.', icon: '🎓' }
    ],

    track: function (id) {
      for (var i = 0; i < this.tracks.length; i++) if (this.tracks[i].id === id) return this.tracks[i];
      return null;
    },
    lesson: function (id) {
      for (var i = 0; i < this.tracks.length; i++) {
        var ls = this.tracks[i].lessons || [];
        for (var j = 0; j < ls.length; j++) if (ls[j].id === id) return { track: this.tracks[i], lesson: ls[j], index: j };
      }
      return null;
    },
    sortTracks: function () {
      this.tracks.sort(function (a, b) { return (a.order || 99) - (b.order || 99); });
    },
    allLessons: function () {
      var out = [];
      this.tracks.forEach(function (t) { (t.lessons || []).forEach(function (l) { out.push({ track: t, lesson: l }); }); });
      return out;
    }
  };

  /* ---------- Persistent progress (localStorage, fails soft) ---------- */
  var KEY = 'mba-studio-v1';
  var mem = null;
  function blank() {
    return { done: {}, quiz: {}, xp: 0, days: {}, checks: {}, notes: {}, cases: {}, challenges: {}, lab: {}, bookmarks: {}, theme: null, name: '' };
  }
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY)) || blank(); } catch (e) { mem = blank(); }
    var b = blank();
    for (var k in b) if (!(k in mem)) mem[k] = b[k];
    return mem;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* private mode */ } }
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }

  MBA.store = {
    get: load,
    save: save,
    addXP: function (n, reason) {
      var s = load(); s.xp += n; s.days[today()] = true; save();
      if (MBA.ui && MBA.ui.toast) MBA.ui.toast('+' + n + ' XP · ' + reason, 'xp');
      if (MBA.ui && MBA.ui.refreshHUD) MBA.ui.refreshHUD();
    },
    completeLesson: function (id) {
      var s = load(); if (s.done[id]) return false;
      s.done[id] = Date.now(); save(); this.addXP(50, 'Lesson complete'); return true;
    },
    isDone: function (id) { return !!load().done[id]; },
    setCheck: function (key, val) { var s = load(); if (val) s.checks[key] = 1; else delete s.checks[key]; save(); },
    isChecked: function (key) { return !!load().checks[key]; },
    streak: function () {
      var s = load(), n = 0, d = new Date();
      if (!s.days[today()]) d.setDate(d.getDate() - 1);
      while (true) {
        var k = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        if (s.days[k]) { n++; d.setDate(d.getDate() - 1); } else break;
      }
      return n;
    },
    level: function () {
      var xp = load().xp;
      var ranks = [
        [0, 'Curious Beginner'], [300, 'Business Explorer'], [900, 'Analyst'], [1800, 'Associate'],
        [3000, 'Manager'], [4500, 'Director'], [6500, 'VP'], [9000, 'C-Suite Ready'], [12000, 'Board-Level Advisor']
      ];
      var cur = ranks[0], next = null;
      for (var i = 0; i < ranks.length; i++) { if (xp >= ranks[i][0]) { cur = ranks[i]; next = ranks[i + 1] || null; } }
      return { xp: xp, name: cur[1], floor: cur[0], next: next ? next[0] : null, nextName: next ? next[1] : null };
    },
    reset: function () { mem = blank(); save(); },
    isBookmarked: function (key) { return !!load().bookmarks[key]; },
    toggleBookmark: function (key, label, href) {
      var s = load();
      if (s.bookmarks[key]) delete s.bookmarks[key]; else s.bookmarks[key] = { label: label, href: href, t: Date.now() };
      save(); return !!s.bookmarks[key];
    },
    /* Replace all progress with an imported object. Unknown keys are kept; missing ones get blank() defaults. */
    replace: function (obj) {
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('not a progress object');
      if (!('done' in obj) && !('xp' in obj)) throw new Error('missing progress fields');
      var b = blank();
      for (var k in b) {
        if (!(k in obj) || obj[k] === null && b[k] !== null) obj[k] = b[k];
        else if (b[k] !== null && typeof b[k] !== typeof obj[k]) throw new Error('field "' + k + '" has the wrong type');
      }
      mem = obj; save();
    },
    exportJSON: function () { return JSON.stringify(load(), null, 1); }
  };

  window.MBA = MBA;
})();
