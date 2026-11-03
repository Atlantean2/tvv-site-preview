/* Augmentive AI Ventures prototype: site-wide settings. Edit and save; no build step.
   transition : "all"    = the hands art fades in on every internal page click (default)
                "marked" = only on links that carry data-transition="on"
                "off"    = never (pages open directly)
   Per link  : data-transition="off" skips it on that link; data-transition="on" forces it (also in "marked" mode).
   Per page  : <html data-transition="off"> turns it off for every click that starts on that page.
   Testing   : add ?transition=off (or all / marked) to any page address to try a mode for this visit.
   fadeMs / holdMs : fade-in and fade-out time, and how long the art holds before the next page shows. */
window.AAV_CONFIG = { transition: "all", fadeMs: 600, holdMs: 3000 };
