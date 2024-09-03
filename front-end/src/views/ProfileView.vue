<template>
    <div>
        <div class="text-white w-10/12 mt-44 m-auto bg-green-800 p-4 rounded-t-sm box-shadow-top">
            <div class="flex flex-row-reverse justify-between items-center">
                <div class="rounded-full flex flex-row-reverse items-center gap-3"> 
                    <img class="rounded-full w-20 h-20" src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?cs=srgb&dl=pexels-aronvisuals-1743165.jpg&fm=jpg" alt="profile">
                    <p class="samim-font mt-1"> {{ first_name + last_name }} </p>
                </div>
                <div class="flex flex-col justify-self-end gap-1">
                    <p class="">id: {{  user_id  }}</p>
                </div>
            </div>
            <div dir="rtl" class="flex flex-col rtl gap-5 mt-12">
                <div class="flex items-center gap-2">
                    <p class="samim-font">نام کاربری : </p>
                    <p> {{ username }}@ </p>
                </div>
                
                <div class="flex items-center gap-2">
                    <p class="samim-font">شماره موبایل : </p>
                    <p> 09132867898 </p>
                </div>
            </div>
        </div>
        <div class="bg-green-900 w-10/12 hover:bg-green-950 text-center p-4 text-white m-auto rounded-b-sm cursor-pointer box-shadow-bottom group">
            <p class="samim-font group-hover:scale-110">پشتیبانی</p>
        </div>
    </div> 
</template>    

<script setup>
    const web_app = window.Telegram.WebApp;
    const init_data_unsafe = web_app.initDataUnsafe;
    const user = init_data_unsafe.user;
    const user_id = user['id'];
    const first_name = user['first_name'];
    const last_name = user['last_name'];
    const username = user['username'];
</script>