'use strict';
import { connect } from 'react-redux';

import { changeInputValue, changeInputStatus, clearData } from '../actions/form_input_action.jsx';

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
  content: {
    required: true,
    type: "text",
    label: "内容",
    attrName: "content",
    errorHint: "内容不能为空！"
  }
};

let mapStateToProps = function(state, ownProps){
  return {
    title: Object.assign({}, ATTRS.title, state.articleFormReducer.title),
    content: Object.assign({}, ATTRS.content, state.articleFormReducer.content)
  };
};

let mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
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