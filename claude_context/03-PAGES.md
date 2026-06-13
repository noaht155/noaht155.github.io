# 03 — Page Layouts

## index.html (single page scroll)
Section order, top to bottom:

### 1. Hero (100svh max, but content-driven)
- Section label: `// MECHANICAL ENGINEER`
- h1 tagline, subline paragraph (from 02-CONTENT)
- Two buttons: "View projects" (primary, scrolls to #projects),
  "Resume" (secondary, opens PDF)
- Hero metrics strip below buttons: 3 metric blocks in a row
  (stack vertically under 600px)
- Single radial accent glow behind the h1, nothing else decorative

### 2. Projects (#projects)
- Section label: `// PROJECTS`
- h2: "Things I've built"
- Grid: NeuroGrip and StrideSync as large 2-up cards (these are the
  flagships), Project Inspire as a third full-width slimmer card beneath
- Card order matters: NeuroGrip first (it is the strongest evidence)

### 3. Experience (#experience)
- Section label: `// EXPERIENCE`
- h2: "Where I've worked"
- Timeline component, 2 entries from 02-CONTENT
- Under the timeline, one quiet line in --text-2:
  "University of Waterloo, BASc Mechanical Engineering, Option in
  Biomechanics, 2024-2029. GPA 3.7."

### 4. Skills (#skills)
- Section label: `// TOOLKIT`
- h2: "What I work with"
- 4 grouped tag grids (CAD/Manufacturing, Code, Embedded/Hardware, Tools)

### 5. Contact (#contact)
- Section label: `// CONTACT`
- h2 + line + 3 buttons from 02-CONTENT
- Centered, generous whitespace

### Footer
- 1px top border, footer line from 02-CONTENT, text-2 color

---

## Project detail pages (shared template)
All three pages use the same structure:

1. Nav (same as index, links point back to /index.html#section)
2. Breadcrumb: `// PROJECTS / NEUROGRIP` style label
3. h1 project name + one-liner
4. Tech tag row
5. Metric row: 2-4 metric blocks (the quantitative highlights)
6. Hero image (full content width, 12px radius, 1px border)
7. Three sections: Goals / Methods / Results
   (StrideSync uses Goals / Methods / Status, with an
   "In active development" badge: accent border pill, JetBrains Mono)
8. Image gallery: remaining images, 2-up grid, captions in --text-2
9. Bottom: "Next project →" link card to the next project (cycle:
   NeuroGrip → StrideSync → Inspire → NeuroGrip)

## Writing rules for any generated copy
- No em dashes. Use commas, colons, or periods.
- First person, direct, no buzzwords ("passionate", "synergy" banned)
- Every claim must trace to 02-CONTENT.md
- Metrics always in JetBrains Mono
