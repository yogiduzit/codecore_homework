const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 1;
const num = Math.floor(Math.random() * 100) + 1;
console.log("I am thinking of a number between 1 and 100");



/*rl.on('line', function(number) {
  if (parseInt(number) === num) {
    console.log("Guessed \"" + num + "\" correctly in " + count + " attempts");
    rl.close();
  } else {

    if (number > num) {
      console.log("Nope! Try Again and go low");
    } else if (number < num) {
      console.log("Nope! Try Again and go up");
    }
    
    count += 1;
  }
}).on('close', function() {
  process.exit(0);
}); */
rl.question("I am thinking of a number between 1 and 100 !", (answer) => {
  recursiveRead(answer);
})
function recursiveRead(answer){ 
  if (parseInt(answer) == num) {
    console.log("Guessed \"" + num + "\" correctly in " + count + " attempts");
    process.exit(0);
  } else {
    if (answer > num) {
      rl.question("Nope. Try again and go low!", (guess) => {
        count += 1;
        recursiveRead(guess);
      });
    } else {
      rl.question("Nope. Try again and go high!", (guess) => {
        count += 1;
        recursiveRead(guess);
      });

    }
  }
}


