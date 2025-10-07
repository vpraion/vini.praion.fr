/**
 * @file Knex PostgreSQL client configuration.
 * @description
 * Sets a connection to the PostegreSQL database and returns the conneciton instance.
 *
 * @module db/knexClient
 * @author Vini Praion
 * @since 2025-10-07
 */

/**
 * @type {knex.Knex}
 * PostgreSQL connection instance using environment variables.
 */
const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT,
    },
});

module.exports = db;
