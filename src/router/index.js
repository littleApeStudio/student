import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*  ------ 管理员 ------  */
  // 首页
  {
    path: '/admin',
    name: 'aindex',
    component:() => import('@/views/admin/index.vue')
  },
  /*  ------ 老师 ------  */
  // 首页
  {
    path: '/teacher',
    name: 'tindex',
    component:() => import('@/views/teacher/index.vue')
  },
  /*  ------ 学生 ------  */
  // 首页
  {
    path: '/student',
    name: 'student',
    component:() => import('@/views/student/index.vue')
  },
  /*  ------- 首页  ---- */
  {
    path: '/',
    name: 'index',
    component:() => import('@/views/index.vue')
  },
  /*  ------- 登录  ---- */
  {
    path: '/login',
    name: 'login',
    component:() => import('@/views/login.vue')
  },
  /*  ------- 注册  ---- */
  {
    path: '/register',
    name: 'register',
    component:() => import('@/views/register.vue')
  },
]

const router = new VueRouter({
  mode: 'history', //网址去掉#
  routes
})

export default router
