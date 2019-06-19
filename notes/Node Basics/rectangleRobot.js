const readline = require("readline");
const fs = require('fs');
const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const widthByHeight = require("./widthByHeight");


scanner.question("How high ?\n>", (height) => {
  console.log("Height: " +  height);
  scanner.question("How wide ? \n>", (width) => {
    console.log("Width: "  + width);
    scanner.question("What should I call it ?\n>", (fileName) => {
      console.log("fileName: " + fileName);
      widthByHeight(height, width, fileName);
      console.log("created and saved");
      scanner.close();
    });
  });
  
});

console.log(widthByHeight);




