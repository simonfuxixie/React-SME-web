var express = require('express');
var router = express.Router();
var app = express();

const mongoose = require('mongoose');
const ContactMessage = require('../model/message_model');

const DB_USER = "westapps",
      DB_PASSWORD = "getMoneyIn2019!",
      DB_SERVER = "ds033317.mlab.com:33317",
      DB_NAME = "mern_shopping";

// mongodb://<dbuser>:<dbpassword>@ds033317.mlab.com:33317/mern_shopping

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/${DB_NAME}`);

app.post('/', (req, res) => {
  const doc = new ContactMessage({ message: req.body.message })
  doc.save();
});

module.exports = router;
