'use strict';

import React, { Component } from 'react';

const Types = {
  "random.number": "Number",
  "name.findName": "Name",
  "random.boolean": "Boolean",
};

export default class MocksListComponent extends Component {
  constructor(props){
    super(props);
    this.getDoc = this.getDoc.bind(this);
  }
  getDoc(data){
    console.log(new Date());
    return (
      <div className="api-content">
        <p>{"{"}</p>
          {
            data&&data.map((item, index)=>{
              return (
                <div className="api-attr" key={index}>
                  <div className="name">
                    {item.name + " : "}
                  </div>
                  <div className="content">
                    {
                      typeof item.value==="string"?
                      Types[item.value]:this.getDoc(item.value)
                    }
                  </div>
                </div>
              );
            })
          }
        <p>{"}"}</p>
      </div>
    );
  }
  render(){
    const { mocks } = this.props;
    return (
      <div className="OD-mocks-list-container">
        {
          mocks&&mocks.map((mock)=>{
            return (
              <div className="mock-block" key={mock._id}>
                <div className="api-url">
                  <span>{mock.method&&mock.method.toLocaleUpperCase()}</span>
                  <span>{" "+mock.url}</span>
                </div>
                {this.getDoc(mock.mock_setting)}
              </div>
            );
          })
        }
      </div>
    );
  }
}