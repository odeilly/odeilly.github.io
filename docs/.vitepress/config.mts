import { DefaultTheme, defineConfig } from 'vitepress'
import MarkdownItPlantuml from 'markdown-it-plantuml'

const mySideBar = {
  home: (): DefaultTheme.SidebarItem[] => {
    return [
      { text: 'VitePress', link: 'vitepress/code_block' },
      { text: 'Java', link: 'java/reference' },
      { text: 'VSCode', link: 'vscode/reference' },
    ];
  },

  vitePress: (): DefaultTheme.SidebarItem[] => {
    return [
      {
        base: '/vitepress/',
        text: 'VitePress',
        collapsed: true,
        items: [
          { text: 'コードブロック', link: 'code_block' },
          { text: 'Markdown の拡張', link: 'markdown_extension' },
          { text: 'Netlify にデプロイ', link: 'netlify' },
          { text: '参考', link: 'reference' },
        ],
      },
    ];
  },

  java: (): DefaultTheme.SidebarItem[] => {
    return [
      {
        base: '/java/',
        text: 'Java',
        collapsed: true,
        items: [
          { text: '参考', link: 'reference' },
        ],
      },
    ];
  },

  vscode: (): DefaultTheme.SidebarItem[] => {
    return [
      {
        base: '/vscode/',
        text: 'VSCode',
        collapsed: true,
        items: [
          { text: 'コマンドラインオプション', link: 'command_option' },
          { text: '参考', link: 'reference' },
        ],
      },
    ];
  },
}

const sidebarAll: DefaultTheme.Sidebar = {
  '/index': { base: '/', items: mySideBar.home() },
  '/vitepress/': { base: '/', items: mySideBar.vitePress() },
  '/java/': { base: '/', items: mySideBar.java() },
  '/vscode/': { base: '/', items: mySideBar.vscode() },
}

export default defineConfig({

  base: '/',

  title: "Odeilly's Note",
  description: "",
  lang: 'ja',

  lastUpdated: true,

  markdown: {
    config: md => {
      md.use(MarkdownItPlantuml)
    },
    codeTransformers: [
      {
        // We use `[!!code` in demo to prevent transformation, here we revert it back.
        postprocess: code => {
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

    sidebar: sidebarAll,

    externalLinkIcon: true,

    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
      }
    },

  },

  sitemap: {
    hostname: 'https://odeilly.github.io/',
    lastmodDateOnly: false,
  },
})
