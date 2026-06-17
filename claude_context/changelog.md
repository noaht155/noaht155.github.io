# Changelog

Revision history for the site build. Newest first. Each revision states what
changed and any deviations from the spec files (00-04) so they stay auditable.

## Revision 4 — 2026-06-17 — Mirror portfolio_context.md's section structure

Revision 3 added "The Call That Mattered" and "Next" content but folded it
into the existing Goals/Methods/Results naming instead of actually mirroring
`portfolio_context.md`'s own section structure: Goal, Build, The Call That
Mattered, Result (or Progress), Next, Repo, Skills. This revision fixes that.

### Changed
- `projects/neurogrip.html` — renamed "Goals" -> "Goal", "Methods" -> "Build",
  "Results" -> "Result" (section labels and h2s). Added a "Repo" section
  (link to https://github.com/noaht155/project_neurogrip) and a "Skills"
  section (SolidWorks, C++, Arduino, Electromyography, Bambu Studio, 3MF,
  DFM), both new, placed after "Next" and before the image gallery.
- `projects/stridesync.html` — same Goal/Build rename; "Status" renamed to
  "Progress" to match the source doc's exact header for this project (it
  uses "Result" for NeuroGrip but "Progress" for StrideSync, since the
  build is still ongoing). Added "Repo"
  (https://github.com/noaht155/project_stridesync) and "Skills" (C++,
  PlatformIO, GitHub, Python, ESP32, Soldering, SolidWorks, 3MF) sections.
- `projects/inspire.html` — renamed "Goals" -> "Goal", "Methods" -> "Build",
  "Results" -> "Result" for consistency. No Repo or Skills section added:
  Inspire is a Mondelez work project with no personal repo and no entry in
  `portfolio_context.md`, so there is no source data for those sections.
- `claude_context/02-CONTENT.md`, `03-PAGES.md` — rewritten to document the
  7-section structure (Goal / Build / The Call That Mattered / Result-or-
  Progress / Next / Repo / Skills) and Inspire's 3-section exception.

### Not touched
- No image or asset files were modified.

## Revision 3 — 2026-06-17 — Project copy refresh from portfolio_context.md

Owner supplied `claude_context/portfolio_context.md`, a richer source of
project detail than 02-CONTENT had captured (servo mechanics, the EMG
noise-rejection approach, the Mahony filter rationale, true sensor counts,
and concrete next steps for both flagship projects). No images were touched.

### Changed
- `projects/neurogrip.html` — Methods now states the continuous-rotation
  servo / antagonistic tendon drive mechanism and the rolling-average EMG
  noise rejection. Added a new "The Call That Mattered" section (the two
  calls that kept the build low-cost: noise rejection, continuous-rotation
  servos) and a "Next" section (wrist/lateral actuation, PCB consolidation,
  current sensing or stepper motors). Results reworded to match the source
  doc's exact trial definition. Servo metric caption now says
  "continuous-rotation MG90D servos".
- `projects/stridesync.html` — Methods corrected to 6 IMUs + FSRs (not a
  flat "6 sensor nodes": 3 IMUs per leg x 2 legs, plus FSRs). Added "The Call
  That Mattered" (Mahony vs. raw integration vs. Kalman, with the actual
  mechanism: gravity-vector correction + integral bias removal). Status
  corrected to reflect what is actually verified (dashboard verified against
  a *generated* test file, not live Garmin validation) instead of implying
  in-progress live validation. Added a "Next" section (perfboard fabrication,
  enclosures, mounting, real test run). Sensor metric corrected from `6` to
  `8` (6 IMUs + 2 FSRs).
- `index.html` — StrideSync project card metric updated from
  "6 sensor nodes" to "8 IMUs + FSRs" to match the correction above.
- `claude_context/02-CONTENT.md` and `03-PAGES.md` — updated as the source
  of truth to match the new detail-page section structure (Goals / Methods /
  The Call That Mattered / Results-or-Status / Next) and corrected metrics.

### Deviations from spec
4. **Detail pages gained two sections not in the original 03-PAGES spec**
   ("The Call That Mattered", "Next"). The new source material was too
   strong and too specific to compress into the existing Methods/Results
   sections without losing the reasoning that makes these projects
   compelling to a technical reader. 03-PAGES.md updated to match.

### Not touched
- No image or asset files were modified, per owner instruction (images to
  be implemented separately).

## Revision 2 — 2026-06-12 — Placeholder images + favicon.ico

Cause analysis of the 404s seen when serving locally: (1) the seven
owner-provided images did not exist yet, (2) browsers probe `/favicon.ico`
by convention even when pages declare an SVG icon, (3) the `BrokenPipeError`
traceback from `http.server` is harmless noise: the browser closed the
connection before the 404 body finished sending.

### Added
- Labeled placeholder images (1600x900, dark theme, "PLACEHOLDER /
  <filename> / REPLACE WITH REAL IMAGE") at all seven spec'd asset paths,
  ~7.5 KB each. Generated in pure Python (no PIL/ImageMagick available);
  generator kept outside the repo as a one-off.
- `favicon.ico` at the repo root (32x32 "NT" monogram, PNG-in-ICO) to
  satisfy the default browser probe.
- README note that placeholders must be replaced before launch.

### Caveat
- Placeholder files at `.jpg` paths contain PNG data. Browsers content-sniff
  images so they render fine, but they are temporary by design; the owner's
  real exports should be genuine JPEGs.

### Verified
- All previously-404 paths (7 images + `/favicon.ico`) now return 200 over
  a local `python3 -m http.server`; placeholder pixels decoded and checked
  against the design tokens.

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
