import React, { Component } from "react";

import { Link } from "react-router";

import "../../stylesheets/main_menu.css";

export default class MainMenu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="main-container">
        <div className="main-menu-side">
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
        <div className="main-menu-content">
        </div>
      </div>
    );
  }
};