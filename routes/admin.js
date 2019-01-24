var express	=	require('express');
var router =	express.Router();
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var Users =	require('../models/users_model');


/* GET user home page. */
router.get('/console', function(req, res, next) {
 res.render('console', {
   title: 'WestApps console',
   okMessage: req.flash('okMessage'),
   username: req.flash('username'),
 });
});


// user logout
router.get('/logout', function(req,res) {
	req.logout();
	req.flash('okMessage','You have logged out');
	res.redirect('/');
});



module.exports = router;
