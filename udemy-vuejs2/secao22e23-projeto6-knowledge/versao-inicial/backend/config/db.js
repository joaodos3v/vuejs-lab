const config = required("../knexfile.js")
const knex = require("knex")(config)

module.exports = knex
