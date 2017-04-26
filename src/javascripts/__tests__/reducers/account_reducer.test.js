'use strict';

import AccountReducer from "../../reducers/account_reducer.jsx";

import { SET_ACCOUNT_INFO } from "../../actions/account_action.jsx";

describe("account_reducer", ()=>{
  it("should return the user", ()=>{
    expect(AccountReducer({},{type:SET_ACCOUNT_INFO, data:{name:"test", email:"test@qq.com"}})).toEqual({
      current_user: {
        name: "te",
        email: "test@qq.com"
      }
    })
  });

  it("show return the default value", ()=>{
    expect(AccountReducer({},{})).toEqual({
      current_user:{}
    });
  });

  it("show return the prev value", ()=>{
    expect(AccountReducer({current_user:{name:"prevName"}},{})).toEqual({
      current_user:{name:"prevName"}
    });
  });

});