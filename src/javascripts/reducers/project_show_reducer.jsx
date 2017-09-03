'use strict';

import { combineReducers } from 'redux';
import { RECEIVED_PROJECT, RECEIVED_PROJECT_MOCKS } from '../actions/project_action.jsx';
import { CLEAR_DATA } from '../actions/form_input_action.jsx';

function project(state={}, action){
  switch(action.type){
    case RECEIVED_PROJECT:
      return action.data;
    case CLEAR_DATA:
      if(action.reducerName==="projectShowReducer"){
        return {};
      }
      return state;
    default:
      return state;
  }
}

function mocks(state=[], action){
  switch(action.type){
    case RECEIVED_PROJECT_MOCKS:
      return action.data;
    case CLEAR_DATA:
      if(action.reducerName==="projectShowReducer"){
        return [];
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  project: project,
  mocks: mocks
});
