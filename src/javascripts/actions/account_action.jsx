'use strict';

import fetch from 'isomorphic-fetch';

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

const RECEIVED_DATA = "RECEIVED_DATA";

import { setDefaultError } from './form_input_action.jsx';

import wrappedFetch from '../utils/fetch.jsx';

function setAccountInfo(data){
  return {
    type: SET_ACCOUNT_INFO,
    data: data
  };
}

function receivedData(reducerName, data){
  return {
    type: RECEIVED_DATA,
    reducerName: reducerName,
    data: data
  };
}

function signIn(reducerName, data){
  return (dispatch, getState)=>{
    wrappedFetch({
      url: "/account/0/sign_in",
      method: "POST",
      body: JSON.stringify(data),
      success: (res)=>{
        if(res.status==="success"){
          dispatch(setAccountInfo(res.data));
        }else if(res.status==="error"){
          var keys = Object.keys(res.message);
          keys.forEach(function(attrName){
            dispatch(setDefaultError(reducerName, attrName, res.message[attrName]));
          });
        }
      },
      error: (error)=>{
        console.log(error);
      }
    });
  };
}

function signOut(){
  return (dispatch, getState)=>{

    wrappedFetch({
      url: "/account/0/sign_out",
      method: "DELETE",
      success: (res)=>{
        if(res.status==="success"){
          dispatch(setAccountInfo(res.data));
        }
      },
      error: (error)=>{
        console.log(error);
      }
    });
  };
}

function addAccount(reducerName, data){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/account",
      method: "POST",
      body: JSON.stringify(data),
      success: (res)=>{
        if(res.status==="success"){
          dispatch(receivedData(reducerName, data));
        }
      },
      error: (err)=>{
        console.log(err);
      }
    });
  };
}

export {
  SET_ACCOUNT_INFO,
  RECEIVED_DATA,
  signIn,
  signOut,
  addAccount,
  receivedData
};