import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

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
    },
    {
      path: '/myNumbers',
      name: 'myNumbers',
      component: () => import('../views/MyNumbersView.vue')
    },
    {
      path: '/enterNumber',
      name: 'enterNumber',
      component: () => import('../views/EnterNumberView.vue')
    },
    {
      path: '/verifyNumber',
      name: 'verifyNumber',
      component: () => import('../views/VerifyNumberView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  
  if (userStore.phone === null && to.name !== 'enterNumber') {
    next({ name: 'enterNumber' });
  } else if ( !userStore.verifiedPhone && userStore.phone !== null  && to.name !== 'verifyNumber') {
    next({ name: 'verifyNumber' });
  } else if ((userStore.phone !== null && userStore.verifiedPhone) && (to.name === 'enterNumber' || to.name === 'verifyNumber')) {
    next({ name: 'buy' });
  } else {
    next();
  }
});

export default router
