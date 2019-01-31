const express	=	require('express');
const mongoose = require('mongoose');
const NavbarItems =	require('../models/webcontent/navbaritems_model');
const dbs = require('../dbconnection/dbconnection.js');

async function testSub() {
  // connect to mongodb firstly
  await dbs.mongodbConnection();
  await console.log('connection established');
  try {
    let navbaritem = await NavbarItems.findOne({_id: '5c519dbcda9a7345f0a3020b'}, );
    if(!navbaritem){
      return console.log('navbaritem not found: \n', navbaritem);
    }else{
      console.log('subnavbaritem: \n', navbaritem);
      await console.log('starting to fetch subdoc.....');
      try {
        let result = await navbaritem.nav_subitem.id('5c51a560da9a7345f0a30214');
        if (!result) {
          return console.log('subdoc not found: \n', result);
        }else {
          return console.log('subdoc: \n', result);
        }
      } catch(err) {
        if (err.name === 'MongoError') {
          return console.log('02 MongoError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
        }else if (err.name === 'CastError') {
          return console.log('02 CastError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
        }else{
          return console.log('02 Unknown Server Error: \n', [err.name, err.message, err.path, err.model.collection.name]);
        }
      }
    }
  } catch(err) {
    if (err.name === 'MongoError') {
      return console.log('01 MongoError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
    }else if (err.name === 'CastError') {
      return console.log('01 CastError error:\n', [err.name, err.message, err.path, err.model.collection.name]);
    }else{
      return console.log('01 Unknown Server Error: \n', [err.name, err.message, err.path, err.model.collection.name]);
    }
  }
}

testSub();
