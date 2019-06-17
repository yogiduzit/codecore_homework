const countries = require('../countries.js');
const client = require('../client.js');



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('populations').del()
    .then(function () {
      // Inserts seed entries
      return knex('populations').insert(newCountries);
    });
};
