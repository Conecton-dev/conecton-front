<template>
  <div class="acompanhamento-principal">
    <div class="acompanhamento-tittle">
      <div class="infos-acompanhamento">
        <p>#</p>
        <p>Início</p>
        <p>Fim</p>
        <p>HT</p>
      </div>
      <div class="line"></div>
    </div>
    <div class="total-de-horas">
      <p>Total de horas</p>
      <p>----</p>
    </div>
  </div>
</template>

<style scoped>
.infos-acompanhamento {
  font-size: 16px;
  display: flex;
  gap: 99px;
  color: var(--secondary);
}
.acompanhamento-principal {
  font-family: Poppins, Arial;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative; 
}
.total-de-horas {
  display: flex;
  gap: 36px;
  color: var(--secondary);
  position: absolute; 
  bottom: 0; 
  right: 0;
}
.line {
  width: 100%;
  border: 1px solid var(--primary);
}
</style>