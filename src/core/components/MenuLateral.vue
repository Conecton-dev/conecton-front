<template>
    <div v-if="state" class="menu-lateral">
      <OpcoesMenuLateral
        :class="{ 'opcao-escolhida': selectedOption === 'inicio' }"
        @click="setSelectedOption('inicio')"
        :Icon="home"
        NomeOpcao="Início"
        :isSelected="selectedOption === 'inicio'"
      />
      <OpcoesMenuLateral
        :class="{ 'opcao-escolhida': selectedOption === 'acompanhamento' }"
        @click="setSelectedOption('acompanhamento')"
        :Icon="time"
        NomeOpcao="Acompanhamento"
        :isSelected="selectedOption === 'acompanhamento'"
      />
      <OpcoesMenuLateral
        :class="{ 'opcao-escolhida': selectedOption === 'notificacoes' }"
        @click="setSelectedOption('notificacoes')"
        :Icon="barbell"
        NomeOpcao="Notificações"
        :isSelected="selectedOption === 'notificacoes'"
      />
      <OpcoesMenuLateral
        :class="{ 'opcao-escolhida': selectedOption === 'meu-perfil' }"
        @click="setSelectedOption('meu-perfil')"
        :Icon="personCircle"
        NomeOpcao="Perfil"
        :isSelected="selectedOption === 'meu-perfil'"
      />
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { home, personCircle, time, barbell } from "ionicons/icons";
import OpcoesMenuLateral from "./OpcoesMenuLateral.vue";
import { useRouter } from "vue-router";

const selectedOption = ref("");
const router = useRouter();
const setSelectedOption = (option) => {
  selectedOption.value = option;
  router.push({ name: option });
};

defineProps({
  state: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.menu-lateral {
  position: fixed;
  top: 97px;
  left: 0;
  padding: 13px 0px 0px 0px;
  background-color: rgb(255, 255, 255);
  width: 275px;
  height: 100vh;
  z-index: 10;
}
.opcao-escolhida {
  background-color: var(--primary);
}
</style>
