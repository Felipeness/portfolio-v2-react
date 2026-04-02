export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  tag: string;
  techs: string[];
  metrics?: { value: string; label: string }[];
  featured: boolean;
  content: {
    context: string;
    challenge: string;
    approach: string;
    results: string;
  };
  locale: 'en' | 'pt-br';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'licitawin',
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
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCase(): CaseStudy | undefined {
  return caseStudies.find((c) => c.featured);
}
