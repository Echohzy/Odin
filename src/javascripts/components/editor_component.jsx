'use strict';

import React , { Component } from 'react';

import showdown from 'showdown';

const converter = new showdown.Converter();

export default class EditorComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    };
    this.insertMarkdownText = this.insertMarkdownText.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }
  insertMarkdownText(code){
    this.onTextAreaChange(this.state.value.concat(code));
  }
  onTextAreaChange(value){
    let md_value = converter.makeHtml(value);
    this.setState({value: value, md_value: md_value});
  }
  render(){
    return (
      <div className="OD-editor-container">
        <div className="OD-editor-tooltips">
          <span onClick={()=>this.insertMarkdownText("#")}>h1</span>
        </div>
        <textarea value={this.state.value} onChange={(evt)=>this.onTextAreaChange(evt.target.value)}/>
        <div className="preview" dangerouslySetInnerHTML={{__html: this.state.md_value}}/>
      </div>
    );
  }
}