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
            text: 'Java',
            items: [
                { text: '参考', link: '/java/reference' },
            ]
        },
    ],
  }
})
