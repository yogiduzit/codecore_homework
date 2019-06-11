const rolls = parseInt(process.argv[2]);
const faces = parseInt(process.argv[3]);

let total = 0;

for (let i = 1; i <= rolls; i++) {

  let diceNumber = Math.ceil(Math.random() * faces);
  console.log("Rolled: " + diceNumber);

  total += diceNumber;
}
console.log("Average: " + (total / rolls));
console.log("Total: "  + total);
