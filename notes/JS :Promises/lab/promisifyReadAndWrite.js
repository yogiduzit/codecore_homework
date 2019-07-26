const fs = require('fs');

function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) throw reject("Couldn't read dir");
      resolve(files);
    });
  });
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
      if (err) throw reject("Couldn't read file");

      resolve(data);
    });
  });
}



readDir('./samples').then((files) => {
  const arr = [];
  for (let file of files) {
    readFile('./samples/' + file).then((value) => {
      arr.push(value);
    });
  }
});