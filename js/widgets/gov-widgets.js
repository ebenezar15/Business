/* Interactive simulators for US government contracting: bid / no-bid expected value and wrap-rate pricing. */
(function () {
  'use strict';
  var MBA = window.MBA, U = MBA.ui, shell = MBA.widgetShell;
  var pc = function (v) { return v + '%'; };
  var usd = function (v) { return U.fmt(v, { cur: '$', compact: true, d: Math.abs(v) >= 100 || Math.abs(v) % 1 === 0 ? 0 : 1 }); };
  var usd2 = function (v) { return '$' + v.toFixed(2); };
  var score = function (v) { return ['', '1 · weak', '2', '3 · average', '4', '5 · strong'][v]; };

  /* ================= Bid / no-bid: expected value of chasing a contract ================= */
  MBA.registerWidget('bid-no-bid', {
    title: 'Bid / No-Bid Decision', icon: '🎯', cat: 'Government Contracting',
    desc: 'Score your chance of winning, compare the expected profit with what the proposal will cost, and get a bid or no-bid call.',
    render: function (root) {
      var value = U.slider('Total contract value (all years)', { min: 50000, max: 50000000, step: 50000, value: 2500000, fmt: usd }, upd);
      var margin = U.slider('Expected profit margin if you win', { min: 2, max: 25, value: 9, fmt: pc }, upd);
      var cost = U.slider('Bid & proposal cost (staff time, consultants)', { min: 1000, max: 500000, step: 1000, value: 40000, fmt: usd }, upd);
      var fit = U.slider('Fit: the work matches what you already do', { min: 1, max: 5, value: 4, fmt: score }, upd);
      var rel = U.slider('Relationship: you know the customer and their problem', { min: 1, max: 5, value: 2, fmt: score }, upd);
      var past = U.slider('Past performance: similar, relevant contracts', { min: 1, max: 5, value: 3, fmt: score }, upd);
      var comp = U.slider('Competition is light (5) or crowded with a strong incumbent (1)', { min: 1, max: 5, value: 2, fmt: score }, upd);
      var set = U.slider('Set-aside advantage (1 none · 3 small-business · 5 your certification only)', { min: 1, max: 5, value: 3, fmt: score }, upd);
      var sP = U.stat('Probability of win (Pwin)'), sEV = U.stat('Expected profit'), sNet = U.stat('Expected value after bid cost'), sV = U.stat('Verdict');
      var o = shell(root, [value, margin, cost, fit, rel, past, comp, set], [sP, sEV, sNet, sV]);
      function upd() {
        // Weighted score 1–5 → Pwin between 5% and 70%. Weights reflect common capture practice: knowing the customer and fit matter most.
        var w = { fit: 0.25, rel: 0.25, past: 0.2, comp: 0.15, set: 0.15 };
        var s = fit.get() * w.fit + rel.get() * w.rel + past.get() * w.past + comp.get() * w.comp + set.get() * w.set;
        var p = 0.05 + (s - 1) / 4 * 0.65;
        var profit = value.get() * margin.get() / 100, ev = p * profit, net = ev - cost.get(), ratio = cost.get() ? ev / cost.get() : Infinity;
        var verdict = p < 0.2 ? 'No-bid' : net <= 0 ? 'No-bid' : ratio < 2 ? 'Bid only if strategic' : 'Bid';
        sP.set(p * 100, function (v) { return Math.round(v) + '%'; }, p >= 0.4 ? 'good' : p >= 0.2 ? 'warn' : 'bad');
        sEV.set(ev, usd);
        sNet.set(net, usd, net > 0 ? 'good' : 'bad');
        sV.text(verdict, verdict === 'Bid' ? 'good' : verdict === 'No-bid' ? 'bad' : 'warn');
        U.barChart(o.chart, { yFmt: usd, label: 'Profit if won, expected profit and bid cost', bars: [
          { label: 'Profit if won', value: profit, color: 'var(--accent)' },
          { label: 'Expected (× Pwin)', value: ev, color: 'var(--accent-2)' },
          { label: 'Bid cost', value: cost.get(), color: 'var(--bad)' },
          { label: 'Net expected', value: net, color: net > 0 ? 'var(--good)' : 'var(--bad)' }] });
        var weakest = [['customer relationship', rel.get()], ['fit', fit.get()], ['past performance', past.get()], ['competitive position', comp.get()], ['set-aside position', set.get()]].sort(function (a, b) { return a[1] - b[1]; })[0];
        o.insight.innerHTML = 'Your scores give a Pwin of about <b>' + Math.round(p * 100) + '%</b>, so a ' + usd(profit) + ' profit is worth ' + usd(ev) + ' today against a ' + usd(cost.get()) + ' proposal cost. ' +
          (p < 0.2 ? '🚫 Below about 20% Pwin most capture teams walk away — the effort is better spent on a bid you can shape. ' : '') +
          (verdict === 'Bid only if strategic' ? 'The numbers are thin: bid only if it opens a new agency, builds past performance or protects a relationship. ' : '') +
          'Weakest factor: <b>' + weakest[0] + '</b>' + (weakest[0] === 'customer relationship' ? ' — if you first meet the buyer when the RFP drops, you are usually too late. Respond to sources-sought notices and attend industry days.' : weakest[0] === 'past performance' ? ' — consider teaming as a subcontractor to a prime who has it.' : '.') +
          ' <i>Pwin weights here are a teaching model, not an industry standard.</i>';
      }
      upd();
    }
  });

  /* ================= Wrap rate: fully burdened labour pricing ================= */
  MBA.registerWidget('wrap-rate', {
    title: 'Wrap Rate & Labor Pricing', icon: '🧮', cat: 'Government Contracting',
    desc: 'Build a billable hourly rate from salary: fringe, overhead, G&A and fee — the way government cost proposals are built.',
    render: function (root) {
      var direct = U.slider('Direct labor rate (salary ÷ 2,080 hours)', { min: 15, max: 150, step: 1, value: 50, fmt: usd2 }, upd);
      var fringe = U.slider('Fringe (payroll taxes, health, leave, 401k) on direct labor', { min: 10, max: 60, value: 32, fmt: pc }, upd);
      var oh = U.slider('Overhead (facilities, supervision, tools) on labor + fringe', { min: 0, max: 80, value: 20, fmt: pc }, upd);
      var ga = U.slider('G&A (finance, HR, proposals, executives) on total cost', { min: 3, max: 40, value: 12, fmt: pc }, upd);
      var fee = U.slider('Fee / profit', { min: 0, max: 15, step: 0.5, value: 8, fmt: pc }, upd);
      var hours = U.slider('Billable hours per full-time person per year', { min: 1500, max: 2080, step: 10, value: 1880 }, upd);
      var sRate = U.stat('Fully burdened rate / hour'), sWrap = U.stat('Wrap-rate multiplier'), sYear = U.stat('Annual price, one FTE'), sProfit = U.stat('Fee per FTE / year');
      var o = shell(root, [direct, fringe, oh, ga, fee, hours], [sRate, sWrap, sYear, sProfit]);
      function upd() {
        var d = direct.get(), f = d * fringe.get() / 100, ov = (d + f) * oh.get() / 100, sub = d + f + ov;
        var g = sub * ga.get() / 100, cost = sub + g, fe = cost * fee.get() / 100, rate = cost + fe, wrap = rate / d;
        sRate.set(rate, usd2, 'good');
        sWrap.set(wrap, function (v) { return v.toFixed(2) + 'x'; }, wrap > 2.6 ? 'warn' : null);
        sYear.set(rate * hours.get(), usd);
        sProfit.set(fe * hours.get(), usd);
        U.barChart(o.chart, { waterfall: true, yFmt: usd2, label: 'Build-up of the hourly rate', bars: [
          { label: 'Direct labor', value: d, total: true, color: 'var(--accent)' }, { label: 'Fringe', value: f }, { label: 'Overhead', value: ov },
          { label: 'G&A', value: g }, { label: 'Fee', value: fe }, { label: 'Billed rate', value: rate, total: true, color: 'var(--good)' }] });
        o.insight.innerHTML = 'A person paid <b>' + usd2(d) + '/hour</b> (about ' + usd(d * 2080) + ' a year) is billed at <b>' + usd2(rate) + '</b> — a ' + wrap.toFixed(2) + 'x wrap. ' +
          'Only ' + usd2(fe) + ' of each hour is profit; the rest pays real costs. ' +
          (wrap > 2.6 ? '⚠️ A wrap above roughly 2.5–2.6x is often hard to win on price-driven (LPTA) bids; look at overhead and G&A first. ' : wrap < 1.6 ? '⚠️ A very low wrap can mean costs are missing — check that leave, benefits and proposal costs are counted, or you will lose money on every hour. ' : '') +
          'Bidding with fewer billable hours than you assume (' + hours.get().toLocaleString() + ') silently shrinks profit. <i>Typical ranges vary widely by company and contract type; DCAA audits cost-type rates.</i>';
      }
      upd();
    }
  });
})();
