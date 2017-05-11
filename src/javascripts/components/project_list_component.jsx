'use strict';

import React, { Component } from 'react';

import { Table, Modal } from 'antd';

export default class ProjectListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedProjects: [],
      visible: true
    }
  }
  componentDidMount(){
    this.props.getProjectList();
  }
  setModalVisible(value){
    this.setState({visible: value});
  }
  getColumns(){
    return [{
      key: "title",
      title: "Title",
      dataIndex: "title"
    }];
  }
  onSelectChange(selectedRowKeys){
    this.setState({selectedProjects: selectedRowKeys});
  }
  render(){
    return (
      <div className="OD-project-list-container">
        <Table rowSelection={{onChange: (selectedRowKeys)=>this.onSelectChange(selectedRowKeys)}}
        colums={this.getColumns()}
        dataSource={this.props.projects}/>
        <Modal title="删除项目？" visible={this.state.visible} onOk={()=>this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)}/>
      </div>
    );
  }
}