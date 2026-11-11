/* =========================================================
   Class 10 · Unit 10 hub hero — "you are the flame"
   A lattice of particles. Wherever the cursor goes it heats
   them: they jiggle harder, glow hotter, and pass the heat on
   to their neighbours (conduction). Left alone, they cool.
   ========================================================= */
(function () {
  'use strict';
  const L = window.Lumen;
  const cv = document.getElementById('hero-canvas'); if (!cv) return;
  const hint = document.getElementById('hero-hint');
  const GAP = 30;
  let P = [], cols = 0, rows = 0, tnow = 0, ready = false;
  const st = L.fitCanvas(cv, () => ready && build());   // rebuild the lattice whenever the canvas resizes
  const flame = { x: 0, y: 0, on: false, user: false, last: 0 };

  function build() {
    const { w, h } = st; if (!w) return;
    cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
    P = [];
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      P.push({ x: i * GAP + (j % 2 ? GAP / 2 : 0), y: j * GAP + 6, T: 0, ph: Math.random() * 6.28, ph2: Math.random() * 6.28 });
    }
  }
  // temperature (0…1) → colour: deep blue → violet → amber → white-hot
  const STOPS = [[0, [70, 110, 220]], [0.3, [169, 139, 255]], [0.55, [255, 95, 120]], [0.8, [255, 198, 92]], [1, [255, 248, 225]]];
  function col(T, a) {
    T = Math.max(0, Math.min(1, T));
    let k = 0; while (k < STOPS.length - 2 && T > STOPS[k + 1][0]) k++;
    const [t0, c0] = STOPS[k], [t1, c1] = STOPS[k + 1], f = (T - t0) / (t1 - t0);
    return `rgba(${c0.map((v, i) => Math.round(v + (c1[i] - v) * f)).join(',')},${a})`;
  }

  function step(dt) {
    const n = P.length; if (!n) return;
    // heat input from the flame
    if (flame.on) {
      const R = 95;
      for (let k = 0; k < n; k++) {
        const p = P[k], d = Math.hypot(p.x - flame.x, p.y - flame.y);
        if (d < R) p.T += dt * 2.6 * (1 - d / R);
      }
    }
    // conduction between neighbours (explicit diffusion on the grid) + slow cooling
    const next = new Float32Array(n);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const k = j * cols + i, T = P[k].T;
      let s = 0, m = 0;
      if (i > 0) { s += P[k - 1].T; m++; } if (i < cols - 1) { s += P[k + 1].T; m++; }
      if (j > 0) { s += P[k - cols].T; m++; } if (j < rows - 1) { s += P[k + cols].T; m++; }
      // a particle also gains a little from a hotter one just below it (a hint of convection: heat rises)
      const below = j < rows - 1 ? P[k + cols].T : T;
      next[k] = T + dt * (1.7 * (s / m - T) - 0.16 * T + 0.25 * Math.max(0, below - T));
    }
    for (let k = 0; k < n; k++) P[k].T = Math.max(0, Math.min(1.15, next[k]));
  }

  function draw(t) {
    const { ctx, w, h } = st; if (!w) return;
    ctx.clearRect(0, 0, w, h);
    // bonds first (faint), then particles
    ctx.lineWidth = 1;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols - 1; i++) {
      const a = P[j * cols + i], b = P[j * cols + i + 1];
      const T = (a.T + b.T) / 2;
      if (T < 0.04) continue;
      ctx.strokeStyle = col(T, Math.min(0.35, T * 0.5));
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let k = 0; k < P.length; k++) {
      const p = P[k], T = p.T;
      const amp = L.reduceMotion ? 0 : 0.6 + T * 7;
      const x = p.x + Math.sin(t * (9 + T * 30) + p.ph) * amp;
      const y = p.y + Math.cos(t * (11 + T * 34) + p.ph2) * amp;
      const r = 1.6 + T * 2.4;
      if (T > 0.08) {
        ctx.fillStyle = col(T, 0.1 + T * 0.18);
        ctx.beginPath(); ctx.arc(x, y, r * 3.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = col(T, 0.32 + T * 0.68);
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    // the flame itself
    if (flame.on) {
      const g = ctx.createRadialGradient(flame.x, flame.y, 2, flame.x, flame.y, 46);
      g.addColorStop(0, 'rgba(255,240,200,.85)'); g.addColorStop(.35, 'rgba(255,170,70,.35)'); g.addColorStop(1, 'rgba(255,90,60,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(flame.x, flame.y, 46, 0, Math.PI * 2); ctx.fill();
    }
  }

  const hero = cv.parentElement;
  hero.addEventListener('pointermove', e => {
    const r = cv.getBoundingClientRect();
    flame.x = e.clientX - r.left; flame.y = e.clientY - r.top; flame.on = true; flame.user = true; flame.last = tnow;
    if (hint) hint.textContent = 'Watch the heat spread from particle to particle, then fade when you move away.';
  });
  hero.addEventListener('pointerleave', () => { flame.on = false; });

  L.animateWhileVisible(cv, (dt, t) => {
    tnow = t;
    // demo flame wanders near the bottom-right until someone takes over
    if (!flame.user || t - flame.last > 6) {
      const { w, h } = st;
      flame.on = true; flame.user = false;
      flame.x = w * (0.68 + 0.2 * Math.sin(t * 0.37));
      flame.y = h * (0.72 + 0.12 * Math.sin(t * 0.61 + 1));
    }
    const sub = 2; for (let s = 0; s < sub; s++) step(dt / sub);
    draw(t);
  });
  ready = true; build();
})();
