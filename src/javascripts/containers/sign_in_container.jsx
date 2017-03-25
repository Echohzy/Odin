'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus } from '../actions/form_input_action.jsx';

import { signIn } from "../actions/account_action.jsx";

import SignInComponent from '../components/sign_in_component.jsx';

let ATTRS = {
  login_name: {
    required: true,
    type: "text",
    placeholder: "请输入邮箱地址",
    label: "邮箱",
    attrName: "login_name",
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
    errorHint: "请输入8-20位密码"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    login_name: Object.assign({}, ATTRS.login_name, state.signInReducer.login_name),
    password: Object.assign({}, ATTRS.password, state.signInReducer.password),
    current_user: state.accountReducer.current_user
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
      onSignIn: function(data){
        dispatch(signIn(reducerName, data));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("signInReducer"))(SignInComponent);