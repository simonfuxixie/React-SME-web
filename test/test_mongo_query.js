// connect to mongodb
var dbs = require('../dbconnection/dbconnection.js');
dbs.mongodbConnection();


var Users =	require('../models/users_model');

var handleError = function (err){
  console.log(err);
}
// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// Users.findOne({ 'email': 'Greenspanx.Hamilton@hotmail.com'}, function (err, users) {
//   if (err) {
//     throw err;
//   }
//   if (!users) {
//     return console.log('Unknown User');
//   }
//   console.log(users.username, users.password, users.id, users);
//
//
// });

Users.findById('5c44757d3dad4f1fd8500053', function (err, users) {
  if (err) {
    throw err;
  }
  if (!users) {
    return console.log('Unknown User');
  }
  console.log(users.username, users.password, users.id, users);


});
