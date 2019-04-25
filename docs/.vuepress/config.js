module.exports = {
  title: '深仔的博客',
  description: '记录技术成长',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'visonlee/vuepress-blog',
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: 'java', link: '/java/' },
      { text: '前端', link: '/front/' },
      { text: '计算机知识', link: '/cs/' },
      { text: '其他', link: '/other/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/visonlee' },
    ]
  }
}