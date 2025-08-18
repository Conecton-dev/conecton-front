import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../api/api";
import { credential } from "../models/authInterface";
import { useUserStore } from "../store/user";
import router from "@/router";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: ref(localStorage.getItem("auth_token") || ""),
    aviso: ref(false),
    isDisabled: ref(false)
  }),

  actions: {
    async login(formLogin: credential) {
      try {
        this.isDisabled = true
        const response = await api.post("/login", {
          ...formLogin,
        });
        const { access_token } = response.data;
        const userProfile = response.data.user;
        useUserStore().setUseProfile(userProfile);
        this.token = access_token;
        localStorage.setItem("auth_token", access_token);
        this.aviso = false
        router.push("/painel/inicio");
        return response
      } catch (error: any) {
        this.isDisabled = false
        this.aviso = true;
      }
    },
  },
});
