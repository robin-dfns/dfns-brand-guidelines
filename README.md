# DFNS Design System

Single source of truth for the DFNS brand & UI, centralized on GitHub.
GitHub is the authority; Figma is a consumer, not the reference.

## Structure
- **`tokens/`** — design tokens (`color.json`, `typography.json`). Source of truth → built to `build/tokens.css` (Phase 1).
- **`assets/`** — brand assets: `fonts/` (Suisse Intl), `logos/` (source SVG + .ai), imagery (`Guidelines/ Renders/ Schematics/ Social/ Team/ Vectors/`), `email/` (logos hosted for transactional emails).
- **`components/`** — coded component specs (Phase 3).
- **`build/`** — generated token artifacts (Phase 1, do not edit).
- **`index.html`** — the guidelines / documentation site, served via GitHub Pages.

## Publishing
GitHub Pages serves `index.html` from `main`:
https://robin-dfns.github.io/dfns-design-system/
(Automated CI publish: Phase 2.)

## Not here
Brand *production* (presentations, slide kits, newsletters) lives outside this repo — it consumes the system, it is not part of it.
