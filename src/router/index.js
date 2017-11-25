import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shopping from '@/components/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shopping',
      component: Shopping
    }
  ]
})
