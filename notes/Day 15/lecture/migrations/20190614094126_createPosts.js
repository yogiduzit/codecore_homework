// Up contains the sql code that we write to create tables
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postings', table => {
    table.bigIncrements('id'); // Create a column with type BIGSERIAL which is an auto-incrementing column.
    table.string('title');
    table.text('content');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};
// Contains the opposite code of exports.up.
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postings');
};
