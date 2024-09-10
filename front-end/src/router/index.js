import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/buy',
      name: 'buy',
      component: () => import('../views/BuyView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/WalletView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue')
    }
  ]
})

export default router
