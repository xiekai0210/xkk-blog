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
    sidebarDepth: 1,
    lastUpdatedText: "上次更新",
    nav: [
      { text: '主页', link: '/' },
      { text: '前端知识', link: '/articles/' },
      { text: '关于', link: '/about/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '' },
          { text: 'Japanese', link: '' }
        ]
      }
    ],
    sidebar: {
      "/articles/": [
        {
          title: "JavaScript",
          children: [
            '/articles/JS/',
          ]
        },
        {
          title: "HTML",
          children: [
            '/articles/HTML/',
          ]
        },
        {
          title: "CSS",
          children: [
            '/articles/CSS/'
          ]
        },
        {
          title: "TypeScript",
          children: [
            '/articles/TypeScript/',
          ]
        },
      ],
    }
  }
}