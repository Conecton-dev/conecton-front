<template>
  <div class="container-principal">
    <div class="esqueci-senha-container">
      <h1 class="tittle-esqueci-senha">Esqueceu senha?</h1>
      <p>Informe CPF ou e-mail cadastrado.</p>
    </div>
    <InputRedefinirSenha
      class="input-redefinir-senha"
      NomePlaceholder="Insira sua senha"
    />
    <ButtonLogin
      @click="redefinirSenha"
      NomeBotao="Enviar"
      class="botao-login"
    />
    <VoltarLogin />
  </div>
</template>

<script setup>
import VoltarLogin from "../../components/VoltarLogin.vue";
import InputRedefinirSenha from "../../components/InputRedefinirSenha.vue";
import ButtonLogin from "../../components/ButtonLogin.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const redefinirSenha = () => {
  router.push({ name: "redefinir-senha" });
};
</script>

<style scoped src="./esqueci-senha.css"></style>
