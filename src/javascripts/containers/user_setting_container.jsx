'use strict';

import { connect } from 'react-redux';

import UserSettingComponent from "../components/user_setting_component.jsx";

import { settingUser } from "../account_action.jsx";

let mapStateToProps = function(state, action){
  return {
    current_user: state.accountReducer.current_user
  };
};

let mapDispatchToProps = function(dispatch){
  return {
    settingUser: function(params){
      dispatch(settingUser(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingComponent);