/* TechVestVentures preview 2026-11-03 v2.0: Welcome speech balloon.
   A page opts in with <div class="mh-banner" data-welcome="network|cosmos|augmentive"> and loads this script
   (plus welcome.css). The banner heading becomes a button that opens a balloon with ONE welcome for that page,
   in print and as a voice clip (synthetic Scottish male voice: Piper TTS, en_GB-vctk-medium, VCTK speaker p281).
   Today: network = index.html; cosmos = the four Cosmic Command Center views; augmentive = the Augmentive AI
   Ventures prototype home (which carries its own copy of this file, welcome.css and its clip).
   Clips live in ../audio/ next to this script's folder. Audio plays only on click. */
(function(){
  var banner = document.querySelector('.mh-banner[data-welcome]');
  if (!banner) return;
  var h1 = banner.querySelector('h1');
  if (!h1) return;

  var SRC = (document.currentScript && document.currentScript.src) || '';
  var AUDIO = SRC ? new URL('../audio/', SRC).href : 'assets/audio/';
  var WELCOMES = {
    network: {
      title:'Welcome to the TechVestVentures Network',
      text:['Welcome to the TechVestVentures Network. Since 1987, TechVestVentures has helped ventures succeed through acceleration, venture capital, business models and board advice.',
            'Today it anchors a family of affiliated sites: Intuality, for Predictive AI. Bryson, for Empowered Water. CognomIQ, for Semantic AI. stemXbank: Save Your Self. And hanscalmeyer.com: Life Saver.',
            'Alongside them sit techvesteconometrics, ultimateplan, IdeaMille (coming back soon) and the TVV Daily Risk Alert Digest, with daily risk alerts and graphs. Come and explore the ventures.'],
      audio:'Welcome TVV Network 2026-11-03 v2.0.mp3',
      link:{ href:'ventures.html', label:'Explore the Ventures' } },
    cosmos: {
      title:'Welcome to the TechVestVentures Cosmic Universe',
      text:['Welcome to the TechVestVentures Cosmic Universe. At its center shines the greatest human artist, Michaelangelo, chosen to represent Inspiration. Around that sun turn eighteen AI-augmented teams, carried on a gold arm and a red arm, with ninety-one role moons in orbit.',
            'Watch it all as a slowly rotating Galaxy, zoom in to the Lunar Galaxy, or follow the rings in the Orbits and Lunar Orbits views. Point at any star to see what that team does, and what it produces.',
            'This is how TechVestVentures works: Humanized AI, in concert. Come and explore the Galaxy.'],
      audio:'Welcome Cosmic Universe 2026-11-03 v2.0.mp3',
      link:{ href:'cosmos-galaxy.html', label:'Explore the Galaxy',
             here:{ href:'cosmos-lunar-galaxy.html', label:'Zoom in to the Lunar Galaxy' } } },   // used on the Galaxy page itself
    augmentive: {
      title:'Welcome to Augmentive Ventures and the future of Human-Machine Collaboration',
      text:['Welcome to Augmentive Ventures, and to the future of human-machine collaboration. Picture a human hand and a machine hand, passing a golden cube between them. That is the Augmentive Concert: profitable venture successes, optimally melding human and AI intelligence.',
            'Augmentive AI Ventures will scale IdeaMille and IdeaMille Visioneer to produce thousands of venture ideas that people facing job loss over the next three years could build with AI agents. And it adds a new Jobs Bot. If every human is empowered to be able to handle 3 jobs with ease, we can create 9 times as many well-run companies, so more jobs become possible. The work ahead is not human or machine, but both, together. Come and explore Augmentive AI Ventures.'],
      audio:'Welcome Augmentive Ventures 2026-11-03 v2.0.mp3',
      link:{ href:'about.html', label:'Explore Augmentive AI Ventures' } }
  };
  var w = WELCOMES[banner.getAttribute('data-welcome')] || WELCOMES.network;
  var page = location.pathname.split('/').pop() || 'index.html';
  var link = (w.link.here && page === w.link.href) ? w.link.here : w.link;

  function el(tag, attrs, kids){
    var n = document.createElement(tag);
    for (var k in (attrs || {})) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function(c){ if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }

  // ---- the button (keeps the h1 for headings; the button lives inside it) ----
  var btn = el('button', { type:'button', 'class':'welcome-btn', 'aria-expanded':'false', 'aria-controls':'welcome-balloon', 'aria-haspopup':'dialog' });
  if (banner.hasAttribute('data-welcome-pill')) btn.appendChild(el('span', { 'class':'wb-pill', text:'Welcome' }));
  while (h1.firstChild) btn.appendChild(h1.firstChild);
  btn.appendChild(el('span', { 'class':'wb-cue', 'aria-hidden':'true', text:'\u25BE' }));
  btn.appendChild(el('span', { 'class':'sr-only', text:': open a spoken welcome' }));
  h1.appendChild(btn);
  banner.classList.add('has-welcome');

  // ---- the balloon: one welcome ----
  var audio = new Audio(); audio.preload = 'none';
  var play = el('button', { type:'button', 'class':'wb-play', 'aria-pressed':'false' }, [ el('span', { 'class':'wb-icon', 'aria-hidden':'true' }), el('span', { 'class':'wb-play-label', text:'Listen' }) ]);
  var label = play.querySelector('.wb-play-label');
  var bar = el('span', { 'class':'wb-bar', 'aria-hidden':'true' }, [ el('span', { 'class':'wb-fill' }) ]);
  var fill = bar.firstChild;
  var time = el('span', { 'class':'wb-time', text:'' });
  var go = el('a', { 'class':'wb-go', href: link.href, text: link.label + ' \u2192' });
  var title = el('h2', { 'class':'wb-title', id:'wb-title', text: w.title });
  var close = el('button', { type:'button', 'class':'wb-close', 'aria-label':'Close the welcome' }, [ el('span', { 'aria-hidden':'true', text:'\u00D7' }) ]);
  var balloon = el('div', { id:'welcome-balloon', 'class':'welcome-balloon', role:'dialog', 'aria-labelledby':'wb-title', tabindex:'-1', hidden:'' },
    [ el('span', { 'class':'wb-tail', 'aria-hidden':'true' }), close,
      el('div', { 'class':'wb-scroll' }, [
      el('p', { 'class':'wb-kicker', text:'A welcome \u00B7 in print and spoken (Scottish voice)' }),
      el('div', { 'class':'wb-panel' }, [ title ].concat(w.text.map(function(p){ return el('p', { text:p }); }))
        .concat([ el('div', { 'class':'wb-player' }, [ play, bar, time ]), el('p', { 'class':'wb-actions' }, [ go ]) ])),
      el('p', { 'class':'wb-credit', text:'Voice: synthetic Scottish English, male (Piper TTS, VCTK voice). Audio plays only when you press Listen.' }) ]) ]);
  banner.appendChild(balloon);

  var started = false;
  function fmt(s){ if (!isFinite(s)) return ''; s = Math.round(s); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }
  function ui(on){ play.setAttribute('aria-pressed', on ? 'true' : 'false'); play.classList.toggle('on', on); label.textContent = on ? 'Pause' : (started && audio.currentTime > 0 ? 'Resume' : 'Listen'); }
  function stop(){ if (!started) return; audio.pause(); try { audio.currentTime = 0; } catch(e){} started = false; ui(false); fill.style.width = '0'; time.textContent = ''; }
  play.addEventListener('click', function(){
    if (!started){ started = true; audio.src = AUDIO + encodeURIComponent(w.audio); }
    if (audio.paused) audio.play().catch(function(){ ui(false); }); else audio.pause();
  });
  audio.addEventListener('play', function(){ ui(true); });
  audio.addEventListener('pause', function(){ ui(false); });
  audio.addEventListener('timeupdate', function(){ var d = audio.duration || 0; fill.style.width = d ? (100 * audio.currentTime / d) + '%' : '0'; time.textContent = fmt(audio.currentTime) + ' / ' + fmt(d); });
  audio.addEventListener('ended', function(){ stop(); play.focus(); });

  function isOpen(){ return !balloon.hidden; }
  // keep the balloon on screen: shift it left if it would run off the right edge (tail stays on the button),
  // and cap its height to the space below the banner so nothing runs off the bottom (it scrolls inside instead)
  var tail = balloon.querySelector('.wb-tail'), scroller = balloon.querySelector('.wb-scroll');
  function place(){
    if (!isOpen()) return;
    balloon.style.left = ''; balloon.style.right = ''; scroller.style.maxHeight = ''; tail.style.left = '';
    var r = balloon.getBoundingClientRect(), vw = document.documentElement.clientWidth, vh = window.innerHeight;
    if (window.innerWidth > 820){
      var shift = 0;
      if (r.right > vw - 12) shift = (vw - 12) - r.right;
      if (r.left + shift < 12) shift = 12 - r.left;
      if (shift){ balloon.style.left = shift + 'px'; tail.style.left = 'calc(2.4rem + ' + (-shift) + 'px)'; }
      var room = vh - Math.max(r.top, 0) - 12;
      if (r.height > room && room > 240) scroller.style.maxHeight = (scroller.getBoundingClientRect().height - (r.height - room)) + 'px';
    }
  }
  window.addEventListener('resize', place);
  function open(){ balloon.hidden = false; place(); btn.setAttribute('aria-expanded', 'true'); banner.classList.add('wb-open'); play.focus({ preventScroll:true }); }
  function shut(returnFocus){ if (!isOpen()) return; stop(); balloon.hidden = true; btn.setAttribute('aria-expanded', 'false'); banner.classList.remove('wb-open'); if (returnFocus) btn.focus(); }
  btn.addEventListener('click', function(){ if (isOpen()) shut(false); else open(); });
  close.addEventListener('click', function(){ shut(true); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && isOpen()){ e.stopPropagation(); shut(true); } }, true);
  document.addEventListener('pointerdown', function(e){ if (isOpen() && !balloon.contains(e.target) && !btn.contains(e.target)) shut(false); });
  // Tab off the end of the balloon closes it (non-modal), so focus never hides behind it.
  balloon.addEventListener('focusout', function(e){ var t = e.relatedTarget; if (isOpen() && t && !balloon.contains(t) && !btn.contains(t)) shut(false); });

  // Test hook: ?welcome=1 opens the balloon on load (used for screenshots; never plays audio).
  if (/[?&]welcome=1/.test(location.search)) open();
})();
