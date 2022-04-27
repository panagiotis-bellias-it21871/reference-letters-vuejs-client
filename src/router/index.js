import { createWebHistory, createRouter } from "vue-router"
import HomePage from '../components/HomePage.vue'

//import Vue from 'vue'
//import VueRouter from 'vue-router'
import ReferenceLettersRequests from '../components/ReferenceLettersRequests.vue'
import NotFound from '../components/NotFound.vue'

//Vue.use(VueRouter)

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
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


/*
// Create Vue Router Object
// export 
const router = VueRouter.createRouter({
  // mode: 'history',
  // base: process.env.VUE_APP_BASE_URL,
  history: VueRouter.createWebHashHistory(),
  routes,
})

*/

// Vue.config.productionTip = false;
/*
const app = Vue.createApp({})
app.use(router)

app.mount('#app')
*/
/*
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
*/

// export default router

/* Sources
 https://blog.logrocket.com/dynamic-routing-using-vue-router/
 https://www.newline.co/public/content/thirty-days-of-vue/Vx9TY4okKhDnaK04DLUojr/thirty-days-of-vue-fullstackio.pdf?inf_contact_key=5a76bde7da23827bc16e53145991c634d18a532c4142cb79caf2b269de1401fa
 */