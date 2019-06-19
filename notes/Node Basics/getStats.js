const fs = require("fs");

fs.stat("./lecture.js", (err, stats) => {
  console.log(stats.size);
}); 