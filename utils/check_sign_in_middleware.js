"use strict";

module.exports = function(req, res, next){
  if(req.session.account&&req.session.account._id){
    next();
  }else{
    res.redirect("/sign_in");
  }
};