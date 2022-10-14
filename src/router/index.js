import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/HomeView.vue')
  },
]

const router = new VueRouter({
  mode: 'history', //网址去掉#
  routes
})

export default router
