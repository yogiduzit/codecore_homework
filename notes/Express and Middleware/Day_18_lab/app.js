const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = 4000;
const ADDRESS = 'localhost';

const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  const lang = req.cookies.language;
  const name = req.cookies.name;

  if (lang && name) {
    res.locals.language = lang;
    res.locals.name = name;
  }
  next();
});

app.get('/', (req, res) => {
  res.render("todoList");
});
app.get('/add_reminder', (req, res) => {
  res.render("addReminder");
});
app.post('/add_reminder', (req, res) => {

});

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening at ${ADDRESS}:${PORT}`);
})

app.set('views', 'views');
app.set('view engine', 'ejs');


/* Language Lab
app.post("/choose_options", (req, res) => {
  const language = req.body.language;
  const name = req.body.name;
  res.cookie("language", language, {maxAge: COOKIE_MAX_AGE});
  res.cookie("name", name, {maxAge: COOKIE_MAX_AGE});

  res.redirect('/');
});

app.get("/languages", (req, res) => {
  res.render("language");
});
app.get("/", (req, res) => {
  const lang = res.locals.language;
  const name = res.locals.name;
  res.render("homepage", {lang: lang, name: name});
});
*/

// console.log(process.env.PORT);