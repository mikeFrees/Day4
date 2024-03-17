"use strict";

const fs = require("fs");

//Global parameters
let input, total = 0;

//main program flow
getInput();
input.forEach(element => {
  cardPoints(element);
});
console.log(total);

//retrieving the input of a txt file
function getInput() {
  try {
    const data = fs.readFileSync("input.txt", 'utf-8');
    return input = data.toString().split('/n');   
  } catch (err) {
    throw err;
  }
}

//calculates the points of a card
function cardPoints(card) {
let points = 0;
console.log(card);
return points;
}

//for testing purpose
module.exports = { getInput, cardPoints };