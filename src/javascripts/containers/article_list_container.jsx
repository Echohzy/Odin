'use strict';

import { connect } from 'react-redux';

import { getArticles, deleteArticles } from '../actions/article_action';

import ArticleListComponent from '../components/article_list_component';

let mapStateToProps = function (state, ownProps){
  return {
    articles: state.articleListReducer
  };
};

let mapDispatchToProps = function(dispatch){
  return {
    getArticles: function(params){
      dispatch(getArticles(params));
    },
    deleteArticles: function(ids){
      dispatch(deleteArticles(ids));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);