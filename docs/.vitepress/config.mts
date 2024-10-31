import { DefaultTheme, defineConfig } from 'vitepress'

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
        base: '/vitepress/',
        text: 'VitePress',
        collapsed: true,
        items: sidebarVitePress(),
      },
      {
        base: '/java/',
        text: 'Java',
        collapsed: true,
        items: sidebarJava(),
      },
    ],

    externalLinkIcon: true,
  },

  sitemap: {
    hostname: 'https://odeilly.github.io/',
    lastmodDateOnly: false,
  },
})

function sidebarVitePress(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'コードブロック', link: 'code_block'},
    { text: 'Netlify にデプロイ', link: 'netlify' },
    { text: '参考', link: 'reference' },
  ]
}

function sidebarJava(): DefaultTheme.SidebarItem[] {
  return [
    { text: '参考', link: 'reference' },
  ]
}
