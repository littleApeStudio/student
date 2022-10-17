import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*  ------ 管理员 ------  */
  // 登录
  {
    path: '/admin/login',
    name: 'alogin',
    component:() => import('@/views/admin/login.vue')
  },
  // 注册
  {
    path: '/admin/register',
    name: 'aregister',
    component:() => import('@/views/admin/register.vue')
  },
  // 首页
  {
    path: '/admin',
    name: 'aindex',
    component:() => import('@/views/admin/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history', //网址去掉#
  routes
})

export default router
