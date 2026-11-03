Augmentive AI Ventures - prototype v1 (30 October 2026)
=======================================================
Status: local prototype only. Not published, not deployed. Text marked [Placeholder] is not final.

Architecture: copied from the TechVestVentures v3 prototype and rebranded.
  - Black "cosmos" column on the left with clickable art (assets/js/column-items.js).
  - Dark masthead with page banner and dark tabbed navigation; light content panel; dark footer.
  - Home page hero: the Human and Machine Hands art, with a dark overlay behind the text (contrast 4.5:1 or better).
  - Pages: index.html (Home), ideas.html, jobs-bot.html, about.html, contact.html.
  - Every page links back to the TechVestVentures hub (techvestventures.com) and to IdeaMille (archived page, December 2014).

Transition (Human and Machine Hands art fades in, holds 3 seconds, fades out; click or any key skips):
  Site-wide switch: assets/js/config.js
      transition: "all"     every internal link (default)
                  "marked"  only links with data-transition="on"
                  "off"     never
      fadeMs / holdMs set the fade and hold times.
  Per link:  data-transition="off"  or  data-transition="on"   (data-no-comet also still works)
  Per page:  <html lang="en" data-transition="off">
  Try a mode without editing: add ?transition=off  (or =all, =marked) to a page address; it sticks for the browser tab.
  Preview the transition screen: add ?preview=transition to any page address.
  Reduced-motion users get a short fade and no hold.

Facts used (from Michael): Augmentive Ventures fuses human and machine intelligence; it will scale IdeaMille and
IdeaMille Visioneer to produce thousands of venture ideas that people losing their jobs over the next three years
could build with AI agents; it adds a new Jobs Bot; core concept "fractional job portfolios" (fractional consulting
mixed with full-time roles), with work shifting to ownership, leadership and entrepreneurship models he calls
"augmentive strategies". New terminology to come: [Placeholder].
Contact: ideas@techvestventures.com is shown as [pending setup]. No phone number or meeting ID on the site.

Art: assets/img/hands-1280/1920/2560/3840.webp (hero and transition) from "Concept 2 Human and Machine Hands 4K.png";
other concept art copied from the TechVestVentures v3 prototype. The full 4K PNG is in assets/img/art/4k/ (left out of the zip).

The TechVestVentures v3 prototype's 9th affiliate tile links here with a relative path, so keep the two folders side by side:
  website-guru/tvv prototype v3/
  website-guru/augmentive ai ventures prototype v1/
