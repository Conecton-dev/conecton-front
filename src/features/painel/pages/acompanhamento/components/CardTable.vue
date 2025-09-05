<template>
  <div class="row">
    <div>14/08/2025</div>
    <div>04:35</div>
    <div>Atividades Iniciadas</div>
    <div class="actions">
      <ion-icon @click="emit('viewAcompanhamento')" class="icon" :icon="eye" />
      <ion-icon @click="emit('listaDeAjustes')" class="icon" :icon="list" />
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { eye, list } from "ionicons/icons";
import { defineEmits } from "vue";

const emit = defineEmits(["viewAcompanhamento", "listaDeAjustes"]);
</script>

<style scoped>
.row > div {
  font-size: 14px;
  padding: 10px;
  color: var(--second-gray);
}

.icon {
  cursor: pointer;
  color: var(--primary);
  height: 18px;
  width: 19px;
}

.actions {
  display: flex;
  gap: 10px;
}
</style>
