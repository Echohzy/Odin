'use strict';

import React, { Component } from 'react';

import formEnhance from './HOCS/form_enhance.jsx';

import { Button } from 'antd';

export default class UserSettingComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="SK-user-setting-container">
        <div className="OD-form-title">
          <h1>账户设置</h1>
        </div>
      </div>
    );
  }
}