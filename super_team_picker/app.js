const express = require("express");

const logger = require('morgan');
const methodOverride = require('method-override');

const cohortRouter = require('./routes/cohort');

const app = express();

app.use('/cohorts', cohortRouter);

// Logs all the request to console
app.use(logger("dev"));

// Allows arrays, JSON objects to be used in request bodies if true
app.use(express.urlencoded({extended: true}));

app.use(express.static("assets"));

app.set('views', "views")
app.set("view engine", "ejs");

const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});

