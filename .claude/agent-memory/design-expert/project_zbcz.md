---
name: ZBCZ Website Project Context
description: Zion Bishops Conference of Zimbabwe - React/Vite/Tailwind v4 church website serving 168+ churches across 4 African nations
type: project
---

**Stack:** React 19 + Vite + Tailwind CSS v4 + Framer Motion + Lucide React + React Router DOM v7
**Current fonts:** Arimo (base), plus Roboto, Inter, Nunito, Oswald, Quicksand, Raleway, IBM Plex Sans loaded via Google Fonts (most unused - performance issue)
**Current color scheme:** Blue/Purple gradient palette (generic), transitioning to Maroon/Cream/Yellow/Green/White
**Content:** Religious organization - church leadership, ministries, events, gallery, contact
**Pages:** Home, About, Ministries, Events, Leadership (2 versions), Gallery, Contact
**Assets:** ~20 JPEG images (40-200KB each), 2 MP4 videos (5-8MB each), PNG logo (459KB - needs optimization)
**Issues found:**
- 9 Google Font families loaded but only Arimo used in CSS (massive render-blocking)
- No image optimization (no WebP, no srcset, no blur placeholders)
- App.css still has Vite boilerplate styles
- Logo is 459KB PNG (should be optimized)
- Videos are uncompressed (5-8MB)
- No consistent design tokens/color system
- `xs:` breakpoint used but not defined in Tailwind v4
- Blue/purple gradient color theme needs complete replacement to maroon/cream/yellow/green/white
