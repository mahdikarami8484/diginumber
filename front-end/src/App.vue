<script setup>
import { ref, onMounted, computed, nextTick, watch } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

import BottomMenu from './components/BottomMenu.vue';
import Loading from './components/Loading.vue';

const loading = ref(true);
const loadAssets = async () => {
  // Load fonts
  await document.fonts.ready;
  await nextTick();
  loading.value = false
}

const router = useRouter();
const route = useRoute()

var hide_bottom_menu = true;

hide_bottom_menu = computed(() => {
   return ['enterNumber', 'verifyNumber'].includes(route.name);
});

onMounted(async () => {
  await loadAssets();
});

router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

router.afterEach(() => {
  loading.value = false;
});

</script>

<template>

<Loading v-if="loading"/>

<div v-else>
  <RouterView />
 
  
</div>

<BottomMenu v-if="!hide_bottom_menu" />

</template>
