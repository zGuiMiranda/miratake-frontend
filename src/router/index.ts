import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  AOS.init()
  next()
})

export default router
