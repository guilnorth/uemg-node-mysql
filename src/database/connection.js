const mysql = require('mysql');
require('dotenv').config()


console.log(process.env)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;


