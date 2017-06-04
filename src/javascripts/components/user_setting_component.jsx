'use strict';

import React, { Component } from 'react';

import formEnhance from './HOCS/form_enhance.jsx';

import ImageCutterComponent from './image_cutter_component.jsx';

import FormInputComponent from "./form_input_component.jsx";

import { Button, Modal } from 'antd';

import "../../stylesheets/image_cutter.css";

class UserSettingComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }
  setVisible(value){
    this.setState({visible: value});
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
          <div className="OD-form-control OD-form-avatar-block">
              <div className="OD-form-input">
                <label>头像：</label>
                <div className="OD-avatar-block">
                  <img src={this.props.current_user.avatar} />
                  <div className="OD-avatar-layer" onClick={()=>this.setVisible(true)}>修改头像</div>
                </div>
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
        <Modal visible={this.state.visible} title="修改头像" onCancel={()=>this.setVisible(false)} onOk={()=>this.setVisible(false)}>
          <ImageCutterComponent />
        </Modal>
      </div>
    );
  }
}

export default formEnhance(UserSettingComponent);