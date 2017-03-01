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
  return (dispatch, getState)=>{
    fetch("/account/0/sign_in",{
      method: "GET",
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      query: JSON.stringify(data)
    }).then(function(response){
      return response.json();
    }).then(function(res){
      if(res.status==="success"){
        dispatch(setAccountInfo(res.data));
      }
    }).catch(function(error){
      console.log(error);
    });
  };
}

function signOut(){
  return (dispatch, getState) => {
    fetch("/account/0/sign_out",{
      method: "DELETE",
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function(response){
      return response.json();
    }).then(function(res){
      if(res.status == "success"){
        dispatch(setAccountInfo(res.data));
      }
    }).catch(function(error){
      console.log(error);
    });
  };
}

export {
  SET_ACCOUNT_INFO,
  signIn,
  signOut
};