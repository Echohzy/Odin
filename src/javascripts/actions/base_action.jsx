'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_BASE = "RECEIVED_BASE";
const SET_REQUESTING = "SET_REQUESTING";

function receivedBase(data){
  return {
    type: RECEIVED_BASE,
    data: data
  };
}

function setRequesting(requesting){
  return {
    type: SET_REQUESTING,
    requesting: requesting
  };
}

function fetchBase(id){
  return (dispatch, getState) => {
    dispatch(setRequesting(true));
    wrappedFetch({
      url: `/base/${id}`,
      methlod: "GET",
      success: function(res){
        dispatch(receivedBase(res.data));
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}

function addBase(params){
  return (dispatch, getState) => {
    dispatch(setRequesting(true));
    wrappedFetch({
      url: "/base",
      method: "POST",
      body: JSON.stringify(params),
      success: function(res){
        dispatch(receivedBase(res.data));
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}

function getBase(){
  return (dispatch, getState)=>{
    wrappedFetch({
      url: "/base",
      method: "GET",
      success: function(res){
        dispatch(receivedBase(res.data));
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}

export {
  RECEIVED_BASE,
  SET_REQUESTING,
  receivedBase,
  addBase,
  fetchBase,
  getBase,
  setRequesting
};