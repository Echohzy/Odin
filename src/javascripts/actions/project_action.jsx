'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_PROJECT_LIST = "RECEIVED_PROJECT_LIST";

const RECEIVED_DELETED_PROJECT = "RECEIVED_DELETED_PROJECT";

function receivedProjectList(data){
  return {
    type: RECEIVED_PROJECT_LIST,
    data: data
  };
}

function receivedDeletedProject(data){
  return {
    type: RECEIVED_DELETED_PROJECT,
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

function getDeletedProjects(){
  return (dispatch, getState) => {
    return wrappedFetch({
      url: "/projects/trash",
      method: "GET",
      success: function(res){
        if(res.status === "success"){
          dispatch(receivedDeletedProject(res.data));
        }
      },
      error: function(xhr){
        
      }
    });
  }
}

export {
  RECEIVED_PROJECT_LIST,
  RECEIVED_DELETED_PROJECT,
  getProjectList,
  getDeletedProjects
};