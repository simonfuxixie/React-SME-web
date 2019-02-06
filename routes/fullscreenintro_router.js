'use strict';
var express	=	require('express');
var fullscreenintroRouter =	express.Router();
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var FullscreenIntro =	require('../models/webcontent/fullscreenintro_model');
const isAuthenticated = require('./isauthenticated');

// add or edit
fullscreenintroRouter.get('/', (req, res) => {
    res.render("fullscreenintro/add_or_edit", {
        title: "Insert FullscreenIntro"
    });
});
//insert or update
fullscreenintroRouter.post('/', (req, res) => {
  if (req.body._id == '') {
    insertRecord(req, res);
    } else {
      updateRecord(req, res);
    }
});
// show info
fullscreenintroRouter.get('/list', (req, res) => {
    FullscreenIntro.find((err, recordes) => {
        if (!err) {
            res.render("fullscreenintro/fullscreenintro_list", {
              errors: req.flash('errors'),
              list: recordes,
            });
        }
        else {
            console.log('Error in retrieving fullscreenintro list :' + err);
            res.render("fullscreenintro/fullscreenintro_list", {
                errors: [err.name, err.message],
            });
        }
    });
});

//edit/update specific info
fullscreenintroRouter.get('/:id', (req, res) => {
    FullscreenIntro.findById(req.params.id, (err, doc) => {
      //console.log(doc);
      if (!err) {
        res.render("fullscreenintro/add_or_edit", {
            title: "Update FullscreenIntro",
            fullscreenintro: doc,
        });
      }
      else {
        res.render("fullscreenintro/fullscreenintro_list", {
            errors: [err.name, err.message],
        });
      }
    });
});

//delete specific info
fullscreenintroRouter.get('/delete/:id', (req, res) => {
  FullscreenIntro.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/admin/fullscreenintro/list');
    }
    else {
      res.render("fullscreenintro/fullscreenintro_list", {
          errors: [err.name, err.message],
      });
    }
  });
});

// functions 
const getBodyInfo = (req, res) => {
  let fullscreenintroInfo = {
    title: req.body.title,
    content: req.body.content,
  }
  return fullscreenintroInfo;
}

const insertRecord = (req, res) => {
    let fullscreenintroInfo = getBodyInfo(req, res);
    const fullscreenintro = new FullscreenIntro(fullscreenintroInfo);
    fullscreenintro.save((err, doc) => {
        if (!err) {
          console.log(fullscreenintroInfo);
          req.flash('title','Full screen intro' );
          // req.flash('username', req.user.username); //passport
          res.redirect('fullscreenintro/list');
        }
        else {
          // console.log(err.name);
          if (err.name == 'ValidationError') {
              handleValidationError(err, req.body);
              res.render("fullscreenintro/add_or_edit", {
                  title: "Insert FullscreenIntro",
                  fullscreenintro: req.body,
              });
          }
          else {
            console.log('Error during record insertion : ' + err);
          }

      }
    });
}

const updateRecord = (req, res) => {
    let updatedInfo = getBodyInfo(req, res);
    FullscreenIntro.findOneAndUpdate(
      { _id: req.body._id },
      updatedInfo,
      { new: true },
      (err, doc) => {
        if (!err) { res.redirect('fullscreenintro/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("fullscreenintro/add_or_edit", {
                    title: 'Update FullscreenIntro',
                    fullscreenintro: req.body,
                    errors: [err.name, err.message],
                });
            }
            else {
              console.log('Error during record update : ' + err);
              res.render("fullscreenintro/add_or_edit", {
                  title: 'Update FullscreenIntro',
                  fullscreenintro: req.body,
                  errors: [err.name, err.message],
              });
            }
        }
    });
}

const handleValidationError = (err, body) => {
    for (let field in err.errors) {
        switch (err.errors[field].path) {
            case 'title':
                body['title_error'] = err.errors[field].message;
                break;
            case 'content':
                body['content_error'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = fullscreenintroRouter;
