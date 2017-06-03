'use strict';
import { connect } from 'react-redux';

import { addAccount } from "../actions/account_action.jsx";

import { changeInputValue, changeInputStatus, clearData } from '../actions/form_input_action.jsx';

import UserFormComponent from '../components/user_form_component.jsx';

let ATTRS = {
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
  password_confirmation: {
    required: true,
    type: "password",
    label:"确认密码",
    placeholder: "请确认密码",
    editHint: "请确认密码",
    errorHint: "两次密码不一致",
    attrName: "password_confirmation"
  },
  nick_name: {
    required: true,
    type: "text",
    placeholder: "请输入昵称",
    label: "昵称",
    attrName: "nick_name",
    errorHint: "请输入昵称",
    editHint: "请输入昵称"
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
    editHint: "请选择权限",
    value: "0"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    email: Object.assign({} , ATTRS.email, state.userFormReducer.email),
    password: Object.assign({}, ATTRS.password, state.userFormReducer.password),
    password_confirmation: Object.assign({}, ATTRS.password_confirmation,state.userFormReducer.password_confirmation),
    nick_name: Object.assign({}, ATTRS.nick_name, state.userFormReducer.nick_name),
    work_id: Object.assign({}, ATTRS.work_id, state.userFormReducer.work_id),
    permission: Object.assign({}, ATTRS.permission, state.userFormReducer.permission)
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
      },
      onAddAccount: function(data){
        return dispatch(addAccount(reducerName, data));
      },
      onClearData: function(){
        dispatch(clearData("userFormReducer"));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("userFormReducer"))(UserFormComponent);