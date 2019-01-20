var mongoose = require('mongoose');

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
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  time: String,

});
// a collection named users will be created in mongodb.
module.exports = mongoose.model('Users', UserSchema);
