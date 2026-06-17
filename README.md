# Noah Thomas — Personal Portfolio

Static portfolio site. Plain HTML + CSS + a small vanilla JS file. No frameworks, no build step, no npm. Edit any file in a text editor and push to deploy.

## Structure

```
index.html              Main single-page site (hero, projects, experience, skills, contact)
projects/
  neurogrip.html        NeuroGrip detail page
  stridesync.html       StrideSync detail page
css/style.css           The one shared stylesheet (design tokens at the top)
js/main.js              Mobile nav + scroll fade-ins + image carousel (site works with JS off)
assets/
  favicon.svg                NT monogram favicon
  Noah_Thomas_Resume.pdf     Resume PDF, linked from the nav/hero/contact buttons
  Noah_Thomas_Portfolio.pdf  Portfolio PDF, linked from the contact section
  neurogrip/  stridesync/    Project carousel images
404.html                Not-found page (GitHub Pages picks it up automatically)
claude_context/         Build specs (not served as part of the site)
```

## How to edit

- **To change text:** edit `index.html` or `projects/*.html` in any text editor. The copy lives directly in the HTML.
- **To update the resume or portfolio PDF:** replace `assets/Noah_Thomas_Resume.pdf` or `assets/Noah_Thomas_Portfolio.pdf`, keep the filenames.
- **To change colors/fonts:** edit the CSS custom properties at the top of `css/style.css`.
- **To deploy:** `git add -A && git commit -m 'update' && git push`

## Adding/reordering carousel images

Each project page shows its images as a rotating carousel (arrows / left-right keys). The carousel has no fixed image count or filenames — `js/main.js` just counts however many `<figure class="carousel-figure">` blocks are in the HTML and builds the counter/arrows from that. To add or reorder images:

1. Drop the file in `assets/neurogrip/` or `assets/stridesync/` (any filename).
2. Add or reorder `<figure class="carousel-figure">` blocks in the matching `projects/*.html` file — the order they appear in the HTML is the order they play in the carousel.
3. Only the first figure should have `is-active` and `loading="eager"`; the rest use `loading="lazy"`.

## Deploying to GitHub Pages (first time)

1. Create a **public** repo named `noaht155.github.io` (cleaner URL for resumes) or push this repo as-is and serve it at `noaht155.github.io/<repo-name>`. All links in the site are relative, so both work.
2. Push these files to the `main` branch.
3. On GitHub: repo **Settings → Pages → Source: Deploy from a branch → `main` / (root)**.
4. The site is live in about a minute. Every push to `main` redeploys automatically.

Note: the `og:image` meta tags in the HTML point at `https://noaht155.github.io/assets/...`. If the site ends up served under a subpath (e.g. `/portfolio/`), update those URLs in `index.html` and `projects/*.html` so link previews work.

## Pre-launch checklist

- [x] Add resume PDF, portfolio PDF, and project images
- [ ] Test all internal links and anchors
- [ ] Test at 375 / 768 / 1440 px widths
- [ ] Run Lighthouse (mobile): 90+ performance, 100 accessibility
