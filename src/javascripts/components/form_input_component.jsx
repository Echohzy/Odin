'use strict';
import React, { Component } from 'react';

import { Icon, Input, InputGroup } from 'antd';

export default class FormInputComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let inputRemind = "";
    switch(this.props.status){
      case "editing":
        inputRemind = this.props.editHint?(
          <div className="OD-form-input-message info-hint">
            <Icon type="exclamation-circle" />
            <span>{this.props.editHint}</span>
          </div>):"";
        break;
      case "error":
        inputRemind = this.props.errorHint?(
          <div className="OD-form-input-message error-hint">
            <Icon type="close-circle" />
            <span>{this.props.errorHint}</span>
          </div>):"";
        break;
      case "initial_error":
        inputRemind = this.props.defaultError?(
          <div className="OD-form-input-message error-hint">
            <Icon type="close-circle" />
            <span>{this.props.defaultError}</span>
          </div>):"";
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
          onChange={(evt)=>this.props.onChange(this.props.attrName, evt.target.value)}
          onFocus={()=>this.props.onFocus(this.props.attrName, "editing")}
          onBlur={this.props.onBlur}/>
        {inputRemind}
      </div>
    );
  }
};