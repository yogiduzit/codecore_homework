const QRCode = require('qrcode');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('What is the fileName? \n>', (fileName) => {
  rl.question('What do you want to encode ?\n>', (message) => {
    QRCode.toFile(fileName, message, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("File written");
      }
      rl.close();
    });
  });
});

