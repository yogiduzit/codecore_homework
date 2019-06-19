const fs = require('fs');
const inputFileName = process.argv[2];
const outputFileName = process.argv[3];
let arr = [];


fs.readFile(inputFileName, {encoding: "utf-8"}, (err, data) => {
  const dataArr = data.split("\n").filter((element) => element.slice(-1) === 'o' || element.slice(-1) === '?');
  let newData = "";
  for (let element of dataArr) {
    element += "\n";
    newData += element;
  }
  fs.writeFile(outputFileName, newData, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Saved");
    }
  });
});
