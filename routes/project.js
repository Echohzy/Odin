'use strict';

var express = require("express");
var router = express.Router();
var ProjectModule = require("../modules/project_module");

/*add Project api*/
router.post("/", function (req, res, next){
  ProjectModule.addProject(req.body)
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

/*update Project api*/
router.put("/:id", function (req, res, next){
  ProjectModule.updateProject(req.params.id, req.body)
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

router.get("/list", function (req, res, next){
  ProjectModule.listProject(req.query)
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

/*get trash project*/
router.get("/trash", function (req, res, next){
  ProjectModule.getDeletedProjects()
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

/*get Project api*/
router.get("/:id", function (req, res, next){
  ProjectModule.getProject(req.params.id)
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

/*delete Project api*/
router.delete("/:id", function (req, res, next){
  ProjectModule.deleteProject(req.params.id)
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

router.delete("/", function (req, res, next){
  ProjectModule.updateProjects(req.body.ids, {deleted: 1})
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