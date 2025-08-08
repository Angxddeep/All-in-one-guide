import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'All in one guide',
  tagline: 'Modern guides for POCO X4 GT · Redmi Note 11T Pro (+) · K50i (xaga)',
  favicon: 'img/images/logo.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://angxddeep.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/All-in-one-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'angxddeep', // Usually your GitHub org/user name.
  projectName: 'All-in-one-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/angxddeep/All-in-one-guide/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/angxddeep/All-in-one-guide/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'All in one guide',
      logo: {
        alt: 'All in one guide Logo',
        src: 'img/images/logo.jpg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X (Website author)',
              href: 'https://x.com/Angxddeep',
            },
            {
              html: '<a href="https://t.me/XAGA_Updates" class="footer__link-item" target="_blank" rel="noreferrer noopener" aria-label="Telegram XAGA Updates"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: text-bottom;"><path d="M9.036 15.448l-.376 5.297c.537 0 .769-.231 1.047-.508l2.514-2.406 5.209 3.816c.955.526 1.631.25 1.892-.885l3.428-16.066.001-.001c.304-1.418-.512-1.972-1.448-1.628L1.116 9.33C-.262 9.867-.241 10.66.879 11.01l5.403 1.685 12.565-7.933c.59-.359 1.129-.16.686.2"/></svg><span style="margin-left:6px">Telegram (XAGA Updates)</span></a>'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/angxddeep/All-in-one-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Angaddeep Singh. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
