import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupLoginView from '../views/SignupLoginView.vue'
import SignupStudentView from '../views/SignupStudentView.vue'
import SignupTeacherView from '../views/SignupTeacherView.vue'
import ReferenceLetterRequestDetails from '../views/ReferenceLetterRequestDetails.vue'

const routes = [
  {
    path: '/index',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'signuplogin',
    component: SignupLoginView
  },
  {
    path: '/signupstudent',
    name: 'signupstudent',
    component: SignupStudentView
  },
  {
    path: '/signupteacher',
    name: 'signupteacher',
    component: SignupTeacherView
  },
  {
    path: '/reference-letter-request-details/:id',
    name: 'rl-request-details',
    component: ReferenceLetterRequestDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
