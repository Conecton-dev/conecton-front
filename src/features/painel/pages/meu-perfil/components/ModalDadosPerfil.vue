<template>
  <div class="toolbar-container">
    <h1>Meus dados</h1>
    <div @click="cancel">
      <ion-icon :icon="closeCircle" class="icon"></ion-icon>
    </div>
  </div>
  <ion-content class="ion-padding">
    <div class="grid-dados">
      <div>
        <h1>Nome:</h1>
        <p>HERBET GOMES MEDRADO JUNIOR:</p>
      </div>
      <div>
        <h1>Função:</h1>
        <p>Desenvolvedor</p>
      </div>
      <div>
        <h1>CPF:</h1>
        <p>000.000.000-00</p>
      </div>
      <div>
        <h1>Email:</h1>
        <p>meuperfil@atenaagencia.com</p>
      </div>
      <div>
        <h1>Tipo de Operação:</h1>
        <p>Remota</p>
      </div>
      <div>
        <h1>Cadastrado em:</h1>
        <p>14/07/2019</p>
      </div>
    </div>
    <div class="button-container">
      <button @click="cancel" class="cancel-button">Cancelar</button>
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

.grid-dados {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.grid-dados h1 {
  font-size: 16px;
  margin: 15px 0px 4px 0px;
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
  margin-top: 37px;
  display: flex;
  justify-content: flex-end;
}
</style>
