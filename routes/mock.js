'use strict';

var express = require('express');
var router = express.Router();
var MockModule = require("../modules/mock_module");

/*add Mock data*/
router.post("/", function (req, res, next){
  MockModule.addMock(req.body)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }, function(error){
    res.json({
      status: "success",
      error: error
    });
  });
});


/*return Mock instance data*/
router.get("/instance/:url", function (req, res, next){
  MockModule.getMockData("/"+req.params.url)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }, function(error){
    res.json({
      status: 'error',
      error: error
    });
  });
});

/*get Mock data*/
router.get("/:id", function (req, res, next){
  MockModule.getMock(req.params.id)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }, function(error){
    res.json({
      status: 'error',
      error: error
    });
  });
});

/*update Mock*/
router.put("/:id", function (req, res, next){
  MockModule.updateMock(req.params.id, req.body)
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }, function(error){
    res.json({
      status: 'error',
      error: error
    });
  });
});

/*delete Mock*/
router.delete("/:id", function (req, res, next){
  MockModule.updateMock(req.params.id, {"delete": 1})
  .then(function(data){
    res.json({
      status: 'success',
      data: data
    });
  }, function(error){
    res.json({
      status: 'error',
      error: error
    });
  });
});

module.exports = router;