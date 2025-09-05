<template>
  <div class="toolbar-container">
    <h1><span class="highlight">#1</span> 14/08/2025 - Ajustar registro</h1>
    <div @click="cancel">
      <ion-icon :icon="closeCircle" class="icon"></ion-icon>
    </div>
  </div>
  <ion-content class="ion-padding">
    <div class="horario-ajuste">
      <div>
        <h2>Data inicial</h2>
        <div class="input-icon">
          <ion-icon :icon="calendar" class="icon-calendar" />
          <input class="input-date" type="date" />
        </div>
      </div>
      <div>
        <h2>Data inicial</h2>
        <div class="input-icon">
          <ion-icon :icon="calendar" class="icon-calendar" />
          <input class="input-date" type="date" />
        </div>
      </div>
    </div>
    <div class="justificativa">
      <h2>Justificativa</h2>
      <textarea rows="4"></textarea>
    </div>
    <div class="button-footer">
      <button @click="cancel" class="cancel-button">Cancelar</button>
      <button @click="cancel" class="aprovacao-button">
        Enviar para aprovação
      </button>
    </div>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { closeCircle } from "ionicons/icons";
import { modalController } from "@ionic/vue";
import { calendar } from "ionicons/icons";

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

.input-date {
  border: none;
  outline: none;
  background-color: var(--primary-gray);
  width: 180px;
  padding-left: 10px;
  color: gray;
  font-size: 12px;
}

.input-icon {
  width: 276px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 36px;
  background-color: var(--primary-gray);
  border-radius: 6px;
}

.icon-calendar {
  color: var(--primary);
  font-size: 16px;
}
.horario-ajuste {
  display: flex;
  gap: 20px;
}
.horario-ajuste h2 {
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  margin: 0px 0px 10px 0px;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.justificativa h2 {
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
}

.justificativa textarea {
  width: 100%;
  border-radius: 6px;
  height: 68px;
  padding: 10px;
  font-size: 12px;
  background-color: var(--primary-gray);
  border: none;
  outline: none;
  resize: none;
}
.button-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel-button {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 13px 28px;
  font-size: 12px;
  cursor: pointer;
}

.aprovacao-button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 28px;
  font-size: 12px;
  cursor: pointer;
}

.highlight{
  color: var(--primary);
}
</style>
