'use strict';

import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

import { Button } from 'antd';

import formEnhance from './HOCs/form_enhance.jsx';

import "../../stylesheets/project_form.css";

import { message } from 'antd';

class ProjectFormComponent extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.props.getUserList();
  }
  onSubmit(){
    let passed = true;
    let data = {};
    ["title", "description"].map((attrName)=>{
      if(this.props.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed){ return }
    this.props.postProject(data).then(function(res){
      message.success("创建项目成功！",2);
    });
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
        <div className="OD-form-control">
          <div className="OD-form-input">
            <label>成员</label>
            <div className="OD-user-list">
              <div className="OD-user-card">
                <i className="fa fa-plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="OD-form-control button-wrap">
          <span className="OD-form-button" onClick={this.onSubmit}>确定</span>
        </div>
      </div>
    );
  }
}

export default formEnhance(ProjectFormComponent);