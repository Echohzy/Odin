'use strict';

var express = require("express");
var router = express.Router();
var accountModule = require("../modules/account_module");

/*sign in api*/

router.get("/:id/sign_in", function(req, res, next){
  accountModule.signIn(req.query)
  .then(function(data){
    req.session.account = data;
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


/*update account*/
router.put("/:id", function(req, res, next){
  accountModule.update(req.params.id, req.body)
  .then(function(data){
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

/*sign out api*/

router.delete("/:id/sign_out",  function(req, res, next){
  req.session.destroy(function(err){
    if(!err){
      res.json({
        status: "success",
        data: {}
      });
    }else{
      res.json({
        status: "error",
      });
    }
  });
});

module.exports = router;