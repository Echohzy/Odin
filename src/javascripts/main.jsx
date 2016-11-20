'use strict';
import ReactDOM from "react-dom";
import React from "react";
import 'antd/dist/antd.css';
import { Router, Route, Link, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainMenuComponent from "./components/main_menu_component.jsx";
import SignInContainer from "./containers/sign_in_container.jsx";
import SignInReducer from './reducers/sign_in_reducer.jsx';


var appReducer = combineReducers({
  signInReducer: SignInReducer
});

var store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuComponent} />
      <Route path="/sign_in" component={SignInContainer} />
    </Router>
  </Provider>,
  document.getElementById("Odin-app"));