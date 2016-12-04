'use strict';

import React, { Component } from 'react';

import { Button } from 'antd';

import _ from 'lodash';

import FormInputComponent from "./form_input_component.jsx";

import "../../stylesheets/parts/form_control.css";

import "../../stylesheets/sign_in.css";

export default class SignIn extends Component {
  constructor(props){
    super(props);
  }
  onSubmitForm(){
    var data = {}, passed=true;
    _.each(["login_name", "password"], function(key){

    });

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
            onFocus={this.props.onInputStatusChange}/>
          <FormInputComponent 
            {...this.props.password}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}/>
          <div className="OD-form-control">
            <span className="OD-form-button" onClick={this.props.onSignIn}>登录</span>
          </div>
        </div>
      </div>
    );
  }
} 