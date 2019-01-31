const express	=	require('express');
const mongoose = require('mongoose');
const NavbarItems =	require('../models/webcontent/navbaritems_model');
const dbs = require('../dbconnection/dbconnection.js');

async function deleteSubitem () {
  // connect to mongodb firstly
  await dbs.mongodbConnection();
  await console.log('connection established');
  try {
    // if _id value is invalid(shorter or longer, or ...), it will throw a CastError
    let navbaritem = await NavbarItems.findOne({_id: '5c519dbcda9a7345f0a3020b'}, );
    if(!navbaritem){
      console.log('item not found');

    }else{
      console.log('subnavbaritem: \n', navbaritem);
      await console.log('starting to fetch subdoc.....');
      try {
        let result = await navbaritem.nav_subitem.id('5c51a560da9a7345f0a30212');
        if (!result) {
          console.log('item not found');
        }else {
          await navbaritem.nav_subitem.id('5c51a560da9a7345f0a30212').remove();
          await console.log('subitem removed successfully');
          await navbaritem.save(function(err){
            if(err){
              console.log(err.message);
            }
            console.log('updated item saved successfully');
          });
        }
      } catch(err) {
        if (err.name === 'MongoError') {
          console.log('02 MongoError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
        }else if (err.name === 'CastError') {
          console.log('02 CastError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
        }else{
          console.log('02 Unknown Server Error: \n', [err.name, err.message, err.path, err.model.collection.name]);
        }
      }
    }
  } catch(err) {
    console.log('01 error:\n', [err.name, err.message, err.path, err.model.collection.name]);
  }
}

deleteSubitem();
