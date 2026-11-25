/* Home page: a draggable convex-lens figure (thin lens, f = 70 units, lens at x = 280). */
(function () {
  'use strict';
  const svg = document.getElementById('home-lens'); if (!svg) return;
  const LX = 280, AXIS = 170, F = 70, H = 66;      // lens x, axis y, focal length, object height
  const MIN = 40, MAX = 184;                       // object x range (keeps the real image on screen)
  const obj = document.getElementById('hl-obj');
  const r1 = document.getElementById('hl-r1'), r2 = document.getElementById('hl-r2'), r3 = document.getElementById('hl-r3');
  const img = document.getElementById('hl-img'), imgLine = img.querySelector('line'), imgHead = img.querySelector('path');
  const imgT = document.getElementById('hl-img-t');
  let x = 120;

  function render() {
    const p = LX - x, q = p * F / (p - F), xi = LX + q, hi = H * q / p;
    const top = AXIS - H, tip = AXIS + hi;
    obj.setAttribute('transform', `translate(${x} ${AXIS})`);
    // ray 1: parallel to the axis, then through the far focus; ray 2: through the centre; ray 3: through the near focus, then parallel
    r1.setAttribute('d', `M${x} ${top} L${LX} ${top} L${xi} ${tip}`);
    r2.setAttribute('d', `M${x} ${top} L${xi} ${tip}`);
    r3.setAttribute('d', `M${x} ${top} L${LX} ${tip} L${xi} ${tip}`);
    imgLine.setAttribute('x1', xi); imgLine.setAttribute('x2', xi);
    imgLine.setAttribute('y1', AXIS); imgLine.setAttribute('y2', tip - 6);
    imgHead.setAttribute('d', `M${xi - 9} ${tip - 14} ${xi} ${tip} ${xi + 9} ${tip - 14}`);
    imgT.setAttribute('x', xi + 14); imgT.setAttribute('y', tip + 8);
    obj.setAttribute('aria-valuenow', Math.round((x - MIN) / (MAX - MIN) * 100));
    obj.setAttribute('aria-valuetext', `object ${Math.round(p / 10)} units from the lens; image ${(hi / H).toFixed(2)} times its size`);
  }

  function toSvgX(clientX, clientY) {
    const pt = svg.createSVGPoint(); pt.x = clientX; pt.y = clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse()).x;
  }
  let dragging = false, dx = 0;
  obj.addEventListener('pointerdown', e => {
    dragging = true; dx = toSvgX(e.clientX, e.clientY) - x;
    svg.classList.add('dragging');
    try { obj.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    e.preventDefault();
  });
  obj.addEventListener('pointermove', e => {
    if (!dragging) return;
    x = Math.min(MAX, Math.max(MIN, toSvgX(e.clientX, e.clientY) - dx));
    render();
  });
  const stop = () => { dragging = false; svg.classList.remove('dragging'); };
  obj.addEventListener('pointerup', stop); obj.addEventListener('pointercancel', stop);
  obj.addEventListener('keydown', e => {
    const step = e.shiftKey ? 12 : 4;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') x = Math.max(MIN, x - step);
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') x = Math.min(MAX, x + step);
    else return;
    e.preventDefault(); render();
  });
  render();
})();
