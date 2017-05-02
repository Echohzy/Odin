'use strict';
export default function wrappedFetch(params){
  let httpOptions = {
    method: params.method,
    credentials: "include",
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  if(params.body){
    httpOptions['body'] = params.body;
  }
  if(params.query){
    httpOptions['query'] = params.query;
  }
  return fetch("http://127.0.0.1:3000" + params.url,httpOptions)
  .then(function(response){
    return response.json();
  }).then(function(res){
    params.success(res);
  }).catch(function(error){
    params.error(error);
  });
};