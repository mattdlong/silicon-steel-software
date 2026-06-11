# Silicon Steel Software — Website Reimagining (Astro)

**Date:** 2026-06-11
**Status:** Approved (full decision authority delegated)

## Goal

Replace the current plain HTML/CSS/JS single-page site with a bold, present-day
tier-1 AI consultancy website built in Astro. The site should read like a
company that builds with frontier AI every day — confident, concrete, and
technically credible — not a generic "digital transformation" brochure.

## Constraints

- Static output, hosted on GitHub Pages at `siliconsteelsoftware.com` (CNAME preserved).
- Brand assets retained: SSS logos (dark/light SVG), favicons, Steel Gray
  `#2D2F33`, Silicon White `#FAFAFA`, Tech Blue `#3A8DFF`.
- No backend: contact is email-first (no fake form submission).
- No fabricated client metrics or logos. Credibility comes from specificity of
  capability, not invented numbers.

## Approaches considered

1. **Light-theme refresh of the existing layout** — lowest risk, but reads as a
   2019 consultancy template; fails the "boldly tier-1 present-day" brief.
2. **Dark, typography-led single page (chosen)** — near-black steel surfaces,
   Tech Blue as the single accent, oversized display type, mono-font technical
   labels, subtle motion. The aesthetic of Anthropic/Linear/Vercel, in brand
   colors. One page keeps the message tight and ships clean.
3. **Multi-page marketing site (services/case-studies/blog)** — premature
   without real case-study content; adds nav surface with nothing behind it.
   YAGNI.

> **Revision 2026-06-11:** the dark neon execution was rejected as generic
> "AI slop." Redirected to a light editorial system: Silicon White paper
> surfaces, steel ink, display serif (Newsreader) headlines, hairline rules,
> mono numerals, no icons/gradients/glows. Steel-dark CTAs; Tech Blue demoted
> to links only. The sections and copy remain as specified below.

## Design system

- **Surfaces:** `#0A0C0E` page, `#111418` raised, `#16191E` cards;
  borders `rgba(255,255,255,0.08)`.
- **Text:** `#F5F7FA` headings, `#A8B0BA` body, Tech Blue `#3A8DFF` accent
  (with a `#6FB0FF` hover/light variant for contrast on dark).
- **Type:** Space Grotesk (display/headings), Inter (body),
  JetBrains Mono (eyebrow labels, technical accents). Self-evident hierarchy:
  clamp()-scaled display sizes up to ~6rem.
- **Motion:** scroll-reveal (IntersectionObserver), subtle hero grid/glow,
  150–300ms transitions, `prefers-reduced-motion` respected.
- **Light logo variant** used throughout (dark site).

## Architecture

Astro 5 static site, zero client frameworks (one small vanilla script for nav +
reveal). Deployed by GitHub Actions (`withastro/action`) to GitHub Pages.

```
src/
  layouts/Base.astro        # head, fonts, meta, OG tags, global CSS
  components/
    Nav.astro Hero.astro Services.astro Approach.astro
    Principles.astro Contact.astro Footer.astro
  pages/index.astro         # composes sections
  styles/global.css         # tokens + base styles
public/                     # CNAME, logos, favicons, og image
.github/workflows/deploy.yml
```

## Content plan (sections)

1. **Nav** — logo, anchor links, "Talk to us" CTA.
2. **Hero** — eyebrow: `AI-native consultancy`; headline on the theme of
   "We build the systems that build your advantage" / shipping production AI;
   subhead naming the real work (agents, LLM systems, evals); dual CTA.
3. **Capabilities** (replaces "Services") — six concrete offerings:
   Agentic Systems, LLM & GenAI Engineering, AI Strategy & Roadmap,
   Data & ML Platforms, AI Enablement, AI Governance & Evals.
4. **Approach** — four steps reframed for AI delivery speed:
   Assess → Prototype → Ship → Scale, "weeks, not quarters".
5. **Principles** (replaces fabricated stats) — how we work: senior-only,
   production-first, measurable evals, knowledge transfer.
6. **Contact** — direct email CTA (`contact@siliconsteelsoftware.com`) +
   LinkedIn; honest mailto form-free design.
7. **Footer** — logo, LinkedIn, copyright 2026.

## Error handling / a11y / perf

- Semantic landmarks, skip link, visible focus rings, 4.5:1 contrast,
  44px touch targets, aria-labels on icon links.
- Fonts via Google Fonts with `display=swap` and preconnect; all else local.
- Lighthouse-class perf: static HTML, one small JS file, SVG assets.

## Testing / verification

- `astro build` must pass clean; `astro check` for component errors.
- Manual viewport pass at 375 / 768 / 1024 / 1440 via local preview.

## Deployment notes

- `.github/workflows/deploy.yml` builds and deploys on push to `main`.
- GitHub Pages source must be switched from "branch" to "GitHub Actions"
  (one-time repo settings change).
- `public/CNAME` keeps the custom domain.
