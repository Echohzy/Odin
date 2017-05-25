'use strict';

import React, { Component } from 'react';

import UserTrashContainer from '../containers/user_trash_container.jsx';

import ProjectTrashContainer from '../containers/project_trash_container.jsx';

import ArticleTrashContainer from '../containers/article_trash_container.jsx';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class TrashComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="用户" key="1">
          <UserTrashContainer />
        </TabPane>
        <TabPane tab="文章" key="2">
          <ArticleTrashContainer />
        </TabPane>
        <TabPane tab="项目" key="3">
          <ProjectTrashContainer />
        </TabPane>
      </Tabs>
    );
  }
}