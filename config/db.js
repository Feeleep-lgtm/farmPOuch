const mysql = require("mysql2");
const { types } = mysql;
const dotenv = require("dotenv");
dotenv.config();

let localPoolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};
console.log(localPoolConfig);

types.setTypeParser(1700, function (val) {
  return parseFloat(val);
});

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : localPoolConfig;

// Create a connection pool
const pool = mysql.createPool(poolConfig);
pool.on("connection", (connection) => {
  console.log("connected to database", connection);
});

// Export a function to query the database
module.exports.query = async (sql, values) => {
  const promisePool = pool.promise();
  const [results, fields] = await promisePool.execute(sql, values);
  return results;
};
