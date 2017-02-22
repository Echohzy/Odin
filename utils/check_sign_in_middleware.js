"use strict";

module.exports = function(req, res, next){
  if(req.session.account){
    next();
  }else{
    res.redirect("/sign_in");
  }
};