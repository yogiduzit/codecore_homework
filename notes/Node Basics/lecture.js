// In browser, the global variable is window which contains methods.
// In REPL, process is the global variable.
// process.argv is used to pass arguments.


/*
 * Use the require statement to load in module.exports from a file.
 * takes in a string equal to the path of the file.
 */
const add = require('./add');
const primes  = require('./primes');
const countries = require('./countries');


for (let country of countries) {
  console.log(country + ": " + country.length);
}


