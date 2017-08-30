'use strict';

var faker = require('faker');
var http = require('http');
var request = require('request');

// request.post({
//     url:'http://127.0.0.1:3000/mock',
//     json: true,
//     body:{
//       url: "/test2",
//       project_id: "594fa47852132d5c9ba0cfe3",
//       mock_setting: [{
//         name:"name",
//         value:[{name:"age", value:"random.number"}]
//       },{
//         name:"friend",
//         max_length: 10,
//         type: "array",
//         value:[{name: "name", value:"name.findName"}, {name:"age", value:"random.number"}]
//       }]
//     }
// },function(err, request, body){
//   console.log(err);
//   console.log(body);
// });

// request.get('http://127.0.0.1:3000/mock/instance/test2',
// function(err, request, body){
//   console.log(err);
//   console.log(body);
// });

$.ajax({
  type: "get",
  url: 'http://127.0.0.1:3000/mock/instance/test2',
  contentType: "application/json; charset=UTF-8",
  crossDomain: true,
  success: function(data){
    console.log(data);
  },
  error: function(error){
    console.log(error);
  },
  complete: function(data){
    console.log(data);
  }
});


