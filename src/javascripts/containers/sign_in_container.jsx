'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus } from '../actions/form_input_action';

import SignInComponent from '../components/sign_in_component';

var ATTRS = {
  email: {
    type: "email",
    placeholder: "请输入邮箱地址",
    label: "邮箱",
  },
  password: {
    type: "password",
    placeholder: "请输入密码",
    label: "密码"
  }
};

var mapStateToProps = function(state, ownProps){
  return {
    email: Object.assign({}, state.signInReducer.email, ATTRS.email),
    password: Object.assign({}, state.signInReducer.password, ATTRS.password)
  };
}

var mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      }
    };
  };
}

export default connect(mapStateToProps, mapDispatchToProps("signInReducer"))(SignInComponent);