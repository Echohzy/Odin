'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus } from '../actions/form_input_action.jsx';

import { signIn } from "../actions/account_action.jsx";

import SignInComponent from '../components/sign_in_component.jsx';

var ATTRS = {
  login_name: {
    type: "text",
    placeholder: "请输入邮箱地址",
    label: "邮箱",
    attrName: "login_name",
    editHint: "请输入正确的邮箱",
    errorHint: "邮箱错误"
  },
  password: {
    type: "password",
    placeholder: "请输入密码",
    label: "密码",
    attrName: "password",
    editHint: "请输入8-20位密码",
    errorHint: "请输入8-20位密码"
  }
};

var mapStateToProps = function(state, ownProps){
  return {
    login_name: Object.assign({}, state.signInReducer.login_name, ATTRS.login_name),
    password: Object.assign({}, state.signInReducer.password, ATTRS.password),
    current_user: state.accountReducer.current_user
  };
};

var mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      },
      onSignIn: function(data){
        dispatch(signIn(data));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("signInReducer"))(SignInComponent);