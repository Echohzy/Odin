var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  nick_name: String,
  email: String,
  password: String,
  avatar: String 
});

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now},
});

var 

mongoose.connect("mongodb://127.0.0.1/Odin");

module.exports.user = mongoose.model('user',userSchema);



