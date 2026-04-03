import type { Locale } from '~/shared/types/locale';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
  locale: 'en' | 'pt-br';
}

export const blogPosts: BlogPost[] = [
  // --- English ---
  {
    slug: 'saga-vs-choreography',
    title: 'Saga vs. Choreography: Choosing the Right Pattern',
    description:
      'A deep dive into orchestration and choreography patterns for distributed transactions. When to use each, trade-offs, and real-world examples.',
    date: '2025-11-15',
    tags: ['Architecture', 'Distributed Systems', 'Patterns'],
    readingTime: '12 min',
    content: `## The Problem with Distributed Transactions

When you split a monolith into microservices, you lose the luxury of ACID transactions spanning multiple tables. A single business operation — like placing an order — now involves multiple services, each with its own database.

The question isn't whether you need a pattern for this. You do. The question is which pattern fits your context.

## Orchestration (Saga Pattern)

In orchestration, a central coordinator (the orchestrator) tells each service what to do and when. Think of it as a conductor leading an orchestra.

The orchestrator maintains the workflow state, decides the next step based on each service's response, and handles compensating transactions when something fails.

**When to choose orchestration:**
- Complex workflows with many steps and conditional logic
- You need visibility into the overall process state
- Business logic requires centralized decision-making
- You want easier debugging and monitoring

## Choreography

In choreography, services react to events from other services. There's no central coordinator — each service knows what to do when it receives certain events. Think of it as a jazz ensemble where musicians listen to each other.

**When to choose choreography:**
- Simple, linear workflows (A → B → C)
- Teams are autonomous and own their domains end-to-end
- You want loose coupling between services
- The workflow is unlikely to change frequently

## The Hybrid Approach

In practice, most systems use both patterns. Use choreography for simple event reactions (user signed up → send welcome email) and orchestration for complex business processes (order placement, payment processing).

## Key Insight

The choice isn't about technical superiority — both patterns work. It's about cognitive load. Choose the pattern that makes the system's behavior easiest to understand, debug, and evolve for your team.`,
    locale: 'en',
  },
  {
    slug: 'holonomic-architecture',
    title: 'Holonomic Architecture: Software as Living Systems',
    description:
      'Applying Arthur Koestler\'s holon theory to software architecture. How self-contained systems create resilient, evolvable platforms.',
    date: '2025-09-20',
    tags: ['Architecture', 'Holonomic', 'Systems Thinking'],
    readingTime: '15 min',
    content: `## Beyond Microservices

Microservices solved the deployment coupling problem but created a new one: cognitive complexity. When every feature requires orchestrating 12 services, you haven't reduced complexity — you've distributed it.

Holonomic architecture offers a different lens. Inspired by Arthur Koestler's concept of the "holon" — something that is simultaneously a whole and a part — it proposes that good software systems are composed of self-contained units that are complete in themselves yet contribute to a larger whole.

## The Holon in Software

A software holon is a Self-Contained System (SCS): it owns its UI, business logic, and data. It can function independently yet integrates with the larger platform through well-defined contracts.

This isn't new — it's the convergence of Domain-Driven Design's bounded contexts, the Self-Contained Systems architecture, and micro-frontend patterns. What holonomic thinking adds is the philosophical framework for why this works.

## The Janus Effect

Koestler described holons as having a "Janus face" — looking inward at their own completeness and outward at their role in the larger system. In software, this means each system must:

1. **Look inward**: Be fully functional on its own. Own its deployment, data, and user experience.
2. **Look outward**: Participate in the larger platform through events, shared contracts, and integration patterns.

## Practical Implications

When you design systems as holons, you get natural team boundaries (Conway's Law alignment), independent deployability, and graceful degradation. If one holon fails, the others continue functioning.

The key insight is that autonomy and integration aren't opposites — they're complementary properties of well-designed systems.`,
    locale: 'en',
  },
  {
    slug: 'parse-dont-validate',
    title: 'Parse, Don\'t Validate: Type-Safe Boundaries',
    description:
      'How to push validation to the edges of your system and trust your types internally. A practical guide to the parse-don\'t-validate pattern.',
    date: '2025-07-10',
    tags: ['TypeScript', 'Type Safety', 'Patterns'],
    readingTime: '8 min',
    content: `## The Problem with Validation

Most codebases validate data at every layer. The controller validates, the service validates again, the repository adds its own checks. This creates defensive programming that obscures business logic.

The alternative: parse your data once at the boundary, transform it into a strongly-typed domain object, and trust your types from that point forward.

## Parse at the Boundary

When data enters your system (HTTP request, queue message, file upload), parse it immediately into a domain type:

Instead of passing around a plain object and checking \`if (user.email)\` everywhere, parse the request into a \`ValidUser\` type at the controller level. From that point on, every function that receives a \`ValidUser\` knows the data is valid by construction.

## Branded Types

For extra safety, use branded types (also called newtype pattern) to distinguish between semantically different strings:

A \`UserId\` is not a \`PostId\`, even though both are strings. Branded types make this distinction at the type level, preventing a category of bugs where you accidentally pass the wrong ID.

## The Funnel Pattern

Think of your system as a funnel: wide and permissive at the top (raw input), narrow and strict at the bottom (domain types). Each layer narrows the type, and once data passes through, it's trusted.

This reduces cognitive load dramatically — you never have to wonder "is this value valid?" because the type system guarantees it.`,
    locale: 'en',
  },
  {
    slug: 'observability-first',
    title: 'Observability-First Development',
    description:
      'Why I add structured logging, tracing, and metrics before writing business logic. A practical framework for observable systems.',
    date: '2025-05-22',
    tags: ['Observability', 'DevOps', 'Best Practices'],
    readingTime: '10 min',
    content: `## The Observability Tax

Most teams treat observability as an afterthought — something you add when things break in production. But retrofitting observability into existing code is expensive and usually incomplete.

What if you started with observability?

## The Framework

Before writing any business logic for a new service, I set up three things:

1. **Structured logging** with correlation IDs, operation names, and duration tracking
2. **Distributed tracing** with OpenTelemetry, propagating trace context across service boundaries
3. **Business metrics** — not just system metrics (CPU, memory) but domain metrics (orders processed, payments failed, users onboarded)

## Log Levels as Contracts

Log levels aren't arbitrary — they're contracts with your operations team:

- **ERROR**: Pages someone. Production is broken, customer impact.
- **WARN**: Investigate eventually. Something unexpected but handled.
- **INFO**: Business event occurred. Audit trail.
- **DEBUG**: Developer context. Disabled in production.

When everyone on the team treats log levels as contracts, your alerting becomes reliable and your dashboards become meaningful.

## The Payoff

With observability built in from day one, debugging becomes investigation rather than guesswork. You can answer questions like "why did this user's payment fail?" by following a single trace ID through logs across every service involved.

The investment is small (a few hours of setup per service) and the return is enormous (hours saved per incident, faster feature development with confidence).`,
    locale: 'en',
  },

  // --- Portuguese ---
  {
    slug: 'saga-vs-choreography',
    title: 'Saga vs. Coreografia: Escolhendo o Padrão Certo',
    description:
      'Um mergulho profundo nos padrões de orquestração e coreografia para transações distribuídas. Quando usar cada um, trade-offs e exemplos reais.',
    date: '2025-11-15',
    tags: ['Arquitetura', 'Sistemas Distribuídos', 'Padrões'],
    readingTime: '12 min',
    content: `## O Problema com Transações Distribuídas

Quando você divide um monolito em microsserviços, perde o luxo de transações ACID abrangendo múltiplas tabelas. Uma única operação de negócio — como fazer um pedido — agora envolve múltiplos serviços, cada um com seu próprio banco de dados.

A questão não é se você precisa de um padrão para isso. Você precisa. A questão é qual padrão se encaixa no seu contexto.

## Orquestração (Padrão Saga)

Na orquestração, um coordenador central (o orquestrador) diz a cada serviço o que fazer e quando. Pense nisso como um maestro liderando uma orquestra.

O orquestrador mantém o estado do workflow, decide o próximo passo baseado na resposta de cada serviço e lida com transações compensatórias quando algo falha.

**Quando escolher orquestração:**
- Workflows complexos com muitos passos e lógica condicional
- Você precisa de visibilidade no estado geral do processo
- A lógica de negócio requer tomada de decisão centralizada
- Você quer debugging e monitoramento mais fáceis

## Coreografia

Na coreografia, serviços reagem a eventos de outros serviços. Não há coordenador central — cada serviço sabe o que fazer quando recebe certos eventos. Pense nisso como um conjunto de jazz onde os músicos escutam uns aos outros.

**Quando escolher coreografia:**
- Workflows simples e lineares (A -> B -> C)
- Times são autônomos e donos de seus domínios de ponta a ponta
- Você quer acoplamento frouxo entre serviços
- O workflow dificilmente mudará com frequência

## A Abordagem Híbrida

Na prática, a maioria dos sistemas usa ambos os padrões. Use coreografia para reações simples a eventos (usuário cadastrado -> enviar email de boas-vindas) e orquestração para processos de negócio complexos (colocação de pedidos, processamento de pagamentos).

## Insight Principal

A escolha não é sobre superioridade técnica — ambos os padrões funcionam. É sobre carga cognitiva. Escolha o padrão que torna o comportamento do sistema mais fácil de entender, debugar e evoluir para seu time.`,
    locale: 'pt-br',
  },
  {
    slug: 'holonomic-architecture',
    title: 'Arquitetura Holonômica: Software como Sistemas Vivos',
    description:
      'Aplicando a teoria do holon de Arthur Koestler à arquitetura de software. Como sistemas autocontidos criam plataformas resilientes e evoluíveis.',
    date: '2025-09-20',
    tags: ['Arquitetura', 'Holonômico', 'Pensamento Sistêmico'],
    readingTime: '15 min',
    content: `## Além dos Microsserviços

Microsserviços resolveram o problema de acoplamento de deploy, mas criaram um novo: complexidade cognitiva. Quando toda feature requer orquestrar 12 serviços, você não reduziu a complexidade — você a distribuiu.

A arquitetura holonômica oferece uma lente diferente. Inspirada no conceito de "holon" de Arthur Koestler — algo que é simultaneamente um todo e uma parte — ela propõe que bons sistemas de software são compostos de unidades autocontidas que são completas em si mesmas, mas contribuem para um todo maior.

## O Holon no Software

Um holon de software é um Self-Contained System (SCS): ele possui sua UI, lógica de negócio e dados. Pode funcionar independentemente, mas se integra à plataforma maior através de contratos bem definidos.

Isso não é novo — é a convergência dos bounded contexts do Domain-Driven Design, a arquitetura Self-Contained Systems e padrões de micro-frontend. O que o pensamento holonômico adiciona é o framework filosófico de por que isso funciona.

## O Efeito Janus

Koestler descreveu holons como tendo uma "face de Janus" — olhando para dentro, para sua própria completude, e para fora, para seu papel no sistema maior. No software, isso significa que cada sistema deve:

1. **Olhar para dentro**: Ser totalmente funcional por conta própria. Possuir seu deploy, dados e experiência do usuário.
2. **Olhar para fora**: Participar da plataforma maior através de eventos, contratos compartilhados e padrões de integração.

## Implicações Práticas

Quando você projeta sistemas como holons, obtém limites naturais de time (alinhamento com a Lei de Conway), deployabilidade independente e degradação graceful. Se um holon falha, os outros continuam funcionando.

O insight principal é que autonomia e integração não são opostos — são propriedades complementares de sistemas bem projetados.`,
    locale: 'pt-br',
  },
  {
    slug: 'parse-dont-validate',
    title: 'Parse, Não Valide: Fronteiras Type-Safe',
    description:
      'Como empurrar a validação para as bordas do seu sistema e confiar nos seus tipos internamente. Um guia prático do padrão parse-don\'t-validate.',
    date: '2025-07-10',
    tags: ['TypeScript', 'Type Safety', 'Padrões'],
    readingTime: '8 min',
    content: `## O Problema com Validação

A maioria dos codebases valida dados em toda camada. O controller valida, o service valida novamente, o repository adiciona suas próprias checagens. Isso cria programação defensiva que obscurece a lógica de negócio.

A alternativa: faça o parse dos seus dados uma vez na fronteira, transforme-os em um objeto de domínio fortemente tipado e confie nos seus tipos daquele ponto em diante.

## Parse na Fronteira

Quando dados entram no seu sistema (requisição HTTP, mensagem de fila, upload de arquivo), faça o parse imediatamente em um tipo de domínio:

Em vez de passar um objeto plano e checar \`if (user.email)\` em todo lugar, faça o parse da requisição em um tipo \`ValidUser\` no nível do controller. A partir desse ponto, toda função que recebe um \`ValidUser\` sabe que os dados são válidos por construção.

## Branded Types

Para segurança extra, use branded types (também chamado de newtype pattern) para distinguir entre strings semanticamente diferentes:

Um \`UserId\` não é um \`PostId\`, mesmo que ambos sejam strings. Branded types fazem essa distinção no nível do tipo, prevenindo uma categoria de bugs onde você acidentalmente passa o ID errado.

## O Padrão Funil

Pense no seu sistema como um funil: largo e permissivo no topo (input cru), estreito e rigoroso no fundo (tipos de domínio). Cada camada estreita o tipo, e uma vez que os dados passam, são confiáveis.

Isso reduz a carga cognitiva dramaticamente — você nunca precisa se perguntar "esse valor é válido?" porque o sistema de tipos garante.`,
    locale: 'pt-br',
  },
  {
    slug: 'observability-first',
    title: 'Desenvolvimento Observability-First',
    description:
      'Por que adiciono logging estruturado, tracing e métricas antes de escrever lógica de negócio. Um framework prático para sistemas observáveis.',
    date: '2025-05-22',
    tags: ['Observabilidade', 'DevOps', 'Boas Práticas'],
    readingTime: '10 min',
    content: `## O Custo da Observabilidade

A maioria dos times trata observabilidade como algo secundário — algo que você adiciona quando as coisas quebram em produção. Mas retrofitar observabilidade em código existente é caro e geralmente incompleto.

E se você começasse com observabilidade?

## O Framework

Antes de escrever qualquer lógica de negócio para um novo serviço, configuro três coisas:

1. **Logging estruturado** com correlation IDs, nomes de operação e rastreamento de duração
2. **Tracing distribuído** com OpenTelemetry, propagando contexto de trace entre fronteiras de serviço
3. **Métricas de negócio** — não apenas métricas de sistema (CPU, memória), mas métricas de domínio (pedidos processados, pagamentos falhados, usuários onboarded)

## Log Levels como Contratos

Log levels não são arbitrários — são contratos com seu time de operações:

- **ERROR**: Aciona alguém. Produção está quebrada, impacto no cliente.
- **WARN**: Investigar eventualmente. Algo inesperado, mas tratado.
- **INFO**: Evento de negócio ocorreu. Trilha de auditoria.
- **DEBUG**: Contexto do desenvolvedor. Desabilitado em produção.

Quando todos no time tratam log levels como contratos, seus alertas se tornam confiáveis e seus dashboards se tornam significativos.

## O Retorno

Com observabilidade construída desde o dia um, debugging se torna investigação em vez de adivinhação. Você pode responder perguntas como "por que o pagamento desse usuário falhou?" seguindo um único trace ID através dos logs de todos os serviços envolvidos.

O investimento é pequeno (algumas horas de setup por serviço) e o retorno é enorme (horas economizadas por incidente, desenvolvimento de features mais rápido com confiança).`,
    locale: 'pt-br',
  },
];

export function getPostBySlug(slug: string, locale?: Locale): BlogPost | undefined {
  if (locale) {
    const localePost = blogPosts.find((p) => p.slug === slug && p.locale === locale);
    if (localePost) return localePost;
  }
  return blogPosts.find((p) => p.slug === slug);
}
