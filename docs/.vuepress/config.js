module.exports = {
  title: '首页',
  description: '深仔的博客',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebar: [
      '/',
      '/java/',
      ['/cs/', '计算机基础']
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '博文',
        items: [
          { text: 'java', link: '/java/' },
          { text: '前端', link: '/front/' },
          { text: '基础', link: '/cs/' }
        ]
      },
      { text: '归档', link: '/archive/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/visonlee' },
    ]
  }
}