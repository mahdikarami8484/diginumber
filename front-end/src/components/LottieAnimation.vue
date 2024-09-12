<template>
    <div ref="container" class="lottie-container"></div>
  </template>
  
  <script>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import lottie from 'lottie-web';
  
  export default {
    props: {
      animationData: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const container = ref(null);
      let animation = null;
  
      onMounted(() => {
        animation = lottie.loadAnimation({
          container: container.value,
          animationData: props.animationData,
          renderer: 'svg',
          loop: true,
          autoplay: true
        });
      });
  
      onBeforeUnmount(() => {
        if (animation) {
          animation.destroy();
        }
      });
  
      return { container };
    }
  };
  </script>
  
  <style scoped>
  .lottie-container {
    width: 100%;
    height: 100%;
  }
  </style>
  