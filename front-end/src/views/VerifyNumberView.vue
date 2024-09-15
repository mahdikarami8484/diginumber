<template>
    <div class="h-screen flex justify-center items-center">
        <form dir="rtl" @submit.prevent="validCode" class="bg-purple-900 w-10/12 -mt-20 rounded-md text-white px-4 py-6 load-component flex flex-col">
            <div>
                <p class="samim-font text-lg font-bold">تایید شماره</p>
            </div>
            <div dir="ltr" class="mt-10 flex self-center">
                <input @input="validCode" v-model="code" type="tel" dir="ltr" name="code" class="rounded-l-md px-2 py-3 w-8/12 shadow outline-none bg-purple-500 duration-300 samim-fd-font" placeholder="کد ارسالی">
                <button class="samim-font bg-purple-800 px-10 py-2 rounded-r-md hover:bg-purple-700 hover:scale-105 shadow">تایید</button>
            </div>
            <div v-if="errorMessage" class="mt-3 text-red-400 flex gap-2 items-start justify-start show-error-anim">
                <IconError class="w-6 h-6"/>
                <p  class="samim-font samim-fd-font">{{ errorMessage }}</p>
            </div>
            
        </form>
    </div>
</template>

<style scoped>
    input {
        direction: ltr;
        caret-color: #ffffff;
    }
    .shadow:hover, .shadow:active {
        box-shadow: 0px 0px 10px 0px #9900ff;
    }
    .load-component {
        scale: 1;
    }
</style>

<script setup>
import IconError from '@/components/icons/IconError.vue';

import { ref } from 'vue'

const code = ref('');

const errorMessage = ref('');

const validCode = () => {
    const codePattern = /^\d{6}$/;

    if (!codePattern.test(code.value)) {
        errorMessage.value = 'کد وارد شده اشتباه است.';
      } else {
        errorMessage.value = '';
      }
}

</script>