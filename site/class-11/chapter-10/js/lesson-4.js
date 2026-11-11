/* =========================================================
   Chapter 10 · Lesson 4 · The Astronomical Telescope — labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const {
    $, $$, clamp, fitCanvas, animateWhileVisible, bindRange, arrow, label, complete,
    dashLine, dimLine, drawEye, drawLens, setStatus, press, photons
  } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', axis: 'rgba(140,160,255,.38)', bgLabel: 'rgba(5,9,21,.8)'
  };
  const DEG = Math.PI / 180;
  const redraws = [];
  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  /* ---- a procedurally drawn Moon (crisp at any size) ---- */
  const CRATERS = (() => { const r = rng(5); return Array.from({ length: 46 }, () => { const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 0.9; return { x: d * Math.cos(a), y: d * Math.sin(a), r: 0.015 + r() * r() * 0.07 }; }); })();
  const MARIA = [[-0.28, -0.3, 0.3, 0.22, 0.3], [0.08, -0.12, 0.24, 0.17, -0.2], [0.32, 0.18, 0.18, 0.14, 0.5], [-0.34, 0.16, 0.15, 0.24, 0.1], [0.12, 0.32, 0.14, 0.09, 0], [-0.05, -0.5, 0.12, 0.08, 0.3]];
  function drawMoon(ctx, x, y, r, rot = 0, bright = 1) {
    ctx.save();
    ctx.translate(x, y); ctx.rotate(rot);
    const halo = ctx.createRadialGradient(0, 0, r * 0.9, 0, 0, r * 1.6);
    halo.addColorStop(0, `rgba(255,250,230,${0.22 * bright})`); halo.addColorStop(1, 'rgba(255,250,230,0)');
    ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.clip();
    const g = ctx.createRadialGradient(-r * .3, -r * .3, r * .1, 0, 0, r);
    g.addColorStop(0, '#f6f3ea'); g.addColorStop(1, '#b9b4a6');
    ctx.fillStyle = g; ctx.fillRect(-r, -r, 2 * r, 2 * r);
    ctx.fillStyle = 'rgba(95,90,82,.38)';
    MARIA.forEach(([mx, my, rx, ry, a]) => { ctx.beginPath(); ctx.ellipse(mx * r, my * r, rx * r, ry * r, a, 0, Math.PI * 2); ctx.fill(); });
    CRATERS.forEach(c => {
      ctx.strokeStyle = 'rgba(90,85,75,.55)'; ctx.lineWidth = Math.max(0.6, c.r * r * 0.25);
      ctx.beginPath(); ctx.arc(c.x * r, c.y * r, c.r * r, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.beginPath(); ctx.arc(c.x * r, c.y * r, c.r * r, Math.PI * 1.1, Math.PI * 1.7); ctx.stroke();
    });
    // Tycho: a bright rayed crater near the bottom (south) — handy for spotting the inversion
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = Math.max(0.6, r * 0.008);
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(0.05 * r * Math.cos(a), 0.62 * r + 0.05 * r * Math.sin(a)); ctx.lineTo(0.5 * r * Math.cos(a), 0.62 * r + 0.5 * r * Math.sin(a)); ctx.stroke(); }
    ctx.fillStyle = '#fffdf5'; ctx.beginPath(); ctx.arc(0, 0.62 * r, 0.045 * r, 0, Math.PI * 2); ctx.fill();
    // night-side shading for brightness
    if (bright < 1) { ctx.fillStyle = `rgba(0,0,0,${1 - bright})`; ctx.fillRect(-r, -r, 2 * r, 2 * r); }
    ctx.restore();
  }
  const STARS = (() => { const r = rng(9); return Array.from({ length: 70 }, () => ({ x: r(), y: r(), s: r() })); })();
  function sky(ctx, cx, cy, R) {
    const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
    g.addColorStop(0, '#0b1230'); g.addColorStop(1, '#03050d');
    ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, 2 * R, 2 * R);
    STARS.forEach(s => { ctx.fillStyle = `rgba(255,255,255,${0.25 + 0.6 * s.s})`; ctx.fillRect(cx - R + s.x * 2 * R, cy - R + s.y * 2 * R, 1.3, 1.3); });
  }

  /* =====================================================
     LAB 1 · Telescope ray tracer (Fig. 10.5)
     ===================================================== */
  (function telLab() {
    const root = $('#lab-tel'); if (!root) return;
    const S = { fo: 100, fe: 5, D: 8, a: 2, t: 0 };
    let ready = false;
    const TC = fitCanvas($('#tel-canvas'), () => ready && draw());
    const VC = fitCanvas($('#tel-view'), () => ready && drawView());
    const status = $('#tel-status');
    const o = { fo: $('#tel-fo-out'), fe: $('#tel-fe-out'), D: $('#tel-D-out'), a: $('#tel-a-out'), M: $('#tel-M'), b: $('#tel-b'), L: $('#tel-L'), w: $('#tel-w') };

    function calc() {
      const { fo, fe, D, a } = S;
      const ta = Math.tan(a * DEG), M = fo / fe;
      return { M, ta, beta: Math.atan(M * ta), L: fo + fe, ep: fe * (fo + fe) / fo, w: D * fe / fo, Ay: -fo * ta };
    }

    function draw() {
      const { ctx, w, h } = TC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const c = calc(), { fo, fe, D } = S;
      const narrow = w < 520;
      const xe = fo + fe;
      const xin = 0.16 * xe;
      const xEnd = xe + c.ep + Math.max(0.6, 0.03 * xe);
      const xmin = -xin, xmax = xEnd + Math.max(1.2, 0.05 * xe);
      const sc = (w - 20) / (xmax - xmin);
      const X = x => 10 + (x - xmin) * sc;
      const cy = h * 0.5;
      const yi = [-0.5, -0.25, 0, 0.25, 0.5].map(k => k * D);
      const yeOff = yi.map(y => y + (c.Ay - y) * xe / fo);
      const maxY = Math.max(D / 2 + c.ta * xin, ...yeOff.map(Math.abs), Math.abs(c.Ay));
      const vs = clamp((h / 2 - 26) / maxY, sc * 0.3, sc * 8);
      const Y = y => cy - y * vs;

      ctx.strokeStyle = C.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      if (vs / sc > 1.3) label(ctx, `heights ×${(vs / sc).toFixed(0)}`, w - 8, h - 10, { size: 10, align: 'right' });

      const paths = [];
      // axial bundle (from B, on the axis)
      ctx.save(); ctx.strokeStyle = C.cyan; ctx.lineWidth = 1.3; ctx.globalAlpha = .55;
      yi.forEach(y => {
        const ye = -y * fe / fo;
        ctx.beginPath(); ctx.moveTo(X(xmin), Y(y)); ctx.lineTo(X(0), Y(y)); ctx.lineTo(X(xe), Y(ye)); ctx.lineTo(X(xEnd), Y(ye)); ctx.stroke();
      });
      ctx.restore();
      // off-axis bundle (from A, at angle α)
      const sb = c.M * c.ta;
      yi.forEach((y, i) => {
        const pts = [[xmin, y + c.ta * xin], [0, y], [xe, yeOff[i]], [xEnd, yeOff[i] + sb * (xEnd - xe)]].map(([x, yy]) => [X(x), Y(yy)]);
        ctx.save(); ctx.strokeStyle = C.pink; ctx.lineWidth = 1.6; ctx.shadowColor = C.pink; ctx.shadowBlur = 8; ctx.globalAlpha = .9;
        ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => ctx.lineTo(p[0], p[1])); ctx.stroke(); ctx.restore();
        if (i % 2 === 0) paths.push({ pts, col: C.pink });
      });
      // A' to O' line (defines β)
      dashLine(ctx, X(fo), Y(c.Ay), X(xe + Math.min(c.ep, fe * 1.4)), Y(sb * Math.min(c.ep, fe * 1.4)), 'rgba(255,255,255,.3)', 1, [3, 4]);

      // lenses
      drawLens(ctx, X(0), cy, D / 2 * vs + 3, clamp(D * vs / 30, 5, 14));
      const eyeH = Math.max(...yeOff.map(Math.abs), D / 2 * fe / fo) * vs + 10;
      drawLens(ctx, X(xe), cy, Math.min(eyeH, h / 2 - 4), 7);
      label(ctx, narrow ? 'objective' : 'objective (f₀)', X(0), Math.min(h - 10, cy + D / 2 * vs + 16), { color: C.cyan, size: 11 });
      label(ctx, narrow ? 'eye-p.' : 'eye-piece (fₑ)', X(xe), Math.min(h - 10, cy + eyeH + 12), { color: C.cyan, size: 11 });
      // shared focus + A'B'
      ctx.fillStyle = C.violet; ctx.beginPath(); ctx.arc(X(fo), cy, 3.5, 0, Math.PI * 2); ctx.fill();
      arrow(ctx, X(fo), cy, X(fo), Y(c.Ay), { color: C.green, width: 2.5, head: 9, glow: 10 });
      label(ctx, 'A′', X(fo) + 10, Y(c.Ay) + 6, { color: C.green, size: 11 });
      label(ctx, narrow ? 'B′' : 'B′ (focus of both lenses)', X(fo) - 8, cy - 12, { color: C.violet, size: 10, align: 'right' });
      // α and β
      const ad = Math.atan(c.ta * vs / sc), bd = Math.atan(sb * vs / sc);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2;
      const ra = Math.min(46, xin * sc * 0.7);
      ctx.beginPath(); ctx.arc(X(0), cy, ra, Math.PI, Math.PI + ad); ctx.stroke();
      label(ctx, 'α', X(0) - ra - 10, cy - ra * Math.sin(ad / 2) - 6, { color: '#fff', size: 15, font: 'serif', weight: 400 });
      const rb = Math.min(40, Math.max(18, c.ep * sc * 0.6));
      ctx.beginPath(); ctx.arc(X(xe), cy, rb, -bd, 0); ctx.stroke();
      label(ctx, 'β', X(xe) + rb + 10, cy - rb * Math.sin(bd / 2) - 4, { color: '#fff', size: 15, font: 'serif', weight: 400 });
      // eye at the exit pupil
      drawEye(ctx, X(xe + c.ep) + 14, cy, 13);
      // length
      dimLine(ctx, X(0), X(xe), 14, C.amber, narrow ? `L = ${c.L.toFixed(1)} cm` : `L = f₀ + fₑ = ${c.L.toFixed(1)} cm`);
      photons(ctx, paths, S.t, { w, h, gap: 110, speed: 140 });
    }

    function drawView() {
      const { ctx, w, h } = VC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const c = calc();
      const narrow = w < 520;
      const R = Math.min(h * 0.4, w * 0.21);
      const cy = h / 2 - 6;
      const K = R / 25;                       // px per degree: the view spans a 50° field
      const views = [
        { cx: w * 0.27, title: narrow ? 'Naked eye' : 'Naked eye', ang: S.a, rot: 0, tag: '1 ×', col: C.cyan },
        { cx: w * 0.73, title: narrow ? 'Telescope' : 'Through the telescope (inverted!)', ang: c.beta / DEG, rot: Math.PI, tag: `${c.M.toFixed(1)} ×`, col: C.pink }
      ];
      views.forEach(v => {
        ctx.save(); ctx.beginPath(); ctx.arc(v.cx, cy, R, 0, Math.PI * 2); ctx.clip();
        sky(ctx, v.cx, cy, R);
        drawMoon(ctx, v.cx, cy, Math.max(1.2, v.ang * K / 2), v.rot);
        ctx.restore();
        ctx.save(); ctx.strokeStyle = v.col; ctx.globalAlpha = .75; ctx.lineWidth = 3; ctx.shadowColor = v.col; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(v.cx, cy, R, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        label(ctx, v.title, v.cx, cy + R + 15, { color: v.col, size: 11 });
        label(ctx, v.tag, v.cx, cy + R - 16, { color: '#fff', size: 12, weight: 600, bg: C.bgLabel });
      });
      label(ctx, '→', w / 2, cy, { color: C.muted, size: 22, font: 'head' });
    }

    function update() {
      const c = calc();
      o.fo.textContent = `${S.fo} cm`; o.fe.textContent = `${S.fe.toFixed(1)} cm`; o.D.textContent = `${S.D.toFixed(1)} cm`; o.a.textContent = `${S.a.toFixed(1)}°`;
      o.M.textContent = `${S.fo}/${S.fe} = ${c.M.toFixed(c.M % 1 ? 2 : 0)}`;
      o.b.textContent = `${(c.beta / DEG).toFixed(1)}°`;
      o.L.textContent = `${c.L.toFixed(1)} cm`;
      o.w.textContent = `${c.w.toFixed(2)} cm`;
      setStatus(status, 'good', `<b>Normal adjustment.</b> A′B′ sits at the focus of <em>both</em> lenses, so the rays leave the eye-piece parallel and the final image is at <b>infinity</b>. The object's angle grows from α = ${S.a.toFixed(1)}° to β = ${(c.beta / DEG).toFixed(1)}°: M = f₀/fₑ = <b>${c.M.toFixed(1)}</b>. The Moon looks ${c.M.toFixed(0)}× bigger, and upside down.`);
      if (Math.abs(c.M - 5) < 1e-6 && Math.abs(c.L - 24) < 1e-6) complete('l4-tel-n108', { el: $('[data-check="l4-tel-n108"]', root), msg: 'f₀ = 20 cm, fₑ = 4 cm!' });
      if (S.a <= 0.5 + 1e-9 && c.M >= 50) complete('l4-tel-moon', { el: $('[data-check="l4-tel-moon"]', root), msg: 'The Moon, 50× bigger!' });
      if (S.fo === 96 && S.fe === 4 && S.D === 12) complete('l4-tel-n102', { el: $('[data-check="l4-tel-n102"]', root), msg: 'Eye-piece must be 0.50 cm wide' });
      draw(); drawView();
    }
    const R = {
      fo: bindRange($('#tel-fo'), v => { S.fo = v; update(); }),
      fe: bindRange($('#tel-fe'), v => { S.fe = v; update(); }),
      D: bindRange($('#tel-D'), v => { S.D = v; update(); }),
      a: bindRange($('#tel-a'), v => { S.a = v; update(); })
    };
    const presets = { n103: [20, 5, 4], n104: [100, 5, 8], n108: [20, 4, 4], n102: [96, 4, 12] };
    $$('[data-tel]').forEach(b => b.addEventListener('click', () => {
      const [fo, fe, D] = presets[b.dataset.tel];
      S.fo = fo; S.fe = fe; S.D = D; R.fo.set(fo); R.fe.set(fe); R.D.set(D); update();
    }));
    animateWhileVisible(root, (dt, t) => { S.t = t; draw(); });
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 2 · Light gathering, and Q 10.6
     ===================================================== */
  (function lightLab() {
    const root = $('#lab-light'); if (!root) return;
    const S = { c: 0, D: 6 };
    let ready = false;
    const RC = fitCanvas($('#light-rays'), () => ready && drawRays());
    const VC = fitCanvas($('#light-view'), () => ready && drawView());
    const status = $('#light-status');
    const o = { c: $('#light-c-out'), D: $('#light-D-out'), A: $('#light-A'), x: $('#light-x'), n: $('#light-n') };
    const FAINT = (() => { const r = rng(21); return Array.from({ length: 170 }, () => ({ x: r(), y: r(), f: Math.pow(10, -4 * r()) })); })();
    const GALAXY = { x: 0.76, y: 0.26, f: 0.003 };
    const vis = f => f * S.D * S.D * (1 - S.c) / 16;     // > 0.05 means visible

    function drawRays() {
      const { ctx, w, h } = RC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const cy = h / 2 + 6, lx = w * 0.3;
      const halfH = h * (0.1 + 0.3 * S.D / 30);
      const fx = w * 0.8, fx2 = fx, fy2 = cy + h * 0.14;
      const coverY = cy - halfH + S.c * 2 * halfH;
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      const N = 9;
      let passed = 0;
      [[C.cyan, 0, cy], [C.pink, (fy2 - cy) / (fx2 - lx), fy2]].forEach(([col, slope, ty], bi) => {
        for (let k = 0; k < N; k++) {
          const y = cy - halfH + (k + 0.5) / N * 2 * halfH;
          const y0 = y - slope * lx;
          const blocked = y < coverY;
          ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 1.4; ctx.globalAlpha = blocked ? .35 : .8;
          ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(lx - (blocked ? 6 : 0), y);
          if (!blocked) { ctx.lineTo(bi ? fx2 : fx, ty); const ex = w, ey = ty + (ty - y) / ((bi ? fx2 : fx) - lx) * (ex - (bi ? fx2 : fx)); ctx.lineTo(ex, ey); }
          ctx.stroke(); ctx.restore();
          if (!blocked && bi === 0) passed++;
        }
      });
      drawLens(ctx, lx, cy, halfH, 12);
      if (S.c > 0.005) {
        ctx.save(); ctx.fillStyle = '#272d40'; ctx.strokeStyle = '#4a536f';
        ctx.fillRect(lx - 16, cy - halfH - 6, 12, coverY - (cy - halfH) + 6); ctx.strokeRect(lx - 16, cy - halfH - 6, 12, coverY - (cy - halfH) + 6);
        ctx.restore();
        label(ctx, 'cover', lx - 24, cy - halfH + (coverY - cy + halfH) / 2, { color: C.muted, size: 10, align: 'right' });
      }
      const frac = passed / N;
      [[fx, cy, C.cyan], [fx2, fy2, C.pink]].forEach(([x, y, col]) => {
        ctx.save(); ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 20 * frac; ctx.globalAlpha = 0.25 + 0.75 * frac;
        ctx.beginPath(); ctx.arc(x, y, 3 + 4 * frac, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      label(ctx, 'image points', fx, fy2 + 22, { color: C.text, size: 10 });
      label(ctx, `D = ${S.D} cm`, lx, cy + halfH + 14, { color: C.cyan, size: 10 });
    }

    function drawView() {
      const { ctx, w, h } = VC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#050816'); g.addColorStop(1, '#0b1028');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      let n = 0;
      FAINT.forEach(s => {
        const v = vis(s.f); if (v < 0.05) return; n++;
        const a = clamp(Math.log10(v / 0.05) / 2, 0.15, 1);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.beginPath(); ctx.arc(s.x * w, s.y * h, 0.6 + 1.5 * a, 0, Math.PI * 2); ctx.fill();
      });
      const gv = vis(GALAXY.f);
      if (gv >= 0.05) {
        const a = clamp(Math.log10(gv / 0.05) / 0.6, 0.15, 1);
        ctx.save(); ctx.translate(GALAXY.x * w, GALAXY.y * h); ctx.rotate(-0.5); ctx.scale(1, 0.4);
        const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.09);
        gg.addColorStop(0, `rgba(255,240,215,${0.9 * a})`); gg.addColorStop(0.3, `rgba(200,180,255,${0.4 * a})`); gg.addColorStop(1, 'rgba(120,120,255,0)');
        ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(0, 0, w * 0.09, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      }
      const b = S.D * S.D * (1 - S.c) / 36;
      drawMoon(ctx, w * 0.34, h * 0.58, Math.min(w, h) * 0.24, Math.PI, clamp(Math.sqrt(b), 0.12, 1));
      label(ctx, `${n + (gv >= 0.05 ? 1 : 0)} objects visible`, 10, h - 12, { color: C.muted, size: 10, align: 'left', bg: C.bgLabel });
      return n;
    }

    function update() {
      const area = Math.PI * (S.D / 2) ** 2 * (1 - S.c);
      const x = (S.D / 0.7) ** 2 * (1 - S.c);
      o.c.textContent = S.c < 0.005 ? 'uncovered' : `${Math.round(S.c * 100)}% covered`;
      o.D.textContent = `${S.D.toFixed(1)} cm`;
      o.A.textContent = `${area.toFixed(1)} cm²`;
      o.x.textContent = `${x.toFixed(0)} × more light`;
      drawRays();
      const n = drawView();
      const galaxy = vis(GALAXY.f) >= 0.05;
      o.n.textContent = `${n}${galaxy ? ' + a galaxy!' : ''}`;
      if (S.c >= 0.45)
        setStatus(status, 'good', `<b>The whole Moon is still there!</b> It's just dimmer: only ${Math.round((1 - S.c) * 100)}% of the light gets through. Every part of the objective receives light from <em>every</em> point of the Moon, so the uncovered part still forms the complete image.`);
      else if (galaxy)
        setStatus(status, 'good', `<b>A galaxy appears!</b> Its light is far too faint for your eye, but a ${S.D} cm objective collects ${x.toFixed(0)}× more light than your pupil.`);
      else
        setStatus(status, 'info', `Light collected ∝ area ∝ D². This objective gathers <b>${x.toFixed(0)}×</b> more light than your eye, so fainter stars appear as D grows.`);
      if (S.c >= 0.45) complete('l4-light-half', { el: $('[data-check="l4-light-half"]', root), msg: 'Still a full Moon, just dimmer!' });
      if (galaxy) complete('l4-light-galaxy', { el: $('[data-check="l4-light-galaxy"]', root), msg: 'Galaxy revealed!' });
    }
    bindRange($('#light-c'), v => { S.c = v; update(); });
    bindRange($('#light-D'), v => { S.D = v; update(); });
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 3 · Refracting vs reflecting telescope
     ===================================================== */
  (function reflLab() {
    const root = $('#lab-refl'); if (!root) return;
    const S = { type: 'lens', seen: new Set(['lens']) };
    let ready = false;
    const RC = fitCanvas($('#refl-canvas'), () => ready && draw());
    const status = $('#refl-status');

    function draw() {
      const { ctx, w, h } = RC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const cy = h * 0.56, th = h * 0.28;          // tube half-height
      const x0 = w * 0.06, x1 = w * 0.94;
      ctx.save(); ctx.strokeStyle = 'rgba(140,160,255,.45)'; ctx.fillStyle = 'rgba(20,30,62,.5)'; ctx.lineWidth = 2;
      ctx.fillRect(x0, cy - th, x1 - x0, 2 * th);
      ctx.beginPath(); ctx.moveTo(x0, cy - th); ctx.lineTo(x1, cy - th); ctx.moveTo(x0, cy + th); ctx.lineTo(x1, cy + th);
      if (S.type === 'mirror') { ctx.moveTo(x1, cy - th); ctx.lineTo(x1, cy + th); }
      ctx.stroke(); ctx.restore();
      const COLS = [['#6f97ff', -1], ['#5cf08a', 0], ['#ff5d5d', 1]];

      if (S.type === 'lens') {
        const lx = w * 0.12, f = w * 0.6;
        const ys = [-0.75, -0.4, 0.4, 0.75].map(k => k * th * 0.95);
        ctx.save(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.shadowColor = '#fff'; ctx.shadowBlur = 6;
        ys.forEach(y => { ctx.beginPath(); ctx.moveTo(0, cy + y); ctx.lineTo(lx, cy + y); ctx.stroke(); });
        ctx.restore();
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.lineWidth = 1.3;
        COLS.forEach(([col, k]) => {
          const fx = lx + f * (1 + 0.07 * k);
          ctx.strokeStyle = col; ctx.globalAlpha = .8;
          ys.forEach(y => { const sl = -y / (fx - lx); ctx.beginPath(); ctx.moveTo(lx, cy + y); ctx.lineTo(x1 - 26, cy + y + sl * (x1 - 26 - lx)); ctx.stroke(); });
        });
        ctx.restore();
        drawLens(ctx, lx, cy, th * 0.95, 11);
        COLS.forEach(([col, k], i) => {
          const fx = lx + f * (1 + 0.07 * k);
          ctx.fillStyle = col; ctx.beginPath(); ctx.arc(fx, cy, 3.5, 0, Math.PI * 2); ctx.fill();
        });
        drawLens(ctx, x1 - 26, cy, th * 0.45, 6);
        label(ctx, 'lens objective', lx, cy + th + 14, { color: C.cyan, size: 11, align: 'left' });
        label(ctx, 'eye-piece', x1 - 26, cy - th - 12, { color: C.cyan, size: 11 });
        label(ctx, w < 520 ? 'colours focus apart' : 'blue · green · red focus at different points', lx + f * (w < 520 ? 0.8 : 1), cy + th * 0.62, { color: C.text, size: 11, bg: C.bgLabel });
        label(ctx, 'starlight →', 10, cy - th - 12, { color: '#fff', size: 11, align: 'left' });
      } else {
        const xv = w * 0.9, Fx = w * 0.3, f = xv - Fx;
        const xd = Fx + th + 18;                       // diagonal mirror position (F' lands above the tube)
        const u = [Math.SQRT1_2, Math.SQRT1_2];        // diagonal mirror direction (upper-left to lower-right)
        // primary mirror (parabola opening left)
        ctx.save(); ctx.strokeStyle = '#dfe6ff'; ctx.lineWidth = 4; ctx.shadowColor = '#9fb4ff'; ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let y = -th * 0.92; y <= th * 0.92; y += 2) { const x = xv - y * y / (4 * f); y === -th * 0.92 ? ctx.moveTo(x, cy + y) : ctx.lineTo(x, cy + y); }
        ctx.stroke(); ctx.restore();
        const ys = [-0.85, -0.55, 0.55, 0.85].map(k => k * th * 0.92);
        const coneAtD = th * 0.92 * (xd - Fx) / f;
        const dl = coneAtD * 1.25;
        ctx.save(); ctx.lineWidth = 1.5; ctx.strokeStyle = '#fff'; ctx.shadowColor = '#fff'; ctx.shadowBlur = 6;
        ys.forEach(y => {
          const xm = xv - y * y / (4 * f);
          ctx.beginPath(); ctx.moveTo(0, cy + y); ctx.lineTo(xm, cy + y);
          // reflected towards F, until it meets the diagonal mirror
          const d = [Fx - xm, -y]; const dn = Math.hypot(d[0], d[1]); d[0] /= dn; d[1] /= dn;
          // solve (xm, cy+y) + t d = (xd, cy) + s u
          const det = d[0] * (-u[1]) - d[1] * (-u[0]);
          const rx = xd - xm, ry = cy - (cy + y);
          const t = (rx * (-u[1]) - ry * (-u[0])) / det;
          const px = xm + t * d[0], py = cy + y + t * d[1];
          ctx.lineTo(px, py);
          const dot = d[0] * u[0] + d[1] * u[1];
          const r2 = [2 * dot * u[0] - d[0], 2 * dot * u[1] - d[1]];
          const tt = (cy - th - 34 - py) / r2[1];
          ctx.lineTo(px + r2[0] * tt, py + r2[1] * tt);
          ctx.stroke();
        });
        ctx.restore();
        // diagonal mirror
        ctx.save(); ctx.strokeStyle = '#cfd8ff'; ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.moveTo(xd - dl * u[0], cy - dl * u[1]); ctx.lineTo(xd + dl * u[0], cy + dl * u[1]); ctx.stroke(); ctx.restore();
        // eye-piece tube on top
        ctx.save(); ctx.fillStyle = 'rgba(20,30,62,.9)'; ctx.strokeStyle = 'rgba(140,160,255,.6)';
        ctx.fillRect(xd - 12, cy - th - 44, 24, 44); ctx.strokeRect(xd - 12, cy - th - 44, 24, 44); ctx.restore();
        const ex = xd, ey = cy - th - 46;
        ctx.save(); ctx.strokeStyle = C.cyan; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(ex, ey, 14, 4, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        label(ctx, 'concave mirror (objective)', xv - 20, cy + th + 14, { color: '#dfe6ff', size: 11, align: 'right' });
        if (w < 520) label(ctx, 'flat mirror', xd - 16, cy + dl + 6, { color: '#cfd8ff', size: 10, align: 'right', bg: C.bgLabel }); else label(ctx, 'flat mirror', xd + 22, cy + dl + 10, { color: '#cfd8ff', size: 11, align: 'left' });
        label(ctx, 'eye-piece', xd + 20, ey + 4, { color: C.cyan, size: 11, align: 'left' });
        label(ctx, w < 520 ? 'one focus for all colours' : 'all colours reflect the same way: one sharp focus', w * 0.55, cy + th * 0.62, { color: C.text, size: 11, bg: C.bgLabel });
        label(ctx, 'starlight →', 10, cy - th - 12, { color: '#fff', size: 11, align: 'left' });
      }
    }
    function update() {
      if (S.type === 'lens')
        setStatus(status, 'edge', `<b>Refracting telescope.</b> A lens bends blue light more than red (Lesson 3), so the colours focus at different points. Big lenses are also very heavy, can only be held at their edges and sag under their own weight. The largest ever used is just over 1 m wide.`);
      else
        setStatus(status, 'good', `<b>Reflecting telescope.</b> A concave mirror reflects every colour the same way, so there is <b>no chromatic aberration</b>. A small flat mirror sends the light sideways to the eye-piece. Mirrors can be supported from behind and made enormous, which is why all the biggest telescopes are reflectors.`);
      if (S.seen.size >= 2) complete('l4-refl-both', { el: $('[data-check="l4-refl-both"]', root), msg: 'Mirrors win for big telescopes!' });
      draw();
    }
    $$('[data-type]', root).forEach(b => b.addEventListener('click', () => { S.type = b.dataset.type; S.seen.add(S.type); press($('#refl-type'), b); update(); }));
    ready = true; update();
    redraws.push(update);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
