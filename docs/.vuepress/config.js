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
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'GitHub编辑此页面',
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