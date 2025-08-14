<template>
  <div class="container-principal-email">
    <div class="container-mensagem-redefinicao">
      <h1>Redefinição de senha enviada!</h1>
      <p>enviamos um e-mail de redefinição para:</p>
      <p class="email">fulan*********@gmail.com</p>
    </div>
    <VoltarLogin />
  </div>
</template>

<script setup>
import VoltarLogin from "../../components/VoltarLogin.vue";
</script>

<style scoped src="./email-redefinir-senha.css"></style>
