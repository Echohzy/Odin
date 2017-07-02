'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

import { RECEIVED_USERS } from '../actions/account_action.jsx';

let createdInputReducer = formInputReducer("projectFormReducer");


function users(state=[], action){
  switch(action.type){
    case RECEIVED_USERS:
      if(action.reducerName === "projectFormReducer"){
        return action.data;
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  title: createdInputReducer("title"),
  description: createdInputReducer("description"),
  users: users
});