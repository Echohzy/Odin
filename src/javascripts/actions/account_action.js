'use strict';
var fetch = require("fetch");

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

function setAccountInfo(data){
  return {
    type: SET_ACCOUNT_INFO,
    data: data
  };
}

function signIn(data){
  return (dispatch, getState)=>{
    fetch("/account/signIn",{
      method: "POST",
      body: data
    }).then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data);
    });
  };
}