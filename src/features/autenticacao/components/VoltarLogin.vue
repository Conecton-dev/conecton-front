<template>
    <a @click="voltarLogin" class="voltar-login" href="#">Voltar ao login</a>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const voltarLogin = () => {
    router.push({name: 'login'})
}
</script>

<style scoped>
.voltar-login{
    color: var(--primary);
    margin: 0;
    font-size: 10px;
    display: block;
    text-align: center;
}
</style>