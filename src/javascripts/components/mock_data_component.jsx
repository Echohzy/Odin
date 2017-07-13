'use strict';

import React, { Component } from 'react';

import MockFormInputComponent from './mock_form_input_component.jsx';

import FormInputComponent from './form_input_component.jsx';

export default class MockDataComponent extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){

  }
  render(){
    return (
      <div className="OD-mock-form-container">
        <div className="OD-form-title">
          <h1>新建文档</h1>
        </div>
        <FormInputComponent
          {this.props.url}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr("url")} />
        <FormInputComponent 
          {this.props.type}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr('type')}/>
        <div className="OD-form-control button-wrap">
          <span className="OD-form-button" onClick={this.onSubmit}>确定</span>
        </div>
      </div>
    );
  }
}