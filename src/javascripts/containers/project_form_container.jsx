'use strict';
import { connect } from 'react-redux';

import ProjectFormComponent from '../components/project_form_component.jsx';

import { changeInputValue, changeInputStatus, clearData } from '../actions/form_input_action.jsx';

import { getUsers } from '../actions/account_action.jsx';
 
import { addProject, selectProjectUser, getProject } from "../actions/project_action.jsx";

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
    description: Object.assign({}, ATTRS.description, state.projectFormReducer.description),
    users: state.projectFormReducer.users,
    selected_users: state.projectFormReducer.selected_users
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      },
      onClearData: function(){
        dispatch(clearData("projectFormReducer"));
      },
      postProject: function(data){
        return dispatch(addProject(data));
      },
      getUserList: function(){
        return dispatch(getUsers(reducerName));
      },
      addUserToProject: function(user){
        return dispatch(selectProjectUser(user))
      },
      fetchProject: function(id){
        return dispatch(getProject(id));
      }
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps("projectFormReducer"))(ProjectFormComponent);