'use strict';

import React, { Component } from 'react';

import FormInputComponent from './form_input_component';

import { Button } from 'antd';

import formEnhance from './HOCs/form_enhance.jsx';

class ProjectFormComponent extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    
  }
  render(){
    return (
      <div className="OD-project-form-container">
        <div className="OD-form-title">
          <h1>新建项目</h1>
        </div>
        <FormInputComponent 
          {...this.props.title}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr("title")}/>
        <FormInputComponent
          {...this.props.description}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr("description")}/>
        <div className="OD-form-control button-wrap">
          <span className="OD-form-button" onClick={this.onSubmit}>确定</span>
        </div>
      </div>
    );
  }
}

export default formEnhance(ProjectFormComponent);