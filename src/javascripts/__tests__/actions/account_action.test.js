'use strict';


import mockStore from '../../__mocks__/store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/account_action';
import * as formInputAction from '../../actions/form_input_action';
import nock from 'nock';
import host from '../../../../config/host';

describe('account_action', ()=>{
  afterEach(() => {
    nock.cleanAll();
  });
  let data = {name: "test"};
  it("received data", ()=>{
    expect(actions.receivedData("test_reducer", data)).toEqual({type: actions.RECEIVED_DATA, reducerName: "test_reducer", data:data});
  });

  it("test signIn action", ()=>{
    nock(host)
      .post("/account/0/sign_in",{email: "test@qq.com", password:"123456"})
      .reply(200, {status: "error",message:{password: "用户名或密码错误", user_name:"找不到账户"}})
    const expectedActions = [
      {type: formInputAction.SET_DEFAULT_ERROR, reducerName: "test",attrName:"password", defaultError:"用户名或密码错误"},
      {type: formInputAction.SET_DEFAULT_ERROR, reducerName: "test",attrName:"user_name", defaultError:"找不到账户"}
    ];
    const store = mockStore({});
    return store.dispatch(actions.signIn("test", {email: "test@qq.com", password:"123456"})).then(()=>{expect(store.getActions()).toEqual(expectedActions)});
  });

  it("test signOut action", ()=>{
    nock(host)
      .delete("/account/0/sign_out")
      .reply(200, {status: "success", data:{}})

    const expectedActions = [
      {type: actions.SET_ACCOUNT_INFO, data:{}}
    ];
    const store = mockStore({});
    return store.dispatch(actions.signOut()).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});