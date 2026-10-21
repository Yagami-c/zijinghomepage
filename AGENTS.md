# Architecture rules
- Keep all user-facing artist copy in LanguageContext with English, Russian and Chinese variants so changing language updates every new view.
- Store P0 work records and typed metadata in a shared catalog; unknown metadata stays null and optional assets stay hidden so listings and details cannot diverge or fabricate facts.
- Reuse portfolio primitives and the existing Button for P0 controls; scope the restrained visual system to portfolio pages to preserve legacy page styling.
- Keep existing page routes and contact-panel behavior intact; new works routes are additive to preserve previously shared links.
- Use local WebP artist images for covers, responsive sources for the homepage image and defer third-party player creation until explicit interaction to avoid unsolicited audio and loading cost.
- Keep navigation always visible in a sticky header with wrapping grid links on small screens; natural header height prevents translated links from covering page content.
- Scope route loading boundaries to the page outlet so the navigation and contact remain usable during page downloads; defer offscreen homepage rendering with content visibility.