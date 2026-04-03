import type { Locale } from '~/shared/types/locale';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  tag: string;
  techs: string[];
  metrics?: { value: string; label: string }[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  content: {
    context: string;
    challenge: string;
    approach: string;
    results: string;
  };
  locale: 'en' | 'pt-br';
}

export const caseStudies: CaseStudy[] = [
  // --- English ---
  {
    slug: 'licitawin',
    githubUrl: undefined,
    liveUrl: undefined,
    title: 'LicitaWin — Bidding Intelligence Platform',
    description:
      'Built a real-time bidding intelligence platform processing 50K+ government tenders daily with ML-powered classification and alerting.',
    tag: 'Platform Engineering',
    techs: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'ElasticSearch', 'React', 'AWS'],
    metrics: [
      { value: '50K+', label: 'Tenders/day' },
      { value: '99.9%', label: 'Uptime' },
      { value: '< 200ms', label: 'API P95' },
      { value: '3x', label: 'Revenue growth' },
    ],
    featured: true,
    content: {
      context:
        'Government bidding in Brazil is a $200B+ market with thousands of tenders published daily across hundreds of portals. Companies need real-time intelligence to find relevant opportunities before deadlines.',
      challenge:
        'The existing system was a monolithic Ruby application that could only process ~5K tenders/day with frequent downtime. Data quality was poor due to inconsistent scraping, and the team had no observability into the pipeline.',
      approach:
        'Designed a distributed event-driven architecture with specialized microservices for scraping, classification, deduplication, and alerting. Implemented CQRS with separate read/write models, ElasticSearch for full-text search, and Redis for caching hot data. Built a monitoring dashboard with Grafana for pipeline health.',
      results:
        'Achieved 10x throughput increase (50K+ tenders/day), reduced API P95 latency to under 200ms, and maintained 99.9% uptime over 18 months. The improved data quality and real-time alerts drove 3x revenue growth for the bidding product line.',
    },
    locale: 'en',
  },
  {
    slug: 'micro-frontends',
    githubUrl: 'https://github.com/Felipeness/micro-frontend-nextjs',
    liveUrl: 'https://micro-frontend-nextjs-host.vercel.app',
    title: 'Micro-frontend Architecture at Scale',
    description:
      'Designed and implemented a micro-frontend architecture serving 200+ developers across 15 autonomous teams with independent deploy cycles.',
    tag: 'Architecture',
    techs: ['React', 'Module Federation', 'TypeScript', 'NestJS', 'Webpack 5', 'CDN'],
    metrics: [
      { value: '200+', label: 'Developers' },
      { value: '15', label: 'Teams' },
      { value: '40%', label: 'Faster deploys' },
    ],
    featured: false,
    content: {
      context:
        'A large SaaS platform with 200+ frontend developers needed to break free from a monolithic React application that had become a bottleneck for team autonomy and deployment velocity.',
      challenge:
        'Teams were blocked by merge conflicts, shared state bugs, and a 45-minute build pipeline. Every deploy required coordination across multiple teams, creating a monthly release bottleneck.',
      approach:
        'Implemented Webpack 5 Module Federation with a shell application and autonomous micro-frontends per domain. Created a shared design system as a federated module, established contracts for inter-app communication, and built a CLI tool for scaffolding new micro-frontends.',
      results:
        'Deploy frequency increased from monthly to multiple times per day per team. Build times dropped from 45 minutes to under 5 minutes per micro-frontend. Teams gained full autonomy over their tech choices within established contracts.',
    },
    locale: 'en',
  },
  {
    slug: 'orchestrix',
    githubUrl: 'https://github.com/Felipeness/orchestrix-api',
    title: 'Orchestrix — Workflow Orchestration Engine',
    description:
      'Built a lightweight workflow orchestration engine handling 1M+ daily executions with saga pattern support and automatic rollback.',
    tag: 'Systems Design',
    techs: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
    metrics: [
      { value: '1M+', label: 'Daily executions' },
      { value: '< 50ms', label: 'Orchestration P99' },
      { value: '0', label: 'Data loss events' },
    ],
    featured: false,
    content: {
      context:
        'A fintech platform needed reliable orchestration for complex multi-step financial transactions involving external banking APIs, fraud detection, and compliance checks.',
      challenge:
        'The existing approach used ad-hoc choreography with message queues, leading to orphaned transactions, inconsistent state, and difficulty debugging failed workflows across 12+ microservices.',
      approach:
        'Designed Orchestrix as a central orchestration engine implementing the saga pattern with compensating transactions. Used Go for performance, gRPC for inter-service communication, and Kafka for durable event logging. Built a visual workflow designer and real-time execution monitor.',
      results:
        'Zero data loss events since launch. P99 orchestration latency under 50ms. Reduced incident response time from hours to minutes with the execution monitor. The saga pattern eliminated orphaned transactions entirely.',
    },
    locale: 'en',
  },
  {
    slug: 'yamaha-fit-rh',
    liveUrl: 'https://www.afinidadeatitudeazul.com.br/',
    title: 'Yamaha Fit RH — HR Platform',
    description:
      'Led full-stack development of an HR management platform for Yamaha Motor do Brasil, serving 3,000+ employees with attendance, payroll, and performance modules.',
    tag: 'Full-Stack',
    techs: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Azure'],
    metrics: [
      { value: '3K+', label: 'Employees' },
      { value: '70%', label: 'Process automation' },
      { value: '5', label: 'Modules delivered' },
    ],
    featured: false,
    content: {
      context:
        'Yamaha Motor do Brasil needed a custom HR platform to replace multiple disconnected spreadsheet-based processes for attendance tracking, payroll, performance reviews, and benefits management.',
      challenge:
        'HR processes were manual, error-prone, and scattered across Excel files shared via email. Payroll calculations had frequent errors, and managers had no visibility into team attendance patterns.',
      approach:
        'Built a modular platform with React frontend and NestJS backend. Implemented real-time attendance tracking integrated with biometric hardware, automated payroll calculations with audit trails, and a performance review workflow with 360-degree feedback.',
      results:
        'Automated 70% of manual HR processes. Eliminated payroll calculation errors. Delivered 5 integrated modules (attendance, payroll, performance, benefits, recruitment) serving 3,000+ employees.',
    },
    locale: 'en',
  },
  {
    slug: 'appointment-api',
    githubUrl: 'https://github.com/Felipeness/appointment-api',
    title: 'High-Throughput Appointment API',
    description:
      'Architected a scheduling API handling 100K+ concurrent bookings with optimistic locking, conflict resolution, and multi-timezone support.',
    tag: 'API Design',
    techs: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Bull', 'AWS Lambda'],
    metrics: [
      { value: '100K+', label: 'Concurrent bookings' },
      { value: '< 100ms', label: 'Booking P95' },
      { value: '99.99%', label: 'Consistency' },
    ],
    featured: false,
    content: {
      context:
        'A healthcare SaaS platform needed a booking system that could handle peak loads during open enrollment periods while maintaining strict consistency for appointment slots.',
      challenge:
        'The existing system used pessimistic locking, causing timeouts during peak loads. Double-bookings occurred during race conditions, and timezone handling was inconsistent across regions.',
      approach:
        'Implemented optimistic locking with version vectors for conflict detection. Used Redis for distributed slot reservation with TTL-based expiry. Built a timezone-aware scheduling engine with ICU timezone database. Added Bull queues for async notification dispatch.',
      results:
        'Handled 100K+ concurrent booking attempts during peak enrollment with zero double-bookings. P95 booking latency under 100ms. The timezone engine correctly handled DST transitions across all supported regions.',
    },
    locale: 'en',
  },

  // --- Portuguese ---
  {
    slug: 'licitawin',
    githubUrl: undefined,
    liveUrl: undefined,
    title: 'LicitaWin — Plataforma de Inteligencia em Licitacoes',
    description:
      'Construi uma plataforma de inteligencia em licitacoes em tempo real processando 50K+ editais governamentais por dia com classificacao ML e alertas.',
    tag: 'Engenharia de Plataforma',
    techs: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'ElasticSearch', 'React', 'AWS'],
    metrics: [
      { value: '50K+', label: 'Editais/dia' },
      { value: '99.9%', label: 'Uptime' },
      { value: '< 200ms', label: 'API P95' },
      { value: '3x', label: 'Crescimento de receita' },
    ],
    featured: true,
    content: {
      context:
        'Licitacoes governamentais no Brasil representam um mercado de R$1T+ com milhares de editais publicados diariamente em centenas de portais. Empresas precisam de inteligencia em tempo real para encontrar oportunidades relevantes antes dos prazos.',
      challenge:
        'O sistema existente era uma aplicacao monolitica em Ruby que processava apenas ~5K editais/dia com downtime frequente. A qualidade dos dados era ruim devido a scraping inconsistente, e o time nao tinha observabilidade no pipeline.',
      approach:
        'Projetei uma arquitetura event-driven distribuida com microsservicos especializados para scraping, classificacao, deduplicacao e alertas. Implementei CQRS com modelos separados de leitura/escrita, ElasticSearch para busca full-text e Redis para cache de dados quentes. Construi um dashboard de monitoramento com Grafana para saude do pipeline.',
      results:
        'Alcancamos aumento de 10x no throughput (50K+ editais/dia), reducao da latencia P95 da API para menos de 200ms e manutencao de 99.9% de uptime por 18 meses. A melhoria na qualidade dos dados e alertas em tempo real impulsionaram 3x de crescimento de receita na linha de produtos de licitacao.',
    },
    locale: 'pt-br',
  },
  {
    slug: 'micro-frontends',
    githubUrl: 'https://github.com/Felipeness/micro-frontend-nextjs',
    liveUrl: 'https://micro-frontend-nextjs-host.vercel.app',
    title: 'Arquitetura Micro-frontend em Escala',
    description:
      'Projetei e implementei uma arquitetura micro-frontend servindo 200+ desenvolvedores em 15 times autonomos com ciclos de deploy independentes.',
    tag: 'Arquitetura',
    techs: ['React', 'Module Federation', 'TypeScript', 'NestJS', 'Webpack 5', 'CDN'],
    metrics: [
      { value: '200+', label: 'Desenvolvedores' },
      { value: '15', label: 'Times' },
      { value: '40%', label: 'Deploys mais rapidos' },
    ],
    featured: false,
    content: {
      context:
        'Uma grande plataforma SaaS com 200+ desenvolvedores frontend precisava se libertar de uma aplicacao React monolitica que se tornara um gargalo para a autonomia dos times e velocidade de deploy.',
      challenge:
        'Times estavam bloqueados por conflitos de merge, bugs de estado compartilhado e um pipeline de build de 45 minutos. Todo deploy exigia coordenacao entre multiplos times, criando um gargalo de release mensal.',
      approach:
        'Implementei Webpack 5 Module Federation com uma aplicacao shell e micro-frontends autonomos por dominio. Criei um design system compartilhado como modulo federado, estabeleci contratos para comunicacao entre apps e construi uma CLI para scaffolding de novos micro-frontends.',
      results:
        'Frequencia de deploy aumentou de mensal para multiplas vezes por dia por time. Tempos de build cairam de 45 minutos para menos de 5 minutos por micro-frontend. Times ganharam total autonomia sobre suas escolhas tecnologicas dentro dos contratos estabelecidos.',
    },
    locale: 'pt-br',
  },
  {
    slug: 'orchestrix',
    githubUrl: 'https://github.com/Felipeness/orchestrix-api',
    title: 'Orchestrix — Motor de Orquestracao de Workflows',
    description:
      'Construi um motor leve de orquestracao de workflows lidando com 1M+ execucoes diarias com suporte ao padrao saga e rollback automatico.',
    tag: 'Design de Sistemas',
    techs: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
    metrics: [
      { value: '1M+', label: 'Execucoes diarias' },
      { value: '< 50ms', label: 'Orquestracao P99' },
      { value: '0', label: 'Eventos de perda de dados' },
    ],
    featured: false,
    content: {
      context:
        'Uma plataforma fintech precisava de orquestracao confiavel para transacoes financeiras complexas envolvendo APIs bancarias externas, deteccao de fraude e checagens de compliance.',
      challenge:
        'A abordagem existente usava coreografia ad-hoc com filas de mensagens, levando a transacoes orfas, estado inconsistente e dificuldade de debugging em workflows falhados atraves de 12+ microsservicos.',
      approach:
        'Projetei o Orchestrix como um motor de orquestracao central implementando o padrao saga com transacoes compensatorias. Usei Go para performance, gRPC para comunicacao entre servicos e Kafka para logging duravel de eventos. Construi um designer visual de workflow e monitor de execucao em tempo real.',
      results:
        'Zero eventos de perda de dados desde o lancamento. Latencia P99 de orquestracao abaixo de 50ms. Reduzi o tempo de resposta a incidentes de horas para minutos com o monitor de execucao. O padrao saga eliminou transacoes orfas completamente.',
    },
    locale: 'pt-br',
  },
  {
    slug: 'yamaha-fit-rh',
    liveUrl: 'https://www.afinidadeatitudeazul.com.br/',
    title: 'Yamaha Fit RH — Plataforma de RH',
    description:
      'Liderei o desenvolvimento full-stack de uma plataforma de gestao de RH para a Yamaha Motor do Brasil, servindo 3.000+ funcionarios com modulos de ponto, folha e performance.',
    tag: 'Full-Stack',
    techs: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Azure'],
    metrics: [
      { value: '3K+', label: 'Funcionarios' },
      { value: '70%', label: 'Automacao de processos' },
      { value: '5', label: 'Modulos entregues' },
    ],
    featured: false,
    content: {
      context:
        'A Yamaha Motor do Brasil precisava de uma plataforma de RH customizada para substituir multiplos processos desconectados baseados em planilhas para controle de ponto, folha de pagamento, avaliacoes de performance e gestao de beneficios.',
      challenge:
        'Processos de RH eram manuais, propensos a erros e espalhados em arquivos Excel compartilhados por email. Calculos de folha tinham erros frequentes e gestores nao tinham visibilidade nos padroes de frequencia do time.',
      approach:
        'Construi uma plataforma modular com frontend React e backend NestJS. Implementei controle de ponto em tempo real integrado com hardware biometrico, calculos automatizados de folha com trilhas de auditoria e um workflow de avaliacao de performance com feedback 360 graus.',
      results:
        'Automatizamos 70% dos processos manuais de RH. Eliminamos erros de calculo de folha. Entregamos 5 modulos integrados (ponto, folha, performance, beneficios, recrutamento) servindo 3.000+ funcionarios.',
    },
    locale: 'pt-br',
  },
  {
    slug: 'appointment-api',
    githubUrl: 'https://github.com/Felipeness/appointment-api',
    title: 'API de Agendamento de Alta Vazao',
    description:
      'Arquitetei uma API de agendamento lidando com 100K+ reservas concorrentes com locking otimista, resolucao de conflitos e suporte multi-fuso horario.',
    tag: 'Design de API',
    techs: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Bull', 'AWS Lambda'],
    metrics: [
      { value: '100K+', label: 'Reservas concorrentes' },
      { value: '< 100ms', label: 'Reserva P95' },
      { value: '99.99%', label: 'Consistencia' },
    ],
    featured: false,
    content: {
      context:
        'Uma plataforma SaaS de saude precisava de um sistema de agendamento que pudesse lidar com picos de carga durante periodos de matricula aberta, mantendo consistencia estrita para slots de consulta.',
      challenge:
        'O sistema existente usava locking pessimista, causando timeouts durante picos de carga. Double-bookings ocorriam durante race conditions, e o tratamento de fuso horario era inconsistente entre regioes.',
      approach:
        'Implementei locking otimista com version vectors para deteccao de conflitos. Usei Redis para reserva distribuida de slots com expiracao baseada em TTL. Construi um motor de agendamento timezone-aware com banco de dados ICU de fusos horarios. Adicionei filas Bull para despacho assincrono de notificacoes.',
      results:
        'Lidamos com 100K+ tentativas de reserva concorrentes durante picos de matricula com zero double-bookings. Latencia P95 de reserva abaixo de 100ms. O motor de fuso horario tratou corretamente transicoes de horario de verao em todas as regioes suportadas.',
    },
    locale: 'pt-br',
  },
];

export function getCaseBySlug(slug: string, locale?: Locale): CaseStudy | undefined {
  if (locale) {
    const localeCase = caseStudies.find((c) => c.slug === slug && c.locale === locale);
    if (localeCase) return localeCase;
  }
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCase(): CaseStudy | undefined {
  return caseStudies.find((c) => c.featured);
}
