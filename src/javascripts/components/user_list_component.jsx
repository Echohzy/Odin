'use strict';

import React, { Component } from "react";

import { Table, Modal } from "antd";

const permissions = {
  "0" : "网站管理员",
  "1" : "栏目管理员",
  "2" : "编辑"
};


export default class UserListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedUser:[],
      visible: false
    };
    this.getColumns = this.getColumns.bind(this);
  }
  componentDidMount(){
    this.props.getUsers();
  }
  getColumns(){
    return [{
      key: "nick_name",
      title: "Nick Name",
      dataIndex: "nick_name",
    },{
      key: "email",
      title: "Email",
      dataIndex: "email",
    },{
      key: "permission",
      title: "Permission",
      dataIndex: "permission",
      render: value => <span>{permissions[value]}</span>
  },{
    key: "work_id",
    title: "Work Id",
    dataIndex: "work_id"
  }];
  }
  onSelectChange(selectedRowKeys){
    this.setState({selectedUser: selectedRowKeys});
  }
  getCheckboxProps(record){
    return {
      disabled: record.name === 'Disabled User'
    };
  }
  setModalVisible(value){
    this.setState({visible: value});
  }
  deleteUsers(){
    this.props.deleteUsers(this.state.selectedUser);
    this.setModalVisible(false);
  }
  render(){
    return (
      <div className="OD-user-list-container">
          <Table 
            rowSelection={{
              onChange: (selectedRowKeys)=>this.onSelectChange(selectedRowKeys)
            }}
            columns={this.getColumns()} 
            dataSource={this.props.users.map((item)=>{return Object.assign(item,{key:item._id})})}
            title={()=>"Users"}
            footer={()=><i className="fa fa-trash" onClick={()=>this.setModalVisible(true)}/>}/>
          <Modal title="删除用户" visible={this.state.visible} onOk={()=>this.deleteUsers(this.state.selectedUser)} onCancel={()=>this.setModalVisible(false)}>
            <p>确认删除用户？</p>
          </Modal>
      </div>
    );
  }
}