const fs = require('fs');

const data = new Uint8Array(Buffer.from("Hello World"));

function writeFile() {
  return new Promise((res, rej) => {
      fs.writeFile('./messages.txt', data, (err) => {
        if (err) throw rej("File not written");

        res("File written");
      });
    }
  )
}
writeFile().then((val) => console.log(val)); // File written