<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <HeaderPainel :ExecutarMenuLateral="toogleState"/>
        <DescricaoUser />
          <MenuLateral :state="state" />
          <div v-if="state" class="blur"></div>
        <router-view></router-view>
        <FooterPainel class="footer" />
      </div>
    </ion-content>
  </ion-page>
  </template>
  
<script setup>
import { IonContent, IonPage } from "@ionic/vue";
import MenuLateral from "./MenuLateral.vue";
import FooterPainel from "./FooterPainel.vue";
import DescricaoUser from "../../features/painel/components/DescricaoUser.vue";
import HeaderPainel from "./HeaderPainel.vue";
import {ref} from "vue";
const state = ref(false);

const toogleState = () => {
  state.value = !state.value;
}
</script>
  
<style scoped>

.blur {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.226);
}
  
</style>
  