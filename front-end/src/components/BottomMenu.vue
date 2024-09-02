<template>

    <div class="text-white w-screen flex fixed items-center bottom-0 samim-font h-20">
        <div class="bg-green-800 flex flex-col justify-center items-center h-full py-2 gap-1 w-1/5">
            <IconUser/>
            <p class="text-xs">نمایه کاربری</p>
        </div>
        <div class="bg-green-800 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 relative rounded-e-sm">
            <IconHistory/>
            <p class="text-xs">تاریخچه</p>
            <div class="rounded-s-full absolute bg-slate-900 -right-8 w-10 h-full"></div>
        </div>
        <div class="bg-green-800 z-10 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5 rounded-full scale-x-105">
            <IconSimCard/>
            <p class="text-xs">خرید شماره</p>
        </div>
        <div class="bg-green-800 flex flex-col items-center relative justify-center h-full py-2 gap-1 w-1/5 rounded-s-sm">
            <IconUser/>
            <p class="text-xs">نمایه کاربری</p>
            <div class="rounded-e-full absolute bg-slate-900 -left-8 w-10 h-full"></div>
        </div>
        <div class="bg-green-800 flex flex-col items-center justify-center h-full py-2 gap-1 w-1/5">
            <IconUser/>
            <p class="text-xs">نمایه کاربری</p>
        </div>
    </div>

</template>

<script setup>

import IconUser from "../components/icons/IconUser.vue"
import IconHistory from "../components/icons/IconHistory.vue"
import IconSimCard from "../components/icons/IconSimCard.vue"

</script>