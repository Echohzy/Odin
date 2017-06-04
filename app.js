var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var multer = require('multer');
var uploader = multer({ dest: 'uploads/' });
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack/webpack.config");
var compiler = webpack(webpackConfig);
var db = require("./config/db");
var page = require('./routes/page');
var users = require('./routes/users');
var account = require('./routes/account');
var project = require('./routes/project');
var article = require('./routes/article');
var base = require('./routes/base');
var signIn = require('./routes/sign_in');
var upload = require('./routes/upload');
var checkSignInMiddleware = require("./utils/check_sign_in_middleware");
var app = express();
require('es6-promise').polyfill();
require('isomorphic-fetch');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src')));

app.use(webpackDevMiddleware(compiler,{
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({url: "mongodb://127.0.0.1/Odin"})
}));
app.use('/account', account);
app.use('/article', article);
app.use('/project', project);
app.use('/base', base);
app.use('/upload', uploader.single('file'), upload);
app.use('/sign_in', signIn);
app.use(checkSignInMiddleware);
app.use('/', page);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
