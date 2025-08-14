<template>
  <h1 class="senha-alterada">
    Senha alterada com <br />
    sucesso!
  </h1>
  <VoltarLogin class="voltar-login" />
  {{ userName }}
</template>

<script setup>
import { useNameUser } from "../../../../../core/store/store";
import { storeToRefs } from "pinia";
const store = useNameUser();
const { userName } = storeToRefs(store);
import VoltarLogin from "../../components/VoltarLogin.vue";
</script>

<style scoped src="./senha-alterada.css"></style>
