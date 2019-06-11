const message = process.argv[2];
const spacesNum = process.argv[3];



function printMessage(messageArr) {
  let spaces = 0;
  
  for (let i = 0; i < messageArr.length; i++) {
      for (let j = 0; j < spaces; j++) {
        if (spacesNum === null) {
          if (i > 1) {
            process.stdout.write("|");
            for (let a = 0; a < 1; a++) {
              process.stdout.write(" ");
            }
          } else {
            for (let a = 0; a < 2; a++) {
              process.stdout.write(" ");
            }
          }
        } else {
          if (i > 1) {
            process.stdout.write("|");
            for (let a = 0; a < spacesNum - 1; a++) {
              process.stdout.write(" ");
            }
          } else {
            for (let a = 0; a < spacesNum; a++) {
              process.stdout.write(" ");
            }
          }
        }
        
      }
      process.stdout.write(messageArr[i]);
      console.log("");
      if (checkWordContainsDot(messageArr[i])) {
        spaces = 0;
      } else {
        spaces += 1;
      }
      
  }
}

function createArray(message) {
  return message.split(" ");
}
function checkWordContainsDot(word) {
    for (let j = 0; j < word.length; j++) {
      if (word.includes(".")) {
        return true;
      } else {
        return false;
      }
    }
}

printMessage(message.split(" "));