'use strict';

var express = require('express');
var router = express.Router();
var fs = require("fs");


router.post("/photos", function (req, res, next){
  var tmp_path = req.file.path;
  var target_path = 'uploads/' + req.file.originalname;
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { res.json({status: "success", url: target_path}); });
  src.on('error', function(err) { res.json({status: "error"}); });
});

module.exports = router;



