'use strict';

import React , { Component } from 'react';

import "../../stylesheets/editor.css";

import showdown from 'showdown';

import { Button, Icon, Tooltip } from 'antd';

const converter = new showdown.Converter();

export default class EditorComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    };
    this.getToolTipsButton = this.getToolTipsButton.bind(this);
  }
  handleInsertMarkdown(){
    
  }
  onTextAreaChange(value){
    let md_value = converter.makeHtml(value);
    this.setState({value: value, md_value: md_value});
  }
  getToolTipsButton(params){
    console.log(params);
    return (
      <Tooltip placement="top" title={params.title}>
        <Button type="primary" icon={params.icon} onClick={params.onClick} />
      </Tooltip>
    );
  }
  render(){
    return (
      <div className="OD-editor-container">
        <div className="OD-editor-tooltips">
          {this.getToolTipsButton({title: "粗体", icon: "bold", onClick: ()=>this.handleInsertMarkdown()})}
        </div>
        <div className="content">
          <textarea value={this.state.value} onChange={(evt)=>this.onTextAreaChange(evt.target.value)}/>
        </div>
        <div className="preview" dangerouslySetInnerHTML={{__html: this.state.md_value}}/>
      </div>
    );
  }
}