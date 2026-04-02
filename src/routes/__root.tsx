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
      { title: 'Felipe Barcelos | Staff Engineer & Solution Architect' },
      {
        name: 'description',
        content:
          'Portfolio of Felipe Barcelos — Staff Engineer & Solution Architect building high-impact distributed systems, developer platforms, and engineering cultures.',
      },
      { property: 'og:title', content: 'Felipe Barcelos | Staff Engineer & Solution Architect' },
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
          name: 'Felipe Barcelos',
          jobTitle: 'Staff Engineer & Solution Architect',
          url: 'https://felipebarcelos.dev',
          sameAs: [
            'https://github.com/felipebarcelos',
            'https://linkedin.com/in/felipebarcelos',
            'https://x.com/felipebarcelos',
          ],
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Felipe Barcelos Portfolio',
          url: 'https://felipebarcelos.dev',
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
  ______     _ _              ____                     _
 |  ____|   | (_)            |  _ \\                   | |
 | |__ ___  | |_ _ __   ___  | |_) | __ _ _ __ ___ ___| | ___  ___
 |  __/ _ \\ | | | '_ \\ / _ \\ |  _ < / _\` | '__/ __/ _ \\ |/ _ \\/ __|
 | | |  __/ | | | |_) |  __/ | |_) | (_| | | | (_|  __/ | (_) \\__ \\
 |_|  \\___| |_|_| .__/ \\___| |____/ \\__,_|_|  \\___\\___|_|\\___/|___/
                 | |
                 |_|
`,
      'color: #E56500; font-family: monospace;',
    );
    console.log(
      '%cHey there! Curious about the code? Check it out: https://github.com/felipebarcelos/portfolio-v2',
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
