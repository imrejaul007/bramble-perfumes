# NUHOUD — Investor Deck

A React + Vite investor deck and founder story portal for NUHOUD, a natural perfumery house built on four generations of agarwood expertise.

**Live site:** https://bramble-perfumes.vercel.app

## What This Is

- **`/`** — Investor deck: 14-slide presentation covering the problem, competitive position, business model, unit economics, and five-year vision for a AED 3M strategic investment.
- **`/story`** — Story Portal: seven-chapter founder narrative (Shahid Ahmed, "Bu Nuh") covering the family's agarwood legacy. Content is persisted in browser localStorage and editable in-app.

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Tech Stack

| Package | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility CSS (design tokens in `tailwind.config.js`) |
| framer-motion 11 | Scroll-driven slide animations |
| react-router-dom 7 | Client-side routing (`/` and `/story`) |
| lucide-react | Icon library |

> **Note:** `recharts` and `react-icons` are listed as dependencies but are not currently used.

## Project Structure

```
src/
├── App.jsx          # Investor deck (14 slides)
├── StoryPortal.jsx  # Story portal (7 chapters, localStorage persistence)
├── main.jsx         # React entry point, router setup
└── index.css        # Global styles, CSS custom properties
```

## Deployment

Deployed automatically via Vercel on every push to `main`.

Vercel is pre-configured via `vercel.json`:
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- All routes rewrite to `/` for SPA routing

To deploy manually:

```bash
npm run build
# Drag the dist/ folder into vercel.com dashboard, or:
npx vercel --prod
```

## Design System

The brand uses an ivory cream × warm gold × charcoal palette. Typography is Playfair Display (headings) and Cormorant Garamond (body). Fonts are loaded from Google Fonts in `index.html`. Colors and tokens are defined in both `tailwind.config.js` and as inline styles throughout the components — these are kept in sync manually.

## Keyboard Navigation

- **Investor deck:** Arrow keys scroll between slides
- **Story portal:** Arrow keys navigate between chapters; `Escape` closes the chapter list

## Development Notes

- Story Portal content is saved to `localStorage` under the key `nuhoud-story`.
- The investor deck uses scroll-snap for slide transitions.
- `extract_chapters.mjs` is a one-off analysis script that reads `StoryPortal.jsx` and reports chapter statistics.
