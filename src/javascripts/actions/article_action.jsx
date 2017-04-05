'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_ARTICLE = "RECEIVED_ARTICLE";

function receivedArticle(data){
  return {
    type: RECEIVED_ARTICLE,
    data: data
  };
}

function fetchArticle(id){
  return (dispatch, getState)=>{
    wrappedFetch({
      url: "/article/" + id,
      method: "GET",
      success: function(res){
        dispatch(receivedArticle(res.data));
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}

function addArticle(params){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/article",
      method: "POST",
      success: function(res){
        
      },
      error: function(error){
        
      }
    });
  }
}

export {
  RECEIVED_ARTICLE,
  receivedArticle,
  fetchArticle
};