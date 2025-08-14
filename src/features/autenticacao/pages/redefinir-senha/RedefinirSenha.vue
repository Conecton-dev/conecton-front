<template>
    <div class="container-principal">
        <h1>Olá, Fulano. Redefina sua senha.</h1>
        <div class="div-inputs">
            <InputRedefinirSenha NomePlaceholder="Nova senha"/>
            <InputRedefinirSenha NomePlaceholder="Confirme senha" />
        </div>
        <ButtonLogin @click="redefinirSenha" class="botao-alterar-senha" NomeBotao="Alterar Senha" />
        <VoltarLogin class=""/>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import VoltarLogin from '../../components/VoltarLogin.vue';
import ButtonLogin from '../../components/ButtonLogin.vue';
import InputRedefinirSenha from '../../components/InputRedefinirSenha.vue';

const router = useRouter()

const redefinirSenha = () => {
    router.push({ name: 'email-redefinir-senha'})
}
</script>

<style scoped src="./redefinir-senha.css">

</style>