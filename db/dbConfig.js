const pgp = require("pg-promise")();

require('dotenv').config();


const cn = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    PG_PASSWORD: process.env.PG_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL

};

const db = pgp(cn);

module.exports = db;