<template>
  <div class="row">
    <div>14/08/2025</div>
    <div>Aviso</div>
    <div>Não lido</div>
    <div @click="emit('notification')">
      <ion-icon class="icon" :icon="mail" />
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { mail } from "ionicons/icons";
import { defineEmits } from "vue";

const emit = defineEmits(["notification"]);
console.log('teste2')
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
</style>
