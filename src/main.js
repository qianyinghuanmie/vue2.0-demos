import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'mint-ui/lib/style.css'

import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import _glob from './components/methodCommon.vue'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.prototype.glob = _glob
// 创建高德地图
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
  console.log('读取高德地图成功')
  // 加載當前的ip定位
}).catch(function (error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
