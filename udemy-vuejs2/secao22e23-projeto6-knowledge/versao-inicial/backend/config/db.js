const config = require("../knexfile.js")
const knex = require("knex")(config)

// Toda vez que "subir" o backend, automaticamente executa as migrations - no entanto, em produção isso não é tão aconselhável
knex.migrate.latest([config]);

module.exports = knex;
