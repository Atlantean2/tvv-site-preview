/* TechVestVentures preview 2026-11-03: Welcome speech balloon.
   Shared by any page whose masthead banner has data-welcome (today: index.html).
   Turns the Welcome heading into a button that opens a balloon with three welcomes,
   each in print and as a Scottish-accent voice clip (Piper TTS, en_GB-alba-medium). Audio plays only on click. */
(function(){
  var banner = document.querySelector('.mh-banner[data-welcome]');
  if (!banner) return;
  var h1 = banner.querySelector('h1');
  if (!h1) return;

  var AUDIO = 'assets/audio/';
  var WELCOMES = [
    { id:'cosmos', tab:'The TVV Cosmic Universe',
      title:'Welcome to the TechVestVentures Cosmic Universe',
      text:['Welcome to the TechVestVentures Cosmic Universe. At its center shines Michael Hentschel, the sun. Around him turn eighteen AI-augmented teams, carried on a gold arm and a red arm, with ninety-one role moons in orbit.',
            'Watch it all as a slowly rotating Galaxy, zoom in to the Lunar Galaxy, or follow the rings in the Orbits and Lunar Orbits views. Point at any star to see what that team does, and what it produces.',
            'This is how TechVestVentures works: Humanized AI, in concert. Come and explore the Galaxy.'],
      audio:'Welcome Cosmic Universe 2026-11-03 v1.0.mp3',
      link:{ href:'cosmos-galaxy.html', label:'Explore the Galaxy' } },
    { id:'network', tab:'The TVV Network',
      title:'Welcome to the TechVestVentures Network',
      text:['Welcome to the TechVestVentures Network. Since 1987, TechVestVentures has helped ventures succeed through acceleration, venture capital, business models and board advice.',
            'Today it anchors a family of affiliated sites: Intuality, for Predictive AI. Bryson, for Empowered Water. CognomIQ, for Semantic AI. stemXbank: Save Your Self. And hanscalmeyer.com: Life Saver.',
            'Alongside them sit techvesteconometrics, ultimateplan, IdeaMille (coming back soon) and the TVV Daily Risk Alert Digest, with daily risk alerts and graphs. Come and explore the ventures.'],
      audio:'Welcome TVV Network 2026-11-03 v1.0.mp3',
      link:{ href:'ventures.html', label:'Explore the Ventures' } },
    { id:'augmentive', tab:'Augmentive Ventures',
      title:'Welcome to Augmentive Ventures and the future of Human-Machine Collaboration',
      text:['Welcome to Augmentive Ventures, and to the future of human-machine collaboration. Picture a human hand and a machine hand, passing a golden cube between them. That is the Augmentive Concert: profitable venture successes, optimally melding human and AI intelligence.',
            'Augmentive AI Ventures will scale IdeaMille and IdeaMille Visioneer to produce thousands of venture ideas that people facing job loss over the next three years could build with AI agents. And it adds a new Jobs Bot.',
            'The work ahead is not human or machine, but both, together. Come and explore the Augmentive AI Ventures prototype.'],
      audio:'Welcome Augmentive Ventures 2026-11-03 v1.0.mp3',
      link:{ href:'augmentive-ai-ventures-prototype-v1/index.html', label:'Explore the prototype', newTab:true } }
  ];

  function el(tag, attrs, kids){
    var n = document.createElement(tag);
    for (var k in (attrs || {})) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function(c){ if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }

  // ---- the button (keeps the h1 for headings; the button lives inside it) ----
  var btn = el('button', { type:'button', 'class':'welcome-btn', 'aria-expanded':'false', 'aria-controls':'welcome-balloon', 'aria-haspopup':'dialog' });
  while (h1.firstChild) btn.appendChild(h1.firstChild);
  btn.appendChild(el('span', { 'class':'wb-cue', 'aria-hidden':'true', text:'\u25BE' }));
  btn.appendChild(el('span', { 'class':'sr-only', text:': open a spoken welcome' }));
  h1.appendChild(btn);
  banner.classList.add('has-welcome');

  // ---- the balloon ----
  var audio = new Audio(); audio.preload = 'none';
  var tabs = [], panels = [], plays = [], bars = [], times = [];
  var tablist = el('div', { role:'tablist', 'class':'wb-tabs', 'aria-label':'Choose a welcome' });
  var body = el('div', { 'class':'wb-body' });
  WELCOMES.forEach(function(w, i){
    var tab = el('button', { type:'button', role:'tab', id:'wb-tab-' + w.id, 'class':'wb-tab', 'aria-controls':'wb-panel-' + w.id, 'aria-selected': i ? 'false' : 'true', tabindex: i ? '-1' : '0' }, [ el('span', { 'class':'wb-num', 'aria-hidden':'true', text: String(i + 1) }), w.tab ]);
    var play = el('button', { type:'button', 'class':'wb-play', 'aria-pressed':'false' }, [ el('span', { 'class':'wb-icon', 'aria-hidden':'true' }), el('span', { 'class':'wb-play-label', text:'Listen' }) ]);
    var bar = el('span', { 'class':'wb-bar', 'aria-hidden':'true' }, [ el('span', { 'class':'wb-fill' }) ]);
    var time = el('span', { 'class':'wb-time', text:'' });
    var a = el('a', { 'class':'wb-go', href: w.link.href, text: w.link.label + ' \u2192' });
    if (w.link.newTab){ a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('data-no-comet', ''); a.appendChild(el('span', { 'class':'sr-only', text:' (opens in new tab)' })); }
    var panel = el('div', { role:'tabpanel', id:'wb-panel-' + w.id, 'class':'wb-panel', 'aria-labelledby':'wb-tab-' + w.id, tabindex:'0' },
      [ el('h2', { 'class':'wb-title', text: w.title }) ]
        .concat(w.text.map(function(p){ return el('p', { text:p }); }))
        .concat([ el('div', { 'class':'wb-player' }, [ play, bar, time ]), el('p', { 'class':'wb-actions' }, [ a ]) ]));
    if (i) panel.hidden = true;
    play.addEventListener('click', function(){ toggle(i); });
    tab.addEventListener('click', function(){ select(i, false); });
    tabs.push(tab); panels.push(panel); plays.push(play); bars.push(bar); times.push(time);
    tablist.appendChild(tab); body.appendChild(panel);
  });
  var close = el('button', { type:'button', 'class':'wb-close', 'aria-label':'Close the welcome' }, [ el('span', { 'aria-hidden':'true', text:'\u00D7' }) ]);
  var balloon = el('div', { id:'welcome-balloon', 'class':'welcome-balloon', role:'dialog', 'aria-label':'Welcome to TechVestVentures', hidden:'' },
    [ el('span', { 'class':'wb-tail', 'aria-hidden':'true' }), close,
      el('p', { 'class':'wb-kicker', text:'Three welcomes \u00B7 in print and spoken (Scottish voice)' }), tablist, body,
      el('p', { 'class':'wb-credit', text:'Voice: synthetic Scottish English (Piper alba). Audio plays only when you press Listen.' }) ]);
  banner.appendChild(balloon);

  var current = 0, playing = -1;
  function fmt(s){ if (!isFinite(s)) return ''; s = Math.round(s); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }
  function setPlayUI(i, on){
    plays[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    plays[i].classList.toggle('on', on);
    plays[i].querySelector('.wb-play-label').textContent = on ? 'Pause' : (audio.currentTime > 0 && playing === i ? 'Resume' : 'Listen');
  }
  function stop(){
    if (playing < 0) return;
    audio.pause(); var p = playing; playing = -1;
    try { audio.currentTime = 0; } catch(e){}
    setPlayUI(p, false); plays[p].querySelector('.wb-play-label').textContent = 'Listen';
    bars[p].firstChild.style.width = '0'; times[p].textContent = '';
  }
  function toggle(i){
    if (playing === i){ if (audio.paused){ audio.play().catch(function(){}); } else { audio.pause(); } return; }
    stop(); playing = i;
    audio.src = AUDIO + encodeURIComponent(WELCOMES[i].audio);
    audio.play().catch(function(){ setPlayUI(i, false); });
  }
  audio.addEventListener('play', function(){ if (playing >= 0) setPlayUI(playing, true); });
  audio.addEventListener('pause', function(){ if (playing >= 0) setPlayUI(playing, false); });
  audio.addEventListener('timeupdate', function(){ if (playing < 0) return; var d = audio.duration || 0; bars[playing].firstChild.style.width = d ? (100 * audio.currentTime / d) + '%' : '0'; times[playing].textContent = fmt(audio.currentTime) + ' / ' + fmt(d); });
  audio.addEventListener('ended', function(){ var p = playing; stop(); if (p >= 0) plays[p].focus(); });

  function select(i, focus){
    if (i !== current) stop();
    current = i;
    tabs.forEach(function(t, j){ t.setAttribute('aria-selected', j === i ? 'true' : 'false'); t.tabIndex = j === i ? 0 : -1; panels[j].hidden = j !== i; });
    if (focus) tabs[i].focus();
  }
  tablist.addEventListener('keydown', function(e){
    var k = e.key, n = tabs.length, i = current;
    if (k === 'ArrowRight' || k === 'ArrowDown') i = (current + 1) % n;
    else if (k === 'ArrowLeft' || k === 'ArrowUp') i = (current + n - 1) % n;
    else if (k === 'Home') i = 0; else if (k === 'End') i = n - 1; else return;
    e.preventDefault(); select(i, true);
  });

  function isOpen(){ return !balloon.hidden; }
  // keep the balloon on screen: shift it left if it would run off the right edge, and keep the tail on the Welcome box
  var tail = balloon.querySelector('.wb-tail');
  function place(){
    if (!isOpen()) return;
    balloon.style.left = ''; balloon.style.right = ''; tail.style.left = '';
    if (window.innerWidth <= 820) return;            // phones and tablets: full-width balloon from CSS
    var r = balloon.getBoundingClientRect(), vw = document.documentElement.clientWidth, shift = 0;
    if (r.right > vw - 12) shift = (vw - 12) - r.right;
    if (r.left + shift < 12) shift = 12 - r.left;
    if (shift){ balloon.style.left = shift + 'px'; tail.style.left = 'calc(2.4rem + ' + (-shift) + 'px)'; }
  }
  window.addEventListener('resize', place);
  function open(){ balloon.hidden = false; place(); btn.setAttribute('aria-expanded', 'true'); banner.classList.add('wb-open'); tabs[current].focus({ preventScroll:true }); }
  function shut(returnFocus){ if (!isOpen()) return; stop(); balloon.hidden = true; btn.setAttribute('aria-expanded', 'false'); banner.classList.remove('wb-open'); if (returnFocus) btn.focus(); }
  btn.addEventListener('click', function(){ if (isOpen()) shut(false); else open(); });
  close.addEventListener('click', function(){ shut(true); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && isOpen()){ e.stopPropagation(); shut(true); } }, true);
  document.addEventListener('pointerdown', function(e){ if (isOpen() && !balloon.contains(e.target) && !btn.contains(e.target)) shut(false); });
  // Tab off the end of the balloon closes it (non-modal), so focus never hides behind it.
  balloon.addEventListener('focusout', function(e){ var t = e.relatedTarget; if (isOpen() && t && !balloon.contains(t) && !btn.contains(t)) shut(false); });

  // Test hook: ?welcome=1..3 opens the balloon on that choice (used for screenshots; never plays audio).
  var m = /[?&]welcome=([1-3])/.exec(location.search);
  if (m){ select(+m[1] - 1, false); open(); }
})();
