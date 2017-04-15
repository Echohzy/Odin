'use strict';
import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

import FormSelectComponent from './form_select_component.jsx';

export default class UserFormComponent extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValidateAttr = this.onValidateAttr.bind(this);
    this.onPasswordConfirm = this.onPasswordConfirm.bind(this);
  }
  onValidateAttr(attrName){
    let attrProps = this.props[attrName];
    if(attrProps.required&&!attrProps.value){
      this.props.onInputStatusChange(attrName, "error");
      return false;
    }
    if(attrProps.value && Object.prototype.toString.call(attrProps.validate)=="[object RegExp]"){
      if(!attrProps.validate.test(attrProps.value)){
        this.props.onInputStatusChange(attrName, "error");
        return false;
      }
    }
    if(attrProps.value && Object.prototype.toString.call(attrProps.validate)=="[object Function]"){
      if(!attrProps.validate(attrProps.value)){
        this.props.onInputStatusChange(attrName, "error");
        return false;
      }
    }
    this.props.onInputStatusChange(attrName, "");
    return true;
  }
  onPasswordConfirm(){
    if(this.props.password.value !== this.props.password_confirmation.value){
      this.props.onInputStatusChange("password_confirmation", "error");
    }else{
      this.onValidateAttr("password_confirmation");
    }
  }
  onSubmit(){
    let passed = true;
    let data = {};
    ["email", "password", "nick_name", "work_id","permission"].map((attrName)=>{
      if(this.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed){return;}
    this.props.onAddAccount(data);
  }
  render(){
    return (
      <div className="OD-user-form-container">
        <div className="OD-form-title">
          <h1>{this.props.user_id ? "修改账户":"新建账户" }</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent
           {...this.props.email}
           onChange={this.props.onInputValueChange}
           onFocus={this.props.onInputStatusChange}
           onBlur={()=>this.onValidateAttr("email")} />
          <FormInputComponent 
            {...this.props.password}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("password")} />
          <FormInputComponent 
            {...this.props.password_confirmation}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={this.onPasswordConfirm}/>
          <FormInputComponent 
            {...this.props.nick_name}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("nick_name")} />
          <FormInputComponent
            {...this.props.work_id}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("work_id")} />
          <FormSelectComponent
            {...this.props.permission}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("permission")}
            Options={[
              {value:"0", text:"网站管理员"},
              {value:"1", text:"栏目管理员"},
              {value:"2", text:"编辑"}]} />
          <div className="OD-form-control">
            <span className="OD-form-button" onClick={this.onSubmit}>确定</span>
          </div>
        </div>
      </div>
    );
  }
};