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
  erviceWorker: true,
  themeConfig: {
    sidebarDepth: 3,
    lastUpdatedText: "上次更新",
    nav: [
      { text: '主页', link: '/' },
      { text: '前端知识', link: '/articles/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      "/articles/": [
        {
          title: "JavaScript",
          children: [
            '/articles/JS/Array/'
          ]
        },
        {
          title: "HTML",
          children: [
          ]
        },
        {
          title: "CSS",
          children: [
          ]
        },
        {
          title: "浏览器",
          children: [
            '/articles/Browser/EventLoop/'
          ]
        },
        {
          title: "TypeScript",
          children: [
            '/articles/TypeScript/Introduction/',
          ]
        },
      ],
    }
  }
}