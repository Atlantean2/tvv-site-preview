/* TVV Cosmic Command Center (v7.7 2026-11-02): the four animated views, Galaxy, Lunar Galaxy, Orbits and Lunar Orbits.
   Lunar views (data-lunar="1" on the sky): each team star also carries 3-6 small role moons (the "moons" in the roster
   file) that orbit it. Moon labels show only on hover, tap or keyboard focus; the team label stays primary.
   ALL team data comes from assets/data/cosmos-roster.js (window.TVV_COSMOS_ROSTER). A weekly refresh swaps only that file.
   Galaxy page: a slowly rotating two-armed galaxy (gold and red) with the sun (Michaelangelo, chosen to represent Inspiration) at its core.
   Orbits page: a rotating stellar system, team stars orbiting the sun on four orbits.
   Each star is a real <button>. Pointing at it, tapping it, or focusing it with Tab shows a short explanation only
   (role and what it produces). Esc, a tap elsewhere, or moving away hides it. No contact links.
   Motion pauses while an explanation is showing, while the tab is hidden, and stops completely under
   prefers-reduced-motion. #team-<slug> (or #sun; the old #michael still works) in the address shows that star's explanation on load. */
(function(){
  var DATA = window.TVV_COSMOS_ROSTER; if (!DATA) return;
  var sky = document.getElementById('cc-sky'); if (!sky) return;
  var MODE = sky.getAttribute('data-mode') === 'orbits' ? 'orbits' : 'galaxy';
  var LUNAR = sky.getAttribute('data-lunar') === '1';
  var mq = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var reduce = mq.matches;
  var bg = sky.querySelector('canvas.cc-bg'), bgx = bg.getContext('2d');
  var fx = sky.querySelector('canvas.cc-fx'), fxx = fx.getContext('2d');
  var layer = sky.querySelector('.cc-stars');
  var TAU = Math.PI * 2, teams = DATA.teams || [];
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- roster date stamp ----------
  var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function niceDate(iso){ var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? MONTHS[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : (iso || ''); }
  [].forEach.call(document.querySelectorAll('[data-roster-asof]'), function(el){
    el.textContent = 'Roster as of ' + niceDate(DATA.asOf) + ' \u00b7 ' + teams.length + ' teams';
  });

  // ---------- stars as buttons ----------
  function mkStar(t, isSun){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cc-star' + (isSun ? ' cc-sun' : '');
    b.setAttribute('data-slug', t.slug);
    b.setAttribute('aria-label', isSun ? t.name + ', the sun' : t.name);
    b.innerHTML = '<span class="cc-orb" aria-hidden="true"></span><span class="cc-name" aria-hidden="true">' + esc(isSun ? (t.short || t.name) : t.name) + '</span>';
    layer.appendChild(b);
    return b;
  }
  var sunBtn = mkStar(DATA.sun, true);
  var MOON_SPEED = 0.32;                           // moons: radians per second around their star (about 20 s per turn)
  var stars = teams.map(function(t, ti){
    var s = { t: t, el: mkStar(t, false), moons: [], ph: ti * 1.13 };
    if (LUNAR) (t.moons || []).forEach(function(m, i){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cc-moon'; b.setAttribute('data-moon', t.slug + ':' + i);
      b.setAttribute('aria-label', m + ', a role in ' + t.name);
      b.innerHTML = '<span class="cc-mdot" aria-hidden="true"></span><span class="cc-mname" aria-hidden="true">' + esc(m) + '</span>';
      layer.appendChild(b); s.moons.push(b);
    });
    return s;
  });
  var armIdx = [0, 0], ringIdx = [0, 0, 0, 0, 0];
  stars.forEach(function(s){ var a = s.t.arm ? 1 : 0, k = Math.min(4, Math.max(1, s.t.ring || 1)); s.arm = a; s.ring = k; s.a = armIdx[a]++; s.r = ringIdx[k]++; });
  stars.forEach(function(s){ s.rn = ringIdx[s.ring]; s.el.style.setProperty('--s', s.t.size || 1.5); });
  var armN = Math.max(armIdx[0], armIdx[1]);

  // ---------- geometry ----------
  var W = 0, H = 0, cx = 0, cy = 0, R = 0, sx = 1, q = 1;
  function measure(){
    var r = sky.getBoundingClientRect();
    W = r.width; H = r.height; cx = W / 2; cy = H / 2;
    R = Math.min(W, H) / 2 - Math.max(28, Math.min(W, H) * 0.07);
    sx = Math.max(1, Math.min(1.85, (W / 2 - Math.max(70, W * 0.08)) / R));
    q = Math.max(0.55, Math.min(2.4, R / 330));
    sky.style.setProperty('--q', q.toFixed(3));
  }
  var K = 4.6, PHI = -0.55;                        // spiral: angle swept along an arm, start angle
  var GAL_SPEED = 0.028;                           // galaxy turn, radians per second (about 4 minutes per turn)
  function galaxyPt(arm, f, rot){ var r = R * (0.37 + 0.60 * f), a = arm * Math.PI + PHI + f * K + rot; return [cx + Math.cos(a) * r * sx, cy + Math.sin(a) * r]; }
  function ringR(k){ return R * (0.37 + 0.20 * (k - 1)); }
  function orbitAng(s, t){ var k = s.ring; return s.r * (TAU / Math.max(1, s.rn)) + k * 0.62 + 0.35 + t * (0.075 / Math.pow(k, 0.9)); }

  // ---------- static background: Klimt mosaic ----------
  function sizeCanvas(c, x){ var dpr = window.devicePixelRatio || 1; c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); x.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function drawBg(){
    sizeCanvas(bg, bgx);
    bgx.fillStyle = '#07050A'; bgx.fillRect(0, 0, W, H);
    var seed = 11; function rnd(){ seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    var n = Math.round(W * H / 1900);
    for (var i = 0; i < n; i++){
      var x = rnd() * W, y = rnd() * H, s = (1 + rnd() * 3.4) * Math.max(1, q * 0.8), c = rnd(), sq = rnd() < 0.55;
      bgx.globalAlpha = 0.16 + rnd() * 0.34;
      bgx.fillStyle = c < 0.02 ? '#2E8B57' : c < 0.33 ? '#B3122E' : c < 0.72 ? '#D4AF37' : '#F2D16B';
      if (sq) bgx.fillRect(x, y, s, s); else { bgx.beginPath(); bgx.arc(x, y, s / 2, 0, TAU); bgx.fill(); }
    }
    bgx.globalAlpha = 1;
  }
  // ---------- moving layer: galaxy arms or orbit rings, and the sun's glow ----------
  function drawFx(t){
    fxx.clearRect(0, 0, W, H);
    var rot = t * GAL_SPEED;
    if (MODE === 'galaxy'){
      for (var arm = 0; arm < 2; arm++){
        for (var pass = 0; pass < 2; pass++){
          fxx.beginPath();
          for (var k = 0; k <= 140; k++){ var p = galaxyPt(arm, -0.42 + 1.55 * k / 140, rot); if (k === 0) fxx.moveTo(p[0], p[1]); else fxx.lineTo(p[0], p[1]); }
          fxx.strokeStyle = arm === 0 ? '#D4AF37' : '#B3122E';
          fxx.globalAlpha = pass === 0 ? 0.13 : 0.32; fxx.lineWidth = pass === 0 ? 34 * q : 6 * q; fxx.lineCap = 'round'; fxx.stroke();
        }
        fxx.globalAlpha = 0.7; fxx.fillStyle = arm === 0 ? '#F2D16B' : '#E0485F';
        for (var d = 0; d <= 90; d++){ var pp = galaxyPt(arm, -0.38 + 1.48 * d / 90, rot); fxx.beginPath(); fxx.arc(pp[0], pp[1], 1.6 * q, 0, TAU); fxx.fill(); }
      }
    } else {
      for (var ring = 1; ring <= 4; ring++){
        var ro = ringR(ring);
        fxx.globalAlpha = 0.5; fxx.strokeStyle = ring % 2 ? '#D4AF37' : '#B3122E'; fxx.lineWidth = 1.6 * q;
        fxx.setLineDash([2 * q, 7 * q]); fxx.lineDashOffset = -t * 6 * q / ring;   // the dots drift with the orbit
        fxx.beginPath(); fxx.ellipse(cx, cy, ro * sx, ro, 0, 0, TAU); fxx.stroke();
        fxx.setLineDash([]); fxx.globalAlpha = 0.14; fxx.lineWidth = 12 * q;
        fxx.beginPath(); fxx.ellipse(cx, cy, ro * sx, ro, 0, 0, TAU); fxx.stroke();
      }
    }
    fxx.globalAlpha = 1;
    var pulse = reduce ? 1 : 1 + 0.06 * Math.sin(t * 0.9);
    var gr = 150 * q * pulse, g = fxx.createRadialGradient(cx, cy, 0, cx, cy, gr);
    g.addColorStop(0, 'rgba(255,244,194,.75)'); g.addColorStop(.35, 'rgba(212,175,55,.45)'); g.addColorStop(1, 'rgba(212,175,55,0)');
    fxx.fillStyle = g; fxx.beginPath(); fxx.arc(cx, cy, gr, 0, TAU); fxx.fill();
  }

  var pos = {};
  function place(el, slug, x, y){ pos[slug] = [x, y]; el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)'; }
  var tNow = 0;
  function layout(t){
    place(sunBtn, DATA.sun.slug, cx, cy);
    var rot = t * GAL_SPEED;
    stars.forEach(function(s){
      var p;
      if (MODE === 'galaxy') p = galaxyPt(s.arm, armN > 1 ? s.a / (armN - 1) : 0, rot);
      else { var a = orbitAng(s, t), ro = ringR(s.ring); p = [cx + Math.cos(a) * ro * sx, cy + Math.sin(a) * ro]; }
      place(s.el, s.t.slug, p[0], p[1]);
      if (s.moons.length){ var mr = moonR(s), n = s.moons.length;
        s.moons.forEach(function(b, i){ var a = s.ph + i * TAU / n + t * MOON_SPEED; place(b, 'm:' + s.t.slug + ':' + i, p[0] + Math.cos(a) * mr, p[1] + Math.sin(a) * mr); }); }
    });
    if (cur) placeTip();
  }
  function moonR(s){ return Math.max((14 + (s.t.size || 1.5) * 8) * q / 2 + 11 * q + 5, 29); }   // at least 29px so a moon sits outside the star's 44px touch target
  function drawMoonOrbits(){
    if (!LUNAR) return;
    fxx.globalAlpha = 0.28; fxx.lineWidth = 1; fxx.setLineDash([1.5, 4]);
    stars.forEach(function(s, i){ var p = pos[s.t.slug]; if (!p || !s.moons.length) return;
      fxx.strokeStyle = i % 2 ? '#E0485F' : '#F2D16B'; fxx.beginPath(); fxx.arc(p[0], p[1], moonR(s), 0, TAU); fxx.stroke(); });
    fxx.setLineDash([]); fxx.globalAlpha = 1;
  }
  function frame(t){ drawFx(t); layout(t); drawMoonOrbits(); }
  function resize(){ measure(); sizeCanvas(fx, fxx); drawBg(); frame(tNow); }

  // ---------- animation ----------
  var held = false, raf = 0, last = 0;
  function loop(now){
    if (!last) last = now;
    var dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (!held && !cur) { tNow += dt; frame(tNow); }
    raf = requestAnimationFrame(loop);
  }
  function startLoop(){ if (!reduce && !raf && !document.hidden){ last = 0; raf = requestAnimationFrame(loop); } }
  function stopLoop(){ if (raf){ cancelAnimationFrame(raf); raf = 0; } }
  document.addEventListener('visibilitychange', function(){ if (document.hidden) stopLoop(); else startLoop(); });
  function onReduce(e){ reduce = e.matches; if (reduce) stopLoop(); else startLoop(); frame(tNow); }
  if (mq.addEventListener) mq.addEventListener('change', onReduce); else if (mq.addListener) mq.addListener(onReduce);

  // ---------- the explanation (tooltip): role and content only ----------
  var tip = document.getElementById('cc-tip'), wrap = sky.parentNode;
  var tipK = tip.querySelector('.cc-tip-k'), tipN = tip.querySelector('.cc-tip-n'), tipR = tip.querySelector('.cc-tip-r'), tipP = tip.querySelector('.cc-tip-p span');
  var cur = null, curEl = null, pinned = false;
  function find(slug){ if (slug === DATA.sun.slug) return DATA.sun; for (var i = 0; i < teams.length; i++) if (teams[i].slug === slug) return teams[i]; return null; }
  function show(el, pin){
    var mid = el.getAttribute('data-moon'), slug, t, key;
    if (mid){
      var bits = mid.split(':'); t = find(bits[0]); if (!t || !t.moons) return;
      var mi = +bits[1]; key = 'm:' + mid;
      tipK.textContent = 'Role moon \u00b7 ' + t.name;
      tipN.textContent = t.moons[mi] || '';
      tipR.textContent = t.moonLine || ('One of the roles in ' + t.name + '.');
      tipP.textContent = ''; tip.querySelector('.cc-tip-p').hidden = true;
    } else {
      slug = el.getAttribute('data-slug'); t = find(slug); if (!t) return; key = slug;
      var isSun = t === DATA.sun;
      tipK.textContent = isSun ? 'The sun' : (MODE === 'orbits' ? 'Orbit ' + t.ring + ': ' + (DATA.rings[t.ring - 1] || '') : (t.arm ? 'Red arm' : 'Gold arm') + ' \u00b7 ' + (DATA.rings[t.ring - 1] || ''));
      tipN.textContent = t.name; tipR.textContent = t.role || ''; tipP.textContent = t.produces || '';
      tip.querySelector('.cc-tip-p').hidden = !t.produces;
    }
    if (curEl && curEl !== el){ curEl.classList.remove('cc-on'); curEl.removeAttribute('aria-describedby'); }
    cur = key; curEl = el; pinned = !!pin;
    if (mid){   // put the moon label on the side away from its star, so the team label stays readable
      var pm = pos[key], ps = pos[mid.split(':')[0]], side = 'd';
      if (pm && ps){ var dx = pm[0] - ps[0], dy = pm[1] - ps[1]; side = Math.abs(dx) > Math.abs(dy) * 0.6 ? (dx < 0 ? 'l' : 'r') : (dy < 0 ? 'u' : 'd'); }
      el.setAttribute('data-side', side);
    }
    el.classList.add('cc-on'); el.setAttribute('aria-describedby', 'cc-tip');
    if (mid){   // keep the moon label inside the sky: flip it to the other side if it would be cut off
      var mn = el.querySelector('.cc-mname'), sr = sky.getBoundingClientRect(), lr = mn.getBoundingClientRect();
      if (lr.right > sr.right - 4) el.setAttribute('data-side', 'l'); else if (lr.left < sr.left + 4) el.setAttribute('data-side', 'r');
    }
    tip.hidden = false; tip.classList.add('cc-shown');
    placeTip();
  }
  function hide(){
    if (!cur) return;
    if (curEl){ curEl.classList.remove('cc-on'); curEl.removeAttribute('aria-describedby'); }
    tip.classList.remove('cc-shown'); tip.hidden = true; cur = null; curEl = null; pinned = false;
  }
  function placeTip(){
    if (!cur || !pos[cur]) return;
    if (getComputedStyle(tip).position !== 'absolute'){ tip.style.left = ''; tip.style.top = ''; return; }  // phones: shown under the sky
    var p = pos[cur], tw = tip.offsetWidth, th = tip.offsetHeight, nm = curEl && curEl.querySelector('.cc-name, .cc-mname');
    var gap = Math.max(26 * q + 14, (nm ? nm.offsetWidth / 2 : 0) + 12);
    var sd = curEl && curEl.getAttribute('data-moon') ? curEl.getAttribute('data-side') : '', x, y;
    if (sd === 'l' || sd === 'r'){   // moon label runs sideways: put the explanation above or below the moon instead
      var vg = 10 * q + 14;
      x = p[0] - tw / 2;
      y = p[1] < H * 0.5 ? p[1] + vg : p[1] - vg - th;
    } else {
      x = p[0] < W * 0.55 ? p[0] + gap : p[0] - gap - tw;
      y = p[1] - th / 2;
    }
    x = Math.max(8, Math.min(W - tw - 8, x));
    y = Math.max(8, Math.min(H - th - 8, y));
    tip.style.left = x.toFixed(0) + 'px'; tip.style.top = y.toFixed(0) + 'px';
  }
  layer.addEventListener('pointerover', function(e){ var b = e.target.closest('.cc-star, .cc-moon'); if (!b) return; held = true; if (e.pointerType === 'mouse' && !pinned) show(b, false); });
  layer.addEventListener('pointerout', function(e){ var b = e.target.closest('.cc-star, .cc-moon'); if (!b || b.contains(e.relatedTarget)) return; held = false; if (e.pointerType === 'mouse' && !pinned && curEl === b) hide(); });
  layer.addEventListener('focusin', function(e){ var b = e.target.closest('.cc-star, .cc-moon'); if (b){ held = true; if (!(pinned && curEl === b)) show(b, false); } });
  layer.addEventListener('focusout', function(e){ held = false; if (!pinned && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.cc-star, .cc-moon'))) hide(); });
  layer.addEventListener('click', function(e){
    var b = e.target.closest('.cc-star, .cc-moon'); if (!b) return; e.stopPropagation();
    if (pinned && curEl === b) hide(); else show(b, true);
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && cur){ e.preventDefault(); hide(); held = false; } });
  document.addEventListener('click', function(e){ if (cur && !tip.contains(e.target) && !(e.target.closest && e.target.closest('.cc-star, .cc-moon'))) hide(); });

  // ---------- the plain list of all teams (for reading and screen readers) ----------
  var list = document.getElementById('cc-list');
  if (list){
    var groups = DATA.rings.map(function(n, i){ return { title: (MODE === 'orbits' ? 'Orbit ' + (i + 1) + ': ' : '') + n, items: teams.filter(function(t){ return t.ring === i + 1; }) }; });
    var html = '<li class="cc-group"><ul class="cc-rows"><li class="cc-row cc-row-sun"><b>' + esc(DATA.sun.name) + '</b> ' + esc(DATA.sun.role) + '</li></ul></li>';
    groups.forEach(function(g){
      if (!g.items.length) return;
      html += '<li class="cc-group"><p class="cc-group-h">' + esc(g.title) + '</p><ul class="cc-rows">' +
        g.items.map(function(t){ return '<li class="cc-row"><b>' + esc(t.name) + '</b> ' + esc(t.role) + (t.produces ? ' <span class="cc-row-p">Produces: ' + esc(t.produces) + '</span>' : '') +
          (t.moons && t.moons.length ? '<span class="cc-row-m">Role moons' + (t.moonLine ? ' (' + esc(t.moonLine.replace(/\.$/, '')) + ')' : '') + ':</span><ul class="cc-moons">' + t.moons.map(function(m){ return '<li>' + esc(m) + '</li>'; }).join('') + '</ul>' : '') + '</li>'; }).join('') + '</ul></li>';
    });
    list.innerHTML = html;
  }

  // ---------- go ----------
  resize();
  var rt = 0; window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(resize, 120); });
  if (window.ResizeObserver) new ResizeObserver(function(){ clearTimeout(rt); rt = setTimeout(resize, 60); }).observe(sky);
  startLoop();
  var h = location.hash.replace(/^#/, ''), want = (h === 'sun' || h === 'michael') ? DATA.sun.slug : (/^team-/.test(h) ? h.slice(5) : ''), mm = /^moon-([a-z0-9-]+)-(\d+)$/.exec(h);
  if (want){ var el = layer.querySelector('[data-slug="' + want.replace(/[^a-z0-9-]/g, '') + '"]'); if (el) show(el, true); }
  else if (mm && LUNAR){ var me = layer.querySelector('[data-moon="' + mm[1] + ':' + mm[2] + '"]'); if (me) show(me, true); }
})();
