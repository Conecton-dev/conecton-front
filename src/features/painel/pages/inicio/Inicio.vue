<template>
  <div class="container-principal">
    <div class="container-secundario">
      <ContainerPainel
          Tittle="Registro de prestação de serviço"
      >
        <PrestacaoServico/>
      </ContainerPainel>
      <ContainerPainel
          Tittle="Avisos">
        <Avisos/>
      </ContainerPainel>
    </div>
    <div class="container-secundario">
      <ContainerPainel
          Tittle="Acompanhamento - 13/02/2025">
        <Acompanhamento/>
      </ContainerPainel>
      <ContainerPainel
          Tittle="Pendências">
        <Pendencias/>
      </ContainerPainel>
    </div>
  </div>
</template>

<script setup>
import Pendencias from '../../components/Pendencias.vue';
import Avisos from '../../components/Avisos.vue';
import Acompanhamento from '../../components/Acompanhamento.vue';
import PrestacaoServico from '../../components/PrestacaoServico.vue';
import ContainerPainel from '../../components/ContainerPainel.vue';
</script>

<style scoped src="./inicio.css">

</style>