// this weapons object allows for extensiblity of the RPS game
const weapons = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

class RPS {
  constructor() {
    // options is hardcoded atm but it 
    // should probably be generated from the weapons as it validates each move
    this.options = ["rock", "paper", "scissors"];
    this.playerChoice = null;
    this.computerChoice = null;
  }

  _setPlayerChoice(value) {
    if (this.options.indexOf(value) === -1) throw RangeError("no such choice");
    this.playerChoice = value;
  }

  _setComputerChoice() {
    this.computerChoice = this.options[Math.floor(Math.random() * this.options.length)];
  }

  _compare(move1, move2) {
    console.log({ player: move1, bot: move2 });
    if (move1 === move2) console.log("draw!");

    if (weapons[move1].strongTo === move2) {
      console.log("player wins!");
      return;
    }

    if (weapons[move1].weakTo === move2) {
      console.log("bot wins!");
      return;
    }
  }

  start() {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Rock, Paper or Scissors? ", (choice) => {
      if (!choice) throw new TypeError("incorrect input");
      const c = String(choice).toLowerCase();
      if (typeof choice !== "string") throw new TypeError("incorrect input");
      this._setPlayerChoice(c);
      this._setComputerChoice();
      this._compare(this.playerChoice, this.computerChoice);
      readline.close();
    });
  }
}

const game = new RPS();

game.start();

// anyone wanna try make this shorter lmao?
