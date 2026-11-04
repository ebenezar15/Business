/* Interactive simulators for the Business Model Playbooks — D2C, B2B and marketplace economics. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, h = U.h, shell = MBA.widgetShell;
  var pc = function (v) { return v + '%'; };

  /* Currency selector shared by the three widgets (₹ or $). */
  function currencyPicker(onChange) {
    var sel = h('select', { 'aria-label': 'Currency' }, h('option', { value: '₹' }, '₹ Rupees'), h('option', { value: '$' }, '$ Dollars'));
    sel.addEventListener('change', onChange);
    var row = h('label.field', h('span', 'Currency'), sel);
    row.get = function () { return sel.value; };
    return row;
  }
  function money(cur) { return function (v) { return U.fmt(v, { cur: cur, compact: true, d: Math.abs(v) >= 100 || Math.abs(v) % 1 === 0 ? 0 : 1 }); }; }

  /* ================= D2C: contribution margin per order ================= */
  MBA.registerWidget('d2c-margin', {
    title: 'D2C Order Margin Waterfall', icon: '📦', cat: 'Business Models',
    desc: 'Follow one order from price to profit: discounts, returns, product cost, shipping, payment fees and the cost of the customer.',
    render: function (root) {
      var cur = currencyPicker(upd);
      var aov = U.slider('Average order value (list price)', { min: 200, max: 5000, step: 50, value: 1200 }, upd);
      var disc = U.slider('Average discount', { min: 0, max: 50, value: 15, fmt: pc }, upd);
      var cogs = U.slider('Product cost (COGS) as % of selling price', { min: 10, max: 70, value: 30, fmt: pc }, upd);
      var ship = U.slider('Shipping & packing per order', { min: 0, max: 400, step: 5, value: 90 }, upd);
      var ret = U.slider('Returns / RTO rate (orders that come back)', { min: 0, max: 40, value: 12, fmt: pc }, upd);
      var pay = U.slider('Payment & platform fees', { min: 0, max: 8, step: 0.5, value: 2.5, fmt: pc }, upd);
      var cac = U.slider('Marketing cost to win a new customer (CAC)', { min: 0, max: 3000, step: 25, value: 600 }, upd);
      var rep = U.slider('Orders per customer over their lifetime', { min: 1, max: 12, step: 0.5, value: 2.5 }, upd);
      var sC1 = U.stat('Contribution per order (before marketing)'), sFirst = U.stat('Profit on the first order'), sLtv = U.stat('Lifetime contribution : CAC'), sBe = U.stat('Orders to pay back CAC');
      var o = shell(root, [cur, aov, disc, cogs, ship, ret, pay, cac, rep], [sC1, sFirst, sLtv, sBe]);
      function upd() {
        var $ = money(cur.get()), r = ret.get() / 100;
        [aov, ship, cac].forEach(function (sl) { var out = sl.querySelector('output'); if (out) out.textContent = $(sl.get()); });
        var price = aov.get() * (1 - disc.get() / 100);           // what the customer pays
        var kept = price * (1 - r);                                // revenue after returned orders are refunded
        var product = price * cogs.get() / 100 * (1 - r * 0.7);    // ~70% of returned stock is resellable
        var logistics = ship.get() * (1 + r);                      // returned orders ship twice
        var fees = price * pay.get() / 100;
        var c1 = kept - product - logistics - fees, first = c1 - cac.get(), life = c1 * rep.get(), ratio = cac.get() ? life / cac.get() : Infinity;
        sC1.set(c1, $, c1 > 0 ? 'good' : 'bad');
        sFirst.set(first, $, first >= 0 ? 'good' : 'warn');
        sLtv.set(ratio, function (v) { return isFinite(v) ? v.toFixed(1) + 'x' : '∞'; }, ratio >= 3 ? 'good' : ratio >= 1 ? 'warn' : 'bad');
        sBe.text(c1 > 0 ? (cac.get() / c1).toFixed(1) + ' orders' : 'never', c1 > 0 && cac.get() / c1 <= rep.get() ? 'good' : 'bad');
        U.barChart(o.chart, { waterfall: true, yFmt: $, label: 'Order economics waterfall', bars: [
          { label: 'List price', value: aov.get(), total: true, color: 'var(--accent)' }, { label: 'Discount', value: -(aov.get() - price) }, { label: 'Returns', value: -(price - kept) },
          { label: 'Product', value: -product }, { label: 'Shipping', value: -logistics }, { label: 'Fees', value: -fees },
          { label: 'CM per order', value: c1, total: true, color: c1 > 0 ? 'var(--good)' : 'var(--bad)' }, { label: 'CAC', value: -cac.get() },
          { label: '1st order', value: first, total: true, color: first >= 0 ? 'var(--good)' : 'var(--bad)' }] });
        var leak = [['discounts', aov.get() - price], ['returns', price - kept], ['shipping', logistics], ['product cost', product]].sort(function (a, b) { return b[1] - a[1]; })[0];
        o.insight.innerHTML = c1 <= 0
          ? '🚨 Every order loses money before marketing. No amount of growth fixes this — raise prices, cut discounts or returns, or lower product and shipping cost first.'
          : 'Each order leaves <b>' + $(c1) + '</b> after product, shipping, returns and fees. ' + (first < 0 ? 'The first order loses ' + $(-first) + ' once CAC is paid, so profit depends on repeat purchases: you need <b>' + (cac.get() / c1).toFixed(1) + ' orders</b> per customer to earn back CAC. ' : 'You profit from the first order — rare in D2C and a strong position. ') +
            'Biggest leak: <b>' + leak[0] + '</b>.';
      }
      upd();
    }
  });

  /* ================= B2B: pipeline maths ================= */
  MBA.registerWidget('b2b-pipeline', {
    title: 'B2B Pipeline Planner', icon: '🏢', cat: 'Business Models',
    desc: 'How much pipeline, how many deals and how many new opportunities a month you need to hit the number.',
    render: function (root) {
      var cur = currencyPicker(upd);
      var target = U.slider('Annual new bookings target', { min: 1000000, max: 200000000, step: 1000000, value: 30000000 }, upd);
      var acv = U.slider('Average contract value (ACV)', { min: 50000, max: 10000000, step: 50000, value: 1200000 }, upd);
      var win = U.slider('Win rate (qualified opportunity → closed)', { min: 5, max: 60, value: 22, fmt: pc }, upd);
      var cycle = U.slider('Sales cycle (months)', { min: 1, max: 18, value: 5 }, upd);
      var pipe = U.slider('Qualified pipeline you have today', { min: 0, max: 600000000, step: 1000000, value: 60000000 }, upd);
      var reps = U.slider('Ramped account executives', { min: 1, max: 60, value: 6 }, upd);
      var sCov = U.stat('Pipeline coverage'), sDeals = U.stat('Deals needed'), sOpps = U.stat('New opportunities / month'), sRep = U.stat('Quota per rep');
      var o = shell(root, [cur, target, acv, win, cycle, pipe, reps], [sCov, sDeals, sOpps, sRep]);
      function upd() {
        var $ = money(cur.get());
        [target, acv, pipe].forEach(function (sl) { var out = sl.querySelector('output'); if (out) out.textContent = $(sl.get()); });
        var W = win.get() / 100, need = target.get() / W, cov = pipe.get() / target.get(), deals = Math.ceil(target.get() / acv.get());
        var opps = deals / W, perMonth = opps / 12, expected = pipe.get() * W, gap = Math.max(0, target.get() - expected);
        sCov.set(cov, function (v) { return v.toFixed(1) + 'x'; }, cov >= 1 / W ? 'good' : cov >= 0.7 / W ? 'warn' : 'bad');
        sDeals.set(deals, function (v) { return Math.round(v).toLocaleString(); });
        sOpps.set(perMonth, function (v) { return Math.ceil(v).toLocaleString(); });
        sRep.set(target.get() / reps.get(), $, target.get() / reps.get() <= acv.get() * 12 ? null : 'warn');
        U.barChart(o.chart, { yFmt: $, label: 'Target versus expected bookings', bars: [
          { label: 'Target', value: target.get(), color: 'var(--accent)' }, { label: 'Pipeline needed', value: need, color: 'var(--violet)' },
          { label: 'Pipeline today', value: pipe.get(), color: 'var(--accent-2)' }, { label: 'Expected wins', value: expected, color: 'var(--good)' }, { label: 'Gap', value: gap, color: gap ? 'var(--bad)' : 'var(--good)' }] });
        o.insight.innerHTML = 'At a ' + win.get() + '% win rate you need <b>' + (1 / W).toFixed(1) + 'x</b> pipeline coverage — ' + $(need) + ' of qualified pipeline for a ' + $(target.get()) + ' target. ' +
          (gap ? 'Today\'s pipeline should close about ' + $(expected) + ', leaving a <b>' + $(gap) + '</b> gap. With a ' + cycle.get() + '-month cycle, opportunities created after month ' + Math.max(0, 12 - cycle.get()) + ' will not close this year — so the gap must be filled early.' : '✅ Your pipeline covers the target at this win rate. Protect it: track stage-by-stage conversion weekly.');
      }
      upd();
    }
  });

  /* ================= C2C / two-sided marketplace ================= */
  MBA.registerWidget('marketplace', {
    title: 'Marketplace Economics', icon: '🔁', cat: 'Business Models',
    desc: 'From listings to GMV to the revenue a marketplace actually keeps — and what liquidity and leakage do to it.',
    render: function (root) {
      var cur = currencyPicker(upd);
      var listings = U.slider('New listings per month', { min: 1000, max: 2000000, step: 1000, value: 200000 }, upd);
      var sell = U.slider('Sell-through (share of listings that sell)', { min: 1, max: 90, value: 25, fmt: pc }, upd);
      var price = U.slider('Average transaction value', { min: 100, max: 50000, step: 100, value: 1500 }, upd);
      var take = U.slider('Take rate (your commission)', { min: 0, max: 30, step: 0.5, value: 10, fmt: pc }, upd);
      var leak = U.slider('Leakage (deals taken off-platform)', { min: 0, max: 60, value: 15, fmt: pc }, upd);
      var payc = U.slider('Payment processing cost (% of GMV)', { min: 0, max: 4, step: 0.1, value: 2, fmt: pc }, upd);
      var inc = U.slider('Incentives & subsidies per transaction', { min: 0, max: 500, step: 5, value: 40 }, upd);
      var ops = U.slider('Trust, safety & support cost per transaction', { min: 0, max: 300, step: 5, value: 25 }, upd);
      var sG = U.stat('GMV / month'), sR = U.stat('Net revenue / month'), sC = U.stat('Contribution / month'), sM = U.stat('Contribution per transaction');
      var o = shell(root, [cur, listings, sell, price, take, leak, payc, inc, ops], [sG, sR, sC, sM]);
      function upd() {
        var $ = money(cur.get());
        [price, inc, ops].forEach(function (sl) { var out = sl.querySelector('output'); if (out) out.textContent = $(sl.get()); });
        var tx = listings.get() * sell.get() / 100 * (1 - leak.get() / 100), gmv = tx * price.get(), rev = gmv * take.get() / 100;
        var costs = gmv * payc.get() / 100 + tx * (inc.get() + ops.get()), contrib = rev - costs, per = tx ? contrib / tx : 0;
        sG.set(gmv, $); sR.set(rev, $, 'good'); sC.set(contrib, $, contrib >= 0 ? 'good' : 'bad'); sM.set(per, $, per >= 0 ? 'good' : 'bad');
        U.barChart(o.chart, { waterfall: true, yFmt: $, label: 'Marketplace revenue waterfall', bars: [
          { label: 'Net revenue', value: rev, total: true, color: 'var(--accent)' }, { label: 'Payments', value: -gmv * payc.get() / 100 },
          { label: 'Incentives', value: -tx * inc.get() }, { label: 'Trust & support', value: -tx * ops.get() },
          { label: 'Contribution', value: contrib, total: true, color: contrib >= 0 ? 'var(--good)' : 'var(--bad)' }] });
        o.insight.innerHTML = 'Of ' + $(gmv) + ' changing hands, you keep <b>' + $(rev) + '</b> (' + take.get() + '%). ' +
          (sell.get() < 15 ? 'Sell-through of ' + sell.get() + '% means most listings never sell — sellers leave. Liquidity comes before monetisation. ' : '') +
          (take.get() >= 15 && leak.get() >= 20 ? 'A high take rate with high leakage suggests users are going around you: add value (payments protection, shipping, insurance) before charging more. ' : '') +
          (contrib < 0 ? '🚨 Each transaction loses ' + $(-per) + ' — usually subsidies outrunning the take rate.' : 'Each transaction contributes ' + $(per) + '.');
      }
      upd();
    }
  });
})();
