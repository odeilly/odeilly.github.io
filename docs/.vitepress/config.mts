import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/',

  title: "Odeilly's Note",
  description: "",
  lang: 'ja',

  lastUpdated: true,

  themeConfig: {
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/odeilly/' }
    ],

    sidebar: [
      {
        text: 'VitePress',
        collapsed: true,
        items: [
          { text: '参考', link: '/vitepress/reference' },
      ]
      },
      {
        text: 'Java',
        collapsed: true,
        items: [
          { text: '参考', link: '/java/reference' },
        ]
      },
    ],

    externalLinkIcon: true,
  },

  sitemap: {
    hostname: 'https://odeilly.github.io/',
    lastmodDateOnly: false,
  },
})
