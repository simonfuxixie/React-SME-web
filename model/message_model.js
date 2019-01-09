const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
const messageSchema = new Schema({
  Name: String,
  Email: String,
  Phone: String,
  Message: String,
});
const ContactMessage = mongoose.model('Contact Message', messageSchema);
module.exports = ContactMessage;
