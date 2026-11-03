/* TVV Daily Risk Alert Digest (v7.2 2026-11-01). THE ONE PLACE TO SET THE DIGEST ADDRESS.
   Live since 1 Nov 2026 (Michael's instruction, 6:30 PM ET). Every Digest tile and pointer on the site takes its
   address from DIGEST_URL: the tiles (Home, Ventures, Thinking), the Home-page line and the footer link on every page
   open it in a new tab, and the tiles use the same go.html crossfade as the other Affiliated Venture Sites
   (transitions.js adds DIGEST_URL to go.html's allow-list from this constant). To move the Digest, change this
   one line. If it is ever set to something that is not an https address, the links simply go nowhere.
   There is no email collection anywhere: nothing on the site asks for or stores an address. */
var DIGEST_URL = "https://atlantean2.github.io/tvv-daily-risk-alert-digest/";

window.TVV_DIGEST_URL = DIGEST_URL;
window.TVV_DIGEST_LIVE = /^https:\/\/[^\s"<>]+$/.test(DIGEST_URL);
if (window.TVV_DIGEST_LIVE) document.documentElement.classList.add('tvv-digest-live');
(function(){
  function wire(){
    [].forEach.call(document.querySelectorAll('[data-digest]'), function(a){
      if (window.TVV_DIGEST_LIVE){
        a.href = DIGEST_URL; a.target = '_blank'; a.rel = 'noopener';
        a.removeAttribute('aria-disabled'); a.removeAttribute('title');
      } else {
        a.removeAttribute('href'); a.removeAttribute('target');
        a.setAttribute('role', 'link'); a.setAttribute('aria-disabled', 'true'); a.tabIndex = 0;
        a.addEventListener('click', function(e){ e.preventDefault(); });
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
