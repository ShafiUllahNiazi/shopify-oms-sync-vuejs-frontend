import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Logs',  
    component: () => import('../views/Logs/index.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings/index.vue')
  },
  {
    path: '/error',
    name: 'Error',  
    component: () => import('../views/Error/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
