
exports.up = function(knex, Promise) {
  return knex.schema.createTable('members', table => {
    table.increments("id");
    table.string('name');
    table.integer('cohort_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members')
};
