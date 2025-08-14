<template>
    <div class="opcao">
        <ion-icon class="icons"  :class="{ 'opcao-selecionada': isSelected }" :icon="Icon"></ion-icon>  
        <h1 :class="{ 'opcao-selecionada': isSelected }">{{ NomeOpcao }}</h1>
    </div>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { defineProps } from 'vue';

defineProps({
    NomeOpcao:{
        type: String,
        required: true,
    },
    Icon:{
        type: Object,
        required: true
    },
    isSelected: {
        type: Boolean,
        required: true
    }
})
</script>

<style scoped>
.opcao {
    cursor: pointer;
    gap: 23px;
    font-family: Poppins, Arial;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 35px;
    height: 57px;
}
h1 {
    color: var(--primary);
    margin: 0;
    font-size: 12px;
    font-weight: 600;
}
h1.opcao-selecionada { 
    color: rgb(255, 255, 255); 
}
.icons.opcao-selecionada { 
    color: rgb(255, 255, 255); 
}
.icons {
    color: var(--primary);
    width: 21px;
    height: 21px;
}
</style>