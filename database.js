const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
  // connectionString: process.env.DB_URL  (hardcoded link to bypass my .env vbles)
  connectionString: 'postgres://pawxqpci:n3_8iDK7gFH_X8MEf9DgSThW0Q0dGF_r@ruby.db.elephantsql.com:5432/pawxqpci'
})

module.exports = {
  query: (text, params, cb) => {
    console.log("executed query", text)
    return pool.query(text, params, cb);
  }
}