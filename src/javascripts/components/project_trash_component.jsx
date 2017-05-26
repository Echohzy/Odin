'use strict';

import React, { Component } from "react";

import { Modal, Table } from 'antd';

export default class ProjectTrashComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      selectedProjects: []
    };
    this.getColumns = this.getColumns.bind(this);
  }
  componentDidMount(){
    this.props.getProjects();
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
  onSelectChange(selectedKeyRows){
    this.setState({selectedProjects: selectedKeyRows});
  }
  render(){
    return (
      <div className="OD-project-trash-container">
        <Table
          rowSelection={{
            onChange: value => this.onSelectChange(value)
          }}
          columns={this.getColumns()}
          dataSource={this.props.projects}/>
        <Modal visible={this.state.visible} onCalcel={()=>this.setModalVisible(false)}>
          <p>确认恢复项目？</p>
        </Modal>
      </div>
    );
  }
}