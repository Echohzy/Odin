'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

var createdInputReducer = formInputReducer("userFormReducer");

export default combineReducers({
  title: createdInputReducer("title"),
  description: createdInputReducer("description")
});