'use strict';

import React, { Component } from 'react';

import MockFormInputComponent from './mock_form_input_component.jsx';

export default class MockDataComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="OD-mock-form-container">
      </div>
    );
  }
}