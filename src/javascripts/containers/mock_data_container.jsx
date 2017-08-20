'use strict';

import { connect } from 'react-redux';

import MockDataComponent from '../mock_data_component.jsx';

import {changeInputValue, changeInputStatus, clearData} from '../actions/form_input_action.jsx';

let ATTRS = {
  url: {
    required: true,
    type: "text",
    placeholder: "请输入Url",
    label: "url",
    attrName: "url",
    editHint: "请输入Url",
    errorHint: "Url不能为空"
  },
  type: {
    required: true,
    type: "text",
    placeholder: "请输入Type",
    label: "type",
    editHint: "请输入Type",
    errorHint: "Type不能为空"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    url: Object.assign({}, ATTRS.url, state.mockDataReducer.url),
    type: Object.assign({}, ATTRS.type, state.mockDataReducer.type)
  };
}

let mapDispatchToProps = function(reducerName){
  return (dispatch)=>{
    return {
        onInputValueChange: function(attrName, value){
          dispatch(changeInputValue(reducerName, attrName, value));
        },
        onInputStatusChange: function(attrName, status){
          dispatch(changeInputStatus(reducerName, attrName, status));
        },
        onClearData: function(){
          dispatch(clearData(reducerName));
        }
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps("mockDataReducer"))(MockDataComponent);