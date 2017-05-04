'use strict';

import React, { Component } from 'react';

import { Button } from 'antd';


import FormInputComponent from "./form_input_component.jsx";

import "../../stylesheets/parts/form_control.css";

import "../../stylesheets/sign_in.css";

import formEnhance from "./HOCs/form_enhance.jsx";


class SignIn extends Component {
  constructor(props){
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.current_user.id!==this.props.current_user.id){
      this.props.router.push("/");
    }
  }
  onSubmitForm(){
    var data = {}, passed=true;
    if(!this.props.login_name.value || !this.props.password.value){
      passed = false;
    }
    data.email = this.props.login_name.value;
    data.password = this.props.password.value;
    this.props.onSignIn(data);
  }
  render(){
    return (
      <div className="OD-sign-in-container">
        <div className="OD-form-title">
          <h1>登录</h1>
        </div>
        <div className="OD-sign-in-content">
          <FormInputComponent 
            {...this.props.login_name}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr("login_name")}/>
          <FormInputComponent 
            {...this.props.password}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr("password")}/>
          <div className="OD-form-control button-wrap">
            <span className="OD-form-button" onClick={this.onSubmitForm}>登录</span>
          </div>
        </div>
      </div>
    );
  }
}

export default formEnhance(SignIn);