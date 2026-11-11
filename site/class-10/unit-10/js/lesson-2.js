/* =========================================================
   Class 10 · Unit 10 · Lesson 2 · Measuring Specific Heat — labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const { $, $$, clamp, lerp, fitCanvas, animateWhileVisible, bindRange, label, roundRect, complete, setStatus, press } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', grid: 'rgba(140,160,255,.1)', axis: 'rgba(140,160,255,.4)', bgLabel: 'rgba(5,9,21,.82)'
  };
  const redraws = [];
  const ROOM = 25;

  /* water colour by temperature: cool blue → warm red */
  function waterCol(T, a = 0.6) {
    const f = clamp((T - 10) / 85, 0, 1);
    const r = Math.round(lerp(60, 235, f)), g = Math.round(lerp(150, 90, f)), b = Math.round(lerp(255, 80, f));
    return `rgba(${r},${g},${b},${a})`;
  }
  const kJ = q => Math.abs(q) < 1000 ? `${Math.round(q)} J` : `${(q / 1000).toFixed(2)} kJ`;

  function thermometer(ctx, x, yTop, yBulb, T, { min = 0, max = 110, text = true, col = C.text } = {}) {
    const yOf = v => yBulb - 8 - (yBulb - 8 - yTop) * clamp((v - min) / (max - min), 0, 1);
    ctx.save();
    ctx.fillStyle = 'rgba(10,16,34,.9)'; ctx.strokeStyle = 'rgba(220,230,255,.75)'; ctx.lineWidth = 1.2;
    roundRect(ctx, x - 4.5, yTop - 4, 9, yBulb - yTop + 4, 4.5); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, yBulb, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.red; ctx.shadowColor = C.red; ctx.shadowBlur = 6;
    ctx.beginPath(); ctx.arc(x, yBulb, 4.6, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(x - 1.8, yOf(T), 3.6, yBulb - yOf(T));
    ctx.restore();
    if (text) label(ctx, `${T.toFixed(1)} °C`, x, yTop - 15, { size: 11, color: col, weight: 600, bg: C.bgLabel });
  }

  /* =====================================================
     LAB 1 · Hot + cold
     ===================================================== */
  (function mixLab() {
    const root = $('#lab-mix'); if (!root) return;
    const CW = 4.2;
    const S = { mh: 100, th: 80, mc: 200, tc: 20, phase: 'ready', p: 0 };
    let ready = false;
    const MC = fitCanvas($('#mix-canvas'), () => ready && draw());
    const status = $('#mix-status');
    const out = { mh: $('#mix-mh-out'), th: $('#mix-th-out'), mc: $('#mix-mc-out'), tc: $('#mix-tc-out'), T: $('#mix-T'), ql: $('#mix-ql'), qg: $('#mix-qg') };
    const Tf = () => (S.mh * S.th + S.mc * S.tc) / (S.mh + S.mc);

    function jug(ctx, x, base, w, hMax, frac, T, tilt, dir, name, col) {
      const h = hMax;
      ctx.save();
      ctx.translate(x, base); ctx.rotate(tilt * dir);
      // liquid (stays level-ish: just shrink it as it empties)
      const lh = h * 0.86 * frac;
      ctx.fillStyle = waterCol(T); ctx.fillRect(-w / 2 + 3, -lh - 3, w - 6, lh);
      ctx.strokeStyle = 'rgba(210,230,255,.75)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-w / 2, -h); ctx.lineTo(-w / 2, -3); ctx.quadraticCurveTo(-w / 2, 0, -w / 2 + 3, 0); ctx.lineTo(w / 2 - 3, 0); ctx.quadraticCurveTo(w / 2, 0, w / 2, -3); ctx.lineTo(w / 2, -h);
      ctx.lineTo(w / 2 + dir * 8 * (dir > 0 ? 1 : 0), -h - 6 * (dir > 0 ? 1 : 0));
      ctx.stroke();
      ctx.restore();
      label(ctx, name, x, base + 14, { size: 11, color: col, weight: 600 });
    }

    function draw() {
      const { ctx, w, h } = MC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const base = h - 34, narrow = w < 560;
      const jw = Math.min(w * 0.12, 90), jhMax = Math.min(h * 0.5, 150);
      const Tm = Tf();
      const pour = S.phase === 'pouring' ? S.p : S.phase === 'mixed' ? 1 : 0;
      const tilt = Math.sin(Math.min(1, pour * 1.25) * Math.PI) * 0.9 * (S.phase === 'pouring' ? 1 : 0);
      const xh = w * (narrow ? 0.14 : 0.12), xc = w * (narrow ? 0.38 : 0.3), xb = w * (narrow ? 0.72 : 0.56);
      const lift = tilt * 30;
      const lvl = mass => (0.25 + 0.75 * mass / 400) * (1 - pour);      // liquid level shows the mass
      jug(ctx, xh + tilt * 30, base - lift, jw, jhMax, lvl(S.mh), S.th, tilt, 1, `Hot · ${S.mh} g`, C.red);
      jug(ctx, xc + tilt * 18, base - lift, jw, jhMax, lvl(S.mc), S.tc, tilt, 1, `Cold · ${S.mc} g`, C.cyan);
      if (pour === 0) [[xh, S.th], [xc, S.tc]].forEach(([x, T]) => thermometer(ctx, x + jw * 0.18, base - jhMax - 26, base - 14, T, { col: T > 30 ? C.red : C.cyan }));
      // streams
      if (S.phase === 'pouring' && pour < 0.92) {
        [[xh + 30 + jw / 2, C.red, S.th], [xc + 18 + jw / 2, C.cyan, S.tc]].forEach(([sx, col, T]) => {
          ctx.save(); ctx.strokeStyle = waterCol(T, 0.8); ctx.lineWidth = 4; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(sx, base - lift - jhMax - 4);
          ctx.quadraticCurveTo((sx + xb) / 2, base - jhMax - 70, xb - 10, base - jhMax * 0.6); ctx.stroke(); ctx.restore();
        });
      }
      // mixing beaker
      const bw = Math.min(w * 0.17, 140), bh = Math.min(h * 0.62, 190);
      const fillH = bh * 0.86 * ((S.mh + S.mc) / 800) * pour;
      ctx.fillStyle = waterCol(Tm); ctx.fillRect(xb - bw / 2 + 3, base - 3 - fillH, bw - 6, fillH);
      if (S.phase === 'pouring') {         // swirl of hot and cold before it settles
        ctx.save(); ctx.globalAlpha = 0.5 * (1 - pour);
        ctx.fillStyle = waterCol(S.th); ctx.fillRect(xb - bw / 2 + 3, base - 3 - fillH, (bw - 6) / 2, fillH);
        ctx.fillStyle = waterCol(S.tc); ctx.fillRect(xb, base - 3 - fillH, (bw - 6) / 2, fillH); ctx.restore();
      }
      ctx.strokeStyle = 'rgba(210,230,255,.75)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(xb - bw / 2, base - bh); ctx.lineTo(xb - bw / 2, base); ctx.lineTo(xb + bw / 2, base); ctx.lineTo(xb + bw / 2, base - bh); ctx.stroke();
      label(ctx, `Mixture · ${S.mh + S.mc} g`, xb, base + 14, { size: 11, color: C.violet, weight: 600 });
      thermometer(ctx, xb + bw * 0.25, base - bh - 18, base - 14, S.phase === 'mixed' ? Tm : S.phase === 'pouring' ? lerp(ROOM, Tm, pour) : ROOM, { text: S.phase === 'mixed', col: C.violet });
      if (S.phase !== 'mixed') label(ctx, S.phase === 'pouring' ? 'mixing…' : 'T = ?', xb + bw * 0.25, base - bh - 33, { size: 11, color: C.violet, bg: C.bgLabel });

      // heat bars
      const xq = w * (narrow ? 0.93 : 0.84), barH = h * 0.6, bwid = narrow ? 10 : 22;
      const Q = S.mh * CW * (S.th - Tm);
      const show = pour;
      const scale = barH / Math.max(Q * 1.15, 1);
      [[xq - (narrow ? 8 : 18), C.red, 'lost'], [xq + (narrow ? 8 : 18), C.cyan, 'gained']].forEach(([x, col, nm]) => {
        ctx.fillStyle = 'rgba(255,255,255,.05)'; ctx.fillRect(x - bwid / 2, base - barH, bwid, barH);
        const hgt = Q * scale * show;
        ctx.save(); ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 10;
        ctx.fillRect(x - bwid / 2, base - hgt, bwid, hgt); ctx.restore();
        if (!narrow) label(ctx, nm, x, base + 14, { size: 10, color: col });
      });
      if (!narrow) label(ctx, 'heat', xq, base - barH - 14, { size: 11, color: C.muted });
      if (show > 0.99 && !narrow) label(ctx, kJ(Q), xq, base - Q * scale - 14, { size: 11, color: C.text, bg: C.bgLabel });
    }

    function update() {
      out.mh.textContent = `${S.mh} g`; out.th.textContent = `${S.th} °C`; out.mc.textContent = `${S.mc} g`; out.tc.textContent = `${S.tc} °C`;
      const T = Tf(), Q = S.mh * CW * (S.th - T);
      if (S.phase === 'mixed') {
        out.T.textContent = `${T.toFixed(1)} °C`;
        out.ql.textContent = `${kJ(Q)}`;
        out.qg.textContent = `${kJ(S.mc * CW * (T - S.tc))}`;
        const nearer = T - S.tc < S.th - T ? 'cold' : T - S.tc > S.th - T ? 'hot' : null;
        setStatus(status, 'good', `<b>T = ${T.toFixed(1)} °C.</b> Heat lost by the hot water = ${S.mh} × 4.2 × (${S.th} − ${T.toFixed(1)}) = <b>${kJ(Q)}</b> = heat gained by the cold water = ${S.mc} × 4.2 × (${T.toFixed(1)} − ${S.tc}). ` +
          (nearer ? `The mixture ends up nearer the <b>${nearer}</b> temperature because there's more ${nearer} water.` : 'Equal masses meet exactly in the middle.'));
        if (S.mh === 100 && S.th === 80 && S.mc === 200 && S.tc === 20) complete('l2-mix-qv5', { el: $('[data-check="l2-mix-qv5"]', root), msg: 'QV 5: the mix settles at 40 °C' });
        if (S.mh === S.mc && Math.abs(S.th - S.tc) >= 20) complete('l2-mix-equal', { el: $('[data-check="l2-mix-equal"]', root), msg: 'Equal masses: exactly the average!' });
        if (Math.abs(S.mh - S.mc) >= 50 && Math.abs(T - 50) <= 0.5) complete('l2-mix-50', { el: $('[data-check="l2-mix-50"]', root), msg: '50 °C on the nose!' });
      } else {
        out.T.textContent = '?'; out.ql.textContent = '?'; out.qg.textContent = '?';
        if (S.phase === 'ready') setStatus(status, 'info', `<b>Predict first:</b> ${S.mh} g at ${S.th} °C + ${S.mc} g at ${S.tc} °C. Will the mixture be nearer ${S.th} °C or ${S.tc} °C? Then pour.`);
      }
      draw();
    }
    const setFrom = (k) => v => { S[k] = v; S.phase = 'ready'; S.p = 0; update(); };
    const R = { mh: bindRange($('#mix-mh'), setFrom('mh')), th: bindRange($('#mix-th'), setFrom('th')), mc: bindRange($('#mix-mc'), setFrom('mc')), tc: bindRange($('#mix-tc'), setFrom('tc')) };
    $('#mix-pour').addEventListener('click', () => {
      if (S.phase !== 'ready') { S.phase = 'ready'; S.p = 0; }
      S.phase = 'pouring'; S.p = 0;
      setStatus(status, 'info', '<b>Pouring and stirring…</b> heat flows from the hot water to the cold water.');
      if (L.reduceMotion) { S.phase = 'mixed'; update(); }
    });
    $('#mix-reset').addEventListener('click', () => { S.phase = 'ready'; S.p = 0; update(); });
    $$('[data-mix-load]').forEach(b => b.addEventListener('click', () => {
      Object.assign(S, { mh: 100, th: 80, mc: 200, tc: 20, phase: 'ready', p: 0 });
      R.mh.set(100); R.th.set(80); R.mc.set(200); R.tc.set(20); update();
    }));
    animateWhileVisible(root, dt => {
      if (S.phase === 'pouring') { S.p = Math.min(1, S.p + dt / 1.8); if (S.p >= 1) { S.phase = 'mixed'; update(); } else draw(); }
    });
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 2 · The virtual calorimeter (method of mixtures)
     ===================================================== */
  (function calLab() {
    const root = $('#lab-cal'); if (!root) return;
    const MCAL = 50, CC = 0.9, CW = 4.18, T1 = 25.0, T2 = 100.0;
    const SOLIDS = {
      ex103: { name: 'Example 10.3 cylinder (unknown)', c: 4405 / 10500, col: '#b8a27a' },
      copper: { name: 'Copper', c: 0.387, col: '#d9824a' },
      aluminium: { name: 'Aluminium', c: 0.910, col: '#c9ced8' },
      iron: { name: 'Iron', c: 0.452, col: '#7d8590' },
      brass: { name: 'Brass', c: 0.380, col: '#d9b44a' },
      lead: { name: 'Lead', c: 0.128, col: '#8a93a6' },
      mystery: { name: 'Mystery solid', c: 0, col: '#9aa3b2', mystery: true }
    };
    const SUS = ['aluminium', 'iron', 'copper', 'lead'];
    const secret = SUS[Math.floor(Math.random() * SUS.length)];
    SOLIDS.mystery.c = SOLIDS[secret].c;

    const S = { solid: 'ex103', ms: 150, mw: 200, ins: true, stage: 0, sp: 1, t: 0, Tcal: T1, Tbeak: T1, result: null };
    const STEP_NAMES = ['weigh the calorimeter', 'add water and weigh', 'insulate, read T₁', 'weigh the solid', 'heat the solid to T₂', 'transfer it quickly', 'stir', 'read T₃', 'rise and fall', 'calculate cₛ'];
    let ready = false;
    const CV = fitCanvas($('#cal-canvas'), () => ready && draw());
    const status = $('#cal-status'), nextBtn = $('#cal-next');
    const sel = $('#cal-solid');
    sel.innerHTML = Object.keys(SOLIDS).map(k => `<option value="${k}">${SOLIDS[k].name}${SOLIDS[k].mystery || k === 'ex103' ? '' : ` · c = ${SOLIDS[k].c} J g⁻¹ °C⁻¹`}</option>`).join('');
    const book = $('#cal-book'), procItems = $$('#cal-proc li');
    const guessRow = $('#cal-guess'), guessFb = $('#cal-guess-fb');

    const loss = () => S.ins ? 0 : 0.18;
    function trueT3() {
      const cs = SOLIDS[S.solid].c, K = S.mw * CW + MCAL * CC, f = loss();
      return ((1 - f) * S.ms * cs * T2 + K * T1) / ((1 - f) * S.ms * cs + K);
    }
    const T3r = () => Math.round(trueT3() * 10) / 10;
    function calcCs() {
      const T3 = T3r();
      const num = (S.mw * CW + MCAL * CC) * (T3 - T1), den = S.ms * (T2 - T3);
      return { T3, num, den, cs: num / den };
    }

    function setRow(k, val) {
      const tr = $(`tr[data-k="${k}"]`, book); if (!tr) return;
      if (val == null) { tr.className = 'pending'; tr.lastElementChild.textContent = '–'; return; }
      if (tr.classList.contains('pending')) { tr.className = 'fresh'; }
      tr.lastElementChild.innerHTML = val;
    }
    function fillBook() {
      const st = S.stage, r = calcCs();
      setRow('mc', st >= 1 ? `${MCAL} g` : null);
      setRow('m', st >= 2 ? `${MCAL + S.mw} g` : null);
      setRow('mw', st >= 2 ? `${S.mw} g` : null);
      setRow('T1', st >= 3 ? `${T1.toFixed(1)} °C` : null);
      setRow('ms', st >= 4 ? `${S.ms} g` : null);
      setRow('T2', st >= 5 ? `${T2.toFixed(1)} °C` : null);
      setRow('T3', st >= 8 ? `${r.T3.toFixed(1)} °C` : null);
      setRow('rise', st >= 9 ? `${(r.T3 - T1).toFixed(1)} °C` : null);
      setRow('fall', st >= 9 ? `${(T2 - r.T3).toFixed(1)} °C` : null);
      setRow('cs', st >= 10 ? `<b style="color:var(--green)">${r.cs.toFixed(3)} J g⁻¹ °C⁻¹</b>` : null);
      procItems.forEach((li, i) => { li.classList.toggle('now', i === st - 1); li.classList.toggle('past', i < st - 1); });
    }

    function restart(note) {
      S.stage = 0; S.sp = 1; S.Tcal = T1; S.Tbeak = T1; S.result = null;
      guessRow.hidden = true; guessFb.textContent = ''; press($('#cal-guess-chips'), null);
      update(note);
    }

    function stageText() {
      const s = SOLIDS[S.solid], r = calcCs();
      switch (S.stage) {
        case 0: return ['info', `<b>Set up, then press “Start”.</b> Solid: ${s.name.toLowerCase()}, ${S.ms} g. Water: ${S.mw} g. Calorimeter: ${MCAL} g of aluminium.`];
        case 1: return ['info', `<b>Step 1:</b> the empty calorimeter with its stirrer and lid on the balance: <b>m<sub>c</sub> = ${MCAL} g</b>.`];
        case 2: return ['info', `<b>Step 2:</b> calorimeter + water reads <b>${MCAL + S.mw} g</b>, so m<sub>w</sub> = ${MCAL + S.mw} − ${MCAL} = <b>${S.mw} g</b>.`];
        case 3: return ['info', `<b>Step 3:</b> into the insulating cover with a thermometer. The water is at room temperature: <b>T₁ = ${T1.toFixed(1)} °C</b>.`];
        case 4: return ['info', `<b>Step 4:</b> the solid on the balance: <b>m<sub>s</sub> = ${S.ms} g</b>.`];
        case 5: return ['info', `<b>Step 5:</b> the solid hangs in boiling water until it reaches the same temperature as the water: <b>T₂ = ${T2.toFixed(1)} °C</b>.`];
        case 6: return S.ins ? ['info', `<b>Step 6:</b> quick! Shake off the drips, drop the solid into the calorimeter and put the lid on straight away.`]
                              : ['edge', `<b>Step 6 (sloppy):</b> the solid dawdles through the air and the calorimeter is left open. Heat is escaping to the room…`];
        case 7: return ['info', `<b>Step 7:</b> stirring… The solid cools and the water and calorimeter warm up, until all three reach the same temperature.`];
        case 8: return ['info', `<b>Step 8:</b> the reading has stopped changing: <b>T₃ = ${r.T3.toFixed(1)} °C</b>.`];
        case 9: return ['info', `<b>Step 9:</b> water + calorimeter rose by T₃ − T₁ = <b>${(r.T3 - T1).toFixed(1)} °C</b>; the solid fell by T₂ − T₃ = <b>${(T2 - r.T3).toFixed(1)} °C</b>. A big fall for the solid, a small rise for the water: water's c is much bigger.`];
        default: {
          const err = (r.cs - s.c) / s.c * 100;
          const sub = `c<sub>s</sub> = (${S.mw} × 4.18 + ${MCAL} × 0.9)(${r.T3.toFixed(1)} − 25) / (${S.ms} × (100 − ${r.T3.toFixed(1)})) = <b>${r.cs.toFixed(3)} J g⁻¹ °C⁻¹</b> (${Math.round(r.cs * 1000)} J kg⁻¹ K⁻¹)`;
          if (!S.ins) return ['bad', `<b>Step 10:</b> ${sub}. The true value is ${s.mystery ? 'hidden' : s.c.toFixed(3)}, so your answer is about <b>${Math.abs(err).toFixed(0)} % too small</b>. Heat escaped to the room, so T₃ came out low and the water seemed to gain less heat than the solid really lost.`];
          if (s.mystery) return ['good', `<b>Step 10:</b> ${sub}. Now compare it with Table 10.1 (values in J kg⁻¹ K⁻¹) and pick the metal below.`];
          return ['good', `<b>Step 10:</b> ${sub}. ${S.solid === 'ex103' ? 'Just like Example 10.3!' : `Table 10.1 value: ${s.c.toFixed(3)} J g⁻¹ °C⁻¹ (difference ${Math.abs(err).toFixed(1)} %, from rounding the readings).`}`];
        }
      }
    }

    function update(note) {
      $('#cal-ms-out').textContent = `${S.ms} g`; $('#cal-mw-out').textContent = `${S.mw} g`;
      nextBtn.textContent = S.stage === 0 ? 'Start: step 1 →' : S.stage >= 10 ? 'Experiment complete ✓' : `Step ${S.stage + 1} →`;
      nextBtn.disabled = S.stage >= 10;
      fillBook();
      if (note) setStatus(status, 'info', note); else { const [st, html] = stageText(); setStatus(status, st, html); }
      if (S.stage >= 10) {
        const s = SOLIDS[S.solid];
        if (S.solid === 'ex103' && S.ms === 150 && S.mw === 200 && S.ins) complete('l2-cal-ex103', { el: $('[data-check="l2-cal-ex103"]', root), msg: 'Example 10.3: c ≈ 0.42 J/g °C' });
        if (!S.ins) complete('l2-cal-loss', { el: $('[data-check="l2-cal-loss"]', root), msg: 'Heat loss makes c too small' });
        guessRow.hidden = !(s.mystery && S.ins);
      }
      draw();
    }

    /* ---------- drawing ---------- */
    function draw() {
      const { ctx, w, h } = CV; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const benchY = h - 26, st = S.stage, sp = S.sp, narrow = w < 600;
      ctx.fillStyle = 'rgba(140,160,255,.1)'; ctx.fillRect(0, benchY, w, 2);
      const xBal = w * 0.16, xBur = w * 0.5, xCal = w * 0.83;
      const solid = SOLIDS[S.solid];
      // station highlight
      const active = st === 1 || st === 2 || st === 4 ? xBal : st === 5 ? xBur : st >= 3 ? xCal : null;
      if (active != null) {
        const g = ctx.createRadialGradient(active, benchY, 4, active, benchY, w * 0.14);
        g.addColorStop(0, 'rgba(95,227,255,.18)'); g.addColorStop(1, 'rgba(95,227,255,0)');
        ctx.fillStyle = g; ctx.fillRect(active - w * 0.15, benchY - h * 0.6, w * 0.3, h * 0.6);
      }

      // balance
      const bw = Math.min(w * 0.22, 175), bh = 30, panY = benchY - bh - 8;
      ctx.fillStyle = '#20284a'; roundRect(ctx, xBal - bw / 2, benchY - bh, bw, bh, 6); ctx.fill();
      ctx.fillStyle = '#2f3963'; roundRect(ctx, xBal - bw * 0.42, panY, bw * 0.84, 8, 4); ctx.fill();
      let reading = '';
      if (st === 1) reading = `${MCAL} g`; else if (st === 2) reading = `${MCAL + S.mw} g`; else if (st === 3) reading = '0 g'; else if (st === 4) reading = `${S.ms} g`;
      ctx.fillStyle = '#071018'; roundRect(ctx, xBal - 36, benchY - bh + 5, 72, 16, 4); ctx.fill();
      label(ctx, reading || '– – –', xBal, benchY - bh + 13, { size: 11, color: reading ? C.green : C.muted, weight: 600 });
      label(ctx, 'Weighing machine', xBal, benchY + 14, { size: 10, color: C.muted });

      // burner + beaker
      const bkW = Math.min(w * 0.17, 145), bkH = Math.min(h * 0.42, 160), bkBase = benchY - 52;
      ctx.strokeStyle = '#5a6488'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(xBur - bkW * 0.55, benchY); ctx.lineTo(xBur - bkW * 0.45, bkBase); ctx.lineTo(xBur + bkW * 0.45, bkBase); ctx.lineTo(xBur + bkW * 0.55, benchY); ctx.stroke();
      const flame = st >= 5;
      if (flame) {
        const fl = 18 + Math.sin(S.t * 18) * 3;
        const fg = ctx.createRadialGradient(xBur, bkBase + 18, 2, xBur, bkBase + 14, fl);
        fg.addColorStop(0, 'rgba(180,220,255,.95)'); fg.addColorStop(.5, 'rgba(95,140,255,.7)'); fg.addColorStop(1, 'rgba(95,140,255,0)');
        ctx.fillStyle = fg; ctx.beginPath(); ctx.ellipse(xBur, bkBase + 18, 9, fl, 0, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#20284a'; ctx.fillRect(xBur - 8, benchY - 12, 16, 12);
      const bT = st >= 5 ? Math.min(T2, lerp(T1, T2, st === 5 ? sp : 1)) : T1;
      S.Tbeak = bT;
      ctx.fillStyle = waterCol(bT, 0.55); ctx.fillRect(xBur - bkW / 2 + 3, bkBase - bkH * 0.72, bkW - 6, bkH * 0.72 - 2);
      if (flame && !L.reduceMotion) {
        ctx.fillStyle = 'rgba(255,255,255,.55)';
        for (let i = 0; i < 9; i++) { const bx = xBur - bkW / 2 + 8 + ((i * 41) % (bkW - 16)); const by = bkBase - 6 - ((S.t * 40 + i * 23) % (bkH * 0.66)); ctx.beginPath(); ctx.arc(bx, by, 1.6 + (i % 3) * 0.6, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.strokeStyle = 'rgba(210,230,255,.75)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(xBur - bkW / 2, bkBase - bkH); ctx.lineTo(xBur - bkW / 2, bkBase); ctx.lineTo(xBur + bkW / 2, bkBase); ctx.lineTo(xBur + bkW / 2, bkBase - bkH); ctx.stroke();
      // stand + clamp
      const stX = xBur - bkW / 2 - 22, topY = Math.max(64, bkBase - bkH - 60);
      ctx.strokeStyle = '#5a6488'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(stX, benchY); ctx.lineTo(stX, topY); ctx.lineTo(xBur + 6, topY); ctx.stroke();
      thermometer(ctx, xBur + bkW * 0.28, topY + 22, bkBase - 12, bT, { text: true, col: st >= 5 ? C.red : C.text });
      label(ctx, 'Boiling water', xBur, benchY + 14, { size: 10, color: C.muted });

      // insulating box + calorimeter
      const boxW = Math.min(w * 0.22, 185), boxH = Math.min(h * 0.58, 210);
      const boxX = xCal - boxW / 2, boxY = benchY - boxH;
      ctx.fillStyle = S.ins ? '#1b2140' : 'rgba(27,33,64,.35)'; ctx.strokeStyle = S.ins ? '#8b95bb' : 'rgba(139,149,187,.4)'; ctx.lineWidth = 1.5;
      if (!S.ins) ctx.setLineDash([5, 5]);
      roundRect(ctx, boxX, boxY, boxW, boxH, 8); ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
      label(ctx, S.ins ? 'Insulating box' : 'No insulation', xCal, benchY + 14, { size: 10, color: S.ins ? C.muted : C.red });

      // calorimeter cup position
      const cupW = boxW * 0.56, cupH = boxH * 0.72;
      const onBal = { x: xBal, y: panY }, inBox = { x: xCal, y: benchY - 14 };
      let cup;
      if (st <= 2) cup = onBal; else if (st === 3) cup = arc(onBal, inBox, sp, h * 0.25); else cup = inBox;
      // water & temperature in the cup
      const waterIn = st >= 2;
      let Tc = T1;
      if (st >= 6) Tc = st === 6 || st === 7 ? S.Tcal : T3r();
      ctx.save();
      if (waterIn) { ctx.fillStyle = waterCol(Tc, 0.55); ctx.fillRect(cup.x - cupW / 2 + 3, cup.y - cupH * 0.68, cupW - 6, cupH * 0.68 - 2); }
      ctx.strokeStyle = '#c9a46a'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(cup.x - cupW / 2, cup.y - cupH); ctx.lineTo(cup.x - cupW / 2, cup.y); ctx.lineTo(cup.x + cupW / 2, cup.y); ctx.lineTo(cup.x + cupW / 2, cup.y - cupH); ctx.stroke();
      // stirrer
      const stirY = st === 7 && !L.reduceMotion ? Math.sin(S.t * 9) * 8 : 0;
      ctx.strokeStyle = '#8b95bb'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cup.x + cupW * 0.3, cup.y - cupH - 16 + stirY); ctx.lineTo(cup.x + cupW * 0.3, cup.y - 8 + stirY); ctx.lineTo(cup.x + cupW * 0.1, cup.y - 8 + stirY); ctx.stroke();
      // lid
      if (st >= 6 && S.ins) { ctx.fillStyle = '#2a3358'; ctx.fillRect(cup.x - cupW / 2 - 4, cup.y - cupH - 7, cupW + 8, 7); }
      ctx.restore();
      if (st >= 3) thermometer(ctx, cup.x - cupW * 0.18, Math.max(70, cup.y - cupH - 50), cup.y - 12, Tc, { col: C.cyan });

      // the solid cylinder
      const cw = Math.max(14, 21 * Math.cbrt(S.ms / 150)), ch = cw * 1.5;
      const pBench = { x: w * 0.31, y: benchY }, pBal = { x: xBal - bw * 0.2, y: panY }, pBeak = { x: xBur - bkW * 0.12, y: bkBase - 10 }, pCal = { x: xCal + cupW * 0.05, y: benchY - 16 };
      let P, hang = false;
      if (st <= 3) P = pBench;
      else if (st === 4) P = arc(pBench, pBal, sp, 40);
      else if (st === 5) { P = arc(pBal, pBeak, sp, h * 0.35); hang = sp > 0.95; }
      else if (st === 6) P = arc(pBeak, pCal, sp, h * 0.35);
      else P = pCal;
      if (st === 4 && sp >= 1) P = pBal;
      // temperature of the solid (for the glow)
      let Ts = T1;
      if (st === 5) Ts = lerp(T1, T2, sp); else if (st === 6) Ts = T2 - (S.ins ? 0 : 6) * sp; else if (st === 7) Ts = lerp(T2, S.Tcal, Math.min(1, S.sp)); else if (st >= 8) Ts = T3r();
      if (hang) { ctx.strokeStyle = 'rgba(220,220,230,.6)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(P.x, P.y - ch); ctx.lineTo(P.x, topY); ctx.stroke(); }
      ctx.save();
      const sg = ctx.createLinearGradient(P.x - cw / 2, 0, P.x + cw / 2, 0);
      sg.addColorStop(0, shade(solid.col, -0.3)); sg.addColorStop(0.5, solid.col); sg.addColorStop(1, shade(solid.col, -0.4));
      ctx.fillStyle = sg; roundRect(ctx, P.x - cw / 2, P.y - ch, cw, ch, 3); ctx.fill();
      const heat = clamp((Ts - 30) / 70, 0, 1);
      if (heat > 0) { ctx.fillStyle = `rgba(255,90,60,${heat * 0.55})`; ctx.shadowColor = '#ff5a3c'; ctx.shadowBlur = 14 * heat; roundRect(ctx, P.x - cw / 2, P.y - ch, cw, ch, 3); ctx.fill(); }
      ctx.restore();
      if (solid.mystery) label(ctx, '?', P.x, P.y - ch / 2, { size: 11, color: 'rgba(20,24,40,.7)', weight: 700 });
      if (st === 6 && !S.ins && sp < 1) label(ctx, 'heat escaping…', P.x, P.y - ch - 14, { size: 10, color: C.red, bg: C.bgLabel });
      if (!narrow && st <= 3) label(ctx, 'solid', pBench.x, benchY - ch - 10, { size: 10, color: C.muted });
      // step caption
      label(ctx, st === 0 ? 'Ready when you are' : `Step ${st} of 10 · ${STEP_NAMES[st - 1]}`, 14, 20, { size: 15, color: C.text, align: 'left', font: 'head', weight: 600 });
      if (st >= 3) label(ctx, `water + calorimeter: ${Tc.toFixed(1)} °C`, 14, 42, { size: 11, color: C.cyan, align: 'left' });
    }
    function arc(a, b, t, hgt) {
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      return { x: lerp(a.x, b.x, e), y: lerp(a.y, b.y, e) - Math.sin(Math.PI * e) * hgt };
    }
    function shade(hex, k) {
      const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      const f = v => Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k));
      return `rgb(${f(r)},${f(g)},${f(b)})`;
    }

    // controls
    sel.addEventListener('change', () => { S.solid = sel.value; restart(); });
    bindRange($('#cal-ms'), v => { S.ms = v; restart(); });
    bindRange($('#cal-mw'), v => { S.mw = v; restart(); });
    $('#cal-ins').addEventListener('change', e => { S.ins = e.target.checked; restart(); });
    nextBtn.addEventListener('click', () => {
      if (S.stage >= 10) return;
      S.stage++; S.sp = L.reduceMotion ? 1 : 0;
      if (S.stage === 6) S.Tcal = T1;
      update();
    });
    $('#cal-restart').addEventListener('click', () => restart());
    $$('#cal-guess-chips .chip').forEach(b => b.addEventListener('click', () => {
      press($('#cal-guess-chips'), b);
      if (b.dataset.g === secret) {
        guessFb.className = 'fb ok'; guessFb.innerHTML = `Correct: it's <b>${SOLIDS[secret].name.toLowerCase()}</b> (Table 10.1: ${Math.round(SOLIDS[secret].c * 1000)} J kg⁻¹ K⁻¹).`;
        complete('l2-cal-mystery', { el: $('[data-check="l2-cal-mystery"]', root), msg: `Identified: ${SOLIDS[secret].name}!` });
      } else { guessFb.className = 'fb no'; guessFb.textContent = 'Not that one. Convert your result to J kg⁻¹ K⁻¹ (× 1000) and compare again.'; }
    }));
    $$('[data-cal-load]').forEach(b => b.addEventListener('click', () => {
      S.solid = 'ex103'; sel.value = 'ex103'; S.ms = 150; S.mw = 200; S.ins = true; $('#cal-ins').checked = true;
      const ms = $('#cal-ms'), mw = $('#cal-mw'); ms.value = 150; mw.value = 200; ms.dispatchEvent(new Event('input')); mw.dispatchEvent(new Event('input'));
      restart('<b>Example 10.3 loaded:</b> 150 g solid, 200 g water at 25 °C, 50 g calorimeter (c = 0.9 J/g °C). Press “Start” and follow the steps.');
    }));

    animateWhileVisible(root, dt => {
      S.t += dt;
      if (S.sp < 1) S.sp = Math.min(1, S.sp + dt / 1.1);
      if (S.stage === 6 || S.stage === 7) {      // the water warms towards T3 while the solid sits in it
        const target = trueT3();
        S.Tcal += (target - S.Tcal) * Math.min(1, dt * (S.stage === 7 ? 1.6 : 0.5));
      }
      draw();
    });
    ready = true; restart();
    redraws.push(draw);
  })();

  /* =====================================================
     LAB 3 · The electrical method
     ===================================================== */
  (function elLab() {
    const root = $('#lab-el'); if (!root) return;
    const R_HEATER = 4, C_H = 20, G = 2, SPEED = 30, MCAL = 0.1, CCAL = 900;
    const MATS = {
      solid: { aluminium: { name: 'Aluminium', c: 910, col: '#c9ced8' }, iron: { name: 'Iron / steel', c: 452, col: '#7d8590' }, copper: { name: 'Copper', c: 387, col: '#d9824a' } },
      liquid: { water: { name: 'Water', c: 4190, col: '#3fa9ff' }, glycerin: { name: 'Glycerin', c: 2410, col: '#e9e3b4' }, ethanol: { name: 'Ethanol', c: 2450, col: '#bfe8d0' } }
    };
    const S = { mode: 'solid', mat: 'aluminium', m: 1, V: 12, ins: true, phase: 'idle', t: 0, tOn: 0, tOff: null, Th: ROOM, Ts: ROOM, Tmax: ROOM, hist: [], anim: 0 };
    let ready = false;
    const CV = fitCanvas($('#el-canvas'), () => ready && draw());
    const status = $('#el-status'), goBtn = $('#el-go');
    const matSel = $('#el-mat'), mInput = $('#el-m');
    const ro = { v: $('#el-rv'), i: $('#el-ri'), t: $('#el-rt'), q: $('#el-rq'), T: $('#el-rT'), c: $('#el-rc'), ck: $('#el-rc-k') };
    let mR;

    const I = () => S.V / R_HEATER, P = () => S.V * I();
    const mat = () => MATS[S.mode][S.mat];
    const Cs = () => S.mode === 'solid' ? S.m * mat().c : S.m * mat().c + MCAL * CCAL;
    const kLoss = () => S.ins ? 0.02 : 0.6;

    function configMode() {
      const solid = S.mode === 'solid';
      matSel.innerHTML = Object.entries(MATS[S.mode]).map(([k, v]) => `<option value="${k}">${v.name} · c = ${v.c}</option>`).join('');
      S.mat = solid ? 'aluminium' : 'water'; matSel.value = S.mat;
      $('#el-mat-name').textContent = solid ? 'Block material' : 'Liquid';
      $('#el-m-name').textContent = solid ? 'Mass of block' : 'Mass of liquid';
      $('#el-ins-name').textContent = solid ? 'Cotton wool around the block' : 'Insulated container with lid';
      ro.ck.textContent = solid ? 'c = VIt / mΔT (Eq. 10.4)' : 'c from Eq. 10.5';
      if (solid) { mInput.min = 0.5; mInput.max = 2; mInput.step = 0.1; S.m = 1; }
      else { mInput.min = 0.1; mInput.max = 0.4; mInput.step = 0.02; S.m = 0.2; }
      mR.set(S.m);
    }
    function reset() {
      Object.assign(S, { phase: 'idle', t: 0, tOn: 0, tOff: null, Th: ROOM, Ts: ROOM, Tmax: ROOM, hist: [{ t: 0, T: ROOM }] });
      update();
    }
    const measured = () => {
      const dT = S.Tmax - ROOM, Q = P() * S.tOn;
      if (dT < 0.2) return null;
      return S.mode === 'solid' ? Q / (S.m * dT) : (Q - MCAL * CCAL * dT) / (S.m * dT);
    };

    function step(dt) {
      if (S.phase === 'idle') return false;
      const n = Math.ceil(dt / 0.25), h = dt / n;
      for (let k = 0; k < n; k++) {
        const on = S.phase === 'on';
        const flow = G * (S.Th - S.Ts);
        S.Th += h * ((on ? P() : 0) - flow) / C_H;
        S.Ts += h * (flow - kLoss() * (S.Ts - ROOM)) / Cs();
        S.t += h; if (on) S.tOn += h;
        if (S.Ts > S.Tmax) S.Tmax = S.Ts;
        if (on && S.mode === 'solid' && S.tOn >= 600) { S.tOn = 600; switchOff(); }
        if (on && S.mode === 'liquid' && S.Ts - ROOM >= 10) switchOff();
      }
      const last = S.hist[S.hist.length - 1];
      if (S.t - last.t >= 2) S.hist.push({ t: S.t, T: S.Ts });
      return true;
    }
    function switchOff() { S.phase = 'off'; S.tOff = S.t; }

    function draw() {
      const { ctx, w, h } = CV; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const narrow = w < 600;
      const appW = narrow ? w : w * 0.56;
      const appH = narrow ? h * 0.6 : h;
      const benchY = appH - 22, cx = appW * 0.4;
      const on = S.phase === 'on';
      const m = mat();
      // ---- circuit (top) ----
      const railY = 26, supX = appW * 0.86;
      ctx.strokeStyle = on ? 'rgba(255,198,92,.75)' : '#5a6488'; ctx.lineWidth = 2;
      // supply box
      ctx.fillStyle = '#1b2140'; roundRect(ctx, supX - 30, railY + 34, 60, 40, 8); ctx.fill(); ctx.strokeStyle = '#8b95bb'; ctx.stroke();
      label(ctx, `${S.V} V DC`, supX, railY + 54, { size: 11, color: C.text });
      // heater leads
      let hx, hTop, hBot;
      if (S.mode === 'solid') {
        const bw = Math.min(appW * 0.34, 150) * Math.cbrt(S.m), bh = Math.min(appH * 0.42, 140) * Math.cbrt(S.m) * 0.9;
        const bx = cx - bw / 2, by = benchY - bh;
        // cotton wool
        if (S.ins) {
          ctx.fillStyle = 'rgba(235,238,250,.28)';
          for (let a = 0; a < 26; a++) {          // fluffy wool on both sides and the top
            const py = by + 6 + ((a * 37) % 100) / 100 * (bh - 6);
            ctx.beginPath(); ctx.arc(a % 2 ? bx - 6 : bx + bw + 6, py, 9, 0, Math.PI * 2); ctx.fill();
          }
          for (let a = 0; a < 10; a++) { ctx.beginPath(); ctx.arc(bx + (a + 0.5) * bw / 10, by - 4, 8, 0, Math.PI * 2); ctx.fill(); }
        }
        const g = ctx.createLinearGradient(bx, 0, bx + bw, 0);
        g.addColorStop(0, shade(m.col, -0.35)); g.addColorStop(.5, m.col); g.addColorStop(1, shade(m.col, -0.45));
        ctx.fillStyle = g; ctx.fillRect(bx, by, bw, bh);
        const heat = clamp((S.Ts - ROOM) / 60, 0, 1);
        if (heat > 0) { ctx.fillStyle = `rgba(255,90,60,${heat * 0.45})`; ctx.fillRect(bx, by, bw, bh); }
        ctx.fillStyle = shade(m.col, 0.25); ctx.beginPath(); ctx.ellipse(cx, by, bw / 2, 7, 0, 0, Math.PI * 2); ctx.fill();
        // heater in central hole
        hx = cx - bw * 0.12; hTop = by - 36; hBot = by + bh * 0.8;
        ctx.fillStyle = '#1b2140'; ctx.fillRect(hx - 9, by, 18, bh * 0.82);
        // thermometer in smaller hole
        const tx = cx + bw * 0.25;
        ctx.fillStyle = '#1b2140'; ctx.fillRect(tx - 6, by, 12, bh * 0.55);
        thermometer(ctx, tx, Math.max(railY + (narrow ? 62 : 30), by - 70), by + bh * 0.5, S.Ts, { min: 0, max: 100, col: C.cyan });
        label(ctx, `${m.name} block · ${S.m.toFixed(1)} kg`, cx, benchY + 12, { size: 10, color: C.muted });
      } else {
        const bw = Math.min(appW * 0.42, 180), bh = Math.min(appH * 0.5, 160);
        const bx = cx - bw / 2, by = benchY - bh;
        ctx.fillStyle = S.ins ? '#1b2140' : 'rgba(27,33,64,.3)'; ctx.strokeStyle = S.ins ? '#8b95bb' : 'rgba(139,149,187,.45)'; ctx.lineWidth = S.ins ? 6 : 1.5;
        roundRect(ctx, bx, by, bw, bh, 8); ctx.fill(); ctx.stroke();
        const lh = bh * (0.35 + 0.5 * (S.m / 0.4));
        ctx.fillStyle = S.mode === 'liquid' && S.mat === 'water' ? waterCol(S.Ts * 1.6 - 15, 0.5) : m.col; ctx.globalAlpha = S.mat === 'water' ? 1 : 0.45;
        ctx.fillRect(bx + 8, benchY - 8 - lh * 0.9, bw - 16, lh * 0.9); ctx.globalAlpha = 1;
        if (S.ins) { ctx.fillStyle = '#2a3358'; ctx.fillRect(bx - 4, by - 10, bw + 8, 10); }
        hx = cx; hTop = by - 40; hBot = benchY - 18;
        thermometer(ctx, bx + bw * 0.2, Math.max(railY + (narrow ? 62 : 30), by - 70), benchY - 24, S.Ts, { min: 0, max: 100, col: C.cyan });
        label(ctx, `${m.name} · ${(S.m * 1000).toFixed(0)} g + 100 g calorimeter`, cx, benchY + 12, { size: 10, color: C.muted });
      }
      // heater element
      const glow = clamp((S.Th - S.Ts) / 14, 0, 1);
      ctx.save(); ctx.fillStyle = `rgb(${Math.round(lerp(120, 255, glow))},${Math.round(lerp(120, 110, glow))},${Math.round(lerp(140, 60, glow))})`;
      if (glow > 0.1) { ctx.shadowColor = '#ff5a3c'; ctx.shadowBlur = 16 * glow; }
      if (S.mode === 'solid') roundRect(ctx, hx - 5, hTop, 10, hBot - hTop, 4);
      else { roundRect(ctx, hx - 34, hBot - 12, 68, 12, 6); }
      ctx.fill(); ctx.restore();
      // wires: heater → ammeter → supply, heater → supply
      const aX = appW * 0.62, vX = appW * 0.62;
      ctx.strokeStyle = on ? 'rgba(255,198,92,.75)' : '#5a6488'; ctx.lineWidth = 2;
      const leadX1 = S.mode === 'solid' ? hx - 3 : hx - 26, leadX2 = S.mode === 'solid' ? hx + 3 : hx + 26;
      const leadTop = S.mode === 'solid' ? hTop : hBot - 12;
      ctx.beginPath(); ctx.moveTo(leadX1, leadTop); ctx.lineTo(leadX1, railY); ctx.lineTo(aX - 15, railY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(aX + 15, railY); ctx.lineTo(supX, railY); ctx.lineTo(supX, railY + 34); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(leadX2, leadTop); ctx.lineTo(leadX2, railY + 14); ctx.lineTo(supX - 40, railY + 14); ctx.lineTo(supX - 40, railY + 54); ctx.lineTo(supX - 30, railY + 54); ctx.stroke();
      // meters
      const meter = (x, y, ch, val, col) => {
        ctx.fillStyle = '#0e1630'; ctx.strokeStyle = col; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        label(ctx, ch, x, y + 1, { size: 13, color: col, font: 'head', weight: 700 });
        label(ctx, val, x, y + 26, { size: 10, color: col, bg: C.bgLabel });
      };
      meter(aX, railY, 'A', on ? `${I().toFixed(2)} A` : '0 A', C.cyan);
      // voltmeter across the heater
      const vY = railY + 64;
      ctx.save(); ctx.setLineDash([4, 3]); ctx.strokeStyle = '#8b95bb'; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(leadX1, railY + 40); ctx.lineTo(vX - 14, vY); ctx.moveTo(vX + 14, vY); ctx.lineTo(supX - 40, vY - 4); ctx.stroke(); ctx.restore();
      meter(vX, vY, 'V', on ? `${S.V.toFixed(1)} V` : '0 V', C.amber);
      // switch
      label(ctx, on ? 'switch: ON' : 'switch: OFF', supX, railY + 88, { size: 10, color: on ? C.amber : C.muted });
      // clock
      label(ctx, `⏱ ${fmtTime(S.t)}`, 14, 16, { size: 11, color: C.text, align: 'left', bg: C.bgLabel });

      // ---- graph ----
      const gx0 = narrow ? 36 : appW + 40, gy0 = narrow ? appH + 36 : 30, gx1 = w - 12, gy1 = h - 26;
      const tMax = Math.max(S.mode === 'solid' ? 720 : 360, S.t * 1.05);
      const yMax = Math.max(40, Math.ceil((S.Tmax + 5) / 10) * 10);
      const X = t => gx0 + (gx1 - gx0) * t / tMax, Y = T => gy1 - (gy1 - gy0) * (T - 20) / (yMax - 20);
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
      for (let T = 20; T <= yMax; T += 10) { ctx.moveTo(gx0, Y(T)); ctx.lineTo(gx1, Y(T)); }
      ctx.stroke();
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(gx0, gy0 - 4); ctx.lineTo(gx0, gy1); ctx.lineTo(gx1, gy1); ctx.stroke();
      for (let T = 20; T <= yMax; T += 10) label(ctx, String(T), gx0 - 6, Y(T), { size: 10, align: 'right' });
      for (let k = 0; k <= 4; k++) label(ctx, `${Math.round(tMax * k / 4 / 60)} min`, X(tMax * k / 4), gy1 + 11, { size: 9, align: k === 4 ? 'right' : k === 0 ? 'left' : 'center' });
      label(ctx, 'T (°C)', gx0, gy0 - 14, { size: 10, align: 'left' });
      if (S.tOff != null) {
        ctx.save(); ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(169,139,255,.7)';
        ctx.beginPath(); ctx.moveTo(X(S.tOff), gy0); ctx.lineTo(X(S.tOff), gy1); ctx.stroke(); ctx.restore();
        label(ctx, 'off', X(S.tOff) + 4, gy0 + 6, { size: 10, align: 'left', color: C.violet });
      }
      ctx.save(); ctx.strokeStyle = C.cyan; ctx.lineWidth = 2; ctx.shadowColor = C.cyan; ctx.shadowBlur = 8;
      ctx.beginPath(); S.hist.forEach((p, i) => { if (i) ctx.lineTo(X(p.t), Y(p.T)); else ctx.moveTo(X(p.t), Y(p.T)); }); ctx.lineTo(X(S.t), Y(S.Ts)); ctx.stroke(); ctx.restore();
      if (S.phase === 'off') {
        ctx.save(); ctx.setLineDash([2, 3]); ctx.strokeStyle = 'rgba(92,240,160,.6)';
        ctx.beginPath(); ctx.moveTo(gx0, Y(S.Tmax)); ctx.lineTo(gx1, Y(S.Tmax)); ctx.stroke(); ctx.restore();
        label(ctx, `highest ${S.Tmax.toFixed(1)} °C`, gx1, Y(S.Tmax) - 9, { size: 10, align: 'right', color: C.green });
      }
    }
    function fmtTime(s) { return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`; }
    function shade(hex, k) {
      const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      const f = v => Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k));
      return `rgb(${f(r)},${f(g)},${f(b)})`;
    }

    function update() {
      $('#el-m-out').textContent = S.mode === 'solid' ? `${S.m.toFixed(1)} kg` : `${Math.round(S.m * 1000)} g`;
      $('#el-v-out').textContent = `${S.V.toFixed(1)} V → I = ${I().toFixed(2)} A`;
      ro.v.textContent = `${S.V.toFixed(1)} V`; ro.i.textContent = `${I().toFixed(2)} A`;
      ro.t.textContent = `${Math.round(S.tOn)} s`;
      ro.q.textContent = kJ(P() * S.tOn);
      ro.T.textContent = `${S.Tmax.toFixed(1)} °C`;
      const settled = S.phase === 'off' && S.t - S.tOff >= 30;
      const c = measured(), tv = mat().c;
      ro.c.textContent = S.phase === 'off' && c ? `${Math.round(c)} J/kg K` : '–';
      ro.c.className = 'ro-v ' + (S.phase === 'off' && c ? (Math.abs(c - tv) / tv <= 0.05 ? 'good' : 'bad') : '');
      goBtn.textContent = S.phase === 'on' ? '⏻ Switch off now' : S.phase === 'off' ? '✓ Run finished (Reset to repeat)' : '⚡ Switch on';
      goBtn.disabled = S.phase === 'off';

      if (S.phase === 'idle') setStatus(status, 'info', `<b>Ready.</b> ${S.mode === 'solid' ? `A ${S.m.toFixed(1)} kg ${mat().name.toLowerCase()} block` : `${Math.round(S.m * 1000)} g of ${mat().name.toLowerCase()} in a 100 g aluminium calorimeter`}, starting at 25.0 °C. Switching on supplies P = VI = ${S.V} × ${I().toFixed(2)} = <b>${P().toFixed(1)} J every second</b>.`);
      else if (S.phase === 'on') setStatus(status, 'info', S.mode === 'solid'
        ? `<b>Heater on</b> for ${Math.round(S.tOn)} s of 600 s. Q so far = VIt = ${kJ(P() * S.tOn)}. Notice the heater gets hotter than the block: heat needs a temperature difference to flow.`
        : `<b>Heater on.</b> The temperature has risen by ${(S.Ts - ROOM).toFixed(1)} °C so far. The heater switches off after a 10 °C rise.`);
      else if (!settled) setStatus(status, 'edge', `<b>Heater off, but the temperature is still rising</b> (${S.Ts.toFixed(2)} °C). The hot heater is still passing its heat to the ${S.mode === 'solid' ? 'block' : 'liquid'}. Wait for the highest reading…`);
      else {
        const err = (c - tv) / tv * 100;
        const how = S.mode === 'solid'
          ? `c = VIt / (mΔT) = ${kJ(P() * S.tOn)} / (${S.m.toFixed(1)} × ${(S.Tmax - ROOM).toFixed(2)})`
          : `c = (VIt − m<sub>c</sub>c<sub>c</sub>ΔT) / (m<sub>l</sub>ΔT) = (${Math.round(P() * S.tOn)} − 0.1 × 900 × ${(S.Tmax - ROOM).toFixed(2)}) / (${S.m.toFixed(2)} × ${(S.Tmax - ROOM).toFixed(2)})`;
        if (!S.ins) setStatus(status, 'bad', `<b>Result: ${Math.round(c)} J kg⁻¹ K⁻¹</b>, about <b>${Math.abs(err).toFixed(0)} % too large</b> (table: ${tv}). ${how}. Without insulation, heat leaked to the room, so ΔT came out too small, and a small ΔT on the bottom of the fraction makes c too big.`);
        else setStatus(status, Math.abs(err) <= 5 ? 'good' : 'edge', `<b>Result: ${Math.round(c)} J kg⁻¹ K⁻¹</b> (table: ${tv}, difference ${Math.abs(err).toFixed(1)} %). ${how}. The small excess comes from heat kept by the heater itself and the tiny leak through the insulation.`);
      }
      // challenges
      if (S.phase === 'off' && settled && c) {
        const ok = Math.abs(c - tv) / tv <= 0.05;
        if (S.mode === 'solid' && S.mat === 'aluminium' && S.ins && S.tOn >= 599 && ok) complete('l2-el-solid', { el: $('[data-check="l2-el-solid"]', root), msg: `Aluminium: ${Math.round(c)} J/kg K` });
        if (S.mode === 'liquid' && S.mat === 'water' && S.ins && ok) complete('l2-el-liquid', { el: $('[data-check="l2-el-liquid"]', root), msg: `Water: ${Math.round(c)} J/kg K` });
        if (!S.ins) complete('l2-el-loss', { el: $('[data-check="l2-el-loss"]', root), msg: 'Heat loss makes c too large' });
      }
      if (S.phase === 'off' && S.t - S.tOff >= 60) complete('l2-el-after', { el: $('[data-check="l2-el-after"]', root), msg: 'It kept rising after switch-off!' });
      draw();
    }

    // controls
    $$('#el-mode .chip').forEach(b => b.addEventListener('click', () => { press($('#el-mode'), b); S.mode = b.dataset.mode; configMode(); reset(); }));
    matSel.addEventListener('change', () => { S.mat = matSel.value; reset(); });
    mR = bindRange(mInput, v => { S.m = v; reset(); });
    bindRange($('#el-v'), v => { S.V = v; reset(); });
    $('#el-ins').addEventListener('change', e => { S.ins = e.target.checked; reset(); });
    goBtn.addEventListener('click', () => {
      if (S.phase === 'idle') { S.phase = 'on'; update(); }
      else if (S.phase === 'on') { switchOff(); update(); }
    });
    $('#el-reset').addEventListener('click', reset);

    animateWhileVisible(root, dt => {
      S.anim += dt;
      if (S.phase === 'off' && S.t - S.tOff > 240) { draw(); return; }   // nothing much left to see
      if (step(dt * SPEED)) update(); else draw();
    });
    configMode();
    ready = true; reset();
    redraws.push(draw);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
