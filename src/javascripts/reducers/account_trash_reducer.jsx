'use strict';

import combineReducers from 'redux';

import { RECEIVED_DELETED_USERS } from "../actions/account_action.jsx";

function users (state=[], action){
  switch(action.type){
    case RECEIVED_DELETED_USERS:
      return actions.data;
    default:
      return state;
  }
};

export default combineReducers({
  users: users
});