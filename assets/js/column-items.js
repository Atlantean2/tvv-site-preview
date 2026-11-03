/* TechVestVentures cosmos column: the list of art shown on the left of every page.
   To add art: copy one { ... } block, change the values, keep the commas. See README.txt.
     image   : compressed display copy (WebP or JPEG), about 1280 px wide        (required)
     image2x : optional bigger display copy, about 1920 px wide
     hires   : optional full-resolution PNG, loaded only on screens 2560 px and wider
     alt     : what the picture shows, for people who cannot see it               (required)
     link    : page or site the picture opens                                     (required)
     caption : short title shown under the picture                                (required)
     label   : optional small line under the caption (where the link goes)
     newTab  : true for outside sites, so they open in a new tab
     tall    : optional, true = shown 1.5x taller than the others (more vertical crop)
     matte   : optional, true = picture sits on a solid black band the full width of the column
     (v6.0 2026-10-31: link is optional; without one the picture is shown but not clickable)
     video   : optional (v7.0 2026-11-01) { webm: "...", mp4: "..." } - a looping, muted animation instead of a
               picture; "image" is then its poster (shown at once with reduced motion, and until it plays).
               Loaded only when the column scrolls near it, so it never slows the first paint. */
window.TVV_COLUMN = [
  { image:   "assets/img/art/concept-1-building-blocks-cosmos-tall-1280.webp",
    image2x: "assets/img/art/concept-1-building-blocks-cosmos-tall-1920.webp",
    hires:   "assets/img/art/4k/concept-1-building-blocks-cosmos-tall-4k.png",
    tall:    true,   /* v6: shown 1.5x taller (art 1.5x larger), cropped more vertical */
    alt:     "Golden building-block cubes floating in a dark cosmos around a red arrow",
    link:    "approach.html", caption: "Building Blocks Cosmos", label: "Approach" },

  { image:   "assets/img/art/concept-3-red-arrow-comet-1280.webp",
    image2x: "assets/img/art/concept-3-red-arrow-comet-1920.webp",
    hires:   "assets/img/art/4k/concept-3-red-arrow-comet-4k.png",
    alt:     "A red arrow streaking like a comet across a golden mosaic sky",
    link:    "index.html", caption: "Red Arrow Comet", label: "Home" },

  /* v6.0 2026-10-31: Michael's angels-and-demons chessboard, on black, directly below the Red Arrow Comet.
     Shown only (no link). Full-size original (2000 x 1125 PNG) in assets/img/art/4k/. */
  { image:   "assets/img/art/angels-and-demons-chessboard-1280.webp",
    image2x: "assets/img/art/angels-and-demons-chessboard-2000.webp", image2xWidth: 2000,
    hires:   "assets/img/art/4k/angels-and-demons-chessboard-original-2000.png",
    matte:   true,
    alt:     "Golden angels and red demons facing off on a gold-and-crimson chessboard",
    caption: "Angels and Demons" },

  { image:   "assets/img/art/concept-4-ventures-constellation-1280.webp",
    image2x: "assets/img/art/concept-4-ventures-constellation-1920.webp",
    hires:   "assets/img/art/4k/concept-4-ventures-constellation-4k.png",
    alt:     "Glowing golden icon tiles linked in a constellation around a red arrow",
    link:    "ventures.html", caption: "Ventures Constellation", label: "Ventures" },

  { image:   "assets/img/art/concept-2-human-and-machine-hands-1280.webp",
    image2x: "assets/img/art/concept-2-human-and-machine-hands-1920.webp",
    hires:   "assets/img/art/4k/concept-2-human-and-machine-hands-4k.png",
    alt:     "A human hand and a machine hand passing a golden cube marked with a red arrow",
    link:    "approach.html", caption: "Human and Machine Hands", label: "Approach" },

  { image:   "assets/img/art/concept-5-humanities-and-sciences-1280.webp",
    image2x: "assets/img/art/concept-5-humanities-and-sciences-1920.webp",
    hires:   "assets/img/art/4k/concept-5-humanities-and-sciences-4k.png",
    alt:     "A classical column, lyre and books beside a DNA helix and building blocks under a red arrow",
    link:    "thinking.html", caption: "Humanities and Sciences", label: "Thinking" },

  { image:   "assets/img/art/concept-6-golden-cube-unfolding-1280.webp",
    image2x: "assets/img/art/concept-6-golden-cube-unfolding-1920.webp",
    hires:   "assets/img/art/4k/concept-6-golden-cube-unfolding-4k.png",
    alt:     "A golden cube unfolding into smaller cubes beneath a red arrow",
    link:    "about.html", caption: "Golden Cube Unfolding", label: "About" },

  /* v7.0 2026-11-01: Michael's two deep-gold cube animations (chosen 1 Nov 2026), on black, after Golden Cube
     Unfolding. Autoplay, muted, looping, no controls, no link. Short one on top, long one below.
     Poster-only when the computer is set to reduce motion. */
  { video:   { webm: "assets/video/Cube launch v6 2026-11-01 joined web 4x3.webm",
               mp4:  "assets/video/Cube launch v6 2026-11-01 joined web 4x3.mp4" },
    image:   "assets/video/Cube launch v6 2026-11-01 joined poster 4x3.webp",
    matte:   true,
    alt:     "Animation: golden cubes in a dark cosmos crack open and release red arrows",
    caption: "Augmentive Growth with TVV AI" },

  /* v7.9 2026-11-03: the long three-part Creative Destruction sequence (launch, recombination, then the
     green-inlaid cube structure ending in a pyramid with red accents), about 83 s. */
  { video:   { webm: "assets/video/Cube launch recombination and structure v1 2026-11-03 web 4x3.webm",
               mp4:  "assets/video/Cube launch recombination and structure v1 2026-11-03 web 4x3.mp4" },
    image:   "assets/video/Cube launch recombination and structure v1 2026-11-03 poster 4x3.webp",
    matte:   true,
    alt:     "Animation: golden cubes break apart, launch red arrows, recombine, and rebuild as green-inlaid cubes stacked into a pyramid with red accents",
    caption: "Augmentive Creative Destruction" }
];
