<template>
  <div class="card">
    <ion-icon :icon="iconCard" class="icon"></ion-icon>
    <h1>{{ nomeCard }}</h1>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";

defineProps({
  nomeCard: {
    type: String,
    required: true,
  },
  iconCard: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  border-radius: 10px;
  width: 182px;
  height: 92px;
}
.card:hover {
  background-color: var(--secondary);
}
.card h1 {
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
}

.card .icon {
  color: white;
  width: 36px;
  height: 36px;
  margin-bottom: 8px;
}
</style>
