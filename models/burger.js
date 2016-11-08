'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    },
    burger_date: DataTypes.TIMESTAMP
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};


////////PREVIOUS VERSION\\\\\\\\\\\\\\\\
/*
var orm = require('../config/orm.js');
var tableInput = "burgers";

var burger = {
  selectAll: function (cb) {
    orm.selectAll(tableInput, function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, valOfCols, cb) {
    orm.insertOne(tableInput, cols, valOfCols, function (res) {
      cb(res);
    });
  },
  
  updateOne: function (objVals, condition, cb) {
    orm.updateOne(tableInput, objVals, condition, function (res) {
      cb(res);
    });
  },

  deleteOne: function (condition, cb) {
    orm.deleteOne(tableInput, condition, function(res){
      cb(res);
    });
  }

};

module.exports = burger;
*/