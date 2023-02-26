const prompt = require("prompt-sync")({ sigint: true });

class RPS {
  constructor(weapons) {
    // options is generated from the weapons object KEYS
    // as it validates each move for the player
    this.options = Object.keys(weapons);
    this.weapons = weapons;
    // ['rock', 'paper', 'scissors']
    this.playerChoice = null;
    this.computerChoice = null;
    this.rounds = 3;
  }

  _nextRound() {
    if (this.rounds === 0) return false;
    this.playerChoice = null;
    this.computerChoice = null;
    this.rounds--;
  }

  _setPlayerChoice(value) {
    if (this.options.indexOf(value) === -1) throw RangeError("no such choice");
    this.playerChoice = value;
  }

  _setComputerChoice() {
    this.computerChoice =
      this.options[Math.floor(Math.random() * this.options.length)];
  }

  _compare(move1, move2) {
    console.log({ player: move1, bot: move2 });
    if (move1 === move2) console.log("draw!");

    if (this.weapons[move1].strongTo === move2) {
      console.log("player wins!");
      return;
    }

    if (this.weapons[move1].weakTo === move2) {
      console.log("bot wins!");
      return;
    }
  }

  start() {
    const choice = prompt(console.log("Rock? Paper? Scissors?"));
    const c = String(choice).toLowerCase();
    if (typeof choice !== "string") throw new TypeError("incorrect input");
    this._setPlayerChoice(c);
    this._setComputerChoice();
    this._compare(this.playerChoice, this.computerChoice);
    this._nextRound();
  }
}

module.exports = RPS;
