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
  /*  ------ 老师 ------  */
  // 登录
  {
    path: '/teacher/login',
    name: 'tlogin',
    component:() => import('@/views/teacher/login.vue')
  },
  // 首页
  {
    path: '/teacher',
    name: 'tindex',
    component:() => import('@/views/teacher/index.vue')
  },
  /*  ------ 学生 ------  */
  // 登录
  {
    path: '/login',
    name: 'login',
    component:() => import('@/views/student/login.vue')
  },
  // 首页
  {
    path: '/',
    name: 'student',
    component:() => import('@/views/student/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history', //网址去掉#
  routes
})

export default router
