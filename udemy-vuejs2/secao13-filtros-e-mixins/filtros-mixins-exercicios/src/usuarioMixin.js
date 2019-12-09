export default {
  computed: {
    usuarioLogado() {
      return "Maria da Silva";
    }
  },

  created() {
    window.console.log("Created - Usuário mixin");
  }
}