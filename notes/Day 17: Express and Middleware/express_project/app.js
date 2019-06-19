const express = require('express');
const logger = require('morgan');

// This is the express appś
const app = express();

const PORT = 4545;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening at ${ADDRESS}:${PORT}`);
});
app.use(logger("dev"));

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
app.get('/welcome', (request, response) => {
  // request contains the information about the request made by client.
  // response contains the information and methods to respond accordingly.
  response.render('home.ejs', {name: "Yogi", weather: "Blue Skies"});
});

app.get('/', (request, response) => {
  // request contains the information about the request made by client.
  // response contains the information and methods to respond accordingly.
  response.render("form.ejs");
});
app.get('/thanks', (request, response) => {
  // request contains the information about the request made by client.
  // response contains the information and methods to respond accordingly.
  response.render("thanks.ejs");
});

app.set('view engine', "ejs"); // Tells express that we are using EJS for templates.
app.set("views", "views"); // Tells express that our views live in /views directory