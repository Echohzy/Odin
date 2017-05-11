'use strict';

import wrappedFetch from "../utils/fetch";

const RECEIVED_PROJECT_LIST = "RECEIVED_PROJECT_LIST";

function receivedProjectList(data){
  return {
    type: RECEIVED_PROJECT_LIST,
    data: data
  };
}

function getProjectList(params){
  return (dispatch, getState) => {
    return wrappedFetch({
      url: "/project",
      method: "GET",
      query: params,
      success: function(res){
        if(res.status === "success"){
          dispatch(receivedProjectList(res.data));
        }
      },
      error: function(error){

      }
    });
  }
}

export {
  RECEIVED_PROJECT_LIST,
  getProjectList
};