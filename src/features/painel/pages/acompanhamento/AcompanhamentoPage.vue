<template>
  <div class="main-notificacoes">
    <h1 class="title">Acompanhamento</h1>
    <div class="container-busca">
      <div class="data-busca">
        <div>
          <h2>Data inicial</h2>
          <div class="input-icon">
            <ion-icon :icon="calendar" class="icon-calendar" />
            <input class="input-date" type="date" />
          </div>
        </div>
        <div>
          <h2>Data Final</h2>
          <div class="input-icon">
            <ion-icon :icon="calendar" class="icon-calendar" />
            <input class="input-date" type="date" />
          </div>
        </div>
      </div>
      <div class="buttons-busca">
        <button class="btn-buscar">Buscar</button>
        <button class="btn-limpar">Limpar filtros</button>
      </div>
    </div>
    <div class="main-container">
      <TableAcompanhamento />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableAcompanhamento from "./components/TableAcompanhamento.vue";
import { IonIcon } from "@ionic/vue";
import { calendar } from "ionicons/icons";
</script>

<style scoped src="../acompanhamento/acompanhamento.css"></style>
