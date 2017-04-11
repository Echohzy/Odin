'use strict';
import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/main_menu.css";

import "../../stylesheets/font-awesome.css";

import FooterComponent from './footer_component.jsx';

import { Icon, Menu, Button } from "antd";

const SubMenu = Menu.SubMenu;

export default class MainMenuComponent extends Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.current_user.id){
      this.props.router.push("/sign_in");
    }
  }
  render(){
    return (
      <div className="main-container">
        <div className="main-menu-side">
          <div className="main-menu-person-card">
            <div className="person-avatar">
              <img src={this.props.current_user.avatar} />
            </div>
            <div className="person-name">
              <span>{this.props.current_user.nick_name}</span>
            </div>
          </div>
          <Menu mode="inline" style={{background:"#f3f3f4"}}>
            <SubMenu key="sub1" title={<span>Web</span>}>
              <Menu.Item><Link to="/setting/base">Base</Link></Menu.Item>
              <Menu.Item><Link to="/setting/link">{"Link"}</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>Projects</span>}>
              <Menu.Item><Link to="/columns/new">New Column</Link></Menu.Item>
              <Menu.Item><Link to="/columns">Column Management</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>Articles</span>}>
              <Menu.Item><Link to="/articles/new">New Article</Link></Menu.Item>
              <Menu.Item><Link to="/articles">Article Management</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span>Users</span>}>
              <Menu.Item><Link to="/users/new">New User</Link></Menu.Item>
              <Menu.Item><Link to="/users">Authority Management</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span>Trash</span>}>
              <Menu.Item><Link to="/trash/columns">Columns</Link></Menu.Item>
              <Menu.Item><Link to="/trash/articles">Articles</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="main-menu-container">
          <div className="main-menu-content-title">
            <Icon type="bars" />
            <Icon type="logout" className="right" onClick={this.props.signOut}/>
          </div>
          <div className="main-menu-content">
            {this.props.children}
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
};