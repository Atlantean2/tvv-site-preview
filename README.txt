CHANGES IN V7.9 2026-11-03 (Michael's request, 3 Nov 2026: the long Creative Destruction sequence, "the one that
winds up with green cheese and red blotches"; not the gold Blender Cube structure v3)
  - "Augmentive Creative Destruction" (the lower loop in the black column, every page) is now one 83.4 s sequence:
    Cube launch and recombination v3 2026-11-01 (49.9 s) + Cube structure v2 2026-11-01 (33 s), joined with a
    0.5 s crossfade. The structure clip fades to black and back in on its own start pose; the last 1 s now
    dissolves into the first frame of the launch so the loop wraps without a jump. 1440 x 1080, 24 fps, no audio.
  - New files in assets/video/:
      Cube launch recombination and structure v1 2026-11-03 web 4x3.webm / .mp4
      Cube launch recombination and structure v1 2026-11-03 poster 4x3.webp  (frame at 12 s, as before; MP4 CRF 30, WebM CRF 42, to keep the zip under 25 MB)
    The old Cube launch and recombination v3 web files are no longer referenced and are left out of this build.
  - Only assets/js/column-items.js changed (the one entry). Everything else is exactly as in v7.8 2026-11-02.

CHANGES IN V7.8 2026-11-02 (Michael's feedback on v7.7, 2 Nov 2026, 12:35 AM ET: "really quite good for now, can be tweaked later")
  - Bryson Industries moved to the GOLD spiral arm (arm: 0) in assets/data/cosmos-roster.js. Arm counts are now
    gold 10, red 8. No other team was moved; a 10/8 split still looks balanced on the Galaxy views.
  - NAV: the four cosmos tabs are replaced by ONE "Galaxy" tab on every page. It opens cosmos-galaxy.html and shows
    as the active tab on all four cosmos pages. Switch views with the four view pills at the top of each cosmos
    page (Galaxy, Lunar Galaxy, Orbits, Lunar Orbits). The four pages and their #team-/#moon- links are unchanged.
    The footer and the no-JavaScript fallback menu also have a single "Galaxy" link. Home's "Next:" line still
    names all four views.
  - Nav tab sizing/padding is back to the v7.6 look on all pages (assets/css/site.css is identical to v7.6).
  - Alumiworks and Longevity Strategies wording and all role moons are unchanged from v7.7.
  - Cosmos pages still have no Meet tab and no meet/mailto links; plain footer line kept. Other pages keep Meet.
  - Not published, not uploaded, not on GitHub.

CHANGES IN V7.7 2026-11-02 (Michael's instructions, 2 Nov 2026, 12:11 AM ET)
  - FOUR COSMIC VIEWS, as four pages in this order (each reachable from the four view pills on every cosmos page,
    from the nav tabs and footer of every page, and from the Back/Next line):
      cosmos-galaxy.html        Galaxy        (as in v7.6)
      cosmos-lunar-galaxy.html  Lunar Galaxy  the galaxy plus small ROLE MOONS orbiting each team star
      cosmos-orbits.html        Orbits        (as in v7.6)
      cosmos-lunar-orbits.html  Lunar Orbits  the stellar system with the same role moons orbiting each team star
    Next/Back chain: Home > Galaxy > Lunar Galaxy > Orbits > Lunar Orbits > Ventures.
  - ROLE MOONS: 3 to 6 public role titles per team (e.g. "Daily Risk Alert graphs editor", "Asia venture scout").
    Moons are small pale dots, about 20 seconds per turn around their star. A moon's label shows ONLY on hover,
    tap or keyboard focus, on the side away from its star, so the team label stays primary; its explanation
    reads "Role moon - <team>", the role, and the team's one-line moon description. Each moon is a button that
    follows its star in the Tab order. The moons are also listed under every team in "All teams as a list" on
    all four pages. Reduced motion: moons are drawn still. Phones: tap a moon; the explanation shows under the sky.
    A "Skip past the stars and moons to the list" link appears on keyboard focus on the lunar pages.
  - TWO NEW STARS (outer orbit / ventures and long-horizon projects), now 18 teams:
      Alumiworks           - PLEASE CONFIRM (Michael): high-level public wording based on alumiworks.net (North Carolina
                             architectural-metal fabricator and builder: railings, stairs, structural, site, shade,
                             storefront) and Michael's public bio ("AlumiWorks, Inc. NC ... Strategic Advisor 2023-present").
                             Its moons are expanded from the single "Alumiworks Venture Expert" role.
      Longevity Strategies - generic public wording; no health, family or personal details.
  - ROSTER FILE: assets/data/cosmos-roster.js now holds, per team, "moons" (3-6 role strings) and an optional
    "moonLine". asOf is now 2026-11-02. The weekly HOW TO UPDATE steps at the top of the file cover moons.
    Moons are role titles only: no bot names or ids, no people's names, no client names, no contact links.
  - PLEASE GLANCE (Michael): the moon role titles for the client teams (Intuality, Bryson, CognomIQ) are new
    wording; your v7.6 approval covered the star wording only.
  - Cosmos pages (all four) still have NO Meet tab and NO meet/mailto links; plain footer line kept. Other pages
    keep Meet and the footer contact line. Nav tabs are slightly narrower (padding scales with window width) so the
    extra two tabs fit on one row on a wide screen.
  - Not published, not uploaded, not on GitHub.

CHANGES IN V7.6 2026-11-02 (Michael's instructions, 2 Nov 2026, 12:00 AM ET)
  - COSMOS PAGES ONLY (cosmos-galaxy.html and cosmos-orbits.html): the site-wide "Meet" tab is removed from
    the nav, and the footer contact links (the techvest@att.net mailto and the meet.techvestventures.com link)
    are removed. The footer keeps "TechVestVentures LLC - Greensboro, North Carolina, serving America and
    Germany" with no contact links. The no-JavaScript fallback menu never had them. Nothing on either cosmos
    page links to meet.techvestventures.com or to a mailto.
  - All other pages (Home, Ventures, Approach, Thinking, About) keep the Meet tab and footer contact line unchanged.
  - APPROVED BY MICHAEL (2 Nov 2026, 12:00 AM ET): the high-level public wording for Intuality, Bryson Industries,
    CognomIQ, Venture Strategies, Civilizational Knowledge, Persona Voices, IdeaMille and Command Core in
    assets/data/cosmos-roster.js is approved as is (the "please confirm" note in the v7.5 section below is closed).
    The roster file is unchanged from v7.5 (as of 2026-11-01, 16 teams); the weekly-update steps in v7.5 still apply.
  - Nothing else changed. Not published, not uploaded, not on GitHub.

CHANGES IN V7.5 2026-11-01 (Michael's instructions, 1 Nov 2026, 11:46 PM and 11:48 PM ET)
  - TWO NEW PAGES, the TVV Cosmic Command Center, placed right after Home:
      Page 2  cosmos-galaxy.html  - a slowly ROTATING GALAXY of all the teams (one turn about every 4 minutes),
                                    Michael as the sun at the core, teams carried on a gold arm and a red arm.
      Page 3  cosmos-orbits.html  - a ROTATING STELLAR SYSTEM: team stars orbit Michael's sun on four orbits
                                    (1 TVV practice, 2 creative and media, 3 ideas and research,
                                     4 ventures and long-horizon projects). Inner orbits move faster.
    Same black cosmos column and red / shining-gold / black Klimt palette (green used rarely).
  - WHAT IS INTERACTIVE: every star and the sun is a button. Pointing at it (mouse), tapping it (touch) or
    Tab-ing to it (keyboard) shows a short explanation: the team's role and the content it produces. Nothing else.
    Tap again, tap elsewhere or press Esc to hide it. Motion pauses while an explanation is open.
    Also: the Galaxy / Orbits view pills, an "All teams as a list" section (same text, for screen readers and
    anyone who prefers a list), Galaxy and Orbits links in the nav and footer of every page, and a "Next:" line
    at the end of Home. Adding #team-<slug> (e.g. cosmos-orbits.html#team-risk-watch) opens that explanation.
  - NO CONTACT BUTTONS in the Command Center: no meeting link, no mailto, no "Talk to us". A note says the teams
    are not chat services and visitors do not talk to them. (The site-wide v7.4 "Meet" tab and footer contact
    line on every page are unchanged v7.4 chrome.)
  - ACCESSIBILITY / MOBILE: if the computer or phone is set to reduce motion, the galaxy and orbits are drawn
    still (no rotation, no pulsing). On phones the star names hide (except the one tapped) and the explanation
    appears just under the picture. Explanations use role="tooltip" and aria-describedby.

  WEEKLY ROSTER REFRESH - ONE FILE ONLY
    All roster data for both pages lives in ONE file:   assets/data/cosmos-roster.js
    Both pages read it, and the line "Roster as of <date> - <n> teams" is built from it.
    To update each week:
      1. Open assets/data/cosmos-roster.js in a text editor.
      2. Change  asOf: "YYYY-MM-DD"  to the new date.
      3. Add, remove or edit entries in  teams: [ ... ]. Each entry needs:
           slug (lower-case, hyphens), name, ring (1-4, Orbits view), arm (0 gold / 1 red, Galaxy view),
           size (1-3, star size), role (one short sentence), produces (one short sentence).
         The order inside a ring sets the order around that orbit.
      4. Public-safe text only (no bot ids, approvals, usage, finances, client-confidential matters,
         health or family matters, phone numbers, meeting ids or contact links).
      5. Keep it a .js file (so the pages also work when opened by double-click), save, reload the page.
    No other file needs to change. The update steps are also written at the top of that file.

  TEAMS SHOWN (16): Command Core, TechVestVentures Practice, Business Office, Risk Watch, Network Gurus,
    Media Creator, Media Marketer, Michaelangelo, Persona Voices, Research Library, IdeaMille,
    Venture Strategies, Intuality, Bryson Industries, CognomIQ, Civilizational Knowledge.
  LEFT OUT ON PURPOSE (personal / private): Project Victoria, Calmeyer Hentschel Family, Christianity Team,
    Longevity Strategies Project.
  KEPT HIGH-LEVEL - PLEASE CONFIRM: Intuality, Bryson Industries, CognomIQ (client work; only the public
    "strategic CFO" description), Venture Strategies (no client venture names), Civilizational Knowledge
    (no funding or liaison detail), Persona Voices, IdeaMille, Command Core (internal items omitted).
  No bot counts are shown; the only number is the team count, computed from the roster file.
  Not published, not uploaded, not on GitHub.

CHANGES IN V7.2 2026-11-01 (Michael's instructions, 1 Nov 2026, 6:30 PM ET)
  - THE DIGEST IS LIVE. assets/js/digest.js now reads
        var DIGEST_URL = "https://atlantean2.github.io/tvv-daily-risk-alert-digest/";
    The tile (Home, Ventures, Thinking), the Home-page line and the footer link on every page open it in a new
    tab; the tile uses the same go.html crossfade as the other sites. Every "Coming soon" label and tooltip for
    the Digest is gone (the CSS/JS for an unset address is still there, inert). The digest.techvestventures.com
    suggestion is no longer mentioned.
  - Renamed everywhere to "TVV Daily Risk Alert Digest". Tile subtitle: "Daily risk alerts and graphs."
    Home line: "The TVV Daily Risk Alert Digest: a dated daily issue of risk alerts, with companion graph pages on
    markets, debt, data centers, cyberattacks, AI job displacement and more." (The old "curated each morning for
    founders and investors" copy was dropped: the live site is a daily risk-alert magazine with graph pages.)
  - Arrow: the Digest tile used assets/img/card-arrow.svg, a simplified trace of the business-card arrow that has
    no upper-left forward wing, so the wing was missing at every size. It now uses
    assets/img/techvest-arrow-bare.svg: the exact newsletter-2012 TechVest arrow geometry (the same shape as the
    masthead arrow tile), both forward wings, with an 8% margin built into the viewBox, shown with
    object-fit: contain in its own box, so no tile size can crop it.
  - Affiliated Venture Sites order (Home and Ventures): 1 TVV Daily Risk Alert Digest, 2 techvesteconometrics.com,
    3 intualityai.com, 4 brysonusa.com, 5 ultimateplan.net, 6 stemXbank.com, 7 CognomIQ.com, 8 ideamille.com,
    9 augmentiveAIventures.com, 10 hanscalmeyer.com (alone on line 4 at three across).
    Thinking "Related" (Digest, techvesteconometrics.com) already followed this order. The footer site list has a
    different, shorter order and was left as it was.
  - Intuality: the tile caption "intualityai.com · The Science" is now "intualityai.com · Prediction" (Home and
    Ventures), and its picture's alt text is now "Intuality AI Prediction: a page of intualityai.com, captured
    30 October 2026". The link still goes to https://intualityai.com/the-science/ (that is the page's real
    address) and the picture file names still contain "the-science".
  - Everything else is exactly as in v7.1 2026-11-01.

CHANGES IN V7.1 2026-11-01
  - "TVV Daily Digest" is now the FIRST tile in Affiliated Venture Sites on the Home page and on the Ventures
    tab, and the first tile in "Related" on the Thinking tab. All the other tiles moved down one place in their
    existing order; none was removed or reordered. In the three-across grid that puts augmentiveAIventures.com
    alone on line 4 (hanscalmeyer.com is the middle tile of line 3).
  - The tile is a clean text tile (no new logo): the red TechVest card arrow (assets/img/card-arrow.svg) above
    "TechVestVentures", "TVV Daily Digest" in shining gold on black, a red rule and the line
    "Venture signals, curated daily."
  - Pointers: a line under the focus areas near the top of the Home page ("The TVV Daily Digest: what's new in AI,
    ventures, and opportunity, curated each morning for founders and investors in the TechVest network.") and a
    "TVV Daily Digest" link at the start of the site list in the footer of every page.
  - THE DIGEST HAS NO PUBLIC ADDRESS YET. Its address is one constant in ONE file, assets/js/digest.js:
        var DIGEST_URL = "#tvv-daily-digest-url-pending";
    While it is that placeholder, every Digest tile and pointer shows "Coming soon" (label and tooltip) and does
    nothing when clicked: no new tab, no go.html, no broken page. When the real address is confirmed, replace the
    placeholder with it (one edit). The tile, Home line and footer links then open it in a new tab, and the tile
    gets the same go.html crossfade as the other sites (transitions.js adds DIGEST_URL to go.html's allow-list
    from that constant; the placeholder itself is refused by go.html). The suggested future address appears only
    as a comment in digest.js; it is not linked anywhere.
  - No email collection anywhere: there is no form, no subscribe box and no email field on any page.
  - Everything else is exactly as in v7.0 2026-11-01.

CHANGES IN V7.0 2026-11-01
  - Michael's two deep-gold cube animations (his pick of 1 Nov 2026, 4:33 PM ET, relayed by Imagine Expert) are
    now in the black cosmos column on every page, each on a solid black band like the chessboard, directly after
    Golden Cube Unfolding (the last picture in the column):
      1 "Augmentive Growth with TVV AI"     Cube launch v6 2026-11-01 joined web 4x3 (30 s, 1440 x 1080, 24 fps)
      2 "Augmentive Creative Destruction"   Cube launch and recombination v3 2026-11-01 web 4x3 (about 50 s)
    Each plays by itself, muted, looping, inline, with no controls and no link. WebM is listed first, MP4 is
    the fallback. Shown at their natural 4:3 shape on wide screens; in the phone strip (820 px and less) they
    are cropped to 16:9 like the other thumbnails.
  - They load only when the column is scrolled to within about one screen of them (IntersectionObserver), so
    the first paint and the transitions are unchanged; they pause when scrolled out of view. With "reduce
    motion" turned on, only the still poster is shown and nothing plays.
  - New files in assets/video/ (names keep their spaces, as on the master files):
      Cube launch v6 2026-11-01 joined web 4x3.webm / .mp4
      Cube launch v6 2026-11-01 joined poster 4x3.webp   (Imagine Expert's 3840 x 2160 poster, centre-cropped
                                                          to 4:3 to match the video, 1440 x 1080)
      Cube launch and recombination v3 2026-11-01 web 4x3.webm / .mp4
      Cube launch and recombination v3 2026-11-01 poster 4x3.webp  (frame at 12 s: a cube cracked open
                                                          releasing its red arrow; no poster was supplied)
  - Code: column-items.js has two new entries with a "video" field; column.js draws a video for those entries
    (TVV_COLUMN_VIDEOS); site.css has a few lines for them. The older v4 clips are not used.
  - Everything else is exactly as in v6.0 2026-10-31 (chessboard, v6.1 crossfades, go.html tiles).

CHANGES IN V6.0 2026-10-31
  - Michael's angels-and-demons chessboard (golden angels against red demons on a gold-and-crimson board) is
    now in the black cosmos column on every page that has it (Home, Ventures, Approach, Thinking, About and the
    complete bio), directly below the Red Arrow Comet. It sits on a solid black band the full width of the
    column (the starfield is hidden behind it), at the same width as the comet picture, in its natural 16:9
    shape (2000 x 1125, no stretching or cropping), with the caption "Angels and Demons". It is shown only and
    does not link anywhere. Everything below it in the column moved down; nothing was removed.
  - New files: assets/img/art/angels-and-demons-chessboard-1280.webp and -2000.webp (display copies, picked by
    srcset), assets/img/art/4k/angels-and-demons-chessboard-original-2000.png (Michael's original, untouched;
    loaded on screens 2560 px and wider, like the other 4K PNGs; full working copy only, not in the zip).
    A tiny built-in preview was added to assets/js/lqip.js so it never paints empty during transitions.
  - On narrow screens (820 px and less), where the column becomes a strip across the top, it is one more
    thumbnail in that strip, with a thin black frame.
  - Code: assets/js/column.js now accepts pictures without a link (shown, not clickable) and an optional
    "matte: true" for the black band; the first five column pictures (was four) load at once, so the same
    pictures as before stay eager and the transition still waits for the visible column before fading.
  - The cube-launch animations are not added yet. Everything else is exactly as in v6.1 2026-10-30.

CHANGES IN V6.1 2026-10-30
  - Smoother transitions, like a PowerPoint fade: the page dissolves into the picture (700 ms), the picture
    holds (600 ms, the time the next page takes to open counts toward it), then the picture dissolves into
    the new page (700 ms): 2 s in all, with an ease-in-out curve throughout. Only opacity is animated.
  - Fixed the jerk: in v6 the new page briefly painted black (about 0.1 s, cosmos column included) and the
    picture then popped in. Now the scripts that draw the column and the picture run before the first paint,
    tiny blurred previews of every picture are built in (assets/js/lqip.js), and the picture is decoded before
    any fade starts. In Chrome and Edge 126+ and Safari 18.2+ over http(s), the browser also holds the old
    page until the new one is ready (cross-document View Transitions); elsewhere the script alone does it.
  - On screens over about 2200 physical pixels wide the transition uses new 3840-wide copies of the six
    pictures (assets/img/art/concept-*-3840.webp, about 2.4 MB in all), the same file on both pages.
  - Affiliated Venture Sites tiles now have a transition too (they never had one, also not in v1 to v6, because
    they open a new tab). A click opens a new tab (go.html) where the next picture fades in from black, holds,
    then dissolves to white (the colour every affiliated site starts on) and the site opens in that tab. The
    Augmentive prototype dissolves to black instead. Click or any key skips. go.html only opens the nine
    addresses listed in assets/js/transitions.js. The affiliated sites themselves then load as they normally do.
  - "The Augmentive Concert:" now always sits on its own line, with the rest of the headline below it, at
    every window width (Home headline and the mission quote on Approach).
  - Everything else is exactly as in v6 2026-10-30.

CHANGES IN V6 2026-10-30
  - Home headline (also the mission quote on Approach) now reads:
      "The Augmentive Concert: profitable venture successes optimally melding human and AI intelligence"
    It fits on one line on 1920 and 2560 px screens; on windows narrower than 1500 px it breaks after the
    colon onto two lines.
  - Home heading "Affiliated sites" is now "Affiliated Venture Sites".
  - Removed the internal note under that heading (and the same note on Ventures):
      "Pages as captured on 29 and 30 October 2026; ideamille.com as archived in December 2014;
       augmentiveAIventures.com is our own prototype, coming soon. Each opens in a new tab."
  - Building Blocks Cosmos (top of the cosmos column) is shown 1.5x taller, with the art 1.5x larger and
    cropped more vertically around the cube tower and arrow (1280:1080 instead of 16:9); the other column
    pictures sit lower. New files: assets/img/art/concept-1-building-blocks-cosmos-tall-1280/1920.webp and
    assets/img/art/4k/concept-1-building-blocks-cosmos-tall-4k.png (2560x2160 from the 4K master).
    On phones the column strip keeps all pictures the same 16:9 size.
  - Transitions now take turns through six pictures, one per click, in this order (then repeat):
      1 Red Arrow Comet  2 Building Blocks Cosmos  3 Ventures Constellation
      4 Human and Machine Hands  5 Humanities and Sciences  6 Golden Cube Unfolding
    Each transition is 2 s in all: 400 ms fade in, 1.2 s hold, 400 ms fade out. Click or any key skips.
    Reduced motion: a short fade only. List and order: assets/js/transitions.js.
    Preview one: index.html?preview=transition&tx=1 ... &tx=6

CHANGES IN V5 2026-10-30
  - Tile 6 (ultimateplan.net) re-framed: instead of the tight zoom on Moses, it now shows the top of the whole
    page magnified about 1.7x compared with v3, with the complete Moses banner (full width and height) plus the
    site title, menu, headline and opening text around it. From a 3x-density capture, 800/1600/2400 px.
    High-res crop: assets/img/sites/source/ultimateplan.net v5 crop.png
  - All other tiles, layout and text are exactly as in v4 2026-10-30.

CHANGES IN V4 2026-10-30
  - Affiliated sites tiles re-cropped from new high-resolution captures (3x pixel density), still natural 4:3,
    now served at 800, 1600 and 2400 px wide so they stay sharp on 55-inch 4K screens:
      1 techvesteconometrics.com  top half of the page (masthead, nav, crystal hero)
      2 intualityai.com The Science  zoomed on the robot hand and AI cube
      6 ultimateplan.net  zoomed on Moses dividing the waters
      7 hanscalmeyer.com  top 2/3 of the earlier view
      8 ideamille.com  shifted up to show the whole circle chart ("ball of balls")
      9 Augmentive AI Ventures  the content only, no sidebar
    Tiles 3, 4, 5 (Bryson, CognomIQ, stemXbank) unchanged. High-res crop PNGs: assets/img/sites/source/* v4 crop.png
  - Each row of three now lines up (the lowered middle column is gone), and the space between rows equals
    the space between pictures in a row.
  - About short bio: "Kellogg MBA from Northwestern in Finance and Marketing,".

CHANGES IN V3 (30 Oct 2026)
  - Top-right logo tile now matches techvesteconometrics.com: dark navy square, filled red arrow (not outlined)
    with a solid black shadow, white bold "TechVest". Vector master: assets/img/techvest-arrow-tile.svg
    (PNG fallback techvest-arrow-tile-468.png). 2048 and 4096 px PNG masters are in website-guru/logo/final/.
    The small arrow in the cosmos column is now the filled red arrow too.
  - About lists three emails in order: techvest@att.net, michael.hentschel@intualityai.com,
    michael.hentschel@brysonusa.com.
  - Focus areas: Acceleration, Venture Capital, Business Models, Board Advisor
    (AnthroTechnology and Civilization Dynamics removed for now) on Home, Approach and About.
  - Short bio on About and the complete detail bio page (bio-complete.html) are written from Michael's two
    PDFs (5-page CV and 1-page bio). Business Models and Board Advisor descriptions on Approach come from them too.
    No phone or Zoom ID appears anywhere.
  - Affiliated sites (Home and Ventures), two per line: 1 TechVest Econometrics | Bryson,
    2 IntualityAI The Science | CognomIQ, 3 Hans Calmeyer | stemXbank, 4 UltimatePlan.
    The Intuality tile now shows and opens https://intualityai.com/the-science/ (captured 30 Oct 2026).
    CognomIQ.com was added (front page captured 30 Oct 2026) and is also in the footer links.
  - The wide cubes-and-arrow banner band (assets/img/art/footer-banner-2560.webp) is hidden for now:
    the home-banner under the Home masthead and the foot-banner above the footer on every page are
    commented out in the HTML (search for "banner band hidden"). Remove the comment markers to bring it back.

TechVestVentures prototype v7.0 2026-11-01: how it is built and how to add art

FILES
  index.html, ventures.html, approach.html, thinking.html, about.html   the pages
  bio-complete.html              the complete detail bio: not in the menu, noindex, reached from the small
                                 "Complete detail bio" link under the short bio on About, or Shift+B on any page
  assets/css/site.css            all styling (colours and fonts at the top)
  assets/js/column-items.js      THE LIST OF ART IN THE BLACK COSMOS COLUMN (edit this one)
  assets/js/column.js            draws that list into the column on every page (no need to edit)
  assets/js/transitions.js       the fade transitions (internal pages and the new-tab tiles), timings at the top
  assets/js/lqip.js              tiny built-in previews of the pictures, so nothing paints black while loading
  assets/js/site.js              mobile menu, 4K loading on wide screens
  go.html                        the new-tab transition page used by the Affiliated Venture Sites tiles
  assets/img/art/                concept art, compressed WebP display copies (1280 and 1920 wide, square crops)
  assets/img/art/4k/             4K PNG originals (in the full working copy only, not in the zip)
  assets/img/art/angels-and-demons-chessboard-1280.webp, -2000.webp   v6.0 chessboard display copies
  assets/img/art/4k/angels-and-demons-chessboard-original-2000.png    v6.0 chessboard original (working copy only)
  assets/img/sites/              front-page pictures of the affiliated sites (WebP), captured 29 Oct 2026
  assets/img/sites/source/       the original full-size PNG captures (1920 x 1200)
  assets/video/                  v7.0 column animations (WebM + MP4) and their WebP posters
  Web file names use dashes instead of spaces so they work in every browser (the v7.0 videos keep their
  spaced names; column.js encodes them, tested over http and by double-click).

ADD A PICTURE TO THE COSMOS COLUMN
  1. Save a compressed copy of the picture, about 1280 pixels wide, as WebP or JPEG, in assets/img/art/
     (optional: a 1920-wide copy too, and the full-size PNG in assets/img/art/4k/).
  2. Open assets/js/column-items.js in any text editor.
  3. Copy one block from { to }, paste it where you want it in the list, and change:
        image    the compressed file                       e.g. "assets/img/art/my-picture-1280.webp"
        image2x  optional bigger copy                      e.g. "assets/img/art/my-picture-1920.webp"
        hires    optional 4K PNG for 2560 px+ screens      e.g. "assets/img/art/4k/my-picture-4k.png"
        alt      a short description of what it shows
        link     the page or site it opens                 e.g. "ventures.html" or "https://intualityai.com"
        caption  the title shown under it
        label    optional small line, e.g. the page name
        newTab   true for outside sites
        video    optional (v7.0) { webm: "...", mp4: "..." }: a muted looping animation; image is then its poster
        matte    optional, true = solid black band around the picture (v6.0); link may be left out for a
                 picture that is shown but not clickable
     Keep a comma between blocks. Save, then reload any page: the picture appears on every page.
  4. To remove or reorder, delete or move a block. Order in the file = order in the column.

TRANSITION
  On an internal link: the next of six transition pictures fades in over the content area (700 ms), the next
  page opens underneath and keeps it for 600 ms, then it fades out (700 ms), 2 s in all. The cosmos column is
  never covered. On an Affiliated Venture Sites tile: the same picture sequence in the new tab (go.html), ending
  on white, then the site. Click or any key skips.
  Timings: FADE_IN, HOLD and FADE_OUT at the top of assets/js/transitions.js. Reduced motion: 160 ms fades, no hold.
  Freeze frame for review: add ?preview=transition to any page address.

LOOK
  Modelled on techvesteconometrics.com: charcoal masthead with serif site name and bold italic tagline,
  grey Georgia page title in an inset dark banner, red-arrow logo tile at the right, dark tabbed nav bar in
  Verdana, light content panel with serif text and navy Arial headings, square bordered image tiles with the
  caption on the picture (after its "Issues by Image" page), and a cosmic banner picture above a dark footer
  with text links. Changed on purpose: the site's green title and white left sidebar became white text and
  the black cosmos column, the layout is fluid instead of fixed 980 px, and text sizes scale up for very
  large screens. All text colours meet WCAG AA contrast (4.5:1 or better).

Update 30 Oct 2026 (tiles and card arrow)
- Affiliated sites tiles on Home and Ventures are back to 3 per line on desktop (2 per line below 1100 px wide, 1 per line on phones), with the same order on every size:
  Line 1: techvesteconometrics.com, intualityai.com The Science, brysonusa.com
  Line 2: CognomIQ.com, stemXbank.com, ultimateplan.net
  Line 3: hanscalmeyer.com
  Tile pictures are cropped wider (2.2 to 1, top of page kept) so the first two lines show without scrolling at 1920x1080 and 2560x1440.
- The small red arrow in the black left column is now a very small copy of the arrow on Michael's business card (assets/img/card-arrow.svg, about 24 px wide). The master is logo/final/TechVest card arrow.svg plus a 4096 PNG. It was traced by eye from the card image; check it against the printed card.
- The masthead arrow tile and the favicon are unchanged.

Update 30 Oct 2026 (natural tiles and IdeaMille)
- The affiliated sites tile pictures are back to their natural 4:3 screen shape (the wide 2.2:1 crop is gone). Still 3 per line, with more space between tiles, and the middle column sits a little lower for a gentle asymmetry (desktop only).
- Line 3: hanscalmeyer.com, then ideamille.com, then a short placeholder line for Michael's own words.
- The ideamille.com tile shows the archived home page (Internet Archive copy from 25 December 2014), is tagged [Coming back soon], and opens the archived page in a new tab, because the live domain has no new site yet.
- With the natural shape, two full lines no longer fit on one screen at 1920x1080; that is intended.

Turn H (30 October 2026): nine affiliates
  - The line-3 placeholder quote is replaced by a 9th tile, "augmentiveAIventures.com [Coming soon]", on Home and Ventures.
    Order: Econometrics | Intuality The Science | Bryson / CognomIQ | stemXbank | UltimatePlan / Hans Calmeyer | IdeaMille | Augmentive.
  - Its picture (assets/img/sites/augmentiveaiventures-proto-800/1600.webp) is a screenshot of the new
    Augmentive AI Ventures prototype home page (Human and Machine Hands art).
  - The tile links with a relative path to ../augmentive ai ventures prototype v1/index.html, so the folders
    "tvv prototype v6 2026-10-30" and "augmentive ai ventures prototype v1" must sit side by side. Swap in
    https://augmentiveaiventures.com once that site is live.

v7.3 2026-11-01: The home page kicker (index.html line 46) now reads "TechVestVentures LLC · Venture Productivity Success through Humanized AI" (Michael, relayed by Michaelangelo Arts Manager). The brand tagline elsewhere is unchanged.

v7.4 2026-11-01: The affiliate tiles on Home and Ventures are reordered to Digest, techvesteconometrics, intualityai, brysonusa, ideamille, augmentiveAIventures, CognomIQ, ultimateplan, stemXbank, hanscalmeyer (Michael, relayed by Michaelangelo Arts Manager).
