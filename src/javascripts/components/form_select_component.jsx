'use strict';
import React, { Component } from 'react';

import { Select } from 'antd';

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
        <select
          size={this.props.size||"large"}
          defaultValue={this.props.defaultValue}
          value={this.props.value}
          onChange={(evt)=>this.props.onChange(this.props.attrName, evt.target.value)}
          onFocus={()=>this.props.onFocus(this.props.attrName, "edit")}
          onBlur={this.props.onBlur}>
          {this.props.children}
        </select>
      </div>
    );
  }
}