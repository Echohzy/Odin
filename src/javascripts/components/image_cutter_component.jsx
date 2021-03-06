'use strict';

import React, { Component } from "react";

import wrappedFetch from '../utils/fetch.jsx';

let maxDragY , maxDragX, moveStartX, moveStartY, moving;

export default class ImageCutterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl:""
    };
  }
  componentDidUpdate(prevState){
    if(this.state.imageUrl&&this.state.imageUrl!==prevState.imageUrl){
      maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
      maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
      window.onmouseup = (e)=>this.stopDragging(e);
    }
  }
  getPosition(elem){
    let elemX = elem.offsetLeft;
    let elemY = elem.offsetTop;
    while(elem=elem.offsetParent){
      elemX += elem.offsetLeft;
      elemY += elem.offsetTop;
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
     case "cut-up":
       this.upMove(e);
       break; 
     case "cut-down":
      this.downMove(e);
       break;
     case "cut-left":
      this.leftMove(e);
       break;
     case "cut-right":
      this.rightMove(e);
       break;
     case "cut-left-up":
      this.upMove(e);
      this.leftMove(e);
      break;
     case "cut-right-up":
      this.upMove(e);
      this.rightMove(e);
      break;
     case "cut-left-down":
      this.downMove(e);
       this.leftMove(e);
       break;
     case "cut-right-down":
       this.rightMove(e);
       this.downMove(e);
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
  upMove(e){
    let draggingY = e.clientY;
    let cutAreaTop = this.getPosition(this.cutArea).Y;
    let dragY = this.getPosition(this.drag).Y;
    if(draggingY<cutAreaTop) draggingY = cutAreaTop;
    let changeHeight = dragY-draggingY;
    this.drag.style.height = Math.max(this.drag.offsetHeight+changeHeight,0) + "px";
    this.setView({
      top: this.drag.offsetTop - dragY + draggingY,
      left: this.drag.style.left.slice(0,-2),
      bottom: draggingY - cutAreaTop + this.drag.offsetHeight,
      right: +this.drag.style.left.slice(0,-2) + this.drag.offsetWidth
    },e)
    maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
    maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
  }
  leftMove(e){
    let draggingX = e.clientX;
    let cutAreaLeft = this.getPosition(this.cutArea).X;
    let dragX = this.getPosition(this.drag).X;
    if(draggingX<cutAreaLeft) draggingX = cutAreaLeft;
    let changeWidth = dragX - draggingX;
    this.drag.style.width = Math.max(this.drag.offsetWidth + changeWidth, 0) + "px";
    this.setView({
      top: this.drag.style.top.slice(0,-2),
      left: this.drag.offsetLeft - dragX + draggingX,
      bottom: +this.drag.style.top.slice(0,-2) + this.drag.offsetHeight,
      right: this.drag.offsetLeft - dragX + draggingX + this.drag.offsetWidth
    },e);
    maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
    maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
  }
  downMove(e){
    let draggingY = e.clientY;
    let cutAreaBottom = this.getPosition(this.cutArea).Y + this.cutArea.offsetHeight;
    let dragY = this.getPosition(this.drag).Y + this.drag.offsetHeight;
    if(draggingY>cutAreaBottom) draggingY = cutAreaBottom;
    let changeHeight = draggingY - dragY;
    this.drag.style.height = Math.max(this.drag.offsetHeight+changeHeight, 0) + "px";
    this.setView({
      top: this.drag.style.top.slice(0,-2),
      left: this.drag.style.left.slice(0,-2),
      right: +this.drag.style.left.slice(0,-2)+this.drag.offsetWidth,
      bottom: draggingY-cutAreaBottom+this.cutArea.offsetHeight
    },e);
    maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
    maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
  }
  rightMove(e){
    let draggingX = e.clientX;
    let cutAreaRight = this.getPosition(this.cutArea).X + this.cutArea.offsetWidth;
    let dragX = this.getPosition(this.drag).X + this.drag.offsetWidth;
    if(draggingX>cutAreaRight) draggingX = cutAreaRight;
    let changeWidth = draggingX-dragX;
    this.drag.style.width = Math.max(this.drag.offsetWidth+changeWidth, 0) + "px";
    this.setView({
      top: this.drag.style.top.slice(0,-2),
      left: this.drag.style.left.slice(0,-2),
      right: draggingX - cutAreaRight+this.cutArea.offsetWidth,
      bottom: +this.drag.style.top.slice(0,-2)+this.drag.offsetHeight,
    }, e);
    maxDragY = this.cutArea.offsetHeight-this.drag.offsetHeight;
    maxDragX = this.cutArea.offsetWidth-this.drag.offsetWidth;
  }
  setView(position,e){
    this.drag.style.top = position.top+"px";
    this.drag.style.left = position.left + "px";
    let clip = "rect(" + position.top+"px "+position.right+"px "+position.bottom+"px "+position.left +"px)";
    this.clipImage.style.clip = clip;
    moveStartX = e.clientX;
    moveStartY = e.clientY;
  }
  onChangeImage(){
    let data = new FormData();
    data.append('file', this.uploadButton.files[0]);
    fetch("/upload/photos",{
      method: "POST",
      credentials: "include",
      body: data
    }).then(function(res){
      return res.json();
    }).then((response)=>{
      this.setState({imageUrl: response.url});
    })
  }
  onSelectImage(){
    this.uploadButton.click();
  }
  render(){
    let cutterBlock;
    if(this.state.imageUrl){
      cutterBlock = (
        <div className="image-cutter-container">
          <div id="cut-area"  className="cut-area"ref={(node)=>{this.cutArea=node}}>
            <img src={this.state.imageUrl} className="base-image"/>
            <img src={this.state.imageUrl} className="clip-image" id="clip-image" ref={(node)=>{this.clipImage=node}}/>
            <div id="drag" ref={(node)=>{this.drag = node}} onMouseDown={(e)=>this.startDragging(e)} onMouseMove={(e)=>this.dragging(e)}>
              <div id="cut-right-down" className="drag-dot" />
              <div id="cut-down" className="drag-dot"/>
              <div id="cut-left-down" className="drag-dot"/>
              <div id="cut-left" className="drag-dot" />
              <div id="cut-left-up" className="drag-dot" />
              <div id="cut-up" className="drag-dot" />
              <div id="cut-right-up" className="drag-dot"/>
              <div id="cut-right" className="drag-dot" />
            </div>
          </div>  
        </div>
      );
    }else{
      cutterBlock = (
        <div className="image-cutter-container">
          <input type="file" ref={(node)=>{this.uploadButton=node}} style={{display: "none"}} accept="image/*" className="upload-image-button" onChange={()=>this.onChangeImage()}/>
          <div className="upload-block" onClick={()=>this.onSelectImage()}>
            点击上传图片
            <img src={this.state.imageUrl} />
          </div>
        </div>
      );
    }
    return cutterBlock;
  }
};