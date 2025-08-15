<template>
  <ion-page>
    <ion-content>
      <div class="conteudo">
        <img class="logo-connect-on" src="@/assets/logo/logo.png" alt="">
        <div class="white-container">
          <router-view></router-view>
        </div>
        <p class="footer-autenticacao">Versão 0.0.1 - Atena agência</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
</script>

<style scoped>

.logo-connect-on{
  margin-bottom: 24px;
  width: 257px;
  height: 54px;

}
.conteudo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--primary);
  height: 100vh;
  width: 100%;
}

.white-container {
  background-color: white;
  width: 314px;
  border-radius: 32px;
  padding: 30px 20px;
}
.footer-autenticacao{
  font-weight: 300;
  color: white;
  position: fixed;
  bottom: 0;
  padding-bottom: 67px;
  font-size: 12px;
}
</style>
