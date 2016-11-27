'use strict';
import React, { Component } from 'react';

import { Icon, Input, InputGroup } from 'antd';

export default class FormInputComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var inputRemind;
    switch(this.props.status){
      case "editing":
        inputRemind = (
          <div className="OD-form-input-message info-hint">
            <Icon type="exclamation-circle" />
            <span>{this.props.infoHint}</span>
          </div>);
        break;
      case "error":
        inputRemind = (
          <div className="OD-form-input-message error-hint">
            <Icon type="close-circle" />
            <span>{this.props.errorHint}</span>
          </div>);
        break;
      default:
        inputRemind=""; 
    }
    return (
      <div className="OD-form-control">
        <Input
          size={"large"}
          type={this.props.type || "text"}
          defaultValue={this.props.defaultValue}
          value={this.props.value}
          placeholder={this.props.placeholder}
          addonBefore={this.props.label}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}/>
        {inputRemind}
      </div>
    );
  }
};