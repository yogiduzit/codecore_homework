
exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', table => {
    table.bigIncrements('id');
    table.string('countryName');
    table.string('countryCode');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('countries');
};

