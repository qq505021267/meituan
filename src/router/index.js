import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import BlankPage from '@/layout/blankPage'
import Index from '@/page/index'
import ChangeCity from '@/page/ChangeCity'
import GoodsList from '@/page/goodsList'
import Login from '@/page/login'
import Register from '@/page/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: Index
    }, {
      path: 'changeCity',
      name: 'changeCity',
      component: ChangeCity
    }, {
      path: 's/:name',
      name: 'goods',
      component: GoodsList
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: BlankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }
  ]
})
