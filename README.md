# Silicon Steel Software — Website

The marketing site for [Silicon Steel Software](https://siliconsteelsoftware.com),
an AI-native consultancy. Built with [Astro](https://astro.build), deployed to
GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the production build locally
```

## Architecture

Static single-page site, zero client frameworks — one small script handles the
nav state, mobile menu, and scroll-reveal (with a no-JS fallback and
`prefers-reduced-motion` support).

```
src/
  layouts/Base.astro      # head, fonts, meta/OG tags, interaction script
  components/             # Nav, Hero, Capabilities, Approach, Principles, Contact, Footer
  pages/index.astro       # composes the sections
  styles/global.css       # design tokens + base styles
public/                   # CNAME, logos, favicons, OG image
brand/                    # LinkedIn assets and raster logos (not deployed)
docs/superpowers/specs/   # design specs
```

## Design system

- **Surfaces:** `#0A0C0E` page, `#111418` raised, `#15181D` cards
- **Brand:** Steel Gray `#2D2F33` heritage, Tech Blue `#3A8DFF` accent
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels)

Full rationale in [docs/superpowers/specs/2026-06-11-website-redesign-design.md](docs/superpowers/specs/2026-06-11-website-redesign-design.md).

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages. The custom domain is set by `public/CNAME`.

> **One-time setup:** in the repository settings, set **Pages → Source** to
> **GitHub Actions** (the site previously deployed straight from the branch).

## Contact

**Email:** contact@siliconsteelsoftware.com
**LinkedIn:** [Silicon Steel Software](https://www.linkedin.com/company/silicon-steel-software)

---

© 2026 Silicon Steel Software. All rights reserved.
