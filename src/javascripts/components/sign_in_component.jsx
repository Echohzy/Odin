'use strict';

import React, { Component } from 'react';

import { Button } form 'antd';

import FormInputComponent from "./form_input_component";

export default class SignIn extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="OD-sign-in-container">
        <div className="OD-sign-in-content">
          <FormInputComponent {...this.props.email}/>
          <FormInputComponent {...this.props.password}/>
          <div className="OD-form-control">
            <Button type="primary" size="large">登录</Button>
          </div>
        </div>
      </div>
    );
  }
} 