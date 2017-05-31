'use strict';

import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

import FormSelectComponent from './form_select_component.jsx';

import formEnhance from './HOCs/form_enhance.jsx';

class ArticleFormComponent extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.onGetProjectList();
  }
  onSubmit(){
    let passed = true;
    let data = {};

    ["title", "method", "project_id", "params", "response"].map((attrName)=>{
      if(this.props.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed) return;
    
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
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr("title")}/>
          <FormSelectComponent
            {...this.props.method}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr("method")}
            Options={[
              {value:"POST", text:"POST"},
              {value:"GET", text:"GET"},
              {value:"PUT", text:"PUT"},
              {value: "DELETE", text: "DELETE"},
              {value: "PATCH", text: "PATCH"}]} />
          <FormSelectComponent
            {...this.props.project_id}
            onChange={this.props.onInputValueChange}
            onFocus={this.props.onInputStatusChange}
            onBlur={()=>this.props.onValidateAttr("project_id")}
            Options={this.props.projects.map((item)=>{
              return {
                value: item._id,
                text: item.title
              };
            })} />
          <FormInputComponent
             {...this.props.url}
             onChange={this.props.onInputValueChange}
             onFocus={this.props.onInputStatusChange}
             onBlur={()=>this.props.onValidateAttr("url")}/>
          <div className="OD-form-control button-wrap">
            <span className="OD-form-button" onClick={()=>this.onSubmit()}>确定</span>
          </div>  
        </div>
      </div>
    );
  }
}

export default formEnhance(ArticleFormComponent);