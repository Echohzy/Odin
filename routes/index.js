var express = require('express');
var router = express.Router();

/* GET home page. */

router.get(/[^\n]*/, function(req, res, next) {
  res.render('index', { title: 'Odin', current_account: req.session&&req.session.account ? req.session.account : {}});
});

module.exports = router;
