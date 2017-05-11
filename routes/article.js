'use strict';

var express = require("express");
var router = express.Router();
var articleModule = require("../modules/article_module");

/*add article api*/
router.post("/", function (req, res, next){
  articleModule.addArticle(req.body)
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  }).catch(function(error){
    res,json({
      status: "error",
      message: error
    })
  });
});

/*update article api*/
router.put("/:id", function (req, res, next){
  articleModule.updateColumn(req.params.id, req.body)
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

/*get article api*/
router.get("/:id", function (req, res, next){
  articleModule.getArticle(req.params.id)
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
  })
});

/*list article api*/
router.get("/", function (req, res, next){
  articleModule.listArticle(req.params.id, req.query)
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
  })
});

/*delete article api*/
router.delete("/:id", function (req, res, next){
  articleModule.deleteArticle(req.params)
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

router.delete("/", function (req, res, next){
  articleModule.updateArticles(req.body.ids, {deleted: 0})
  .then(function(data){
    res.json({
      status: "success",
      data: data
    });
  }).catch(function(error){
    res.json({
      status: error,
      message: error
    });
  });
});

module.exports = router;