'use strict';
var db = require('../config/db.js');
var mongoose = require('mongoose'); 

module.exports.signIn = function(params){

  return new Promise(function (resolve, reject){
    db.user.findOne(params, function(err, data){
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    });
  });
};