'use strict';

import React, { Component } from 'react';

import { Button } from 'antd';


import FormInputComponent from "./form_input_component.jsx";

import "../../stylesheets/parts/form_control.css";

import "../../stylesheets/sign_in.css";

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onValidateAttr = this.onValidateAttr.bind(this);
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
  onValidateAttr(attrName){
    var attrProps = this.props[attrName];
    if(attrProps.required&&!attrProps.value){
      this.props.onInputStatusChange(attrName, "error");
      return false;
    }
    if(attrProps.value && Object.prototype.toString.call(attrProps.validate)=="[object RegExp]"){
      if(!attrProps.validate.test(attrProps.value)){
        this.props.onInputStatusChange(attrName, "error");
        return false;
      }
    }
    if(attrProps.value && Object.prototype.toString.call(attrProps.validate)=="[object Function]"){
      if(!attrProps.validate(attrProps.value)){
        this.props.onInputStatusChange(attrName, "error");
        return false;
      }
    }
    this.props.onInputStatusChange(attrName, "");
    return true;
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
            onBlur={()=>this.onValidateAttr("login_name")}/>
          <FormInputComponent 
            {...this.props.password}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("password")}/>
          <div className="OD-form-control">
            <span className="OD-form-button" onClick={this.onSubmitForm}>登录</span>
          </div>
        </div>
      </div>
    );
  }
} 