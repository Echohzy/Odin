'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

var createdInputReducer = formInputReducer("userFormReducer");

export default combineReducers({
  email: createdInputReducer("email"),
  password: createdInputReducer("password"),
  password_confirmation: createdInputReducer("password_confirmation"),
  nick_name: createdInputReducer("nick_name"),
  work_id: createdInputReducer("work_id"),
  permission: createdInputReducer("permission")
});