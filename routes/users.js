const express	=	require('express');
const usersRouter =	express.Router();
const passport	=	require('passport');
const path = require('path');
const mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
const User = require('../models/users_model');
const isAuthenticated = require('./isauthenticated');

/* GET user home page. */
usersRouter.get('/', function(req, res, next) {
  // console.log('req.user: \n' + req.user, 'req.isAuthenticated(): ' + req.isAuthenticated())
  res.render('index', {
    title: 'WestApps',
    okMessage: req.flash('okMessage'),
    username: req.flash('username'),
  });
});

// get register / sign up
usersRouter.get('/register', function(req, res, next) {
  res.render('register', {
    registerForm: 'WestApps register form',
    errors: req.flash('errors'),
    username: req.flash('username'),
    email: req.flash('email'),
  });
});

// post register
usersRouter.post('/register', [
  check('email').isEmail(),
  check('password').isLength({min: 6}),
  check('confirmPassword').isLength({min: 6}),
], (req, res, next) => {
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
  });
  const errors = validationResult(req);
  let errorsList = [];
  if (!errors.isEmpty()) {
    console.log(errors.array());
    for (let i = 0; i < errors.array().length; i ++) {
      let param = errors.array()[i].param;
      let msg = errors.array()[i].msg;
      if (param == 'confirmPassword') {
        msg = 'Confirm password does not match password.';
      }
      errorsList.push(`${param} : ${msg} `);
    }
    req.flash('errors',errorsList);
    req.flash('username', req.body.username);
    req.flash('email', req.body.email);
    res.redirect('/users/register');
  } else {
    let userInfo = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        registerTime: req.body.registerTime,
        active: true,
        }
    console.log('registering user: \n', userInfo);
    User.register(new User(userInfo), userInfo.password)
      .then(result => {
        req.flash('okMessage', 'You are now registered');
        req.flash('username', result.username);
        res.redirect('/users');
      })
      .catch(err => {
        req.flash('errors',err.message);
        req.flash('username', req.body.username);
        req.flash('email', req.body.email);
        res.redirect('/users/register');
      });
    }
});

// user login and authentication
usersRouter.get('/login', function(req, res, next) {
  res.render('login',{
     loginForm: 'Login',
     errors: req.flash('errors'),
   });
});


// usersRouter.post('/login',
//   passport.authenticate('local', {failureRedirect: '/users/login', } ),
//   function(req, res, next) {
//     //If Local Strategy Comes True
//   	console.log('Authentication Successful');
//     req.flash('okMessage','You are Logged In');
//     req.flash('username',req.user.username);
//     res.redirect('/admin/console');
// });

usersRouter.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info){
    if (err) {
      req.flash('errors', err);
      return res.redirect('/users/login');
    }
    if (!user) {
      req.flash('errors', 'invalid user or password');
      return res.redirect('/users/login');
    }
    req.logIn(user, function(err){
      if (err) {
        req.flash('errors', err.toString());
        return res.redirect('/users/login');
      }
      req.flash('okMessage', 'You are now logged in');
      req.flash('username', req.user.username);
      return res.redirect('/admin/console');
    });
  })(req, res, next);
});


// user logout
usersRouter.get('/logout', function(req,res,next) {
	req.logout();
	req.flash('okMessage','You have logged out');
	res.redirect('/');
});



module.exports = usersRouter;
