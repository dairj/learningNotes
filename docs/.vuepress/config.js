module.exports = {
  title: 'dairujia的学习笔记', // 显示在左上角的网页名称以及首页在浏览器标签上显示的title名称
  description: 'Just playing around', // meta中的描述文字，用于SEO
  // 注入到当前页面的html的<head>中的标签
  head: [
    [ // 浏览器的标签栏的网页图表，第一个/会遍历public文件夹的文件
      'link',
      {
        rel: 'icon',
        href: '/banana_leaf.png'
      }
    ]
  ]
}