import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface UsesCategory {
  name: string;
  items: { name: string; description: string }[];
}

const categories: UsesCategory[] = [
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
];

export function UsesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.uses-category', stagger: 0.15 });

  return (
    <div ref={ref} className="space-y-16">
      {categories.map((category) => (
        <div key={category.name} className="uses-category">
          <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-border-default transition-colors"
              >
                <h4 className="font-medium text-text-primary mb-1">{item.name}</h4>
                <p className="text-sm text-text-tertiary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
