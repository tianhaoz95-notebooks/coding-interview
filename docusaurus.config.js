/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Coding Interview Notebook',
  tagline: 'Interesting notes from coding interview preparation',
  url: 'https://tianhaoz95-notebooks.github.io/coding-interview',
  baseUrl: '/coding-interview/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons/favicon_notebook.ico',
  organizationName: 'tianhaoz95-notebooks',
  projectName: 'coding-interview',
  themeConfig: {
    navbar: {
      title: 'Coding Interview Notebook',
      logo: {
        alt: 'Logo',
        src: 'img/logos/logo_code.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'solutions/index',
          position: 'left',
          label: 'Solutions',
        },
        {
          type: 'doc',
          docId: 'tricks/index',
          position: 'left',
          label: 'Tricks',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tianhaoz95-notebooks/coding-interview',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://github.com/tianhaoz95-notebooks/coding-interview',
            },
            {
              label: 'Discord',
              href: 'https://github.com/tianhaoz95-notebooks/coding-interview',
            },
            {
              label: 'Twitter',
              href: 'https://github.com/tianhaoz95-notebooks/coding-interview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tianhaoz95-notebooks/coding-interview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tianhao Zhou. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tianhaoz95-notebooks/coding-interview/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tianhaoz95-notebooks/coding-interview/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
