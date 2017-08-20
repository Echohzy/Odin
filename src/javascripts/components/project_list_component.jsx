'use strict';

import React, { Component } from 'react';

import { Table, Modal } from 'antd';

import { Link } from 'react-router';

export default class ProjectListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedProjects: [],
      visible: false
    }
  }
  componentDidMount(){
    this.props.getProjectLists();
  }
  setModalVisible(value){
    this.setState({visible: value});
  }
  getColumns(){
    return [{
      key: "title",
      title: "Title",
      dataIndex: "title"
    },{
      key: "description",
      title: "Description",
      dataIndex: "description"
    },{
      key: "Action",
      key: "action",
      render: (text, project)=>{
        return (
          <span>
            <span onClick={()=>this.props.onDeleteProjects({ids: [project._id]})}>Delete</span>
            <span>{"|"}</span>
            <Link to={{pathname:"/projects/"+project._id+"/edit"}}>Edit</Link>
          </span>
        );
      }
    }];
  }
  onDeleteProjects(){
    if(this.state.selectedProjects&&this.state.selectedProjects.length>0){
      this.props.onDeleteProjects({ids: this.state.selectedProjects});
    }
  }
  onSelectChange(selectedRowKeys){
    this.setState({selectedProjects: selectedRowKeys});
  }
  render(){
    return (
      <div className="OD-project-list-container">
        <Table rowSelection={{onChange: (selectedRowKeys)=>this.onSelectChange(selectedRowKeys)}}
        columns={this.getColumns()}
        dataSource={this.props.projects.map((project)=>{return Object.assign({},project, {key: project._id})})}
        footer={()=>{return <i className="fa fa-trash" onClick={()=>this.onDeleteProjects()}/>}}/>
      </div>
    );
  }
}