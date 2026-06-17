# Changelog

Revision history for the site build. Newest first. Each revision states what
changed and any deviations from the spec files (00-04) so they stay auditable.

## Revision 9 — 2026-06-17 — Add headshot to the homepage hero

Owner wanted the headshot next to the hero intro/metrics, not just on the
social card. Went through several rounds of owner feedback: (1) first crop
was too tight on the face, (2) bottom edge needed to line up with the
metrics row beneath the hero buttons, (3) the wider crop still clipped both
shoulders and the border around the photo (and the social card's) wasn't
visible, (4) even after widening, arms were still getting cut off both in
the hero and on the social card, and the hero photo read as too small.

### Added
- `assets/headshot-hero.jpg` (1200x1528, ~125KB) — wide crop showing full
  shoulders, hands, and watch with the excess sky/headroom trimmed,
  cropped and lightly toned from `headshot-lean-smile.jpg` via `sharp`.
  Re-cropped four times across this revision to get the framing right.

### Changed
- `index.html` — hero section now wraps the existing label/h1/subline/
  actions/metrics in a `.hero-content` div, with `.hero-photo`
  (`headshot-hero.jpg`) as a sibling.
- `css/style.css` — `.hero-inner` is a column flex on mobile (photo stacks
  above the intro text) and switches to `flex-direction: row-reverse` at
  >=768px, putting the photo on the right, top-aligned with `.hero-content`
  (`align-items: flex-start`). Photo is sized by width only (260px mobile,
  440px desktop) with height left auto, so it always renders at its full
  natural crop — no `object-fit: cover` cropping the sides. Border changed
  from `1px solid var(--border)` (#232c36 against a #0a0e12 page
  background — too low-contrast to read as an outline, especially against
  the bright sky in the photo) to `2px solid var(--accent)` (the site's
  teal), which reads clearly against both the dark page and the photo.
- `assets/social-card.jpg` (Revision 8's asset) — re-cropped its embedded
  portrait from the same `headshot-hero.jpg` source and widened its photo
  panel (348px -> 391px) to match that source's aspect ratio so the arms
  aren't cropped there either. Frame stroke changed from
  `stroke-opacity="0.5" stroke-width="2"` to full-opacity `stroke-width="4"`
  since the original was too faint to register as a border, particularly
  once re-encoded as JPEG.

### Deviations from spec
5. **Hero photo is sized by width with `height: auto`, not a fixed
   `aspect-ratio` or a flex-`stretch`-matched height.** Two earlier
   attempts (a fixed 3:4 `aspect-ratio`, then `align-items: stretch` to
   match the content column's height exactly) both relied on
   `object-fit: cover` to fill a box narrower than the photo's natural
   aspect ratio, which cropped the owner's shoulders/arms out of frame.
   Owner explicitly asked to drop the height-matching trick in favor of
   showing the photo at its original aspect ratio, even though that means
   the photo's bottom edge no longer lines up exactly with the metrics row
   from Revision 9's first pass.

### Follow-up: elbow crop, wider display, metrics row layout
Owner's right elbow was still clipped (the source crop's right bound sat
right at ~92% of the original photo's width, and the elbow leaning on the
railing extends to ~92.5%). Re-cropped `headshot-hero.jpg` once more with
more margin on the right (and a touch on the left), and reused that same
source for the social card. Owner also asked to widen both displays
further and to pull the hero metrics out into their own full-width row.

- `assets/headshot-hero.jpg` re-cropped again (now 1200x1428) with the
  right bound moved out so the elbow has clearance.
- `css/style.css` — `.hero-photo` width increased again: 260px -> 300px
  (mobile), 440px -> 500px (desktop).
- `assets/social-card.jpg` photo panel widened 391px -> 422px (matching
  the re-cropped source's aspect ratio almost exactly, so it's no longer
  cropping the elbow either).
- `index.html` / `css/style.css` — `.hero-metrics` moved out of
  `.hero-content` to be a direct child of the hero `.container`, as a
  sibling after `.hero-inner` (the photo + text row), instead of being the
  last stacked item inside the text column. It now spans the same
  container boundaries as everything else in the hero, full width, so its
  three metrics lay out in a single row with room to spare (previously
  the text column had been squeezed by the wider photo, which was forcing
  the metrics to wrap one-per-row instead of sitting side by side).
  `margin-top: 56px` moved from `.hero-actions` (margin-bottom) to
  `.hero-metrics` so the gap above the metrics row holds regardless of
  whether the photo or the text column is taller.

### Follow-up 2: website still cropped, metrics not centered
Owner confirmed the social card now looked right, but the website hero
photo was still "slightly cropped in the width" and the metrics row read
as left-justified rather than centered.

The cropping wasn't the source image this time — at the `min-width: 768px`
breakpoint, `560px` photo + `64px` gap left very little room for
`.hero-content` (as little as ~108px at exactly 768px viewport width,
container padding included), enough to risk the text/buttons overflowing
into the photo's box. Two changes:
- `assets/headshot-hero.jpg` re-cropped a third time with extra margin on
  both sides (now 1200x1406) — belt-and-suspenders in case it was still
  the source.
- `css/style.css` — the row-layout breakpoint moved from `768px` to
  `1024px`, so the two-column layout only activates once there's
  consistently enough width for both the photo and a readable text column;
  below that it stays the single stacked column. `.hero-photo` widened
  again: 300px -> 340px (mobile/tablet), 500px -> 560px (desktop).

For the metrics: `.hero-metrics` only had `flex-wrap: wrap` with no
`justify-content`, so the three items packed against the left edge (the
default `flex-start`) inside their now full-width row. Added
`justify-content: center`.

`assets/social-card.jpg` was left untouched this round — owner confirmed
it already looked right, and the new hero crop is only marginally wider
than what the card already uses, not worth the regression risk.

### Follow-up 3: headline wrapping oddly, photo widening was the wrong lever
Owner pointed out the real fix for the elbow crop should have been the
source image margin (already fixed in Follow-up 2), not growing the
display size — widening `.hero-photo` to 560px squeezed `.hero-content` at
the `1024px` breakpoint enough that the h1 ("Mechanical engineer building
hardware...") wrapped awkwardly.

- `css/style.css` — `.hero-photo` reverted past Follow-up 2's bump and
  shrunk further: 340px -> 280px (mobile/tablet), 560px -> 460px (desktop).
  Breakpoint stayed at `1024px`, which is unrelated to the sizing and still
  the right guard against the text/photo squeeze from Follow-up 2.
- `.hero h1` gained its own `font-size` override (`clamp(2rem, 4.2vw,
  3rem)`, down from the global `h1` rule's `clamp(2.2rem, 5vw, 3.5rem)`),
  scoped to `.hero h1` specifically rather than touching the shared `h1`
  rule, so project-page titles aren't affected.
- No image re-crop this round — `assets/headshot-hero.jpg` from Follow-up
  2 already cleared the elbow with margin to spare; the wrapping issue was
  purely a CSS sizing problem.

### Follow-up 4: elbow touching the border outline
Despite clearing the elbow, the crop from Follow-up 2/3 had almost no
background margin past it on the right (the crop's right bound sat right
at the elbow with very little to spare), so against the photo's border it
read as the elbow touching/crossing the outline rather than sitting
clearly inside the frame. Owner correctly flagged this as a crop-width
issue, not a CSS or asset-resolution one — the source photo has plenty of
untouched resolution to work with.

- `assets/headshot-hero.jpg` re-cropped (now 1200x1492): trimmed the
  mostly-empty window-frame strip on the left (which was adding width
  without adding anything useful) and pulled the right bound in a little.
  Net effect: a narrower crop where the elbow now sits with clear
  background margin before the edge on both sides, instead of being
  flush against it — same `.hero-photo` CSS widths as Follow-up 3,
  unchanged.

## Revision 8 — 2026-06-17 — Fix iOS social-preview placeholder, add dedicated social card

Owner reported the homepage link preview rendered as a placeholder icon on
iOS. Root cause: `og:image` had no explicit width/height/type hints, which
iOS's LinkPresentation framework needs to confirm an image is safe to render
before it falls back to a placeholder graphic.

### Added
- `assets/headshot-lean-smile.jpg` — owner-provided headshot (4000x6000,
  Canon EOS M50m2), checked in as the source photo for the social card and
  future hero use.
- `assets/social-card.jpg` (1200x630, ~50KB) — a dedicated social-preview
  image built from the site's own design tokens (Space Grotesk / JetBrains
  Mono, dark navy + teal palette) instead of reusing a project screenshot.
  Right side carries a cropped, color-matched portrait from
  `headshot-lean-smile.jpg` in a rounded, teal-bordered frame. Composed as
  an SVG (headshot embedded as a base64 data URI after cropping/toning with
  `sharp`) and rasterized with `sharp-cli`; the source SVG is not checked
  into the repo. Saved as JPEG rather than PNG since it carries real photo
  content — same visual at roughly 1/6th the file size.

### Changed
- `index.html` — `og:image` now points at `assets/social-card.jpg`; added
  `og:image:width`, `og:image:height`, `og:image:type`, `og:url`, and
  `twitter:card` / `twitter:title` / `twitter:description` / `twitter:image`
  tags.
- `projects/neurogrip.html`, `projects/stridesync.html` — kept their
  existing project-screenshot `og:image` (so sharing a project page
  previews that project), but added the same width/height/type/`og:url`/
  twitter tags, which were missing on both.

### Not changed
- `assets/neurogrip/neurogrip-validation-test.png` (1.8MB) left uncompressed
  per owner instruction — it doubles as the in-page hero/carousel image for
  that project, and the repo is fine carrying it at full size. The new
  width/height/type metadata should resolve the iOS placeholder issue there
  too without re-encoding it.
- The homepage hero section itself (`index.html` `.hero`) was not touched —
  owner asked for the headshot on the social card only this round, not in
  the on-page hero layout.

## Revision 7 — 2026-06-17 — Wire up real assets, add Portfolio PDF link

Owner provided the real resume PDF, a new portfolio PDF, and real project
photos/diagrams (replacing all placeholder images), with the carousel order
for each project specified in `claude_context/portfolio_context.md`.

### Added
- Contact section in `index.html` now has a "Portfolio PDF" button next to
  Resume, linking to `assets/Noah_Thomas_Portfolio.pdf`.

### Changed
- `projects/neurogrip.html` — carousel figures now point at the real
  `neurogrip-validation-test.png`, `neurogrip-circuit-wiring.png`,
  `neurogrip-cad.png` (in that order), with real `width`/`height` and
  matching `og:image`.
- `projects/stridesync.html` — carousel now has four real images
  (`stridesync-dash-3d.png`, `stridesync-inital-imu-circuit.png`,
  `stridesync-single-leg-architecture.png`,
  `stridesync-final-design-workflow.png`), counter updated to `1 / 4`.
- `index.html` — project-card thumbnails and the homepage `og:image` updated
  to the real first-in-carousel image for each project.
- `README.md` — replaced the "Images you still need to add" checklist (now
  satisfied) with a short guide on adding/reordering carousel images, and
  documented the Portfolio PDF asset.
- `claude_context/02-CONTENT.md`, `claude_context/portfolio_context.md` —
  image lists updated to the real filenames and carousel order; fixed a typo
  where Portfolio pointed at the Resume filename.

### Removed
- Tracked Windows `:Zone.Identifier` marker files that came in alongside the
  new assets (`assets/Noah_Thomas_Portfolio.pdf:Zone.Identifier` and three
  others). Added `*:Zone.Identifier` to `.gitignore` to stop them recurring.

## Revision 6 — 2026-06-17 — Add GitHub link to the footer

### Changed
- `index.html`, `projects/neurogrip.html`, `projects/stridesync.html` —
  footer line now ends with a "GitHub" link to
  https://github.com/noaht155, alongside the existing copyright line.
- `claude_context/02-CONTENT.md` — footer copy updated to match.

## Revision 5 — 2026-06-17 — Remove Project Inspire

Owner asked to drop Project Inspire (the Mondelez facility project) from the
site entirely, projects grid card, detail page, and its image assets.

### Removed
- `projects/inspire.html` and `assets/inspire/` (placeholder `layout.png`
  and `.gitkeep`).
- The Project Inspire card in `index.html`'s projects grid.

### Changed
- `projects/stridesync.html` — "Next project" card now points back to
  `neurogrip.html` instead of the deleted `inspire.html`, since the
  next-project cycle is now just NeuroGrip <-> StrideSync.
- `README.md`, `claude_context/00-PROJECT-OVERVIEW.md`,
  `claude_context/02-CONTENT.md`, `claude_context/03-PAGES.md`,
  `claude_context/04-DEPLOYMENT.md` — all Project Inspire references
  removed (site structure, content spec, page-layout spec, repo tree,
  image checklist). 03-PAGES.md's project-detail-page section also
  updated to describe the carousel component added in Revision 4, which
  it had not been updated to reflect at the time.

### Not changed
- The Experience timeline entry for the Mondelez co-op (`index.html`
  `#experience`) is untouched: it describes the co-op broadly and isn't
  branded as "Project Inspire," so it's out of scope for this removal.

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
- All previously-pending assets (resume, images) were provided in Revision 7.

### Verified
- All pages and assets return 200 over a local `python3 -m http.server`.
- All internal links/anchors resolve; every local path is relative.
- No em dashes in any served file (HTML, CSS, JS, SVG).
- Lighthouse and 375/768/1440 width checks deferred until real images and
  the resume PDF are in place (page weight and CLS depend on them).
