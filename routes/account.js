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
  console.log("update account");
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

/*delete accounts*/
router.delete("/", function(req, res, next){
  accountModule.updateAccounts(req.body.ids,{"deleted": 1})
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
  })
});

/*get deleted users*/
router.get("/trash", function(req, res, next){
  accountModule.getDeletedAccounts()
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
  accountModule.listAccount(Object.assign(req.query,{deleted: 0}))
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

/*update user info*/
router.put("/", function(req, res, next){
  accountModule.updateAccount(req.session&&req.session.account&&req.session.account.id, req.body)
  .then(function(data){
    var newData = {
      id: data._id,
      avatar: data.avatar,
      nick_name: data.nick_name
    }
    req.session.account = newData;
    res.json({
      status: "success",
      data: newData
    });
  }, function(error){
    res.json({
      status: "error",
      error: error
    });
  })
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