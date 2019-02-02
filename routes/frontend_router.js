var express	=	require('express');
var frontendRouter =	express.Router();
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var NavbarItems =	require('../models/webcontent/navbaritems_model');
const isAuthenticated = require('./isauthenticated');


frontendRouter.get('/', (req, res) => {
  let target = req.query.target;
  switch(target){
    case 'navbaritems':
      NavbarItems.find((err, recordes) => {
        if (!err) {
          res.status(200).send(recordes);
        } else {
          console.log('Error in retrieving navbaritems list :' + err);
          res.send(err.message);
        }
      });
      break;
    case 'fullscreenintro' :
      break;
    default:
      break;
  }

});



module.exports = frontendRouter;
