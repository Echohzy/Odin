'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

let createdInputReducer = formInputReducer("baseFormReducer");

export default combineReducers({
  web_name: createdInputReducer("web_name"),
  web_address: createdInputReducer("web_address"),
  web_keyword: createdInputReducer("web_keyword"),
  web_describtion: createdInputReducer("web_describtion"),
  web_copyright: createdInputReducer("web_copyright")
});