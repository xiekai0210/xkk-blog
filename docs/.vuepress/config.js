import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  title: "凯牛的博客",
  description: "种一棵树最好的时间在十年前，其次是现在。",
  keywords: "知识管理工具、个人博客",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/logo.ico",
      },
    ],
  ],
  base: "/xkk-blog/",
  theme: defaultTheme({
    logo: '/img/doudou.png',
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributorsText: '贡献者',
    navbar: [
      { text: '主页', link: '/' },
      { text: '前端知识', link: '/articles/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "JavaScript",
          link: "/articles/JS/",
          children: [
            '/articles/JS/Array/'
          ]
        },
        {
          text: "HTML",
          link: "/articles/HTML/",
          children: [
          ]
        },
        {
          text: "CSS",
          link: "/articles/CSS/",
          children: [
          ]
        },
        {
          text: "浏览器",
          link: "/articles/Browser/",
          children: [
            '/articles/Browser/EventLoop/'
          ]
        },
        {
          text: "TypeScript",
          link: "/articles/TypeScript/",
          children: [
            '/articles/TypeScript/Introduction/',
          ]
        },
      ],
    }
  }),
}