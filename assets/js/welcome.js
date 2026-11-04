/* TechVestVentures preview 2026-11-03 v3.0: Welcome voice balloon.
   A page opts in with <div class="mh-banner" data-welcome="network|cosmos|augmentive"> and loads this script
   (plus welcome.css). The banner heading becomes a button: one click pops up an animated balloon (no text) with a small original robot whose mouth follows the voice
   and plays that page's welcome clip; a click on the button or balloon, or Esc, stops it; it fades when the clip ends.
   The full script is kept as screen-reader-only text. Balloon colour: --wb-balloon in welcome.css (green);
   preview red with ?balloon=red. Voice: Kokoro-82M (Apache 2.0), synthetic US English female voice.
   Today: network = index.html; cosmos = the four Cosmic Command Center views; augmentive = the Augmentive AI
   Ventures prototype home (which carries its own copy of this file, welcome.css and its clip). */
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
      audio:'Welcome TVV Network 2026-11-03 v3.0.mp3',
      link:{ href:'ventures.html', label:'Explore the Ventures' } },
    cosmos: {
      title:'Welcome to the TechVestVentures Cosmic Universe',
      text:['Welcome to the TechVestVentures Cosmic Universe. At its center shines the greatest human artist, Michaelangelo, chosen to represent Inspiration. Around that sun turn eighteen AI-augmented teams, carried on a gold arm and a red arm, with ninety-one role moons in orbit.',
            'Watch it all as a slowly rotating Galaxy, zoom in to the Lunar Galaxy, or follow the rings in the Orbits and Lunar Orbits views. Point at any star to see what that team does, and what it produces.',
            'This is how TechVestVentures works: Humanized AI, in concert. Come and explore the Galaxy.'],
      audio:'Welcome Cosmic Universe 2026-11-03 v3.0.mp3',
      link:{ href:'cosmos-galaxy.html', label:'Explore the Galaxy',
             here:{ href:'cosmos-lunar-galaxy.html', label:'Zoom in to the Lunar Galaxy' } } },   // used on the Galaxy page itself
    augmentive: {
      title:'Welcome to Augmentive Ventures and the future of Human-Machine Collaboration',
      text:['Welcome to Augmentive Ventures, and to the future of human-machine collaboration. Picture a human hand and a machine hand, passing a golden cube between them. That is the Augmentive Concert: profitable venture successes, optimally melding human and AI intelligence.',
            'Augmentive AI Ventures will scale IdeaMille and IdeaMille Visioneer to produce thousands of venture ideas that people facing job loss over the next three years could build with AI agents. And it adds a new Jobs Bot. If every human is empowered to be able to handle 3 jobs with ease, we can create 9 times as many well-run companies, so more jobs become possible. The work ahead is not human or machine, but both, together. Come and explore Augmentive AI Ventures.'],
      audio:'Welcome Augmentive Ventures 2026-11-03 v3.0.mp3',
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


  var CREDIT = 'Voice: synthetic US English, female (Kokoro-82M text-to-speech). Plays only when you click Welcome.';
  if (/[?&]balloon=red/.test(location.search)) document.documentElement.classList.add('wb-red');

  // ---- the button (keeps the h1 for headings; the button lives inside it) ----
  var btn = el('button', { type:'button', 'class':'welcome-btn', 'aria-pressed':'false', 'aria-label':'Play welcome message', 'aria-describedby':'wb-transcript', title: CREDIT });
  if (banner.hasAttribute('data-welcome-pill')) btn.appendChild(el('span', { 'class':'wb-pill', 'aria-hidden':'true', text:'Welcome' }));
  while (h1.firstChild) btn.appendChild(h1.firstChild);
  btn.appendChild(el('span', { 'class':'wb-cue', 'aria-hidden':'true', text:'\u25B6' }));
  h1.appendChild(btn);
  banner.classList.add('has-welcome');

  // screen-reader-only transcript, credit and live status
  banner.appendChild(el('div', { id:'wb-transcript', 'class':'sr-only' }, [ 'Transcript of the spoken welcome: ' + w.title + '. ' + w.text.join(' ') + ' ' + CREDIT ]));
  var status = el('p', { 'class':'sr-only', 'aria-live':'polite', role:'status' });
  banner.appendChild(status);

  // ---- the animated balloon (decorative: no text) ----
  // an original little robot (inline SVG), drawn in TVV red with gold accents
  var BOT = '<svg class="wb-bot" viewBox="0 0 80 84" aria-hidden="true" focusable="false">' +
    '<g class="wb-bot-body">' +
    '<line x1="40" y1="16" x2="40" y2="6" class="wb-gold-s" stroke-width="3" stroke-linecap="round"/><circle cx="40" cy="5" r="4.2" class="wb-tip"/>' +
    '<rect x="9" y="30" width="6" height="14" rx="3" class="wb-gold-f"/><rect x="65" y="30" width="6" height="14" rx="3" class="wb-gold-f"/>' +
    '<rect x="14" y="16" width="52" height="42" rx="16" class="wb-head"/>' +
    '<rect x="21" y="23" width="38" height="20" rx="9" class="wb-face"/>' +
    '<g class="wb-eyes"><circle cx="31" cy="33" r="4.4" class="wb-eye"/><circle cx="49" cy="33" r="4.4" class="wb-eye"/></g>' +
    '<g class="wb-mouth"><rect x="29" y="47" width="4" height="7" rx="2"/><rect x="35" y="45.5" width="4" height="10" rx="2"/><rect x="41" y="45.5" width="4" height="10" rx="2"/><rect x="47" y="47" width="4" height="7" rx="2"/></g>' +
    '<rect x="26" y="60" width="28" height="16" rx="7" class="wb-head"/><circle cx="40" cy="68" r="3" class="wb-gold-f"/>' +
    '<path class="wb-arm wb-arm-r" d="M54 64 q12 -2 16 -14" fill="none" stroke-width="5" stroke-linecap="round"/>' +
    '<path class="wb-arm" d="M26 64 q-10 4 -12 12" fill="none" stroke-width="5" stroke-linecap="round"/>' +
    '</g></svg>';
  var orb = el('span', { 'class':'wb-orb', 'aria-hidden':'true' }, [ el('span', { 'class':'wb-shine' }) ]);
  orb.insertAdjacentHTML('beforeend', BOT);
  var balloon = el('button', { type:'button', 'class':'wb-balloon', 'aria-label':'Stop welcome message', title: CREDIT, hidden:'' },
    [ orb, el('span', { 'class':'wb-knot', 'aria-hidden':'true' }), el('span', { 'class':'wb-string', 'aria-hidden':'true' }) ]);
  banner.appendChild(balloon);

  var audio = new Audio(); audio.preload = 'none';
  var playing = false, fadeT = null;
  // mouth follows the voice: Web Audio AnalyserNode on the clip (same origin); CSS pulse is the fallback
  var actx = null, an = null, buf = null, raf = 0;
  function meter(){
    if (!an || !playing) return;
    an.getByteTimeDomainData(buf); var sum = 0;
    for (var i = 0; i < buf.length; i++){ var v = (buf[i] - 128) / 128; sum += v * v; }
    var amp = Math.min(1, Math.sqrt(sum / buf.length) * 5);
    balloon.style.setProperty('--amp', (0.25 + amp * 0.95).toFixed(3));
    raf = requestAnimationFrame(meter);
  }
  function analyse(){
    if (actx || !(window.AudioContext || window.webkitAudioContext)) return;
    try {
      actx = new (window.AudioContext || window.webkitAudioContext)();
      var srcNode = actx.createMediaElementSource(audio); an = actx.createAnalyser(); an.fftSize = 512;
      buf = new Uint8Array(an.fftSize); srcNode.connect(an); an.connect(actx.destination);
      balloon.classList.add('wb-live');
    } catch(e){ actx = null; an = null; }
  }
  function show(){
    clearTimeout(fadeT); balloon.hidden = false; balloon.classList.remove('wb-out');
    void balloon.offsetWidth; balloon.classList.add('wb-in');
  }
  function hide(){
    balloon.classList.remove('wb-in'); balloon.classList.add('wb-out');
    clearTimeout(fadeT); fadeT = setTimeout(function(){ balloon.hidden = true; balloon.classList.remove('wb-out'); }, 700);
  }
  function setState(on){
    playing = on; btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? 'Stop welcome message' : 'Play welcome message');
    banner.classList.toggle('wb-playing', on);
  }
  function start(){
    if (!audio.src) audio.src = AUDIO + encodeURIComponent(w.audio);
    analyse(); if (actx && actx.state === 'suspended') actx.resume();
    try { audio.currentTime = 0; } catch(e){}
    setState(true); show(); status.textContent = 'Playing the welcome message.';
    cancelAnimationFrame(raf); raf = requestAnimationFrame(meter);
    var pr = audio.play(); if (pr && pr.catch) pr.catch(function(){ stop('The welcome message could not play.'); });
  }
  function stop(msg){
    audio.pause(); try { audio.currentTime = 0; } catch(e){}
    cancelAnimationFrame(raf); balloon.style.removeProperty('--amp');
    setState(false); hide(); status.textContent = msg || 'Welcome message stopped.';
  }
  btn.addEventListener('click', function(){ if (playing) stop(); else start(); });
  balloon.addEventListener('click', function(){ stop(); btn.focus(); });
  audio.addEventListener('ended', function(){ stop('Welcome message finished.'); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && playing){ e.stopPropagation(); stop(); btn.focus(); } }, true);

  // Test hook: ?welcome=1 shows the animated balloon on load without audio (for screenshots).
  if (/[?&]welcome=1/.test(location.search)){ banner.classList.add('wb-playing'); show(); }
})();
