'use strict';

import { connect } from 'react-redux';

import { signOut } from '../actions/account_action';

import MainMenuComponent from "../components/main_menu_component.jsx";

var mapDispatchToProps = function(dispatch){
  return {
    signOut: ()=>{
      dispatch(signOut());
    }
  };
};
var mapStateToProps = function(state, ownProps){
  return {
    current_user: state.accountReducer.current_user
  };
};

export default connect(mapStateToProps)(MainMenuComponent);

