'use strict';

import { combineReducers } from 'redux';

import formInputReducer from './form_input_reducer.jsx';

import { RECEIVED_USERS } from '../actions/account_action.jsx';

import { SELECT_PROJECT_USER, RECEIVED_PROJECT } from '../actions/project_action.jsx';

let createdInputReducer = formInputReducer("projectFormReducer");

function selected_users(state={}, action){
  switch(action.type){
    case SELECT_PROJECT_USER:
      var tmp = Object.assign({},state);
      if(state[action.user.id]){
        delete tmp[action.user.id];
      }else{
        Object.assign(tmp,{[action.user.id]: action.user});
      }
      return tmp;
    case RECEIVED_PROJECT:
     var members = {};
     action.data.members.map((item)=>{
       members[item.id] = item;
     });
     return members;
    default:
      return state;
  }
}

function users(state=[], action){
  switch(action.type){
    case RECEIVED_USERS:
      if(action.reducerName === "projectFormReducer"){
        return action.data;
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  title: createdInputReducer("title"),
  description: createdInputReducer("description"),
  selected_users: selected_users,
  users: users
});