'use strict';

import { combineReducers } from "redux";

import { RECEIVED_USERS } from "../actions/account_action.jsx";

function users(state=[], action){
  switch(action.type){
    case RECEIVED_USERS:
      if(action.reducerName==="projectFormReducer"){
        return state;
      }
      return action.data;
    default: 
      return state;
  }
}

export default combineReducers({
  users: users
});