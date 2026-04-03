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
          name: 'Editor & IDE',
          items: [
            { name: 'VS Code', description: 'Primary editor with Vim keybindings for speed and precision.' },
            { name: 'Claude Code CLI', description: 'AI coding assistant for complex architectural tasks and refactoring.' },
            { name: 'Cursor', description: 'AI-powered IDE built on VS Code. Used for rapid prototyping and exploration.' },
          ],
        },
        {
          name: 'Terminal',
          items: [
            { name: 'Windows Terminal', description: 'Modern terminal with tabs, panes, and GPU-accelerated rendering.' },
            { name: 'PowerShell 7', description: 'Cross-platform shell with structured data pipelines.' },
            { name: 'Oh My Posh', description: 'Custom prompt theme with git status, node version, and context indicators.' },
          ],
        },
        {
          name: 'Hardware',
          items: [
            { name: 'Custom Desktop', description: 'Custom build running Windows 11. Built for heavy compilation and parallel workloads.' },
            { name: 'Ultrawide 34"', description: 'Primary monitor for focused work — code on one side, terminal on the other.' },
            { name: 'Mechanical Keyboard', description: 'Mechanical keyboard — the tactile feedback keeps the rhythm going.' },
            { name: 'Logitech MX Master', description: 'Ergonomic mouse with customizable buttons and cross-device switching.' },
          ],
        },
        {
          name: 'Languages & Frameworks',
          items: [
            { name: 'TypeScript', description: 'Primary language for backend and frontend. Type-safety everywhere.' },
            { name: 'Go', description: 'For systems programming, performance-critical APIs, and CLI tools.' },
            { name: 'Python', description: 'Scripts, automation, and ML experiments.' },
            { name: 'React & Next.js', description: 'Frontend framework of choice for SSR/SSG applications.' },
            { name: 'NestJS & Fastify', description: 'Backend frameworks for enterprise APIs and microservices.' },
          ],
        },
        {
          name: 'Message Queues & Orchestration',
          items: [
            { name: 'RabbitMQ', description: 'Message broker for async communication between microservices.' },
            { name: 'Apache Kafka', description: 'Event streaming platform for high-throughput real-time pipelines.' },
            { name: 'Temporal', description: 'Durable workflow orchestration for long-running business processes.' },
          ],
        },
        {
          name: 'Infrastructure',
          items: [
            { name: 'AWS', description: 'Primary cloud — ECS, Lambda, S3, CloudFront, RDS, SQS, and more.' },
            { name: 'Docker + Compose', description: 'Containerization for local dev and production deployments.' },
            { name: 'Terraform', description: 'Infrastructure as code for reproducible, auditable environments.' },
            { name: 'GitHub Actions', description: 'CI/CD pipelines for testing, building, and deploying.' },
            { name: 'Cloudflare', description: 'CDN, DNS, and edge computing for global distribution.' },
          ],
        },
        {
          name: 'Databases',
          items: [
            { name: 'PostgreSQL', description: 'Primary relational database. Battle-tested and reliable.' },
            { name: 'Redis', description: 'In-memory cache, session store, and queue backend.' },
            { name: 'MongoDB', description: 'Document store for flexible schema use cases.' },
            { name: 'MariaDB', description: 'MySQL-compatible relational DB for legacy and high-availability setups.' },
            { name: 'Cassandra', description: 'Wide-column NoSQL for massive write-heavy distributed workloads.' },
            { name: 'Pinecone / pgvector', description: 'Vector databases for AI embeddings, semantic search, and RAG pipelines.' },
          ],
        },
        {
          name: 'Observability',
          items: [
            { name: 'Grafana + Loki', description: 'Dashboards and log aggregation for distributed systems.' },
            { name: 'OpenTelemetry', description: 'Distributed tracing and metrics collection across services.' },
            { name: 'Datadog', description: 'Full-stack monitoring, APM, and infrastructure observability.' },
            { name: 'Sentry', description: 'Error tracking and performance monitoring with source maps.' },
          ],
        },
        {
          name: 'Daily Tools',
          items: [
            { name: 'Obsidian', description: 'Markdown-based notes, writing, and personal knowledge management.' },
            { name: 'Figma', description: 'UI/UX design, prototyping, and design system management.' },
            { name: 'Linear', description: 'Project management that respects developers. Fast and keyboard-driven.' },
            { name: 'Notion', description: 'Team documentation, wikis, and collaborative knowledge base.' },
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
          name: 'Editor & IDE',
          items: [
            { name: 'VS Code', description: 'Editor principal com keybindings Vim para velocidade e precisao.' },
            { name: 'Claude Code CLI', description: 'Assistente de codigo com IA para tarefas arquiteturais complexas e refatoracao.' },
            { name: 'Cursor', description: 'IDE com IA baseada no VS Code. Usado para prototipagem rapida e exploracao.' },
          ],
        },
        {
          name: 'Terminal',
          items: [
            { name: 'Windows Terminal', description: 'Terminal moderno com abas, paineis e renderizacao GPU.' },
            { name: 'PowerShell 7', description: 'Shell cross-platform com pipelines de dados estruturados.' },
            { name: 'Oh My Posh', description: 'Tema de prompt customizado com status git, versao node e indicadores de contexto.' },
          ],
        },
        {
          name: 'Hardware',
          items: [
            { name: 'Desktop Custom', description: 'Build customizado com Windows 11. Feito para compilacao pesada e workloads paralelos.' },
            { name: 'Ultrawide 34"', description: 'Monitor principal para trabalho focado — codigo de um lado, terminal do outro.' },
            { name: 'Teclado Mecanico', description: 'Teclado mecanico — o feedback tatil mantem o ritmo.' },
            { name: 'Logitech MX Master', description: 'Mouse ergonomico com botoes customizaveis e troca entre dispositivos.' },
          ],
        },
        {
          name: 'Linguagens & Frameworks',
          items: [
            { name: 'TypeScript', description: 'Linguagem principal para backend e frontend. Type-safety em tudo.' },
            { name: 'Go', description: 'Para programacao de sistemas, APIs criticas de performance e ferramentas CLI.' },
            { name: 'Python', description: 'Scripts, automacao e experimentos com ML.' },
            { name: 'React & Next.js', description: 'Framework frontend de escolha para aplicacoes SSR/SSG.' },
            { name: 'NestJS & Fastify', description: 'Frameworks backend para APIs enterprise e microsservicos.' },
          ],
        },
        {
          name: 'Filas & Orquestracao',
          items: [
            { name: 'RabbitMQ', description: 'Message broker para comunicacao assincrona entre microsservicos.' },
            { name: 'Apache Kafka', description: 'Plataforma de streaming de eventos para pipelines real-time de alto throughput.' },
            { name: 'Temporal', description: 'Orquestracao de workflows duraveis para processos de negocio de longa duracao.' },
          ],
        },
        {
          name: 'Infraestrutura',
          items: [
            { name: 'AWS', description: 'Cloud principal — ECS, Lambda, S3, CloudFront, RDS, SQS e mais.' },
            { name: 'Docker + Compose', description: 'Containerizacao para dev local e deploys em producao.' },
            { name: 'Terraform', description: 'Infraestrutura como codigo para ambientes reproduziveis e auditaveis.' },
            { name: 'GitHub Actions', description: 'Pipelines CI/CD para testes, builds e deploys.' },
            { name: 'Cloudflare', description: 'CDN, DNS e edge computing para distribuicao global.' },
          ],
        },
        {
          name: 'Bancos de Dados',
          items: [
            { name: 'PostgreSQL', description: 'Banco relacional principal. Testado em batalha e confiavel.' },
            { name: 'Redis', description: 'Cache em memoria, session store e backend de filas.' },
            { name: 'MongoDB', description: 'Document store para casos de uso com schema flexivel.' },
            { name: 'MariaDB', description: 'Banco relacional compativel com MySQL para setups de alta disponibilidade.' },
            { name: 'Cassandra', description: 'NoSQL wide-column para workloads distribuidos com escrita massiva.' },
            { name: 'Pinecone / pgvector', description: 'Bancos vetoriais para embeddings de IA, busca semantica e pipelines RAG.' },
          ],
        },
        {
          name: 'Observabilidade',
          items: [
            { name: 'Grafana + Loki', description: 'Dashboards e agregacao de logs para sistemas distribuidos.' },
            { name: 'OpenTelemetry', description: 'Tracing distribuido e coleta de metricas entre servicos.' },
            { name: 'Datadog', description: 'Monitoramento full-stack, APM e observabilidade de infraestrutura.' },
            { name: 'Sentry', description: 'Rastreamento de erros e monitoramento de performance com source maps.' },
          ],
        },
        {
          name: 'Ferramentas do Dia a Dia',
          items: [
            { name: 'Obsidian', description: 'Notas em Markdown, escrita e gestao de conhecimento pessoal.' },
            { name: 'Figma', description: 'Design UI/UX, prototipagem e gestao de design system.' },
            { name: 'Linear', description: 'Gestao de projetos que respeita desenvolvedores. Rapido e orientado a teclado.' },
            { name: 'Notion', description: 'Documentacao de time, wikis e base de conhecimento colaborativa.' },
          ],
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export default translations;
