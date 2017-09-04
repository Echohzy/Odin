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
    let contentBlcok = "";
    if(data.type === "array"){
      if(Object.prototype.toString.call(data.value) === "[object Array]"){
        contentBlcok = (
          <div className="content">
            <p>{"[{"}</p>
              {
                data&&data.value.map((item, index)=>{
                  return (
                    <span key={index}>{this.getDoc(item)}</span>
                  );
                })
              }
            <p>{"}]"}</p>
          </div>
        );
      }else{
        contentBlcok = (
          <div className="content">
            <p>{"["+Types[data.value]+"]"}</p>
          </div>
        );
      }
      
    }else if(Object.prototype.toString.call(data.value) === "[object Array]"){
      contentBlcok=(
        <div className="content">
          <p>{"{"}</p>
          {
            data.value.map((item)=>{
              return this.getDoc(item)
            })
          }
          <p>{"}"}</p>
        </div>
      );
    }else{
      contentBlcok = (
        <div className="content">
          <p>{Types[data.value]}</p>
        </div>
      );
    }
    
    
    return (
      <div className="api-attr">
        <div className="name">{data.name+" : "}</div>
        {contentBlcok}
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
                <div className="api-result">
                  <p>{"return {"}</p>
                    {
                      mock.mock_setting.map((item)=>{
                        return (this.getDoc(item));
                      })
                    }
                  <p>{"}"}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}