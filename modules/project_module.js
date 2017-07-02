'use strict';
var db = require("../config/db.js");
var mongoose = require("mongoose");
var accountModule = require("./account_module");

module.exports.addProject = function(params){
  return new Promise(function (resolve, reject){
    var project = db.project(params);
    project.save(function(error, data){
      if(error){
        reject("项目创建失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.updateProject = function(id, params){
  return new Promise(function (resolve, reject){
    db.project.findByIdAndUpdate(id,{$set: params}, function(error, data){
      if(error){
        reject("更新项目失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.getProject = function(id){
  return new Promise(function (resolve, reject){
    db.project.findOneById(id, function(error, data){
      if(error){
        reject("未找到该项目！");
      }else{
        // resolve(data);
        accountModule.getAccountsByIds(data.members)
        .then(function(users){
          resolve(Object.assign(data,{members: users}));
        }).catch(function(error){
          reject(error);
        });
      }
    });
  });
};

module.exports.deleteProject = function(id){
  return new Promise(function (resolve, reject){
    db.project.findOneAndRemove({_id: id}, function(error, exports){
      if(error){
        reject("项目删除失败！");
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.listProject = function(params){
  return new Promise(function (resolve, reject){
    db.project.find(Object.assign({"deleted": 0},params), function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}

module.exports.updateProjects = function(ids, value){
  console.log(ids);
  return new Promise(function (resolve, reject){
    db.project.update({"_id": {$in: ids}}, {$set: value}, {multi: true}, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

module.exports.getDeletedProjects = function(){
  return new Promise(function (resolve, reject){
    db.project.find({"deleted":1}, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
}