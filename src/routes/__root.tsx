/// <reference types="vite/client" />
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import appCss from '~/styles/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Felipe Soares | Staff Engineer & Solution Architect' },
      {
        name: 'description',
        content:
          'Portfolio of Felipe Soares — Staff Engineer & Solution Architect building high-impact distributed systems, developer platforms, and engineering cultures.',
      },
      { property: 'og:title', content: 'Felipe Soares | Staff Engineer & Solution Architect' },
      {
        property: 'og:description',
        content: 'Building systems that scale with purpose. 10+ years of distributed systems, developer platforms, and engineering culture.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Felipe Soares',
          jobTitle: 'Staff Engineer & Solution Architect',
          url: 'https://felipeness.dev',
          sameAs: [
            'https://github.com/felipeness',
            'https://linkedin.com/in/felipeness',
            'https://x.com/felipeness',
          ],
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Felipe Soares Portfolio',
          url: 'https://felipeness.dev',
        }),
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  // Console easter egg
  useEffect(() => {
    if (typeof window === 'undefined') return;
    console.log(
      `%c
  ______     _ _              ____
 |  ____|   | (_)            / ___|  ___   __ _ _ __ ___  ___
 | |__ ___  | |_ _ __   ___ \\___ \\ / _ \\ / _\` | '__/ _ \\/ __|
 |  __/ _ \\ | | | '_ \\ / _ \\ ___) | (_) | (_| | | |  __/\\__ \\
 | | |  __/ | | | |_) |  __/|____/ \\___/ \\__,_|_|  \\___||___/
 |_|  \\___| |_|_| .__/ \\___|
                 | |
                 |_|
`,
      'color: #E56500; font-family: monospace;',
    );
    console.log(
      '%cHey there! Curious about the code? Check it out: https://github.com/felipeness/portfolio-v2',
      'color: #6676FE; font-size: 14px;',
    );
  }, []);

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <HeadContent />
      </head>
      <body className="font-body bg-bg-base text-text-secondary antialiased overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
