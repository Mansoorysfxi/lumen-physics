/* =========================================================
   Class 10 · Unit 10 · Lesson 3 · Thermal Conduction — labs
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

  function tempCol(T, a = 1, lo = 20, hi = 350) {
    const f = clamp((T - lo) / (hi - lo), 0, 1);
    const stops = [[0, [75, 130, 245]], [0.28, [169, 139, 255]], [0.58, [255, 105, 115]], [0.85, [255, 198, 92]], [1, [255, 245, 210]]];
    let k = 0; while (k < stops.length - 2 && f > stops[k + 1][0]) k++;
    const [t0, c0] = stops[k], [t1, c1] = stops[k + 1], g = (f - t0) / (t1 - t0);
    return `rgba(${c0.map((v, i) => Math.round(v + (c1[i] - v) * g)).join(',')},${a})`;
  }

  /* =====================================================
     LAB 1 · Atom chain (lattice vibrations vs free electrons)
     ===================================================== */
  (function atomLab() {
    const root = $('#lab-atoms'); if (!root) return;
    const N = 16;
    const S = {
      mode: 'compare',        // nonmetal | metal | compare
      Tburn: 350,
      bonds: true,
      on: false,
      t: 0,
      tLit: 0,
      tNonmetal: 0,
      tCompare: 0,
      anim: 0,
      metalT: new Float32Array(N).fill(ROOM),
      nonT: new Float32Array(N).fill(ROOM),
      electrons: Array.from({ length: 34 }, (_, i) => ({
        x: (i + 0.5) / 34,
        y: (Math.sin(i * 19.3) * 0.36),
        vx: (i % 2 ? 1 : -1) * (0.28 + ((i * 7) % 10) * 0.03),
        vy: Math.cos(i * 11.7) * 0.25,
        energy: ROOM
      }))
    };

    let ready = false;
    const CV = fitCanvas($('#atom-canvas'), () => ready && draw());
    const status = $('#atom-status'), goBtn = $('#atom-go');
    const ro = { time: $('#atom-time'), k1: $('#atom-k1'), v1: $('#atom-v1'), k2: $('#atom-k2'), v2: $('#atom-v2'), elec: $('#atom-elec') };

    function reset() {
      S.on = false; S.t = 0; S.tLit = 0; S.tNonmetal = 0; S.tCompare = 0;
      S.metalT.fill(ROOM); S.nonT.fill(ROOM);
      S.electrons.forEach((e, i) => {
        e.x = (i + 0.5) / S.electrons.length;
        e.energy = ROOM;
      });
      update();
    }

    function diffuseChain(arr, alphaLat, dt) {
      const next = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        let d = 0;
        if (i === 0 && S.on) {
          // coupled directly to hot burner at atom 0
          d += 2.6 * (S.Tburn - arr[0]);
        }
        if (i > 0) d += alphaLat * (arr[i - 1] - arr[i]);
        if (i < N - 1) d += alphaLat * (arr[i + 1] - arr[i]);
        // gentle radiative/air loss to room temperature
        d -= 0.015 * (arr[i] - ROOM);
        next[i] = clamp(arr[i] + d * dt, ROOM, S.Tburn);
      }
      arr.set(next);
    }

    function step(dt) {
      if (!S.on && S.metalT[0] <= ROOM + 0.3 && S.nonT[0] <= ROOM + 0.3) return false;
      const sub = 4, h = dt / sub;
      for (let s = 0; s < sub; s++) {
        // Pure lattice conduction is slow and local
        diffuseChain(S.nonT, 0.42, h);
        diffuseChain(S.metalT, 0.52, h);

        // Mobile free electrons carry thermal energy rapidly across the metal lattice
        S.electrons.forEach(e => {
          const speedScale = 0.7 + 1.5 * clamp((e.energy - ROOM) / 300, 0, 1);
          e.x += e.vx * speedScale * h;
          e.y += e.vy * h;
          if (e.x < 0.01) { e.x = 0.01; e.vx = Math.abs(e.vx); }
          if (e.x > 0.99) { e.x = 0.99; e.vx = -Math.abs(e.vx); }
          if (e.y < -0.42) { e.y = -0.42; e.vy = Math.abs(e.vy); }
          if (e.y > 0.42) { e.y = 0.42; e.vy = -Math.abs(e.vy); }

          const idx = clamp(Math.round(e.x * (N - 1)), 0, N - 1);
          // Exchange thermal energy between electron and local lattice ion
          const exchange = 0.72 * h * (e.energy - S.metalT[idx]);
          e.energy -= exchange;
          S.metalT[idx] = clamp(S.metalT[idx] + exchange * 0.75, ROOM, S.Tburn);
          if (S.on && e.x < 0.1) {
            e.energy += (S.Tburn - e.energy) * Math.min(1, 1.8 * h);
          }
        });
      }
      if (S.on) {
        S.t += dt;
        S.tLit += dt;
        if (S.mode === 'nonmetal') S.tNonmetal += dt;
        if (S.mode === 'compare') S.tCompare += dt;
      }
      return true;
    }

    function drawBar(ctx, x0, yMid, barW, barH, temps, hasElectrons, tag, showCurve) {
      // Bar casing
      ctx.save();
      ctx.fillStyle = hasElectrons ? 'rgba(217,130,74,.10)' : 'rgba(139,149,187,.09)';
      ctx.strokeStyle = hasElectrons ? 'rgba(217,130,74,.45)' : 'rgba(139,149,187,.35)';
      ctx.lineWidth = 1.5;
      roundRect(ctx, x0 - 14, yMid - barH / 2, barW + 28, barH, 10);
      ctx.fill(); ctx.stroke();
      ctx.restore();

      const dx = barW / (N - 1);
      const pts = [];
      for (let i = 0; i < N; i++) {
        const T = temps[i];
        const heat = clamp((T - ROOM) / 320, 0, 1);
        const amp = L.reduceMotion ? 0 : (0.7 + heat * 6.2);
        const f = 9 + heat * 26;
        const ax = x0 + i * dx + Math.sin(S.anim * f + i * 1.7) * amp;
        const ay = yMid + Math.cos(S.anim * (f + 3) + i * 2.3) * amp;
        pts.push({ x: ax, y: ay, T, heat });
      }

      // Inter-atomic spring bonds
      if (S.bonds) {
        ctx.save();
        ctx.lineWidth = 1.6;
        for (let i = 0; i < N - 1; i++) {
          const a = pts[i], b = pts[i + 1];
          ctx.strokeStyle = tempCol((a.T + b.T) / 2, 0.35, 25, 350);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        ctx.restore();
      }

      // Atoms (2 rows visual feel around centerline, using primary 16 along center)
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const r = clamp(barW / 54, 4.5, 9.5);
        if (p.heat > 0.08) {
          ctx.save();
          ctx.fillStyle = tempCol(p.T, 0.16 + p.heat * 0.2, 25, 350);
          ctx.beginPath(); ctx.arc(p.x, p.y, r * 2.2, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
        ctx.fillStyle = tempCol(p.T, 0.95, 25, 350);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        if (hasElectrons) {
          // subtle + charge on metal lattice ions
          ctx.fillStyle = 'rgba(5,9,21,.75)';
          ctx.font = `700 ${Math.round(r * 1.1)}px "Figtree", system-ui, sans-serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText('+', p.x, p.y + 0.5);
        }
      }

      // Free electrons zipping across the metal lattice
      if (hasElectrons) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        S.electrons.forEach(e => {
          const ex = x0 + e.x * barW;
          const ey = yMid + e.y * (barH * 0.65);
          const hot = clamp((e.energy - ROOM) / 250, 0, 1);
          const col = hot > 0.3 ? `rgba(255,215,120,${0.6 + hot * 0.4})` : 'rgba(95,227,255,0.85)';
          ctx.fillStyle = col;
          ctx.shadowColor = col; ctx.shadowBlur = 7;
          ctx.beginPath(); ctx.arc(ex, ey, 2.3 + hot * 1.1, 0, Math.PI * 2); ctx.fill();
        });
        ctx.restore();
      }

      // Labels & live end temperatures
      label(ctx, tag, x0 - 10, yMid - barH / 2 - 12, { size: 11, color: hasElectrons ? C.amber : C.cyan, align: 'left', weight: 600 });
      label(ctx, `Hot: ${temps[0].toFixed(0)} °C`, x0 + 6, yMid + barH / 2 + 12, { size: 10, color: tempCol(temps[0], 1, 25, 350), align: 'left' });
      label(ctx, `Far end: ${temps[N - 1].toFixed(1)} °C`, x0 + barW - 4, yMid + barH / 2 + 12, { size: 10, color: temps[N - 1] > 45 ? C.green : C.muted, align: 'right', weight: 600 });

      // Optional live temperature curve overlay
      if (showCurve) {
        ctx.save();
        ctx.strokeStyle = hasElectrons ? 'rgba(255,198,92,.75)' : 'rgba(95,227,255,.75)';
        ctx.lineWidth = 1.6; ctx.setLineDash([4, 3]);
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const px = x0 + i * dx;
          const py = yMid + barH / 2 - 4 - clamp((temps[i] - ROOM) / (S.Tburn - ROOM + 1), 0, 1) * (barH - 8);
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawFlame(ctx, cx, yTop) {
      if (!S.on) return;
      const flicker = L.reduceMotion ? 0 : Math.sin(S.anim * 22) * 3;
      const h = 24 + clamp((S.Tburn - 100) / 350, 0, 1) * 14;
      const g = ctx.createRadialGradient(cx, yTop + h * 0.55, 2, cx, yTop + h * 0.55, h);
      g.addColorStop(0, 'rgba(255,245,200,.95)');
      g.addColorStop(0.45, 'rgba(255,130,60,.8)');
      g.addColorStop(1, 'rgba(255,80,40,0)');
      ctx.save();
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(cx - 11, yTop + h);
      ctx.quadraticCurveTo(cx + flicker * 0.6, yTop - 4, cx + 11, yTop + h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      const { ctx, w, h } = CV; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const x0 = 56, barW = Math.max(120, w - 90);
      if (S.mode === 'compare') {
        const barH = clamp(h * 0.25, 44, 72);
        const y1 = h * 0.30, y2 = h * 0.72;
        drawBar(ctx, x0, y1, barW, barH, S.nonT, false, 'Non-metal (wood / glass) · lattice vibrations only', S.bonds);
        drawBar(ctx, x0, y2, barW, barH, S.metalT, true, 'Metal (copper) · lattice + free electrons', S.bonds);
        drawFlame(ctx, x0, y1 + barH / 2 - 2);
        drawFlame(ctx, x0, y2 + barH / 2 - 2);
      } else {
        const isMetal = S.mode === 'metal';
        const barH = clamp(h * 0.38, 60, 104);
        const yMid = h * 0.46;
        drawBar(ctx, x0, yMid, barW, barH, isMetal ? S.metalT : S.nonT, isMetal,
          isMetal ? 'Metal (copper) · lattice vibrations + free electrons' : 'Non-metal (glass / wood) · lattice vibrations only', S.bonds);
        drawFlame(ctx, x0, yMid + barH / 2 - 2);
      }
      if (!S.on && S.t === 0) {
        label(ctx, 'Click "Light burner" below to heat the left end', w / 2, h - 14, { size: 11, color: C.muted });
      }
    }

    function update() {
      $('#atom-t-out').textContent = `${S.Tburn} °C`;
      ro.time.textContent = `${S.t.toFixed(1)} s`;
      if (S.mode === 'compare') {
        ro.k1.textContent = 'Metal far end'; ro.v1.textContent = `${S.metalT[N - 1].toFixed(1)} °C`;
        ro.k2.textContent = 'Non-metal far end'; ro.v2.textContent = `${S.nonT[N - 1].toFixed(1)} °C`;
        ro.elec.textContent = 'Metal only';
      } else if (S.mode === 'metal') {
        ro.k1.textContent = 'Hot end'; ro.v1.textContent = `${S.metalT[0].toFixed(0)} °C`;
        ro.k2.textContent = 'Far end'; ro.v2.textContent = `${S.metalT[N - 1].toFixed(1)} °C`;
        ro.elec.textContent = 'Active (fast)';
      } else {
        ro.k1.textContent = 'Hot end'; ro.v1.textContent = `${S.nonT[0].toFixed(0)} °C`;
        ro.k2.textContent = 'Far end'; ro.v2.textContent = `${S.nonT[N - 1].toFixed(1)} °C`;
        ro.elec.textContent = 'None';
      }
      goBtn.textContent = S.on ? '⏸ Extinguish burner' : '🔥 Light burner';

      if (!S.on && S.t === 0) {
        setStatus(status, 'info', '<b>Ready.</b> Notice all atoms sit on fixed lattice spots at 25 °C. Light the burner to watch thermal energy propagate.');
      } else if (S.mode === 'compare') {
        const diff = S.metalT[N - 1] - S.nonT[N - 1];
        setStatus(status, diff > 15 ? 'good' : 'info',
          `<b>Same burner (${S.Tburn} °C), massive gap:</b> the metal far end is already at <b>${S.metalT[N - 1].toFixed(1)} °C</b> while the non-metal far end sits at <b>${S.nonT[N - 1].toFixed(1)} °C</b>. Free electrons carry kinetic energy across the metal many times faster than atom-to-atom vibrations alone.`);
      } else if (S.mode === 'metal') {
        setStatus(status, S.metalT[N - 1] >= 70 ? 'good' : 'info',
          `<b>Metal:</b> atoms vibrate harder on the left, while hot free electrons dart all the way down the bar, raising the far end to <b>${S.metalT[N - 1].toFixed(1)} °C</b>.`);
      } else {
        setStatus(status, 'edge',
          `<b>Non-metal (lattice only):</b> heat creeps slowly from atom to immediate neighbour. Notice the atoms stay locked around their positions—the far end is only at <b>${S.nonT[N - 1].toFixed(1)} °C</b>.`);
      }

      if (S.mode === 'nonmetal' && S.tNonmetal >= 8) {
        complete('l3-atom-nonmetal', { el: $('[data-check="l3-atom-nonmetal"]', root), msg: 'Lattice-only conduction observed!' });
      }
      if (S.mode === 'metal' && S.metalT[N - 1] >= 70) {
        complete('l3-atom-metal', { el: $('[data-check="l3-atom-metal"]', root), msg: 'Free electrons warmed the far end!' });
      }
      if (S.mode === 'compare' && S.tCompare >= 6) {
        complete('l3-atom-compare', { el: $('[data-check="l3-atom-compare"]', root), msg: 'Metal vs non-metal compared!' });
      }
      draw();
    }

    $$('#atom-mode .chip').forEach(b => b.addEventListener('click', () => {
      press($('#atom-mode'), b); S.mode = b.dataset.mode; update();
    }));
    bindRange($('#atom-t'), v => { S.Tburn = v; update(); });
    $('#atom-bonds').addEventListener('change', e => { S.bonds = e.target.checked; draw(); });
    goBtn.addEventListener('click', () => { S.on = !S.on; update(); });
    $('#atom-reset').addEventListener('click', reset);

    animateWhileVisible(root, dt => {
      S.anim += dt;
      if (step(dt)) update(); else draw();
    });
    ready = true; reset();
    redraws.push(draw);
  })();

  /* =====================================================
     LAB 2 · The wax-and-pin race (Ingenhousz apparatus)
     ===================================================== */
  (function waxLab() {
    const root = $('#lab-wax'); if (!root) return;
    // thermal conductivity k (W/m K), density rho (kg/m^3), specific heat c (J/kg K)
    const MATS = {
      copper:    { name: 'Copper',       k: 401,  rho: 8960, c: 387,  col: '#d9824a' },
      aluminium: { name: 'Aluminium',    k: 237,  rho: 2700, c: 910,  col: '#c9ced8' },
      brass:     { name: 'Brass',        k: 109,  rho: 8500, c: 380,  col: '#d9b44a' },
      iron:      { name: 'Iron / steel', k: 80,   rho: 7870, c: 452,  col: '#7d8590' },
      lead:      { name: 'Lead',         k: 35,   rho: 11340, c: 128, col: '#8a93a6' },
      glass:     { name: 'Glass',        k: 1.0,  rho: 2500, c: 840,  col: '#7fc9e8' },
      wood:      { name: 'Wood',         k: 0.12, rho: 550,  c: 1700, col: '#8a5a35' }
    };
    const ORDER = ['copper', 'aluminium', 'brass', 'iron', 'lead', 'glass', 'wood'];
    const SEG = 30;                 // nodes along 0.28 m rod
    const PINS = [5, 10, 15, 20, 25]; // node indices for the 5 pins
    const WAX_MELT = 52;            // paraffin wax melting point (°C)

    const S = {
      rods: ['copper', 'aluminium', 'iron', 'wood'],
      Tbath: 100,
      fair: true,
      speed: 8,
      heating: false,
      t: 0,
      anim: 0,
      state: []
    };

    const sels = [0, 1, 2, 3].map(i => $(`#wax-r${i}`));
    sels.forEach((sel, idx) => {
      sel.innerHTML = ORDER.map(k => `<option value="${k}">${MATS[k].name} · k = ${MATS[k].k}</option>`).join('');
      sel.value = S.rods[idx];
    });

    let ready = false;
    const CV = fitCanvas($('#wax-canvas'), () => ready && draw());
    const status = $('#wax-status'), goBtn = $('#wax-go');
    const ro = { time: $('#wax-time'), k: [0, 1, 2, 3].map(i => $(`#wax-k${i}`)), p: [0, 1, 2, 3].map(i => $(`#wax-p${i}`)) };

    function initState() {
      S.heating = false; S.t = 0;
      S.state = S.rods.map((matKey, idx) => ({
        key: matKey,
        T: new Float32Array(SEG).fill(ROOM),
        pins: PINS.map(node => ({ node, dropped: false, yOff: 0, vy: 0, angle: 0, dropTime: null })),
        // In unfair mode, alter effective thickness/cross-section (rod 0 thin, rod 2 thick)
        scaleRadius: S.fair ? 1 : (idx === 0 ? 0.5 : idx === 2 ? 1.85 : 1)
      }));
    }

    function reset(note) {
      initState();
      update(note);
    }

    function step(dt) {
      if (!S.heating) return false;
      const dx = 0.01; // 1 cm per node (29 cm rod)
      // Enforce CFL stability (alpha_eff * h / dx^2 <= 0.28) even at 20x speed and thick unfair rods
      const sub = Math.max(4, Math.ceil(dt * 24));
      const h = dt / sub;
      for (let st = 0; st < sub; st++) {
        S.state.forEach(r => {
          const mat = MATS[r.key];
          // Thermal diffusivity alpha = k / (rho * c)
          const alpha = mat.k / (mat.rho * mat.c);
          // Scale speed cleanly for classroom visualization while preserving true physical ordering;
          // In unfair mode, thicker rod stores heat & sheds proportionally less heat per volume (h_loss ∝ 1/r)
          const rScale = S.fair ? 1 : r.scaleRadius;
          const effAlpha = alpha * 3.8 * (S.fair ? 1 : Math.pow(rScale, 0.7));
          const lossCoeff = 0.0028 / rScale;

          const next = new Float32Array(SEG);
          next[0] = S.Tbath;
          for (let i = 1; i < SEG; i++) {
            const left = r.T[i - 1];
            const right = i < SEG - 1 ? r.T[i + 1] : r.T[i]; // insulated tip condition
            const lap = (left - 2 * r.T[i] + right) / (dx * dx);
            next[i] = clamp(r.T[i] + h * (effAlpha * lap - lossCoeff * (r.T[i] - ROOM)), ROOM, S.Tbath);
          }
          r.T.set(next);

          // Check wax melting at each pin
          r.pins.forEach(pin => {
            if (!pin.dropped && r.T[pin.node] >= WAX_MELT) {
              pin.dropped = true;
              pin.dropTime = S.t;
              pin.vy = 20;
            }
          });
        });
        S.t += h;
      }
      return true;
    }

    function animatePins(realDt) {
      let moved = false;
      S.state.forEach((r, idx) => {
        r.pins.forEach(pin => {
          if (pin.dropped && pin.yOff < 1) {
            pin.vy += 420 * realDt;
            pin.yOff = Math.min(1, pin.yOff + (pin.vy * realDt) / 140);
            pin.angle = Math.min(1.4, pin.angle + 5.2 * realDt);
            moved = true;
          }
        });
      });
      return moved;
    }

    function draw() {
      const { ctx, w, h } = CV; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const benchY = h - 22;
      ctx.fillStyle = 'rgba(140,160,255,.1)'; ctx.fillRect(0, benchY, w, 2);

      const tankX = 16, tankW = Math.min(w * 0.16, 110), tankTop = 26, tankBot = benchY - 26;
      const rodX0 = tankX + tankW - 6;
      const rodW = Math.max(120, w - rodX0 - 32);

      // Flame under tank
      if (S.heating) {
        const fl = 14 + Math.sin(S.anim * 20) * 2.5;
        const fg = ctx.createRadialGradient(tankX + tankW / 2, benchY - 6, 2, tankX + tankW / 2, benchY - 10, fl);
        fg.addColorStop(0, 'rgba(200,240,255,.95)'); fg.addColorStop(0.5, 'rgba(95,180,255,.7)'); fg.addColorStop(1, 'rgba(95,180,255,0)');
        ctx.fillStyle = fg; ctx.beginPath(); ctx.ellipse(tankX + tankW / 2, benchY - 10, 10, fl, 0, 0, Math.PI * 2); ctx.fill();
      }

      // Water tank
      const bathFrac = clamp((S.Tbath - 25) / 75, 0, 1);
      ctx.fillStyle = '#1b2140'; ctx.strokeStyle = '#8b95bb'; ctx.lineWidth = 2;
      roundRect(ctx, tankX, tankTop, tankW, tankBot - tankTop, 8); ctx.fill(); ctx.stroke();
      ctx.fillStyle = S.heating
        ? `rgba(${Math.round(lerp(70, 235, bathFrac))},${Math.round(lerp(150, 85, bathFrac))},${Math.round(lerp(255, 70, bathFrac))},0.65)`
        : 'rgba(80,150,255,0.28)';
      roundRect(ctx, tankX + 4, tankTop + 16, tankW - 8, tankBot - tankTop - 20, 5); ctx.fill();
      if (S.heating && S.Tbath >= 85 && !L.reduceMotion) {
        ctx.fillStyle = 'rgba(255,255,255,.55)';
        for (let i = 0; i < 8; i++) {
          const bx = tankX + 12 + ((i * 29) % (tankW - 24));
          const by = tankBot - 10 - ((S.anim * 45 + i * 25) % (tankBot - tankTop - 26));
          ctx.beginPath(); ctx.arc(bx, by, 2, 0, Math.PI * 2); ctx.fill();
        }
      }
      label(ctx, S.heating ? `${S.Tbath} °C` : '25 °C', tankX + tankW / 2, tankTop - 11, { size: 11, color: S.heating ? C.amber : C.muted, weight: 600 });

      // 4 horizontal rods
      const rowArea = tankBot - tankTop - 24;
      S.state.forEach((r, idx) => {
        const mat = MATS[r.key];
        const cy = tankTop + 26 + (idx + 0.5) * (rowArea / 4);
        const thick = clamp(9 * r.scaleRadius, 5, 16);

        // Draw segmented thermal colour gradient along the rod
        for (let i = 0; i < SEG - 1; i++) {
          const sx = rodX0 + (i / (SEG - 1)) * rodW;
          const sw = rodW / (SEG - 1) + 1;
          const heat = clamp((r.T[i] - ROOM) / 75, 0, 1);
          ctx.fillStyle = mat.col;
          ctx.fillRect(sx, cy - thick / 2, sw, thick);
          if (heat > 0.02) {
            ctx.fillStyle = `rgba(255,80,55,${heat * 0.65})`;
            ctx.fillRect(sx, cy - thick / 2, sw, thick);
          }
        }
        ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.lineWidth = 1;
        ctx.strokeRect(rodX0, cy - thick / 2, rodW, thick);

        // Unmelted wax sleeve where T < WAX_MELT
        for (let i = 1; i < SEG - 1; i++) {
          if (r.T[i] < WAX_MELT) {
            const sx = rodX0 + (i / (SEG - 1)) * rodW;
            const sw = rodW / (SEG - 1) + 0.8;
            ctx.fillStyle = 'rgba(255,235,140,.35)';
            ctx.fillRect(sx, cy + thick / 2, sw, 3);
          }
        }

        // Material label at far right
        label(ctx, mat.name, rodX0 + rodW + 4, cy - 11, { size: 10, color: C.text, align: 'right' });

        // 5 pins per rod
        r.pins.forEach(pin => {
          const px = rodX0 + (pin.node / (SEG - 1)) * rodW;
          if (!pin.dropped) {
            // Wax bead holding pin
            ctx.fillStyle = '#ffe58f';
            ctx.beginPath(); ctx.arc(px, cy + thick / 2 + 2.5, 3, 0, Math.PI * 2); ctx.fill();
            // Hanging pin
            ctx.strokeStyle = '#e9edff'; ctx.lineWidth = 1.6;
            ctx.beginPath(); ctx.moveTo(px, cy + thick / 2 + 3); ctx.lineTo(px, cy + thick / 2 + 17); ctx.stroke();
            ctx.fillStyle = C.amber;
            ctx.beginPath(); ctx.arc(px, cy + thick / 2 + 3, 2.2, 0, Math.PI * 2); ctx.fill();
          } else {
            // Falling or fallen pin on bench
            const fallDist = (benchY - 4) - (cy + thick / 2 + 12);
            const py = (cy + thick / 2 + 10) + pin.yOff * fallDist;
            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(pin.angle);
            ctx.strokeStyle = 'rgba(233,237,255,.55)'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(0, 7); ctx.stroke();
            ctx.fillStyle = 'rgba(255,198,92,.7)';
            ctx.beginPath(); ctx.arc(0, -7, 2, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
          }
        });
      });

      // Distance scale ticks along top
      PINS.forEach((node, idx) => {
        const px = rodX0 + (node / (SEG - 1)) * rodW;
        label(ctx, `${(idx + 1) * 5} cm`, px, tankTop + 4, { size: 9, color: C.muted });
      });
    }

    function update(note) {
      $('#wax-t-out').textContent = `${S.Tbath} °C`;
      ro.time.textContent = `${Math.round(S.t)} s`;
      goBtn.textContent = S.heating ? '⏸ Pause heat' : '🔥 Heat trough';

      const counts = S.state.map(r => r.pins.filter(p => p.dropped).length);
      S.state.forEach((r, idx) => {
        ro.k[idx].textContent = MATS[r.key].name;
        ro.p[idx].textContent = `${counts[idx]} / 5 dropped`;
        ro.p[idx].className = 'ro-v ' + (counts[idx] === 5 ? 'good' : counts[idx] > 0 ? 'warn' : '');
      });

      if (note) setStatus(status, 'info', note);
      else if (!S.heating && S.t === 0) {
        setStatus(status, 'info', '<b>Ready.</b> Paraffin wax melts at <b>52 °C</b>. Press <b>Heat trough</b> to start the stopwatch.');
      } else if (S.Tbath < WAX_MELT) {
        setStatus(status, 'edge', `<b>Water bath is at ${S.Tbath} °C</b>—below wax’s melting point (52 °C)! Even copper cannot reach 52 °C, so no pins will drop.`);
      } else if (!S.fair) {
        setStatus(status, 'bad', `<b>Unfair test!</b> The rods have unequal thickness (${MATS[S.rods[0]].name} is thin while ${MATS[S.rods[2]].name} is extra thick). You cannot tell whether differences come from the material or the geometry!`);
      } else {
        const maxCount = Math.max(...counts);
        if (maxCount === 5) {
          const winners = S.state.map((r, i) => counts[i] === 5 ? MATS[r.key].name : null).filter(Boolean);
          setStatus(status, 'good', `<b>All 5 pins dropped on ${winners.join(', ')}!</b> Compare pin counts from best conductor to worst insulator.`);
        } else {
          setStatus(status, 'info', `<b>Conducting at ${S.Tbath} °C…</b> Heat flows outward from the trough. Better conductors reach 52 °C first and shed pins faster.`);
        }
      }

      // Challenges
      if (S.fair && S.Tbath === 100 && S.rods[0] === 'copper' && S.rods[1] === 'aluminium' && S.rods[2] === 'iron' && S.rods[3] === 'wood' && counts[0] === 5) {
        complete('l3-wax-race', { el: $('[data-check="l3-wax-race"]', root), msg: 'Copper wins the wax race!' });
      }
      if (S.fair && S.Tbath === 100 && S.t >= 60 && S.rods.includes('glass') && S.rods.filter(k => MATS[k].k >= 35).length >= 2) {
        complete('l3-wax-glass', { el: $('[data-check="l3-wax-glass"]', root), msg: 'Glass vs metals tested fairly!' });
      }
      if (S.heating && S.Tbath < 50 && S.t >= 15) {
        complete('l3-wax-cool', { el: $('[data-check="l3-wax-cool"]', root), msg: 'Below 52 °C wax cannot melt!' });
      }
      if (!S.fair && S.heating && S.t >= 12) {
        complete('l3-wax-unfair', { el: $('[data-check="l3-wax-unfair"]', root), msg: 'Spotted the unfair variable!' });
      }

      draw();
    }

    sels.forEach((sel, idx) => sel.addEventListener('change', () => { S.rods[idx] = sel.value; reset(); }));
    bindRange($('#wax-t'), v => { S.Tbath = v; reset(); });
    $('#wax-fair').addEventListener('change', e => { S.fair = e.target.checked; reset(); });
    goBtn.addEventListener('click', () => { S.heating = !S.heating; update(); });
    $('#wax-reset').addEventListener('click', () => reset());
    $$('#wax-speed .chip').forEach(b => b.addEventListener('click', () => { press($('#wax-speed'), b); S.speed = +b.dataset.speed; }));

    // Table rows load material into Rod 1
    $$('#table-k tr[data-rod]').forEach(tr => tr.addEventListener('click', () => {
      const k = tr.dataset.rod; if (!MATS[k]) return;
      S.rods[0] = k; sels[0].value = k;
      reset(`<b>${MATS[k].name} loaded as Rod 1.</b> Press <b>Heat trough</b> to race it!`);
      root.scrollIntoView({ behavior: L.reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }));

    animateWhileVisible(root, dt => {
      S.anim += dt;
      const stepped = step(dt * S.speed);
      const fell = animatePins(dt);
      if (stepped) update(); else if (fell || S.heating) draw();
    });
    ready = true; reset();
    redraws.push(draw);
  })();

  /* =====================================================
     LAB 3 · Touch paradox (door handle vs wooden door)
     ===================================================== */
  (function touchLab() {
    const root = $('#lab-touch'); if (!root) return;
    const SKIN_T = 37;
    const E_SKIN = 1400; // skin thermal effusivity (J / m^2 K s^0.5)
    const E_CU = 37290;  // copper effusivity
    const E_WOOD = 335;  // pine wood effusivity

    const S = { Tobj: 20, touching: false, p: 0, anim: 0 };
    let ready = false;
    const CV = fitCanvas($('#touch-canvas'), () => ready && draw());
    const status = $('#touch-status');
    const ro = { tobj: $('#touch-tobj'), qcu: $('#touch-qcu'), qw: $('#touch-qw'), feel: $('#touch-feel') };

    const contactT = (Eobj) => (E_SKIN * SKIN_T + Eobj * S.Tobj) / (E_SKIN + Eobj);

    function drawStation(ctx, cx, w, h, name, matCol, isCopper, Eobj) {
      const bw = Math.min(w * 0.34, 210), bh = 38;
      const by = h - 42;
      // Material slab
      ctx.save();
      ctx.fillStyle = matCol;
      roundRect(ctx, cx - bw / 2, by, bw, bh, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 1.4; ctx.stroke();
      ctx.restore();
      label(ctx, `${name} · ${S.Tobj} °C`, cx, by + bh / 2, { size: 12, color: '#061022', font: 'head', weight: 700 });

      // Finger approaching and pressing
      const fy = lerp(26, by - 36, S.p);
      const Tc = lerp(SKIN_T, contactT(Eobj), S.p);
      const skinCol = tempCol(Tc, 1, 15, 58);

      ctx.save();
      ctx.fillStyle = '#d9a48c';
      roundRect(ctx, cx - 18, fy - 4, 36, 40, 14);
      ctx.fill();
      // Fingertip glowing with current contact temperature
      ctx.fillStyle = skinCol;
      ctx.beginPath(); ctx.ellipse(cx, fy + 28, 16, 9, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      label(ctx, `Hand: ${Tc.toFixed(1)} °C`, cx, fy - 14, { size: 11, color: S.p > 0.2 ? skinCol : C.text, weight: 600, bg: C.bgLabel });

      // Animated heat-flow arrows when touching
      if (S.p > 0.8) {
        const fromHandToObj = S.Tobj < SKIN_T;
        const count = isCopper ? 5 : 1;
        const col = fromHandToObj ? C.cyan : C.red;
        ctx.save();
        for (let i = 0; i < count; i++) {
          const ox = cx + (i - (count - 1) / 2) * 16;
          const phase = (S.anim * (isCopper ? 2.4 : 0.7) + i * 0.2) % 1;
          const yA = fromHandToObj ? by - 6 + phase * 22 : by + 16 - phase * 22;
          const yB = fromHandToObj ? yA + 8 : yA - 8;
          ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = isCopper ? 2.2 : 1.4;
          ctx.beginPath(); ctx.moveTo(ox, yA); ctx.lineTo(ox, yB); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ox, yB + (fromHandToObj ? 3 : -3));
          ctx.lineTo(ox - 3, yB + (fromHandToObj ? -2 : 2));
          ctx.lineTo(ox + 3, yB + (fromHandToObj ? -2 : 2));
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
        label(ctx, isCopper
          ? (fromHandToObj ? 'FAST heat out of hand!' : 'FAST heat into hand!')
          : (fromHandToObj ? 'slow trickle out' : 'slow trickle in'),
          cx, by + bh + 14, { size: 10, color: isCopper ? col : C.muted, weight: 600 });
      }
    }

    function draw() {
      const { ctx, w, h } = CV; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      drawStation(ctx, w * 0.27, w, h, 'Copper handle', '#d9824a', true, E_CU);
      drawStation(ctx, w * 0.73, w, h, 'Wooden door', '#9e6b43', false, E_WOOD);
    }

    function update() {
      ro.tobj.textContent = `${S.Tobj} °C each`;
      const hot = S.Tobj > SKIN_T;
      if (!S.touching) {
        ro.qcu.textContent = '–'; ro.qw.textContent = '–'; ro.feel.textContent = 'Press “Touch both”';
        setStatus(status, 'info', `<b>Both objects sit at ${S.Tobj} °C.</b> Your hand is at 37 °C. Press <b>Touch both now</b> to test how fast heat moves.`);
      } else {
        const Tcu = contactT(E_CU), Tw = contactT(E_WOOD);
        ro.qcu.textContent = hot ? 'Rapid heat IN (burns!)' : 'Rapid heat OUT (cold!)';
        ro.qcu.className = 'ro-v ' + (hot ? 'bad' : 'warn');
        ro.qw.textContent = hot ? 'Slow trickle IN' : 'Slow trickle OUT';
        ro.feel.textContent = hot ? 'Copper feels scalding; wood feels mild' : 'Copper feels freezing; wood feels mild';
        setStatus(status, hot ? 'bad' : 'good', hot
          ? `<b>Flipped paradox at ${S.Tobj} °C!</b> Both are 55 °C, yet copper drives fingertip skin up to <b>${Tcu.toFixed(1)} °C</b> rapidly while wood barely reaches <b>${Tw.toFixed(1)} °C</b>. That’s why a metal car buckle burns you in summer!`
          : `<b>Room temperature (${S.Tobj} °C):</b> Copper pulls heat out fast so your fingertip plunges to <b>${Tcu.toFixed(1)} °C</b> (feels icy), while insulating wood keeps your skin at <b>${Tw.toFixed(1)} °C</b> (feels mild).`);

        if (S.p >= 0.99) {
          if (S.Tobj === 20) complete('l3-touch-cold', { el: $('[data-check="l3-touch-cold"]', root), msg: 'Cold-handle paradox solved!' });
          if (S.Tobj === 55) complete('l3-touch-hot', { el: $('[data-check="l3-touch-hot"]', root), msg: 'Hot-sun flip solved!' });
        }
      }
      draw();
    }

    $$('#touch-env .chip').forEach(b => b.addEventListener('click', () => {
      press($('#touch-env'), b); S.Tobj = +b.dataset.t; S.touching = false; S.p = 0; update();
    }));
    $('#touch-go').addEventListener('click', () => {
      S.touching = true;
      if (L.reduceMotion) S.p = 1;
      update();
    });

    animateWhileVisible(root, dt => {
      S.anim += dt;
      if (S.touching && S.p < 1) {
        S.p = Math.min(1, S.p + dt * 2.2);
        if (S.p >= 1) update(); else draw();
      } else if (S.touching) draw();
    });
    ready = true; update();
    redraws.push(draw);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
