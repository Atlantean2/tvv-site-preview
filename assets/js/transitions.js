/* TechVestVentures v6.1 2026-10-30: PowerPoint-style fade transitions.

   The six transition pictures, shown in turn (place in the list kept in sessionStorage):
     1 Red Arrow Comet  2 Building Blocks Cosmos  3 Ventures Constellation
     4 Human and Machine Hands  5 Humanities and Sciences  6 Golden Cube Unfolding

   Internal page clicks (2 s in all):
     0.7 s  the current page fades gradually into the picture (ease-in-out, opacity only, GPU layer)
     0.6 s  the picture holds while the next page opens underneath it (page load time counts here)
     0.7 s  the picture fades gradually into the new page
   Why v6 looked jerky (measured frame by frame in Chrome): the fade was a short 0.4 s, and when the
   next page opened, the screen went fully black for about 0.1 s (column and picture both empty),
   then the picture and the column pictures popped back in one by one, and the hint text after them.
   v6.1 fixes this: the next picture is decoded before the click, and the incoming page keeps
   everything hidden until its picture and column pictures are decoded, so the browser keeps the
   last frame on screen instead of painting an empty page (Chrome and Safari do this "paint holding").

   Affiliated Venture Sites tiles (new tab): the click opens go.html in a new tab, which fades the
   next picture in from black, holds it while the outside site starts loading, then opens the site
   in that same tab. (A page cannot fade into another company's site, so the site replaces the
   picture as soon as it is ready.)

   A click or any key skips ahead. prefers-reduced-motion: a short fade only, no hold.
   Preview one picture: add ?preview=transition&tx=1 ... &tx=6 to any page address.
   Loads in the page head (so nothing paints before it is ready); TVV_TX_INIT() runs right after the picture. */
window.TVV_TX_INIT = function(){
  var A = [
    { name: "Red Arrow Comet",          src: "assets/img/comet-1920.webp",                                   big: "assets/img/art/concept-3-red-arrow-comet-3840.webp" },
    { name: "Building Blocks Cosmos",   src: "assets/img/art/concept-1-building-blocks-cosmos-1920.webp",    big: "assets/img/art/concept-1-building-blocks-cosmos-3840.webp" },
    { name: "Ventures Constellation",   src: "assets/img/art/concept-4-ventures-constellation-1920.webp",    big: "assets/img/art/concept-4-ventures-constellation-3840.webp" },
    { name: "Human and Machine Hands",  src: "assets/img/art/concept-2-human-and-machine-hands-1920.webp",   big: "assets/img/art/concept-2-human-and-machine-hands-3840.webp" },
    { name: "Humanities and Sciences",  src: "assets/img/art/concept-5-humanities-and-sciences-1920.webp",   big: "assets/img/art/concept-5-humanities-and-sciences-3840.webp" },
    { name: "Golden Cube Unfolding",    src: "assets/img/art/concept-6-golden-cube-unfolding-1920.webp",     big: "assets/img/art/concept-6-golden-cube-unfolding-3840.webp" }
  ];
  // Outside addresses the tab transition (go.html) may open. Anything else is refused.
  var SITES = [
    "https://techvesteconometrics.com", "https://intualityai.com/the-science/", "https://brysonusa.com",
    "https://cognomiq.com", "https://stemxbank.com", "https://ultimateplan.net", "https://hanscalmeyer.com",
    "https://web.archive.org/web/20141225211952/http://www.ideamille.com/",
    "augmentive-ai-ventures-prototype-v1/index.html"
  ];
  // v7.1 2026-11-01: the TVV Daily Digest, from the single DIGEST_URL constant in assets/js/digest.js.
  // Allowed only once that constant holds a real https address; while it is the "#...pending" placeholder the
  // Digest tile does not navigate at all, so go.html never receives it.
  if (window.TVV_DIGEST_LIVE && window.TVV_DIGEST_URL) SITES.unshift(window.TVV_DIGEST_URL);
  var FADE_IN = 700, HOLD = 600, FADE_OUT = 700;            // 2.0 s in all
  var KEY = 'tvv-tx', T0 = 'tvv-t0';
  var html = document.documentElement, img = document.querySelector('.comet-img');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { FADE_IN = 160; HOLD = 0; FADE_OUT = 160; }
  html.style.setProperty('--fade-in', FADE_IN + 'ms');
  html.style.setProperty('--fade-out', FADE_OUT + 'ms');

  // the same file on every page and in go.html, so the picture never changes resolution mid-transition
  var wideDevice = Math.max(window.innerWidth || 0, (window.screen && screen.width) || 0) * (window.devicePixelRatio || 1) > 2200;
  var conn = navigator.connection || {};
  function url(i){ return (wideDevice && !conn.saveData) ? A[i].big : A[i].src; }

  function stored(){ try { var v = sessionStorage.getItem(KEY); return v === null ? -1 : (+v % A.length); } catch(e){ return -1; } }
  function save(n){ try { sessionStorage.setItem(KEY, n); } catch(e){} }
  var shown = -1, ready = null;
  function show(i){                           // put picture i in the (hidden) comet layer and decode it now
    if (!img) return Promise.resolve();
    if (shown === i && ready) return ready;
    shown = i;
    var lq = window.TVV_LQIP && window.TVV_LQIP[url(i)], box = img.parentNode;
    if (box) box.style.backgroundImage = lq ? 'url("' + lq + '")' : '';      // tiny preview, painted at once
    img.src = url(i);
    var pending = !img.complete;
    if (pending) img.classList.add('tx-pending');                           // full picture fades in over the preview once decoded
    ready = (img.decode ? img.decode() : Promise.resolve()).catch(function(){
      if (img.getAttribute('src') !== A[i].src){ img.src = A[i].src; return img.decode ? img.decode().catch(function(){}) : null; }   // big file missing: use the 1920 copy
    }).then(function(){ if (pending) requestAnimationFrame(function(){ img.classList.remove('tx-pending'); }); });
    return ready;
  }
  function warm(i){ var p = new Image(); p.src = url(i); if (p.decode) p.decode().catch(function(){}); }
  function timeout(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function race(p, ms){ return Promise.race([p, timeout(ms)]); }

  // ---------- go.html: the new-tab transition before an outside site ----------
  if (html.classList.contains('tvv-go')){
    var q = location.search, mt = /[?&]tx=(\d)/.exec(q), mto = /[?&]to=([^&]*)/.exec(q);
    var to = ''; try { to = mto ? decodeURIComponent(mto[1]) : ''; } catch(e){}
    if (SITES.indexOf(to) < 0) to = '';
    var link = document.querySelector('.go-link');
    if (link && to) { link.href = to; link.textContent = to.replace(/^https?:\/\//, '').replace(/^\.\.\/.*/, 'Augmentive AI Ventures prototype'); }
    if (!to){ html.classList.add('tvv-go-bad'); return; }
    try { var pc = document.createElement('link'); pc.rel = 'preconnect'; pc.href = new URL(to, location.href).origin; if (/^https:/.test(pc.href)) document.head.appendChild(pc); } catch(e){}
    var gi = mt ? (Math.max(1, +mt[1]) - 1) % A.length : 0, left = false;
    function leave(){ if (left) return; left = true; location.replace(to); }
    if (reduce) { leave(); return; }
    // the outside sites all start on a white or near-white page, so the picture dissolves to white before the
    // address changes; the Augmentive prototype is black, so it dissolves to black. No hard cut either way.
    var endBg = /^https:/.test(to) ? '#fff' : '#000';
    race(show(gi), 800).then(function(){
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ html.classList.add('tvv-go-in'); }); });
      setTimeout(function(){
        if (left) return;
        html.style.setProperty('--go-end', endBg);                 // painted behind the fully opaque picture
        requestAnimationFrame(function(){ html.classList.add('tvv-go-out'); });
        setTimeout(leave, FADE_OUT + 40);
      }, FADE_IN + HOLD);
    });
    document.addEventListener('click', leave); document.addEventListener('keydown', function(e){ if (e.key !== 'Tab') leave(); });
    return;
  }

  // ---------- which picture this page shows ----------
  var m = /[?&]tx=(\d)/.exec(location.search), cur;
  var arriving = html.classList.contains('tvv-arriving');
  if (html.classList.contains('tvv-hold') && m) cur = (Math.max(1, +m[1]) - 1) % A.length;      // preview
  else if (arriving) cur = Math.max(0, stored());                                                 // same picture as the click that brought us here
  else cur = (stored() + 1) % A.length;                                                           // ready for the next click
  show(cur);

  // ---------- arriving: wait until the picture and column are decoded, hold, then fade out ----------
  var holdTimer = null, revealed = false;
  function reveal(){
    if (revealed || !html.classList.contains('tvv-arriving')) return;
    revealed = true; clearTimeout(holdTimer);
    html.classList.add('tvv-ready', 'tvv-reveal');
    setTimeout(function(){
      html.classList.remove('tvv-arriving', 'tvv-reveal', 'tvv-ready');
      var n = (cur + 1) % A.length; show(n);                     // the next click's picture, decoded while hidden
    }, FADE_OUT + 80);
  }
  if (arriving){
    var t0 = 0; try { t0 = +sessionStorage.getItem(T0) || 0; sessionStorage.removeItem(T0); } catch(e){}
    var colReady = new Promise(function(res){
      var go = function(){
        var ims = [].slice.call(document.querySelectorAll('.cosmos-item img')).slice(0, 5);   // v6.0: 5 (chessboard added 3rd)
        Promise.all(ims.map(function(i){ return i.decode ? i.decode().catch(function(){}) : null; })).then(res);
      };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    });
    race(Promise.all([ready, colReady]), 700).then(function(){
      requestAnimationFrame(function(){
        html.classList.add('tvv-ready');                             // first real paint: picture + column, identical to the last frame of the old page
        var spent = t0 ? Date.now() - t0 - FADE_IN : 0;             // page-opening time already used from the hold
        var hold = Math.max(reduce ? 0 : (html.classList.contains('tvv-vt') ? 450 : 200), HOLD - Math.max(0, spent));
        holdTimer = setTimeout(reveal, hold);
      });
    });
    var skip = function(e){ if (e.type === 'keydown' && e.key === 'Tab') return; if (html.classList.contains('tvv-ready')) reveal(); };
    document.addEventListener('keydown', skip, true);
    var c = document.querySelector('.comet'); if (c) c.addEventListener('click', skip);
  } else {
    // next picture after the one in the comet layer, warmed up for the click after next
    warm((cur + 1) % A.length);
  }

  // ---------- back/forward cache: never show a covered page ----------
  window.addEventListener('pageshow', function(e){
    if (e.persisted) { html.classList.remove('tvv-leaving', 'tvv-arriving', 'tvv-reveal', 'tvv-ready'); leavingTo = null; show((stored() + 1) % A.length); }
  });

  // ---------- leaving: fade the page into the picture, then open the next page ----------
  function isInternal(a){
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return false;
    if (a.dataset.noComet !== undefined) return false;
    var href = a.getAttribute('href') || '';
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return false;
    return /\.html($|[?#])/.test(href);
  }
  var leavingTo = null, leaveTimer = null, txNav = false;
  function go(){ if (leavingTo) { var d = leavingTo; leavingTo = null; clearTimeout(leaveTimer); txNav = true; location.href = d; } }
  // View Transitions (http/https only): used only for our own transition navigations, never for others
  window.addEventListener('pageswap', function(e){ if (e.viewTransition && (!txNav || reduce)) e.viewTransition.skipTransition(); });
  document.addEventListener('click', function(e){
    if (leavingTo) { e.preventDefault(); go(); return; }              // click again = skip
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;

    // Affiliated Venture Sites tile: transition in the new tab, then the site
    if (a.classList.contains('site-tile')){
      var href0 = a.getAttribute('href') || '';
      if (SITES.indexOf(href0) < 0) return;                        // unknown address: open it normally
      var n0 = (stored() + 1) % A.length; save(n0);
      var w = window.open('go.html?tx=' + (n0 + 1) + '&to=' + encodeURIComponent(href0), '_blank', 'noopener');
      e.preventDefault();                                           // with noopener, window.open always returns null; the click is a user gesture, so it is not blocked
      show((n0 + 1) % A.length);                                    // this tab's next internal click gets the following picture
      return;
    }

    if (!isInternal(a)) return;
    var here = location.pathname.split('/').pop() || 'index.html';
    var href = a.getAttribute('href'), to = href.split(/[?#]/)[0];
    e.preventDefault();
    if (to === here && !html.classList.contains('tvv-hold')) return;
    leavingTo = href.replace(/([^?#]*)(\?[^#]*)?(#.*)?/, function(m, p, q, h){
      return p + (q ? q + '&' : '?') + 'via=comet' + (h || '');
    });
    var n = (stored() + 1) % A.length;
    if (html.classList.contains('tvv-hold') && m) n = cur;          // preview: keep the frozen picture
    save(n);
    try { sessionStorage.setItem('tvv-comet', '1'); sessionStorage.setItem(T0, Date.now()); } catch(_){}
    html.classList.remove('tvv-arriving', 'tvv-reveal', 'tvv-ready');
    race(show(n), 150).then(function(){
      requestAnimationFrame(function(){
        html.classList.add('tvv-leaving');
        leaveTimer = setTimeout(go, FADE_IN + 30);
      });
    });
  });
  document.addEventListener('keydown', function(e){ if (leavingTo && e.key !== 'Tab') go(); });

  window.TVV_TX_LIST = A;
};
