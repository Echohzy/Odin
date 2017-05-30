'use strict';

import { connect } from 'react-redux';

import UserSettingComponent from "../components/user_setting_component.jsx";

import { settingUser } from "../actions/account_action.jsx";

import { changeInputValue, changeInputStatus, clearData} from "../actions/form_input_action.jsx";

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
  nick_name: {
    required: true,
    type: "text",
    placeholder: "请输入昵称",
    label: "昵称",
    attrName: "nick_name",
    errorHint: "昵称不能为空",
    editHint: "请输入昵称"
  },
  work_id:{
    type: "text",
    placeholder:"请输入工号",
    label: "工号",
    attrName: "work_id",
    editHint: "请输入工号"
  }
};

let mapStateToProps = function(state, action){
  return {
    email: Object.assign({},ATTRS.email, {defaultValue: state.accountReducer.current_user.email}, state.userSettingReducer.email),
    nick_name: Object.assign({}, ATTRS.nick_name, {defaultValue: state.accountReducer.current_user.nick_name}, state.userSettingReducer.nick_name),
    work_id: Object.assign({},ATTRS.work_id, {defaultValue: state.accountReducer.current_user.work_id}, state.userSettingReducer.work_id)
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      settingUser: function(params){
        dispatch(settingUser(params));
      },
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      },
      onClearData: function(){
        dispatch(clearData("userFormReducer"));
      }
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps("userSettingReducer"))(UserSettingComponent);