var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  nick_name: String,
  email: String,
  password: String,
  avatar: String 
});
mongoose.connect("mongodb://127.0.0.1/Odin");

module.exports.user = mongoose.model('user',userSchema);



