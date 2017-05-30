'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("userSettingReducer");

export default combineReducers({
  email: createdInputReducer("email"),
  nick_name: createdInputReducer("nick_name"),
  work_id: createdInputReducer("word_id")
});