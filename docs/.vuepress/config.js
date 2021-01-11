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
  ],
  themeConfig: { // 默认主题的相关配置，比如顶部顶部导航栏，侧边栏等等
    logo: '/banana_leaf.png', // 网页顶端导航栏左上角的图标，路径跟上面一样，第一个/会遍历public文件夹
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/'}, // 直接跳转，/为不添加路由，跳转到首页
      // {
      //   text: '分类', // 默认显示
      //   ariaLabel: '分类', // 用于识别的label，讲真我还没明白这个属性是干嘛的
      //   items: [
      //     { text: '框架', link: '/pages/framework/angular/angular.md' },
      //     { text: '算法', link: '/pages/leetcode/leetcode.md' }
      //   ]
      // },
      // { text: '琐碎', link: '/pages/other/readme.md' },
      { text: 'Github', link: 'https://github.com/dairj', target: '_blank' }
    ],
    sidebar: [
      ['/pages/about/', '介绍'],
      {
        title: '框架',
        path: '/pages/framework/',
        collapsable: false,
        children: [
          {
            title: 'Angular',
            path: '/pages/framework/angular',
            collapsable: false,
            children: [
              '/pages/framework/angular/angular'
            ]
          },
          {
            title: 'React',
            path: '/pages/framework/react/',
            collapsable: false,
          },
          {
            title: 'Vue',
            path: '/pages/framework/vue/',
            collapsable: false,
          }
        ]
      }
    ]
  }
}