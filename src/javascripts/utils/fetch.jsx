'use strict';

import host from '../../../config/host.js';

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
  return fetch(host + params.url,httpOptions)
  .then(function(response){
    return response.json();
  }).then(function(res){
    return params.success(res);
  }).catch(function(error){
    return params.error(error);
  });
};