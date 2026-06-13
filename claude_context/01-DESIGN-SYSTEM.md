# 01 — Design System

Dark technical engineering aesthetic with teal/cyan accents. Think oscilloscope,
datasheet, CAD viewport. Precise, restrained, zero startup-gradient noise.

## Colors (CSS custom properties on :root)
```css
--bg-0:        #0a0e12;   /* page background, near-black blue */
--bg-1:        #11161c;   /* cards, elevated surfaces */
--bg-2:        #1a2129;   /* hover states, code blocks */
--border:      #232c36;   /* hairline borders, 1px */
--text-0:      #e8edf2;   /* headings, primary text */
--text-1:      #9aa7b4;   /* body text */
--text-2:      #5d6b7a;   /* captions, labels, metadata */
--accent:      #2dd4bf;   /* teal — links, highlights, active states */
--accent-dim:  #14b8a6;   /* hover on accent elements */
--accent-glow: rgba(45, 212, 191, 0.08);  /* subtle section glows only */
```
Rules:
- Accent is for emphasis only: links, key metrics, section labels, hover states.
  If more than ~10% of a viewport is teal, it is too much.
- No gradients except a single radial `--accent-glow` behind the hero.
- Borders are 1px `--border`. No drop shadows; elevation = background step.

## Typography
- Headings + UI labels: **"Space Grotesk"** (Google Fonts), weights 500/700
- Body: **"Inter"**, weights 400/500
- Code/metrics/specs: **"JetBrains Mono"**, weight 400/700
- Scale: h1 clamp(2.2rem, 5vw, 3.5rem) / h2 1.75rem / h3 1.25rem / body 1rem,
  line-height 1.7 body, 1.15 headings
- Section labels: JetBrains Mono, 0.8rem, uppercase, letter-spacing 0.12em,
  color `--text-2`, prefixed with `//` (e.g. `// PROJECTS`) — this is the
  signature visual motif of the site.

## Components
### Nav
Fixed top, `--bg-0` at 90% opacity + backdrop-blur, 1px bottom border.
Left: "NT" wordmark in Space Grotesk 700. Right: Projects / Experience /
Skills / Contact + a Resume button (outlined, accent border). Mobile: hamburger
collapsing to full-screen overlay.

### Project card (index page)
`--bg-1` background, 1px border, 12px radius. Contents: 16:9 image, then
project name (h3), one-line description, tech tag row, and 1-2 headline
metrics in JetBrains Mono accent color (e.g. "0 / 30 misclassifications").
Hover: border becomes `--accent-dim`, translateY(-2px), 150ms ease.
Entire card is a link to the detail page.

### Tech tag
JetBrains Mono 0.75rem, `--bg-2` background, 1px border, 4px radius,
padding 2px 8px, color `--text-1`. Never colored backgrounds.

### Metric block (detail pages)
Large JetBrains Mono number in accent (e.g. "30"), small `--text-2` caption
under it ("validation trials"). Used in a 2-4 column row.

### Timeline entry (experience section)
Left column: date range in JetBrains Mono `--text-2`. Right: role (h3),
company + location line, 2-3 bullet points. Vertical 1px border line
connecting entries with a small accent dot per entry.

### Buttons
Primary: accent background, `--bg-0` text, 6px radius.
Secondary: transparent, 1px accent border, accent text.
Both: JetBrains Mono, 0.85rem, uppercase, letter-spacing 0.05em.

## Motion
- Sections fade-in + translateY(12px) on first scroll into view
  (IntersectionObserver, 0.4s ease-out, no re-trigger).
- `prefers-reduced-motion: reduce` disables all of it.
- Nothing else moves. No parallax, no typing effects, no particle nonsense.

## Layout
- Max content width 1100px, centered, 24px side padding mobile / 48px desktop.
- Section vertical rhythm: 96px desktop / 64px mobile between sections.
- Grid: project cards 2-up desktop, 1-up below 768px.
