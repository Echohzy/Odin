'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

var createdInputReducer = formInputReducer("userFormReducer");

export default combineReducers({
  email: createdInputReducer("email"),
  password: createdInputReducer("password"),
  nick_name: createdInputReducer("nixk_name"),
  word_id: createdInputReducer("work_id"),
  permission: createdInputReducer("permission")
});