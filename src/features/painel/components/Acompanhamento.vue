<template>
  <div class="acompanhamento-principal">
    <div class="infos-acompanhamento">
      <p>#</p>
      <p>Início</p>
      <p>Fim</p>
      <p>HT</p>
    </div>
    <div class="total-de-horas">
      <p>Total de horas</p>
      <p>----</p>
    </div>
  </div>
</template>

<style scoped>
.infos-acompanhamento {
  display: flex;
  justify-content: space-between;
  color: var(--primary);
  border-bottom: 1px solid var(--primary);
}

.infos-acompanhamento p {
  margin: 0px 0px 10px 0px;
}

.acompanhamento-principal {
  height: 100%;
  justify-content: space-between;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}

.total-de-horas {
  display: flex;
  gap: 36px;
  color: var(--primary);
  font-size: 12px;
  align-self: flex-end;
}

.total-de-horas p {
  margin: 0;
}
</style>
