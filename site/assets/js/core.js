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
    ctx.font = `${weight} ${size}px ${font === 'mono' ? '"Figtree", system-ui, sans-serif' : font === 'serif' ? 'italic "STIX Two Text", "Times New Roman", Georgia, serif' : '"Bricolage Grotesque", "Figtree", system-ui, sans-serif'}`;
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
    label(ctx, text, (x1 + x2) / 2, y, { color, size: 11, bg: 'rgba(5,9,21,.8)' });
  }
  function pulseRing(ctx, x, y, t, color = '#ffc65c') {
    const f = (t % 1.6) / 1.6;
    ctx.save(); ctx.strokeStyle = color; ctx.globalAlpha = 1 - f; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, 8 + f * 16, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  }
  /* a side-view eye looking left; its front (pupil) is at x - r */
  function drawEye(ctx, x, y, r = 17) {
    const g = ctx.createRadialGradient(x - r * .3, y - r * .3, 2, x, y, r + 1);
    g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#a9b4dc');
    ctx.save();
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#23a6c9'; ctx.beginPath(); ctx.ellipse(x - r * .76, y, r * .21, r * .47, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#05080f'; ctx.beginPath(); ctx.ellipse(x - r * .86, y, r * .1, r * .22, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  /* a biconvex lens centred at (x, y) */
  function drawLens(ctx, x, y, halfH, bulge = 12) {
    const lg = ctx.createLinearGradient(x - bulge, 0, x + bulge, 0);
    lg.addColorStop(0, 'rgba(95,227,255,.08)'); lg.addColorStop(.5, 'rgba(95,227,255,.3)'); lg.addColorStop(1, 'rgba(95,227,255,.08)');
    ctx.save();
    ctx.beginPath(); ctx.moveTo(x, y - halfH); ctx.quadraticCurveTo(x + bulge * 2, y, x, y + halfH); ctx.quadraticCurveTo(x - bulge * 2, y, x, y - halfH);
    ctx.fillStyle = lg; ctx.fill(); ctx.strokeStyle = 'rgba(95,227,255,.75)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();
  }
  function setStatus(el, state, html) { el.dataset.state = state; el.lastElementChild.innerHTML = html; }
  function press(group, btn) { $$('[aria-pressed]', group).forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')); }
  function throttle(fn) { let q = false; return () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; fn(); }); }; }
  /* photons travelling along polylines [[x,y],...] (screen coordinates) */
  function photons(ctx, paths, t, { speed = 110, gap = 90, r = 2.4, w = 1e5, h = 1e5 } = {}) {
    if (reduceMotion) return;
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    paths.forEach(({ pts, col }, ri) => {
      const segs = []; let tot = 0;
      for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); segs.push(l); tot += l; }
      for (let s0 = (t * speed + ri * 30) % gap; s0 < tot; s0 += gap) {
        let s = s0, i = 0; while (i < segs.length - 1 && s > segs[i]) { s -= segs[i]; i++; }
        const a = pts[i], b = pts[i + 1], fr = segs[i] ? s / segs[i] : 0;
        const x = a[0] + (b[0] - a[0]) * fr, y = a[1] + (b[1] - a[1]) * fr;
        if (x < -5 || x > w + 5 || y < -5 || y > h + 5) continue;
        ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
    });
    ctx.restore();
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
    refreshLabCounts();
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
    const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status');
    t.innerHTML = '<svg class="t-ic" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#1F7A45"/><path d="m7.5 12.5 3 3 6-6.5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      `<span class="t-msg">${text}</span>` + (xp ? `<strong class="xp-plus">+${xp} XP</strong>` : '');
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 3400);
  }

  function confetti() {
    if (reduceMotion) return;
    const c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const W = c.width = innerWidth, H = c.height = innerHeight;
    const cols = ['#2B50C8', '#B8460B', '#F2B84B', '#1F7A45', '#7A4FB0', '#6CC6E8'];
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
        if (!$('.opt-l', b)) b.innerHTML = `<span class="opt-l">${letters[i]}</span><span>${b.innerHTML}</span>`;
      });
      const solve = (btn, fresh) => {
        q.classList.add('solved');
        opts.forEach(o => o.disabled = true);
        btn.classList.add('correct');
        fb.hidden = false; fb.className = 'quiz-fb ok';
        fb.innerHTML = '<b>Right.</b> ' + (q.dataset.explain || btn.dataset.why || '');
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
      const startLabel = (next.textContent || '').trim() || 'Start solution';
      // header row: "Numerical 10.7 ............ Step 2 of 5"
      const head = $('.steps-head', box), qn = head && $('.qn', head);
      let counter = null;
      if (head && qn) {
        const top = document.createElement('div'); top.className = 'steps-top';
        if (/^\d+\.\d+$/.test(qn.textContent.trim())) qn.textContent = 'Numerical ' + qn.textContent.trim();
        top.appendChild(qn);
        counter = document.createElement('span'); counter.className = 'steps-count';
        top.appendChild(counter);
        head.insertBefore(top, head.firstChild);
      }
      let i = 0;
      const sync = () => {
        steps.forEach((s, k) => s.classList.toggle('shown', k < i));
        next.disabled = i >= steps.length;
        next.textContent = i === 0 ? startLabel : i >= steps.length ? 'Solved' : 'Next step';
        if (counter) counter.textContent = i === 0 ? `${steps.length} steps` : `Step ${Math.min(i, steps.length)} of ${steps.length}`;
        if (reset) reset.hidden = i === 0;
        if (i >= steps.length && box.dataset.check) complete(box.dataset.check, { msg: box.dataset.msg || 'Numerical worked through!' });
        box.dispatchEvent(new CustomEvent('steps:change', { detail: { step: i, total: steps.length } }));
      };
      next.addEventListener('click', () => { i = Math.min(steps.length, i + 1); sync(); });
      all && all.addEventListener('click', () => { i = steps.length; sync(); });
      reset && reset.addEventListener('click', () => { i = 0; sync(); });
      sync();
    });
  }

  /* Q&A: opening a model answer counts as "reviewed" */
  function initQA() {
    $$('.qa details').forEach(d => {
      const sum = $('summary', d);
      const label = sum ? sum.textContent.trim() : '';
      const sync = () => { if (sum && /^show /i.test(label)) sum.textContent = d.open ? label.replace(/^show /i, 'Hide ') : label; };
      d.addEventListener('toggle', () => {
        sync();
        const qa = d.closest('.qa');
        if (d.open && qa && qa.dataset.check) complete(qa.dataset.check, { msg: 'Answer reviewed' });
      });
      sync();
    });
  }

  /* ---------- table of contents + scroll spy ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  // "10.1 Least distance…" → number + title
  function splitNum(t) { const m = /^(\d+(?:\.\d+)*|Q)\s+(.*)$/.exec(t.trim()); return m ? [m[1], m[2]] : ['', t.trim()]; }

  let tocItems = [];
  function initTOC() {
    tocItems = $$('[data-toc]');
    const toc = $('.toc ol');
    if (toc) {
      tocItems.forEach(s => {
        const li = document.createElement('li');
        if (s.dataset.tocSub !== undefined) li.className = 'sub';
        const [n, t] = splitNum(s.dataset.toc);
        li.innerHTML = `<a href="#${s.id}">${n && li.className !== 'sub' ? `<span class="toc-n">${esc(n)}</span>` : ''}<span>${esc(n && li.className === 'sub' ? s.dataset.toc : t)}</span></a>`;
        toc.appendChild(li);
      });
    }
    const links = toc ? $$('a', toc) : [];
    const mbT = $('.lsn-mbar .mb-t');
    const spy = () => {
      let cur = 0;
      tocItems.forEach((s, i) => { if (s.getBoundingClientRect().top < 160) cur = i; });
      links.forEach((a, i) => a.classList.toggle('active', i === cur));
      // the mobile bar names the current top-level section
      if (mbT && tocItems.length) {
        let top = cur; while (top > 0 && tocItems[top].dataset.tocSub !== undefined) top--;
        mbT.textContent = tocItems[top].dataset.toc;
        currentTop = tocItems[top];
      }
    };
    addEventListener('scroll', spy, { passive: true }); spy();
  }
  let currentTop = null;

  /* ---------- phones: lesson bar + sections sheet ---------- */
  function initLessonBar() {
    const id = lessonId(); if (!id) return;
    const top = $('.topbar'); if (!top) return;
    const kicker = $('.lesson-hero .kicker span');
    const lessonNo = kicker ? (/(Lesson\s+\d+)/.exec(kicker.textContent) || [])[1] : '';
    const bar = document.createElement('div');
    bar.className = 'lsn-mbar';
    bar.innerHTML = `<div class="mb-txt"><div class="mb-k">${esc(lessonNo || 'This lesson')} · <span data-lesson-pct>0%</span> done</div><div class="mb-t"></div></div>
      <button type="button" aria-haspopup="dialog"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>Sections</button>`;
    top.insertAdjacentElement('afterend', bar);
    $('button', bar).addEventListener('click', openSheet);
  }

  function openSheet() {
    const id = lessonId(); if (!id) return;
    closeSheet(true);
    const s = lessonStats(id);
    const title = ($('.lesson-hero h1') || {}).textContent || 'This lesson';
    const kicker = $('.lesson-hero .kicker span');
    const lessonNo = kicker ? (/(Lesson\s+\d+)/.exec(kicker.textContent) || [])[1] : '';
    // sections and sub-sections from the TOC, plus every lab, in page order
    const rows = [];
    $$('[data-toc], .lab').forEach(el => {
      if (el.classList.contains('lab') && el.dataset.toc === undefined) {
        const lis = $$('.challenges li', el), done = lis.filter(l => l.classList.contains('done')).length;
        const badge = ($('.lab-badge', el) || {}).textContent || 'Lab';
        const name = ($('.lab-head h3', el) || {}).textContent || '';
        rows.push({ href: '#' + el.id, t: `${badge.split('·')[0].trim()} · ${name}`, sub: true, lab: el.id, x: lis.length ? `${done}/${lis.length}` : '' });
        return;
      }
      const sub = el.dataset.tocSub !== undefined;
      const [n, t] = splitNum(el.dataset.toc);
      rows.push({ href: '#' + el.id, n: sub ? '' : n, t: sub ? el.dataset.toc : t, sub, cur: el === currentTop });
    });
    const back = document.createElement('div'); back.className = 'backdrop';
    const sh = document.createElement('section');
    sh.className = 'sec-sheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true'); sh.setAttribute('aria-label', 'Sections');
    sh.innerHTML = `<div class="grab" aria-hidden="true"></div>
      <header><div><h2>${esc((lessonNo ? lessonNo + ' · ' : '') + title)}</h2>
        <p class="sh-p">${s.done} of ${s.total} checkpoints · ${s.pct}%</p>
        <div class="bar"><span style="width:${s.pct}%"></span></div></div>
        <button type="button" class="sheet-x" aria-label="Close sections"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></header>
      <nav aria-label="Sections"><ol>${rows.map(r => `<li${r.sub ? ' class="sub"' : ''}><a href="${r.href}"${r.cur ? ' aria-current="true"' : ''}${r.lab ? ` data-open-lab="${r.lab}"` : ''}>${r.sub ? '' : `<span class="n">${esc(r.n)}</span>`}<span class="t">${esc(r.t)}</span>${r.cur ? '<span class="x">You\'re here</span>' : r.x ? `<span class="x">${r.x}</span>` : ''}</a></li>`).join('')}</ol></nav>`;
    document.body.append(back, sh);
    document.documentElement.classList.add('lock');
    requestAnimationFrame(() => { back.classList.add('open'); sh.classList.add('open'); });
    back.addEventListener('click', () => closeSheet());
    $('.sheet-x', sh).addEventListener('click', () => closeSheet());
    $$('a', sh).forEach(a => a.addEventListener('click', e => {
      const labId = a.dataset.openLab;
      closeSheet(true);
      if (labId && isPhone()) { e.preventDefault(); openLab(document.getElementById(labId)); }
    }));
    sh.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
    $('.sheet-x', sh).focus();
  }
  function closeSheet(instant) {
    const sh = $('.sec-sheet'), back = $('.backdrop');
    if (!sh) return;
    document.documentElement.classList.remove('lock');
    if (instant) { sh.remove(); back && back.remove(); return; }
    sh.classList.remove('open'); back && back.classList.remove('open');
    setTimeout(() => { sh.remove(); back && back.remove(); }, 280);
  }

  /* ---------- labs: screen + tray layout, full-screen view on phones ---------- */
  const isPhone = () => window.matchMedia('(max-width: 700px)').matches;
  const BOOK_RX = /numerical|example|textbook|load|^\s*q\s*\d/i;
  function initLabs() {
    $$('.lab').forEach((lab, k) => {
      if (lab.dataset.built) return; lab.dataset.built = '1';
      if (!lab.id) lab.id = 'lab-' + (k + 1);
      const kids = Array.from(lab.children);
      const pick = sel => kids.filter(c => c.matches(sel));
      const head = pick('.lab-head')[0], stages = pick('.lab-stage'), status = pick('.status')[0];
      const readouts = pick('.readouts'), controls = pick('.lab-controls'), actions = pick('.lab-actions');
      const goals = pick('.challenges')[0], foot = pick('.lab-foot')[0];
      const used = new Set([head, ...stages, status, ...readouts, ...controls, ...actions, goals, foot]);
      const others = kids.filter(c => !used.has(c));

      // dark screen holding the canvases and the live status line
      const screen = document.createElement('div'); screen.className = 'lab-screen';
      stages.forEach(s => screen.appendChild(s));
      if (status) screen.appendChild(status);
      const body = document.createElement('div'); body.className = 'lab-body';
      if (stages.length || status) body.appendChild(screen);
      readouts.forEach(r => body.appendChild(r));
      others.forEach(o => body.appendChild(o));

      // tray: Controls / From book / Goals (tabs only show on phones)
      const tray = document.createElement('div'); tray.className = 'lab-tray';
      const tabs = document.createElement('div'); tabs.className = 'tray-tabs'; tabs.setAttribute('role', 'tablist');
      tray.appendChild(tabs);
      const panels = [];
      const addPanel = (key, label, nodes) => {
        if (!nodes.length) return;
        const p = document.createElement('div'); p.className = 'tray-panel'; p.dataset.key = key;
        nodes.forEach(n => p.appendChild(n));
        const b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.key = key; b.textContent = label;
        tabs.appendChild(b); tray.appendChild(p); panels.push([b, p]);
      };
      const bookActions = actions.filter(a => {
        const btns = $$('button, a', a);
        return btns.length && btns.every(b => BOOK_RX.test(b.textContent));
      });
      bookActions.forEach(a => { if (!$('.book-k', a)) a.insertAdjacentHTML('afterbegin', '<span class="book-k">Load from the book:</span>'); });
      addPanel('controls', 'Controls', [...controls, ...actions.filter(a => !bookActions.includes(a))]);
      addPanel('book', 'From book', bookActions);
      if (goals) addPanel('goals', 'Goals', [goals]);
      const hint = document.createElement('p'); hint.className = 'tray-hint';
      hint.textContent = 'The screen stays put while you change things. Tap ‹ to go back to the lesson.';
      tray.appendChild(hint);
      const select = key => panels.forEach(([b, p]) => { const on = b.dataset.key === key; b.setAttribute('aria-selected', on); p.classList.toggle('on', on); });
      panels.forEach(([b]) => b.addEventListener('click', () => select(b.dataset.key)));
      if (panels.length) select(panels[0][0].dataset.key);

      // phone-only bits: a header for the full-screen view and an "open" button
      const badge = head ? ($('.lab-badge', head) || {}).textContent || '' : '';
      const name = head ? ($('h3', head) || {}).textContent || '' : '';
      const fbar = document.createElement('div'); fbar.className = 'lab-focusbar';
      fbar.innerHTML = `<button type="button" class="fb-back" aria-label="Back to the lesson"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="fb-txt"><div class="fb-k">${esc(badge.trim())}</div><div class="fb-t">${esc(name)}</div></div><span class="fb-goals"></span>`;
      const open = document.createElement('button'); open.type = 'button'; open.className = 'btn lab-open';
      open.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Open the lab';
      open.addEventListener('click', () => openLab(lab));
      $('.fb-back', fbar).addEventListener('click', () => closeLab(true));

      lab.innerHTML = '';
      lab.append(fbar);
      if (head) lab.append(head);
      lab.append(body, open, tray);
      if (foot) lab.append(foot);
    });
    refreshLabCounts();
    addEventListener('popstate', () => { if ($('.lab.focus')) closeLab(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && $('.lab.focus')) closeLab(true); });
    // leaving phone size while a lab is open
    window.matchMedia('(max-width: 700px)').addEventListener('change', e => { if (!e.matches && $('.lab.focus')) closeLab(true); });
  }
  let labScroll = 0, labPushed = false;
  function openLab(lab) {
    if (!lab) return;
    labScroll = scrollY;
    lab.classList.add('focus');
    document.documentElement.classList.add('lock');
    try { history.pushState({ lumenLab: lab.id }, ''); labPushed = true; } catch (e) { labPushed = false; }
    const b = $('.fb-back', lab); b && b.focus();
  }
  function closeLab(viaButton) {
    const lab = $('.lab.focus'); if (!lab) return;
    lab.classList.remove('focus');
    document.documentElement.classList.remove('lock');
    window.scrollTo({ top: lab.getBoundingClientRect().top + labScroll - 90, behavior: 'instant' });
    if (viaButton && labPushed) { labPushed = false; history.back(); } else labPushed = false;
  }
  function refreshLabCounts() {
    $$('.lab').forEach(lab => {
      const lis = $$('.challenges li', lab); if (!lis.length) return;
      const done = lis.filter(l => l.classList.contains('done')).length;
      const h4 = $('.challenges h4', lab);
      if (h4) {
        let n = $('.ch-n', h4);
        if (!n) { n = document.createElement('span'); n.className = 'ch-n'; h4.append(' ', n); }
        n.textContent = `· ${done} of ${lis.length} · +10 XP each`;
      }
      const g = $('.fb-goals', lab); if (g) g.textContent = `${done}/${lis.length} done`;
      const tab = $('.tray-tabs [data-key="goals"]', lab); if (tab) tab.textContent = `Goals ${done}/${lis.length}`;
    });
  }

  /* ---------- light / dark theme ---------- */
  const THEME_KEY = 'lumen-theme';
  function savedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function currentTheme() { return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'; }
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    $$('.theme-btn').forEach(b => {
      b.setAttribute('aria-pressed', t === 'dark');
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      b.title = b.getAttribute('aria-label');
    });
    const meta = $('meta[name="theme-color"]:not([media])');
    if (meta) meta.content = t === 'dark' ? '#121417' : '#F5F4EF';
  }
  function initTheme() {
    applyTheme(currentTheme());
    $$('.theme-btn').forEach(b => b.addEventListener('click', () => {
      const t = currentTheme() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* private mode */ }
      applyTheme(t);
    }));
    // follow the system setting until the student picks one
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', e => { if (!savedTheme()) applyTheme(e.matches ? 'dark' : 'light'); });
  }

  /* ---------- progress on home, book and hub pages ---------- */
  // "id:fallbackTotal,id:fallbackTotal" → combined stats (fallbacks cover lessons not opened yet)
  function groupStats(spec) {
    const d = load(); let done = 0, total = 0;
    spec.split(',').map(x => x.trim()).filter(Boolean).forEach(part => {
      const [id, fb] = part.split(':');
      done += d[id] ? Object.keys(d[id]).length : 0;
      total += (d._totals && d._totals[id]) || +fb || 0;
    });
    return { done, total, pct: total ? Math.min(100, Math.round(done / total * 100)) : 0 };
  }
  function initProgressBits() {
    $$('[data-progress]').forEach(el => { el.style.width = groupStats(el.dataset.progress).pct + '%'; });
    $$('[data-progress-text]').forEach(el => {
      const s = groupStats(el.dataset.progressText);
      el.textContent = (el.dataset.format || '{done} of {total} checkpoints').replace('{done}', s.done).replace('{total}', s.total).replace('{pct}', s.pct);
    });
    $$('[data-lesson-state]').forEach(el => {
      const [id, fb] = el.dataset.lessonState.split(':');
      const s = groupStats(`${id}:${fb || 0}`);
      const card = el.closest('.lcard, .lrow');
      const done = s.total && s.done >= s.total;
      el.classList.remove('prog', 'done');
      if (done) { el.textContent = 'Mastered'; el.classList.add('done'); }
      else if (s.done) { el.textContent = `${s.pct}%${el.classList.contains('pill') ? ' done' : ''}`; el.classList.add('prog'); }
      else el.textContent = el.dataset.empty || 'Not started';
      if (card) card.classList.toggle('is-done', !!done);
      const n = card && $('.ln', card);
      if (n && done) n.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 5 5 9-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    });
    // first unfinished lesson in a list → "Continue Lesson N"
    $$('[data-continue]').forEach(a => {
      const list = a.dataset.continue.split(',').map(x => x.trim().split('|'));   // id:total|href|label
      for (const [key, href, lbl] of list) {
        const s = groupStats(key);
        if (!(s.total && s.done >= s.total)) { a.href = href; a.textContent = (s.done ? 'Continue ' : 'Start ') + lbl; break; }
      }
    });
    // home: resume the last lesson opened
    const rs = $('[data-resume]');
    if (rs) {
      let last = null; try { last = JSON.parse(localStorage.getItem('lumen-last')); } catch (e) { /* none */ }
      if (last && last.href) {
        const s = lessonStats(last.id);
        $('[data-rs-title]', rs).textContent = last.title;
        $('[data-rs-ctx]', rs).textContent = last.ctx;
        $('[data-rs-count]', rs).textContent = `${s.done} of ${s.total} checkpoints`;
        $('[data-rs-pct]', rs).textContent = s.pct + '%';
        $('[data-rs-bar]', rs).style.width = s.pct + '%';
        $$('[data-rs-link]', rs).forEach(l => { l.href = last.href; });
        rs.hidden = false;
      }
    }
  }
  function rememberLesson() {
    const id = lessonId(); if (!id) return;
    const kicker = $('.lesson-hero .kicker span');
    const no = kicker ? (/(Lesson\s+\d+)/.exec(kicker.textContent) || [])[1] : '';
    const h1 = $('.lesson-hero h1');
    const crumbs = $$('.crumbs a').map(a => a.textContent.trim());
    try {
      localStorage.setItem('lumen-last', JSON.stringify({
        id, href: location.pathname, t: Date.now(),
        title: (no ? no + ' · ' : '') + (h1 ? h1.textContent.trim() : document.title),
        ctx: crumbs.join(' · ')
      }));
    } catch (e) { /* private mode */ }
  }

  // "Show all 18 outcomes" style buttons: toggle .collapsed on the target list
  function initExpanders() {
    $$('[data-expand]').forEach(b => {
      const list = document.getElementById(b.dataset.expand); if (!list) return;
      const more = b.textContent, less = b.dataset.less || 'Show fewer';
      b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', list.id);
      b.addEventListener('click', () => {
        const open = list.classList.toggle('collapsed') === false;
        b.textContent = open ? less : more; b.setAttribute('aria-expanded', open);
      });
    });
  }

  function measureTopbar() {
    const t = $('.topbar'); if (!t) return;
    const set = () => document.documentElement.style.setProperty('--topbar-h', Math.round(t.getBoundingClientRect().height) + 'px');
    set(); addEventListener('resize', set);
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
    initTheme();
    measureTopbar();
    registerLesson();
    rememberLesson();
    initLessonBar();
    initLabs();
    initQuizzes();
    initSteps();
    initQA();
    initTOC();
    initReadProgress();
    initReveal();
    initProgressBits();
    initExpanders();
    refreshProgress(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  // KaTeX scripts are deferred; render once they arrive
  window.addEventListener('load', () => renderMath(document.body));

  return {
    $, $$, clamp, lerp, sci, fmt, reduceMotion,
    fitCanvas, drag, animateWhileVisible, bindRange,
    wavelengthRGB, rgba, colourName, arrow, label, roundRect,
    glowLine, dashLine, dimLine, pulseRing, drawEye, drawLens, setStatus, press, throttle, photons,
    complete, isDone, lessonStats, groupStats, totalXP, toast, confetti, renderMath, refreshProgress,
    openLab, closeLab, applyTheme
  };
})();
