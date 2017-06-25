'use strict';

import { connect } from 'react-redux';

import { getProjectList, deleteProjects } from '../actions/project_action.jsx';

import ProjectListComponent from "../components/project_list_component.jsx";

let mapStateToProps = function(state, ownProps){
  return {
    projects: state.projectListReducer.projects
  };
}

let mapDispatchToProps = function(dispatch){
  return {
    getProjectLists: function(params){
      dispatch(getProjectList(params));
    },
    onDeleteProjects: function(params){
      dispatch(deleteProjects(params));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListComponent);