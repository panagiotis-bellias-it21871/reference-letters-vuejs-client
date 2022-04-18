import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ReferenceLettersRequests from '../components/ReferenceLettersRequests.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/rl_requests',
    name: 'ReferenceLetterRequests',
    component: ReferenceLettersRequests
  }
]

// Create Vue Router Object
const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router

// source: https://blog.logrocket.com/dynamic-routing-using-vue-router/