/* =========================================================
   Chapter 10 · Lesson 1 · Seeing Clearly — interactive labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const { $, $$, clamp, sci, fitCanvas, drag, animateWhileVisible, bindRange, wavelengthRGB, rgba, colourName, arrow, label, complete } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', grid: 'rgba(140,160,255,.08)', axis: 'rgba(140,160,255,.38)', bgLabel: 'rgba(5,9,21,.8)'
  };
  const redraws = [];

  function setStatus(el, state, html) { el.dataset.state = state; el.lastElementChild.innerHTML = html; }
  function press(group, btn) { $$('[aria-pressed]', group).forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')); }
  function throttle(fn) { let q = false; return () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; fn(); }); }; }
  function glowLine(ctx, x1, y1, x2, y2, color, width = 2, blur = 10) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round';
    ctx.shadowColor = color; ctx.shadowBlur = blur;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
  }
  function dashLine(ctx, x1, y1, x2, y2, color, width = 1.4, dash = [6, 5]) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
  }
  function dimLine(ctx, x1, x2, y, color, text) {
    if (Math.abs(x2 - x1) < 4) return;
    ctx.save(); ctx.strokeStyle = color; ctx.globalAlpha = .7; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y);
    ctx.moveTo(x1, y - 5); ctx.lineTo(x1, y + 5); ctx.moveTo(x2, y - 5); ctx.lineTo(x2, y + 5); ctx.stroke(); ctx.restore();
    label(ctx, text, (x1 + x2) / 2, y, { color, size: 11, bg: C.bgLabel });
  }
  function pulseRing(ctx, x, y, t, color = C.amber) {
    const f = (t % 1.6) / 1.6;
    ctx.save(); ctx.strokeStyle = color; ctx.globalAlpha = 1 - f; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, 8 + f * 16, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  }

  /* =====================================================
     LAB 1 · Near point, angle subtended, accommodation
     ===================================================== */
  (function eyeLab() {
    const root = $('#lab-eye'); if (!root) return;
    const H = 3;          // card height (cm)
    const VR = 2.0;       // lens → retina (cm)
    const PUPIL = 0.4;    // pupil diameter (cm)
    const PIN = 0.1;      // pinhole diameter (cm)
    const XP = 0.42;      // pinhole distance in front of eye lens (cm)
    const S = { u: 50, d: 25, pin: false, touched: false, t: 0 };
    let ready = false, geo = null;

    const card = $('#eye-card'), view = $('#eye-view'), status = $('#eye-status');
    const ro = { th: $('#eye-theta'), ret: $('#eye-ret'), eff: $('#eye-effort'), foc: $('#eye-focus'), u: $('#eye-u-out') };
    const W = fitCanvas($('#eye-world'), () => ready && update());
    const Z = fitCanvas($('#eye-zoom'), () => ready && update());

    function optics() {
      const { u, d, pin } = S;
      const P0 = 1 / VR, Pmax = 1 / d + 1 / VR, Pneed = 1 / u + 1 / VR;
      const P = Math.min(Pneed, Pmax);
      const v = 1 / (P - 1 / u);                       // where the eye actually focuses
      const Aeff = pin ? PIN * u / (u - XP) : PUPIL;   // width of the ray bundle at the lens
      const blur = Aeff * Math.abs(v - VR) / v;        // blur-spot diameter on the retina (cm)
      const theta = Math.atan(H / u);
      return {
        u, d, pin, P, P0, Pmax, v, blur, theta,
        ratio: (blur / VR) / theta,                     // blur relative to the card's size
        ret: VR * H / u, inFocus: Pneed <= Pmax + 1e-9,
        effort: (P - P0) / (Pmax - P0)
      };
    }
    const quality = o => o.ratio < 0.004 ? 'sharp' : o.ratio < 0.022 ? 'soft' : 'blurred';

    function drawWorld(o) {
      const { ctx, w, h } = W; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const xEye = w - 34, xL = xEye - 16, left = 22, cy = Math.round(h * 0.62);
      const sx = (xL - left) / 100;
      const X = u => xL - u * sx;
      const ev = Math.max(1, 22 / (H * sx));
      const hp = H * sx * ev;
      geo = { X, sx, xL, cy, hp };

      // "too close" zone + near point
      const xd = X(o.d);
      let g = ctx.createLinearGradient(xd, 0, xL, 0);
      g.addColorStop(0, 'rgba(255,107,122,0.03)'); g.addColorStop(1, 'rgba(255,107,122,0.17)');
      ctx.fillStyle = g; ctx.fillRect(xd, 0, xL - xd, h);
      if (xL - xd > 150) label(ctx, 'too close → blurred', (xd + xL) / 2, 18, { color: 'rgba(255,107,122,.9)', size: 11 });
      dashLine(ctx, xd, 30, xd, cy + 6, 'rgba(255,107,122,.8)', 1.2, [5, 5]);
      const npText = w < 520 ? `d = ${o.d} cm` : `near point · d = ${o.d} cm`;
      const npLeft = xd - left > (w < 520 ? 80 : 180);
      label(ctx, npText, npLeft ? xd - 8 : xd + 8, 44, { color: C.red, size: 11, align: npLeft ? 'right' : 'left' });

      // distance axis
      ctx.strokeStyle = C.axis; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(left, cy); ctx.lineTo(xL, cy); ctx.stroke();
      for (let k = 0; k <= 100; k += 10) {
        const x = X(k);
        ctx.beginPath(); ctx.moveTo(x, cy); ctx.lineTo(x, cy + 5); ctx.stroke();
        if (k > 0 && (sx > 4.5 || k % 20 === 0)) label(ctx, k === 10 && sx > 4.5 ? '10 cm' : String(k), x, cy + 17, { size: 10 });
      }

      // the angle wedge
      const xc = X(o.u), top = cy - hp;
      g = ctx.createLinearGradient(xc, 0, xL, 0);
      g.addColorStop(0, 'rgba(255,95,168,.25)'); g.addColorStop(1, 'rgba(255,95,168,.05)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.moveTo(xc, top); ctx.lineTo(xL, cy); ctx.lineTo(xc, cy); ctx.closePath(); ctx.fill();
      glowLine(ctx, xc, top, xL, cy, C.pink, 1.6, 8);
      glowLine(ctx, xc, cy, xL, cy, C.cyan, 1.6, 8);
      const phi = Math.atan2(hp, xL - xc);
      const ar = Math.min(54, (xL - xc) * 0.62);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(xL, cy, ar, Math.PI, Math.PI + phi); ctx.stroke();
      const lr = ar + 13;
      label(ctx, 'θ', xL - lr * Math.cos(phi / 2), cy - lr * Math.sin(phi / 2) - 2, { color: '#fff', size: 16, font: 'serif', weight: 400 });

      // the card (seen edge-on) + drag handle
      ctx.save(); ctx.shadowColor = 'rgba(255,240,210,.7)'; ctx.shadowBlur = 12;
      ctx.fillStyle = '#f6f1e6'; ctx.fillRect(xc - 3, top, 6, hp); ctx.restore();
      ctx.fillStyle = C.amber; ctx.beginPath(); ctx.arc(xc, top - 10, 6, 0, Math.PI * 2); ctx.fill();
      if (!S.touched) pulseRing(ctx, xc, top - 10, S.t);
      label(ctx, S.touched ? 'card' : 'drag me', xc, top - 26, { color: C.amber, size: 11 });

      // the eye (looking left)
      const ex = xEye + 2;
      const rg = ctx.createRadialGradient(ex - 5, cy - 5, 2, ex, cy, 18);
      rg.addColorStop(0, '#ffffff'); rg.addColorStop(1, '#a9b4dc');
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(ex, cy, 17, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#23a6c9'; ctx.beginPath(); ctx.ellipse(ex - 13, cy, 3.6, 8, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#05080f'; ctx.beginPath(); ctx.ellipse(ex - 14.6, cy, 1.8, 3.8, 0, 0, Math.PI * 2); ctx.fill();

      // distance u
      dimLine(ctx, xc, xL, h - 14, C.amber, `u = ${o.u.toFixed(1)} cm`);
    }

    function drawZoom(o) {
      const { ctx, w, h } = Z; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const Sc = Math.min(h / 2.9, w / 3.9);
      const cy = h / 2 + 6, lx = w * 0.3;
      const ex = lx + 0.88 * Sc, er = 1.12 * Sc, rIn = er - 2;
      const Xz = x => lx + x * Sc, Y = y => cy - y * Sc;

      // eyeball
      let g = ctx.createRadialGradient(ex - er * .3, cy - er * .3, er * .1, ex, cy, er);
      g.addColorStop(0, 'rgba(70,90,160,.32)'); g.addColorStop(1, 'rgba(18,26,58,.6)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(ex, cy, er, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(200,210,255,.28)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(lx + 0.22 * Sc, cy, 0.52 * Sc, Math.PI * 0.74, Math.PI * 1.26);
      ctx.strokeStyle = 'rgba(200,210,255,.4)'; ctx.stroke();
      // retina
      ctx.save(); ctx.strokeStyle = 'rgba(255,95,168,.7)'; ctx.lineWidth = 4; ctx.shadowColor = C.pink; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.arc(ex, cy, rIn, -0.95, 0.95); ctx.stroke(); ctx.restore();
      label(ctx, 'retina', ex + er * Math.cos(.95) + 6, cy + er * Math.sin(.95) + 10, { color: C.pink, size: 11, align: 'left' });
      // iris
      ctx.strokeStyle = '#c98b3f'; ctx.lineWidth = 5; ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(Xz(-0.07), Y(PUPIL / 2 + 0.02)); ctx.lineTo(Xz(-0.07), Y(0.52));
      ctx.moveTo(Xz(-0.07), Y(-PUPIL / 2 - 0.02)); ctx.lineTo(Xz(-0.07), Y(-0.52));
      ctx.stroke();
      // eye lens — gets fatter as the eye works harder
      const t = (0.05 + (o.P - o.P0) * 1.15) * Sc;
      ctx.save();
      ctx.beginPath(); ctx.ellipse(lx, cy, t, 0.4 * Sc, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(95,227,255,.2)'; ctx.fill();
      ctx.strokeStyle = o.effort > 0.999 ? C.red : C.cyan; ctx.lineWidth = 1.6;
      ctx.shadowColor = ctx.strokeStyle; ctx.shadowBlur = 10; ctx.stroke(); ctx.restore();
      label(ctx, o.effort > 0.999 ? 'lens at its limit' : 'eye lens', lx, Y(0.52) - 16, { color: o.effort > 0.999 ? C.red : C.cyan, size: 11 });
      // pinhole sheet
      if (o.pin) {
        const xp = Xz(-XP);
        ctx.strokeStyle = '#efe7d4'; ctx.lineWidth = 4; ctx.lineCap = 'butt';
        ctx.beginPath();
        ctx.moveTo(xp, Y(PIN / 2)); ctx.lineTo(xp, Y(1.0));
        ctx.moveTo(xp, Y(-PIN / 2)); ctx.lineTo(xp, Y(-1.0)); ctx.stroke();
        label(ctx, 'pinhole', xp, Y(-1.0) + 14, { color: '#efe7d4', size: 11 });
      }

      // rays from the card's base (cyan) and top (pink)
      const x0 = -lx / Sc;
      const bundles = [{ y0: 0, col: C.cyan }, { y0: H, col: C.pink }];
      const N = 7;
      const spots = [];
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.lineWidth = 1.25; ctx.lineCap = 'round';
      bundles.forEach((b, bi) => {
        const yi = -b.y0 * o.v / o.u;   // where this point actually focuses
        const hits = [];
        for (let k = 0; k < N; k++) {
          const a = -1 + 2 * k / (N - 1);
          let yl;
          if (o.pin) { const yp = a * PIN / 2; yl = yp + (yp - b.y0) / (o.u - XP) * XP; }
          else yl = a * PUPIL / 2;
          const s = (yl - b.y0) / o.u;
          const yin = yl + s * x0;
          // meet the curved retina
          let yr = yl + (yi - yl) * VR / o.v;
          const dy = yr * Sc;
          const xr = ex + Math.sqrt(Math.max(0, rIn * rIn - dy * dy));
          const xrCm = (xr - lx) / Sc;
          yr = yl + (yi - yl) * xrCm / o.v;
          hits.push(yr);
          ctx.strokeStyle = b.col; ctx.globalAlpha = 0.55;
          ctx.beginPath(); ctx.moveTo(0, Y(yin)); ctx.lineTo(lx, Y(yl)); ctx.lineTo(xr, Y(yr)); ctx.stroke();
          if (!o.inFocus && bi === 0 && (k === 0 || k === N - 1)) {
            ctx.globalAlpha = 0.35; ctx.setLineDash([3, 4]);
            ctx.beginPath(); ctx.moveTo(xr, Y(yr)); ctx.lineTo(Xz(o.v), Y(yi)); ctx.stroke(); ctx.setLineDash([]);
          }
        }
        const lo = Math.min(...hits), hi = Math.max(...hits);
        spots.push({ lo, hi, col: b.col });
      });
      ctx.restore();

      // spots / blur patches on the retina
      const xr0 = ex + rIn;
      spots.forEach(sp => {
        ctx.save(); ctx.shadowColor = sp.col; ctx.shadowBlur = 14; ctx.fillStyle = sp.col; ctx.strokeStyle = sp.col;
        if ((sp.hi - sp.lo) * Sc < 2.5) { ctx.beginPath(); ctx.arc(xr0 - 1, Y((sp.lo + sp.hi) / 2), 3.4, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.globalAlpha = .85; ctx.beginPath(); ctx.moveTo(xr0 - 1, Y(sp.lo)); ctx.lineTo(xr0 - 1, Y(sp.hi)); ctx.stroke(); }
        ctx.restore();
      });
      if (o.inFocus) {
        const yt = -H * VR / o.u;
        glowLine(ctx, xr0 + 7, Y(0), xr0 + 7, Y(yt), C.green, 3, 10);
        label(ctx, 'image', xr0 + 12, Y(yt / 2), { color: C.green, size: 11, align: 'left' });
      } else {
        const fx = Xz(o.v);
        if (fx < w - 8) {
          ctx.strokeStyle = C.red; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(fx - 5, Y(0) - 5); ctx.lineTo(fx + 5, Y(0) + 5); ctx.moveTo(fx + 5, Y(0) - 5); ctx.lineTo(fx - 5, Y(0) + 5); ctx.stroke();
          label(ctx, 'focus', fx, Y(0) - 14, { color: C.red, size: 11 });
        }
      }
      const msg = o.inFocus ? '✓ focused on the retina' : 'focus falls behind the retina';
      label(ctx, msg, 12, h - 14, { color: o.inFocus ? C.green : C.red, size: 11, align: 'left', bg: C.bgLabel });
    }

    function drawView(o) {
      const vh = view.clientHeight || 240;
      const K = 0.46 * vh / Math.atan(H / 25);         // px per radian of visual angle
      const scale = K * o.theta / 100;                  // card is 100 px tall at scale 1
      const blurPx = K * o.blur / VR;
      const sigma = 0.45 * blurPx / Math.max(scale, 0.05);
      card.style.transform = `scale(${scale.toFixed(4)})`;
      card.style.filter = `blur(${sigma.toFixed(2)}px)` + (o.pin ? ' brightness(.5)' : '');
    }

    function update() {
      const o = optics();
      ro.u.textContent = `${o.u.toFixed(1)} cm`;
      drawWorld(o); drawZoom(o); drawView(o);
      ro.th.textContent = (o.theta * 180 / Math.PI).toFixed(1) + '°';
      ro.ret.textContent = (o.ret * 10).toFixed(2) + ' mm';
      const maxed = o.effort > 0.999;
      ro.eff.textContent = Math.round(o.effort * 100) + '%' + (maxed ? ' · max' : '');
      ro.eff.className = 'ro-v' + (maxed ? ' warn' : '');
      const q = quality(o);
      ro.foc.textContent = q === 'sharp' ? 'Sharp' : q === 'soft' ? (o.pin && !o.inFocus ? 'Readable (pinhole)' : 'Slightly soft') : 'Blurred';
      ro.foc.className = 'ro-v ' + (q === 'sharp' ? 'good' : q === 'soft' ? 'warn' : 'bad');

      if (o.inFocus && Math.abs(o.u - o.d) <= 0.75)
        setStatus(status, 'good', `<b>Best view!</b> At the near point the card makes the <b>largest angle</b> it can while still being sharp. This is the maximum size the naked eye can see.`);
      else if (o.inFocus)
        setStatus(status, 'info', `Sharp: the eye lens focuses it easily. Bring the card <b>closer</b> to make θ bigger, so it looks bigger.`);
      else if (o.pin && q !== 'blurred')
        setStatus(status, 'good', `<b>Pinhole trick!</b> The tiny opening lets in only a narrow bundle of rays, so the blur spot on the retina is tiny. The close-up (bigger) card is readable, but dimmer.`);
      else if (o.pin)
        setStatus(status, 'bad', `Too close even for the pinhole: the blur spot is still too big. Move back a little.`);
      else if (q === 'soft')
        setStatus(status, 'edge', `Just inside the near point: the image is starting to go soft.`);
      else
        setStatus(status, 'bad', `<b>Too close!</b> The eye lens is already bulging as much as it can (100% effort), so the image forms <b>behind</b> the retina and looks <b>blurred</b>.`);

      if (!o.pin && o.d === 25 && Math.abs(o.u - o.d) <= 0.75) complete('l1-eye-near', { el: $('[data-check="l1-eye-near"]', root), msg: 'You found the near point!' });
      if (o.d === 100 && o.u <= 30) complete('l1-eye-age', { el: $('[data-check="l1-eye-age"]', root), msg: 'Now you see why reading glasses exist!' });
      if (o.pin && o.u <= o.d / 2 + 0.01 && q !== 'blurred') complete('l1-eye-pin', { el: $('[data-check="l1-eye-pin"]', root), msg: 'Pinhole trick confirmed!' });
    }

    const uR = bindRange($('#eye-u'), v => { S.u = v; S.touched = true; update(); });
    $$('[data-near]', root).forEach(b => b.addEventListener('click', () => { S.d = +b.dataset.near; press($('#eye-near'), b); update(); }));
    $('#eye-pin').addEventListener('change', e => { S.pin = e.target.checked; update(); });
    drag(W.canvas, {
      hit: () => !!geo,
      move: x => {
        S.u = clamp(Math.round((geo.xL - x) / geo.sx * 2) / 2, 5, 100);
        S.touched = true; uR.set(S.u); update();
      }
    });
    animateWhileVisible(root, (dt, t) => { if (!S.touched) { S.t = t; drawWorld(optics()); } });
    if ('ResizeObserver' in window) new ResizeObserver(() => ready && drawView(optics())).observe(view);
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 2 · Convex lens image builder (Fig. 10.1)
     ===================================================== */
  (function lensLab() {
    const root = $('#lab-lens'); if (!root) return;
    const S = { p: 13, f: 5, ho: 3, touched: false, t: 0 };
    const vw = () => 3.6 * S.f;      // half-width of the view (cm): always shows 2F with room to spare
    const pMax = () => Math.round(3.4 * S.f * 10) / 10;
    let ready = false, geo = null;
    const M = fitCanvas($('#lens-canvas'), () => ready && draw());
    const G = fitCanvas($('#lens-graph'), () => ready && drawGraph());
    const status = $('#lens-status');
    const ro = { q: $('#lens-q'), m: $('#lens-m'), n: $('#lens-nature'), p: $('#lens-p-out'), f: $('#lens-f-out') };

    function image() {
      const { p, f, ho } = S;
      if (Math.abs(p - f) < 0.05) return { inf: true };
      const q = p * f / (p - f);
      const m = -q / p;
      return { q, m, hi: m * ho, real: q > 0 };
    }

    function rays() {
      const { p, f, ho } = S;
      const xFar = vw() * 1.3;
      const T = [-p, ho];
      const out = [
        { col: C.amber, pts: [T, [0, ho], [xFar, ho - ho * xFar / f]] },
        { col: C.cyan, pts: [T, [0, 0], [xFar, -ho * xFar / p]] }
      ];
      if (Math.abs(p - f) > 0.05) {
        const y3 = -ho * f / (p - f);
        out.push({ col: C.pink, pts: [T, [0, y3], [xFar, y3]], y3 });
      }
      return out;
    }

    function draw() {
      const { ctx, w, h } = M; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const VW = vw(), sc = w / (2 * VW), cx = w / 2, cy = h / 2;
      const X = x => cx + x * sc, Y = y => cy - y * sc;
      geo = { X, Y, sc, cx, cy };
      const { p, f, ho } = S;
      const im = image();

      // grid
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
      const gs = VW > 14 ? 5 : 2;
      for (let x = -Math.floor(VW / gs) * gs; x <= VW; x += gs) { ctx.moveTo(X(x), 0); ctx.lineTo(X(x), h); }
      for (let y = -Math.floor(VW / gs) * gs; y <= VW; y += gs) { ctx.moveTo(0, Y(y)); ctx.lineTo(w, Y(y)); }
      ctx.stroke();
      // principal axis
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      // lens
      const Lh = h * 0.44, tw = clamp(70 / f, 8, 22);
      const lg = ctx.createLinearGradient(cx - tw, 0, cx + tw, 0);
      lg.addColorStop(0, 'rgba(95,227,255,.08)'); lg.addColorStop(.5, 'rgba(95,227,255,.3)'); lg.addColorStop(1, 'rgba(95,227,255,.08)');
      ctx.beginPath(); ctx.moveTo(cx, cy - Lh); ctx.quadraticCurveTo(cx + tw * 2, cy, cx, cy + Lh); ctx.quadraticCurveTo(cx - tw * 2, cy, cx, cy - Lh);
      ctx.fillStyle = lg; ctx.fill(); ctx.strokeStyle = 'rgba(95,227,255,.75)'; ctx.lineWidth = 1.5; ctx.stroke();
      // F and 2F markers
      [[-2, '2F'], [-1, 'F'], [1, 'F'], [2, '2F']].forEach(([k, t]) => {
        const x = X(k * f);
        ctx.fillStyle = C.violet; ctx.beginPath(); ctx.arc(x, cy, 3.5, 0, Math.PI * 2); ctx.fill();
        label(ctx, t, x, cy + 16, { color: C.violet, size: 12, weight: 600 });
      });
      if (w > 520) label(ctx, 'O', cx + tw + 8, cy + 14, { color: C.cyan, size: 12, weight: 600 });

      // rays
      const R = rays();
      const virt = !im.inf && !im.real;
      R.forEach(r => {
        const pts = r.pts.map(([x, y]) => [X(x), Y(y)]);
        ctx.save(); ctx.strokeStyle = r.col; ctx.lineWidth = 2; ctx.shadowColor = r.col; ctx.shadowBlur = 10; ctx.lineJoin = 'round';
        ctx.globalAlpha = .9;
        ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(q => ctx.lineTo(q[0], q[1])); ctx.stroke();
        ctx.restore();
        r.screen = pts;
      });
      // ray 3 when the object is inside F: show where it "comes from"
      if (p < f && Math.abs(p - f) > 0.05) dashLine(ctx, X(-f), Y(0), X(-p), Y(ho), 'rgba(255,95,168,.45)', 1.2, [3, 4]);
      // virtual image: dashed back-extensions
      if (virt) {
        const IX = X(im.q), IY = Y(im.hi);
        dashLine(ctx, X(0), Y(ho), IX, IY, 'rgba(255,198,92,.55)');
        dashLine(ctx, X(-p), Y(ho), IX, IY, 'rgba(95,227,255,.55)');
        const r3 = R[2]; if (r3) dashLine(ctx, X(0), Y(r3.y3), IX, IY, 'rgba(255,95,168,.55)');
      }

      // photons travelling along the real rays
      if (!L.reduceMotion) {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        R.forEach((r, ri) => {
          const P = r.screen; const segs = []; let tot = 0;
          for (let i = 1; i < P.length; i++) { const l = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); segs.push(l); tot += l; }
          const gap = 90;
          for (let s0 = (S.t * 110 + ri * 30) % gap; s0 < tot; s0 += gap) {
            let s = s0, i = 0; while (i < segs.length - 1 && s > segs[i]) { s -= segs[i]; i++; }
            const a = P[i], b = P[i + 1], fr = segs[i] ? s / segs[i] : 0;
            const x = a[0] + (b[0] - a[0]) * fr, y = a[1] + (b[1] - a[1]) * fr;
            if (x < -5 || x > w + 5 || y < -5 || y > h + 5) continue;
            ctx.fillStyle = r.col; ctx.shadowColor = r.col; ctx.shadowBlur = 12;
            ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
          }
        });
        ctx.restore();
      }

      // object
      arrow(ctx, X(-p), Y(0), X(-p), Y(ho), { color: C.amber, width: 3, head: 11, glow: 12 });
      label(ctx, S.touched ? 'object' : 'drag me', X(-p), Y(ho) - 16, { color: C.amber, size: 11 });
      if (!S.touched) pulseRing(ctx, X(-p), Y(ho), S.t);
      // image
      if (!im.inf) {
        const IX = X(im.q), IY = Y(im.hi);
        if (im.real) {
          arrow(ctx, IX, Y(0), IX, IY, { color: C.green, width: 3, head: 11, glow: 14 });
          if (IX < w - 10 && IY < h - 10) label(ctx, 'real image', IX, IY + 16, { color: C.green, size: 11, bg: C.bgLabel });
          if (IX > w - 10) label(ctx, 'image is off-screen →', w - 10, cy + 34, { color: C.green, size: 11, align: 'right', bg: C.bgLabel });
          else if (IY > h) label(ctx, 'image extends below ↓', IX, h - 46, { color: C.green, size: 11, bg: C.bgLabel });
        } else {
          arrow(ctx, IX, Y(0), IX, IY, { color: C.violet, width: 2.5, head: 11, dashed: true, glow: 10 });
          if (IX > 10 && IY > 10) label(ctx, 'virtual image', IX, IY - 14, { color: C.violet, size: 11, bg: C.bgLabel });
          if (IX < 10) label(ctx, '← virtual image is off-screen', 10, cy - 34, { color: C.violet, size: 11, align: 'left', bg: C.bgLabel });
        }
      } else {
        label(ctx, 'rays emerge parallel → image at infinity', w - 10, cy + 34, { color: C.green, size: 11, align: 'right', bg: C.bgLabel });
      }
      // p and q
      dimLine(ctx, X(-p), cx, h - 16, C.amber, `p = ${p.toFixed(1)} cm`);
      if (!im.inf) {
        if (im.real) dimLine(ctx, cx, Math.min(X(im.q), w - 2), h - 16, C.green, `q = ${im.q.toFixed(1)} cm`);
        else dimLine(ctx, Math.max(X(im.q), 2), cx, h - 40, C.violet, `q = ${im.q.toFixed(1)} cm (virtual)`);
      }
    }

    function drawGraph() {
      const { ctx, w, h } = G; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const { p, f } = S;
      const padL = 36, padR = 14, padT = 44, padB = 24, PW = 3.5 * f, MMAX = 6;
      const gx = v => padL + v / PW * (w - padL - padR);
      const gy = m => h - padB - Math.min(m, MMAX * 1.6) / MMAX * (h - padT - padB);
      // regions
      ctx.fillStyle = 'rgba(169,139,255,.08)'; ctx.fillRect(gx(0), padT, gx(f) - gx(0), h - padT - padB);
      ctx.fillStyle = 'rgba(95,227,255,.04)'; ctx.fillRect(gx(f), padT, gx(PW) - gx(f), h - padT - padB);
      if (gx(f) - gx(0) > 60) label(ctx, 'virtual', gx(f / 2), padT + 10, { color: C.violet, size: 10 });
      label(ctx, 'real image (object beyond F)', gx((f + PW) / 2 + 2), padT + 10, { color: C.cyan, size: 10 });
      // axes + ticks
      ctx.strokeStyle = C.axis; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, h - padB); ctx.lineTo(w - padR, h - padB); ctx.stroke();
      const step = PW > 24 ? 5 : 2;
      for (let v = 0; v <= PW; v += step) { label(ctx, String(v), gx(v), h - padB + 12, { size: 10 }); }
      for (let m = 0; m <= MMAX; m += 2) { label(ctx, String(m), padL - 8, gy(m), { size: 10, align: 'right' }); }
      label(ctx, 'p (cm)', w - padR, h - padB - 10, { size: 10, align: 'right' });
      label(ctx, 'm', padL + 10, padT - 2, { size: 11, color: C.text, font: 'serif' });
      // reference lines
      dashLine(ctx, gx(f), padT, gx(f), h - padB, 'rgba(169,139,255,.6)', 1, [3, 4]);
      label(ctx, 'F', gx(f) + 8, h - padB - 10, { color: C.violet, size: 10 });
      if (2 * f <= PW) {
        dashLine(ctx, gx(2 * f), gy(1), gx(2 * f), h - padB, 'rgba(92,240,160,.45)', 1, [3, 4]);
        dashLine(ctx, padL, gy(1), gx(2 * f), gy(1), 'rgba(92,240,160,.45)', 1, [3, 4]);
        label(ctx, '2F · m = 1', gx(2 * f) + 6, gy(1) - 10, { color: C.green, size: 10, align: 'left' });
      }
      // curve m = f/|p - f|
      ctx.save();
      ctx.beginPath(); ctx.rect(padL, padT, w - padL - padR, h - padT - padB); ctx.clip();
      ctx.strokeStyle = C.pink; ctx.lineWidth = 2.2; ctx.shadowColor = C.pink; ctx.shadowBlur = 8;
      [[0.01, f - 0.01], [f + 0.01, PW]].forEach(([a, b]) => {
        ctx.beginPath();
        const n = 240;
        for (let i = 0; i <= n; i++) { const v = a + (b - a) * i / n; const m = f / Math.abs(v - f); const x = gx(v), y = gy(m); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.stroke();
      });
      ctx.restore();
      // current point
      const im = image();
      const mm = im.inf ? Infinity : Math.abs(im.m);
      const py = mm > MMAX ? padT + 4 : gy(mm);
      ctx.save(); ctx.fillStyle = C.amber; ctx.shadowColor = C.amber; ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.arc(gx(p), py, 5.5, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      const txt = im.inf ? 'm → ∞' : `m = ${mm.toFixed(2)}${mm > MMAX ? ' ↑' : ''}`;
      const right = gx(p) > w - 120;
      label(ctx, txt, gx(p) + (right ? -12 : 12), py + (mm > MMAX ? 12 : -12), { color: C.amber, size: 11, align: right ? 'right' : 'left', bg: C.bgLabel });
    }

    function update() {
      const { p, f } = S;
      ro.p.textContent = `${p.toFixed(1)} cm`;
      ro.f.textContent = `${f.toFixed(1)} cm`;
      const im = image();
      if (im.inf) {
        ro.q.textContent = '∞'; ro.m.textContent = '∞'; ro.n.textContent = 'At infinity';
        setStatus(status, 'info', `Object <b>at F</b>: the refracted rays come out parallel, so the image is formed at <b>infinity</b>.`);
      } else {
        const mm = Math.abs(im.m);
        ro.q.textContent = `${im.q.toFixed(1)} cm` + (im.real ? '' : ' (virtual)');
        ro.m.textContent = `${mm.toFixed(2)} ×`;
        const size = Math.abs(mm - 1) < 0.03 ? 'same size' : mm > 1 ? 'magnified' : 'diminished';
        ro.n.textContent = im.real ? `Real · inverted · ${size}` : `Virtual · erect · ${size}`;
        ro.n.className = 'ro-v ro-wrap ' + (im.real ? 'good' : '');
        if (!im.real)
          setStatus(status, 'info', `Object <b>inside F</b>: the rays spread out after the lens. They only <em>seem</em> to come from a <b>virtual, erect, magnified</b> image on the same side. This is the simple microscope (§10.3).`);
        else if (Math.abs(p - 2 * f) < 0.15)
          setStatus(status, 'good', `Object <b>at 2F</b>: image at 2F on the other side. Real, inverted and <b>the same size</b> (m = 1).`);
        else if (p > 2 * f)
          setStatus(status, 'info', `Object <b>beyond 2F</b>: image between F and 2F. Real, inverted, <b>diminished</b>. Move it closer to F and watch m grow.`);
        else
          setStatus(status, 'good', `Object <b>between F and 2F</b>: image beyond 2F. Real, inverted, <b>magnified</b>. The nearer to F, the bigger the image.`);
        if (im.real && Math.abs(mm - 1) <= 0.03) complete('l1-lens-same', { el: $('[data-check="l1-lens-same"]', root), msg: 'Same size: object at 2F!' });
        if (im.real && Math.abs(mm - 3) <= 0.12) complete('l1-lens-3x', { el: $('[data-check="l1-lens-3x"]', root), msg: '3× magnified real image!' });
        if (!im.real) complete('l1-lens-virt', { el: $('[data-check="l1-lens-virt"]', root), msg: 'You built a magnifying glass!' });
      }
      draw(); drawGraph();
    }

    const pInput = $('#lens-p');
    const pR = bindRange(pInput, v => { S.p = v; S.touched = true; update(); });
    bindRange($('#lens-f'), v => {
      S.f = v;
      pInput.max = pMax();
      if (S.p > pMax()) S.p = pMax();
      pR.set(S.p); update();
    });
    drag(M.canvas, {
      hit: (x, y) => {
        if (!geo) return false;
        const ox = geo.X(-S.p), top = geo.Y(S.ho), base = geo.Y(0);
        return Math.abs(x - ox) < 22 && y > top - 24 && y < base + 10;
      },
      move: (x, y) => {
        S.p = clamp(Math.round((geo.cx - x) / geo.sc * 10) / 10, 0.5, pMax());
        S.ho = clamp(Math.round((geo.cy - y) / geo.sc * 10) / 10, 0.5, Math.round(0.4 * M.h / geo.sc * 10) / 10);
        S.touched = true; pR.set(S.p); update();
      }
    });
    animateWhileVisible(root, (dt, t) => { S.t = t; draw(); });
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 3 · Rayleigh criterion (Eq. 10.1)
     ===================================================== */
  // Bessel function J1 (Numerical Recipes rational approximation)
  function besselJ1(x) {
    const ax = Math.abs(x);
    if (ax < 8) {
      const y = x * x;
      const a1 = x * (72362614232.0 + y * (-7895059235.0 + y * (242396853.1 + y * (-2972611.439 + y * (15704.48260 + y * (-30.16036606))))));
      const a2 = 144725228442.0 + y * (2300535178.0 + y * (18583304.74 + y * (99447.43394 + y * (376.9991397 + y))));
      return a1 / a2;
    }
    const z = 8 / ax, y = z * z, xx = ax - 2.356194491;
    const a1 = 1 + y * (0.183105e-2 + y * (-0.3516396496e-4 + y * (0.2457520174e-5 + y * (-0.240337019e-6))));
    const a2 = 0.04687499995 + y * (-0.2002690873e-3 + y * (0.8449199096e-5 + y * (-0.88228987e-6 + y * 0.105787412e-6)));
    const ans = Math.sqrt(0.636619772 / ax) * (Math.cos(xx) * a1 - z * Math.sin(xx) * a2);
    return x < 0 ? -ans : ans;
  }

  (function rayleighLab() {
    const root = $('#lab-rayleigh'); if (!root) return;
    const S = { sep: 14, lam: 589, D: 9 };   // sep ×1e-5 rad, λ nm, D mm
    const FOV = 26e-5;                       // half-width of the field (rad)
    let ready = false;

    // Airy pattern lookup: I(x) = [2 J1(x) / x]^2
    const STEP = 0.01, XMAX = 90;
    const lut = new Float32Array(Math.ceil(XMAX / STEP) + 2);
    for (let i = 0; i < lut.length; i++) { const x = i * STEP; if (!x) { lut[i] = 1; continue; } const v = 2 * besselJ1(x) / x; lut[i] = v * v; }
    const airy = x => { if (x >= XMAX) return 0; const f = x / STEP, i = f | 0, r = f - i; return lut[i] * (1 - r) + lut[i + 1] * r; };

    const A = fitCanvas($('#airy-canvas'), () => ready && render());
    const P = fitCanvas($('#airy-profile'), () => ready && render());
    const OW = 500; let OH = 200;
    const off = document.createElement('canvas'); off.width = OW; off.height = OH;
    const octx = off.getContext('2d'); let img = octx.createImageData(OW, OH);
    const status = $('#ray-status');
    const out = { sep: $('#ray-sep-out'), lam: $('#ray-lam-out'), D: $('#ray-D-out'), amin: $('#ray-amin'), R: $('#ray-R'), ratio: $('#ray-ratio') };

    const amin = () => 1.22 * S.lam * 1e-9 / (S.D * 1e-3);

    function renderImage() {
      const { ctx, w, h } = A; if (!w) return;
      const oh = Math.max(40, Math.round(OW * h / w));
      if (oh !== OH) { OH = oh; off.height = OH; img = octx.createImageData(OW, OH); }
      const lam = S.lam * 1e-9, D = S.D * 1e-3, s = S.sep * 1e-5;
      const k = Math.PI * D / lam, pix = 2 * FOV / OW;
      const [r, g, b] = wavelengthRGB(S.lam);
      const d = img.data;
      for (let j = 0; j < OH; j++) {
        const ty = (j + 0.5 - OH / 2) * pix, ty2 = ty * ty;
        for (let i = 0; i < OW; i++) {
          const tx = (i + 0.5 - OW / 2) * pix;
          const d1 = tx + s / 2, d2 = tx - s / 2;
          const I = airy(k * Math.sqrt(d1 * d1 + ty2)) + airy(k * Math.sqrt(d2 * d2 + ty2));
          const v = Math.pow(Math.min(I, 1), 0.5);
          const wv = Math.max(0, v - 0.72) / 0.28 * 0.8;
          const o = (j * OW + i) * 4;
          d[o] = (r + (255 - r) * wv) * v; d[o + 1] = (g + (255 - g) * wv) * v; d[o + 2] = (b + (255 - b) * wv) * v; d[o + 3] = 255;
        }
      }
      octx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, 0, w, h);
      // source markers
      const xs = th => (th / FOV + 1) / 2 * w;
      [[-s / 2, 'A'], [s / 2, 'B']].forEach(([th, t]) => {
        const x = xs(th);
        ctx.fillStyle = 'rgba(255,255,255,.55)';
        ctx.beginPath(); ctx.moveTo(x, h - 4); ctx.lineTo(x - 5, h - 13); ctx.lineTo(x + 5, h - 13); ctx.closePath(); ctx.fill();
        if (s * 1e5 > 1.2) label(ctx, t, x, h - 22, { color: 'rgba(255,255,255,.7)', size: 11 });
      });
    }

    function renderProfile() {
      const { ctx, w, h } = P; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const lam = S.lam * 1e-9, D = S.D * 1e-3, s = S.sep * 1e-5, k = Math.PI * D / lam, am = amin();
      const padT = 30, padB = 24, base = h - padB;
      const thAt = x => (x / w * 2 - 1) * FOV, xs = th => (th / FOV + 1) / 2 * w;
      const n = Math.ceil(w) + 1;
      const I1 = new Float32Array(n), I2 = new Float32Array(n), Sm = new Float32Array(n);
      let maxS = 0;
      for (let i = 0; i < n; i++) { const th = thAt(i); I1[i] = airy(k * Math.abs(th + s / 2)); I2[i] = airy(k * Math.abs(th - s / 2)); Sm[i] = I1[i] + I2[i]; if (Sm[i] > maxS) maxS = Sm[i]; }
      const ymax = Math.max(1.12, maxS * 1.08);
      const yv = v => base - v / ymax * (base - padT);
      const rgb = wavelengthRGB(S.lam);
      // axis + ticks (×10⁻⁵ rad)
      ctx.strokeStyle = C.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, base); ctx.lineTo(w, base); ctx.stroke();
      for (let t = -25; t <= 25; t += 5) {
        const x = xs(t * 1e-5);
        ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x, base + 4); ctx.stroke();
        if (w > 500 || t % 10 === 0) label(ctx, String(t), x, base + 13, { size: 10 });
      }
      label(ctx, '× 10⁻⁵ rad', w - 6, base - 10, { size: 10, align: 'right' });
      // filled sum
      const grad = ctx.createLinearGradient(0, padT, 0, base);
      grad.addColorStop(0, rgba(rgb, .45)); grad.addColorStop(1, rgba(rgb, .02));
      ctx.beginPath(); ctx.moveTo(0, base);
      for (let i = 0; i < n; i++) ctx.lineTo(i, yv(Sm[i]));
      ctx.lineTo(n - 1, base); ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
      // individual patterns
      [I1, I2].forEach(arr => {
        ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
        ctx.beginPath(); for (let i = 0; i < n; i++) i ? ctx.lineTo(i, yv(arr[i])) : ctx.moveTo(i, yv(arr[i])); ctx.stroke(); ctx.restore();
      });
      // total
      ctx.save(); ctx.strokeStyle = rgba(rgb, 1); ctx.lineWidth = 2.4; ctx.shadowColor = rgba(rgb, 1); ctx.shadowBlur = 10;
      ctx.beginPath(); for (let i = 0; i < n; i++) i ? ctx.lineTo(i, yv(Sm[i])) : ctx.moveTo(i, yv(Sm[i])); ctx.stroke(); ctx.restore();
      // Rayleigh guide: A's first dark ring vs B's centre
      const xr = xs(-s / 2 + am), xb = xs(s / 2);
      if (xr > 0 && xr < w) {
        dashLine(ctx, xr, padT + 4, xr, base, 'rgba(255,198,92,.8)', 1.2, [3, 4]);
        label(ctx, "A's 1st dark ring", xr + (xr > xb ? 6 : -6), padT + 12, { color: C.amber, size: 10, align: xr > xb ? 'left' : 'right', bg: C.bgLabel });
      }
      if (s > 0) {
        dashLine(ctx, xb, padT + 22, xb, base, 'rgba(255,255,255,.55)', 1.2, [2, 3]);
        label(ctx, "B's centre", xb + (xr > xb ? -6 : 6), padT + 30, { color: '#fff', size: 10, align: xr > xb ? 'right' : 'left', bg: C.bgLabel });
      }
      // dip
      const centre = Sm[Math.round(xs(0))] || 0;
      const dip = maxS > 0 ? Math.max(0, 1 - centre / maxS) : 0;
      label(ctx, dip > 0.005 ? `dip between peaks: ${Math.round(dip * 100)}%` : 'no dip: looks like ONE peak', w - 8, padT - 14, { color: dip > 0.005 ? C.green : C.red, size: 11, align: 'right' });
    }

    function render() { renderImage(); renderProfile(); }
    const schedule = throttle(render);

    function update() {
      const am = amin(), ratio = S.sep * 1e-5 / am;
      out.sep.textContent = `${S.sep.toFixed(1)} × 10⁻⁵ rad`;
      out.lam.textContent = `${S.lam} nm · ${colourName(S.lam)}`;
      out.lam.style.color = rgba(wavelengthRGB(S.lam));
      out.D.textContent = `${S.D.toFixed(1)} mm`;
      out.amin.textContent = sci(am, 2) + ' rad';
      out.R.textContent = sci(1 / am, 2) + ' rad⁻¹';
      out.ratio.textContent = ratio.toFixed(2);
      out.ratio.className = 'ro-v ' + (ratio >= 1.03 ? 'good' : ratio >= 0.97 ? 'warn' : 'bad');
      if (ratio < 0.97)
        setStatus(status, 'bad', `<b>Not resolved.</b> The separation is smaller than α<sub>min</sub>, so the two discs overlap and the instrument shows them as one blob.`);
      else if (ratio <= 1.03)
        setStatus(status, 'edge', `<b>Just resolved: the Rayleigh limit!</b> The centre of B sits on the first dark ring of A. Separation = α<sub>min</sub> = 1.22λ/D.`);
      else
        setStatus(status, 'good', `<b>Resolved.</b> The separation is bigger than α<sub>min</sub>, so you see two distinct spots of light.`);
      if (ratio >= 0.97 && ratio <= 1.03) complete('l1-ray-limit', { el: $('[data-check="l1-ray-limit"]', root), msg: 'Rayleigh limit found!' });
      if (Math.abs(S.sep - 6) <= 0.25 && S.lam <= 470 && ratio >= 1) complete('l1-ray-blue', { el: $('[data-check="l1-ray-blue"]', root), msg: 'Shorter λ, sharper view!' });
      if (Math.abs(S.sep - 8) <= 0.25 && S.lam >= 620 && ratio >= 1) complete('l1-ray-wide', { el: $('[data-check="l1-ray-wide"]', root), msg: 'Wider lens, better resolution!' });
      schedule();
    }

    const sepR = bindRange($('#ray-sep'), v => { S.sep = v; update(); });
    const lamR = bindRange($('#ray-lam'), v => { S.lam = v; update(); });
    const DR = bindRange($('#ray-D'), v => { S.D = v; update(); });
    function preset(name) {
      if (name === 'na') { S.lam = 589; S.D = 9; S.sep = 8.0; }
      if (name === 'blue') { S.lam = 450; }
      if (name === 'limit') { S.sep = Math.round(amin() * 1e6) / 10; }
      sepR.set(S.sep); lamR.set(S.lam); DR.set(S.D); update();
    }
    $$('[data-ray-preset]').forEach(b => b.addEventListener('click', () => preset(b.dataset.rayPreset)));
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 4 · Grating resolving power (Eqs. 10.2, 10.3)
     ===================================================== */
  (function gratingLab() {
    const root = $('#lab-grating'); if (!root) return;
    const PAIRS = {
      na: { l1: 589.0, l2: 589.6, d: 1 },
      hg: { l1: 577.0, l2: 579.1, d: 1 },
      hd: { l1: 656.10, l2: 656.28, d: 2 }
    };
    const S = { pair: 'na', s: 0.35, m: 1 };
    let ready = false;
    const Gc = fitCanvas($('#grating-canvas'), () => ready && draw());
    const status = $('#gr-status');
    const out = { N: $('#gr-N-out'), lines: $('#gr-lines'), need: $('#gr-need'), R: $('#gr-R') };

    const Nval = () => { const n = 50 * Math.pow(400, S.s); return n < 1000 ? Math.round(n) : Math.round(n / 10) * 10; };
    function line(lp, li, N, m) {
      const phi = Math.PI * m * (lp / li - 1);
      const sn = Math.sin(phi);
      if (Math.abs(sn) < 1e-12) return 1;
      const r = Math.sin(N * phi) / (N * sn);
      return r * r;
    }

    function draw() {
      const { ctx, w, h } = Gc; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const pr = PAIRS[S.pair], N = Nval(), m = S.m;
      const lc = (pr.l1 + pr.l2) / 2, dl = pr.l2 - pr.l1;
      const lo = lc - 4 * dl, hi = lc + 4 * dl;
      const padX = 16;
      const xs = l => padX + (l - lo) / (hi - lo) * (w - 2 * padX);
      const stripT = 34, stripH = Math.max(34, h * 0.15), gT = stripT + stripH + 34, gB = h - 30;
      const n = Math.floor(w - 2 * padX);
      const I1 = new Float32Array(n), I2 = new Float32Array(n), Sm = new Float32Array(n);
      let maxS = 0;
      for (let i = 0; i < n; i++) {
        const a = lo + (hi - lo) * i / n, b = lo + (hi - lo) * (i + 1) / n;
        let m1 = 0, m2 = 0, ms = 0;
        for (let k = 0; k < 6; k++) {
          const lp = a + (b - a) * (k + 0.5) / 6;
          const g1 = line(lp, pr.l1, N, m), g2 = line(lp, pr.l2, N, m);
          m1 = Math.max(m1, g1); m2 = Math.max(m2, g2); ms = Math.max(ms, g1 + g2);
        }
        if (pr.l1 >= a && pr.l1 < b) { m1 = 1; ms = Math.max(ms, 1 + line(pr.l1, pr.l2, N, m)); }
        if (pr.l2 >= a && pr.l2 < b) { m2 = 1; ms = Math.max(ms, 1 + line(pr.l2, pr.l1, N, m)); }
        I1[i] = m1; I2[i] = m2; Sm[i] = ms; if (ms > maxS) maxS = ms;
      }
      const rgb = wavelengthRGB(lc);

      // spectrum strip: what you see in the telescope
      label(ctx, 'WHAT YOU SEE THROUGH THE TELESCOPE', padX, 18, { size: 10, align: 'left' });
      ctx.fillStyle = '#02040a'; ctx.fillRect(padX, stripT, w - 2 * padX, stripH);
      for (let i = 0; i < n; i++) {
        const v = Math.pow(Math.min(1, Sm[i]), 0.8);
        const wv = Math.max(0, v - 0.75) / 0.25 * 0.7;
        ctx.fillStyle = `rgb(${(rgb[0] + (255 - rgb[0]) * wv) * v | 0},${(rgb[1] + (255 - rgb[1]) * wv) * v | 0},${(rgb[2] + (255 - rgb[2]) * wv) * v | 0})`;
        ctx.fillRect(padX + i, stripT, 1.5, stripH);
      }
      ctx.strokeStyle = C.axis; ctx.strokeRect(padX + .5, stripT + .5, w - 2 * padX - 1, stripH - 1);

      // intensity graph
      label(ctx, 'BRIGHTNESS vs WAVELENGTH', padX, gT - 14, { size: 10, align: 'left' });
      const ymax = Math.max(1.1, maxS * 1.06);
      const yv = v => gB - v / ymax * (gB - gT);
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(padX, gB); ctx.lineTo(w - padX, gB); ctx.stroke();
      const grad = ctx.createLinearGradient(0, gT, 0, gB);
      grad.addColorStop(0, rgba(rgb, .5)); grad.addColorStop(1, rgba(rgb, .03));
      ctx.beginPath(); ctx.moveTo(padX, gB);
      for (let i = 0; i < n; i++) ctx.lineTo(padX + i, yv(Sm[i]));
      ctx.lineTo(padX + n, gB); ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
      [I1, I2].forEach(arr => {
        ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
        ctx.beginPath(); for (let i = 0; i < n; i++) i ? ctx.lineTo(padX + i, yv(arr[i])) : ctx.moveTo(padX + i, yv(arr[i])); ctx.stroke(); ctx.restore();
      });
      ctx.save(); ctx.strokeStyle = rgba(rgb); ctx.lineWidth = 2.2; ctx.shadowColor = rgba(rgb); ctx.shadowBlur = 10;
      ctx.beginPath(); for (let i = 0; i < n; i++) i ? ctx.lineTo(padX + i, yv(Sm[i])) : ctx.moveTo(padX + i, yv(Sm[i])); ctx.stroke(); ctx.restore();
      // line markers
      [pr.l1, pr.l2].forEach((l, i) => {
        const x = xs(l);
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.moveTo(x, gB + 2); ctx.lineTo(x - 5, gB + 10); ctx.lineTo(x + 5, gB + 10); ctx.closePath(); ctx.fill();
        label(ctx, `${l.toFixed(pr.d)} nm`, x + (i ? 8 : -8), gB + 18, { size: 10, color: C.text, align: i ? 'left' : 'right' });
      });
      // line width λ/(Nm) — the Rayleigh yardstick
      const lw = pr.l1 / (N * m);
      const x1 = xs(pr.l1), x2 = Math.min(xs(pr.l1 + lw), w - padX);
      ctx.save(); ctx.strokeStyle = C.amber; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(x1, gT - 2); ctx.lineTo(x2, gT - 2); ctx.moveTo(x1, gT - 6); ctx.lineTo(x1, gT + 2);
      if (x2 < w - padX) { ctx.moveTo(x2, gT - 6); ctx.lineTo(x2, gT + 2); }
      ctx.stroke(); ctx.restore();
      label(ctx, 'λ / Nm', Math.min(x2 + 6, w - padX - 40), gT - 2, { color: C.amber, size: 10, align: 'left' });
    }

    function update() {
      const pr = PAIRS[S.pair], N = Nval(), R = N * S.m;
      const lc = (pr.l1 + pr.l2) / 2, need = lc / (pr.l2 - pr.l1);
      out.N.textContent = N.toLocaleString('en-US');
      out.lines.textContent = `${pr.l1.toFixed(pr.d)} & ${pr.l2.toFixed(pr.d)} nm`;
      out.need.textContent = `≈ ${Math.round(need).toLocaleString('en-US')}`;
      out.R.textContent = `${N.toLocaleString('en-US')} × ${S.m} = ${R.toLocaleString('en-US')}`;
      out.R.className = 'ro-v ' + (R >= need ? 'good' : 'bad');
      if (R < need)
        setStatus(status, 'bad', `<b>Not resolved.</b> Each line is wider (λ/Nm) than the gap between them (Δλ), so they merge into one. You need R ≥ λ/Δλ ≈ ${Math.round(need).toLocaleString('en-US')}.`);
      else if (R < need * 1.2)
        setStatus(status, 'edge', `<b>Just resolved.</b> R = N × m ≈ λ/Δλ. A small dip appears between the two lines.`);
      else
        setStatus(status, 'good', `<b>Resolved!</b> R = ${R.toLocaleString('en-US')} is more than the ${Math.round(need).toLocaleString('en-US')} needed, so two sharp, separate lines are seen.`);
      if (S.pair === 'na' && R >= need) complete('l1-gr-na', { el: $('[data-check="l1-gr-na"]', root), msg: 'Sodium doublet split!' });
      if (S.pair === 'na' && R >= need && N < 500) complete('l1-gr-order', { el: $('[data-check="l1-gr-order"]', root), msg: 'Higher order = more resolving power!' });
      if (S.pair === 'hd' && R >= need) complete('l1-gr-hd', { el: $('[data-check="l1-gr-hd"]', root), msg: 'You discovered deuterium!' });
      draw();
    }

    bindRange($('#gr-N'), v => { S.s = v; update(); });
    $$('[data-pair]', root).forEach(b => b.addEventListener('click', () => { S.pair = b.dataset.pair; press($('#gr-pair'), b); update(); }));
    $$('[data-m]', root).forEach(b => b.addEventListener('click', () => { S.m = +b.dataset.m; press($('#gr-m'), b); update(); }));
    ready = true; update();
    redraws.push(update);
  })();

  // canvas text uses web fonts: redraw once they have loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
