import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#9BCD9B',
      navigationBarTitleText: 'novel',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#fff',
      selectedColor: '#006b4c',
      backgroundColor: '#9BCD9B',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: '/static/images/home.png',
        selectedIconPath: '/static/images/home-active.png'
      }, {
        pagePath: 'pages/rank/main',
        text: '排行',
        iconPath: '/static/images/rank.png',
        selectedIconPath: '/static/images/rank-active.png'
      }, {
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: '/static/images/user.png',
        selectedIconPath: '/static/images/user-active.png'
      }]
    }
  }
}
