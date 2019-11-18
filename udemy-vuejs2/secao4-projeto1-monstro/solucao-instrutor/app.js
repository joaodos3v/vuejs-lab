new Vue({
    el: "#app",
    
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 100,
    },

    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },

    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(especial) {
            this.hurt("monsterLife", 5, 10, especial);
            this.hurt("playerLife", 7, 12, false);
        },
        hurt(prop, min, max, especial) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        }
    },

    watch: {
        // Sempre que houver uma mudança na 'computed properties' "hasResult", esse método será invocado
        hasResult(value) {
            if (value) { // Se tem resultado, automaticamente o jogo não está "rodando"
                this.running = false;
            }
        }
    }
})