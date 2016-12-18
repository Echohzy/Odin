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
              <Link>导航一</Link>
            </div>
            <div className="main-menu-item">
              <Link>导航二</Link>
            </div>
            <div className="main-menu-item">
              <Link>导航三</Link>
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