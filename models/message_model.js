var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var messageSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  time: String,
});
// will create a collection named contactmessages
var ContactMessage = mongoose.model('ContactMessage', messageSchema);
module.exports = ContactMessage;
