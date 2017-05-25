'use strict';

import { connect } from "react-redux";

import { getDeletedProjects } from '../actions/project_action.jsx';

import ProjectTrashComponent from '../components/project_trash_component.jsx';

let mapStateToProps = function(state, ownProps){
  return {
    projects: state.projectTrashReducer.projects
  };
};

let mapDispatchToProps = function(dispatch){
  return {
    getProjects: function(){
      dispatch(getDeletedProjects());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTrashComponent);