'use strict';

import { combineReducers } from 'redux';

import { RECEIVED_DELETED_PROJECT } from '../actions/project_action.jsx'; 

function projects(state=[], action){
  switch(action.type){
    case RECEIVED_DELETED_PROJECT:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  projects: projects
});