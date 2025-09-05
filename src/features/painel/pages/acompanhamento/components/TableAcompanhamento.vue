<template>
  <div class="table">
    <div class="row header">
      <div>Data</div>
      <div>Tempo em Atividades</div>
      <div>Status</div>
      <div>Ações</div>
    </div>
    <CardTable
      v-for="not in notifications"
      :key="not.id"
      @viewAcompanhamento="viewAcompanhamento"
      @listaDeAjustes="listaDeAjustes"
    ></CardTable>
  </div>
</template>

<script setup>
import ModalViewDetailRegistro from "./ModalViewDetailRegistro.vue";
import ModalListaAjustes from "./ModalListaAjustes.vue";
import { modalController } from "@ionic/vue";
import CardTable from "./CardTable.vue";

const viewAcompanhamento = async () => {
  const modal = await modalController.create({
    component: ModalListaAjustes,
    cssClass: "modal-view-detail-registro",
  });
  await modal.present();
};

const listaDeAjustes = async () => {
  const modal = await modalController.create({
    component: ModalViewDetailRegistro,
    cssClass: "modal-list-registro",
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
