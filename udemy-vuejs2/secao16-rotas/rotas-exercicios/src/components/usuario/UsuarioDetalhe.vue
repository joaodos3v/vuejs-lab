<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" primario 
      :to="{ name: 'editarUsuario', params: { id }, query: { completo: false, lingua: 'en' }, hash: '#rodape' }">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  
  beforeRouteEnter(to, from, next) {
    window.console.log("dentro do componente -> usuário detalhe");
    
    // next(vm => {
    //   window.console.log("dentro do componente, exibindo uma propriedade no next cbk -> usuároi detalhe -> ", vm.id);
    // });
    
    const autenticado = true;
    autenticado ? next() : next(false);
  },

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