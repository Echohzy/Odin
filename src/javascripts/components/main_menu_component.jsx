'use strict';
import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/main_menu.css";

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
            <SubMenu key="sub1" title={<span>网站管理</span>}>
              <Menu.Item><Link to="/setting/base">基本设置</Link></Menu.Item>
              <Menu.Item><Link to="/setting/link">链接管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>栏目管理</span>}>
              <Menu.Item><Link to="/columns/new">添加栏目</Link></Menu.Item>
              <Menu.Item><Link to="/columns">栏目管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>文章管理</span>}>
              <Menu.Item><Link to="/articles/new">添加文章</Link></Menu.Item>
              <Menu.Item><Link to="/articles">文章管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span>用户管理</span>}>
              <Menu.Item><Link to="/users/new">添加用户</Link></Menu.Item>
              <Menu.Item><Link to="/users">权限管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span>回收站</span>}>
              <Menu.Item><Link to="/trash/columns">栏目回收站</Link></Menu.Item>
              <Menu.Item><Link to="/trash/articles">文章回收站</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="main-menu-content">
          <div className="main-menu-content-title">
            <Icon type="bars" />
            <Icon type="logout" className="right" onClick={this.props.signOut}/>
          </div>
        </div>
      </div>
    );
  }
};