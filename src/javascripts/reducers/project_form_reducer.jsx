'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("userFormReducer");

export default combineReducers({
  title: createdInputReducer("title"),
  description: createdInputReducer("description")
});