<template>
    <Loading v-if="loading" />
    <div v-else>
        <div class="text-white w-full mt-24">
            <div class="bg-purple-900 rounded-md p-4 w-11/12 mt-6 mx-auto flex flex-col items-end  duration-300 hover:box-shadow hover:scale-105 load-component" :style="'animation-delay: '+3*(0/10 - 0.1)+'s'">
                <div class="rounded-full flex flex-row-reverse items-center gap-3"> 
                    <img class="rounded-full w-16 h-16" :src="img_src" alt="profile">
                    <div class="flex flex-col gap-1 mt-4">
                        <p dir='rtl' class="samim-font mt-1"> {{ userStore.first_name +" "+ userStore.last_name }} </p>
                        <div dir='rtl' class="flex justify-center gap-1">
                            <p class="text-xs samim-font">شناسه کاربری : </p>
                            <p class="text-xs">{{  userStore.user_id  }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-purple-900 rounded-md p-4 w-11/12 mt-12 mx-auto flex flex-col items-end hover:scale-105 duration-300 hover:box-shadow load-component" :style="'animation-delay: '+3*(1/10 - 0.1)+'s'">
                    <div dir='rtl' class="flex items-center gap-2">
                        <IconUser class="-mt-1"/>
                        <p class="samim-font">نام کاربری : </p>
                        <p :class="userStore.username == null ? 'samim-font' : ''"> {{ userStore.username ? `${userStore.username}@` : 'بدون نام کاربری' }} </p>
                    </div>
            </div>

            <div class="bg-purple-900 rounded-md p-4 w-11/12 mt-6 mx-auto flex flex-col items-end duration-300 hover:box-shadow load-component hover:scale-105" :style="'animation-delay: '+3*(2/10 - 0.1)+'s'">
                <div dir='rtl' class="flex items-center gap-2">
                    <IconPhone class='-mt-1'/>
                    <p class="samim-font">شماره موبایل : </p>
                    <p> {{ userStore.phone }} </p>
                </div>
            </div>

           
            <div class="bg-purple-900 w-6/12 flex justify-center items-center flex-row-reverse gap-2 mt-24 duration-300 hover:bg-purple-950 hover:scale-105 p-4 text-white m-auto rounded-md cursor-pointer group hover:box-shadow load-component" :style="'animation-delay: '+3*(3/10 - 0.1)+'s'">
                <IconSupport class="duration-300"/>
                <p class="samim-font duration-300">پشتیبانی</p>
            </div>
        </div>
    </div> 
</template>    

<script setup>
    import IconSupport from '@/components/icons/IconSupport.vue';
    import IconUser from '@/components/icons/IconUser.vue';
    import IconPhone from '@/components/icons/IconPhone.vue';
    import Loading from '@/components/Loading.vue';

    import { ref, onMounted } from 'vue';

    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore()

    const loading = ref(true);

    const img_src = ref("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg");

    const loadAssets = async () => {
        // Load fonts
        await document.fonts.ready;

        // Simulate loading other assets like images
        await new Promise((resolve) => {
            const images = [
            img_src.value
            // Add more images as needed
            ];
            
            let loadedImages = 0;
            
            images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                resolve();
                }
            };
            });
        });

    // Once everything is loaded, set loading to false
    loading.value = false;
    };

    onMounted(() => {
    loadAssets();
    });

</script>