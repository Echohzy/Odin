'use strict';
import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/font-awesome.css";

import "../../stylesheets/main_menu.css";

import { Icon, Menu, Button, Layout } from "antd";

const { Header, Sider, Content, Footer } = Layout;


const SubMenu = Menu.SubMenu;

export default class MainMenuComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false
    };
  }
  toggleFoldMenu(){
    this.setState({collapsed: !this.state.collapsed});
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.current_user.id){
      this.props.router.push("/sign_in");
    }
  }
  render(){
    return (
      <Layout className="OD-main-menu-container">
        <Sider className="OD-main-menu-side" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="main-menu-person-card">
            <div className="person-avatar">
              <img src={this.props.current_user.avatar} />
            </div>
            <div className="person-name">
              <span>{this.props.current_user.nick_name}</span>
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span>Web</span>}>
              <Menu.Item><Link to="/setting/base">Base</Link></Menu.Item>
              <Menu.Item><Link to="/setting/link">{"Link"}</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>Projects</span>}>
              <Menu.Item><Link to="/columns/new">New Project</Link></Menu.Item>
              <Menu.Item><Link to="/columns">Project Management</Link></Menu.Item>
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
        </Sider>
        <Layout>
            <Header className="OD-main-menu-header">
              <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={()=>this.toggleFoldMenu()}/>
            </Header>
            <Content className="OD-main-menu-content">
                {this.props.children}
            </Content>
            <Footer className="OD-main-menu-footer">
              Odin ©2017 Created by Echohzy
            </Footer>
        </Layout>
      </Layout>
    );
  }
};
