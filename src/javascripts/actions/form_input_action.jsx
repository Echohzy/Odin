'use strict';
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const CHANGE_INPUT_STATUS = "CHANGE_INPUT_STATUS";

function changeInputValue(value){
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  };
}

function changeInputStatus(status){
  return {
    type: CHANGE_INPUT_STATUS,
    status: status
  };
}

export {
  CHANGE_INPUT_VALUE,
  CHANGE_INPUT_STATUS,
  changeInputValue,
  changeInputStatus
};

