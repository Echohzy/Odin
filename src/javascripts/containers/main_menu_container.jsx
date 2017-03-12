'use strict';

import { connect } from 'react-redux';

import { signOut } from '../actions/account_action.jsx';

import MainMenuComponent from "../components/main_menu_component.jsx";


var mapStateToProps = function(state, ownProps){
  return {
    current_user: state.accountReducer.current_user
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    signOut: function(){
      dispatch(signOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuComponent);

