const express	=	require('express');
const frontendRouter =	express.Router();
const mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
const NavbarItems =	require('../models/webcontent/navbaritems_model');
const FullscreenintroSchema =	require('../models/webcontent/fullscreenintro_model');
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
      // todo, use filter, create fullscreenintro collection on mlab directly
    case 'fullscreenintro' :
      FullscreenintroSchema.find( (err, recordes) => {
        console.log(recordes);
        // if(!err) {
        //   let data = recordes.filter( (obj, index) => {
        //     return {title, content} = obj;
        //   });
        //   console.log(data);
        //   res.status(200).send(data);
        // } else {
        //   console.log('Error in retrieving navbaritems list :' + err);
        //   res.send(err.message);
        // }
      });
      break;
    default:
      break;
  }

});



module.exports = frontendRouter;
