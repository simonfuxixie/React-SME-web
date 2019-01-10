var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
//mongoose config, connection and schema info
var config = require("./config/config.js");
const mongoose = require('mongoose');
const ContactMessage = require('./models/message_model');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/messages', function(req, res){
  console.log(req.body);
  //Set up default mongoose connection
  var mongoDB = `mongodb://${config.mongodb.db_user}:${config.mongodb.db_password}@${config.mongodb.db_server}/${config.mongodb.db_name}`;
  mongoose.connect(mongoDB);
  // Get Mongoose to use the global promise library
  mongoose.Promise = global.Promise;
  //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  const doc = new ContactMessage(req.body);
  doc.save(function(err){
    if(err) {
      return res.send(err);
    }
  });
  res.send("Contact info received, thanks! ");
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});
app.get('/products', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/data_services', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/website_app', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/e_commerce', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/careers', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
