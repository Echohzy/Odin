'use strict';

import React, { Component } from "react";

import ReactDOM from "react-dom";

import { Button } from "antd";

export default class App extends Component {
  render(){
    return (
      <div>
        <Button type={"primary"} size={"large"}>Hello</Button>
      </div>
    );
  }
}