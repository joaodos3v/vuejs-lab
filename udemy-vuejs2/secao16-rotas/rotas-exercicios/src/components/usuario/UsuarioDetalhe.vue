<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <router-link tag="button" primario :to="`/usuario/${id}/editar`">
      Editar
    </router-link>
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
}
</script>

<style>

</style>