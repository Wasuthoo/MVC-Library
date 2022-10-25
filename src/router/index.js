import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'Counter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    
    {
      path: '/isa',
      name: 'isa',
      component:  () => import('../views/isaView.vue')
    },
    {
      path: '/classroom',
      name: 'classroom',
      component:  () => import('../views/ClassroomView.vue')
    },
    {
      path: '/classroom/teacher',
      name: 'teacher',
      component:  () => import('../views/TeacherView.vue')
    },
    {
      path: '/classroom/student',
      name: 'student',
      component:  () => import('../views/StudentView.vue')
    },

  ]
})

export default router
