'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

import { RECEIVED_BASE } from '../actions/base_action.jsx';

let createdInputReducer = formInputReducer("baseFormReducer");

let currentBase = function(state={}, action){
  switch(action.type){
    case RECEIVED_BASE:
      return action.data;
    default: 
      return state;
  };
};


export default combineReducers({
  web_name: createdInputReducer("web_name"),
  web_address: createdInputReducer("web_address"),
  web_keyword: createdInputReducer("web_keyword"),
  web_describtion: createdInputReducer("web_describtion"),
  web_copyright: createdInputReducer("web_copyright"),
  web_email: createdInputReducer("web_email")
});