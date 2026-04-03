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
    title: 'Saga vs. Coreografia: Escolhendo o Padrao Certo',
    description:
      'Um mergulho profundo nos padroes de orquestracao e coreografia para transacoes distribuidas. Quando usar cada um, trade-offs e exemplos reais.',
    date: '2025-11-15',
    tags: ['Arquitetura', 'Sistemas Distribuidos', 'Padroes'],
    readingTime: '12 min',
    content: `## O Problema com Transacoes Distribuidas

Quando voce divide um monolito em microsservicos, perde o luxo de transacoes ACID abrangendo multiplas tabelas. Uma unica operacao de negocio — como fazer um pedido — agora envolve multiplos servicos, cada um com seu proprio banco de dados.

A questao nao e se voce precisa de um padrao para isso. Voce precisa. A questao e qual padrao se encaixa no seu contexto.

## Orquestracao (Padrao Saga)

Na orquestracao, um coordenador central (o orquestrador) diz a cada servico o que fazer e quando. Pense nisso como um maestro liderando uma orquestra.

O orquestrador mantem o estado do workflow, decide o proximo passo baseado na resposta de cada servico, e lida com transacoes compensatorias quando algo falha.

**Quando escolher orquestracao:**
- Workflows complexos com muitos passos e logica condicional
- Voce precisa de visibilidade no estado geral do processo
- A logica de negocio requer tomada de decisao centralizada
- Voce quer debugging e monitoramento mais faceis

## Coreografia

Na coreografia, servicos reagem a eventos de outros servicos. Nao ha coordenador central — cada servico sabe o que fazer quando recebe certos eventos. Pense nisso como um conjunto de jazz onde os musicos escutam uns aos outros.

**Quando escolher coreografia:**
- Workflows simples e lineares (A -> B -> C)
- Times sao autonomos e dono de seus dominios de ponta a ponta
- Voce quer acoplamento frouxo entre servicos
- O workflow dificilmente mudara com frequencia

## A Abordagem Hibrida

Na pratica, a maioria dos sistemas usa ambos os padroes. Use coreografia para reacoes simples a eventos (usuario cadastrado -> enviar email de boas-vindas) e orquestracao para processos de negocio complexos (colocacao de pedidos, processamento de pagamentos).

## Insight Principal

A escolha nao e sobre superioridade tecnica — ambos os padroes funcionam. E sobre carga cognitiva. Escolha o padrao que torna o comportamento do sistema mais facil de entender, debugar e evoluir para seu time.`,
    locale: 'pt-br',
  },
  {
    slug: 'holonomic-architecture',
    title: 'Arquitetura Holonomica: Software como Sistemas Vivos',
    description:
      'Aplicando a teoria do holon de Arthur Koestler a arquitetura de software. Como sistemas autocontidos criam plataformas resilientes e evoluiveis.',
    date: '2025-09-20',
    tags: ['Arquitetura', 'Holonomico', 'Pensamento Sistemico'],
    readingTime: '15 min',
    content: `## Alem dos Microsservicos

Microsservicos resolveram o problema de acoplamento de deploy, mas criaram um novo: complexidade cognitiva. Quando toda feature requer orquestrar 12 servicos, voce nao reduziu a complexidade — voce a distribuiu.

A arquitetura holonomica oferece uma lente diferente. Inspirada no conceito de "holon" de Arthur Koestler — algo que e simultaneamente um todo e uma parte — ela propoe que bons sistemas de software sao compostos de unidades autocontidas que sao completas em si mesmas, mas contribuem para um todo maior.

## O Holon no Software

Um holon de software e um Self-Contained System (SCS): ele possui sua UI, logica de negocio e dados. Pode funcionar independentemente, mas se integra a plataforma maior atraves de contratos bem definidos.

Isso nao e novo — e a convergencia dos bounded contexts do Domain-Driven Design, a arquitetura Self-Contained Systems e padroes de micro-frontend. O que o pensamento holonomico adiciona e o framework filosofico de por que isso funciona.

## O Efeito Janus

Koestler descreveu holons como tendo uma "face de Janus" — olhando para dentro, para sua propria completude, e para fora, para seu papel no sistema maior. No software, isso significa que cada sistema deve:

1. **Olhar para dentro**: Ser totalmente funcional por conta propria. Possuir seu deploy, dados e experiencia do usuario.
2. **Olhar para fora**: Participar da plataforma maior atraves de eventos, contratos compartilhados e padroes de integracao.

## Implicacoes Praticas

Quando voce projeta sistemas como holons, obtem limites naturais de time (alinhamento com a Lei de Conway), deployabilidade independente e degradacao graceful. Se um holon falha, os outros continuam funcionando.

O insight principal e que autonomia e integracao nao sao opostos — sao propriedades complementares de sistemas bem projetados.`,
    locale: 'pt-br',
  },
  {
    slug: 'parse-dont-validate',
    title: 'Parse, Nao Valide: Fronteiras Type-Safe',
    description:
      'Como empurrar a validacao para as bordas do seu sistema e confiar nos seus tipos internamente. Um guia pratico do padrao parse-don\'t-validate.',
    date: '2025-07-10',
    tags: ['TypeScript', 'Type Safety', 'Padroes'],
    readingTime: '8 min',
    content: `## O Problema com Validacao

A maioria dos codebases valida dados em toda camada. O controller valida, o service valida novamente, o repository adiciona suas proprias checagens. Isso cria programacao defensiva que obscurece a logica de negocio.

A alternativa: parse seus dados uma vez na fronteira, transforme-os em um objeto de dominio fortemente tipado, e confie nos seus tipos daquele ponto em diante.

## Parse na Fronteira

Quando dados entram no seu sistema (requisicao HTTP, mensagem de fila, upload de arquivo), faca o parse imediatamente em um tipo de dominio:

Em vez de passar um objeto plano e checar \`if (user.email)\` em todo lugar, faca o parse da requisicao em um tipo \`ValidUser\` no nivel do controller. A partir desse ponto, toda funcao que recebe um \`ValidUser\` sabe que os dados sao validos por construcao.

## Branded Types

Para seguranca extra, use branded types (tambem chamado de newtype pattern) para distinguir entre strings semanticamente diferentes:

Um \`UserId\` nao e um \`PostId\`, mesmo que ambos sejam strings. Branded types fazem essa distincao no nivel do tipo, prevenindo uma categoria de bugs onde voce acidentalmente passa o ID errado.

## O Padrao Funil

Pense no seu sistema como um funil: largo e permissivo no topo (input cru), estreito e rigoroso no fundo (tipos de dominio). Cada camada estreita o tipo, e uma vez que os dados passam, sao confiaveis.

Isso reduz a carga cognitiva dramaticamente — voce nunca precisa se perguntar "esse valor e valido?" porque o sistema de tipos garante.`,
    locale: 'pt-br',
  },
  {
    slug: 'observability-first',
    title: 'Desenvolvimento Observability-First',
    description:
      'Por que adiciono logging estruturado, tracing e metricas antes de escrever logica de negocio. Um framework pratico para sistemas observaveis.',
    date: '2025-05-22',
    tags: ['Observabilidade', 'DevOps', 'Boas Praticas'],
    readingTime: '10 min',
    content: `## O Custo da Observabilidade

A maioria dos times trata observabilidade como algo secundario — algo que voce adiciona quando as coisas quebram em producao. Mas retrofitar observabilidade em codigo existente e caro e geralmente incompleto.

E se voce comecasse com observabilidade?

## O Framework

Antes de escrever qualquer logica de negocio para um novo servico, configuro tres coisas:

1. **Logging estruturado** com correlation IDs, nomes de operacao e rastreamento de duracao
2. **Tracing distribuido** com OpenTelemetry, propagando contexto de trace entre fronteiras de servico
3. **Metricas de negocio** — nao apenas metricas de sistema (CPU, memoria), mas metricas de dominio (pedidos processados, pagamentos falhados, usuarios onboarded)

## Log Levels como Contratos

Log levels nao sao arbitrarios — sao contratos com seu time de operacoes:

- **ERROR**: Aciona alguem. Producao esta quebrada, impacto no cliente.
- **WARN**: Investigar eventualmente. Algo inesperado, mas tratado.
- **INFO**: Evento de negocio ocorreu. Trilha de auditoria.
- **DEBUG**: Contexto do desenvolvedor. Desabilitado em producao.

Quando todos no time tratam log levels como contratos, seus alertas se tornam confiaveis e seus dashboards se tornam significativos.

## O Retorno

Com observabilidade construida desde o dia um, debugging se torna investigacao em vez de adivinhacao. Voce pode responder perguntas como "por que o pagamento desse usuario falhou?" seguindo um unico trace ID atraves dos logs de todos os servicos envolvidos.

O investimento e pequeno (algumas horas de setup por servico) e o retorno e enorme (horas economizadas por incidente, desenvolvimento de features mais rapido com confianca).`,
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
