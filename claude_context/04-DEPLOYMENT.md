# 04 — Deployment (GitHub Pages)

## Repo structure
```
noah-portfolio/
├── index.html
├── projects/
│   ├── neurogrip.html
│   └── stridesync.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── Noah_Thomas_Resume.pdf        (owner provides)
│   ├── neurogrip/  stridesync/   (images, owner provides from PDF portfolio)
│   └── favicon.svg                   (generate: "NT" monogram, teal on dark)
└── README.md                          (how to edit content + deploy)
```

## GitHub Pages setup (walk the owner through this; he has Git/GitHub
experience from PlatformIO projects but has never deployed a site)
1. Create public repo named `<username>.github.io` (site lives at root URL)
   OR repo `portfolio` served at `<username>.github.io/portfolio`.
   Prefer the first: cleaner URL for resumes.
2. Push the static files to `main`.
3. Repo Settings → Pages → Source: Deploy from branch → `main` / root.
4. Site is live in ~1 minute. Every push to main redeploys automatically.

## Relative paths warning
If using the `<username>.github.io/portfolio` form, all asset and page links
must be relative (`./css/style.css`, `../assets/...`), never root-absolute
(`/css/style.css`), or they will 404. Build with relative paths regardless.

## Image prep
- Owner's photos come from an existing PDF portfolio. Extract at original
  resolution, then export web copies: max 1600px wide, JPEG quality ~80
  or WebP, target under 250 KB each.
- Name files as specified in 02-CONTENT.md asset paths.

## README.md must include
- "To change text: edit index.html or projects/*.html in any text editor"
- "To update resume: replace assets/Noah_Thomas_Resume.pdf, keep filename"
- "To deploy: git add -A && git commit -m 'update' && git push"

## Pre-launch checklist
- [ ] Test all internal links and anchors
- [ ] Test at 375 / 768 / 1440 px widths
- [ ] Run Lighthouse (mobile): 90+ perf, 100 a11y
- [ ] Set <title> and meta description per page
      (e.g. "Noah Thomas — Mechanical Engineer | NeuroGrip")
- [ ] Open Graph tags: og:title, og:description, og:image (use NeuroGrip
      hero shot) so the link previews well when sent to recruiters
- [ ] 404.html that links back home (GitHub Pages picks it up automatically)
