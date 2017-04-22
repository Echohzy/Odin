'use strict';

import React, { Component } from "react";

import { Table } from "antd";

const permissions = {
  "0" : "网站管理员",
  "1" : "栏目管理员",
  "2" : "编辑"
};


export default class UserListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedUser:[]
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
    title: "WorkId",
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
            footer={()=>"Footer"}/>
      </div>
    );
  }
}