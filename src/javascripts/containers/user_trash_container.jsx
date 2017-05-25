'use strict';

import { connect } from 'react-redux';

import { getDeletedUsers } from '../actions/account_action.jsx';

import UserTrashComponent from '../components/user_trash_component.jsx';

let mapStateToProps = function (state, ownProps){
  return {
    users: state.userTrashReducer.users
  };
};

let mapDispatchToProps = function(dispatch){
  return {
    getDeletedUsers: function(){
      dispatch(getDeletedUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTrashComponent);