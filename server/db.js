const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

module.exports = pool;
