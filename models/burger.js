var connection = require("../config/connection.js");

var burger = {
  all: function(cb) {
    connection.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    connection.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    connection.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    connection.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;