new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, 
    methods: {
        exibirAlerta() {
            alert("Alerta sendo exibido!");
        },
        atualizarValor(event) {
            this.valor = event.target.value;
        }
    }
})