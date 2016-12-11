var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  nick_name: String,
  email: String,
  password: String,
  avatar: String 
});

module.exports.user = mongoose.model("user", userSchema);



