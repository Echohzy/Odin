'use strict';

var express = require("express");
var router = express.Router();
var accountModule = require("../modules/account_module");

/*sign in api*/

router.post("/:id/sign_in", function(req, res, next){
  accountModule.signIn(req.body)
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

/*add account*/
router.post("/", function(req, res, next){
  accountModule.addAccount(req.body)
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


/*update account*/
router.put("/:id", function(req, res, next){
  accountModule.updateAccount(req.params.id, req.body)
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

/*delete account*/
router.delete("/:id", function(req, res, next){
  accountModule.deleteAccount(req.params.id)
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
  })
});

/*get account*/
router.get("/:id", function(req, res, next){
  accountModule.getAccount(req.params.id)
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

/*get account list*/
router.get("/", function(req, res, next){
  accountModule.listAccount(req.query)
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
        message: err
      });
    }
  });
});

module.exports = router;