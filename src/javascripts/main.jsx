'use strict';
import ReactDOM from "react-dom";
import React from "react";
import 'antd/dist/antd.css';
import { Router, Route, Link, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainMenuContainer from './containers/main_menu_container.jsx';
import SignInContainer from "./containers/sign_in_container.jsx";
import UserFormContainer from './containers/user_form_container.jsx';
import BaseFormContainer from './containers/base_form_container.jsx';
import UserListContainer from './containers/user_list_container.jsx';
import ArticleFormContainer from './containers/article_form_container.jsx';
import ArticleListContainer from './containers/article_list_container.jsx';
import ProjectListContainer from './containers/project_list_container.jsx';
import UserSettingContainer from './containers/user_setting_container.jsx';
import TrashComponent from './components/trash_component.jsx'
import SignInReducer from './reducers/sign_in_reducer.jsx';
import AccountReducer from './reducers/account_reducer.jsx';
import UserFormReducer from './reducers/user_form_reducer.jsx';
import BaseFormReducer from './reducers/base_form_reducer.jsx';
import UserListReducer from './reducers/user_list_reducer.jsx';
import ProjectFormReducer from './reducers/project_form_reducer.jsx';
import ArticleFormReducer from './reducers/article_form_reducer.jsx';
import ArticleListReducer from './reducers/article_list_reducer.jsx';
import ProjectListReducer from './reducers/project_list_reducer.jsx'
import UserTrashReducer from './reducers/account_trash_reducer.jsx';
import ProjectTrashReducer from './reducers/project_trash_reducer.jsx';
import ArticleTrashReducer from './reducers/article_trash_reducer.jsx';
import UserSettingReducer from './reducers/user_setting_reducer.jsx';

let initialState = {};

if(document.getElementById("OD-account-info")){
  let userInfoNode = document.getElementById("OD-account-info");
  initialState.accountReducer = {
    current_user:{
      id: userInfoNode.getAttribute("data-user-id"),
      nick_name: userInfoNode.getAttribute("data-user-name"),
      avatar: userInfoNode.getAttribute("data-user-avatar")
    }
  };
}
let appReducer = combineReducers({
  signInReducer: SignInReducer,
  userFormReducer: UserFormReducer,
  accountReducer: AccountReducer,
  baseFormReducer: BaseFormReducer,
  userListReducer: UserListReducer,
  projectFormReducer: ProjectFormReducer,
  articleFormReducer: ArticleFormReducer,
  articleListReducer: ArticleListReducer,
  projectListReducer: ProjectListReducer,
  userTrashReducer: UserTrashReducer,
  projectTrashReducer: ProjectTrashReducer,
  articleTrashReducer: ArticleTrashReducer,
  userSettingReducer: UserSettingReducer
});

let store = createStore(
  appReducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/sign_in" component={SignInContainer} />
      <Route path="/" component={MainMenuContainer}>
        <Route path="users/new" component={UserFormContainer} />
        <Route path="users" component={UserListContainer}/>
        <Route path="setting/base" component={BaseFormContainer} />
        <Route path="user/setting" component={UserSettingContainer}/>
        <Route path="trash" component={TrashComponent}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("Odin-app"));