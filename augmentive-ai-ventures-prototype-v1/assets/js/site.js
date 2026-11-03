/* Augmentive AI Ventures prototype v1 (built on the TechVestVentures v3 architecture).
   Transition + mobile menu + high-res art on 2560 px screens. Works from file:// (no fetch).
   The transition is switchable: see assets/js/config.js (site-wide, per page, per link).
   Transition: on an internal link click the Human and Machine Hands art fades in over the content area (600 ms),
   the next page opens under it and holds it about 3 s, then it fades out (600 ms) into that page.
   The cosmos column on the left stays put the whole time. A click or any key during the hold skips ahead.
   prefers-reduced-motion: a short fade only, no hold. */
(function(){
  var html = document.documentElement;
  var CFG = window.AAV_CONFIG || {};
  var FADE = CFG.fadeMs || 600, HOLD = (CFG.holdMs != null ? CFG.holdMs : 3000);
  var MODE = CFG.transition || 'all';
  var qm = /[?&]transition=(all|marked|off)/.exec(location.search);
  if (qm) { MODE = qm[1]; try { sessionStorage.setItem('aav-mode', MODE); } catch(_){} }
  else { try { MODE = sessionStorage.getItem('aav-mode') || MODE; } catch(_){} }
  if (html.getAttribute('data-transition') === 'off') MODE = 'off';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { FADE = 160; HOLD = 0; }
  html.style.setProperty('--fade', FADE + 'ms');

  var sky = new Image(); sky.src = 'assets/img/hands-1920.webp';
  if (sky.decode) sky.decode().catch(function(){});

  // ---- arriving: hold, then fade out ----
  var skipTimer = null;
  function reveal(){
    if (!html.classList.contains('tvv-arriving') || html.classList.contains('tvv-reveal')) return;
    clearTimeout(skipTimer);
    html.classList.add('tvv-reveal');
    setTimeout(function(){ html.classList.remove('tvv-arriving', 'tvv-reveal'); }, FADE + 60);
    document.removeEventListener('keydown', onSkipKey, true);
  }
  function onSkipKey(e){ if (e.key === 'Tab') return; e.preventDefault(); reveal(); }
  if (html.classList.contains('tvv-arriving')){
    skipTimer = setTimeout(reveal, HOLD);
    document.addEventListener('keydown', onSkipKey, true);
    var c = document.querySelector('.comet');
    if (c) c.addEventListener('click', reveal);
  }

  // ---- back/forward cache: never show a covered page ----
  window.addEventListener('pageshow', function(e){ if (e.persisted) html.classList.remove('tvv-leaving', 'tvv-arriving', 'tvv-reveal'); });

  // ---- leaving: fade in the comet, then open the next page ----
  function isInternal(a){
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return false;
    if (a.dataset.noComet !== undefined) return false;
    var t = a.getAttribute('data-transition');
    if (t === 'off') return false;
    if (MODE === 'off' && t !== 'on') return false;
    if (MODE === 'marked' && t !== 'on') return false;
    var href = a.getAttribute('href') || '';
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return false;
    return /\.html($|[?#])/.test(href);
  }
  var leavingTo = null;
  function go(){ if (leavingTo) { var d = leavingTo; leavingTo = null; location.href = d; } }
  document.addEventListener('click', function(e){
    if (leavingTo) { e.preventDefault(); go(); return; }          // click again = skip
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a');
    if (!isInternal(a)) return;
    var here = location.pathname.split('/').pop() || 'index.html';
    var href = a.getAttribute('href'), to = href.split(/[?#]/)[0];
    e.preventDefault();
    if (to === here && !html.classList.contains('tvv-hold')) return;
    leavingTo = href.replace(/([^?#]*)(\?[^#]*)?(#.*)?/, function(m, p, q, h){
      return p + (q ? q + '&' : '?') + 'via=comet' + (h || '');
    });
    try { sessionStorage.setItem('aav-comet', '1'); } catch(_){}
    html.classList.add('tvv-leaving');
    setTimeout(go, FADE);
  });
  document.addEventListener('keydown', function(e){ if (leavingTo && e.key !== 'Tab') go(); });

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

