const fs = require('fs');

fs.readFileSync('./text.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(data);
})