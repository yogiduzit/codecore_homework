const fs = require('fs').promises;
const fetch = require('node-fetch');

const BACON_URL = `https://baconipsum.com/api`

fetch(`${BACON_URL}/?type=meat-and-filler&paras=5`)
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    return Promise.all(
      body.map((text, index) => {
        return fs.writeFile(`./bacon-${index}`, text);
      })
    );
  })
  .catch((err) => {
    console.log(err);
  });
