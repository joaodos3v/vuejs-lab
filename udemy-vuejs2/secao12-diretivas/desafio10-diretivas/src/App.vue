<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>

		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="() => log('click')">Click</button>
		<button v-quando:dblclick="() => log('dblclick')">DblClick</button>
		<button v-quando:mouseleave="() => log('mouseleave')">MouseLeave</button>
		<button v-quando:blur="() => log('blur')">Blur</button>
		
	</div>
</template>

<script>
export default {
	directives: {
		"quando": {
			bind(el, binding) { // Ainda poderia ter "vnode" como 3º parâmetro
				const evt = binding.arg;
				const eventosAceitos = ["click", "dblclick", "mouseleave"];
				if (eventosAceitos.includes(evt)) {
					el.addEventListener(evt, function () {
						binding.value();
					});
				} else {
					el.innerHTML = `Evento ${evt} não é aceito!`;
				}
			}
		}
	},

	methods: {
		log(evt) {
			window.console.log(`Evento reconhecido: ${evt}`);
		}
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
