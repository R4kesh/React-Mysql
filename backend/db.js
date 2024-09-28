const mysql=require('mysql2')

const db=mysql.createConnection({
    host: 'localhost',
  user: 'root', 
  password: 'mysql2580', 
  database: 'react_mysql_integration', 
  insecureAuth : true
})

db.connect(err => {
    if (err) {
      console.error('MySQL connection failed: ', err);
    } else {
      console.log('Connected to MySQL');
    }
  });
  
  module.exports = db;
