/* TechVestVentures prototype v6.1 2026-10-30: mobile menu + high-res art on 2560 px screens (transitions: see transitions.js).
   Works from file:// (no fetch). */
(function(){
  var html = document.documentElement;
  // v6.1: the page transitions (internal clicks and Affiliated Venture Sites tiles) live in transitions.js.

  // ---- high-res art: only on screens 2560 px and wider, after load, not on data saver ----
  window.addEventListener('load', function(){
    var conn = navigator.connection || {};
    var wide = Math.max(window.innerWidth || 0, (window.screen && screen.width) || 0) >= 2560;
    if (!wide || conn.saveData) return;
    var imgs = [].slice.call(document.querySelectorAll('img[data-hires]'));
    function upgrade(img){
      var big = new Image();
      big.onload = function(){
        var swap = function(){ img.removeAttribute('srcset'); img.src = big.src; img.classList.add('hires'); };
        if (big.decode) big.decode().then(swap, function(){}); else swap();   // swap only once decoded: no blank frame
      };
      big.onerror = function(){};      // PNG not present (e.g. the zip copy): keep the WebP
      big.src = img.getAttribute('data-hires');
      img.removeAttribute('data-hires');
    }
    var comet = document.querySelector('.comet-img');
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if (en.isIntersecting){ io.unobserve(en.target); upgrade(en.target); } }); }, { rootMargin: '200px' });
      imgs.forEach(function(i){ if (i !== comet) io.observe(i); });
    } else imgs.forEach(function(i){ if (i !== comet) upgrade(i); });
    var idle = window.requestIdleCallback || function(f){ return setTimeout(f, 1500); };
    if (comet && comet.getAttribute('data-hires')) idle(function(){ upgrade(comet); });
  });

  // ---- mobile menu ----
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('site-nav');
  if (btn && nav){
    btn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && nav.classList.contains('open')){ nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }
})();

/* v3: Shift+B on any page opens the complete detail bio at once (no comet). Ignored while typing. */
document.addEventListener('keydown', function(e){
  var h = document.documentElement;
  if (e.key !== 'B' || !e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return;
  if (h.classList.contains('tvv-arriving') || h.classList.contains('tvv-leaving')) return;
  var t = e.target; if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  if (/bio-complete\.html$/.test(location.pathname)) return;
  location.href = 'bio-complete.html';
});
