const weapons = {
    rock: { weakTo: 'paper', strongTo: 'scissors' },
    paper: { weakTo: 'scissors', strongTo: 'rock' },
    scissors: { weakTo: 'rock', strongTo: 'paper' }
}

class RPS {
    constructor() {
        this.options = ["rock", "paper", "scissors"];
        this.playerChoice = [];
        this.computerChoice = [];
        this.turn = 0;
    }

    _roll() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }

    _setPlayerChoice(value) {
        if (this.options.indexOf(value) === -1) throw RangeError("no such choice")
        this.playerChoice.push(value)
    }

    _swapTurns() {
        if (this.turn === 0) this.turn = 1;
        else this.turn = 0
    }

    _setWinner(w) {
        if (!w) this._winner = 'player';
        else this._winner = 'computer';
    }

    _compare(move1, move2) {
        if (move1 === move2) console.log('draw!');

        if (weapons[move1].strongTo === move2) {
            console.log('player wins!');
            return;
        }

        if (weapons[move1].weakTo === move2) {
            console.log('bot wins!');
            return;
        }
    }

    start() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Rock, Paper or Scissors? ', choice => {
            if (!choice) throw new TypeError('incorrect input')
            const c = String(choice).toLowerCase();
            if (typeof choice !== 'string') throw new TypeError('incorrect input')
            this._setPlayerChoice(c);
            this.computerChoice.push(this._roll())
            this._compare(this.computerChoice[this.computerChoice.length - 1], this.playerChoice[this.playerChoice.length - 1])
            readline.close();
        });
    }
}

const game = new RPS();

game.start()