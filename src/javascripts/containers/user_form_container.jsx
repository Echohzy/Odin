'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus } from '../actions/form_inpput_action.jsx';

import UserFormComponent from '../components/user_form_component.jsx';

var ATTRS = {
  email: {
    required: true,
    type: 'text',
    placeholder: "请输入邮箱地址",
    label: "邮箱",
    attrName: "email",
    editHint: "请输入正确的邮箱",
    errorHint: "邮箱错误",
    validate: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
  },
  password: {
    required: true,
    type: "password",
    placeholder: "请输入密码",
    label: "密码",
    attrName: "password",
    editHint: "请输入8-20位密码",
    errorHint: "请输入8-20位密码",
    validate: /^[a-zA-Z0-9\!@#\$%\^\&\*\(\)-\+=_\.,\?]{8,20}$/,
  },
  nick_name: {
    required: true,
    type: "text",
    placeholder: "请输入昵称",
    label: "昵称",
    attrName: "nick_name",
    errorHint: "请输入昵称",
    edit: "请输入昵称"
  },
  work_id: {
    type: "text",
    placeholder: "请输入工号",
    label: "工号",
    attrName: "work_id",
    editHint: "请输入工号",
  },
  permission: {
    label: "权限",
    attrName: "permission",
    editHint: "请选择权限"
  }
};

var mapStateToProps = function(state, ownProps){
  return {
    email: Object.assign({}, state.userFormReducer.email, ATTRS.email),
    password: Object.assign({}, state.userFormReducer.password, ATTRS.password),
    nick_name: Object.assign({}, state.userFormReducer.nick_name, ATTRS.nick_name),
    work_id: Object.assign({}, state.userFormReducer.work_id, ATTRS.work_id),
    permission: Object.assign({}, state.userFormReducer.permission, ATTRS.permission)
  };
};

var mapDispatchToProps = function(reducerName){
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

export default connect(mapStateToProps, mapDispatchToProps("userFormReducer"))(UserFormComponent);
