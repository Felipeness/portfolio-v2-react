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
    whatIDo: {
      title: 'What I Do',
      capabilities: [
        'Architecting distributed systems',
        'Leading engineering teams',
        'Shipping enterprise SaaS',
        'Writing about it all',
      ],
    },
    impact: {
      title: 'Impact in Numbers',
      metrics: [
        { value: 10, prefix: '', suffix: '+', label: 'Years of experience' },
        { value: 60, prefix: '-', suffix: '%', label: 'LCP reduction' },
        { value: 30, prefix: '-', suffix: '%', label: 'Release cycle time' },
        { value: 62, prefix: '', suffix: '', label: 'Chapters published' },
      ],
    },
    philosophy: {
      text: 'I think in systems, write in TypeScript and Go, and believe that good architecture makes the complex feel simple. Every line of code is a decision. Every abstraction is a trade-off. The best systems are the ones you barely notice.',
    },
    recentWriting: {
      title: 'Recent Writing',
      viewAll: 'View all posts',
    },
    contactCTA: {
      title: "Let's build something together",
      primary: 'Get in touch',
      secondary: 'View my work',
    },
    footer: {
      copyright: 'Felipe Soares. All rights reserved.',
      builtWith: 'Built with React, TanStack Start & GSAP',
    },
    commandPalette: {
      placeholder: 'Type a command or search...',
      pages: 'Pages',
      actions: 'Actions',
      noResults: 'No results found.',
    },
    contact: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'What would you like to discuss?',
      subjectPrefix: 'Portfolio Contact from',
      sendButton: 'Send Message',
    },
    about: {
      bio: [
        "I'm Felipe Soares, a Staff Engineer and Solution Architect with 10+ years of experience building high-impact systems across fintech, SaaS, and enterprise domains.",
        'My journey started with a fascination for how complex systems emerge from simple rules. That curiosity led me from building my first PHP websites to architecting distributed platforms serving millions of users.',
        "Today, I focus on the intersection of systems design, developer experience, and engineering culture. I believe the best architectures aren't just technically sound — they amplify the team's ability to deliver value.",
        'I\'m the author of "The Whole and the Part," a book that applies holonomic theory to software architecture. I contribute to open-source projects including Node.js, Next.js, and React, and I\'m passionate about mentoring the next generation of systems thinkers.',
        "When I'm not writing code or prose, you'll find me exploring philosophy, playing guitar, or hiking with my dog.",
      ],
      impactMetrics: [
        { value: 10, suffix: '+', label: 'Years of Experience' },
        { value: 200, suffix: '+', label: 'Developers Mentored' },
        { value: 50, suffix: 'M+', label: 'Users Impacted' },
        { value: 15, suffix: '+', label: 'Systems Architected' },
      ],
    },
    book: {
      coverTitle: 'The Whole and the Part',
      coverAuthor: 'Felipe Soares',
      coverSubtitle: 'Holonomic Architecture',
      bulletPoints: [
        "How Arthur Koestler's holon theory applies to software systems",
        'Self-Contained Systems as the natural unit of software delivery',
        'Practical patterns for teams building platforms that evolve',
      ],
      readMore: 'Read More',
    },
    cases: {
      backToList: 'Back to Cases',
      viewCase: 'View case \u2192',
      context: 'Context',
      challenge: 'Challenge',
      approach: 'Approach',
      results: 'Results',
    },
    blog: {
      backToList: 'Back to Blog',
    },
    oss: {
      projects: [
        {
          name: 'Node.js',
          description: 'Contributing to the Node.js runtime — API improvements, test infrastructure, and documentation.',
          role: 'Contributor',
        },
        {
          name: 'Next.js',
          description: 'Performance optimizations and bug fixes for the React framework.',
          role: 'Contributor',
        },
        {
          name: 'React',
          description: 'Documentation improvements and compiler feedback for the UI library.',
          role: 'Contributor',
        },
        {
          name: 'Prisma',
          description: 'TypeScript ORM contributions — query engine improvements and type generation.',
          role: 'Contributor',
        },
        {
          name: 'opensource-guide',
          description: 'Helping maintainers and contributors navigate open source effectively.',
          role: 'Contributor',
        },
        {
          name: 'otel-dev',
          description: 'Developer-friendly OpenTelemetry setup for Node.js microservices.',
          role: 'Author',
        },
      ],
    },
    uses: {
      categories: [
        {
          name: 'Editor & Terminal',
          items: [
            { name: 'Cursor', description: 'AI-powered IDE built on VS Code. My daily driver.' },
            { name: 'Claude Code', description: 'AI coding assistant for complex tasks.' },
            { name: 'Warp', description: 'Modern terminal with AI integration.' },
            { name: 'Zsh + Oh My Zsh', description: 'Shell with plugins for productivity.' },
          ],
        },
        {
          name: 'Development',
          items: [
            { name: 'TypeScript', description: 'Primary language for backend and frontend.' },
            { name: 'Go', description: 'For performance-critical services and CLI tools.' },
            { name: 'React + Next.js', description: 'Frontend framework of choice.' },
            { name: 'NestJS', description: 'Backend framework for enterprise APIs.' },
            { name: 'Docker + K8s', description: 'Containerization and orchestration.' },
          ],
        },
        {
          name: 'Productivity',
          items: [
            { name: 'Linear', description: 'Project management that respects developers.' },
            { name: 'Notion', description: 'Knowledge base and documentation.' },
            { name: 'Excalidraw', description: 'Architecture diagrams and whiteboarding.' },
            { name: 'Raycast', description: 'Launcher and productivity tool for macOS.' },
          ],
        },
        {
          name: 'Hardware',
          items: [
            { name: 'MacBook Pro M3 Max', description: '64GB RAM — handles everything I throw at it.' },
            { name: 'LG 5K UltraFine', description: 'Primary display for focused work.' },
            { name: 'Keychron Q1 Pro', description: 'Mechanical keyboard with Gateron Browns.' },
            { name: 'Sony WH-1000XM5', description: 'Noise-cancelling for deep focus sessions.' },
          ],
        },
      ],
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
    whatIDo: {
      title: 'O Que Eu Faco',
      capabilities: [
        'Arquitetando sistemas distribuidos',
        'Liderando times de engenharia',
        'Entregando SaaS enterprise',
        'Escrevendo sobre tudo isso',
      ],
    },
    impact: {
      title: 'Impacto em Numeros',
      metrics: [
        { value: 10, prefix: '', suffix: '+', label: 'Anos de experiencia' },
        { value: 60, prefix: '-', suffix: '%', label: 'Reducao de LCP' },
        { value: 30, prefix: '-', suffix: '%', label: 'Ciclo de release' },
        { value: 62, prefix: '', suffix: '', label: 'Capitulos publicados' },
      ],
    },
    philosophy: {
      text: 'Eu penso em sistemas, escrevo em TypeScript e Go, e acredito que boa arquitetura torna o complexo simples. Cada linha de codigo e uma decisao. Cada abstracao e um trade-off. Os melhores sistemas sao os que voce mal percebe.',
    },
    recentWriting: {
      title: 'Escrita Recente',
      viewAll: 'Ver todos os posts',
    },
    contactCTA: {
      title: 'Vamos construir algo juntos',
      primary: 'Entre em contato',
      secondary: 'Veja meu trabalho',
    },
    footer: {
      copyright: 'Felipe Soares. Todos os direitos reservados.',
      builtWith: 'Feito com React, TanStack Start & GSAP',
    },
    commandPalette: {
      placeholder: 'Digite um comando ou busque...',
      pages: 'Paginas',
      actions: 'Acoes',
      noResults: 'Nenhum resultado encontrado.',
    },
    contact: {
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'O que gostaria de discutir?',
      subjectPrefix: 'Contato do Portfolio de',
      sendButton: 'Enviar Mensagem',
    },
    about: {
      bio: [
        'Sou Felipe Soares, Staff Engineer e Solution Architect com mais de 10 anos de experiencia construindo sistemas de alto impacto em fintech, SaaS e enterprise.',
        'Minha jornada comecou com um fascinio por como sistemas complexos emergem de regras simples. Essa curiosidade me levou de construir meus primeiros sites em PHP a arquitetar plataformas distribuidas servindo milhoes de usuarios.',
        'Hoje, foco na interseccao entre design de sistemas, experiencia do desenvolvedor e cultura de engenharia. Acredito que as melhores arquiteturas nao sao apenas tecnicamente solidas — elas amplificam a capacidade do time de entregar valor.',
        'Sou autor de "O Todo e a Parte", um livro que aplica a teoria holonomica a arquitetura de software. Contribuo para projetos open-source incluindo Node.js, Next.js e React, e sou apaixonado por mentorar a proxima geracao de pensadores de sistemas.',
        'Quando nao estou escrevendo codigo ou prosa, voce me encontra explorando filosofia, tocando guitarra ou caminhando com meu cachorro.',
      ],
      impactMetrics: [
        { value: 10, suffix: '+', label: 'Anos de Experiencia' },
        { value: 200, suffix: '+', label: 'Devs Mentorados' },
        { value: 50, suffix: 'M+', label: 'Usuarios Impactados' },
        { value: 15, suffix: '+', label: 'Sistemas Arquitetados' },
      ],
    },
    book: {
      coverTitle: 'O Todo e a Parte',
      coverAuthor: 'Felipe Soares',
      coverSubtitle: 'Arquitetura Holonomica',
      bulletPoints: [
        'Como a teoria do holon de Arthur Koestler se aplica a sistemas de software',
        'Self-Contained Systems como a unidade natural de entrega de software',
        'Padroes praticos para times construindo plataformas que evoluem',
      ],
      readMore: 'Saiba Mais',
    },
    cases: {
      backToList: 'Voltar para Cases',
      viewCase: 'Ver case \u2192',
      context: 'Contexto',
      challenge: 'Desafio',
      approach: 'Abordagem',
      results: 'Resultados',
    },
    blog: {
      backToList: 'Voltar para Blog',
    },
    oss: {
      projects: [
        {
          name: 'Node.js',
          description: 'Contribuindo para o runtime Node.js — melhorias de API, infraestrutura de testes e documentacao.',
          role: 'Contribuidor',
        },
        {
          name: 'Next.js',
          description: 'Otimizacoes de performance e correcoes de bugs para o framework React.',
          role: 'Contribuidor',
        },
        {
          name: 'React',
          description: 'Melhorias na documentacao e feedback do compilador para a biblioteca de UI.',
          role: 'Contribuidor',
        },
        {
          name: 'Prisma',
          description: 'Contribuicoes ao ORM TypeScript — melhorias no query engine e geracao de tipos.',
          role: 'Contribuidor',
        },
        {
          name: 'opensource-guide',
          description: 'Ajudando mantenedores e contribuidores a navegar o open source de forma eficaz.',
          role: 'Contribuidor',
        },
        {
          name: 'otel-dev',
          description: 'Setup de OpenTelemetry amigavel ao desenvolvedor para microsservicos Node.js.',
          role: 'Autor',
        },
      ],
    },
    uses: {
      categories: [
        {
          name: 'Editor & Terminal',
          items: [
            { name: 'Cursor', description: 'IDE com IA baseada no VS Code. Meu editor principal.' },
            { name: 'Claude Code', description: 'Assistente de codigo com IA para tarefas complexas.' },
            { name: 'Warp', description: 'Terminal moderno com integracao de IA.' },
            { name: 'Zsh + Oh My Zsh', description: 'Shell com plugins para produtividade.' },
          ],
        },
        {
          name: 'Desenvolvimento',
          items: [
            { name: 'TypeScript', description: 'Linguagem principal para backend e frontend.' },
            { name: 'Go', description: 'Para servicos criticos de performance e ferramentas CLI.' },
            { name: 'React + Next.js', description: 'Framework frontend de escolha.' },
            { name: 'NestJS', description: 'Framework backend para APIs enterprise.' },
            { name: 'Docker + K8s', description: 'Containerizacao e orquestracao.' },
          ],
        },
        {
          name: 'Produtividade',
          items: [
            { name: 'Linear', description: 'Gestao de projetos que respeita desenvolvedores.' },
            { name: 'Notion', description: 'Base de conhecimento e documentacao.' },
            { name: 'Excalidraw', description: 'Diagramas de arquitetura e whiteboard.' },
            { name: 'Raycast', description: 'Launcher e ferramenta de produtividade para macOS.' },
          ],
        },
        {
          name: 'Hardware',
          items: [
            { name: 'MacBook Pro M3 Max', description: '64GB RAM — aguenta tudo que jogo nele.' },
            { name: 'LG 5K UltraFine', description: 'Display principal para trabalho focado.' },
            { name: 'Keychron Q1 Pro', description: 'Teclado mecanico com Gateron Browns.' },
            { name: 'Sony WH-1000XM5', description: 'Cancelamento de ruido para sessoes de foco profundo.' },
          ],
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export default translations;
