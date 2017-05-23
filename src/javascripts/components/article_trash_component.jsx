'use strict';

import React, { Component } from 'react';

import { Table, Modal } from 'antd';

export default class ArticleTrashComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedArticles: [],
      visible: false
    };
    this.getColumns = this.getColumns.bind(this);
  }
  setModalVisible(value){
    this.setState({visible: value});
  }
  onSelectChange(selectedKeyRows){
    this.setState({selectedArticles: selectedKeyRows});
  }
  getColumns(){
    return [{
      key: "title",
      title: "Title",
      dataIndex: "title"
    }];
  }
  render(){
    return (
      <div className="Odin-article-trash-container">
        <Table 
          rowSelection={onChange: (selectedKeyRows)=>this.onSelectChange(selectedKeyRows)}
          columns={this.getColumns()}
          dataSource={this.props.article}/>
        <Modal title="恢复文章" visible={this.state.visible} onOk={()=>this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)}>
          确定恢复文章？
        </Modal>
      </div>
    );
  }
}