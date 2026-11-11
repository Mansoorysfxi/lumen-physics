/* =========================================================
   Chapter 10 · Lesson 3 · The Compound Microscope — labs
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const {
    $, $$, clamp, fitCanvas, animateWhileVisible, bindRange, arrow, label, complete,
    dashLine, dimLine, drawEye, drawLens, setStatus, press, throttle, photons
  } = L;

  const C = {
    cyan: '#5fe3ff', pink: '#ff5fa8', amber: '#ffc65c', green: '#5cf0a0', violet: '#a98bff', red: '#ff6b7a',
    muted: '#8b95bb', text: '#e9edff', axis: 'rgba(140,160,255,.38)', bgLabel: 'rgba(5,9,21,.8)'
  };
  const D = 25;
  const redraws = [];
  const f2 = (x, d = 2) => (Math.abs(x) < 1e-9 ? 0 : x).toFixed(d);

  /* =====================================================
     LAB 1 · Two-lens ray tracer (Fig. 10.4 a)
     ===================================================== */
  (function cmLab() {
    const root = $('#lab-cm'); if (!root) return;
    const S = { p: 1.2, fo: 1, fe: 3, normal: true, L: 8.7, t: 0 };
    let ready = false;
    const CM = fitCanvas($('#cm-canvas'), () => ready && draw());
    const status = $('#cm-status');
    const o = {
      p: $('#cm-p-out'), fo: $('#cm-fo-out'), fe: $('#cm-fe-out'), Lo: $('#cm-L-out'),
      q: $('#cm-q'), M1: $('#cm-M1'), p2: $('#cm-p2'), M2: $('#cm-M2'), M2k: $('#cm-M2-k'), L: $('#cm-Lr'), M: $('#cm-M'), Mk: $('#cm-M-k')
    };
    const pIn = $('#cm-p'), LIn = $('#cm-L'), normIn = $('#cm-normal'), Lwrap = $('#cm-L-wrap');

    function sys() {
      const { p, fo, fe, normal } = S;
      const h = 1;
      const q1 = p * fo / (p - fo), h1 = -h * q1 / p, M1 = q1 / p;
      let L0, p2;
      if (normal) { p2 = fe * D / (fe + D); L0 = q1 + p2; } else { L0 = S.L; p2 = L0 - q1; }
      let q2 = Infinity, h2 = -Infinity, x2 = -Infinity, kind = 'inf';
      if (Math.abs(p2 - fe) > 0.01 * fe) {
        q2 = p2 * fe / (p2 - fe); h2 = h1 * (-q2 / p2); x2 = L0 + q2; kind = q2 < 0 ? 'virtual' : 'real';
      }
      const eyeD = L0 > fe * 1.05 ? Math.min(L0 * fe / (L0 - fe), 6) : 1.5;   // eye at the exit pupil
      const M2 = normal ? 1 + D / fe : (kind === 'virtual' ? -q2 / p2 : null);
      return { h, q1, h1, M1, L: L0, p2, q2, h2, x2, kind, eyeD, M2, M: M2 != null ? M1 * M2 : null };
    }

    function draw() {
      const { ctx, w, h } = CM; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const s = sys();
      const narrow = w < 520;
      // horizontal extent (cm), objective at x = 0
      let xmin = Math.min(-S.p - 0.6, -2 * S.fo - 0.3);
      let xmax = s.L + Math.max(s.eyeD + 1.4, S.fe * 0.5);
      if (s.kind === 'virtual') xmin = Math.min(xmin, Math.max(s.x2, s.L - 60) - 0.8);
      if (s.kind === 'real') xmax = Math.max(xmax, Math.min(s.x2, s.L + 60) + 1);
      const sc = (w - 30) / (xmax - xmin);
      const X = x => 15 + (x - xmin) * sc;
      // vertical: the final image is usually far bigger than the object
      const upright = s.kind === 'real' && s.h2 > 0;
      let cy, vs;
      const hMax = Math.max(Math.abs(s.h1), s.kind === 'inf' ? 0 : Math.abs(s.h2));
      if (upright) { cy = h * 0.5; vs = clamp((h * 0.5 - 24) / hMax, 5, 60); }
      else {
        // fit the final image if it is not much bigger than A1; otherwise fit A1 and let A2 run off-screen
        const a1 = Math.abs(s.h1), a2 = s.kind === 'inf' ? Infinity : Math.abs(s.h2);
        const target = a2 <= 2.5 * a1 ? a2 : a1 * 1.7;
        cy = h * 0.2;
        vs = clamp((h - cy - 34) / target, 6, 60);
        cy = Math.max(cy, vs + 34);
      }
      const Y = y => cy - y * vs;

      // axis
      ctx.strokeStyle = C.axis; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();

      // rays from the object's tip: (a) parallel to the axis, (b) through the objective's centre
      const rays = [{ y1: s.h, s1: -s.h / S.fo, col: C.amber }, { y1: 0, s1: -s.h / S.p, col: C.pink }];
      const paths = [];
      let yMaxEye = 0, yMaxObj = 1;
      rays.forEach(r => {
        const yL = r.y1 + r.s1 * s.L;
        yMaxEye = Math.max(yMaxEye, Math.abs(yL));
        const s2 = s.kind === 'inf' ? -s.h1 / s.p2 : (s.h2 - yL) / (s.x2 - s.L);
        const xEnd = s.kind === 'real' ? xmax + 2 : s.L + s.eyeD;
        const pts = [[-S.p, s.h], [0, r.y1], [s.L, yL], [xEnd, yL + s2 * (xEnd - s.L)]].map(([x, y]) => [X(x), Y(y)]);
        if (s.kind === 'virtual') dashLine(ctx, X(s.L), Y(yL), X(s.x2), Y(s.h2), r.col === C.amber ? 'rgba(255,198,92,.5)' : 'rgba(255,95,168,.5)');
        if (s.kind === 'inf') dashLine(ctx, X(s.L), Y(yL), X(xmin), Y(yL + s2 * (xmin - s.L)), 'rgba(169,139,255,.35)');
        ctx.save(); ctx.strokeStyle = r.col; ctx.lineWidth = 2; ctx.shadowColor = r.col; ctx.shadowBlur = 9; ctx.lineJoin = 'round';
        ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(q => ctx.lineTo(q[0], q[1])); ctx.stroke(); ctx.restore();
        paths.push({ pts, col: r.col });
      });

      // lenses
      const room = upright ? Math.min(cy, h - cy) - 6 : h - cy - 6;
      drawLens(ctx, X(0), cy, clamp(yMaxObj * vs + 14, 22, room), 7);
      drawLens(ctx, X(s.L), cy, clamp(yMaxEye * vs + 14, 26, room), 10);
      label(ctx, narrow ? 'obj.' : 'objective', X(0), h - 10, { color: C.cyan, size: 11 });
      label(ctx, narrow ? 'eye-p.' : 'eye-piece', X(s.L), h - 10, { color: C.cyan, size: 11 });
      // focal points
      [[-S.fo, 'f₀'], [S.fo, 'f₀'], [s.L - S.fe, 'fₑ'], [s.L + S.fe, 'fₑ']].forEach(([x, t]) => {
        const px = X(x); if (px < 4 || px > w - 4) return;
        ctx.fillStyle = C.violet; ctx.beginPath(); ctx.arc(px, cy, 3, 0, Math.PI * 2); ctx.fill();
        if (!narrow) label(ctx, t, px, cy - 12, { color: C.violet, size: 10 });
      });
      // separation
      dimLine(ctx, X(0), X(s.L), 14, C.cyan, `L = ${f2(s.L)} cm`);

      // object, intermediate image, final image
      arrow(ctx, X(-S.p), cy, X(-S.p), Y(s.h), { color: C.amber, width: 2.5, head: 8, glow: 10 });
      label(ctx, 'A', X(-S.p) - 10, Y(s.h) - 2, { color: C.amber, size: 11 });
      if (X(s.q1) < w) {
        arrow(ctx, X(s.q1), cy, X(s.q1), Y(s.h1), { color: C.green, width: 2.5, head: 9, glow: 10, dashed: s.q1 > s.L });
        label(ctx, 'A₁', X(s.q1) + 12, Y(s.h1) + 4, { color: C.green, size: 11 });
      }
      if (s.kind === 'virtual') {
        const IY = Y(s.h2);
        arrow(ctx, X(s.x2), cy, X(s.x2), Math.min(IY, h + 40), { color: C.violet, width: 2.5, head: 11, dashed: true, glow: 10 });
        if (IY <= h - 26) label(ctx, 'A₂ (final image)', X(s.x2) + 8, IY - 6, { color: C.violet, size: 11, align: 'left', bg: C.bgLabel });
        else label(ctx, narrow ? 'A₂ runs off ↓' : `A₂ is ${Math.abs(s.h2).toFixed(0)}× the object: it runs off-screen ↓`, X(s.x2) + 8, h - 30, { color: C.violet, size: 11, align: 'left', bg: C.bgLabel });
      } else if (s.kind === 'real' && X(s.x2) < w) {
        arrow(ctx, X(s.x2), cy, X(s.x2), clamp(Y(s.h2), -40, h + 40), { color: C.green, width: 2.5, head: 11, glow: 12 });
        label(ctx, 'real final image', X(s.x2), clamp(Y(s.h2), 30, h - 30) + (s.h2 > 0 ? -14 : 14), { color: C.green, size: 11, bg: C.bgLabel });
      }
      if (s.kind !== 'real') drawEye(ctx, X(s.L + s.eyeD) + 15, cy, 15);
      photons(ctx, paths, S.t, { w, h, gap: 80 });
    }

    function update() {
      const s = sys();
      o.p.textContent = `${f2(S.p)} cm`; o.fo.textContent = `${S.fo.toFixed(1)} cm`; o.fe.textContent = `${S.fe.toFixed(1)} cm`;
      o.Lo.textContent = `${f2(s.L)} cm`;
      if (S.normal) LIn.value = clamp(s.L, 4, 40);
      LIn.style.setProperty('--fill', ((LIn.value - 4) / 36 * 100) + '%');
      o.q.textContent = `${f2(s.q1)} cm`;
      o.M1.textContent = `${f2(s.M1)} ×`;
      o.p2.textContent = s.p2 > 0 ? `${f2(s.p2)} cm${s.p2 < S.fe ? ' (inside fₑ)' : ''}` : 'A₁ is past the eye-piece';
      o.L.textContent = `${f2(s.L)} cm`;
      if (S.normal) {
        o.M2k.textContent = 'M₂ = 1 + d/fₑ'; o.M2.textContent = `${f2(s.M2)} ×`;
        o.Mk.textContent = 'M = M₁ × M₂'; o.M.textContent = `${s.M.toFixed(1)} ×`; o.M.className = 'ro-v good';
      } else {
        o.M2k.textContent = 'M₂ (h₂/h₁)'; o.M2.textContent = s.M2 != null ? `${f2(s.M2)} ×` : '—';
        o.Mk.textContent = 'Final image';
        o.M.className = 'ro-v';
        o.M.textContent = s.kind === 'inf' ? 'at infinity' : `${f2(Math.abs(s.q2), 1)} cm (${s.kind})`;
      }

      if (S.normal) {
        setStatus(status, 'good', `<b>Normal adjustment.</b> The objective makes a real, inverted image A₁B₁ that is <b>${f2(s.M1, 1)}×</b> bigger, just inside the eye-piece's focus. The eye-piece magnifies it like a magnifying glass (<b>${f2(s.M2, 2)}×</b>) into a virtual image at 25 cm. Total M = ${f2(s.M1, 1)} × ${f2(s.M2, 2)} = <b>${s.M.toFixed(1)}</b>.` + (s.M1 < 2 ? ' Move the object closer to F<sub>o</sub> to raise M₁.' : ''));
      } else if (s.kind === 'virtual') {
        const qq = Math.abs(s.q2);
        setStatus(status, 'info', `Final image is <b>virtual</b>, ${f2(qq, 1)} cm from the eye-piece on the objective's side.` + (qq < D - 0.3 ? ' That is closer than the near point, so your eye would strain to see it.' : ''));
      } else if (s.kind === 'real') {
        setStatus(status, 'edge', `<b>A₁ is outside the eye-piece's focus</b>, so the eye-piece now forms a <b>real</b> image ${f2(s.q2, 1)} cm beyond it, like a projector. You can't use it as a microscope like this; you'd catch the image on a screen.`);
      } else {
        setStatus(status, 'good', `A₁B₁ sits exactly at the eye-piece's focus, so the final image is at <b>infinity</b> and the eye can relax.`);
      }

      if (S.normal && Math.abs(S.fo - 1) < 0.01 && Math.abs(S.fe - 3) < 0.01 && Math.abs(S.p - 1.2) < 0.006)
        complete('l3-cm-n106', { el: $('[data-check="l3-cm-n106"]', root), msg: '8.7 cm and ×47, confirmed!' });
      if (S.normal && s.M >= 100 && s.L < 20) complete('l3-cm-100', { el: $('[data-check="l3-cm-100"]', root), msg: 'A ×100 microscope!' });
      if (!S.normal && s.kind === 'real') complete('l3-cm-real', { el: $('[data-check="l3-cm-real"]', root), msg: 'The eye-piece became a projector!' });
      draw();
    }

    const pR = bindRange(pIn, v => { S.p = v; update(); });
    const foR = bindRange($('#cm-fo'), v => setFo(v));
    const feR = bindRange($('#cm-fe'), v => { S.fe = v; update(); });
    const LR = bindRange(LIn, v => { S.L = v; update(); });
    function setFo(v, pNew) {
      const ratio = S.p / S.fo;
      S.fo = v; foR.set(v);
      pIn.min = (1.02 * v).toFixed(2); pIn.max = (3 * v).toFixed(2);
      S.p = clamp(pNew != null ? pNew : ratio * v, 1.02 * v, 3 * v);
      pR.set(S.p); update();
    }
    function setNormal(on) {
      if (!on && S.normal) S.L = Math.round(sys().L * 10) / 10;
      S.normal = on; normIn.checked = on; Lwrap.classList.toggle('disabled', on);
      LR.set(S.L); update();
    }
    normIn.addEventListener('change', () => setNormal(normIn.checked));
    const presets = {
      n106: () => { S.fe = 3; feR.set(3); setNormal(true); setFo(1, 1.2); },
      ex101: () => { S.fe = 2.5; feR.set(2.5); setNormal(true); setFo(1, 1.05); },
      n105: () => { S.fe = 16; feR.set(16); S.L = 26; S.normal = false; normIn.checked = false; Lwrap.classList.remove('disabled'); LR.set(26); setFo(3, 3.6); }
    };
    $$('[data-cm]').forEach(b => b.addEventListener('click', () => presets[b.dataset.cm]()));
    animateWhileVisible(root, (dt, t) => { S.t = t; draw(); });
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 2 · Chromatic aberration (Q 10.4)
     ===================================================== */
  (function chromaLab() {
    const root = $('#lab-chroma'); if (!root) return;
    const S = { lens: 'cheap', focus: 0 };
    let ready = false;
    const RC = fitCanvas($('#chroma-rays'), () => ready && drawRays());
    const VC = fitCanvas($('#chroma-view'), () => ready && drawView());
    const status = $('#chroma-status'), fOut = $('#chroma-f-out');
    const COLS = [
      { k: -1, line: '#6f97ff', pure: '#0000ff', name: 'blue' },
      { k: 0, line: '#5cf08a', pure: '#00ff00', name: 'green' },
      { k: 1, line: '#ff5d5d', pure: '#ff0000', name: 'red' }
    ];
    const kEff = c => S.lens === 'cheap' ? c.k : c.k * 0.05;
    const EPS = 0.08;

    function drawRays() {
      const { ctx, w, h } = RC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      const lensX = w * 0.26, cy = h / 2 + 8, f0 = w * 0.46;
      const Fx = c => lensX + f0 * (1 + EPS * kEff(c));
      const screenX = lensX + f0 * (1 + EPS * S.focus);
      ctx.strokeStyle = C.axis; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
      const ys = [-0.3, -0.15, 0.15, 0.3].map(f => f * h);
      // white light in
      ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1.6; ctx.shadowColor = '#fff'; ctx.shadowBlur = 8;
      ys.forEach(y => { ctx.beginPath(); ctx.moveTo(0, cy + y); ctx.lineTo(lensX, cy + y); ctx.stroke(); });
      ctx.restore();
      // coloured rays out
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.lineWidth = 1.4;
      COLS.forEach(c => {
        const fx = Fx(c);
        ctx.strokeStyle = c.line; ctx.globalAlpha = .75;
        ys.forEach(y => { const sl = -y / (fx - lensX); ctx.beginPath(); ctx.moveTo(lensX, cy + y); ctx.lineTo(w, cy + y + sl * (w - lensX)); ctx.stroke(); });
      });
      ctx.restore();
      // lens
      if (S.lens === 'cheap') drawLens(ctx, lensX, cy, h * 0.38, 12);
      else {
        drawLens(ctx, lensX - 4, cy, h * 0.38, 12);
        ctx.save();
        ctx.beginPath(); ctx.moveTo(lensX + 8, cy - h * 0.38); ctx.lineTo(lensX + 22, cy - h * 0.38);
        ctx.quadraticCurveTo(lensX + 14, cy, lensX + 22, cy + h * 0.38); ctx.lineTo(lensX + 8, cy + h * 0.38);
        ctx.quadraticCurveTo(lensX + 20, cy, lensX + 8, cy - h * 0.38); ctx.closePath();
        ctx.fillStyle = 'rgba(169,139,255,.3)'; ctx.fill(); ctx.strokeStyle = C.violet; ctx.stroke(); ctx.restore();
        label(ctx, 'crown + flint', lensX + 6, cy + h * 0.38 + 14, { color: C.violet, size: 10 });
      }
      // focal points
      COLS.forEach((c, i) => {
        const fx = Fx(c);
        ctx.fillStyle = c.line; ctx.beginPath(); ctx.arc(fx, cy, 3.5, 0, Math.PI * 2); ctx.fill();
        if (S.lens === 'cheap') label(ctx, 'F', fx, cy + 16 + (i === 1 ? 12 : 0), { color: c.line, size: 11 });
      });
      if (S.lens !== 'cheap') label(ctx, 'one F for all colours', Fx(COLS[1]), cy + 18, { color: C.text, size: 10 });
      // the plane your eye is focused on
      dashLine(ctx, screenX, 26, screenX, h - 10, 'rgba(255,255,255,.55)', 1.2, [4, 4]);
      label(ctx, 'in focus here', screenX, 18, { color: '#fff', size: 10 });
      COLS.forEach((c, i) => {
        const spread = Math.abs(ys[3]) * Math.abs(screenX - Fx(c)) / (Fx(c) - lensX);
        ctx.save(); ctx.strokeStyle = c.line; ctx.lineWidth = 3; ctx.globalAlpha = .9; ctx.shadowColor = c.line; ctx.shadowBlur = 8;
        const x = screenX + 6 + i * 5;
        ctx.beginPath(); ctx.moveTo(x, cy - Math.max(1.5, spread)); ctx.lineTo(x, cy + Math.max(1.5, spread)); ctx.stroke(); ctx.restore();
      });
    }

    function diatom(ctx, col, R) {
      ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = Math.max(1.4, R * 0.018);
      ctx.beginPath(); ctx.ellipse(0, 0, R, R * 0.5, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(0, 0, R * 0.9, R * 0.42, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-R * 0.8, 0); ctx.lineTo(-R * 0.08, 0); ctx.moveTo(R * 0.08, 0); ctx.lineTo(R * 0.8, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, 0, R * 0.07, 0, Math.PI * 2); ctx.stroke();
      const N = 15;
      for (let i = -N; i <= N; i++) {
        if (Math.abs(i) < 1) continue;
        const x = i / N * R * 0.86;
        const yy = R * 0.42 * Math.sqrt(Math.max(0, 1 - (x / (R * 0.9)) ** 2));
        ctx.beginPath(); ctx.moveTo(x, -yy); ctx.lineTo(x, -R * 0.06); ctx.moveTo(x, R * 0.06); ctx.lineTo(x, yy); ctx.stroke();
        for (let j = 1; j < 4; j++) {
          const py = yy * (0.25 + j * 0.22);
          ctx.beginPath(); ctx.arc(x + R * 0.028, py, R * 0.011, 0, Math.PI * 2); ctx.arc(x + R * 0.028, -py, R * 0.011, 0, Math.PI * 2); ctx.fill();
        }
      }
    }

    function drawView() {
      const { ctx, w, h } = VC; if (!w) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
      const R = Math.min(w * 0.42, h * 0.78);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      COLS.forEach(c => {
        const k = kEff(c);
        const scale = 1 - 0.035 * k;
        const blur = 4.2 * Math.abs(S.focus - k) + 0.2;
        ctx.save();
        ctx.filter = `blur(${blur.toFixed(2)}px)`;
        ctx.translate(w / 2, h / 2 + 6); ctx.scale(scale, scale); ctx.rotate(-0.35);
        diatom(ctx, c.pure, R);
        ctx.restore();
      });
      ctx.restore();
      ctx.filter = 'none';
    }

    function update() {
      const nearest = COLS.reduce((a, c) => Math.abs(S.focus - kEff(c)) < Math.abs(S.focus - kEff(a)) ? c : a, COLS[1]);
      fOut.textContent = S.lens === 'cheap' ? `${nearest.name} is sharpest` : (Math.abs(S.focus) < 0.25 ? 'all colours sharp' : 'out of focus');
      if (S.lens === 'cheap')
        setStatus(status, 'bad', `<b>Chromatic aberration.</b> Blue focuses closest to the lens and red farthest. Whatever you focus on, the other colours are blurred and a slightly different size, so every edge gets a <b>coloured fringe</b>.`);
      else
        setStatus(status, 'good', `<b>Achromatic lens.</b> A convex crown-glass lens is cemented to a concave flint-glass lens. The flint glass undoes the colour spreading, so all colours meet at one focus and the edges stay clean and white.`);
      if (S.lens === 'achro') complete('l3-chroma-try', { el: $('[data-check="l3-chroma-try"]', root), msg: 'Colour fringes fixed!' });
      drawRays(); drawView();
    }
    bindRange($('#chroma-f'), v => { S.focus = v; update(); });
    $$('[data-lens]', root).forEach(b => b.addEventListener('click', () => { S.lens = b.dataset.lens; press($('#chroma-lens'), b); update(); }));
    ready = true; update();
    redraws.push(update);
  })();

  /* =====================================================
     LAB 3 · Virtual microscope (blood smear)
     ===================================================== */
  (function scopeLab() {
    const root = $('#lab-scope'); if (!root) return;
    const S = { obj: 4, eye: 5, light: 'white', width: 'narrow', ox: 128, oy: 122, dragging: false, moved: false, t: 0 };
    let ready = false;
    const cv = $('#scope-canvas');
    const SC = fitCanvas(cv, () => ready && draw());
    const status = $('#scope-status');
    const out = { M: $('#scope-M'), fov: $('#scope-fov'), res: $('#scope-res') };
    const LAMBDA = { white: 0.55, red: 0.65, blue: 0.45 };   // µm
    const NA = { narrow: 0.15, wide: 0.65 };
    const TINT = { white: null, red: '#ff7a6a', blue: '#86a8ff' };

    // ---- a repeating 240 µm tile of blood smear (seeded so it is the same every visit)
    function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    const TILE = 240, rnd = rng(11);
    const WBC = [{ x: 58, y: 66, r: 6.6, rot: 0.4 }, { x: 176, y: 188, r: 6.2, rot: 2.1 }];
    const RBC = [];
    for (let gy = 4; gy < TILE; gy += 8.3) for (let gx = 4 + (Math.round(gy / 8.3) % 2) * 4; gx < TILE; gx += 8.3) {
      if (rnd() < 0.13) continue;
      const c = { x: gx + (rnd() - .5) * 3, y: gy + (rnd() - .5) * 3, r: 3.5 + rnd() * 0.55, e: 0.9 + rnd() * 0.12, a: rnd() * Math.PI };
      if (WBC.some(wb => Math.hypot(wb.x - c.x, wb.y - c.y) < wb.r + 3.2)) continue;
      RBC.push(c);
    }
    const PLT = Array.from({ length: 14 }, () => ({ x: rnd() * TILE, y: rnd() * TILE, r: 0.9 + rnd() * 0.5 }));

    // low-zoom tile image (2 px per µm)
    const tileImg = document.createElement('canvas'); tileImg.width = tileImg.height = TILE * 2;
    (function () {
      const t = tileImg.getContext('2d'); t.scale(2, 2);
      t.fillStyle = '#f4ece2'; t.fillRect(0, 0, TILE, TILE);
      t.fillStyle = '#cf5b52'; RBC.forEach(c => { t.beginPath(); t.arc(c.x, c.y, c.r, 0, Math.PI * 2); t.fill(); });
      t.fillStyle = '#6b3a99'; WBC.forEach(c => { t.beginPath(); t.arc(c.x, c.y, c.r * 0.75, 0, Math.PI * 2); t.fill(); });
    })();

    function drawCells(g, ppu, R, ox, oy) {
      const span = R / ppu + 10;
      const tx0 = Math.floor((ox - span) / TILE), tx1 = Math.floor((ox + span) / TILE);
      const ty0 = Math.floor((oy - span) / TILE), ty1 = Math.floor((oy + span) / TILE);
      g.fillStyle = '#f4ece2'; g.fillRect(0, 0, 2 * R, 2 * R);
      if (ppu < 1.25) {
        for (let tx = tx0; tx <= tx1; tx++) for (let ty = ty0; ty <= ty1; ty++)
          g.drawImage(tileImg, R + (tx * TILE - ox) * ppu, R + (ty * TILE - oy) * ppu, TILE * ppu, TILE * ppu);
        return;
      }
      for (let tx = tx0; tx <= tx1; tx++) for (let ty = ty0; ty <= ty1; ty++) {
        const bx = tx * TILE, by = ty * TILE;
        const toX = x => R + (bx + x - ox) * ppu, toY = y => R + (by + y - oy) * ppu;
        RBC.forEach(c => {
          const x = toX(c.x), y = toY(c.y), r = c.r * ppu;
          if (x < -r || y < -r || x > 2 * R + r || y > 2 * R + r) return;
          g.fillStyle = '#c9463f'; g.beginPath(); g.ellipse(x, y, r, r * c.e, c.a, 0, Math.PI * 2); g.fill();
          g.fillStyle = '#e48a80'; g.beginPath(); g.ellipse(x, y, r * 0.78, r * c.e * 0.78, c.a, 0, Math.PI * 2); g.fill();
          g.fillStyle = '#f2c2b9'; g.beginPath(); g.ellipse(x, y, r * 0.4, r * c.e * 0.4, c.a, 0, Math.PI * 2); g.fill();
        });
        PLT.forEach(c => {
          const x = toX(c.x), y = toY(c.y);
          if (x < -9 || y < -9 || x > 2 * R + 9 || y > 2 * R + 9) return;
          g.fillStyle = '#8d5bb8'; g.beginPath(); g.arc(x, y, c.r * ppu, 0, Math.PI * 2); g.fill();
        });
        WBC.forEach(c => {
          const x = toX(c.x), y = toY(c.y), r = c.r * ppu;
          if (x < -r || y < -r || x > 2 * R + r || y > 2 * R + r) return;
          g.fillStyle = '#eadcf0'; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
          g.fillStyle = '#c9a8dc';
          for (let i = 0; i < 40; i++) { const a = i * 2.39996, rr = Math.sqrt(i / 40) * r * 0.9; g.beginPath(); g.arc(x + rr * Math.cos(a), y + rr * Math.sin(a), 0.25 * ppu, 0, Math.PI * 2); g.fill(); }
          g.fillStyle = '#5b2d8c';
          [[-0.38, -0.12, 0.34], [0.05, -0.32, 0.3], [0.36, 0.08, 0.32], [-0.05, 0.3, 0.26]].forEach(([dx, dy, rr]) => {
            const ca = Math.cos(c.rot), sa = Math.sin(c.rot);
            g.beginPath(); g.arc(x + (dx * ca - dy * sa) * r, y + (dx * sa + dy * ca) * r, rr * r, 0, Math.PI * 2); g.fill();
          });
        });
      }
    }

    const off = document.createElement('canvas'); const og = off.getContext('2d');
    function geom() {
      const { w, h } = SC;
      const R = Math.min(w, h) * 0.46;
      const M = S.obj * S.eye;
      const ppu = 6e-5 * R * M;                                   // screen px per µm
      const delta = 0.61 * LAMBDA[S.light] / NA[S.width];          // smallest resolvable detail (µm)
      return { R, M, ppu, delta, sigma: delta * ppu * 0.45 };
    }

    function draw() {
      const { ctx, w, h, dpr } = SC; if (!w) return;
      const g0 = geom(), { R, ppu, sigma } = g0;
      const cx = w / 2, cy = h / 2;
      const size = Math.ceil(2 * R * dpr);
      if (off.width !== size) { off.width = off.height = size; }
      og.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawCells(og, ppu, R, S.ox, S.oy);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#020308'; ctx.fillRect(0, 0, w, h);
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
      if (sigma > 0.3) ctx.filter = `blur(${sigma.toFixed(2)}px)`;
      ctx.drawImage(off, cx - R, cy - R, 2 * R, 2 * R);
      ctx.filter = 'none';
      if (TINT[S.light]) { ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = TINT[S.light]; ctx.fillRect(cx - R, cy - R, 2 * R, 2 * R); ctx.globalCompositeOperation = 'source-over'; }
      const vg = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R);
      vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.55)');
      ctx.fillStyle = vg; ctx.fillRect(cx - R, cy - R, 2 * R, 2 * R);
      ctx.restore();
      ctx.save(); ctx.strokeStyle = '#1b2033'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(cx, cy, R + 5, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = 'rgba(95,227,255,.35)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx, cy, R + 11, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      // scale bar (10 µm or 100 µm)
      const bar = ppu * 10 > 30 ? 10 : 100, bl = bar * ppu;
      if (bl < R) {
        ctx.save(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx + R * 0.35, cy + R * 0.72); ctx.lineTo(cx + R * 0.35 + bl, cy + R * 0.72); ctx.stroke(); ctx.restore();
        label(ctx, `${bar} µm`, cx + R * 0.35 + bl / 2, cy + R * 0.72 - 12, { color: '#fff', size: 11, bg: 'rgba(0,0,0,.5)' });
      }
      label(ctx, `×${g0.M}`, cx - R * 0.72, cy - R * 0.72, { color: '#fff', size: 13, weight: 700, bg: 'rgba(0,0,0,.55)' });
      if (!S.moved) label(ctx, '✥ drag to move the slide', cx, cy + R * 0.86, { color: C.amber, size: 11, bg: 'rgba(0,0,0,.6)' });
    }

    function wbcCentred(g0) {
      const wrap = v => ((v % TILE) + TILE * 1.5) % TILE - TILE / 2;
      return WBC.some(c => Math.hypot(wrap(c.x - S.ox), wrap(c.y - S.oy)) * g0.ppu < 0.35 * g0.R);
    }

    function update() {
      const g0 = geom();
      out.M.textContent = `×${g0.M}  (${S.obj} × ${S.eye})`;
      const fov = 2 * g0.R / g0.ppu;
      out.fov.textContent = fov >= 1000 ? `${(fov / 1000).toFixed(2)} mm` : `${fov.toFixed(0)} µm`;
      out.res.textContent = `${g0.delta.toFixed(2)} µm`;
      out.res.className = 'ro-v ' + (g0.sigma > 3.5 ? 'bad' : g0.delta < 0.6 ? 'good' : '');
      if (g0.sigma > 3.5)
        setStatus(status, 'bad', `<b>Empty magnification!</b> The image is bigger but blurrier: diffraction smears out any detail smaller than ${g0.delta.toFixed(1)} µm. The textbook's cure is a <b>wider objective</b> and <b>blue light</b>.`);
      else if (g0.M < 100)
        setStatus(status, 'info', `<b>Low power: wide view.</b> Every red dot is a red blood cell. This is how you <em>find</em> things before zooming in.`);
      else
        setStatus(status, 'good', `<b>Sharp.</b> Details down to about ${g0.delta.toFixed(2)} µm are visible. Notice the pale dimple in the middle of each red blood cell.`);
      if (g0.M === 400) complete('l3-scope-400', { el: $('[data-check="l3-scope-400"]', root), msg: '×40 objective × ×10 eye-piece!' });
      if (g0.M === 600 && S.width === 'wide' && S.light === 'blue') complete('l3-scope-sharp', { el: $('[data-check="l3-scope-sharp"]', root), msg: 'Wide objective + blue light!' });
      if (g0.M >= 100 && wbcCentred(g0)) complete('l3-scope-wbc', { el: $('[data-check="l3-scope-wbc"]', root), msg: 'White blood cell found!' });
      draw();
    }

    const pick = (attr, group, key, conv = v => v) => $$(`[data-${attr}]`, root).forEach(b => b.addEventListener('click', () => {
      S[key] = conv(b.dataset[attr]); press($(group), b); update();
    }));
    pick('obj', '#scope-obj', 'obj', Number);
    pick('eye', '#scope-eye', 'eye', Number);
    pick('light', '#scope-light', 'light');
    pick('width', '#scope-width', 'width');

    let last = null;
    const sched = throttle(update);
    cv.addEventListener('pointerdown', e => { last = { x: e.clientX, y: e.clientY }; try { cv.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } cv.style.cursor = 'grabbing'; });
    cv.addEventListener('pointermove', e => {
      if (!last) return;
      const g0 = geom();
      S.ox -= (e.clientX - last.x) / g0.ppu; S.oy -= (e.clientY - last.y) / g0.ppu;
      last = { x: e.clientX, y: e.clientY }; S.moved = true; sched();
    });
    const end = () => { last = null; cv.style.cursor = 'grab'; };
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
    ready = true; update();
    redraws.push(update);
  })();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => redraws.forEach(f => f()));
})();
