'use strict';

import fetch from 'isomorphic-fetch';

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

function setAccountInfo(data){
  return {
    type: SET_ACCOUNT_INFO,
    data: data
  };
}

function signIn(data){
  console.log(data);
  return (dispatch, getState)=>{
    fetch("/account/0/sign_in",{
      method: "POST",
      body: data
    }).then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data);
    });
  };
}

export {
  SET_ACCOUNT_INFO,
  signIn
};