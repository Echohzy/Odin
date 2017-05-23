'use strict';

import React, { Component } from 'react';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class TrashComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="用户" key="1"></TabPane>
        <TabPane tab="文章" key="2"></TabPane>
        <TabPane tab="项目" key="3"></TabPane>
      </Tabs>
    );
  }
}