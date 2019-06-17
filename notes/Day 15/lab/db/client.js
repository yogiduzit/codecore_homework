const knexConfig = require('../knexfile.js');
const knex = require('knex');

const client = knex(knexConfig.development);

module.exports = client;