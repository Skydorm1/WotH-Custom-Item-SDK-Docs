// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'Overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/unity-project-setup',
        'getting-started/tools',
      ],
    },
    {
      type: 'category',
      label: 'Custom Items',
      items: [
        'custom-items/item-types',
        'custom-items/item-structure',
        'custom-items/example',
      ],
    },
  ],
};

export default sidebars;