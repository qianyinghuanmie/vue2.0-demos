// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './less/common.less'
import './iconfont.css'
import _glob from '../../components/methodCommon.vue'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.glob = _glob
const routes = [{
  path: '/',
  component: function (resolve) {
    require(['../../components/demo1.vue'], resolve)
  }
}, {
  path: '/demo1',
  component: function (resolve) {
    require(['../../components/demo1.vue'], resolve)
  }
}, {
  path: '/demo2',
  component: function (resolve) {
    require(['../../components/demo2.vue'], resolve)
  }
}, {
  path: '/city',
  component: function (resolve) {
    require(['../../components/city.vue'], resolve)
  }
}, {
  path: '/around',
  component: function (resolve) {
    require(['../../components/around.vue'], resolve)
  }
}
]
const router = new VueRouter({
  routes
})
// 创建地图
let createMap = () => {
  const promise = new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://webapi.amap.com/maps?v=1.3&key=1f648c12a2709a14b0e79551fdc5f791'   // 高德地图
    document.body.appendChild(script)
    if (script.nodeName === 'SCRIPT') {
      resolve()
    } else {
      reject(new Error('Could not script image at ' + script.src))
    }
  })
  return promise
}
createMap().then(function () {
  console.log('读取地图成功')
  // 加載當前的ip定位
}).catch(function (error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error)
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.component('header-item', {
  props: ['message', 'backUrl'],
  template: `<header class="evaluate-header"><router-link :to="backUrl"><span><i class="iconfont">&#xe697;</i></span></router-link> <div><span>{{message}}</span></div> </header>`
})

