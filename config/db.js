var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  nick_name: String,
  email: String,
  password: String,
  avatar: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now}
});

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now},
});

var columnSchema = mongoose.Schema({
  title: String,
  depth: Number,
  parent_column_id: String,
  created_at: Date,
  upadted_at: {type: Date, default: Date.now }
});

mongoose.connect("mongodb://127.0.0.1/Odin");

module.exports.user = mongoose.model('user',userSchema);
module.exports.article = mongoose.model('article', articleSchema);
module.exports.column = mongoose.model('column', columnSchema);



