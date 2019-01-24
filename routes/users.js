const express	=	require('express');
const router =	express.Router();
const passport	=	require('passport');
const path = require('path');
const mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
const User = require('../models/users_model');

/* GET user home page. */
router.get('/', function(req, res, next) {
 res.render('index', {title: 'WestApps user admin', okMessage: req.flash('okMessage'), });
});

// get register / sign up
router.get('/register', function(req, res, next) {
  res.render('register', {
    registerForm: 'WestApps register form',
    errors: req.flash('errors'),
    okMessage: req.flash('okMessage'),
    username: req.flash('username'),
    email: req.flash('email'),
  });
});

// post register
router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({min: 6}),
  check('confirmPassword').isLength({min: 6}),
], (req, res) => {
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
        req.flash('okMessage', 'user registered');
        req.flash('username', result.username);
        res.redirect('/admin/console');
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
router.get('/login', function(req, res, next) {
   res.render('login',{
     user: req.user,
     loginForm: 'Login',
     errors: req.flash('errors'),
     okMessage: req.flash('okMessage'),
   });
});


router.post('/login',
  passport.authenticate('local', { failureRedirect: '/users/login', failureFlash:'Invalid Username or Password' }),
  function(req, res) {
    //If Local Strategy Comes True
  	console.log('Authentication Successful');
  	req.flash('okMessage','You are Logged In');
    res.render('console', {user: req.user.username, });
});


// user logout
router.get('/logout', function(req,res) {
	req.logout();
	req.flash('okMessage','You have logged out');
	res.redirect('/users');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

// to do
//admin Console
router.get('/admin/console', function(req, res){
  let user = req.body.username;
  res.render('console', {user: user});
});

module.exports = router;
