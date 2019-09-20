'use strict';
const express	=	require('express');
const adminRouter =	express.Router();
const mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
const Users =	require('../models/users_model');
const isAuthenticated = require('./isauthenticated');
const navbaritemsRouter = require('./navbaritems_router');
const fullscreenintroRouter = require('./fullscreenintro_router');

adminRouter.use('/navbaritems', navbaritemsRouter);
adminRouter.use('/fullscreenintro', fullscreenintroRouter);

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
adminRouter.get('/logout', function(req, res, next) {
	req.logout();
	req.flash('okMessage','You have logged out');
	res.redirect('/');
});



module.exports = adminRouter;
