'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_BASE = "RECEIVED_BASE";

function receivedBase(data){
  type: RECEIVED_BASE,
  data: data
}

function fetchBase(id){
  return (dispatch, getState) => {
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
    wrappedFetch({
      url: "/base",
      method: "POST",
      success: function(res){
        dispatch(receivedArticle(res.data));
      },
      error: function(error){
        
      }
    });
  }
}

export {
  RECEIVED_BASE,
  receivedBase,
  addBase,
  fetchBase
};