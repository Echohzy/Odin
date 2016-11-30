'use strict';
var db = require('../config/db.js');
var mongoose = require('mongoose');

module.exports.signIn = function(params){
  var promise = new mongoose.Promise();

  db.user.find(params, function(err, data){
    if(err){
      promise.reject(err);
    }else{
      promise.complete(data);
    }
  });

  return promise;
};