// config/dbConfig.js
require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({

  // host: 'localhost',
  // user: 'root',
  // password: 'new_password',
  // database: 'todolist_db'


  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = db;