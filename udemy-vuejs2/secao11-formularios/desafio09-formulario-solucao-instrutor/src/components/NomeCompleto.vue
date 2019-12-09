<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="alterarNome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.sobrenome" @input="alterarSobrenome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "@/components/Rotulo";

export default {
  components: { Rotulo },

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  methods: {
    alterarNome(evt) {
      this.$emit('input', {
        nome: evt.target.value,
        sobrenome: this.value.sobrenome,
      });
    },
    alterarSobrenome(evt) {
      this.$emit('input', {
        nome: this.value.nome,
        sobrenome: evt.target.value,
      });
    },
  },
}
</script>
