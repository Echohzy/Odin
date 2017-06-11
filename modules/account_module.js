'use strict';
var db = require('../config/db.js');
var mongoose = require('mongoose'); 

module.exports.signIn = function(params){

  return new Promise(function (resolve, reject){
    db.user.findOne(params, function(err, data){
      if(err||!data){
        reject({login_name:"用户名或密码错误！"});
      }else{
        resolve({
          id: data._id,
          avatar: data.avatar,
          nick_name: data.nick_name
        });
      }
    });
  });
};

/*
 * add account
 */
module.exports.addAccount = function(params){
  return new Promise(function (resolve, reject){
    var user = db.user(params);
    user.save(function(error, data){
      if(error){
        reject("账户创建失败！");
      }else{
        resolve(data);
      }
    });
  });
}

/*
 * get account
 */
 module.exports.getAccount = function(id){
  return new Promise(function (resolve, reject){
    db.user.findOneById(id, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
 };

/*
 * update account info
 */
module.exports.updateAccount = function(id, params){
  return new Promise(function (resolve, reject){
    db.user.findOneAndUpdate({_id: id},{$set: params}, function(error, data){
      if(error){
        reject("未找到该用户！");
      }else{
        resolve(data);
      }
    })
  });
}

/*
 * delete account
 */
module.exports.deleteAccount = function(id){
  return new Promise(function (resolve, reject){
    db.user.findOneAndRemove({_id: id}, function (error, data){
      if(error){  
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}

/*
 *  update accounts
 */
module.exports.updateAccounts = function(ids, value){
  return new Promise(function (resolve, reject){
    db.user.update({"_id":{$in:ids}},{$set:value},{ multi: true },function(error, data){
      if(error){
        reject(error)
      }else{
        resolve(data);
      }
    })
  });
}

/*
 * list account
 */
module.exports.listAccount = function(params){
  return new Promise(function(resolve, reject){
    db.user.find(Object.assign(params,{"deleted":0}), function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}

/*
 *  get deleted accounts
 */
module.exports.getDeletedAccounts = function(){
  return new Promise(function (resolve, reject){
    db.user.find({"deleted" : 1}, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}