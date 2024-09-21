import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "群友攻略",
  description: "一个白嫖群友的攻略",
  themeConfig: {
    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/JianyueLab/Baipiao-Shengdi/tree/main/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JianyueLab/Baipiao-Shengdi' }
    ]
  }
})
