/* =========================================================
   Lumen · core helpers shared by every page
   (classic script — works when opened straight from disk)
   ========================================================= */
window.Lumen = (function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- number formatting ---------- */
  const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  function sci(x, digits = 2) {
    if (x === 0 || !isFinite(x)) return String(x);
    const e = Math.floor(Math.log10(Math.abs(x)));
    const m = x / Math.pow(10, e);
    const exp = String(e).split('').map(c => SUP[c] || c).join('');
    return m.toFixed(digits) + ' × 10' + exp;
  }
  const fmt = (x, d = 1) => (Math.abs(x) < 1e-9 ? 0 : x).toFixed(d);

  /* ---------- canvas: crisp on any screen, redraw on resize ---------- */
  function fitCanvas(canvas, draw) {
    const ctx = canvas.getContext('2d');
    const st = { ctx, w: 0, h: 0, dpr: 1, canvas };
    function resize() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (Math.abs(r.width - st.w) < 0.5 && Math.abs(r.height - st.h) < 0.5 && dpr === st.dpr) return;
      st.w = r.width; st.h = r.height; st.dpr = dpr;
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (draw) draw();
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener('resize', resize);
    resize();
    st.resize = resize;
    return st;
  }

  /* pointer dragging on a canvas: handlers get canvas-space CSS pixels */
  function drag(canvas, { hit, start, move, end, hover }) {
    let active = null;
    const pos = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    canvas.addEventListener('pointerdown', e => {
      const p = pos(e);
      const h = hit ? hit(p.x, p.y) : true;
      if (!h) return;
      active = h;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
      start && start(p.x, p.y, h);
      move && move(p.x, p.y, h);
      e.preventDefault();
    });
    canvas.addEventListener('pointermove', e => {
      const p = pos(e);
      if (active) { move && move(p.x, p.y, active); return; }
      const h = hit ? hit(p.x, p.y) : false;
      canvas.style.cursor = h ? 'grab' : 'default';
      hover && hover(p.x, p.y, h);
    });
    const stop = e => { if (!active) return; active = null; canvas.style.cursor = 'default'; end && end(); };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
  }

  /* run a callback every frame only while the element is on screen */
  function animateWhileVisible(el, frame) {
    let visible = false, raf = 0, last = performance.now();
    const loop = t => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      frame(dt, t / 1000);
      if (visible) raf = requestAnimationFrame(loop);
    };
    new IntersectionObserver(es => {
      es.forEach(e => {
        const was = visible; visible = e.isIntersecting;
        if (visible && !was) { last = performance.now(); raf = requestAnimationFrame(loop); }
        if (!visible) cancelAnimationFrame(raf);
      });
    }, { threshold: 0.01 }).observe(el);
  }

  /* slider fill + value output */
  function bindRange(input, onInput) {
    const paint = () => {
      const p = (input.value - input.min) / (input.max - input.min) * 100;
      input.style.setProperty('--fill', p + '%');
    };
    input.addEventListener('input', () => { paint(); onInput && onInput(+input.value); });
    paint();
    return { set(v) { input.value = v; paint(); } };
  }

  /* ---------- colour of light ---------- */
  function wavelengthRGB(nm) {
    let r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm >= 440 && nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm >= 490 && nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm >= 510 && nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm >= 580 && nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm >= 645 && nm <= 780) { r = 1; }
    let f = 1;
    if (nm < 420) f = 0.55 + 0.45 * (nm - 380) / 40;
    else if (nm > 700) f = 0.55 + 0.45 * (780 - nm) / 80;
    const c = v => Math.round(255 * Math.pow(v * f, 0.8));
    return [c(r), c(g), c(b)];
  }
  const rgba = (rgb, a = 1) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
  function colourName(nm) {
    if (nm < 450) return 'violet';
    if (nm < 495) return 'blue';
    if (nm < 570) return 'green';
    if (nm < 590) return 'yellow';
    if (nm < 620) return 'orange';
    return 'red';
  }

  /* ---------- canvas drawing helpers ---------- */
  function arrow(ctx, x1, y1, x2, y2, { color = '#fff', width = 2.5, head = 10, dashed = false, glow = 0 } = {}) {
    const a = Math.atan2(y2 - y1, x2 - x1);
    ctx.save();
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round';
    if (glow) { ctx.shadowColor = color; ctx.shadowBlur = glow; }
    if (dashed) ctx.setLineDash([6, 5]);
    ctx.beginPath(); ctx.moveTo(x1, y1);
    ctx.lineTo(x2 - Math.cos(a) * head * 0.6, y2 - Math.sin(a) * head * 0.6); ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(a - 0.42), y2 - head * Math.sin(a - 0.42));
    ctx.lineTo(x2 - head * Math.cos(a + 0.42), y2 - head * Math.sin(a + 0.42));
    ctx.closePath();
    if (dashed) { ctx.globalAlpha *= .8; }
    ctx.fill();
    ctx.restore();
  }
  function label(ctx, text, x, y, { color = '#8b95bb', size = 12, align = 'center', base = 'middle', font = 'mono', weight = 500, bg = null } = {}) {
    ctx.save();
    ctx.font = `${weight} ${size}px ${font === 'mono' ? '"JetBrains Mono", Consolas, monospace' : font === 'serif' ? 'italic "Times New Roman", Georgia, serif' : '"Space Grotesk", system-ui, sans-serif'}`;
    ctx.textAlign = align; ctx.textBaseline = base;
    if (bg) {
      const m = ctx.measureText(text);
      const pw = 5, w = m.width + pw * 2, h = size + 6;
      let bx = align === 'center' ? x - w / 2 : align === 'right' ? x - w + pw : x - pw;
      let by = base === 'middle' ? y - h / 2 : base === 'bottom' ? y - h : y;
      ctx.fillStyle = bg; roundRect(ctx, bx, by, w, h, 5); ctx.fill();
    }
    ctx.fillStyle = color; ctx.fillText(text, x, y);
    ctx.restore();
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  /* ---------- progress & XP (localStorage) ---------- */
  const KEY = 'lumen-progress-v1';
  const XP_PER = 10;
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* private mode */ } }
  const lessonId = () => document.body.dataset.lesson || null;

  function totalXP() {
    const d = load(); let n = 0;
    Object.keys(d).forEach(k => { if (k !== '_totals') n += Object.keys(d[k]).length; });
    return n * XP_PER;
  }
  function lessonStats(id) {
    const d = load();
    const done = d[id] ? Object.keys(d[id]).length : 0;
    const total = d._totals && d._totals[id] || 0;
    return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
  }
  function isDone(id, check) { const d = load(); return !!(d[id] && d[id][check]); }

  function complete(check, { el = null, msg = null, silent = false } = {}) {
    const id = lessonId(); if (!id || !check) return false;
    const d = load(); d[id] = d[id] || {};
    if (el) el.classList.add('done');
    if (d[id][check]) return false;
    d[id][check] = Date.now(); save(d);
    if (!silent) toast(msg || 'Nice work!', XP_PER);
    refreshProgress(true);
    return true;
  }

  function refreshProgress(bump) {
    const xpEl = $('#xp');
    if (xpEl) {
      xpEl.querySelector('b').textContent = totalXP();
      if (bump) { xpEl.classList.remove('bump'); void xpEl.offsetWidth; xpEl.classList.add('bump'); }
    }
    const id = lessonId(); if (!id) return;
    const s = lessonStats(id);
    $$('[data-lesson-pct]').forEach(e => e.textContent = s.pct + '%');
    $$('[data-lesson-count]').forEach(e => e.textContent = `${s.done} / ${s.total}`);
    $$('[data-lesson-bar]').forEach(e => e.style.width = s.pct + '%');
    if (s.total && s.done >= s.total) {
      const m = $('.mastered');
      if (m && !m.classList.contains('show')) {
        m.classList.add('show');
        if (bump) confetti();
      }
    }
  }

  function registerLesson() {
    const id = lessonId(); if (!id) return;
    const checks = new Set($$('[data-check]').map(e => e.dataset.check));
    const d = load(); d._totals = d._totals || {}; d._totals[id] = checks.size; save(d);
    // restore ticked items
    $$('[data-check]').forEach(el => {
      if (!isDone(id, el.dataset.check)) return;
      if (el.matches('.challenges li')) el.classList.add('done');
    });
    refreshProgress(false);
  }

  /* ---------- toast + confetti ---------- */
  function toast(text, xp) {
    let wrap = $('.toast-wrap');
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
    const t = document.createElement('div'); t.className = 'toast';
    t.innerHTML = `<span>${text}</span>` + (xp ? `<span class="xp-plus">+${xp} XP</span>` : '');
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 3400);
  }

  function confetti() {
    if (reduceMotion) return;
    const c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const W = c.width = innerWidth, H = c.height = innerHeight;
    const cols = ['#5fe3ff', '#ff5fa8', '#ffc65c', '#5cf0a0', '#a98bff'];
    const P = Array.from({ length: 140 }, () => ({
      x: W / 2 + (Math.random() - .5) * 200, y: H * .55, vx: (Math.random() - .5) * 14, vy: -Math.random() * 16 - 6,
      r: Math.random() * 6 + 3, c: cols[(Math.random() * cols.length) | 0], a: Math.random() * 6, va: (Math.random() - .5) * .4
    }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      P.forEach(p => {
        p.vy += .45; p.x += p.vx; p.y += p.vy; p.a += p.va; p.vx *= .99;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore();
      });
      if (++f < 170) requestAnimationFrame(tick); else c.remove();
    })();
  }

  /* ---------- quizzes ---------- */
  function initQuizzes() {
    const id = lessonId();
    $$('.quiz').forEach(q => {
      const opts = $$('.quiz-opts button', q);
      const fb = $('.quiz-fb', q);
      const letters = 'abcdefgh';
      opts.forEach((b, i) => {
        if (!$('.opt-l', b)) b.innerHTML = `<span class="opt-l">${letters[i]})</span><span>${b.innerHTML}</span>`;
      });
      const solve = (btn, fresh) => {
        q.classList.add('solved');
        opts.forEach(o => o.disabled = true);
        btn.classList.add('correct');
        fb.hidden = false; fb.className = 'quiz-fb ok';
        fb.innerHTML = '<b>Correct!</b> ' + (q.dataset.explain || btn.dataset.why || '');
        renderMath(fb);
        if (fresh) complete(q.dataset.check, { msg: 'Correct answer!' });
      };
      opts.forEach(b => b.addEventListener('click', () => {
        if (b.hasAttribute('data-correct')) { solve(b, true); return; }
        b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong');
        fb.hidden = false; fb.className = 'quiz-fb no';
        fb.innerHTML = '<b>Not quite.</b> ' + (b.dataset.why || 'Have another look and try again.');
        renderMath(fb);
      }));
      if (id && q.dataset.check && isDone(id, q.dataset.check)) {
        const c = opts.find(o => o.hasAttribute('data-correct')); if (c) solve(c, false);
      }
    });
  }

  /* ---------- step-by-step solutions ---------- */
  function initSteps() {
    $$('.steps').forEach(box => {
      const steps = $$('li.step', box);
      const next = $('[data-next]', box), all = $('[data-all]', box), reset = $('[data-reset]', box);
      let i = 0;
      const sync = () => {
        steps.forEach((s, k) => s.classList.toggle('shown', k < i));
        next.disabled = i >= steps.length;
        next.textContent = i === 0 ? 'Start solution' : i >= steps.length ? 'Solved' : 'Next step →';
        if (reset) reset.hidden = i === 0;
        if (i >= steps.length && box.dataset.check) complete(box.dataset.check, { msg: 'Numerical worked through!' });
      };
      next.addEventListener('click', () => { i = Math.min(steps.length, i + 1); sync(); });
      all && all.addEventListener('click', () => { i = steps.length; sync(); });
      reset && reset.addEventListener('click', () => { i = 0; sync(); });
      sync();
    });
  }

  /* Q&A: opening a model answer counts as "reviewed" */
  function initQA() {
    $$('.qa details').forEach(d => d.addEventListener('toggle', () => {
      const qa = d.closest('.qa');
      if (d.open && qa && qa.dataset.check) complete(qa.dataset.check, { msg: 'Answer reviewed' });
    }));
  }

  /* ---------- table of contents + scroll spy ---------- */
  function initTOC() {
    const toc = $('.toc ol'); if (!toc) return;
    const items = $$('[data-toc]');
    items.forEach(s => {
      const li = document.createElement('li');
      if (s.dataset.tocSub !== undefined) li.className = 'sub';
      li.innerHTML = `<a href="#${s.id}">${s.dataset.toc}</a>`;
      toc.appendChild(li);
    });
    const links = $$('a', toc);
    const spy = () => {
      let cur = 0;
      items.forEach((s, i) => { if (s.getBoundingClientRect().top < 140) cur = i; });
      links.forEach((a, i) => a.classList.toggle('active', i === cur));
    };
    addEventListener('scroll', spy, { passive: true }); spy();
  }

  function initReadProgress() {
    const bar = $('.read-progress span'); if (!bar) return;
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
    };
    addEventListener('scroll', upd, { passive: true }); upd();
  }

  function initReveal() {
    const els = $$('.rv'); if (!els.length) return;
    if (!('IntersectionObserver' in window) || reduceMotion) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ---------- maths (KaTeX from CDN, optional) ---------- */
  const MATH_DELIMS = [
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false }
  ];
  function renderMath(el) {
    if (window.renderMathInElement) {
      try { window.renderMathInElement(el || document.body, { delimiters: MATH_DELIMS, throwOnError: false }); } catch (e) { /* ignore */ }
    }
  }

  function boot() {
    registerLesson();
    initQuizzes();
    initSteps();
    initQA();
    initTOC();
    initReadProgress();
    initReveal();
    refreshProgress(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  // KaTeX scripts are deferred; render once they arrive
  window.addEventListener('load', () => renderMath(document.body));

  return {
    $, $$, clamp, lerp, sci, fmt, reduceMotion,
    fitCanvas, drag, animateWhileVisible, bindRange,
    wavelengthRGB, rgba, colourName, arrow, label, roundRect,
    complete, isDone, lessonStats, totalXP, toast, confetti, renderMath, refreshProgress
  };
})();
