'use strict';

import React, { Component } from "react";

let maxDragY , maxDragX, moveStartX, moveStartY, moving;

export default class ImageCutterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
    maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
    window.onmouseup = (e)=>this.stopDragging(e);
  }
  getPosition(elem){
    let elemX = elem.offsetLeft;
    let elemY = elem.offsetTop;
    while(elem=elem.offsetParent){
      elemX += elem.offsetTop;
      elemY += elem.offsetLeft;
    }
    return {X: elemX, Y: elemY};
  }
  startDragging(e){
    e.preventDefault();
    moveStartX = e.clientX;
    moveStartY = e.clientY;
    moving = true;
  }
  dragging(e){
    if(!moving) return;
   e.stopPropagation();
   window.getSelection().removeAllRanges();
   let type = e.target.id;
   switch(type){
     case "drag":
       this.dragMove(e);
       break;
     default:
       return;
   }
  }
  dragMove(e){
    let changeX = Math.min((e.clientX - moveStartX),maxDragX);
    let changeY = Math.min((e.clientY - moveStartY), maxDragY);
    let state = {
      left: Math.min(Math.max(0, (+this.drag.style.left.slice(0,-2)+changeX)),maxDragX),
      top: Math.min(Math.max(0, (+this.drag.style.top.slice(0,-2)+changeY)), maxDragY),
      right: Math.max(this.drag.offsetWidth, (+this.drag.style.left.slice(0,-2)+this.drag.offsetWidth+changeX)),
      bottom: Math.max(this.drag.offsetHeight, (+this.drag.style.top.slice(0,-2)+this.drag.offsetHeight+changeY))
    }
    this.setView(state,e);
    
  }
  stopDragging(e){
    moving = false;
  }
  setView(position,e){
    this.drag.style.top = position.top+"px";
    this.drag.style.left = position.left + "px";
    this.previewImg.style.left = -position.left + "px";
    this.previewImg.style.top = - position.top+"px";
    let clip = "rect(" + position.top+"px "+position.right+"px "+position.bottom+"px "+position.left +"px)";
    this.previewImg.style.clip = clip;
    this.clipImage.style.clip = clip;
    moveStartX = e.clientX;
    moveStartY = e.clientY;
  }
  render(){
    return (
      <div className="image-cutter-container">
        <div id="cut-area"  className="cut-area"ref={(node)=>{this.cutArea=node}}>
          <img src={this.props.imageUrl} className="base-image"/>
          <img src={this.props.imageUrl} className="clip-image" id="clip-image" ref={(node)=>{this.clipImage=node}}/>
          <div id="drag" ref={(node)=>{this.drag = node;}} onMouseDown={(e)=>this.startDragging(e)} onMouseMove={(e)=>this.dragging(e)}>
            <div id="cut-right-down" className="drag-dot" />
            <div id="cut-down" className="drag-dot" />
            <div id="cut-left-down" className="drag-dot"/>
            <div id="cut-left" className="drag-dot"/>
            <div id="cut-left-up" className="drag-dot" />
            <div id="cut-up" className="drag-dot" />
            <div id="cut-right-up" className="drag-dot"/>
            <div id="cut-right" className="drag-dot"/>
          </div>
        </div>
        <div id="preview-block">
          <img src={this.props.imageUrl} id="preview-img" ref={(node)=>{this.previewImg=node}}/>
        </div>
      </div>
    );
  }
};