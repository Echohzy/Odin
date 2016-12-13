'use strict';

import { combineReducers } from "redux";

import { SET_ACCOUNT_INFO } from "../actions/account_action.jsx";

function current_user(state = {}, action){
  switch(action.type){
    case SET_ACCOUNT_INFO:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  current_user: current_user
});