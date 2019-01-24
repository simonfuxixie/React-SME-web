const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: false,
  },
  registerTime: String,
  active: Boolean,
});


UserSchema.plugin(passportLocalMongoose, {
  usernameField:'email',
  usernameUnique :true,
  hashField: 'hashedPassword',
  usernameLowerCase: true,
 });

// a collection named P01_Users will be created in mongodb.
module.exports = mongoose.model('P01_Users', UserSchema);
