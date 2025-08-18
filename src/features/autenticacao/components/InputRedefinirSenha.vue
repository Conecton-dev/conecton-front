<template>
  <input class="input-senha" type="text" :placeholder="NomePlaceholder" />
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  NomePlaceholder: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.input-senha {
  outline: none;
  border: none;
  width: 100%;
  height: 34px;
  color: var(--second-gray);
  border-radius: 15px;
  padding-left: 20px;
  background-color: var(--primary-gray);
  font-size: 8px;
}
</style>
