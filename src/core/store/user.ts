import {Profile} from "../models/userInterface";
import {defineStore} from "pinia";
import {ref} from "vue";
import api from "@/core/api/api";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userProfile: ref<Profile | null>(null)
    }),
    actions: {
        setUseProfile(user: Profile) {
            this.userProfile = user
            console.log(user)
        },
        async getUserProfile() {
            const response = await api.get("/user");
            if (response.data) {
                this.userProfile = response.data;
            }
        }
    }
})