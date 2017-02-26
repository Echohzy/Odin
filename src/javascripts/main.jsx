'use strict';
import ReactDOM from "react-dom";
import React from "react";
import 'antd/dist/antd.css';
import { Router, Route, Link, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainMenuContainer from "./containers/main_menu_container.jsx";
import SignInContainer from "./containers/sign_in_container.jsx";
import SignInReducer from './reducers/sign_in_reducer.jsx';
import AccountReducer from './reducers/account_reducer.jsx';

var initialState = {};

if(document.getElementById("OD-account-info")){
  var userInfoNode = document.getElementById("OD-account-info");
  initialState.accountReducer = {
    current_user:{
      _id: userInfoNode.getAttribute("data-user-id"),
      nick_name: userInfoNode.getAttribute("data-user-name"),
      avatar: userInfoNode.getAttribute("data-user-avatar")
    }
  };
}
var appReducer = combineReducers({
  signInReducer: SignInReducer,
  accountReducer: AccountReducer
});

var store = createStore(
  appReducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuContainer} />
      <Route path="/sign_in" component={SignInContainer} />
    </Router>
  </Provider>,
  document.getElementById("Odin-app"));