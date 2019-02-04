const mongoose = require('mongoose');

var FullscreenintroSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// a collection named fullscreenintro will be created in mongodb.
module.exports = mongoose.model('fullscreenintro', FullscreenintroSchema);
