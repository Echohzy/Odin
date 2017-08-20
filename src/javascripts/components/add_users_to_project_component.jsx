'use strict';

import React, { Component } from 'react';

import { Tooltip, Icon } from 'antd';

import "../../stylesheets/add_users_to_project.css";

export default class AddUsersToProjectComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { users, selected_users } = this.props;
    return (
      <ul className="OD-add-users-list">
        {
          users&&users.map((user)=>{
            return (
              <Tooltip title={user.nick_name} key={user.id}>
                <li className={selected_users[user.id]?"user-block selected":"user-block"} onClick={()=>this.props.addUserToProject(user)}>
                  <img src={user.avatar} />
                  <div className="user-block-layer">
                    <span>{selected_users[user.id]?<Icon type="check" />:"选择"}</span>
                  </div>
                </li>
              </Tooltip>
            );
          })
        }
      </ul>
    );
  }
}