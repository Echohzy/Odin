'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

import { RECEIVED_PROJECT_LIST } from '../actions/project_action.jsx';

let createdInputReducer = formInputReducer("articleFormReducer");

function projects(state=[], action){
  switch(action.type){
    case RECEIVED_PROJECT_LIST:
      return action.data;
    default:
      return state;
  };
}

export default combineReducers({
  title: createdInputReducer("title"),
  url: createdInputReducer("url"),
  params: createdInputReducer("params"),
  response: createdInputReducer("response"),
  method: createdInputReducer("content"),
  project_id: createdInputReducer("project_id"),
  projects: projects
});