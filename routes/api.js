var express = require('express');
var router = express.Router();
var app = express();
//Import the mongoose module
var mongoose = require('mongoose');

const ContactMessage = require('../models/message_model');

// mongodb://<dbuser>:<dbpassword>@ds033317.mlab.com:33317/mern_shopping

app.post('/', function(req, res){
  console.log(req.body);
  //Set up default mongoose connection
  var mongoDB = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/${DB_NAME}`;
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

module.exports = router;
