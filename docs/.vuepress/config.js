module.exports = {
  // 可以理解为路由的配置文件
  title: "颜康的个人主页",
  description: '……………………',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ]
  },
  markdown: {
    lineNumbers: true // 显示代码块行号
  }
}