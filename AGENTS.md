# AGENTS.md

Project overview for AI agents working on this codebase.

## Project Overview

Single-page marketing website for **Queule Ambiental**, a waste management company in Santiago, Chile. The entire site lives in one route (`src/routes/index.tsx`) with all styles in `src/styles.css`.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx       # Root layout: loads Google Fonts, sets page title/meta, lang="es"
    index.tsx        # Entire marketing site: nav, hero, pricing, proceso, beneficios,
                     # valores, cobertura, contacto, footer + scroll-reveal useEffect
    products/
      $productId.tsx # Unused product detail route from original template scaffold
  data/
    products.ts      # Unused product catalog from original template scaffold
  styles.css         # All CSS: Tailwind import + full custom CSS for the site
  router.tsx         # TanStack Router setup
netlify.toml         # Build config: vite build → dist/client, dev port 8888
```

## Key Decisions

- **Single-page architecture:** All content is in `src/routes/index.tsx`. No sub-routes needed for a one-page marketing site.
- **CSS approach:** Custom CSS properties (CSS variables) are used for the brand color palette (`--verde-oscuro`, `--verde-acento`, etc.). Tailwind is imported but the site predominantly uses handcrafted CSS classes defined in `styles.css` to preserve original design fidelity.
- **Scroll reveal:** Implemented via `IntersectionObserver` in a `useEffect` inside the `Home` component. Elements with class `reveal` animate in when they enter the viewport.
- **Google Fonts:** Loaded via `<link>` tags in the `head()` of `__root.tsx` (`Bebas Neue` for headings, `Nunito` for body text).
- **Language:** The HTML `lang` attribute is set to `"es"` in `__root.tsx` since the site is entirely in Spanish.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Start via Netlify CLI (port 8888, recommended)
npm run build    # Production build
```

## Conventions

- TypeScript strict mode; use `type` imports where possible
- Import paths use `@/` alias for `src/*`
- No component library — all UI is custom CSS classes
- CSS class names use kebab-case matching the original HTML design
