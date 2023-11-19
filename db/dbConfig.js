const pgp = require("pg-promise")();

require('dotenv').config();


const cn = {
    Hostname: process.env.PG_HOST, 
    Port: process.env.PG_PORT,
    Database: process.env.PG_DATABASE,
    Username: process.env.PG_USER,
    PG_PASSWORD: process.env.PG_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
    PSQL_Command: process.env.PSQL_Command,
    External_Database_URL: process.env.External_Database_URL
};

const db = pgp(cn);

module.exports = db;