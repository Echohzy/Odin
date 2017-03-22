var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  nick_name: String,
  email: String,
  password: String,
  avatar: String,
  permission: Number,
  deleted: {type: Number, default: 0},
  work_id: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now}
});

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  column_id: String,
  deleted: {type: Number, default: 0},
  created_at: Date,
  updated_at: {type: Date, default: Date.now},
});

var columnSchema = mongoose.Schema({
  title: String,
  description: String,
  depth: Number,
  parent_column_id: String,
  deleted: {type: Number, default: 0},
  created_at: Date,
  upadted_at: {type: Date, default: Date.now }
});

var baseSchema = mongoose.Schema({
  title: String,
  name: Number
});

mongoose.connect("mongodb://127.0.0.1/Odin");

module.exports.user = mongoose.model('user',userSchema);
module.exports.article = mongoose.model('article', articleSchema);
module.exports.column = mongoose.model('column', columnSchema);
module.exports.base = mongoose.model('base', baseSchema);



