
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('postings', table => {
    table.text('imgURL');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('postings', table => {
    table.dropColumn('imgURL');
  });
};
