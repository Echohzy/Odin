'use strict';

import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/account_action.jsx';

const mockStore = configureMockStore([thunk]);

describe('account_action', ()=>{
  afterEach(() => {
    nock.cleanAll();
  });
  let data = {name: "test"};
  it("received data", ()=>{
    expect(actions.receivedData("test_reducer", data)).toEqual({type: actions.RECEIVED_DATA, reducerName: "tes_reducer", data:data});
  });

  it("test async action", ()=>{
    nock('http://127.0.0.1:3000')
      .post("/account/0/sign_in",{email: "test@qq.com", password:"12345678"})
      .reply(200, {status: "success", data:{emial: "test@qq.com"}});
    const expectedActions = [
      {type: actions.SET_ACCOUNT_INFO, data:{emial: "test@qq.com"}}
    ];

    const store = mockStore({});

    return store.dispatch(actions.SignIn()).then(()=>{expect(store.getActions()).toEqual(expectedActions)});
  });
});