import { defineStore } from "pinia";

const {
    id: user_id = 6454614, 
    first_name = 'John', 
    last_name = 'Doe', 
    username = null 
} = window.Telegram.WebApp.initDataUnsafe.user || {};

export const useUserStore = defineStore('user', {
    state: () => ({
        user_id: user_id,
        first_name: first_name,
        last_name: last_name,
        username: username,
        balance: 0,
        phone: "06464",
        verifiedPhone: true
    })
})