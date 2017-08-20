'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("mockDataReducer");

export default combineReducers({
  url: createdInputReducer("url"),
  type: createdInputReducer("type")
});