'use strict';

import { combineReducers } from 'redux';

import {  RECEIVED_DELETED_ARTICLES } from "../actions/article_action.jsx";

function articles(state=[], action){
  switch(action.type){
    case RECEIVED_DELETED_ARTICLES:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  articles: articles
});