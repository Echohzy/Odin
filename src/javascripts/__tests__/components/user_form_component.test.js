'use strict';

import { shallow } from 'enzyme';

import React from 'react';

import UserFormComponent from '../../components/user_form_component.jsx';

import FormInputComponent from '../../components/form_input_component.jsx';

describe('<UserFormContainer />', ()=>{
  it('should render five <FormInputComponent />', () => {
    const wrapper = shallow(<UserFormComponent />);
    expect(wrapper.find(FormInputComponent)).toHaveLength(3);
  });
});