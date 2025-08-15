<template>
  <div class="container-servico">
    <div class="horario">
      <ion-icon :icon="time" class="clock icon"></ion-icon>
      {{ horario }}
    </div>
    <div class="botoes">
      <button class="roxo" @click="iniciar">Iniciar</button>
      <button>Finalizar</button>
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";
import { time } from "ionicons/icons";

const horario = ref("00:00:00");
let intervalo;

function obterHoraAtual() {
  const agora = new Date();

  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  return `${horas}:${minutos}:${segundos}`;
}

function iniciar() {
  intervalo = setInterval(() => {
    horario.value = obterHoraAtual();
  }, 1000);
}

onMounted(() => {
  horario.value = obterHoraAtual();
  iniciar();
});

onUnmounted(() => {
  clearInterval(intervalo);
});
</script>

<style scoped>
.botoes {
  display: flex;
  gap: 45px;
}

button {
  background-color: var(--second-gray);
  color: white;
  border-radius: 10px;
  width: 173px;
  height: 37px;
}
.roxo {
  background-color: var(--primary);
}
.horario {
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  color: var(--tertiary-gray);
  font-size: 26px;
}
.container-servico {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
}
.icon {
  width: 52px;
  height: 52px;
}
</style>
