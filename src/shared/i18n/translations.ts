import type { Locale } from '~/shared/types/locale';

const translations = {
  en: {
    nav: {
      home: 'Home',
      cases: 'Cases',
      blog: 'Blog',
      book: 'Book',
      about: 'About',
      oss: 'OSS',
      uses: 'Uses',
      contact: 'Contact',
      search: 'Search',
    },
    hero: {
      tag: 'Staff Engineer & Solution Architect',
      titleLine1: 'Building systems that',
      titleHighlight: 'scale with purpose',
      description:
        'I architect and build high-impact distributed systems, developer platforms, and engineering cultures. 10+ years turning complexity into clarity across fintech, SaaS, and enterprise.',
      cta: 'View Case Studies',
      ctaSecondary: 'About Me',
      scroll: 'SCROLL',
    },
    sections: {
      cases: {
        tag: 'Selected Work',
        title: 'Case Studies',
        description: 'Real-world systems I designed and built. Each one tells a story of constraints, trade-offs, and outcomes.',
      },
      blog: {
        tag: 'Writing',
        title: 'Blog',
        description: 'Thoughts on architecture, engineering culture, and the craft of building software.',
      },
      book: {
        tag: 'Published Author',
        title: 'The Whole and the Part',
        description: 'A book about seeing software through the lens of living systems. Holonomic architecture for teams that build to last.',
      },
      about: {
        tag: 'Background',
        title: 'About Me',
        description: 'The journey from curious developer to systems thinker.',
      },
      oss: {
        tag: 'Open Source',
        title: 'OSS Contributions',
        description: 'Contributing to the tools we all depend on.',
      },
      uses: {
        tag: 'Setup',
        title: 'Uses',
        description: 'Tools, hardware, and software I use daily.',
      },
      contact: {
        tag: 'Get in Touch',
        title: 'Contact',
        description: "Let's build something meaningful together.",
      },
    },
    footer: {
      copyright: 'Felipe Barcelos. All rights reserved.',
      builtWith: 'Built with React, TanStack Start & GSAP',
    },
    commandPalette: {
      placeholder: 'Type a command or search...',
      pages: 'Pages',
      actions: 'Actions',
      noResults: 'No results found.',
    },
  },
  'pt-br': {
    nav: {
      home: 'Inicio',
      cases: 'Cases',
      blog: 'Blog',
      book: 'Livro',
      about: 'Sobre',
      oss: 'OSS',
      uses: 'Ferramentas',
      contact: 'Contato',
      search: 'Buscar',
    },
    hero: {
      tag: 'Staff Engineer & Solution Architect',
      titleLine1: 'Construindo sistemas que',
      titleHighlight: 'escalam com proposito',
      description:
        'Arquiteto e construo sistemas distribuidos de alto impacto, plataformas de desenvolvimento e culturas de engenharia. 10+ anos transformando complexidade em clareza em fintech, SaaS e enterprise.',
      cta: 'Ver Case Studies',
      ctaSecondary: 'Sobre Mim',
      scroll: 'SCROLL',
    },
    sections: {
      cases: {
        tag: 'Trabalhos Selecionados',
        title: 'Case Studies',
        description: 'Sistemas reais que projetei e construi. Cada um conta uma historia de restricoes, trade-offs e resultados.',
      },
      blog: {
        tag: 'Escrita',
        title: 'Blog',
        description: 'Pensamentos sobre arquitetura, cultura de engenharia e o oficio de construir software.',
      },
      book: {
        tag: 'Autor Publicado',
        title: 'O Todo e a Parte',
        description: 'Um livro sobre ver software atraves da lente de sistemas vivos. Arquitetura holonomica para times que constroem para durar.',
      },
      about: {
        tag: 'Background',
        title: 'Sobre Mim',
        description: 'A jornada de desenvolvedor curioso a pensador de sistemas.',
      },
      oss: {
        tag: 'Codigo Aberto',
        title: 'Contribuicoes OSS',
        description: 'Contribuindo para as ferramentas que todos dependemos.',
      },
      uses: {
        tag: 'Setup',
        title: 'Ferramentas',
        description: 'Ferramentas, hardware e software que uso diariamente.',
      },
      contact: {
        tag: 'Fale Comigo',
        title: 'Contato',
        description: 'Vamos construir algo significativo juntos.',
      },
    },
    footer: {
      copyright: 'Felipe Barcelos. Todos os direitos reservados.',
      builtWith: 'Feito com React, TanStack Start & GSAP',
    },
    commandPalette: {
      placeholder: 'Digite um comando ou busque...',
      pages: 'Paginas',
      actions: 'Acoes',
      noResults: 'Nenhum resultado encontrado.',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export default translations;
