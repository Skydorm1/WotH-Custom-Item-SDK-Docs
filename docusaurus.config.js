// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WotH Custom Item SDK',
  tagline: 'Custom item SDK for Whisper of the House',
  favicon: 'img/wothIcon2.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://skydorm1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/WotH-Custom-Item-SDK-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Skydorm1',
  projectName: 'WotH-Custom-Item-SDK-Docs',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
  navbar: {
    title: 'WotH Custom Item SDK',

    logo: {
      alt: 'WotH',
      src: 'img/wothIcon2.png',
      width: 32,
      height: 32,
    },

    items: [
      {
        href: 'https://github.com/Skydorm1/WotH-Custom-Item-SDK-Docs',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
    ],
  },

  colorMode: {
    respectPrefersColorScheme: true,
  },
},
};

export default config;
