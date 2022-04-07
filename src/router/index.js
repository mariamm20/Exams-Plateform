import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import header from '../components/AdminComponents/Dashboard.vue'
import user from '../components/AdminComponents/AllUsers.vue'
import exam from '../components/AdminComponents/AllExams.vue'
import request from '../components/AdminComponents/ExamsRequests.vue'
import contact from '../components/AdminComponents/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/Contact-Us',
      name: 'Contact-Us',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/dashboard',
      component: header,

    },
    {
      path: '/dashboard/all-users',
      component: user
    },
    {
      path: '/dashboard/all-exams',
      component: exam,

    },
    {
      path: '/dashboard/exams-requests',
      component: request,

    },
    {
      path: '/dashboard/contact-us',
      component: contact,

    },
    {
      path: '/dashboard/sign-out',
      component: HomeView,

    },
   

    
    
  ]
})

export default router
