'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("signInReducer");

export default combineReducers({
  login_name: createdInputReducer("login_name"),
  password: createdInputReducer("password")
});