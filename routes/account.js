'use strict';

var express = require("express");
var router = express.Router();
var accountModule = require("../modules/account_module");

/*sign in api*/

router.post("/:id/sign_in", function(req, res, next){
  accountModule.signIn(req.body)
  .then(function(data){
    res.session.account = account;
    res.json({
      status: "success",
      data: data
    });
  }, function(error){
    res.json({
      status: "error",
      message: error
    });
  });
});

module.exports = router;