<template>
  <div class="home">
    <h2 class="display-1 font-weight-regular my-3">Negocie e Consulte suas Ações</h2>
    <v-alert dense type="info">Você pode Salvar & Carregar os Dados</v-alert>
    <v-alert dense type="success">Clique em 'Finalizar Dia' para iniciar um novo dia!</v-alert>
    <v-divider class="my-5"></v-divider>
    <p class="title"><span class="font-weight-bold">Seu Saldo:</span> {{ funds | currency }}</p>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  
  computed: mapGetters({
    funds: "getFunds",
  })
}
</script>
