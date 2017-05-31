'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus, clearData } from '../actions/form_input_action.jsx';

import { getProjectList } from '../actions/project_action.jsx';

import ArticleFormContainer from '../components/article_form_component.jsx';

let ATTRS = {
  title: {
    required: true,
    type: "text",
    placeholder: "请输入标题",
    label: "标题",
    attrName: "title",
    editHint: "请输入标题",
    errorHint: "标题不能为空！"
  },
  url: {
    required: true,
    type: "text",
    placeholder: "请输入url",
    label: "url",
    attrName: "url",
    editHint: "请输入url",
    errorHint: "不正确的url！",
    validate: /^\/.*/
  },
  params: {
    attrName: "params",
    label: "params",
    editHint: "请设置正确的params",
  },
  response: {
    required: true,
    attrName: "response",
    label: "response",
    editHint: "请设置正确的返回值",
    errorHint: "返回值不正确！"
  },
  method: {
    required: true,
    attrName: "method",
    label: "method",
    editHint: "请选择method",
    errorHint: "请选择method"
  },
  project_id: {
    required: true,
    attrName: "project_id",
    label: "project",
    editHint: "请选择project",
    errorHint: "请选择project"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    title: Object.assign({}, ATTRS.title, state.articleFormReducer.title),
    url: Object.assign({}, ATTRS.url, state.articleFormReducer.url),
    params: Object.assign({}, ATTRS.params, state.articleFormReducer.params),
    response: Object.assign({}, ATTRS.response, state.articleFormReducer.response),
    method: Object.assign({}, ATTRS.method, state.articleFormReducer.method),
    project_id: Object.assign({}, ATTRS.project_id, state.articleFormReducer.project_id),
    projects: state.articleFormReducer.projects
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onGetProjectList: function(params){
        sdispatch(getProjectList(params));    
      },
      onInputValueChange: function(attrName, value){
        dispatch(changeInputValue(reducerName, attrName, value));
      },
      onInputStatusChange: function(attrName, status){
        dispatch(changeInputStatus(reducerName, attrName, status));
      },
      onClearData: function(){
        dispatch(clearData("articleFormReducer"));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("articleFormReducer"))(ArticleFormContainer);