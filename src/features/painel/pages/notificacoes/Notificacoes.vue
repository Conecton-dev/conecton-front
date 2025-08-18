<template>
  <div class="main-notificacoes">
    <h1 class="title">Notificações</h1>
    <div class="container-notificacoes">
      <TableNotification />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableNotification from './components/TableNotification.vue';
</script>

<style scoped src="../notificacoes/notificacoes.css"></style>
