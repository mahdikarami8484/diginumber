<template>
    
    <div class="bg-slate-900 z-30 text-white w-screen flex fixed items-center bottom-0 samim-font h-16 shadow-md">
        <router-link to="/profile" class="bg-purple-900 flex flex-col justify-center rounded-t-md items-center h-full py-2 gap-1 w-1/5 hover:scale-115 hover:rounded-md cursor-pointer hover:bg-purple-950 duration-500 hover:box-shadow-bottom-button load-bottom-menu" :class="route_name == 'profile' ? 'rounded-md scale-115 bg-purple-950 box-shadow-bottom-button' : ''">
            <IconUser/>
            <p class="text-xs">نمایه کاربری</p>
        </router-link>
        
        <router-link to="/message" class="bg-purple-900 flex flex-col items-center rounded-t-md justify-center h-full py-2 gap-1 w-1/5 relative rounded-e-sm hover:scale-105 hover:rounded-t-md cursor-pointer hover:bg-purple-950 duration-500 ml-2 hover:box-shadow-bottom-button load-bottom-menu" :class="route_name == 'message' ? 'rounded-t-md scale-105 bg-purple-950 box-shadow-bottom-button' : ''">
            <IconMessage/>
            <p class="text-xs">پیام ها</p>
            <div class="rounded-s-full absolute bg-slate-900 -right-8 w-10 h-full hover:"></div>
        </router-link>

        <router-link to="/buy" class=" z-10 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 rounded-full scale-x-105 hover:scale-110 cursor-pointer hover:bg-orange-700 duration-500 load-bottom-menu hover:box-shadow-bottom-button-buy" :class="route_name == 'buy' ? 'scale-110 bg-orange-700 box-shadow-bottom-button-buy' : 'bg-orange-800'">
            <IconSimCard/>
            <p class="text-xs">خرید شماره</p>
        </router-link>

        <router-link to="/myNumbers" class="bg-purple-900 flex flex-col rounded-t-md items-center relative justify-center h-full py-2 gap-1 w-1/5 rounded-s-sm hover:scale-110 hover:rounded-t-md cursor-pointer hover:bg-purple-950 duration-500 mr-2 hover:box-shadow-bottom-button load-bottom-menu" :class="route_name == 'myNumbers' ? 'rounded-t-md scale-110 bg-purple-950 box-shadow-bottom-button' : ''">
            <IconSmartPhone/>
            <p class="text-xs">شماره ها</p>
            <div class="rounded-e-full absolute bg-slate-900 -left-8 w-10 h-full"></div>
        </router-link>

        <router-link to="/wallet" class="bg-purple-900 flex flex-col items-center rounded-t-md justify-center h-full py-2 gap-1 w-1/5 samim-fd-font hover:scale-105 hover hover:rounded-t-md cursor-pointer hover:bg-purple-950 duration-500 hover:box-shadow-bottom-button load-bottom-menu" :class="route_name == 'wallet' ? 'rounded-t-md scale-105 bg-purple-950 box-shadow-bottom-button' : ''">
            <IconWallet/>
            <p class="text-xs">
                {{ userStore.balance }} 
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
import IconMessage from "./icons/IconMessage.vue"

import { ref } from 'vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

const nFormat = new Intl.NumberFormat(undefined);

const route=useRoute();

const route_name = computed(() => route.name);

</script>