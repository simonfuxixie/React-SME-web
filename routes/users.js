var express	=	require('express');
var router =	express.Router();
var bcrypt =	require('bcrypt');
var passport	=	require('passport');
var localStrategy	=	require('passport-local').Strategy;
var path = require('path');
var mongoose = require('mongoose');
const { check, body, validationResult } = require('express-validator/check');
var Users =	require('../models/users_model');

/* GET user home page. */
router.get('/', function(req, res, next) {
 res.render('index', {title: 'WestApps register'});
});

// render register page
router.get('/register', function(req, res, next) {
  res.render('register', {
    registerForm: 'WestApps register form',
    errors: req.flash('errors'),
    okMessage: req.flash('okMessage'),
    username: req.flash('username'),
    email: req.flash('email'),
  });
});

// how to avoid deep if--else?
// authentication : compare hashed password with db stored password
// GET /assets/bootstrap/js/bootstrap.min.js.map 404 3.986 ms - 179 why we need this .map file?
router.post('/register',  [check('email').isEmail(), check('password').isLength({min: 6}), check('confirmPassword').isLength({min: 6}), ],
(req, res) => {
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
      time: req.body.time,
      }
    console.log(userInfo);

    Users.findOne({ 'email': userInfo.email }, function (err, user) {
      if (err) {
        return console.log(err);
      }
      if (user) {
        req.flash('errors','email already exist');
        req.flash('username', req.body.username);
        req.flash('email', req.body.email);
        res.redirect('/users/register');
      }else {
        Users.findOne({'username': userInfo.username}, function(err, user){
          if(user){
            req.flash('errors','user name already exist');
            req.flash('username', req.body.username);
            req.flash('email', req.body.email);
            res.redirect('/users/register');
            } else {
              var salt = 10;
              const newUser = new Users(userInfo);
              bcrypt.hash(newUser.password, salt, function(err, hash){
                if (err) throw err;
                newUser.password = hash;
                newUser.save(newUser,function(err,user) {
                  if(err){
                    req.flash('errors','save user error, please submit again');
                    req.flash('username', req.body.username);
                    req.flash('email', req.body.email);
                    res.redirect('/users/register');
                  } else {
                    req.flash('okMessage','user registered successfully');
                    req.flash('username', req.body.username);
                    req.flash('email', req.body.email);
                    res.redirect('/users/register');
                    console.log("User: " + user + " created");
                  }
                });
              });
            }
          });
      }
    });
  }
});





// router.post('/register',function(req,res) {
// 	//Get Form Values
//   var registerInfo = req.body;
//   let userInfo = {
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     time: req.body.time,
//   }
//
//   body('email').custom(value => {
//     return User.findUserByEmail(value).then(user => {
//       if (user) {
//         return Promise.reject('E-mail already in use');
//         }
//       });
//     });
//
//   console.log(registerInfo, body('email'));
// 	//form Validation using Express-Validator
// 	check(req.body.email).isEmail();
// 	check(req.body.username).not().isEmpty();
// 	check(req.body.password).isLength({ min: 6 });
// 	check(req.body.password).equals(req.body.confirmPassword);
//
// 	//Check for Errors
// 	const errors = validationResult(req);
//
// 	if(!errors.isEmpty()) {
// 		return res.status(422).json({ errors: errors.array() });
// 	} else {
//     //Create a Model for New User
//     const newUser = new User(userInfo);
//     var salt = 10;
// 		bcrypt.hash(newUser.password,salt, function(err,hash) {
// 			if(err) {
//         res.send(err);
//       }
// 			//Set Hashed Password
// 			newUser.password = hash;
// 			//Create New User
// 			newUser.save(newUser,function(err,user) {
// 				if(err){
//           res.send(err);
//         }
// 				console.log(user);
// 			});
//
// 			//Success Message
//       res.send('Your user account created.')
// 			console.log('User now registered and may log in');
// 			// res.location('/admin');
// 			// res.redirect('/');
// 			});
//     }
// 	});

router.get('/login', function(req, res, next) {
   res.render('login',{'title': 'Login'});
});

//Flow (IV) [Passport creating a Session for Current Logged in User By Serializing it.]
passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//Flow (III)
var comparePassword = function(candidatePassword,hash,callback) {

	bcrypt.compare(candidatePassword,hash,function(err, isMatch) {
		if(err) return callback(err);
		callback(null,isMatch);
	});

}


//Flow (II)
passport.use(new localStrategy(
	function(username, password, done) {
		User.find({username : username}, function(err,user) {

			if(err) throw err;
			if(user.length == 0) {
				console.log('Unknown User');
				return done(null,false,{message: 'Unknown User'});
			}

			comparePassword(password,user[0].password, function(err,isMatch) {
				if(err) throw err;
				if(isMatch) {
					return done(null, user);
					res.redirect('/');
				} else {
					console.log('Invalid Password');
					return done(null, false, {message: 'Invalid Password'});
				}
			})
		});
}));

//Flow (I)
router.post('/login',passport.authenticate('local',{failureRedirect:'/users/login',failureFlash:'Invalid Username or Password'}), function(req,res) {

	//If Local Strategy Comes True
	console.log('Authentication Successful');
	req.flash('success','You are Logged In');
	res.redirect('/');

});

router.get('/logout', function(req,res) {
	req.logout();
	req.flash('success','You have logged out');
	res.redirect('/users/login');
});


module.exports = router;
