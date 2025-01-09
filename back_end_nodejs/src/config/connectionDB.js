// there will be config for mysql connection

// require mssql2 
const mysql = require('mysql2/promise') 

let pool;

//try catch 
try {
// create pool 
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nl2c',
    port: 3306
  });
} catch (err) {
  console.log(err);
}

// module export
module.exports = pool;



























