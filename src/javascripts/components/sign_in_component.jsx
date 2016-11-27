'use strict';

import React, { Component } from 'react';

import { Button } from 'antd';

import FormInputComponent from "./form_input_component.jsx";

import "../../stylesheets/parts/form_control.css";

import "../../stylesheets/sign_in.css";

export default class SignIn extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="OD-sign-in-container">
        <div className="OD-form-title">
          <h1>登录</h1>
        </div>
        <div className="OD-sign-in-content">
          <FormInputComponent {...this.props.email}/>
          <FormInputComponent {...this.props.password}/>
          <div className="OD-form-control">
            <span className="OD-form-button ">登录</span>
          </div>
        </div>
      </div>
    );
  }
} 