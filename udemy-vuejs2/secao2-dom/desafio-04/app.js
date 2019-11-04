new Vue({
	el: '#desafio',
	data: {
		// Tarefa 1
		classeTarefa1: '',
		

		// Tarefa 2
		aplicarNegrito: false,
		aplicarItalico: false,

		perigo: true, // Instrutor
		

		// Tarefa 3
		classesTarefa3: '',
		

		// Tarefa 4
		classeTarefa4: 'green',
		aplicarAltura: false,
		

		// Tarefa 5
		altura: 10,

		cor5: '', // Instrutor
		estilo5: { // Instrutor
			width: '100px',
			height: '100px',
		},
		

		// Tarefa 6
		progresso: 0,

		width: '0', // Instrutor
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

			// Instrutor
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`;
				if (valor == 100) {
					clearInterval(temporizador);
				}
			}, 500);
		}
	},
})
