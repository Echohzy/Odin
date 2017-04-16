'use strict';

import { combineReducers } from "redux";

import { RECEIVED_USERS } from "../actions/account_action.jsx";

function users(state=[], action){
  console.log(action.type===RECEIVED_USERS);
  switch(action.type){
    case RECEIVED_USERS:
      return action.data;
    default: 
      return state;
  }
}

export default combineReducers({
  users: users
});