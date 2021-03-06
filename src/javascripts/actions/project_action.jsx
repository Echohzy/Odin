'use strict';

import wrappedFetch from '../utils/fetch.jsx';

const RECEIVED_PROJECT_LIST = "RECEIVED_PROJECT_LIST";

const RECEIVED_DELETED_PROJECT = "RECEIVED_DELETED_PROJECT";

const DELETE_PROJECTS = "DELETE_PROJECTS";

const SELECT_PROJECT_USER = "SELECT_PROJECT_USER";

const RECEIVED_PROJECT = "RECEIVED_PROJECT";

const RECEIVED_PROJECT_MOCKS = "RECEIVED_PROJECT_MOCKS";

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

function deleteProjectsSuccess(ids){
  return {
    type: DELETE_PROJECTS,
    ids: ids
  }
}

function selectProjectUser(user){
  return {
    type: SELECT_PROJECT_USER,
    user: user
  };
}

function receivedProject(data){
  return {
    type: RECEIVED_PROJECT,
    data: data
  };
}

function receivedProjectMocks(data){
   return {
     type: RECEIVED_PROJECT_MOCKS,
     data: data
   };
}



function getProjectList(params){
  return (dispatch, getState) => {
    return wrappedFetch({
      url: "/project/list",
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

function getProject(id){
  return (dispatch, getState)=>{
    return wrappedFetch({
      url: "/project/"+id,
      method: "GET",
      success: function(res){
        if(res.status === "success"){
          dispatch(receivedProject(res.data));
        }
        return res;
      },
      error: function(error){
        return error;
      }
    });
  }
}

function getProjectMocks(id){
  return (dispatch, getState)=>{
    return wrappedFetch({
      url: "/mock/list",
      method: "GET",
      data:{_id: id},
      success: function(res){
        if(res.status==='success'){
          dispatch(receivedProjectMocks(res.data));
        }
      },
      error: function(error){
        return error;
      }
    });
  }
  
}

function getDeletedProjects(){
  return (dispatch, getState) => {
    return wrappedFetch({
      url: "/project/trash",
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

function addProject(params){
  return (dispatch, getState)=>{
      return wrappedFetch({
        url: "/project",
        method: "POST",
        body: JSON.stringify(params),
        success: function(res){
          if(res.status === "success"){
            return res;
          }
        },
        error: function(xhr){
          
        }
      });
  }
}

function updateProject(id, data){
  return (dispatch, getState)=>{
    return wrappedFetch({
      url:"/project/"+id,
      method:"put",
      body: JSON.stringify(data),
      success: function(res){
        return res;
      },
      error: function(error){
        return error;
      }
    });
  }
}

function deleteProjects(params){
  return (dispatch, getState)=>{
    return wrappedFetch({
      url: "/project",
      method: "delete",
      body: JSON.stringify(params),
      success: function(res){
        dispatch(deleteProjectsSuccess(params.ids));
      },
      error: function(){
        
      }
    });
  }
}

export {
  RECEIVED_PROJECT_LIST,
  RECEIVED_DELETED_PROJECT,
  DELETE_PROJECTS,
  SELECT_PROJECT_USER,
  RECEIVED_PROJECT,
  RECEIVED_PROJECT_MOCKS,
  getProjectList,
  getDeletedProjects,
  addProject,
  getProject,
  updateProject,
  deleteProjects,
  selectProjectUser,
  getProjectMocks
};