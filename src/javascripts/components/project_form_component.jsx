'use strict';

import React, { Component } from 'react';

import FormInputComponent from './form_input_component.jsx';

import { Button, Modal, message, Tooltip} from 'antd';

import formEnhance from './HOCs/form_enhance.jsx';

import AddUsersToProjectComponent from './add_users_to_project_component.jsx';

import "../../stylesheets/project_form.css";

class ProjectFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      add_user_popup_visible: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.props.getUserList();
    if(this.props.params.id){
      this.props.fetchProject(this.props.params.id).then((res)=>{
        const { data } = res;
        if(res.status === "success"){
          this.props.onInputValueChange("title", data.title);
          this.props.onInputValueChange("description", data.description);
        }else{
          message.error('未找到项目！');
        }
      }, (error)=>{
        message.error('未找到项目！');
      })
    }
  }
  onSubmit(){
    let passed = true;
    let data = {};
    ["title", "description"].map((attrName)=>{
      if(this.props.onValidateAttr(attrName)){
        data[attrName] = this.props[attrName].value;
      }else{
        passed = false;
      }
    });
    if(!passed){ return }
    data.members = Object.keys(this.props.selected_users);
    this.props.postProject(data).then(function(res){
      message.success("创建项目成功！",2);
    });
  }
  setAddUserVisible(value){
    this.setState({add_user_popup_visible: value});
  }
  render(){
    const { selected_users } = this.props;
    return (
      <div className="OD-project-form-container">
        <div className="OD-form-title">
          <h1>新建项目</h1>
        </div>
        <FormInputComponent 
          {...this.props.title}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr("title")}/>
        <FormInputComponent
          {...this.props.description}
          onChange={this.props.onInputValueChange}
          onFocus={this.props.onInputStatusChange}
          onBlur={()=>this.props.onValidateAttr("description")}/>
        <div className="OD-form-control">
          <div className="OD-form-input">
            <label>成员</label>
            <div className="OD-user-list">
              {
                Object.keys(selected_users).map((id)=>{
                  return (
                    <Tooltip title={selected_users[id].nick_name} key={id}>
                      <div className="OD-user-card" onClick={()=>this.props.addUserToProject(selected_users[id])}>
                        <img src={selected_users[id].avatar}/>
                        <div className="OD-user-card-layer">
                          <span>删除</span>
                        </div>
                      </div>
                    </Tooltip>
                  );
                })
              }
              <div className="OD-user-card" onClick={()=>this.setAddUserVisible(true)}>
                <i className="fa fa-plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="OD-form-control button-wrap">
          <span className="OD-form-button" onClick={this.onSubmit}>确定</span>
        </div>
        <Modal 
          title="添加成员" 
          visible={this.state.add_user_popup_visible} 
          footer={[
            <Button key="back"  type="primary" size="large" onClick={()=>this.setAddUserVisible(false)}>确定</Button>
          ]}>
          <AddUsersToProjectComponent
            selected_users={this.props.selected_users}
            users={this.props.users}
            addUserToProject={this.props.addUserToProject}/>
        </Modal>
      </div>
    );
  }
}

export default formEnhance(ProjectFormComponent);