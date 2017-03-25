'use strict';

import React, { Component } from 'react';

import { Button } form 'antd';

import FormInputComponent from './form_input_component';

export default class ArticleFormComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="SK-article-form-container">
        <div className="OD-form-title">
          <h1>新建文章</h1>
        </div>
        <div className="OD-form-content">
          <FormInputComponent 
            {...this.props.title}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}/>
        </div>
      </div>
    );
  }
}