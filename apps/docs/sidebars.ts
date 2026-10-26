import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 The entries between the AUTO-GENERATED markers are rewritten by
 `npm run generate-docs` — keep the markers in place.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'introduction/index',
        'getting-started/index',
        'getting-started/integration',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: [
        'foundations/design-tokens',
        'foundations/colors',
        'foundations/typography',
        'foundations/spacing',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'components/button',
        'components/input',
        'components/checkbox',
        'components/stack',
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      collapsed: true,
      items: [
        // AUTO-GENERATED COMPONENTS START
        'components/auto-generated/button',
        'components/auto-generated/checkbox',
        'components/auto-generated/input',
        'components/auto-generated/stack',
    // AUTO-GENERATED COMPONENTS END
      ],
    },
  ],
};

export default sidebars;
