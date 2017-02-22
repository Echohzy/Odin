"use strict";

module.exports = function(req, res, next){
  console.log(req);
  if(req.session.account&&req.session.account.id){
    next();
  }else{
    res.redirect("/sign_in");
  }
};