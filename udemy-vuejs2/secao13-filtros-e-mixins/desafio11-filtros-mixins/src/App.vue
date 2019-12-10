<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>

		<h5>Com Filtros:</h5>
		<!-- [Exercício 1] Construir um filtro local que troca espaços por vírgula -->
		<p>{{ str1 | trocaEspacoPorVirgula }}</p>
		
		<!-- [Exercício 2] Filtro global que conta o tamanho de cada palavra e adiciona o valor na string final -->
		<p>{{ str2 | contaTamanhoPalavras }}</p>

		<!-- [Exercício 3] Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<h5>Com Propriedades Computadas:</h5>
		<p>{{ cpTrocaEspacoPorVirgula }}</p>
		<p>{{ cpContaTamanhoPalavras }}</p>

		<!-- [Exercício 4] Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import palavrasMixin from "@/palavrasMixin";

export default {
	mixins: [palavrasMixin],

	filters: {
		trocaEspacoPorVirgula(value) {
			return value.replace(/ /g, ",");
		}
	},

	data() {
		return {
			str1: "Esse exemplo possuía espaços que foram trocados por vírgula!",
			str2: "Pedro é legal",
		};
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
