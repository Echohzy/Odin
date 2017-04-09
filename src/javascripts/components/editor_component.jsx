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
      md_value: "",
      preview: false
    };
    this.getToolTipsButton = this.getToolTipsButton.bind(this);
  }
  getCursorPosition(){
    return {
      start: this.textArea.selectionStart || 0,
      end: this.textArea.selectionEnd || 0
    };
  }
  getLineStart(){
    let currentPosition = this.getCursorPosition()["start"];
    let lines = this.textArea.value.split("\n");
    let sub = 0;
    for(let i=0, len=lines.length; i<len; i++){
      if(sub + lines[i].length>currentPosition){
        return sub;
      }
      sub += (lines[i].length + 1);
    }
  }
  setCursorPointer(start, end){
    this.textArea.setSelectionRange(start, end||start);
  }
  handleInsertMarkdown(type, left, right, defaultText, single){
    let currentPosition, position, value;
    switch(type){
      case "lineStart":
        currentPosition = this.getLineStart();
        break;
      case "pointer":
        currentPosition = this.getCursorPosition()['start'];
        break;
      default:
        currentPosition = this.getCursorPosition();
    }
    if(type === "wrap"){
      let leftStr = this.textArea.value.slice(0, currentPosition['start']);
      let middleStr = this.textArea.value.slice(currentPosition['start'], currentPosition['end']);
      let rightStr = this.textArea.value.slice(currentPosition['end']);
      value = leftStr + left + (middleStr||defaultText) + right + rightStr;
      this.textArea.value = value;
      if(single){
        this.getCursorPosition(currentPosition["end"]+value.length-this.state.value.length);
      }else{
        this.getCursorPosition(currentPosition["start"]+left.length, currentPosition["end"]+left.length);
      }
    }else{
      let leftStr = this.textArea.value.slice(0, currentPosition);
      let rightStr = this.textArea.value.slice(currentPosition);
      value = leftStr + left + rightStr;
      this.textArea.value = value;
    }
    this.textArea.focus();
    this.onTextAreaChange(value);
  }
  onTextAreaChange(value){
    let md_value = converter.makeHtml(value);
    this.setState({value: value, md_value: md_value});
  }
  getToolTipsButton(params){
    return (
      <Tooltip placement="top" title={params.title}>
        <div className="OD-editor-button" onClick={params.onClick}>
            {params.icon}
        </div>
      </Tooltip>
    );
  }
  togglePreview(){
    this.setState({preview: !this.state.preview});
  }
  render(){
    return (
      <div className="OD-editor-container">
        <div className="OD-editor-toolbar">
          {this.getToolTipsButton({title: "Bold", icon: <i className="fa fa-bold" />, onClick: ()=>{this.handleInsertMarkdown("wrap", "**", "**")}})}
          {this.getToolTipsButton({title: "Strikethrough", icon: <i className="fa fa-strikethrough" />, onClick: ()=>{this.handleInsertMarkdown("wrap","~~", "~~")}})}
          {this.getToolTipsButton({title: "Italic", icon: <i className="fa fa-italic" />, onClick: ()=>{this.handleInsertMarkdown("wrap", "*", "*")}})}
          {this.getToolTipsButton({title: "Header", icon: <i className="fa fa-header" />, onClick: ()=>{this.handleInsertMarkdown("lineStart", "# ")}})}
          {this.getToolTipsButton({title: "Quote", icon: <i className="fa fa-quote-left" />, onClick: ()=>{this.handleInsertMarkdown("lineStart", "> ")}})}
          {this.getToolTipsButton({title: "Horizontal", icon: <i className="fa fa-minus" />, onClick: ()=>{this.handleInsertMarkdown("pointer", "\n\n---\n")}})}
          {this.getToolTipsButton({title: "Picture", icon: <i className="fa fa-picture-o" />, onClick: ()=>{this.handleInsertMarkdown("wrap", "![", "](http://www.sonkwo.com)", "image", true)}})}
          {this.getToolTipsButton({title: "Link", icon: <i className="fa fa-link" />, onClick: ()=>{this.handleInsertMarkdown("wrap", "[","](http://www.sonkwo.com)", "link", true)}})}
          {this.getToolTipsButton({title: "Preview", icon: <i className={this.state.preview?"fa fa-eye-slash":"fa fa-eye"} />, onClick: ()=>this.togglePreview()})}
        </div>
        <div className={this.state.preview ? "content fold": "content"}>
          <textarea ref={(textArea)=>{this.textArea = textArea}} value={this.state.value} onChange={(evt)=>this.onTextAreaChange(evt.target.value)}/>
        </div>
        <div className={this.state.preview ? "preview show":"preview"} dangerouslySetInnerHTML={{__html: this.state.md_value}}/>
      </div>
    );
  }
}