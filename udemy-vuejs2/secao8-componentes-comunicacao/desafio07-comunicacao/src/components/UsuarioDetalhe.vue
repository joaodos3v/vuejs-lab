<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
import Bus from "@/bus.js";

export default {
    data() {
        return {
            usuario: null
        }
    },

    created() {
        Bus.onUserChanges(user => {
            this.usuario = user;
        });
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
