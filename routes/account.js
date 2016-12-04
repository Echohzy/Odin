'use strict';

var express = require("express");
var router = express.Router();
var accountModule = require("../modules/account_module");

/*sign in api*/

router.post("/:id", function(req, res, next){
  accountModule.signIn(req.body)
  .then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
});

module.exports = router;