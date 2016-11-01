import React, { Component } from "react";

import { Link } from "react-router";

export default class MainMenu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="main-menu-container">
        <div className="menu-side">
          <div className="menu-item">
            <Link>导航一</Link>
          </div>
          <div className="menu-item">
            <Link>导航二</Link>
          </div>
          <div className="menu-item">
            <Link>导航三</Link>
          </div>
        </div>
        <div className="menu-content">
        </div>
      </div>
    );
  }
};