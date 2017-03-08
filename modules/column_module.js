'use strict';
var db = require("../config/db.js");
var mongoose = require("mongoose");

module.exports.addColumn = function(params){
  return new Promise(function (resolve, reject){
    var column = db.column(params);
    column.save(function(error, data){
      if(error){
        reject("栏目创建失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.updateColumn = function(id, params){
  return new Promise(function (resolve, exports){
    db.column.findByIdAndUpdate(id,{$set: params}, function(error, data){
      if(error){
        reject("更新栏目失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.getColumn = function(id){
  return new Promise(function (resolve, reject){
    db.column.findOneById(id, function(error, data){
      if(error){
        reject("未找到该栏目！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.deleteColumn = function(id){
  return new Promise(function (resolve, reject){
    db.column.findOneAndRemove({_id: id}, function(error, exports){
      if(error){
        reject("栏目删除失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.listColumn = function(params){
  return new Promise(function (resolve, reject){
    db.column.find(params, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}