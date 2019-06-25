const express = require('express');
const logger = require("morgan");
const methodOverride = require('method-override');

// Route files
const welcomeRouter = require('./routes/welcome');
const noteRouter = require('./routes/notes');

const app = express();

// Middleware
app.set("view engine", 'ejs');

app.use(express.urlencoded({extended: false}));

app.use(logger("dev"));

app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
}));

// USE Routers from route files
app.use("/", welcomeRouter);
app.use("/notes", noteRouter);

const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`💁 Server is listening at ${ADDRESS}:${PORT}`);
});
