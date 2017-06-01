'use strict';

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = nulter({ dest: 'uploads/' });

router.post("/photos", upload.array('photos', 12), function (req, res, next){

});

module.exports = router;