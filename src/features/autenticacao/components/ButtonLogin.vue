<template>
  <button :disabled="isDisable" class="botao-login">
    <slot> {{ NomeBotao }} </slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  NomeBotao: {
    type: String,
    required: true,
  },
  isDisable: {
    type: Boolean,
    required: true,
  },
});
</script>
<style scoped>
.botao-login {
  margin-top: 16px;
  background-color: var(--primary);
  width: 100%;
  height: 34px;
  color: white;
  border-radius: 30px;
  margin-bottom: 26px;
  font-size: 12px;
}

.botao-login:hover {
  background-color: #712fb5;
}
</style>
