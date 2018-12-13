const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jecode4wcs',
  database : 'my_db'
});
module.exports  =  connection;