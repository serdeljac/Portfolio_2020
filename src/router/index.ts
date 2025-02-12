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
    component: Landing,
  },
  {
    path: '/:link',
    name: 'web-details',
    component: () =>
      import(/* webpackChunckName: "bundle-details" */'@/views/webDetails.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunckName: "bundle-error" */'@/views/404.vue'),

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
