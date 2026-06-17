# Noah Thomas — Personal Portfolio Website

## Purpose
Personal portfolio site for a Mechanical Engineering student (University of Waterloo, Option in Biomechanics) targeting **medtech, surgical robotics, and humanoid robotics** co-op roles. The audience is engineers and hiring managers at hardware startups (Neuralink, 1X, Apptronik, Vicarious Surgical, etc.) who will spend 30-90 seconds on the site. The site must immediately communicate: hands-on hardware builder, neural interface + wearable sensing projects, manufacturing credibility.

## Read these files in order
1. `00-PROJECT-OVERVIEW.md` (this file) — goals, stack, structure
2. `01-DESIGN-SYSTEM.md` — colors, typography, components, visual rules
3. `02-CONTENT.md` — all copy, project data, links (single source of truth)
4. `03-PAGES.md` — page-by-page layout specs
5. `04-DEPLOYMENT.md` — GitHub Pages setup and repo structure

## Tech stack (hard requirements)
- **Plain HTML + CSS + vanilla JS.** No frameworks, no build step, no npm.
  Rationale: owner has no web dev experience (Python/C++/C/MATLAB background)
  and must be able to read and edit every file. GitHub Pages serves it as-is.
- One shared stylesheet: `css/style.css`
- One small JS file: `js/main.js` (scroll animations, mobile nav, nothing else)
- No external JS libraries. Google Fonts allowed. No analytics for v1.

## Site structure
```
/                     index.html        — single-page scroll (hero, projects, experience, skills, contact)
/projects/neurogrip   neurogrip.html    — project detail page
/projects/stridesync  stridesync.html   — project detail page
```
- Nav links on index scroll to sections; project cards link to detail pages.
- Every detail page has identical nav back to index sections.

## Owner profile (for context)
- Noah Thomas, 2nd-year MechE @ UWaterloo, biomechanics option, GPA 3.7
- Flagship projects: NeuroGrip (EMG robotic hand), StrideSync (IMU gait wearable)
- Co-ops: Mondelez International (process improvement), S&C Electric (QA/metrology)
- Goal: Fall 2026 co-op in surgical/humanoid robotics or medtech wearables
- Long-term: hardware founder, Bay Area

## Non-goals for v1
- No blog, no CMS, no contact form (mailto link only), no dark/light toggle
  (site is dark-only), no animations beyond subtle fade/slide on scroll.

## Definition of done
- Lighthouse: 90+ performance, 100 accessibility on mobile
- Renders correctly at 375px, 768px, 1440px widths
- All images have alt text; total page weight under 1.5 MB per page
- Works with JS disabled (JS is enhancement only)
