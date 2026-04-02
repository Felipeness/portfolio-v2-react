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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
