<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixin from "@/frutasMixin";
import usuarioMixin from "@/usuarioMixin";

export default {
  mixins: [frutasMixin, usuarioMixin],

  created() {
    window.console.log("Created - Frutas.vue!");
  }
}
</script>

<style>

</style>