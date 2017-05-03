'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default function(initialState={}){
  return configureMockStore([thunk])(initialState);
}