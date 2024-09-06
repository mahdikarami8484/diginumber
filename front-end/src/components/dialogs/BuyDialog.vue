<template>
    <div class="fixed inset-0 z-20 flex justify-center items-center bg-black bg-opacity-50" v-if="is_open">
        <div dir="rtl" class=" text-white px-5 pt-10 pb-4 bg-purple-900 dialog-shadow rounded-md w-9/12" :class="is_open ? 'open-dialog-anim' : 'close-dialog-anim'">
            <p class="samim-font samim-fd-font">آیا از خرید یک شماره {{country_name}} با قیمت {{format_money}} تومان مطئمن هستید ؟</p>
            <div class="flex justify-between">
                <div class="bg-red-700 p-3 px-7 rounded-md mt-8 hover:bg-red-600 cursor-pointer hover:box-shadow-dialog-button-close hover:scale-105 duration-300"  @click="is_open=false">
                    <p class="samim-font">خیر</p>
                </div>
                <div class="bg-orange-700 p-3 px-7 rounded-md mt-8 hover:bg-orange-600 cursor-pointer hover:box-shadow-bottom-button-buy hover:scale-105 duration-300">
                    <p class="samim-font">بله ، خرید</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, defineProps } from "vue" 

const is_open = ref(true);

const { money, count, country_name} = defineProps(['money', 'count', 'country_name'])

const nFormat = new Intl.NumberFormat(undefined);

const format_money = ref(nFormat.format(money));

</script>