<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submitted">
				<div class="cabecalho">Formulário</div>
				
				<!-- Exercicio 01 -->
				<Rotulo nome="Nome">
					<input type="text" v-model="name.first">
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<input type="text" v-model="name.last">
				</Rotulo>
				<Rotulo nome="E-mail">
					<input type="email" v-model="email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="password">
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					<label for="storeData">
						<input type="checkbox" v-model="storeData" id="storeData"> Sim
					</label>
				</Rotulo>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário se não tiver sido submetido => Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click.prevent="submit">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto => Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome Completo">
					<FullName v-model="fullname"></FullName>
				</Rotulo>
				<Rotulo nome="E-mail">{{ email }}</Rotulo>
				<Rotulo nome="Senha">{{ password }}</Rotulo>
				<Rotulo nome="Armazenar Dados">{{ storeData ? "Sim" : "Não" }}</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import FullName from './components/FullName.vue'
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',

	components: { FullName, Rotulo },

	computed: {
		fullname() {
			return `${this.name.first} ${this.name.last}`;
		}
	},

	data() {
		return {
			name: {
				first: "",
				last: "",
			},
			email: "",
			password: "",
			storeData: false,
			submitted: false,
		};
	},

	methods: {
		submit() {
			this.submitted = true;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
