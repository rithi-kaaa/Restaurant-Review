var mysql = require('mysql'); //import mysql
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password:'cdev2202550F',
    database:'restaurant'
});

connection.connect(err => { //test out connection
    if (err) throw err;
    console.log('Connected to DB');

});

module.exports = connection;