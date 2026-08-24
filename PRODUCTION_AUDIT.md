# Production Readiness Audit — NUHOUD Investor Deck

> Audited: August 2026 | Stack: Vite + React 18 + Tailwind CSS + Framer Motion | Deploy target: Vercel

---

## Executive Summary

The project is in **functional but pre-production state**. The core presentation works — it builds, renders, and the 14-slide deck plus Story Portal are navigable. But 9 categories of gaps stand between this and a polished, defensible production deployment, especially for a confidential investor-facing property.

| Category | Severity | Status |
|---|---|---|
| Security & Privacy | 🔴 Critical | Needs immediate action |
| Runtime Errors | 🔴 Critical | 3 bugs found |
| Performance | 🟠 High | Bundle too large, no lazy loading |
| SEO / Sharing | 🟠 High | No OG tags, no sitemap |
| Deployment Config | 🟡 Medium | Missing cache headers, CI/CD |
| Accessibility | 🟡 Medium | Keyboard nav missing, no ARIA |
| Error Boundaries | 🟡 Medium | None defined |
| Monitoring | 🔵 Low | No error tracking |
| Testing | 🔵 Low | No test suite |

---

## 🔴 Critical — Security & Privacy

### 1. Story Data Is Publicly Visible in Source

**File:** [src/StoryPortal.jsx](src/StoryPortal.jsx)

The full story text (~2,800 lines of original content) is hardcoded directly in the source bundle. Anyone who opens DevTools → Sources can read the entire story. For a confidential investor deck, this is a meaningful exposure.

**Fix options (pick one):**
- **Best for production:** fetch story chapters from a JSON file at build time and serve as a static asset. The content lives server-side, not in JS bundles.
- **Minimum fix:** keep the data client-side but accept the visibility risk and add a short `console.warn` about confidentiality.

### 2. Missing `<meta name="robots" content="noindex">`

**File:** [index.html](index.html)

Every page should opt out of indexing for a private investor deck. Without this, search engines may crawl and cache the content.

```html
<meta name="robots" content="noindex, nofollow" />
```

### 3. Google Fonts CDN

**File:** [index.html:9](index.html#L9)

Google Fonts logs requests. For a confidential investor deck, this is a minor but real data leak. Fonts load from `fonts.googleapis.com` and `fonts.gstatic.com` on every visit.

**Fix:** Self-host the 3 font files (Playfair Display, Cormorant Garamond, Inter) in `/public/fonts/` and load them via `@font-face` in [src/index.css](src/index.css). Use `fontsource` npm packages (`@fontsource/playfair-display`, etc.) for cleaner management.

---

## 🔴 Critical — Runtime Bugs

### 4. `contentRef` Is Declared but Never Defined

**File:** [src/StoryPortal.jsx:3424](src/StoryPortal.jsx#L3424)

```jsx
// Line 3424 — ref is used but never created:
<div ref={contentRef} ...>
```

`useRef()` is never called to create `contentRef`. This will throw a `ReferenceError` in strict mode.

**Fix:** Remove the unused ref, or define it:
```jsx
const contentRef = useRef(null)
```

### 5. `Edit3` and `X` Icons Used Without Imports

**File:** [src/StoryPortal.jsx](src/StoryPortal.jsx)

`Edit3` and `X` from `lucide-react` appear in the JSX (header edit button, sidebar close button) but are missing from the import statement at line 3.

```jsx
// Current import:
import { ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react'

// Should include:
import { ChevronLeft, ChevronRight, BookOpen, List, X, Edit3 } from 'lucide-react'
```

### 6. `slug` Prop Passed to Undefined Component

**File:** [src/App.jsx:53-77](src/App.jsx#L53-L77)

The nav button on line 73 passes `scrollTo(SLIDES.length - 1)` — but `SLIDES.length - 1` is index 13, which is `{ id: 'close', label: '' }`. This navigates to the closing slide correctly, but the intent may have been a separate contact section.

Verify this is the intended behavior, or add a dedicated `#contact` section.

---

## 🟠 High — Performance

### 7. 429KB JS Bundle with No Code Splitting

The production bundle is 429KB (134KB gzipped). The entire app loads on first visit, including the Story Portal's ~2,800-line content.

**Fix:** Enable lazy loading for the Story Portal route:

```jsx
// src/main.jsx
import { lazy, Suspense } from 'react'
const StoryPortal = lazy(() => import('./StoryPortal.jsx'))

<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
  <Route path="/story" element={<StoryPortal />} />
</Suspense>
```

This defers ~280KB of story content until the user navigates to `/story`.

### 8. Unused Dependency: `react-icons`

**File:** [package.json:17](package.json#L17)

`react-icons` is listed in `dependencies` but is never imported or used anywhere in the codebase. It adds bundle size and a maintenance dependency. Remove it.

```bash
npm uninstall react-icons
```

### 9. Missing Asset Compression

The build output (`dist/`) is served without pre-compression headers on Vercel. Add a `vercel.json` adjustment to ensure `Content-Encoding: gzip` is set for all static assets. Vercel does this automatically for most assets, but verify the config.

### 10. No Image Optimization Strategy

No images currently, but the 14-slide deck will likely include product photography. When adding images:
- Use WebP format, sized to display size (not raw)
- Lazy-load below-fold images
- Consider a CDN or Vercel's built-in image optimization

---

## 🟠 High — SEO & Sharing

### 11. No Open Graph / Twitter Meta Tags

**File:** [index.html](index.html)

When someone shares the link, there's no title, description, or preview image. Add to `<head>`:

```html
<meta property="og:title" content="NUHOUD — Building the World's Leading Natural Perfumery House" />
<meta property="og:description" content="Strategic investment proposal. Private & Confidential." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### 12. No Sitemap or robots.txt

Add to `/public/`:
- `robots.txt` — `User-agent: * Disallow: /`
- `sitemap.xml` (optional, can wait until public launch)

### 13. Story Portal Route Has No SEO Identity

The `/story` route inherits the root page's title. It should have its own dynamic title.

**Fix:** Add a `<Helmet>` component per route:
```bash
npm install react-helmet-async
```

---

## 🟡 Medium — Deployment Config

### 14. Missing Cache Headers in Vercel Config

**File:** [vercel.json](vercel.json)

Static assets should have long cache TTLs. Add headers:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 15. No CI/CD Pipeline

No GitHub Actions or similar for:
- Running `npm run build` on every push
- Linting checks (ESLint)
- Automated deployment on merge to `main`

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on: [push]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with: { vercel-token: ${{ secrets.VERCEL_TOKEN }} }
```

### 16. Source Maps in Production Build

The build output includes source map references. For a private investor deck, consider disabling:

```js
// vite.config.js
export default defineConfig({
  build: {
    sourcemap: false,  // disable in production
  },
})
```

---

## 🟡 Medium — Accessibility

### 17. Keyboard Navigation Is Partial

The deck uses arrow keys (`←` `→` `↑` `↓`) for slide navigation, but:
- No focus indicators on buttons and navigation dots
- The `SLIDES.map()` nav dots are `div` elements, not semantic buttons
- No skip-to-content link

**Fixes:**
- Add `tabIndex={0}` and `onKeyDown` to custom nav elements
- Replace `<div>` dots with `<button>` elements with `aria-label`
- Add a visually hidden "Skip to content" link at the top of the body

### 18. Missing ARIA Labels

**File:** [src/App.jsx](src/App.jsx)

The nav dots, contact button, and story navigation lack `aria-label` or `aria-current` for screen readers.

```jsx
<button
  aria-label={`Go to slide: ${s.label}`}
  aria-current={slide === i ? 'true' : undefined}
>
```

### 19. Color Contrast

The `#FFFDF7` cream background with `#9A8A78` body text may not pass WCAG AA (4.5:1 minimum). Verify with Chrome DevTools Lighthouse accessibility audit and adjust if needed.

---

## 🟡 Medium — Error Handling

### 20. No React Error Boundary

If either `App` or `StoryPortal` throws an error during render, the entire React tree unmounts and shows a blank screen. Add a generic error boundary.

**Create `src/components/ErrorBoundary.jsx`:**
```jsx
import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center"
          style={{ background: '#FFFDF7', color: '#2A2018' }}>
          <div className="text-center space-y-4">
            <AlertTriangle size={48} style={{ color: '#9A7235', margin: '0 auto' }} />
            <h1 className="font-serif text-2xl">Something went wrong</h1>
            <p>Please refresh the page to continue.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
```

Wrap routes in [src/main.jsx](src/main.jsx).

---

## 🔵 Low — Monitoring

### 21. No Error Tracking

Consider adding Sentry for the build:

```bash
npm install @sentry/react
```

This captures client-side errors with stack traces — valuable for an investor deck where you won't have direct access to user environments.

### 22. No Analytics

For an investor deck, consider adding minimal, privacy-respecting analytics:
- **Plausible Analytics** (plausible.io) — GDPR-compliant, no cookies, self-hostable
- **Fathom** — similar

Avoid Google Analytics for a confidential deck.

---

## 🔵 Low — Testing

### 23. No Test Suite

The project has zero tests. For a production investor deck, add at minimum:
- **Playwright or Cypress** — smoke test that the page loads without console errors
- **Unit tests** for `scrollTo`, `nextChapter`, `prevChapter` navigation logic

```bash
npm install -D @playwright/test
npx playwright install
```

---

## 🟡 Medium — Cleanup Checklist

### 24. Package Name Is Wrong

**File:** [package.json:2](package.json#L2)

```json
"name": "bramble-perfumes-investor-deck"
```

This references an old company name. Change to:
```json
"name": "nuhoud-investor-deck"
```

### 25. Missing Favicon

No favicon is defined. Add to [index.html](index.html):

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

Create `/public/favicon.svg` with a simple brand mark (e.g., the "N" in Playfair Display style).

### 26. Missing Manifest for PWA (Optional)

If this will be accessed on mobile, add a `manifest.json` for installability.

### 27. Unused Tailwind Custom Properties

`tailwind.config.js` defines many colors (gold, cream, charcoal in 50–900 variants) that are never used in components. Components use inline `style={{ color: '#9A7235' }}` patterns instead. 

**Decision:** Either adopt the Tailwind tokens throughout (`text-gold-500`) or remove the unused config to reduce cognitive load. Currently there's inconsistency.

---

## Recommended Implementation Order

```
Priority 1 (Do today):
  1. Fix the 3 runtime bugs (contentRef, Edit3/X imports, noindex meta)
  2. Add robots noindex to index.html
  3. Self-host fonts (privacy)
  4. Fix vercel.json cache headers

Priority 2 (Before first investor share):
  5. Lazy load Story Portal route
  6. Add OG meta tags
  7. Add Error Boundary
  8. Fix keyboard nav + ARIA
  9. Fix source maps off

Priority 3 (Polish for production):
  10. Set up Sentry error tracking
  11. Add Playwright smoke test
  12. Set up CI/CD with GitHub Actions
  13. Clean up unused dependencies + Tailwind config
  14. Add favicon + manifest
```

---

## Appendix: Quick Verification Commands

```bash
# Verify build still works
npm run build

# Check for unused dependencies
npx depcruise src --include 'node_modules/^(react|react-dom)$' 2>/dev/null || echo "install depcruise"

# Test keyboard nav
npm run preview
# → Open devtools, use arrow keys to navigate slides

# Accessibility audit
npx lighthouse http://localhost:4173 --only-categories=accessibility
```
