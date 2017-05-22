'use strict';
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const CHANGE_INPUT_STATUS = "CHANGE_INPUT_STATUS";
const SET_DEFAULT_ERROR = "SET_DEFAULT_ERROR";
const CLEAR_DATA = "CLEAR_DATA";

function changeInputValue(reducerName, attrName, value){
  return {
    reducerName: reducerName,
    attrName: attrName,
    type: CHANGE_INPUT_VALUE,
    value: value 
  };
}

function changeInputStatus(reducerName, attrName, status){
  return {
    reducerName: reducerName,
    attrName: attrName,
    type: CHANGE_INPUT_STATUS,
    status: status
  };
}

function setDefaultError(reducerName, attrName, defaultError){
  return {
    reducerName: reducerName,
    attrName: attrName,
    type: SET_DEFAULT_ERROR,
    defaultError: defaultError
  };
}

function clearData(reducerName){
  return {
    type: CLEAR_DATA,
    reducerName: reducerName
  }
};

export {
  CHANGE_INPUT_VALUE,
  CHANGE_INPUT_STATUS,
  SET_DEFAULT_ERROR,
  CLEAR_DATA,
  changeInputValue,
  changeInputStatus,
  setDefaultError,
  clearData
};

