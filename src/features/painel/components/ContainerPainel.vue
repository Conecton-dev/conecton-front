<template>
  <div class="container">
    <div class="titulo">
      <h1>{{ Tittle }}</h1>
    </div>
    <div class="conteudo">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  Tittle: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.container {
  width: 437px;
  border: 2px solid var(--tertiary-gray);
  height: 211px;
  border-radius: 10px;
}

.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 600;
  border-bottom: 3px solid var(--tertiary-gray);
  height: 40px;
}

.titulo h1 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.conteudo {
  padding: 14px;
  height: 171px;
}
</style>
