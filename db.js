const Pool = require("pg").Pool;
const pool = new Pool({
  user: "prb02",
  password: "prb02",
  host: "176.56.14.200",
  port: 5432,
  database: "user2",
});

module.exports = pool;
