<template>
  <div class="contador">
      <span>{{ contador }}</span>
      <button @click="adicionar">+</button>
      <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++;
        },
        subtrair() {
            this.contador--;
        },
    }
}
</script>

<style scoped>
span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px
}

button {
    height: 30px;
    width: 30px;
    border-radius: 15px; /* se colocar a METADE da altura e da largura, fica um botão perfeitamente circular */ 
    background-color: coral;
    color: #FFF;
    margin-left: 10px;
    outline: none;
}
</style>