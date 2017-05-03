'use strict';

import UserFormContainer from '../../containers/user_form_container';
import FormInputComponent from "../../components/form_input_component";
import mockStore from '../../__mocks__/store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

describe("<UserFormContainer />", ()=>{
  const store = mockStore({
    userFormReducer:{}
  });
  const wrapper = mount(<Provider store={store}><UserFormContainer /></Provider>);

  it("test UserFormContainer", ()=>{
    expect(wrapper.find(FormInputComponent)).toHaveLength(5);

    expect(wrapper.find(FormInputComponent).get(0).props).toEqual({required: true,
      type: 'text',
      placeholder: "请输入邮箱地址",
      label: "邮箱",
      attrName: "email",
      editHint: "请输入正确的邮箱",
      errorHint: "邮箱错误",
      validate: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i});
  });
});