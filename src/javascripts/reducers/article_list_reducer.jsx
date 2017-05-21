'use strict';

import { combineReducers } from 'redux';

import { RECEIVED_ARTICLE_LIST, DELETE_ARTICLE} from "../actions/article_action.jsx";

function articles(state=[], action){
  switch(action.type){
    case RECEIVED_ARTICLE_LIST:
      return state.concat(actions.data);
    default:
      return state;
  };
} 

export default combineReducers({
  articles: articles
});