const express = require('express');
const logger = require("morgan");
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 4000;
const ADDRESS = 'localhost';

app.get('/car_status', (req, res) => {
  let value = "";
  const year = parseInt(req.query.year);
  if (year >= 2017 && year < 2020) {
    value = "New 🏎 🏎 🏎";
  } else if (year < 2017 && year > 2010) {
    value = "old"
  } else if (year <= 2010) {
    value = "very old"
  } else {
    value = "futuristic";
  }
  res.render("carStatus", {
    age: value
  });
});

app.get('/random_person', (req, res) => {
  if (req.query.names) {
    const names = req.query.names.split(',');
    res.render("randomPerson", {
      luckyName: names[Math.floor(Math.random() * names.length)]
    });
  } else {
    res.render("randomPerson", {
      luckyName: ''
    });
  }
});

app.get('/fizz_buzz', (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  let message = "";
  for (let i = 1; i <= 100; i++) {
    if (i % first === 0 && i % second === 0) {
      message += (" fizzbuzz ");
    } else {
      if (i % first === 0) {
        message += (" fizz ")
      } else if (i % second === 0) {
        message += (" buzz ");
      } else {
        message += " " + i;
      }
    }
  }
  res.render("fizzbuzz", {
    message: message
  });
});

app.get('/directory_lister', (req, res) => {

  function getContents(path) {
    const tree = fs.readdirSync(path, (err) => {
      if (err) throw err;
    });
    const obj = {};
    for (let i = 0; i < tree.length; i++) {

      if (fs.lstatSync(path + tree[i]).isDirectory()) {
        if (tree[i] !== 'node_modules') {
          obj[tree[i]] = getContents(path + tree[i] + "/"); // 
        }
      } else if (fs.lstatSync(path + tree[i]).isFile()) {
        obj[i] = tree[i];
      }
    }
    return obj;
  }
  const obj = getContents("./");
  res.render("directoryList", {contents: obj});
  
});

app.listen(PORT, ADDRESS, () => {
  console.log(`Listening on ${ADDRESS}:${PORT}`);
});

app.use(logger("dev"));

app.set("views", "views");
app.set("view engine", "ejs");