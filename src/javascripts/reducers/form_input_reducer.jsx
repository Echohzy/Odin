'use strict';
import { CHANGE_INPUT_VALUE, CHANGE_INPUT_STATUS } from '../actions/form_input_action.jsx';

function formInputReducer(reducerName){
  return function(attrName){
    return function(state = {}, action){
      if(reducerName===action.reducerName && attrName===action.attrName){
        switch(action.type){
          case CHANGE_INPUT_VALUE:
            return Object.assign({}, state, {value: action.value});
          case CHANGE_INPUT_STATUS:
            return Object.assign({}, state, {status: action.status});
          default:
            return state;
        }
      }else{
        return {};
      }
    };
  };
}

export default formInputReducer;