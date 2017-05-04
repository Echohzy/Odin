'use strict';

import React, { Component } from 'react';

function getComponentName(WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}


export default function(WrappedComponent){
  class EnhancedComponent extends Component {
    constructor(props){
      super(props);
      this.onValidateAttr = this.onValidateAttr.bind(this);
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
    render(){
      return (
        <WrappedComponent {...this.props} onValidateAttr={this.onValidateAttr}/>
      );
    }
  };
  EnhancedComponent.displayName = `$getComponentName(WrappedComponent)WithFormEnhance`;

  return EnhancedComponent;
}