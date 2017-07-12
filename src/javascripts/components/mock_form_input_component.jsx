'use strict';

import React, { Component } from 'react';

import { Button, Select, Input } from 'antd';

const Option = Select.Option;

export default class MockFormInputComponent extends Component{
  construct(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return (
      <div className="OD-form-mock-control">
        <div className="OD-form-mock-input">
          <label>name:</label>
          <Input />
          <label>type:</label>
          <Select defaultValue="Object">
            <Option value="Object">{"Object"}</Option>
            <Option value="Boolean">{"Boolean"}</Option>
            <Option value="Number">{"Number"}</Option>
            <Option value="String">{"String"}</Option>
          </Select>
          <label>parent:</label>
          <Select>
          </Select>
          <Button type="primary">Add</Button>
        </div>
      </div>
    );
  }
}