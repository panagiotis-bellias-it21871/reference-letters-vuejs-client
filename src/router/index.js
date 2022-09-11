import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import AdminStudentView from '../views/AdminStudentView.vue'
import AdminTeacherView from '../views/AdminTeacherView.vue'
import AdminRefLettersView from '../views/AdminRefLettersView.vue'
import SignupLoginView from '../views/SignupLoginView.vue'
import SignupStudentView from '../views/SignupStudentView.vue'
import SignupTeacherView from '../views/SignupTeacherView.vue'
import ReferenceLetterRequestDetails from '../views/ReferenceLetterRequestDetails.vue'
import VerifyEmailToken from '../views/VerifyEmailToken.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: HomeView
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
    path: '/signup',
    name: 'signuplogin',
    component: SignupLoginView
  },
  {
    path: '/signup/student',
    name: 'signupstudent',
    component: SignupStudentView
  },
  {
    path: '/signup/teacher',
    name: 'signupteacher',
    component: SignupTeacherView
  },
  {
    path: '/reference-letter-request-details/:id',
    name: 'rl-request-details',
    component: ReferenceLetterRequestDetails
  },
  {
    path: '/verify_token/:token',
    name: 'verify-token',
    component: VerifyEmailToken
  },
  {
    path: '/admin',
    name: 'adminpanel',
    component: AdminView
  },
  {
    path: '/admin/students',
    name: 'adminstudentpanel',
    component: AdminStudentView
  },
  {
    path: '/admin/teachers',
    name: 'adminteacherpanel',
    component: AdminTeacherView
  },
  {
    path: '/admin/rl_requests',
    name: 'adminrefletterspanel',
    component: AdminRefLettersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
