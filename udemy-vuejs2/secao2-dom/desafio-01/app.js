new Vue({
    el: '#desafio',
    data: {
        nome: 'João Vitor Veronese Vieira',
        idade: 20,
        imagem: 'iron-man.png'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3;
        },
        random() {
            return Math.random();
        }
    }
});