/* Chapter hub hero: a convex lens; the visitor's cursor is the light source. */
(function () {
  'use strict';
  const cv = document.getElementById('hero-canvas'); if (!cv) return;
  const L = window.Lumen;
  const st = L.fitCanvas(cv, null);
  const host = cv.parentElement;
  let target = null, lastMove = -1e9, src = null;

  const aim = e => {
    const r = cv.getBoundingClientRect();
    target = { x: e.clientX - r.left, y: e.clientY - r.top };
    lastMove = performance.now();
  };
  host.addEventListener('pointermove', aim);
  host.addEventListener('pointerdown', aim);
  const hint = document.getElementById('hero-hint');
  if (hint && window.matchMedia && matchMedia('(pointer: coarse)').matches) hint.textContent = 'Tap anywhere on the light show: you are the light source.';
  host.addEventListener('pointerleave', () => { lastMove = -1e9; });

  const NR = 15;
  function frame(dt, t) {
    const { ctx, w, h } = st; if (!w) return;
    const narrow = w < 760;
    const lx = narrow ? w * 0.62 : w * 0.68, cy = narrow ? h * 0.3 : h * 0.5;
    const Lh = Math.min(h * (narrow ? 0.22 : 0.34), 250);
    const f = Math.min(w, h) * (narrow ? 0.16 : 0.2);

    // where should the light source be?
    let goal;
    if (target && performance.now() - lastMove < 3500) goal = { x: Math.min(target.x, lx - 24), y: target.y };
    else goal = { x: lx - f * (2.1 + 0.95 * Math.sin(t * 0.33)), y: cy + Lh * 0.55 * Math.sin(t * 0.47) };
    src = src ? { x: src.x + (goal.x - src.x) * 0.08, y: src.y + (goal.y - src.y) * 0.08 } : goal;

    ctx.clearRect(0, 0, w, h);
    // axis
    ctx.strokeStyle = 'rgba(140,160,255,.14)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
    // focal points
    [-1, 1, -2, 2].forEach(k => {
      ctx.fillStyle = Math.abs(k) === 1 ? 'rgba(169,139,255,.8)' : 'rgba(169,139,255,.35)';
      ctx.beginPath(); ctx.arc(lx + k * f, cy, 3, 0, Math.PI * 2); ctx.fill();
    });

    // thin-lens image of the source
    const p = lx - src.x, yo = cy - src.y;
    let img = null, parallel = false;
    if (Math.abs(p - f) < 2) parallel = true;
    else { const q = p * f / (p - f); img = { x: lx + q, y: cy + yo * q / p, real: q > 0 }; }

    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < NR; i++) {
      const a = i / (NR - 1);
      const yl = cy - Lh * 0.9 + a * Lh * 1.8;
      const hue = 190 + 150 * a;
      const col = `hsla(${hue},100%,66%,`;
      // incoming
      ctx.strokeStyle = col + '.42)'; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(src.x, src.y); ctx.lineTo(lx, yl);
      // outgoing
      let dx, dy;
      if (parallel) { dx = lx - src.x; dy = cy - src.y; }
      else if (img.real) { dx = img.x - lx; dy = img.y - yl; }
      else { dx = lx - img.x; dy = yl - img.y; }
      const len = Math.hypot(dx, dy) || 1, far = w * 1.5;
      ctx.lineTo(lx + dx / len * far, yl + dy / len * far);
      ctx.stroke();
      // photons
      if (!L.reduceMotion) {
        const seg1 = Math.hypot(lx - src.x, yl - src.y);
        for (let s = (t * 140 + i * 37) % 120; s < seg1 + w; s += 120) {
          let x, y;
          if (s < seg1) { x = src.x + (lx - src.x) * s / seg1; y = src.y + (yl - src.y) * s / seg1; }
          else { const r = s - seg1; x = lx + dx / len * r; y = yl + dy / len * r; }
          if (x > w || y < 0 || y > h) continue;
          ctx.fillStyle = col + '.95)';
          ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
        }
      }
    }
    ctx.restore();

    // lens
    const tw = 18;
    const lg = ctx.createLinearGradient(lx - tw, 0, lx + tw, 0);
    lg.addColorStop(0, 'rgba(95,227,255,.06)'); lg.addColorStop(.5, 'rgba(95,227,255,.28)'); lg.addColorStop(1, 'rgba(95,227,255,.06)');
    ctx.beginPath(); ctx.moveTo(lx, cy - Lh); ctx.quadraticCurveTo(lx + tw * 2, cy, lx, cy + Lh); ctx.quadraticCurveTo(lx - tw * 2, cy, lx, cy - Lh);
    ctx.fillStyle = lg; ctx.fill(); ctx.strokeStyle = 'rgba(95,227,255,.7)'; ctx.lineWidth = 1.5; ctx.stroke();

    // source glow
    const g = ctx.createRadialGradient(src.x, src.y, 0, src.x, src.y, 40);
    g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.2, 'rgba(255,198,92,.6)'); g.addColorStop(1, 'rgba(255,198,92,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(src.x, src.y, 40, 0, Math.PI * 2); ctx.fill();
    // real image glow
    if (img && img.real && img.x < w && img.y > 0 && img.y < h) {
      const gi = ctx.createRadialGradient(img.x, img.y, 0, img.x, img.y, 34);
      gi.addColorStop(0, 'rgba(255,255,255,.9)'); gi.addColorStop(.25, 'rgba(255,95,168,.55)'); gi.addColorStop(1, 'rgba(255,95,168,0)');
      ctx.fillStyle = gi; ctx.beginPath(); ctx.arc(img.x, img.y, 34, 0, Math.PI * 2); ctx.fill();
    }
  }
  L.animateWhileVisible(cv, frame);
})();
