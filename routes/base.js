'use strict';

var express = require("express");
var router = express.Router();
var baseModule = require("../modules/base_module");

/*add base*/
router.post("/", function (req,res, next){
  baseModule.addBase(req.body)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }).catch(function(error){
    res.json({
      status: 'error',
      message: error
    });
  });
});

/*get base*/
router.get("/(:id)", function (req, res, next){
  baseModule.getBase(req.params.id)
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  }).catch(function(error){
    res.json({
      status: 'error',
      message: error
    });
  });
});

/*update base*/
router.put("/:id", function (req, res, next){
  baseModule.updateBase(req.params.id, req.body)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }).catch(function(error){
    res.json({
      status: 'error',
      message: error
    });
  });
});

router.delete("/:id", function (req, res, next){
  baseModule.deleteBase(req.params.id)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }).catch(function(error){
    res.json({
      status: 'error',
      message: error
    });
  });
});

router.delete("/", function (req, res, next){
  baseModule.updateBases(req.body.ids, {deleted: 0})
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  }).catch(function(error){
    res.json({
      status: "error",
      message: error
    });
  });
});

module.exports = router;