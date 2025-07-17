const { Pool } = require("pg");
require("dotenv").config();


// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PW}@centerbeam.proxy.rlwy.net:24788/railway`
});