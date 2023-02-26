const RPS = require("./game");

// this weapons object allows for a nice compare function,
// could be used to extend the weapons later too
const weapons = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

const game = new RPS(weapons);

// anyone wanna try make this shorter lmao?
while(true){
  game.start();
}


