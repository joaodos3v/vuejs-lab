<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span>
        Total:
        <strong>{{ total | dinheiro }}</strong>
      </span>
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  /** Essa é uma forma de poder "apelidar" os getters */
  computed: mapGetters("carrinho", {
    total: "valorTotal"
  }),

  /** Poderia chamar os getters assim, mas daí teria que usar exatamente "valorTotal" */
  // computed: mapGetters(["valorTotal"]),

  // computed: {
  //   total() {
  //     return this.$store.getters.valorTotal;
  //   }
  // }
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
