<template>
  <p class="aviso">{{ descricaoAviso }}</p>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  descricaoAviso: {
    type: String,
    required: true,
  },
});
</script>

<style>
.aviso {
  font-size: 10px;
  margin: 0;
  display: block;
  text-align: center;
  color: var(--red-avisos);
}
</style>
