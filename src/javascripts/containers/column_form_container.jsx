'use strict';

import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus } from '../actions/form_input_action.jsx';

import ColumnFormComponent from '../components/column_form_component.jsx';

let ATTRS = {
  title:{
    required: true,
    type: "text",
    placeholder: "请输入栏目名称",
    label:"栏目名称",
    attrName: "title",
    editHint: "栏目名称不能为空！",
    errorHint: "栏目名称不能为空！"
  },
  description: {
    type: "text",
    placeholder: "请输入栏目描述",
    label: "栏目描述",
    attrName: "description",
    editHint: "请输入栏目描述"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    title: Object.assign({}, ATTRS.title, state.columnFormReducer.title),
    description: Object.assign({}, ATTRS.description, state.columnFormReducer.description)
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName,attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("columnFormReducer"))(ColumnFormComponent);