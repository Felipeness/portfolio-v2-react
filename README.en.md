> **[Portugues](README.md)** | English

<div align="center">

# portfolio-v2

**Bilingual Staff Engineer portfolio with a cinematic 7-scene home page, scroll-driven animations, and full SSR.**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![TanStack](https://img.shields.io/badge/TanStack_Start-1.167-ef4444?style=flat-square)](https://tanstack.com/start)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06b6d4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**55 files** &bull; **7 home scenes** &bull; **12 routes** &bull; **4K lines** &bull; **Bilingual EN/PT-BR**

</div>

---

## Table of Contents

- [Why not a template?](#why-not-a-template)
- [How it works](#how-it-works)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Quick Start](#quick-start)
- [Stack](#stack)
- [Color system](#color-system)
- [Design principles](#design-principles)

## Why not a template?

Portfolio templates deliver a generic site in 5 minutes. This project delivers a portfolio that **is the proof of competence** — every technical decision demonstrates what you know.

| | Generic Template | This Portfolio |
|---|---|---|
| **SSR** | None or Next.js full | TanStack Start with Vite 7 |
| **Animations** | Ready-made libs or none | IntersectionObserver + GSAP countup |
| **i18n** | External plugin | `as const` type-safe, zero runtime |
| **Routing** | Basic file-based | TanStack Router type-safe |
| **Home** | Static section list | 7 scenes with scroll reveal |
| **Mobile** | Hamburger menu | Bottom nav (Instagram-style) |
| **Cmd+K** | None | Command palette with easter eggs |
| **Content** | Generic markdown | Typed data + Zod-like schemas |

## How it works

```mermaid
flowchart LR
    subgraph Data ["Typed Data"]
        CS[Case Studies]
        BL[Blog Posts]
        TR[Translations]
    end

    subgraph SSR ["TanStack Start SSR"]
        RT[Type-safe Router]
        I18N[Per-route i18n]
        HD[Per-page Head]
    end

    subgraph Client ["Client Interactive"]
        IO[IntersectionObserver\nScroll Reveal]
        CU[GSAP CountUp\nMetrics]
        CMD[cmdk\nCommand Palette]
    end

    Data --> SSR
    SSR -->|HTML + Hydration| Client

    style Data fill:#1a1a1a,stroke:#E56500,color:#fff
    style SSR fill:#1a1a1a,stroke:#0119E5,color:#fff
    style Client fill:#1a1a1a,stroke:#22c55e,color:#fff
```

## Architecture

```mermaid
flowchart TB
    subgraph Routes ["Routes (TanStack Router)"]
        ROOT["__root.tsx\nHTML + Head + Fonts"]
        LOCALE["$locale/route.tsx\nHeader + Footer + Cmd+K"]
        PAGES["12 pages\ncases, blog, book, about..."]
    end

    subgraph Features ["Features (self-contained)"]
        HOME["home/\n7 scenes: Hero, WhatIDo,\nCases, Impact, Philosophy,\nWriting, CTA"]
        CASES["cases/\nCaseCard + CaseGrid\n+ CaseDetail"]
        BLOG["blog/\nPostCard + PostGrid"]
        OTHER["book/ about/ oss/ uses/"]
    end

    subgraph Shared ["Shared (cross-feature)"]
        ANIM["animations/\nuseScrollReveal\nuseCountUp"]
        COMP["components/\nHeader, Footer, BottomNav\nCmdK, TechBadge"]
        I18N2["i18n/\ntranslations + utils"]
        STYLES["styles/\ntokens + global"]
    end

    ROOT --> LOCALE --> PAGES
    PAGES --> Features
    Features --> Shared

    style Routes fill:#0a0a0a,stroke:#E56500,color:#fff
    style Features fill:#0a0a0a,stroke:#0119E5,color:#fff
    style Shared fill:#0a0a0a,stroke:#6676FE,color:#fff
```

### Home: 7 Scenes

| Scene | Component | Effect |
|---|---|---|
| 1 | Hero | CSS fadeInUp staggered on load |
| 2 | WhatIDo | 4 capabilities with scroll reveal |
| 3 | FeaturedCases | 3-card grid with hover glow |
| 4 | ImpactNumbers | Animated countup (IntersectionObserver) |
| 5 | Philosophy | Text with highlighted phrases |
| 6 | RecentWriting | 4-post grid with stagger |
| 7 | ContactCTA | CTA with mailto |

## Project structure

```
src/
├── features/
│   ├── home/           # 7 scenes: Hero, WhatIDo, FeaturedCases...
│   ├── cases/          # CaseCard, CaseGrid, CaseDetail, data.ts
│   ├── blog/           # PostCard, PostGrid, data.ts
│   ├── book/           # BookHero
│   ├── about/          # AboutContent, ImpactMetrics
│   ├── oss/            # OssGrid
│   └── uses/           # UsesGrid
├── shared/
│   ├── animations/     # useScrollReveal, useCountUp
│   ├── components/     # Header, Footer, BottomNav, CmdK, TechBadge
│   ├── i18n/           # translations.ts (as const), utils.ts
│   ├── styles/         # tokens.css (@theme), global.css
│   └── types/          # Locale type
├── routes/
│   ├── __root.tsx      # HTML shell, fonts, JSON-LD
│   └── $locale/        # All locale-prefixed routes
└── styles/app.css      # Entry: Tailwind + tokens
```

## Quick Start

```bash
git clone git@github.com:Felipeness/portfolio-v2-react.git
cd portfolio-v2-react
pnpm install
pnpm dev
# → http://localhost:3000/en
```

## Stack

<details>
<summary><strong>Dependencies and their roles</strong></summary>

| Package | Role |
|---|---|
| `react` 19 | UI framework with compiler |
| `@tanstack/react-start` | SSR + file-based routing |
| `@tanstack/react-router` | Type-safe routing with params |
| `tailwindcss` 4 | CSS-first design tokens via @theme |
| `gsap` 3.14 | Number countup animation only |
| `cmdk` | Command palette (Cmd+K) |
| `vite` 7 | Build + dev server |
| `typescript` 5.9 | Strict type safety |

</details>

## Color system

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-orange` | `#E56500` | `#C25500` | Primary accent |
| `--color-brand-blue` | `#0119E5` | `#0119E5` | Secondary |
| `--color-brand-red` | `#E61100` | `#E61100` | Tertiary |
| `--gradient-warm` | `#E56500 → #E61100` | — | Headlines |

60-30-10 rule: black (bg) · white (text) · orange (accent).

## Design principles

1. **The portfolio is the proof** — Every technical decision demonstrates competence. TanStack Start for SSR, IntersectionObserver for animations, `as const` for type-safe i18n.

2. **Content visible, animation optional** — If JS fails, all content appears. Animations are progressive enhancement via IntersectionObserver.

3. **Feature-based** — Components, data, and types live together by domain. Zero barrel files.

4. **Mobile-first** — App-style bottom nav, responsive padding, adaptive grids.

## License

MIT

---

<div align="center">

**[felipeness.dev](https://felipeness.dev)** · React 19 + TanStack Start

</div>
