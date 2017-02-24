'use strict';
import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/main_menu.css";

import { Icon } from "antd";

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
          <div className="main-menu-list">
            <div className="main-menu-item">
              <Link>网站管理</Link>
              <Link>基本设置</Link>
              <Link>链接管理</Link>
            </div>
            <div className="main-menu-item">
              <Link>栏目管理</Link>
              <Link>添加栏目</Link>
              <Link>栏目管理</Link>
            </div>
            <div className="main-menu-item">
              <Link>文章管理</Link>
              <Link>添加文章</Link>
              <Link>文章管理</Link>
            </div>
            <div className="main-menu-item">
              <Link>用户管理</Link>
              <Link>添加用户</Link>
              <Link>用户管理</Link>
            </div>
            <div className="main-menu-item">
              <Link>个人安全</Link>
              <Link>个人信息</Link>
              <Link>修改密码</Link>
            </div>
            <div className="main-meun-item">
              <Link>回收站</Link>
              <Link>栏目回收站</Link>
              <Link>文章回收站</Link>
            </div>
          </div>
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