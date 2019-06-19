const knex = require('./client.js');
const countries = require('./countries.js');

const newCountries = [];

function equals(a, b) {
  if (a.countryName === b.countryName && a.countryCode === b.countryCode){ 
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i < countries.length; i++) {
  if (!equals(countries[i], countries[i - 1])) {
    newCountries.push(countries[i]);
  }
}
console.log(newCountries);


knex.insert(newCountries)
.into('countries')
.then((data) => {
  console.log(data);
  knex.destroy();
});