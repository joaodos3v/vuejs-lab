new Vue({
    el: "#app",
    data: {
        playerLife: '100',
        monsterLife: '100',

        finished: false,
        result: {
            text: 'Você perdeu :(',
            color: 'red',
        },

        playing: false,

        // {text: "MONSTRO ATINGIU JOGADOR COM 9", player: true, monster: false},
        logs: [],
    },
    methods: {
        restart() {
            this.playing = !this.playing;

            this.playerLife = '100';
            this.monsterLife = '100';
            this.finished = false;
            this.logs = [];
        },
        attack() { // Monstro tem poder de ataque maior
            this._monsterAttack(5, 12);
            this._playerAttack(5, 10);
        },
        specialAttack() { // O monstro ataca, mas o jogador tem um ataque mais forte
            this._monsterAttack(5, 10);
            this._playerAttack(7, 12);
        },
        heal() { // O jogador ganha vida, mas o monstro ataca
            this._monsterAttack(4, 8);
            
            let extraLife = this._getRandomIntInclusive(4, 10);
            this.playerLife = (this.playerLife + extraLife <= 100) ? this.playerLife + extraLife : 100;
            this._writeLog("ganhou força de", extraLife, true);
        },
        _playerAttack(min, max) {
            let monsterDamage = this._getRandomIntInclusive(min, max);
            this.monsterLife = (this.monsterLife - monsterDamage >= 0) ? this.monsterLife - monsterDamage : 0;

            this._writeLog("atingiu monstro com", monsterDamage, true);
        },
        _monsterAttack(min, max) {
            let playerDamage = this._getRandomIntInclusive(min, max);
            this.playerLife = (this.playerLife - playerDamage >= 0) ? this.playerLife - playerDamage : 0;

            this._writeLog("atingiu jogador com", playerDamage, false);
        },
        _getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        _writeLog(action, value, isPlayer) {
            if (isPlayer) {
                this.logs.unshift({
                    text: `Jogador ${action} ${value}`,
                    player: true,
                    monster: false,
                });
            } else {
                this.logs.unshift({
                    text: `Monstro ${action} ${value}`,
                    player: false,
                    monster: true,
                });
            }

            this._checkGameOver();
        },
        _checkGameOver() {
            if (this.playerLife <= 0) {
                this.playing = false;
                this.finished = true;
                this.result = {
                    text: 'Você perdeu! :(',
                    color: 'red'
                };
            } else if (this.monsterLife <= 0) {
                this.playing = false;
                this.finished = true;
                this.result = {
                    text: 'Você ganhou!!! :)',
                    color: 'green'
                };
            }
        }
    }
});