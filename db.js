
var mysql = require('mysql');

// Database connection settings
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'iti',
  database : 'TrainingCenter'
});

module.exports = connection;
