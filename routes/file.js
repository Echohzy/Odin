'use strict';

var express = require('express');
var router = express.Router();
var path  = require('path');

router.get("/:fileName", function(req, res){
  var options = {
    root: path.resolve(__dirname, '../uploads/'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var fileName = req.params.fileName;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

module.exports = router;