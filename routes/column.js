'use strict';

var express = require("express");
var router = express.Router();
var columnModule = require("../modules/column_module");

/*add column api*/
router.post("/", function (req, res, next){
  columnModule.addColumn(req.body)
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  },function(error){
    res.json({
      status: "error",
      message: error
    });
  });
});

/*update column api*/
router.put("/:id", function (req, res, next){
  columnModule.updateColumn(req.params.id, req.body)
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  },function(error){
    res.json({
      status: "error",
      message: error
    });
  });
});

/*get column api*/
router.get("/:id", function (req, res, next){
  columnModule.getColumn(req.params.id)
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

/*delete column api*/
router.delete("/:id", function (req, res, next){
  columnModule.deleteColumn(req.params.id)
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

module.exports = router;