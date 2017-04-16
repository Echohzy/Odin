'use strict';

import { connect } from 'react-redux';

import { signOut } from '../actions/account_action.jsx';

import { getBase } from '../actions/base_action.jsx';

import MainMenuComponent from "../components/main_menu_component.jsx";


let mapStateToProps = function(state, ownProps){
  return {
    current_user: state.accountReducer.current_user,
    base: state.baseFormReducer.currentBase
  };
};

let mapDispatchToProps = function(dispatch){
  return {
    signOut: function(){
      dispatch(signOut());
    },
    getBase: function(){
      dispatch(getBase());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuComponent);

