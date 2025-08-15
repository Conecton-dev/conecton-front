<template>
  <form @submit.prevent="handleLogin">
    <div class="inputs-login">
      <InputsLogin
        TipoInput="email"
        AutoComplete="email"
        class="input-cima"
        NomeLabel="Prestador de Serviço"
        NomePlaceholder="CPF ou e-mail"
        v-model:NomeUser="formLogin.email"
        :isDisablade="isDisablad"
      />
      <InputsLogin
        TipoInput="password"
        AutoComplete="current-password"
        NomeLabel="Senha"
        NomePlaceholder="Insira sua senha"
        v-model:NomeUser="formLogin.password"
        :isDisablade="isDisablad"
      />
    </div>
    <AvisoLogin
      v-if="authStore.aviso"
      class="aviso-login"
      descricaoAviso="Login ou senha inválidos"
    />
    <ButtonLogin
      :isDisable="isDisablad"
      class="botao-login"
      :NomeBotao="NomeBotao"
      @click="handleLogin"
    >
      <ion-icon
        :icon="ellipsisHorizontal"
        class="icon-loading"
        v-if="isDisablad"
      ></ion-icon>
    </ButtonLogin>

    <EsqueciSenha @click="router.push('/auth/esqueci-senha')" />
  </form>
</template>

<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import AvisoLogin from "../../components/AvisoLogin.vue";
import EsqueciSenha from "../../components/EsqueciSenha.vue";
import ButtonLogin from "../../components/ButtonLogin.vue";
import InputsLogin from "@/features/autenticacao/components/InputsLogin.vue";
import { ref, computed } from "vue";
import { useAuthStore } from "@/core/store/auth";
import { onMounted } from "vue";
import { credential } from "@/core/models/authInterface";
import { ellipsisHorizontal } from "ionicons/icons";
import router from "@/router";

const authStore = useAuthStore();
const formLogin = ref<credential>({ email: null, password: null });

const isDisablad = computed(() => authStore.isDisabled);
const NomeBotao = ref("Acessar");

const handleLogin = async () => {
  NomeBotao.value = "";
  const response = await authStore.login(formLogin.value);
  if (!response?.sucesso) {
    NomeBotao.value = "Acessar";
  }
};

onMounted(() => {
  authStore.isDisabled = false;
});
</script>

<style src="./login.css"></style>
