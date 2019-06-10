const fs = require('fs');
const path = "./" + process.argv[2] + "_" + process.argv[3] + ".txt";
let data = "";


for (let i = 0; i < process.argv[3]; i++) {
  for (let j = 0; j < process.argv[2]; j++) {
    data += "*";
  }
  data += "\n";
}

fs.writeFile(path, data, (err) => {
  if (err) throw err;
  console.log("Created and saved");
}); 

module.exports = function createBox(height, width, filename) {
  const file = "./" + filename + ".txt";
  let data = "";
  for (let i = 0; i < height; i++) {
    data += "*".repeat(width);
    data += "\n";
  }
  
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
  });
  return data
};

let a = "yogi";
module.exports = a;