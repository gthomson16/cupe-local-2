# CUPE Local 2 Website

A modern, professional redesign of [cupelocal2.com](https://cupelocal2.com) — the website for CUPE Local 2, representing ~700 workers who install and maintain electrical, signal, and communication systems at the Toronto Transit Commission (TTC).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19
- **Styling:** Tailwind CSS 4 (utility-first, no CSS modules)
- **Linting:** ESLint 9 with next/core-web-vitals + typescript configs
- **Path alias:** `@/*` maps to `./src/*`

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Tailwind theme + design tokens
│   ├── news/page.tsx        # News articles listing
│   ├── executives/page.tsx  # Executive board directory
│   ├── documents/page.tsx   # PDF documents & resources
│   ├── gallery/
│   │   ├── page.tsx         # Photo album grid
│   │   └── [slug]/page.tsx  # Individual album viewer (SSG)
│   ├── forms/page.tsx       # External forms directory
│   ├── contact/page.tsx     # Contact form + quick contacts
│   └── registration/page.tsx # Member registration form
├── components/
│   ├── Navbar.tsx           # Sticky header with responsive nav
│   ├── Footer.tsx           # Site footer with links & social
│   └── PageHero.tsx         # Reusable page hero banner
└── data/
    └── gallery.ts           # Album metadata (typed)
```

Images live in `public/images/real/` — gallery photos are in `public/images/real/gallery/`.

## Design Tokens

Defined as CSS custom properties in `globals.css` and used via Tailwind classes (e.g., `bg-cupe-red`, `text-cupe-navy`):

| Token              | Value     | Usage                        |
|--------------------|-----------|------------------------------|
| `cupe-red`         | `#cc1016` | Primary CTAs, accents        |
| `cupe-red-dark`    | `#a00d12` | Hover states for red         |
| `cupe-navy`        | `#1a2744` | Headers, hero backgrounds    |
| `cupe-navy-light`  | `#243356` | Secondary navy               |
| `cupe-blue`        | `#2563eb` | Accent blue                  |
| `cupe-gray`        | `#f8f9fa` | Section backgrounds          |
| `cupe-dark`        | `#111827` | Footer background            |

**Font:** Inter (Google Fonts, variable weight)

## Conventions

- **Styling:** Pure Tailwind utility classes — no CSS modules, styled-components, or inline style objects
- **Components:** Functional components with TypeScript interfaces. Only add `"use client"` when hooks are needed
- **Data:** Define data arrays as typed constants within page files or in `src/data/`
- **Images:** Use `next/image` with `fill` for backgrounds, explicit dimensions elsewhere. Always include `alt` text
- **Responsive:** Mobile-first using Tailwind breakpoints (sm → md → lg → xl). Container max-width: `max-w-7xl`
- **Cards:** Consistent pattern — `rounded-lg`, `shadow-sm` or `ring-1 ring-gray-100`, hover lift with `-translate-y-0.5`
- **Focus states:** `ring-2 ring-cupe-red` for form inputs and interactive elements
- **Accessibility:** Semantic HTML (nav, section, article), `aria-label` on icon buttons, `htmlFor` on form labels
- **Forms:** POST to external cupelocal2.com endpoints. No client-side validation library — use native HTML validation
- **Icons:** Inline SVG from Heroicons, not an icon library import

## Design Direction

This is a **modern, professional** redesign. The tone should be:
- Clean and authoritative but approachable
- Strong union identity — solidarity, safety, community
- Visual hierarchy with navy/red/white palette
- Subtle interactions (hover lifts, transitions 150–300ms)
- No clutter — generous whitespace and clear CTAs
