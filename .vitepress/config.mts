import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "群友攻略",
  description: "一个白嫖群友的攻略",
  themeConfig: {
    lastUpdated: true,

    nav: [
      { text: '首页', link: '/' },
      { text: '如何贡献', link: '/how_to_contribute' },
    ],

    sidebar: [
      {
        text: 'MCSM',
        collapsed: false,
        items: [
          { text: 'AWA.MS 域名邮箱', link: '/mcsm/awams_email' },
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '如何贡献', link: '/how_to_contribute' },
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
