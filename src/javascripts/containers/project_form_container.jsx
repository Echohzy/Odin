'use strict';
import { connect } from 'react-redux';

import ProjectFormComponent from '../components/project_form_component.jsx';

import { changeInputValue, changeInputStatus } from '../actions/form_input_action.jsx';

let ATTRS = {
  title: {
    required: true,
    type: "text",
    placeholder: "请输入项目名称",
    label: "名称",
    attrName: "title",
    editHint: "请输入名称",
    errorHint: "名称不能为空！"
  },
  description: {
    required: true,
    type: "text",
    placeholder: "请输入项目描述",
    label: "描述",
    attrName: "description",
    editHint: "请输入描述",
    errorHint: "描述不能为空！"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    title: Object.assign({}, ATTRS.title, state.projectFormReducer.title),
    description: Object.assign({}, ATTRS.description, state.projectFormReducer.description)
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(chnageInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      }
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps("projectFormReducer"))(ProjectFormComponent);