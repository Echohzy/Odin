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
    this.getColumns = this.getColumns.bind(this);
  }
  componentDidMount(){
    this.props.getUsers();
  }
  getColumns(){
    return [{
      title: "Nick Name",
      dataIndex: "nick_name",
    },{
      title: "Email",
      dataIndex: "email",
    },{
      title: "Permission",
      dataIndex: "permission",
      render: value => <span>{permissions[value]}</span>
    },{
      title: "Operation",
      dataIndex: "_id",
      render: value => <i className="fa fa-trash" onClick={()=>this.props.onDeleteUser(value)} />
    }];
  }
  onChange(selectedRowKeys, selectedRows){
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
  onSelect(record, selected, selectedRows){
    
  }
  onSelectAll(selected, selectedRows, changeRows){
    
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
              onChange: (selectedRowKeys, selectedRows)=>this.onChange(selectedRowKeys, selectedRows),
              onSelect: (record, selected, selectedRows)=>this.onSelect(record, selected, selectedRows),
              onSelectAll: (selected, selectedRows, changeRows)=>this.onSelectAll(selected, selectedRows, changeRows),
              getCheckboxProps: (record)=>this.getCheckboxProps(record)
            }}
            columns={this.getColumns()} 
            dataSource={this.props.users}/>
      </div>
    );
  }
}