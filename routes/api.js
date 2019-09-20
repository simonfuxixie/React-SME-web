'use strict';
const express = require('express');
const apiRouter = express.Router();
const app = express();
//Import the mongoose module
const mongoose = require('mongoose');

const ContactMessage = require('../models/message_model');

apiRouter.get('/messages', (req,res, next) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

apiRouter.post('/messages', function(req, res, next){
  // console.log(req.body);
  const contactInfo = req.body;
  const doc = new ContactMessage(contactInfo);
  doc.save(function(err){
    if(err) {
      next(err);
    }
  });
  res.send("Contact info received, thanks! ");
});



module.exports = apiRouter;
