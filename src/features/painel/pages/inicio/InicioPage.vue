<template>
  <div class="container-principal">
      <ContainerPainel
          Tittle="Registro de prestação de serviço"
      >
        <PrestacaoServico/>
      </ContainerPainel>

      <ContainerPainel
          Tittle="Acompanhamento - 13/02/2025">
        <Acompanhamento/>
      </ContainerPainel>
  </div>
</template>

<script setup>
import Acompanhamento from '../../components/Acompanhamento.vue';
import PrestacaoServico from '../../components/PrestacaoServico.vue';
import ContainerPainel from '../../components/ContainerPainel.vue';
</script>

<style scoped src="./inicio.css"></style>