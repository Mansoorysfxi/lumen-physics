/* =========================================================
   Class 10 · Unit 10 · Lesson 1 · Specific Heat Capacity — labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const { $, $$, clamp, fitCanvas, animateWhileVisible, bindRange, label, roundRect, complete, setStatus, press } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', grid: 'rgba(140,160,255,.1)', axis: 'rgba(140,160,255,.4)', bgLabel: 'rgba(5,9,21,.82)'
  };
  const redraws = [];
  const ROOM = 25;                       // starting / room temperature (°C)

  /* Table 10.1 (+ dry soil from p. 13). rho only sets the drawn size: same mass, different volume */
  const MATS = {
    water:     { name: 'Water', c: 4190, rho: 1000, kind: 'liquid', col: '#3fa9ff' },
    glycerin:  { name: 'Glycerin', c: 2410, rho: 1260, kind: 'liquid', col: '#e9e3b4' },
    glass:     { name: 'Glass', c: 840, rho: 2500, kind: 'glass', col: '#9fe3ff' },
    aluminium: { name: 'Aluminium', c: 910, rho: 2700, kind: 'metal', col: '#c9ced8' },
    soil:      { name: 'Dry soil', c: 800, rho: 1500, kind: 'soil', col: '#8a5a35' },
    iron:      { name: 'Iron / steel', c: 452, rho: 7870, kind: 'metal', col: '#7d8590' },
    copper:    { name: 'Copper', c: 387, rho: 8960, kind: 'metal', col: '#d9824a' },
    silver:    { name: 'Silver', c: 235, rho: 10490, kind: 'metal', col: '#e3e7ef' },
    mercury:   { name: 'Mercury', c: 139, rho: 13530, kind: 'liquid', col: '#cfd6df' },
    gold:      { name: 'Gold', c: 129, rho: 19300, kind: 'metal', col: '#f2c14e' },
    lead:      { name: 'Lead', c: 128, rho: 11340, kind: 'metal', col: '#8a93a6' },
    mystery:   { name: 'Mystery metal', c: 0, rho: 8000, kind: 'metal', col: '#9aa3b2', mystery: true }
  };
  // the mystery metal is one of these, picked when the page loads
  const SUSPECTS = ['aluminium', 'iron', 'copper', 'silver'];
  const secret = SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)];
  MATS.mystery.c = MATS[secret].c;

  const fmtQ = q => q < 10000 ? `${Math.round(q)} J` : q < 1e6 ? `${(q / 1000).toFixed(q < 1e5 ? 2 : 1)} kJ` : `${(q / 1e6).toFixed(3)} MJ`;
  const fmtT = s => s < 600 ? `${Math.round(s)} s` : `${Math.floor(s / 60)} min ${String(Math.round(s % 60)).padStart(2, '0')} s`;

  /* temperature → colour for little tints (blue cold … red hot) */
  function tempCol(T, a = 1, lo = 0, hi = 50) {
    const f = clamp((T - lo) / (hi - lo), 0, 1);
    const stops = [[0, [95, 160, 255]], [0.45, [169, 139, 255]], [0.7, [255, 150, 90]], [1, [255, 80, 70]]];
    let k = 0; while (k < stops.length - 2 && f > stops[k + 1][0]) k++;
    const [t0, c0] = stops[k], [t1, c1] = stops[k + 1], g = (f - t0) / (t1 - t0);
    return `rgba(${c0.map((v, i) => Math.round(v + (c1[i] - v) * g)).join(',')},${a})`;
  }

  /* =====================================================
     LAB 1 · The heat race
     ===================================================== */
  (function raceLab() {
    const root = $('#lab-race'); if (!root) return;
    const H_LOSS = 6;                    // W/K per (kg^(2/3)): heat lost to the air while cooling
    const S = {
      a: 'water', b: 'copper', m: 1, P: 1000, speed: 20,
      phase: 'idle',                     // idle | heating | paused | hot | cooling
      t: 0, tCoolStart: null, tCool: 0, tmax: 300, hist: [], anim: 0
    };
    const sample = () => ({ T: ROOM, Q: 0, on: true, cut: false, Theat: ROOM });
    S.A = sample(); S.B = sample();
    let ready = false;
    const RC = fitCanvas($('#race-rig'), () => ready && drawRig());
    const GC = fitCanvas($('#race-graph'), () => ready && drawGraph());
    const status = $('#race-status');
    const selA = $('#race-a'), selB = $('#race-b');
    const goBtn = $('#race-go'), coolBtn = $('#race-cool');
    const ro = {
      t: $('#race-t'), qa: $('#race-qa'), da: $('#race-da'), ca: $('#race-ca'),
      qb: $('#race-qb'), db: $('#race-db'), cb: $('#race-cb'), m: $('#race-m-out'), p: $('#race-p-out')
    };
    const myRow = $('#race-mystery-row'), myFb = $('#race-fb'), myIn = $('#race-answer');

    // fill the two selects
    const order = ['water', 'glycerin', 'glass', 'aluminium', 'soil', 'iron', 'copper', 'silver', 'mercury', 'gold', 'lead', 'mystery'];
    [selA, selB].forEach(sel => {
      sel.innerHTML = order.map(k => `<option value="${k}">${MATS[k].name}${MATS[k].mystery ? ' (c = ?)' : ` · c = ${MATS[k].c}`}</option>`).join('');
    });
    selA.value = S.a; selB.value = S.b;

    function reset(note) {
      S.phase = 'idle'; S.t = 0; S.tCoolStart = null; S.tCool = 0; S.tmax = 300; S.hist = [{ t: 0, a: ROOM, b: ROOM }];
      S.A = sample(); S.B = sample();
      update(note);
    }

    const both = () => [[S.A, MATS[S.a], 'a'], [S.B, MATS[S.b], 'b']];

    function step(dt) {
      if (S.phase === 'heating') {
        both().forEach(([s, mat]) => {
          if (!s.on) return;
          const dQ = S.P * dt;
          s.Q += dQ; s.T += dQ / (S.m * mat.c);
          if (s.T >= 100) {           // safety cut-out
            const extra = (s.T - 100) * S.m * mat.c;
            s.Q -= extra; s.T = 100; s.on = false; s.cut = true;
          }
          s.Theat = s.T;
        });
        S.t += dt;
        if (!S.A.on && !S.B.on) S.phase = 'hot';
      } else if (S.phase === 'cooling') {
        const h = H_LOSS * Math.pow(S.m, 2 / 3);
        both().forEach(([s, mat]) => { s.T = ROOM + (s.T - ROOM) * Math.exp(-h * dt / (S.m * mat.c)); });
        S.t += dt; S.tCool += dt;
      } else return false;
      const last = S.hist[S.hist.length - 1];
      if (!last || S.t - last.t >= S.tmax / 500) S.hist.push({ t: S.t, a: S.A.T, b: S.B.T });
      while (S.t > S.tmax * 0.96) S.tmax *= 2;
      return true;
    }

    /* ---------- the bench ---------- */
    function drawStation(ctx, cx, benchY, w, h, s, mat, col, tag) {
      const pw = Math.min(w * 0.4, 190), ph = 14;
      const plateY = benchY - ph;
      // heater
      const on = s.on && S.phase === 'heating';
      ctx.save();
      ctx.fillStyle = '#20284a'; roundRect(ctx, cx - pw / 2, plateY, pw, ph, 5); ctx.fill();
      if (on) { ctx.shadowColor = '#ff5a3c'; ctx.shadowBlur = 18; }
      const pg = ctx.createLinearGradient(0, plateY, 0, plateY + 6);
      pg.addColorStop(0, on ? '#ff7a45' : s.cut ? '#5a3a3a' : '#3a4266'); pg.addColorStop(1, on ? '#c22b1a' : '#2a3152');
      ctx.fillStyle = pg; roundRect(ctx, cx - pw / 2 + 6, plateY, pw - 12, 6, 3); ctx.fill();
      ctx.restore();
      label(ctx, on ? `${S.P} W · ON` : s.cut ? 'cut out at 100 °C' : 'heater off', cx, benchY + 10, { size: 10, color: on ? C.amber : s.cut ? C.amber : C.muted });
      label(ctx, `${tag} · ${mat.name}`, cx, benchY + 25, { size: 11, color: col, weight: 600 });
      label(ctx, mat.mystery ? 'c = ?' : `c = ${mat.c} J kg⁻¹ K⁻¹`, cx, benchY + 39, { size: 10, color: C.muted });

      // sample size: same mass, so volume ∝ 1/ρ  (drawn side ∝ cube root of volume)
      const base = Math.min(pw * 0.6, (benchY - 120) * 0.72) / Math.cbrt(2);
      const side = clamp(base * Math.cbrt(S.m) * Math.cbrt(1000 / mat.rho), 14, 999);
      const heat = clamp((s.T - ROOM) / 75, 0, 1);
      let top, fx, fy, fw, fh;          // fx..: the "front face" where particles jiggle
      ctx.save();
      if (mat.kind === 'liquid') {
        const bw = side * 1.18, lh = side * side / bw, bh = Math.max(lh * 1.3, lh + 16);
        const bx = cx - bw / 2, by = plateY - bh;
        // liquid
        ctx.fillStyle = mat.col; ctx.globalAlpha = mat === MATS.mercury ? 0.9 : 0.55;
        ctx.fillRect(bx + 2, plateY - lh, bw - 4, lh - 2);
        ctx.globalAlpha = 1;
        if (mat === MATS.mercury) { ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.fillRect(bx + 4, plateY - lh + 2, bw - 8, 3); }
        if (heat > 0) { ctx.fillStyle = `rgba(255,90,60,${heat * 0.45})`; ctx.fillRect(bx + 2, plateY - lh, bw - 4, lh - 2); }
        // glass beaker
        ctx.strokeStyle = 'rgba(200,230,255,.7)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(bx - 3, by); ctx.lineTo(bx, by + 4); ctx.lineTo(bx, plateY - 2); ctx.lineTo(bx + bw, plateY - 2); ctx.lineTo(bx + bw, by + 4); ctx.lineTo(bx + bw + 3, by); ctx.stroke();
        top = plateY - lh; fx = bx; fy = plateY - lh; fw = bw; fh = lh;
      } else if (mat.kind === 'soil') {
        const tw = side * 1.5, th = side / 1.5;
        const tx = cx - tw / 2;
        ctx.fillStyle = '#3a3f55'; ctx.fillRect(tx - 4, plateY - th - 2, tw + 8, th + 2);
        ctx.fillStyle = mat.col; ctx.fillRect(tx, plateY - th, tw, th - 2);
        ctx.fillStyle = 'rgba(40,25,10,.55)';
        for (let i = 0; i < 40; i++) { const gx = tx + ((i * 37) % 100) / 100 * tw, gy = plateY - th + ((i * 53) % 100) / 100 * (th - 4); ctx.fillRect(gx, gy, 2, 2); }
        if (heat > 0) { ctx.fillStyle = `rgba(255,90,60,${heat * 0.45})`; ctx.fillRect(tx, plateY - th, tw, th - 2); }
        top = plateY - th; fx = tx; fy = plateY - th; fw = tw; fh = th;
      } else {
        const d = side * 0.28, x0 = cx - side / 2 - d / 2, y0 = plateY - side;
        const face = ctx.createLinearGradient(x0, y0, x0 + side, y0 + side);
        face.addColorStop(0, mat.col); face.addColorStop(1, shade(mat.col, -0.35));
        ctx.globalAlpha = mat.kind === 'glass' ? 0.42 : 1;
        // top face
        ctx.fillStyle = shade(mat.col, 0.18);
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + d, y0 - d); ctx.lineTo(x0 + side + d, y0 - d); ctx.lineTo(x0 + side, y0); ctx.closePath(); ctx.fill();
        // side face
        ctx.fillStyle = shade(mat.col, -0.45);
        ctx.beginPath(); ctx.moveTo(x0 + side, y0); ctx.lineTo(x0 + side + d, y0 - d); ctx.lineTo(x0 + side + d, plateY - d); ctx.lineTo(x0 + side, plateY); ctx.closePath(); ctx.fill();
        // front
        ctx.fillStyle = face; ctx.fillRect(x0, y0, side, side);
        ctx.globalAlpha = 1;
        if (mat.kind === 'glass') { ctx.strokeStyle = 'rgba(190,240,255,.8)'; ctx.lineWidth = 1.2; ctx.strokeRect(x0, y0, side, side); }
        if (mat.mystery) label(ctx, '?', x0 + side / 2, y0 + side / 2, { size: Math.max(14, side * 0.45), color: 'rgba(20,24,40,.55)', font: 'head', weight: 700 });
        if (heat > 0) { ctx.fillStyle = `rgba(255,90,60,${heat * 0.5})`; ctx.fillRect(x0, y0, side, side); }
        top = y0 - d; fx = x0; fy = y0; fw = side; fh = side;
      }
      // jiggling particles: faster + wider when hotter
      if (fw > 18 && fh > 12) {
        const amp = (L.reduceMotion ? 0 : 0.4 + heat * 3.2) * clamp(fw / 70, 0.5, 1.2);
        ctx.fillStyle = 'rgba(255,255,255,.55)';
        const nx = 3, ny = fh > 30 ? 3 : 2;
        for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
          const ph = (i * 3 + j) * 1.7, f = 8 + heat * 26;
          const px = fx + fw * (i + 0.5) / nx + Math.sin(S.anim * f + ph) * amp;
          const py = fy + fh * (j + 0.5) / ny + Math.cos(S.anim * (f + 3) + ph * 1.3) * amp;
          ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.restore();

      // heat flowing in (heating) or out (cooling)
      if (on && !L.reduceMotion) {
        for (let k = -1; k <= 1; k++) {
          const yy = plateY - 4 - ((S.anim * 30 + k * 7) % 12);
          ctx.strokeStyle = 'rgba(255,150,80,.55)'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(cx + k * pw * 0.28 - 4, yy + 3); ctx.lineTo(cx + k * pw * 0.28, yy); ctx.lineTo(cx + k * pw * 0.28 + 4, yy + 3); ctx.stroke();
        }
      }
      if (S.phase === 'cooling' && s.T > ROOM + 1 && !L.reduceMotion) {
        const a = clamp((s.T - ROOM) / 60, 0.1, 0.7);
        ctx.strokeStyle = `rgba(200,215,255,${a})`; ctx.lineWidth = 1.5;
        for (let k = -1; k <= 1; k++) {
          ctx.beginPath();
          for (let yy = 0; yy < 30; yy += 2) {
            const xx = cx + k * 16 + Math.sin(yy * 0.35 + S.anim * 4 + k) * 3;
            const y = top - 6 - yy - ((S.anim * 14) % 8);
            if (yy === 0) ctx.moveTo(xx, y); else ctx.lineTo(xx, y);
          }
          ctx.stroke();
        }
      }

      // thermometer
      const tx = fx + fw * 0.74;
      const bulbY = clamp(fy + fh * 0.62, fy + 9, plateY - 9);
      const stemTop = Math.max(34, top - 74);
      const yOf = T => bulbY - 8 - (bulbY - 8 - stemTop) * clamp(T / 110, 0, 1);
      ctx.save();
      ctx.strokeStyle = 'rgba(220,230,255,.75)'; ctx.lineWidth = 1.2; ctx.fillStyle = 'rgba(10,16,34,.85)';
      roundRect(ctx, tx - 5, stemTop - 4, 10, bulbY - stemTop + 4, 5); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(tx, bulbY, 7.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.red; ctx.shadowColor = C.red; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.arc(tx, bulbY, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillRect(tx - 2, yOf(s.T), 4, bulbY - yOf(s.T));
      ctx.restore();
      ctx.strokeStyle = 'rgba(220,230,255,.4)'; ctx.lineWidth = 1;
      [0, 25, 50, 75, 100].forEach(T => { ctx.beginPath(); ctx.moveTo(tx + 5, yOf(T)); ctx.lineTo(tx + 9, yOf(T)); ctx.stroke(); });
      label(ctx, `${s.T.toFixed(1)} °C`, tx, stemTop - 16, { size: 12, color: col, weight: 600, bg: C.bgLabel });
    }

    function shade(hex, k) {
      const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      const f = v => Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k));
      return `rgb(${f(r)},${f(g)},${f(b)})`;
    }

    function drawRig() {
      const { ctx, w, h } = RC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const benchY = h - 50;
      ctx.fillStyle = 'rgba(140,160,255,.08)'; ctx.fillRect(0, benchY, w, 2);
      drawStation(ctx, w * 0.27, benchY, w, h, S.A, MATS[S.a], C.cyan, 'A');
      drawStation(ctx, w * 0.73, benchY, w, h, S.B, MATS[S.b], C.pink, 'B');
      label(ctx, `m = ${S.m.toFixed(2)} kg each`, w / 2, 16, { size: 11, color: C.muted });
    }

    /* ---------- the graph ---------- */
    function drawGraph() {
      const { ctx, w, h } = GC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const ml = 40, mr = 12, mt = 34, mb = 30;
      const X = t => ml + (w - ml - mr) * t / S.tmax, Y = T => h - mb - (h - mb - mt) * (T - 20) / 90;
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
      for (let T = 20; T <= 110; T += 10) { ctx.moveTo(ml, Y(T)); ctx.lineTo(w - mr, Y(T)); }
      for (let k = 0; k <= 5; k++) { const x = X(S.tmax * k / 5); ctx.moveTo(x, mt); ctx.lineTo(x, h - mb); }
      ctx.stroke();
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(ml, mt - 4); ctx.lineTo(ml, h - mb); ctx.lineTo(w - mr, h - mb); ctx.stroke();
      for (let T = 20; T <= 110; T += 20) label(ctx, String(T), ml - 6, Y(T), { size: 10, align: 'right' });
      for (let k = 0; k <= 5; k++) label(ctx, String(Math.round(S.tmax * k / 5)), X(S.tmax * k / 5), h - mb + 12, { size: 10 });
      label(ctx, 'T (°C)', 8, mt - 16, { size: 10, align: 'left' });
      label(ctx, 't (s) →', w - mr - 2, h - mb - 10, { size: 10, align: 'right' });
      // cut-out line
      ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = 'rgba(255,198,92,.5)';
      ctx.beginPath(); ctx.moveTo(ml, Y(100)); ctx.lineTo(w - mr, Y(100)); ctx.stroke(); ctx.restore();
      label(ctx, 'cut-out 100 °C', w - mr - 4, Y(100) - 9, { size: 10, align: 'right', color: 'rgba(255,198,92,.8)' });
      if (S.tCoolStart != null) {
        ctx.save(); ctx.setLineDash([2, 4]); ctx.strokeStyle = 'rgba(169,139,255,.7)';
        ctx.beginPath(); ctx.moveTo(X(S.tCoolStart), mt); ctx.lineTo(X(S.tCoolStart), h - mb); ctx.stroke(); ctx.restore();
        label(ctx, 'heaters off', X(S.tCoolStart) + 4, mt + 8, { size: 10, align: 'left', color: C.violet });
      }
      // curves
      [['a', C.cyan, S.A], ['b', C.pink, S.B]].forEach(([k, col, s]) => {
        ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.2; ctx.shadowColor = col; ctx.shadowBlur = 8; ctx.lineJoin = 'round';
        ctx.beginPath();
        S.hist.forEach((p, i) => { const x = X(p.t), y = Y(p[k]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
        ctx.lineTo(X(S.t), Y(s.T)); ctx.stroke();
        ctx.fillStyle = col; ctx.beginPath(); ctx.arc(X(S.t), Y(s.T), 4, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
      // legend
      label(ctx, `● B ${MATS[S.b].name}`, w - mr, mt - 16, { size: 10, align: 'right', color: C.pink });
      ctx.save(); ctx.font = '500 10px "JetBrains Mono", monospace';
      const bw = ctx.measureText(`● B ${MATS[S.b].name}`).width; ctx.restore();
      label(ctx, `● A ${MATS[S.a].name}`, w - mr - bw - 14, mt - 16, { size: 10, align: 'right', color: C.cyan });
    }

    /* ---------- readouts, status, challenges ---------- */
    function cOf(s) {
      const dT = (S.phase === 'cooling' ? s.Theat : s.T) - ROOM;
      return dT > 0.3 ? s.Q / (S.m * dT) : null;
    }
    function update(note) {
      const mA = MATS[S.a], mB = MATS[S.b];
      ro.m.textContent = `${S.m.toFixed(2)} kg`;
      ro.p.textContent = `${S.P} W = ${S.P} J/s`;
      ro.t.textContent = fmtT(S.t);
      ro.qa.textContent = fmtQ(S.A.Q); ro.qb.textContent = fmtQ(S.B.Q);
      ro.da.textContent = `${(S.A.T - ROOM).toFixed(1)} °C`; ro.db.textContent = `${(S.B.T - ROOM).toFixed(1)} °C`;
      [[S.A, mA, ro.ca], [S.B, mB, ro.cb]].forEach(([s, mat, el]) => {
        const c = cOf(s);
        el.textContent = mat.mystery ? (c ? '? work it out' : '?') : c ? `${Math.round(c)}` : '–';
      });
      goBtn.textContent = S.phase === 'heating' ? '⏸ Pause' : S.phase === 'paused' ? '▶ Resume heating' : '▶ Switch heaters on';
      goBtn.disabled = S.phase === 'hot' || S.phase === 'cooling';
      coolBtn.disabled = S.phase === 'cooling' || (S.A.T < ROOM + 3 && S.B.T < ROOM + 3);
      myRow.hidden = !(mA.mystery || mB.mystery);

      const nm = (mat) => mat.mystery ? 'the mystery metal' : mat.name.toLowerCase();
      if (note) setStatus(status, 'info', note);
      else if (S.phase === 'idle') {
        setStatus(status, 'info', S.a === S.b
          ? `<b>Both samples are ${nm(mA)}.</b> They'll warm up identically. Pick two different materials to see a race.`
          : `<b>A fair test:</b> same mass (${S.m.toFixed(2)} kg), same heater (${S.P} J every second), same starting temperature (25 °C). Only the material is different. Which one do you think reaches 100 °C first?`);
      } else if (S.phase === 'heating' || S.phase === 'paused') {
        const dA = S.A.T - ROOM, dB = S.B.T - ROOM;
        if (mA.mystery || mB.mystery) setStatus(status, 'info', `<b>Same heat in, different temperature rise.</b> Read Q and ΔT for the mystery metal and use c = Q / (mΔT) with m = ${S.m.toFixed(2)} kg.`);
        else if (S.a === S.b) setStatus(status, 'info', `<b>Identical samples, identical curves:</b> same Q, same m, same c, so the same ΔT.`);
        else {
          const fast = mA.c < mB.c ? mA : mB, slow = fast === mA ? mB : mA, r = slow.c / fast.c;
          setStatus(status, 'info', `<b>Both have received the same heat so far</b>${S.A.cut || S.B.cut ? ' (until a cut-out)' : ''}, yet ΔT is ${dA.toFixed(1)} °C for A and ${dB.toFixed(1)} °C for B. ${fast.name} warms about <b>${r.toFixed(1)}×</b> faster because its specific heat is ${r.toFixed(1)}× smaller (${fast.c} vs ${slow.c} J kg⁻¹ K⁻¹).`);
        }
      } else if (S.phase === 'hot') {
        setStatus(status, 'good', `<b>Both heaters have cut out at 100 °C.</b> To make the same 75 °C rise, A took <b>${fmtQ(S.A.Q)}</b> and B took <b>${fmtQ(S.B.Q)}</b>. That's Q = mcΔT: a larger c means more heat for the same ΔT. Now press <b>❄</b> to see which one cools faster.`);
      } else if (S.phase === 'cooling') {
        const fast = mA.c < mB.c ? 'A' : 'B';
        setStatus(status, 'edge', S.a === S.b ? `<b>Cooling.</b> Identical samples cool identically.`
          : `<b>Cooling.</b> Both lose heat to the air in the same way, but sample <b>${fast}</b> (lower c) drops much faster: each degree of cooling only needs it to lose a little heat. The high-c sample “holds on” to its heat, just like a cup of tea.`);
      }

      // challenges
      const pair = [S.a, S.b];
      const cuSample = S.a === 'copper' ? S.A : S.b === 'copper' ? S.B : null;
      if (cuSample && cuSample.cut && pair.includes('water'))
        complete('l1-race-cu', { el: $('[data-check="l1-race-cu"]', root), msg: `Copper wins! Water only reached ${(S.a === 'water' ? S.A : S.B).T.toFixed(0)} °C` });
      if (Math.abs(S.m - 0.5) < 1e-6) both().forEach(([s, mat]) => {
        if (mat === MATS.aluminium && s.cut) complete('l1-race-ex102', { el: $('[data-check="l1-race-ex102"]', root), msg: `Example 10.2: ${fmtQ(s.Q)} with c = 910` });
      });
      if (S.phase === 'cooling' && S.tCool >= 120 && pair.includes('water')) {
        const other = MATS[S.a === 'water' ? S.b : S.a];
        if (other.kind === 'metal') complete('l1-race-cool', { el: $('[data-check="l1-race-cool"]', root), msg: 'Water holds on to its heat!' });
      }
      drawRig(); drawGraph();
    }

    // controls
    selA.addEventListener('change', () => { S.a = selA.value; reset(); });
    selB.addEventListener('change', () => { S.b = selB.value; reset(); });
    bindRange($('#race-m'), v => { S.m = v; reset(); });
    bindRange($('#race-p'), v => { S.P = v; update(); });
    goBtn.addEventListener('click', () => {
      if (S.phase === 'heating') S.phase = 'paused';
      else if (S.phase === 'idle' || S.phase === 'paused') S.phase = 'heating';
      update();
    });
    coolBtn.addEventListener('click', () => {
      both().forEach(([s]) => { s.on = false; });
      S.phase = 'cooling'; S.tCoolStart = S.t; update();
    });
    $('#race-reset').addEventListener('click', () => reset());
    $$('#race-speed .chip').forEach(b => b.addEventListener('click', () => { press($('#race-speed'), b); S.speed = +b.dataset.speed; }));

    // mystery metal
    function checkMystery() {
      const v = parseFloat(String(myIn.value).replace(/[^\d.]/g, ''));
      const s = S.a === 'mystery' ? S.A : S.B;
      if (!(v > 0)) { myFb.className = 'fb no'; myFb.textContent = 'Type a number first.'; return; }
      if (s.Q === 0) { myFb.className = 'fb no'; myFb.textContent = 'Heat the mystery metal first, then read Q and ΔT.'; return; }
      const err = Math.abs(v - MATS.mystery.c) / MATS.mystery.c;
      if (err <= 0.08) {
        myFb.className = 'fb ok';
        myFb.innerHTML = `Yes! c ≈ ${MATS.mystery.c} J kg⁻¹ K⁻¹. Table 10.1 says that's <b>${MATS[secret].name.toLowerCase()}</b>.`;
        complete('l1-race-mystery', { el: $('[data-check="l1-race-mystery"]', root), msg: `Unmasked: ${MATS[secret].name}!` });
      } else if (err <= 0.3) { myFb.className = 'fb no'; myFb.textContent = 'Close, but not quite. Did you use ΔT = T − 25 °C, and m in kg?'; }
      else { myFb.className = 'fb no'; myFb.textContent = 'Not quite. Use c = Q / (m × ΔT), with Q in joules, m in kg and ΔT in °C.'; }
    }
    $('#race-check').addEventListener('click', checkMystery);
    myIn.addEventListener('keydown', e => { if (e.key === 'Enter') checkMystery(); });

    // Table 10.1 rows load sample B
    $$('#table-10-1 tr[data-mat]').forEach(tr => tr.addEventListener('click', () => {
      const k = tr.dataset.mat; if (!MATS[k]) return;
      if (k === S.b) { S.a = k === 'water' ? 'copper' : 'water'; selA.value = S.a; }
      S.b = k; selB.value = k; reset(`<b>${MATS[k].name} loaded as sample B.</b> Press ▶ to race it against ${MATS[S.a].name.toLowerCase()}.`);
      root.scrollIntoView({ behavior: L.reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }));
    // "Try it in Lab 1" from Example 10.2
    $$('[data-load-ex102]').forEach(b => b.addEventListener('click', () => {
      S.a = 'aluminium'; S.b = 'water'; selA.value = 'aluminium'; selB.value = 'water';
      S.m = 0.5; $('#race-m').value = 0.5; $('#race-m').dispatchEvent(new Event('input'));
      reset('<b>Example 10.2 loaded:</b> 0.5 kg of aluminium (A) next to 0.5 kg of water (B). Press ▶ and read Q when aluminium cuts out at 100 °C. Table 10.1 gives c = 910 J kg⁻¹ K⁻¹, so expect ≈ 34.1 kJ; the book rounds c to 900 and gets 33.75 kJ.');
    }));

    animateWhileVisible(root, (dt) => {
      S.anim += dt;
      const moved = step(dt * S.speed);
      if (moved) update(); else drawRig();
    });
    ready = true; reset();
    redraws.push(() => { drawRig(); drawGraph(); });
  })();

  /* =====================================================
     LAB 2 · Two cities, one Sun
     ===================================================== */
  (function citiesLab() {
    const root = $('#lab-cities'); if (!root) return;
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const W = 2 * Math.PI / 12;
    const SUN_PEAK = 5.4;                 // month index (mid-June) when the sunshine is strongest
    // first-order response of a surface to a yearly sunshine cycle:
    // bigger heat capacity → smaller swing (and a small delay)
    function region(cEff, mean) {
      const wt = 0.255 * cEff / 800;
      return { A: 22.7 / Math.sqrt(1 + wt * wt), lag: 0.45 * Math.atan(wt), mean };
    }
    const S = { m: 3, noSea: false, playing: false, t: 0 };
    const inland = region(800, 25);
    const coast = () => S.noSea ? region(800, 25.5) : region(4190 * 2.5, 25.5);
    const temp = (r, m) => r.mean + r.A * Math.cos(W * (m - SUN_PEAK) - r.lag);
    const range = r => [r.mean - r.A, r.mean + r.A];
    let ready = false;
    const SC = fitCanvas($('#city-scene'), () => ready && drawScene());
    const GC = fitCanvas($('#city-graph'), () => ready && drawGraph());
    const status = $('#city-status');
    const ro = { m: $('#city-m-out'), tc: $('#city-tc'), ti: $('#city-ti'), rc: $('#city-rc'), ri: $('#city-ri') };
    const mInput = $('#city-m'), playBtn = $('#city-play');

    function house(ctx, x, y, w, h, col) { ctx.fillStyle = col; ctx.fillRect(x, y - h, w, h); }
    function windows(ctx, x, y, w, h, lit) {
      ctx.fillStyle = lit;
      for (let yy = y - h + 6; yy < y - 6; yy += 9) for (let xx = x + 4; xx < x + w - 5; xx += 8) ctx.fillRect(xx, yy, 3, 4);
    }

    function drawScene() {
      const { ctx, w, h } = SC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const m = S.m, season = Math.cos(W * (m - SUN_PEAK));          // +1 midsummer, −1 midwinter
      const cR = coast(), Tc = temp(cR, m), Ti = temp(inland, m);
      const yG = h * 0.7, xSea = w * 0.34;
      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, yG);
      sky.addColorStop(0, '#081226'); sky.addColorStop(1, season > 0 ? `rgba(${60 + 40 * season},${50 + 10 * season},${70},1)` : `rgba(40,${60 - 15 * season},${95 - 25 * season},1)`);
      ctx.fillStyle = sky; ctx.fillRect(0, 0, w, yG);
      // sun: higher and stronger in summer
      const sx = w * 0.6, sy = h * (0.36 - 0.2 * season), sr = Math.min(w, h) * 0.05;
      const sg = ctx.createRadialGradient(sx, sy, sr * 0.3, sx, sy, sr * 4);
      sg.addColorStop(0, 'rgba(255,230,160,.9)'); sg.addColorStop(.25, 'rgba(255,198,92,.35)'); sg.addColorStop(1, 'rgba(255,198,92,0)');
      ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(sx, sy, sr * 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ffe6a6'; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
      // sunshine arrows to both sides
      ctx.save(); ctx.strokeStyle = 'rgba(255,214,120,.25)'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 6]);
      [w * 0.17, w * 0.42, w * 0.79].forEach(x => { ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(x, yG - 4); ctx.stroke(); });
      ctx.restore();

      // left: sea (or dry soil)
      if (!S.noSea) {
        const sea = ctx.createLinearGradient(0, yG - 6, 0, h);
        sea.addColorStop(0, tempCol(Tc, 1, 5, 45).replace(/rgba\((\d+),(\d+),(\d+),1\)/, (q, r, g, b) => `rgb(${Math.round(r * .35)},${Math.round(g * .55 + 40)},${Math.round(b * .5 + 110)})`));
        sea.addColorStop(1, '#06223f');
        ctx.fillStyle = sea; ctx.fillRect(0, yG - 6, xSea, h - yG + 6);
        ctx.strokeStyle = 'rgba(180,220,255,.35)'; ctx.lineWidth = 1.2;
        for (let r = 0; r < 4; r++) {
          ctx.beginPath();
          for (let x = 0; x <= xSea; x += 6) { const y = yG + 4 + r * (h - yG) / 4.5 + Math.sin(x * 0.06 + S.t * 1.5 + r) * 2; if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
          ctx.stroke();
        }
        label(ctx, w < 560 ? 'Sea · c = 4190' : 'Sea · c ≈ 4190 J kg⁻¹ K⁻¹', xSea / 2, h - 12, { size: 10, color: '#9fd8ff' });
      } else {
        ctx.fillStyle = groundCol(Tc); ctx.fillRect(0, yG - 6, xSea, h - yG + 6);
        label(ctx, w < 560 ? 'Soil · c = 800' : 'Dry soil where the sea was · c = 800', xSea / 2, h - 12, { size: 10, color: '#e8c9a8' });
      }
      // land
      ctx.fillStyle = groundCol(Tc); ctx.fillRect(xSea, yG - 6, w * 0.24, h - yG + 6);
      ctx.fillStyle = groundCol(Ti); ctx.fillRect(xSea + w * 0.24, yG - 6, w - xSea - w * 0.24, h - yG + 6);
      label(ctx, w < 560 ? 'Soil · c = 800' : 'Dry soil · c = 800 J kg⁻¹ K⁻¹', w * 0.8, h - 12, { size: 10, color: '#e8c9a8' });

      // coastal city: tall buildings
      const cx0 = xSea + w * 0.02, bw = Math.max(10, w * 0.024);
      [[0, 0.22], [1.1, 0.34], [2.2, 0.27], [3.3, 0.4], [4.4, 0.2], [5.5, 0.3]].forEach(([k, f]) => {
        const x = cx0 + k * bw * 1.05, hh = f * h * 0.55;
        house(ctx, x, yG - 6, bw, hh, '#2a3358'); windows(ctx, x, yG - 6, bw, hh, 'rgba(255,214,120,.35)');
      });
      // inland city: low houses + a dome
      const ix0 = w * 0.69, hw = Math.max(12, w * 0.03);
      [[0, 0.07], [1.15, 0.1], [2.3, 0.06], [3.45, 0.09], [4.6, 0.07]].forEach(([k, f]) => {
        const x = ix0 + k * hw * 1.1, hh = f * h;
        house(ctx, x, yG - 6, hw, hh, '#3a3350'); windows(ctx, x, yG - 6, hw, hh, 'rgba(255,214,120,.3)');
      });
      ctx.fillStyle = '#3a3350'; ctx.beginPath(); ctx.arc(ix0 + hw * 2.85, yG - 6 - h * 0.1, hw * 0.9, Math.PI, 0); ctx.fill();

      // heat shimmer / frost
      [[cx0 + bw * 3, Tc], [ix0 + hw * 2.8, Ti]].forEach(([x, T]) => {
        if (T > 38 && !L.reduceMotion) {
          ctx.strokeStyle = `rgba(255,150,90,${clamp((T - 38) / 10, 0.15, 0.6)})`; ctx.lineWidth = 1.5;
          for (let k = -1; k <= 1; k++) {
            ctx.beginPath();
            for (let yy = 0; yy < h * 0.18; yy += 3) { const xx = x + k * 18 + Math.sin(yy * 0.25 + S.t * 5 + k) * 3; const y = yG - h * 0.2 - yy; if (yy) ctx.lineTo(xx, y); else ctx.moveTo(xx, y); }
            ctx.stroke();
          }
        }
        if (T < 9) {
          const a = clamp((9 - T) / 6, 0.2, 0.9);
          for (let k = 0; k < 7; k++) label(ctx, '❄', x - 40 + k * 14, yG - h * 0.32 + ((k * 23 + S.t * 18) % (h * 0.24)), { size: 11, color: `rgba(200,230,255,${a})`, font: 'head' });
        }
      });

      // thermometer pills
      [[cx0 + bw * 3, Tc, 'Coastal city'], [ix0 + hw * 2.8, Ti, 'Inland city']].forEach(([x, T, nm]) => {
        const y = Math.max(28, yG - h * 0.5);
        const pw = 92, ph = 40;
        ctx.save(); ctx.fillStyle = 'rgba(5,9,21,.85)'; ctx.strokeStyle = tempCol(T, 0.9, 5, 45); ctx.lineWidth = 1.5;
        roundRect(ctx, x - pw / 2, y - ph / 2, pw, ph, 10); ctx.fill(); ctx.stroke(); ctx.restore();
        label(ctx, nm, x, y - 9, { size: 10, color: C.muted });
        label(ctx, `${T.toFixed(1)} °C`, x, y + 8, { size: 15, color: tempCol(T, 1, 5, 45), weight: 600 });
      });
      label(ctx, MONTHS[Math.floor(m)], 12, 18, { size: 15, color: C.text, align: 'left', font: 'head', weight: 600 });
      label(ctx, season > 0.5 ? 'summer' : season < -0.5 ? 'winter' : season > 0 ? 'warming up' : 'cooling down', 12, 38, { size: 11, color: C.muted, align: 'left' });
    }
    function groundCol(T) {
      const f = clamp((T - 0) / 48, 0, 1);
      const r = Math.round(70 + 130 * f), g = Math.round(78 + 40 * f), b = Math.round(100 - 50 * f);
      return `rgb(${r},${g},${b})`;
    }

    function drawGraph() {
      const { ctx, w, h } = GC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const ml = 38, mr = 12, mt = 30, mb = 24;
      const X = m => ml + (w - ml - mr) * m / 12, Y = T => h - mb - (h - mb - mt) * T / 50;
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
      for (let T = 0; T <= 50; T += 10) { ctx.moveTo(ml, Y(T)); ctx.lineTo(w - mr, Y(T)); }
      ctx.stroke();
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(ml, mt - 4); ctx.lineTo(ml, h - mb); ctx.lineTo(w - mr, h - mb); ctx.stroke();
      for (let T = 0; T <= 50; T += 10) label(ctx, `${T}`, ml - 6, Y(T), { size: 10, align: 'right' });
      MONTHS.forEach((n, i) => label(ctx, w < 520 ? n[0] : n.slice(0, 3), X(i + 0.5), h - mb + 12, { size: 10 }));
      label(ctx, '°C', 8, mt - 14, { size: 10, align: 'left' });
      const curve = (r, col, dash, width = 2.2) => {
        ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash); else { ctx.shadowColor = col; ctx.shadowBlur = 8; }
        ctx.beginPath();
        for (let m = 0; m <= 12.001; m += 0.1) { const x = X(m), y = Y(temp(r, m)); if (m) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.stroke(); ctx.restore();
      };
      if (S.noSea) curve(region(4190 * 2.5, 25.5), 'rgba(95,227,255,.45)', [5, 5], 1.5);
      curve(inland, C.amber);
      curve(coast(), C.cyan);
      // now marker
      ctx.save(); ctx.strokeStyle = 'rgba(233,237,255,.5)'; ctx.setLineDash([3, 4]);
      ctx.beginPath(); ctx.moveTo(X(S.m), mt - 4); ctx.lineTo(X(S.m), h - mb); ctx.stroke(); ctx.restore();
      [[inland, C.amber], [coast(), C.cyan]].forEach(([r, col]) => {
        ctx.fillStyle = col; ctx.beginPath(); ctx.arc(X(S.m), Y(temp(r, S.m)), 4.5, 0, Math.PI * 2); ctx.fill();
      });
      label(ctx, '● Inland city', ml + 26, mt - 14, { size: 10, align: 'left', color: C.amber });
      label(ctx, S.noSea ? '● Coastal city (no sea)' : '● Coastal city', ml + 130, mt - 14, { size: 10, align: 'left', color: C.cyan });
      if (S.noSea && w > 560) label(ctx, '- - with the sea', ml + 310, mt - 14, { size: 10, align: 'left', color: 'rgba(95,227,255,.6)' });
    }

    function update() {
      const cR = coast(), Tc = temp(cR, S.m), Ti = temp(inland, S.m);
      const [cl, ch] = range(cR), [il, ih] = range(inland);
      ro.m.textContent = MONTHS[Math.floor(S.m)];
      ro.tc.textContent = `${Tc.toFixed(1)} °C`; ro.ti.textContent = `${Ti.toFixed(1)} °C`;
      ro.rc.textContent = `${cl.toFixed(0)} → ${ch.toFixed(0)} °C`; ro.ri.textContent = `${il.toFixed(0)} → ${ih.toFixed(0)} °C`;
      ro.tc.className = 'ro-v ' + (S.noSea ? 'bad' : 'good');
      if (S.noSea) setStatus(status, 'bad', `<b>No sea, no shield.</b> Surrounded by dry soil (c = 800), the coastal city now swings from ${cl.toFixed(0)} °C to ${ch.toFixed(0)} °C, just like the inland one. It was water's large specific heat that kept it mild.`);
      else if (Ti - Tc > 4) setStatus(status, 'edge', `<b>${MONTHS[Math.floor(S.m)]}:</b> the land's low specific heat lets it heat up fast, to ${Ti.toFixed(0)} °C inland. The sea absorbs the same sunshine with only a small temperature rise and stores the heat, so the coast stays at ${Tc.toFixed(0)} °C.`);
      else if (Tc - Ti > 4) setStatus(status, 'info', `<b>${MONTHS[Math.floor(S.m)]}:</b> the land loses its heat quickly and drops to ${Ti.toFixed(0)} °C. The sea now releases the heat it stored in summer, keeping the coast at a mild ${Tc.toFixed(0)} °C.`);
      else setStatus(status, 'info', `<b>${MONTHS[Math.floor(S.m)]}:</b> between seasons, both cities are similar. Keep scrolling through the year and watch the gap open up.`);

      if (!S.noSea && Ti >= ih - 0.25) complete('l1-city-hot', { el: $('[data-check="l1-city-hot"]', root), msg: `Inland ${Ti.toFixed(0)} °C, coast only ${Tc.toFixed(0)} °C` });
      if (!S.noSea && Ti <= il + 0.25) complete('l1-city-cold', { el: $('[data-check="l1-city-cold"]', root), msg: 'In winter the coast is the warmer one!' });
      if (S.noSea) complete('l1-city-nosea', { el: $('[data-check="l1-city-nosea"]', root), msg: 'No sea, extreme climate' });
      drawScene(); drawGraph();
    }

    const mR = bindRange(mInput, v => { S.m = v; update(); });
    $('#city-nosea').addEventListener('change', e => { S.noSea = e.target.checked; update(); });
    playBtn.addEventListener('click', () => { S.playing = !S.playing; playBtn.textContent = S.playing ? '⏸ Pause' : '▶ Play the year'; });
    animateWhileVisible(root, (dt) => {
      S.t += dt;
      if (S.playing) { S.m = (S.m + dt * 1.1) % 12; mR.set(Math.min(S.m, 11.95)); update(); }
      else drawScene();
    });
    ready = true; update();
    redraws.push(update);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
