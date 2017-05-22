'use strict';
import { 
  CHANGE_INPUT_VALUE,
  CHANGE_INPUT_STATUS,
  SET_DEFAULT_ERROR,
  CLEAR_DATA
} from '../actions/form_input_action.jsx';

function formInputReducer(reducerName){
  return function(attrName){
    return function(state = {}, action){
      if(reducerName===action.reducerName){
        if(attrName===action.attrName){
          switch(action.type){
            case CHANGE_INPUT_VALUE:
              return Object.assign({}, state, {value: action.value});
            case CHANGE_INPUT_STATUS:
              return Object.assign({}, state, {status: action.status});
            case SET_DEFAULT_ERROR:
              return Object.assign({},state, {defaultError: action.defaultError, status: "initial_error"});
            default:
              return state;
          }
        }else if(action.type === CLEAR_DATA){
          return Object.assing({}, state, {value: "", status:null});
        }
      }else{
        return state || {};
      }
    };
  };
}

export default formInputReducer;