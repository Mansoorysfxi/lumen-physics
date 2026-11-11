/* =========================================================
   Chapter 10 · Lesson 2 · The Simple Microscope — labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const {
    $, $$, clamp, fitCanvas, drag, animateWhileVisible, bindRange, arrow, label, complete,
    glowLine, dashLine, dimLine, pulseRing, drawEye, drawLens, setStatus, press, throttle, photons
  } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', axis: 'rgba(140,160,255,.38)', bgLabel: 'rgba(5,9,21,.8)'
  };
  const D = 25;            // least distance of distinct vision (cm)
  const redraws = [];

  /* A ladybird seen from above, centred at (x, y), Lp pixels long, facing right */
  function drawLadybird(ctx, x, y, Lp, flip = false) {
    ctx.save();
    ctx.translate(x, y);
    const s = Lp / 100;
    ctx.scale(flip ? -s : s, flip ? -s : s);
    ctx.lineCap = 'round';
    // legs
    ctx.strokeStyle = '#141414'; ctx.lineWidth = 4;
    [-20, 0, 20].forEach((lx, i) => [-1, 1].forEach(k => {
      ctx.beginPath(); ctx.moveTo(lx, 18 * k); ctx.lineTo(lx + (i - 1) * 8, 48 * k); ctx.lineTo(lx + (i - 1) * 14, 56 * k); ctx.stroke();
    }));
    // antennae
    ctx.lineWidth = 2.5;
    [-1, 1].forEach(k => { ctx.beginPath(); ctx.moveTo(46, 6 * k); ctx.quadraticCurveTo(58, 10 * k, 62, 20 * k); ctx.stroke(); });
    // body
    const g = ctx.createRadialGradient(-18, -14, 4, -6, 0, 46);
    g.addColorStop(0, '#ff5a45'); g.addColorStop(.7, '#d4231b'); g.addColorStop(1, '#8e110c');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(-6, 0, 42, 36, 0, 0, Math.PI * 2); ctx.fill();
    // head + markings
    ctx.fillStyle = '#121212'; ctx.beginPath(); ctx.arc(36, 0, 17, -Math.PI / 2, Math.PI / 2); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.ellipse(40, 0, 10, 13, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f4f4f4'; [-1, 1].forEach(k => { ctx.beginPath(); ctx.ellipse(33, 9 * k, 4, 5, 0, 0, Math.PI * 2); ctx.fill(); });
    // wing split
    ctx.strokeStyle = '#2a0707'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(34, 0); ctx.lineTo(-47, 0); ctx.stroke();
    // spots
    ctx.fillStyle = '#111';
    [[-22, -19, 7], [-22, 19, 7], [3, -22, 6.5], [3, 22, 6.5], [-37, -8, 5], [-37, 8, 5], [16, -9, 5], [16, 9, 5]]
      .forEach(([sx, sy, r]) => { ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill(); });
    // shine
    ctx.fillStyle = 'rgba(255,255,255,.32)'; ctx.beginPath(); ctx.ellipse(-14, -16, 15, 6, -0.35, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  /* =====================================================
     LAB 1 · Magnifying glass (Fig. 10.3)
     ===================================================== */
  (function magLab() {
    const root = $('#lab-mag'); if (!root) return;
    const O = 1;                        // ladybird length (cm)
    const S = { p: 3.2, f: 5, touched: false, t: 0 };
    let ready = false, geo = null;
    const MC = fitCanvas($('#mag-canvas'), () => ready && drawMain());
    const SC = fitCanvas($('#mag-see'), () => ready && drawSee());
    const status = $('#mag-status');
    const ro = { p: $('#mag-p-out'), f: $('#mag-f-out'), q: $('#mag-q'), a: $('#mag-a'), b: $('#mag-b'), M: $('#mag-M'), max: $('#mag-max') };
    const pInput = $('#mag-p');
    const pMax = () => Math.round(1.3 * S.f * 100) / 100;
    const deg = r => (r * 180 / Math.PI).toFixed(1) + '°';

    function optics() {
      const { p, f } = S;
      const inf = Math.abs(p - f) < 0.015 * f;
      let q = Infinity, real = false;
      if (!inf) { const v = p * f / (p - f); if (v > 0) { real = true; q = v; } else q = -v; }
      const virt = !real && !inf;
      return {
        p, f, inf, real, virt, q,
        I: inf ? Infinity : O * q / p,
        alpha: Math.atan(O / D), beta: Math.atan(O / p),
        M: D / p, Mmax: 1 + D / f,
        near: virt && Math.abs(q - D) <= 0.5,
        tooClose: virt && q < D - 0.5
      };
    }

    function drawMain() {
      const { ctx, w, h } = MC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const o = optics();
      const xL = w - 72, cy = Math.round(h * 0.8);
      const span = 31, sc = (xL - 16) / span;
      const vs = Math.min(3 * sc, (cy - 44) / (o.Mmax + 0.4));   // heights stretched/squeezed to fit (affine: ratios kept)
      const X = x => xL + x * sc, Y = y => cy - y * vs;
      const eyeX = xL + 36, eyeR = 16, xe = (eyeX - eyeR - xL) / sc;
      geo = { X, Y, sc, xL, cy };
      const narrow = w < 520;

      // grid + axis
      ctx.strokeStyle = 'rgba(140,160,255,.07)'; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = 0; x <= span; x += 5) { ctx.moveTo(X(-x), 0); ctx.lineTo(X(-x), h); }
      ctx.stroke();
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      if (!narrow) for (let x = 5; x <= 30; x += 5) label(ctx, x === 30 ? '30 cm' : String(x), X(-x), h - 10, { size: 10 });

      // near point + naked-eye reference (Fig. 10.3 a)
      const xd = X(-D);
      dashLine(ctx, xd, 26, xd, cy, 'rgba(255,107,122,.55)', 1.2, [5, 5]);
      label(ctx, narrow ? 'd = 25 cm' : 'near point · d = 25 cm', xd + 6, 18, { color: C.red, size: 11, align: 'left' });
      ctx.fillStyle = 'rgba(95,227,255,.08)';
      ctx.beginPath(); ctx.moveTo(xL, cy); ctx.lineTo(xd, Y(O)); ctx.lineTo(xd, cy); ctx.closePath(); ctx.fill();
      dashLine(ctx, xL, cy, xd, Y(O), 'rgba(95,227,255,.6)', 1.2, [4, 4]);
      arrow(ctx, xd, cy, xd, Y(O), { color: 'rgba(255,198,92,.45)', width: 2, head: 8, dashed: true });
      label(ctx, 'α', xd + (xL - xd) * 0.42, Y(O * 0.58) - 10, { color: C.cyan, size: 15, font: 'serif', weight: 400 });
      if (!narrow) label(ctx, 'naked eye: ladybird at 25 cm', xd + 6, Y(O) - 14, { color: 'rgba(95,227,255,.75)', size: 10, align: 'left' });

      // lens, focal points, eye
      drawLens(ctx, xL, cy, clamp(2.6 * vs, 34, cy - 30), clamp(60 / S.f, 6, 15));
      if (vs / sc > 1.2 || vs / sc < 0.83) label(ctx, 'heights not to scale', w - 8, 14, { size: 10, align: 'right' });
      const xF = X(-S.f);
      ctx.fillStyle = C.violet; ctx.beginPath(); ctx.arc(xF, cy, 3.5, 0, Math.PI * 2); ctx.fill();
      label(ctx, 'F', xF, cy + 16, { color: C.violet, size: 12, weight: 600 });
      drawEye(ctx, eyeX, cy, eyeR);

      // β wedge: the angle the image subtends at the eye
      const T = [-o.p, O];
      const farX = -Math.min(o.virt ? o.q : span + 2, span + 2);
      const wedgeTop = [farX, -O * farX / o.p * -1];   // along the line from O through T
      if (!o.real) {
        ctx.fillStyle = 'rgba(255,95,168,.12)';
        ctx.beginPath(); ctx.moveTo(xL, cy); ctx.lineTo(X(wedgeTop[0]), Y(O * (-wedgeTop[0]) / o.p)); ctx.lineTo(X(wedgeTop[0]), cy); ctx.closePath(); ctx.fill();
        const bd = Math.atan2(O * vs, o.p * sc);                 // β as drawn
        const rb = Math.min(70, (xL - X(-o.p)) * 0.85);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(xL, cy, rb, Math.PI, Math.PI + bd); ctx.stroke();
        const lr = rb + 12;
        label(ctx, 'β', xL - lr * Math.cos(bd / 2), cy - lr * Math.sin(bd / 2), { color: C.pink, size: 16, font: 'serif', weight: 400 });
      }

      // virtual image + back-extensions
      if (o.virt || o.inf) {
        const imgOn = o.virt && o.q <= span + 0.5;
        const ix = o.virt ? -Math.min(o.q, span + 3) : -(span + 3);
        // ray 1 refracts towards F' : y = O - O*x/f  → extended backwards
        dashLine(ctx, X(0), Y(O), X(ix), Y(O - O * ix / S.f), 'rgba(255,198,92,.55)');
        // ray 2 through O : y = -O*x/p → backwards beyond T
        dashLine(ctx, X(-o.p), Y(O), X(ix), Y(-O * ix / o.p), 'rgba(255,95,168,.55)');
        if (imgOn) {
          arrow(ctx, X(-o.q), cy, X(-o.q), Y(o.I), { color: C.violet, width: 2.5, head: 11, dashed: true, glow: 10 });
          const ly = Math.max(Y(o.I) - 14, 34);
          label(ctx, 'virtual image', X(-o.q), ly, { color: C.violet, size: 11, bg: C.bgLabel });
        } else {
          label(ctx, o.inf ? '← image at infinity' : `← image ${o.q.toFixed(0)} cm away`, 8, 44, { color: C.violet, size: 11, align: 'left', bg: C.bgLabel });
        }
      }

      // real rays (object → lens → eye)
      const xEnd = o.real ? (w - xL) / sc : xe;
      const r1 = [T, [0, O], [xEnd, O - O * xEnd / S.f]];
      const r2 = [T, [0, 0], [xEnd, -O * xEnd / o.p]];
      const paths = [];
      [[r1, C.amber], [r2, C.pink]].forEach(([pts, col]) => {
        const sp = pts.map(([x, y]) => [X(x), Y(y)]);
        ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.shadowColor = col; ctx.shadowBlur = 10; ctx.lineJoin = 'round';
        ctx.beginPath(); ctx.moveTo(sp[0][0], sp[0][1]); sp.slice(1).forEach(q => ctx.lineTo(q[0], q[1])); ctx.stroke(); ctx.restore();
        paths.push({ pts: sp, col });
      });
      photons(ctx, paths, S.t, { w, h, gap: 70 });

      // the object
      arrow(ctx, X(-o.p), cy, X(-o.p), Y(O), { color: C.amber, width: 3, head: 10, glow: 12 });
      label(ctx, S.touched ? 'ladybird' : 'drag me', X(-o.p), Y(O) - 16, { color: C.amber, size: 11, bg: C.bgLabel });
      if (!S.touched) pulseRing(ctx, X(-o.p), Y(O), S.t);

      // distances
      dimLine(ctx, X(-o.p), xL, cy + 34, C.amber, narrow ? `p = ${o.p.toFixed(2)}` : `p = ${o.p.toFixed(2)} cm`);
      if (o.virt && o.q <= span && !narrow && cy + 56 < h - 18) dimLine(ctx, X(-o.q), xL, cy + 56, C.violet, `q = ${o.q.toFixed(1)} cm`);
    }

    function drawSee() {
      const { ctx, w, h } = SC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const o = optics();
      const narrow = w < 520;
      const R = Math.min(h * 0.36, w * 0.2);
      const cyy = h / 2 - 8;
      const K = 0.36 * R / o.alpha;                   // px per radian of visual angle
      let blur = 0, flip = false, note = '';
      if (o.real) { blur = 0.02 * K; flip = true; note = narrow ? 'upside-down' : 'blurred & upside-down'; }
      else if (o.tooClose) { blur = K * 0.4 * (1 / o.q - 1 / D) * 0.6; note = narrow ? 'blurred' : 'too close to focus: blurred'; }
      const views = [
        { cx: w * 0.27, title: narrow ? 'Naked eye' : 'Naked eye · ladybird at 25 cm', ang: o.alpha, blur: 0, flip: false, tag: '1 ×' },
        { cx: w * 0.73, title: narrow ? 'Through lens' : 'Through the lens', ang: o.beta, blur, flip, tag: o.real ? '—' : `${o.M.toFixed(1)} ×` }
      ];
      views.forEach((v, i) => {
        ctx.save();
        ctx.beginPath(); ctx.arc(v.cx, cyy, R, 0, Math.PI * 2); ctx.clip();
        const Lp = K * v.ang;
        if (v.blur > 0.3) ctx.filter = `blur(${v.blur.toFixed(1)}px)`;
        // a leaf, magnified along with the ladybird
        const g = ctx.createRadialGradient(v.cx, cyy, R * 0.1, v.cx, cyy, R * 1.1);
        g.addColorStop(0, '#4f8f3f'); g.addColorStop(1, '#173a1b');
        ctx.fillStyle = g; ctx.fillRect(v.cx - R - 20, cyy - R - 20, 2 * R + 40, 2 * R + 40);
        ctx.strokeStyle = 'rgba(200,255,170,.25)'; ctx.lineWidth = Math.max(1, Lp * 0.03);
        ctx.beginPath(); ctx.moveTo(v.cx - 3 * R, cyy + Lp * 0.9); ctx.lineTo(v.cx + 3 * R, cyy + Lp * 0.9 - 0.4 * R);
        for (let k = -6; k <= 6; k++) { const bx = v.cx + k * Lp * 1.1; ctx.moveTo(bx, cyy + Lp * 0.9 - (bx - v.cx + 3 * R) / (6 * R) * 0.4 * R); ctx.lineTo(bx + Lp * 0.7, cyy - Lp * 1.2); }
        ctx.stroke();
        drawLadybird(ctx, v.cx, cyy, Lp, v.flip);
        ctx.filter = 'none';
        ctx.restore();
        ctx.save(); ctx.strokeStyle = i ? 'rgba(255,95,168,.8)' : 'rgba(95,227,255,.7)'; ctx.lineWidth = 3;
        ctx.shadowColor = ctx.strokeStyle; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(v.cx, cyy, R, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        label(ctx, v.title, v.cx, cyy + R + 15, { color: i ? C.pink : C.cyan, size: 11 });
        label(ctx, v.tag, v.cx, cyy + R - 16, { color: '#fff', size: 12, weight: 600, bg: C.bgLabel });
        if (i && note) label(ctx, note, v.cx, cyy + R - 38, { color: C.red, size: 11, bg: C.bgLabel });
      });
      label(ctx, '→', w / 2, cyy, { color: C.muted, size: 22, font: 'head' });
    }

    function update() {
      const o = optics();
      ro.p.textContent = `${o.p.toFixed(2)} cm`;
      ro.f.textContent = `${S.f.toFixed(1)} cm`;
      ro.a.textContent = deg(o.alpha);
      ro.b.textContent = deg(o.beta);
      ro.max.textContent = `${o.Mmax.toFixed(2)} ×`;
      if (o.real) { ro.q.textContent = `${o.q.toFixed(1)} cm (real)`; ro.M.textContent = '—'; ro.M.className = 'ro-v bad'; }
      else {
        ro.q.textContent = o.inf ? '∞' : `${o.q.toFixed(1)} cm (virtual)`;
        ro.M.textContent = `${o.M.toFixed(2)} ×`;
        ro.M.className = 'ro-v ' + (o.near ? 'good' : o.tooClose ? 'bad' : '');
      }
      if (o.real)
        setStatus(status, 'bad', `<b>Object outside F.</b> The rays converge after the lens to a real, inverted image <em>behind your eye</em>, so all you see is a blurred, upside-down smudge. Move the object inside F.`);
      else if (o.inf)
        setStatus(status, 'good', `<b>Object at F, so the image is at infinity.</b> The rays leave the lens parallel and your eye can fully relax. M = d/f = ${(D / S.f).toFixed(2)}, a little less than the near-point value.`);
      else if (o.tooClose)
        setStatus(status, 'bad', `<b>Image closer than the near point</b> (q = ${o.q.toFixed(1)} cm &lt; 25 cm). β is bigger, but your eye can't focus that close, so it's blurred (remember Lesson 1). Move the object slightly <em>away</em> from the lens.`);
      else if (o.near)
        setStatus(status, 'good', `<b>Image at the near point!</b> This is the normal way to use a magnifier: the biggest image you can still see sharply. M = d/p = 1 + d/f = <b>${o.Mmax.toFixed(2)}</b>.`);
      else
        setStatus(status, 'info', `<b>Virtual, erect, magnified image</b> at q = ${o.q.toFixed(1)} cm, beyond the near point, so it's seen clearly. M = d/p = ${o.M.toFixed(2)}. Move the object a little closer to the lens to raise M to its maximum.`);

      if (o.near) complete('l2-mag-near', { el: $('[data-check="l2-mag-near"]', root), msg: 'Image at the near point!' });
      if (o.near && Math.abs(S.f - 5) < 0.01) complete('l2-mag-six', { el: $('[data-check="l2-mag-six"]', root), msg: 'Six times bigger, just like the book!' });
      if (o.inf) complete('l2-mag-inf', { el: $('[data-check="l2-mag-inf"]', root), msg: 'Relaxed eye: M = d/f' });
      drawMain(); drawSee();
    }

    const pR = bindRange(pInput, v => { S.p = v; S.touched = true; update(); });
    const fInput = $('#mag-f');
    const fR = bindRange(fInput, v => setF(v));
    function setF(v) {
      S.f = v; fR.set(v);
      pInput.max = pMax();
      if (S.p > pMax()) S.p = pMax();
      pR.set(S.p); update();
    }
    function setP(v) { S.p = clamp(v, 0.5, pMax()); S.touched = true; pR.set(S.p); update(); }
    $$('[data-mag]', root).forEach(b => b.addEventListener('click', () => setP(b.dataset.mag === 'inf' ? S.f : S.f * D / (S.f + D))));
    $$('[data-mag-jump]').forEach(b => b.addEventListener('click', () => { setF(5); setP(5 * D / (5 + D)); }));
    drag(MC.canvas, {
      hit: (x, y) => geo && Math.abs(x - geo.X(-S.p)) < 22 && y > geo.Y(1) - 26 && y < geo.cy + 12,
      move: x => { setP(Math.round((geo.xL - x) / geo.sc * 100) / 100); }
    });
    animateWhileVisible(root, (dt, t) => { S.t = t; drawMain(); });
    pInput.max = pMax();
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 2 · The watchmaker's loupe
     ===================================================== */
  (function loupeLab() {
    const root = $('#lab-loupe'); if (!root) return;
    const SERIAL = '7316';
    const S = { f: 5, x: null, y: null, moved: false, t: 0, used: new Set() };
    let ready = false;
    const cv = $('#loupe-canvas');
    const LC = fitCanvas(cv, () => ready && draw());
    const ro = { M: $('#loupe-M'), p: $('#loupe-p') };
    const RIM = 'THE SMALLER THE FOCAL LENGTH, THE GREATER THE MAGNIFICATION  ·  M = 1 + d/f  ·  ';

    function gear(ctx, x, y, r, n, rot) {
      const th = r * 0.09, w1 = Math.PI / n * 0.55, w2 = Math.PI / n * 0.32;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = rot + i * 2 * Math.PI / n;
        const pt = (rr, aa) => ctx.lineTo(x + rr * Math.cos(aa), y + rr * Math.sin(aa));
        pt(r - th, a - w1); pt(r, a - w2); pt(r, a + w2); pt(r - th, a + w1);
      }
      ctx.closePath();
      const g = ctx.createRadialGradient(x - r * .3, y - r * .3, r * .1, x, y, r);
      g.addColorStop(0, '#ffe3a0'); g.addColorStop(.6, '#d9a441'); g.addColorStop(1, '#9b6a17');
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = 'rgba(80,50,10,.6)'; ctx.lineWidth = 1; ctx.stroke();
      // spoke windows
      ctx.fillStyle = 'rgba(40,28,10,.75)';
      for (let k = 0; k < 5; k++) {
        const a0 = rot + k * 2 * Math.PI / 5 + 0.2, a1 = a0 + 2 * Math.PI / 5 - 0.4;
        ctx.beginPath(); ctx.arc(x, y, r * 0.74, a0, a1); ctx.arc(x, y, r * 0.3, a1, a0, true); ctx.closePath(); ctx.fill();
      }
      jewel(ctx, x, y, Math.max(5, r * 0.08));
    }
    function jewel(ctx, x, y, r) {
      ctx.fillStyle = '#c9ccd6'; ctx.beginPath(); ctx.arc(x, y, r * 1.7, 0, Math.PI * 2); ctx.fill();
      const g = ctx.createRadialGradient(x - r * .3, y - r * .3, r * .1, x, y, r);
      g.addColorStop(0, '#ff8a9a'); g.addColorStop(.6, '#d0102c'); g.addColorStop(1, '#6d0012');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.beginPath(); ctx.arc(x - r * .35, y - r * .35, r * .25, 0, Math.PI * 2); ctx.fill();
    }
    function screw(ctx, x, y, r, rot) {
      const g = ctx.createRadialGradient(x - r * .3, y - r * .3, r * .1, x, y, r);
      g.addColorStop(0, '#6f8ff0'); g.addColorStop(.7, '#2441a0'); g.addColorStop(1, '#0d1a48');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#08102c'; ctx.lineWidth = r * 0.28; ctx.lineCap = 'butt';
      ctx.beginPath(); ctx.moveTo(x - r * Math.cos(rot), y - r * Math.sin(rot)); ctx.lineTo(x + r * Math.cos(rot), y + r * Math.sin(rot)); ctx.stroke();
    }
    function engrave(ctx, text, x, y, size, { font = '"Space Grotesk", sans-serif', weight = 600, align = 'center', spacing = 0 } = {}) {
      ctx.save();
      ctx.font = `${weight} ${size}px ${font}`; ctx.textAlign = align; ctx.textBaseline = 'middle';
      if ('letterSpacing' in ctx && spacing) ctx.letterSpacing = `${spacing}px`;
      ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.fillText(text, x + size * 0.04, y + size * 0.05);
      ctx.fillStyle = 'rgba(40,46,62,.92)'; ctx.fillText(text, x, y);
      ctx.restore();
    }

    function scene(ctx, W, H) {
      const cx = W / 2, cy = H / 2, R = Math.min(440, H / 2 - 26, W / 2 - 40);
      let g = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, W);
      g.addColorStop(0, '#1d2446'); g.addColorStop(1, '#060915');
      ctx.fillStyle = g; ctx.fillRect(-20, -20, W + 40, H + 40);
      // case
      g = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      g.addColorStop(0, '#f6dda2'); g.addColorStop(.5, '#a87b2b'); g.addColorStop(1, '#f2d38d');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R + 22, 0, Math.PI * 2); ctx.fill();
      // main plate with circular graining
      g = ctx.createRadialGradient(cx - R * .3, cy - R * .35, 10, cx, cy, R);
      g.addColorStop(0, '#f1f3f8'); g.addColorStop(1, '#929bb0');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 1.2;
      for (let r = 14; r < R; r += 9) { ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke(); }
      // micro-text around the rim (only readable when magnified)
      ctx.save();
      ctx.font = '600 7px "JetBrains Mono", monospace'; ctx.fillStyle = 'rgba(40,46,62,.85)'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const rr = R - 12, step = 5.2 / rr;
      let k = 0;
      for (let a = Math.PI * 1.05; a < Math.PI * 1.95; a += step, k++) {
        const ch = RIM[k % RIM.length];
        ctx.save(); ctx.translate(cx + rr * Math.cos(a), cy + rr * Math.sin(a)); ctx.rotate(a + Math.PI / 2); ctx.fillText(ch, 0, 0); ctx.restore();
      }
      ctx.restore();
      // gear train
      gear(ctx, cx - 0.36 * R, cy + 0.12 * R, 0.28 * R, 60, 0.1);
      gear(ctx, cx + 0.03 * R, cy - 0.04 * R, 0.17 * R, 40, 0.3);
      gear(ctx, cx - 0.04 * R, cy + 0.5 * R, 0.13 * R, 32, 0.0);
      gear(ctx, cx + 0.2 * R, cy + 0.36 * R, 0.09 * R, 15, 0.2);
      // top bridge
      g = ctx.createLinearGradient(0, cy - 0.8 * R, 0, cy);
      g.addColorStop(0, '#e6e9f0'); g.addColorStop(1, '#a3abbd');
      ctx.beginPath();
      ctx.moveTo(cx - 0.84 * R, cy - 0.4 * R); ctx.quadraticCurveTo(cx, cy - 0.82 * R, cx + 0.84 * R, cy - 0.4 * R);
      ctx.lineTo(cx + 0.64 * R, cy - 0.12 * R); ctx.quadraticCurveTo(cx, cy - 0.36 * R, cx - 0.64 * R, cy - 0.12 * R); ctx.closePath();
      ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.strokeStyle = 'rgba(60,66,84,.5)'; ctx.lineWidth = 1; ctx.stroke();
      engrave(ctx, 'LUMEN', cx, cy - 0.5 * R, 0.085 * R, { spacing: 6 });
      engrave(ctx, 'CAL. 10 · SIMPLE MICROSCOPE', cx, cy - 0.415 * R, 0.03 * R, { weight: 500, spacing: 2 });
      jewel(ctx, cx - 0.55 * R, cy - 0.3 * R, 7); jewel(ctx, cx + 0.55 * R, cy - 0.3 * R, 7);
      screw(ctx, cx - 0.72 * R, cy - 0.36 * R, 13, 0.6); screw(ctx, cx + 0.72 * R, cy - 0.36 * R, 13, 2.1); screw(ctx, cx, cy - 0.68 * R, 13, 1.2);
      // balance wheel + hairspring
      const bx = cx + 0.46 * R, by = cy + 0.24 * R, br = 0.25 * R;
      ctx.strokeStyle = '#c99434'; ctx.lineWidth = 0.05 * R;
      ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 0.02 * R;
      for (let i = 0; i < 3; i++) { const a = i * 2 * Math.PI / 3 + 0.4; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + br * Math.cos(a), by + br * Math.sin(a)); ctx.stroke(); }
      for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; ctx.fillStyle = '#e8c070'; ctx.beginPath(); ctx.arc(bx + br * Math.cos(a), by + br * Math.sin(a), 0.014 * R, 0, Math.PI * 2); ctx.fill(); }
      ctx.strokeStyle = '#3b5bd6'; ctx.lineWidth = 0.9; ctx.beginPath();
      for (let a = 0; a < Math.PI * 2 * 9; a += 0.08) { const r = 6 + a * 0.55 * br / (Math.PI * 2 * 9); const x = bx + r * Math.cos(a), y = by + r * Math.sin(a); a ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
      // balance cock
      ctx.save(); ctx.lineCap = 'round';
      ctx.strokeStyle = '#7d869a'; ctx.lineWidth = 0.13 * R + 3; ctx.beginPath(); ctx.moveTo(cx + 0.93 * R, cy + 0.02 * R); ctx.lineTo(bx, by); ctx.stroke();
      g = ctx.createLinearGradient(bx, by - 0.07 * R, bx, by + 0.07 * R);
      g.addColorStop(0, '#eef1f6'); g.addColorStop(1, '#a4acbe');
      ctx.strokeStyle = g; ctx.lineWidth = 0.13 * R; ctx.beginPath(); ctx.moveTo(cx + 0.93 * R, cy + 0.02 * R); ctx.lineTo(bx, by); ctx.stroke();
      ctx.restore();
      jewel(ctx, bx, by, 9); screw(ctx, cx + 0.8 * R, cy + 0.04 * R, 12, 0.3);
      // tiny engravings
      engrave(ctx, 'ADJUSTED · 5 POSITIONS', cx - 0.42 * R, cy + 0.66 * R, 0.022 * R, { weight: 500 });
      engrave(ctx, '17 JEWELS', cx - 0.42 * R, cy + 0.6 * R, 0.035 * R, { spacing: 1 });
      engrave(ctx, 'Nº ' + SERIAL, bx, by + br + 0.075 * R, 5, { font: '"JetBrains Mono", monospace', weight: 600 });
      // lower-left screws & jewels
      screw(ctx, cx - 0.62 * R, cy + 0.38 * R, 11, 1.9); jewel(ctx, cx - 0.2 * R, cy + 0.7 * R, 6); screw(ctx, cx + 0.12 * R, cy + 0.78 * R, 10, 0.9);
    }

    function draw() {
      const { ctx, w, h } = LC; if (!w) return;
      const W = w < 520 ? 1000 : 1600, s = w / W, H = h / s;
      ctx.clearRect(0, 0, w, h);
      ctx.save(); ctx.scale(s, s); scene(ctx, W, H); ctx.restore();
      const M = 1 + D / S.f;
      if (S.x == null || !S.moved) { S.x = w * (0.3 + 0.04 * Math.sin(S.t * 0.8)); S.y = h * (0.45 + 0.05 * Math.cos(S.t * 0.6)); }
      const R = Math.min(w, h) * 0.22, px = S.x, py = S.y;
      // shadow
      ctx.save(); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.filter = 'blur(8px)';
      ctx.beginPath(); ctx.arc(px + 6, py + 10, R + 8, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      // magnified view
      ctx.save();
      ctx.beginPath(); ctx.arc(px, py, R, 0, Math.PI * 2); ctx.clip();
      ctx.translate(px * (1 - M), py * (1 - M)); ctx.scale(s * M, s * M); scene(ctx, W, H);
      ctx.restore();
      // glass + rim
      ctx.save();
      const gl = ctx.createLinearGradient(px - R, py - R, px + R, py + R);
      gl.addColorStop(0, 'rgba(255,255,255,.16)'); gl.addColorStop(.4, 'rgba(255,255,255,0)');
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(px, py, R, 0, Math.PI * 2); ctx.fill();
      const rg = ctx.createLinearGradient(px - R, py - R, px + R, py + R);
      rg.addColorStop(0, '#3a3f52'); rg.addColorStop(.5, '#12151f'); rg.addColorStop(1, '#3a3f52');
      ctx.strokeStyle = rg; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(px, py, R + 6, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = 'rgba(95,227,255,.5)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px, py, R + 12, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
      label(ctx, `${M.toFixed(1)} ×`, px, py + R - 18, { color: '#fff', size: 12, weight: 600, bg: C.bgLabel });
      if (!S.moved) label(ctx, 'move me', px, py - R + 18, { color: C.amber, size: 11, bg: C.bgLabel });
    }

    function setLens(f, btn) {
      S.f = f; S.used.add(f);
      press($('#loupe-lenses'), btn || $(`[data-f="${f}"]`, root));
      const M = 1 + D / f;
      ro.M.textContent = `1 + 25/${f} = ${M.toFixed(1)} ×`;
      ro.p.textContent = `${(D / M).toFixed(2)} cm`;
      if (S.used.size >= 4) complete('l2-loupe-all', { el: $('[data-check="l2-loupe-all"]', root), msg: 'Shortest f, biggest view!' });
      draw();
    }
    const sched = throttle(draw);
    const move = e => {
      const r = cv.getBoundingClientRect();
      S.x = clamp(e.clientX - r.left, 0, r.width); S.y = clamp(e.clientY - r.top, 0, r.height); S.moved = true; sched();
    };
    cv.addEventListener('pointermove', move);
    cv.addEventListener('pointerdown', e => { move(e); try { cv.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } });
    $$('[data-f]', root).forEach(b => b.addEventListener('click', () => setLens(+b.dataset.f, b)));

    const input = $('#loupe-answer'), fb = $('#loupe-fb');
    const check = () => {
      const v = (input.value || '').replace(/\D/g, '');
      if (!v) { fb.className = 'fb'; fb.textContent = ''; return; }
      if (v === SERIAL) {
        fb.className = 'fb ok'; fb.textContent = `Correct! Nº ${SERIAL} is engraved less than a fifth of a millimetre tall.`;
        complete('l2-loupe-serial', { el: $('[data-check="l2-loupe-serial"]', root), msg: 'Watchmaker certified!' });
      } else { fb.className = 'fb no'; fb.textContent = 'Not quite. Try a stronger lens near the balance wheel.'; }
    };
    $('#loupe-check').addEventListener('click', check);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
    if (L.isDone(document.body.dataset.lesson, 'l2-loupe-serial')) { input.value = SERIAL; fb.className = 'fb ok'; fb.textContent = 'Solved ✓'; }

    animateWhileVisible(root, (dt, t) => { if (!S.moved) { S.t = t; draw(); } });
    ready = true;
    S.used.clear(); setLens(5);
    redraws.push(draw);
  })();

  /* =====================================================
     LAB 3 · Q 10.7 solved by ray construction
     ===================================================== */
  (function q107Lab() {
    const box = $('#q107-box'); if (!box) return;
    const S = { stage: 0, M: 5 };
    let ready = false;
    const QC = fitCanvas($('#q107-canvas'), () => ready && draw());
    const Mout = $('#q107-M-out');

    function draw() {
      const { ctx, w, h } = QC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const q = D, M = S.M, p = q / M, f = q / (M - 1), hO = 1, hI = M * hO;
      const xL = w * 0.68, cy = h * 0.84;
      const sc = (xL - 22) / 27;
      const vs = Math.min(3 * sc, (cy - 30) / (hI + 0.6));      // vertical scale (heights stretched for clarity)
      const X = x => xL + x * sc, Y = y => cy - y * vs;
      const st = S.stage;
      // graph paper (1 cm squares)
      ctx.strokeStyle = 'rgba(140,160,255,.07)'; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = Math.ceil(-xL / sc); x * sc + xL < w; x++) { ctx.moveTo(X(x), 0); ctx.lineTo(X(x), h); }
      for (let y = Math.floor((cy - h) / vs); y * vs < cy; y++) { ctx.moveTo(0, Y(y)); ctx.lineTo(w, Y(y)); }
      ctx.stroke();
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      drawLens(ctx, xL, cy, Math.min(cy - 14, Math.max(hI, 3) * vs * 0.55 + 30), 10);
      if (vs > sc * 1.2) label(ctx, 'heights not to scale', w - 10, 16, { size: 10, align: 'right' });
      label(ctx, 'O', xL + 14, cy + 14, { color: C.cyan, size: 12, weight: 600 });
      if (st === 0) label(ctx, 'Press “Start construction” below', w / 2 - 40, cy / 2, { color: C.muted, size: 13 });

      if (st >= 1) {
        arrow(ctx, X(-q), cy, X(-q), Y(hI), { color: C.violet, width: 2.5, head: 11, dashed: true, glow: 10 });
        label(ctx, `image: ${M}× taller`, X(-q) + 8, Y(hI) + 4, { color: C.violet, size: 11, align: 'left', bg: C.bgLabel });
        dimLine(ctx, X(-q), xL, cy + 18, C.violet, 'q = 25 cm');
      }
      if (st >= 2) {
        dashLine(ctx, X(-q), Y(hI), X(-p), Y(hO), 'rgba(95,227,255,.6)');
        glowLine(ctx, X(-p), Y(hO), xL, cy, C.cyan, 2, 8);
        glowLine(ctx, xL, cy, X(4), Y(-4 * hO / p), C.cyan, 2, 8);
        arrow(ctx, X(-p), cy, X(-p), Y(hO), { color: C.amber, width: 3, head: 10, glow: 12 });
        label(ctx, `object · p = ${+p.toFixed(2)} cm`, X(-p), Y(hO) - 16, { color: C.amber, size: 11, bg: C.bgLabel });
      }
      if (st >= 3) glowLine(ctx, X(-p), Y(hO), xL, Y(hO), C.amber, 2, 8);
      if (st >= 4) {
        dashLine(ctx, X(-q), Y(hI), xL, Y(hO), 'rgba(255,198,92,.6)');
        const xr = (w - xL) / sc;
        glowLine(ctx, xL, Y(hO), X(xr), Y(hO - hO * xr / f), C.amber, 2, 8);
        ctx.save(); ctx.fillStyle = C.green; ctx.shadowColor = C.green; ctx.shadowBlur = 16;
        ctx.beginPath(); ctx.arc(X(f), cy, 5, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        label(ctx, 'F', X(f), cy - 16, { color: C.green, size: 13, weight: 700 });
      }
      if (st >= 5) dimLine(ctx, xL, X(f), cy + 18, C.green, `f = ${+f.toFixed(2)} cm`);
    }

    box.addEventListener('steps:change', e => {
      S.stage = e.detail.step;
      box.classList.toggle('done', e.detail.step >= e.detail.total);
      if (e.detail.step < e.detail.total && S.M !== 5) { S.M = 5; mR.set(5); Mout.textContent = '5 ×'; }
      draw();
    });
    const mR = bindRange($('#q107-M'), v => {
      S.M = v; Mout.textContent = `${v} ×  →  f = 25/(${v} − 1) = ${(25 / (v - 1)).toFixed(2)} cm`; draw();
    });
    ready = true; draw();
    redraws.push(draw);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
