var express	=	require('express');
var router =	express.Router();
var UserSchema =	require('../models/users_model');
var bcrypt =	require('bcrypt');
var passport	=	require('passport');
var localStrategy	=	require('passport-local').Strategy;
var dbs = require('../dbconnection/dbconnection.js');
dbs.mongodbConnection();

router.get('/register', function(req, res, next) {
 res.render('register',{'title': 'Register'});
});

router.post('/register',function(req,res,next) {

	//Get Form Values
	var name 			=	 req.body.name;
	var email 			=	 req.body.email;
	var username 		=	 req.body.username;
	var password 		=	 req.body.password;
	var confirmPassword	=	 req.body.confirmPassword;


		//form Validation using Express-Validator
	req.checkBody( 'name','Name Field is Required').notEmpty();
	req.checkBody( 'email','Email Field is Required').notEmpty();
	req.checkBody('email','Email not Valid').isEmail();
	req.checkBody('username','Username Field is Required').notEmpty();
	req.checkBody('password','Password Field is Required').notEmpty();
	req.checkBody('confirmPassword','Passwords do not Match').equals(req.body.password);

	//Check for Errors
	var errors = req.validationErrors();

	if(errors) {
		res.render('register',{
			errors 			: 	errors,
			name 			: 	name,
			email 			: 	email,
			username 		: 	username,
			password 		: 	password,
			confirmPassword : 	confirmPassword
		});
	} else {
		//CReating a MOdal for New User
		// var newUser	= new User({
		// 	name 		: 	name,
		// 	email 		: 	email,
		// 	username 	: 	username,
		// 	password 	: 	password,
		// 	profile 	:   profileImageName
		});

		//Create User
		// console.log( newUser );

		var salt = 10;

		bcrypt.hash(newUser.password,salt, function(err,hash) {
			if(err) throw err;

			//Set Hashed Password
			newUser.password = hash;

			//Create New User
			newUser.save(newUser,function(err,user) {
				if(err)  throw err;
				console.log(user);
			});

			//Success Message
			req.flash('success','You are now registered and may log in');

			res.location('/');
			res.redirect('/');
			});
	}

});
