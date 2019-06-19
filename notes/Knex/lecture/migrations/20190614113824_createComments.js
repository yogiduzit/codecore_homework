
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.bigIncrements('id');
    table.text('content');
    table.integer('postings_id');
    table.timestamp('created at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
