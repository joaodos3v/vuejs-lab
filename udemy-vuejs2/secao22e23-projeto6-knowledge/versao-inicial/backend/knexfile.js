// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user:     'postgres',
    password: 'CLot_2Saga'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
