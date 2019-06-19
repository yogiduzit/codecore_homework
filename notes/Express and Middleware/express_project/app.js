const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');


const app = express();

const PORT = 4545;
const ADDRESS = 'localhost';
const MAX_COOKIE_AGE = 1000 * 60 * 60 * 24 * 7; // 1 week in milliseconds

/* When the extended option is set to true, express can accept data in the
 * form of arrays and objects. If it's false, only strings are allowed.
 */
app.use(express.urlencoded({extended: true}));

app.use(logger("dev"));

/* Tells express that all contents of the public folder 
 * are to be served in a static way with a location of 
 * website/url 
 */
app.use(express.static(path.join(__dirname, "public"))); 

// Grabs data from form and converts it into cookie
app.use(cookieParser()); 

app.use((req, res, next) => {
  console.log(`🍪 Cookies: ${req.cookies}`);

  res.locals.username = "";

  const username = req.cookies.username;
  if (username) {
    res.locals.username = username;
  }

  // Tells express that middleware logic is complete and move on to next app.use statement
  next(); 
}); 


/** http://localhost:3000/hello-world?key=value
 *   localhost => address,
 *   3000 => port,
 *   /hello-world => path
 *   ?key=value => query
 */

/**
 * HTTP VERBS 
 * GET - gets a resource
 * POST - posts something to the source
 * DELETE - 
 * PATCH
 * PUT
 */

/* Takes in a path on which we want to display a page.
 * As the user asks for /hello-world page it sends a div
 * containing the words 'Hello-World'.
 */ 

app.get('/', (request, response) => {
  // request contains the information about the request made by client.
  // response contains the information and methods to respond accordingly.
 
  const userName = response.locals.username;
  response.render('home', {name: "Yogi", weather: "Blue Skies", userName: userName});
});

app.get('/form', (request, response) => {
  
  response.render("form");
  
});
app.get('/thanks', (request, response) => {
  
  response.render("thanks");
  
});
app.post('/sign_in', (request, response) => {


  const userName = request.body.userName;
  response.cookie("username", userName, {maxAge: MAX_COOKIE_AGE});
  response.redirect("/");
  response.end();
  //response.render("signIn");
});

app.post('/sign_out', (req, res) => {
  res.clearCookie("username"); // Clear the username cookie
  res.redirect("/"); // Redirects to the homepage
});

app.set('view engine', "ejs"); // Tells express that we are using EJS for templates.
app.set("views", "views"); // Tells express that our views live in /views directory

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening at ${ADDRESS}:${PORT}`);
});