'use strict';
var db = require('../config/db.js');
var mongoose = require('mongoose'); 

module.exports.signIn = function(params){

  return new Promise(function (resolve, reject){
    db.user.findOne(params, function(err, data){
      if(err||!data){
        reject("用户名或密码错误！");
      }else{
        resolve(data);
      }
    });
  });
};