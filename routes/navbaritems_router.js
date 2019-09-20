var express	=	require('express');
var navbaritemsRouter =	express.Router();
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var NavbarItems =	require('../models/webcontent/navbaritems_model');
const isAuthenticated = require('./isauthenticated');


navbaritemsRouter.get('/', (req, res, next) => {
    res.render("navbaritems/add_or_edit", {
        title: "Insert NavbarItems"
    });
});

navbaritemsRouter.post('/', (req, res, next) => {
  if (req.body._id == '') {
    insertRecord(req, res);
    } else {
      updateRecord(req, res);
    }
});

navbaritemsRouter.get('/list', (req, res, next) => {
    NavbarItems.find((err, recordes) => {
        if (!err) {
            res.render("navbaritems/navbaritems_list", {
              errors: req.flash('errors'),
              list: recordes,
            });
        }
        else {
            console.log('Error in retrieving navbaritems list :' + err);
            next(err);
        }
    });
});


navbaritemsRouter.get('/:id', (req, res, next) => {
    NavbarItems.findById(req.params.id, (err, doc) => {
      // console.log(doc.nav_subitem[0]);
      if (!err) {
        res.render("navbaritems/add_or_edit", {
            title: "Update NavbarItems",
            navbaritems: doc,
        });
      }
      else {
        next(err);
      }
    });
});

navbaritemsRouter.get('/delete/:id', (req, res, next) => {
  NavbarItems.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/admin/navbaritems/list');
    }
    else {
      next(err);
    }
  });
});

navbaritemsRouter.get('/subitems/delete/:parentid/:subdocid',
  async (req, res, next) => {
    deleteSubitem(req, res);
});


function getBodyInfo (req, res) {
  let reqBody = req.body;
  let nav_subitem_list = [];
  for (let key in reqBody) {
    if (key.includes('nav_subitem_name_')) {
      let subi = {};
      let key2 = `nav_subitem_url_${key.slice(-1)}`;
      // console.log(key2);
      if (req.body[key] && req.body[key2]) {
        subi.name  = req.body[key];
        subi.url  = req.body[key2];
        nav_subitem_list.push(subi);
      }
      else {
        continue;
      }
    }
    else {
      continue;
    }
  }
  let navbaritemsInfo = {
    nav_item_name: req.body.nav_item_name,
    nav_item_url: req.body.nav_item_url,
    nav_subitem: nav_subitem_list,
  }
  return navbaritemsInfo;
}

function insertRecord(req, res) {
    let navbaritemsInfo = getBodyInfo(req, res);
    const navbaritems = new NavbarItems(navbaritemsInfo);
    navbaritems.save((err, doc) => {
        if (!err) {
          console.log(navbaritemsInfo);
          req.flash('title','WestApps console' );
          // req.flash('username', req.user.username); //passport
          res.redirect('navbaritems/list');
        }
        else {
          // console.log(err.name);
          if (err.name == 'ValidationError') {
              handleValidationError(err, req.body);
              res.render("navbaritems/add_or_edit", {
                  title: "Insert NavbarItems",
                  navbaritems: req.body,
              });
          }
          else {
            console.log('Error during record insertion : ' + err);
            next(err);
          }

      }
    });
}

function updateRecord(req, res, next) {
    let updatedInfo = getBodyInfo(req, res);
    NavbarItems.findOneAndUpdate(
      { _id: req.body._id },
      updatedInfo,
      { new: true },
      (err, doc) => {
        if (!err) { res.redirect('navbaritems/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("navbaritems/add_or_edit", {
                    title: 'Update NavbarItems',
                    navbaritems: req.body,
                    errors: [err.name, err.message],
                });
            }
            else {
              console.log('Error during record update : ' + err);
              next(err);
            }
        }
    });
}

async function deleteSubitem (req, res, next) {
  try {
    let navbaritem = await NavbarItems.findOne({_id: req.params.parentid}, );
    if(!navbaritem){
      req.flash('errors', 'item not found')
      return res.redirect('/admin/navbaritems/list');
    }else{
      await console.log('starting to fetch subdoc.....');
      try {
        let result = await navbaritem.nav_subitem.id(req.params.subdocid);
        if (!result) {
          req.flash('errors', 'subitem not found')
          res.redirect('/admin/navbaritems/list');
        }else {
          navbaritem.nav_subitem.id(req.params.subdocid).remove();
          navbaritem.save(function(err){
            if(err){
              req.flash('errors', [err.name, err.message]);
              res.redirect('/admin/navbaritems/list');
            }
            res.redirect('/admin/navbaritems/list');
          });
        }
      } catch(err) {
        req.flash('errors', [err.name, err.message]);
        res.redirect('/admin/navbaritems/list');
      }
    }
  } catch(err) {
      req.flash('errors', [err.name, err.message]);
      res.redirect('/admin/navbaritems/list');
  }
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'nav_item_name':
                body['nav_item_name_error'] = err.errors[field].message;
                break;
            case 'nav_item_url':
                body['nav_item_url_error'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = navbaritemsRouter;
