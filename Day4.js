"use strict";

const fs = require("fs");

//Global parameters
let input, total = 0;

//main program flow
getInput();
input.forEach(element => {
  total += cardPoints(getNumbers(element));
});
console.log(total);

//retrieving the input of a txt file
function getInput() {
  try {
    const data = fs.readFileSync("input.txt", 'utf-8');
    return input = data.toString().split('\n');   
  } catch (err) {
    throw err;
  }
}

//calculates the points of a winningNumbers array and a myNumbers array and returns the points
function cardPoints(numbers) {
let points = 0,
  matches = "0",
  firstMatch = true;
  numbers[1].forEach((element) => {
    if(numbers[0].includes(element)) {
      if(firstMatch) matches = "1";
      else matches = matches + "0";
      firstMatch = false;
    }
  });
  points = parseInt(matches, 2);
return points;
}

//extracts the winningNumbers and the cardNumbers
function getNumbers(card) {
  let winningNumbers = [], cardNumbers = [];
  winningNumbers = card.slice(10, card.indexOf("|")).split(" ").filter(Boolean);
  cardNumbers = card.slice(card.indexOf("|") + 1).split(" ").filter(Boolean);
  return [winningNumbers, cardNumbers];
}

//for testing purpose
module.exports = { getInput, cardPoints, getNumbers };