const express = require("express");

const logger = require('morgan');
const methodOverride = require('method-override');

const cohortRouter = require('./routes/cohort');

const app = express();



// Logs all the request to console
app.use(logger("dev"));


// Allows arrays, JSON objects to be used in request bodies if true
app.use(express.urlencoded({extended: true}));

app.use(express.static("assets"));

app.set('views', "views")
app.set("view engine", "ejs");


app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method
      return method;
    }
  })
);

app.use('/cohorts', cohortRouter);
const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});