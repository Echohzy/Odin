'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

import { SET_ACCOUNT_AVATAR } from "../actions/account_action.jsx";

let createdInputReducer = formInputReducer("userSettingReducer");

function avatar(state="", action){
  switch(action.type){
    case SET_ACCOUNT_AVATAR:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  avatar: avatar,
  email: createdInputReducer("email"),
  nick_name: createdInputReducer("nick_name"),
  work_id: createdInputReducer("work_id")
});