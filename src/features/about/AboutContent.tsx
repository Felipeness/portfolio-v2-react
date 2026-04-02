import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import { ImpactMetrics } from './ImpactMetrics';

export function AboutContent() {
  const bioRef = useRef<HTMLDivElement>(null);
  useScrollReveal(bioRef);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div ref={bioRef}>
        <div className="prose">
          <p>
            I'm Felipe Soares, a Staff Engineer and Solution Architect with 10+ years
            of experience building high-impact systems across fintech, SaaS, and enterprise
            domains.
          </p>
          <p>
            My journey started with a fascination for how complex systems emerge from
            simple rules. That curiosity led me from building my first PHP websites to
            architecting distributed platforms serving millions of users.
          </p>
          <p>
            Today, I focus on the intersection of systems design, developer experience,
            and engineering culture. I believe the best architectures aren't just
            technically sound — they amplify the team's ability to deliver value.
          </p>
          <p>
            I'm the author of "The Whole and the Part," a book that applies holonomic
            theory to software architecture. I contribute to open-source projects
            including Node.js, Next.js, and React, and I'm passionate about mentoring
            the next generation of systems thinkers.
          </p>
          <p>
            When I'm not writing code or prose, you'll find me exploring philosophy,
            playing guitar, or hiking with my dog.
          </p>
        </div>
      </div>

      <div>
        <ImpactMetrics />
      </div>
    </div>
  );
}
