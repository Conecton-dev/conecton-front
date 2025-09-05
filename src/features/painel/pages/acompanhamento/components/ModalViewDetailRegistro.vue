<template>
  <div class="toolbar-container">
    <h1>#1 14/08/2025 - Ajustes</h1>
    <div @click="cancel">
      <ion-icon :icon="closeCircle" class="icon"></ion-icon>
    </div>
  </div>
  <ion-content class="ion-padding">
    <div class="container-divisor">
      <div class="grid-dados">
        <div>
          <h1>#</h1>
          <p>1</p>
        </div>
        <div>
          <h1>Nova Entrada</h1>
          <p>08:00:01</p>
        </div>
        <div>
          <h1>Nova Saída</h1>
          <p>12:00:01</p>
        </div>
        <div>
          <h1>Status</h1>
          <p>Pendente</p>
        </div>
        <div>
          <h1>Ações</h1>
          <div @click="addAjusteRegistro">
            <ion-icon class="pencil-icon" :icon="pencil"></ion-icon>
            <ion-icon class="pencil-icon" :icon="trash"></ion-icon>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button @click="cancel" class="cancel-button">Cancelar</button>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { closeCircle, pencil, trash } from "ionicons/icons";
import { modalController } from "@ionic/vue";
import ModalAjuste from "./ModalAjuste.vue";

const cancel = () => modalController.dismiss(null, "cancel");

const addAjusteRegistro = async () => {
  const modal = await modalController.create({
    component: ModalAjuste,
    cssClass: "modal-add-ajuste-registro",
  });
  cancel();
  await modal.present();
};
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

.grid-dados {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  width: 100%;
  white-space: nowrap;
}

.grid-dados h1 {
  font-size: 14px;
  margin: 0px 0px 4px 0px;
  color: var(--primary);
}

.grid-dados p {
  font-size: 14px;
  color: var(--second-gray);
  margin: 7px 0 0 0;
}

.cancel-button {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 6px;
  padding: 13px 28px;
  font-size: 12px;
  cursor: pointer;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.pencil-icon {
  cursor: pointer;
  color: var(--primary);
  font-size: 22px;
}
.container-divisor {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
