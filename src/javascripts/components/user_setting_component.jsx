'use strict';

import React, { Component } from 'react';

import formEnhance from './HOCS/form_enhance.jsx';

import ImageCutterComponent from './image_cutter_component.jsx';

import FormInputComponent from "./form_input_component.jsx";

import { Button } from 'antd';

class UserSettingComponent extends Component {
  constructor(props){
    super(props);
  }
  onSubmit(){
    let passed = true;
    let data = {};
    ["email", "nick_name", "work_id"].map((attrName)=>{
      if(this.props.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed) return;
    this.props.settingUser(data);
  }
  render(){
    return (
      <div className="SK-user-setting-container">
        <div className="OD-form-title">
          <h1>账户设置</h1>
        </div>
        <div className="OD-form-content">
          <div className="OD-form-control">
              <div className="OD-form-input">
                <label>头像：</label>
                <ImageCutterComponent />
              </div>
          </div>
          <FormInputComponent
            {...this.props.email}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr('email')}/>
          <FormInputComponent 
            {...this.props.nick_name}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr('nick_name')}/>
          <FormInputComponent 
            {...this.props.work_id}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr('work_id')}/>
          <div className="OD-form-control button-wrap">
            <span className="OD-form-button" onClick={()=>this.onSubmit()}>确定</span>
          </div>
        </div>
      </div>
    );
  }
}

export default formEnhance(UserSettingComponent);