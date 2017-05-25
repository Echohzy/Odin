'use strict';

import { connect } from 'react-redux';

import ArticleTrashComponent from '../components/article_trash_component.jsx';

import { getDeletedArticles } from '../actions/article_action.jsx';

let mapStateToProps = function(state, action){
  return {
    articles: state.articleTrashReducer.articles
  }
};

let mapDispatchToProps = function(dispatch){
  return {
    getArticles: function(){
      dispatch(getDeletedArticles());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTrashComponent);