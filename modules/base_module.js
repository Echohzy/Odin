'use strict';

var mongoose = require('mongoose');
var db = require('../config/db.js');

module.exports.addBase = function(params){
  return new Promise(function (resolve, reject){
    var base = db.base(params);
    base.save(function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.getBase = function(id){
  let query = {};
  if(id){
    query["_id"] = id;
  }
  return new Promise(function (resolve, reject){
    db.base.findOne(query, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.updateBase = function(id, params){
  return new Promise(function (resolve, reject){
    db.base.findByIdAndUpdate(id, {$set: params}, function(error, data){
      if(error){
        reject("未找到信息！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.deleteBase = function(id){
  return new Promise(function (resolve, reject){
    db.base.findByIdAndRemove({_id: id}, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};