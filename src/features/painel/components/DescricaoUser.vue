<template>
    <div class="descricao-user">
        <div class="dados-descricao">
            <h1 class="nome">{{ nomeColaborardor.name }}</h1>
            <div class="line"></div>
            <h1><span class="funcao">Função:</span> Desenvolvedor </h1>
            <div class="line"></div>
            <h1><span class="operacao">Operação:</span> Híbrido</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/core/store/user';
const userStore = useUserStore()
const nomeColaborardor = userStore.userProfile

</script>
<style scoped>
.descricao-user{
    z-index: 3;
    font-family: Poppins, Arial;
    background-color: var(--light-purple);
    width: 100%;
    height: 40px;
    display: flex;
    align-self: center;
    justify-content: start;
}
.dados-descricao{
    gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
}

.dados-descricao h1{
    font-size: 14px;
    margin: 0;
}
.nome {
    font-weight: 600;
}
.funcao{
    font-weight: 600;
}
.operacao{
    font-weight: 600;
}
.line {
    width: 1px;
    height: 20px; 
    background-color: var(--primary);
    margin: 5px 0; 
}
</style>