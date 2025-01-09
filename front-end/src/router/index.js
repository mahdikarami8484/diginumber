import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BuyView from '@/views/BuyView.vue';
import AboutView from '@/views/AboutView.vue';
import ProfileView from '@/views/ProfileView.vue';
import WalletView from '@/views/WalletView.vue';
import MessageView from '@/views/MessageView.vue';
import MyNumbersView from '../views/MyNumbersView.vue';
import EnterNumberView from '@/views/EnterNumberView.vue';
import VerifyNumberView from '@/views/VerifyNumberView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/buy',
      name: 'buy',
      component: BuyView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView
    },
    {
      path: '/message',
      name: 'message',
      component: MessageView
    },
    {
      path: '/myNumbers',
      name: 'myNumbers',
      component: MyNumbersView
    },
    {
      path: '/enterNumber',
      name: 'enterNumber',
      component: EnterNumberView
    },
    {
      path: '/verifyNumber',
      name: 'verifyNumber',
      component: VerifyNumberView
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
