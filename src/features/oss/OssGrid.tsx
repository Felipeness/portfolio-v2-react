import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface OssProject {
  name: string;
  description: string;
  role: string;
  url: string;
  stars?: string;
}

const projects: OssProject[] = [
  {
    name: 'Node.js',
    description: 'Contributing to the Node.js runtime — API improvements, test infrastructure, and documentation.',
    role: 'Contributor',
    url: 'https://github.com/nodejs/node',
    stars: '110K+',
  },
  {
    name: 'Next.js',
    description: 'Performance optimizations and bug fixes for the React framework.',
    role: 'Contributor',
    url: 'https://github.com/vercel/next.js',
    stars: '130K+',
  },
  {
    name: 'React',
    description: 'Documentation improvements and compiler feedback for the UI library.',
    role: 'Contributor',
    url: 'https://github.com/facebook/react',
    stars: '230K+',
  },
  {
    name: 'Prisma',
    description: 'TypeScript ORM contributions — query engine improvements and type generation.',
    role: 'Contributor',
    url: 'https://github.com/prisma/prisma',
    stars: '40K+',
  },
  {
    name: 'opensource-guide',
    description: 'Helping maintainers and contributors navigate open source effectively.',
    role: 'Contributor',
    url: 'https://github.com/github/opensource.guide',
    stars: '14K+',
  },
  {
    name: 'otel-dev',
    description: 'Developer-friendly OpenTelemetry setup for Node.js microservices.',
    role: 'Author',
    url: 'https://github.com/felipebarcelos/otel-dev',
  },
];

export function OssGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.oss-card', stagger: 0.1 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="oss-card group block p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-border-default transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-bold text-text-primary group-hover:text-orange transition-colors">
              {project.name}
            </h3>
            {project.stars && (
              <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                {project.stars}
              </span>
            )}
          </div>
          <p className="text-sm text-text-tertiary leading-relaxed mb-4">
            {project.description}
          </p>
          <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono bg-bg-elevated border border-border-subtle text-text-muted">
            {project.role}
          </span>
        </a>
      ))}
    </div>
  );
}
