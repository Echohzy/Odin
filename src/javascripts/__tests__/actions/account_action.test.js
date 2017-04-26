'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/account_action.jsx';

const mockStore = configureMockStore([thunk]);

describe('async actions', () => {
  it("sum", ()=>{
    expect(1+1).toBe(2);
  })
});