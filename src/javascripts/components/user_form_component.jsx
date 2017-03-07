'use strict';
import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

export default class UserFormComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="OD-user-form-container">
        <div className="OD-form-title">
          <h1>{this.props.user_id ? "修改账户":"新建账户" }</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent
           {this.props.user_name}
           onChange={this.props.onInputValueChange}
           onFocus={this.props.onInputStatusChange}
           onBlur={()=>this.onValidateAttr("user_name")}/>
        <FormInputComponent 
            {...this.props.password}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("password")}/>
        <div className="OD-form-control">
          <span className="OD-form-button" onClick={this.onSubmitForm}>确定</span>
        </div>
        </div>
      </div>
    );
  }
};