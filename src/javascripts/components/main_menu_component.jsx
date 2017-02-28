'use strict';
import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/main_menu.css";

import { Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;

export default class MainMenuComponent extends Component {
  constructor(props){
    super(props);
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
            <SubMenu key="sub1" title={<span>网站管理</span>}>
              <Menu.Item key="1">基本设置</Menu.Item>
              <Menu.Item key="2">链接管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>栏目管理</span>}>
              <Menu.Item key="3">添加栏目</Menu.Item>
              <Menu.Item key="4">栏目管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>文章管理</span>}>
              <Menu.Item>添加文章</Menu.Item>
              <Menu.Item>文章管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span>用户管理</span>}>
              <Menu.Item>添加用户</Menu.Item>
              <Menu.Item>权限管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span>回收站</span>}>
              <Menu.Item>栏目回收站</Menu.Item>
              <Menu.Item>文章回收站</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="main-menu-content">
          <div className="main-menu-content-title">
            <a href="#">
              <Icon type="bars" />
            </a>
            <span className="right"><Icon type="logout" />log out</span>
          </div>
        </div>
      </div>
    );
  }
};