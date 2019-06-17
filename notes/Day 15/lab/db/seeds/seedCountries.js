const countries = require('../countries.js');

const newCountries = [];

function equals(a, b) {
  if (a.countryName === b.countryName && a.countryCode === b.countryCode){ 
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i < countries.length; i++) {
  if (!(equals(countries[i - 1], countries[i])) || i === 1) {
    newCountries.push({
      countryName: countries[i].countryName,
      countryCode: countries[i].countryCode
    });
  }
}
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert(newCountries);
    });
};
