'use strict';

import React, { Component } from 'react';

import { Table, Modal } from 'antd';

const permissions = {
  "0" : "网站管理员",
  "1" : "栏目管理员",
  "2" : "编辑"
};

export default class UserTrashComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedUsers: [],
      visible: false
    };
    this.getColumns = this.getColumns.bind(this);
  }
  setModalVisible(value){
    this.setState({visible: value});
  }
  onSelectChange(selectedKeyRows){
    this.setState({selectedUsers: selectedKeyRows});
  }
  getColumns(){
    return [{
      key: "nick_name",
      title: "Nick Name",
      dataIndex: "nick_name"
    },{
      key: "email",
      title: "Email",
      dataIndex: "email"
    },{
      key: "permission",
      title: "Permission",
      dataIndex: "permission",
      render: value => <span>{permissions[value]}</span>
    },{
      key: "work_id",
      title: "Work Id",
      dataIndex: "word_id"
    }];
  }
  render(){
    return (
      <div className="OD-user-trash-container">
        <Table
          rowSelection={{
            onChange: (selectedKeyRows)=>this.onSelectChange(selectedKeyRows)
          }}
          columns={this.getColumns()}
          dataSource={this.props.users}/>
        <Modal visible={this.state.visible} title="恢复用户" onCancel={()=>this.setModalVisible(false)}>
          <p>确认恢复用户？</p>
        </Modal>
      </div>
    );
  }
};