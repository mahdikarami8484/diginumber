<template>
    <Loading v-if="loading"/>
    <div v-once v-else class="mb-36 scroll-smooth">
        <div dir="rtl" class="bg-purple-900 w-11/12 m-auto mt-4 flex text-white p-4 rounded-md justify-start gap-8 mb-5 hover:box-shadow load-component cursor-pointer duration-300" :style="'animation-delay: '+3*(loaded_component++/10 - 0.1)+'s'">
            <div class="flex gap-2 justify-center">
                <IconEarth class=""/>
                <p class="samim-font"> کشور </p>
            </div>
            <div class="flex gap-1 justify-center ">
                <IconDollar class=""/>
                <p class="samim-font">قیمت</p>
            </div>
            <div class="flex gap-2 justify-center">
                <IconCount class=""/>
                <p class="samim-font">تعداد</p>
            </div>
        </div>
        <div dir="rtl" v-once class="w-11/12 m-auto flex text-white p-4 py-5 rounded-md items-center justify-start gap-7 hover:box-shadow mt-2 load-component cursor-pointer relative duration-300" :style="'animation-delay: '+3*(loaded_component++/10 - 0.1)+'s'" v-for="(number, i) in numbers" :class="i % 2 == 0 ? 'bg-purple-700' : 'bg-purple-800'">
            <div class="flex gap-2 justify-center">
                
                <component class="w-6 h-6 rounded-md" :is="flags_component[number['flag']]" />
                <p class="samim-font"> {{  number['country_name'] }} </p>
            </div>
            <div class="flex gap-1 justify-center">
                <p class="samim-fd-font">{{ nFormat.format(number['price']) }}</p>
                <p class="samim-font"> تومان</p>
            </div>
            <div class="flex gap-1 justify-center">
                <p class="samim-fd-font">{{ nFormat.format(number['availbale']) }}</p>
                <p class="samim-font"> تا </p>
            </div>
            <div class="absolute left-5 bg-orange-700 justify-self-end p-2 px-4 rounded-md hover:bg-orange-600 hover:box-shadow-bottom-button-buy hover:scale-105 duration-300" @click="buy(number['price'], number['availbale'], number['country_name'])">
                <p class="samim-font" >خرید</p>
            </div>
        </div>
    </div>
    <BuyDialog v-for="dialog in dialogs" :money="dialog['data']['money']" :count="dialog['data']['count']" :country_name="dialog['data']['country_name']"/>
</template>

<script setup>
    import IconPhone from '@/components/icons/IconPhone.vue';
    import IconEarth from "@/components/icons/IconEarth.vue";
    import IconDollar from "@/components/icons/IconDollar.vue";
    import IconCount from "@/components/icons/IconCount.vue";
    import Loading from '@/components/Loading.vue';
    import BuyDialog from '@/components/dialogs/BuyDialog.vue';

    import { ref, onMounted, markRaw } from 'vue';

    var loaded_component = 0;

    const loading = ref(true);

    const nFormat = new Intl.NumberFormat(undefined);

    var numbers = '{\"numbers\":[{\"country_name\":\"ایران\",\"flag\":\"ir\",\"availbale\":1000,\"country_code\":\"+98\",\"price\":10000},{\"country_name\":\"آلمان\",\"flag\":\"de\",\"availbale\":100,\"country_code\":\"+1\",\"price\":25000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"ad\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000}]}';

    numbers = JSON.parse(numbers)['numbers'];

    const flags_component = ref({});

    const loadCountryFlags = async () => {
        for (const number of numbers) {
            try {
                const flag_name = number['flag'].charAt(0).toUpperCase() + number['flag'].slice(1);;
                const componentName = `Icon${flag_name}Flag`;
                const component = await import(`@/components/icons/flags/${componentName}.vue`);
                if( flags_component.value[number['flag']] === undefined){
                    flags_component.value[number['flag']] = markRaw(component.default);
            }
            } catch (error) {
                console.error(`Failed to load flag component for ${number['flag']}:`, error);
            }
        }
        loading.value = false
    };

    const dialogs = ref([]);

    const buy = (money, count, country_name) => {
            dialogs.value.push({
                "type": "buy",
                'data': {
                    'money': money,
                    'count': count,
                    'country_name': country_name
                }
            });
    };

    onMounted(() => {
    loadCountryFlags();
    });

</script>