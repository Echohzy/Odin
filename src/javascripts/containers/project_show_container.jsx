'use strict';

import React, { Component } from 'react';

import ProjectShowComponent from '../components/project_show_component.jsx';

import { getProjectMocks, getProject, clearData } from  '../actions/project_action.jsx';

import { connect } from 'react-redux';

function mapStateToProps(state, ownProps){
  return {
    project: state.projectShowReducer.project,
    mocks: state.projectShowReducer.mocks
  };
}

function mapDispatchToProps(dispatch, getState){
  return {
    onGetProjectMocks: function(id){
      dispatch(getProjectMocks(id));
    },
    onGetProject: function(id){
      dispatch(getProject(id));
    },
    onClearData: function(reducerName){
      dispatch(clearData(reducerName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowComponent);