var express = require('express');
var apiRouter = express.Router();
var app = express();
//Import the mongoose module
var mongoose = require('mongoose');

const ContactMessage = require('../models/message_model');

apiRouter.get('/messages', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

apiRouter.post('/messages', function(req, res){
  console.log(req.body);
  const contactInfo = req.body;
  const doc = new ContactMessage(contactInfo);
  doc.save(function(err){
    if(err) {
      return res.send(err);
    }
  });
  res.send("Contact info received, thanks! ");
});



module.exports = apiRouter;
