const mysql = require('mysql');

const pool = mysql.createPool({
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_DATABASE
});
 
module.exports = pool