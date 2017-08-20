'use strict';

import { combineReducers } from 'redux';

import { RECEIVED_PROJECT_LIST, RECEIVED_DELETED_PROJECT, DELETE_PROJECTS } from '../actions/project_action.jsx';

function projects(state=[], action){
  switch(action.type){
    case RECEIVED_PROJECT_LIST:
      return action.data;
    case DELETE_PROJECTS:
      return state.filter((item)=>{
        return action.ids.indexOf(item._id)===-1;
      });
    default:
      return state;
  }
}

export default combineReducers({
  projects: projects
});