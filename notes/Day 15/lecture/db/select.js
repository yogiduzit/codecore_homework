const knex = require('./client.js');

knex.select("*")
  .from("postings")
  .innerJoin("comments", "postings.id", "comments.postings_id")
  .then((data) => {
    console.log(data);
    knex.destroy();
  });