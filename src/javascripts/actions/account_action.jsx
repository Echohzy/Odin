'use strict';

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

const RECEIVED_DATA = "RECEIVED_DATA";

const RECEIVED_USERS = "RECEIVED_USERS";

import { setDefaultError } from './form_input_action.jsx';

import queryString from 'query-string';

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

function receivedUsers(data){
  return {
    type: RECEIVED_USERS,
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

function getUsers(){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/account",
      method: "GET",
      success: function(res){
        dispatch(receivedUsers(res.data));
      },
      error: function(error){
        console.log(error);
      }
    });
  }
};

function deleteUsers(ids){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/account",
      method: "DELETE",
      body: JSON.stringify({ids: ids}),
      success: function(res){
        dispatch(getUsers());
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}

export {
  SET_ACCOUNT_INFO,
  RECEIVED_DATA,
  RECEIVED_USERS,
  signIn,
  signOut,
  addAccount,
  receivedData,
  getUsers,
  deleteUsers
};