const express	=	require('express');
const mongoose = require('mongoose');
const FullscreenIntro =	require('../models/webcontent/fullscreenintro_model');
const dbs = require('../dbconnection/dbconnection.js');

async function testInsert() {
  // connect to mongodb firstly
  await dbs.mongodbConnection();
  await console.log('connection established');
  try {
    insertRecord();
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


function insertRecord() {
    const fullscreenInfo = {
      title: "FULL SCREEN INTRO",
      content: "Click any text to edit or style it. Select text to insert a link. Click blue 'Gear' icon in the top right corner to hide/show buttons, text, title and change the block background. Click red '+' in the bottom right corner to add a new block. Use the top left menu to create new pages, sites and add themes."
    };
    const fullscreenintro = new FullscreenIntro(fullscreenInfo);
    fullscreenintro.save((err, doc) => {
        if (!err) {
          console.log('done: \n', doc);
        }
        else {
          console.log(err.name, err.message);
        }
    });
}

testInsert();
