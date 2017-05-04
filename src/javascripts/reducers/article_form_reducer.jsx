'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("articleFormReducer");

export default combineReducers({
  title: createdInputReducer("title"),
  content: createdInputReducer("content")
});