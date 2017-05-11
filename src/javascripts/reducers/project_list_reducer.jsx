'use strict';

import { combineReducers } from 'redux';

import { RECEIVED_PROJECT_LIST } from '../actions/project_action';

function projects(state=[], action){
  switch(action.type){
    case RECEIVED_PROJECT_LIST:
      return state.concat(action.data);
    default:
      return state;
  }
}

export default combineReducers({
  projects: projects
});