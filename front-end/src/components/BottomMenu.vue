<template>
    
    <div class="text-white w-screen flex fixed items-center bottom-0 samim-font h-20 shadow-md">
        <router-link to="/profile" class="bg-green-800 flex flex-col justify-center items-center h-full py-2 gap-1 w-1/5 hover:scale-105 hover:rounded-t-md cursor-pointer hover:bg-green-900" :class="route_name == 'profile' ? 'rounded-t-md scale-105 bg-green-900 box-shadow-bottom-button' : ''">
            <IconUser/>
            <p class="text-xs">نمایه کاربری</p>
        </router-link>
        
        <router-link to="/history" class="bg-green-800 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 relative rounded-e-sm hover:scale-105 hover:rounded-t-md cursor-pointer hover:bg-green-900" :class="route_name == 'history' ? 'rounded-t-md scale-105 bg-green-900 box-shadow-bottom-button' : ''">
            <IconHistory/>
            <p class="text-xs">تاریخچه</p>
            <div class="rounded-s-full absolute bg-slate-900 -right-8 w-10 h-full hover:"></div>
        </router-link>

        <router-link to="/buy" class="bg-green-800 z-10 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 rounded-full scale-x-105 hover:scale-110 cursor-pointer hover:bg-green-900 box-shadow-buy-btn" :class="route_name == 'buy' ? 'rounded-t-md scale-105 bg-green-900' : ''">
            <IconSimCard/>
            <p class="text-xs">خرید شماره</p>
        </router-link>

        <router-link to="/myNumbers" class="bg-green-800 flex flex-col items-center relative justify-center h-full py-2 gap-1 w-1/5 rounded-s-sm hover:scale-105 hover:rounded-t-md cursor-pointer hover:bg-green-900" :class="route_name == 'myNumbers' ? 'rounded-t-md scale-105 bg-green-900 box-shadow-bottom-button' : ''">
            <IconSmartPhone/>
            <p class="text-xs">شماره ها</p>
            <div class="rounded-e-full absolute bg-slate-900 -left-8 w-10 h-full"></div>
        </router-link>

        <router-link to="/wallet" class="bg-green-800 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 samim-fd-font hover:scale-105 hover hover:rounded-t-md cursor-pointer hover:bg-green-900" :class="route_name == 'wallet' ? 'rounded-t-md scale-105 bg-green-900 box-shadow-bottom-button' : ''">
            <IconWallet/>
            <p class="text-xs">
                {{ money }} 
                تومان
            </p>
        </router-link>
    </div>

</template>

<script setup>

import IconUser from "../components/icons/IconUser.vue"
import IconHistory from "../components/icons/IconHistory.vue"
import IconSimCard from "../components/icons/IconSimCard.vue"
import IconSmartPhone from "../components/icons/IconSmartPhone.vue"
import IconContactsPhone from "../components/icons/IconContactsPhone.vue"
import IconWallet from "../components/icons/IconWallet.vue"

import { ref } from 'vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

const nFormat = new Intl.NumberFormat(undefined);
const money = ref(nFormat.format(52000))

const route=useRoute();

const route_name = computed(() => route.name);

</script>