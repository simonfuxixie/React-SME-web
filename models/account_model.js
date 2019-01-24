var mongoose = require('mongoose'),
    passport = require("passport");
// the passport-local-mongoose package automatically takes care of salting and hashing the password for us.
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    minlength: 6,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: false,
    required: false,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  time: String,

});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email', usernameLowerCase: 'true', });

mongoose.model("account", UserSchema);
// a collection named users will be created in mongodb.
module.exports = mongoose.model('account', UserSchema);
