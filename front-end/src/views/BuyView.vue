<template>
    <Loading v-if="loading"/>
    <div v-once v-else class="mb-36 scroll-smooth no-scrollbar">
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
        <div dir="rtl" class="w-11/12 m-auto flex text-white p-4 py-5 rounded-md items-center justify-start gap-7 hover:box-shadow mt-2 load-component cursor-pointer relative duration-300" :style="'animation-delay: '+3*(index*0.1)+'s'" v-for="(number, index) in numbers" :class="index % 2 == 0 ? 'bg-purple-700' : 'bg-purple-800'" :key="index">
            <div class="flex gap-2 justify-center">
                
                <component class="w-6 h-6 rounded-md" :is="flags_component[number['flag']]" />
                <p class="samim-font"> {{  number['country_name'] }} </p>
            </div>
            <div class="flex gap-1 justify-center">
                <p class="samim-fd-font">{{ nFormat.format(number['price']) }}</p>
                <p class="samim-font"> تومان</p>
            </div>
            <div class="flex gap-1 justify-center -mr-4">
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

    const loading = ref(true);

    const nFormat = new Intl.NumberFormat(undefined);

    var numbers = '{\"numbers\":[{\"country_name\":\"ایران\",\"flag\":\"ir\",\"availbale\":1000,\"country_code\":\"+98\",\"price\":10000},{\"country_name\":\"آلمان\",\"flag\":\"de\",\"availbale\":100,\"country_code\":\"+49\",\"price\":25000},{\"country_name\":\"آمریکا\",\"flag\":\"us\",\"availbale\":10,\"country_code\":\"+1\",\"price\":50000},{\"country_name\":\"ژاپن\",\"flag\":\"jp\",\"availbale\":50,\"country_code\":\"+81\",\"price\":45000},{\"country_name\":\"فرانسه\",\"flag\":\"fr\",\"availbale\":200,\"country_code\":\"+33\",\"price\":30000},{\"country_name\":\"کانادا\",\"flag\":\"ca\",\"availbale\":30,\"country_code\":\"+1\",\"price\":40000},{\"country_name\":\"استرالیا\",\"flag\":\"au\",\"availbale\":25,\"country_code\":\"+61\",\"price\":38000},{\"country_name\":\"انگلستان\",\"flag\":\"gb\",\"availbale\":75,\"country_code\":\"+44\",\"price\":35000},{\"country_name\":\"چین\",\"flag\":\"cn\",\"availbale\":150,\"country_code\":\"+86\",\"price\":22000},{\"country_name\":\"هند\",\"flag\":\"in\",\"availbale\":500,\"country_code\":\"+91\",\"price\":15000},{\"country_name\":\"روسیه\",\"flag\":\"ru\",\"availbale\":120,\"country_code\":\"+7\",\"price\":33000},{\"country_name\":\"برزیل\",\"flag\":\"br\",\"availbale\":80,\"country_code\":\"+55\",\"price\":31000},{\"country_name\":\"مکزیک\",\"flag\":\"mx\",\"availbale\":60,\"country_code\":\"+52\",\"price\":28000},{\"country_name\":\"سوئد\",\"flag\":\"se\",\"availbale\":40,\"country_code\":\"+46\",\"price\":36000},{\"country_name\":\"نروژ\",\"flag\":\"no\",\"availbale\":35,\"country_code\":\"+47\",\"price\":34000},{\"country_name\":\"ترکیه\",\"flag\":\"tr\",\"availbale\":300,\"country_code\":\"+90\",\"price\":17000},{\"country_name\":\"ایتالیا\",\"flag\":\"it\",\"availbale\":110,\"country_code\":\"+39\",\"price\":29000},{\"country_name\":\"هلند\",\"flag\":\"nl\",\"availbale\":90,\"country_code\":\"+31\",\"price\":32000},{\"country_name\":\"نیوزیلند\",\"flag\":\"nz\",\"availbale\":20,\"country_code\":\"+64\",\"price\":37000},{\"country_name\":\"کره جنوبی\",\"flag\":\"kr\",\"availbale\":55,\"country_code\":\"+82\",\"price\":42000}]}';

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