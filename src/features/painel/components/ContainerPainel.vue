<template>
    <div>
        <div class="titulo"> <h1>{{ Tittle }} </h1></div>
        <div class="conteudo">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    Tittle:{
        type: String,
        required: true
    }
})
</script>
<style scoped>
.titulo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Arial;
    color: var(--secondary);
    font-weight: 600;
    width: 437px;
    height: 39px;
    border: 2px solid var(--primary);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
.titulo h1{
    margin-bottom: 12px;
    font-size: 23px;
}
.conteudo{
    padding: 14px;
    width: 437px;
    height: 172px;
    border: 2px solid var(--primary);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
</style>