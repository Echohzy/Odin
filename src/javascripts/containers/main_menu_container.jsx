'use strict';

import { connect } from 'react-redux';

import MainMenuComponent from "../components/main_menu_component.jsx";

var mapStateToProps = function(state, ownProps){
  return {
    current_user: state.accountReducer.current_user
  };
};

export default connect(mapStateToProps)(MainMenuComponent);

