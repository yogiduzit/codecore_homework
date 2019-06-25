const colors = require('colors/safe');
const chalk = require('chalk');


const color = "bg" + process.argv[2];
const height = process.argv[3];
const width = process.argv[4];

let chessboard = "";

for (let i = 1; i <= height; i++) {
  if (i % 2 === 0) {
    chessboard += drawEvenLine(width);
  } else {
    chessboard += drawOddLine(width);
  }
}
console.log(color);

function drawOddLine(width) {
  let string = "";
  for (let i = 1; i <= width; i++) {
    if (i % 2 === 0) {
      string += colors[color]("  ");
    } else {
      string += "  ";
    }
  }
  string += "\n";
  return string;
}
function drawEvenLine(width) {
  let string = "";
  for (let i = 1; i <= width; i++) {
    if (i % 2 !== 0) {
      string += colors[color]("  ");
    } else {
      string += "  ";
    }
  }
  string += "\n";
  return string;
}
console.log(chessboard);