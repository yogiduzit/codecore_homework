const knex = require('./client.js');

knex.insert({
  title: 'First Post',
  content: 'You talkin to me',
  imgURL: 'asdfbjsfnkdslf'
})
.into('postings').then((data) => {
  console.log(data);
  knex.destroy();
});

knex.insert([{content:"abc", postings_id:1}, {content:"efg", postings_id:1}])
  .into("comments")
  .then((data) => {
    console.log(data)
    knex.destroy();
  });