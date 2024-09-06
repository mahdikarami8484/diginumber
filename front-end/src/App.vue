<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import BottomMenu from './components/BottomMenu.vue';
import Loading from './components/Loading.vue';

const loading = ref(true);
const loadAssets = async () => {
  // Load fonts
  await document.fonts.ready;
  loading.value = false;
}

onMounted(() => {
  loadAssets();
});

</script>

<template>

<Loading v-if="loading"/>

<div v-else>
  <RouterView />
  
  <BottomMenu />
</div>

</template>
