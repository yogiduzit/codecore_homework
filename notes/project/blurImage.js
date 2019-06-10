const jimp = require('jimp');
const fileName = "./" + process.argv[2] + ".jpg";
const blurRadius = process.argv[3];


jimp.read(fileName, (err, image) => {
  if (err) throw err;
  image.blur(2).write('newImage.jpg');
})