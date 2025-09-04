<template>
  <div class="table">
    <div class="row header">
      <div>Data</div>
      <div>Título</div>
      <div>Status</div>
      <div>Ações</div>
    </div>
    <CardNotification
      v-for="not in notifications"
      :key="not.id"
      @notification="openNotification"
      :iconMail="not.status === 'Lido' ? mailOpen : mail"
    ></CardNotification>
  </div>
</template>

<script setup>
import CardNotification from "./CardNotification.vue";
import ModalComponent from "@/core/components/ModalComponent.vue";
import { modalController } from "@ionic/vue";
import { mail, mailOpen } from "ionicons/icons";

const openNotification = async () => {
  const modal = await modalController.create({
    component: ModalComponent,
    cssClass: "modal-notification",
  });
  await modal.present();
};

const notifications = [
  {
    id: 1,
    date: "14/08/2025",
    title: "Aviso",
    status: "Não lido",
  },
  {
    id: 2,
    date: "15/08/2025",
    title: "Atualização",
    status: "Lido",
  },
];
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
