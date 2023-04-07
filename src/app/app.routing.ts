import { createRouter, createWebHistory } from 'vue-router'
// Pages
import HomeView from '@pages/home-page.vue'

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
      name: 'about',
      component: () => import('@pages/about-page.vue')
    }
  ]
})

export default router
