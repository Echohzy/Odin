'use strict';

import {connect} from 'react-redux';

import {changeInputValue, changeInputStatus} from '../actions/form_input_action.jsx';

import { addBase } from '../actions/base_action.jsx';

import BaseFormComponent from '../components/base_form_component.jsx';

let ATTRS = {
  web_name:{
    required: true,
    type: "text",
    placeholder: "请输入网站名称",
    label: "网站名称",
    attrName: "web_name",
    editHint: "请输入网站名称",
    errorHint: "网站名称不能为空"
  },
  web_address: {
    required: true,
    type: "text",
    placeholder: "请输入网址",
    label: "网址",
    attrName: "web_address",
    editHint: "请输入网址",
    errorHint: "网址不能为空"
  },
  web_describtion: {
    type: "text",
    placeholder: "请输入网站描述",
    label: "网站描述",
    editHint: "请输入网站描述",
    attrName: "web_describtion"
  },
  web_keyword: {
    type: "text",
    label: "网站关键词",
    placeholder: "网站关键词",
    editHint: "请输入网站关键词",
    attrName: "web_keyword"
  },
  web_copyright: {
    required: true,
    type: "text",
    placeholder: "请输入版权信息",
    label: "版权信息",
    editHint: "请输入版权信息",
    errorHint: "版权信息不能为空",
    attrName: "web_copyright"
  },
  web_email: {
    type: "text",
    label: "邮箱",
    type: "text",
    placeholder: "请输入管理员邮箱",
    editHint: "请输入管理员邮箱",
    attrName: "web_email"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    web_name: Object.assign({}, ATTRS.web_name, state.baseFormReducer.web_name),
    web_keyword: Object.assign({}, ATTRS.web_keyword, state.baseFormReducer.web_keyword),
    web_copyright: Object.assign({}, ATTRS.web_copyright, state.baseFormReducer.web_copyright),
    web_address: Object.assign({}, ATTRS.web_address, state.baseFormReducer.web_address),
    web_email: Object.assign({}, ATTRS.web_email, state.baseFormReducer.web_email),
    web_describtion: Object.assign({}, ATTRS.web_describtion, state.baseFormReducer.web_describtion)
  };
}

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      },
      onAddBase: function(params){
        dispatch(addBase(params));
      }
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps('baseFormReducer'))(BaseFormComponent);