<template>
    <div>
        <div dir='rtl' class="bg-purple-900 rounded-md text-white px-4 pt-10 pb-5 m-auto mt-12 w-11/12 load-component" style="hover:" :style="'animation-delay: '+3*(0/10 - 0.1)+'s'">
            <div class="bg-purple-700 rounded-md p-3 w-8/12 m-auto flex gap-2 justify-center text-lg hover:scale-105 shadow cursor-pointer items-center duration-300">
                <IconBanknote class="w-8 h-8 -mr-1"/>
                <p class="samim-font samim-fd-font">{{ nFormat.format(userStore.balance) }}</p>
                <p class="samim-font">تومان</p> 
            </div>

            <div class="bg-orange-700 px-3 py-3 rounded-md flex justify-center w-6/12 m-auto mt-12 cursor-pointer hover:bg-orange-600 gap-2 items-center hover:box-shadow-bottom-button-buy hover:scale-105 duration-300">
                <IconDeposit class="w-7 h-7 mt-1 -mr-3"/>
                <p class="samim-font">افزایش موجودی</p>
            </div>
            
            <div class="bg-purple-700 rounded-md w-7/12 px-3 py-4  flex justify-center m-auto hover:scale-105 mt-3 gap-1 hover:bg-purple-800 shadow duration-300" @click="inviteFriend">
                <IconInviteFriend class="-mr-1"/>
                <p class="samim-font">دعوت از دوستان</p>
            </div>
        </div>
        <div dir='rtl' class="bg-purple-900 rounded-md text-white p-5 m-auto mt-8 w-11/12 load-component mb-20" :style="'animation-delay: '+3*(1/10 - 0.1)+'s'">
            <div dir="rtl" class="">
                <p class="samim-font">وارد کردن کد هدیه :</p>
            </div>
            <form class="mt-4 w-full flex" @submit.prevent="submit">
                <input type="text" dir="ltr" class="rounded-r-md px-2 py-3 w-8/12 shadow outline-none bg-purple-500 duration-300">
                <button class="bg-orange-700 px-2 py-3 samim-font rounded-l-md hover:bg-orange-600 hover:scale-105 hover:box-shadow-bottom-button-buy outline-none duration-300">دریافت هدیه</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .load-component:hover {
        scale: 1;
    }
    .shadow:hover, .shadow:active {
        box-shadow: 0px 0px 10px 0px #9900ff;
    }
</style>

<script setup>
    import { ref } from 'vue';
    import IconBanknote from '@/components/icons/IconBanknote.vue';
    import IconDeposit from '@/components/icons/IconDeposit.vue';
    import IconInviteFriend from '@/components/icons/IconInviteFriend.vue';

    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore()

    const nFormat = new Intl.NumberFormat(undefined);

    const inviteFriend = () => {
        var message = "سلام. من تو را به ربات دیجی نامبر دعوت می کنم.";
        const link = `t.me/diginumber_bbot/myapp?ref=${userStore.user_id}`;
        var telegramLink = `tg://msg_url?url=${link}&text=${message}`;
        telegramLink = encodeURI(telegramLink);
        window.open(telegramLink, '_blank');
    };

</script>