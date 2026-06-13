# Changelog

Revision history for the site build. Newest first. Each revision states what
changed and any deviations from the spec files (00-04) so they stay auditable.

## Revision 1 — 2026-06-12 — Initial build

Built the complete v1 site from the spec files (00 through 04).

### Added
- `index.html` — single-page scroll per 03-PAGES: hero (label, h1 tagline,
  subline, View projects / Resume buttons, 3-item metrics strip, radial accent
  glow), projects grid (NeuroGrip + StrideSync 2-up, Project Inspire
  full-width beneath), experience timeline (2 entries + education line),
  4 grouped skill tag grids, contact section, footer.
- `projects/neurogrip.html`, `projects/stridesync.html`,
  `projects/inspire.html` — shared detail template: nav back to index
  sections, `// PROJECTS / <NAME>` breadcrumb, h1 + one-liner, tech tags,
  metric row, hero image, Goals/Methods/Results sections (StrideSync uses
  Goals/Methods/Status with the "In active development" accent pill badge),
  image gallery, "Next project" card cycling
  NeuroGrip → StrideSync → Inspire → NeuroGrip.
- `css/style.css` — full design system from 01-DESIGN-SYSTEM: color tokens,
  Space Grotesk / Inter / JetBrains Mono, `//` section labels, 1px borders,
  no shadows, project card hover (accent border, -2px lift, 150ms), timeline
  with accent dots, button styles, 1100px max width, responsive at
  375/768/1440.
- `js/main.js` — mobile overlay nav + IntersectionObserver fade-ins only.
  Adds a `js` class to `<html>` so all JS-dependent styling is opt-in: with
  JS disabled the nav links wrap in the header and all content is visible
  (JS is enhancement only, per 00). `prefers-reduced-motion` disables motion.
- `assets/favicon.svg` — "NT" monogram, teal on dark, per 04.
- `404.html` — styled not-found page linking back home (GitHub Pages
  auto-serves it).
- `assets/neurogrip/`, `assets/stridesync/`, `assets/inspire/` directories
  (with `.gitkeep`) ready for the owner's images.
- `README.md` — rewritten with edit instructions, resume/deploy steps, the
  exact image paths still needed, GitHub Pages setup, and the pre-launch
  checklist, per 04-DEPLOYMENT.
- Per-page `<title>`, meta description, and Open Graph tags; skip link;
  all asset/page links relative so the site works at root or under a subpath.

### Deviations from spec
1. **`--text-2` lightened from `#5d6b7a` to `#6e7d8d`.** The spec value is
   3.5:1 contrast on `--bg-0`, which fails WCAG AA for small text and would
   block the Lighthouse accessibility-100 requirement in 00's definition of
   done. `#6e7d8d` is 4.6:1 and visually near-identical. Commented in
   `css/style.css`.
2. **Page titles use a pipe instead of an em dash** (e.g.
   "NeuroGrip | Noah Thomas, Mechanical Engineer"). 04's example title
   contained an em dash, but 02/03 ban em dashes anywhere on the site; the
   ban was given priority.
3. **`og:image` URLs are absolute**, assuming the final URL
   `https://noaht155.github.io/`. Scrapers need absolute URLs; README notes
   to update them if the site is served under a subpath.

### Still owner-provided (not blocking, slots are wired up)
- `assets/Noah_Thomas_Resume.pdf`
- 7 images: `neurogrip/hero.jpg`, `neurogrip/cad.jpg`,
  `neurogrip/assembly.jpg`, `stridesync/architecture.png`,
  `stridesync/breadboard.jpg`, `stridesync/dashboard.png`,
  `inspire/layout.png`

### Verified
- All pages and assets return 200 over a local `python3 -m http.server`.
- All internal links/anchors resolve; every local path is relative.
- No em dashes in any served file (HTML, CSS, JS, SVG).
- Lighthouse and 375/768/1440 width checks deferred until real images and
  the resume PDF are in place (page weight and CLS depend on them).
