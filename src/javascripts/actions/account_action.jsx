'use strict';

const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";

const RECEIVED_DATA = "RECEIVED_DATA";

const RECEIVED_USERS = "RECEIVED_USERS";

const  RECEIVED_DELETED_USERS = "RECEIVED_DELETED_USERS";

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

function receivedDeletedUsers(data){
  return {
    type: RECEIVED_DELETED_USERS,
    data: data
  };
}

function signIn(reducerName, data){
  return (dispatch, getState)=>{
    return wrappedFetch({
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

    return wrappedFetch({
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
    return wrappedFetch({
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
    return wrappedFetch({
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
    return wrappedFetch({
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

function getDeletedUsers(){
  return (dispatch, getState) => {
    return wrappedFetch({
      url: "/account/trash",
      method: "GET",
      success: function(res){
        dispatch(receivedDeletedUsers(res.data));
      },  
      error: function(error){
        console.log(error);
      }
    });
  }
}

function updateUser(id, params){
  return (dispatch, getState) =>{
    return wrappedFetch({
      url: "/account/" + id,
      method: "PUT",
      body: JSON.stringify(params),
      success: function(res){
        return res;
      },  
      error: function(error){
        return error
      }
    });
  }
}

export {
  SET_ACCOUNT_INFO,
  RECEIVED_DATA,
  RECEIVED_USERS,
  RECEIVED_DELETED_USERS,
  signIn,
  signOut,
  addAccount,
  receivedData,
  getUsers,
  deleteUsers,
  getDeletedUsers,
  updateUser
};