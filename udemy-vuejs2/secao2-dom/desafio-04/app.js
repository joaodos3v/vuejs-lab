new Vue({
	el: '#desafio',
	data: {
		// Tarefa 1
		classeTarefa1: '',
		
		// Tarefa 2
		aplicarNegrito: false,
		aplicarItalico: false,
		
		// Tarefa 3
		classesTarefa3: '',
		
		// Tarefa 4
		classeTarefa4: 'green',
		aplicarAltura: false,
		
		// Tarefa 5
		altura: 10,
		
		// Tarefa 6
		progresso: 0,
	},
	methods: {
		// Tarefa 1
		iniciarEfeito() {
			setInterval(() => {
				this.classeTarefa1 = this.classeTarefa1 == 'destaque' ? 'encolher' : 'destaque';
			}, 2000);
		},

		// Tarefa 4
		deveAplicarAltura(event) {
			this.aplicarAltura = event.target.value == "true" ? true : false;
		},

		// Tarefa 6
		iniciarProgresso() {
			setInterval(() => {
				if (this.progresso < 100) {
					this.progresso += 10;
				}
			}, 1000);
		}
	},
})
