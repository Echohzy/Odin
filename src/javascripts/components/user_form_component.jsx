'use strict';
import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

import FormSelectComponent from './form_select_component.jsx';

export default class UserFormComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="OD-user-form-container">
        <div className="OD-form-title">
          <h1>{this.props.user_id ? "修改账户":"新建账户" }</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent
           {this.props.email}
           onChange={this.props.onInputValueChange}
           onFocus={this.props.onInputStatusChange}
           onBlur={()=>this.onValidateAttr("email")}/>
          <FormInputComponent 
              {...this.props.password}
              onChange={this.props.onInputValueChange}
              onFocus={this.props.onInputStatusChange}
              onBlur={()=>this.onValidateAttr("password")}/>
          <FormInputComponent 
            {...this.props.nick_name}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("nick_name")}/>
          <FormInputComponent
            {...this.props.work_id}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("work_id")}/>
          <FormSelectComponent
            {...this.props.permission}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.onValidateAttr("permission")}>
            <Option value=0>网站管理员</Option>
            <Option value=1>栏目管理员</Option>
            <Option value=2>编辑</Option>
          </FormSelectComponent>
          <div className="OD-form-control">
            <span className="OD-form-button" onClick={this.onSubmitForm}>确定</span>
          </div>
        </div>
      </div>
    );
  }
};