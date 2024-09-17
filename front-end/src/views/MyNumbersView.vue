<template>
<Loading v-if="loading"/>
<div v-else>
    <div v-if="number === null">
    <div dir="rtl" class="text-white flex flex-col items-center bg-purple-900 p-5  m-auto w-10/12 mt-24 rounded-md hover:box-shadow load-component gap-5">
        <p class="samim-font text-lg font-bold">متاسفانه شما شماره فعالی ندارید !</p>
        <router-link to="/buy" class="bg-orange-700 rounded-md p-3 cursor-pointer hover:box-shadow-bottom-button-buy scale-105">
            <p class="samim-font">برای خرید کلیک کنید !</p>
        </router-link>
    </div>
    <LottieAnimation class="w-18 h-18 mt-5 load-component" style="animation-delay: 0.2s" :animationData="animationData" />
</div>
<div v-else>
    <div class="bg-purple-700 text-white rounded-md w-10/12 p-4 m-auto mt-10 load-component hover:box-shadow flex flex-col gap-4">
        <div class="flex gap-4 items-center">
            <div class="flex flex-col gap-2 items-center">
                <component class="w-8 h-8 rounded-md" :is="flag_component[number['flag']]" />
                <p class="samim-font text-xs">{{ number.country_name }}</p>
            </div>
            <p class="ml-2 samim-fd-font w-4">{{ get_time_value  }}</p>
            <div dir="rtl" class="bg-purple-600 rounded-md p-3 flex flex-row-reverse ml-8 gap-2 w-7/12 box-shadow-number hover:scale-105 duration-300" @click="copy(number['country_code']+number['number'])">
                <p class="samim-fd-font">{{ number.country_code }}</p>
                <p class="samim-fd-font"> {{ number.number }} </p>
            </div>
        </div>
        <div class="flex gap-2 justify-between">
            <div class="flex gap-2">
                <div class="bg-red-700 py-2 px-3 rounded-md flex flex-row-reverse gap-1 justify-center items-center hover:bg-red-600 hover:box-shadow-dialog-button-close hover:scale-105 duration-300">
                    <IconClose class="w-4 h-4" />
                    <p class="samim-font">لغو</p>
                </div>
            
                <div class="bg-green-700 hover:bg-green-600 hover:scale-105 duration-300 rounded-md py-2 px-3 justify-self-start box-shadow-refresh" @click="refresh()">
                    <IconRefresh />
                </div>
            </div>

            <div dir="rtl" class="flex relative items-center" v-if="number.code === null">
                <p class="samim-font text-sm">شماره را وارد کرده و منتظر دریافت کد باشید !</p>
                <IconLoading class="spin" />
            </div>

            <div dir="rtl" v-else class="flex justify-start items-center justify-self-end gap-1">
                <p class="samim-font">کد دریافتی :</p>
                <div class="bg-purple-600 text-center rounded-md p-2 box-shadow-number hover:scale-105 duration-300" @click="copy(number.code)">
                    <p class="samim-fd-font">{{ number.code }}</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>



</template>

<style scoped>
LottieAnimation:hover{
    scale: 1;
}

.samim-fd-font {
    direction: ltr !important;
}

.load-component{
    scale: 1;
}

.box-shadow-number:hover{
    box-shadow: 0px 0px 10px 0px #9900ff;
}

.box-shadow-refresh:hover {
    box-shadow: 0px 0px 10px 2px rgb(34 197 94);
}
</style>

<script setup>
import { ref, onMounted, markRaw, onUnmounted } from 'vue';

import LottieAnimation from '@/components/LottieAnimation.vue';
import animationData from '@/assets/animations/404Anim.json';
import Loading from '@/components/Loading.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconLoading from '@/components/icons/IconLoading.vue';
import IconRefresh from '@/components/icons/IconRefresh.vue';

const number = ref(null)

const time = () => {
    const timestamp = Date.now();
    const seconds = Math.floor(timestamp / 1000);
    return seconds;
}

number.value = {
    'number': "9042080462",
    'country_name': 'آمریکا',
    'flag': 'us',
    'country_code': '+1',
    'time': time(),
    'code': 31464
};

const show_time = ( seconds ) => {
    const minutes = Math.floor((seconds % 3600) / 60);
    const seconds_left = seconds % 60;
    return `${minutes}:${seconds_left}`;
}

const refresh = () => {
    number.value.code = null;
}

const get_time_value = ref("00:00");

const get_time = () => {
    if(number.value !==null && ((0.25*60 - (time() - number.value.time)) >= 0))
    {
        get_time_value.value = show_time(0.25*60 - (time() - number.value.time))
    }else {
        number.value = null
        get_time_value.value = "00:00";
    }
}

const loading = ref(true);

const flag_component = ref({});

const loadCountryFlag = async () => {
        try {
            const flag_name = number.value['flag'].charAt(0).toUpperCase() + number.value['flag'].slice(1);
            const componentName = `Icon${flag_name}Flag`;
            const component = await import(`@/components/icons/flags/${componentName}.vue`);
            if( flag_component.value[number.value['flag']] === undefined){
                flag_component.value[number.value['flag']] = markRaw(component.default);
            }
        } catch (error) {
            console.error(`Failed to load flag component for ${number['flag']}:`, error);
        }
    loading.value = false
};

let intervalId = null

onMounted(() => {
    loadCountryFlag();
    intervalId = setInterval(get_time, 1000);
});

const copy = async (data) => {
    try{
        await navigator.clipboard.writeText(data);
    }catch (err) {
        console.error('Failed to copy: ', err);
      }
}

onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
});

</script>
