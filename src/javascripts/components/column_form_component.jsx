'use strict';

import React, { Component } from 'react';

import {Button} from 'antd';

import FormInputComponent from './form_input_component.jsx';

export default class ColumnFormComponent extends Component {
  constructor(props){

  }
  render(){
    return (
      <div className="OD-column-form-container">
        <div className="OD-form-title">
          <h1>新建帐号</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent 
            {...this.props.title}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}/>
          <FormInputComponet 
            {...this.props.description}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}/>
        </div>
      </div>
    );
  }
}
