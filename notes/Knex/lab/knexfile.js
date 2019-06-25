// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knexpress_labs'
    },
    migrations: {
      tableName: 'migrations', // Contains a history of all the migrations that have been performed.
      directory: './db/migrations'
    },
  },

};
