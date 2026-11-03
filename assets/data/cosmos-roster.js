/* TVV Cosmic Command Center: WEEKLY ROSTER DATA FILE (the only file a weekly refresh needs to replace).
   All four views read this file: cosmos-galaxy.html, cosmos-lunar-galaxy.html, cosmos-orbits.html and
   cosmos-lunar-orbits.html. Nothing about the teams or their role moons lives anywhere else.

   HOW TO UPDATE (weekly):
   1. Change "asOf" to the date of the new roster (YYYY-MM-DD). The pages show it as "Roster as of <date>".
   2. Add, remove or edit teams in "teams". Each team needs:
        slug     : short id, lowercase-with-dashes, unique (used in links such as cosmos-orbits.html#team-risk-watch)
        name     : public team name shown on the star
        ring     : 1-4, which orbit on the Orbits views (1 = closest to Michael); ring names are in "rings"
        arm      : 0 or 1, which spiral arm on the Galaxy views (0 gold, 1 red); keep the two arms roughly even
        size     : 1 (small) to 3 (large), the star's size
        role     : one public-safe sentence: what the team does
        produces : one short public-safe phrase: the content or work it produces
        moons    : 3 to 6 short PUBLIC ROLE TITLES (e.g. "Daily Risk Alert graphs editor"). They orbit the star on the
                   Lunar Galaxy and Lunar Orbits views and are listed under the team in "All teams as a list".
                   Role titles only: no bot names or ids, no people's names, no client names, nothing confidential.
      Optional: moonLine (one public-safe line about the team's roles, shown with a moon's explanation and in the list)
      Optional: source (the team's name on Michael's private page, for editing; never shown on the site).
   3. PUBLIC-SAFE ONLY: no bot names or ids, no counts, no approvals, no usage, no finances, no client-confidential
      detail, no health or family matters, no phone numbers or meeting ids, no contact links.
   4. Keep this as a .js file (not .json) so the pages also work when opened straight from disk (file://).
   5. Save, then reload any of the four pages. No other file changes. */
window.TVV_COSMOS_ROSTER = {
  asOf: "2026-11-02",
  sun: { slug: "michael", name: "Michael Calmeyer Hentschel", short: "Michael",
    role: "Managing Director of TechVestVentures and the sun of this system: every team works under his direction and judgment.",
    produces: "Direction, judgment and the final approval on everything that goes out." },
  rings: ["The TVV practice", "Creative and media", "Ideas and research", "Ventures and long-horizon projects"],
  teams: [
    { slug: "command-core", name: "Command Core", source: "Grok Bot Manager & Core", ring: 1, arm: 0, size: 1.4,
      role: "Michael's AI-augmented command team: it routes each piece of work to the right specialist.",
      produces: "Task routing, predictive models, and creative-destruction (Schumpeterian) analysis.",
      moonLine: "The roles that keep the right work moving to the right specialist.",
      moons: ["Work router", "Creative-destruction analyst", "Predictive modeling lead"] },
    { slug: "techvestventures", name: "TechVestVentures Practice", source: "TechVest TVV", ring: 1, arm: 1, size: 2.1,
      role: "Michael's AI-augmented team for TVV's fractional-CFO and advisory practice.",
      produces: "Deal memos, engagement letters, competitive research, practice metrics and websites.",
      moonLine: "The practice roles behind TVV's fractional-CFO and advisory work.",
      moons: ["Practice chief of staff", "Deal memo writer", "Engagement and contracts manager", "Competitive research lead", "Practice metrics manager", "Website builder"] },
    { slug: "business-office", name: "Business Office", source: "TVV Business Office", ring: 1, arm: 0, size: 2.2,
      role: "Michael's AI-augmented team for marketing, sales and the packaging of TVV products and services.",
      produces: "Newsletters, LinkedIn and email content, sales and marketing advice, and distribution-channel plans.",
      moonLine: "The marketing, sales and packaging roles of the TVV business office.",
      moons: ["Daily newsletter editor", "LinkedIn and X content manager", "Marketing advisor", "Sales advisor", "Storytelling marketer", "Products and services packager"] },
    { slug: "risk-watch", name: "Risk Watch", source: "TVV Risk Watcher", ring: 1, arm: 1, size: 1.7,
      role: "Michael's AI-augmented newsroom behind the TVV Daily Risk Alert Digest.",
      produces: "The daily Digest: sourced research, clear graphs, a two-page layout and a strict final fact-check.",
      moonLine: "The desks that build each TVV Daily Risk Alert Digest.",
      moons: ["Digest lead editor", "Research slate desk", "Daily Risk Alert graphs editor", "Two-page layout desk", "Final fact-check gate", "Video and voice brief desk"] },
    { slug: "network-gurus", name: "Network Gurus", source: "Network Gurus", ring: 2, arm: 0, size: 1.2,
      role: "Michael's AI-augmented specialists whose know-how is shared across the TechVest network.",
      produces: "Know-how on digital products, physical products, and gaming and gamification.",
      moonLine: "Specialists whose know-how is shared across the network.",
      moons: ["Digital products guru", "Physical products guru", "Gaming and gamification guru"] },
    { slug: "media-creator", name: "Media Creator", source: "Media Creator", ring: 2, arm: 1, size: 1.8,
      role: "Michael's AI-augmented media studio.",
      produces: "Video, images, voice-overs, music and storyboards made from TVV briefs and digests.",
      moonLine: "The studio roles that turn TVV briefs into media.",
      moons: ["Script and storyboard writer", "Generative video maker", "Image maker", "Voice and narration", "Music and sound designer", "Editor and captions"] },
    { slug: "media-marketer", name: "Media Marketer", source: "Media Marketer", ring: 2, arm: 0, size: 1.8,
      role: "Michael's AI-augmented team for bringing TVV's work to the right audiences.",
      produces: "Brand positioning, search and audience-growth plans, multi-channel publishing and partnership ideas.",
      moonLine: "The roles that bring TVV's work to the right audiences.",
      moons: ["Brand and positioning strategist", "Audience growth and SEO", "Multi-channel distribution", "Conversion and funnel expert", "Marketing analytics", "Community manager"] },
    { slug: "michaelangelo", name: "Michaelangelo", source: "Michaelangelo", ring: 2, arm: 1, size: 2.3,
      role: "Michael's intellectual and creative writing team, always in his own voice.",
      produces: "Essays and books in progress, idea briefs, debate and fact-checks; Michael approves everything published.",
      moonLine: "The writing-room roles that keep Michael's work in his own voice.",
      moons: ["Voice and style guardian", "Citation and fact checker", "Debate partner", "Idea incubator", "Publishing manager", "Reader's-eye reviewer"] },
    { slug: "persona-voices", name: "Persona Voices", source: "Persona Bots", ring: 3, arm: 0, size: 1.2,
      role: "AI-augmented reflections of three of Michael's own voices, built from his writing and views.",
      produces: "Perspectives on venture finance, deep history and longevity.",
      moonLine: "Three of Michael's own voices.",
      moons: ["Venture-finance voice", "Deep-history voice", "Longevity voice"] },
    { slug: "research-library", name: "Research Library", source: "YouTube Librarian", ring: 3, arm: 1, size: 3,
      role: "Michael's AI-augmented research library across dozens of subjects.",
      produces: "Curated new expert video and research, from AI and energy to economics, archaeology and venture investing.",
      moonLine: "Subject curators who find new expert video and research.",
      moons: ["Chief librarian", "AI and technology curator", "Energy curator", "Economics and markets curator", "Archaeology and history curator", "Venture and startup curator"] },
    { slug: "ideamille", name: "IdeaMille", source: "IdeaMille", ring: 3, arm: 0, size: 1.7,
      role: "Michael's AI-augmented venture scouts.",
      produces: "Ranked lists of promising ventures by region (Asia, California, Texas, the German-speaking countries, North Carolina) and venture vision work.",
      moonLine: "Regional venture scouts and venture vision.",
      moons: ["Asia venture scout", "California venture scout", "Texas venture scout", "German-speaking countries venture scout", "North Carolina venture scout", "Venture visioneer"] },
    { slug: "venture-strategies", name: "Venture Strategies", source: "Project Venture Strategies", ring: 3, arm: 1, size: 2,
      role: "Michael's AI-augmented venture strategy desk.",
      produces: "Strategy and competitive research on the ventures TVV advises and evaluates.",
      moonLine: "The strategy desk and its venture experts.",
      moons: ["Strategy desk lead", "Named venture experts", "Fractional-CFO practice expert", "Strategy summary keeper"] },
    { slug: "intuality", name: "Intuality", source: "Intuality", ring: 4, arm: 0, size: 2.6,
      role: "Michael's AI-augmented team supporting IntualityAI, where he serves as strategic CFO.",
      produces: "Strategy, product, market and partnership work for its predictive AI.",
      moonLine: "Company-building roles supporting IntualityAI.",
      moons: ["Chief of staff", "Product manager", "Cognitive science expert", "Competition analyst", "Marketing manager", "Sports and league partnerships"] },
    { slug: "bryson", name: "Bryson Industries", source: "Bryson", ring: 4, arm: 0, size: 2.2,
      role: "Michael's AI-augmented team supporting Bryson Industries, where he serves as strategic CFO.",
      produces: "Market, product and growth strategy for its specialty cleaning products.",
      moonLine: "Growth roles supporting Bryson Industries.",
      moons: ["Chief of staff", "Product innovation", "Competition analyst", "Marketing manager", "Digital sales manager", "Government opportunities watch"] },
    { slug: "cognomiq", name: "CognomIQ", source: "CognomIQ", ring: 4, arm: 0, size: 2.3,
      role: "Michael's AI-augmented team supporting CognomIQ, where he serves as strategic CFO.",
      produces: "Strategy, partnership and market research for its healthcare data platform.",
      moonLine: "Company-building roles supporting CognomIQ.",
      moons: ["Chief of staff", "Product innovation", "Competition analyst", "Marketing manager", "Pilots and partners", "White papers"] },
    { slug: "civilizational-knowledge", name: "Civilizational Knowledge", source: "Civilizational Second Brains", ring: 4, arm: 1, size: 2.8,
      role: "A long-horizon project on the skills and knowledge civilization depends on.",
      produces: "Research to find, preserve and re-teach essential know-how, from metallurgy and navigation to food, water and power.",
      moonLine: "Archivists and specialists for essential know-how.",
      moons: ["Strategic lead", "Chief archivist", "Skills cataloguer", "Metals and crafts keeper", "Navigation keeper", "Food, water and power systems"] },
    { slug: "alumiworks", name: "Alumiworks", source: "Project Venture Strategies: Alumiworks Venture Expert", ring: 4, arm: 0, size: 1.4,
      role: "Michael's AI-augmented team supporting Alumiworks, a North Carolina architectural-metal fabricator and builder, where he serves as strategic advisor.",
      produces: "Venture strategy, market and competitive research for its railings, stairs, structural and storefront work.",
      moonLine: "Strategy roles supporting Alumiworks.",
      moons: ["Venture strategy expert", "Architectural-metal market researcher", "Competitive landscape analyst"] },
    { slug: "longevity-strategies", name: "Longevity Strategies", source: "Other: Longevity Strategies Project", ring: 4, arm: 1, size: 1.4,
      role: "A long-horizon project researching strategies for healthy longevity.",
      produces: "Structured research on long-horizon healthy-longevity strategies and the science of healthspan, for general understanding, not medical advice.",
      moonLine: "Research roles for the longevity project.",
      moons: ["Longevity strategy planner", "Healthspan research curator", "Longevity perspective voice"] }
  ]
};