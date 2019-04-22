// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from '../App'

import VueRouter from 'vue-router'
Vue.config.productionTip = true
Vue.use(VueRouter)

import topTitle from '../components/topTitle.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['../views/home.vue'], resolve)
      }
    }, {
      path: '/index',
      component: function (resolve) {
        require(['../views/index.vue'], resolve)
      }
    }, {
      path: '/city',
      component: function (resolve) {
        require(['../views/city.vue'], resolve)
      }
    }, {
      path: '/cityMint',
      component: function (resolve) {
        require(['../views/cityMint.vue'], resolve)
      }
    }, {
      path: '/mapBai',
      component: function (resolve) {
        require('../assets/scss/mapBai.scss')
        require(['../views/mapBai.vue'], resolve)
      }
    }, {
      path: '/map',
      component: function (resolve) {
        require(['../views/map.vue'], resolve)
      }
    }, {
      path: '/vcharts',
      component: function (resolve) {
        require(['../views/vcharts.vue'], resolve)
      }
    }, {
      path: '/uploadImg',
      component: function (resolve) {
        require(['../views/uploadImg.vue'], resolve)
      }
    }, {
      path: '/upload',
      component: function (resolve) {
        require(['../views/upload.vue'], resolve)
      }
    }, {
      path: '/mintUiCityPicker',
      component: function (resolve) {
        require('../assets/scss/mintUiComponent.css')
        require(['../views/MiniComponents/CityPicker.vue'], resolve)
      }
    }, {
      path: '/mintUiSwitch',
      component: function (resolve) {
        require(['../views/MiniComponents/switch.vue'], resolve)
      }
    }, {
      path: '/mintUiComponent',
      component: function (resolve) {
        require(['../views/mintUiComponent.vue'], resolve)
      }
    }, {
      path: '/mintUiScroll',
      component: function (resolve) {
        require(['../views/MiniComponents/Scroller.vue'], resolve)
      }
    }, {
      path: '/touch',
      component: function (resolve) {
        require(['../views/touch.vue'], resolve)
      }
    }, {
      path: '/vuex',
      component: function (resolve) {
        require(['../views/vuex.vue'], resolve)
      }
    }, {
      path: '/lcalendar',
      components: {
        default: function (resolve) {
          require(['../views/lcalendar.vue'], resolve)
        },
        top: topTitle
      },
      props: {
        top: {
          title: '时间选择器'
        }
      }
    }
  ]
})
