'use strict';

import UserListComponent from '../components/user_list_component.jsx';

import { getUsers, deleteUsers } from '../actions/account_action.jsx';

import { connect } from 'react-redux';

let mapStateToProps = function(state, ownProps){
  return {
    users: state.userListReducer.users
  }
};

let mapDispatchToProps = function(dispatch){
  return {
    getUsers: function(){
      dispatch(getUsers());
    },
    deleteUsers: function(ids){
      dispatch(deleteUsers(ids));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);

