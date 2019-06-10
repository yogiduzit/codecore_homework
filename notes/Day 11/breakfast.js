const readline = require("readline");

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

scanner.question("What did you have for breakfast ?\n", (answer) => {
  console.log(`I ****** hate that ****** ${answer}`);
  scanner.close(); // Close the scanner after you're done with it.
});