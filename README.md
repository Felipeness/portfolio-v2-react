<p align="right"><a href="./README.en.md">English</a></p>

<h1 align="center">portfolio-v2</h1>

<p align="center">
  Portfolio pessoal com scroll cinematico, animacoes GSAP e SSR via TanStack Start.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TanStack_Start-1.x-FF4154?logo=reactquery&logoColor=white" alt="TanStack Start" />
  <img src="https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## Metricas

| Metrica | Valor |
|---------|-------|
| Arquivos fonte | 60+ |
| Cenas de scroll (home) | 7 |
| Hooks de animacao | 10 |
| Idiomas | EN / PT-BR |
| Temas | Dark / Light |

## Quick Start

```bash
git clone https://github.com/felipeness/portfolio-v2.git
cd portfolio-v2
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

## Arquitetura

```mermaid
graph TD
    subgraph Routes["File-based routing"]
        Root["__root.tsx<br/>Head, fonts, SEO"]
        Locale["$locale/route.tsx<br/>Layout, Header, Footer"]
        Pages["index | cases | blog | book<br/>about | oss | uses | contact"]
    end

    subgraph Features["Feature modules"]
        Home["home/<br/>Hero, WhatIDo, ImpactNumbers..."]
        Cases["cases/<br/>CaseGrid, CaseDetail, data"]
        Blog["blog/<br/>PostGrid, PostCard, data"]
        Book["book/<br/>BookHero"]
        About["about/<br/>AboutContent, ImpactMetrics"]
        Contact["contact/<br/>ContactForm"]
        OSS["oss/<br/>OssGrid"]
        Uses["uses/<br/>UsesGrid"]
    end

    subgraph Shared["Shared primitives"]
        Animations["animations/<br/>10 GSAP hooks"]
        Components["components/<br/>Header, Footer, CommandPalette..."]
        I18n["i18n/<br/>translations, utils"]
        Styles["styles/<br/>tokens.css, global.css"]
    end

    Root --> Locale --> Pages
    Pages --> Features
    Features --> Shared
```

## Estrutura do projeto

```
src/
├── features/           # Modulos por dominio
│   ├── about/          # AboutContent, ImpactMetrics
│   ├── blog/           # PostCard, PostGrid, data
│   ├── book/           # BookHero
│   ├── cases/          # CaseCard, CaseDetail, CaseGrid, data
│   ├── contact/        # ContactForm
│   ├── home/           # Hero, WhatIDo, FeaturedCases, ImpactNumbers, Philosophy, RecentWriting, ContactCTA
│   ├── oss/            # OssGrid
│   └── uses/           # UsesGrid
├── routes/             # File-based routing (TanStack Router)
│   ├── __root.tsx      # Root layout, SEO, fonts
│   ├── index.tsx       # Redirect / -> /en
│   └── $locale/        # Rotas localizadas
│       ├── route.tsx   # Layout com Header/Footer
│       ├── index.tsx   # Home page
│       ├── cases/      # Listagem + detalhe
│       ├── blog/       # Listagem + detalhe
│       ├── book.tsx
│       ├── about.tsx
│       ├── oss.tsx
│       ├── uses.tsx
│       └── contact.tsx
├── shared/
│   ├── animations/     # 10 hooks GSAP (scroll, reveal, split text, count up...)
│   ├── components/     # Header, Footer, ThemeToggle, LanguageToggle, CommandPalette, SectionHeader, GradientText
│   ├── i18n/           # Traducoes EN/PT-BR + utils
│   ├── styles/         # Design tokens + global CSS
│   └── types/          # Locale type
└── styles/
    └── app.css         # Tailwind + imports
```

## Stack

| Camada | Tecnologia | Uso |
|--------|-----------|-----|
| Framework | React 19 + TanStack Start | SSR, file-based routing, head management |
| Animacao | GSAP 3.14 + ScrollTrigger | Scroll-driven animations, split text, parallax |
| Smooth scroll | Lenis | Inertia scrolling |
| Estilo | Tailwind CSS v4 | Utility-first, design tokens via `@theme` |
| Bundler | Vite 7 | Dev server, HMR, build |
| Command palette | cmdk | Cmd+K navigation |
| Linguagem | TypeScript 5.9 | Type safety end-to-end |

## Sistema de cores

| Token | Dark | Uso |
|-------|------|-----|
| `--color-orange` | `#E56500` | CTA, accent, brand |
| `--color-brand-blue` | `#0119E5` | Secondary accent |
| `--color-bg-base` | `#000000` | Background |
| `--color-bg-surface` | `#111111` | Cards, surfaces |
| `--color-text-primary` | `#FFFFFF` | Headings |
| `--color-text-secondary` | `#E5E5E5` | Body text |
| `--color-text-muted` | `#808080` | Labels, metadata |

Fontes: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (code).

## Licenca

MIT
