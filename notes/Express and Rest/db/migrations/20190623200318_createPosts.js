
exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", table => {
    table.increments('id');
    table.string('title');
    table.text("body");
    table.timestamp("createdAt").default(knex.fn.now()); // Asks it to use the timestamp provided by knex
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notes");
};
