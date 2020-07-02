var connection = require("../config/connection.js");

var orm = {
    
  updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " (";
		  queryString += cols.toString();
		  queryString += ") ";
		  queryString += "VALUES (";
		  queryString += printQuestionMarks(vals.length);
		  queryString += ") ";
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
};
  

module.exports = orm;