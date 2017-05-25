'use strict';

var db = require("../config/db.js");
var  mongoose = require("mongoose");

/*app article*/
module.exports.addArticle = function(params){
  return new Promise(function(resolve, reject){
    var article = db.article(params);
    article.save(function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

/*get Article*/
module.exports.getArticle = function(id){
  return new Promise(function (resolve, reject){
    db.article.findOneById(id, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

/*list article*/
module.exports.listArticle = function(params){
  return new Promise(function (resolve, reject){
    db.article.find(params, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

/*update article*/
module.exports.updateArticle = function(id, params){
  return new Promise(function (resolve, reject){
    db.article.findByIdAndUpdate(id, {$set: params}, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    })
  });
};

/*delete article*/
module.exports.deleteArticle = function(id){
  return new Promise(function (resolve, reject){
    db.article.findOneAndRemove({_id: id}, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.updateArticles = function(ids, value){
  return new Promise(function(resolve, reject){
    db.article.update({"_id":{$in: ids}}, {$set: value}, {multi: true}, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  })
};

module.exports.getDeletedArticles = function(){
  return new Promise(function(resolve, reject){
    db.article.find({"deleted": 1}, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};