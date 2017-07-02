'use strict';

import React, { Component } from 'react';

export default class AddUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.users
    };
  }
  render(){
    return (
      <div className="OD-add-users-container">
        {
          this.state.users.map((item)=>{
            return (
              <div className="OD-user-card">
                <img src={item.avatar} />
                <div className="nick-name">{item.nick_name}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}