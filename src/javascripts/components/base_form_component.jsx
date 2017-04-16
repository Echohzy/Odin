import React, { Component } from 'react';

import FormInputComponent from "./form_input_component.jsx";

import "../../stylesheets/parts/form_control.css";

export default class BaseFormComponent extends Component{
  constructor(props){
    super(props);
  }
  onValidateAttr(attrName){
    var attrProps = this.props[attrName];
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
  onSubmit(){
    var passed = true;
    var data = {};
    ["web_name", "web_address", "web_describtion", "web_keyword","web_copyright", "web_email"].map((attrName)=>{
      if(this.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed){return;}
    this.props.onAddBase(data);
  }
  render(){
    return (
      <div className="OD-base-form-container">
        <div className="OD-form-title">
          <h1>网站基本设置</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent 
            {...this.props.web_name}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("web_name")}/>
          <FormInputComponent 
            {...this.props.web_address}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("web_address")}/>
          <FormInputComponent 
            {...this.props.web_keyword}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("web_keyword")}/>
          <FormInputComponent 
            {...this.props.web_describtion}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>{this.onValidateAttr("web_describtion")}}/>
          <FormInputComponent 
            {...this.props.web_copyright}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("web_copyright")}/>
          <FormInputComponent 
            {...this.props.web_email}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("web_email")}/>
        </div>
        <div className="OD-form-control button-wrap">
          <span className="OD-form-button" onClick={()=>this.onSubmit()}>确定</span>
        </div>
      </div>
    );
  }
}