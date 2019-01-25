var express	=	require('express');
var adminRouter =	express.Router();
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var Users =	require('../models/users_model');
const isAuthenticated = require('./isauthenticated');

/* GET user home page. */
adminRouter.get('/console', isAuthenticated, function(req, res, next) {
 res.render('console', {
   title: 'WestApps console',
   user: req.user.username,
   okMessage: req.flash('okMessage'),
   username: req.flash('username'),
 });
});


// user logout
adminRouter.get('/logout', function(req,res) {
	req.logout();
	req.flash('okMessage','You have logged out');
	res.redirect('/');
});



module.exports = adminRouter;
