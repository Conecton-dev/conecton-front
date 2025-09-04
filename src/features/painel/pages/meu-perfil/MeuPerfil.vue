<template>
  <div class="main-perfil">
    <h1>Meu Perfil</h1>
    <div class="container-perfil">
      <CardFunction @click="getDadosPerfil" nomeCard="Meu Perfil" :iconCard="person" />
      <CardFunction @click="router.push({ name: 'redefinir-senha' })" nomeCard="Alterar senha" :iconCard="key" />
    </div>
  </div>
</template>

<script setup>
import CardFunction from "./components/CardFunction.vue";
import { person, key } from "ionicons/icons";
import { modalController } from "@ionic/vue";
import ModalDadosPerfil from "./components/ModalDadosPerfil.vue";
import router from "@/router";

const getDadosPerfil = async () => {
  const modal = await modalController.create({
    component: ModalDadosPerfil,
    cssClass: "modal-dados-perfil",
  });
  await modal.present();
};

</script>

<style scoped src="./meuPerfil.css"></style>
