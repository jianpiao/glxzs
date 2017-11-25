// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import { currency } from './currency'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'

// import 'mint-ui/lib/style.css'



Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(MuseUI)
Vue.filter('currency', currency)
Vue.config.productionTip = false

Vue.prototype.$http = axios

// 开始加载  显示加载动画
router.beforeEach((to, from, next) => {
    store.dispatch('showLoading')
  next()
})

// 挂载完毕 关闭加载动画
router.afterEach((to, from) => {
  setTimeout(() =>{
    store.dispatch("hideLoading")
  }, 1000)

})

// axios.interceptors.request.use(config => {  //配置发送请求的信息
//   store.dispatch('showLoading')
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(response => { //配置请求回来的信息
//   store.dispatch('hideLoading')
//   return response;
// }, error => {
//   return Promise.reject(error);
// });



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
