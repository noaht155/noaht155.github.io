# Noah Thomas — Personal Portfolio

Static portfolio site. Plain HTML + CSS + a small vanilla JS file. No frameworks, no build step, no npm. Edit any file in a text editor and push to deploy.

## Structure

```
index.html              Main single-page site (hero, projects, experience, skills, contact)
projects/
  neurogrip.html        NeuroGrip detail page
  stridesync.html       StrideSync detail page
  inspire.html          Project Inspire detail page
css/style.css           The one shared stylesheet (design tokens at the top)
js/main.js              Mobile nav + scroll fade-ins (site works with JS off)
assets/
  favicon.svg           NT monogram favicon
  Noah_Thomas_Resume.pdf   <- you provide this, keep the exact filename
  neurogrip/  stridesync/  inspire/   <- you provide images, see below
404.html                Not-found page (GitHub Pages picks it up automatically)
claude_context/         Build specs (not served as part of the site)
```

## How to edit

- **To change text:** edit `index.html` or `projects/*.html` in any text editor. The copy lives directly in the HTML.
- **To update the resume:** replace `assets/Noah_Thomas_Resume.pdf`, keep the filename.
- **To change colors/fonts:** edit the CSS custom properties at the top of `css/style.css`.
- **To deploy:** `git add -A && git commit -m 'update' && git push`

## Images you still need to add

Labeled dark "PLACEHOLDER" images currently sit at all seven paths so the site previews cleanly. **Replace them before launch** (each one says so on its face). Note: the placeholder files at `.jpg` paths are actually PNG data, which browsers render fine, but your real exports should be genuine JPEGs.

Extract from your PDF portfolio, export max 1600px wide, JPEG quality ~80 (or WebP), target under 250 KB each. Use exactly these paths:

- `assets/neurogrip/hero.jpg` — hand photo (also used as the link preview image)
- `assets/neurogrip/cad.jpg` — CAD render
- `assets/neurogrip/assembly.jpg` — assembly / tendon routing photo
- `assets/stridesync/architecture.png` — system architecture diagram
- `assets/stridesync/breadboard.jpg` — breadboard photo
- `assets/stridesync/dashboard.png` — dashboard screenshot
- `assets/inspire/layout.png` — AutoCAD layout

## Deploying to GitHub Pages (first time)

1. Create a **public** repo named `noaht155.github.io` (cleaner URL for resumes) or push this repo as-is and serve it at `noaht155.github.io/<repo-name>`. All links in the site are relative, so both work.
2. Push these files to the `main` branch.
3. On GitHub: repo **Settings → Pages → Source: Deploy from a branch → `main` / (root)**.
4. The site is live in about a minute. Every push to `main` redeploys automatically.

Note: the `og:image` meta tags in the HTML point at `https://noaht155.github.io/assets/...`. If the site ends up served under a subpath (e.g. `/portfolio/`), update those URLs in `index.html` and `projects/*.html` so link previews work.

## Pre-launch checklist

- [ ] Add resume PDF and all images listed above
- [ ] Test all internal links and anchors
- [ ] Test at 375 / 768 / 1440 px widths
- [ ] Run Lighthouse (mobile): 90+ performance, 100 accessibility
