new Vue({
    el: "#app",
    
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
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
            this.hurt("monsterLife", 5, 10, especial, "Jogador", "Monstro", "player");
            if (this.monsterLife > 0) {
                this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
            }
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);

            this.registerLog(`${source} atiniu ${target} com ${hurt}`, cls);
        },
        healAndHurt() {
            this.heal(10, 15); // Tem que ser primeiro, pois se não ele pode morrer antes de ser curado
            this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls }); // O log mais recente ficará no começo
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