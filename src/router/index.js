import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin/register',
    name: 'home',
    component:() => import('@/views/admin/register.vue')
  },
]

const router = new VueRouter({
  mode: 'history', //网址去掉#
  routes
})

export default router
