'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/account_action.jsx';

const mockStore = configureMockStore([thunk]);

describe('account_action', ()=>{
  let data = {name: "test"};
  it("received data", ()=>{
    expect(actions.receivedData("test_reducer", data)).toEqual({type: actions.RECEIVED_DATA, reducerName: "test_reducer", data:data});
  });
});