<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <p><strong>Código:</strong> {{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     window.console.log("De: ", from);
  //     window.console.log("Para: ", to);
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    irParaInicio() {
      // this.$router.push("/");
      this.$router.push({ path: "/" });
    }
  }
}
</script>

<style>

</style>