import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupLoginView from '../views/SignupLoginView.vue'
import SignupStudentView from '../views/SignupStudentView.vue'
import SignupTeacherView from '../views/SignupTeacherView.vue'
import VerifyEmailToken from '../views/VerifyEmailToken.vue'
import AboutView from '../views/AboutView.vue'
import ReferenceLetterRequestDetails from '../views/ReferenceLetterRequestDetails.vue'
import ApproveRlRequest from '../views/ApproveRlRequest.vue'
//lazy-loaded
const ProfileView = () => import("../views/ProfileView.vue")
/*
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardAdminStudents = () => import("./components/BoardAdminStudents.vue")
const BoardAdminTeachers = () => import("./components/BoardAdminTeachers.vue")
const BoardAdminRlRequests = () => import("./components/BoardAdminRlRequests.vue")
//const BoardModerator = () => import("./components/BoardModerator.vue")
//const BoardUser = () => import("./components/BoardUser.vue")
import AdminView from '../views/AdminView.vue'
import AdminStudentView from '../views/AdminStudentView.vue'
import AdminTeacherView from '../views/AdminTeacherView.vue'
import AdminRefLettersView from '../views/AdminRefLettersView.vue'
*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/home',
    component: HomeView
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
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: ProfileView,
  },
  {
    path: '/reference-letter-request/:id',
    name: 'rl-request-details',
    component: ReferenceLetterRequestDetails
  },
  {
    path: '/approve_request/:id',
    name: 'approve-rl-request',
    component: ApproveRlRequest
  },
  {
    path: '/verify_token/:token',
    name: 'verify-token',
    component: VerifyEmailToken
  } /*
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
  },
  // otherwise redirect to home
  //{ path: '*', redirect: '/' }
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/', '/signup', '/signup/student', '/signup/teacher', '/about', '/verify_token/:token'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
})*/

export default router;
