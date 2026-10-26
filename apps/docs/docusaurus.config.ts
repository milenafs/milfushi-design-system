import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Milfushi Design System',
  tagline: 'Reusable React components and foundations for building consistent interfaces',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://milenafs.github.io',
  // Pull request previews are served from a subdirectory of the Pages site,
  // and Docusaurus bakes the base path in at build time, so the preview
  // workflow overrides this. See .github/workflows/preview-docs.yml.
  baseUrl: process.env.DOCS_BASE_URL ?? '/milfushi-design-system/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/milenafs/milfushi-design-system/tree/master/apps/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'design system, react, typescript, component library, ui components',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    navbar: {
      title: 'Milfushi',
      logo: {
        alt: 'Milfushi Design System',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/foundations/design-tokens',
          position: 'left',
          label: 'Foundations',
        },
        {
          to: '/docs/components/button',
          position: 'left',
          label: 'Components',
        },
        {
          href: 'https://www.npmjs.com/package/@milfushi/ui',
          position: 'right',
          label: 'npm',
          className: 'navbar__item--icon navbar__item--npm',
          'aria-label': '@milfushi/ui on npm',
        },
        {
          href: 'https://github.com/milenafs/milfushi-design-system',
          position: 'right',
          label: 'GitHub',
          className: 'navbar__item--icon navbar__item--github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Integration Guide',
              to: '/docs/getting-started/integration',
            },
          ],
        },
        {
          title: 'Foundations',
          items: [
            {
              label: 'Design Tokens',
              to: '/docs/foundations/design-tokens',
            },
            {
              label: 'Colors',
              to: '/docs/foundations/colors',
            },
            {
              label: 'Typography',
              to: '/docs/foundations/typography',
            },
            {
              label: 'Spacing & Layout',
              to: '/docs/foundations/spacing',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              label: 'Button',
              to: '/docs/components/button',
            },
            {
              label: 'Input',
              to: '/docs/components/input',
            },
            {
              label: 'Checkbox',
              to: '/docs/components/checkbox',
            },
            {
              label: 'Stack',
              to: '/docs/components/stack',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/milenafs/milfushi-design-system',
            },
            {
              label: 'npm package',
              href: 'https://www.npmjs.com/package/@milfushi/ui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Milfushi Design System. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
