'use strict';
const express	=	require('express');
const frontendRouter =	express.Router();
const mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
const NavbarItems =	require('../models/webcontent/navbaritems_model');
const FullscreenIntro =	require('../models/webcontent/fullscreenintro_model');
const isAuthenticated = require('./isauthenticated');


frontendRouter.get('/', (req, res) => {
  const target = req.query.target;
  switch(target){
    case 'navbaritems':
      NavbarItems.find((err, recordes) => {
        if (!err) {
          // filter data
          const data = recordes.map( (obj, index) => {
            const {nav_item_url, nav_item_name, nav_subitem, ...rest} = obj;
            const nav_subitems = nav_subitem.map( (subObj, index) => {
              const {url, name} = subObj;
              return {url, name};
            });
            return {nav_item_url, nav_item_name, nav_subitems};
          });
          // console.log(data);
          res.status(200).send(data);
        } else {
          console.log('Error in retrieving navbaritems list :' + err);
          res.send(err.message);
        }
      });
      break;
      //
    case 'fullscreenintro' :
      FullscreenIntro.find( (err, recordes) => {
        // console.log(recordes);
        if(!err) {
          const data = recordes.map( (obj, index) => {
            const {title, content, ...rest} = obj;
            return {title, content };
          });
          // console.log(data);
          res.status(200).send(data);
        } else {
          console.log('Error in retrieving fullscreenintro :' + err);
          res.send(err.message);
        }
      });
      break;
    default:
      const error = [{
        title: "error",
        content: "no such info, please check your query.",
      }];
      res.send(error);
      break;
  }

});



module.exports = frontendRouter;
