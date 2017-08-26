'use strict';

var faker = require('faker');
var mongoose = require('mongoose');
var db = require('../config/db.js');
var toString = Object.prototype.toString;

module.exports.addMock = function(params){
  return new Promise(function (resolve, reject){
    var mock = db.mock(params);
    mock.save(function(error, data){
      if(error){
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.getMock = function(id){
  return new Promise(function (resolve, reject){
    db.mock.findById(id, function (error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};

function mockData(result, mock_setting){
  mock_setting.map(function(item){
    if(item.type === 'array'){
      var len = faker.fake("{{random.number}}")%item.max_length+1,
        i=0,
        arr=[];
      for(;i<len;i++){
        arr.push(mockData({}, item.value));
      }
      result[item.name] = arr;
    }else if(toString.call(item.value)==='[object Array]'){
      result[item.name] = mockData({}, item.value);
    }else{
      result[item.name] = faker.fake("{{"+item.value+"}}");
    }
  });
  return result;
}

module.exports.getMockData = function(url){
  return new Promise(function (resolve, reject){
    db.mock.findOne({url, url}, function (error, data){
        if(error){
          reject(error);
        }else{
          resolve(mockData({}, data.mock_setting));
        }
    });
  });
};

module.exports.updateMock = function(id, params){
  return new Promise(function (resolve, reject){
    db.mock.findByIdAndUpdate(id, {$set: params}, function(error, data){
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
  });
};