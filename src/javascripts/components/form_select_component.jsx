'use strict';
import React, { Component } from 'react';

import { Select } from 'antd';

const Option = Select.Option;

export default class FormSelectComponent extends Component {
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
          </div>
        );
        break;
      case "error":
        inputRemind = (
          <div className="OD-form-input-message error-hint">
            <Icon type="close-circle" />
            <span>{this.props.errorHint}</span>
          </div>
        );
        break;
      default:
        inputRemind = "";
    }

    return (
      <div className="OD-form-control">
        <div className="OD-form-input">
          <label>
            {this.props.required ? <span className="star">*</span>:""}
            {this.props.label + ":"}
          </label>
          <Select
            size={this.props.size||"large"}
            value={this.props.value}
            onChange={(value)=>this.props.onChange(this.props.attrName, value)}
            onFocus={()=>this.props.onFocus(this.props.attrName, "edit")}
            onBlur={this.props.onBlur}>
            {
              this.props.Options.map(function(option){
                return (<Option key={option.value} value={option.value}>{option.text}</Option>);
              })
            }
          </Select>
        </div>
        {inputRemind}
      </div>
    );
  }
}