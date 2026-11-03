/* Renders window.TVV_COLUMN into the cosmos column. v6.1: this file loads in the page head (head scripts
   hold back the first paint), and a one-line inline call right after the column draws it, so the column is
   complete in the very first frame and looks identical on every page. */
window.TVV_COLUMN_RENDER = function(){
  var list = document.getElementById('cosmos-list'), items = window.TVV_COLUMN || [];
  if (!list) return;
  var here = location.pathname.split('/').pop() || 'index.html';
  items.forEach(function(it, i){
    if (!it || !it.image) return;   // v6.0: link optional (shown-only pictures)
    var li = document.createElement('li'), a = document.createElement(it.link ? 'a' : 'div'), img;
    if (it.video) {   // v7.0 2026-11-01: looping muted animation, lazy-loaded (see TVV_COLUMN_VIDEOS below)
      a.className = 'cosmos-item ci-static ci-video'; li.className = 'ci-video-li' + (it.matte ? ' ci-matte' : '');
      var v = document.createElement('video');
      v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      ['muted', 'loop', 'playsinline', 'autoplay', 'disablepictureinpicture', 'disableremoteplayback'].forEach(function(k){ v.setAttribute(k, ''); });
      v.preload = 'none'; v.width = 1440; v.height = 1080;
      v.setAttribute('aria-label', it.alt || ''); v.setAttribute('data-poster', encodeURI(it.image));
      if (it.video.webm) v.setAttribute('data-webm', encodeURI(it.video.webm));
      if (it.video.mp4) v.setAttribute('data-mp4', encodeURI(it.video.mp4));
      var vc = document.createElement('span'); vc.className = 'ci-cap'; vc.textContent = it.caption || '';
      a.appendChild(v); a.appendChild(vc); li.appendChild(a); list.appendChild(li);
      return;
    }
    img = document.createElement('img');
    a.className = 'cosmos-item'; if (it.link) a.href = it.link; else a.classList.add('ci-static');
    if (it.matte) li.className = 'ci-matte';
    if (it.newTab){ a.target = '_blank'; a.rel = 'noopener'; }
    if (it.link && it.link === here) a.setAttribute('data-here', '');
    var lq = window.TVV_LQIP && window.TVV_LQIP[it.image];   // v6.1: tiny preview painted at once, under the full picture
    if (lq) img.style.background = '#000 url("' + lq + '") center / cover no-repeat';
    img.src = it.image;
    if (it.image2x) { img.srcset = it.image + ' 1280w, ' + it.image2x + ' ' + (it.image2xWidth || 1920) + 'w'; img.sizes = '(max-width: 820px) 60vw, 24vw'; }
    img.alt = it.alt || ''; img.width = 1280; img.height = it.tall ? 1080 : 720;
    if (it.tall) a.classList.add('ci-tall');
    if (i > 4) img.loading = 'lazy';   // v6.0: was i > 3; the chessboard (3rd) joined the first-frame set, so the same pictures as before stay eager
    else { img.decoding = 'sync'; img.setAttribute('fetchpriority', 'high'); }   // v6.1: drawn in the very first frame of each page, so the column never blinks
    if (it.hires) img.setAttribute('data-hires', it.hires);
    var cap = document.createElement('span'); cap.className = 'ci-cap'; cap.textContent = it.caption || '';
    a.appendChild(img); a.appendChild(cap);
    if (it.label || it.newTab){
      var lab = document.createElement('span'); lab.className = 'ci-label';
      lab.textContent = (it.label || '') + (it.newTab ? ' (opens in new tab)' : '');
      a.appendChild(lab);
    }
    li.appendChild(a); list.appendChild(li);
  });
  if (window.TVV_COLUMN_VIDEOS) window.TVV_COLUMN_VIDEOS(list);
  // Keep the column's scroll position from page to page, so it reads as one steady column.
  var col = document.getElementById('cosmos');
  try { var y = +sessionStorage.getItem('tvv-col-y'); if (y) col.scrollTop = y; } catch(e){}
  window.addEventListener('pagehide', function(){ try { sessionStorage.setItem('tvv-col-y', col.scrollTop); } catch(e){} });
};

/* v7.0 2026-11-01: column animations. Nothing is fetched until a video comes within about one screen of view
   (IntersectionObserver), so the first paint and the page transitions are untouched. Then the poster and the
   sources (WebM first, MP4 fallback) are attached and it plays, muted and looping; it pauses when scrolled out
   of view. With prefers-reduced-motion: reduce only the poster is shown and nothing plays. */
window.TVV_COLUMN_VIDEOS = function(root){
  var vids = [].slice.call((root || document).querySelectorAll('video[data-poster]'));
  if (!vids.length) return;
  var rm = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  function arm(v){
    if (v.hasAttribute('data-armed')) return; v.setAttribute('data-armed', '');
    v.poster = v.getAttribute('data-poster');
    if (rm.matches) { v.removeAttribute('autoplay'); v.autoplay = false; return; }
    [['data-webm', 'video/webm'], ['data-mp4', 'video/mp4']].forEach(function(p){
      var u = v.getAttribute(p[0]); if (!u) return;
      var s = document.createElement('source'); s.src = u; s.type = p[1]; v.appendChild(s);
    });
    v.setAttribute('data-sourced', ''); v.preload = 'auto'; v.load();
  }
  function play(v){ if (rm.matches || !v.hasAttribute('data-sourced')) return; v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function(){}); }
  if (!('IntersectionObserver' in window)) { vids.forEach(function(v){ arm(v); play(v); }); return; }
  var near = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { arm(e.target); near.unobserve(e.target); } }); }, { rootMargin: '100% 100% 100% 100%' });
  var seen = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { arm(e.target); play(e.target); } else if (!e.target.paused) e.target.pause(); }); }, { threshold: 0.15 });
  vids.forEach(function(v){ near.observe(v); seen.observe(v); });
  var onRm = function(){ vids.forEach(function(v){ if (rm.matches) { v.pause(); try { v.currentTime = 0; } catch(e){} } }); };
  if (rm.addEventListener) rm.addEventListener('change', onRm); else if (rm.addListener) rm.addListener(onRm);
};
