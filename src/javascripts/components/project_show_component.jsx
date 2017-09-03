'use strict';

import React, { Component } from 'react';

import MocksListComponent from './mocks_list_component.jsx';

export default class ProjectShowComponent extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    const { params } = this.props;
    if(params.id){
      this.props.onGetProject(params.id);
      this.props.onGetProjectMocks(params.id);
    }
  }
  componentWillUnmount(){
    this.props.onClearData("projectShowReducer");
  }
  render(){
    const { mocks } = this.props;
    
    return (
      <div className="OD-project-show-container">
        <div className="OD-form-title">
          <h1>项目详情</h1>
        </div>
        <MocksListComponent mocks={mocks}/>
      </div>
    );
  }
}