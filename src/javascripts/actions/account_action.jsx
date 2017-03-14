'use strict';

import fetch from 'isomorphic-fetch';

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

import { setDefaultError } from './form_input_action.jsx';

function setAccountInfo(data){
  return {
    type: SET_ACCOUNT_INFO,
    data: data
  };
}

function signIn(reducerName, data){
  return (dispatch, getState)=>{
    fetch("/account/0/sign_in",{
      method: "POST",
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response){
      return response.json();
    }).then(function(res){
      if(res.status==="success"){
        dispatch(setAccountInfo(res.data));
      }else if(res.status==="error"){
        var keys = Object.keys(res.message);
        keys.forEach(function(attrName){
          dispatch(setDefaultError(reducerName, attrName, res.message[attrName]));
        });
      }
    }).catch(function(error){
      console.log(error);
    });
  };
}

function signOut(){
  return (dispatch, getState)=>{
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
      if(res.status==="success"){
        dispatch(setAccountInfo(res.data));
      }
    }).catch(function(error){
      console.log(error);
    });
  };
}

function addAccount(){
  return (dispatch, getState) => {
    fetch("/account", {
      
    });
  };
}

export {
  SET_ACCOUNT_INFO,
  signIn,
  signOut
};