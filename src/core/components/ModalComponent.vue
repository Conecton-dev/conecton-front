<template>
  <div class="toolbar-container">
    <h1>Titulo modal</h1>
    <div @click="cancel">
      <ion-icon :icon="closeCircle" class="icon"></ion-icon>
    </div>
  </div>
  <ion-content class="ion-padding">
    <p>Realziar ajuste de ponto dos dias 06/05/2025, 08/05/2025</p>
    <div class="button-container">
      <button class="confirm-button">OK</button>
    </div>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { closeCircle } from "ionicons/icons";
import { modalController } from "@ionic/vue";

const cancel = () => modalController.dismiss(null, "cancel");
</script>

<style scoped>
.toolbar-container {
  border-bottom: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
}

.toolbar-container h1 {
  font-size: 22px;
  font-weight: 400;
}

.icon {
  cursor: pointer;
  color: var(--primary);
  height: 24px;
  width: 24px;
}

.confirm-button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 28px;
  font-size: 12px;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

</style>
