'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_ARTICLE = "RECEIVED_ARTICLE";

const RECEIVED_ARTICLE_LIST = "RECEIVED_ARTICLE_LIST";

const DELETE_ARTICLE = "DELETE_ARTICLE";

const RECEIVED_DELETED_ARTICLES = "RECEIVED_DELETED_ARTICLES";

function receivedArticle(data){
  return {
    type: RECEIVED_ARTICLE,
    data: data
  };
}

function receivedArticleList(data){
  return {
    type: RECEIVED_ARTICLE_LIST,
    data: data
  };
}

function receivedDeletedArticles(data){
  return {
    type: RECEIVED_DELETED_ARTICLES,
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

function getArticles(params){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/article",
      method: "GET",
      query: params,
      success: function(res){

      },
      error: function(error){

      }
    });
  }
}

function deleteArticles(ids){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/article",
      method: "DELETE",
      body: ids,
      success: function(res){

      },
      error: function(error){

      }
    });
  }
}

function getDeletedArticles(){
  return (dispatch, getState) => {
    wrappedFetch({
      url: "/article/trash",
      method: "GET",
      success: function(res){
        if(res.status === "success"){
          dispatch(receivedDeletedArticles(res.data));
        }
      },
      error: function(error){

      }
    });
  }
}

export {
  RECEIVED_ARTICLE,
  RECEIVED_ARTICLE_LIST,
  DELETE_ARTICLE,
  RECEIVED_DELETED_ARTICLES,
  receivedArticle,
  receivedArticleList,
  fetchArticle,
  getArticles,
  deleteArticles,
  getDeletedArticles
};