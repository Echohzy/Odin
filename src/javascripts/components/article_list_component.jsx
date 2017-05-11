'use strict';

import React, { Component } from 'react';

import { Table, Modal } from 'antd';

export default class ArticleListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      selectedArticles:[]
    };
  }
  componentDidMount(){
    this.props.getArticles({});
  }
  setModalVisible(visible){
    this.setState({visible: visible});
  }
  getColumns(){
    return [{
      key: "title"
      title: "Title",
      dataIndex: "title"
    },{
      key: "author",
      title: "Author",
      dataIndex: "author"
    }];
  }
  onSelectChange(selectedRowKeys){
    this.setState({selectedArticle: selectedRowKeys});
  }
  onDeleteArticles(){
    this.props.deleteArticles(this.props.selectedArticles);
    this.setModalVisible(false);
  }
  render(){
    return (
      <div className="OD-article-list-container">
        <Table 
          rowSelection={{
            onChange: (selectedRowKeys)=>this.onSelectChange(selectedRowKeys)
          }}
          columns={this.getColumns()}
          dataSource={this.props.article.map((item)=>{return {title: item.title, id: item._id, author: item.author.nick_name}})}/>
        <Modal title="删除文章" visible={this.state.visible} onOk={()=>this.onDeleteArticles()} onCancel={()=>this.setModalVisible(false)}>
          <p>确认删除文章？</p>
        </Modal>
      </div>
    );
  }
}