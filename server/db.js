const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: "password"
  host: "database-1.c1yeq4mm2euf.eu-west-2.rds.amazonaws.com",
  port: 5432,
  database: "pern-todo",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;