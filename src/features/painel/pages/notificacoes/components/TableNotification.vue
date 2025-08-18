<template>
  <div class="table">
    <div class="row header">
      <div>Data</div>
      <div>Título</div>
      <div>Status</div>
      <div>Ações</div>
    </div>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
    <CardNotification></CardNotification>
  </div>
</template>

<script setup>
import CardNotification from './CardNotification.vue';
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border-collapse: collapse;
}

.row {
  display: contents;
}

.row > div {
  font-size: 14px;
  padding: 10px;
  color: var(--second-gray);
}

.header > div {
  font-weight: bold;
  font-size: 14px;
  color: var(--primary);
}
</style>
