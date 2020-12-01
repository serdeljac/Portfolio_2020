import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '@/views/Landing.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Welcome'
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Landing
  },
  {
    path: '/:link',
    name: 'web-details',
    props: true,
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '@/views/webDetails.vue'), 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes
})

export default router
