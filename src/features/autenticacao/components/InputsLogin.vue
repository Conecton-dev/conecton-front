<template>
  <div class="container-input">
    <label class="Label-login" for="">{{ NomeLabel }}</label>
    <div class="input">
      <ion-icon :icon="person" class="icon"></ion-icon>
      <input
        :value="NomeUser"
        @input="$emit('update:NomeUser', $event.target.value)"
        class="input-login"
        :placeholder="NomePlaceholder"
        :type="TipoInput"
        :autocomplete="AutoComplete"
        :disabled="isDisablade"
      />
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { person } from "ionicons/icons";

defineProps({
  NomeLabel: {
    type: String,
    required: true,
  },
  NomePlaceholder: {
    type: String,
    required: true,
  },
  NomeUser: {
    type: String,
    required: false,
    default: "",
  },
  TipoInput:{
    type: String,
    required: true,
  },
  AutoComplete:{
    type: String,
    required: true
  },
  isDisablade: {
    type: Boolean,
    required: false,
  },
});

defineEmits(["update:NomeUser"]);
</script>

<style scoped>
.input {
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-gray);
  border-radius: 15px;
  padding: 15px;
  width: 100%;
}
.icon {
  width: 13px;
  height: 14px;
  margin-right: 10px;
  color: var(--secondary);
}
.input-login {
  outline: none;
  border: none;
  width: 100%;
  font-size: 10px;
  height: 20px;
  font-family: Poppins;
  background-color: transparent;
}
.input-login::placeholder {
  color: var(--second-gray);
  font-size: 10px;
  font-weight: 300;
  opacity: 1;
}n
.Label-login {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 600;
  color: var(--secondary);
}
.container-input {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
