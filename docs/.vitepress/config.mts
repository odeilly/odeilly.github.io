import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/',

  title: "Odeilly's Note",
  description: "",
  lang: 'ja',

  lastUpdated: true,

  markdown: {
    codeTransformers: [
        {
            // We use `[!!code` in demo to prevent transformation, here we revert it back.
            postprocess(code) {
                return code.replace(/\[\!\!code/g, '[!code')
            }
        }
    ],
  },

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
          { text: 'コードブロック', link: '/vitepress/code_block'},
          { text: 'Netlify にデプロイ', link: '/vitepress/netlify' },
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
