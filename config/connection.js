var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Fieldy23!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localHost',
    user: 'root',
    password: 'Fieldy23!',
    database: 'burgers_db'
  });
}

// Export connection for our ORM to use.
module.exports = connection;