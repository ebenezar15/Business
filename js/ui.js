/* UI helpers, tiny SVG chart kit, toasts, confetti, reveal animations. */
(function () {
  'use strict';
  var MBA = window.MBA;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* h('div.card#id', {attrs}, children...) */
  function h(sel, attrs) {
    var m = sel.match(/^([a-z0-9]+)?((?:[.#][\w-]+)*)$/i) || [];
    var node = document.createElement(m[1] || 'div');
    (m[2] || '').replace(/([.#])([\w-]+)/g, function (_, t, v) { if (t === '.') node.classList.add(v); else node.id = v; });
    var kids = Array.prototype.slice.call(arguments, 2);
    if (attrs && (typeof attrs !== 'object' || attrs.nodeType || Array.isArray(attrs))) { kids.unshift(attrs); attrs = null; }
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'style' && typeof v === 'object') for (var s in v) node.style.setProperty(s, v[s]);
      else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    }
    (function add(list) {
      list.forEach(function (c) {
        if (c == null || c === false) return;
        if (Array.isArray(c)) add(c);
        else node.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
      });
    })(kids);
    return node;
  }

  function fmt(n, opts) {
    opts = opts || {};
    if (!isFinite(n)) return '∞';
    var cur = opts.cur === undefined ? '' : opts.cur;
    var abs = Math.abs(n), sign = n < 0 ? '−' : '';
    var d = opts.d != null ? opts.d : (abs < 10 && abs % 1 ? 2 : 0);
    var s;
    if (opts.compact && abs >= 1e9) s = (abs / 1e9).toFixed(1) + 'B';
    else if (opts.compact && abs >= 1e6) s = (abs / 1e6).toFixed(1) + 'M';
    else if (opts.compact && abs >= 1e4) s = (abs / 1e3).toFixed(1) + 'K';
    else s = abs.toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
    return sign + cur + s;
  }
  function money(n, d) { return fmt(n, { cur: '$', compact: true, d: d }); }
  function pct(n, d) { return (isFinite(n) ? (n * 100).toFixed(d == null ? 1 : d) : '∞') + '%'; }

  /* ---------- toasts ---------- */
  function toast(msg, kind) {
    var wrap = document.getElementById('toasts');
    if (!wrap) return;
    var t = h('div.toast' + (kind ? '.toast-' + kind : ''), { role: 'status' }, msg);
    wrap.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 2200);
    setTimeout(function () { t.remove(); }, 2700);
  }

  /* ---------- confetti ---------- */
  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#0ea5e9', '#f43f5e'];
    var box = h('div.confetti');
    for (var i = 0; i < 80; i++) {
      var p = h('i');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.4 + 's';
      p.style.animationDuration = 1.6 + Math.random() * 1.4 + 's';
      p.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3400);
  }

  /* ---------- reveal on scroll ---------- */
  var io = null;
  function reveal(root) {
    var nodes = (root || document).querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -40px 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- count-up numbers ---------- */
  function countUp(node, to, formatter, ms) {
    formatter = formatter || function (v) { return Math.round(v).toLocaleString(); };
    var from = parseFloat(node.getAttribute('data-v') || '0') || 0;
    node.setAttribute('data-v', to);
    if (!isFinite(to) || !isFinite(from)) { node.textContent = formatter(to); return; }
    var start = null; ms = ms || 450;
    function step(ts) {
      if (!start) start = ts;
      var k = Math.min(1, (ts - start) / ms), e = 1 - Math.pow(1 - k, 3);
      node.textContent = formatter(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- tiny SVG chart kit ---------- */
  var NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  /* lineChart(container, {series:[{name,color,points:[[x,y]...], dash}], xLabel, yLabel, markers:[{x,y,label}], yFmt, xFmt, area}) */
  function lineChart(container, cfg) {
    var W = 560, H = 260, P = { l: 56, r: 16, t: 16, b: 38 };
    var xs = [], ys = [];
    cfg.series.forEach(function (sr) { sr.points.forEach(function (p) { xs.push(p[0]); ys.push(p[1]); }); });
    (cfg.markers || []).forEach(function (m) { ys.push(m.y); });
    var x0 = cfg.xMin != null ? cfg.xMin : Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
    var y0 = cfg.yMin != null ? cfg.yMin : Math.min(0, Math.min.apply(null, ys)), y1 = cfg.yMax != null ? cfg.yMax : Math.max.apply(null, ys);
    if (y1 === y0) y1 = y0 + 1; if (x1 === x0) x1 = x0 + 1;
    y1 += (y1 - y0) * 0.06;
    var X = function (v) { return P.l + (v - x0) / (x1 - x0) * (W - P.l - P.r); };
    var Y = function (v) { return H - P.b - (v - y0) / (y1 - y0) * (H - P.t - P.b); };
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.label || 'chart' });
    var yf = cfg.yFmt || function (v) { return fmt(v, { compact: true, d: y1 - y0 >= 8 ? 0 : 1 }); };
    var xf = cfg.xFmt || function (v) { return fmt(v, { compact: true, d: x1 - x0 >= 8 ? 0 : 1 }); };
    for (var i = 0; i <= 4; i++) {
      var yv = y0 + (y1 - y0) * i / 4, yy = Y(yv);
      svg.appendChild(s('line', { x1: P.l, x2: W - P.r, y1: yy, y2: yy, class: 'grid' }));
      var tl = s('text', { x: P.l - 8, y: yy + 4, class: 'tick', 'text-anchor': 'end' }); tl.textContent = yf(yv); svg.appendChild(tl);
    }
    for (var j = 0; j <= 5; j++) {
      var xv = x0 + (x1 - x0) * j / 5;
      var tx = s('text', { x: X(xv), y: H - P.b + 16, class: 'tick', 'text-anchor': 'middle' }); tx.textContent = xf(xv); svg.appendChild(tx);
    }
    if (y0 < 0 && y1 > 0) svg.appendChild(s('line', { x1: P.l, x2: W - P.r, y1: Y(0), y2: Y(0), class: 'zero' }));
    if (cfg.xLabel) { var xl = s('text', { x: (W + P.l) / 2, y: H - 4, class: 'axis-label', 'text-anchor': 'middle' }); xl.textContent = cfg.xLabel; svg.appendChild(xl); }
    if (cfg.yLabel) { var yl = s('text', { x: 12, y: H / 2, class: 'axis-label', 'text-anchor': 'middle', transform: 'rotate(-90 12 ' + H / 2 + ')' }); yl.textContent = cfg.yLabel; svg.appendChild(yl); }
    cfg.series.forEach(function (sr) {
      var d = sr.points.map(function (p, k) { return (k ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' ');
      if (sr.area) {
        var a = d + ' L' + X(sr.points[sr.points.length - 1][0]) + ' ' + Y(Math.max(y0, 0)) + ' L' + X(sr.points[0][0]) + ' ' + Y(Math.max(y0, 0)) + ' Z';
        svg.appendChild(s('path', { d: a, fill: sr.color, opacity: 0.12 }));
      }
      var path = s('path', { d: d, fill: 'none', stroke: sr.color, 'stroke-width': sr.width || 2.5, class: 'line' + (sr.dash ? ' dash' : ''), 'stroke-linejoin': 'round', 'stroke-linecap': 'round' });
      svg.appendChild(path);
    });
    (cfg.markers || []).forEach(function (m) {
      if (!isFinite(m.x) || !isFinite(m.y) || m.x < x0 || m.x > x1) return;
      svg.appendChild(s('line', { x1: X(m.x), x2: X(m.x), y1: Y(m.y), y2: H - P.b, class: 'marker-line' }));
      svg.appendChild(s('circle', { cx: X(m.x), cy: Y(m.y), r: 6, class: 'marker', fill: m.color || 'var(--ink)' }));
      var lt = s('text', { x: Math.min(W - P.r - 4, Math.max(P.l + 4, X(m.x))), y: Math.max(P.t + 10, Y(m.y) - 12), class: 'marker-label', 'text-anchor': X(m.x) > W - 120 ? 'end' : (X(m.x) < P.l + 80 ? 'start' : 'middle') });
      lt.textContent = m.label; svg.appendChild(lt);
    });
    if (cfg.series.length > 1 || cfg.legend) {
      var lx = P.l + 6;
      cfg.series.forEach(function (sr) {
        if (!sr.name) return;
        svg.appendChild(s('rect', { x: lx, y: P.t, width: 10, height: 10, rx: 2, fill: sr.color }));
        var t = s('text', { x: lx + 14, y: P.t + 9, class: 'legend' }); t.textContent = sr.name; svg.appendChild(t);
        lx += 22 + sr.name.length * 6.6;
      });
    }
    container.innerHTML = '';
    container.appendChild(svg);
    return svg;
  }

  /* barChart(container, {bars:[{label, value, color}], yFmt, waterfall:bool}) */
  function barChart(container, cfg) {
    var W = 560, H = 250, P = { l: 56, r: 12, t: 18, b: 44 };
    var bars = cfg.bars, n = bars.length;
    var vals = [0], run = 0;
    bars.forEach(function (b) {
      if (cfg.waterfall && !b.total) { var a = run, z = run + b.value; vals.push(a, z); run = z; }
      else { vals.push(b.value); if (cfg.waterfall) run = b.value; }
    });
    var y0 = Math.min.apply(null, vals), y1 = Math.max.apply(null, vals);
    if (y1 === y0) y1 = y0 + 1;
    var Y = function (v) { return H - P.b - (v - y0) / (y1 - y0) * (H - P.t - P.b); };
    var bw = (W - P.l - P.r) / n;
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.label || 'bar chart' });
    var yf = cfg.yFmt || function (v) { return fmt(v, { compact: true }); };
    for (var i = 0; i <= 4; i++) {
      var yv = y0 + (y1 - y0) * i / 4;
      svg.appendChild(s('line', { x1: P.l, x2: W - P.r, y1: Y(yv), y2: Y(yv), class: 'grid' }));
      var tl = s('text', { x: P.l - 8, y: Y(yv) + 4, class: 'tick', 'text-anchor': 'end' }); tl.textContent = yf(yv); svg.appendChild(tl);
    }
    svg.appendChild(s('line', { x1: P.l, x2: W - P.r, y1: Y(0), y2: Y(0), class: 'zero' }));
    run = 0;
    bars.forEach(function (b, k) {
      var a, z;
      if (cfg.waterfall && !b.total) { a = run; z = run + b.value; run = z; } else { a = 0; z = b.value; if (cfg.waterfall) run = b.value; }
      var top = Y(Math.max(a, z)), ht = Math.max(1, Math.abs(Y(a) - Y(z)));
      var r = s('rect', { x: P.l + k * bw + bw * 0.16, y: top, width: bw * 0.68, height: ht, rx: 4, fill: b.color || (z < a ? 'var(--bad)' : 'var(--accent)'), class: 'bar', style: 'animation-delay:' + k * 60 + 'ms' });
      svg.appendChild(r);
      var vt = s('text', { x: P.l + k * bw + bw / 2, y: top - 5, class: 'bar-val', 'text-anchor': 'middle' }); vt.textContent = yf(b.value); svg.appendChild(vt);
      var lt = s('text', { x: P.l + k * bw + bw / 2, y: H - P.b + 16, class: 'tick', 'text-anchor': 'middle' }); lt.textContent = b.label; svg.appendChild(lt);
    });
    container.innerHTML = '';
    container.appendChild(svg);
  }

  /* radar(container, {axes:[label], values:[0..max], max}) */
  function radar(container, cfg) {
    var W = 360, H = 320, cx = W / 2, cy = H / 2 + 6, R = 110, n = cfg.axes.length, max = cfg.max || 5;
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart radar', role: 'img', 'aria-label': 'radar chart' });
    function pt(i, r) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; }
    for (var g = 1; g <= max; g++) {
      svg.appendChild(s('polygon', { points: cfg.axes.map(function (_, i) { return pt(i, R * g / max).join(','); }).join(' '), class: 'grid', fill: 'none' }));
    }
    cfg.axes.forEach(function (a, i) {
      var e = pt(i, R); svg.appendChild(s('line', { x1: cx, y1: cy, x2: e[0], y2: e[1], class: 'grid' }));
      var l = pt(i, R + 22); var t = s('text', { x: l[0], y: l[1] + 4, class: 'tick', 'text-anchor': Math.abs(l[0] - cx) < 10 ? 'middle' : (l[0] > cx ? 'start' : 'end') }); t.textContent = a; svg.appendChild(t);
    });
    svg.appendChild(s('polygon', { points: cfg.values.map(function (v, i) { return pt(i, R * v / max).join(','); }).join(' '), fill: cfg.color || 'var(--accent)', 'fill-opacity': 0.25, stroke: cfg.color || 'var(--accent)', 'stroke-width': 2.5, class: 'radar-shape' }));
    container.innerHTML = '';
    container.appendChild(svg);
  }

  /* slider control helper used by widgets */
  function slider(label, opts, onInput) {
    var out = h('output.slider-val');
    var input = h('input', { type: 'range', min: opts.min, max: opts.max, step: opts.step || 1, value: opts.value, 'aria-label': label });
    var f = opts.fmt || function (v) { return v; };
    function upd() { out.textContent = f(+input.value); }
    input.addEventListener('input', function () { upd(); onInput && onInput(); });
    upd();
    var row = h('label.slider', h('span.slider-top', h('span', label), out), input);
    row.get = function () { return +input.value; };
    row.set = function (v) { input.value = v; upd(); };
    return row;
  }
  function numInput(label, value, onInput, opts) {
    opts = opts || {};
    var input = h('input.num', { type: 'number', value: value, step: opts.step || 'any', min: opts.min, 'aria-label': label });
    input.addEventListener('input', function () { onInput && onInput(); });
    var row = h('label.field', h('span', label), input);
    row.get = function () { var v = parseFloat(input.value); return isFinite(v) ? v : 0; };
    row.input = input;
    return row;
  }
  function stat(label, cls) {
    var v = h('b.stat-v', '—');
    var node = h('div.stat' + (cls ? '.' + cls : ''), h('span.stat-l', label), v);
    node.val = v;
    node.set = function (num, formatter, tone) {
      countUp(v, num, formatter);
      node.classList.remove('good', 'bad', 'warn');
      if (tone) node.classList.add(tone);
    };
    node.text = function (t, tone) { v.textContent = t; node.classList.remove('good', 'bad', 'warn'); if (tone) node.classList.add(tone); };
    return node;
  }

  /* In-page confirmation: first click arms the button, second click within 4s runs the action. */
  function confirmBtn(label, armed, action, cls) {
    var b = h('button.btn.ghost.small' + (cls ? '.' + cls : ''), label), t = null;
    b.addEventListener('click', function () {
      if (b.classList.contains('armed')) { clearTimeout(t); b.classList.remove('armed'); b.textContent = label; action(); return; }
      b.classList.add('armed'); b.textContent = armed;
      t = setTimeout(function () { b.classList.remove('armed'); b.textContent = label; }, 4000);
    });
    return b;
  }
  var embedded = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();

  MBA.ui = {
    confirmBtn: confirmBtn, embedded: embedded,
    esc: esc, h: h, fmt: fmt, money: money, pct: pct, toast: toast, confetti: confetti, reveal: reveal,
    countUp: countUp, lineChart: lineChart, barChart: barChart, radar: radar, slider: slider, numInput: numInput, stat: stat
  };
})();
