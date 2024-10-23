"use strict";

const allowedDiceTypes = ["D4", "D6", "D8", "D10", "D12", "D16", "D20"];
let diceType = "D4";

function rollDice(type) {
  if (allowedDiceTypes.includes(type)) {
    let min = 1;
    let max = type.slice(1);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

console.log(rollDice(diceType));
