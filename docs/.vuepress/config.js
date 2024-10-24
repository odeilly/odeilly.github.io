import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({

  title: "Odeilly's Note",
  description: "",
  lang: "ja",
  bundler: viteBundler(),

  theme: defaultTheme({
    // contributors: false,
  }),

  plugins: [

    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        }
      },
      maxSuggestions: 10,
    }),

    copyCodePlugin({
      duration: 1000,
      locales:{
        '/': {
          copied: "copied",
          copy: "copy",
        }
      }
    }),

    mdEnhancePlugin({
      plantuml: true,
    }),
  ],

  port: 9100,
});
