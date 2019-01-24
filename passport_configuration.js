var passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    mongoose = require("mongoose"),
    User = mongoose.model("Users");
// var Users =	require('./models/users_model');



passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email.toLowerCase() }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, {message: "Unknown user: " + username}); }
      if (!user.verifyPassword(password)) { return done(null, false, {message: "password does not match"}); }
      return done(null, user, {message: "user authentication succeeded"});
    });
  }
));

// Creates the data necessary to store in the session cookie
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Reads the session cookie to determine the user from a user ID
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
